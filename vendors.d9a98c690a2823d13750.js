(window.webpackJsonp = window.webpackJsonp || []).push([
    [74], {
        2368: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, "ApiError", (function() {
                return Rs
            })), i.d(t, "AptosAccount", (function() {
                return U
            })), i.d(t, "AptosClient", (function() {
                return Ss
            })), i.d(t, "BCS", (function() {
                return $t
            })), i.d(t, "CoinClient", (function() {
                return Cs
            })), i.d(t, "FailedTransactionError", (function() {
                return Us
            })), i.d(t, "FaucetClient", (function() {
                return ks
            })), i.d(t, "HexString", (function() {
                return b
            })), i.d(t, "TokenClient", (function() {
                return Is
            })), i.d(t, "TokenTypes", (function() {
                return Ms
            })), i.d(t, "TransactionBuilder", (function() {
                return ws
            })), i.d(t, "TransactionBuilderABI", (function() {
                return Ts
            })), i.d(t, "TransactionBuilderEd25519", (function() {
                return vs
            })), i.d(t, "TransactionBuilderMultiEd25519", (function() {
                return bs
            })), i.d(t, "TransactionBuilderRemoteABI", (function() {
                return Es
            })), i.d(t, "TxnBuilderTypes", (function() {
                return Nt
            })), i.d(t, "TypeTagParser", (function() {
                return hs
            })), i.d(t, "Types", (function() {
                return q
            })), i.d(t, "WaitForTransactionError", (function() {
                return zs
            })), i.d(t, "derivePath", (function() {
                return v
            }));
            var s = i(73),
                r = i.n(s),
                n = i(277),
                a = i(2333),
                o = i(228),
                c = i(1190),
                u = i(1191),
                l = i(544),
                d = i.n(l),
                p = i(1192),
                h = i.n(p),
                y = Object.defineProperty,
                g = Object.getOwnPropertyDescriptor,
                f = (e, t) => {
                    for (var i in t) y(e, i, {
                        get: t[i],
                        enumerable: !0
                    })
                },
                m = (e, t, i, s) => {
                    for (var r, n = s > 1 ? void 0 : s ? g(t, i) : t, a = e.length - 1; a >= 0; a--)(r = e[a]) && (n = (s ? r(t, i, n) : r(n)) || n);
                    return s && n && y(t, i, n), n
                },
                _ = /^m(\/[0-9]+')+$/,
                w = e => e.replace("'", ""),
                v = (e, t, i = 2147483648) => {
                    if (!(e => !!_.test(e) && !e.split("/").slice(1).map(w).some(Number.isNaN))(e)) throw new Error("Invalid derivation path");
                    const {
                        key: s,
                        chainCode: r
                    } = (e => {
                        const t = c.hmac.create(u.sha512, "ed25519 seed").update(Object(o.hexToBytes)(e)).digest();
                        return {
                            key: t.slice(0, 32),
                            chainCode: t.slice(32)
                        }
                    })(t);
                    return e.split("/").slice(1).map(w).map(e => parseInt(e, 10)).reduce((e, t) => (({
                        key: e,
                        chainCode: t
                    }, i) => {
                        const s = new ArrayBuffer(4);
                        new DataView(s).setUint32(0, i);
                        const r = new Uint8Array(s),
                            n = new Uint8Array([0]),
                            a = new Uint8Array([...n, ...e, ...r]),
                            o = c.hmac.create(u.sha512, t).update(a).digest();
                        return {
                            key: o.slice(0, 32),
                            chainCode: o.slice(32)
                        }
                    })(e, t + i), {
                        key: s,
                        chainCode: r
                    })
                },
                b = class {
                    static fromBuffer(e) {
                        return b.fromUint8Array(e)
                    }
                    static fromUint8Array(e) {
                        return new b(Object(o.bytesToHex)(e))
                    }
                    static ensure(e) {
                        return "string" == typeof e ? new b(e) : e
                    }
                    constructor(e) {
                        e.startsWith("0x") ? this.hexString = e : this.hexString = "0x" + e
                    }
                    hex() {
                        return this.hexString
                    }
                    noPrefix() {
                        return this.hexString.slice(2)
                    }
                    toString() {
                        return this.hex()
                    }
                    toShortString() {
                        return "0x" + this.hexString.replace(/^0x0*/, "")
                    }
                    toUint8Array() {
                        return Uint8Array.from(Object(o.hexToBytes)(this.noPrefix()))
                    }
                };
            async function T(e) {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            }
            var E = "0x1::aptos_coin::AptosCoin";

            function A(e) {
                let t, i, s;
                return "object" == typeof e ? (t = e.hashFunction, i = e.ttlMs, s = e.tags) : t = e, (e, r, n) => {
                    if (null != n.value) n.value = R(n.value, t, i, s);
                    else {
                        if (null == n.get) throw new Error("Only put a Memoize() decorator on a method or get accessor.");
                        n.get = R(n.get, t, i, s)
                    }
                }
            }
            var S = new Map;

            function R(e, t, i = 0, s) {
                const r = Symbol("__memoized_map__");
                return function(...n) {
                    let a;
                    const o = this;
                    o.hasOwnProperty(r) || Object.defineProperty(o, r, {
                        configurable: !1,
                        enumerable: !1,
                        writable: !1,
                        value: new Map
                    });
                    const c = o[r];
                    if (Array.isArray(s))
                        for (const e of s) S.has(e) ? S.get(e).push(c) : S.set(e, [c]);
                    if (t || n.length > 0 || i > 0) {
                        let s;
                        s = !0 === t ? n.map(e => e.toString()).join("!") : t ? t.apply(o, n) : n[0];
                        const r = s + "__timestamp";
                        let u = !1;
                        if (i > 0)
                            if (c.has(r)) {
                                const e = c.get(r);
                                u = Date.now() - e > i
                            } else u = !0;
                        c.has(s) && !u ? a = c.get(s) : (a = e.apply(o, n), c.set(s, a), i > 0 && c.set(r, Date.now()))
                    } else {
                        const t = o;
                        c.has(t) ? a = c.get(t) : (a = e.apply(o, n), c.set(t, a))
                    }
                    return a
                }
            }
            var z = class {
                    static fromAptosAccountObject(e) {
                        return new z(b.ensure(e.privateKeyHex).toUint8Array(), e.address)
                    }
                    static fromDerivePath(e, t) {
                        if (!z.isValidPath(e)) throw new Error("Invalid derivation path");
                        const i = t.trim().split(/\s+/).map(e => e.toLowerCase()).join(" "),
                            {
                                key: s
                            } = v(e, Object(o.bytesToHex)(a.mnemonicToSeedSync(i)));
                        return new z(s)
                    }
                    constructor(e, t) {
                        this.signingKey = e ? r.a.sign.keyPair.fromSeed(e.slice(0, 32)) : r.a.sign.keyPair(), this.accountAddress = b.ensure(t || this.authKey().hex())
                    }
                    address() {
                        return this.accountAddress
                    }
                    authKey() {
                        const e = n.sha3_256.create();
                        return e.update(this.signingKey.publicKey), e.update("\0"), b.fromUint8Array(e.digest())
                    }
                    pubKey() {
                        return b.fromUint8Array(this.signingKey.publicKey)
                    }
                    signBuffer(e) {
                        const t = r.a.sign(e, this.signingKey.secretKey);
                        return b.fromUint8Array(t.slice(0, 64))
                    }
                    signHexString(e) {
                        const t = b.ensure(e).toUint8Array();
                        return this.signBuffer(t)
                    }
                    toPrivateKeyObject() {
                        return {
                            address: this.address().hex(),
                            publicKeyHex: this.pubKey().hex(),
                            privateKeyHex: b.fromUint8Array(this.signingKey.secretKey.slice(0, 32)).hex()
                        }
                    }
                },
                U = z;
            U.isValidPath = e => !!/^m\/44'\/637'\/[0-9]+'\/[0-9]+'\/[0-9]+'+$/.test(e), m([A()], U.prototype, "authKey", 1);
            var q = {};
            f(q, {
                $AccountData: () => ie,
                $AccountSignature: () => se,
                $AccountSignature_Ed25519Signature: () => re,
                $AccountSignature_MultiEd25519Signature: () => ne,
                $Address: () => ae,
                $AptosError: () => oe,
                $AptosErrorCode: () => ce,
                $Block: () => ue,
                $BlockMetadataTransaction: () => le,
                $DecodedTableData: () => de,
                $DeleteModule: () => he,
                $DeleteResource: () => ye,
                $DeleteTableItem: () => ge,
                $DeletedTableData: () => pe,
                $DirectWriteSet: () => fe,
                $Ed25519Signature: () => me,
                $EncodeSubmissionRequest: () => _e,
                $EntryFunctionId: () => we,
                $EntryFunctionPayload: () => ve,
                $Event: () => be,
                $EventGuid: () => Te,
                $GasEstimation: () => Ee,
                $GenesisPayload: () => Ae,
                $GenesisPayload_WriteSetPayload: () => Se,
                $GenesisTransaction: () => Re,
                $HashValue: () => ze,
                $HealthCheckSuccess: () => Ue,
                $HexEncodedBytes: () => qe,
                $IdentifierWrapper: () => Be,
                $IndexResponse: () => xe,
                $ModuleBundlePayload: () => Ce,
                $MoveAbility: () => ke,
                $MoveFunction: () => Ie,
                $MoveFunctionGenericTypeParam: () => Me,
                $MoveFunctionVisibility: () => Pe,
                $MoveModule: () => Fe,
                $MoveModuleBytecode: () => Ne,
                $MoveModuleId: () => De,
                $MoveResource: () => He,
                $MoveScriptBytecode: () => $e,
                $MoveStruct: () => Oe,
                $MoveStructField: () => We,
                $MoveStructGenericTypeParam: () => Le,
                $MoveStructTag: () => Ve,
                $MoveStructValue: () => Ge,
                $MoveType: () => Ke,
                $MoveValue: () => je,
                $MultiAgentSignature: () => Je,
                $MultiEd25519Signature: () => Ze,
                $PendingTransaction: () => Xe,
                $RoleType: () => Qe,
                $ScriptPayload: () => Ye,
                $ScriptWriteSet: () => et,
                $StateCheckpointTransaction: () => tt,
                $SubmitTransactionRequest: () => it,
                $TableItemRequest: () => st,
                $Transaction: () => rt,
                $TransactionPayload: () => lt,
                $TransactionPayload_EntryFunctionPayload: () => dt,
                $TransactionPayload_ModuleBundlePayload: () => pt,
                $TransactionPayload_ScriptPayload: () => ht,
                $TransactionSignature: () => ft,
                $TransactionSignature_Ed25519Signature: () => mt,
                $TransactionSignature_MultiAgentSignature: () => _t,
                $TransactionSignature_MultiEd25519Signature: () => wt,
                $Transaction_BlockMetadataTransaction: () => nt,
                $Transaction_GenesisTransaction: () => at,
                $Transaction_PendingTransaction: () => ot,
                $Transaction_StateCheckpointTransaction: () => ct,
                $Transaction_UserTransaction: () => ut,
                $TransactionsBatchSingleSubmissionFailure: () => yt,
                $TransactionsBatchSubmissionResult: () => gt,
                $U128: () => vt,
                $U64: () => bt,
                $UserTransaction: () => Tt,
                $VersionedEvent: () => Et,
                $WriteModule: () => At,
                $WriteResource: () => St,
                $WriteSet: () => Rt,
                $WriteSetChange: () => qt,
                $WriteSetChange_DeleteModule: () => Bt,
                $WriteSetChange_DeleteResource: () => xt,
                $WriteSetChange_DeleteTableItem: () => Ct,
                $WriteSetChange_WriteModule: () => kt,
                $WriteSetChange_WriteResource: () => It,
                $WriteSetChange_WriteTableItem: () => Mt,
                $WriteSetPayload: () => Pt,
                $WriteSet_DirectWriteSet: () => zt,
                $WriteSet_ScriptWriteSet: () => Ut,
                $WriteTableItem: () => Ft,
                AccountsService: () => V,
                ApiError: () => x,
                AptosErrorCode: () => Y,
                AptosGeneratedClient: () => X,
                BaseHttpRequest: () => B,
                BlocksService: () => G,
                CancelError: () => C,
                CancelablePromise: () => k,
                EventsService: () => K,
                GeneralService: () => j,
                MoveFunctionVisibility: () => ee,
                OpenAPI: () => Q,
                RoleType: () => te,
                TablesService: () => J,
                TransactionsService: () => Z
            });
            var B = class {
                    constructor(e) {
                        this.config = e
                    }
                },
                x = class extends Error {
                    constructor(e, t, i) {
                        super(i), this.name = "ApiError", this.url = t.url, this.status = t.status, this.statusText = t.statusText, this.body = t.body, this.request = e
                    }
                },
                C = class extends Error {
                    constructor(e) {
                        super(e), this.name = "CancelError"
                    }
                    get isCancelled() {
                        return !0
                    }
                },
                k = class {
                    constructor(e) {
                        this._isResolved = !1, this._isRejected = !1, this._isCancelled = !1, this._cancelHandlers = [], this._promise = new Promise((t, i) => {
                            this._resolve = t, this._reject = i;
                            const s = e => {
                                this._isResolved || this._isRejected || this._isCancelled || this._cancelHandlers.push(e)
                            };
                            return Object.defineProperty(s, "isResolved", {
                                get: () => this._isResolved
                            }), Object.defineProperty(s, "isRejected", {
                                get: () => this._isRejected
                            }), Object.defineProperty(s, "isCancelled", {
                                get: () => this._isCancelled
                            }), e(e => {
                                var t;
                                this._isResolved || this._isRejected || this._isCancelled || (this._isResolved = !0, null == (t = this._resolve) || t.call(this, e))
                            }, e => {
                                var t;
                                this._isResolved || this._isRejected || this._isCancelled || (this._isRejected = !0, null == (t = this._reject) || t.call(this, e))
                            }, s)
                        })
                    }
                    then(e, t) {
                        return this._promise.then(e, t)
                    } catch (e) {
                        return this._promise.catch(e)
                    } finally(e) {
                        return this._promise.finally(e)
                    }
                    cancel() {
                        var e;
                        if (!(this._isResolved || this._isRejected || this._isCancelled)) {
                            if (this._isCancelled = !0, this._cancelHandlers.length) try {
                                for (const e of this._cancelHandlers) e()
                            } catch (e) {
                                return void console.warn("Cancellation threw an error", e)
                            }
                            this._cancelHandlers.length = 0, null == (e = this._reject) || e.call(this, new C("Request aborted"))
                        }
                    }
                    get isCancelled() {
                        return this._isCancelled
                    }
                };
            Symbol.toStringTag;
            var I = class {
                    constructor(e = new Map) {
                        this.jar = e
                    }
                    setCookie(e, t) {
                        var i;
                        const s = e.origin.toLowerCase();
                        this.jar.has(s) || this.jar.set(s, []);
                        const r = I.parse(t);
                        this.jar.set(s, [...(null == (i = this.jar.get(s)) ? void 0 : i.filter(e => e.name !== r.name)) || [], r])
                    }
                    getCookies(e) {
                        var t;
                        const i = e.origin.toLowerCase();
                        return this.jar.get(i) && (null == (t = this.jar.get(i)) ? void 0 : t.filter(e => !e.expires || e.expires > new Date)) || []
                    }
                    static parse(e) {
                        if ("string" != typeof e) throw new Error("argument str must be a string");
                        const t = e.split(";").map(e => e.trim());
                        let i;
                        if (!(t.length > 0)) throw new Error("Invalid cookie");
                        {
                            const [e, s] = t[0].split("=");
                            if (!e || !s) throw new Error("Invalid cookie");
                            i = {
                                name: e,
                                value: s
                            }
                        }
                        return t.slice(1).forEach(e => {
                            const [t, s] = e.split("=");
                            if (!t.trim()) throw new Error("Invalid cookie");
                            const r = t.toLowerCase(),
                                n = "'" === (null == s ? void 0 : s.charAt(0)) || '"' === (null == s ? void 0 : s.charAt(0)) ? null == s ? void 0 : s.slice(1, -1) : s;
                            if ("expires" === r && (i.expires = new Date(n)), "path" === r && (i.path = n), "samesite" === r) {
                                if ("Lax" !== n && "None" !== n && "Strict" !== n) throw new Error("Invalid cookie SameSite value");
                                i.sameSite = n
                            }
                            "secure" === r && (i.secure = !0)
                        }), i
                    }
                },
                M = new I;
            d.a.interceptors.response.use(e => (Array.isArray(e.headers["set-cookie"]) && e.headers["set-cookie"].forEach(t => {
                M.setCookie(new URL(e.config.url), t)
            }), e)), d.a.interceptors.request.use((function(e) {
                const t = M.getCookies(new URL(e.url));
                return (null == t ? void 0 : t.length) > 0 && e.headers && (e.headers.cookie = t.map(e => `${e.name}=${e.value}`).join("; ")), e
            }));
            var P = e => null != e,
                F = e => "string" == typeof e,
                N = e => F(e) && "" !== e,
                D = e => "object" == typeof e && "string" == typeof e.type && "function" == typeof e.stream && "function" == typeof e.arrayBuffer && "function" == typeof e.constructor && "string" == typeof e.constructor.name && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]),
                H = e => {
                    const t = [],
                        i = (e, s) => {
                            P(s) && (Array.isArray(s) ? s.forEach(t => {
                                i(e, t)
                            }) : "object" == typeof s ? Object.entries(s).forEach(([t, s]) => {
                                i(`${e}[${t}]`, s)
                            }) : ((e, i) => {
                                t.push(`${encodeURIComponent(e)}=${encodeURIComponent(String(i))}`)
                            })(e, s))
                        };
                    return Object.entries(e).forEach(([e, t]) => {
                        i(e, t)
                    }), t.length > 0 ? "?" + t.join("&") : ""
                },
                $ = async (e, t) => "function" == typeof t ? t(e) : t, O = async (e, t, i) => {
                    const s = await $(t, e.TOKEN),
                        r = await $(t, e.USERNAME),
                        n = await $(t, e.PASSWORD),
                        a = await $(t, e.HEADERS),
                        o = "function" == typeof(null == i ? void 0 : i.getHeaders) && (null == i ? void 0 : i.getHeaders()) || {},
                        c = Object.entries({
                            Accept: "application/json",
                            ...a,
                            ...t.headers,
                            ...o
                        }).filter(([e, t]) => P(t)).reduce((e, [t, i]) => ({
                            ...e,
                            [t]: String(i)
                        }), {});
                    if (N(s) && (c.Authorization = "Bearer " + s), N(r) && N(n)) {
                        const e = btoa(`${r}:${n}`);
                        c.Authorization = "Basic " + e
                    }
                    return t.body && (t.mediaType ? c["Content-Type"] = t.mediaType : D(t.body) ? c["Content-Type"] = t.body.type || "application/octet-stream" : F(t.body) ? c["Content-Type"] = "text/plain" : t.body instanceof h.a || (c["Content-Type"] = "application/json")), c
                }, W = (e, t) => new k(async (i, s, r) => {
                    try {
                        const s = ((e, t) => {
                                const i = e.ENCODE_PATH || encodeURI,
                                    s = t.url.replace("{api-version}", e.VERSION).replace(/{(.*?)}/g, (e, s) => {
                                        var r;
                                        return (null == (r = t.path) ? void 0 : r.hasOwnProperty(s)) ? i(String(t.path[s])) : e
                                    }),
                                    r = `${e.BASE}${s}`;
                                return t.query ? `${r}${H(t.query)}` : r
                            })(e, t),
                            a = (e => {
                                if (e.formData) {
                                    const t = new h.a,
                                        i = (e, i) => {
                                            F(i) || D(i) ? t.append(e, i) : t.append(e, JSON.stringify(i))
                                        };
                                    return Object.entries(e.formData).filter(([e, t]) => P(t)).forEach(([e, t]) => {
                                        Array.isArray(t) ? t.forEach(t => i(e, t)) : i(e, t)
                                    }), t
                                }
                            })(t),
                            o = (e => {
                                if (e.body) return e.body
                            })(t),
                            c = await O(e, t, a);
                        if (!r.isCancelled) {
                            const u = await (async (e, t, i, s, r, n, a) => {
                                    const o = d.a.CancelToken.source(),
                                        c = {
                                            url: i,
                                            headers: n,
                                            data: null != s ? s : r,
                                            method: t.method,
                                            withCredentials: e.WITH_CREDENTIALS,
                                            cancelToken: o.token
                                        };
                                    Object.keys(e.HEADERS || {}).filter(e => "accept" === e.toLowerCase()).map(t => e.HEADERS[t]).includes("application/x-bcs") && (c.responseType = "arraybuffer"), a(() => o.cancel("The user aborted a request."));
                                    try {
                                        return await d.a.request(c)
                                    } catch (e) {
                                        const t = e;
                                        if (t.response) return t.response;
                                        throw e
                                    }
                                })(e, t, s, o, a, c, r),
                                l = (e => {
                                    if (204 !== e.status) return e.data
                                })(u),
                                p = ((e, t) => {
                                    if (t) {
                                        const i = e.headers[t];
                                        if (F(i)) return i
                                    }
                                })(u, t.responseHeader),
                                h = {
                                    url: s,
                                    ok: (n = u.status, n >= 200 && n < 300),
                                    status: u.status,
                                    statusText: u.statusText,
                                    body: null != p ? p : l
                                };
                            ((e, t) => {
                                const i = {
                                    400: "Bad Request",
                                    401: "Unauthorized",
                                    403: "Forbidden",
                                    404: "Not Found",
                                    500: "Internal Server Error",
                                    502: "Bad Gateway",
                                    503: "Service Unavailable",
                                    ...e.errors
                                } [t.status];
                                if (i) throw new x(e, t, i);
                                if (!t.ok) throw new x(e, t, "Generic Error")
                            })(t, h), i(h.body)
                        }
                    } catch (e) {
                        s(e)
                    }
                    var n
                }), L = class extends B {
                    constructor(e) {
                        super(e)
                    }
                    request(e) {
                        return W(this.config, e)
                    }
                }, V = class {
                    constructor(e) {
                        this.httpRequest = e
                    }
                    getAccount(e, t) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/accounts/{address}",
                            path: {
                                address: e
                            },
                            query: {
                                ledger_version: t
                            }
                        })
                    }
                    getAccountResources(e, t) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/accounts/{address}/resources",
                            path: {
                                address: e
                            },
                            query: {
                                ledger_version: t
                            }
                        })
                    }
                    getAccountModules(e, t) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/accounts/{address}/modules",
                            path: {
                                address: e
                            },
                            query: {
                                ledger_version: t
                            }
                        })
                    }
                    getAccountResource(e, t, i) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/accounts/{address}/resource/{resource_type}",
                            path: {
                                address: e,
                                resource_type: t
                            },
                            query: {
                                ledger_version: i
                            }
                        })
                    }
                    getAccountModule(e, t, i) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/accounts/{address}/module/{module_name}",
                            path: {
                                address: e,
                                module_name: t
                            },
                            query: {
                                ledger_version: i
                            }
                        })
                    }
                }, G = class {
                    constructor(e) {
                        this.httpRequest = e
                    }
                    getBlockByHeight(e, t) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/blocks/by_height/{block_height}",
                            path: {
                                block_height: e
                            },
                            query: {
                                with_transactions: t
                            }
                        })
                    }
                    getBlockByVersion(e, t) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/blocks/by_version/{version}",
                            path: {
                                version: e
                            },
                            query: {
                                with_transactions: t
                            }
                        })
                    }
                }, K = class {
                    constructor(e) {
                        this.httpRequest = e
                    }
                    getEventsByCreationNumber(e, t, i, s) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/accounts/{address}/events/{creation_number}",
                            path: {
                                address: e,
                                creation_number: t
                            },
                            query: {
                                start: i,
                                limit: s
                            }
                        })
                    }
                    getEventsByEventHandle(e, t, i, s, r) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/accounts/{address}/events/{event_handle}/{field_name}",
                            path: {
                                address: e,
                                event_handle: t,
                                field_name: i
                            },
                            query: {
                                start: s,
                                limit: r
                            }
                        })
                    }
                }, j = class {
                    constructor(e) {
                        this.httpRequest = e
                    }
                    spec() {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/spec"
                        })
                    }
                    healthy(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/-/healthy",
                            query: {
                                duration_secs: e
                            }
                        })
                    }
                    getLedgerInfo() {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/"
                        })
                    }
                }, J = class {
                    constructor(e) {
                        this.httpRequest = e
                    }
                    getTableItem(e, t, i) {
                        return this.httpRequest.request({
                            method: "POST",
                            url: "/tables/{table_handle}/item",
                            path: {
                                table_handle: e
                            },
                            query: {
                                ledger_version: i
                            },
                            body: t,
                            mediaType: "application/json"
                        })
                    }
                }, Z = class {
                    constructor(e) {
                        this.httpRequest = e
                    }
                    getTransactions(e, t) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/transactions",
                            query: {
                                start: e,
                                limit: t
                            }
                        })
                    }
                    submitTransaction(e) {
                        return this.httpRequest.request({
                            method: "POST",
                            url: "/transactions",
                            body: e,
                            mediaType: "application/json"
                        })
                    }
                    getTransactionByHash(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/transactions/by_hash/{txn_hash}",
                            path: {
                                txn_hash: e
                            }
                        })
                    }
                    getTransactionByVersion(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/transactions/by_version/{txn_version}",
                            path: {
                                txn_version: e
                            }
                        })
                    }
                    getAccountTransactions(e, t, i) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/accounts/{address}/transactions",
                            path: {
                                address: e
                            },
                            query: {
                                start: t,
                                limit: i
                            }
                        })
                    }
                    submitBatchTransactions(e) {
                        return this.httpRequest.request({
                            method: "POST",
                            url: "/transactions/batch",
                            body: e,
                            mediaType: "application/json"
                        })
                    }
                    simulateTransaction(e, t, i, s) {
                        return this.httpRequest.request({
                            method: "POST",
                            url: "/transactions/simulate",
                            query: {
                                estimate_max_gas_amount: t,
                                estimate_gas_unit_price: i,
                                estimate_prioritized_gas_unit_price: s
                            },
                            body: e,
                            mediaType: "application/json"
                        })
                    }
                    encodeSubmission(e) {
                        return this.httpRequest.request({
                            method: "POST",
                            url: "/transactions/encode_submission",
                            body: e,
                            mediaType: "application/json"
                        })
                    }
                    estimateGasPrice() {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/estimate_gas_price"
                        })
                    }
                }, X = class {
                    constructor(e, t = L) {
                        var i, s, r, n;
                        this.request = new t({
                            BASE: null != (i = null == e ? void 0 : e.BASE) ? i : "/v1",
                            VERSION: null != (s = null == e ? void 0 : e.VERSION) ? s : "1.2.0",
                            WITH_CREDENTIALS: null != (r = null == e ? void 0 : e.WITH_CREDENTIALS) && r,
                            CREDENTIALS: null != (n = null == e ? void 0 : e.CREDENTIALS) ? n : "include",
                            TOKEN: null == e ? void 0 : e.TOKEN,
                            USERNAME: null == e ? void 0 : e.USERNAME,
                            PASSWORD: null == e ? void 0 : e.PASSWORD,
                            HEADERS: null == e ? void 0 : e.HEADERS,
                            ENCODE_PATH: null == e ? void 0 : e.ENCODE_PATH
                        }), this.accounts = new V(this.request), this.blocks = new G(this.request), this.events = new K(this.request), this.general = new j(this.request), this.tables = new J(this.request), this.transactions = new Z(this.request)
                    }
                }, Q = {
                    BASE: "/v1",
                    VERSION: "1.2.0",
                    WITH_CREDENTIALS: !1,
                    CREDENTIALS: "include",
                    TOKEN: void 0,
                    USERNAME: void 0,
                    PASSWORD: void 0,
                    HEADERS: void 0,
                    ENCODE_PATH: void 0
                }, Y = (e => (e.ACCOUNT_NOT_FOUND = "account_not_found", e.RESOURCE_NOT_FOUND = "resource_not_found", e.MODULE_NOT_FOUND = "module_not_found", e.STRUCT_FIELD_NOT_FOUND = "struct_field_not_found", e.VERSION_NOT_FOUND = "version_not_found", e.TRANSACTION_NOT_FOUND = "transaction_not_found", e.TABLE_ITEM_NOT_FOUND = "table_item_not_found", e.BLOCK_NOT_FOUND = "block_not_found", e.VERSION_PRUNED = "version_pruned", e.BLOCK_PRUNED = "block_pruned", e.INVALID_INPUT = "invalid_input", e.INVALID_TRANSACTION_UPDATE = "invalid_transaction_update", e.SEQUENCE_NUMBER_TOO_OLD = "sequence_number_too_old", e.VM_ERROR = "vm_error", e.HEALTH_CHECK_FAILED = "health_check_failed", e.MEMPOOL_IS_FULL = "mempool_is_full", e.INTERNAL_ERROR = "internal_error", e.WEB_FRAMEWORK_ERROR = "web_framework_error", e.BCS_NOT_SUPPORTED = "bcs_not_supported", e.API_DISABLED = "api_disabled", e))(Y || {}), ee = (e => (e.PRIVATE = "private", e.PUBLIC = "public", e.FRIEND = "friend", e))(ee || {}), te = (e => (e.VALIDATOR = "validator", e.FULL_NODE = "full_node", e))(te || {}), ie = {
                    description: "Account data\n\n    A simplified version of the onchain Account resource",
                    properties: {
                        sequence_number: {
                            type: "U64",
                            isRequired: !0
                        },
                        authentication_key: {
                            type: "HexEncodedBytes",
                            isRequired: !0
                        }
                    }
                }, se = {
                    type: "one-of",
                    description: "Account signature scheme\n\n    The account signature scheme allows you to have two types of accounts:\n\n    1. A single Ed25519 key account, one private key\n    2. A k-of-n multi-Ed25519 key account, multiple private keys, such that k-of-n must sign a transaction.",
                    contains: [{
                        type: "AccountSignature_Ed25519Signature"
                    }, {
                        type: "AccountSignature_MultiEd25519Signature"
                    }]
                }, re = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "Ed25519Signature"
                    }]
                }, ne = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "MultiEd25519Signature"
                    }]
                }, ae = {
                    type: "string",
                    description: "A hex encoded 32 byte Aptos account address.\n\n    This is represented in a string as a 64 character hex string, sometimes\n    shortened by stripping leading 0s, and adding a 0x.\n\n    For example, address 0x0000000000000000000000000000000000000000000000000000000000000001 is represented as 0x1.\n    ",
                    format: "hex"
                }, oe = {
                    description: "This is the generic struct we use for all API errors, it contains a string\n    message and an Aptos API specific error code.",
                    properties: {
                        message: {
                            type: "string",
                            description: "A message describing the error",
                            isRequired: !0
                        },
                        error_code: {
                            type: "AptosErrorCode",
                            isRequired: !0
                        },
                        vm_error_code: {
                            type: "number",
                            description: "A code providing VM error details when submitting transactions to the VM",
                            format: "uint64"
                        }
                    }
                }, ce = {
                    type: "Enum"
                }, ue = {
                    description: "A Block with or without transactions\n\n    This contains the information about a transactions along with\n    associated transactions if requested",
                    properties: {
                        block_height: {
                            type: "U64",
                            isRequired: !0
                        },
                        block_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        block_timestamp: {
                            type: "U64",
                            isRequired: !0
                        },
                        first_version: {
                            type: "U64",
                            isRequired: !0
                        },
                        last_version: {
                            type: "U64",
                            isRequired: !0
                        },
                        transactions: {
                            type: "array",
                            contains: {
                                type: "Transaction"
                            }
                        }
                    }
                }, le = {
                    description: "A block metadata transaction\n\n    This signifies the beginning of a block, and contains information\n    about the specific block",
                    properties: {
                        version: {
                            type: "U64",
                            isRequired: !0
                        },
                        hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        state_change_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        event_root_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        state_checkpoint_hash: {
                            type: "HashValue"
                        },
                        gas_used: {
                            type: "U64",
                            isRequired: !0
                        },
                        success: {
                            type: "boolean",
                            description: "Whether the transaction was successful",
                            isRequired: !0
                        },
                        vm_status: {
                            type: "string",
                            description: "The VM status of the transaction, can tell useful information in a failure",
                            isRequired: !0
                        },
                        accumulator_root_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        changes: {
                            type: "array",
                            contains: {
                                type: "WriteSetChange"
                            },
                            isRequired: !0
                        },
                        id: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        epoch: {
                            type: "U64",
                            isRequired: !0
                        },
                        round: {
                            type: "U64",
                            isRequired: !0
                        },
                        events: {
                            type: "array",
                            contains: {
                                type: "Event"
                            },
                            isRequired: !0
                        },
                        previous_block_votes_bitvec: {
                            type: "array",
                            contains: {
                                type: "number",
                                format: "uint8"
                            },
                            isRequired: !0
                        },
                        proposer: {
                            type: "Address",
                            isRequired: !0
                        },
                        failed_proposer_indices: {
                            type: "array",
                            contains: {
                                type: "number",
                                format: "uint32"
                            },
                            isRequired: !0
                        },
                        timestamp: {
                            type: "U64",
                            isRequired: !0
                        }
                    }
                }, de = {
                    description: "Decoded table data",
                    properties: {
                        key: {
                            description: "Key of table in JSON",
                            properties: {},
                            isRequired: !0
                        },
                        key_type: {
                            type: "string",
                            description: "Type of key",
                            isRequired: !0
                        },
                        value: {
                            description: "Value of table in JSON",
                            properties: {},
                            isRequired: !0
                        },
                        value_type: {
                            type: "string",
                            description: "Type of value",
                            isRequired: !0
                        }
                    }
                }, pe = {
                    description: "Deleted table data",
                    properties: {
                        key: {
                            description: "Deleted key",
                            properties: {},
                            isRequired: !0
                        },
                        key_type: {
                            type: "string",
                            description: "Deleted key type",
                            isRequired: !0
                        }
                    }
                }, he = {
                    description: "Delete a module",
                    properties: {
                        address: {
                            type: "Address",
                            isRequired: !0
                        },
                        state_key_hash: {
                            type: "string",
                            description: "State key hash",
                            isRequired: !0
                        },
                        module: {
                            type: "MoveModuleId",
                            isRequired: !0
                        }
                    }
                }, ye = {
                    description: "Delete a resource",
                    properties: {
                        address: {
                            type: "Address",
                            isRequired: !0
                        },
                        state_key_hash: {
                            type: "string",
                            description: "State key hash",
                            isRequired: !0
                        },
                        resource: {
                            type: "MoveStructTag",
                            isRequired: !0
                        }
                    }
                }, ge = {
                    description: "Delete a table item",
                    properties: {
                        state_key_hash: {
                            type: "string",
                            isRequired: !0
                        },
                        handle: {
                            type: "HexEncodedBytes",
                            isRequired: !0
                        },
                        key: {
                            type: "HexEncodedBytes",
                            isRequired: !0
                        },
                        data: {
                            type: "DeletedTableData"
                        }
                    }
                }, fe = {
                    properties: {
                        changes: {
                            type: "array",
                            contains: {
                                type: "WriteSetChange"
                            },
                            isRequired: !0
                        },
                        events: {
                            type: "array",
                            contains: {
                                type: "Event"
                            },
                            isRequired: !0
                        }
                    }
                }, me = {
                    description: "A single Ed25519 signature",
                    properties: {
                        public_key: {
                            type: "HexEncodedBytes",
                            isRequired: !0
                        },
                        signature: {
                            type: "HexEncodedBytes",
                            isRequired: !0
                        }
                    }
                }, _e = {
                    description: "Request to encode a submission",
                    properties: {
                        sender: {
                            type: "Address",
                            isRequired: !0
                        },
                        sequence_number: {
                            type: "U64",
                            isRequired: !0
                        },
                        max_gas_amount: {
                            type: "U64",
                            isRequired: !0
                        },
                        gas_unit_price: {
                            type: "U64",
                            isRequired: !0
                        },
                        expiration_timestamp_secs: {
                            type: "U64",
                            isRequired: !0
                        },
                        payload: {
                            type: "TransactionPayload",
                            isRequired: !0
                        },
                        secondary_signers: {
                            type: "array",
                            contains: {
                                type: "Address"
                            }
                        }
                    }
                }, we = {
                    type: "string",
                    description: "Entry function id is string representation of a entry function defined on-chain.\n\n    Format: `{address}::{module name}::{function name}`\n\n    Both `module name` and `function name` are case-sensitive.\n    "
                }, ve = {
                    description: "Payload which runs a single entry function",
                    properties: {
                        function: {
                            type: "EntryFunctionId",
                            isRequired: !0
                        },
                        type_arguments: {
                            type: "array",
                            contains: {
                                type: "MoveType"
                            },
                            isRequired: !0
                        },
                        arguments: {
                            type: "array",
                            contains: {
                                properties: {}
                            },
                            isRequired: !0
                        }
                    }
                }, be = {
                    description: "An event from a transaction",
                    properties: {
                        guid: {
                            type: "EventGuid",
                            isRequired: !0
                        },
                        sequence_number: {
                            type: "U64",
                            isRequired: !0
                        },
                        type: {
                            type: "MoveType",
                            isRequired: !0
                        },
                        data: {
                            description: "The JSON representation of the event",
                            properties: {},
                            isRequired: !0
                        }
                    }
                }, Te = {
                    properties: {
                        creation_number: {
                            type: "U64",
                            isRequired: !0
                        },
                        account_address: {
                            type: "Address",
                            isRequired: !0
                        }
                    }
                }, Ee = {
                    description: "Struct holding the outputs of the estimate gas API",
                    properties: {
                        deprioritized_gas_estimate: {
                            type: "number",
                            description: "The deprioritized estimate for the gas unit price",
                            format: "uint64"
                        },
                        gas_estimate: {
                            type: "number",
                            description: "The current estimate for the gas unit price",
                            isRequired: !0,
                            format: "uint64"
                        },
                        prioritized_gas_estimate: {
                            type: "number",
                            description: "The prioritized estimate for the gas unit price",
                            format: "uint64"
                        }
                    }
                }, Ae = {
                    type: "one-of",
                    description: "The writeset payload of the Genesis transaction",
                    contains: [{
                        type: "GenesisPayload_WriteSetPayload"
                    }]
                }, Se = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "WriteSetPayload"
                    }]
                }, Re = {
                    description: "The genesis transaction\n\n    This only occurs at the genesis transaction (version 0)",
                    properties: {
                        version: {
                            type: "U64",
                            isRequired: !0
                        },
                        hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        state_change_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        event_root_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        state_checkpoint_hash: {
                            type: "HashValue"
                        },
                        gas_used: {
                            type: "U64",
                            isRequired: !0
                        },
                        success: {
                            type: "boolean",
                            description: "Whether the transaction was successful",
                            isRequired: !0
                        },
                        vm_status: {
                            type: "string",
                            description: "The VM status of the transaction, can tell useful information in a failure",
                            isRequired: !0
                        },
                        accumulator_root_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        changes: {
                            type: "array",
                            contains: {
                                type: "WriteSetChange"
                            },
                            isRequired: !0
                        },
                        payload: {
                            type: "GenesisPayload",
                            isRequired: !0
                        },
                        events: {
                            type: "array",
                            contains: {
                                type: "Event"
                            },
                            isRequired: !0
                        }
                    }
                }, ze = {
                    type: "string"
                }, Ue = {
                    description: "Representation of a successful healthcheck",
                    properties: {
                        message: {
                            type: "string",
                            isRequired: !0
                        }
                    }
                }, qe = {
                    type: "string",
                    description: "All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with\n    two hex digits per byte.\n\n    Unlike the `Address` type, HexEncodedBytes will not trim any zeros.\n    ",
                    format: "hex"
                }, Be = {
                    type: "string"
                }, xe = {
                    description: 'The struct holding all data returned to the client by the\n    index endpoint (i.e., GET "/").  Only for responding in JSON',
                    properties: {
                        chain_id: {
                            type: "number",
                            description: "Chain ID of the current chain",
                            isRequired: !0,
                            format: "uint8"
                        },
                        epoch: {
                            type: "U64",
                            isRequired: !0
                        },
                        ledger_version: {
                            type: "U64",
                            isRequired: !0
                        },
                        oldest_ledger_version: {
                            type: "U64",
                            isRequired: !0
                        },
                        ledger_timestamp: {
                            type: "U64",
                            isRequired: !0
                        },
                        node_role: {
                            type: "RoleType",
                            isRequired: !0
                        },
                        oldest_block_height: {
                            type: "U64",
                            isRequired: !0
                        },
                        block_height: {
                            type: "U64",
                            isRequired: !0
                        },
                        git_hash: {
                            type: "string"
                        }
                    }
                }, Ce = {
                    properties: {
                        modules: {
                            type: "array",
                            contains: {
                                type: "MoveModuleBytecode"
                            },
                            isRequired: !0
                        }
                    }
                }, ke = {
                    type: "string"
                }, Ie = {
                    description: "Move function",
                    properties: {
                        name: {
                            type: "IdentifierWrapper",
                            isRequired: !0
                        },
                        visibility: {
                            type: "MoveFunctionVisibility",
                            isRequired: !0
                        },
                        is_entry: {
                            type: "boolean",
                            description: "Whether the function can be called as an entry function directly in a transaction",
                            isRequired: !0
                        },
                        generic_type_params: {
                            type: "array",
                            contains: {
                                type: "MoveFunctionGenericTypeParam"
                            },
                            isRequired: !0
                        },
                        params: {
                            type: "array",
                            contains: {
                                type: "MoveType"
                            },
                            isRequired: !0
                        },
                        return: {
                            type: "array",
                            contains: {
                                type: "MoveType"
                            },
                            isRequired: !0
                        }
                    }
                }, Me = {
                    description: "Move function generic type param",
                    properties: {
                        constraints: {
                            type: "array",
                            contains: {
                                type: "MoveAbility"
                            },
                            isRequired: !0
                        }
                    }
                }, Pe = {
                    type: "Enum"
                }, Fe = {
                    description: "A Move module",
                    properties: {
                        address: {
                            type: "Address",
                            isRequired: !0
                        },
                        name: {
                            type: "IdentifierWrapper",
                            isRequired: !0
                        },
                        friends: {
                            type: "array",
                            contains: {
                                type: "MoveModuleId"
                            },
                            isRequired: !0
                        },
                        exposed_functions: {
                            type: "array",
                            contains: {
                                type: "MoveFunction"
                            },
                            isRequired: !0
                        },
                        structs: {
                            type: "array",
                            contains: {
                                type: "MoveStruct"
                            },
                            isRequired: !0
                        }
                    }
                }, Ne = {
                    description: "Move module bytecode along with it's ABI",
                    properties: {
                        bytecode: {
                            type: "HexEncodedBytes",
                            isRequired: !0
                        },
                        abi: {
                            type: "MoveModule"
                        }
                    }
                }, De = {
                    type: "string",
                    description: "Move module id is a string representation of Move module.\n\n    Format: `{address}::{module name}`\n\n    `address` should be hex-encoded 32 byte account address that is prefixed with `0x`.\n\n    Module name is case-sensitive.\n    "
                }, He = {
                    description: "A parsed Move resource",
                    properties: {
                        type: {
                            type: "MoveStructTag",
                            isRequired: !0
                        },
                        data: {
                            type: "MoveStructValue",
                            isRequired: !0
                        }
                    }
                }, $e = {
                    description: "Move script bytecode",
                    properties: {
                        bytecode: {
                            type: "HexEncodedBytes",
                            isRequired: !0
                        },
                        abi: {
                            type: "MoveFunction"
                        }
                    }
                }, Oe = {
                    description: "A move struct",
                    properties: {
                        name: {
                            type: "IdentifierWrapper",
                            isRequired: !0
                        },
                        is_native: {
                            type: "boolean",
                            description: "Whether the struct is a native struct of Move",
                            isRequired: !0
                        },
                        abilities: {
                            type: "array",
                            contains: {
                                type: "MoveAbility"
                            },
                            isRequired: !0
                        },
                        generic_type_params: {
                            type: "array",
                            contains: {
                                type: "MoveStructGenericTypeParam"
                            },
                            isRequired: !0
                        },
                        fields: {
                            type: "array",
                            contains: {
                                type: "MoveStructField"
                            },
                            isRequired: !0
                        }
                    }
                }, We = {
                    description: "Move struct field",
                    properties: {
                        name: {
                            type: "IdentifierWrapper",
                            isRequired: !0
                        },
                        type: {
                            type: "MoveType",
                            isRequired: !0
                        }
                    }
                }, Le = {
                    description: "Move generic type param",
                    properties: {
                        constraints: {
                            type: "array",
                            contains: {
                                type: "MoveAbility"
                            },
                            isRequired: !0
                        }
                    }
                }, Ve = {
                    type: "string",
                    description: "String representation of a MoveStructTag (on-chain Move struct type). This exists so you\n    can specify MoveStructTags as path / query parameters, e.g. for get_events_by_event_handle.\n\n    It is a combination of:\n    1. `move_module_address`, `module_name` and `struct_name`, all joined by `::`\n    2. `struct generic type parameters` joined by `, `\n\n    Examples:\n     * `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>`\n     * `0x1::account::Account`\n\n    Note:\n    1. Empty chars should be ignored when comparing 2 struct tag ids.\n    2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).\n\n    See [doc](https://aptos.dev/concepts/basics-accounts) for more details.\n    ",
                    pattern: "^0x[0-9a-zA-Z:_<>]+$"
                }, Ge = {
                    description: 'This is a JSON representation of some data within an account resource. More specifically,\n    it is a map of strings to arbitrary JSON values / objects, where the keys are top level\n    fields within the given resource.\n\n    To clarify, you might query for 0x1::account::Account and see the example data.\n\n    Move `bool` type value is serialized into `boolean`.\n\n    Move `u8` type value is serialized into `integer`.\n\n    Move `u64` and `u128` type value is serialized into `string`.\n\n    Move `address` type value (32 byte Aptos account address) is serialized into a HexEncodedBytes string.\n    For example:\n    - `0x1`\n    - `0x1668f6be25668c1a17cd8caf6b8d2f25`\n\n    Move `vector` type value is serialized into `array`, except `vector<u8>` which is serialized into a\n    HexEncodedBytes string with `0x` prefix.\n    For example:\n    - `vector<u64>{255, 255}` => `["255", "255"]`\n    - `vector<u8>{255, 255}` => `0xffff`\n\n    Move `struct` type value is serialized into `object` that looks like this (except some Move stdlib types, see the following section):\n    ```json\n    {\n        field1_name: field1_value,\n        field2_name: field2_value,\n        ......\n    }\n    ```\n\n    For example:\n    `{ "created": "0xa550c18", "role_id": "0" }`\n\n     **Special serialization for Move stdlib types**:\n    - [0x1::string::String](https://github.com/aptos-labs/aptos-core/blob/main/language/move-stdlib/docs/ascii.md)\n    is serialized into `string`. For example, struct value `0x1::string::String{bytes: b"Hello World!"}`\n    is serialized as `"Hello World!"` in JSON.\n    ',
                    properties: {}
                }, Ke = {
                    type: "string",
                    description: "String representation of an on-chain Move type tag that is exposed in transaction payload.\n    Values:\n    - bool\n    - u8\n    - u64\n    - u128\n    - address\n    - signer\n    - vector: `vector<{non-reference MoveTypeId}>`\n    - struct: `{address}::{module_name}::{struct_name}::<{generic types}>`\n\n    Vector type value examples:\n    - `vector<u8>`\n    - `vector<vector<u64>>`\n    - `vector<0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>>`\n\n    Struct type value examples:\n    - `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>\n    - `0x1::account::Account`\n\n    Note:\n    1. Empty chars should be ignored when comparing 2 struct tag ids.\n    2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).\n    ",
                    pattern: "^(bool|u8|u64|u128|address|signer|vector<.+>|0x[0-9a-zA-Z:_<, >]+)$"
                }, je = {
                    type: "any-of",
                    description: "An enum of the possible Move value types",
                    contains: [{
                        type: "number",
                        format: "uint8"
                    }, {
                        type: "U64"
                    }, {
                        type: "U128"
                    }, {
                        type: "boolean"
                    }, {
                        type: "Address"
                    }, {
                        type: "array",
                        contains: {
                            type: "MoveValue"
                        }
                    }, {
                        type: "HexEncodedBytes"
                    }, {
                        type: "MoveStructValue"
                    }, {
                        type: "string"
                    }]
                }, Je = {
                    description: "Multi agent signature for multi agent transactions\n\n    This allows you to have transactions across multiple accounts",
                    properties: {
                        sender: {
                            type: "AccountSignature",
                            isRequired: !0
                        },
                        secondary_signer_addresses: {
                            type: "array",
                            contains: {
                                type: "Address"
                            },
                            isRequired: !0
                        },
                        secondary_signers: {
                            type: "array",
                            contains: {
                                type: "AccountSignature"
                            },
                            isRequired: !0
                        }
                    }
                }, Ze = {
                    description: "A Ed25519 multi-sig signature\n\n    This allows k-of-n signing for a transaction",
                    properties: {
                        public_keys: {
                            type: "array",
                            contains: {
                                type: "HexEncodedBytes"
                            },
                            isRequired: !0
                        },
                        signatures: {
                            type: "array",
                            contains: {
                                type: "HexEncodedBytes"
                            },
                            isRequired: !0
                        },
                        threshold: {
                            type: "number",
                            description: "The number of signatures required for a successful transaction",
                            isRequired: !0,
                            format: "uint8"
                        },
                        bitmap: {
                            type: "HexEncodedBytes",
                            isRequired: !0
                        }
                    }
                }, Xe = {
                    description: "A transaction waiting in mempool",
                    properties: {
                        hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        sender: {
                            type: "Address",
                            isRequired: !0
                        },
                        sequence_number: {
                            type: "U64",
                            isRequired: !0
                        },
                        max_gas_amount: {
                            type: "U64",
                            isRequired: !0
                        },
                        gas_unit_price: {
                            type: "U64",
                            isRequired: !0
                        },
                        expiration_timestamp_secs: {
                            type: "U64",
                            isRequired: !0
                        },
                        payload: {
                            type: "TransactionPayload",
                            isRequired: !0
                        },
                        signature: {
                            type: "TransactionSignature"
                        }
                    }
                }, Qe = {
                    type: "Enum"
                }, Ye = {
                    description: "Payload which runs a script that can run multiple functions",
                    properties: {
                        code: {
                            type: "MoveScriptBytecode",
                            isRequired: !0
                        },
                        type_arguments: {
                            type: "array",
                            contains: {
                                type: "MoveType"
                            },
                            isRequired: !0
                        },
                        arguments: {
                            type: "array",
                            contains: {
                                properties: {}
                            },
                            isRequired: !0
                        }
                    }
                }, et = {
                    properties: {
                        execute_as: {
                            type: "Address",
                            isRequired: !0
                        },
                        script: {
                            type: "ScriptPayload",
                            isRequired: !0
                        }
                    }
                }, tt = {
                    description: "A state checkpoint transaction",
                    properties: {
                        version: {
                            type: "U64",
                            isRequired: !0
                        },
                        hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        state_change_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        event_root_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        state_checkpoint_hash: {
                            type: "HashValue"
                        },
                        gas_used: {
                            type: "U64",
                            isRequired: !0
                        },
                        success: {
                            type: "boolean",
                            description: "Whether the transaction was successful",
                            isRequired: !0
                        },
                        vm_status: {
                            type: "string",
                            description: "The VM status of the transaction, can tell useful information in a failure",
                            isRequired: !0
                        },
                        accumulator_root_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        changes: {
                            type: "array",
                            contains: {
                                type: "WriteSetChange"
                            },
                            isRequired: !0
                        },
                        timestamp: {
                            type: "U64",
                            isRequired: !0
                        }
                    }
                }, it = {
                    description: "A request to submit a transaction\n\n    This requires a transaction and a signature of it",
                    properties: {
                        sender: {
                            type: "Address",
                            isRequired: !0
                        },
                        sequence_number: {
                            type: "U64",
                            isRequired: !0
                        },
                        max_gas_amount: {
                            type: "U64",
                            isRequired: !0
                        },
                        gas_unit_price: {
                            type: "U64",
                            isRequired: !0
                        },
                        expiration_timestamp_secs: {
                            type: "U64",
                            isRequired: !0
                        },
                        payload: {
                            type: "TransactionPayload",
                            isRequired: !0
                        },
                        signature: {
                            type: "TransactionSignature",
                            isRequired: !0
                        }
                    }
                }, st = {
                    description: "Table Item request for the GetTableItem API",
                    properties: {
                        key_type: {
                            type: "MoveType",
                            isRequired: !0
                        },
                        value_type: {
                            type: "MoveType",
                            isRequired: !0
                        },
                        key: {
                            description: "The value of the table item's key",
                            properties: {},
                            isRequired: !0
                        }
                    }
                }, rt = {
                    type: "one-of",
                    description: "Enum of the different types of transactions in Aptos",
                    contains: [{
                        type: "Transaction_PendingTransaction"
                    }, {
                        type: "Transaction_UserTransaction"
                    }, {
                        type: "Transaction_GenesisTransaction"
                    }, {
                        type: "Transaction_BlockMetadataTransaction"
                    }, {
                        type: "Transaction_StateCheckpointTransaction"
                    }]
                }, nt = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "BlockMetadataTransaction"
                    }]
                }, at = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "GenesisTransaction"
                    }]
                }, ot = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "PendingTransaction"
                    }]
                }, ct = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "StateCheckpointTransaction"
                    }]
                }, ut = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "UserTransaction"
                    }]
                }, lt = {
                    type: "one-of",
                    description: "An enum of the possible transaction payloads",
                    contains: [{
                        type: "TransactionPayload_EntryFunctionPayload"
                    }, {
                        type: "TransactionPayload_ScriptPayload"
                    }, {
                        type: "TransactionPayload_ModuleBundlePayload"
                    }]
                }, dt = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "EntryFunctionPayload"
                    }]
                }, pt = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "ModuleBundlePayload"
                    }]
                }, ht = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "ScriptPayload"
                    }]
                }, yt = {
                    description: "Information telling which batch submission transactions failed",
                    properties: {
                        error: {
                            type: "AptosError",
                            isRequired: !0
                        },
                        transaction_index: {
                            type: "number",
                            description: "The index of which transaction failed, same as submission order",
                            isRequired: !0,
                            format: "uint64"
                        }
                    }
                }, gt = {
                    description: "Batch transaction submission result\n\n    Tells which transactions failed",
                    properties: {
                        transaction_failures: {
                            type: "array",
                            contains: {
                                type: "TransactionsBatchSingleSubmissionFailure"
                            },
                            isRequired: !0
                        }
                    }
                }, ft = {
                    type: "one-of",
                    description: "An enum representing the different transaction signatures available",
                    contains: [{
                        type: "TransactionSignature_Ed25519Signature"
                    }, {
                        type: "TransactionSignature_MultiEd25519Signature"
                    }, {
                        type: "TransactionSignature_MultiAgentSignature"
                    }]
                }, mt = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "Ed25519Signature"
                    }]
                }, _t = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "MultiAgentSignature"
                    }]
                }, wt = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "MultiEd25519Signature"
                    }]
                }, vt = {
                    type: "string",
                    description: "A string containing a 128-bit unsigned integer.\n\n    We represent u128 values as a string to ensure compatibility with languages such\n    as JavaScript that do not parse u64s in JSON natively.\n    ",
                    format: "uint64"
                }, bt = {
                    type: "string",
                    description: "A string containing a 64-bit unsigned integer.\n\n    We represent u64 values as a string to ensure compatibility with languages such\n    as JavaScript that do not parse u64s in JSON natively.\n    ",
                    format: "uint64"
                }, Tt = {
                    description: "A transaction submitted by a user to change the state of the blockchain",
                    properties: {
                        version: {
                            type: "U64",
                            isRequired: !0
                        },
                        hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        state_change_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        event_root_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        state_checkpoint_hash: {
                            type: "HashValue"
                        },
                        gas_used: {
                            type: "U64",
                            isRequired: !0
                        },
                        success: {
                            type: "boolean",
                            description: "Whether the transaction was successful",
                            isRequired: !0
                        },
                        vm_status: {
                            type: "string",
                            description: "The VM status of the transaction, can tell useful information in a failure",
                            isRequired: !0
                        },
                        accumulator_root_hash: {
                            type: "HashValue",
                            isRequired: !0
                        },
                        changes: {
                            type: "array",
                            contains: {
                                type: "WriteSetChange"
                            },
                            isRequired: !0
                        },
                        sender: {
                            type: "Address",
                            isRequired: !0
                        },
                        sequence_number: {
                            type: "U64",
                            isRequired: !0
                        },
                        max_gas_amount: {
                            type: "U64",
                            isRequired: !0
                        },
                        gas_unit_price: {
                            type: "U64",
                            isRequired: !0
                        },
                        expiration_timestamp_secs: {
                            type: "U64",
                            isRequired: !0
                        },
                        payload: {
                            type: "TransactionPayload",
                            isRequired: !0
                        },
                        signature: {
                            type: "TransactionSignature"
                        },
                        events: {
                            type: "array",
                            contains: {
                                type: "Event"
                            },
                            isRequired: !0
                        },
                        timestamp: {
                            type: "U64",
                            isRequired: !0
                        }
                    }
                }, Et = {
                    description: "An event from a transaction with a version",
                    properties: {
                        version: {
                            type: "U64",
                            isRequired: !0
                        },
                        guid: {
                            type: "EventGuid",
                            isRequired: !0
                        },
                        sequence_number: {
                            type: "U64",
                            isRequired: !0
                        },
                        type: {
                            type: "MoveType",
                            isRequired: !0
                        },
                        data: {
                            description: "The JSON representation of the event",
                            properties: {},
                            isRequired: !0
                        }
                    }
                }, At = {
                    description: "Write a new module or update an existing one",
                    properties: {
                        address: {
                            type: "Address",
                            isRequired: !0
                        },
                        state_key_hash: {
                            type: "string",
                            description: "State key hash",
                            isRequired: !0
                        },
                        data: {
                            type: "MoveModuleBytecode",
                            isRequired: !0
                        }
                    }
                }, St = {
                    description: "Write a resource or update an existing one",
                    properties: {
                        address: {
                            type: "Address",
                            isRequired: !0
                        },
                        state_key_hash: {
                            type: "string",
                            description: "State key hash",
                            isRequired: !0
                        },
                        data: {
                            type: "MoveResource",
                            isRequired: !0
                        }
                    }
                }, Rt = {
                    type: "one-of",
                    description: "The associated writeset with a payload",
                    contains: [{
                        type: "WriteSet_ScriptWriteSet"
                    }, {
                        type: "WriteSet_DirectWriteSet"
                    }]
                }, zt = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "DirectWriteSet"
                    }]
                }, Ut = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "ScriptWriteSet"
                    }]
                }, qt = {
                    type: "one-of",
                    description: "A final state change of a transaction on a resource or module",
                    contains: [{
                        type: "WriteSetChange_DeleteModule"
                    }, {
                        type: "WriteSetChange_DeleteResource"
                    }, {
                        type: "WriteSetChange_DeleteTableItem"
                    }, {
                        type: "WriteSetChange_WriteModule"
                    }, {
                        type: "WriteSetChange_WriteResource"
                    }, {
                        type: "WriteSetChange_WriteTableItem"
                    }]
                }, Bt = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "DeleteModule"
                    }]
                }, xt = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "DeleteResource"
                    }]
                }, Ct = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "DeleteTableItem"
                    }]
                }, kt = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "WriteModule"
                    }]
                }, It = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "WriteResource"
                    }]
                }, Mt = {
                    type: "all-of",
                    contains: [{
                        properties: {
                            type: {
                                type: "string",
                                isRequired: !0
                            }
                        }
                    }, {
                        type: "WriteTableItem"
                    }]
                }, Pt = {
                    description: "A writeset payload, used only for genesis",
                    properties: {
                        write_set: {
                            type: "WriteSet",
                            isRequired: !0
                        }
                    }
                }, Ft = {
                    description: "Change set to write a table item",
                    properties: {
                        state_key_hash: {
                            type: "string",
                            isRequired: !0
                        },
                        handle: {
                            type: "HexEncodedBytes",
                            isRequired: !0
                        },
                        key: {
                            type: "HexEncodedBytes",
                            isRequired: !0
                        },
                        value: {
                            type: "HexEncodedBytes",
                            isRequired: !0
                        },
                        data: {
                            type: "DecodedTableData"
                        }
                    }
                }, Nt = {};
            f(Nt, {
                AccountAddress: () => Ht,
                AccountAuthenticator: () => mi,
                AccountAuthenticatorEd25519: () => _i,
                AccountAuthenticatorMultiEd25519: () => wi,
                AuthenticationKey: () => ts,
                ChainId: () => Li,
                ChangeSet: () => Pi,
                Ed25519PublicKey: () => oi,
                Ed25519Signature: () => ui,
                EntryFunction: () => ki,
                Identifier: () => vi,
                Module: () => Ii,
                ModuleId: () => Mi,
                MultiAgentRawTransaction: () => Hi,
                MultiEd25519PublicKey: () => li,
                MultiEd25519Signature: () => pi,
                RawTransaction: () => xi,
                RawTransactionWithData: () => Di,
                RotationProofChallenge: () => is,
                Script: () => Ci,
                SignedTransaction: () => Ni,
                StructTag: () => Bi,
                Transaction: () => Qi,
                TransactionArgument: () => Vi,
                TransactionArgumentAddress: () => Ji,
                TransactionArgumentBool: () => Xi,
                TransactionArgumentU128: () => ji,
                TransactionArgumentU64: () => Ki,
                TransactionArgumentU8: () => Gi,
                TransactionArgumentU8Vector: () => Zi,
                TransactionAuthenticator: () => hi,
                TransactionAuthenticatorEd25519: () => yi,
                TransactionAuthenticatorMultiAgent: () => fi,
                TransactionAuthenticatorMultiEd25519: () => gi,
                TransactionPayload: () => $i,
                TransactionPayloadEntryFunction: () => Wi,
                TransactionPayloadScript: () => Oi,
                TypeTag: () => bi,
                TypeTagAddress: () => Ri,
                TypeTagBool: () => Ti,
                TypeTagSigner: () => zi,
                TypeTagStruct: () => qi,
                TypeTagU128: () => Si,
                TypeTagU64: () => Ai,
                TypeTagU8: () => Ei,
                TypeTagVector: () => Ui,
                UserTransaction: () => Yi,
                WriteSet: () => Fi
            });
            var Dt = class {
                    constructor(e) {
                        if (e.length !== Dt.LENGTH) throw new Error("Expected address of length 32");
                        this.address = e
                    }
                    static fromHex(e) {
                        let t = b.ensure(e);
                        t.noPrefix().length % 2 != 0 && (t = new b("0" + t.noPrefix()));
                        const i = t.toUint8Array();
                        if (i.length > Dt.LENGTH) throw new Error("Hex string is too long. Address's length is 32 bytes.");
                        if (i.length === Dt.LENGTH) return new Dt(i);
                        const s = new Uint8Array(Dt.LENGTH);
                        return s.set(i, Dt.LENGTH - i.length), new Dt(s)
                    }
                    serialize(e) {
                        e.serializeFixedBytes(this.address)
                    }
                    static deserialize(e) {
                        return new Dt(e.deserializeFixedBytes(Dt.LENGTH))
                    }
                },
                Ht = Dt;
            Ht.LENGTH = 32, Ht.CORE_CODE_ADDRESS = Dt.fromHex("0x1");
            var $t = {};
            f($t, {
                Deserializer: () => Gt,
                Serializer: () => Lt,
                bcsSerializeBool: () => ii,
                bcsSerializeBytes: () => ri,
                bcsSerializeFixedBytes: () => ni,
                bcsSerializeStr: () => si,
                bcsSerializeU128: () => ti,
                bcsSerializeU16: () => Yt,
                bcsSerializeU32: () => ei,
                bcsSerializeU8: () => Qt,
                bcsSerializeUint64: () => Xt,
                bcsToBytes: () => Zt,
                deserializeVector: () => Jt,
                serializeVector: () => Kt,
                serializeVectorWithFunc: () => jt
            });
            var Ot = BigInt(2 ** 64) - BigInt(1),
                Wt = BigInt(2 ** 128) - BigInt(1),
                Lt = class {
                    constructor() {
                        this.buffer = new ArrayBuffer(64), this.offset = 0
                    }
                    ensureBufferWillHandleSize(e) {
                        for (; this.buffer.byteLength < this.offset + e;) {
                            const e = new ArrayBuffer(2 * this.buffer.byteLength);
                            new Uint8Array(e).set(new Uint8Array(this.buffer)), this.buffer = e
                        }
                    }
                    serialize(e) {
                        this.ensureBufferWillHandleSize(e.length), new Uint8Array(this.buffer, this.offset).set(e), this.offset += e.length
                    }
                    serializeWithFunction(e, t, i) {
                        this.ensureBufferWillHandleSize(t);
                        const s = new DataView(this.buffer, this.offset);
                        e.apply(s, [0, i, !0]), this.offset += t
                    }
                    serializeStr(e) {
                        const t = new TextEncoder;
                        this.serializeBytes(t.encode(e))
                    }
                    serializeBytes(e) {
                        this.serializeU32AsUleb128(e.length), this.serialize(e)
                    }
                    serializeFixedBytes(e) {
                        this.serialize(e)
                    }
                    serializeBool(e) {
                        if ("boolean" != typeof e) throw new Error("Value needs to be a boolean");
                        const t = e ? 1 : 0;
                        this.serialize(new Uint8Array([t]))
                    }
                    serializeU8(e) {
                        this.serialize(new Uint8Array([e]))
                    }
                    serializeU16(e) {
                        this.serializeWithFunction(DataView.prototype.setUint16, 2, e)
                    }
                    serializeU32(e) {
                        this.serializeWithFunction(DataView.prototype.setUint32, 4, e)
                    }
                    serializeU64(e) {
                        const t = BigInt(e.toString()) & BigInt(2 ** 32 - 1),
                            i = BigInt(e.toString()) >> BigInt(32);
                        this.serializeU32(Number(t)), this.serializeU32(Number(i))
                    }
                    serializeU128(e) {
                        const t = BigInt(e.toString()) & Ot,
                            i = BigInt(e.toString()) >> BigInt(64);
                        this.serializeU64(t), this.serializeU64(i)
                    }
                    serializeU32AsUleb128(e) {
                        let t = e;
                        const i = [];
                        for (; t >>> 7 != 0;) i.push(127 & t | 128), t >>>= 7;
                        i.push(t), this.serialize(new Uint8Array(i))
                    }
                    getBytes() {
                        return new Uint8Array(this.buffer).slice(0, this.offset)
                    }
                };

            function Vt(e, t, i) {
                return (s, r, n) => {
                    const a = n.value;
                    return n.value = function(s) {
                        const r = BigInt(s.toString());
                        if (r > BigInt(t.toString()) || r < BigInt(e.toString())) throw new Error(i || "Value is out of range");
                        a.apply(this, [s])
                    }, n
                }
            }
            m([Vt(0, 255)], Lt.prototype, "serializeU8", 1), m([Vt(0, 65535)], Lt.prototype, "serializeU16", 1), m([Vt(0, 2 ** 32 - 1)], Lt.prototype, "serializeU32", 1), m([Vt(BigInt(0), Ot)], Lt.prototype, "serializeU64", 1), m([Vt(BigInt(0), Wt)], Lt.prototype, "serializeU128", 1), m([Vt(0, 2 ** 32 - 1)], Lt.prototype, "serializeU32AsUleb128", 1);
            var Gt = class {
                constructor(e) {
                    this.buffer = new ArrayBuffer(e.length), new Uint8Array(this.buffer).set(e, 0), this.offset = 0
                }
                read(e) {
                    if (this.offset + e > this.buffer.byteLength) throw new Error("Reached to the end of buffer");
                    const t = this.buffer.slice(this.offset, this.offset + e);
                    return this.offset += e, t
                }
                deserializeStr() {
                    const e = this.deserializeBytes();
                    return (new TextDecoder).decode(e)
                }
                deserializeBytes() {
                    const e = this.deserializeUleb128AsU32();
                    return new Uint8Array(this.read(e))
                }
                deserializeFixedBytes(e) {
                    return new Uint8Array(this.read(e))
                }
                deserializeBool() {
                    const e = new Uint8Array(this.read(1))[0];
                    if (1 !== e && 0 !== e) throw new Error("Invalid boolean value");
                    return 1 === e
                }
                deserializeU8() {
                    return new DataView(this.read(1)).getUint8(0)
                }
                deserializeU16() {
                    return new DataView(this.read(2)).getUint16(0, !0)
                }
                deserializeU32() {
                    return new DataView(this.read(4)).getUint32(0, !0)
                }
                deserializeU64() {
                    const e = this.deserializeU32(),
                        t = this.deserializeU32();
                    return BigInt(BigInt(t) << BigInt(32) | BigInt(e))
                }
                deserializeU128() {
                    const e = this.deserializeU64(),
                        t = this.deserializeU64();
                    return BigInt(t << BigInt(64) | e)
                }
                deserializeUleb128AsU32() {
                    let e = BigInt(0),
                        t = 0;
                    for (; e < 2 ** 32 - 1;) {
                        const i = this.deserializeU8();
                        if (e |= BigInt(127 & i) << BigInt(t), 0 == (128 & i)) break;
                        t += 7
                    }
                    if (e > 2 ** 32 - 1) throw new Error("Overflow while parsing uleb128-encoded uint32 value");
                    return Number(e)
                }
            };

            function Kt(e, t) {
                t.serializeU32AsUleb128(e.length), e.forEach(e => {
                    e.serialize(t)
                })
            }

            function jt(e, t) {
                const i = new Lt;
                i.serializeU32AsUleb128(e.length);
                const s = i[t];
                return e.forEach(e => {
                    s.call(i, e)
                }), i.getBytes()
            }

            function Jt(e, t) {
                const i = e.deserializeUleb128AsU32(),
                    s = [];
                for (let r = 0; r < i; r += 1) s.push(t.deserialize(e));
                return s
            }

            function Zt(e) {
                const t = new Lt;
                return e.serialize(t), t.getBytes()
            }

            function Xt(e) {
                const t = new Lt;
                return t.serializeU64(e), t.getBytes()
            }

            function Qt(e) {
                const t = new Lt;
                return t.serializeU8(e), t.getBytes()
            }

            function Yt(e) {
                const t = new Lt;
                return t.serializeU16(e), t.getBytes()
            }

            function ei(e) {
                const t = new Lt;
                return t.serializeU32(e), t.getBytes()
            }

            function ti(e) {
                const t = new Lt;
                return t.serializeU128(e), t.getBytes()
            }

            function ii(e) {
                const t = new Lt;
                return t.serializeBool(e), t.getBytes()
            }

            function si(e) {
                const t = new Lt;
                return t.serializeStr(e), t.getBytes()
            }

            function ri(e) {
                const t = new Lt;
                return t.serializeBytes(e), t.getBytes()
            }

            function ni(e) {
                const t = new Lt;
                return t.serializeFixedBytes(e), t.getBytes()
            }
            var ai = class {
                    constructor(e) {
                        if (e.length !== ai.LENGTH) throw new Error("Ed25519PublicKey length should be " + ai.LENGTH);
                        this.value = e
                    }
                    toBytes() {
                        return this.value
                    }
                    serialize(e) {
                        e.serializeBytes(this.value)
                    }
                    static deserialize(e) {
                        const t = e.deserializeBytes();
                        return new ai(t)
                    }
                },
                oi = ai;
            oi.LENGTH = 32;
            var ci = class {
                    constructor(e) {
                        if (this.value = e, e.length !== ci.LENGTH) throw new Error("Ed25519Signature length should be " + ci.LENGTH)
                    }
                    serialize(e) {
                        e.serializeBytes(this.value)
                    }
                    static deserialize(e) {
                        const t = e.deserializeBytes();
                        return new ci(t)
                    }
                },
                ui = ci;
            ui.LENGTH = 64;
            var li = class {
                    constructor(e, t) {
                        if (this.public_keys = e, this.threshold = t, t > 32) throw new Error('"threshold" cannot be larger than 32')
                    }
                    toBytes() {
                        const e = new Uint8Array(this.public_keys.length * oi.LENGTH + 1);
                        return this.public_keys.forEach((t, i) => {
                            e.set(t.value, i * oi.LENGTH)
                        }), e[this.public_keys.length * oi.LENGTH] = this.threshold, e
                    }
                    serialize(e) {
                        e.serializeBytes(this.toBytes())
                    }
                    static deserialize(e) {
                        const t = e.deserializeBytes(),
                            i = t[t.length - 1],
                            s = [];
                        for (let e = 0; e < t.length - 1; e += oi.LENGTH) {
                            const i = e;
                            s.push(new oi(t.subarray(i, i + oi.LENGTH)))
                        }
                        return new li(s, i)
                    }
                },
                di = class {
                    constructor(e, t) {
                        if (this.signatures = e, this.bitmap = t, t.length !== di.BITMAP_LEN) throw new Error('"bitmap" length should be ' + di.BITMAP_LEN)
                    }
                    toBytes() {
                        const e = new Uint8Array(this.signatures.length * ui.LENGTH + di.BITMAP_LEN);
                        return this.signatures.forEach((t, i) => {
                            e.set(t.value, i * ui.LENGTH)
                        }), e.set(this.bitmap, this.signatures.length * ui.LENGTH), e
                    }
                    static createBitmap(e) {
                        const t = new Uint8Array([0, 0, 0, 0]),
                            i = new Set;
                        return e.forEach(e => {
                            if (e >= 32) throw new Error(`Invalid bit value ${e}.`);
                            if (i.has(e)) throw new Error("Duplicated bits detected.");
                            i.add(e);
                            const s = Math.floor(e / 8);
                            let r = t[s];
                            r |= 128 >> e % 8, t[s] = r
                        }), t
                    }
                    serialize(e) {
                        e.serializeBytes(this.toBytes())
                    }
                    static deserialize(e) {
                        const t = e.deserializeBytes(),
                            i = t.subarray(t.length - 4),
                            s = [];
                        for (let e = 0; e < t.length - i.length; e += ui.LENGTH) {
                            const i = e;
                            s.push(new ui(t.subarray(i, i + ui.LENGTH)))
                        }
                        return new di(s, i)
                    }
                },
                pi = di;
            pi.BITMAP_LEN = 4;
            var hi = class {
                    static deserialize(e) {
                        const t = e.deserializeUleb128AsU32();
                        switch (t) {
                            case 0:
                                return yi.load(e);
                            case 1:
                                return gi.load(e);
                            case 2:
                                return fi.load(e);
                            default:
                                throw new Error("Unknown variant index for TransactionAuthenticator: " + t)
                        }
                    }
                },
                yi = class extends hi {
                    constructor(e, t) {
                        super(), this.public_key = e, this.signature = t
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(0), this.public_key.serialize(e), this.signature.serialize(e)
                    }
                    static load(e) {
                        const t = oi.deserialize(e),
                            i = ui.deserialize(e);
                        return new yi(t, i)
                    }
                },
                gi = class extends hi {
                    constructor(e, t) {
                        super(), this.public_key = e, this.signature = t
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(1), this.public_key.serialize(e), this.signature.serialize(e)
                    }
                    static load(e) {
                        const t = li.deserialize(e),
                            i = pi.deserialize(e);
                        return new gi(t, i)
                    }
                },
                fi = class extends hi {
                    constructor(e, t, i) {
                        super(), this.sender = e, this.secondary_signer_addresses = t, this.secondary_signers = i
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(2), this.sender.serialize(e), Kt(this.secondary_signer_addresses, e), Kt(this.secondary_signers, e)
                    }
                    static load(e) {
                        const t = mi.deserialize(e),
                            i = Jt(e, Ht),
                            s = Jt(e, mi);
                        return new fi(t, i, s)
                    }
                },
                mi = class {
                    static deserialize(e) {
                        const t = e.deserializeUleb128AsU32();
                        switch (t) {
                            case 0:
                                return _i.load(e);
                            case 1:
                                return wi.load(e);
                            default:
                                throw new Error("Unknown variant index for AccountAuthenticator: " + t)
                        }
                    }
                },
                _i = class extends mi {
                    constructor(e, t) {
                        super(), this.public_key = e, this.signature = t
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(0), this.public_key.serialize(e), this.signature.serialize(e)
                    }
                    static load(e) {
                        const t = oi.deserialize(e),
                            i = ui.deserialize(e);
                        return new _i(t, i)
                    }
                },
                wi = class extends mi {
                    constructor(e, t) {
                        super(), this.public_key = e, this.signature = t
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(1), this.public_key.serialize(e), this.signature.serialize(e)
                    }
                    static load(e) {
                        const t = li.deserialize(e),
                            i = pi.deserialize(e);
                        return new wi(t, i)
                    }
                },
                vi = class {
                    constructor(e) {
                        this.value = e
                    }
                    serialize(e) {
                        e.serializeStr(this.value)
                    }
                    static deserialize(e) {
                        const t = e.deserializeStr();
                        return new vi(t)
                    }
                },
                bi = class {
                    static deserialize(e) {
                        const t = e.deserializeUleb128AsU32();
                        switch (t) {
                            case 0:
                                return Ti.load(e);
                            case 1:
                                return Ei.load(e);
                            case 2:
                                return Ai.load(e);
                            case 3:
                                return Si.load(e);
                            case 4:
                                return Ri.load(e);
                            case 5:
                                return zi.load(e);
                            case 6:
                                return Ui.load(e);
                            case 7:
                                return qi.load(e);
                            default:
                                throw new Error("Unknown variant index for TypeTag: " + t)
                        }
                    }
                },
                Ti = class extends bi {
                    serialize(e) {
                        e.serializeU32AsUleb128(0)
                    }
                    static load(e) {
                        return new Ti
                    }
                },
                Ei = class extends bi {
                    serialize(e) {
                        e.serializeU32AsUleb128(1)
                    }
                    static load(e) {
                        return new Ei
                    }
                },
                Ai = class extends bi {
                    serialize(e) {
                        e.serializeU32AsUleb128(2)
                    }
                    static load(e) {
                        return new Ai
                    }
                },
                Si = class extends bi {
                    serialize(e) {
                        e.serializeU32AsUleb128(3)
                    }
                    static load(e) {
                        return new Si
                    }
                },
                Ri = class extends bi {
                    serialize(e) {
                        e.serializeU32AsUleb128(4)
                    }
                    static load(e) {
                        return new Ri
                    }
                },
                zi = class extends bi {
                    serialize(e) {
                        e.serializeU32AsUleb128(5)
                    }
                    static load(e) {
                        return new zi
                    }
                },
                Ui = class extends bi {
                    constructor(e) {
                        super(), this.value = e
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(6), this.value.serialize(e)
                    }
                    static load(e) {
                        const t = bi.deserialize(e);
                        return new Ui(t)
                    }
                },
                qi = class extends bi {
                    constructor(e) {
                        super(), this.value = e
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(7), this.value.serialize(e)
                    }
                    static load(e) {
                        const t = Bi.deserialize(e);
                        return new qi(t)
                    }
                },
                Bi = class {
                    constructor(e, t, i, s) {
                        this.address = e, this.module_name = t, this.name = i, this.type_args = s
                    }
                    static fromString(e) {
                        if (e.includes("<")) throw new Error("Not implemented");
                        const t = e.split("::");
                        if (3 !== t.length) throw new Error("Invalid struct tag string literal.");
                        return new Bi(Ht.fromHex(t[0]), new vi(t[1]), new vi(t[2]), [])
                    }
                    serialize(e) {
                        this.address.serialize(e), this.module_name.serialize(e), this.name.serialize(e), Kt(this.type_args, e)
                    }
                    static deserialize(e) {
                        const t = Ht.deserialize(e),
                            i = vi.deserialize(e),
                            s = vi.deserialize(e),
                            r = Jt(e, bi);
                        return new Bi(t, i, s, r)
                    }
                },
                xi = class {
                    constructor(e, t, i, s, r, n, a) {
                        this.sender = e, this.sequence_number = t, this.payload = i, this.max_gas_amount = s, this.gas_unit_price = r, this.expiration_timestamp_secs = n, this.chain_id = a
                    }
                    serialize(e) {
                        this.sender.serialize(e), e.serializeU64(this.sequence_number), this.payload.serialize(e), e.serializeU64(this.max_gas_amount), e.serializeU64(this.gas_unit_price), e.serializeU64(this.expiration_timestamp_secs), this.chain_id.serialize(e)
                    }
                    static deserialize(e) {
                        const t = Ht.deserialize(e),
                            i = e.deserializeU64(),
                            s = $i.deserialize(e),
                            r = e.deserializeU64(),
                            n = e.deserializeU64(),
                            a = e.deserializeU64(),
                            o = Li.deserialize(e);
                        return new xi(t, i, s, r, n, a, o)
                    }
                },
                Ci = class {
                    constructor(e, t, i) {
                        this.code = e, this.ty_args = t, this.args = i
                    }
                    serialize(e) {
                        e.serializeBytes(this.code), Kt(this.ty_args, e), Kt(this.args, e)
                    }
                    static deserialize(e) {
                        const t = e.deserializeBytes(),
                            i = Jt(e, bi),
                            s = Jt(e, Vi);
                        return new Ci(t, i, s)
                    }
                },
                ki = class {
                    constructor(e, t, i, s) {
                        this.module_name = e, this.function_name = t, this.ty_args = i, this.args = s
                    }
                    static natural(e, t, i, s) {
                        return new ki(Mi.fromStr(e), new vi(t), i, s)
                    }
                    static natual(e, t, i, s) {
                        return ki.natural(e, t, i, s)
                    }
                    serialize(e) {
                        this.module_name.serialize(e), this.function_name.serialize(e), Kt(this.ty_args, e), e.serializeU32AsUleb128(this.args.length), this.args.forEach(t => {
                            e.serializeBytes(t)
                        })
                    }
                    static deserialize(e) {
                        const t = Mi.deserialize(e),
                            i = vi.deserialize(e),
                            s = Jt(e, bi),
                            r = e.deserializeUleb128AsU32(),
                            n = [];
                        for (let t = 0; t < r; t += 1) n.push(e.deserializeBytes());
                        return new ki(t, i, s, n)
                    }
                },
                Ii = class {
                    constructor(e) {
                        this.code = e
                    }
                    serialize(e) {
                        e.serializeBytes(this.code)
                    }
                    static deserialize(e) {
                        const t = e.deserializeBytes();
                        return new Ii(t)
                    }
                },
                Mi = class {
                    constructor(e, t) {
                        this.address = e, this.name = t
                    }
                    static fromStr(e) {
                        const t = e.split("::");
                        if (2 !== t.length) throw new Error("Invalid module id.");
                        return new Mi(Ht.fromHex(new b(t[0])), new vi(t[1]))
                    }
                    serialize(e) {
                        this.address.serialize(e), this.name.serialize(e)
                    }
                    static deserialize(e) {
                        const t = Ht.deserialize(e),
                            i = vi.deserialize(e);
                        return new Mi(t, i)
                    }
                },
                Pi = class {
                    serialize(e) {
                        throw new Error("Not implemented.")
                    }
                    static deserialize(e) {
                        throw new Error("Not implemented.")
                    }
                },
                Fi = class {
                    serialize(e) {
                        throw new Error("Not implmented.")
                    }
                    static deserialize(e) {
                        throw new Error("Not implmented.")
                    }
                },
                Ni = class {
                    constructor(e, t) {
                        this.raw_txn = e, this.authenticator = t
                    }
                    serialize(e) {
                        this.raw_txn.serialize(e), this.authenticator.serialize(e)
                    }
                    static deserialize(e) {
                        const t = xi.deserialize(e),
                            i = hi.deserialize(e);
                        return new Ni(t, i)
                    }
                },
                Di = class {
                    static deserialize(e) {
                        const t = e.deserializeUleb128AsU32();
                        switch (t) {
                            case 0:
                                return Hi.load(e);
                            default:
                                throw new Error("Unknown variant index for RawTransactionWithData: " + t)
                        }
                    }
                },
                Hi = class extends Di {
                    constructor(e, t) {
                        super(), this.raw_txn = e, this.secondary_signer_addresses = t
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(0), this.raw_txn.serialize(e), Kt(this.secondary_signer_addresses, e)
                    }
                    static load(e) {
                        const t = xi.deserialize(e),
                            i = Jt(e, Ht);
                        return new Hi(t, i)
                    }
                },
                $i = class {
                    static deserialize(e) {
                        const t = e.deserializeUleb128AsU32();
                        switch (t) {
                            case 0:
                                return Oi.load(e);
                            case 2:
                                return Wi.load(e);
                            default:
                                throw new Error("Unknown variant index for TransactionPayload: " + t)
                        }
                    }
                },
                Oi = class extends $i {
                    constructor(e) {
                        super(), this.value = e
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(0), this.value.serialize(e)
                    }
                    static load(e) {
                        const t = Ci.deserialize(e);
                        return new Oi(t)
                    }
                },
                Wi = class extends $i {
                    constructor(e) {
                        super(), this.value = e
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(2), this.value.serialize(e)
                    }
                    static load(e) {
                        const t = ki.deserialize(e);
                        return new Wi(t)
                    }
                },
                Li = class {
                    constructor(e) {
                        this.value = e
                    }
                    serialize(e) {
                        e.serializeU8(this.value)
                    }
                    static deserialize(e) {
                        const t = e.deserializeU8();
                        return new Li(t)
                    }
                },
                Vi = class {
                    static deserialize(e) {
                        const t = e.deserializeUleb128AsU32();
                        switch (t) {
                            case 0:
                                return Gi.load(e);
                            case 1:
                                return Ki.load(e);
                            case 2:
                                return ji.load(e);
                            case 3:
                                return Ji.load(e);
                            case 4:
                                return Zi.load(e);
                            case 5:
                                return Xi.load(e);
                            default:
                                throw new Error("Unknown variant index for TransactionArgument: " + t)
                        }
                    }
                },
                Gi = class extends Vi {
                    constructor(e) {
                        super(), this.value = e
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(0), e.serializeU8(this.value)
                    }
                    static load(e) {
                        const t = e.deserializeU8();
                        return new Gi(t)
                    }
                },
                Ki = class extends Vi {
                    constructor(e) {
                        super(), this.value = e
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(1), e.serializeU64(this.value)
                    }
                    static load(e) {
                        const t = e.deserializeU64();
                        return new Ki(t)
                    }
                },
                ji = class extends Vi {
                    constructor(e) {
                        super(), this.value = e
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(2), e.serializeU128(this.value)
                    }
                    static load(e) {
                        const t = e.deserializeU128();
                        return new ji(t)
                    }
                },
                Ji = class extends Vi {
                    constructor(e) {
                        super(), this.value = e
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(3), this.value.serialize(e)
                    }
                    static load(e) {
                        const t = Ht.deserialize(e);
                        return new Ji(t)
                    }
                },
                Zi = class extends Vi {
                    constructor(e) {
                        super(), this.value = e
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(4), e.serializeBytes(this.value)
                    }
                    static load(e) {
                        const t = e.deserializeBytes();
                        return new Zi(t)
                    }
                },
                Xi = class extends Vi {
                    constructor(e) {
                        super(), this.value = e
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(5), e.serializeBool(this.value)
                    }
                    static load(e) {
                        const t = e.deserializeBool();
                        return new Xi(t)
                    }
                },
                Qi = class {
                    getHashSalt() {
                        const e = n.sha3_256.create();
                        return e.update("APTOS::Transaction"), e.digest()
                    }
                    static deserialize(e) {
                        const t = e.deserializeUleb128AsU32();
                        switch (t) {
                            case 0:
                                return Yi.load(e);
                            default:
                                throw new Error("Unknown variant index for Transaction: " + t)
                        }
                    }
                },
                Yi = class extends Qi {
                    constructor(e) {
                        super(), this.value = e
                    }
                    hash() {
                        const e = n.sha3_256.create();
                        return e.update(this.getHashSalt()), e.update(Zt(this)), e.digest()
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(0), this.value.serialize(e)
                    }
                    static load(e) {
                        return new Yi(Ni.deserialize(e))
                    }
                },
                es = class {
                    constructor(e) {
                        if (e.length !== es.LENGTH) throw new Error("Expected a byte array of length 32");
                        this.bytes = e
                    }
                    static fromMultiEd25519PublicKey(e) {
                        const t = e.toBytes(),
                            i = new Uint8Array(t.length + 1);
                        i.set(t), i.set([es.MULTI_ED25519_SCHEME], t.length);
                        const s = n.sha3_256.create();
                        return s.update(i), new es(s.digest())
                    }
                    derivedAddress() {
                        return b.fromUint8Array(this.bytes)
                    }
                },
                ts = es;
            ts.LENGTH = 32, ts.MULTI_ED25519_SCHEME = 1;
            var is = class {
                    constructor(e, t, i, s, r, n, a) {
                        this.accountAddress = e, this.moduleName = t, this.structName = i, this.sequenceNumber = s, this.originator = r, this.currentAuthKey = n, this.newPublicKey = a
                    }
                    serialize(e) {
                        this.accountAddress.serialize(e), e.serializeStr(this.moduleName), e.serializeStr(this.structName), e.serializeU64(this.sequenceNumber), this.originator.serialize(e), this.currentAuthKey.serialize(e), e.serializeBytes(this.newPublicKey)
                    }
                },
                ss = class {
                    constructor(e) {
                        this.name = e
                    }
                    serialize(e) {
                        e.serializeStr(this.name)
                    }
                    static deserialize(e) {
                        const t = e.deserializeStr();
                        return new ss(t)
                    }
                },
                rs = class {
                    constructor(e, t) {
                        this.name = e, this.type_tag = t
                    }
                    serialize(e) {
                        e.serializeStr(this.name), this.type_tag.serialize(e)
                    }
                    static deserialize(e) {
                        const t = e.deserializeStr(),
                            i = bi.deserialize(e);
                        return new rs(t, i)
                    }
                },
                ns = class {
                    static deserialize(e) {
                        const t = e.deserializeUleb128AsU32();
                        switch (t) {
                            case 0:
                                return as.load(e);
                            case 1:
                                return os.load(e);
                            default:
                                throw new Error("Unknown variant index for TransactionPayload: " + t)
                        }
                    }
                },
                as = class extends ns {
                    constructor(e, t, i, s, r) {
                        super(), this.name = e, this.doc = t, this.code = i, this.ty_args = s, this.args = r
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(0), e.serializeStr(this.name), e.serializeStr(this.doc), e.serializeBytes(this.code), Kt(this.ty_args, e), Kt(this.args, e)
                    }
                    static load(e) {
                        const t = e.deserializeStr(),
                            i = e.deserializeStr(),
                            s = e.deserializeBytes(),
                            r = Jt(e, ss),
                            n = Jt(e, rs);
                        return new as(t, i, s, r, n)
                    }
                },
                os = class extends ns {
                    constructor(e, t, i, s, r) {
                        super(), this.name = e, this.module_name = t, this.doc = i, this.ty_args = s, this.args = r
                    }
                    serialize(e) {
                        e.serializeU32AsUleb128(1), e.serializeStr(this.name), this.module_name.serialize(e), e.serializeStr(this.doc), Kt(this.ty_args, e), Kt(this.args, e)
                    }
                    static load(e) {
                        const t = e.deserializeStr(),
                            i = Mi.deserialize(e),
                            s = e.deserializeStr(),
                            r = Jt(e, ss),
                            n = Jt(e, rs);
                        return new os(t, i, s, r, n)
                    }
                };

            function cs(e, t, i) {
                if (!(null == t ? void 0 : t.includes(typeof e))) throw new Error(i || `Invalid arg: ${e} type should be ${t instanceof Array?t.join(" or "):t}`)
            }

            function us(e) {
                throw new Error(e)
            }

            function ls(e) {
                return !!e.match(/\s/)
            }

            function ds(e) {
                return !!e.match(/[_A-Za-z0-9]/g)
            }

            function ps(e, t) {
                const i = e[t];
                if (":" === i) {
                    if ("::" === e.slice(t, t + 2)) return [
                        ["COLON", "::"], 2
                    ];
                    us("Unrecognized token.")
                } else {
                    if ("<" === i) return [
                        ["LT", "<"], 1
                    ];
                    if (">" === i) return [
                        ["GT", ">"], 1
                    ];
                    if ("," === i) return [
                        ["COMMA", ","], 1
                    ];
                    if (ls(i)) {
                        let i = "";
                        for (let s = t; s < e.length; s += 1) {
                            const t = e[s];
                            if (!ls(t)) break;
                            i = `${i}${t}`
                        }
                        return [
                            ["SPACE", i], i.length
                        ]
                    }
                    if (ds(i)) {
                        let i = "";
                        for (let s = t; s < e.length; s += 1) {
                            const t = e[s];
                            if (!ds(t)) break;
                            i = `${i}${t}`
                        }
                        return [
                            ["IDENT", i], i.length
                        ]
                    }
                }
                throw new Error("Unrecognized token.")
            }
            var hs = class {
                constructor(e) {
                    this.tokens = function(e) {
                        let t = 0;
                        const i = [];
                        for (; t < e.length;) {
                            const [s, r] = ps(e, t);
                            "SPACE" !== s[0] && i.push(s), t += r
                        }
                        return i
                    }(e)
                }
                consume(e) {
                    const t = this.tokens.shift();
                    t && t[1] === e || us("Invalid type tag.")
                }
                parseCommaList(e, t) {
                    const i = [];
                    for (this.tokens.length <= 0 && us("Invalid type tag."); !(this.tokens[0][1] === e || (i.push(this.parseTypeTag()), this.tokens.length > 0 && this.tokens[0][1] === e) || (this.consume(","), this.tokens.length > 0 && this.tokens[0][1] === e && t));) this.tokens.length <= 0 && us("Invalid type tag.");
                    return i
                }
                parseTypeTag() {
                    0 === this.tokens.length && us("Invalid type tag.");
                    const [e, t] = this.tokens.shift();
                    if ("u8" === t) return new Ei;
                    if ("u64" === t) return new Ai;
                    if ("u128" === t) return new Si;
                    if ("bool" === t) return new Ti;
                    if ("address" === t) return new Ri;
                    if ("vector" === t) {
                        this.consume("<");
                        const e = this.parseTypeTag();
                        return this.consume(">"), new Ui(e)
                    }
                    if ("IDENT" === e && (t.startsWith("0x") || t.startsWith("0X"))) {
                        const e = t;
                        this.consume("::");
                        const [i, s] = this.tokens.shift();
                        "IDENT" !== i && us("Invalid type tag."), this.consume("::");
                        const [r, n] = this.tokens.shift();
                        "IDENT" !== r && us("Invalid type tag.");
                        let a = [];
                        this.tokens.length > 0 && "<" === this.tokens[0][1] && (this.consume("<"), a = this.parseCommaList(">", !0), this.consume(">"));
                        const o = new Bi(Ht.fromHex(e), new vi(s), new vi(n), a);
                        return new qi(o)
                    }
                    throw new Error("Invalid type tag.")
                }
            };

            function ys(e) {
                if (cs(e, ["boolean", "string"]), "boolean" == typeof e) return e;
                if ("true" === e) return !0;
                if ("false" === e) return !1;
                throw new Error("Invalid boolean string.")
            }

            function gs(e) {
                if (cs(e, ["number", "string"]), "number" == typeof e) return e;
                const t = Number.parseInt(e, 10);
                if (Number.isNaN(t)) throw new Error("Invalid number string.");
                return t
            }

            function fs(e) {
                return cs(e, ["number", "bigint", "string"]), BigInt(e)
            }
            var ms, _s, ws = class {
                    constructor(e, t) {
                        this.rawTxnBuilder = t, this.signingFunction = e
                    }
                    build(e, t, i) {
                        if (!this.rawTxnBuilder) throw new Error("this.rawTxnBuilder doesn't exist.");
                        return this.rawTxnBuilder.build(e, t, i)
                    }
                    static getSigningMessage(e) {
                        const t = n.sha3_256.create();
                        if (e instanceof xi) t.update("APTOS::RawTransaction");
                        else {
                            if (!(e instanceof Hi)) throw new Error("Unknown transaction type.");
                            t.update("APTOS::RawTransactionWithData")
                        }
                        const i = t.digest(),
                            s = Zt(e),
                            r = new Uint8Array(i.length + s.length);
                        return r.set(i), r.set(s, i.length), r
                    }
                },
                vs = class extends ws {
                    constructor(e, t, i) {
                        super(e, i), this.publicKey = t
                    }
                    rawToSigned(e) {
                        const t = ws.getSigningMessage(e),
                            i = this.signingFunction(t),
                            s = new yi(new oi(this.publicKey), i);
                        return new Ni(e, s)
                    }
                    sign(e) {
                        return Zt(this.rawToSigned(e))
                    }
                },
                bs = class extends ws {
                    constructor(e, t) {
                        super(e), this.publicKey = t
                    }
                    rawToSigned(e) {
                        const t = ws.getSigningMessage(e),
                            i = this.signingFunction(t),
                            s = new gi(this.publicKey, i);
                        return new Ni(e, s)
                    }
                    sign(e) {
                        return Zt(this.rawToSigned(e))
                    }
                },
                Ts = class {
                    constructor(e, t) {
                        this.abiMap = new Map, e.forEach(e => {
                            const t = new Gt(e),
                                i = ns.deserialize(t);
                            let s;
                            if (i instanceof os) {
                                const e = i,
                                    {
                                        address: t,
                                        name: r
                                    } = e.module_name;
                                s = `${b.fromUint8Array(t.address).toShortString()}::${r.value}::${e.name}`
                            } else {
                                s = i.name
                            }
                            if (this.abiMap.has(s)) throw new Error("Found conflicting ABI interfaces");
                            this.abiMap.set(s, i)
                        }), this.builderConfig = {
                            maxGasAmount: BigInt(2e5),
                            expSecFromNow: 20,
                            ...t
                        }
                    }
                    static toBCSArgs(e, t) {
                        if (e.length !== t.length) throw new Error("Wrong number of args provided.");
                        return t.map((t, i) => {
                            const s = new Lt;
                            return function e(t, i, s) {
                                if (i instanceof Ti) s.serializeBool(ys(t));
                                else if (i instanceof Ei) s.serializeU8(gs(t));
                                else if (i instanceof Ai) s.serializeU64(fs(t));
                                else if (i instanceof Si) s.serializeU128(fs(t));
                                else {
                                    if (!(i instanceof Ri)) {
                                        if (i instanceof Ui) {
                                            if (i.value instanceof Ei) {
                                                if (t instanceof Uint8Array) return void s.serializeBytes(t);
                                                if ("string" == typeof t) return void s.serializeStr(t)
                                            }
                                            if (!(t instanceof Array)) throw new Error("Invalid vector args.");
                                            return s.serializeU32AsUleb128(t.length), void t.forEach(t => e(t, i.value, s))
                                        }
                                        if (i instanceof qi) {
                                            const {
                                                address: e,
                                                module_name: r,
                                                name: n
                                            } = i.value;
                                            if ("0x1::string::String" != `${b.fromUint8Array(e.address).toShortString()}::${r.value}::${n.value}`) throw new Error("The only supported struct arg is of type 0x1::string::String");
                                            return cs(t, ["string"]), void s.serializeStr(t)
                                        }
                                        throw new Error("Unsupported arg type.")
                                    } {
                                        let e;
                                        if ("string" == typeof t || t instanceof b) e = Ht.fromHex(t);
                                        else {
                                            if (!(t instanceof Ht)) throw new Error("Invalid account address.");
                                            e = t
                                        }
                                        e.serialize(s)
                                    }
                                }
                            }(t, e[i].type_tag, s), s.getBytes()
                        })
                    }
                    static toTransactionArguments(e, t) {
                        if (e.length !== t.length) throw new Error("Wrong number of args provided.");
                        return t.map((t, i) => function(e, t) {
                            if (t instanceof Ti) return new Xi(ys(e));
                            if (t instanceof Ei) return new Gi(gs(e));
                            if (t instanceof Ai) return new Ki(fs(e));
                            if (t instanceof Si) return new ji(fs(e));
                            if (t instanceof Ri) {
                                let t;
                                if ("string" == typeof e || e instanceof b) t = Ht.fromHex(e);
                                else {
                                    if (!(e instanceof Ht)) throw new Error("Invalid account address.");
                                    t = e
                                }
                                return new Ji(t)
                            }
                            if (t instanceof Ui && t.value instanceof Ei) {
                                if (!(e instanceof Uint8Array)) throw new Error(e + " should be an instance of Uint8Array");
                                return new Zi(e)
                            }
                            throw new Error("Unknown type for TransactionArgument.")
                        }(t, e[i].type_tag))
                    }
                    setSequenceNumber(e) {
                        this.builderConfig.sequenceNumber = BigInt(e)
                    }
                    buildTransactionPayload(e, t, i) {
                        const s = t.map(e => new hs(e).parseTypeTag());
                        let r;
                        if (!this.abiMap.has(e)) throw new Error("Cannot find function: " + e);
                        const n = this.abiMap.get(e);
                        if (n instanceof os) {
                            const e = n,
                                t = Ts.toBCSArgs(e.args, i);
                            r = new Wi(new ki(e.module_name, new vi(e.name), s, t))
                        } else {
                            if (!(n instanceof as)) throw new Error("Unknown ABI format.");
                            {
                                const e = n,
                                    t = Ts.toTransactionArguments(e.args, i);
                                r = new Oi(new Ci(e.code, s, t))
                            }
                        }
                        return r
                    }
                    build(e, t, i) {
                        const {
                            sender: s,
                            sequenceNumber: r,
                            gasUnitPrice: n,
                            maxGasAmount: a,
                            expSecFromNow: o,
                            chainId: c
                        } = this.builderConfig;
                        if (!n) throw new Error("No gasUnitPrice provided.");
                        const u = s instanceof Ht ? s : Ht.fromHex(s),
                            l = BigInt(Math.floor(Date.now() / 1e3) + Number(o)),
                            d = this.buildTransactionPayload(e, t, i);
                        if (d) return new xi(u, BigInt(r), d, BigInt(a), BigInt(n), l, new Li(Number(c)));
                        throw new Error("Invalid ABI.")
                    }
                },
                Es = class {
                    constructor(e, t) {
                        this.aptosClient = e, this.builderConfig = t
                    }
                    async fetchABI(e) {
                        const t = (await this.aptosClient.getAccountModules(e)).map(e => e.abi).flatMap(e => e.exposed_functions.filter(e => e.is_entry).map(t => ({
                                fullName: `${e.address}::${e.name}::${t.name}`,
                                ...t
                            }))),
                            i = new Map;
                        return t.forEach(e => {
                            i.set(e.fullName, e)
                        }), i
                    }
                    async build(e, t, i) {
                        if (3 !== (e = e.replace(/^0[xX]0*/g, "0x")).split("::").length) throw new Error("'func' needs to be a fully qualified function name in format <address>::<module>::<function>, e.g. 0x1::coins::transfer");
                        const [s, r] = e.split("::"), n = await this.fetchABI(s);
                        if (!n.has(e)) throw new Error(e + " doesn't exist.");
                        const a = n.get(e),
                            o = a.params.filter(e => "signer" !== e && "&signer" !== e).map((e, t) => new rs("var" + t, new hs(e).parseTypeTag())),
                            c = new os(a.name, Mi.fromStr(`${s}::${r}`), "", a.generic_type_params.map((e, t) => new ss("" + t)), o),
                            {
                                sender: u,
                                ...l
                            } = this.builderConfig,
                            d = u instanceof Ht ? b.fromUint8Array(u.address) : u,
                            [{
                                sequence_number: p
                            }, h, {
                                gas_estimate: y
                            }] = await Promise.all([(null == l ? void 0 : l.sequenceNumber) ? Promise.resolve({
                                sequence_number: null == l ? void 0 : l.sequenceNumber
                            }) : this.aptosClient.getAccount(d), (null == l ? void 0 : l.chainId) ? Promise.resolve(null == l ? void 0 : l.chainId) : this.aptosClient.getChainId(), (null == l ? void 0 : l.gasUnitPrice) ? Promise.resolve({
                                gas_estimate: null == l ? void 0 : l.gasUnitPrice
                            }) : this.aptosClient.estimateGasPrice()]);
                        return new Ts([Zt(c)], {
                            sender: u,
                            sequenceNumber: p,
                            chainId: h,
                            gasUnitPrice: BigInt(y),
                            ...l
                        }).build(e, t, i)
                    }
                };
            m([(ms = 6e5, A({
                ttlMs: ms,
                hashFunction: _s
            }))], Es.prototype, "fetchABI", 1);
            var As = class {
                    constructor(e, t, i = !1) {
                        if (!e) throw new Error("Node URL cannot be empty.");
                        const s = null == t ? {} : {
                            ...t
                        };
                        this.nodeUrl = i ? e : function(e) {
                            let t = "" + e;
                            return t.endsWith("/") && (t = t.substring(0, t.length - 1)), t.endsWith("/v1") || (t += "/v1"), t
                        }(e), s.BASE = this.nodeUrl, !1 === (null == t ? void 0 : t.WITH_CREDENTIALS) ? s.WITH_CREDENTIALS = !1 : s.WITH_CREDENTIALS = !0, this.client = new X(s)
                    }
                    async getAccount(e) {
                        return this.client.accounts.getAccount(b.ensure(e).hex())
                    }
                    async getAccountTransactions(e, t) {
                        var i;
                        return this.client.transactions.getAccountTransactions(b.ensure(e).hex(), null == (i = null == t ? void 0 : t.start) ? void 0 : i.toString(), null == t ? void 0 : t.limit)
                    }
                    async getAccountModules(e, t) {
                        var i;
                        return this.client.accounts.getAccountModules(b.ensure(e).hex(), null == (i = null == t ? void 0 : t.ledgerVersion) ? void 0 : i.toString())
                    }
                    async getAccountModule(e, t, i) {
                        var s;
                        return this.client.accounts.getAccountModule(b.ensure(e).hex(), t, null == (s = null == i ? void 0 : i.ledgerVersion) ? void 0 : s.toString())
                    }
                    async getAccountResources(e, t) {
                        var i;
                        return this.client.accounts.getAccountResources(b.ensure(e).hex(), null == (i = null == t ? void 0 : t.ledgerVersion) ? void 0 : i.toString())
                    }
                    async getAccountResource(e, t, i) {
                        var s;
                        return this.client.accounts.getAccountResource(b.ensure(e).hex(), t, null == (s = null == i ? void 0 : i.ledgerVersion) ? void 0 : s.toString())
                    }
                    static generateBCSTransaction(e, t) {
                        return new vs(t => {
                            const i = e.signBuffer(t);
                            return new Nt.Ed25519Signature(i.toUint8Array())
                        }, e.pubKey().toUint8Array()).sign(t)
                    }
                    static generateBCSSimulation(e, t) {
                        return new vs(e => {
                            const t = new Uint8Array(64);
                            return new Nt.Ed25519Signature(t)
                        }, e.pubKey().toUint8Array()).sign(t)
                    }
                    async generateTransaction(e, t, i) {
                        const s = {
                            sender: e
                        };
                        if ((null == i ? void 0 : i.sequence_number) && (s.sequenceNumber = i.sequence_number), (null == i ? void 0 : i.gas_unit_price) && (s.gasUnitPrice = i.gas_unit_price), (null == i ? void 0 : i.max_gas_amount) && (s.maxGasAmount = i.max_gas_amount), null == i ? void 0 : i.expiration_timestamp_secs) {
                            const e = Number.parseInt(i.expiration_timestamp_secs, 10);
                            s.expSecFromNow = e - Math.floor(Date.now() / 1e3)
                        }
                        return new Es(this, s).build(t.function, t.type_arguments, t.arguments)
                    }
                    async signTransaction(e, t) {
                        return Promise.resolve(As.generateBCSTransaction(e, t))
                    }
                    async getEventsByCreationNumber(e, t, i) {
                        var s;
                        return this.client.events.getEventsByCreationNumber(b.ensure(e).hex(), t.toString(), null == (s = null == i ? void 0 : i.start) ? void 0 : s.toString(), null == i ? void 0 : i.limit)
                    }
                    async getEventsByEventHandle(e, t, i, s) {
                        var r;
                        return this.client.events.getEventsByEventHandle(b.ensure(e).hex(), t, i, null == (r = null == s ? void 0 : s.start) ? void 0 : r.toString(), null == s ? void 0 : s.limit)
                    }
                    async submitTransaction(e) {
                        return this.submitSignedBCSTransaction(e)
                    }
                    async simulateTransaction(e, t, i) {
                        let s;
                        if (e instanceof U) s = As.generateBCSSimulation(e, t);
                        else {
                            s = new vs(() => {
                                const e = new Uint8Array(64);
                                return new Nt.Ed25519Signature(e)
                            }, e.toBytes()).sign(t)
                        }
                        return this.submitBCSSimulation(s, i)
                    }
                    async submitSignedBCSTransaction(e) {
                        return this.client.request.request({
                            url: "/transactions",
                            method: "POST",
                            body: e,
                            mediaType: "application/x.aptos.signed_transaction+bcs"
                        })
                    }
                    async submitBCSSimulation(e, t) {
                        var i, s, r;
                        const n = {
                            estimate_gas_unit_price: null != (i = null == t ? void 0 : t.estimateGasUnitPrice) && i,
                            estimate_max_gas_amount: null != (s = null == t ? void 0 : t.estimateMaxGasAmount) && s,
                            estimate_prioritized_gas_unit_price: null != (r = null == t ? void 0 : t.estimatePrioritizedGasUnitPrice) && r
                        };
                        return this.client.request.request({
                            url: "/transactions/simulate",
                            query: n,
                            method: "POST",
                            body: e,
                            mediaType: "application/x.aptos.signed_transaction+bcs"
                        })
                    }
                    async getTransactions(e) {
                        var t;
                        return this.client.transactions.getTransactions(null == (t = null == e ? void 0 : e.start) ? void 0 : t.toString(), null == e ? void 0 : e.limit)
                    }
                    async getTransactionByHash(e) {
                        return this.client.transactions.getTransactionByHash(e)
                    }
                    async getTransactionByVersion(e) {
                        return this.client.transactions.getTransactionByVersion(e.toString())
                    }
                    async transactionPending(e) {
                        try {
                            return "pending_transaction" === (await this.client.transactions.getTransactionByHash(e)).type
                        } catch (e) {
                            if (404 === (null == e ? void 0 : e.status)) return !0;
                            throw e
                        }
                    }
                    async waitForTransactionWithResult(e, t) {
                        var i, s;
                        const r = null != (i = null == t ? void 0 : t.timeoutSecs) ? i : 20,
                            n = null != (s = null == t ? void 0 : t.checkSuccess) && s;
                        let a, o = !0,
                            c = 0;
                        for (; o && !(c >= r);) {
                            try {
                                if (a = await this.client.transactions.getTransactionByHash(e), o = "pending_transaction" === a.type, !o) break
                            } catch (e) {
                                const t = e instanceof x,
                                    i = t && 404 !== e.status && e.status >= 400 && e.status < 500;
                                if (!t || i) throw e
                            }
                            await T(1e3), c += 1
                        }
                        if (void 0 === a) throw new Error(`Waiting for transaction ${e} failed`);
                        if (o) throw new zs(`Waiting for transaction ${e} timed out after ${r} seconds`, a);
                        if (!n) return a;
                        if (!(null == a ? void 0 : a.success)) throw new Us(`Transaction ${e} committed to the blockchain but execution failed`, a);
                        return a
                    }
                    async waitForTransaction(e, t) {
                        await this.waitForTransactionWithResult(e, t)
                    }
                    async getLedgerInfo() {
                        return this.client.general.getLedgerInfo()
                    }
                    async getChainId() {
                        return (await this.getLedgerInfo()).chain_id
                    }
                    async getTableItem(e, t, i) {
                        var s;
                        return await this.client.tables.getTableItem(e, t, null == (s = null == i ? void 0 : i.ledgerVersion) ? void 0 : s.toString())
                    }
                    async generateRawTransaction(e, t, i) {
                        const [{
                            sequence_number: s
                        }, r, {
                            gas_estimate: n
                        }] = await Promise.all([this.getAccount(e), this.getChainId(), (null == i ? void 0 : i.gasUnitPrice) ? Promise.resolve({
                            gas_estimate: i.gasUnitPrice
                        }) : this.estimateGasPrice()]), {
                            maxGasAmount: a,
                            gasUnitPrice: o,
                            expireTimestamp: c
                        } = {
                            maxGasAmount: BigInt(2e5),
                            gasUnitPrice: BigInt(n),
                            expireTimestamp: BigInt(Math.floor(Date.now() / 1e3) + 20),
                            ...i
                        };
                        return new Nt.RawTransaction(Nt.AccountAddress.fromHex(e), BigInt(s), t, a, o, c, new Nt.ChainId(r))
                    }
                    async generateSignSubmitTransaction(e, t, i) {
                        const s = await this.generateRawTransaction(e.address(), t, i),
                            r = As.generateBCSTransaction(e, s);
                        return (await this.submitSignedBCSTransaction(r)).hash
                    }
                    async publishPackage(e, t, i, s) {
                        const r = new Lt;
                        Kt(i, r);
                        const n = new Nt.TransactionPayloadEntryFunction(Nt.EntryFunction.natural("0x1::code", "publish_package_txn", [], [ri(t), r.getBytes()]));
                        return this.generateSignSubmitTransaction(e, n, s)
                    }
                    async generateSignSubmitWaitForTransaction(e, t, i) {
                        const s = await this.generateSignSubmitTransaction(e, t, i);
                        return this.waitForTransactionWithResult(s, i)
                    }
                    async estimateGasPrice() {
                        return this.client.transactions.estimateGasPrice()
                    }
                    async estimateMaxGasAmount(e) {
                        const t = `0x1::coin::CoinStore<${E}>`,
                            [{
                                gas_estimate: i
                            }, s] = await Promise.all([this.estimateGasPrice(), this.getAccountResources(e)]),
                            r = s.find(e => e.type === t);
                        return BigInt(r.data.coin.value) / BigInt(i)
                    }
                    async rotateAuthKeyEd25519(e, t, i) {
                        const {
                            sequence_number: s,
                            authentication_key: r
                        } = await this.getAccount(e.address()), n = new U(t), a = new Nt.RotationProofChallenge(Nt.AccountAddress.CORE_CODE_ADDRESS, "account", "RotationProofChallenge", BigInt(s), Nt.AccountAddress.fromHex(e.address()), new Nt.AccountAddress(new b(r).toUint8Array()), n.pubKey().toUint8Array()), o = b.fromUint8Array(Zt(a)), c = e.signHexString(o), u = n.signHexString(o), l = new Nt.TransactionPayloadEntryFunction(Nt.EntryFunction.natural("0x1::account", "rotate_authentication_key", [], [Qt(0), ri(e.pubKey().toUint8Array()), Qt(0), ri(n.pubKey().toUint8Array()), ri(c.toUint8Array()), ri(u.toUint8Array())])), d = await this.generateRawTransaction(e.address(), l, i), p = As.generateBCSTransaction(e, d);
                        return this.submitSignedBCSTransaction(p)
                    }
                    async lookupOriginalAddress(e) {
                        const t = await this.getAccountResource("0x1", "0x1::account::OriginatingAddress"),
                            {
                                address_map: {
                                    handle: i
                                }
                            } = t.data,
                            s = await this.getTableItem(i, {
                                key_type: "address",
                                value_type: "address",
                                key: b.ensure(e).hex()
                            });
                        return new b(s)
                    }
                    async getBlockByHeight(e, t) {
                        return this.client.blocks.getBlockByHeight(e, t)
                    }
                    async getBlockByVersion(e, t) {
                        return this.client.blocks.getBlockByVersion(e, t)
                    }
                    clearCache(e) {
                        ! function(e) {
                            const t = new Set;
                            for (const i of e) {
                                const e = S.get(i);
                                if (e)
                                    for (const i of e) t.has(i) || (i.clear(), t.add(i))
                            }
                            t.size
                        }(e)
                    }
                },
                Ss = As;
            m([qs], Ss.prototype, "getAccount", 1), m([qs], Ss.prototype, "getAccountTransactions", 1), m([qs], Ss.prototype, "getAccountModules", 1), m([qs], Ss.prototype, "getAccountModule", 1), m([qs], Ss.prototype, "getAccountResources", 1), m([qs], Ss.prototype, "getAccountResource", 1), m([qs], Ss.prototype, "getEventsByCreationNumber", 1), m([qs], Ss.prototype, "getEventsByEventHandle", 1), m([qs], Ss.prototype, "submitSignedBCSTransaction", 1), m([qs], Ss.prototype, "submitBCSSimulation", 1), m([qs], Ss.prototype, "getTransactions", 1), m([qs], Ss.prototype, "getTransactionByHash", 1), m([qs], Ss.prototype, "getTransactionByVersion", 1), m([qs], Ss.prototype, "getLedgerInfo", 1), m([A()], Ss.prototype, "getChainId", 1), m([qs], Ss.prototype, "getTableItem", 1), m([qs, A({
                ttlMs: 3e5,
                tags: ["gas_estimates"]
            })], Ss.prototype, "estimateGasPrice", 1), m([qs], Ss.prototype, "estimateMaxGasAmount", 1), m([qs], Ss.prototype, "getBlockByHeight", 1), m([qs], Ss.prototype, "getBlockByVersion", 1);
            var Rs = class extends Error {
                    constructor(e, t, i, s) {
                        super(t), this.status = e, this.message = t, this.errorCode = i, this.vmErrorCode = s
                    }
                },
                zs = class extends Error {
                    constructor(e, t) {
                        super(e), this.lastSubmittedTransaction = t
                    }
                },
                Us = class extends Error {
                    constructor(e, t) {
                        super(e), this.transaction = t
                    }
                };

            function qs(e, t, i) {
                const s = i.value;
                return i.value = async function(...e) {
                    var t, i;
                    try {
                        return await s.apply(this, [...e])
                    } catch (e) {
                        if (e instanceof x) throw new Rs(e.status, JSON.stringify({
                            message: e.message,
                            ...e.body
                        }), null == (t = e.body) ? void 0 : t.error_code, null == (i = e.body) ? void 0 : i.vm_error_code);
                        throw e
                    }
                }, i
            }
            var Bs = ["01186372656174655F636F6C6C656374696F6E5F736372697074000000000000000000000000000000000000000000000000000000000000000305746F6B656E3020637265617465206120656D70747920746F6B656E20636F6C6C656374696F6E207769746820706172616D65746572730005046E616D6507000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67000B6465736372697074696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67000375726907000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700076D6178696D756D020E6D75746174655F73657474696E670600", "01136372656174655F746F6B656E5F736372697074000000000000000000000000000000000000000000000000000000000000000305746F6B656E1D2063726561746520746F6B656E20776974682072617720696E70757473000D0A636F6C6C656374696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700046E616D6507000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67000B6465736372697074696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67000762616C616E636502076D6178696D756D020375726907000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E670015726F79616C74795F70617965655F61646472657373041A726F79616C74795F706F696E74735F64656E6F6D696E61746F720218726F79616C74795F706F696E74735F6E756D657261746F72020E6D75746174655F73657474696E6706000D70726F70657274795F6B6579730607000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67000F70726F70657274795F76616C7565730606010E70726F70657274795F74797065730607000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700", "01166469726563745f7472616e736665725f736372697074000000000000000000000000000000000000000000000000000000000000000305746f6b656e0000051063726561746f72735f61646472657373040a636f6c6c656374696f6e07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700046e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e0206616d6f756e7402", "010C6F666665725F73637269707400000000000000000000000000000000000000000000000000000000000000030F746F6B656E5F7472616E7366657273000006087265636569766572040763726561746F72040A636F6C6C656374696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700046E616D6507000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67001070726F70657274795F76657273696F6E0206616D6F756E7402", "010C636C61696D5F73637269707400000000000000000000000000000000000000000000000000000000000000030F746F6B656E5F7472616E73666572730000050673656E646572040763726561746F72040A636F6C6C656374696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700046E616D6507000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67001070726F70657274795F76657273696F6E02", "011363616E63656C5F6F666665725F73637269707400000000000000000000000000000000000000000000000000000000000000030F746F6B656E5F7472616E7366657273000005087265636569766572040763726561746F72040A636F6C6C656374696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700046E616D6507000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67001070726F70657274795F76657273696F6E02"],
                xs = ["01087472616E73666572000000000000000000000000000000000000000000000000000000000000000104636F696E3C205472616E73666572732060616D6F756E7460206F6620636F696E732060436F696E54797065602066726F6D206066726F6D6020746F2060746F602E0109636F696E5F747970650202746F0406616D6F756E7402"],
                Cs = class {
                    constructor(e) {
                        this.aptosClient = e, this.transactionBuilder = new Ts(xs.map(e => new b(e).toUint8Array()))
                    }
                    async transfer(e, t, i, s) {
                        var r;
                        const n = null != (r = null == s ? void 0 : s.coinType) ? r : E,
                            a = this.transactionBuilder.buildTransactionPayload("0x1::coin::transfer", [n], [t.address(), i]);
                        return this.aptosClient.generateSignSubmitTransaction(e, a, s)
                    }
                    async checkBalance(e, t) {
                        var i;
                        const s = `0x1::coin::CoinStore<${null!=(i=null==t?void 0:t.coinType)?i:E}>`,
                            r = (await this.aptosClient.getAccountResources(e.address())).find(e => e.type === s);
                        return BigInt(r.data.coin.value)
                    }
                },
                ks = class extends Ss {
                    constructor(e, t, i) {
                        var s, r, n;
                        if (super(e, i), !t) throw new Error("Faucet URL cannot be empty.");
                        this.faucetRequester = new L({
                            BASE: t,
                            VERSION: null != (s = null == i ? void 0 : i.VERSION) ? s : "0.1.0",
                            WITH_CREDENTIALS: null != (r = null == i ? void 0 : i.WITH_CREDENTIALS) && r,
                            CREDENTIALS: null != (n = null == i ? void 0 : i.CREDENTIALS) ? n : "include",
                            TOKEN: null == i ? void 0 : i.TOKEN,
                            USERNAME: null == i ? void 0 : i.USERNAME,
                            PASSWORD: null == i ? void 0 : i.PASSWORD,
                            HEADERS: null == i ? void 0 : i.HEADERS,
                            ENCODE_PATH: null == i ? void 0 : i.ENCODE_PATH
                        })
                    }
                    async fundAccount(e, t, i = 20) {
                        const s = await this.faucetRequester.request({
                                method: "POST",
                                url: "/mint",
                                query: {
                                    address: b.ensure(e).noPrefix(),
                                    amount: t
                                }
                            }),
                            r = [];
                        for (let e = 0; e < s.length; e += 1) {
                            const t = s[e];
                            r.push(this.waitForTransaction(t, {
                                timeoutSecs: i
                            }))
                        }
                        return await Promise.all(r), s
                    }
                },
                Is = class {
                    constructor(e) {
                        this.aptosClient = e, this.transactionBuilder = new Ts(Bs.map(e => new b(e).toUint8Array()))
                    }
                    async createCollection(e, t, i, s, r = Ot, n) {
                        const a = this.transactionBuilder.buildTransactionPayload("0x3::token::create_collection_script", [], [t, i, s, r, [!1, !1, !1]]);
                        return this.aptosClient.generateSignSubmitTransaction(e, a, n)
                    }
                    async createToken(e, t, i, s, r, n, a = Ot, o = e.address(), c = 0, u = 0, l = [], d = [], p = [], h) {
                        const y = this.transactionBuilder.buildTransactionPayload("0x3::token::create_token_script", [], [t, i, s, r, a, n, o, c, u, [!1, !1, !1, !1, !1], l, d, p]);
                        return this.aptosClient.generateSignSubmitTransaction(e, y, h)
                    }
                    async offerToken(e, t, i, s, r, n, a = 0, o) {
                        const c = this.transactionBuilder.buildTransactionPayload("0x3::token_transfers::offer_script", [], [t, i, s, r, a, n]);
                        return this.aptosClient.generateSignSubmitTransaction(e, c, o)
                    }
                    async claimToken(e, t, i, s, r, n = 0, a) {
                        const o = this.transactionBuilder.buildTransactionPayload("0x3::token_transfers::claim_script", [], [t, i, s, r, n]);
                        return this.aptosClient.generateSignSubmitTransaction(e, o, a)
                    }
                    async cancelTokenOffer(e, t, i, s, r, n = 0, a) {
                        const o = this.transactionBuilder.buildTransactionPayload("0x3::token_transfers::cancel_offer_script", [], [t, i, s, r, n]);
                        return this.aptosClient.generateSignSubmitTransaction(e, o, a)
                    }
                    async directTransferToken(e, t, i, s, r, n, a = 0, o) {
                        const c = this.transactionBuilder.buildTransactionPayload("0x3::token::direct_transfer_script", [], [i, s, r, a, n]),
                            u = await this.aptosClient.generateRawTransaction(e.address(), c, o),
                            l = new Nt.MultiAgentRawTransaction(u, [Nt.AccountAddress.fromHex(t.address())]),
                            d = new Nt.Ed25519Signature(e.signBuffer(ws.getSigningMessage(l)).toUint8Array()),
                            p = new Nt.AccountAuthenticatorEd25519(new Nt.Ed25519PublicKey(e.signingKey.publicKey), d),
                            h = new Nt.Ed25519Signature(t.signBuffer(ws.getSigningMessage(l)).toUint8Array()),
                            y = new Nt.AccountAuthenticatorEd25519(new Nt.Ed25519PublicKey(t.signingKey.publicKey), h),
                            g = new Nt.TransactionAuthenticatorMultiAgent(p, [Nt.AccountAddress.fromHex(t.address())], [y]),
                            f = Zt(new Nt.SignedTransaction(u, g));
                        return (await this.aptosClient.submitSignedBCSTransaction(f)).hash
                    }
                    async getCollectionData(e, t) {
                        const i = (await this.aptosClient.getAccountResources(e)).find(e => "0x3::token::Collections" === e.type),
                            {
                                handle: s
                            } = i.data.collection_data,
                            r = {
                                key_type: "0x1::string::String",
                                value_type: "0x3::token::CollectionData",
                                key: t
                            };
                        return await this.aptosClient.getTableItem(s, r)
                    }
                    async getTokenData(e, t, i) {
                        const s = e instanceof b ? e.hex() : e,
                            r = await this.aptosClient.getAccountResource(s, "0x3::token::Collections"),
                            {
                                handle: n
                            } = r.data.token_data,
                            a = {
                                key_type: "0x3::token::TokenDataId",
                                value_type: "0x3::token::TokenData",
                                key: {
                                    creator: s,
                                    collection: t,
                                    name: i
                                }
                            };
                        return this.aptosClient.getTableItem(n, a)
                    }
                    async getToken(e, t, i, s = "0") {
                        const r = {
                            creator: e instanceof b ? e.hex() : e,
                            collection: t,
                            name: i
                        };
                        return this.getTokenForAccount(e, {
                            token_data_id: r,
                            property_version: s
                        })
                    }
                    async getTokenForAccount(e, t) {
                        const i = await this.aptosClient.getAccountResource(e instanceof b ? e.hex() : e, "0x3::token::TokenStore"),
                            {
                                handle: s
                            } = i.data.tokens,
                            r = {
                                key_type: "0x3::token::TokenId",
                                value_type: "0x3::token::Token",
                                key: t
                            };
                        try {
                            return await this.aptosClient.getTableItem(s, r)
                        } catch (e) {
                            return 404 === (null == e ? void 0 : e.status) ? {
                                id: t,
                                amount: "0"
                            } : e
                        }
                    }
                },
                Ms = {}
        }
    }
]);