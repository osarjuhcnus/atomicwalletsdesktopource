(window.webpackJsonp = window.webpackJsonp || []).push([
    [59], {
        1028: function(t, i, r) {
            "use strict";
            var n = r(3153),
                e = r(1029),
                h = new n(0),
                o = new n(-1),
                s = {
                    noether: "0",
                    wei: "1",
                    kwei: "1000",
                    Kwei: "1000",
                    babbage: "1000",
                    femtoether: "1000",
                    mwei: "1000000",
                    Mwei: "1000000",
                    lovelace: "1000000",
                    picoether: "1000000",
                    gwei: "1000000000",
                    Gwei: "1000000000",
                    shannon: "1000000000",
                    nanoether: "1000000000",
                    nano: "1000000000",
                    szabo: "1000000000000",
                    microether: "1000000000000",
                    micro: "1000000000000",
                    finney: "1000000000000000",
                    milliether: "1000000000000000",
                    milli: "1000000000000000",
                    ether: "1000000000000000000",
                    kether: "1000000000000000000000",
                    grand: "1000000000000000000000",
                    mether: "1000000000000000000000000",
                    gether: "1000000000000000000000000000",
                    tether: "1000000000000000000000000000000"
                };

            function u(t) {
                var i = t ? t.toLowerCase() : "ether",
                    r = s[i];
                if ("string" != typeof r) throw new Error("[ethjs-unit] the unit provided " + t + " doesn't exists, please use the one of the following units " + JSON.stringify(s, null, 2));
                return new n(r, 10)
            }

            function a(t) {
                if ("string" == typeof t) {
                    if (!t.match(/^-?[0-9.]+$/)) throw new Error("while converting number to string, invalid number value '" + t + "', should be a number matching (^-?[0-9.]+).");
                    return t
                }
                if ("number" == typeof t) return String(t);
                if ("object" == typeof t && t.toString && (t.toTwos || t.dividedToIntegerBy)) return t.toPrecision ? String(t.toPrecision()) : t.toString(10);
                throw new Error("while converting number to string, invalid number value '" + t + "' type " + typeof t + ".")
            }
            t.exports = {
                unitMap: s,
                numberToString: a,
                getValueOfUnit: u,
                fromWei: function(t, i, r) {
                    var n = e(t),
                        a = n.lt(h),
                        l = u(i),
                        f = s[i].length - 1 || 1,
                        m = r || {};
                    a && (n = n.mul(o));
                    for (var d = n.mod(l).toString(10); d.length < f;) d = "0" + d;
                    m.pad || (d = d.match(/^([0-9]*[1-9]|0)(0*)/)[1]);
                    var p = n.div(l).toString(10);
                    m.commify && (p = p.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    var v = p + ("0" == d ? "" : "." + d);
                    return a && (v = "-" + v), v
                },
                toWei: function(t, i) {
                    var r = a(t),
                        e = u(i),
                        h = s[i].length - 1 || 1,
                        l = "-" === r.substring(0, 1);
                    if (l && (r = r.substring(1)), "." === r) throw new Error("[ethjs-unit] while converting number " + t + " to wei, invalid value");
                    var f = r.split(".");
                    if (f.length > 2) throw new Error("[ethjs-unit] while converting number " + t + " to wei,  too many decimal points");
                    var m = f[0],
                        d = f[1];
                    if (m || (m = "0"), d || (d = "0"), d.length > h) throw new Error("[ethjs-unit] while converting number " + t + " to wei, too many decimal places");
                    for (; d.length < h;) d += "0";
                    m = new n(m), d = new n(d);
                    var p = m.mul(e).add(d);
                    return l && (p = p.mul(o)), new n(p.toString(10), 10)
                }
            }
        },
        1388: function(t, i, r) {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
                e = "~";

            function h() {}

            function o(t, i, r) {
                this.fn = t, this.context = i, this.once = r || !1
            }

            function s(t, i, r, n, h) {
                if ("function" != typeof r) throw new TypeError("The listener must be a function");
                var s = new o(r, n || t, h),
                    u = e ? e + i : i;
                return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], s] : t._events[u].push(s) : (t._events[u] = s, t._eventsCount++), t
            }

            function u(t, i) {
                0 == --t._eventsCount ? t._events = new h : delete t._events[i]
            }

            function a() {
                this._events = new h, this._eventsCount = 0
            }
            Object.create && (h.prototype = Object.create(null), (new h).__proto__ || (e = !1)), a.prototype.eventNames = function() {
                var t, i, r = [];
                if (0 === this._eventsCount) return r;
                for (i in t = this._events) n.call(t, i) && r.push(e ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
            }, a.prototype.listeners = function(t) {
                var i = e ? e + t : t,
                    r = this._events[i];
                if (!r) return [];
                if (r.fn) return [r.fn];
                for (var n = 0, h = r.length, o = new Array(h); n < h; n++) o[n] = r[n].fn;
                return o
            }, a.prototype.listenerCount = function(t) {
                var i = e ? e + t : t,
                    r = this._events[i];
                return r ? r.fn ? 1 : r.length : 0
            }, a.prototype.emit = function(t, i, r, n, h, o) {
                var s = e ? e + t : t;
                if (!this._events[s]) return !1;
                var u, a, l = this._events[s],
                    f = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(t, l.fn, void 0, !0), f) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, i), !0;
                        case 3:
                            return l.fn.call(l.context, i, r), !0;
                        case 4:
                            return l.fn.call(l.context, i, r, n), !0;
                        case 5:
                            return l.fn.call(l.context, i, r, n, h), !0;
                        case 6:
                            return l.fn.call(l.context, i, r, n, h, o), !0
                    }
                    for (a = 1, u = new Array(f - 1); a < f; a++) u[a - 1] = arguments[a];
                    l.fn.apply(l.context, u)
                } else {
                    var m, d = l.length;
                    for (a = 0; a < d; a++) switch (l[a].once && this.removeListener(t, l[a].fn, void 0, !0), f) {
                        case 1:
                            l[a].fn.call(l[a].context);
                            break;
                        case 2:
                            l[a].fn.call(l[a].context, i);
                            break;
                        case 3:
                            l[a].fn.call(l[a].context, i, r);
                            break;
                        case 4:
                            l[a].fn.call(l[a].context, i, r, n);
                            break;
                        default:
                            if (!u)
                                for (m = 1, u = new Array(f - 1); m < f; m++) u[m - 1] = arguments[m];
                            l[a].fn.apply(l[a].context, u)
                    }
                }
                return !0
            }, a.prototype.on = function(t, i, r) {
                return s(this, t, i, r, !1)
            }, a.prototype.once = function(t, i, r) {
                return s(this, t, i, r, !0)
            }, a.prototype.removeListener = function(t, i, r, n) {
                var h = e ? e + t : t;
                if (!this._events[h]) return this;
                if (!i) return u(this, h), this;
                var o = this._events[h];
                if (o.fn) o.fn !== i || n && !o.once || r && o.context !== r || u(this, h);
                else {
                    for (var s = 0, a = [], l = o.length; s < l; s++)(o[s].fn !== i || n && !o[s].once || r && o[s].context !== r) && a.push(o[s]);
                    a.length ? this._events[h] = 1 === a.length ? a[0] : a : u(this, h)
                }
                return this
            }, a.prototype.removeAllListeners = function(t) {
                var i;
                return t ? (i = e ? e + t : t, this._events[i] && u(this, i)) : (this._events = new h, this._eventsCount = 0), this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, t.exports = a
        },
        3153: function(t, i, r) {
            (function(t) {
                ! function(t, i) {
                    "use strict";

                    function n(t, i) {
                        if (!t) throw new Error(i || "Assertion failed")
                    }

                    function e(t, i) {
                        t.super_ = i;
                        var r = function() {};
                        r.prototype = i.prototype, t.prototype = new r, t.prototype.constructor = t
                    }

                    function h(t, i, r) {
                        if (h.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== i && "be" !== i || (r = i, i = 10), this._init(t || 0, i || 10, r || "be"))
                    }
                    var o;
                    "object" == typeof t ? t.exports = h : i.BN = h, h.BN = h, h.wordSize = 26;
                    try {
                        o = r(12).Buffer
                    } catch (t) {}

                    function s(t, i, r) {
                        for (var n = 0, e = Math.min(t.length, r), h = i; h < e; h++) {
                            var o = t.charCodeAt(h) - 48;
                            n <<= 4, n |= o >= 49 && o <= 54 ? o - 49 + 10 : o >= 17 && o <= 22 ? o - 17 + 10 : 15 & o
                        }
                        return n
                    }

                    function u(t, i, r, n) {
                        for (var e = 0, h = Math.min(t.length, r), o = i; o < h; o++) {
                            var s = t.charCodeAt(o) - 48;
                            e *= n, e += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                        }
                        return e
                    }
                    h.isBN = function(t) {
                        return t instanceof h || null !== t && "object" == typeof t && t.constructor.wordSize === h.wordSize && Array.isArray(t.words)
                    }, h.max = function(t, i) {
                        return t.cmp(i) > 0 ? t : i
                    }, h.min = function(t, i) {
                        return t.cmp(i) < 0 ? t : i
                    }, h.prototype._init = function(t, i, r) {
                        if ("number" == typeof t) return this._initNumber(t, i, r);
                        if ("object" == typeof t) return this._initArray(t, i, r);
                        "hex" === i && (i = 16), n(i === (0 | i) && i >= 2 && i <= 36);
                        var e = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && e++, 16 === i ? this._parseHex(t, e) : this._parseBase(t, i, e), "-" === t[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), i, r)
                    }, h.prototype._initNumber = function(t, i, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), i, r)
                    }, h.prototype._initArray = function(t, i, r) {
                        if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var e = 0; e < this.length; e++) this.words[e] = 0;
                        var h, o, s = 0;
                        if ("be" === r)
                            for (e = t.length - 1, h = 0; e >= 0; e -= 3) o = t[e] | t[e - 1] << 8 | t[e - 2] << 16, this.words[h] |= o << s & 67108863, this.words[h + 1] = o >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, h++);
                        else if ("le" === r)
                            for (e = 0, h = 0; e < t.length; e += 3) o = t[e] | t[e + 1] << 8 | t[e + 2] << 16, this.words[h] |= o << s & 67108863, this.words[h + 1] = o >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, h++);
                        return this.strip()
                    }, h.prototype._parseHex = function(t, i) {
                        this.length = Math.ceil((t.length - i) / 6), this.words = new Array(this.length);
                        for (var r = 0; r < this.length; r++) this.words[r] = 0;
                        var n, e, h = 0;
                        for (r = t.length - 6, n = 0; r >= i; r -= 6) e = s(t, r, r + 6), this.words[n] |= e << h & 67108863, this.words[n + 1] |= e >>> 26 - h & 4194303, (h += 24) >= 26 && (h -= 26, n++);
                        r + 6 !== i && (e = s(t, i, r + 6), this.words[n] |= e << h & 67108863, this.words[n + 1] |= e >>> 26 - h & 4194303), this.strip()
                    }, h.prototype._parseBase = function(t, i, r) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, e = 1; e <= 67108863; e *= i) n++;
                        n--, e = e / i | 0;
                        for (var h = t.length - r, o = h % n, s = Math.min(h, h - o) + r, a = 0, l = r; l < s; l += n) a = u(t, l, l + n, i), this.imuln(e), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
                        if (0 !== o) {
                            var f = 1;
                            for (a = u(t, l, t.length, i), l = 0; l < o; l++) f *= i;
                            this.imuln(f), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a)
                        }
                    }, h.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, h.prototype.clone = function() {
                        var t = new h(null);
                        return this.copy(t), t
                    }, h.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, h.prototype.strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, h.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, h.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var a = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function m(t, i, r) {
                        r.negative = i.negative ^ t.negative;
                        var n = t.length + i.length | 0;
                        r.length = n, n = n - 1 | 0;
                        var e = 0 | t.words[0],
                            h = 0 | i.words[0],
                            o = e * h,
                            s = 67108863 & o,
                            u = o / 67108864 | 0;
                        r.words[0] = s;
                        for (var a = 1; a < n; a++) {
                            for (var l = u >>> 26, f = 67108863 & u, m = Math.min(a, i.length - 1), d = Math.max(0, a - t.length + 1); d <= m; d++) {
                                var p = a - d | 0;
                                l += (o = (e = 0 | t.words[p]) * (h = 0 | i.words[d]) + f) / 67108864 | 0, f = 67108863 & o
                            }
                            r.words[a] = 0 | f, u = 0 | l
                        }
                        return 0 !== u ? r.words[a] = 0 | u : r.length--, r.strip()
                    }
                    h.prototype.toString = function(t, i) {
                        var r;
                        if (i = 0 | i || 1, 16 === (t = t || 10) || "hex" === t) {
                            r = "";
                            for (var e = 0, h = 0, o = 0; o < this.length; o++) {
                                var s = this.words[o],
                                    u = (16777215 & (s << e | h)).toString(16);
                                r = 0 !== (h = s >>> 24 - e & 16777215) || o !== this.length - 1 ? a[6 - u.length] + u + r : u + r, (e += 2) >= 26 && (e -= 26, o--)
                            }
                            for (0 !== h && (r = h.toString(16) + r); r.length % i != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var m = l[t],
                                d = f[t];
                            r = "";
                            var p = this.clone();
                            for (p.negative = 0; !p.isZero();) {
                                var v = p.modn(d).toString(t);
                                r = (p = p.idivn(d)).isZero() ? v + r : a[m - v.length] + v + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % i != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, h.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, h.prototype.toJSON = function() {
                        return this.toString(16)
                    }, h.prototype.toBuffer = function(t, i) {
                        return n(void 0 !== o), this.toArrayLike(o, t, i)
                    }, h.prototype.toArray = function(t, i) {
                        return this.toArrayLike(Array, t, i)
                    }, h.prototype.toArrayLike = function(t, i, r) {
                        var e = this.byteLength(),
                            h = r || Math.max(1, e);
                        n(e <= h, "byte array longer than desired length"), n(h > 0, "Requested array length <= 0"), this.strip();
                        var o, s, u = "le" === i,
                            a = new t(h),
                            l = this.clone();
                        if (u) {
                            for (s = 0; !l.isZero(); s++) o = l.andln(255), l.iushrn(8), a[s] = o;
                            for (; s < h; s++) a[s] = 0
                        } else {
                            for (s = 0; s < h - e; s++) a[s] = 0;
                            for (s = 0; !l.isZero(); s++) o = l.andln(255), l.iushrn(8), a[h - s - 1] = o
                        }
                        return a
                    }, Math.clz32 ? h.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : h.prototype._countBits = function(t) {
                        var i = t,
                            r = 0;
                        return i >= 4096 && (r += 13, i >>>= 13), i >= 64 && (r += 7, i >>>= 7), i >= 8 && (r += 4, i >>>= 4), i >= 2 && (r += 2, i >>>= 2), r + i
                    }, h.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var i = t,
                            r = 0;
                        return 0 == (8191 & i) && (r += 13, i >>>= 13), 0 == (127 & i) && (r += 7, i >>>= 7), 0 == (15 & i) && (r += 4, i >>>= 4), 0 == (3 & i) && (r += 2, i >>>= 2), 0 == (1 & i) && r++, r
                    }, h.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            i = this._countBits(t);
                        return 26 * (this.length - 1) + i
                    }, h.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, i = 0; i < this.length; i++) {
                            var r = this._zeroBits(this.words[i]);
                            if (t += r, 26 !== r) break
                        }
                        return t
                    }, h.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, h.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, h.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, h.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, h.prototype.neg = function() {
                        return this.clone().ineg()
                    }, h.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, h.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] | t.words[i];
                        return this.strip()
                    }, h.prototype.ior = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuor(t)
                    }, h.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, h.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, h.prototype.iuand = function(t) {
                        var i;
                        i = this.length > t.length ? t : this;
                        for (var r = 0; r < i.length; r++) this.words[r] = this.words[r] & t.words[r];
                        return this.length = i.length, this.strip()
                    }, h.prototype.iand = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuand(t)
                    }, h.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, h.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, h.prototype.iuxor = function(t) {
                        var i, r;
                        this.length > t.length ? (i = this, r = t) : (i = t, r = this);
                        for (var n = 0; n < r.length; n++) this.words[n] = i.words[n] ^ r.words[n];
                        if (this !== i)
                            for (; n < i.length; n++) this.words[n] = i.words[n];
                        return this.length = i.length, this.strip()
                    }, h.prototype.ixor = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, h.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, h.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, h.prototype.inotn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var i = 0 | Math.ceil(t / 26),
                            r = t % 26;
                        this._expand(i), r > 0 && i--;
                        for (var e = 0; e < i; e++) this.words[e] = 67108863 & ~this.words[e];
                        return r > 0 && (this.words[e] = ~this.words[e] & 67108863 >> 26 - r), this.strip()
                    }, h.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, h.prototype.setn = function(t, i) {
                        n("number" == typeof t && t >= 0);
                        var r = t / 26 | 0,
                            e = t % 26;
                        return this._expand(r + 1), this.words[r] = i ? this.words[r] | 1 << e : this.words[r] & ~(1 << e), this.strip()
                    }, h.prototype.iadd = function(t) {
                        var i, r, n;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, i = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, i = this.isub(t), t.negative = 1, i._normSign();
                        this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                        for (var e = 0, h = 0; h < n.length; h++) i = (0 | r.words[h]) + (0 | n.words[h]) + e, this.words[h] = 67108863 & i, e = i >>> 26;
                        for (; 0 !== e && h < r.length; h++) i = (0 | r.words[h]) + e, this.words[h] = 67108863 & i, e = i >>> 26;
                        if (this.length = r.length, 0 !== e) this.words[this.length] = e, this.length++;
                        else if (r !== this)
                            for (; h < r.length; h++) this.words[h] = r.words[h];
                        return this
                    }, h.prototype.add = function(t) {
                        var i;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, i = this.sub(t), t.negative ^= 1, i) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, i = t.sub(this), this.negative = 1, i) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, h.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var i = this.iadd(t);
                            return t.negative = 1, i._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var r, n, e = this.cmp(t);
                        if (0 === e) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        e > 0 ? (r = this, n = t) : (r = t, n = this);
                        for (var h = 0, o = 0; o < n.length; o++) h = (i = (0 | r.words[o]) - (0 | n.words[o]) + h) >> 26, this.words[o] = 67108863 & i;
                        for (; 0 !== h && o < r.length; o++) h = (i = (0 | r.words[o]) + h) >> 26, this.words[o] = 67108863 & i;
                        if (0 === h && o < r.length && r !== this)
                            for (; o < r.length; o++) this.words[o] = r.words[o];
                        return this.length = Math.max(this.length, o), r !== this && (this.negative = 1), this.strip()
                    }, h.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var d = function(t, i, r) {
                        var n, e, h, o = t.words,
                            s = i.words,
                            u = r.words,
                            a = 0,
                            l = 0 | o[0],
                            f = 8191 & l,
                            m = l >>> 13,
                            d = 0 | o[1],
                            p = 8191 & d,
                            v = d >>> 13,
                            c = 0 | o[2],
                            M = 8191 & c,
                            g = c >>> 13,
                            w = 0 | o[3],
                            y = 8191 & w,
                            b = w >>> 13,
                            _ = 0 | o[4],
                            x = 8191 & _,
                            k = _ >>> 13,
                            A = 0 | o[5],
                            S = 8191 & A,
                            B = A >>> 13,
                            Z = 0 | o[6],
                            R = 8191 & Z,
                            q = Z >>> 13,
                            L = 0 | o[7],
                            N = 8191 & L,
                            E = L >>> 13,
                            O = 0 | o[8],
                            j = 8191 & O,
                            T = O >>> 13,
                            I = 0 | o[9],
                            z = 8191 & I,
                            C = I >>> 13,
                            P = 0 | s[0],
                            K = 8191 & P,
                            J = P >>> 13,
                            F = 0 | s[1],
                            D = 8191 & F,
                            H = F >>> 13,
                            U = 0 | s[2],
                            W = 8191 & U,
                            G = U >>> 13,
                            V = 0 | s[3],
                            $ = 8191 & V,
                            Q = V >>> 13,
                            X = 0 | s[4],
                            Y = 8191 & X,
                            tt = X >>> 13,
                            it = 0 | s[5],
                            rt = 8191 & it,
                            nt = it >>> 13,
                            et = 0 | s[6],
                            ht = 8191 & et,
                            ot = et >>> 13,
                            st = 0 | s[7],
                            ut = 8191 & st,
                            at = st >>> 13,
                            lt = 0 | s[8],
                            ft = 8191 & lt,
                            mt = lt >>> 13,
                            dt = 0 | s[9],
                            pt = 8191 & dt,
                            vt = dt >>> 13;
                        r.negative = t.negative ^ i.negative, r.length = 19;
                        var ct = (a + (n = Math.imul(f, K)) | 0) + ((8191 & (e = (e = Math.imul(f, J)) + Math.imul(m, K) | 0)) << 13) | 0;
                        a = ((h = Math.imul(m, J)) + (e >>> 13) | 0) + (ct >>> 26) | 0, ct &= 67108863, n = Math.imul(p, K), e = (e = Math.imul(p, J)) + Math.imul(v, K) | 0, h = Math.imul(v, J);
                        var Mt = (a + (n = n + Math.imul(f, D) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, H) | 0) + Math.imul(m, D) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, H) | 0) + (e >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(M, K), e = (e = Math.imul(M, J)) + Math.imul(g, K) | 0, h = Math.imul(g, J), n = n + Math.imul(p, D) | 0, e = (e = e + Math.imul(p, H) | 0) + Math.imul(v, D) | 0, h = h + Math.imul(v, H) | 0;
                        var gt = (a + (n = n + Math.imul(f, W) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, G) | 0) + Math.imul(m, W) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, G) | 0) + (e >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(y, K), e = (e = Math.imul(y, J)) + Math.imul(b, K) | 0, h = Math.imul(b, J), n = n + Math.imul(M, D) | 0, e = (e = e + Math.imul(M, H) | 0) + Math.imul(g, D) | 0, h = h + Math.imul(g, H) | 0, n = n + Math.imul(p, W) | 0, e = (e = e + Math.imul(p, G) | 0) + Math.imul(v, W) | 0, h = h + Math.imul(v, G) | 0;
                        var wt = (a + (n = n + Math.imul(f, $) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, Q) | 0) + Math.imul(m, $) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, Q) | 0) + (e >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(x, K), e = (e = Math.imul(x, J)) + Math.imul(k, K) | 0, h = Math.imul(k, J), n = n + Math.imul(y, D) | 0, e = (e = e + Math.imul(y, H) | 0) + Math.imul(b, D) | 0, h = h + Math.imul(b, H) | 0, n = n + Math.imul(M, W) | 0, e = (e = e + Math.imul(M, G) | 0) + Math.imul(g, W) | 0, h = h + Math.imul(g, G) | 0, n = n + Math.imul(p, $) | 0, e = (e = e + Math.imul(p, Q) | 0) + Math.imul(v, $) | 0, h = h + Math.imul(v, Q) | 0;
                        var yt = (a + (n = n + Math.imul(f, Y) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, tt) | 0) + Math.imul(m, Y) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, tt) | 0) + (e >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(S, K), e = (e = Math.imul(S, J)) + Math.imul(B, K) | 0, h = Math.imul(B, J), n = n + Math.imul(x, D) | 0, e = (e = e + Math.imul(x, H) | 0) + Math.imul(k, D) | 0, h = h + Math.imul(k, H) | 0, n = n + Math.imul(y, W) | 0, e = (e = e + Math.imul(y, G) | 0) + Math.imul(b, W) | 0, h = h + Math.imul(b, G) | 0, n = n + Math.imul(M, $) | 0, e = (e = e + Math.imul(M, Q) | 0) + Math.imul(g, $) | 0, h = h + Math.imul(g, Q) | 0, n = n + Math.imul(p, Y) | 0, e = (e = e + Math.imul(p, tt) | 0) + Math.imul(v, Y) | 0, h = h + Math.imul(v, tt) | 0;
                        var bt = (a + (n = n + Math.imul(f, rt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, nt) | 0) + Math.imul(m, rt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, nt) | 0) + (e >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(R, K), e = (e = Math.imul(R, J)) + Math.imul(q, K) | 0, h = Math.imul(q, J), n = n + Math.imul(S, D) | 0, e = (e = e + Math.imul(S, H) | 0) + Math.imul(B, D) | 0, h = h + Math.imul(B, H) | 0, n = n + Math.imul(x, W) | 0, e = (e = e + Math.imul(x, G) | 0) + Math.imul(k, W) | 0, h = h + Math.imul(k, G) | 0, n = n + Math.imul(y, $) | 0, e = (e = e + Math.imul(y, Q) | 0) + Math.imul(b, $) | 0, h = h + Math.imul(b, Q) | 0, n = n + Math.imul(M, Y) | 0, e = (e = e + Math.imul(M, tt) | 0) + Math.imul(g, Y) | 0, h = h + Math.imul(g, tt) | 0, n = n + Math.imul(p, rt) | 0, e = (e = e + Math.imul(p, nt) | 0) + Math.imul(v, rt) | 0, h = h + Math.imul(v, nt) | 0;
                        var _t = (a + (n = n + Math.imul(f, ht) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, ot) | 0) + Math.imul(m, ht) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, ot) | 0) + (e >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(N, K), e = (e = Math.imul(N, J)) + Math.imul(E, K) | 0, h = Math.imul(E, J), n = n + Math.imul(R, D) | 0, e = (e = e + Math.imul(R, H) | 0) + Math.imul(q, D) | 0, h = h + Math.imul(q, H) | 0, n = n + Math.imul(S, W) | 0, e = (e = e + Math.imul(S, G) | 0) + Math.imul(B, W) | 0, h = h + Math.imul(B, G) | 0, n = n + Math.imul(x, $) | 0, e = (e = e + Math.imul(x, Q) | 0) + Math.imul(k, $) | 0, h = h + Math.imul(k, Q) | 0, n = n + Math.imul(y, Y) | 0, e = (e = e + Math.imul(y, tt) | 0) + Math.imul(b, Y) | 0, h = h + Math.imul(b, tt) | 0, n = n + Math.imul(M, rt) | 0, e = (e = e + Math.imul(M, nt) | 0) + Math.imul(g, rt) | 0, h = h + Math.imul(g, nt) | 0, n = n + Math.imul(p, ht) | 0, e = (e = e + Math.imul(p, ot) | 0) + Math.imul(v, ht) | 0, h = h + Math.imul(v, ot) | 0;
                        var xt = (a + (n = n + Math.imul(f, ut) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, at) | 0) + Math.imul(m, ut) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, at) | 0) + (e >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(j, K), e = (e = Math.imul(j, J)) + Math.imul(T, K) | 0, h = Math.imul(T, J), n = n + Math.imul(N, D) | 0, e = (e = e + Math.imul(N, H) | 0) + Math.imul(E, D) | 0, h = h + Math.imul(E, H) | 0, n = n + Math.imul(R, W) | 0, e = (e = e + Math.imul(R, G) | 0) + Math.imul(q, W) | 0, h = h + Math.imul(q, G) | 0, n = n + Math.imul(S, $) | 0, e = (e = e + Math.imul(S, Q) | 0) + Math.imul(B, $) | 0, h = h + Math.imul(B, Q) | 0, n = n + Math.imul(x, Y) | 0, e = (e = e + Math.imul(x, tt) | 0) + Math.imul(k, Y) | 0, h = h + Math.imul(k, tt) | 0, n = n + Math.imul(y, rt) | 0, e = (e = e + Math.imul(y, nt) | 0) + Math.imul(b, rt) | 0, h = h + Math.imul(b, nt) | 0, n = n + Math.imul(M, ht) | 0, e = (e = e + Math.imul(M, ot) | 0) + Math.imul(g, ht) | 0, h = h + Math.imul(g, ot) | 0, n = n + Math.imul(p, ut) | 0, e = (e = e + Math.imul(p, at) | 0) + Math.imul(v, ut) | 0, h = h + Math.imul(v, at) | 0;
                        var kt = (a + (n = n + Math.imul(f, ft) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, mt) | 0) + Math.imul(m, ft) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, mt) | 0) + (e >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(z, K), e = (e = Math.imul(z, J)) + Math.imul(C, K) | 0, h = Math.imul(C, J), n = n + Math.imul(j, D) | 0, e = (e = e + Math.imul(j, H) | 0) + Math.imul(T, D) | 0, h = h + Math.imul(T, H) | 0, n = n + Math.imul(N, W) | 0, e = (e = e + Math.imul(N, G) | 0) + Math.imul(E, W) | 0, h = h + Math.imul(E, G) | 0, n = n + Math.imul(R, $) | 0, e = (e = e + Math.imul(R, Q) | 0) + Math.imul(q, $) | 0, h = h + Math.imul(q, Q) | 0, n = n + Math.imul(S, Y) | 0, e = (e = e + Math.imul(S, tt) | 0) + Math.imul(B, Y) | 0, h = h + Math.imul(B, tt) | 0, n = n + Math.imul(x, rt) | 0, e = (e = e + Math.imul(x, nt) | 0) + Math.imul(k, rt) | 0, h = h + Math.imul(k, nt) | 0, n = n + Math.imul(y, ht) | 0, e = (e = e + Math.imul(y, ot) | 0) + Math.imul(b, ht) | 0, h = h + Math.imul(b, ot) | 0, n = n + Math.imul(M, ut) | 0, e = (e = e + Math.imul(M, at) | 0) + Math.imul(g, ut) | 0, h = h + Math.imul(g, at) | 0, n = n + Math.imul(p, ft) | 0, e = (e = e + Math.imul(p, mt) | 0) + Math.imul(v, ft) | 0, h = h + Math.imul(v, mt) | 0;
                        var At = (a + (n = n + Math.imul(f, pt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(f, vt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(m, vt) | 0) + (e >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(z, D), e = (e = Math.imul(z, H)) + Math.imul(C, D) | 0, h = Math.imul(C, H), n = n + Math.imul(j, W) | 0, e = (e = e + Math.imul(j, G) | 0) + Math.imul(T, W) | 0, h = h + Math.imul(T, G) | 0, n = n + Math.imul(N, $) | 0, e = (e = e + Math.imul(N, Q) | 0) + Math.imul(E, $) | 0, h = h + Math.imul(E, Q) | 0, n = n + Math.imul(R, Y) | 0, e = (e = e + Math.imul(R, tt) | 0) + Math.imul(q, Y) | 0, h = h + Math.imul(q, tt) | 0, n = n + Math.imul(S, rt) | 0, e = (e = e + Math.imul(S, nt) | 0) + Math.imul(B, rt) | 0, h = h + Math.imul(B, nt) | 0, n = n + Math.imul(x, ht) | 0, e = (e = e + Math.imul(x, ot) | 0) + Math.imul(k, ht) | 0, h = h + Math.imul(k, ot) | 0, n = n + Math.imul(y, ut) | 0, e = (e = e + Math.imul(y, at) | 0) + Math.imul(b, ut) | 0, h = h + Math.imul(b, at) | 0, n = n + Math.imul(M, ft) | 0, e = (e = e + Math.imul(M, mt) | 0) + Math.imul(g, ft) | 0, h = h + Math.imul(g, mt) | 0;
                        var St = (a + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(p, vt) | 0) + Math.imul(v, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(v, vt) | 0) + (e >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(z, W), e = (e = Math.imul(z, G)) + Math.imul(C, W) | 0, h = Math.imul(C, G), n = n + Math.imul(j, $) | 0, e = (e = e + Math.imul(j, Q) | 0) + Math.imul(T, $) | 0, h = h + Math.imul(T, Q) | 0, n = n + Math.imul(N, Y) | 0, e = (e = e + Math.imul(N, tt) | 0) + Math.imul(E, Y) | 0, h = h + Math.imul(E, tt) | 0, n = n + Math.imul(R, rt) | 0, e = (e = e + Math.imul(R, nt) | 0) + Math.imul(q, rt) | 0, h = h + Math.imul(q, nt) | 0, n = n + Math.imul(S, ht) | 0, e = (e = e + Math.imul(S, ot) | 0) + Math.imul(B, ht) | 0, h = h + Math.imul(B, ot) | 0, n = n + Math.imul(x, ut) | 0, e = (e = e + Math.imul(x, at) | 0) + Math.imul(k, ut) | 0, h = h + Math.imul(k, at) | 0, n = n + Math.imul(y, ft) | 0, e = (e = e + Math.imul(y, mt) | 0) + Math.imul(b, ft) | 0, h = h + Math.imul(b, mt) | 0;
                        var Bt = (a + (n = n + Math.imul(M, pt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(M, vt) | 0) + Math.imul(g, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(g, vt) | 0) + (e >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(z, $), e = (e = Math.imul(z, Q)) + Math.imul(C, $) | 0, h = Math.imul(C, Q), n = n + Math.imul(j, Y) | 0, e = (e = e + Math.imul(j, tt) | 0) + Math.imul(T, Y) | 0, h = h + Math.imul(T, tt) | 0, n = n + Math.imul(N, rt) | 0, e = (e = e + Math.imul(N, nt) | 0) + Math.imul(E, rt) | 0, h = h + Math.imul(E, nt) | 0, n = n + Math.imul(R, ht) | 0, e = (e = e + Math.imul(R, ot) | 0) + Math.imul(q, ht) | 0, h = h + Math.imul(q, ot) | 0, n = n + Math.imul(S, ut) | 0, e = (e = e + Math.imul(S, at) | 0) + Math.imul(B, ut) | 0, h = h + Math.imul(B, at) | 0, n = n + Math.imul(x, ft) | 0, e = (e = e + Math.imul(x, mt) | 0) + Math.imul(k, ft) | 0, h = h + Math.imul(k, mt) | 0;
                        var Zt = (a + (n = n + Math.imul(y, pt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(y, vt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(b, vt) | 0) + (e >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, n = Math.imul(z, Y), e = (e = Math.imul(z, tt)) + Math.imul(C, Y) | 0, h = Math.imul(C, tt), n = n + Math.imul(j, rt) | 0, e = (e = e + Math.imul(j, nt) | 0) + Math.imul(T, rt) | 0, h = h + Math.imul(T, nt) | 0, n = n + Math.imul(N, ht) | 0, e = (e = e + Math.imul(N, ot) | 0) + Math.imul(E, ht) | 0, h = h + Math.imul(E, ot) | 0, n = n + Math.imul(R, ut) | 0, e = (e = e + Math.imul(R, at) | 0) + Math.imul(q, ut) | 0, h = h + Math.imul(q, at) | 0, n = n + Math.imul(S, ft) | 0, e = (e = e + Math.imul(S, mt) | 0) + Math.imul(B, ft) | 0, h = h + Math.imul(B, mt) | 0;
                        var Rt = (a + (n = n + Math.imul(x, pt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(x, vt) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(k, vt) | 0) + (e >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(z, rt), e = (e = Math.imul(z, nt)) + Math.imul(C, rt) | 0, h = Math.imul(C, nt), n = n + Math.imul(j, ht) | 0, e = (e = e + Math.imul(j, ot) | 0) + Math.imul(T, ht) | 0, h = h + Math.imul(T, ot) | 0, n = n + Math.imul(N, ut) | 0, e = (e = e + Math.imul(N, at) | 0) + Math.imul(E, ut) | 0, h = h + Math.imul(E, at) | 0, n = n + Math.imul(R, ft) | 0, e = (e = e + Math.imul(R, mt) | 0) + Math.imul(q, ft) | 0, h = h + Math.imul(q, mt) | 0;
                        var qt = (a + (n = n + Math.imul(S, pt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(S, vt) | 0) + Math.imul(B, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(B, vt) | 0) + (e >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, n = Math.imul(z, ht), e = (e = Math.imul(z, ot)) + Math.imul(C, ht) | 0, h = Math.imul(C, ot), n = n + Math.imul(j, ut) | 0, e = (e = e + Math.imul(j, at) | 0) + Math.imul(T, ut) | 0, h = h + Math.imul(T, at) | 0, n = n + Math.imul(N, ft) | 0, e = (e = e + Math.imul(N, mt) | 0) + Math.imul(E, ft) | 0, h = h + Math.imul(E, mt) | 0;
                        var Lt = (a + (n = n + Math.imul(R, pt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(R, vt) | 0) + Math.imul(q, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(q, vt) | 0) + (e >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, n = Math.imul(z, ut), e = (e = Math.imul(z, at)) + Math.imul(C, ut) | 0, h = Math.imul(C, at), n = n + Math.imul(j, ft) | 0, e = (e = e + Math.imul(j, mt) | 0) + Math.imul(T, ft) | 0, h = h + Math.imul(T, mt) | 0;
                        var Nt = (a + (n = n + Math.imul(N, pt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(N, vt) | 0) + Math.imul(E, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(E, vt) | 0) + (e >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(z, ft), e = (e = Math.imul(z, mt)) + Math.imul(C, ft) | 0, h = Math.imul(C, mt);
                        var Et = (a + (n = n + Math.imul(j, pt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(j, vt) | 0) + Math.imul(T, pt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(T, vt) | 0) + (e >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863;
                        var Ot = (a + (n = Math.imul(z, pt)) | 0) + ((8191 & (e = (e = Math.imul(z, vt)) + Math.imul(C, pt) | 0)) << 13) | 0;
                        return a = ((h = Math.imul(C, vt)) + (e >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, u[0] = ct, u[1] = Mt, u[2] = gt, u[3] = wt, u[4] = yt, u[5] = bt, u[6] = _t, u[7] = xt, u[8] = kt, u[9] = At, u[10] = St, u[11] = Bt, u[12] = Zt, u[13] = Rt, u[14] = qt, u[15] = Lt, u[16] = Nt, u[17] = Et, u[18] = Ot, 0 !== a && (u[19] = a, r.length++), r
                    };

                    function p(t, i, r) {
                        return (new v).mulp(t, i, r)
                    }

                    function v(t, i) {
                        this.x = t, this.y = i
                    }
                    Math.imul || (d = m), h.prototype.mulTo = function(t, i) {
                        var r = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? d(this, t, i) : r < 63 ? m(this, t, i) : r < 1024 ? function(t, i, r) {
                            r.negative = i.negative ^ t.negative, r.length = t.length + i.length;
                            for (var n = 0, e = 0, h = 0; h < r.length - 1; h++) {
                                var o = e;
                                e = 0;
                                for (var s = 67108863 & n, u = Math.min(h, i.length - 1), a = Math.max(0, h - t.length + 1); a <= u; a++) {
                                    var l = h - a,
                                        f = (0 | t.words[l]) * (0 | i.words[a]),
                                        m = 67108863 & f;
                                    s = 67108863 & (m = m + s | 0), e += (o = (o = o + (f / 67108864 | 0) | 0) + (m >>> 26) | 0) >>> 26, o &= 67108863
                                }
                                r.words[h] = s, n = o, o = e
                            }
                            return 0 !== n ? r.words[h] = n : r.length--, r.strip()
                        }(this, t, i) : p(this, t, i)
                    }, v.prototype.makeRBT = function(t) {
                        for (var i = new Array(t), r = h.prototype._countBits(t) - 1, n = 0; n < t; n++) i[n] = this.revBin(n, r, t);
                        return i
                    }, v.prototype.revBin = function(t, i, r) {
                        if (0 === t || t === r - 1) return t;
                        for (var n = 0, e = 0; e < i; e++) n |= (1 & t) << i - e - 1, t >>= 1;
                        return n
                    }, v.prototype.permute = function(t, i, r, n, e, h) {
                        for (var o = 0; o < h; o++) n[o] = i[t[o]], e[o] = r[t[o]]
                    }, v.prototype.transform = function(t, i, r, n, e, h) {
                        this.permute(h, t, i, r, n, e);
                        for (var o = 1; o < e; o <<= 1)
                            for (var s = o << 1, u = Math.cos(2 * Math.PI / s), a = Math.sin(2 * Math.PI / s), l = 0; l < e; l += s)
                                for (var f = u, m = a, d = 0; d < o; d++) {
                                    var p = r[l + d],
                                        v = n[l + d],
                                        c = r[l + d + o],
                                        M = n[l + d + o],
                                        g = f * c - m * M;
                                    M = f * M + m * c, c = g, r[l + d] = p + c, n[l + d] = v + M, r[l + d + o] = p - c, n[l + d + o] = v - M, d !== s && (g = u * f - a * m, m = u * m + a * f, f = g)
                                }
                    }, v.prototype.guessLen13b = function(t, i) {
                        var r = 1 | Math.max(i, t),
                            n = 1 & r,
                            e = 0;
                        for (r = r / 2 | 0; r; r >>>= 1) e++;
                        return 1 << e + 1 + n
                    }, v.prototype.conjugate = function(t, i, r) {
                        if (!(r <= 1))
                            for (var n = 0; n < r / 2; n++) {
                                var e = t[n];
                                t[n] = t[r - n - 1], t[r - n - 1] = e, e = i[n], i[n] = -i[r - n - 1], i[r - n - 1] = -e
                            }
                    }, v.prototype.normalize13b = function(t, i) {
                        for (var r = 0, n = 0; n < i / 2; n++) {
                            var e = 8192 * Math.round(t[2 * n + 1] / i) + Math.round(t[2 * n] / i) + r;
                            t[n] = 67108863 & e, r = e < 67108864 ? 0 : e / 67108864 | 0
                        }
                        return t
                    }, v.prototype.convert13b = function(t, i, r, e) {
                        for (var h = 0, o = 0; o < i; o++) h += 0 | t[o], r[2 * o] = 8191 & h, h >>>= 13, r[2 * o + 1] = 8191 & h, h >>>= 13;
                        for (o = 2 * i; o < e; ++o) r[o] = 0;
                        n(0 === h), n(0 == (-8192 & h))
                    }, v.prototype.stub = function(t) {
                        for (var i = new Array(t), r = 0; r < t; r++) i[r] = 0;
                        return i
                    }, v.prototype.mulp = function(t, i, r) {
                        var n = 2 * this.guessLen13b(t.length, i.length),
                            e = this.makeRBT(n),
                            h = this.stub(n),
                            o = new Array(n),
                            s = new Array(n),
                            u = new Array(n),
                            a = new Array(n),
                            l = new Array(n),
                            f = new Array(n),
                            m = r.words;
                        m.length = n, this.convert13b(t.words, t.length, o, n), this.convert13b(i.words, i.length, a, n), this.transform(o, h, s, u, n, e), this.transform(a, h, l, f, n, e);
                        for (var d = 0; d < n; d++) {
                            var p = s[d] * l[d] - u[d] * f[d];
                            u[d] = s[d] * f[d] + u[d] * l[d], s[d] = p
                        }
                        return this.conjugate(s, u, n), this.transform(s, u, m, h, n, e), this.conjugate(m, h, n), this.normalize13b(m, n), r.negative = t.negative ^ i.negative, r.length = t.length + i.length, r.strip()
                    }, h.prototype.mul = function(t) {
                        var i = new h(null);
                        return i.words = new Array(this.length + t.length), this.mulTo(t, i)
                    }, h.prototype.mulf = function(t) {
                        var i = new h(null);
                        return i.words = new Array(this.length + t.length), p(this, t, i)
                    }, h.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, h.prototype.imuln = function(t) {
                        n("number" == typeof t), n(t < 67108864);
                        for (var i = 0, r = 0; r < this.length; r++) {
                            var e = (0 | this.words[r]) * t,
                                h = (67108863 & e) + (67108863 & i);
                            i >>= 26, i += e / 67108864 | 0, i += h >>> 26, this.words[r] = 67108863 & h
                        }
                        return 0 !== i && (this.words[r] = i, this.length++), this
                    }, h.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, h.prototype.sqr = function() {
                        return this.mul(this)
                    }, h.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, h.prototype.pow = function(t) {
                        var i = function(t) {
                            for (var i = new Array(t.bitLength()), r = 0; r < i.length; r++) {
                                var n = r / 26 | 0,
                                    e = r % 26;
                                i[r] = (t.words[n] & 1 << e) >>> e
                            }
                            return i
                        }(t);
                        if (0 === i.length) return new h(1);
                        for (var r = this, n = 0; n < i.length && 0 === i[n]; n++, r = r.sqr());
                        if (++n < i.length)
                            for (var e = r.sqr(); n < i.length; n++, e = e.sqr()) 0 !== i[n] && (r = r.mul(e));
                        return r
                    }, h.prototype.iushln = function(t) {
                        n("number" == typeof t && t >= 0);
                        var i, r = t % 26,
                            e = (t - r) / 26,
                            h = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var o = 0;
                            for (i = 0; i < this.length; i++) {
                                var s = this.words[i] & h,
                                    u = (0 | this.words[i]) - s << r;
                                this.words[i] = u | o, o = s >>> 26 - r
                            }
                            o && (this.words[i] = o, this.length++)
                        }
                        if (0 !== e) {
                            for (i = this.length - 1; i >= 0; i--) this.words[i + e] = this.words[i];
                            for (i = 0; i < e; i++) this.words[i] = 0;
                            this.length += e
                        }
                        return this.strip()
                    }, h.prototype.ishln = function(t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, h.prototype.iushrn = function(t, i, r) {
                        var e;
                        n("number" == typeof t && t >= 0), e = i ? (i - i % 26) / 26 : 0;
                        var h = t % 26,
                            o = Math.min((t - h) / 26, this.length),
                            s = 67108863 ^ 67108863 >>> h << h,
                            u = r;
                        if (e -= o, e = Math.max(0, e), u) {
                            for (var a = 0; a < o; a++) u.words[a] = this.words[a];
                            u.length = o
                        }
                        if (0 === o);
                        else if (this.length > o)
                            for (this.length -= o, a = 0; a < this.length; a++) this.words[a] = this.words[a + o];
                        else this.words[0] = 0, this.length = 1;
                        var l = 0;
                        for (a = this.length - 1; a >= 0 && (0 !== l || a >= e); a--) {
                            var f = 0 | this.words[a];
                            this.words[a] = l << 26 - h | f >>> h, l = f & s
                        }
                        return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, h.prototype.ishrn = function(t, i, r) {
                        return n(0 === this.negative), this.iushrn(t, i, r)
                    }, h.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, h.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, h.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, h.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, h.prototype.testn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var i = t % 26,
                            r = (t - i) / 26,
                            e = 1 << i;
                        return !(this.length <= r) && !!(this.words[r] & e)
                    }, h.prototype.imaskn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var i = t % 26,
                            r = (t - i) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                        if (0 !== i && r++, this.length = Math.min(r, this.length), 0 !== i) {
                            var e = 67108863 ^ 67108863 >>> i << i;
                            this.words[this.length - 1] &= e
                        }
                        return this.strip()
                    }, h.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, h.prototype.iaddn = function(t) {
                        return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, h.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                        return this.length = Math.max(this.length, i + 1), this
                    }, h.prototype.isubn = function(t) {
                        if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
                        return this.strip()
                    }, h.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, h.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, h.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, h.prototype.abs = function() {
                        return this.clone().iabs()
                    }, h.prototype._ishlnsubmul = function(t, i, r) {
                        var e, h, o = t.length + r;
                        this._expand(o);
                        var s = 0;
                        for (e = 0; e < t.length; e++) {
                            h = (0 | this.words[e + r]) + s;
                            var u = (0 | t.words[e]) * i;
                            s = ((h -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[e + r] = 67108863 & h
                        }
                        for (; e < this.length - r; e++) s = (h = (0 | this.words[e + r]) + s) >> 26, this.words[e + r] = 67108863 & h;
                        if (0 === s) return this.strip();
                        for (n(-1 === s), s = 0, e = 0; e < this.length; e++) s = (h = -(0 | this.words[e]) + s) >> 26, this.words[e] = 67108863 & h;
                        return this.negative = 1, this.strip()
                    }, h.prototype._wordDiv = function(t, i) {
                        var r = (this.length, t.length),
                            n = this.clone(),
                            e = t,
                            o = 0 | e.words[e.length - 1];
                        0 !== (r = 26 - this._countBits(o)) && (e = e.ushln(r), n.iushln(r), o = 0 | e.words[e.length - 1]);
                        var s, u = n.length - e.length;
                        if ("mod" !== i) {
                            (s = new h(null)).length = u + 1, s.words = new Array(s.length);
                            for (var a = 0; a < s.length; a++) s.words[a] = 0
                        }
                        var l = n.clone()._ishlnsubmul(e, 1, u);
                        0 === l.negative && (n = l, s && (s.words[u] = 1));
                        for (var f = u - 1; f >= 0; f--) {
                            var m = 67108864 * (0 | n.words[e.length + f]) + (0 | n.words[e.length + f - 1]);
                            for (m = Math.min(m / o | 0, 67108863), n._ishlnsubmul(e, m, f); 0 !== n.negative;) m--, n.negative = 0, n._ishlnsubmul(e, 1, f), n.isZero() || (n.negative ^= 1);
                            s && (s.words[f] = m)
                        }
                        return s && s.strip(), n.strip(), "div" !== i && 0 !== r && n.iushrn(r), {
                            div: s || null,
                            mod: n
                        }
                    }, h.prototype.divmod = function(t, i, r) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new h(0),
                            mod: new h(0)
                        } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, i), "mod" !== i && (e = s.div.neg()), "div" !== i && (o = s.mod.neg(), r && 0 !== o.negative && o.iadd(t)), {
                            div: e,
                            mod: o
                        }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), i), "mod" !== i && (e = s.div.neg()), {
                            div: e,
                            mod: s.mod
                        }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), i), "div" !== i && (o = s.mod.neg(), r && 0 !== o.negative && o.isub(t)), {
                            div: s.div,
                            mod: o
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new h(0),
                            mod: this
                        } : 1 === t.length ? "div" === i ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === i ? {
                            div: null,
                            mod: new h(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new h(this.modn(t.words[0]))
                        } : this._wordDiv(t, i);
                        var e, o, s
                    }, h.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, h.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, h.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, h.prototype.divRound = function(t) {
                        var i = this.divmod(t);
                        if (i.mod.isZero()) return i.div;
                        var r = 0 !== i.div.negative ? i.mod.isub(t) : i.mod,
                            n = t.ushrn(1),
                            e = t.andln(1),
                            h = r.cmp(n);
                        return h < 0 || 1 === e && 0 === h ? i.div : 0 !== i.div.negative ? i.div.isubn(1) : i.div.iaddn(1)
                    }, h.prototype.modn = function(t) {
                        n(t <= 67108863);
                        for (var i = (1 << 26) % t, r = 0, e = this.length - 1; e >= 0; e--) r = (i * r + (0 | this.words[e])) % t;
                        return r
                    }, h.prototype.idivn = function(t) {
                        n(t <= 67108863);
                        for (var i = 0, r = this.length - 1; r >= 0; r--) {
                            var e = (0 | this.words[r]) + 67108864 * i;
                            this.words[r] = e / t | 0, i = e % t
                        }
                        return this.strip()
                    }, h.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, h.prototype.egcd = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var i = this,
                            r = t.clone();
                        i = 0 !== i.negative ? i.umod(t) : i.clone();
                        for (var e = new h(1), o = new h(0), s = new h(0), u = new h(1), a = 0; i.isEven() && r.isEven();) i.iushrn(1), r.iushrn(1), ++a;
                        for (var l = r.clone(), f = i.clone(); !i.isZero();) {
                            for (var m = 0, d = 1; 0 == (i.words[0] & d) && m < 26; ++m, d <<= 1);
                            if (m > 0)
                                for (i.iushrn(m); m-- > 0;)(e.isOdd() || o.isOdd()) && (e.iadd(l), o.isub(f)), e.iushrn(1), o.iushrn(1);
                            for (var p = 0, v = 1; 0 == (r.words[0] & v) && p < 26; ++p, v <<= 1);
                            if (p > 0)
                                for (r.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(f)), s.iushrn(1), u.iushrn(1);
                            i.cmp(r) >= 0 ? (i.isub(r), e.isub(s), o.isub(u)) : (r.isub(i), s.isub(e), u.isub(o))
                        }
                        return {
                            a: s,
                            b: u,
                            gcd: r.iushln(a)
                        }
                    }, h.prototype._invmp = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var i = this,
                            r = t.clone();
                        i = 0 !== i.negative ? i.umod(t) : i.clone();
                        for (var e, o = new h(1), s = new h(0), u = r.clone(); i.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                            for (var a = 0, l = 1; 0 == (i.words[0] & l) && a < 26; ++a, l <<= 1);
                            if (a > 0)
                                for (i.iushrn(a); a-- > 0;) o.isOdd() && o.iadd(u), o.iushrn(1);
                            for (var f = 0, m = 1; 0 == (r.words[0] & m) && f < 26; ++f, m <<= 1);
                            if (f > 0)
                                for (r.iushrn(f); f-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                            i.cmp(r) >= 0 ? (i.isub(r), o.isub(s)) : (r.isub(i), s.isub(o))
                        }
                        return (e = 0 === i.cmpn(1) ? o : s).cmpn(0) < 0 && e.iadd(t), e
                    }, h.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var i = this.clone(),
                            r = t.clone();
                        i.negative = 0, r.negative = 0;
                        for (var n = 0; i.isEven() && r.isEven(); n++) i.iushrn(1), r.iushrn(1);
                        for (;;) {
                            for (; i.isEven();) i.iushrn(1);
                            for (; r.isEven();) r.iushrn(1);
                            var e = i.cmp(r);
                            if (e < 0) {
                                var h = i;
                                i = r, r = h
                            } else if (0 === e || 0 === r.cmpn(1)) break;
                            i.isub(r)
                        }
                        return r.iushln(n)
                    }, h.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, h.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, h.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, h.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, h.prototype.bincn = function(t) {
                        n("number" == typeof t);
                        var i = t % 26,
                            r = (t - i) / 26,
                            e = 1 << i;
                        if (this.length <= r) return this._expand(r + 1), this.words[r] |= e, this;
                        for (var h = e, o = r; 0 !== h && o < this.length; o++) {
                            var s = 0 | this.words[o];
                            h = (s += h) >>> 26, s &= 67108863, this.words[o] = s
                        }
                        return 0 !== h && (this.words[o] = h, this.length++), this
                    }, h.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, h.prototype.cmpn = function(t) {
                        var i, r = t < 0;
                        if (0 !== this.negative && !r) return -1;
                        if (0 === this.negative && r) return 1;
                        if (this.strip(), this.length > 1) i = 1;
                        else {
                            r && (t = -t), n(t <= 67108863, "Number is too big");
                            var e = 0 | this.words[0];
                            i = e === t ? 0 : e < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -i : i
                    }, h.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var i = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -i : i
                    }, h.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var i = 0, r = this.length - 1; r >= 0; r--) {
                            var n = 0 | this.words[r],
                                e = 0 | t.words[r];
                            if (n !== e) {
                                n < e ? i = -1 : n > e && (i = 1);
                                break
                            }
                        }
                        return i
                    }, h.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, h.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, h.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, h.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, h.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, h.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, h.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, h.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, h.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, h.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, h.red = function(t) {
                        return new _(t)
                    }, h.prototype.toRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, h.prototype.fromRed = function() {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, h.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, h.prototype.forceRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, h.prototype.redAdd = function(t) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, h.prototype.redIAdd = function(t) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, h.prototype.redSub = function(t) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, h.prototype.redISub = function(t) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, h.prototype.redShl = function(t) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, h.prototype.redMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, h.prototype.redIMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, h.prototype.redSqr = function() {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, h.prototype.redISqr = function() {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, h.prototype.redSqrt = function() {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, h.prototype.redInvm = function() {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, h.prototype.redNeg = function() {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, h.prototype.redPow = function(t) {
                        return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var c = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function M(t, i) {
                        this.name = t, this.p = new h(i, 16), this.n = this.p.bitLength(), this.k = new h(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function g() {
                        M.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function w() {
                        M.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function y() {
                        M.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function b() {
                        M.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function _(t) {
                        if ("string" == typeof t) {
                            var i = h._prime(t);
                            this.m = i.p, this.prime = i
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function x(t) {
                        _.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new h(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    M.prototype._tmp = function() {
                        var t = new h(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, M.prototype.ireduce = function(t) {
                        var i, r = t;
                        do {
                            this.split(r, this.tmp), i = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (i > this.n);
                        var n = i < this.n ? -1 : r.ucmp(this.p);
                        return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r
                    }, M.prototype.split = function(t, i) {
                        t.iushrn(this.n, 0, i)
                    }, M.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, e(g, M), g.prototype.split = function(t, i) {
                        for (var r = Math.min(t.length, 9), n = 0; n < r; n++) i.words[n] = t.words[n];
                        if (i.length = r, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var e = t.words[9];
                        for (i.words[i.length++] = 4194303 & e, n = 10; n < t.length; n++) {
                            var h = 0 | t.words[n];
                            t.words[n - 10] = (4194303 & h) << 4 | e >>> 22, e = h
                        }
                        e >>>= 22, t.words[n - 10] = e, 0 === e && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, g.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var i = 0, r = 0; r < t.length; r++) {
                            var n = 0 | t.words[r];
                            i += 977 * n, t.words[r] = 67108863 & i, i = 64 * n + (i / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, e(w, M), e(y, M), e(b, M), b.prototype.imulK = function(t) {
                        for (var i = 0, r = 0; r < t.length; r++) {
                            var n = 19 * (0 | t.words[r]) + i,
                                e = 67108863 & n;
                            n >>>= 26, t.words[r] = e, i = n
                        }
                        return 0 !== i && (t.words[t.length++] = i), t
                    }, h._prime = function(t) {
                        if (c[t]) return c[t];
                        var i;
                        if ("k256" === t) i = new g;
                        else if ("p224" === t) i = new w;
                        else if ("p192" === t) i = new y;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            i = new b
                        }
                        return c[t] = i, i
                    }, _.prototype._verify1 = function(t) {
                        n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                    }, _.prototype._verify2 = function(t, i) {
                        n(0 == (t.negative | i.negative), "red works only with positives"), n(t.red && t.red === i.red, "red works only with red numbers")
                    }, _.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                    }, _.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, _.prototype.add = function(t, i) {
                        this._verify2(t, i);
                        var r = t.add(i);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    }, _.prototype.iadd = function(t, i) {
                        this._verify2(t, i);
                        var r = t.iadd(i);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r
                    }, _.prototype.sub = function(t, i) {
                        this._verify2(t, i);
                        var r = t.sub(i);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                    }, _.prototype.isub = function(t, i) {
                        this._verify2(t, i);
                        var r = t.isub(i);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r
                    }, _.prototype.shl = function(t, i) {
                        return this._verify1(t), this.imod(t.ushln(i))
                    }, _.prototype.imul = function(t, i) {
                        return this._verify2(t, i), this.imod(t.imul(i))
                    }, _.prototype.mul = function(t, i) {
                        return this._verify2(t, i), this.imod(t.mul(i))
                    }, _.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, _.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, _.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var i = this.m.andln(3);
                        if (n(i % 2 == 1), 3 === i) {
                            var r = this.m.add(new h(1)).iushrn(2);
                            return this.pow(t, r)
                        }
                        for (var e = this.m.subn(1), o = 0; !e.isZero() && 0 === e.andln(1);) o++, e.iushrn(1);
                        n(!e.isZero());
                        var s = new h(1).toRed(this),
                            u = s.redNeg(),
                            a = this.m.subn(1).iushrn(1),
                            l = this.m.bitLength();
                        for (l = new h(2 * l * l).toRed(this); 0 !== this.pow(l, a).cmp(u);) l.redIAdd(u);
                        for (var f = this.pow(l, e), m = this.pow(t, e.addn(1).iushrn(1)), d = this.pow(t, e), p = o; 0 !== d.cmp(s);) {
                            for (var v = d, c = 0; 0 !== v.cmp(s); c++) v = v.redSqr();
                            n(c < p);
                            var M = this.pow(f, new h(1).iushln(p - c - 1));
                            m = m.redMul(M), f = M.redSqr(), d = d.redMul(f), p = c
                        }
                        return m
                    }, _.prototype.invm = function(t) {
                        var i = t._invmp(this.m);
                        return 0 !== i.negative ? (i.negative = 0, this.imod(i).redNeg()) : this.imod(i)
                    }, _.prototype.pow = function(t, i) {
                        if (i.isZero()) return new h(1);
                        if (0 === i.cmpn(1)) return t.clone();
                        var r = new Array(16);
                        r[0] = new h(1).toRed(this), r[1] = t;
                        for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                        var e = r[0],
                            o = 0,
                            s = 0,
                            u = i.bitLength() % 26;
                        for (0 === u && (u = 26), n = i.length - 1; n >= 0; n--) {
                            for (var a = i.words[n], l = u - 1; l >= 0; l--) {
                                var f = a >> l & 1;
                                e !== r[0] && (e = this.sqr(e)), 0 !== f || 0 !== o ? (o <<= 1, o |= f, (4 === ++s || 0 === n && 0 === l) && (e = this.mul(e, r[o]), s = 0, o = 0)) : s = 0
                            }
                            u = 26
                        }
                        return e
                    }, _.prototype.convertTo = function(t) {
                        var i = t.umod(this.m);
                        return i === t ? i.clone() : i
                    }, _.prototype.convertFrom = function(t) {
                        var i = t.clone();
                        return i.red = null, i
                    }, h.mont = function(t) {
                        return new x(t)
                    }, e(x, _), x.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, x.prototype.convertFrom = function(t) {
                        var i = this.imod(t.mul(this.rinv));
                        return i.red = null, i
                    }, x.prototype.imul = function(t, i) {
                        if (t.isZero() || i.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var r = t.imul(i),
                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            e = r.isub(n).iushrn(this.shift),
                            h = e;
                        return e.cmp(this.m) >= 0 ? h = e.isub(this.m) : e.cmpn(0) < 0 && (h = e.iadd(this.m)), h._forceRed(this)
                    }, x.prototype.mul = function(t, i) {
                        if (t.isZero() || i.isZero()) return new h(0)._forceRed(this);
                        var r = t.mul(i),
                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            e = r.isub(n).iushrn(this.shift),
                            o = e;
                        return e.cmp(this.m) >= 0 ? o = e.isub(this.m) : e.cmpn(0) < 0 && (o = e.iadd(this.m)), o._forceRed(this)
                    }, x.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, r(81)(t))
        },
        390: function(t, i, r) {
            var n = r(21).Buffer,
                e = r(579);
            t.exports = function(t, i, r, h) {
                if (n.isBuffer(t) || (t = n.from(t, "binary")), i && (n.isBuffer(i) || (i = n.from(i, "binary")), 8 !== i.length)) throw new RangeError("salt should be Buffer with 8 byte length");
                for (var o = r / 8, s = n.alloc(o), u = n.alloc(h || 0), a = n.alloc(0); o > 0 || h > 0;) {
                    var l = new e;
                    l.update(a), l.update(t), i && l.update(i), a = l.digest();
                    var f = 0;
                    if (o > 0) {
                        var m = s.length - o;
                        f = Math.min(o, a.length), a.copy(s, m, 0, f), o -= f
                    }
                    if (f < a.length && h > 0) {
                        var d = u.length - h,
                            p = Math.min(h, a.length - f);
                        a.copy(u, d, f, f + p), h -= p
                    }
                }
                return a.fill(0), {
                    key: s,
                    iv: u
                }
            }
        }
    }
]);