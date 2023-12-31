(window.webpackJsonp = window.webpackJsonp || []).push([
    [128], {
        1604: function(t, r, n) {
            void 0 !== t.exports && (t.exports.MPIN = function(t) {
                "use strict";
                var r = {
                    BAD_PARAMS: -11,
                    INVALID_POINT: -14,
                    WRONG_ORDER: -18,
                    BAD_PIN: -19,
                    MAXPIN: 1e4,
                    PBLEN: 14,
                    TS: 12,
                    TRAP: 2e3,
                    EFS: t.BIG.MODBYTES,
                    EGS: t.BIG.MODBYTES,
                    PAS: 16,
                    SHA256: 32,
                    SHA384: 48,
                    SHA512: 64,
                    HASH_TYPE: 32,
                    today: function() {
                        var t = new Date;
                        return Math.floor(t.getTime() / 864e5)
                    },
                    bytestostring: function(t) {
                        var r, n, o = "",
                            e = t.length;
                        for (n = 0; n < e; n++) o += ((r = t[n]) >>> 4 & 15).toString(16), o += (15 & r).toString(16);
                        return o
                    },
                    stringtobytes: function(t) {
                        var r, n = [];
                        for (r = 0; r < t.length; r++) n.push(t.charCodeAt(r));
                        return n
                    },
                    comparebytes: function(t, r) {
                        if (t.length != r.length) return !1;
                        for (var n = 0; n < t.length; n++)
                            if (t[n] != r[n]) return !1;
                        return !0
                    },
                    mpin_hash: function(r, n, o) {
                        var e, i, E, s, _ = [],
                            R = [];
                        for (n.geta().getA().toBytes(R), s = 0; s < this.EFS; s++) _[s] = R[s];
                        for (n.geta().getB().toBytes(R), s = this.EFS; s < 2 * this.EFS; s++) _[s] = R[s - this.EFS];
                        for (n.getb().getA().toBytes(R), s = 2 * this.EFS; s < 3 * this.EFS; s++) _[s] = R[s - 2 * this.EFS];
                        for (n.getb().getB().toBytes(R), s = 3 * this.EFS; s < 4 * this.EFS; s++) _[s] = R[s - 3 * this.EFS];
                        for (o.getX().toBytes(R), s = 4 * this.EFS; s < 5 * this.EFS; s++) _[s] = R[s - 4 * this.EFS];
                        for (o.getY().toBytes(R), s = 5 * this.EFS; s < 6 * this.EFS; s++) _[s] = R[s - 5 * this.EFS];
                        if (r == this.SHA256 ? i = new t.HASH256 : r == this.SHA384 ? i = new t.HASH384 : r == this.SHA512 && (i = new t.HASH512), i.process_array(_), 0 == (e = i.hash()).length) return null;
                        for (E = [], s = 0; s < this.PAS; s++) E[s] = e[s];
                        return E
                    },
                    hashit: function(r, n, o) {
                        var e, i, E, s, _;
                        if (r == this.SHA256 ? i = new t.HASH256 : r == this.SHA384 ? i = new t.HASH384 : r == this.SHA512 && (i = new t.HASH512), n > 0 && i.process_num(n), i.process_array(o), 0 == (e = i.hash()).length) return null;
                        if (E = [], r >= (_ = t.BIG.MODBYTES))
                            for (s = 0; s < _; s++) E[s] = e[s];
                        else {
                            for (s = 0; s < r; s++) E[s + _ - r] = e[s];
                            for (s = 0; s < _ - r; s++) E[s] = 0
                        }
                        return E
                    },
                    map: function(r, n) {
                        var o = new t.ECP,
                            e = new t.BIG(r),
                            i = new t.BIG(0);
                        for (i.rcopy(t.ROM_FIELD.Modulus), e.mod(i); o.setxi(e, n), o.is_infinity();) e.inc(1), e.norm();
                        return o
                    },
                    unmap: function(r, n) {
                        var o = n.getS(),
                            e = new t.ECP,
                            i = 0,
                            E = n.getX();
                        for (r.copy(E); r.dec(1), r.norm(), i++, e.setxi(r, o), e.is_infinity(););
                        return i
                    },
                    ENCODING: function(r, n) {
                        var o, e, i, E, s, _, R, u, f, C, I = [];
                        for (o = 0; o < this.EFS; o++) I[o] = n[o + 1];
                        for (_ = t.BIG.fromBytes(I), o = 0; o < this.EFS; o++) I[o] = n[o + this.EFS + 1];
                        if (R = t.BIG.fromBytes(I), (u = new t.ECP(0)).setxy(_, R), u.is_infinity()) return this.INVALID_POINT;
                        for ((f = new t.BIG(0)).rcopy(t.ROM_FIELD.Modulus), _ = t.BIG.randomnum(f, r), (E = r.getByte()) < 0 && (E = -E), E %= 2, C = this.map(_, E), u.sub(C), s = u.getS(), e = this.unmap(R, u), (i = r.getByte()) < 0 && (i = -i), i %= e, R.inc(i + 1), n[0] = E + 2 * s, _.toBytes(I), o = 0; o < this.EFS; o++) n[o + 1] = I[o];
                        for (R.toBytes(I), o = 0; o < this.EFS; o++) n[o + this.EFS + 1] = I[o];
                        return 0
                    },
                    DECODING: function(r) {
                        var n, o, e, i, E, s, _, R = [];
                        if (0 != (4 & r[0])) return this.INVALID_POINT;
                        for (n = 0; n < this.EFS; n++) R[n] = r[n + 1];
                        for (i = t.BIG.fromBytes(R), n = 0; n < this.EFS; n++) R[n] = r[n + this.EFS + 1];
                        for (E = t.BIG.fromBytes(R), o = 1 & r[0], e = r[0] >> 1 & 1, s = this.map(i, o), (_ = this.map(E, e)).add(s), i = _.getX(), E = _.getY(), r[0] = 4, i.toBytes(R), n = 0; n < this.EFS; n++) r[n + 1] = R[n];
                        for (E.toBytes(R), n = 0; n < this.EFS; n++) r[n + this.EFS + 1] = R[n];
                        return 0
                    },
                    RECOMBINE_G1: function(r, n, o) {
                        var e = t.ECP.fromBytes(r),
                            i = t.ECP.fromBytes(n);
                        return e.is_infinity() || i.is_infinity() ? this.INVALID_POINT : (e.add(i), e.toBytes(o), 0)
                    },
                    RECOMBINE_G2: function(r, n, o) {
                        var e = t.ECP2.fromBytes(r),
                            i = t.ECP2.fromBytes(n);
                        return e.is_infinity() || i.is_infinity() ? this.INVALID_POINT : (e.add(i), e.toBytes(o), 0)
                    },
                    HASH_ID: function(t, r) {
                        return this.hashit(t, 0, r)
                    },
                    RANDOM_GENERATE: function(r, n) {
                        var o = new t.BIG(0);
                        return o.rcopy(t.ROM_CURVE.CURVE_Order), t.BIG.randomnum(o, r).toBytes(n), 0
                    },
                    EXTRACT_PIN: function(t, r, n, o) {
                        return this.EXTRACT_FACTOR(t, r, n % this.MAXPIN, this.PBLEN, o)
                    },
                    EXTRACT_FACTOR: function(r, n, o, e, i) {
                        var E, s, _;
                        return (E = t.ECP.fromBytes(i)).is_infinity() ? this.INVALID_POINT : (_ = this.hashit(r, 0, n), s = (s = t.ECP.mapit(_)).pinmul(o, e), E.sub(s), E.toBytes(i), 0)
                    },
                    RESTORE_FACTOR: function(r, n, o, e, i) {
                        var E, s, _;
                        return (E = t.ECP.fromBytes(i)).is_infinity() ? this.INVALID_POINT : (_ = this.hashit(r, 0, n), s = (s = t.ECP.mapit(_)).pinmul(o, e), E.add(s), E.toBytes(i), 0)
                    },
                    GET_SERVER_SECRET: function(r, n) {
                        var o, e, i, E, s = new t.BIG(0),
                            _ = new t.BIG(0);
                        return s.rcopy(t.ROM_CURVE.CURVE_Pxa), _.rcopy(t.ROM_CURVE.CURVE_Pxb), (o = new t.FP2(0)).bset(s, _), s.rcopy(t.ROM_CURVE.CURVE_Pya), _.rcopy(t.ROM_CURVE.CURVE_Pyb), (e = new t.FP2(0)).bset(s, _), (i = new t.ECP2).setxy(o, e), E = t.BIG.fromBytes(r), (i = t.PAIR.G2mul(i, E)).toBytes(n), 0
                    },
                    GET_G1_MULTIPLE: function(r, n, o, e, i) {
                        var E, s, _ = new t.BIG(0);
                        if (_.rcopy(t.ROM_CURVE.CURVE_Order), null != r ? (E = t.BIG.randomnum(_, r)).toBytes(o) : E = t.BIG.fromBytes(o), 0 == n) {
                            if ((s = t.ECP.fromBytes(e)).is_infinity()) return this.INVALID_POINT
                        } else s = t.ECP.mapit(e);
                        return t.PAIR.G1mul(s, E).toBytes(i), 0
                    },
                    GET_CLIENT_SECRET: function(t, r, n) {
                        return this.GET_G1_MULTIPLE(null, 1, t, r, n)
                    },
                    GET_CLIENT_PERMIT: function(r, n, o, e, i) {
                        var E = this.hashit(r, n, e),
                            s = t.ECP.mapit(E),
                            _ = t.BIG.fromBytes(o);
                        return (s = t.PAIR.G1mul(s, _)).toBytes(i), 0
                    },
                    CLIENT_1: function(r, n, o, e, i, E, s, _, R, u, f) {
                        var C, I, h, c, a, p = new t.BIG(0);
                        if (p.rcopy(t.ROM_CURVE.CURVE_Order), null !== e ? (C = t.BIG.randomnum(p, e)).toBytes(i) : C = t.BIG.fromBytes(i), a = this.hashit(r, 0, o), I = t.ECP.mapit(a), (h = t.ECP.fromBytes(s)).is_infinity()) return this.INVALID_POINT;
                        if (E %= this.MAXPIN, c = I.pinmul(E, this.PBLEN), h.add(c), 0 != n) {
                            if ((c = t.ECP.fromBytes(f)).is_infinity()) return this.INVALID_POINT;
                            h.add(c), a = this.hashit(r, n, a), c = t.ECP.mapit(a), null != R ? ((I = t.PAIR.G1mul(I, C)).toBytes(R), c = t.PAIR.G1mul(c, C), I.add(c)) : (I.add(c), I = t.PAIR.G1mul(I, C)), null != u && I.toBytes(u)
                        } else null != R && (I = t.PAIR.G1mul(I, C)).toBytes(R);
                        return h.toBytes(_), 0
                    },
                    CLIENT_2: function(r, n, o) {
                        var e, i, E, s = new t.BIG(0);
                        return s.rcopy(t.ROM_CURVE.CURVE_Order), (e = t.ECP.fromBytes(o)).is_infinity() ? this.INVALID_POINT : (i = t.BIG.fromBytes(r), E = t.BIG.fromBytes(n), i.add(E), i.mod(s), (e = t.PAIR.G1mul(e, i)).neg(), e.toBytes(o), 0)
                    },
                    SERVER_1: function(r, n, o, e, i) {
                        var E, s = this.hashit(r, 0, o),
                            _ = t.ECP.mapit(s);
                        _.toBytes(e), 0 !== n && (s = this.hashit(r, n, s), E = t.ECP.mapit(s), _.add(E), _.toBytes(i))
                    },
                    SERVER_2: function(r, n, o, e, i, E, s, _, R, u, f) {
                        var C, I, h, c, a, p, U, P, V, S;
                        if (void 0 === f || null == f) I = new t.BIG(0), h = new t.BIG(0), I.rcopy(t.ROM_CURVE.CURVE_Pxa), h.rcopy(t.ROM_CURVE.CURVE_Pxb), (c = new t.FP2(0)).bset(I, h), I.rcopy(t.ROM_CURVE.CURVE_Pya), h.rcopy(t.ROM_CURVE.CURVE_Pyb), (a = new t.FP2(0)).bset(I, h), (C = new t.ECP2).setxy(c, a);
                        else if ((C = t.ECP2.fromBytes(f)).is_infinity()) return this.INVALID_POINT;
                        if ((p = t.ECP2.fromBytes(i)).is_infinity()) return this.INVALID_POINT;
                        if (0 !== r) U = t.ECP.fromBytes(s);
                        else {
                            if (null == E) return this.BAD_PARAMS;
                            U = t.ECP.fromBytes(E)
                        }
                        if (U.is_infinity()) return this.INVALID_POINT;
                        if (P = t.BIG.fromBytes(e), 0 != r) V = t.ECP.fromBytes(o);
                        else {
                            if (null == n) return this.BAD_PARAMS;
                            V = t.ECP.fromBytes(n)
                        }
                        if (V.is_infinity()) return this.INVALID_POINT;
                        if ((V = t.PAIR.G1mul(V, P)).add(U), V.affine(), (U = t.ECP.fromBytes(_)).is_infinity()) return this.INVALID_POINT;
                        if (S = t.PAIR.ate2(C, U, p, V), !(S = t.PAIR.fexp(S)).isunity()) {
                            if (null != n && null != E && null != R && null != u) {
                                if (S.toBytes(R), 0 !== r) {
                                    if ((V = t.ECP.fromBytes(n)).is_infinity()) return this.INVALID_POINT;
                                    if ((U = t.ECP.fromBytes(E)).is_infinity()) return this.INVALID_POINT;
                                    (V = t.PAIR.G1mul(V, P)).add(U), V.affine()
                                }
                                S = t.PAIR.ate(C, V), (S = t.PAIR.fexp(S)).toBytes(u)
                            }
                            return this.BAD_PIN
                        }
                        return 0
                    },
                    KANGAROO: function(r, n) {
                        var o, e, i, E, s, _, R, u, f = t.FP12.fromBytes(r),
                            C = t.FP12.fromBytes(n),
                            I = [],
                            h = new t.FP12(C),
                            c = [];
                        for (E = 1, i = 0; i < this.TS; i++) I[i] = E, c[i] = new t.FP12(h), E *= 2, h.usqr();
                        for (h.one(), s = 0, e = 0; e < this.TRAP; e++) o = h.geta().geta().getA().lastbits(20) % this.TS, h.mul(c[o]), s += I[o];
                        for (C.copy(h), C.conj(), u = 0, _ = 0, R = 0; _ - s < this.MAXPIN && !(++u > 4 * this.TRAP);) {
                            if (o = f.geta().geta().getA().lastbits(20) % this.TS, f.mul(c[o]), _ += I[o], f.equals(h)) {
                                R = _ - s;
                                break
                            }
                            if (f.equals(C)) {
                                R = s - _;
                                break
                            }
                        }
                        return (u > 4 * this.TRAP || _ - s >= this.MAXPIN) && (R = 0), R
                    },
                    GET_TIME: function() {
                        var t = new Date;
                        return Math.floor(t.getTime() / 1e3)
                    },
                    GET_Y: function(r, n, o, e) {
                        var i = new t.BIG(0),
                            E = this.hashit(r, n, o),
                            s = t.BIG.fromBytes(E);
                        return i.rcopy(t.ROM_CURVE.CURVE_Order), s.mod(i), s.toBytes(e), 0
                    },
                    CLIENT: function(t, r, n, o, e, i, E, s, _, R, u, f, C, I) {
                        var h, c, a = 0,
                            p = [];
                        if (0 == r ? h = _ : (h = R, _ = null), 0 != (a = this.CLIENT_1(t, r, n, o, e, i, E, s, _, R, u))) return a;
                        if (p = h.slice(), void 0 !== I || null != I)
                            for (c = 0; c < I.length; c++) p.push(I[c]);
                        return this.GET_Y(t, f, p, C), 0 != (a = this.CLIENT_2(e, C, s)) ? a : 0
                    },
                    SERVER: function(t, r, n, o, e, i, E, s, _, R, u, f, C, I, h) {
                        var c, a, p, U = [];
                        if (a = 0 == r ? E : s, this.SERVER_1(t, r, f, n, o), U = a.slice(), void 0 !== I || null != I)
                            for (p = 0; p < I.length; p++) U.push(I[p]);
                        return this.GET_Y(t, C, U, e), 0 != (c = this.SERVER_2(r, n, o, e, i, E, s, _, R, u, h)) ? c : 0
                    },
                    PRECOMPUTE: function(r, n, o, e) {
                        var i, E, s, _, R, u, f, C;
                        return (E = t.ECP.fromBytes(r)).is_infinity() ? this.INVALID_POINT : (i = t.ECP.mapit(n), _ = new t.BIG(0), R = new t.BIG(0), _.rcopy(t.ROM_CURVE.CURVE_Pxa), R.rcopy(t.ROM_CURVE.CURVE_Pxb), (u = new t.FP2(0)).bset(_, R), _.rcopy(t.ROM_CURVE.CURVE_Pya), R.rcopy(t.ROM_CURVE.CURVE_Pyb), (f = new t.FP2(0)).bset(_, R), (C = new t.ECP2).setxy(u, f), s = t.PAIR.ate(C, E), (s = t.PAIR.fexp(s)).toBytes(o), s = t.PAIR.ate(C, i), (s = t.PAIR.fexp(s)).toBytes(e), 0)
                    },
                    HASH_ALL: function(t, r, n, o, e, i, E, s) {
                        var _, R = 0,
                            u = [];
                        for (_ = 0; _ < r.length; _++) u[_] = r[_];
                        if (R += r.length, null != o) {
                            for (_ = 0; _ < o.length; _++) u[_ + R] = o[_];
                            R += o.length
                        } else {
                            for (_ = 0; _ < n.length; _++) u[_ + R] = n[_];
                            R += n.length
                        }
                        for (_ = 0; _ < e.length; _++) u[_ + R] = e[_];
                        for (R += e.length, _ = 0; _ < i.length; _++) u[_ + R] = i[_];
                        for (R += i.length, _ = 0; _ < E.length; _++) u[_ + R] = E[_];
                        for (R += E.length, _ = 0; _ < s.length; _++) u[_ + R] = s[_];
                        return R += s.length, this.hashit(t, 0, u)
                    },
                    CLIENT_KEY: function(r, n, o, e, i, E, s, _, R) {
                        var u, f, C, I, h = t.FP12.fromBytes(n),
                            c = t.FP12.fromBytes(o),
                            a = t.BIG.fromBytes(i),
                            p = t.BIG.fromBytes(E),
                            U = t.BIG.fromBytes(s),
                            P = t.ECP.fromBytes(_);
                        if (P.is_infinity()) return this.INVALID_POINT;
                        for (P = t.PAIR.G1mul(P, p), (f = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), a.add(U), a.mod(f), c.pinpow(e, this.PBLEN), h.mul(c), C = h.compow(a, f), u = this.mpin_hash(r, C, P), I = 0; I < this.PAS; I++) R[I] = u[I];
                        return 0
                    },
                    SERVER_KEY: function(r, n, o, e, i, E, s, _, R) {
                        var u, f, C, I, h, c, a, p, U, P;
                        if ((f = t.ECP2.fromBytes(o)).is_infinity()) return this.INVALID_POINT;
                        if ((C = t.ECP.fromBytes(n)).is_infinity()) return this.INVALID_POINT;
                        if ((I = t.ECP.fromBytes(E)).is_infinity()) return this.INVALID_POINT;
                        if ((h = null != _ ? t.ECP.fromBytes(_) : t.ECP.fromBytes(s)).is_infinity()) return this.INVALID_POINT;
                        for (c = t.BIG.fromBytes(e), a = t.BIG.fromBytes(i), I = t.PAIR.G1mul(I, a), C.add(I), C.affine(), h = t.PAIR.G1mul(h, c), p = t.PAIR.ate(f, C), U = (p = t.PAIR.fexp(p)).trace(), u = this.mpin_hash(r, U, h), P = 0; P < this.PAS; P++) R[P] = u[P];
                        return 0
                    },
                    GET_DVS_KEYPAIR: function(n, o, e) {
                        var i, E, s, _, R, u, f = new t.BIG(0);
                        return f.rcopy(t.ROM_CURVE.CURVE_Order), null != n ? (i = t.BIG.randomnum(f, n)).toBytes(o) : i = t.BIG.fromBytes(o), i.invmodp(f), E = new t.BIG(0), s = new t.BIG(0), E.rcopy(t.ROM_CURVE.CURVE_Pxa), s.rcopy(t.ROM_CURVE.CURVE_Pxb), (_ = new t.FP2(0)).bset(E, s), E.rcopy(t.ROM_CURVE.CURVE_Pya), s.rcopy(t.ROM_CURVE.CURVE_Pyb), (R = new t.FP2(0)).bset(E, s), (u = new t.ECP2).setxy(_, R), u.INF ? r.INVALID_POINT : ((u = t.PAIR.G2mul(u, i)).toBytes(e), 0)
                    }
                };
                return r
            })
        },
        1605: function(t, r, n) {
            void 0 !== t.exports && (t.exports.NewHope = function() {
                "use strict";
                var t = {
                    PRIME: 12289,
                    LGN: 10,
                    ND: 50343935,
                    ONE: 10924,
                    R2MODP: 7586,
                    MODINV: Math.pow(2, -26),
                    DEGREE: 1024,
                    WL: 26,
                    inv: 4091,
                    invpr: 4401,
                    roots: [10924, 3439, 7271, 11355, 11709, 9879, 10742, 2259, 7036, 2539, 8427, 9802, 10192, 4635, 1420, 1239, 6050, 10731, 7026, 5040, 6577, 5505, 10953, 9704, 9373, 11614, 867, 8052, 8079, 8356, 11442, 11524, 5127, 11769, 941, 9207, 6770, 2705, 895, 3507, 8981, 1510, 2703, 8477, 3501, 7979, 11817, 9904, 8201, 12253, 10369, 921, 1414, 10113, 10933, 2417, 9035, 7667, 7466, 5597, 6765, 10100, 2047, 7870, 560, 7412, 6155, 2904, 6540, 11072, 4731, 7581, 4991, 4e3, 324, 75, 12204, 2825, 7295, 437, 3820, 3160, 4680, 9276, 4234, 5304, 233, 11774, 251, 9730, 10988, 7095, 4248, 9176, 1923, 6931, 8295, 8406, 5916, 4, 1634, 4247, 9401, 7069, 10180, 10094, 1727, 1879, 11798, 1138, 7441, 5705, 10500, 3796, 1733, 5294, 12024, 10976, 11900, 10037, 4486, 1266, 6075, 10623, 7623, 6885, 10819, 11266, 3798, 11120, 7291, 6353, 8366, 1709, 9220, 4410, 8350, 795, 5533, 1167, 3593, 7090, 5367, 901, 452, 7387, 8918, 8664, 12, 6830, 11982, 11649, 3414, 1473, 4826, 2255, 5637, 7108, 6327, 6585, 8638, 4958, 10454, 10385, 8712, 6113, 10609, 2342, 8475, 255, 1311, 2693, 225, 11317, 9605, 289, 3623, 11876, 10744, 11590, 3250, 10538, 829, 2809, 2950, 11834, 8504, 6520, 8996, 3903, 11536, 7677, 5059, 1740, 6777, 4641, 9487, 2765, 4095, 1972, 1616, 6291, 3717, 8029, 4828, 11586, 3470, 4672, 4226, 4847, 4534, 4008, 2831, 3500, 6428, 4674, 490, 341, 9994, 2541, 11867, 9688, 8748, 2025, 8115, 4268, 10521, 9604, 3043, 9466, 9197, 1560, 11648, 1786, 5134, 1416, 853, 4180, 9924, 7759, 5761, 8047, 7251, 4068, 2763, 5760, 12264, 108, 5722, 4283, 11321, 6148, 4502, 2180, 9762, 1577, 6849, 8754, 12187, 3390, 8447, 4800, 10220, 90, 672, 1521, 7386, 1027, 7848, 5913, 8135, 11555, 1514, 9681, 182, 1180, 2759, 11676, 8270, 8514, 4584, 3792, 5616, 1300, 2623, 3907, 7653, 11671, 5443, 11387, 9242, 8739, 12216, 9655, 6988, 12086, 9954, 256, 9557, 9836, 11792, 10012, 1450, 6025, 8601, 10525, 4232, 8262, 7841, 3977, 7290, 7832, 311, 7013, 9453, 3895, 11971, 3340, 1991, 4671, 2862, 6807, 6659, 7117, 946, 1812, 10617, 2799, 11068, 11665, 3587, 3675, 8124, 3246, 1074, 9124, 2845, 7372, 8118, 12120, 10842, 1827, 11417, 11632, 10, 9788, 9985, 3563, 11528, 7220, 8204, 7816, 918, 6357, 7237, 196, 6332, 11479, 5956, 2289, 7260, 3046, 10889, 6048, 519, 6606, 8228, 9187, 10651, 1669, 11183, 1337, 11593, 9397, 5517, 253, 10901, 589, 2739, 4389, 4857, 5562, 1704, 11318, 1767, 4164, 878, 4072, 4397, 10007, 9376, 7177, 3613, 2088, 759, 8027, 4011, 3318, 4914, 7282, 9859, 5582, 6867, 6710, 588, 2867, 9535, 5507, 7529, 10732, 2983, 12183, 5855, 4200, 2798, 3151, 5436, 9451, 8397, 5016, 9062, 4601, 3703, 4157, 9738, 206, 2794, 9067, 11025, 1528, 3663, 1872, 5481, 4341, 10318, 2616, 11782, 224, 3754, 2462, 9371, 2283, 11159, 12255, 10689, 6912, 12259, 7503, 2111, 11526, 270, 6207, 10170, 306, 4031, 10605, 5450, 1034, 10087, 173, 3081, 2420, 10273, 7726, 10450, 4012, 964, 12057, 3540, 11743, 7747, 7824, 11721, 4420, 10435, 1619, 3900, 7730, 10826, 913, 4387, 219, 11680, 3614, 1639, 9141, 8249, 2706, 5458, 1491, 5786, 7939, 4930, 8196, 7005, 11521, 11931, 1055, 11207, 2708, 208, 11882, 11064, 5292, 10020, 954, 1724, 6316, 11685, 8508, 11356, 3539, 2734, 11784, 1741, 5751, 8229, 7708, 1460, 3524, 96, 5484, 9833, 7169, 9899, 7867, 9940, 8673, 5483, 1383, 26, 10702, 9172, 1668, 2937, 6483, 4166, 7564, 6069, 7208, 7397, 9336, 6360, 6934, 11311, 8649, 6587, 3004, 10523, 6646, 6265, 12260, 1422, 10570, 6632, 10183, 12218, 6697, 8985, 7883, 8251, 12037, 11138, 6447, 9898, 9346, 2797, 4630, 1800, 4513, 3106, 2312, 10488, 9255, 2040, 5934, 3920, 2728, 6218, 8039, 8913, 3770, 8539, 3911, 10359, 3422, 2268, 525, 11694, 7486, 1909, 3059, 2162, 9831, 8182, 3487, 5060, 261, 1631, 8684, 1757, 6665, 3182, 509, 5158, 2787, 1172, 11650, 8909, 9686, 4545, 28, 11438, 5151, 4362, 327, 9815, 9213, 12089, 864, 8852, 7966, 2931, 3068, 12055, 1994, 12131, 191, 10434, 3098, 9566, 8814, 6824, 8862, 5658, 627, 4205, 11328, 1999, 5128, 2008, 4106, 1881, 7604, 9406, 11963, 3095, 6292, 9294, 5565, 1864, 8169, 573, 474, 702, 6307, 3164, 2553, 981, 11492, 84, 10943, 10140, 7809, 11609, 10311, 9204, 3496, 2592, 600, 7422, 9228, 11310, 10128, 11733, 11250, 11828, 5924, 529, 4105, 10169, 1785, 9177, 6562, 1575, 5485, 5790, 2023, 783, 9398, 1474, 7396, 10461, 32, 5803, 7374, 8361, 9104, 10372, 8773, 1527, 2743, 7018, 4583, 10835, 12180, 10572, 7909, 4964, 7066, 4087, 1515, 11312, 7170, 1441, 7047, 9218, 7368, 12001, 8126, 5004, 9351, 7160, 3478, 7528, 12211, 8129, 8140, 3430, 2387, 8513, 5498, 9335, 6371, 12080, 1886, 7649, 5298, 12202, 5783, 9012, 4817, 2934, 10920, 7802, 213, 11360, 9912, 5971, 4682, 8023, 5157, 3460, 7173, 1601, 3898, 7052, 3453, 12114, 756, 3187, 5403, 5513, 6169, 6936, 2971, 6889, 11039, 11076, 12122, 11575, 11441, 9973, 9022, 10095, 630, 4704, 10647, 2546, 7189, 5780, 4524, 7789, 7151, 10598, 6322, 1274, 8260, 7024, 7998, 8734, 10442, 7510, 1966, 2445, 9100, 6072, 2771, 4415, 7963, 1234, 5975, 3249, 12017, 11778, 6140, 12049, 10868, 8233, 1792, 5454, 7407, 8810, 8639, 10150, 5308, 11051, 12230, 5046, 8678, 5731, 3261, 1874, 5668, 2177, 12224, 4726, 2687, 10063, 11091, 1648, 8119, 7745, 10782, 9746, 663, 6622, 395, 585, 7304, 3742, 7921, 531, 1147, 7712, 10433, 7518, 2423, 7626, 2448, 7670, 11106, 2160, 500, 6185, 7690, 70, 7071, 8450, 363, 6962, 1384, 8272, 5556, 6426, 7632, 1503, 1372, 7457, 6619, 4825, 3734, 1664, 9033, 2489, 5469, 3633, 9375, 8440, 2864, 823, 11683, 4547, 9359, 7417, 4334, 1752, 1771, 2573, 4123, 6884, 6145, 9421, 2067, 11928, 5492, 80, 4570, 6146, 3926, 6201, 8604, 4187, 1083, 713, 2327, 5313, 7033, 3499, 10937, 9820, 1818, 7568, 2207, 11202, 10103, 4116, 7780, 5300, 1682, 3547, 1390, 8592, 11547, 4118, 4822, 7297, 9768, 1185, 4712, 9623, 10534, 1989, 7629, 1343, 4521, 6721, 1442, 7269, 2024, 3441, 10696, 1063, 815, 1500, 5809, 10781, 6023, 8740, 1568, 1700, 4945, 4152, 3692, 4379, 12051, 1089, 11517, 12079, 3365, 2488, 6948, 1890, 6582, 9745, 2142, 3639, 501, 1283, 7238, 9164, 1211, 9278, 4651, 10466, 4926, 11705, 3506, 6748, 10665, 202, 8467, 5073, 5612, 8313, 6362, 11600, 11333, 2722, 4954, 2048, 6391, 6131, 1533, 8026, 720, 11473, 2542, 8587, 6653, 1339, 10437, 3635, 6417, 9932, 8216, 12168, 6913, 9783, 7385, 4715, 6667, 1456, 9440, 3714, 177, 8695, 6678, 12068, 7345, 8061, 10400, 5758, 195],
                    iroots: [10924, 8850, 934, 5018, 10030, 1547, 2410, 580, 11050, 10869, 7654, 2097, 2487, 3862, 9750, 5253, 765, 847, 3933, 4210, 4237, 11422, 675, 2916, 2585, 1336, 6784, 5712, 7249, 5263, 1558, 6239, 4419, 10242, 2189, 5524, 6692, 4823, 4622, 3254, 9872, 1356, 2176, 10875, 11368, 1920, 36, 4088, 2385, 472, 4310, 8788, 3812, 9586, 10779, 3308, 8782, 11394, 9584, 5519, 3082, 11348, 520, 7162, 1023, 1470, 5404, 4666, 1666, 6214, 11023, 7803, 2252, 389, 1313, 265, 6995, 10556, 8493, 1789, 6584, 4848, 11151, 491, 10410, 10562, 2195, 2109, 5220, 2888, 8042, 10655, 12285, 6373, 3883, 3994, 5358, 10366, 3113, 8041, 5194, 1301, 2559, 12038, 515, 12056, 6985, 8055, 3013, 7609, 9129, 8469, 11852, 4994, 9464, 85, 12214, 11965, 8289, 7298, 4708, 7558, 1217, 5749, 9385, 6134, 4877, 11729, 10712, 2527, 10109, 7787, 6141, 968, 8006, 6567, 12181, 25, 6529, 9526, 8221, 5038, 4242, 6528, 4530, 2365, 8109, 11436, 10873, 7155, 10503, 641, 10729, 3092, 2823, 9246, 2685, 1768, 8021, 4174, 10264, 3541, 2601, 422, 9748, 2295, 11948, 11799, 7615, 5861, 8789, 9458, 8281, 7755, 7442, 8063, 7617, 8819, 703, 7461, 4260, 8572, 5998, 10673, 10317, 8194, 9524, 2802, 7648, 5512, 10549, 7230, 4612, 753, 8386, 3293, 5769, 3785, 455, 9339, 9480, 11460, 1751, 9039, 699, 1545, 413, 8666, 12e3, 2684, 972, 12064, 9596, 10978, 12034, 3814, 9947, 1680, 6176, 3577, 1904, 1835, 7331, 3651, 5704, 5962, 5181, 6652, 10034, 7463, 10816, 8875, 640, 307, 5459, 12277, 3625, 3371, 4902, 11837, 11388, 6922, 5199, 8696, 11122, 6756, 11494, 3939, 7879, 3069, 10580, 3923, 5936, 4998, 1169, 8491, 8750, 933, 3781, 604, 5973, 10565, 11335, 2269, 6997, 1225, 407, 12081, 9581, 1082, 11234, 358, 768, 5284, 4093, 7359, 4350, 6503, 10798, 6831, 9583, 4040, 3148, 10650, 8675, 609, 12070, 7902, 11376, 1463, 4559, 8389, 10670, 1854, 7869, 568, 4465, 4542, 546, 8749, 232, 11325, 8277, 1839, 4563, 2016, 9869, 9208, 12116, 2202, 11255, 6839, 1684, 8258, 11983, 2119, 6082, 12019, 763, 10178, 4786, 30, 5377, 1600, 34, 1130, 10006, 2918, 9827, 8535, 12065, 507, 9673, 1971, 7948, 6808, 10417, 8626, 10761, 1264, 3222, 9495, 12083, 2551, 8132, 8586, 7688, 3227, 7273, 3892, 2838, 6853, 9138, 9491, 8089, 6434, 106, 9306, 1557, 4760, 6782, 2754, 9422, 11701, 5579, 5422, 6707, 2430, 5007, 7375, 8971, 8278, 4262, 11530, 10201, 8676, 5112, 2913, 2282, 7892, 8217, 11411, 8125, 10522, 971, 10585, 6727, 7432, 7900, 9550, 11700, 1388, 12036, 6772, 2892, 696, 10952, 1106, 10620, 1638, 3102, 4061, 5683, 11770, 6241, 1400, 9243, 5029, 1e4, 6333, 810, 5957, 12093, 5052, 5932, 11371, 4473, 4085, 5069, 761, 8726, 2304, 2501, 12279, 657, 872, 10462, 1447, 169, 4171, 4917, 9444, 3165, 11215, 9043, 4165, 8614, 8702, 624, 1221, 9490, 1672, 10477, 11343, 5172, 5630, 5482, 9427, 7618, 10298, 8949, 318, 8394, 2836, 5276, 11978, 4457, 4999, 8312, 4448, 4027, 8057, 1764, 3688, 6264, 10839, 2277, 497, 2453, 2732, 12033, 2335, 203, 5301, 2634, 73, 3550, 3047, 902, 6846, 618, 4636, 8382, 9666, 10989, 6673, 8497, 7705, 3775, 4019, 613, 9530, 11109, 12107, 2608, 10775, 734, 4154, 6376, 4441, 11262, 4903, 10768, 11617, 12199, 2069, 7489, 3842, 8899, 102, 3535, 5440, 12094, 6531, 1889, 4228, 4944, 221, 5611, 3594, 12112, 8575, 2849, 10833, 5622, 7574, 4904, 2506, 5376, 121, 4073, 2357, 5872, 8654, 1852, 10950, 5636, 3702, 9747, 816, 11569, 4263, 10756, 6158, 5898, 10241, 7335, 9567, 956, 689, 5927, 3976, 6677, 7216, 3822, 12087, 1624, 5541, 8783, 584, 7363, 1823, 7638, 3011, 11078, 3125, 5051, 11006, 11788, 8650, 10147, 2544, 5707, 10399, 5341, 9801, 8924, 210, 772, 11200, 238, 7910, 8597, 8137, 7344, 10589, 10721, 3549, 6266, 1508, 6480, 10789, 11474, 11226, 1593, 8848, 10265, 5020, 10847, 5568, 7768, 10946, 4660, 10300, 1755, 2666, 7577, 11104, 2521, 4992, 7467, 8171, 742, 3697, 10899, 8742, 10607, 6989, 4509, 8173, 2186, 1087, 10082, 4721, 10471, 2469, 1352, 8790, 5256, 6976, 9962, 11576, 11206, 8102, 3685, 6088, 8363, 6143, 7719, 12209, 6797, 361, 10222, 2868, 6144, 5405, 8166, 9716, 10518, 10537, 7955, 4872, 2930, 7742, 606, 11466, 9425, 3849, 2914, 8656, 6820, 9800, 3256, 10625, 8555, 7464, 5670, 4832, 10917, 10786, 4657, 5863, 6733, 4017, 10905, 5327, 11926, 3839, 5218, 12219, 4599, 6104, 11789, 10129, 1183, 4619, 9841, 4663, 9866, 4771, 1856, 4577, 11142, 11758, 4368, 8547, 4985, 11704, 11894, 5667, 11626, 2543, 1507, 4544, 4170, 10641, 1198, 2226, 9602, 7563, 65, 10112, 6621, 10415, 9028, 6558, 3611, 7243, 59, 1238, 6981, 2139, 3650, 3479, 4882, 6835, 10497, 4056, 1421, 240, 6149, 511, 272, 9040, 6314, 11055, 4326, 7874, 9518, 6217, 3189, 9844, 10323, 4779, 1847, 3555, 4291, 5265, 4029, 11015, 5967, 1691, 5138, 4500, 7765, 6509, 5100, 9743, 1642, 7585, 11659, 2194, 3267, 2316, 848, 714, 167, 1213, 1250, 5400, 9318, 5353, 6120, 6776, 6886, 9102, 11533, 175, 8836, 5237, 8391, 10688, 5116, 8829, 7132, 4266, 7607, 6318, 2377, 929, 12076, 4487, 1369, 9355, 7472, 3277, 6506, 87, 6991, 4640, 10403, 209, 5918, 2954, 6791, 3776, 9902, 8859, 4149, 4160, 78, 4761, 8811, 5129, 2938, 7285, 4163, 288, 4921, 3071, 5242, 10848, 5119, 977, 10774, 8202, 5223, 7325, 4380, 1717, 109, 1454, 7706, 5271, 9546, 10762, 3516, 1917, 3185, 3928, 4915, 6486, 12257, 1828, 4893, 10815, 2891, 11506, 10266, 6499, 6804, 10714, 5727, 3112, 10504, 2120, 8184, 11760, 6365, 461, 1039, 556, 2161, 979, 3061, 4867, 11689, 9697, 8793, 3085, 1978, 680, 4480, 2149, 1346, 12205, 797, 11308, 9736, 9125, 5982, 11587, 11815, 11716, 4120, 10425, 6724, 2995, 5997, 9194, 326, 2883, 4685, 10408, 8183, 10281, 7161, 10290, 961, 8084, 11662, 6631, 3427, 5465, 3475, 2723, 9191, 1855, 12098, 158, 10295, 234, 9221, 9358, 4323, 3437, 11425, 200, 3076, 2474, 11962, 7927, 7138, 851, 12261, 7744, 2603, 3380, 639, 11117, 9502, 7131, 11780, 9107, 5624, 10532, 3605, 10658, 12028, 7229, 8802, 4107, 2458, 10127, 9230, 10380, 4803, 595, 11764, 10021, 8867, 1930, 8378, 3750, 8519, 3376, 4250, 6071, 9561, 8369, 6355, 10249, 3034, 1801, 9977, 9183, 7776, 10489, 7659, 9492, 2943, 2391, 5842, 1151, 252, 4038, 4406, 3304, 5592, 71, 2106, 5657, 1719, 10867, 29, 6024, 5643, 1766, 9285, 5702, 3640, 978, 5355, 5929, 2953, 4892, 5081, 6220, 4725, 8123, 5806, 9352, 10621, 3117, 1587, 12263, 10906, 6806, 3616, 2349, 4422, 2390, 5120, 2456, 6805, 12193, 8765, 10829, 4581, 4060, 6538, 10548, 505, 9555],
                    round: function(t, r) {
                        return Math.floor((t + (r >> 1)) / r)
                    },
                    nabs: function(t) {
                        var r = t >> 31;
                        return t + r ^ r
                    },
                    redc: function(r) {
                        return (((67108863 & r) * t.ND & 67108863) * t.PRIME + r) * t.MODINV
                    },
                    nres: function(r) {
                        return this.redc(r * t.R2MODP)
                    },
                    modmul: function(t, r) {
                        return this.redc(t * r)
                    },
                    ntt: function(r) {
                        var n, o, e, i, E, s, _, R = t.DEGREE / 2,
                            u = t.PRIME;
                        for (e = 0; e < t.DEGREE; e++) r[e] = this.nres(r[e]);
                        for (n = 1; n < t.DEGREE;) {
                            for (i = 0, o = 0; o < n; o++) {
                                for (E = t.roots[n + o], e = i; e < i + R; e++) s = r[e], _ = this.modmul(r[e + R], E), r[e] = s + _, r[e + R] = s + 2 * u - _;
                                i += 2 * R
                            }
                            R /= 2, n *= 2
                        }
                    },
                    intt: function(r) {
                        var n, o, e, i, E, s, _, R, u = 1,
                            f = t.PRIME;
                        for (n = t.DEGREE / 2; n > 1;) {
                            for (i = 0, o = 0; o < n; o++) {
                                for (E = t.iroots[n + o], e = i; e < i + u; e++) s = r[e], _ = r[e + u], r[e] = s + _, R = s + t.DEGREE * f - _, r[e + u] = this.modmul(R, E);
                                i += 2 * u
                            }
                            u *= 2, n /= 2
                        }
                        for (u = t.DEGREE / 2, e = 0; e < u; e++) s = r[e], _ = r[e + u], R = s + t.DEGREE * f - _, r[e + u] = this.modmul(R, t.invpr), r[e] = this.modmul(s + _, t.inv);
                        for (e = 0; e < t.DEGREE; e++) r[e] = this.redc(r[e]), r[e] -= f, r[e] += r[e] >> t.WL - 1 & f
                    }
                };
                return t
            })
        },
        1606: function(t, r, n) {
            void 0 !== t.exports && (t.exports.NHS = function(t) {
                "use strict";
                var r = {
                    round: function(t, r) {
                        return Math.floor((t + (r >> 1)) / r)
                    },
                    nabs: function(t) {
                        var r = t >> 31;
                        return t + r ^ r
                    },
                    redc: function(t) {
                        return (((67108863 & t) * r.ND & 67108863) * r.PRIME + t) * r.MODINV
                    },
                    nres: function(t) {
                        return r.redc(t * r.R2MODP)
                    },
                    modmul: function(t, n) {
                        return r.redc(t * n)
                    },
                    ntt: function(t) {
                        var n, o, e, i, E, s, _, R = r.DEGREE / 2,
                            u = r.PRIME;
                        for (e = 0; e < r.DEGREE; e++) t[e] = r.nres(t[e]);
                        for (n = 1; n < r.DEGREE;) {
                            for (i = 0, o = 0; o < n; o++) {
                                for (E = r.roots[n + o], e = i; e < i + R; e++) s = t[e], _ = r.modmul(t[e + R], E), t[e] = s + _, t[e + R] = s + 2 * u - _;
                                i += 2 * R
                            }
                            R /= 2, n *= 2
                        }
                    },
                    intt: function(t) {
                        var n, o, e, i, E, s, _, R, u = r.PRIME,
                            f = 1;
                        for (n = r.DEGREE / 2; n > 1;) {
                            for (i = 0, o = 0; o < n; o++) {
                                for (E = r.iroots[n + o], e = i; e < i + f; e++) s = t[e], _ = t[e + f], t[e] = s + _, R = s + r.DEGREE * u - _, t[e + f] = r.modmul(R, E);
                                i += 2 * f
                            }
                            f *= 2, n /= 2
                        }
                        for (f = r.DEGREE / 2, e = 0; e < f; e++) s = t[e], _ = t[e + f], R = s + r.DEGREE * u - _, t[e + f] = r.modmul(R, r.invpr), t[e] = r.modmul(s + _, r.inv);
                        for (e = 0; e < r.DEGREE; e++) t[e] = r.redc(t[e]), t[e] -= u, t[e] += t[e] >> r.WL - 1 & u
                    },
                    Encode: function(t, n) {
                        var o, e, i, E, s, _;
                        for (_ = r.PRIME / 2, o = e = 0; o < 256;)
                            for (s = t[e++], E = 0; E < 8; E++) i = 1 & s, n[o] = i * _, n[o + 256] = i * _, n[o + 512] = i * _, n[o + 768] = i * _, s >>= 1, o++
                    },
                    Decode: function(t, n) {
                        var o, e, i, E, s = r.PRIME / 2;
                        for (o = 0; o < 32; o++) n[o] = 0;
                        for (o = e = 0; o < 256;) {
                            for (i = 0; i < 8; i++) E = (E = r.nabs(t[o] - s) + r.nabs(t[o + 256] - s) + r.nabs(t[o + 512] - s) + r.nabs(t[o + 768] - s) - r.PRIME) >> 31 & 1, n[e] = ((255 & n[e]) >> 1) + (E << 7), o++;
                            e++
                        }
                    },
                    Parse: function(n, o) {
                        var e, i, E, s = new t.SHA3(t.SHA3.SHAKE128),
                            _ = [];
                        for (e = 0; e < 32; e++) s.process(n[e]);
                        for (s.shake(_, 4 * r.DEGREE), e = i = 0; e < r.DEGREE; e++) E = 127 & _[i], E <<= 8, E += 255 & _[i + 1], E <<= 8, E += 255 & _[i + 2], E <<= 8, E += 255 & _[i + 3], i += 4, o[e] = r.modmul(E, r.ONE)
                    },
                    pack: function(t, n) {
                        var o, e, i, E, s, _;
                        for (o = e = 0; o < r.DEGREE;) i = t[o++], E = t[o++], s = t[o++], _ = t[o++], n[e++] = 255 & i, n[e++] = 255 & (i >> 8 | E << 6), n[e++] = E >> 2 & 255, n[e++] = 255 & (E >> 10 | s << 4), n[e++] = s >> 4 & 255, n[e++] = 255 & (s >> 12 | _ << 2), n[e++] = _ >> 6
                    },
                    unpack: function(t, n) {
                        var o, e, i, E, s, _, R, u, f;
                        for (o = e = 0; o < r.DEGREE;) i = 255 & t[e++], E = 255 & t[e++], s = 255 & t[e++], _ = 255 & t[e++], R = 255 & t[e++], u = 255 & t[e++], f = 255 & t[e++], n[o++] = i | (63 & E) << 8, n[o++] = E >> 6 | s << 2 | (15 & _) << 10, n[o++] = _ >> 4 | R << 4 | (3 & u) << 12, n[o++] = u >> 2 | f << 6
                    },
                    Compress: function(t, n) {
                        var o, e, i, E = 0;
                        for (o = e = 0; o < r.DEGREE;) {
                            for (i = 0; i < 8; i++) E = (E << 3) + (7 & r.round(8 * t[o], r.PRIME)), o++;
                            n[e] = 255 & E, n[e + 1] = E >>> 8 & 255, n[e + 2] = E >>> 16 & 255, e += 3, E = 0
                        }
                    },
                    Decompress: function(t, n) {
                        var o, e, i, E, s = 0;
                        for (o = e = 0; o < r.DEGREE;)
                            for (s = ((s = ((s = 255 & t[e + 2]) << 8) + (255 & t[e + 1])) << 8) + (255 & t[e]), e += 3, i = 0; i < 8; i++) E = (14680064 & s) >>> 21, s <<= 3, n[o] = r.round(E * r.PRIME, 8), o++
                    },
                    Error: function(t, n) {
                        var o, e, i, E, s;
                        for (E = 0; E < r.DEGREE; E++) {
                            for (o = t.getByte() + (t.getByte() << 8), e = t.getByte() + (t.getByte() << 8), i = 0, s = 0; s < 16; s++) i += (1 & o) - (1 & e), o >>= 1, e >>= 1;
                            n[E] = i + r.PRIME
                        }
                    },
                    poly_mul: function(t, n, o) {
                        var e;
                        for (e = 0; e < r.DEGREE; e++) t[e] = r.modmul(n[e], o[e])
                    },
                    poly_add: function(t, n, o) {
                        var e;
                        for (e = 0; e < r.DEGREE; e++) t[e] = n[e] + o[e]
                    },
                    poly_sub: function(t, n, o) {
                        var e;
                        for (e = 0; e < r.DEGREE; e++) t[e] = n[e] + r.PRIME - o[e]
                    },
                    poly_soft_reduce: function(t) {
                        var n, o;
                        for (n = 0; n < r.DEGREE; n++) o = t[n] - r.PRIME, t[n] = o + (o >> r.WL - 1 & r.PRIME)
                    },
                    poly_hard_reduce: function(t) {
                        var n, o;
                        for (n = 0; n < r.DEGREE; n++) o = r.modmul(t[n], r.ONE), o -= r.PRIME, t[n] = o + (o >> r.WL - 1 & r.PRIME)
                    },
                    bytestostring: function(t) {
                        var r, n, o = "",
                            e = t.length;
                        for (n = 0; n < e; n++) o += ((r = t[n]) >>> 4 & 15).toString(16), o += (15 & r).toString(16);
                        return o
                    },
                    SERVER_1: function(t, n, o) {
                        var e, i = new Uint8Array(32),
                            E = new Uint8Array(1792),
                            s = new Int32Array(r.DEGREE),
                            _ = new Int32Array(r.DEGREE),
                            R = new Int32Array(r.DEGREE);
                        for (e = 0; e < 32; e++) i[e] = t.getByte();
                        for (r.Parse(i, R), r.Error(t, _), r.Error(t, s), r.ntt(s), r.ntt(_), r.poly_mul(R, R, s), r.poly_add(R, R, _), r.poly_hard_reduce(R), r.pack(R, E), e = 0; e < 32; e++) n[e] = i[e];
                        for (e = 0; e < 1792; e++) n[e + 32] = E[e];
                        for (r.poly_hard_reduce(s), r.pack(s, E), e = 0; e < 1792; e++) o[e] = E[e]
                    },
                    CLIENT: function(n, o, e, i) {
                        var E, s = new t.SHA3(t.SHA3.HASH256),
                            _ = new Uint8Array(32),
                            R = new Uint8Array(1792),
                            u = new Uint8Array(32),
                            f = new Uint8Array(384),
                            C = new Int32Array(r.DEGREE),
                            I = new Int32Array(r.DEGREE),
                            h = new Int32Array(r.DEGREE),
                            c = new Int32Array(r.DEGREE),
                            a = new Int32Array(r.DEGREE);
                        for (r.Error(n, C), r.Error(n, I), r.ntt(C), r.ntt(I), E = 0; E < 32; E++) _[E] = o[E];
                        for (E = 0; E < 1792; E++) R[E] = o[E + 32];
                        for (r.Parse(_, h), r.poly_mul(h, h, C), r.poly_add(h, h, I), r.poly_hard_reduce(h), E = 0; E < 32; E++) u[E] = n.getByte();
                        for (E = 0; E < 32; E++) s.process(u[E]);
                        for (s.hash(u), r.Encode(u, c), r.unpack(R, a), r.poly_mul(a, a, C), r.intt(a), r.Error(n, I), r.poly_add(a, a, I), r.poly_add(a, a, c), r.Compress(a, f), s.init(t.SHA3.HASH256), E = 0; E < 32; E++) s.process(u[E]);
                        for (s.hash(u), E = 0; E < 32; E++) i[E] = u[E];
                        for (r.pack(h, R), E = 0; E < 1792; E++) e[E] = R[E];
                        for (E = 0; E < 384; E++) e[E + 1792] = f[E]
                    },
                    SERVER_2: function(n, o, e) {
                        var i, E = new t.SHA3(t.SHA3.HASH256),
                            s = new Int32Array(r.DEGREE),
                            _ = new Int32Array(r.DEGREE),
                            R = new Int32Array(r.DEGREE),
                            u = new Uint8Array(1792),
                            f = new Uint8Array(32),
                            C = new Uint8Array(384);
                        for (i = 0; i < 1792; i++) u[i] = o[i];
                        for (r.unpack(u, R), i = 0; i < 384; i++) C[i] = o[i + 1792];
                        for (r.Decompress(C, s), i = 0; i < 1792; i++) u[i] = n[i];
                        for (r.unpack(u, _), r.poly_mul(R, R, _), r.intt(R), r.poly_sub(R, s, R), r.poly_soft_reduce(R), r.Decode(R, f), i = 0; i < 32; i++) E.process(f[i]);
                        for (E.hash(f), i = 0; i < 32; i++) e[i] = f[i]
                    },
                    PRIME: 12289,
                    LGN: 10,
                    ND: 50343935,
                    ONE: 10924,
                    R2MODP: 7586
                };
                return r.MODINV = Math.pow(2, -26), r.DEGREE = 1024, r.WL = 26, r.inv = 4091, r.invpr = 4401, r.roots = [10924, 3439, 7271, 11355, 11709, 9879, 10742, 2259, 7036, 2539, 8427, 9802, 10192, 4635, 1420, 1239, 6050, 10731, 7026, 5040, 6577, 5505, 10953, 9704, 9373, 11614, 867, 8052, 8079, 8356, 11442, 11524, 5127, 11769, 941, 9207, 6770, 2705, 895, 3507, 8981, 1510, 2703, 8477, 3501, 7979, 11817, 9904, 8201, 12253, 10369, 921, 1414, 10113, 10933, 2417, 9035, 7667, 7466, 5597, 6765, 10100, 2047, 7870, 560, 7412, 6155, 2904, 6540, 11072, 4731, 7581, 4991, 4e3, 324, 75, 12204, 2825, 7295, 437, 3820, 3160, 4680, 9276, 4234, 5304, 233, 11774, 251, 9730, 10988, 7095, 4248, 9176, 1923, 6931, 8295, 8406, 5916, 4, 1634, 4247, 9401, 7069, 10180, 10094, 1727, 1879, 11798, 1138, 7441, 5705, 10500, 3796, 1733, 5294, 12024, 10976, 11900, 10037, 4486, 1266, 6075, 10623, 7623, 6885, 10819, 11266, 3798, 11120, 7291, 6353, 8366, 1709, 9220, 4410, 8350, 795, 5533, 1167, 3593, 7090, 5367, 901, 452, 7387, 8918, 8664, 12, 6830, 11982, 11649, 3414, 1473, 4826, 2255, 5637, 7108, 6327, 6585, 8638, 4958, 10454, 10385, 8712, 6113, 10609, 2342, 8475, 255, 1311, 2693, 225, 11317, 9605, 289, 3623, 11876, 10744, 11590, 3250, 10538, 829, 2809, 2950, 11834, 8504, 6520, 8996, 3903, 11536, 7677, 5059, 1740, 6777, 4641, 9487, 2765, 4095, 1972, 1616, 6291, 3717, 8029, 4828, 11586, 3470, 4672, 4226, 4847, 4534, 4008, 2831, 3500, 6428, 4674, 490, 341, 9994, 2541, 11867, 9688, 8748, 2025, 8115, 4268, 10521, 9604, 3043, 9466, 9197, 1560, 11648, 1786, 5134, 1416, 853, 4180, 9924, 7759, 5761, 8047, 7251, 4068, 2763, 5760, 12264, 108, 5722, 4283, 11321, 6148, 4502, 2180, 9762, 1577, 6849, 8754, 12187, 3390, 8447, 4800, 10220, 90, 672, 1521, 7386, 1027, 7848, 5913, 8135, 11555, 1514, 9681, 182, 1180, 2759, 11676, 8270, 8514, 4584, 3792, 5616, 1300, 2623, 3907, 7653, 11671, 5443, 11387, 9242, 8739, 12216, 9655, 6988, 12086, 9954, 256, 9557, 9836, 11792, 10012, 1450, 6025, 8601, 10525, 4232, 8262, 7841, 3977, 7290, 7832, 311, 7013, 9453, 3895, 11971, 3340, 1991, 4671, 2862, 6807, 6659, 7117, 946, 1812, 10617, 2799, 11068, 11665, 3587, 3675, 8124, 3246, 1074, 9124, 2845, 7372, 8118, 12120, 10842, 1827, 11417, 11632, 10, 9788, 9985, 3563, 11528, 7220, 8204, 7816, 918, 6357, 7237, 196, 6332, 11479, 5956, 2289, 7260, 3046, 10889, 6048, 519, 6606, 8228, 9187, 10651, 1669, 11183, 1337, 11593, 9397, 5517, 253, 10901, 589, 2739, 4389, 4857, 5562, 1704, 11318, 1767, 4164, 878, 4072, 4397, 10007, 9376, 7177, 3613, 2088, 759, 8027, 4011, 3318, 4914, 7282, 9859, 5582, 6867, 6710, 588, 2867, 9535, 5507, 7529, 10732, 2983, 12183, 5855, 4200, 2798, 3151, 5436, 9451, 8397, 5016, 9062, 4601, 3703, 4157, 9738, 206, 2794, 9067, 11025, 1528, 3663, 1872, 5481, 4341, 10318, 2616, 11782, 224, 3754, 2462, 9371, 2283, 11159, 12255, 10689, 6912, 12259, 7503, 2111, 11526, 270, 6207, 10170, 306, 4031, 10605, 5450, 1034, 10087, 173, 3081, 2420, 10273, 7726, 10450, 4012, 964, 12057, 3540, 11743, 7747, 7824, 11721, 4420, 10435, 1619, 3900, 7730, 10826, 913, 4387, 219, 11680, 3614, 1639, 9141, 8249, 2706, 5458, 1491, 5786, 7939, 4930, 8196, 7005, 11521, 11931, 1055, 11207, 2708, 208, 11882, 11064, 5292, 10020, 954, 1724, 6316, 11685, 8508, 11356, 3539, 2734, 11784, 1741, 5751, 8229, 7708, 1460, 3524, 96, 5484, 9833, 7169, 9899, 7867, 9940, 8673, 5483, 1383, 26, 10702, 9172, 1668, 2937, 6483, 4166, 7564, 6069, 7208, 7397, 9336, 6360, 6934, 11311, 8649, 6587, 3004, 10523, 6646, 6265, 12260, 1422, 10570, 6632, 10183, 12218, 6697, 8985, 7883, 8251, 12037, 11138, 6447, 9898, 9346, 2797, 4630, 1800, 4513, 3106, 2312, 10488, 9255, 2040, 5934, 3920, 2728, 6218, 8039, 8913, 3770, 8539, 3911, 10359, 3422, 2268, 525, 11694, 7486, 1909, 3059, 2162, 9831, 8182, 3487, 5060, 261, 1631, 8684, 1757, 6665, 3182, 509, 5158, 2787, 1172, 11650, 8909, 9686, 4545, 28, 11438, 5151, 4362, 327, 9815, 9213, 12089, 864, 8852, 7966, 2931, 3068, 12055, 1994, 12131, 191, 10434, 3098, 9566, 8814, 6824, 8862, 5658, 627, 4205, 11328, 1999, 5128, 2008, 4106, 1881, 7604, 9406, 11963, 3095, 6292, 9294, 5565, 1864, 8169, 573, 474, 702, 6307, 3164, 2553, 981, 11492, 84, 10943, 10140, 7809, 11609, 10311, 9204, 3496, 2592, 600, 7422, 9228, 11310, 10128, 11733, 11250, 11828, 5924, 529, 4105, 10169, 1785, 9177, 6562, 1575, 5485, 5790, 2023, 783, 9398, 1474, 7396, 10461, 32, 5803, 7374, 8361, 9104, 10372, 8773, 1527, 2743, 7018, 4583, 10835, 12180, 10572, 7909, 4964, 7066, 4087, 1515, 11312, 7170, 1441, 7047, 9218, 7368, 12001, 8126, 5004, 9351, 7160, 3478, 7528, 12211, 8129, 8140, 3430, 2387, 8513, 5498, 9335, 6371, 12080, 1886, 7649, 5298, 12202, 5783, 9012, 4817, 2934, 10920, 7802, 213, 11360, 9912, 5971, 4682, 8023, 5157, 3460, 7173, 1601, 3898, 7052, 3453, 12114, 756, 3187, 5403, 5513, 6169, 6936, 2971, 6889, 11039, 11076, 12122, 11575, 11441, 9973, 9022, 10095, 630, 4704, 10647, 2546, 7189, 5780, 4524, 7789, 7151, 10598, 6322, 1274, 8260, 7024, 7998, 8734, 10442, 7510, 1966, 2445, 9100, 6072, 2771, 4415, 7963, 1234, 5975, 3249, 12017, 11778, 6140, 12049, 10868, 8233, 1792, 5454, 7407, 8810, 8639, 10150, 5308, 11051, 12230, 5046, 8678, 5731, 3261, 1874, 5668, 2177, 12224, 4726, 2687, 10063, 11091, 1648, 8119, 7745, 10782, 9746, 663, 6622, 395, 585, 7304, 3742, 7921, 531, 1147, 7712, 10433, 7518, 2423, 7626, 2448, 7670, 11106, 2160, 500, 6185, 7690, 70, 7071, 8450, 363, 6962, 1384, 8272, 5556, 6426, 7632, 1503, 1372, 7457, 6619, 4825, 3734, 1664, 9033, 2489, 5469, 3633, 9375, 8440, 2864, 823, 11683, 4547, 9359, 7417, 4334, 1752, 1771, 2573, 4123, 6884, 6145, 9421, 2067, 11928, 5492, 80, 4570, 6146, 3926, 6201, 8604, 4187, 1083, 713, 2327, 5313, 7033, 3499, 10937, 9820, 1818, 7568, 2207, 11202, 10103, 4116, 7780, 5300, 1682, 3547, 1390, 8592, 11547, 4118, 4822, 7297, 9768, 1185, 4712, 9623, 10534, 1989, 7629, 1343, 4521, 6721, 1442, 7269, 2024, 3441, 10696, 1063, 815, 1500, 5809, 10781, 6023, 8740, 1568, 1700, 4945, 4152, 3692, 4379, 12051, 1089, 11517, 12079, 3365, 2488, 6948, 1890, 6582, 9745, 2142, 3639, 501, 1283, 7238, 9164, 1211, 9278, 4651, 10466, 4926, 11705, 3506, 6748, 10665, 202, 8467, 5073, 5612, 8313, 6362, 11600, 11333, 2722, 4954, 2048, 6391, 6131, 1533, 8026, 720, 11473, 2542, 8587, 6653, 1339, 10437, 3635, 6417, 9932, 8216, 12168, 6913, 9783, 7385, 4715, 6667, 1456, 9440, 3714, 177, 8695, 6678, 12068, 7345, 8061, 10400, 5758, 195], r.iroots = [10924, 8850, 934, 5018, 10030, 1547, 2410, 580, 11050, 10869, 7654, 2097, 2487, 3862, 9750, 5253, 765, 847, 3933, 4210, 4237, 11422, 675, 2916, 2585, 1336, 6784, 5712, 7249, 5263, 1558, 6239, 4419, 10242, 2189, 5524, 6692, 4823, 4622, 3254, 9872, 1356, 2176, 10875, 11368, 1920, 36, 4088, 2385, 472, 4310, 8788, 3812, 9586, 10779, 3308, 8782, 11394, 9584, 5519, 3082, 11348, 520, 7162, 1023, 1470, 5404, 4666, 1666, 6214, 11023, 7803, 2252, 389, 1313, 265, 6995, 10556, 8493, 1789, 6584, 4848, 11151, 491, 10410, 10562, 2195, 2109, 5220, 2888, 8042, 10655, 12285, 6373, 3883, 3994, 5358, 10366, 3113, 8041, 5194, 1301, 2559, 12038, 515, 12056, 6985, 8055, 3013, 7609, 9129, 8469, 11852, 4994, 9464, 85, 12214, 11965, 8289, 7298, 4708, 7558, 1217, 5749, 9385, 6134, 4877, 11729, 10712, 2527, 10109, 7787, 6141, 968, 8006, 6567, 12181, 25, 6529, 9526, 8221, 5038, 4242, 6528, 4530, 2365, 8109, 11436, 10873, 7155, 10503, 641, 10729, 3092, 2823, 9246, 2685, 1768, 8021, 4174, 10264, 3541, 2601, 422, 9748, 2295, 11948, 11799, 7615, 5861, 8789, 9458, 8281, 7755, 7442, 8063, 7617, 8819, 703, 7461, 4260, 8572, 5998, 10673, 10317, 8194, 9524, 2802, 7648, 5512, 10549, 7230, 4612, 753, 8386, 3293, 5769, 3785, 455, 9339, 9480, 11460, 1751, 9039, 699, 1545, 413, 8666, 12e3, 2684, 972, 12064, 9596, 10978, 12034, 3814, 9947, 1680, 6176, 3577, 1904, 1835, 7331, 3651, 5704, 5962, 5181, 6652, 10034, 7463, 10816, 8875, 640, 307, 5459, 12277, 3625, 3371, 4902, 11837, 11388, 6922, 5199, 8696, 11122, 6756, 11494, 3939, 7879, 3069, 10580, 3923, 5936, 4998, 1169, 8491, 8750, 933, 3781, 604, 5973, 10565, 11335, 2269, 6997, 1225, 407, 12081, 9581, 1082, 11234, 358, 768, 5284, 4093, 7359, 4350, 6503, 10798, 6831, 9583, 4040, 3148, 10650, 8675, 609, 12070, 7902, 11376, 1463, 4559, 8389, 10670, 1854, 7869, 568, 4465, 4542, 546, 8749, 232, 11325, 8277, 1839, 4563, 2016, 9869, 9208, 12116, 2202, 11255, 6839, 1684, 8258, 11983, 2119, 6082, 12019, 763, 10178, 4786, 30, 5377, 1600, 34, 1130, 10006, 2918, 9827, 8535, 12065, 507, 9673, 1971, 7948, 6808, 10417, 8626, 10761, 1264, 3222, 9495, 12083, 2551, 8132, 8586, 7688, 3227, 7273, 3892, 2838, 6853, 9138, 9491, 8089, 6434, 106, 9306, 1557, 4760, 6782, 2754, 9422, 11701, 5579, 5422, 6707, 2430, 5007, 7375, 8971, 8278, 4262, 11530, 10201, 8676, 5112, 2913, 2282, 7892, 8217, 11411, 8125, 10522, 971, 10585, 6727, 7432, 7900, 9550, 11700, 1388, 12036, 6772, 2892, 696, 10952, 1106, 10620, 1638, 3102, 4061, 5683, 11770, 6241, 1400, 9243, 5029, 1e4, 6333, 810, 5957, 12093, 5052, 5932, 11371, 4473, 4085, 5069, 761, 8726, 2304, 2501, 12279, 657, 872, 10462, 1447, 169, 4171, 4917, 9444, 3165, 11215, 9043, 4165, 8614, 8702, 624, 1221, 9490, 1672, 10477, 11343, 5172, 5630, 5482, 9427, 7618, 10298, 8949, 318, 8394, 2836, 5276, 11978, 4457, 4999, 8312, 4448, 4027, 8057, 1764, 3688, 6264, 10839, 2277, 497, 2453, 2732, 12033, 2335, 203, 5301, 2634, 73, 3550, 3047, 902, 6846, 618, 4636, 8382, 9666, 10989, 6673, 8497, 7705, 3775, 4019, 613, 9530, 11109, 12107, 2608, 10775, 734, 4154, 6376, 4441, 11262, 4903, 10768, 11617, 12199, 2069, 7489, 3842, 8899, 102, 3535, 5440, 12094, 6531, 1889, 4228, 4944, 221, 5611, 3594, 12112, 8575, 2849, 10833, 5622, 7574, 4904, 2506, 5376, 121, 4073, 2357, 5872, 8654, 1852, 10950, 5636, 3702, 9747, 816, 11569, 4263, 10756, 6158, 5898, 10241, 7335, 9567, 956, 689, 5927, 3976, 6677, 7216, 3822, 12087, 1624, 5541, 8783, 584, 7363, 1823, 7638, 3011, 11078, 3125, 5051, 11006, 11788, 8650, 10147, 2544, 5707, 10399, 5341, 9801, 8924, 210, 772, 11200, 238, 7910, 8597, 8137, 7344, 10589, 10721, 3549, 6266, 1508, 6480, 10789, 11474, 11226, 1593, 8848, 10265, 5020, 10847, 5568, 7768, 10946, 4660, 10300, 1755, 2666, 7577, 11104, 2521, 4992, 7467, 8171, 742, 3697, 10899, 8742, 10607, 6989, 4509, 8173, 2186, 1087, 10082, 4721, 10471, 2469, 1352, 8790, 5256, 6976, 9962, 11576, 11206, 8102, 3685, 6088, 8363, 6143, 7719, 12209, 6797, 361, 10222, 2868, 6144, 5405, 8166, 9716, 10518, 10537, 7955, 4872, 2930, 7742, 606, 11466, 9425, 3849, 2914, 8656, 6820, 9800, 3256, 10625, 8555, 7464, 5670, 4832, 10917, 10786, 4657, 5863, 6733, 4017, 10905, 5327, 11926, 3839, 5218, 12219, 4599, 6104, 11789, 10129, 1183, 4619, 9841, 4663, 9866, 4771, 1856, 4577, 11142, 11758, 4368, 8547, 4985, 11704, 11894, 5667, 11626, 2543, 1507, 4544, 4170, 10641, 1198, 2226, 9602, 7563, 65, 10112, 6621, 10415, 9028, 6558, 3611, 7243, 59, 1238, 6981, 2139, 3650, 3479, 4882, 6835, 10497, 4056, 1421, 240, 6149, 511, 272, 9040, 6314, 11055, 4326, 7874, 9518, 6217, 3189, 9844, 10323, 4779, 1847, 3555, 4291, 5265, 4029, 11015, 5967, 1691, 5138, 4500, 7765, 6509, 5100, 9743, 1642, 7585, 11659, 2194, 3267, 2316, 848, 714, 167, 1213, 1250, 5400, 9318, 5353, 6120, 6776, 6886, 9102, 11533, 175, 8836, 5237, 8391, 10688, 5116, 8829, 7132, 4266, 7607, 6318, 2377, 929, 12076, 4487, 1369, 9355, 7472, 3277, 6506, 87, 6991, 4640, 10403, 209, 5918, 2954, 6791, 3776, 9902, 8859, 4149, 4160, 78, 4761, 8811, 5129, 2938, 7285, 4163, 288, 4921, 3071, 5242, 10848, 5119, 977, 10774, 8202, 5223, 7325, 4380, 1717, 109, 1454, 7706, 5271, 9546, 10762, 3516, 1917, 3185, 3928, 4915, 6486, 12257, 1828, 4893, 10815, 2891, 11506, 10266, 6499, 6804, 10714, 5727, 3112, 10504, 2120, 8184, 11760, 6365, 461, 1039, 556, 2161, 979, 3061, 4867, 11689, 9697, 8793, 3085, 1978, 680, 4480, 2149, 1346, 12205, 797, 11308, 9736, 9125, 5982, 11587, 11815, 11716, 4120, 10425, 6724, 2995, 5997, 9194, 326, 2883, 4685, 10408, 8183, 10281, 7161, 10290, 961, 8084, 11662, 6631, 3427, 5465, 3475, 2723, 9191, 1855, 12098, 158, 10295, 234, 9221, 9358, 4323, 3437, 11425, 200, 3076, 2474, 11962, 7927, 7138, 851, 12261, 7744, 2603, 3380, 639, 11117, 9502, 7131, 11780, 9107, 5624, 10532, 3605, 10658, 12028, 7229, 8802, 4107, 2458, 10127, 9230, 10380, 4803, 595, 11764, 10021, 8867, 1930, 8378, 3750, 8519, 3376, 4250, 6071, 9561, 8369, 6355, 10249, 3034, 1801, 9977, 9183, 7776, 10489, 7659, 9492, 2943, 2391, 5842, 1151, 252, 4038, 4406, 3304, 5592, 71, 2106, 5657, 1719, 10867, 29, 6024, 5643, 1766, 9285, 5702, 3640, 978, 5355, 5929, 2953, 4892, 5081, 6220, 4725, 8123, 5806, 9352, 10621, 3117, 1587, 12263, 10906, 6806, 3616, 2349, 4422, 2390, 5120, 2456, 6805, 12193, 8765, 10829, 4581, 4060, 6538, 10548, 505, 9555], r
            })
        },
        1607: function(t, r, n) {
            void 0 !== t.exports && (t.exports.PAIR = function(t) {
                "use strict";
                var r = {
                    line: function(r, n, o, e) {
                        var i, E, s, _, R, u, f, C, I, h, c, a = new t.FP12(1),
                            p = new t.FP4(0);
                        return r == n ? (i = new t.FP2(r.getx()), E = new t.FP2(r.gety()), s = new t.FP2(r.getz()), (_ = new t.FP2(E)).mul(s), i.sqr(), E.sqr(), s.sqr(), _.imul(4), _.neg(), _.norm(), _.pmul(e), i.imul(6), i.pmul(o), R = 3 * t.ROM_CURVE.CURVE_B_I, s.imul(R), t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && s.div_ip2(), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (s.mul_ip(), s.add(s), _.mul_ip(), _.norm()), s.norm(), E.add(E), s.sub(E), s.norm(), h = new t.FP4(_, s), t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && (c = new t.FP4(i), p = new t.FP4(0)), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (c = new t.FP4(0), (p = new t.FP4(i)).times_i()), r.dbl()) : (u = new t.FP2(r.getx()), f = new t.FP2(r.gety()), C = new t.FP2(r.getz()), I = new t.FP2(r.getz()), C.mul(n.gety()), I.mul(n.getx()), u.sub(I), u.norm(), f.sub(C), f.norm(), C.copy(u), u.pmul(e), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (u.mul_ip(), u.norm()), C.mul(n.gety()), I.copy(f), I.mul(n.getx()), I.sub(C), I.norm(), f.pmul(o), f.neg(), f.norm(), h = new t.FP4(u, I), t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && (c = new t.FP4(f), p = new t.FP4(0)), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (c = new t.FP4(0), (p = new t.FP4(f)).times_i()), r.add(n)), a.set(h, c, p), a
                    },
                    ate: function(n, o) {
                        var e, i, E, s, _, R, u, f, C, I, h, c, a, p;
                        for ((e = new t.BIG(0)).rcopy(t.ROM_FIELD.Fra), (i = new t.BIG(0)).rcopy(t.ROM_FIELD.Frb), E = new t.FP2(e, i), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (E.inverse(), E.norm()), (s = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Bnx), _ = new t.BIG(s), u = new t.ECP2, t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN ? (_.pmul(6), t.ECP.SIGN_OF_X == t.ECP.POSITIVEX ? _.inc(2) : _.dec(2)) : _.copy(s), _.norm(), (R = new t.BIG(_)).pmul(3), R.norm(), C = new t.FP(o.getx()), I = new t.FP(o.gety()), h = new t.ECP2, c = new t.FP12(1), h.copy(n), p = R.nbits() - 2; p >= 1; p--) c.sqr(), f = r.line(h, h, C, I), c.smul(f, t.ECP.SEXTIC_TWIST), 1 == (a = R.bit(p) - _.bit(p)) && (f = r.line(h, n, C, I), c.smul(f, t.ECP.SEXTIC_TWIST)), -1 == a && (n.neg(), f = r.line(h, n, C, I), c.smul(f, t.ECP.SEXTIC_TWIST), n.neg());
                        return t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN && (t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && (c.conj(), h.neg()), u.copy(n), u.frob(E), f = r.line(h, u, C, I), c.smul(f, t.ECP.SEXTIC_TWIST), u.frob(E), u.neg(), f = r.line(h, u, C, I), c.smul(f, t.ECP.SEXTIC_TWIST)), c
                    },
                    ate2: function(n, o, e, i) {
                        var E, s, _, R, u, f, C, I, h, c, a, p, U, P, V, S, l;
                        for ((E = new t.BIG(0)).rcopy(t.ROM_FIELD.Fra), (s = new t.BIG(0)).rcopy(t.ROM_FIELD.Frb), _ = new t.FP2(E, s), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (_.inverse(), _.norm()), (R = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Bnx), u = new t.BIG(R), C = new t.ECP2, t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN ? (u.pmul(6), t.ECP.SIGN_OF_X == t.ECP.POSITIVEX ? u.inc(2) : u.dec(2)) : u.copy(R), u.norm(), (f = new t.BIG(u)).pmul(3), f.norm(), h = new t.FP(o.getx()), c = new t.FP(o.gety()), a = new t.FP(i.getx()), p = new t.FP(i.gety()), U = new t.ECP2, P = new t.ECP2, V = new t.FP12(1), U.copy(n), P.copy(e), l = f.nbits() - 2; l >= 1; l--) V.sqr(), I = r.line(U, U, h, c), V.smul(I, t.ECP.SEXTIC_TWIST), I = r.line(P, P, a, p), V.smul(I, t.ECP.SEXTIC_TWIST), 1 == (S = f.bit(l) - u.bit(l)) && (I = r.line(U, n, h, c), V.smul(I, t.ECP.SEXTIC_TWIST), I = r.line(P, e, a, p), V.smul(I, t.ECP.SEXTIC_TWIST)), -1 == S && (n.neg(), I = r.line(U, n, h, c), V.smul(I, t.ECP.SEXTIC_TWIST), n.neg(), e.neg(), I = r.line(P, e, a, p), V.smul(I, t.ECP.SEXTIC_TWIST), e.neg());
                        return t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN && (t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && (V.conj(), U.neg(), P.neg()), C.copy(n), C.frob(_), I = r.line(U, C, h, c), V.smul(I, t.ECP.SEXTIC_TWIST), C.frob(_), C.neg(), I = r.line(U, C, h, c), V.smul(I, t.ECP.SEXTIC_TWIST), C.copy(e), C.frob(_), I = r.line(P, C, a, p), V.smul(I, t.ECP.SEXTIC_TWIST), C.frob(_), C.neg(), I = r.line(P, C, a, p), V.smul(I, t.ECP.SEXTIC_TWIST)), V
                    },
                    fexp: function(r) {
                        var n, o, e, i, E, s, _, R, u, f, C, I, h, c, a, p;
                        return (n = new t.BIG(0)).rcopy(t.ROM_FIELD.Fra), (o = new t.BIG(0)).rcopy(t.ROM_FIELD.Frb), e = new t.FP2(n, o), (i = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Bnx), E = new t.FP12(r), (s = new t.FP12(E)).inverse(), E.conj(), E.mul(s), s.copy(E), E.frob(e), E.frob(e), E.mul(s), t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN ? (s.copy(E), s.frob(e), (_ = new t.FP12(s)).frob(e), s.mul(E), _.mul(s), _.frob(e), (R = new t.FP12(E)).conj(), C = E.pow(i), t.ECP.SIGN_OF_X == t.ECP.POSITIVEX && C.conj(), (f = new t.FP12(C)).frob(e), u = C.pow(i), t.ECP.SIGN_OF_X == t.ECP.POSITIVEX && u.conj(), (I = new t.FP12(u)).conj(), s = u.pow(i), t.ECP.SIGN_OF_X == t.ECP.POSITIVEX && s.conj(), u.frob(e), E.copy(u), E.conj(), C.mul(E), u.frob(e), E.copy(s), E.frob(e), s.mul(E), s.usqr(), s.mul(C), s.mul(I), E.copy(f), E.mul(I), E.mul(s), s.mul(u), E.usqr(), E.mul(s), E.usqr(), s.copy(E), s.mul(R), E.mul(_), s.usqr(), E.mul(s), E.reduce()) : ((h = new t.FP12(E)).usqr(), c = h.pow(i), t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && c.conj(), i.fshr(1), a = c.pow(i), t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && a.conj(), i.fshl(1), (p = new t.FP12(E)).conj(), c.mul(p), c.conj(), c.mul(a), a = c.pow(i), t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && a.conj(), p = a.pow(i), t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && p.conj(), c.conj(), p.mul(c), c.conj(), c.frob(e), c.frob(e), c.frob(e), a.frob(e), a.frob(e), c.mul(a), a = p.pow(i), t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && a.conj(), a.mul(h), a.mul(E), c.mul(a), a.copy(p), a.frob(e), c.mul(a), E.copy(c), E.reduce()), E
                    },
                    glv: function(r) {
                        var n, o, e, i, E, s, _, R, u = [];
                        if (t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN) {
                            for (n = new t.BIG(0), e = [], (o = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), _ = 0; _ < 2; _++) n.rcopy(t.ROM_CURVE.CURVE_W[_]), i = t.BIG.mul(n, r), e[_] = new t.BIG(i.div(o)), u[_] = new t.BIG(0);
                            for (u[0].copy(r), _ = 0; _ < 2; _++)
                                for (R = 0; R < 2; R++) n.rcopy(t.ROM_CURVE.CURVE_SB[R][_]), n.copy(t.BIG.modmul(e[R], n, o)), u[_].add(o), u[_].sub(n), u[_].mod(o)
                        } else(o = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), (E = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Bnx), s = t.BIG.smul(E, E), u[0] = new t.BIG(r), u[0].mod(s), u[1] = new t.BIG(r), u[1].div(s), u[1].rsub(o);
                        return u
                    },
                    gs: function(r) {
                        var n, o, e, i, E, s, _, R, u = [];
                        if (t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN) {
                            for (e = new t.BIG(0), (i = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), E = [], n = 0; n < 4; n++) e.rcopy(t.ROM_CURVE.CURVE_WB[n]), s = t.BIG.mul(e, r), E[n] = new t.BIG(s.div(i)), u[n] = new t.BIG(0);
                            for (u[0].copy(r), n = 0; n < 4; n++)
                                for (o = 0; o < 4; o++) e.rcopy(t.ROM_CURVE.CURVE_BB[o][n]), e.copy(t.BIG.modmul(E[o], e, i)), u[n].add(i), u[n].sub(e), u[n].mod(i)
                        } else {
                            for ((_ = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Bnx), (i = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), R = new t.BIG(r), n = 0; n < 3; n++) u[n] = new t.BIG(R), u[n].mod(_), R.div(_);
                            u[3] = new t.BIG(R), t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && (u[1].copy(t.BIG.modneg(u[1], i)), u[3].copy(t.BIG.modneg(u[3], i)))
                        }
                        return u
                    },
                    G1mul: function(n, o) {
                        var e, i, E, s, _, R, u, f;
                        return t.ROM_CURVE.USE_GLV ? (n.affine(), (e = new t.ECP).copy(n), (i = new t.ECP).copy(n), (E = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), (s = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Cru), _ = new t.FP(s), R = new t.BIG(0), u = r.glv(o), i.getx().mul(_), f = u[0].nbits(), R.copy(t.BIG.modneg(u[0], E)), R.nbits() < f && (u[0].copy(R), e.neg()), f = u[1].nbits(), R.copy(t.BIG.modneg(u[1], E)), R.nbits() < f && (u[1].copy(R), i.neg()), e = e.mul2(u[0], i, u[1])) : e = n.mul(o), e
                    },
                    G2mul: function(n, o) {
                        var e, i, E, s, _, R, u, f, C, I;
                        if (t.ROM_CURVE.USE_GS_G2) {
                            for (i = [], (E = new t.BIG(0)).rcopy(t.ROM_FIELD.Fra), (s = new t.BIG(0)).rcopy(t.ROM_FIELD.Frb), _ = new t.FP2(E, s), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (_.inverse(), _.norm()), (R = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), u = r.gs(o), f = new t.BIG(0), n.affine(), i[0] = new t.ECP2, i[0].copy(n), C = 1; C < 4; C++) i[C] = new t.ECP2, i[C].copy(i[C - 1]), i[C].frob(_);
                            for (C = 0; C < 4; C++) I = u[C].nbits(), f.copy(t.BIG.modneg(u[C], R)), f.nbits() < I && (u[C].copy(f), i[C].neg());
                            e = t.ECP2.mul4(i, u)
                        } else e = n.mul(o);
                        return e
                    },
                    GTpow: function(n, o) {
                        var e, i, E, s, _, R, u, f, C, I;
                        if (t.ROM_CURVE.USE_GS_GT) {
                            for (i = [], (E = new t.BIG(0)).rcopy(t.ROM_FIELD.Fra), (s = new t.BIG(0)).rcopy(t.ROM_FIELD.Frb), _ = new t.FP2(E, s), (R = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), u = new t.BIG(0), f = r.gs(o), i[0] = new t.FP12(n), C = 1; C < 4; C++) i[C] = new t.FP12(0), i[C].copy(i[C - 1]), i[C].frob(_);
                            for (C = 0; C < 4; C++) I = f[C].nbits(), u.copy(t.BIG.modneg(f[C], R)), u.nbits() < I && (f[C].copy(u), i[C].conj());
                            e = t.FP12.pow4(i, f)
                        } else e = n.pow(o);
                        return e
                    }
                };
                return r
            })
        },
        1608: function(t, r, n) {
            void 0 !== t.exports && (t.exports.RAND = function(t) {
                "use strict";
                var r = function() {
                    this.ira = [], this.rndptr = 0, this.borrow = 0, this.pool_ptr = 0, this.pool = [], this.clean()
                };
                return r.prototype = {
                    NK: 21,
                    NJ: 6,
                    NV: 8,
                    clean: function() {
                        var t;
                        for (t = 0; t < 32; t++) this.pool[t] = 0;
                        for (t = 0; t < this.NK; t++) this.ira[t] = 0;
                        this.rndptr = 0, this.borrow = 0, this.pool_ptr = 0
                    },
                    sbrand: function() {
                        var t, r, n, o;
                        if (this.rndptr++, this.rndptr < this.NK) return this.ira[this.rndptr];
                        for (this.rndptr = 0, t = 0, r = this.NK - this.NJ; t < this.NK; t++, r++) r == this.NK && (r = 0), n = (o = this.ira[r] >>> 0) - this.ira[t] - this.borrow | 0, (n >>>= 0) < o && (this.borrow = 0), n > o && (this.borrow = 1), this.ira[t] = 0 | n;
                        return this.ira[0]
                    },
                    sirand: function(t) {
                        var r, n, o, e = 1;
                        for (this.borrow = 0, this.rndptr = 0, t >>>= 0, this.ira[0] ^= t, r = 1; r < this.NK; r++) n = this.NV * r % this.NK, this.ira[n] ^= e, o = e, e = t - e | 0, t = o;
                        for (r = 0; r < 1e4; r++) this.sbrand()
                    },
                    fill_pool: function() {
                        var r, n = new t.HASH256;
                        for (r = 0; r < 128; r++) n.process(this.sbrand());
                        this.pool = n.hash(), this.pool_ptr = 0
                    },
                    seed: function(n, o) {
                        var e, i = new t.HASH256,
                            E = [],
                            s = [];
                        for (this.pool_ptr = 0, e = 0; e < this.NK; e++) this.ira[e] = 0;
                        if (n > 0) {
                            for (e = 0; e < n; e++) i.process(o[e]);
                            for (E = i.hash(), e = 0; e < 8; e++) s[0] = E[4 * e], s[1] = E[4 * e + 1], s[2] = E[4 * e + 2], s[3] = E[4 * e + 3], this.sirand(r.pack(s))
                        }
                        this.fill_pool()
                    },
                    getByte: function() {
                        var t = this.pool[this.pool_ptr++];
                        return this.pool_ptr >= 32 && this.fill_pool(), 255 & t
                    }
                }, r.pack = function(t) {
                    return (255 & t[3]) << 24 | (255 & t[2]) << 16 | (255 & t[1]) << 8 | 255 & t[0]
                }, r
            })
        },
        1609: function(t, r, n) {
            var o, e, i, E, s, _, R, u, f, C, I, h, c, a, p, U, P, V, S, l, y, B;
            o = function() {
                return {
                    CURVE_A: -3,
                    CURVE_B_I: 0,
                    CURVE_B: [8107839, 15570555, 8401013, 14987681, 15469722, 12586975, 7686724, 871098, 2664752, 4180564, 60981],
                    CURVE_Order: [14046689, 13916614, 9707517, 4248255, 14444513, 4414291, 15257154, 1053293, 3855759, 1543179, 61949],
                    CURVE_Gx: [9395455, 8007129, 91337, 11507895, 2609884, 2332044, 4671956, 3217469, 12663275, 13943638, 46771],
                    CURVE_Gy: [404731, 5903700, 14779153, 15262921, 115463, 15698983, 15791084, 2069105, 11666577, 14743496, 24898]
                }
            }, e = function() {
                return {
                    CURVE_A: 0,
                    CURVE_B_I: 15,
                    CURVE_B: [15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Order: [3932161, 3397629, 6089858, 591516, 6228314, 7355328, 370220, 2228452, 3672512, 6145, 32774, 8, 0, 0, 0, 0, 0],
                    CURVE_Gx: [7554419, 7238160, 1172241, 2073528, 6143752, 6851466, 1227896, 4447596, 7613487, 7168259, 5011069, 7176839, 7603501, 1863787, 6191929, 6105820, 16892],
                    CURVE_Gy: [258596, 2931968, 7636148, 4455623, 8210924, 2472906, 2849491, 2721098, 4493575, 841580, 7616183, 6436556, 1891377, 18781, 3402944, 735546, 1679],
                    CURVE_Bnx: [4608, 2, 262176, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cof: [1482411, 2802346, 8312129, 349663, 2796544, 2731, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cru: [2802345, 5152861, 4944653, 1506094, 6252570, 6829956, 866216, 2693029, 7429346, 6928314, 86292, 4866979, 3424366, 1312949, 2808749, 2837170, 21861],
                    CURVE_Pxa: [8334726, 6777946, 7885042, 4909289, 8235879, 6675715, 4020373, 4165192, 7494612, 1090986, 824327, 997938, 616395, 1576754, 8061178, 6885891, 1588],
                    CURVE_Pxb: [5430805, 4734344, 3653479, 2883376, 4895373, 3861354, 2335925, 7128532, 5016031, 5978635, 1299043, 1773289, 7434888, 6188878, 22830, 3932208, 12301],
                    CURVE_Pya: [576321, 6387496, 5861795, 1075980, 2022991, 6089577, 2770152, 4964822, 1785448, 2942867, 3826747, 3253211, 357374, 7940411, 4756689, 1473694, 13177],
                    CURVE_Pyb: [4690067, 820990, 1633121, 7541028, 4442893, 1250818, 1211887, 7887226, 8032122, 579197, 473141, 5494528, 3833109, 6593999, 3367706, 1195753, 8421],
                    CURVE_W: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    CURVE_SB: [
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ]
                    ],
                    CURVE_WB: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    CURVE_BB: [
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ]
                    ],
                    USE_GLV: !0,
                    USE_GS_G2: !0,
                    USE_GS_GT: !0,
                    GT_STRONG: !0
                }
            }, i = function() {
                return {
                    CURVE_A: 0,
                    CURVE_B_I: 9,
                    CURVE_B: [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Order: [1, 0, 7340032, 8355839, 524031, 139264, 8331264, 8257727, 59393, 4243360, 1535, 8380428, 8388479, 511, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Gx: [6220093, 316693, 5260596, 7813723, 2989056, 6510846, 6686420, 4265185, 5097761, 2205356, 2631065, 8118601, 4415846, 4547374, 1716132, 3708539, 819506, 4681332, 3827409, 5670714, 0],
                    CURVE_Gy: [5362789, 4598517, 5358557, 6578815, 5339268, 7447595, 424346, 2943060, 2383689, 1428358, 3019332, 4586784, 1502923, 4135293, 3351294, 1545149, 6233151, 4116882, 4533441, 3923565, 0],
                    CURVE_Bnx: [0, 8387584, 8388591, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cof: [2796203, 8387925, 5941919, 5603498, 8213930, 2793471, 21845, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cru: [8388606, 1023, 16, 8388352, 8388223, 6422509, 12575, 6488633, 7190460, 6433522, 7590365, 4434457, 4132489, 656578, 5772288, 8347647, 131071, 0, 0, 0, 0],
                    CURVE_Pxa: [5284732, 2122509, 3217773, 1522414, 1846857, 2952981, 517223, 8041072, 7667602, 6360502, 1679375, 3582989, 7174356, 7885327, 2247653, 1971078, 7764293, 4855093, 5122074, 418464, 1],
                    CURVE_Pxb: [4309165, 3756421, 3647457, 6427365, 1494374, 4526785, 304454, 2100579, 4112098, 8037685, 8230597, 5263001, 4566875, 7224745, 4952912, 1193267, 2259410, 1918713, 5503339, 4907261, 0],
                    CURVE_Pya: [3125254, 2196320, 843571, 5394581, 5493140, 1202450, 5780467, 6505892, 62367, 1996086, 8079080, 4120034, 5111178, 388947, 3443187, 8024991, 6320372, 7666894, 1194490, 1127780, 0],
                    CURVE_Pyb: [7423356, 875515, 172692, 7209569, 5073457, 7194614, 2532292, 2831477, 6572335, 3045495, 1697866, 2487645, 2231271, 6058157, 8131344, 141483, 2798032, 6817236, 7159470, 7454848, 0],
                    CURVE_W: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    CURVE_SB: [
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ]
                    ],
                    CURVE_WB: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    CURVE_BB: [
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ]
                    ],
                    USE_GLV: !0,
                    USE_GS_G2: !0,
                    USE_GS_GT: !0,
                    GT_STRONG: !1
                }
            }, E = function() {
                return {
                    CURVE_A: 0,
                    CURVE_B_I: 3,
                    CURVE_B: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Order: [741389, 5467345, 1766957, 1218962, 14444027, 10788364, 6221425, 4646386, 16576717, 16777215, 65535],
                    CURVE_Gx: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Gy: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Bnx: [11577345, 16105520, 26754, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cof: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cru: [10598407, 664739, 2022172, 15831853, 13490077, 1598875, 4231696, 3770593, 1, 0, 0],
                    CURVE_Pxa: [12623611, 1488521, 3985958, 1228676, 1856410, 9517774, 5733416, 2643471, 13200416, 3362996, 65036],
                    CURVE_Pxb: [8284715, 15545507, 9032297, 8900661, 14514402, 1292580, 12990424, 14375649, 9093204, 6313843, 20134],
                    CURVE_Pya: [14428159, 11829694, 4778249, 9265496, 13313141, 4084207, 7672398, 7763725, 4367283, 4646853, 28704],
                    CURVE_Pyb: [11338907, 8458570, 11788306, 8526488, 5029504, 11706251, 4794750, 4386470, 8962704, 14925011, 1364],
                    CURVE_W: [
                        [344067, 224795, 6699760, 16776824, 16777215, 255, 0, 0, 0, 0, 0],
                        [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    CURVE_SB: [
                        [
                            [6721540, 15658620, 6753269, 16776824, 16777215, 255, 0, 0, 0, 0, 0],
                            [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
                            [397322, 5242550, 11844413, 1219353, 14444027, 10788108, 6221425, 4646386, 16576717, 16777215, 65535]
                        ]
                    ],
                    CURVE_WB: [
                        [3188736, 6786829, 13373472, 5592274, 5592405, 85, 0, 0, 0, 0, 0],
                        [8243205, 7752717, 11344598, 10554307, 14585790, 1066087, 8413536, 13698539, 0, 0, 0],
                        [1521667, 11929119, 14074284, 5277153, 15681503, 533043, 12595376, 6849269, 0, 0, 0],
                        [9566209, 5443438, 13426982, 5592274, 5592405, 85, 0, 0, 0, 0, 0]
                    ],
                    CURVE_BB: [
                        [
                            [5941261, 6139040, 1740202, 1218962, 14444027, 10788364, 6221425, 4646386, 16576717, 16777215, 65535],
                            [5941260, 6139040, 1740202, 1218962, 14444027, 10788364, 6221425, 4646386, 16576717, 16777215, 65535],
                            [5941260, 6139040, 1740202, 1218962, 14444027, 10788364, 6221425, 4646386, 16576717, 16777215, 65535],
                            [6377474, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
                            [5941260, 6139040, 1740202, 1218962, 14444027, 10788364, 6221425, 4646386, 16576717, 16777215, 65535],
                            [5941261, 6139040, 1740202, 1218962, 14444027, 10788364, 6221425, 4646386, 16576717, 16777215, 65535],
                            [5941260, 6139040, 1740202, 1218962, 14444027, 10788364, 6221425, 4646386, 16576717, 16777215, 65535]
                        ],
                        [
                            [6377474, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
                            [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
                            [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
                            [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [11577346, 16105520, 26754, 0, 0, 0, 0, 0, 0, 0, 0],
                            [12754946, 14090434, 107019, 0, 0, 0, 0, 0, 0, 0, 0],
                            [11141130, 6810735, 1713447, 1218962, 14444027, 10788364, 6221425, 4646386, 16576717, 16777215, 65535],
                            [11577346, 16105520, 26754, 0, 0, 0, 0, 0, 0, 0, 0]
                        ]
                    ],
                    USE_GLV: !0,
                    USE_GS_G2: !0,
                    USE_GS_GT: !0,
                    GT_STRONG: !1
                }
            }, s = function() {
                return {
                    CURVE_A: 0,
                    CURVE_B_I: 3,
                    CURVE_B: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Order: [1706477, 1359523, 5249689, 2608405, 201696, 3434818, 2804126, 4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332, 3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607, 8388607, 63],
                    CURVE_Gx: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Gy: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Bnx: [1824783, 882364, 4211404, 362431, 3103747, 3344, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cof: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cru: [7940490, 2900280, 338972, 6052030, 7235481, 1201625, 3118232, 4441267, 5274317, 1128526, 1911936, 589080, 7925622, 7459929, 3021517, 1388707, 8243261, 8385496, 8388607, 8388607, 8388607, 8388607, 63],
                    CURVE_Pxa: [3557045, 5430299, 8010782, 4733311, 1017649, 7464003, 7286513, 2875152, 5097180, 7390882, 4231501, 3958405, 5920716, 3618479, 5071811, 6154573, 6954571, 155257, 28317, 2378436, 1971078, 6474343, 14],
                    CURVE_Pxb: [712937, 1564597, 7141079, 7095432, 4866332, 6003841, 5115734, 2648944, 7212382, 6621860, 6322313, 6072011, 3155302, 4779345, 1776572, 5450606, 3441246, 88017, 7155994, 4142660, 4162822, 230009, 18],
                    CURVE_Pya: [6186913, 402779, 1542432, 718812, 2194134, 7834523, 655917, 1149226, 4099805, 8116266, 5977186, 3460773, 6668632, 1810557, 5866175, 4380911, 5187440, 1668206, 3921580, 4047177, 5014140, 6307216, 27],
                    CURVE_Pyb: [5213835, 6491536, 5903917, 2489264, 377378, 72702, 8096231, 1607019, 464036, 509386, 665087, 827629, 3998870, 6394732, 4596126, 662624, 5840642, 6471403, 888880, 3938518, 4763726, 3438493, 20],
                    CURVE_W: [
                        [214403, 7417491, 5227587, 6862091, 6273297, 4717868, 8388413, 8388607, 8388607, 8388607, 8388607, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    CURVE_SB: [
                        [
                            [4953444, 5652762, 5193387, 6137228, 65803, 4711180, 8388413, 8388607, 8388607, 8388607, 8388607, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [6445518, 7983402, 5215488, 1883542, 2382810, 3428129, 2804126, 4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332, 3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607, 8388607, 63]
                        ],
                        [
                            [3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [214403, 7417491, 5227587, 6862091, 6273297, 4717868, 8388413, 8388607, 8388607, 8388607, 8388607, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ]
                    ],
                    CURVE_WB: [
                        [5908976, 6739306, 3169130, 2891416, 4467808, 4374399, 5592340, 2796202, 5592405, 2796202, 5592405, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [3497291, 153412, 4586412, 7076903, 2161695, 7064478, 2586798, 2902397, 5952527, 7520457, 4540882, 2730161, 5729219, 273601, 5798904, 7716912, 53509, 0, 0, 0, 0, 0, 0],
                        [2661037, 517888, 4398908, 3719667, 2632721, 3533911, 5487703, 5645502, 7170567, 3760228, 6464745, 5559384, 7058913, 136800, 2899452, 8052760, 26754, 0, 0, 0, 0, 0, 0],
                        [2259409, 4974578, 3134930, 2166553, 6648922, 4367710, 5592340, 2796202, 5592405, 2796202, 5592405, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    CURVE_BB: [
                        [
                            [1824784, 882364, 4211404, 362431, 3103747, 3344, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [1824783, 882364, 4211404, 362431, 3103747, 3344, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [1824783, 882364, 4211404, 362431, 3103747, 3344, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [6445519, 7983402, 5215488, 1883542, 2382810, 3428129, 2804126, 4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332, 3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607, 8388607, 63]
                        ],
                        [
                            [3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [8270302, 477158, 1038285, 2245974, 5486557, 3431473, 2804126, 4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332, 3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607, 8388607, 63],
                            [8270301, 477158, 1038285, 2245974, 5486557, 3431473, 2804126, 4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332, 3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607, 8388607, 63],
                            [8270302, 477158, 1038285, 2245974, 5486557, 3431473, 2804126, 4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332, 3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607, 8388607, 63]
                        ],
                        [
                            [3649566, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [8270303, 477158, 1038285, 2245974, 5486557, 3431473, 2804126, 4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332, 3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607, 8388607, 63],
                            [2795951, 6218674, 5181288, 1158679, 4563924, 3421440, 2804126, 4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332, 3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607, 8388607, 63],
                            [3649565, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [8270303, 477158, 1038285, 2245974, 5486557, 3431473, 2804126, 4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332, 3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607, 8388607, 63]
                        ]
                    ],
                    USE_GLV: !0,
                    USE_GS_G2: !0,
                    USE_GS_GT: !0,
                    GT_STRONG: !1
                }
            }, _ = function() {
                return {
                    CURVE_A: 0,
                    CURVE_B_I: 2,
                    CURVE_B: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Order: [13, 0, 1089792, 0, 10452992, 2047, 8388608, 12203085, 1, 6586944, 9507],
                    CURVE_Gx: [18, 0, 1287936, 0, 2162688, 2145, 8388608, 12203085, 1, 6586944, 9507],
                    CURVE_Gy: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Bnx: [1, 0, 16512, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cof: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cru: [7, 0, 445824, 0, 589824, 585, 4194304, 4830050, 0, 0, 0],
                    CURVE_Pxa: [260907, 4334792, 889326, 4757695, 6589371, 15578788, 8293473, 15437196, 10401327, 1096529, 1562],
                    CURVE_Pxb: [13978867, 3457511, 11996556, 11417476, 5076075, 11164447, 9197954, 3213991, 7567411, 11205050, 1302],
                    CURVE_Pya: [13446042, 14710929, 12392944, 12434953, 12389094, 8528681, 9857420, 10129632, 11506499, 9937003, 536],
                    CURVE_Pyb: [3853979, 1764459, 5737005, 14105033, 9438975, 9254832, 5699059, 9399620, 9114918, 2821756, 3771],
                    CURVE_W: [
                        [3, 0, 132096, 0, 8486912, 97, 0, 0, 0, 0, 0],
                        [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    CURVE_SB: [
                        [
                            [4, 0, 165120, 0, 8486912, 97, 0, 0, 0, 0, 0],
                            [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
                            [10, 0, 957696, 0, 1966080, 1950, 8388608, 12203085, 1, 6586944, 9507]
                        ]
                    ],
                    CURVE_WB: [
                        [0, 0, 16512, 0, 8421376, 32, 0, 0, 0, 0, 0],
                        [5, 0, 346752, 0, 458752, 455, 8388608, 3220033, 0, 0, 0],
                        [3, 0, 181632, 0, 8617984, 227, 12582912, 1610016, 0, 0, 0],
                        [1, 0, 49536, 0, 8421376, 32, 0, 0, 0, 0, 0]
                    ],
                    CURVE_BB: [
                        [
                            [13, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1, 6586944, 9507],
                            [12, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1, 6586944, 9507],
                            [12, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1, 6586944, 9507],
                            [2, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
                            [12, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1, 6586944, 9507],
                            [13, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1, 6586944, 9507],
                            [12, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1, 6586944, 9507]
                        ],
                        [
                            [2, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
                            [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
                            [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
                            [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [2, 0, 16512, 0, 0, 0, 0, 0, 0, 0, 0],
                            [2, 0, 66048, 0, 0, 0, 0, 0, 0, 0, 0],
                            [10, 0, 1056768, 0, 10452992, 2047, 8388608, 12203085, 1, 6586944, 9507],
                            [2, 0, 16512, 0, 0, 0, 0, 0, 0, 0, 0]
                        ]
                    ],
                    USE_GLV: !0,
                    USE_GS_G2: !0,
                    USE_GS_GT: !0,
                    GT_STRONG: !1
                }
            }, R = function() {
                return {
                    CURVE_A: 0,
                    CURVE_B_I: 2,
                    CURVE_B: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Order: [15409005, 12625462, 13549073, 837894, 4183790, 6738628, 6584931, 11582943, 7350797, 8, 9216],
                    CURVE_Gx: [1791410, 2355036, 14794342, 1575230, 4183790, 6738724, 6584931, 11582943, 7350797, 8, 9216],
                    CURVE_Gy: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Bnx: [12587697, 3, 16384, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cof: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Cru: [2317463, 9639828, 5648864, 7466887, 12443492, 4133952, 3240, 4718592, 0, 0, 0],
                    CURVE_Pxa: [13823092, 1896164, 2539653, 10501671, 8160703, 4963216, 62915, 3509029, 5485142, 2960496, 6504],
                    CURVE_Pxb: [2740193, 9341742, 1001381, 12716483, 1808304, 9913336, 3647721, 10490313, 1701450, 12184638, 5222],
                    CURVE_Pya: [778399, 16575439, 11734267, 8683201, 6402877, 14813539, 1408430, 14163490, 3353485, 15587698, 2681],
                    CURVE_Pyb: [10022557, 4924040, 15461776, 6935277, 8801957, 3432898, 5320077, 3524324, 12894352, 801260, 1558],
                    CURVE_W: [
                        [3140483, 6506774, 1179732, 737336, 0, 96, 0, 0, 0, 0, 0],
                        [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    CURVE_SB: [
                        [
                            [11538660, 6506781, 1212500, 737336, 0, 96, 0, 0, 0, 0, 0],
                            [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
                            [12268522, 6118688, 12369341, 100558, 4183790, 6738532, 6584931, 11582943, 7350797, 8, 9216]
                        ]
                    ],
                    CURVE_WB: [
                        [8029360, 2168918, 11550748, 245778, 0, 32, 0, 0, 0, 0, 0],
                        [2229365, 16356798, 10106573, 11061887, 8295661, 2756032, 2160, 3145728, 0, 0, 0],
                        [15797139, 16567008, 13450086, 13919551, 4147830, 1378016, 1080, 1572864, 0, 0, 0],
                        [16427537, 2168925, 11583516, 245778, 0, 32, 0, 0, 0, 0, 0]
                    ],
                    CURVE_BB: [
                        [
                            [2821309, 12625459, 13532689, 837894, 4183790, 6738628, 6584931, 11582943, 7350797, 8, 9216],
                            [2821308, 12625459, 13532689, 837894, 4183790, 6738628, 6584931, 11582943, 7350797, 8, 9216],
                            [2821308, 12625459, 13532689, 837894, 4183790, 6738628, 6584931, 11582943, 7350797, 8, 9216],
                            [8398178, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
                            [2821308, 12625459, 13532689, 837894, 4183790, 6738628, 6584931, 11582943, 7350797, 8, 9216],
                            [2821309, 12625459, 13532689, 837894, 4183790, 6738628, 6584931, 11582943, 7350797, 8, 9216],
                            [2821308, 12625459, 13532689, 837894, 4183790, 6738628, 6584931, 11582943, 7350797, 8, 9216]
                        ],
                        [
                            [8398178, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
                            [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
                            [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
                            [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0]
                        ],
                        [
                            [12587698, 3, 16384, 0, 0, 0, 0, 0, 0, 0, 0],
                            [19138, 15, 65536, 0, 0, 0, 0, 0, 0, 0, 0],
                            [7010826, 12625455, 13516305, 837894, 4183790, 6738628, 6584931, 11582943, 7350797, 8, 9216],
                            [12587698, 3, 16384, 0, 0, 0, 0, 0, 0, 0, 0]
                        ]
                    ],
                    USE_GLV: !0,
                    USE_GS_G2: !0,
                    USE_GS_GT: !0,
                    GT_STRONG: !1
                }
            }, u = function() {
                return {
                    CURVE_A: -3,
                    CURVE_B_I: 0,
                    CURVE_B: [15280900, 8454654, 2452197, 11480905, 9694148, 7780287, 7552267, 16672423, 14175908, 6407216, 26156],
                    CURVE_Order: [4740775, 950935, 16224286, 11887014, 3766947, 9269644, 9477507, 4089354, 15641020, 5757857, 43515],
                    CURVE_Gx: [1246708, 9524782, 2849185, 8040380, 10568388, 6375855, 11680357, 7545363, 13625271, 15416513, 41960],
                    CURVE_Gy: [2476478, 15266651, 7595, 3788839, 12367582, 4292201, 14763588, 8354594, 3786093, 7111220, 11673]
                }
            }, f = function() {
                return {
                    CURVE_A: 486662,
                    CURVE_B_I: 0,
                    CURVE_B: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Order: [16110573, 6494812, 14047250, 10680220, 14612958, 20, 0, 0, 0, 0, 4096],
                    CURVE_Gx: [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Gy: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
            }, C = function() {
                return {
                    CURVE_A: 1,
                    CURVE_B_I: 3617,
                    CURVE_B: [3617, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Order: [438137, 432004, 110823, 1635270, 211117, 900208, 393771, 340956, 3983652, 4194220, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 32767],
                    CURVE_Gx: [771477, 2116559, 806867, 1367833, 3406504, 311401, 1489425, 2806619, 1349796, 1441741, 257151, 2609456, 869942, 637311, 405955, 34352, 1327920, 2364496, 107316],
                    CURVE_Gy: [34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
            }, I = function() {
                return {
                    CURVE_A: -1,
                    CURVE_B_I: 0,
                    CURVE_B: [5863587, 5098003, 11236843, 4276696, 7342669, 15243264, 7960441, 9226048, 7339635, 7138859, 20995],
                    CURVE_Order: [16110573, 6494812, 14047250, 10680220, 14612958, 20, 0, 0, 0, 0, 4096],
                    CURVE_Gx: [2479386, 2973839, 11716950, 9774503, 2934624, 14441577, 3276246, 12625122, 7230462, 3593165, 8553],
                    CURVE_Gy: [6710872, 6710886, 6710886, 6710886, 6710886, 6710886, 6710886, 6710886, 6710886, 6710886, 26214]
                }
            }, h = function() {
                return {
                    CURVE_A: 1,
                    CURVE_B_I: -39081,
                    CURVE_B: [8349526, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8257535, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 2047],
                    CURVE_Order: [5784819, 337238, 5541347, 7220346, 4990760, 5375021, 7058829, 2583972, 2353604, 8321428, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 511],
                    CURVE_Gx: [5592405, 2796202, 5592405, 2796202, 5592405, 2796202, 5592405, 2796202, 5592405, 5417642, 2796202, 5592405, 2796202, 5592405, 2796202, 5592405, 2796202, 5592405, 2796202, 1365],
                    CURVE_Gy: [1279725, 7838677, 3107755, 945411, 4926445, 1251191, 5147276, 3322561, 4503565, 6624689, 6262197, 4353725, 7996248, 28122, 2207916, 7016488, 897881, 1420809, 1549709, 1392]
                }
            }, c = function() {
                return {
                    CURVE_A: 1,
                    CURVE_B_I: 11111,
                    CURVE_B: [11111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Order: [2074629, 2829949, 2747582, 4180445, 775864, 5442072, 4523390, 3, 0, 0, 0, 0, 0, 0, 2048],
                    CURVE_Gx: [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Gy: [8291890, 854539, 7097083, 5249838, 5596428, 3595115, 2080013, 6406286, 3230534, 7382947, 5796865, 815328, 5656622, 3719894, 771]
                }
            }, a = function() {
                return {
                    CURVE_A: -3,
                    CURVE_B_I: 0,
                    CURVE_B: [13787211, 3948071, 16137166, 13390768, 1902256, 8830053, 5600920, 11791293, 3838951, 3528874, 23238],
                    CURVE_Order: [6497617, 13288188, 8713145, 10950558, 15137453, 16777148, 16777215, 16777215, 0, 16776960, 65535],
                    CURVE_Gx: [10011286, 3753432, 10548385, 3009331, 228737, 4256375, 15033252, 16301286, 2900551, 13759201, 27415],
                    CURVE_Gy: [12538357, 4220983, 13552566, 7024990, 13513559, 10360363, 4881423, 9365483, 1736603, 4383486, 20451]
                }
            }, p = function() {
                return {
                    CURVE_A: -3,
                    CURVE_B_I: 0,
                    CURVE_B: [7088879, 1170343, 7645719, 5338764, 6527192, 7035082, 5506273, 656455, 4264451, 6159618, 6321777, 4286664, 5684799, 1249728, 1030649, 1561585, 45873],
                    CURVE_Order: [4532595, 3331481, 7058352, 4556091, 2153252, 3926787, 8195531, 3253952, 8388551, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 65535],
                    CURVE_Gx: [7735991, 3961060, 3205457, 8038731, 3089883, 4655776, 2135306, 8102128, 1808473, 4527951, 3699949, 355235, 7466802, 7460408, 2277709, 6623583, 43655],
                    CURVE_Gy: [6950495, 3864865, 7727372, 7074828, 728289, 1573196, 7175214, 7149705, 1342697, 8016180, 6541430, 1499471, 784681, 7058387, 625435, 7284043, 13847]
                }
            }, U = function() {
                return {
                    CURVE_A: -3,
                    CURVE_B_I: 0,
                    CURVE_B: [5259008, 4171990, 4701460, 6906279, 4061315, 6350510, 5172335, 2711646, 1276694, 2349309, 5792997, 544522, 1644783, 7804561, 7128444, 3747276, 7250650, 7146113, 6850178, 5307540, 1630665, 2610988, 5221],
                    CURVE_Order: [3695625, 7224610, 3861950, 5038653, 6069128, 3802998, 4047465, 6684836, 1469311, 491103, 4594206, 8388562, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 32767],
                    CURVE_Gx: [6667622, 8151941, 7333369, 2839060, 736280, 1820265, 6864874, 974995, 5843198, 7331790, 339321, 6942165, 7734964, 4130069, 5238088, 4234370, 4365412, 4664168, 8072600, 5139697, 7356494, 3260630, 12705],
                    CURVE_Gy: [5334608, 2682175, 140026, 1283602, 4655210, 7087783, 5237569, 2645120, 2506949, 3325416, 6273482, 7549284, 5337715, 194039, 6738202, 2237611, 5871861, 5831223, 2719440, 8932, 631740, 2436431, 17934]
                }
            }, P = function() {
                return {
                    CURVE_A: 1,
                    CURVE_B_I: -15342,
                    CURVE_B: [16761685, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 65535],
                    CURVE_Order: [14502645, 11636974, 10164807, 3103043, 9788069, 65, 0, 0, 0, 0, 16384],
                    CURVE_Gx: [15537114, 12619822, 8823006, 14878773, 3770894, 10212876, 6252832, 13442621, 15344509, 1375082, 35445],
                    CURVE_Gy: [9079270, 1501049, 13840294, 1082734, 6250968, 8392817, 14263883, 13538917, 14230983, 4104153, 17621]
                }
            }, V = function() {
                return {
                    CURVE_A: -3,
                    CURVE_B_I: 152961,
                    CURVE_B: [152961, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Order: [5351461, 2107719, 6299819, 15345244, 3965557, 16777188, 16777215, 16777215, 16777215, 16777215, 65535],
                    CURVE_Gx: [1748145, 15605426, 3849298, 251079, 5741321, 13306243, 10506050, 2718357, 11197281, 14071386, 48286],
                    CURVE_Gy: [8707743, 12176161, 12288181, 1388815, 5620689, 14693833, 16219652, 7554187, 10073766, 12644659, 53391]
                }
            }, S = function() {
                return {
                    CURVE_A: 1,
                    CURVE_B_I: -11556,
                    CURVE_B: [8376735, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 65535],
                    CURVE_Order: [2328957, 3770829, 6587111, 5877315, 4543914, 3796028, 2956024, 2329870, 8388578, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 16383],
                    CURVE_Gx: [2124766, 116952, 5063509, 2763936, 2698006, 6819326, 3984472, 3276756, 4980823, 904060, 4992977, 2813357, 2173358, 1578708, 6965659, 589218, 25009],
                    CURVE_Gy: [7508882, 508896, 7501364, 3629638, 2822036, 4808718, 8229221, 511099, 6248067, 6939268, 5944841, 552632, 1720891, 1107734, 6929324, 2044892, 33432]
                }
            }, l = function() {
                return {
                    CURVE_A: -3,
                    CURVE_B_I: -34568,
                    CURVE_B: [8353723, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 65535],
                    CURVE_Order: [942521, 257270, 6914358, 6405907, 2741204, 1062875, 3856218, 1005455, 8388566, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 65535],
                    CURVE_Gx: [1578282, 7604289, 7319154, 8064547, 7262464, 6834757, 4889393, 6198413, 7992563, 1832707, 562951, 3116336, 2237456, 593945, 6014471, 2848856, 30073],
                    CURVE_Gy: [1574678, 7461068, 1667538, 8365417, 7032251, 7329690, 4490912, 1065406, 7576761, 7336190, 4198821, 2522101, 5439576, 1768551, 6742926, 7451760, 44254]
                }
            }, y = function() {
                return {
                    CURVE_A: 1,
                    CURVE_B_I: -78296,
                    CURVE_B: [8309743, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 63],
                    CURVE_Order: [7263341, 1698359, 8232218, 7307111, 6313862, 6202696, 6040993, 2092132, 1161886, 5922719, 5489037, 8388605, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 15],
                    CURVE_Gx: [7100414, 5657395, 5707494, 6694784, 5395495, 1417724, 1417793, 6218953, 7540600, 1957004, 1607429, 6031930, 7070323, 4518959, 7416032, 7589798, 3354577, 1157002, 6499810, 3466192, 5318875, 7456301, 55],
                    CURVE_Gy: [6485473, 4030851, 8178103, 6262400, 7157929, 4169804, 703280, 852803, 3498592, 6673196, 207183, 7608841, 3758345, 5580141, 616264, 8098668, 7267446, 5264458, 4445662, 5475525, 3789980, 2177022, 27]
                }
            }, B = function() {
                return {
                    CURVE_A: -3,
                    CURVE_B_I: 121243,
                    CURVE_B: [121243, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    CURVE_Order: [3364189, 8286728, 997460, 255634, 6861670, 3721066, 6681647, 6368374, 203599, 7809487, 7139987, 8388602, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 63],
                    CURVE_Gx: [2862679, 994073, 750090, 7043823, 5636407, 3171243, 611717, 3973443, 3514003, 2232022, 4228741, 3592138, 795952, 2662620, 4226465, 7085530, 5413066, 4225654, 2998282, 5545681, 7422416, 5768840, 14],
                    CURVE_Gy: [3483558, 966768, 2395778, 6809727, 3523044, 4217317, 2922133, 1102880, 7203265, 3479069, 659543, 686245, 6342589, 1173860, 7286499, 7204693, 19351, 4708194, 3914609, 3513968, 2267861, 477849, 37]
                }
            }, void 0 !== t.exports && (t.exports = {
                ROM_CURVE_ANSSI: o,
                ROM_CURVE_BLS383: e,
                ROM_CURVE_BLS461: i,
                ROM_CURVE_FP256BN: E,
                ROM_CURVE_FP512BN: s,
                ROM_CURVE_BN254: _,
                ROM_CURVE_BN254CX: R,
                ROM_CURVE_BRAINPOOL: u,
                ROM_CURVE_C25519: f,
                ROM_CURVE_C41417: C,
                ROM_CURVE_ED25519: I,
                ROM_CURVE_GOLDILOCKS: h,
                ROM_CURVE_HIFIVE: c,
                ROM_CURVE_NIST256: a,
                ROM_CURVE_NIST384: p,
                ROM_CURVE_NIST521: U,
                ROM_CURVE_NUMS256E: P,
                ROM_CURVE_NUMS256W: V,
                ROM_CURVE_NUMS384E: S,
                ROM_CURVE_NUMS384W: l,
                ROM_CURVE_NUMS512E: y,
                ROM_CURVE_NUMS512W: B
            })
        },
        1610: function(t, r, n) {
            var o, e, i, E, s, _, R, u, f, C, I, h, c, a, p, U, P, V;
            o = function() {
                return {
                    Modulus: [16777197, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 32767],
                    R2modp: [10747904, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    MConst: 19
                }
            }, e = function() {
                return {
                    Modulus: [16777027, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 65535],
                    R2modp: [8978432, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    MConst: 189
                }
            }, i = function() {
                return {
                    Modulus: [8388291, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 65535],
                    R2modp: [2244608, 196, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    MConst: 317
                }
            }, E = function() {
                return {
                    Modulus: [8388039, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 63],
                    R2modp: [0, 362496, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    MConst: 569
                }
            }, s = function() {
                return {
                    Modulus: [7248899, 15946712, 7203068, 11258058, 6401468, 4414265, 15257154, 1053293, 3855759, 1543179, 61949],
                    R2modp: [11332835, 9584998, 11603918, 7142326, 556738, 4056125, 13815655, 10911198, 11350258, 772782, 57240],
                    MConst: 5116245
                }
            }, _ = function() {
                return {
                    Modulus: [2797739, 3852555, 3107036, 5448745, 4453016, 2002769, 5920841, 1629184, 2429356, 5891787, 177432, 5542949, 6046206, 3411381, 2808749, 2837170, 21861],
                    R2modp: [2427460, 6878831, 932980, 7935858, 3483107, 925205, 3499542, 5568036, 5275753, 2565731, 4869296, 3510931, 5989747, 651903, 6202292, 6356269, 20839],
                    MConst: 3421693,
                    Fra: [1170113, 3037798, 24907, 7551903, 1263631, 1643629, 3757110, 2832933, 1738370, 2391924, 3748275, 5937032, 8137745, 422259, 2087471, 7004033, 8876],
                    Frb: [1627626, 814757, 3082129, 6285450, 3189384, 359140, 2163731, 7184859, 690985, 3499863, 4817765, 7994524, 6297068, 2989121, 721278, 4221745, 12984]
                }
            }, R = function() {
                return {
                    Modulus: [2796203, 341, 2796208, 2796117, 85, 524292, 5595072, 1267016, 1884175, 4191416, 2951843, 5809188, 2935367, 4610839, 7297991, 674223, 5625492, 3451572, 1398069, 2796202, 1],
                    R2modp: [6427800, 3889247, 267912, 7305229, 1557049, 1412490, 4790930, 7568881, 141830, 4588131, 2580466, 5543619, 7162578, 3832646, 3826467, 1516465, 7741515, 6749478, 5141566, 1828462, 0],
                    MConst: 8388605,
                    Fra: [76346, 3112759, 15812, 5426402, 1860360, 753428, 4424148, 5428008, 5821535, 3513488, 1950412, 6382978, 8151531, 7016901, 6566940, 4332336, 5111546, 3976132, 1236954, 1515560, 1],
                    Frb: [2719857, 5276190, 2780395, 5758323, 6528332, 8159471, 1170923, 4227616, 4451247, 677927, 1001431, 7814818, 3172443, 5982545, 731050, 4730495, 513945, 7864048, 161114, 1280642, 0]
                }
            }, u = function() {
                return {
                    Modulus: [13840403, 3005358, 8573737, 1218570, 14444027, 10788620, 6221425, 4646386, 16576717, 16777215, 65535],
                    R2modp: [3098625, 16218577, 4095854, 11807290, 13179337, 12741640, 1816341, 13250262, 5515582, 939918, 30954],
                    MConst: 3663333,
                    Fra: [9711878, 207023, 9401462, 1981106, 10580305, 6803257, 9296648, 2955886, 7892789, 7758538, 15713],
                    Frb: [4128525, 2798335, 15949491, 16014679, 3863721, 3985363, 13701993, 1690499, 8683928, 9018677, 49822]
                }
            }, f = function() {
                return {
                    Modulus: [3010355, 5247557, 2020268, 8020771, 2448613, 8139309, 2803931, 4600559, 1620196, 4020605, 4528956, 490026, 3936539, 7870332, 3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607, 8388607, 63],
                    R2modp: [2352733, 5724727, 4267216, 2711475, 6555241, 3628137, 598933, 7570578, 7867757, 1822109, 4291754, 3000059, 8301819, 3305539, 8335303, 992908, 7591731, 2181065, 2804947, 3336952, 3877918, 870050, 48],
                    MConst: 5004293,
                    Fra: [3619506, 3105769, 4706904, 1054070, 1381622, 5258286, 3469153, 5222464, 2931637, 5586186, 6531042, 1061916, 4771630, 3499223, 2473444, 5293353, 4623182, 2969999, 450118, 8160429, 1897915, 6218581, 7],
                    Frb: [7779457, 2141787, 5701972, 6966700, 1066991, 2881023, 7723386, 7766702, 7077166, 6823026, 6386521, 7816717, 7553516, 4371108, 857821, 3476419, 3700343, 5415497, 7938489, 228178, 6490692, 2170026, 56]
                }
            }, C = function() {
                return {
                    Modulus: [19, 0, 1287936, 0, 2162688, 2145, 8388608, 12203085, 1, 6586944, 9507],
                    R2modp: [3091111, 5468231, 16314740, 12837732, 11242524, 3940405, 431433, 3641991, 3925545, 7692666, 8007],
                    MConst: 9713125,
                    Fra: [2780649, 15122543, 12771709, 5062519, 619666, 9781125, 5285958, 11946395, 3046540, 7739681, 6967],
                    Frb: [13996586, 1654672, 5293442, 11714696, 1543021, 6998236, 3102649, 256690, 13730677, 15624478, 2539]
                }
            }, I = function() {
                return {
                    Modulus: [1791411, 2355036, 14794342, 1575230, 4183790, 6738724, 6584931, 11582943, 7350797, 8, 9216],
                    R2modp: [9365053, 7479262, 13371537, 1098379, 872282, 4987131, 9451258, 4162655, 10815460, 7924521, 5511],
                    MConst: 7904901,
                    Fra: [13110947, 537429, 2186201, 15823864, 6779686, 1611880, 9088167, 11526539, 3801444, 536486, 4953],
                    Frb: [5457680, 1817606, 12608141, 2528582, 14181319, 5126843, 14273980, 56403, 3549353, 16240738, 4262]
                }
            }, h = function() {
                return {
                    Modulus: [7230327, 4726047, 2629651, 13968928, 3929635, 9269870, 9477507, 4089354, 15641020, 5757857, 43515],
                    R2modp: [3520537, 11547688, 15511311, 3691684, 4853461, 2367978, 11163180, 1023045, 14528088, 4411645, 21176],
                    MConst: 16615865
                }
            }, c = function() {
                return {
                    Modulus: [4194287, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 262143],
                    R2modp: [73984, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    MConst: 17
                }
            }, a = function() {
                return {
                    Modulus: [8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8257535, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 2047],
                    R2modp: [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 786432, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    MConst: 1
                }
            }, p = function() {
                return {
                    Modulus: [8388605, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 16383],
                    R2modp: [2359296, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    MConst: 3
                }
            }, U = function() {
                return {
                    Modulus: [16777215, 16777215, 16777215, 16777215, 0, 0, 0, 0, 1, 16776960, 65535],
                    R2modp: [196608, 0, 0, 16776960, 16515071, 16777215, 16777214, 16777215, 16646143, 16777215, 4],
                    MConst: 1
                }
            }, P = function() {
                return {
                    Modulus: [8388607, 511, 0, 0, 8388592, 8380415, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 65535],
                    R2modp: [16384, 0, 8388606, 511, 524288, 0, 0, 8372224, 4194303, 0, 512, 131072, 0, 0, 0, 0, 0],
                    MConst: 1
                }
            }, V = function() {
                return {
                    Modulus: [8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 32767],
                    R2modp: [65536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    MConst: 1
                }
            }, void 0 !== t.exports && (t.exports = {
                ROM_FIELD_25519: o,
                ROM_FIELD_256PM: e,
                ROM_FIELD_384PM: i,
                ROM_FIELD_512PM: E,
                ROM_FIELD_ANSSI: s,
                ROM_FIELD_BLS383: _,
                ROM_FIELD_BLS461: R,
                ROM_FIELD_FP256BN: u,
                ROM_FIELD_FP512BN: f,
                ROM_FIELD_BN254: C,
                ROM_FIELD_BN254CX: I,
                ROM_FIELD_BRAINPOOL: h,
                ROM_FIELD_C41417: c,
                ROM_FIELD_GOLDILOCKS: a,
                ROM_FIELD_HIFIVE: p,
                ROM_FIELD_NIST256: U,
                ROM_FIELD_NIST384: P,
                ROM_FIELD_NIST521: V
            })
        },
        1611: function(t, r, n) {
            var o, e, i;
            o = function(t) {
                "use strict";
                var r = {
                    RFS: t.BIG.MODBYTES * t.FF.FFLEN,
                    SHA256: 32,
                    SHA384: 48,
                    SHA512: 64,
                    HASH_TYPE: 32,
                    SHA256ID: [48, 49, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 1, 5, 0, 4, 32],
                    SHA384ID: [48, 65, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 2, 5, 0, 4, 48],
                    SHA512ID: [48, 81, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 3, 5, 0, 4, 64],
                    bytestohex: function(t) {
                        var r, n, o = "",
                            e = t.length;
                        for (n = 0; n < e; n++) o += ((r = t[n]) >>> 4 & 15).toString(16), o += (15 & r).toString(16);
                        return o
                    },
                    bytestostring: function(t) {
                        var r, n = "";
                        for (r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
                        return n
                    },
                    stringtobytes: function(t) {
                        var r, n = [];
                        for (r = 0; r < t.length; r++) n.push(t.charCodeAt(r));
                        return n
                    },
                    hashit: function(r, n, o) {
                        var e, i = [];
                        return r == this.SHA256 ? (e = new t.HASH256, null != n && e.process_array(n), o >= 0 && e.process_num(o), i = e.hash()) : r == this.SHA384 ? (e = new t.HASH384, null != n && e.process_array(n), o >= 0 && e.process_num(o), i = e.hash()) : r == this.SHA512 && (e = new t.HASH512, null != n && e.process_array(n), o >= 0 && e.process_num(o), i = e.hash()), i
                    },
                    KEY_PAIR: function(r, n, o, e) {
                        for (var i = e.n.length >> 1, E = new t.FF(i), s = new t.FF(i), _ = new t.FF(i);;) {
                            for (o.p.random(r); 3 != o.p.lastbits(2);) o.p.inc(1);
                            for (; !t.FF.prime(o.p, r);) o.p.inc(4);
                            if (s.copy(o.p), s.dec(1), !s.cfactor(n)) break
                        }
                        for (;;) {
                            for (o.q.random(r); 3 != o.q.lastbits(2);) o.q.inc(1);
                            for (; !t.FF.prime(o.q, r);) o.q.inc(4);
                            if (_.copy(o.q), _.dec(1), !_.cfactor(n)) break
                        }
                        e.n = t.FF.mul(o.p, o.q), e.e = n, E.copy(s), E.shr(), o.dp.set(n), o.dp.invmodp(E), 0 === o.dp.parity() && o.dp.add(E), o.dp.norm(), E.copy(_), E.shr(), o.dq.set(n), o.dq.invmodp(E), 0 === o.dq.parity() && o.dq.add(E), o.dq.norm(), o.c.copy(o.p), o.c.invmodp(o.q)
                    },
                    MGF1: function(t, r, n, o) {
                        var e, i, E, s = t,
                            _ = [],
                            R = 0;
                        for (E = 0; E < o.length; E++) o[E] = 0;
                        for (i = Math.floor(n / s), n % s != 0 && i++, e = 0; e < i; e++)
                            if (_ = this.hashit(t, r, e), R + s > n)
                                for (E = 0; E < n % s; E++) o[R++] = _[E];
                            else
                                for (E = 0; E < s; E++) o[R++] = _[E]
                    },
                    PKCS15: function(r, n, o) {
                        var e, i, E, s = t.FF.FF_BITS / 8,
                            _ = r;
                        if (s < 19 + _ + 10) return !1;
                        for (e = this.hashit(r, n, -1), i = 0; i < o.length; i++) o[i] = 0;
                        for (i = 0, o[i++] = 0, o[i++] = 1, E = 0; E < s - 19 - _ - 3; E++) o[i++] = 255;
                        if (o[i++] = 0, _ == this.SHA256)
                            for (E = 0; E < 19; E++) o[i++] = this.SHA256ID[E];
                        else if (_ == this.SHA384)
                            for (E = 0; E < 19; E++) o[i++] = this.SHA384ID[E];
                        else if (_ == this.SHA512)
                            for (E = 0; E < 19; E++) o[i++] = this.SHA512ID[E];
                        for (E = 0; E < _; E++) o[i++] = e[E];
                        return !0
                    },
                    OAEP_ENCODE: function(t, n, o, e) {
                        var i, E, s, _, R, u = r.RFS - 1,
                            f = n.length,
                            C = [],
                            I = [],
                            h = [];
                        if (E = i = t, f > u - i - E - 1) return null;
                        for (R = this.hashit(t, e, -1), _ = 0; _ < i; _++) h[_] = R[_];
                        for (s = u - f - i - E - 1, _ = 0; _ < s; _++) h[i + _] = 0;
                        for (h[i + s] = 1, _ = 0; _ < f; _++) h[i + s + 1 + _] = n[_];
                        for (_ = 0; _ < E; _++) C[_] = o.getByte();
                        for (this.MGF1(t, C, u - E, I), _ = 0; _ < u - E; _++) I[_] ^= h[_];
                        for (this.MGF1(t, I, E, h), _ = 0; _ < E; _++) h[_] ^= C[_];
                        for (_ = 0; _ < u - E; _++) h[_ + E] = I[_];
                        for (1, _ = r.RFS - 1; _ >= 1; _--) h[_] = h[_ - 1];
                        for (_ = 0; _ >= 0; _--) h[_] = 0;
                        return h
                    },
                    OAEP_DECODE: function(t, n, o) {
                        var e, i, E, s, _, R, u, f, C, I, h = r.RFS - 1,
                            c = [],
                            a = [],
                            p = [];
                        if (h < (E = i = t) + i + 1) return null;
                        for (u = 0; u < h - E; u++) p[u] = 0;
                        if (o.length < r.RFS) {
                            for (R = r.RFS - o.length, u = r.RFS - 1; u >= R; u--) o[u] = o[u - R];
                            for (u = R - 1; u >= 0; u--) o[u] = 0
                        }
                        for (C = this.hashit(t, n, -1), u = 0; u < i; u++) a[u] = C[u];
                        for (s = o[0], u = E; u < h; u++) p[u - E] = o[u + 1];
                        for (this.MGF1(t, p, E, c), u = 0; u < E; u++) c[u] ^= o[u + 1];
                        for (this.MGF1(t, c, h - E, o), u = 0; u < h - E; u++) p[u] ^= o[u];
                        for (e = !0, u = 0; u < i; u++) a[u] != p[u] && (e = !1);
                        for (u = 0; u < h - E - i; u++) p[u] = p[u + i];
                        for (u = 0; u < i; u++) c[u] = a[u] = 0;
                        for (f = 0;; f++) {
                            if (f >= h - E - i) return null;
                            if (0 !== p[f]) break
                        }
                        if (_ = p[f], !e || 0 !== s || 1 != _) {
                            for (u = 0; u < h - E; u++) p[u] = 0;
                            return null
                        }
                        for (I = [], u = 0; u < h - E - i - f - 1; u++) I[u] = p[u + f + 1];
                        for (u = 0; u < h - E; u++) p[u] = 0;
                        return I
                    },
                    PRIVATE_KEY_KILL: function(t) {
                        t.p.zero(), t.q.zero(), t.dp.zero(), t.dq.zero(), t.c.zero()
                    },
                    ENCRYPT: function(r, n, o) {
                        var e = r.n.getlen(),
                            i = new t.FF(e);
                        t.FF.fromBytes(i, n), i.power(r.e, r.n), i.toBytes(o)
                    },
                    DECRYPT: function(r, n, o) {
                        var e, i, E, s = r.p.getlen(),
                            _ = new t.FF(2 * s);
                        t.FF.fromBytes(_, n), e = _.dmod(r.p), i = _.dmod(r.q), e.skpow(r.dp, r.p), i.skpow(r.dq, r.q), _.zero(), _.dscopy(e), e.mod(r.q), t.FF.comp(e, i) > 0 && i.add(r.q), i.sub(e), i.norm(), i = (E = t.FF.mul(r.c, i)).dmod(r.q), E = t.FF.mul(i, r.p), _.add(E), _.norm(), _.toBytes(o)
                    }
                };
                return r
            }, e = function(t) {
                "use strict";
                return function(r) {
                    this.p = new t.FF(r), this.q = new t.FF(r), this.dp = new t.FF(r), this.dq = new t.FF(r), this.c = new t.FF(r)
                }
            }, i = function(t) {
                "use strict";
                return function(r) {
                    this.e = 0, this.n = new t.FF(r)
                }
            }, void 0 !== t.exports && (t.exports = {
                RSA: o,
                rsa_public_key: i,
                rsa_private_key: e
            })
        },
        1612: function(t, r, n) {
            void 0 !== t.exports && (t.exports.SHA3 = function(t) {
                "use strict";
                var r = function(t) {
                    this.length = 0, this.rate = 0, this.len = 0, this.S = [], this.init(t)
                };
                return r.prototype = {
                    transform: function() {
                        var n, o, e, i = [],
                            E = [],
                            s = [];
                        for (e = 0; e < r.ROUNDS; e++) {
                            for (i[0] = new t.UInt64(this.S[0][0].top ^ this.S[0][1].top ^ this.S[0][2].top ^ this.S[0][3].top ^ this.S[0][4].top, this.S[0][0].bot ^ this.S[0][1].bot ^ this.S[0][2].bot ^ this.S[0][3].bot ^ this.S[0][4].bot), i[1] = new t.UInt64(this.S[1][0].top ^ this.S[1][1].top ^ this.S[1][2].top ^ this.S[1][3].top ^ this.S[1][4].top, this.S[1][0].bot ^ this.S[1][1].bot ^ this.S[1][2].bot ^ this.S[1][3].bot ^ this.S[1][4].bot), i[2] = new t.UInt64(this.S[2][0].top ^ this.S[2][1].top ^ this.S[2][2].top ^ this.S[2][3].top ^ this.S[2][4].top, this.S[2][0].bot ^ this.S[2][1].bot ^ this.S[2][2].bot ^ this.S[2][3].bot ^ this.S[2][4].bot), i[3] = new t.UInt64(this.S[3][0].top ^ this.S[3][1].top ^ this.S[3][2].top ^ this.S[3][3].top ^ this.S[3][4].top, this.S[3][0].bot ^ this.S[3][1].bot ^ this.S[3][2].bot ^ this.S[3][3].bot ^ this.S[3][4].bot), i[4] = new t.UInt64(this.S[4][0].top ^ this.S[4][1].top ^ this.S[4][2].top ^ this.S[4][3].top ^ this.S[4][4].top, this.S[4][0].bot ^ this.S[4][1].bot ^ this.S[4][2].bot ^ this.S[4][3].bot ^ this.S[4][4].bot), E[0] = r.xor(i[4], r.rotl(i[1], 1)), E[1] = r.xor(i[0], r.rotl(i[2], 1)), E[2] = r.xor(i[1], r.rotl(i[3], 1)), E[3] = r.xor(i[2], r.rotl(i[4], 1)), E[4] = r.xor(i[3], r.rotl(i[0], 1)), n = 0; n < 5; n++)
                                for (s[n] = [], o = 0; o < 5; o++) s[n][o] = new t.UInt64(0, 0), this.S[n][o] = r.xor(this.S[n][o], E[n]);
                            for (s[0][0] = this.S[0][0].copy(), s[1][3] = r.rotl(this.S[0][1], 36), s[2][1] = r.rotl(this.S[0][2], 3), s[3][4] = r.rotl(this.S[0][3], 41), s[4][2] = r.rotl(this.S[0][4], 18), s[0][2] = r.rotl(this.S[1][0], 1), s[1][0] = r.rotl(this.S[1][1], 44), s[2][3] = r.rotl(this.S[1][2], 10), s[3][1] = r.rotl(this.S[1][3], 45), s[4][4] = r.rotl(this.S[1][4], 2), s[0][4] = r.rotl(this.S[2][0], 62), s[1][2] = r.rotl(this.S[2][1], 6), s[2][0] = r.rotl(this.S[2][2], 43), s[3][3] = r.rotl(this.S[2][3], 15), s[4][1] = r.rotl(this.S[2][4], 61), s[0][1] = r.rotl(this.S[3][0], 28), s[1][4] = r.rotl(this.S[3][1], 55), s[2][2] = r.rotl(this.S[3][2], 25), s[3][0] = r.rotl(this.S[3][3], 21), s[4][3] = r.rotl(this.S[3][4], 56), s[0][3] = r.rotl(this.S[4][0], 27), s[1][1] = r.rotl(this.S[4][1], 20), s[2][4] = r.rotl(this.S[4][2], 39), s[3][2] = r.rotl(this.S[4][3], 8), s[4][0] = r.rotl(this.S[4][4], 14), n = 0; n < 5; n++)
                                for (o = 0; o < 5; o++) this.S[n][o] = r.xor(s[n][o], r.and(r.not(s[(n + 1) % 5][o]), s[(n + 2) % 5][o]));
                            this.S[0][0] = r.xor(this.S[0][0], r.RC[e])
                        }
                    },
                    init: function(r) {
                        var n, o;
                        for (n = 0; n < 5; n++)
                            for (this.S[n] = [], o = 0; o < 5; o++) this.S[n][o] = new t.UInt64(0, 0);
                        this.length = 0, this.len = r, this.rate = 200 - 2 * r
                    },
                    process: function(n) {
                        var o, e, i, E, s, _;
                        for (E = (s = this.length % this.rate) % 8, o = (s >>= 3) % 5, e = Math.floor(s / 5), _ = new t.UInt64(0, n), i = 0; i < E; i++) _.shlb();
                        this.S[o][e] = r.xor(this.S[o][e], _), this.length++, this.length % this.rate == 0 && this.transform()
                    },
                    squeeze: function(t, n) {
                        var o, e, i, E, s, _ = 0;
                        for (o = !1;;) {
                            for (i = 0; i < 5; i++) {
                                for (e = 0; e < 5; e++) {
                                    for (s = this.S[e][i].copy(), E = 0; E < 8; E++) {
                                        if (t[_++] = 255 & s.bot, _ >= n || _ % this.rate == 0) {
                                            o = !0;
                                            break
                                        }
                                        s = r.rotl(s, 56)
                                    }
                                    if (o) break
                                }
                                if (o) break
                            }
                            if (_ >= n) break;
                            o = !1, this.transform()
                        }
                    },
                    hash: function(t) {
                        if (1 == this.rate - this.length % this.rate) this.process(134);
                        else {
                            for (this.process(6); this.length % this.rate != this.rate - 1;) this.process(0);
                            this.process(128)
                        }
                        this.squeeze(t, this.len)
                    },
                    shake: function(t, r) {
                        if (1 == this.rate - this.length % this.rate) this.process(159);
                        else {
                            for (this.process(31); this.length % this.rate != this.rate - 1;) this.process(0);
                            this.process(128)
                        }
                        this.squeeze(t, r)
                    }
                }, r.rotl = function(r, n) {
                    return 0 == n ? r : n < 32 ? new t.UInt64(r.top << n | r.bot >>> 32 - n, r.bot << n | r.top >>> 32 - n) : new t.UInt64(r.bot << n - 32 | r.top >>> 64 - n, r.top << n - 32 | r.bot >>> 64 - n)
                }, r.xor = function(r, n) {
                    return new t.UInt64(r.top ^ n.top, r.bot ^ n.bot)
                }, r.and = function(r, n) {
                    return new t.UInt64(r.top & n.top, r.bot & n.bot)
                }, r.not = function(r) {
                    return new t.UInt64(~r.top, ~r.bot)
                }, r.ROUNDS = 24, r.HASH224 = 28, r.HASH256 = 32, r.HASH384 = 48, r.HASH512 = 64, r.SHAKE128 = 16, r.SHAKE256 = 32, r.RC = [new t.UInt64(0, 1), new t.UInt64(0, 32898), new t.UInt64(2147483648, 32906), new t.UInt64(2147483648, 2147516416), new t.UInt64(0, 32907), new t.UInt64(0, 2147483649), new t.UInt64(2147483648, 2147516545), new t.UInt64(2147483648, 32777), new t.UInt64(0, 138), new t.UInt64(0, 136), new t.UInt64(0, 2147516425), new t.UInt64(0, 2147483658), new t.UInt64(0, 2147516555), new t.UInt64(2147483648, 139), new t.UInt64(2147483648, 32905), new t.UInt64(2147483648, 32771), new t.UInt64(2147483648, 32770), new t.UInt64(2147483648, 128), new t.UInt64(0, 32778), new t.UInt64(2147483648, 2147483658), new t.UInt64(2147483648, 2147516545), new t.UInt64(2147483648, 32896), new t.UInt64(0, 2147483649), new t.UInt64(2147483648, 2147516424)], r
            })
        },
        1613: function(t, r, n) {
            void 0 !== t.exports && (t.exports.UInt64 = function() {
                "use strict";
                var t = function(t, r) {
                    this.top = t, this.bot = r
                };
                return t.prototype = {
                    add: function(t) {
                        var r = (this.bot >>> 0) + (t.bot >>> 0),
                            n = r >>> 0,
                            o = (this.top >>> 0) + (t.top >>> 0);
                        return this.bot = n, this.top = n != r ? o + 1 >>> 0 : o, this
                    },
                    copy: function() {
                        return new t(this.top, this.bot)
                    },
                    shlb: function() {
                        var t = this.bot >>> 24;
                        return this.top = t + (this.top << 8), this.bot <<= 8, this
                    }
                }, t
            })
        },
        1753: function(t, r, n) {
            var o = n(35),
                e = n(932);

            function i(t) {
                this.rand = t || new e.Rand
            }
            t.exports = i, i.create = function(t) {
                return new i(t)
            }, i.prototype._randbelow = function(t) {
                var r = t.bitLength(),
                    n = Math.ceil(r / 8);
                do {
                    var e = new o(this.rand.generate(n))
                } while (e.cmp(t) >= 0);
                return e
            }, i.prototype._randrange = function(t, r) {
                var n = r.sub(t);
                return t.add(this._randbelow(n))
            }, i.prototype.test = function(t, r, n) {
                var e = t.bitLength(),
                    i = o.mont(t),
                    E = new o(1).toRed(i);
                r || (r = Math.max(1, e / 48 | 0));
                for (var s = t.subn(1), _ = 0; !s.testn(_); _++);
                for (var R = t.shrn(_), u = s.toRed(i); r > 0; r--) {
                    var f = this._randrange(new o(2), s);
                    n && n(f);
                    var C = f.toRed(i).redPow(R);
                    if (0 !== C.cmp(E) && 0 !== C.cmp(u)) {
                        for (var I = 1; I < _; I++) {
                            if (0 === (C = C.redSqr()).cmp(E)) return !1;
                            if (0 === C.cmp(u)) break
                        }
                        if (I === _) return !1
                    }
                }
                return !0
            }, i.prototype.getDivisor = function(t, r) {
                var n = t.bitLength(),
                    e = o.mont(t),
                    i = new o(1).toRed(e);
                r || (r = Math.max(1, n / 48 | 0));
                for (var E = t.subn(1), s = 0; !E.testn(s); s++);
                for (var _ = t.shrn(s), R = E.toRed(e); r > 0; r--) {
                    var u = this._randrange(new o(2), E),
                        f = t.gcd(u);
                    if (0 !== f.cmpn(1)) return f;
                    var C = u.toRed(e).redPow(_);
                    if (0 !== C.cmp(i) && 0 !== C.cmp(R)) {
                        for (var I = 1; I < s; I++) {
                            if (0 === (C = C.redSqr()).cmp(i)) return C.fromRed().subn(1).gcd(t);
                            if (0 === C.cmp(R)) break
                        }
                        if (I === s) return (C = C.redSqr()).fromRed().subn(1).gcd(t)
                    }
                }
                return !1
            }
        }
    }
]);