(window.webpackJsonp = window.webpackJsonp || []).push([
    [78], {
        1549: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
                    return e.apply(t, r)
                }
            }
        },
        1550: function(e, t, r) {
            "use strict";
            var n = r(175);

            function o(e) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, r) {
                if (!t) return e;
                var i;
                if (r) i = r(t);
                else if (n.isURLSearchParams(t)) i = t.toString();
                else {
                    var s = [];
                    n.forEach(t, (function(e, t) {
                        null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, (function(e) {
                            n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e))
                        })))
                    })), i = s.join("&")
                }
                if (i) {
                    var u = e.indexOf("#"); - 1 !== u && (e = e.slice(0, u)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
                }
                return e
            }
        },
        1551: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        },
        1552: function(e, t, r) {
            "use strict";
            var n = r(175),
                o = r(2612),
                i = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function s(e, t) {
                !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var u, c = {
                adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (u = r(1553)), u),
                transformRequest: [function(e, t) {
                    return o(t, "Accept"), o(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                }
            };
            c.headers = {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }, n.forEach(["delete", "get", "head"], (function(e) {
                c.headers[e] = {}
            })), n.forEach(["post", "put", "patch"], (function(e) {
                c.headers[e] = n.merge(i)
            })), e.exports = c
        },
        1553: function(e, t, r) {
            "use strict";
            var n = r(175),
                o = r(2613),
                i = r(1550),
                s = r(2615),
                u = r(2618),
                c = r(2619),
                a = r(1554);
            e.exports = function(e) {
                return new Promise((function(t, f) {
                    var l = e.data,
                        p = e.headers;
                    n.isFormData(l) && delete p["Content-Type"];
                    var h = new XMLHttpRequest;
                    if (e.auth) {
                        var d = e.auth.username || "",
                            m = e.auth.password || "";
                        p.Authorization = "Basic " + btoa(d + ":" + m)
                    }
                    var g = s(e.baseURL, e.url);
                    if (h.open(e.method.toUpperCase(), i(g, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h.onreadystatechange = function() {
                            if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                                var r = "getAllResponseHeaders" in h ? u(h.getAllResponseHeaders()) : null,
                                    n = {
                                        data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                                        status: h.status,
                                        statusText: h.statusText,
                                        headers: r,
                                        config: e,
                                        request: h
                                    };
                                o(t, f, n), h = null
                            }
                        }, h.onabort = function() {
                            h && (f(a("Request aborted", e, "ECONNABORTED", h)), h = null)
                        }, h.onerror = function() {
                            f(a("Network Error", e, null, h)), h = null
                        }, h.ontimeout = function() {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), f(a(t, e, "ECONNABORTED", h)), h = null
                        }, n.isStandardBrowserEnv()) {
                        var w = r(2620),
                            v = (e.withCredentials || c(g)) && e.xsrfCookieName ? w.read(e.xsrfCookieName) : void 0;
                        v && (p[e.xsrfHeaderName] = v)
                    }
                    if ("setRequestHeader" in h && n.forEach(p, (function(e, t) {
                            void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : h.setRequestHeader(t, e)
                        })), n.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials), e.responseType) try {
                        h.responseType = e.responseType
                    } catch (t) {
                        if ("json" !== e.responseType) throw t
                    }
                    "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                        h && (h.abort(), f(e), h = null)
                    })), void 0 === l && (l = null), h.send(l)
                }))
            }
        },
        1554: function(e, t, r) {
            "use strict";
            var n = r(2614);
            e.exports = function(e, t, r, o, i) {
                var s = new Error(e);
                return n(s, t, r, o, i)
            }
        },
        1555: function(e, t, r) {
            "use strict";
            var n = r(175);
            e.exports = function(e, t) {
                t = t || {};
                var r = {},
                    o = ["url", "method", "params", "data"],
                    i = ["headers", "auth", "proxy"],
                    s = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
                n.forEach(o, (function(e) {
                    void 0 !== t[e] && (r[e] = t[e])
                })), n.forEach(i, (function(o) {
                    n.isObject(t[o]) ? r[o] = n.deepMerge(e[o], t[o]) : void 0 !== t[o] ? r[o] = t[o] : n.isObject(e[o]) ? r[o] = n.deepMerge(e[o]) : void 0 !== e[o] && (r[o] = e[o])
                })), n.forEach(s, (function(n) {
                    void 0 !== t[n] ? r[n] = t[n] : void 0 !== e[n] && (r[n] = e[n])
                }));
                var u = o.concat(i).concat(s),
                    c = Object.keys(t).filter((function(e) {
                        return -1 === u.indexOf(e)
                    }));
                return n.forEach(c, (function(n) {
                    void 0 !== t[n] ? r[n] = t[n] : void 0 !== e[n] && (r[n] = e[n])
                })), r
            }
        },
        1556: function(e, t, r) {
            "use strict";

            function n(e) {
                this.message = e
            }
            n.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, n.prototype.__CANCEL__ = !0, e.exports = n
        },
        175: function(e, t, r) {
            "use strict";
            var n = r(1549),
                o = Object.prototype.toString;

            function i(e) {
                return "[object Array]" === o.call(e)
            }

            function s(e) {
                return void 0 === e
            }

            function u(e) {
                return null !== e && "object" == typeof e
            }

            function c(e) {
                return "[object Function]" === o.call(e)
            }

            function a(e, t) {
                if (null != e)
                    if ("object" != typeof e && (e = [e]), i(e))
                        for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
                    else
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
            }
            e.exports = {
                isArray: i,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === o.call(e)
                },
                isBuffer: function(e) {
                    return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: u,
                isUndefined: s,
                isDate: function(e) {
                    return "[object Date]" === o.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === o.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === o.call(e)
                },
                isFunction: c,
                isStream: function(e) {
                    return u(e) && c(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                },
                forEach: a,
                merge: function e() {
                    var t = {};

                    function r(r, n) {
                        "object" == typeof t[n] && "object" == typeof r ? t[n] = e(t[n], r) : t[n] = r
                    }
                    for (var n = 0, o = arguments.length; n < o; n++) a(arguments[n], r);
                    return t
                },
                deepMerge: function e() {
                    var t = {};

                    function r(r, n) {
                        "object" == typeof t[n] && "object" == typeof r ? t[n] = e(t[n], r) : t[n] = "object" == typeof r ? e({}, r) : r
                    }
                    for (var n = 0, o = arguments.length; n < o; n++) a(arguments[n], r);
                    return t
                },
                extend: function(e, t, r) {
                    return a(t, (function(t, o) {
                        e[o] = r && "function" == typeof t ? n(t, r) : t
                    })), e
                },
                trim: function(e) {
                    return e.replace(/^\s*/, "").replace(/\s*$/, "")
                }
            }
        },
        2606: function(e, t, r) {
            e.exports = r(2607)
        },
        2607: function(e, t, r) {
            "use strict";
            var n = r(175),
                o = r(1549),
                i = r(2608),
                s = r(1555);

            function u(e) {
                var t = new i(e),
                    r = o(i.prototype.request, t);
                return n.extend(r, i.prototype, t), n.extend(r, t), r
            }
            var c = u(r(1552));
            c.Axios = i, c.create = function(e) {
                return u(s(c.defaults, e))
            }, c.Cancel = r(1556), c.CancelToken = r(2621), c.isCancel = r(1551), c.all = function(e) {
                return Promise.all(e)
            }, c.spread = r(2622), e.exports = c, e.exports.default = c
        },
        2608: function(e, t, r) {
            "use strict";
            var n = r(175),
                o = r(1550),
                i = r(2609),
                s = r(2610),
                u = r(1555);

            function c(e) {
                this.defaults = e, this.interceptors = {
                    request: new i,
                    response: new i
                }
            }
            c.prototype.request = function(e) {
                "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = u(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t = [s, void 0],
                    r = Promise.resolve(e);
                for (this.interceptors.request.forEach((function(e) {
                        t.unshift(e.fulfilled, e.rejected)
                    })), this.interceptors.response.forEach((function(e) {
                        t.push(e.fulfilled, e.rejected)
                    })); t.length;) r = r.then(t.shift(), t.shift());
                return r
            }, c.prototype.getUri = function(e) {
                return e = u(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }, n.forEach(["delete", "get", "head", "options"], (function(e) {
                c.prototype[e] = function(t, r) {
                    return this.request(n.merge(r || {}, {
                        method: e,
                        url: t
                    }))
                }
            })), n.forEach(["post", "put", "patch"], (function(e) {
                c.prototype[e] = function(t, r, o) {
                    return this.request(n.merge(o || {}, {
                        method: e,
                        url: t,
                        data: r
                    }))
                }
            })), e.exports = c
        },
        2609: function(e, t, r) {
            "use strict";
            var n = r(175);

            function o() {
                this.handlers = []
            }
            o.prototype.use = function(e, t) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t
                }), this.handlers.length - 1
            }, o.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }, o.prototype.forEach = function(e) {
                n.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }))
            }, e.exports = o
        },
        2610: function(e, t, r) {
            "use strict";
            var n = r(175),
                o = r(2611),
                i = r(1551),
                s = r(1552);

            function u(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            e.exports = function(e) {
                return u(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                    delete e.headers[t]
                })), (e.adapter || s.adapter)(e).then((function(t) {
                    return u(e), t.data = o(t.data, t.headers, e.transformResponse), t
                }), (function(t) {
                    return i(t) || (u(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                }))
            }
        },
        2611: function(e, t, r) {
            "use strict";
            var n = r(175);
            e.exports = function(e, t, r) {
                return n.forEach(r, (function(r) {
                    e = r(e, t)
                })), e
            }
        },
        2612: function(e, t, r) {
            "use strict";
            var n = r(175);
            e.exports = function(e, t) {
                n.forEach(e, (function(r, n) {
                    n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n])
                }))
            }
        },
        2613: function(e, t, r) {
            "use strict";
            var n = r(1554);
            e.exports = function(e, t, r) {
                var o = r.config.validateStatus;
                !o || o(r.status) ? e(r) : t(n("Request failed with status code " + r.status, r.config, null, r.request, r))
            }
        },
        2614: function(e, t, r) {
            "use strict";
            e.exports = function(e, t, r, n, o) {
                return e.config = t, r && (e.code = r), e.request = n, e.response = o, e.isAxiosError = !0, e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }, e
            }
        },
        2615: function(e, t, r) {
            "use strict";
            var n = r(2616),
                o = r(2617);
            e.exports = function(e, t) {
                return e && !n(t) ? o(e, t) : t
            }
        },
        2616: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
            }
        },
        2617: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        },
        2618: function(e, t, r) {
            "use strict";
            var n = r(175),
                o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, r, i, s = {};
                return e ? (n.forEach(e.split("\n"), (function(e) {
                    if (i = e.indexOf(":"), t = n.trim(e.substr(0, i)).toLowerCase(), r = n.trim(e.substr(i + 1)), t) {
                        if (s[t] && o.indexOf(t) >= 0) return;
                        s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([r]) : s[t] ? s[t] + ", " + r : r
                    }
                })), s) : s
            }
        },
        2619: function(e, t, r) {
            "use strict";
            var n = r(175);
            e.exports = n.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    r = document.createElement("a");

                function o(e) {
                    var n = e;
                    return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                        href: r.href,
                        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                        host: r.host,
                        search: r.search ? r.search.replace(/^\?/, "") : "",
                        hash: r.hash ? r.hash.replace(/^#/, "") : "",
                        hostname: r.hostname,
                        port: r.port,
                        pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                    }
                }
                return e = o(window.location.href),
                    function(t) {
                        var r = n.isString(t) ? o(t) : t;
                        return r.protocol === e.protocol && r.host === e.host
                    }
            }() : function() {
                return !0
            }
        },
        2620: function(e, t, r) {
            "use strict";
            var n = r(175);
            e.exports = n.isStandardBrowserEnv() ? {
                write: function(e, t, r, o, i, s) {
                    var u = [];
                    u.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && u.push("expires=" + new Date(r).toGMTString()), n.isString(o) && u.push("path=" + o), n.isString(i) && u.push("domain=" + i), !0 === s && u.push("secure"), document.cookie = u.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        2621: function(e, t, r) {
            "use strict";
            var n = r(1556);

            function o(e) {
                if ("function" != typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) {
                    t = e
                }));
                var r = this;
                e((function(e) {
                    r.reason || (r.reason = new n(e), t(r.reason))
                }))
            }
            o.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, o.source = function() {
                var e;
                return {
                    token: new o((function(t) {
                        e = t
                    })),
                    cancel: e
                }
            }, e.exports = o
        },
        2622: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        },
        2652: function(e, t, r) {
            var n;
            ! function(o) {
                "use strict";
                var i, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    u = Math.ceil,
                    c = Math.floor,
                    a = "[BigNumber Error] ",
                    f = a + "Number primitive has more than 15 significant digits: ",
                    l = 1e14,
                    p = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    h = 1e9;

                function d(e) {
                    var t = 0 | e;
                    return e > 0 || e === t ? t : t - 1
                }

                function m(e) {
                    for (var t, r, n = 1, o = e.length, i = e[0] + ""; n < o;) {
                        for (r = 14 - (t = e[n++] + "").length; r--; t = "0" + t);
                        i += t
                    }
                    for (o = i.length; 48 === i.charCodeAt(--o););
                    return i.slice(0, o + 1 || 1)
                }

                function g(e, t) {
                    var r, n, o = e.c,
                        i = t.c,
                        s = e.s,
                        u = t.s,
                        c = e.e,
                        a = t.e;
                    if (!s || !u) return null;
                    if (r = o && !o[0], n = i && !i[0], r || n) return r ? n ? 0 : -u : s;
                    if (s != u) return s;
                    if (r = s < 0, n = c == a, !o || !i) return n ? 0 : !o ^ r ? 1 : -1;
                    if (!n) return c > a ^ r ? 1 : -1;
                    for (u = (c = o.length) < (a = i.length) ? c : a, s = 0; s < u; s++)
                        if (o[s] != i[s]) return o[s] > i[s] ^ r ? 1 : -1;
                    return c == a ? 0 : c > a ^ r ? 1 : -1
                }

                function w(e, t, r, n) {
                    if (e < t || e > r || e !== (e < 0 ? u(e) : c(e))) throw Error(a + (n || "Argument") + ("number" == typeof e ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
                }

                function v(e) {
                    return "[object Array]" == Object.prototype.toString.call(e)
                }

                function y(e) {
                    var t = e.c.length - 1;
                    return d(e.e / 14) == t && e.c[t] % 2 != 0
                }

                function b(e, t) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function E(e, t, r) {
                    var n, o;
                    if (t < 0) {
                        for (o = r + "."; ++t; o += r);
                        e = o + e
                    } else if (++t > (n = e.length)) {
                        for (o = r, t -= n; --t; o += r);
                        e += o
                    } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }(i = function e(t) {
                    var r, n, o, i, N, O, x, A, S, R = M.prototype = {
                            constructor: M,
                            toString: null,
                            valueOf: null
                        },
                        C = new M(1),
                        T = 20,
                        B = 4,
                        L = -7,
                        U = 21,
                        P = -1e7,
                        D = 1e7,
                        j = !1,
                        _ = 1,
                        k = 0,
                        q = {
                            decimalSeparator: ".",
                            groupSeparator: ",",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            fractionGroupSeparator: " ",
                            fractionGroupSize: 0
                        },
                        I = "0123456789abcdefghijklmnopqrstuvwxyz";

                    function M(e, t) {
                        var r, i, u, a, l, p, h, d, m = this;
                        if (!(m instanceof M)) return new M(e, t);
                        if (null == t) {
                            if (e instanceof M) return m.s = e.s, m.e = e.e, void(m.c = (e = e.c) ? e.slice() : e);
                            if ((p = "number" == typeof e) && 0 * e == 0) {
                                if (m.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (a = 0, l = e; l >= 10; l /= 10, a++);
                                    return m.e = a, void(m.c = [e])
                                }
                                d = e + ""
                            } else {
                                if (!s.test(d = e + "")) return o(m, d, p);
                                m.s = 45 == d.charCodeAt(0) ? (d = d.slice(1), -1) : 1
                            }(a = d.indexOf(".")) > -1 && (d = d.replace(".", "")), (l = d.search(/e/i)) > 0 ? (a < 0 && (a = l), a += +d.slice(l + 1), d = d.substring(0, l)) : a < 0 && (a = d.length)
                        } else {
                            if (w(t, 2, I.length, "Base"), d = e + "", 10 == t) return H(m = new M(e instanceof M ? e : d), T + m.e + 1, B);
                            if (p = "number" == typeof e) {
                                if (0 * e != 0) return o(m, d, p, t);
                                if (m.s = 1 / e < 0 ? (d = d.slice(1), -1) : 1, M.DEBUG && d.replace(/^0\.0*|\./, "").length > 15) throw Error(f + e);
                                p = !1
                            } else m.s = 45 === d.charCodeAt(0) ? (d = d.slice(1), -1) : 1;
                            for (r = I.slice(0, t), a = l = 0, h = d.length; l < h; l++)
                                if (r.indexOf(i = d.charAt(l)) < 0) {
                                    if ("." == i) {
                                        if (l > a) {
                                            a = h;
                                            continue
                                        }
                                    } else if (!u && (d == d.toUpperCase() && (d = d.toLowerCase()) || d == d.toLowerCase() && (d = d.toUpperCase()))) {
                                        u = !0, l = -1, a = 0;
                                        continue
                                    }
                                    return o(m, e + "", p, t)
                                }(a = (d = n(d, t, 10, m.s)).indexOf(".")) > - 1 ? d = d.replace(".", "") : a = d.length
                        }
                        for (l = 0; 48 === d.charCodeAt(l); l++);
                        for (h = d.length; 48 === d.charCodeAt(--h););
                        if (d = d.slice(l, ++h)) {
                            if (h -= l, p && M.DEBUG && h > 15 && (e > 9007199254740991 || e !== c(e))) throw Error(f + m.s * e);
                            if ((a = a - l - 1) > D) m.c = m.e = null;
                            else if (a < P) m.c = [m.e = 0];
                            else {
                                if (m.e = a, m.c = [], l = (a + 1) % 14, a < 0 && (l += 14), l < h) {
                                    for (l && m.c.push(+d.slice(0, l)), h -= 14; l < h;) m.c.push(+d.slice(l, l += 14));
                                    l = 14 - (d = d.slice(l)).length
                                } else l -= h;
                                for (; l--; d += "0");
                                m.c.push(+d)
                            }
                        } else m.c = [m.e = 0]
                    }

                    function F(e, t, r, n) {
                        var o, i, s, u, c;
                        if (null == r ? r = B : w(r, 0, 8), !e.c) return e.toString();
                        if (o = e.c[0], s = e.e, null == t) c = m(e.c), c = 1 == n || 2 == n && s <= L ? b(c, s) : E(c, s, "0");
                        else if (i = (e = H(new M(e), t, r)).e, u = (c = m(e.c)).length, 1 == n || 2 == n && (t <= i || i <= L)) {
                            for (; u < t; c += "0", u++);
                            c = b(c, i)
                        } else if (t -= s, c = E(c, i, "0"), i + 1 > u) {
                            if (--t > 0)
                                for (c += "."; t--; c += "0");
                        } else if ((t += i - u) > 0)
                            for (i + 1 == u && (c += "."); t--; c += "0");
                        return e.s < 0 && o ? "-" + c : c
                    }

                    function z(e, t) {
                        var r, n, o = 0;
                        for (v(e[0]) && (e = e[0]), r = new M(e[0]); ++o < e.length;) {
                            if (!(n = new M(e[o])).s) {
                                r = n;
                                break
                            }
                            t.call(r, n) && (r = n)
                        }
                        return r
                    }

                    function G(e, t, r) {
                        for (var n = 1, o = t.length; !t[--o]; t.pop());
                        for (o = t[0]; o >= 10; o /= 10, n++);
                        return (r = n + 14 * r - 1) > D ? e.c = e.e = null : r < P ? e.c = [e.e = 0] : (e.e = r, e.c = t), e
                    }

                    function H(e, t, r, n) {
                        var o, i, s, a, f, h, d, m = e.c,
                            g = p;
                        if (m) {
                            e: {
                                for (o = 1, a = m[0]; a >= 10; a /= 10, o++);
                                if ((i = t - o) < 0) i += 14,
                                s = t,
                                d = (f = m[h = 0]) / g[o - s - 1] % 10 | 0;
                                else if ((h = u((i + 1) / 14)) >= m.length) {
                                    if (!n) break e;
                                    for (; m.length <= h; m.push(0));
                                    f = d = 0, o = 1, s = (i %= 14) - 14 + 1
                                } else {
                                    for (f = a = m[h], o = 1; a >= 10; a /= 10, o++);
                                    d = (s = (i %= 14) - 14 + o) < 0 ? 0 : f / g[o - s - 1] % 10 | 0
                                }
                                if (n = n || t < 0 || null != m[h + 1] || (s < 0 ? f : f % g[o - s - 1]), n = r < 4 ? (d || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : d > 5 || 5 == d && (4 == r || n || 6 == r && (i > 0 ? s > 0 ? f / g[o - s] : 0 : m[h - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !m[0]) return m.length = 0,
                                n ? (t -= e.e + 1, m[0] = g[(14 - t % 14) % 14], e.e = -t || 0) : m[0] = e.e = 0,
                                e;
                                if (0 == i ? (m.length = h, a = 1, h--) : (m.length = h + 1, a = g[14 - i], m[h] = s > 0 ? c(f / g[o - s] % g[s]) * a : 0), n)
                                    for (;;) {
                                        if (0 == h) {
                                            for (i = 1, s = m[0]; s >= 10; s /= 10, i++);
                                            for (s = m[0] += a, a = 1; s >= 10; s /= 10, a++);
                                            i != a && (e.e++, m[0] == l && (m[0] = 1));
                                            break
                                        }
                                        if (m[h] += a, m[h] != l) break;
                                        m[h--] = 0, a = 1
                                    }
                                for (i = m.length; 0 === m[--i]; m.pop());
                            }
                            e.e > D ? e.c = e.e = null : e.e < P && (e.c = [e.e = 0])
                        }
                        return e
                    }
                    return M.clone = e, M.ROUND_UP = 0, M.ROUND_DOWN = 1, M.ROUND_CEIL = 2, M.ROUND_FLOOR = 3, M.ROUND_HALF_UP = 4, M.ROUND_HALF_DOWN = 5, M.ROUND_HALF_EVEN = 6, M.ROUND_HALF_CEIL = 7, M.ROUND_HALF_FLOOR = 8, M.EUCLID = 9, M.config = M.set = function(e) {
                        var t, r;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(a + "Object expected: " + e);
                            if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (w(r = e[t], 0, h, t), T = r), e.hasOwnProperty(t = "ROUNDING_MODE") && (w(r = e[t], 0, 8, t), B = r), e.hasOwnProperty(t = "EXPONENTIAL_AT") && (v(r = e[t]) ? (w(r[0], -h, 0, t), w(r[1], 0, h, t), L = r[0], U = r[1]) : (w(r, -h, h, t), L = -(U = r < 0 ? -r : r))), e.hasOwnProperty(t = "RANGE"))
                                if (v(r = e[t])) w(r[0], -h, -1, t), w(r[1], 1, h, t), P = r[0], D = r[1];
                                else {
                                    if (w(r, -h, h, t), !r) throw Error(a + t + " cannot be zero: " + r);
                                    P = -(D = r < 0 ? -r : r)
                                } if (e.hasOwnProperty(t = "CRYPTO")) {
                                if ((r = e[t]) !== !!r) throw Error(a + t + " not true or false: " + r);
                                if (r) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw j = !r, Error(a + "crypto unavailable");
                                    j = r
                                } else j = r
                            }
                            if (e.hasOwnProperty(t = "MODULO_MODE") && (w(r = e[t], 0, 9, t), _ = r), e.hasOwnProperty(t = "POW_PRECISION") && (w(r = e[t], 0, h, t), k = r), e.hasOwnProperty(t = "FORMAT")) {
                                if ("object" != typeof(r = e[t])) throw Error(a + t + " not an object: " + r);
                                q = r
                            }
                            if (e.hasOwnProperty(t = "ALPHABET")) {
                                if ("string" != typeof(r = e[t]) || /^.$|\.|(.).*\1/.test(r)) throw Error(a + t + " invalid: " + r);
                                I = r
                            }
                        }
                        return {
                            DECIMAL_PLACES: T,
                            ROUNDING_MODE: B,
                            EXPONENTIAL_AT: [L, U],
                            RANGE: [P, D],
                            CRYPTO: j,
                            MODULO_MODE: _,
                            POW_PRECISION: k,
                            FORMAT: q,
                            ALPHABET: I
                        }
                    }, M.isBigNumber = function(e) {
                        return e instanceof M || e && !0 === e._isBigNumber || !1
                    }, M.maximum = M.max = function() {
                        return z(arguments, R.lt)
                    }, M.minimum = M.min = function() {
                        return z(arguments, R.gt)
                    }, M.random = (i = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return c(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var t, r, n, o, s, f = 0,
                            l = [],
                            d = new M(C);
                        if (null == e ? e = T : w(e, 0, h), o = u(e / 14), j)
                            if (crypto.getRandomValues) {
                                for (t = crypto.getRandomValues(new Uint32Array(o *= 2)); f < o;)(s = 131072 * t[f] + (t[f + 1] >>> 11)) >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)), t[f] = r[0], t[f + 1] = r[1]) : (l.push(s % 1e14), f += 2);
                                f = o / 2
                            } else {
                                if (!crypto.randomBytes) throw j = !1, Error(a + "crypto unavailable");
                                for (t = crypto.randomBytes(o *= 7); f < o;)(s = 281474976710656 * (31 & t[f]) + 1099511627776 * t[f + 1] + 4294967296 * t[f + 2] + 16777216 * t[f + 3] + (t[f + 4] << 16) + (t[f + 5] << 8) + t[f + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, f) : (l.push(s % 1e14), f += 7);
                                f = o / 7
                            } if (!j)
                            for (; f < o;)(s = i()) < 9e15 && (l[f++] = s % 1e14);
                        for (e %= 14, (o = l[--f]) && e && (s = p[14 - e], l[f] = c(o / s) * s); 0 === l[f]; l.pop(), f--);
                        if (f < 0) l = [n = 0];
                        else {
                            for (n = -1; 0 === l[0]; l.splice(0, 1), n -= 14);
                            for (f = 1, s = l[0]; s >= 10; s /= 10, f++);
                            f < 14 && (n -= 14 - f)
                        }
                        return d.e = n, d.c = l, d
                    }), n = function() {
                        function e(e, t, r, n) {
                            for (var o, i, s = [0], u = 0, c = e.length; u < c;) {
                                for (i = s.length; i--; s[i] *= t);
                                for (s[0] += n.indexOf(e.charAt(u++)), o = 0; o < s.length; o++) s[o] > r - 1 && (null == s[o + 1] && (s[o + 1] = 0), s[o + 1] += s[o] / r | 0, s[o] %= r)
                            }
                            return s.reverse()
                        }
                        return function(t, n, o, i, s) {
                            var u, c, a, f, l, p, h, d, g = t.indexOf("."),
                                w = T,
                                v = B;
                            for (g >= 0 && (f = k, k = 0, t = t.replace(".", ""), p = (d = new M(n)).pow(t.length - g), k = f, d.c = e(E(m(p.c), p.e, "0"), 10, o, "0123456789"), d.e = d.c.length), a = f = (h = e(t, n, o, s ? (u = I, "0123456789") : (u = "0123456789", I))).length; 0 == h[--f]; h.pop());
                            if (!h[0]) return u.charAt(0);
                            if (g < 0 ? --a : (p.c = h, p.e = a, p.s = i, h = (p = r(p, d, w, v, o)).c, l = p.r, a = p.e), g = h[c = a + w + 1], f = o / 2, l = l || c < 0 || null != h[c + 1], l = v < 4 ? (null != g || l) && (0 == v || v == (p.s < 0 ? 3 : 2)) : g > f || g == f && (4 == v || l || 6 == v && 1 & h[c - 1] || v == (p.s < 0 ? 8 : 7)), c < 1 || !h[0]) t = l ? E(u.charAt(1), -w, u.charAt(0)) : u.charAt(0);
                            else {
                                if (h.length = c, l)
                                    for (--o; ++h[--c] > o;) h[c] = 0, c || (++a, h = [1].concat(h));
                                for (f = h.length; !h[--f];);
                                for (g = 0, t = ""; g <= f; t += u.charAt(h[g++]));
                                t = E(t, a, u.charAt(0))
                            }
                            return t
                        }
                    }(), r = function() {
                        function e(e, t, r) {
                            var n, o, i, s, u = 0,
                                c = e.length,
                                a = t % 1e7,
                                f = t / 1e7 | 0;
                            for (e = e.slice(); c--;) u = ((o = a * (i = e[c] % 1e7) + (n = f * i + (s = e[c] / 1e7 | 0) * a) % 1e7 * 1e7 + u) / r | 0) + (n / 1e7 | 0) + f * s, e[c] = o % r;
                            return u && (e = [u].concat(e)), e
                        }

                        function t(e, t, r, n) {
                            var o, i;
                            if (r != n) i = r > n ? 1 : -1;
                            else
                                for (o = i = 0; o < r; o++)
                                    if (e[o] != t[o]) {
                                        i = e[o] > t[o] ? 1 : -1;
                                        break
                                    } return i
                        }

                        function r(e, t, r, n) {
                            for (var o = 0; r--;) e[r] -= o, o = e[r] < t[r] ? 1 : 0, e[r] = o * n + e[r] - t[r];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(n, o, i, s, u) {
                            var a, f, p, h, m, g, w, v, y, b, E, N, O, x, A, S, R, C = n.s == o.s ? 1 : -1,
                                T = n.c,
                                B = o.c;
                            if (!(T && T[0] && B && B[0])) return new M(n.s && o.s && (T ? !B || T[0] != B[0] : B) ? T && 0 == T[0] || !B ? 0 * C : C / 0 : NaN);
                            for (y = (v = new M(C)).c = [], C = i + (f = n.e - o.e) + 1, u || (u = l, f = d(n.e / 14) - d(o.e / 14), C = C / 14 | 0), p = 0; B[p] == (T[p] || 0); p++);
                            if (B[p] > (T[p] || 0) && f--, C < 0) y.push(1), h = !0;
                            else {
                                for (x = T.length, S = B.length, p = 0, C += 2, (m = c(u / (B[0] + 1))) > 1 && (B = e(B, m, u), T = e(T, m, u), S = B.length, x = T.length), O = S, E = (b = T.slice(0, S)).length; E < S; b[E++] = 0);
                                R = B.slice(), R = [0].concat(R), A = B[0], B[1] >= u / 2 && A++;
                                do {
                                    if (m = 0, (a = t(B, b, S, E)) < 0) {
                                        if (N = b[0], S != E && (N = N * u + (b[1] || 0)), (m = c(N / A)) > 1)
                                            for (m >= u && (m = u - 1), w = (g = e(B, m, u)).length, E = b.length; 1 == t(g, b, w, E);) m--, r(g, S < w ? R : B, w, u), w = g.length, a = 1;
                                        else 0 == m && (a = m = 1), w = (g = B.slice()).length;
                                        if (w < E && (g = [0].concat(g)), r(b, g, E, u), E = b.length, -1 == a)
                                            for (; t(B, b, S, E) < 1;) m++, r(b, S < E ? R : B, E, u), E = b.length
                                    } else 0 === a && (m++, b = [0]);
                                    y[p++] = m, b[0] ? b[E++] = T[O] || 0 : (b = [T[O]], E = 1)
                                } while ((O++ < x || null != b[0]) && C--);
                                h = null != b[0], y[0] || y.splice(0, 1)
                            }
                            if (u == l) {
                                for (p = 1, C = y[0]; C >= 10; C /= 10, p++);
                                H(v, i + (v.e = p + 14 * f - 1) + 1, s, h)
                            } else v.e = f, v.r = +h;
                            return v
                        }
                    }(), N = /^(-?)0([xbo])(?=\w[\w.]*$)/i, O = /^([^.]+)\.$/, x = /^\.([^.]+)$/, A = /^-?(Infinity|NaN)$/, S = /^\s*\+(?=[\w.])|^\s+|\s+$/g, o = function(e, t, r, n) {
                        var o, i = r ? t : t.replace(S, "");
                        if (A.test(i)) e.s = isNaN(i) ? null : i < 0 ? -1 : 1, e.c = e.e = null;
                        else {
                            if (!r && (i = i.replace(N, (function(e, t, r) {
                                    return o = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, n && n != o ? e : t
                                })), n && (o = n, i = i.replace(O, "$1").replace(x, "0.$1")), t != i)) return new M(i, o);
                            if (M.DEBUG) throw Error(a + "Not a" + (n ? " base " + n : "") + " number: " + t);
                            e.c = e.e = e.s = null
                        }
                    }, R.absoluteValue = R.abs = function() {
                        var e = new M(this);
                        return e.s < 0 && (e.s = 1), e
                    }, R.comparedTo = function(e, t) {
                        return g(this, new M(e, t))
                    }, R.decimalPlaces = R.dp = function(e, t) {
                        var r, n, o, i = this;
                        if (null != e) return w(e, 0, h), null == t ? t = B : w(t, 0, 8), H(new M(i), e + i.e + 1, t);
                        if (!(r = i.c)) return null;
                        if (n = 14 * ((o = r.length - 1) - d(this.e / 14)), o = r[o])
                            for (; o % 10 == 0; o /= 10, n--);
                        return n < 0 && (n = 0), n
                    }, R.dividedBy = R.div = function(e, t) {
                        return r(this, new M(e, t), T, B)
                    }, R.dividedToIntegerBy = R.idiv = function(e, t) {
                        return r(this, new M(e, t), 0, 1)
                    }, R.exponentiatedBy = R.pow = function(e, t) {
                        var r, n, o, i, s, f, l, p = this;
                        if ((e = new M(e)).c && !e.isInteger()) throw Error(a + "Exponent not an integer: " + e);
                        if (null != t && (t = new M(t)), i = e.e > 14, !p.c || !p.c[0] || 1 == p.c[0] && !p.e && 1 == p.c.length || !e.c || !e.c[0]) return l = new M(Math.pow(+p.valueOf(), i ? 2 - y(e) : +e)), t ? l.mod(t) : l;
                        if (s = e.s < 0, t) {
                            if (t.c ? !t.c[0] : !t.s) return new M(NaN);
                            (n = !s && p.isInteger() && t.isInteger()) && (p = p.mod(t))
                        } else {
                            if (e.e > 9 && (p.e > 0 || p.e < -1 || (0 == p.e ? p.c[0] > 1 || i && p.c[1] >= 24e7 : p.c[0] < 8e13 || i && p.c[0] <= 9999975e7))) return o = p.s < 0 && y(e) ? -0 : 0, p.e > -1 && (o = 1 / o), new M(s ? 1 / o : o);
                            k && (o = u(k / 14 + 2))
                        }
                        for (i ? (r = new M(.5), f = y(e)) : f = e % 2, s && (e.s = 1), l = new M(C);;) {
                            if (f) {
                                if (!(l = l.times(p)).c) break;
                                o ? l.c.length > o && (l.c.length = o) : n && (l = l.mod(t))
                            }
                            if (i) {
                                if (H(e = e.times(r), e.e + 1, 1), !e.c[0]) break;
                                i = e.e > 14, f = y(e)
                            } else {
                                if (!(e = c(e / 2))) break;
                                f = e % 2
                            }
                            p = p.times(p), o ? p.c && p.c.length > o && (p.c.length = o) : n && (p = p.mod(t))
                        }
                        return n ? l : (s && (l = C.div(l)), t ? l.mod(t) : o ? H(l, k, B, void 0) : l)
                    }, R.integerValue = function(e) {
                        var t = new M(this);
                        return null == e ? e = B : w(e, 0, 8), H(t, t.e + 1, e)
                    }, R.isEqualTo = R.eq = function(e, t) {
                        return 0 === g(this, new M(e, t))
                    }, R.isFinite = function() {
                        return !!this.c
                    }, R.isGreaterThan = R.gt = function(e, t) {
                        return g(this, new M(e, t)) > 0
                    }, R.isGreaterThanOrEqualTo = R.gte = function(e, t) {
                        return 1 === (t = g(this, new M(e, t))) || 0 === t
                    }, R.isInteger = function() {
                        return !!this.c && d(this.e / 14) > this.c.length - 2
                    }, R.isLessThan = R.lt = function(e, t) {
                        return g(this, new M(e, t)) < 0
                    }, R.isLessThanOrEqualTo = R.lte = function(e, t) {
                        return -1 === (t = g(this, new M(e, t))) || 0 === t
                    }, R.isNaN = function() {
                        return !this.s
                    }, R.isNegative = function() {
                        return this.s < 0
                    }, R.isPositive = function() {
                        return this.s > 0
                    }, R.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, R.minus = function(e, t) {
                        var r, n, o, i, s = this,
                            u = s.s;
                        if (t = (e = new M(e, t)).s, !u || !t) return new M(NaN);
                        if (u != t) return e.s = -t, s.plus(e);
                        var c = s.e / 14,
                            a = e.e / 14,
                            f = s.c,
                            p = e.c;
                        if (!c || !a) {
                            if (!f || !p) return f ? (e.s = -t, e) : new M(p ? s : NaN);
                            if (!f[0] || !p[0]) return p[0] ? (e.s = -t, e) : new M(f[0] ? s : 3 == B ? -0 : 0)
                        }
                        if (c = d(c), a = d(a), f = f.slice(), u = c - a) {
                            for ((i = u < 0) ? (u = -u, o = f) : (a = c, o = p), o.reverse(), t = u; t--; o.push(0));
                            o.reverse()
                        } else
                            for (n = (i = (u = f.length) < (t = p.length)) ? u : t, u = t = 0; t < n; t++)
                                if (f[t] != p[t]) {
                                    i = f[t] < p[t];
                                    break
                                } if (i && (o = f, f = p, p = o, e.s = -e.s), (t = (n = p.length) - (r = f.length)) > 0)
                            for (; t--; f[r++] = 0);
                        for (t = l - 1; n > u;) {
                            if (f[--n] < p[n]) {
                                for (r = n; r && !f[--r]; f[r] = t);
                                --f[r], f[n] += l
                            }
                            f[n] -= p[n]
                        }
                        for (; 0 == f[0]; f.splice(0, 1), --a);
                        return f[0] ? G(e, f, a) : (e.s = 3 == B ? -1 : 1, e.c = [e.e = 0], e)
                    }, R.modulo = R.mod = function(e, t) {
                        var n, o, i = this;
                        return e = new M(e, t), !i.c || !e.s || e.c && !e.c[0] ? new M(NaN) : !e.c || i.c && !i.c[0] ? new M(i) : (9 == _ ? (o = e.s, e.s = 1, n = r(i, e, 0, 3), e.s = o, n.s *= o) : n = r(i, e, 0, _), (e = i.minus(n.times(e))).c[0] || 1 != _ || (e.s = i.s), e)
                    }, R.multipliedBy = R.times = function(e, t) {
                        var r, n, o, i, s, u, c, a, f, p, h, m, g, w, v = this,
                            y = v.c,
                            b = (e = new M(e, t)).c;
                        if (!(y && b && y[0] && b[0])) return !v.s || !e.s || y && !y[0] && !b || b && !b[0] && !y ? e.c = e.e = e.s = null : (e.s *= v.s, y && b ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (n = d(v.e / 14) + d(e.e / 14), e.s *= v.s, (c = y.length) < (p = b.length) && (g = y, y = b, b = g, o = c, c = p, p = o), o = c + p, g = []; o--; g.push(0));
                        for (w = l, 1e7, o = p; --o >= 0;) {
                            for (r = 0, h = b[o] % 1e7, m = b[o] / 1e7 | 0, i = o + (s = c); i > o;) r = ((a = h * (a = y[--s] % 1e7) + (u = m * a + (f = y[s] / 1e7 | 0) * h) % 1e7 * 1e7 + g[i] + r) / w | 0) + (u / 1e7 | 0) + m * f, g[i--] = a % w;
                            g[i] = r
                        }
                        return r ? ++n : g.splice(0, 1), G(e, g, n)
                    }, R.negated = function() {
                        var e = new M(this);
                        return e.s = -e.s || null, e
                    }, R.plus = function(e, t) {
                        var r, n = this,
                            o = n.s;
                        if (t = (e = new M(e, t)).s, !o || !t) return new M(NaN);
                        if (o != t) return e.s = -t, n.minus(e);
                        var i = n.e / 14,
                            s = e.e / 14,
                            u = n.c,
                            c = e.c;
                        if (!i || !s) {
                            if (!u || !c) return new M(o / 0);
                            if (!u[0] || !c[0]) return c[0] ? e : new M(u[0] ? n : 0 * o)
                        }
                        if (i = d(i), s = d(s), u = u.slice(), o = i - s) {
                            for (o > 0 ? (s = i, r = c) : (o = -o, r = u), r.reverse(); o--; r.push(0));
                            r.reverse()
                        }
                        for ((o = u.length) - (t = c.length) < 0 && (r = c, c = u, u = r, t = o), o = 0; t;) o = (u[--t] = u[t] + c[t] + o) / l | 0, u[t] = l === u[t] ? 0 : u[t] % l;
                        return o && (u = [o].concat(u), ++s), G(e, u, s)
                    }, R.precision = R.sd = function(e, t) {
                        var r, n, o, i = this;
                        if (null != e && e !== !!e) return w(e, 1, h), null == t ? t = B : w(t, 0, 8), H(new M(i), e, t);
                        if (!(r = i.c)) return null;
                        if (n = 14 * (o = r.length - 1) + 1, o = r[o]) {
                            for (; o % 10 == 0; o /= 10, n--);
                            for (o = r[0]; o >= 10; o /= 10, n++);
                        }
                        return e && i.e + 1 > n && (n = i.e + 1), n
                    }, R.shiftedBy = function(e) {
                        return w(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, R.squareRoot = R.sqrt = function() {
                        var e, t, n, o, i, s = this,
                            u = s.c,
                            c = s.s,
                            a = s.e,
                            f = T + 4,
                            l = new M("0.5");
                        if (1 !== c || !u || !u[0]) return new M(!c || c < 0 && (!u || u[0]) ? NaN : u ? s : 1 / 0);
                        if (0 == (c = Math.sqrt(+s)) || c == 1 / 0 ? (((t = m(u)).length + a) % 2 == 0 && (t += "0"), c = Math.sqrt(t), a = d((a + 1) / 2) - (a < 0 || a % 2), n = new M(t = c == 1 / 0 ? "1e" + a : (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + a)) : n = new M(c + ""), n.c[0])
                            for ((c = (a = n.e) + f) < 3 && (c = 0);;)
                                if (i = n, n = l.times(i.plus(r(s, i, f, 1))), m(i.c).slice(0, c) === (t = m(n.c)).slice(0, c)) {
                                    if (n.e < a && --c, "9999" != (t = t.slice(c - 3, c + 1)) && (o || "4999" != t)) {
                                        +t && (+t.slice(1) || "5" != t.charAt(0)) || (H(n, n.e + T + 2, 1), e = !n.times(n).eq(s));
                                        break
                                    }
                                    if (!o && (H(i, i.e + T + 2, 0), i.times(i).eq(s))) {
                                        n = i;
                                        break
                                    }
                                    f += 4, c += 4, o = 1
                                } return H(n, n.e + T + 1, B, e)
                    }, R.toExponential = function(e, t) {
                        return null != e && (w(e, 0, h), e++), F(this, e, t, 1)
                    }, R.toFixed = function(e, t) {
                        return null != e && (w(e, 0, h), e = e + this.e + 1), F(this, e, t)
                    }, R.toFormat = function(e, t) {
                        var r = this.toFixed(e, t);
                        if (this.c) {
                            var n, o = r.split("."),
                                i = +q.groupSize,
                                s = +q.secondaryGroupSize,
                                u = q.groupSeparator,
                                c = o[0],
                                a = o[1],
                                f = this.s < 0,
                                l = f ? c.slice(1) : c,
                                p = l.length;
                            if (s && (n = i, i = s, s = n, p -= n), i > 0 && p > 0) {
                                for (n = p % i || i, c = l.substr(0, n); n < p; n += i) c += u + l.substr(n, i);
                                s > 0 && (c += u + l.slice(n)), f && (c = "-" + c)
                            }
                            r = a ? c + q.decimalSeparator + ((s = +q.fractionGroupSize) ? a.replace(new RegExp("\\d{" + s + "}\\B", "g"), "$&" + q.fractionGroupSeparator) : a) : c
                        }
                        return r
                    }, R.toFraction = function(e) {
                        var t, n, o, i, s, u, c, f, l, h, d, g, w = this,
                            v = w.c;
                        if (null != e && (!(f = new M(e)).isInteger() && (f.c || 1 !== f.s) || f.lt(C))) throw Error(a + "Argument " + (f.isInteger() ? "out of range: " : "not an integer: ") + e);
                        if (!v) return w.toString();
                        for (n = new M(C), h = o = new M(C), i = l = new M(C), g = m(v), u = n.e = g.length - w.e - 1, n.c[0] = p[(c = u % 14) < 0 ? 14 + c : c], e = !e || f.comparedTo(n) > 0 ? u > 0 ? n : h : f, c = D, D = 1 / 0, f = new M(g), l.c[0] = 0; d = r(f, n, 0, 1), 1 != (s = o.plus(d.times(i))).comparedTo(e);) o = i, i = s, h = l.plus(d.times(s = h)), l = s, n = f.minus(d.times(s = n)), f = s;
                        return s = r(e.minus(o), i, 0, 1), l = l.plus(s.times(h)), o = o.plus(s.times(i)), l.s = h.s = w.s, t = r(h, i, u *= 2, B).minus(w).abs().comparedTo(r(l, o, u, B).minus(w).abs()) < 1 ? [h.toString(), i.toString()] : [l.toString(), o.toString()], D = c, t
                    }, R.toNumber = function() {
                        return +this
                    }, R.toPrecision = function(e, t) {
                        return null != e && w(e, 1, h), F(this, e, t, 2)
                    }, R.toString = function(e) {
                        var t, r = this,
                            o = r.s,
                            i = r.e;
                        return null === i ? o ? (t = "Infinity", o < 0 && (t = "-" + t)) : t = "NaN" : (t = m(r.c), null == e ? t = i <= L || i >= U ? b(t, i) : E(t, i, "0") : (w(e, 2, I.length, "Base"), t = n(E(t, i, "0"), 10, e, o, !0)), o < 0 && r.c[0] && (t = "-" + t)), t
                    }, R.valueOf = R.toJSON = function() {
                        var e, t = this,
                            r = t.e;
                        return null === r ? t.toString() : (e = m(t.c), e = r <= L || r >= U ? b(e, r) : E(e, r, "0"), t.s < 0 ? "-" + e : e)
                    }, R._isBigNumber = !0, null != t && M.set(t), M
                }()).default = i.BigNumber = i, void 0 === (n = function() {
                    return i
                }.call(t, r, t, e)) || (e.exports = n)
            }()
        }
    }
]);