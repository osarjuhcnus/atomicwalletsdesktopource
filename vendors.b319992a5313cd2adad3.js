(window.webpackJsonp = window.webpackJsonp || []).push([
    [176], {
        124: function(t, n, e) {
            "use strict";
            e.d(n, "b", (function() {
                return u
            })), e.d(n, "c", (function() {
                return r.a
            })), e.d(n, "f", (function() {
                return f
            })), e.d(n, "g", (function() {
                return a.a
            })), e.d(n, "h", (function() {
                return s.a
            })), e.d(n, "i", (function() {
                return d.a
            })), e.d(n, "j", (function() {
                return l.a
            })), e.d(n, "a", (function() {
                return h.a
            })), e.d(n, "k", (function() {
                return i.a
            })), e.d(n, "l", (function() {
                return _
            })), e.d(n, "m", (function() {
                return b.b
            })), e.d(n, "n", (function() {
                return p.a
            })), e.d(n, "o", (function() {
                return y.a
            })), e.d(n, "p", (function() {
                return v.b
            })), e.d(n, "q", (function() {
                return g.a
            })), e.d(n, "r", (function() {
                return x
            })), e.d(n, "s", (function() {
                return w.a
            })), e.d(n, "e", (function() {
                return M.c
            })), e.d(n, "d", (function() {
                return M.a
            }));
            var r = e(307),
                i = e(455),
                u = function(t) {
                    return Object(i.a)(Object(r.a)(t).call(document.documentElement))
                },
                c = 0;

            function f() {
                return new o
            }

            function o() {
                this._ = "@" + (++c).toString(36)
            }
            o.prototype = f.prototype = {
                constructor: o,
                get: function(t) {
                    for (var n = this._; !(n in t);)
                        if (!(t = t.parentNode)) return;
                    return t[n]
                },
                set: function(t, n) {
                    return t[this._] = n
                },
                remove: function(t) {
                    return this._ in t && delete t[this._]
                },
                toString: function() {
                    return this._
                }
            };
            var a = e(795),
                s = e(2267),
                d = e(445),
                l = e(314),
                h = e(308),
                b = e(250),
                _ = function(t) {
                    return "string" == typeof t ? new b.a([document.querySelectorAll(t)], [document.documentElement]) : new b.a([null == t ? [] : t], b.c)
                },
                p = e(446),
                y = e(796),
                v = e(797),
                g = e(2266),
                m = e(454),
                x = function(t, n) {
                    null == n && (n = Object(m.a)().touches);
                    for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = Object(h.a)(t, n[e]);
                    return i
                },
                w = e(447),
                M = e(248)
        },
        2265: function(t, n, e) {
            "use strict";
            var r = e(272);
            n.a = function(t, n, e) {
                var i = new r.a;
                return n = null == n ? 0 : +n, i.restart((function(e) {
                    i.stop(), t(e + n)
                }), n, e), i
            }
        },
        2266: function(t, n, e) {
            "use strict";
            var r = e(454),
                i = e(308);
            n.a = function(t, n, e) {
                arguments.length < 3 && (e = n, n = Object(r.a)().changedTouches);
                for (var u, c = 0, f = n ? n.length : 0; c < f; ++c)
                    if ((u = n[c]).identifier === e) return Object(i.a)(t, u);
                return null
            }
        },
        2267: function(t, n, e) {
            "use strict";
            var r = e(454),
                i = e(308);
            n.a = function(t) {
                var n = Object(r.a)();
                return n.changedTouches && (n = n.changedTouches[0]), Object(i.a)(t, n)
            }
        },
        2268: function(t, n, e) {
            "use strict";
            var r = Math.PI,
                i = 2 * r,
                u = i - 1e-6;

            function c() {
                this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
            }

            function f() {
                return new c
            }
            c.prototype = f.prototype = {
                constructor: c,
                moveTo: function(t, n) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
                },
                closePath: function() {
                    null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
                },
                lineTo: function(t, n) {
                    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
                },
                quadraticCurveTo: function(t, n, e, r) {
                    this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
                },
                bezierCurveTo: function(t, n, e, r, i, u) {
                    this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +u)
                },
                arcTo: function(t, n, e, i, u) {
                    t = +t, n = +n, e = +e, i = +i, u = +u;
                    var c = this._x1,
                        f = this._y1,
                        o = e - t,
                        a = i - n,
                        s = c - t,
                        d = f - n,
                        l = s * s + d * d;
                    if (u < 0) throw new Error("negative radius: " + u);
                    if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                    else if (l > 1e-6)
                        if (Math.abs(d * o - a * s) > 1e-6 && u) {
                            var h = e - c,
                                b = i - f,
                                _ = o * o + a * a,
                                p = h * h + b * b,
                                y = Math.sqrt(_),
                                v = Math.sqrt(l),
                                g = u * Math.tan((r - Math.acos((_ + l - p) / (2 * y * v))) / 2),
                                m = g / v,
                                x = g / y;
                            Math.abs(m - 1) > 1e-6 && (this._ += "L" + (t + m * s) + "," + (n + m * d)), this._ += "A" + u + "," + u + ",0,0," + +(d * h > s * b) + "," + (this._x1 = t + x * o) + "," + (this._y1 = n + x * a)
                        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
                    else;
                },
                arc: function(t, n, e, c, f, o) {
                    t = +t, n = +n, o = !!o;
                    var a = (e = +e) * Math.cos(c),
                        s = e * Math.sin(c),
                        d = t + a,
                        l = n + s,
                        h = 1 ^ o,
                        b = o ? c - f : f - c;
                    if (e < 0) throw new Error("negative radius: " + e);
                    null === this._x1 ? this._ += "M" + d + "," + l : (Math.abs(this._x1 - d) > 1e-6 || Math.abs(this._y1 - l) > 1e-6) && (this._ += "L" + d + "," + l), e && (b < 0 && (b = b % i + i), b > u ? this._ += "A" + e + "," + e + ",0,1," + h + "," + (t - a) + "," + (n - s) + "A" + e + "," + e + ",0,1," + h + "," + (this._x1 = d) + "," + (this._y1 = l) : b > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(b >= r) + "," + h + "," + (this._x1 = t + e * Math.cos(f)) + "," + (this._y1 = n + e * Math.sin(f))))
                },
                rect: function(t, n, e, r) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
                },
                toString: function() {
                    return this._
                }
            }, n.a = f
        },
        2308: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, "version", (function() {
                return r
            })), e.d(n, "bisect", (function() {
                return i.b
            })), e.d(n, "bisectRight", (function() {
                return i.d
            })), e.d(n, "bisectLeft", (function() {
                return i.c
            })), e.d(n, "ascending", (function() {
                return i.a
            })), e.d(n, "bisector", (function() {
                return i.e
            })), e.d(n, "cross", (function() {
                return i.f
            })), e.d(n, "descending", (function() {
                return i.g
            })), e.d(n, "deviation", (function() {
                return i.h
            })), e.d(n, "extent", (function() {
                return i.i
            })), e.d(n, "histogram", (function() {
                return i.j
            })), e.d(n, "thresholdFreedmanDiaconis", (function() {
                return i.w
            })), e.d(n, "thresholdScott", (function() {
                return i.x
            })), e.d(n, "thresholdSturges", (function() {
                return i.y
            })), e.d(n, "max", (function() {
                return i.k
            })), e.d(n, "mean", (function() {
                return i.l
            })), e.d(n, "median", (function() {
                return i.m
            })), e.d(n, "merge", (function() {
                return i.n
            })), e.d(n, "min", (function() {
                return i.o
            })), e.d(n, "pairs", (function() {
                return i.p
            })), e.d(n, "permute", (function() {
                return i.q
            })), e.d(n, "quantile", (function() {
                return i.r
            })), e.d(n, "range", (function() {
                return i.s
            })), e.d(n, "scan", (function() {
                return i.t
            })), e.d(n, "shuffle", (function() {
                return i.u
            })), e.d(n, "sum", (function() {
                return i.v
            })), e.d(n, "ticks", (function() {
                return i.B
            })), e.d(n, "tickIncrement", (function() {
                return i.z
            })), e.d(n, "tickStep", (function() {
                return i.A
            })), e.d(n, "transpose", (function() {
                return i.C
            })), e.d(n, "variance", (function() {
                return i.D
            })), e.d(n, "zip", (function() {
                return i.E
            })), e.d(n, "axisTop", (function() {
                return u.d
            })), e.d(n, "axisRight", (function() {
                return u.c
            })), e.d(n, "axisBottom", (function() {
                return u.a
            })), e.d(n, "axisLeft", (function() {
                return u.b
            })), e.d(n, "brush", (function() {
                return c.a
            })), e.d(n, "brushX", (function() {
                return c.c
            })), e.d(n, "brushY", (function() {
                return c.d
            })), e.d(n, "brushSelection", (function() {
                return c.b
            })), e.d(n, "chord", (function() {
                return f.a
            })), e.d(n, "ribbon", (function() {
                return f.b
            })), e.d(n, "nest", (function() {
                return o.d
            })), e.d(n, "set", (function() {
                return o.e
            })), e.d(n, "map", (function() {
                return o.c
            })), e.d(n, "keys", (function() {
                return o.b
            })), e.d(n, "values", (function() {
                return o.f
            })), e.d(n, "entries", (function() {
                return o.a
            })), e.d(n, "color", (function() {
                return a.a
            })), e.d(n, "rgb", (function() {
                return a.h
            })), e.d(n, "hsl", (function() {
                return a.e
            })), e.d(n, "lab", (function() {
                return a.f
            })), e.d(n, "hcl", (function() {
                return a.d
            })), e.d(n, "lch", (function() {
                return a.g
            })), e.d(n, "gray", (function() {
                return a.c
            })), e.d(n, "cubehelix", (function() {
                return a.b
            })), e.d(n, "contours", (function() {
                return s.b
            })), e.d(n, "contourDensity", (function() {
                return s.a
            })), e.d(n, "dispatch", (function() {
                return d.a
            })), e.d(n, "drag", (function() {
                return l.a
            })), e.d(n, "dragDisable", (function() {
                return l.b
            })), e.d(n, "dragEnable", (function() {
                return l.c
            })), e.d(n, "dsvFormat", (function() {
                return h.i
            })), e.d(n, "csvParse", (function() {
                return h.g
            })), e.d(n, "csvParseRows", (function() {
                return h.h
            })), e.d(n, "csvFormat", (function() {
                return h.b
            })), e.d(n, "csvFormatBody", (function() {
                return h.c
            })), e.d(n, "csvFormatRows", (function() {
                return h.e
            })), e.d(n, "csvFormatRow", (function() {
                return h.d
            })), e.d(n, "csvFormatValue", (function() {
                return h.f
            })), e.d(n, "tsvParse", (function() {
                return h.o
            })), e.d(n, "tsvParseRows", (function() {
                return h.p
            })), e.d(n, "tsvFormat", (function() {
                return h.j
            })), e.d(n, "tsvFormatBody", (function() {
                return h.k
            })), e.d(n, "tsvFormatRows", (function() {
                return h.m
            })), e.d(n, "tsvFormatRow", (function() {
                return h.l
            })), e.d(n, "tsvFormatValue", (function() {
                return h.n
            })), e.d(n, "autoType", (function() {
                return h.a
            })), e.d(n, "easeLinear", (function() {
                return b.y
            })), e.d(n, "easeQuad", (function() {
                return b.D
            })), e.d(n, "easeQuadIn", (function() {
                return b.E
            })), e.d(n, "easeQuadOut", (function() {
                return b.G
            })), e.d(n, "easeQuadInOut", (function() {
                return b.F
            })), e.d(n, "easeCubic", (function() {
                return b.m
            })), e.d(n, "easeCubicIn", (function() {
                return b.n
            })), e.d(n, "easeCubicOut", (function() {
                return b.p
            })), e.d(n, "easeCubicInOut", (function() {
                return b.o
            })), e.d(n, "easePoly", (function() {
                return b.z
            })), e.d(n, "easePolyIn", (function() {
                return b.A
            })), e.d(n, "easePolyOut", (function() {
                return b.C
            })), e.d(n, "easePolyInOut", (function() {
                return b.B
            })), e.d(n, "easeSin", (function() {
                return b.H
            })), e.d(n, "easeSinIn", (function() {
                return b.I
            })), e.d(n, "easeSinOut", (function() {
                return b.K
            })), e.d(n, "easeSinInOut", (function() {
                return b.J
            })), e.d(n, "easeExp", (function() {
                return b.u
            })), e.d(n, "easeExpIn", (function() {
                return b.v
            })), e.d(n, "easeExpOut", (function() {
                return b.x
            })), e.d(n, "easeExpInOut", (function() {
                return b.w
            })), e.d(n, "easeCircle", (function() {
                return b.i
            })), e.d(n, "easeCircleIn", (function() {
                return b.j
            })), e.d(n, "easeCircleOut", (function() {
                return b.l
            })), e.d(n, "easeCircleInOut", (function() {
                return b.k
            })), e.d(n, "easeBounce", (function() {
                return b.e
            })), e.d(n, "easeBounceIn", (function() {
                return b.f
            })), e.d(n, "easeBounceOut", (function() {
                return b.h
            })), e.d(n, "easeBounceInOut", (function() {
                return b.g
            })), e.d(n, "easeBack", (function() {
                return b.a
            })), e.d(n, "easeBackIn", (function() {
                return b.b
            })), e.d(n, "easeBackOut", (function() {
                return b.d
            })), e.d(n, "easeBackInOut", (function() {
                return b.c
            })), e.d(n, "easeElastic", (function() {
                return b.q
            })), e.d(n, "easeElasticIn", (function() {
                return b.r
            })), e.d(n, "easeElasticOut", (function() {
                return b.t
            })), e.d(n, "easeElasticInOut", (function() {
                return b.s
            })), e.d(n, "blob", (function() {
                return _.a
            })), e.d(n, "buffer", (function() {
                return _.b
            })), e.d(n, "dsv", (function() {
                return _.d
            })), e.d(n, "csv", (function() {
                return _.c
            })), e.d(n, "tsv", (function() {
                return _.j
            })), e.d(n, "image", (function() {
                return _.f
            })), e.d(n, "json", (function() {
                return _.g
            })), e.d(n, "text", (function() {
                return _.i
            })), e.d(n, "xml", (function() {
                return _.k
            })), e.d(n, "html", (function() {
                return _.e
            })), e.d(n, "svg", (function() {
                return _.h
            })), e.d(n, "forceCenter", (function() {
                return p.a
            })), e.d(n, "forceCollide", (function() {
                return p.b
            })), e.d(n, "forceLink", (function() {
                return p.c
            })), e.d(n, "forceManyBody", (function() {
                return p.d
            })), e.d(n, "forceRadial", (function() {
                return p.e
            })), e.d(n, "forceSimulation", (function() {
                return p.f
            })), e.d(n, "forceX", (function() {
                return p.g
            })), e.d(n, "forceY", (function() {
                return p.h
            })), e.d(n, "formatDefaultLocale", (function() {
                return y.c
            })), e.d(n, "format", (function() {
                return y.b
            })), e.d(n, "formatPrefix", (function() {
                return y.e
            })), e.d(n, "formatLocale", (function() {
                return y.d
            })), e.d(n, "formatSpecifier", (function() {
                return y.f
            })), e.d(n, "FormatSpecifier", (function() {
                return y.a
            })), e.d(n, "precisionFixed", (function() {
                return y.g
            })), e.d(n, "precisionPrefix", (function() {
                return y.h
            })), e.d(n, "precisionRound", (function() {
                return y.i
            })), e.d(n, "geoArea", (function() {
                return v.c
            })), e.d(n, "geoBounds", (function() {
                return v.h
            })), e.d(n, "geoCentroid", (function() {
                return v.i
            })), e.d(n, "geoCircle", (function() {
                return v.j
            })), e.d(n, "geoClipAntimeridian", (function() {
                return v.k
            })), e.d(n, "geoClipCircle", (function() {
                return v.l
            })), e.d(n, "geoClipExtent", (function() {
                return v.m
            })), e.d(n, "geoClipRectangle", (function() {
                return v.n
            })), e.d(n, "geoContains", (function() {
                return v.u
            })), e.d(n, "geoDistance", (function() {
                return v.v
            })), e.d(n, "geoGraticule", (function() {
                return v.C
            })), e.d(n, "geoGraticule10", (function() {
                return v.D
            })), e.d(n, "geoInterpolate", (function() {
                return v.F
            })), e.d(n, "geoLength", (function() {
                return v.G
            })), e.d(n, "geoPath", (function() {
                return v.N
            })), e.d(n, "geoAlbers", (function() {
                return v.a
            })), e.d(n, "geoAlbersUsa", (function() {
                return v.b
            })), e.d(n, "geoAzimuthalEqualArea", (function() {
                return v.d
            })), e.d(n, "geoAzimuthalEqualAreaRaw", (function() {
                return v.e
            })), e.d(n, "geoAzimuthalEquidistant", (function() {
                return v.f
            })), e.d(n, "geoAzimuthalEquidistantRaw", (function() {
                return v.g
            })), e.d(n, "geoConicConformal", (function() {
                return v.o
            })), e.d(n, "geoConicConformalRaw", (function() {
                return v.p
            })), e.d(n, "geoConicEqualArea", (function() {
                return v.q
            })), e.d(n, "geoConicEqualAreaRaw", (function() {
                return v.r
            })), e.d(n, "geoConicEquidistant", (function() {
                return v.s
            })), e.d(n, "geoConicEquidistantRaw", (function() {
                return v.t
            })), e.d(n, "geoEqualEarth", (function() {
                return v.w
            })), e.d(n, "geoEqualEarthRaw", (function() {
                return v.x
            })), e.d(n, "geoEquirectangular", (function() {
                return v.y
            })), e.d(n, "geoEquirectangularRaw", (function() {
                return v.z
            })), e.d(n, "geoGnomonic", (function() {
                return v.A
            })), e.d(n, "geoGnomonicRaw", (function() {
                return v.B
            })), e.d(n, "geoIdentity", (function() {
                return v.E
            })), e.d(n, "geoProjection", (function() {
                return v.O
            })), e.d(n, "geoProjectionMutator", (function() {
                return v.P
            })), e.d(n, "geoMercator", (function() {
                return v.H
            })), e.d(n, "geoMercatorRaw", (function() {
                return v.I
            })), e.d(n, "geoNaturalEarth1", (function() {
                return v.J
            })), e.d(n, "geoNaturalEarth1Raw", (function() {
                return v.K
            })), e.d(n, "geoOrthographic", (function() {
                return v.L
            })), e.d(n, "geoOrthographicRaw", (function() {
                return v.M
            })), e.d(n, "geoStereographic", (function() {
                return v.R
            })), e.d(n, "geoStereographicRaw", (function() {
                return v.S
            })), e.d(n, "geoTransverseMercator", (function() {
                return v.V
            })), e.d(n, "geoTransverseMercatorRaw", (function() {
                return v.W
            })), e.d(n, "geoRotation", (function() {
                return v.Q
            })), e.d(n, "geoStream", (function() {
                return v.T
            })), e.d(n, "geoTransform", (function() {
                return v.U
            })), e.d(n, "cluster", (function() {
                return g.a
            })), e.d(n, "hierarchy", (function() {
                return g.b
            })), e.d(n, "pack", (function() {
                return g.c
            })), e.d(n, "packSiblings", (function() {
                return g.e
            })), e.d(n, "packEnclose", (function() {
                return g.d
            })), e.d(n, "partition", (function() {
                return g.f
            })), e.d(n, "stratify", (function() {
                return g.g
            })), e.d(n, "tree", (function() {
                return g.h
            })), e.d(n, "treemap", (function() {
                return g.i
            })), e.d(n, "treemapBinary", (function() {
                return g.j
            })), e.d(n, "treemapDice", (function() {
                return g.k
            })), e.d(n, "treemapSlice", (function() {
                return g.m
            })), e.d(n, "treemapSliceDice", (function() {
                return g.n
            })), e.d(n, "treemapSquarify", (function() {
                return g.o
            })), e.d(n, "treemapResquarify", (function() {
                return g.l
            })), e.d(n, "interpolate", (function() {
                return m.a
            })), e.d(n, "interpolateArray", (function() {
                return m.b
            })), e.d(n, "interpolateBasis", (function() {
                return m.c
            })), e.d(n, "interpolateBasisClosed", (function() {
                return m.d
            })), e.d(n, "interpolateDate", (function() {
                return m.g
            })), e.d(n, "interpolateDiscrete", (function() {
                return m.h
            })), e.d(n, "interpolateHue", (function() {
                return m.m
            })), e.d(n, "interpolateNumber", (function() {
                return m.o
            })), e.d(n, "interpolateNumberArray", (function() {
                return m.p
            })), e.d(n, "interpolateObject", (function() {
                return m.q
            })), e.d(n, "interpolateRound", (function() {
                return m.u
            })), e.d(n, "interpolateString", (function() {
                return m.v
            })), e.d(n, "interpolateTransformCss", (function() {
                return m.w
            })), e.d(n, "interpolateTransformSvg", (function() {
                return m.x
            })), e.d(n, "interpolateZoom", (function() {
                return m.y
            })), e.d(n, "interpolateRgb", (function() {
                return m.r
            })), e.d(n, "interpolateRgbBasis", (function() {
                return m.s
            })), e.d(n, "interpolateRgbBasisClosed", (function() {
                return m.t
            })), e.d(n, "interpolateHsl", (function() {
                return m.k
            })), e.d(n, "interpolateHslLong", (function() {
                return m.l
            })), e.d(n, "interpolateLab", (function() {
                return m.n
            })), e.d(n, "interpolateHcl", (function() {
                return m.i
            })), e.d(n, "interpolateHclLong", (function() {
                return m.j
            })), e.d(n, "interpolateCubehelix", (function() {
                return m.e
            })), e.d(n, "interpolateCubehelixLong", (function() {
                return m.f
            })), e.d(n, "piecewise", (function() {
                return m.z
            })), e.d(n, "quantize", (function() {
                return m.A
            })), e.d(n, "path", (function() {
                return x.a
            })), e.d(n, "polygonArea", (function() {
                return w
            })), e.d(n, "polygonCentroid", (function() {
                return M
            })), e.d(n, "polygonHull", (function() {
                return A
            })), e.d(n, "polygonContains", (function() {
                return k
            })), e.d(n, "polygonLength", (function() {
                return N
            })), e.d(n, "quadtree", (function() {
                return O.a
            })), e.d(n, "randomUniform", (function() {
                return j
            })), e.d(n, "randomNormal", (function() {
                return E
            })), e.d(n, "randomLogNormal", (function() {
                return P
            })), e.d(n, "randomBates", (function() {
                return D
            })), e.d(n, "randomIrwinHall", (function() {
                return R
            })), e.d(n, "randomExponential", (function() {
                return U
            })), e.d(n, "scaleBand", (function() {
                return H
            })), e.d(n, "scalePoint", (function() {
                return V
            })), e.d(n, "scaleIdentity", (function() {
                return bt
            })), e.d(n, "scaleLinear", (function() {
                return ht
            })), e.d(n, "scaleLog", (function() {
                return Mt
            })), e.d(n, "scaleSymlog", (function() {
                return kt
            })), e.d(n, "scaleOrdinal", (function() {
                return I
            })), e.d(n, "scaleImplicit", (function() {
                return B
            })), e.d(n, "scalePow", (function() {
                return Et
            })), e.d(n, "scaleSqrt", (function() {
                return Pt
            })), e.d(n, "scaleQuantile", (function() {
                return Rt
            })), e.d(n, "scaleQuantize", (function() {
                return Dt
            })), e.d(n, "scaleThreshold", (function() {
                return Ut
            })), e.d(n, "scaleTime", (function() {
                return mr
            })), e.d(n, "scaleUtc", (function() {
                return Sr
            })), e.d(n, "scaleSequential", (function() {
                return Pr
            })), e.d(n, "scaleSequentialLog", (function() {
                return Rr
            })), e.d(n, "scaleSequentialPow", (function() {
                return Ur
            })), e.d(n, "scaleSequentialSqrt", (function() {
                return Lr
            })), e.d(n, "scaleSequentialSymlog", (function() {
                return Dr
            })), e.d(n, "scaleSequentialQuantile", (function() {
                return zr
            })), e.d(n, "scaleDiverging", (function() {
                return qr
            })), e.d(n, "scaleDivergingLog", (function() {
                return Fr
            })), e.d(n, "scaleDivergingPow", (function() {
                return Ir
            })), e.d(n, "scaleDivergingSqrt", (function() {
                return Hr
            })), e.d(n, "scaleDivergingSymlog", (function() {
                return Br
            })), e.d(n, "tickFormat", (function() {
                return dt
            })), e.d(n, "schemeCategory10", (function() {
                return Vr
            })), e.d(n, "schemeAccent", (function() {
                return Xr
            })), e.d(n, "schemeDark2", (function() {
                return Wr
            })), e.d(n, "schemePaired", (function() {
                return Zr
            })), e.d(n, "schemePastel1", (function() {
                return Qr
            })), e.d(n, "schemePastel2", (function() {
                return Jr
            })), e.d(n, "schemeSet1", (function() {
                return Kr
            })), e.d(n, "schemeSet2", (function() {
                return $r
            })), e.d(n, "schemeSet3", (function() {
                return ti
            })), e.d(n, "schemeTableau10", (function() {
                return ni
            })), e.d(n, "interpolateBrBG", (function() {
                return ui
            })), e.d(n, "schemeBrBG", (function() {
                return ii
            })), e.d(n, "interpolatePRGn", (function() {
                return fi
            })), e.d(n, "schemePRGn", (function() {
                return ci
            })), e.d(n, "interpolatePiYG", (function() {
                return ai
            })), e.d(n, "schemePiYG", (function() {
                return oi
            })), e.d(n, "interpolatePuOr", (function() {
                return di
            })), e.d(n, "schemePuOr", (function() {
                return si
            })), e.d(n, "interpolateRdBu", (function() {
                return hi
            })), e.d(n, "schemeRdBu", (function() {
                return li
            })), e.d(n, "interpolateRdGy", (function() {
                return _i
            })), e.d(n, "schemeRdGy", (function() {
                return bi
            })), e.d(n, "interpolateRdYlBu", (function() {
                return yi
            })), e.d(n, "schemeRdYlBu", (function() {
                return pi
            })), e.d(n, "interpolateRdYlGn", (function() {
                return gi
            })), e.d(n, "schemeRdYlGn", (function() {
                return vi
            })), e.d(n, "interpolateSpectral", (function() {
                return xi
            })), e.d(n, "schemeSpectral", (function() {
                return mi
            })), e.d(n, "interpolateBuGn", (function() {
                return Mi
            })), e.d(n, "schemeBuGn", (function() {
                return wi
            })), e.d(n, "interpolateBuPu", (function() {
                return Ci
            })), e.d(n, "schemeBuPu", (function() {
                return Ti
            })), e.d(n, "interpolateGnBu", (function() {
                return ki
            })), e.d(n, "schemeGnBu", (function() {
                return Ai
            })), e.d(n, "interpolateOrRd", (function() {
                return Oi
            })), e.d(n, "schemeOrRd", (function() {
                return Ni
            })), e.d(n, "interpolatePuBuGn", (function() {
                return ji
            })), e.d(n, "schemePuBuGn", (function() {
                return Si
            })), e.d(n, "interpolatePuBu", (function() {
                return Pi
            })), e.d(n, "schemePuBu", (function() {
                return Ei
            })), e.d(n, "interpolatePuRd", (function() {
                return Di
            })), e.d(n, "schemePuRd", (function() {
                return Ri
            })), e.d(n, "interpolateRdPu", (function() {
                return Li
            })), e.d(n, "schemeRdPu", (function() {
                return Ui
            })), e.d(n, "interpolateYlGnBu", (function() {
                return Yi
            })), e.d(n, "schemeYlGnBu", (function() {
                return zi
            })), e.d(n, "interpolateYlGn", (function() {
                return Fi
            })), e.d(n, "schemeYlGn", (function() {
                return qi
            })), e.d(n, "interpolateYlOrBr", (function() {
                return Ii
            })), e.d(n, "schemeYlOrBr", (function() {
                return Bi
            })), e.d(n, "interpolateYlOrRd", (function() {
                return Gi
            })), e.d(n, "schemeYlOrRd", (function() {
                return Hi
            })), e.d(n, "interpolateBlues", (function() {
                return Xi
            })), e.d(n, "schemeBlues", (function() {
                return Vi
            })), e.d(n, "interpolateGreens", (function() {
                return Zi
            })), e.d(n, "schemeGreens", (function() {
                return Wi
            })), e.d(n, "interpolateGreys", (function() {
                return Ji
            })), e.d(n, "schemeGreys", (function() {
                return Qi
            })), e.d(n, "interpolatePurples", (function() {
                return $i
            })), e.d(n, "schemePurples", (function() {
                return Ki
            })), e.d(n, "interpolateReds", (function() {
                return nu
            })), e.d(n, "schemeReds", (function() {
                return tu
            })), e.d(n, "interpolateOranges", (function() {
                return ru
            })), e.d(n, "schemeOranges", (function() {
                return eu
            })), e.d(n, "interpolateCividis", (function() {
                return iu
            })), e.d(n, "interpolateCubehelixDefault", (function() {
                return fu
            })), e.d(n, "interpolateRainbow", (function() {
                return du
            })), e.d(n, "interpolateWarm", (function() {
                return ou
            })), e.d(n, "interpolateCool", (function() {
                return au
            })), e.d(n, "interpolateSinebow", (function() {
                return pu
            })), e.d(n, "interpolateTurbo", (function() {
                return yu
            })), e.d(n, "interpolateViridis", (function() {
                return gu
            })), e.d(n, "interpolateMagma", (function() {
                return mu
            })), e.d(n, "interpolateInferno", (function() {
                return xu
            })), e.d(n, "interpolatePlasma", (function() {
                return wu
            })), e.d(n, "create", (function() {
                return Mu.b
            })), e.d(n, "creator", (function() {
                return Mu.c
            })), e.d(n, "local", (function() {
                return Mu.f
            })), e.d(n, "matcher", (function() {
                return Mu.g
            })), e.d(n, "mouse", (function() {
                return Mu.h
            })), e.d(n, "namespace", (function() {
                return Mu.i
            })), e.d(n, "namespaces", (function() {
                return Mu.j
            })), e.d(n, "clientPoint", (function() {
                return Mu.a
            })), e.d(n, "select", (function() {
                return Mu.k
            })), e.d(n, "selectAll", (function() {
                return Mu.l
            })), e.d(n, "selection", (function() {
                return Mu.m
            })), e.d(n, "selector", (function() {
                return Mu.n
            })), e.d(n, "selectorAll", (function() {
                return Mu.o
            })), e.d(n, "style", (function() {
                return Mu.p
            })), e.d(n, "touch", (function() {
                return Mu.q
            })), e.d(n, "touches", (function() {
                return Mu.r
            })), e.d(n, "window", (function() {
                return Mu.s
            })), e.d(n, "event", (function() {
                return Mu.e
            })), e.d(n, "customEvent", (function() {
                return Mu.d
            })), e.d(n, "arc", (function() {
                return Gu
            })), e.d(n, "area", (function() {
                return Ju
            })), e.d(n, "line", (function() {
                return Qu
            })), e.d(n, "pie", (function() {
                return tc
            })), e.d(n, "areaRadial", (function() {
                return cc
            })), e.d(n, "radialArea", (function() {
                return cc
            })), e.d(n, "lineRadial", (function() {
                return uc
            })), e.d(n, "radialLine", (function() {
                return uc
            })), e.d(n, "pointRadial", (function() {
                return fc
            })), e.d(n, "linkHorizontal", (function() {
                return _c
            })), e.d(n, "linkVertical", (function() {
                return pc
            })), e.d(n, "linkRadial", (function() {
                return yc
            })), e.d(n, "symbol", (function() {
                return Dc
            })), e.d(n, "symbols", (function() {
                return Rc
            })), e.d(n, "symbolCircle", (function() {
                return vc
            })), e.d(n, "symbolCross", (function() {
                return gc
            })), e.d(n, "symbolDiamond", (function() {
                return wc
            })), e.d(n, "symbolSquare", (function() {
                return kc
            })), e.d(n, "symbolStar", (function() {
                return Ac
            })), e.d(n, "symbolTriangle", (function() {
                return Oc
            })), e.d(n, "symbolWye", (function() {
                return Pc
            })), e.d(n, "curveBasisClosed", (function() {
                return Fc
            })), e.d(n, "curveBasisOpen", (function() {
                return Ic
            })), e.d(n, "curveBasis", (function() {
                return Yc
            })), e.d(n, "curveBundle", (function() {
                return Gc
            })), e.d(n, "curveCardinalClosed", (function() {
                return Qc
            })), e.d(n, "curveCardinalOpen", (function() {
                return Kc
            })), e.d(n, "curveCardinal", (function() {
                return Wc
            })), e.d(n, "curveCatmullRomClosed", (function() {
                return rf
            })), e.d(n, "curveCatmullRomOpen", (function() {
                return cf
            })), e.d(n, "curveCatmullRom", (function() {
                return nf
            })), e.d(n, "curveLinearClosed", (function() {
                return of
            })), e.d(n, "curveLinear", (function() {
                return Xu
            })), e.d(n, "curveMonotoneX", (function() {
                return pf
            })), e.d(n, "curveMonotoneY", (function() {
                return yf
            })), e.d(n, "curveNatural", (function() {
                return mf
            })), e.d(n, "curveStep", (function() {
                return wf
            })), e.d(n, "curveStepAfter", (function() {
                return Tf
            })), e.d(n, "curveStepBefore", (function() {
                return Mf
            })), e.d(n, "stack", (function() {
                return Nf
            })), e.d(n, "stackOffsetExpand", (function() {
                return Of
            })), e.d(n, "stackOffsetDiverging", (function() {
                return Sf
            })), e.d(n, "stackOffsetNone", (function() {
                return Cf
            })), e.d(n, "stackOffsetSilhouette", (function() {
                return jf
            })), e.d(n, "stackOffsetWiggle", (function() {
                return Ef
            })), e.d(n, "stackOrderAppearance", (function() {
                return Pf
            })), e.d(n, "stackOrderAscending", (function() {
                return Df
            })), e.d(n, "stackOrderDescending", (function() {
                return Lf
            })), e.d(n, "stackOrderInsideOut", (function() {
                return zf
            })), e.d(n, "stackOrderNone", (function() {
                return Af
            })), e.d(n, "stackOrderReverse", (function() {
                return Yf
            })), e.d(n, "timeInterval", (function() {
                return Yt
            })), e.d(n, "timeMillisecond", (function() {
                return xn
            })), e.d(n, "timeMilliseconds", (function() {
                return wn
            })), e.d(n, "utcMillisecond", (function() {
                return xn
            })), e.d(n, "utcMilliseconds", (function() {
                return wn
            })), e.d(n, "timeSecond", (function() {
                return vn
            })), e.d(n, "timeSeconds", (function() {
                return gn
            })), e.d(n, "utcSecond", (function() {
                return vn
            })), e.d(n, "utcSeconds", (function() {
                return gn
            })), e.d(n, "timeMinute", (function() {
                return _n
            })), e.d(n, "timeMinutes", (function() {
                return pn
            })), e.d(n, "timeHour", (function() {
                return ln
            })), e.d(n, "timeHours", (function() {
                return hn
            })), e.d(n, "timeDay", (function() {
                return an
            })), e.d(n, "timeDays", (function() {
                return sn
            })), e.d(n, "timeWeek", (function() {
                return Xt
            })), e.d(n, "timeWeeks", (function() {
                return tn
            })), e.d(n, "timeSunday", (function() {
                return Xt
            })), e.d(n, "timeSundays", (function() {
                return tn
            })), e.d(n, "timeMonday", (function() {
                return Wt
            })), e.d(n, "timeMondays", (function() {
                return nn
            })), e.d(n, "timeTuesday", (function() {
                return Zt
            })), e.d(n, "timeTuesdays", (function() {
                return en
            })), e.d(n, "timeWednesday", (function() {
                return Qt
            })), e.d(n, "timeWednesdays", (function() {
                return rn
            })), e.d(n, "timeThursday", (function() {
                return Jt
            })), e.d(n, "timeThursdays", (function() {
                return un
            })), e.d(n, "timeFriday", (function() {
                return Kt
            })), e.d(n, "timeFridays", (function() {
                return cn
            })), e.d(n, "timeSaturday", (function() {
                return $t
            })), e.d(n, "timeSaturdays", (function() {
                return fn
            })), e.d(n, "timeMonth", (function() {
                return Ht
            })), e.d(n, "timeMonths", (function() {
                return Gt
            })), e.d(n, "timeYear", (function() {
                return Ft
            })), e.d(n, "timeYears", (function() {
                return Bt
            })), e.d(n, "utcMinute", (function() {
                return Nr
            })), e.d(n, "utcMinutes", (function() {
                return Or
            })), e.d(n, "utcHour", (function() {
                return Cr
            })), e.d(n, "utcHours", (function() {
                return Ar
            })), e.d(n, "utcDay", (function() {
                return Yn
            })), e.d(n, "utcDays", (function() {
                return qn
            })), e.d(n, "utcWeek", (function() {
                return Tn
            })), e.d(n, "utcWeeks", (function() {
                return jn
            })), e.d(n, "utcSunday", (function() {
                return Tn
            })), e.d(n, "utcSundays", (function() {
                return jn
            })), e.d(n, "utcMonday", (function() {
                return Cn
            })), e.d(n, "utcMondays", (function() {
                return En
            })), e.d(n, "utcTuesday", (function() {
                return An
            })), e.d(n, "utcTuesdays", (function() {
                return Pn
            })), e.d(n, "utcWednesday", (function() {
                return kn
            })), e.d(n, "utcWednesdays", (function() {
                return Rn
            })), e.d(n, "utcThursday", (function() {
                return Nn
            })), e.d(n, "utcThursdays", (function() {
                return Dn
            })), e.d(n, "utcFriday", (function() {
                return On
            })), e.d(n, "utcFridays", (function() {
                return Un
            })), e.d(n, "utcSaturday", (function() {
                return Sn
            })), e.d(n, "utcSaturdays", (function() {
                return Ln
            })), e.d(n, "utcMonth", (function() {
                return wr
            })), e.d(n, "utcMonths", (function() {
                return Mr
            })), e.d(n, "utcYear", (function() {
                return Bn
            })), e.d(n, "utcYears", (function() {
                return In
            })), e.d(n, "timeFormatDefaultLocale", (function() {
                return pr
            })), e.d(n, "timeFormat", (function() {
                return Zn
            })), e.d(n, "timeParse", (function() {
                return Qn
            })), e.d(n, "utcFormat", (function() {
                return Jn
            })), e.d(n, "utcParse", (function() {
                return Kn
            })), e.d(n, "timeFormatLocale", (function() {
                return Xn
            })), e.d(n, "isoFormat", (function() {
                return qf
            })), e.d(n, "isoParse", (function() {
                return Ff
            })), e.d(n, "now", (function() {
                return Bf.b
            })), e.d(n, "timer", (function() {
                return Bf.d
            })), e.d(n, "timerFlush", (function() {
                return Bf.e
            })), e.d(n, "timeout", (function() {
                return Bf.c
            })), e.d(n, "interval", (function() {
                return Bf.a
            })), e.d(n, "transition", (function() {
                return If.c
            })), e.d(n, "active", (function() {
                return If.a
            })), e.d(n, "interrupt", (function() {
                return If.b
            })), e.d(n, "voronoi", (function() {
                return Oo
            })), e.d(n, "zoom", (function() {
                return Qo
            })), e.d(n, "zoomTransform", (function() {
                return Fo
            })), e.d(n, "zoomIdentity", (function() {
                return qo
            }));
            var r = "5.16.0",
                i = e(39),
                u = e(2322),
                c = e(2321),
                f = e(2319),
                o = e(275),
                a = e(205),
                s = e(2317),
                d = e(361),
                l = e(693),
                h = e(1185),
                b = e(1183),
                _ = e(2318),
                p = e(2316),
                y = e(688),
                v = e(2310),
                g = e(2312),
                m = e(227),
                x = e(301),
                w = function(t) {
                    for (var n, e = -1, r = t.length, i = t[r - 1], u = 0; ++e < r;) n = i, i = t[e], u += n[1] * i[0] - n[0] * i[1];
                    return u / 2
                },
                M = function(t) {
                    for (var n, e, r = -1, i = t.length, u = 0, c = 0, f = t[i - 1], o = 0; ++r < i;) n = f, f = t[r], o += e = n[0] * f[1] - f[0] * n[1], u += (n[0] + f[0]) * e, c += (n[1] + f[1]) * e;
                    return [u / (o *= 3), c / o]
                };

            function T(t, n) {
                return t[0] - n[0] || t[1] - n[1]
            }

            function C(t) {
                for (var n, e, r, i = t.length, u = [0, 1], c = 2, f = 2; f < i; ++f) {
                    for (; c > 1 && (n = t[u[c - 2]], e = t[u[c - 1]], r = t[f], (e[0] - n[0]) * (r[1] - n[1]) - (e[1] - n[1]) * (r[0] - n[0]) <= 0);) --c;
                    u[c++] = f
                }
                return u.slice(0, c)
            }
            var A = function(t) {
                    if ((e = t.length) < 3) return null;
                    var n, e, r = new Array(e),
                        i = new Array(e);
                    for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
                    for (r.sort(T), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
                    var u = C(r),
                        c = C(i),
                        f = c[0] === u[0],
                        o = c[c.length - 1] === u[u.length - 1],
                        a = [];
                    for (n = u.length - 1; n >= 0; --n) a.push(t[r[u[n]][2]]);
                    for (n = +f; n < c.length - o; ++n) a.push(t[r[c[n]][2]]);
                    return a
                },
                k = function(t, n) {
                    for (var e, r, i = t.length, u = t[i - 1], c = n[0], f = n[1], o = u[0], a = u[1], s = !1, d = 0; d < i; ++d) e = (u = t[d])[0], (r = u[1]) > f != a > f && c < (o - e) * (f - r) / (a - r) + e && (s = !s), o = e, a = r;
                    return s
                },
                N = function(t) {
                    for (var n, e, r = -1, i = t.length, u = t[i - 1], c = u[0], f = u[1], o = 0; ++r < i;) n = c, e = f, n -= c = (u = t[r])[0], e -= f = u[1], o += Math.sqrt(n * n + e * e);
                    return o
                },
                O = e(690),
                S = function() {
                    return Math.random()
                },
                j = function t(n) {
                    function e(t, e) {
                        return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
                            function() {
                                return n() * e + t
                            }
                    }
                    return e.source = t, e
                }(S),
                E = function t(n) {
                    function e(t, e) {
                        var r, i;
                        return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
                            function() {
                                var u;
                                if (null != r) u = r, r = null;
                                else
                                    do {
                                        r = 2 * n() - 1, u = 2 * n() - 1, i = r * r + u * u
                                    } while (!i || i > 1);
                                return t + e * u * Math.sqrt(-2 * Math.log(i) / i)
                            }
                    }
                    return e.source = t, e
                }(S),
                P = function t(n) {
                    function e() {
                        var t = E.source(n).apply(this, arguments);
                        return function() {
                            return Math.exp(t())
                        }
                    }
                    return e.source = t, e
                }(S),
                R = function t(n) {
                    function e(t) {
                        return function() {
                            for (var e = 0, r = 0; r < t; ++r) e += n();
                            return e
                        }
                    }
                    return e.source = t, e
                }(S),
                D = function t(n) {
                    function e(t) {
                        var e = R.source(n)(t);
                        return function() {
                            return e() / t
                        }
                    }
                    return e.source = t, e
                }(S),
                U = function t(n) {
                    function e(t) {
                        return function() {
                            return -Math.log(1 - n()) / t
                        }
                    }
                    return e.source = t, e
                }(S);

            function L(t, n) {
                switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        this.range(t);
                        break;
                    default:
                        this.range(n).domain(t)
                }
                return this
            }

            function z(t, n) {
                switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        this.interpolator(t);
                        break;
                    default:
                        this.interpolator(n).domain(t)
                }
                return this
            }
            var Y = Array.prototype,
                q = Y.map,
                F = Y.slice,
                B = {
                    name: "implicit"
                };

            function I() {
                var t = Object(o.c)(),
                    n = [],
                    e = [],
                    r = B;

                function i(i) {
                    var u = i + "",
                        c = t.get(u);
                    if (!c) {
                        if (r !== B) return r;
                        t.set(u, c = n.push(i))
                    }
                    return e[(c - 1) % e.length]
                }
                return i.domain = function(e) {
                    if (!arguments.length) return n.slice();
                    n = [], t = Object(o.c)();
                    for (var r, u, c = -1, f = e.length; ++c < f;) t.has(u = (r = e[c]) + "") || t.set(u, n.push(r));
                    return i
                }, i.range = function(t) {
                    return arguments.length ? (e = F.call(t), i) : e.slice()
                }, i.unknown = function(t) {
                    return arguments.length ? (r = t, i) : r
                }, i.copy = function() {
                    return I(n, e).unknown(r)
                }, L.apply(i, arguments), i
            }

            function H() {
                var t, n, e = I().unknown(void 0),
                    r = e.domain,
                    u = e.range,
                    c = [0, 1],
                    f = !1,
                    o = 0,
                    a = 0,
                    s = .5;

                function d() {
                    var e = r().length,
                        d = c[1] < c[0],
                        l = c[d - 0],
                        h = c[1 - d];
                    t = (h - l) / Math.max(1, e - o + 2 * a), f && (t = Math.floor(t)), l += (h - l - t * (e - o)) * s, n = t * (1 - o), f && (l = Math.round(l), n = Math.round(n));
                    var b = Object(i.s)(e).map((function(n) {
                        return l + t * n
                    }));
                    return u(d ? b.reverse() : b)
                }
                return delete e.unknown, e.domain = function(t) {
                    return arguments.length ? (r(t), d()) : r()
                }, e.range = function(t) {
                    return arguments.length ? (c = [+t[0], +t[1]], d()) : c.slice()
                }, e.rangeRound = function(t) {
                    return c = [+t[0], +t[1]], f = !0, d()
                }, e.bandwidth = function() {
                    return n
                }, e.step = function() {
                    return t
                }, e.round = function(t) {
                    return arguments.length ? (f = !!t, d()) : f
                }, e.padding = function(t) {
                    return arguments.length ? (o = Math.min(1, a = +t), d()) : o
                }, e.paddingInner = function(t) {
                    return arguments.length ? (o = Math.min(1, t), d()) : o
                }, e.paddingOuter = function(t) {
                    return arguments.length ? (a = +t, d()) : a
                }, e.align = function(t) {
                    return arguments.length ? (s = Math.max(0, Math.min(1, t)), d()) : s
                }, e.copy = function() {
                    return H(r(), c).round(f).paddingInner(o).paddingOuter(a).align(s)
                }, L.apply(d(), arguments)
            }

            function G(t) {
                var n = t.copy;
                return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
                    return G(n())
                }, t
            }

            function V() {
                return G(H.apply(null, arguments).paddingInner(1))
            }
            var X = e(448),
                W = e(170),
                Z = e(2272),
                Q = function(t) {
                    return +t
                },
                J = [0, 1];

            function K(t) {
                return t
            }

            function $(t, n) {
                return (n -= t = +t) ? function(e) {
                    return (e - t) / n
                } : (e = isNaN(n) ? NaN : .5, function() {
                    return e
                });
                var e
            }

            function tt(t) {
                var n, e = t[0],
                    r = t[t.length - 1];
                return e > r && (n = e, e = r, r = n),
                    function(t) {
                        return Math.max(e, Math.min(r, t))
                    }
            }

            function nt(t, n, e) {
                var r = t[0],
                    i = t[1],
                    u = n[0],
                    c = n[1];
                return i < r ? (r = $(i, r), u = e(c, u)) : (r = $(r, i), u = e(u, c)),
                    function(t) {
                        return u(r(t))
                    }
            }

            function et(t, n, e) {
                var r = Math.min(t.length, n.length) - 1,
                    u = new Array(r),
                    c = new Array(r),
                    f = -1;
                for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++f < r;) u[f] = $(t[f], t[f + 1]), c[f] = e(n[f], n[f + 1]);
                return function(n) {
                    var e = Object(i.b)(t, n, 1, r) - 1;
                    return c[e](u[e](n))
                }
            }

            function rt(t, n) {
                return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
            }

            function it() {
                var t, n, e, r, i, u, c = J,
                    f = J,
                    o = X.a,
                    a = K;

                function s() {
                    return r = Math.min(c.length, f.length) > 2 ? et : nt, i = u = null, d
                }

                function d(n) {
                    return isNaN(n = +n) ? e : (i || (i = r(c.map(t), f, o)))(t(a(n)))
                }
                return d.invert = function(e) {
                        return a(n((u || (u = r(f, c.map(t), W.a)))(e)))
                    }, d.domain = function(t) {
                        return arguments.length ? (c = q.call(t, Q), a === K || (a = tt(c)), s()) : c.slice()
                    }, d.range = function(t) {
                        return arguments.length ? (f = F.call(t), s()) : f.slice()
                    }, d.rangeRound = function(t) {
                        return f = F.call(t), o = Z.a, s()
                    }, d.clamp = function(t) {
                        return arguments.length ? (a = t ? tt(c) : K, d) : a !== K
                    }, d.interpolate = function(t) {
                        return arguments.length ? (o = t, s()) : o
                    }, d.unknown = function(t) {
                        return arguments.length ? (e = t, d) : e
                    },
                    function(e, r) {
                        return t = e, n = r, s()
                    }
            }

            function ut(t, n) {
                return it()(t, n)
            }
            var ct = e(451),
                ft = e(2270),
                ot = e(689),
                at = e(2271),
                st = e(2269),
                dt = function(t, n, e, r) {
                    var u, c = Object(i.A)(t, n, e);
                    switch ((r = Object(ct.b)(null == r ? ",f" : r)).type) {
                        case "s":
                            var f = Math.max(Math.abs(t), Math.abs(n));
                            return null != r.precision || isNaN(u = Object(ft.a)(c, f)) || (r.precision = u), Object(ot.c)(r, f);
                        case "":
                        case "e":
                        case "g":
                        case "p":
                        case "r":
                            null != r.precision || isNaN(u = Object(at.a)(c, Math.max(Math.abs(t), Math.abs(n)))) || (r.precision = u - ("e" === r.type));
                            break;
                        case "f":
                        case "%":
                            null != r.precision || isNaN(u = Object(st.a)(c)) || (r.precision = u - 2 * ("%" === r.type))
                    }
                    return Object(ot.b)(r)
                };

            function lt(t) {
                var n = t.domain;
                return t.ticks = function(t) {
                    var e = n();
                    return Object(i.B)(e[0], e[e.length - 1], null == t ? 10 : t)
                }, t.tickFormat = function(t, e) {
                    var r = n();
                    return dt(r[0], r[r.length - 1], null == t ? 10 : t, e)
                }, t.nice = function(e) {
                    null == e && (e = 10);
                    var r, u = n(),
                        c = 0,
                        f = u.length - 1,
                        o = u[c],
                        a = u[f];
                    return a < o && (r = o, o = a, a = r, r = c, c = f, f = r), (r = Object(i.z)(o, a, e)) > 0 ? (o = Math.floor(o / r) * r, a = Math.ceil(a / r) * r, r = Object(i.z)(o, a, e)) : r < 0 && (o = Math.ceil(o * r) / r, a = Math.floor(a * r) / r, r = Object(i.z)(o, a, e)), r > 0 ? (u[c] = Math.floor(o / r) * r, u[f] = Math.ceil(a / r) * r, n(u)) : r < 0 && (u[c] = Math.ceil(o * r) / r, u[f] = Math.floor(a * r) / r, n(u)), t
                }, t
            }

            function ht() {
                var t = ut(K, K);
                return t.copy = function() {
                    return rt(t, ht())
                }, L.apply(t, arguments), lt(t)
            }

            function bt(t) {
                var n;

                function e(t) {
                    return isNaN(t = +t) ? n : t
                }
                return e.invert = e, e.domain = e.range = function(n) {
                    return arguments.length ? (t = q.call(n, Q), e) : t.slice()
                }, e.unknown = function(t) {
                    return arguments.length ? (n = t, e) : n
                }, e.copy = function() {
                    return bt(t).unknown(n)
                }, t = arguments.length ? q.call(t, Q) : [0, 1], lt(e)
            }
            var _t = function(t, n) {
                var e, r = 0,
                    i = (t = t.slice()).length - 1,
                    u = t[r],
                    c = t[i];
                return c < u && (e = r, r = i, i = e, e = u, u = c, c = e), t[r] = n.floor(u), t[i] = n.ceil(c), t
            };

            function pt(t) {
                return Math.log(t)
            }

            function yt(t) {
                return Math.exp(t)
            }

            function vt(t) {
                return -Math.log(-t)
            }

            function gt(t) {
                return -Math.exp(-t)
            }

            function mt(t) {
                return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
            }

            function xt(t) {
                return function(n) {
                    return -t(-n)
                }
            }

            function wt(t) {
                var n, e, r = t(pt, yt),
                    u = r.domain,
                    c = 10;

                function f() {
                    return n = function(t) {
                        return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) {
                            return Math.log(n) / t
                        })
                    }(c), e = function(t) {
                        return 10 === t ? mt : t === Math.E ? Math.exp : function(n) {
                            return Math.pow(t, n)
                        }
                    }(c), u()[0] < 0 ? (n = xt(n), e = xt(e), t(vt, gt)) : t(pt, yt), r
                }
                return r.base = function(t) {
                    return arguments.length ? (c = +t, f()) : c
                }, r.domain = function(t) {
                    return arguments.length ? (u(t), f()) : u()
                }, r.ticks = function(t) {
                    var r, f = u(),
                        o = f[0],
                        a = f[f.length - 1];
                    (r = a < o) && (h = o, o = a, a = h);
                    var s, d, l, h = n(o),
                        b = n(a),
                        _ = null == t ? 10 : +t,
                        p = [];
                    if (!(c % 1) && b - h < _) {
                        if (h = Math.round(h) - 1, b = Math.round(b) + 1, o > 0) {
                            for (; h < b; ++h)
                                for (d = 1, s = e(h); d < c; ++d)
                                    if (!((l = s * d) < o)) {
                                        if (l > a) break;
                                        p.push(l)
                                    }
                        } else
                            for (; h < b; ++h)
                                for (d = c - 1, s = e(h); d >= 1; --d)
                                    if (!((l = s * d) < o)) {
                                        if (l > a) break;
                                        p.push(l)
                                    }
                    } else p = Object(i.B)(h, b, Math.min(b - h, _)).map(e);
                    return r ? p.reverse() : p
                }, r.tickFormat = function(t, i) {
                    if (null == i && (i = 10 === c ? ".0e" : ","), "function" != typeof i && (i = Object(ot.b)(i)), t === 1 / 0) return i;
                    null == t && (t = 10);
                    var u = Math.max(1, c * t / r.ticks().length);
                    return function(t) {
                        var r = t / e(Math.round(n(t)));
                        return r * c < c - .5 && (r *= c), r <= u ? i(t) : ""
                    }
                }, r.nice = function() {
                    return u(_t(u(), {
                        floor: function(t) {
                            return e(Math.floor(n(t)))
                        },
                        ceil: function(t) {
                            return e(Math.ceil(n(t)))
                        }
                    }))
                }, r
            }

            function Mt() {
                var t = wt(it()).domain([1, 10]);
                return t.copy = function() {
                    return rt(t, Mt()).base(t.base())
                }, L.apply(t, arguments), t
            }

            function Tt(t) {
                return function(n) {
                    return Math.sign(n) * Math.log1p(Math.abs(n / t))
                }
            }

            function Ct(t) {
                return function(n) {
                    return Math.sign(n) * Math.expm1(Math.abs(n)) * t
                }
            }

            function At(t) {
                var n = 1,
                    e = t(Tt(n), Ct(n));
                return e.constant = function(e) {
                    return arguments.length ? t(Tt(n = +e), Ct(n)) : n
                }, lt(e)
            }

            function kt() {
                var t = At(it());
                return t.copy = function() {
                    return rt(t, kt()).constant(t.constant())
                }, L.apply(t, arguments)
            }

            function Nt(t) {
                return function(n) {
                    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
                }
            }

            function Ot(t) {
                return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
            }

            function St(t) {
                return t < 0 ? -t * t : t * t
            }

            function jt(t) {
                var n = t(K, K),
                    e = 1;

                function r() {
                    return 1 === e ? t(K, K) : .5 === e ? t(Ot, St) : t(Nt(e), Nt(1 / e))
                }
                return n.exponent = function(t) {
                    return arguments.length ? (e = +t, r()) : e
                }, lt(n)
            }

            function Et() {
                var t = jt(it());
                return t.copy = function() {
                    return rt(t, Et()).exponent(t.exponent())
                }, L.apply(t, arguments), t
            }

            function Pt() {
                return Et.apply(null, arguments).exponent(.5)
            }

            function Rt() {
                var t, n = [],
                    e = [],
                    r = [];

                function u() {
                    var t = 0,
                        u = Math.max(1, e.length);
                    for (r = new Array(u - 1); ++t < u;) r[t - 1] = Object(i.r)(n, t / u);
                    return c
                }

                function c(n) {
                    return isNaN(n = +n) ? t : e[Object(i.b)(r, n)]
                }
                return c.invertExtent = function(t) {
                    var i = e.indexOf(t);
                    return i < 0 ? [NaN, NaN] : [i > 0 ? r[i - 1] : n[0], i < r.length ? r[i] : n[n.length - 1]]
                }, c.domain = function(t) {
                    if (!arguments.length) return n.slice();
                    n = [];
                    for (var e, r = 0, c = t.length; r < c; ++r) null == (e = t[r]) || isNaN(e = +e) || n.push(e);
                    return n.sort(i.a), u()
                }, c.range = function(t) {
                    return arguments.length ? (e = F.call(t), u()) : e.slice()
                }, c.unknown = function(n) {
                    return arguments.length ? (t = n, c) : t
                }, c.quantiles = function() {
                    return r.slice()
                }, c.copy = function() {
                    return Rt().domain(n).range(e).unknown(t)
                }, L.apply(c, arguments)
            }

            function Dt() {
                var t, n = 0,
                    e = 1,
                    r = 1,
                    u = [.5],
                    c = [0, 1];

                function f(n) {
                    return n <= n ? c[Object(i.b)(u, n, 0, r)] : t
                }

                function o() {
                    var t = -1;
                    for (u = new Array(r); ++t < r;) u[t] = ((t + 1) * e - (t - r) * n) / (r + 1);
                    return f
                }
                return f.domain = function(t) {
                    return arguments.length ? (n = +t[0], e = +t[1], o()) : [n, e]
                }, f.range = function(t) {
                    return arguments.length ? (r = (c = F.call(t)).length - 1, o()) : c.slice()
                }, f.invertExtent = function(t) {
                    var i = c.indexOf(t);
                    return i < 0 ? [NaN, NaN] : i < 1 ? [n, u[0]] : i >= r ? [u[r - 1], e] : [u[i - 1], u[i]]
                }, f.unknown = function(n) {
                    return arguments.length ? (t = n, f) : f
                }, f.thresholds = function() {
                    return u.slice()
                }, f.copy = function() {
                    return Dt().domain([n, e]).range(c).unknown(t)
                }, L.apply(lt(f), arguments)
            }

            function Ut() {
                var t, n = [.5],
                    e = [0, 1],
                    r = 1;

                function u(u) {
                    return u <= u ? e[Object(i.b)(n, u, 0, r)] : t
                }
                return u.domain = function(t) {
                    return arguments.length ? (n = F.call(t), r = Math.min(n.length, e.length - 1), u) : n.slice()
                }, u.range = function(t) {
                    return arguments.length ? (e = F.call(t), r = Math.min(n.length, e.length - 1), u) : e.slice()
                }, u.invertExtent = function(t) {
                    var r = e.indexOf(t);
                    return [n[r - 1], n[r]]
                }, u.unknown = function(n) {
                    return arguments.length ? (t = n, u) : t
                }, u.copy = function() {
                    return Ut().domain(n).range(e).unknown(t)
                }, L.apply(u, arguments)
            }
            var Lt = new Date,
                zt = new Date;

            function Yt(t, n, e, r) {
                function i(n) {
                    return t(n = 0 === arguments.length ? new Date : new Date(+n)), n
                }
                return i.floor = function(n) {
                    return t(n = new Date(+n)), n
                }, i.ceil = function(e) {
                    return t(e = new Date(e - 1)), n(e, 1), t(e), e
                }, i.round = function(t) {
                    var n = i(t),
                        e = i.ceil(t);
                    return t - n < e - t ? n : e
                }, i.offset = function(t, e) {
                    return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
                }, i.range = function(e, r, u) {
                    var c, f = [];
                    if (e = i.ceil(e), u = null == u ? 1 : Math.floor(u), !(e < r && u > 0)) return f;
                    do {
                        f.push(c = new Date(+e)), n(e, u), t(e)
                    } while (c < e && e < r);
                    return f
                }, i.filter = function(e) {
                    return Yt((function(n) {
                        if (n >= n)
                            for (; t(n), !e(n);) n.setTime(n - 1)
                    }), (function(t, r) {
                        if (t >= t)
                            if (r < 0)
                                for (; ++r <= 0;)
                                    for (; n(t, -1), !e(t););
                            else
                                for (; --r >= 0;)
                                    for (; n(t, 1), !e(t););
                    }))
                }, e && (i.count = function(n, r) {
                    return Lt.setTime(+n), zt.setTime(+r), t(Lt), t(zt), Math.floor(e(Lt, zt))
                }, i.every = function(t) {
                    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(n) {
                        return r(n) % t == 0
                    } : function(n) {
                        return i.count(0, n) % t == 0
                    }) : i : null
                }), i
            }
            var qt = Yt((function(t) {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            }), (function(t, n) {
                t.setFullYear(t.getFullYear() + n)
            }), (function(t, n) {
                return n.getFullYear() - t.getFullYear()
            }), (function(t) {
                return t.getFullYear()
            }));
            qt.every = function(t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? Yt((function(n) {
                    n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
                }), (function(n, e) {
                    n.setFullYear(n.getFullYear() + e * t)
                })) : null
            };
            var Ft = qt,
                Bt = qt.range,
                It = Yt((function(t) {
                    t.setDate(1), t.setHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setMonth(t.getMonth() + n)
                }), (function(t, n) {
                    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
                }), (function(t) {
                    return t.getMonth()
                })),
                Ht = It,
                Gt = It.range;

            function Vt(t) {
                return Yt((function(n) {
                    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setDate(t.getDate() + 7 * n)
                }), (function(t, n) {
                    return (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5
                }))
            }
            var Xt = Vt(0),
                Wt = Vt(1),
                Zt = Vt(2),
                Qt = Vt(3),
                Jt = Vt(4),
                Kt = Vt(5),
                $t = Vt(6),
                tn = Xt.range,
                nn = Wt.range,
                en = Zt.range,
                rn = Qt.range,
                un = Jt.range,
                cn = Kt.range,
                fn = $t.range,
                on = Yt((function(t) {
                    t.setHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setDate(t.getDate() + n)
                }), (function(t, n) {
                    return (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5
                }), (function(t) {
                    return t.getDate() - 1
                })),
                an = on,
                sn = on.range,
                dn = Yt((function(t) {
                    t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - 6e4 * t.getMinutes())
                }), (function(t, n) {
                    t.setTime(+t + 36e5 * n)
                }), (function(t, n) {
                    return (n - t) / 36e5
                }), (function(t) {
                    return t.getHours()
                })),
                ln = dn,
                hn = dn.range,
                bn = Yt((function(t) {
                    t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds())
                }), (function(t, n) {
                    t.setTime(+t + 6e4 * n)
                }), (function(t, n) {
                    return (n - t) / 6e4
                }), (function(t) {
                    return t.getMinutes()
                })),
                _n = bn,
                pn = bn.range,
                yn = Yt((function(t) {
                    t.setTime(t - t.getMilliseconds())
                }), (function(t, n) {
                    t.setTime(+t + 1e3 * n)
                }), (function(t, n) {
                    return (n - t) / 1e3
                }), (function(t) {
                    return t.getUTCSeconds()
                })),
                vn = yn,
                gn = yn.range,
                mn = Yt((function() {}), (function(t, n) {
                    t.setTime(+t + n)
                }), (function(t, n) {
                    return n - t
                }));
            mn.every = function(t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Yt((function(n) {
                    n.setTime(Math.floor(n / t) * t)
                }), (function(n, e) {
                    n.setTime(+n + e * t)
                }), (function(n, e) {
                    return (e - n) / t
                })) : mn : null
            };
            var xn = mn,
                wn = mn.range;

            function Mn(t) {
                return Yt((function(n) {
                    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setUTCDate(t.getUTCDate() + 7 * n)
                }), (function(t, n) {
                    return (n - t) / 6048e5
                }))
            }
            var Tn = Mn(0),
                Cn = Mn(1),
                An = Mn(2),
                kn = Mn(3),
                Nn = Mn(4),
                On = Mn(5),
                Sn = Mn(6),
                jn = Tn.range,
                En = Cn.range,
                Pn = An.range,
                Rn = kn.range,
                Dn = Nn.range,
                Un = On.range,
                Ln = Sn.range,
                zn = Yt((function(t) {
                    t.setUTCHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setUTCDate(t.getUTCDate() + n)
                }), (function(t, n) {
                    return (n - t) / 864e5
                }), (function(t) {
                    return t.getUTCDate() - 1
                })),
                Yn = zn,
                qn = zn.range,
                Fn = Yt((function(t) {
                    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setUTCFullYear(t.getUTCFullYear() + n)
                }), (function(t, n) {
                    return n.getUTCFullYear() - t.getUTCFullYear()
                }), (function(t) {
                    return t.getUTCFullYear()
                }));
            Fn.every = function(t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? Yt((function(n) {
                    n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
                }), (function(n, e) {
                    n.setUTCFullYear(n.getUTCFullYear() + e * t)
                })) : null
            };
            var Bn = Fn,
                In = Fn.range;

            function Hn(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                    return n.setFullYear(t.y), n
                }
                return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
            }

            function Gn(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                    return n.setUTCFullYear(t.y), n
                }
                return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
            }

            function Vn(t, n, e) {
                return {
                    y: t,
                    m: n,
                    d: e,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0
                }
            }

            function Xn(t) {
                var n = t.dateTime,
                    e = t.date,
                    r = t.time,
                    i = t.periods,
                    u = t.days,
                    c = t.shortDays,
                    f = t.months,
                    o = t.shortMonths,
                    a = ue(i),
                    s = ce(i),
                    d = ue(u),
                    l = ce(u),
                    h = ue(c),
                    b = ce(c),
                    _ = ue(f),
                    p = ce(f),
                    y = ue(o),
                    v = ce(o),
                    g = {
                        a: function(t) {
                            return c[t.getDay()]
                        },
                        A: function(t) {
                            return u[t.getDay()]
                        },
                        b: function(t) {
                            return o[t.getMonth()]
                        },
                        B: function(t) {
                            return f[t.getMonth()]
                        },
                        c: null,
                        d: ke,
                        e: ke,
                        f: Ee,
                        g: Ie,
                        G: Ge,
                        H: Ne,
                        I: Oe,
                        j: Se,
                        L: je,
                        m: Pe,
                        M: Re,
                        p: function(t) {
                            return i[+(t.getHours() >= 12)]
                        },
                        q: function(t) {
                            return 1 + ~~(t.getMonth() / 3)
                        },
                        Q: br,
                        s: _r,
                        S: De,
                        u: Ue,
                        U: Le,
                        V: Ye,
                        w: qe,
                        W: Fe,
                        x: null,
                        X: null,
                        y: Be,
                        Y: He,
                        Z: Ve,
                        "%": hr
                    },
                    m = {
                        a: function(t) {
                            return c[t.getUTCDay()]
                        },
                        A: function(t) {
                            return u[t.getUTCDay()]
                        },
                        b: function(t) {
                            return o[t.getUTCMonth()]
                        },
                        B: function(t) {
                            return f[t.getUTCMonth()]
                        },
                        c: null,
                        d: Xe,
                        e: Xe,
                        f: Ke,
                        g: ar,
                        G: dr,
                        H: We,
                        I: Ze,
                        j: Qe,
                        L: Je,
                        m: $e,
                        M: tr,
                        p: function(t) {
                            return i[+(t.getUTCHours() >= 12)]
                        },
                        q: function(t) {
                            return 1 + ~~(t.getUTCMonth() / 3)
                        },
                        Q: br,
                        s: _r,
                        S: nr,
                        u: er,
                        U: rr,
                        V: ur,
                        w: cr,
                        W: fr,
                        x: null,
                        X: null,
                        y: or,
                        Y: sr,
                        Z: lr,
                        "%": hr
                    },
                    x = {
                        a: function(t, n, e) {
                            var r = h.exec(n.slice(e));
                            return r ? (t.w = b[r[0].toLowerCase()], e + r[0].length) : -1
                        },
                        A: function(t, n, e) {
                            var r = d.exec(n.slice(e));
                            return r ? (t.w = l[r[0].toLowerCase()], e + r[0].length) : -1
                        },
                        b: function(t, n, e) {
                            var r = y.exec(n.slice(e));
                            return r ? (t.m = v[r[0].toLowerCase()], e + r[0].length) : -1
                        },
                        B: function(t, n, e) {
                            var r = _.exec(n.slice(e));
                            return r ? (t.m = p[r[0].toLowerCase()], e + r[0].length) : -1
                        },
                        c: function(t, e, r) {
                            return T(t, n, e, r)
                        },
                        d: ye,
                        e: ye,
                        f: Me,
                        g: he,
                        G: le,
                        H: ge,
                        I: ge,
                        j: ve,
                        L: we,
                        m: pe,
                        M: me,
                        p: function(t, n, e) {
                            var r = a.exec(n.slice(e));
                            return r ? (t.p = s[r[0].toLowerCase()], e + r[0].length) : -1
                        },
                        q: _e,
                        Q: Ce,
                        s: Ae,
                        S: xe,
                        u: oe,
                        U: ae,
                        V: se,
                        w: fe,
                        W: de,
                        x: function(t, n, r) {
                            return T(t, e, n, r)
                        },
                        X: function(t, n, e) {
                            return T(t, r, n, e)
                        },
                        y: he,
                        Y: le,
                        Z: be,
                        "%": Te
                    };

                function w(t, n) {
                    return function(e) {
                        var r, i, u, c = [],
                            f = -1,
                            o = 0,
                            a = t.length;
                        for (e instanceof Date || (e = new Date(+e)); ++f < a;) 37 === t.charCodeAt(f) && (c.push(t.slice(o, f)), null != (i = $n[r = t.charAt(++f)]) ? r = t.charAt(++f) : i = "e" === r ? " " : "0", (u = n[r]) && (r = u(e, i)), c.push(r), o = f + 1);
                        return c.push(t.slice(o, f)), c.join("")
                    }
                }

                function M(t, n) {
                    return function(e) {
                        var r, i, u = Vn(1900, void 0, 1);
                        if (T(u, t, e += "", 0) != e.length) return null;
                        if ("Q" in u) return new Date(u.Q);
                        if ("s" in u) return new Date(1e3 * u.s + ("L" in u ? u.L : 0));
                        if (n && !("Z" in u) && (u.Z = 0), "p" in u && (u.H = u.H % 12 + 12 * u.p), void 0 === u.m && (u.m = "q" in u ? u.q : 0), "V" in u) {
                            if (u.V < 1 || u.V > 53) return null;
                            "w" in u || (u.w = 1), "Z" in u ? (i = (r = Gn(Vn(u.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? Cn.ceil(r) : Cn(r), r = Yn.offset(r, 7 * (u.V - 1)), u.y = r.getUTCFullYear(), u.m = r.getUTCMonth(), u.d = r.getUTCDate() + (u.w + 6) % 7) : (i = (r = Hn(Vn(u.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? Wt.ceil(r) : Wt(r), r = an.offset(r, 7 * (u.V - 1)), u.y = r.getFullYear(), u.m = r.getMonth(), u.d = r.getDate() + (u.w + 6) % 7)
                        } else("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), i = "Z" in u ? Gn(Vn(u.y, 0, 1)).getUTCDay() : Hn(Vn(u.y, 0, 1)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + 7 * u.W - (i + 5) % 7 : u.w + 7 * u.U - (i + 6) % 7);
                        return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, Gn(u)) : Hn(u)
                    }
                }

                function T(t, n, e, r) {
                    for (var i, u, c = 0, f = n.length, o = e.length; c < f;) {
                        if (r >= o) return -1;
                        if (37 === (i = n.charCodeAt(c++))) {
                            if (i = n.charAt(c++), !(u = x[i in $n ? n.charAt(c++) : i]) || (r = u(t, e, r)) < 0) return -1
                        } else if (i != e.charCodeAt(r++)) return -1
                    }
                    return r
                }
                return g.x = w(e, g), g.X = w(r, g), g.c = w(n, g), m.x = w(e, m), m.X = w(r, m), m.c = w(n, m), {
                    format: function(t) {
                        var n = w(t += "", g);
                        return n.toString = function() {
                            return t
                        }, n
                    },
                    parse: function(t) {
                        var n = M(t += "", !1);
                        return n.toString = function() {
                            return t
                        }, n
                    },
                    utcFormat: function(t) {
                        var n = w(t += "", m);
                        return n.toString = function() {
                            return t
                        }, n
                    },
                    utcParse: function(t) {
                        var n = M(t += "", !0);
                        return n.toString = function() {
                            return t
                        }, n
                    }
                }
            }
            var Wn, Zn, Qn, Jn, Kn, $n = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                te = /^\s*\d+/,
                ne = /^%/,
                ee = /[\\^$*+?|[\]().{}]/g;

            function re(t, n, e) {
                var r = t < 0 ? "-" : "",
                    i = (r ? -t : t) + "",
                    u = i.length;
                return r + (u < e ? new Array(e - u + 1).join(n) + i : i)
            }

            function ie(t) {
                return t.replace(ee, "\\$&")
            }

            function ue(t) {
                return new RegExp("^(?:" + t.map(ie).join("|") + ")", "i")
            }

            function ce(t) {
                for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
                return n
            }

            function fe(t, n, e) {
                var r = te.exec(n.slice(e, e + 1));
                return r ? (t.w = +r[0], e + r[0].length) : -1
            }

            function oe(t, n, e) {
                var r = te.exec(n.slice(e, e + 1));
                return r ? (t.u = +r[0], e + r[0].length) : -1
            }

            function ae(t, n, e) {
                var r = te.exec(n.slice(e, e + 2));
                return r ? (t.U = +r[0], e + r[0].length) : -1
            }

            function se(t, n, e) {
                var r = te.exec(n.slice(e, e + 2));
                return r ? (t.V = +r[0], e + r[0].length) : -1
            }

            function de(t, n, e) {
                var r = te.exec(n.slice(e, e + 2));
                return r ? (t.W = +r[0], e + r[0].length) : -1
            }

            function le(t, n, e) {
                var r = te.exec(n.slice(e, e + 4));
                return r ? (t.y = +r[0], e + r[0].length) : -1
            }

            function he(t, n, e) {
                var r = te.exec(n.slice(e, e + 2));
                return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
            }

            function be(t, n, e) {
                var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
                return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
            }

            function _e(t, n, e) {
                var r = te.exec(n.slice(e, e + 1));
                return r ? (t.q = 3 * r[0] - 3, e + r[0].length) : -1
            }

            function pe(t, n, e) {
                var r = te.exec(n.slice(e, e + 2));
                return r ? (t.m = r[0] - 1, e + r[0].length) : -1
            }

            function ye(t, n, e) {
                var r = te.exec(n.slice(e, e + 2));
                return r ? (t.d = +r[0], e + r[0].length) : -1
            }

            function ve(t, n, e) {
                var r = te.exec(n.slice(e, e + 3));
                return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
            }

            function ge(t, n, e) {
                var r = te.exec(n.slice(e, e + 2));
                return r ? (t.H = +r[0], e + r[0].length) : -1
            }

            function me(t, n, e) {
                var r = te.exec(n.slice(e, e + 2));
                return r ? (t.M = +r[0], e + r[0].length) : -1
            }

            function xe(t, n, e) {
                var r = te.exec(n.slice(e, e + 2));
                return r ? (t.S = +r[0], e + r[0].length) : -1
            }

            function we(t, n, e) {
                var r = te.exec(n.slice(e, e + 3));
                return r ? (t.L = +r[0], e + r[0].length) : -1
            }

            function Me(t, n, e) {
                var r = te.exec(n.slice(e, e + 6));
                return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
            }

            function Te(t, n, e) {
                var r = ne.exec(n.slice(e, e + 1));
                return r ? e + r[0].length : -1
            }

            function Ce(t, n, e) {
                var r = te.exec(n.slice(e));
                return r ? (t.Q = +r[0], e + r[0].length) : -1
            }

            function Ae(t, n, e) {
                var r = te.exec(n.slice(e));
                return r ? (t.s = +r[0], e + r[0].length) : -1
            }

            function ke(t, n) {
                return re(t.getDate(), n, 2)
            }

            function Ne(t, n) {
                return re(t.getHours(), n, 2)
            }

            function Oe(t, n) {
                return re(t.getHours() % 12 || 12, n, 2)
            }

            function Se(t, n) {
                return re(1 + an.count(Ft(t), t), n, 3)
            }

            function je(t, n) {
                return re(t.getMilliseconds(), n, 3)
            }

            function Ee(t, n) {
                return je(t, n) + "000"
            }

            function Pe(t, n) {
                return re(t.getMonth() + 1, n, 2)
            }

            function Re(t, n) {
                return re(t.getMinutes(), n, 2)
            }

            function De(t, n) {
                return re(t.getSeconds(), n, 2)
            }

            function Ue(t) {
                var n = t.getDay();
                return 0 === n ? 7 : n
            }

            function Le(t, n) {
                return re(Xt.count(Ft(t) - 1, t), n, 2)
            }

            function ze(t) {
                var n = t.getDay();
                return n >= 4 || 0 === n ? Jt(t) : Jt.ceil(t)
            }

            function Ye(t, n) {
                return t = ze(t), re(Jt.count(Ft(t), t) + (4 === Ft(t).getDay()), n, 2)
            }

            function qe(t) {
                return t.getDay()
            }

            function Fe(t, n) {
                return re(Wt.count(Ft(t) - 1, t), n, 2)
            }

            function Be(t, n) {
                return re(t.getFullYear() % 100, n, 2)
            }

            function Ie(t, n) {
                return re((t = ze(t)).getFullYear() % 100, n, 2)
            }

            function He(t, n) {
                return re(t.getFullYear() % 1e4, n, 4)
            }

            function Ge(t, n) {
                var e = t.getDay();
                return re((t = e >= 4 || 0 === e ? Jt(t) : Jt.ceil(t)).getFullYear() % 1e4, n, 4)
            }

            function Ve(t) {
                var n = t.getTimezoneOffset();
                return (n > 0 ? "-" : (n *= -1, "+")) + re(n / 60 | 0, "0", 2) + re(n % 60, "0", 2)
            }

            function Xe(t, n) {
                return re(t.getUTCDate(), n, 2)
            }

            function We(t, n) {
                return re(t.getUTCHours(), n, 2)
            }

            function Ze(t, n) {
                return re(t.getUTCHours() % 12 || 12, n, 2)
            }

            function Qe(t, n) {
                return re(1 + Yn.count(Bn(t), t), n, 3)
            }

            function Je(t, n) {
                return re(t.getUTCMilliseconds(), n, 3)
            }

            function Ke(t, n) {
                return Je(t, n) + "000"
            }

            function $e(t, n) {
                return re(t.getUTCMonth() + 1, n, 2)
            }

            function tr(t, n) {
                return re(t.getUTCMinutes(), n, 2)
            }

            function nr(t, n) {
                return re(t.getUTCSeconds(), n, 2)
            }

            function er(t) {
                var n = t.getUTCDay();
                return 0 === n ? 7 : n
            }

            function rr(t, n) {
                return re(Tn.count(Bn(t) - 1, t), n, 2)
            }

            function ir(t) {
                var n = t.getUTCDay();
                return n >= 4 || 0 === n ? Nn(t) : Nn.ceil(t)
            }

            function ur(t, n) {
                return t = ir(t), re(Nn.count(Bn(t), t) + (4 === Bn(t).getUTCDay()), n, 2)
            }

            function cr(t) {
                return t.getUTCDay()
            }

            function fr(t, n) {
                return re(Cn.count(Bn(t) - 1, t), n, 2)
            }

            function or(t, n) {
                return re(t.getUTCFullYear() % 100, n, 2)
            }

            function ar(t, n) {
                return re((t = ir(t)).getUTCFullYear() % 100, n, 2)
            }

            function sr(t, n) {
                return re(t.getUTCFullYear() % 1e4, n, 4)
            }

            function dr(t, n) {
                var e = t.getUTCDay();
                return re((t = e >= 4 || 0 === e ? Nn(t) : Nn.ceil(t)).getUTCFullYear() % 1e4, n, 4)
            }

            function lr() {
                return "+0000"
            }

            function hr() {
                return "%"
            }

            function br(t) {
                return +t
            }

            function _r(t) {
                return Math.floor(+t / 1e3)
            }

            function pr(t) {
                return Wn = Xn(t), Zn = Wn.format, Qn = Wn.parse, Jn = Wn.utcFormat, Kn = Wn.utcParse, Wn
            }
            pr({
                dateTime: "%x, %X",
                date: "%-m/%-d/%Y",
                time: "%-I:%M:%S %p",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });

            function yr(t) {
                return new Date(t)
            }

            function vr(t) {
                return t instanceof Date ? +t : +new Date(+t)
            }

            function gr(t, n, e, r, u, c, f, o, a) {
                var s = ut(K, K),
                    d = s.invert,
                    l = s.domain,
                    h = a(".%L"),
                    b = a(":%S"),
                    _ = a("%I:%M"),
                    p = a("%I %p"),
                    y = a("%a %d"),
                    v = a("%b %d"),
                    g = a("%B"),
                    m = a("%Y"),
                    x = [
                        [f, 1, 1e3],
                        [f, 5, 5e3],
                        [f, 15, 15e3],
                        [f, 30, 3e4],
                        [c, 1, 6e4],
                        [c, 5, 3e5],
                        [c, 15, 9e5],
                        [c, 30, 18e5],
                        [u, 1, 36e5],
                        [u, 3, 108e5],
                        [u, 6, 216e5],
                        [u, 12, 432e5],
                        [r, 1, 864e5],
                        [r, 2, 1728e5],
                        [e, 1, 6048e5],
                        [n, 1, 2592e6],
                        [n, 3, 7776e6],
                        [t, 1, 31536e6]
                    ];

                function w(i) {
                    return (f(i) < i ? h : c(i) < i ? b : u(i) < i ? _ : r(i) < i ? p : n(i) < i ? e(i) < i ? y : v : t(i) < i ? g : m)(i)
                }

                function M(n, e, r, u) {
                    if (null == n && (n = 10), "number" == typeof n) {
                        var c = Math.abs(r - e) / n,
                            f = Object(i.e)((function(t) {
                                return t[2]
                            })).right(x, c);
                        f === x.length ? (u = Object(i.A)(e / 31536e6, r / 31536e6, n), n = t) : f ? (u = (f = x[c / x[f - 1][2] < x[f][2] / c ? f - 1 : f])[1], n = f[0]) : (u = Math.max(Object(i.A)(e, r, n), 1), n = o)
                    }
                    return null == u ? n : n.every(u)
                }
                return s.invert = function(t) {
                    return new Date(d(t))
                }, s.domain = function(t) {
                    return arguments.length ? l(q.call(t, vr)) : l().map(yr)
                }, s.ticks = function(t, n) {
                    var e, r = l(),
                        i = r[0],
                        u = r[r.length - 1],
                        c = u < i;
                    return c && (e = i, i = u, u = e), e = (e = M(t, i, u, n)) ? e.range(i, u + 1) : [], c ? e.reverse() : e
                }, s.tickFormat = function(t, n) {
                    return null == n ? w : a(n)
                }, s.nice = function(t, n) {
                    var e = l();
                    return (t = M(t, e[0], e[e.length - 1], n)) ? l(_t(e, t)) : s
                }, s.copy = function() {
                    return rt(s, gr(t, n, e, r, u, c, f, o, a))
                }, s
            }
            var mr = function() {
                    return L.apply(gr(Ft, Ht, Xt, an, ln, _n, vn, xn, Zn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
                },
                xr = Yt((function(t) {
                    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setUTCMonth(t.getUTCMonth() + n)
                }), (function(t, n) {
                    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
                }), (function(t) {
                    return t.getUTCMonth()
                })),
                wr = xr,
                Mr = xr.range,
                Tr = Yt((function(t) {
                    t.setUTCMinutes(0, 0, 0)
                }), (function(t, n) {
                    t.setTime(+t + 36e5 * n)
                }), (function(t, n) {
                    return (n - t) / 36e5
                }), (function(t) {
                    return t.getUTCHours()
                })),
                Cr = Tr,
                Ar = Tr.range,
                kr = Yt((function(t) {
                    t.setUTCSeconds(0, 0)
                }), (function(t, n) {
                    t.setTime(+t + 6e4 * n)
                }), (function(t, n) {
                    return (n - t) / 6e4
                }), (function(t) {
                    return t.getUTCMinutes()
                })),
                Nr = kr,
                Or = kr.range,
                Sr = function() {
                    return L.apply(gr(Bn, wr, Tn, Yn, Cr, Nr, vn, xn, Jn).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
                };

            function jr() {
                var t, n, e, r, i, u = 0,
                    c = 1,
                    f = K,
                    o = !1;

                function a(n) {
                    return isNaN(n = +n) ? i : f(0 === e ? .5 : (n = (r(n) - t) * e, o ? Math.max(0, Math.min(1, n)) : n))
                }
                return a.domain = function(i) {
                        return arguments.length ? (t = r(u = +i[0]), n = r(c = +i[1]), e = t === n ? 0 : 1 / (n - t), a) : [u, c]
                    }, a.clamp = function(t) {
                        return arguments.length ? (o = !!t, a) : o
                    }, a.interpolator = function(t) {
                        return arguments.length ? (f = t, a) : f
                    }, a.unknown = function(t) {
                        return arguments.length ? (i = t, a) : i
                    },
                    function(i) {
                        return r = i, t = i(u), n = i(c), e = t === n ? 0 : 1 / (n - t), a
                    }
            }

            function Er(t, n) {
                return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
            }

            function Pr() {
                var t = lt(jr()(K));
                return t.copy = function() {
                    return Er(t, Pr())
                }, z.apply(t, arguments)
            }

            function Rr() {
                var t = wt(jr()).domain([1, 10]);
                return t.copy = function() {
                    return Er(t, Rr()).base(t.base())
                }, z.apply(t, arguments)
            }

            function Dr() {
                var t = At(jr());
                return t.copy = function() {
                    return Er(t, Dr()).constant(t.constant())
                }, z.apply(t, arguments)
            }

            function Ur() {
                var t = jt(jr());
                return t.copy = function() {
                    return Er(t, Ur()).exponent(t.exponent())
                }, z.apply(t, arguments)
            }

            function Lr() {
                return Ur.apply(null, arguments).exponent(.5)
            }

            function zr() {
                var t = [],
                    n = K;

                function e(e) {
                    if (!isNaN(e = +e)) return n((Object(i.b)(t, e) - 1) / (t.length - 1))
                }
                return e.domain = function(n) {
                    if (!arguments.length) return t.slice();
                    t = [];
                    for (var r, u = 0, c = n.length; u < c; ++u) null == (r = n[u]) || isNaN(r = +r) || t.push(r);
                    return t.sort(i.a), e
                }, e.interpolator = function(t) {
                    return arguments.length ? (n = t, e) : n
                }, e.copy = function() {
                    return zr(n).domain(t)
                }, z.apply(e, arguments)
            }

            function Yr() {
                var t, n, e, r, i, u, c, f = 0,
                    o = .5,
                    a = 1,
                    s = K,
                    d = !1;

                function l(t) {
                    return isNaN(t = +t) ? c : (t = .5 + ((t = +u(t)) - n) * (t < n ? r : i), s(d ? Math.max(0, Math.min(1, t)) : t))
                }
                return l.domain = function(c) {
                        return arguments.length ? (t = u(f = +c[0]), n = u(o = +c[1]), e = u(a = +c[2]), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), l) : [f, o, a]
                    }, l.clamp = function(t) {
                        return arguments.length ? (d = !!t, l) : d
                    }, l.interpolator = function(t) {
                        return arguments.length ? (s = t, l) : s
                    }, l.unknown = function(t) {
                        return arguments.length ? (c = t, l) : c
                    },
                    function(c) {
                        return u = c, t = c(f), n = c(o), e = c(a), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), l
                    }
            }

            function qr() {
                var t = lt(Yr()(K));
                return t.copy = function() {
                    return Er(t, qr())
                }, z.apply(t, arguments)
            }

            function Fr() {
                var t = wt(Yr()).domain([.1, 1, 10]);
                return t.copy = function() {
                    return Er(t, Fr()).base(t.base())
                }, z.apply(t, arguments)
            }

            function Br() {
                var t = At(Yr());
                return t.copy = function() {
                    return Er(t, Br()).constant(t.constant())
                }, z.apply(t, arguments)
            }

            function Ir() {
                var t = jt(Yr());
                return t.copy = function() {
                    return Er(t, Ir()).exponent(t.exponent())
                }, z.apply(t, arguments)
            }

            function Hr() {
                return Ir.apply(null, arguments).exponent(.5)
            }
            var Gr = function(t) {
                    for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r);
                    return e
                },
                Vr = Gr("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
                Xr = Gr("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
                Wr = Gr("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
                Zr = Gr("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
                Qr = Gr("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
                Jr = Gr("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
                Kr = Gr("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
                $r = Gr("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
                ti = Gr("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
                ni = Gr("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),
                ei = e(363),
                ri = function(t) {
                    return Object(ei.b)(t[t.length - 1])
                },
                ii = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Gr),
                ui = ri(ii),
                ci = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Gr),
                fi = ri(ci),
                oi = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Gr),
                ai = ri(oi),
                si = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Gr),
                di = ri(si),
                li = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Gr),
                hi = ri(li),
                bi = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Gr),
                _i = ri(bi),
                pi = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Gr),
                yi = ri(pi),
                vi = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Gr),
                gi = ri(vi),
                mi = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Gr),
                xi = ri(mi),
                wi = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Gr),
                Mi = ri(wi),
                Ti = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Gr),
                Ci = ri(Ti),
                Ai = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Gr),
                ki = ri(Ai),
                Ni = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Gr),
                Oi = ri(Ni),
                Si = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Gr),
                ji = ri(Si),
                Ei = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Gr),
                Pi = ri(Ei),
                Ri = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Gr),
                Di = ri(Ri),
                Ui = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Gr),
                Li = ri(Ui),
                zi = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Gr),
                Yi = ri(zi),
                qi = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Gr),
                Fi = ri(qi),
                Bi = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Gr),
                Ii = ri(Bi),
                Hi = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Gr),
                Gi = ri(Hi),
                Vi = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Gr),
                Xi = ri(Vi),
                Wi = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Gr),
                Zi = ri(Wi),
                Qi = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Gr),
                Ji = ri(Qi),
                Ki = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Gr),
                $i = ri(Ki),
                tu = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Gr),
                nu = ri(tu),
                eu = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Gr),
                ru = ri(eu),
                iu = function(t) {
                    return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - 2710.57 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - 2475.67 * t))))))) + ")"
                },
                uu = e(923),
                cu = e(1178),
                fu = Object(cu.a)(Object(uu.a)(300, .5, 0), Object(uu.a)(-240, .5, 1)),
                ou = Object(cu.a)(Object(uu.a)(-100, .75, .35), Object(uu.a)(80, 1.5, .8)),
                au = Object(cu.a)(Object(uu.a)(260, .75, .35), Object(uu.a)(80, 1.5, .8)),
                su = Object(uu.a)(),
                du = function(t) {
                    (t < 0 || t > 1) && (t -= Math.floor(t));
                    var n = Math.abs(t - .5);
                    return su.h = 360 * t - 100, su.s = 1.5 - 1.5 * n, su.l = .8 - .9 * n, su + ""
                },
                lu = e(89),
                hu = Object(lu.g)(),
                bu = Math.PI / 3,
                _u = 2 * Math.PI / 3,
                pu = function(t) {
                    var n;
                    return t = (.5 - t) * Math.PI, hu.r = 255 * (n = Math.sin(t)) * n, hu.g = 255 * (n = Math.sin(t + bu)) * n, hu.b = 255 * (n = Math.sin(t + _u)) * n, hu + ""
                },
                yu = function(t) {
                    return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - 14825.05 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + 707.56 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - 6838.66 * t))))))) + ")"
                };

            function vu(t) {
                var n = t.length;
                return function(e) {
                    return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
                }
            }
            var gu = vu(Gr("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
                mu = vu(Gr("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
                xu = vu(Gr("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
                wu = vu(Gr("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
                Mu = e(124),
                Tu = e(2268),
                Cu = function(t) {
                    return function() {
                        return t
                    }
                },
                Au = Math.abs,
                ku = Math.atan2,
                Nu = Math.cos,
                Ou = Math.max,
                Su = Math.min,
                ju = Math.sin,
                Eu = Math.sqrt,
                Pu = Math.PI,
                Ru = Pu / 2,
                Du = 2 * Pu;

            function Uu(t) {
                return t > 1 ? 0 : t < -1 ? Pu : Math.acos(t)
            }

            function Lu(t) {
                return t >= 1 ? Ru : t <= -1 ? -Ru : Math.asin(t)
            }

            function zu(t) {
                return t.innerRadius
            }

            function Yu(t) {
                return t.outerRadius
            }

            function qu(t) {
                return t.startAngle
            }

            function Fu(t) {
                return t.endAngle
            }

            function Bu(t) {
                return t && t.padAngle
            }

            function Iu(t, n, e, r, i, u, c, f) {
                var o = e - t,
                    a = r - n,
                    s = c - i,
                    d = f - u,
                    l = d * o - s * a;
                if (!(l * l < 1e-12)) return [t + (l = (s * (n - u) - d * (t - i)) / l) * o, n + l * a]
            }

            function Hu(t, n, e, r, i, u, c) {
                var f = t - e,
                    o = n - r,
                    a = (c ? u : -u) / Eu(f * f + o * o),
                    s = a * o,
                    d = -a * f,
                    l = t + s,
                    h = n + d,
                    b = e + s,
                    _ = r + d,
                    p = (l + b) / 2,
                    y = (h + _) / 2,
                    v = b - l,
                    g = _ - h,
                    m = v * v + g * g,
                    x = i - u,
                    w = l * _ - b * h,
                    M = (g < 0 ? -1 : 1) * Eu(Ou(0, x * x * m - w * w)),
                    T = (w * g - v * M) / m,
                    C = (-w * v - g * M) / m,
                    A = (w * g + v * M) / m,
                    k = (-w * v + g * M) / m,
                    N = T - p,
                    O = C - y,
                    S = A - p,
                    j = k - y;
                return N * N + O * O > S * S + j * j && (T = A, C = k), {
                    cx: T,
                    cy: C,
                    x01: -s,
                    y01: -d,
                    x11: T * (i / x - 1),
                    y11: C * (i / x - 1)
                }
            }
            var Gu = function() {
                var t = zu,
                    n = Yu,
                    e = Cu(0),
                    r = null,
                    i = qu,
                    u = Fu,
                    c = Bu,
                    f = null;

                function o() {
                    var o, a, s = +t.apply(this, arguments),
                        d = +n.apply(this, arguments),
                        l = i.apply(this, arguments) - Ru,
                        h = u.apply(this, arguments) - Ru,
                        b = Au(h - l),
                        _ = h > l;
                    if (f || (f = o = Object(Tu.a)()), d < s && (a = d, d = s, s = a), d > 1e-12)
                        if (b > Du - 1e-12) f.moveTo(d * Nu(l), d * ju(l)), f.arc(0, 0, d, l, h, !_), s > 1e-12 && (f.moveTo(s * Nu(h), s * ju(h)), f.arc(0, 0, s, h, l, _));
                        else {
                            var p, y, v = l,
                                g = h,
                                m = l,
                                x = h,
                                w = b,
                                M = b,
                                T = c.apply(this, arguments) / 2,
                                C = T > 1e-12 && (r ? +r.apply(this, arguments) : Eu(s * s + d * d)),
                                A = Su(Au(d - s) / 2, +e.apply(this, arguments)),
                                k = A,
                                N = A;
                            if (C > 1e-12) {
                                var O = Lu(C / s * ju(T)),
                                    S = Lu(C / d * ju(T));
                                (w -= 2 * O) > 1e-12 ? (m += O *= _ ? 1 : -1, x -= O) : (w = 0, m = x = (l + h) / 2), (M -= 2 * S) > 1e-12 ? (v += S *= _ ? 1 : -1, g -= S) : (M = 0, v = g = (l + h) / 2)
                            }
                            var j = d * Nu(v),
                                E = d * ju(v),
                                P = s * Nu(x),
                                R = s * ju(x);
                            if (A > 1e-12) {
                                var D, U = d * Nu(g),
                                    L = d * ju(g),
                                    z = s * Nu(m),
                                    Y = s * ju(m);
                                if (b < Pu && (D = Iu(j, E, z, Y, U, L, P, R))) {
                                    var q = j - D[0],
                                        F = E - D[1],
                                        B = U - D[0],
                                        I = L - D[1],
                                        H = 1 / ju(Uu((q * B + F * I) / (Eu(q * q + F * F) * Eu(B * B + I * I))) / 2),
                                        G = Eu(D[0] * D[0] + D[1] * D[1]);
                                    k = Su(A, (s - G) / (H - 1)), N = Su(A, (d - G) / (H + 1))
                                }
                            }
                            M > 1e-12 ? N > 1e-12 ? (p = Hu(z, Y, j, E, d, N, _), y = Hu(U, L, P, R, d, N, _), f.moveTo(p.cx + p.x01, p.cy + p.y01), N < A ? f.arc(p.cx, p.cy, N, ku(p.y01, p.x01), ku(y.y01, y.x01), !_) : (f.arc(p.cx, p.cy, N, ku(p.y01, p.x01), ku(p.y11, p.x11), !_), f.arc(0, 0, d, ku(p.cy + p.y11, p.cx + p.x11), ku(y.cy + y.y11, y.cx + y.x11), !_), f.arc(y.cx, y.cy, N, ku(y.y11, y.x11), ku(y.y01, y.x01), !_))) : (f.moveTo(j, E), f.arc(0, 0, d, v, g, !_)) : f.moveTo(j, E), s > 1e-12 && w > 1e-12 ? k > 1e-12 ? (p = Hu(P, R, U, L, s, -k, _), y = Hu(j, E, z, Y, s, -k, _), f.lineTo(p.cx + p.x01, p.cy + p.y01), k < A ? f.arc(p.cx, p.cy, k, ku(p.y01, p.x01), ku(y.y01, y.x01), !_) : (f.arc(p.cx, p.cy, k, ku(p.y01, p.x01), ku(p.y11, p.x11), !_), f.arc(0, 0, s, ku(p.cy + p.y11, p.cx + p.x11), ku(y.cy + y.y11, y.cx + y.x11), _), f.arc(y.cx, y.cy, k, ku(y.y11, y.x11), ku(y.y01, y.x01), !_))) : f.arc(0, 0, s, x, m, _) : f.lineTo(P, R)
                        }
                    else f.moveTo(0, 0);
                    if (f.closePath(), o) return f = null, o + "" || null
                }
                return o.centroid = function() {
                    var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                        r = (+i.apply(this, arguments) + +u.apply(this, arguments)) / 2 - Pu / 2;
                    return [Nu(r) * e, ju(r) * e]
                }, o.innerRadius = function(n) {
                    return arguments.length ? (t = "function" == typeof n ? n : Cu(+n), o) : t
                }, o.outerRadius = function(t) {
                    return arguments.length ? (n = "function" == typeof t ? t : Cu(+t), o) : n
                }, o.cornerRadius = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : Cu(+t), o) : e
                }, o.padRadius = function(t) {
                    return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : Cu(+t), o) : r
                }, o.startAngle = function(t) {
                    return arguments.length ? (i = "function" == typeof t ? t : Cu(+t), o) : i
                }, o.endAngle = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : Cu(+t), o) : u
                }, o.padAngle = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? t : Cu(+t), o) : c
                }, o.context = function(t) {
                    return arguments.length ? (f = null == t ? null : t, o) : f
                }, o
            };

            function Vu(t) {
                this._context = t
            }
            Vu.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            this._context.lineTo(t, n)
                    }
                }
            };
            var Xu = function(t) {
                return new Vu(t)
            };

            function Wu(t) {
                return t[0]
            }

            function Zu(t) {
                return t[1]
            }
            var Qu = function() {
                    var t = Wu,
                        n = Zu,
                        e = Cu(!0),
                        r = null,
                        i = Xu,
                        u = null;

                    function c(c) {
                        var f, o, a, s = c.length,
                            d = !1;
                        for (null == r && (u = i(a = Object(Tu.a)())), f = 0; f <= s; ++f) !(f < s && e(o = c[f], f, c)) === d && ((d = !d) ? u.lineStart() : u.lineEnd()), d && u.point(+t(o, f, c), +n(o, f, c));
                        if (a) return u = null, a + "" || null
                    }
                    return c.x = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : Cu(+n), c) : t
                    }, c.y = function(t) {
                        return arguments.length ? (n = "function" == typeof t ? t : Cu(+t), c) : n
                    }, c.defined = function(t) {
                        return arguments.length ? (e = "function" == typeof t ? t : Cu(!!t), c) : e
                    }, c.curve = function(t) {
                        return arguments.length ? (i = t, null != r && (u = i(r)), c) : i
                    }, c.context = function(t) {
                        return arguments.length ? (null == t ? r = u = null : u = i(r = t), c) : r
                    }, c
                },
                Ju = function() {
                    var t = Wu,
                        n = null,
                        e = Cu(0),
                        r = Zu,
                        i = Cu(!0),
                        u = null,
                        c = Xu,
                        f = null;

                    function o(o) {
                        var a, s, d, l, h, b = o.length,
                            _ = !1,
                            p = new Array(b),
                            y = new Array(b);
                        for (null == u && (f = c(h = Object(Tu.a)())), a = 0; a <= b; ++a) {
                            if (!(a < b && i(l = o[a], a, o)) === _)
                                if (_ = !_) s = a, f.areaStart(), f.lineStart();
                                else {
                                    for (f.lineEnd(), f.lineStart(), d = a - 1; d >= s; --d) f.point(p[d], y[d]);
                                    f.lineEnd(), f.areaEnd()
                                } _ && (p[a] = +t(l, a, o), y[a] = +e(l, a, o), f.point(n ? +n(l, a, o) : p[a], r ? +r(l, a, o) : y[a]))
                        }
                        if (h) return f = null, h + "" || null
                    }

                    function a() {
                        return Qu().defined(i).curve(c).context(u)
                    }
                    return o.x = function(e) {
                        return arguments.length ? (t = "function" == typeof e ? e : Cu(+e), n = null, o) : t
                    }, o.x0 = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : Cu(+n), o) : t
                    }, o.x1 = function(t) {
                        return arguments.length ? (n = null == t ? null : "function" == typeof t ? t : Cu(+t), o) : n
                    }, o.y = function(t) {
                        return arguments.length ? (e = "function" == typeof t ? t : Cu(+t), r = null, o) : e
                    }, o.y0 = function(t) {
                        return arguments.length ? (e = "function" == typeof t ? t : Cu(+t), o) : e
                    }, o.y1 = function(t) {
                        return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : Cu(+t), o) : r
                    }, o.lineX0 = o.lineY0 = function() {
                        return a().x(t).y(e)
                    }, o.lineY1 = function() {
                        return a().x(t).y(r)
                    }, o.lineX1 = function() {
                        return a().x(n).y(e)
                    }, o.defined = function(t) {
                        return arguments.length ? (i = "function" == typeof t ? t : Cu(!!t), o) : i
                    }, o.curve = function(t) {
                        return arguments.length ? (c = t, null != u && (f = c(u)), o) : c
                    }, o.context = function(t) {
                        return arguments.length ? (null == t ? u = f = null : f = c(u = t), o) : u
                    }, o
                },
                Ku = function(t, n) {
                    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
                },
                $u = function(t) {
                    return t
                },
                tc = function() {
                    var t = $u,
                        n = Ku,
                        e = null,
                        r = Cu(0),
                        i = Cu(Du),
                        u = Cu(0);

                    function c(c) {
                        var f, o, a, s, d, l = c.length,
                            h = 0,
                            b = new Array(l),
                            _ = new Array(l),
                            p = +r.apply(this, arguments),
                            y = Math.min(Du, Math.max(-Du, i.apply(this, arguments) - p)),
                            v = Math.min(Math.abs(y) / l, u.apply(this, arguments)),
                            g = v * (y < 0 ? -1 : 1);
                        for (f = 0; f < l; ++f)(d = _[b[f] = f] = +t(c[f], f, c)) > 0 && (h += d);
                        for (null != n ? b.sort((function(t, e) {
                                return n(_[t], _[e])
                            })) : null != e && b.sort((function(t, n) {
                                return e(c[t], c[n])
                            })), f = 0, a = h ? (y - l * g) / h : 0; f < l; ++f, p = s) o = b[f], s = p + ((d = _[o]) > 0 ? d * a : 0) + g, _[o] = {
                            data: c[o],
                            index: f,
                            value: d,
                            startAngle: p,
                            endAngle: s,
                            padAngle: v
                        };
                        return _
                    }
                    return c.value = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : Cu(+n), c) : t
                    }, c.sortValues = function(t) {
                        return arguments.length ? (n = t, e = null, c) : n
                    }, c.sort = function(t) {
                        return arguments.length ? (e = t, n = null, c) : e
                    }, c.startAngle = function(t) {
                        return arguments.length ? (r = "function" == typeof t ? t : Cu(+t), c) : r
                    }, c.endAngle = function(t) {
                        return arguments.length ? (i = "function" == typeof t ? t : Cu(+t), c) : i
                    }, c.padAngle = function(t) {
                        return arguments.length ? (u = "function" == typeof t ? t : Cu(+t), c) : u
                    }, c
                },
                nc = rc(Xu);

            function ec(t) {
                this._curve = t
            }

            function rc(t) {
                function n(n) {
                    return new ec(t(n))
                }
                return n._curve = t, n
            }

            function ic(t) {
                var n = t.curve;
                return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) {
                    return arguments.length ? n(rc(t)) : n()._curve
                }, t
            }
            ec.prototype = {
                areaStart: function() {
                    this._curve.areaStart()
                },
                areaEnd: function() {
                    this._curve.areaEnd()
                },
                lineStart: function() {
                    this._curve.lineStart()
                },
                lineEnd: function() {
                    this._curve.lineEnd()
                },
                point: function(t, n) {
                    this._curve.point(n * Math.sin(t), n * -Math.cos(t))
                }
            };
            var uc = function() {
                    return ic(Qu().curve(nc))
                },
                cc = function() {
                    var t = Ju().curve(nc),
                        n = t.curve,
                        e = t.lineX0,
                        r = t.lineX1,
                        i = t.lineY0,
                        u = t.lineY1;
                    return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() {
                        return ic(e())
                    }, delete t.lineX0, t.lineEndAngle = function() {
                        return ic(r())
                    }, delete t.lineX1, t.lineInnerRadius = function() {
                        return ic(i())
                    }, delete t.lineY0, t.lineOuterRadius = function() {
                        return ic(u())
                    }, delete t.lineY1, t.curve = function(t) {
                        return arguments.length ? n(rc(t)) : n()._curve
                    }, t
                },
                fc = function(t, n) {
                    return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
                },
                oc = Array.prototype.slice;

            function ac(t) {
                return t.source
            }

            function sc(t) {
                return t.target
            }

            function dc(t) {
                var n = ac,
                    e = sc,
                    r = Wu,
                    i = Zu,
                    u = null;

                function c() {
                    var c, f = oc.call(arguments),
                        o = n.apply(this, f),
                        a = e.apply(this, f);
                    if (u || (u = c = Object(Tu.a)()), t(u, +r.apply(this, (f[0] = o, f)), +i.apply(this, f), +r.apply(this, (f[0] = a, f)), +i.apply(this, f)), c) return u = null, c + "" || null
                }
                return c.source = function(t) {
                    return arguments.length ? (n = t, c) : n
                }, c.target = function(t) {
                    return arguments.length ? (e = t, c) : e
                }, c.x = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : Cu(+t), c) : r
                }, c.y = function(t) {
                    return arguments.length ? (i = "function" == typeof t ? t : Cu(+t), c) : i
                }, c.context = function(t) {
                    return arguments.length ? (u = null == t ? null : t, c) : u
                }, c
            }

            function lc(t, n, e, r, i) {
                t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
            }

            function hc(t, n, e, r, i) {
                t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i)
            }

            function bc(t, n, e, r, i) {
                var u = fc(n, e),
                    c = fc(n, e = (e + i) / 2),
                    f = fc(r, e),
                    o = fc(r, i);
                t.moveTo(u[0], u[1]), t.bezierCurveTo(c[0], c[1], f[0], f[1], o[0], o[1])
            }

            function _c() {
                return dc(lc)
            }

            function pc() {
                return dc(hc)
            }

            function yc() {
                var t = dc(bc);
                return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
            }
            var vc = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / Pu);
                        t.moveTo(e, 0), t.arc(0, 0, e, 0, Du)
                    }
                },
                gc = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / 5) / 2;
                        t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
                    }
                },
                mc = Math.sqrt(1 / 3),
                xc = 2 * mc,
                wc = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / xc),
                            r = e * mc;
                        t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
                    }
                },
                Mc = Math.sin(Pu / 10) / Math.sin(7 * Pu / 10),
                Tc = Math.sin(Du / 10) * Mc,
                Cc = -Math.cos(Du / 10) * Mc,
                Ac = {
                    draw: function(t, n) {
                        var e = Math.sqrt(.8908130915292852 * n),
                            r = Tc * e,
                            i = Cc * e;
                        t.moveTo(0, -e), t.lineTo(r, i);
                        for (var u = 1; u < 5; ++u) {
                            var c = Du * u / 5,
                                f = Math.cos(c),
                                o = Math.sin(c);
                            t.lineTo(o * e, -f * e), t.lineTo(f * r - o * i, o * r + f * i)
                        }
                        t.closePath()
                    }
                },
                kc = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n),
                            r = -e / 2;
                        t.rect(r, r, e, e)
                    }
                },
                Nc = Math.sqrt(3),
                Oc = {
                    draw: function(t, n) {
                        var e = -Math.sqrt(n / (3 * Nc));
                        t.moveTo(0, 2 * e), t.lineTo(-Nc * e, -e), t.lineTo(Nc * e, -e), t.closePath()
                    }
                },
                Sc = Math.sqrt(3) / 2,
                jc = 1 / Math.sqrt(12),
                Ec = 3 * (jc / 2 + 1),
                Pc = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / Ec),
                            r = e / 2,
                            i = e * jc,
                            u = r,
                            c = e * jc + e,
                            f = -u,
                            o = c;
                        t.moveTo(r, i), t.lineTo(u, c), t.lineTo(f, o), t.lineTo(-.5 * r - Sc * i, Sc * r + -.5 * i), t.lineTo(-.5 * u - Sc * c, Sc * u + -.5 * c), t.lineTo(-.5 * f - Sc * o, Sc * f + -.5 * o), t.lineTo(-.5 * r + Sc * i, -.5 * i - Sc * r), t.lineTo(-.5 * u + Sc * c, -.5 * c - Sc * u), t.lineTo(-.5 * f + Sc * o, -.5 * o - Sc * f), t.closePath()
                    }
                },
                Rc = [vc, gc, wc, kc, Ac, Oc, Pc],
                Dc = function() {
                    var t = Cu(vc),
                        n = Cu(64),
                        e = null;

                    function r() {
                        var r;
                        if (e || (e = r = Object(Tu.a)()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null, r + "" || null
                    }
                    return r.type = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : Cu(n), r) : t
                    }, r.size = function(t) {
                        return arguments.length ? (n = "function" == typeof t ? t : Cu(+t), r) : n
                    }, r.context = function(t) {
                        return arguments.length ? (e = null == t ? null : t, r) : e
                    }, r
                },
                Uc = function() {};

            function Lc(t, n, e) {
                t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
            }

            function zc(t) {
                this._context = t
            }
            zc.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 3:
                            Lc(this, this._x1, this._y1);
                        case 2:
                            this._context.lineTo(this._x1, this._y1)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                        default:
                            Lc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };
            var Yc = function(t) {
                return new zc(t)
            };

            function qc(t) {
                this._context = t
            }
            qc.prototype = {
                areaStart: Uc,
                areaEnd: Uc,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x2, this._y2), this._context.closePath();
                            break;
                        case 2:
                            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                    }
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._x2 = t, this._y2 = n;
                            break;
                        case 1:
                            this._point = 2, this._x3 = t, this._y3 = n;
                            break;
                        case 2:
                            this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                            break;
                        default:
                            Lc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };
            var Fc = function(t) {
                return new qc(t)
            };

            function Bc(t) {
                this._context = t
            }
            Bc.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                            var e = (this._x0 + 4 * this._x1 + t) / 6,
                                r = (this._y0 + 4 * this._y1 + n) / 6;
                            this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            Lc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };
            var Ic = function(t) {
                return new Bc(t)
            };

            function Hc(t, n) {
                this._basis = new zc(t), this._beta = n
            }
            Hc.prototype = {
                lineStart: function() {
                    this._x = [], this._y = [], this._basis.lineStart()
                },
                lineEnd: function() {
                    var t = this._x,
                        n = this._y,
                        e = t.length - 1;
                    if (e > 0)
                        for (var r, i = t[0], u = n[0], c = t[e] - i, f = n[e] - u, o = -1; ++o <= e;) r = o / e, this._basis.point(this._beta * t[o] + (1 - this._beta) * (i + r * c), this._beta * n[o] + (1 - this._beta) * (u + r * f));
                    this._x = this._y = null, this._basis.lineEnd()
                },
                point: function(t, n) {
                    this._x.push(+t), this._y.push(+n)
                }
            };
            var Gc = function t(n) {
                function e(t) {
                    return 1 === n ? new zc(t) : new Hc(t, n)
                }
                return e.beta = function(n) {
                    return t(+n)
                }, e
            }(.85);

            function Vc(t, n, e) {
                t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
            }

            function Xc(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            Xc.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2);
                            break;
                        case 3:
                            Vc(this, this._x1, this._y1)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2, this._x1 = t, this._y1 = n;
                            break;
                        case 2:
                            this._point = 3;
                        default:
                            Vc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var Wc = function t(n) {
                function e(t) {
                    return new Xc(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            }(0);

            function Zc(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            Zc.prototype = {
                areaStart: Uc,
                areaEnd: Uc,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                    }
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._x3 = t, this._y3 = n;
                            break;
                        case 1:
                            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                            break;
                        case 2:
                            this._point = 3, this._x5 = t, this._y5 = n;
                            break;
                        default:
                            Vc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var Qc = function t(n) {
                function e(t) {
                    return new Zc(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            }(0);

            function Jc(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            Jc.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            Vc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var Kc = function t(n) {
                function e(t) {
                    return new Jc(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            }(0);

            function $c(t, n, e) {
                var r = t._x1,
                    i = t._y1,
                    u = t._x2,
                    c = t._y2;
                if (t._l01_a > 1e-12) {
                    var f = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                        o = 3 * t._l01_a * (t._l01_a + t._l12_a);
                    r = (r * f - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / o, i = (i * f - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / o
                }
                if (t._l23_a > 1e-12) {
                    var a = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                        s = 3 * t._l23_a * (t._l23_a + t._l12_a);
                    u = (u * a + t._x1 * t._l23_2a - n * t._l12_2a) / s, c = (c * a + t._y1 * t._l23_2a - e * t._l12_2a) / s
                }
                t._context.bezierCurveTo(r, i, u, c, t._x2, t._y2)
            }

            function tf(t, n) {
                this._context = t, this._alpha = n
            }
            tf.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2);
                            break;
                        case 3:
                            this.point(this._x2, this._y2)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t,
                            r = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                        default:
                            $c(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var nf = function t(n) {
                function e(t) {
                    return n ? new tf(t, n) : new Xc(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            }(.5);

            function ef(t, n) {
                this._context = t, this._alpha = n
            }
            ef.prototype = {
                areaStart: Uc,
                areaEnd: Uc,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                    }
                },
                point: function(t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t,
                            r = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._x3 = t, this._y3 = n;
                            break;
                        case 1:
                            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                            break;
                        case 2:
                            this._point = 3, this._x5 = t, this._y5 = n;
                            break;
                        default:
                            $c(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var rf = function t(n) {
                function e(t) {
                    return n ? new ef(t, n) : new Zc(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            }(.5);

            function uf(t, n) {
                this._context = t, this._alpha = n
            }
            uf.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t,
                            r = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            $c(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var cf = function t(n) {
                function e(t) {
                    return n ? new uf(t, n) : new Jc(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            }(.5);

            function ff(t) {
                this._context = t
            }
            ff.prototype = {
                areaStart: Uc,
                areaEnd: Uc,
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    this._point && this._context.closePath()
                },
                point: function(t, n) {
                    t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
                }
            };
            var of = function(t) {
                return new ff(t)
            };

            function af(t) {
                return t < 0 ? -1 : 1
            }

            function sf(t, n, e) {
                var r = t._x1 - t._x0,
                    i = n - t._x1,
                    u = (t._y1 - t._y0) / (r || i < 0 && -0),
                    c = (e - t._y1) / (i || r < 0 && -0),
                    f = (u * i + c * r) / (r + i);
                return (af(u) + af(c)) * Math.min(Math.abs(u), Math.abs(c), .5 * Math.abs(f)) || 0
            }

            function df(t, n) {
                var e = t._x1 - t._x0;
                return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
            }

            function lf(t, n, e) {
                var r = t._x0,
                    i = t._y0,
                    u = t._x1,
                    c = t._y1,
                    f = (u - r) / 3;
                t._context.bezierCurveTo(r + f, i + f * n, u - f, c - f * e, u, c)
            }

            function hf(t) {
                this._context = t
            }

            function bf(t) {
                this._context = new _f(t)
            }

            function _f(t) {
                this._context = t
            }

            function pf(t) {
                return new hf(t)
            }

            function yf(t) {
                return new bf(t)
            }

            function vf(t) {
                this._context = t
            }

            function gf(t) {
                var n, e, r = t.length - 1,
                    i = new Array(r),
                    u = new Array(r),
                    c = new Array(r);
                for (i[0] = 0, u[0] = 2, c[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, u[n] = 4, c[n] = 4 * t[n] + 2 * t[n + 1];
                for (i[r - 1] = 2, u[r - 1] = 7, c[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / u[n - 1], u[n] -= e, c[n] -= e * c[n - 1];
                for (i[r - 1] = c[r - 1] / u[r - 1], n = r - 2; n >= 0; --n) i[n] = (c[n] - i[n + 1]) / u[n];
                for (u[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) u[n] = 2 * t[n + 1] - i[n + 1];
                return [i, u]
            }
            hf.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x1, this._y1);
                            break;
                        case 3:
                            lf(this, this._t0, df(this, this._t0))
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    var e = NaN;
                    if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
                        switch (this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, lf(this, df(this, e = sf(this, t, n)), e);
                                break;
                            default:
                                lf(this, this._t0, e = sf(this, t, n))
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                    }
                }
            }, (bf.prototype = Object.create(hf.prototype)).point = function(t, n) {
                hf.prototype.point.call(this, n, t)
            }, _f.prototype = {
                moveTo: function(t, n) {
                    this._context.moveTo(n, t)
                },
                closePath: function() {
                    this._context.closePath()
                },
                lineTo: function(t, n) {
                    this._context.lineTo(n, t)
                },
                bezierCurveTo: function(t, n, e, r, i, u) {
                    this._context.bezierCurveTo(n, t, r, e, u, i)
                }
            }, vf.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x = [], this._y = []
                },
                lineEnd: function() {
                    var t = this._x,
                        n = this._y,
                        e = t.length;
                    if (e)
                        if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                        else
                            for (var r = gf(t), i = gf(n), u = 0, c = 1; c < e; ++u, ++c) this._context.bezierCurveTo(r[0][u], i[0][u], r[1][u], i[1][u], t[c], n[c]);
                    (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
                },
                point: function(t, n) {
                    this._x.push(+t), this._y.push(+n)
                }
            };
            var mf = function(t) {
                return new vf(t)
            };

            function xf(t, n) {
                this._context = t, this._t = n
            }
            xf.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x = this._y = NaN, this._point = 0
                },
                lineEnd: function() {
                    0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                            else {
                                var e = this._x * (1 - this._t) + t * this._t;
                                this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                            }
                    }
                    this._x = t, this._y = n
                }
            };
            var wf = function(t) {
                return new xf(t, .5)
            };

            function Mf(t) {
                return new xf(t, 0)
            }

            function Tf(t) {
                return new xf(t, 1)
            }
            var Cf = function(t, n) {
                    if ((i = t.length) > 1)
                        for (var e, r, i, u = 1, c = t[n[0]], f = c.length; u < i; ++u)
                            for (r = c, c = t[n[u]], e = 0; e < f; ++e) c[e][1] += c[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
                },
                Af = function(t) {
                    for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
                    return e
                };

            function kf(t, n) {
                return t[n]
            }
            var Nf = function() {
                    var t = Cu([]),
                        n = Af,
                        e = Cf,
                        r = kf;

                    function i(i) {
                        var u, c, f = t.apply(this, arguments),
                            o = i.length,
                            a = f.length,
                            s = new Array(a);
                        for (u = 0; u < a; ++u) {
                            for (var d, l = f[u], h = s[u] = new Array(o), b = 0; b < o; ++b) h[b] = d = [0, +r(i[b], l, b, i)], d.data = i[b];
                            h.key = l
                        }
                        for (u = 0, c = n(s); u < a; ++u) s[c[u]].index = u;
                        return e(s, c), s
                    }
                    return i.keys = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : Cu(oc.call(n)), i) : t
                    }, i.value = function(t) {
                        return arguments.length ? (r = "function" == typeof t ? t : Cu(+t), i) : r
                    }, i.order = function(t) {
                        return arguments.length ? (n = null == t ? Af : "function" == typeof t ? t : Cu(oc.call(t)), i) : n
                    }, i.offset = function(t) {
                        return arguments.length ? (e = null == t ? Cf : t, i) : e
                    }, i
                },
                Of = function(t, n) {
                    if ((r = t.length) > 0) {
                        for (var e, r, i, u = 0, c = t[0].length; u < c; ++u) {
                            for (i = e = 0; e < r; ++e) i += t[e][u][1] || 0;
                            if (i)
                                for (e = 0; e < r; ++e) t[e][u][1] /= i
                        }
                        Cf(t, n)
                    }
                },
                Sf = function(t, n) {
                    if ((f = t.length) > 0)
                        for (var e, r, i, u, c, f, o = 0, a = t[n[0]].length; o < a; ++o)
                            for (u = c = 0, e = 0; e < f; ++e)(i = (r = t[n[e]][o])[1] - r[0]) > 0 ? (r[0] = u, r[1] = u += i) : i < 0 ? (r[1] = c, r[0] = c += i) : (r[0] = 0, r[1] = i)
                },
                jf = function(t, n) {
                    if ((e = t.length) > 0) {
                        for (var e, r = 0, i = t[n[0]], u = i.length; r < u; ++r) {
                            for (var c = 0, f = 0; c < e; ++c) f += t[c][r][1] || 0;
                            i[r][1] += i[r][0] = -f / 2
                        }
                        Cf(t, n)
                    }
                },
                Ef = function(t, n) {
                    if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                        for (var e, r, i, u = 0, c = 1; c < r; ++c) {
                            for (var f = 0, o = 0, a = 0; f < i; ++f) {
                                for (var s = t[n[f]], d = s[c][1] || 0, l = (d - (s[c - 1][1] || 0)) / 2, h = 0; h < f; ++h) {
                                    var b = t[n[h]];
                                    l += (b[c][1] || 0) - (b[c - 1][1] || 0)
                                }
                                o += d, a += l * d
                            }
                            e[c - 1][1] += e[c - 1][0] = u, o && (u -= a / o)
                        }
                        e[c - 1][1] += e[c - 1][0] = u, Cf(t, n)
                    }
                },
                Pf = function(t) {
                    var n = t.map(Rf);
                    return Af(t).sort((function(t, e) {
                        return n[t] - n[e]
                    }))
                };

            function Rf(t) {
                for (var n, e = -1, r = 0, i = t.length, u = -1 / 0; ++e < i;)(n = +t[e][1]) > u && (u = n, r = e);
                return r
            }
            var Df = function(t) {
                var n = t.map(Uf);
                return Af(t).sort((function(t, e) {
                    return n[t] - n[e]
                }))
            };

            function Uf(t) {
                for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
                return e
            }
            var Lf = function(t) {
                    return Df(t).reverse()
                },
                zf = function(t) {
                    var n, e, r = t.length,
                        i = t.map(Uf),
                        u = Pf(t),
                        c = 0,
                        f = 0,
                        o = [],
                        a = [];
                    for (n = 0; n < r; ++n) e = u[n], c < f ? (c += i[e], o.push(e)) : (f += i[e], a.push(e));
                    return a.reverse().concat(o)
                },
                Yf = function(t) {
                    return Af(t).reverse()
                };
            var qf = Date.prototype.toISOString ? function(t) {
                return t.toISOString()
            } : Jn("%Y-%m-%dT%H:%M:%S.%LZ");
            var Ff = +new Date("2000-01-01T00:00:00.000Z") ? function(t) {
                    var n = new Date(t);
                    return isNaN(n) ? null : n
                } : Kn("%Y-%m-%dT%H:%M:%S.%LZ"),
                Bf = e(532),
                If = e(279),
                Hf = function(t) {
                    return function() {
                        return t
                    }
                };

            function Gf(t) {
                return t[0]
            }

            function Vf(t) {
                return t[1]
            }

            function Xf() {
                this._ = null
            }

            function Wf(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }

            function Zf(t, n) {
                var e = n,
                    r = n.R,
                    i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
            }

            function Qf(t, n) {
                var e = n,
                    r = n.L,
                    i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
            }

            function Jf(t) {
                for (; t.L;) t = t.L;
                return t
            }
            Xf.prototype = {
                constructor: Xf,
                insert: function(t, n) {
                    var e, r, i;
                    if (t) {
                        if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                            for (t = t.R; t.L;) t = t.L;
                            t.L = n
                        } else t.R = n;
                        e = t
                    } else this._ ? (t = Jf(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (Zf(this, e), e = (t = e).U), e.C = !1, r.C = !0, Qf(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Qf(this, e), e = (t = e).U), e.C = !1, r.C = !0, Zf(this, r)), e = t.U;
                    this._.C = !1
                },
                remove: function(t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var n, e, r, i = t.U,
                        u = t.L,
                        c = t.R;
                    if (e = u ? c ? Jf(c) : u : c, i ? i.L === t ? i.L = e : i.R = e : this._ = e, u && c ? (r = e.C, e.C = t.C, e.L = u, u.U = e, e !== c ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = c, c.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r)
                        if (t && t.C) t.C = !1;
                        else {
                            do {
                                if (t === this._) break;
                                if (t === i.L) {
                                    if ((n = i.R).C && (n.C = !1, i.C = !0, Zf(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                                        n.R && n.R.C || (n.L.C = !1, n.C = !0, Qf(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, Zf(this, i), t = this._;
                                        break
                                    }
                                } else if ((n = i.L).C && (n.C = !1, i.C = !0, Qf(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                                    n.L && n.L.C || (n.R.C = !1, n.C = !0, Zf(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, Qf(this, i), t = this._;
                                    break
                                }
                                n.C = !0, t = i, i = i.U
                            } while (!t.C);
                            t && (t.C = !1)
                        }
                }
            };
            var Kf = Xf;

            function $f(t, n, e, r) {
                var i = [null, null],
                    u = To.push(i) - 1;
                return i.left = t, i.right = n, e && no(i, t, n, e), r && no(i, n, t, r), wo[t.index].halfedges.push(u), wo[n.index].halfedges.push(u), i
            }

            function to(t, n, e) {
                var r = [n, e];
                return r.left = t, r
            }

            function no(t, n, e, r) {
                t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
            }

            function eo(t, n, e, r, i) {
                var u, c = t[0],
                    f = t[1],
                    o = c[0],
                    a = c[1],
                    s = 0,
                    d = 1,
                    l = f[0] - o,
                    h = f[1] - a;
                if (u = n - o, l || !(u > 0)) {
                    if (u /= l, l < 0) {
                        if (u < s) return;
                        u < d && (d = u)
                    } else if (l > 0) {
                        if (u > d) return;
                        u > s && (s = u)
                    }
                    if (u = r - o, l || !(u < 0)) {
                        if (u /= l, l < 0) {
                            if (u > d) return;
                            u > s && (s = u)
                        } else if (l > 0) {
                            if (u < s) return;
                            u < d && (d = u)
                        }
                        if (u = e - a, h || !(u > 0)) {
                            if (u /= h, h < 0) {
                                if (u < s) return;
                                u < d && (d = u)
                            } else if (h > 0) {
                                if (u > d) return;
                                u > s && (s = u)
                            }
                            if (u = i - a, h || !(u < 0)) {
                                if (u /= h, h < 0) {
                                    if (u > d) return;
                                    u > s && (s = u)
                                } else if (h > 0) {
                                    if (u < s) return;
                                    u < d && (d = u)
                                }
                                return !(s > 0 || d < 1) || (s > 0 && (t[0] = [o + s * l, a + s * h]), d < 1 && (t[1] = [o + d * l, a + d * h]), !0)
                            }
                        }
                    }
                }
            }

            function ro(t, n, e, r, i) {
                var u = t[1];
                if (u) return !0;
                var c, f, o = t[0],
                    a = t.left,
                    s = t.right,
                    d = a[0],
                    l = a[1],
                    h = s[0],
                    b = s[1],
                    _ = (d + h) / 2,
                    p = (l + b) / 2;
                if (b === l) {
                    if (_ < n || _ >= r) return;
                    if (d > h) {
                        if (o) {
                            if (o[1] >= i) return
                        } else o = [_, e];
                        u = [_, i]
                    } else {
                        if (o) {
                            if (o[1] < e) return
                        } else o = [_, i];
                        u = [_, e]
                    }
                } else if (f = p - (c = (d - h) / (b - l)) * _, c < -1 || c > 1)
                    if (d > h) {
                        if (o) {
                            if (o[1] >= i) return
                        } else o = [(e - f) / c, e];
                        u = [(i - f) / c, i]
                    } else {
                        if (o) {
                            if (o[1] < e) return
                        } else o = [(i - f) / c, i];
                        u = [(e - f) / c, e]
                    }
                else if (l < b) {
                    if (o) {
                        if (o[0] >= r) return
                    } else o = [n, c * n + f];
                    u = [r, c * r + f]
                } else {
                    if (o) {
                        if (o[0] < n) return
                    } else o = [r, c * r + f];
                    u = [n, c * n + f]
                }
                return t[0] = o, t[1] = u, !0
            }

            function io(t, n) {
                var e = t.site,
                    r = n.left,
                    i = n.right;
                return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
            }

            function uo(t, n) {
                return n[+(n.left !== t.site)]
            }

            function co(t, n) {
                return n[+(n.left === t.site)]
            }
            var fo, oo = [];

            function ao() {
                Wf(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function so(t) {
                var n = t.P,
                    e = t.N;
                if (n && e) {
                    var r = n.site,
                        i = t.site,
                        u = e.site;
                    if (r !== u) {
                        var c = i[0],
                            f = i[1],
                            o = r[0] - c,
                            a = r[1] - f,
                            s = u[0] - c,
                            d = u[1] - f,
                            l = 2 * (o * d - a * s);
                        if (!(l >= -Ao)) {
                            var h = o * o + a * a,
                                b = s * s + d * d,
                                _ = (d * h - a * b) / l,
                                p = (o * b - s * h) / l,
                                y = oo.pop() || new ao;
                            y.arc = t, y.site = i, y.x = _ + c, y.y = (y.cy = p + f) + Math.sqrt(_ * _ + p * p), t.circle = y;
                            for (var v = null, g = Mo._; g;)
                                if (y.y < g.y || y.y === g.y && y.x <= g.x) {
                                    if (!g.L) {
                                        v = g.P;
                                        break
                                    }
                                    g = g.L
                                } else {
                                    if (!g.R) {
                                        v = g;
                                        break
                                    }
                                    g = g.R
                                } Mo.insert(v, y), v || (fo = y)
                        }
                    }
                }
            }

            function lo(t) {
                var n = t.circle;
                n && (n.P || (fo = n.N), Mo.remove(n), oo.push(n), Wf(n), t.circle = null)
            }
            var ho = [];

            function bo() {
                Wf(this), this.edge = this.site = this.circle = null
            }

            function _o(t) {
                var n = ho.pop() || new bo;
                return n.site = t, n
            }

            function po(t) {
                lo(t), xo.remove(t), ho.push(t), Wf(t)
            }

            function yo(t) {
                var n = t.circle,
                    e = n.x,
                    r = n.cy,
                    i = [e, r],
                    u = t.P,
                    c = t.N,
                    f = [t];
                po(t);
                for (var o = u; o.circle && Math.abs(e - o.circle.x) < Co && Math.abs(r - o.circle.cy) < Co;) u = o.P, f.unshift(o), po(o), o = u;
                f.unshift(o), lo(o);
                for (var a = c; a.circle && Math.abs(e - a.circle.x) < Co && Math.abs(r - a.circle.cy) < Co;) c = a.N, f.push(a), po(a), a = c;
                f.push(a), lo(a);
                var s, d = f.length;
                for (s = 1; s < d; ++s) a = f[s], o = f[s - 1], no(a.edge, o.site, a.site, i);
                o = f[0], (a = f[d - 1]).edge = $f(o.site, a.site, null, i), so(o), so(a)
            }

            function vo(t) {
                for (var n, e, r, i, u = t[0], c = t[1], f = xo._; f;)
                    if ((r = go(f, c) - u) > Co) f = f.L;
                    else {
                        if (!((i = u - mo(f, c)) > Co)) {
                            r > -Co ? (n = f.P, e = f) : i > -Co ? (n = f, e = f.N) : n = e = f;
                            break
                        }
                        if (!f.R) {
                            n = f;
                            break
                        }
                        f = f.R
                    }!
                function(t) {
                    wo[t.index] = {
                        site: t,
                        halfedges: []
                    }
                }(t);
                var o = _o(t);
                if (xo.insert(n, o), n || e) {
                    if (n === e) return lo(n), e = _o(n.site), xo.insert(o, e), o.edge = e.edge = $f(n.site, o.site), so(n), void so(e);
                    if (e) {
                        lo(n), lo(e);
                        var a = n.site,
                            s = a[0],
                            d = a[1],
                            l = t[0] - s,
                            h = t[1] - d,
                            b = e.site,
                            _ = b[0] - s,
                            p = b[1] - d,
                            y = 2 * (l * p - h * _),
                            v = l * l + h * h,
                            g = _ * _ + p * p,
                            m = [(p * v - h * g) / y + s, (l * g - _ * v) / y + d];
                        no(e.edge, a, b, m), o.edge = $f(a, t, null, m), e.edge = $f(t, b, null, m), so(n), so(e)
                    } else o.edge = $f(n.site, o.site)
                }
            }

            function go(t, n) {
                var e = t.site,
                    r = e[0],
                    i = e[1],
                    u = i - n;
                if (!u) return r;
                var c = t.P;
                if (!c) return -1 / 0;
                var f = (e = c.site)[0],
                    o = e[1],
                    a = o - n;
                if (!a) return f;
                var s = f - r,
                    d = 1 / u - 1 / a,
                    l = s / a;
                return d ? (-l + Math.sqrt(l * l - 2 * d * (s * s / (-2 * a) - o + a / 2 + i - u / 2))) / d + r : (r + f) / 2
            }

            function mo(t, n) {
                var e = t.N;
                if (e) return go(e, n);
                var r = t.site;
                return r[1] === n ? r[0] : 1 / 0
            }
            var xo, wo, Mo, To, Co = 1e-6,
                Ao = 1e-12;

            function ko(t, n) {
                return n[1] - t[1] || n[0] - t[0]
            }

            function No(t, n) {
                var e, r, i, u = t.sort(ko).pop();
                for (To = [], wo = new Array(t.length), xo = new Kf, Mo = new Kf;;)
                    if (i = fo, u && (!i || u[1] < i.y || u[1] === i.y && u[0] < i.x)) u[0] === e && u[1] === r || (vo(u), e = u[0], r = u[1]), u = t.pop();
                    else {
                        if (!i) break;
                        yo(i.arc)
                    } if (function() {
                        for (var t, n, e, r, i = 0, u = wo.length; i < u; ++i)
                            if ((t = wo[i]) && (r = (n = t.halfedges).length)) {
                                var c = new Array(r),
                                    f = new Array(r);
                                for (e = 0; e < r; ++e) c[e] = e, f[e] = io(t, To[n[e]]);
                                for (c.sort((function(t, n) {
                                        return f[n] - f[t]
                                    })), e = 0; e < r; ++e) f[e] = n[c[e]];
                                for (e = 0; e < r; ++e) n[e] = f[e]
                            }
                    }(), n) {
                    var c = +n[0][0],
                        f = +n[0][1],
                        o = +n[1][0],
                        a = +n[1][1];
                    ! function(t, n, e, r) {
                        for (var i, u = To.length; u--;) ro(i = To[u], t, n, e, r) && eo(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > Co || Math.abs(i[0][1] - i[1][1]) > Co) || delete To[u]
                    }(c, f, o, a),
                    function(t, n, e, r) {
                        var i, u, c, f, o, a, s, d, l, h, b, _, p = wo.length,
                            y = !0;
                        for (i = 0; i < p; ++i)
                            if (u = wo[i]) {
                                for (c = u.site, f = (o = u.halfedges).length; f--;) To[o[f]] || o.splice(f, 1);
                                for (f = 0, a = o.length; f < a;) b = (h = co(u, To[o[f]]))[0], _ = h[1], d = (s = uo(u, To[o[++f % a]]))[0], l = s[1], (Math.abs(b - d) > Co || Math.abs(_ - l) > Co) && (o.splice(f, 0, To.push(to(c, h, Math.abs(b - t) < Co && r - _ > Co ? [t, Math.abs(d - t) < Co ? l : r] : Math.abs(_ - r) < Co && e - b > Co ? [Math.abs(l - r) < Co ? d : e, r] : Math.abs(b - e) < Co && _ - n > Co ? [e, Math.abs(d - e) < Co ? l : n] : Math.abs(_ - n) < Co && b - t > Co ? [Math.abs(l - n) < Co ? d : t, n] : null)) - 1), ++a);
                                a && (y = !1)
                            } if (y) {
                            var v, g, m, x = 1 / 0;
                            for (i = 0, y = null; i < p; ++i)(u = wo[i]) && (m = (v = (c = u.site)[0] - t) * v + (g = c[1] - n) * g) < x && (x = m, y = u);
                            if (y) {
                                var w = [t, n],
                                    M = [t, r],
                                    T = [e, r],
                                    C = [e, n];
                                y.halfedges.push(To.push(to(c = y.site, w, M)) - 1, To.push(to(c, M, T)) - 1, To.push(to(c, T, C)) - 1, To.push(to(c, C, w)) - 1)
                            }
                        }
                        for (i = 0; i < p; ++i)(u = wo[i]) && (u.halfedges.length || delete wo[i])
                    }(c, f, o, a)
                }
                this.edges = To, this.cells = wo, xo = Mo = To = wo = null
            }
            No.prototype = {
                constructor: No,
                polygons: function() {
                    var t = this.edges;
                    return this.cells.map((function(n) {
                        var e = n.halfedges.map((function(e) {
                            return uo(n, t[e])
                        }));
                        return e.data = n.site.data, e
                    }))
                },
                triangles: function() {
                    var t = [],
                        n = this.edges;
                    return this.cells.forEach((function(e, r) {
                        if (u = (i = e.halfedges).length)
                            for (var i, u, c, f, o, a, s = e.site, d = -1, l = n[i[u - 1]], h = l.left === s ? l.right : l.left; ++d < u;) c = h, h = (l = n[i[d]]).left === s ? l.right : l.left, c && h && r < c.index && r < h.index && (o = c, a = h, ((f = s)[0] - a[0]) * (o[1] - f[1]) - (f[0] - o[0]) * (a[1] - f[1]) < 0) && t.push([s.data, c.data, h.data])
                    })), t
                },
                links: function() {
                    return this.edges.filter((function(t) {
                        return t.right
                    })).map((function(t) {
                        return {
                            source: t.left.data,
                            target: t.right.data
                        }
                    }))
                },
                find: function(t, n, e) {
                    for (var r, i, u = this, c = u._found || 0, f = u.cells.length; !(i = u.cells[c]);)
                        if (++c >= f) return null;
                    var o = t - i.site[0],
                        a = n - i.site[1],
                        s = o * o + a * a;
                    do {
                        i = u.cells[r = c], c = null, i.halfedges.forEach((function(e) {
                            var r = u.edges[e],
                                f = r.left;
                            if (f !== i.site && f || (f = r.right)) {
                                var o = t - f[0],
                                    a = n - f[1],
                                    d = o * o + a * a;
                                d < s && (s = d, c = f.index)
                            }
                        }))
                    } while (null !== c);
                    return u._found = r, null == e || s <= e * e ? i.site : null
                }
            };
            var Oo = function() {
                    var t = Gf,
                        n = Vf,
                        e = null;

                    function r(r) {
                        return new No(r.map((function(e, i) {
                            var u = [Math.round(t(e, i, r) / Co) * Co, Math.round(n(e, i, r) / Co) * Co];
                            return u.index = i, u.data = e, u
                        })), e)
                    }
                    return r.polygons = function(t) {
                        return r(t).polygons()
                    }, r.links = function(t) {
                        return r(t).links()
                    }, r.triangles = function(t) {
                        return r(t).triangles()
                    }, r.x = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : Hf(+n), r) : t
                    }, r.y = function(t) {
                        return arguments.length ? (n = "function" == typeof t ? t : Hf(+t), r) : n
                    }, r.extent = function(t) {
                        return arguments.length ? (e = null == t ? null : [
                            [+t[0][0], +t[0][1]],
                            [+t[1][0], +t[1][1]]
                        ], r) : e && [
                            [e[0][0], e[0][1]],
                            [e[1][0], e[1][1]]
                        ]
                    }, r.size = function(t) {
                        return arguments.length ? (e = null == t ? null : [
                            [0, 0],
                            [+t[0], +t[1]]
                        ], r) : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]]
                    }, r
                },
                So = e(2264),
                jo = e(449),
                Eo = e(2273),
                Po = e(248),
                Ro = e(2267),
                Do = e(455),
                Uo = e(2266),
                Lo = function(t) {
                    return function() {
                        return t
                    }
                };

            function zo(t, n, e) {
                this.target = t, this.type = n, this.transform = e
            }

            function Yo(t, n, e) {
                this.k = t, this.x = n, this.y = e
            }
            Yo.prototype = {
                constructor: Yo,
                scale: function(t) {
                    return 1 === t ? this : new Yo(this.k * t, this.x, this.y)
                },
                translate: function(t, n) {
                    return 0 === t & 0 === n ? this : new Yo(this.k, this.x + this.k * t, this.y + this.k * n)
                },
                apply: function(t) {
                    return [t[0] * this.k + this.x, t[1] * this.k + this.y]
                },
                applyX: function(t) {
                    return t * this.k + this.x
                },
                applyY: function(t) {
                    return t * this.k + this.y
                },
                invert: function(t) {
                    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
                },
                invertX: function(t) {
                    return (t - this.x) / this.k
                },
                invertY: function(t) {
                    return (t - this.y) / this.k
                },
                rescaleX: function(t) {
                    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
                },
                rescaleY: function(t) {
                    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
                },
                toString: function() {
                    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
                }
            };
            var qo = new Yo(1, 0, 0);

            function Fo(t) {
                for (; !t.__zoom;)
                    if (!(t = t.parentNode)) return qo;
                return t.__zoom
            }

            function Bo() {
                Po.c.stopImmediatePropagation()
            }
            Fo.prototype = Yo.prototype;
            var Io = function() {
                Po.c.preventDefault(), Po.c.stopImmediatePropagation()
            };

            function Ho() {
                return !Po.c.ctrlKey && !Po.c.button
            }

            function Go() {
                var t = this;
                return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
                    [(t = t.viewBox.baseVal).x, t.y],
                    [t.x + t.width, t.y + t.height]
                ] : [
                    [0, 0],
                    [t.width.baseVal.value, t.height.baseVal.value]
                ] : [
                    [0, 0],
                    [t.clientWidth, t.clientHeight]
                ]
            }

            function Vo() {
                return this.__zoom || qo
            }

            function Xo() {
                return -Po.c.deltaY * (1 === Po.c.deltaMode ? .05 : Po.c.deltaMode ? 1 : .002)
            }

            function Wo() {
                return navigator.maxTouchPoints || "ontouchstart" in this
            }

            function Zo(t, n, e) {
                var r = t.invertX(n[0][0]) - e[0][0],
                    i = t.invertX(n[1][0]) - e[1][0],
                    u = t.invertY(n[0][1]) - e[0][1],
                    c = t.invertY(n[1][1]) - e[1][1];
                return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), c > u ? (u + c) / 2 : Math.min(0, u) || Math.max(0, c))
            }
            var Qo = function() {
                var t, n, e = Ho,
                    r = Go,
                    i = Zo,
                    u = Xo,
                    c = Wo,
                    f = [0, 1 / 0],
                    o = [
                        [-1 / 0, -1 / 0],
                        [1 / 0, 1 / 0]
                    ],
                    a = 250,
                    s = Eo.a,
                    d = Object(So.a)("start", "zoom", "end"),
                    l = 0;

                function h(t) {
                    t.property("__zoom", Vo).on("wheel.zoom", m).on("mousedown.zoom", x).on("dblclick.zoom", w).filter(c).on("touchstart.zoom", M).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                }

                function b(t, n) {
                    return (n = Math.max(f[0], Math.min(f[1], n))) === t.k ? t : new Yo(n, t.x, t.y)
                }

                function _(t, n, e) {
                    var r = n[0] - e[0] * t.k,
                        i = n[1] - e[1] * t.k;
                    return r === t.x && i === t.y ? t : new Yo(t.k, r, i)
                }

                function p(t) {
                    return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
                }

                function y(t, n, e) {
                    t.on("start.zoom", (function() {
                        v(this, arguments).start()
                    })).on("interrupt.zoom end.zoom", (function() {
                        v(this, arguments).end()
                    })).tween("zoom", (function() {
                        var t = this,
                            i = arguments,
                            u = v(t, i),
                            c = r.apply(t, i),
                            f = null == e ? p(c) : "function" == typeof e ? e.apply(t, i) : e,
                            o = Math.max(c[1][0] - c[0][0], c[1][1] - c[0][1]),
                            a = t.__zoom,
                            d = "function" == typeof n ? n.apply(t, i) : n,
                            l = s(a.invert(f).concat(o / a.k), d.invert(f).concat(o / d.k));
                        return function(t) {
                            if (1 === t) t = d;
                            else {
                                var n = l(t),
                                    e = o / n[2];
                                t = new Yo(e, f[0] - n[0] * e, f[1] - n[1] * e)
                            }
                            u.zoom(null, t)
                        }
                    }))
                }

                function v(t, n, e) {
                    return !e && t.__zooming || new g(t, n)
                }

                function g(t, n) {
                    this.that = t, this.args = n, this.active = 0, this.extent = r.apply(t, n), this.taps = 0
                }

                function m() {
                    if (e.apply(this, arguments)) {
                        var t = v(this, arguments),
                            n = this.__zoom,
                            r = Math.max(f[0], Math.min(f[1], n.k * Math.pow(2, u.apply(this, arguments)))),
                            c = Object(Ro.a)(this);
                        if (t.wheel) t.mouse[0][0] === c[0] && t.mouse[0][1] === c[1] || (t.mouse[1] = n.invert(t.mouse[0] = c)), clearTimeout(t.wheel);
                        else {
                            if (n.k === r) return;
                            t.mouse = [c, n.invert(c)], Object(If.b)(this), t.start()
                        }
                        Io(), t.wheel = setTimeout(a, 150), t.zoom("mouse", i(_(b(n, r), t.mouse[0], t.mouse[1]), t.extent, o))
                    }

                    function a() {
                        t.wheel = null, t.end()
                    }
                }

                function x() {
                    if (!n && e.apply(this, arguments)) {
                        var t = v(this, arguments, !0),
                            r = Object(Do.a)(Po.c.view).on("mousemove.zoom", a, !0).on("mouseup.zoom", s, !0),
                            u = Object(Ro.a)(this),
                            c = Po.c.clientX,
                            f = Po.c.clientY;
                        Object(jo.a)(Po.c.view), Bo(), t.mouse = [u, this.__zoom.invert(u)], Object(If.b)(this), t.start()
                    }

                    function a() {
                        if (Io(), !t.moved) {
                            var n = Po.c.clientX - c,
                                e = Po.c.clientY - f;
                            t.moved = n * n + e * e > l
                        }
                        t.zoom("mouse", i(_(t.that.__zoom, t.mouse[0] = Object(Ro.a)(t.that), t.mouse[1]), t.extent, o))
                    }

                    function s() {
                        r.on("mousemove.zoom mouseup.zoom", null), Object(jo.b)(Po.c.view, t.moved), Io(), t.end()
                    }
                }

                function w() {
                    if (e.apply(this, arguments)) {
                        var t = this.__zoom,
                            n = Object(Ro.a)(this),
                            u = t.invert(n),
                            c = t.k * (Po.c.shiftKey ? .5 : 2),
                            f = i(_(b(t, c), n, u), r.apply(this, arguments), o);
                        Io(), a > 0 ? Object(Do.a)(this).transition().duration(a).call(y, f, n) : Object(Do.a)(this).call(h.transform, f)
                    }
                }

                function M() {
                    if (e.apply(this, arguments)) {
                        var n, r, i, u, c = Po.c.touches,
                            f = c.length,
                            o = v(this, arguments, Po.c.changedTouches.length === f);
                        for (Bo(), r = 0; r < f; ++r) i = c[r], u = [u = Object(Uo.a)(this, c, i.identifier), this.__zoom.invert(u), i.identifier], o.touch0 ? o.touch1 || o.touch0[2] === u[2] || (o.touch1 = u, o.taps = 0) : (o.touch0 = u, n = !0, o.taps = 1 + !!t);
                        t && (t = clearTimeout(t)), n && (o.taps < 2 && (t = setTimeout((function() {
                            t = null
                        }), 500)), Object(If.b)(this), o.start())
                    }
                }

                function T() {
                    if (this.__zooming) {
                        var n, e, r, u, c = v(this, arguments),
                            f = Po.c.changedTouches,
                            a = f.length;
                        for (Io(), t && (t = clearTimeout(t)), c.taps = 0, n = 0; n < a; ++n) e = f[n], r = Object(Uo.a)(this, f, e.identifier), c.touch0 && c.touch0[2] === e.identifier ? c.touch0[0] = r : c.touch1 && c.touch1[2] === e.identifier && (c.touch1[0] = r);
                        if (e = c.that.__zoom, c.touch1) {
                            var s = c.touch0[0],
                                d = c.touch0[1],
                                l = c.touch1[0],
                                h = c.touch1[1],
                                p = (p = l[0] - s[0]) * p + (p = l[1] - s[1]) * p,
                                y = (y = h[0] - d[0]) * y + (y = h[1] - d[1]) * y;
                            e = b(e, Math.sqrt(p / y)), r = [(s[0] + l[0]) / 2, (s[1] + l[1]) / 2], u = [(d[0] + h[0]) / 2, (d[1] + h[1]) / 2]
                        } else {
                            if (!c.touch0) return;
                            r = c.touch0[0], u = c.touch0[1]
                        }
                        c.zoom("touch", i(_(e, r, u), c.extent, o))
                    }
                }

                function C() {
                    if (this.__zooming) {
                        var t, e, r = v(this, arguments),
                            i = Po.c.changedTouches,
                            u = i.length;
                        for (Bo(), n && clearTimeout(n), n = setTimeout((function() {
                                n = null
                            }), 500), t = 0; t < u; ++t) e = i[t], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
                        if (r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0) r.touch0[1] = this.__zoom.invert(r.touch0[0]);
                        else if (r.end(), 2 === r.taps) {
                            var c = Object(Do.a)(this).on("dblclick.zoom");
                            c && c.apply(this, arguments)
                        }
                    }
                }
                return h.transform = function(t, n, e) {
                    var r = t.selection ? t.selection() : t;
                    r.property("__zoom", Vo), t !== r ? y(t, n, e) : r.interrupt().each((function() {
                        v(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                    }))
                }, h.scaleBy = function(t, n, e) {
                    h.scaleTo(t, (function() {
                        var t = this.__zoom.k,
                            e = "function" == typeof n ? n.apply(this, arguments) : n;
                        return t * e
                    }), e)
                }, h.scaleTo = function(t, n, e) {
                    h.transform(t, (function() {
                        var t = r.apply(this, arguments),
                            u = this.__zoom,
                            c = null == e ? p(t) : "function" == typeof e ? e.apply(this, arguments) : e,
                            f = u.invert(c),
                            a = "function" == typeof n ? n.apply(this, arguments) : n;
                        return i(_(b(u, a), c, f), t, o)
                    }), e)
                }, h.translateBy = function(t, n, e) {
                    h.transform(t, (function() {
                        return i(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), r.apply(this, arguments), o)
                    }))
                }, h.translateTo = function(t, n, e, u) {
                    h.transform(t, (function() {
                        var t = r.apply(this, arguments),
                            c = this.__zoom,
                            f = null == u ? p(t) : "function" == typeof u ? u.apply(this, arguments) : u;
                        return i(qo.translate(f[0], f[1]).scale(c.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, o)
                    }), u)
                }, g.prototype = {
                    start: function() {
                        return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this
                    },
                    zoom: function(t, n) {
                        return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                    },
                    end: function() {
                        return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this
                    },
                    emit: function(t) {
                        Object(Po.a)(new zo(h, t, this.that.__zoom), d.apply, d, [t, this.that, this.args])
                    }
                }, h.wheelDelta = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : Lo(+t), h) : u
                }, h.filter = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : Lo(!!t), h) : e
                }, h.touchable = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? t : Lo(!!t), h) : c
                }, h.extent = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : Lo([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]]
                    ]), h) : r
                }, h.scaleExtent = function(t) {
                    return arguments.length ? (f[0] = +t[0], f[1] = +t[1], h) : [f[0], f[1]]
                }, h.translateExtent = function(t) {
                    return arguments.length ? (o[0][0] = +t[0][0], o[1][0] = +t[1][0], o[0][1] = +t[0][1], o[1][1] = +t[1][1], h) : [
                        [o[0][0], o[0][1]],
                        [o[1][0], o[1][1]]
                    ]
                }, h.constrain = function(t) {
                    return arguments.length ? (i = t, h) : i
                }, h.duration = function(t) {
                    return arguments.length ? (a = +t, h) : a
                }, h.interpolate = function(t) {
                    return arguments.length ? (s = t, h) : s
                }, h.on = function() {
                    var t = d.on.apply(d, arguments);
                    return t === d ? h : t
                }, h.clickDistance = function(t) {
                    return arguments.length ? (l = (t = +t) * t, h) : Math.sqrt(l)
                }, h
            }
        },
        2315: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return f
            }));

            function r(t, n, e, r) {
                if (isNaN(n) || isNaN(e)) return t;
                var i, u, c, f, o, a, s, d, l, h = t._root,
                    b = {
                        data: r
                    },
                    _ = t._x0,
                    p = t._y0,
                    y = t._x1,
                    v = t._y1;
                if (!h) return t._root = b, t;
                for (; h.length;)
                    if ((a = n >= (u = (_ + y) / 2)) ? _ = u : y = u, (s = e >= (c = (p + v) / 2)) ? p = c : v = c, i = h, !(h = h[d = s << 1 | a])) return i[d] = b, t;
                if (f = +t._x.call(null, h.data), o = +t._y.call(null, h.data), n === f && e === o) return b.next = h, i ? i[d] = b : t._root = b, t;
                do {
                    i = i ? i[d] = new Array(4) : t._root = new Array(4), (a = n >= (u = (_ + y) / 2)) ? _ = u : y = u, (s = e >= (c = (p + v) / 2)) ? p = c : v = c
                } while ((d = s << 1 | a) == (l = (o >= c) << 1 | f >= u));
                return i[l] = h, i[d] = b, t
            }
            var i = function(t, n, e, r, i) {
                this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
            };

            function u(t) {
                return t[0]
            }

            function c(t) {
                return t[1]
            }

            function f(t, n, e) {
                var r = new o(null == n ? u : n, null == e ? c : e, NaN, NaN, NaN, NaN);
                return null == t ? r : r.addAll(t)
            }

            function o(t, n, e, r, i, u) {
                this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = u, this._root = void 0
            }

            function a(t) {
                for (var n = {
                        data: t.data
                    }, e = n; t = t.next;) e = e.next = {
                    data: t.data
                };
                return n
            }
            var s = f.prototype = o.prototype;
            s.copy = function() {
                var t, n, e = new o(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
                    r = this._root;
                if (!r) return e;
                if (!r.length) return e._root = a(r), e;
                for (t = [{
                        source: r,
                        target: e._root = new Array(4)
                    }]; r = t.pop();)
                    for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
                        source: n,
                        target: r.target[i] = new Array(4)
                    }) : r.target[i] = a(n));
                return e
            }, s.add = function(t) {
                var n = +this._x.call(null, t),
                    e = +this._y.call(null, t);
                return r(this.cover(n, e), n, e, t)
            }, s.addAll = function(t) {
                var n, e, i, u, c = t.length,
                    f = new Array(c),
                    o = new Array(c),
                    a = 1 / 0,
                    s = 1 / 0,
                    d = -1 / 0,
                    l = -1 / 0;
                for (e = 0; e < c; ++e) isNaN(i = +this._x.call(null, n = t[e])) || isNaN(u = +this._y.call(null, n)) || (f[e] = i, o[e] = u, i < a && (a = i), i > d && (d = i), u < s && (s = u), u > l && (l = u));
                if (a > d || s > l) return this;
                for (this.cover(a, s).cover(d, l), e = 0; e < c; ++e) r(this, f[e], o[e], t[e]);
                return this
            }, s.cover = function(t, n) {
                if (isNaN(t = +t) || isNaN(n = +n)) return this;
                var e = this._x0,
                    r = this._y0,
                    i = this._x1,
                    u = this._y1;
                if (isNaN(e)) i = (e = Math.floor(t)) + 1, u = (r = Math.floor(n)) + 1;
                else {
                    for (var c, f, o = i - e, a = this._root; e > t || t >= i || r > n || n >= u;) switch (f = (n < r) << 1 | t < e, (c = new Array(4))[f] = a, a = c, o *= 2, f) {
                        case 0:
                            i = e + o, u = r + o;
                            break;
                        case 1:
                            e = i - o, u = r + o;
                            break;
                        case 2:
                            i = e + o, r = u - o;
                            break;
                        case 3:
                            e = i - o, r = u - o
                    }
                    this._root && this._root.length && (this._root = a)
                }
                return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = u, this
            }, s.data = function() {
                var t = [];
                return this.visit((function(n) {
                    if (!n.length)
                        do {
                            t.push(n.data)
                        } while (n = n.next)
                })), t
            }, s.extent = function(t) {
                return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
                    [this._x0, this._y0],
                    [this._x1, this._y1]
                ]
            }, s.find = function(t, n, e) {
                var r, u, c, f, o, a, s, d = this._x0,
                    l = this._y0,
                    h = this._x1,
                    b = this._y1,
                    _ = [],
                    p = this._root;
                for (p && _.push(new i(p, d, l, h, b)), null == e ? e = 1 / 0 : (d = t - e, l = n - e, h = t + e, b = n + e, e *= e); a = _.pop();)
                    if (!(!(p = a.node) || (u = a.x0) > h || (c = a.y0) > b || (f = a.x1) < d || (o = a.y1) < l))
                        if (p.length) {
                            var y = (u + f) / 2,
                                v = (c + o) / 2;
                            _.push(new i(p[3], y, v, f, o), new i(p[2], u, v, y, o), new i(p[1], y, c, f, v), new i(p[0], u, c, y, v)), (s = (n >= v) << 1 | t >= y) && (a = _[_.length - 1], _[_.length - 1] = _[_.length - 1 - s], _[_.length - 1 - s] = a)
                        } else {
                            var g = t - +this._x.call(null, p.data),
                                m = n - +this._y.call(null, p.data),
                                x = g * g + m * m;
                            if (x < e) {
                                var w = Math.sqrt(e = x);
                                d = t - w, l = n - w, h = t + w, b = n + w, r = p.data
                            }
                        } return r
            }, s.remove = function(t) {
                if (isNaN(u = +this._x.call(null, t)) || isNaN(c = +this._y.call(null, t))) return this;
                var n, e, r, i, u, c, f, o, a, s, d, l, h = this._root,
                    b = this._x0,
                    _ = this._y0,
                    p = this._x1,
                    y = this._y1;
                if (!h) return this;
                if (h.length)
                    for (;;) {
                        if ((a = u >= (f = (b + p) / 2)) ? b = f : p = f, (s = c >= (o = (_ + y) / 2)) ? _ = o : y = o, n = h, !(h = h[d = s << 1 | a])) return this;
                        if (!h.length) break;
                        (n[d + 1 & 3] || n[d + 2 & 3] || n[d + 3 & 3]) && (e = n, l = d)
                    }
                for (; h.data !== t;)
                    if (r = h, !(h = h.next)) return this;
                return (i = h.next) && delete h.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[d] = i : delete n[d], (h = n[0] || n[1] || n[2] || n[3]) && h === (n[3] || n[2] || n[1] || n[0]) && !h.length && (e ? e[l] = h : this._root = h), this) : (this._root = i, this)
            }, s.removeAll = function(t) {
                for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
                return this
            }, s.root = function() {
                return this._root
            }, s.size = function() {
                var t = 0;
                return this.visit((function(n) {
                    if (!n.length)
                        do {
                            ++t
                        } while (n = n.next)
                })), t
            }, s.visit = function(t) {
                var n, e, r, u, c, f, o = [],
                    a = this._root;
                for (a && o.push(new i(a, this._x0, this._y0, this._x1, this._y1)); n = o.pop();)
                    if (!t(a = n.node, r = n.x0, u = n.y0, c = n.x1, f = n.y1) && a.length) {
                        var s = (r + c) / 2,
                            d = (u + f) / 2;
                        (e = a[3]) && o.push(new i(e, s, d, c, f)), (e = a[2]) && o.push(new i(e, r, d, s, f)), (e = a[1]) && o.push(new i(e, s, u, c, d)), (e = a[0]) && o.push(new i(e, r, u, s, d))
                    } return this
            }, s.visitAfter = function(t) {
                var n, e = [],
                    r = [];
                for (this._root && e.push(new i(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                    var u = n.node;
                    if (u.length) {
                        var c, f = n.x0,
                            o = n.y0,
                            a = n.x1,
                            s = n.y1,
                            d = (f + a) / 2,
                            l = (o + s) / 2;
                        (c = u[0]) && e.push(new i(c, f, o, d, l)), (c = u[1]) && e.push(new i(c, d, o, a, l)), (c = u[2]) && e.push(new i(c, f, l, d, s)), (c = u[3]) && e.push(new i(c, d, l, a, s))
                    }
                    r.push(n)
                }
                for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
                return this
            }, s.x = function(t) {
                return arguments.length ? (this._x = t, this) : this._x
            }, s.y = function(t) {
                return arguments.length ? (this._y = t, this) : this._y
            }
        },
        248: function(t, n, e) {
            "use strict";
            e.d(n, "c", (function() {
                return i
            })), e.d(n, "a", (function() {
                return s
            }));
            var r = {},
                i = null;
            "undefined" != typeof document && ("onmouseenter" in document.documentElement || (r = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }));

            function u(t, n, e) {
                return t = c(t, n, e),
                    function(n) {
                        var e = n.relatedTarget;
                        e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                    }
            }

            function c(t, n, e) {
                return function(r) {
                    var u = i;
                    i = r;
                    try {
                        t.call(this, this.__data__, n, e)
                    } finally {
                        i = u
                    }
                }
            }

            function f(t) {
                return t.trim().split(/^|\s+/).map((function(t) {
                    var n = "",
                        e = t.indexOf(".");
                    return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                        type: t,
                        name: n
                    }
                }))
            }

            function o(t) {
                return function() {
                    var n = this.__on;
                    if (n) {
                        for (var e, r = 0, i = -1, u = n.length; r < u; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                        ++i ? n.length = i : delete this.__on
                    }
                }
            }

            function a(t, n, e) {
                var i = r.hasOwnProperty(t.type) ? u : c;
                return function(r, u, c) {
                    var f, o = this.__on,
                        a = i(n, u, c);
                    if (o)
                        for (var s = 0, d = o.length; s < d; ++s)
                            if ((f = o[s]).type === t.type && f.name === t.name) return this.removeEventListener(f.type, f.listener, f.capture), this.addEventListener(f.type, f.listener = a, f.capture = e), void(f.value = n);
                    this.addEventListener(t.type, a, e), f = {
                        type: t.type,
                        name: t.name,
                        value: n,
                        listener: a,
                        capture: e
                    }, o ? o.push(f) : this.__on = [f]
                }
            }

            function s(t, n, e, r) {
                var u = i;
                t.sourceEvent = i, i = t;
                try {
                    return n.apply(e, r)
                } finally {
                    i = u
                }
            }
            n.b = function(t, n, e) {
                var r, i, u = f(t + ""),
                    c = u.length;
                if (!(arguments.length < 2)) {
                    for (s = n ? a : o, null == e && (e = !1), r = 0; r < c; ++r) this.each(s(u[r], n, e));
                    return this
                }
                var s = this.node().__on;
                if (s)
                    for (var d, l = 0, h = s.length; l < h; ++l)
                        for (r = 0, d = s[l]; r < c; ++r)
                            if ((i = u[r]).type === d.type && i.name === d.name) return d.value
            }
        },
        250: function(t, n, e) {
            "use strict";
            e.d(n, "c", (function() {
                return W
            })), e.d(n, "a", (function() {
                return Z
            }));
            var r = e(446),
                i = e(796),
                u = e(795),
                c = function(t) {
                    return new Array(t.length)
                };

            function f(t, n) {
                this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
            }
            f.prototype = {
                constructor: f,
                appendChild: function(t) {
                    return this._parent.insertBefore(t, this._next)
                },
                insertBefore: function(t, n) {
                    return this._parent.insertBefore(t, n)
                },
                querySelector: function(t) {
                    return this._parent.querySelector(t)
                },
                querySelectorAll: function(t) {
                    return this._parent.querySelectorAll(t)
                }
            };

            function o(t, n, e, r, i, u) {
                for (var c, o = 0, a = n.length, s = u.length; o < s; ++o)(c = n[o]) ? (c.__data__ = u[o], r[o] = c) : e[o] = new f(t, u[o]);
                for (; o < a; ++o)(c = n[o]) && (i[o] = c)
            }

            function a(t, n, e, r, i, u, c) {
                var o, a, s, d = {},
                    l = n.length,
                    h = u.length,
                    b = new Array(l);
                for (o = 0; o < l; ++o)(a = n[o]) && (b[o] = s = "$" + c.call(a, a.__data__, o, n), s in d ? i[o] = a : d[s] = a);
                for (o = 0; o < h; ++o)(a = d[s = "$" + c.call(t, u[o], o, u)]) ? (r[o] = a, a.__data__ = u[o], d[s] = null) : e[o] = new f(t, u[o]);
                for (o = 0; o < l; ++o)(a = n[o]) && d[b[o]] === a && (i[o] = a)
            }

            function s(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            var d = e(445);

            function l(t) {
                return function() {
                    this.removeAttribute(t)
                }
            }

            function h(t) {
                return function() {
                    this.removeAttributeNS(t.space, t.local)
                }
            }

            function b(t, n) {
                return function() {
                    this.setAttribute(t, n)
                }
            }

            function _(t, n) {
                return function() {
                    this.setAttributeNS(t.space, t.local, n)
                }
            }

            function p(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                }
            }

            function y(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                }
            }
            var v = e(797);

            function g(t) {
                return function() {
                    delete this[t]
                }
            }

            function m(t, n) {
                return function() {
                    this[t] = n
                }
            }

            function x(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e
                }
            }

            function w(t) {
                return t.trim().split(/^|\s+/)
            }

            function M(t) {
                return t.classList || new T(t)
            }

            function T(t) {
                this._node = t, this._names = w(t.getAttribute("class") || "")
            }

            function C(t, n) {
                for (var e = M(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
            }

            function A(t, n) {
                for (var e = M(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
            }

            function k(t) {
                return function() {
                    C(this, t)
                }
            }

            function N(t) {
                return function() {
                    A(this, t)
                }
            }

            function O(t, n) {
                return function() {
                    (n.apply(this, arguments) ? C : A)(this, t)
                }
            }
            T.prototype = {
                add: function(t) {
                    this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
                },
                remove: function(t) {
                    var n = this._names.indexOf(t);
                    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
                },
                contains: function(t) {
                    return this._names.indexOf(t) >= 0
                }
            };

            function S() {
                this.textContent = ""
            }

            function j(t) {
                return function() {
                    this.textContent = t
                }
            }

            function E(t) {
                return function() {
                    var n = t.apply(this, arguments);
                    this.textContent = null == n ? "" : n
                }
            }

            function P() {
                this.innerHTML = ""
            }

            function R(t) {
                return function() {
                    this.innerHTML = t
                }
            }

            function D(t) {
                return function() {
                    var n = t.apply(this, arguments);
                    this.innerHTML = null == n ? "" : n
                }
            }

            function U() {
                this.nextSibling && this.parentNode.appendChild(this)
            }

            function L() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }
            var z = e(307);

            function Y() {
                return null
            }

            function q() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function F() {
                var t = this.cloneNode(!1),
                    n = this.parentNode;
                return n ? n.insertBefore(t, this.nextSibling) : t
            }

            function B() {
                var t = this.cloneNode(!0),
                    n = this.parentNode;
                return n ? n.insertBefore(t, this.nextSibling) : t
            }
            var I = e(248),
                H = e(447);

            function G(t, n, e) {
                var r = Object(H.a)(t),
                    i = r.CustomEvent;
                "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
            }

            function V(t, n) {
                return function() {
                    return G(this, t, n)
                }
            }

            function X(t, n) {
                return function() {
                    return G(this, t, n.apply(this, arguments))
                }
            }
            var W = [null];

            function Z(t, n) {
                this._groups = t, this._parents = n
            }

            function Q() {
                return new Z([
                    [document.documentElement]
                ], W)
            }
            Z.prototype = Q.prototype = {
                constructor: Z,
                select: function(t) {
                    "function" != typeof t && (t = Object(r.a)(t));
                    for (var n = this._groups, e = n.length, i = new Array(e), u = 0; u < e; ++u)
                        for (var c, f, o = n[u], a = o.length, s = i[u] = new Array(a), d = 0; d < a; ++d)(c = o[d]) && (f = t.call(c, c.__data__, d, o)) && ("__data__" in c && (f.__data__ = c.__data__), s[d] = f);
                    return new Z(i, this._parents)
                },
                selectAll: function(t) {
                    "function" != typeof t && (t = Object(i.a)(t));
                    for (var n = this._groups, e = n.length, r = [], u = [], c = 0; c < e; ++c)
                        for (var f, o = n[c], a = o.length, s = 0; s < a; ++s)(f = o[s]) && (r.push(t.call(f, f.__data__, s, o)), u.push(f));
                    return new Z(r, u)
                },
                filter: function(t) {
                    "function" != typeof t && (t = Object(u.a)(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var c, f = n[i], o = f.length, a = r[i] = [], s = 0; s < o; ++s)(c = f[s]) && t.call(c, c.__data__, s, f) && a.push(c);
                    return new Z(r, this._parents)
                },
                data: function(t, n) {
                    if (!t) return p = new Array(this.size()), l = -1, this.each((function(t) {
                        p[++l] = t
                    })), p;
                    var e, r = n ? a : o,
                        i = this._parents,
                        u = this._groups;
                    "function" != typeof t && (e = t, t = function() {
                        return e
                    });
                    for (var c = u.length, f = new Array(c), s = new Array(c), d = new Array(c), l = 0; l < c; ++l) {
                        var h = i[l],
                            b = u[l],
                            _ = b.length,
                            p = t.call(h, h && h.__data__, l, i),
                            y = p.length,
                            v = s[l] = new Array(y),
                            g = f[l] = new Array(y);
                        r(h, b, v, g, d[l] = new Array(_), p, n);
                        for (var m, x, w = 0, M = 0; w < y; ++w)
                            if (m = v[w]) {
                                for (w >= M && (M = w + 1); !(x = g[M]) && ++M < y;);
                                m._next = x || null
                            }
                    }
                    return (f = new Z(f, i))._enter = s, f._exit = d, f
                },
                enter: function() {
                    return new Z(this._enter || this._groups.map(c), this._parents)
                },
                exit: function() {
                    return new Z(this._exit || this._groups.map(c), this._parents)
                },
                join: function(t, n, e) {
                    var r = this.enter(),
                        i = this,
                        u = this.exit();
                    return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (i = n(i)), null == e ? u.remove() : e(u), r && i ? r.merge(i).order() : i
                },
                merge: function(t) {
                    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, u = Math.min(r, i), c = new Array(r), f = 0; f < u; ++f)
                        for (var o, a = n[f], s = e[f], d = a.length, l = c[f] = new Array(d), h = 0; h < d; ++h)(o = a[h] || s[h]) && (l[h] = o);
                    for (; f < r; ++f) c[f] = n[f];
                    return new Z(c, this._parents)
                },
                order: function() {
                    for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                        for (var r, i = t[n], u = i.length - 1, c = i[u]; --u >= 0;)(r = i[u]) && (c && 4 ^ r.compareDocumentPosition(c) && c.parentNode.insertBefore(r, c), c = r);
                    return this
                },
                sort: function(t) {
                    function n(n, e) {
                        return n && e ? t(n.__data__, e.__data__) : !n - !e
                    }
                    t || (t = s);
                    for (var e = this._groups, r = e.length, i = new Array(r), u = 0; u < r; ++u) {
                        for (var c, f = e[u], o = f.length, a = i[u] = new Array(o), d = 0; d < o; ++d)(c = f[d]) && (a[d] = c);
                        a.sort(n)
                    }
                    return new Z(i, this._parents).order()
                },
                call: function() {
                    var t = arguments[0];
                    return arguments[0] = this, t.apply(null, arguments), this
                },
                nodes: function() {
                    var t = new Array(this.size()),
                        n = -1;
                    return this.each((function() {
                        t[++n] = this
                    })), t
                },
                node: function() {
                    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                        for (var r = t[n], i = 0, u = r.length; i < u; ++i) {
                            var c = r[i];
                            if (c) return c
                        }
                    return null
                },
                size: function() {
                    var t = 0;
                    return this.each((function() {
                        ++t
                    })), t
                },
                empty: function() {
                    return !this.node()
                },
                each: function(t) {
                    for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                        for (var i, u = n[e], c = 0, f = u.length; c < f; ++c)(i = u[c]) && t.call(i, i.__data__, c, u);
                    return this
                },
                attr: function(t, n) {
                    var e = Object(d.a)(t);
                    if (arguments.length < 2) {
                        var r = this.node();
                        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                    }
                    return this.each((null == n ? e.local ? h : l : "function" == typeof n ? e.local ? y : p : e.local ? _ : b)(e, n))
                },
                style: v.a,
                property: function(t, n) {
                    return arguments.length > 1 ? this.each((null == n ? g : "function" == typeof n ? x : m)(t, n)) : this.node()[t]
                },
                classed: function(t, n) {
                    var e = w(t + "");
                    if (arguments.length < 2) {
                        for (var r = M(this.node()), i = -1, u = e.length; ++i < u;)
                            if (!r.contains(e[i])) return !1;
                        return !0
                    }
                    return this.each(("function" == typeof n ? O : n ? k : N)(e, n))
                },
                text: function(t) {
                    return arguments.length ? this.each(null == t ? S : ("function" == typeof t ? E : j)(t)) : this.node().textContent
                },
                html: function(t) {
                    return arguments.length ? this.each(null == t ? P : ("function" == typeof t ? D : R)(t)) : this.node().innerHTML
                },
                raise: function() {
                    return this.each(U)
                },
                lower: function() {
                    return this.each(L)
                },
                append: function(t) {
                    var n = "function" == typeof t ? t : Object(z.a)(t);
                    return this.select((function() {
                        return this.appendChild(n.apply(this, arguments))
                    }))
                },
                insert: function(t, n) {
                    var e = "function" == typeof t ? t : Object(z.a)(t),
                        i = null == n ? Y : "function" == typeof n ? n : Object(r.a)(n);
                    return this.select((function() {
                        return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null)
                    }))
                },
                remove: function() {
                    return this.each(q)
                },
                clone: function(t) {
                    return this.select(t ? B : F)
                },
                datum: function(t) {
                    return arguments.length ? this.property("__data__", t) : this.node().__data__
                },
                on: I.b,
                dispatch: function(t, n) {
                    return this.each(("function" == typeof n ? X : V)(t, n))
                }
            };
            n.b = Q
        },
        272: function(t, n, e) {
            "use strict";
            e.d(n, "b", (function() {
                return h
            })), e.d(n, "a", (function() {
                return _
            })), e.d(n, "c", (function() {
                return p
            })), e.d(n, "d", (function() {
                return y
            }));
            var r, i, u = 0,
                c = 0,
                f = 0,
                o = 0,
                a = 0,
                s = 0,
                d = "object" == typeof performance && performance.now ? performance : Date,
                l = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                    setTimeout(t, 17)
                };

            function h() {
                return a || (l(b), a = d.now() + s)
            }

            function b() {
                a = 0
            }

            function _() {
                this._call = this._time = this._next = null
            }

            function p(t, n, e) {
                var r = new _;
                return r.restart(t, n, e), r
            }

            function y() {
                h(), ++u;
                for (var t, n = r; n;)(t = a - n._time) >= 0 && n._call.call(null, t), n = n._next;
                --u
            }

            function v() {
                a = (o = d.now()) + s, u = c = 0;
                try {
                    y()
                } finally {
                    u = 0,
                        function() {
                            var t, n, e = r,
                                u = 1 / 0;
                            for (; e;) e._call ? (u > e._time && (u = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : r = n);
                            i = t, m(u)
                        }(), a = 0
                }
            }

            function g() {
                var t = d.now(),
                    n = t - o;
                n > 1e3 && (s -= n, o = t)
            }

            function m(t) {
                u || (c && (c = clearTimeout(c)), t - a > 24 ? (t < 1 / 0 && (c = setTimeout(v, t - d.now() - s)), f && (f = clearInterval(f))) : (f || (o = d.now(), f = setInterval(g, 1e3)), u = 1, l(v)))
            }
            _.prototype = p.prototype = {
                constructor: _,
                restart: function(t, n, e) {
                    if ("function" != typeof t) throw new TypeError("callback is not a function");
                    e = (null == e ? h() : +e) + (null == n ? 0 : +n), this._next || i === this || (i ? i._next = this : r = this, i = this), this._call = t, this._time = e, m()
                },
                stop: function() {
                    this._call && (this._call = null, this._time = 1 / 0, m())
                }
            }
        },
        279: function(t, n, e) {
            "use strict";
            e.d(n, "c", (function() {
                return K
            })), e.d(n, "a", (function() {
                return it
            })), e.d(n, "b", (function() {
                return h
            }));
            var r = e(250),
                i = e(2264),
                u = e(272),
                c = e(2265),
                f = Object(i.a)("start", "end", "cancel", "interrupt"),
                o = [],
                a = function(t, n, e, r, i, a) {
                    var s = t.__transition;
                    if (s) {
                        if (e in s) return
                    } else t.__transition = {};
                    ! function(t, n, e) {
                        var r, i = t.__transition;

                        function f(u) {
                            var s, d, l, h;
                            if (1 !== e.state) return a();
                            for (s in i)
                                if ((h = i[s]).name === e.name) {
                                    if (3 === h.state) return Object(c.a)(f);
                                    4 === h.state ? (h.state = 6, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[s]) : +s < n && (h.state = 6, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[s])
                                } if (Object(c.a)((function() {
                                    3 === e.state && (e.state = 4, e.timer.restart(o, e.delay, e.time), o(u))
                                })), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
                                for (e.state = 3, r = new Array(l = e.tween.length), s = 0, d = -1; s < l; ++s)(h = e.tween[s].value.call(t, t.__data__, e.index, e.group)) && (r[++d] = h);
                                r.length = d + 1
                            }
                        }

                        function o(n) {
                            for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = 5, 1), u = -1, c = r.length; ++u < c;) r[u].call(t, i);
                            5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), a())
                        }

                        function a() {
                            for (var r in e.state = 6, e.timer.stop(), delete i[n], i) return;
                            delete t.__transition
                        }
                        i[n] = e, e.timer = Object(u.c)((function(t) {
                            e.state = 1, e.timer.restart(f, e.delay, e.time), e.delay <= t && f(t - e.delay)
                        }), 0, e.time)
                    }(t, e, {
                        name: n,
                        index: r,
                        group: i,
                        on: f,
                        tween: o,
                        time: a.time,
                        delay: a.delay,
                        duration: a.duration,
                        ease: a.ease,
                        timer: null,
                        state: 0
                    })
                };

            function s(t, n) {
                var e = l(t, n);
                if (e.state > 0) throw new Error("too late; already scheduled");
                return e
            }

            function d(t, n) {
                var e = l(t, n);
                if (e.state > 3) throw new Error("too late; already running");
                return e
            }

            function l(t, n) {
                var e = t.__transition;
                if (!e || !(e = e[n])) throw new Error("transition not found");
                return e
            }
            var h = function(t, n) {
                    var e, r, i, u = t.__transition,
                        c = !0;
                    if (u) {
                        for (i in n = null == n ? null : n + "", u)(e = u[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete u[i]) : c = !1;
                        c && delete t.__transition
                    }
                },
                b = e(1184),
                _ = e(445);

            function p(t, n) {
                var e, r;
                return function() {
                    var i = d(this, t),
                        u = i.tween;
                    if (u !== e)
                        for (var c = 0, f = (r = e = u).length; c < f; ++c)
                            if (r[c].name === n) {
                                (r = r.slice()).splice(c, 1);
                                break
                            } i.tween = r
                }
            }

            function y(t, n, e) {
                var r, i;
                if ("function" != typeof e) throw new Error;
                return function() {
                    var u = d(this, t),
                        c = u.tween;
                    if (c !== r) {
                        i = (r = c).slice();
                        for (var f = {
                                name: n,
                                value: e
                            }, o = 0, a = i.length; o < a; ++o)
                            if (i[o].name === n) {
                                i[o] = f;
                                break
                            } o === a && i.push(f)
                    }
                    u.tween = i
                }
            }

            function v(t, n, e) {
                var r = t._id;
                return t.each((function() {
                        var t = d(this, r);
                        (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                    })),
                    function(t) {
                        return l(t, r).value[n]
                    }
            }
            var g = e(89),
                m = e(170),
                x = e(363),
                w = e(794),
                M = function(t, n) {
                    var e;
                    return ("number" == typeof n ? m.a : n instanceof g.e ? x.a : (e = Object(g.e)(n)) ? (n = e, x.a) : w.a)(t, n)
                };

            function T(t) {
                return function() {
                    this.removeAttribute(t)
                }
            }

            function C(t) {
                return function() {
                    this.removeAttributeNS(t.space, t.local)
                }
            }

            function A(t, n, e) {
                var r, i, u = e + "";
                return function() {
                    var c = this.getAttribute(t);
                    return c === u ? null : c === r ? i : i = n(r = c, e)
                }
            }

            function k(t, n, e) {
                var r, i, u = e + "";
                return function() {
                    var c = this.getAttributeNS(t.space, t.local);
                    return c === u ? null : c === r ? i : i = n(r = c, e)
                }
            }

            function N(t, n, e) {
                var r, i, u;
                return function() {
                    var c, f, o = e(this);
                    if (null != o) return (c = this.getAttribute(t)) === (f = o + "") ? null : c === r && f === i ? u : (i = f, u = n(r = c, o));
                    this.removeAttribute(t)
                }
            }

            function O(t, n, e) {
                var r, i, u;
                return function() {
                    var c, f, o = e(this);
                    if (null != o) return (c = this.getAttributeNS(t.space, t.local)) === (f = o + "") ? null : c === r && f === i ? u : (i = f, u = n(r = c, o));
                    this.removeAttributeNS(t.space, t.local)
                }
            }

            function S(t, n) {
                return function(e) {
                    this.setAttribute(t, n.call(this, e))
                }
            }

            function j(t, n) {
                return function(e) {
                    this.setAttributeNS(t.space, t.local, n.call(this, e))
                }
            }

            function E(t, n) {
                var e, r;

                function i() {
                    var i = n.apply(this, arguments);
                    return i !== r && (e = (r = i) && j(t, i)), e
                }
                return i._value = n, i
            }

            function P(t, n) {
                var e, r;

                function i() {
                    var i = n.apply(this, arguments);
                    return i !== r && (e = (r = i) && S(t, i)), e
                }
                return i._value = n, i
            }

            function R(t, n) {
                return function() {
                    s(this, t).delay = +n.apply(this, arguments)
                }
            }

            function D(t, n) {
                return n = +n,
                    function() {
                        s(this, t).delay = n
                    }
            }

            function U(t, n) {
                return function() {
                    d(this, t).duration = +n.apply(this, arguments)
                }
            }

            function L(t, n) {
                return n = +n,
                    function() {
                        d(this, t).duration = n
                    }
            }

            function z(t, n) {
                if ("function" != typeof n) throw new Error;
                return function() {
                    d(this, t).ease = n
                }
            }
            var Y = e(795);

            function q(t, n, e) {
                var r, i, u = function(t) {
                    return (t + "").trim().split(/^|\s+/).every((function(t) {
                        var n = t.indexOf(".");
                        return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                    }))
                }(n) ? s : d;
                return function() {
                    var c = u(this, t),
                        f = c.on;
                    f !== r && (i = (r = f).copy()).on(n, e), c.on = i
                }
            }
            var F = e(446),
                B = e(796),
                I = r.b.prototype.constructor,
                H = e(797);

            function G(t) {
                return function() {
                    this.style.removeProperty(t)
                }
            }

            function V(t, n, e) {
                return function(r) {
                    this.style.setProperty(t, n.call(this, r), e)
                }
            }

            function X(t, n, e) {
                var r, i;

                function u() {
                    var u = n.apply(this, arguments);
                    return u !== i && (r = (i = u) && V(t, u, e)), r
                }
                return u._value = n, u
            }

            function W(t) {
                return function(n) {
                    this.textContent = t.call(this, n)
                }
            }

            function Z(t) {
                var n, e;

                function r() {
                    var r = t.apply(this, arguments);
                    return r !== e && (n = (e = r) && W(r)), n
                }
                return r._value = t, r
            }
            var Q = 0;

            function J(t, n, e, r) {
                this._groups = t, this._parents = n, this._name = e, this._id = r
            }

            function K(t) {
                return Object(r.b)().transition(t)
            }

            function $() {
                return ++Q
            }
            var tt = r.b.prototype;
            J.prototype = K.prototype = {
                constructor: J,
                select: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = Object(F.a)(t));
                    for (var r = this._groups, i = r.length, u = new Array(i), c = 0; c < i; ++c)
                        for (var f, o, s = r[c], d = s.length, h = u[c] = new Array(d), b = 0; b < d; ++b)(f = s[b]) && (o = t.call(f, f.__data__, b, s)) && ("__data__" in f && (o.__data__ = f.__data__), h[b] = o, a(h[b], n, e, b, h, l(f, e)));
                    return new J(u, this._parents, n, e)
                },
                selectAll: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = Object(B.a)(t));
                    for (var r = this._groups, i = r.length, u = [], c = [], f = 0; f < i; ++f)
                        for (var o, s = r[f], d = s.length, h = 0; h < d; ++h)
                            if (o = s[h]) {
                                for (var b, _ = t.call(o, o.__data__, h, s), p = l(o, e), y = 0, v = _.length; y < v; ++y)(b = _[y]) && a(b, n, e, y, _, p);
                                u.push(_), c.push(o)
                            } return new J(u, c, n, e)
                },
                filter: function(t) {
                    "function" != typeof t && (t = Object(Y.a)(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var u, c = n[i], f = c.length, o = r[i] = [], a = 0; a < f; ++a)(u = c[a]) && t.call(u, u.__data__, a, c) && o.push(u);
                    return new J(r, this._parents, this._name, this._id)
                },
                merge: function(t) {
                    if (t._id !== this._id) throw new Error;
                    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, u = Math.min(r, i), c = new Array(r), f = 0; f < u; ++f)
                        for (var o, a = n[f], s = e[f], d = a.length, l = c[f] = new Array(d), h = 0; h < d; ++h)(o = a[h] || s[h]) && (l[h] = o);
                    for (; f < r; ++f) c[f] = n[f];
                    return new J(c, this._parents, this._name, this._id)
                },
                selection: function() {
                    return new I(this._groups, this._parents)
                },
                transition: function() {
                    for (var t = this._name, n = this._id, e = $(), r = this._groups, i = r.length, u = 0; u < i; ++u)
                        for (var c, f = r[u], o = f.length, s = 0; s < o; ++s)
                            if (c = f[s]) {
                                var d = l(c, n);
                                a(c, t, e, s, f, {
                                    time: d.time + d.delay + d.duration,
                                    delay: 0,
                                    duration: d.duration,
                                    ease: d.ease
                                })
                            } return new J(r, this._parents, t, e)
                },
                call: tt.call,
                nodes: tt.nodes,
                node: tt.node,
                size: tt.size,
                empty: tt.empty,
                each: tt.each,
                on: function(t, n) {
                    var e = this._id;
                    return arguments.length < 2 ? l(this.node(), e).on.on(t) : this.each(q(e, t, n))
                },
                attr: function(t, n) {
                    var e = Object(_.a)(t),
                        r = "transform" === e ? b.b : M;
                    return this.attrTween(t, "function" == typeof n ? (e.local ? O : N)(e, r, v(this, "attr." + t, n)) : null == n ? (e.local ? C : T)(e) : (e.local ? k : A)(e, r, n))
                },
                attrTween: function(t, n) {
                    var e = "attr." + t;
                    if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                    if (null == n) return this.tween(e, null);
                    if ("function" != typeof n) throw new Error;
                    var r = Object(_.a)(t);
                    return this.tween(e, (r.local ? E : P)(r, n))
                },
                style: function(t, n, e) {
                    var r = "transform" == (t += "") ? b.a : M;
                    return null == n ? this.styleTween(t, function(t, n) {
                        var e, r, i;
                        return function() {
                            var u = Object(H.b)(this, t),
                                c = (this.style.removeProperty(t), Object(H.b)(this, t));
                            return u === c ? null : u === e && c === r ? i : i = n(e = u, r = c)
                        }
                    }(t, r)).on("end.style." + t, G(t)) : "function" == typeof n ? this.styleTween(t, function(t, n, e) {
                        var r, i, u;
                        return function() {
                            var c = Object(H.b)(this, t),
                                f = e(this),
                                o = f + "";
                            return null == f && (this.style.removeProperty(t), o = f = Object(H.b)(this, t)), c === o ? null : c === r && o === i ? u : (i = o, u = n(r = c, f))
                        }
                    }(t, r, v(this, "style." + t, n))).each(function(t, n) {
                        var e, r, i, u, c = "style." + n,
                            f = "end." + c;
                        return function() {
                            var o = d(this, t),
                                a = o.on,
                                s = null == o.value[c] ? u || (u = G(n)) : void 0;
                            a === e && i === s || (r = (e = a).copy()).on(f, i = s), o.on = r
                        }
                    }(this._id, t)) : this.styleTween(t, function(t, n, e) {
                        var r, i, u = e + "";
                        return function() {
                            var c = Object(H.b)(this, t);
                            return c === u ? null : c === r ? i : i = n(r = c, e)
                        }
                    }(t, r, n), e).on("end.style." + t, null)
                },
                styleTween: function(t, n, e) {
                    var r = "style." + (t += "");
                    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                    if (null == n) return this.tween(r, null);
                    if ("function" != typeof n) throw new Error;
                    return this.tween(r, X(t, n, null == e ? "" : e))
                },
                text: function(t) {
                    return this.tween("text", "function" == typeof t ? function(t) {
                        return function() {
                            var n = t(this);
                            this.textContent = null == n ? "" : n
                        }
                    }(v(this, "text", t)) : function(t) {
                        return function() {
                            this.textContent = t
                        }
                    }(null == t ? "" : t + ""))
                },
                textTween: function(t) {
                    var n = "text";
                    if (arguments.length < 1) return (n = this.tween(n)) && n._value;
                    if (null == t) return this.tween(n, null);
                    if ("function" != typeof t) throw new Error;
                    return this.tween(n, Z(t))
                },
                remove: function() {
                    return this.on("end.remove", (t = this._id, function() {
                        var n = this.parentNode;
                        for (var e in this.__transition)
                            if (+e !== t) return;
                        n && n.removeChild(this)
                    }));
                    var t
                },
                tween: function(t, n) {
                    var e = this._id;
                    if (t += "", arguments.length < 2) {
                        for (var r, i = l(this.node(), e).tween, u = 0, c = i.length; u < c; ++u)
                            if ((r = i[u]).name === t) return r.value;
                        return null
                    }
                    return this.each((null == n ? p : y)(e, t, n))
                },
                delay: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? R : D)(n, t)) : l(this.node(), n).delay
                },
                duration: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? U : L)(n, t)) : l(this.node(), n).duration
                },
                ease: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(z(n, t)) : l(this.node(), n).ease
                },
                end: function() {
                    var t, n, e = this,
                        r = e._id,
                        i = e.size();
                    return new Promise((function(u, c) {
                        var f = {
                                value: c
                            },
                            o = {
                                value: function() {
                                    0 == --i && u()
                                }
                            };
                        e.each((function() {
                            var e = d(this, r),
                                i = e.on;
                            i !== t && ((n = (t = i).copy())._.cancel.push(f), n._.interrupt.push(f), n._.end.push(o)), e.on = n
                        }))
                    }))
                }
            };
            var nt = {
                time: null,
                delay: 0,
                duration: 250,
                ease: e(530).b
            };

            function et(t, n) {
                for (var e; !(e = t.__transition) || !(e = e[n]);)
                    if (!(t = t.parentNode)) return nt.time = Object(u.b)(), nt;
                return e
            }
            r.b.prototype.interrupt = function(t) {
                return this.each((function() {
                    h(this, t)
                }))
            }, r.b.prototype.transition = function(t) {
                var n, e;
                t instanceof J ? (n = t._id, t = t._name) : (n = $(), (e = nt).time = Object(u.b)(), t = null == t ? null : t + "");
                for (var r = this._groups, i = r.length, c = 0; c < i; ++c)
                    for (var f, o = r[c], s = o.length, d = 0; d < s; ++d)(f = o[d]) && a(f, t, n, d, o, e || et(f, n));
                return new J(r, this._parents, t, n)
            };
            var rt = [null],
                it = function(t, n) {
                    var e, r, i = t.__transition;
                    if (i)
                        for (r in n = null == n ? null : n + "", i)
                            if ((e = i[r]).state > 1 && e.name === n) return new J([
                                [t]
                            ], rt, n, +r);
                    return null
                }
        },
        301: function(t, n, e) {
            "use strict";
            var r = e(2268);
            e.d(n, "a", (function() {
                return r.a
            }))
        },
        307: function(t, n, e) {
            "use strict";
            var r = e(445),
                i = e(314);

            function u(t) {
                return function() {
                    var n = this.ownerDocument,
                        e = this.namespaceURI;
                    return e === i.b && n.documentElement.namespaceURI === i.b ? n.createElement(t) : n.createElementNS(e, t)
                }
            }

            function c(t) {
                return function() {
                    return this.ownerDocument.createElementNS(t.space, t.local)
                }
            }
            n.a = function(t) {
                var n = Object(r.a)(t);
                return (n.local ? c : u)(n)
            }
        },
        308: function(t, n, e) {
            "use strict";
            n.a = function(t, n) {
                var e = t.ownerSVGElement || t;
                if (e.createSVGPoint) {
                    var r = e.createSVGPoint();
                    return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                }
                var i = t.getBoundingClientRect();
                return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
            }
        },
        314: function(t, n, e) {
            "use strict";
            e.d(n, "b", (function() {
                return r
            }));
            var r = "http://www.w3.org/1999/xhtml";
            n.a = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: r,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            }
        },
        445: function(t, n, e) {
            "use strict";
            var r = e(314);
            n.a = function(t) {
                var n = t += "",
                    e = n.indexOf(":");
                return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), r.a.hasOwnProperty(n) ? {
                    space: r.a[n],
                    local: t
                } : t
            }
        },
        446: function(t, n, e) {
            "use strict";

            function r() {}
            n.a = function(t) {
                return null == t ? r : function() {
                    return this.querySelector(t)
                }
            }
        },
        447: function(t, n, e) {
            "use strict";
            n.a = function(t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            }
        },
        454: function(t, n, e) {
            "use strict";
            var r = e(248);
            n.a = function() {
                for (var t, n = r.c; t = n.sourceEvent;) n = t;
                return n
            }
        },
        455: function(t, n, e) {
            "use strict";
            var r = e(250);
            n.a = function(t) {
                return "string" == typeof t ? new r.a([
                    [document.querySelector(t)]
                ], [document.documentElement]) : new r.a([
                    [t]
                ], r.c)
            }
        },
        532: function(t, n, e) {
            "use strict";
            e.d(n, "b", (function() {
                return r.b
            })), e.d(n, "d", (function() {
                return r.c
            })), e.d(n, "e", (function() {
                return r.d
            })), e.d(n, "c", (function() {
                return i.a
            })), e.d(n, "a", (function() {
                return u
            }));
            var r = e(272),
                i = e(2265),
                u = function(t, n, e) {
                    var i = new r.a,
                        u = n;
                    return null == n ? (i.restart(t, n, e), i) : (n = +n, e = null == e ? Object(r.b)() : +e, i.restart((function r(c) {
                        c += u, i.restart(r, u += n, e), t(c)
                    }), n, e), i)
                }
        },
        690: function(t, n, e) {
            "use strict";
            var r = e(2315);
            e.d(n, "a", (function() {
                return r.a
            }))
        },
        795: function(t, n, e) {
            "use strict";
            n.a = function(t) {
                return function() {
                    return this.matches(t)
                }
            }
        },
        796: function(t, n, e) {
            "use strict";

            function r() {
                return []
            }
            n.a = function(t) {
                return null == t ? r : function() {
                    return this.querySelectorAll(t)
                }
            }
        },
        797: function(t, n, e) {
            "use strict";
            e.d(n, "b", (function() {
                return f
            }));
            var r = e(447);

            function i(t) {
                return function() {
                    this.style.removeProperty(t)
                }
            }

            function u(t, n, e) {
                return function() {
                    this.style.setProperty(t, n, e)
                }
            }

            function c(t, n, e) {
                return function() {
                    var r = n.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                }
            }

            function f(t, n) {
                return t.style.getPropertyValue(n) || Object(r.a)(t).getComputedStyle(t, null).getPropertyValue(n)
            }
            n.a = function(t, n, e) {
                return arguments.length > 1 ? this.each((null == n ? i : "function" == typeof n ? c : u)(t, n, null == e ? "" : e)) : f(this.node(), t)
            }
        }
    }
]);