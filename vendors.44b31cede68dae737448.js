(window.webpackJsonp = window.webpackJsonp || []).push([
    [305], {
        5487: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.ErrGasLimitShouldBe0ForInnerTransaction = r.ErrInvalidRelayedV2BuilderArguments = r.ErrInvalidRelayedV1BuilderArguments = r.ErrNotImplemented = r.ErrContractInteraction = r.ErrCodec = r.ErrCannotParseContractResults = r.ErrMissingFieldOnEnum = r.ErrMissingFieldOnStruct = r.ErrTypeInferenceSystemRequiresRegularJavascriptObjects = r.ErrTypingSystem = r.ErrMock = r.ErrContractHasNoAddress = r.ErrContract = r.ErrExpectedTransactionEventsNotFound = r.ErrExpectedTransactionStatusNotReached = r.ErrTransactionWatcherTimeout = r.ErrAsyncTimerAborted = r.ErrAsyncTimerAlreadyRunning = r.ErrInvalidFunctionName = r.ErrSignatureCannotCreate = r.ErrTransactionOptionsInvalid = r.ErrTransactionVersionInvalid = r.ErrNonceInvalid = r.ErrNotEnoughGas = r.ErrAddressEmpty = r.ErrAddressBadHrp = r.ErrAddressCannotCreate = r.ErrUnexpectedCondition = r.ErrInvariantFailed = r.ErrBadType = r.ErrUnsupportedOperation = r.ErrInvalidArgument = r.Err = void 0;
            class Err extends Error {
                constructor(e, r) {
                    super(e), this.inner = void 0, this.inner = r
                }
                summary() {
                    let e = [];
                    e.push({
                        name: this.name,
                        message: this.message
                    });
                    let r = this.inner;
                    for (; r;) e.push({
                        name: r.name,
                        message: r.message
                    }), r = r.inner;
                    return e
                }
            }
            r.Err = Err;
            r.ErrInvalidArgument = class ErrInvalidArgument extends Err {
                constructor(e, r) {
                    super("Invalid argument: " + e, r)
                }
            };
            r.ErrUnsupportedOperation = class ErrUnsupportedOperation extends Err {
                constructor(e, r = "not specified") {
                    super(`Operation "${e}" not supported. Reason: ${r}`)
                }
            };
            r.ErrBadType = class ErrBadType extends Err {
                constructor(e, r, t) {
                    super(`Bad type of "${e}": ${t}. Expected type: ${r}`)
                }
            };
            r.ErrInvariantFailed = class ErrInvariantFailed extends Err {
                constructor(e) {
                    super(`Invariant failed: [${e}]`)
                }
            };
            r.ErrUnexpectedCondition = class ErrUnexpectedCondition extends Err {
                constructor(e) {
                    super(`Unexpected condition: [${e}]`)
                }
            };
            r.ErrAddressCannotCreate = class ErrAddressCannotCreate extends Err {
                constructor(e, r) {
                    super("Cannot create address from: " + e, r)
                }
            };
            r.ErrAddressBadHrp = class ErrAddressBadHrp extends Err {
                constructor(e, r) {
                    super(`Wrong address HRP. Expected: ${e}, got ${r}`)
                }
            };
            r.ErrAddressEmpty = class ErrAddressEmpty extends Err {
                constructor() {
                    super("Address is empty")
                }
            };
            r.ErrNotEnoughGas = class ErrNotEnoughGas extends Err {
                constructor(e) {
                    super("Not enough gas provided: " + e)
                }
            };
            r.ErrNonceInvalid = class ErrNonceInvalid extends Err {
                constructor(e) {
                    super("Invalid nonce: " + e)
                }
            };
            r.ErrTransactionVersionInvalid = class ErrTransactionVersionInvalid extends Err {
                constructor(e) {
                    super("Invalid transaction version: " + e)
                }
            };
            r.ErrTransactionOptionsInvalid = class ErrTransactionOptionsInvalid extends Err {
                constructor(e) {
                    super("Invalid transaction options: " + e)
                }
            };
            r.ErrSignatureCannotCreate = class ErrSignatureCannotCreate extends Err {
                constructor(e, r) {
                    super("Cannot create signature from: " + e, r)
                }
            };
            r.ErrInvalidFunctionName = class ErrInvalidFunctionName extends Err {
                constructor() {
                    super("Invalid function name")
                }
            };
            r.ErrAsyncTimerAlreadyRunning = class ErrAsyncTimerAlreadyRunning extends Err {
                constructor() {
                    super("Async timer already running")
                }
            };
            r.ErrAsyncTimerAborted = class ErrAsyncTimerAborted extends Err {
                constructor() {
                    super("Async timer aborted")
                }
            };
            r.ErrTransactionWatcherTimeout = class ErrTransactionWatcherTimeout extends Err {
                constructor() {
                    super("TransactionWatcher has timed out")
                }
            };
            r.ErrExpectedTransactionStatusNotReached = class ErrExpectedTransactionStatusNotReached extends Err {
                constructor() {
                    super("Expected transaction status not reached")
                }
            };
            r.ErrExpectedTransactionEventsNotFound = class ErrExpectedTransactionEventsNotFound extends Err {
                constructor() {
                    super("Expected transaction events not found")
                }
            };
            class ErrContract extends Err {
                constructor(e) {
                    super(e)
                }
            }
            r.ErrContract = ErrContract;
            r.ErrContractHasNoAddress = class ErrContractHasNoAddress extends ErrContract {
                constructor() {
                    super("\nThe smart contract has no address set. Make sure you provide the address in the constructor, or call setAddress() appropriately.\nIf you need to recompute the address of the contract, make use of SmartContract.computeAddress() (static method). \n")
                }
            };
            r.ErrMock = class ErrMock extends Err {
                constructor(e) {
                    super(e)
                }
            };
            class ErrTypingSystem extends Err {
                constructor(e) {
                    super(e)
                }
            }
            r.ErrTypingSystem = ErrTypingSystem;
            r.ErrTypeInferenceSystemRequiresRegularJavascriptObjects = class ErrTypeInferenceSystemRequiresRegularJavascriptObjects extends ErrTypingSystem {
                constructor(e) {
                    super(`\nargument at position ${e} seems to be a TypedValue. The automatic type inference system requires regular javascript objects as input.\nThis error might occur when you pass a TypedValue to contract.methods.myFunction([...]). For passing TypedValues instead of regular javascript objects, and bypass the automatic type inference system, use contract.methodsExplicit.myFunction([...]) instead.\nAlso see https://github.com/ElrondNetwork/elrond-sdk-erdjs/pull/187.\n`)
                }
            };
            r.ErrMissingFieldOnStruct = class ErrMissingFieldOnStruct extends Err {
                constructor(e, r) {
                    super(`field ${e} does not exist on struct ${r}`)
                }
            };
            r.ErrMissingFieldOnEnum = class ErrMissingFieldOnEnum extends Err {
                constructor(e, r) {
                    super(`field ${e} does not exist on enum ${r}`)
                }
            };
            r.ErrCannotParseContractResults = class ErrCannotParseContractResults extends Err {
                constructor(e) {
                    super("cannot parse contract results: " + e)
                }
            };
            r.ErrCodec = class ErrCodec extends Err {
                constructor(e) {
                    super(e)
                }
            };
            r.ErrContractInteraction = class ErrContractInteraction extends Err {
                constructor(e) {
                    super(e)
                }
            };
            r.ErrNotImplemented = class ErrNotImplemented extends Err {
                constructor() {
                    super("Method not yet implemented")
                }
            };
            r.ErrInvalidRelayedV1BuilderArguments = class ErrInvalidRelayedV1BuilderArguments extends Err {
                constructor() {
                    super("invalid arguments for relayed v1 builder")
                }
            };
            r.ErrInvalidRelayedV2BuilderArguments = class ErrInvalidRelayedV2BuilderArguments extends Err {
                constructor() {
                    super("invalid arguments for relayed v2 builder")
                }
            };
            r.ErrGasLimitShouldBe0ForInnerTransaction = class ErrGasLimitShouldBe0ForInnerTransaction extends Err {
                constructor() {
                    super("gas limit must be 0 for the inner transaction for relayed v2")
                }
            }
        },
        5605: function(e, r, t) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, r, t, n) {
                    void 0 === n && (n = t), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return r[t]
                        }
                    })
                } : function(e, r, t, n) {
                    void 0 === n && (n = t), e[n] = r[t]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, r) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: r
                    })
                } : function(e, r) {
                    e.default = r
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && n(r, e, t);
                    return s(r, e), r
                };
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.Address = void 0;
            const o = i(t(322)),
                a = i(t(5487)),
                c = "0".repeat(16);
            class Address {
                constructor(e) {
                    if (this.valueHex = "", e) {
                        if (e instanceof Address) return Address.fromAddress(e);
                        if (e instanceof Buffer) return Address.fromBuffer(e);
                        if ("string" == typeof e) return Address.fromString(e);
                        throw new a.ErrAddressCannotCreate(e)
                    }
                }
                static fromAddress(e) {
                    return Address.fromValidHex(e.valueHex)
                }
                static fromValidHex(e) {
                    let r = new Address;
                    return r.valueHex = e, r
                }
                static fromBuffer(e) {
                    if (32 != e.length) throw new a.ErrAddressCannotCreate(e);
                    return Address.fromValidHex(e.toString("hex"))
                }
                static fromString(e) {
                    return Address.isValidHex(e) ? Address.fromValidHex(e) : Address.fromBech32(e)
                }
                static isValidHex(e) {
                    return 32 == Buffer.from(e, "hex").length
                }
                static fromHex(e) {
                    if (!Address.isValidHex(e)) throw new a.ErrAddressCannotCreate(e);
                    return Address.fromValidHex(e)
                }
                static fromBech32(e) {
                    let r;
                    try {
                        r = o.decode(e)
                    } catch (r) {
                        throw new a.ErrAddressCannotCreate(e, r)
                    }
                    let t = r.prefix;
                    if ("erd" != t) throw new a.ErrAddressBadHrp("erd", t);
                    let n = Buffer.from(o.fromWords(r.words));
                    if (32 != n.length) throw new a.ErrAddressCannotCreate(e);
                    return Address.fromValidHex(n.toString("hex"))
                }
                hex() {
                    return this.isEmpty() ? "" : this.valueHex
                }
                bech32() {
                    if (this.isEmpty()) return "";
                    let e = o.toWords(this.pubkey());
                    return o.encode("erd", e)
                }
                pubkey() {
                    return this.isEmpty() ? Buffer.from([]) : Buffer.from(this.valueHex, "hex")
                }
                isEmpty() {
                    return !this.valueHex
                }
                equals(e) {
                    return !!e && this.valueHex == e.valueHex
                }
                toString() {
                    return this.bech32()
                }
                toJSON() {
                    return {
                        bech32: this.bech32(),
                        pubkey: this.hex()
                    }
                }
                static Zero() {
                    return new Address("0".repeat(64))
                }
                isContractAddress() {
                    return this.hex().startsWith(c)
                }
            }
            r.Address = Address
        },
        5646: function(e, r, t) {
            var n;
            ! function(s) {
                "use strict";
                var i, o = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    a = Math.ceil,
                    c = Math.floor,
                    u = "[BigNumber Error] ",
                    l = u + "Number primitive has more than 15 significant digits: ",
                    f = 1e14,
                    d = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    h = 1e9;

                function p(e) {
                    var r = 0 | e;
                    return e > 0 || e === r ? r : r - 1
                }

                function E(e) {
                    for (var r, t, n = 1, s = e.length, i = e[0] + ""; n < s;) {
                        for (t = 14 - (r = e[n++] + "").length; t--; r = "0" + r);
                        i += r
                    }
                    for (s = i.length; 48 === i.charCodeAt(--s););
                    return i.slice(0, s + 1 || 1)
                }

                function g(e, r) {
                    var t, n, s = e.c,
                        i = r.c,
                        o = e.s,
                        a = r.s,
                        c = e.e,
                        u = r.e;
                    if (!o || !a) return null;
                    if (t = s && !s[0], n = i && !i[0], t || n) return t ? n ? 0 : -a : o;
                    if (o != a) return o;
                    if (t = o < 0, n = c == u, !s || !i) return n ? 0 : !s ^ t ? 1 : -1;
                    if (!n) return c > u ^ t ? 1 : -1;
                    for (a = (c = s.length) < (u = i.length) ? c : u, o = 0; o < a; o++)
                        if (s[o] != i[o]) return s[o] > i[o] ^ t ? 1 : -1;
                    return c == u ? 0 : c > u ^ t ? 1 : -1
                }

                function m(e, r, t, n) {
                    if (e < r || e > t || e !== c(e)) throw Error(u + (n || "Argument") + ("number" == typeof e ? e < r || e > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function T(e) {
                    var r = e.c.length - 1;
                    return p(e.e / 14) == r && e.c[r] % 2 != 0
                }

                function A(e, r) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r
                }

                function v(e, r, t) {
                    var n, s;
                    if (r < 0) {
                        for (s = t + "."; ++r; s += t);
                        e = s + e
                    } else if (++r > (n = e.length)) {
                        for (s = t, r -= n; --r; s += t);
                        e += s
                    } else r < n && (e = e.slice(0, r) + "." + e.slice(r));
                    return e
                }(i = function e(r) {
                    var t, n, s, i, y, N, O, _, w, S = L.prototype = {
                            constructor: L,
                            toString: null,
                            valueOf: null
                        },
                        b = new L(1),
                        C = 20,
                        x = 4,
                        I = -7,
                        R = 21,
                        F = -1e7,
                        B = 1e7,
                        D = !1,
                        M = 1,
                        P = 0,
                        H = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: " ",
                            suffix: ""
                        },
                        j = "0123456789abcdefghijklmnopqrstuvwxyz";

                    function L(e, r) {
                        var t, i, a, u, f, d, h, p, E = this;
                        if (!(E instanceof L)) return new L(e, r);
                        if (null == r) {
                            if (e && !0 === e._isBigNumber) return E.s = e.s, void(!e.c || e.e > B ? E.c = E.e = null : e.e < F ? E.c = [E.e = 0] : (E.e = e.e, E.c = e.c.slice()));
                            if ((d = "number" == typeof e) && 0 * e == 0) {
                                if (E.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (u = 0, f = e; f >= 10; f /= 10, u++);
                                    return void(u > B ? E.c = E.e = null : (E.e = u, E.c = [e]))
                                }
                                p = String(e)
                            } else {
                                if (!o.test(p = String(e))) return s(E, p, d);
                                E.s = 45 == p.charCodeAt(0) ? (p = p.slice(1), -1) : 1
                            }(u = p.indexOf(".")) > -1 && (p = p.replace(".", "")), (f = p.search(/e/i)) > 0 ? (u < 0 && (u = f), u += +p.slice(f + 1), p = p.substring(0, f)) : u < 0 && (u = p.length)
                        } else {
                            if (m(r, 2, j.length, "Base"), 10 == r) return $(E = new L(e), C + E.e + 1, x);
                            if (p = String(e), d = "number" == typeof e) {
                                if (0 * e != 0) return s(E, p, d, r);
                                if (E.s = 1 / e < 0 ? (p = p.slice(1), -1) : 1, L.DEBUG && p.replace(/^0\.0*|\./, "").length > 15) throw Error(l + e)
                            } else E.s = 45 === p.charCodeAt(0) ? (p = p.slice(1), -1) : 1;
                            for (t = j.slice(0, r), u = f = 0, h = p.length; f < h; f++)
                                if (t.indexOf(i = p.charAt(f)) < 0) {
                                    if ("." == i) {
                                        if (f > u) {
                                            u = h;
                                            continue
                                        }
                                    } else if (!a && (p == p.toUpperCase() && (p = p.toLowerCase()) || p == p.toLowerCase() && (p = p.toUpperCase()))) {
                                        a = !0, f = -1, u = 0;
                                        continue
                                    }
                                    return s(E, String(e), d, r)
                                } d = !1, (u = (p = n(p, r, 10, E.s)).indexOf(".")) > -1 ? p = p.replace(".", "") : u = p.length
                        }
                        for (f = 0; 48 === p.charCodeAt(f); f++);
                        for (h = p.length; 48 === p.charCodeAt(--h););
                        if (p = p.slice(f, ++h)) {
                            if (h -= f, d && L.DEBUG && h > 15 && (e > 9007199254740991 || e !== c(e))) throw Error(l + E.s * e);
                            if ((u = u - f - 1) > B) E.c = E.e = null;
                            else if (u < F) E.c = [E.e = 0];
                            else {
                                if (E.e = u, E.c = [], f = (u + 1) % 14, u < 0 && (f += 14), f < h) {
                                    for (f && E.c.push(+p.slice(0, f)), h -= 14; f < h;) E.c.push(+p.slice(f, f += 14));
                                    f = 14 - (p = p.slice(f)).length
                                } else f -= h;
                                for (; f--; p += "0");
                                E.c.push(+p)
                            }
                        } else E.c = [E.e = 0]
                    }

                    function U(e, r, t, n) {
                        var s, i, o, a, c;
                        if (null == t ? t = x : m(t, 0, 8), !e.c) return e.toString();
                        if (s = e.c[0], o = e.e, null == r) c = E(e.c), c = 1 == n || 2 == n && (o <= I || o >= R) ? A(c, o) : v(c, o, "0");
                        else if (i = (e = $(new L(e), r, t)).e, a = (c = E(e.c)).length, 1 == n || 2 == n && (r <= i || i <= I)) {
                            for (; a < r; c += "0", a++);
                            c = A(c, i)
                        } else if (r -= o, c = v(c, i, "0"), i + 1 > a) {
                            if (--r > 0)
                                for (c += "."; r--; c += "0");
                        } else if ((r += i - a) > 0)
                            for (i + 1 == a && (c += "."); r--; c += "0");
                        return e.s < 0 && s ? "-" + c : c
                    }

                    function G(e, r) {
                        for (var t, n = 1, s = new L(e[0]); n < e.length; n++) {
                            if (!(t = new L(e[n])).s) {
                                s = t;
                                break
                            }
                            r.call(s, t) && (s = t)
                        }
                        return s
                    }

                    function V(e, r, t) {
                        for (var n = 1, s = r.length; !r[--s]; r.pop());
                        for (s = r[0]; s >= 10; s /= 10, n++);
                        return (t = n + 14 * t - 1) > B ? e.c = e.e = null : t < F ? e.c = [e.e = 0] : (e.e = t, e.c = r), e
                    }

                    function $(e, r, t, n) {
                        var s, i, o, u, l, h, p, E = e.c,
                            g = d;
                        if (E) {
                            e: {
                                for (s = 1, u = E[0]; u >= 10; u /= 10, s++);
                                if ((i = r - s) < 0) i += 14,
                                o = r,
                                p = (l = E[h = 0]) / g[s - o - 1] % 10 | 0;
                                else if ((h = a((i + 1) / 14)) >= E.length) {
                                    if (!n) break e;
                                    for (; E.length <= h; E.push(0));
                                    l = p = 0, s = 1, o = (i %= 14) - 14 + 1
                                } else {
                                    for (l = u = E[h], s = 1; u >= 10; u /= 10, s++);
                                    p = (o = (i %= 14) - 14 + s) < 0 ? 0 : l / g[s - o - 1] % 10 | 0
                                }
                                if (n = n || r < 0 || null != E[h + 1] || (o < 0 ? l : l % g[s - o - 1]), n = t < 4 ? (p || n) && (0 == t || t == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == t || n || 6 == t && (i > 0 ? o > 0 ? l / g[s - o] : 0 : E[h - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !E[0]) return E.length = 0,
                                n ? (r -= e.e + 1, E[0] = g[(14 - r % 14) % 14], e.e = -r || 0) : E[0] = e.e = 0,
                                e;
                                if (0 == i ? (E.length = h, u = 1, h--) : (E.length = h + 1, u = g[14 - i], E[h] = o > 0 ? c(l / g[s - o] % g[o]) * u : 0), n)
                                    for (;;) {
                                        if (0 == h) {
                                            for (i = 1, o = E[0]; o >= 10; o /= 10, i++);
                                            for (o = E[0] += u, u = 1; o >= 10; o /= 10, u++);
                                            i != u && (e.e++, E[0] == f && (E[0] = 1));
                                            break
                                        }
                                        if (E[h] += u, E[h] != f) break;
                                        E[h--] = 0, u = 1
                                    }
                                for (i = E.length; 0 === E[--i]; E.pop());
                            }
                            e.e > B ? e.c = e.e = null : e.e < F && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function k(e) {
                        var r, t = e.e;
                        return null === t ? e.toString() : (r = E(e.c), r = t <= I || t >= R ? A(r, t) : v(r, t, "0"), e.s < 0 ? "-" + r : r)
                    }
                    return L.clone = e, L.ROUND_UP = 0, L.ROUND_DOWN = 1, L.ROUND_CEIL = 2, L.ROUND_FLOOR = 3, L.ROUND_HALF_UP = 4, L.ROUND_HALF_DOWN = 5, L.ROUND_HALF_EVEN = 6, L.ROUND_HALF_CEIL = 7, L.ROUND_HALF_FLOOR = 8, L.EUCLID = 9, L.config = L.set = function(e) {
                        var r, t;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(u + "Object expected: " + e);
                            if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (m(t = e[r], 0, h, r), C = t), e.hasOwnProperty(r = "ROUNDING_MODE") && (m(t = e[r], 0, 8, r), x = t), e.hasOwnProperty(r = "EXPONENTIAL_AT") && ((t = e[r]) && t.pop ? (m(t[0], -h, 0, r), m(t[1], 0, h, r), I = t[0], R = t[1]) : (m(t, -h, h, r), I = -(R = t < 0 ? -t : t))), e.hasOwnProperty(r = "RANGE"))
                                if ((t = e[r]) && t.pop) m(t[0], -h, -1, r), m(t[1], 1, h, r), F = t[0], B = t[1];
                                else {
                                    if (m(t, -h, h, r), !t) throw Error(u + r + " cannot be zero: " + t);
                                    F = -(B = t < 0 ? -t : t)
                                } if (e.hasOwnProperty(r = "CRYPTO")) {
                                if ((t = e[r]) !== !!t) throw Error(u + r + " not true or false: " + t);
                                if (t) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw D = !t, Error(u + "crypto unavailable");
                                    D = t
                                } else D = t
                            }
                            if (e.hasOwnProperty(r = "MODULO_MODE") && (m(t = e[r], 0, 9, r), M = t), e.hasOwnProperty(r = "POW_PRECISION") && (m(t = e[r], 0, h, r), P = t), e.hasOwnProperty(r = "FORMAT")) {
                                if ("object" != typeof(t = e[r])) throw Error(u + r + " not an object: " + t);
                                H = t
                            }
                            if (e.hasOwnProperty(r = "ALPHABET")) {
                                if ("string" != typeof(t = e[r]) || /^.?$|[+\-.\s]|(.).*\1/.test(t)) throw Error(u + r + " invalid: " + t);
                                j = t
                            }
                        }
                        return {
                            DECIMAL_PLACES: C,
                            ROUNDING_MODE: x,
                            EXPONENTIAL_AT: [I, R],
                            RANGE: [F, B],
                            CRYPTO: D,
                            MODULO_MODE: M,
                            POW_PRECISION: P,
                            FORMAT: H,
                            ALPHABET: j
                        }
                    }, L.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!L.DEBUG) return !0;
                        var r, t, n = e.c,
                            s = e.e,
                            i = e.s;
                        e: if ("[object Array]" == {}.toString.call(n)) {
                            if ((1 === i || -1 === i) && s >= -h && s <= h && s === c(s)) {
                                if (0 === n[0]) {
                                    if (0 === s && 1 === n.length) return !0;
                                    break e
                                }
                                if ((r = (s + 1) % 14) < 1 && (r += 14), String(n[0]).length == r) {
                                    for (r = 0; r < n.length; r++)
                                        if ((t = n[r]) < 0 || t >= f || t !== c(t)) break e;
                                    if (0 !== t) return !0
                                }
                            }
                        } else if (null === n && null === s && (null === i || 1 === i || -1 === i)) return !0;
                        throw Error(u + "Invalid BigNumber: " + e)
                    }, L.maximum = L.max = function() {
                        return G(arguments, S.lt)
                    }, L.minimum = L.min = function() {
                        return G(arguments, S.gt)
                    }, L.random = (i = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return c(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var r, t, n, s, o, l = 0,
                            f = [],
                            p = new L(b);
                        if (null == e ? e = C : m(e, 0, h), s = a(e / 14), D)
                            if (crypto.getRandomValues) {
                                for (r = crypto.getRandomValues(new Uint32Array(s *= 2)); l < s;)(o = 131072 * r[l] + (r[l + 1] >>> 11)) >= 9e15 ? (t = crypto.getRandomValues(new Uint32Array(2)), r[l] = t[0], r[l + 1] = t[1]) : (f.push(o % 1e14), l += 2);
                                l = s / 2
                            } else {
                                if (!crypto.randomBytes) throw D = !1, Error(u + "crypto unavailable");
                                for (r = crypto.randomBytes(s *= 7); l < s;)(o = 281474976710656 * (31 & r[l]) + 1099511627776 * r[l + 1] + 4294967296 * r[l + 2] + 16777216 * r[l + 3] + (r[l + 4] << 16) + (r[l + 5] << 8) + r[l + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, l) : (f.push(o % 1e14), l += 7);
                                l = s / 7
                            } if (!D)
                            for (; l < s;)(o = i()) < 9e15 && (f[l++] = o % 1e14);
                        for (e %= 14, (s = f[--l]) && e && (o = d[14 - e], f[l] = c(s / o) * o); 0 === f[l]; f.pop(), l--);
                        if (l < 0) f = [n = 0];
                        else {
                            for (n = -1; 0 === f[0]; f.splice(0, 1), n -= 14);
                            for (l = 1, o = f[0]; o >= 10; o /= 10, l++);
                            l < 14 && (n -= 14 - l)
                        }
                        return p.e = n, p.c = f, p
                    }), L.sum = function() {
                        for (var e = 1, r = arguments, t = new L(r[0]); e < r.length;) t = t.plus(r[e++]);
                        return t
                    }, n = function() {
                        function e(e, r, t, n) {
                            for (var s, i, o = [0], a = 0, c = e.length; a < c;) {
                                for (i = o.length; i--; o[i] *= r);
                                for (o[0] += n.indexOf(e.charAt(a++)), s = 0; s < o.length; s++) o[s] > t - 1 && (null == o[s + 1] && (o[s + 1] = 0), o[s + 1] += o[s] / t | 0, o[s] %= t)
                            }
                            return o.reverse()
                        }
                        return function(r, n, s, i, o) {
                            var a, c, u, l, f, d, h, p, g = r.indexOf("."),
                                m = C,
                                T = x;
                            for (g >= 0 && (l = P, P = 0, r = r.replace(".", ""), d = (p = new L(n)).pow(r.length - g), P = l, p.c = e(v(E(d.c), d.e, "0"), 10, s, "0123456789"), p.e = p.c.length), u = l = (h = e(r, n, s, o ? (a = j, "0123456789") : (a = "0123456789", j))).length; 0 == h[--l]; h.pop());
                            if (!h[0]) return a.charAt(0);
                            if (g < 0 ? --u : (d.c = h, d.e = u, d.s = i, h = (d = t(d, p, m, T, s)).c, f = d.r, u = d.e), g = h[c = u + m + 1], l = s / 2, f = f || c < 0 || null != h[c + 1], f = T < 4 ? (null != g || f) && (0 == T || T == (d.s < 0 ? 3 : 2)) : g > l || g == l && (4 == T || f || 6 == T && 1 & h[c - 1] || T == (d.s < 0 ? 8 : 7)), c < 1 || !h[0]) r = f ? v(a.charAt(1), -m, a.charAt(0)) : a.charAt(0);
                            else {
                                if (h.length = c, f)
                                    for (--s; ++h[--c] > s;) h[c] = 0, c || (++u, h = [1].concat(h));
                                for (l = h.length; !h[--l];);
                                for (g = 0, r = ""; g <= l; r += a.charAt(h[g++]));
                                r = v(r, u, a.charAt(0))
                            }
                            return r
                        }
                    }(), t = function() {
                        function e(e, r, t) {
                            var n, s, i, o, a = 0,
                                c = e.length,
                                u = r % 1e7,
                                l = r / 1e7 | 0;
                            for (e = e.slice(); c--;) a = ((s = u * (i = e[c] % 1e7) + (n = l * i + (o = e[c] / 1e7 | 0) * u) % 1e7 * 1e7 + a) / t | 0) + (n / 1e7 | 0) + l * o, e[c] = s % t;
                            return a && (e = [a].concat(e)), e
                        }

                        function r(e, r, t, n) {
                            var s, i;
                            if (t != n) i = t > n ? 1 : -1;
                            else
                                for (s = i = 0; s < t; s++)
                                    if (e[s] != r[s]) {
                                        i = e[s] > r[s] ? 1 : -1;
                                        break
                                    } return i
                        }

                        function t(e, r, t, n) {
                            for (var s = 0; t--;) e[t] -= s, s = e[t] < r[t] ? 1 : 0, e[t] = s * n + e[t] - r[t];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(n, s, i, o, a) {
                            var u, l, d, h, E, g, m, T, A, v, y, N, O, _, w, S, b, C = n.s == s.s ? 1 : -1,
                                x = n.c,
                                I = s.c;
                            if (!(x && x[0] && I && I[0])) return new L(n.s && s.s && (x ? !I || x[0] != I[0] : I) ? x && 0 == x[0] || !I ? 0 * C : C / 0 : NaN);
                            for (A = (T = new L(C)).c = [], C = i + (l = n.e - s.e) + 1, a || (a = f, l = p(n.e / 14) - p(s.e / 14), C = C / 14 | 0), d = 0; I[d] == (x[d] || 0); d++);
                            if (I[d] > (x[d] || 0) && l--, C < 0) A.push(1), h = !0;
                            else {
                                for (_ = x.length, S = I.length, d = 0, C += 2, (E = c(a / (I[0] + 1))) > 1 && (I = e(I, E, a), x = e(x, E, a), S = I.length, _ = x.length), O = S, y = (v = x.slice(0, S)).length; y < S; v[y++] = 0);
                                b = I.slice(), b = [0].concat(b), w = I[0], I[1] >= a / 2 && w++;
                                do {
                                    if (E = 0, (u = r(I, v, S, y)) < 0) {
                                        if (N = v[0], S != y && (N = N * a + (v[1] || 0)), (E = c(N / w)) > 1)
                                            for (E >= a && (E = a - 1), m = (g = e(I, E, a)).length, y = v.length; 1 == r(g, v, m, y);) E--, t(g, S < m ? b : I, m, a), m = g.length, u = 1;
                                        else 0 == E && (u = E = 1), m = (g = I.slice()).length;
                                        if (m < y && (g = [0].concat(g)), t(v, g, y, a), y = v.length, -1 == u)
                                            for (; r(I, v, S, y) < 1;) E++, t(v, S < y ? b : I, y, a), y = v.length
                                    } else 0 === u && (E++, v = [0]);
                                    A[d++] = E, v[0] ? v[y++] = x[O] || 0 : (v = [x[O]], y = 1)
                                } while ((O++ < _ || null != v[0]) && C--);
                                h = null != v[0], A[0] || A.splice(0, 1)
                            }
                            if (a == f) {
                                for (d = 1, C = A[0]; C >= 10; C /= 10, d++);
                                $(T, i + (T.e = d + 14 * l - 1) + 1, o, h)
                            } else T.e = l, T.r = +h;
                            return T
                        }
                    }(), y = /^(-?)0([xbo])(?=\w[\w.]*$)/i, N = /^([^.]+)\.$/, O = /^\.([^.]+)$/, _ = /^-?(Infinity|NaN)$/, w = /^\s*\+(?=[\w.])|^\s+|\s+$/g, s = function(e, r, t, n) {
                        var s, i = t ? r : r.replace(w, "");
                        if (_.test(i)) e.s = isNaN(i) ? null : i < 0 ? -1 : 1;
                        else {
                            if (!t && (i = i.replace(y, (function(e, r, t) {
                                    return s = "x" == (t = t.toLowerCase()) ? 16 : "b" == t ? 2 : 8, n && n != s ? e : r
                                })), n && (s = n, i = i.replace(N, "$1").replace(O, "0.$1")), r != i)) return new L(i, s);
                            if (L.DEBUG) throw Error(u + "Not a" + (n ? " base " + n : "") + " number: " + r);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, S.absoluteValue = S.abs = function() {
                        var e = new L(this);
                        return e.s < 0 && (e.s = 1), e
                    }, S.comparedTo = function(e, r) {
                        return g(this, new L(e, r))
                    }, S.decimalPlaces = S.dp = function(e, r) {
                        var t, n, s, i = this;
                        if (null != e) return m(e, 0, h), null == r ? r = x : m(r, 0, 8), $(new L(i), e + i.e + 1, r);
                        if (!(t = i.c)) return null;
                        if (n = 14 * ((s = t.length - 1) - p(this.e / 14)), s = t[s])
                            for (; s % 10 == 0; s /= 10, n--);
                        return n < 0 && (n = 0), n
                    }, S.dividedBy = S.div = function(e, r) {
                        return t(this, new L(e, r), C, x)
                    }, S.dividedToIntegerBy = S.idiv = function(e, r) {
                        return t(this, new L(e, r), 0, 1)
                    }, S.exponentiatedBy = S.pow = function(e, r) {
                        var t, n, s, i, o, l, f, d, h = this;
                        if ((e = new L(e)).c && !e.isInteger()) throw Error(u + "Exponent not an integer: " + k(e));
                        if (null != r && (r = new L(r)), o = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return d = new L(Math.pow(+k(h), o ? 2 - T(e) : +k(e))), r ? d.mod(r) : d;
                        if (l = e.s < 0, r) {
                            if (r.c ? !r.c[0] : !r.s) return new L(NaN);
                            (n = !l && h.isInteger() && r.isInteger()) && (h = h.mod(r))
                        } else {
                            if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || o && h.c[1] >= 24e7 : h.c[0] < 8e13 || o && h.c[0] <= 9999975e7))) return i = h.s < 0 && T(e) ? -0 : 0, h.e > -1 && (i = 1 / i), new L(l ? 1 / i : i);
                            P && (i = a(P / 14 + 2))
                        }
                        for (o ? (t = new L(.5), l && (e.s = 1), f = T(e)) : f = (s = Math.abs(+k(e))) % 2, d = new L(b);;) {
                            if (f) {
                                if (!(d = d.times(h)).c) break;
                                i ? d.c.length > i && (d.c.length = i) : n && (d = d.mod(r))
                            }
                            if (s) {
                                if (0 === (s = c(s / 2))) break;
                                f = s % 2
                            } else if ($(e = e.times(t), e.e + 1, 1), e.e > 14) f = T(e);
                            else {
                                if (0 === (s = +k(e))) break;
                                f = s % 2
                            }
                            h = h.times(h), i ? h.c && h.c.length > i && (h.c.length = i) : n && (h = h.mod(r))
                        }
                        return n ? d : (l && (d = b.div(d)), r ? d.mod(r) : i ? $(d, P, x, void 0) : d)
                    }, S.integerValue = function(e) {
                        var r = new L(this);
                        return null == e ? e = x : m(e, 0, 8), $(r, r.e + 1, e)
                    }, S.isEqualTo = S.eq = function(e, r) {
                        return 0 === g(this, new L(e, r))
                    }, S.isFinite = function() {
                        return !!this.c
                    }, S.isGreaterThan = S.gt = function(e, r) {
                        return g(this, new L(e, r)) > 0
                    }, S.isGreaterThanOrEqualTo = S.gte = function(e, r) {
                        return 1 === (r = g(this, new L(e, r))) || 0 === r
                    }, S.isInteger = function() {
                        return !!this.c && p(this.e / 14) > this.c.length - 2
                    }, S.isLessThan = S.lt = function(e, r) {
                        return g(this, new L(e, r)) < 0
                    }, S.isLessThanOrEqualTo = S.lte = function(e, r) {
                        return -1 === (r = g(this, new L(e, r))) || 0 === r
                    }, S.isNaN = function() {
                        return !this.s
                    }, S.isNegative = function() {
                        return this.s < 0
                    }, S.isPositive = function() {
                        return this.s > 0
                    }, S.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, S.minus = function(e, r) {
                        var t, n, s, i, o = this,
                            a = o.s;
                        if (r = (e = new L(e, r)).s, !a || !r) return new L(NaN);
                        if (a != r) return e.s = -r, o.plus(e);
                        var c = o.e / 14,
                            u = e.e / 14,
                            l = o.c,
                            d = e.c;
                        if (!c || !u) {
                            if (!l || !d) return l ? (e.s = -r, e) : new L(d ? o : NaN);
                            if (!l[0] || !d[0]) return d[0] ? (e.s = -r, e) : new L(l[0] ? o : 3 == x ? -0 : 0)
                        }
                        if (c = p(c), u = p(u), l = l.slice(), a = c - u) {
                            for ((i = a < 0) ? (a = -a, s = l) : (u = c, s = d), s.reverse(), r = a; r--; s.push(0));
                            s.reverse()
                        } else
                            for (n = (i = (a = l.length) < (r = d.length)) ? a : r, a = r = 0; r < n; r++)
                                if (l[r] != d[r]) {
                                    i = l[r] < d[r];
                                    break
                                } if (i && (s = l, l = d, d = s, e.s = -e.s), (r = (n = d.length) - (t = l.length)) > 0)
                            for (; r--; l[t++] = 0);
                        for (r = f - 1; n > a;) {
                            if (l[--n] < d[n]) {
                                for (t = n; t && !l[--t]; l[t] = r);
                                --l[t], l[n] += f
                            }
                            l[n] -= d[n]
                        }
                        for (; 0 == l[0]; l.splice(0, 1), --u);
                        return l[0] ? V(e, l, u) : (e.s = 3 == x ? -1 : 1, e.c = [e.e = 0], e)
                    }, S.modulo = S.mod = function(e, r) {
                        var n, s, i = this;
                        return e = new L(e, r), !i.c || !e.s || e.c && !e.c[0] ? new L(NaN) : !e.c || i.c && !i.c[0] ? new L(i) : (9 == M ? (s = e.s, e.s = 1, n = t(i, e, 0, 3), e.s = s, n.s *= s) : n = t(i, e, 0, M), (e = i.minus(n.times(e))).c[0] || 1 != M || (e.s = i.s), e)
                    }, S.multipliedBy = S.times = function(e, r) {
                        var t, n, s, i, o, a, c, u, l, d, h, E, g, m, T = this,
                            A = T.c,
                            v = (e = new L(e, r)).c;
                        if (!(A && v && A[0] && v[0])) return !T.s || !e.s || A && !A[0] && !v || v && !v[0] && !A ? e.c = e.e = e.s = null : (e.s *= T.s, A && v ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (n = p(T.e / 14) + p(e.e / 14), e.s *= T.s, (c = A.length) < (d = v.length) && (g = A, A = v, v = g, s = c, c = d, d = s), s = c + d, g = []; s--; g.push(0));
                        for (m = f, 1e7, s = d; --s >= 0;) {
                            for (t = 0, h = v[s] % 1e7, E = v[s] / 1e7 | 0, i = s + (o = c); i > s;) t = ((u = h * (u = A[--o] % 1e7) + (a = E * u + (l = A[o] / 1e7 | 0) * h) % 1e7 * 1e7 + g[i] + t) / m | 0) + (a / 1e7 | 0) + E * l, g[i--] = u % m;
                            g[i] = t
                        }
                        return t ? ++n : g.splice(0, 1), V(e, g, n)
                    }, S.negated = function() {
                        var e = new L(this);
                        return e.s = -e.s || null, e
                    }, S.plus = function(e, r) {
                        var t, n = this,
                            s = n.s;
                        if (r = (e = new L(e, r)).s, !s || !r) return new L(NaN);
                        if (s != r) return e.s = -r, n.minus(e);
                        var i = n.e / 14,
                            o = e.e / 14,
                            a = n.c,
                            c = e.c;
                        if (!i || !o) {
                            if (!a || !c) return new L(s / 0);
                            if (!a[0] || !c[0]) return c[0] ? e : new L(a[0] ? n : 0 * s)
                        }
                        if (i = p(i), o = p(o), a = a.slice(), s = i - o) {
                            for (s > 0 ? (o = i, t = c) : (s = -s, t = a), t.reverse(); s--; t.push(0));
                            t.reverse()
                        }
                        for ((s = a.length) - (r = c.length) < 0 && (t = c, c = a, a = t, r = s), s = 0; r;) s = (a[--r] = a[r] + c[r] + s) / f | 0, a[r] = f === a[r] ? 0 : a[r] % f;
                        return s && (a = [s].concat(a), ++o), V(e, a, o)
                    }, S.precision = S.sd = function(e, r) {
                        var t, n, s, i = this;
                        if (null != e && e !== !!e) return m(e, 1, h), null == r ? r = x : m(r, 0, 8), $(new L(i), e, r);
                        if (!(t = i.c)) return null;
                        if (n = 14 * (s = t.length - 1) + 1, s = t[s]) {
                            for (; s % 10 == 0; s /= 10, n--);
                            for (s = t[0]; s >= 10; s /= 10, n++);
                        }
                        return e && i.e + 1 > n && (n = i.e + 1), n
                    }, S.shiftedBy = function(e) {
                        return m(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, S.squareRoot = S.sqrt = function() {
                        var e, r, n, s, i, o = this,
                            a = o.c,
                            c = o.s,
                            u = o.e,
                            l = C + 4,
                            f = new L("0.5");
                        if (1 !== c || !a || !a[0]) return new L(!c || c < 0 && (!a || a[0]) ? NaN : a ? o : 1 / 0);
                        if (0 == (c = Math.sqrt(+k(o))) || c == 1 / 0 ? (((r = E(a)).length + u) % 2 == 0 && (r += "0"), c = Math.sqrt(+r), u = p((u + 1) / 2) - (u < 0 || u % 2), n = new L(r = c == 1 / 0 ? "5e" + u : (r = c.toExponential()).slice(0, r.indexOf("e") + 1) + u)) : n = new L(c + ""), n.c[0])
                            for ((c = (u = n.e) + l) < 3 && (c = 0);;)
                                if (i = n, n = f.times(i.plus(t(o, i, l, 1))), E(i.c).slice(0, c) === (r = E(n.c)).slice(0, c)) {
                                    if (n.e < u && --c, "9999" != (r = r.slice(c - 3, c + 1)) && (s || "4999" != r)) {
                                        +r && (+r.slice(1) || "5" != r.charAt(0)) || ($(n, n.e + C + 2, 1), e = !n.times(n).eq(o));
                                        break
                                    }
                                    if (!s && ($(i, i.e + C + 2, 0), i.times(i).eq(o))) {
                                        n = i;
                                        break
                                    }
                                    l += 4, c += 4, s = 1
                                } return $(n, n.e + C + 1, x, e)
                    }, S.toExponential = function(e, r) {
                        return null != e && (m(e, 0, h), e++), U(this, e, r, 1)
                    }, S.toFixed = function(e, r) {
                        return null != e && (m(e, 0, h), e = e + this.e + 1), U(this, e, r)
                    }, S.toFormat = function(e, r, t) {
                        var n, s = this;
                        if (null == t) null != e && r && "object" == typeof r ? (t = r, r = null) : e && "object" == typeof e ? (t = e, e = r = null) : t = H;
                        else if ("object" != typeof t) throw Error(u + "Argument not an object: " + t);
                        if (n = s.toFixed(e, r), s.c) {
                            var i, o = n.split("."),
                                a = +t.groupSize,
                                c = +t.secondaryGroupSize,
                                l = t.groupSeparator || "",
                                f = o[0],
                                d = o[1],
                                h = s.s < 0,
                                p = h ? f.slice(1) : f,
                                E = p.length;
                            if (c && (i = a, a = c, c = i, E -= i), a > 0 && E > 0) {
                                for (i = E % a || a, f = p.substr(0, i); i < E; i += a) f += l + p.substr(i, a);
                                c > 0 && (f += l + p.slice(i)), h && (f = "-" + f)
                            }
                            n = d ? f + (t.decimalSeparator || "") + ((c = +t.fractionGroupSize) ? d.replace(new RegExp("\\d{" + c + "}\\B", "g"), "$&" + (t.fractionGroupSeparator || "")) : d) : f
                        }
                        return (t.prefix || "") + n + (t.suffix || "")
                    }, S.toFraction = function(e) {
                        var r, n, s, i, o, a, c, l, f, h, p, g, m = this,
                            T = m.c;
                        if (null != e && (!(c = new L(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(b))) throw Error(u + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + k(c));
                        if (!T) return new L(m);
                        for (r = new L(b), f = n = new L(b), s = l = new L(b), g = E(T), o = r.e = g.length - m.e - 1, r.c[0] = d[(a = o % 14) < 0 ? 14 + a : a], e = !e || c.comparedTo(r) > 0 ? o > 0 ? r : f : c, a = B, B = 1 / 0, c = new L(g), l.c[0] = 0; h = t(c, r, 0, 1), 1 != (i = n.plus(h.times(s))).comparedTo(e);) n = s, s = i, f = l.plus(h.times(i = f)), l = i, r = c.minus(h.times(i = r)), c = i;
                        return i = t(e.minus(n), s, 0, 1), l = l.plus(i.times(f)), n = n.plus(i.times(s)), l.s = f.s = m.s, p = t(f, s, o *= 2, x).minus(m).abs().comparedTo(t(l, n, o, x).minus(m).abs()) < 1 ? [f, s] : [l, n], B = a, p
                    }, S.toNumber = function() {
                        return +k(this)
                    }, S.toPrecision = function(e, r) {
                        return null != e && m(e, 1, h), U(this, e, r, 2)
                    }, S.toString = function(e) {
                        var r, t = this,
                            s = t.s,
                            i = t.e;
                        return null === i ? s ? (r = "Infinity", s < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = i <= I || i >= R ? A(E(t.c), i) : v(E(t.c), i, "0") : 10 === e ? r = v(E((t = $(new L(t), C + i + 1, x)).c), t.e, "0") : (m(e, 2, j.length, "Base"), r = n(v(E(t.c), i, "0"), 10, e, s, !0)), s < 0 && t.c[0] && (r = "-" + r)), r
                    }, S.valueOf = S.toJSON = function() {
                        return k(this)
                    }, S._isBigNumber = !0, null != r && L.set(r), L
                }()).default = i.BigNumber = i, void 0 === (n = function() {
                    return i
                }.call(r, t, r, e)) || (e.exports = n)
            }()
        },
        6176: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.ESDT_TRANSFER_VALUE = r.MULTI_ESDTNFT_TRANSFER_FUNCTION_NAME = r.ESDTNFT_TRANSFER_FUNCTION_NAME = r.ESDT_TRANSFER_FUNCTION_NAME = r.ESDT_TRANSFER_GAS_LIMIT = r.TRANSACTION_VERSION_TX_HASH_SIGN = r.TRANSACTION_VERSION_DEFAULT = r.TRANSACTION_OPTIONS_TX_HASH_SIGN = r.TRANSACTION_OPTIONS_DEFAULT = r.TRANSACTION_MIN_GAS_PRICE = void 0, r.TRANSACTION_MIN_GAS_PRICE = 1e9, r.TRANSACTION_OPTIONS_DEFAULT = 0, r.TRANSACTION_OPTIONS_TX_HASH_SIGN = 1, r.TRANSACTION_VERSION_DEFAULT = 1, r.TRANSACTION_VERSION_TX_HASH_SIGN = 2, r.ESDT_TRANSFER_GAS_LIMIT = 5e5, r.ESDT_TRANSFER_FUNCTION_NAME = "ESDTTransfer", r.ESDTNFT_TRANSFER_FUNCTION_NAME = "ESDTNFTTransfer", r.MULTI_ESDTNFT_TRANSFER_FUNCTION_NAME = "MultiESDTNFTTransfer", r.ESDT_TRANSFER_VALUE = "0"
        },
        7172: function(e, r, t) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, r, t, n) {
                    void 0 === n && (n = t), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return r[t]
                        }
                    })
                } : function(e, r, t, n) {
                    void 0 === n && (n = t), e[n] = r[t]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, r) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: r
                    })
                } : function(e, r) {
                    e.default = r
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && n(r, e, t);
                    return s(r, e), r
                };
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.AsyncTimer = void 0;
            const o = i(t(5487)),
                a = t(5487),
                c = t(6175);
            r.AsyncTimer = class AsyncTimer {
                constructor(e) {
                    this.timeoutHandle = null, this.rejectionFunc = null, this.name = e, this.correlationTag = 0
                }
                start(e) {
                    if (this.timeoutHandle) throw new o.ErrAsyncTimerAlreadyRunning;
                    return this.correlationTag++, c.Logger.trace(`AsyncTimer[${this.name}'${this.correlationTag}].start()`), new Promise((r, t) => {
                        this.rejectionFunc = t;
                        this.timeoutHandle = setTimeout(() => {
                            this.rejectionFunc = null, this.stop(), r()
                        }, e)
                    })
                }
                abort() {
                    c.Logger.trace(`AsyncTimer[${this.name}'${this.correlationTag}].abort()`), this.rejectionFunc && (this.rejectionFunc(new a.ErrAsyncTimerAborted), this.rejectionFunc = null), this.stop()
                }
                stop() {
                    this.isStopped() || (c.Logger.trace(`AsyncTimer[${this.name}'${this.correlationTag}].stop()`), this.timeoutHandle && (clearTimeout(this.timeoutHandle), this.timeoutHandle = null))
                }
                isStopped() {
                    return !this.timeoutHandle
                }
            }
        },
        9041: function(e, r, t) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, r, t, n) {
                    void 0 === n && (n = t), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return r[t]
                        }
                    })
                } : function(e, r, t, n) {
                    void 0 === n && (n = t), e[n] = r[t]
                }),
                s = this && this.__exportStar || function(e, r) {
                    for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(r, t) || n(r, e, t)
                };
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), t(9042), s(t(9043), r), s(t(9044), r), s(t(5487), r), s(t(9045), r), s(t(5605), r), s(t(7172), r), s(t(9046), r), s(t(6033), r), s(t(9075), r), s(t(5843), r), s(t(9076), r), s(t(6175), r), s(t(7173), r), s(t(9077), r), s(t(5612), r), s(t(7183), r), s(t(7182), r), s(t(6495), r), s(t(9086), r), s(t(9087), r)
        },
        9042: function(e, r, t) {
            "use strict";
            global.Buffer || (global.Buffer = t(12).Buffer)
        },
        9043: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            })
        },
        9044: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            })
        },
        9045: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.Account = void 0;
            const n = t(5605);
            r.Account = class Account {
                constructor(e) {
                    this.address = new n.Address, this.nonce = 0, this.balance = "0", this.address = e
                }
                update(e) {
                    this.nonce = e.nonce, this.balance = e.balance
                }
                incrementNonce() {
                    this.nonce = this.nonce.valueOf() + 1
                }
                getNonceThenIncrement() {
                    let e = this.nonce;
                    return this.nonce = this.nonce.valueOf() + 1, e
                }
                toJSON() {
                    return {
                        address: this.address.bech32(),
                        nonce: this.nonce.valueOf(),
                        balance: this.balance.toString()
                    }
                }
            }
        },
        9046: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.GasEstimator = r.DefaultGasConfiguration = void 0, r.DefaultGasConfiguration = {
                minGasLimit: 5e4,
                gasPerDataByte: 1500,
                gasCostESDTTransfer: 2e5,
                gasCostESDTNFTTransfer: 2e5,
                gasCostESDTNFTMultiTransfer: 2e5
            };
            r.GasEstimator = class GasEstimator {
                constructor(e) {
                    this.gasConfiguration = e || r.DefaultGasConfiguration
                }
                forEGLDTransfer(e) {
                    return this.gasConfiguration.minGasLimit + this.gasConfiguration.gasPerDataByte * e
                }
                forESDTTransfer(e) {
                    return this.gasConfiguration.minGasLimit + this.gasConfiguration.gasCostESDTTransfer + this.gasConfiguration.gasPerDataByte * e + 1e5
                }
                forESDTNFTTransfer(e) {
                    return this.gasConfiguration.minGasLimit + this.gasConfiguration.gasCostESDTNFTTransfer + this.gasConfiguration.gasPerDataByte * e + 8e5
                }
                forMultiESDTNFTTransfer(e, r) {
                    return this.gasConfiguration.minGasLimit + (this.gasConfiguration.gasCostESDTNFTMultiTransfer + 8e5) * r + this.gasConfiguration.gasPerDataByte * e
                }
            }
        },
        9071: function(e, r, t) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, r, t, n) {
                    void 0 === n && (n = t), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return r[t]
                        }
                    })
                } : function(e, r, t, n) {
                    void 0 === n && (n = t), e[n] = r[t]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, r) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: r
                    })
                } : function(e, r) {
                    e.default = r
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && n(r, e, t);
                    return s(r, e), r
                };
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.Hash = void 0;
            const o = i(t(5487));
            class Hash {
                constructor(e) {
                    if (e)
                        if (e instanceof Buffer) this.hash = e;
                        else {
                            if ("string" != typeof e) throw new o.ErrBadType("hash", "buffer | string", e);
                            this.hash = Buffer.from(e, "hex")
                        }
                    else this.hash = Buffer.from([])
                }
                static empty() {
                    return new Hash(Buffer.from([]))
                }
                isEmpty() {
                    return 0 == this.hash.length
                }
                toString() {
                    return this.hex()
                }
                hex() {
                    return this.hash.toString("hex")
                }
                valueOf() {
                    return this.hash
                }
            }
            r.Hash = Hash
        }
    }
]);