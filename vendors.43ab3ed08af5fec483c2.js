(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        5470: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), t(8050);
            var r = t(8056);
            Object.keys(r).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in n && n[e] === r[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                }))
            }))
        },
        5496: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), t(8049);
            var r = t(8126);
            Object.keys(r).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in n && n[e] === r[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                }))
            }))
        },
        5604: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.createAsHex = function(e) {
                return (...n) => (0, r.u8aToHex)(e(...n))
            }, n.createBitHasher = function(e, n) {
                return (t, r) => n(t, e, r)
            }, n.isWasmOnly = function(e) {
                return (0, o.isReady)() && !e
            };
            var r = t(5470),
                o = t(5509)
        },
        5643: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.BN_LE_OPTS = n.BN_LE_512_OPTS = n.BN_LE_32_OPTS = n.BN_LE_256_OPTS = n.BN_LE_16_OPTS = n.BN_BE_32_OPTS = n.BN_BE_256_OPTS = void 0;
            n.BN_LE_OPTS = {
                isLe: !0
            };
            n.BN_LE_16_OPTS = {
                bitLength: 16,
                isLe: !0
            };
            n.BN_BE_32_OPTS = {
                bitLength: 32,
                isLe: !1
            };
            n.BN_LE_32_OPTS = {
                bitLength: 32,
                isLe: !0
            };
            n.BN_BE_256_OPTS = {
                bitLength: 256,
                isLe: !1
            };
            n.BN_LE_256_OPTS = {
                bitLength: 256,
                isLe: !0
            };
            n.BN_LE_512_OPTS = {
                bitLength: 512,
                isLe: !0
            }
        },
        5685: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.assert = i, n.assertReturn = function(e, n) {
                return i(!(0, a.isUndefined)(e) && !(0, o.isNull)(e), n), e
            };
            var r = t(5729),
                o = t(5999),
                a = t(5730);

            function i(e, n) {
                if (!e) throw new Error((0, r.isFunction)(n) ? n() : n)
            }
        },
        5686: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.objectSpread = function(e, ...n) {
                for (let t = 0; t < n.length; t++) {
                    const o = n[t];
                    if (o) {
                        const n = (0, r.objectKeys)(o);
                        for (let t = 0; t < n.length; t++) {
                            const r = n[t];
                            e[r] = o[r]
                        }
                    }
                }
                return e
            };
            var r = t(6947)
        },
        5687: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.decodeAddress = function(e, n, t = -1) {
                if ((0, r.assert)(e, "Invalid empty address passed"), (0, r.isU8a)(e) || (0, r.isHex)(e)) return (0, r.u8aToU8a)(e);
                try {
                    const c = (0, o.base58Decode)(e);
                    (0, r.assert)(i.defaults.allowedEncodedLengths.includes(c.length), "Invalid decoded address length");
                    const [u, s, l, d] = (0, a.checkAddressChecksum)(c);
                    return (0, r.assert)(n || u, "Invalid decoded address checksum"), (0, r.assert)([-1, d].includes(t), () => `Expected ss58Format ${t}, received ${d}`), c.slice(l, s)
                } catch (n) {
                    throw new Error(`Decoding ${e}: ${n.message}`)
                }
            };
            var r = t(5470),
                o = t(6152),
                a = t(6388),
                i = t(6153)
        },
        5729: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isFunction = function(e) {
                return "function" == typeof e
            }
        },
        5730: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isUndefined = function(e) {
                return void 0 === e
            }
        },
        5771: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aToU8a = function(e) {
                if (!e) return new Uint8Array;
                if ((0, i.isHex)(e)) return (0, o.hexToU8a)(e);
                if ((0, c.isString)(e)) return (0, s.stringToU8a)(e);
                if (Array.isArray(e) || (0, a.isBuffer)(e)) return new Uint8Array(e);
                return (0, r.assert)((0, u.isU8a)(e), () => `Unable to convert ${e.toString()} (typeof ${typeof e}) to a Uint8Array`), e
            };
            var r = t(5685),
                o = t(6e3),
                a = t(6356),
                i = t(5825),
                c = t(5998),
                u = t(6358),
                s = t(6359)
        },
        5774: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.blake2AsHex = void 0, n.blake2AsU8a = u;
            var o = r(t(2351)),
                a = t(5470),
                i = t(5509),
                c = t(5604);

            function u(e, n = 256, t, r) {
                const u = Math.ceil(n / 8),
                    s = (0, a.u8aToU8a)(e);
                return (0, c.isWasmOnly)(r) ? (0, i.blake2b)(s, (0, a.u8aToU8a)(t), u) : o.default.blake2b(s, t || void 0, u)
            }
            const s = (0, c.createAsHex)(u);
            n.blake2AsHex = s
        },
        5825: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.REGEX_HEX_PREFIXED = n.REGEX_HEX_NOPREFIX = void 0, n.isHex = function(e, n = -1, t = !1) {
                return !("string" != typeof e || "0x" !== e && !r.test(e)) && (-1 === n ? !!t || e.length % 2 == 0 : e.length === 2 + Math.ceil(n / 4))
            };
            const r = /^0x[\da-fA-F]+$/;
            n.REGEX_HEX_PREFIXED = r;
            n.REGEX_HEX_NOPREFIX = /^[\da-fA-F]+$/
        },
        5826: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "BN", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var o = r(t(35))
        },
        5903: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "U8A_WRAP_ETHEREUM", {
                enumerable: !0,
                get: function() {
                    return y.U8A_WRAP_ETHEREUM
                }
            }), Object.defineProperty(n, "U8A_WRAP_POSTFIX", {
                enumerable: !0,
                get: function() {
                    return y.U8A_WRAP_POSTFIX
                }
            }), Object.defineProperty(n, "U8A_WRAP_PREFIX", {
                enumerable: !0,
                get: function() {
                    return y.U8A_WRAP_PREFIX
                }
            }), Object.defineProperty(n, "u8aCmp", {
                enumerable: !0,
                get: function() {
                    return r.u8aCmp
                }
            }), Object.defineProperty(n, "u8aConcat", {
                enumerable: !0,
                get: function() {
                    return o.u8aConcat
                }
            }), Object.defineProperty(n, "u8aEmpty", {
                enumerable: !0,
                get: function() {
                    return a.u8aEmpty
                }
            }), Object.defineProperty(n, "u8aEq", {
                enumerable: !0,
                get: function() {
                    return i.u8aEq
                }
            }), Object.defineProperty(n, "u8aFixLength", {
                enumerable: !0,
                get: function() {
                    return c.u8aFixLength
                }
            }), Object.defineProperty(n, "u8aIsWrapped", {
                enumerable: !0,
                get: function() {
                    return y.u8aIsWrapped
                }
            }), Object.defineProperty(n, "u8aSorted", {
                enumerable: !0,
                get: function() {
                    return u.u8aSorted
                }
            }), Object.defineProperty(n, "u8aToBigInt", {
                enumerable: !0,
                get: function() {
                    return s.u8aToBigInt
                }
            }), Object.defineProperty(n, "u8aToBn", {
                enumerable: !0,
                get: function() {
                    return l.u8aToBn
                }
            }), Object.defineProperty(n, "u8aToBuffer", {
                enumerable: !0,
                get: function() {
                    return d.u8aToBuffer
                }
            }), Object.defineProperty(n, "u8aToHex", {
                enumerable: !0,
                get: function() {
                    return f.u8aToHex
                }
            }), Object.defineProperty(n, "u8aToString", {
                enumerable: !0,
                get: function() {
                    return p.u8aToString
                }
            }), Object.defineProperty(n, "u8aToU8a", {
                enumerable: !0,
                get: function() {
                    return b.u8aToU8a
                }
            }), Object.defineProperty(n, "u8aUnwrapBytes", {
                enumerable: !0,
                get: function() {
                    return y.u8aUnwrapBytes
                }
            }), Object.defineProperty(n, "u8aWrapBytes", {
                enumerable: !0,
                get: function() {
                    return y.u8aWrapBytes
                }
            });
            var r = t(6950),
                o = t(6951),
                a = t(8069),
                i = t(6360),
                c = t(8070),
                u = t(8071),
                s = t(6948),
                l = t(8072),
                d = t(8073),
                f = t(6146),
                p = t(6952),
                b = t(5771),
                y = t(8074)
        },
        5904: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.bnToBn = function(e) {
                return u.BN.isBN(e) ? e : e ? (0, a.isHex)(e) ? (0, r.hexToBn)(e.toString()) : (0, o.isBigInt)(e) ? new u.BN(e.toString()) : (0, c.isToBn)(e) ? e.toBn() : (0, i.isToBigInt)(e) ? new u.BN(e.toBigInt().toString()) : new u.BN(e) : new u.BN(0)
            };
            var r = t(6001),
                o = t(6363),
                a = t(5825),
                i = t(6354),
                c = t(6355),
                u = t(5826)
        },
        5906: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.secp256k1 = void 0;
            const o = new(r(t(85)).default.ec)("secp256k1");
            n.secp256k1 = o
        },
        5907: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.encodeAddress = function(e, n = i.defaults.prefix) {
                const t = (0, a.decodeAddress)(e);
                (0, r.assert)(n >= 0 && n <= 16383 && ![46, 47].includes(n), "Out of range ss58Format specified"), (0, r.assert)(i.defaults.allowedDecodedLengths.includes(t.length), () => "Expected a valid key to convert, with length " + i.defaults.allowedDecodedLengths.join(", "));
                const u = (0, r.u8aConcat)(n < 64 ? [n] : [(252 & n) >> 2 | 64, n >> 8 | (3 & n) << 6], t);
                return (0, o.base58Encode)((0, r.u8aConcat)(u, (0, c.sshash)(u).subarray(0, [32, 33].includes(t.length) ? 2 : 1)))
            };
            var r = t(5470),
                o = t(6152),
                a = t(5687),
                i = t(6153),
                c = t(6990)
        },
        5908: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.randomAsHex = void 0, n.randomAsU8a = o;
            var r = t(6966);

            function o(e = 32) {
                return (0, r.getRandomValues)(new Uint8Array(e))
            }
            const a = (0, t(5604).createAsHex)(o);
            n.randomAsHex = a
        },
        5998: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isString = function(e) {
                return "string" == typeof e || e instanceof String
            }
        },
        5999: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isNull = function(e) {
                return null === e
            }
        },
        6e3: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hexToU8a = function(e, n = -1) {
                if (!e) return new Uint8Array;
                const t = (0, o.hexStripPrefix)(e).toLowerCase(),
                    a = t.length / 2,
                    i = Math.ceil(-1 === n ? a : n / 8),
                    c = new Uint8Array(i),
                    u = i > a ? i - a : 0,
                    s = new DataView(c.buffer, u),
                    l = (i - u) % 2,
                    d = i - u - l;
                for (let e = 0; e < d; e += 2) s.setUint16(e, r.HEX_TO_U16[t.substr(2 * e, 4)]);
                l && s.setUint8(d, r.HEX_TO_U8[t.substr(t.length - 2, 2)]);
                return c
            };
            var r = t(6949),
                o = t(6145)
        },
        6001: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hexToBn = function(e, n = c) {
                if (!e || "0x" === e) return new r.BN(0);
                const {
                    isLe: t,
                    isNegative: u
                } = (0, a.objectSpread)({
                    isLe: !1,
                    isNegative: !1
                }, (0, o.isBoolean)(n) ? {
                    isLe: n
                } : n), s = (0, i.hexStripPrefix)(e), l = new r.BN(s, 16, t ? "le" : "be");
                return u ? l.fromTwos(4 * s.length) : l
            };
            var r = t(5826),
                o = t(6361),
                a = t(5686),
                i = t(6145);
            const c = {
                isLe: !1,
                isNegative: !1
            }
        },
        6002: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isObject = function(e) {
                return !!e && "object" == typeof e
            }
        },
        6007: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "hmacSha256AsU8a", {
                enumerable: !0,
                get: function() {
                    return r.hmacSha256AsU8a
                }
            }), Object.defineProperty(n, "hmacSha512AsU8a", {
                enumerable: !0,
                get: function() {
                    return r.hmacSha512AsU8a
                }
            }), Object.defineProperty(n, "hmacShaAsU8a", {
                enumerable: !0,
                get: function() {
                    return r.hmacShaAsU8a
                }
            });
            var r = t(8237)
        },
        6008: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.entropyToMnemonic = b, n.generateMnemonic = function(e) {
                return e = e || 128, (0, o.assert)(e % 32 == 0, "Invalid entropy"), b((0, i.randomAsU8a)(e / 8))
            }, n.mnemonicToEntropy = p, n.mnemonicToSeedSync = function(e, n) {
                return (0, a.pbkdf2Encode)((0, o.stringToU8a)(s(e)), (0, o.stringToU8a)("mnemonic" + s(n))).password
            }, n.validateMnemonic = function(e) {
                try {
                    p(e)
                } catch (e) {
                    return !1
                }
                return !0
            };
            var o = t(5470),
                a = t(6394),
                i = t(7015),
                c = t(7016),
                u = r(t(8244));

            function s(e) {
                return (e || "").normalize("NFKD")
            }

            function l(e) {
                return parseInt(e, 2)
            }

            function d(e) {
                return e.map(e => e.toString(2).padStart(8, "0")).join("")
            }

            function f(e) {
                return d(Array.from((0, c.sha256AsU8a)(e))).slice(0, 8 * e.length / 32)
            }

            function p(e) {
                var n;
                const t = s(e).split(" ");
                (0, o.assert)(t.length % 3 == 0, "Invalid mnemonic");
                const r = t.map(e => {
                        const n = u.default.indexOf(e);
                        return (0, o.assert)(-1 !== n, "Invalid mnemonic"), n.toString(2).padStart(11, "0")
                    }).join(""),
                    a = 32 * Math.floor(r.length / 33),
                    i = r.slice(0, a),
                    c = r.slice(a),
                    d = null === (n = i.match(/(.{1,8})/g)) || void 0 === n ? void 0 : n.map(l);
                (0, o.assert)(d && d.length % 4 == 0 && d.length >= 16 && d.length <= 32, "Invalid entropy");
                const p = (0, o.u8aToU8a)(d),
                    b = f(p);
                return (0, o.assert)(b === c, "Invalid mnemonic checksum"), p
            }

            function b(e) {
                (0, o.assert)(e.length % 4 == 0 && e.length >= 16 && e.length <= 32, "Invalid entropy");
                return (d(Array.from(e)) + f(e)).match(/(.{1,11})/g).map(e => u.default[l(e)]).join(" ")
            }
        },
        6145: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hexStripPrefix = function(e) {
                if (!e || "0x" === e) return "";
                if (r.REGEX_HEX_PREFIXED.test(e)) return e.substr(2);
                if (r.REGEX_HEX_NOPREFIX.test(e)) return e;
                throw new Error(`Expected hex value to convert, found '${e}'`)
            };
            var r = t(5825)
        },
        6146: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aToHex = function(e, n = -1, t = !0) {
                const r = Math.ceil(n / 8);
                return `${t?"0x":""}${e&&e.length?r>0&&e.length>r?`${o(e.subarray(0,r/2))}…${o(e.subarray(e.length-r/2))}`:o(e):""}`
            };
            var r = t(6949);

            function o(e) {
                const n = e.length % 2,
                    t = e.length - n,
                    o = new DataView(e.buffer, e.byteOffset);
                let a = "";
                for (let e = 0; e < t; e += 2) a += r.U16_TO_HEX[o.getUint16(e)];
                return n && (a += r.U8_TO_HEX[o.getUint8(t)]), a
            }
        },
        6152: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "base58Decode", {
                enumerable: !0,
                get: function() {
                    return r.base58Decode
                }
            }), Object.defineProperty(n, "base58Encode", {
                enumerable: !0,
                get: function() {
                    return r.base58Encode
                }
            }), Object.defineProperty(n, "base58Validate", {
                enumerable: !0,
                get: function() {
                    return r.base58Validate
                }
            }), Object.defineProperty(n, "isBase58", {
                enumerable: !0,
                get: function() {
                    return r.isBase58
                }
            });
            var r = t(8198)
        },
        6153: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.defaults = void 0;
            const r = {
                allowedDecodedLengths: [1, 2, 4, 8, 32, 33],
                allowedEncodedLengths: [3, 4, 6, 10, 35, 36, 37, 38],
                allowedPrefix: t(6991).availableNetworks.map((function({
                    prefix: e
                }) {
                    return e
                })),
                prefix: 42
            };
            n.defaults = r
        },
        6154: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "keccak256AsU8a", {
                enumerable: !0,
                get: function() {
                    return r.keccak256AsU8a
                }
            }), Object.defineProperty(n, "keccak512AsU8a", {
                enumerable: !0,
                get: function() {
                    return r.keccak512AsU8a
                }
            }), Object.defineProperty(n, "keccakAsHex", {
                enumerable: !0,
                get: function() {
                    return r.keccakAsHex
                }
            }), Object.defineProperty(n, "keccakAsU8a", {
                enumerable: !0,
                get: function() {
                    return r.keccakAsU8a
                }
            });
            var r = t(8218)
        },
        6155: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "convertPublicKeyToCurve25519", {
                enumerable: !0,
                get: function() {
                    return b.convertPublicKeyToCurve25519
                }
            }), Object.defineProperty(n, "convertSecretKeyToCurve25519", {
                enumerable: !0,
                get: function() {
                    return b.convertSecretKeyToCurve25519
                }
            }), Object.defineProperty(n, "naclBoxKeypairFromSecret", {
                enumerable: !0,
                get: function() {
                    return d.naclBoxKeypairFromSecret
                }
            }), Object.defineProperty(n, "naclDecrypt", {
                enumerable: !0,
                get: function() {
                    return r.naclDecrypt
                }
            }), Object.defineProperty(n, "naclEncrypt", {
                enumerable: !0,
                get: function() {
                    return o.naclEncrypt
                }
            }), Object.defineProperty(n, "naclKeypairFromRandom", {
                enumerable: !0,
                get: function() {
                    return a.naclKeypairFromRandom
                }
            }), Object.defineProperty(n, "naclKeypairFromSecret", {
                enumerable: !0,
                get: function() {
                    return i.naclKeypairFromSecret
                }
            }), Object.defineProperty(n, "naclKeypairFromSeed", {
                enumerable: !0,
                get: function() {
                    return c.naclKeypairFromSeed
                }
            }), Object.defineProperty(n, "naclKeypairFromString", {
                enumerable: !0,
                get: function() {
                    return u.naclKeypairFromString
                }
            }), Object.defineProperty(n, "naclOpen", {
                enumerable: !0,
                get: function() {
                    return f.naclOpen
                }
            }), Object.defineProperty(n, "naclSeal", {
                enumerable: !0,
                get: function() {
                    return p.naclSeal
                }
            }), Object.defineProperty(n, "naclSign", {
                enumerable: !0,
                get: function() {
                    return s.naclSign
                }
            }), Object.defineProperty(n, "naclVerify", {
                enumerable: !0,
                get: function() {
                    return l.naclVerify
                }
            });
            var r = t(8247),
                o = t(8248),
                a = t(8249),
                i = t(8250),
                c = t(6389),
                u = t(8251),
                s = t(8252),
                l = t(7018),
                d = t(8253),
                f = t(8254),
                p = t(8255),
                b = t(8256)
        },
        6350: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.packageInfo = void 0;
            n.packageInfo = {
                name: "@polkadot/util-crypto",
                version: "7.9.2"
            }
        },
        6351: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return r.packageInfo
                }
            }), n.xglobal = void 0;
            var r = t(8051);
            const o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this");
            n.xglobal = o
        },
        6352: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.biToBigInt = function(e) {
                return "bigint" == typeof e ? e : e ? (0, a.isHex)(e) ? (0, r.hexToBigInt)(e.toString()) : (0, o.isBn)(e) ? BigInt(e.toString()) : (0, i.isToBigInt)(e) ? e.toBigInt() : (0, c.isToBn)(e) ? BigInt(e.toBn().toString()) : BigInt(e) : BigInt(0)
            };
            var r = t(6946),
                o = t(6353),
                a = t(5825),
                i = t(6354),
                c = t(6355)
        },
        6353: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isBn = function(e) {
                return r.BN.isBN(e)
            };
            var r = t(5826)
        },
        6354: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isToBigInt = function(e) {
                return !!e && (0, r.isFunction)(e.toBigInt)
            };
            var r = t(5729)
        },
        6355: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isToBn = function(e) {
                return !!e && (0, r.isFunction)(e.toBn)
            };
            var r = t(5729)
        },
        6356: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isBuffer = function(e) {
                return r.hasBuffer && Buffer.isBuffer(e)
            };
            var r = t(6357)
        },
        6357: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hasWasm = n.hasProcess = n.hasDirname = n.hasBuffer = n.hasBigInt = void 0;
            const r = "undefined" != typeof BigInt;
            n.hasBigInt = r;
            const o = "undefined" != typeof Buffer;
            n.hasBuffer = o;
            const a = "undefined" != typeof __dirname;
            n.hasDirname = a;
            const i = "object" == typeof process;
            n.hasProcess = i;
            const c = "undefined" != typeof WebAssembly;
            n.hasWasm = c
        },
        6358: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isU8a = function(e) {
                return e instanceof Uint8Array
            }
        },
        6359: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.stringToU8a = function(e) {
                return e ? r.encode(e.toString()) : new Uint8Array
            };
            const r = new(t(6942).TextEncoder)
        },
        6360: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aEq = function(e, n) {
                const t = (0, r.u8aToU8a)(e),
                    o = (0, r.u8aToU8a)(n);
                if (t.length === o.length) {
                    const e = new DataView(t.buffer, t.byteOffset),
                        n = new DataView(o.buffer, o.byteOffset),
                        r = t.length % 4,
                        a = t.length - r;
                    for (let t = 0; t < a; t += 4)
                        if (e.getUint32(t) !== n.getUint32(t)) return !1;
                    for (let e = a; e < t.length; e++)
                        if (t[e] !== o[e]) return !1;
                    return !0
                }
                return !1
            };
            var r = t(5771)
        },
        6361: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isBoolean = function(e) {
                return "boolean" == typeof e
            }
        },
        6362: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = {
                BN: !0,
                bnFromHex: !0,
                bnMax: !0,
                bnMin: !0,
                bnSqrt: !0,
                bnToBn: !0,
                bnToHex: !0,
                bnToU8a: !0
            };
            Object.defineProperty(n, "BN", {
                enumerable: !0,
                get: function() {
                    return a.BN
                }
            }), Object.defineProperty(n, "bnFromHex", {
                enumerable: !0,
                get: function() {
                    return i.bnFromHex
                }
            }), Object.defineProperty(n, "bnMax", {
                enumerable: !0,
                get: function() {
                    return c.bnMax
                }
            }), Object.defineProperty(n, "bnMin", {
                enumerable: !0,
                get: function() {
                    return u.bnMin
                }
            }), Object.defineProperty(n, "bnSqrt", {
                enumerable: !0,
                get: function() {
                    return s.bnSqrt
                }
            }), Object.defineProperty(n, "bnToBn", {
                enumerable: !0,
                get: function() {
                    return l.bnToBn
                }
            }), Object.defineProperty(n, "bnToHex", {
                enumerable: !0,
                get: function() {
                    return d.bnToHex
                }
            }), Object.defineProperty(n, "bnToU8a", {
                enumerable: !0,
                get: function() {
                    return f.bnToU8a
                }
            });
            var o = t(6954);
            Object.keys(o).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === o[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            }));
            var a = t(5826),
                i = t(8075),
                c = t(6955),
                u = t(8076),
                s = t(8077),
                l = t(5904),
                d = t(8078),
                f = t(6956)
        },
        6363: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isBigInt = function(e) {
                return "bigint" == typeof e || e instanceof BigInt
            }
        },
        6364: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isNumber = function(e) {
                return "number" == typeof e
            }
        },
        6365: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.formatDecimal = function(e) {
                const n = e[0].startsWith("-"),
                    t = n ? e.substr(1).match(r) : e.match(r);
                return t ? `${n?"-":""}${t.join(",")}` : e
            };
            const r = new RegExp("(\\d+?)(?=(\\d{3})+(?!\\d)|$)", "g")
        },
        6366: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.stringify = function(e, n) {
                return JSON.stringify(e, o, n)
            };
            var r = t(6363);

            function o(e, n) {
                return (0, r.isBigInt)(n) ? n.toString() : n
            }
        },
        6387: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.createDecode = function({
                coder: e,
                ipfsChar: n
            }, t) {
                return (r, o) => (t(r, o), e.decode(n && o ? r.substr(1) : r))
            }, n.createEncode = function({
                coder: e,
                ipfsChar: n
            }) {
                return (t, o) => {
                    const a = e.encode((0, r.u8aToU8a)(t));
                    return n && o ? `${n}${a}` : a
                }
            }, n.createIs = function(e) {
                return (n, t) => {
                    try {
                        return e(n, t)
                    } catch (e) {
                        return !1
                    }
                }
            }, n.createValidate = function({
                alphabet: e,
                ipfsChar: n,
                regex: t,
                type: o
            }) {
                return (a, i) => {
                    if ((0, r.assert)(a && "string" == typeof a, () => `Expected non-null, non-empty ${o} string input`), n && i && (0, r.assert)(a[0] === n, () => `Expected ipfs-compatible ${o} to start with '${n}'`), t)(0, r.assert)(t.test(a), `Invalid ${o} encoding`);
                    else
                        for (let n = i ? 1 : 0; n < a.length; n++)(0, r.assert)(e.includes(a[n]), () => `Invalid ${o} character "${a[n]}" (0x${a.charCodeAt(n).toString(16)}) at index ${n}`);
                    return !0
                }
            };
            var r = t(5470)
        },
        6388: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.checkAddressChecksum = function(e) {
                const n = 64 & e[0] ? 2 : 1,
                    t = 1 === n ? e[0] : (63 & e[0]) << 2 | e[1] >> 6 | (63 & e[1]) << 8,
                    o = [34 + n, 35 + n].includes(e.length),
                    a = e.length - (o ? 2 : 1),
                    i = (0, r.sshash)(e.subarray(0, a));
                return [0 == (128 & e[0]) && ![46, 47].includes(e[0]) && (o ? e[e.length - 2] === i[0] && e[e.length - 1] === i[1] : e[e.length - 1] === i[0]), a, n, t]
            };
            var r = t(6990)
        },
        6389: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclKeypairFromSeed = function(e, n) {
                if (!n && (0, a.isReady)()) {
                    const n = (0, a.ed25519KeypairFromSeed)(e);
                    return {
                        publicKey: n.slice(32),
                        secretKey: n.slice(0, 64)
                    }
                }
                return o.default.sign.keyPair.fromSeed(e)
            };
            var o = r(t(73)),
                a = t(5509)
        },
        6390: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.secp256k1Hasher = function(e, n) {
                if ("blake2" === e) return (0, r.blake2AsU8a)(n);
                if ("keccak" === e) return (0, o.keccakAsU8a)(n);
                throw new Error(`Unsupported secp256k1 hasher '${e}', expected one of ${a.join(", ")}`)
            };
            var r = t(7009),
                o = t(6154);
            const a = ["blake2", "keccak"]
        },
        6391: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "base64Decode", {
                enumerable: !0,
                get: function() {
                    return r.base64Decode
                }
            }), Object.defineProperty(n, "base64Encode", {
                enumerable: !0,
                get: function() {
                    return r.base64Encode
                }
            }), Object.defineProperty(n, "base64Pad", {
                enumerable: !0,
                get: function() {
                    return o.base64Pad
                }
            }), Object.defineProperty(n, "base64Trim", {
                enumerable: !0,
                get: function() {
                    return a.base64Trim
                }
            }), Object.defineProperty(n, "base64Validate", {
                enumerable: !0,
                get: function() {
                    return r.base64Validate
                }
            }), Object.defineProperty(n, "isBase64", {
                enumerable: !0,
                get: function() {
                    return r.isBase64
                }
            });
            var r = t(8225),
                o = t(8226),
                a = t(8227)
        },
        6392: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "secp256k1Compress", {
                enumerable: !0,
                get: function() {
                    return r.secp256k1Compress
                }
            }), Object.defineProperty(n, "secp256k1Expand", {
                enumerable: !0,
                get: function() {
                    return o.secp256k1Expand
                }
            }), Object.defineProperty(n, "secp256k1KeypairFromSeed", {
                enumerable: !0,
                get: function() {
                    return a.secp256k1KeypairFromSeed
                }
            }), Object.defineProperty(n, "secp256k1PrivateKeyTweakAdd", {
                enumerable: !0,
                get: function() {
                    return u.secp256k1PrivateKeyTweakAdd
                }
            }), Object.defineProperty(n, "secp256k1Recover", {
                enumerable: !0,
                get: function() {
                    return i.secp256k1Recover
                }
            }), Object.defineProperty(n, "secp256k1Sign", {
                enumerable: !0,
                get: function() {
                    return c.secp256k1Sign
                }
            }), Object.defineProperty(n, "secp256k1Verify", {
                enumerable: !0,
                get: function() {
                    return s.secp256k1Verify
                }
            });
            var r = t(8230),
                o = t(7011),
                a = t(6999),
                i = t(8231),
                c = t(8232),
                u = t(8233),
                s = t(7012)
        },
        6393: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.HARDENED = void 0, n.hdValidatePath = function(e) {
                if (!e.startsWith("m/")) return !1;
                const n = e.split("/").slice(1);
                for (const e of n) {
                    const n = /^\d+'?$/.test(e) ? parseInt(e.replace(/'$/, ""), 10) : Number.NaN;
                    if (isNaN(n) || n >= 2147483648 || n < 0) return !1
                }
                return !0
            };
            n.HARDENED = 2147483648
        },
        6394: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "pbkdf2Encode", {
                enumerable: !0,
                get: function() {
                    return r.pbkdf2Encode
                }
            });
            var r = t(8240)
        },
        6395: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.mnemonicValidate = function(e, n) {
                return (0, o.isWasmOnly)(n) ? (0, r.bip39Validate)(e) : (0, a.validateMnemonic)(e)
            };
            var r = t(5509),
                o = t(5604),
                a = t(6008)
        },
        6396: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "scryptEncode", {
                enumerable: !0,
                get: function() {
                    return r.scryptEncode
                }
            }), Object.defineProperty(n, "scryptFromU8a", {
                enumerable: !0,
                get: function() {
                    return o.scryptFromU8a
                }
            }), Object.defineProperty(n, "scryptToU8a", {
                enumerable: !0,
                get: function() {
                    return a.scryptToU8a
                }
            });
            var r = t(8261),
                o = t(8262),
                a = t(8263)
        },
        6941: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.TextDecoder = void 0, Object.defineProperty(n, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return a.packageInfo
                }
            });
            var r = t(6351),
                o = t(8052),
                a = t(8053);
            const i = void 0 === r.xglobal.TextDecoder ? o.TextDecoder : r.xglobal.TextDecoder;
            n.TextDecoder = i
        },
        6942: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.TextEncoder = void 0, Object.defineProperty(n, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return a.packageInfo
                }
            });
            var r = t(6351),
                o = t(8054),
                a = t(8055);
            const i = void 0 === r.xglobal.TextEncoder ? o.TextEncoder : r.xglobal.TextEncoder;
            n.TextEncoder = i
        },
        6943: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.packageInfo = void 0;
            n.packageInfo = {
                name: "@polkadot/util",
                version: "7.9.2"
            }
        },
        6944: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.detectPackage = function({
                name: e,
                version: n
            }, t, o = []) {
                (0, i.assert)(e.startsWith("@polkadot"), () => "Invalid package descriptor " + e);
                const l = function(e) {
                    const n = r.xglobal;
                    n.__polkadotjs || (n.__polkadotjs = {});
                    n.__polkadotjs[e] || (n.__polkadotjs[e] = []);
                    return n.__polkadotjs[e]
                }(e);
                if (l.push({
                        path: s(t),
                        version: n
                    }), 1 !== l.length) console.warn(`${e} has multiple versions, ensure that there is only one installed.\n${c}\n${function(e){const n=e.map(e=>(0,a.isString)(e)?{version:e}:e),t=u(n);return n.map(({path:e,version:n})=>`\
                    t$ {
                        n.padEnd(t)
                    }\
                    t$ {
                        !e || e.length < 5 ? "<unknown>" : e
                    }
                    `).join("\n")}(l)}`);
                else {
                    const t = o.filter(e => e && e.version !== n);
                    t.length && console.warn(`${e} requires direct dependencies exactly matching version ${n}.\n${c}\n${function(e){const n=u(e);return e.map(({name:e,version:t})=>`\
                        t$ {
                            t.padEnd(n)
                        }\
                        t$ {
                            e
                        }
                        `).join("\n")}(t)}`)
                }
            };
            var r = t(6351),
                o = t(5729),
                a = t(5998),
                i = t(5685);
            const c = "Either remove and explicitly install matching versions or dedupe using your package manager.\nThe following conflicting packages were found:";

            function u(e) {
                let n = 0;
                for (const {
                        version: t
                    }
                    of e) n = Math.max(n, t.length);
                return n
            }

            function s(e) {
                if ((0, o.isFunction)(e)) try {
                    return e() || ""
                } catch (e) {
                    return ""
                }
                return e || ""
            }
        },
        6945: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.BI_QUINTILL = n.BI_MILLION = n.BI_MAX_INTEGER = n.BI_BILLION = void 0;
            const r = BigInt(1e6);
            n.BI_MILLION = r;
            const o = BigInt(1e9);
            n.BI_BILLION = o;
            const a = o * o;
            n.BI_QUINTILL = a;
            const i = BigInt(Number.MAX_SAFE_INTEGER);
            n.BI_MAX_INTEGER = i
        },
        6946: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hexToBigInt = function(e, n = {}) {
                if (!e || "0x" === e) return BigInt(0);
                return (0, o.u8aToBigInt)((0, a.hexToU8a)(e), (0, r.objectSpread)({
                    isLe: !1,
                    isNegative: !1
                }, n))
            };
            var r = t(5686),
                o = t(6948),
                a = t(6e3)
        },
        6947: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.objectKeys = function(e) {
                return Object.keys(e)
            }
        },
        6948: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aToBigInt = function(e, n = {}) {
                if (!e || !e.length) return BigInt(0);
                const {
                    isLe: t,
                    isNegative: o
                } = (0, r.objectSpread)({
                    isLe: !0,
                    isNegative: !1
                }, n), a = t ? e.reverse() : e;
                return o ? -1n * i(function(e) {
                    const n = new Uint8Array(e.length),
                        t = new DataView(e.buffer, e.byteOffset),
                        r = new DataView(n.buffer),
                        o = e.length % 2,
                        a = e.length - o;
                    for (let e = 0; e < a; e += 2) r.setUint16(e, 65535 ^ t.getUint16(e));
                    o && r.setUint8(a, 255 ^ t.getUint8(a));
                    return n
                }(a)) - 1n : i(a)
            };
            var r = t(5686);
            const o = 256n,
                a = o * o;

            function i(e) {
                const n = new DataView(e.buffer, e.byteOffset),
                    t = e.length % 2,
                    r = e.length - t;
                let i = BigInt(0);
                for (let e = 0; e < r; e += 2) i = i * a + BigInt(n.getUint16(e));
                return t && (i = i * o + BigInt(n.getUint8(r))), i
            }
        },
        6949: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.U8_TO_HEX = n.U16_TO_HEX = n.HEX_TO_U8 = n.HEX_TO_U16 = void 0;
            const r = new Array(256);
            n.U8_TO_HEX = r;
            const o = new Array(65536);
            n.U16_TO_HEX = o;
            const a = {};
            n.HEX_TO_U8 = a;
            const i = {};
            n.HEX_TO_U16 = i;
            for (let e = 0; e < 256; e++) {
                const n = e.toString(16).padStart(2, "0");
                r[e] = n, a[n] = e
            }
            for (let e = 0; e < 256; e++)
                for (let n = 0; n < 256; n++) {
                    const t = r[e] + r[n],
                        a = 256 * e + n;
                    o[a] = t, i[t] = a
                }
        },
        6950: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aCmp = function(e, n) {
                const t = (0, r.u8aToU8a)(e),
                    o = (0, r.u8aToU8a)(n);
                let a = 0;
                for (;;) {
                    const e = a >= t.length,
                        n = a >= o.length;
                    if (e && n) return 0;
                    if (e) return -1;
                    if (n) return 1;
                    if (t[a] !== o[a]) return t[a] > o[a] ? 1 : -1;
                    a++
                }
            };
            var r = t(5771)
        },
        6951: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aConcat = function(...e) {
                let n = 0,
                    t = 0;
                const o = new Array(e.length);
                for (let t = 0; t < e.length; t++) o[t] = (0, r.u8aToU8a)(e[t]), n += o[t].length;
                const a = new Uint8Array(n);
                for (let e = 0; e < o.length; e++) a.set(o[e], t), t += o[e].length;
                return a
            };
            var r = t(5771)
        },
        6952: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aToString = function(e) {
                return null != e && e.length ? r.decode(e) : ""
            };
            const r = new(t(6941).TextDecoder)("utf-8")
        },
        6953: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.biToU8a = function(e, n) {
                const t = (0, r.objectSpread)({
                        bitLength: -1,
                        isLe: !0,
                        isNegative: !1
                    }, n),
                    i = (0, o.biToBigInt)(e);
                if (0n === i) return function({
                    bitLength: e = 0
                }) {
                    return -1 === e ? new Uint8Array : new Uint8Array(Math.ceil(e / 8))
                }(t);
                const c = function(e, {
                    isLe: n,
                    isNegative: t
                }) {
                    const r = [];
                    t && (e = -1n * (e + 1n));
                    for (; 0n !== e;) {
                        const o = e % a,
                            i = Number(t ? 0xffn ^ o : o);
                        n ? r.push(i) : r.unshift(i), e = (e - o) / a
                    }
                    return Uint8Array.from(r)
                }(i, t);
                if (-1 === t.bitLength) return c;
                const u = Math.ceil((t.bitLength || 0) / 8),
                    s = new Uint8Array(u);
                t.isNegative && s.fill(255);
                return s.set(c, t.isLe ? 0 : u - c.length), s
            };
            var r = t(5686),
                o = t(6352);
            const a = 256n
        },
        6954: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.BN_ZERO = n.BN_TWO = n.BN_THREE = n.BN_THOUSAND = n.BN_TEN = n.BN_SIX = n.BN_SEVEN = n.BN_QUINTILL = n.BN_ONE = n.BN_NINE = n.BN_MILLION = n.BN_MAX_INTEGER = n.BN_HUNDRED = n.BN_FOUR = n.BN_FIVE = n.BN_EIGHT = n.BN_BILLION = void 0;
            var r = t(5826);
            const o = new r.BN(0);
            n.BN_ZERO = o;
            const a = new r.BN(1);
            n.BN_ONE = a;
            const i = new r.BN(2);
            n.BN_TWO = i;
            const c = new r.BN(3);
            n.BN_THREE = c;
            const u = new r.BN(4);
            n.BN_FOUR = u;
            const s = new r.BN(5);
            n.BN_FIVE = s;
            const l = new r.BN(6);
            n.BN_SIX = l;
            const d = new r.BN(7);
            n.BN_SEVEN = d;
            const f = new r.BN(8);
            n.BN_EIGHT = f;
            const p = new r.BN(9);
            n.BN_NINE = p;
            const b = new r.BN(10);
            n.BN_TEN = b;
            const y = new r.BN(100);
            n.BN_HUNDRED = y;
            const g = new r.BN(1e3);
            n.BN_THOUSAND = g;
            const m = new r.BN(1e6);
            n.BN_MILLION = m;
            const h = new r.BN(1e9);
            n.BN_BILLION = h;
            const v = h.mul(h);
            n.BN_QUINTILL = v;
            const _ = new r.BN(Number.MAX_SAFE_INTEGER);
            n.BN_MAX_INTEGER = _
        },
        6955: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.bnMax = function(...e) {
                return a("max", e)
            }, n.checkMaxMin = a;
            var r = t(5685),
                o = t(5826);

            function a(e, n) {
                (0, r.assert)(n.length >= 1, "Must provide one or more BN arguments");
                let t = n[0];
                for (let r = 1; r < n.length; r++) t = o.BN[e](t, n[r]);
                return t
            }
        },
        6956: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.bnToU8a = function(e, n = i, t) {
                const c = (0, o.objectSpread)({
                        bitLength: -1,
                        isLe: !0,
                        isNegative: !1
                    }, (0, r.isNumber)(n) ? {
                        bitLength: n,
                        isLe: t
                    } : n),
                    u = (0, a.bnToBn)(e),
                    s = -1 === c.bitLength ? Math.ceil(u.bitLength() / 8) : Math.ceil((c.bitLength || 0) / 8);
                return e ? function(e, n, {
                    isLe: t,
                    isNegative: r
                }) {
                    const o = new Uint8Array(n),
                        a = r ? e.toTwos(8 * n) : e;
                    return o.set(a.toArray(t ? "le" : "be", n), 0), o
                }(u, s, c) : function(e, n) {
                    return -1 === n.bitLength ? new Uint8Array : new Uint8Array(e)
                }(s, c)
            };
            var r = t(6364),
                o = t(5686),
                a = t(5904);
            const i = {
                bitLength: -1,
                isLe: !0,
                isNegative: !1
            }
        },
        6957: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.compactToU8a = function(e) {
                const n = (0, o.bnToBn)(e);
                if (n.lte(i)) return new Uint8Array([n.toNumber() << 2]);
                if (n.lte(c)) return (0, o.bnToU8a)(n.shln(2).iadd(o.BN_ONE), 16, !0);
                if (n.lte(u)) return (0, o.bnToU8a)(n.shln(2).iadd(o.BN_TWO), 32, !0);
                const t = (0, o.bnToU8a)(n);
                let s = t.length;
                for (; 0 === t[s - 1];) s--;
                return (0, r.assert)(s >= 4, "Invalid length, previous checks match anything less than 2^30"), (0, a.u8aConcat)([3 + (s - 4 << 2)], t.subarray(0, s))
            };
            var r = t(5685),
                o = t(6362),
                a = t(5903);
            const i = o.BN_TWO.pow(new o.BN(6)).isub(o.BN_ONE),
                c = o.BN_TWO.pow(new o.BN(14)).isub(o.BN_ONE),
                u = o.BN_TWO.pow(new o.BN(30)).isub(o.BN_ONE)
        },
        6958: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.compactFromU8a = function(e) {
                const n = (0, o.u8aToU8a)(e),
                    t = 3 & n[0];
                if (0 === t) return [1, new r.BN(n[0]).ishrn(2)];
                if (1 === t) return [2, (0, o.u8aToBn)(n.subarray(0, 2), !0).ishrn(2)];
                if (2 === t) return [4, (0, o.u8aToBn)(n.subarray(0, 4), !0).ishrn(2)];
                const a = 1 + new r.BN(n[0]).ishrn(2).iadd(r.BN_FOUR).toNumber();
                return [a, (0, o.u8aToBn)(n.subarray(1, a), !0)]
            };
            var r = t(6362),
                o = t(5903)
        },
        6959: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.SI_MID = n.SI = void 0, n.calcSi = function(e, n, t) {
                if (t) return o(t);
                const a = 7 + Math.ceil((e.length - n) / 3);
                return r[a] || r[a < 0 ? 0 : r.length - 1]
            }, n.findSi = o;
            n.SI_MID = 8;
            const r = [{
                power: -24,
                text: "yocto",
                value: "y"
            }, {
                power: -21,
                text: "zepto",
                value: "z"
            }, {
                power: -18,
                text: "atto",
                value: "a"
            }, {
                power: -15,
                text: "femto",
                value: "f"
            }, {
                power: -12,
                text: "pico",
                value: "p"
            }, {
                power: -9,
                text: "nano",
                value: "n"
            }, {
                power: -6,
                text: "micro",
                value: "µ"
            }, {
                power: -3,
                text: "milli",
                value: "m"
            }, {
                power: 0,
                text: "Unit",
                value: "-"
            }, {
                power: 3,
                text: "Kilo",
                value: "k"
            }, {
                power: 6,
                text: "Mill",
                value: "M"
            }, {
                power: 9,
                text: "Bill",
                value: "B"
            }, {
                power: 12,
                text: "Tril",
                value: "T"
            }, {
                power: 15,
                text: "Peta",
                value: "P"
            }, {
                power: 18,
                text: "Exa",
                value: "E"
            }, {
                power: 21,
                text: "Zeta",
                value: "Z"
            }, {
                power: 24,
                text: "Yotta",
                value: "Y"
            }];

            function o(e) {
                for (let n = 0; n < r.length; n++)
                    if (r[n].value === e) return r[n];
                return r[8]
            }
            n.SI = r
        },
        6960: function(e, n, t) {
            "use strict";

            function r(e) {
                return e.toString().padStart(2, "0")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.formatDate = function(e) {
                const n = e.getFullYear().toString(),
                    t = r(e.getMonth() + 1),
                    o = r(e.getDate()),
                    a = r(e.getHours()),
                    i = r(e.getMinutes()),
                    c = r(e.getSeconds());
                return `${n}-${t}-${o} ${a}:${i}:${c}`
            }
        },
        6961: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hexAddPrefix = function(e) {
                if (e && (0, r.hexHasPrefix)(e)) return e;
                return `0x${e&&e.length%2==1?"0":""}${e||""}`
            };
            var r = t(6962)
        },
        6962: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hexHasPrefix = function(e) {
                return !!e && (0, r.isHex)(e, -1)
            };
            var r = t(5825)
        },
        6963: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hexFixLength = function(e, n = -1, t = !1) {
                const a = Math.ceil(n / 4),
                    i = a + 2;
                return (0, r.hexAddPrefix)(-1 === n || e.length === i || !t && e.length < i ? (0, o.hexStripPrefix)(e) : e.length > i ? (0, o.hexStripPrefix)(e).slice(-1 * a) : `${"0".repeat(a)}${(0,o.hexStripPrefix)(e)}`.slice(-1 * a))
            };
            var r = t(6961),
                o = t(6145)
        },
        6964: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.numberToHex = function(e, n = -1) {
                if ((0, a.isUndefined)(e) || (0, o.isNull)(e) || isNaN(e)) return "0x";
                const t = e.toString(16);
                return (0, r.hexFixLength)(t.length % 2 ? "0" + t : t, n, !0)
            };
            var r = t(6963),
                o = t(5999),
                a = t(5730)
        },
        6965: function(e, n, t) {
            "use strict";
            const r = /[\p{Lu}]/u,
                o = /[\p{Ll}]/u,
                a = /^[\p{Lu}](?![\p{Lu}])/gu,
                i = /([\p{Alpha}\p{N}_]|$)/u,
                c = /[_.\- ]+/,
                u = new RegExp("^" + c.source),
                s = new RegExp(c.source + i.source, "gu"),
                l = new RegExp("\\d+" + i.source, "gu"),
                d = (e, n) => {
                    if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
                    if (n = {
                            pascalCase: !1,
                            preserveConsecutiveUppercase: !1,
                            ...n
                        }, 0 === (e = Array.isArray(e) ? e.map(e => e.trim()).filter(e => e.length).join("-") : e.trim()).length) return "";
                    const t = !1 === n.locale ? e => e.toLowerCase() : e => e.toLocaleLowerCase(n.locale),
                        i = !1 === n.locale ? e => e.toUpperCase() : e => e.toLocaleUpperCase(n.locale);
                    if (1 === e.length) return n.pascalCase ? i(e) : t(e);
                    return e !== t(e) && (e = ((e, n, t) => {
                        let a = !1,
                            i = !1,
                            c = !1;
                        for (let u = 0; u < e.length; u++) {
                            const s = e[u];
                            a && r.test(s) ? (e = e.slice(0, u) + "-" + e.slice(u), a = !1, c = i, i = !0, u++) : i && c && o.test(s) ? (e = e.slice(0, u - 1) + "-" + e.slice(u - 1), c = i, i = !1, a = !0) : (a = n(s) === s && t(s) !== s, c = i, i = t(s) === s && n(s) !== s)
                        }
                        return e
                    })(e, t, i)), e = e.replace(u, ""), e = n.preserveConsecutiveUppercase ? ((e, n) => (a.lastIndex = 0, e.replace(a, e => n(e))))(e, t) : t(e), n.pascalCase && (e = i(e.charAt(0)) + e.slice(1)), ((e, n) => (s.lastIndex = 0, l.lastIndex = 0, e.replace(s, (e, t) => n(t)).replace(l, e => n(e))))(e, i)
                };
            e.exports = d, e.exports.default = d
        },
        6966: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.getRandomValues = function(e) {
                return crypto.getRandomValues(e)
            }, Object.defineProperty(n, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return r.packageInfo
                }
            });
            var r = t(8125)
        },
        6967: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.cryptoIsReady = void 0, n.cryptoWaitReady = function() {
                return (0, r.waitReady)().then(() => !0).catch(e => (console.error("Unable to initialize @polkadot/util-crypto", e), !1))
            };
            var r = t(5509);
            const o = r.isReady;
            n.cryptoIsReady = o
        },
        6990: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.sshash = function(e) {
                return (0, o.blake2AsU8a)((0, r.u8aConcat)(a, e), 512)
            };
            var r = t(5470),
                o = t(5774);
            const a = (0, r.stringToU8a)("SS58PRE")
        },
        6991: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = t(6992);
            Object.keys(r).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in n && n[e] === r[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                }))
            }))
        },
        6993: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.createKeyMulti = function(e, n) {
                return (0, o.blake2AsU8a)((0, r.u8aConcat)(c, (0, r.compactToU8a)(e.length), ...(0, r.u8aSorted)(e.map(i.addressToU8a)), (0, r.bnToU8a)(n, a.BN_LE_16_OPTS)))
            };
            var r = t(5470),
                o = t(5774),
                a = t(5643),
                i = t(6994);
            const c = (0, r.stringToU8a)("modlpy/utilisuba")
        },
        6994: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.addressToU8a = function(e) {
                return (0, r.decodeAddress)(e)
            };
            var r = t(5687)
        },
        6995: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.createKeyDerived = function(e, n) {
                return (0, o.blake2AsU8a)((0, r.u8aConcat)(c, (0, i.decodeAddress)(e), (0, r.bnToU8a)(n, a.BN_LE_16_OPTS)))
            };
            var r = t(5470),
                o = t(5774),
                a = t(5643),
                i = t(5687);
            const c = (0, r.stringToU8a)("modlpy/utilisuba")
        },
        6996: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "keyExtractPath", {
                enumerable: !0,
                get: function() {
                    return r.keyExtractPath
                }
            }), Object.defineProperty(n, "keyExtractSuri", {
                enumerable: !0,
                get: function() {
                    return o.keyExtractSuri
                }
            }), Object.defineProperty(n, "keyFromPath", {
                enumerable: !0,
                get: function() {
                    return a.keyFromPath
                }
            }), Object.defineProperty(n, "keyHdkdEcdsa", {
                enumerable: !0,
                get: function() {
                    return u.keyHdkdEcdsa
                }
            }), Object.defineProperty(n, "keyHdkdEd25519", {
                enumerable: !0,
                get: function() {
                    return i.keyHdkdEd25519
                }
            }), Object.defineProperty(n, "keyHdkdSr25519", {
                enumerable: !0,
                get: function() {
                    return c.keyHdkdSr25519
                }
            });
            var r = t(6997),
                o = t(8204),
                a = t(8205),
                i = t(7001),
                c = t(7002),
                u = t(6998)
        },
        6997: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.keyExtractPath = function(e) {
                const n = e.match(a),
                    t = [];
                let i = "";
                if (n) {
                    i = n.join("");
                    for (const e of n) t.push(o.DeriveJunction.from(e.substr(1)))
                }
                return (0, r.assert)(i === e, () => `Re-constructed path "${i}" does not match input`), {
                    parts: n,
                    path: t
                }
            };
            var r = t(5470),
                o = t(8203);
            const a = /\/(\/?)([^/]+)/g
        },
        6998: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.keyHdkdEcdsa = void 0;
            var r = t(8206),
                o = t(6999);
            const a = (0, t(7e3).createSeedDeriveFn)(o.secp256k1KeypairFromSeed, r.secp256k1DeriveHard);
            n.keyHdkdEcdsa = a
        },
        6999: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.secp256k1KeypairFromSeed = function(e) {
                (0, r.assert)(32 === e.length, "Expected valid 32-byte private key as a seed");
                const n = a.secp256k1.keyFromPrivate(e);
                return {
                    publicKey: new Uint8Array(n.getPublic().encodeCompressed()),
                    secretKey: (0, r.bnToU8a)(n.getPrivate(), o.BN_BE_256_OPTS)
                }
            };
            var r = t(5470),
                o = t(5643),
                a = t(5906)
        },
        7e3: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.createSeedDeriveFn = function(e, n) {
                return (t, {
                    chainCode: o,
                    isHard: a
                }) => ((0, r.assert)(a, "A soft key was found in the path and is not supported"), e(n(t.secretKey.subarray(0, 32), o)))
            };
            var r = t(5470)
        },
        7001: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.keyHdkdEd25519 = void 0;
            var r = t(8207),
                o = t(6389);
            const a = (0, t(7e3).createSeedDeriveFn)(o.naclKeypairFromSeed, r.naclDeriveHard);
            n.keyHdkdEd25519 = a
        },
        7002: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.keyHdkdSr25519 = function(e, {
                chainCode: n,
                isSoft: t
            }) {
                return t ? (0, o.schnorrkelDeriveSoft)(e, n) : (0, r.schnorrkelDeriveHard)(e, n)
            };
            var r = t(7003),
                o = t(7006)
        },
        7003: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.schnorrkelDeriveHard = void 0;
            var r = t(5509);
            const o = (0, t(7004).createDeriveFn)(r.sr25519DeriveKeypairHard);
            n.schnorrkelDeriveHard = o
        },
        7004: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.createDeriveFn = function(e) {
                return (n, t) => ((0, r.assert)((0, r.isU8a)(t) && 32 === t.length, "Invalid chainCode passed to derive"), (0, o.schnorrkelKeypairFromU8a)(e((0, a.schnorrkelKeypairToU8a)(n), t)))
            };
            var r = t(5470),
                o = t(7005),
                a = t(8208)
        },
        7005: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.schnorrkelKeypairFromU8a = function(e) {
                const n = (0, r.u8aToU8a)(e);
                return (0, r.assert)(96 === n.length, () => "Expected keypair with 96 bytes, found " + n.length), {
                    publicKey: n.slice(64, 96),
                    secretKey: n.slice(0, 64)
                }
            };
            var r = t(5470)
        },
        7006: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.schnorrkelDeriveSoft = void 0;
            var r = t(5509);
            const o = (0, t(7004).createDeriveFn)(r.sr25519DeriveKeypairSoft);
            n.schnorrkelDeriveSoft = o
        },
        7007: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "schnorrkelAgreement", {
                enumerable: !0,
                get: function() {
                    return r.schnorrkelAgreement
                }
            }), Object.defineProperty(n, "schnorrkelDeriveHard", {
                enumerable: !0,
                get: function() {
                    return o.schnorrkelDeriveHard
                }
            }), Object.defineProperty(n, "schnorrkelDerivePublic", {
                enumerable: !0,
                get: function() {
                    return a.schnorrkelDerivePublic
                }
            }), Object.defineProperty(n, "schnorrkelDeriveSoft", {
                enumerable: !0,
                get: function() {
                    return i.schnorrkelDeriveSoft
                }
            }), Object.defineProperty(n, "schnorrkelKeypairFromSeed", {
                enumerable: !0,
                get: function() {
                    return c.schnorrkelKeypairFromSeed
                }
            }), Object.defineProperty(n, "schnorrkelSign", {
                enumerable: !0,
                get: function() {
                    return u.schnorrkelSign
                }
            }), Object.defineProperty(n, "schnorrkelVerify", {
                enumerable: !0,
                get: function() {
                    return s.schnorrkelVerify
                }
            }), Object.defineProperty(n, "schnorrkelVrfSign", {
                enumerable: !0,
                get: function() {
                    return l.schnorrkelVrfSign
                }
            }), Object.defineProperty(n, "schnorrkelVrfVerify", {
                enumerable: !0,
                get: function() {
                    return d.schnorrkelVrfVerify
                }
            });
            var r = t(8209),
                o = t(7003),
                a = t(8210),
                i = t(7006),
                c = t(8211),
                u = t(8212),
                s = t(7008),
                l = t(8213),
                d = t(8214)
        },
        7008: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.schnorrkelVerify = function(e, n, t) {
                const a = (0, r.u8aToU8a)(t),
                    i = (0, r.u8aToU8a)(n);
                return (0, r.assert)(32 === a.length, () => `Invalid publicKey, received ${a.length} bytes, expected 32`), (0, r.assert)(64 === i.length, () => `Invalid signature, received ${i.length} bytes, expected 64`), (0, o.sr25519Verify)(i, (0, r.u8aToU8a)(e), a)
            };
            var r = t(5470),
                o = t(5509)
        },
        7009: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "blake2AsHex", {
                enumerable: !0,
                get: function() {
                    return r.blake2AsHex
                }
            }), Object.defineProperty(n, "blake2AsU8a", {
                enumerable: !0,
                get: function() {
                    return r.blake2AsU8a
                }
            });
            var r = t(5774)
        },
        7010: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.validateAddress = function(e, n, t) {
                return !!(0, r.decodeAddress)(e, n, t)
            };
            var r = t(5687)
        },
        7011: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.secp256k1Expand = function(e) {
                (0, r.assert)([33, 65].includes(e.length), "Invalid publicKey provided");
                const n = a.secp256k1.keyFromPublic(e).getPublic();
                return (0, r.u8aConcat)((0, r.bnToU8a)(n.getX(), o.BN_BE_256_OPTS), (0, r.bnToU8a)(n.getY(), o.BN_BE_256_OPTS))
            };
            var r = t(5470),
                o = t(5643),
                a = t(5906)
        },
        7012: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.secp256k1Verify = function(e, n, t, c = "blake2") {
                const u = "keccak" === c,
                    s = (0, r.u8aToU8a)(n);
                (0, r.assert)(65 === s.length, `Expected signature with 65 bytes, ${s.length} found instead`);
                const l = new Uint8Array(i.secp256k1.recoverPubKey((0, a.secp256k1Hasher)(c, e), {
                        r: s.slice(0, 32),
                        s: s.slice(32, 64)
                    }, s[64]).encodeCompressed()),
                    d = (0, a.secp256k1Hasher)(c, u ? (0, o.secp256k1Expand)(l) : l),
                    f = (0, r.u8aToU8a)(t);
                return u ? (0, r.u8aEq)(d.slice(-20), f.slice(-20)) : (0, r.u8aEq)(d, f)
            };
            var r = t(5470),
                o = t(7011),
                a = t(6390),
                i = t(5906)
        },
        7013: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isEthereumChecksum = function(e) {
                const n = e.replace("0x", ""),
                    t = (0, r.u8aToHex)((0, o.keccakAsU8a)(n.toLowerCase()), -1, !1);
                for (let e = 0; e < 40; e++)
                    if (a = n[e], i = parseInt(t[e], 16), a !== (i > 7 ? a.toUpperCase() : a.toLowerCase())) return !1;
                var a, i;
                return !0
            };
            var r = t(5470),
                o = t(6154)
        },
        7014: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "mnemonicGenerate", {
                enumerable: !0,
                get: function() {
                    return r.mnemonicGenerate
                }
            }), Object.defineProperty(n, "mnemonicToEntropy", {
                enumerable: !0,
                get: function() {
                    return o.mnemonicToEntropy
                }
            }), Object.defineProperty(n, "mnemonicToLegacySeed", {
                enumerable: !0,
                get: function() {
                    return a.mnemonicToLegacySeed
                }
            }), Object.defineProperty(n, "mnemonicToMiniSecret", {
                enumerable: !0,
                get: function() {
                    return i.mnemonicToMiniSecret
                }
            }), Object.defineProperty(n, "mnemonicValidate", {
                enumerable: !0,
                get: function() {
                    return c.mnemonicValidate
                }
            });
            var r = t(8239),
                o = t(7017),
                a = t(8245),
                i = t(8246),
                c = t(6395)
        },
        7015: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "randomAsHex", {
                enumerable: !0,
                get: function() {
                    return o.randomAsHex
                }
            }), Object.defineProperty(n, "randomAsNumber", {
                enumerable: !0,
                get: function() {
                    return r.randomAsNumber
                }
            }), Object.defineProperty(n, "randomAsU8a", {
                enumerable: !0,
                get: function() {
                    return o.randomAsU8a
                }
            });
            var r = t(8242),
                o = t(5908)
        },
        7016: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "sha256AsU8a", {
                enumerable: !0,
                get: function() {
                    return r.sha256AsU8a
                }
            }), Object.defineProperty(n, "sha512AsU8a", {
                enumerable: !0,
                get: function() {
                    return r.sha512AsU8a
                }
            }), Object.defineProperty(n, "shaAsU8a", {
                enumerable: !0,
                get: function() {
                    return r.shaAsU8a
                }
            });
            var r = t(8243)
        },
        7017: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.mnemonicToEntropy = function(e, n) {
                return (0, o.isWasmOnly)(n) ? (0, r.bip39ToEntropy)(e) : (0, a.mnemonicToEntropy)(e)
            };
            var r = t(5509),
                o = t(5604),
                a = t(6008)
        },
        7018: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclVerify = function(e, n, t, r) {
                const u = (0, a.u8aToU8a)(e),
                    s = (0, a.u8aToU8a)(t),
                    l = (0, a.u8aToU8a)(n);
                return (0, a.assert)(32 === s.length, () => `Invalid publicKey, received ${s.length}, expected 32`), (0, a.assert)(64 === l.length, () => `Invalid signature, received ${l.length} bytes, expected 64`), (0, c.isWasmOnly)(r) ? (0, i.ed25519Verify)(l, u, s) : o.default.sign.detached.verify(u, l, s)
            };
            var o = r(t(73)),
                a = t(5470),
                i = t(5509),
                c = t(5604)
        },
        7019: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.jsonDecryptData = function(e, n, t = i.ENCODING) {
                (0, r.assert)(e, "No encrypted data available to decode"), (0, r.assert)(n || !t.includes("xsalsa20-poly1305"), "Password required to decode encrypted data");
                let c = e;
                if (n) {
                    let u;
                    if (t.includes("scrypt")) {
                        const {
                            params: t,
                            salt: r
                        } = (0, a.scryptFromU8a)(e);
                        u = (0, a.scryptEncode)(n, r, t).password, e = e.subarray(i.SCRYPT_LENGTH)
                    } else u = (0, r.stringToU8a)(n);
                    c = (0, o.naclDecrypt)(e.subarray(i.NONCE_LENGTH), e.subarray(0, i.NONCE_LENGTH), (0, r.u8aFixLength)(u, 256, !0))
                }
                return (0, r.assert)(c, "Unable to decode using the supplied passphrase"), c
            };
            var r = t(5470),
                o = t(6155),
                a = t(6396),
                i = t(7021)
        },
        7020: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.DEFAULT_PARAMS = void 0;
            n.DEFAULT_PARAMS = {
                N: 32768,
                p: 1,
                r: 8
            }
        },
        7021: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.SCRYPT_LENGTH = n.NONCE_LENGTH = n.ENCODING_VERSION = n.ENCODING_NONE = n.ENCODING = void 0;
            n.ENCODING = ["scrypt", "xsalsa20-poly1305"];
            n.ENCODING_NONE = ["none"];
            n.ENCODING_VERSION = "3";
            n.NONCE_LENGTH = 24;
            n.SCRYPT_LENGTH = 44
        },
        7022: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.jsonEncryptFormat = function(e, n, t) {
                return {
                    encoded: (0, r.base64Encode)(e),
                    encoding: {
                        content: n,
                        type: t ? o.ENCODING : o.ENCODING_NONE,
                        version: o.ENCODING_VERSION
                    }
                }
            };
            var r = t(6391),
                o = t(7021)
        },
        8049: function(e, n, t) {
            "use strict";
            var r = t(6940),
                o = t(5470),
                a = t(6966),
                i = t(6350);
            (0, o.detectPackage)(i.packageInfo, "undefined" != typeof __dirname && __dirname, [r.packageInfo, o.packageInfo, a.packageInfo])
        },
        8050: function(e, n, t) {
            var r = t(6941),
                o = t(6942),
                a = t(6943);
            (0, t(6944).detectPackage)(a.packageInfo, "undefined" != typeof __dirname && __dirname, [r.packageInfo, o.packageInfo])
        },
        8051: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.packageInfo = void 0;
            n.packageInfo = {
                name: "@polkadot/x-global",
                version: "7.9.2"
            }
        },
        8052: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.TextDecoder = void 0;
            n.TextDecoder = class TextDecoder {
                constructor(e) {}
                decode(e) {
                    let n = "";
                    for (let t = 0; t < e.length; t++) n += String.fromCharCode(e[t]);
                    return n
                }
            }
        },
        8053: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.packageInfo = void 0;
            n.packageInfo = {
                name: "@polkadot/x-textdecoder",
                version: "7.9.2"
            }
        },
        8054: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.TextEncoder = void 0;
            n.TextEncoder = class TextEncoder {
                encode(e) {
                    const n = new Uint8Array(e.length);
                    for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
                    return n
                }
            }
        },
        8055: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.packageInfo = void 0;
            n.packageInfo = {
                name: "@polkadot/x-textencoder",
                version: "7.9.2"
            }
        },
        8056: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = {
                packageInfo: !0
            };
            Object.defineProperty(n, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return o.packageInfo
                }
            });
            var o = t(6943),
                a = t(8057);
            Object.keys(a).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === a[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                }))
            }));
            var i = t(5685);
            Object.keys(i).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === i[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                }))
            }));
            var c = t(8064);
            Object.keys(c).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === c[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return c[e]
                    }
                }))
            }));
            var u = t(6362);
            Object.keys(u).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === u[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return u[e]
                    }
                }))
            }));
            var s = t(8079);
            Object.keys(s).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === s[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return s[e]
                    }
                }))
            }));
            var l = t(8081);
            Object.keys(l).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === l[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return l[e]
                    }
                }))
            }));
            var d = t(8084);
            Object.keys(d).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === d[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return d[e]
                    }
                }))
            }));
            var f = t(8085);
            Object.keys(f).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === f[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return f[e]
                    }
                }))
            }));
            var p = t(6357);
            Object.keys(p).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === p[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return p[e]
                    }
                }))
            }));
            var b = t(8089);
            Object.keys(b).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === b[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return b[e]
                    }
                }))
            }));
            var y = t(8092);
            Object.keys(y).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === y[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return y[e]
                    }
                }))
            }));
            var g = t(8106);
            Object.keys(g).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === g[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return g[e]
                    }
                }))
            }));
            var m = t(8107);
            Object.keys(m).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === m[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return m[e]
                    }
                }))
            }));
            var h = t(8108);
            Object.keys(h).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === h[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return h[e]
                    }
                }))
            }));
            var v = t(8109);
            Object.keys(v).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === v[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return v[e]
                    }
                }))
            }));
            var _ = t(8111);
            Object.keys(_).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === _[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return _[e]
                    }
                }))
            }));
            var O = t(8117);
            Object.keys(O).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === O[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return O[e]
                    }
                }))
            }));
            var j = t(8118);
            Object.keys(j).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === j[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return j[e]
                    }
                }))
            }));
            var P = t(6366);
            Object.keys(P).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === P[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return P[e]
                    }
                }))
            }));
            var k = t(5903);
            Object.keys(k).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === k[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return k[e]
                    }
                }))
            }));
            var w = t(6944);
            Object.keys(w).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === w[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return w[e]
                    }
                }))
            }))
        },
        8057: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "arrayChunk", {
                enumerable: !0,
                get: function() {
                    return r.arrayChunk
                }
            }), Object.defineProperty(n, "arrayFilter", {
                enumerable: !0,
                get: function() {
                    return o.arrayFilter
                }
            }), Object.defineProperty(n, "arrayFlatten", {
                enumerable: !0,
                get: function() {
                    return a.arrayFlatten
                }
            }), Object.defineProperty(n, "arrayRange", {
                enumerable: !0,
                get: function() {
                    return i.arrayRange
                }
            }), Object.defineProperty(n, "arrayShuffle", {
                enumerable: !0,
                get: function() {
                    return c.arrayShuffle
                }
            }), Object.defineProperty(n, "arrayZip", {
                enumerable: !0,
                get: function() {
                    return u.arrayZip
                }
            });
            var r = t(8058),
                o = t(8059),
                a = t(8060),
                i = t(8061),
                c = t(8062),
                u = t(8063)
        },
        8058: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.arrayChunk = function(e, n) {
                const t = Math.ceil(e.length / n),
                    r = Array(t);
                for (let o = 0; o < t; o++) {
                    const t = o * n;
                    r[o] = e.slice(t, t + n)
                }
                return r
            }
        },
        8059: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.arrayFilter = function(e, n = !0) {
                return e.filter(e => !(0, o.isUndefined)(e) && (n || !(0, r.isNull)(e)))
            };
            var r = t(5999),
                o = t(5730)
        },
        8060: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.arrayFlatten = function(e) {
                let n = 0;
                for (let t = 0; t < e.length; t++) n += e[t].length;
                const t = new Array(n);
                let r = -1;
                for (let n = 0; n < e.length; n++) {
                    const o = e[n];
                    for (let e = 0; e < o.length; e++) t[++r] = o[e]
                }
                return t
            }
        },
        8061: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.arrayRange = function(e, n = 0) {
                (0, r.assert)(e > 0, "Expected non-zero, positive number as a range size");
                const t = new Array(e).fill(0);
                for (let e = 0; e < t.length; e++) t[e] = e + n;
                return t
            };
            var r = t(5685)
        },
        8062: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.arrayShuffle = function(e) {
                const n = e.slice();
                let t = n.length;
                if (1 === t) return n;
                for (; 0 !== t;) {
                    const e = Math.floor(Math.random() * t);
                    t--, [n[t], n[e]] = [n[e], n[t]]
                }
                return n
            }
        },
        8063: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.arrayZip = function(e, n) {
                const t = new Array(e.length);
                for (let r = 0; r < e.length; r++) t[r] = [e[r], n[r]];
                return t
            }
        },
        8064: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = {
                biSqrt: !0,
                biToBigInt: !0,
                biMax: !0,
                biMin: !0,
                biToHex: !0,
                biToU8a: !0
            };
            Object.defineProperty(n, "biMax", {
                enumerable: !0,
                get: function() {
                    return c.biMax
                }
            }), Object.defineProperty(n, "biMin", {
                enumerable: !0,
                get: function() {
                    return u.biMin
                }
            }), Object.defineProperty(n, "biSqrt", {
                enumerable: !0,
                get: function() {
                    return a.biSqrt
                }
            }), Object.defineProperty(n, "biToBigInt", {
                enumerable: !0,
                get: function() {
                    return i.biToBigInt
                }
            }), Object.defineProperty(n, "biToHex", {
                enumerable: !0,
                get: function() {
                    return s.biToHex
                }
            }), Object.defineProperty(n, "biToU8a", {
                enumerable: !0,
                get: function() {
                    return l.biToU8a
                }
            });
            var o = t(6945);
            Object.keys(o).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === o[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            }));
            var a = t(8065),
                i = t(6352),
                c = t(8066),
                u = t(8067),
                s = t(8068),
                l = t(6953)
        },
        8065: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.biSqrt = function(e) {
                const n = (0, a.biToBigInt)(e);
                if ((0, r.assert)(n >= 0n, "square root of negative numbers is not supported"), n <= o.BI_MAX_INTEGER) return BigInt(Math.floor(Math.sqrt(Number(n))));
                let t = i;
                for (;;) {
                    const e = n / t + t >> 1n;
                    if (t === e || t === e - 1n) return t;
                    t = e
                }
            };
            var r = t(5685),
                o = t(6945),
                a = t(6352);
            const i = 94906265n
        },
        8066: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.biMax = function(...e) {
                (0, r.assert)(e.length >= 1, "Must provide one or more bigint arguments");
                let n = e[0];
                for (let t = 1; t < e.length; t++) e[t] > n && (n = e[t]);
                return n
            };
            var r = t(5685)
        },
        8067: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.biMin = function(...e) {
                (0, r.assert)(e.length >= 1, "Must provide one or more bigint arguments");
                let n = e[0];
                for (let t = 1; t < e.length; t++) e[t] < n && (n = e[t]);
                return n
            };
            var r = t(5685)
        },
        8068: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.biToHex = function(e, n) {
                if (!e) return "0x00";
                return (0, o.u8aToHex)((0, a.biToU8a)(e, (0, r.objectSpread)({
                    isLe: !1,
                    isNegative: !1
                }, n)))
            };
            var r = t(5686),
                o = t(5903),
                a = t(6953)
        },
        8069: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aEmpty = function(e) {
                for (let n = 0; n < e.length; n++)
                    if (e[n]) return !1;
                return !0
            }
        },
        8070: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aFixLength = function(e, n = -1, t = !1) {
                const r = Math.ceil(n / 8);
                if (-1 === n || e.length === r) return e;
                if (e.length > r) return e.subarray(0, r);
                const o = new Uint8Array(r);
                return o.set(e, t ? 0 : r - e.length), o
            }
        },
        8071: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aSorted = function(e) {
                return e.sort(r.u8aCmp)
            };
            var r = t(6950)
        },
        8072: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aToBn = function(e, n = a) {
                return (0, r.hexToBn)((0, o.u8aToHex)(e), n)
            };
            var r = t(6001),
                o = t(6146);
            const a = {
                isLe: !0,
                isNegative: !1
            }
        },
        8073: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.u8aToBuffer = function(e) {
                return Buffer.from(e || [])
            }
        },
        8074: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.U8A_WRAP_PREFIX = n.U8A_WRAP_POSTFIX = n.U8A_WRAP_ETHEREUM = void 0, n.u8aIsWrapped = l, n.u8aUnwrapBytes = function(e) {
                const n = (0, a.u8aToU8a)(e);
                return l(n, !1) ? n.subarray(c.length, n.length - u.length) : n
            }, n.u8aWrapBytes = function(e) {
                const n = (0, a.u8aToU8a)(e);
                return l(n, !0) ? n : (0, r.u8aConcat)(c, n, u)
            };
            var r = t(6951),
                o = t(6360),
                a = t(5771);
            const i = (0, a.u8aToU8a)("Ethereum Signed Message:\n");
            n.U8A_WRAP_ETHEREUM = i;
            const c = (0, a.u8aToU8a)("<Bytes>");
            n.U8A_WRAP_PREFIX = c;
            const u = (0, a.u8aToU8a)("</Bytes>");
            n.U8A_WRAP_POSTFIX = u;
            const s = c.length + u.length;

            function l(e, n) {
                return e.length >= s && (0, o.u8aEq)(e.subarray(0, c.length), c) && (0, o.u8aEq)(e.slice(-u.length), u) || n && e.length >= i.length && (0, o.u8aEq)(e.subarray(0, i.length), i)
            }
        },
        8075: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "bnFromHex", {
                enumerable: !0,
                get: function() {
                    return r.hexToBn
                }
            });
            var r = t(6001)
        },
        8076: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.bnMin = function(...e) {
                return (0, r.checkMaxMin)("min", e)
            };
            var r = t(6955)
        },
        8077: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.bnSqrt = function(e) {
                const n = (0, i.bnToBn)(e);
                if ((0, r.assert)(n.gte(a.BN_ZERO), "square root of negative numbers is not supported"), n.lte(a.BN_MAX_INTEGER)) return new o.BN(Math.floor(Math.sqrt(n.toNumber())));
                let t = c.clone();
                for (;;) {
                    const e = n.div(t).iadd(t).ishrn(1);
                    if (t.eq(e) || t.eq(e.sub(a.BN_ONE))) return t;
                    t = e
                }
            };
            var r = t(5685),
                o = t(5826),
                a = t(6954),
                i = t(5904);
            const c = new o.BN(94906265)
        },
        8078: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.bnToHex = function(e, n = c, t) {
                if (!e) return "0x00";
                return (0, a.u8aToHex)((0, i.bnToU8a)(e, (0, o.objectSpread)({
                    isLe: !1,
                    isNegative: !1
                }, (0, r.isNumber)(n) ? {
                    bitLength: n,
                    isLe: t
                } : n)))
            };
            var r = t(6364),
                o = t(5686),
                a = t(5903),
                i = t(6956);
            const c = {
                bitLength: -1,
                isLe: !1,
                isNegative: !1
            }
        },
        8079: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "bufferToU8a", {
                enumerable: !0,
                get: function() {
                    return r.bufferToU8a
                }
            });
            var r = t(8080)
        },
        8080: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.bufferToU8a = function(e) {
                return new Uint8Array(e || [])
            }
        },
        8081: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "compactAddLength", {
                enumerable: !0,
                get: function() {
                    return r.compactAddLength
                }
            }), Object.defineProperty(n, "compactFromU8a", {
                enumerable: !0,
                get: function() {
                    return a.compactFromU8a
                }
            }), Object.defineProperty(n, "compactStripLength", {
                enumerable: !0,
                get: function() {
                    return o.compactStripLength
                }
            }), Object.defineProperty(n, "compactToU8a", {
                enumerable: !0,
                get: function() {
                    return i.compactToU8a
                }
            });
            var r = t(8082),
                o = t(8083),
                a = t(6958),
                i = t(6957)
        },
        8082: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.compactAddLength = function(e) {
                return (0, r.u8aConcat)((0, o.compactToU8a)(e.length), e)
            };
            var r = t(5903),
                o = t(6957)
        },
        8083: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.compactStripLength = function(e) {
                const [n, t] = (0, r.compactFromU8a)(e), o = n + t.toNumber();
                return [o, e.subarray(n, o)]
            };
            var r = t(6958)
        },
        8084: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.extractTime = u;
            var r = t(5686);

            function o(e, n) {
                return {
                    days: e.days + n.days,
                    hours: e.hours + n.hours,
                    milliseconds: e.milliseconds + n.milliseconds,
                    minutes: e.minutes + n.minutes,
                    seconds: e.seconds + n.seconds
                }
            }
            const a = {
                days: 0,
                hours: 0,
                milliseconds: 0,
                minutes: 0,
                seconds: 0
            };

            function i(e, n) {
                const t = n / 60;
                if (t < 24) {
                    const n = Math.floor(t);
                    return o((0, r.objectSpread)({}, a, {
                        hours: n
                    }), u(e - 3600 * n * 1e3))
                }
                return function(e, n) {
                    const t = Math.floor(n / 24);
                    return o((0, r.objectSpread)({}, a, {
                        days: t
                    }), u(e - 86400 * t * 1e3))
                }(e, t)
            }

            function c(e) {
                const n = e / 1e3;
                if (n < 60) {
                    const t = Math.floor(n);
                    return o((0, r.objectSpread)({}, a, {
                        seconds: t
                    }), u(e - 1e3 * t))
                }
                return function(e, n) {
                    const t = n / 60;
                    if (t < 60) {
                        const n = Math.floor(t);
                        return o((0, r.objectSpread)({}, a, {
                            minutes: n
                        }), u(e - 60 * n * 1e3))
                    }
                    return i(e, t)
                }(e, n)
            }

            function u(e) {
                return e ? e < 1e3 ? (0, r.objectSpread)({}, a, {
                    milliseconds: e
                }) : c(e) : a
            }
        },
        8085: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "calcSi", {
                enumerable: !0,
                get: function() {
                    return u.calcSi
                }
            }), Object.defineProperty(n, "findSi", {
                enumerable: !0,
                get: function() {
                    return u.findSi
                }
            }), Object.defineProperty(n, "formatBalance", {
                enumerable: !0,
                get: function() {
                    return r.formatBalance
                }
            }), Object.defineProperty(n, "formatDate", {
                enumerable: !0,
                get: function() {
                    return o.formatDate
                }
            }), Object.defineProperty(n, "formatDecimal", {
                enumerable: !0,
                get: function() {
                    return a.formatDecimal
                }
            }), Object.defineProperty(n, "formatElapsed", {
                enumerable: !0,
                get: function() {
                    return i.formatElapsed
                }
            }), Object.defineProperty(n, "formatNumber", {
                enumerable: !0,
                get: function() {
                    return c.formatNumber
                }
            });
            var r = t(8086),
                o = t(6960),
                a = t(6365),
                i = t(8087),
                c = t(8088),
                u = t(6959)
        },
        8086: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.formatBalance = void 0;
            var r = t(5904),
                o = t(6361),
                a = t(5730),
                i = t(6365),
                c = t(6959);
            const u = c.SI[c.SI_MID].text;
            let s = 0,
                l = u;
            const d = function(e, n = !0, t = s) {
                let a = (0, r.bnToBn)(e).toString();
                if (0 === a.length || "0" === a) return "0";
                const u = a[0].startsWith("-");
                u && (a = a.substr(1));
                const {
                    decimals: l = t,
                    forceUnit: d,
                    withSi: f = !0,
                    withSiFull: p = !1,
                    withUnit: b = !0
                } = (0, o.isBoolean)(n) ? {
                    withSi: n
                } : n, y = (0, c.calcSi)(a, l, d), g = a.length - (l + y.power), m = a.substr(0, g), h = (`${new Array((g<0?0-g:0)+1).join("0")}${a}`.substr(g < 0 ? 0 : g) + "0000").substr(0, 4), v = f || p ? "-" === y.value ? b ? " " + ((0, o.isBoolean)(b) ? y.text : b) : "" : ` ${p?y.text:y.value}${b?`${p?" ":""}${(0,o.isBoolean)(b)?c.SI[c.SI_MID].text:b}`:""}` : "";
                return `${u?"-":""}${(0,i.formatDecimal)(m||"0")}.${h}${v}`
            };
            n.formatBalance = d, d.calcSi = (e, n = s) => (0, c.calcSi)(e, n), d.findSi = c.findSi, d.getDefaults = () => ({
                decimals: s,
                unit: l
            }), d.getOptions = (e = s) => c.SI.filter(({
                power: n
            }) => !(n < 0) || e + n >= 0), d.setDefaults = ({
                decimals: e,
                unit: n
            }) => {
                s = (0, a.isUndefined)(e) ? s : Array.isArray(e) ? e[0] : e, l = (0, a.isUndefined)(n) ? l : Array.isArray(n) ? n[0] : n, c.SI[c.SI_MID].text = l
            }
        },
        8087: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.formatElapsed = function(e, n) {
                const t = e && e.getTime() || 0,
                    o = n instanceof Date ? n.getTime() : (0, r.bnToBn)(n).toNumber();
                return t && o ? function(e) {
                    if (e < 15) return e.toFixed(1) + "s";
                    if (e < 60) return (0 | e) + "s";
                    if (e < 3600) return (e / 60 | 0) + "m";
                    return (e / 3600 | 0) + "h"
                }(Math.max(Math.abs(t - o), 0) / 1e3) : "0.0s"
            };
            var r = t(5904)
        },
        8088: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.formatNumber = function(e) {
                return (0, o.formatDecimal)((0, r.bnToBn)(e).toString())
            };
            var r = t(5904),
                o = t(6365)
        },
        8089: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "hexAddPrefix", {
                enumerable: !0,
                get: function() {
                    return r.hexAddPrefix
                }
            }), Object.defineProperty(n, "hexFixLength", {
                enumerable: !0,
                get: function() {
                    return o.hexFixLength
                }
            }), Object.defineProperty(n, "hexHasPrefix", {
                enumerable: !0,
                get: function() {
                    return a.hexHasPrefix
                }
            }), Object.defineProperty(n, "hexStripPrefix", {
                enumerable: !0,
                get: function() {
                    return i.hexStripPrefix
                }
            }), Object.defineProperty(n, "hexToBigInt", {
                enumerable: !0,
                get: function() {
                    return c.hexToBigInt
                }
            }), Object.defineProperty(n, "hexToBn", {
                enumerable: !0,
                get: function() {
                    return u.hexToBn
                }
            }), Object.defineProperty(n, "hexToNumber", {
                enumerable: !0,
                get: function() {
                    return s.hexToNumber
                }
            }), Object.defineProperty(n, "hexToString", {
                enumerable: !0,
                get: function() {
                    return l.hexToString
                }
            }), Object.defineProperty(n, "hexToU8a", {
                enumerable: !0,
                get: function() {
                    return d.hexToU8a
                }
            });
            var r = t(6961),
                o = t(6963),
                a = t(6962),
                i = t(6145),
                c = t(6946),
                u = t(6001),
                s = t(8090),
                l = t(8091),
                d = t(6e3)
        },
        8090: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hexToNumber = function(e) {
                return e ? (0, r.hexToBn)(e).toNumber() : NaN
            };
            var r = t(6001)
        },
        8091: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hexToString = function(e) {
                return (0, r.u8aToString)((0, o.hexToU8a)(e))
            };
            var r = t(6952),
                o = t(6e3)
        },
        8092: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "isArray", {
                enumerable: !0,
                get: function() {
                    return r.isArray
                }
            }), Object.defineProperty(n, "isAscii", {
                enumerable: !0,
                get: function() {
                    return o.isAscii
                }
            }), Object.defineProperty(n, "isBigInt", {
                enumerable: !0,
                get: function() {
                    return a.isBigInt
                }
            }), Object.defineProperty(n, "isBn", {
                enumerable: !0,
                get: function() {
                    return i.isBn
                }
            }), Object.defineProperty(n, "isBoolean", {
                enumerable: !0,
                get: function() {
                    return u.isBoolean
                }
            }), Object.defineProperty(n, "isBuffer", {
                enumerable: !0,
                get: function() {
                    return c.isBuffer
                }
            }), Object.defineProperty(n, "isChildClass", {
                enumerable: !0,
                get: function() {
                    return s.isChildClass
                }
            }), Object.defineProperty(n, "isCodec", {
                enumerable: !0,
                get: function() {
                    return l.isCodec
                }
            }), Object.defineProperty(n, "isCompact", {
                enumerable: !0,
                get: function() {
                    return d.isCompact
                }
            }), Object.defineProperty(n, "isError", {
                enumerable: !0,
                get: function() {
                    return f.isError
                }
            }), Object.defineProperty(n, "isFunction", {
                enumerable: !0,
                get: function() {
                    return p.isFunction
                }
            }), Object.defineProperty(n, "isHex", {
                enumerable: !0,
                get: function() {
                    return b.isHex
                }
            }), Object.defineProperty(n, "isInstanceOf", {
                enumerable: !0,
                get: function() {
                    return y.isInstanceOf
                }
            }), Object.defineProperty(n, "isIp", {
                enumerable: !0,
                get: function() {
                    return g.isIp
                }
            }), Object.defineProperty(n, "isJsonObject", {
                enumerable: !0,
                get: function() {
                    return m.isJsonObject
                }
            }), Object.defineProperty(n, "isNull", {
                enumerable: !0,
                get: function() {
                    return h.isNull
                }
            }), Object.defineProperty(n, "isNumber", {
                enumerable: !0,
                get: function() {
                    return v.isNumber
                }
            }), Object.defineProperty(n, "isObject", {
                enumerable: !0,
                get: function() {
                    return _.isObject
                }
            }), Object.defineProperty(n, "isObservable", {
                enumerable: !0,
                get: function() {
                    return O.isObservable
                }
            }), Object.defineProperty(n, "isString", {
                enumerable: !0,
                get: function() {
                    return j.isString
                }
            }), Object.defineProperty(n, "isTestChain", {
                enumerable: !0,
                get: function() {
                    return P.isTestChain
                }
            }), Object.defineProperty(n, "isToBigInt", {
                enumerable: !0,
                get: function() {
                    return k.isToBigInt
                }
            }), Object.defineProperty(n, "isToBn", {
                enumerable: !0,
                get: function() {
                    return w.isToBn
                }
            }), Object.defineProperty(n, "isU8a", {
                enumerable: !0,
                get: function() {
                    return M.isU8a
                }
            }), Object.defineProperty(n, "isUndefined", {
                enumerable: !0,
                get: function() {
                    return T.isUndefined
                }
            }), Object.defineProperty(n, "isUtf8", {
                enumerable: !0,
                get: function() {
                    return E.isUtf8
                }
            }), Object.defineProperty(n, "isWasm", {
                enumerable: !0,
                get: function() {
                    return U.isWasm
                }
            });
            var r = t(8093),
                o = t(8094),
                a = t(6363),
                i = t(6353),
                c = t(6356),
                u = t(6361),
                s = t(8095),
                l = t(8096),
                d = t(8097),
                f = t(8098),
                p = t(5729),
                b = t(5825),
                y = t(8099),
                g = t(8100),
                m = t(8101),
                h = t(5999),
                v = t(6364),
                _ = t(6002),
                O = t(8102),
                j = t(5998),
                P = t(8103),
                k = t(6354),
                w = t(6355),
                M = t(6358),
                T = t(5730),
                E = t(8104),
                U = t(8105)
        },
        8093: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isArray = function(e) {
                return Array.isArray(e)
            }
        },
        8094: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isAscii = function(e) {
                const n = (0, a.isString)(e);
                if (e) return n && !(0, o.isHex)(e) ? e.toString().split("").every(u) : (0, r.u8aToU8a)(e).every(c);
                return n
            };
            var r = t(5771),
                o = t(5825),
                a = t(5998);
            const i = [9, 10, 13];

            function c(e) {
                return e < 127 && (e >= 32 || i.includes(e))
            }

            function u(e) {
                return c(e.charCodeAt(0))
            }
        },
        8095: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isChildClass = function(e, n) {
                return !!n && (e === n || e.isPrototypeOf(n))
            }
        },
        8096: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isCodec = function(e) {
                return (0, o.isObject)(e) && (0, r.isFunction)(e.toU8a) && (0, o.isObject)(e.registry) && (0, r.isFunction)(e.registry.get)
            };
            var r = t(5729),
                o = t(6002)
        },
        8097: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isCompact = function(e) {
                return (0, o.isObject)(e) && (0, r.isFunction)(e.toBigInt) && (0, r.isFunction)(e.toBn) && (0, r.isFunction)(e.toNumber) && (0, r.isFunction)(e.unwrap)
            };
            var r = t(5729),
                o = t(6002)
        },
        8098: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isError = function(e) {
                return e instanceof Error
            }
        },
        8099: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isInstanceOf = function(e, n) {
                return e instanceof n
            }
        },
        8100: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isIp = function(e, n) {
                if ("v4" === n) return o.default.v4({
                    exact: !0
                }).test(e);
                if ("v6" === n) return o.default.v6({
                    exact: !0
                }).test(e);
                return (0, o.default)({
                    exact: !0
                }).test(e)
            };
            var o = r(t(5663))
        },
        8101: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isJsonObject = function(e) {
                const n = "string" != typeof e ? (0, r.stringify)(e) : e;
                try {
                    const e = JSON.parse(n);
                    return "object" == typeof e && null !== e
                } catch (e) {
                    return !1
                }
            };
            var r = t(6366)
        },
        8102: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isObservable = function(e) {
                return (0, o.isObject)(e) && (0, r.isFunction)(e.next)
            };
            var r = t(5729),
                o = t(6002)
        },
        8103: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isTestChain = function(e) {
                if (!e) return !1;
                return !!r.test(e.toString())
            };
            const r = /(Development|Local Testnet)$/
        },
        8104: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isUtf8 = function(e) {
                if (!e) return (0, o.isString)(e);
                const n = (0, r.u8aToU8a)(e),
                    t = n.length;
                let a = 0;
                for (; a < t;)
                    if (n[a] <= 127) a += 1;
                    else if (n[a] >= 194 && n[a] <= 223) {
                    if (!(a + 1 < t)) return !1;
                    if (n[a + 1] < 128 || n[a + 1] > 191) return !1;
                    a += 2
                } else if (224 === n[a]) {
                    if (!(a + 2 < t)) return !1;
                    if (n[a + 1] < 160 || n[a + 1] > 191) return !1;
                    if (n[a + 2] < 128 || n[a + 2] > 191) return !1;
                    a += 3
                } else if (n[a] >= 225 && n[a] <= 236) {
                    if (!(a + 2 < t)) return !1;
                    if (n[a + 1] < 128 || n[a + 1] > 191) return !1;
                    if (n[a + 2] < 128 || n[a + 2] > 191) return !1;
                    a += 3
                } else if (237 === n[a]) {
                    if (!(a + 2 < t)) return !1;
                    if (n[a + 1] < 128 || n[a + 1] > 159) return !1;
                    if (n[a + 2] < 128 || n[a + 2] > 191) return !1;
                    a += 3
                } else if (n[a] >= 238 && n[a] <= 239) {
                    if (!(a + 2 < t)) return !1;
                    if (n[a + 1] < 128 || n[a + 1] > 191) return !1;
                    if (n[a + 2] < 128 || n[a + 2] > 191) return !1;
                    a += 3
                } else if (240 === n[a]) {
                    if (!(a + 3 < t)) return !1;
                    if (n[a + 1] < 144 || n[a + 1] > 191) return !1;
                    if (n[a + 2] < 128 || n[a + 2] > 191) return !1;
                    if (n[a + 3] < 128 || n[a + 3] > 191) return !1;
                    a += 4
                } else if (n[a] >= 241 && n[a] <= 243) {
                    if (!(a + 3 < t)) return !1;
                    if (n[a + 1] < 128 || n[a + 1] > 191) return !1;
                    if (n[a + 2] < 128 || n[a + 2] > 191) return !1;
                    if (n[a + 3] < 128 || n[a + 3] > 191) return !1;
                    a += 4
                } else {
                    if (244 !== n[a]) return !1;
                    if (!(a + 3 < t)) return !1;
                    if (n[a + 1] < 128 || n[a + 1] > 143) return !1;
                    if (n[a + 2] < 128 || n[a + 2] > 191) return !1;
                    if (n[a + 3] < 128 || n[a + 3] > 191) return !1;
                    a += 4
                }
                return !0
            };
            var r = t(5771),
                o = t(5998)
        },
        8105: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isWasm = function(e) {
                return !!e && (0, r.u8aEq)(e.subarray(0, 4), o)
            };
            var r = t(6360);
            const o = new Uint8Array([0, 97, 115, 109])
        },
        8106: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.lazyMethod = o, n.lazyMethods = function(e, n, t, r) {
                for (let a = 0; a < n.length; a++) o(e, n[a], t, r);
                return e
            };
            var r = t(5730);

            function o(e, n, t, o) {
                const a = o ? o(n) : n.toString();
                let i;
                Object.defineProperty(e, a, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        if ((0, r.isUndefined)(i)) {
                            i = t(n);
                            try {
                                Object.defineProperty(this, a, {
                                    value: i
                                })
                            } catch {}
                        }
                        return i
                    }
                })
            }
        },
        8107: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.logger = function(e) {
                const n = (e.toUpperCase() + ":").padStart(16),
                    [t, r] = function(e) {
                        const n = (d.hasProcess ? process : {}).env || {},
                            t = parseInt(n.DEBUG_MAX || "-1", 10);
                        return [h((n.DEBUG || "").toLowerCase().split(","), e), isNaN(t) ? -1 : t]
                    }(e.toLowerCase());
                return {
                    debug: t ? (...e) => b("debug", n, e, r) : y,
                    error: (...e) => b("error", n, e),
                    log: (...e) => b("log", n, e),
                    noop: y,
                    warn: (...e) => b("warn", n, e)
                }
            }, n.loggerFormat = p;
            var r = t(6960),
                o = t(6353),
                a = t(6356),
                i = t(5729),
                c = t(6002),
                u = t(6358),
                s = t(6146),
                l = t(5771),
                d = t(6357);
            const f = {
                debug: "log",
                error: "error",
                log: "log",
                warn: "warn"
            };

            function p(e) {
                return Array.isArray(e) ? e.map(p) : (0, o.isBn)(e) ? e.toString() : (0, u.isU8a)(e) || (0, a.isBuffer)(e) ? (0, s.u8aToHex)((0, l.u8aToU8a)(e)) : function(e) {
                    if (e && (0, c.isObject)(e) && e.constructor === Object) {
                        const n = {};
                        for (const t of Object.keys(e)) n[t] = p(e[t]);
                        return n
                    }
                    return e
                }(e)
            }

            function b(e, n, t, o = -1) {
                if (1 === t.length && (0, i.isFunction)(t[0])) {
                    const r = t[0]();
                    return b(e, n, Array.isArray(r) ? r : [r], o)
                }
                var a;
                console[f[e]]((0, r.formatDate)(new Date), n, ...t.map(p).map((a = o, e => {
                    if (a <= 0) return e;
                    const n = "" + e;
                    return n.length < a ? e : n.substr(0, a) + " ..."
                })))
            }

            function y() {}

            function g(e, n) {
                return !!e && ("*" === e || n === e || e.endsWith("*") && n.startsWith(e.slice(0, -1)))
            }

            function m(e, n) {
                return !!e && e.startsWith("-") && (n === e.slice(1) || e.endsWith("*") && n.startsWith(e.slice(1, -1)))
            }

            function h(e, n) {
                let t = !1;
                for (const r of e) g(r, n) ? t = !0 : m(r, n) && (t = !1);
                return t
            }
        },
        8108: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.memoize = function(e, {
                getInstanceId: n = a
            } = {}) {
                const t = {},
                    i = (...a) => {
                        const i = (0, o.stringify)(a),
                            c = n();
                        return t[c] || (t[c] = {}), (0, r.isUndefined)(t[c][i]) && (t[c][i] = e(...a)), t[c][i]
                    };
                return i.unmemoize = (...e) => {
                    const a = (0, o.stringify)(e),
                        i = n();
                    t[i] && !(0, r.isUndefined)(t[i][a]) && delete t[i][a]
                }, i
            };
            var r = t(5730),
                o = t(6366);

            function a() {
                return "none"
            }
        },
        8109: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "numberToHex", {
                enumerable: !0,
                get: function() {
                    return r.numberToHex
                }
            }), Object.defineProperty(n, "numberToU8a", {
                enumerable: !0,
                get: function() {
                    return o.numberToU8a
                }
            });
            var r = t(6964),
                o = t(8110)
        },
        8110: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.numberToU8a = function(e, n = -1) {
                if ((0, a.isUndefined)(e) || (0, o.isNull)(e) || isNaN(e)) return new Uint8Array;
                return (0, r.hexToU8a)((0, i.numberToHex)(e, n))
            };
            var r = t(6e3),
                o = t(5999),
                a = t(5730),
                i = t(6964)
        },
        8111: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "objectClear", {
                enumerable: !0,
                get: function() {
                    return r.objectClear
                }
            }), Object.defineProperty(n, "objectCopy", {
                enumerable: !0,
                get: function() {
                    return o.objectCopy
                }
            }), Object.defineProperty(n, "objectEntries", {
                enumerable: !0,
                get: function() {
                    return a.objectEntries
                }
            }), Object.defineProperty(n, "objectKeys", {
                enumerable: !0,
                get: function() {
                    return i.objectKeys
                }
            }), Object.defineProperty(n, "objectProperties", {
                enumerable: !0,
                get: function() {
                    return c.objectProperties
                }
            }), Object.defineProperty(n, "objectProperty", {
                enumerable: !0,
                get: function() {
                    return c.objectProperty
                }
            }), Object.defineProperty(n, "objectSpread", {
                enumerable: !0,
                get: function() {
                    return u.objectSpread
                }
            }), Object.defineProperty(n, "objectValues", {
                enumerable: !0,
                get: function() {
                    return s.objectValues
                }
            });
            var r = t(8112),
                o = t(8113),
                a = t(8114),
                i = t(6947),
                c = t(8115),
                u = t(5686),
                s = t(8116)
        },
        8112: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.objectClear = function(e) {
                const n = Object.keys(e);
                for (let t = 0; t < n.length; t++) delete e[n[t]];
                return e
            }
        },
        8113: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.objectCopy = function(e) {
                return (0, r.objectSpread)({}, e)
            };
            var r = t(5686)
        },
        8114: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.objectEntries = function(e) {
                return Object.entries(e)
            }
        },
        8115: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.objectProperties = function(e, n, t) {
                for (let r = 0; r < n.length; r++) o(e, n[r], e => t(e, r))
            }, n.objectProperty = o;
            var r = t(5730);

            function o(e, n, t) {
                !Object.prototype.hasOwnProperty.call(e, n) && (0, r.isUndefined)(e[n]) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: () => t(n)
                })
            }
        },
        8116: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.objectValues = function(e) {
                return Object.values(e)
            }
        },
        8117: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.promisify = function(e, n, ...t) {
                return new Promise((r, o) => {
                    n.apply(e, t.concat((e, n) => {
                        e ? o(e) : r(n)
                    }))
                })
            }
        },
        8118: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "stringCamelCase", {
                enumerable: !0,
                get: function() {
                    return r.stringCamelCase
                }
            }), Object.defineProperty(n, "stringLowerFirst", {
                enumerable: !0,
                get: function() {
                    return o.stringLowerFirst
                }
            }), Object.defineProperty(n, "stringPascalCase", {
                enumerable: !0,
                get: function() {
                    return a.stringPascalCase
                }
            }), Object.defineProperty(n, "stringShorten", {
                enumerable: !0,
                get: function() {
                    return i.stringShorten
                }
            }), Object.defineProperty(n, "stringToHex", {
                enumerable: !0,
                get: function() {
                    return c.stringToHex
                }
            }), Object.defineProperty(n, "stringToU8a", {
                enumerable: !0,
                get: function() {
                    return u.stringToU8a
                }
            }), Object.defineProperty(n, "stringUpperFirst", {
                enumerable: !0,
                get: function() {
                    return s.stringUpperFirst
                }
            });
            var r = t(8119),
                o = t(8120),
                a = t(8121),
                i = t(8122),
                c = t(8123),
                u = t(6359),
                s = t(8124)
        },
        8119: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.stringCamelCase = function(e) {
                return (0, o.default)(e.toString())
            };
            var o = r(t(6965))
        },
        8120: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.stringLowerFirst = function(e) {
                return e ? e.charAt(0).toLowerCase() + e.slice(1) : ""
            }
        },
        8121: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.stringPascalCase = function(e) {
                return (0, o.default)(e.toString(), a)
            };
            var o = r(t(6965));
            const a = {
                pascalCase: !0
            }
        },
        8122: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.stringShorten = function(e, n = 6) {
                if (e.length <= 2 + 2 * n) return e.toString();
                return `${e.substr(0,n)}…${e.slice(-n)}`
            }
        },
        8123: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.stringToHex = function(e) {
                return (0, r.u8aToHex)((0, o.stringToU8a)(e))
            };
            var r = t(6146),
                o = t(6359)
        },
        8124: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.stringUpperFirst = function(e) {
                return e ? e.charAt(0).toUpperCase() + e.slice(1) : ""
            }
        },
        8125: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.packageInfo = void 0;
            n.packageInfo = {
                name: "@polkadot/x-randomvalues",
                version: "7.9.2"
            }
        },
        8126: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = {
                packageInfo: !0
            };
            Object.defineProperty(n, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return o.packageInfo
                }
            }), t(8127);
            var o = t(6350),
                a = t(8196);
            Object.keys(a).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === a[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                }))
            }));
            var i = t(8223);
            Object.keys(i).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === i[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                }))
            }));
            var c = t(6152);
            Object.keys(c).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === c[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return c[e]
                    }
                }))
            }));
            var u = t(6391);
            Object.keys(u).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === u[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return u[e]
                    }
                }))
            }));
            var s = t(7009);
            Object.keys(s).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === s[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return s[e]
                    }
                }))
            }));
            var l = t(6967);
            Object.keys(l).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === l[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return l[e]
                    }
                }))
            }));
            var d = t(8228);
            Object.keys(d).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === d[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return d[e]
                    }
                }))
            }));
            var f = t(8235);
            Object.keys(f).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === f[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return f[e]
                    }
                }))
            }));
            var p = t(6007);
            Object.keys(p).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === p[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return p[e]
                    }
                }))
            }));
            var b = t(8259);
            Object.keys(b).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === b[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return b[e]
                    }
                }))
            }));
            var y = t(6154);
            Object.keys(y).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === y[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return y[e]
                    }
                }))
            }));
            var g = t(6996);
            Object.keys(g).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === g[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return g[e]
                    }
                }))
            }));
            var m = t(7014);
            Object.keys(m).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === m[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return m[e]
                    }
                }))
            }));
            var h = t(6991);
            Object.keys(h).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === h[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return h[e]
                    }
                }))
            }));
            var v = t(6155);
            Object.keys(v).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === v[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return v[e]
                    }
                }))
            }));
            var _ = t(6394);
            Object.keys(_).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === _[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return _[e]
                    }
                }))
            }));
            var O = t(7015);
            Object.keys(O).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === O[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return O[e]
                    }
                }))
            }));
            var j = t(7007);
            Object.keys(j).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === j[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return j[e]
                    }
                }))
            }));
            var P = t(6396);
            Object.keys(P).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === P[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return P[e]
                    }
                }))
            }));
            var k = t(6392);
            Object.keys(k).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === k[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return k[e]
                    }
                }))
            }));
            var w = t(7016);
            Object.keys(w).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === w[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return w[e]
                    }
                }))
            }));
            var M = t(8265);
            Object.keys(M).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === M[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return M[e]
                    }
                }))
            }));
            var T = t(8267);
            Object.keys(T).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === T[e] || Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return T[e]
                    }
                }))
            }))
        },
        8127: function(e, n, t) {
            "use strict";
            (0, t(6967).cryptoWaitReady)().catch(() => {})
        },
        8196: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "addressEq", {
                enumerable: !0,
                get: function() {
                    return b.addressEq
                }
            }), Object.defineProperty(n, "addressToEvm", {
                enumerable: !0,
                get: function() {
                    return r.addressToEvm
                }
            }), Object.defineProperty(n, "checkAddress", {
                enumerable: !0,
                get: function() {
                    return o.checkAddress
                }
            }), Object.defineProperty(n, "checkAddressChecksum", {
                enumerable: !0,
                get: function() {
                    return a.checkAddressChecksum
                }
            }), Object.defineProperty(n, "createKeyDerived", {
                enumerable: !0,
                get: function() {
                    return c.createKeyDerived
                }
            }), Object.defineProperty(n, "createKeyMulti", {
                enumerable: !0,
                get: function() {
                    return i.createKeyMulti
                }
            }), Object.defineProperty(n, "decodeAddress", {
                enumerable: !0,
                get: function() {
                    return u.decodeAddress
                }
            }), Object.defineProperty(n, "deriveAddress", {
                enumerable: !0,
                get: function() {
                    return s.deriveAddress
                }
            }), Object.defineProperty(n, "encodeAddress", {
                enumerable: !0,
                get: function() {
                    return l.encodeAddress
                }
            }), Object.defineProperty(n, "encodeDerivedAddress", {
                enumerable: !0,
                get: function() {
                    return d.encodeDerivedAddress
                }
            }), Object.defineProperty(n, "encodeMultiAddress", {
                enumerable: !0,
                get: function() {
                    return f.encodeMultiAddress
                }
            }), Object.defineProperty(n, "evmToAddress", {
                enumerable: !0,
                get: function() {
                    return p.evmToAddress
                }
            }), Object.defineProperty(n, "isAddress", {
                enumerable: !0,
                get: function() {
                    return y.isAddress
                }
            }), Object.defineProperty(n, "setSS58Format", {
                enumerable: !0,
                get: function() {
                    return g.setSS58Format
                }
            }), Object.defineProperty(n, "sortAddresses", {
                enumerable: !0,
                get: function() {
                    return m.sortAddresses
                }
            }), Object.defineProperty(n, "validateAddress", {
                enumerable: !0,
                get: function() {
                    return h.validateAddress
                }
            });
            var r = t(8197),
                o = t(8201),
                a = t(6388),
                i = t(6993),
                c = t(6995),
                u = t(5687),
                s = t(8202),
                l = t(5907),
                d = t(8215),
                f = t(8216),
                p = t(8217),
                b = t(8219),
                y = t(8220),
                g = t(8221),
                m = t(8222),
                h = t(7010)
        },
        8197: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.addressToEvm = function(e, n) {
                return (0, r.decodeAddress)(e, n).subarray(0, 20)
            };
            var r = t(5687)
        },
        8198: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isBase58 = n.base58Validate = n.base58Encode = n.base58Decode = void 0;
            var r = t(6386),
                o = t(6387);
            const a = {
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
                    coder: r.base58,
                    ipfsChar: "z",
                    type: "base58"
                },
                i = (0, o.createValidate)(a);
            n.base58Validate = i;
            const c = (0, o.createDecode)(a, i);
            n.base58Decode = c;
            const u = (0, o.createEncode)(a);
            n.base58Encode = u;
            const s = (0, o.createIs)(i);
            n.isBase58 = s
        },
        8201: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.checkAddress = function(e, n) {
                let t;
                try {
                    t = (0, r.base58Decode)(e)
                } catch (e) {
                    return [!1, e.message]
                }
                const [i, , , c] = (0, o.checkAddressChecksum)(t);
                if (c !== n) return [!1, `Prefix mismatch, expected ${n}, found ${c}`];
                if (!a.defaults.allowedEncodedLengths.includes(t.length)) return [!1, "Invalid decoded address length"];
                return [i, i ? null : "Invalid decoded address checksum"]
            };
            var r = t(6152),
                o = t(6388),
                a = t(6153)
        },
        8202: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.deriveAddress = function(e, n, t) {
                const {
                    path: s
                } = (0, o.keyExtractPath)(n);
                (0, r.assert)(s.length && !s.every(u), "Expected suri to contain a combination of non-hard paths");
                let l = (0, i.decodeAddress)(e);
                for (const {
                        chainCode: e
                    }
                    of s) l = (0, a.schnorrkelDerivePublic)(l, e);
                return (0, c.encodeAddress)(l, t)
            };
            var r = t(5470),
                o = t(6996),
                a = t(7007),
                i = t(5687),
                c = t(5907);

            function u({
                isHard: e
            }) {
                return e
            }
        },
        8203: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.DeriveJunction = void 0;
            var o = r(t(5471)),
                a = r(t(5472)),
                i = t(5470),
                c = t(5774),
                u = t(5643);
            const s = /^\d+$/;
            var l = (0, a.default)("chainCode"),
                d = (0, a.default)("isHard");
            class DeriveJunction {
                constructor() {
                    Object.defineProperty(this, l, {
                        writable: !0,
                        value: new Uint8Array(32)
                    }), Object.defineProperty(this, d, {
                        writable: !0,
                        value: !1
                    })
                }
                static from(e) {
                    const n = new DeriveJunction,
                        [t, r] = e.startsWith("/") ? [e.substr(1), !0] : [e, !1];
                    return n.soft(s.test(t) ? new i.BN(t, 10) : t), r ? n.harden() : n
                }
                get chainCode() {
                    return (0, o.default)(this, l)[l]
                }
                get isHard() {
                    return (0, o.default)(this, d)[d]
                }
                get isSoft() {
                    return !(0, o.default)(this, d)[d]
                }
                hard(e) {
                    return this.soft(e).harden()
                }
                harden() {
                    return (0, o.default)(this, d)[d] = !0, this
                }
                soft(e) {
                    return (0, i.isNumber)(e) || (0, i.isBn)(e) || (0, i.isBigInt)(e) ? this.soft((0, i.bnToU8a)(e, u.BN_LE_256_OPTS)) : (0, i.isHex)(e) ? this.soft((0, i.hexToU8a)(e)) : (0, i.isString)(e) ? this.soft((0, i.compactAddLength)((0, i.stringToU8a)(e))) : e.length > 32 ? this.soft((0, c.blake2AsU8a)(e)) : ((0, o.default)(this, l)[l].fill(0), (0, o.default)(this, l)[l].set(e, 0), this)
                }
                soften() {
                    return (0, o.default)(this, d)[d] = !1, this
                }
            }
            n.DeriveJunction = DeriveJunction
        },
        8204: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.keyExtractSuri = function(e) {
                const n = e.match(a);
                (0, r.assert)(!(0, r.isNull)(n), "Unable to match provided value to a secret URI");
                const [, t, , i, , , c] = n, {
                    path: u
                } = (0, o.keyExtractPath)(i);
                return {
                    derivePath: i,
                    password: c,
                    path: u,
                    phrase: t
                }
            };
            var r = t(5470),
                o = t(6997);
            const a = /^(\w+( \w+)*)((\/\/?[^/]+)*)(\/\/\/(.*))?$/
        },
        8205: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.keyFromPath = function(e, n, t) {
                const r = i[t];
                let o = e;
                for (const e of n) o = r(o, e);
                return o
            };
            var r = t(6998),
                o = t(7001),
                a = t(7002);
            const i = {
                ecdsa: r.keyHdkdEcdsa,
                ed25519: o.keyHdkdEd25519,
                ethereum: r.keyHdkdEcdsa,
                sr25519: a.keyHdkdSr25519
            }
        },
        8206: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.secp256k1DeriveHard = function(e, n) {
                return (0, r.assert)((0, r.isU8a)(n) && 32 === n.length, "Invalid chainCode passed to derive"), (0, o.blake2AsU8a)((0, r.u8aConcat)(a, e, n), 256)
            };
            var r = t(5470),
                o = t(5774);
            const a = (0, r.compactAddLength)((0, r.stringToU8a)("Secp256k1HDKD"))
        },
        8207: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclDeriveHard = function(e, n) {
                return (0, r.assert)((0, r.isU8a)(n) && 32 === n.length, "Invalid chainCode passed to derive"), (0, o.blake2AsU8a)((0, r.u8aConcat)(a, e, n))
            };
            var r = t(5470),
                o = t(5774);
            const a = (0, r.compactAddLength)((0, r.stringToU8a)("Ed25519HDKD"))
        },
        8208: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.schnorrkelKeypairToU8a = function({
                publicKey: e,
                secretKey: n
            }) {
                return (0, r.u8aConcat)(n, e).slice()
            };
            var r = t(5470)
        },
        8209: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.schnorrkelAgreement = function(e, n) {
                const t = (0, r.u8aToU8a)(e),
                    a = (0, r.u8aToU8a)(n);
                return (0, r.assert)(32 === a.length, () => `Invalid publicKey, received ${a.length} bytes, expected 32`), (0, r.assert)(64 === t.length, () => `Invalid secretKey, received ${t.length} bytes, expected 64`), (0, o.sr25519Agree)(a, t)
            };
            var r = t(5470),
                o = t(5509)
        },
        8210: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.schnorrkelDerivePublic = function(e, n) {
                const t = (0, r.u8aToU8a)(e);
                return (0, r.assert)((0, r.isU8a)(n) && 32 === n.length, "Invalid chainCode passed to derive"), (0, r.assert)(32 === t.length, () => `Invalid publicKey, received ${t.length} bytes, expected 32`), (0, o.sr25519DerivePublicSoft)(t, n)
            };
            var r = t(5470),
                o = t(5509)
        },
        8211: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.schnorrkelKeypairFromSeed = function(e) {
                const n = (0, r.u8aToU8a)(e);
                return (0, r.assert)(32 === n.length, () => "Expected a seed matching 32 bytes, found " + n.length), (0, a.schnorrkelKeypairFromU8a)((0, o.sr25519KeypairFromSeed)(n))
            };
            var r = t(5470),
                o = t(5509),
                a = t(7005)
        },
        8212: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.schnorrkelSign = function(e, {
                publicKey: n,
                secretKey: t
            }) {
                return (0, r.assert)(32 === (null == n ? void 0 : n.length), "Expected a valid publicKey, 32-bytes"), (0, r.assert)(64 === (null == t ? void 0 : t.length), "Expected a valid secretKey, 64-bytes"), (0, o.sr25519Sign)(n, t, (0, r.u8aToU8a)(e))
            };
            var r = t(5470),
                o = t(5509)
        },
        8213: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.schnorrkelVrfSign = function(e, {
                secretKey: n
            }, t = a, i = a) {
                return (0, r.assert)(64 === (null == n ? void 0 : n.length), "Invalid secretKey, expected 64-bytes"), (0, o.vrfSign)(n, (0, r.u8aToU8a)(t), (0, r.u8aToU8a)(e), (0, r.u8aToU8a)(i))
            };
            var r = t(5470),
                o = t(5509);
            const a = new Uint8Array
        },
        8214: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.schnorrkelVrfVerify = function(e, n, t, i = a, c = a) {
                const u = (0, r.u8aToU8a)(t),
                    s = (0, r.u8aToU8a)(n);
                return (0, r.assert)(32 === u.length, "Invalid publicKey, expected 32-bytes"), (0, r.assert)(96 === s.length, "Invalid vrfSign output, expected 96 bytes"), (0, o.vrfVerify)(u, (0, r.u8aToU8a)(i), (0, r.u8aToU8a)(e), (0, r.u8aToU8a)(c), s)
            };
            var r = t(5470),
                o = t(5509);
            const a = new Uint8Array
        },
        8215: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.encodeDerivedAddress = function(e, n, t) {
                return (0, o.encodeAddress)((0, a.createKeyDerived)((0, r.decodeAddress)(e), n), t)
            };
            var r = t(5687),
                o = t(5907),
                a = t(6995)
        },
        8216: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.encodeMultiAddress = function(e, n, t) {
                return (0, r.encodeAddress)((0, o.createKeyMulti)(e, n), t)
            };
            var r = t(5907),
                o = t(6993)
        },
        8217: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.evmToAddress = function(e, n, t = "blake2") {
                const i = (0, r.u8aConcat)("evm:", e);
                if (24 !== i.length) throw new Error((n => `Converting ${e}: ${n}`)("Invalid evm address length"));
                const c = (0, o.secp256k1Hasher)(t, i);
                return (0, a.encodeAddress)(c, n)
            };
            var r = t(5470),
                o = t(6390),
                a = t(5907)
        },
        8218: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.keccakAsHex = n.keccak512AsU8a = n.keccak256AsU8a = void 0, n.keccakAsU8a = u;
            var o = r(t(465)),
                a = t(5470),
                i = t(5509),
                c = t(5604);

            function u(e, n = 256, t) {
                const r = 256 === n,
                    u = (0, a.u8aToU8a)(e);
                return (0, c.isWasmOnly)(t) ? r ? (0, i.keccak256)(u) : (0, i.keccak512)(u) : new Uint8Array(r ? o.default.keccak256.update(u).arrayBuffer() : o.default.keccak512.update(u).arrayBuffer())
            }
            const s = (0, c.createBitHasher)(256, u);
            n.keccak256AsU8a = s;
            const l = (0, c.createBitHasher)(512, u);
            n.keccak512AsU8a = l;
            const d = (0, c.createAsHex)(u);
            n.keccakAsHex = d
        },
        8219: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.addressEq = function(e, n) {
                return (0, r.u8aEq)((0, o.decodeAddress)(e), (0, o.decodeAddress)(n))
            };
            var r = t(5470),
                o = t(5687)
        },
        8220: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isAddress = function(e, n, t) {
                try {
                    return (0, r.validateAddress)(e, n, t)
                } catch (e) {
                    return !1
                }
            };
            var r = t(7010)
        },
        8221: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.setSS58Format = function(e) {
                a.warn("Global setting of the ss58Format is deprecated and not recommended. Set format on the keyring (if used) or as pat of the address encode function"), o.defaults.prefix = e
            };
            var r = t(5470),
                o = t(6153);
            const a = (0, r.logger)("setSS58Format")
        },
        8222: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.sortAddresses = function(e, n) {
                return (0, r.u8aSorted)(e.map(a.addressToU8a)).map(e => (0, o.encodeAddress)(e, n))
            };
            var r = t(5470),
                o = t(5907),
                a = t(6994)
        },
        8223: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "base32Decode", {
                enumerable: !0,
                get: function() {
                    return r.base32Decode
                }
            }), Object.defineProperty(n, "base32Encode", {
                enumerable: !0,
                get: function() {
                    return r.base32Encode
                }
            }), Object.defineProperty(n, "base32Validate", {
                enumerable: !0,
                get: function() {
                    return r.base32Validate
                }
            }), Object.defineProperty(n, "isBase32", {
                enumerable: !0,
                get: function() {
                    return r.isBase32
                }
            });
            var r = t(8224)
        },
        8224: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isBase32 = n.base32Validate = n.base32Encode = n.base32Decode = void 0;
            var r = t(6386),
                o = t(6387);
            const a = {
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    coder: r.utils.chain(r.utils.radix2(5), r.utils.alphabet("abcdefghijklmnopqrstuvwxyz234567"), {
                        decode: e => e.split(""),
                        encode: e => e.join("")
                    }),
                    ipfsChar: "b",
                    type: "base32"
                },
                i = (0, o.createValidate)(a);
            n.base32Validate = i;
            const c = (0, o.createIs)(i);
            n.isBase32 = c;
            const u = (0, o.createDecode)(a, i);
            n.base32Decode = u;
            const s = (0, o.createEncode)(a);
            n.base32Encode = s
        },
        8225: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isBase64 = n.base64Validate = n.base64Encode = n.base64Decode = void 0;
            var r = t(6386),
                o = t(6387);
            const a = {
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    coder: r.base64,
                    regex: /^(?:[A-Za-z0-9+/]{2}[A-Za-z0-9+/]{2})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,
                    type: "base64"
                },
                i = (0, o.createValidate)(a);
            n.base64Validate = i;
            const c = (0, o.createIs)(i);
            n.isBase64 = c;
            const u = (0, o.createDecode)(a, i);
            n.base64Decode = u;
            const s = (0, o.createEncode)(a);
            n.base64Encode = s
        },
        8226: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.base64Pad = function(e) {
                return e.padEnd(e.length + e.length % 4, "=")
            }
        },
        8227: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.base64Trim = function(e) {
                for (; e.length && "=" === e[e.length - 1];) e = e.slice(0, -1);
                return e
            }
        },
        8228: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "ethereumEncode", {
                enumerable: !0,
                get: function() {
                    return r.ethereumEncode
                }
            }), Object.defineProperty(n, "isEthereumAddress", {
                enumerable: !0,
                get: function() {
                    return o.isEthereumAddress
                }
            }), Object.defineProperty(n, "isEthereumChecksum", {
                enumerable: !0,
                get: function() {
                    return a.isEthereumChecksum
                }
            });
            var r = t(8229),
                o = t(8234),
                a = t(7013)
        },
        8229: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ethereumEncode = function(e) {
                if (!e) return "0x";
                const n = (0, r.u8aToU8a)(e);
                (0, r.assert)([20, 32, 33, 65].includes(n.length), "Invalid address or publicKey passed");
                const t = (0, r.u8aToHex)(function(e) {
                        [33, 65].includes(e.length) && (e = (0, o.keccakAsU8a)((0, a.secp256k1Expand)(e)));
                        return e.slice(-20)
                    }(n), -1, !1),
                    i = (0, r.u8aToHex)((0, o.keccakAsU8a)(t), -1, !1);
                let c = "";
                for (let e = 0; e < 40; e++) c = `${c}${parseInt(i[e],16)>7?t[e].toUpperCase():t[e]}`;
                return "0x" + c
            };
            var r = t(5470),
                o = t(6154),
                a = t(6392)
        },
        8230: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.secp256k1Compress = function(e) {
                return (0, r.assert)([33, 65].includes(e.length), "Invalid publicKey provided"), new Uint8Array(o.secp256k1.keyFromPublic(e).getPublic().encodeCompressed())
            };
            var r = t(5470),
                o = t(5906)
        },
        8231: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.secp256k1Recover = function(e, n, t) {
                return new Uint8Array(r.secp256k1.recoverPubKey(e, {
                    r: n.slice(0, 32),
                    s: n.slice(32, 64)
                }, t).encode(null, !0))
            };
            var r = t(5906)
        },
        8232: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.secp256k1Sign = function(e, {
                secretKey: n
            }, t = "blake2") {
                (0, r.assert)(32 === (null == n ? void 0 : n.length), "Expected valid secp256k1 secretKey, 32-bytes");
                const c = i.secp256k1.keyFromPrivate(n).sign((0, a.secp256k1Hasher)(t, e));
                return (0, r.u8aConcat)((0, r.bnToU8a)(c.r, o.BN_BE_256_OPTS), (0, r.bnToU8a)(c.s, o.BN_BE_256_OPTS), new Uint8Array([c.recoveryParam || 0]))
            };
            var r = t(5470),
                o = t(5643),
                a = t(6390),
                i = t(5906)
        },
        8233: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.secp256k1PrivateKeyTweakAdd = function(e, n) {
                (0, r.assert)((0, r.isU8a)(e) && 32 === e.length, "Expected seckey to be an Uint8Array with length 32"), (0, r.assert)((0, r.isU8a)(n) && 32 === n.length, "Expected tweak to be an Uint8Array with length 32");
                const t = new r.BN(n);
                (0, r.assert)(t.cmp(a) < 0, "Tweak parameter is out of range"), t.iadd(new r.BN(e)), t.cmp(a) >= 0 && t.isub(a);
                return (0, r.assert)(!t.isZero(), "Invalid resulting private key"), (0, r.bnToU8a)(t, o.BN_BE_256_OPTS)
            };
            var r = t(5470),
                o = t(5643);
            const a = new r.BN("ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141".replace(/ /g, ""), "hex")
        },
        8234: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isEthereumAddress = function(e) {
                if (!e || 42 !== e.length || !(0, r.isHex)(e)) return !1;
                if (/^(0x)?[0-9a-f]{40}$/.test(e) || /^(0x)?[0-9A-F]{40}$/.test(e)) return !0;
                return (0, o.isEthereumChecksum)(e)
            };
            var r = t(5470),
                o = t(7013)
        },
        8235: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "hdEthereum", {
                enumerable: !0,
                get: function() {
                    return r.hdEthereum
                }
            }), Object.defineProperty(n, "hdLedger", {
                enumerable: !0,
                get: function() {
                    return o.hdLedger
                }
            }), Object.defineProperty(n, "hdValidatePath", {
                enumerable: !0,
                get: function() {
                    return a.hdValidatePath
                }
            });
            var r = t(8236),
                o = t(8238),
                a = t(6393)
        },
        8236: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hdEthereum = function(e, n = "") {
                const t = (0, a.hmacShaAsU8a)(u, e, 512);
                let o = s(t.slice(0, 32), t.slice(32));
                if (!n || "m" === n || "M" === n || "m'" === n || "M'" === n) return o;
                (0, r.assert)((0, c.hdValidatePath)(n), "Invalid derivation path");
                const i = n.split("/").slice(1);
                for (const e of i) o = l(o, parseInt(e, 10) + (e.length > 1 && e.endsWith("'") ? c.HARDENED : 0));
                return o
            };
            var r = t(5470),
                o = t(5643),
                a = t(6007),
                i = t(6392),
                c = t(6393);
            const u = (0, r.stringToU8a)("Bitcoin seed");

            function s(e, n) {
                return {
                    chainCode: n,
                    publicKey: (0, i.secp256k1KeypairFromSeed)(e).publicKey,
                    secretKey: e
                }
            }

            function l(e, n) {
                const t = (0, r.bnToU8a)(n, o.BN_BE_32_OPTS),
                    u = n >= c.HARDENED ? (0, r.u8aConcat)(new Uint8Array(1), e.secretKey, t) : (0, r.u8aConcat)(e.publicKey, t);
                try {
                    const n = (0, a.hmacShaAsU8a)(e.chainCode, u, 512);
                    return s((0, i.secp256k1PrivateKeyTweakAdd)(e.secretKey, n.slice(0, 32)), n.slice(32))
                } catch (t) {
                    return l(e, n + 1)
                }
            }
        },
        8237: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hmacSha512AsU8a = n.hmacSha256AsU8a = void 0, n.hmacShaAsU8a = s;
            var o = r(t(141)),
                a = t(5470),
                i = t(5509),
                c = t(5604);

            function u(e = 256) {
                return (n, t, r) => s(n, t, e, r)
            }

            function s(e, n, t = 256, r) {
                const u = 256 === t,
                    s = (0, a.u8aToU8a)(e);
                return (0, c.isWasmOnly)(r) ? u ? (0, i.hmacSha256)(s, n) : (0, i.hmacSha512)(s, n) : new Uint8Array(u ? o.default.hmac(o.default.sha256, s).update(n).digest() : o.default.hmac(o.default.sha512, s).update(n).digest())
            }
            const l = u(256);
            n.hmacSha256AsU8a = l;
            const d = u(512);
            n.hmacSha512AsU8a = d
        },
        8238: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.hdLedger = function(e, n) {
                const t = e.split(" ").map(e => e.trim()).filter(e => e);
                (0, r.assert)([12, 24, 25].includes(t.length), "Expected a mnemonic with 24 words (or 25 including a password)");
                const [s, l] = 25 === t.length ? [t.slice(0, 24).join(" "), t[24]] : [t.join(" "), ""];
                (0, r.assert)((0, o.mnemonicValidate)(s), "Invalid mnemonic passed to ledger derivation"), (0, r.assert)((0, i.hdValidatePath)(n), "Invalid derivation path");
                const d = n.split("/").slice(1);
                let f = (0, u.ledgerMaster)(s, l);
                for (const e of d) {
                    const n = parseInt(e.replace(/'$/, ""), 10);
                    f = (0, c.ledgerDerivePrivate)(f, n < i.HARDENED ? n + i.HARDENED : n)
                }
                return (0, a.naclKeypairFromSeed)(f.slice(0, 32))
            };
            var r = t(5470),
                o = t(7014),
                a = t(6155),
                i = t(6393),
                c = t(8257),
                u = t(8258)
        },
        8239: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.mnemonicGenerate = function(e = 12, n) {
                return (0, o.isWasmOnly)(n) ? (0, r.bip39Generate)(e) : (0, a.generateMnemonic)(i[e])
            };
            var r = t(5509),
                o = t(5604),
                a = t(6008);
            const i = {
                12: 128,
                15: 160,
                18: 192,
                21: 224,
                24: 256
            }
        },
        8240: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.pbkdf2Encode = function(e, n = (0, i.randomAsU8a)(), t = 2048, u) {
                const s = (0, r.u8aToU8a)(e),
                    l = (0, r.u8aToU8a)(n);
                return {
                    password: (0, a.isWasmOnly)(u) ? (0, o.pbkdf2)(s, l, t) : (0, c.pbkdf2Sync)(s, l, t),
                    rounds: t,
                    salt: n
                }
            };
            var r = t(5470),
                o = t(5509),
                a = t(5604),
                i = t(5908),
                c = t(8241)
        },
        8241: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.pbkdf2Sync = function(e, n, t, i = 64) {
                let c = new Uint8Array,
                    u = 0;
                const s = (0, r.u8aConcat)(n, new Uint8Array(4));
                for (; c.length < i;) {
                    u++, s.set((0, r.bnToU8a)(u, o.BN_BE_32_OPTS), n.length);
                    let i = (0, a.hmacShaAsU8a)(e, s, 512);
                    const l = i;
                    let d = 0;
                    for (; ++d < t;) {
                        i = (0, a.hmacShaAsU8a)(e, i, 512);
                        let n = -1;
                        for (; ++n < i.length;) l[n] ^= i[n]
                    }
                    c = (0, r.u8aConcat)(c, l)
                }
                return c.slice(0, i)
            };
            var r = t(5470),
                o = t(5643),
                a = t(6007)
        },
        8242: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.randomAsNumber = function() {
                return (0, r.hexToBn)((0, o.randomAsHex)(8)).and(a).toNumber()
            };
            var r = t(5470),
                o = t(5908);
            const a = new r.BN(9007199254740991)
        },
        8243: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.sha512AsU8a = n.sha256AsU8a = void 0, n.shaAsU8a = u;
            var o = r(t(141)),
                a = t(5470),
                i = t(5509),
                c = t(5604);

            function u(e, n = 256, t) {
                const r = 256 === n,
                    u = (0, a.u8aToU8a)(e);
                return (0, c.isWasmOnly)(t) ? r ? (0, i.sha256)(u) : (0, i.sha512)(u) : new Uint8Array(r ? o.default.sha256().update(u).digest() : o.default.sha512().update(u).digest())
            }
            const s = (0, c.createBitHasher)(256, u);
            n.sha256AsU8a = s;
            const l = (0, c.createBitHasher)(512, u);
            n.sha512AsU8a = l
        },
        8244: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = "abandon\nability\nable\nabout\nabove\nabsent\nabsorb\nabstract\nabsurd\nabuse\naccess\naccident\naccount\naccuse\nachieve\nacid\nacoustic\nacquire\nacross\nact\naction\nactor\nactress\nactual\nadapt\nadd\naddict\naddress\nadjust\nadmit\nadult\nadvance\nadvice\naerobic\naffair\nafford\nafraid\nagain\nage\nagent\nagree\nahead\naim\nair\nairport\naisle\nalarm\nalbum\nalcohol\nalert\nalien\nall\nalley\nallow\nalmost\nalone\nalpha\nalready\nalso\nalter\nalways\namateur\namazing\namong\namount\namused\nanalyst\nanchor\nancient\nanger\nangle\nangry\nanimal\nankle\nannounce\nannual\nanother\nanswer\nantenna\nantique\nanxiety\nany\napart\napology\nappear\napple\napprove\napril\narch\narctic\narea\narena\nargue\narm\narmed\narmor\narmy\naround\narrange\narrest\narrive\narrow\nart\nartefact\nartist\nartwork\nask\naspect\nassault\nasset\nassist\nassume\nasthma\nathlete\natom\nattack\nattend\nattitude\nattract\nauction\naudit\naugust\naunt\nauthor\nauto\nautumn\naverage\navocado\navoid\nawake\naware\naway\nawesome\nawful\nawkward\naxis\nbaby\nbachelor\nbacon\nbadge\nbag\nbalance\nbalcony\nball\nbamboo\nbanana\nbanner\nbar\nbarely\nbargain\nbarrel\nbase\nbasic\nbasket\nbattle\nbeach\nbean\nbeauty\nbecause\nbecome\nbeef\nbefore\nbegin\nbehave\nbehind\nbelieve\nbelow\nbelt\nbench\nbenefit\nbest\nbetray\nbetter\nbetween\nbeyond\nbicycle\nbid\nbike\nbind\nbiology\nbird\nbirth\nbitter\nblack\nblade\nblame\nblanket\nblast\nbleak\nbless\nblind\nblood\nblossom\nblouse\nblue\nblur\nblush\nboard\nboat\nbody\nboil\nbomb\nbone\nbonus\nbook\nboost\nborder\nboring\nborrow\nboss\nbottom\nbounce\nbox\nboy\nbracket\nbrain\nbrand\nbrass\nbrave\nbread\nbreeze\nbrick\nbridge\nbrief\nbright\nbring\nbrisk\nbroccoli\nbroken\nbronze\nbroom\nbrother\nbrown\nbrush\nbubble\nbuddy\nbudget\nbuffalo\nbuild\nbulb\nbulk\nbullet\nbundle\nbunker\nburden\nburger\nburst\nbus\nbusiness\nbusy\nbutter\nbuyer\nbuzz\ncabbage\ncabin\ncable\ncactus\ncage\ncake\ncall\ncalm\ncamera\ncamp\ncan\ncanal\ncancel\ncandy\ncannon\ncanoe\ncanvas\ncanyon\ncapable\ncapital\ncaptain\ncar\ncarbon\ncard\ncargo\ncarpet\ncarry\ncart\ncase\ncash\ncasino\ncastle\ncasual\ncat\ncatalog\ncatch\ncategory\ncattle\ncaught\ncause\ncaution\ncave\nceiling\ncelery\ncement\ncensus\ncentury\ncereal\ncertain\nchair\nchalk\nchampion\nchange\nchaos\nchapter\ncharge\nchase\nchat\ncheap\ncheck\ncheese\nchef\ncherry\nchest\nchicken\nchief\nchild\nchimney\nchoice\nchoose\nchronic\nchuckle\nchunk\nchurn\ncigar\ncinnamon\ncircle\ncitizen\ncity\ncivil\nclaim\nclap\nclarify\nclaw\nclay\nclean\nclerk\nclever\nclick\nclient\ncliff\nclimb\nclinic\nclip\nclock\nclog\nclose\ncloth\ncloud\nclown\nclub\nclump\ncluster\nclutch\ncoach\ncoast\ncoconut\ncode\ncoffee\ncoil\ncoin\ncollect\ncolor\ncolumn\ncombine\ncome\ncomfort\ncomic\ncommon\ncompany\nconcert\nconduct\nconfirm\ncongress\nconnect\nconsider\ncontrol\nconvince\ncook\ncool\ncopper\ncopy\ncoral\ncore\ncorn\ncorrect\ncost\ncotton\ncouch\ncountry\ncouple\ncourse\ncousin\ncover\ncoyote\ncrack\ncradle\ncraft\ncram\ncrane\ncrash\ncrater\ncrawl\ncrazy\ncream\ncredit\ncreek\ncrew\ncricket\ncrime\ncrisp\ncritic\ncrop\ncross\ncrouch\ncrowd\ncrucial\ncruel\ncruise\ncrumble\ncrunch\ncrush\ncry\ncrystal\ncube\nculture\ncup\ncupboard\ncurious\ncurrent\ncurtain\ncurve\ncushion\ncustom\ncute\ncycle\ndad\ndamage\ndamp\ndance\ndanger\ndaring\ndash\ndaughter\ndawn\nday\ndeal\ndebate\ndebris\ndecade\ndecember\ndecide\ndecline\ndecorate\ndecrease\ndeer\ndefense\ndefine\ndefy\ndegree\ndelay\ndeliver\ndemand\ndemise\ndenial\ndentist\ndeny\ndepart\ndepend\ndeposit\ndepth\ndeputy\nderive\ndescribe\ndesert\ndesign\ndesk\ndespair\ndestroy\ndetail\ndetect\ndevelop\ndevice\ndevote\ndiagram\ndial\ndiamond\ndiary\ndice\ndiesel\ndiet\ndiffer\ndigital\ndignity\ndilemma\ndinner\ndinosaur\ndirect\ndirt\ndisagree\ndiscover\ndisease\ndish\ndismiss\ndisorder\ndisplay\ndistance\ndivert\ndivide\ndivorce\ndizzy\ndoctor\ndocument\ndog\ndoll\ndolphin\ndomain\ndonate\ndonkey\ndonor\ndoor\ndose\ndouble\ndove\ndraft\ndragon\ndrama\ndrastic\ndraw\ndream\ndress\ndrift\ndrill\ndrink\ndrip\ndrive\ndrop\ndrum\ndry\nduck\ndumb\ndune\nduring\ndust\ndutch\nduty\ndwarf\ndynamic\neager\neagle\nearly\nearn\nearth\neasily\neast\neasy\necho\necology\neconomy\nedge\nedit\neducate\neffort\negg\neight\neither\nelbow\nelder\nelectric\nelegant\nelement\nelephant\nelevator\nelite\nelse\nembark\nembody\nembrace\nemerge\nemotion\nemploy\nempower\nempty\nenable\nenact\nend\nendless\nendorse\nenemy\nenergy\nenforce\nengage\nengine\nenhance\nenjoy\nenlist\nenough\nenrich\nenroll\nensure\nenter\nentire\nentry\nenvelope\nepisode\nequal\nequip\nera\nerase\nerode\nerosion\nerror\nerupt\nescape\nessay\nessence\nestate\neternal\nethics\nevidence\nevil\nevoke\nevolve\nexact\nexample\nexcess\nexchange\nexcite\nexclude\nexcuse\nexecute\nexercise\nexhaust\nexhibit\nexile\nexist\nexit\nexotic\nexpand\nexpect\nexpire\nexplain\nexpose\nexpress\nextend\nextra\neye\neyebrow\nfabric\nface\nfaculty\nfade\nfaint\nfaith\nfall\nfalse\nfame\nfamily\nfamous\nfan\nfancy\nfantasy\nfarm\nfashion\nfat\nfatal\nfather\nfatigue\nfault\nfavorite\nfeature\nfebruary\nfederal\nfee\nfeed\nfeel\nfemale\nfence\nfestival\nfetch\nfever\nfew\nfiber\nfiction\nfield\nfigure\nfile\nfilm\nfilter\nfinal\nfind\nfine\nfinger\nfinish\nfire\nfirm\nfirst\nfiscal\nfish\nfit\nfitness\nfix\nflag\nflame\nflash\nflat\nflavor\nflee\nflight\nflip\nfloat\nflock\nfloor\nflower\nfluid\nflush\nfly\nfoam\nfocus\nfog\nfoil\nfold\nfollow\nfood\nfoot\nforce\nforest\nforget\nfork\nfortune\nforum\nforward\nfossil\nfoster\nfound\nfox\nfragile\nframe\nfrequent\nfresh\nfriend\nfringe\nfrog\nfront\nfrost\nfrown\nfrozen\nfruit\nfuel\nfun\nfunny\nfurnace\nfury\nfuture\ngadget\ngain\ngalaxy\ngallery\ngame\ngap\ngarage\ngarbage\ngarden\ngarlic\ngarment\ngas\ngasp\ngate\ngather\ngauge\ngaze\ngeneral\ngenius\ngenre\ngentle\ngenuine\ngesture\nghost\ngiant\ngift\ngiggle\nginger\ngiraffe\ngirl\ngive\nglad\nglance\nglare\nglass\nglide\nglimpse\nglobe\ngloom\nglory\nglove\nglow\nglue\ngoat\ngoddess\ngold\ngood\ngoose\ngorilla\ngospel\ngossip\ngovern\ngown\ngrab\ngrace\ngrain\ngrant\ngrape\ngrass\ngravity\ngreat\ngreen\ngrid\ngrief\ngrit\ngrocery\ngroup\ngrow\ngrunt\nguard\nguess\nguide\nguilt\nguitar\ngun\ngym\nhabit\nhair\nhalf\nhammer\nhamster\nhand\nhappy\nharbor\nhard\nharsh\nharvest\nhat\nhave\nhawk\nhazard\nhead\nhealth\nheart\nheavy\nhedgehog\nheight\nhello\nhelmet\nhelp\nhen\nhero\nhidden\nhigh\nhill\nhint\nhip\nhire\nhistory\nhobby\nhockey\nhold\nhole\nholiday\nhollow\nhome\nhoney\nhood\nhope\nhorn\nhorror\nhorse\nhospital\nhost\nhotel\nhour\nhover\nhub\nhuge\nhuman\nhumble\nhumor\nhundred\nhungry\nhunt\nhurdle\nhurry\nhurt\nhusband\nhybrid\nice\nicon\nidea\nidentify\nidle\nignore\nill\nillegal\nillness\nimage\nimitate\nimmense\nimmune\nimpact\nimpose\nimprove\nimpulse\ninch\ninclude\nincome\nincrease\nindex\nindicate\nindoor\nindustry\ninfant\ninflict\ninform\ninhale\ninherit\ninitial\ninject\ninjury\ninmate\ninner\ninnocent\ninput\ninquiry\ninsane\ninsect\ninside\ninspire\ninstall\nintact\ninterest\ninto\ninvest\ninvite\ninvolve\niron\nisland\nisolate\nissue\nitem\nivory\njacket\njaguar\njar\njazz\njealous\njeans\njelly\njewel\njob\njoin\njoke\njourney\njoy\njudge\njuice\njump\njungle\njunior\njunk\njust\nkangaroo\nkeen\nkeep\nketchup\nkey\nkick\nkid\nkidney\nkind\nkingdom\nkiss\nkit\nkitchen\nkite\nkitten\nkiwi\nknee\nknife\nknock\nknow\nlab\nlabel\nlabor\nladder\nlady\nlake\nlamp\nlanguage\nlaptop\nlarge\nlater\nlatin\nlaugh\nlaundry\nlava\nlaw\nlawn\nlawsuit\nlayer\nlazy\nleader\nleaf\nlearn\nleave\nlecture\nleft\nleg\nlegal\nlegend\nleisure\nlemon\nlend\nlength\nlens\nleopard\nlesson\nletter\nlevel\nliar\nliberty\nlibrary\nlicense\nlife\nlift\nlight\nlike\nlimb\nlimit\nlink\nlion\nliquid\nlist\nlittle\nlive\nlizard\nload\nloan\nlobster\nlocal\nlock\nlogic\nlonely\nlong\nloop\nlottery\nloud\nlounge\nlove\nloyal\nlucky\nluggage\nlumber\nlunar\nlunch\nluxury\nlyrics\nmachine\nmad\nmagic\nmagnet\nmaid\nmail\nmain\nmajor\nmake\nmammal\nman\nmanage\nmandate\nmango\nmansion\nmanual\nmaple\nmarble\nmarch\nmargin\nmarine\nmarket\nmarriage\nmask\nmass\nmaster\nmatch\nmaterial\nmath\nmatrix\nmatter\nmaximum\nmaze\nmeadow\nmean\nmeasure\nmeat\nmechanic\nmedal\nmedia\nmelody\nmelt\nmember\nmemory\nmention\nmenu\nmercy\nmerge\nmerit\nmerry\nmesh\nmessage\nmetal\nmethod\nmiddle\nmidnight\nmilk\nmillion\nmimic\nmind\nminimum\nminor\nminute\nmiracle\nmirror\nmisery\nmiss\nmistake\nmix\nmixed\nmixture\nmobile\nmodel\nmodify\nmom\nmoment\nmonitor\nmonkey\nmonster\nmonth\nmoon\nmoral\nmore\nmorning\nmosquito\nmother\nmotion\nmotor\nmountain\nmouse\nmove\nmovie\nmuch\nmuffin\nmule\nmultiply\nmuscle\nmuseum\nmushroom\nmusic\nmust\nmutual\nmyself\nmystery\nmyth\nnaive\nname\nnapkin\nnarrow\nnasty\nnation\nnature\nnear\nneck\nneed\nnegative\nneglect\nneither\nnephew\nnerve\nnest\nnet\nnetwork\nneutral\nnever\nnews\nnext\nnice\nnight\nnoble\nnoise\nnominee\nnoodle\nnormal\nnorth\nnose\nnotable\nnote\nnothing\nnotice\nnovel\nnow\nnuclear\nnumber\nnurse\nnut\noak\nobey\nobject\noblige\nobscure\nobserve\nobtain\nobvious\noccur\nocean\noctober\nodor\noff\noffer\noffice\noften\noil\nokay\nold\nolive\nolympic\nomit\nonce\none\nonion\nonline\nonly\nopen\nopera\nopinion\noppose\noption\norange\norbit\norchard\norder\nordinary\norgan\norient\noriginal\norphan\nostrich\nother\noutdoor\nouter\noutput\noutside\noval\noven\nover\nown\nowner\noxygen\noyster\nozone\npact\npaddle\npage\npair\npalace\npalm\npanda\npanel\npanic\npanther\npaper\nparade\nparent\npark\nparrot\nparty\npass\npatch\npath\npatient\npatrol\npattern\npause\npave\npayment\npeace\npeanut\npear\npeasant\npelican\npen\npenalty\npencil\npeople\npepper\nperfect\npermit\nperson\npet\nphone\nphoto\nphrase\nphysical\npiano\npicnic\npicture\npiece\npig\npigeon\npill\npilot\npink\npioneer\npipe\npistol\npitch\npizza\nplace\nplanet\nplastic\nplate\nplay\nplease\npledge\npluck\nplug\nplunge\npoem\npoet\npoint\npolar\npole\npolice\npond\npony\npool\npopular\nportion\nposition\npossible\npost\npotato\npottery\npoverty\npowder\npower\npractice\npraise\npredict\nprefer\nprepare\npresent\npretty\nprevent\nprice\npride\nprimary\nprint\npriority\nprison\nprivate\nprize\nproblem\nprocess\nproduce\nprofit\nprogram\nproject\npromote\nproof\nproperty\nprosper\nprotect\nproud\nprovide\npublic\npudding\npull\npulp\npulse\npumpkin\npunch\npupil\npuppy\npurchase\npurity\npurpose\npurse\npush\nput\npuzzle\npyramid\nquality\nquantum\nquarter\nquestion\nquick\nquit\nquiz\nquote\nrabbit\nraccoon\nrace\nrack\nradar\nradio\nrail\nrain\nraise\nrally\nramp\nranch\nrandom\nrange\nrapid\nrare\nrate\nrather\nraven\nraw\nrazor\nready\nreal\nreason\nrebel\nrebuild\nrecall\nreceive\nrecipe\nrecord\nrecycle\nreduce\nreflect\nreform\nrefuse\nregion\nregret\nregular\nreject\nrelax\nrelease\nrelief\nrely\nremain\nremember\nremind\nremove\nrender\nrenew\nrent\nreopen\nrepair\nrepeat\nreplace\nreport\nrequire\nrescue\nresemble\nresist\nresource\nresponse\nresult\nretire\nretreat\nreturn\nreunion\nreveal\nreview\nreward\nrhythm\nrib\nribbon\nrice\nrich\nride\nridge\nrifle\nright\nrigid\nring\nriot\nripple\nrisk\nritual\nrival\nriver\nroad\nroast\nrobot\nrobust\nrocket\nromance\nroof\nrookie\nroom\nrose\nrotate\nrough\nround\nroute\nroyal\nrubber\nrude\nrug\nrule\nrun\nrunway\nrural\nsad\nsaddle\nsadness\nsafe\nsail\nsalad\nsalmon\nsalon\nsalt\nsalute\nsame\nsample\nsand\nsatisfy\nsatoshi\nsauce\nsausage\nsave\nsay\nscale\nscan\nscare\nscatter\nscene\nscheme\nschool\nscience\nscissors\nscorpion\nscout\nscrap\nscreen\nscript\nscrub\nsea\nsearch\nseason\nseat\nsecond\nsecret\nsection\nsecurity\nseed\nseek\nsegment\nselect\nsell\nseminar\nsenior\nsense\nsentence\nseries\nservice\nsession\nsettle\nsetup\nseven\nshadow\nshaft\nshallow\nshare\nshed\nshell\nsheriff\nshield\nshift\nshine\nship\nshiver\nshock\nshoe\nshoot\nshop\nshort\nshoulder\nshove\nshrimp\nshrug\nshuffle\nshy\nsibling\nsick\nside\nsiege\nsight\nsign\nsilent\nsilk\nsilly\nsilver\nsimilar\nsimple\nsince\nsing\nsiren\nsister\nsituate\nsix\nsize\nskate\nsketch\nski\nskill\nskin\nskirt\nskull\nslab\nslam\nsleep\nslender\nslice\nslide\nslight\nslim\nslogan\nslot\nslow\nslush\nsmall\nsmart\nsmile\nsmoke\nsmooth\nsnack\nsnake\nsnap\nsniff\nsnow\nsoap\nsoccer\nsocial\nsock\nsoda\nsoft\nsolar\nsoldier\nsolid\nsolution\nsolve\nsomeone\nsong\nsoon\nsorry\nsort\nsoul\nsound\nsoup\nsource\nsouth\nspace\nspare\nspatial\nspawn\nspeak\nspecial\nspeed\nspell\nspend\nsphere\nspice\nspider\nspike\nspin\nspirit\nsplit\nspoil\nsponsor\nspoon\nsport\nspot\nspray\nspread\nspring\nspy\nsquare\nsqueeze\nsquirrel\nstable\nstadium\nstaff\nstage\nstairs\nstamp\nstand\nstart\nstate\nstay\nsteak\nsteel\nstem\nstep\nstereo\nstick\nstill\nsting\nstock\nstomach\nstone\nstool\nstory\nstove\nstrategy\nstreet\nstrike\nstrong\nstruggle\nstudent\nstuff\nstumble\nstyle\nsubject\nsubmit\nsubway\nsuccess\nsuch\nsudden\nsuffer\nsugar\nsuggest\nsuit\nsummer\nsun\nsunny\nsunset\nsuper\nsupply\nsupreme\nsure\nsurface\nsurge\nsurprise\nsurround\nsurvey\nsuspect\nsustain\nswallow\nswamp\nswap\nswarm\nswear\nsweet\nswift\nswim\nswing\nswitch\nsword\nsymbol\nsymptom\nsyrup\nsystem\ntable\ntackle\ntag\ntail\ntalent\ntalk\ntank\ntape\ntarget\ntask\ntaste\ntattoo\ntaxi\nteach\nteam\ntell\nten\ntenant\ntennis\ntent\nterm\ntest\ntext\nthank\nthat\ntheme\nthen\ntheory\nthere\nthey\nthing\nthis\nthought\nthree\nthrive\nthrow\nthumb\nthunder\nticket\ntide\ntiger\ntilt\ntimber\ntime\ntiny\ntip\ntired\ntissue\ntitle\ntoast\ntobacco\ntoday\ntoddler\ntoe\ntogether\ntoilet\ntoken\ntomato\ntomorrow\ntone\ntongue\ntonight\ntool\ntooth\ntop\ntopic\ntopple\ntorch\ntornado\ntortoise\ntoss\ntotal\ntourist\ntoward\ntower\ntown\ntoy\ntrack\ntrade\ntraffic\ntragic\ntrain\ntransfer\ntrap\ntrash\ntravel\ntray\ntreat\ntree\ntrend\ntrial\ntribe\ntrick\ntrigger\ntrim\ntrip\ntrophy\ntrouble\ntruck\ntrue\ntruly\ntrumpet\ntrust\ntruth\ntry\ntube\ntuition\ntumble\ntuna\ntunnel\nturkey\nturn\nturtle\ntwelve\ntwenty\ntwice\ntwin\ntwist\ntwo\ntype\ntypical\nugly\numbrella\nunable\nunaware\nuncle\nuncover\nunder\nundo\nunfair\nunfold\nunhappy\nuniform\nunique\nunit\nuniverse\nunknown\nunlock\nuntil\nunusual\nunveil\nupdate\nupgrade\nuphold\nupon\nupper\nupset\nurban\nurge\nusage\nuse\nused\nuseful\nuseless\nusual\nutility\nvacant\nvacuum\nvague\nvalid\nvalley\nvalve\nvan\nvanish\nvapor\nvarious\nvast\nvault\nvehicle\nvelvet\nvendor\nventure\nvenue\nverb\nverify\nversion\nvery\nvessel\nveteran\nviable\nvibrant\nvicious\nvictory\nvideo\nview\nvillage\nvintage\nviolin\nvirtual\nvirus\nvisa\nvisit\nvisual\nvital\nvivid\nvocal\nvoice\nvoid\nvolcano\nvolume\nvote\nvoyage\nwage\nwagon\nwait\nwalk\nwall\nwalnut\nwant\nwarfare\nwarm\nwarrior\nwash\nwasp\nwaste\nwater\nwave\nway\nwealth\nweapon\nwear\nweasel\nweather\nweb\nwedding\nweekend\nweird\nwelcome\nwest\nwet\nwhale\nwhat\nwheat\nwheel\nwhen\nwhere\nwhip\nwhisper\nwide\nwidth\nwife\nwild\nwill\nwin\nwindow\nwine\nwing\nwink\nwinner\nwinter\nwire\nwisdom\nwise\nwish\nwitness\nwolf\nwoman\nwonder\nwood\nwool\nword\nwork\nworld\nworry\nworth\nwrap\nwreck\nwrestle\nwrist\nwrite\nwrong\nyard\nyear\nyellow\nyou\nyoung\nyouth\nzebra\nzero\nzone\nzoo".split("\n");
            n.default = r
        },
        8245: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.mnemonicToLegacySeed = function(e, n = "", t, u = 32) {
                if ((0, r.assert)((0, c.mnemonicValidate)(e), "Invalid bip39 mnemonic specified"), (0, r.assert)([32, 64].includes(u), () => `Invalid seed length ${u}, expected 32 or 64`), 32 === u) return (0, a.isWasmOnly)(t) ? (0, o.bip39ToSeed)(e, n) : (0, i.mnemonicToSeedSync)(e, n).subarray(0, 32);
                if (64 === u) return (0, i.mnemonicToSeedSync)(e, n);
                return new Uint8Array
            };
            var r = t(5470),
                o = t(5509),
                a = t(5604),
                i = t(6008),
                c = t(6395)
        },
        8246: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.mnemonicToMiniSecret = function(e, n = "", t) {
                if ((0, r.assert)((0, u.mnemonicValidate)(e), "Invalid bip39 mnemonic specified"), (0, a.isWasmOnly)(t)) return (0, o.bip39ToMiniSecret)(e, n);
                const s = (0, c.mnemonicToEntropy)(e),
                    l = (0, r.stringToU8a)("mnemonic" + n);
                return (0, i.pbkdf2Encode)(s, l).password.slice(0, 32)
            };
            var r = t(5470),
                o = t(5509),
                a = t(5604),
                i = t(6394),
                c = t(7017),
                u = t(6395)
        },
        8247: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclDecrypt = function(e, n, t) {
                return o.default.secretbox.open(e, n, t) || null
            };
            var o = r(t(73))
        },
        8248: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclEncrypt = function(e, n, t = (0, a.randomAsU8a)(24)) {
                return {
                    encrypted: o.default.secretbox(e, t, n),
                    nonce: t
                }
            };
            var o = r(t(73)),
                a = t(5908)
        },
        8249: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclKeypairFromRandom = function() {
                return o.default.sign.keyPair()
            };
            var o = r(t(73))
        },
        8250: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclKeypairFromSecret = function(e) {
                return o.default.sign.keyPair.fromSecretKey(e)
            };
            var o = r(t(73))
        },
        8251: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclKeypairFromString = function(e) {
                return (0, a.naclKeypairFromSeed)((0, o.blake2AsU8a)((0, r.stringToU8a)(e), 256))
            };
            var r = t(5470),
                o = t(5774),
                a = t(6389)
        },
        8252: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclSign = function(e, {
                publicKey: n,
                secretKey: t
            }, r) {
                (0, a.assert)(t, "Expected a valid secretKey");
                const u = (0, a.u8aToU8a)(e);
                return (0, c.isWasmOnly)(r) ? (0, i.ed25519Sign)(n, t.subarray(0, 32), u) : o.default.sign.detached(u, t)
            };
            var o = r(t(73)),
                a = t(5470),
                i = t(5509),
                c = t(5604)
        },
        8253: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclBoxKeypairFromSecret = function(e) {
                return o.default.box.keyPair.fromSecretKey(e.slice(0, 32))
            };
            var o = r(t(73))
        },
        8254: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclOpen = function(e, n, t, r) {
                return o.default.box.open(e, n, t, r) || null
            };
            var o = r(t(73))
        },
        8255: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.naclSeal = function(e, n, t, r = (0, a.randomAsU8a)(24)) {
                return {
                    nonce: r,
                    sealed: o.default.box(e, r, t, n)
                }
            };
            var o = r(t(73)),
                a = t(5908)
        },
        8256: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.convertPublicKeyToCurve25519 = function(e) {
                return (0, a.assertReturn)(o.default.convertPublicKey(e), "Unable to convert publicKey to ed25519")
            }, n.convertSecretKeyToCurve25519 = function(e) {
                return o.default.convertSecretKey(e)
            };
            var o = r(t(5909)),
                a = t(5470)
        },
        8257: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ledgerDerivePrivate = function(e, n) {
                const t = e.subarray(0, 32),
                    i = e.subarray(32, 64),
                    c = e.subarray(64, 96),
                    u = (0, r.u8aConcat)([0], t, i, (0, r.bnToU8a)(n, o.BN_LE_32_OPTS)),
                    s = (0, a.hmacShaAsU8a)(c, u, 512);
                return u[0] = 1, (0, r.u8aConcat)((0, r.bnToU8a)((0, r.u8aToBn)(t, o.BN_LE_OPTS).iadd((0, r.u8aToBn)(s.subarray(0, 28), o.BN_LE_OPTS).imul(r.BN_EIGHT)), o.BN_LE_512_OPTS).subarray(0, 32), (0, r.bnToU8a)((0, r.u8aToBn)(i, o.BN_LE_OPTS).iadd((0, r.u8aToBn)(s.subarray(32, 64), o.BN_LE_OPTS)), o.BN_LE_512_OPTS).subarray(0, 32), (0, a.hmacShaAsU8a)(c, u, 512).subarray(32, 64))
            };
            var r = t(5470),
                o = t(5643),
                a = t(6007)
        },
        8258: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ledgerMaster = function(e, n) {
                const t = (0, a.mnemonicToSeedSync)(e, n),
                    i = (0, o.hmacShaAsU8a)("ed25519 seed", new Uint8Array([1, ...t]), 256);
                let c;
                for (; !c || 32 & c[31];) c = (0, o.hmacShaAsU8a)("ed25519 seed", c || t, 512);
                return c[0] &= 248, c[31] &= 127, c[31] |= 64, (0, r.u8aConcat)(c, i)
            };
            var r = t(5470),
                o = t(6007),
                a = t(6008)
        },
        8259: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "jsonDecrypt", {
                enumerable: !0,
                get: function() {
                    return r.jsonDecrypt
                }
            }), Object.defineProperty(n, "jsonDecryptData", {
                enumerable: !0,
                get: function() {
                    return o.jsonDecryptData
                }
            }), Object.defineProperty(n, "jsonEncrypt", {
                enumerable: !0,
                get: function() {
                    return a.jsonEncrypt
                }
            }), Object.defineProperty(n, "jsonEncryptFormat", {
                enumerable: !0,
                get: function() {
                    return i.jsonEncryptFormat
                }
            });
            var r = t(8260),
                o = t(7019),
                a = t(8264),
                i = t(7022)
        },
        8260: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.jsonDecrypt = function({
                encoded: e,
                encoding: n
            }, t) {
                return (0, r.assert)(e, "No encrypted data available to decode"), (0, a.jsonDecryptData)((0, r.isHex)(e) ? (0, r.hexToU8a)(e) : (0, o.base64Decode)(e), t, Array.isArray(n.type) ? n.type : [n.type])
            };
            var r = t(5470),
                o = t(6391),
                a = t(7019)
        },
        8261: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.scryptEncode = function(e, n = (0, u.randomAsU8a)(), t = s.DEFAULT_PARAMS, r) {
                const l = (0, a.u8aToU8a)(e),
                    d = (0, c.isWasmOnly)(r) ? (0, i.scrypt)(l, n, Math.log2(t.N), t.r, t.p) : (0, a.bufferToU8a)((0, o.default)((0, a.u8aToBuffer)(l), (0, a.u8aToBuffer)(n), t.N, t.r, t.p, 64));
                return {
                    params: t,
                    password: d,
                    salt: n
                }
            };
            var o = r(t(5830)),
                a = t(5470),
                i = t(5509),
                c = t(5604),
                u = t(5908),
                s = t(7020)
        },
        8262: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.scryptFromU8a = function(e) {
                const n = e.subarray(0, 32),
                    t = (0, r.u8aToBn)(e.subarray(32, 36), o.BN_LE_OPTS).toNumber(),
                    i = (0, r.u8aToBn)(e.subarray(36, 40), o.BN_LE_OPTS).toNumber(),
                    c = (0, r.u8aToBn)(e.subarray(40, 44), o.BN_LE_OPTS).toNumber();
                return (0, r.assert)(t === a.DEFAULT_PARAMS.N && i === a.DEFAULT_PARAMS.p && c === a.DEFAULT_PARAMS.r, "Invalid injected scrypt params found"), {
                    params: {
                        N: t,
                        p: i,
                        r: c
                    },
                    salt: n
                }
            };
            var r = t(5470),
                o = t(5643),
                a = t(7020)
        },
        8263: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.scryptToU8a = function(e, {
                N: n,
                p: t,
                r: a
            }) {
                return (0, r.u8aConcat)(e, (0, r.bnToU8a)(n, o.BN_LE_32_OPTS), (0, r.bnToU8a)(t, o.BN_LE_32_OPTS), (0, r.bnToU8a)(a, o.BN_LE_32_OPTS))
            };
            var r = t(5470),
                o = t(5643)
        },
        8264: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.jsonEncrypt = function(e, n, t) {
                let c = !1,
                    u = e;
                if (t) {
                    const {
                        params: e,
                        password: n,
                        salt: i
                    } = (0, a.scryptEncode)(t), {
                        encrypted: s,
                        nonce: l
                    } = (0, o.naclEncrypt)(u, n.subarray(0, 32));
                    c = !0, u = (0, r.u8aConcat)((0, a.scryptToU8a)(i, e), l, s)
                }
                return (0, i.jsonEncryptFormat)(u, n, c)
            };
            var r = t(5470),
                o = t(6155),
                a = t(6396),
                i = t(7022)
        },
        8265: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "signatureVerify", {
                enumerable: !0,
                get: function() {
                    return r.signatureVerify
                }
            });
            var r = t(8266)
        },
        8266: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.signatureVerify = function(e, n, t) {
                const a = (0, r.u8aToU8a)(n);
                (0, r.assert)([64, 65, 66].includes(a.length), () => "Invalid signature length, expected [64..66] bytes, found " + a.length);
                const i = (0, o.decodeAddress)(t),
                    c = {
                        message: (0, r.u8aToU8a)(e),
                        publicKey: i,
                        signature: a
                    },
                    u = {
                        crypto: "none",
                        isValid: !1,
                        isWrapped: (0, r.u8aIsWrapped)(c.message, !0),
                        publicKey: i
                    },
                    s = (0, r.u8aIsWrapped)(c.message, !1),
                    l = function(e) {
                        return [0, 1, 2].includes(e[0]) && [65, 66].includes(e.length) ? p : f
                    }(a);
                if (l(u, c), "none" !== u.crypto || u.isWrapped && !s) return u;
                return c.message = s ? (0, r.u8aUnwrapBytes)(c.message) : (0, r.u8aWrapBytes)(c.message), l(u, c)
            };
            var r = t(5470),
                o = t(5687),
                a = t(7018),
                i = t(7008),
                c = t(7012);
            const u = e => (n, t, r) => (0, c.secp256k1Verify)(n, t, r, e),
                s = [
                    ["ecdsa", u("blake2")],
                    ["ethereum", u("keccak")]
                ],
                l = [
                    ["ed25519", a.naclVerify],
                    ["sr25519", i.schnorrkelVerify], ...s
                ],
                d = ["ed25519", "sr25519", "ecdsa"];

            function f(e, {
                message: n,
                publicKey: t,
                signature: r
            }, o = l) {
                return e.isValid = o.some(([o, a]) => {
                    try {
                        if (a(n, r, t)) return e.crypto = o, !0
                    } catch (e) {}
                    return !1
                }), e
            }

            function p(e, {
                message: n,
                publicKey: t,
                signature: o
            }) {
                (0, r.assert)([0, 1, 2].includes(o[0]), () => "Unknown crypto type, expected signature prefix [0..2], found " + o[0]);
                const c = d[o[0]] || "none";
                e.crypto = c;
                try {
                    e.isValid = {
                        ecdsa: () => f(e, {
                            message: n,
                            publicKey: t,
                            signature: o.subarray(1)
                        }, s).isValid,
                        ed25519: () => (0, a.naclVerify)(n, o.subarray(1), t),
                        none: () => {
                            throw Error("no verify for `none` crypto type")
                        },
                        sr25519: () => (0, i.schnorrkelVerify)(n, o.subarray(1), t)
                    } [c]()
                } catch (e) {}
                return e
            }
        },
        8267: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "xxhashAsHex", {
                enumerable: !0,
                get: function() {
                    return r.xxhashAsHex
                }
            }), Object.defineProperty(n, "xxhashAsU8a", {
                enumerable: !0,
                get: function() {
                    return r.xxhashAsU8a
                }
            });
            var r = t(8268)
        },
        8268: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.xxhashAsHex = void 0, n.xxhashAsU8a = u;
            var o = t(5470),
                a = t(5509),
                i = t(5604),
                c = r(t(8269));

            function u(e, n = 64, t) {
                const r = Math.ceil(n / 64),
                    u = (0, o.u8aToU8a)(e);
                if ((0, i.isWasmOnly)(t)) return (0, a.twox)(u, r);
                const s = new Uint8Array(Math.ceil(n / 8));
                for (let e = 0; e < r; e++) s.set((0, c.default)(u, e).toArray("le", 8), 8 * e);
                return s
            }
            const s = (0, i.createAsHex)(u);
            n.xxhashAsHex = s
        },
        8269: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function(e, n) {
                return new o.BN((0, a.default)(e, n), 16)
            };
            var o = t(5470),
                a = r(t(8270))
        },
        8270: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function(e, n) {
                return (0, o.default)(e, n).toString(16)
            };
            var o = r(t(8271))
        },
        8271: function(e, n, t) {
            "use strict";
            var r = t(2);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function(e, n) {
                return o.default.h64((0, a.u8aToU8a)(e).buffer, n)
            };
            var o = r(t(6397)),
                a = t(5470)
        }
    }
]);