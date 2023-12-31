/*! For license information please see vendors.377360fcbb773d29a586.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [91], {
        1733: function(t, r, i) {
            var e = i(403),
                n = i(610),
                o = i(1029),
                s = i(3155);
            const u = i(554);
            var h = function(t) {
                    return t instanceof n || t && t.constructor && "BN" === t.constructor.name
                },
                a = function(t) {
                    return t && t.constructor && "BigNumber" === t.constructor.name
                },
                l = function(t) {
                    try {
                        return o.apply(null, arguments)
                    } catch (r) {
                        throw new Error(r + ' Given value: "' + t + '"')
                    }
                },
                f = function(t) {
                    return !!/^(0x)?[0-9a-f]{40}$/i.test(t) && (!(!/^(0x|0X)?[0-9a-f]{40}$/.test(t) && !/^(0x|0X)?[0-9A-F]{40}$/.test(t)) || m(t))
                },
                m = function(t) {
                    t = t.replace(/^0x/i, "");
                    for (var r = v(t.toLowerCase()).replace(/^0x/i, ""), i = 0; i < 40; i++)
                        if (parseInt(r[i], 16) > 7 && t[i].toUpperCase() !== t[i] || parseInt(r[i], 16) <= 7 && t[i].toLowerCase() !== t[i]) return !1;
                    return !0
                },
                c = function(t) {
                    var r = "";
                    t = (t = (t = (t = (t = s.encode(t)).replace(/^(?:\u0000)*/, "")).split("").reverse().join("")).replace(/^(?:\u0000)*/, "")).split("").reverse().join("");
                    for (var i = 0; i < t.length; i++) {
                        var e = t.charCodeAt(i).toString(16);
                        r += e.length < 2 ? "0" + e : e
                    }
                    return "0x" + r
                },
                d = function(t) {
                    if (e.isNull(t) || e.isUndefined(t)) return t;
                    if (!isFinite(t) && !g(t)) throw new Error('Given input "' + t + '" is not a number.');
                    var r = l(t),
                        i = r.toString(16);
                    return r.lt(new n(0)) ? "-0x" + i.substr(1) : "0x" + i
                },
                p = function(t) {
                    if (t = t.toString(16), !g(t)) throw new Error('Given value "' + t + '" is not a valid hex string.');
                    t = t.replace(/^0x/i, "");
                    for (var r = [], i = 0; i < t.length; i += 2) r.push(parseInt(t.substr(i, 2), 16));
                    return r
                },
                g = function(t) {
                    return (e.isString(t) || e.isNumber(t)) && /^(-)?0x[0-9a-f]*$/i.test(t)
                },
                v = function(t) {
                    g(t) && /^0x/i.test(t.toString()) && (t = p(t));
                    var r = "0x" + u("keccak256").update(t).digest("hex");
                    return "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470" === r ? null : r
                };
            t.exports = {
                BN: n,
                isBN: h,
                isBigNumber: a,
                toBN: l,
                isAddress: f,
                isBloom: function(t) {
                    return !!/^(0x)?[0-9a-f]{512}$/i.test(t) && !(!/^(0x)?[0-9a-f]{512}$/.test(t) && !/^(0x)?[0-9A-F]{512}$/.test(t))
                },
                isTopic: function(t) {
                    return !!/^(0x)?[0-9a-f]{64}$/i.test(t) && !(!/^(0x)?[0-9a-f]{64}$/.test(t) && !/^(0x)?[0-9A-F]{64}$/.test(t))
                },
                checkAddressChecksum: m,
                utf8ToHex: c,
                hexToUtf8: function(t) {
                    if (!g(t)) throw new Error('The parameter "' + t + '" must be a valid HEX string.');
                    for (var r = "", i = 0, e = (t = (t = (t = (t = (t = t.replace(/^0x/i, "")).replace(/^(?:00)*/, "")).split("").reverse().join("")).replace(/^(?:00)*/, "")).split("").reverse().join("")).length, n = 0; n < e; n += 2) i = parseInt(t.substr(n, 2), 16), r += String.fromCharCode(i);
                    return s.decode(r)
                },
                hexToNumber: function(t) {
                    return t ? l(t).toNumber() : t
                },
                hexToNumberString: function(t) {
                    return t ? l(t).toString(10) : t
                },
                numberToHex: d,
                toHex: function(t, r) {
                    if (f(t)) return r ? "address" : "0x" + t.toLowerCase().replace(/^0x/i, "");
                    if (e.isBoolean(t)) return r ? "bool" : t ? "0x01" : "0x00";
                    if (e.isObject(t) && !a(t) && !h(t)) return r ? "string" : c(JSON.stringify(t));
                    if (e.isString(t)) {
                        if (0 === t.indexOf("-0x") || 0 === t.indexOf("-0X")) return r ? "int256" : d(t);
                        if (0 === t.indexOf("0x") || 0 === t.indexOf("0X")) return r ? "bytes" : t;
                        if (!isFinite(t)) return r ? "string" : c(t)
                    }
                    return r ? t < 0 ? "int256" : "uint256" : d(t)
                },
                hexToBytes: p,
                bytesToHex: function(t) {
                    for (var r = [], i = 0; i < t.length; i++) r.push((t[i] >>> 4).toString(16)), r.push((15 & t[i]).toString(16));
                    return "0x" + r.join("")
                },
                isHex: function(t) {
                    return (e.isString(t) || e.isNumber(t)) && /^(-0x|0x)?[0-9a-f]*$/i.test(t)
                },
                isHexStrict: g,
                leftPad: function(t, r, i) {
                    var e = /^0x/i.test(t) || "number" == typeof t,
                        n = r - (t = t.toString(16).replace(/^0x/i, "")).length + 1 >= 0 ? r - t.length + 1 : 0;
                    return (e ? "0x" : "") + new Array(n).join(i || "0") + t
                },
                rightPad: function(t, r, i) {
                    var e = /^0x/i.test(t) || "number" == typeof t,
                        n = r - (t = t.toString(16).replace(/^0x/i, "")).length + 1 >= 0 ? r - t.length + 1 : 0;
                    return (e ? "0x" : "") + t + new Array(n).join(i || "0")
                },
                toTwosComplement: function(t) {
                    return "0x" + l(t).toTwos(256).toString(16, 64)
                },
                sha3: v
            }
        },
        1741: function(t, r, i) {
            var e = i(238),
                n = function(t, r, i) {
                    this.value = t || "", this.offset = r, this.rawValue = i
                };
            n.prototype.dynamicPartLength = function() {
                return this.dynamicPart().length / 2
            }, n.prototype.withOffset = function(t) {
                return new n(this.value, t)
            }, n.prototype.combine = function(t) {
                return new n(this.value + t.value)
            }, n.prototype.isDynamic = function() {
                return void 0 !== this.offset
            }, n.prototype.offsetAsBytes = function() {
                return this.isDynamic() ? e.toTwosComplement(this.offset).replace("0x", "") : ""
            }, n.prototype.staticPart = function() {
                return this.isDynamic() ? this.offsetAsBytes() : this.value
            }, n.prototype.dynamicPart = function() {
                return this.isDynamic() ? this.value : ""
            }, n.prototype.encode = function() {
                return this.staticPart() + this.dynamicPart()
            }, n.encodeList = function(t) {
                var r = 32 * t.length,
                    i = t.map((function(t) {
                        if (!t.isDynamic()) return t;
                        var i = r;
                        return r += t.dynamicPartLength(), t.withOffset(i)
                    }));
                return i.reduce((function(t, r) {
                    return t + r.dynamicPart()
                }), i.reduce((function(t, r) {
                    return t + r.staticPart()
                }), ""))
            }, t.exports = n
        },
        238: function(t, r, i) {
            var e = i(403),
                n = i(609),
                o = i(610),
                s = i(1741),
                u = function(t) {
                    return e.isNumber(t) && (t = Math.trunc(t)), new s(n.toTwosComplement(t).replace("0x", ""))
                };
            t.exports = {
                formatInputInt: u,
                formatInputBytes: function(t) {
                    if (!n.isHexStrict(t)) throw new Error('Given parameter is not bytes: "' + t + '"');
                    var r = t.replace(/^0x/i, "");
                    if (r.length % 2 != 0) throw new Error('Given parameter bytes has an invalid length: "' + t + '"');
                    if (r.length > 64) throw new Error('Given parameter bytes is too long: "' + t + '"');
                    var i = Math.floor((r.length + 63) / 64);
                    return r = n.padRight(r, 64 * i), new s(r)
                },
                formatInputDynamicBytes: function(t) {
                    if (!n.isHexStrict(t)) throw new Error('Given parameter is not bytes: "' + t + '"');
                    var r = t.replace(/^0x/i, "");
                    if (r.length % 2 != 0) throw new Error('Given parameter bytes has an invalid length: "' + t + '"');
                    var i = r.length / 2,
                        e = Math.floor((r.length + 63) / 64);
                    return r = n.padRight(r, 64 * e), new s(u(i).value + r)
                },
                formatInputString: function(t) {
                    if (!e.isString(t)) throw new Error("Given parameter is not a valid string: " + t);
                    var r = n.utf8ToHex(t).replace(/^0x/i, ""),
                        i = r.length / 2,
                        o = Math.floor((r.length + 63) / 64);
                    return r = n.padRight(r, 64 * o), new s(u(i).value + r)
                },
                formatInputBool: function(t) {
                    return new s("000000000000000000000000000000000000000000000000000000000000000" + (t ? "1" : "0"))
                },
                formatOutputInt: function(t) {
                    var r = t.staticPart();
                    if (!r && !t.rawValue) throw new Error("Couldn't decode " + name + " from ABI: 0x" + t.rawValue);
                    return function(t) {
                        return "1" === new o(t.substr(0, 1), 16).toString(2).substr(0, 1)
                    }(r) ? new o(r, 16).fromTwos(256).toString(10) : new o(r, 16).toString(10)
                },
                formatOutputUInt: function(t, r) {
                    var i = t.staticPart();
                    if (!i && !t.rawValue) throw new Error("Couldn't decode " + r + " from ABI: 0x" + t.rawValue);
                    return new o(i, 16).toString(10)
                },
                formatOutputBool: function(t, r) {
                    var i = t.staticPart();
                    if (!i && !t.rawValue) throw new Error("Couldn't decode " + r + " from ABI: 0x" + t.rawValue);
                    return "0000000000000000000000000000000000000000000000000000000000000001" === i
                },
                formatOutputBytes: function(t, r) {
                    var i = r.match(/^bytes([0-9]*)/),
                        e = parseInt(i[1]);
                    if (t.staticPart().slice(0, 2 * e).length !== 2 * e) throw new Error("Couldn't decode " + r + " from ABI: 0x" + t.rawValue + " The size doesn't match.");
                    return "0x" + t.staticPart().slice(0, 2 * e)
                },
                formatOutputDynamicBytes: function(t, r) {
                    var i = t.dynamicPart().slice(0, 64);
                    if (!i) throw new Error("Couldn't decode " + r + " from ABI: 0x" + t.rawValue);
                    var e = 2 * new o(i, 16).toNumber();
                    return "0x" + t.dynamicPart().substr(64, e)
                },
                formatOutputString: function(t) {
                    var r = t.dynamicPart().slice(0, 64);
                    if (!r) throw new Error("ERROR: The returned value is not a convertible string:" + r);
                    var i = 2 * new o(r, 16).toNumber();
                    return i ? n.hexToUtf8("0x" + t.dynamicPart().substr(64, i).replace(/^0x/i, "")) : ""
                },
                formatOutputAddress: function(t, r) {
                    var i = t.staticPart();
                    if (!i) throw new Error("Couldn't decode " + r + " from ABI: 0x" + t.rawValue);
                    return n.toChecksumAddress("0x" + i.slice(i.length - 40, i.length))
                },
                toTwosComplement: n.toTwosComplement
            }
        },
        3152: function(t, r, i) {
            var e = i(403),
                n = i(609),
                o = i(238),
                s = i(3169),
                u = i(3174),
                h = i(3175),
                a = i(3176),
                l = i(3177),
                f = i(3178),
                m = i(3179),
                c = function(t, r) {
                    return t.isDynamicType(r) || t.isDynamicArray(r)
                };

            function d() {}
            var p = function(t) {
                this._types = t
            };
            p.prototype._requireType = function(t) {
                var r = this._types.filter((function(r) {
                    return r.isType(t)
                }))[0];
                if (!r) throw Error("Invalid solidity type: " + t);
                return r
            }, p.prototype._getOffsets = function(t, r) {
                for (var i = r.map((function(r, i) {
                        return r.staticPartLength(t[i])
                    })), e = 1; e < i.length; e++) i[e] += i[e - 1];
                return i.map((function(i, e) {
                    return i - r[e].staticPartLength(t[e])
                }))
            }, p.prototype._getSolidityTypes = function(t) {
                var r = this;
                return t.map((function(t) {
                    return r._requireType(t)
                }))
            }, p.prototype._encodeMultiWithOffset = function(t, r, i, e) {
                var n = "",
                    s = this;
                return t.forEach((function(u, h) {
                    if (c(r[h], t[h])) {
                        n += o.formatInputInt(e).encode();
                        var a = s._encodeWithOffset(t[h], r[h], i[h], e);
                        e += a.length / 2
                    } else n += s._encodeWithOffset(t[h], r[h], i[h], e)
                })), t.forEach((function(o, u) {
                    if (c(r[u], t[u])) {
                        var h = s._encodeWithOffset(t[u], r[u], i[u], e);
                        e += h.length / 2, n += h
                    }
                })), n
            }, p.prototype._encodeWithOffset = function(t, r, i, e) {
                var n, s, u, h = this;
                return r.isDynamicArray(t) ? (n = r.nestedName(t), s = r.staticPartLength(n), u = i[0], function() {
                    var t = 2;
                    if (r.isDynamicArray(n))
                        for (var h = 1; h < i.length; h++) t += +i[h - 1][0] || 0, u += o.formatInputInt(e + h * s + 32 * t).encode()
                }(), function() {
                    for (var t = 0; t < i.length - 1; t++) {
                        var o = u / 2;
                        u += h._encodeWithOffset(n, r, i[t + 1], e + o)
                    }
                }(), u) : r.isStaticArray(t) ? function() {
                    var n = r.nestedName(t),
                        s = r.staticPartLength(n),
                        u = "";
                    return r.isDynamicArray(n) && function() {
                            for (var t = 0, r = 0; r < i.length; r++) t += +(i[r - 1] || [])[0] || 0, u += o.formatInputInt(e + r * s + 32 * t).encode()
                        }(),
                        function() {
                            for (var t = 0; t < i.length; t++) {
                                var o = u / 2;
                                u += h._encodeWithOffset(n, r, i[t], e + o)
                            }
                        }(), u
                }() : i
            }, p.prototype.encodeFunctionSignature = function(t) {
                return e.isObject(t) && (t = n._jsonInterfaceMethodToString(t)), n.sha3(t).slice(0, 10)
            }, p.prototype.encodeEventSignature = function(t) {
                return e.isObject(t) && (t = n._jsonInterfaceMethodToString(t)), n.sha3(t)
            }, p.prototype.encodeParameter = function(t, r) {
                return this.encodeParameters([t], [r])
            }, p.prototype.encodeParameters = function(t, r) {
                e.isObject(t) && t.inputs && (t = e.map(t.inputs, (function(t) {
                    return t.type
                })));
                var i = this._getSolidityTypes(t),
                    n = i.map((function(i, e) {
                        return i.encode(r[e], t[e])
                    })),
                    o = i.reduce((function(r, e, n) {
                        var o = e.staticPartLength(t[n]),
                            s = 32 * Math.floor((o + 31) / 32);
                        return r + (c(i[n], t[n]) ? 32 : s)
                    }), 0);
                return "0x" + this._encodeMultiWithOffset(t, i, n, o)
            }, p.prototype.encodeFunctionCall = function(t, r) {
                return this.encodeFunctionSignature(t) + this.encodeParameters(t, r).replace("0x", "")
            }, p.prototype.decodeParameter = function(t, r) {
                if (!e.isString(t)) throw new Error("Given parameter type is not a string: " + t);
                return this.decodeParameters([{
                    type: t
                }], r)[0]
            }, p.prototype.decodeParameters = function(t, r) {
                var i = e.isArray(t) && e.isString(t[0]),
                    n = i ? t : [];
                i || t.forEach((function(t) {
                    n.push(t.type)
                }));
                var o = this._getSolidityTypes(n),
                    s = this._getOffsets(n, o),
                    u = new d;
                u.__length__ = 0;
                var h = 0;
                return t.forEach((function(t, i) {
                    var a = o[h].decode(r.replace(/^0x/i, ""), s[h], n[h], h);
                    a = "0x" === a ? null : a, u[i] = a, e.isObject(t) && t.name && (u[t.name] = a), u.__length__++, h++
                })), u
            }, p.prototype.decodeLog = function(t, r, i) {
                r = r || "";
                var n = [],
                    o = [];
                t.forEach((function(t, r) {
                    t.indexed ? o[r] = t : n[r] = t
                }));
                var s = r.slice(2),
                    u = e.isArray(i) ? i.map((function(t) {
                        return t.slice(2)
                    })).join("") : i,
                    h = this.decodeParameters(n, s),
                    a = this.decodeParameters(o, u),
                    l = new d;
                return l.__length__ = 0, t.forEach((function(t, r) {
                    l[r] = "string" === t.type ? "" : null, h[r] && (l[r] = h[r]), a[r] && (l[r] = a[r]), t.name && (l[t.name] = l[r]), l.__length__++
                })), l
            };
            var g = new p([new s, new u, new h, new a, new l, new m, new f]);
            t.exports = g
        },
        3155: function(t, r, i) {
            (function(t) {
                var e;
                ! function(n) {
                    var o = r,
                        s = (t && t.exports, "object" == typeof global && global);
                    s.global !== s && s.window;
                    var u, h, a, l = String.fromCharCode;

                    function f(t) {
                        for (var r, i, e = [], n = 0, o = t.length; n < o;)(r = t.charCodeAt(n++)) >= 55296 && r <= 56319 && n < o ? 56320 == (64512 & (i = t.charCodeAt(n++))) ? e.push(((1023 & r) << 10) + (1023 & i) + 65536) : (e.push(r), n--) : e.push(r);
                        return e
                    }

                    function m(t) {
                        if (t >= 55296 && t <= 57343) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value")
                    }

                    function c(t, r) {
                        return l(t >> r & 63 | 128)
                    }

                    function d(t) {
                        if (0 == (4294967168 & t)) return l(t);
                        var r = "";
                        return 0 == (4294965248 & t) ? r = l(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (m(t), r = l(t >> 12 & 15 | 224), r += c(t, 6)) : 0 == (4292870144 & t) && (r = l(t >> 18 & 7 | 240), r += c(t, 12), r += c(t, 6)), r += l(63 & t | 128)
                    }

                    function p() {
                        if (a >= h) throw Error("Invalid byte index");
                        var t = 255 & u[a];
                        if (a++, 128 == (192 & t)) return 63 & t;
                        throw Error("Invalid continuation byte")
                    }

                    function g() {
                        var t, r;
                        if (a > h) throw Error("Invalid byte index");
                        if (a == h) return !1;
                        if (t = 255 & u[a], a++, 0 == (128 & t)) return t;
                        if (192 == (224 & t)) {
                            if ((r = (31 & t) << 6 | p()) >= 128) return r;
                            throw Error("Invalid continuation byte")
                        }
                        if (224 == (240 & t)) {
                            if ((r = (15 & t) << 12 | p() << 6 | p()) >= 2048) return m(r), r;
                            throw Error("Invalid continuation byte")
                        }
                        if (240 == (248 & t) && (r = (15 & t) << 18 | p() << 12 | p() << 6 | p()) >= 65536 && r <= 1114111) return r;
                        throw Error("Invalid UTF-8 detected")
                    }
                    var v = {
                        version: "2.0.0",
                        encode: function(t) {
                            for (var r = f(t), i = r.length, e = -1, n = ""; ++e < i;) n += d(r[e]);
                            return n
                        },
                        decode: function(t) {
                            u = f(t), h = u.length, a = 0;
                            for (var r, i = []; !1 !== (r = g());) i.push(r);
                            return function(t) {
                                for (var r, i = t.length, e = -1, n = ""; ++e < i;)(r = t[e]) > 65535 && (n += l((r -= 65536) >>> 10 & 1023 | 55296), r = 56320 | 1023 & r), n += l(r);
                                return n
                            }(i)
                        }
                    };
                    void 0 === (e = function() {
                        return v
                    }.call(r, i, r, t)) || (t.exports = e)
                }()
            }).call(this, i(81)(t))
        },
        3166: function(t, r, i) {
            var e = i(403),
                n = i(610),
                o = i(1733),
                s = function(t) {
                    var r = typeof t;
                    if ("string" === r) return o.isHexStrict(t) ? new n(t.replace(/0x/i, ""), 16) : new n(t, 10);
                    if ("number" === r) return new n(t);
                    if (o.isBigNumber(t)) return new n(t.toString(10));
                    if (o.isBN(t)) return t;
                    throw new Error(t + " is not a number")
                },
                u = function(t, r, i) {
                    var e, u;
                    if ("bytes" === (t = function(t) {
                            return t.startsWith("int[") ? "int256" + t.slice(3) : "int" === t ? "int256" : t.startsWith("uint[") ? "uint256" + t.slice(4) : "uint" === t ? "uint256" : t.startsWith("fixed[") ? "fixed128x128" + t.slice(5) : "fixed" === t ? "fixed128x128" : t.startsWith("ufixed[") ? "ufixed128x128" + t.slice(6) : "ufixed" === t ? "ufixed128x128" : t
                        }(t))) {
                        if (r.replace(/^0x/i, "").length % 2 != 0) throw new Error("Invalid bytes characters " + r.length);
                        return r
                    }
                    if ("string" === t) return o.utf8ToHex(r);
                    if ("bool" === t) return r ? "01" : "00";
                    if (t.startsWith("address")) {
                        if (e = i ? 64 : 40, !o.isAddress(r)) throw new Error(r + " is not a valid address, or the checksum is invalid.");
                        return o.leftPad(r.toLowerCase(), e)
                    }
                    if (e = function(t) {
                            var r = /^\D+(\d+).*$/.exec(t);
                            return r ? parseInt(r[1], 10) : null
                        }(t), t.startsWith("bytes")) {
                        if (!e) throw new Error("bytes[] not yet supported in solidity");
                        if (i && (e = 32), e < 1 || e > 32 || e < r.replace(/^0x/i, "").length / 2) throw new Error("Invalid bytes" + e + " for " + r);
                        return o.rightPad(r, 2 * e)
                    }
                    if (t.startsWith("uint")) {
                        if (e % 8 || e < 8 || e > 256) throw new Error("Invalid uint" + e + " size");
                        if ((u = s(r)).bitLength() > e) throw new Error("Supplied uint exceeds width: " + e + " vs " + u.bitLength());
                        if (u.lt(new n(0))) throw new Error("Supplied uint " + u.toString() + " is negative");
                        return e ? o.leftPad(u.toString("hex"), e / 8 * 2) : u
                    }
                    if (t.startsWith("int")) {
                        if (e % 8 || e < 8 || e > 256) throw new Error("Invalid int" + e + " size");
                        if ((u = s(r)).bitLength() > e) throw new Error("Supplied int exceeds width: " + e + " vs " + u.bitLength());
                        return u.lt(new n(0)) ? u.toTwos(e).toString("hex") : e ? o.leftPad(u.toString("hex"), e / 8 * 2) : u
                    }
                    throw new Error("Unsupported or invalid type: " + t)
                },
                h = function(t) {
                    if (e.isArray(t)) throw new Error("Autodetection of array types is not supported.");
                    var r, i, s = "";
                    if (e.isObject(t) && (t.hasOwnProperty("v") || t.hasOwnProperty("t") || t.hasOwnProperty("value") || t.hasOwnProperty("type")) ? (r = t.hasOwnProperty("t") ? t.t : t.type, s = t.hasOwnProperty("v") ? t.v : t.value) : (r = o.toHex(t, !0), s = o.toHex(t), r.startsWith("int") || r.startsWith("uint") || (r = "bytes")), !r.startsWith("int") && !r.startsWith("uint") || "string" != typeof s || /^(-)?0x/i.test(s) || (s = new n(s)), e.isArray(s)) {
                        if ((i = function(t) {
                                var r = /^\D+\d*\[(\d+)\]$/.exec(t);
                                return r ? parseInt(r[1], 10) : null
                            }(r)) && s.length !== i) throw new Error(r + " is not matching the given array " + JSON.stringify(s));
                        i = s.length
                    }
                    return e.isArray(s) ? s.map((function(t) {
                        return u(r, t, i).toString("hex").replace("0x", "")
                    })).join("") : u(r, s, i).toString("hex").replace("0x", "")
                };
            t.exports = function() {
                var t = Array.prototype.slice.call(arguments),
                    r = e.map(t, h);
                return o.sha3("0x" + r.join(""))
            }
        },
        3169: function(t, r, i) {
            var e = i(238),
                n = i(3170).formatters,
                o = i(340),
                s = function() {
                    this._inputFormatter = function() {
                        var t = Array.prototype.slice.call(arguments);
                        return t[0] = t[0] && "0x0" !== t[0] ? n.inputAddressFormatter(t[0]) : "", e.formatInputInt.apply(this, t)
                    }, this._outputFormatter = e.formatOutputAddress
                };
            (s.prototype = new o({})).constructor = s, s.prototype.isType = function(t) {
                return !!t.match(/address(\[([0-9]*)\])?/)
            }, t.exports = s
        },
        3170: function(t, r, i) {
            "use strict";
            var e = i(3171),
                n = i(3172);
            t.exports = {
                errors: e,
                formatters: n
            }
        },
        3171: function(t, r, i) {
            "use strict";
            t.exports = {
                ErrorResponse: function(t) {
                    var r = t && t.error && t.error.message ? t.error.message : JSON.stringify(t);
                    return new Error("Returned error: " + r)
                },
                InvalidNumberOfParams: function(t, r, i) {
                    return new Error('Invalid number of parameters for "' + i + '". Got ' + t + " expected " + r + "!")
                },
                InvalidConnection: function(t) {
                    return new Error("CONNECTION ERROR: Couldn't connect to node " + t + ".")
                },
                InvalidProvider: function() {
                    return new Error("Provider not set or invalid")
                },
                InvalidResponse: function(t) {
                    var r = t && t.error && t.error.message ? t.error.message : "Invalid JSON RPC response: " + JSON.stringify(t);
                    return new Error(r)
                },
                ConnectionTimeout: function(t) {
                    return new Error("CONNECTION TIMEOUT: timeout of " + t + " ms achived")
                }
            }
        },
        3172: function(t, r, i) {
            "use strict";
            var e = i(403),
                n = i(609),
                o = i(3173),
                s = function(t) {
                    return n.toBN(t).toString(10)
                },
                u = function(t) {
                    if (void 0 !== t) return function(t) {
                        return "latest" === t || "pending" === t || "earliest" === t
                    }(t) ? t : n.isHexStrict(t) ? e.isString(t) ? t.toLowerCase() : t : n.numberToHex(t)
                },
                h = function(t) {
                    if (t.to && (t.to = f(t.to)), t.data && t.input) throw new Error('You can\'t have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.');
                    if (!t.data && t.input && (t.data = t.input, delete t.input), t.data && !n.isHex(t.data)) throw new Error("The data field must be HEX encoded data.");
                    return (t.gas || t.gasLimit) && (t.gas = t.gas || t.gasLimit), ["gasPrice", "gas", "value", "nonce"].filter((function(r) {
                        return void 0 !== t[r]
                    })).forEach((function(r) {
                        t[r] = n.numberToHex(t[r])
                    })), t
                },
                a = function(t) {
                    return null !== t.blockNumber && (t.blockNumber = n.hexToNumber(t.blockNumber)), null !== t.transactionIndex && (t.transactionIndex = n.hexToNumber(t.transactionIndex)), t.nonce = n.hexToNumber(t.nonce), t.gas = n.hexToNumber(t.gas), t.gasPrice = s(t.gasPrice), t.value = s(t.value), t.to && n.isAddress(t.to) ? t.to = n.toChecksumAddress(t.to) : t.to = null, t.from && (t.from = n.toChecksumAddress(t.from)), t
                },
                l = function(t) {
                    if ("string" == typeof t.blockHash && "string" == typeof t.transactionHash && "string" == typeof t.logIndex) {
                        var r = n.sha3(t.blockHash.replace("0x", "") + t.transactionHash.replace("0x", "") + t.logIndex.replace("0x", ""));
                        t.id = "log_" + r.replace("0x", "").substr(0, 8)
                    } else t.id || (t.id = null);
                    return null !== t.blockNumber && (t.blockNumber = n.hexToNumber(t.blockNumber)), null !== t.transactionIndex && (t.transactionIndex = n.hexToNumber(t.transactionIndex)), null !== t.logIndex && (t.logIndex = n.hexToNumber(t.logIndex)), t.address && (t.address = n.toChecksumAddress(t.address)), t
                },
                f = function(t) {
                    var r = new o(t);
                    if (r.isValid() && r.isDirect()) return r.toAddress().toLowerCase();
                    if (n.isAddress(t)) return "0x" + t.toLowerCase().replace("0x", "");
                    throw new Error('Provided address "' + t + "\" is invalid, the capitalization checksum test failed, or its an indrect IBAN address which can't be converted.")
                };
            t.exports = {
                inputDefaultBlockNumberFormatter: function(t) {
                    return this && null == t ? this.defaultBlock : "genesis" === t || "earliest" === t ? "0x0" : u(t)
                },
                inputBlockNumberFormatter: u,
                inputCallFormatter: function(t) {
                    var r = (t = h(t)).from || (this ? this.defaultAccount : null);
                    return r && (t.from = f(r)), t
                },
                inputTransactionFormatter: function(t) {
                    if (t = h(t), !e.isNumber(t.from) && !e.isObject(t.from)) {
                        if (t.from = t.from || (this ? this.defaultAccount : null), !t.from && !e.isNumber(t.from)) throw new Error('The send transactions "from" field must be defined!');
                        t.from = f(t.from)
                    }
                    return t
                },
                inputAddressFormatter: f,
                inputPostFormatter: function(t) {
                    return t.ttl && (t.ttl = n.numberToHex(t.ttl)), t.workToProve && (t.workToProve = n.numberToHex(t.workToProve)), t.priority && (t.priority = n.numberToHex(t.priority)), e.isArray(t.topics) || (t.topics = t.topics ? [t.topics] : []), t.topics = t.topics.map((function(t) {
                        return 0 === t.indexOf("0x") ? t : n.fromUtf8(t)
                    })), t
                },
                inputLogFormatter: function(t) {
                    var r = function(t) {
                        return null == t ? null : 0 === (t = String(t)).indexOf("0x") ? t : n.fromUtf8(t)
                    };
                    return t.topics = t.topics || [], t.topics = t.topics.map((function(t) {
                        return e.isArray(t) ? t.map(r) : r(t)
                    })), r = null, t.address && (t.address = e.isArray(t.address) ? t.address.map((function(t) {
                        return f(t)
                    })) : f(t.address)), t
                },
                inputSignFormatter: function(t) {
                    return n.isHexStrict(t) ? t : n.utf8ToHex(t)
                },
                outputBigNumberFormatter: s,
                outputTransactionFormatter: a,
                outputTransactionReceiptFormatter: function(t) {
                    if ("object" != typeof t) throw new Error("Received receipt is invalid: " + t);
                    return null !== t.blockNumber && (t.blockNumber = n.hexToNumber(t.blockNumber)), null !== t.transactionIndex && (t.transactionIndex = n.hexToNumber(t.transactionIndex)), t.cumulativeGasUsed = n.hexToNumber(t.cumulativeGasUsed), t.gasUsed = n.hexToNumber(t.gasUsed), e.isArray(t.logs) && (t.logs = t.logs.map(l)), t.contractAddress && (t.contractAddress = n.toChecksumAddress(t.contractAddress)), void 0 !== t.status && (t.status = Boolean(parseInt(t.status))), t
                },
                outputBlockFormatter: function(t) {
                    return t.gasLimit = n.hexToNumber(t.gasLimit), t.gasUsed = n.hexToNumber(t.gasUsed), t.size = n.hexToNumber(t.size), t.timestamp = n.hexToNumber(t.timestamp), null !== t.number && (t.number = n.hexToNumber(t.number)), t.difficulty && (t.difficulty = s(t.difficulty)), t.totalDifficulty && (t.totalDifficulty = s(t.totalDifficulty)), e.isArray(t.transactions) && t.transactions.forEach((function(t) {
                        if (!e.isString(t)) return a(t)
                    })), t.miner && (t.miner = n.toChecksumAddress(t.miner)), t
                },
                outputLogFormatter: l,
                outputPostFormatter: function(t) {
                    return t.expiry = n.hexToNumber(t.expiry), t.sent = n.hexToNumber(t.sent), t.ttl = n.hexToNumber(t.ttl), t.workProved = n.hexToNumber(t.workProved), t.topics || (t.topics = []), t.topics = t.topics.map((function(t) {
                        return n.toUtf8(t)
                    })), t
                },
                outputSyncingFormatter: function(t) {
                    return t.startingBlock = n.hexToNumber(t.startingBlock), t.currentBlock = n.hexToNumber(t.currentBlock), t.highestBlock = n.hexToNumber(t.highestBlock), t.knownStates && (t.knownStates = n.hexToNumber(t.knownStates), t.pulledStates = n.hexToNumber(t.pulledStates)), t
                }
            }
        },
        3173: function(t, r, i) {
            "use strict";
            var e = i(609),
                n = i(610),
                o = function(t) {
                    var r = "A".charCodeAt(0),
                        i = "Z".charCodeAt(0);
                    return (t = (t = t.toUpperCase()).substr(4) + t.substr(0, 4)).split("").map((function(t) {
                        var e = t.charCodeAt(0);
                        return e >= r && e <= i ? e - r + 10 : t
                    })).join("")
                },
                s = function(t) {
                    for (var r, i = t; i.length > 2;) r = i.slice(0, 9), i = parseInt(r, 10) % 97 + i.slice(r.length);
                    return parseInt(i, 10) % 97
                },
                u = function(t) {
                    this._iban = t
                };
            u.toAddress = function(t) {
                if (!(t = new u(t)).isDirect()) throw new Error("IBAN is indirect and can't be converted");
                return t.toAddress()
            }, u.toIban = function(t) {
                return u.fromAddress(t).toString()
            }, u.fromAddress = function(t) {
                if (!e.isAddress(t)) throw new Error("Provided address is not a valid address: " + t);
                t = t.replace("0x", "").replace("0X", "");
                var r = function(t, r) {
                    for (var i = t; i.length < 2 * r;) i = "0" + i;
                    return i
                }(new n(t, 16).toString(36), 15);
                return u.fromBban(r.toUpperCase())
            }, u.fromBban = function(t) {
                var r = ("0" + (98 - s(o("XE00" + t)))).slice(-2);
                return new u("XE" + r + t)
            }, u.createIndirect = function(t) {
                return u.fromBban("ETH" + t.institution + t.identifier)
            }, u.isValid = function(t) {
                return new u(t).isValid()
            }, u.prototype.isValid = function() {
                return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban) && 1 === s(o(this._iban))
            }, u.prototype.isDirect = function() {
                return 34 === this._iban.length || 35 === this._iban.length
            }, u.prototype.isIndirect = function() {
                return 20 === this._iban.length
            }, u.prototype.checksum = function() {
                return this._iban.substr(2, 2)
            }, u.prototype.institution = function() {
                return this.isIndirect() ? this._iban.substr(7, 4) : ""
            }, u.prototype.client = function() {
                return this.isIndirect() ? this._iban.substr(11) : ""
            }, u.prototype.toAddress = function() {
                if (this.isDirect()) {
                    var t = this._iban.substr(4),
                        r = new n(t, 36);
                    return e.toChecksumAddress(r.toString(16, 20))
                }
                return ""
            }, u.prototype.toString = function() {
                return this._iban
            }, t.exports = u
        },
        3174: function(t, r, i) {
            var e = i(238),
                n = i(340),
                o = function() {
                    this._inputFormatter = e.formatInputBool, this._outputFormatter = e.formatOutputBool
                };
            (o.prototype = new n({})).constructor = o, o.prototype.isType = function(t) {
                return !!t.match(/^bool(\[([0-9]*)\])*$/)
            }, t.exports = o
        },
        3175: function(t, r, i) {
            var e = i(238),
                n = i(340),
                o = function() {
                    this._inputFormatter = e.formatInputInt, this._outputFormatter = e.formatOutputInt
                };
            (o.prototype = new n({})).constructor = o, o.prototype.isType = function(t) {
                return !!t.match(/^int([0-9]*)?(\[([0-9]*)\])*$/)
            }, t.exports = o
        },
        3176: function(t, r, i) {
            var e = i(238),
                n = i(340),
                o = function() {
                    this._inputFormatter = e.formatInputInt, this._outputFormatter = e.formatOutputUInt
                };
            (o.prototype = new n({})).constructor = o, o.prototype.isType = function(t) {
                return !!t.match(/^uint([0-9]*)?(\[([0-9]*)\])*$/)
            }, t.exports = o
        },
        3177: function(t, r, i) {
            var e = i(238),
                n = i(340),
                o = function() {
                    this._inputFormatter = e.formatInputDynamicBytes, this._outputFormatter = e.formatOutputDynamicBytes
                };
            (o.prototype = new n({})).constructor = o, o.prototype.isType = function(t) {
                return !!t.match(/^bytes(\[([0-9]*)\])*$/)
            }, o.prototype.isDynamicType = function() {
                return !0
            }, t.exports = o
        },
        3178: function(t, r, i) {
            var e = i(238),
                n = i(340),
                o = function() {
                    this._inputFormatter = e.formatInputString, this._outputFormatter = e.formatOutputString
                };
            (o.prototype = new n({})).constructor = o, o.prototype.isType = function(t) {
                return !!t.match(/^string(\[([0-9]*)\])*$/)
            }, o.prototype.isDynamicType = function() {
                return !0
            }, t.exports = o
        },
        3179: function(t, r, i) {
            var e = i(238),
                n = i(340),
                o = function() {
                    this._inputFormatter = e.formatInputBytes, this._outputFormatter = e.formatOutputBytes
                };
            (o.prototype = new n({})).constructor = o, o.prototype.isType = function(t) {
                return !!t.match(/^bytes([0-9]{1,})(\[([0-9]*)\])*$/)
            }, t.exports = o
        },
        340: function(t, r, i) {
            var e = i(238),
                n = i(1741),
                o = function(t) {
                    this._inputFormatter = t.inputFormatter, this._outputFormatter = t.outputFormatter
                };
            o.prototype.isType = function(t) {
                throw "This method should be overwritten for type " + t
            }, o.prototype.staticPartLength = function(t) {
                return (this.nestedTypes(t) || ["[1]"]).map((function(t) {
                    return parseInt(t.slice(1, -1), 10) || 1
                })).reduce((function(t, r) {
                    return t * r
                }), 32)
            }, o.prototype.isDynamicArray = function(t) {
                var r = this.nestedTypes(t);
                return !!r && !r[r.length - 1].match(/[0-9]{1,}/g)
            }, o.prototype.isStaticArray = function(t) {
                var r = this.nestedTypes(t);
                return !!r && !!r[r.length - 1].match(/[0-9]{1,}/g)
            }, o.prototype.staticArrayLength = function(t) {
                var r = this.nestedTypes(t);
                return r ? parseInt(r[r.length - 1].match(/[0-9]{1,}/g) || 1) : 1
            }, o.prototype.nestedName = function(t) {
                var r = this.nestedTypes(t);
                return r ? t.substr(0, t.length - r[r.length - 1].length) : t
            }, o.prototype.isDynamicType = function() {
                return !1
            }, o.prototype.nestedTypes = function(t) {
                return t.match(/(\[[0-9]*\])/g)
            }, o.prototype.encode = function(t, r) {
                var i, n, o, s = this;
                return this.isDynamicArray(r) ? (i = t.length, n = s.nestedName(r), (o = []).push(e.formatInputInt(i).encode()), t.forEach((function(t) {
                    o.push(s.encode(t, n))
                })), o) : this.isStaticArray(r) ? function() {
                    for (var i = s.staticArrayLength(r), e = s.nestedName(r), n = [], o = 0; o < i; o++) n.push(s.encode(t[o], e));
                    return n
                }() : this._inputFormatter(t, r).encode()
            }, o.prototype.decode = function(t, r, i) {
                var e = this;
                if (this.isDynamicArray(i)) return function() {
                    for (var n = parseInt("0x" + t.substr(2 * r, 64)), o = parseInt("0x" + t.substr(2 * n, 64)), s = n + 32, u = e.nestedName(i), h = e.staticPartLength(u), a = 32 * Math.floor((h + 31) / 32), l = [], f = 0; f < o * a; f += a) l.push(e.decode(t, s + f, u));
                    return l
                }();
                if (this.isStaticArray(i)) return function() {
                    for (var n = e.staticArrayLength(i), o = r, s = e.nestedName(i), u = e.staticPartLength(s), h = 32 * Math.floor((u + 31) / 32), a = [], l = 0; l < n * h; l += h) a.push(e.decode(t, o + l, s));
                    return a
                }();
                if (this.isDynamicType(i)) return function() {
                    var o = parseInt("0x" + t.substr(2 * r, 64)),
                        s = parseInt("0x" + t.substr(2 * o, 64)),
                        u = Math.floor((s + 31) / 32),
                        h = new n(t.substr(2 * o, 64 * (1 + u)), 0, t);
                    return e._outputFormatter(h, i)
                }();
                var o = this.staticPartLength(i),
                    s = new n(t.substr(2 * r, 2 * o), void 0, t);
                return this._outputFormatter(s, i)
            }, t.exports = o
        },
        609: function(t, r, i) {
            var e = i(403),
                n = i(1028),
                o = i(1733),
                s = i(3166),
                u = i(3167),
                h = function(t) {
                    if (!o.isHexStrict(t)) throw new Error("The parameter must be a valid HEX string.");
                    var r = "",
                        i = 0,
                        e = t.length;
                    for ("0x" === t.substring(0, 2) && (i = 2); i < e; i += 2) {
                        var n = parseInt(t.substr(i, 2), 16);
                        r += String.fromCharCode(n)
                    }
                    return r
                },
                a = function(t) {
                    if (!t) return "0x00";
                    for (var r = "", i = 0; i < t.length; i++) {
                        var e = t.charCodeAt(i).toString(16);
                        r += e.length < 2 ? "0" + e : e
                    }
                    return "0x" + r
                },
                l = function(t) {
                    if (t = t ? t.toLowerCase() : "ether", !n.unitMap[t]) throw new Error('This unit "' + t + "\" doesn't exist, please use the one of the following units" + JSON.stringify(n.unitMap, null, 2));
                    return t
                };
            t.exports = {
                _fireError: function(t, r, i, n) {
                    return !e.isObject(t) || t instanceof Error || !t.data || ((e.isObject(t.data) || e.isArray(t.data)) && (t.data = JSON.stringify(t.data, null, 2)), t = t.message + "\n" + t.data), e.isString(t) && (t = new Error(t)), e.isFunction(n) && n(t), e.isFunction(i) && ((r && e.isFunction(r.listeners) && r.listeners("error").length || e.isFunction(n)) && r.catch((function() {})), setTimeout((function() {
                        i(t)
                    }), 1)), r && e.isFunction(r.emit) && setTimeout((function() {
                        r.emit("error", t), r.removeAllListeners()
                    }), 1), r
                },
                _jsonInterfaceMethodToString: function(t) {
                    if (e.isObject(t) && t.name && -1 !== t.name.indexOf("(")) return t.name;
                    var r = t.inputs.map((function(t) {
                        return t.type
                    })).join(",");
                    return t.name + "(" + r + ")"
                },
                randomHex: u,
                _: e,
                BN: o.BN,
                isBN: o.isBN,
                isBigNumber: o.isBigNumber,
                isHex: o.isHex,
                isHexStrict: o.isHexStrict,
                sha3: o.sha3,
                keccak256: o.sha3,
                soliditySha3: s,
                isAddress: o.isAddress,
                checkAddressChecksum: o.checkAddressChecksum,
                toChecksumAddress: function(t) {
                    if (void 0 === t) return "";
                    if (!/^(0x)?[0-9a-f]{40}$/i.test(t)) throw new Error('Given address "' + t + '" is not a valid Ethereum address.');
                    t = t.toLowerCase().replace(/^0x/i, "");
                    for (var r = o.sha3(t).replace(/^0x/i, ""), i = "0x", e = 0; e < t.length; e++) parseInt(r[e], 16) > 7 ? i += t[e].toUpperCase() : i += t[e];
                    return i
                },
                toHex: o.toHex,
                toBN: o.toBN,
                bytesToHex: o.bytesToHex,
                hexToBytes: o.hexToBytes,
                hexToNumberString: o.hexToNumberString,
                hexToNumber: o.hexToNumber,
                toDecimal: o.hexToNumber,
                numberToHex: o.numberToHex,
                fromDecimal: o.numberToHex,
                hexToUtf8: o.hexToUtf8,
                hexToString: o.hexToUtf8,
                toUtf8: o.hexToUtf8,
                utf8ToHex: o.utf8ToHex,
                stringToHex: o.utf8ToHex,
                fromUtf8: o.utf8ToHex,
                hexToAscii: h,
                toAscii: h,
                asciiToHex: a,
                fromAscii: a,
                unitMap: n.unitMap,
                toWei: function(t, r) {
                    if (r = l(r), !o.isBN(t) && !e.isString(t)) throw new Error("Please pass numbers as strings or BigNumber objects to avoid precision errors.");
                    return o.isBN(t) ? n.toWei(t, r) : n.toWei(t, r).toString(10)
                },
                fromWei: function(t, r) {
                    if (r = l(r), !o.isBN(t) && !e.isString(t)) throw new Error("Please pass numbers as strings or BigNumber objects to avoid precision errors.");
                    return o.isBN(t) ? n.fromWei(t, r) : n.fromWei(t, r).toString(10)
                },
                padLeft: o.leftPad,
                leftPad: o.leftPad,
                padRight: o.rightPad,
                rightPad: o.rightPad,
                toTwosComplement: o.toTwosComplement
            }
        },
        610: function(t, r, i) {
            (function(t) {
                ! function(t, r) {
                    "use strict";

                    function e(t, r) {
                        if (!t) throw new Error(r || "Assertion failed")
                    }

                    function n(t, r) {
                        t.super_ = r;
                        var i = function() {};
                        i.prototype = r.prototype, t.prototype = new i, t.prototype.constructor = t
                    }

                    function o(t, r, i) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== r && "be" !== r || (i = r, r = 10), this._init(t || 0, r || 10, i || "be"))
                    }
                    var s;
                    "object" == typeof t ? t.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        s = i(12).Buffer
                    } catch (t) {}

                    function u(t, r, i) {
                        for (var e = 0, n = Math.min(t.length, i), o = r; o < n; o++) {
                            var s = t.charCodeAt(o) - 48;
                            e <<= 4, e |= s >= 49 && s <= 54 ? s - 49 + 10 : s >= 17 && s <= 22 ? s - 17 + 10 : 15 & s
                        }
                        return e
                    }

                    function h(t, r, i, e) {
                        for (var n = 0, o = Math.min(t.length, i), s = r; s < o; s++) {
                            var u = t.charCodeAt(s) - 48;
                            n *= e, n += u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u
                        }
                        return n
                    }
                    o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, r) {
                        return t.cmp(r) > 0 ? t : r
                    }, o.min = function(t, r) {
                        return t.cmp(r) < 0 ? t : r
                    }, o.prototype._init = function(t, r, i) {
                        if ("number" == typeof t) return this._initNumber(t, r, i);
                        if ("object" == typeof t) return this._initArray(t, r, i);
                        "hex" === r && (r = 16), e(r === (0 | r) && r >= 2 && r <= 36);
                        var n = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && n++, 16 === r ? this._parseHex(t, n) : this._parseBase(t, r, n), "-" === t[0] && (this.negative = 1), this.strip(), "le" === i && this._initArray(this.toArray(), r, i)
                    }, o.prototype._initNumber = function(t, r, i) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (e(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), r, i)
                    }, o.prototype._initArray = function(t, r, i) {
                        if (e("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var o, s, u = 0;
                        if ("be" === i)
                            for (n = t.length - 1, o = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= s << u & 67108863, this.words[o + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);
                        else if ("le" === i)
                            for (n = 0, o = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= s << u & 67108863, this.words[o + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);
                        return this.strip()
                    }, o.prototype._parseHex = function(t, r) {
                        this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var e, n, o = 0;
                        for (i = t.length - 6, e = 0; i >= r; i -= 6) n = u(t, i, i + 6), this.words[e] |= n << o & 67108863, this.words[e + 1] |= n >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, e++);
                        i + 6 !== r && (n = u(t, r, i + 6), this.words[e] |= n << o & 67108863, this.words[e + 1] |= n >>> 26 - o & 4194303), this.strip()
                    }, o.prototype._parseBase = function(t, r, i) {
                        this.words = [0], this.length = 1;
                        for (var e = 0, n = 1; n <= 67108863; n *= r) e++;
                        e--, n = n / r | 0;
                        for (var o = t.length - i, s = o % e, u = Math.min(o, o - s) + i, a = 0, l = i; l < u; l += e) a = h(t, l, l + e, r), this.imuln(n), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
                        if (0 !== s) {
                            var f = 1;
                            for (a = h(t, l, t.length, r), l = 0; l < s; l++) f *= r;
                            this.imuln(f), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a)
                        }
                    }, o.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype.strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, o.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var a = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function m(t, r, i) {
                        i.negative = r.negative ^ t.negative;
                        var e = t.length + r.length | 0;
                        i.length = e, e = e - 1 | 0;
                        var n = 0 | t.words[0],
                            o = 0 | r.words[0],
                            s = n * o,
                            u = 67108863 & s,
                            h = s / 67108864 | 0;
                        i.words[0] = u;
                        for (var a = 1; a < e; a++) {
                            for (var l = h >>> 26, f = 67108863 & h, m = Math.min(a, r.length - 1), c = Math.max(0, a - t.length + 1); c <= m; c++) {
                                var d = a - c | 0;
                                l += (s = (n = 0 | t.words[d]) * (o = 0 | r.words[c]) + f) / 67108864 | 0, f = 67108863 & s
                            }
                            i.words[a] = 0 | f, h = 0 | l
                        }
                        return 0 !== h ? i.words[a] = 0 | h : i.length--, i.strip()
                    }
                    o.prototype.toString = function(t, r) {
                        var i;
                        if (r = 0 | r || 1, 16 === (t = t || 10) || "hex" === t) {
                            i = "";
                            for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                                var u = this.words[s],
                                    h = (16777215 & (u << n | o)).toString(16);
                                i = 0 !== (o = u >>> 24 - n & 16777215) || s !== this.length - 1 ? a[6 - h.length] + h + i : h + i, (n += 2) >= 26 && (n -= 26, s--)
                            }
                            for (0 !== o && (i = o.toString(16) + i); i.length % r != 0;) i = "0" + i;
                            return 0 !== this.negative && (i = "-" + i), i
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var m = l[t],
                                c = f[t];
                            i = "";
                            var d = this.clone();
                            for (d.negative = 0; !d.isZero();) {
                                var p = d.modn(c).toString(t);
                                i = (d = d.idivn(c)).isZero() ? p + i : a[m - p.length] + p + i
                            }
                            for (this.isZero() && (i = "0" + i); i.length % r != 0;) i = "0" + i;
                            return 0 !== this.negative && (i = "-" + i), i
                        }
                        e(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && e(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16)
                    }, o.prototype.toBuffer = function(t, r) {
                        return e(void 0 !== s), this.toArrayLike(s, t, r)
                    }, o.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    }, o.prototype.toArrayLike = function(t, r, i) {
                        var n = this.byteLength(),
                            o = i || Math.max(1, n);
                        e(n <= o, "byte array longer than desired length"), e(o > 0, "Requested array length <= 0"), this.strip();
                        var s, u, h = "le" === r,
                            a = new t(o),
                            l = this.clone();
                        if (h) {
                            for (u = 0; !l.isZero(); u++) s = l.andln(255), l.iushrn(8), a[u] = s;
                            for (; u < o; u++) a[u] = 0
                        } else {
                            for (u = 0; u < o - n; u++) a[u] = 0;
                            for (u = 0; !l.isZero(); u++) s = l.andln(255), l.iushrn(8), a[o - u - 1] = s
                        }
                        return a
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var r = t,
                            i = 0;
                        return r >= 4096 && (i += 13, r >>>= 13), r >= 64 && (i += 7, r >>>= 7), r >= 8 && (i += 4, r >>>= 4), r >= 2 && (i += 2, r >>>= 2), i + r
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var r = t,
                            i = 0;
                        return 0 == (8191 & r) && (i += 13, r >>>= 13), 0 == (127 & r) && (i += 7, r >>>= 7), 0 == (15 & r) && (i += 4, r >>>= 4), 0 == (3 & r) && (i += 2, r >>>= 2), 0 == (1 & r) && i++, i
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            r = this._countBits(t);
                        return 26 * (this.length - 1) + r
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, r = 0; r < this.length; r++) {
                            var i = this._zeroBits(this.words[r]);
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
                        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] | t.words[r];
                        return this.strip()
                    }, o.prototype.ior = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var r;
                        r = this.length > t.length ? t : this;
                        for (var i = 0; i < r.length; i++) this.words[i] = this.words[i] & t.words[i];
                        return this.length = r.length, this.strip()
                    }, o.prototype.iand = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var r, i;
                        this.length > t.length ? (r = this, i = t) : (r = t, i = this);
                        for (var e = 0; e < i.length; e++) this.words[e] = r.words[e] ^ i.words[e];
                        if (this !== r)
                            for (; e < r.length; e++) this.words[e] = r.words[e];
                        return this.length = r.length, this.strip()
                    }, o.prototype.ixor = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var r = 0 | Math.ceil(t / 26),
                            i = t % 26;
                        this._expand(r), i > 0 && r--;
                        for (var n = 0; n < r; n++) this.words[n] = 67108863 & ~this.words[n];
                        return i > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - i), this.strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, r) {
                        e("number" == typeof t && t >= 0);
                        var i = t / 26 | 0,
                            n = t % 26;
                        return this._expand(i + 1), this.words[i] = r ? this.words[i] | 1 << n : this.words[i] & ~(1 << n), this.strip()
                    }, o.prototype.iadd = function(t) {
                        var r, i, e;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
                        this.length > t.length ? (i = this, e = t) : (i = t, e = this);
                        for (var n = 0, o = 0; o < e.length; o++) r = (0 | i.words[o]) + (0 | e.words[o]) + n, this.words[o] = 67108863 & r, n = r >>> 26;
                        for (; 0 !== n && o < i.length; o++) r = (0 | i.words[o]) + n, this.words[o] = 67108863 & r, n = r >>> 26;
                        if (this.length = i.length, 0 !== n) this.words[this.length] = n, this.length++;
                        else if (i !== this)
                            for (; o < i.length; o++) this.words[o] = i.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var r;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var r = this.iadd(t);
                            return t.negative = 1, r._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var i, e, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        n > 0 ? (i = this, e = t) : (i = t, e = this);
                        for (var o = 0, s = 0; s < e.length; s++) o = (r = (0 | i.words[s]) - (0 | e.words[s]) + o) >> 26, this.words[s] = 67108863 & r;
                        for (; 0 !== o && s < i.length; s++) o = (r = (0 | i.words[s]) + o) >> 26, this.words[s] = 67108863 & r;
                        if (0 === o && s < i.length && i !== this)
                            for (; s < i.length; s++) this.words[s] = i.words[s];
                        return this.length = Math.max(this.length, s), i !== this && (this.negative = 1), this.strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var c = function(t, r, i) {
                        var e, n, o, s = t.words,
                            u = r.words,
                            h = i.words,
                            a = 0,
                            l = 0 | s[0],
                            f = 8191 & l,
                            m = l >>> 13,
                            c = 0 | s[1],
                            d = 8191 & c,
                            p = c >>> 13,
                            g = 0 | s[2],
                            v = 8191 & g,
                            w = g >>> 13,
                            y = 0 | s[3],
                            M = 8191 & y,
                            b = y >>> 13,
                            x = 0 | s[4],
                            _ = 8191 & x,
                            T = x >>> 13,
                            A = 0 | s[5],
                            S = 8191 & A,
                            N = A >>> 13,
                            I = 0 | s[6],
                            E = 8191 & I,
                            k = I >>> 13,
                            B = 0 | s[7],
                            P = 8191 & B,
                            O = B >>> 13,
                            C = 0 | s[8],
                            F = 8191 & C,
                            L = C >>> 13,
                            H = 0 | s[9],
                            R = 8191 & H,
                            j = H >>> 13,
                            D = 0 | u[0],
                            U = 8191 & D,
                            Z = D >>> 13,
                            q = 0 | u[1],
                            W = 8191 & q,
                            $ = q >>> 13,
                            z = 0 | u[2],
                            G = 8191 & z,
                            V = z >>> 13,
                            X = 0 | u[3],
                            J = 8191 & X,
                            K = X >>> 13,
                            Y = 0 | u[4],
                            Q = 8191 & Y,
                            tt = Y >>> 13,
                            rt = 0 | u[5],
                            it = 8191 & rt,
                            et = rt >>> 13,
                            nt = 0 | u[6],
                            ot = 8191 & nt,
                            st = nt >>> 13,
                            ut = 0 | u[7],
                            ht = 8191 & ut,
                            at = ut >>> 13,
                            lt = 0 | u[8],
                            ft = 8191 & lt,
                            mt = lt >>> 13,
                            ct = 0 | u[9],
                            dt = 8191 & ct,
                            pt = ct >>> 13;
                        i.negative = t.negative ^ r.negative, i.length = 19;
                        var gt = (a + (e = Math.imul(f, U)) | 0) + ((8191 & (n = (n = Math.imul(f, Z)) + Math.imul(m, U) | 0)) << 13) | 0;
                        a = ((o = Math.imul(m, Z)) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, e = Math.imul(d, U), n = (n = Math.imul(d, Z)) + Math.imul(p, U) | 0, o = Math.imul(p, Z);
                        var vt = (a + (e = e + Math.imul(f, W) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, $) | 0) + Math.imul(m, W) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, $) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, e = Math.imul(v, U), n = (n = Math.imul(v, Z)) + Math.imul(w, U) | 0, o = Math.imul(w, Z), e = e + Math.imul(d, W) | 0, n = (n = n + Math.imul(d, $) | 0) + Math.imul(p, W) | 0, o = o + Math.imul(p, $) | 0;
                        var wt = (a + (e = e + Math.imul(f, G) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, V) | 0) + Math.imul(m, G) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, V) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, e = Math.imul(M, U), n = (n = Math.imul(M, Z)) + Math.imul(b, U) | 0, o = Math.imul(b, Z), e = e + Math.imul(v, W) | 0, n = (n = n + Math.imul(v, $) | 0) + Math.imul(w, W) | 0, o = o + Math.imul(w, $) | 0, e = e + Math.imul(d, G) | 0, n = (n = n + Math.imul(d, V) | 0) + Math.imul(p, G) | 0, o = o + Math.imul(p, V) | 0;
                        var yt = (a + (e = e + Math.imul(f, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, K) | 0) + Math.imul(m, J) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, K) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, e = Math.imul(_, U), n = (n = Math.imul(_, Z)) + Math.imul(T, U) | 0, o = Math.imul(T, Z), e = e + Math.imul(M, W) | 0, n = (n = n + Math.imul(M, $) | 0) + Math.imul(b, W) | 0, o = o + Math.imul(b, $) | 0, e = e + Math.imul(v, G) | 0, n = (n = n + Math.imul(v, V) | 0) + Math.imul(w, G) | 0, o = o + Math.imul(w, V) | 0, e = e + Math.imul(d, J) | 0, n = (n = n + Math.imul(d, K) | 0) + Math.imul(p, J) | 0, o = o + Math.imul(p, K) | 0;
                        var Mt = (a + (e = e + Math.imul(f, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, tt) | 0) + Math.imul(m, Q) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, tt) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, e = Math.imul(S, U), n = (n = Math.imul(S, Z)) + Math.imul(N, U) | 0, o = Math.imul(N, Z), e = e + Math.imul(_, W) | 0, n = (n = n + Math.imul(_, $) | 0) + Math.imul(T, W) | 0, o = o + Math.imul(T, $) | 0, e = e + Math.imul(M, G) | 0, n = (n = n + Math.imul(M, V) | 0) + Math.imul(b, G) | 0, o = o + Math.imul(b, V) | 0, e = e + Math.imul(v, J) | 0, n = (n = n + Math.imul(v, K) | 0) + Math.imul(w, J) | 0, o = o + Math.imul(w, K) | 0, e = e + Math.imul(d, Q) | 0, n = (n = n + Math.imul(d, tt) | 0) + Math.imul(p, Q) | 0, o = o + Math.imul(p, tt) | 0;
                        var bt = (a + (e = e + Math.imul(f, it) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, et) | 0) + Math.imul(m, it) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, et) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, e = Math.imul(E, U), n = (n = Math.imul(E, Z)) + Math.imul(k, U) | 0, o = Math.imul(k, Z), e = e + Math.imul(S, W) | 0, n = (n = n + Math.imul(S, $) | 0) + Math.imul(N, W) | 0, o = o + Math.imul(N, $) | 0, e = e + Math.imul(_, G) | 0, n = (n = n + Math.imul(_, V) | 0) + Math.imul(T, G) | 0, o = o + Math.imul(T, V) | 0, e = e + Math.imul(M, J) | 0, n = (n = n + Math.imul(M, K) | 0) + Math.imul(b, J) | 0, o = o + Math.imul(b, K) | 0, e = e + Math.imul(v, Q) | 0, n = (n = n + Math.imul(v, tt) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, tt) | 0, e = e + Math.imul(d, it) | 0, n = (n = n + Math.imul(d, et) | 0) + Math.imul(p, it) | 0, o = o + Math.imul(p, et) | 0;
                        var xt = (a + (e = e + Math.imul(f, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, st) | 0) + Math.imul(m, ot) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, st) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, e = Math.imul(P, U), n = (n = Math.imul(P, Z)) + Math.imul(O, U) | 0, o = Math.imul(O, Z), e = e + Math.imul(E, W) | 0, n = (n = n + Math.imul(E, $) | 0) + Math.imul(k, W) | 0, o = o + Math.imul(k, $) | 0, e = e + Math.imul(S, G) | 0, n = (n = n + Math.imul(S, V) | 0) + Math.imul(N, G) | 0, o = o + Math.imul(N, V) | 0, e = e + Math.imul(_, J) | 0, n = (n = n + Math.imul(_, K) | 0) + Math.imul(T, J) | 0, o = o + Math.imul(T, K) | 0, e = e + Math.imul(M, Q) | 0, n = (n = n + Math.imul(M, tt) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, tt) | 0, e = e + Math.imul(v, it) | 0, n = (n = n + Math.imul(v, et) | 0) + Math.imul(w, it) | 0, o = o + Math.imul(w, et) | 0, e = e + Math.imul(d, ot) | 0, n = (n = n + Math.imul(d, st) | 0) + Math.imul(p, ot) | 0, o = o + Math.imul(p, st) | 0;
                        var _t = (a + (e = e + Math.imul(f, ht) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, at) | 0) + Math.imul(m, ht) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, at) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, e = Math.imul(F, U), n = (n = Math.imul(F, Z)) + Math.imul(L, U) | 0, o = Math.imul(L, Z), e = e + Math.imul(P, W) | 0, n = (n = n + Math.imul(P, $) | 0) + Math.imul(O, W) | 0, o = o + Math.imul(O, $) | 0, e = e + Math.imul(E, G) | 0, n = (n = n + Math.imul(E, V) | 0) + Math.imul(k, G) | 0, o = o + Math.imul(k, V) | 0, e = e + Math.imul(S, J) | 0, n = (n = n + Math.imul(S, K) | 0) + Math.imul(N, J) | 0, o = o + Math.imul(N, K) | 0, e = e + Math.imul(_, Q) | 0, n = (n = n + Math.imul(_, tt) | 0) + Math.imul(T, Q) | 0, o = o + Math.imul(T, tt) | 0, e = e + Math.imul(M, it) | 0, n = (n = n + Math.imul(M, et) | 0) + Math.imul(b, it) | 0, o = o + Math.imul(b, et) | 0, e = e + Math.imul(v, ot) | 0, n = (n = n + Math.imul(v, st) | 0) + Math.imul(w, ot) | 0, o = o + Math.imul(w, st) | 0, e = e + Math.imul(d, ht) | 0, n = (n = n + Math.imul(d, at) | 0) + Math.imul(p, ht) | 0, o = o + Math.imul(p, at) | 0;
                        var Tt = (a + (e = e + Math.imul(f, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, mt) | 0) + Math.imul(m, ft) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, mt) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, e = Math.imul(R, U), n = (n = Math.imul(R, Z)) + Math.imul(j, U) | 0, o = Math.imul(j, Z), e = e + Math.imul(F, W) | 0, n = (n = n + Math.imul(F, $) | 0) + Math.imul(L, W) | 0, o = o + Math.imul(L, $) | 0, e = e + Math.imul(P, G) | 0, n = (n = n + Math.imul(P, V) | 0) + Math.imul(O, G) | 0, o = o + Math.imul(O, V) | 0, e = e + Math.imul(E, J) | 0, n = (n = n + Math.imul(E, K) | 0) + Math.imul(k, J) | 0, o = o + Math.imul(k, K) | 0, e = e + Math.imul(S, Q) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(N, Q) | 0, o = o + Math.imul(N, tt) | 0, e = e + Math.imul(_, it) | 0, n = (n = n + Math.imul(_, et) | 0) + Math.imul(T, it) | 0, o = o + Math.imul(T, et) | 0, e = e + Math.imul(M, ot) | 0, n = (n = n + Math.imul(M, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0, e = e + Math.imul(v, ht) | 0, n = (n = n + Math.imul(v, at) | 0) + Math.imul(w, ht) | 0, o = o + Math.imul(w, at) | 0, e = e + Math.imul(d, ft) | 0, n = (n = n + Math.imul(d, mt) | 0) + Math.imul(p, ft) | 0, o = o + Math.imul(p, mt) | 0;
                        var At = (a + (e = e + Math.imul(f, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, pt) | 0) + Math.imul(m, dt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(m, pt) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, e = Math.imul(R, W), n = (n = Math.imul(R, $)) + Math.imul(j, W) | 0, o = Math.imul(j, $), e = e + Math.imul(F, G) | 0, n = (n = n + Math.imul(F, V) | 0) + Math.imul(L, G) | 0, o = o + Math.imul(L, V) | 0, e = e + Math.imul(P, J) | 0, n = (n = n + Math.imul(P, K) | 0) + Math.imul(O, J) | 0, o = o + Math.imul(O, K) | 0, e = e + Math.imul(E, Q) | 0, n = (n = n + Math.imul(E, tt) | 0) + Math.imul(k, Q) | 0, o = o + Math.imul(k, tt) | 0, e = e + Math.imul(S, it) | 0, n = (n = n + Math.imul(S, et) | 0) + Math.imul(N, it) | 0, o = o + Math.imul(N, et) | 0, e = e + Math.imul(_, ot) | 0, n = (n = n + Math.imul(_, st) | 0) + Math.imul(T, ot) | 0, o = o + Math.imul(T, st) | 0, e = e + Math.imul(M, ht) | 0, n = (n = n + Math.imul(M, at) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, at) | 0, e = e + Math.imul(v, ft) | 0, n = (n = n + Math.imul(v, mt) | 0) + Math.imul(w, ft) | 0, o = o + Math.imul(w, mt) | 0;
                        var St = (a + (e = e + Math.imul(d, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, pt) | 0) + Math.imul(p, dt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(p, pt) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, e = Math.imul(R, G), n = (n = Math.imul(R, V)) + Math.imul(j, G) | 0, o = Math.imul(j, V), e = e + Math.imul(F, J) | 0, n = (n = n + Math.imul(F, K) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, K) | 0, e = e + Math.imul(P, Q) | 0, n = (n = n + Math.imul(P, tt) | 0) + Math.imul(O, Q) | 0, o = o + Math.imul(O, tt) | 0, e = e + Math.imul(E, it) | 0, n = (n = n + Math.imul(E, et) | 0) + Math.imul(k, it) | 0, o = o + Math.imul(k, et) | 0, e = e + Math.imul(S, ot) | 0, n = (n = n + Math.imul(S, st) | 0) + Math.imul(N, ot) | 0, o = o + Math.imul(N, st) | 0, e = e + Math.imul(_, ht) | 0, n = (n = n + Math.imul(_, at) | 0) + Math.imul(T, ht) | 0, o = o + Math.imul(T, at) | 0, e = e + Math.imul(M, ft) | 0, n = (n = n + Math.imul(M, mt) | 0) + Math.imul(b, ft) | 0, o = o + Math.imul(b, mt) | 0;
                        var Nt = (a + (e = e + Math.imul(v, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(v, pt) | 0) + Math.imul(w, dt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(w, pt) | 0) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, e = Math.imul(R, J), n = (n = Math.imul(R, K)) + Math.imul(j, J) | 0, o = Math.imul(j, K), e = e + Math.imul(F, Q) | 0, n = (n = n + Math.imul(F, tt) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, tt) | 0, e = e + Math.imul(P, it) | 0, n = (n = n + Math.imul(P, et) | 0) + Math.imul(O, it) | 0, o = o + Math.imul(O, et) | 0, e = e + Math.imul(E, ot) | 0, n = (n = n + Math.imul(E, st) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, st) | 0, e = e + Math.imul(S, ht) | 0, n = (n = n + Math.imul(S, at) | 0) + Math.imul(N, ht) | 0, o = o + Math.imul(N, at) | 0, e = e + Math.imul(_, ft) | 0, n = (n = n + Math.imul(_, mt) | 0) + Math.imul(T, ft) | 0, o = o + Math.imul(T, mt) | 0;
                        var It = (a + (e = e + Math.imul(M, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(M, pt) | 0) + Math.imul(b, dt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(b, pt) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, e = Math.imul(R, Q), n = (n = Math.imul(R, tt)) + Math.imul(j, Q) | 0, o = Math.imul(j, tt), e = e + Math.imul(F, it) | 0, n = (n = n + Math.imul(F, et) | 0) + Math.imul(L, it) | 0, o = o + Math.imul(L, et) | 0, e = e + Math.imul(P, ot) | 0, n = (n = n + Math.imul(P, st) | 0) + Math.imul(O, ot) | 0, o = o + Math.imul(O, st) | 0, e = e + Math.imul(E, ht) | 0, n = (n = n + Math.imul(E, at) | 0) + Math.imul(k, ht) | 0, o = o + Math.imul(k, at) | 0, e = e + Math.imul(S, ft) | 0, n = (n = n + Math.imul(S, mt) | 0) + Math.imul(N, ft) | 0, o = o + Math.imul(N, mt) | 0;
                        var Et = (a + (e = e + Math.imul(_, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, pt) | 0) + Math.imul(T, dt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(T, pt) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, e = Math.imul(R, it), n = (n = Math.imul(R, et)) + Math.imul(j, it) | 0, o = Math.imul(j, et), e = e + Math.imul(F, ot) | 0, n = (n = n + Math.imul(F, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, e = e + Math.imul(P, ht) | 0, n = (n = n + Math.imul(P, at) | 0) + Math.imul(O, ht) | 0, o = o + Math.imul(O, at) | 0, e = e + Math.imul(E, ft) | 0, n = (n = n + Math.imul(E, mt) | 0) + Math.imul(k, ft) | 0, o = o + Math.imul(k, mt) | 0;
                        var kt = (a + (e = e + Math.imul(S, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, pt) | 0) + Math.imul(N, dt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(N, pt) | 0) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, e = Math.imul(R, ot), n = (n = Math.imul(R, st)) + Math.imul(j, ot) | 0, o = Math.imul(j, st), e = e + Math.imul(F, ht) | 0, n = (n = n + Math.imul(F, at) | 0) + Math.imul(L, ht) | 0, o = o + Math.imul(L, at) | 0, e = e + Math.imul(P, ft) | 0, n = (n = n + Math.imul(P, mt) | 0) + Math.imul(O, ft) | 0, o = o + Math.imul(O, mt) | 0;
                        var Bt = (a + (e = e + Math.imul(E, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(E, pt) | 0) + Math.imul(k, dt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(k, pt) | 0) + (n >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, e = Math.imul(R, ht), n = (n = Math.imul(R, at)) + Math.imul(j, ht) | 0, o = Math.imul(j, at), e = e + Math.imul(F, ft) | 0, n = (n = n + Math.imul(F, mt) | 0) + Math.imul(L, ft) | 0, o = o + Math.imul(L, mt) | 0;
                        var Pt = (a + (e = e + Math.imul(P, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(P, pt) | 0) + Math.imul(O, dt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(O, pt) | 0) + (n >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, e = Math.imul(R, ft), n = (n = Math.imul(R, mt)) + Math.imul(j, ft) | 0, o = Math.imul(j, mt);
                        var Ot = (a + (e = e + Math.imul(F, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(F, pt) | 0) + Math.imul(L, dt) | 0)) << 13) | 0;
                        a = ((o = o + Math.imul(L, pt) | 0) + (n >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863;
                        var Ct = (a + (e = Math.imul(R, dt)) | 0) + ((8191 & (n = (n = Math.imul(R, pt)) + Math.imul(j, dt) | 0)) << 13) | 0;
                        return a = ((o = Math.imul(j, pt)) + (n >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, h[0] = gt, h[1] = vt, h[2] = wt, h[3] = yt, h[4] = Mt, h[5] = bt, h[6] = xt, h[7] = _t, h[8] = Tt, h[9] = At, h[10] = St, h[11] = Nt, h[12] = It, h[13] = Et, h[14] = kt, h[15] = Bt, h[16] = Pt, h[17] = Ot, h[18] = Ct, 0 !== a && (h[19] = a, i.length++), i
                    };

                    function d(t, r, i) {
                        return (new p).mulp(t, r, i)
                    }

                    function p(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (c = m), o.prototype.mulTo = function(t, r) {
                        var i = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? c(this, t, r) : i < 63 ? m(this, t, r) : i < 1024 ? function(t, r, i) {
                            i.negative = r.negative ^ t.negative, i.length = t.length + r.length;
                            for (var e = 0, n = 0, o = 0; o < i.length - 1; o++) {
                                var s = n;
                                n = 0;
                                for (var u = 67108863 & e, h = Math.min(o, r.length - 1), a = Math.max(0, o - t.length + 1); a <= h; a++) {
                                    var l = o - a,
                                        f = (0 | t.words[l]) * (0 | r.words[a]),
                                        m = 67108863 & f;
                                    u = 67108863 & (m = m + u | 0), n += (s = (s = s + (f / 67108864 | 0) | 0) + (m >>> 26) | 0) >>> 26, s &= 67108863
                                }
                                i.words[o] = u, e = s, s = n
                            }
                            return 0 !== e ? i.words[o] = e : i.length--, i.strip()
                        }(this, t, r) : d(this, t, r)
                    }, p.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), i = o.prototype._countBits(t) - 1, e = 0; e < t; e++) r[e] = this.revBin(e, i, t);
                        return r
                    }, p.prototype.revBin = function(t, r, i) {
                        if (0 === t || t === i - 1) return t;
                        for (var e = 0, n = 0; n < r; n++) e |= (1 & t) << r - n - 1, t >>= 1;
                        return e
                    }, p.prototype.permute = function(t, r, i, e, n, o) {
                        for (var s = 0; s < o; s++) e[s] = r[t[s]], n[s] = i[t[s]]
                    }, p.prototype.transform = function(t, r, i, e, n, o) {
                        this.permute(o, t, r, i, e, n);
                        for (var s = 1; s < n; s <<= 1)
                            for (var u = s << 1, h = Math.cos(2 * Math.PI / u), a = Math.sin(2 * Math.PI / u), l = 0; l < n; l += u)
                                for (var f = h, m = a, c = 0; c < s; c++) {
                                    var d = i[l + c],
                                        p = e[l + c],
                                        g = i[l + c + s],
                                        v = e[l + c + s],
                                        w = f * g - m * v;
                                    v = f * v + m * g, g = w, i[l + c] = d + g, e[l + c] = p + v, i[l + c + s] = d - g, e[l + c + s] = p - v, c !== u && (w = h * f - a * m, m = h * m + a * f, f = w)
                                }
                    }, p.prototype.guessLen13b = function(t, r) {
                        var i = 1 | Math.max(r, t),
                            e = 1 & i,
                            n = 0;
                        for (i = i / 2 | 0; i; i >>>= 1) n++;
                        return 1 << n + 1 + e
                    }, p.prototype.conjugate = function(t, r, i) {
                        if (!(i <= 1))
                            for (var e = 0; e < i / 2; e++) {
                                var n = t[e];
                                t[e] = t[i - e - 1], t[i - e - 1] = n, n = r[e], r[e] = -r[i - e - 1], r[i - e - 1] = -n
                            }
                    }, p.prototype.normalize13b = function(t, r) {
                        for (var i = 0, e = 0; e < r / 2; e++) {
                            var n = 8192 * Math.round(t[2 * e + 1] / r) + Math.round(t[2 * e] / r) + i;
                            t[e] = 67108863 & n, i = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, p.prototype.convert13b = function(t, r, i, n) {
                        for (var o = 0, s = 0; s < r; s++) o += 0 | t[s], i[2 * s] = 8191 & o, o >>>= 13, i[2 * s + 1] = 8191 & o, o >>>= 13;
                        for (s = 2 * r; s < n; ++s) i[s] = 0;
                        e(0 === o), e(0 == (-8192 & o))
                    }, p.prototype.stub = function(t) {
                        for (var r = new Array(t), i = 0; i < t; i++) r[i] = 0;
                        return r
                    }, p.prototype.mulp = function(t, r, i) {
                        var e = 2 * this.guessLen13b(t.length, r.length),
                            n = this.makeRBT(e),
                            o = this.stub(e),
                            s = new Array(e),
                            u = new Array(e),
                            h = new Array(e),
                            a = new Array(e),
                            l = new Array(e),
                            f = new Array(e),
                            m = i.words;
                        m.length = e, this.convert13b(t.words, t.length, s, e), this.convert13b(r.words, r.length, a, e), this.transform(s, o, u, h, e, n), this.transform(a, o, l, f, e, n);
                        for (var c = 0; c < e; c++) {
                            var d = u[c] * l[c] - h[c] * f[c];
                            h[c] = u[c] * f[c] + h[c] * l[c], u[c] = d
                        }
                        return this.conjugate(u, h, e), this.transform(u, h, m, o, e, n), this.conjugate(m, o, e), this.normalize13b(m, e), i.negative = t.negative ^ r.negative, i.length = t.length + r.length, i.strip()
                    }, o.prototype.mul = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, o.prototype.mulf = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), d(this, t, r)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        e("number" == typeof t), e(t < 67108864);
                        for (var r = 0, i = 0; i < this.length; i++) {
                            var n = (0 | this.words[i]) * t,
                                o = (67108863 & n) + (67108863 & r);
                            r >>= 26, r += n / 67108864 | 0, r += o >>> 26, this.words[i] = 67108863 & o
                        }
                        return 0 !== r && (this.words[i] = r, this.length++), this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var r = function(t) {
                            for (var r = new Array(t.bitLength()), i = 0; i < r.length; i++) {
                                var e = i / 26 | 0,
                                    n = i % 26;
                                r[i] = (t.words[e] & 1 << n) >>> n
                            }
                            return r
                        }(t);
                        if (0 === r.length) return new o(1);
                        for (var i = this, e = 0; e < r.length && 0 === r[e]; e++, i = i.sqr());
                        if (++e < r.length)
                            for (var n = i.sqr(); e < r.length; e++, n = n.sqr()) 0 !== r[e] && (i = i.mul(n));
                        return i
                    }, o.prototype.iushln = function(t) {
                        e("number" == typeof t && t >= 0);
                        var r, i = t % 26,
                            n = (t - i) / 26,
                            o = 67108863 >>> 26 - i << 26 - i;
                        if (0 !== i) {
                            var s = 0;
                            for (r = 0; r < this.length; r++) {
                                var u = this.words[r] & o,
                                    h = (0 | this.words[r]) - u << i;
                                this.words[r] = h | s, s = u >>> 26 - i
                            }
                            s && (this.words[r] = s, this.length++)
                        }
                        if (0 !== n) {
                            for (r = this.length - 1; r >= 0; r--) this.words[r + n] = this.words[r];
                            for (r = 0; r < n; r++) this.words[r] = 0;
                            this.length += n
                        }
                        return this.strip()
                    }, o.prototype.ishln = function(t) {
                        return e(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, r, i) {
                        var n;
                        e("number" == typeof t && t >= 0), n = r ? (r - r % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            u = 67108863 ^ 67108863 >>> o << o,
                            h = i;
                        if (n -= s, n = Math.max(0, n), h) {
                            for (var a = 0; a < s; a++) h.words[a] = this.words[a];
                            h.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, a = 0; a < this.length; a++) this.words[a] = this.words[a + s];
                        else this.words[0] = 0, this.length = 1;
                        var l = 0;
                        for (a = this.length - 1; a >= 0 && (0 !== l || a >= n); a--) {
                            var f = 0 | this.words[a];
                            this.words[a] = l << 26 - o | f >>> o, l = f & u
                        }
                        return h && 0 !== l && (h.words[h.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, o.prototype.ishrn = function(t, r, i) {
                        return e(0 === this.negative), this.iushrn(t, r, i)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var r = t % 26,
                            i = (t - r) / 26,
                            n = 1 << r;
                        return !(this.length <= i) && !!(this.words[i] & n)
                    }, o.prototype.imaskn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var r = t % 26,
                            i = (t - r) / 26;
                        if (e(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;
                        if (0 !== r && i++, this.length = Math.min(i, this.length), 0 !== r) {
                            var n = 67108863 ^ 67108863 >>> r << r;
                            this.words[this.length - 1] &= n
                        }
                        return this.strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return e("number" == typeof t), e(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var r = 0; r < this.length && this.words[r] >= 67108864; r++) this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
                        return this.length = Math.max(this.length, r + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (e("number" == typeof t), e(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var r = 0; r < this.length && this.words[r] < 0; r++) this.words[r] += 67108864, this.words[r + 1] -= 1;
                        return this.strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, r, i) {
                        var n, o, s = t.length + i;
                        this._expand(s);
                        var u = 0;
                        for (n = 0; n < t.length; n++) {
                            o = (0 | this.words[n + i]) + u;
                            var h = (0 | t.words[n]) * r;
                            u = ((o -= 67108863 & h) >> 26) - (h / 67108864 | 0), this.words[n + i] = 67108863 & o
                        }
                        for (; n < this.length - i; n++) u = (o = (0 | this.words[n + i]) + u) >> 26, this.words[n + i] = 67108863 & o;
                        if (0 === u) return this.strip();
                        for (e(-1 === u), u = 0, n = 0; n < this.length; n++) u = (o = -(0 | this.words[n]) + u) >> 26, this.words[n] = 67108863 & o;
                        return this.negative = 1, this.strip()
                    }, o.prototype._wordDiv = function(t, r) {
                        var i = (this.length, t.length),
                            e = this.clone(),
                            n = t,
                            s = 0 | n.words[n.length - 1];
                        0 !== (i = 26 - this._countBits(s)) && (n = n.ushln(i), e.iushln(i), s = 0 | n.words[n.length - 1]);
                        var u, h = e.length - n.length;
                        if ("mod" !== r) {
                            (u = new o(null)).length = h + 1, u.words = new Array(u.length);
                            for (var a = 0; a < u.length; a++) u.words[a] = 0
                        }
                        var l = e.clone()._ishlnsubmul(n, 1, h);
                        0 === l.negative && (e = l, u && (u.words[h] = 1));
                        for (var f = h - 1; f >= 0; f--) {
                            var m = 67108864 * (0 | e.words[n.length + f]) + (0 | e.words[n.length + f - 1]);
                            for (m = Math.min(m / s | 0, 67108863), e._ishlnsubmul(n, m, f); 0 !== e.negative;) m--, e.negative = 0, e._ishlnsubmul(n, 1, f), e.isZero() || (e.negative ^= 1);
                            u && (u.words[f] = m)
                        }
                        return u && u.strip(), e.strip(), "div" !== r && 0 !== i && e.iushrn(i), {
                            div: u || null,
                            mod: e
                        }
                    }, o.prototype.divmod = function(t, r, i) {
                        return e(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (u = this.neg().divmod(t, r), "mod" !== r && (n = u.div.neg()), "div" !== r && (s = u.mod.neg(), i && 0 !== s.negative && s.iadd(t)), {
                            div: n,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (u = this.divmod(t.neg(), r), "mod" !== r && (n = u.div.neg()), {
                            div: n,
                            mod: u.mod
                        }) : 0 != (this.negative & t.negative) ? (u = this.neg().divmod(t.neg(), r), "div" !== r && (s = u.mod.neg(), i && 0 !== s.negative && s.isub(t)), {
                            div: u.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === r ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === r ? {
                            div: null,
                            mod: new o(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modn(t.words[0]))
                        } : this._wordDiv(t, r);
                        var n, s, u
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var r = this.divmod(t);
                        if (r.mod.isZero()) return r.div;
                        var i = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                            e = t.ushrn(1),
                            n = t.andln(1),
                            o = i.cmp(e);
                        return o < 0 || 1 === n && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, o.prototype.modn = function(t) {
                        e(t <= 67108863);
                        for (var r = (1 << 26) % t, i = 0, n = this.length - 1; n >= 0; n--) i = (r * i + (0 | this.words[n])) % t;
                        return i
                    }, o.prototype.idivn = function(t) {
                        e(t <= 67108863);
                        for (var r = 0, i = this.length - 1; i >= 0; i--) {
                            var n = (0 | this.words[i]) + 67108864 * r;
                            this.words[i] = n / t | 0, r = n % t
                        }
                        return this.strip()
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        e(0 === t.negative), e(!t.isZero());
                        var r = this,
                            i = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        for (var n = new o(1), s = new o(0), u = new o(0), h = new o(1), a = 0; r.isEven() && i.isEven();) r.iushrn(1), i.iushrn(1), ++a;
                        for (var l = i.clone(), f = r.clone(); !r.isZero();) {
                            for (var m = 0, c = 1; 0 == (r.words[0] & c) && m < 26; ++m, c <<= 1);
                            if (m > 0)
                                for (r.iushrn(m); m-- > 0;)(n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(f)), n.iushrn(1), s.iushrn(1);
                            for (var d = 0, p = 1; 0 == (i.words[0] & p) && d < 26; ++d, p <<= 1);
                            if (d > 0)
                                for (i.iushrn(d); d-- > 0;)(u.isOdd() || h.isOdd()) && (u.iadd(l), h.isub(f)), u.iushrn(1), h.iushrn(1);
                            r.cmp(i) >= 0 ? (r.isub(i), n.isub(u), s.isub(h)) : (i.isub(r), u.isub(n), h.isub(s))
                        }
                        return {
                            a: u,
                            b: h,
                            gcd: i.iushln(a)
                        }
                    }, o.prototype._invmp = function(t) {
                        e(0 === t.negative), e(!t.isZero());
                        var r = this,
                            i = t.clone();
                        r = 0 !== r.negative ? r.umod(t) : r.clone();
                        for (var n, s = new o(1), u = new o(0), h = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                            for (var a = 0, l = 1; 0 == (r.words[0] & l) && a < 26; ++a, l <<= 1);
                            if (a > 0)
                                for (r.iushrn(a); a-- > 0;) s.isOdd() && s.iadd(h), s.iushrn(1);
                            for (var f = 0, m = 1; 0 == (i.words[0] & m) && f < 26; ++f, m <<= 1);
                            if (f > 0)
                                for (i.iushrn(f); f-- > 0;) u.isOdd() && u.iadd(h), u.iushrn(1);
                            r.cmp(i) >= 0 ? (r.isub(i), s.isub(u)) : (i.isub(r), u.isub(s))
                        }
                        return (n = 0 === r.cmpn(1) ? s : u).cmpn(0) < 0 && n.iadd(t), n
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var r = this.clone(),
                            i = t.clone();
                        r.negative = 0, i.negative = 0;
                        for (var e = 0; r.isEven() && i.isEven(); e++) r.iushrn(1), i.iushrn(1);
                        for (;;) {
                            for (; r.isEven();) r.iushrn(1);
                            for (; i.isEven();) i.iushrn(1);
                            var n = r.cmp(i);
                            if (n < 0) {
                                var o = r;
                                r = i, i = o
                            } else if (0 === n || 0 === i.cmpn(1)) break;
                            r.isub(i)
                        }
                        return i.iushln(e)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        e("number" == typeof t);
                        var r = t % 26,
                            i = (t - r) / 26,
                            n = 1 << r;
                        if (this.length <= i) return this._expand(i + 1), this.words[i] |= n, this;
                        for (var o = n, s = i; 0 !== o && s < this.length; s++) {
                            var u = 0 | this.words[s];
                            o = (u += o) >>> 26, u &= 67108863, this.words[s] = u
                        }
                        return 0 !== o && (this.words[s] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var r, i = t < 0;
                        if (0 !== this.negative && !i) return -1;
                        if (0 === this.negative && i) return 1;
                        if (this.strip(), this.length > 1) r = 1;
                        else {
                            i && (t = -t), e(t <= 67108863, "Number is too big");
                            var n = 0 | this.words[0];
                            r = n === t ? 0 : n < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var r = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var r = 0, i = this.length - 1; i >= 0; i--) {
                            var e = 0 | this.words[i],
                                n = 0 | t.words[i];
                            if (e !== n) {
                                e < n ? r = -1 : e > n && (r = 1);
                                break
                            }
                        }
                        return r
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
                        return new x(t)
                    }, o.prototype.toRed = function(t) {
                        return e(!this.red, "Already a number in reduction context"), e(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return e(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return e(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return e(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return e(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return e(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return e(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return e(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return e(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return e(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return e(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return e(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return e(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return e(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var g = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function v(t, r) {
                        this.name = t, this.p = new o(r, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function w() {
                        v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function y() {
                        v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function M() {
                        v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function b() {
                        v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function x(t) {
                        if ("string" == typeof t) {
                            var r = o._prime(t);
                            this.m = r.p, this.prime = r
                        } else e(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function _(t) {
                        x.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    v.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, v.prototype.ireduce = function(t) {
                        var r, i = t;
                        do {
                            this.split(i, this.tmp), r = (i = (i = this.imulK(i)).iadd(this.tmp)).bitLength()
                        } while (r > this.n);
                        var e = r < this.n ? -1 : i.ucmp(this.p);
                        return 0 === e ? (i.words[0] = 0, i.length = 1) : e > 0 ? i.isub(this.p) : i.strip(), i
                    }, v.prototype.split = function(t, r) {
                        t.iushrn(this.n, 0, r)
                    }, v.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, n(w, v), w.prototype.split = function(t, r) {
                        for (var i = Math.min(t.length, 9), e = 0; e < i; e++) r.words[e] = t.words[e];
                        if (r.length = i, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var n = t.words[9];
                        for (r.words[r.length++] = 4194303 & n, e = 10; e < t.length; e++) {
                            var o = 0 | t.words[e];
                            t.words[e - 10] = (4194303 & o) << 4 | n >>> 22, n = o
                        }
                        n >>>= 22, t.words[e - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, w.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var e = 0 | t.words[i];
                            r += 977 * e, t.words[i] = 67108863 & r, r = 64 * e + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, n(y, v), n(M, v), n(b, v), b.prototype.imulK = function(t) {
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var e = 19 * (0 | t.words[i]) + r,
                                n = 67108863 & e;
                            e >>>= 26, t.words[i] = n, r = e
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, o._prime = function(t) {
                        if (g[t]) return g[t];
                        var r;
                        if ("k256" === t) r = new w;
                        else if ("p224" === t) r = new y;
                        else if ("p192" === t) r = new M;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new b
                        }
                        return g[t] = r, r
                    }, x.prototype._verify1 = function(t) {
                        e(0 === t.negative, "red works only with positives"), e(t.red, "red works only with red numbers")
                    }, x.prototype._verify2 = function(t, r) {
                        e(0 == (t.negative | r.negative), "red works only with positives"), e(t.red && t.red === r.red, "red works only with red numbers")
                    }, x.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                    }, x.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, x.prototype.add = function(t, r) {
                        this._verify2(t, r);
                        var i = t.add(r);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this)
                    }, x.prototype.iadd = function(t, r) {
                        this._verify2(t, r);
                        var i = t.iadd(r);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i
                    }, x.prototype.sub = function(t, r) {
                        this._verify2(t, r);
                        var i = t.sub(r);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this)
                    }, x.prototype.isub = function(t, r) {
                        this._verify2(t, r);
                        var i = t.isub(r);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i
                    }, x.prototype.shl = function(t, r) {
                        return this._verify1(t), this.imod(t.ushln(r))
                    }, x.prototype.imul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.imul(r))
                    }, x.prototype.mul = function(t, r) {
                        return this._verify2(t, r), this.imod(t.mul(r))
                    }, x.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, x.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, x.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var r = this.m.andln(3);
                        if (e(r % 2 == 1), 3 === r) {
                            var i = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, i)
                        }
                        for (var n = this.m.subn(1), s = 0; !n.isZero() && 0 === n.andln(1);) s++, n.iushrn(1);
                        e(!n.isZero());
                        var u = new o(1).toRed(this),
                            h = u.redNeg(),
                            a = this.m.subn(1).iushrn(1),
                            l = this.m.bitLength();
                        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, a).cmp(h);) l.redIAdd(h);
                        for (var f = this.pow(l, n), m = this.pow(t, n.addn(1).iushrn(1)), c = this.pow(t, n), d = s; 0 !== c.cmp(u);) {
                            for (var p = c, g = 0; 0 !== p.cmp(u); g++) p = p.redSqr();
                            e(g < d);
                            var v = this.pow(f, new o(1).iushln(d - g - 1));
                            m = m.redMul(v), f = v.redSqr(), c = c.redMul(f), d = g
                        }
                        return m
                    }, x.prototype.invm = function(t) {
                        var r = t._invmp(this.m);
                        return 0 !== r.negative ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r)
                    }, x.prototype.pow = function(t, r) {
                        if (r.isZero()) return new o(1);
                        if (0 === r.cmpn(1)) return t.clone();
                        var i = new Array(16);
                        i[0] = new o(1).toRed(this), i[1] = t;
                        for (var e = 2; e < i.length; e++) i[e] = this.mul(i[e - 1], t);
                        var n = i[0],
                            s = 0,
                            u = 0,
                            h = r.bitLength() % 26;
                        for (0 === h && (h = 26), e = r.length - 1; e >= 0; e--) {
                            for (var a = r.words[e], l = h - 1; l >= 0; l--) {
                                var f = a >> l & 1;
                                n !== i[0] && (n = this.sqr(n)), 0 !== f || 0 !== s ? (s <<= 1, s |= f, (4 === ++u || 0 === e && 0 === l) && (n = this.mul(n, i[s]), u = 0, s = 0)) : u = 0
                            }
                            h = 26
                        }
                        return n
                    }, x.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, x.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, o.mont = function(t) {
                        return new _(t)
                    }, n(_, x), _.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, _.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, _.prototype.imul = function(t, r) {
                        if (t.isZero() || r.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var i = t.imul(r),
                            e = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = i.isub(e).iushrn(this.shift),
                            o = n;
                        return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
                    }, _.prototype.mul = function(t, r) {
                        if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
                        var i = t.mul(r),
                            e = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = i.isub(e).iushrn(this.shift),
                            s = n;
                        return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
                    }, _.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, i(81)(t))
        }
    }
]);