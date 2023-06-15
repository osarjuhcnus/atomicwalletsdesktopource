(window.webpackJsonp = window.webpackJsonp || []).push([
    [101], {
        1391: function(t, n) {
            t.exports = function(t, n) {
                if (!Array.isArray(t)) throw TypeError("Expected values Array");
                if ("function" != typeof n) throw TypeError("Expected digest Function");
                for (var i = t.length, s = t.concat(); i > 1;) {
                    for (var o = 0, r = 0; r < i; r += 2, ++o) {
                        var h = s[r],
                            e = r + 1 === i ? h : s[r + 1],
                            c = Buffer.concat([h, e]);
                        s[o] = n(c)
                    }
                    i = o
                }
                return s[0]
            }
        },
        1590: function(t, n, i) {
            void 0 !== t.exports && (t.exports.AES = function() {
                "use strict";
                var t = function() {
                    this.Nk = 0, this.Nr = 0, this.mode = 0, this.fkey = [], this.rkey = [], this.f = []
                };
                return t.ECB = 0, t.CBC = 1, t.CFB1 = 2, t.CFB2 = 3, t.CFB4 = 5, t.OFB1 = 14, t.OFB2 = 15, t.OFB4 = 17, t.OFB8 = 21, t.OFB16 = 29, t.CTR1 = 30, t.CTR2 = 31, t.CTR4 = 33, t.CTR8 = 37, t.CTR16 = 45, t.prototype = {
                    reset: function(n, i) {
                        var s;
                        for (this.mode = n, s = 0; s < 16; s++) this.f[s] = 0;
                        if (this.mode != t.ECB && null !== i)
                            for (s = 0; s < 16; s++) this.f[s] = i[s]
                    },
                    getreg: function() {
                        var t, n = [];
                        for (t = 0; t < 16; t++) n[t] = this.f[t];
                        return n
                    },
                    increment: function() {
                        var t;
                        for (t = 0; t < 16 && (this.f[t]++, 0 == (255 & this.f[t])); t++);
                    },
                    init: function(n, i, s, o) {
                        var r, h, e, c, u, a = [],
                            f = [];
                        if (4 != (i /= 4) && 6 != i && 8 != i) return !1;
                        for (u = 6 + i, this.Nk = i, this.Nr = u, this.reset(n, o), c = 4 * (u + 1), r = h = 0; r < i; r++, h += 4) {
                            for (e = 0; e < 4; e++) f[e] = s[h + e];
                            a[r] = t.pack(f)
                        }
                        for (r = 0; r < i; r++) this.fkey[r] = a[r];
                        for (h = i, e = 0; h < c; h += i, e++)
                            for (this.fkey[h] = this.fkey[h - i] ^ t.SubByte(t.ROTL24(this.fkey[h - 1])) ^ 255 & t.rco[e], r = 1; r < i && r + h < c; r++) this.fkey[r + h] = this.fkey[r + h - i] ^ this.fkey[r + h - 1];
                        for (h = 0; h < 4; h++) this.rkey[h + c - 4] = this.fkey[h];
                        for (r = 4; r < c - 4; r += 4)
                            for (e = c - 4 - r, h = 0; h < 4; h++) this.rkey[e + h] = t.InvMixCol(this.fkey[r + h]);
                        for (h = c - 4; h < c; h++) this.rkey[h - c + 4] = this.fkey[h]
                    },
                    ecb_encrypt: function(n) {
                        var i, s, o, r, h = [],
                            e = [],
                            c = [];
                        for (s = o = 0; s < 4; s++, o += 4) {
                            for (r = 0; r < 4; r++) h[r] = n[o + r];
                            e[s] = t.pack(h), e[s] ^= this.fkey[s]
                        }
                        for (r = 4, s = 1; s < this.Nr; s++)
                            for (c[0] = this.fkey[r] ^ t.ftable[255 & e[0]] ^ t.ROTL8(t.ftable[e[1] >>> 8 & 255]) ^ t.ROTL16(t.ftable[e[2] >>> 16 & 255]) ^ t.ROTL24(t.ftable[e[3] >>> 24 & 255]), c[1] = this.fkey[r + 1] ^ t.ftable[255 & e[1]] ^ t.ROTL8(t.ftable[e[2] >>> 8 & 255]) ^ t.ROTL16(t.ftable[e[3] >>> 16 & 255]) ^ t.ROTL24(t.ftable[e[0] >>> 24 & 255]), c[2] = this.fkey[r + 2] ^ t.ftable[255 & e[2]] ^ t.ROTL8(t.ftable[e[3] >>> 8 & 255]) ^ t.ROTL16(t.ftable[e[0] >>> 16 & 255]) ^ t.ROTL24(t.ftable[e[1] >>> 24 & 255]), c[3] = this.fkey[r + 3] ^ t.ftable[255 & e[3]] ^ t.ROTL8(t.ftable[e[0] >>> 8 & 255]) ^ t.ROTL16(t.ftable[e[1] >>> 16 & 255]) ^ t.ROTL24(t.ftable[e[2] >>> 24 & 255]), r += 4, o = 0; o < 4; o++) i = e[o], e[o] = c[o], c[o] = i;
                        for (c[0] = this.fkey[r] ^ 255 & t.fbsub[255 & e[0]] ^ t.ROTL8(255 & t.fbsub[e[1] >>> 8 & 255]) ^ t.ROTL16(255 & t.fbsub[e[2] >>> 16 & 255]) ^ t.ROTL24(255 & t.fbsub[e[3] >>> 24 & 255]), c[1] = this.fkey[r + 1] ^ 255 & t.fbsub[255 & e[1]] ^ t.ROTL8(255 & t.fbsub[e[2] >>> 8 & 255]) ^ t.ROTL16(255 & t.fbsub[e[3] >>> 16 & 255]) ^ t.ROTL24(255 & t.fbsub[e[0] >>> 24 & 255]), c[2] = this.fkey[r + 2] ^ 255 & t.fbsub[255 & e[2]] ^ t.ROTL8(255 & t.fbsub[e[3] >>> 8 & 255]) ^ t.ROTL16(255 & t.fbsub[e[0] >>> 16 & 255]) ^ t.ROTL24(255 & t.fbsub[e[1] >>> 24 & 255]), c[3] = this.fkey[r + 3] ^ 255 & t.fbsub[255 & e[3]] ^ t.ROTL8(255 & t.fbsub[e[0] >>> 8 & 255]) ^ t.ROTL16(255 & t.fbsub[e[1] >>> 16 & 255]) ^ t.ROTL24(255 & t.fbsub[e[2] >>> 24 & 255]), s = o = 0; s < 4; s++, o += 4)
                            for (h = t.unpack(c[s]), r = 0; r < 4; r++) n[o + r] = h[r]
                    },
                    ecb_decrypt: function(n) {
                        var i, s, o, r, h = [],
                            e = [],
                            c = [];
                        for (s = o = 0; s < 4; s++, o += 4) {
                            for (r = 0; r < 4; r++) h[r] = n[o + r];
                            e[s] = t.pack(h), e[s] ^= this.rkey[s]
                        }
                        for (r = 4, s = 1; s < this.Nr; s++)
                            for (c[0] = this.rkey[r] ^ t.rtable[255 & e[0]] ^ t.ROTL8(t.rtable[e[3] >>> 8 & 255]) ^ t.ROTL16(t.rtable[e[2] >>> 16 & 255]) ^ t.ROTL24(t.rtable[e[1] >>> 24 & 255]), c[1] = this.rkey[r + 1] ^ t.rtable[255 & e[1]] ^ t.ROTL8(t.rtable[e[0] >>> 8 & 255]) ^ t.ROTL16(t.rtable[e[3] >>> 16 & 255]) ^ t.ROTL24(t.rtable[e[2] >>> 24 & 255]), c[2] = this.rkey[r + 2] ^ t.rtable[255 & e[2]] ^ t.ROTL8(t.rtable[e[1] >>> 8 & 255]) ^ t.ROTL16(t.rtable[e[0] >>> 16 & 255]) ^ t.ROTL24(t.rtable[e[3] >>> 24 & 255]), c[3] = this.rkey[r + 3] ^ t.rtable[255 & e[3]] ^ t.ROTL8(t.rtable[e[2] >>> 8 & 255]) ^ t.ROTL16(t.rtable[e[1] >>> 16 & 255]) ^ t.ROTL24(t.rtable[e[0] >>> 24 & 255]), r += 4, o = 0; o < 4; o++) i = e[o], e[o] = c[o], c[o] = i;
                        for (c[0] = this.rkey[r] ^ 255 & t.rbsub[255 & e[0]] ^ t.ROTL8(255 & t.rbsub[e[3] >>> 8 & 255]) ^ t.ROTL16(255 & t.rbsub[e[2] >>> 16 & 255]) ^ t.ROTL24(255 & t.rbsub[e[1] >>> 24 & 255]), c[1] = this.rkey[r + 1] ^ 255 & t.rbsub[255 & e[1]] ^ t.ROTL8(255 & t.rbsub[e[0] >>> 8 & 255]) ^ t.ROTL16(255 & t.rbsub[e[3] >>> 16 & 255]) ^ t.ROTL24(255 & t.rbsub[e[2] >>> 24 & 255]), c[2] = this.rkey[r + 2] ^ 255 & t.rbsub[255 & e[2]] ^ t.ROTL8(255 & t.rbsub[e[1] >>> 8 & 255]) ^ t.ROTL16(255 & t.rbsub[e[0] >>> 16 & 255]) ^ t.ROTL24(255 & t.rbsub[e[3] >>> 24 & 255]), c[3] = this.rkey[r + 3] ^ 255 & t.rbsub[255 & e[3]] ^ t.ROTL8(255 & t.rbsub[e[2] >>> 8 & 255]) ^ t.ROTL16(255 & t.rbsub[e[1] >>> 16 & 255]) ^ t.ROTL24(255 & t.rbsub[e[0] >>> 24 & 255]), s = o = 0; s < 4; s++, o += 4)
                            for (h = t.unpack(c[s]), r = 0; r < 4; r++) n[o + r] = h[r]
                    },
                    encrypt: function(n) {
                        var i, s, o, r = [];
                        switch (s = 0, this.mode) {
                            case t.ECB:
                                return this.ecb_encrypt(n), 0;
                            case t.CBC:
                                for (o = 0; o < 16; o++) n[o] ^= this.f[o];
                                for (this.ecb_encrypt(n), o = 0; o < 16; o++) this.f[o] = n[o];
                                return 0;
                            case t.CFB1:
                            case t.CFB2:
                            case t.CFB4:
                                for (i = this.mode - t.CFB1 + 1, o = 0; o < i; o++) s = s << 8 | this.f[o];
                                for (o = 0; o < 16; o++) r[o] = this.f[o];
                                for (o = i; o < 16; o++) this.f[o - i] = this.f[o];
                                for (this.ecb_encrypt(r), o = 0; o < i; o++) n[o] ^= r[o], this.f[16 - i + o] = n[o];
                                return s;
                            case t.OFB1:
                            case t.OFB2:
                            case t.OFB4:
                            case t.OFB8:
                            case t.OFB16:
                                for (i = this.mode - t.OFB1 + 1, this.ecb_encrypt(this.f), o = 0; o < i; o++) n[o] ^= this.f[o];
                                return 0;
                            case t.CTR1:
                            case t.CTR2:
                            case t.CTR4:
                            case t.CTR8:
                            case t.CTR16:
                                for (i = this.mode - t.CTR1 + 1, o = 0; o < 16; o++) r[o] = this.f[o];
                                for (this.ecb_encrypt(r), o = 0; o < i; o++) n[o] ^= r[o];
                                return this.increment(), 0;
                            default:
                                return 0
                        }
                    },
                    decrypt: function(n) {
                        var i, s, o, r = [];
                        switch (s = 0, this.mode) {
                            case t.ECB:
                                return this.ecb_decrypt(n), 0;
                            case t.CBC:
                                for (o = 0; o < 16; o++) r[o] = this.f[o], this.f[o] = n[o];
                                for (this.ecb_decrypt(n), o = 0; o < 16; o++) n[o] ^= r[o], r[o] = 0;
                                return 0;
                            case t.CFB1:
                            case t.CFB2:
                            case t.CFB4:
                                for (i = this.mode - t.CFB1 + 1, o = 0; o < i; o++) s = s << 8 | this.f[o];
                                for (o = 0; o < 16; o++) r[o] = this.f[o];
                                for (o = i; o < 16; o++) this.f[o - i] = this.f[o];
                                for (this.ecb_encrypt(r), o = 0; o < i; o++) this.f[16 - i + o] = n[o], n[o] ^= r[o];
                                return s;
                            case t.OFB1:
                            case t.OFB2:
                            case t.OFB4:
                            case t.OFB8:
                            case t.OFB16:
                                for (i = this.mode - t.OFB1 + 1, this.ecb_encrypt(this.f), o = 0; o < i; o++) n[o] ^= this.f[o];
                                return 0;
                            case t.CTR1:
                            case t.CTR2:
                            case t.CTR4:
                            case t.CTR8:
                            case t.CTR16:
                                for (i = this.mode - t.CTR1 + 1, o = 0; o < 16; o++) r[o] = this.f[o];
                                for (this.ecb_encrypt(r), o = 0; o < i; o++) n[o] ^= r[o];
                                return this.increment(), 0;
                            default:
                                return 0
                        }
                    },
                    end: function() {
                        var t;
                        for (t = 0; t < 4 * (this.Nr + 1); t++) this.fkey[t] = this.rkey[t] = 0;
                        for (t = 0; t < 16; t++) this.f[t] = 0
                    }
                }, t.ROTL8 = function(t) {
                    return t << 8 | t >>> 24
                }, t.ROTL16 = function(t) {
                    return t << 16 | t >>> 16
                }, t.ROTL24 = function(t) {
                    return t << 24 | t >>> 8
                }, t.pack = function(t) {
                    return (255 & t[3]) << 24 | (255 & t[2]) << 16 | (255 & t[1]) << 8 | 255 & t[0]
                }, t.unpack = function(t) {
                    var n = [];
                    return n[0] = 255 & t, n[1] = t >>> 8 & 255, n[2] = t >>> 16 & 255, n[3] = t >>> 24 & 255, n
                }, t.bmul = function(n, i) {
                    var s = 255 & i,
                        o = 255 & t.ltab[255 & n],
                        r = 255 & t.ltab[s];
                    return 0 !== n && 0 !== i ? t.ptab[(o + r) % 255] : 0
                }, t.SubByte = function(n) {
                    var i = t.unpack(n);
                    return i[0] = t.fbsub[255 & i[0]], i[1] = t.fbsub[255 & i[1]], i[2] = t.fbsub[255 & i[2]], i[3] = t.fbsub[255 & i[3]], t.pack(i)
                }, t.product = function(n, i) {
                    var s = t.unpack(n),
                        o = t.unpack(i);
                    return 255 & (t.bmul(s[0], o[0]) ^ t.bmul(s[1], o[1]) ^ t.bmul(s[2], o[2]) ^ t.bmul(s[3], o[3]))
                }, t.InvMixCol = function(n) {
                    var i, s = [];
                    return i = t.pack(t.InCo), s[3] = t.product(i, n), i = t.ROTL24(i), s[2] = t.product(i, n), i = t.ROTL24(i), s[1] = t.product(i, n), i = t.ROTL24(i), s[0] = t.product(i, n), t.pack(s)
                }, t.InCo = [11, 13, 9, 14], t.rco = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47], t.ptab = [1, 3, 5, 15, 17, 51, 85, 255, 26, 46, 114, 150, 161, 248, 19, 53, 95, 225, 56, 72, 216, 115, 149, 164, 247, 2, 6, 10, 30, 34, 102, 170, 229, 52, 92, 228, 55, 89, 235, 38, 106, 190, 217, 112, 144, 171, 230, 49, 83, 245, 4, 12, 20, 60, 68, 204, 79, 209, 104, 184, 211, 110, 178, 205, 76, 212, 103, 169, 224, 59, 77, 215, 98, 166, 241, 8, 24, 40, 120, 136, 131, 158, 185, 208, 107, 189, 220, 127, 129, 152, 179, 206, 73, 219, 118, 154, 181, 196, 87, 249, 16, 48, 80, 240, 11, 29, 39, 105, 187, 214, 97, 163, 254, 25, 43, 125, 135, 146, 173, 236, 47, 113, 147, 174, 233, 32, 96, 160, 251, 22, 58, 78, 210, 109, 183, 194, 93, 231, 50, 86, 250, 21, 63, 65, 195, 94, 226, 61, 71, 201, 64, 192, 91, 237, 44, 116, 156, 191, 218, 117, 159, 186, 213, 100, 172, 239, 42, 126, 130, 157, 188, 223, 122, 142, 137, 128, 155, 182, 193, 88, 232, 35, 101, 175, 234, 37, 111, 177, 200, 67, 197, 84, 252, 31, 33, 99, 165, 244, 7, 9, 27, 45, 119, 153, 176, 203, 70, 202, 69, 207, 74, 222, 121, 139, 134, 145, 168, 227, 62, 66, 198, 81, 243, 14, 18, 54, 90, 238, 41, 123, 141, 140, 143, 138, 133, 148, 167, 242, 13, 23, 57, 75, 221, 124, 132, 151, 162, 253, 28, 36, 108, 180, 199, 82, 246, 1], t.ltab = [0, 255, 25, 1, 50, 2, 26, 198, 75, 199, 27, 104, 51, 238, 223, 3, 100, 4, 224, 14, 52, 141, 129, 239, 76, 113, 8, 200, 248, 105, 28, 193, 125, 194, 29, 181, 249, 185, 39, 106, 77, 228, 166, 114, 154, 201, 9, 120, 101, 47, 138, 5, 33, 15, 225, 36, 18, 240, 130, 69, 53, 147, 218, 142, 150, 143, 219, 189, 54, 208, 206, 148, 19, 92, 210, 241, 64, 70, 131, 56, 102, 221, 253, 48, 191, 6, 139, 98, 179, 37, 226, 152, 34, 136, 145, 16, 126, 110, 72, 195, 163, 182, 30, 66, 58, 107, 40, 84, 250, 133, 61, 186, 43, 121, 10, 21, 155, 159, 94, 202, 78, 212, 172, 229, 243, 115, 167, 87, 175, 88, 168, 80, 244, 234, 214, 116, 79, 174, 233, 213, 231, 230, 173, 232, 44, 215, 117, 122, 235, 22, 11, 245, 89, 203, 95, 176, 156, 169, 81, 160, 127, 12, 246, 111, 23, 196, 73, 236, 216, 67, 31, 45, 164, 118, 123, 183, 204, 187, 62, 90, 251, 96, 177, 134, 59, 82, 161, 108, 170, 85, 41, 157, 151, 178, 135, 144, 97, 190, 220, 252, 188, 149, 207, 205, 55, 63, 91, 209, 83, 57, 132, 60, 65, 162, 109, 71, 20, 42, 158, 93, 86, 242, 211, 171, 68, 17, 146, 217, 35, 32, 46, 137, 180, 124, 184, 38, 119, 153, 227, 165, 103, 74, 237, 222, 197, 49, 254, 24, 13, 99, 140, 128, 192, 247, 112, 7], t.fbsub = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], t.rbsub = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], t.ftable = [2774754246, 2222750968, 2574743534, 2373680118, 234025727, 3177933782, 2976870366, 1422247313, 1345335392, 50397442, 2842126286, 2099981142, 436141799, 1658312629, 3870010189, 2591454956, 1170918031, 2642575903, 1086966153, 2273148410, 368769775, 3948501426, 3376891790, 200339707, 3970805057, 1742001331, 4255294047, 3937382213, 3214711843, 4154762323, 2524082916, 1539358875, 3266819957, 486407649, 2928907069, 1780885068, 1513502316, 1094664062, 49805301, 1338821763, 1546925160, 4104496465, 887481809, 150073849, 2473685474, 1943591083, 1395732834, 1058346282, 201589768, 1388824469, 1696801606, 1589887901, 672667696, 2711000631, 251987210, 3046808111, 151455502, 907153956, 2608889883, 1038279391, 652995533, 1764173646, 3451040383, 2675275242, 453576978, 2659418909, 1949051992, 773462580, 756751158, 2993581788, 3998898868, 4221608027, 4132590244, 1295727478, 1641469623, 3467883389, 2066295122, 1055122397, 1898917726, 2542044179, 4115878822, 1758581177, 0, 753790401, 1612718144, 536673507, 3367088505, 3982187446, 3194645204, 1187761037, 3653156455, 1262041458, 3729410708, 3561770136, 3898103984, 1255133061, 1808847035, 720367557, 3853167183, 385612781, 3309519750, 3612167578, 1429418854, 2491778321, 3477423498, 284817897, 100794884, 2172616702, 4031795360, 1144798328, 3131023141, 3819481163, 4082192802, 4272137053, 3225436288, 2324664069, 2912064063, 3164445985, 1211644016, 83228145, 3753688163, 3249976951, 1977277103, 1663115586, 806359072, 452984805, 250868733, 1842533055, 1288555905, 336333848, 890442534, 804056259, 3781124030, 2727843637, 3427026056, 957814574, 1472513171, 4071073621, 2189328124, 1195195770, 2892260552, 3881655738, 723065138, 2507371494, 2690670784, 2558624025, 3511635870, 2145180835, 1713513028, 2116692564, 2878378043, 2206763019, 3393603212, 703524551, 3552098411, 1007948840, 2044649127, 3797835452, 487262998, 1994120109, 1004593371, 1446130276, 1312438900, 503974420, 3679013266, 168166924, 1814307912, 3831258296, 1573044895, 1859376061, 4021070915, 2791465668, 2828112185, 2761266481, 937747667, 2339994098, 854058965, 1137232011, 1496790894, 3077402074, 2358086913, 1691735473, 3528347292, 3769215305, 3027004632, 4199962284, 133494003, 636152527, 2942657994, 2390391540, 3920539207, 403179536, 3585784431, 2289596656, 1864705354, 1915629148, 605822008, 4054230615, 3350508659, 1371981463, 602466507, 2094914977, 2624877800, 555687742, 3712699286, 3703422305, 2257292045, 2240449039, 2423288032, 1111375484, 3300242801, 2858837708, 3628615824, 84083462, 32962295, 302911004, 2741068226, 1597322602, 4183250862, 3501832553, 2441512471, 1489093017, 656219450, 3114180135, 954327513, 335083755, 3013122091, 856756514, 3144247762, 1893325225, 2307821063, 2811532339, 3063651117, 572399164, 2458355477, 552200649, 1238290055, 4283782570, 2015897680, 2061492133, 2408352771, 4171342169, 2156497161, 386731290, 3669999461, 837215959, 3326231172, 3093850320, 3275833730, 2962856233, 1999449434, 286199582, 3417354363, 4233385128, 3602627437, 974525996], t.rtable = [1353184337, 1399144830, 3282310938, 2522752826, 3412831035, 4047871263, 2874735276, 2466505547, 1442459680, 4134368941, 2440481928, 625738485, 4242007375, 3620416197, 2151953702, 2409849525, 1230680542, 1729870373, 2551114309, 3787521629, 41234371, 317738113, 2744600205, 3338261355, 3881799427, 2510066197, 3950669247, 3663286933, 763608788, 3542185048, 694804553, 1154009486, 1787413109, 2021232372, 1799248025, 3715217703, 3058688446, 397248752, 1722556617, 3023752829, 407560035, 2184256229, 1613975959, 1165972322, 3765920945, 2226023355, 480281086, 2485848313, 1483229296, 436028815, 2272059028, 3086515026, 601060267, 3791801202, 1468997603, 715871590, 120122290, 63092015, 2591802758, 2768779219, 4068943920, 2997206819, 3127509762, 1552029421, 723308426, 2461301159, 4042393587, 2715969870, 3455375973, 3586000134, 526529745, 2331944644, 2639474228, 2689987490, 853641733, 1978398372, 971801355, 2867814464, 111112542, 1360031421, 4186579262, 1023860118, 2919579357, 1186850381, 3045938321, 90031217, 1876166148, 4279586912, 620468249, 2548678102, 3426959497, 2006899047, 3175278768, 2290845959, 945494503, 3689859193, 1191869601, 3910091388, 3374220536, 0, 2206629897, 1223502642, 2893025566, 1316117100, 4227796733, 1446544655, 517320253, 658058550, 1691946762, 564550760, 3511966619, 976107044, 2976320012, 266819475, 3533106868, 2660342555, 1338359936, 2720062561, 1766553434, 370807324, 179999714, 3844776128, 1138762300, 488053522, 185403662, 2915535858, 3114841645, 3366526484, 2233069911, 1275557295, 3151862254, 4250959779, 2670068215, 3170202204, 3309004356, 880737115, 1982415755, 3703972811, 1761406390, 1676797112, 3403428311, 277177154, 1076008723, 538035844, 2099530373, 4164795346, 288553390, 1839278535, 1261411869, 4080055004, 3964831245, 3504587127, 1813426987, 2579067049, 4199060497, 577038663, 3297574056, 440397984, 3626794326, 4019204898, 3343796615, 3251714265, 4272081548, 906744984, 3481400742, 685669029, 646887386, 2764025151, 3835509292, 227702864, 2613862250, 1648787028, 3256061430, 3904428176, 1593260334, 4121936770, 3196083615, 2090061929, 2838353263, 3004310991, 999926984, 2809993232, 1852021992, 2075868123, 158869197, 4095236462, 28809964, 2828685187, 1701746150, 2129067946, 147831841, 3873969647, 3650873274, 3459673930, 3557400554, 3598495785, 2947720241, 824393514, 815048134, 3227951669, 935087732, 2798289660, 2966458592, 366520115, 1251476721, 4158319681, 240176511, 804688151, 2379631990, 1303441219, 1414376140, 3741619940, 3820343710, 461924940, 3089050817, 2136040774, 82468509, 1563790337, 1937016826, 776014843, 1511876531, 1389550482, 861278441, 323475053, 2355222426, 2047648055, 2383738969, 2302415851, 3995576782, 902390199, 3991215329, 1018251130, 1507840668, 1064563285, 2043548696, 3208103795, 3939366739, 1537932639, 342834655, 2262516856, 2180231114, 1053059257, 741614648, 1598071746, 1925389590, 203809468, 2336832552, 1100287487, 1895934009, 3736275976, 2632234200, 2428589668, 1636092795, 1890988757, 1952214088, 1113045200], t
            })
        },
        1591: function(t, n, i) {
            var s, o;
            s = function(t) {
                "use strict";
                var n = function(t) {
                    switch (this.w = new Array(n.NLEN), typeof t) {
                        case "object":
                            this.copy(t);
                            break;
                        case "number":
                            this.zero(), this.w[0] = t;
                            break;
                        default:
                            this.zero()
                    }
                };
                return n.CHUNK = 32, n.MODBYTES = t.config["@NB"], n.BASEBITS = t.config["@BASE"], n.NLEN = 1 + Math.floor((8 * n.MODBYTES - 1) / n.BASEBITS), n.DNLEN = 2 * n.NLEN, n.BMASK = (1 << n.BASEBITS) - 1, n.BIGBITS = 8 * n.MODBYTES, n.NEXCESS = 1 << n.CHUNK - n.BASEBITS - 1, n.MODINV = Math.pow(2, -n.BASEBITS), n.prototype = {
                    zero: function() {
                        var t;
                        for (t = 0; t < n.NLEN; t++) this.w[t] = 0;
                        return this
                    },
                    one: function() {
                        var t;
                        for (this.w[0] = 1, t = 1; t < n.NLEN; t++) this.w[t] = 0;
                        return this
                    },
                    get: function(t) {
                        return this.w[t]
                    },
                    set: function(t, n) {
                        this.w[t] = n
                    },
                    iszilch: function() {
                        var t;
                        for (t = 0; t < n.NLEN; t++)
                            if (0 !== this.w[t]) return !1;
                        return !0
                    },
                    isunity: function() {
                        var t;
                        for (t = 1; t < n.NLEN; t++)
                            if (0 !== this.w[t]) return !1;
                        return 1 == this.w[0]
                    },
                    cswap: function(t, i) {
                        var s, o, r = i;
                        for (r = ~(r - 1), o = 0; o < n.NLEN; o++) s = r & (this.w[o] ^ t.w[o]), this.w[o] ^= s, t.w[o] ^= s
                    },
                    cmove: function(t, i) {
                        var s, o = i;
                        for (o = ~(o - 1), s = 0; s < n.NLEN; s++) this.w[s] ^= (this.w[s] ^ t.w[s]) & o
                    },
                    copy: function(t) {
                        var i;
                        for (i = 0; i < n.NLEN; i++) this.w[i] = t.w[i];
                        return this
                    },
                    hcopy: function(t) {
                        var i;
                        for (i = 0; i < n.NLEN; i++) this.w[i] = t.w[i];
                        return this
                    },
                    rcopy: function(t) {
                        var i;
                        for (i = 0; i < n.NLEN; i++) this.w[i] = t[i];
                        return this
                    },
                    xortop: function(t) {
                        this.w[n.NLEN - 1] ^= t
                    },
                    ortop: function(t) {
                        this.w[n.NLEN - 1] |= t
                    },
                    norm: function() {
                        var t, i, s = 0;
                        for (i = 0; i < n.NLEN - 1; i++) t = this.w[i] + s, this.w[i] = t & n.BMASK, s = t >> n.BASEBITS;
                        return this.w[n.NLEN - 1] = this.w[n.NLEN - 1] + s, this.w[n.NLEN - 1] >> 8 * n.MODBYTES % n.BASEBITS
                    },
                    fshr: function(t) {
                        var i, s;
                        for (i = this.w[0] & (1 << t) - 1, s = 0; s < n.NLEN - 1; s++) this.w[s] = this.w[s] >> t | this.w[s + 1] << n.BASEBITS - t & n.BMASK;
                        return this.w[n.NLEN - 1] = this.w[n.NLEN - 1] >> t, i
                    },
                    shr: function(t) {
                        var i, s = t % n.BASEBITS,
                            o = Math.floor(t / n.BASEBITS);
                        for (i = 0; i < n.NLEN - o - 1; i++) this.w[i] = this.w[o + i] >> s | this.w[o + i + 1] << n.BASEBITS - s & n.BMASK;
                        for (this.w[n.NLEN - o - 1] = this.w[n.NLEN - 1] >> s, i = n.NLEN - o; i < n.NLEN; i++) this.w[i] = 0;
                        return this
                    },
                    fshl: function(t) {
                        var i;
                        for (this.w[n.NLEN - 1] = this.w[n.NLEN - 1] << t | this.w[n.NLEN - 2] >> n.BASEBITS - t, i = n.NLEN - 2; i > 0; i--) this.w[i] = this.w[i] << t & n.BMASK | this.w[i - 1] >> n.BASEBITS - t;
                        return this.w[0] = this.w[0] << t & n.BMASK, this.w[n.NLEN - 1] >> 8 * n.MODBYTES % n.BASEBITS
                    },
                    shl: function(t) {
                        var i, s = t % n.BASEBITS,
                            o = Math.floor(t / n.BASEBITS);
                        for (this.w[n.NLEN - 1] = this.w[n.NLEN - 1 - o] << s, n.NLEN > o + 2 && (this.w[n.NLEN - 1] |= this.w[n.NLEN - o - 2] >> n.BASEBITS - s), i = n.NLEN - 2; i > o; i--) this.w[i] = this.w[i - o] << s & n.BMASK | this.w[i - o - 1] >> n.BASEBITS - s;
                        for (this.w[o] = this.w[0] << s & n.BMASK, i = 0; i < o; i++) this.w[i] = 0;
                        return this
                    },
                    nbits: function() {
                        var t, i, s = n.NLEN - 1;
                        for (this.norm(); s >= 0 && 0 === this.w[s];) s--;
                        if (s < 0) return 0;
                        for (t = n.BASEBITS * s, i = this.w[s]; 0 !== i;) i = Math.floor(i / 2), t++;
                        return t
                    },
                    toString: function() {
                        var t, i, s = "",
                            o = this.nbits();
                        for (o % 4 == 0 ? o = Math.floor(o / 4) : (o = Math.floor(o / 4), o++), o < 2 * n.MODBYTES && (o = 2 * n.MODBYTES), i = o - 1; i >= 0; i--)(t = new n(0)).copy(this), t.shr(4 * i), s += (15 & t.w[0]).toString(16);
                        return s
                    },
                    add: function(t) {
                        var i;
                        for (i = 0; i < n.NLEN; i++) this.w[i] += t.w[i];
                        return this
                    },
                    plus: function(t) {
                        var i, s = new n(0);
                        for (i = 0; i < n.NLEN; i++) s.w[i] = this.w[i] + t.w[i];
                        return s
                    },
                    inc: function(t) {
                        return this.norm(), this.w[0] += t, this
                    },
                    sub: function(t) {
                        var i;
                        for (i = 0; i < n.NLEN; i++) this.w[i] -= t.w[i];
                        return this
                    },
                    rsub: function(t) {
                        var i;
                        for (i = 0; i < n.NLEN; i++) this.w[i] = t.w[i] - this.w[i];
                        return this
                    },
                    dec: function(t) {
                        return this.norm(), this.w[0] -= t, this
                    },
                    minus: function(t) {
                        var i, s = new n(0);
                        for (i = 0; i < n.NLEN; i++) s.w[i] = this.w[i] - t.w[i];
                        return s
                    },
                    imul: function(t) {
                        var i;
                        for (i = 0; i < n.NLEN; i++) this.w[i] *= t;
                        return this
                    },
                    tobytearray: function(t, i) {
                        var s, o = new n(0);
                        for (this.norm(), o.copy(this), s = n.MODBYTES - 1; s >= 0; s--) t[s + i] = 255 & o.w[0], o.fshr(8);
                        return this
                    },
                    toBytes: function(t) {
                        this.tobytearray(t, 0)
                    },
                    muladd: function(t, i, s, o) {
                        var r = t * i + s + this.w[o];
                        return this.w[o] = r & n.BMASK, (r - this.w[o]) * n.MODINV
                    },
                    pmul: function(t) {
                        var i, s, o = 0;
                        for (s = 0; s < n.NLEN; s++) i = this.w[s], this.w[s] = 0, o = this.muladd(i, t, o, s);
                        return o
                    },
                    pxmul: function(i) {
                        var s, o = new t.DBIG(0),
                            r = 0;
                        for (s = 0; s < n.NLEN; s++) r = o.muladd(this.w[s], i, r, s);
                        return o.w[n.NLEN] = r, o
                    },
                    div3: function() {
                        var t, i, s, o = 0;
                        for (this.norm(), i = 1 << n.BASEBITS, s = n.NLEN - 1; s >= 0; s--) t = o * i + this.w[s], this.w[s] = Math.floor(t / 3), o = t % 3;
                        return o
                    },
                    mod2m: function(t) {
                        var i, s, o;
                        for (s = Math.floor(t / n.BASEBITS), o = (1 << t % n.BASEBITS) - 1, this.w[s] &= o, i = s + 1; i < n.NLEN; i++) this.w[i] = 0
                    },
                    invmod2m: function() {
                        var t, i, s, o = new n(0),
                            r = new n(0),
                            h = new n(0);
                        for (o.inc(n.invmod256(this.lastbits(8))), t = 8; t < n.BIGBITS; t <<= 1) o.norm(), r.copy(this), r.mod2m(t), (i = n.smul(o, r)).shr(t), h.copy(this), h.shr(t), h.mod2m(t), (s = n.smul(o, h)).mod2m(t), i.add(s), i.norm(), r = n.smul(i, o), i.copy(r), i.mod2m(t), s.one(), s.shl(t), i.rsub(s), i.norm(), i.shl(t), o.add(i);
                        o.mod2m(n.BIGBITS), this.copy(o), this.norm()
                    },
                    mod: function(t) {
                        var i = 0,
                            s = new n(0);
                        if (this.norm(), !(n.comp(this, t) < 0)) {
                            do {
                                t.fshl(1), i++
                            } while (n.comp(this, t) >= 0);
                            for (; i > 0;) t.fshr(1), s.copy(this), s.sub(t), s.norm(), this.cmove(s, 1 - (s.w[n.NLEN - 1] >> n.CHUNK - 1 & 1)), i--
                        }
                    },
                    div: function(t) {
                        var i = 0,
                            s = 0,
                            o = new n(1),
                            r = new n(0),
                            h = new n(0);
                        for (this.norm(), r.copy(this), this.zero(); n.comp(r, t) >= 0;) o.fshl(1), t.fshl(1), i++;
                        for (; i > 0;) t.fshr(1), o.fshr(1), h.copy(r), h.sub(t), h.norm(), s = 1 - (h.w[n.NLEN - 1] >> n.CHUNK - 1 & 1), r.cmove(h, s), h.copy(this), h.add(o), h.norm(), this.cmove(h, s), i--
                    },
                    parity: function() {
                        return this.w[0] % 2
                    },
                    bit: function(t) {
                        return (this.w[Math.floor(t / n.BASEBITS)] & 1 << t % n.BASEBITS) > 0 ? 1 : 0
                    },
                    lastbits: function(t) {
                        var n = (1 << t) - 1;
                        return this.norm(), this.w[0] & n
                    },
                    isok: function() {
                        var t, i = !0;
                        for (t = 0; t < n.NLEN; t++) this.w[t] >> n.BASEBITS != 0 && (i = !1);
                        return i
                    },
                    jacobi: function(t) {
                        var i, s, o = 0,
                            r = new n(0),
                            h = new n(0),
                            e = new n(0),
                            c = new n(0),
                            u = new n(1);
                        if (0 === t.parity() || 0 === n.comp(this, c) || n.comp(t, u) <= 0) return 0;
                        for (this.norm(), h.copy(this), e.copy(t), h.mod(t); n.comp(e, u) > 0;) {
                            if (0 === n.comp(h, c)) return 0;
                            for (i = e.lastbits(3), s = 0; 0 === h.parity();) s++, h.shr(1);
                            s % 2 == 1 && (o += (i * i - 1) / 8), o += (i - 1) * (h.lastbits(2) - 1) / 4, r.copy(e), r.mod(h), e.copy(h), h.copy(r), o %= 2
                        }
                        return 0 === o ? 1 : -1
                    },
                    invmodp: function(t) {
                        var i = new n(0),
                            s = new n(0),
                            o = new n(1),
                            r = new n(0),
                            h = new n(0),
                            e = new n(1);
                        for (this.mod(t), i.copy(this), s.copy(t); 0 !== n.comp(i, e) && 0 !== n.comp(s, e);) {
                            for (; 0 === i.parity();) i.shr(1), 0 !== o.parity() && (o.add(t), o.norm()), o.shr(1);
                            for (; 0 === s.parity();) s.shr(1), 0 !== r.parity() && (r.add(t), r.norm()), r.shr(1);
                            n.comp(i, s) >= 0 ? (i.sub(s), i.norm(), n.comp(o, r) >= 0 ? o.sub(r) : (h.copy(t), h.sub(r), o.add(h)), o.norm()) : (s.sub(i), s.norm(), n.comp(r, o) >= 0 ? r.sub(o) : (h.copy(t), h.sub(o), r.add(h)), r.norm())
                        }
                        0 === n.comp(i, e) ? this.copy(o) : this.copy(r)
                    },
                    powmod: function(t, i) {
                        var s, o = new n(1),
                            r = new n(0),
                            h = new n(0);
                        for (this.norm(), t.norm(), r.copy(t), h.copy(this); s = r.parity(), r.fshr(1), 1 == s && (o = n.modmul(o, h, i)), !r.iszilch();) h = n.modsqr(h, i);
                        return o
                    }
                }, n.frombytearray = function(t, i) {
                    var s, o = new n(0);
                    for (s = 0; s < n.MODBYTES; s++) o.fshl(8), o.w[0] += 255 & t[s + i];
                    return o
                }, n.fromBytes = function(t) {
                    return n.frombytearray(t, 0)
                }, n.smul = function(t, i) {
                    var s, o, r, h = new n(0);
                    for (o = 0; o < n.NLEN; o++)
                        for (s = 0, r = 0; r < n.NLEN; r++) o + r < n.NLEN && (s = h.muladd(t.w[o], i.w[r], s, o + r));
                    return h
                }, n.comp = function(t, i) {
                    var s;
                    for (s = n.NLEN - 1; s >= 0; s--)
                        if (t.w[s] != i.w[s]) return t.w[s] > i.w[s] ? 1 : -1;
                    return 0
                }, n.random = function(t) {
                    var i, s, o = new n(0),
                        r = 0,
                        h = 0;
                    for (i = 0; i < 8 * n.MODBYTES; i++) 0 === r ? h = t.getByte() : h >>= 1, s = 1 & h, o.shl(1), o.w[0] += s, r++, r &= 7;
                    return o
                }, n.randomnum = function(n, i) {
                    var s, o, r = new t.DBIG(0),
                        h = 0,
                        e = 0;
                    for (s = 0; s < 2 * n.nbits(); s++) 0 === h ? e = i.getByte() : e >>= 1, o = 1 & e, r.shl(1), r.w[0] += o, h++, h &= 7;
                    return r.mod(n)
                }, n.mul = function(i, s) {
                    var o, r, h, e, c, u, a = new t.DBIG(0),
                        f = [];
                    for (e = 0; e < n.NLEN; e++) f[e] = i.w[e] * s.w[e];
                    for (h = r = f[0], a.w[0] = h, c = 1; c < n.NLEN; c++) {
                        for (h = r += f[c], e = c; e >= 1 + Math.floor(c / 2); e--) h += (i.w[e] - i.w[c - e]) * (s.w[c - e] - s.w[e]);
                        a.w[c] = h
                    }
                    for (c = n.NLEN; c < 2 * n.NLEN - 1; c++) {
                        for (h = r -= f[c - n.NLEN], e = n.NLEN - 1; e >= 1 + Math.floor(c / 2); e--) h += (i.w[e] - i.w[c - e]) * (s.w[c - e] - s.w[e]);
                        a.w[c] = h
                    }
                    for (u = 0, e = 0; e < n.DNLEN - 1; e++) o = a.w[e] + u, a.w[e] = o & n.BMASK, u = (o - a.w[e]) * n.MODINV;
                    return a.w[n.DNLEN - 1] = u, a
                }, n.sqr = function(i) {
                    var s, o, r, h, e, c = new t.DBIG(0);
                    for (c.w[0] = i.w[0] * i.w[0], r = 1; r < n.NLEN - 1;) {
                        for (o = i.w[r] * i.w[0], h = 1; h < r + 1 >> 1; h++) o += i.w[r - h] * i.w[h];
                        for (o += o, c.w[r] = o, r++, o = i.w[r] * i.w[0], h = 1; h < r + 1 >> 1; h++) o += i.w[r - h] * i.w[h];
                        o += o, o += i.w[r >> 1] * i.w[r >> 1], c.w[r] = o, r++
                    }
                    for (r = n.NLEN - 1 + n.NLEN % 2; r < n.DNLEN - 3;) {
                        for (o = i.w[n.NLEN - 1] * i.w[r - n.NLEN + 1], h = r - n.NLEN + 2; h < r + 1 >> 1; h++) o += i.w[r - h] * i.w[h];
                        for (o += o, c.w[r] = o, r++, o = i.w[n.NLEN - 1] * i.w[r - n.NLEN + 1], h = r - n.NLEN + 2; h < r + 1 >> 1; h++) o += i.w[r - h] * i.w[h];
                        o += o, o += i.w[r >> 1] * i.w[r >> 1], c.w[r] = o, r++
                    }
                    for (o = i.w[n.NLEN - 2] * i.w[n.NLEN - 1], o += o, c.w[n.DNLEN - 3] = o, o = i.w[n.NLEN - 1] * i.w[n.NLEN - 1], c.w[n.DNLEN - 2] = o, e = 0, h = 0; h < n.DNLEN - 1; h++) s = c.w[h] + e, c.w[h] = s & n.BMASK, e = (s - c.w[h]) * n.MODINV;
                    return c.w[n.DNLEN - 1] = e, c
                }, n.monty = function(t, i, s) {
                    var o, r, h, e, c, u = new n(0),
                        a = [],
                        f = [];
                    for (h = s.w[0], a[0] = (h & n.BMASK) * i & n.BMASK, h += a[0] * t.w[0], r = s.w[1] + h * n.MODINV, o = 0, c = 1; c < n.NLEN; c++) {
                        for (h = r + o + a[0] * t.w[c], e = c - 1; e > Math.floor(c / 2); e--) h += (a[c - e] - a[e]) * (t.w[e] - t.w[c - e]);
                        a[c] = (h & n.BMASK) * i & n.BMASK, r = (h += a[c] * t.w[0]) * n.MODINV + s.w[c + 1], f[c] = a[c] * t.w[c], o += f[c]
                    }
                    for (c = n.NLEN; c < 2 * n.NLEN - 1; c++) {
                        for (h = r + o, e = n.NLEN - 1; e >= 1 + Math.floor(c / 2); e--) h += (a[c - e] - a[e]) * (t.w[e] - t.w[c - e]);
                        u.w[c - n.NLEN] = h & n.BMASK, r = (h - u.w[c - n.NLEN]) * n.MODINV + s.w[c + 1], o -= f[c - n.NLEN + 1]
                    }
                    return u.w[n.NLEN - 1] = r & n.BMASK, u
                }, n.modmul = function(t, i, s) {
                    return t.mod(s), i.mod(s), n.mul(t, i).mod(s)
                }, n.modsqr = function(t, i) {
                    return t.mod(i), n.sqr(t).mod(i)
                }, n.modneg = function(t, n) {
                    return t.mod(n), n.minus(t)
                }, n.invmod256 = function(t) {
                    var n, i;
                    return i = 0, i += t >> 1 & 1, i = 2 - (i &= 1), i = (n = (i <<= 1) + 1) * (3 & t), i >>= 2, i += n * (t >> 2 & 3) & 3, i *= n, i = 4 - (i &= 3), i = (n += i <<= 2) * (15 & t), i >>= 4, i += n * (t >> 4 & 15) & 15, i *= n, i = 16 - (i &= 15), n += i <<= 4
                }, n
            }, o = function(t) {
                "use strict";
                var n = function(t) {
                    this.w = [], this.zero(), this.w[0] = t
                };
                return n.prototype = {
                    zero: function() {
                        for (var n = 0; n < t.BIG.DNLEN; n++) this.w[n] = 0;
                        return this
                    },
                    copy: function(n) {
                        for (var i = 0; i < t.BIG.DNLEN; i++) this.w[i] = n.w[i];
                        return this
                    },
                    hcopy: function(n) {
                        var i;
                        for (i = 0; i < t.BIG.NLEN; i++) this.w[i] = n.w[i];
                        for (i = t.BIG.NLEN; i < t.BIG.DNLEN; i++) this.w[i] = 0;
                        return this
                    },
                    ucopy: function(n) {
                        var i;
                        for (i = 0; i < t.BIG.NLEN; i++) this.w[i] = 0;
                        for (i = t.BIG.NLEN; i < t.BIG.DNLEN; i++) this.w[i] = n.w[i - t.BIG.NLEN];
                        return this
                    },
                    norm: function() {
                        var n, i, s = 0;
                        for (i = 0; i < t.BIG.DNLEN - 1; i++) n = this.w[i] + s, this.w[i] = n & t.BIG.BMASK, s = n >> t.BIG.BASEBITS;
                        return this.w[t.BIG.DNLEN - 1] = this.w[t.BIG.DNLEN - 1] + s, this
                    },
                    muladd: function(n, i, s, o) {
                        var r = n * i + s + this.w[o];
                        return this.w[o] = r & t.BIG.BMASK, (r - this.w[o]) * t.BIG.MODINV
                    },
                    shr: function(n) {
                        var i, s = n % t.BIG.BASEBITS,
                            o = Math.floor(n / t.BIG.BASEBITS);
                        for (i = 0; i < t.BIG.DNLEN - o - 1; i++) this.w[i] = this.w[o + i] >> s | this.w[o + i + 1] << t.BIG.BASEBITS - s & t.BIG.BMASK;
                        for (this.w[t.BIG.DNLEN - o - 1] = this.w[t.BIG.DNLEN - 1] >> s, i = t.BIG.DNLEN - o; i < t.BIG.DNLEN; i++) this.w[i] = 0;
                        return this
                    },
                    shl: function(n) {
                        var i, s = n % t.BIG.BASEBITS,
                            o = Math.floor(n / t.BIG.BASEBITS);
                        for (this.w[t.BIG.DNLEN - 1] = this.w[t.BIG.DNLEN - 1 - o] << s | this.w[t.BIG.DNLEN - o - 2] >> t.BIG.BASEBITS - s, i = t.BIG.DNLEN - 2; i > o; i--) this.w[i] = this.w[i - o] << s & t.BIG.BMASK | this.w[i - o - 1] >> t.BIG.BASEBITS - s;
                        for (this.w[o] = this.w[0] << s & t.BIG.BMASK, i = 0; i < o; i++) this.w[i] = 0;
                        return this
                    },
                    cmove: function(n, i) {
                        var s, o = i;
                        for (o = ~(o - 1), s = 0; s < t.BIG.DNLEN; s++) this.w[s] ^= (this.w[s] ^ n.w[s]) & o
                    },
                    add: function(n) {
                        for (var i = 0; i < t.BIG.DNLEN; i++) this.w[i] += n.w[i]
                    },
                    sub: function(n) {
                        for (var i = 0; i < t.BIG.DNLEN; i++) this.w[i] -= n.w[i]
                    },
                    rsub: function(n) {
                        for (var i = 0; i < t.BIG.DNLEN; i++) this.w[i] = n.w[i] - this.w[i]
                    },
                    nbits: function() {
                        var n, i, s = t.BIG.DNLEN - 1;
                        for (this.norm(); s >= 0 && 0 === this.w[s];) s--;
                        if (s < 0) return 0;
                        for (n = t.BIG.BASEBITS * s, i = this.w[s]; 0 !== i;) i = Math.floor(i / 2), n++;
                        return n
                    },
                    toString: function() {
                        var t, i, s = "",
                            o = this.nbits();
                        for (o % 4 == 0 ? o = Math.floor(o / 4) : (o = Math.floor(o / 4), o++), i = o - 1; i >= 0; i--)(t = new n(0)).copy(this), t.shr(4 * i), s += (15 & t.w[0]).toString(16);
                        return s
                    },
                    mod: function(i) {
                        var s = 0,
                            o = new n(0),
                            r = new n(0),
                            h = new t.BIG(0);
                        if (this.norm(), o.hcopy(i), h.hcopy(this), n.comp(this, o) < 0) return h;
                        do {
                            o.shl(1), s++
                        } while (n.comp(this, o) >= 0);
                        for (; s > 0;) o.shr(1), r.copy(this), r.sub(o), r.norm(), this.cmove(r, 1 - (r.w[t.BIG.DNLEN - 1] >> t.BIG.CHUNK - 1 & 1)), s--;
                        return h.hcopy(this), h
                    },
                    div: function(i) {
                        var s = 0,
                            o = 0,
                            r = new n(0),
                            h = new n(0),
                            e = new t.BIG(0),
                            c = new t.BIG(0),
                            u = new t.BIG(1);
                        for (r.hcopy(i), this.norm(); n.comp(this, r) >= 0;) u.fshl(1), r.shl(1), o++;
                        for (; o > 0;) r.shr(1), u.shr(1), h.copy(this), h.sub(r), h.norm(), s = 1 - (h.w[t.BIG.DNLEN - 1] >> t.BIG.CHUNK - 1 & 1), this.cmove(h, s), e.copy(c), e.add(u), e.norm(), c.cmove(e, s), o--;
                        return c
                    },
                    split: function(n) {
                        var i, s, o = new t.BIG(0),
                            r = n % t.BIG.BASEBITS,
                            h = this.w[t.BIG.DNLEN - 1] << t.BIG.BASEBITS - r;
                        for (s = t.BIG.DNLEN - 2; s >= t.BIG.NLEN - 1; s--) i = this.w[s] >> r | h, h = this.w[s] << t.BIG.BASEBITS - r & t.BIG.BMASK, o.w[s - t.BIG.NLEN + 1] = i;
                        return this.w[t.BIG.NLEN - 1] &= (1 << r) - 1, o
                    }
                }, n.comp = function(n, i) {
                    var s;
                    for (s = t.BIG.DNLEN - 1; s >= 0; s--)
                        if (n.w[s] != i.w[s]) return n.w[s] > i.w[s] ? 1 : -1;
                    return 0
                }, n
            }, void 0 !== t.exports && (t.exports = {
                BIG: s,
                DBIG: o
            })
        },
        1592: function(t, n, i) {
            void 0 !== t.exports && (t.exports.ECDH = function(t) {
                "use strict";
                return {
                    INVALID_PUBLIC_KEY: -2,
                    ERROR: -3,
                    INVALID: -4,
                    EFS: t.BIG.MODBYTES,
                    EGS: t.BIG.MODBYTES,
                    EAS: 16,
                    EBS: 16,
                    SHA256: 32,
                    SHA384: 48,
                    SHA512: 64,
                    HASH_TYPE: 64,
                    inttobytes: function(t, n) {
                        var i, s = [];
                        for (i = 0; i < n; i++) s[i] = 0;
                        for (i = n; t > 0 && i > 0;) s[--i] = 255 & t, t = Math.floor(t / 256);
                        return s
                    },
                    bytestostring: function(t) {
                        var n, i, s = "",
                            o = t.length;
                        for (i = 0; i < o; i++) n = t[i], s += String.fromCharCode(n);
                        return s
                    },
                    stringtobytes: function(t) {
                        var n, i = [];
                        for (n = 0; n < t.length; n++) i.push(t.charCodeAt(n));
                        return i
                    },
                    hashit: function(n, i, s, o, r) {
                        var h, e, c, u, a = [];
                        if (n == this.SHA256 ? ((h = new t.HASH256).process_array(i), s > 0 && h.process_num(s), null != o && h.process_array(o), a = h.hash()) : n == this.SHA384 ? ((h = new t.HASH384).process_array(i), s > 0 && h.process_num(s), null != o && h.process_array(o), a = h.hash()) : n == this.SHA512 && ((h = new t.HASH512).process_array(i), s > 0 && h.process_num(s), null != o && h.process_array(o), a = h.hash()), 0 == a.length) return null;
                        if (0 == r) return a;
                        if (e = [], n >= (u = t.BIG.MODBYTES))
                            for (c = 0; c < u; c++) e[c] = a[c];
                        else {
                            for (c = 0; c < n; c++) e[c + u - n] = a[c];
                            for (c = 0; c < u - n; c++) e[c] = 0
                        }
                        return e
                    },
                    KDF1: function(t, n, i) {
                        var s, o, r, h = t,
                            e = [],
                            c = [],
                            u = 0;
                        for (r = 0; r < e.length; r++) e[r] = 0;
                        for (o = Math.floor(i / h), i % h != 0 && o++, s = 0; s < o; s++)
                            if (c = this.hashit(t, n, s, null, 0), u + h > i)
                                for (r = 0; r < i % h; r++) e[u++] = c[r];
                            else
                                for (r = 0; r < h; r++) e[u++] = c[r];
                        return e
                    },
                    KDF2: function(t, n, i, s) {
                        var o, r, h, e = t,
                            c = [],
                            u = [],
                            a = 0;
                        for (h = 0; h < c.length; h++) c[h] = 0;
                        for (r = Math.floor(s / e), s % e != 0 && r++, o = 1; o <= r; o++)
                            if (u = this.hashit(t, n, o, i, 0), a + e > s)
                                for (h = 0; h < s % e; h++) c[a++] = u[h];
                            else
                                for (h = 0; h < e; h++) c[a++] = u[h];
                        return c
                    },
                    PBKDF2: function(t, n, i, s, o) {
                        var r, h, e, c, u, a, f = new Array(t),
                            p = [],
                            w = [],
                            d = [],
                            y = 0;
                        for (c = Math.floor(o / t), o % t != 0 && c++, y = 0, r = 1; r <= c; r++) {
                            for (h = 0; h < i.length; h++) w[h] = i[h];
                            for (u = this.inttobytes(r, 4), h = 0; h < 4; h++) w[i.length + h] = u[h];
                            for (this.HMAC(t, w, n, f), h = 0; h < t; h++) p[h] = f[h];
                            for (h = 2; h <= s; h++)
                                for (this.HMAC(t, p, n, p), e = 0; e < t; e++) f[e] ^= p[e];
                            for (h = 0; h < t; h++) d[y++] = f[h]
                        }
                        for (a = [], r = 0; r < o; r++) a[r] = d[r];
                        return a
                    },
                    HMAC: function(t, n, i, s) {
                        var o, r, h = s.length,
                            e = [],
                            c = 64;
                        if (t > 32 && (c = 128), o = new Array(c), h < 4) return 0;
                        for (r = 0; r < c; r++) o[r] = 0;
                        if (i.length > c)
                            for (e = this.hashit(t, i, 0, null, 0), r = 0; r < t; r++) o[r] = e[r];
                        else
                            for (r = 0; r < i.length; r++) o[r] = i[r];
                        for (r = 0; r < c; r++) o[r] ^= 54;
                        for (e = this.hashit(t, o, 0, n, 0), r = 0; r < c; r++) o[r] ^= 106;
                        for (e = this.hashit(t, o, 0, e, h), r = 0; r < h; r++) s[r] = e[r];
                        return 1
                    },
                    AES_CBC_IV0_ENCRYPT: function(n, i) {
                        var s, o, r, h, e, c, u = new t.AES,
                            a = [],
                            f = [];
                        for (u.init(t.AES.CBC, n.length, n, null), e = c = 0, s = !1;;) {
                            for (r = 0; r < 16; r++) {
                                if (!(e < i.length)) {
                                    s = !0;
                                    break
                                }
                                a[r] = i[e++]
                            }
                            if (s) break;
                            for (u.encrypt(a), r = 0; r < 16; r++) f[c++] = a[r]
                        }
                        for (o = 16 - r, h = r; h < 16; h++) a[h] = o;
                        for (u.encrypt(a), r = 0; r < 16; r++) f[c++] = a[r];
                        return u.end(), f
                    },
                    AES_CBC_IV0_DECRYPT: function(n, i) {
                        var s, o, r, h, e, c, u = new t.AES,
                            a = [],
                            f = [],
                            p = 0,
                            w = 0;
                        if (u.init(t.AES.CBC, n.length, n, null), 0 === i.length) return [];
                        for (o = i[p++], r = !1;;) {
                            for (c = 0; c < 16; c++) {
                                if (a[c] = o, p >= i.length) {
                                    r = !0;
                                    break
                                }
                                o = i[p++]
                            }
                            if (u.decrypt(a), r) break;
                            for (c = 0; c < 16; c++) f[w++] = a[c]
                        }
                        if (u.end(), h = !1, e = a[15], (15 != c || e < 1 || e > 16) && (h = !0), e >= 2 && e <= 16)
                            for (c = 16 - e; c < 16; c++) a[c] != e && (h = !0);
                        if (!h)
                            for (c = 0; c < 16 - e; c++) f[w++] = a[c];
                        if (s = [], h) return s;
                        for (c = 0; c < w; c++) s[c] = f[c];
                        return s
                    },
                    KEY_PAIR_GENERATE: function(n, i, s) {
                        var o, r, h, e, c;
                        return c = new t.ECP(0), (r = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Gx), t.ECP.CURVETYPE != t.ECP.MONTGOMERY ? ((h = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Gy), c.setxy(r, h)) : c.setx(r), (o = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), null === n ? (e = t.BIG.fromBytes(i)).mod(o) : e = t.BIG.randomnum(o, n), e.toBytes(i), c.mul(e).toBytes(s), 0
                    },
                    PUBLIC_KEY_VALIDATE: function(n) {
                        var i, s, o, r, h = t.ECP.fromBytes(n),
                            e = 0;
                        if ((i = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), h.is_infinity() && (e = this.INVALID_PUBLIC_KEY), 0 === e) {
                            for ((s = new t.BIG(0)).rcopy(t.ROM_FIELD.Modulus), o = s.nbits(), (r = new t.BIG(1)).shl(Math.floor((o + 4) / 2)), r.add(s), r.div(i); 0 == r.parity();) r.shr(1), h.dbl();
                            r.isunity() || (h = h.mul(r)), h.is_infinity() && (e = this.INVALID_PUBLIC_KEY)
                        }
                        return e
                    },
                    ECPSVDP_DH: function(n, i, s) {
                        var o, r, h, e, c = [],
                            u = 0;
                        if (r = t.BIG.fromBytes(n), (e = t.ECP.fromBytes(i)).is_infinity() && (u = this.ERROR), 0 === u)
                            if ((o = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), r.mod(o), (e = e.mul(r)).is_infinity()) u = this.ERROR;
                            else
                                for (e.getX().toBytes(c), h = 0; h < this.EFS; h++) s[h] = c[h];
                        return u
                    },
                    ECPSP_DSA: function(n, i, s, o, r, h) {
                        var e, c, u, a, f, p, w, d, y, m, E, I, B, l, S = [];
                        l = this.hashit(n, o, 0, null, t.BIG.MODBYTES), (c = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Gx), (u = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Gy), (I = new t.ECP(0)).setxy(c, u), (a = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), f = t.BIG.fromBytes(s), p = t.BIG.fromBytes(l), w = new t.BIG(0), d = new t.BIG(0), B = new t.ECP;
                        do {
                            y = t.BIG.randomnum(a, i), E = t.BIG.randomnum(a, i), B.copy(I), m = (B = B.mul(y)).getX(), w.copy(m), w.mod(a), w.iszilch() || ((y = t.BIG.modmul(y, E, a)).invmodp(a), (d = t.BIG.modmul(f, w, a)).add(p), d = t.BIG.modmul(d, E, a), d = t.BIG.modmul(y, d, a))
                        } while (d.iszilch());
                        for (w.toBytes(S), e = 0; e < this.EFS; e++) r[e] = S[e];
                        for (d.toBytes(S), e = 0; e < this.EFS; e++) h[e] = S[e];
                        return 0
                    },
                    ECPVP_DSA: function(n, i, s, o, r) {
                        var h, e, c, u, a, f, p, w, d, y, m, E = 0;
                        return h = this.hashit(n, s, 0, null, t.BIG.MODBYTES), (c = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Gx), (u = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Gy), (d = new t.ECP(0)).setxy(c, u), (e = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Order), f = t.BIG.fromBytes(o), p = t.BIG.fromBytes(r), a = t.BIG.fromBytes(h), (f.iszilch() || t.BIG.comp(f, e) >= 0 || p.iszilch() || t.BIG.comp(p, e) >= 0) && (E = this.INVALID), 0 === E && (p.invmodp(e), a = t.BIG.modmul(a, p, e), w = t.BIG.modmul(f, p, e), (y = t.ECP.fromBytes(i)).is_infinity() ? E = this.ERROR : ((m = new t.ECP).copy(y), (m = m.mul2(w, d, a)).is_infinity() ? E = this.INVALID : ((p = m.getX()).mod(e), 0 !== t.BIG.comp(p, f) && (E = this.INVALID)))), E
                    },
                    ECIES_ENCRYPT: function(t, n, i, s, o, r, h, e) {
                        var c, u, a, f, p = [],
                            w = [],
                            d = [],
                            y = [],
                            m = [],
                            E = [];
                        if (0 !== this.KEY_PAIR_GENERATE(s, m, h)) return E;
                        if (0 !== this.ECPSVDP_DH(m, o, p)) return E;
                        for (f = 0; f < 2 * this.EFS + 1; f++) w[f] = h[f];
                        for (f = 0; f < this.EFS; f++) w[2 * this.EFS + 1 + f] = p[f];
                        for (c = this.KDF2(t, w, n, this.EFS), f = 0; f < this.EAS; f++) d[f] = c[f], y[f] = c[this.EAS + f];
                        for (E = this.AES_CBC_IV0_ENCRYPT(d, r), u = this.inttobytes(i.length, 8), a = [], f = 0; f < E.length; f++) a[f] = E[f];
                        for (f = 0; f < i.length; f++) a[E.length + f] = i[f];
                        for (f = 0; f < 8; f++) a[E.length + i.length + f] = u[f];
                        return this.HMAC(t, a, y, e), E
                    },
                    ECIES_DECRYPT: function(t, n, i, s, o, r, h) {
                        var e, c, u, a, f, p = [],
                            w = [],
                            d = [],
                            y = [],
                            m = new Array(r.length),
                            E = [];
                        if (0 !== this.ECPSVDP_DH(h, s, p)) return E;
                        for (f = 0; f < 2 * this.EFS + 1; f++) w[f] = s[f];
                        for (f = 0; f < this.EFS; f++) w[2 * this.EFS + 1 + f] = p[f];
                        for (e = this.KDF2(t, w, n, this.EFS), f = 0; f < this.EAS; f++) d[f] = e[f], y[f] = e[this.EAS + f];
                        if (0 === (E = this.AES_CBC_IV0_DECRYPT(d, o)).length) return E;
                        for (c = this.inttobytes(i.length, 8), u = [], f = 0; f < o.length; f++) u[f] = o[f];
                        for (f = 0; f < i.length; f++) u[o.length + f] = i[f];
                        for (f = 0; f < 8; f++) u[o.length + i.length + f] = c[f];
                        for (this.HMAC(t, u, y, m), a = !0, f = 0; f < r.length; f++) r[f] != m[f] && (a = !1);
                        return a ? E : []
                    }
                }
            })
        },
        1593: function(t, n, i) {
            void 0 !== t.exports && (t.exports.ECP = function(t) {
                "use strict";
                var n = function() {
                    this.x = new t.FP(0), this.y = new t.FP(1), this.z = new t.FP(0), this.INF = !0
                };
                return n.WEIERSTRASS = 0, n.EDWARDS = 1, n.MONTGOMERY = 2, n.NOT = 0, n.BN = 1, n.BLS = 2, n.D_TYPE = 0, n.M_TYPE = 1, n.POSITIVEX = 0, n.NEGATIVEX = 1, n.CURVETYPE = t.config["@CT"], n.CURVE_PAIRING_TYPE = t.config["@PF"], n.SEXTIC_TWIST = t.config["@ST"], n.SIGN_OF_X = t.config["@SX"], n.prototype = {
                    is_infinity: function() {
                        return !!this.INF || (this.x.reduce(), this.z.reduce(), n.CURVETYPE == n.EDWARDS ? (this.y.reduce(), this.INF = this.x.iszilch() && this.y.equals(this.z)) : n.CURVETYPE == n.WEIERSTRASS ? (this.y.reduce(), this.INF = this.x.iszilch() && this.z.iszilch()) : n.CURVETYPE == n.MONTGOMERY && (this.INF = this.z.iszilch()), this.INF)
                    },
                    cswap: function(t, i) {
                        var s;
                        this.x.cswap(t.x, i), n.CURVETYPE != n.MONTGOMERY && this.y.cswap(t.y, i), this.z.cswap(t.z, i), s = 0 !== i, s &= this.INF ^ t.INF, this.INF ^= s, t.INF ^= s
                    },
                    cmove: function(t, i) {
                        var s;
                        this.x.cmove(t.x, i), n.CURVETYPE != n.MONTGOMERY && this.y.cmove(t.y, i), this.z.cmove(t.z, i), s = 0 !== i, this.INF ^= (this.INF ^ t.INF) & s
                    },
                    select: function(t, i) {
                        var s = new n,
                            o = i >> 31,
                            r = (i ^ o) - o;
                        r = (r - 1) / 2, this.cmove(t[0], n.teq(r, 0)), this.cmove(t[1], n.teq(r, 1)), this.cmove(t[2], n.teq(r, 2)), this.cmove(t[3], n.teq(r, 3)), this.cmove(t[4], n.teq(r, 4)), this.cmove(t[5], n.teq(r, 5)), this.cmove(t[6], n.teq(r, 6)), this.cmove(t[7], n.teq(r, 7)), s.copy(this), s.neg(), this.cmove(s, 1 & o)
                    },
                    equals: function(i) {
                        var s, o;
                        return !(!this.is_infinity() || !i.is_infinity()) || !this.is_infinity() && !i.is_infinity() && (s = new t.FP(0), o = new t.FP(0), s.copy(this.x), s.mul(i.z), s.reduce(), o.copy(i.x), o.mul(this.z), o.reduce(), !!s.equals(o) && !(n.CURVETYPE != n.MONTGOMERY && (s.copy(this.y), s.mul(i.z), s.reduce(), o.copy(i.y), o.mul(this.z), o.reduce(), !s.equals(o))))
                    },
                    copy: function(t) {
                        this.x.copy(t.x), n.CURVETYPE != n.MONTGOMERY && this.y.copy(t.y), this.z.copy(t.z), this.INF = t.INF
                    },
                    neg: function() {
                        n.CURVETYPE == n.WEIERSTRASS ? (this.y.neg(), this.y.norm()) : n.CURVETYPE == n.EDWARDS && (this.x.neg(), this.x.norm())
                    },
                    inf: function() {
                        this.INF = !0, this.x.zero(), n.CURVETYPE != n.MONTGOMERY && this.y.one(), n.CURVETYPE != n.EDWARDS ? this.z.zero() : this.z.one()
                    },
                    setxy: function(i, s) {
                        var o, r;
                        this.x = new t.FP(0), this.x.bcopy(i), this.y = new t.FP(0), this.y.bcopy(s), this.z = new t.FP(1), o = n.RHS(this.x), n.CURVETYPE == n.MONTGOMERY ? 1 == o.jacobi() ? this.INF = !1 : this.inf() : ((r = new t.FP(0)).copy(this.y), r.sqr(), r.equals(o) ? this.INF = !1 : this.inf())
                    },
                    setxi: function(i, s) {
                        var o, r;
                        this.x = new t.FP(0), this.x.bcopy(i), o = n.RHS(this.x), this.z = new t.FP(1), 1 == o.jacobi() ? ((r = o.sqrt()).redc().parity() != s && r.neg(), this.y = r, this.INF = !1) : this.inf()
                    },
                    setx: function(i) {
                        var s;
                        this.x = new t.FP(0), this.x.bcopy(i), s = n.RHS(this.x), this.z = new t.FP(1), 1 == s.jacobi() ? (n.CURVETYPE != n.MONTGOMERY && (this.y = s.sqrt()), this.INF = !1) : this.INF = !0
                    },
                    affine: function() {
                        var i;
                        this.is_infinity() || (i = new t.FP(1), this.z.equals(i) || (this.z.inverse(), n.CURVETYPE != n.EDWARDS && n.CURVETYPE != n.WEIERSTRASS || (this.x.mul(this.z), this.x.reduce(), this.y.mul(this.z), this.y.reduce(), this.z = i), n.CURVETYPE == n.MONTGOMERY && (this.x.mul(this.z), this.x.reduce(), this.z = i)))
                    },
                    getX: function() {
                        return this.affine(), this.x.redc()
                    },
                    getY: function() {
                        return this.affine(), this.y.redc()
                    },
                    getS: function() {
                        return this.affine(), this.getY().parity()
                    },
                    getx: function() {
                        return this.x
                    },
                    gety: function() {
                        return this.y
                    },
                    getz: function() {
                        return this.z
                    },
                    toBytes: function(i) {
                        var s, o = [];
                        for (i[0] = n.CURVETYPE != n.MONTGOMERY ? 4 : 2, this.affine(), this.x.redc().toBytes(o), s = 0; s < t.BIG.MODBYTES; s++) i[s + 1] = o[s];
                        if (n.CURVETYPE != n.MONTGOMERY)
                            for (this.y.redc().toBytes(o), s = 0; s < t.BIG.MODBYTES; s++) i[s + t.BIG.MODBYTES + 1] = o[s]
                    },
                    toString: function() {
                        return this.is_infinity() ? "infinity" : (this.affine(), n.CURVETYPE == n.MONTGOMERY ? "(" + this.x.redc().toString() + ")" : "(" + this.x.redc().toString() + "," + this.y.redc().toString() + ")")
                    },
                    dbl: function() {
                        var i, s, o, r, h, e, c, u, a, f, p, w, d, y, m, E;
                        if (n.CURVETYPE == n.WEIERSTRASS) {
                            if (this.INF) return;
                            0 == t.ROM_CURVE.CURVE_A ? ((i = new t.FP(0)).copy(this.y), i.sqr(), (s = new t.FP(0)).copy(this.y), s.mul(this.z), (o = new t.FP(0)).copy(this.z), o.sqr(), this.z.copy(i), this.z.add(i), this.z.norm(), this.z.add(this.z), this.z.add(this.z), this.z.norm(), o.imul(3 * t.ROM_CURVE.CURVE_B_I), (h = new t.FP(0)).copy(o), h.mul(this.z), (e = new t.FP(0)).copy(i), e.add(o), e.norm(), this.z.mul(s), s.copy(o), s.add(o), o.add(s), i.sub(o), i.norm(), e.mul(i), e.add(h), s.copy(this.x), s.mul(this.y), this.x.copy(i), this.x.norm(), this.x.mul(s), this.x.add(this.x), this.x.norm(), this.y.copy(e), this.y.norm()) : ((i = new t.FP(0)).copy(this.x), (s = new t.FP(0)).copy(this.y), (o = new t.FP(0)).copy(this.z), (r = new t.FP(0)).copy(this.x), (c = new t.FP(0)).copy(this.z), e = new t.FP(0), h = new t.FP(0), u = new t.FP(0), 0 == t.ROM_CURVE.CURVE_B_I && u.rcopy(t.ROM_CURVE.CURVE_B), i.sqr(), s.sqr(), o.sqr(), r.mul(this.y), r.add(r), r.norm(), c.mul(this.x), c.add(c), c.norm(), e.copy(o), 0 == t.ROM_CURVE.CURVE_B_I ? e.mul(u) : e.imul(t.ROM_CURVE.CURVE_B_I), e.sub(c), h.copy(e), h.add(e), h.norm(), e.add(h), h.copy(s), h.sub(e), h.norm(), e.add(s), e.norm(), e.mul(h), h.mul(r), r.copy(o), r.add(o), o.add(r), 0 == t.ROM_CURVE.CURVE_B_I ? c.mul(u) : c.imul(t.ROM_CURVE.CURVE_B_I), c.sub(o), c.sub(i), c.norm(), r.copy(c), r.add(c), c.add(r), c.norm(), r.copy(i), r.add(i), i.add(r), i.sub(o), i.norm(), i.mul(c), e.add(i), i.copy(this.y), i.mul(this.z), i.add(i), i.norm(), c.mul(i), h.sub(c), i.add(i), i.norm(), s.add(s), s.norm(), c.copy(i), c.mul(s), this.x.copy(h), this.x.norm(), this.y.copy(e), this.y.norm(), this.z.copy(c), this.z.norm())
                        }
                        n.CURVETYPE == n.EDWARDS && ((a = new t.FP(0)).copy(this.x), (f = new t.FP(0)).copy(this.y), (p = new t.FP(0)).copy(this.z), w = new t.FP(0), this.x.mul(this.y), this.x.add(this.x), this.x.norm(), a.sqr(), f.sqr(), -1 == t.ROM_CURVE.CURVE_A && a.neg(), this.y.copy(a), this.y.add(f), this.y.norm(), p.sqr(), p.add(p), this.z.copy(this.y), w.copy(this.y), w.sub(p), w.norm(), this.x.mul(w), a.sub(f), a.norm(), this.y.mul(a), this.z.mul(w)), n.CURVETYPE == n.MONTGOMERY && ((d = new t.FP(0)).copy(this.x), (y = new t.FP(0)).copy(this.x), m = new t.FP(0), E = new t.FP(0), a = new t.FP(0), d.add(this.z), d.norm(), m.copy(d), m.sqr(), y.sub(this.z), y.norm(), E.copy(y), E.sqr(), a.copy(m), a.sub(E), a.norm(), this.x.copy(m), this.x.mul(E), d.copy(a), d.imul(t.ROM_CURVE.CURVE_A + 2 >> 2), E.add(d), E.norm(), this.z.copy(E), this.z.mul(a))
                    },
                    add: function(i) {
                        var s, o, r, h, e, c, u, a, f, p, w, d, y, m, E, I;
                        this.INF ? this.copy(i) : i.INF || (n.CURVETYPE == n.WEIERSTRASS && (0 == t.ROM_CURVE.CURVE_A ? (s = 3 * t.ROM_CURVE.CURVE_B_I, (o = new t.FP(0)).copy(this.x), o.mul(i.x), (r = new t.FP(0)).copy(this.y), r.mul(i.y), (h = new t.FP(0)).copy(this.z), h.mul(i.z), (e = new t.FP(0)).copy(this.x), e.add(this.y), e.norm(), (c = new t.FP(0)).copy(i.x), c.add(i.y), c.norm(), e.mul(c), c.copy(o), c.add(r), e.sub(c), e.norm(), c.copy(this.y), c.add(this.z), c.norm(), (u = new t.FP(0)).copy(i.y), u.add(i.z), u.norm(), c.mul(u), u.copy(r), u.add(h), c.sub(u), c.norm(), u.copy(this.x), u.add(this.z), u.norm(), (a = new t.FP(0)).copy(i.x), a.add(i.z), a.norm(), u.mul(a), a.copy(o), a.add(h), a.rsub(u), a.norm(), u.copy(o), u.add(o), o.add(u), o.norm(), h.imul(s), (f = new t.FP(0)).copy(r), f.add(h), f.norm(), r.sub(h), r.norm(), a.imul(s), u.copy(a), u.mul(c), h.copy(e), h.mul(r), u.rsub(h), a.mul(o), r.mul(f), a.add(r), o.mul(e), f.mul(c), f.add(o), this.x.copy(u), this.x.norm(), this.y.copy(a), this.y.norm(), this.z.copy(f), this.z.norm()) : ((o = new t.FP(0)).copy(this.x), (r = new t.FP(0)).copy(this.y), (h = new t.FP(0)).copy(this.z), (e = new t.FP(0)).copy(this.x), (c = new t.FP(0)).copy(i.x), f = new t.FP(0), (a = new t.FP(0)).copy(i.x), (u = new t.FP(0)).copy(i.y), s = new t.FP(0), 0 == t.ROM_CURVE.CURVE_B_I && s.rcopy(t.ROM_CURVE.CURVE_B), o.mul(i.x), r.mul(i.y), h.mul(i.z), e.add(this.y), e.norm(), c.add(i.y), c.norm(), e.mul(c), c.copy(o), c.add(r), e.sub(c), e.norm(), c.copy(this.y), c.add(this.z), c.norm(), u.add(i.z), u.norm(), c.mul(u), u.copy(r), u.add(h), c.sub(u), c.norm(), u.copy(this.x), u.add(this.z), u.norm(), a.add(i.z), a.norm(), u.mul(a), a.copy(o), a.add(h), a.rsub(u), a.norm(), f.copy(h), 0 == t.ROM_CURVE.CURVE_B_I ? f.mul(s) : f.imul(t.ROM_CURVE.CURVE_B_I), u.copy(a), u.sub(f), u.norm(), f.copy(u), f.add(u), u.add(f), f.copy(r), f.sub(u), f.norm(), u.add(r), u.norm(), 0 == t.ROM_CURVE.CURVE_B_I ? a.mul(s) : a.imul(t.ROM_CURVE.CURVE_B_I), r.copy(h), r.add(h), h.add(r), a.sub(h), a.sub(o), a.norm(), r.copy(a), r.add(a), a.add(r), a.norm(), r.copy(o), r.add(o), o.add(r), o.sub(h), o.norm(), r.copy(c), r.mul(a), h.copy(o), h.mul(a), a.copy(u), a.mul(f), a.add(h), u.mul(e), u.sub(r), f.mul(c), r.copy(e), r.mul(o), f.add(r), this.x.copy(u), this.x.norm(), this.y.copy(a), this.y.norm(), this.z.copy(f), this.z.norm())), n.CURVETYPE == n.EDWARDS && ((p = new t.FP(0)).copy(this.z), w = new t.FP(0), (d = new t.FP(0)).copy(this.x), (y = new t.FP(0)).copy(this.y), m = new t.FP(0), E = new t.FP(0), I = new t.FP(0), p.mul(i.z), w.copy(p), w.sqr(), d.mul(i.x), y.mul(i.y), m.copy(d), m.mul(y), 0 == t.ROM_CURVE.CURVE_B_I ? ((s = new t.FP(0)).rcopy(t.ROM_CURVE.CURVE_B), m.mul(s)) : m.imul(t.ROM_CURVE.CURVE_B_I), E.copy(w), E.sub(m), I.copy(w), I.add(m), 1 == t.ROM_CURVE.CURVE_A && (m.copy(y), m.sub(d)), d.add(y), w.copy(this.x), w.add(this.y), y.copy(i.x), y.add(i.y), w.norm(), y.norm(), w.mul(y), w.sub(d), w.norm(), E.norm(), w.mul(E), this.x.copy(p), this.x.mul(w), I.norm(), 1 == t.ROM_CURVE.CURVE_A && (m.norm(), d.copy(m), d.mul(I)), -1 == t.ROM_CURVE.CURVE_A && (d.norm(), d.mul(I)), this.y.copy(p), this.y.mul(d), this.z.copy(E), this.z.mul(I)))
                    },
                    dadd: function(n, i) {
                        var s, o, r, h, e, c;
                        (s = new t.FP(0)).copy(this.x), (o = new t.FP(0)).copy(this.x), (r = new t.FP(0)).copy(n.x), (h = new t.FP(0)).copy(n.x), e = new t.FP(0), c = new t.FP(0), s.add(this.z), o.sub(this.z), r.add(n.z), h.sub(n.z), h.norm(), s.norm(), e.copy(h), e.mul(s), r.norm(), o.norm(), c.copy(r), c.mul(o), s.copy(e), s.add(c), s.norm(), s.sqr(), o.copy(e), o.sub(c), o.norm(), o.sqr(), this.x.copy(s), this.z.copy(i.x), this.z.mul(o)
                    },
                    sub: function(t) {
                        t.neg(), this.add(t), t.neg()
                    },
                    pinmul: function(i, s) {
                        var o, r, h, e, c;
                        if (n.CURVETYPE == n.MONTGOMERY) return this.mul(new t.BIG(i));
                        for (h = new n, e = new n, (c = new n).copy(this), o = s - 1; o >= 0; o--) r = i >> o & 1, h.copy(c), h.add(e), e.cswap(c, r), c.copy(h), e.dbl(), e.cswap(c, r);
                        return h.copy(e), h.affine(), h
                    },
                    mul: function(i) {
                        var s, o, r, h, e, c, u, a, f, p, w, d, y, m, E;
                        if (i.iszilch() || this.is_infinity()) return new n;
                        if (s = new n, n.CURVETYPE == n.MONTGOMERY) {
                            for (o = new n, (r = new n).copy(this), (h = new n).copy(this), h.dbl(), o.copy(this), o.affine(), w = (y = i.nbits()) - 2; w >= 0; w--) d = i.bit(w), s.copy(h), s.dadd(r, o), r.cswap(h, d), h.copy(s), r.dbl(), r.cswap(h, d);
                            s.copy(r)
                        } else {
                            for (e = new t.BIG, c = new t.BIG, u = new n, a = new n, f = [], p = [], this.affine(), u.copy(this), u.dbl(), f[0] = new n, f[0].copy(this), w = 1; w < 8; w++) f[w] = new n, f[w].copy(f[w - 1]), f[w].add(u);
                            for (c.copy(i), m = c.parity(), c.inc(1), c.norm(), E = c.parity(), e.copy(c), e.inc(1), e.norm(), c.cmove(e, m), u.cmove(this, E), a.copy(u), y = 1 + Math.floor((c.nbits() + 3) / 4), w = 0; w < y; w++) p[w] = c.lastbits(5) - 16, c.dec(p[w]), c.norm(), c.fshr(4);
                            for (p[y] = c.lastbits(5), s.copy(f[Math.floor((p[y] - 1) / 2)]), w = y - 1; w >= 0; w--) u.select(f, p[w]), s.dbl(), s.dbl(), s.dbl(), s.dbl(), s.add(u);
                            s.sub(a)
                        }
                        return s.affine(), s
                    },
                    mul2: function(i, s, o) {
                        var r, h, e, c, u, a, f = new t.BIG,
                            p = new t.BIG,
                            w = new t.BIG,
                            d = new n,
                            y = new n,
                            m = new n,
                            E = [],
                            I = [];
                        for (this.affine(), s.affine(), f.copy(i), p.copy(o), E[1] = new n, E[1].copy(this), E[1].sub(s), E[2] = new n, E[2].copy(this), E[2].add(s), d.copy(s), d.dbl(), E[0] = new n, E[0].copy(E[1]), E[0].sub(d), E[3] = new n, E[3].copy(E[2]), E[3].add(d), y.copy(this), y.dbl(), E[5] = new n, E[5].copy(E[1]), E[5].add(y), E[6] = new n, E[6].copy(E[2]), E[6].add(y), E[4] = new n, E[4].copy(E[5]), E[4].sub(d), E[7] = new n, E[7].copy(E[6]), E[7].add(d), h = f.parity(), f.inc(1), f.norm(), e = f.parity(), w.copy(f), w.inc(1), w.norm(), f.cmove(w, h), y.cmove(this, e), m.copy(y), h = p.parity(), p.inc(1), p.norm(), e = p.parity(), w.copy(p), w.inc(1), w.norm(), p.cmove(w, h), d.cmove(s, e), m.add(d), w.copy(f), w.add(p), w.norm(), c = 1 + Math.floor((w.nbits() + 1) / 2), r = 0; r < c; r++) u = f.lastbits(3) - 4, f.dec(u), f.norm(), f.fshr(2), a = p.lastbits(3) - 4, p.dec(a), p.norm(), p.fshr(2), I[r] = 4 * u + a;
                        for (I[c] = 4 * f.lastbits(3) + p.lastbits(3), d.copy(E[Math.floor((I[c] - 1) / 2)]), r = c - 1; r >= 0; r--) y.select(E, I[r]), d.dbl(), d.dbl(), d.add(y);
                        return d.sub(m), d.affine(), d
                    }
                }, n.teq = function(t, n) {
                    var i = t ^ n;
                    return (i -= 1) >> 31 & 1
                }, n.fromBytes = function(i) {
                    var s, o, r, h = [],
                        e = new n,
                        c = new t.BIG(0);
                    for (c.rcopy(t.ROM_FIELD.Modulus), r = 0; r < t.BIG.MODBYTES; r++) h[r] = i[r + 1];
                    if (s = t.BIG.fromBytes(h), t.BIG.comp(s, c) >= 0) return e;
                    if (4 == i[0]) {
                        for (r = 0; r < t.BIG.MODBYTES; r++) h[r] = i[r + t.BIG.MODBYTES + 1];
                        return o = t.BIG.fromBytes(h), t.BIG.comp(o, c) >= 0 ? e : (e.setxy(s, o), e)
                    }
                    return e.setx(s), e
                }, n.RHS = function(i) {
                    var s, o, r, h, e = new t.FP(0);
                    return i.norm(), e.copy(i), e.sqr(), n.CURVETYPE == n.WEIERSTRASS ? ((s = new t.FP(0)).rcopy(t.ROM_CURVE.CURVE_B), e.mul(i), -3 == t.ROM_CURVE.CURVE_A && ((o = new t.FP(0)).copy(i), o.imul(3), o.neg(), o.norm(), e.add(o)), e.add(s)) : n.CURVETYPE == n.EDWARDS ? ((s = new t.FP(0)).rcopy(t.ROM_CURVE.CURVE_B), r = new t.FP(1), s.mul(e), s.sub(r), -1 == t.ROM_CURVE.CURVE_A && e.neg(), e.sub(r), e.norm(), s.inverse(), e.mul(s)) : n.CURVETYPE == n.MONTGOMERY && ((h = new t.FP(0)).copy(e), h.mul(i), e.imul(t.ROM_CURVE.CURVE_A), e.add(h), e.add(i)), e.reduce(), e
                }, n.mapit = function(i) {
                    var s, o = new t.BIG(0),
                        r = t.BIG.fromBytes(i),
                        h = new n;
                    for (o.rcopy(t.ROM_FIELD.Modulus), r.mod(o); h.setxi(r, 0), h.is_infinity();) r.inc(1), r.norm();
                    return n.CURVE_PAIRING_TYPE != n.BN && ((s = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Cof), h = h.mul(s)), h
                }, n
            })
        },
        1594: function(t, n, i) {
            void 0 !== t.exports && (t.exports.ECP2 = function(t) {
                "use strict";
                var n = function() {
                    this.x = new t.FP2(0), this.y = new t.FP2(1), this.z = new t.FP2(0), this.INF = !0
                };
                return n.prototype = {
                    is_infinity: function() {
                        return !!this.INF || (this.x.reduce(), this.y.reduce(), this.z.reduce(), this.INF = this.x.iszilch() && this.z.iszilch(), this.INF)
                    },
                    copy: function(t) {
                        this.x.copy(t.x), this.y.copy(t.y), this.z.copy(t.z), this.INF = t.INF
                    },
                    inf: function() {
                        this.INF = !0, this.x.zero(), this.y.one(), this.z.zero()
                    },
                    cmove: function(t, n) {
                        var i;
                        this.x.cmove(t.x, n), this.y.cmove(t.y, n), this.z.cmove(t.z, n), i = 0 !== n, this.INF ^= (this.INF ^ t.INF) & i
                    },
                    select: function(t, i) {
                        var s = new n,
                            o = i >> 31,
                            r = (i ^ o) - o;
                        r = (r - 1) / 2, this.cmove(t[0], n.teq(r, 0)), this.cmove(t[1], n.teq(r, 1)), this.cmove(t[2], n.teq(r, 2)), this.cmove(t[3], n.teq(r, 3)), this.cmove(t[4], n.teq(r, 4)), this.cmove(t[5], n.teq(r, 5)), this.cmove(t[6], n.teq(r, 6)), this.cmove(t[7], n.teq(r, 7)), s.copy(this), s.neg(), this.cmove(s, 1 & o)
                    },
                    equals: function(n) {
                        var i, s;
                        return !(!this.is_infinity() || !n.is_infinity()) || !this.is_infinity() && !n.is_infinity() && ((i = new t.FP2(0)).copy(this.x), (s = new t.FP2(0)).copy(n.x), i.copy(this.x), i.mul(n.z), i.reduce(), s.copy(n.x), s.mul(this.z), s.reduce(), !!i.equals(s) && (i.copy(this.y), i.mul(n.z), i.reduce(), s.copy(n.y), s.mul(this.z), s.reduce(), !!i.equals(s)))
                    },
                    neg: function() {
                        this.y.norm(), this.y.neg(), this.y.norm()
                    },
                    affine: function() {
                        var n;
                        if (!this.is_infinity()) {
                            if (n = new t.FP2(1), this.z.equals(n)) return this.x.reduce(), void this.y.reduce();
                            this.z.inverse(), this.x.mul(this.z), this.x.reduce(), this.y.mul(this.z), this.y.reduce(), this.z.copy(n)
                        }
                    },
                    getX: function() {
                        return this.affine(), this.x
                    },
                    getY: function() {
                        return this.affine(), this.y
                    },
                    getx: function() {
                        return this.x
                    },
                    gety: function() {
                        return this.y
                    },
                    getz: function() {
                        return this.z
                    },
                    toBytes: function(n) {
                        var i, s = [];
                        for (this.affine(), this.x.getA().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i] = s[i];
                        for (this.x.getB().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + t.BIG.MODBYTES] = s[i];
                        for (this.y.getA().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 2 * t.BIG.MODBYTES] = s[i];
                        for (this.y.getB().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 3 * t.BIG.MODBYTES] = s[i]
                    },
                    toString: function() {
                        return this.is_infinity() ? "infinity" : (this.affine(), "(" + this.x.toString() + "," + this.y.toString() + ")")
                    },
                    setxy: function(i, s) {
                        var o, r;
                        this.x.copy(i), this.y.copy(s), this.z.one(), o = n.RHS(this.x), (r = new t.FP2(this.y)).sqr(), r.equals(o) ? this.INF = !1 : this.inf()
                    },
                    setx: function(t) {
                        var i;
                        this.x.copy(t), this.z.one(), (i = n.RHS(this.x)).sqrt() ? (this.y.copy(i), this.INF = !1) : this.inf()
                    },
                    frob: function(n) {
                        var i;
                        this.INF || ((i = new t.FP2(n)).sqr(), this.x.conj(), this.y.conj(), this.z.conj(), this.z.reduce(), this.x.mul(i), this.y.mul(i), this.y.mul(n))
                    },
                    dbl: function() {
                        var n, i, s, o, r, h;
                        return this.INF ? -1 : ((n = new t.FP2(0)).copy(this.y), t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && (n.mul_ip(), n.norm()), (i = new t.FP2(0)).copy(this.y), i.sqr(), t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && i.mul_ip(), (s = new t.FP2(0)).copy(n), s.mul(this.z), (o = new t.FP2(0)).copy(this.z), o.sqr(), this.z.copy(i), this.z.add(i), this.z.norm(), this.z.add(this.z), this.z.add(this.z), this.z.norm(), o.imul(3 * t.ROM_CURVE.CURVE_B_I), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (o.mul_ip(), o.norm()), (r = new t.FP2(0)).copy(o), r.mul(this.z), (h = new t.FP2(0)).copy(i), h.add(o), h.norm(), this.z.mul(s), s.copy(o), s.add(o), o.add(s), o.norm(), i.sub(o), i.norm(), h.mul(i), h.add(r), s.copy(this.x), s.mul(n), this.x.copy(i), this.x.norm(), this.x.mul(s), this.x.add(this.x), this.x.norm(), this.y.copy(h), this.y.norm(), 1)
                    },
                    add: function(n) {
                        var i, s, o, r, h, e, c, u, a;
                        return this.INF ? (this.copy(n), -1) : n.INF ? -1 : (i = 3 * t.ROM_CURVE.CURVE_B_I, (s = new t.FP2(0)).copy(this.x), s.mul(n.x), (o = new t.FP2(0)).copy(this.y), o.mul(n.y), (r = new t.FP2(0)).copy(this.z), r.mul(n.z), (h = new t.FP2(0)).copy(this.x), h.add(this.y), h.norm(), (e = new t.FP2(0)).copy(n.x), e.add(n.y), e.norm(), h.mul(e), e.copy(s), e.add(o), h.sub(e), h.norm(), t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && (h.mul_ip(), h.norm()), e.copy(this.y), e.add(this.z), e.norm(), (c = new t.FP2(0)).copy(n.y), c.add(n.z), c.norm(), e.mul(c), c.copy(o), c.add(r), e.sub(c), e.norm(), t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && (e.mul_ip(), e.norm()), c.copy(this.x), c.add(this.z), c.norm(), (u = new t.FP2(0)).copy(n.x), u.add(n.z), u.norm(), c.mul(u), u.copy(s), u.add(r), u.rsub(c), u.norm(), t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && (s.mul_ip(), s.norm(), o.mul_ip(), o.norm()), c.copy(s), c.add(s), s.add(c), s.norm(), r.imul(i), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && r.mul_ip(), (a = new t.FP2(0)).copy(o), a.add(r), a.norm(), o.sub(r), o.norm(), u.imul(i), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (u.mul_ip(), u.norm()), c.copy(u), c.mul(e), r.copy(h), r.mul(o), c.rsub(r), u.mul(s), o.mul(a), u.add(o), s.mul(h), a.mul(e), a.add(s), this.x.copy(c), this.x.norm(), this.y.copy(u), this.y.norm(), this.z.copy(a), this.z.norm(), 0)
                    },
                    sub: function(t) {
                        var n;
                        return t.neg(), n = this.add(t), t.neg(), n
                    },
                    mul: function(i) {
                        var s, o, r, h, e = new t.BIG,
                            c = new t.BIG,
                            u = new n,
                            a = new n,
                            f = new n,
                            p = [],
                            w = [];
                        if (this.is_infinity()) return new n;
                        for (this.affine(), f.copy(this), f.dbl(), p[0] = new n, p[0].copy(this), s = 1; s < 8; s++) p[s] = new n, p[s].copy(p[s - 1]), p[s].add(f);
                        for (c.copy(i), r = c.parity(), c.inc(1), c.norm(), h = c.parity(), e.copy(c), e.inc(1), e.norm(), c.cmove(e, r), f.cmove(this, h), u.copy(f), o = 1 + Math.floor((c.nbits() + 3) / 4), s = 0; s < o; s++) w[s] = c.lastbits(5) - 16, c.dec(w[s]), c.norm(), c.fshr(4);
                        for (w[o] = c.lastbits(5), a.copy(p[Math.floor((w[o] - 1) / 2)]), s = o - 1; s >= 0; s--) f.select(p, w[s]), a.dbl(), a.dbl(), a.dbl(), a.dbl(), a.add(f);
                        return a.sub(u), a.affine(), a
                    }
                }, n.fromBytes = function(i) {
                    var s, o, r, h, e, c, u = [];
                    for (r = 0; r < t.BIG.MODBYTES; r++) u[r] = i[r];
                    for (s = t.BIG.fromBytes(u), r = 0; r < t.BIG.MODBYTES; r++) u[r] = i[r + t.BIG.MODBYTES];
                    for (o = t.BIG.fromBytes(u), h = new t.FP2(s, o), r = 0; r < t.BIG.MODBYTES; r++) u[r] = i[r + 2 * t.BIG.MODBYTES];
                    for (s = t.BIG.fromBytes(u), r = 0; r < t.BIG.MODBYTES; r++) u[r] = i[r + 3 * t.BIG.MODBYTES];
                    return o = t.BIG.fromBytes(u), e = new t.FP2(s, o), (c = new n).setxy(h, e), c
                }, n.RHS = function(n) {
                    var i, s, o;
                    return n.norm(), (i = new t.FP2(n)).sqr(), (s = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_B), o = new t.FP2(s), t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && o.div_ip(), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (o.norm(), o.mul_ip(), o.norm()), i.mul(n), i.add(o), i.reduce(), i
                }, n.mul4 = function(i, s) {
                    var o, r, h, e = [],
                        c = new n,
                        u = new n,
                        a = new n,
                        f = [],
                        p = new t.BIG,
                        w = [],
                        d = [];
                    for (o = 0; o < 4; o++) w[o] = new t.BIG(s[o]), i[o].affine();
                    for (f[0] = new n, f[0].copy(i[0]), f[0].sub(i[1]), f[1] = new n, f[1].copy(f[0]), f[2] = new n, f[2].copy(f[0]), f[3] = new n, f[3].copy(f[0]), f[4] = new n, f[4].copy(i[0]), f[4].add(i[1]), f[5] = new n, f[5].copy(f[4]), f[6] = new n, f[6].copy(f[4]), f[7] = new n, f[7].copy(f[4]), c.copy(i[2]), c.sub(i[3]), f[1].sub(c), f[2].add(c), f[5].sub(c), f[6].add(c), c.copy(i[2]), c.add(i[3]), f[0].sub(c), f[3].add(c), f[4].sub(c), f[7].add(c), p.zero(), u.inf(), o = 0; o < 4; o++) 0 == w[o].parity() && (w[o].inc(1), w[o].norm(), u.add(i[o])), p.add(w[o]), p.norm();
                    for (h = 1 + p.nbits(), r = 0; r < h; r++) {
                        for (o = 0; o < 4; o++) e[o] = w[o].lastbits(2) - 2, w[o].dec(e[o]), w[o].norm(), w[o].fshr(1);
                        d[r] = 8 * e[0] + 4 * e[1] + 2 * e[2] + e[3]
                    }
                    for (d[h] = 8 * w[0].lastbits(2) + 4 * w[1].lastbits(2) + 2 * w[2].lastbits(2) + w[3].lastbits(2), a.copy(f[Math.floor((d[h] - 1) / 2)]), o = h - 1; o >= 0; o--) c.select(f, d[o]), a.dbl(), a.add(c);
                    return a.sub(u), a.affine(), a
                }, n.teq = function(t, n) {
                    var i = t ^ n;
                    return (i -= 1) >> 31 & 1
                }, n.mapit = function(i) {
                    var s, o, r, h, e, c, u, a, f, p, w;
                    for ((s = new t.BIG(0)).rcopy(t.ROM_FIELD.Modulus), o = t.BIG.fromBytes(i), r = new t.BIG(1), o.mod(s); u = new t.FP2(r, o), (h = new n).setx(u), h.is_infinity();) o.inc(1), o.norm();
                    return (p = new t.BIG(0)).rcopy(t.ROM_FIELD.Fra), (w = new t.BIG(0)).rcopy(t.ROM_FIELD.Frb), u = new t.FP2(p, w), t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (u.inverse(), u.norm()), (o = new t.BIG(0)).rcopy(t.ROM_CURVE.CURVE_Bnx), t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN && ((e = new n).copy(h), e = e.mul(o), t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && e.neg(), (c = new n).copy(e), c.dbl(), c.add(e), c.frob(u), h.frob(u), h.frob(u), h.frob(u), h.add(e), h.add(c), e.frob(u), e.frob(u), h.add(e)), t.ECP.CURVE_PAIRING_TYPE == t.ECP.BLS && (a = new n, f = new n, f = (a = h.mul(o)).mul(o), t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && a.neg(), f.sub(a), f.sub(h), a.sub(h), a.frob(u), h.dbl(), h.frob(u), h.frob(u), h.add(f), h.add(a)), h.affine(), h
                }, n
            })
        },
        1595: function(t, n, i) {
            void 0 !== t.exports && (t.exports.FF = function(t) {
                "use strict";
                var n = function(n) {
                    this.v = new Array(n), this.length = n;
                    for (var i = 0; i < n; i++) this.v[i] = new t.BIG(0)
                };
                return n.FFLEN = t.config["@ML"], n.P_MBITS = 8 * t.BIG.MODBYTES, n.P_OMASK = -1 << n.P_MBITS % t.BIG.BASEBITS, n.P_FEXCESS = 1 << t.BIG.BASEBITS * t.BIG.NLEN - n.P_MBITS - 1, n.P_TBITS = n.P_MBITS % t.BIG.BASEBITS, n.FF_BITS = t.BIG.BIGBITS * n.FFLEN, n.HFLEN = n.FFLEN / 2, n.prototype = {
                    P_EXCESS: function() {
                        return 1 + ((this.v[this.length - 1].get(t.BIG.NLEN - 1) & n.P_OMASK) >> n.P_TBITS)
                    },
                    zero: function() {
                        for (var t = 0; t < this.length; t++) this.v[t].zero();
                        return this
                    },
                    getlen: function() {
                        return this.length
                    },
                    set: function(n) {
                        this.zero(), this.v[0].set(0, n & t.BIG.BMASK), this.v[0].set(1, n >> t.BIG.BASEBITS)
                    },
                    copy: function(t) {
                        for (var n = 0; n < this.length; n++) this.v[n].copy(t.v[n])
                    },
                    rcopy: function(t) {
                        for (var n = 0; n < this.length; n++) this.v[n].rcopy(t[n])
                    },
                    dsucopy: function(t) {
                        for (var n = 0; n < t.length; n++) this.v[t.length + n].copy(t.v[n]), this.v[n].zero()
                    },
                    dscopy: function(t) {
                        for (var n = 0; n < t.length; n++) this.v[n].copy(t.v[n]), this.v[t.length + n].zero()
                    },
                    sducopy: function(t) {
                        for (var n = 0; n < this.length; n++) this.v[n].copy(t.v[this.length + n])
                    },
                    one: function() {
                        this.v[0].one();
                        for (var t = 1; t < this.length; t++) this.v[t].zero()
                    },
                    iszilch: function() {
                        for (var t = 0; t < this.length; t++)
                            if (!this.v[t].iszilch()) return !1;
                        return !0
                    },
                    shrw: function(t) {
                        for (var n = 0; n < t; n++) this.v[n].copy(this.v[n + t]), this.v[n + t].zero()
                    },
                    shlw: function(t) {
                        for (var n = 0; n < t; n++) this.v[t + n].copy(this.v[n]), this.v[n].zero()
                    },
                    parity: function() {
                        return this.v[0].parity()
                    },
                    lastbits: function(t) {
                        return this.v[0].lastbits(t)
                    },
                    radd: function(t, n, i, s, o, r) {
                        for (var h = 0; h < r; h++) this.v[t + h].copy(n.v[i + h]), this.v[t + h].add(s.v[o + h])
                    },
                    rinc: function(t, n, i, s) {
                        for (var o = 0; o < s; o++) this.v[t + o].add(n.v[i + o])
                    },
                    rsub: function(t, n, i, s, o, r) {
                        for (var h = 0; h < r; h++) this.v[t + h].copy(n.v[i + h]), this.v[t + h].sub(s.v[o + h])
                    },
                    rdec: function(t, n, i, s) {
                        for (var o = 0; o < s; o++) this.v[t + o].sub(n.v[i + o])
                    },
                    add: function(t) {
                        for (var n = 0; n < this.length; n++) this.v[n].add(t.v[n])
                    },
                    sub: function(t) {
                        for (var n = 0; n < this.length; n++) this.v[n].sub(t.v[n])
                    },
                    revsub: function(t) {
                        for (var n = 0; n < this.length; n++) this.v[n].rsub(t.v[n])
                    },
                    inc: function(t) {
                        this.v[0].inc(t), this.norm()
                    },
                    dec: function(t) {
                        this.v[0].dec(t), this.norm()
                    },
                    rnorm: function(t, i) {
                        var s, o, r = !1;
                        for (i < 0 && (i = -i, r = !0), s = 0; s < i - 1; s++) o = this.v[t + s].norm(), this.v[t + s].xortop(o << n.P_TBITS), this.v[t + s + 1].inc(o);
                        return o = this.v[t + i - 1].norm(), r && this.v[t + i - 1].xortop(o << n.P_TBITS), this
                    },
                    norm: function() {
                        this.rnorm(0, this.length)
                    },
                    shl: function() {
                        var t, i, s = 0;
                        for (t = 0; t < this.length - 1; t++) i = this.v[t].fshl(1), this.v[t].inc(s), this.v[t].xortop(i << n.P_TBITS), s = i;
                        this.v[this.length - 1].fshl(1), this.v[this.length - 1].inc(s)
                    },
                    shr: function() {
                        var t, i;
                        for (t = this.length - 1; t > 0; t--) i = this.v[t].fshr(1), this.v[t - 1].ortop(i << n.P_TBITS);
                        this.v[0].fshr(1)
                    },
                    toString: function() {
                        var t, n = "";
                        for (this.norm(), t = this.length - 1; t >= 0; t--) n += this.v[t].toString();
                        return n
                    },
                    toBytes: function(n) {
                        var i;
                        for (i = 0; i < this.length; i++) this.v[i].tobytearray(n, (this.length - i - 1) * t.BIG.MODBYTES)
                    },
                    karmul: function(n, i, s, o, r, h, e, c) {
                        var u, a;
                        if (1 === c) return i.v[s].norm(), o.v[r].norm(), a = t.BIG.mul(i.v[s], o.v[r]), this.v[n + 1] = a.split(8 * t.BIG.MODBYTES), void this.v[n].copy(a);
                        u = c / 2, this.radd(n, i, s, i, s + u, u), this.rnorm(n, u), this.radd(n + u, o, r, o, r + u, u), this.rnorm(n + u, u), h.karmul(e, this, n, this, n + u, h, e + c, u), this.karmul(n, i, s, o, r, h, e + c, u), this.karmul(n + c, i, s + u, o, r + u, h, e + c, u), h.rdec(e, this, n, c), h.rdec(e, this, n + c, c), this.rinc(n + u, h, e, c), this.rnorm(n, 2 * c)
                    },
                    karsqr: function(n, i, s, o, r, h) {
                        var e, c;
                        if (1 === h) return i.v[s].norm(), c = t.BIG.sqr(i.v[s]), this.v[n + 1].copy(c.split(8 * t.BIG.MODBYTES)), void this.v[n].copy(c);
                        e = h / 2, this.karsqr(n, i, s, o, r + h, e), this.karsqr(n + h, i, s + e, o, r + h, e), o.karmul(r, i, s, i, s + e, o, r + h, e), this.rinc(n + e, o, r, h), this.rinc(n + e, o, r, h), this.rnorm(n + e, h)
                    },
                    karmul_lower: function(n, i, s, o, r, h, e, c) {
                        var u;
                        1 !== c ? (u = c / 2, this.karmul(n, i, s, o, r, h, e + c, u), h.karmul_lower(e, i, s + u, o, r, h, e + c, u), this.rinc(n + u, h, e, u), h.karmul_lower(e, i, s, o, r + u, h, e + c, u), this.rinc(n + u, h, e, u), this.rnorm(n + u, -u)) : this.v[n].copy(t.BIG.smul(i.v[s], o.v[r]))
                    },
                    karmul_upper: function(t, n, i, s) {
                        var o;
                        o = s / 2, this.radd(s, t, 0, t, o, o), this.radd(s + o, n, 0, n, o, o), this.rnorm(s, o), this.rnorm(s + o, o), i.karmul(0, this, s + o, this, s, i, s, o), this.karmul(s, t, o, n, o, i, s, o), i.rdec(0, this, s, s), this.rinc(o, this, 0, o), this.rdec(o, i, 0, o), this.rnorm(0, -s), i.rdec(0, this, 0, s), this.rinc(o, i, 0, s), this.rnorm(o, s)
                    },
                    lmul: function(t) {
                        var i = this.length,
                            s = new n(2 * i),
                            o = new n(i);
                        o.copy(this), this.karmul_lower(0, o, 0, t, 0, s, 0, i)
                    },
                    mod: function(t) {
                        var i = 0;
                        if (this.norm(), !(n.comp(this, t) < 0)) {
                            do {
                                t.shl(), i++
                            } while (n.comp(this, t) >= 0);
                            for (; i > 0;) t.shr(), n.comp(this, t) >= 0 && (this.sub(t), this.norm()), i--
                        }
                    },
                    reduce: function(t, i) {
                        var s = t.length,
                            o = new n(2 * s),
                            r = new n(s),
                            h = new n(s);
                        return r.sducopy(this), h.karmul_lower(0, this, 0, i, 0, o, 0, s), this.karmul_upper(t, h, o, s), h.sducopy(this), r.add(t), r.sub(h), r.norm(), r
                    },
                    dmod: function(i) {
                        var s, o = i.length,
                            r = new n(2 * o),
                            h = new n(2 * o),
                            e = new n(o);
                        for (h.copy(this), h.norm(), r.dsucopy(i), s = t.BIG.BIGBITS * o; n.comp(h, r) >= 0;) h.sub(r), h.norm();
                        for (; s > 0;) r.shr(), n.comp(h, r) >= 0 && (h.sub(r), h.norm()), s--;
                        return e.copy(h), e.mod(i), e
                    },
                    invmodp: function(t) {
                        var i = t.length,
                            s = new n(i),
                            o = new n(i),
                            r = new n(i),
                            h = new n(i),
                            e = new n(i),
                            c = new n(i);
                        for (c.one(), s.copy(this), o.copy(t), r.copy(c), h.zero(); 0 !== n.comp(s, c) && 0 !== n.comp(o, c);) {
                            for (; 0 === s.parity();) s.shr(), 0 !== r.parity() && (r.add(t), r.norm()), r.shr();
                            for (; 0 === o.parity();) o.shr(), 0 !== h.parity() && (h.add(t), h.norm()), h.shr();
                            n.comp(s, o) >= 0 ? (s.sub(o), s.norm(), n.comp(r, h) >= 0 ? r.sub(h) : (e.copy(t), e.sub(h), r.add(e)), r.norm()) : (o.sub(s), o.norm(), n.comp(h, r) >= 0 ? h.sub(r) : (e.copy(t), e.sub(r), h.add(e)), h.norm())
                        }
                        0 === n.comp(s, c) ? this.copy(r) : this.copy(h)
                    },
                    nres: function(i) {
                        var s, o = i.length;
                        1 === o ? ((s = new t.DBIG(0)).hcopy(this.v[0]), s.shl(t.BIG.NLEN * t.BIG.BASEBITS), this.v[0].copy(s.mod(i.v[0]))) : ((s = new n(2 * o)).dsucopy(this), this.copy(s.dmod(i)))
                    },
                    redc: function(i, s) {
                        var o, r = i.length;
                        1 === r ? ((o = new t.DBIG(0)).hcopy(this.v[0]), this.v[0].copy(t.BIG.monty(i.v[0], (1 << t.BIG.BASEBITS) - s.v[0].w[0], o))) : (o = new n(2 * r), this.mod(i), o.dscopy(this), this.copy(o.reduce(i, s)), this.mod(i))
                    },
                    mod2m: function(t) {
                        for (var n = t; n < this.length; n++) this.v[n].zero()
                    },
                    invmod2m: function() {
                        var t, i, s = this.length,
                            o = new n(s),
                            r = new n(s),
                            h = new n(s);
                        for (h.zero(), h.v[0].copy(this.v[0]), h.v[0].invmod2m(), i = 1; i < s; i <<= 1) o.copy(this), o.mod2m(i), (t = n.mul(h, o)).shrw(i), o.copy(t), r.copy(this), r.shrw(i), r.mod2m(i), r.lmul(h), r.mod2m(i), o.add(r), o.norm(), o.lmul(h), o.mod2m(i), r.one(), r.shlw(i), o.revsub(r), o.norm(), o.shlw(i), h.add(o);
                        return h.norm(), h
                    },
                    random: function(n) {
                        var i, s = this.length;
                        for (i = 0; i < s; i++) this.v[i].copy(t.BIG.random(n));
                        for (; this.v[s - 1].nbits() < 8 * t.BIG.MODBYTES;) this.v[s - 1].copy(t.BIG.random(n))
                    },
                    randomnum: function(i, s) {
                        var o, r = this.length,
                            h = new n(2 * r);
                        for (o = 0; o < 2 * r; o++) h.v[o].copy(t.BIG.random(s));
                        this.copy(h.dmod(i))
                    },
                    modmul: function(i, s, o) {
                        var r, h = this.P_EXCESS(),
                            e = i.P_EXCESS(),
                            c = s.length;
                        h + 1 >= Math.floor((n.P_FEXCESS - 1) / (e + 1)) && this.mod(s), 1 === c ? (r = t.BIG.mul(this.v[0], i.v[0]), this.v[0].copy(t.BIG.monty(s.v[0], (1 << t.BIG.BASEBITS) - o.v[0].w[0], r))) : (r = n.mul(this, i), this.copy(r.reduce(s, o)))
                    },
                    modsqr: function(i, s) {
                        var o, r = this.P_EXCESS();
                        r + 1 >= Math.floor((n.P_FEXCESS - 1) / (r + 1)) && this.mod(i), 1 === i.length ? (o = t.BIG.sqr(this.v[0]), this.v[0].copy(t.BIG.monty(i.v[0], (1 << t.BIG.BASEBITS) - s.v[0].w[0], o))) : (o = n.sqr(this), this.copy(o.reduce(i, s)))
                    },
                    skpow: function(i, s) {
                        var o, r, h = s.length,
                            e = new n(h),
                            c = new n(h),
                            u = s.invmod2m();
                        for (this.mod(s), e.one(), c.copy(this), e.nres(s), c.nres(s), o = 8 * t.BIG.MODBYTES * h - 1; o >= 0; o--) r = i.v[Math.floor(o / t.BIG.BIGBITS)].bit(o % t.BIG.BIGBITS), this.copy(e), this.modmul(c, s, u), n.cswap(e, c, r), e.modsqr(s, u), c.copy(this), n.cswap(e, c, r);
                        this.copy(e), this.redc(s, u)
                    },
                    skspow: function(i, s) {
                        var o, r, h = s.length,
                            e = new n(h),
                            c = new n(h),
                            u = s.invmod2m();
                        for (this.mod(s), e.one(), c.copy(this), e.nres(s), c.nres(s), o = 8 * t.BIG.MODBYTES - 1; o >= 0; o--) r = i.bit(o), this.copy(e), this.modmul(c, s, u), n.cswap(e, c, r), e.modsqr(s, u), c.copy(this), n.cswap(e, c, r);
                        this.copy(e), this.redc(s, u)
                    },
                    power: function(t, i) {
                        var s = i.length,
                            o = !0,
                            r = new n(s),
                            h = i.invmod2m();
                        if (r.copy(this), r.nres(i), 2 == t) this.copy(r), this.modsqr(i, h);
                        else
                            for (; t % 2 == 1 && (o ? this.copy(r) : this.modmul(r, i, h), o = !1), 0 !== (t >>= 1);) r.modsqr(i, h);
                        this.redc(i, h)
                    },
                    pow: function(i, s) {
                        var o, r = s.length,
                            h = new n(r),
                            e = s.invmod2m();
                        for (h.copy(this), this.one(), this.nres(s), h.nres(s), o = 8 * t.BIG.MODBYTES * r - 1; o >= 0; o--) this.modsqr(s, e), 1 === i.v[Math.floor(o / t.BIG.BIGBITS)].bit(o % t.BIG.BIGBITS) && this.modmul(h, s, e);
                        this.redc(s, e)
                    },
                    pow2: function(i, s, o, r) {
                        var h, e, c, u = r.length,
                            a = new n(u),
                            f = new n(u),
                            p = new n(u),
                            w = r.invmod2m();
                        for (a.copy(this), f.copy(s), a.nres(r), f.nres(r), p.copy(a), p.modmul(f, r, w), this.one(), this.nres(r), h = 8 * t.BIG.MODBYTES - 1; h >= 0; h--) e = i.bit(h), c = o.bit(h), this.modsqr(r, w), 1 == e ? 1 == c ? this.modmul(p, r, w) : this.modmul(a, r, w) : 1 == c && this.modmul(f, r, w);
                        this.redc(r, w)
                    },
                    cfactor: function(t) {
                        var i, s = this.length,
                            o = new n(s),
                            r = new n(s);
                        r.set(t), o.copy(this), o.norm();
                        do {
                            for (o.sub(r), o.norm(); !o.iszilch() && 0 === o.parity();) o.shr()
                        } while (n.comp(o, r) > 0);
                        return i = o.v[0].get(0), n.igcd(t, i) > 1
                    }
                }, n.comp = function(n, i) {
                    var s, o;
                    for (s = n.length - 1; s >= 0; s--)
                        if (0 !== (o = t.BIG.comp(n.v[s], i.v[s]))) return o;
                    return 0
                }, n.fromBytes = function(n, i) {
                    var s;
                    for (s = 0; s < n.length; s++) n.v[s] = t.BIG.frombytearray(i, (n.length - s - 1) * t.BIG.MODBYTES)
                }, n.cswap = function(t, n, i) {
                    var s;
                    for (s = 0; s < t.length; s++) t.v[s].cswap(n.v[s], i)
                }, n.mul = function(t, i) {
                    var s = t.length,
                        o = new n(2 * s),
                        r = new n(2 * s);
                    return o.karmul(0, t, 0, i, 0, r, 0, s), o
                }, n.sqr = function(t) {
                    var i = t.length,
                        s = new n(2 * i),
                        o = new n(2 * i);
                    return s.karsqr(0, t, 0, o, 0, i), s
                }, n.igcd = function(t, n) {
                    var i;
                    if (0 === n) return t;
                    for (; 0 != (i = t % n);) t = n, n = i;
                    return n
                }, n.prime = function(t, i) {
                    var s, o, r, h = t.length,
                        e = 0,
                        c = new n(h),
                        u = new n(h),
                        a = new n(h),
                        f = new n(h);
                    if (t.norm(), t.cfactor(4849845)) return !1;
                    for (a.one(), f.copy(t), f.sub(a), f.norm(), c.copy(f); 0 === c.parity();) c.shr(), e++;
                    if (0 === e) return !1;
                    for (o = 0; o < 10; o++)
                        if (u.randomnum(t, i), u.pow(c, t), 0 !== n.comp(u, a) && 0 !== n.comp(u, f)) {
                            for (s = !1, r = 1; r < e; r++) {
                                if (u.power(2, t), 0 === n.comp(u, a)) return !1;
                                if (0 === n.comp(u, f)) {
                                    s = !0;
                                    break
                                }
                            }
                            if (!s) return !1
                        } return !0
                }, n
            })
        },
        1596: function(t, n, i) {
            void 0 !== t.exports && (t.exports.FP = function(t) {
                "use strict";
                var n = function(i) {
                    i instanceof n ? (this.f = new t.BIG(i.f), this.XES = i.XES) : (this.f = new t.BIG(i), this.nres())
                };
                return n.NOT_SPECIAL = 0, n.PSEUDO_MERSENNE = 1, n.GENERALISED_MERSENNE = 2, n.MONTGOMERY_FRIENDLY = 3, n.MODBITS = t.config["@NBT"], n.MOD8 = t.config["@M8"], n.MODTYPE = t.config["@MT"], n.FEXCESS = 1 << t.config["@SH"], n.OMASK = -1 << n.TBITS, n.TBITS = n.MODBITS % t.BIG.BASEBITS, n.TMASK = (1 << n.TBITS) - 1, n.prototype = {
                    zero: function() {
                        this.XES = 1, this.f.zero()
                    },
                    rcopy: function(t) {
                        this.f.rcopy(t), this.nres()
                    },
                    bcopy: function(t) {
                        this.f.copy(t), this.nres()
                    },
                    copy: function(t) {
                        this.XES = t.XES, this.f.copy(t.f)
                    },
                    cswap: function(t, n) {
                        this.f.cswap(t.f, n);
                        var i, s = n;
                        i = (s = ~(s - 1)) & (this.XES ^ t.XES), this.XES ^= i, t.XES ^= i
                    },
                    cmove: function(t, n) {
                        var i = n;
                        i = ~(i - 1), this.f.cmove(t.f, n), this.XES ^= (this.XES ^ t.XES) & i
                    },
                    nres: function() {
                        var i, s;
                        return n.MODTYPE != n.PSEUDO_MERSENNE && n.MODTYPE != n.GENERALISED_MERSENNE ? ((i = new t.BIG).rcopy(t.ROM_FIELD.R2modp), s = t.BIG.mul(this.f, i), this.f.copy(n.mod(s)), this.XES = 2) : this.XES = 1, this
                    },
                    redc: function() {
                        var i, s, o = new t.BIG(0);
                        return o.copy(this.f), n.MODTYPE != n.PSEUDO_MERSENNE && n.MODTYPE != n.GENERALISED_MERSENNE && ((i = new t.DBIG(0)).hcopy(this.f), s = n.mod(i), o.copy(s)), o
                    },
                    toString: function() {
                        return this.redc().toString()
                    },
                    iszilch: function() {
                        return this.reduce(), this.f.iszilch()
                    },
                    reduce: function() {
                        var n = new t.BIG(0);
                        n.rcopy(t.ROM_FIELD.Modulus), this.f.mod(n), this.XES = 1
                    },
                    one: function() {
                        return this.f.one(), this.nres()
                    },
                    norm: function() {
                        return this.f.norm()
                    },
                    mul: function(i) {
                        var s;
                        return this.XES * i.XES > n.FEXCESS && this.reduce(), s = t.BIG.mul(this.f, i.f), this.f.copy(n.mod(s)), this.XES = 2, this
                    },
                    imul: function(t) {
                        var i, s, o = !1;
                        return t < 0 && (t = -t, o = !0), n.MODTYPE == n.PSEUDO_MERSENNE || n.MODTYPE == n.GENERALISED_MERSENNE ? (i = this.f.pxmul(t), this.f.copy(n.mod(i)), this.XES = 2) : this.XES * t <= n.FEXCESS ? (this.f.pmul(t), this.XES *= t) : (s = new n(t), this.mul(s)), o && (this.neg(), this.norm()), this
                    },
                    sqr: function() {
                        var i, s;
                        return this.XES * this.XES > n.FEXCESS && this.reduce(), i = t.BIG.sqr(this.f), s = n.mod(i), this.f.copy(s), this.XES = 2, this
                    },
                    add: function(t) {
                        return this.f.add(t.f), this.XES += t.XES, this.XES > n.FEXCESS && this.reduce(), this
                    },
                    neg: function() {
                        var i, s = new t.BIG(0);
                        return s.rcopy(t.ROM_FIELD.Modulus), i = n.logb2(this.XES - 1), s.fshl(i), this.XES = 1 << i, this.f.rsub(s), this.XES > n.FEXCESS && this.reduce(), this
                    },
                    sub: function(t) {
                        var i = new n(0);
                        return i.copy(t), i.neg(), this.add(i), this
                    },
                    rsub: function(t) {
                        var i = new n(0);
                        i.copy(this), i.neg(), this.copy(t), this.add(i)
                    },
                    div2: function() {
                        var n;
                        return 0 === this.f.parity() || ((n = new t.BIG(0)).rcopy(t.ROM_FIELD.Modulus), this.f.add(n), this.f.norm()), this.f.fshr(1), this
                    },
                    inverse: function() {
                        var n = new t.BIG(0),
                            i = this.redc();
                        return n.rcopy(t.ROM_FIELD.Modulus), i.invmodp(n), this.f.copy(i), this.nres()
                    },
                    equals: function(n) {
                        return n.reduce(), this.reduce(), 0 === t.BIG.comp(n.f, this.f)
                    },
                    pow: function(t) {
                        var i, s = new n(1),
                            o = new n(0);
                        for (t.norm(), this.norm(), o.copy(this); i = t.parity(), t.fshr(1), 1 == i && s.mul(o), !t.iszilch();) o.sqr();
                        return s.reduce(), s
                    },
                    jacobi: function() {
                        var n = new t.BIG(0),
                            i = this.redc();
                        return n.rcopy(t.ROM_FIELD.Modulus), i.jacobi(n)
                    },
                    sqrt: function() {
                        var i, s, o, r = new t.BIG(0);
                        return this.reduce(), r.rcopy(t.ROM_FIELD.Modulus), 5 == n.MOD8 ? (r.dec(5), r.norm(), r.shr(3), (i = new n(0)).copy(this), i.f.shl(1), s = i.pow(r), i.mul(s), i.mul(s), i.f.dec(1), (o = new n(0)).copy(this), o.mul(s), o.mul(i), o.reduce(), o) : (r.inc(1), r.norm(), r.shr(2), this.pow(r))
                    }
                }, n.logb2 = function(t) {
                    return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, 16843009 * ((t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135) >>> 24
                }, n.mod = function(i) {
                    var s, o, r, h, e, c, u, a, f, p = new t.BIG(0);
                    if (n.MODTYPE == n.PSEUDO_MERSENNE) return o = i.split(n.MODBITS), p.hcopy(i), r = 1 != t.ROM_FIELD.MConst ? o.pmul(t.ROM_FIELD.MConst) : 0, o.add(p), o.norm(), h = o.w[t.BIG.NLEN - 1], o.w[t.BIG.NLEN - 1] &= n.TMASK, o.inc(t.ROM_FIELD.MConst * ((h >> n.TBITS) + (r << t.BIG.BASEBITS - n.TBITS))), o.norm(), o;
                    if (n.MODTYPE == n.MONTGOMERY_FRIENDLY) {
                        for (s = 0; s < t.BIG.NLEN; s++) i.w[t.BIG.NLEN + s] += i.muladd(i.w[s], t.ROM_FIELD.MConst - 1, i.w[s], t.BIG.NLEN + s - 1);
                        for (s = 0; s < t.BIG.NLEN; s++) p.w[s] = i.w[t.BIG.NLEN + s];
                        p.norm()
                    }
                    return n.MODTYPE == n.GENERALISED_MERSENNE && (o = i.split(n.MODBITS), p.hcopy(i), p.add(o), (f = new t.DBIG(0)).hcopy(o), f.shl(n.MODBITS / 2), e = f.split(n.MODBITS), (c = new t.BIG).hcopy(f), p.add(e), p.add(c), e.shl(n.MODBITS / 2), p.add(e), u = p.w[t.BIG.NLEN - 1] >> n.TBITS, p.w[t.BIG.NLEN - 1] &= n.TMASK, p.w[0] += u, p.w[Math.floor(224 / t.BIG.BASEBITS)] += u << 224 % t.BIG.BASEBITS, p.norm()), n.MODTYPE == n.NOT_SPECIAL && ((a = new t.BIG(0)).rcopy(t.ROM_FIELD.Modulus), p.copy(t.BIG.monty(a, t.ROM_FIELD.MConst, i))), p
                }, n
            })
        },
        1597: function(t, n, i) {
            void 0 !== t.exports && (t.exports.FP12 = function(t) {
                "use strict";
                var n = function(i, s, o) {
                    i instanceof n ? (this.a = new t.FP4(i.a), this.b = new t.FP4(i.b), this.c = new t.FP4(i.c)) : (this.a = new t.FP4(i), this.b = new t.FP4(s), this.c = new t.FP4(o))
                };
                return n.prototype = {
                    reduce: function() {
                        this.a.reduce(), this.b.reduce(), this.c.reduce()
                    },
                    norm: function() {
                        this.a.norm(), this.b.norm(), this.c.norm()
                    },
                    iszilch: function() {
                        return this.reduce(), this.a.iszilch() && this.b.iszilch() && this.c.iszilch()
                    },
                    isunity: function() {
                        var n = new t.FP4(1);
                        return this.a.equals(n) && this.b.iszilch() && this.b.iszilch()
                    },
                    geta: function() {
                        return this.a
                    },
                    getb: function() {
                        return this.b
                    },
                    getc: function() {
                        return this.c
                    },
                    equals: function(t) {
                        return this.a.equals(t.a) && this.b.equals(t.b) && this.c.equals(t.c)
                    },
                    copy: function(t) {
                        this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c)
                    },
                    one: function() {
                        this.a.one(), this.b.zero(), this.c.zero()
                    },
                    conj: function() {
                        this.a.conj(), this.b.nconj(), this.c.conj()
                    },
                    set: function(t, n, i) {
                        this.a.copy(t), this.b.copy(n), this.c.copy(i)
                    },
                    seta: function(t) {
                        this.a.copy(t), this.b.zero(), this.c.zero()
                    },
                    usqr: function() {
                        var n = new t.FP4(this.a),
                            i = new t.FP4(this.c),
                            s = new t.FP4(this.b),
                            o = new t.FP4(0);
                        this.a.sqr(), o.copy(this.a), o.add(this.a), this.a.add(o), n.nconj(), n.add(n), this.a.add(n), i.sqr(), i.times_i(), o.copy(i), o.add(i), i.add(o), s.sqr(), o.copy(s), o.add(s), s.add(o), this.b.conj(), this.b.add(this.b), this.c.nconj(), this.c.add(this.c), this.b.add(i), this.c.add(s), this.reduce()
                    },
                    sqr: function() {
                        var n = new t.FP4(this.a),
                            i = new t.FP4(this.b),
                            s = new t.FP4(this.c),
                            o = new t.FP4(this.a);
                        n.sqr(), i.mul(this.c), i.add(i), s.sqr(), o.mul(this.b), o.add(o), this.c.add(this.a), this.c.add(this.b), this.c.norm(), this.c.sqr(), this.a.copy(n), n.add(i), n.add(s), n.add(o), n.neg(), i.times_i(), s.times_i(), this.a.add(i), this.b.copy(s), this.b.add(o), this.c.add(n), this.norm()
                    },
                    mul: function(n) {
                        var i = new t.FP4(this.a),
                            s = new t.FP4(0),
                            o = new t.FP4(this.b),
                            r = new t.FP4(0),
                            h = new t.FP4(this.a),
                            e = new t.FP4(n.a);
                        i.mul(n.a), o.mul(n.b), h.add(this.b), e.add(n.b), h.norm(), e.norm(), s.copy(h), s.mul(e), h.copy(this.b), h.add(this.c), e.copy(n.b), e.add(n.c), h.norm(), e.norm(), r.copy(h), r.mul(e), h.copy(i), h.neg(), e.copy(o), e.neg(), s.add(h), this.b.copy(s), this.b.add(e), r.add(e), o.add(h), h.copy(this.a), h.add(this.c), e.copy(n.a), e.add(n.c), h.norm(), e.norm(), h.mul(e), o.add(h), h.copy(this.c), h.mul(n.c), e.copy(h), e.neg(), this.c.copy(o), this.c.add(e), r.add(e), h.times_i(), this.b.add(h), r.times_i(), this.a.copy(i), this.a.add(r), this.norm()
                    },
                    smul: function(n, i) {
                        var s, o, r, h, e, c;
                        i == t.ECP.D_TYPE && (s = new t.FP4(this.a), r = new t.FP4(this.b), h = new t.FP4(this.b), e = new t.FP4(0), c = new t.FP4(n.a), s.mul(n.a), r.pmul(n.b.real()), this.b.add(this.a), c.real().add(n.b.real()), this.b.norm(), c.norm(), this.b.mul(c), h.add(this.c), h.norm(), h.pmul(n.b.real()), e.copy(s), e.neg(), c.copy(r), c.neg(), this.b.add(e), this.b.add(c), h.add(c), r.add(e), e.copy(this.a), e.add(this.c), e.norm(), e.mul(n.a), this.c.copy(r), this.c.add(e), h.times_i(), this.a.copy(s), this.a.add(h)), i == t.ECP.M_TYPE && (s = new t.FP4(this.a), o = new t.FP4(0), r = new t.FP4(0), h = new t.FP4(0), e = new t.FP4(this.a), c = new t.FP4(0), s.mul(n.a), e.add(this.b), e.norm(), o.copy(e), o.mul(n.a), e.copy(this.b), e.add(this.c), e.norm(), h.copy(e), h.pmul(n.c.getb()), h.times_i(), e.copy(s), e.neg(), o.add(e), this.b.copy(o), r.copy(e), e.copy(this.a), e.add(this.c), c.copy(n.a), c.add(n.c), e.norm(), c.norm(), e.mul(c), r.add(e), e.copy(this.c), e.pmul(n.c.getb()), e.times_i(), c.copy(e), c.neg(), this.c.copy(r), this.c.add(c), h.add(c), e.times_i(), this.b.add(e), h.norm(), h.times_i(), this.a.copy(s), this.a.add(h)), this.norm()
                    },
                    inverse: function() {
                        var n = new t.FP4(this.a),
                            i = new t.FP4(this.b),
                            s = new t.FP4(this.a),
                            o = new t.FP4(0);
                        n.sqr(), i.mul(this.c), i.times_i(), n.sub(i), n.norm(), i.copy(this.c), i.sqr(), i.times_i(), s.mul(this.b), i.sub(s), i.norm(), s.copy(this.b), s.sqr(), o.copy(this.a), o.mul(this.c), s.sub(o), s.norm(), o.copy(this.b), o.mul(s), o.times_i(), this.a.mul(n), o.add(this.a), this.c.mul(i), this.c.times_i(), o.add(this.c), o.norm(), o.inverse(), this.a.copy(n), this.a.mul(o), this.b.copy(i), this.b.mul(o), this.c.copy(s), this.c.mul(o)
                    },
                    frob: function(n) {
                        var i = new t.FP2(n),
                            s = new t.FP2(n);
                        i.sqr(), s.mul(i), this.a.frob(s), this.b.frob(s), this.c.frob(s), this.b.pmul(n), this.c.pmul(i)
                    },
                    trace: function() {
                        var n = new t.FP4(0);
                        return n.copy(this.a), n.imul(3), n.reduce(), n
                    },
                    toString: function() {
                        return "[" + this.a.toString() + "," + this.b.toString() + "," + this.c.toString() + "]"
                    },
                    toBytes: function(n) {
                        var i, s = [];
                        for (this.a.geta().getA().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i] = s[i];
                        for (this.a.geta().getB().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + t.BIG.MODBYTES] = s[i];
                        for (this.a.getb().getA().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 2 * t.BIG.MODBYTES] = s[i];
                        for (this.a.getb().getB().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 3 * t.BIG.MODBYTES] = s[i];
                        for (this.b.geta().getA().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 4 * t.BIG.MODBYTES] = s[i];
                        for (this.b.geta().getB().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 5 * t.BIG.MODBYTES] = s[i];
                        for (this.b.getb().getA().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 6 * t.BIG.MODBYTES] = s[i];
                        for (this.b.getb().getB().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 7 * t.BIG.MODBYTES] = s[i];
                        for (this.c.geta().getA().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 8 * t.BIG.MODBYTES] = s[i];
                        for (this.c.geta().getB().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 9 * t.BIG.MODBYTES] = s[i];
                        for (this.c.getb().getA().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 10 * t.BIG.MODBYTES] = s[i];
                        for (this.c.getb().getB().toBytes(s), i = 0; i < t.BIG.MODBYTES; i++) n[i + 11 * t.BIG.MODBYTES] = s[i]
                    },
                    pow: function(i) {
                        var s, o, r, h;
                        for (this.norm(), i.norm(), (s = new t.BIG(i)).pmul(3), s.norm(), o = new n(this), r = s.nbits() - 2; r >= 1; r--) o.usqr(), 1 == (h = s.bit(r) - i.bit(r)) && o.mul(this), -1 == h && (this.conj(), o.mul(this), this.conj());
                        return o.reduce(), o
                    },
                    pinpow: function(t, i) {
                        var s, o, r = [];
                        for (r[0] = new n(1), r[1] = new n(this), s = i - 1; s >= 0; s--) r[1 - (o = t >> s & 1)].mul(r[o]), r[o].usqr();
                        this.copy(r[0])
                    },
                    compow: function(i, s) {
                        var o, r, h, e, c, u, a, f, p, w, d, y, m;
                        return (o = new t.BIG(0)).rcopy(t.ROM_FIELD.Fra), (r = new t.BIG(0)).rcopy(t.ROM_FIELD.Frb), h = new t.FP2(o, r), (e = new t.BIG(0)).rcopy(t.ROM_FIELD.Modulus), (c = new t.BIG(e)).mod(s), (u = new t.BIG(i)).mod(c), (a = new t.BIG(i)).div(c), f = new n(0), p = new n(0), f.copy(this), w = f.trace(), a.iszilch() ? w = w.xtr_pow(i) : (p.copy(f), p.frob(h), d = p.trace(), f.conj(), p.mul(f), y = p.trace(), p.mul(f), m = p.trace(), w = w.xtr_pow2(d, y, m, u, a))
                    }
                }, n.fromBytes = function(i) {
                    var s, o, r, h, e, c, u, a, f = [];
                    for (s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s];
                    for (o = t.BIG.fromBytes(f), s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s + t.BIG.MODBYTES];
                    for (r = t.BIG.fromBytes(f), h = new t.FP2(o, r), s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s + 2 * t.BIG.MODBYTES];
                    for (o = t.BIG.fromBytes(f), s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s + 3 * t.BIG.MODBYTES];
                    for (r = t.BIG.fromBytes(f), e = new t.FP2(o, r), c = new t.FP4(h, e), s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s + 4 * t.BIG.MODBYTES];
                    for (o = t.BIG.fromBytes(f), s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s + 5 * t.BIG.MODBYTES];
                    for (r = t.BIG.fromBytes(f), h = new t.FP2(o, r), s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s + 6 * t.BIG.MODBYTES];
                    for (o = t.BIG.fromBytes(f), s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s + 7 * t.BIG.MODBYTES];
                    for (r = t.BIG.fromBytes(f), e = new t.FP2(o, r), u = new t.FP4(h, e), s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s + 8 * t.BIG.MODBYTES];
                    for (o = t.BIG.fromBytes(f), s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s + 9 * t.BIG.MODBYTES];
                    for (r = t.BIG.fromBytes(f), h = new t.FP2(o, r), s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s + 10 * t.BIG.MODBYTES];
                    for (o = t.BIG.fromBytes(f), s = 0; s < t.BIG.MODBYTES; s++) f[s] = i[s + 11 * t.BIG.MODBYTES];
                    return r = t.BIG.fromBytes(f), e = new t.FP2(o, r), a = new t.FP4(h, e), new n(c, u, a)
                }, n.pow4 = function(i, s) {
                    var o, r, h, e, c = [],
                        u = [],
                        a = [],
                        f = new n(1),
                        p = new n(0),
                        w = [],
                        d = new t.BIG(0),
                        y = [];
                    for (o = 0; o < 4; o++) w[o] = new t.BIG(s[o]);
                    for (a[0] = new n(0), a[1] = new n(0), u[0] = new n(i[0]), a[0].copy(i[1]), a[0].conj(), u[0].mul(a[0]), u[1] = new n(u[0]), u[2] = new n(u[0]), u[3] = new n(u[0]), u[4] = new n(i[0]), u[4].mul(i[1]), u[5] = new n(u[4]), u[6] = new n(u[4]), u[7] = new n(u[4]), a[1].copy(i[2]), a[0].copy(i[3]), a[0].conj(), a[1].mul(a[0]), a[0].copy(a[1]), a[0].conj(), u[1].mul(a[0]), u[2].mul(a[1]), u[5].mul(a[0]), u[6].mul(a[1]), a[1].copy(i[2]), a[1].mul(i[3]), a[0].copy(a[1]), a[0].conj(), u[0].mul(a[0]), u[3].mul(a[1]), u[4].mul(a[0]), u[7].mul(a[1]), o = 0; o < 4; o++) 0 == w[o].parity() && (w[o].inc(1), w[o].norm(), f.mul(i[o])), d.add(w[o]), d.norm();
                    for (f.conj(), h = 1 + d.nbits(), r = 0; r < h; r++) {
                        for (o = 0; o < 4; o++) c[o] = w[o].lastbits(2) - 2, w[o].dec(c[o]), w[o].norm(), w[o].fshr(1);
                        y[r] = 8 * c[0] + 4 * c[1] + 2 * c[2] + c[3]
                    }
                    for (y[h] = 8 * w[0].lastbits(2) + 4 * w[1].lastbits(2) + 2 * w[2].lastbits(2) + w[3].lastbits(2), p.copy(u[Math.floor((y[h] - 1) / 2)]), o = h - 1; o >= 0; o--) e = y[o] >> 31, r = ((r = (y[o] ^ e) - e) - 1) / 2, a[0].copy(u[r]), a[1].copy(u[r]), a[1].conj(), p.usqr(), p.mul(a[1 & e]);
                    return p.mul(f), p.reduce(), p
                }, n
            })
        },
        1598: function(t, n, i) {
            void 0 !== t.exports && (t.exports.FP2 = function(t) {
                "use strict";
                var n = function(i, s) {
                    i instanceof n ? (this.a = new t.FP(i.a), this.b = new t.FP(i.b)) : (this.a = new t.FP(i), this.b = new t.FP(s))
                };
                return n.prototype = {
                    reduce: function() {
                        this.a.reduce(), this.b.reduce()
                    },
                    norm: function() {
                        this.a.norm(), this.b.norm()
                    },
                    iszilch: function() {
                        return this.reduce(), this.a.iszilch() && this.b.iszilch()
                    },
                    isunity: function() {
                        var n = new t.FP(1);
                        return this.a.equals(n) && this.b.iszilch()
                    },
                    cmove: function(t, n) {
                        this.a.cmove(t.a, n), this.b.cmove(t.b, n)
                    },
                    equals: function(t) {
                        return this.a.equals(t.a) && this.b.equals(t.b)
                    },
                    getA: function() {
                        return this.a.redc()
                    },
                    getB: function() {
                        return this.b.redc()
                    },
                    set: function(t, n) {
                        this.a.copy(t), this.b.copy(n)
                    },
                    seta: function(t) {
                        this.a.copy(t), this.b.zero()
                    },
                    bset: function(t, n) {
                        this.a.bcopy(t), this.b.bcopy(n)
                    },
                    bseta: function(t) {
                        this.a.bcopy(t), this.b.zero()
                    },
                    copy: function(t) {
                        this.a.copy(t.a), this.b.copy(t.b)
                    },
                    zero: function() {
                        this.a.zero(), this.b.zero()
                    },
                    one: function() {
                        this.a.one(), this.b.zero()
                    },
                    neg: function() {
                        var n = new t.FP(this.a),
                            i = new t.FP(0);
                        n.add(this.b), n.neg(), i.copy(n), i.add(this.b), this.b.copy(n), this.b.add(this.a), this.a.copy(i)
                    },
                    conj: function() {
                        this.b.neg(), this.b.norm()
                    },
                    add: function(t) {
                        this.a.add(t.a), this.b.add(t.b)
                    },
                    sub: function(t) {
                        var i = new n(t);
                        i.neg(), this.add(i)
                    },
                    rsub: function(t) {
                        this.neg(), this.add(t)
                    },
                    pmul: function(t) {
                        this.a.mul(t), this.b.mul(t)
                    },
                    imul: function(t) {
                        this.a.imul(t), this.b.imul(t)
                    },
                    sqr: function() {
                        var n = new t.FP(this.a),
                            i = new t.FP(this.a),
                            s = new t.FP(this.b);
                        n.add(this.b), i.add(this.a), i.norm(), this.b.mul(i), s.neg(), this.a.add(s), this.a.norm(), n.norm(), this.a.mul(n)
                    },
                    mul: function(n) {
                        var i, s, o, r, h, e, c = new t.BIG(0),
                            u = new t.DBIG(0);
                        c.rcopy(t.ROM_FIELD.Modulus), u.ucopy(c), (this.a.XES + this.b.XES) * (n.a.XES + n.b.XES) > t.FP.FEXCESS && (this.a.XES > 1 && this.a.reduce(), this.b.XES > 1 && this.b.reduce()), i = t.BIG.mul(this.a.f, n.a.f), s = t.BIG.mul(this.b.f, n.b.f), o = new t.BIG(this.a.f), r = new t.BIG(n.a.f), o.add(this.b.f), o.norm(), r.add(n.b.f), r.norm(), h = t.BIG.mul(o, r), (e = new t.DBIG(0)).copy(i), e.add(s), s.rsub(u), i.add(s), i.norm(), h.sub(e), h.norm(), this.a.f.copy(t.FP.mod(i)), this.a.XES = 3, this.b.f.copy(t.FP.mod(h)), this.b.XES = 2
                    },
                    sqrt: function() {
                        var n, i;
                        return !!this.iszilch() || (n = new t.FP(this.b), i = new t.FP(this.a), n.sqr(), i.sqr(), n.add(i), 1 != n.jacobi() ? (this.zero(), !1) : (n = n.sqrt(), i.copy(this.a), i.add(n), i.norm(), i.div2(), 1 != i.jacobi() && (i.copy(this.a), i.sub(n), i.norm(), i.div2(), 1 != i.jacobi()) ? (this.zero(), !1) : (i = i.sqrt(), this.a.copy(i), i.add(i), i.inverse(), this.b.mul(i), !0)))
                    },
                    toString: function() {
                        return "[" + this.a.toString() + "," + this.b.toString() + "]"
                    },
                    inverse: function() {
                        var n, i;
                        this.norm(), n = new t.FP(this.a), i = new t.FP(this.b), n.sqr(), i.sqr(), n.add(i), n.inverse(), this.a.mul(n), n.neg(), n.norm(), this.b.mul(n)
                    },
                    div2: function() {
                        this.a.div2(), this.b.div2()
                    },
                    times_i: function() {
                        var n = new t.FP(this.a);
                        this.a.copy(this.b), this.a.neg(), this.b.copy(n)
                    },
                    mul_ip: function() {
                        var i = new n(this),
                            s = new t.FP(this.a);
                        this.a.copy(this.b), this.a.neg(), this.b.copy(s), this.add(i)
                    },
                    div_ip2: function() {
                        var t = new n(0);
                        t.a.copy(this.a), t.a.add(this.b), t.b.copy(this.b), t.b.sub(this.a), this.copy(t)
                    },
                    div_ip: function() {
                        var t = new n(0);
                        this.norm(), t.a.copy(this.a), t.a.add(this.b), t.b.copy(this.b), t.b.sub(this.a), this.copy(t), this.norm(), this.div2()
                    },
                    pow: function(t) {
                        this.norm();
                        var i, s = new n(1),
                            o = new n(this);
                        for (t.norm(); i = t.parity(), t.fshr(1), 1 == i && s.mul(o), !t.iszilch();) o.sqr();
                        return s.reduce(), s
                    }
                }, n
            })
        },
        1599: function(t, n, i) {
            void 0 !== t.exports && (t.exports.FP4 = function(t) {
                "use strict";
                var n = function(i, s) {
                    i instanceof n ? (this.a = new t.FP2(i.a), this.b = new t.FP2(i.b)) : (this.a = new t.FP2(i), this.b = new t.FP2(s))
                };
                return n.prototype = {
                    reduce: function() {
                        this.a.reduce(), this.b.reduce()
                    },
                    norm: function() {
                        this.a.norm(), this.b.norm()
                    },
                    iszilch: function() {
                        return this.reduce(), this.a.iszilch() && this.b.iszilch()
                    },
                    isunity: function() {
                        var n = new t.FP2(1);
                        return this.a.equals(n) && this.b.iszilch()
                    },
                    isreal: function() {
                        return this.b.iszilch()
                    },
                    real: function() {
                        return this.a
                    },
                    geta: function() {
                        return this.a
                    },
                    getb: function() {
                        return this.b
                    },
                    equals: function(t) {
                        return this.a.equals(t.a) && this.b.equals(t.b)
                    },
                    copy: function(t) {
                        this.a.copy(t.a), this.b.copy(t.b)
                    },
                    zero: function() {
                        this.a.zero(), this.b.zero()
                    },
                    one: function() {
                        this.a.one(), this.b.zero()
                    },
                    set: function(t, n) {
                        this.a.copy(t), this.b.copy(n)
                    },
                    seta: function(t) {
                        this.a.copy(t), this.b.zero()
                    },
                    neg: function() {
                        var n = new t.FP2(this.a),
                            i = new t.FP2(0);
                        n.add(this.b), n.neg(), i.copy(n), i.add(this.b), this.b.copy(n), this.b.add(this.a), this.a.copy(i), this.norm()
                    },
                    conj: function() {
                        this.b.neg(), this.norm()
                    },
                    nconj: function() {
                        this.a.neg(), this.norm()
                    },
                    add: function(t) {
                        this.a.add(t.a), this.b.add(t.b)
                    },
                    sub: function(t) {
                        var i = new n(t);
                        i.neg(), this.add(i)
                    },
                    pmul: function(t) {
                        this.a.mul(t), this.b.mul(t)
                    },
                    imul: function(t) {
                        this.a.imul(t), this.b.imul(t)
                    },
                    sqr: function() {
                        var n = new t.FP2(this.a),
                            i = new t.FP2(this.b),
                            s = new t.FP2(this.a);
                        s.mul(this.b), n.add(this.b), n.norm(), i.mul_ip(), i.add(this.a), i.norm(), this.a.copy(n), this.a.mul(i), i.copy(s), i.mul_ip(), i.add(s), i.neg(), this.a.add(i), this.b.copy(s), this.b.add(s), this.norm()
                    },
                    mul: function(n) {
                        var i = new t.FP2(this.a),
                            s = new t.FP2(this.b),
                            o = new t.FP2(0),
                            r = new t.FP2(this.b);
                        i.mul(n.a), s.mul(n.b), o.copy(n.b), o.add(n.a), r.add(this.a), o.norm(), r.norm(), r.mul(o), o.copy(i), o.neg(), r.add(o), o.copy(s), o.neg(), this.b.copy(r), this.b.add(o), s.mul_ip(), this.a.copy(s), this.a.add(i), this.norm()
                    },
                    toString: function() {
                        return "[" + this.a.toString() + "," + this.b.toString() + "]"
                    },
                    inverse: function() {
                        this.norm();
                        var n = new t.FP2(this.a),
                            i = new t.FP2(this.b);
                        n.sqr(), i.sqr(), i.mul_ip(), i.norm(), n.sub(i), n.inverse(), this.a.mul(n), n.neg(), n.norm(), this.b.mul(n)
                    },
                    times_i: function() {
                        var n = new t.FP2(this.b),
                            i = new t.FP2(this.b);
                        n.times_i(), i.add(n), this.b.copy(this.a), this.a.copy(i), this.norm()
                    },
                    frob: function(t) {
                        this.a.conj(), this.b.conj(), this.b.mul(t)
                    },
                    pow: function(i) {
                        this.norm(), i.norm();
                        for (var s, o = new n(this), r = new t.BIG(i), h = new n(1); s = r.parity(), r.fshr(1), 1 === s && h.mul(o), !r.iszilch();) o.sqr();
                        return h.reduce(), h
                    },
                    xtr_A: function(t, i, s) {
                        var o = new n(t),
                            r = new n(t);
                        o.sub(i), o.norm(), o.pmul(this.a), r.add(i), r.norm(), r.pmul(this.b), r.times_i(), this.copy(o), this.add(r), this.add(s), this.reduce()
                    },
                    xtr_D: function() {
                        var t = new n(this);
                        this.sqr(), t.conj(), t.add(t), this.sub(t), this.reduce()
                    },
                    xtr_pow: function(i) {
                        var s, o, r, h = new n(3),
                            e = new n(this),
                            c = new n(e),
                            u = new n(0),
                            a = new n(0);
                        for (c.xtr_D(), i.norm(), s = i.parity(), (o = new t.BIG(i)).fshr(1), 0 === s && (o.dec(1), o.norm()), r = o.nbits() - 1; r >= 0; r--) 1 != o.bit(r) ? (u.copy(e), this.conj(), c.conj(), e.xtr_A(h, this, c), this.conj(), c.copy(u), c.xtr_D(), h.xtr_D()) : (u.copy(h), u.conj(), h.copy(e), h.xtr_D(), e.xtr_A(c, this, u), c.xtr_D());
                        return 0 === s ? a.copy(c) : a.copy(e), a.reduce(), a
                    },
                    xtr_pow2: function(i, s, o, r, h) {
                        r.norm(), h.norm();
                        for (var e, c = new t.BIG(r), u = new t.BIG(h), a = new t.BIG(0), f = new n(i), p = new n(this), w = new n(s), d = new n(o), y = new n(0), m = new n(0), E = 0; 0 === u.parity() && 0 === c.parity();) u.fshr(1), c.fshr(1), E++;
                        for (; 0 !== t.BIG.comp(u, c);) t.BIG.comp(u, c) > 0 && (a.copy(c), a.imul(4), a.norm(), t.BIG.comp(u, a) <= 0 ? (a.copy(u), u.copy(c), c.rsub(a), c.norm(), m.copy(p), m.xtr_A(f, w, d), d.copy(w), d.conj(), w.copy(p), p.copy(f), f.copy(m)) : 0 === u.parity() ? (u.fshr(1), y.copy(d), y.conj(), m.copy(w), m.xtr_A(f, p, y), d.copy(w), d.xtr_D(), w.copy(m), f.xtr_D()) : 1 == c.parity() ? (u.sub(c), u.norm(), u.fshr(1), m.copy(p), m.xtr_A(f, w, d), f.xtr_D(), d.copy(p), d.xtr_D(), d.conj(), p.copy(m)) : (a.copy(u), u.copy(c), u.fshr(1), c.copy(a), m.copy(w), m.xtr_D(), w.copy(d), w.conj(), d.copy(m), d.conj(), m.copy(p), m.xtr_D(), p.copy(f), f.copy(m))), t.BIG.comp(u, c) < 0 && (a.copy(u), a.imul(4), a.norm(), t.BIG.comp(c, a) <= 0 ? (c.sub(u), c.norm(), m.copy(p), m.xtr_A(f, w, d), d.copy(w), w.copy(f), f.copy(m)) : 0 === c.parity() ? (a.copy(u), u.copy(c), u.fshr(1), c.copy(a), m.copy(w), m.xtr_D(), w.copy(d), w.conj(), d.copy(m), d.conj(), m.copy(p), m.xtr_D(), p.copy(f), f.copy(m)) : 1 == u.parity() ? (a.copy(c), c.copy(u), a.sub(u), a.norm(), u.copy(a), u.fshr(1), m.copy(p), m.xtr_A(f, w, d), w.conj(), d.copy(f), d.xtr_D(), d.conj(), f.copy(p), f.xtr_D(), p.copy(m)) : (u.fshr(1), y.copy(d), y.conj(), m.copy(w), m.xtr_A(f, p, y), d.copy(w), d.xtr_D(), w.copy(m), f.xtr_D()));
                        for (y.copy(p), y.xtr_A(f, w, d), e = 0; e < E; e++) y.xtr_D();
                        return y = y.xtr_pow(u)
                    }
                }, n
            })
        },
        1600: function(t, n, i) {
            void 0 !== t.exports && (t.exports.GCM = function(t) {
                "use strict";
                var n = function() {
                    this.table = new Array(128);
                    for (var n = 0; n < 128; n++) this.table[n] = new Array(4);
                    this.stateX = [], this.Y_0 = [], this.counter = 0, this.lenA = [], this.lenC = [], this.status = 0, this.a = new t.AES
                };
                return n.ACCEPTING_HEADER = 0, n.ACCEPTING_CIPHER = 1, n.NOT_ACCEPTING_MORE = 2, n.FINISHED = 3, n.ENCRYPTING = 0, n.DECRYPTING = 1, n.prototype = {
                    precompute: function(t) {
                        var i, s, o, r = [];
                        for (i = s = 0; i < 4; i++, s += 4) r[0] = t[s], r[1] = t[s + 1], r[2] = t[s + 2], r[3] = t[s + 3], this.table[0][i] = n.pack(r);
                        for (i = 1; i < 128; i++) {
                            for (o = 0, s = 0; s < 4; s++) this.table[i][s] = o | this.table[i - 1][s] >>> 1, o = this.table[i - 1][s] << 31;
                            0 !== o && (this.table[i][0] ^= 3774873600)
                        }
                    },
                    gf2mul: function() {
                        var t, i, s, o, r, h = [],
                            e = [];
                        for (h[0] = h[1] = h[2] = h[3] = 0, i = 8, s = 0, t = 0; t < 128; t++) {
                            for (r = 1 + ~(r = this.stateX[s] >>> --i & 1), o = 0; o < 4; o++) h[o] ^= this.table[t][o] & r;
                            if (0 === i && (i = 8, 16 == ++s)) break
                        }
                        for (t = i = 0; t < 4; t++, i += 4) e = n.unpack(h[t]), this.stateX[i] = e[0], this.stateX[i + 1] = e[1], this.stateX[i + 2] = e[2], this.stateX[i + 3] = e[3]
                    },
                    wrap: function() {
                        var t, i, s = [],
                            o = [],
                            r = [];
                        for (s[0] = this.lenA[0] << 3 | (3758096384 & this.lenA[1]) >>> 29, s[1] = this.lenA[1] << 3, s[2] = this.lenC[0] << 3 | (3758096384 & this.lenC[1]) >>> 29, s[3] = this.lenC[1] << 3, t = i = 0; t < 4; t++, i += 4) r = n.unpack(s[t]), o[i] = r[0], o[i + 1] = r[1], o[i + 2] = r[2], o[i + 3] = r[3];
                        for (t = 0; t < 16; t++) this.stateX[t] ^= o[t];
                        this.gf2mul()
                    },
                    init: function(i, s, o, r) {
                        var h, e = [],
                            c = [];
                        for (h = 0; h < 16; h++) e[h] = 0, this.stateX[h] = 0;
                        if (this.a.init(t.AES.ECB, i, s, r), this.a.ecb_encrypt(e), this.precompute(e), this.lenA[0] = this.lenC[0] = this.lenA[1] = this.lenC[1] = 0, 12 == o) {
                            for (h = 0; h < 12; h++) this.a.f[h] = r[h];
                            for (c = n.unpack(1), this.a.f[12] = c[0], this.a.f[13] = c[1], this.a.f[14] = c[2], this.a.f[15] = c[3], h = 0; h < 16; h++) this.Y_0[h] = this.a.f[h]
                        } else {
                            for (this.status = n.ACCEPTING_CIPHER, this.ghash(r, o), this.wrap(), h = 0; h < 16; h++) this.a.f[h] = this.stateX[h], this.Y_0[h] = this.a.f[h], this.stateX[h] = 0;
                            this.lenA[0] = this.lenC[0] = this.lenA[1] = this.lenC[1] = 0
                        }
                        this.status = n.ACCEPTING_HEADER
                    },
                    add_header: function(t, i) {
                        var s, o = 0;
                        if (this.status != n.ACCEPTING_HEADER) return !1;
                        for (; o < i;) {
                            for (s = 0; s < 16 && o < i; s++) this.stateX[s] ^= t[o++], this.lenA[1]++, this.lenA[1] |= 0, 0 === this.lenA[1] && this.lenA[0]++;
                            this.gf2mul()
                        }
                        return i % 16 != 0 && (this.status = n.ACCEPTING_CIPHER), !0
                    },
                    ghash: function(t, i) {
                        var s, o = 0;
                        if (this.status == n.ACCEPTING_HEADER && (this.status = n.ACCEPTING_CIPHER), this.status != n.ACCEPTING_CIPHER) return !1;
                        for (; o < i;) {
                            for (s = 0; s < 16 && o < i; s++) this.stateX[s] ^= t[o++], this.lenC[1]++, this.lenC[1] |= 0, 0 === this.lenC[1] && this.lenC[0]++;
                            this.gf2mul()
                        }
                        return i % 16 != 0 && (this.status = n.NOT_ACCEPTING_MORE), !0
                    },
                    add_plain: function(t, i) {
                        var s, o = [],
                            r = [],
                            h = [],
                            e = 0;
                        if (this.status == n.ACCEPTING_HEADER && (this.status = n.ACCEPTING_CIPHER), this.status != n.ACCEPTING_CIPHER) return h;
                        for (; e < i;) {
                            for (r[0] = this.a.f[12], r[1] = this.a.f[13], r[2] = this.a.f[14], r[3] = this.a.f[15], this.counter = n.pack(r), this.counter++, r = n.unpack(this.counter), this.a.f[12] = r[0], this.a.f[13] = r[1], this.a.f[14] = r[2], this.a.f[15] = r[3], s = 0; s < 16; s++) o[s] = this.a.f[s];
                            for (this.a.ecb_encrypt(o), s = 0; s < 16 && e < i; s++) h[e] = t[e] ^ o[s], this.stateX[s] ^= h[e++], this.lenC[1]++, this.lenC[1] |= 0, 0 === this.lenC[1] && this.lenC[0]++;
                            this.gf2mul()
                        }
                        return i % 16 != 0 && (this.status = n.NOT_ACCEPTING_MORE), h
                    },
                    add_cipher: function(t, i) {
                        var s, o, r = [],
                            h = [],
                            e = [],
                            c = 0;
                        if (this.status == n.ACCEPTING_HEADER && (this.status = n.ACCEPTING_CIPHER), this.status != n.ACCEPTING_CIPHER) return e;
                        for (; c < i;) {
                            for (h[0] = this.a.f[12], h[1] = this.a.f[13], h[2] = this.a.f[14], h[3] = this.a.f[15], this.counter = n.pack(h), this.counter++, h = n.unpack(this.counter), this.a.f[12] = h[0], this.a.f[13] = h[1], this.a.f[14] = h[2], this.a.f[15] = h[3], s = 0; s < 16; s++) r[s] = this.a.f[s];
                            for (this.a.ecb_encrypt(r), s = 0; s < 16 && c < i; s++) o = t[c], e[c] = t[c] ^ r[s], this.stateX[s] ^= o, c++, this.lenC[1]++, this.lenC[1] |= 0, 0 === this.lenC[1] && this.lenC[0]++;
                            this.gf2mul()
                        }
                        return i % 16 != 0 && (this.status = n.NOT_ACCEPTING_MORE), e
                    },
                    finish: function(t) {
                        var i, s = [];
                        if (this.wrap(), t) {
                            for (this.a.ecb_encrypt(this.Y_0), i = 0; i < 16; i++) this.Y_0[i] ^= this.stateX[i];
                            for (i = 0; i < 16; i++) s[i] = this.Y_0[i], this.Y_0[i] = this.stateX[i] = 0
                        }
                        return this.status = n.FINISHED, this.a.end(), s
                    }
                }, n.pack = function(t) {
                    return (255 & t[0]) << 24 | (255 & t[1]) << 16 | (255 & t[2]) << 8 | 255 & t[3]
                }, n.unpack = function(t) {
                    var n = [];
                    return n[3] = 255 & t, n[2] = t >>> 8 & 255, n[1] = t >>> 16 & 255, n[0] = t >>> 24 & 255, n
                }, n.hex2bytes = function(t) {
                    var n, i = t.length,
                        s = [];
                    for (n = 0; n < i; n += 2) s[n / 2] = parseInt(t.substr(n, 2), 16);
                    return s
                }, n
            })
        },
        1601: function(t, n, i) {
            void 0 !== t.exports && (t.exports.HASH256 = function() {
                "use strict";
                var t = function() {
                    this.length = [], this.h = [], this.w = [], this.init()
                };
                return t.prototype = {
                    transform: function() {
                        var n, i, s, o, r, h, e, c, u, a, f;
                        for (f = 16; f < 64; f++) this.w[f] = t.theta1(this.w[f - 2]) + this.w[f - 7] + t.theta0(this.w[f - 15]) + this.w[f - 16] | 0;
                        for (n = this.h[0], i = this.h[1], s = this.h[2], o = this.h[3], r = this.h[4], h = this.h[5], e = this.h[6], c = this.h[7], f = 0; f < 64; f++) u = c + t.Sig1(r) + t.Ch(r, h, e) + t.HK[f] + this.w[f] | 0, a = t.Sig0(n) + t.Maj(n, i, s) | 0, c = e, e = h, h = r, r = o + u | 0, o = s, s = i, i = n, n = u + a | 0;
                        this.h[0] += n, this.h[1] += i, this.h[2] += s, this.h[3] += o, this.h[4] += r, this.h[5] += h, this.h[6] += e, this.h[7] += c
                    },
                    init: function() {
                        var n;
                        for (n = 0; n < 64; n++) this.w[n] = 0;
                        this.length[0] = this.length[1] = 0, this.h[0] = t.H[0], this.h[1] = t.H[1], this.h[2] = t.H[2], this.h[3] = t.H[3], this.h[4] = t.H[4], this.h[5] = t.H[5], this.h[6] = t.H[6], this.h[7] = t.H[7]
                    },
                    process: function(t) {
                        var n;
                        n = (this.length[0] >>> 5) % 16, this.w[n] <<= 8, this.w[n] |= 255 & t, this.length[0] += 8, 0 == (4294967295 & this.length[0]) && (this.length[1]++, this.length[0] = 0), this.length[0] % 512 == 0 && this.transform()
                    },
                    process_array: function(t) {
                        for (var n = 0; n < t.length; n++) this.process(t[n])
                    },
                    process_num: function(t) {
                        this.process(t >> 24 & 255), this.process(t >> 16 & 255), this.process(t >> 8 & 255), this.process(255 & t)
                    },
                    hash: function() {
                        var n, i, s, o = [];
                        for (n = this.length[0], i = this.length[1], this.process(128); this.length[0] % 512 != 448;) this.process(0);
                        for (this.w[14] = i, this.w[15] = n, this.transform(), s = 0; s < t.len; s++) o[s] = this.h[s >>> 2] >> 8 * (3 - s % 4) & 255;
                        return this.init(), o
                    }
                }, t.S = function(t, n) {
                    return n >>> t | n << 32 - t
                }, t.R = function(t, n) {
                    return n >>> t
                }, t.Ch = function(t, n, i) {
                    return t & n ^ ~t & i
                }, t.Maj = function(t, n, i) {
                    return t & n ^ t & i ^ n & i
                }, t.Sig0 = function(n) {
                    return t.S(2, n) ^ t.S(13, n) ^ t.S(22, n)
                }, t.Sig1 = function(n) {
                    return t.S(6, n) ^ t.S(11, n) ^ t.S(25, n)
                }, t.theta0 = function(n) {
                    return t.S(7, n) ^ t.S(18, n) ^ t.R(3, n)
                }, t.theta1 = function(n) {
                    return t.S(17, n) ^ t.S(19, n) ^ t.R(10, n)
                }, t.len = 32, t.H = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], t.HK = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], t
            })
        },
        1602: function(t, n, i) {
            void 0 !== t.exports && (t.exports.HASH384 = function(t) {
                "use strict";
                var n = function() {
                    this.length = [], this.h = [], this.w = [], this.init()
                };
                return n.prototype = {
                    transform: function() {
                        var t, i, s, o, r, h, e, c, u, a, f;
                        for (f = 16; f < 80; f++) this.w[f] = n.theta1(this.w[f - 2]).add(this.w[f - 7]).add(n.theta0(this.w[f - 15])).add(this.w[f - 16]);
                        for (t = this.h[0].copy(), i = this.h[1].copy(), s = this.h[2].copy(), o = this.h[3].copy(), r = this.h[4].copy(), h = this.h[5].copy(), e = this.h[6].copy(), c = this.h[7].copy(), f = 0; f < 80; f++)(u = c.copy()).add(n.Sig1(r)).add(n.Ch(r, h, e)).add(n.HK[f]).add(this.w[f]), (a = n.Sig0(t)).add(n.Maj(t, i, s)), c = e, e = h, h = r, (r = o.copy()).add(u), o = s, s = i, i = t, (t = u.copy()).add(a);
                        this.h[0].add(t), this.h[1].add(i), this.h[2].add(s), this.h[3].add(o), this.h[4].add(r), this.h[5].add(h), this.h[6].add(e), this.h[7].add(c)
                    },
                    init: function() {
                        var i;
                        for (i = 0; i < 80; i++) this.w[i] = new t.UInt64(0, 0);
                        this.length[0] = new t.UInt64(0, 0), this.length[1] = new t.UInt64(0, 0), this.h[0] = n.H[0].copy(), this.h[1] = n.H[1].copy(), this.h[2] = n.H[2].copy(), this.h[3] = n.H[3].copy(), this.h[4] = n.H[4].copy(), this.h[5] = n.H[5].copy(), this.h[6] = n.H[6].copy(), this.h[7] = n.H[7].copy()
                    },
                    process: function(n) {
                        var i, s;
                        i = (this.length[0].bot >>> 6) % 16, this.w[i].shlb(), this.w[i].bot |= 255 & n, s = new t.UInt64(0, 8), this.length[0].add(s), 0 === this.length[0].top && 0 == this.length[0].bot && (s = new t.UInt64(0, 1), this.length[1].add(s)), this.length[0].bot % 1024 == 0 && this.transform()
                    },
                    process_array: function(t) {
                        for (var n = 0; n < t.length; n++) this.process(t[n])
                    },
                    process_num: function(t) {
                        this.process(t >> 24 & 255), this.process(t >> 16 & 255), this.process(t >> 8 & 255), this.process(255 & t)
                    },
                    hash: function() {
                        var t, i, s, o = [];
                        for (t = this.length[0].copy(), i = this.length[1].copy(), this.process(128); this.length[0].bot % 1024 != 896;) this.process(0);
                        for (this.w[14] = i, this.w[15] = t, this.transform(), s = 0; s < n.len; s++) o[s] = 255 & n.R(8 * (7 - s % 8), this.h[s >>> 3]).bot;
                        return this.init(), o
                    }
                }, n.S = function(n, i) {
                    return 0 == n ? i : n < 32 ? new t.UInt64(i.top >>> n | i.bot << 32 - n, i.bot >>> n | i.top << 32 - n) : new t.UInt64(i.bot >>> n - 32 | i.top << 64 - n, i.top >>> n - 32 | i.bot << 64 - n)
                }, n.R = function(n, i) {
                    return 0 == n ? i : n < 32 ? new t.UInt64(i.top >>> n, i.bot >>> n | i.top << 32 - n) : new t.UInt64(0, i.top >>> n - 32)
                }, n.Ch = function(n, i, s) {
                    return new t.UInt64(n.top & i.top ^ ~n.top & s.top, n.bot & i.bot ^ ~n.bot & s.bot)
                }, n.Maj = function(n, i, s) {
                    return new t.UInt64(n.top & i.top ^ n.top & s.top ^ i.top & s.top, n.bot & i.bot ^ n.bot & s.bot ^ i.bot & s.bot)
                }, n.Sig0 = function(i) {
                    var s = n.S(28, i),
                        o = n.S(34, i),
                        r = n.S(39, i);
                    return new t.UInt64(s.top ^ o.top ^ r.top, s.bot ^ o.bot ^ r.bot)
                }, n.Sig1 = function(i) {
                    var s = n.S(14, i),
                        o = n.S(18, i),
                        r = n.S(41, i);
                    return new t.UInt64(s.top ^ o.top ^ r.top, s.bot ^ o.bot ^ r.bot)
                }, n.theta0 = function(i) {
                    var s = n.S(1, i),
                        o = n.S(8, i),
                        r = n.R(7, i);
                    return new t.UInt64(s.top ^ o.top ^ r.top, s.bot ^ o.bot ^ r.bot)
                }, n.theta1 = function(i) {
                    var s = n.S(19, i),
                        o = n.S(61, i),
                        r = n.R(6, i);
                    return new t.UInt64(s.top ^ o.top ^ r.top, s.bot ^ o.bot ^ r.bot)
                }, n.len = 48, n.H = [new t.UInt64(3418070365, 3238371032), new t.UInt64(1654270250, 914150663), new t.UInt64(2438529370, 812702999), new t.UInt64(355462360, 4144912697), new t.UInt64(1731405415, 4290775857), new t.UInt64(2394180231, 1750603025), new t.UInt64(3675008525, 1694076839), new t.UInt64(1203062813, 3204075428)], n.HK = [new t.UInt64(1116352408, 3609767458), new t.UInt64(1899447441, 602891725), new t.UInt64(3049323471, 3964484399), new t.UInt64(3921009573, 2173295548), new t.UInt64(961987163, 4081628472), new t.UInt64(1508970993, 3053834265), new t.UInt64(2453635748, 2937671579), new t.UInt64(2870763221, 3664609560), new t.UInt64(3624381080, 2734883394), new t.UInt64(310598401, 1164996542), new t.UInt64(607225278, 1323610764), new t.UInt64(1426881987, 3590304994), new t.UInt64(1925078388, 4068182383), new t.UInt64(2162078206, 991336113), new t.UInt64(2614888103, 633803317), new t.UInt64(3248222580, 3479774868), new t.UInt64(3835390401, 2666613458), new t.UInt64(4022224774, 944711139), new t.UInt64(264347078, 2341262773), new t.UInt64(604807628, 2007800933), new t.UInt64(770255983, 1495990901), new t.UInt64(1249150122, 1856431235), new t.UInt64(1555081692, 3175218132), new t.UInt64(1996064986, 2198950837), new t.UInt64(2554220882, 3999719339), new t.UInt64(2821834349, 766784016), new t.UInt64(2952996808, 2566594879), new t.UInt64(3210313671, 3203337956), new t.UInt64(3336571891, 1034457026), new t.UInt64(3584528711, 2466948901), new t.UInt64(113926993, 3758326383), new t.UInt64(338241895, 168717936), new t.UInt64(666307205, 1188179964), new t.UInt64(773529912, 1546045734), new t.UInt64(1294757372, 1522805485), new t.UInt64(1396182291, 2643833823), new t.UInt64(1695183700, 2343527390), new t.UInt64(1986661051, 1014477480), new t.UInt64(2177026350, 1206759142), new t.UInt64(2456956037, 344077627), new t.UInt64(2730485921, 1290863460), new t.UInt64(2820302411, 3158454273), new t.UInt64(3259730800, 3505952657), new t.UInt64(3345764771, 106217008), new t.UInt64(3516065817, 3606008344), new t.UInt64(3600352804, 1432725776), new t.UInt64(4094571909, 1467031594), new t.UInt64(275423344, 851169720), new t.UInt64(430227734, 3100823752), new t.UInt64(506948616, 1363258195), new t.UInt64(659060556, 3750685593), new t.UInt64(883997877, 3785050280), new t.UInt64(958139571, 3318307427), new t.UInt64(1322822218, 3812723403), new t.UInt64(1537002063, 2003034995), new t.UInt64(1747873779, 3602036899), new t.UInt64(1955562222, 1575990012), new t.UInt64(2024104815, 1125592928), new t.UInt64(2227730452, 2716904306), new t.UInt64(2361852424, 442776044), new t.UInt64(2428436474, 593698344), new t.UInt64(2756734187, 3733110249), new t.UInt64(3204031479, 2999351573), new t.UInt64(3329325298, 3815920427), new t.UInt64(3391569614, 3928383900), new t.UInt64(3515267271, 566280711), new t.UInt64(3940187606, 3454069534), new t.UInt64(4118630271, 4000239992), new t.UInt64(116418474, 1914138554), new t.UInt64(174292421, 2731055270), new t.UInt64(289380356, 3203993006), new t.UInt64(460393269, 320620315), new t.UInt64(685471733, 587496836), new t.UInt64(852142971, 1086792851), new t.UInt64(1017036298, 365543100), new t.UInt64(1126000580, 2618297676), new t.UInt64(1288033470, 3409855158), new t.UInt64(1501505948, 4234509866), new t.UInt64(1607167915, 987167468), new t.UInt64(1816402316, 1246189591)], n
            })
        },
        1603: function(t, n, i) {
            void 0 !== t.exports && (t.exports.HASH512 = function(t) {
                "use strict";
                var n = function() {
                    this.length = [], this.h = [], this.w = [], this.init()
                };
                return n.prototype = {
                    transform: function() {
                        var t, i, s, o, r, h, e, c, u, a, f;
                        for (f = 16; f < 80; f++) this.w[f] = n.theta1(this.w[f - 2]).add(this.w[f - 7]).add(n.theta0(this.w[f - 15])).add(this.w[f - 16]);
                        for (t = this.h[0].copy(), i = this.h[1].copy(), s = this.h[2].copy(), o = this.h[3].copy(), r = this.h[4].copy(), h = this.h[5].copy(), e = this.h[6].copy(), c = this.h[7].copy(), f = 0; f < 80; f++)(u = c.copy()).add(n.Sig1(r)).add(n.Ch(r, h, e)).add(n.HK[f]).add(this.w[f]), (a = n.Sig0(t)).add(n.Maj(t, i, s)), c = e, e = h, h = r, (r = o.copy()).add(u), o = s, s = i, i = t, (t = u.copy()).add(a);
                        this.h[0].add(t), this.h[1].add(i), this.h[2].add(s), this.h[3].add(o), this.h[4].add(r), this.h[5].add(h), this.h[6].add(e), this.h[7].add(c)
                    },
                    init: function() {
                        var i;
                        for (i = 0; i < 80; i++) this.w[i] = new t.UInt64(0, 0);
                        this.length[0] = new t.UInt64(0, 0), this.length[1] = new t.UInt64(0, 0), this.h[0] = n.H[0].copy(), this.h[1] = n.H[1].copy(), this.h[2] = n.H[2].copy(), this.h[3] = n.H[3].copy(), this.h[4] = n.H[4].copy(), this.h[5] = n.H[5].copy(), this.h[6] = n.H[6].copy(), this.h[7] = n.H[7].copy()
                    },
                    process: function(n) {
                        var i, s;
                        i = (this.length[0].bot >>> 6) % 16, this.w[i].shlb(), this.w[i].bot |= 255 & n, s = new t.UInt64(0, 8), this.length[0].add(s), 0 === this.length[0].top && 0 == this.length[0].bot && (s = new t.UInt64(0, 1), this.length[1].add(s)), this.length[0].bot % 1024 == 0 && this.transform()
                    },
                    process_array: function(t) {
                        for (var n = 0; n < t.length; n++) this.process(t[n])
                    },
                    process_num: function(t) {
                        this.process(t >> 24 & 255), this.process(t >> 16 & 255), this.process(t >> 8 & 255), this.process(255 & t)
                    },
                    hash: function() {
                        var t, i, s, o = [];
                        for (t = this.length[0].copy(), i = this.length[1].copy(), this.process(128); this.length[0].bot % 1024 != 896;) this.process(0);
                        for (this.w[14] = i, this.w[15] = t, this.transform(), s = 0; s < n.len; s++) o[s] = 255 & n.R(8 * (7 - s % 8), this.h[s >>> 3]).bot;
                        return this.init(), o
                    }
                }, n.S = function(n, i) {
                    return 0 == n ? i : n < 32 ? new t.UInt64(i.top >>> n | i.bot << 32 - n, i.bot >>> n | i.top << 32 - n) : new t.UInt64(i.bot >>> n - 32 | i.top << 64 - n, i.top >>> n - 32 | i.bot << 64 - n)
                }, n.R = function(n, i) {
                    return 0 == n ? i : n < 32 ? new t.UInt64(i.top >>> n, i.bot >>> n | i.top << 32 - n) : new t.UInt64(0, i.top >>> n - 32)
                }, n.Ch = function(n, i, s) {
                    return new t.UInt64(n.top & i.top ^ ~n.top & s.top, n.bot & i.bot ^ ~n.bot & s.bot)
                }, n.Maj = function(n, i, s) {
                    return new t.UInt64(n.top & i.top ^ n.top & s.top ^ i.top & s.top, n.bot & i.bot ^ n.bot & s.bot ^ i.bot & s.bot)
                }, n.Sig0 = function(i) {
                    var s = n.S(28, i),
                        o = n.S(34, i),
                        r = n.S(39, i);
                    return new t.UInt64(s.top ^ o.top ^ r.top, s.bot ^ o.bot ^ r.bot)
                }, n.Sig1 = function(i) {
                    var s = n.S(14, i),
                        o = n.S(18, i),
                        r = n.S(41, i);
                    return new t.UInt64(s.top ^ o.top ^ r.top, s.bot ^ o.bot ^ r.bot)
                }, n.theta0 = function(i) {
                    var s = n.S(1, i),
                        o = n.S(8, i),
                        r = n.R(7, i);
                    return new t.UInt64(s.top ^ o.top ^ r.top, s.bot ^ o.bot ^ r.bot)
                }, n.theta1 = function(i) {
                    var s = n.S(19, i),
                        o = n.S(61, i),
                        r = n.R(6, i);
                    return new t.UInt64(s.top ^ o.top ^ r.top, s.bot ^ o.bot ^ r.bot)
                }, n.len = 64, n.H = [new t.UInt64(1779033703, 4089235720), new t.UInt64(3144134277, 2227873595), new t.UInt64(1013904242, 4271175723), new t.UInt64(2773480762, 1595750129), new t.UInt64(1359893119, 2917565137), new t.UInt64(2600822924, 725511199), new t.UInt64(528734635, 4215389547), new t.UInt64(1541459225, 327033209)], n.HK = [new t.UInt64(1116352408, 3609767458), new t.UInt64(1899447441, 602891725), new t.UInt64(3049323471, 3964484399), new t.UInt64(3921009573, 2173295548), new t.UInt64(961987163, 4081628472), new t.UInt64(1508970993, 3053834265), new t.UInt64(2453635748, 2937671579), new t.UInt64(2870763221, 3664609560), new t.UInt64(3624381080, 2734883394), new t.UInt64(310598401, 1164996542), new t.UInt64(607225278, 1323610764), new t.UInt64(1426881987, 3590304994), new t.UInt64(1925078388, 4068182383), new t.UInt64(2162078206, 991336113), new t.UInt64(2614888103, 633803317), new t.UInt64(3248222580, 3479774868), new t.UInt64(3835390401, 2666613458), new t.UInt64(4022224774, 944711139), new t.UInt64(264347078, 2341262773), new t.UInt64(604807628, 2007800933), new t.UInt64(770255983, 1495990901), new t.UInt64(1249150122, 1856431235), new t.UInt64(1555081692, 3175218132), new t.UInt64(1996064986, 2198950837), new t.UInt64(2554220882, 3999719339), new t.UInt64(2821834349, 766784016), new t.UInt64(2952996808, 2566594879), new t.UInt64(3210313671, 3203337956), new t.UInt64(3336571891, 1034457026), new t.UInt64(3584528711, 2466948901), new t.UInt64(113926993, 3758326383), new t.UInt64(338241895, 168717936), new t.UInt64(666307205, 1188179964), new t.UInt64(773529912, 1546045734), new t.UInt64(1294757372, 1522805485), new t.UInt64(1396182291, 2643833823), new t.UInt64(1695183700, 2343527390), new t.UInt64(1986661051, 1014477480), new t.UInt64(2177026350, 1206759142), new t.UInt64(2456956037, 344077627), new t.UInt64(2730485921, 1290863460), new t.UInt64(2820302411, 3158454273), new t.UInt64(3259730800, 3505952657), new t.UInt64(3345764771, 106217008), new t.UInt64(3516065817, 3606008344), new t.UInt64(3600352804, 1432725776), new t.UInt64(4094571909, 1467031594), new t.UInt64(275423344, 851169720), new t.UInt64(430227734, 3100823752), new t.UInt64(506948616, 1363258195), new t.UInt64(659060556, 3750685593), new t.UInt64(883997877, 3785050280), new t.UInt64(958139571, 3318307427), new t.UInt64(1322822218, 3812723403), new t.UInt64(1537002063, 2003034995), new t.UInt64(1747873779, 3602036899), new t.UInt64(1955562222, 1575990012), new t.UInt64(2024104815, 1125592928), new t.UInt64(2227730452, 2716904306), new t.UInt64(2361852424, 442776044), new t.UInt64(2428436474, 593698344), new t.UInt64(2756734187, 3733110249), new t.UInt64(3204031479, 2999351573), new t.UInt64(3329325298, 3815920427), new t.UInt64(3391569614, 3928383900), new t.UInt64(3515267271, 566280711), new t.UInt64(3940187606, 3454069534), new t.UInt64(4118630271, 4000239992), new t.UInt64(116418474, 1914138554), new t.UInt64(174292421, 2731055270), new t.UInt64(289380356, 3203993006), new t.UInt64(460393269, 320620315), new t.UInt64(685471733, 587496836), new t.UInt64(852142971, 1086792851), new t.UInt64(1017036298, 365543100), new t.UInt64(1126000580, 2618297676), new t.UInt64(1288033470, 3409855158), new t.UInt64(1501505948, 4234509866), new t.UInt64(1607167915, 987167468), new t.UInt64(1816402316, 1246189591)], n
            })
        },
        2737: function(t, n, i) {
            t.exports = i(988)
        },
        2738: function(t, n, i) {
            var s = {
                "./aes": 1590,
                "./aes.js": 1590,
                "./big": 1591,
                "./big.js": 1591,
                "./ctx": 988,
                "./ctx.js": 988,
                "./ecdh": 1592,
                "./ecdh.js": 1592,
                "./ecp": 1593,
                "./ecp.js": 1593,
                "./ecp2": 1594,
                "./ecp2.js": 1594,
                "./ff": 1595,
                "./ff.js": 1595,
                "./fp": 1596,
                "./fp.js": 1596,
                "./fp12": 1597,
                "./fp12.js": 1597,
                "./fp2": 1598,
                "./fp2.js": 1598,
                "./fp4": 1599,
                "./fp4.js": 1599,
                "./gcm": 1600,
                "./gcm.js": 1600,
                "./hash256": 1601,
                "./hash256.js": 1601,
                "./hash384": 1602,
                "./hash384.js": 1602,
                "./hash512": 1603,
                "./hash512.js": 1603,
                "./mpin": 1604,
                "./mpin.js": 1604,
                "./newhope": 1605,
                "./newhope.js": 1605,
                "./nhs": 1606,
                "./nhs.js": 1606,
                "./pair": 1607,
                "./pair.js": 1607,
                "./rand": 1608,
                "./rand.js": 1608,
                "./rom_curve": 1609,
                "./rom_curve.js": 1609,
                "./rom_field": 1610,
                "./rom_field.js": 1610,
                "./rsa": 1611,
                "./rsa.js": 1611,
                "./sha3": 1612,
                "./sha3.js": 1612,
                "./uint64": 1613,
                "./uint64.js": 1613
            };

            function o(t) {
                var n = r(t);
                return i(n)
            }

            function r(t) {
                if (!i.o(s, t)) {
                    var n = new Error("Cannot find module '" + t + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return s[t]
            }
            o.keys = function() {
                return Object.keys(s)
            }, o.resolve = r, t.exports = o, o.id = 2738
        },
        579: function(t, n, i) {
            "use strict";
            var s = i(18),
                o = i(1571),
                r = i(21).Buffer,
                h = new Array(16);

            function e() {
                o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
            }

            function c(t, n) {
                return t << n | t >>> 32 - n
            }

            function u(t, n, i, s, o, r, h) {
                return c(t + (n & i | ~n & s) + o + r | 0, h) + n | 0
            }

            function a(t, n, i, s, o, r, h) {
                return c(t + (n & s | i & ~s) + o + r | 0, h) + n | 0
            }

            function f(t, n, i, s, o, r, h) {
                return c(t + (n ^ i ^ s) + o + r | 0, h) + n | 0
            }

            function p(t, n, i, s, o, r, h) {
                return c(t + (i ^ (n | ~s)) + o + r | 0, h) + n | 0
            }
            s(e, o), e.prototype._update = function() {
                for (var t = h, n = 0; n < 16; ++n) t[n] = this._block.readInt32LE(4 * n);
                var i = this._a,
                    s = this._b,
                    o = this._c,
                    r = this._d;
                i = u(i, s, o, r, t[0], 3614090360, 7), r = u(r, i, s, o, t[1], 3905402710, 12), o = u(o, r, i, s, t[2], 606105819, 17), s = u(s, o, r, i, t[3], 3250441966, 22), i = u(i, s, o, r, t[4], 4118548399, 7), r = u(r, i, s, o, t[5], 1200080426, 12), o = u(o, r, i, s, t[6], 2821735955, 17), s = u(s, o, r, i, t[7], 4249261313, 22), i = u(i, s, o, r, t[8], 1770035416, 7), r = u(r, i, s, o, t[9], 2336552879, 12), o = u(o, r, i, s, t[10], 4294925233, 17), s = u(s, o, r, i, t[11], 2304563134, 22), i = u(i, s, o, r, t[12], 1804603682, 7), r = u(r, i, s, o, t[13], 4254626195, 12), o = u(o, r, i, s, t[14], 2792965006, 17), i = a(i, s = u(s, o, r, i, t[15], 1236535329, 22), o, r, t[1], 4129170786, 5), r = a(r, i, s, o, t[6], 3225465664, 9), o = a(o, r, i, s, t[11], 643717713, 14), s = a(s, o, r, i, t[0], 3921069994, 20), i = a(i, s, o, r, t[5], 3593408605, 5), r = a(r, i, s, o, t[10], 38016083, 9), o = a(o, r, i, s, t[15], 3634488961, 14), s = a(s, o, r, i, t[4], 3889429448, 20), i = a(i, s, o, r, t[9], 568446438, 5), r = a(r, i, s, o, t[14], 3275163606, 9), o = a(o, r, i, s, t[3], 4107603335, 14), s = a(s, o, r, i, t[8], 1163531501, 20), i = a(i, s, o, r, t[13], 2850285829, 5), r = a(r, i, s, o, t[2], 4243563512, 9), o = a(o, r, i, s, t[7], 1735328473, 14), i = f(i, s = a(s, o, r, i, t[12], 2368359562, 20), o, r, t[5], 4294588738, 4), r = f(r, i, s, o, t[8], 2272392833, 11), o = f(o, r, i, s, t[11], 1839030562, 16), s = f(s, o, r, i, t[14], 4259657740, 23), i = f(i, s, o, r, t[1], 2763975236, 4), r = f(r, i, s, o, t[4], 1272893353, 11), o = f(o, r, i, s, t[7], 4139469664, 16), s = f(s, o, r, i, t[10], 3200236656, 23), i = f(i, s, o, r, t[13], 681279174, 4), r = f(r, i, s, o, t[0], 3936430074, 11), o = f(o, r, i, s, t[3], 3572445317, 16), s = f(s, o, r, i, t[6], 76029189, 23), i = f(i, s, o, r, t[9], 3654602809, 4), r = f(r, i, s, o, t[12], 3873151461, 11), o = f(o, r, i, s, t[15], 530742520, 16), i = p(i, s = f(s, o, r, i, t[2], 3299628645, 23), o, r, t[0], 4096336452, 6), r = p(r, i, s, o, t[7], 1126891415, 10), o = p(o, r, i, s, t[14], 2878612391, 15), s = p(s, o, r, i, t[5], 4237533241, 21), i = p(i, s, o, r, t[12], 1700485571, 6), r = p(r, i, s, o, t[3], 2399980690, 10), o = p(o, r, i, s, t[10], 4293915773, 15), s = p(s, o, r, i, t[1], 2240044497, 21), i = p(i, s, o, r, t[8], 1873313359, 6), r = p(r, i, s, o, t[15], 4264355552, 10), o = p(o, r, i, s, t[6], 2734768916, 15), s = p(s, o, r, i, t[13], 1309151649, 21), i = p(i, s, o, r, t[4], 4149444226, 6), r = p(r, i, s, o, t[11], 3174756917, 10), o = p(o, r, i, s, t[2], 718787259, 15), s = p(s, o, r, i, t[9], 3951481745, 21), this._a = this._a + i | 0, this._b = this._b + s | 0, this._c = this._c + o | 0, this._d = this._d + r | 0
            }, e.prototype._digest = function() {
                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var t = r.allocUnsafe(16);
                return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t
            }, t.exports = e
        },
        988: function(t, n, i) {
            void 0 !== t.exports && (t.exports = function(t) {
                "use strict";
                var n, s, o = this;
                if (n = {
                        ED25519: {
                            BITS: "256",
                            FIELD: "25519",
                            CURVE: "ED25519",
                            "@NB": 32,
                            "@BASE": 24,
                            "@NBT": 255,
                            "@M8": 5,
                            "@MT": 1,
                            "@CT": 1,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        C25519: {
                            BITS: "256",
                            FIELD: "25519",
                            CURVE: "C25519",
                            "@NB": 32,
                            "@BASE": 24,
                            "@NBT": 255,
                            "@M8": 5,
                            "@MT": 1,
                            "@CT": 2,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        NIST256: {
                            BITS: "256",
                            FIELD: "NIST256",
                            CURVE: "NIST256",
                            "@NB": 32,
                            "@BASE": 24,
                            "@NBT": 256,
                            "@M8": 7,
                            "@MT": 0,
                            "@CT": 0,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        NIST384: {
                            BITS: "384",
                            FIELD: "NIST384",
                            CURVE: "NIST384",
                            "@NB": 48,
                            "@BASE": 23,
                            "@NBT": 384,
                            "@M8": 7,
                            "@MT": 0,
                            "@CT": 0,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        BRAINPOOL: {
                            BITS: "256",
                            FIELD: "BRAINPOOL",
                            CURVE: "BRAINPOOL",
                            "@NB": 32,
                            "@BASE": 24,
                            "@NBT": 256,
                            "@M8": 7,
                            "@MT": 0,
                            "@CT": 0,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        ANSSI: {
                            BITS: "256",
                            FIELD: "ANSSI",
                            CURVE: "ANSSI",
                            "@NB": 32,
                            "@BASE": 24,
                            "@NBT": 256,
                            "@M8": 7,
                            "@MT": 0,
                            "@CT": 0,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        HIFIVE: {
                            BITS: "336",
                            FIELD: "HIFIVE",
                            CURVE: "HIFIVE",
                            "@NB": 42,
                            "@BASE": 23,
                            "@NBT": 336,
                            "@M8": 5,
                            "@MT": 1,
                            "@CT": 1,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        GOLDILOCKS: {
                            BITS: "448",
                            FIELD: "GOLDILOCKS",
                            CURVE: "GOLDILOCKS",
                            "@NB": 56,
                            "@BASE": 23,
                            "@NBT": 448,
                            "@M8": 7,
                            "@MT": 2,
                            "@CT": 1,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        C41417: {
                            BITS: "416",
                            FIELD: "C41417",
                            CURVE: "C41417",
                            "@NB": 52,
                            "@BASE": 22,
                            "@NBT": 414,
                            "@M8": 7,
                            "@MT": 1,
                            "@CT": 1,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        NIST521: {
                            BITS: "528",
                            FIELD: "NIST521",
                            CURVE: "NIST521",
                            "@NB": 66,
                            "@BASE": 23,
                            "@NBT": 521,
                            "@M8": 7,
                            "@MT": 1,
                            "@CT": 0,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        NUMS256W: {
                            BITS: "256",
                            FIELD: "256PM",
                            CURVE: "NUMS256W",
                            "@NB": 32,
                            "@BASE": 24,
                            "@NBT": 256,
                            "@M8": 3,
                            "@MT": 1,
                            "@CT": 0,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        NUMS256E: {
                            BITS: "256",
                            FIELD: "256PM",
                            CURVE: "NUMS256E",
                            "@NB": 32,
                            "@BASE": 24,
                            "@NBT": 256,
                            "@M8": 3,
                            "@MT": 1,
                            "@CT": 1,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        NUMS384W: {
                            BITS: "384",
                            FIELD: "384PM",
                            CURVE: "NUMS384W",
                            "@NB": 48,
                            "@BASE": 23,
                            "@NBT": 384,
                            "@M8": 3,
                            "@MT": 1,
                            "@CT": 0,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        NUMS384E: {
                            BITS: "384",
                            FIELD: "384PM",
                            CURVE: "NUMS384E",
                            "@NB": 48,
                            "@BASE": 23,
                            "@NBT": 384,
                            "@M8": 3,
                            "@MT": 1,
                            "@CT": 1,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        NUMS512W: {
                            BITS: "512",
                            FIELD: "512PM",
                            CURVE: "NUMS512W",
                            "@NB": 64,
                            "@BASE": 23,
                            "@NBT": 512,
                            "@M8": 7,
                            "@MT": 1,
                            "@CT": 0,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        NUMS512E: {
                            BITS: "512",
                            FIELD: "512PM",
                            CURVE: "NUMS512E",
                            "@NB": 64,
                            "@BASE": 23,
                            "@NBT": 512,
                            "@M8": 7,
                            "@MT": 1,
                            "@CT": 1,
                            "@PF": 0,
                            "@ST": 0,
                            "@SX": 0
                        },
                        FP256BN: {
                            BITS: "256",
                            FIELD: "FP256BN",
                            CURVE: "FP256BN",
                            "@NB": 32,
                            "@BASE": 24,
                            "@NBT": 256,
                            "@M8": 3,
                            "@MT": 0,
                            "@CT": 0,
                            "@PF": 1,
                            "@ST": 1,
                            "@SX": 1
                        },
                        FP512BN: {
                            BITS: "512",
                            FIELD: "FP512BN",
                            CURVE: "FP512BN",
                            "@NB": 64,
                            "@BASE": 23,
                            "@NBT": 512,
                            "@M8": 3,
                            "@MT": 0,
                            "@CT": 0,
                            "@PF": 1,
                            "@ST": 1,
                            "@SX": 0
                        },
                        BN254: {
                            BITS: "256",
                            FIELD: "BN254",
                            CURVE: "BN254",
                            "@NB": 32,
                            "@BASE": 24,
                            "@NBT": 254,
                            "@M8": 3,
                            "@MT": 0,
                            "@CT": 0,
                            "@PF": 1,
                            "@ST": 0,
                            "@SX": 1
                        },
                        BN254CX: {
                            BITS: "256",
                            FIELD: "BN254CX",
                            CURVE: "BN254CX",
                            "@NB": 32,
                            "@BASE": 24,
                            "@NBT": 254,
                            "@M8": 3,
                            "@MT": 0,
                            "@CT": 0,
                            "@PF": 1,
                            "@ST": 0,
                            "@SX": 1
                        },
                        BLS383: {
                            BITS: "384",
                            FIELD: "BLS383",
                            CURVE: "BLS383",
                            "@NB": 48,
                            "@BASE": 23,
                            "@NBT": 383,
                            "@M8": 3,
                            "@MT": 0,
                            "@CT": 0,
                            "@PF": 2,
                            "@ST": 1,
                            "@SX": 0
                        },
                        BLS461: {
                            BITS: "464",
                            FIELD: "BLS461",
                            CURVE: "BLS461",
                            "@NB": 58,
                            "@BASE": 23,
                            "@NBT": 461,
                            "@M8": 3,
                            "@MT": 0,
                            "@CT": 0,
                            "@PF": 2,
                            "@ST": 1,
                            "@SX": 1
                        },
                        RSA2048: {
                            BITS: "1024",
                            TFF: "2048",
                            "@NB": 128,
                            "@BASE": 22,
                            "@ML": 2
                        },
                        RSA3072: {
                            BITS: "384",
                            TFF: "3072",
                            "@NB": 48,
                            "@BASE": 23,
                            "@ML": 8
                        },
                        RSA4096: {
                            BITS: "512",
                            TFF: "4096",
                            "@NB": 64,
                            "@BASE": 23,
                            "@ML": 8
                        }
                    }, (s = function(t, n, s) {
                        s || (s = t), n || (n = t.toLowerCase()), o[s] = i(2738)("./" + n)[t](o)
                    })("AES"), s("GCM"), s("UInt64"), s("HASH256"), s("HASH384"), s("HASH512"), s("SHA3"), s("RAND"), s("NewHope"), s("NHS"), void 0 !== t) return o.config = n[t], s("BIG"), s("DBIG", "big"), void 0 !== o.config.TFF ? (s("FF"), s("RSA"), s("rsa_public_key", "rsa"), void s("rsa_private_key", "rsa")) : void 0 !== o.config.CURVE ? (s("ROM_CURVE_" + o.config.CURVE, "rom_curve", "ROM_CURVE"), s("ROM_FIELD_" + o.config.FIELD, "rom_field", "ROM_FIELD"), s("FP"), s("ECP"), s("ECDH"), void(0 != o.config["@PF"] && (s("FP2"), s("FP4"), s("FP12"), s("ECP2"), s("PAIR"), s("MPIN")))) : void 0
            })
        }
    }
]);