/*! For license information please see main.js.LICENSE.txt */
module.exports = function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 74)
}([function(e, t) {
    e.exports = require("path")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.newError = t.asArray = t.CURRENT_APP_PACKAGE_FILE_NAME = t.CURRENT_APP_INSTALLER_FILE_NAME = t.XElement = t.parseXml = t.ProgressCallbackTransform = t.UUID = t.parseDn = t.githubUrl = t.getS3LikeProviderBaseUrl = t.configureRequestUrl = t.parseJson = t.safeStringifyJson = t.configureRequestOptionsFromUrl = t.configureRequestOptions = t.safeGetHeader = t.DigestTransform = t.HttpExecutor = t.createHttpError = t.HttpError = t.CancellationError = t.CancellationToken = void 0;
    var r = n(48);
    Object.defineProperty(t, "CancellationToken", {
        enumerable: !0,
        get: function() {
            return r.CancellationToken
        }
    }), Object.defineProperty(t, "CancellationError", {
        enumerable: !0,
        get: function() {
            return r.CancellationError
        }
    });
    var i = n(50);
    Object.defineProperty(t, "HttpError", {
        enumerable: !0,
        get: function() {
            return i.HttpError
        }
    }), Object.defineProperty(t, "createHttpError", {
        enumerable: !0,
        get: function() {
            return i.createHttpError
        }
    }), Object.defineProperty(t, "HttpExecutor", {
        enumerable: !0,
        get: function() {
            return i.HttpExecutor
        }
    }), Object.defineProperty(t, "DigestTransform", {
        enumerable: !0,
        get: function() {
            return i.DigestTransform
        }
    }), Object.defineProperty(t, "safeGetHeader", {
        enumerable: !0,
        get: function() {
            return i.safeGetHeader
        }
    }), Object.defineProperty(t, "configureRequestOptions", {
        enumerable: !0,
        get: function() {
            return i.configureRequestOptions
        }
    }), Object.defineProperty(t, "configureRequestOptionsFromUrl", {
        enumerable: !0,
        get: function() {
            return i.configureRequestOptionsFromUrl
        }
    }), Object.defineProperty(t, "safeStringifyJson", {
        enumerable: !0,
        get: function() {
            return i.safeStringifyJson
        }
    }), Object.defineProperty(t, "parseJson", {
        enumerable: !0,
        get: function() {
            return i.parseJson
        }
    }), Object.defineProperty(t, "configureRequestUrl", {
        enumerable: !0,
        get: function() {
            return i.configureRequestUrl
        }
    });
    var o = n(83);
    Object.defineProperty(t, "getS3LikeProviderBaseUrl", {
        enumerable: !0,
        get: function() {
            return o.getS3LikeProviderBaseUrl
        }
    }), Object.defineProperty(t, "githubUrl", {
        enumerable: !0,
        get: function() {
            return o.githubUrl
        }
    });
    var s = n(84);
    Object.defineProperty(t, "parseDn", {
        enumerable: !0,
        get: function() {
            return s.parseDn
        }
    });
    var a = n(85);
    Object.defineProperty(t, "UUID", {
        enumerable: !0,
        get: function() {
            return a.UUID
        }
    });
    var c = n(54);
    Object.defineProperty(t, "ProgressCallbackTransform", {
        enumerable: !0,
        get: function() {
            return c.ProgressCallbackTransform
        }
    });
    var l = n(86);
    Object.defineProperty(t, "parseXml", {
        enumerable: !0,
        get: function() {
            return l.parseXml
        }
    }), Object.defineProperty(t, "XElement", {
        enumerable: !0,
        get: function() {
            return l.XElement
        }
    }), t.CURRENT_APP_INSTALLER_FILE_NAME = "installer.exe", t.CURRENT_APP_PACKAGE_FILE_NAME = "package.7z", t.asArray = function(e) {
        return null == e ? [] : Array.isArray(e) ? e : [e]
    }, t.newError = function(e, t) {
        const n = new Error(e);
        return n.code = t, n
    }
}, function(e, t) {
    e.exports = require("electron")
}, function(e, t) {
    e.exports = require("fs")
}, function(e, t, n) {
    var r, i, o = n(3),
        s = n(89),
        a = n(91),
        c = n(92),
        l = n(25);

    function u(e, t) {
        Object.defineProperty(e, r, {
            get: function() {
                return t
            }
        })
    }
    "function" == typeof Symbol && "function" == typeof Symbol.for ? (r = Symbol.for("graceful-fs.queue"), i = Symbol.for("graceful-fs.previous")) : (r = "___graceful-fs.queue", i = "___graceful-fs.previous");
    var p, d = function() {};
    if (l.debuglog ? d = l.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (d = function() {
            var e = l.format.apply(l, arguments);
            e = "GFS4: " + e.split(/\n/).join("\nGFS4: "), console.error(e)
        }), !o[r]) {
        var h = global[r] || [];
        u(o, h), o.close = function(e) {
            function t(t, n) {
                return e.call(o, t, (function(e) {
                    e || m(), "function" == typeof n && n.apply(this, arguments)
                }))
            }
            return Object.defineProperty(t, i, {
                value: e
            }), t
        }(o.close), o.closeSync = function(e) {
            function t(t) {
                e.apply(o, arguments), m()
            }
            return Object.defineProperty(t, i, {
                value: e
            }), t
        }(o.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", (function() {
            d(o[r]), n(55).equal(o[r].length, 0)
        }))
    }

    function f(e) {
        s(e), e.gracefulify = f, e.createReadStream = function(t, n) {
            return new e.ReadStream(t, n)
        }, e.createWriteStream = function(t, n) {
            return new e.WriteStream(t, n)
        };
        var t = e.readFile;
        e.readFile = function(e, n, r) {
            return "function" == typeof n && (r = n, n = null),
                function e(n, r, i, o) {
                    return t(n, r, (function(t) {
                        !t || "EMFILE" !== t.code && "ENFILE" !== t.code ? "function" == typeof i && i.apply(this, arguments) : g([e, [n, r, i], t, o || Date.now(), Date.now()])
                    }))
                }(e, n, r)
        };
        var n = e.writeFile;
        e.writeFile = function(e, t, r, i) {
            return "function" == typeof r && (i = r, r = null),
                function e(t, r, i, o, s) {
                    return n(t, r, i, (function(n) {
                        !n || "EMFILE" !== n.code && "ENFILE" !== n.code ? "function" == typeof o && o.apply(this, arguments) : g([e, [t, r, i, o], n, s || Date.now(), Date.now()])
                    }))
                }(e, t, r, i)
        };
        var r = e.appendFile;
        r && (e.appendFile = function(e, t, n, i) {
            return "function" == typeof n && (i = n, n = null),
                function e(t, n, i, o, s) {
                    return r(t, n, i, (function(r) {
                        !r || "EMFILE" !== r.code && "ENFILE" !== r.code ? "function" == typeof o && o.apply(this, arguments) : g([e, [t, n, i, o], r, s || Date.now(), Date.now()])
                    }))
                }(e, t, n, i)
        });
        var i = e.copyFile;
        i && (e.copyFile = function(e, t, n, r) {
            return "function" == typeof n && (r = n, n = 0),
                function e(t, n, r, o, s) {
                    return i(t, n, r, (function(i) {
                        !i || "EMFILE" !== i.code && "ENFILE" !== i.code ? "function" == typeof o && o.apply(this, arguments) : g([e, [t, n, r, o], i, s || Date.now(), Date.now()])
                    }))
                }(e, t, n, r)
        });
        var o = e.readdir;
        e.readdir = function(e, t, n) {
            "function" == typeof t && (n = t, t = null);
            var r = c.test(process.version) ? function(e, t, n, r) {
                return o(e, i(e, t, n, r))
            } : function(e, t, n, r) {
                return o(e, t, i(e, t, n, r))
            };
            return r(e, t, n);

            function i(e, t, n, i) {
                return function(o, s) {
                    !o || "EMFILE" !== o.code && "ENFILE" !== o.code ? (s && s.sort && s.sort(), "function" == typeof n && n.call(this, o, s)) : g([r, [e, t, n], o, i || Date.now(), Date.now()])
                }
            }
        };
        var c = /^v[0-5]\./;
        if ("v0.8" === process.version.substr(0, 4)) {
            var l = a(e);
            m = l.ReadStream, v = l.WriteStream
        }
        var u = e.ReadStream;
        u && (m.prototype = Object.create(u.prototype), m.prototype.open = function() {
            var e = this;
            w(e.path, e.flags, e.mode, (function(t, n) {
                t ? (e.autoClose && e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n), e.read())
            }))
        });
        var p = e.WriteStream;
        p && (v.prototype = Object.create(p.prototype), v.prototype.open = function() {
            var e = this;
            w(e.path, e.flags, e.mode, (function(t, n) {
                t ? (e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n))
            }))
        }), Object.defineProperty(e, "ReadStream", {
            get: function() {
                return m
            },
            set: function(e) {
                m = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "WriteStream", {
            get: function() {
                return v
            },
            set: function(e) {
                v = e
            },
            enumerable: !0,
            configurable: !0
        });
        var d = m;
        Object.defineProperty(e, "FileReadStream", {
            get: function() {
                return d
            },
            set: function(e) {
                d = e
            },
            enumerable: !0,
            configurable: !0
        });
        var h = v;

        function m(e, t) {
            return this instanceof m ? (u.apply(this, arguments), this) : m.apply(Object.create(m.prototype), arguments)
        }

        function v(e, t) {
            return this instanceof v ? (p.apply(this, arguments), this) : v.apply(Object.create(v.prototype), arguments)
        }
        Object.defineProperty(e, "FileWriteStream", {
            get: function() {
                return h
            },
            set: function(e) {
                h = e
            },
            enumerable: !0,
            configurable: !0
        });
        var y = e.open;

        function w(e, t, n, r) {
            return "function" == typeof n && (r = n, n = null),
                function e(t, n, r, i, o) {
                    return y(t, n, r, (function(s, a) {
                        !s || "EMFILE" !== s.code && "ENFILE" !== s.code ? "function" == typeof i && i.apply(this, arguments) : g([e, [t, n, r, i], s, o || Date.now(), Date.now()])
                    }))
                }(e, t, n, r)
        }
        return e.open = w, e
    }

    function g(e) {
        d("ENQUEUE", e[0].name, e[1]), o[r].push(e), v()
    }

    function m() {
        for (var e = Date.now(), t = 0; t < o[r].length; ++t) o[r][t].length > 2 && (o[r][t][3] = e, o[r][t][4] = e);
        v()
    }

    function v() {
        if (clearTimeout(p), p = void 0, 0 !== o[r].length) {
            var e = o[r].shift(),
                t = e[0],
                n = e[1],
                i = e[2],
                s = e[3],
                a = e[4];
            if (void 0 === s) d("RETRY", t.name, n), t.apply(null, n);
            else if (Date.now() - s >= 6e4) {
                d("TIMEOUT", t.name, n);
                var c = n.pop();
                "function" == typeof c && c.call(null, i)
            } else {
                var l = Date.now() - a,
                    u = Math.max(a - s, 1);
                l >= Math.min(1.2 * u, 100) ? (d("RETRY", t.name, n), t.apply(null, n.concat([s]))) : o[r].push(e)
            }
            void 0 === p && (p = setTimeout(v, 0))
        }
    }
    global[r] || u(global, o[r]), e.exports = f(c(o)), process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !o.__patched && (e.exports = f(o), o.__patched = !0)
}, function(e, t, n) {
    const r = n(28),
        {
            MAX_LENGTH: i,
            MAX_SAFE_INTEGER: o
        } = n(27),
        {
            re: s,
            t: a
        } = n(19),
        c = n(29),
        {
            compareIdentifiers: l
        } = n(58);
    class u {
        constructor(e, t) {
            if (t = c(t), e instanceof u) {
                if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                e = e.version
            } else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
            if (e.length > i) throw new TypeError(`version is longer than ${i} characters`);
            r("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
            const n = e.trim().match(t.loose ? s[a.LOOSE] : s[a.FULL]);
            if (!n) throw new TypeError("Invalid Version: " + e);
            if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > o || this.major < 0) throw new TypeError("Invalid major version");
            if (this.minor > o || this.minor < 0) throw new TypeError("Invalid minor version");
            if (this.patch > o || this.patch < 0) throw new TypeError("Invalid patch version");
            n[4] ? this.prerelease = n[4].split(".").map(e => {
                if (/^[0-9]+$/.test(e)) {
                    const t = +e;
                    if (t >= 0 && t < o) return t
                }
                return e
            }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
        }
        format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
        }
        toString() {
            return this.version
        }
        compare(e) {
            if (r("SemVer.compare", this.version, this.options, e), !(e instanceof u)) {
                if ("string" == typeof e && e === this.version) return 0;
                e = new u(e, this.options)
            }
            return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
        }
        compareMain(e) {
            return e instanceof u || (e = new u(e, this.options)), l(this.major, e.major) || l(this.minor, e.minor) || l(this.patch, e.patch)
        }
        comparePre(e) {
            if (e instanceof u || (e = new u(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
            if (!this.prerelease.length && e.prerelease.length) return 1;
            if (!this.prerelease.length && !e.prerelease.length) return 0;
            let t = 0;
            do {
                const n = this.prerelease[t],
                    i = e.prerelease[t];
                if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
                if (void 0 === i) return 1;
                if (void 0 === n) return -1;
                if (n !== i) return l(n, i)
            } while (++t)
        }
        compareBuild(e) {
            e instanceof u || (e = new u(e, this.options));
            let t = 0;
            do {
                const n = this.build[t],
                    i = e.build[t];
                if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
                if (void 0 === i) return 1;
                if (void 0 === n) return -1;
                if (n !== i) return l(n, i)
            } while (++t)
        }
        inc(e, t) {
            switch (e) {
                case "premajor":
                    this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                    break;
                case "preminor":
                    this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                    break;
                case "prepatch":
                    this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                    break;
                case "prerelease":
                    0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                    break;
                case "major":
                    0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                    break;
                case "minor":
                    0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                    break;
                case "patch":
                    0 === this.prerelease.length && this.patch++, this.prerelease = [];
                    break;
                case "pre":
                    if (0 === this.prerelease.length) this.prerelease = [0];
                    else {
                        let e = this.prerelease.length;
                        for (; --e >= 0;) "number" == typeof this.prerelease[e] && (this.prerelease[e]++, e = -2); - 1 === e && this.prerelease.push(0)
                    }
                    t && (0 === l(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                    break;
                default:
                    throw new Error("invalid increment argument: " + e)
            }
            return this.format(), this.raw = this.version, this
        }
    }
    e.exports = u
}, function(e, t, n) {
    "use strict";
    t.fromCallback = function(e) {
        return Object.defineProperty((function(...t) {
            if ("function" != typeof t[t.length - 1]) return new Promise((n, r) => {
                e.call(this, ...t, (e, t) => null != e ? r(e) : n(t))
            });
            e.apply(this, t)
        }), "name", {
            value: e.name
        })
    }, t.fromPromise = function(e) {
        return Object.defineProperty((function(...t) {
            const n = t[t.length - 1];
            if ("function" != typeof n) return e.apply(this, t);
            e.apply(this, t.slice(0, -1)).then(e => n(null, e), n)
        }), "name", {
            value: e.name
        })
    }
}, function(e, t, n) {
    const r = n(5);
    e.exports = (e, t, n) => new r(e, n).compare(new r(t, n))
}, function(e, t, n) {
    class r {
        constructor(e, t) {
            if (t = o(t), e instanceof r) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new r(e.raw, t);
            if (e instanceof s) return this.raw = e.value, this.set = [
                [e]
            ], this.format(), this;
            if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split("||").map(e => this.parseRange(e.trim())).filter(e => e.length), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
            if (this.set.length > 1) {
                const e = this.set[0];
                if (this.set = this.set.filter(e => !f(e[0])), 0 === this.set.length) this.set = [e];
                else if (this.set.length > 1)
                    for (const e of this.set)
                        if (1 === e.length && g(e[0])) {
                            this.set = [e];
                            break
                        }
            }
            this.format()
        }
        format() {
            return this.range = this.set.map(e => e.join(" ").trim()).join("||").trim(), this.range
        }
        toString() {
            return this.range
        }
        parseRange(e) {
            e = e.trim();
            const t = `parseRange:${Object.keys(this.options).join(",")}:${e}`,
                n = i.get(t);
            if (n) return n;
            const r = this.options.loose,
                o = r ? l[u.HYPHENRANGELOOSE] : l[u.HYPHENRANGE];
            e = e.replace(o, O(this.options.includePrerelease)), a("hyphen replace", e), e = e.replace(l[u.COMPARATORTRIM], p), a("comparator trim", e);
            let c = (e = (e = (e = e.replace(l[u.TILDETRIM], d)).replace(l[u.CARETTRIM], h)).split(/\s+/).join(" ")).split(" ").map(e => v(e, this.options)).join(" ").split(/\s+/).map(e => I(e, this.options));
            r && (c = c.filter(e => (a("loose invalid filter", e, this.options), !!e.match(l[u.COMPARATORLOOSE])))), a("range list", c);
            const g = new Map,
                m = c.map(e => new s(e, this.options));
            for (const e of m) {
                if (f(e)) return [e];
                g.set(e.value, e)
            }
            g.size > 1 && g.has("") && g.delete("");
            const y = [...g.values()];
            return i.set(t, y), y
        }
        intersects(e, t) {
            if (!(e instanceof r)) throw new TypeError("a Range is required");
            return this.set.some(n => m(n, t) && e.set.some(e => m(e, t) && n.every(n => e.every(e => n.intersects(e, t)))))
        }
        test(e) {
            if (!e) return !1;
            if ("string" == typeof e) try {
                e = new c(e, this.options)
            } catch (e) {
                return !1
            }
            for (let t = 0; t < this.set.length; t++)
                if (N(this.set[t], e, this.options)) return !0;
            return !1
        }
    }
    e.exports = r;
    const i = new(n(128))({
            max: 1e3
        }),
        o = n(29),
        s = n(31),
        a = n(28),
        c = n(5),
        {
            re: l,
            t: u,
            comparatorTrimReplace: p,
            tildeTrimReplace: d,
            caretTrimReplace: h
        } = n(19),
        f = e => "<0.0.0-0" === e.value,
        g = e => "" === e.value,
        m = (e, t) => {
            let n = !0;
            const r = e.slice();
            let i = r.pop();
            for (; n && r.length;) n = r.every(e => i.intersects(e, t)), i = r.pop();
            return n
        },
        v = (e, t) => (a("comp", e, t), e = b(e, t), a("caret", e), e = w(e, t), a("tildes", e), e = C(e, t), a("xrange", e), e = S(e, t), a("stars", e), e),
        y = e => !e || "x" === e.toLowerCase() || "*" === e,
        w = (e, t) => e.trim().split(/\s+/).map(e => E(e, t)).join(" "),
        E = (e, t) => {
            const n = t.loose ? l[u.TILDELOOSE] : l[u.TILDE];
            return e.replace(n, (t, n, r, i, o) => {
                let s;
                return a("tilde", e, t, n, r, i, o), y(n) ? s = "" : y(r) ? s = `>=${n}.0.0 <${+n+1}.0.0-0` : y(i) ? s = `>=${n}.${r}.0 <${n}.${+r+1}.0-0` : o ? (a("replaceTilde pr", o), s = `>=${n}.${r}.${i}-${o} <${n}.${+r+1}.0-0`) : s = `>=${n}.${r}.${i} <${n}.${+r+1}.0-0`, a("tilde return", s), s
            })
        },
        b = (e, t) => e.trim().split(/\s+/).map(e => A(e, t)).join(" "),
        A = (e, t) => {
            a("caret", e, t);
            const n = t.loose ? l[u.CARETLOOSE] : l[u.CARET],
                r = t.includePrerelease ? "-0" : "";
            return e.replace(n, (t, n, i, o, s) => {
                let c;
                return a("caret", e, t, n, i, o, s), y(n) ? c = "" : y(i) ? c = `>=${n}.0.0${r} <${+n+1}.0.0-0` : y(o) ? c = "0" === n ? `>=${n}.${i}.0${r} <${n}.${+i+1}.0-0` : `>=${n}.${i}.0${r} <${+n+1}.0.0-0` : s ? (a("replaceCaret pr", s), c = "0" === n ? "0" === i ? `>=${n}.${i}.${o}-${s} <${n}.${i}.${+o+1}-0` : `>=${n}.${i}.${o}-${s} <${n}.${+i+1}.0-0` : `>=${n}.${i}.${o}-${s} <${+n+1}.0.0-0`) : (a("no pr"), c = "0" === n ? "0" === i ? `>=${n}.${i}.${o}${r} <${n}.${i}.${+o+1}-0` : `>=${n}.${i}.${o}${r} <${n}.${+i+1}.0-0` : `>=${n}.${i}.${o} <${+n+1}.0.0-0`), a("caret return", c), c
            })
        },
        C = (e, t) => (a("replaceXRanges", e, t), e.split(/\s+/).map(e => T(e, t)).join(" ")),
        T = (e, t) => {
            e = e.trim();
            const n = t.loose ? l[u.XRANGELOOSE] : l[u.XRANGE];
            return e.replace(n, (n, r, i, o, s, c) => {
                a("xRange", e, n, r, i, o, s, c);
                const l = y(i),
                    u = l || y(o),
                    p = u || y(s),
                    d = p;
                return "=" === r && d && (r = ""), c = t.includePrerelease ? "-0" : "", l ? n = ">" === r || "<" === r ? "<0.0.0-0" : "*" : r && d ? (u && (o = 0), s = 0, ">" === r ? (r = ">=", u ? (i = +i + 1, o = 0, s = 0) : (o = +o + 1, s = 0)) : "<=" === r && (r = "<", u ? i = +i + 1 : o = +o + 1), "<" === r && (c = "-0"), n = `${r+i}.${o}.${s}${c}`) : u ? n = `>=${i}.0.0${c} <${+i+1}.0.0-0` : p && (n = `>=${i}.${o}.0${c} <${i}.${+o+1}.0-0`), a("xRange return", n), n
            })
        },
        S = (e, t) => (a("replaceStars", e, t), e.trim().replace(l[u.STAR], "")),
        I = (e, t) => (a("replaceGTE0", e, t), e.trim().replace(l[t.includePrerelease ? u.GTE0PRE : u.GTE0], "")),
        O = e => (t, n, r, i, o, s, a, c, l, u, p, d, h) => `${n=y(r)?"":y(i)?`>=${r}.0.0${e?"-0":""}`:y(o)?`>=${r}.${i}.0${e?"-0":""}`:s?">="+n:`>=${n}${e?"-0":""}`} ${c=y(l)?"":y(u)?`<${+l+1}.0.0-0`:y(p)?`<${l}.${+u+1}.0-0`:d?`<=${l}.${u}.${p}-${d}`:e?`<${l}.${u}.${+p+1}-0`:"<="+c}`.trim(),
        N = (e, t, n) => {
            for (let n = 0; n < e.length; n++)
                if (!e[n].test(t)) return !1;
            if (t.prerelease.length && !n.includePrerelease) {
                for (let n = 0; n < e.length; n++)
                    if (a(e[n].semver), e[n].semver !== s.ANY && e[n].semver.prerelease.length > 0) {
                        const r = e[n].semver;
                        if (r.major === t.major && r.minor === t.minor && r.patch === t.patch) return !0
                    } return !1
            }
            return !0
        }
}, function(e, t, n) {
    "use strict";
    const r = n(6).fromPromise,
        {
            makeDir: i,
            makeDirSync: o
        } = n(94),
        s = r(i);
    e.exports = {
        mkdirs: s,
        mkdirsSync: o,
        mkdirp: s,
        mkdirpSync: o,
        ensureDir: s,
        ensureDirSync: o
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resolveFiles = t.getFileList = t.parseUpdateInfo = t.findFile = t.Provider = void 0;
    const r = n(1),
        i = n(39),
        o = n(12);

    function s(e) {
        const t = e.files;
        if (null != t && t.length > 0) return t;
        if (null != e.path) return [{
            url: e.path,
            sha2: e.sha2,
            sha512: e.sha512
        }];
        throw r.newError("No files provided: " + r.safeStringifyJson(e), "ERR_UPDATER_NO_FILES_PROVIDED")
    }
    t.Provider = class {
        constructor(e) {
            this.runtimeOptions = e, this.requestHeaders = null, this.executor = e.executor
        }
        get isUseMultipleRangeRequest() {
            return !1 !== this.runtimeOptions.isUseMultipleRangeRequest
        }
        getChannelFilePrefix() {
            if ("linux" === this.runtimeOptions.platform) {
                const e = process.env.TEST_UPDATER_ARCH || process.arch;
                return "-linux" + ("x64" === e ? "" : "-" + e)
            }
            return "darwin" === this.runtimeOptions.platform ? "-mac" : ""
        }
        getDefaultChannelName() {
            return this.getCustomChannelName("latest")
        }
        getCustomChannelName(e) {
            return `${e}${this.getChannelFilePrefix()}`
        }
        get fileExtraDownloadHeaders() {
            return null
        }
        setRequestHeaders(e) {
            this.requestHeaders = e
        }
        httpRequest(e, t, n) {
            return this.executor.request(this.createRequestOptions(e, t), n)
        }
        createRequestOptions(e, t) {
            const n = {};
            return null == this.requestHeaders ? null != t && (n.headers = t) : n.headers = null == t ? this.requestHeaders : {
                ...this.requestHeaders,
                ...t
            }, r.configureRequestUrl(e, n), n
        }
    }, t.findFile = function(e, t, n) {
        if (0 === e.length) throw r.newError("No files provided", "ERR_UPDATER_NO_FILES_PROVIDED");
        const i = e.find(e => e.url.pathname.toLowerCase().endsWith("." + t));
        return null != i ? i : null == n ? e[0] : e.find(e => !n.some(t => e.url.pathname.toLowerCase().endsWith("." + t)))
    }, t.parseUpdateInfo = function(e, t, n) {
        if (null == e) throw r.newError(`Cannot parse update info from ${t} in the latest release artifacts (${n}): rawData: null`, "ERR_UPDATER_INVALID_UPDATE_INFO");
        let o;
        try {
            o = i.load(e)
        } catch (i) {
            throw r.newError(`Cannot parse update info from ${t} in the latest release artifacts (${n}): ${i.stack||i.message}, rawData: ${e}`, "ERR_UPDATER_INVALID_UPDATE_INFO")
        }
        return o
    }, t.getFileList = s, t.resolveFiles = function(e, t, n = (e => e)) {
        const i = s(e).map(e => {
                if (null == e.sha2 && null == e.sha512) throw r.newError("Update info doesn't contain nor sha256 neither sha512 checksum: " + r.safeStringifyJson(e), "ERR_UPDATER_NO_CHECKSUM");
                return {
                    url: o.newUrlFromBase(n(e.url), t),
                    info: e
                }
            }),
            a = e.packages,
            c = null == a ? null : a[process.arch] || a.ia32;
        return null != c && (i[0].packageInfo = {
            ...c,
            path: o.newUrlFromBase(n(c.path), t).href
        }), i
    }
}, function(e, t) {
    e.exports = require("url")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.blockmapFiles = t.getChannelFilename = t.newUrlFromBase = t.newBaseUrl = void 0;
    const r = n(11),
        i = n(147);

    function o(e, t, n = !1) {
        const i = new r.URL(e, t),
            o = t.search;
        return null != o && 0 !== o.length ? i.search = o : n && (i.search = "noCache=" + Date.now().toString(32)), i
    }
    t.newBaseUrl = function(e) {
        const t = new r.URL(e);
        return t.pathname.endsWith("/") || (t.pathname += "/"), t
    }, t.newUrlFromBase = o, t.getChannelFilename = function(e) {
        return e + ".yml"
    }, t.blockmapFiles = function(e, t, n) {
        const r = o(e.pathname + ".blockmap", e);
        return [o(e.pathname.replace(new RegExp(i(n), "g"), t) + ".blockmap", e), r]
    }
}, function(e, t, n) {
    "use strict";
    e.exports = {
        ...n(17),
        ...n(36),
        ...n(97),
        ...n(99),
        ...n(105),
        ...n(9),
        ...n(110),
        ...n(38),
        ...n(14),
        ...n(26)
    }
}, function(e, t, n) {
    "use strict";
    const r = n(6).fromPromise,
        i = n(17);
    e.exports = {
        pathExists: r((function(e) {
            return i.access(e).then(() => !0).catch(() => !1)
        })),
        pathExistsSync: i.existsSync
    }
}, function(e, t) {
    e.exports = require("os")
}, function(e, t) {
    e.exports = require("stream")
}, function(e, t, n) {
    "use strict";
    const r = n(6).fromCallback,
        i = n(4),
        o = ["access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "opendir", "readdir", "readFile", "readlink", "realpath", "rename", "rm", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile"].filter(e => "function" == typeof i[e]);
    Object.assign(t, i), o.forEach(e => {
        t[e] = r(i[e])
    }), t.exists = function(e, t) {
        return "function" == typeof t ? i.exists(e, t) : new Promise(t => i.exists(e, t))
    }, t.read = function(e, t, n, r, o, s) {
        return "function" == typeof s ? i.read(e, t, n, r, o, s) : new Promise((s, a) => {
            i.read(e, t, n, r, o, (e, t, n) => {
                if (e) return a(e);
                s({
                    bytesRead: t,
                    buffer: n
                })
            })
        })
    }, t.write = function(e, t, ...n) {
        return "function" == typeof n[n.length - 1] ? i.write(e, t, ...n) : new Promise((r, o) => {
            i.write(e, t, ...n, (e, t, n) => {
                if (e) return o(e);
                r({
                    bytesWritten: t,
                    buffer: n
                })
            })
        })
    }, "function" == typeof i.writev && (t.writev = function(e, t, ...n) {
        return "function" == typeof n[n.length - 1] ? i.writev(e, t, ...n) : new Promise((r, o) => {
            i.writev(e, t, ...n, (e, t, n) => {
                if (e) return o(e);
                r({
                    bytesWritten: t,
                    buffers: n
                })
            })
        })
    }), "function" == typeof i.realpath.native ? t.realpath.native = r(i.realpath.native) : process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?", "Warning", "fs-extra-WARN0003")
}, function(e, t, n) {
    "use strict";
    const r = n(17),
        i = n(0),
        o = n(25);

    function s(e, t, n) {
        const i = n.dereference ? e => r.stat(e, {
            bigint: !0
        }) : e => r.lstat(e, {
            bigint: !0
        });
        return Promise.all([i(e), i(t).catch(e => {
            if ("ENOENT" === e.code) return null;
            throw e
        })]).then(([e, t]) => ({
            srcStat: e,
            destStat: t
        }))
    }

    function a(e, t) {
        return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev
    }

    function c(e, t) {
        const n = i.resolve(e).split(i.sep).filter(e => e),
            r = i.resolve(t).split(i.sep).filter(e => e);
        return n.reduce((e, t, n) => e && r[n] === t, !0)
    }

    function l(e, t, n) {
        return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`
    }
    e.exports = {
        checkPaths: function(e, t, n, r, u) {
            o.callbackify(s)(e, t, r, (r, o) => {
                if (r) return u(r);
                const {
                    srcStat: s,
                    destStat: p
                } = o;
                if (p) {
                    if (a(s, p)) {
                        const r = i.basename(e),
                            o = i.basename(t);
                        return "move" === n && r !== o && r.toLowerCase() === o.toLowerCase() ? u(null, {
                            srcStat: s,
                            destStat: p,
                            isChangingCase: !0
                        }) : u(new Error("Source and destination must not be the same."))
                    }
                    if (s.isDirectory() && !p.isDirectory()) return u(new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`));
                    if (!s.isDirectory() && p.isDirectory()) return u(new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`))
                }
                return s.isDirectory() && c(e, t) ? u(new Error(l(e, t, n))) : u(null, {
                    srcStat: s,
                    destStat: p
                })
            })
        },
        checkPathsSync: function(e, t, n, o) {
            const {
                srcStat: s,
                destStat: u
            } = function(e, t, n) {
                let i;
                const o = n.dereference ? e => r.statSync(e, {
                        bigint: !0
                    }) : e => r.lstatSync(e, {
                        bigint: !0
                    }),
                    s = o(e);
                try {
                    i = o(t)
                } catch (e) {
                    if ("ENOENT" === e.code) return {
                        srcStat: s,
                        destStat: null
                    };
                    throw e
                }
                return {
                    srcStat: s,
                    destStat: i
                }
            }(e, t, o);
            if (u) {
                if (a(s, u)) {
                    const r = i.basename(e),
                        o = i.basename(t);
                    if ("move" === n && r !== o && r.toLowerCase() === o.toLowerCase()) return {
                        srcStat: s,
                        destStat: u,
                        isChangingCase: !0
                    };
                    throw new Error("Source and destination must not be the same.")
                }
                if (s.isDirectory() && !u.isDirectory()) throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
                if (!s.isDirectory() && u.isDirectory()) throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`)
            }
            if (s.isDirectory() && c(e, t)) throw new Error(l(e, t, n));
            return {
                srcStat: s,
                destStat: u
            }
        },
        checkParentPaths: function e(t, n, o, s, c) {
            const u = i.resolve(i.dirname(t)),
                p = i.resolve(i.dirname(o));
            if (p === u || p === i.parse(p).root) return c();
            r.stat(p, {
                bigint: !0
            }, (r, i) => r ? "ENOENT" === r.code ? c() : c(r) : a(n, i) ? c(new Error(l(t, o, s))) : e(t, n, p, s, c))
        },
        checkParentPathsSync: function e(t, n, o, s) {
            const c = i.resolve(i.dirname(t)),
                u = i.resolve(i.dirname(o));
            if (u === c || u === i.parse(u).root) return;
            let p;
            try {
                p = r.statSync(u, {
                    bigint: !0
                })
            } catch (t) {
                if ("ENOENT" === t.code) return;
                throw t
            }
            if (a(n, p)) throw new Error(l(t, o, s));
            return e(t, n, u, s)
        },
        isSrcSubdir: c,
        areIdentical: a
    }
}, function(e, t, n) {
    const {
        MAX_SAFE_COMPONENT_LENGTH: r
    } = n(27), i = n(28), o = (t = e.exports = {}).re = [], s = t.src = [], a = t.t = {};
    let c = 0;
    const l = (e, t, n) => {
        const r = c++;
        i(e, r, t), a[e] = r, s[r] = t, o[r] = new RegExp(t, n ? "g" : void 0)
    };
    l("NUMERICIDENTIFIER", "0|[1-9]\\d*"), l("NUMERICIDENTIFIERLOOSE", "[0-9]+"), l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), l("MAINVERSION", `(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})`), l("MAINVERSIONLOOSE", `(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})`), l("PRERELEASEIDENTIFIER", `(?:${s[a.NUMERICIDENTIFIER]}|${s[a.NONNUMERICIDENTIFIER]})`), l("PRERELEASEIDENTIFIERLOOSE", `(?:${s[a.NUMERICIDENTIFIERLOOSE]}|${s[a.NONNUMERICIDENTIFIER]})`), l("PRERELEASE", `(?:-(${s[a.PRERELEASEIDENTIFIER]}(?:\\.${s[a.PRERELEASEIDENTIFIER]})*))`), l("PRERELEASELOOSE", `(?:-?(${s[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[a.PRERELEASEIDENTIFIERLOOSE]})*))`), l("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), l("BUILD", `(?:\\+(${s[a.BUILDIDENTIFIER]}(?:\\.${s[a.BUILDIDENTIFIER]})*))`), l("FULLPLAIN", `v?${s[a.MAINVERSION]}${s[a.PRERELEASE]}?${s[a.BUILD]}?`), l("FULL", `^${s[a.FULLPLAIN]}$`), l("LOOSEPLAIN", `[v=\\s]*${s[a.MAINVERSIONLOOSE]}${s[a.PRERELEASELOOSE]}?${s[a.BUILD]}?`), l("LOOSE", `^${s[a.LOOSEPLAIN]}$`), l("GTLT", "((?:<|>)?=?)"), l("XRANGEIDENTIFIERLOOSE", s[a.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"), l("XRANGEIDENTIFIER", s[a.NUMERICIDENTIFIER] + "|x|X|\\*"), l("XRANGEPLAIN", `[v=\\s]*(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:${s[a.PRERELEASE]})?${s[a.BUILD]}?)?)?`), l("XRANGEPLAINLOOSE", `[v=\\s]*(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:${s[a.PRERELEASELOOSE]})?${s[a.BUILD]}?)?)?`), l("XRANGE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAIN]}$`), l("XRANGELOOSE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAINLOOSE]}$`), l("COERCE", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`), l("COERCERTL", s[a.COERCE], !0), l("LONETILDE", "(?:~>?)"), l("TILDETRIM", `(\\s*)${s[a.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", l("TILDE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAIN]}$`), l("TILDELOOSE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAINLOOSE]}$`), l("LONECARET", "(?:\\^)"), l("CARETTRIM", `(\\s*)${s[a.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", l("CARET", `^${s[a.LONECARET]}${s[a.XRANGEPLAIN]}$`), l("CARETLOOSE", `^${s[a.LONECARET]}${s[a.XRANGEPLAINLOOSE]}$`), l("COMPARATORLOOSE", `^${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]})$|^$`), l("COMPARATOR", `^${s[a.GTLT]}\\s*(${s[a.FULLPLAIN]})$|^$`), l("COMPARATORTRIM", `(\\s*)${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]}|${s[a.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", l("HYPHENRANGE", `^\\s*(${s[a.XRANGEPLAIN]})\\s+-\\s+(${s[a.XRANGEPLAIN]})\\s*$`), l("HYPHENRANGELOOSE", `^\\s*(${s[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[a.XRANGEPLAINLOOSE]})\\s*$`), l("STAR", "(<|>)?=?\\s*\\*"), l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
}, function(e, t, n) {
    const {
        MAX_LENGTH: r
    } = n(27), {
        re: i,
        t: o
    } = n(19), s = n(5), a = n(29);
    e.exports = (e, t) => {
        if (t = a(t), e instanceof s) return e;
        if ("string" != typeof e) return null;
        if (e.length > r) return null;
        if (!(t.loose ? i[o.LOOSE] : i[o.FULL]).test(e)) return null;
        try {
            return new s(e, t)
        } catch (e) {
            return null
        }
    }
}, function(e, t, n) {
    "use strict";
    var r;
    try {
        r = n(2)
    } catch (e) {
        r = null
    }

    function i() {
        return o("app")
    }

    function o(e) {
        return r ? r[e] ? r[e] : r.remote ? r.remote[e] : null : null
    }
    e.exports = {
        getElectronApp: i,
        getElectronAppName: function() {
            var e = i();
            return e ? "name" in e ? e.name : e.getName() : null
        },
        getRemote: function() {
            return r && r.remote ? r.remote : null
        },
        getUserData: function() {
            var e = i();
            return e ? e.getPath("userData") : null
        },
        isDev: function() {
            var e = i();
            return !(!e || e.isPackaged && "1" !== process.env.ELECTRON_IS_DEV)
        },
        onIpcMain: function(e, t) {
            r && r.ipcMain && r.ipcMain.on(e, t)
        },
        onIpcRenderer: function(e, t) {
            r && r.ipcRenderer && r.ipcRenderer.on(e, t)
        },
        sendIpcToMain: function(e, t) {
            r && r.ipcRenderer && r.ipcRenderer.send(e, t)
        },
        sendIpcToRenderer: function(e, t) {
            r && r.BrowserWindow && r.BrowserWindow.getAllWindows().forEach((function(n) {
                n.webContents.send(e, t)
            }))
        },
        showErrorBox: function(e, t) {
            var n = o("dialog");
            n && n.showErrorBox(e, t)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.UpdaterSignal = t.UPDATE_DOWNLOADED = t.DOWNLOAD_PROGRESS = t.NsisUpdater = t.MacUpdater = t.AppImageUpdater = t.Provider = t.CancellationToken = t.NoOpLogger = t.AppUpdater = void 0;
    const r = n(1);
    Object.defineProperty(t, "CancellationToken", {
        enumerable: !0,
        get: function() {
            return r.CancellationToken
        }
    });
    var i = n(35);
    Object.defineProperty(t, "AppUpdater", {
        enumerable: !0,
        get: function() {
            return i.AppUpdater
        }
    }), Object.defineProperty(t, "NoOpLogger", {
        enumerable: !0,
        get: function() {
            return i.NoOpLogger
        }
    });
    var o = n(10);
    Object.defineProperty(t, "Provider", {
        enumerable: !0,
        get: function() {
            return o.Provider
        }
    });
    var s = n(63);
    Object.defineProperty(t, "AppImageUpdater", {
        enumerable: !0,
        get: function() {
            return s.AppImageUpdater
        }
    });
    var a = n(69);
    Object.defineProperty(t, "MacUpdater", {
        enumerable: !0,
        get: function() {
            return a.MacUpdater
        }
    });
    var c = n(71);
    let l;

    function u(e, t, n) {
        e.on(t, n)
    }
    Object.defineProperty(t, "NsisUpdater", {
        enumerable: !0,
        get: function() {
            return c.NsisUpdater
        }
    }), Object.defineProperty(t, "autoUpdater", {
        enumerable: !0,
        get: () => l || (l = "win32" === process.platform ? new(n(71).NsisUpdater) : "darwin" === process.platform ? new(n(69).MacUpdater) : new(n(63).AppImageUpdater), l)
    }), t.DOWNLOAD_PROGRESS = "download-progress", t.UPDATE_DOWNLOADED = "update-downloaded", t.UpdaterSignal = class {
        constructor(e) {
            this.emitter = e
        }
        login(e) {
            u(this.emitter, "login", e)
        }
        progress(e) {
            u(this.emitter, t.DOWNLOAD_PROGRESS, e)
        }
        updateDownloaded(e) {
            u(this.emitter, t.UPDATE_DOWNLOADED, e)
        }
        updateCancelled(e) {
            u(this.emitter, "update-cancelled", e)
        }
    }
}, function(e, t) {
    e.exports = require("crypto")
}, function(e, t) {
    e.exports = require("util")
}, function(e, t, n) {
    "use strict";
    const r = n(4),
        i = n(6).fromCallback,
        o = n(98);
    e.exports = {
        remove: i((function(e, t) {
            if (r.rm) return r.rm(e, {
                recursive: !0,
                force: !0
            }, t);
            o(e, t)
        })),
        removeSync: function(e) {
            if (r.rmSync) return r.rmSync(e, {
                recursive: !0,
                force: !0
            });
            o.sync(e)
        }
    }
}, function(e, t) {
    const n = Number.MAX_SAFE_INTEGER || 9007199254740991;
    e.exports = {
        SEMVER_SPEC_VERSION: "2.0.0",
        MAX_LENGTH: 256,
        MAX_SAFE_INTEGER: n,
        MAX_SAFE_COMPONENT_LENGTH: 16
    }
}, function(e, t) {
    const n = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
    e.exports = n
}, function(e, t) {
    const n = ["includePrerelease", "loose", "rtl"];
    e.exports = e => e ? "object" != typeof e ? {
        loose: !0
    } : n.filter(t => e[t]).reduce((e, t) => (e[t] = !0, e), {}) : {}
}, function(e, t, n) {
    const r = n(7);
    e.exports = (e, t, n) => r(e, t, n) > 0
}, function(e, t, n) {
    const r = Symbol("SemVer ANY");
    class i {
        static get ANY() {
            return r
        }
        constructor(e, t) {
            if (t = o(t), e instanceof i) {
                if (e.loose === !!t.loose) return e;
                e = e.value
            }
            l("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === r ? this.value = "" : this.value = this.operator + this.semver.version, l("comp", this)
        }
        parse(e) {
            const t = this.options.loose ? s[a.COMPARATORLOOSE] : s[a.COMPARATOR],
                n = e.match(t);
            if (!n) throw new TypeError("Invalid comparator: " + e);
            this.operator = void 0 !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), n[2] ? this.semver = new u(n[2], this.options.loose) : this.semver = r
        }
        toString() {
            return this.value
        }
        test(e) {
            if (l("Comparator.test", e, this.options.loose), this.semver === r || e === r) return !0;
            if ("string" == typeof e) try {
                e = new u(e, this.options)
            } catch (e) {
                return !1
            }
            return c(e, this.operator, this.semver, this.options)
        }
        intersects(e, t) {
            if (!(e instanceof i)) throw new TypeError("a Comparator is required");
            if (t && "object" == typeof t || (t = {
                    loose: !!t,
                    includePrerelease: !1
                }), "" === this.operator) return "" === this.value || new p(e.value, t).test(this.value);
            if ("" === e.operator) return "" === e.value || new p(this.value, t).test(e.semver);
            const n = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e.operator),
                r = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e.operator),
                o = this.semver.version === e.semver.version,
                s = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e.operator),
                a = c(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
                l = c(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
            return n || r || o && s || a || l
        }
    }
    e.exports = i;
    const o = n(29),
        {
            re: s,
            t: a
        } = n(19),
        c = n(60),
        l = n(28),
        u = n(5),
        p = n(8)
}, function(e, t, n) {
    const r = n(8);
    e.exports = (e, t, n) => {
        try {
            t = new r(t, n)
        } catch (e) {
            return !1
        }
        return t.test(e)
    }
}, function(e, t) {
    e.exports = require("child_process")
}, function(e, t, n) {
    "use strict";
    var r = n(25);

    function i(e) {
        return e = e.map(o), r.formatWithOptions ? r.formatWithOptions.apply(r, [{
            getters: !0
        }].concat(e)) : r.format.apply(r, e)
    }

    function o(e) {
        return "function" == typeof e ? e.toString() : e instanceof Error ? e.stack : e
    }

    function s(e, t) {
        return t = t || 2, (new Array(t + 1).join("0") + e).substr(-t, t)
    }

    function a(e) {
        var t = Math.abs(e);
        return (e >= 0 ? "-" : "+") + s(Math.floor(t / 60)) + ":" + s(t % 60)
    }
    e.exports = {
        format: function(e, t, n, r) {
            if (r = void 0 !== r && r, "function" == typeof t) return t(e, n);
            var o = new Date(e.date || Date.now()),
                c = e.variables,
                l = t;
            for (var u in c) c.hasOwnProperty(u) && (l = l.replace("{" + u + "}", c[u]));
            return l = l.replace("{level}", e.level).replace("{text}", i(e.data)).replace("{y}", String(o.getFullYear())).replace("{m}", s(o.getMonth() + 1)).replace("{d}", s(o.getDate())).replace("{h}", s(o.getHours())).replace("{i}", s(o.getMinutes())).replace("{s}", s(o.getSeconds())).replace("{ms}", s(o.getMilliseconds(), 3)).replace("{z}", a(o.getTimezoneOffset())), r && (l = l.replace(/%c/g, "")), l
        },
        formatTimeZone: a,
        pad: s,
        stringifyObject: o
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NoOpLogger = t.AppUpdater = void 0;
    const r = n(1),
        i = n(24),
        o = n(49),
        s = n(13),
        a = n(113),
        c = n(39),
        l = n(114),
        u = n(0),
        p = n(57),
        d = n(141),
        h = n(144),
        f = n(146),
        g = n(61),
        m = n(23),
        v = n(148);
    class y extends o.EventEmitter {
        constructor(e, t) {
            super(), this.autoDownload = !0, this.autoInstallOnAppQuit = !0, this.allowPrerelease = !1, this.fullChangelog = !1, this.allowDowngrade = !1, this._channel = null, this.downloadedUpdateHelper = null, this.requestHeaders = null, this._logger = console, this.signals = new m.UpdaterSignal(this), this._appUpdateConfigPath = null, this.clientPromise = null, this.stagingUserIdPromise = new l.Lazy(() => this.getOrCreateStagingUserId()), this.configOnDisk = new l.Lazy(() => this.loadUpdateConfig()), this.checkForUpdatesPromise = null, this.updateInfoAndProvider = null, this._testOnlyOptions = null, this.on("error", e => {
                this._logger.error("Error: " + (e.stack || e.message))
            }), null == t ? (this.app = new h.ElectronAppAdapter, this.httpExecutor = new f.ElectronHttpExecutor((e, t) => this.emit("login", e, t))) : (this.app = t, this.httpExecutor = null);
            const n = this.app.version,
                i = p.parse(n);
            if (null == i) throw r.newError(`App version is not a valid semver version: "${n}"`, "ERR_UPDATER_INVALID_VERSION");
            this.currentVersion = i, this.allowPrerelease = function(e) {
                const t = p.prerelease(e);
                return null != t && t.length > 0
            }(i), null != e && (this.setFeedURL(e), "string" != typeof e && e.requestHeaders && (this.requestHeaders = e.requestHeaders))
        }
        get channel() {
            return this._channel
        }
        set channel(e) {
            if (null != this._channel) {
                if ("string" != typeof e) throw r.newError("Channel must be a string, but got: " + e, "ERR_UPDATER_INVALID_CHANNEL");
                if (0 === e.length) throw r.newError("Channel must be not an empty string", "ERR_UPDATER_INVALID_CHANNEL")
            }
            this._channel = e, this.allowDowngrade = !0
        }
        addAuthHeader(e) {
            this.requestHeaders = Object.assign({}, this.requestHeaders, {
                authorization: e
            })
        }
        get netSession() {
            return f.getNetSession()
        }
        get logger() {
            return this._logger
        }
        set logger(e) {
            this._logger = null == e ? new w : e
        }
        set updateConfigPath(e) {
            this.clientPromise = null, this._appUpdateConfigPath = e, this.configOnDisk = new l.Lazy(() => this.loadUpdateConfig())
        }
        getFeedURL() {
            return "Deprecated. Do not use it."
        }
        setFeedURL(e) {
            const t = this.createProviderRuntimeOptions();
            let n;
            n = "string" == typeof e ? new g.GenericProvider({
                provider: "generic",
                url: e
            }, this, {
                ...t,
                isUseMultipleRangeRequest: v.isUrlProbablySupportMultiRangeRequests(e)
            }) : v.createClient(e, this, t), this.clientPromise = Promise.resolve(n)
        }
        checkForUpdates() {
            let e = this.checkForUpdatesPromise;
            if (null != e) return this._logger.info("Checking for update (already in progress)"), e;
            const t = () => this.checkForUpdatesPromise = null;
            return this._logger.info("Checking for update"), e = this.doCheckForUpdates().then(e => (t(), e)).catch(e => {
                throw t(), this.emit("error", e, "Cannot check for updates: " + (e.stack || e).toString()), e
            }), this.checkForUpdatesPromise = e, e
        }
        isUpdaterActive() {
            return !!this.app.isPackaged || (this._logger.info("Skip checkForUpdatesAndNotify because application is not packed"), !1)
        }
        checkForUpdatesAndNotify(e) {
            return this.isUpdaterActive() ? this.checkForUpdates().then(t => {
                const r = t.downloadPromise;
                return null == r ? (null != this._logger.debug && this._logger.debug("checkForUpdatesAndNotify called, downloadPromise is null"), t) : (r.then(() => {
                    const r = y.formatDownloadNotification(t.updateInfo.version, this.app.name, e);
                    new(n(2).Notification)(r).show()
                }), t)
            }) : Promise.resolve(null)
        }
        static formatDownloadNotification(e, t, n) {
            return null == n && (n = {
                title: "A new update is ready to install",
                body: "{appName} version {version} has been downloaded and will be automatically installed on exit"
            }), {
                title: n.title.replace("{appName}", t).replace("{version}", e),
                body: n.body.replace("{appName}", t).replace("{version}", e)
            }
        }
        async isStagingMatch(e) {
            const t = e.stagingPercentage;
            let n = t;
            if (null == n) return !0;
            if (n = parseInt(n, 10), isNaN(n)) return this._logger.warn("Staging percentage is NaN: " + t), !0;
            n /= 100;
            const i = await this.stagingUserIdPromise.value,
                o = r.UUID.parse(i).readUInt32BE(12) / 4294967295;
            return this._logger.info(`Staging percentage: ${n}, percentage: ${o}, user id: ${i}`), o < n
        }
        computeFinalHeaders(e) {
            return null != this.requestHeaders && Object.assign(e, this.requestHeaders), e
        }
        async isUpdateAvailable(e) {
            const t = p.parse(e.version);
            if (null == t) throw r.newError(`This file could not be downloaded, or the latest version (from update server) does not have a valid semver version: "${e.version}"`, "ERR_UPDATER_INVALID_VERSION");
            const n = this.currentVersion;
            if (p.eq(t, n)) return !1;
            if (!await this.isStagingMatch(e)) return !1;
            const i = p.gt(t, n),
                o = p.lt(t, n);
            return !!i || this.allowDowngrade && o
        }
        async getUpdateInfoAndProvider() {
            await this.app.whenReady(), null == this.clientPromise && (this.clientPromise = this.configOnDisk.value.then(e => v.createClient(e, this, this.createProviderRuntimeOptions())));
            const e = await this.clientPromise,
                t = await this.stagingUserIdPromise.value;
            return e.setRequestHeaders(this.computeFinalHeaders({
                "x-user-staging-id": t
            })), {
                info: await e.getLatestVersion(),
                provider: e
            }
        }
        createProviderRuntimeOptions() {
            return {
                isUseMultipleRangeRequest: !0,
                platform: null == this._testOnlyOptions ? process.platform : this._testOnlyOptions.platform,
                executor: this.httpExecutor
            }
        }
        async doCheckForUpdates() {
            this.emit("checking-for-update");
            const e = await this.getUpdateInfoAndProvider(),
                t = e.info;
            if (!await this.isUpdateAvailable(t)) return this._logger.info(`Update for version ${this.currentVersion} is not available (latest version: ${t.version}, downgrade is ${this.allowDowngrade?"allowed":"disallowed"}).`), this.emit("update-not-available", t), {
                versionInfo: t,
                updateInfo: t
            };
            this.updateInfoAndProvider = e, this.onUpdateAvailable(t);
            const n = new r.CancellationToken;
            return {
                versionInfo: t,
                updateInfo: t,
                cancellationToken: n,
                downloadPromise: this.autoDownload ? this.downloadUpdate(n) : null
            }
        }
        onUpdateAvailable(e) {
            this._logger.info(`Found version ${e.version} (url: ${r.asArray(e.files).map(e=>e.url).join(", ")})`), this.emit("update-available", e)
        }
        downloadUpdate(e = new r.CancellationToken) {
            const t = this.updateInfoAndProvider;
            if (null == t) {
                const e = new Error("Please check update first");
                return this.dispatchError(e), Promise.reject(e)
            }
            this._logger.info("Downloading update from " + r.asArray(t.info.files).map(e => e.url).join(", "));
            const n = e => {
                if (!(e instanceof r.CancellationError)) try {
                    this.dispatchError(e)
                } catch (e) {
                    this._logger.warn("Cannot dispatch error event: " + (e.stack || e))
                }
                return e
            };
            try {
                return this.doDownloadUpdate({
                    updateInfoAndProvider: t,
                    requestHeaders: this.computeRequestHeaders(t.provider),
                    cancellationToken: e
                }).catch(e => {
                    throw n(e)
                })
            } catch (e) {
                return Promise.reject(n(e))
            }
        }
        dispatchError(e) {
            this.emit("error", e, (e.stack || e).toString())
        }
        dispatchUpdateDownloaded(e) {
            this.emit(m.UPDATE_DOWNLOADED, e)
        }
        async loadUpdateConfig() {
            return null == this._appUpdateConfigPath && (this._appUpdateConfigPath = this.app.appUpdateConfigPath), c.load(await a.readFile(this._appUpdateConfigPath, "utf-8"))
        }
        computeRequestHeaders(e) {
            const t = e.fileExtraDownloadHeaders;
            if (null != t) {
                const e = this.requestHeaders;
                return null == e ? t : {
                    ...t,
                    ...e
                }
            }
            return this.computeFinalHeaders({
                accept: "*/*"
            })
        }
        async getOrCreateStagingUserId() {
            const e = u.join(this.app.userDataPath, ".updaterId");
            try {
                const t = await a.readFile(e, "utf-8");
                if (r.UUID.check(t)) return t;
                this._logger.warn("Staging user id file exists, but content was invalid: " + t)
            } catch (e) {
                "ENOENT" !== e.code && this._logger.warn("Couldn't read staging user ID, creating a blank one: " + e)
            }
            const t = r.UUID.v5(i.randomBytes(4096), r.UUID.OID);
            this._logger.info("Generated new staging user ID: " + t);
            try {
                await s.outputFile(e, t)
            } catch (e) {
                this._logger.warn("Couldn't write out staging user ID: " + e)
            }
            return t
        }
        get isAddNoCacheQuery() {
            const e = this.requestHeaders;
            if (null == e) return !0;
            for (const t of Object.keys(e)) {
                const e = t.toLowerCase();
                if ("authorization" === e || "private-token" === e) return !1
            }
            return !0
        }
        async getOrCreateDownloadHelper() {
            let e = this.downloadedUpdateHelper;
            if (null == e) {
                const t = (await this.configOnDisk.value).updaterCacheDirName,
                    n = this._logger;
                null == t && n.error("updaterCacheDirName is not specified in app-update.yml Was app build using at least electron-builder 20.34.0?");
                const r = u.join(this.app.baseCachePath, t || this.app.name);
                null != n.debug && n.debug("updater cache dir: " + r), e = new d.DownloadedUpdateHelper(r), this.downloadedUpdateHelper = e
            }
            return e
        }
        async executeDownload(e) {
            const t = e.fileInfo,
                n = {
                    headers: e.downloadUpdateOptions.requestHeaders,
                    cancellationToken: e.downloadUpdateOptions.cancellationToken,
                    sha2: t.info.sha2,
                    sha512: t.info.sha512
                };
            this.listenerCount(m.DOWNLOAD_PROGRESS) > 0 && (n.onProgress = e => this.emit(m.DOWNLOAD_PROGRESS, e));
            const i = e.downloadUpdateOptions.updateInfoAndProvider.info,
                o = i.version,
                s = t.packageInfo,
                c = await this.getOrCreateDownloadHelper(),
                l = c.cacheDirForPendingUpdate;
            await a.mkdir(l, {
                recursive: !0
            });
            const p = function() {
                const t = decodeURIComponent(e.fileInfo.url.pathname);
                return t.endsWith("." + e.fileExtension) ? u.posix.basename(t) : "update." + e.fileExtension
            }();
            let h = u.join(l, p);
            const f = null == s ? null : u.join(l, `package-${o}${u.extname(s.path)||".7z"}`),
                g = async n => (await c.setDownloadedFile(h, f, i, t, p, n), await e.done({
                    ...i,
                    downloadedFile: h
                }), null == f ? [h] : [h, f]), v = this._logger, y = await c.validateDownloadedPath(h, i, t, v);
            if (null != y) return h = y, await g(!1);
            const w = async () => (await c.clear().catch(() => {}), await a.unlink(h).catch(() => {})), E = await d.createTempUpdateFile("temp-" + p, l, v);
            try {
                await e.task(E, n, f, w), await a.rename(E, h)
            } catch (e) {
                throw await w(), e instanceof r.CancellationError && (v.info("cancelled"), this.emit("update-cancelled", i)), e
            }
            return v.info(`New version ${o} has been downloaded to ${h}`), await g(!0)
        }
    }
    t.AppUpdater = y;
    class w {
        info(e) {}
        warn(e) {}
        error(e) {}
    }
    t.NoOpLogger = w
}, function(e, t, n) {
    "use strict";
    const r = n(6).fromCallback;
    e.exports = {
        copy: r(n(93)),
        copySync: n(96)
    }
}, function(e, t) {
    e.exports = {
        stringify: function(e, {
            EOL: t = "\n",
            finalEOL: n = !0,
            replacer: r = null,
            spaces: i
        } = {}) {
            const o = n ? t : "";
            return JSON.stringify(e, r, i).replace(/\n/g, t) + o
        },
        stripBom: function(e) {
            return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "")
        }
    }
}, function(e, t, n) {
    "use strict";
    const r = n(6).fromCallback,
        i = n(4),
        o = n(0),
        s = n(9),
        a = n(14).pathExists;
    e.exports = {
        outputFile: r((function(e, t, n, r) {
            "function" == typeof n && (r = n, n = "utf8");
            const c = o.dirname(e);
            a(c, (o, a) => o ? r(o) : a ? i.writeFile(e, t, n, r) : void s.mkdirs(c, o => {
                if (o) return r(o);
                i.writeFile(e, t, n, r)
            }))
        })),
        outputFileSync: function(e, ...t) {
            const n = o.dirname(e);
            if (i.existsSync(n)) return i.writeFileSync(e, ...t);
            s.mkdirsSync(n), i.writeFileSync(e, ...t)
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return null == e
    }
    n.r(t), n.d(t, "CORE_SCHEMA", (function() {
        return et
    })), n.d(t, "DEFAULT_SCHEMA", (function() {
        return tt
    })), n.d(t, "FAILSAFE_SCHEMA", (function() {
        return Xe
    })), n.d(t, "JSON_SCHEMA", (function() {
        return Ze
    })), n.d(t, "Schema", (function() {
        return Je
    })), n.d(t, "Type", (function() {
        return Qe
    })), n.d(t, "YAMLException", (function() {
        return ot
    })), n.d(t, "dump", (function() {
        return it
    })), n.d(t, "load", (function() {
        return nt
    })), n.d(t, "loadAll", (function() {
        return rt
    })), n.d(t, "safeDump", (function() {
        return lt
    })), n.d(t, "safeLoad", (function() {
        return at
    })), n.d(t, "safeLoadAll", (function() {
        return ct
    })), n.d(t, "types", (function() {
        return st
    }));
    var i = {
        isNothing: r,
        isObject: function(e) {
            return "object" == typeof e && null !== e
        },
        toArray: function(e) {
            return Array.isArray(e) ? e : r(e) ? [] : [e]
        },
        repeat: function(e, t) {
            var n, r = "";
            for (n = 0; n < t; n += 1) r += e;
            return r
        },
        isNegativeZero: function(e) {
            return 0 === e && Number.NEGATIVE_INFINITY === 1 / e
        },
        extend: function(e, t) {
            var n, r, i, o;
            if (t)
                for (n = 0, r = (o = Object.keys(t)).length; n < r; n += 1) e[i = o[n]] = t[i];
            return e
        }
    };

    function o(e, t) {
        var n = "",
            r = e.reason || "(unknown reason)";
        return e.mark ? (e.mark.name && (n += 'in "' + e.mark.name + '" '), n += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (n += "\n\n" + e.mark.snippet), r + " " + n) : r
    }

    function s(e, t) {
        Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = o(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack || ""
    }
    s.prototype = Object.create(Error.prototype), s.prototype.constructor = s, s.prototype.toString = function(e) {
        return this.name + ": " + o(this, e)
    };
    var a = s;

    function c(e, t, n, r, i) {
        var o = "",
            s = "",
            a = Math.floor(i / 2) - 1;
        return r - t > a && (t = r - a + (o = " ... ").length), n - r > a && (n = r + a - (s = " ...").length), {
            str: o + e.slice(t, n).replace(/\t/g, "→") + s,
            pos: r - t + o.length
        }
    }

    function l(e, t) {
        return i.repeat(" ", t - e.length) + e
    }
    var u = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"],
        p = ["scalar", "sequence", "mapping"],
        d = function(e, t) {
            if (t = t || {}, Object.keys(t).forEach((function(t) {
                    if (-1 === u.indexOf(t)) throw new a('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.')
                })), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
                    return !0
                }, this.construct = t.construct || function(e) {
                    return e
                }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = function(e) {
                    var t = {};
                    return null !== e && Object.keys(e).forEach((function(n) {
                        e[n].forEach((function(e) {
                            t[String(e)] = n
                        }))
                    })), t
                }(t.styleAliases || null), -1 === p.indexOf(this.kind)) throw new a('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.')
        };

    function h(e, t) {
        var n = [];
        return e[t].forEach((function(e) {
            var t = n.length;
            n.forEach((function(n, r) {
                n.tag === e.tag && n.kind === e.kind && n.multi === e.multi && (t = r)
            })), n[t] = e
        })), n
    }

    function f(e) {
        return this.extend(e)
    }
    f.prototype.extend = function(e) {
        var t = [],
            n = [];
        if (e instanceof d) n.push(e);
        else if (Array.isArray(e)) n = n.concat(e);
        else {
            if (!e || !Array.isArray(e.implicit) && !Array.isArray(e.explicit)) throw new a("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
            e.implicit && (t = t.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit))
        }
        t.forEach((function(e) {
            if (!(e instanceof d)) throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.");
            if (e.loadKind && "scalar" !== e.loadKind) throw new a("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
            if (e.multi) throw new a("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")
        })), n.forEach((function(e) {
            if (!(e instanceof d)) throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.")
        }));
        var r = Object.create(f.prototype);
        return r.implicit = (this.implicit || []).concat(t), r.explicit = (this.explicit || []).concat(n), r.compiledImplicit = h(r, "implicit"), r.compiledExplicit = h(r, "explicit"), r.compiledTypeMap = function() {
            var e, t, n = {
                scalar: {},
                sequence: {},
                mapping: {},
                fallback: {},
                multi: {
                    scalar: [],
                    sequence: [],
                    mapping: [],
                    fallback: []
                }
            };

            function r(e) {
                e.multi ? (n.multi[e.kind].push(e), n.multi.fallback.push(e)) : n[e.kind][e.tag] = n.fallback[e.tag] = e
            }
            for (e = 0, t = arguments.length; e < t; e += 1) arguments[e].forEach(r);
            return n
        }(r.compiledImplicit, r.compiledExplicit), r
    };
    var g = f,
        m = new d("tag:yaml.org,2002:str", {
            kind: "scalar",
            construct: function(e) {
                return null !== e ? e : ""
            }
        }),
        v = new d("tag:yaml.org,2002:seq", {
            kind: "sequence",
            construct: function(e) {
                return null !== e ? e : []
            }
        }),
        y = new d("tag:yaml.org,2002:map", {
            kind: "mapping",
            construct: function(e) {
                return null !== e ? e : {}
            }
        }),
        w = new g({
            explicit: [m, v, y]
        }),
        E = new d("tag:yaml.org,2002:null", {
            kind: "scalar",
            resolve: function(e) {
                if (null === e) return !0;
                var t = e.length;
                return 1 === t && "~" === e || 4 === t && ("null" === e || "Null" === e || "NULL" === e)
            },
            construct: function() {
                return null
            },
            predicate: function(e) {
                return null === e
            },
            represent: {
                canonical: function() {
                    return "~"
                },
                lowercase: function() {
                    return "null"
                },
                uppercase: function() {
                    return "NULL"
                },
                camelcase: function() {
                    return "Null"
                },
                empty: function() {
                    return ""
                }
            },
            defaultStyle: "lowercase"
        }),
        b = new d("tag:yaml.org,2002:bool", {
            kind: "scalar",
            resolve: function(e) {
                if (null === e) return !1;
                var t = e.length;
                return 4 === t && ("true" === e || "True" === e || "TRUE" === e) || 5 === t && ("false" === e || "False" === e || "FALSE" === e)
            },
            construct: function(e) {
                return "true" === e || "True" === e || "TRUE" === e
            },
            predicate: function(e) {
                return "[object Boolean]" === Object.prototype.toString.call(e)
            },
            represent: {
                lowercase: function(e) {
                    return e ? "true" : "false"
                },
                uppercase: function(e) {
                    return e ? "TRUE" : "FALSE"
                },
                camelcase: function(e) {
                    return e ? "True" : "False"
                }
            },
            defaultStyle: "lowercase"
        });

    function A(e) {
        return 48 <= e && e <= 55
    }

    function C(e) {
        return 48 <= e && e <= 57
    }
    var T = new d("tag:yaml.org,2002:int", {
            kind: "scalar",
            resolve: function(e) {
                if (null === e) return !1;
                var t, n, r = e.length,
                    i = 0,
                    o = !1;
                if (!r) return !1;
                if ("-" !== (t = e[i]) && "+" !== t || (t = e[++i]), "0" === t) {
                    if (i + 1 === r) return !0;
                    if ("b" === (t = e[++i])) {
                        for (i++; i < r; i++)
                            if ("_" !== (t = e[i])) {
                                if ("0" !== t && "1" !== t) return !1;
                                o = !0
                            } return o && "_" !== t
                    }
                    if ("x" === t) {
                        for (i++; i < r; i++)
                            if ("_" !== (t = e[i])) {
                                if (!(48 <= (n = e.charCodeAt(i)) && n <= 57 || 65 <= n && n <= 70 || 97 <= n && n <= 102)) return !1;
                                o = !0
                            } return o && "_" !== t
                    }
                    if ("o" === t) {
                        for (i++; i < r; i++)
                            if ("_" !== (t = e[i])) {
                                if (!A(e.charCodeAt(i))) return !1;
                                o = !0
                            } return o && "_" !== t
                    }
                }
                if ("_" === t) return !1;
                for (; i < r; i++)
                    if ("_" !== (t = e[i])) {
                        if (!C(e.charCodeAt(i))) return !1;
                        o = !0
                    } return !(!o || "_" === t)
            },
            construct: function(e) {
                var t, n = e,
                    r = 1;
                if (-1 !== n.indexOf("_") && (n = n.replace(/_/g, "")), "-" !== (t = n[0]) && "+" !== t || ("-" === t && (r = -1), t = (n = n.slice(1))[0]), "0" === n) return 0;
                if ("0" === t) {
                    if ("b" === n[1]) return r * parseInt(n.slice(2), 2);
                    if ("x" === n[1]) return r * parseInt(n.slice(2), 16);
                    if ("o" === n[1]) return r * parseInt(n.slice(2), 8)
                }
                return r * parseInt(n, 10)
            },
            predicate: function(e) {
                return "[object Number]" === Object.prototype.toString.call(e) && e % 1 == 0 && !i.isNegativeZero(e)
            },
            represent: {
                binary: function(e) {
                    return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1)
                },
                octal: function(e) {
                    return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1)
                },
                decimal: function(e) {
                    return e.toString(10)
                },
                hexadecimal: function(e) {
                    return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1)
                }
            },
            defaultStyle: "decimal",
            styleAliases: {
                binary: [2, "bin"],
                octal: [8, "oct"],
                decimal: [10, "dec"],
                hexadecimal: [16, "hex"]
            }
        }),
        S = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),
        I = /^[-+]?[0-9]+e/,
        O = new d("tag:yaml.org,2002:float", {
            kind: "scalar",
            resolve: function(e) {
                return null !== e && !(!S.test(e) || "_" === e[e.length - 1])
            },
            construct: function(e) {
                var t, n;
                return n = "-" === (t = e.replace(/_/g, "").toLowerCase())[0] ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), ".inf" === t ? 1 === n ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === t ? NaN : n * parseFloat(t, 10)
            },
            predicate: function(e) {
                return "[object Number]" === Object.prototype.toString.call(e) && (e % 1 != 0 || i.isNegativeZero(e))
            },
            represent: function(e, t) {
                var n;
                if (isNaN(e)) switch (t) {
                    case "lowercase":
                        return ".nan";
                    case "uppercase":
                        return ".NAN";
                    case "camelcase":
                        return ".NaN"
                } else if (Number.POSITIVE_INFINITY === e) switch (t) {
                    case "lowercase":
                        return ".inf";
                    case "uppercase":
                        return ".INF";
                    case "camelcase":
                        return ".Inf"
                } else if (Number.NEGATIVE_INFINITY === e) switch (t) {
                    case "lowercase":
                        return "-.inf";
                    case "uppercase":
                        return "-.INF";
                    case "camelcase":
                        return "-.Inf"
                } else if (i.isNegativeZero(e)) return "-0.0";
                return n = e.toString(10), I.test(n) ? n.replace("e", ".e") : n
            },
            defaultStyle: "lowercase"
        }),
        N = w.extend({
            implicit: [E, b, T, O]
        }),
        D = N,
        R = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
        P = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),
        x = new d("tag:yaml.org,2002:timestamp", {
            kind: "scalar",
            resolve: function(e) {
                return null !== e && (null !== R.exec(e) || null !== P.exec(e))
            },
            construct: function(e) {
                var t, n, r, i, o, s, a, c, l = 0,
                    u = null;
                if (null === (t = R.exec(e)) && (t = P.exec(e)), null === t) throw new Error("Date resolve error");
                if (n = +t[1], r = +t[2] - 1, i = +t[3], !t[4]) return new Date(Date.UTC(n, r, i));
                if (o = +t[4], s = +t[5], a = +t[6], t[7]) {
                    for (l = t[7].slice(0, 3); l.length < 3;) l += "0";
                    l = +l
                }
                return t[9] && (u = 6e4 * (60 * +t[10] + +(t[11] || 0)), "-" === t[9] && (u = -u)), c = new Date(Date.UTC(n, r, i, o, s, a, l)), u && c.setTime(c.getTime() - u), c
            },
            instanceOf: Date,
            represent: function(e) {
                return e.toISOString()
            }
        }),
        k = new d("tag:yaml.org,2002:merge", {
            kind: "scalar",
            resolve: function(e) {
                return "<<" === e || null === e
            }
        }),
        _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r",
        F = new d("tag:yaml.org,2002:binary", {
            kind: "scalar",
            resolve: function(e) {
                if (null === e) return !1;
                var t, n, r = 0,
                    i = e.length,
                    o = _;
                for (n = 0; n < i; n++)
                    if (!((t = o.indexOf(e.charAt(n))) > 64)) {
                        if (t < 0) return !1;
                        r += 6
                    } return r % 8 == 0
            },
            construct: function(e) {
                var t, n, r = e.replace(/[\r\n=]/g, ""),
                    i = r.length,
                    o = _,
                    s = 0,
                    a = [];
                for (t = 0; t < i; t++) t % 4 == 0 && t && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(255 & s)), s = s << 6 | o.indexOf(r.charAt(t));
                return 0 == (n = i % 4 * 6) ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(255 & s)) : 18 === n ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : 12 === n && a.push(s >> 4 & 255), new Uint8Array(a)
            },
            predicate: function(e) {
                return "[object Uint8Array]" === Object.prototype.toString.call(e)
            },
            represent: function(e) {
                var t, n, r = "",
                    i = 0,
                    o = e.length,
                    s = _;
                for (t = 0; t < o; t++) t % 3 == 0 && t && (r += s[i >> 18 & 63], r += s[i >> 12 & 63], r += s[i >> 6 & 63], r += s[63 & i]), i = (i << 8) + e[t];
                return 0 == (n = o % 3) ? (r += s[i >> 18 & 63], r += s[i >> 12 & 63], r += s[i >> 6 & 63], r += s[63 & i]) : 2 === n ? (r += s[i >> 10 & 63], r += s[i >> 4 & 63], r += s[i << 2 & 63], r += s[64]) : 1 === n && (r += s[i >> 2 & 63], r += s[i << 4 & 63], r += s[64], r += s[64]), r
            }
        }),
        U = Object.prototype.hasOwnProperty,
        L = Object.prototype.toString,
        M = new d("tag:yaml.org,2002:omap", {
            kind: "sequence",
            resolve: function(e) {
                if (null === e) return !0;
                var t, n, r, i, o, s = [],
                    a = e;
                for (t = 0, n = a.length; t < n; t += 1) {
                    if (r = a[t], o = !1, "[object Object]" !== L.call(r)) return !1;
                    for (i in r)
                        if (U.call(r, i)) {
                            if (o) return !1;
                            o = !0
                        } if (!o) return !1;
                    if (-1 !== s.indexOf(i)) return !1;
                    s.push(i)
                }
                return !0
            },
            construct: function(e) {
                return null !== e ? e : []
            }
        }),
        B = Object.prototype.toString,
        j = new d("tag:yaml.org,2002:pairs", {
            kind: "sequence",
            resolve: function(e) {
                if (null === e) return !0;
                var t, n, r, i, o, s = e;
                for (o = new Array(s.length), t = 0, n = s.length; t < n; t += 1) {
                    if (r = s[t], "[object Object]" !== B.call(r)) return !1;
                    if (1 !== (i = Object.keys(r)).length) return !1;
                    o[t] = [i[0], r[i[0]]]
                }
                return !0
            },
            construct: function(e) {
                if (null === e) return [];
                var t, n, r, i, o, s = e;
                for (o = new Array(s.length), t = 0, n = s.length; t < n; t += 1) r = s[t], i = Object.keys(r), o[t] = [i[0], r[i[0]]];
                return o
            }
        }),
        q = Object.prototype.hasOwnProperty,
        H = new d("tag:yaml.org,2002:set", {
            kind: "mapping",
            resolve: function(e) {
                if (null === e) return !0;
                var t, n = e;
                for (t in n)
                    if (q.call(n, t) && null !== n[t]) return !1;
                return !0
            },
            construct: function(e) {
                return null !== e ? e : {}
            }
        }),
        G = D.extend({
            implicit: [x, k],
            explicit: [F, M, j, H]
        }),
        $ = Object.prototype.hasOwnProperty,
        V = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
        Y = /[\x85\u2028\u2029]/,
        W = /[,\[\]\{\}]/,
        K = /^(?:!|!!|![a-z\-]+!)$/i,
        z = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;

    function Q(e) {
        return Object.prototype.toString.call(e)
    }

    function J(e) {
        return 10 === e || 13 === e
    }

    function X(e) {
        return 9 === e || 32 === e
    }

    function Z(e) {
        return 9 === e || 32 === e || 10 === e || 13 === e
    }

    function ee(e) {
        return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e
    }

    function te(e) {
        var t;
        return 48 <= e && e <= 57 ? e - 48 : 97 <= (t = 32 | e) && t <= 102 ? t - 97 + 10 : -1
    }

    function ne(e) {
        return 48 === e ? "\0" : 97 === e ? "" : 98 === e ? "\b" : 116 === e || 9 === e ? "\t" : 110 === e ? "\n" : 118 === e ? "\v" : 102 === e ? "\f" : 114 === e ? "\r" : 101 === e ? "" : 32 === e ? " " : 34 === e ? '"' : 47 === e ? "/" : 92 === e ? "\\" : 78 === e ? "" : 95 === e ? " " : 76 === e ? "\u2028" : 80 === e ? "\u2029" : ""
    }

    function re(e) {
        return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10), 56320 + (e - 65536 & 1023))
    }
    for (var ie = new Array(256), oe = new Array(256), se = 0; se < 256; se++) ie[se] = ne(se) ? 1 : 0, oe[se] = ne(se);

    function ae(e, t) {
        this.input = e, this.filename = t.filename || null, this.schema = t.schema || G, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = []
    }

    function ce(e, t) {
        var n = {
            name: e.filename,
            buffer: e.input.slice(0, -1),
            position: e.position,
            line: e.line,
            column: e.position - e.lineStart
        };
        return n.snippet = function(e, t) {
            if (t = Object.create(t || null), !e.buffer) return null;
            t.maxLength || (t.maxLength = 79), "number" != typeof t.indent && (t.indent = 1), "number" != typeof t.linesBefore && (t.linesBefore = 3), "number" != typeof t.linesAfter && (t.linesAfter = 2);
            for (var n, r = /\r?\n|\r|\0/g, o = [0], s = [], a = -1; n = r.exec(e.buffer);) s.push(n.index), o.push(n.index + n[0].length), e.position <= n.index && a < 0 && (a = o.length - 2);
            a < 0 && (a = o.length - 1);
            var u, p, d = "",
                h = Math.min(e.line + t.linesAfter, s.length).toString().length,
                f = t.maxLength - (t.indent + h + 3);
            for (u = 1; u <= t.linesBefore && !(a - u < 0); u++) p = c(e.buffer, o[a - u], s[a - u], e.position - (o[a] - o[a - u]), f), d = i.repeat(" ", t.indent) + l((e.line - u + 1).toString(), h) + " | " + p.str + "\n" + d;
            for (p = c(e.buffer, o[a], s[a], e.position, f), d += i.repeat(" ", t.indent) + l((e.line + 1).toString(), h) + " | " + p.str + "\n", d += i.repeat("-", t.indent + h + 3 + p.pos) + "^\n", u = 1; u <= t.linesAfter && !(a + u >= s.length); u++) p = c(e.buffer, o[a + u], s[a + u], e.position - (o[a] - o[a + u]), f), d += i.repeat(" ", t.indent) + l((e.line + u + 1).toString(), h) + " | " + p.str + "\n";
            return d.replace(/\n$/, "")
        }(n), new a(t, n)
    }

    function le(e, t) {
        throw ce(e, t)
    }

    function ue(e, t) {
        e.onWarning && e.onWarning.call(null, ce(e, t))
    }
    var pe = {
        YAML: function(e, t, n) {
            var r, i, o;
            null !== e.version && le(e, "duplication of %YAML directive"), 1 !== n.length && le(e, "YAML directive accepts exactly one argument"), null === (r = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) && le(e, "ill-formed argument of the YAML directive"), i = parseInt(r[1], 10), o = parseInt(r[2], 10), 1 !== i && le(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, 1 !== o && 2 !== o && ue(e, "unsupported YAML version of the document")
        },
        TAG: function(e, t, n) {
            var r, i;
            2 !== n.length && le(e, "TAG directive accepts exactly two arguments"), r = n[0], i = n[1], K.test(r) || le(e, "ill-formed tag handle (first argument) of the TAG directive"), $.call(e.tagMap, r) && le(e, 'there is a previously declared suffix for "' + r + '" tag handle'), z.test(i) || le(e, "ill-formed tag prefix (second argument) of the TAG directive");
            try {
                i = decodeURIComponent(i)
            } catch (t) {
                le(e, "tag prefix is malformed: " + i)
            }
            e.tagMap[r] = i
        }
    };

    function de(e, t, n, r) {
        var i, o, s, a;
        if (t < n) {
            if (a = e.input.slice(t, n), r)
                for (i = 0, o = a.length; i < o; i += 1) 9 === (s = a.charCodeAt(i)) || 32 <= s && s <= 1114111 || le(e, "expected valid JSON character");
            else V.test(a) && le(e, "the stream contains non-printable characters");
            e.result += a
        }
    }

    function he(e, t, n, r) {
        var o, s, a, c;
        for (i.isObject(n) || le(e, "cannot merge mappings; the provided source object is unacceptable"), a = 0, c = (o = Object.keys(n)).length; a < c; a += 1) s = o[a], $.call(t, s) || (t[s] = n[s], r[s] = !0)
    }

    function fe(e, t, n, r, i, o, s, a, c) {
        var l, u;
        if (Array.isArray(i))
            for (l = 0, u = (i = Array.prototype.slice.call(i)).length; l < u; l += 1) Array.isArray(i[l]) && le(e, "nested arrays are not supported inside keys"), "object" == typeof i && "[object Object]" === Q(i[l]) && (i[l] = "[object Object]");
        if ("object" == typeof i && "[object Object]" === Q(i) && (i = "[object Object]"), i = String(i), null === t && (t = {}), "tag:yaml.org,2002:merge" === r)
            if (Array.isArray(o))
                for (l = 0, u = o.length; l < u; l += 1) he(e, t, o[l], n);
            else he(e, t, o, n);
        else e.json || $.call(n, i) || !$.call(t, i) || (e.line = s || e.line, e.lineStart = a || e.lineStart, e.position = c || e.position, le(e, "duplicated mapping key")), "__proto__" === i ? Object.defineProperty(t, i, {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: o
        }) : t[i] = o, delete n[i];
        return t
    }

    function ge(e) {
        var t;
        10 === (t = e.input.charCodeAt(e.position)) ? e.position++ : 13 === t ? (e.position++, 10 === e.input.charCodeAt(e.position) && e.position++) : le(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1
    }

    function me(e, t, n) {
        for (var r = 0, i = e.input.charCodeAt(e.position); 0 !== i;) {
            for (; X(i);) 9 === i && -1 === e.firstTabInLine && (e.firstTabInLine = e.position), i = e.input.charCodeAt(++e.position);
            if (t && 35 === i)
                do {
                    i = e.input.charCodeAt(++e.position)
                } while (10 !== i && 13 !== i && 0 !== i);
            if (!J(i)) break;
            for (ge(e), i = e.input.charCodeAt(e.position), r++, e.lineIndent = 0; 32 === i;) e.lineIndent++, i = e.input.charCodeAt(++e.position)
        }
        return -1 !== n && 0 !== r && e.lineIndent < n && ue(e, "deficient indentation"), r
    }

    function ve(e) {
        var t, n = e.position;
        return !(45 !== (t = e.input.charCodeAt(n)) && 46 !== t || t !== e.input.charCodeAt(n + 1) || t !== e.input.charCodeAt(n + 2) || (n += 3, 0 !== (t = e.input.charCodeAt(n)) && !Z(t)))
    }

    function ye(e, t) {
        1 === t ? e.result += " " : t > 1 && (e.result += i.repeat("\n", t - 1))
    }

    function we(e, t) {
        var n, r, i = e.tag,
            o = e.anchor,
            s = [],
            a = !1;
        if (-1 !== e.firstTabInLine) return !1;
        for (null !== e.anchor && (e.anchorMap[e.anchor] = s), r = e.input.charCodeAt(e.position); 0 !== r && (-1 !== e.firstTabInLine && (e.position = e.firstTabInLine, le(e, "tab characters must not be used in indentation")), 45 === r) && Z(e.input.charCodeAt(e.position + 1));)
            if (a = !0, e.position++, me(e, !0, -1) && e.lineIndent <= t) s.push(null), r = e.input.charCodeAt(e.position);
            else if (n = e.line, Ae(e, t, 3, !1, !0), s.push(e.result), me(e, !0, -1), r = e.input.charCodeAt(e.position), (e.line === n || e.lineIndent > t) && 0 !== r) le(e, "bad indentation of a sequence entry");
        else if (e.lineIndent < t) break;
        return !!a && (e.tag = i, e.anchor = o, e.kind = "sequence", e.result = s, !0)
    }

    function Ee(e) {
        var t, n, r, i, o = !1,
            s = !1;
        if (33 !== (i = e.input.charCodeAt(e.position))) return !1;
        if (null !== e.tag && le(e, "duplication of a tag property"), 60 === (i = e.input.charCodeAt(++e.position)) ? (o = !0, i = e.input.charCodeAt(++e.position)) : 33 === i ? (s = !0, n = "!!", i = e.input.charCodeAt(++e.position)) : n = "!", t = e.position, o) {
            do {
                i = e.input.charCodeAt(++e.position)
            } while (0 !== i && 62 !== i);
            e.position < e.length ? (r = e.input.slice(t, e.position), i = e.input.charCodeAt(++e.position)) : le(e, "unexpected end of the stream within a verbatim tag")
        } else {
            for (; 0 !== i && !Z(i);) 33 === i && (s ? le(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1), K.test(n) || le(e, "named tag handle cannot contain such characters"), s = !0, t = e.position + 1)), i = e.input.charCodeAt(++e.position);
            r = e.input.slice(t, e.position), W.test(r) && le(e, "tag suffix cannot contain flow indicator characters")
        }
        r && !z.test(r) && le(e, "tag name cannot contain such characters: " + r);
        try {
            r = decodeURIComponent(r)
        } catch (t) {
            le(e, "tag name is malformed: " + r)
        }
        return o ? e.tag = r : $.call(e.tagMap, n) ? e.tag = e.tagMap[n] + r : "!" === n ? e.tag = "!" + r : "!!" === n ? e.tag = "tag:yaml.org,2002:" + r : le(e, 'undeclared tag handle "' + n + '"'), !0
    }

    function be(e) {
        var t, n;
        if (38 !== (n = e.input.charCodeAt(e.position))) return !1;
        for (null !== e.anchor && le(e, "duplication of an anchor property"), n = e.input.charCodeAt(++e.position), t = e.position; 0 !== n && !Z(n) && !ee(n);) n = e.input.charCodeAt(++e.position);
        return e.position === t && le(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0
    }

    function Ae(e, t, n, r, o) {
        var s, a, c, l, u, p, d, h, f, g = 1,
            m = !1,
            v = !1;
        if (null !== e.listener && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, s = a = c = 4 === n || 3 === n, r && me(e, !0, -1) && (m = !0, e.lineIndent > t ? g = 1 : e.lineIndent === t ? g = 0 : e.lineIndent < t && (g = -1)), 1 === g)
            for (; Ee(e) || be(e);) me(e, !0, -1) ? (m = !0, c = s, e.lineIndent > t ? g = 1 : e.lineIndent === t ? g = 0 : e.lineIndent < t && (g = -1)) : c = !1;
        if (c && (c = m || o), 1 !== g && 4 !== n || (h = 1 === n || 2 === n ? t : t + 1, f = e.position - e.lineStart, 1 === g ? c && (we(e, f) || function(e, t, n) {
                var r, i, o, s, a, c, l, u = e.tag,
                    p = e.anchor,
                    d = {},
                    h = Object.create(null),
                    f = null,
                    g = null,
                    m = null,
                    v = !1,
                    y = !1;
                if (-1 !== e.firstTabInLine) return !1;
                for (null !== e.anchor && (e.anchorMap[e.anchor] = d), l = e.input.charCodeAt(e.position); 0 !== l;) {
                    if (v || -1 === e.firstTabInLine || (e.position = e.firstTabInLine, le(e, "tab characters must not be used in indentation")), r = e.input.charCodeAt(e.position + 1), o = e.line, 63 !== l && 58 !== l || !Z(r)) {
                        if (s = e.line, a = e.lineStart, c = e.position, !Ae(e, n, 2, !1, !0)) break;
                        if (e.line === o) {
                            for (l = e.input.charCodeAt(e.position); X(l);) l = e.input.charCodeAt(++e.position);
                            if (58 === l) Z(l = e.input.charCodeAt(++e.position)) || le(e, "a whitespace character is expected after the key-value separator within a block mapping"), v && (fe(e, d, h, f, g, null, s, a, c), f = g = m = null), y = !0, v = !1, i = !1, f = e.tag, g = e.result;
                            else {
                                if (!y) return e.tag = u, e.anchor = p, !0;
                                le(e, "can not read an implicit mapping pair; a colon is missed")
                            }
                        } else {
                            if (!y) return e.tag = u, e.anchor = p, !0;
                            le(e, "can not read a block mapping entry; a multiline key may not be an implicit key")
                        }
                    } else 63 === l ? (v && (fe(e, d, h, f, g, null, s, a, c), f = g = m = null), y = !0, v = !0, i = !0) : v ? (v = !1, i = !0) : le(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, l = r;
                    if ((e.line === o || e.lineIndent > t) && (v && (s = e.line, a = e.lineStart, c = e.position), Ae(e, t, 4, !0, i) && (v ? g = e.result : m = e.result), v || (fe(e, d, h, f, g, m, s, a, c), f = g = m = null), me(e, !0, -1), l = e.input.charCodeAt(e.position)), (e.line === o || e.lineIndent > t) && 0 !== l) le(e, "bad indentation of a mapping entry");
                    else if (e.lineIndent < t) break
                }
                return v && fe(e, d, h, f, g, null, s, a, c), y && (e.tag = u, e.anchor = p, e.kind = "mapping", e.result = d), y
            }(e, f, h)) || function(e, t) {
                var n, r, i, o, s, a, c, l, u, p, d, h, f = !0,
                    g = e.tag,
                    m = e.anchor,
                    v = Object.create(null);
                if (91 === (h = e.input.charCodeAt(e.position))) s = 93, l = !1, o = [];
                else {
                    if (123 !== h) return !1;
                    s = 125, l = !0, o = {}
                }
                for (null !== e.anchor && (e.anchorMap[e.anchor] = o), h = e.input.charCodeAt(++e.position); 0 !== h;) {
                    if (me(e, !0, t), (h = e.input.charCodeAt(e.position)) === s) return e.position++, e.tag = g, e.anchor = m, e.kind = l ? "mapping" : "sequence", e.result = o, !0;
                    f ? 44 === h && le(e, "expected the node content, but found ','") : le(e, "missed comma between flow collection entries"), d = null, a = c = !1, 63 === h && Z(e.input.charCodeAt(e.position + 1)) && (a = c = !0, e.position++, me(e, !0, t)), n = e.line, r = e.lineStart, i = e.position, Ae(e, t, 1, !1, !0), p = e.tag, u = e.result, me(e, !0, t), h = e.input.charCodeAt(e.position), !c && e.line !== n || 58 !== h || (a = !0, h = e.input.charCodeAt(++e.position), me(e, !0, t), Ae(e, t, 1, !1, !0), d = e.result), l ? fe(e, o, v, p, u, d, n, r, i) : a ? o.push(fe(e, null, v, p, u, d, n, r, i)) : o.push(u), me(e, !0, t), 44 === (h = e.input.charCodeAt(e.position)) ? (f = !0, h = e.input.charCodeAt(++e.position)) : f = !1
                }
                le(e, "unexpected end of the stream within a flow collection")
            }(e, h) ? v = !0 : (a && function(e, t) {
                var n, r, o, s, a, c = 1,
                    l = !1,
                    u = !1,
                    p = t,
                    d = 0,
                    h = !1;
                if (124 === (s = e.input.charCodeAt(e.position))) r = !1;
                else {
                    if (62 !== s) return !1;
                    r = !0
                }
                for (e.kind = "scalar", e.result = ""; 0 !== s;)
                    if (43 === (s = e.input.charCodeAt(++e.position)) || 45 === s) 1 === c ? c = 43 === s ? 3 : 2 : le(e, "repeat of a chomping mode identifier");
                    else {
                        if (!((o = 48 <= (a = s) && a <= 57 ? a - 48 : -1) >= 0)) break;
                        0 === o ? le(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : u ? le(e, "repeat of an indentation width identifier") : (p = t + o - 1, u = !0)
                    } if (X(s)) {
                    do {
                        s = e.input.charCodeAt(++e.position)
                    } while (X(s));
                    if (35 === s)
                        do {
                            s = e.input.charCodeAt(++e.position)
                        } while (!J(s) && 0 !== s)
                }
                for (; 0 !== s;) {
                    for (ge(e), e.lineIndent = 0, s = e.input.charCodeAt(e.position);
                        (!u || e.lineIndent < p) && 32 === s;) e.lineIndent++, s = e.input.charCodeAt(++e.position);
                    if (!u && e.lineIndent > p && (p = e.lineIndent), J(s)) d++;
                    else {
                        if (e.lineIndent < p) {
                            3 === c ? e.result += i.repeat("\n", l ? 1 + d : d) : 1 === c && l && (e.result += "\n");
                            break
                        }
                        for (r ? X(s) ? (h = !0, e.result += i.repeat("\n", l ? 1 + d : d)) : h ? (h = !1, e.result += i.repeat("\n", d + 1)) : 0 === d ? l && (e.result += " ") : e.result += i.repeat("\n", d) : e.result += i.repeat("\n", l ? 1 + d : d), l = !0, u = !0, d = 0, n = e.position; !J(s) && 0 !== s;) s = e.input.charCodeAt(++e.position);
                        de(e, n, e.position, !1)
                    }
                }
                return !0
            }(e, h) || function(e, t) {
                var n, r, i;
                if (39 !== (n = e.input.charCodeAt(e.position))) return !1;
                for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; 0 !== (n = e.input.charCodeAt(e.position));)
                    if (39 === n) {
                        if (de(e, r, e.position, !0), 39 !== (n = e.input.charCodeAt(++e.position))) return !0;
                        r = e.position, e.position++, i = e.position
                    } else J(n) ? (de(e, r, i, !0), ye(e, me(e, !1, t)), r = i = e.position) : e.position === e.lineStart && ve(e) ? le(e, "unexpected end of the document within a single quoted scalar") : (e.position++, i = e.position);
                le(e, "unexpected end of the stream within a single quoted scalar")
            }(e, h) || function(e, t) {
                var n, r, i, o, s, a, c;
                if (34 !== (a = e.input.charCodeAt(e.position))) return !1;
                for (e.kind = "scalar", e.result = "", e.position++, n = r = e.position; 0 !== (a = e.input.charCodeAt(e.position));) {
                    if (34 === a) return de(e, n, e.position, !0), e.position++, !0;
                    if (92 === a) {
                        if (de(e, n, e.position, !0), J(a = e.input.charCodeAt(++e.position))) me(e, !1, t);
                        else if (a < 256 && ie[a]) e.result += oe[a], e.position++;
                        else if ((s = 120 === (c = a) ? 2 : 117 === c ? 4 : 85 === c ? 8 : 0) > 0) {
                            for (i = s, o = 0; i > 0; i--)(s = te(a = e.input.charCodeAt(++e.position))) >= 0 ? o = (o << 4) + s : le(e, "expected hexadecimal character");
                            e.result += re(o), e.position++
                        } else le(e, "unknown escape sequence");
                        n = r = e.position
                    } else J(a) ? (de(e, n, r, !0), ye(e, me(e, !1, t)), n = r = e.position) : e.position === e.lineStart && ve(e) ? le(e, "unexpected end of the document within a double quoted scalar") : (e.position++, r = e.position)
                }
                le(e, "unexpected end of the stream within a double quoted scalar")
            }(e, h) ? v = !0 : function(e) {
                var t, n, r;
                if (42 !== (r = e.input.charCodeAt(e.position))) return !1;
                for (r = e.input.charCodeAt(++e.position), t = e.position; 0 !== r && !Z(r) && !ee(r);) r = e.input.charCodeAt(++e.position);
                return e.position === t && le(e, "name of an alias node must contain at least one character"), n = e.input.slice(t, e.position), $.call(e.anchorMap, n) || le(e, 'unidentified alias "' + n + '"'), e.result = e.anchorMap[n], me(e, !0, -1), !0
            }(e) ? (v = !0, null === e.tag && null === e.anchor || le(e, "alias node should not have any properties")) : function(e, t, n) {
                var r, i, o, s, a, c, l, u, p = e.kind,
                    d = e.result;
                if (Z(u = e.input.charCodeAt(e.position)) || ee(u) || 35 === u || 38 === u || 42 === u || 33 === u || 124 === u || 62 === u || 39 === u || 34 === u || 37 === u || 64 === u || 96 === u) return !1;
                if ((63 === u || 45 === u) && (Z(r = e.input.charCodeAt(e.position + 1)) || n && ee(r))) return !1;
                for (e.kind = "scalar", e.result = "", i = o = e.position, s = !1; 0 !== u;) {
                    if (58 === u) {
                        if (Z(r = e.input.charCodeAt(e.position + 1)) || n && ee(r)) break
                    } else if (35 === u) {
                        if (Z(e.input.charCodeAt(e.position - 1))) break
                    } else {
                        if (e.position === e.lineStart && ve(e) || n && ee(u)) break;
                        if (J(u)) {
                            if (a = e.line, c = e.lineStart, l = e.lineIndent, me(e, !1, -1), e.lineIndent >= t) {
                                s = !0, u = e.input.charCodeAt(e.position);
                                continue
                            }
                            e.position = o, e.line = a, e.lineStart = c, e.lineIndent = l;
                            break
                        }
                    }
                    s && (de(e, i, o, !1), ye(e, e.line - a), i = o = e.position, s = !1), X(u) || (o = e.position + 1), u = e.input.charCodeAt(++e.position)
                }
                return de(e, i, o, !1), !!e.result || (e.kind = p, e.result = d, !1)
            }(e, h, 1 === n) && (v = !0, null === e.tag && (e.tag = "?")), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : 0 === g && (v = c && we(e, f))), null === e.tag) null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
        else if ("?" === e.tag) {
            for (null !== e.result && "scalar" !== e.kind && le(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), l = 0, u = e.implicitTypes.length; l < u; l += 1)
                if ((d = e.implicitTypes[l]).resolve(e.result)) {
                    e.result = d.construct(e.result), e.tag = d.tag, null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
                    break
                }
        } else if ("!" !== e.tag) {
            if ($.call(e.typeMap[e.kind || "fallback"], e.tag)) d = e.typeMap[e.kind || "fallback"][e.tag];
            else
                for (d = null, l = 0, u = (p = e.typeMap.multi[e.kind || "fallback"]).length; l < u; l += 1)
                    if (e.tag.slice(0, p[l].tag.length) === p[l].tag) {
                        d = p[l];
                        break
                    } d || le(e, "unknown tag !<" + e.tag + ">"), null !== e.result && d.kind !== e.kind && le(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + d.kind + '", not "' + e.kind + '"'), d.resolve(e.result, e.tag) ? (e.result = d.construct(e.result, e.tag), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : le(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")
        }
        return null !== e.listener && e.listener("close", e), null !== e.tag || null !== e.anchor || v
    }

    function Ce(e) {
        var t, n, r, i, o = e.position,
            s = !1;
        for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = Object.create(null), e.anchorMap = Object.create(null); 0 !== (i = e.input.charCodeAt(e.position)) && (me(e, !0, -1), i = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || 37 !== i));) {
            for (s = !0, i = e.input.charCodeAt(++e.position), t = e.position; 0 !== i && !Z(i);) i = e.input.charCodeAt(++e.position);
            for (r = [], (n = e.input.slice(t, e.position)).length < 1 && le(e, "directive name must not be less than one character in length"); 0 !== i;) {
                for (; X(i);) i = e.input.charCodeAt(++e.position);
                if (35 === i) {
                    do {
                        i = e.input.charCodeAt(++e.position)
                    } while (0 !== i && !J(i));
                    break
                }
                if (J(i)) break;
                for (t = e.position; 0 !== i && !Z(i);) i = e.input.charCodeAt(++e.position);
                r.push(e.input.slice(t, e.position))
            }
            0 !== i && ge(e), $.call(pe, n) ? pe[n](e, n, r) : ue(e, 'unknown document directive "' + n + '"')
        }
        me(e, !0, -1), 0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3, me(e, !0, -1)) : s && le(e, "directives end mark is expected"), Ae(e, e.lineIndent - 1, 4, !1, !0), me(e, !0, -1), e.checkLineBreaks && Y.test(e.input.slice(o, e.position)) && ue(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && ve(e) ? 46 === e.input.charCodeAt(e.position) && (e.position += 3, me(e, !0, -1)) : e.position < e.length - 1 && le(e, "end of the stream or a document separator is expected")
    }

    function Te(e, t) {
        t = t || {}, 0 !== (e = String(e)).length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += "\n"), 65279 === e.charCodeAt(0) && (e = e.slice(1)));
        var n = new ae(e, t),
            r = e.indexOf("\0");
        for (-1 !== r && (n.position = r, le(n, "null byte is not allowed in input")), n.input += "\0"; 32 === n.input.charCodeAt(n.position);) n.lineIndent += 1, n.position += 1;
        for (; n.position < n.length - 1;) Ce(n);
        return n.documents
    }
    var Se = function(e, t, n) {
            null !== t && "object" == typeof t && void 0 === n && (n = t, t = null);
            var r = Te(e, n);
            if ("function" != typeof t) return r;
            for (var i = 0, o = r.length; i < o; i += 1) t(r[i])
        },
        Ie = function(e, t) {
            var n = Te(e, t);
            if (0 !== n.length) {
                if (1 === n.length) return n[0];
                throw new a("expected a single document in the stream, but found more")
            }
        },
        Oe = Object.prototype.toString,
        Ne = Object.prototype.hasOwnProperty,
        De = {
            0: "\\0",
            7: "\\a",
            8: "\\b",
            9: "\\t",
            10: "\\n",
            11: "\\v",
            12: "\\f",
            13: "\\r",
            27: "\\e",
            34: '\\"',
            92: "\\\\",
            133: "\\N",
            160: "\\_",
            8232: "\\L",
            8233: "\\P"
        },
        Re = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"],
        Pe = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

    function xe(e) {
        var t, n, r;
        if (t = e.toString(16).toUpperCase(), e <= 255) n = "x", r = 2;
        else if (e <= 65535) n = "u", r = 4;
        else {
            if (!(e <= 4294967295)) throw new a("code point within a string may not be greater than 0xFFFFFFFF");
            n = "U", r = 8
        }
        return "\\" + n + i.repeat("0", r - t.length) + t
    }

    function ke(e) {
        this.schema = e.schema || G, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = i.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = function(e, t) {
            var n, r, i, o, s, a, c;
            if (null === t) return {};
            for (n = {}, i = 0, o = (r = Object.keys(t)).length; i < o; i += 1) s = r[i], a = String(t[s]), "!!" === s.slice(0, 2) && (s = "tag:yaml.org,2002:" + s.slice(2)), (c = e.compiledTypeMap.fallback[s]) && Ne.call(c.styleAliases, a) && (a = c.styleAliases[a]), n[s] = a;
            return n
        }(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = '"' === e.quotingType ? 2 : 1, this.forceQuotes = e.forceQuotes || !1, this.replacer = "function" == typeof e.replacer ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null
    }

    function _e(e, t) {
        for (var n, r = i.repeat(" ", t), o = 0, s = -1, a = "", c = e.length; o < c;) - 1 === (s = e.indexOf("\n", o)) ? (n = e.slice(o), o = c) : (n = e.slice(o, s + 1), o = s + 1), n.length && "\n" !== n && (a += r), a += n;
        return a
    }

    function Fe(e, t) {
        return "\n" + i.repeat(" ", e.indent * t)
    }

    function Ue(e) {
        return 32 === e || 9 === e
    }

    function Le(e) {
        return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && 8232 !== e && 8233 !== e || 57344 <= e && e <= 65533 && 65279 !== e || 65536 <= e && e <= 1114111
    }

    function Me(e) {
        return Le(e) && 65279 !== e && 13 !== e && 10 !== e
    }

    function Be(e, t, n) {
        var r = Me(e),
            i = r && !Ue(e);
        return (n ? r : r && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e) && 35 !== e && !(58 === t && !i) || Me(t) && !Ue(t) && 35 === e || 58 === t && i
    }

    function je(e, t) {
        var n, r = e.charCodeAt(t);
        return r >= 55296 && r <= 56319 && t + 1 < e.length && (n = e.charCodeAt(t + 1)) >= 56320 && n <= 57343 ? 1024 * (r - 55296) + n - 56320 + 65536 : r
    }

    function qe(e) {
        return /^\n* /.test(e)
    }

    function He(e, t, n, r, i) {
        e.dump = function() {
            if (0 === t.length) return 2 === e.quotingType ? '""' : "''";
            if (!e.noCompatMode && (-1 !== Re.indexOf(t) || Pe.test(t))) return 2 === e.quotingType ? '"' + t + '"' : "'" + t + "'";
            var o = e.indent * Math.max(1, n),
                s = -1 === e.lineWidth ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o),
                c = r || e.flowLevel > -1 && n >= e.flowLevel;
            switch (function(e, t, n, r, i, o, s, a) {
                    var c, l = 0,
                        u = null,
                        p = !1,
                        d = !1,
                        h = -1 !== r,
                        f = -1,
                        g = function(e) {
                            return Le(e) && 65279 !== e && !Ue(e) && 45 !== e && 63 !== e && 58 !== e && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e && 35 !== e && 38 !== e && 42 !== e && 33 !== e && 124 !== e && 61 !== e && 62 !== e && 39 !== e && 34 !== e && 37 !== e && 64 !== e && 96 !== e
                        }(je(e, 0)) && function(e) {
                            return !Ue(e) && 58 !== e
                        }(je(e, e.length - 1));
                    if (t || s)
                        for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
                            if (!Le(l = je(e, c))) return 5;
                            g = g && Be(l, u, a), u = l
                        } else {
                            for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
                                if (10 === (l = je(e, c))) p = !0, h && (d = d || c - f - 1 > r && " " !== e[f + 1], f = c);
                                else if (!Le(l)) return 5;
                                g = g && Be(l, u, a), u = l
                            }
                            d = d || h && c - f - 1 > r && " " !== e[f + 1]
                        }
                    return p || d ? n > 9 && qe(e) ? 5 : s ? 2 === o ? 5 : 2 : d ? 4 : 3 : !g || s || i(e) ? 2 === o ? 5 : 2 : 1
                }(t, c, e.indent, s, (function(t) {
                    return function(e, t) {
                        var n, r;
                        for (n = 0, r = e.implicitTypes.length; n < r; n += 1)
                            if (e.implicitTypes[n].resolve(t)) return !0;
                        return !1
                    }(e, t)
                }), e.quotingType, e.forceQuotes && !r, i)) {
                case 1:
                    return t;
                case 2:
                    return "'" + t.replace(/'/g, "''") + "'";
                case 3:
                    return "|" + Ge(t, e.indent) + $e(_e(t, o));
                case 4:
                    return ">" + Ge(t, e.indent) + $e(_e(function(e, t) {
                        for (var n, r, i, o = /(\n+)([^\n]*)/g, s = (i = -1 !== (i = e.indexOf("\n")) ? i : e.length, o.lastIndex = i, Ve(e.slice(0, i), t)), a = "\n" === e[0] || " " === e[0]; r = o.exec(e);) {
                            var c = r[1],
                                l = r[2];
                            n = " " === l[0], s += c + (a || n || "" === l ? "" : "\n") + Ve(l, t), a = n
                        }
                        return s
                    }(t, s), o));
                case 5:
                    return '"' + function(e) {
                        for (var t, n = "", r = 0, i = 0; i < e.length; r >= 65536 ? i += 2 : i++) r = je(e, i), !(t = De[r]) && Le(r) ? (n += e[i], r >= 65536 && (n += e[i + 1])) : n += t || xe(r);
                        return n
                    }(t) + '"';
                default:
                    throw new a("impossible error: invalid scalar style")
            }
        }()
    }

    function Ge(e, t) {
        var n = qe(e) ? String(t) : "",
            r = "\n" === e[e.length - 1];
        return n + (!r || "\n" !== e[e.length - 2] && "\n" !== e ? r ? "" : "-" : "+") + "\n"
    }

    function $e(e) {
        return "\n" === e[e.length - 1] ? e.slice(0, -1) : e
    }

    function Ve(e, t) {
        if ("" === e || " " === e[0]) return e;
        for (var n, r, i = / [^ ]/g, o = 0, s = 0, a = 0, c = ""; n = i.exec(e);)(a = n.index) - o > t && (r = s > o ? s : a, c += "\n" + e.slice(o, r), o = r + 1), s = a;
        return c += "\n", e.length - o > t && s > o ? c += e.slice(o, s) + "\n" + e.slice(s + 1) : c += e.slice(o), c.slice(1)
    }

    function Ye(e, t, n, r) {
        var i, o, s, a = "",
            c = e.tag;
        for (i = 0, o = n.length; i < o; i += 1) s = n[i], e.replacer && (s = e.replacer.call(n, String(i), s)), (Ke(e, t + 1, s, !0, !0, !1, !0) || void 0 === s && Ke(e, t + 1, null, !0, !0, !1, !0)) && (r && "" === a || (a += Fe(e, t)), e.dump && 10 === e.dump.charCodeAt(0) ? a += "-" : a += "- ", a += e.dump);
        e.tag = c, e.dump = a || "[]"
    }

    function We(e, t, n) {
        var r, i, o, s, c, l;
        for (o = 0, s = (i = n ? e.explicitTypes : e.implicitTypes).length; o < s; o += 1)
            if (((c = i[o]).instanceOf || c.predicate) && (!c.instanceOf || "object" == typeof t && t instanceof c.instanceOf) && (!c.predicate || c.predicate(t))) {
                if (n ? c.multi && c.representName ? e.tag = c.representName(t) : e.tag = c.tag : e.tag = "?", c.represent) {
                    if (l = e.styleMap[c.tag] || c.defaultStyle, "[object Function]" === Oe.call(c.represent)) r = c.represent(t, l);
                    else {
                        if (!Ne.call(c.represent, l)) throw new a("!<" + c.tag + '> tag resolver accepts not "' + l + '" style');
                        r = c.represent[l](t, l)
                    }
                    e.dump = r
                }
                return !0
            } return !1
    }

    function Ke(e, t, n, r, i, o, s) {
        e.tag = null, e.dump = n, We(e, n, !1) || We(e, n, !0);
        var c, l = Oe.call(e.dump),
            u = r;
        r && (r = e.flowLevel < 0 || e.flowLevel > t);
        var p, d, h = "[object Object]" === l || "[object Array]" === l;
        if (h && (d = -1 !== (p = e.duplicates.indexOf(n))), (null !== e.tag && "?" !== e.tag || d || 2 !== e.indent && t > 0) && (i = !1), d && e.usedDuplicates[p]) e.dump = "*ref_" + p;
        else {
            if (h && d && !e.usedDuplicates[p] && (e.usedDuplicates[p] = !0), "[object Object]" === l) r && 0 !== Object.keys(e.dump).length ? (function(e, t, n, r) {
                var i, o, s, c, l, u, p = "",
                    d = e.tag,
                    h = Object.keys(n);
                if (!0 === e.sortKeys) h.sort();
                else if ("function" == typeof e.sortKeys) h.sort(e.sortKeys);
                else if (e.sortKeys) throw new a("sortKeys must be a boolean or a function");
                for (i = 0, o = h.length; i < o; i += 1) u = "", r && "" === p || (u += Fe(e, t)), c = n[s = h[i]], e.replacer && (c = e.replacer.call(n, s, c)), Ke(e, t + 1, s, !0, !0, !0) && ((l = null !== e.tag && "?" !== e.tag || e.dump && e.dump.length > 1024) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += "?" : u += "? "), u += e.dump, l && (u += Fe(e, t)), Ke(e, t + 1, c, !0, l) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += ":" : u += ": ", p += u += e.dump));
                e.tag = d, e.dump = p || "{}"
            }(e, t, e.dump, i), d && (e.dump = "&ref_" + p + e.dump)) : (function(e, t, n) {
                var r, i, o, s, a, c = "",
                    l = e.tag,
                    u = Object.keys(n);
                for (r = 0, i = u.length; r < i; r += 1) a = "", "" !== c && (a += ", "), e.condenseFlow && (a += '"'), s = n[o = u[r]], e.replacer && (s = e.replacer.call(n, o, s)), Ke(e, t, o, !1, !1) && (e.dump.length > 1024 && (a += "? "), a += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), Ke(e, t, s, !1, !1) && (c += a += e.dump));
                e.tag = l, e.dump = "{" + c + "}"
            }(e, t, e.dump), d && (e.dump = "&ref_" + p + " " + e.dump));
            else if ("[object Array]" === l) r && 0 !== e.dump.length ? (e.noArrayIndent && !s && t > 0 ? Ye(e, t - 1, e.dump, i) : Ye(e, t, e.dump, i), d && (e.dump = "&ref_" + p + e.dump)) : (function(e, t, n) {
                var r, i, o, s = "",
                    a = e.tag;
                for (r = 0, i = n.length; r < i; r += 1) o = n[r], e.replacer && (o = e.replacer.call(n, String(r), o)), (Ke(e, t, o, !1, !1) || void 0 === o && Ke(e, t, null, !1, !1)) && ("" !== s && (s += "," + (e.condenseFlow ? "" : " ")), s += e.dump);
                e.tag = a, e.dump = "[" + s + "]"
            }(e, t, e.dump), d && (e.dump = "&ref_" + p + " " + e.dump));
            else {
                if ("[object String]" !== l) {
                    if ("[object Undefined]" === l) return !1;
                    if (e.skipInvalid) return !1;
                    throw new a("unacceptable kind of an object to dump " + l)
                }
                "?" !== e.tag && He(e, e.dump, t, o, u)
            }
            null !== e.tag && "?" !== e.tag && (c = encodeURI("!" === e.tag[0] ? e.tag.slice(1) : e.tag).replace(/!/g, "%21"), c = "!" === e.tag[0] ? "!" + c : "tag:yaml.org,2002:" === c.slice(0, 18) ? "!!" + c.slice(18) : "!<" + c + ">", e.dump = c + " " + e.dump)
        }
        return !0
    }

    function ze(e, t) {
        return function() {
            throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.")
        }
    }
    var Qe = d,
        Je = g,
        Xe = w,
        Ze = N,
        et = D,
        tt = G,
        nt = Ie,
        rt = Se,
        it = function(e, t) {
            var n = new ke(t = t || {});
            n.noRefs || function(e, t) {
                var n, r, i = [],
                    o = [];
                for (function e(t, n, r) {
                        var i, o, s;
                        if (null !== t && "object" == typeof t)
                            if (-1 !== (o = n.indexOf(t))) - 1 === r.indexOf(o) && r.push(o);
                            else if (n.push(t), Array.isArray(t))
                            for (o = 0, s = t.length; o < s; o += 1) e(t[o], n, r);
                        else
                            for (o = 0, s = (i = Object.keys(t)).length; o < s; o += 1) e(t[i[o]], n, r)
                    }(e, i, o), n = 0, r = o.length; n < r; n += 1) t.duplicates.push(i[o[n]]);
                t.usedDuplicates = new Array(r)
            }(e, n);
            var r = e;
            return n.replacer && (r = n.replacer.call({
                "": r
            }, "", r)), Ke(n, 0, r, !0, !0) ? n.dump + "\n" : ""
        },
        ot = a,
        st = {
            binary: F,
            float: O,
            map: y,
            null: E,
            pairs: j,
            set: H,
            timestamp: x,
            bool: b,
            int: T,
            merge: k,
            omap: M,
            seq: v,
            str: m
        },
        at = ze("safeLoad", "load"),
        ct = ze("safeLoadAll", "loadAll"),
        lt = ze("safeDump", "dump"),
        ut = {
            Type: Qe,
            Schema: Je,
            FAILSAFE_SCHEMA: Xe,
            JSON_SCHEMA: Ze,
            CORE_SCHEMA: et,
            DEFAULT_SCHEMA: tt,
            load: nt,
            loadAll: rt,
            dump: it,
            YAMLException: ot,
            types: st,
            safeLoad: at,
            safeLoadAll: ct,
            safeDump: lt
        };
    t.default = ut
}, function(e, t, n) {
    const r = n(7);
    e.exports = (e, t, n) => 0 === r(e, t, n)
}, function(e, t, n) {
    const r = n(5);
    e.exports = (e, t, n) => {
        const i = new r(e, n),
            o = new r(t, n);
        return i.compare(o) || i.compareBuild(o)
    }
}, function(e, t, n) {
    const r = n(7);
    e.exports = (e, t, n) => r(e, t, n) < 0
}, function(e, t, n) {
    const r = n(7);
    e.exports = (e, t, n) => r(e, t, n) >= 0
}, function(e, t, n) {
    const r = n(7);
    e.exports = (e, t, n) => r(e, t, n) <= 0
}, function(e, t, n) {
    const r = n(5),
        i = n(31),
        {
            ANY: o
        } = i,
        s = n(8),
        a = n(32),
        c = n(30),
        l = n(42),
        u = n(44),
        p = n(43);
    e.exports = (e, t, n, d) => {
        let h, f, g, m, v;
        switch (e = new r(e, d), t = new s(t, d), n) {
            case ">":
                h = c, f = u, g = l, m = ">", v = ">=";
                break;
            case "<":
                h = l, f = p, g = c, m = "<", v = "<=";
                break;
            default:
                throw new TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (a(e, t, d)) return !1;
        for (let n = 0; n < t.set.length; ++n) {
            const r = t.set[n];
            let s = null,
                a = null;
            if (r.forEach(e => {
                    e.semver === o && (e = new i(">=0.0.0")), s = s || e, a = a || e, h(e.semver, s.semver, d) ? s = e : g(e.semver, a.semver, d) && (a = e)
                }), s.operator === m || s.operator === v) return !1;
            if ((!a.operator || a.operator === m) && f(e, a.semver)) return !1;
            if (a.operator === v && g(e, a.semver)) return !1
        }
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.computeOperations = t.OperationKind = void 0,
        function(e) {
            e[e.COPY = 0] = "COPY", e[e.DOWNLOAD = 1] = "DOWNLOAD"
        }(r = t.OperationKind || (t.OperationKind = {})), t.computeOperations = function(e, t, n) {
            const i = s(e.files),
                a = s(t.files);
            let c = null;
            const l = t.files[0],
                u = [],
                p = l.name,
                d = i.get(p);
            if (null == d) throw new Error(`no file ${p} in old blockmap`);
            const h = a.get(p);
            let f = 0;
            const {
                checksumToOffset: g,
                checksumToOldSize: m
            } = function(e, t, n) {
                const r = new Map,
                    i = new Map;
                let o = t;
                for (let t = 0; t < e.checksums.length; t++) {
                    const s = e.checksums[t],
                        a = e.sizes[t],
                        c = i.get(s);
                    if (void 0 === c) r.set(s, o), i.set(s, a);
                    else if (null != n.debug) {
                        const e = c === a ? "(same size)" : `(size: ${c}, this size: ${a})`;
                        n.debug(`${s} duplicated in blockmap ${e}, it doesn't lead to broken differential downloader, just corresponding block will be skipped)`)
                    }
                    o += a
                }
                return {
                    checksumToOffset: r,
                    checksumToOldSize: i
                }
            }(i.get(p), d.offset, n);
            let v = l.offset;
            for (let e = 0; e < h.checksums.length; v += h.sizes[e], e++) {
                const t = h.sizes[e],
                    i = h.checksums[e];
                let s = g.get(i);
                null != s && m.get(i) !== t && (n.warn(`Checksum ("${i}") matches, but size differs (old: ${m.get(i)}, new: ${t})`), s = void 0), void 0 === s ? (f++, null != c && c.kind === r.DOWNLOAD && c.end === v ? c.end += t : (c = {
                    kind: r.DOWNLOAD,
                    start: v,
                    end: v + t
                }, o(c, u, i, e))) : null != c && c.kind === r.COPY && c.end === s ? c.end += t : (c = {
                    kind: r.COPY,
                    start: s,
                    end: s + t
                }, o(c, u, i, e))
            }
            return f > 0 && n.info(`File${"file"===l.name?"":" "+l.name} has ${f} changed blocks`), u
        };
    const i = "true" === process.env.DIFFERENTIAL_DOWNLOAD_PLAN_BUILDER_VALIDATE_RANGES;

    function o(e, t, n, o) {
        if (i && 0 !== t.length) {
            const i = t[t.length - 1];
            if (i.kind === e.kind && e.start < i.end && e.start > i.start) {
                const t = [i.start, i.end, e.start, e.end].reduce((e, t) => e < t ? e : t);
                throw new Error(`operation (block index: ${o}, checksum: ${n}, kind: ${r[e.kind]}) overlaps previous operation (checksum: ${n}):\nabs: ${i.start} until ${i.end} and ${e.start} until ${e.end}\nrel: ${i.start-t} until ${i.end-t} and ${e.start-t} until ${e.end-t}`)
            }
        }
        t.push(e)
    }

    function s(e) {
        const t = new Map;
        for (const n of e) t.set(n.name, n);
        return t
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.WALLET_MODULE_NAME = t.HISTORY_TITLE_REGULAR = t.HISTORY_TITLE_BASIC = t.DISABLED_COINS = t.CURRENT_FIAT_CURRENCY = t.CURRENCIES = t.COB = t.CACHE_DIR = void 0, t.COB = "https://ob.atomicwallet.io", t.HISTORY_TITLE_BASIC = "Exchange", t.HISTORY_TITLE_REGULAR = "Wallet", t.WALLET_MODULE_NAME = "wallet", t.CURRENT_FIAT_CURRENCY = "current_fiat_currency", t.CACHE_DIR = "/AtomicCache", t.CURRENCIES = [{
        code: "BTC",
        name: "Bitcoin",
        char: "Ƀ"
    }, {
        code: "USD",
        name: "United States dollar",
        char: "&#36;"
    }, {
        code: "AUD",
        name: "Australian dollar",
        char: "&#36;"
    }, {
        code: "BRL",
        name: "Brazilian real",
        char: "&#82;&#36;"
    }, {
        code: "CAD",
        name: "Canadian dollar",
        char: "&#36;"
    }, {
        code: "CHF",
        name: "Swiss franc",
        char: "&#67;&#72;&#70;"
    }, {
        code: "CLP",
        name: "Chilean peso",
        char: "&#36;"
    }, {
        code: "CNY",
        name: "Chinese yuan",
        char: "&#165;"
    }, {
        code: "CZK",
        name: "Czech koruna",
        char: "&#75;&#269;"
    }, {
        code: "DKK",
        name: "Danish krone",
        char: "&#107;&#114;"
    }, {
        code: "EUR",
        name: "Euro",
        char: "&#8364;"
    }, {
        code: "GBP",
        name: "British pound",
        char: "&#163;"
    }, {
        code: "HKD",
        name: "Hong Kong dollar",
        char: "&#36;"
    }, {
        code: "HUF",
        name: "Hungrian forint",
        char: "&#70;&#116;"
    }, {
        code: "IDR",
        name: "Indonesian rupiah",
        char: "&#82;&#112;"
    }, {
        code: "ILS",
        name: "Israel new shekel",
        char: "&#8362;"
    }, {
        code: "INR",
        name: "Indian rupee",
        char: "&#8377;"
    }, {
        code: "JPY",
        name: "Japanese yen",
        char: "&#165;"
    }, {
        code: "KRW",
        name: "South Korean won",
        char: "&#8361;"
    }, {
        code: "MXN",
        name: "Mexican peso",
        char: "&#36;"
    }, {
        code: "MYR",
        name: "Malaysian ringgit",
        char: "&#82;&#77;"
    }, {
        code: "NOK",
        name: "Norway krone",
        char: "&#107;&#114;"
    }, {
        code: "NZD",
        name: "New Zealand dollar",
        char: "&#36;"
    }, {
        code: "PHP",
        name: "Philippine peso",
        char: "&#8369;"
    }, {
        code: "PKR",
        name: "Pakistani ruppie",
        char: "&#8360;"
    }, {
        code: "PLN",
        name: "Polish zloty",
        char: "&#122;&#322;"
    }, {
        code: "RUB",
        name: "Russian ruble",
        char: "&#8381;"
    }, {
        code: "SEK",
        name: "Swedish krona",
        char: "&#107;&#114;"
    }, {
        code: "SGD",
        name: "Singapore dollar",
        char: "&#36;"
    }, {
        code: "THB",
        name: "Thai bat",
        char: "&#3647;"
    }, {
        code: "TRY",
        name: "Turkish lira",
        char: "₺"
    }, {
        code: "TWD",
        name: "New Taiwan dollar",
        char: "&#78;&#84;&#36;"
    }, {
        code: "ZAR",
        name: "South African rand",
        char: "&#82;"
    }], t.DISABLED_COINS = ["SMART", "GRS", "BCD", "YEC", "LSK", "NEO", "GAS"]
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CancellationError = t.CancellationToken = void 0;
    const r = n(49);
    class i extends r.EventEmitter {
        constructor(e) {
            super(), this.parentCancelHandler = null, this._parent = null, this._cancelled = !1, null != e && (this.parent = e)
        }
        get cancelled() {
            return this._cancelled || null != this._parent && this._parent.cancelled
        }
        set parent(e) {
            this.removeParentCancelHandler(), this._parent = e, this.parentCancelHandler = () => this.cancel(), this._parent.onCancel(this.parentCancelHandler)
        }
        cancel() {
            this._cancelled = !0, this.emit("cancel")
        }
        onCancel(e) {
            this.cancelled ? e() : this.once("cancel", e)
        }
        createPromise(e) {
            if (this.cancelled) return Promise.reject(new o);
            const t = () => {
                if (null != n) try {
                    this.removeListener("cancel", n), n = null
                } catch (e) {}
            };
            let n = null;
            return new Promise((t, r) => {
                let i = null;
                n = () => {
                    try {
                        null != i && (i(), i = null)
                    } finally {
                        r(new o)
                    }
                }, this.cancelled ? n() : (this.onCancel(n), e(t, r, e => {
                    i = e
                }))
            }).then(e => (t(), e)).catch(e => {
                throw t(), e
            })
        }
        removeParentCancelHandler() {
            const e = this._parent;
            null != e && null != this.parentCancelHandler && (e.removeListener("cancel", this.parentCancelHandler), this.parentCancelHandler = null)
        }
        dispose() {
            try {
                this.removeParentCancelHandler()
            } finally {
                this.removeAllListeners(), this._parent = null
            }
        }
    }
    t.CancellationToken = i;
    class o extends Error {
        constructor() {
            super("cancelled")
        }
    }
    t.CancellationError = o
}, function(e, t) {
    e.exports = require("events")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.safeStringifyJson = t.configureRequestOptions = t.safeGetHeader = t.DigestTransform = t.configureRequestUrl = t.configureRequestOptionsFromUrl = t.HttpExecutor = t.parseJson = t.HttpError = t.createHttpError = void 0;
    const r = n(24),
        i = n(51),
        o = n(3),
        s = n(16),
        a = n(11),
        c = n(48),
        l = n(1),
        u = n(54),
        p = i.default("electron-builder");

    function d(e, t = null) {
        return new f(e.statusCode || -1, `${e.statusCode} ${e.statusMessage}` + (null == t ? "" : "\n" + JSON.stringify(t, null, "  ")) + "\nHeaders: " + b(e.headers), t)
    }
    t.createHttpError = d;
    const h = new Map([
        [429, "Too many requests"],
        [400, "Bad request"],
        [403, "Forbidden"],
        [404, "Not found"],
        [405, "Method not allowed"],
        [406, "Not acceptable"],
        [408, "Request timeout"],
        [413, "Request entity too large"],
        [500, "Internal server error"],
        [502, "Bad gateway"],
        [503, "Service unavailable"],
        [504, "Gateway timeout"],
        [505, "HTTP version not supported"]
    ]);
    class f extends Error {
        constructor(e, t = "HTTP error: " + (h.get(e) || e), n = null) {
            super(t), this.statusCode = e, this.description = n, this.name = "HttpError", this.code = "HTTP_ERROR_" + e
        }
        isServerError() {
            return this.statusCode >= 500 && this.statusCode <= 599
        }
    }
    t.HttpError = f, t.parseJson = function(e) {
        return e.then(e => null == e || 0 === e.length ? null : JSON.parse(e))
    };
    class g {
        constructor() {
            this.maxRedirects = 10
        }
        request(e, t = new c.CancellationToken, n) {
            E(e);
            const r = null == n ? void 0 : JSON.stringify(n),
                i = r ? Buffer.from(r) : void 0;
            if (null != i) {
                p(r);
                const {
                    headers: t,
                    ...n
                } = e;
                e = {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Content-Length": i.length,
                        ...t
                    },
                    ...n
                }
            }
            return this.doApiRequest(e, t, e => e.end(i))
        }
        doApiRequest(e, t, n, r = 0) {
            return p.enabled && p("Request: " + b(e)), t.createPromise((i, o, s) => {
                const a = this.createRequest(e, s => {
                    try {
                        this.handleResponse(s, e, t, i, o, r, n)
                    } catch (e) {
                        o(e)
                    }
                });
                this.addErrorAndTimeoutHandlers(a, o), this.addRedirectHandlers(a, e, o, r, e => {
                    this.doApiRequest(e, t, n, r).then(i).catch(o)
                }), n(a, o), s(() => a.abort())
            })
        }
        addRedirectHandlers(e, t, n, r, i) {}
        addErrorAndTimeoutHandlers(e, t) {
            this.addTimeOutHandler(e, t), e.on("error", t), e.on("aborted", () => {
                t(new Error("Request has been aborted by the server"))
            })
        }
        handleResponse(e, t, n, r, i, o, s) {
            var a;
            if (p.enabled && p(`Response: ${e.statusCode} ${e.statusMessage}, request options: ${b(t)}`), 404 === e.statusCode) return void i(d(e, `method: ${t.method||"GET"} url: ${t.protocol||"https:"}//${t.hostname}${t.port?":"+t.port:""}${t.path}\n\nPlease double check that your authentication token is correct. Due to security reasons, actual status maybe not reported, but 404.\n`));
            if (204 === e.statusCode) return void r();
            const c = null !== (a = e.statusCode) && void 0 !== a ? a : 0,
                l = c >= 300 && c < 400,
                u = w(e, "location");
            if (l && null != u) return o > this.maxRedirects ? void i(this.createMaxRedirectError()) : void this.doApiRequest(g.prepareRedirectUrlOptions(u, t), n, s, o).then(r).catch(i);
            e.setEncoding("utf8");
            let h = "";
            e.on("error", i), e.on("data", e => h += e), e.on("end", () => {
                try {
                    if (null != e.statusCode && e.statusCode >= 400) {
                        const n = w(e, "content-type"),
                            r = null != n && (Array.isArray(n) ? null != n.find(e => e.includes("json")) : n.includes("json"));
                        i(d(e, `method: ${t.method||"GET"} url: ${t.protocol||"https:"}//${t.hostname}${t.port?":"+t.port:""}${t.path}\n\n          Data:\n          ${r?JSON.stringify(JSON.parse(h)):h}\n          `))
                    } else r(0 === h.length ? null : h)
                } catch (e) {
                    i(e)
                }
            })
        }
        async downloadToBuffer(e, t) {
            return await t.cancellationToken.createPromise((n, r, i) => {
                let o = null;
                const s = {
                    headers: t.headers || void 0,
                    redirect: "manual"
                };
                v(e, s), E(s), this.doDownload(s, {
                    destination: null,
                    options: t,
                    onCancel: i,
                    callback: e => {
                        null == e ? n(o) : r(e)
                    },
                    responseHandler: (e, t) => {
                        const n = w(e, "content-length");
                        let r = -1;
                        if (null != n) {
                            const e = parseInt(n, 10);
                            if (e > 0) {
                                if (e > 524288e3) return void t(new Error("Maximum allowed size is 500 MB"));
                                o = Buffer.alloc(e), r = 0
                            }
                        }
                        e.on("data", e => {
                            if (-1 !== r) e.copy(o, r), r += e.length;
                            else if (null == o) o = e;
                            else {
                                if (o.length > 524288e3) return void t(new Error("Maximum allowed size is 500 MB"));
                                o = Buffer.concat([o, e])
                            }
                        }), e.on("end", () => {
                            null != o && -1 !== r && r !== o.length ? t(new Error(`Received data length ${r} is not equal to expected ${o.length}`)) : t(null)
                        })
                    }
                }, 0)
            })
        }
        doDownload(e, t, n) {
            const r = this.createRequest(e, r => {
                if (r.statusCode >= 400) return void t.callback(new Error(`Cannot download "${e.protocol||"https:"}//${e.hostname}${e.path}", status ${r.statusCode}: ${r.statusMessage}`));
                r.on("error", t.callback);
                const i = w(r, "location");
                null == i ? null == t.responseHandler ? function(e, t) {
                    if (! function(e, t, n) {
                            return null == e || null == t || e === t || (n(new Error(`checksum mismatch: expected ${t} but got ${e} (X-Checksum-Sha2 header)`)), !1)
                        }(w(t, "X-Checksum-Sha2"), e.options.sha2, e.callback)) return;
                    const n = [];
                    if (null != e.options.onProgress) {
                        const r = w(t, "content-length");
                        null != r && n.push(new u.ProgressCallbackTransform(parseInt(r, 10), e.options.cancellationToken, e.options.onProgress))
                    }
                    const r = e.options.sha512;
                    null != r ? n.push(new y(r, "sha512", 128 !== r.length || r.includes("+") || r.includes("Z") || r.includes("=") ? "base64" : "hex")) : null != e.options.sha2 && n.push(new y(e.options.sha2, "sha256", "hex"));
                    const i = o.createWriteStream(e.destination);
                    n.push(i);
                    let s = t;
                    for (const t of n) t.on("error", t => {
                        e.options.cancellationToken.cancelled || e.callback(t)
                    }), s = s.pipe(t);
                    i.on("finish", () => {
                        i.close(e.callback)
                    })
                }(t, r) : t.responseHandler(r, t.callback) : n < this.maxRedirects ? this.doDownload(g.prepareRedirectUrlOptions(i, e), t, n++) : t.callback(this.createMaxRedirectError())
            });
            this.addErrorAndTimeoutHandlers(r, t.callback), this.addRedirectHandlers(r, e, t.callback, n, e => {
                this.doDownload(e, t, n++)
            }), r.end()
        }
        createMaxRedirectError() {
            return new Error(`Too many redirects (> ${this.maxRedirects})`)
        }
        addTimeOutHandler(e, t) {
            e.on("socket", n => {
                n.setTimeout(6e4, () => {
                    e.abort(), t(new Error("Request timed out"))
                })
            })
        }
        static prepareRedirectUrlOptions(e, t) {
            const n = m(e, {
                    ...t
                }),
                r = n.headers;
            if (null == r ? void 0 : r.authorization) {
                const t = new a.URL(e);
                (t.hostname.endsWith(".amazonaws.com") || t.searchParams.has("X-Amz-Credential")) && delete r.authorization
            }
            return n
        }
        static retryOnServerError(e, t = 3) {
            for (let n = 0;; n++) try {
                return e()
            } catch (e) {
                if (n < t && (e instanceof f && e.isServerError() || "EPIPE" === e.code)) continue;
                throw e
            }
        }
    }

    function m(e, t) {
        const n = E(t);
        return v(new a.URL(e), n), n
    }

    function v(e, t) {
        t.protocol = e.protocol, t.hostname = e.hostname, e.port ? t.port = e.port : t.port && delete t.port, t.path = e.pathname + e.search
    }
    t.HttpExecutor = g, t.configureRequestOptionsFromUrl = m, t.configureRequestUrl = v;
    class y extends s.Transform {
        constructor(e, t = "sha512", n = "base64") {
            super(), this.expected = e, this.algorithm = t, this.encoding = n, this._actual = null, this.isValidateOnEnd = !0, this.digester = r.createHash(t)
        }
        get actual() {
            return this._actual
        }
        _transform(e, t, n) {
            this.digester.update(e), n(null, e)
        }
        _flush(e) {
            if (this._actual = this.digester.digest(this.encoding), this.isValidateOnEnd) try {
                this.validate()
            } catch (t) {
                return void e(t)
            }
            e(null)
        }
        validate() {
            if (null == this._actual) throw l.newError("Not finished yet", "ERR_STREAM_NOT_FINISHED");
            if (this._actual !== this.expected) throw l.newError(`${this.algorithm} checksum mismatch, expected ${this.expected}, got ${this._actual}`, "ERR_CHECKSUM_MISMATCH");
            return null
        }
    }

    function w(e, t) {
        const n = e.headers[t];
        return null == n ? null : Array.isArray(n) ? 0 === n.length ? null : n[n.length - 1] : n
    }

    function E(e, t, n) {
        null != n && (e.method = n), e.headers = {
            ...e.headers
        };
        const r = e.headers;
        return null != t && (r.authorization = t.startsWith("Basic") || t.startsWith("Bearer") ? t : "token " + t), null == r["User-Agent"] && (r["User-Agent"] = "electron-builder"), null != n && "GET" !== n && null != r["Cache-Control"] || (r["Cache-Control"] = "no-cache"), null == e.protocol && null != process.versions.electron && (e.protocol = "https:"), e
    }

    function b(e, t) {
        return JSON.stringify(e, (e, n) => e.endsWith("Authorization") || e.endsWith("authorization") || e.endsWith("Password") || e.endsWith("PASSWORD") || e.endsWith("Token") || e.includes("password") || e.includes("token") || null != t && t.has(e) ? "<stripped sensitive data>" : n, 2)
    }
    t.DigestTransform = y, t.safeGetHeader = w, t.configureRequestOptions = E, t.safeStringifyJson = b
}, function(e, t, n) {
    "undefined" == typeof process || "renderer" === process.type || !0 === process.browser || process.__nwjs ? e.exports = n(78) : e.exports = n(80)
}, function(e, t, n) {
    e.exports = function(e) {
        function t(e) {
            let n, i, o, s = null;

            function a(...e) {
                if (!a.enabled) return;
                const r = a,
                    i = Number(new Date),
                    o = i - (n || i);
                r.diff = o, r.prev = n, r.curr = i, n = i, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                let s = 0;
                e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, i) => {
                    if ("%%" === n) return "%";
                    s++;
                    const o = t.formatters[i];
                    if ("function" == typeof o) {
                        const t = e[s];
                        n = o.call(r, t), e.splice(s, 1), s--
                    }
                    return n
                }), t.formatArgs.call(r, e), (r.log || t.log).apply(r, e)
            }
            return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = r, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => null !== s ? s : (i !== t.namespaces && (i = t.namespaces, o = t.enabled(e)), o),
                set: e => {
                    s = e
                }
            }), "function" == typeof t.init && t.init(a), a
        }

        function r(e, n) {
            const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
            return r.log = this.log, r
        }

        function i(e) {
            return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
        }
        return t.debug = t, t.default = t, t.coerce = function(e) {
            return e instanceof Error ? e.stack || e.message : e
        }, t.disable = function() {
            const e = [...t.names.map(i), ...t.skips.map(i).map(e => "-" + e)].join(",");
            return t.enable(""), e
        }, t.enable = function(e) {
            let n;
            t.save(e), t.namespaces = e, t.names = [], t.skips = [];
            const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                i = r.length;
            for (n = 0; n < i; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }, t.enabled = function(e) {
            if ("*" === e[e.length - 1]) return !0;
            let n, r;
            for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
            return !1
        }, t.humanize = n(79), t.destroy = function() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }, Object.keys(e).forEach(n => {
            t[n] = e[n]
        }), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
            let n = 0;
            for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
            return t.colors[Math.abs(n) % t.colors.length]
        }, t.enable(t.load()), t
    }
}, function(e, t) {
    e.exports = require("tty")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ProgressCallbackTransform = void 0;
    const r = n(16);
    class i extends r.Transform {
        constructor(e, t, n) {
            super(), this.total = e, this.cancellationToken = t, this.onProgress = n, this.start = Date.now(), this.transferred = 0, this.delta = 0, this.nextUpdate = this.start + 1e3
        }
        _transform(e, t, n) {
            if (this.cancellationToken.cancelled) return void n(new Error("cancelled"), null);
            this.transferred += e.length, this.delta += e.length;
            const r = Date.now();
            r >= this.nextUpdate && this.transferred !== this.total && (this.nextUpdate = r + 1e3, this.onProgress({
                total: this.total,
                delta: this.delta,
                transferred: this.transferred,
                percent: this.transferred / this.total * 100,
                bytesPerSecond: Math.round(this.transferred / ((r - this.start) / 1e3))
            }), this.delta = 0), n(null, e)
        }
        _flush(e) {
            this.cancellationToken.cancelled ? e(new Error("cancelled")) : (this.onProgress({
                total: this.total,
                delta: this.delta,
                transferred: this.total,
                percent: 100,
                bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
            }), this.delta = 0, e(null))
        }
    }
    t.ProgressCallbackTransform = i
}, function(e, t) {
    e.exports = require("assert")
}, function(e, t, n) {
    "use strict";
    const r = n(4);
    e.exports = {
        utimesMillis: function(e, t, n, i) {
            r.open(e, "r+", (e, o) => {
                if (e) return i(e);
                r.futimes(o, t, n, e => {
                    r.close(o, t => {
                        i && i(e || t)
                    })
                })
            })
        },
        utimesMillisSync: function(e, t, n) {
            const i = r.openSync(e, "r+");
            return r.futimesSync(i, t, n), r.closeSync(i)
        }
    }
}, function(e, t, n) {
    const r = n(19),
        i = n(27),
        o = n(5),
        s = n(58),
        a = n(20),
        c = n(115),
        l = n(116),
        u = n(117),
        p = n(118),
        d = n(119),
        h = n(120),
        f = n(121),
        g = n(122),
        m = n(7),
        v = n(123),
        y = n(124),
        w = n(41),
        E = n(125),
        b = n(126),
        A = n(30),
        C = n(42),
        T = n(40),
        S = n(59),
        I = n(43),
        O = n(44),
        N = n(60),
        D = n(127),
        R = n(31),
        P = n(8),
        x = n(32),
        k = n(131),
        _ = n(132),
        F = n(133),
        U = n(134),
        L = n(135),
        M = n(45),
        B = n(136),
        j = n(137),
        q = n(138),
        H = n(139),
        G = n(140);
    e.exports = {
        parse: a,
        valid: c,
        clean: l,
        inc: u,
        diff: p,
        major: d,
        minor: h,
        patch: f,
        prerelease: g,
        compare: m,
        rcompare: v,
        compareLoose: y,
        compareBuild: w,
        sort: E,
        rsort: b,
        gt: A,
        lt: C,
        eq: T,
        neq: S,
        gte: I,
        lte: O,
        cmp: N,
        coerce: D,
        Comparator: R,
        Range: P,
        satisfies: x,
        toComparators: k,
        maxSatisfying: _,
        minSatisfying: F,
        minVersion: U,
        validRange: L,
        outside: M,
        gtr: B,
        ltr: j,
        intersects: q,
        simplifyRange: H,
        subset: G,
        SemVer: o,
        re: r.re,
        src: r.src,
        tokens: r.t,
        SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
        compareIdentifiers: s.compareIdentifiers,
        rcompareIdentifiers: s.rcompareIdentifiers
    }
}, function(e, t) {
    const n = /^[0-9]+$/,
        r = (e, t) => {
            const r = n.test(e),
                i = n.test(t);
            return r && i && (e = +e, t = +t), e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1
        };
    e.exports = {
        compareIdentifiers: r,
        rcompareIdentifiers: (e, t) => r(t, e)
    }
}, function(e, t, n) {
    const r = n(7);
    e.exports = (e, t, n) => 0 !== r(e, t, n)
}, function(e, t, n) {
    const r = n(40),
        i = n(59),
        o = n(30),
        s = n(43),
        a = n(42),
        c = n(44);
    e.exports = (e, t, n, l) => {
        switch (t) {
            case "===":
                return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
            case "!==":
                return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
            case "":
            case "=":
            case "==":
                return r(e, n, l);
            case "!=":
                return i(e, n, l);
            case ">":
                return o(e, n, l);
            case ">=":
                return s(e, n, l);
            case "<":
                return a(e, n, l);
            case "<=":
                return c(e, n, l);
            default:
                throw new TypeError("Invalid operator: " + t)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GenericProvider = void 0;
    const r = n(1),
        i = n(12),
        o = n(10);
    class s extends o.Provider {
        constructor(e, t, n) {
            super(n), this.configuration = e, this.updater = t, this.baseUrl = i.newBaseUrl(this.configuration.url)
        }
        get channel() {
            const e = this.updater.channel || this.configuration.channel;
            return null == e ? this.getDefaultChannelName() : this.getCustomChannelName(e)
        }
        async getLatestVersion() {
            const e = i.getChannelFilename(this.channel),
                t = i.newUrlFromBase(e, this.baseUrl, this.updater.isAddNoCacheQuery);
            for (let n = 0;; n++) try {
                return o.parseUpdateInfo(await this.httpRequest(t), e, t)
            } catch (t) {
                if (t instanceof r.HttpError && 404 === t.statusCode) throw r.newError(`Cannot find channel "${e}" update info: ${t.stack||t.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                if ("ECONNREFUSED" === t.code && n < 3) {
                    await new Promise((e, t) => {
                        try {
                            setTimeout(e, 1e3 * n)
                        } catch (e) {
                            t(e)
                        }
                    });
                    continue
                }
                throw t
            }
        }
        resolveFiles(e) {
            return o.resolveFiles(e, this.baseUrl)
        }
    }
    t.GenericProvider = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.computeReleaseNotes = t.GitHubProvider = t.BaseGitHubProvider = void 0;
    const r = n(1),
        i = n(57),
        o = n(11),
        s = n(12),
        a = n(10),
        c = /\/tag\/([^/]+)$/;
    class l extends a.Provider {
        constructor(e, t, n) {
            super({
                ...n,
                isUseMultipleRangeRequest: !1
            }), this.options = e, this.baseUrl = s.newBaseUrl(r.githubUrl(e, t));
            const i = "github.com" === t ? "api.github.com" : t;
            this.baseApiUrl = s.newBaseUrl(r.githubUrl(e, i))
        }
        computeGithubBasePath(e) {
            const t = this.options.host;
            return null != t && "github.com" !== t && "api.github.com" !== t ? "/api/v3" + e : e
        }
    }

    function u(e) {
        const t = e.elementValueOrEmpty("content");
        return "No content." === t ? "" : t
    }

    function p(e, t, n, r) {
        if (!t) return u(r);
        const o = [];
        for (const t of n.getElements("entry")) {
            const n = /\/tag\/v?([^/]+)$/.exec(t.element("link").attribute("href"))[1];
            i.lt(e, n) && o.push({
                version: n,
                note: u(t)
            })
        }
        return o.sort((e, t) => i.rcompare(e.version, t.version))
    }
    t.BaseGitHubProvider = l, t.GitHubProvider = class extends l {
        constructor(e, t, n) {
            super(e, "github.com", n), this.options = e, this.updater = t
        }
        async getLatestVersion() {
            const e = new r.CancellationToken,
                t = await this.httpRequest(s.newUrlFromBase(this.basePath + ".atom", this.baseUrl), {
                    accept: "application/xml, application/atom+xml, text/xml, */*"
                }, e),
                n = r.parseXml(t);
            let i, o = n.element("entry", !1, "No published versions on GitHub");
            try {
                if (this.updater.allowPrerelease) i = c.exec(o.element("link").attribute("href"))[1];
                else {
                    i = await this.getLatestTagName(e);
                    for (const e of n.getElements("entry"))
                        if (c.exec(e.element("link").attribute("href"))[1] === i) {
                            o = e;
                            break
                        }
                }
            } catch (e) {
                throw r.newError(`Cannot parse releases feed: ${e.stack||e.message},\nXML:\n${t}`, "ERR_UPDATER_INVALID_RELEASE_FEED")
            }
            if (null == i) throw r.newError("No published versions on GitHub", "ERR_UPDATER_NO_PUBLISHED_VERSIONS");
            const l = s.getChannelFilename(this.getDefaultChannelName()),
                u = s.newUrlFromBase(this.getBaseDownloadPath(i, l), this.baseUrl),
                d = this.createRequestOptions(u);
            let h;
            try {
                h = await this.executor.request(d, e)
            } catch (e) {
                if (!this.updater.allowPrerelease && e instanceof r.HttpError && 404 === e.statusCode) throw r.newError(`Cannot find ${l} in the latest release artifacts (${u}): ${e.stack||e.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                throw e
            }
            const f = a.parseUpdateInfo(h, l, u);
            return null == f.releaseName && (f.releaseName = o.elementValueOrEmpty("title")), null == f.releaseNotes && (f.releaseNotes = p(this.updater.currentVersion, this.updater.fullChangelog, n, o)), {
                tag: i,
                ...f
            }
        }
        async getLatestTagName(e) {
            const t = this.options,
                n = null == t.host || "github.com" === t.host ? s.newUrlFromBase(this.basePath + "/latest", this.baseUrl) : new o.URL(this.computeGithubBasePath(`/repos/${t.owner}/${t.repo}/releases`) + "/latest", this.baseApiUrl);
            try {
                const t = await this.httpRequest(n, {
                    Accept: "application/json"
                }, e);
                return null == t ? null : JSON.parse(t).tag_name
            } catch (e) {
                throw r.newError(`Unable to find latest version on GitHub (${n}), please ensure a production release exists: ${e.stack||e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND")
            }
        }
        get basePath() {
            return `/${this.options.owner}/${this.options.repo}/releases`
        }
        resolveFiles(e) {
            return a.resolveFiles(e, this.baseUrl, t => this.getBaseDownloadPath(e.tag, t.replace(/ /g, "-")))
        }
        getBaseDownloadPath(e, t) {
            return `${this.basePath}/download/${e}/${t}`
        }
    }, t.computeReleaseNotes = p
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AppImageUpdater = void 0;
    const r = n(1),
        i = n(33),
        o = n(13),
        s = n(3),
        a = n(0),
        c = n(64),
        l = n(65),
        u = n(23),
        p = n(10);
    class d extends c.BaseUpdater {
        constructor(e, t) {
            super(e, t)
        }
        isUpdaterActive() {
            return null == process.env.APPIMAGE ? (null == process.env.SNAP ? this._logger.warn("APPIMAGE env is not defined, current application is not an AppImage") : this._logger.info("SNAP env is defined, updater is disabled"), !1) : super.isUpdaterActive()
        }
        doDownloadUpdate(e) {
            const t = e.updateInfoAndProvider.provider,
                n = p.findFile(t.resolveFiles(e.updateInfoAndProvider.info), "AppImage");
            return this.executeDownload({
                fileExtension: "AppImage",
                fileInfo: n,
                downloadUpdateOptions: e,
                task: async (i, s) => {
                    const a = process.env.APPIMAGE;
                    if (null == a) throw r.newError("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
                    let c = !1;
                    try {
                        const r = {
                            newUrl: n.url,
                            oldFile: a,
                            logger: this._logger,
                            newFile: i,
                            isUseMultipleRangeRequest: t.isUseMultipleRangeRequest,
                            requestHeaders: e.requestHeaders,
                            cancellationToken: e.cancellationToken
                        };
                        this.listenerCount(u.DOWNLOAD_PROGRESS) > 0 && (r.onProgress = e => this.emit(u.DOWNLOAD_PROGRESS, e)), await new l.FileWithEmbeddedBlockMapDifferentialDownloader(n.info, this.httpExecutor, r).download()
                    } catch (e) {
                        this._logger.error("Cannot download differentially, fallback to full download: " + (e.stack || e)), c = "linux" === process.platform
                    }
                    c && await this.httpExecutor.download(n.url, i, s), await o.chmod(i, 493)
                }
            })
        }
        doInstall(e) {
            const t = process.env.APPIMAGE;
            if (null == t) throw r.newError("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
            let n;
            s.unlinkSync(t);
            const o = a.basename(t);
            n = a.basename(e.installerPath) !== o && /\d+\.\d+\.\d+/.test(o) ? a.join(a.dirname(t), a.basename(e.installerPath)) : t, i.execFileSync("mv", ["-f", e.installerPath, n]), n !== t && this.emit("appimage-filename-updated", n);
            const c = {
                ...process.env,
                APPIMAGE_SILENT_INSTALL: "true"
            };
            return e.isForceRunAfter ? i.spawn(n, [], {
                detached: !0,
                stdio: "ignore",
                env: c
            }).unref() : (c.APPIMAGE_EXIT_AFTER_INSTALL = "true", i.execFileSync(n, [], {
                env: c
            })), !0
        }
    }
    t.AppImageUpdater = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BaseUpdater = void 0;
    const r = n(35);
    class i extends r.AppUpdater {
        constructor(e, t) {
            super(e, t), this.quitAndInstallCalled = !1, this.quitHandlerAdded = !1
        }
        quitAndInstall(e = !1, t = !1) {
            this._logger.info("Install on explicit quitAndInstall"), this.install(e, !e || t) ? setImmediate(() => {
                n(2).autoUpdater.emit("before-quit-for-update"), this.app.quit()
            }) : this.quitAndInstallCalled = !1
        }
        executeDownload(e) {
            return super.executeDownload({
                ...e,
                done: e => (this.dispatchUpdateDownloaded(e), this.addQuitHandler(), Promise.resolve())
            })
        }
        install(e, t) {
            if (this.quitAndInstallCalled) return this._logger.warn("install call ignored: quitAndInstallCalled is set to true"), !1;
            const n = this.downloadedUpdateHelper,
                r = null == n ? null : n.file,
                i = null == n ? null : n.downloadedFileInfo;
            if (null == r || null == i) return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
            this.quitAndInstallCalled = !0;
            try {
                return this._logger.info(`Install: isSilent: ${e}, isForceRunAfter: ${t}`), this.doInstall({
                    installerPath: r,
                    isSilent: e,
                    isForceRunAfter: t,
                    isAdminRightsRequired: i.isAdminRightsRequired
                })
            } catch (e) {
                return this.dispatchError(e), !1
            }
        }
        addQuitHandler() {
            !this.quitHandlerAdded && this.autoInstallOnAppQuit && (this.quitHandlerAdded = !0, this.app.onQuit(e => {
                this.quitAndInstallCalled ? this._logger.info("Update installer has already been triggered. Quitting application.") : this.autoInstallOnAppQuit ? 0 === e ? (this._logger.info("Auto install update on quit"), this.install(!0, !1)) : this._logger.info("Update will be not installed on quit because application is quitting with exit code " + e) : this._logger.info("Update will not be installed on quit because autoInstallOnAppQuit is set to false.")
            }))
        }
    }
    t.BaseUpdater = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FileWithEmbeddedBlockMapDifferentialDownloader = void 0;
    const r = n(13),
        i = n(66),
        o = n(68);
    class s extends i.DifferentialDownloader {
        async download() {
            const e = this.blockAwareFileInfo,
                t = e.size,
                n = t - (e.blockMapSize + 4);
            this.fileMetadataBuffer = await this.readRemoteBytes(n, t - 1);
            const i = a(this.fileMetadataBuffer.slice(0, this.fileMetadataBuffer.length - 4));
            await this.doDownload(await async function(e) {
                const t = await r.open(e, "r");
                try {
                    const e = (await r.fstat(t)).size,
                        n = Buffer.allocUnsafe(4);
                    await r.read(t, n, 0, n.length, e - n.length);
                    const i = Buffer.allocUnsafe(n.readUInt32BE(0));
                    return await r.read(t, i, 0, i.length, e - n.length - i.length), await r.close(t), a(i)
                } catch (e) {
                    throw await r.close(t), e
                }
            }(this.options.oldFile), i)
        }
    }

    function a(e) {
        return JSON.parse(o.inflateRawSync(e).toString())
    }
    t.FileWithEmbeddedBlockMapDifferentialDownloader = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DifferentialDownloader = void 0;
    const r = n(1),
        i = n(13),
        o = n(3),
        s = n(67),
        a = n(11),
        c = n(46),
        l = n(154),
        u = n(155);

    function p(e, t = " KB") {
        return new Intl.NumberFormat("en").format((e / 1024).toFixed(2)) + t
    }
    t.DifferentialDownloader = class {
        constructor(e, t, n) {
            this.blockAwareFileInfo = e, this.httpExecutor = t, this.options = n, this.fileMetadataBuffer = null, this.logger = n.logger
        }
        createRequestOptions() {
            const e = {
                headers: {
                    ...this.options.requestHeaders,
                    accept: "*/*"
                }
            };
            return r.configureRequestUrl(this.options.newUrl, e), r.configureRequestOptions(e), e
        }
        doDownload(e, t) {
            if (e.version !== t.version) throw new Error(`version is different (${e.version} - ${t.version}), full download is required`);
            const n = this.logger,
                r = c.computeOperations(e, t, n);
            null != n.debug && n.debug(JSON.stringify(r, null, 2));
            let i = 0,
                o = 0;
            for (const e of r) {
                const t = e.end - e.start;
                e.kind === c.OperationKind.DOWNLOAD ? i += t : o += t
            }
            const s = this.blockAwareFileInfo.size;
            if (i + o + (null == this.fileMetadataBuffer ? 0 : this.fileMetadataBuffer.length) !== s) throw new Error(`Internal error, size mismatch: downloadSize: ${i}, copySize: ${o}, newSize: ${s}`);
            return n.info(`Full: ${p(s)}, To download: ${p(i)} (${Math.round(i/(s/100))}%)`), this.downloadFile(r)
        }
        downloadFile(e) {
            const t = [],
                n = () => Promise.all(t.map(e => i.close(e.descriptor).catch(t => {
                    this.logger.error(`cannot close file "${e.path}": ${t}`)
                })));
            return this.doDownloadFile(e, t).then(n).catch(e => n().catch(t => {
                try {
                    this.logger.error("cannot close files: " + t)
                } catch (e) {
                    try {
                        console.error(e)
                    } catch (e) {}
                }
                throw e
            }).then(() => {
                throw e
            }))
        }
        async doDownloadFile(e, t) {
            const n = await i.open(this.options.oldFile, "r");
            t.push({
                descriptor: n,
                path: this.options.oldFile
            });
            const p = await i.open(this.options.newFile, "w");
            t.push({
                descriptor: p,
                path: this.options.newFile
            });
            const d = o.createWriteStream(this.options.newFile, {
                fd: p
            });
            await new Promise((i, o) => {
                const p = [];
                let h = void 0;
                if (!this.options.isUseMultipleRangeRequest && this.options.onProgress) {
                    const t = [];
                    let n = 0;
                    for (const r of e) r.kind === c.OperationKind.DOWNLOAD && (t.push(r.end - r.start), n += r.end - r.start);
                    const r = {
                        expectedByteCounts: t,
                        grandTotal: n
                    };
                    h = new u.ProgressDifferentialDownloadCallbackTransform(r, this.options.cancellationToken, this.options.onProgress), p.push(h)
                }
                const f = new r.DigestTransform(this.blockAwareFileInfo.sha512);
                f.isValidateOnEnd = !1, p.push(f), d.on("finish", () => {
                    d.close(() => {
                        t.splice(1, 1);
                        try {
                            f.validate()
                        } catch (e) {
                            return void o(e)
                        }
                        i(void 0)
                    })
                }), p.push(d);
                let g = null;
                for (const e of p) e.on("error", o), g = null == g ? e : g.pipe(e);
                const m = p[0];
                let v;
                if (this.options.isUseMultipleRangeRequest) return v = l.executeTasksUsingMultipleRangeRequests(this, e, m, n, o), void v(0);
                let y = 0,
                    w = null;
                this.logger.info("Differential download: " + this.options.newUrl);
                const E = this.createRequestOptions();
                E.redirect = "manual", v = t => {
                    var i, l;
                    if (t >= e.length) return null != this.fileMetadataBuffer && m.write(this.fileMetadataBuffer), void m.end();
                    const u = e[t++];
                    if (u.kind === c.OperationKind.COPY) return h && h.beginFileCopy(), void s.copyData(u, m, n, o, () => v(t));
                    const p = `bytes=${u.start}-${u.end-1}`;
                    E.headers.range = p, null === (l = null === (i = this.logger) || void 0 === i ? void 0 : i.debug) || void 0 === l || l.call(i, "download range: " + p), h && h.beginRangeDownload();
                    const d = this.httpExecutor.createRequest(E, e => {
                        e.statusCode >= 400 && o(r.createHttpError(e)), e.pipe(m, {
                            end: !1
                        }), e.once("end", () => {
                            h && h.endRangeDownload(), 100 == ++y ? (y = 0, setTimeout(() => v(t), 1e3)) : v(t)
                        })
                    });
                    d.on("redirect", (e, t, n) => {
                        this.logger.info("Redirect to " + function(e) {
                            const t = e.indexOf("?");
                            return t < 0 ? e : e.substring(0, t)
                        }(n)), w = n, r.configureRequestUrl(new a.URL(w), E), d.followRedirect()
                    }), this.httpExecutor.addErrorAndTimeoutHandlers(d, o), d.end()
                }, v(0)
            })
        }
        async readRemoteBytes(e, t) {
            const n = Buffer.allocUnsafe(t + 1 - e),
                r = this.createRequestOptions();
            r.headers.range = `bytes=${e}-${t}`;
            let i = 0;
            if (await this.request(r, e => {
                    e.copy(n, i), i += e.length
                }), i !== n.length) throw new Error(`Received data length ${i} is not equal to expected ${n.length}`);
            return n
        }
        request(e, t) {
            return new Promise((n, r) => {
                const i = this.httpExecutor.createRequest(e, e => {
                    l.checkIsRangesSupported(e, r) && (e.on("data", t), e.on("end", () => n()))
                });
                this.httpExecutor.addErrorAndTimeoutHandlers(i, r), i.end()
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DataSplitter = t.copyData = void 0;
    const r = n(1),
        i = n(3),
        o = n(16),
        s = n(46),
        a = Buffer.from("\r\n\r\n");
    var c;

    function l(e, t, n, r, o) {
        const s = i.createReadStream("", {
            fd: n,
            autoClose: !1,
            start: e.start,
            end: e.end - 1
        });
        s.on("error", r), s.once("end", o), s.pipe(t, {
            end: !1
        })
    }! function(e) {
        e[e.INIT = 0] = "INIT", e[e.HEADER = 1] = "HEADER", e[e.BODY = 2] = "BODY"
    }(c || (c = {})), t.copyData = l;
    class u extends o.Writable {
        constructor(e, t, n, r, i, o) {
            super(), this.out = e, this.options = t, this.partIndexToTaskIndex = n, this.partIndexToLength = i, this.finishHandler = o, this.partIndex = -1, this.headerListBuffer = null, this.readState = c.INIT, this.ignoreByteCount = 0, this.remainingPartDataCount = 0, this.actualPartLength = 0, this.boundaryLength = r.length + 4, this.ignoreByteCount = this.boundaryLength - 2
        }
        get isFinished() {
            return this.partIndex === this.partIndexToLength.length
        }
        _write(e, t, n) {
            this.isFinished ? console.error(`Trailing ignored data: ${e.length} bytes`) : this.handleData(e).then(n).catch(n)
        }
        async handleData(e) {
            let t = 0;
            if (0 !== this.ignoreByteCount && 0 !== this.remainingPartDataCount) throw r.newError("Internal error", "ERR_DATA_SPLITTER_BYTE_COUNT_MISMATCH");
            if (this.ignoreByteCount > 0) {
                const n = Math.min(this.ignoreByteCount, e.length);
                this.ignoreByteCount -= n, t = n
            } else if (this.remainingPartDataCount > 0) {
                const n = Math.min(this.remainingPartDataCount, e.length);
                this.remainingPartDataCount -= n, await this.processPartData(e, 0, n), t = n
            }
            if (t !== e.length) {
                if (this.readState === c.HEADER) {
                    const n = this.searchHeaderListEnd(e, t);
                    if (-1 === n) return;
                    t = n, this.readState = c.BODY, this.headerListBuffer = null
                }
                for (;;) {
                    if (this.readState === c.BODY) this.readState = c.INIT;
                    else {
                        this.partIndex++;
                        let n = this.partIndexToTaskIndex.get(this.partIndex);
                        if (null == n) {
                            if (!this.isFinished) throw r.newError("taskIndex is null", "ERR_DATA_SPLITTER_TASK_INDEX_IS_NULL");
                            n = this.options.end
                        }
                        const i = 0 === this.partIndex ? this.options.start : this.partIndexToTaskIndex.get(this.partIndex - 1) + 1;
                        if (i < n) await this.copyExistingData(i, n);
                        else if (i > n) throw r.newError("prevTaskIndex must be < taskIndex", "ERR_DATA_SPLITTER_TASK_INDEX_ASSERT_FAILED");
                        if (this.isFinished) return this.onPartEnd(), void this.finishHandler();
                        if (t = this.searchHeaderListEnd(e, t), -1 === t) return void(this.readState = c.HEADER)
                    }
                    const n = this.partIndexToLength[this.partIndex],
                        i = t + n,
                        o = Math.min(i, e.length);
                    if (await this.processPartStarted(e, t, o), this.remainingPartDataCount = n - (o - t), this.remainingPartDataCount > 0) return;
                    if (t = i + this.boundaryLength, t >= e.length) return void(this.ignoreByteCount = this.boundaryLength - (e.length - i))
                }
            }
        }
        copyExistingData(e, t) {
            return new Promise((n, r) => {
                const i = () => {
                    if (e === t) return void n();
                    const o = this.options.tasks[e];
                    o.kind === s.OperationKind.COPY ? l(o, this.out, this.options.oldFileFd, r, () => {
                        e++, i()
                    }) : r(new Error("Task kind must be COPY"))
                };
                i()
            })
        }
        searchHeaderListEnd(e, t) {
            const n = e.indexOf(a, t);
            if (-1 !== n) return n + a.length;
            const r = 0 === t ? e : e.slice(t);
            return null == this.headerListBuffer ? this.headerListBuffer = r : this.headerListBuffer = Buffer.concat([this.headerListBuffer, r]), -1
        }
        onPartEnd() {
            const e = this.partIndexToLength[this.partIndex - 1];
            if (this.actualPartLength !== e) throw r.newError(`Expected length: ${e} differs from actual: ${this.actualPartLength}`, "ERR_DATA_SPLITTER_LENGTH_MISMATCH");
            this.actualPartLength = 0
        }
        processPartStarted(e, t, n) {
            return 0 !== this.partIndex && this.onPartEnd(), this.processPartData(e, t, n)
        }
        processPartData(e, t, n) {
            this.actualPartLength += n - t;
            const r = this.out;
            return r.write(0 === t && e.length === n ? e : e.slice(t, n)) ? Promise.resolve() : new Promise((e, t) => {
                r.on("error", t), r.once("drain", () => {
                    r.removeListener("error", t), e()
                })
            })
        }
    }
    t.DataSplitter = u
}, function(e, t) {
    e.exports = require("zlib")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MacUpdater = void 0;
    const r = n(1),
        i = n(13),
        o = n(3),
        s = n(70),
        a = n(35),
        c = n(10),
        l = n(33);
    class u extends a.AppUpdater {
        constructor(e, t) {
            super(e, t), this.nativeUpdater = n(2).autoUpdater, this.squirrelDownloadedUpdate = !1, this.nativeUpdater.on("error", e => {
                this._logger.warn(e), this.emit("error", e)
            }), this.nativeUpdater.on("update-downloaded", () => {
                this.squirrelDownloadedUpdate = !0
            })
        }
        debug(e) {
            null != this._logger.debug && this._logger.debug(e)
        }
        async doDownloadUpdate(e) {
            let t = e.updateInfoAndProvider.provider.resolveFiles(e.updateInfoAndProvider.info);
            const n = this._logger;
            let i = !1;
            try {
                this.debug("Checking for macOS Rosetta environment"), i = l.execFileSync("sysctl", ["sysctl.proc_translated"], {
                    encoding: "utf8"
                }).includes("sysctl.proc_translated: 1"), n.info(`Checked for macOS Rosetta environment (isRosetta=${i})`)
            } catch (e) {
                n.warn("sysctl shell command to check for macOS Rosetta environment failed: " + e)
            }
            let o = !1;
            try {
                this.debug("Checking for arm64 in uname");
                const e = l.execFileSync("uname", ["-a"], {
                    encoding: "utf8"
                }).includes("ARM");
                n.info("Checked 'uname -a': arm64=" + e), o = o || e
            } catch (e) {
                n.warn("uname shell command to check for arm64 failed: " + e)
            }
            o = o || "arm64" === process.arch || i;
            const s = e => {
                var t;
                return e.url.pathname.includes("arm64") || (null === (t = e.info.url) || void 0 === t ? void 0 : t.includes("arm64"))
            };
            t = o && t.some(s) ? t.filter(e => o === s(e)) : t.filter(e => !s(e));
            const a = c.findFile(t, "zip", ["pkg", "dmg"]);
            if (null == a) throw r.newError("ZIP file not provided: " + r.safeStringifyJson(t), "ERR_UPDATER_ZIP_FILE_NOT_FOUND");
            return this.executeDownload({
                fileExtension: "zip",
                fileInfo: a,
                downloadUpdateOptions: e,
                task: (e, t) => this.httpExecutor.download(a.url, e, t),
                done: e => this.updateDownloaded(a, e)
            })
        }
        async updateDownloaded(e, t) {
            var n;
            const r = t.downloadedFile,
                a = null !== (n = e.info.size) && void 0 !== n ? n : (await i.stat(r)).size,
                c = this._logger,
                l = "fileToProxy=" + e.url.href;
            this.debug(`Creating proxy server for native Squirrel.Mac (${l})`);
            const u = s.createServer();

            function p() {
                return "http://127.0.0.1:" + u.address().port
            }
            return this.debug(`Proxy server for native Squirrel.Mac is created (${l})`), u.on("close", () => {
                c.info(`Proxy server for native Squirrel.Mac is closed (${l})`)
            }), await new Promise((e, n) => {
                const i = `/${Date.now().toString(16)}-${Math.floor(9999*Math.random()).toString(16)}.zip`;
                u.on("request", (t, s) => {
                    const l = t.url;
                    if (c.info(l + " requested"), "/" === l) {
                        const e = Buffer.from(`{ "url": "${p()}${i}" }`);
                        return s.writeHead(200, {
                            "Content-Type": "application/json",
                            "Content-Length": e.length
                        }), void s.end(e)
                    }
                    if (!l.startsWith(i)) return c.warn(l + " requested, but not supported"), s.writeHead(404), void s.end();
                    c.info(`${i} requested by Squirrel.Mac, pipe ${r}`);
                    let d = !1;
                    s.on("finish", () => {
                        try {
                            setImmediate(() => u.close())
                        } finally {
                            d || (this.nativeUpdater.removeListener("error", n), e([]))
                        }
                    });
                    const h = o.createReadStream(r);
                    h.on("error", e => {
                        try {
                            s.end()
                        } catch (e) {
                            c.warn("cannot end response: " + e)
                        }
                        d = !0, this.nativeUpdater.removeListener("error", n), n(new Error(`Cannot pipe "${r}": ${e}`))
                    }), s.writeHead(200, {
                        "Content-Type": "application/zip",
                        "Content-Length": a
                    }), h.pipe(s)
                }), this.debug(`Proxy server for native Squirrel.Mac is starting to listen (${l})`), u.listen(0, "127.0.0.1", () => {
                    this.debug(`Proxy server for native Squirrel.Mac is listening (address=${p()}, ${l})`), this.nativeUpdater.setFeedURL({
                        url: p(),
                        headers: {
                            "Cache-Control": "no-cache"
                        }
                    }), this.dispatchUpdateDownloaded(t), this.autoInstallOnAppQuit ? (this.nativeUpdater.once("error", n), this.nativeUpdater.checkForUpdates()) : e([])
                })
            })
        }
        quitAndInstall() {
            this.squirrelDownloadedUpdate ? this.nativeUpdater.quitAndInstall() : (this.nativeUpdater.on("update-downloaded", () => {
                this.nativeUpdater.quitAndInstall()
            }), this.autoInstallOnAppQuit || this.nativeUpdater.checkForUpdates())
        }
    }
    t.MacUpdater = u
}, function(e, t) {
    e.exports = require("http")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NsisUpdater = void 0;
    const r = n(1),
        i = n(33),
        o = n(0),
        s = n(64),
        a = n(65),
        c = n(156),
        l = n(23),
        u = n(12),
        p = n(10),
        d = n(13),
        h = n(157),
        f = n(11),
        g = n(68);
    class m extends s.BaseUpdater {
        constructor(e, t) {
            super(e, t)
        }
        doDownloadUpdate(e) {
            const t = e.updateInfoAndProvider.provider,
                n = p.findFile(t.resolveFiles(e.updateInfoAndProvider.info), "exe");
            return this.executeDownload({
                fileExtension: "exe",
                downloadUpdateOptions: e,
                fileInfo: n,
                task: async (i, o, s, a) => {
                    const c = n.packageInfo,
                        l = null != c && null != s;
                    (l || await this.differentialDownloadInstaller(n, e, i, t)) && await this.httpExecutor.download(n.url, i, o);
                    const u = await this.verifySignature(i);
                    if (null != u) throw await a(), r.newError(`New version ${e.updateInfoAndProvider.info.version} is not signed by the application owner: ${u}`, "ERR_UPDATER_INVALID_SIGNATURE");
                    if (l && await this.differentialDownloadWebPackage(e, c, s, t)) try {
                        await this.httpExecutor.download(new f.URL(c.path), s, {
                            headers: e.requestHeaders,
                            cancellationToken: e.cancellationToken,
                            sha512: c.sha512
                        })
                    } catch (e) {
                        try {
                            await d.unlink(s)
                        } catch (e) {}
                        throw e
                    }
                }
            })
        }
        async verifySignature(e) {
            let t;
            try {
                if (t = (await this.configOnDisk.value).publisherName, null == t) return null
            } catch (e) {
                if ("ENOENT" === e.code) return null;
                throw e
            }
            return await h.verifySignature(Array.isArray(t) ? t : [t], e, this._logger)
        }
        doInstall(e) {
            const t = ["--updated"];
            e.isSilent && t.push("/S"), e.isForceRunAfter && t.push("--force-run");
            const n = null == this.downloadedUpdateHelper ? null : this.downloadedUpdateHelper.packageFile;
            null != n && t.push("--package-file=" + n);
            const r = () => {
                v(o.join(process.resourcesPath, "elevate.exe"), [e.installerPath].concat(t)).catch(e => this.dispatchError(e))
            };
            return e.isAdminRightsRequired ? (this._logger.info("isAdminRightsRequired is set to true, run installer using elevate.exe"), r(), !0) : (v(e.installerPath, t).catch(e => {
                const t = e.code;
                this._logger.info(`Cannot run installer: error code: ${t}, error message: "${e.message}", will be executed again using elevate if EACCES"`), "UNKNOWN" === t || "EACCES" === t ? r() : this.dispatchError(e)
            }), !0)
        }
        async differentialDownloadInstaller(e, t, n, i) {
            try {
                if (null != this._testOnlyOptions && !this._testOnlyOptions.isUseDifferentialDownload) return !0;
                const s = u.blockmapFiles(e.url, this.app.version, t.updateInfoAndProvider.info.version);
                this._logger.info(`Download block maps (old: "${s[0]}", new: ${s[1]})`);
                const a = async e => {
                    const n = await this.httpExecutor.downloadToBuffer(e, {
                        headers: t.requestHeaders,
                        cancellationToken: t.cancellationToken
                    });
                    if (null == n || 0 === n.length) throw new Error(`Blockmap "${e.href}" is empty`);
                    try {
                        return JSON.parse(g.gunzipSync(n).toString())
                    } catch (t) {
                        throw new Error(`Cannot parse blockmap "${e.href}", error: ${t}`)
                    }
                }, p = {
                    newUrl: e.url,
                    oldFile: o.join(this.downloadedUpdateHelper.cacheDir, r.CURRENT_APP_INSTALLER_FILE_NAME),
                    logger: this._logger,
                    newFile: n,
                    isUseMultipleRangeRequest: i.isUseMultipleRangeRequest,
                    requestHeaders: t.requestHeaders,
                    cancellationToken: t.cancellationToken
                };
                this.listenerCount(l.DOWNLOAD_PROGRESS) > 0 && (p.onProgress = e => this.emit(l.DOWNLOAD_PROGRESS, e));
                const d = await Promise.all(s.map(e => a(e)));
                return await new c.GenericDifferentialDownloader(e.info, this.httpExecutor, p).download(d[0], d[1]), !1
            } catch (e) {
                if (this._logger.error("Cannot download differentially, fallback to full download: " + (e.stack || e)), null != this._testOnlyOptions) throw e;
                return !0
            }
        }
        async differentialDownloadWebPackage(e, t, n, i) {
            if (null == t.blockMapSize) return !0;
            try {
                const s = {
                    newUrl: new f.URL(t.path),
                    oldFile: o.join(this.downloadedUpdateHelper.cacheDir, r.CURRENT_APP_PACKAGE_FILE_NAME),
                    logger: this._logger,
                    newFile: n,
                    requestHeaders: this.requestHeaders,
                    isUseMultipleRangeRequest: i.isUseMultipleRangeRequest,
                    cancellationToken: e.cancellationToken
                };
                this.listenerCount(l.DOWNLOAD_PROGRESS) > 0 && (s.onProgress = e => this.emit(l.DOWNLOAD_PROGRESS, e)), await new a.FileWithEmbeddedBlockMapDifferentialDownloader(t, this.httpExecutor, s).download()
            } catch (e) {
                return this._logger.error("Cannot download differentially, fallback to full download: " + (e.stack || e)), "win32" === process.platform
            }
            return !1
        }
    }
    async function v(e, t) {
        return new Promise((n, r) => {
            try {
                const o = i.spawn(e, t, {
                    detached: !0,
                    stdio: "ignore"
                });
                o.on("error", e => {
                    r(e)
                }), o.unref(), void 0 !== o.pid && n(!0)
            } catch (e) {
                r(e)
            }
        })
    }
    t.NsisUpdater = m
}, function(e, t) {
    function n(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
    }
    n.keys = function() {
        return []
    }, n.resolve = n, e.exports = n, n.id = 72
}, function(e, t) {
    var n = {
        utf8: {
            stringToBytes: function(e) {
                return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(n.bin.bytesToString(e)))
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                return t
            },
            bytesToString: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                return t.join("")
            }
        }
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(2),
        o = r(n(75));
    const {
        version: s
    } = n(76), a = n(15), {
        initUpdater: c
    } = n(77), l = n(170);
    process.on("uncaughtException", e => {
        console.log("Uncaught Exception thrown!\n", e)
    }), process.on("unhandledRejection", e => {
        console.log("Unhandled Rejection at Promise!\n", e)
    }), process.on("exit", () => {
        console.log("Process exit")
    }), process.on("SIGHUP", () => {
        console.log("Got SIGHUP signal.")
    }), process.on("SIGTERM", () => {
        console.log("Got SIGTERM signal.")
    }), process.on("SIGINT", () => {
        console.log("Got SIGINT signal.")
    }), process.on("SIGFPE", () => {
        console.log("Got SIGFPE signal.")
    }), process.env.DEBUG && (n(173)({
        enabled: !0,
        showDevTools: !0
    }), i.app.commandLine.appendSwitch("inspect", "5858")), process.env.STAGING ? console.warn("STAGING CONFIG MODE ON") : console.warn("STAGING CONFIG MODE OFF");
    const u = "win32" === process.platform,
        p = u ? 730 : 700,
        d = u ? 1110 : 1105,
        h = u ? 955 : 940,
        f = "true" === process.env.WITHOUT_SCREEN_CONSTRAINTS ? 200 : h;
    let g;
    global.__static = n(0).join(__dirname, "/static").replace(/\\/g, "\\\\"), i.app.disableHardwareAcceleration(), i.app.platformVersion = a.release(), i.app.setAppUserModelId("io.atomicwallet");
    const m = `file://${__dirname}/index.html`;

    function v() {
        let e = l({
            defaultWidth: d,
            defaultHeight: p,
            file: "window-state"
        });
        g = new i.BrowserWindow({
            backgroundColor: "#232c48",
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height,
            minHeight: p,
            minWidth: f,
            maximizable: !0,
            webviewTag: !0,
            title: "Atomic Wallet " + s,
            show: !1,
            webPreferences: {
                contextIsolation: !1,
                backgroundThrottling: !1,
                nodeIntegration: !0,
                webSecurity: !1,
                webviewTag: !0,
                enableRemoteModule: !1
            }
        });
        const t = g.webContents.getUserAgent().replace(/Electron.*[0-9] /, "");
        g.loadURL(m, {
            userAgent: t
        }), process.env.DEBUG && g.webContents.openDevTools(), (0, o.default)(), g.on("session-end", () => {
            console.log("session end")
        }), g.on("closed", () => {
            g = null
        }), g.once("ready-to-show", () => {
            g.show(), e.manage(g)
        }), g.webContents.session.setPermissionRequestHandler((e, t, n) => n(e.getURL() === m));
        const n = [{
            label: "Edit",
            submenu: [{
                role: "cut"
            }, {
                role: "copy"
            }, {
                role: "paste"
            }, {
                role: "selectAll"
            }, {
                type: "separator"
            }, {
                role: "undo"
            }, {
                role: "redo"
            }]
        }, {
            role: "window",
            submenu: [{
                role: "close"
            }]
        }];
        if ("darwin" === process.platform && (n.unshift({
                label: i.app.getName(),
                submenu: [{
                    role: "about"
                }, {
                    type: "separator"
                }, {
                    role: "services",
                    submenu: []
                }, {
                    type: "separator"
                }, {
                    role: "hide"
                }, {
                    role: "hideothers"
                }, {
                    role: "unhide"
                }, {
                    type: "separator"
                }, {
                    role: "quit"
                }]
            }), n[1].submenu.push({
                type: "separator"
            }, {
                label: "Speech",
                submenu: [{
                    role: "startspeaking"
                }, {
                    role: "stopspeaking"
                }]
            })), !u) {
            const e = i.Menu.buildFromTemplate(n);
            i.Menu.setApplicationMenu(e)
        }
        g.setMenuBarVisibility(!1), g.setAutoHideMenuBar(!1)
    }
    n(179), n(183), n(184), i.ipcMain.on("activate-window", () => {
        g.isMinimized() && g.restore(), g.focus()
    }), i.app.on("gpu-process-crashed", () => {
        console.log("gpu crashed/killed")
    }), i.app.on("ready", () => {
        v(), c(s, g)
    }), i.app.on("window-all-closed", () => {
        i.app.quit()
    }), i.app.on("activate", () => {
        null === g && v()
    }), i.app.requestSingleInstanceLock() ? i.app.on("second-instance", e => {
        e.preventDefault(), g.restore(), g.focus()
    }) : i.app.quit(), n(2).powerSaveBlocker.start("prevent-app-suspension")
}, function(e, t, n) {
    "use strict";
    var r = n(22);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = r(n(3)),
        o = r(n(0)),
        s = n(2),
        a = n(47);
    const c = o.default.normalize(s.app.getPath("cache") + a.CACHE_DIR);
    t.default = function() {
        i.default.readdir(c, (function(e, t) {
            e ? console.error("cache dir handle error") : t.forEach((function(e, t) {
                i.default.stat(o.default.join(c, e), (function(t, n) {
                    let r, s;
                    if (t) return console.error(t);
                    s = (new Date).getTime(), r = new Date(n.ctime).getTime() + 6048e5, s > r ? (console.log("delete file", e), i.default.unlink(o.default.join(c, e), (function(e) {
                        if (e) return console.error(e)
                    }))) : console.log(e, s, r)
                }))
            }))
        }))
    }
}, function(e) {
    e.exports = JSON.parse('{"name":"atomic","version":"2.69.2","author":"atomicwallet.io <support@atomicwallet.io>","description":"Manage your Bitcoin, Ethereum, XRP, Litecoin, XLM, and over 300 other coins and tokens.","license":"UNLICENCED","main":"./dist/electron/main.js","repository":"https://atomicwallet.io","homepage":"https://atomicwallet.io","scripts":{"bump":"npm --no-git-tag-version version patch -m \\"Build %s\\"","build":"node --max-old-space-size=4076 .electron-vue/build.js && electron-builder --config build-config.yaml","build:win-dev":"cross-env NODE_ENV=development node .electron-vue/build.js && electron-builder --win","build:win":"node .electron-vue/build.js && electron-builder --config build-config.yaml --win","build:linux":"node --max-old-space-size=4076 .electron-vue/build.js && electron-builder --config build-config.yaml --linux AppImage deb rpm tar.gz","build:deb":"node --max-old-space-size=4076 .electron-vue/build.js && electron-builder --config build-config.yaml --linux deb ","build:dir":"node .electron-vue/build.js && electron-builder --dir","build:clean":"cross-env BUILD_TARGET=clean node .electron-vue/build.js","build:web":"cross-env BUILD_TARGET=web node .electron-vue/build.js","deps":"electron-builder install-app-deps","dev":"cross-env NODE_ENV=development ELECTRON_DISABLE_SECURITY_WARNINGS=true node --max-old-space-size=4076 .electron-vue/dev-runner.js","dev:minwidth":"cross-env NODE_ENV=development WITHOUT_SCREEN_CONSTRAINTS=true ELECTRON_DISABLE_SECURITY_WARNINGS=true node --max-old-space-size=4076 .electron-vue/dev-runner.js","lint":"eslint --ext .js,.vue -f ./node_modules/eslint-friendly-formatter src test","lint:fix":"eslint --ext .js,.vue -f ./node_modules/eslint-friendly-formatter --fix src test","pack":"npm run pack:main && npm run pack:renderer","pack:main":"cross-env NODE_ENV=production webpack --progress --colors --config .electron-vue/webpack.main.config.js","pack:renderer":"cross-env NODE_ENV=production webpack --progress --colors --config .electron-vue/webpack.renderer.config.js","jest:unit":"jest","jest:unit:update":"jest -update","svg":"vsvg -s ./src/renderer/assets/icons -t ./src/renderer/icons","svg:coins":"vsvg -s ./src/renderer/assets/img/coins -t ./src/renderer/icons/coins","ownrebuild":"electron-builder node-gyp-rebuild","sync:configs":"npx atomic-sync-configs"},"build":{"publish":[{"provider":"generic","url":"https://releases.atomicwallet.io/","channel":"latest"}],"productName":"Atomic Wallet","appId":"io.atomicwallet","directories":{"output":"build"},"files":["dist/electron/**/*"],"dmg":{"sign":true,"contents":[{"x":410,"y":150,"type":"link","path":"/Applications"},{"x":130,"y":150,"type":"file"}]},"mac":{"icon":"build/icons/icon.icns","gatekeeperAssess":false,"target":["zip","dmg"]},"win":{"publisherName":"Atomic Protocol Systems OÜ","verifyUpdateCodeSignature":true,"icon":"build/icons/icon.ico"},"linux":{"icon":"build/icons/256x256.png"}},"engines":{"yarn":">=1.22.0","node":">=14"},"dependencies":{"atomic-core":"git+ssh://git@github.com:Atomicwallet/atomic-core.git#1.29.1","atomic-uikit":"git+ssh://git@github.com:Atomicwallet/atomic-uikit.git","axios":"^0.18.0","base-x":"^3.0.7","big.js":"^5.2.2","bignumber.js":"^8.1.1","compare-version":"0.1.2","countup":"^1.8.2","countup.js":"^1.9.3","d3":"^5.11.0","electron-google-analytics":"^0.1.0","electron-updater":"^4.3.9","event-emitter":"^0.3.5","fast-json-parse":"^1.0.3","fast-sort":"^1.5.6","form-serialize":"^0.7.2","grpc-tools":"^1.11.2","jayson":"^3.0.1","md5":"^2.2.1","mime-types":"^2.1.35","moment":"^2.24.0","mousetrap":"^1.6.3","nem-sdk":"^1.6.7","node-json-rpc2":"^1.1.0","object-path":"^0.11.4","pbkdf2":"^3.0.17","prepend-file":"^1.3.1","qrious":"https://github.com/Atomicwallet/qrious","qs":"^6.7.0","request":"^2.88.0","request-promise":"^4.2.4","set-cookie-parser":"^2.3.5","sha256":"^0.2.0","sliced":"^1.0.1","sprintf-js":"^1.1.2","text-encoding":"^0.7.0","vee-validate":"3","vue":"^2.7","vue-moment":"^4.0.0","vue-perfect-scrollbar":"^0.1.0","vue-router":"^3.0.3","vue2-teleport":"^1.0.1","vuex":"^3.1.0","webrtc-adapter":"^7.2.3"},"devDependencies":{"@atomix/eslint-config":"^7.1.0","@babel/core":"^7.16.12","@babel/plugin-proposal-class-properties":"^7.16.7","@babel/plugin-proposal-export-namespace-from":"^7.18.9","@babel/plugin-proposal-nullish-coalescing-operator":"^7.16.7","@babel/plugin-proposal-optional-chaining":"^7.16.7","@babel/plugin-proposal-private-methods":"^7.16.11","@babel/plugin-proposal-private-property-in-object":"^7.16.7","@babel/plugin-transform-modules-commonjs":"^7.18.6","@babel/plugin-transform-runtime":"^7.16.10","@babel/preset-env":"^7.18.2","@babel/register":"^7.16.7","@open-wc/webpack-import-meta-loader":"^0.4.7","@types/jest":"^28.1.3","@vue/cli-plugin-unit-jest":"^5.0.8","@vue/test-utils":"^1.1.3","@vue/vue2-jest":"^27.0.0-alpha.2","babel-core":"^7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-jest":"^27.0.6","babel-loader":"^8.0.5","babel-minify-webpack-plugin":"^0.3.1","cfonts":"^2.4.2","chalk":"^2.4.2","copy-webpack-plugin":"^5.0.2","core-js":"^3.11.0","cross-env":"^5.2.0","css-loader":"^2.1.1","del":"^4.1.0","electron":"22.3.5","electron-builder":"^22.3.6","electron-debug":"^2.2.0","electron-devtools-installer":"^3.2.0","electron-log":"^3.0.5","electron-notarize":"^0.1.1","electron-unhandled":"^2.1.0","electron-window-state":"^5.0.3","esbuild-loader":"^2.21.0","eslint":"^5.16.0","eslint-config-prettier":"^4.1.0","eslint-config-standard":"^12.0.0","eslint-friendly-formatter":"^4.0.1","eslint-loader":"^2.1.2","eslint-plugin-html":"^5.0.3","eslint-plugin-import":"^2.16.0","eslint-plugin-jest":"^26.5.3","eslint-plugin-node":"^8.0.1","eslint-plugin-prettier":"^3.0.1","eslint-plugin-promise":"^4.1.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"8.5.0","extract-text-webpack-plugin":"^4.0.0-beta.0","file-loader":"^3.0.1 ","html-webpack-plugin":"^4.0.0-beta.5","identity-obj-proxy":"^3.0.0","inject-loader":"^4.0.1","jest":"^27.0.5","jest-css-modules-transform":"^4.4.2","mini-css-extract-plugin":"^0.6.0","multispinner":"^0.2.1","node-loader":"^0.6.0","node-sass":"^4.11.0","require-dir":"^1.2.0","sass-loader":"^7.1.0","spectron":"^15.0.0","style-loader":"^0.23.1","terser":"4.6.7","terser-webpack-plugin":"^2.2.1","typescript":"^3.5.2","url-loader":"^1.1.2","vue-devtools":"5.1.4","vue-eslint-parser":"^6.0.3","vue-html-loader":"^1.2.4","vue-loader":"^14.2.4","vue-style-loader":"^4.1.2 ","vue-svgicon":"^3.2.5","vue-template-compiler":"^2.7","vue-test-utils":"^1.0.0-beta.11","webpack":"^4.29.6","webpack-dev-server":"^2.11.5","webpack-hot-middleware":"^2.18.2","webpack-merge":"^4.2.1"},"resolutions":{"@solana/web3.js":"1.67.0","bufferutil":"^4.0.3","ed25519":"^0.0.5","keccak":"^3.0.1","tiny-secp256k1":"^1.1.6","ua-parser-js":"0.7.28","bitcore-lib":"8.25.30","ripple-binary-codec":"1.4.2","ripple-keypairs":"1.0.3"},"optionalDependencies":{"fsevents":"*"}}')
}, function(e, t, n) {
    n(0);
    const {
        ipcMain: r
    } = n(2), {
        autoUpdater: i
    } = n(23), o = n(158), s = n(169);
    e.exports = {
        initUpdater: (e, t) => {
            i.logger = o, i.logger.transports.file.level = "info", i.autoDownload = !1, i.autoInstallOnAppQuit = !0, r.on("checking-for-update", () => {
                try {
                    var n, r;
                    process.env.DEBUG && (i.setFeedURL(null !== (n = process.env.UPDATE_FEED_URL) && void 0 !== n ? n : "https://get.atomicwallet.io/pre-release/"), i.channel = null !== (r = process.env.UPDATE_CHANNEL) && void 0 !== r ? r : "pre-release"), setTimeout(() => {
                        i.checkForUpdates().then(({
                            updateInfo: {
                                version: n
                            }
                        }) => {
                            1 === s(n, e) && t.webContents.send("update-available", n)
                        })
                    }, 2e3)
                } catch (e) {}
            }), r.on("download-initiated", () => {
                i.downloadUpdate()
            }), r.on("restart-initiated", () => {
                i.quitAndInstall()
            }), i.on("download-progress", ({
                percent: e
            }) => {
                t.webContents.send("download-progress", {
                    percent: e
                })
            }), i.on("update-downloaded", () => {
                setTimeout(() => {
                    t.webContents.send("update-downloaded")
                }, 1e3)
            }), i.on("error", e => {
                console.log(e)
            })
        }
    }
}, function(e, t, n) {
    t.formatArgs = function(t) {
        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        const n = "color: " + this.color;
        t.splice(1, 0, n, "color: inherit");
        let r = 0,
            i = 0;
        t[0].replace(/%[a-zA-Z%]/g, e => {
            "%%" !== e && (r++, "%c" === e && (i = r))
        }), t.splice(i, 0, n)
    }, t.save = function(e) {
        try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
        } catch (e) {}
    }, t.load = function() {
        let e;
        try {
            e = t.storage.getItem("debug")
        } catch (e) {}
        return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
    }, t.useColors = function() {
        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    }, t.storage = function() {
        try {
            return localStorage
        } catch (e) {}
    }(), t.destroy = (() => {
        let e = !1;
        return () => {
            e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = n(52)(t);
    const {
        formatters: r
    } = e.exports;
    r.j = function(e) {
        try {
            return JSON.stringify(e)
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message
        }
    }
}, function(e, t) {
    var n = 1e3,
        r = 6e4,
        i = 60 * r,
        o = 24 * i;

    function s(e, t, n, r) {
        var i = t >= 1.5 * n;
        return Math.round(e / n) + " " + r + (i ? "s" : "")
    }
    e.exports = function(e, t) {
        t = t || {};
        var a = typeof e;
        if ("string" === a && e.length > 0) return function(e) {
            if (!((e = String(e)).length > 100)) {
                var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var s = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return 315576e5 * s;
                        case "weeks":
                        case "week":
                        case "w":
                            return 6048e5 * s;
                        case "days":
                        case "day":
                        case "d":
                            return s * o;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return s * i;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return s * r;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return s * n;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return s;
                        default:
                            return
                    }
                }
            }
        }(e);
        if ("number" === a && isFinite(e)) return t.long ? function(e) {
            var t = Math.abs(e);
            return t >= o ? s(e, t, o, "day") : t >= i ? s(e, t, i, "hour") : t >= r ? s(e, t, r, "minute") : t >= n ? s(e, t, n, "second") : e + " ms"
        }(e) : function(e) {
            var t = Math.abs(e);
            return t >= o ? Math.round(e / o) + "d" : t >= i ? Math.round(e / i) + "h" : t >= r ? Math.round(e / r) + "m" : t >= n ? Math.round(e / n) + "s" : e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, n) {
    const r = n(53),
        i = n(25);
    t.init = function(e) {
        e.inspectOpts = {};
        const n = Object.keys(t.inspectOpts);
        for (let r = 0; r < n.length; r++) e.inspectOpts[n[r]] = t.inspectOpts[n[r]]
    }, t.log = function(...e) {
        return process.stderr.write(i.format(...e) + "\n")
    }, t.formatArgs = function(n) {
        const {
            namespace: r,
            useColors: i
        } = this;
        if (i) {
            const t = this.color,
                i = "[3" + (t < 8 ? t : "8;5;" + t),
                o = `  ${i};1m${r} [0m`;
            n[0] = o + n[0].split("\n").join("\n" + o), n.push(i + "m+" + e.exports.humanize(this.diff) + "[0m")
        } else n[0] = (t.inspectOpts.hideDate ? "" : (new Date).toISOString() + " ") + r + " " + n[0]
    }, t.save = function(e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG
    }, t.load = function() {
        return process.env.DEBUG
    }, t.useColors = function() {
        return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : r.isatty(process.stderr.fd)
    }, t.destroy = i.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."), t.colors = [6, 2, 3, 4, 5, 1];
    try {
        const e = n(81);
        e && (e.stderr || e).level >= 2 && (t.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
    } catch (e) {}
    t.inspectOpts = Object.keys(process.env).filter(e => /^debug_/i.test(e)).reduce((e, t) => {
        const n = t.substring(6).toLowerCase().replace(/_([a-z])/g, (e, t) => t.toUpperCase());
        let r = process.env[t];
        return r = !!/^(yes|on|true|enabled)$/i.test(r) || !/^(no|off|false|disabled)$/i.test(r) && ("null" === r ? null : Number(r)), e[n] = r, e
    }, {}), e.exports = n(52)(t);
    const {
        formatters: o
    } = e.exports;
    o.o = function(e) {
        return this.inspectOpts.colors = this.useColors, i.inspect(e, this.inspectOpts).split("\n").map(e => e.trim()).join(" ")
    }, o.O = function(e) {
        return this.inspectOpts.colors = this.useColors, i.inspect(e, this.inspectOpts)
    }
}, function(e, t, n) {
    "use strict";
    const r = n(15),
        i = n(53),
        o = n(82),
        {
            env: s
        } = process;
    let a;

    function c(e) {
        return 0 !== e && {
            level: e,
            hasBasic: !0,
            has256: e >= 2,
            has16m: e >= 3
        }
    }

    function l(e, t) {
        if (0 === a) return 0;
        if (o("color=16m") || o("color=full") || o("color=truecolor")) return 3;
        if (o("color=256")) return 2;
        if (e && !t && void 0 === a) return 0;
        const n = a || 0;
        if ("dumb" === s.TERM) return n;
        if ("win32" === process.platform) {
            const e = r.release().split(".");
            return Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1
        }
        if ("CI" in s) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some(e => e in s) || "codeship" === s.CI_NAME ? 1 : n;
        if ("TEAMCITY_VERSION" in s) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION) ? 1 : 0;
        if ("truecolor" === s.COLORTERM) return 3;
        if ("TERM_PROGRAM" in s) {
            const e = parseInt((s.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch (s.TERM_PROGRAM) {
                case "iTerm.app":
                    return e >= 3 ? 3 : 2;
                case "Apple_Terminal":
                    return 2
            }
        }
        return /-256(color)?$/i.test(s.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM) || "COLORTERM" in s ? 1 : n
    }
    o("no-color") || o("no-colors") || o("color=false") || o("color=never") ? a = 0 : (o("color") || o("colors") || o("color=true") || o("color=always")) && (a = 1), "FORCE_COLOR" in s && (a = "true" === s.FORCE_COLOR ? 1 : "false" === s.FORCE_COLOR ? 0 : 0 === s.FORCE_COLOR.length ? 1 : Math.min(parseInt(s.FORCE_COLOR, 10), 3)), e.exports = {
        supportsColor: function(e) {
            return c(l(e, e && e.isTTY))
        },
        stdout: c(l(!0, i.isatty(1))),
        stderr: c(l(!0, i.isatty(2)))
    }
}, function(e, t, n) {
    "use strict";
    e.exports = (e, t = process.argv) => {
        const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
            r = t.indexOf(n + e),
            i = t.indexOf("--");
        return -1 !== r && (-1 === i || r < i)
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return null != t && t.length > 0 && (t.startsWith("/") || (e += "/"), e += t), e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getS3LikeProviderBaseUrl = t.githubUrl = void 0, t.githubUrl = function(e, t = "github.com") {
        return `${e.protocol||"https"}://${e.host||t}`
    }, t.getS3LikeProviderBaseUrl = function(e) {
        const t = e.provider;
        if ("s3" === t) return function(e) {
            let t;
            if (null != e.endpoint) t = `${e.endpoint}/${e.bucket}`;
            else if (e.bucket.includes(".")) {
                if (null == e.region) throw new Error(`Bucket name "${e.bucket}" includes a dot, but S3 region is missing`);
                t = "us-east-1" === e.region ? "https://s3.amazonaws.com/" + e.bucket : `https://s3-${e.region}.amazonaws.com/${e.bucket}`
            } else t = "cn-north-1" === e.region ? `https://${e.bucket}.s3.${e.region}.amazonaws.com.cn` : `https://${e.bucket}.s3.amazonaws.com`;
            return r(t, e.path)
        }(e);
        if ("spaces" === t) return function(e) {
            if (null == e.name) throw new Error("name is missing");
            if (null == e.region) throw new Error("region is missing");
            return r(`https://${e.name}.${e.region}.digitaloceanspaces.com`, e.path)
        }(e);
        throw new Error("Not supported provider: " + t)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.parseDn = void 0, t.parseDn = function(e) {
        let t = !1,
            n = null,
            r = "",
            i = 0;
        e = e.trim();
        const o = new Map;
        for (let s = 0; s <= e.length; s++) {
            if (s === e.length) {
                null !== n && o.set(n, r);
                break
            }
            const a = e[s];
            if (t) {
                if ('"' === a) {
                    t = !1;
                    continue
                }
            } else {
                if ('"' === a) {
                    t = !0;
                    continue
                }
                if ("\\" === a) {
                    s++;
                    const t = parseInt(e.slice(s, s + 2), 16);
                    Number.isNaN(t) ? r += e[s] : (s++, r += String.fromCharCode(t));
                    continue
                }
                if (null === n && "=" === a) {
                    n = r, r = "";
                    continue
                }
                if ("," === a || ";" === a || "+" === a) {
                    null !== n && o.set(n, r), n = null, r = "";
                    continue
                }
            }
            if (" " === a && !t) {
                if (0 === r.length) continue;
                if (s > i) {
                    let t = s;
                    for (;
                        " " === e[t];) t++;
                    i = t
                }
                if (i >= e.length || "," === e[i] || ";" === e[i] || null === n && "=" === e[i] || null !== n && "+" === e[i]) {
                    s = i - 1;
                    continue
                }
            }
            r += a
        }
        return o
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.nil = t.UUID = void 0;
    const r = n(24),
        i = n(1),
        o = r.randomBytes(16);
    o[0] = 1 | o[0];
    const s = {},
        a = [];
    for (let e = 0; e < 256; e++) {
        const t = (e + 256).toString(16).substr(1);
        s[t] = e, a[e] = t
    }
    class c {
        constructor(e) {
            this.ascii = null, this.binary = null;
            const t = c.check(e);
            if (!t) throw new Error("not a UUID");
            this.version = t.version, "ascii" === t.format ? this.ascii = e : this.binary = e
        }
        static v5(e, t) {
            return function(e, t, n, o, s = u.ASCII) {
                const l = r.createHash(t);
                if ("string" != typeof e && !Buffer.isBuffer(e)) throw i.newError("options.name must be either a string or a Buffer", "ERR_INVALID_UUID_NAME");
                l.update(o), l.update(e);
                const p = l.digest();
                let d;
                switch (s) {
                    case u.BINARY:
                        p[6] = 15 & p[6] | n, p[8] = 63 & p[8] | 128, d = p;
                        break;
                    case u.OBJECT:
                        p[6] = 15 & p[6] | n, p[8] = 63 & p[8] | 128, d = new c(p);
                        break;
                    default:
                        d = a[p[0]] + a[p[1]] + a[p[2]] + a[p[3]] + "-" + a[p[4]] + a[p[5]] + "-" + a[15 & p[6] | n] + a[p[7]] + "-" + a[63 & p[8] | 128] + a[p[9]] + "-" + a[p[10]] + a[p[11]] + a[p[12]] + a[p[13]] + a[p[14]] + a[p[15]]
                }
                return d
            }(e, "sha1", 80, t)
        }
        toString() {
            return null == this.ascii && (this.ascii = function(e) {
                return a[e[0]] + a[e[1]] + a[e[2]] + a[e[3]] + "-" + a[e[4]] + a[e[5]] + "-" + a[e[6]] + a[e[7]] + "-" + a[e[8]] + a[e[9]] + "-" + a[e[10]] + a[e[11]] + a[e[12]] + a[e[13]] + a[e[14]] + a[e[15]]
            }(this.binary)), this.ascii
        }
        inspect() {
            return `UUID v${this.version} ${this.toString()}`
        }
        static check(e, t = 0) {
            if ("string" == typeof e) return e = e.toLowerCase(), !!/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-([a-f0-9]{12})$/.test(e) && ("00000000-0000-0000-0000-000000000000" === e ? {
                version: void 0,
                variant: "nil",
                format: "ascii"
            } : {
                version: (240 & s[e[14] + e[15]]) >> 4,
                variant: l((224 & s[e[19] + e[20]]) >> 5),
                format: "ascii"
            });
            if (Buffer.isBuffer(e)) {
                if (e.length < t + 16) return !1;
                let n = 0;
                for (; n < 16 && 0 === e[t + n]; n++);
                return 16 === n ? {
                    version: void 0,
                    variant: "nil",
                    format: "binary"
                } : {
                    version: (240 & e[t + 6]) >> 4,
                    variant: l((224 & e[t + 8]) >> 5),
                    format: "binary"
                }
            }
            throw i.newError("Unknown type of uuid", "ERR_UNKNOWN_UUID_TYPE")
        }
        static parse(e) {
            const t = Buffer.allocUnsafe(16);
            let n = 0;
            for (let r = 0; r < 16; r++) t[r] = s[e[n++] + e[n++]], 3 !== r && 5 !== r && 7 !== r && 9 !== r || (n += 1);
            return t
        }
    }

    function l(e) {
        switch (e) {
            case 0:
            case 1:
            case 3:
                return "ncs";
            case 4:
            case 5:
                return "rfc4122";
            case 6:
                return "microsoft";
            default:
                return "future"
        }
    }
    var u;
    t.UUID = c, c.OID = c.parse("6ba7b812-9dad-11d1-80b4-00c04fd430c8"),
        function(e) {
            e[e.ASCII = 0] = "ASCII", e[e.BINARY = 1] = "BINARY", e[e.OBJECT = 2] = "OBJECT"
        }(u || (u = {})), t.nil = new c("00000000-0000-0000-0000-000000000000")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.parseXml = t.XElement = void 0;
    const r = n(87),
        i = n(1);
    class o {
        constructor(e) {
            if (this.name = e, this.value = "", this.attributes = null, this.isCData = !1, this.elements = null, !e) throw i.newError("Element name cannot be empty", "ERR_XML_ELEMENT_NAME_EMPTY");
            if (! function(e) {
                    return s.test(e)
                }(e)) throw i.newError("Invalid element name: " + e, "ERR_XML_ELEMENT_INVALID_NAME")
        }
        attribute(e) {
            const t = null === this.attributes ? null : this.attributes[e];
            if (null == t) throw i.newError(`No attribute "${e}"`, "ERR_XML_MISSED_ATTRIBUTE");
            return t
        }
        removeAttribute(e) {
            null !== this.attributes && delete this.attributes[e]
        }
        element(e, t = !1, n = null) {
            const r = this.elementOrNull(e, t);
            if (null === r) throw i.newError(n || `No element "${e}"`, "ERR_XML_MISSED_ELEMENT");
            return r
        }
        elementOrNull(e, t = !1) {
            if (null === this.elements) return null;
            for (const n of this.elements)
                if (a(n, e, t)) return n;
            return null
        }
        getElements(e, t = !1) {
            return null === this.elements ? [] : this.elements.filter(n => a(n, e, t))
        }
        elementValueOrEmpty(e, t = !1) {
            const n = this.elementOrNull(e, t);
            return null === n ? "" : n.value
        }
    }
    t.XElement = o;
    const s = new RegExp(/^[A-Za-z_][:A-Za-z0-9_-]*$/i);

    function a(e, t, n) {
        const r = e.name;
        return r === t || !0 === n && r.length === t.length && r.toLowerCase() === t.toLowerCase()
    }
    t.parseXml = function(e) {
        let t = null;
        const n = r.parser(!0, {}),
            i = [];
        return n.onopentag = e => {
            const n = new o(e.name);
            if (n.attributes = e.attributes, null === t) t = n;
            else {
                const e = i[i.length - 1];
                null == e.elements && (e.elements = []), e.elements.push(n)
            }
            i.push(n)
        }, n.onclosetag = () => {
            i.pop()
        }, n.ontext = e => {
            i.length > 0 && (i[i.length - 1].value = e)
        }, n.oncdata = e => {
            const t = i[i.length - 1];
            t.value = e, t.isCData = !0
        }, n.onerror = e => {
            throw e
        }, n.write(e), t
    }
}, function(e, t, n) {
    ! function(e) {
        e.parser = function(e, t) {
            return new i(e, t)
        }, e.SAXParser = i, e.SAXStream = s, e.createStream = function(e, t) {
            return new s(e, t)
        }, e.MAX_BUFFER_LENGTH = 65536;
        var t, r = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];

        function i(t, n) {
            if (!(this instanceof i)) return new i(t, n);
            ! function(e) {
                for (var t = 0, n = r.length; t < n; t++) e[r[t]] = ""
            }(this), this.q = this.c = "", this.bufferCheckPosition = e.MAX_BUFFER_LENGTH, this.opt = n || {}, this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags, this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase", this.tags = [], this.closed = this.closedRoot = this.sawRoot = !1, this.tag = this.error = null, this.strict = !!t, this.noscript = !(!t && !this.opt.noscript), this.state = b.BEGIN, this.strictEntities = this.opt.strictEntities, this.ENTITIES = this.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), this.attribList = [], this.opt.xmlns && (this.ns = Object.create(c)), this.trackPosition = !1 !== this.opt.position, this.trackPosition && (this.position = this.line = this.column = 0), C(this, "onready")
        }
        e.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"], Object.create || (Object.create = function(e) {
            function t() {}
            return t.prototype = e, new t
        }), Object.keys || (Object.keys = function(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t
        }), i.prototype = {
            end: function() {
                N(this)
            },
            write: function(t) {
                if (this.error) throw this.error;
                if (this.closed) return O(this, "Cannot write after close. Assign an onready handler.");
                if (null === t) return N(this);
                "object" == typeof t && (t = t.toString());
                for (var n = 0, i = ""; i = L(t, n++), this.c = i, i;) switch (this.trackPosition && (this.position++, "\n" === i ? (this.line++, this.column = 0) : this.column++), this.state) {
                    case b.BEGIN:
                        if (this.state = b.BEGIN_WHITESPACE, "\ufeff" === i) continue;
                        U(this, i);
                        continue;
                    case b.BEGIN_WHITESPACE:
                        U(this, i);
                        continue;
                    case b.TEXT:
                        if (this.sawRoot && !this.closedRoot) {
                            for (var o = n - 1; i && "<" !== i && "&" !== i;)(i = L(t, n++)) && this.trackPosition && (this.position++, "\n" === i ? (this.line++, this.column = 0) : this.column++);
                            this.textNode += t.substring(o, n - 1)
                        }
                        "<" !== i || this.sawRoot && this.closedRoot && !this.strict ? (h(i) || this.sawRoot && !this.closedRoot || D(this, "Text data outside of root node."), "&" === i ? this.state = b.TEXT_ENTITY : this.textNode += i) : (this.state = b.OPEN_WAKA, this.startTagPosition = this.position);
                        continue;
                    case b.SCRIPT:
                        "<" === i ? this.state = b.SCRIPT_ENDING : this.script += i;
                        continue;
                    case b.SCRIPT_ENDING:
                        "/" === i ? this.state = b.CLOSE_TAG : (this.script += "<" + i, this.state = b.SCRIPT);
                        continue;
                    case b.OPEN_WAKA:
                        if ("!" === i) this.state = b.SGML_DECL, this.sgmlDecl = "";
                        else if (h(i));
                        else if (m(l, i)) this.state = b.OPEN_TAG, this.tagName = i;
                        else if ("/" === i) this.state = b.CLOSE_TAG, this.tagName = "";
                        else if ("?" === i) this.state = b.PROC_INST, this.procInstName = this.procInstBody = "";
                        else {
                            if (D(this, "Unencoded <"), this.startTagPosition + 1 < this.position) {
                                var s = this.position - this.startTagPosition;
                                i = new Array(s).join(" ") + i
                            }
                            this.textNode += "<" + i, this.state = b.TEXT
                        }
                        continue;
                    case b.SGML_DECL:
                        "[CDATA[" === (this.sgmlDecl + i).toUpperCase() ? (T(this, "onopencdata"), this.state = b.CDATA, this.sgmlDecl = "", this.cdata = "") : this.sgmlDecl + i === "--" ? (this.state = b.COMMENT, this.comment = "", this.sgmlDecl = "") : "DOCTYPE" === (this.sgmlDecl + i).toUpperCase() ? (this.state = b.DOCTYPE, (this.doctype || this.sawRoot) && D(this, "Inappropriately located doctype declaration"), this.doctype = "", this.sgmlDecl = "") : ">" === i ? (T(this, "onsgmldeclaration", this.sgmlDecl), this.sgmlDecl = "", this.state = b.TEXT) : f(i) ? (this.state = b.SGML_DECL_QUOTED, this.sgmlDecl += i) : this.sgmlDecl += i;
                        continue;
                    case b.SGML_DECL_QUOTED:
                        i === this.q && (this.state = b.SGML_DECL, this.q = ""), this.sgmlDecl += i;
                        continue;
                    case b.DOCTYPE:
                        ">" === i ? (this.state = b.TEXT, T(this, "ondoctype", this.doctype), this.doctype = !0) : (this.doctype += i, "[" === i ? this.state = b.DOCTYPE_DTD : f(i) && (this.state = b.DOCTYPE_QUOTED, this.q = i));
                        continue;
                    case b.DOCTYPE_QUOTED:
                        this.doctype += i, i === this.q && (this.q = "", this.state = b.DOCTYPE);
                        continue;
                    case b.DOCTYPE_DTD:
                        this.doctype += i, "]" === i ? this.state = b.DOCTYPE : f(i) && (this.state = b.DOCTYPE_DTD_QUOTED, this.q = i);
                        continue;
                    case b.DOCTYPE_DTD_QUOTED:
                        this.doctype += i, i === this.q && (this.state = b.DOCTYPE_DTD, this.q = "");
                        continue;
                    case b.COMMENT:
                        "-" === i ? this.state = b.COMMENT_ENDING : this.comment += i;
                        continue;
                    case b.COMMENT_ENDING:
                        "-" === i ? (this.state = b.COMMENT_ENDED, this.comment = I(this.opt, this.comment), this.comment && T(this, "oncomment", this.comment), this.comment = "") : (this.comment += "-" + i, this.state = b.COMMENT);
                        continue;
                    case b.COMMENT_ENDED:
                        ">" !== i ? (D(this, "Malformed comment"), this.comment += "--" + i, this.state = b.COMMENT) : this.state = b.TEXT;
                        continue;
                    case b.CDATA:
                        "]" === i ? this.state = b.CDATA_ENDING : this.cdata += i;
                        continue;
                    case b.CDATA_ENDING:
                        "]" === i ? this.state = b.CDATA_ENDING_2 : (this.cdata += "]" + i, this.state = b.CDATA);
                        continue;
                    case b.CDATA_ENDING_2:
                        ">" === i ? (this.cdata && T(this, "oncdata", this.cdata), T(this, "onclosecdata"), this.cdata = "", this.state = b.TEXT) : "]" === i ? this.cdata += "]" : (this.cdata += "]]" + i, this.state = b.CDATA);
                        continue;
                    case b.PROC_INST:
                        "?" === i ? this.state = b.PROC_INST_ENDING : h(i) ? this.state = b.PROC_INST_BODY : this.procInstName += i;
                        continue;
                    case b.PROC_INST_BODY:
                        if (!this.procInstBody && h(i)) continue;
                        "?" === i ? this.state = b.PROC_INST_ENDING : this.procInstBody += i;
                        continue;
                    case b.PROC_INST_ENDING:
                        ">" === i ? (T(this, "onprocessinginstruction", {
                            name: this.procInstName,
                            body: this.procInstBody
                        }), this.procInstName = this.procInstBody = "", this.state = b.TEXT) : (this.procInstBody += "?" + i, this.state = b.PROC_INST_BODY);
                        continue;
                    case b.OPEN_TAG:
                        m(u, i) ? this.tagName += i : (R(this), ">" === i ? k(this) : "/" === i ? this.state = b.OPEN_TAG_SLASH : (h(i) || D(this, "Invalid character in tag name"), this.state = b.ATTRIB));
                        continue;
                    case b.OPEN_TAG_SLASH:
                        ">" === i ? (k(this, !0), _(this)) : (D(this, "Forward-slash in opening tag not followed by >"), this.state = b.ATTRIB);
                        continue;
                    case b.ATTRIB:
                        if (h(i)) continue;
                        ">" === i ? k(this) : "/" === i ? this.state = b.OPEN_TAG_SLASH : m(l, i) ? (this.attribName = i, this.attribValue = "", this.state = b.ATTRIB_NAME) : D(this, "Invalid attribute name");
                        continue;
                    case b.ATTRIB_NAME:
                        "=" === i ? this.state = b.ATTRIB_VALUE : ">" === i ? (D(this, "Attribute without value"), this.attribValue = this.attribName, x(this), k(this)) : h(i) ? this.state = b.ATTRIB_NAME_SAW_WHITE : m(u, i) ? this.attribName += i : D(this, "Invalid attribute name");
                        continue;
                    case b.ATTRIB_NAME_SAW_WHITE:
                        if ("=" === i) this.state = b.ATTRIB_VALUE;
                        else {
                            if (h(i)) continue;
                            D(this, "Attribute without value"), this.tag.attributes[this.attribName] = "", this.attribValue = "", T(this, "onattribute", {
                                name: this.attribName,
                                value: ""
                            }), this.attribName = "", ">" === i ? k(this) : m(l, i) ? (this.attribName = i, this.state = b.ATTRIB_NAME) : (D(this, "Invalid attribute name"), this.state = b.ATTRIB)
                        }
                        continue;
                    case b.ATTRIB_VALUE:
                        if (h(i)) continue;
                        f(i) ? (this.q = i, this.state = b.ATTRIB_VALUE_QUOTED) : (D(this, "Unquoted attribute value"), this.state = b.ATTRIB_VALUE_UNQUOTED, this.attribValue = i);
                        continue;
                    case b.ATTRIB_VALUE_QUOTED:
                        if (i !== this.q) {
                            "&" === i ? this.state = b.ATTRIB_VALUE_ENTITY_Q : this.attribValue += i;
                            continue
                        }
                        x(this), this.q = "", this.state = b.ATTRIB_VALUE_CLOSED;
                        continue;
                    case b.ATTRIB_VALUE_CLOSED:
                        h(i) ? this.state = b.ATTRIB : ">" === i ? k(this) : "/" === i ? this.state = b.OPEN_TAG_SLASH : m(l, i) ? (D(this, "No whitespace between attributes"), this.attribName = i, this.attribValue = "", this.state = b.ATTRIB_NAME) : D(this, "Invalid attribute name");
                        continue;
                    case b.ATTRIB_VALUE_UNQUOTED:
                        if (!g(i)) {
                            "&" === i ? this.state = b.ATTRIB_VALUE_ENTITY_U : this.attribValue += i;
                            continue
                        }
                        x(this), ">" === i ? k(this) : this.state = b.ATTRIB;
                        continue;
                    case b.CLOSE_TAG:
                        if (this.tagName) ">" === i ? _(this) : m(u, i) ? this.tagName += i : this.script ? (this.script += "</" + this.tagName, this.tagName = "", this.state = b.SCRIPT) : (h(i) || D(this, "Invalid tagname in closing tag"), this.state = b.CLOSE_TAG_SAW_WHITE);
                        else {
                            if (h(i)) continue;
                            v(l, i) ? this.script ? (this.script += "</" + i, this.state = b.SCRIPT) : D(this, "Invalid tagname in closing tag.") : this.tagName = i
                        }
                        continue;
                    case b.CLOSE_TAG_SAW_WHITE:
                        if (h(i)) continue;
                        ">" === i ? _(this) : D(this, "Invalid characters in closing tag");
                        continue;
                    case b.TEXT_ENTITY:
                    case b.ATTRIB_VALUE_ENTITY_Q:
                    case b.ATTRIB_VALUE_ENTITY_U:
                        var a, c;
                        switch (this.state) {
                            case b.TEXT_ENTITY:
                                a = b.TEXT, c = "textNode";
                                break;
                            case b.ATTRIB_VALUE_ENTITY_Q:
                                a = b.ATTRIB_VALUE_QUOTED, c = "attribValue";
                                break;
                            case b.ATTRIB_VALUE_ENTITY_U:
                                a = b.ATTRIB_VALUE_UNQUOTED, c = "attribValue"
                        }
                        ";" === i ? (this[c] += F(this), this.entity = "", this.state = a) : m(this.entity.length ? d : p, i) ? this.entity += i : (D(this, "Invalid character in entity name"), this[c] += "&" + this.entity + i, this.entity = "", this.state = a);
                        continue;
                    default:
                        throw new Error(this, "Unknown state: " + this.state)
                }
                return this.position >= this.bufferCheckPosition && function(t) {
                    for (var n = Math.max(e.MAX_BUFFER_LENGTH, 10), i = 0, o = 0, s = r.length; o < s; o++) {
                        var a = t[r[o]].length;
                        if (a > n) switch (r[o]) {
                            case "textNode":
                                S(t);
                                break;
                            case "cdata":
                                T(t, "oncdata", t.cdata), t.cdata = "";
                                break;
                            case "script":
                                T(t, "onscript", t.script), t.script = "";
                                break;
                            default:
                                O(t, "Max buffer length exceeded: " + r[o])
                        }
                        i = Math.max(i, a)
                    }
                    var c = e.MAX_BUFFER_LENGTH - i;
                    t.bufferCheckPosition = c + t.position
                }(this), this
            },
            resume: function() {
                return this.error = null, this
            },
            close: function() {
                return this.write(null)
            },
            flush: function() {
                ! function(e) {
                    S(e), "" !== e.cdata && (T(e, "oncdata", e.cdata), e.cdata = ""), "" !== e.script && (T(e, "onscript", e.script), e.script = "")
                }(this)
            }
        };
        try {
            t = n(16).Stream
        } catch (e) {
            t = function() {}
        }
        var o = e.EVENTS.filter((function(e) {
            return "error" !== e && "end" !== e
        }));

        function s(e, n) {
            if (!(this instanceof s)) return new s(e, n);
            t.apply(this), this._parser = new i(e, n), this.writable = !0, this.readable = !0;
            var r = this;
            this._parser.onend = function() {
                r.emit("end")
            }, this._parser.onerror = function(e) {
                r.emit("error", e), r._parser.error = null
            }, this._decoder = null, o.forEach((function(e) {
                Object.defineProperty(r, "on" + e, {
                    get: function() {
                        return r._parser["on" + e]
                    },
                    set: function(t) {
                        if (!t) return r.removeAllListeners(e), r._parser["on" + e] = t, t;
                        r.on(e, t)
                    },
                    enumerable: !0,
                    configurable: !1
                })
            }))
        }
        s.prototype = Object.create(t.prototype, {
            constructor: {
                value: s
            }
        }), s.prototype.write = function(e) {
            if ("function" == typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e)) {
                if (!this._decoder) {
                    var t = n(88).StringDecoder;
                    this._decoder = new t("utf8")
                }
                e = this._decoder.write(e)
            }
            return this._parser.write(e.toString()), this.emit("data", e), !0
        }, s.prototype.end = function(e) {
            return e && e.length && this.write(e), this._parser.end(), !0
        }, s.prototype.on = function(e, n) {
            var r = this;
            return r._parser["on" + e] || -1 === o.indexOf(e) || (r._parser["on" + e] = function() {
                var t = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                t.splice(0, 0, e), r.emit.apply(r, t)
            }), t.prototype.on.call(r, e, n)
        };
        var a = "http://www.w3.org/XML/1998/namespace",
            c = {
                xml: a,
                xmlns: "http://www.w3.org/2000/xmlns/"
            },
            l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
            u = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
            p = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
            d = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

        function h(e) {
            return " " === e || "\n" === e || "\r" === e || "\t" === e
        }

        function f(e) {
            return '"' === e || "'" === e
        }

        function g(e) {
            return ">" === e || h(e)
        }

        function m(e, t) {
            return e.test(t)
        }

        function v(e, t) {
            return !m(e, t)
        }
        var y, w, E, b = 0;
        for (var A in e.STATE = {
                BEGIN: b++,
                BEGIN_WHITESPACE: b++,
                TEXT: b++,
                TEXT_ENTITY: b++,
                OPEN_WAKA: b++,
                SGML_DECL: b++,
                SGML_DECL_QUOTED: b++,
                DOCTYPE: b++,
                DOCTYPE_QUOTED: b++,
                DOCTYPE_DTD: b++,
                DOCTYPE_DTD_QUOTED: b++,
                COMMENT_STARTING: b++,
                COMMENT: b++,
                COMMENT_ENDING: b++,
                COMMENT_ENDED: b++,
                CDATA: b++,
                CDATA_ENDING: b++,
                CDATA_ENDING_2: b++,
                PROC_INST: b++,
                PROC_INST_BODY: b++,
                PROC_INST_ENDING: b++,
                OPEN_TAG: b++,
                OPEN_TAG_SLASH: b++,
                ATTRIB: b++,
                ATTRIB_NAME: b++,
                ATTRIB_NAME_SAW_WHITE: b++,
                ATTRIB_VALUE: b++,
                ATTRIB_VALUE_QUOTED: b++,
                ATTRIB_VALUE_CLOSED: b++,
                ATTRIB_VALUE_UNQUOTED: b++,
                ATTRIB_VALUE_ENTITY_Q: b++,
                ATTRIB_VALUE_ENTITY_U: b++,
                CLOSE_TAG: b++,
                CLOSE_TAG_SAW_WHITE: b++,
                SCRIPT: b++,
                SCRIPT_ENDING: b++
            }, e.XML_ENTITIES = {
                amp: "&",
                gt: ">",
                lt: "<",
                quot: '"',
                apos: "'"
            }, e.ENTITIES = {
                amp: "&",
                gt: ">",
                lt: "<",
                quot: '"',
                apos: "'",
                AElig: 198,
                Aacute: 193,
                Acirc: 194,
                Agrave: 192,
                Aring: 197,
                Atilde: 195,
                Auml: 196,
                Ccedil: 199,
                ETH: 208,
                Eacute: 201,
                Ecirc: 202,
                Egrave: 200,
                Euml: 203,
                Iacute: 205,
                Icirc: 206,
                Igrave: 204,
                Iuml: 207,
                Ntilde: 209,
                Oacute: 211,
                Ocirc: 212,
                Ograve: 210,
                Oslash: 216,
                Otilde: 213,
                Ouml: 214,
                THORN: 222,
                Uacute: 218,
                Ucirc: 219,
                Ugrave: 217,
                Uuml: 220,
                Yacute: 221,
                aacute: 225,
                acirc: 226,
                aelig: 230,
                agrave: 224,
                aring: 229,
                atilde: 227,
                auml: 228,
                ccedil: 231,
                eacute: 233,
                ecirc: 234,
                egrave: 232,
                eth: 240,
                euml: 235,
                iacute: 237,
                icirc: 238,
                igrave: 236,
                iuml: 239,
                ntilde: 241,
                oacute: 243,
                ocirc: 244,
                ograve: 242,
                oslash: 248,
                otilde: 245,
                ouml: 246,
                szlig: 223,
                thorn: 254,
                uacute: 250,
                ucirc: 251,
                ugrave: 249,
                uuml: 252,
                yacute: 253,
                yuml: 255,
                copy: 169,
                reg: 174,
                nbsp: 160,
                iexcl: 161,
                cent: 162,
                pound: 163,
                curren: 164,
                yen: 165,
                brvbar: 166,
                sect: 167,
                uml: 168,
                ordf: 170,
                laquo: 171,
                not: 172,
                shy: 173,
                macr: 175,
                deg: 176,
                plusmn: 177,
                sup1: 185,
                sup2: 178,
                sup3: 179,
                acute: 180,
                micro: 181,
                para: 182,
                middot: 183,
                cedil: 184,
                ordm: 186,
                raquo: 187,
                frac14: 188,
                frac12: 189,
                frac34: 190,
                iquest: 191,
                times: 215,
                divide: 247,
                OElig: 338,
                oelig: 339,
                Scaron: 352,
                scaron: 353,
                Yuml: 376,
                fnof: 402,
                circ: 710,
                tilde: 732,
                Alpha: 913,
                Beta: 914,
                Gamma: 915,
                Delta: 916,
                Epsilon: 917,
                Zeta: 918,
                Eta: 919,
                Theta: 920,
                Iota: 921,
                Kappa: 922,
                Lambda: 923,
                Mu: 924,
                Nu: 925,
                Xi: 926,
                Omicron: 927,
                Pi: 928,
                Rho: 929,
                Sigma: 931,
                Tau: 932,
                Upsilon: 933,
                Phi: 934,
                Chi: 935,
                Psi: 936,
                Omega: 937,
                alpha: 945,
                beta: 946,
                gamma: 947,
                delta: 948,
                epsilon: 949,
                zeta: 950,
                eta: 951,
                theta: 952,
                iota: 953,
                kappa: 954,
                lambda: 955,
                mu: 956,
                nu: 957,
                xi: 958,
                omicron: 959,
                pi: 960,
                rho: 961,
                sigmaf: 962,
                sigma: 963,
                tau: 964,
                upsilon: 965,
                phi: 966,
                chi: 967,
                psi: 968,
                omega: 969,
                thetasym: 977,
                upsih: 978,
                piv: 982,
                ensp: 8194,
                emsp: 8195,
                thinsp: 8201,
                zwnj: 8204,
                zwj: 8205,
                lrm: 8206,
                rlm: 8207,
                ndash: 8211,
                mdash: 8212,
                lsquo: 8216,
                rsquo: 8217,
                sbquo: 8218,
                ldquo: 8220,
                rdquo: 8221,
                bdquo: 8222,
                dagger: 8224,
                Dagger: 8225,
                bull: 8226,
                hellip: 8230,
                permil: 8240,
                prime: 8242,
                Prime: 8243,
                lsaquo: 8249,
                rsaquo: 8250,
                oline: 8254,
                frasl: 8260,
                euro: 8364,
                image: 8465,
                weierp: 8472,
                real: 8476,
                trade: 8482,
                alefsym: 8501,
                larr: 8592,
                uarr: 8593,
                rarr: 8594,
                darr: 8595,
                harr: 8596,
                crarr: 8629,
                lArr: 8656,
                uArr: 8657,
                rArr: 8658,
                dArr: 8659,
                hArr: 8660,
                forall: 8704,
                part: 8706,
                exist: 8707,
                empty: 8709,
                nabla: 8711,
                isin: 8712,
                notin: 8713,
                ni: 8715,
                prod: 8719,
                sum: 8721,
                minus: 8722,
                lowast: 8727,
                radic: 8730,
                prop: 8733,
                infin: 8734,
                ang: 8736,
                and: 8743,
                or: 8744,
                cap: 8745,
                cup: 8746,
                int: 8747,
                there4: 8756,
                sim: 8764,
                cong: 8773,
                asymp: 8776,
                ne: 8800,
                equiv: 8801,
                le: 8804,
                ge: 8805,
                sub: 8834,
                sup: 8835,
                nsub: 8836,
                sube: 8838,
                supe: 8839,
                oplus: 8853,
                otimes: 8855,
                perp: 8869,
                sdot: 8901,
                lceil: 8968,
                rceil: 8969,
                lfloor: 8970,
                rfloor: 8971,
                lang: 9001,
                rang: 9002,
                loz: 9674,
                spades: 9824,
                clubs: 9827,
                hearts: 9829,
                diams: 9830
            }, Object.keys(e.ENTITIES).forEach((function(t) {
                var n = e.ENTITIES[t],
                    r = "number" == typeof n ? String.fromCharCode(n) : n;
                e.ENTITIES[t] = r
            })), e.STATE) e.STATE[e.STATE[A]] = A;

        function C(e, t, n) {
            e[t] && e[t](n)
        }

        function T(e, t, n) {
            e.textNode && S(e), C(e, t, n)
        }

        function S(e) {
            e.textNode = I(e.opt, e.textNode), e.textNode && C(e, "ontext", e.textNode), e.textNode = ""
        }

        function I(e, t) {
            return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t
        }

        function O(e, t) {
            return S(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = new Error(t), e.error = t, C(e, "onerror", t), e
        }

        function N(e) {
            return e.sawRoot && !e.closedRoot && D(e, "Unclosed root tag"), e.state !== b.BEGIN && e.state !== b.BEGIN_WHITESPACE && e.state !== b.TEXT && O(e, "Unexpected end"), S(e), e.c = "", e.closed = !0, C(e, "onend"), i.call(e, e.strict, e.opt), e
        }

        function D(e, t) {
            if ("object" != typeof e || !(e instanceof i)) throw new Error("bad call to strictFail");
            e.strict && O(e, t)
        }

        function R(e) {
            e.strict || (e.tagName = e.tagName[e.looseCase]());
            var t = e.tags[e.tags.length - 1] || e,
                n = e.tag = {
                    name: e.tagName,
                    attributes: {}
                };
            e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, T(e, "onopentagstart", n)
        }

        function P(e, t) {
            var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"),
                r = n[0],
                i = n[1];
            return t && "xmlns" === e && (r = "xmlns", i = ""), {
                prefix: r,
                local: i
            }
        }

        function x(e) {
            if (e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName)) e.attribName = e.attribValue = "";
            else {
                if (e.opt.xmlns) {
                    var t = P(e.attribName, !0),
                        n = t.prefix,
                        r = t.local;
                    if ("xmlns" === n)
                        if ("xml" === r && e.attribValue !== a) D(e, "xml: prefix must be bound to " + a + "\nActual: " + e.attribValue);
                        else if ("xmlns" === r && "http://www.w3.org/2000/xmlns/" !== e.attribValue) D(e, "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " + e.attribValue);
                    else {
                        var i = e.tag,
                            o = e.tags[e.tags.length - 1] || e;
                        i.ns === o.ns && (i.ns = Object.create(o.ns)), i.ns[r] = e.attribValue
                    }
                    e.attribList.push([e.attribName, e.attribValue])
                } else e.tag.attributes[e.attribName] = e.attribValue, T(e, "onattribute", {
                    name: e.attribName,
                    value: e.attribValue
                });
                e.attribName = e.attribValue = ""
            }
        }

        function k(e, t) {
            if (e.opt.xmlns) {
                var n = e.tag,
                    r = P(e.tagName);
                n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (D(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), n.uri = r.prefix);
                var i = e.tags[e.tags.length - 1] || e;
                n.ns && i.ns !== n.ns && Object.keys(n.ns).forEach((function(t) {
                    T(e, "onopennamespace", {
                        prefix: t,
                        uri: n.ns[t]
                    })
                }));
                for (var o = 0, s = e.attribList.length; o < s; o++) {
                    var a = e.attribList[o],
                        c = a[0],
                        l = a[1],
                        u = P(c, !0),
                        p = u.prefix,
                        d = u.local,
                        h = "" === p ? "" : n.ns[p] || "",
                        f = {
                            name: c,
                            value: l,
                            prefix: p,
                            local: d,
                            uri: h
                        };
                    p && "xmlns" !== p && !h && (D(e, "Unbound namespace prefix: " + JSON.stringify(p)), f.uri = p), e.tag.attributes[c] = f, T(e, "onattribute", f)
                }
                e.attribList.length = 0
            }
            e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), T(e, "onopentag", e.tag), t || (e.noscript || "script" !== e.tagName.toLowerCase() ? e.state = b.TEXT : e.state = b.SCRIPT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0
        }

        function _(e) {
            if (!e.tagName) return D(e, "Weird empty close tag."), e.textNode += "</>", void(e.state = b.TEXT);
            if (e.script) {
                if ("script" !== e.tagName) return e.script += "</" + e.tagName + ">", e.tagName = "", void(e.state = b.SCRIPT);
                T(e, "onscript", e.script), e.script = ""
            }
            var t = e.tags.length,
                n = e.tagName;
            e.strict || (n = n[e.looseCase]());
            for (var r = n; t-- && e.tags[t].name !== r;) D(e, "Unexpected close tag");
            if (t < 0) return D(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", void(e.state = b.TEXT);
            e.tagName = n;
            for (var i = e.tags.length; i-- > t;) {
                var o = e.tag = e.tags.pop();
                e.tagName = e.tag.name, T(e, "onclosetag", e.tagName);
                var s = {};
                for (var a in o.ns) s[a] = o.ns[a];
                var c = e.tags[e.tags.length - 1] || e;
                e.opt.xmlns && o.ns !== c.ns && Object.keys(o.ns).forEach((function(t) {
                    var n = o.ns[t];
                    T(e, "onclosenamespace", {
                        prefix: t,
                        uri: n
                    })
                }))
            }
            0 === t && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = b.TEXT
        }

        function F(e) {
            var t, n = e.entity,
                r = n.toLowerCase(),
                i = "";
            return e.ENTITIES[n] ? e.ENTITIES[n] : e.ENTITIES[r] ? e.ENTITIES[r] : ("#" === (n = r).charAt(0) && ("x" === n.charAt(1) ? (n = n.slice(2), i = (t = parseInt(n, 16)).toString(16)) : (n = n.slice(1), i = (t = parseInt(n, 10)).toString(10))), n = n.replace(/^0+/, ""), isNaN(t) || i.toLowerCase() !== n ? (D(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(t))
        }

        function U(e, t) {
            "<" === t ? (e.state = b.OPEN_WAKA, e.startTagPosition = e.position) : h(t) || (D(e, "Non-whitespace before first tag."), e.textNode = t, e.state = b.TEXT)
        }

        function L(e, t) {
            var n = "";
            return t < e.length && (n = e.charAt(t)), n
        }
        b = e.STATE, String.fromCodePoint || (y = String.fromCharCode, w = Math.floor, E = function() {
            var e, t, n = 16384,
                r = [],
                i = -1,
                o = arguments.length;
            if (!o) return "";
            for (var s = ""; ++i < o;) {
                var a = Number(arguments[i]);
                if (!isFinite(a) || a < 0 || a > 1114111 || w(a) !== a) throw RangeError("Invalid code point: " + a);
                a <= 65535 ? r.push(a) : (e = 55296 + ((a -= 65536) >> 10), t = a % 1024 + 56320, r.push(e, t)), (i + 1 === o || r.length > n) && (s += y.apply(null, r), r.length = 0)
            }
            return s
        }, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
            value: E,
            configurable: !0,
            writable: !0
        }) : String.fromCodePoint = E)
    }(t)
}, function(e, t) {
    e.exports = require("string_decoder")
}, function(e, t, n) {
    var r = n(90),
        i = process.cwd,
        o = null,
        s = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
        return o || (o = i.call(process)), o
    };
    try {
        process.cwd()
    } catch (e) {}
    if ("function" == typeof process.chdir) {
        var a = process.chdir;
        process.chdir = function(e) {
            o = null, a.call(process, e)
        }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, a)
    }
    e.exports = function(e) {
        function t(t) {
            return t ? function(n, r, i) {
                return t.call(e, n, r, (function(e) {
                    l(e) && (e = null), i && i.apply(this, arguments)
                }))
            } : t
        }

        function n(t) {
            return t ? function(n, r) {
                try {
                    return t.call(e, n, r)
                } catch (e) {
                    if (!l(e)) throw e
                }
            } : t
        }

        function i(t) {
            return t ? function(n, r, i, o) {
                return t.call(e, n, r, i, (function(e) {
                    l(e) && (e = null), o && o.apply(this, arguments)
                }))
            } : t
        }

        function o(t) {
            return t ? function(n, r, i) {
                try {
                    return t.call(e, n, r, i)
                } catch (e) {
                    if (!l(e)) throw e
                }
            } : t
        }

        function a(t) {
            return t ? function(n, r, i) {
                function o(e, t) {
                    t && (t.uid < 0 && (t.uid += 4294967296), t.gid < 0 && (t.gid += 4294967296)), i && i.apply(this, arguments)
                }
                return "function" == typeof r && (i = r, r = null), r ? t.call(e, n, r, o) : t.call(e, n, o)
            } : t
        }

        function c(t) {
            return t ? function(n, r) {
                var i = r ? t.call(e, n, r) : t.call(e, n);
                return i && (i.uid < 0 && (i.uid += 4294967296), i.gid < 0 && (i.gid += 4294967296)), i
            } : t
        }

        function l(e) {
            return !e || "ENOSYS" === e.code || !(process.getuid && 0 === process.getuid() || "EINVAL" !== e.code && "EPERM" !== e.code)
        }
        var u;
        r.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function(e) {
            e.lchmod = function(t, n, i) {
                e.open(t, r.O_WRONLY | r.O_SYMLINK, n, (function(t, r) {
                    t ? i && i(t) : e.fchmod(r, n, (function(t) {
                        e.close(r, (function(e) {
                            i && i(t || e)
                        }))
                    }))
                }))
            }, e.lchmodSync = function(t, n) {
                var i, o = e.openSync(t, r.O_WRONLY | r.O_SYMLINK, n),
                    s = !0;
                try {
                    i = e.fchmodSync(o, n), s = !1
                } finally {
                    if (s) try {
                        e.closeSync(o)
                    } catch (e) {} else e.closeSync(o)
                }
                return i
            }
        }(e), e.lutimes || function(e) {
            r.hasOwnProperty("O_SYMLINK") && e.futimes ? (e.lutimes = function(t, n, i, o) {
                e.open(t, r.O_SYMLINK, (function(t, r) {
                    t ? o && o(t) : e.futimes(r, n, i, (function(t) {
                        e.close(r, (function(e) {
                            o && o(t || e)
                        }))
                    }))
                }))
            }, e.lutimesSync = function(t, n, i) {
                var o, s = e.openSync(t, r.O_SYMLINK),
                    a = !0;
                try {
                    o = e.futimesSync(s, n, i), a = !1
                } finally {
                    if (a) try {
                        e.closeSync(s)
                    } catch (e) {} else e.closeSync(s)
                }
                return o
            }) : e.futimes && (e.lutimes = function(e, t, n, r) {
                r && process.nextTick(r)
            }, e.lutimesSync = function() {})
        }(e), e.chown = i(e.chown), e.fchown = i(e.fchown), e.lchown = i(e.lchown), e.chmod = t(e.chmod), e.fchmod = t(e.fchmod), e.lchmod = t(e.lchmod), e.chownSync = o(e.chownSync), e.fchownSync = o(e.fchownSync), e.lchownSync = o(e.lchownSync), e.chmodSync = n(e.chmodSync), e.fchmodSync = n(e.fchmodSync), e.lchmodSync = n(e.lchmodSync), e.stat = a(e.stat), e.fstat = a(e.fstat), e.lstat = a(e.lstat), e.statSync = c(e.statSync), e.fstatSync = c(e.fstatSync), e.lstatSync = c(e.lstatSync), e.chmod && !e.lchmod && (e.lchmod = function(e, t, n) {
            n && process.nextTick(n)
        }, e.lchmodSync = function() {}), e.chown && !e.lchown && (e.lchown = function(e, t, n, r) {
            r && process.nextTick(r)
        }, e.lchownSync = function() {}), "win32" === s && (e.rename = "function" != typeof e.rename ? e.rename : function(t) {
            function n(n, r, i) {
                var o = Date.now(),
                    s = 0;
                t(n, r, (function a(c) {
                    if (c && ("EACCES" === c.code || "EPERM" === c.code || "EBUSY" === c.code) && Date.now() - o < 6e4) return setTimeout((function() {
                        e.stat(r, (function(e, o) {
                            e && "ENOENT" === e.code ? t(n, r, a) : i(c)
                        }))
                    }), s), void(s < 100 && (s += 10));
                    i && i(c)
                }))
            }
            return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n
        }(e.rename)), e.read = "function" != typeof e.read ? e.read : function(t) {
            function n(n, r, i, o, s, a) {
                var c;
                if (a && "function" == typeof a) {
                    var l = 0;
                    c = function(u, p, d) {
                        if (u && "EAGAIN" === u.code && l < 10) return l++, t.call(e, n, r, i, o, s, c);
                        a.apply(this, arguments)
                    }
                }
                return t.call(e, n, r, i, o, s, c)
            }
            return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n
        }(e.read), e.readSync = "function" != typeof e.readSync ? e.readSync : (u = e.readSync, function(t, n, r, i, o) {
            for (var s = 0;;) try {
                return u.call(e, t, n, r, i, o)
            } catch (e) {
                if ("EAGAIN" === e.code && s < 10) {
                    s++;
                    continue
                }
                throw e
            }
        })
    }
}, function(e, t) {
    e.exports = require("constants")
}, function(e, t, n) {
    var r = n(16).Stream;
    e.exports = function(e) {
        return {
            ReadStream: function t(n, i) {
                if (!(this instanceof t)) return new t(n, i);
                r.call(this);
                var o = this;
                this.path = n, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 65536, i = i || {};
                for (var s = Object.keys(i), a = 0, c = s.length; a < c; a++) {
                    var l = s[a];
                    this[l] = i[l]
                }
                if (this.encoding && this.setEncoding(this.encoding), void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");
                    if (void 0 === this.end) this.end = 1 / 0;
                    else if ("number" != typeof this.end) throw TypeError("end must be a Number");
                    if (this.start > this.end) throw new Error("start must be <= end");
                    this.pos = this.start
                }
                null === this.fd ? e.open(this.path, this.flags, this.mode, (function(e, t) {
                    if (e) return o.emit("error", e), void(o.readable = !1);
                    o.fd = t, o.emit("open", t), o._read()
                })) : process.nextTick((function() {
                    o._read()
                }))
            },
            WriteStream: function t(n, i) {
                if (!(this instanceof t)) return new t(n, i);
                r.call(this), this.path = n, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, i = i || {};
                for (var o = Object.keys(i), s = 0, a = o.length; s < a; s++) {
                    var c = o[s];
                    this[c] = i[c]
                }
                if (void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");
                    if (this.start < 0) throw new Error("start must be >= zero");
                    this.pos = this.start
                }
                this.busy = !1, this._queue = [], null === this.fd && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush())
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        if (null === e || "object" != typeof e) return e;
        if (e instanceof Object) var t = {
            __proto__: r(e)
        };
        else t = Object.create(null);
        return Object.getOwnPropertyNames(e).forEach((function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
        })), t
    };
    var r = Object.getPrototypeOf || function(e) {
        return e.__proto__
    }
}, function(e, t, n) {
    "use strict";
    const r = n(4),
        i = n(0),
        o = n(9).mkdirs,
        s = n(14).pathExists,
        a = n(56).utimesMillis,
        c = n(18);

    function l(e, t, n, r, a) {
        const c = i.dirname(n);
        s(c, (i, s) => i ? a(i) : s ? p(e, t, n, r, a) : void o(c, i => i ? a(i) : p(e, t, n, r, a)))
    }

    function u(e, t, n, r, i, o) {
        Promise.resolve(i.filter(n, r)).then(s => s ? e(t, n, r, i, o) : o(), e => o(e))
    }

    function p(e, t, n, i, o) {
        (i.dereference ? r.stat : r.lstat)(t, (s, a) => s ? o(s) : a.isDirectory() ? function(e, t, n, i, o, s) {
            return t ? g(n, i, o, s) : function(e, t, n, i, o) {
                r.mkdir(n, r => {
                    if (r) return o(r);
                    g(t, n, i, t => t ? o(t) : f(n, e, o))
                })
            }(e.mode, n, i, o, s)
        }(a, e, t, n, i, o) : a.isFile() || a.isCharacterDevice() || a.isBlockDevice() ? function(e, t, n, i, o, s) {
            return t ? function(e, t, n, i, o) {
                if (!i.overwrite) return i.errorOnExist ? o(new Error(`'${n}' already exists`)) : o();
                r.unlink(n, r => r ? o(r) : d(e, t, n, i, o))
            }(e, n, i, o, s) : d(e, n, i, o, s)
        }(a, e, t, n, i, o) : a.isSymbolicLink() ? v(e, t, n, i, o) : a.isSocket() ? o(new Error("Cannot copy a socket file: " + t)) : a.isFIFO() ? o(new Error("Cannot copy a FIFO pipe: " + t)) : o(new Error("Unknown file: " + t)))
    }

    function d(e, t, n, i, o) {
        r.copyFile(t, n, r => r ? o(r) : i.preserveTimestamps ? function(e, t, n, r) {
            return function(e) {
                return 0 == (128 & e)
            }(e) ? function(e, t, n) {
                return f(e, 128 | t, n)
            }(n, e, i => i ? r(i) : h(e, t, n, r)) : h(e, t, n, r)
        }(e.mode, t, n, o) : f(n, e.mode, o))
    }

    function h(e, t, n, i) {
        ! function(e, t, n) {
            r.stat(e, (e, r) => e ? n(e) : a(t, r.atime, r.mtime, n))
        }(t, n, t => t ? i(t) : f(n, e, i))
    }

    function f(e, t, n) {
        return r.chmod(e, t, n)
    }

    function g(e, t, n, i) {
        r.readdir(e, (r, o) => r ? i(r) : m(o, e, t, n, i))
    }

    function m(e, t, n, r, o) {
        const s = e.pop();
        return s ? function(e, t, n, r, o, s) {
            const a = i.join(n, t),
                l = i.join(r, t);
            c.checkPaths(a, l, "copy", o, (t, i) => {
                if (t) return s(t);
                const {
                    destStat: c
                } = i;
                ! function(e, t, n, r, i) {
                    r.filter ? u(p, e, t, n, r, i) : p(e, t, n, r, i)
                }(c, a, l, o, t => t ? s(t) : m(e, n, r, o, s))
            })
        }(e, s, t, n, r, o) : o()
    }

    function v(e, t, n, o, s) {
        r.readlink(t, (t, a) => t ? s(t) : (o.dereference && (a = i.resolve(process.cwd(), a)), e ? void r.readlink(n, (t, l) => t ? "EINVAL" === t.code || "UNKNOWN" === t.code ? r.symlink(a, n, s) : s(t) : (o.dereference && (l = i.resolve(process.cwd(), l)), c.isSrcSubdir(a, l) ? s(new Error(`Cannot copy '${a}' to a subdirectory of itself, '${l}'.`)) : e.isDirectory() && c.isSrcSubdir(l, a) ? s(new Error(`Cannot overwrite '${l}' with '${a}'.`)) : function(e, t, n) {
            r.unlink(t, i => i ? n(i) : r.symlink(e, t, n))
        }(a, n, s))) : r.symlink(a, n, s)))
    }
    e.exports = function(e, t, n, r) {
        "function" != typeof n || r ? "function" == typeof n && (n = {
            filter: n
        }) : (r = n, n = {}), r = r || function() {}, (n = n || {}).clobber = !("clobber" in n) || !!n.clobber, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0001"), c.checkPaths(e, t, "copy", n, (i, o) => {
            if (i) return r(i);
            const {
                srcStat: s,
                destStat: a
            } = o;
            c.checkParentPaths(e, s, t, "copy", i => i ? r(i) : n.filter ? u(l, a, e, t, n, r) : l(a, e, t, n, r))
        })
    }
}, function(e, t, n) {
    "use strict";
    const r = n(17),
        {
            checkPath: i
        } = n(95),
        o = e => "number" == typeof e ? e : {
            mode: 511,
            ...e
        }.mode;
    e.exports.makeDir = async (e, t) => (i(e), r.mkdir(e, {
        mode: o(t),
        recursive: !0
    })), e.exports.makeDirSync = (e, t) => (i(e), r.mkdirSync(e, {
        mode: o(t),
        recursive: !0
    }))
}, function(e, t, n) {
    "use strict";
    const r = n(0);
    e.exports.checkPath = function(e) {
        if ("win32" === process.platform && /[<>:"|?*]/.test(e.replace(r.parse(e).root, ""))) {
            const t = new Error("Path contains invalid characters: " + e);
            throw t.code = "EINVAL", t
        }
    }
}, function(e, t, n) {
    "use strict";
    const r = n(4),
        i = n(0),
        o = n(9).mkdirsSync,
        s = n(56).utimesMillisSync,
        a = n(18);

    function c(e, t, n, o) {
        const s = (o.dereference ? r.statSync : r.lstatSync)(t);
        if (s.isDirectory()) return function(e, t, n, i, o) {
            return t ? p(n, i, o) : function(e, t, n, i) {
                return r.mkdirSync(n), p(t, n, i), u(n, e)
            }(e.mode, n, i, o)
        }(s, e, t, n, o);
        if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return function(e, t, n, i, o) {
            return t ? function(e, t, n, i) {
                if (i.overwrite) return r.unlinkSync(n), l(e, t, n, i);
                if (i.errorOnExist) throw new Error(`'${n}' already exists`)
            }(e, n, i, o) : l(e, n, i, o)
        }(s, e, t, n, o);
        if (s.isSymbolicLink()) return function(e, t, n, o) {
            let s = r.readlinkSync(t);
            if (o.dereference && (s = i.resolve(process.cwd(), s)), e) {
                let t;
                try {
                    t = r.readlinkSync(n)
                } catch (e) {
                    if ("EINVAL" === e.code || "UNKNOWN" === e.code) return r.symlinkSync(s, n);
                    throw e
                }
                if (o.dereference && (t = i.resolve(process.cwd(), t)), a.isSrcSubdir(s, t)) throw new Error(`Cannot copy '${s}' to a subdirectory of itself, '${t}'.`);
                if (r.statSync(n).isDirectory() && a.isSrcSubdir(t, s)) throw new Error(`Cannot overwrite '${t}' with '${s}'.`);
                return function(e, t) {
                    return r.unlinkSync(t), r.symlinkSync(e, t)
                }(s, n)
            }
            return r.symlinkSync(s, n)
        }(e, t, n, o);
        if (s.isSocket()) throw new Error("Cannot copy a socket file: " + t);
        if (s.isFIFO()) throw new Error("Cannot copy a FIFO pipe: " + t);
        throw new Error("Unknown file: " + t)
    }

    function l(e, t, n, i) {
        return r.copyFileSync(t, n), i.preserveTimestamps && function(e, t, n) {
            (function(e) {
                return 0 == (128 & e)
            })(e) && function(e, t) {
                u(e, 128 | t)
            }(n, e),
            function(e, t) {
                const n = r.statSync(e);
                s(t, n.atime, n.mtime)
            }(t, n)
        }(e.mode, t, n), u(n, e.mode)
    }

    function u(e, t) {
        return r.chmodSync(e, t)
    }

    function p(e, t, n) {
        r.readdirSync(e).forEach(r => function(e, t, n, r) {
            const o = i.join(t, e),
                s = i.join(n, e),
                {
                    destStat: l
                } = a.checkPathsSync(o, s, "copy", r);
            return function(e, t, n, r) {
                if (!r.filter || r.filter(t, n)) return c(e, t, n, r)
            }(l, o, s, r)
        }(r, e, t, n))
    }
    e.exports = function(e, t, n) {
        "function" == typeof n && (n = {
            filter: n
        }), (n = n || {}).clobber = !("clobber" in n) || !!n.clobber, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0002");
        const {
            srcStat: s,
            destStat: l
        } = a.checkPathsSync(e, t, "copy", n);
        return a.checkParentPathsSync(e, s, t, "copy"),
            function(e, t, n, s) {
                if (s.filter && !s.filter(t, n)) return;
                const a = i.dirname(n);
                return r.existsSync(a) || o(a), c(e, t, n, s)
            }(l, e, t, n)
    }
}, function(e, t, n) {
    "use strict";
    const r = n(6).fromPromise,
        i = n(17),
        o = n(0),
        s = n(9),
        a = n(26),
        c = r((async function(e) {
            let t;
            try {
                t = await i.readdir(e)
            } catch {
                return s.mkdirs(e)
            }
            return Promise.all(t.map(t => a.remove(o.join(e, t))))
        }));

    function l(e) {
        let t;
        try {
            t = i.readdirSync(e)
        } catch {
            return s.mkdirsSync(e)
        }
        t.forEach(t => {
            t = o.join(e, t), a.removeSync(t)
        })
    }
    e.exports = {
        emptyDirSync: l,
        emptydirSync: l,
        emptyDir: c,
        emptydir: c
    }
}, function(e, t, n) {
    "use strict";
    const r = n(4),
        i = n(0),
        o = n(55),
        s = "win32" === process.platform;

    function a(e) {
        ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(t => {
            e[t] = e[t] || r[t], e[t += "Sync"] = e[t] || r[t]
        }), e.maxBusyTries = e.maxBusyTries || 3
    }

    function c(e, t, n) {
        let r = 0;
        "function" == typeof t && (n = t, t = {}), o(e, "rimraf: missing path"), o.strictEqual(typeof e, "string", "rimraf: path should be a string"), o.strictEqual(typeof n, "function", "rimraf: callback function required"), o(t, "rimraf: invalid options argument provided"), o.strictEqual(typeof t, "object", "rimraf: options should be object"), a(t), l(e, t, (function i(o) {
            if (o) {
                if (("EBUSY" === o.code || "ENOTEMPTY" === o.code || "EPERM" === o.code) && r < t.maxBusyTries) return r++, setTimeout(() => l(e, t, i), 100 * r);
                "ENOENT" === o.code && (o = null)
            }
            n(o)
        }))
    }

    function l(e, t, n) {
        o(e), o(t), o("function" == typeof n), t.lstat(e, (r, i) => r && "ENOENT" === r.code ? n(null) : r && "EPERM" === r.code && s ? u(e, t, r, n) : i && i.isDirectory() ? d(e, t, r, n) : void t.unlink(e, r => {
            if (r) {
                if ("ENOENT" === r.code) return n(null);
                if ("EPERM" === r.code) return s ? u(e, t, r, n) : d(e, t, r, n);
                if ("EISDIR" === r.code) return d(e, t, r, n)
            }
            return n(r)
        }))
    }

    function u(e, t, n, r) {
        o(e), o(t), o("function" == typeof r), t.chmod(e, 438, i => {
            i ? r("ENOENT" === i.code ? null : n) : t.stat(e, (i, o) => {
                i ? r("ENOENT" === i.code ? null : n) : o.isDirectory() ? d(e, t, n, r) : t.unlink(e, r)
            })
        })
    }

    function p(e, t, n) {
        let r;
        o(e), o(t);
        try {
            t.chmodSync(e, 438)
        } catch (e) {
            if ("ENOENT" === e.code) return;
            throw n
        }
        try {
            r = t.statSync(e)
        } catch (e) {
            if ("ENOENT" === e.code) return;
            throw n
        }
        r.isDirectory() ? f(e, t, n) : t.unlinkSync(e)
    }

    function d(e, t, n, r) {
        o(e), o(t), o("function" == typeof r), t.rmdir(e, s => {
            !s || "ENOTEMPTY" !== s.code && "EEXIST" !== s.code && "EPERM" !== s.code ? s && "ENOTDIR" === s.code ? r(n) : r(s) : function(e, t, n) {
                o(e), o(t), o("function" == typeof n), t.readdir(e, (r, o) => {
                    if (r) return n(r);
                    let s, a = o.length;
                    if (0 === a) return t.rmdir(e, n);
                    o.forEach(r => {
                        c(i.join(e, r), t, r => {
                            if (!s) return r ? n(s = r) : void(0 == --a && t.rmdir(e, n))
                        })
                    })
                })
            }(e, t, r)
        })
    }

    function h(e, t) {
        let n;
        a(t = t || {}), o(e, "rimraf: missing path"), o.strictEqual(typeof e, "string", "rimraf: path should be a string"), o(t, "rimraf: missing options"), o.strictEqual(typeof t, "object", "rimraf: options should be object");
        try {
            n = t.lstatSync(e)
        } catch (n) {
            if ("ENOENT" === n.code) return;
            "EPERM" === n.code && s && p(e, t, n)
        }
        try {
            n && n.isDirectory() ? f(e, t, null) : t.unlinkSync(e)
        } catch (n) {
            if ("ENOENT" === n.code) return;
            if ("EPERM" === n.code) return s ? p(e, t, n) : f(e, t, n);
            if ("EISDIR" !== n.code) throw n;
            f(e, t, n)
        }
    }

    function f(e, t, n) {
        o(e), o(t);
        try {
            t.rmdirSync(e)
        } catch (r) {
            if ("ENOTDIR" === r.code) throw n;
            if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code) ! function(e, t) {
                if (o(e), o(t), t.readdirSync(e).forEach(n => h(i.join(e, n), t)), !s) return t.rmdirSync(e, t);
                {
                    const n = Date.now();
                    do {
                        try {
                            return t.rmdirSync(e, t)
                        } catch {}
                    } while (Date.now() - n < 500)
                }
            }(e, t);
            else if ("ENOENT" !== r.code) throw r
        }
    }
    e.exports = c, c.sync = h
}, function(e, t, n) {
    "use strict";
    const {
        createFile: r,
        createFileSync: i
    } = n(100), {
        createLink: o,
        createLinkSync: s
    } = n(101), {
        createSymlink: a,
        createSymlinkSync: c
    } = n(102);
    e.exports = {
        createFile: r,
        createFileSync: i,
        ensureFile: r,
        ensureFileSync: i,
        createLink: o,
        createLinkSync: s,
        ensureLink: o,
        ensureLinkSync: s,
        createSymlink: a,
        createSymlinkSync: c,
        ensureSymlink: a,
        ensureSymlinkSync: c
    }
}, function(e, t, n) {
    "use strict";
    const r = n(6).fromCallback,
        i = n(0),
        o = n(4),
        s = n(9);
    e.exports = {
        createFile: r((function(e, t) {
            function n() {
                o.writeFile(e, "", e => {
                    if (e) return t(e);
                    t()
                })
            }
            o.stat(e, (r, a) => {
                if (!r && a.isFile()) return t();
                const c = i.dirname(e);
                o.stat(c, (e, r) => {
                    if (e) return "ENOENT" === e.code ? s.mkdirs(c, e => {
                        if (e) return t(e);
                        n()
                    }) : t(e);
                    r.isDirectory() ? n() : o.readdir(c, e => {
                        if (e) return t(e)
                    })
                })
            })
        })),
        createFileSync: function(e) {
            let t;
            try {
                t = o.statSync(e)
            } catch {}
            if (t && t.isFile()) return;
            const n = i.dirname(e);
            try {
                o.statSync(n).isDirectory() || o.readdirSync(n)
            } catch (e) {
                if (!e || "ENOENT" !== e.code) throw e;
                s.mkdirsSync(n)
            }
            o.writeFileSync(e, "")
        }
    }
}, function(e, t, n) {
    "use strict";
    const r = n(6).fromCallback,
        i = n(0),
        o = n(4),
        s = n(9),
        a = n(14).pathExists,
        {
            areIdentical: c
        } = n(18);
    e.exports = {
        createLink: r((function(e, t, n) {
            function r(e, t) {
                o.link(e, t, e => {
                    if (e) return n(e);
                    n(null)
                })
            }
            o.lstat(t, (l, u) => {
                o.lstat(e, (o, l) => {
                    if (o) return o.message = o.message.replace("lstat", "ensureLink"), n(o);
                    if (u && c(l, u)) return n(null);
                    const p = i.dirname(t);
                    a(p, (i, o) => i ? n(i) : o ? r(e, t) : void s.mkdirs(p, i => {
                        if (i) return n(i);
                        r(e, t)
                    }))
                })
            })
        })),
        createLinkSync: function(e, t) {
            let n;
            try {
                n = o.lstatSync(t)
            } catch {}
            try {
                const t = o.lstatSync(e);
                if (n && c(t, n)) return
            } catch (e) {
                throw e.message = e.message.replace("lstat", "ensureLink"), e
            }
            const r = i.dirname(t);
            return o.existsSync(r) || s.mkdirsSync(r), o.linkSync(e, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    const r = n(6).fromCallback,
        i = n(0),
        o = n(17),
        s = n(9),
        a = s.mkdirs,
        c = s.mkdirsSync,
        l = n(103),
        u = l.symlinkPaths,
        p = l.symlinkPathsSync,
        d = n(104),
        h = d.symlinkType,
        f = d.symlinkTypeSync,
        g = n(14).pathExists,
        {
            areIdentical: m
        } = n(18);

    function v(e, t, n, r) {
        u(e, t, (s, c) => {
            if (s) return r(s);
            e = c.toDst, h(c.toCwd, n, (n, s) => {
                if (n) return r(n);
                const c = i.dirname(t);
                g(c, (n, i) => n ? r(n) : i ? o.symlink(e, t, s, r) : void a(c, n => {
                    if (n) return r(n);
                    o.symlink(e, t, s, r)
                }))
            })
        })
    }
    e.exports = {
        createSymlink: r((function(e, t, n, r) {
            r = "function" == typeof n ? n : r, n = "function" != typeof n && n, o.lstat(t, (i, s) => {
                !i && s.isSymbolicLink() ? Promise.all([o.stat(e), o.stat(t)]).then(([i, o]) => {
                    if (m(i, o)) return r(null);
                    v(e, t, n, r)
                }) : v(e, t, n, r)
            })
        })),
        createSymlinkSync: function(e, t, n) {
            let r;
            try {
                r = o.lstatSync(t)
            } catch {}
            if (r && r.isSymbolicLink()) {
                const n = o.statSync(e),
                    r = o.statSync(t);
                if (m(n, r)) return
            }
            const s = p(e, t);
            e = s.toDst, n = f(s.toCwd, n);
            const a = i.dirname(t);
            return o.existsSync(a) || c(a), o.symlinkSync(e, t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    const r = n(0),
        i = n(4),
        o = n(14).pathExists;
    e.exports = {
        symlinkPaths: function(e, t, n) {
            if (r.isAbsolute(e)) return i.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
                toCwd: e,
                toDst: e
            }));
            {
                const s = r.dirname(t),
                    a = r.join(s, e);
                return o(a, (t, o) => t ? n(t) : o ? n(null, {
                    toCwd: a,
                    toDst: e
                }) : i.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
                    toCwd: e,
                    toDst: r.relative(s, e)
                })))
            }
        },
        symlinkPathsSync: function(e, t) {
            let n;
            if (r.isAbsolute(e)) {
                if (n = i.existsSync(e), !n) throw new Error("absolute srcpath does not exist");
                return {
                    toCwd: e,
                    toDst: e
                }
            } {
                const o = r.dirname(t),
                    s = r.join(o, e);
                if (n = i.existsSync(s), n) return {
                    toCwd: s,
                    toDst: e
                };
                if (n = i.existsSync(e), !n) throw new Error("relative srcpath does not exist");
                return {
                    toCwd: e,
                    toDst: r.relative(o, e)
                }
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    const r = n(4);
    e.exports = {
        symlinkType: function(e, t, n) {
            if (n = "function" == typeof t ? t : n, t = "function" != typeof t && t) return n(null, t);
            r.lstat(e, (e, r) => {
                if (e) return n(null, "file");
                t = r && r.isDirectory() ? "dir" : "file", n(null, t)
            })
        },
        symlinkTypeSync: function(e, t) {
            let n;
            if (t) return t;
            try {
                n = r.lstatSync(e)
            } catch {
                return "file"
            }
            return n && n.isDirectory() ? "dir" : "file"
        }
    }
}, function(e, t, n) {
    "use strict";
    const r = n(6).fromPromise,
        i = n(106);
    i.outputJson = r(n(108)), i.outputJsonSync = n(109), i.outputJSON = i.outputJson, i.outputJSONSync = i.outputJsonSync, i.writeJSON = i.writeJson, i.writeJSONSync = i.writeJsonSync, i.readJSON = i.readJson, i.readJSONSync = i.readJsonSync, e.exports = i
}, function(e, t, n) {
    "use strict";
    const r = n(107);
    e.exports = {
        readJson: r.readFile,
        readJsonSync: r.readFileSync,
        writeJson: r.writeFile,
        writeJsonSync: r.writeFileSync
    }
}, function(e, t, n) {
    let r;
    try {
        r = n(4)
    } catch (e) {
        r = n(3)
    }
    const i = n(6),
        {
            stringify: o,
            stripBom: s
        } = n(37),
        a = {
            readFile: i.fromPromise((async function(e, t = {}) {
                "string" == typeof t && (t = {
                    encoding: t
                });
                const n = t.fs || r,
                    o = !("throws" in t) || t.throws;
                let a, c = await i.fromCallback(n.readFile)(e, t);
                c = s(c);
                try {
                    a = JSON.parse(c, t ? t.reviver : null)
                } catch (t) {
                    if (o) throw t.message = `${e}: ${t.message}`, t;
                    return null
                }
                return a
            })),
            readFileSync: function(e, t = {}) {
                "string" == typeof t && (t = {
                    encoding: t
                });
                const n = t.fs || r,
                    i = !("throws" in t) || t.throws;
                try {
                    let r = n.readFileSync(e, t);
                    return r = s(r), JSON.parse(r, t.reviver)
                } catch (t) {
                    if (i) throw t.message = `${e}: ${t.message}`, t;
                    return null
                }
            },
            writeFile: i.fromPromise((async function(e, t, n = {}) {
                const s = n.fs || r,
                    a = o(t, n);
                await i.fromCallback(s.writeFile)(e, a, n)
            })),
            writeFileSync: function(e, t, n = {}) {
                const i = n.fs || r,
                    s = o(t, n);
                return i.writeFileSync(e, s, n)
            }
        };
    e.exports = a
}, function(e, t, n) {
    "use strict";
    const {
        stringify: r
    } = n(37), {
        outputFile: i
    } = n(38);
    e.exports = async function(e, t, n = {}) {
        const o = r(t, n);
        await i(e, o, n)
    }
}, function(e, t, n) {
    "use strict";
    const {
        stringify: r
    } = n(37), {
        outputFileSync: i
    } = n(38);
    e.exports = function(e, t, n) {
        const o = r(t, n);
        i(e, o, n)
    }
}, function(e, t, n) {
    "use strict";
    const r = n(6).fromCallback;
    e.exports = {
        move: r(n(111)),
        moveSync: n(112)
    }
}, function(e, t, n) {
    "use strict";
    const r = n(4),
        i = n(0),
        o = n(36).copy,
        s = n(26).remove,
        a = n(9).mkdirp,
        c = n(14).pathExists,
        l = n(18);

    function u(e, t, n, r, i) {
        return r ? p(e, t, n, i) : n ? s(t, r => r ? i(r) : p(e, t, n, i)) : void c(t, (r, o) => r ? i(r) : o ? i(new Error("dest already exists.")) : p(e, t, n, i))
    }

    function p(e, t, n, i) {
        r.rename(e, t, r => r ? "EXDEV" !== r.code ? i(r) : function(e, t, n, r) {
            o(e, t, {
                overwrite: n,
                errorOnExist: !0
            }, t => t ? r(t) : s(e, r))
        }(e, t, n, i) : i())
    }
    e.exports = function(e, t, n, r) {
        "function" == typeof n && (r = n, n = {});
        const o = (n = n || {}).overwrite || n.clobber || !1;
        l.checkPaths(e, t, "move", n, (n, s) => {
            if (n) return r(n);
            const {
                srcStat: c,
                isChangingCase: p = !1
            } = s;
            l.checkParentPaths(e, c, t, "move", n => n ? r(n) : function(e) {
                const t = i.dirname(e);
                return i.parse(t).root === t
            }(t) ? u(e, t, o, p, r) : void a(i.dirname(t), n => n ? r(n) : u(e, t, o, p, r)))
        })
    }
}, function(e, t, n) {
    "use strict";
    const r = n(4),
        i = n(0),
        o = n(36).copySync,
        s = n(26).removeSync,
        a = n(9).mkdirpSync,
        c = n(18);

    function l(e, t, n) {
        try {
            r.renameSync(e, t)
        } catch (r) {
            if ("EXDEV" !== r.code) throw r;
            return function(e, t, n) {
                return o(e, t, {
                    overwrite: n,
                    errorOnExist: !0
                }), s(e)
            }(e, t, n)
        }
    }
    e.exports = function(e, t, n) {
        const o = (n = n || {}).overwrite || n.clobber || !1,
            {
                srcStat: u,
                isChangingCase: p = !1
            } = c.checkPathsSync(e, t, "move", n);
        return c.checkParentPathsSync(e, u, t, "move"),
            function(e) {
                const t = i.dirname(e);
                return i.parse(t).root === t
            }(t) || a(i.dirname(t)),
            function(e, t, n, i) {
                if (i) return l(e, t, n);
                if (n) return s(t), l(e, t, n);
                if (r.existsSync(t)) throw new Error("dest already exists.");
                return l(e, t, n)
            }(e, t, o, p)
    }
}, function(e, t) {
    e.exports = require("fs/promises")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Lazy = void 0, t.Lazy = class {
        constructor(e) {
            this._value = null, this.creator = e
        }
        get hasValue() {
            return null == this.creator
        }
        get value() {
            if (null == this.creator) return this._value;
            const e = this.creator();
            return this.value = e, e
        }
        set value(e) {
            this._value = e, this.creator = null
        }
    }
}, function(e, t, n) {
    const r = n(20);
    e.exports = (e, t) => {
        const n = r(e, t);
        return n ? n.version : null
    }
}, function(e, t, n) {
    const r = n(20);
    e.exports = (e, t) => {
        const n = r(e.trim().replace(/^[=v]+/, ""), t);
        return n ? n.version : null
    }
}, function(e, t, n) {
    const r = n(5);
    e.exports = (e, t, n, i) => {
        "string" == typeof n && (i = n, n = void 0);
        try {
            return new r(e instanceof r ? e.version : e, n).inc(t, i).version
        } catch (e) {
            return null
        }
    }
}, function(e, t, n) {
    const r = n(20),
        i = n(40);
    e.exports = (e, t) => {
        if (i(e, t)) return null;
        {
            const n = r(e),
                i = r(t),
                o = n.prerelease.length || i.prerelease.length,
                s = o ? "pre" : "",
                a = o ? "prerelease" : "";
            for (const e in n)
                if (("major" === e || "minor" === e || "patch" === e) && n[e] !== i[e]) return s + e;
            return a
        }
    }
}, function(e, t, n) {
    const r = n(5);
    e.exports = (e, t) => new r(e, t).major
}, function(e, t, n) {
    const r = n(5);
    e.exports = (e, t) => new r(e, t).minor
}, function(e, t, n) {
    const r = n(5);
    e.exports = (e, t) => new r(e, t).patch
}, function(e, t, n) {
    const r = n(20);
    e.exports = (e, t) => {
        const n = r(e, t);
        return n && n.prerelease.length ? n.prerelease : null
    }
}, function(e, t, n) {
    const r = n(7);
    e.exports = (e, t, n) => r(t, e, n)
}, function(e, t, n) {
    const r = n(7);
    e.exports = (e, t) => r(e, t, !0)
}, function(e, t, n) {
    const r = n(41);
    e.exports = (e, t) => e.sort((e, n) => r(e, n, t))
}, function(e, t, n) {
    const r = n(41);
    e.exports = (e, t) => e.sort((e, n) => r(n, e, t))
}, function(e, t, n) {
    const r = n(5),
        i = n(20),
        {
            re: o,
            t: s
        } = n(19);
    e.exports = (e, t) => {
        if (e instanceof r) return e;
        if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
        let n = null;
        if ((t = t || {}).rtl) {
            let t;
            for (;
                (t = o[s.COERCERTL].exec(e)) && (!n || n.index + n[0].length !== e.length);) n && t.index + t[0].length === n.index + n[0].length || (n = t), o[s.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
            o[s.COERCERTL].lastIndex = -1
        } else n = e.match(o[s.COERCE]);
        return null === n ? null : i(`${n[2]}.${n[3]||"0"}.${n[4]||"0"}`, t)
    }
}, function(e, t, n) {
    "use strict";
    const r = n(129),
        i = Symbol("max"),
        o = Symbol("length"),
        s = Symbol("lengthCalculator"),
        a = Symbol("allowStale"),
        c = Symbol("maxAge"),
        l = Symbol("dispose"),
        u = Symbol("noDisposeOnSet"),
        p = Symbol("lruList"),
        d = Symbol("cache"),
        h = Symbol("updateAgeOnGet"),
        f = () => 1,
        g = (e, t, n) => {
            const r = e[d].get(t);
            if (r) {
                const t = r.value;
                if (m(e, t)) {
                    if (y(e, r), !e[a]) return
                } else n && (e[h] && (r.value.now = Date.now()), e[p].unshiftNode(r));
                return t.value
            }
        },
        m = (e, t) => {
            if (!t || !t.maxAge && !e[c]) return !1;
            const n = Date.now() - t.now;
            return t.maxAge ? n > t.maxAge : e[c] && n > e[c]
        },
        v = e => {
            if (e[o] > e[i])
                for (let t = e[p].tail; e[o] > e[i] && null !== t;) {
                    const n = t.prev;
                    y(e, t), t = n
                }
        },
        y = (e, t) => {
            if (t) {
                const n = t.value;
                e[l] && e[l](n.key, n.value), e[o] -= n.length, e[d].delete(n.key), e[p].removeNode(t)
            }
        };
    class w {
        constructor(e, t, n, r, i) {
            this.key = e, this.value = t, this.length = n, this.now = r, this.maxAge = i || 0
        }
    }
    const E = (e, t, n, r) => {
        let i = n.value;
        m(e, i) && (y(e, n), e[a] || (i = void 0)), i && t.call(r, i.value, i.key, e)
    };
    e.exports = class {
        constructor(e) {
            if ("number" == typeof e && (e = {
                    max: e
                }), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)) throw new TypeError("max must be a non-negative number");
            this[i] = e.max || 1 / 0;
            const t = e.length || f;
            if (this[s] = "function" != typeof t ? f : t, this[a] = e.stale || !1, e.maxAge && "number" != typeof e.maxAge) throw new TypeError("maxAge must be a number");
            this[c] = e.maxAge || 0, this[l] = e.dispose, this[u] = e.noDisposeOnSet || !1, this[h] = e.updateAgeOnGet || !1, this.reset()
        }
        set max(e) {
            if ("number" != typeof e || e < 0) throw new TypeError("max must be a non-negative number");
            this[i] = e || 1 / 0, v(this)
        }
        get max() {
            return this[i]
        }
        set allowStale(e) {
            this[a] = !!e
        }
        get allowStale() {
            return this[a]
        }
        set maxAge(e) {
            if ("number" != typeof e) throw new TypeError("maxAge must be a non-negative number");
            this[c] = e, v(this)
        }
        get maxAge() {
            return this[c]
        }
        set lengthCalculator(e) {
            "function" != typeof e && (e = f), e !== this[s] && (this[s] = e, this[o] = 0, this[p].forEach(e => {
                e.length = this[s](e.value, e.key), this[o] += e.length
            })), v(this)
        }
        get lengthCalculator() {
            return this[s]
        }
        get length() {
            return this[o]
        }
        get itemCount() {
            return this[p].length
        }
        rforEach(e, t) {
            t = t || this;
            for (let n = this[p].tail; null !== n;) {
                const r = n.prev;
                E(this, e, n, t), n = r
            }
        }
        forEach(e, t) {
            t = t || this;
            for (let n = this[p].head; null !== n;) {
                const r = n.next;
                E(this, e, n, t), n = r
            }
        }
        keys() {
            return this[p].toArray().map(e => e.key)
        }
        values() {
            return this[p].toArray().map(e => e.value)
        }
        reset() {
            this[l] && this[p] && this[p].length && this[p].forEach(e => this[l](e.key, e.value)), this[d] = new Map, this[p] = new r, this[o] = 0
        }
        dump() {
            return this[p].map(e => !m(this, e) && {
                k: e.key,
                v: e.value,
                e: e.now + (e.maxAge || 0)
            }).toArray().filter(e => e)
        }
        dumpLru() {
            return this[p]
        }
        set(e, t, n) {
            if ((n = n || this[c]) && "number" != typeof n) throw new TypeError("maxAge must be a number");
            const r = n ? Date.now() : 0,
                a = this[s](t, e);
            if (this[d].has(e)) {
                if (a > this[i]) return y(this, this[d].get(e)), !1;
                const s = this[d].get(e).value;
                return this[l] && (this[u] || this[l](e, s.value)), s.now = r, s.maxAge = n, s.value = t, this[o] += a - s.length, s.length = a, this.get(e), v(this), !0
            }
            const h = new w(e, t, a, r, n);
            return h.length > this[i] ? (this[l] && this[l](e, t), !1) : (this[o] += h.length, this[p].unshift(h), this[d].set(e, this[p].head), v(this), !0)
        }
        has(e) {
            if (!this[d].has(e)) return !1;
            const t = this[d].get(e).value;
            return !m(this, t)
        }
        get(e) {
            return g(this, e, !0)
        }
        peek(e) {
            return g(this, e, !1)
        }
        pop() {
            const e = this[p].tail;
            return e ? (y(this, e), e.value) : null
        }
        del(e) {
            y(this, this[d].get(e))
        }
        load(e) {
            this.reset();
            const t = Date.now();
            for (let n = e.length - 1; n >= 0; n--) {
                const r = e[n],
                    i = r.e || 0;
                if (0 === i) this.set(r.k, r.v);
                else {
                    const e = i - t;
                    e > 0 && this.set(r.k, r.v, e)
                }
            }
        }
        prune() {
            this[d].forEach((e, t) => g(this, t, !1))
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = this;
        if (t instanceof r || (t = new r), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach((function(e) {
            t.push(e)
        }));
        else if (arguments.length > 0)
            for (var n = 0, i = arguments.length; n < i; n++) t.push(arguments[n]);
        return t
    }

    function i(e, t, n) {
        var r = t === e.head ? new a(n, null, t, e) : new a(n, t, t.next, e);
        return null === r.next && (e.tail = r), null === r.prev && (e.head = r), e.length++, r
    }

    function o(e, t) {
        e.tail = new a(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++
    }

    function s(e, t) {
        e.head = new a(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++
    }

    function a(e, t, n, r) {
        if (!(this instanceof a)) return new a(e, t, n, r);
        this.list = r, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, n ? (n.prev = this, this.next = n) : this.next = null
    }
    e.exports = r, r.Node = a, r.create = r, r.prototype.removeNode = function(e) {
        if (e.list !== this) throw new Error("removing node which does not belong to this list");
        var t = e.next,
            n = e.prev;
        return t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = n), e.list.length--, e.next = null, e.prev = null, e.list = null, t
    }, r.prototype.unshiftNode = function(e) {
        if (e !== this.head) {
            e.list && e.list.removeNode(e);
            var t = this.head;
            e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
        }
    }, r.prototype.pushNode = function(e) {
        if (e !== this.tail) {
            e.list && e.list.removeNode(e);
            var t = this.tail;
            e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
        }
    }, r.prototype.push = function() {
        for (var e = 0, t = arguments.length; e < t; e++) o(this, arguments[e]);
        return this.length
    }, r.prototype.unshift = function() {
        for (var e = 0, t = arguments.length; e < t; e++) s(this, arguments[e]);
        return this.length
    }, r.prototype.pop = function() {
        if (this.tail) {
            var e = this.tail.value;
            return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
        }
    }, r.prototype.shift = function() {
        if (this.head) {
            var e = this.head.value;
            return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
        }
    }, r.prototype.forEach = function(e, t) {
        t = t || this;
        for (var n = this.head, r = 0; null !== n; r++) e.call(t, n.value, r, this), n = n.next
    }, r.prototype.forEachReverse = function(e, t) {
        t = t || this;
        for (var n = this.tail, r = this.length - 1; null !== n; r--) e.call(t, n.value, r, this), n = n.prev
    }, r.prototype.get = function(e) {
        for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
        if (t === e && null !== n) return n.value
    }, r.prototype.getReverse = function(e) {
        for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
        if (t === e && null !== n) return n.value
    }, r.prototype.map = function(e, t) {
        t = t || this;
        for (var n = new r, i = this.head; null !== i;) n.push(e.call(t, i.value, this)), i = i.next;
        return n
    }, r.prototype.mapReverse = function(e, t) {
        t = t || this;
        for (var n = new r, i = this.tail; null !== i;) n.push(e.call(t, i.value, this)), i = i.prev;
        return n
    }, r.prototype.reduce = function(e, t) {
        var n, r = this.head;
        if (arguments.length > 1) n = t;
        else {
            if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
            r = this.head.next, n = this.head.value
        }
        for (var i = 0; null !== r; i++) n = e(n, r.value, i), r = r.next;
        return n
    }, r.prototype.reduceReverse = function(e, t) {
        var n, r = this.tail;
        if (arguments.length > 1) n = t;
        else {
            if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
            r = this.tail.prev, n = this.tail.value
        }
        for (var i = this.length - 1; null !== r; i--) n = e(n, r.value, i), r = r.prev;
        return n
    }, r.prototype.toArray = function() {
        for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++) e[t] = n.value, n = n.next;
        return e
    }, r.prototype.toArrayReverse = function() {
        for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++) e[t] = n.value, n = n.prev;
        return e
    }, r.prototype.slice = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
        var n = new r;
        if (t < e || t < 0) return n;
        e < 0 && (e = 0), t > this.length && (t = this.length);
        for (var i = 0, o = this.head; null !== o && i < e; i++) o = o.next;
        for (; null !== o && i < t; i++, o = o.next) n.push(o.value);
        return n
    }, r.prototype.sliceReverse = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
        var n = new r;
        if (t < e || t < 0) return n;
        e < 0 && (e = 0), t > this.length && (t = this.length);
        for (var i = this.length, o = this.tail; null !== o && i > t; i--) o = o.prev;
        for (; null !== o && i > e; i--, o = o.prev) n.push(o.value);
        return n
    }, r.prototype.splice = function(e, t, ...n) {
        e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
        for (var r = 0, o = this.head; null !== o && r < e; r++) o = o.next;
        var s = [];
        for (r = 0; o && r < t; r++) s.push(o.value), o = this.removeNode(o);
        for (null === o && (o = this.tail), o !== this.head && o !== this.tail && (o = o.prev), r = 0; r < n.length; r++) o = i(this, o, n[r]);
        return s
    }, r.prototype.reverse = function() {
        for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
            var r = n.prev;
            n.prev = n.next, n.next = r
        }
        return this.head = t, this.tail = e, this
    };
    try {
        n(130)(r)
    } catch (e) {}
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        e.prototype[Symbol.iterator] = function*() {
            for (let e = this.head; e; e = e.next) yield e.value
        }
    }
}, function(e, t, n) {
    const r = n(8);
    e.exports = (e, t) => new r(e, t).set.map(e => e.map(e => e.value).join(" ").trim().split(" "))
}, function(e, t, n) {
    const r = n(5),
        i = n(8);
    e.exports = (e, t, n) => {
        let o = null,
            s = null,
            a = null;
        try {
            a = new i(t, n)
        } catch (e) {
            return null
        }
        return e.forEach(e => {
            a.test(e) && (o && -1 !== s.compare(e) || (o = e, s = new r(o, n)))
        }), o
    }
}, function(e, t, n) {
    const r = n(5),
        i = n(8);
    e.exports = (e, t, n) => {
        let o = null,
            s = null,
            a = null;
        try {
            a = new i(t, n)
        } catch (e) {
            return null
        }
        return e.forEach(e => {
            a.test(e) && (o && 1 !== s.compare(e) || (o = e, s = new r(o, n)))
        }), o
    }
}, function(e, t, n) {
    const r = n(5),
        i = n(8),
        o = n(30);
    e.exports = (e, t) => {
        e = new i(e, t);
        let n = new r("0.0.0");
        if (e.test(n)) return n;
        if (n = new r("0.0.0-0"), e.test(n)) return n;
        n = null;
        for (let t = 0; t < e.set.length; ++t) {
            const i = e.set[t];
            let s = null;
            i.forEach(e => {
                const t = new r(e.semver.version);
                switch (e.operator) {
                    case ">":
                        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                    case "":
                    case ">=":
                        s && !o(t, s) || (s = t);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw new Error("Unexpected operation: " + e.operator)
                }
            }), !s || n && !o(n, s) || (n = s)
        }
        return n && e.test(n) ? n : null
    }
}, function(e, t, n) {
    const r = n(8);
    e.exports = (e, t) => {
        try {
            return new r(e, t).range || "*"
        } catch (e) {
            return null
        }
    }
}, function(e, t, n) {
    const r = n(45);
    e.exports = (e, t, n) => r(e, t, ">", n)
}, function(e, t, n) {
    const r = n(45);
    e.exports = (e, t, n) => r(e, t, "<", n)
}, function(e, t, n) {
    const r = n(8);
    e.exports = (e, t, n) => (e = new r(e, n), t = new r(t, n), e.intersects(t))
}, function(e, t, n) {
    const r = n(32),
        i = n(7);
    e.exports = (e, t, n) => {
        const o = [];
        let s = null,
            a = null;
        const c = e.sort((e, t) => i(e, t, n));
        for (const e of c) r(e, t, n) ? (a = e, s || (s = e)) : (a && o.push([s, a]), a = null, s = null);
        s && o.push([s, null]);
        const l = [];
        for (const [e, t] of o) e === t ? l.push(e) : t || e !== c[0] ? t ? e === c[0] ? l.push("<=" + t) : l.push(`${e} - ${t}`) : l.push(">=" + e) : l.push("*");
        const u = l.join(" || "),
            p = "string" == typeof t.raw ? t.raw : String(t);
        return u.length < p.length ? u : t
    }
}, function(e, t, n) {
    const r = n(8),
        i = n(31),
        {
            ANY: o
        } = i,
        s = n(32),
        a = n(7),
        c = (e, t, n) => {
            if (e === t) return !0;
            if (1 === e.length && e[0].semver === o) {
                if (1 === t.length && t[0].semver === o) return !0;
                e = n.includePrerelease ? [new i(">=0.0.0-0")] : [new i(">=0.0.0")]
            }
            if (1 === t.length && t[0].semver === o) {
                if (n.includePrerelease) return !0;
                t = [new i(">=0.0.0")]
            }
            const r = new Set;
            let c, p, d, h, f, g, m;
            for (const t of e) ">" === t.operator || ">=" === t.operator ? c = l(c, t, n) : "<" === t.operator || "<=" === t.operator ? p = u(p, t, n) : r.add(t.semver);
            if (r.size > 1) return null;
            if (c && p) {
                if (d = a(c.semver, p.semver, n), d > 0) return null;
                if (0 === d && (">=" !== c.operator || "<=" !== p.operator)) return null
            }
            for (const e of r) {
                if (c && !s(e, String(c), n)) return null;
                if (p && !s(e, String(p), n)) return null;
                for (const r of t)
                    if (!s(e, String(r), n)) return !1;
                return !0
            }
            let v = !(!p || n.includePrerelease || !p.semver.prerelease.length) && p.semver,
                y = !(!c || n.includePrerelease || !c.semver.prerelease.length) && c.semver;
            v && 1 === v.prerelease.length && "<" === p.operator && 0 === v.prerelease[0] && (v = !1);
            for (const e of t) {
                if (m = m || ">" === e.operator || ">=" === e.operator, g = g || "<" === e.operator || "<=" === e.operator, c)
                    if (y && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === y.major && e.semver.minor === y.minor && e.semver.patch === y.patch && (y = !1), ">" === e.operator || ">=" === e.operator) {
                        if (h = l(c, e, n), h === e && h !== c) return !1
                    } else if (">=" === c.operator && !s(c.semver, String(e), n)) return !1;
                if (p)
                    if (v && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === v.major && e.semver.minor === v.minor && e.semver.patch === v.patch && (v = !1), "<" === e.operator || "<=" === e.operator) {
                        if (f = u(p, e, n), f === e && f !== p) return !1
                    } else if ("<=" === p.operator && !s(p.semver, String(e), n)) return !1;
                if (!e.operator && (p || c) && 0 !== d) return !1
            }
            return !(c && g && !p && 0 !== d || p && m && !c && 0 !== d || y || v)
        },
        l = (e, t, n) => {
            if (!e) return t;
            const r = a(e.semver, t.semver, n);
            return r > 0 ? e : r < 0 || ">" === t.operator && ">=" === e.operator ? t : e
        },
        u = (e, t, n) => {
            if (!e) return t;
            const r = a(e.semver, t.semver, n);
            return r < 0 ? e : r > 0 || "<" === t.operator && "<=" === e.operator ? t : e
        };
    e.exports = (e, t, n = {}) => {
        if (e === t) return !0;
        e = new r(e, n), t = new r(t, n);
        let i = !1;
        e: for (const r of e.set) {
            for (const e of t.set) {
                const t = c(r, e, n);
                if (i = i || null !== t, t) continue e
            }
            if (i) return !1
        }
        return !0
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createTempUpdateFile = t.DownloadedUpdateHelper = void 0;
    const r = n(24),
        i = n(3),
        o = n(142),
        s = n(13),
        a = n(0);
    t.DownloadedUpdateHelper = class {
        constructor(e) {
            this.cacheDir = e, this._file = null, this._packageFile = null, this.versionInfo = null, this.fileInfo = null, this._downloadedFileInfo = null
        }
        get downloadedFileInfo() {
            return this._downloadedFileInfo
        }
        get file() {
            return this._file
        }
        get packageFile() {
            return this._packageFile
        }
        get cacheDirForPendingUpdate() {
            return a.join(this.cacheDir, "pending")
        }
        async validateDownloadedPath(e, t, n, r) {
            if (null != this.versionInfo && this.file === e && null != this.fileInfo) return o(this.versionInfo, t) && o(this.fileInfo.info, n.info) && await s.pathExists(e) ? e : null;
            const i = await this.getValidCachedUpdateFile(n, r);
            return null === i ? null : (r.info(`Update has already been downloaded to ${e}).`), this._file = i, i)
        }
        async setDownloadedFile(e, t, n, r, i, o) {
            this._file = e, this._packageFile = t, this.versionInfo = n, this.fileInfo = r, this._downloadedFileInfo = {
                fileName: i,
                sha512: r.info.sha512,
                isAdminRightsRequired: !0 === r.info.isAdminRightsRequired
            }, o && await s.outputJson(this.getUpdateInfoFile(), this._downloadedFileInfo)
        }
        async clear() {
            this._file = null, this._packageFile = null, this.versionInfo = null, this.fileInfo = null, await this.cleanCacheDirForPendingUpdate()
        }
        async cleanCacheDirForPendingUpdate() {
            try {
                await s.emptyDir(this.cacheDirForPendingUpdate)
            } catch (e) {}
        }
        async getValidCachedUpdateFile(e, t) {
            var n;
            const o = this.getUpdateInfoFile();
            if (!await s.pathExists(o)) return null;
            let c;
            try {
                c = await s.readJson(o)
            } catch (e) {
                let n = "No cached update info available";
                return "ENOENT" !== e.code && (await this.cleanCacheDirForPendingUpdate(), n += ` (error on read: ${e.message})`), t.info(n), null
            }
            if (null === (n = null !== (null == c ? void 0 : c.fileName)) || void 0 === n || !n) return t.warn("Cached update info is corrupted: no fileName, directory for cached update will be cleaned"), await this.cleanCacheDirForPendingUpdate(), null;
            if (e.info.sha512 !== c.sha512) return t.info(`Cached update sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${c.sha512}, expected: ${e.info.sha512}. Directory for cached update will be cleaned`), await this.cleanCacheDirForPendingUpdate(), null;
            const l = a.join(this.cacheDirForPendingUpdate, c.fileName);
            if (!await s.pathExists(l)) return t.info("Cached update file doesn't exist"), null;
            const u = await
            function(e, t = "sha512", n = "base64", o) {
                return new Promise((s, a) => {
                    const c = r.createHash(t);
                    c.on("error", a).setEncoding(n), i.createReadStream(e, {
                        ...o,
                        highWaterMark: 1048576
                    }).on("error", a).on("end", () => {
                        c.end(), s(c.read())
                    }).pipe(c, {
                        end: !1
                    })
                })
            }(l);
            return e.info.sha512 !== u ? (t.warn(`Sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${u}, expected: ${e.info.sha512}`), await this.cleanCacheDirForPendingUpdate(), null) : (this._downloadedFileInfo = c, l)
        }
        getUpdateInfoFile() {
            return a.join(this.cacheDirForPendingUpdate, "update-info.json")
        }
    }, t.createTempUpdateFile = async function(e, t, n) {
        let r = 0,
            i = a.join(t, e);
        for (let o = 0; o < 3; o++) try {
            return await s.unlink(i), i
        } catch (o) {
            if ("ENOENT" === o.code) return i;
            n.warn("Error on remove temp update file: " + o), i = a.join(t, `${r++}-${e}`)
        }
        return i
    }
}, function(e, t, n) {
    (function(e) {
        var n = "[object Arguments]",
            r = "[object Map]",
            i = "[object Object]",
            o = "[object Set]",
            s = /^\[object .+?Constructor\]$/,
            a = /^(?:0|[1-9]\d*)$/,
            c = {};
        c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c[n] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c[r] = c["[object Number]"] = c[i] = c["[object RegExp]"] = c[o] = c["[object String]"] = c["[object WeakMap]"] = !1;
        var l = "object" == typeof global && global && global.Object === Object && global,
            u = "object" == typeof self && self && self.Object === Object && self,
            p = l || u || Function("return this")(),
            d = t && !t.nodeType && t,
            h = d && "object" == typeof e && e && !e.nodeType && e,
            f = h && h.exports === d,
            g = f && l.process,
            m = function() {
                try {
                    return g && g.binding && g.binding("util")
                } catch (e) {}
            }(),
            v = m && m.isTypedArray;

        function y(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        }

        function w(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e, r) {
                n[++t] = [r, e]
            })), n
        }

        function E(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e) {
                n[++t] = e
            })), n
        }
        var b, A = Array.prototype,
            C = Function.prototype,
            T = Object.prototype,
            S = p["__core-js_shared__"],
            I = C.toString,
            O = T.hasOwnProperty,
            N = (b = /[^.]+$/.exec(S && S.keys && S.keys.IE_PROTO || "")) ? "Symbol(src)_1." + b : "",
            D = T.toString,
            R = RegExp("^" + I.call(O).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            P = f ? p.Buffer : void 0,
            x = p.Symbol,
            k = p.Uint8Array,
            _ = T.propertyIsEnumerable,
            F = A.splice,
            U = x ? x.toStringTag : void 0,
            L = Object.getOwnPropertySymbols,
            M = P ? P.isBuffer : void 0,
            B = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }(Object.keys, Object),
            j = pe(p, "DataView"),
            q = pe(p, "Map"),
            H = pe(p, "Promise"),
            G = pe(p, "Set"),
            $ = pe(p, "WeakMap"),
            V = pe(Object, "create"),
            Y = ge(j),
            W = ge(q),
            K = ge(H),
            z = ge(G),
            Q = ge($),
            J = x ? x.prototype : void 0,
            X = J ? J.valueOf : void 0;

        function Z(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function ee(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function te(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function ne(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.__data__ = new te; ++t < n;) this.add(e[t])
        }

        function re(e) {
            var t = this.__data__ = new ee(e);
            this.size = t.size
        }

        function ie(e, t) {
            for (var n = e.length; n--;)
                if (me(e[n][0], t)) return n;
            return -1
        }

        function oe(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : U && U in Object(e) ? function(e) {
                var t = O.call(e, U),
                    n = e[U];
                try {
                    e[U] = void 0;
                    var r = !0
                } catch (e) {}
                var i = D.call(e);
                return r && (t ? e[U] = n : delete e[U]), i
            }(e) : function(e) {
                return D.call(e)
            }(e)
        }

        function se(e) {
            return Ce(e) && oe(e) == n
        }

        function ae(e, t, s, a, c) {
            return e === t || (null == e || null == t || !Ce(e) && !Ce(t) ? e != e && t != t : function(e, t, s, a, c, l) {
                var u = ye(e),
                    p = ye(t),
                    d = u ? "[object Array]" : he(e),
                    h = p ? "[object Array]" : he(t),
                    f = (d = d == n ? i : d) == i,
                    g = (h = h == n ? i : h) == i,
                    m = d == h;
                if (m && we(e)) {
                    if (!we(t)) return !1;
                    u = !0, f = !1
                }
                if (m && !f) return l || (l = new re), u || Te(e) ? ce(e, t, s, a, c, l) : function(e, t, n, i, s, a, c) {
                    switch (n) {
                        case "[object DataView]":
                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                            e = e.buffer, t = t.buffer;
                        case "[object ArrayBuffer]":
                            return !(e.byteLength != t.byteLength || !a(new k(e), new k(t)));
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return me(+e, +t);
                        case "[object Error]":
                            return e.name == t.name && e.message == t.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return e == t + "";
                        case r:
                            var l = w;
                        case o:
                            var u = 1 & i;
                            if (l || (l = E), e.size != t.size && !u) return !1;
                            var p = c.get(e);
                            if (p) return p == t;
                            i |= 2, c.set(e, t);
                            var d = ce(l(e), l(t), i, s, a, c);
                            return c.delete(e), d;
                        case "[object Symbol]":
                            if (X) return X.call(e) == X.call(t)
                    }
                    return !1
                }(e, t, d, s, a, c, l);
                if (!(1 & s)) {
                    var v = f && O.call(e, "__wrapped__"),
                        y = g && O.call(t, "__wrapped__");
                    if (v || y) {
                        var b = v ? e.value() : e,
                            A = y ? t.value() : t;
                        return l || (l = new re), c(b, A, s, a, l)
                    }
                }
                return !!m && (l || (l = new re), function(e, t, n, r, i, o) {
                    var s = 1 & n,
                        a = le(e),
                        c = a.length;
                    if (c != le(t).length && !s) return !1;
                    for (var l = c; l--;) {
                        var u = a[l];
                        if (!(s ? u in t : O.call(t, u))) return !1
                    }
                    var p = o.get(e);
                    if (p && o.get(t)) return p == t;
                    var d = !0;
                    o.set(e, t), o.set(t, e);
                    for (var h = s; ++l < c;) {
                        var f = e[u = a[l]],
                            g = t[u];
                        if (r) var m = s ? r(g, f, u, t, e, o) : r(f, g, u, e, t, o);
                        if (!(void 0 === m ? f === g || i(f, g, n, r, o) : m)) {
                            d = !1;
                            break
                        }
                        h || (h = "constructor" == u)
                    }
                    if (d && !h) {
                        var v = e.constructor,
                            y = t.constructor;
                        v == y || !("constructor" in e) || !("constructor" in t) || "function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y || (d = !1)
                    }
                    return o.delete(e), o.delete(t), d
                }(e, t, s, a, c, l))
            }(e, t, s, a, ae, c))
        }

        function ce(e, t, n, r, i, o) {
            var s = 1 & n,
                a = e.length,
                c = t.length;
            if (a != c && !(s && c > a)) return !1;
            var l = o.get(e);
            if (l && o.get(t)) return l == t;
            var u = -1,
                p = !0,
                d = 2 & n ? new ne : void 0;
            for (o.set(e, t), o.set(t, e); ++u < a;) {
                var h = e[u],
                    f = t[u];
                if (r) var g = s ? r(f, h, u, t, e, o) : r(h, f, u, e, t, o);
                if (void 0 !== g) {
                    if (g) continue;
                    p = !1;
                    break
                }
                if (d) {
                    if (!y(t, (function(e, t) {
                            if (s = t, !d.has(s) && (h === e || i(h, e, n, r, o))) return d.push(t);
                            var s
                        }))) {
                        p = !1;
                        break
                    }
                } else if (h !== f && !i(h, f, n, r, o)) {
                    p = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), p
        }

        function le(e) {
            return function(e, t, n) {
                var r = t(e);
                return ye(e) ? r : function(e, t) {
                    for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
                    return e
                }(r, n(e))
            }(e, Se, de)
        }

        function ue(e, t) {
            var n = e.__data__;
            return function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }

        function pe(e, t) {
            var n = function(e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return function(e) {
                return !(!Ae(e) || function(e) {
                    return !!N && N in e
                }(e)) && (Ee(e) ? R : s).test(ge(e))
            }(n) ? n : void 0
        }
        Z.prototype.clear = function() {
            this.__data__ = V ? V(null) : {}, this.size = 0
        }, Z.prototype.delete = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }, Z.prototype.get = function(e) {
            var t = this.__data__;
            if (V) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return O.call(t, e) ? t[e] : void 0
        }, Z.prototype.has = function(e) {
            var t = this.__data__;
            return V ? void 0 !== t[e] : O.call(t, e)
        }, Z.prototype.set = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = V && void 0 === t ? "__lodash_hash_undefined__" : t, this
        }, ee.prototype.clear = function() {
            this.__data__ = [], this.size = 0
        }, ee.prototype.delete = function(e) {
            var t = this.__data__,
                n = ie(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : F.call(t, n, 1), --this.size, 0))
        }, ee.prototype.get = function(e) {
            var t = this.__data__,
                n = ie(t, e);
            return n < 0 ? void 0 : t[n][1]
        }, ee.prototype.has = function(e) {
            return ie(this.__data__, e) > -1
        }, ee.prototype.set = function(e, t) {
            var n = this.__data__,
                r = ie(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }, te.prototype.clear = function() {
            this.size = 0, this.__data__ = {
                hash: new Z,
                map: new(q || ee),
                string: new Z
            }
        }, te.prototype.delete = function(e) {
            var t = ue(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }, te.prototype.get = function(e) {
            return ue(this, e).get(e)
        }, te.prototype.has = function(e) {
            return ue(this, e).has(e)
        }, te.prototype.set = function(e, t) {
            var n = ue(this, e),
                r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }, ne.prototype.add = ne.prototype.push = function(e) {
            return this.__data__.set(e, "__lodash_hash_undefined__"), this
        }, ne.prototype.has = function(e) {
            return this.__data__.has(e)
        }, re.prototype.clear = function() {
            this.__data__ = new ee, this.size = 0
        }, re.prototype.delete = function(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }, re.prototype.get = function(e) {
            return this.__data__.get(e)
        }, re.prototype.has = function(e) {
            return this.__data__.has(e)
        }, re.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof ee) {
                var r = n.__data__;
                if (!q || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new te(r)
            }
            return n.set(e, t), this.size = n.size, this
        };
        var de = L ? function(e) {
                return null == e ? [] : (e = Object(e), function(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                        var s = e[n];
                        t(s, n, e) && (o[i++] = s)
                    }
                    return o
                }(L(e), (function(t) {
                    return _.call(e, t)
                })))
            } : function() {
                return []
            },
            he = oe;

        function fe(e, t) {
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || a.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function ge(e) {
            if (null != e) {
                try {
                    return I.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }

        function me(e, t) {
            return e === t || e != e && t != t
        }(j && "[object DataView]" != he(new j(new ArrayBuffer(1))) || q && he(new q) != r || H && "[object Promise]" != he(H.resolve()) || G && he(new G) != o || $ && "[object WeakMap]" != he(new $)) && (he = function(e) {
            var t = oe(e),
                n = t == i ? e.constructor : void 0,
                s = n ? ge(n) : "";
            if (s) switch (s) {
                case Y:
                    return "[object DataView]";
                case W:
                    return r;
                case K:
                    return "[object Promise]";
                case z:
                    return o;
                case Q:
                    return "[object WeakMap]"
            }
            return t
        });
        var ve = se(function() {
                return arguments
            }()) ? se : function(e) {
                return Ce(e) && O.call(e, "callee") && !_.call(e, "callee")
            },
            ye = Array.isArray,
            we = M || function() {
                return !1
            };

        function Ee(e) {
            if (!Ae(e)) return !1;
            var t = oe(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }

        function be(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        }

        function Ae(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }

        function Ce(e) {
            return null != e && "object" == typeof e
        }
        var Te = v ? function(e) {
            return function(t) {
                return e(t)
            }
        }(v) : function(e) {
            return Ce(e) && be(e.length) && !!c[oe(e)]
        };

        function Se(e) {
            return function(e) {
                return null != e && be(e.length) && !Ee(e)
            }(e) ? function(e, t) {
                var n = ye(e),
                    r = !n && ve(e),
                    i = !n && !r && we(e),
                    o = !n && !r && !i && Te(e),
                    s = n || r || i || o,
                    a = s ? function(e, t) {
                        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                        return r
                    }(e.length, String) : [],
                    c = a.length;
                for (var l in e) !t && !O.call(e, l) || s && ("length" == l || i && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || fe(l, c)) || a.push(l);
                return a
            }(e) : function(e) {
                if (! function(e) {
                        var t = e && e.constructor;
                        return e === ("function" == typeof t && t.prototype || T)
                    }(e)) return B(e);
                var t = [];
                for (var n in Object(e)) O.call(e, n) && "constructor" != n && t.push(n);
                return t
            }(e)
        }
        e.exports = function(e, t) {
            return ae(e, t)
        }
    }).call(this, n(143)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ElectronAppAdapter = void 0;
    const r = n(0),
        i = n(145);
    t.ElectronAppAdapter = class {
        constructor(e = n(2).app) {
            this.app = e
        }
        whenReady() {
            return this.app.whenReady()
        }
        get version() {
            return this.app.getVersion()
        }
        get name() {
            return this.app.getName()
        }
        get isPackaged() {
            return !0 === this.app.isPackaged
        }
        get appUpdateConfigPath() {
            return this.isPackaged ? r.join(process.resourcesPath, "app-update.yml") : r.join(this.app.getAppPath(), "dev-app-update.yml")
        }
        get userDataPath() {
            return this.app.getPath("userData")
        }
        get baseCachePath() {
            return i.getAppCacheDir()
        }
        quit() {
            this.app.quit()
        }
        onQuit(e) {
            this.app.once("quit", (t, n) => e(n))
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getAppCacheDir = void 0;
    const r = n(0),
        i = n(15);
    t.getAppCacheDir = function() {
        const e = i.homedir();
        let t;
        return t = "win32" === process.platform ? process.env.LOCALAPPDATA || r.join(e, "AppData", "Local") : "darwin" === process.platform ? r.join(e, "Library", "Application Support", "Caches") : process.env.XDG_CACHE_HOME || r.join(e, ".cache"), t
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ElectronHttpExecutor = t.getNetSession = t.NET_SESSION_NAME = void 0;
    const r = n(1);

    function i() {
        return n(2).session.fromPartition(t.NET_SESSION_NAME, {
            cache: !1
        })
    }
    t.NET_SESSION_NAME = "electron-updater", t.getNetSession = i;
    class o extends r.HttpExecutor {
        constructor(e) {
            super(), this.proxyLoginCallback = e, this.cachedSession = null
        }
        async download(e, t, n) {
            return await n.cancellationToken.createPromise((i, o, s) => {
                const a = {
                    headers: n.headers || void 0,
                    redirect: "manual"
                };
                r.configureRequestUrl(e, a), r.configureRequestOptions(a), this.doDownload(a, {
                    destination: t,
                    options: n,
                    onCancel: s,
                    callback: e => {
                        null == e ? i(t) : o(e)
                    },
                    responseHandler: null
                }, 0)
            })
        }
        createRequest(e, t) {
            e.headers && e.headers.Host && (e.host = e.headers.Host, delete e.headers.Host), null == this.cachedSession && (this.cachedSession = i());
            const r = n(2).net.request({
                ...e,
                session: this.cachedSession
            });
            return r.on("response", t), null != this.proxyLoginCallback && r.on("login", this.proxyLoginCallback), r
        }
        addRedirectHandlers(e, t, n, i, o) {
            e.on("redirect", (s, a, c) => {
                e.abort(), i > this.maxRedirects ? n(this.createMaxRedirectError()) : o(r.HttpExecutor.prepareRedirectUrlOptions(c, t))
            })
        }
    }
    t.ElectronHttpExecutor = o
}, function(e, t) {
    var n = /[\\^$.*+?()[\]{}|]/g,
        r = RegExp(n.source),
        i = "object" == typeof global && global && global.Object === Object && global,
        o = "object" == typeof self && self && self.Object === Object && self,
        s = i || o || Function("return this")(),
        a = Object.prototype.toString,
        c = s.Symbol,
        l = c ? c.prototype : void 0,
        u = l ? l.toString : void 0;
    e.exports = function(e) {
        return (e = function(e) {
            return null == e ? "" : function(e) {
                if ("string" == typeof e) return e;
                if (function(e) {
                        return "symbol" == typeof e || function(e) {
                            return !!e && "object" == typeof e
                        }(e) && "[object Symbol]" == a.call(e)
                    }(e)) return u ? u.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }(e)
        }(e)) && r.test(e) ? e.replace(n, "\\$&") : e
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createClient = t.isUrlProbablySupportMultiRangeRequests = void 0;
    const r = n(1),
        i = n(149),
        o = n(151),
        s = n(61),
        a = n(62),
        c = n(152),
        l = n(153);

    function u(e) {
        return !e.includes("s3.amazonaws.com")
    }
    t.isUrlProbablySupportMultiRangeRequests = u, t.createClient = function(e, t, n) {
        if ("string" == typeof e) throw r.newError("Please pass PublishConfiguration object", "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION");
        const p = e.provider;
        switch (p) {
            case "github": {
                const r = e,
                    i = (r.private ? process.env.GH_TOKEN || process.env.GITHUB_TOKEN : null) || r.token;
                return null == i ? new a.GitHubProvider(r, t, n) : new l.PrivateGitHubProvider(r, t, i, n)
            }
            case "bitbucket":
                return new o.BitbucketProvider(e, t, n);
            case "keygen":
                return new c.KeygenProvider(e, t, n);
            case "s3":
            case "spaces":
                return new s.GenericProvider({
                    provider: "generic",
                    url: r.getS3LikeProviderBaseUrl(e),
                    channel: e.channel || null
                }, t, {
                    ...n,
                    isUseMultipleRangeRequest: !1
                });
            case "generic": {
                const r = e;
                return new s.GenericProvider(r, t, {
                    ...n,
                    isUseMultipleRangeRequest: !1 !== r.useMultipleRangeRequest && u(r.url)
                })
            }
            case "bintray":
                return new i.BintrayProvider(e, n);
            case "custom": {
                const i = e,
                    o = i.updateProvider;
                if (!o) throw r.newError("Custom provider not specified", "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION");
                return new o(i, t, n)
            }
            default:
                throw r.newError("Unsupported provider: " + p, "ERR_UPDATER_UNSUPPORTED_PROVIDER")
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BintrayProvider = void 0;
    const r = n(1),
        i = n(150),
        o = n(11),
        s = n(12),
        a = n(10);
    class c extends a.Provider {
        constructor(e, t) {
            super(t), this.client = new i.BintrayClient(e, t.executor, new r.CancellationToken), this.baseUrl = s.newBaseUrl(`https://dl.bintray.com/${this.client.owner}/${this.client.repo}`)
        }
        setRequestHeaders(e) {
            super.setRequestHeaders(e), this.client.setRequestHeaders(e)
        }
        async getLatestVersion() {
            try {
                const e = await this.client.getVersion("_latest"),
                    t = s.getChannelFilename(this.getDefaultChannelName()),
                    n = await this.client.getVersionFiles(e.name),
                    i = n.find(e => e.name.endsWith("_" + t) || e.name.endsWith("-" + t));
                if (null == i) throw r.newError(`Cannot find channel file "${t}", existing files:\n${n.map(e=>JSON.stringify(e,null,2)).join(",\n")}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                const c = new o.URL(`https://dl.bintray.com/${this.client.owner}/${this.client.repo}/${i.name}`);
                return a.parseUpdateInfo(await this.httpRequest(c), t, c)
            } catch (e) {
                if ("statusCode" in e && 404 === e.statusCode) throw r.newError("No latest version, please ensure that user, package and repository correctly configured. Or at least one version is published. " + (e.stack || e.message), "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
                throw e
            }
        }
        resolveFiles(e) {
            return a.resolveFiles(e, this.baseUrl)
        }
    }
    t.BintrayProvider = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BintrayClient = void 0;
    const r = n(50);
    t.BintrayClient = class {
        constructor(e, t, n, r) {
            if (this.httpExecutor = t, this.cancellationToken = n, this.requestHeaders = null, null == e.owner) throw new Error("owner is not specified");
            if (null == e.package) throw new Error("package is not specified");
            this.repo = e.repo || "generic", this.packageName = e.package, this.owner = e.owner, this.user = e.user || e.owner, this.component = e.component || null, this.distribution = e.distribution || "stable", this.auth = null == r ? null : "Basic " + Buffer.from(`${this.user}:${r}`).toString("base64"), this.basePath = `/packages/${this.owner}/${this.repo}/${this.packageName}`
        }
        setRequestHeaders(e) {
            this.requestHeaders = e
        }
        bintrayRequest(e, t, n = null, i, o) {
            return r.parseJson(this.httpExecutor.request(r.configureRequestOptions({
                hostname: "api.bintray.com",
                path: e,
                headers: this.requestHeaders || void 0
            }, t, o), i, n))
        }
        getVersion(e) {
            return this.bintrayRequest(`${this.basePath}/versions/${e}`, this.auth, null, this.cancellationToken)
        }
        getVersionFiles(e) {
            return this.bintrayRequest(`${this.basePath}/versions/${e}/files`, this.auth, null, this.cancellationToken)
        }
        createVersion(e) {
            return this.bintrayRequest(this.basePath + "/versions", this.auth, {
                name: e
            }, this.cancellationToken)
        }
        deleteVersion(e) {
            return this.bintrayRequest(`${this.basePath}/versions/${e}`, this.auth, null, this.cancellationToken, "DELETE")
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BitbucketProvider = void 0;
    const r = n(1),
        i = n(12),
        o = n(10);
    class s extends o.Provider {
        constructor(e, t, n) {
            super({
                ...n,
                isUseMultipleRangeRequest: !1
            }), this.configuration = e, this.updater = t;
            const {
                owner: r,
                slug: o
            } = e;
            this.baseUrl = i.newBaseUrl(`https://api.bitbucket.org/2.0/repositories/${r}/${o}/downloads`)
        }
        get channel() {
            return this.updater.channel || this.configuration.channel || "latest"
        }
        async getLatestVersion() {
            const e = new r.CancellationToken,
                t = i.getChannelFilename(this.getCustomChannelName(this.channel)),
                n = i.newUrlFromBase(t, this.baseUrl, this.updater.isAddNoCacheQuery);
            try {
                const r = await this.httpRequest(n, void 0, e);
                return o.parseUpdateInfo(r, t, n)
            } catch (e) {
                throw r.newError(`Unable to find latest version on ${this.toString()}, please ensure release exists: ${e.stack||e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND")
            }
        }
        resolveFiles(e) {
            return o.resolveFiles(e, this.baseUrl)
        }
        toString() {
            const {
                owner: e,
                slug: t
            } = this.configuration;
            return `Bitbucket (owner: ${e}, slug: ${t}, channel: ${this.channel})`
        }
    }
    t.BitbucketProvider = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.KeygenProvider = void 0;
    const r = n(1),
        i = n(12),
        o = n(10);
    class s extends o.Provider {
        constructor(e, t, n) {
            super({
                ...n,
                isUseMultipleRangeRequest: !1
            }), this.configuration = e, this.updater = t, this.baseUrl = i.newBaseUrl(`https://api.keygen.sh/v1/accounts/${this.configuration.account}/artifacts`)
        }
        get channel() {
            return this.updater.channel || this.configuration.channel || "stable"
        }
        async getLatestVersion() {
            const e = new r.CancellationToken,
                t = i.getChannelFilename(this.getCustomChannelName(this.channel)),
                n = i.newUrlFromBase(t, this.baseUrl, this.updater.isAddNoCacheQuery);
            try {
                const r = await this.httpRequest(n, {
                    Accept: "application/vnd.api+json"
                }, e);
                return o.parseUpdateInfo(r, t, n)
            } catch (e) {
                throw r.newError(`Unable to find latest version on ${this.toString()}, please ensure release exists: ${e.stack||e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND")
            }
        }
        resolveFiles(e) {
            return o.resolveFiles(e, this.baseUrl)
        }
        toString() {
            const {
                account: e,
                product: t,
                platform: n
            } = this.configuration;
            return `Keygen (account: ${e}, product: ${t}, platform: ${n}, channel: ${this.channel})`
        }
    }
    t.KeygenProvider = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PrivateGitHubProvider = void 0;
    const r = n(1),
        i = n(39),
        o = n(0),
        s = n(11),
        a = n(12),
        c = n(62),
        l = n(10);
    class u extends c.BaseGitHubProvider {
        constructor(e, t, n, r) {
            super(e, "api.github.com", r), this.updater = t, this.token = n
        }
        createRequestOptions(e, t) {
            const n = super.createRequestOptions(e, t);
            return n.redirect = "manual", n
        }
        async getLatestVersion() {
            const e = new r.CancellationToken,
                t = a.getChannelFilename(this.getDefaultChannelName()),
                n = await this.getLatestVersionInfo(e),
                o = n.assets.find(e => e.name === t);
            if (null == o) throw r.newError(`Cannot find ${t} in the release ${n.html_url||n.name}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
            const c = new s.URL(o.url);
            let l;
            try {
                l = i.load(await this.httpRequest(c, this.configureHeaders("application/octet-stream"), e))
            } catch (e) {
                if (e instanceof r.HttpError && 404 === e.statusCode) throw r.newError(`Cannot find ${t} in the latest release artifacts (${c}): ${e.stack||e.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                throw e
            }
            return l.assets = n.assets, l
        }
        get fileExtraDownloadHeaders() {
            return this.configureHeaders("application/octet-stream")
        }
        configureHeaders(e) {
            return {
                accept: e,
                authorization: "token " + this.token
            }
        }
        async getLatestVersionInfo(e) {
            const t = this.updater.allowPrerelease;
            let n = this.basePath;
            t || (n += "/latest");
            const i = a.newUrlFromBase(n, this.baseUrl);
            try {
                const n = JSON.parse(await this.httpRequest(i, this.configureHeaders("application/vnd.github.v3+json"), e));
                return t ? n.find(e => e.prerelease) || n[0] : n
            } catch (e) {
                throw r.newError(`Unable to find latest version on GitHub (${i}), please ensure a production release exists: ${e.stack||e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND")
            }
        }
        get basePath() {
            return this.computeGithubBasePath(`/repos/${this.options.owner}/${this.options.repo}/releases`)
        }
        resolveFiles(e) {
            return l.getFileList(e).map(t => {
                const n = o.posix.basename(t.url).replace(/ /g, "-"),
                    i = e.assets.find(e => null != e && e.name === n);
                if (null == i) throw r.newError(`Cannot find asset "${n}" in: ${JSON.stringify(e.assets,null,2)}`, "ERR_UPDATER_ASSET_NOT_FOUND");
                return {
                    url: new s.URL(i.url),
                    info: t
                }
            })
        }
    }
    t.PrivateGitHubProvider = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkIsRangesSupported = t.executeTasksUsingMultipleRangeRequests = void 0;
    const r = n(1),
        i = n(67),
        o = n(46);

    function s(e, t) {
        if (e.statusCode >= 400) return t(r.createHttpError(e)), !1;
        if (206 !== e.statusCode) {
            const n = r.safeGetHeader(e, "accept-ranges");
            if (null == n || "none" === n) return t(new Error(`Server doesn't support Accept-Ranges (response code ${e.statusCode})`)), !1
        }
        return !0
    }
    t.executeTasksUsingMultipleRangeRequests = function(e, t, n, a, c) {
        const l = u => {
            if (u >= t.length) return null != e.fileMetadataBuffer && n.write(e.fileMetadataBuffer), void n.end();
            const p = u + 1e3;
            ! function(e, t, n, a, c) {
                let l = "bytes=",
                    u = 0;
                const p = new Map,
                    d = [];
                for (let e = t.start; e < t.end; e++) {
                    const n = t.tasks[e];
                    n.kind === o.OperationKind.DOWNLOAD && (l += `${n.start}-${n.end-1}, `, p.set(u, e), u++, d.push(n.end - n.start))
                }
                if (u <= 1) {
                    const r = l => {
                        if (l >= t.end) return void a();
                        const u = t.tasks[l++];
                        if (u.kind === o.OperationKind.COPY) i.copyData(u, n, t.oldFileFd, c, () => r(l));
                        else {
                            const t = e.createRequestOptions();
                            t.headers.Range = `bytes=${u.start}-${u.end-1}`;
                            const i = e.httpExecutor.createRequest(t, e => {
                                s(e, c) && (e.pipe(n, {
                                    end: !1
                                }), e.once("end", () => r(l)))
                            });
                            e.httpExecutor.addErrorAndTimeoutHandlers(i, c), i.end()
                        }
                    };
                    return void r(t.start)
                }
                const h = e.createRequestOptions();
                h.headers.Range = l.substring(0, l.length - 2);
                const f = e.httpExecutor.createRequest(h, e => {
                    if (!s(e, c)) return;
                    const o = r.safeGetHeader(e, "content-type"),
                        l = /^multipart\/.+?(?:; boundary=(?:(?:"(.+)")|(?:([^\s]+))))$/i.exec(o);
                    if (null == l) return void c(new Error(`Content-Type "multipart/byteranges" is expected, but got "${o}"`));
                    const u = new i.DataSplitter(n, t, p, l[1] || l[2], d, a);
                    u.on("error", c), e.pipe(u), e.on("end", () => {
                        setTimeout(() => {
                            f.abort(), c(new Error("Response ends without calling any handlers"))
                        }, 1e4)
                    })
                });
                e.httpExecutor.addErrorAndTimeoutHandlers(f, c), f.end()
            }(e, {
                tasks: t,
                start: u,
                end: Math.min(t.length, p),
                oldFileFd: a
            }, n, () => l(p), c)
        };
        return l
    }, t.checkIsRangesSupported = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ProgressDifferentialDownloadCallbackTransform = void 0;
    const r = n(16);
    var i;
    ! function(e) {
        e[e.COPY = 0] = "COPY", e[e.DOWNLOAD = 1] = "DOWNLOAD"
    }(i || (i = {}));
    class o extends r.Transform {
        constructor(e, t, n) {
            super(), this.progressDifferentialDownloadInfo = e, this.cancellationToken = t, this.onProgress = n, this.start = Date.now(), this.transferred = 0, this.delta = 0, this.expectedBytes = 0, this.index = 0, this.operationType = i.COPY, this.nextUpdate = this.start + 1e3
        }
        _transform(e, t, n) {
            if (this.cancellationToken.cancelled) return void n(new Error("cancelled"), null);
            if (this.operationType == i.COPY) return void n(null, e);
            this.transferred += e.length, this.delta += e.length;
            const r = Date.now();
            r >= this.nextUpdate && this.transferred !== this.expectedBytes && this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && (this.nextUpdate = r + 1e3, this.onProgress({
                total: this.progressDifferentialDownloadInfo.grandTotal,
                delta: this.delta,
                transferred: this.transferred,
                percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
                bytesPerSecond: Math.round(this.transferred / ((r - this.start) / 1e3))
            }), this.delta = 0), n(null, e)
        }
        beginFileCopy() {
            this.operationType = i.COPY
        }
        beginRangeDownload() {
            this.operationType = i.DOWNLOAD, this.expectedBytes += this.progressDifferentialDownloadInfo.expectedByteCounts[this.index++]
        }
        endRangeDownload() {
            this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && this.onProgress({
                total: this.progressDifferentialDownloadInfo.grandTotal,
                delta: this.delta,
                transferred: this.transferred,
                percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
                bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
            })
        }
        _flush(e) {
            this.cancellationToken.cancelled ? e(new Error("cancelled")) : (this.onProgress({
                total: this.progressDifferentialDownloadInfo.grandTotal,
                delta: this.delta,
                transferred: this.transferred,
                percent: 100,
                bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
            }), this.delta = 0, this.transferred = 0, e(null))
        }
    }
    t.ProgressDifferentialDownloadCallbackTransform = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GenericDifferentialDownloader = void 0;
    const r = n(66);
    class i extends r.DifferentialDownloader {
        download(e, t) {
            return this.doDownload(e, t)
        }
    }
    t.GenericDifferentialDownloader = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.verifySignature = void 0;
    const r = n(1),
        i = n(33),
        o = n(15);
    t.verifySignature = function(e, t, n) {
        return new Promise(s => {
            const a = t.replace(/'/g, "''").replace(/`/g, "``");
            i.execFile("powershell.exe", ["-NoProfile", "-NonInteractive", "-InputFormat", "None", "-Command", `Get-AuthenticodeSignature '${a}' | ConvertTo-Json -Compress | ForEach-Object { [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($_)) }`], {
                timeout: 2e4
            }, (t, a, c) => {
                try {
                    if (null != t || c) return function(e, t, n) {
                        if (function() {
                                const e = o.release();
                                return e.startsWith("6.") && !e.startsWith("6.3")
                            }()) e.warn(`Cannot execute Get-AuthenticodeSignature: ${t||n}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`);
                        else {
                            try {
                                i.execFileSync("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", "ConvertTo-Json test"], {
                                    timeout: 1e4
                                })
                            } catch (t) {
                                return void e.warn(`Cannot execute ConvertTo-Json: ${t.message}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`)
                            }
                            if (null != t) throw t;
                            n && e.warn(`Cannot execute Get-AuthenticodeSignature, stderr: ${n}. Ignoring signature validation due to unknown stderr.`)
                        }
                    }(n, t, c), void s(null);
                    const l = function(e) {
                        const t = JSON.parse(e);
                        delete t.PrivateKey, delete t.IsOSBinary, delete t.SignatureType;
                        const n = t.SignerCertificate;
                        return null != n && (delete n.Archived, delete n.Extensions, delete n.Handle, delete n.HasPrivateKey, delete n.SubjectName), delete t.Path, t
                    }(Buffer.from(a, "base64").toString("utf-8"));
                    if (0 === l.Status) {
                        const t = r.parseDn(l.SignerCertificate.Subject).get("CN");
                        if (e.includes(t)) return void s(null)
                    }
                    const u = `publisherNames: ${e.join(" | ")}, raw info: ` + JSON.stringify(l, (e, t) => "RawData" === e ? void 0 : t, 2);
                    n.warn("Sign verification failed, installer signed with incorrect certificate: " + u), s(u)
                } catch (e) {
                    return n.warn(`Cannot execute Get-AuthenticodeSignature: ${t}. Ignoring signature validation due to unknown error.`), void s(null)
                }
            })
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(159),
        i = n(160),
        o = n(161),
        s = n(162),
        a = n(165),
        c = n(167),
        l = n(168),
        u = n(21);
    e.exports = {
        catchErrors: function(t) {
            var n = Object.assign({}, {
                log: e.exports.error,
                showDialog: "browser" === process.type
            }, t || {});
            r(n)
        },
        hooks: [],
        isDev: u.isDev(),
        levels: ["error", "warn", "info", "verbose", "debug", "silly"],
        variables: {
            processType: process.type
        }
    }, e.exports.transports = {
        console: o(e.exports),
        file: s(e.exports),
        remote: a(e.exports),
        mainConsole: c(e.exports),
        rendererConsole: l(e.exports)
    }, e.exports.levels.forEach((function(t) {
        e.exports[t] = i.bind(null, e.exports, t)
    })), e.exports.log = i.bind(null, e.exports, "info"), e.exports.default = e.exports
}, function(e, t, n) {
    "use strict";
    var r = n(21),
        i = !1;
    e.exports = function(e) {
        return i || (i = !0, "renderer" === process.type ? (window.addEventListener("error", o), window.addEventListener("unhandledrejection", s)) : (process.on("uncaughtException", t), process.on("unhandledRejection", n))), {
            stop: function() {
                i = !1, "renderer" === process.type ? (window.removeEventListener("error", o), window.removeEventListener("unhandledrejection", s)) : (process.removeListener("uncaughtException", t), process.removeListener("unhandledRejection", n))
            }
        };

        function t(t) {
            try {
                if ("function" == typeof e.onError && !1 === e.onError(t)) return;
                if (e.log(t), e.showDialog && t.name.indexOf("UnhandledRejection") < 0) {
                    var n = process.type || "main";
                    r.showErrorBox("A JavaScript error occurred in the " + n + " process", t.stack)
                }
            } catch (e) {
                console.error(t)
            }
        }

        function n(e) {
            if (e instanceof Error) {
                var n = "UnhandledRejection " + e.name,
                    r = Object.getPrototypeOf(e),
                    i = Object.getOwnPropertyDescriptor(r, "name");
                return i && i.writable || (e = new Error(e.message)), e.name = n, void t(e)
            }
            var o = new Error(JSON.stringify(e));
            o.name = "UnhandledRejection", t(o)
        }

        function o(e) {
            e.preventDefault(), t(e.error)
        }

        function s(e) {
            e.preventDefault(), n(e.reason)
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = i(e, t);
        for (var r in n)
            if (n.hasOwnProperty(r) && "function" == typeof n[r]) {
                var o = a(Array.prototype.slice.call(arguments, 2)),
                    c = s(e.hooks, n[r], {
                        data: o.messages,
                        date: new Date,
                        level: t,
                        variables: e.variables,
                        styles: o.styles
                    });
                c && n[r](c)
            }
    }

    function i(e, t) {
        var n = e.transports,
            r = e.levels,
            i = {};
        for (var s in n) n.hasOwnProperty(s) && n[s] && !1 !== n[s].level && o(r, n[s].level, t) && (i[s] = n[s]);
        return i
    }

    function o(e, t, n) {
        var r = e.indexOf(t),
            i = e.indexOf(n);
        return -1 === i || -1 === r || i <= r
    }

    function s(e, t, n) {
        if (!e || !e.length) return n;
        for (var r = 0; r < e.length && (n = e[r](n, t)); r++);
        return n
    }

    function a(e) {
        var t = [];
        return {
            messages: e = e.filter((function(e) {
                return !e || !e.substr || "color:" !== e.substr(0, 6) || (t.push(e), !1)
            })),
            styles: t
        }
    }
    r.compareLevels = o, e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(34),
        i = {
            context: console,
            error: console.error,
            warn: console.warn,
            info: console.info,
            verbose: console.verbose,
            debug: console.debug,
            silly: console.silly,
            log: console.log
        };

    function o(e, t) {
        return t.forEach((function(t) {
            e = e.replace("%c", function(e) {
                switch (e.replace(/color:\s*(\w+).*/, "$1").toLowerCase()) {
                    case "unset":
                        return "[0m";
                    case "black":
                        return "[30m";
                    case "red":
                        return "[31m";
                    case "green":
                        return "[32m";
                    case "yellow":
                        return "[33m";
                    case "blue":
                        return "[34m";
                    case "magenta":
                        return "[35m";
                    case "cyan":
                        return "[36m";
                    case "white":
                        return "[37m";
                    default:
                        return ""
                }
            }(t))
        })), e + "[0m"
    }

    function s(e, t) {
        i[e] ? i[e].apply(i.context, t) : i.log.apply(i.context, t)
    }

    function a(e) {
        switch (e) {
            case "error":
                return "red";
            case "warn":
                return "yellow";
            case "info":
                return "cyan";
            default:
                return "unset"
        }
    }
    e.exports = function(e) {
        if (n.level = "silly", n.forceStyles = Boolean(process.env.FORCE_STYLES), "renderer" === process.type) n.format = "{h}:{i}:{s}.{ms} › {text}";
        else {
            var t = "win32" === process.platform ? ">" : "›";
            n.format = "%c{h}:{i}:{s}.{ms}%c " + t + " {text}"
        }
        return n;

        function n(t) {
            var i = r.format(t, n.format, e);
            if ("renderer" !== process.type) {
                var c = t.styles || [];
                n.format.substr && "%c" === n.format.substr(0, 2) && (c = ["color:" + a(t.level), "color:unset"].concat(c)), n.forceStyles || function(e) {
                    var t = "error" === e || "warn" === e ? process.stderr : process.stdout;
                    return t && t.isTTY
                }(t.level) ? s(t.level, [o(i, c)]) : s(t.level, [i.replace(/%c/g, "")])
            } else s(t.level, [i].concat(t.styles))
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        i = n(15).EOL,
        o = n(0),
        s = n(34),
        a = n(163);
    e.exports = function(e) {
        return t.appName = null, t.archiveLog = function(e) {
            var t = o.parse(e);
            try {
                r.renameSync(e, o.join(t.dir, t.name + ".old" + t.ext))
            } catch (e) {
                u("Could not rotate log", e)
            }
        }, t.bytesWritten = 0, t.file = null, t.fileName = "log.log", t.fileSize = null, t.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}", t.level = "silly", t.maxSize = 1048576, t.sync = !0, t.writeOptions = {
            flag: "a",
            mode: 438,
            encoding: "utf8"
        }, t.clear = function() {
            try {
                r.unlinkSync(t.file)
            } catch (e) {
                u("Could not clear log", e)
            }
        }, t.findLogPath = l.bind(null, t), t.init = n, t;

        function t(o) {
            t.file && null !== t.fileSize || n(t), t.maxSize > 0 && t.fileSize + t.bytesWritten > t.maxSize && (t.archiveLog(t.file), n(t)),
                function(e, t) {
                    if (t.sync) try {
                        r.writeFileSync(t.file, e, t.writeOptions), c(e, t)
                    } catch (e) {
                        u("Couldn't write to " + t.file, e)
                    } else r.writeFile(t.file, e, t.writeOptions, (function(n) {
                        n ? u("Couldn't write to " + t.file, n) : c(e, t)
                    }))
                }(s.format(o, t.format, e, !0) + i, t)
        }

        function n(e) {
            if ((e = e || t).file = l(e), !e.file) return e.level = !1, void u("Could not set a log file");
            try {
                e.fileSize = r.statSync(e.file).size
            } catch (t) {
                e.fileSize = 0
            }
            e.bytesWritten = 0
        }

        function c(e, t) {
            t.bytesWritten += Buffer.byteLength(e, t.writeOptions.encoding)
        }

        function l(e) {
            return e.file || a(e.appName, e.fileName)
        }

        function u(t, n) {
            var r = ["electron-log.transports.file: " + t];
            n && r.push(n), e.transports.console({
                data: r,
                date: new Date,
                level: "warn"
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        i = n(0),
        o = n(15),
        s = n(21),
        a = n(164);

    function c(e) {
        if (!this || this.or !== c || !this.result) {
            if (!e) return {
                or: c
            };
            l(e = i.join.apply(i, arguments));
            try {
                r.accessSync(e, r.W_OK)
            } catch (e) {
                return {
                    or: c
                }
            }
        }
        return {
            or: c,
            result: !!this && this.result || e
        }
    }

    function l(e, t) {
        var n = e.split(i.sep);
        t = (t || "") + n.shift() + i.sep;
        try {
            r.mkdirSync(t)
        } catch (e) {
            if (!r.statSync(t).isDirectory()) throw new Error(e)
        }
        return !n.length || l(n.join(i.sep), t)
    }
    e.exports = function(e, t) {
        t = t || "log.log";
        var n = e ? null : s.getUserData();
        e = e || a();
        var r, l = o.homedir ? o.homedir() : process.env.HOME;
        switch (process.platform) {
            case "darwin":
                r = c(l, "Library", "Logs", e).or(n).or(l, "Library", "Application Support", e).result;
                break;
            case "win32":
                r = c(n).or(process.env.APPDATA, e).or(l, "AppData", "Roaming", e).result;
                break;
            default:
                r = c(n).or(process.env.XDG_CONFIG_HOME, e).or(l, ".config", e).or(process.env.XDG_DATA_HOME, e).or(l, ".local", "share", e).result
        }
        return !!r && i.join(r, t)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        i = n(0),
        o = n(21);

    function s(e) {
        for (var t; !t;) {
            var n;
            t = i.join(e, "package.json");
            try {
                r.statSync(t)
            } catch (r) {
                n = i.resolve(e, ".."), t = null
            }
            if (e === n) break;
            e = n
        }
        return t
    }

    function a(e) {
        console.warn(e)
    }
    e.exports = function() {
        var e = o.getElectronAppName();
        if (e) return e;
        try {
            return (e = function() {
                var e;
                try {
                    n.c[n.s].filename && (e = s(i.dirname(n.c[n.s].filename)))
                } catch (t) {
                    e = null
                }
                if (!e && process.resourcesPath) {
                    e = s(i.join(process.resourcesPath, "app.asar"));
                    var t = i.join("node_modules", "electron", "package.json");
                    e && -1 !== e.indexOf(t) && (e = null)
                }
                if (e || (e = s(process.cwd())), !e) return null;
                var o = r.readFileSync(e, "utf-8"),
                    a = JSON.parse(o);
                return !!a && (a.productName || a.name)
            }()) || a("electron-log: unable to load the app name from package.json")
        } catch (e) {
            return a("electron-log: " + e.message)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(70),
        i = n(166),
        o = n(11);

    function s(e) {
        if (s.url) {
            var t = function e(t, n) {
                if (n < 1) return Array.isArray(t) ? "[array]" : "object" == typeof t ? "[object]" : t;
                if (Array.isArray(t)) return t.map((function(t) {
                    return e(t, n - 1)
                }));
                if (t && "function" == typeof t.getMonth) return t;
                if (null === t) return null;
                if ("object" == typeof t) {
                    "function" == typeof t.toJSON && (t = t.toJSON());
                    var r = {};
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = e(t[i], n - 1));
                    return r
                }
                return t
            }({
                client: s.client,
                data: e.data,
                date: e.date.getTime(),
                level: e.level,
                styles: e.styles,
                variables: e.variables
            }, s.depth + 1);
            ! function(e, t) {
                var n = o.parse(e),
                    a = "https:" === n.protocol ? i : r,
                    c = JSON.stringify(t),
                    l = {
                        hostname: n.hostname,
                        port: n.port,
                        path: n.path,
                        method: "POST",
                        headers: {
                            "Content-Length": c.length,
                            "Content-Type": "application/json"
                        }
                    };
                Object.assign(l, s.requestOptions);
                var u = a.request(l);
                u.write(c), u.end()
            }(s.url, t)
        }
    }
    e.exports = function() {
        return s.client = {
            name: "electron-application"
        }, s.depth = 6, s.level = !1, s.requestOptions = {}, s.url = null, s
    }
}, function(e, t) {
    e.exports = require("https")
}, function(e, t, n) {
    "use strict";
    var r = n(34),
        i = n(21),
        o = "__ELECTRON_LOG_MAIN_CONSOLE__";
    e.exports = function(e) {
        switch (t.level = !!e.isDev && "silly", t.format = "[{h}:{i}:{s}.{ms}] {text}", process.type) {
            case "browser":
                return i.onIpcMain(o, (function(t, n) {
                    e.transports.console(n)
                })), null;
            case "renderer":
                try {
                    i.getRemote().require("electron-log")
                } catch (e) {}
                return t;
            default:
                return null
        }

        function t(e) {
            e.data = e.data.map(r.stringifyObject), i.sendIpcToMain(o, e)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(34),
        i = n(21),
        o = "__ELECTRON_LOG_RENDERER_CONSOLE__";
    e.exports = function(e) {
        switch (t.level = !!e.isDev && "silly", t.format = "[{h}:{i}:{s}.{ms}] {text}", process.type) {
            case "browser":
                return i.getElectronApp().on("web-contents-created", (function(e, t) {
                    t.executeJavaScript('try {require("electron-log")} catch(e){}')
                })), t;
            case "renderer":
                return i.onIpcRenderer(o, (function(t, n) {
                    e.transports.console(n)
                })), null;
            default:
                return null
        }

        function t(e) {
            e.data = e.data.map(r.stringifyObject), i.sendIpcToRenderer(o, e)
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var n, r;
        if (typeof e + typeof t != "stringstring") return !1;
        for (e = e.split("."), t = t.split("."), n = 0, r = Math.max(e.length, t.length); n < r; n++) {
            if (e[n] && !t[n] && parseInt(e[n]) > 0 || parseInt(e[n]) > parseInt(t[n])) return 1;
            if (t[n] && !e[n] && parseInt(t[n]) > 0 || parseInt(e[n]) < parseInt(t[n])) return -1
        }
        return 0
    }
}, function(e, t, n) {
    "use strict";
    const r = n(0),
        i = n(2),
        o = n(171),
        s = n(172);
    e.exports = function(e) {
        const t = i.app || i.remote.app,
            n = i.screen || i.remote.screen;
        let a, c, l;
        const u = Object.assign({
                file: "window-state.json",
                path: t.getPath("userData"),
                maximize: !0,
                fullScreen: !0
            }, e),
            p = r.join(u.path, u.file);

        function d() {
            return a && Number.isInteger(a.x) && Number.isInteger(a.y) && Number.isInteger(a.width) && a.width > 0 && Number.isInteger(a.height) && a.height > 0
        }

        function h() {
            const e = n.getPrimaryDisplay().bounds;
            a = {
                width: u.defaultWidth || 800,
                height: u.defaultHeight || 600,
                x: 0,
                y: 0,
                displayBounds: e
            }
        }

        function f(e) {
            if (e = e || c) try {
                const t = e.getBounds();
                (function(e) {
                    return !e.isMaximized() && !e.isMinimized() && !e.isFullScreen()
                })(e) && (a.x = t.x, a.y = t.y, a.width = t.width, a.height = t.height), a.isMaximized = e.isMaximized(), a.isFullScreen = e.isFullScreen(), a.displayBounds = n.getDisplayMatching(t).bounds
            } catch (e) {}
        }

        function g(e) {
            e && f(e);
            try {
                s.sync(r.dirname(p)), o.writeFileSync(p, a)
            } catch (e) {}
        }

        function m() {
            clearTimeout(l), l = setTimeout(f, 100)
        }

        function v() {
            f()
        }

        function y() {
            w(), g()
        }

        function w() {
            c && (c.removeListener("resize", m), c.removeListener("move", m), clearTimeout(l), c.removeListener("close", v), c.removeListener("closed", y), c = null)
        }
        try {
            a = o.readFileSync(p)
        } catch (e) {}
        return a && (d() || a.isMaximized || a.isFullScreen) ? d() && a.displayBounds && (n.getAllDisplays().some(e => function(e) {
            return a.x >= e.x && a.y >= e.y && a.x + a.width <= e.x + e.width && a.y + a.height <= e.y + e.height
        }(e.bounds)) || h()) : a = null, a = Object.assign({
            width: u.defaultWidth || 800,
            height: u.defaultHeight || 600
        }, a), {
            get x() {
                return a.x
            },
            get y() {
                return a.y
            },
            get width() {
                return a.width
            },
            get height() {
                return a.height
            },
            get displayBounds() {
                return a.displayBounds
            },
            get isMaximized() {
                return a.isMaximized
            },
            get isFullScreen() {
                return a.isFullScreen
            },
            saveState: g,
            unmanage: w,
            manage: function(e) {
                u.maximize && a.isMaximized && e.maximize(), u.fullScreen && a.isFullScreen && e.setFullScreen(!0), e.on("resize", m), e.on("move", m), e.on("close", v), e.on("closed", y), c = e
            },
            resetStateToDefault: h
        }
    }
}, function(e, t, n) {
    var r;
    try {
        r = n(4)
    } catch (e) {
        r = n(3)
    }

    function i(e, t) {
        var n, r = "\n";
        return "object" == typeof t && null !== t && (t.spaces && (n = t.spaces), t.EOL && (r = t.EOL)), JSON.stringify(e, t ? t.replacer : null, n).replace(/\n/g, r) + r
    }

    function o(e) {
        return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "")
    }
    var s = {
        readFile: function(e, t, n) {
            null == n && (n = t, t = {}), "string" == typeof t && (t = {
                encoding: t
            });
            var i = (t = t || {}).fs || r,
                s = !0;
            "throws" in t && (s = t.throws), i.readFile(e, t, (function(r, i) {
                if (r) return n(r);
                var a;
                i = o(i);
                try {
                    a = JSON.parse(i, t ? t.reviver : null)
                } catch (t) {
                    return s ? (t.message = e + ": " + t.message, n(t)) : n(null, null)
                }
                n(null, a)
            }))
        },
        readFileSync: function(e, t) {
            "string" == typeof(t = t || {}) && (t = {
                encoding: t
            });
            var n = t.fs || r,
                i = !0;
            "throws" in t && (i = t.throws);
            try {
                var s = n.readFileSync(e, t);
                return s = o(s), JSON.parse(s, t.reviver)
            } catch (t) {
                if (i) throw t.message = e + ": " + t.message, t;
                return null
            }
        },
        writeFile: function(e, t, n, o) {
            null == o && (o = n, n = {});
            var s = (n = n || {}).fs || r,
                a = "";
            try {
                a = i(t, n)
            } catch (e) {
                return void(o && o(e, null))
            }
            s.writeFile(e, a, n, o)
        },
        writeFileSync: function(e, t, n) {
            var o = (n = n || {}).fs || r,
                s = i(t, n);
            return o.writeFileSync(e, s, n)
        }
    };
    e.exports = s
}, function(e, t, n) {
    var r = n(0),
        i = n(3),
        o = parseInt("0777", 8);

    function s(e, t, n, a) {
        "function" == typeof t ? (n = t, t = {}) : t && "object" == typeof t || (t = {
            mode: t
        });
        var c = t.mode,
            l = t.fs || i;
        void 0 === c && (c = o), a || (a = null);
        var u = n || function() {};
        e = r.resolve(e), l.mkdir(e, c, (function(n) {
            if (!n) return u(null, a = a || e);
            switch (n.code) {
                case "ENOENT":
                    if (r.dirname(e) === e) return u(n);
                    s(r.dirname(e), t, (function(n, r) {
                        n ? u(n, r) : s(e, t, u, r)
                    }));
                    break;
                default:
                    l.stat(e, (function(e, t) {
                        e || !t.isDirectory() ? u(n, a) : u(null, a)
                    }))
            }
        }))
    }
    e.exports = s.mkdirp = s.mkdirP = s, s.sync = function e(t, n, s) {
        n && "object" == typeof n || (n = {
            mode: n
        });
        var a = n.mode,
            c = n.fs || i;
        void 0 === a && (a = o), s || (s = null), t = r.resolve(t);
        try {
            c.mkdirSync(t, a), s = s || t
        } catch (i) {
            switch (i.code) {
                case "ENOENT":
                    s = e(r.dirname(t), n, s), e(t, n, s);
                    break;
                default:
                    var l;
                    try {
                        l = c.statSync(t)
                    } catch (t) {
                        throw i
                    }
                    if (!l.isDirectory()) throw i
            }
        }
        return s
    }
}, function(e, t, n) {
    "use strict";
    const r = n(2),
        i = n(174),
        o = n(178),
        {
            app: s,
            BrowserWindow: a
        } = r,
        c = "darwin" === process.platform,
        l = {};

    function u(e = a.getFocusedWindow()) {
        e && function(e = a.getFocusedWindow()) {
            if (e) {
                const {
                    webContents: t
                } = e;
                t.isDevToolsOpened() ? t.closeDevTools() : t.openDevTools(l)
            }
        }(e)
    }

    function p(e = a.getFocusedWindow()) {
        e && e.webContents.openDevTools(l)
    }

    function d(e = a.getFocusedWindow()) {
        e && e.webContents.reloadIgnoringCache()
    }

    function h() {
        const e = a.getFocusedWindow(),
            t = () => {
                e.devToolsWebContents.executeJavaScript("DevToolsAPI.enterInspectElementMode()")
            };
        e && (e.webContents.isDevToolsOpened() ? t() : (e.webContents.once("devtools-opened", t), e.openDevTools()))
    }
    const f = (e, t) => {
        try {
            (e => a.getDevToolsExtensions && {}.hasOwnProperty.call(a.getDevToolsExtensions(), e))(e) || a.addDevToolsExtension(t(e))
        } catch (e) {}
    };
    e.exports = e => {
        !1 === (e = Object.assign({
            enabled: null,
            showDevTools: !0,
            devToolsMode: "undocked"
        }, e)).enabled || null === e.enabled && !o || ("previous" !== e.devToolsMode && (l.mode = e.devToolsMode), s.on("browser-window-created", (t, n) => {
            e.showDevTools && (n.webContents.once("devtools-opened", () => {
                setImmediate(() => {
                    n.focus()
                })
            }), n.webContents.once("dom-ready", () => {
                p(n, e.showDevTools)
            }))
        }), s.on("ready", () => {
            f("devtron", e => n(72)(e).path), f("electron-react-devtools", e => n(72)(e).path), i.register("CmdOrCtrl+Shift+C", h), i.register(c ? "Cmd+Alt+I" : "Ctrl+Shift+I", u), i.register("F12", u), i.register("CmdOrCtrl+R", d), i.register("F5", d)
        }))
    }, e.exports.default = e.exports, e.exports.refresh = d, e.exports.devTools = u, e.exports.openDevTools = p
}, function(e, t, n) {
    "use strict";
    const {
        app: r,
        BrowserWindow: i
    } = n(2), o = n(175), s = n(176), {
        toKeyEvent: a
    } = n(177), c = n(51)("electron-localshortcut"), l = {}, u = new WeakMap, p = e => {
        if (e) try {
            return e.getTitle()
        } catch (e) {
            return "A destroyed window"
        }
        return "An falsy value"
    };

    function d(e) {
        if (!o(e)) {
            const t = {};
            Error.captureStackTrace(t);
            const n = `\nWARNING: ${e} is not a valid accelerator.\n\n${t.stack?t.stack.split("\n").slice(4).join("\n"):t.message}\n`;
            console.error(n)
        }
    }

    function h(e, t) {
        let n = 0;
        for (const r of t) {
            if (s(r.eventStamp, e)) return n;
            n++
        }
        return -1
    }
    const f = e => (t, n) => {
        if ("keyUp" === n.type) return;
        const r = function(e) {
            const t = {
                code: e.code,
                key: e.key
            };
            return ["alt", "shift", "meta"].forEach(n => {
                void 0 !== e[n] && (t[n + "Key"] = e[n])
            }), void 0 !== e.control && (t.ctrlKey = e.control), t
        }(n);
        c(`before-input-event: ${n} is translated to: ${r}`);
        for (const {
                eventStamp: t,
                callback: n
            }
            of e) {
            if (s(t, r)) return c(`eventStamp: ${t} match`), void n();
            c(`eventStamp: ${t} no match`)
        }
    };
    e.exports = {
        register: function e(t, n, o) {
            let s, h;
            if (void 0 === o ? (s = l, o = n, n = t) : s = t.webContents, !0 === Array.isArray(n)) return void n.forEach(n => {
                "string" == typeof n && e(t, n, o)
            });
            if (c(`Registering callback for ${n} on window ${p(t)}`), d(n), c(n + " seems a valid shortcut sequence."), u.has(s)) c("Window has others shortcuts registered."), h = u.get(s);
            else if (c("This is the first shortcut of the window."), h = [], u.set(s, h), s === l) {
                const e = f(h),
                    t = (t, n) => {
                        const r = n.webContents;
                        r.on("before-input-event", e), r.once("closed", () => r.removeListener("before-input-event", e))
                    };
                i.getAllWindows().forEach(e => t(null, e)), r.on("browser-window-created", t), h.removeListener = () => {
                    i.getAllWindows().forEach(t => t.webContents.removeListener("before-input-event", e)), r.removeListener("browser-window-created", t)
                }
            } else {
                const e = f(h);
                s.on("before-input-event", e), h.removeListener = () => s.removeListener("before-input-event", e), s.once("closed", h.removeListener)
            }
            c("Adding shortcut to window set.");
            const g = a(n);
            h.push({
                eventStamp: g,
                callback: o,
                enabled: !0
            }), c("Shortcut registered.")
        },
        unregister: function e(t, n) {
            let r;
            if (void 0 === n) r = l, n = t;
            else {
                if (t.isDestroyed()) return void c("Early return because window is destroyed.");
                r = t.webContents
            }
            if (!0 === Array.isArray(n)) return void n.forEach(n => {
                "string" == typeof n && e(t, n)
            });
            if (c(`Unregistering callback for ${n} on window ${p(t)}`), d(n), c(n + " seems a valid shortcut sequence."), !u.has(r)) return void c("Early return because window has never had shortcuts registered.");
            const i = u.get(r),
                o = h(a(n), i); - 1 !== o && (i.splice(o, 1), 0 === i.length && (i.removeListener(), u.delete(r)))
        },
        isRegistered: function(e, t) {
            d(t);
            const n = e.webContents,
                r = u.get(n);
            return -1 !== h(a(t), r)
        },
        unregisterAll: function(e) {
            c("Unregistering all shortcuts on window " + p(e));
            const t = e.webContents,
                n = u.get(t);
            n && n.removeListener && (n.removeListener(), u.delete(t))
        },
        enableAll: function(e) {
            c("Enabling all shortcuts on window " + p(e));
            const t = e.webContents,
                n = u.get(t);
            for (const e of n) e.enabled = !0
        },
        disableAll: function(e) {
            c("Disabling all shortcuts on window " + p(e));
            const t = e.webContents,
                n = u.get(t);
            for (const e of n) e.enabled = !1
        }
    }
}, function(e, t, n) {
    "use strict";
    const r = /^(Command|Cmd|Control|Ctrl|CommandOrControl|CmdOrCtrl|Alt|Option|AltGr|Shift|Super)$/,
        i = /^([0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]']|F1*[1-9]|F10|F2[0-4]|Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen)$/;
    e.exports = function(e) {
        let t = e.split("+"),
            n = !1;
        return t.every((e, o) => {
            const s = i.test(e),
                a = r.test(e);
            if (s) {
                if (n) return !1;
                n = !0
            }
            return !(o === t.length - 1 && !n) && (s || a)
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return "string" != typeof e ? e : e.toLowerCase()
    }
    e.exports = function(e, t) {
        if (e === t) return !0;
        for (const n of ["altKey", "ctrlKey", "shiftKey", "metaKey"]) {
            const [r, i] = [e[n], t[n]];
            if (Boolean(r) !== Boolean(i)) return !1
        }
        return r(e.key) === r(t.key) && void 0 !== e.key || e.code === t.code && void 0 !== e.code
    }
}, function(e, t) {
    const n = /^(CommandOrControl|CmdOrCtrl|Command|Cmd|Control|Ctrl|AltGr|Option|Alt|Shift|Super)/i,
        r = /^(Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen|F24|F23|F22|F21|F20|F19|F18|F17|F16|F15|F14|F13|F12|F11|F10|F9|F8|F7|F6|F5|F4|F3|F2|F1|[0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]'])/i,
        i = {};

    function o({
        accelerator: e,
        event: t
    }, n) {
        switch (n) {
            case "command":
            case "cmd":
                return function(e, t, n) {
                    if ("darwin" !== process.platform) return i;
                    if (t.metaKey) throw new Error("Double `Command` modifier specified.");
                    return {
                        event: Object.assign({}, t, {
                            metaKey: !0
                        }),
                        accelerator: e.slice(n.length)
                    }
                }(e, t, n);
            case "super":
                return function(e, t, n) {
                    if (t.metaKey) throw new Error("Double `Super` modifier specified.");
                    return {
                        event: Object.assign({}, t, {
                            metaKey: !0
                        }),
                        accelerator: e.slice(n.length)
                    }
                }(e, t, n);
            case "control":
            case "ctrl":
                return function(e, t, n) {
                    if (t.ctrlKey) throw new Error("Double `Control` modifier specified.");
                    return {
                        event: Object.assign({}, t, {
                            ctrlKey: !0
                        }),
                        accelerator: e.slice(n.length)
                    }
                }(e, t, n);
            case "commandorcontrol":
            case "cmdorctrl":
                return function(e, t, n) {
                    if ("darwin" === process.platform) {
                        if (t.metaKey) throw new Error("Double `Command` modifier specified.");
                        return {
                            event: Object.assign({}, t, {
                                metaKey: !0
                            }),
                            accelerator: e.slice(n.length)
                        }
                    }
                    if (t.ctrlKey) throw new Error("Double `Control` modifier specified.");
                    return {
                        event: Object.assign({}, t, {
                            ctrlKey: !0
                        }),
                        accelerator: e.slice(n.length)
                    }
                }(e, t, n);
            case "option":
            case "altgr":
            case "alt":
                return function(e, t, n) {
                    if ("option" === n && "darwin" !== process.platform) return i;
                    if (t.altKey) throw new Error("Double `Alt` modifier specified.");
                    return {
                        event: Object.assign({}, t, {
                            altKey: !0
                        }),
                        accelerator: e.slice(n.length)
                    }
                }(e, t, n);
            case "shift":
                return function(e, t, n) {
                    if (t.shiftKey) throw new Error("Double `Shift` modifier specified.");
                    return {
                        event: Object.assign({}, t, {
                            shiftKey: !0
                        }),
                        accelerator: e.slice(n.length)
                    }
                }(e, t, n);
            default:
                console.error(n)
        }
    }

    function s({
        accelerator: e,
        event: t
    }) {
        return {
            event: t,
            accelerator: e.trim().slice(1)
        }
    }
    const a = {
        0: "Digit0",
        1: "Digit1",
        2: "Digit2",
        3: "Digit3",
        4: "Digit4",
        5: "Digit5",
        6: "Digit6",
        7: "Digit7",
        8: "Digit8",
        9: "Digit9",
        "-": "Minus",
        "=": "Equal",
        Q: "KeyQ",
        W: "KeyW",
        E: "KeyE",
        R: "KeyR",
        T: "KeyT",
        Y: "KeyY",
        U: "KeyU",
        I: "KeyI",
        O: "KeyO",
        P: "KeyP",
        "[": "BracketLeft",
        "]": "BracketRight",
        A: "KeyA",
        S: "KeyS",
        D: "KeyD",
        F: "KeyF",
        G: "KeyG",
        H: "KeyH",
        J: "KeyJ",
        K: "KeyK",
        L: "KeyL",
        ";": "Semicolon",
        "'": "Quote",
        "`": "Backquote",
        "/": "Backslash",
        Z: "KeyZ",
        X: "KeyX",
        C: "KeyC",
        V: "KeyV",
        B: "KeyB",
        N: "KeyN",
        M: "KeyM",
        ",": "Comma",
        ".": "Period",
        "\\": "Slash",
        " ": "Space"
    };

    function c({
        accelerator: e,
        event: t
    }, n) {
        if (n.length > 1 || t.key) throw new Error(`Unvalid keycode \`${n}\`.`);
        const r = n.toUpperCase() in a ? a[n.toUpperCase()] : null;
        return {
            event: Object.assign({}, t, {
                key: n
            }, r ? {
                code: r
            } : null),
            accelerator: e.trim().slice(n.length)
        }
    }
    const l = Object.assign(Object.create(null), {
        plus: "Add",
        space: "Space",
        tab: "Tab",
        backspace: "Backspace",
        delete: "Delete",
        insert: "Insert",
        return: "Return",
        enter: "Return",
        up: "ArrowUp",
        down: "ArrowDown",
        left: "ArrowLeft",
        right: "ArrowRight",
        home: "Home",
        end: "End",
        pageup: "PageUp",
        pagedown: "PageDown",
        escape: "Escape",
        esc: "Escape",
        volumeup: "AudioVolumeUp",
        volumedown: "AudioVolumeDown",
        volumemute: "AudioVolumeMute",
        medianexttrack: "MediaTrackNext",
        mediaprevioustrack: "MediaTrackPrevious",
        mediastop: "MediaStop",
        mediaplaypause: "MediaPlayPause",
        printscreen: "PrintScreen"
    });
    for (let e = 1; e <= 24; e++) l["f" + e] = "F" + e;

    function u({
        accelerator: e,
        event: t
    }, {
        code: n,
        key: r
    }) {
        if (t.code) throw new Error(`Duplicated keycode \`${r}\`.`);
        return {
            event: Object.assign({}, t, {
                key: r
            }, n ? {
                code: n
            } : null),
            accelerator: e.trim().slice(r && r.length || 0)
        }
    }
    e.exports = {
        UNSUPPORTED: i,
        reduceModifier: o,
        reducePlus: s,
        reduceKey: c,
        reduceCode: u,
        toKeyEvent: function(e) {
            let t = {
                accelerator: e,
                event: {}
            };
            for (;
                "" !== t.accelerator;) {
                const e = t.accelerator.match(n);
                if (e) {
                    if (t = o(t, e[0].toLowerCase()), t === i) return {
                        unsupportedKeyForPlatform: !0
                    }
                } else if ("+" === t.accelerator.trim()[0]) t = s(t);
                else {
                    const e = t.accelerator.match(r);
                    if (!e) throw new Error(`Unvalid accelerator: "${t.accelerator}"`);
                    {
                        const n = e[0].toLowerCase();
                        t = n in l ? u(t, {
                            code: l[n],
                            key: n
                        }) : c(t, n)
                    }
                }
            }
            return t.event
        }
    }
}, function(e, t, n) {
    "use strict";
    const r = 1 === parseInt(process.env.ELECTRON_IS_DEV, 10),
        i = "ELECTRON_IS_DEV" in process.env;
    e.exports = i ? r : process.defaultApp || /node_modules[\\/]electron[\\/]/.test(process.execPath)
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(2),
        o = n(47),
        s = r(n(180));
    const a = n(0),
        c = n(3),
        l = i.app.getPath("desktop") + "/Atomic-Exports",
        u = a.normalize(i.app.getPath("cache") + o.CACHE_DIR),
        p = (e, t, n) => {
            try {
                return c.existsSync(t) || c.mkdirSync(t), c.writeFileSync(`${t}/${e}`, n), !0
            } catch (e) {
                return console.error(e), !1
            }
        };
    i.ipcMain.handle("exportTransactions", (e, {
        fileName: t,
        body: n
    }) => p(t, l, n)), i.ipcMain.handle("saveToCache", (e, {
        uri: t,
        body: n
    }) => p((0, s.default)(t), u, n)), i.ipcMain.handle("saveToDesktop", (e, {
        uri: t,
        body: n
    }) => p(t, l, n)), i.ipcMain.handle("getFileFromCache", async (e, t) => {
        const n = `${u}/${(0,s.default)(t)}`;
        return {
            buf: await c.promises.readFile(n, {
                encoding: "base64"
            }),
            path: a.resolve(n)
        }
    })
}, function(e, t, n) {
    var r, i, o, s, a;
    r = n(181), i = n(73).utf8, o = n(182), s = n(73).bin, (a = function(e, t) {
        e.constructor == String ? e = t && "binary" === t.encoding ? s.stringToBytes(e) : i.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
        for (var n = r.bytesToWords(e), c = 8 * e.length, l = 1732584193, u = -271733879, p = -1732584194, d = 271733878, h = 0; h < n.length; h++) n[h] = 16711935 & (n[h] << 8 | n[h] >>> 24) | 4278255360 & (n[h] << 24 | n[h] >>> 8);
        n[c >>> 5] |= 128 << c % 32, n[14 + (c + 64 >>> 9 << 4)] = c;
        var f = a._ff,
            g = a._gg,
            m = a._hh,
            v = a._ii;
        for (h = 0; h < n.length; h += 16) {
            var y = l,
                w = u,
                E = p,
                b = d;
            l = f(l, u, p, d, n[h + 0], 7, -680876936), d = f(d, l, u, p, n[h + 1], 12, -389564586), p = f(p, d, l, u, n[h + 2], 17, 606105819), u = f(u, p, d, l, n[h + 3], 22, -1044525330), l = f(l, u, p, d, n[h + 4], 7, -176418897), d = f(d, l, u, p, n[h + 5], 12, 1200080426), p = f(p, d, l, u, n[h + 6], 17, -1473231341), u = f(u, p, d, l, n[h + 7], 22, -45705983), l = f(l, u, p, d, n[h + 8], 7, 1770035416), d = f(d, l, u, p, n[h + 9], 12, -1958414417), p = f(p, d, l, u, n[h + 10], 17, -42063), u = f(u, p, d, l, n[h + 11], 22, -1990404162), l = f(l, u, p, d, n[h + 12], 7, 1804603682), d = f(d, l, u, p, n[h + 13], 12, -40341101), p = f(p, d, l, u, n[h + 14], 17, -1502002290), l = g(l, u = f(u, p, d, l, n[h + 15], 22, 1236535329), p, d, n[h + 1], 5, -165796510), d = g(d, l, u, p, n[h + 6], 9, -1069501632), p = g(p, d, l, u, n[h + 11], 14, 643717713), u = g(u, p, d, l, n[h + 0], 20, -373897302), l = g(l, u, p, d, n[h + 5], 5, -701558691), d = g(d, l, u, p, n[h + 10], 9, 38016083), p = g(p, d, l, u, n[h + 15], 14, -660478335), u = g(u, p, d, l, n[h + 4], 20, -405537848), l = g(l, u, p, d, n[h + 9], 5, 568446438), d = g(d, l, u, p, n[h + 14], 9, -1019803690), p = g(p, d, l, u, n[h + 3], 14, -187363961), u = g(u, p, d, l, n[h + 8], 20, 1163531501), l = g(l, u, p, d, n[h + 13], 5, -1444681467), d = g(d, l, u, p, n[h + 2], 9, -51403784), p = g(p, d, l, u, n[h + 7], 14, 1735328473), l = m(l, u = g(u, p, d, l, n[h + 12], 20, -1926607734), p, d, n[h + 5], 4, -378558), d = m(d, l, u, p, n[h + 8], 11, -2022574463), p = m(p, d, l, u, n[h + 11], 16, 1839030562), u = m(u, p, d, l, n[h + 14], 23, -35309556), l = m(l, u, p, d, n[h + 1], 4, -1530992060), d = m(d, l, u, p, n[h + 4], 11, 1272893353), p = m(p, d, l, u, n[h + 7], 16, -155497632), u = m(u, p, d, l, n[h + 10], 23, -1094730640), l = m(l, u, p, d, n[h + 13], 4, 681279174), d = m(d, l, u, p, n[h + 0], 11, -358537222), p = m(p, d, l, u, n[h + 3], 16, -722521979), u = m(u, p, d, l, n[h + 6], 23, 76029189), l = m(l, u, p, d, n[h + 9], 4, -640364487), d = m(d, l, u, p, n[h + 12], 11, -421815835), p = m(p, d, l, u, n[h + 15], 16, 530742520), l = v(l, u = m(u, p, d, l, n[h + 2], 23, -995338651), p, d, n[h + 0], 6, -198630844), d = v(d, l, u, p, n[h + 7], 10, 1126891415), p = v(p, d, l, u, n[h + 14], 15, -1416354905), u = v(u, p, d, l, n[h + 5], 21, -57434055), l = v(l, u, p, d, n[h + 12], 6, 1700485571), d = v(d, l, u, p, n[h + 3], 10, -1894986606), p = v(p, d, l, u, n[h + 10], 15, -1051523), u = v(u, p, d, l, n[h + 1], 21, -2054922799), l = v(l, u, p, d, n[h + 8], 6, 1873313359), d = v(d, l, u, p, n[h + 15], 10, -30611744), p = v(p, d, l, u, n[h + 6], 15, -1560198380), u = v(u, p, d, l, n[h + 13], 21, 1309151649), l = v(l, u, p, d, n[h + 4], 6, -145523070), d = v(d, l, u, p, n[h + 11], 10, -1120210379), p = v(p, d, l, u, n[h + 2], 15, 718787259), u = v(u, p, d, l, n[h + 9], 21, -343485551), l = l + y >>> 0, u = u + w >>> 0, p = p + E >>> 0, d = d + b >>> 0
        }
        return r.endian([l, u, p, d])
    })._ff = function(e, t, n, r, i, o, s) {
        var a = e + (t & n | ~t & r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
    }, a._gg = function(e, t, n, r, i, o, s) {
        var a = e + (t & r | n & ~r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
    }, a._hh = function(e, t, n, r, i, o, s) {
        var a = e + (t ^ n ^ r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
    }, a._ii = function(e, t, n, r, i, o, s) {
        var a = e + (n ^ (t | ~r)) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
    }, a._blocksize = 16, a._digestsize = 16, e.exports = function(e, t) {
        if (null == e) throw new Error("Illegal argument " + e);
        var n = r.wordsToBytes(a(e, t));
        return t && t.asBytes ? n : t && t.asString ? s.bytesToString(n) : r.bytesToHex(n)
    }
}, function(e, t) {
    var n, r;
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
        rotl: function(e, t) {
            return e << t | e >>> 32 - t
        },
        rotr: function(e, t) {
            return e << 32 - t | e >>> t
        },
        endian: function(e) {
            if (e.constructor == Number) return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
            for (var t = 0; t < e.length; t++) e[t] = r.endian(e[t]);
            return e
        },
        randomBytes: function(e) {
            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
            return t
        },
        bytesToWords: function(e) {
            for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
            return t
        },
        wordsToBytes: function(e) {
            for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
            return t
        },
        bytesToHex: function(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
            return t.join("")
        },
        hexToBytes: function(e) {
            for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
            return t
        },
        bytesToBase64: function(e) {
            for (var t = [], r = 0; r < e.length; r += 3)
                for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? t.push(n.charAt(i >>> 6 * (3 - o) & 63)) : t.push("=");
            return t.join("")
        },
        base64ToBytes: function(e) {
            e = e.replace(/[^A-Z0-9+\/]/gi, "");
            for (var t = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && t.push((n.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | n.indexOf(e.charAt(r)) >>> 6 - 2 * i);
            return t
        }
    }, e.exports = r
}, function(e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    e.exports = function(e) {
        return null != e && (n(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(2);
    r.ipcMain.on("openExternal", (e, t) => {
        r.shell.openExternal(t)
    })
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(2),
        o = r(n(185));
    const s = i.nativeImage.createFromDataURL(o.default);
    i.ipcMain.on("txNotification", (e, t) => {
        const n = new i.Notification((({
            amount: e,
            ticker: t
        }) => ({
            title: "Incoming transaction",
            body: `+ ${e} ${t}`,
            icon: "darwin" !== process.platform ? s : void 0
        }))(t));
        n.show(), n.on("click", () => e.reply("txNotification", !0))
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0, t.default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAADgwSURBVHgB7Z1rkF3VdaDXPv1QSwLUYCOMseEKjC0kBMJBxHZSUeOacWzIlJukwJnyVCFSUzU1SaqMf9hV+TPA/ElmnCrDD3t+AlOVqhgyppkacKYcD63JeAYjYlogCdk8dOX4wcM2jQE9Wn3Pnr32c+19zu2+j3Nv38f6VK1z7nndfe69a+312vsIYIaaWm1+FrZADSbUH8BsJtRSwjaAbFaCxG0ghN7nT1nnknW3IqVZFyDUMl9WK2/nuA3/cliGU1Cv1xeWgRlaBDADDxHyvRnA9Vq4hdwrjDDPwsayLJXSEFIpCZEfVgpiSSmI5fqRhUVgBh5WAAOGFvbzlKBnsBdkdj0IOQfr99oDiVIMS1YxHMxzpRjehSW2GAYLVgAbjBb482Eee3YpxJz6QvbCCGOUglzMAQ7COaUQji/UgdkwWAH0Gd/DC/i8cs7nYUh796qwVsJSDvnj8A4ssoXQX1gB9AEU+uwCOCCl+LwKyGEPv9F++8CiAo+LGciHG+eUMmDroOewAugRRuizL0kp55TQzwHTNqgMhJCP5yuwwMqgN7ACqJCkp58DpjLYMugNrAAqoHbtvOrlxT1s3vcJKR7CmEH9hYUFYLqCFUCHOBNf/RrvBhb6jaIOkN2frzQeZ6ugM1gBtAn29plQgi/kPDCDA1oFMn+YC5DagxVAixAzfw6YgcXFCl55YeEhYNaFFcA61PbMH8iU4MOY5+uHkLqQ8j5WBGvDCqAJLPgjAyuCNWAFkMCCP7KwIiiBFYCFffyxgRUBYewVQG3X/F4xIb7Ogj9mSLGQn8u/PO7pw7FVADaPf4/N4zPjCqYPz+X3jasimIAx5Mrr/uhLYhNgFdkcMOONALQA5y/avvPtt944vgRjxlhZAGzuM+tQz1fkzeNkDYyNBXDldX94j8jgb5P58RiGMqs6iLsvvGQXvPX6iwdhDBh5C0D3+pPiwVGfaYepnLGwBjIYYbDXzybFcyz8TAfUsmlxAn9DMMKMpAVQ2zlfE9PiMRZ8piJG1hoYuRiAjvBPKF+fK/mY6sDYwIELL9l59q3Xjz8NI8TIWACc12f6ghT35xP5ffWl0Zi8dCQUAJr8yl97CrjXZ/rDyLgEQx8EvOq6P7pTCf9zwMLP9A/scJ67as/8ARhyhjoGYCK08n61OgMM019m8LkOw14zMJQugPb3z88e5Gm5mIEABxZN5HcNY1xg6BQA+/vMgDKUcYGhigFgVR8LPzOg6I4JOygYIoZGAejZeCdZ+JmBRgcHa3vmh8Y1HYogIEb6hdDDdznYxww6M0KIP77wkp1vD0PR0MArABLpZ5ghQnx2GDIEA60ArPDfCwwznMwNuhIYWAXAws+MCAOtBAZSAbDwMyPGwCqBgVMALPzMiDKQSmCgFAALPzPiDJwSGBgFwMLPjAkDpQQGQgHgJB5K+P8KGGY8mLvokt11pQQOwwaz4WMBsGoqE+IxYJgxI8/lzfUjC4uwgWyoArADe3As/ywwzPixnK8qJXBsYcMeSLJhYwHIqD4WfmZcmc0mxWMbOYBoQywAM38fz+LTDyYv2g4zV++C6Q/vgGxmK0x/qAZiZgtMvm97dFzj12/A6q/fhMap92Dlp3U497O6Xq6q7UzPqeeZvGEj5hOYhA1AT+YBsgZMT9j0kd2w5fp9sGXPPiXol8Q7pVRqP9b7+GpCKQr8Q7Zcd5M6zuxoKKVw+qUj8N7Ti3Dm5aPA9IRa1kCZgNugz/TdAuB0X2/INm+F8+duhQvUH667b1YqgRfuBS6sYEf73HYI+/C1P9TuR2vgN4tPwOnnD7Fl0BPEva8+/+37oI/0VQGoiP8BFfF/EJjKKAq+0L28Ft7k25UyrJd98U7g6ZJqDLpv+TuPwLs/WNSuA1MdArIDrzz/3x6GPtE3BcAR/+pBwZ/93BdAbN7iTftUgGnnDtLpB9XzW+0g04tKe5aIjAF9vHQaxF4HrQBUBO8pRcBUxnK+ouIBfZparC8KgIN+1YK++vu/+Gfa1zcQuz5IeViWfM1oIwi63WsKczw9Ve+il4uOBzj1wjPw1rcfYmugOvoWFOxLJeBFl+/6S7X4LDBdg0J/8b/9KkxftoP05EGQtaAC3Vau46nwU2VgBL38nILSsExdcpkKHO7TQcL8nZF4YM5GMyvybOatN178n9Bjeq4AbJnvvcB0zfn7b4X33Xm39vW1kDqT3yoCJ7z0NYptvI0eWxR4b+qLIOrSWwb22BKjQqgU4/m/+xnIT78LKydfAqZLBHyiH9OK9VQB6Kf0TsDfAs/l1zUXfPZ2mP1X/wZM3y0i313E3rrfqv93Qk+dem3ix+e4aL9TEPo9nAKx/4rWRNwKZOaaG/TaWU4ZVoD4xLYLd35r+ZfHe2ZW9bQSkCv9quGCz94B2z77Bf9aJqE7Cb5/tlt8ns/uMArDuQco5OYvHGv2G2WgTyPOfrg+JO8kojVzjrTtvQOYrpnFx9xDD+mZBWDy/cBP7umS8/f/ger5vxhtC35+XNRDo/saERSBN90hqQvwJ0NJ8DBkAArH+fWwLdPnmX0Yq2i89aauKGQ6R32aH1CugFCuwCL0gJ4oAGv6LwDTFVOX1eB9f/IVa/LLaGmIi3h8II/012mQMFIYvjcP10ldCxovCNaEjN6rLKCIyxmlBM4cX+LAYNeIuW3v2/n48pvHX4OK6YkLYE1/pgt0qu9PvgrOBBfJUrp/rqeWfosxDCD48c7kNwe6cwFCPEHGSoQIurlWcAncec4tKFM6/sozW/Q9ZFinwHSFmOxNAV3lFgCb/tUwO38ANl2125vjsRmeBPv8qu3tienvd9LoPTHjzRnC+/9Aa399lgGaXJMaIMFtMG9njsm2nAfTV3wUTh1aBKZzeuUKVKoA2PSvhq375lQg7QvEb4cgwBYqy1lk1gNxFeJtrp8mYTsoBA496euy7UFpmExD2E+vPHHRxSBPn+L0YNdU7wpU6gKw6d89Exdu18KvrW9qVSeR+WCyh+i9M+nd8e4IWiAcF/JQFZG8WQnOzSjZEdUbS3854dt6we/fwa5ABYgJ8XWokMosABzoo3qsA8B0BZr+08r0d/21CcLZLDytxy/FnKXz+CUVgqVn2ON8ipAU/DjFIkQ4NrgLQI6jwUZBWkMChpNTyo+dhrM/2rDJb0YC9THXqiwQqsQC0AN9hLgHmK7A3n/Lvpv1uhNEl1t3efq4KIea78EblxKi4J8TWFE4HiJhDhF9Qc6h14KCceDa5PYXrieEyz7Ceb/3BzD1wRow3SLuqe2dr6S+phIFkE0BCn8NmK644PdvD9JLhZWY87ERbgWWRPh9xQ8Et8BH9d11qSQ7ofUWAIRreYsgtCfEE0ibvNCTdkuI3RYbzNz2+QPAdM1s1sgq6XC7VgB6PjM2/btG9/433hwLoBdmsiQ9t3O9XQ9LDPPk/FDfH5L6grjuJnPgFIHx9YNiwOIemm7MyXZ6vdA2pz+Eb4M7H90bnd1gukPIu2u75vdCl3StALKprNKgxLhywWduh1BEQ7HCCVQgQ5otVOwFBeFLeiEs9XXzYMa7qL3L+4dAogQaKgxJCFFwJdKQYKHeQMblxo4tN84B0z1VBAS7UgAY+FOaiHP+XYK9/2aV+qMms+u8tZDlwUT3+3KnLEhvT5QH7c2jVCKQ9wiyai2IkDwMpn7w71Nl4V/noY0AUJKJgMhC2awUAGcEukd9nXO1a+fnoAu6UgAc+KuGTVftKvjV4IfkiiC4bjcxx6PwvvPl3VBhQc6VcT+Mk32u/uIknH3laJjIw3sbzm0wJwpyjfBWxLdvGhOIrxcUFcDW370VmO4RXcqggA7h+f2qY/tffBMmL7oYwCf/AMqH+KavqYkPUHDzNSE7gNN+v/d/noDTh56C/MypqA0TF16s/fPz/+Udui0htRcLM5BBRcmOsM3NSxi1I74DVEBv/OWfAtM9Qsq7Xnlh4SHogI7rAC76wDU4TJGH+nYJCh32hoURdwBxzyuc2FslQYTLbSeD+Oz5Yf3df3wClv/m67Dy6jGQq+cK7ZBKIaz+vK4VBJbvTl1+NblGXE+QqoWyiUViZSRAknvCo7LN58HZV4/qEYNMlwix963Xjz8AHdCRAuCin+o4/zN36Nx4VISTGGZhgE68TesFOwS32XRdyLvffRTe+c7flAp+GVisM7E5KIHofUUYlFR8v7UNylRxyDPvcWFQNcxetH3nybfeON72h9lRDIB9/+qYvnI3pNV1Tg2E1zKy+qORgXmIxNNMgAN79Xe++wi0y9v//UFlLYRZfYSI8/t5UhYcFxkBkXR6H3RFwObfUsHAGQ4GVoHsUCbbVgA68s9FP5Uwc+1N2veOc+YANtQeRfd9UM674FYAnZ9OBc6n3wB+/fB/hk5Z/tY3ICrosYLvWuTbJiGqE7CmSVxBCKIQRMS5DScv2wFMJdSuMrLZFm0rAO79q2Pzx+egEDVPRwBagfZGgBRx/o4WBBFBxB4bh+B242Pjue/8w6MAxAWJnieQRviiFCa1DshSkvPU+nn/4nZgqqETK6AtBcC9f3Vg7n/T7n0mfw7gq+9o5w9UzknEn4pWbFaDNwbweu/+Q/umf8opFRSkE4gEi8Tm/yVxQWRwBdIohitCkvY8d59Tl9bYDaiOWrt1AW0pAPXl3glMJUxfuSsSWu/b01iAq6xLzPCgJCRxE5DQs55+drGSCHt+WgXqjhyCaDJRGsoj7THGShBu2m46KIhaDjid+MyNNwNTDe3WBbSsAFCzYOURMJWAATBJ/HskrQIMhHJgKKQLbUFvkgM8/U+LUBXvff+J2E0hSidqpmx+jTBhCNj4RWBm1z5gqqHd6sCWFUAmgHv/ikDzf2rHbivLIXIviUUQl/6QUlsS4NP7ZJji223Hgh8awe8WvJYrHEoLD0MbzT1QJHFnfNgicVUQ/CzwM2GqIRPZl1o+tpWDeMRftWz5nVv0MkTHqdnvVsJ+3ccLERXUFIVN+sKbcyeqfyjH6Wefiop6aDujJST7yb5SJWDX0SJiKkLI+VbnC2hJAWTTPMlnlWzadROkA2bCaLywmVYCRiPtQJD0WsC9PvX9/wFVc/bYodJ20veN21ik8MxBcuiWT90CTHVkOdzd0nHQEqJlk4JZm6krlbk7e3GI+NslKeiNesxgBZRUB5aANfbnfn4SqgbdgHMnjkGhnk/SNqdFQBAdF41MtIe7YKHYvBWmd/A8AdXRmsyuqwCu2jOPvX8NmErA3L8ReumL5V3azk+2IdL5/Ek2wEpNXhaUU3/vfa/71F8zVl45Gpx6CPUAObmXSAn4LADECo/uh7BvEwcDq2S2lWDgugpAfS+fB6YyXC9Hq+RsHF9vT1OB5mAiT6QSj1oIjpUTvXsop84GuCaVBCPtSqFOIbJVqEKAqMIZZrg0uFJaSQmuqQA4+FctM6r3z5T5D0X5DutSRr0n3U+F3skbfagHCn8vR9fh4B10BQoBQLsetZPci+/9SZsBigpMbNqqXSSmGpRRtne9YODaFsAU5/2rBIN/kexH0XAZCVHsKgsvQIUKO2t+oxleZe6/GWd+uBjaBMGHNy+I3kqUA6UQCyD3vvlTPFFIhcyqYOCBtQ5YUwFw5V91ZLPbYdM1+3wvHiOitVRJFM3tsM9vwN752DPQazAbgHMHUFfEt8v9J6E8DijjZbodr4UuErsB1SGlWNOFb6oA9GO+uPKvMrD01/WONJdOhSISbPoaBJ1glyD9tjNKMNNZfnqBHsNvFU1agAT0dXJfLk5YuJ4M8UN3nRk9SIqpAl0ZuIYb0FQBcO6/WjZ/8lYQXrBt75lM0mnWIdlHg4XxjDtU0Jxp3g9OOzdAZCS3H0qazb7yNGWZwkutm+lrbgKmOtaqCWiqANYzHZjWQfN/8tJaZLEHRSAKVXOlmQAAaFZkky+/2ZPqv2bge+WnjRuQ+5F9VIqLboveltvVkiwHZaq2W39eTDUoWd7fbF+pAmDzv1q2fvp2YgrLeJh/FEUzhMeCFXt6t90PzZVQad1/q5z+v08YZUXuhfr/9HXIZkiICofc/UHi2gi2AqpkLTeg3ALg6H+lYI9GTWUZmQJmWyFqTl67eTklDbGTfPupp3pX/NMMX2/glBqEZqfGf7hLASV6IdQCkB1bPsmlwVXSLBtQqgA4+l8dKPwZTvslSe8H1hyO/GRR6h/7rIAMlXd0HMHqL+obMrMuugErJ46BywWkzgkt8PEugV6XBWVXsB7AzBMwVdsFTDU0c+kLCgBNBTb/q0NHtEvMYPsCoqftOGGIpCcZ/y9jBXHq/z0BG8XZF5/xbQpj/aGQ4TCE8QIimv/QfibRPRvYDaiOZkVBBQUw0WDhr5KpnUl9u4wWUJgN2Hb5UYZAQjFwZmWon8G/lLPPLUL81KCyPF/xZXovbnZjehAesumG/VwTUB2zsAqFh4kWFIDk2v/KmNmLte1bS4Xd5MyTh2fqSLkkwcG0FyXypFbOqR4YMwAbhS4N1grI1jWQ+Q3NMvb3ZWTBJIovzYbglpnz2AqokCwrpvaLMQAhun7kMGPYdMNc9KOnk2UI/0w9pwhMdiB9uk60LuPxAGePH4KNBrMB0ub36KxkaVGTIJqLPtjYx0aibeF+p5USZaqiGAeIFIAe/APACqACcNDPZI0MbEm6N1rlZzZAeXEMyadLsl1X5CkTfKM5Vz+qS4ORqHIxOS7cvUjcBZGcK6PPSgdR2Q2oiloaB4gUwMQUC39VTDvhd70cfbIOEBO4VBGQfU0q6nQAbgBARXQGFVEzVwUACjMFJdZBCG7KYuBTsekTPECoKlSML3IDIgUgOfpfGfijdb/naPirXgH7utzPT2cFiiLmdn1l6SAMCuecK0LvK2q3iEY0us8gUhJgjtMVBbSoAIwVwFSDkvGok09iAM1LBpnWmfjADvVXg+Dlp/68Uwsi6gwB4ih59D/Jn+dvv6lN70EB25IrS8Art0T+o/kBEoLlH1sIXv6lUQCsBKpBJjLuFYD1DdgFqICZT9wS9+7pH9AUXzD3/bHkIRqRkrArKwNi/lPOPv1kaCCJ6Pn2u/susRIil4dYCG4frk5yUVAlqG8gqgcIFsAqC39V6NLfJgN6PDJ93BaEcQF2IaLxAiFGcPrpjSv+acaZpaeiXtvfBrFcDFbTCVr5Q0cShsecu8eh4WLmtzkOUBlE1r0CUDlCVgAVoKPW2y7W6zTfbWQiSIJMLAHpf/ih5DdKpVlW0dzewNx/M7BNjZPHCgU9RUSwdMCIu15K+oATpxrJ8GJdGsxuQBVQWfcKQOVp9wPTNdPXz5F0HnmYBzH/ZWIOa6iyKBEct+3M4UUYVLAuQZAZjeOJT4KAm+1hQlSHq40omx8Bl1PX80+0EkR2vVv1CkAKUQOmK7CXmk5+pDLqxoU3891jwWI3IX48WEif2RmB1PrqAAX/UlaWFosZDS/hwcSnn4ksKD73OcXCj0x/7Cb1GXNNQNdIOedWaRaAXYAumfoY1v2neXtBfHhv9yYugDN3qfkc/F8nFCs/OjSQ5r8DawKMgrJCnLtnGrr7EtG9C4hnEyp8Tv7C9vWmLTB93RwwXeMLgrQCaPeZ4kw5m7T5H7ot6suG2X/IUgbhd0fSXt9sCnX25wag9Hc9Th98FGJhJgE+Ivh0xiA6VNpvl6FE2gUTcf/0Th4bUBE1/E8rgAkBLT1IkGlOtm07TFyxK0pdUX9WEN/fBfxc5y5BFgJfbptTEI3lN2BlgP1/R+P1uq4JEEL4wKd7urG0YVA/4xHEZc4ItQrouAi3ffKK3ewGVMBEw1j8WgGk1UFM+5g8tYAwR5bt9yTE6TGN8DUAghxPU35RNaD6Wz05uL4/RY8QxFgAjg+S5OYFCXrabeYepU95uJ4+Uor2WK8Q1ctNnBLsGifzWgGoDMD1wHTFzO/dHv2Yo2g/uG3xM/7CD552g8Kav27dbF85fBCGhXM/QldFgh3emAi/dQ2EiF0dIEMJBY0VuH1BUU59lN2ArhHZNlxYC0DUgOmYiUt2aBfABbCcgQtu6RSCO8GaBtT3D7hjg8Gcv/3G0FgACLY1X/5l6P1DWCR8BiTOFxwCe3juS4AgDgqaZbb9CuUKcGVgNyjlGywAsAEBpjOmb/pc9BNNy3d9XtwFwHIoSfdBoeLPLMRQ+P4pK88/FQJ4dpsQcdWj7/D9/yQz4K2nkuCpYpKtgK4QLgho0wEcBOwCDEy5qLUP9sliJDxE+G2f5y3eYAGkw2Zxz1AqANdmqwGj2yJpwaD8rLjTAyGOi9Bd09ftB6YrZlH2M1jh3r8bJj92ky/99VV/mrjHAqD+brNjyGZzRTiH5vTbg5v7bwa2efXkMfD9uwBIb1NDPq8y4adpQ4O93sxWk3VhuqGWKSeAe/8umProPhffCz08cXaFn8PLnUFr4WneO7gLOTl+5fBTMKyc+7F7hiD4giCfCnXBUpIFMQdDHAC0n4fwFwpW1aZ9nA3oigYqAMEWQKdgzz+9Z868sL1/5urZcRsJ/pnXsGZvH61Zf7mhe9Hh5NzzB3VNgCF2c6Jhwl7fiShmEJkMorgPLQCuCeicCXx8eMYKoGPQ9/d17HYUXC5d9J6k+cAFBn1kL6TBfMxLRr0f/q08vziU5r8DawLy1+sQshoANK/vK//selwf4AyncFx4qIr9hKe3wpRTwEzbqDBVDbMA7AJ0iP7xhUC1xf2Qg+ADCWS5Y6V9qCb94YdCInP+6o8Hb+KPdjnzvx/R90KHOmucy0TXk6yBOS4uk47TLYJrArpjNpOsADoCzf+Jy3dBId1Pg1UyKXaJCn4gshDM67Cup/368eDX/q9H4yfH9KzBuYzHOJBPCQqKgc4pEPyDyE0wG6T+DtgN6BCRbcvUj/QKYNrG5aFp8V/sxcvS8+LjycMyJTlAbR+mwp/1OPfCos/wB5eIxPRo2Y+LCUogAUPpLSZpA4JRSpCDgR2hPtNaBkxHTN94SxSp1gvvv8skf01Ke+3xblIMkUTA3Xnnnh28ab86BbMBUe8vIakLoJ8ZQPpUgWhQkBB+6Y6fvHYOmM5QQWtZA6YtJi7fDdns9sJ25+dGhT3EnA2Te4S8dprf1kpAmf+N10/CqIBuAN6P/yyoMgS7Tpz/eEYgWXydxwrEuGM8XVi7CBsEZNpkas/+JJ9ttrsqv2iGm7T2B2v7c5luChdRx589NDq9v2P1pWcASise42yI2QmRxUTrJsAvaCDF1GMw7cMKoAMmPkxKf8kTf7wcE6UARFGYHzL5UUOoHKTLxku9Df7puQtUj4lZDPzDdfzrZTDt3KEnfQAkBPGCTx9So+Sjk3EJsUHEnymY8yav3c/BwA6YVJ9eDZiWweCfUCanNeaNWet6L+nlW+Nz/0mkPzwpiJj/NgWG5nLVuX8sm0UBmbpatX17bU1BkW+c1JN6nDuyqNpSXSBSnn0PVtW96Qk9pIQkzm/a6ZaCpE6DfvXnRWMGpPlMYdNWyLbvqLTNY0BtEpi2mNw9Z9fszD6CFPhE5n5a+EO2y/j4MH+Q0BHzqsBefdPv3K6XtC3xvPsAVBoFDrXFP6UwMBax8v1HtTKoglVl2ejUKVF49POjQVEq/E6R+lKK1CqwQdVpda+nWQG0BbsAbSAuuBgmr74x/EClrfyTxE+lvmrqCug/GtACoAYCXrPxcvfFP2LTFpi55c9g87++F7IP74qzDYKMSnRtEnEe3pnpaOlsuuVPYeu/+0YlkfZVVG5nTnvhR3KfKQGgBUFRW6LgafG60l5n4pIauwFtwgqgDVyk2Zn/ACQeJSH4pC5vDUkwC6LOlsb99Cr2tO5R2920ccuBrxmBdcFIsIIFwXSO9BVRYqk5ThXBJqVUuhEw7Qa89INwYbfdxQEg7t3TNmLwNEkQQsi9KKa3cEqwTVgBtAGaxZCazxZXwOLmA6C9VVQG7LfRpdm3+sJB6Iap37oFZr5wD4CyVOL4QrA2XBENVVxQKNElbSPnTu7eD5vv/BpkF2yHTqEuTtQOIMaSV6RQ+LyigKo9iyquyY9waXA7sAJoEW3+X35tZDqbH2Kcqkrz+y5LQF/TXs4/Jec3Kvf/z537r+j/Tn/6gHmvcHX7f1w8Q/eVtdXfTwn4Ocz88T1KCVwMndD4ZxXkJFZOpCwlRFmVcBD4+6CZl7jM2lwLXR43PwOzPqwAWmTqxluhfChvE0kpi/TT116BmNfdCP/kb90KU5+6HYC6JRD8adqzAtmXkrbNrbv2+3/oEtz2lY7dgVUa6JSunZAo0LA/HBor17TNro0TPlDLrAcrgBaZ+Mi+NU1S6rDGskUGAtFjAOjAv45Lf4Uyx6dR+J0yisz6NGhGfP1UwOh9iSShAVSZmAOyi2swffNd0AmrGOiU5CNxrgANPIBrSzHwJyMLzG4U7v6kdoWY1lAKQNaBWZPsw7u16UvczoANYFEd4Lb7pS8OSCe1MLvzN+uQq/x7J6A5jo/M8m/l2mGlw+fMozcOsQAngO58kbyOlhCsFlzHmIBWjG2SKzeg8dN4opNw7dA+cG23B7j96QhsGkfR22fOM8VazHrU2QJogSkd/DOkwuvlqsQKkDIWGD/pB7kW/ohX/+lJ6ASMeIsLwqPIAQDo/AK0cyz16WVxNVUC1BYQULQMpm8+0JEroAt21rBCqIC7XaGACvyTh9JJQsx+lRK8mkuDW4EVQAtkV91UEG5tJov4CT6hlA18RsBDe2Cy1BZAh8UrU5+8I5Fyq2Qgvr5rryRtSCP97ni3zffIxK2gyk63G19gcPTj7Q/HRaXnFadbCogyAHlBqQatpgXe329xYNHELi4NboVMRbHrwDRlAvPKm0p+SK5nt+ZnJEi0mi0cXjgfweBf/pv2S38x0CUueH8cfyh9o5LtqSvgt4noMJEcG/ncECyCyQ58bqwJyJUbEH1ksmhlNGm2O8VrKqewfAOxNPhD7Aashfqo2AVYj8mr9hVMep+L1kckg4IgNkf1a9drQehZ3fbVDsts0f/WfZ8gaciCgZ6+pyj42tTkTyfbSJcgi+6EPn96q46TtIu+d9+jlwi+7/lDO9N78+2LFLCxviY/zsHA9chAyJPAlIL+dZYEucz89tI88s4X/bje3kWswwNCnL8KyY9U78Ne8NX2R/7pdmHvFlkZ8TBkKrQgQ71B2qPTJZ27P/b8y5UB3dZRMPDlQ+oziGsC/FKWnxMpYhm3PT5GxQE+fC27AWsgMlHP1Oe2DEwpuleTEA/5pQJMBM4s3a82fthHWc4d0QLQQekvjnqjSPvgTFpQo7fnslCItBayVDmsfx4ycVX7CgAVYOPoIsRvIaCV9pXt809a9tuUEtg1B0wTZP42ugCsAJow9fFbTbArL3SLnrWCaaUQJbJ67CB0QvahXZF5HNrinBILmXkotT7COYlgFfY164rj88T5F+tBSO3iBz/Za+V5Tq4vi+/V5B6c0jVjMMIzBrOrOBuwBsuZ+rzqwBRAM1u8/4pgWpaYns78d/H+4GsXj0sFCYfa5h1W/2Hxj5NnNzLBvyeE4FhqJpe1z7fHHQvxvYlkLEGpeW7PEx2UB+tAoLWCjJ8flJZ/7+R9UjfEj85wH4iUPnuBrhKWBzNFBAYBJ9gCKGXyk7frpfuBpZ1kVISSCjeQYhVBioDMBv2qm9Jf7GmJXvJCGRX3kP3RuWQpm70BURJl1/LbiNLQ1+1wfMDqD5+Irh3PlixLFQ5ZmPU8WZJ2cTagnAYqgEaDLYAysst2F3tLIg1pL+RfJmZ41PPL8INeffpR6BhXlRhfOghPYvbTh3JEkX5JU2nk+iLeRwc4xfMIuMNtUc6m86AT8p8ehXgyENoeEWockvf19041LkBkCeF1J2/gbEApk8oFgGlWACnYY3hzlvY2tNtN99mV6Ek/JYoD9+dvntCj/zomVUTkz6ckqXKgggtpoAzidXLtPDHFBcQzHptjmvTSbaDdgJ++CGGsgWtQfBz9nKO/JuaMiw0Apik/xG5ACfWsvrSALgC7AYRs1/7Y9KW9ISSmJ5BeFKBwHiTHYkCx8dx3oBvkb97wcYV0Dv3UMoi2+3bJwnZZcrx/dp+UkTnu5V0mufsulFrjFTcTUohqeMvD1VWUuFpmf/F7gUQnTVzF8wQkLKPsu0KgOjCeCVL6KwuSIYsagK4SIQFIZtqx2gJN3m5AQRMi5PYjV8U1odQcDu2MhuBCwaom92BTjAA+zSiISU7/uqGhMiI03kLfz1VW0kKmuI1QUEZ+v71eds3+jrIUo4q0Mp+ZF/IwMBqdN57GH0rcN8pIIOgPPpkTEJKie2oa4LGvHOrO/MernD0F5XMTAKSmf9x2WDuoJsHX2KcHFa5R1i7l2nSMLg0+6oOqsVKJtWwovPIxVVLNCJFS9BoAS4PZCiCYAkCtALgYKIA9hUEkSyjKtBX4Qs+jf6Gm5zQ9ZnhIaBWTfuJwWvCVhuZXn5cKZbHtQTBIgZB0z94z0mV8fhGdR5ElSgaHNNOqvk5oLD0ZtTsttKLv7wU9B6CTngBR0inhu2XUJ7SES60A1He/BIyOrovLdpUIC3i71P/YSA+VpwLhXwsfkNP+9Jn3oPHiQeiW/GdH9bX8+4hicA5SM9lH9uMqRWF8CVM05I8n9wgycTNkUnFohTUZ39/RfemagPf8+/ngI61mJJ+7aXsceHXt9R8DaTtmdoDdAI2TeRMDaLACQPQPBMqeQw/E9/RlJ2ZpJcH1SmkO2/fSik7q/ktR5rLEHhcAgiUApD2h7V72ZZBXJ/TBgoAQUBTm3tx4+zhjICFYNeQjUiv5K91bNnhfRkGSQCB5D7NN+vhA5F35JbFcvPIIH8TEXk4JaqSx+o0C4FSgJvM/DvLwTgDyUMsgabTAJxISgLK4vMkAVND7O1Z/8GiJbWz+XNRcpic5Yc/p3PtB0KmSkzmpqKHukHMZ7MFavFRWIv9Z9xaAfjtUJDKe/jt8/rSeIXw3LnAYiB+7Lsi9icu4KAipH1lYxKVWACYVON5Tg4n313Tpr/3FGLxECO8fO3MgetJt8ud/jPq1NZdV4K/b6D9FKoGT77wZtdPFG9ywPupDm1sivbprryi/B3OeBD+egJgQ0l/U3FvjB10UNSWgIvGxBG9W0eKmoHwAkva4Xh8gKnCS5J7QyssuG++aAAnB4s/Ixuq6pyFk4oZbwQ/hpdNL+SOE3R4mxowEhUKFyK40qjCRE1a/+1+AxhtMW8ALKvX3ZfGGoFkBj6S9PulBzUu3z9x/jr3/i9X+dHIVDMztoB4JxD0BGX0fzucPikl6Xe2DooK02226ctwHCIUpALwCEDDmcYAPXpNY1LFZH22XAFLKguAHs1P6Pyc8+eHO5v1bC6mCgTogSN7PvX/UXne8VwbFqcKpy0PPjasIwfewblPjib+GqsmPLwKIWAG5toqSmIRbp6XEXmmRdrvvJ9s5B+OM+pQW3bpXAMrlG1sFgH5h+rQbV0cugJrTIjI96dHBDDXH0bHpEvPbXeb+m9H47jetK0AyDoI+jpw0K4lO6C0i7AumNTH7/XEiPk6RK9Nf/rIOVYOfFSo3/xpCj06VndtJ7y0EZcOYB0mjlrg6s9UGfMcTKuthSrDJ8VUAmB+WkSktvAnq5wKIeh4SJrDdjCgcE36I+YuL0CtQ+HUvjMVBeRAS4Z1gt5S+gs+5M17QSxyegoKLYgpSZzQaz1Tn+6fkWDDlBFtC8vmmS7DtircFL0CEmA0YF0+Mc03AZIkCsGMCxk8JYIUYmoTEJpZlPZ83++1h+r9gpuZ+CltBDjDKRP68mgh5M7AXbvzjg+G1jWMEi8W2Iw8FQ2WzHOn7kSXtd1aNFUb41UnIv/cN6CX58YNGqRXiFIJYY83OFpE7p49O0oZZbd9Y1gSoe1+ysq5JJgWV1UZzhoBsx76Cn+igAu+gRSk0AGV+kHH6UCuGVw/1zPynoMCsfuevdSGNy+Eb2SHCIBILRTrbRfj7MYU0of0+jmEvkp84BKuP3dt11d+6YGnwmydCPYJMrRAIbXX3ErkHweRPYzVakaHi/9gcjBsikfFIAYxjRaC4Zk4vo2AX/bNQgYgyAABRhJwOndXbjj8F/UKiWf6tr+q8PM3vuXiGN/8lDZLFZr8PslEf22UyDj0CjSe/pnvmfpAf+jvSDBm1ki59BsAcSO/C479aouTHMRugZHyRvo4tgAlYgHEC57G79Jq4hxCx7xvyydLnvSM/IPIJTC+VW2WiU2SvPgv9BGMCq//1zyF/5hElqKcjpZWWyMaISBlIcgzWHDQW/qO65t9BP9EBRlfyLEX4jPXOEI8wUm2tMBFSh/p78DcD0f3hvrEsDZ6IO/kJ+mL5teNnLrxk5wH1Kc7CGIC+v7j8Br3uvFzX14SgU/ChfW/q9hdq8MOZmvqzIE9UVP7bJhh3kC99X0e80dwVeoSj8FZKuF8A2oNGgTN1jfx/fVP3xPBO792YAo1zAFvVT/GSq0mbwbeZftTpdt/LQ1nAMMzhKBqrPY/RDAra/z+88J/otsmS4x5Xf1+CMUBcd0sw263/69d1hx8movC+v/0POxwhS8x/cOa1NPnsDURnCL73Tb2O5q5QgS9xcQ3gfTWz36YzjHoTJuj2c1NbAEpxyY0Q+gRUoGLPLbadgsRdii6B+Q7CPAd2J3jrh17DnbfjRoBDvctmDBLqN1xw8QsKQOUIF7JsDBTA+2vaBTC18BJ8+SxQM9lmAYA8/Yf6xsLVC7hNZKTcu7/UpvOggPEBSQYj4TTeZsXe98p7ffPt28GXPKO7lkx1FgQfvKsmRdGV0QrOTZ7ilIBdR2UoPrhrLKyAPM8fT7cVHw1mcoQjPz9Adh0O/CEGvf/NxOGjNf1mH3EOboJ7nR9+AgYZFCr9h9OLoYANoPA75HETuM5l7ASEDID0dRsk5WEPCsc5BULHFWh2jEkwcCIOACIFBYA5QjkG2QCt9UsCYWEIr3ntkSVLf4xVJOTHt1G+/ygiX3gyZC6i7yxkNmhdQ+oiuONSZe2+33FIB6pbX6T5f0fpw0GV7/s4jDBCaXx53sWkyIdElIGYllJ6RWB+UzS/TiLlkuTO8Vj0oQfAfx4Zzir3BIOaUiZlziEjQNOcGpKVcdmBSEfTLxGDpB8c7RGCGciHy7eXkGfwEIwwGAwr5PIjvzE19cP2kgnASETdXDP/0SIw1WIsKlFitUEUiA0DnURcxCTJcZIOmrJ1GzfeDqNMo8T8R0oVgHUDSk8YejCYpE0+WvIbineoIEe9iH2dVpn58xH34xuTtFI/kT86aGZC8qYXRN8LJRJ6VwMBiYWgV0MFpMDMyIjWBFjzv162L2t2knIDDsIIIi7dDVF9ubPpBR36mgT+hCCyHgJNrqcJwUAF9v5s/lcPZil+VfeJVqBLESvknMZicBG5Aakyt8dNb7Edw+ixlkvfVAEoN+B+GEU+th98xB4SXx5KYnz6BZl2SgadEVYcGPyrfuIPxpA/S/L1ghYvEUuOBgSBjNL0ip0oD/pl4+srRjMboGS5aYVvUwUwkm6ACvzBpbsgHsgD3vwH6uFHpmYQeHdeGBQUdIB8R6XU6v0t/R0r0LXCYiVw05jT7yVE+f2ciO67s1EambpsIpyn3YAP7rbPhBgd1jL/kWytk0ctGyCw9Jemi8gyGmUm17hIcrzfjOex799zdIDVfvR+/kMtyUEhmxV9hD4mmtJMkhGDkqh86xKIPbfCKNEs+h/2r4HNBoxOUdDV+6E4XVboGeLhv4migLiWvFRJHBns4p+RoB7qKyQxzYrfK/jteZ7GdcIxeS5D4Bf3qd/IKNEs+u9YUwGMVFEQmne69BcgLRYRZLZfgwvsxXEAIPUBrgTY/5gw8PfLk8D0mF8cA4mfs4QoIyCIm0+DvJIs3fHmu/Mh3ChoqH8jo1ITIMRDa5n/yJoKAFEf1H0wCqBmd8KaPBhDyrgHcZH/8Jr4mO4HRa+N5x+pftJPpgnKCkiDtVIC6cehEJ91jzZ3x/uCIiAKwZ0wIsHAstr/lHUVgH2AwPC7ARj8AwjFInlRkqlQp6nCZjPT+lhinUt/+4ZWtnHFn0jKeyNk+N79a0lmEQZyKfzvo3OjEAys119YWHd+j3UVgEE+AMMMavTzt0cBn6gexJv/aT15WOZR758MOcXgH+f++wfWBPz8KPXPvBWXlxZq+cNc9+/Oirc763B6qx8yPazkLcpsSwpg6GsCUKPLpMeXEAX/7ArQPD/9DVHTsmA1/HgRmP4iTxKLKzL1wbhkkH5XgmyTscIHQVw8+/fxIS8Nzlqb3aslBYDBQJUSHM7pwlTuX15xo/6C8zyp8idBvCDswlsIghzjg31U+N1JJ9n87zfixwdBrpyKYwFEqbuqDvedusAt+NdAzH//zZtX+FK5jEPrBrQQ/HO06AKodEIDhtINkCr6L5Kqr6goTJTV+kNkIZCrmf8l6TuOKn90ZXDH0o8syg0QmHZtopjTbIDL2tDvOIwXcOMHqFUIxnIcQvJG/nCrx060euDyG8frs9uvmVPyUoNh4rfvNBWAEKr34nn8yigLJoXHYsMvjqof33dAPKV04kmu/NswVEpQvKQsgV/VTW99/vbkgDiTY7729b57cuzEtL7+MKEr/44s3Nfq8ZPQBpgSVMIzB8MCmv8f2AUhT2w0PgaKCnN5ItQGdMX/bvnaEcheexHgpUUO+A0S775phBT/UNGrgK/cfYtZF9ILs4hqvK1LYBWCJL8Hc7zdduluc513h+f7Xq/yL2V9dZhw5XW3nVCLGgwBEnv/3be4uh7/xSKl8i9is1+gaX/0CdPTvMZlvkOFiuLLq+cALr/RdARQ1OlAtxHrgCoH+OEjIJ7r73ToXVB/9fnHdrRzQlsWAKJ6z/syIR6EYeCKm6JIcDzpRxGtJHBuvJcXQWBgj4V+eMGhw796CODph7QVKLAQTPXo4rztIEnQz4eG3A8FfwNZUATYgQyLAhAdFO21bQEgw2AFyA/sBvm5/xBvFC4yHAJ9GgwovXwQxE8O6d6eGV20S/iR/SCdeU/NAn8QRHnf7O/vG4bfRdu9P9K2BYAMhRXgBnVQ506G4g8076USeKF8evHrOkfyxwTtyqk/LfeX7zMxA1xiEDGZ9t0tcL8YcAUgOizZ78gCQAbdCsi/+KCZ5QWIv6fMe/FWXQfydG/PQs8g6neCQi6xYvRyMw7AeQS6/1AWYvbonw/y76Wj3h/pyAJABtkKkGjiTYUiDoFpu588q8z8RRZ6poj6TWgX8OWDIXOEvyHlRmqmt5o4wk8GM+Uruhiw17EFgOzYc9tTSkPOwYCRf/orWqvrXh4Deiz0TCdYZSA/Mqdf6ljA4NFx7490pQBq187PZZl4CgYN9OdY6JkqGdB6ANX73/XKCwsPQYd0pQCQQbUCGGbkkWLh1Re+fRt0QctjAZq2oSG/DAzD9J18Iu9a9rpWAPVjC0sw7PMFMMyw0caIv7XoWgEgeQb3whg8UZhhBoR6LvJKIpItjwZci+XXjp+58JKdZ5Va+iwwDNNTVODvyyee11P1dX8tqBAOCDJMz+kq7ZdSiQvg4IAgw/SWPJM3Q4VU4gI4lt88/ppyBXDIzRwwDFMx8r4ThxcqnZqvUhfAseO6255TF94LDMNURaWmv6NSF8AhV+VdwDBMZVRt+jsqdQEc7AowTJVUb/o7euICONgVYJiu6Ynp7+iJC+CQmcQ6ZS4QYpjOWO6V6e/oiQvgWH7t+DIXCDFMp8i/UKb/30MP6akCQN56/fjTSglcqJTAJ4BhmBaRD7z6/MK90GN66gI47FiBOjAM0wp1KzM9p6dBQEpt73wty8VzanUWGIZpBvr9N1Qx0q8Veu4CODAesG37zteFEPPAMEwpQsp/X9VAn1bomwJAlt84vsT1AQzTDHnfqy8s3A99pG8uAOXKPX/4mFJ1bAkwjEOIhVcPdze9Vyf0JQiYkk/kWCpcB4ZhEJzgY0PK5zdEAagAhytwqAPDjDd1lAWUCdgANsQFcNR2ze/NJvW04pwZYMaRvkb8y9gQC8CBE4rmuey738Mwg0Au5V0bKfxIX7MAZajMQF2lB09yepAZL+SXT3TxQI+q2HAFgHB6kBkvVLrv+YW/ggFgIBQA8tbrxxdZCTCjjxb+e2FAGBgFgLASYEabwRJ+ZKAUAMJKgBlNBk/4kYFTAAgrAWa0GEzhRwZSASCsBJjRYHCFHxlYBYCwEmCGm8EWfmSgFQBilcDbPK0YM0wIKe/q98i+Thh4BYDgtGLbtu88LIRWAjPAMIPLcp7Lz5040ptpvKtmQ8cCtIudVQjHDtSAYQYPHNhzW31pYQmGhKFSAAgrAWZAcaP66jBEbOhgoE7ADxhHUIEUQ2FiMWOAEAsbPaqvU4bOAqBced38veoW7gGG2TAGP9K/FkMRBGwGZgjsSMI54OAg01+WcQLPYYj0r8VQWwAOjgswfWYo/f0yhi4GUIaPC4B8ABimp8gHhtXfL2MkLACKigvcbeMCPM0YUyXL1t8fapM/ZeQUAMIuAVMlEmBJmvx+HUaMkVQADs4SMN0z3FH+9RhpBYCwNcB0gu317xqmqr5OGHkF4GBrgGmd0e71KWOjABC2Bpi1kBIW5YT88qj3+pSxUgCO2p75A5nQ1kANGGZEI/ytMNSVgJ2C05Bvu3Tn48rRu1CA2AvMGIN5fbjtxOH+PZJ7kBhLC4CCbsGEhK9LyQ8mGSfG0dwvY+wVgIPdgvFAC76U99WPjGePn8IKIIEVwchSF0rwXxmAx3ENEqwAmsCKYGRgwV8DVgDrwIpgaGHBbwFWAC2CikBlDO4UAuaAGVjYx28PVgBtUrt2fk5koJUBMIODFAu5zB9gwW8PVgAdYqoKQaUOxZeA3YONYtnm8e9X6bxlYNqGFUAFKPdgXrkG82wV9IVlZeYvsZlfDawAKgStAmjAHMcKqgd9eyHk46q3f4h7++pgBdAjnIsgpfg8K4POsEJ/kE383sEKoA+wZdAy2rznnr5/sALoM0oZzGplIHQA8Xr1BYz7YKS66usfz3NYgElYYqHvL6wANhhrHezNlGUgQewfdYWAM+0IUGa96ulhAhZY4DcWVgADhrYQVpVCyJQikNl+KWRtiJVCXeXnF0Hkh1UPv8Q9/ODBCmBIwAIk9W3NKksBFcP1VjHUYOOnP1+WuuxWLClBf1v37A31Nw11FvbBhxXAkKMthhWlCDKlCATUlIKoASoFmW2TIHEdhIgKlWrrXLLuVlRATq+r4GUdhRvw2fdm27IS8joL+fDz/wHucBaSz24T/AAAAABJRU5ErkJggg=="
}]);