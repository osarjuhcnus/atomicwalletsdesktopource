/*! For license information please see vendors.c470b3a4373062b6f674.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [208], {
        1071: function(e, n, i) {
            "use strict";
            const {
                Buffer: t
            } = i(12), s = i(3506), r = i(470), k = i(3512);

            function a(e) {
                n.decode(e)
            }
            n.names = k.names, n.codes = k.codes, n.defaultLengths = k.defaultLengths, n.toHexString = function(e) {
                if (!t.isBuffer(e)) throw new Error("must be passed a buffer");
                return e.toString("hex")
            }, n.fromHexString = function(e) {
                return t.from(e, "hex")
            }, n.toB58String = function(e) {
                if (!t.isBuffer(e)) throw new Error("must be passed a buffer");
                return s.encode("base58btc", e).toString().slice(1)
            }, n.fromB58String = function(e) {
                let n = e;
                return t.isBuffer(e) && (n = e.toString()), s.decode("z" + n)
            }, n.decode = function(e) {
                if (!t.isBuffer(e)) throw new Error("multihash must be a Buffer");
                if (e.length < 2) throw new Error("multihash too short. must be > 2 bytes.");
                const i = r.decode(e);
                if (!n.isValidCode(i)) throw new Error("multihash unknown function code: 0x" + i.toString(16));
                e = e.slice(r.decode.bytes);
                const s = r.decode(e);
                if (s < 0) throw new Error("multihash invalid length: " + s);
                if ((e = e.slice(r.decode.bytes)).length !== s) throw new Error("multihash length inconsistent: 0x" + e.toString("hex"));
                return {
                    code: i,
                    name: k.codes[i],
                    length: s,
                    digest: e
                }
            }, n.encode = function(e, i, s) {
                if (!e || void 0 === i) throw new Error("multihash encode requires at least two args: digest, code");
                const k = n.coerceCode(i);
                if (!t.isBuffer(e)) throw new Error("digest should be a Buffer");
                if (null == s && (s = e.length), s && e.length !== s) throw new Error("digest length should be equal to specified length.");
                return t.concat([t.from(r.encode(k)), t.from(r.encode(s)), e])
            }, n.coerceCode = function(e) {
                let i = e;
                if ("string" == typeof e) {
                    if (void 0 === k.names[e]) throw new Error("Unrecognized hash function named: " + e);
                    i = k.names[e]
                }
                if ("number" != typeof i) throw new Error("Hash function code should be a number. Got: " + i);
                if (void 0 === k.codes[i] && !n.isAppCode(i)) throw new Error("Unrecognized function code: " + i);
                return i
            }, n.isAppCode = function(e) {
                return e > 0 && e < 16
            }, n.isValidCode = function(e) {
                return !!n.isAppCode(e) || !!k.codes[e]
            }, n.validate = a, n.prefix = function(e) {
                return a(e), e.slice(0, 2)
            }
        },
        1853: function(e, n, i) {
            "use strict";
            const t = i(470);

            function s(e) {
                return parseInt(e.toString("hex"), 16)
            }

            function r(e) {
                let n = e.toString(16);
                return n.length % 2 == 1 && (n = "0" + n), Buffer.from(n, "hex")
            }
            e.exports = {
                numberToBuffer: r,
                bufferToNumber: s,
                varintBufferEncode: function(e) {
                    return Buffer.from(t.encode(s(e)))
                },
                varintBufferDecode: function(e) {
                    return r(t.decode(e))
                },
                varintEncode: function(e) {
                    return Buffer.from(t.encode(e))
                }
            }
        },
        3497: function(e, n, i) {
            "use strict";
            const t = i(470),
                s = i(3501),
                r = i(3502),
                k = i(1853);
            (n = e.exports).addPrefix = (e, n) => {
                let i;
                if (Buffer.isBuffer(e)) i = k.varintBufferEncode(e);
                else {
                    if (!r[e]) throw new Error("multicodec not recognized");
                    i = r[e]
                }
                return Buffer.concat([i, n])
            }, n.rmPrefix = e => (t.decode(e), e.slice(t.decode.bytes)), n.getCodec = e => {
                const n = t.decode(e),
                    i = s.get(n);
                if (void 0 === i) throw new Error(`Code ${n} not found`);
                return i
            }, n.getName = e => s.get(e), n.getNumber = e => {
                const n = r[e];
                if (void 0 === n) throw new Error("Codec `" + e + "` not found");
                return k.varintBufferDecode(n)[0]
            }, n.getCode = e => t.decode(e), n.getCodeVarint = e => {
                const n = r[e];
                if (void 0 === n) throw new Error("Codec `" + e + "` not found");
                return n
            }, n.getVarint = e => t.encode(e);
            const a = i(3503);
            Object.assign(n, a), n.print = i(3504)
        },
        3501: function(e, n, i) {
            "use strict";
            const t = i(626),
                s = new Map;
            for (const e in t) {
                const n = t[e];
                s.set(n, e)
            }
            e.exports = Object.freeze(s)
        },
        3502: function(e, n, i) {
            "use strict";
            const t = i(626),
                s = i(1853).varintEncode,
                r = {};
            for (const e in t) {
                const n = t[e];
                r[e] = s(n)
            }
            e.exports = Object.freeze(r)
        },
        3503: function(e, n, i) {
            "use strict";
            const t = i(626),
                s = {};
            for (const [e, n] of Object.entries(t)) s[e.toUpperCase().replace(/-/g, "_")] = n;
            e.exports = Object.freeze(s)
        },
        3504: function(e, n, i) {
            "use strict";
            const t = i(626),
                s = {};
            for (const [e, n] of Object.entries(t)) void 0 === s[n] && (s[n] = e);
            e.exports = Object.freeze(s)
        },
        3506: function(e, n, i) {
            "use strict";
            const {
                Buffer: t
            } = i(12), s = i(3507);

            function r(e, n) {
                if (!n) throw new Error("requires an encoded buffer");
                const i = k(e),
                    s = t.from(i.code);
                return function(e, n) {
                    k(e).decode(n.toString())
                }(i.name, n), t.concat([s, n])
            }

            function k(e) {
                let n;
                if (s.names[e]) n = s.names[e];
                else {
                    if (!s.codes[e]) throw new Error("Unsupported encoding");
                    n = s.codes[e]
                }
                if (!n.isImplemented()) throw new Error("Base " + e + " is not implemented yet");
                return n
            }(n = e.exports = r).encode = function(e, n) {
                const i = k(e);
                return r(i.name, t.from(i.encode(n)))
            }, n.decode = function(e) {
                t.isBuffer(e) && (e = e.toString());
                const n = e.substring(0, 1);
                "string" == typeof(e = e.substring(1, e.length)) && (e = t.from(e));
                const i = k(n);
                return t.from(i.decode(e.toString()))
            }, n.isEncoded = function(e) {
                t.isBuffer(e) && (e = e.toString());
                if ("[object String]" !== Object.prototype.toString.call(e)) return !1;
                const n = e.substring(0, 1);
                try {
                    return k(n).name
                } catch (e) {
                    return !1
                }
            }, n.names = Object.freeze(Object.keys(s.names)), n.codes = Object.freeze(Object.keys(s.codes))
        },
        3507: function(e, n, i) {
            "use strict";
            const t = i(3508),
                s = i(939),
                r = i(3509),
                k = i(3510),
                a = i(3511),
                o = [
                    ["base1", "1", "", "1"],
                    ["base2", "0", s, "01"],
                    ["base8", "7", s, "01234567"],
                    ["base10", "9", s, "0123456789"],
                    ["base16", "f", r, "0123456789abcdef"],
                    ["base32", "b", k, "abcdefghijklmnopqrstuvwxyz234567"],
                    ["base32pad", "c", k, "abcdefghijklmnopqrstuvwxyz234567="],
                    ["base32hex", "v", k, "0123456789abcdefghijklmnopqrstuv"],
                    ["base32hexpad", "t", k, "0123456789abcdefghijklmnopqrstuv="],
                    ["base32z", "h", k, "ybndrfg8ejkmcpqxot1uwisza345h769"],
                    ["base58flickr", "Z", s, "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"],
                    ["base58btc", "z", s, "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],
                    ["base64", "m", a, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],
                    ["base64pad", "M", a, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],
                    ["base64url", "u", a, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"],
                    ["base64urlpad", "U", a, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="]
                ],
                l = o.reduce((e, n) => (e[n[0]] = new t(n[0], n[1], n[2], n[3]), e), {}),
                b = o.reduce((e, n) => (e[n[1]] = l[n[0]], e), {});
            e.exports = {
                names: l,
                codes: b
            }
        },
        3508: function(e, n, i) {
            "use strict";
            e.exports = class Base {
                constructor(e, n, i, t) {
                    this.name = e, this.code = n, this.alphabet = t, i && t && (this.engine = i(t))
                }
                encode(e) {
                    return this.engine.encode(e)
                }
                decode(e) {
                    return this.engine.decode(e)
                }
                isImplemented() {
                    return this.engine
                }
            }
        },
        3509: function(e, n, i) {
            "use strict";
            const {
                Buffer: t
            } = i(12);
            e.exports = function(e) {
                return {
                    encode: e => "string" == typeof e ? t.from(e).toString("hex") : e.toString("hex"),
                    decode(n) {
                        for (const i of n)
                            if (e.indexOf(i) < 0) throw new Error("invalid base16 character");
                        return t.from(n, "hex")
                    }
                }
            }
        },
        3510: function(e, n, i) {
            "use strict";

            function t(e, n) {
                const i = e.byteLength,
                    t = new Uint8Array(e),
                    s = n.indexOf("=") === n.length - 1;
                s && (n = n.substring(0, n.length - 1));
                let r = 0,
                    k = 0,
                    a = "";
                for (let e = 0; e < i; e++)
                    for (k = k << 8 | t[e], r += 8; r >= 5;) a += n[k >>> r - 5 & 31], r -= 5;
                if (r > 0 && (a += n[k << 5 - r & 31]), s)
                    for (; a.length % 8 != 0;) a += "=";
                return a
            }
            e.exports = function(e) {
                return {
                    encode: n => t("string" == typeof n ? Uint8Array.from(n) : n, e),
                    decode(n) {
                        for (const i of n)
                            if (e.indexOf(i) < 0) throw new Error("invalid base32 character");
                        return function(e, n) {
                            const i = (e = e.replace(new RegExp("=", "g"), "")).length;
                            let t = 0,
                                s = 0,
                                r = 0;
                            const k = new Uint8Array(5 * i / 8 | 0);
                            for (let a = 0; a < i; a++) s = s << 5 | n.indexOf(e[a]), t += 5, t >= 8 && (k[r++] = s >>> t - 8 & 255, t -= 8);
                            return k.buffer
                        }(n, e)
                    }
                }
            }
        },
        3511: function(e, n, i) {
            "use strict";
            const {
                Buffer: t
            } = i(12);
            e.exports = function(e) {
                const n = e.indexOf("=") > -1,
                    i = e.indexOf("-") > -1 && e.indexOf("_") > -1;
                return {
                    encode(e) {
                        let s = "";
                        s = "string" == typeof e ? t.from(e).toString("base64") : e.toString("base64"), i && (s = s.replace(/\+/g, "-").replace(/\//g, "_"));
                        const r = s.indexOf("=");
                        return r > 0 && !n && (s = s.substring(0, r)), s
                    },
                    decode(n) {
                        for (const i of n)
                            if (e.indexOf(i) < 0) throw new Error("invalid base64 character");
                        return t.from(n, "base64")
                    }
                }
            }
        },
        3512: function(e, n, i) {
            "use strict";
            n.names = Object.freeze({
                identity: 0,
                sha1: 17,
                "sha2-256": 18,
                "sha2-512": 19,
                "dbl-sha2-256": 86,
                "sha3-224": 23,
                "sha3-256": 22,
                "sha3-384": 21,
                "sha3-512": 20,
                "shake-128": 24,
                "shake-256": 25,
                "keccak-224": 26,
                "keccak-256": 27,
                "keccak-384": 28,
                "keccak-512": 29,
                "murmur3-128": 34,
                "murmur3-32": 35,
                md4: 212,
                md5: 213,
                "blake2b-8": 45569,
                "blake2b-16": 45570,
                "blake2b-24": 45571,
                "blake2b-32": 45572,
                "blake2b-40": 45573,
                "blake2b-48": 45574,
                "blake2b-56": 45575,
                "blake2b-64": 45576,
                "blake2b-72": 45577,
                "blake2b-80": 45578,
                "blake2b-88": 45579,
                "blake2b-96": 45580,
                "blake2b-104": 45581,
                "blake2b-112": 45582,
                "blake2b-120": 45583,
                "blake2b-128": 45584,
                "blake2b-136": 45585,
                "blake2b-144": 45586,
                "blake2b-152": 45587,
                "blake2b-160": 45588,
                "blake2b-168": 45589,
                "blake2b-176": 45590,
                "blake2b-184": 45591,
                "blake2b-192": 45592,
                "blake2b-200": 45593,
                "blake2b-208": 45594,
                "blake2b-216": 45595,
                "blake2b-224": 45596,
                "blake2b-232": 45597,
                "blake2b-240": 45598,
                "blake2b-248": 45599,
                "blake2b-256": 45600,
                "blake2b-264": 45601,
                "blake2b-272": 45602,
                "blake2b-280": 45603,
                "blake2b-288": 45604,
                "blake2b-296": 45605,
                "blake2b-304": 45606,
                "blake2b-312": 45607,
                "blake2b-320": 45608,
                "blake2b-328": 45609,
                "blake2b-336": 45610,
                "blake2b-344": 45611,
                "blake2b-352": 45612,
                "blake2b-360": 45613,
                "blake2b-368": 45614,
                "blake2b-376": 45615,
                "blake2b-384": 45616,
                "blake2b-392": 45617,
                "blake2b-400": 45618,
                "blake2b-408": 45619,
                "blake2b-416": 45620,
                "blake2b-424": 45621,
                "blake2b-432": 45622,
                "blake2b-440": 45623,
                "blake2b-448": 45624,
                "blake2b-456": 45625,
                "blake2b-464": 45626,
                "blake2b-472": 45627,
                "blake2b-480": 45628,
                "blake2b-488": 45629,
                "blake2b-496": 45630,
                "blake2b-504": 45631,
                "blake2b-512": 45632,
                "blake2s-8": 45633,
                "blake2s-16": 45634,
                "blake2s-24": 45635,
                "blake2s-32": 45636,
                "blake2s-40": 45637,
                "blake2s-48": 45638,
                "blake2s-56": 45639,
                "blake2s-64": 45640,
                "blake2s-72": 45641,
                "blake2s-80": 45642,
                "blake2s-88": 45643,
                "blake2s-96": 45644,
                "blake2s-104": 45645,
                "blake2s-112": 45646,
                "blake2s-120": 45647,
                "blake2s-128": 45648,
                "blake2s-136": 45649,
                "blake2s-144": 45650,
                "blake2s-152": 45651,
                "blake2s-160": 45652,
                "blake2s-168": 45653,
                "blake2s-176": 45654,
                "blake2s-184": 45655,
                "blake2s-192": 45656,
                "blake2s-200": 45657,
                "blake2s-208": 45658,
                "blake2s-216": 45659,
                "blake2s-224": 45660,
                "blake2s-232": 45661,
                "blake2s-240": 45662,
                "blake2s-248": 45663,
                "blake2s-256": 45664,
                "Skein256-8": 45825,
                "Skein256-16": 45826,
                "Skein256-24": 45827,
                "Skein256-32": 45828,
                "Skein256-40": 45829,
                "Skein256-48": 45830,
                "Skein256-56": 45831,
                "Skein256-64": 45832,
                "Skein256-72": 45833,
                "Skein256-80": 45834,
                "Skein256-88": 45835,
                "Skein256-96": 45836,
                "Skein256-104": 45837,
                "Skein256-112": 45838,
                "Skein256-120": 45839,
                "Skein256-128": 45840,
                "Skein256-136": 45841,
                "Skein256-144": 45842,
                "Skein256-152": 45843,
                "Skein256-160": 45844,
                "Skein256-168": 45845,
                "Skein256-176": 45846,
                "Skein256-184": 45847,
                "Skein256-192": 45848,
                "Skein256-200": 45849,
                "Skein256-208": 45850,
                "Skein256-216": 45851,
                "Skein256-224": 45852,
                "Skein256-232": 45853,
                "Skein256-240": 45854,
                "Skein256-248": 45855,
                "Skein256-256": 45856,
                "Skein512-8": 45857,
                "Skein512-16": 45858,
                "Skein512-24": 45859,
                "Skein512-32": 45860,
                "Skein512-40": 45861,
                "Skein512-48": 45862,
                "Skein512-56": 45863,
                "Skein512-64": 45864,
                "Skein512-72": 45865,
                "Skein512-80": 45866,
                "Skein512-88": 45867,
                "Skein512-96": 45868,
                "Skein512-104": 45869,
                "Skein512-112": 45870,
                "Skein512-120": 45871,
                "Skein512-128": 45872,
                "Skein512-136": 45873,
                "Skein512-144": 45874,
                "Skein512-152": 45875,
                "Skein512-160": 45876,
                "Skein512-168": 45877,
                "Skein512-176": 45878,
                "Skein512-184": 45879,
                "Skein512-192": 45880,
                "Skein512-200": 45881,
                "Skein512-208": 45882,
                "Skein512-216": 45883,
                "Skein512-224": 45884,
                "Skein512-232": 45885,
                "Skein512-240": 45886,
                "Skein512-248": 45887,
                "Skein512-256": 45888,
                "Skein512-264": 45889,
                "Skein512-272": 45890,
                "Skein512-280": 45891,
                "Skein512-288": 45892,
                "Skein512-296": 45893,
                "Skein512-304": 45894,
                "Skein512-312": 45895,
                "Skein512-320": 45896,
                "Skein512-328": 45897,
                "Skein512-336": 45898,
                "Skein512-344": 45899,
                "Skein512-352": 45900,
                "Skein512-360": 45901,
                "Skein512-368": 45902,
                "Skein512-376": 45903,
                "Skein512-384": 45904,
                "Skein512-392": 45905,
                "Skein512-400": 45906,
                "Skein512-408": 45907,
                "Skein512-416": 45908,
                "Skein512-424": 45909,
                "Skein512-432": 45910,
                "Skein512-440": 45911,
                "Skein512-448": 45912,
                "Skein512-456": 45913,
                "Skein512-464": 45914,
                "Skein512-472": 45915,
                "Skein512-480": 45916,
                "Skein512-488": 45917,
                "Skein512-496": 45918,
                "Skein512-504": 45919,
                "Skein512-512": 45920,
                "Skein1024-8": 45921,
                "Skein1024-16": 45922,
                "Skein1024-24": 45923,
                "Skein1024-32": 45924,
                "Skein1024-40": 45925,
                "Skein1024-48": 45926,
                "Skein1024-56": 45927,
                "Skein1024-64": 45928,
                "Skein1024-72": 45929,
                "Skein1024-80": 45930,
                "Skein1024-88": 45931,
                "Skein1024-96": 45932,
                "Skein1024-104": 45933,
                "Skein1024-112": 45934,
                "Skein1024-120": 45935,
                "Skein1024-128": 45936,
                "Skein1024-136": 45937,
                "Skein1024-144": 45938,
                "Skein1024-152": 45939,
                "Skein1024-160": 45940,
                "Skein1024-168": 45941,
                "Skein1024-176": 45942,
                "Skein1024-184": 45943,
                "Skein1024-192": 45944,
                "Skein1024-200": 45945,
                "Skein1024-208": 45946,
                "Skein1024-216": 45947,
                "Skein1024-224": 45948,
                "Skein1024-232": 45949,
                "Skein1024-240": 45950,
                "Skein1024-248": 45951,
                "Skein1024-256": 45952,
                "Skein1024-264": 45953,
                "Skein1024-272": 45954,
                "Skein1024-280": 45955,
                "Skein1024-288": 45956,
                "Skein1024-296": 45957,
                "Skein1024-304": 45958,
                "Skein1024-312": 45959,
                "Skein1024-320": 45960,
                "Skein1024-328": 45961,
                "Skein1024-336": 45962,
                "Skein1024-344": 45963,
                "Skein1024-352": 45964,
                "Skein1024-360": 45965,
                "Skein1024-368": 45966,
                "Skein1024-376": 45967,
                "Skein1024-384": 45968,
                "Skein1024-392": 45969,
                "Skein1024-400": 45970,
                "Skein1024-408": 45971,
                "Skein1024-416": 45972,
                "Skein1024-424": 45973,
                "Skein1024-432": 45974,
                "Skein1024-440": 45975,
                "Skein1024-448": 45976,
                "Skein1024-456": 45977,
                "Skein1024-464": 45978,
                "Skein1024-472": 45979,
                "Skein1024-480": 45980,
                "Skein1024-488": 45981,
                "Skein1024-496": 45982,
                "Skein1024-504": 45983,
                "Skein1024-512": 45984,
                "Skein1024-520": 45985,
                "Skein1024-528": 45986,
                "Skein1024-536": 45987,
                "Skein1024-544": 45988,
                "Skein1024-552": 45989,
                "Skein1024-560": 45990,
                "Skein1024-568": 45991,
                "Skein1024-576": 45992,
                "Skein1024-584": 45993,
                "Skein1024-592": 45994,
                "Skein1024-600": 45995,
                "Skein1024-608": 45996,
                "Skein1024-616": 45997,
                "Skein1024-624": 45998,
                "Skein1024-632": 45999,
                "Skein1024-640": 46e3,
                "Skein1024-648": 46001,
                "Skein1024-656": 46002,
                "Skein1024-664": 46003,
                "Skein1024-672": 46004,
                "Skein1024-680": 46005,
                "Skein1024-688": 46006,
                "Skein1024-696": 46007,
                "Skein1024-704": 46008,
                "Skein1024-712": 46009,
                "Skein1024-720": 46010,
                "Skein1024-728": 46011,
                "Skein1024-736": 46012,
                "Skein1024-744": 46013,
                "Skein1024-752": 46014,
                "Skein1024-760": 46015,
                "Skein1024-768": 46016,
                "Skein1024-776": 46017,
                "Skein1024-784": 46018,
                "Skein1024-792": 46019,
                "Skein1024-800": 46020,
                "Skein1024-808": 46021,
                "Skein1024-816": 46022,
                "Skein1024-824": 46023,
                "Skein1024-832": 46024,
                "Skein1024-840": 46025,
                "Skein1024-848": 46026,
                "Skein1024-856": 46027,
                "Skein1024-864": 46028,
                "Skein1024-872": 46029,
                "Skein1024-880": 46030,
                "Skein1024-888": 46031,
                "Skein1024-896": 46032,
                "Skein1024-904": 46033,
                "Skein1024-912": 46034,
                "Skein1024-920": 46035,
                "Skein1024-928": 46036,
                "Skein1024-936": 46037,
                "Skein1024-944": 46038,
                "Skein1024-952": 46039,
                "Skein1024-960": 46040,
                "Skein1024-968": 46041,
                "Skein1024-976": 46042,
                "Skein1024-984": 46043,
                "Skein1024-992": 46044,
                "Skein1024-1000": 46045,
                "Skein1024-1008": 46046,
                "Skein1024-1016": 46047,
                "Skein1024-1024": 46048
            }), n.codes = Object.freeze({
                0: "identity",
                17: "sha1",
                18: "sha2-256",
                19: "sha2-512",
                86: "dbl-sha2-256",
                23: "sha3-224",
                22: "sha3-256",
                21: "sha3-384",
                20: "sha3-512",
                24: "shake-128",
                25: "shake-256",
                26: "keccak-224",
                27: "keccak-256",
                28: "keccak-384",
                29: "keccak-512",
                34: "murmur3-128",
                35: "murmur3-32",
                212: "md4",
                213: "md5",
                45569: "blake2b-8",
                45570: "blake2b-16",
                45571: "blake2b-24",
                45572: "blake2b-32",
                45573: "blake2b-40",
                45574: "blake2b-48",
                45575: "blake2b-56",
                45576: "blake2b-64",
                45577: "blake2b-72",
                45578: "blake2b-80",
                45579: "blake2b-88",
                45580: "blake2b-96",
                45581: "blake2b-104",
                45582: "blake2b-112",
                45583: "blake2b-120",
                45584: "blake2b-128",
                45585: "blake2b-136",
                45586: "blake2b-144",
                45587: "blake2b-152",
                45588: "blake2b-160",
                45589: "blake2b-168",
                45590: "blake2b-176",
                45591: "blake2b-184",
                45592: "blake2b-192",
                45593: "blake2b-200",
                45594: "blake2b-208",
                45595: "blake2b-216",
                45596: "blake2b-224",
                45597: "blake2b-232",
                45598: "blake2b-240",
                45599: "blake2b-248",
                45600: "blake2b-256",
                45601: "blake2b-264",
                45602: "blake2b-272",
                45603: "blake2b-280",
                45604: "blake2b-288",
                45605: "blake2b-296",
                45606: "blake2b-304",
                45607: "blake2b-312",
                45608: "blake2b-320",
                45609: "blake2b-328",
                45610: "blake2b-336",
                45611: "blake2b-344",
                45612: "blake2b-352",
                45613: "blake2b-360",
                45614: "blake2b-368",
                45615: "blake2b-376",
                45616: "blake2b-384",
                45617: "blake2b-392",
                45618: "blake2b-400",
                45619: "blake2b-408",
                45620: "blake2b-416",
                45621: "blake2b-424",
                45622: "blake2b-432",
                45623: "blake2b-440",
                45624: "blake2b-448",
                45625: "blake2b-456",
                45626: "blake2b-464",
                45627: "blake2b-472",
                45628: "blake2b-480",
                45629: "blake2b-488",
                45630: "blake2b-496",
                45631: "blake2b-504",
                45632: "blake2b-512",
                45633: "blake2s-8",
                45634: "blake2s-16",
                45635: "blake2s-24",
                45636: "blake2s-32",
                45637: "blake2s-40",
                45638: "blake2s-48",
                45639: "blake2s-56",
                45640: "blake2s-64",
                45641: "blake2s-72",
                45642: "blake2s-80",
                45643: "blake2s-88",
                45644: "blake2s-96",
                45645: "blake2s-104",
                45646: "blake2s-112",
                45647: "blake2s-120",
                45648: "blake2s-128",
                45649: "blake2s-136",
                45650: "blake2s-144",
                45651: "blake2s-152",
                45652: "blake2s-160",
                45653: "blake2s-168",
                45654: "blake2s-176",
                45655: "blake2s-184",
                45656: "blake2s-192",
                45657: "blake2s-200",
                45658: "blake2s-208",
                45659: "blake2s-216",
                45660: "blake2s-224",
                45661: "blake2s-232",
                45662: "blake2s-240",
                45663: "blake2s-248",
                45664: "blake2s-256",
                45825: "Skein256-8",
                45826: "Skein256-16",
                45827: "Skein256-24",
                45828: "Skein256-32",
                45829: "Skein256-40",
                45830: "Skein256-48",
                45831: "Skein256-56",
                45832: "Skein256-64",
                45833: "Skein256-72",
                45834: "Skein256-80",
                45835: "Skein256-88",
                45836: "Skein256-96",
                45837: "Skein256-104",
                45838: "Skein256-112",
                45839: "Skein256-120",
                45840: "Skein256-128",
                45841: "Skein256-136",
                45842: "Skein256-144",
                45843: "Skein256-152",
                45844: "Skein256-160",
                45845: "Skein256-168",
                45846: "Skein256-176",
                45847: "Skein256-184",
                45848: "Skein256-192",
                45849: "Skein256-200",
                45850: "Skein256-208",
                45851: "Skein256-216",
                45852: "Skein256-224",
                45853: "Skein256-232",
                45854: "Skein256-240",
                45855: "Skein256-248",
                45856: "Skein256-256",
                45857: "Skein512-8",
                45858: "Skein512-16",
                45859: "Skein512-24",
                45860: "Skein512-32",
                45861: "Skein512-40",
                45862: "Skein512-48",
                45863: "Skein512-56",
                45864: "Skein512-64",
                45865: "Skein512-72",
                45866: "Skein512-80",
                45867: "Skein512-88",
                45868: "Skein512-96",
                45869: "Skein512-104",
                45870: "Skein512-112",
                45871: "Skein512-120",
                45872: "Skein512-128",
                45873: "Skein512-136",
                45874: "Skein512-144",
                45875: "Skein512-152",
                45876: "Skein512-160",
                45877: "Skein512-168",
                45878: "Skein512-176",
                45879: "Skein512-184",
                45880: "Skein512-192",
                45881: "Skein512-200",
                45882: "Skein512-208",
                45883: "Skein512-216",
                45884: "Skein512-224",
                45885: "Skein512-232",
                45886: "Skein512-240",
                45887: "Skein512-248",
                45888: "Skein512-256",
                45889: "Skein512-264",
                45890: "Skein512-272",
                45891: "Skein512-280",
                45892: "Skein512-288",
                45893: "Skein512-296",
                45894: "Skein512-304",
                45895: "Skein512-312",
                45896: "Skein512-320",
                45897: "Skein512-328",
                45898: "Skein512-336",
                45899: "Skein512-344",
                45900: "Skein512-352",
                45901: "Skein512-360",
                45902: "Skein512-368",
                45903: "Skein512-376",
                45904: "Skein512-384",
                45905: "Skein512-392",
                45906: "Skein512-400",
                45907: "Skein512-408",
                45908: "Skein512-416",
                45909: "Skein512-424",
                45910: "Skein512-432",
                45911: "Skein512-440",
                45912: "Skein512-448",
                45913: "Skein512-456",
                45914: "Skein512-464",
                45915: "Skein512-472",
                45916: "Skein512-480",
                45917: "Skein512-488",
                45918: "Skein512-496",
                45919: "Skein512-504",
                45920: "Skein512-512",
                45921: "Skein1024-8",
                45922: "Skein1024-16",
                45923: "Skein1024-24",
                45924: "Skein1024-32",
                45925: "Skein1024-40",
                45926: "Skein1024-48",
                45927: "Skein1024-56",
                45928: "Skein1024-64",
                45929: "Skein1024-72",
                45930: "Skein1024-80",
                45931: "Skein1024-88",
                45932: "Skein1024-96",
                45933: "Skein1024-104",
                45934: "Skein1024-112",
                45935: "Skein1024-120",
                45936: "Skein1024-128",
                45937: "Skein1024-136",
                45938: "Skein1024-144",
                45939: "Skein1024-152",
                45940: "Skein1024-160",
                45941: "Skein1024-168",
                45942: "Skein1024-176",
                45943: "Skein1024-184",
                45944: "Skein1024-192",
                45945: "Skein1024-200",
                45946: "Skein1024-208",
                45947: "Skein1024-216",
                45948: "Skein1024-224",
                45949: "Skein1024-232",
                45950: "Skein1024-240",
                45951: "Skein1024-248",
                45952: "Skein1024-256",
                45953: "Skein1024-264",
                45954: "Skein1024-272",
                45955: "Skein1024-280",
                45956: "Skein1024-288",
                45957: "Skein1024-296",
                45958: "Skein1024-304",
                45959: "Skein1024-312",
                45960: "Skein1024-320",
                45961: "Skein1024-328",
                45962: "Skein1024-336",
                45963: "Skein1024-344",
                45964: "Skein1024-352",
                45965: "Skein1024-360",
                45966: "Skein1024-368",
                45967: "Skein1024-376",
                45968: "Skein1024-384",
                45969: "Skein1024-392",
                45970: "Skein1024-400",
                45971: "Skein1024-408",
                45972: "Skein1024-416",
                45973: "Skein1024-424",
                45974: "Skein1024-432",
                45975: "Skein1024-440",
                45976: "Skein1024-448",
                45977: "Skein1024-456",
                45978: "Skein1024-464",
                45979: "Skein1024-472",
                45980: "Skein1024-480",
                45981: "Skein1024-488",
                45982: "Skein1024-496",
                45983: "Skein1024-504",
                45984: "Skein1024-512",
                45985: "Skein1024-520",
                45986: "Skein1024-528",
                45987: "Skein1024-536",
                45988: "Skein1024-544",
                45989: "Skein1024-552",
                45990: "Skein1024-560",
                45991: "Skein1024-568",
                45992: "Skein1024-576",
                45993: "Skein1024-584",
                45994: "Skein1024-592",
                45995: "Skein1024-600",
                45996: "Skein1024-608",
                45997: "Skein1024-616",
                45998: "Skein1024-624",
                45999: "Skein1024-632",
                46e3: "Skein1024-640",
                46001: "Skein1024-648",
                46002: "Skein1024-656",
                46003: "Skein1024-664",
                46004: "Skein1024-672",
                46005: "Skein1024-680",
                46006: "Skein1024-688",
                46007: "Skein1024-696",
                46008: "Skein1024-704",
                46009: "Skein1024-712",
                46010: "Skein1024-720",
                46011: "Skein1024-728",
                46012: "Skein1024-736",
                46013: "Skein1024-744",
                46014: "Skein1024-752",
                46015: "Skein1024-760",
                46016: "Skein1024-768",
                46017: "Skein1024-776",
                46018: "Skein1024-784",
                46019: "Skein1024-792",
                46020: "Skein1024-800",
                46021: "Skein1024-808",
                46022: "Skein1024-816",
                46023: "Skein1024-824",
                46024: "Skein1024-832",
                46025: "Skein1024-840",
                46026: "Skein1024-848",
                46027: "Skein1024-856",
                46028: "Skein1024-864",
                46029: "Skein1024-872",
                46030: "Skein1024-880",
                46031: "Skein1024-888",
                46032: "Skein1024-896",
                46033: "Skein1024-904",
                46034: "Skein1024-912",
                46035: "Skein1024-920",
                46036: "Skein1024-928",
                46037: "Skein1024-936",
                46038: "Skein1024-944",
                46039: "Skein1024-952",
                46040: "Skein1024-960",
                46041: "Skein1024-968",
                46042: "Skein1024-976",
                46043: "Skein1024-984",
                46044: "Skein1024-992",
                46045: "Skein1024-1000",
                46046: "Skein1024-1008",
                46047: "Skein1024-1016",
                46048: "Skein1024-1024"
            }), n.defaultLengths = Object.freeze({
                17: 20,
                18: 32,
                19: 64,
                86: 32,
                23: 28,
                22: 32,
                21: 48,
                20: 64,
                24: 32,
                25: 64,
                26: 28,
                27: 32,
                28: 48,
                29: 64,
                34: 32,
                45569: 1,
                45570: 2,
                45571: 3,
                45572: 4,
                45573: 5,
                45574: 6,
                45575: 7,
                45576: 8,
                45577: 9,
                45578: 10,
                45579: 11,
                45580: 12,
                45581: 13,
                45582: 14,
                45583: 15,
                45584: 16,
                45585: 17,
                45586: 18,
                45587: 19,
                45588: 20,
                45589: 21,
                45590: 22,
                45591: 23,
                45592: 24,
                45593: 25,
                45594: 26,
                45595: 27,
                45596: 28,
                45597: 29,
                45598: 30,
                45599: 31,
                45600: 32,
                45601: 33,
                45602: 34,
                45603: 35,
                45604: 36,
                45605: 37,
                45606: 38,
                45607: 39,
                45608: 40,
                45609: 41,
                45610: 42,
                45611: 43,
                45612: 44,
                45613: 45,
                45614: 46,
                45615: 47,
                45616: 48,
                45617: 49,
                45618: 50,
                45619: 51,
                45620: 52,
                45621: 53,
                45622: 54,
                45623: 55,
                45624: 56,
                45625: 57,
                45626: 58,
                45627: 59,
                45628: 60,
                45629: 61,
                45630: 62,
                45631: 63,
                45632: 64,
                45633: 1,
                45634: 2,
                45635: 3,
                45636: 4,
                45637: 5,
                45638: 6,
                45639: 7,
                45640: 8,
                45641: 9,
                45642: 10,
                45643: 11,
                45644: 12,
                45645: 13,
                45646: 14,
                45647: 15,
                45648: 16,
                45649: 17,
                45650: 18,
                45651: 19,
                45652: 20,
                45653: 21,
                45654: 22,
                45655: 23,
                45656: 24,
                45657: 25,
                45658: 26,
                45659: 27,
                45660: 28,
                45661: 29,
                45662: 30,
                45663: 31,
                45664: 32,
                45825: 1,
                45826: 2,
                45827: 3,
                45828: 4,
                45829: 5,
                45830: 6,
                45831: 7,
                45832: 8,
                45833: 9,
                45834: 10,
                45835: 11,
                45836: 12,
                45837: 13,
                45838: 14,
                45839: 15,
                45840: 16,
                45841: 17,
                45842: 18,
                45843: 19,
                45844: 20,
                45845: 21,
                45846: 22,
                45847: 23,
                45848: 24,
                45849: 25,
                45850: 26,
                45851: 27,
                45852: 28,
                45853: 29,
                45854: 30,
                45855: 31,
                45856: 32,
                45857: 1,
                45858: 2,
                45859: 3,
                45860: 4,
                45861: 5,
                45862: 6,
                45863: 7,
                45864: 8,
                45865: 9,
                45866: 10,
                45867: 11,
                45868: 12,
                45869: 13,
                45870: 14,
                45871: 15,
                45872: 16,
                45873: 17,
                45874: 18,
                45875: 19,
                45876: 20,
                45877: 21,
                45878: 22,
                45879: 23,
                45880: 24,
                45881: 25,
                45882: 26,
                45883: 27,
                45884: 28,
                45885: 29,
                45886: 30,
                45887: 31,
                45888: 32,
                45889: 33,
                45890: 34,
                45891: 35,
                45892: 36,
                45893: 37,
                45894: 38,
                45895: 39,
                45896: 40,
                45897: 41,
                45898: 42,
                45899: 43,
                45900: 44,
                45901: 45,
                45902: 46,
                45903: 47,
                45904: 48,
                45905: 49,
                45906: 50,
                45907: 51,
                45908: 52,
                45909: 53,
                45910: 54,
                45911: 55,
                45912: 56,
                45913: 57,
                45914: 58,
                45915: 59,
                45916: 60,
                45917: 61,
                45918: 62,
                45919: 63,
                45920: 64,
                45921: 1,
                45922: 2,
                45923: 3,
                45924: 4,
                45925: 5,
                45926: 6,
                45927: 7,
                45928: 8,
                45929: 9,
                45930: 10,
                45931: 11,
                45932: 12,
                45933: 13,
                45934: 14,
                45935: 15,
                45936: 16,
                45937: 17,
                45938: 18,
                45939: 19,
                45940: 20,
                45941: 21,
                45942: 22,
                45943: 23,
                45944: 24,
                45945: 25,
                45946: 26,
                45947: 27,
                45948: 28,
                45949: 29,
                45950: 30,
                45951: 31,
                45952: 32,
                45953: 33,
                45954: 34,
                45955: 35,
                45956: 36,
                45957: 37,
                45958: 38,
                45959: 39,
                45960: 40,
                45961: 41,
                45962: 42,
                45963: 43,
                45964: 44,
                45965: 45,
                45966: 46,
                45967: 47,
                45968: 48,
                45969: 49,
                45970: 50,
                45971: 51,
                45972: 52,
                45973: 53,
                45974: 54,
                45975: 55,
                45976: 56,
                45977: 57,
                45978: 58,
                45979: 59,
                45980: 60,
                45981: 61,
                45982: 62,
                45983: 63,
                45984: 64,
                45985: 65,
                45986: 66,
                45987: 67,
                45988: 68,
                45989: 69,
                45990: 70,
                45991: 71,
                45992: 72,
                45993: 73,
                45994: 74,
                45995: 75,
                45996: 76,
                45997: 77,
                45998: 78,
                45999: 79,
                46e3: 80,
                46001: 81,
                46002: 82,
                46003: 83,
                46004: 84,
                46005: 85,
                46006: 86,
                46007: 87,
                46008: 88,
                46009: 89,
                46010: 90,
                46011: 91,
                46012: 92,
                46013: 93,
                46014: 94,
                46015: 95,
                46016: 96,
                46017: 97,
                46018: 98,
                46019: 99,
                46020: 100,
                46021: 101,
                46022: 102,
                46023: 103,
                46024: 104,
                46025: 105,
                46026: 106,
                46027: 107,
                46028: 108,
                46029: 109,
                46030: 110,
                46031: 111,
                46032: 112,
                46033: 113,
                46034: 114,
                46035: 115,
                46036: 116,
                46037: 117,
                46038: 118,
                46039: 119,
                46040: 120,
                46041: 121,
                46042: 122,
                46043: 123,
                46044: 124,
                46045: 125,
                46046: 126,
                46047: 127,
                46048: 128
            })
        },
        353: function(e, n, i) {
            ! function(e) {
                "use strict";
                var n = {};

                function BigInteger(e, t, s) {
                    if (s !== n) return e instanceof BigInteger ? e : void 0 === e ? i : BigInteger.parse(e);
                    for (e = e || []; e.length && !e[e.length - 1];) --e.length;
                    this._d = e, this._s = e.length ? t || 1 : 0
                }
                BigInteger.CONSTRUCT = n, BigInteger._construct = function(e, i) {
                    return new BigInteger(e, i, n)
                };
                BigInteger.base = 1e7, BigInteger.base_log10 = 7;
                var i = new BigInteger([], 0, n);
                BigInteger.ZERO = i;
                var t = new BigInteger([1], 1, n);
                BigInteger.ONE = t;
                var s = new BigInteger(t._d, -1, n);
                BigInteger.M_ONE = s, BigInteger._0 = i, BigInteger._1 = t, BigInteger.small = [i, t, new BigInteger([2], 1, n), new BigInteger([3], 1, n), new BigInteger([4], 1, n), new BigInteger([5], 1, n), new BigInteger([6], 1, n), new BigInteger([7], 1, n), new BigInteger([8], 1, n), new BigInteger([9], 1, n), new BigInteger([10], 1, n), new BigInteger([11], 1, n), new BigInteger([12], 1, n), new BigInteger([13], 1, n), new BigInteger([14], 1, n), new BigInteger([15], 1, n), new BigInteger([16], 1, n), new BigInteger([17], 1, n), new BigInteger([18], 1, n), new BigInteger([19], 1, n), new BigInteger([20], 1, n), new BigInteger([21], 1, n), new BigInteger([22], 1, n), new BigInteger([23], 1, n), new BigInteger([24], 1, n), new BigInteger([25], 1, n), new BigInteger([26], 1, n), new BigInteger([27], 1, n), new BigInteger([28], 1, n), new BigInteger([29], 1, n), new BigInteger([30], 1, n), new BigInteger([31], 1, n), new BigInteger([32], 1, n), new BigInteger([33], 1, n), new BigInteger([34], 1, n), new BigInteger([35], 1, n), new BigInteger([36], 1, n)], BigInteger.digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), BigInteger.prototype.toString = function(e) {
                        if ((e = +e || 10) < 2 || e > 36) throw new Error("illegal radix " + e + ".");
                        if (0 === this._s) return "0";
                        if (10 === e) {
                            var n = this._s < 0 ? "-" : "";
                            n += this._d[this._d.length - 1].toString();
                            for (var i = this._d.length - 2; i >= 0; i--) {
                                for (var t = this._d[i].toString(); t.length < 7;) t = "0" + t;
                                n += t
                            }
                            return n
                        }
                        var s = BigInteger.digits;
                        e = BigInteger.small[e];
                        for (var r, k = this._s, a = this.abs(), o = []; 0 !== a._s;) {
                            var l = a.divRem(e);
                            a = l[0], r = l[1], o.push(s[r.valueOf()])
                        }
                        return (k < 0 ? "-" : "") + o.reverse().join("")
                    }, BigInteger.radixRegex = [/^$/, /^$/, /^[01]*$/, /^[012]*$/, /^[0-3]*$/, /^[0-4]*$/, /^[0-5]*$/, /^[0-6]*$/, /^[0-7]*$/, /^[0-8]*$/, /^[0-9]*$/, /^[0-9aA]*$/, /^[0-9abAB]*$/, /^[0-9abcABC]*$/, /^[0-9a-dA-D]*$/, /^[0-9a-eA-E]*$/, /^[0-9a-fA-F]*$/, /^[0-9a-gA-G]*$/, /^[0-9a-hA-H]*$/, /^[0-9a-iA-I]*$/, /^[0-9a-jA-J]*$/, /^[0-9a-kA-K]*$/, /^[0-9a-lA-L]*$/, /^[0-9a-mA-M]*$/, /^[0-9a-nA-N]*$/, /^[0-9a-oA-O]*$/, /^[0-9a-pA-P]*$/, /^[0-9a-qA-Q]*$/, /^[0-9a-rA-R]*$/, /^[0-9a-sA-S]*$/, /^[0-9a-tA-T]*$/, /^[0-9a-uA-U]*$/, /^[0-9a-vA-V]*$/, /^[0-9a-wA-W]*$/, /^[0-9a-xA-X]*$/, /^[0-9a-yA-Y]*$/, /^[0-9a-zA-Z]*$/], BigInteger.parse = function(e, t) {
                        var s;
                        e = e.toString(), void 0 !== t && 10 != +t || (e = e.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/, "e").replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/, (function(e, n, i, t, s) {
                            var r = (s = +s) < 0,
                                k = i.length + s;
                            e = (r ? i : t).length, s = (s = Math.abs(s)) >= e ? s - e + r : 0;
                            var a = new Array(s + 1).join("0"),
                                o = i + t;
                            return (n || "") + (r ? o = a + o : o += a).substr(0, k += r ? a.length : 0) + (k < o.length ? "." + o.substr(k) : "")
                        }))), s = void 0 === t ? "0[xcb]" : 16 == t ? "0x" : 8 == t ? "0c" : 2 == t ? "0b" : "";
                        var r = new RegExp("^([+\\-]?)(" + s + ")?([0-9a-z]*)(?:\\.\\d*)?$", "i").exec(e);
                        if (r) {
                            var k = r[1] || "+",
                                a = r[2] || "",
                                o = r[3] || "";
                            if (void 0 === t) t = "0x" === a || "0X" === a ? 16 : "0c" === a || "0C" === a ? 8 : "0b" === a || "0B" === a ? 2 : 10;
                            else if (t < 2 || t > 36) throw new Error("Illegal radix " + t + ".");
                            if (t = +t, !BigInteger.radixRegex[t].test(o)) throw new Error("Bad digit for radix " + t);
                            if (0 === (o = o.replace(/^0+/, "").split("")).length) return i;
                            if (k = "-" === k ? -1 : 1, 10 == t) {
                                for (var l = []; o.length >= 7;) l.push(parseInt(o.splice(o.length - BigInteger.base_log10, BigInteger.base_log10).join(""), 10));
                                return l.push(parseInt(o.join(""), 10)), new BigInteger(l, k, n)
                            }
                            l = i;
                            t = BigInteger.small[t];
                            for (var b = BigInteger.small, c = 0; c < o.length; c++) l = l.multiply(t).add(b[parseInt(o[c], 36)]);
                            return new BigInteger(l._d, k, n)
                        }
                        throw new Error("Invalid BigInteger format: " + e)
                    }, BigInteger.prototype.add = function(e) {
                        if (0 === this._s) return BigInteger(e);
                        if (0 === (e = BigInteger(e))._s) return this;
                        if (this._s !== e._s) return e = e.negate(), this.subtract(e);
                        for (var i, t = this._d, s = e._d, r = t.length, k = s.length, a = new Array(Math.max(r, k) + 1), o = Math.min(r, k), l = 0, b = 0; b < o; b++) i = t[b] + s[b] + l, a[b] = i % 1e7, l = i / 1e7 | 0;
                        for (k > r && (t = s, r = k), b = o; l && b < r; b++) i = t[b] + l, a[b] = i % 1e7, l = i / 1e7 | 0;
                        for (l && (a[b] = l); b < r; b++) a[b] = t[b];
                        return new BigInteger(a, this._s, n)
                    }, BigInteger.prototype.negate = function() {
                        return new BigInteger(this._d, 0 | -this._s, n)
                    }, BigInteger.prototype.abs = function() {
                        return this._s < 0 ? this.negate() : this
                    }, BigInteger.prototype.subtract = function(e) {
                        if (0 === this._s) return BigInteger(e).negate();
                        if (0 === (e = BigInteger(e))._s) return this;
                        if (this._s !== e._s) return e = e.negate(), this.add(e);
                        var t = this;
                        this._s < 0 && (t = new BigInteger(e._d, 1, n), e = new BigInteger(this._d, 1, n));
                        var s = t.compareAbs(e);
                        if (0 === s) return i;
                        if (s < 0) {
                            var r = e;
                            e = t, t = r
                        }
                        var k, a, o = t._d,
                            l = e._d,
                            b = o.length,
                            c = l.length,
                            u = new Array(b),
                            f = 0;
                        for (k = 0; k < c; k++)(a = o[k] - f - l[k]) < 0 ? (a += 1e7, f = 1) : f = 0, u[k] = a;
                        for (k = c; k < b; k++) {
                            if (!((a = o[k] - f) < 0)) {
                                u[k++] = a;
                                break
                            }
                            a += 1e7, u[k] = a
                        }
                        for (; k < b; k++) u[k] = o[k];
                        return new BigInteger(u, s, n)
                    },
                    function() {
                        function e(e, i) {
                            for (var t = e._d, s = t.slice(), r = 0;;) {
                                var k = (t[r] || 0) + 1;
                                if (s[r] = k % 1e7, k <= 9999999) break;
                                ++r
                            }
                            return new BigInteger(s, i, n)
                        }

                        function i(e, i) {
                            for (var t = e._d, s = t.slice(), r = 0;;) {
                                var k = (t[r] || 0) - 1;
                                if (!(k < 0)) {
                                    s[r] = k;
                                    break
                                }
                                s[r] = k + 1e7, ++r
                            }
                            return new BigInteger(s, i, n)
                        }
                        BigInteger.prototype.next = function() {
                            switch (this._s) {
                                case 0:
                                    return t;
                                case -1:
                                    return i(this, -1);
                                default:
                                    return e(this, 1)
                            }
                        }, BigInteger.prototype.prev = function() {
                            switch (this._s) {
                                case 0:
                                    return s;
                                case -1:
                                    return e(this, -1);
                                default:
                                    return i(this, 1)
                            }
                        }
                    }(), BigInteger.prototype.compareAbs = function(e) {
                        if (this === e) return 0;
                        if (!(e instanceof BigInteger)) {
                            if (!isFinite(e)) return isNaN(e) ? e : -1;
                            e = BigInteger(e)
                        }
                        if (0 === this._s) return 0 !== e._s ? -1 : 0;
                        if (0 === e._s) return 1;
                        var n = this._d.length,
                            i = e._d.length;
                        if (n < i) return -1;
                        if (n > i) return 1;
                        for (var t = this._d, s = e._d, r = n - 1; r >= 0; r--)
                            if (t[r] !== s[r]) return t[r] < s[r] ? -1 : 1;
                        return 0
                    }, BigInteger.prototype.compare = function(e) {
                        return this === e ? 0 : (e = BigInteger(e), 0 === this._s ? -e._s : this._s === e._s ? this.compareAbs(e) * this._s : this._s)
                    }, BigInteger.prototype.isUnit = function() {
                        return this === t || this === s || 1 === this._d.length && 1 === this._d[0]
                    }, BigInteger.prototype.multiply = function(e) {
                        if (0 === this._s) return i;
                        if (0 === (e = BigInteger(e))._s) return i;
                        if (this.isUnit()) return this._s < 0 ? e.negate() : e;
                        if (e.isUnit()) return e._s < 0 ? this.negate() : this;
                        if (this === e) return this.square();
                        var t, s = this._d.length >= e._d.length,
                            r = (s ? this : e)._d,
                            k = (s ? e : this)._d,
                            a = r.length,
                            o = k.length,
                            l = a + o,
                            b = new Array(l);
                        for (t = 0; t < l; t++) b[t] = 0;
                        for (t = 0; t < o; t++) {
                            for (var c, u = 0, f = k[t], S = a + t, h = t; h < S; h++) u = (c = b[h] + f * r[h - t] + u) / 1e7 | 0, b[h] = c % 1e7 | 0;
                            u && (u = (c = b[h] + u) / 1e7 | 0, b[h] = c % 1e7)
                        }
                        return new BigInteger(b, this._s * e._s, n)
                    }, BigInteger.prototype.multiplySingleDigit = function(e) {
                        if (0 === e || 0 === this._s) return i;
                        if (1 === e) return this;
                        var t;
                        if (1 === this._d.length) return new BigInteger((t = this._d[0] * e) >= 1e7 ? [t % 1e7 | 0, t / 1e7 | 0] : [t], 1, n);
                        if (2 === e) return this.add(this);
                        if (this.isUnit()) return new BigInteger([e], 1, n);
                        for (var s = this._d, r = s.length, k = r + 1, a = new Array(k), o = 0; o < k; o++) a[o] = 0;
                        for (var l = 0, b = 0; b < r; b++) l = (t = e * s[b] + l) / 1e7 | 0, a[b] = t % 1e7 | 0;
                        return l && (a[b] = l), new BigInteger(a, 1, n)
                    }, BigInteger.prototype.square = function() {
                        if (0 === this._s) return i;
                        if (this.isUnit()) return t;
                        var e, s, r, k, a = this._d,
                            o = a.length,
                            l = new Array(o + o + 1);
                        for (k = 0; k < o; k++) r = 2 * k, s = (e = a[k] * a[k]) / 1e7 | 0, l[r] = e % 1e7, l[r + 1] = s;
                        for (k = 0; k < o; k++) {
                            s = 0, r = 2 * k + 1;
                            for (var b = k + 1; b < o; b++, r++) s = (e = a[b] * a[k] * 2 + l[r] + s) / 1e7 | 0, l[r] = e % 1e7;
                            var c = s + l[r = o + k];
                            s = c / 1e7 | 0, l[r] = c % 1e7, l[r + 1] += s
                        }
                        return new BigInteger(l, 1, n)
                    }, BigInteger.prototype.quotient = function(e) {
                        return this.divRem(e)[0]
                    }, BigInteger.prototype.divide = BigInteger.prototype.quotient, BigInteger.prototype.remainder = function(e) {
                        return this.divRem(e)[1]
                    }, BigInteger.prototype.divRem = function(e) {
                        if (0 === (e = BigInteger(e))._s) throw new Error("Divide by zero");
                        if (0 === this._s) return [i, i];
                        if (1 === e._d.length) return this.divRemSmall(e._s * e._d[0]);
                        switch (this.compareAbs(e)) {
                            case 0:
                                return [this._s === e._s ? t : s, i];
                            case -1:
                                return [i, this]
                        }
                        for (var r, k = this._s * e._s, a = e.abs(), o = this._d, l = o.length, b = (e._d.length, []), c = new BigInteger([], 0, n); l;)
                            if (c._d.unshift(o[--l]), (c = new BigInteger(c._d, 1, n)).compareAbs(e) < 0) b.push(0);
                            else {
                                if (0 === c._s) r = 0;
                                else {
                                    var u = c._d.length,
                                        f = a._d.length,
                                        S = 1e7 * c._d[u - 1] + c._d[u - 2],
                                        h = 1e7 * a._d[f - 1] + a._d[f - 2];
                                    c._d.length > a._d.length && (S = 1e7 * (S + 1)), r = Math.ceil(S / h)
                                }
                                do {
                                    var d = a.multiplySingleDigit(r);
                                    if (d.compareAbs(c) <= 0) break;
                                    r--
                                } while (r);
                                if (b.push(r), r) {
                                    var p = c.subtract(d);
                                    c._d = p._d.slice()
                                }
                            } return [new BigInteger(b.reverse(), k, n), new BigInteger(c._d, this._s, n)]
                    }, BigInteger.prototype.divRemSmall = function(e) {
                        var t;
                        if (0 === (e = +e)) throw new Error("Divide by zero");
                        var s = e < 0 ? -1 : 1,
                            r = this._s * s;
                        if ((e = Math.abs(e)) < 1 || e >= 1e7) throw new Error("Argument out of range");
                        if (0 === this._s) return [i, i];
                        if (1 === e || -1 === e) return [1 === r ? this.abs() : new BigInteger(this._d, r, n), i];
                        if (1 === this._d.length) {
                            var k = new BigInteger([this._d[0] / e | 0], 1, n);
                            return t = new BigInteger([this._d[0] % e | 0], 1, n), r < 0 && (k = k.negate()), this._s < 0 && (t = t.negate()), [k, t]
                        }
                        for (var a, o = this._d.slice(), l = new Array(o.length), b = 0, c = 0, u = 0; o.length;) {
                            if ((b = 1e7 * b + o[o.length - 1]) < e) l[u++] = 0, o.pop(), c = 1e7 * c + b;
                            else c = b - e * (a = 0 === b ? 0 : b / e | 0), l[u++] = a, a ? (o.pop(), b = c) : o.pop()
                        }
                        return t = new BigInteger([c], 1, n), this._s < 0 && (t = t.negate()), [new BigInteger(l.reverse(), r, n), t]
                    }, BigInteger.prototype.isEven = function() {
                        var e = this._d;
                        return 0 === this._s || 0 === e.length || e[0] % 2 == 0
                    }, BigInteger.prototype.isOdd = function() {
                        return !this.isEven()
                    }, BigInteger.prototype.sign = function() {
                        return this._s
                    }, BigInteger.prototype.isPositive = function() {
                        return this._s > 0
                    }, BigInteger.prototype.isNegative = function() {
                        return this._s < 0
                    }, BigInteger.prototype.isZero = function() {
                        return 0 === this._s
                    }, BigInteger.prototype.exp10 = function(e) {
                        if (0 === (e = +e)) return this;
                        if (Math.abs(e) > Number(r)) throw new Error("exponent too large in BigInteger.exp10");
                        if (0 === this._s) return i;
                        if (e > 0) {
                            for (var t = new BigInteger(this._d.slice(), this._s, n); e >= 7; e -= 7) t._d.unshift(0);
                            return 0 == e ? t : (t._s = 1, t = t.multiplySingleDigit(Math.pow(10, e)), this._s < 0 ? t.negate() : t)
                        }
                        if (-e >= 7 * this._d.length) return i;
                        t = new BigInteger(this._d.slice(), this._s, n);
                        for (e = -e; e >= 7; e -= 7) t._d.shift();
                        return 0 == e ? t : t.divRemSmall(Math.pow(10, e))[0]
                    }, BigInteger.prototype.pow = function(e) {
                        if (this.isUnit()) return this._s > 0 || BigInteger(e).isOdd() ? this : this.negate();
                        if (0 === (e = BigInteger(e))._s) return t;
                        if (e._s < 0) {
                            if (0 === this._s) throw new Error("Divide by zero");
                            return i
                        }
                        if (0 === this._s) return i;
                        if (e.isUnit()) return this;
                        if (e.compareAbs(r) > 0) throw new Error("exponent too large in BigInteger.pow");
                        for (var n = this, s = t, k = BigInteger.small[2]; e.isPositive();) {
                            if (e.isOdd() && (s = s.multiply(n), e.isUnit())) return s;
                            n = n.square(), e = e.quotient(k)
                        }
                        return s
                    }, BigInteger.prototype.modPow = function(e, n) {
                        for (var i = t, s = this; e.isPositive();) e.isOdd() && (i = i.multiply(s).remainder(n)), (e = e.quotient(BigInteger.small[2])).isPositive() && (s = s.square().remainder(n));
                        return i
                    }, BigInteger.prototype.log = function() {
                        switch (this._s) {
                            case 0:
                                return -1 / 0;
                            case -1:
                                return NaN
                        }
                        var e = this._d.length;
                        if (7 * e < 30) return Math.log(this.valueOf());
                        var i = Math.ceil(30 / 7),
                            t = this._d.slice(e - i);
                        return Math.log(new BigInteger(t, 1, n).valueOf()) + (e - i) * Math.log(1e7)
                    }, BigInteger.prototype.valueOf = function() {
                        return parseInt(this.toString(), 10)
                    }, BigInteger.prototype.toJSValue = function() {
                        return parseInt(this.toString(), 10)
                    }, BigInteger.prototype.lowVal = function() {
                        return this._d[0] || 0
                    };
                var r = BigInteger(2147483647);
                BigInteger.MAX_EXP = r,
                    function() {
                        function e(e) {
                            return function(n) {
                                return e.call(BigInteger(n))
                            }
                        }

                        function n(e) {
                            return function(n, i) {
                                return e.call(BigInteger(n), BigInteger(i))
                            }
                        }

                        function i(e) {
                            return function(n, i, t) {
                                return e.call(BigInteger(n), BigInteger(i), BigInteger(t))
                            }
                        }! function() {
                            var t, s, r = "toJSValue,isEven,isOdd,sign,isZero,isNegative,abs,isUnit,square,negate,isPositive,toString,next,prev,log".split(","),
                                k = "compare,remainder,divRem,subtract,add,quotient,divide,multiply,pow,compareAbs".split(","),
                                a = ["modPow"];
                            for (t = 0; t < r.length; t++) BigInteger[s = r[t]] = e(BigInteger.prototype[s]);
                            for (t = 0; t < k.length; t++) BigInteger[s = k[t]] = n(BigInteger.prototype[s]);
                            for (t = 0; t < a.length; t++) BigInteger[s = a[t]] = i(BigInteger.prototype[s]);
                            BigInteger.exp10 = function(e, n) {
                                return BigInteger(e).exp10(n)
                            }
                        }()
                    }(), e.BigInteger = BigInteger
            }(n)
        },
        3702: function(e, n, i) {
            e.exports = function() {
                "use strict";
                var e = Object.prototype.toString,
                    n = Array.isArray || function(n) {
                        return "[object Array]" === e.call(n)
                    };

                function i(e) {
                    return "function" == typeof e
                }

                function t(e) {
                    return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }

                function s(e, n) {
                    return null != e && "object" == typeof e && n in e
                }
                var r = RegExp.prototype.test,
                    k = /\S/;

                function a(e) {
                    return ! function(e, n) {
                        return r.call(e, n)
                    }(k, e)
                }
                var o = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#x2F;",
                        "`": "&#x60;",
                        "=": "&#x3D;"
                    },
                    l = /\s*/,
                    b = /\s+/,
                    c = /\s*=/,
                    u = /\s*\}/,
                    f = /#|\^|\/|>|\{|&|=|!/;

                function S(e) {
                    this.string = e, this.tail = e, this.pos = 0
                }

                function h(e, n) {
                    this.view = e, this.cache = {
                        ".": this.view
                    }, this.parent = n
                }

                function d() {
                    this.templateCache = {
                        _cache: {},
                        set: function(e, n) {
                            this._cache[e] = n
                        },
                        get: function(e) {
                            return this._cache[e]
                        },
                        clear: function() {
                            this._cache = {}
                        }
                    }
                }
                S.prototype.eos = function() {
                    return "" === this.tail
                }, S.prototype.scan = function(e) {
                    var n = this.tail.match(e);
                    if (!n || 0 !== n.index) return "";
                    var i = n[0];
                    return this.tail = this.tail.substring(i.length), this.pos += i.length, i
                }, S.prototype.scanUntil = function(e) {
                    var n, i = this.tail.search(e);
                    switch (i) {
                        case -1:
                            n = this.tail, this.tail = "";
                            break;
                        case 0:
                            n = "";
                            break;
                        default:
                            n = this.tail.substring(0, i), this.tail = this.tail.substring(i)
                    }
                    return this.pos += n.length, n
                }, h.prototype.push = function(e) {
                    return new h(e, this)
                }, h.prototype.lookup = function(e) {
                    var n, t, r, k = this.cache;
                    if (k.hasOwnProperty(e)) n = k[e];
                    else {
                        for (var a, o, l, b = this, c = !1; b;) {
                            if (e.indexOf(".") > 0)
                                for (a = b.view, o = e.split("."), l = 0; null != a && l < o.length;) l === o.length - 1 && (c = s(a, o[l]) || (t = a, r = o[l], null != t && "object" != typeof t && t.hasOwnProperty && t.hasOwnProperty(r))), a = a[o[l++]];
                            else a = b.view[e], c = s(b.view, e);
                            if (c) {
                                n = a;
                                break
                            }
                            b = b.parent
                        }
                        k[e] = n
                    }
                    return i(n) && (n = n.call(this.view)), n
                }, d.prototype.clearCache = function() {
                    void 0 !== this.templateCache && this.templateCache.clear()
                }, d.prototype.parse = function(e, i) {
                    var s = this.templateCache,
                        r = e + ":" + (i || p.tags).join(":"),
                        k = void 0 !== s,
                        o = k ? s.get(r) : void 0;
                    return null == o && (o = function(e, i) {
                        if (!e) return [];
                        var s, r, k, o = !1,
                            h = [],
                            d = [],
                            g = [],
                            w = !1,
                            m = !1,
                            v = "",
                            y = 0;

                        function _() {
                            if (w && !m)
                                for (; g.length;) delete d[g.pop()];
                            else g = [];
                            w = !1, m = !1
                        }

                        function x(e) {
                            if ("string" == typeof e && (e = e.split(b, 2)), !n(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
                            s = new RegExp(t(e[0]) + "\\s*"), r = new RegExp("\\s*" + t(e[1])), k = new RegExp("\\s*" + t("}" + e[1]))
                        }
                        x(i || p.tags);
                        for (var E, A, O, C, j, B, $ = new S(e); !$.eos();) {
                            if (E = $.pos, O = $.scanUntil(s))
                                for (var U = 0, z = O.length; U < z; ++U) a(C = O.charAt(U)) ? (g.push(d.length), v += C) : (m = !0, o = !0, v += " "), d.push(["text", C, E, E + 1]), E += 1, "\n" === C && (_(), v = "", y = 0, o = !1);
                            if (!$.scan(s)) break;
                            if (w = !0, A = $.scan(f) || "name", $.scan(l), "=" === A ? (O = $.scanUntil(c), $.scan(c), $.scanUntil(r)) : "{" === A ? (O = $.scanUntil(k), $.scan(u), $.scanUntil(r), A = "&") : O = $.scanUntil(r), !$.scan(r)) throw new Error("Unclosed tag at " + $.pos);
                            if (j = ">" == A ? [A, O, E, $.pos, v, y, o] : [A, O, E, $.pos], y++, d.push(j), "#" === A || "^" === A) h.push(j);
                            else if ("/" === A) {
                                if (!(B = h.pop())) throw new Error('Unopened section "' + O + '" at ' + E);
                                if (B[1] !== O) throw new Error('Unclosed section "' + B[1] + '" at ' + E)
                            } else "name" === A || "{" === A || "&" === A ? m = !0 : "=" === A && x(O)
                        }
                        if (_(), B = h.pop()) throw new Error('Unclosed section "' + B[1] + '" at ' + $.pos);
                        return function(e) {
                            for (var n, i = [], t = i, s = [], r = 0, k = e.length; r < k; ++r) switch ((n = e[r])[0]) {
                                case "#":
                                case "^":
                                    t.push(n), s.push(n), t = n[4] = [];
                                    break;
                                case "/":
                                    s.pop()[5] = n[2], t = s.length > 0 ? s[s.length - 1][4] : i;
                                    break;
                                default:
                                    t.push(n)
                            }
                            return i
                        }(function(e) {
                            for (var n, i, t = [], s = 0, r = e.length; s < r; ++s)(n = e[s]) && ("text" === n[0] && i && "text" === i[0] ? (i[1] += n[1], i[3] = n[3]) : (t.push(n), i = n));
                            return t
                        }(d))
                    }(e, i), k && s.set(r, o)), o
                }, d.prototype.render = function(e, n, i, t) {
                    var s = this.getConfigTags(t),
                        r = this.parse(e, s),
                        k = n instanceof h ? n : new h(n, void 0);
                    return this.renderTokens(r, k, i, e, t)
                }, d.prototype.renderTokens = function(e, n, i, t, s) {
                    for (var r, k, a, o = "", l = 0, b = e.length; l < b; ++l) a = void 0, "#" === (k = (r = e[l])[0]) ? a = this.renderSection(r, n, i, t, s) : "^" === k ? a = this.renderInverted(r, n, i, t, s) : ">" === k ? a = this.renderPartial(r, n, i, s) : "&" === k ? a = this.unescapedValue(r, n) : "name" === k ? a = this.escapedValue(r, n, s) : "text" === k && (a = this.rawValue(r)), void 0 !== a && (o += a);
                    return o
                }, d.prototype.renderSection = function(e, t, s, r, k) {
                    var a = this,
                        o = "",
                        l = t.lookup(e[1]);
                    if (l) {
                        if (n(l))
                            for (var b = 0, c = l.length; b < c; ++b) o += this.renderTokens(e[4], t.push(l[b]), s, r, k);
                        else if ("object" == typeof l || "string" == typeof l || "number" == typeof l) o += this.renderTokens(e[4], t.push(l), s, r, k);
                        else if (i(l)) {
                            if ("string" != typeof r) throw new Error("Cannot use higher-order sections without the original template");
                            null != (l = l.call(t.view, r.slice(e[3], e[5]), (function(e) {
                                return a.render(e, t, s, k)
                            }))) && (o += l)
                        } else o += this.renderTokens(e[4], t, s, r, k);
                        return o
                    }
                }, d.prototype.renderInverted = function(e, i, t, s, r) {
                    var k = i.lookup(e[1]);
                    if (!k || n(k) && 0 === k.length) return this.renderTokens(e[4], i, t, s, r)
                }, d.prototype.indentPartial = function(e, n, i) {
                    for (var t = n.replace(/[^ \t]/g, ""), s = e.split("\n"), r = 0; r < s.length; r++) s[r].length && (r > 0 || !i) && (s[r] = t + s[r]);
                    return s.join("\n")
                }, d.prototype.renderPartial = function(e, n, t, s) {
                    if (t) {
                        var r = this.getConfigTags(s),
                            k = i(t) ? t(e[1]) : t[e[1]];
                        if (null != k) {
                            var a = e[6],
                                o = e[5],
                                l = e[4],
                                b = k;
                            0 == o && l && (b = this.indentPartial(k, l, a));
                            var c = this.parse(b, r);
                            return this.renderTokens(c, n, t, b, s)
                        }
                    }
                }, d.prototype.unescapedValue = function(e, n) {
                    var i = n.lookup(e[1]);
                    if (null != i) return i
                }, d.prototype.escapedValue = function(e, n, i) {
                    var t = this.getConfigEscape(i) || p.escape,
                        s = n.lookup(e[1]);
                    if (null != s) return "number" == typeof s && t === p.escape ? String(s) : t(s)
                }, d.prototype.rawValue = function(e) {
                    return e[1]
                }, d.prototype.getConfigTags = function(e) {
                    return n(e) ? e : e && "object" == typeof e ? e.tags : void 0
                }, d.prototype.getConfigEscape = function(e) {
                    return e && "object" == typeof e && !n(e) ? e.escape : void 0
                };
                var p = {
                        name: "mustache.js",
                        version: "4.2.0",
                        tags: ["{{", "}}"],
                        clearCache: void 0,
                        escape: void 0,
                        parse: void 0,
                        render: void 0,
                        Scanner: void 0,
                        Context: void 0,
                        Writer: void 0,
                        set templateCache(e) {
                            g.templateCache = e
                        },
                        get templateCache() {
                            return g.templateCache
                        }
                    },
                    g = new d;
                return p.clearCache = function() {
                    return g.clearCache()
                }, p.parse = function(e, n) {
                    return g.parse(e, n)
                }, p.render = function(e, i, t, s) {
                    if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + (n(r = e) ? "array" : typeof r) + '" was given as the first argument for mustache#render(template, view, partials)');
                    var r;
                    return g.render(e, i, t, s)
                }, p.escape = function(e) {
                    return String(e).replace(/[&<>"'`=\/]/g, (function(e) {
                        return o[e]
                    }))
                }, p.Scanner = S, p.Context = h, p.Writer = d, p
            }()
        },
        626: function(e) {
            e.exports = JSON.parse('{"identity":0,"ip4":4,"tcp":6,"sha1":17,"sha2-256":18,"sha2-512":19,"sha3-512":20,"sha3-384":21,"sha3-256":22,"sha3-224":23,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,"dccp":33,"murmur3-128":34,"murmur3-32":35,"ip6":41,"ip6zone":42,"path":47,"multicodec":48,"multihash":49,"multiaddr":50,"multibase":51,"dns":53,"dns4":54,"dns6":55,"dnsaddr":56,"protobuf":80,"cbor":81,"raw":85,"dbl-sha2-256":86,"rlp":96,"bencode":99,"dag-pb":112,"dag-cbor":113,"libp2p-key":114,"git-raw":120,"torrent-info":123,"torrent-file":124,"leofcoin-block":129,"leofcoin-tx":130,"leofcoin-pr":131,"sctp":132,"eth-block":144,"eth-block-list":145,"eth-tx-trie":146,"eth-tx":147,"eth-tx-receipt-trie":148,"eth-tx-receipt":149,"eth-state-trie":150,"eth-account-snapshot":151,"eth-storage-trie":152,"bitcoin-block":176,"bitcoin-tx":177,"zcash-block":192,"zcash-tx":193,"stellar-block":208,"stellar-tx":209,"md4":212,"md5":213,"bmt":214,"decred-block":224,"decred-tx":225,"ipld-ns":226,"ipfs-ns":227,"swarm-ns":228,"ipns-ns":229,"zeronet":230,"ed25519-pub":237,"dash-block":240,"dash-tx":241,"swarm-manifest":250,"swarm-feed":251,"udp":273,"p2p-webrtc-star":275,"p2p-webrtc-direct":276,"p2p-stardust":277,"p2p-circuit":290,"dag-json":297,"udt":301,"utp":302,"unix":400,"p2p":421,"ipfs":421,"https":443,"onion":444,"onion3":445,"garlic64":446,"garlic32":447,"tls":448,"quic":460,"ws":477,"wss":478,"p2p-websocket-star":479,"http":480,"json":512,"messagepack":513,"x11":4352,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"skein256-8":45825,"skein256-16":45826,"skein256-24":45827,"skein256-32":45828,"skein256-40":45829,"skein256-48":45830,"skein256-56":45831,"skein256-64":45832,"skein256-72":45833,"skein256-80":45834,"skein256-88":45835,"skein256-96":45836,"skein256-104":45837,"skein256-112":45838,"skein256-120":45839,"skein256-128":45840,"skein256-136":45841,"skein256-144":45842,"skein256-152":45843,"skein256-160":45844,"skein256-168":45845,"skein256-176":45846,"skein256-184":45847,"skein256-192":45848,"skein256-200":45849,"skein256-208":45850,"skein256-216":45851,"skein256-224":45852,"skein256-232":45853,"skein256-240":45854,"skein256-248":45855,"skein256-256":45856,"skein512-8":45857,"skein512-16":45858,"skein512-24":45859,"skein512-32":45860,"skein512-40":45861,"skein512-48":45862,"skein512-56":45863,"skein512-64":45864,"skein512-72":45865,"skein512-80":45866,"skein512-88":45867,"skein512-96":45868,"skein512-104":45869,"skein512-112":45870,"skein512-120":45871,"skein512-128":45872,"skein512-136":45873,"skein512-144":45874,"skein512-152":45875,"skein512-160":45876,"skein512-168":45877,"skein512-176":45878,"skein512-184":45879,"skein512-192":45880,"skein512-200":45881,"skein512-208":45882,"skein512-216":45883,"skein512-224":45884,"skein512-232":45885,"skein512-240":45886,"skein512-248":45887,"skein512-256":45888,"skein512-264":45889,"skein512-272":45890,"skein512-280":45891,"skein512-288":45892,"skein512-296":45893,"skein512-304":45894,"skein512-312":45895,"skein512-320":45896,"skein512-328":45897,"skein512-336":45898,"skein512-344":45899,"skein512-352":45900,"skein512-360":45901,"skein512-368":45902,"skein512-376":45903,"skein512-384":45904,"skein512-392":45905,"skein512-400":45906,"skein512-408":45907,"skein512-416":45908,"skein512-424":45909,"skein512-432":45910,"skein512-440":45911,"skein512-448":45912,"skein512-456":45913,"skein512-464":45914,"skein512-472":45915,"skein512-480":45916,"skein512-488":45917,"skein512-496":45918,"skein512-504":45919,"skein512-512":45920,"skein1024-8":45921,"skein1024-16":45922,"skein1024-24":45923,"skein1024-32":45924,"skein1024-40":45925,"skein1024-48":45926,"skein1024-56":45927,"skein1024-64":45928,"skein1024-72":45929,"skein1024-80":45930,"skein1024-88":45931,"skein1024-96":45932,"skein1024-104":45933,"skein1024-112":45934,"skein1024-120":45935,"skein1024-128":45936,"skein1024-136":45937,"skein1024-144":45938,"skein1024-152":45939,"skein1024-160":45940,"skein1024-168":45941,"skein1024-176":45942,"skein1024-184":45943,"skein1024-192":45944,"skein1024-200":45945,"skein1024-208":45946,"skein1024-216":45947,"skein1024-224":45948,"skein1024-232":45949,"skein1024-240":45950,"skein1024-248":45951,"skein1024-256":45952,"skein1024-264":45953,"skein1024-272":45954,"skein1024-280":45955,"skein1024-288":45956,"skein1024-296":45957,"skein1024-304":45958,"skein1024-312":45959,"skein1024-320":45960,"skein1024-328":45961,"skein1024-336":45962,"skein1024-344":45963,"skein1024-352":45964,"skein1024-360":45965,"skein1024-368":45966,"skein1024-376":45967,"skein1024-384":45968,"skein1024-392":45969,"skein1024-400":45970,"skein1024-408":45971,"skein1024-416":45972,"skein1024-424":45973,"skein1024-432":45974,"skein1024-440":45975,"skein1024-448":45976,"skein1024-456":45977,"skein1024-464":45978,"skein1024-472":45979,"skein1024-480":45980,"skein1024-488":45981,"skein1024-496":45982,"skein1024-504":45983,"skein1024-512":45984,"skein1024-520":45985,"skein1024-528":45986,"skein1024-536":45987,"skein1024-544":45988,"skein1024-552":45989,"skein1024-560":45990,"skein1024-568":45991,"skein1024-576":45992,"skein1024-584":45993,"skein1024-592":45994,"skein1024-600":45995,"skein1024-608":45996,"skein1024-616":45997,"skein1024-624":45998,"skein1024-632":45999,"skein1024-640":46000,"skein1024-648":46001,"skein1024-656":46002,"skein1024-664":46003,"skein1024-672":46004,"skein1024-680":46005,"skein1024-688":46006,"skein1024-696":46007,"skein1024-704":46008,"skein1024-712":46009,"skein1024-720":46010,"skein1024-728":46011,"skein1024-736":46012,"skein1024-744":46013,"skein1024-752":46014,"skein1024-760":46015,"skein1024-768":46016,"skein1024-776":46017,"skein1024-784":46018,"skein1024-792":46019,"skein1024-800":46020,"skein1024-808":46021,"skein1024-816":46022,"skein1024-824":46023,"skein1024-832":46024,"skein1024-840":46025,"skein1024-848":46026,"skein1024-856":46027,"skein1024-864":46028,"skein1024-872":46029,"skein1024-880":46030,"skein1024-888":46031,"skein1024-896":46032,"skein1024-904":46033,"skein1024-912":46034,"skein1024-920":46035,"skein1024-928":46036,"skein1024-936":46037,"skein1024-944":46038,"skein1024-952":46039,"skein1024-960":46040,"skein1024-968":46041,"skein1024-976":46042,"skein1024-984":46043,"skein1024-992":46044,"skein1024-1000":46045,"skein1024-1008":46046,"skein1024-1016":46047,"skein1024-1024":46048,"holochain-adr-v0":8417572,"holochain-adr-v1":8483108,"holochain-key-v0":9728292,"holochain-key-v1":9793828,"holochain-sig-v0":10645796,"holochain-sig-v1":10711332}')
        },
        934: function(e, n) {
            var i = 1e3,
                t = 6e4,
                s = 60 * t,
                r = 24 * s;

            function k(e, n, i) {
                if (!(e < n)) return e < 1.5 * n ? Math.floor(e / n) + " " + i : Math.ceil(e / n) + " " + i + "s"
            }
            e.exports = function(e, n) {
                n = n || {};
                var a, o = typeof e;
                if ("string" === o && e.length > 0) return function(e) {
                    if ((e = String(e)).length > 100) return;
                    var n = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (!n) return;
                    var k = parseFloat(n[1]);
                    switch ((n[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return 315576e5 * k;
                        case "days":
                        case "day":
                        case "d":
                            return k * r;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return k * s;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return k * t;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return k * i;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return k;
                        default:
                            return
                    }
                }(e);
                if ("number" === o && !1 === isNaN(e)) return n.long ? k(a = e, r, "day") || k(a, s, "hour") || k(a, t, "minute") || k(a, i, "second") || a + " ms" : function(e) {
                    if (e >= r) return Math.round(e / r) + "d";
                    if (e >= s) return Math.round(e / s) + "h";
                    if (e >= t) return Math.round(e / t) + "m";
                    if (e >= i) return Math.round(e / i) + "s";
                    return e + "ms"
                }(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        }
    }
]);