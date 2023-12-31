(window.webpackJsonp = window.webpackJsonp || []).push([
    [89], {
        109: function(e, t, r) {
            var BigInteger = r(1673);
            r(2938), e.exports = BigInteger
        },
        1134: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136),
                i = r(4176),
                o = r(4177),
                s = r(4178),
                u = r(4179),
                f = r(4180),
                c = r(4181),
                a = r(4182),
                l = r(4183),
                h = r(4184),
                p = r(4185),
                d = r(4186),
                y = r(4187),
                g = r(4188),
                m = r(4189),
                T = r(2011),
                w = r(4190),
                v = r(4191),
                E = r(4192),
                b = r(4193),
                I = r(4194),
                S = {
                    unsignedTx: o,
                    globalXpub: i,
                    checkPubkey: w.makeChecker([])
                };
            t.globals = S;
            const k = {
                nonWitnessUtxo: f,
                partialSig: c,
                sighashType: l,
                finalScriptSig: s,
                finalScriptWitness: u,
                porCommitment: a,
                witnessUtxo: g,
                bip32Derivation: T.makeConverter(n.InputTypes.BIP32_DERIVATION),
                redeemScript: v.makeConverter(n.InputTypes.REDEEM_SCRIPT),
                witnessScript: I.makeConverter(n.InputTypes.WITNESS_SCRIPT),
                checkPubkey: w.makeChecker([n.InputTypes.PARTIAL_SIG, n.InputTypes.BIP32_DERIVATION]),
                tapKeySig: h,
                tapScriptSig: y,
                tapLeafScript: p,
                tapBip32Derivation: E.makeConverter(n.InputTypes.TAP_BIP32_DERIVATION),
                tapInternalKey: b.makeConverter(n.InputTypes.TAP_INTERNAL_KEY),
                tapMerkleRoot: d
            };
            t.inputs = k;
            const B = {
                bip32Derivation: T.makeConverter(n.OutputTypes.BIP32_DERIVATION),
                redeemScript: v.makeConverter(n.OutputTypes.REDEEM_SCRIPT),
                witnessScript: I.makeConverter(n.OutputTypes.WITNESS_SCRIPT),
                checkPubkey: w.makeChecker([n.OutputTypes.BIP32_DERIVATION]),
                tapBip32Derivation: E.makeConverter(n.OutputTypes.TAP_BIP32_DERIVATION),
                tapTree: m,
                tapInternalKey: b.makeConverter(n.OutputTypes.TAP_INTERNAL_KEY)
            };
            t.outputs = B
        },
        1135: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(432);

            function i(e) {
                const t = e.key.length,
                    r = e.value.length,
                    i = n.encodingLength(t),
                    o = n.encodingLength(r),
                    s = Buffer.allocUnsafe(i + t + o + r);
                return n.encode(t, s, 0), e.key.copy(s, i), n.encode(r, s, i + t), e.value.copy(s, i + t + o), s
            }

            function o(e, t) {
                if ("number" != typeof e) throw new Error("cannot write a non-number as a number");
                if (e < 0) throw new Error("specified a negative value for writing an unsigned value");
                if (e > t) throw new Error("RangeError: value out of range");
                if (Math.floor(e) !== e) throw new Error("value has a fractional component")
            }
            t.range = e => [...Array(e).keys()], t.reverseBuffer = function(e) {
                if (e.length < 1) return e;
                let t = e.length - 1,
                    r = 0;
                for (let n = 0; n < e.length / 2; n++) r = e[n], e[n] = e[t], e[t] = r, t--;
                return e
            }, t.keyValsToBuffer = function(e) {
                const t = e.map(i);
                return t.push(Buffer.from([0])), Buffer.concat(t)
            }, t.keyValToBuffer = i, t.readUInt64LE = function(e, t) {
                const r = e.readUInt32LE(t);
                let n = e.readUInt32LE(t + 4);
                return n *= 4294967296, o(n + r, 9007199254740991), n + r
            }, t.writeUInt64LE = function(e, t, r) {
                return o(t, 9007199254740991), e.writeInt32LE(-1 & t, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8
            }
        },
        136: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e[e.UNSIGNED_TX = 0] = "UNSIGNED_TX", e[e.GLOBAL_XPUB = 1] = "GLOBAL_XPUB"
                }(t.GlobalTypes || (t.GlobalTypes = {})), t.GLOBAL_TYPE_NAMES = ["unsignedTx", "globalXpub"],
                function(e) {
                    e[e.NON_WITNESS_UTXO = 0] = "NON_WITNESS_UTXO", e[e.WITNESS_UTXO = 1] = "WITNESS_UTXO", e[e.PARTIAL_SIG = 2] = "PARTIAL_SIG", e[e.SIGHASH_TYPE = 3] = "SIGHASH_TYPE", e[e.REDEEM_SCRIPT = 4] = "REDEEM_SCRIPT", e[e.WITNESS_SCRIPT = 5] = "WITNESS_SCRIPT", e[e.BIP32_DERIVATION = 6] = "BIP32_DERIVATION", e[e.FINAL_SCRIPTSIG = 7] = "FINAL_SCRIPTSIG", e[e.FINAL_SCRIPTWITNESS = 8] = "FINAL_SCRIPTWITNESS", e[e.POR_COMMITMENT = 9] = "POR_COMMITMENT", e[e.TAP_KEY_SIG = 19] = "TAP_KEY_SIG", e[e.TAP_SCRIPT_SIG = 20] = "TAP_SCRIPT_SIG", e[e.TAP_LEAF_SCRIPT = 21] = "TAP_LEAF_SCRIPT", e[e.TAP_BIP32_DERIVATION = 22] = "TAP_BIP32_DERIVATION", e[e.TAP_INTERNAL_KEY = 23] = "TAP_INTERNAL_KEY", e[e.TAP_MERKLE_ROOT = 24] = "TAP_MERKLE_ROOT"
                }(t.InputTypes || (t.InputTypes = {})), t.INPUT_TYPE_NAMES = ["nonWitnessUtxo", "witnessUtxo", "partialSig", "sighashType", "redeemScript", "witnessScript", "bip32Derivation", "finalScriptSig", "finalScriptWitness", "porCommitment", "tapKeySig", "tapScriptSig", "tapLeafScript", "tapBip32Derivation", "tapInternalKey", "tapMerkleRoot"],
                function(e) {
                    e[e.REDEEM_SCRIPT = 0] = "REDEEM_SCRIPT", e[e.WITNESS_SCRIPT = 1] = "WITNESS_SCRIPT", e[e.BIP32_DERIVATION = 2] = "BIP32_DERIVATION", e[e.TAP_INTERNAL_KEY = 5] = "TAP_INTERNAL_KEY", e[e.TAP_TREE = 6] = "TAP_TREE", e[e.TAP_BIP32_DERIVATION = 7] = "TAP_BIP32_DERIVATION"
                }(t.OutputTypes || (t.OutputTypes = {})), t.OUTPUT_TYPE_NAMES = ["redeemScript", "witnessScript", "bip32Derivation", "tapInternalKey", "tapTree", "tapBip32Derivation"]
        },
        1673: function(e, t, r) {
            function BigInteger(e, t, r) {
                if (!(this instanceof BigInteger)) return new BigInteger(e, t, r);
                null != e && ("number" == typeof e ? this.fromNumber(e, t, r) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
            }
            var n = BigInteger.prototype;
            n.__bigi = r(2937).version, BigInteger.isBigInteger = function(e, t) {
                return e && e.__bigi && (!t || e.__bigi === n.__bigi)
            }, BigInteger.prototype.am = function(e, t, r, n, i, o) {
                for (; --o >= 0;) {
                    var s = t * this[e++] + r[n] + i;
                    i = Math.floor(s / 67108864), r[n++] = 67108863 & s
                }
                return i
            }, BigInteger.prototype.DB = 26, BigInteger.prototype.DM = 67108863;
            var i = BigInteger.prototype.DV = 1 << 26;
            BigInteger.prototype.FV = Math.pow(2, 52), BigInteger.prototype.F1 = 26, BigInteger.prototype.F2 = 0;
            var o, s, u = new Array;
            for (o = "0".charCodeAt(0), s = 0; s <= 9; ++s) u[o++] = s;
            for (o = "a".charCodeAt(0), s = 10; s < 36; ++s) u[o++] = s;
            for (o = "A".charCodeAt(0), s = 10; s < 36; ++s) u[o++] = s;

            function f(e) {
                return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)
            }

            function c(e, t) {
                var r = u[e.charCodeAt(t)];
                return null == r ? -1 : r
            }

            function a(e) {
                var t = new BigInteger;
                return t.fromInt(e), t
            }

            function l(e) {
                var t, r = 1;
                return 0 != (t = e >>> 16) && (e = t, r += 16), 0 != (t = e >> 8) && (e = t, r += 8), 0 != (t = e >> 4) && (e = t, r += 4), 0 != (t = e >> 2) && (e = t, r += 2), 0 != (t = e >> 1) && (e = t, r += 1), r
            }

            function h(e) {
                this.m = e
            }

            function p(e) {
                this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
            }

            function d(e, t) {
                return e & t
            }

            function y(e, t) {
                return e | t
            }

            function g(e, t) {
                return e ^ t
            }

            function m(e, t) {
                return e & ~t
            }

            function T(e) {
                if (0 == e) return -1;
                var t = 0;
                return 0 == (65535 & e) && (e >>= 16, t += 16), 0 == (255 & e) && (e >>= 8, t += 8), 0 == (15 & e) && (e >>= 4, t += 4), 0 == (3 & e) && (e >>= 2, t += 2), 0 == (1 & e) && ++t, t
            }

            function w(e) {
                for (var t = 0; 0 != e;) e &= e - 1, ++t;
                return t
            }

            function v() {}

            function E(e) {
                return e
            }

            function b(e) {
                this.r2 = new BigInteger, this.q3 = new BigInteger, BigInteger.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e), this.m = e
            }
            h.prototype.convert = function(e) {
                return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
            }, h.prototype.revert = function(e) {
                return e
            }, h.prototype.reduce = function(e) {
                e.divRemTo(this.m, null, e)
            }, h.prototype.mulTo = function(e, t, r) {
                e.multiplyTo(t, r), this.reduce(r)
            }, h.prototype.sqrTo = function(e, t) {
                e.squareTo(t), this.reduce(t)
            }, p.prototype.convert = function(e) {
                var t = new BigInteger;
                return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(t, t), t
            }, p.prototype.revert = function(e) {
                var t = new BigInteger;
                return e.copyTo(t), this.reduce(t), t
            }, p.prototype.reduce = function(e) {
                for (; e.t <= this.mt2;) e[e.t++] = 0;
                for (var t = 0; t < this.m.t; ++t) {
                    var r = 32767 & e[t],
                        n = r * this.mpl + ((r * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                    for (e[r = t + this.m.t] += this.m.am(0, n, e, t, 0, this.m.t); e[r] >= e.DV;) e[r] -= e.DV, e[++r]++
                }
                e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
            }, p.prototype.mulTo = function(e, t, r) {
                e.multiplyTo(t, r), this.reduce(r)
            }, p.prototype.sqrTo = function(e, t) {
                e.squareTo(t), this.reduce(t)
            }, n.copyTo = function(e) {
                for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
                e.t = this.t, e.s = this.s
            }, n.fromInt = function(e) {
                this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + i : this.t = 0
            }, n.fromString = function(e, t) {
                var r;
                if (16 == t) r = 4;
                else if (8 == t) r = 3;
                else if (256 == t) r = 8;
                else if (2 == t) r = 1;
                else if (32 == t) r = 5;
                else {
                    if (4 != t) return void this.fromRadix(e, t);
                    r = 2
                }
                this.t = 0, this.s = 0;
                for (var n = e.length, i = !1, o = 0; --n >= 0;) {
                    var s = 8 == r ? 255 & e[n] : c(e, n);
                    s < 0 ? "-" == e.charAt(n) && (i = !0) : (i = !1, 0 == o ? this[this.t++] = s : o + r > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - o) - 1) << o, this[this.t++] = s >> this.DB - o) : this[this.t - 1] |= s << o, (o += r) >= this.DB && (o -= this.DB))
                }
                8 == r && 0 != (128 & e[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)), this.clamp(), i && BigInteger.ZERO.subTo(this, this)
            }, n.clamp = function() {
                for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t
            }, n.dlShiftTo = function(e, t) {
                var r;
                for (r = this.t - 1; r >= 0; --r) t[r + e] = this[r];
                for (r = e - 1; r >= 0; --r) t[r] = 0;
                t.t = this.t + e, t.s = this.s
            }, n.drShiftTo = function(e, t) {
                for (var r = e; r < this.t; ++r) t[r - e] = this[r];
                t.t = Math.max(this.t - e, 0), t.s = this.s
            }, n.lShiftTo = function(e, t) {
                var r, n = e % this.DB,
                    i = this.DB - n,
                    o = (1 << i) - 1,
                    s = Math.floor(e / this.DB),
                    u = this.s << n & this.DM;
                for (r = this.t - 1; r >= 0; --r) t[r + s + 1] = this[r] >> i | u, u = (this[r] & o) << n;
                for (r = s - 1; r >= 0; --r) t[r] = 0;
                t[s] = u, t.t = this.t + s + 1, t.s = this.s, t.clamp()
            }, n.rShiftTo = function(e, t) {
                t.s = this.s;
                var r = Math.floor(e / this.DB);
                if (r >= this.t) t.t = 0;
                else {
                    var n = e % this.DB,
                        i = this.DB - n,
                        o = (1 << n) - 1;
                    t[0] = this[r] >> n;
                    for (var s = r + 1; s < this.t; ++s) t[s - r - 1] |= (this[s] & o) << i, t[s - r] = this[s] >> n;
                    n > 0 && (t[this.t - r - 1] |= (this.s & o) << i), t.t = this.t - r, t.clamp()
                }
            }, n.subTo = function(e, t) {
                for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i;) n += this[r] - e[r], t[r++] = n & this.DM, n >>= this.DB;
                if (e.t < this.t) {
                    for (n -= e.s; r < this.t;) n += this[r], t[r++] = n & this.DM, n >>= this.DB;
                    n += this.s
                } else {
                    for (n += this.s; r < e.t;) n -= e[r], t[r++] = n & this.DM, n >>= this.DB;
                    n -= e.s
                }
                t.s = n < 0 ? -1 : 0, n < -1 ? t[r++] = this.DV + n : n > 0 && (t[r++] = n), t.t = r, t.clamp()
            }, n.multiplyTo = function(e, t) {
                var r = this.abs(),
                    n = e.abs(),
                    i = r.t;
                for (t.t = i + n.t; --i >= 0;) t[i] = 0;
                for (i = 0; i < n.t; ++i) t[i + r.t] = r.am(0, n[i], t, i, 0, r.t);
                t.s = 0, t.clamp(), this.s != e.s && BigInteger.ZERO.subTo(t, t)
            }, n.squareTo = function(e) {
                for (var t = this.abs(), r = e.t = 2 * t.t; --r >= 0;) e[r] = 0;
                for (r = 0; r < t.t - 1; ++r) {
                    var n = t.am(r, t[r], e, 2 * r, 0, 1);
                    (e[r + t.t] += t.am(r + 1, 2 * t[r], e, 2 * r + 1, n, t.t - r - 1)) >= t.DV && (e[r + t.t] -= t.DV, e[r + t.t + 1] = 1)
                }
                e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)), e.s = 0, e.clamp()
            }, n.divRemTo = function(e, t, r) {
                var n = e.abs();
                if (!(n.t <= 0)) {
                    var i = this.abs();
                    if (i.t < n.t) return null != t && t.fromInt(0), void(null != r && this.copyTo(r));
                    null == r && (r = new BigInteger);
                    var o = new BigInteger,
                        s = this.s,
                        u = e.s,
                        f = this.DB - l(n[n.t - 1]);
                    f > 0 ? (n.lShiftTo(f, o), i.lShiftTo(f, r)) : (n.copyTo(o), i.copyTo(r));
                    var c = o.t,
                        a = o[c - 1];
                    if (0 != a) {
                        var h = a * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0),
                            p = this.FV / h,
                            d = (1 << this.F1) / h,
                            y = 1 << this.F2,
                            g = r.t,
                            m = g - c,
                            T = null == t ? new BigInteger : t;
                        for (o.dlShiftTo(m, T), r.compareTo(T) >= 0 && (r[r.t++] = 1, r.subTo(T, r)), BigInteger.ONE.dlShiftTo(c, T), T.subTo(o, o); o.t < c;) o[o.t++] = 0;
                        for (; --m >= 0;) {
                            var w = r[--g] == a ? this.DM : Math.floor(r[g] * p + (r[g - 1] + y) * d);
                            if ((r[g] += o.am(0, w, r, m, 0, c)) < w)
                                for (o.dlShiftTo(m, T), r.subTo(T, r); r[g] < --w;) r.subTo(T, r)
                        }
                        null != t && (r.drShiftTo(c, t), s != u && BigInteger.ZERO.subTo(t, t)), r.t = c, r.clamp(), f > 0 && r.rShiftTo(f, r), s < 0 && BigInteger.ZERO.subTo(r, r)
                    }
                }
            }, n.invDigit = function() {
                if (this.t < 1) return 0;
                var e = this[0];
                if (0 == (1 & e)) return 0;
                var t = 3 & e;
                return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t
            }, n.isEven = function() {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }, n.exp = function(e, t) {
                if (e > 4294967295 || e < 1) return BigInteger.ONE;
                var r = new BigInteger,
                    n = new BigInteger,
                    i = t.convert(this),
                    o = l(e) - 1;
                for (i.copyTo(r); --o >= 0;)
                    if (t.sqrTo(r, n), (e & 1 << o) > 0) t.mulTo(n, i, r);
                    else {
                        var s = r;
                        r = n, n = s
                    } return t.revert(r)
            }, n.toString = function(e) {
                var t;
                if (this.s < 0) return "-" + this.negate().toString(e);
                if (16 == e) t = 4;
                else if (8 == e) t = 3;
                else if (2 == e) t = 1;
                else if (32 == e) t = 5;
                else {
                    if (4 != e) return this.toRadix(e);
                    t = 2
                }
                var r, n = (1 << t) - 1,
                    i = !1,
                    o = "",
                    s = this.t,
                    u = this.DB - s * this.DB % t;
                if (s-- > 0)
                    for (u < this.DB && (r = this[s] >> u) > 0 && (i = !0, o = f(r)); s >= 0;) u < t ? (r = (this[s] & (1 << u) - 1) << t - u, r |= this[--s] >> (u += this.DB - t)) : (r = this[s] >> (u -= t) & n, u <= 0 && (u += this.DB, --s)), r > 0 && (i = !0), i && (o += f(r));
                return i ? o : "0"
            }, n.negate = function() {
                var e = new BigInteger;
                return BigInteger.ZERO.subTo(this, e), e
            }, n.abs = function() {
                return this.s < 0 ? this.negate() : this
            }, n.compareTo = function(e) {
                var t = this.s - e.s;
                if (0 != t) return t;
                var r = this.t;
                if (0 != (t = r - e.t)) return this.s < 0 ? -t : t;
                for (; --r >= 0;)
                    if (0 != (t = this[r] - e[r])) return t;
                return 0
            }, n.bitLength = function() {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + l(this[this.t - 1] ^ this.s & this.DM)
            }, n.byteLength = function() {
                return this.bitLength() >> 3
            }, n.mod = function(e) {
                var t = new BigInteger;
                return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(BigInteger.ZERO) > 0 && e.subTo(t, t), t
            }, n.modPowInt = function(e, t) {
                var r;
                return r = e < 256 || t.isEven() ? new h(t) : new p(t), this.exp(e, r)
            }, v.prototype.convert = E, v.prototype.revert = E, v.prototype.mulTo = function(e, t, r) {
                e.multiplyTo(t, r)
            }, v.prototype.sqrTo = function(e, t) {
                e.squareTo(t)
            }, b.prototype.convert = function(e) {
                if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
                if (e.compareTo(this.m) < 0) return e;
                var t = new BigInteger;
                return e.copyTo(t), this.reduce(t), t
            }, b.prototype.revert = function(e) {
                return e
            }, b.prototype.reduce = function(e) {
                for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0;) e.dAddOffset(1, this.m.t + 1);
                for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;) e.subTo(this.m, e)
            }, b.prototype.mulTo = function(e, t, r) {
                e.multiplyTo(t, r), this.reduce(r)
            }, b.prototype.sqrTo = function(e, t) {
                e.squareTo(t), this.reduce(t)
            };
            var I = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                S = (1 << 26) / I[I.length - 1];
            n.chunkSize = function(e) {
                return Math.floor(Math.LN2 * this.DB / Math.log(e))
            }, n.toRadix = function(e) {
                if (null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36) return "0";
                var t = this.chunkSize(e),
                    r = Math.pow(e, t),
                    n = a(r),
                    i = new BigInteger,
                    o = new BigInteger,
                    s = "";
                for (this.divRemTo(n, i, o); i.signum() > 0;) s = (r + o.intValue()).toString(e).substr(1) + s, i.divRemTo(n, i, o);
                return o.intValue().toString(e) + s
            }, n.fromRadix = function(e, t) {
                this.fromInt(0), null == t && (t = 10);
                for (var r = this.chunkSize(t), n = Math.pow(t, r), i = !1, o = 0, s = 0, u = 0; u < e.length; ++u) {
                    var f = c(e, u);
                    f < 0 ? "-" == e.charAt(u) && 0 == this.signum() && (i = !0) : (s = t * s + f, ++o >= r && (this.dMultiply(n), this.dAddOffset(s, 0), o = 0, s = 0))
                }
                o > 0 && (this.dMultiply(Math.pow(t, o)), this.dAddOffset(s, 0)), i && BigInteger.ZERO.subTo(this, this)
            }, n.fromNumber = function(e, t, r) {
                if ("number" == typeof t)
                    if (e < 2) this.fromInt(1);
                    else
                        for (this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(e - 1), y, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(t);) this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(BigInteger.ONE.shiftLeft(e - 1), this);
                else {
                    var n = new Array,
                        i = 7 & e;
                    n.length = 1 + (e >> 3), t.nextBytes(n), i > 0 ? n[0] &= (1 << i) - 1 : n[0] = 0, this.fromString(n, 256)
                }
            }, n.bitwiseTo = function(e, t, r) {
                var n, i, o = Math.min(e.t, this.t);
                for (n = 0; n < o; ++n) r[n] = t(this[n], e[n]);
                if (e.t < this.t) {
                    for (i = e.s & this.DM, n = o; n < this.t; ++n) r[n] = t(this[n], i);
                    r.t = this.t
                } else {
                    for (i = this.s & this.DM, n = o; n < e.t; ++n) r[n] = t(i, e[n]);
                    r.t = e.t
                }
                r.s = t(this.s, e.s), r.clamp()
            }, n.changeBit = function(e, t) {
                var r = BigInteger.ONE.shiftLeft(e);
                return this.bitwiseTo(r, t, r), r
            }, n.addTo = function(e, t) {
                for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i;) n += this[r] + e[r], t[r++] = n & this.DM, n >>= this.DB;
                if (e.t < this.t) {
                    for (n += e.s; r < this.t;) n += this[r], t[r++] = n & this.DM, n >>= this.DB;
                    n += this.s
                } else {
                    for (n += this.s; r < e.t;) n += e[r], t[r++] = n & this.DM, n >>= this.DB;
                    n += e.s
                }
                t.s = n < 0 ? -1 : 0, n > 0 ? t[r++] = n : n < -1 && (t[r++] = this.DV + n), t.t = r, t.clamp()
            }, n.dMultiply = function(e) {
                this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp()
            }, n.dAddOffset = function(e, t) {
                if (0 != e) {
                    for (; this.t <= t;) this[this.t++] = 0;
                    for (this[t] += e; this[t] >= this.DV;) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), ++this[t]
                }
            }, n.multiplyLowerTo = function(e, t, r) {
                var n, i = Math.min(this.t + e.t, t);
                for (r.s = 0, r.t = i; i > 0;) r[--i] = 0;
                for (n = r.t - this.t; i < n; ++i) r[i + this.t] = this.am(0, e[i], r, i, 0, this.t);
                for (n = Math.min(e.t, t); i < n; ++i) this.am(0, e[i], r, i, 0, t - i);
                r.clamp()
            }, n.multiplyUpperTo = function(e, t, r) {
                --t;
                var n = r.t = this.t + e.t - t;
                for (r.s = 0; --n >= 0;) r[n] = 0;
                for (n = Math.max(t - this.t, 0); n < e.t; ++n) r[this.t + n - t] = this.am(t - n, e[n], r, 0, 0, this.t + n - t);
                r.clamp(), r.drShiftTo(1, r)
            }, n.modInt = function(e) {
                if (e <= 0) return 0;
                var t = this.DV % e,
                    r = this.s < 0 ? e - 1 : 0;
                if (this.t > 0)
                    if (0 == t) r = this[0] % e;
                    else
                        for (var n = this.t - 1; n >= 0; --n) r = (t * r + this[n]) % e;
                return r
            }, n.millerRabin = function(e) {
                var t = this.subtract(BigInteger.ONE),
                    r = t.getLowestSetBit();
                if (r <= 0) return !1;
                var n = t.shiftRight(r);
                (e = e + 1 >> 1) > I.length && (e = I.length);
                for (var i = new BigInteger(null), o = [], s = 0; s < e; ++s) {
                    for (; f = I[Math.floor(Math.random() * I.length)], -1 != o.indexOf(f););
                    o.push(f), i.fromInt(f);
                    var u = i.modPow(n, this);
                    if (0 != u.compareTo(BigInteger.ONE) && 0 != u.compareTo(t)) {
                        for (var f = 1; f++ < r && 0 != u.compareTo(t);)
                            if (0 == (u = u.modPowInt(2, this)).compareTo(BigInteger.ONE)) return !1;
                        if (0 != u.compareTo(t)) return !1
                    }
                }
                return !0
            }, n.clone = function() {
                var e = new BigInteger;
                return this.copyTo(e), e
            }, n.intValue = function() {
                if (this.s < 0) {
                    if (1 == this.t) return this[0] - this.DV;
                    if (0 == this.t) return -1
                } else {
                    if (1 == this.t) return this[0];
                    if (0 == this.t) return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }, n.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }, n.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }, n.signum = function() {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }, n.toByteArray = function() {
                var e = this.t,
                    t = new Array;
                t[0] = this.s;
                var r, n = this.DB - e * this.DB % 8,
                    i = 0;
                if (e-- > 0)
                    for (n < this.DB && (r = this[e] >> n) != (this.s & this.DM) >> n && (t[i++] = r | this.s << this.DB - n); e >= 0;) n < 8 ? (r = (this[e] & (1 << n) - 1) << 8 - n, r |= this[--e] >> (n += this.DB - 8)) : (r = this[e] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --e)), 0 != (128 & r) && (r |= -256), 0 === i && (128 & this.s) != (128 & r) && ++i, (i > 0 || r != this.s) && (t[i++] = r);
                return t
            }, n.equals = function(e) {
                return 0 == this.compareTo(e)
            }, n.min = function(e) {
                return this.compareTo(e) < 0 ? this : e
            }, n.max = function(e) {
                return this.compareTo(e) > 0 ? this : e
            }, n.and = function(e) {
                var t = new BigInteger;
                return this.bitwiseTo(e, d, t), t
            }, n.or = function(e) {
                var t = new BigInteger;
                return this.bitwiseTo(e, y, t), t
            }, n.xor = function(e) {
                var t = new BigInteger;
                return this.bitwiseTo(e, g, t), t
            }, n.andNot = function(e) {
                var t = new BigInteger;
                return this.bitwiseTo(e, m, t), t
            }, n.not = function() {
                for (var e = new BigInteger, t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
                return e.t = this.t, e.s = ~this.s, e
            }, n.shiftLeft = function(e) {
                var t = new BigInteger;
                return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t
            }, n.shiftRight = function(e) {
                var t = new BigInteger;
                return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t
            }, n.getLowestSetBit = function() {
                for (var e = 0; e < this.t; ++e)
                    if (0 != this[e]) return e * this.DB + T(this[e]);
                return this.s < 0 ? this.t * this.DB : -1
            }, n.bitCount = function() {
                for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r) e += w(this[r] ^ t);
                return e
            }, n.testBit = function(e) {
                var t = Math.floor(e / this.DB);
                return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB)
            }, n.setBit = function(e) {
                return this.changeBit(e, y)
            }, n.clearBit = function(e) {
                return this.changeBit(e, m)
            }, n.flipBit = function(e) {
                return this.changeBit(e, g)
            }, n.add = function(e) {
                var t = new BigInteger;
                return this.addTo(e, t), t
            }, n.subtract = function(e) {
                var t = new BigInteger;
                return this.subTo(e, t), t
            }, n.multiply = function(e) {
                var t = new BigInteger;
                return this.multiplyTo(e, t), t
            }, n.divide = function(e) {
                var t = new BigInteger;
                return this.divRemTo(e, t, null), t
            }, n.remainder = function(e) {
                var t = new BigInteger;
                return this.divRemTo(e, null, t), t
            }, n.divideAndRemainder = function(e) {
                var t = new BigInteger,
                    r = new BigInteger;
                return this.divRemTo(e, t, r), new Array(t, r)
            }, n.modPow = function(e, t) {
                var r, n, i = e.bitLength(),
                    o = a(1);
                if (i <= 0) return o;
                r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6, n = i < 8 ? new h(t) : t.isEven() ? new b(t) : new p(t);
                var s = new Array,
                    u = 3,
                    f = r - 1,
                    c = (1 << r) - 1;
                if (s[1] = n.convert(this), r > 1) {
                    var d = new BigInteger;
                    for (n.sqrTo(s[1], d); u <= c;) s[u] = new BigInteger, n.mulTo(d, s[u - 2], s[u]), u += 2
                }
                var y, g, m = e.t - 1,
                    T = !0,
                    w = new BigInteger;
                for (i = l(e[m]) - 1; m >= 0;) {
                    for (i >= f ? y = e[m] >> i - f & c : (y = (e[m] & (1 << i + 1) - 1) << f - i, m > 0 && (y |= e[m - 1] >> this.DB + i - f)), u = r; 0 == (1 & y);) y >>= 1, --u;
                    if ((i -= u) < 0 && (i += this.DB, --m), T) s[y].copyTo(o), T = !1;
                    else {
                        for (; u > 1;) n.sqrTo(o, w), n.sqrTo(w, o), u -= 2;
                        u > 0 ? n.sqrTo(o, w) : (g = o, o = w, w = g), n.mulTo(w, s[y], o)
                    }
                    for (; m >= 0 && 0 == (e[m] & 1 << i);) n.sqrTo(o, w), g = o, o = w, w = g, --i < 0 && (i = this.DB - 1, --m)
                }
                return n.revert(o)
            }, n.modInverse = function(e) {
                var t = e.isEven();
                if (0 === this.signum()) throw new Error("division by zero");
                if (this.isEven() && t || 0 == e.signum()) return BigInteger.ZERO;
                for (var r = e.clone(), n = this.clone(), i = a(1), o = a(0), s = a(0), u = a(1); 0 != r.signum();) {
                    for (; r.isEven();) r.rShiftTo(1, r), t ? (i.isEven() && o.isEven() || (i.addTo(this, i), o.subTo(e, o)), i.rShiftTo(1, i)) : o.isEven() || o.subTo(e, o), o.rShiftTo(1, o);
                    for (; n.isEven();) n.rShiftTo(1, n), t ? (s.isEven() && u.isEven() || (s.addTo(this, s), u.subTo(e, u)), s.rShiftTo(1, s)) : u.isEven() || u.subTo(e, u), u.rShiftTo(1, u);
                    r.compareTo(n) >= 0 ? (r.subTo(n, r), t && i.subTo(s, i), o.subTo(u, o)) : (n.subTo(r, n), t && s.subTo(i, s), u.subTo(o, u))
                }
                if (0 != n.compareTo(BigInteger.ONE)) return BigInteger.ZERO;
                for (; u.compareTo(e) >= 0;) u.subTo(e, u);
                for (; u.signum() < 0;) u.addTo(e, u);
                return u
            }, n.pow = function(e) {
                return this.exp(e, new v)
            }, n.gcd = function(e) {
                var t = this.s < 0 ? this.negate() : this.clone(),
                    r = e.s < 0 ? e.negate() : e.clone();
                if (t.compareTo(r) < 0) {
                    var n = t;
                    t = r, r = n
                }
                var i = t.getLowestSetBit(),
                    o = r.getLowestSetBit();
                if (o < 0) return t;
                for (i < o && (o = i), o > 0 && (t.rShiftTo(o, t), r.rShiftTo(o, r)); t.signum() > 0;)(i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t), (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r), t.compareTo(r) >= 0 ? (t.subTo(r, t), t.rShiftTo(1, t)) : (r.subTo(t, r), r.rShiftTo(1, r));
                return o > 0 && r.lShiftTo(o, r), r
            }, n.isProbablePrime = function(e) {
                var t, r = this.abs();
                if (1 == r.t && r[0] <= I[I.length - 1]) {
                    for (t = 0; t < I.length; ++t)
                        if (r[0] == I[t]) return !0;
                    return !1
                }
                if (r.isEven()) return !1;
                for (t = 1; t < I.length;) {
                    for (var n = I[t], i = t + 1; i < I.length && n < S;) n *= I[i++];
                    for (n = r.modInt(n); t < i;)
                        if (n % I[t++] == 0) return !1
                }
                return r.millerRabin(e)
            }, n.square = function() {
                var e = new BigInteger;
                return this.squareTo(e), e
            }, BigInteger.ZERO = a(0), BigInteger.ONE = a(1), BigInteger.valueOf = a, e.exports = BigInteger
        },
        2010: function(e, t, r) {
            "use strict";

            function n(e) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(r(4175)), n(r(4195))
        },
        2011: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = e => 33 === e.length && [2, 3].includes(e[0]) || 65 === e.length && 4 === e[0];
            t.makeConverter = function(e, t = n) {
                return {
                    decode: function(r) {
                        if (r.key[0] !== e) throw new Error("Decode Error: could not decode bip32Derivation with key 0x" + r.key.toString("hex"));
                        const n = r.key.slice(1);
                        if (!t(n)) throw new Error("Decode Error: bip32Derivation has invalid pubkey in key 0x" + r.key.toString("hex"));
                        if (r.value.length / 4 % 1 != 0) throw new Error("Decode Error: Input BIP32_DERIVATION value length should be multiple of 4");
                        const i = {
                            masterFingerprint: r.value.slice(0, 4),
                            pubkey: n,
                            path: "m"
                        };
                        for (const e of (o = r.value.length / 4 - 1, [...Array(o).keys()])) {
                            const t = r.value.readUInt32LE(4 * e + 4),
                                n = !!(2147483648 & t),
                                o = 2147483647 & t;
                            i.path += "/" + o.toString(10) + (n ? "'" : "")
                        }
                        var o;
                        return i
                    },
                    encode: function(t) {
                        const r = Buffer.from([e]),
                            n = Buffer.concat([r, t.pubkey]),
                            i = t.path.split("/"),
                            o = Buffer.allocUnsafe(4 * i.length);
                        t.masterFingerprint.copy(o, 0);
                        let s = 4;
                        return i.slice(1).forEach(e => {
                            const t = "'" === e.slice(-1);
                            let r = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
                            t && (r += 2147483648), o.writeUInt32LE(r, s), s += 4
                        }), {
                            key: n,
                            value: o
                        }
                    },
                    check: function(e) {
                        return Buffer.isBuffer(e.pubkey) && Buffer.isBuffer(e.masterFingerprint) && "string" == typeof e.path && t(e.pubkey) && 4 === e.masterFingerprint.length
                    },
                    expected: "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }",
                    canAddToArray: function(e, t, r) {
                        const n = t.pubkey.toString("hex");
                        return !r.has(n) && (r.add(n), 0 === e.filter(e => e.pubkey.equals(t.pubkey)).length)
                    }
                }
            }
        },
        2012: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(1134);

            function i(e, t) {
                const r = e[t];
                if (void 0 === r) throw new Error("No input #" + t);
                return r
            }

            function o(e, t) {
                const r = e[t];
                if (void 0 === r) throw new Error("No output #" + t);
                return r
            }

            function s(e, t, r, n) {
                throw new Error(`Data for ${e} key ${t} is incorrect: Expected ${r} and got ${JSON.stringify(n)}`)
            }

            function u(e) {
                return (t, r) => {
                    for (const i of Object.keys(t)) {
                        const o = t[i],
                            {
                                canAdd: u,
                                canAddToArray: f,
                                check: c,
                                expected: a
                            } = n[e + "s"][i] || {},
                            l = !!f;
                        if (c)
                            if (l) {
                                if (!Array.isArray(o) || r[i] && !Array.isArray(r[i])) throw new Error(`Key type ${i} must be an array`);
                                o.every(c) || s(e, i, a, o);
                                const t = r[i] || [],
                                    n = new Set;
                                if (!o.every(e => f(t, e, n))) throw new Error("Can not add duplicate data to array");
                                r[i] = t.concat(o)
                            } else {
                                if (c(o) || s(e, i, a, o), !u(r, o)) throw new Error("Can not add duplicate data to " + e);
                                r[i] = o
                            }
                    }
                }
            }
            t.checkForInput = i, t.checkForOutput = o, t.checkHasKey = function(e, t, r) {
                if (e.key[0] < r) throw new Error("Use the method for your specific key instead of addUnknownKeyVal*");
                if (t && 0 !== t.filter(t => t.key.equals(e.key)).length) throw new Error("Duplicate Key: " + e.key.toString("hex"))
            }, t.getEnumLength = function(e) {
                let t = 0;
                return Object.keys(e).forEach(e => {
                    Number(isNaN(Number(e))) && t++
                }), t
            }, t.inputCheckUncleanFinalized = function(e, t) {
                let r = !1;
                if (t.nonWitnessUtxo || t.witnessUtxo) {
                    const e = !!t.redeemScript,
                        n = !!t.witnessScript,
                        i = !e || !!t.finalScriptSig,
                        o = !n || !!t.finalScriptWitness,
                        s = !!t.finalScriptSig || !!t.finalScriptWitness;
                    r = i && o && s
                }
                if (!1 === r) throw new Error(`Input #${e} has too much or too little data to clean`)
            }, t.updateGlobal = u("global"), t.updateInput = u("input"), t.updateOutput = u("output"), t.addInputAttributes = function(e, r) {
                const n = i(e, e.length - 1);
                t.updateInput(r, n)
            }, t.addOutputAttributes = function(e, r) {
                const n = o(e, e.length - 1);
                t.updateOutput(r, n)
            }, t.defaultVersionSetter = function(e, t) {
                if (!Buffer.isBuffer(t) || t.length < 4) throw new Error("Set Version: Invalid Transaction");
                return t.writeUInt32LE(e, 0), t
            }, t.defaultLocktimeSetter = function(e, t) {
                if (!Buffer.isBuffer(t) || t.length < 4) throw new Error("Set Locktime: Invalid Transaction");
                return t.writeUInt32LE(e, t.length - 4), t
            }
        },
        2937: function(e) {
            e.exports = JSON.parse('{"name":"bigi","version":"1.4.2","description":"Big integers.","keywords":["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],"devDependencies":{"coveralls":"^2.11.2","istanbul":"^0.3.5","jshint":"^2.5.1","mocha":"^2.1.0","mochify":"^2.1.0"},"repository":{"url":"https://github.com/cryptocoinjs/bigi","type":"git"},"main":"./lib/index.js","scripts":{"browser-test":"./node_modules/.bin/mochify --wd -R spec","test":"./node_modules/.bin/_mocha -- test/*.js","jshint":"./node_modules/.bin/jshint --config jshint.json lib/*.js ; true","unit":"./node_modules/.bin/mocha","coverage":"./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js","coveralls":"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"},"dependencies":{},"testling":{"files":"test/*.js","harness":"mocha","browsers":["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]}}')
        },
        2938: function(e, t, r) {
            var n = r(72),
                BigInteger = r(1673);
            BigInteger.fromByteArrayUnsigned = function(e) {
                return 128 & e[0] ? new BigInteger([0].concat(e)) : new BigInteger(e)
            }, BigInteger.prototype.toByteArrayUnsigned = function() {
                var e = this.toByteArray();
                return 0 === e[0] ? e.slice(1) : e
            }, BigInteger.fromDERInteger = function(e) {
                return new BigInteger(e)
            }, BigInteger.prototype.toDERInteger = BigInteger.prototype.toByteArray, BigInteger.fromBuffer = function(e) {
                if (128 & e[0]) {
                    var t = Array.prototype.slice.call(e);
                    return new BigInteger([0].concat(t))
                }
                return new BigInteger(e)
            }, BigInteger.fromHex = function(e) {
                return "" === e ? BigInteger.ZERO : (n.equal(e, e.match(/^[A-Fa-f0-9]+/), "Invalid hex string"), n.equal(e.length % 2, 0, "Incomplete hex"), new BigInteger(e, 16))
            }, BigInteger.prototype.toBuffer = function(e) {
                for (var t = this.toByteArrayUnsigned(), r = [], n = e - t.length; r.length < n;) r.push(0);
                return new Buffer(r.concat(t))
            }, BigInteger.prototype.toHex = function(e) {
                return this.toBuffer(e).toString("hex")
            }
        },
        322: function(e, t, r) {
            "use strict";
            for (var n = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", i = {}, o = 0; o < n.length; o++) {
                var s = n.charAt(o);
                if (void 0 !== i[s]) throw new TypeError(s + " is ambiguous");
                i[s] = o
            }

            function u(e) {
                var t = e >> 25;
                return (33554431 & e) << 5 ^ 996825010 & -(t >> 0 & 1) ^ 642813549 & -(t >> 1 & 1) ^ 513874426 & -(t >> 2 & 1) ^ 1027748829 & -(t >> 3 & 1) ^ 705979059 & -(t >> 4 & 1)
            }

            function f(e) {
                for (var t = 1, r = 0; r < e.length; ++r) {
                    var n = e.charCodeAt(r);
                    if (n < 33 || n > 126) return "Invalid prefix (" + e + ")";
                    t = u(t) ^ n >> 5
                }
                for (t = u(t), r = 0; r < e.length; ++r) {
                    var i = e.charCodeAt(r);
                    t = u(t) ^ 31 & i
                }
                return t
            }

            function c(e, t) {
                if (t = t || 90, e.length < 8) return e + " too short";
                if (e.length > t) return "Exceeds length limit";
                var r = e.toLowerCase(),
                    n = e.toUpperCase();
                if (e !== r && e !== n) return "Mixed-case string " + e;
                var o = (e = r).lastIndexOf("1");
                if (-1 === o) return "No separator character for " + e;
                if (0 === o) return "Missing prefix for " + e;
                var s = e.slice(0, o),
                    c = e.slice(o + 1);
                if (c.length < 6) return "Data too short";
                var a = f(s);
                if ("string" == typeof a) return a;
                for (var l = [], h = 0; h < c.length; ++h) {
                    var p = c.charAt(h),
                        d = i[p];
                    if (void 0 === d) return "Unknown character " + p;
                    a = u(a) ^ d, h + 6 >= c.length || l.push(d)
                }
                return 1 !== a ? "Invalid checksum for " + e : {
                    prefix: s,
                    words: l
                }
            }

            function a(e, t, r, n) {
                for (var i = 0, o = 0, s = (1 << r) - 1, u = [], f = 0; f < e.length; ++f)
                    for (i = i << t | e[f], o += t; o >= r;) o -= r, u.push(i >> o & s);
                if (n) o > 0 && u.push(i << r - o & s);
                else {
                    if (o >= t) return "Excess padding";
                    if (i << r - o & s) return "Non-zero padding"
                }
                return u
            }
            e.exports = {
                decodeUnsafe: function() {
                    var e = c.apply(null, arguments);
                    if ("object" == typeof e) return e
                },
                decode: function(e) {
                    var t = c.apply(null, arguments);
                    if ("object" == typeof t) return t;
                    throw new Error(t)
                },
                encode: function(e, t, r) {
                    if (r = r || 90, e.length + 7 + t.length > r) throw new TypeError("Exceeds length limit");
                    var i = f(e = e.toLowerCase());
                    if ("string" == typeof i) throw new Error(i);
                    for (var o = e + "1", s = 0; s < t.length; ++s) {
                        var c = t[s];
                        if (c >> 5 != 0) throw new Error("Non 5-bit word");
                        i = u(i) ^ c, o += n.charAt(c)
                    }
                    for (s = 0; s < 6; ++s) i = u(i);
                    for (i ^= 1, s = 0; s < 6; ++s) {
                        o += n.charAt(i >> 5 * (5 - s) & 31)
                    }
                    return o
                },
                toWordsUnsafe: function(e) {
                    var t = a(e, 8, 5, !0);
                    if (Array.isArray(t)) return t
                },
                toWords: function(e) {
                    var t = a(e, 8, 5, !0);
                    if (Array.isArray(t)) return t;
                    throw new Error(t)
                },
                fromWordsUnsafe: function(e) {
                    var t = a(e, 5, 8, !1);
                    if (Array.isArray(t)) return t
                },
                fromWords: function(e) {
                    var t = a(e, 5, 8, !1);
                    if (Array.isArray(t)) return t;
                    throw new Error(t)
                }
            }
        },
        4073: function(e, t, r) {
            const n = r(4074);
            n.check = r(662), n.convert = r(519), n.math = r(661), n.muSig = r(4077), n.taproot = r(4078), e.exports = n
        },
        4074: function(e, t, r) {
            const BigInteger = r(109),
                n = r(21).Buffer,
                i = r(280).getCurveByName("secp256k1"),
                o = r(661),
                s = r(662),
                u = r(519),
                f = n.concat,
                c = i.G,
                a = (i.p, i.n),
                l = BigInteger.ZERO;
            e.exports = {
                sign: function(e, t, r) {
                    s.checkSignParams(e, t), e = "string" == typeof e ? BigInteger.fromHex(e) : e;
                    const n = c.multiply(e),
                        i = u.intToBuffer(n.affineX),
                        l = o.getEvenKey(n, e);
                    let h;
                    if (r) {
                        s.checkAux(r);
                        const e = u.intToBuffer(l.xor(u.bufferToInt(o.taggedHash("BIP0340/aux", r)))),
                            n = o.taggedHash("BIP0340/nonce", f([e, i, t]));
                        h = u.bufferToInt(n).mod(a)
                    } else h = o.deterministicGetK0(l, i, t);
                    if (0 === h.signum()) throw new Error("kPrime is zero");
                    const p = c.multiply(h),
                        d = o.getEvenKey(p, h),
                        y = u.intToBuffer(p.affineX),
                        g = o.getE(y, i, t);
                    return f([y, u.intToBuffer(d.add(g.multiply(l)).mod(a))])
                },
                verify: function(e, t, r) {
                    s.checkVerifyParams(e, t, r);
                    const n = o.liftX(e),
                        i = u.intToBuffer(n.affineX),
                        f = u.bufferToInt(r.slice(0, 32)),
                        c = u.bufferToInt(r.slice(32, 64));
                    s.checkSignatureInput(f, c);
                    const a = o.getE(u.intToBuffer(f), i, t),
                        l = o.getR(c, a, n);
                    if (l.curve.isInfinity(l) || !o.isEven(l) || !l.affineX.equals(f)) throw new Error("signature verification failed")
                },
                batchVerify: function(e, t, r) {
                    s.checkBatchVerifyParams(e, t, r);
                    let n = l,
                        i = null;
                    for (let f = 0; f < e.length; f++) {
                        const c = o.liftX(e[f]),
                            a = u.intToBuffer(c.affineX),
                            l = u.bufferToInt(r[f].slice(0, 32)),
                            h = u.bufferToInt(r[f].slice(32, 64));
                        s.checkSignatureInput(l, h);
                        const p = o.getE(u.intToBuffer(l), a, t[f]),
                            d = o.liftX(r[f].slice(0, 32));
                        if (0 === f) n = n.add(h), i = d, i = i.add(c.multiply(p));
                        else {
                            const e = o.randomA();
                            n = n.add(e.multiply(h)), i = i.add(d.multiply(e)), i = i.add(c.multiply(e.multiply(p)))
                        }
                    }
                    if (!c.multiply(n).equals(i)) throw new Error("signature verification failed")
                }
            }
        },
        4077: function(e, t, r) {
            const n = r(21).Buffer,
                i = r(280).getCurveByName("secp256k1"),
                o = r(661),
                s = r(662),
                u = r(519),
                f = n.concat,
                c = i.G,
                a = i.n,
                l = u.hash(n.from("MuSig coefficient"));

            function h(e) {
                return s.checkPubKeyArr(e), u.hash(f(e))
            }

            function p(e, t) {
                const r = n.alloc(4);
                r.writeUInt32LE(t);
                const i = f([l, l, e, r]);
                return u.bufferToInt(u.hash(i)).mod(a)
            }
            e.exports = {
                computeEll: h,
                computeCoefficient: p,
                pubKeyCombine: function(e, t) {
                    const r = t || h(e);
                    let n = null;
                    for (let t = 0; t < e.length; t++) {
                        const i = o.liftX(e[t]),
                            s = p(r, t),
                            u = i.multiply(s);
                        n = null === n ? u : n.add(u)
                    }
                    return n
                },
                sessionInitialize: function(e, t, r, n, i, l, h) {
                    s.checkSessionParams(e, t, r, n, l);
                    const d = {
                            sessionId: e,
                            message: r,
                            pubKeyCombined: n,
                            pkParity: i,
                            ell: l,
                            idx: h
                        },
                        y = p(l, h);
                    d.secretKey = t.multiply(y).mod(a), d.ownKeyParity = o.isEven(c.multiply(t)), d.pkParity !== d.ownKeyParity && (d.secretKey = a.subtract(d.secretKey));
                    const g = f([e, r, d.pubKeyCombined, u.intToBuffer(t)]);
                    d.secretNonce = u.bufferToInt(u.hash(g)), s.checkRange("secretNonce", d.secretNonce);
                    const m = c.multiply(d.secretNonce);
                    return d.nonce = u.intToBuffer(m.affineX), d.nonceParity = o.isEven(m), d.commitment = u.hash(d.nonce), d
                },
                sessionNonceCombine: function(e, t) {
                    s.checkNonceArr(t);
                    let r = o.liftX(t[0]);
                    for (let e = 1; e < t.length; e++) r = r.add(o.liftX(t[e]));
                    return e.combinedNonceParity = o.isEven(r), u.intToBuffer(r.affineX)
                },
                partialSign: function(e, t, r, n) {
                    const i = o.getE(r, n, t),
                        s = e.secretKey;
                    let u = e.secretNonce;
                    return e.nonceParity !== e.combinedNonceParity && (u = a.subtract(u)), s.multiply(i).add(u).mod(a)
                },
                partialSigVerify: function(e, t, r, n, i, s) {
                    let u = o.getE(r, e.pubKeyCombined, e.message);
                    const f = p(e.ell, n),
                        c = o.liftX(i),
                        l = o.liftX(s);
                    e.pkParity || (u = a.subtract(u));
                    let h = o.getR(t, u.multiply(f).mod(a), c);
                    e.combinedNonceParity && (h = h.negate());
                    const d = h.add(l);
                    if (!d.curve.isInfinity(d)) throw new Error("partial signature verification failed")
                },
                partialSigCombine: function(e, t) {
                    const r = o.liftX(e);
                    s.checkArray("partialSigs", t);
                    const n = u.intToBuffer(r.affineX);
                    let i = t[0];
                    for (let e = 1; e < t.length; e++) i = i.add(t[e]).mod(a);
                    return f([n, u.intToBuffer(i)])
                }
            }
        },
        4078: function(e, t, r) {
            const n = r(21).Buffer,
                i = r(280).getCurveByName("secp256k1"),
                o = r(661),
                s = r(519),
                u = n.concat,
                f = i.G;
            e.exports = {
                taprootConstruct: function(e, t) {
                    t || (t = []);
                    const r = function(e) {
                            let t = n.alloc(32, 0);
                            if (!e || 0 === e.length) return new n(0);
                            return t
                        }(t),
                        i = s.intToBuffer(e.affineX),
                        c = o.liftX(i),
                        a = s.bufferToInt(o.taggedHash("TapTweak", u([i, r]))),
                        l = c.add(f.multiply(a));
                    return s.intToBuffer(l.affineX)
                }
            }
        },
        4173: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(4174),
                i = r(2010),
                o = r(136),
                s = r(2012);
            t.Psbt = class Psbt {
                constructor(e) {
                    this.inputs = [], this.outputs = [], this.globalMap = {
                        unsignedTx: e
                    }
                }
                static fromBase64(e, t) {
                    const r = Buffer.from(e, "base64");
                    return this.fromBuffer(r, t)
                }
                static fromHex(e, t) {
                    const r = Buffer.from(e, "hex");
                    return this.fromBuffer(r, t)
                }
                static fromBuffer(e, t) {
                    const r = i.psbtFromBuffer(e, t),
                        n = new this(r.globalMap.unsignedTx);
                    return Object.assign(n, r), n
                }
                toBase64() {
                    return this.toBuffer().toString("base64")
                }
                toHex() {
                    return this.toBuffer().toString("hex")
                }
                toBuffer() {
                    return i.psbtToBuffer(this)
                }
                updateGlobal(e) {
                    return s.updateGlobal(e, this.globalMap), this
                }
                updateInput(e, t) {
                    const r = s.checkForInput(this.inputs, e);
                    return s.updateInput(t, r), this
                }
                updateOutput(e, t) {
                    const r = s.checkForOutput(this.outputs, e);
                    return s.updateOutput(t, r), this
                }
                addUnknownKeyValToGlobal(e) {
                    return s.checkHasKey(e, this.globalMap.unknownKeyVals, s.getEnumLength(o.GlobalTypes)), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(e), this
                }
                addUnknownKeyValToInput(e, t) {
                    const r = s.checkForInput(this.inputs, e);
                    return s.checkHasKey(t, r.unknownKeyVals, s.getEnumLength(o.InputTypes)), r.unknownKeyVals || (r.unknownKeyVals = []), r.unknownKeyVals.push(t), this
                }
                addUnknownKeyValToOutput(e, t) {
                    const r = s.checkForOutput(this.outputs, e);
                    return s.checkHasKey(t, r.unknownKeyVals, s.getEnumLength(o.OutputTypes)), r.unknownKeyVals || (r.unknownKeyVals = []), r.unknownKeyVals.push(t), this
                }
                addInput(e) {
                    this.globalMap.unsignedTx.addInput(e), this.inputs.push({
                        unknownKeyVals: []
                    });
                    const t = e.unknownKeyVals || [],
                        r = this.inputs.length - 1;
                    if (!Array.isArray(t)) throw new Error("unknownKeyVals must be an Array");
                    return t.forEach(e => this.addUnknownKeyValToInput(r, e)), s.addInputAttributes(this.inputs, e), this
                }
                addOutput(e) {
                    this.globalMap.unsignedTx.addOutput(e), this.outputs.push({
                        unknownKeyVals: []
                    });
                    const t = e.unknownKeyVals || [],
                        r = this.outputs.length - 1;
                    if (!Array.isArray(t)) throw new Error("unknownKeyVals must be an Array");
                    return t.forEach(e => this.addUnknownKeyValToInput(r, e)), s.addOutputAttributes(this.outputs, e), this
                }
                clearFinalizedInput(e) {
                    const t = s.checkForInput(this.inputs, e);
                    s.inputCheckUncleanFinalized(e, t);
                    for (const e of Object.keys(t))["witnessUtxo", "nonWitnessUtxo", "finalScriptSig", "finalScriptWitness", "unknownKeyVals"].includes(e) || delete t[e];
                    return this
                }
                combine(...e) {
                    const t = n.combine([this].concat(e));
                    return Object.assign(this, t), this
                }
                getTransaction() {
                    return this.globalMap.unsignedTx.toBuffer()
                }
            }
        },
        4174: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(2010);

            function i(e, t, r) {
                return n => {
                    if (e.has(n)) return;
                    const i = r.filter(e => e.key.toString("hex") === n)[0];
                    t.push(i), e.add(n)
                }
            }

            function o(e) {
                return e.globalMap.unsignedTx
            }

            function s(e) {
                const t = new Set;
                return e.forEach(e => {
                    const r = e.key.toString("hex");
                    if (t.has(r)) throw new Error("Combine: KeyValue Map keys should be unique");
                    t.add(r)
                }), t
            }
            t.combine = function(e) {
                const t = e[0],
                    r = n.psbtToKeyVals(t),
                    u = e.slice(1);
                if (0 === u.length) throw new Error("Combine: Nothing to combine");
                const f = o(t);
                if (void 0 === f) throw new Error("Combine: Self missing transaction");
                const c = s(r.globalKeyVals),
                    a = r.inputKeyVals.map(s),
                    l = r.outputKeyVals.map(s);
                for (const e of u) {
                    const t = o(e);
                    if (void 0 === t || !t.toBuffer().equals(f.toBuffer())) throw new Error("Combine: One of the Psbts does not have the same transaction.");
                    const u = n.psbtToKeyVals(e);
                    s(u.globalKeyVals).forEach(i(c, r.globalKeyVals, u.globalKeyVals));
                    u.inputKeyVals.map(s).forEach((e, t) => e.forEach(i(a[t], r.inputKeyVals[t], u.inputKeyVals[t])));
                    u.outputKeyVals.map(s).forEach((e, t) => e.forEach(i(l[t], r.outputKeyVals[t], u.outputKeyVals[t])))
                }
                return n.psbtFromKeyVals(f, {
                    globalMapKeyVals: r.globalKeyVals,
                    inputKeyVals: r.inputKeyVals,
                    outputKeyVals: r.outputKeyVals
                })
            }
        },
        4175: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(1134),
                i = r(1135),
                o = r(432),
                s = r(136);

            function u(e, t, r) {
                if (!t.equals(Buffer.from([r]))) throw new Error(`Format Error: Invalid ${e} key: ${t.toString("hex")}`)
            }

            function f(e, {
                globalMapKeyVals: t,
                inputKeyVals: r,
                outputKeyVals: o
            }) {
                const f = {
                    unsignedTx: e
                };
                let c = 0;
                for (const e of t) switch (e.key[0]) {
                    case s.GlobalTypes.UNSIGNED_TX:
                        if (u("global", e.key, s.GlobalTypes.UNSIGNED_TX), c > 0) throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
                        c++;
                        break;
                    case s.GlobalTypes.GLOBAL_XPUB:
                        void 0 === f.globalXpub && (f.globalXpub = []), f.globalXpub.push(n.globals.globalXpub.decode(e));
                        break;
                    default:
                        f.unknownKeyVals || (f.unknownKeyVals = []), f.unknownKeyVals.push(e)
                }
                const a = r.length,
                    l = o.length,
                    h = [],
                    p = [];
                for (const e of i.range(a)) {
                    const t = {};
                    for (const i of r[e]) switch (n.inputs.checkPubkey(i), i.key[0]) {
                        case s.InputTypes.NON_WITNESS_UTXO:
                            if (u("input", i.key, s.InputTypes.NON_WITNESS_UTXO), void 0 !== t.nonWitnessUtxo) throw new Error("Format Error: Input has multiple NON_WITNESS_UTXO");
                            t.nonWitnessUtxo = n.inputs.nonWitnessUtxo.decode(i);
                            break;
                        case s.InputTypes.WITNESS_UTXO:
                            if (u("input", i.key, s.InputTypes.WITNESS_UTXO), void 0 !== t.witnessUtxo) throw new Error("Format Error: Input has multiple WITNESS_UTXO");
                            t.witnessUtxo = n.inputs.witnessUtxo.decode(i);
                            break;
                        case s.InputTypes.PARTIAL_SIG:
                            void 0 === t.partialSig && (t.partialSig = []), t.partialSig.push(n.inputs.partialSig.decode(i));
                            break;
                        case s.InputTypes.SIGHASH_TYPE:
                            if (u("input", i.key, s.InputTypes.SIGHASH_TYPE), void 0 !== t.sighashType) throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
                            t.sighashType = n.inputs.sighashType.decode(i);
                            break;
                        case s.InputTypes.REDEEM_SCRIPT:
                            if (u("input", i.key, s.InputTypes.REDEEM_SCRIPT), void 0 !== t.redeemScript) throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
                            t.redeemScript = n.inputs.redeemScript.decode(i);
                            break;
                        case s.InputTypes.WITNESS_SCRIPT:
                            if (u("input", i.key, s.InputTypes.WITNESS_SCRIPT), void 0 !== t.witnessScript) throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
                            t.witnessScript = n.inputs.witnessScript.decode(i);
                            break;
                        case s.InputTypes.BIP32_DERIVATION:
                            void 0 === t.bip32Derivation && (t.bip32Derivation = []), t.bip32Derivation.push(n.inputs.bip32Derivation.decode(i));
                            break;
                        case s.InputTypes.FINAL_SCRIPTSIG:
                            u("input", i.key, s.InputTypes.FINAL_SCRIPTSIG), t.finalScriptSig = n.inputs.finalScriptSig.decode(i);
                            break;
                        case s.InputTypes.FINAL_SCRIPTWITNESS:
                            u("input", i.key, s.InputTypes.FINAL_SCRIPTWITNESS), t.finalScriptWitness = n.inputs.finalScriptWitness.decode(i);
                            break;
                        case s.InputTypes.POR_COMMITMENT:
                            u("input", i.key, s.InputTypes.POR_COMMITMENT), t.porCommitment = n.inputs.porCommitment.decode(i);
                            break;
                        case s.InputTypes.TAP_KEY_SIG:
                            u("input", i.key, s.InputTypes.TAP_KEY_SIG), t.tapKeySig = n.inputs.tapKeySig.decode(i);
                            break;
                        case s.InputTypes.TAP_SCRIPT_SIG:
                            void 0 === t.tapScriptSig && (t.tapScriptSig = []), t.tapScriptSig.push(n.inputs.tapScriptSig.decode(i));
                            break;
                        case s.InputTypes.TAP_LEAF_SCRIPT:
                            void 0 === t.tapLeafScript && (t.tapLeafScript = []), t.tapLeafScript.push(n.inputs.tapLeafScript.decode(i));
                            break;
                        case s.InputTypes.TAP_BIP32_DERIVATION:
                            void 0 === t.tapBip32Derivation && (t.tapBip32Derivation = []), t.tapBip32Derivation.push(n.inputs.tapBip32Derivation.decode(i));
                            break;
                        case s.InputTypes.TAP_INTERNAL_KEY:
                            u("input", i.key, s.InputTypes.TAP_INTERNAL_KEY), t.tapInternalKey = n.inputs.tapInternalKey.decode(i);
                            break;
                        case s.InputTypes.TAP_MERKLE_ROOT:
                            u("input", i.key, s.InputTypes.TAP_MERKLE_ROOT), t.tapMerkleRoot = n.inputs.tapMerkleRoot.decode(i);
                            break;
                        default:
                            t.unknownKeyVals || (t.unknownKeyVals = []), t.unknownKeyVals.push(i)
                    }
                    h.push(t)
                }
                for (const e of i.range(l)) {
                    const t = {};
                    for (const r of o[e]) switch (n.outputs.checkPubkey(r), r.key[0]) {
                        case s.OutputTypes.REDEEM_SCRIPT:
                            if (u("output", r.key, s.OutputTypes.REDEEM_SCRIPT), void 0 !== t.redeemScript) throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
                            t.redeemScript = n.outputs.redeemScript.decode(r);
                            break;
                        case s.OutputTypes.WITNESS_SCRIPT:
                            if (u("output", r.key, s.OutputTypes.WITNESS_SCRIPT), void 0 !== t.witnessScript) throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
                            t.witnessScript = n.outputs.witnessScript.decode(r);
                            break;
                        case s.OutputTypes.BIP32_DERIVATION:
                            void 0 === t.bip32Derivation && (t.bip32Derivation = []), t.bip32Derivation.push(n.outputs.bip32Derivation.decode(r));
                            break;
                        case s.OutputTypes.TAP_INTERNAL_KEY:
                            u("output", r.key, s.OutputTypes.TAP_INTERNAL_KEY), t.tapInternalKey = n.outputs.tapInternalKey.decode(r);
                            break;
                        case s.OutputTypes.TAP_TREE:
                            u("output", r.key, s.OutputTypes.TAP_TREE), t.tapTree = n.outputs.tapTree.decode(r);
                            break;
                        case s.OutputTypes.TAP_BIP32_DERIVATION:
                            void 0 === t.tapBip32Derivation && (t.tapBip32Derivation = []), t.tapBip32Derivation.push(n.outputs.tapBip32Derivation.decode(r));
                            break;
                        default:
                            t.unknownKeyVals || (t.unknownKeyVals = []), t.unknownKeyVals.push(r)
                    }
                    p.push(t)
                }
                return {
                    globalMap: f,
                    inputs: h,
                    outputs: p
                }
            }
            t.psbtFromBuffer = function(e, t) {
                let r = 0;

                function n() {
                    const t = o.decode(e, r);
                    r += o.encodingLength(t);
                    const n = e.slice(r, r + t);
                    return r += t, n
                }

                function u() {
                    return {
                        key: n(),
                        value: n()
                    }
                }

                function c() {
                    if (r >= e.length) throw new Error("Format Error: Unexpected End of PSBT");
                    const t = 0 === e.readUInt8(r);
                    return t && r++, t
                }
                if (1886610036 !== function() {
                        const t = e.readUInt32BE(r);
                        return r += 4, t
                    }()) throw new Error("Format Error: Invalid Magic Number");
                if (255 !== function() {
                        const t = e.readUInt8(r);
                        return r += 1, t
                    }()) throw new Error("Format Error: Magic Number must be followed by 0xff separator");
                const a = [],
                    l = {};
                for (; !c();) {
                    const e = u(),
                        t = e.key.toString("hex");
                    if (l[t]) throw new Error("Format Error: Keys must be unique for global keymap: key " + t);
                    l[t] = 1, a.push(e)
                }
                const h = a.filter(e => e.key[0] === s.GlobalTypes.UNSIGNED_TX);
                if (1 !== h.length) throw new Error("Format Error: Only one UNSIGNED_TX allowed");
                const p = t(h[0].value),
                    {
                        inputCount: d,
                        outputCount: y
                    } = p.getInputOutputCounts(),
                    g = [],
                    m = [];
                for (const e of i.range(d)) {
                    const t = {},
                        r = [];
                    for (; !c();) {
                        const n = u(),
                            i = n.key.toString("hex");
                        if (t[i]) throw new Error("Format Error: Keys must be unique for each input: input index " + e + " key " + i);
                        t[i] = 1, r.push(n)
                    }
                    g.push(r)
                }
                for (const e of i.range(y)) {
                    const t = {},
                        r = [];
                    for (; !c();) {
                        const n = u(),
                            i = n.key.toString("hex");
                        if (t[i]) throw new Error("Format Error: Keys must be unique for each output: output index " + e + " key " + i);
                        t[i] = 1, r.push(n)
                    }
                    m.push(r)
                }
                return f(p, {
                    globalMapKeyVals: a,
                    inputKeyVals: g,
                    outputKeyVals: m
                })
            }, t.checkKeyBuffer = u, t.psbtFromKeyVals = f
        },
        4176: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);
            t.decode = function(e) {
                if (e.key[0] !== n.GlobalTypes.GLOBAL_XPUB) throw new Error("Decode Error: could not decode globalXpub with key 0x" + e.key.toString("hex"));
                if (79 !== e.key.length || ![2, 3].includes(e.key[46])) throw new Error("Decode Error: globalXpub has invalid extended pubkey in key 0x" + e.key.toString("hex"));
                if (e.value.length / 4 % 1 != 0) throw new Error("Decode Error: Global GLOBAL_XPUB value length should be multiple of 4");
                const t = e.key.slice(1),
                    r = {
                        masterFingerprint: e.value.slice(0, 4),
                        extendedPubkey: t,
                        path: "m"
                    };
                for (const t of (i = e.value.length / 4 - 1, [...Array(i).keys()])) {
                    const n = e.value.readUInt32LE(4 * t + 4),
                        i = !!(2147483648 & n),
                        o = 2147483647 & n;
                    r.path += "/" + o.toString(10) + (i ? "'" : "")
                }
                var i;
                return r
            }, t.encode = function(e) {
                const t = Buffer.from([n.GlobalTypes.GLOBAL_XPUB]),
                    r = Buffer.concat([t, e.extendedPubkey]),
                    i = e.path.split("/"),
                    o = Buffer.allocUnsafe(4 * i.length);
                e.masterFingerprint.copy(o, 0);
                let s = 4;
                return i.slice(1).forEach(e => {
                    const t = "'" === e.slice(-1);
                    let r = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
                    t && (r += 2147483648), o.writeUInt32LE(r, s), s += 4
                }), {
                    key: r,
                    value: o
                }
            }, t.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }", t.check = function(e) {
                const t = e.extendedPubkey,
                    r = e.masterFingerprint,
                    n = e.path;
                return Buffer.isBuffer(t) && 78 === t.length && [2, 3].indexOf(t[45]) > -1 && Buffer.isBuffer(r) && 4 === r.length && "string" == typeof n && !!n.match(/^m(\/\d+'?)*$/)
            }, t.canAddToArray = function(e, t, r) {
                const n = t.extendedPubkey.toString("hex");
                return !r.has(n) && (r.add(n), 0 === e.filter(e => e.extendedPubkey.equals(t.extendedPubkey)).length)
            }
        },
        4177: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);
            t.encode = function(e) {
                return {
                    key: Buffer.from([n.GlobalTypes.UNSIGNED_TX]),
                    value: e.toBuffer()
                }
            }
        },
        4178: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);
            t.decode = function(e) {
                if (e.key[0] !== n.InputTypes.FINAL_SCRIPTSIG) throw new Error("Decode Error: could not decode finalScriptSig with key 0x" + e.key.toString("hex"));
                return e.value
            }, t.encode = function(e) {
                return {
                    key: Buffer.from([n.InputTypes.FINAL_SCRIPTSIG]),
                    value: e
                }
            }, t.expected = "Buffer", t.check = function(e) {
                return Buffer.isBuffer(e)
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.finalScriptSig
            }
        },
        4179: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);
            t.decode = function(e) {
                if (e.key[0] !== n.InputTypes.FINAL_SCRIPTWITNESS) throw new Error("Decode Error: could not decode finalScriptWitness with key 0x" + e.key.toString("hex"));
                return e.value
            }, t.encode = function(e) {
                return {
                    key: Buffer.from([n.InputTypes.FINAL_SCRIPTWITNESS]),
                    value: e
                }
            }, t.expected = "Buffer", t.check = function(e) {
                return Buffer.isBuffer(e)
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.finalScriptWitness
            }
        },
        4180: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);
            t.decode = function(e) {
                if (e.key[0] !== n.InputTypes.NON_WITNESS_UTXO) throw new Error("Decode Error: could not decode nonWitnessUtxo with key 0x" + e.key.toString("hex"));
                return e.value
            }, t.encode = function(e) {
                return {
                    key: Buffer.from([n.InputTypes.NON_WITNESS_UTXO]),
                    value: e
                }
            }, t.expected = "Buffer", t.check = function(e) {
                return Buffer.isBuffer(e)
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.nonWitnessUtxo
            }
        },
        4181: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);
            t.decode = function(e) {
                if (e.key[0] !== n.InputTypes.PARTIAL_SIG) throw new Error("Decode Error: could not decode partialSig with key 0x" + e.key.toString("hex"));
                if (34 !== e.key.length && 66 !== e.key.length || ![2, 3, 4].includes(e.key[1])) throw new Error("Decode Error: partialSig has invalid pubkey in key 0x" + e.key.toString("hex"));
                return {
                    pubkey: e.key.slice(1),
                    signature: e.value
                }
            }, t.encode = function(e) {
                const t = Buffer.from([n.InputTypes.PARTIAL_SIG]);
                return {
                    key: Buffer.concat([t, e.pubkey]),
                    value: e.signature
                }
            }, t.expected = "{ pubkey: Buffer; signature: Buffer; }", t.check = function(e) {
                return Buffer.isBuffer(e.pubkey) && Buffer.isBuffer(e.signature) && [33, 65].includes(e.pubkey.length) && [2, 3, 4].includes(e.pubkey[0]) && function(e) {
                    if (!Buffer.isBuffer(e) || e.length < 9) return !1;
                    if (48 !== e[0]) return !1;
                    if (e.length !== e[1] + 3) return !1;
                    if (2 !== e[2]) return !1;
                    const t = e[3];
                    if (t > 33 || t < 1) return !1;
                    if (2 !== e[3 + t + 1]) return !1;
                    const r = e[3 + t + 2];
                    return !(r > 33 || r < 1) && e.length === 3 + t + 2 + r + 2
                }(e.signature)
            }, t.canAddToArray = function(e, t, r) {
                const n = t.pubkey.toString("hex");
                return !r.has(n) && (r.add(n), 0 === e.filter(e => e.pubkey.equals(t.pubkey)).length)
            }
        },
        4182: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);
            t.decode = function(e) {
                if (e.key[0] !== n.InputTypes.POR_COMMITMENT) throw new Error("Decode Error: could not decode porCommitment with key 0x" + e.key.toString("hex"));
                return e.value.toString("utf8")
            }, t.encode = function(e) {
                return {
                    key: Buffer.from([n.InputTypes.POR_COMMITMENT]),
                    value: Buffer.from(e, "utf8")
                }
            }, t.expected = "string", t.check = function(e) {
                return "string" == typeof e
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.porCommitment
            }
        },
        4183: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);
            t.decode = function(e) {
                if (e.key[0] !== n.InputTypes.SIGHASH_TYPE) throw new Error("Decode Error: could not decode sighashType with key 0x" + e.key.toString("hex"));
                return e.value.readUInt32LE(0)
            }, t.encode = function(e) {
                const t = Buffer.from([n.InputTypes.SIGHASH_TYPE]),
                    r = Buffer.allocUnsafe(4);
                return r.writeUInt32LE(e, 0), {
                    key: t,
                    value: r
                }
            }, t.expected = "number", t.check = function(e) {
                return "number" == typeof e
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.sighashType
            }
        },
        4184: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);

            function i(e) {
                return Buffer.isBuffer(e) && (64 === e.length || 65 === e.length)
            }
            t.decode = function(e) {
                if (e.key[0] !== n.InputTypes.TAP_KEY_SIG || 1 !== e.key.length) throw new Error("Decode Error: could not decode tapKeySig with key 0x" + e.key.toString("hex"));
                if (!i(e.value)) throw new Error("Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature");
                return e.value
            }, t.encode = function(e) {
                return {
                    key: Buffer.from([n.InputTypes.TAP_KEY_SIG]),
                    value: e
                }
            }, t.expected = "Buffer", t.check = i, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.tapKeySig
            }
        },
        4185: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);
            t.decode = function(e) {
                if (e.key[0] !== n.InputTypes.TAP_LEAF_SCRIPT) throw new Error("Decode Error: could not decode tapLeafScript with key 0x" + e.key.toString("hex"));
                if ((e.key.length - 2) % 32 != 0) throw new Error("Decode Error: tapLeafScript has invalid control block in key 0x" + e.key.toString("hex"));
                const t = e.value[e.value.length - 1];
                if ((254 & e.key[1]) !== t) throw new Error("Decode Error: tapLeafScript bad leaf version in key 0x" + e.key.toString("hex"));
                const r = e.value.slice(0, -1);
                return {
                    controlBlock: e.key.slice(1),
                    script: r,
                    leafVersion: t
                }
            }, t.encode = function(e) {
                const t = Buffer.from([n.InputTypes.TAP_LEAF_SCRIPT]),
                    r = Buffer.from([e.leafVersion]);
                return {
                    key: Buffer.concat([t, e.controlBlock]),
                    value: Buffer.concat([e.script, r])
                }
            }, t.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }", t.check = function(e) {
                return Buffer.isBuffer(e.controlBlock) && (e.controlBlock.length - 1) % 32 == 0 && (254 & e.controlBlock[0]) === e.leafVersion && Buffer.isBuffer(e.script)
            }, t.canAddToArray = function(e, t, r) {
                const n = t.controlBlock.toString("hex");
                return !r.has(n) && (r.add(n), 0 === e.filter(e => e.controlBlock.equals(t.controlBlock)).length)
            }
        },
        4186: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);

            function i(e) {
                return Buffer.isBuffer(e) && 32 === e.length
            }
            t.decode = function(e) {
                if (e.key[0] !== n.InputTypes.TAP_MERKLE_ROOT || 1 !== e.key.length) throw new Error("Decode Error: could not decode tapMerkleRoot with key 0x" + e.key.toString("hex"));
                if (!i(e.value)) throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
                return e.value
            }, t.encode = function(e) {
                return {
                    key: Buffer.from([n.InputTypes.TAP_MERKLE_ROOT]),
                    value: e
                }
            }, t.expected = "Buffer", t.check = i, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.tapMerkleRoot
            }
        },
        4187: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136);
            t.decode = function(e) {
                if (e.key[0] !== n.InputTypes.TAP_SCRIPT_SIG) throw new Error("Decode Error: could not decode tapScriptSig with key 0x" + e.key.toString("hex"));
                if (65 !== e.key.length) throw new Error("Decode Error: tapScriptSig has invalid key 0x" + e.key.toString("hex"));
                if (64 !== e.value.length && 65 !== e.value.length) throw new Error("Decode Error: tapScriptSig has invalid signature in key 0x" + e.key.toString("hex"));
                return {
                    pubkey: e.key.slice(1, 33),
                    leafHash: e.key.slice(33),
                    signature: e.value
                }
            }, t.encode = function(e) {
                const t = Buffer.from([n.InputTypes.TAP_SCRIPT_SIG]);
                return {
                    key: Buffer.concat([t, e.pubkey, e.leafHash]),
                    value: e.signature
                }
            }, t.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }", t.check = function(e) {
                return Buffer.isBuffer(e.pubkey) && Buffer.isBuffer(e.leafHash) && Buffer.isBuffer(e.signature) && 32 === e.pubkey.length && 32 === e.leafHash.length && (64 === e.signature.length || 65 === e.signature.length)
            }, t.canAddToArray = function(e, t, r) {
                const n = t.pubkey.toString("hex") + t.leafHash.toString("hex");
                return !r.has(n) && (r.add(n), 0 === e.filter(e => e.pubkey.equals(t.pubkey) && e.leafHash.equals(t.leafHash)).length)
            }
        },
        4188: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136),
                i = r(1135),
                o = r(432);
            t.decode = function(e) {
                if (e.key[0] !== n.InputTypes.WITNESS_UTXO) throw new Error("Decode Error: could not decode witnessUtxo with key 0x" + e.key.toString("hex"));
                const t = i.readUInt64LE(e.value, 0);
                let r = 8;
                const s = o.decode(e.value, r);
                r += o.encodingLength(s);
                const u = e.value.slice(r);
                if (u.length !== s) throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
                return {
                    script: u,
                    value: t
                }
            }, t.encode = function(e) {
                const {
                    script: t,
                    value: r
                } = e, s = o.encodingLength(t.length), u = Buffer.allocUnsafe(8 + s + t.length);
                return i.writeUInt64LE(u, r, 0), o.encode(t.length, u, 8), t.copy(u, 8 + s), {
                    key: Buffer.from([n.InputTypes.WITNESS_UTXO]),
                    value: u
                }
            }, t.expected = "{ script: Buffer; value: number; }", t.check = function(e) {
                return Buffer.isBuffer(e.script) && "number" == typeof e.value
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.witnessUtxo
            }
        },
        4189: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(136),
                i = r(432);
            t.decode = function(e) {
                if (e.key[0] !== n.OutputTypes.TAP_TREE || 1 !== e.key.length) throw new Error("Decode Error: could not decode tapTree with key 0x" + e.key.toString("hex"));
                let t = 0;
                const r = [];
                for (; t < e.value.length;) {
                    const n = e.value[t++],
                        o = e.value[t++],
                        s = i.decode(e.value, t);
                    t += i.encodingLength(s), r.push({
                        depth: n,
                        leafVersion: o,
                        script: e.value.slice(t, t + s)
                    }), t += s
                }
                return {
                    leaves: r
                }
            }, t.encode = function(e) {
                const t = Buffer.from([n.OutputTypes.TAP_TREE]),
                    r = [].concat(...e.leaves.map(e => [Buffer.of(e.depth, e.leafVersion), i.encode(e.script.length), e.script]));
                return {
                    key: t,
                    value: Buffer.concat(r)
                }
            }, t.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }", t.check = function(e) {
                return Array.isArray(e.leaves) && e.leaves.every(e => e.depth >= 0 && e.depth <= 128 && (254 & e.leafVersion) === e.leafVersion && Buffer.isBuffer(e.script))
            }, t.canAdd = function(e, t) {
                return !!e && !!t && void 0 === e.tapTree
            }
        },
        4190: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeChecker = function(e) {
                return function(t) {
                    let r;
                    if (e.includes(t.key[0]) && (r = t.key.slice(1), 33 !== r.length && 65 !== r.length || ![2, 3, 4].includes(r[0]))) throw new Error("Format Error: invalid pubkey in key 0x" + t.key.toString("hex"));
                    return r
                }
            }
        },
        4191: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeConverter = function(e) {
                return {
                    decode: function(t) {
                        if (t.key[0] !== e) throw new Error("Decode Error: could not decode redeemScript with key 0x" + t.key.toString("hex"));
                        return t.value
                    },
                    encode: function(t) {
                        return {
                            key: Buffer.from([e]),
                            value: t
                        }
                    },
                    check: function(e) {
                        return Buffer.isBuffer(e)
                    },
                    expected: "Buffer",
                    canAdd: function(e, t) {
                        return !!e && !!t && void 0 === e.redeemScript
                    }
                }
            }
        },
        4192: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(432),
                i = r(2011),
                o = e => 32 === e.length;
            t.makeConverter = function(e) {
                const t = i.makeConverter(e, o);
                return {
                    decode: function(e) {
                        const r = n.decode(e.value),
                            i = n.encodingLength(r),
                            o = t.decode({
                                key: e.key,
                                value: e.value.slice(i + 32 * r)
                            }),
                            s = new Array(r);
                        for (let t = 0, n = i; t < r; t++, n += 32) s[t] = e.value.slice(n, n + 32);
                        return Object.assign({}, o, {
                            leafHashes: s
                        })
                    },
                    encode: function(e) {
                        const r = t.encode(e),
                            i = n.encodingLength(e.leafHashes.length),
                            o = Buffer.allocUnsafe(i);
                        n.encode(e.leafHashes.length, o);
                        const s = Buffer.concat([o, ...e.leafHashes, r.value]);
                        return Object.assign({}, r, {
                            value: s
                        })
                    },
                    check: function(e) {
                        return Array.isArray(e.leafHashes) && e.leafHashes.every(e => Buffer.isBuffer(e) && 32 === e.length) && t.check(e)
                    },
                    expected: "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }",
                    canAddToArray: t.canAddToArray
                }
            }
        },
        4193: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeConverter = function(e) {
                return {
                    decode: function(t) {
                        if (t.key[0] !== e || 1 !== t.key.length) throw new Error("Decode Error: could not decode tapInternalKey with key 0x" + t.key.toString("hex"));
                        if (32 !== t.value.length) throw new Error("Decode Error: tapInternalKey not a 32-byte x-only pubkey");
                        return t.value
                    },
                    encode: function(t) {
                        return {
                            key: Buffer.from([e]),
                            value: t
                        }
                    },
                    check: function(e) {
                        return Buffer.isBuffer(e) && 32 === e.length
                    },
                    expected: "Buffer",
                    canAdd: function(e, t) {
                        return !!e && !!t && void 0 === e.tapInternalKey
                    }
                }
            }
        },
        4194: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeConverter = function(e) {
                return {
                    decode: function(t) {
                        if (t.key[0] !== e) throw new Error("Decode Error: could not decode witnessScript with key 0x" + t.key.toString("hex"));
                        return t.value
                    },
                    encode: function(t) {
                        return {
                            key: Buffer.from([e]),
                            value: t
                        }
                    },
                    check: function(e) {
                        return Buffer.isBuffer(e)
                    },
                    expected: "Buffer",
                    canAdd: function(e, t) {
                        return !!e && !!t && void 0 === e.witnessScript
                    }
                }
            }
        },
        4195: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(1134),
                i = r(1135);
            t.psbtToBuffer = function({
                globalMap: e,
                inputs: t,
                outputs: r
            }) {
                const {
                    globalKeyVals: n,
                    inputKeyVals: o,
                    outputKeyVals: s
                } = u({
                    globalMap: e,
                    inputs: t,
                    outputs: r
                }), f = i.keyValsToBuffer(n), c = e => 0 === e.length ? [Buffer.from([0])] : e.map(i.keyValsToBuffer), a = c(o), l = c(s), h = Buffer.allocUnsafe(5);
                return h.writeUIntBE(482972169471, 0, 5), Buffer.concat([h, f].concat(a, l))
            };
            const o = (e, t) => e.key.compare(t.key);

            function s(e, t) {
                const r = new Set,
                    n = Object.entries(e).reduce((e, [n, i]) => {
                        if ("unknownKeyVals" === n) return e;
                        const o = t[n];
                        if (void 0 === o) return e;
                        const s = (Array.isArray(i) ? i : [i]).map(o.encode);
                        return s.map(e => e.key.toString("hex")).forEach(e => {
                            if (r.has(e)) throw new Error("Serialize Error: Duplicate key: " + e);
                            r.add(e)
                        }), e.concat(s)
                    }, []),
                    i = e.unknownKeyVals ? e.unknownKeyVals.filter(e => !r.has(e.key.toString("hex"))) : [];
                return n.concat(i).sort(o)
            }

            function u({
                globalMap: e,
                inputs: t,
                outputs: r
            }) {
                return {
                    globalKeyVals: s(e, n.globals),
                    inputKeyVals: t.map(e => s(e, n.inputs)),
                    outputKeyVals: r.map(e => s(e, n.outputs))
                }
            }
            t.psbtToKeyVals = u
        },
        432: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function n(e) {
                if (e < 0 || e > 9007199254740991 || e % 1 != 0) throw new RangeError("value out of range")
            }

            function i(e) {
                return n(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9
            }
            t.encode = function e(t, r, o) {
                if (n(t), r || (r = Buffer.allocUnsafe(i(t))), !Buffer.isBuffer(r)) throw new TypeError("buffer must be a Buffer instance");
                return o || (o = 0), t < 253 ? (r.writeUInt8(t, o), Object.assign(e, {
                    bytes: 1
                })) : t <= 65535 ? (r.writeUInt8(253, o), r.writeUInt16LE(t, o + 1), Object.assign(e, {
                    bytes: 3
                })) : t <= 4294967295 ? (r.writeUInt8(254, o), r.writeUInt32LE(t, o + 1), Object.assign(e, {
                    bytes: 5
                })) : (r.writeUInt8(255, o), r.writeUInt32LE(t >>> 0, o + 1), r.writeUInt32LE(t / 4294967296 | 0, o + 5), Object.assign(e, {
                    bytes: 9
                })), r
            }, t.decode = function e(t, r) {
                if (!Buffer.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");
                r || (r = 0);
                const i = t.readUInt8(r);
                if (i < 253) return Object.assign(e, {
                    bytes: 1
                }), i;
                if (253 === i) return Object.assign(e, {
                    bytes: 3
                }), t.readUInt16LE(r + 1);
                if (254 === i) return Object.assign(e, {
                    bytes: 5
                }), t.readUInt32LE(r + 1);
                {
                    Object.assign(e, {
                        bytes: 9
                    });
                    const i = t.readUInt32LE(r + 1),
                        o = 4294967296 * t.readUInt32LE(r + 5) + i;
                    return n(o), o
                }
            }, t.encodingLength = i
        },
        453: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toBigIntLE = function(e) {
                {
                    const t = Buffer.from(e);
                    t.reverse();
                    const r = t.toString("hex");
                    return 0 === r.length ? BigInt(0) : BigInt("0x" + r)
                }
            }, t.toBigIntBE = function(e) {
                {
                    const t = e.toString("hex");
                    return 0 === t.length ? BigInt(0) : BigInt("0x" + t)
                }
            }, t.toBufferLE = function(e, t) {
                {
                    const r = e.toString(16),
                        n = Buffer.from(r.padStart(2 * t, "0").slice(0, 2 * t), "hex");
                    return n.reverse(), n
                }
            }, t.toBufferBE = function(e, t) {
                {
                    const r = e.toString(16);
                    return Buffer.from(r.padStart(2 * t, "0").slice(0, 2 * t), "hex")
                }
            }
        },
        519: function(e, t, r) {
            const BigInteger = r(109),
                n = r(21).Buffer,
                i = r(1082);
            e.exports = {
                bufferToInt: function(e) {
                    return BigInteger.fromBuffer(e)
                },
                intToBuffer: function(e) {
                    return e.toBuffer(32)
                },
                hash: function(e) {
                    return n.from(i.create().update(e).array())
                }
            }
        },
        61: function(e, t, r) {
            var n;
            ! function(i) {
                "use strict";
                var o, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
                    f = Math.ceil,
                    c = Math.floor,
                    a = "[BigNumber Error] ",
                    l = a + "Number primitive has more than 15 significant digits: ",
                    h = 1e14,
                    p = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    d = 1e9;

                function y(e) {
                    var t = 0 | e;
                    return e > 0 || e === t ? t : t - 1
                }

                function g(e) {
                    for (var t, r, n = 1, i = e.length, o = e[0] + ""; n < i;) {
                        for (r = 14 - (t = e[n++] + "").length; r--; t = "0" + t);
                        o += t
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function m(e, t) {
                    var r, n, i = e.c,
                        o = t.c,
                        s = e.s,
                        u = t.s,
                        f = e.e,
                        c = t.e;
                    if (!s || !u) return null;
                    if (r = i && !i[0], n = o && !o[0], r || n) return r ? n ? 0 : -u : s;
                    if (s != u) return s;
                    if (r = s < 0, n = f == c, !i || !o) return n ? 0 : !i ^ r ? 1 : -1;
                    if (!n) return f > c ^ r ? 1 : -1;
                    for (u = (f = i.length) < (c = o.length) ? f : c, s = 0; s < u; s++)
                        if (i[s] != o[s]) return i[s] > o[s] ^ r ? 1 : -1;
                    return f == c ? 0 : f > c ^ r ? 1 : -1
                }

                function T(e, t, r, n) {
                    if (e < t || e > r || e !== c(e)) throw Error(a + (n || "Argument") + ("number" == typeof e ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function w(e) {
                    var t = e.c.length - 1;
                    return y(e.e / 14) == t && e.c[t] % 2 != 0
                }

                function v(e, t) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function E(e, t, r) {
                    var n, i;
                    if (t < 0) {
                        for (i = r + "."; ++t; i += r);
                        e = i + e
                    } else if (++t > (n = e.length)) {
                        for (i = r, t -= n; --t; i += r);
                        e += i
                    } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }(o = function e(t) {
                    var r, n, i, o, b, I, S, k, B, _ = C.prototype = {
                            constructor: C,
                            toString: null,
                            valueOf: null
                        },
                        A = new C(1),
                        O = 20,
                        P = 4,
                        N = -7,
                        x = 21,
                        D = -1e7,
                        R = 1e7,
                        M = !1,
                        L = 1,
                        K = 0,
                        V = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: " ",
                            suffix: ""
                        },
                        U = "0123456789abcdefghijklmnopqrstuvwxyz";

                    function C(e, t) {
                        var r, o, u, f, a, h, p, d, y = this;
                        if (!(y instanceof C)) return new C(e, t);
                        if (null == t) {
                            if (e && !0 === e._isBigNumber) return y.s = e.s, void(!e.c || e.e > R ? y.c = y.e = null : e.e < D ? y.c = [y.e = 0] : (y.e = e.e, y.c = e.c.slice()));
                            if ((h = "number" == typeof e) && 0 * e == 0) {
                                if (y.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (f = 0, a = e; a >= 10; a /= 10, f++);
                                    return void(f > R ? y.c = y.e = null : (y.e = f, y.c = [e]))
                                }
                                d = String(e)
                            } else {
                                if (!s.test(d = String(e))) return i(y, d, h);
                                y.s = 45 == d.charCodeAt(0) ? (d = d.slice(1), -1) : 1
                            }(f = d.indexOf(".")) > -1 && (d = d.replace(".", "")), (a = d.search(/e/i)) > 0 ? (f < 0 && (f = a), f += +d.slice(a + 1), d = d.substring(0, a)) : f < 0 && (f = d.length)
                        } else {
                            if (T(t, 2, U.length, "Base"), 10 == t) return X(y = new C(e), O + y.e + 1, P);
                            if (d = String(e), h = "number" == typeof e) {
                                if (0 * e != 0) return i(y, d, h, t);
                                if (y.s = 1 / e < 0 ? (d = d.slice(1), -1) : 1, C.DEBUG && d.replace(/^0\.0*|\./, "").length > 15) throw Error(l + e)
                            } else y.s = 45 === d.charCodeAt(0) ? (d = d.slice(1), -1) : 1;
                            for (r = U.slice(0, t), f = a = 0, p = d.length; a < p; a++)
                                if (r.indexOf(o = d.charAt(a)) < 0) {
                                    if ("." == o) {
                                        if (a > f) {
                                            f = p;
                                            continue
                                        }
                                    } else if (!u && (d == d.toUpperCase() && (d = d.toLowerCase()) || d == d.toLowerCase() && (d = d.toUpperCase()))) {
                                        u = !0, a = -1, f = 0;
                                        continue
                                    }
                                    return i(y, String(e), h, t)
                                } h = !1, (f = (d = n(d, t, 10, y.s)).indexOf(".")) > -1 ? d = d.replace(".", "") : f = d.length
                        }
                        for (a = 0; 48 === d.charCodeAt(a); a++);
                        for (p = d.length; 48 === d.charCodeAt(--p););
                        if (d = d.slice(a, ++p)) {
                            if (p -= a, h && C.DEBUG && p > 15 && (e > 9007199254740991 || e !== c(e))) throw Error(l + y.s * e);
                            if ((f = f - a - 1) > R) y.c = y.e = null;
                            else if (f < D) y.c = [y.e = 0];
                            else {
                                if (y.e = f, y.c = [], a = (f + 1) % 14, f < 0 && (a += 14), a < p) {
                                    for (a && y.c.push(+d.slice(0, a)), p -= 14; a < p;) y.c.push(+d.slice(a, a += 14));
                                    a = 14 - (d = d.slice(a)).length
                                } else a -= p;
                                for (; a--; d += "0");
                                y.c.push(+d)
                            }
                        } else y.c = [y.e = 0]
                    }

                    function G(e, t, r, n) {
                        var i, o, s, u, f;
                        if (null == r ? r = P : T(r, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], s = e.e, null == t) f = g(e.c), f = 1 == n || 2 == n && (s <= N || s >= x) ? v(f, s) : E(f, s, "0");
                        else if (o = (e = X(new C(e), t, r)).e, u = (f = g(e.c)).length, 1 == n || 2 == n && (t <= o || o <= N)) {
                            for (; u < t; f += "0", u++);
                            f = v(f, o)
                        } else if (t -= s, f = E(f, o, "0"), o + 1 > u) {
                            if (--t > 0)
                                for (f += "."; t--; f += "0");
                        } else if ((t += o - u) > 0)
                            for (o + 1 == u && (f += "."); t--; f += "0");
                        return e.s < 0 && i ? "-" + f : f
                    }

                    function F(e, t) {
                        for (var r, n = 1, i = new C(e[0]); n < e.length; n++) {
                            if (!(r = new C(e[n])).s) {
                                i = r;
                                break
                            }
                            t.call(i, r) && (i = r)
                        }
                        return i
                    }

                    function j(e, t, r) {
                        for (var n = 1, i = t.length; !t[--i]; t.pop());
                        for (i = t[0]; i >= 10; i /= 10, n++);
                        return (r = n + 14 * r - 1) > R ? e.c = e.e = null : r < D ? e.c = [e.e = 0] : (e.e = r, e.c = t), e
                    }

                    function X(e, t, r, n) {
                        var i, o, s, u, a, l, d, y = e.c,
                            g = p;
                        if (y) {
                            e: {
                                for (i = 1, u = y[0]; u >= 10; u /= 10, i++);
                                if ((o = t - i) < 0) o += 14,
                                s = t,
                                d = (a = y[l = 0]) / g[i - s - 1] % 10 | 0;
                                else if ((l = f((o + 1) / 14)) >= y.length) {
                                    if (!n) break e;
                                    for (; y.length <= l; y.push(0));
                                    a = d = 0, i = 1, s = (o %= 14) - 14 + 1
                                } else {
                                    for (a = u = y[l], i = 1; u >= 10; u /= 10, i++);
                                    d = (s = (o %= 14) - 14 + i) < 0 ? 0 : a / g[i - s - 1] % 10 | 0
                                }
                                if (n = n || t < 0 || null != y[l + 1] || (s < 0 ? a : a % g[i - s - 1]), n = r < 4 ? (d || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : d > 5 || 5 == d && (4 == r || n || 6 == r && (o > 0 ? s > 0 ? a / g[i - s] : 0 : y[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !y[0]) return y.length = 0,
                                n ? (t -= e.e + 1, y[0] = g[(14 - t % 14) % 14], e.e = -t || 0) : y[0] = e.e = 0,
                                e;
                                if (0 == o ? (y.length = l, u = 1, l--) : (y.length = l + 1, u = g[14 - o], y[l] = s > 0 ? c(a / g[i - s] % g[s]) * u : 0), n)
                                    for (;;) {
                                        if (0 == l) {
                                            for (o = 1, s = y[0]; s >= 10; s /= 10, o++);
                                            for (s = y[0] += u, u = 1; s >= 10; s /= 10, u++);
                                            o != u && (e.e++, y[0] == h && (y[0] = 1));
                                            break
                                        }
                                        if (y[l] += u, y[l] != h) break;
                                        y[l--] = 0, u = 1
                                    }
                                for (o = y.length; 0 === y[--o]; y.pop());
                            }
                            e.e > R ? e.c = e.e = null : e.e < D && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function W(e) {
                        var t, r = e.e;
                        return null === r ? e.toString() : (t = g(e.c), t = r <= N || r >= x ? v(t, r) : E(t, r, "0"), e.s < 0 ? "-" + t : t)
                    }
                    return C.clone = e, C.ROUND_UP = 0, C.ROUND_DOWN = 1, C.ROUND_CEIL = 2, C.ROUND_FLOOR = 3, C.ROUND_HALF_UP = 4, C.ROUND_HALF_DOWN = 5, C.ROUND_HALF_EVEN = 6, C.ROUND_HALF_CEIL = 7, C.ROUND_HALF_FLOOR = 8, C.EUCLID = 9, C.config = C.set = function(e) {
                        var t, r;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(a + "Object expected: " + e);
                            if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (T(r = e[t], 0, d, t), O = r), e.hasOwnProperty(t = "ROUNDING_MODE") && (T(r = e[t], 0, 8, t), P = r), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((r = e[t]) && r.pop ? (T(r[0], -d, 0, t), T(r[1], 0, d, t), N = r[0], x = r[1]) : (T(r, -d, d, t), N = -(x = r < 0 ? -r : r))), e.hasOwnProperty(t = "RANGE"))
                                if ((r = e[t]) && r.pop) T(r[0], -d, -1, t), T(r[1], 1, d, t), D = r[0], R = r[1];
                                else {
                                    if (T(r, -d, d, t), !r) throw Error(a + t + " cannot be zero: " + r);
                                    D = -(R = r < 0 ? -r : r)
                                } if (e.hasOwnProperty(t = "CRYPTO")) {
                                if ((r = e[t]) !== !!r) throw Error(a + t + " not true or false: " + r);
                                if (r) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw M = !r, Error(a + "crypto unavailable");
                                    M = r
                                } else M = r
                            }
                            if (e.hasOwnProperty(t = "MODULO_MODE") && (T(r = e[t], 0, 9, t), L = r), e.hasOwnProperty(t = "POW_PRECISION") && (T(r = e[t], 0, d, t), K = r), e.hasOwnProperty(t = "FORMAT")) {
                                if ("object" != typeof(r = e[t])) throw Error(a + t + " not an object: " + r);
                                V = r
                            }
                            if (e.hasOwnProperty(t = "ALPHABET")) {
                                if ("string" != typeof(r = e[t]) || /^.$|[+-.\s]|(.).*\1/.test(r)) throw Error(a + t + " invalid: " + r);
                                U = r
                            }
                        }
                        return {
                            DECIMAL_PLACES: O,
                            ROUNDING_MODE: P,
                            EXPONENTIAL_AT: [N, x],
                            RANGE: [D, R],
                            CRYPTO: M,
                            MODULO_MODE: L,
                            POW_PRECISION: K,
                            FORMAT: V,
                            ALPHABET: U
                        }
                    }, C.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!C.DEBUG) return !0;
                        var t, r, n = e.c,
                            i = e.e,
                            o = e.s;
                        e: if ("[object Array]" == {}.toString.call(n)) {
                            if ((1 === o || -1 === o) && i >= -d && i <= d && i === c(i)) {
                                if (0 === n[0]) {
                                    if (0 === i && 1 === n.length) return !0;
                                    break e
                                }
                                if ((t = (i + 1) % 14) < 1 && (t += 14), String(n[0]).length == t) {
                                    for (t = 0; t < n.length; t++)
                                        if ((r = n[t]) < 0 || r >= h || r !== c(r)) break e;
                                    if (0 !== r) return !0
                                }
                            }
                        } else if (null === n && null === i && (null === o || 1 === o || -1 === o)) return !0;
                        throw Error(a + "Invalid BigNumber: " + e)
                    }, C.maximum = C.max = function() {
                        return F(arguments, _.lt)
                    }, C.minimum = C.min = function() {
                        return F(arguments, _.gt)
                    }, C.random = (o = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return c(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var t, r, n, i, s, u = 0,
                            l = [],
                            h = new C(A);
                        if (null == e ? e = O : T(e, 0, d), i = f(e / 14), M)
                            if (crypto.getRandomValues) {
                                for (t = crypto.getRandomValues(new Uint32Array(i *= 2)); u < i;)(s = 131072 * t[u] + (t[u + 1] >>> 11)) >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)), t[u] = r[0], t[u + 1] = r[1]) : (l.push(s % 1e14), u += 2);
                                u = i / 2
                            } else {
                                if (!crypto.randomBytes) throw M = !1, Error(a + "crypto unavailable");
                                for (t = crypto.randomBytes(i *= 7); u < i;)(s = 281474976710656 * (31 & t[u]) + 1099511627776 * t[u + 1] + 4294967296 * t[u + 2] + 16777216 * t[u + 3] + (t[u + 4] << 16) + (t[u + 5] << 8) + t[u + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, u) : (l.push(s % 1e14), u += 7);
                                u = i / 7
                            } if (!M)
                            for (; u < i;)(s = o()) < 9e15 && (l[u++] = s % 1e14);
                        for (e %= 14, (i = l[--u]) && e && (s = p[14 - e], l[u] = c(i / s) * s); 0 === l[u]; l.pop(), u--);
                        if (u < 0) l = [n = 0];
                        else {
                            for (n = -1; 0 === l[0]; l.splice(0, 1), n -= 14);
                            for (u = 1, s = l[0]; s >= 10; s /= 10, u++);
                            u < 14 && (n -= 14 - u)
                        }
                        return h.e = n, h.c = l, h
                    }), C.sum = function() {
                        for (var e = 1, t = arguments, r = new C(t[0]); e < t.length;) r = r.plus(t[e++]);
                        return r
                    }, n = function() {
                        function e(e, t, r, n) {
                            for (var i, o, s = [0], u = 0, f = e.length; u < f;) {
                                for (o = s.length; o--; s[o] *= t);
                                for (s[0] += n.indexOf(e.charAt(u++)), i = 0; i < s.length; i++) s[i] > r - 1 && (null == s[i + 1] && (s[i + 1] = 0), s[i + 1] += s[i] / r | 0, s[i] %= r)
                            }
                            return s.reverse()
                        }
                        return function(t, n, i, o, s) {
                            var u, f, c, a, l, h, p, d, y = t.indexOf("."),
                                m = O,
                                T = P;
                            for (y >= 0 && (a = K, K = 0, t = t.replace(".", ""), h = (d = new C(n)).pow(t.length - y), K = a, d.c = e(E(g(h.c), h.e, "0"), 10, i, "0123456789"), d.e = d.c.length), c = a = (p = e(t, n, i, s ? (u = U, "0123456789") : (u = "0123456789", U))).length; 0 == p[--a]; p.pop());
                            if (!p[0]) return u.charAt(0);
                            if (y < 0 ? --c : (h.c = p, h.e = c, h.s = o, p = (h = r(h, d, m, T, i)).c, l = h.r, c = h.e), y = p[f = c + m + 1], a = i / 2, l = l || f < 0 || null != p[f + 1], l = T < 4 ? (null != y || l) && (0 == T || T == (h.s < 0 ? 3 : 2)) : y > a || y == a && (4 == T || l || 6 == T && 1 & p[f - 1] || T == (h.s < 0 ? 8 : 7)), f < 1 || !p[0]) t = l ? E(u.charAt(1), -m, u.charAt(0)) : u.charAt(0);
                            else {
                                if (p.length = f, l)
                                    for (--i; ++p[--f] > i;) p[f] = 0, f || (++c, p = [1].concat(p));
                                for (a = p.length; !p[--a];);
                                for (y = 0, t = ""; y <= a; t += u.charAt(p[y++]));
                                t = E(t, c, u.charAt(0))
                            }
                            return t
                        }
                    }(), r = function() {
                        function e(e, t, r) {
                            var n, i, o, s, u = 0,
                                f = e.length,
                                c = t % 1e7,
                                a = t / 1e7 | 0;
                            for (e = e.slice(); f--;) u = ((i = c * (o = e[f] % 1e7) + (n = a * o + (s = e[f] / 1e7 | 0) * c) % 1e7 * 1e7 + u) / r | 0) + (n / 1e7 | 0) + a * s, e[f] = i % r;
                            return u && (e = [u].concat(e)), e
                        }

                        function t(e, t, r, n) {
                            var i, o;
                            if (r != n) o = r > n ? 1 : -1;
                            else
                                for (i = o = 0; i < r; i++)
                                    if (e[i] != t[i]) {
                                        o = e[i] > t[i] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function r(e, t, r, n) {
                            for (var i = 0; r--;) e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[r] - t[r];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(n, i, o, s, u) {
                            var f, a, l, p, d, g, m, T, w, v, E, b, I, S, k, B, _, A = n.s == i.s ? 1 : -1,
                                O = n.c,
                                P = i.c;
                            if (!(O && O[0] && P && P[0])) return new C(n.s && i.s && (O ? !P || O[0] != P[0] : P) ? O && 0 == O[0] || !P ? 0 * A : A / 0 : NaN);
                            for (w = (T = new C(A)).c = [], A = o + (a = n.e - i.e) + 1, u || (u = h, a = y(n.e / 14) - y(i.e / 14), A = A / 14 | 0), l = 0; P[l] == (O[l] || 0); l++);
                            if (P[l] > (O[l] || 0) && a--, A < 0) w.push(1), p = !0;
                            else {
                                for (S = O.length, B = P.length, l = 0, A += 2, (d = c(u / (P[0] + 1))) > 1 && (P = e(P, d, u), O = e(O, d, u), B = P.length, S = O.length), I = B, E = (v = O.slice(0, B)).length; E < B; v[E++] = 0);
                                _ = P.slice(), _ = [0].concat(_), k = P[0], P[1] >= u / 2 && k++;
                                do {
                                    if (d = 0, (f = t(P, v, B, E)) < 0) {
                                        if (b = v[0], B != E && (b = b * u + (v[1] || 0)), (d = c(b / k)) > 1)
                                            for (d >= u && (d = u - 1), m = (g = e(P, d, u)).length, E = v.length; 1 == t(g, v, m, E);) d--, r(g, B < m ? _ : P, m, u), m = g.length, f = 1;
                                        else 0 == d && (f = d = 1), m = (g = P.slice()).length;
                                        if (m < E && (g = [0].concat(g)), r(v, g, E, u), E = v.length, -1 == f)
                                            for (; t(P, v, B, E) < 1;) d++, r(v, B < E ? _ : P, E, u), E = v.length
                                    } else 0 === f && (d++, v = [0]);
                                    w[l++] = d, v[0] ? v[E++] = O[I] || 0 : (v = [O[I]], E = 1)
                                } while ((I++ < S || null != v[0]) && A--);
                                p = null != v[0], w[0] || w.splice(0, 1)
                            }
                            if (u == h) {
                                for (l = 1, A = w[0]; A >= 10; A /= 10, l++);
                                X(T, o + (T.e = l + 14 * a - 1) + 1, s, p)
                            } else T.e = a, T.r = +p;
                            return T
                        }
                    }(), b = /^(-?)0([xbo])(?=\w[\w.]*$)/i, I = /^([^.]+)\.$/, S = /^\.([^.]+)$/, k = /^-?(Infinity|NaN)$/, B = /^\s*\+(?=[\w.])|^\s+|\s+$/g, i = function(e, t, r, n) {
                        var i, o = r ? t : t.replace(B, "");
                        if (k.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1;
                        else {
                            if (!r && (o = o.replace(b, (function(e, t, r) {
                                    return i = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, n && n != i ? e : t
                                })), n && (i = n, o = o.replace(I, "$1").replace(S, "0.$1")), t != o)) return new C(o, i);
                            if (C.DEBUG) throw Error(a + "Not a" + (n ? " base " + n : "") + " number: " + t);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, _.absoluteValue = _.abs = function() {
                        var e = new C(this);
                        return e.s < 0 && (e.s = 1), e
                    }, _.comparedTo = function(e, t) {
                        return m(this, new C(e, t))
                    }, _.decimalPlaces = _.dp = function(e, t) {
                        var r, n, i, o = this;
                        if (null != e) return T(e, 0, d), null == t ? t = P : T(t, 0, 8), X(new C(o), e + o.e + 1, t);
                        if (!(r = o.c)) return null;
                        if (n = 14 * ((i = r.length - 1) - y(this.e / 14)), i = r[i])
                            for (; i % 10 == 0; i /= 10, n--);
                        return n < 0 && (n = 0), n
                    }, _.dividedBy = _.div = function(e, t) {
                        return r(this, new C(e, t), O, P)
                    }, _.dividedToIntegerBy = _.idiv = function(e, t) {
                        return r(this, new C(e, t), 0, 1)
                    }, _.exponentiatedBy = _.pow = function(e, t) {
                        var r, n, i, o, s, u, l, h, p = this;
                        if ((e = new C(e)).c && !e.isInteger()) throw Error(a + "Exponent not an integer: " + W(e));
                        if (null != t && (t = new C(t)), s = e.e > 14, !p.c || !p.c[0] || 1 == p.c[0] && !p.e && 1 == p.c.length || !e.c || !e.c[0]) return h = new C(Math.pow(+W(p), s ? 2 - w(e) : +W(e))), t ? h.mod(t) : h;
                        if (u = e.s < 0, t) {
                            if (t.c ? !t.c[0] : !t.s) return new C(NaN);
                            (n = !u && p.isInteger() && t.isInteger()) && (p = p.mod(t))
                        } else {
                            if (e.e > 9 && (p.e > 0 || p.e < -1 || (0 == p.e ? p.c[0] > 1 || s && p.c[1] >= 24e7 : p.c[0] < 8e13 || s && p.c[0] <= 9999975e7))) return o = p.s < 0 && w(e) ? -0 : 0, p.e > -1 && (o = 1 / o), new C(u ? 1 / o : o);
                            K && (o = f(K / 14 + 2))
                        }
                        for (s ? (r = new C(.5), u && (e.s = 1), l = w(e)) : l = (i = Math.abs(+W(e))) % 2, h = new C(A);;) {
                            if (l) {
                                if (!(h = h.times(p)).c) break;
                                o ? h.c.length > o && (h.c.length = o) : n && (h = h.mod(t))
                            }
                            if (i) {
                                if (0 === (i = c(i / 2))) break;
                                l = i % 2
                            } else if (X(e = e.times(r), e.e + 1, 1), e.e > 14) l = w(e);
                            else {
                                if (0 === (i = +W(e))) break;
                                l = i % 2
                            }
                            p = p.times(p), o ? p.c && p.c.length > o && (p.c.length = o) : n && (p = p.mod(t))
                        }
                        return n ? h : (u && (h = A.div(h)), t ? h.mod(t) : o ? X(h, K, P, void 0) : h)
                    }, _.integerValue = function(e) {
                        var t = new C(this);
                        return null == e ? e = P : T(e, 0, 8), X(t, t.e + 1, e)
                    }, _.isEqualTo = _.eq = function(e, t) {
                        return 0 === m(this, new C(e, t))
                    }, _.isFinite = function() {
                        return !!this.c
                    }, _.isGreaterThan = _.gt = function(e, t) {
                        return m(this, new C(e, t)) > 0
                    }, _.isGreaterThanOrEqualTo = _.gte = function(e, t) {
                        return 1 === (t = m(this, new C(e, t))) || 0 === t
                    }, _.isInteger = function() {
                        return !!this.c && y(this.e / 14) > this.c.length - 2
                    }, _.isLessThan = _.lt = function(e, t) {
                        return m(this, new C(e, t)) < 0
                    }, _.isLessThanOrEqualTo = _.lte = function(e, t) {
                        return -1 === (t = m(this, new C(e, t))) || 0 === t
                    }, _.isNaN = function() {
                        return !this.s
                    }, _.isNegative = function() {
                        return this.s < 0
                    }, _.isPositive = function() {
                        return this.s > 0
                    }, _.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, _.minus = function(e, t) {
                        var r, n, i, o, s = this,
                            u = s.s;
                        if (t = (e = new C(e, t)).s, !u || !t) return new C(NaN);
                        if (u != t) return e.s = -t, s.plus(e);
                        var f = s.e / 14,
                            c = e.e / 14,
                            a = s.c,
                            l = e.c;
                        if (!f || !c) {
                            if (!a || !l) return a ? (e.s = -t, e) : new C(l ? s : NaN);
                            if (!a[0] || !l[0]) return l[0] ? (e.s = -t, e) : new C(a[0] ? s : 3 == P ? -0 : 0)
                        }
                        if (f = y(f), c = y(c), a = a.slice(), u = f - c) {
                            for ((o = u < 0) ? (u = -u, i = a) : (c = f, i = l), i.reverse(), t = u; t--; i.push(0));
                            i.reverse()
                        } else
                            for (n = (o = (u = a.length) < (t = l.length)) ? u : t, u = t = 0; t < n; t++)
                                if (a[t] != l[t]) {
                                    o = a[t] < l[t];
                                    break
                                } if (o && (i = a, a = l, l = i, e.s = -e.s), (t = (n = l.length) - (r = a.length)) > 0)
                            for (; t--; a[r++] = 0);
                        for (t = h - 1; n > u;) {
                            if (a[--n] < l[n]) {
                                for (r = n; r && !a[--r]; a[r] = t);
                                --a[r], a[n] += h
                            }
                            a[n] -= l[n]
                        }
                        for (; 0 == a[0]; a.splice(0, 1), --c);
                        return a[0] ? j(e, a, c) : (e.s = 3 == P ? -1 : 1, e.c = [e.e = 0], e)
                    }, _.modulo = _.mod = function(e, t) {
                        var n, i, o = this;
                        return e = new C(e, t), !o.c || !e.s || e.c && !e.c[0] ? new C(NaN) : !e.c || o.c && !o.c[0] ? new C(o) : (9 == L ? (i = e.s, e.s = 1, n = r(o, e, 0, 3), e.s = i, n.s *= i) : n = r(o, e, 0, L), (e = o.minus(n.times(e))).c[0] || 1 != L || (e.s = o.s), e)
                    }, _.multipliedBy = _.times = function(e, t) {
                        var r, n, i, o, s, u, f, c, a, l, p, d, g, m, T = this,
                            w = T.c,
                            v = (e = new C(e, t)).c;
                        if (!(w && v && w[0] && v[0])) return !T.s || !e.s || w && !w[0] && !v || v && !v[0] && !w ? e.c = e.e = e.s = null : (e.s *= T.s, w && v ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (n = y(T.e / 14) + y(e.e / 14), e.s *= T.s, (f = w.length) < (l = v.length) && (g = w, w = v, v = g, i = f, f = l, l = i), i = f + l, g = []; i--; g.push(0));
                        for (m = h, 1e7, i = l; --i >= 0;) {
                            for (r = 0, p = v[i] % 1e7, d = v[i] / 1e7 | 0, o = i + (s = f); o > i;) r = ((c = p * (c = w[--s] % 1e7) + (u = d * c + (a = w[s] / 1e7 | 0) * p) % 1e7 * 1e7 + g[o] + r) / m | 0) + (u / 1e7 | 0) + d * a, g[o--] = c % m;
                            g[o] = r
                        }
                        return r ? ++n : g.splice(0, 1), j(e, g, n)
                    }, _.negated = function() {
                        var e = new C(this);
                        return e.s = -e.s || null, e
                    }, _.plus = function(e, t) {
                        var r, n = this,
                            i = n.s;
                        if (t = (e = new C(e, t)).s, !i || !t) return new C(NaN);
                        if (i != t) return e.s = -t, n.minus(e);
                        var o = n.e / 14,
                            s = e.e / 14,
                            u = n.c,
                            f = e.c;
                        if (!o || !s) {
                            if (!u || !f) return new C(i / 0);
                            if (!u[0] || !f[0]) return f[0] ? e : new C(u[0] ? n : 0 * i)
                        }
                        if (o = y(o), s = y(s), u = u.slice(), i = o - s) {
                            for (i > 0 ? (s = o, r = f) : (i = -i, r = u), r.reverse(); i--; r.push(0));
                            r.reverse()
                        }
                        for ((i = u.length) - (t = f.length) < 0 && (r = f, f = u, u = r, t = i), i = 0; t;) i = (u[--t] = u[t] + f[t] + i) / h | 0, u[t] = h === u[t] ? 0 : u[t] % h;
                        return i && (u = [i].concat(u), ++s), j(e, u, s)
                    }, _.precision = _.sd = function(e, t) {
                        var r, n, i, o = this;
                        if (null != e && e !== !!e) return T(e, 1, d), null == t ? t = P : T(t, 0, 8), X(new C(o), e, t);
                        if (!(r = o.c)) return null;
                        if (n = 14 * (i = r.length - 1) + 1, i = r[i]) {
                            for (; i % 10 == 0; i /= 10, n--);
                            for (i = r[0]; i >= 10; i /= 10, n++);
                        }
                        return e && o.e + 1 > n && (n = o.e + 1), n
                    }, _.shiftedBy = function(e) {
                        return T(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, _.squareRoot = _.sqrt = function() {
                        var e, t, n, i, o, s = this,
                            u = s.c,
                            f = s.s,
                            c = s.e,
                            a = O + 4,
                            l = new C("0.5");
                        if (1 !== f || !u || !u[0]) return new C(!f || f < 0 && (!u || u[0]) ? NaN : u ? s : 1 / 0);
                        if (0 == (f = Math.sqrt(+W(s))) || f == 1 / 0 ? (((t = g(u)).length + c) % 2 == 0 && (t += "0"), f = Math.sqrt(+t), c = y((c + 1) / 2) - (c < 0 || c % 2), n = new C(t = f == 1 / 0 ? "1e" + c : (t = f.toExponential()).slice(0, t.indexOf("e") + 1) + c)) : n = new C(f + ""), n.c[0])
                            for ((f = (c = n.e) + a) < 3 && (f = 0);;)
                                if (o = n, n = l.times(o.plus(r(s, o, a, 1))), g(o.c).slice(0, f) === (t = g(n.c)).slice(0, f)) {
                                    if (n.e < c && --f, "9999" != (t = t.slice(f - 3, f + 1)) && (i || "4999" != t)) {
                                        +t && (+t.slice(1) || "5" != t.charAt(0)) || (X(n, n.e + O + 2, 1), e = !n.times(n).eq(s));
                                        break
                                    }
                                    if (!i && (X(o, o.e + O + 2, 0), o.times(o).eq(s))) {
                                        n = o;
                                        break
                                    }
                                    a += 4, f += 4, i = 1
                                } return X(n, n.e + O + 1, P, e)
                    }, _.toExponential = function(e, t) {
                        return null != e && (T(e, 0, d), e++), G(this, e, t, 1)
                    }, _.toFixed = function(e, t) {
                        return null != e && (T(e, 0, d), e = e + this.e + 1), G(this, e, t)
                    }, _.toFormat = function(e, t, r) {
                        var n, i = this;
                        if (null == r) null != e && t && "object" == typeof t ? (r = t, t = null) : e && "object" == typeof e ? (r = e, e = t = null) : r = V;
                        else if ("object" != typeof r) throw Error(a + "Argument not an object: " + r);
                        if (n = i.toFixed(e, t), i.c) {
                            var o, s = n.split("."),
                                u = +r.groupSize,
                                f = +r.secondaryGroupSize,
                                c = r.groupSeparator || "",
                                l = s[0],
                                h = s[1],
                                p = i.s < 0,
                                d = p ? l.slice(1) : l,
                                y = d.length;
                            if (f && (o = u, u = f, f = o, y -= o), u > 0 && y > 0) {
                                for (o = y % u || u, l = d.substr(0, o); o < y; o += u) l += c + d.substr(o, u);
                                f > 0 && (l += c + d.slice(o)), p && (l = "-" + l)
                            }
                            n = h ? l + (r.decimalSeparator || "") + ((f = +r.fractionGroupSize) ? h.replace(new RegExp("\\d{" + f + "}\\B", "g"), "$&" + (r.fractionGroupSeparator || "")) : h) : l
                        }
                        return (r.prefix || "") + n + (r.suffix || "")
                    }, _.toFraction = function(e) {
                        var t, n, i, o, s, u, f, c, l, h, d, y, m = this,
                            T = m.c;
                        if (null != e && (!(f = new C(e)).isInteger() && (f.c || 1 !== f.s) || f.lt(A))) throw Error(a + "Argument " + (f.isInteger() ? "out of range: " : "not an integer: ") + W(f));
                        if (!T) return new C(m);
                        for (t = new C(A), l = n = new C(A), i = c = new C(A), y = g(T), s = t.e = y.length - m.e - 1, t.c[0] = p[(u = s % 14) < 0 ? 14 + u : u], e = !e || f.comparedTo(t) > 0 ? s > 0 ? t : l : f, u = R, R = 1 / 0, f = new C(y), c.c[0] = 0; h = r(f, t, 0, 1), 1 != (o = n.plus(h.times(i))).comparedTo(e);) n = i, i = o, l = c.plus(h.times(o = l)), c = o, t = f.minus(h.times(o = t)), f = o;
                        return o = r(e.minus(n), i, 0, 1), c = c.plus(o.times(l)), n = n.plus(o.times(i)), c.s = l.s = m.s, d = r(l, i, s *= 2, P).minus(m).abs().comparedTo(r(c, n, s, P).minus(m).abs()) < 1 ? [l, i] : [c, n], R = u, d
                    }, _.toNumber = function() {
                        return +W(this)
                    }, _.toPrecision = function(e, t) {
                        return null != e && T(e, 1, d), G(this, e, t, 2)
                    }, _.toString = function(e) {
                        var t, r = this,
                            i = r.s,
                            o = r.e;
                        return null === o ? i ? (t = "Infinity", i < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = o <= N || o >= x ? v(g(r.c), o) : E(g(r.c), o, "0") : 10 === e ? t = E(g((r = X(new C(r), O + o + 1, P)).c), r.e, "0") : (T(e, 2, U.length, "Base"), t = n(E(g(r.c), o, "0"), 10, e, i, !0)), i < 0 && r.c[0] && (t = "-" + t)), t
                    }, _.valueOf = _.toJSON = function() {
                        return W(this)
                    }, _._isBigNumber = !0, u && (_[Symbol.toStringTag] = "BigNumber", _[Symbol.for("nodejs.util.inspect.custom")] = _.valueOf), null != t && C.set(t), C
                }()).default = o.BigNumber = o, void 0 === (n = function() {
                    return o
                }.call(t, r, t, e)) || (e.exports = n)
            }()
        },
        661: function(e, t, r) {
            const BigInteger = r(109),
                n = r(21).Buffer,
                i = r(280),
                o = r(125),
                s = i.getCurveByName("secp256k1"),
                u = r(662),
                f = r(519),
                c = n.concat,
                a = s.G,
                l = s.p,
                h = s.n,
                p = BigInteger.ZERO,
                d = BigInteger.ONE,
                y = BigInteger.valueOf(2),
                g = BigInteger.valueOf(3),
                m = BigInteger.valueOf(4),
                T = BigInteger.valueOf(7);

            function w(e) {
                return e.affineY.mod(y).equals(p)
            }

            function v(e, t) {
                const r = f.hash(e);
                return f.hash(c([r, r, n.from(t)]))
            }
            e.exports = {
                deterministicGetK0: function(e, t, r) {
                    u.checkSignParams(e, r);
                    const n = v("BIP0340/nonce", c([f.intToBuffer(e), t, r]));
                    return f.bufferToInt(n).mod(h)
                },
                isEven: w,
                getEvenKey: function(e, t) {
                    return w(e) ? t.clone() : h.subtract(t)
                },
                getE: function(e, t, r) {
                    const n = v("BIP0340/challenge", c([e, t, r]));
                    return f.bufferToInt(n).mod(h)
                },
                getR: function(e, t, r) {
                    const n = a.multiply(e),
                        i = r.multiply(t);
                    return n.add(i.negate())
                },
                taggedHash: v,
                liftX: function(e) {
                    const t = f.bufferToInt(e),
                        r = t.pow(g).add(T).mod(l),
                        n = r.modPow(l.add(d).divide(m), l);
                    if (0 !== r.compareTo(n.modPow(y, l))) throw new Error("c is not equal to y^2");
                    let o = i.Point.fromAffine(s, t, n);
                    return w(o) || (o = i.Point.fromAffine(s, t, l.subtract(n))), u.checkPointExists(!0, o), o
                },
                randomA: function() {
                    let e = null;
                    for (;;) {
                        e = f.bufferToInt(n.from(o(32)));
                        try {
                            return u.checkRange("a", e), e
                        } catch (e) {}
                    }
                }
            }
        },
        662: function(e, t, r) {
            const BigInteger = r(109),
                n = r(21).Buffer,
                i = r(280).getCurveByName("secp256k1"),
                o = BigInteger.ONE,
                s = i.n,
                u = i.p;

            function f(e, t, r, i) {
                const o = void 0 !== i ? "[" + i + "]" : "";
                if (!n.isBuffer(t)) throw new Error(e + o + " must be a Buffer");
                if (t.length !== r) throw new Error(e + o + " must be " + r + " bytes long")
            }

            function c(e, t) {
                if (!t || !t.length) throw new Error(e + " must be an array with one or more elements")
            }

            function a(e) {
                c("pubKeys", e);
                for (let t = 0; t < e.length; t++) f("pubKey", e[t], 32, t)
            }

            function l(e, t) {
                ! function(e, t) {
                    const r = void 0 !== t ? "[" + t + "]" : "";
                    if (!BigInteger.isBigInteger(e) && "string" != typeof e) throw new Error("privateKey" + r + " must be a BigInteger or valid hex string");
                    if ("string" != typeof e) h("privateKey", e);
                    else {
                        if (e.match(/[^a-f^A-F^0-9]+/)) throw new Error("privateKey must be a BigInteger or valid hex string");
                        h("privateKey", BigInteger.fromHex(e))
                    }
                }(e), f("message", t, 32)
            }

            function h(e, t) {
                if (t.compareTo(o) < 0 || t.compareTo(s.subtract(o)) > 0) throw new Error(e + " must be an integer in the range 1..n-1")
            }
            e.exports = {
                checkSessionParams: function(e, t, r, n, i) {
                    l(t, r), f("sessionId", e, 32), f("pubKeyCombined", n, 32), f("ell", i, 32)
                },
                checkSignParams: l,
                checkVerifyParams: function(e, t, r) {
                    f("pubKey", e, 32), f("message", t, 32), f("signature", r, 64)
                },
                checkBatchVerifyParams: function(e, t, r) {
                    if (a(e), function(e) {
                            c("messages", e);
                            for (let t = 0; t < e.length; t++) f("message", e[t], 32, t)
                        }(t), function(e) {
                            c("signatures", e);
                            for (let t = 0; t < e.length; t++) f("signature", e[t], 64, t)
                        }(r), e.length !== t.length || t.length !== r.length) throw new Error("all parameters must be an array with the same length")
                },
                checkRange: h,
                checkSignatureInput: function(e, t) {
                    if (e.compareTo(u) >= 0) throw new Error("r is larger than or equal to field size");
                    if (t.compareTo(s) >= 0) throw new Error("s is larger than or equal to curve order")
                },
                checkPointExists: function(e, t) {
                    if (t.curve.isInfinity(t)) throw new Error("point is at infinity");
                    if (e !== t.affineY.isEven()) throw new Error("point does not exist")
                },
                checkPubKeyArr: a,
                checkArray: c,
                checkNonceArr: function(e) {
                    c("nonces", e);
                    for (let t = 0; t < e.length; t++) f("nonce", e[t], 32, t)
                },
                checkAux: function(e) {
                    if (32 !== e.length) throw new Error("aux must be 32 bytes")
                }
            }
        }
    }
]);