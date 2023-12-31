/*! For license information please see vendors.c637e046d2e69a3f8a1b.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [105], {
        1079: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Assignable = t.Enum = void 0;
            t.Enum = class Enum {
                constructor(e) {
                    if (1 !== Object.keys(e).length) throw new Error("Enum can only take single value");
                    Object.keys(e).map(t => {
                        this[t] = e[t], this.enum = t
                    })
                }
            };
            t.Assignable = class Assignable {
                constructor(e) {
                    Object.keys(e).map(t => {
                        this[t] = e[t]
                    })
                }
            }
        },
        1080: function(e, t, n) {
            "use strict";

            function r(e) {
                return new Promise(t => setTimeout(t, e))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = async function(e, t, n, i) {
                let o = e;
                for (let e = 0; e < t; e++) {
                    const e = await i();
                    if (e) return e;
                    await r(o), o *= n
                }
                return null
            }
        },
        1081: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getErrorTypeFromErrorMessage = t.formatError = t.parseResultError = t.parseRpcError = t.ServerError = void 0;
            const i = r(n(3702)),
                o = r(n(3703)),
                s = r(n(3704)),
                a = n(1877),
                c = n(415),
                u = {
                    formatNear: () => (e, t) => a.utils.format.formatNearAmount(t(e))
                };
            class ServerError extends c.TypedError {}
            t.ServerError = ServerError;
            class ServerTransactionError extends ServerError {}

            function l(e) {
                const t = {},
                    n = function e(t, n, r, i) {
                        let o, s, a;
                        for (const e in n) {
                            if (c = t[e], "[object String]" === Object.prototype.toString.call(c)) return t[e];
                            if (h(t[e])) o = t[e], s = n[e], a = e;
                            else {
                                if (!h(t.kind) || !h(t.kind[e])) continue;
                                o = t.kind[e], s = n[e], a = e
                            }
                        }
                        var c;
                        if (o && s) {
                            for (const e of Object.keys(s.props)) r[e] = o[e];
                            return e(o, n, r, a)
                        }
                        return r.kind = t, i
                    }(e, o.default.schema, t, ""),
                    r = new ServerError(d(n, t), n);
                return Object.assign(r, t), r
            }

            function d(e, t) {
                return "string" == typeof s.default[e] ? i.default.render(s.default[e], {
                    ...t,
                    ...u
                }) : JSON.stringify(t)
            }

            function h(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }
            t.parseRpcError = l, t.parseResultError = function(e) {
                const t = l(e.status.Failure),
                    n = new ServerTransactionError;
                return Object.assign(n, t), n.type = t.type, n.message = t.message, n.transaction_outcome = e.transaction_outcome, n
            }, t.formatError = d, t.getErrorTypeFromErrorMessage = function(e) {
                switch (!0) {
                    case /^account .*? does not exist while viewing$/.test(e):
                    case /^Account .*? doesn't exist$/.test(e):
                        return "AccountDoesNotExist";
                    case /^access key .*? does not exist while viewing$/.test(e):
                        return "AccessKeyDoesNotExist";
                    case /wasm execution failed with error: FunctionCallError\(CompilationError\(CodeDoesNotExist/.test(e):
                        return "CodeDoesNotExist";
                    case /Transaction nonce \d+ must be larger than nonce of the used access key \d+/.test(e):
                        return "InvalidNonce";
                    default:
                        return "UntypedError"
                }
            }
        },
        1875: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InMemoryKeyStore = void 0;
            const r = n(629),
                i = n(267);
            class InMemoryKeyStore extends r.KeyStore {
                constructor() {
                    super(), this.keys = {}
                }
                async setKey(e, t, n) {
                    this.keys[`${t}:${e}`] = n.toString()
                }
                async getKey(e, t) {
                    const n = this.keys[`${t}:${e}`];
                    return n ? i.KeyPair.fromString(n) : null
                }
                async removeKey(e, t) {
                    delete this.keys[`${t}:${e}`]
                }
                async clear() {
                    this.keys = {}
                }
                async getNetworks() {
                    const e = new Set;
                    return Object.keys(this.keys).forEach(t => {
                        const n = t.split(":");
                        e.add(n[1])
                    }), Array.from(e.values())
                }
                async getAccounts(e) {
                    const t = new Array;
                    return Object.keys(this.keys).forEach(n => {
                        const r = n.split(":");
                        r[r.length - 1] === e && t.push(r.slice(0, r.length - 1).join(":"))
                    }), t
                }
                toString() {
                    return "InMemoryKeyStore"
                }
            }
            t.InMemoryKeyStore = InMemoryKeyStore
        },
        1876: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(291);
            Object.defineProperty(t, "base_encode", {
                enumerable: !0,
                get: function() {
                    return r.baseEncode
                }
            }), Object.defineProperty(t, "base_decode", {
                enumerable: !0,
                get: function() {
                    return r.baseDecode
                }
            }), Object.defineProperty(t, "serialize", {
                enumerable: !0,
                get: function() {
                    return r.serialize
                }
            }), Object.defineProperty(t, "deserialize", {
                enumerable: !0,
                get: function() {
                    return r.deserialize
                }
            }), Object.defineProperty(t, "BorshError", {
                enumerable: !0,
                get: function() {
                    return r.BorshError
                }
            }), Object.defineProperty(t, "BinaryWriter", {
                enumerable: !0,
                get: function() {
                    return r.BinaryWriter
                }
            }), Object.defineProperty(t, "BinaryReader", {
                enumerable: !0,
                get: function() {
                    return r.BinaryReader
                }
            })
        },
        1877: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletConnection = t.WalletAccount = t.ConnectedWalletAccount = t.Near = t.KeyPair = t.Signer = t.InMemorySigner = t.Contract = t.Connection = t.Account = t.multisig = t.validators = t.transactions = t.utils = t.providers = t.accountCreator = void 0;
            const s = o(n(508));
            t.providers = s;
            const a = o(n(1879));
            t.utils = a;
            const c = o(n(631));
            t.transactions = c;
            const u = o(n(3705));
            t.validators = u;
            const l = n(632);
            Object.defineProperty(t, "Account", {
                enumerable: !0,
                get: function() {
                    return l.Account
                }
            });
            const d = o(n(3707));
            t.multisig = d;
            const h = o(n(1881));
            t.accountCreator = h;
            const p = n(1882);
            Object.defineProperty(t, "Connection", {
                enumerable: !0,
                get: function() {
                    return p.Connection
                }
            });
            const f = n(1883);
            Object.defineProperty(t, "Signer", {
                enumerable: !0,
                get: function() {
                    return f.Signer
                }
            }), Object.defineProperty(t, "InMemorySigner", {
                enumerable: !0,
                get: function() {
                    return f.InMemorySigner
                }
            });
            const m = n(1884);
            Object.defineProperty(t, "Contract", {
                enumerable: !0,
                get: function() {
                    return m.Contract
                }
            });
            const y = n(267);
            Object.defineProperty(t, "KeyPair", {
                enumerable: !0,
                get: function() {
                    return y.KeyPair
                }
            });
            const g = n(1885);
            Object.defineProperty(t, "Near", {
                enumerable: !0,
                get: function() {
                    return g.Near
                }
            });
            const v = n(3708);
            Object.defineProperty(t, "ConnectedWalletAccount", {
                enumerable: !0,
                get: function() {
                    return v.ConnectedWalletAccount
                }
            }), Object.defineProperty(t, "WalletAccount", {
                enumerable: !0,
                get: function() {
                    return v.WalletAccount
                }
            }), Object.defineProperty(t, "WalletConnection", {
                enumerable: !0,
                get: function() {
                    return v.WalletConnection
                }
            })
        },
        1878: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getTransactionLastResult = t.Provider = t.IdType = t.FinalExecutionStatusBasic = t.ExecutionStatusBasic = void 0,
                function(e) {
                    e.Unknown = "Unknown", e.Pending = "Pending", e.Failure = "Failure"
                }(t.ExecutionStatusBasic || (t.ExecutionStatusBasic = {})),
                function(e) {
                    e.NotStarted = "NotStarted", e.Started = "Started", e.Failure = "Failure"
                }(t.FinalExecutionStatusBasic || (t.FinalExecutionStatusBasic = {})),
                function(e) {
                    e.Transaction = "transaction", e.Receipt = "receipt"
                }(t.IdType || (t.IdType = {}));
            t.Provider = class Provider {}, t.getTransactionLastResult = function(e) {
                if ("object" == typeof e.status && "string" == typeof e.status.SuccessValue) {
                    const t = Buffer.from(e.status.SuccessValue, "base64").toString();
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
                return null
            }
        },
        1879: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logWarning = t.rpc_errors = t.KeyPairEd25519 = t.KeyPair = t.PublicKey = t.format = t.enums = t.web = t.serialize = t.key_pair = void 0;
            const s = o(n(267));
            t.key_pair = s;
            const a = o(n(1876));
            t.serialize = a;
            const c = o(n(630));
            t.web = c;
            const u = o(n(1079));
            t.enums = u;
            const l = o(n(1880));
            t.format = l;
            const d = o(n(1081));
            t.rpc_errors = d;
            const h = n(267);
            Object.defineProperty(t, "PublicKey", {
                enumerable: !0,
                get: function() {
                    return h.PublicKey
                }
            }), Object.defineProperty(t, "KeyPair", {
                enumerable: !0,
                get: function() {
                    return h.KeyPair
                }
            }), Object.defineProperty(t, "KeyPairEd25519", {
                enumerable: !0,
                get: function() {
                    return h.KeyPairEd25519
                }
            });
            const p = n(415);
            Object.defineProperty(t, "logWarning", {
                enumerable: !0,
                get: function() {
                    return p.logWarning
                }
            })
        },
        1880: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseNearAmount = t.formatNearAmount = t.NEAR_NOMINATION = t.NEAR_NOMINATION_EXP = void 0;
            const i = r(n(348));
            t.NEAR_NOMINATION_EXP = 24, t.NEAR_NOMINATION = new i.default("10", 10).pow(new i.default(t.NEAR_NOMINATION_EXP, 10));
            const o = [],
                s = new i.default(10);
            for (let e = 0, n = new i.default(5); e < t.NEAR_NOMINATION_EXP; e++, n = n.mul(s)) o[e] = n;
            t.formatNearAmount = function(e, n = t.NEAR_NOMINATION_EXP) {
                const r = new i.default(e, 10);
                if (n !== t.NEAR_NOMINATION_EXP) {
                    const e = t.NEAR_NOMINATION_EXP - n - 1;
                    e > 0 && r.iadd(o[e])
                }
                const s = (e = r.toString()).substring(0, e.length - t.NEAR_NOMINATION_EXP) || "0",
                    a = e.substring(e.length - t.NEAR_NOMINATION_EXP).padStart(t.NEAR_NOMINATION_EXP, "0").substring(0, n);
                return function(e) {
                    return e.replace(/\.?0*$/, "")
                }(`${function(e){const t=/(-?\d+)(\d{3})/;for(;t.test(e);)e=e.replace(t,"$1,$2");return e}(s)}.${a}`)
            }, t.parseNearAmount = function(e) {
                if (!e) return null;
                const n = (e = e.replace(/,/g, "").trim()).split("."),
                    r = n[0],
                    i = n[1] || "";
                if (n.length > 2 || i.length > t.NEAR_NOMINATION_EXP) throw new Error(`Cannot parse '${e}' as NEAR amount`);
                return function(e) {
                    if ("" === (e = e.replace(/^0+/, ""))) return "0";
                    return e
                }(r + i.padEnd(t.NEAR_NOMINATION_EXP, "0"))
            }
        },
        1881: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UrlAccountCreator = t.LocalAccountCreator = t.AccountCreator = void 0;
            const r = n(630);
            class AccountCreator {}
            t.AccountCreator = AccountCreator;
            t.LocalAccountCreator = class LocalAccountCreator extends AccountCreator {
                constructor(e, t) {
                    super(), this.masterAccount = e, this.initialBalance = t
                }
                async createAccount(e, t) {
                    await this.masterAccount.createAccount(e, t, this.initialBalance)
                }
            };
            t.UrlAccountCreator = class UrlAccountCreator extends AccountCreator {
                constructor(e, t) {
                    super(), this.connection = e, this.helperUrl = t
                }
                async createAccount(e, t) {
                    await r.fetchJson(this.helperUrl + "/account", JSON.stringify({
                        newAccountId: e,
                        newAccountPublicKey: t.toString()
                    }))
                }
            }
        },
        1882: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Connection = void 0;
            const r = n(508),
                i = n(1883);
            class Connection {
                constructor(e, t, n) {
                    this.networkId = e, this.provider = t, this.signer = n
                }
                static fromConfig(e) {
                    const t = function(e) {
                            switch (e.type) {
                                case void 0:
                                    return e;
                                case "JsonRpcProvider":
                                    return new r.JsonRpcProvider({
                                        ...e.args
                                    });
                                default:
                                    throw new Error("Unknown provider type " + e.type)
                            }
                        }(e.provider),
                        n = function(e) {
                            switch (e.type) {
                                case void 0:
                                    return e;
                                case "InMemorySigner":
                                    return new i.InMemorySigner(e.keyStore);
                                default:
                                    throw new Error("Unknown signer type " + e.type)
                            }
                        }(e.signer);
                    return new Connection(e.networkId, t, n)
                }
            }
            t.Connection = Connection
        },
        1883: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InMemorySigner = t.Signer = void 0;
            const i = r(n(1082)),
                o = n(267),
                s = n(1875);
            class Signer {}
            t.Signer = Signer;
            class InMemorySigner extends Signer {
                constructor(e) {
                    super(), this.keyStore = e
                }
                static async fromKeyPair(e, t, n) {
                    const r = new s.InMemoryKeyStore;
                    return await r.setKey(e, t, n), new InMemorySigner(r)
                }
                async createKey(e, t) {
                    const n = o.KeyPair.fromRandom("ed25519");
                    return await this.keyStore.setKey(t, e, n), n.getPublicKey()
                }
                async getPublicKey(e, t) {
                    const n = await this.keyStore.getKey(t, e);
                    return null === n ? null : n.getPublicKey()
                }
                async signMessage(e, t, n) {
                    const r = new Uint8Array(i.default.sha256.array(e));
                    if (!t) throw new Error("InMemorySigner requires provided account id");
                    const o = await this.keyStore.getKey(n, t);
                    if (null === o) throw new Error(`Key for ${t} not found in ${n}`);
                    return o.sign(r)
                }
                toString() {
                    return `InMemorySigner(${this.keyStore})`
                }
            }
            t.InMemorySigner = InMemorySigner
        },
        1884: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Contract = void 0;
            const i = r(n(348)),
                o = r(n(414)),
                s = n(508),
                a = n(415);

            function c(e, t) {
                return {
                    [e]: (...e) => t(...e)
                } [e]
            }
            const u = e => e && void 0 !== e.byteLength && e.byteLength === e.length,
                l = e => "[object Object]" === Object.prototype.toString.call(e);
            t.Contract = class Contract {
                constructor(e, t, n) {
                    this.account = e, this.contractId = t;
                    const {
                        viewMethods: r = [],
                        changeMethods: i = []
                    } = n;
                    r.forEach(e => {
                        Object.defineProperty(this, e, {
                            writable: !1,
                            enumerable: !0,
                            value: c(e, async (t = {}, n = {}, ...r) => {
                                if (r.length || !l(t) && !u(t) || !l(n)) throw new a.PositionalArgsError;
                                return this.account.viewFunction(this.contractId, e, t, n)
                            })
                        })
                    }), i.forEach(e => {
                        Object.defineProperty(this, e, {
                            writable: !1,
                            enumerable: !0,
                            value: c(e, async (...t) => {
                                if (t.length && (t.length > 3 || !l(t[0]) && !u(t[0]))) throw new a.PositionalArgsError;
                                if (t.length > 1 || !t[0] || !t[0].args) {
                                    return o.default("contract.methodName(args, gas, amount)")("use `contract.methodName({ args, gas?, amount?, callbackUrl?, meta? })` instead"), this._changeMethod({
                                        methodName: e,
                                        args: t[0],
                                        gas: t[1],
                                        amount: t[2]
                                    })
                                }
                                return this._changeMethod({
                                    methodName: e,
                                    ...t[0]
                                })
                            })
                        })
                    })
                }
                async _changeMethod({
                    args: e,
                    methodName: t,
                    gas: n,
                    amount: r,
                    meta: o,
                    callbackUrl: c
                }) {
                    ! function(e) {
                        for (const t of Object.keys(e)) {
                            const n = e[t];
                            if (n && !i.default.isBN(n) && isNaN(n)) throw new a.ArgumentTypeError(t, "number, decimal string or BN", n)
                        }
                    }({
                        gas: n,
                        amount: r
                    });
                    const u = await this.account.functionCall({
                        contractId: this.contractId,
                        methodName: t,
                        args: e,
                        gas: n,
                        attachedDeposit: r,
                        walletMeta: o,
                        walletCallbackUrl: c
                    });
                    return s.getTransactionLastResult(u)
                }
            }
        },
        1885: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Near = void 0;
            const i = r(n(348)),
                o = n(632),
                s = n(1882),
                a = n(1884),
                c = n(1881);
            t.Near = class Near {
                constructor(e) {
                    if (this.config = e, this.connection = s.Connection.fromConfig({
                            networkId: e.networkId,
                            provider: {
                                type: "JsonRpcProvider",
                                args: {
                                    url: e.nodeUrl,
                                    headers: e.headers
                                }
                            },
                            signer: e.signer || {
                                type: "InMemorySigner",
                                keyStore: e.keyStore || e.deps.keyStore
                            }
                        }), e.masterAccount) {
                        const t = e.initialBalance ? new i.default(e.initialBalance) : new i.default("500000000000000000000000000");
                        this.accountCreator = new c.LocalAccountCreator(new o.Account(this.connection, e.masterAccount), t)
                    } else e.helperUrl ? this.accountCreator = new c.UrlAccountCreator(this.connection, e.helperUrl) : this.accountCreator = null
                }
                async account(e) {
                    return new o.Account(this.connection, e)
                }
                async createAccount(e, t) {
                    if (!this.accountCreator) throw new Error("Must specify account creator, either via masterAccount or helperUrl configuration settings.");
                    return await this.accountCreator.createAccount(e, t), new o.Account(this.connection, e)
                }
                async loadContract(e, t) {
                    const n = new o.Account(this.connection, t.sender);
                    return new a.Contract(n, e, t)
                }
                async sendTokens(e, t, n) {
                    console.warn("near.sendTokens is deprecated. Use `yourAccount.sendMoney` instead.");
                    const r = new o.Account(this.connection, t);
                    return (await r.sendMoney(n, e)).transaction_outcome.id
                }
            }
        },
        2366: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                s = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || t.hasOwnProperty(n) || r(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.keyStores = o(n(3692)), s(n(1877), t), s(n(3709), t), n(3710)
        },
        267: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KeyPairEd25519 = t.KeyPair = t.PublicKey = t.KeyType = void 0;
            const i = r(n(73)),
                o = n(1876),
                s = n(1079);
            var a;

            function c(e) {
                switch (e.toLowerCase()) {
                    case "ed25519":
                        return a.ED25519;
                    default:
                        throw new Error("Unknown key type " + e)
                }
            }! function(e) {
                e[e.ED25519 = 0] = "ED25519"
            }(a = t.KeyType || (t.KeyType = {}));
            class PublicKey extends s.Assignable {
                static from(e) {
                    return "string" == typeof e ? PublicKey.fromString(e) : e
                }
                static fromString(e) {
                    const t = e.split(":");
                    if (1 === t.length) return new PublicKey({
                        keyType: a.ED25519,
                        data: o.base_decode(t[0])
                    });
                    if (2 === t.length) return new PublicKey({
                        keyType: c(t[0]),
                        data: o.base_decode(t[1])
                    });
                    throw new Error("Invalid encoded key format, must be <curve>:<encoded key>")
                }
                toString() {
                    return `${function(e){switch(e){case a.ED25519:return"ed25519";default:throw new Error("Unknown key type "+e)}}(this.keyType)}:${o.base_encode(this.data)}`
                }
                verify(e, t) {
                    switch (this.keyType) {
                        case a.ED25519:
                            return i.default.sign.detached.verify(e, t, this.data);
                        default:
                            throw new Error("Unknown key type " + this.keyType)
                    }
                }
            }
            t.PublicKey = PublicKey;
            class KeyPair {
                static fromRandom(e) {
                    switch (e.toUpperCase()) {
                        case "ED25519":
                            return KeyPairEd25519.fromRandom();
                        default:
                            throw new Error("Unknown curve " + e)
                    }
                }
                static fromString(e) {
                    const t = e.split(":");
                    if (1 === t.length) return new KeyPairEd25519(t[0]);
                    if (2 !== t.length) throw new Error("Invalid encoded key format, must be <curve>:<encoded key>");
                    switch (t[0].toUpperCase()) {
                        case "ED25519":
                            return new KeyPairEd25519(t[1]);
                        default:
                            throw new Error("Unknown curve: " + t[0])
                    }
                }
            }
            t.KeyPair = KeyPair;
            class KeyPairEd25519 extends KeyPair {
                constructor(e) {
                    super();
                    const t = i.default.sign.keyPair.fromSecretKey(o.base_decode(e));
                    this.publicKey = new PublicKey({
                        keyType: a.ED25519,
                        data: t.publicKey
                    }), this.secretKey = e
                }
                static fromRandom() {
                    const e = i.default.sign.keyPair();
                    return new KeyPairEd25519(o.base_encode(e.secretKey))
                }
                sign(e) {
                    return {
                        signature: i.default.sign.detached(e, o.base_decode(this.secretKey)),
                        publicKey: this.publicKey
                    }
                }
                verify(e, t) {
                    return this.publicKey.verify(e, t)
                }
                toString() {
                    return "ed25519:" + this.secretKey
                }
                getPublicKey() {
                    return this.publicKey
                }
            }
            t.KeyPairEd25519 = KeyPairEd25519
        },
        348: function(e, t, n) {
            (function(e) {
                ! function(e, t) {
                    "use strict";

                    function r(e, t) {
                        if (!e) throw new Error(t || "Assertion failed")
                    }

                    function i(e, t) {
                        e.super_ = t;
                        var n = function() {};
                        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
                    }

                    function o(e, t, n) {
                        if (o.isBN(e)) return e;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (n = t, t = 10), this._init(e || 0, t || 10, n || "be"))
                    }
                    var s;
                    "object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : n(12).Buffer
                    } catch (e) {}

                    function a(e, t) {
                        var n = e.charCodeAt(t);
                        return n >= 48 && n <= 57 ? n - 48 : n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : void r(!1, "Invalid character in " + e)
                    }

                    function c(e, t, n) {
                        var r = a(e, n);
                        return n - 1 >= t && (r |= a(e, n - 1) << 4), r
                    }

                    function u(e, t, n, i) {
                        for (var o = 0, s = 0, a = Math.min(e.length, n), c = t; c < a; c++) {
                            var u = e.charCodeAt(c) - 48;
                            o *= i, s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u, r(u >= 0 && s < i, "Invalid character"), o += s
                        }
                        return o
                    }

                    function l(e, t) {
                        e.words = t.words, e.length = t.length, e.negative = t.negative, e.red = t.red
                    }
                    if (o.isBN = function(e) {
                            return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
                        }, o.max = function(e, t) {
                            return e.cmp(t) > 0 ? e : t
                        }, o.min = function(e, t) {
                            return e.cmp(t) < 0 ? e : t
                        }, o.prototype._init = function(e, t, n) {
                            if ("number" == typeof e) return this._initNumber(e, t, n);
                            if ("object" == typeof e) return this._initArray(e, t, n);
                            "hex" === t && (t = 16), r(t === (0 | t) && t >= 2 && t <= 36);
                            var i = 0;
                            "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < e.length && (16 === t ? this._parseHex(e, i, n) : (this._parseBase(e, t, i), "le" === n && this._initArray(this.toArray(), t, n)))
                        }, o.prototype._initNumber = function(e, t, n) {
                            e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (r(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), t, n)
                        }, o.prototype._initArray = function(e, t, n) {
                            if (r("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var o, s, a = 0;
                            if ("be" === n)
                                for (i = e.length - 1, o = 0; i >= 0; i -= 3) s = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                            else if ("le" === n)
                                for (i = 0, o = 0; i < e.length; i += 3) s = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                            return this._strip()
                        }, o.prototype._parseHex = function(e, t, n) {
                            this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                            for (var r = 0; r < this.length; r++) this.words[r] = 0;
                            var i, o = 0,
                                s = 0;
                            if ("be" === n)
                                for (r = e.length - 1; r >= t; r -= 2) i = c(e, t, r) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                            else
                                for (r = (e.length - t) % 2 == 0 ? t + 1 : t; r < e.length; r += 2) i = c(e, t, r) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                            this._strip()
                        }, o.prototype._parseBase = function(e, t, n) {
                            this.words = [0], this.length = 1;
                            for (var r = 0, i = 1; i <= 67108863; i *= t) r++;
                            r--, i = i / t | 0;
                            for (var o = e.length - n, s = o % r, a = Math.min(o, o - s) + n, c = 0, l = n; l < a; l += r) c = u(e, l, l + r, t), this.imuln(i), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                            if (0 !== s) {
                                var d = 1;
                                for (c = u(e, l, e.length, t), l = 0; l < s; l++) d *= t;
                                this.imuln(d), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                            }
                            this._strip()
                        }, o.prototype.copy = function(e) {
                            e.words = new Array(this.length);
                            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                            e.length = this.length, e.negative = this.negative, e.red = this.red
                        }, o.prototype._move = function(e) {
                            l(e, this)
                        }, o.prototype.clone = function() {
                            var e = new o(null);
                            return this.copy(e), e
                        }, o.prototype._expand = function(e) {
                            for (; this.length < e;) this.words[this.length++] = 0;
                            return this
                        }, o.prototype._strip = function() {
                            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                            return this._normSign()
                        }, o.prototype._normSign = function() {
                            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                        }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = d
                    } catch (e) {
                        o.prototype.inspect = d
                    } else o.prototype.inspect = d;

                    function d() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        p = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    o.prototype.toString = function(e, t) {
                        var n;
                        if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                            n = "";
                            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                                var a = this.words[s],
                                    c = (16777215 & (a << i | o)).toString(16);
                                n = 0 !== (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? h[6 - c.length] + c + n : c + n, (i += 2) >= 26 && (i -= 26, s--)
                            }
                            for (0 !== o && (n = o.toString(16) + n); n.length % t != 0;) n = "0" + n;
                            return 0 !== this.negative && (n = "-" + n), n
                        }
                        if (e === (0 | e) && e >= 2 && e <= 36) {
                            var u = p[e],
                                l = f[e];
                            n = "";
                            var d = this.clone();
                            for (d.negative = 0; !d.isZero();) {
                                var m = d.modrn(l).toString(e);
                                n = (d = d.idivn(l)).isZero() ? m + n : h[u - m.length] + m + n
                            }
                            for (this.isZero() && (n = "0" + n); n.length % t != 0;) n = "0" + n;
                            return 0 !== this.negative && (n = "-" + n), n
                        }
                        r(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var e = this.words[0];
                        return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                    }, o.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, s && (o.prototype.toBuffer = function(e, t) {
                        return this.toArrayLike(s, e, t)
                    }), o.prototype.toArray = function(e, t) {
                        return this.toArrayLike(Array, e, t)
                    };

                    function m(e, t, n) {
                        n.negative = t.negative ^ e.negative;
                        var r = e.length + t.length | 0;
                        n.length = r, r = r - 1 | 0;
                        var i = 0 | e.words[0],
                            o = 0 | t.words[0],
                            s = i * o,
                            a = 67108863 & s,
                            c = s / 67108864 | 0;
                        n.words[0] = a;
                        for (var u = 1; u < r; u++) {
                            for (var l = c >>> 26, d = 67108863 & c, h = Math.min(u, t.length - 1), p = Math.max(0, u - e.length + 1); p <= h; p++) {
                                var f = u - p | 0;
                                l += (s = (i = 0 | e.words[f]) * (o = 0 | t.words[p]) + d) / 67108864 | 0, d = 67108863 & s
                            }
                            n.words[u] = 0 | d, c = 0 | l
                        }
                        return 0 !== c ? n.words[u] = 0 | c : n.length--, n._strip()
                    }
                    o.prototype.toArrayLike = function(e, t, n) {
                        this._strip();
                        var i = this.byteLength(),
                            o = n || Math.max(1, i);
                        r(i <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0");
                        var s = function(e, t) {
                            return e.allocUnsafe ? e.allocUnsafe(t) : new e(t)
                        }(e, o);
                        return this["_toArrayLike" + ("le" === t ? "LE" : "BE")](s, i), s
                    }, o.prototype._toArrayLikeLE = function(e, t) {
                        for (var n = 0, r = 0, i = 0, o = 0; i < this.length; i++) {
                            var s = this.words[i] << o | r;
                            e[n++] = 255 & s, n < e.length && (e[n++] = s >> 8 & 255), n < e.length && (e[n++] = s >> 16 & 255), 6 === o ? (n < e.length && (e[n++] = s >> 24 & 255), r = 0, o = 0) : (r = s >>> 24, o += 2)
                        }
                        if (n < e.length)
                            for (e[n++] = r; n < e.length;) e[n++] = 0
                    }, o.prototype._toArrayLikeBE = function(e, t) {
                        for (var n = e.length - 1, r = 0, i = 0, o = 0; i < this.length; i++) {
                            var s = this.words[i] << o | r;
                            e[n--] = 255 & s, n >= 0 && (e[n--] = s >> 8 & 255), n >= 0 && (e[n--] = s >> 16 & 255), 6 === o ? (n >= 0 && (e[n--] = s >> 24 & 255), r = 0, o = 0) : (r = s >>> 24, o += 2)
                        }
                        if (n >= 0)
                            for (e[n--] = r; n >= 0;) e[n--] = 0
                    }, Math.clz32 ? o.prototype._countBits = function(e) {
                        return 32 - Math.clz32(e)
                    } : o.prototype._countBits = function(e) {
                        var t = e,
                            n = 0;
                        return t >= 4096 && (n += 13, t >>>= 13), t >= 64 && (n += 7, t >>>= 7), t >= 8 && (n += 4, t >>>= 4), t >= 2 && (n += 2, t >>>= 2), n + t
                    }, o.prototype._zeroBits = function(e) {
                        if (0 === e) return 26;
                        var t = e,
                            n = 0;
                        return 0 == (8191 & t) && (n += 13, t >>>= 13), 0 == (127 & t) && (n += 7, t >>>= 7), 0 == (15 & t) && (n += 4, t >>>= 4), 0 == (3 & t) && (n += 2, t >>>= 2), 0 == (1 & t) && n++, n
                    }, o.prototype.bitLength = function() {
                        var e = this.words[this.length - 1],
                            t = this._countBits(e);
                        return 26 * (this.length - 1) + t
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var e = 0, t = 0; t < this.length; t++) {
                            var n = this._zeroBits(this.words[t]);
                            if (e += n, 26 !== n) break
                        }
                        return e
                    }, o.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function(e) {
                        return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function(e) {
                        return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, o.prototype.neg = function() {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function(e) {
                        for (; this.length < e.length;) this.words[this.length++] = 0;
                        for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                        return this._strip()
                    }, o.prototype.ior = function(e) {
                        return r(0 == (this.negative | e.negative)), this.iuor(e)
                    }, o.prototype.or = function(e) {
                        return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                    }, o.prototype.uor = function(e) {
                        return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                    }, o.prototype.iuand = function(e) {
                        var t;
                        t = this.length > e.length ? e : this;
                        for (var n = 0; n < t.length; n++) this.words[n] = this.words[n] & e.words[n];
                        return this.length = t.length, this._strip()
                    }, o.prototype.iand = function(e) {
                        return r(0 == (this.negative | e.negative)), this.iuand(e)
                    }, o.prototype.and = function(e) {
                        return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                    }, o.prototype.uand = function(e) {
                        return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                    }, o.prototype.iuxor = function(e) {
                        var t, n;
                        this.length > e.length ? (t = this, n = e) : (t = e, n = this);
                        for (var r = 0; r < n.length; r++) this.words[r] = t.words[r] ^ n.words[r];
                        if (this !== t)
                            for (; r < t.length; r++) this.words[r] = t.words[r];
                        return this.length = t.length, this._strip()
                    }, o.prototype.ixor = function(e) {
                        return r(0 == (this.negative | e.negative)), this.iuxor(e)
                    }, o.prototype.xor = function(e) {
                        return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                    }, o.prototype.uxor = function(e) {
                        return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                    }, o.prototype.inotn = function(e) {
                        r("number" == typeof e && e >= 0);
                        var t = 0 | Math.ceil(e / 26),
                            n = e % 26;
                        this._expand(t), n > 0 && t--;
                        for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                        return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this._strip()
                    }, o.prototype.notn = function(e) {
                        return this.clone().inotn(e)
                    }, o.prototype.setn = function(e, t) {
                        r("number" == typeof e && e >= 0);
                        var n = e / 26 | 0,
                            i = e % 26;
                        return this._expand(n + 1), this.words[n] = t ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this._strip()
                    }, o.prototype.iadd = function(e) {
                        var t, n, r;
                        if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                        this.length > e.length ? (n = this, r = e) : (n = e, r = this);
                        for (var i = 0, o = 0; o < r.length; o++) t = (0 | n.words[o]) + (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                        for (; 0 !== i && o < n.length; o++) t = (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                        if (this.length = n.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (n !== this)
                            for (; o < n.length; o++) this.words[o] = n.words[o];
                        return this
                    }, o.prototype.add = function(e) {
                        var t;
                        return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                    }, o.prototype.isub = function(e) {
                        if (0 !== e.negative) {
                            e.negative = 0;
                            var t = this.iadd(e);
                            return e.negative = 1, t._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                        var n, r, i = this.cmp(e);
                        if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        i > 0 ? (n = this, r = e) : (n = e, r = this);
                        for (var o = 0, s = 0; s < r.length; s++) o = (t = (0 | n.words[s]) - (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & t;
                        for (; 0 !== o && s < n.length; s++) o = (t = (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & t;
                        if (0 === o && s < n.length && n !== this)
                            for (; s < n.length; s++) this.words[s] = n.words[s];
                        return this.length = Math.max(this.length, s), n !== this && (this.negative = 1), this._strip()
                    }, o.prototype.sub = function(e) {
                        return this.clone().isub(e)
                    };
                    var y = function(e, t, n) {
                        var r, i, o, s = e.words,
                            a = t.words,
                            c = n.words,
                            u = 0,
                            l = 0 | s[0],
                            d = 8191 & l,
                            h = l >>> 13,
                            p = 0 | s[1],
                            f = 8191 & p,
                            m = p >>> 13,
                            y = 0 | s[2],
                            g = 8191 & y,
                            v = y >>> 13,
                            w = 0 | s[3],
                            b = 8191 & w,
                            _ = w >>> 13,
                            M = 0 | s[4],
                            A = 8191 & M,
                            S = M >>> 13,
                            E = 0 | s[5],
                            I = 8191 & E,
                            k = E >>> 13,
                            T = 0 | s[6],
                            P = 8191 & T,
                            C = T >>> 13,
                            K = 0 | s[7],
                            x = 8191 & K,
                            N = K >>> 13,
                            O = 0 | s[8],
                            R = 8191 & O,
                            L = O >>> 13,
                            D = 0 | s[9],
                            F = 8191 & D,
                            j = D >>> 13,
                            U = 0 | a[0],
                            B = 8191 & U,
                            q = U >>> 13,
                            G = 0 | a[1],
                            J = 8191 & G,
                            W = G >>> 13,
                            $ = 0 | a[2],
                            V = 8191 & $,
                            z = $ >>> 13,
                            H = 0 | a[3],
                            Z = 8191 & H,
                            X = H >>> 13,
                            Y = 0 | a[4],
                            Q = 8191 & Y,
                            ee = Y >>> 13,
                            te = 0 | a[5],
                            ne = 8191 & te,
                            re = te >>> 13,
                            ie = 0 | a[6],
                            oe = 8191 & ie,
                            se = ie >>> 13,
                            ae = 0 | a[7],
                            ce = 8191 & ae,
                            ue = ae >>> 13,
                            le = 0 | a[8],
                            de = 8191 & le,
                            he = le >>> 13,
                            pe = 0 | a[9],
                            fe = 8191 & pe,
                            me = pe >>> 13;
                        n.negative = e.negative ^ t.negative, n.length = 19;
                        var ye = (u + (r = Math.imul(d, B)) | 0) + ((8191 & (i = (i = Math.imul(d, q)) + Math.imul(h, B) | 0)) << 13) | 0;
                        u = ((o = Math.imul(h, q)) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, r = Math.imul(f, B), i = (i = Math.imul(f, q)) + Math.imul(m, B) | 0, o = Math.imul(m, q);
                        var ge = (u + (r = r + Math.imul(d, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, W) | 0) + Math.imul(h, J) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(h, W) | 0) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, r = Math.imul(g, B), i = (i = Math.imul(g, q)) + Math.imul(v, B) | 0, o = Math.imul(v, q), r = r + Math.imul(f, J) | 0, i = (i = i + Math.imul(f, W) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, W) | 0;
                        var ve = (u + (r = r + Math.imul(d, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, z) | 0) + Math.imul(h, V) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(h, z) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, r = Math.imul(b, B), i = (i = Math.imul(b, q)) + Math.imul(_, B) | 0, o = Math.imul(_, q), r = r + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, W) | 0) + Math.imul(v, J) | 0, o = o + Math.imul(v, W) | 0, r = r + Math.imul(f, V) | 0, i = (i = i + Math.imul(f, z) | 0) + Math.imul(m, V) | 0, o = o + Math.imul(m, z) | 0;
                        var we = (u + (r = r + Math.imul(d, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, X) | 0) + Math.imul(h, Z) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(h, X) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, r = Math.imul(A, B), i = (i = Math.imul(A, q)) + Math.imul(S, B) | 0, o = Math.imul(S, q), r = r + Math.imul(b, J) | 0, i = (i = i + Math.imul(b, W) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, W) | 0, r = r + Math.imul(g, V) | 0, i = (i = i + Math.imul(g, z) | 0) + Math.imul(v, V) | 0, o = o + Math.imul(v, z) | 0, r = r + Math.imul(f, Z) | 0, i = (i = i + Math.imul(f, X) | 0) + Math.imul(m, Z) | 0, o = o + Math.imul(m, X) | 0;
                        var be = (u + (r = r + Math.imul(d, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ee) | 0) + Math.imul(h, Q) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(h, ee) | 0) + (i >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, r = Math.imul(I, B), i = (i = Math.imul(I, q)) + Math.imul(k, B) | 0, o = Math.imul(k, q), r = r + Math.imul(A, J) | 0, i = (i = i + Math.imul(A, W) | 0) + Math.imul(S, J) | 0, o = o + Math.imul(S, W) | 0, r = r + Math.imul(b, V) | 0, i = (i = i + Math.imul(b, z) | 0) + Math.imul(_, V) | 0, o = o + Math.imul(_, z) | 0, r = r + Math.imul(g, Z) | 0, i = (i = i + Math.imul(g, X) | 0) + Math.imul(v, Z) | 0, o = o + Math.imul(v, X) | 0, r = r + Math.imul(f, Q) | 0, i = (i = i + Math.imul(f, ee) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, ee) | 0;
                        var _e = (u + (r = r + Math.imul(d, ne) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, re) | 0) + Math.imul(h, ne) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(h, re) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, r = Math.imul(P, B), i = (i = Math.imul(P, q)) + Math.imul(C, B) | 0, o = Math.imul(C, q), r = r + Math.imul(I, J) | 0, i = (i = i + Math.imul(I, W) | 0) + Math.imul(k, J) | 0, o = o + Math.imul(k, W) | 0, r = r + Math.imul(A, V) | 0, i = (i = i + Math.imul(A, z) | 0) + Math.imul(S, V) | 0, o = o + Math.imul(S, z) | 0, r = r + Math.imul(b, Z) | 0, i = (i = i + Math.imul(b, X) | 0) + Math.imul(_, Z) | 0, o = o + Math.imul(_, X) | 0, r = r + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, ee) | 0) + Math.imul(v, Q) | 0, o = o + Math.imul(v, ee) | 0, r = r + Math.imul(f, ne) | 0, i = (i = i + Math.imul(f, re) | 0) + Math.imul(m, ne) | 0, o = o + Math.imul(m, re) | 0;
                        var Me = (u + (r = r + Math.imul(d, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, se) | 0) + Math.imul(h, oe) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(h, se) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, r = Math.imul(x, B), i = (i = Math.imul(x, q)) + Math.imul(N, B) | 0, o = Math.imul(N, q), r = r + Math.imul(P, J) | 0, i = (i = i + Math.imul(P, W) | 0) + Math.imul(C, J) | 0, o = o + Math.imul(C, W) | 0, r = r + Math.imul(I, V) | 0, i = (i = i + Math.imul(I, z) | 0) + Math.imul(k, V) | 0, o = o + Math.imul(k, z) | 0, r = r + Math.imul(A, Z) | 0, i = (i = i + Math.imul(A, X) | 0) + Math.imul(S, Z) | 0, o = o + Math.imul(S, X) | 0, r = r + Math.imul(b, Q) | 0, i = (i = i + Math.imul(b, ee) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, ee) | 0, r = r + Math.imul(g, ne) | 0, i = (i = i + Math.imul(g, re) | 0) + Math.imul(v, ne) | 0, o = o + Math.imul(v, re) | 0, r = r + Math.imul(f, oe) | 0, i = (i = i + Math.imul(f, se) | 0) + Math.imul(m, oe) | 0, o = o + Math.imul(m, se) | 0;
                        var Ae = (u + (r = r + Math.imul(d, ce) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ue) | 0) + Math.imul(h, ce) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(h, ue) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, r = Math.imul(R, B), i = (i = Math.imul(R, q)) + Math.imul(L, B) | 0, o = Math.imul(L, q), r = r + Math.imul(x, J) | 0, i = (i = i + Math.imul(x, W) | 0) + Math.imul(N, J) | 0, o = o + Math.imul(N, W) | 0, r = r + Math.imul(P, V) | 0, i = (i = i + Math.imul(P, z) | 0) + Math.imul(C, V) | 0, o = o + Math.imul(C, z) | 0, r = r + Math.imul(I, Z) | 0, i = (i = i + Math.imul(I, X) | 0) + Math.imul(k, Z) | 0, o = o + Math.imul(k, X) | 0, r = r + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, ee) | 0) + Math.imul(S, Q) | 0, o = o + Math.imul(S, ee) | 0, r = r + Math.imul(b, ne) | 0, i = (i = i + Math.imul(b, re) | 0) + Math.imul(_, ne) | 0, o = o + Math.imul(_, re) | 0, r = r + Math.imul(g, oe) | 0, i = (i = i + Math.imul(g, se) | 0) + Math.imul(v, oe) | 0, o = o + Math.imul(v, se) | 0, r = r + Math.imul(f, ce) | 0, i = (i = i + Math.imul(f, ue) | 0) + Math.imul(m, ce) | 0, o = o + Math.imul(m, ue) | 0;
                        var Se = (u + (r = r + Math.imul(d, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, he) | 0) + Math.imul(h, de) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(h, he) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, r = Math.imul(F, B), i = (i = Math.imul(F, q)) + Math.imul(j, B) | 0, o = Math.imul(j, q), r = r + Math.imul(R, J) | 0, i = (i = i + Math.imul(R, W) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, W) | 0, r = r + Math.imul(x, V) | 0, i = (i = i + Math.imul(x, z) | 0) + Math.imul(N, V) | 0, o = o + Math.imul(N, z) | 0, r = r + Math.imul(P, Z) | 0, i = (i = i + Math.imul(P, X) | 0) + Math.imul(C, Z) | 0, o = o + Math.imul(C, X) | 0, r = r + Math.imul(I, Q) | 0, i = (i = i + Math.imul(I, ee) | 0) + Math.imul(k, Q) | 0, o = o + Math.imul(k, ee) | 0, r = r + Math.imul(A, ne) | 0, i = (i = i + Math.imul(A, re) | 0) + Math.imul(S, ne) | 0, o = o + Math.imul(S, re) | 0, r = r + Math.imul(b, oe) | 0, i = (i = i + Math.imul(b, se) | 0) + Math.imul(_, oe) | 0, o = o + Math.imul(_, se) | 0, r = r + Math.imul(g, ce) | 0, i = (i = i + Math.imul(g, ue) | 0) + Math.imul(v, ce) | 0, o = o + Math.imul(v, ue) | 0, r = r + Math.imul(f, de) | 0, i = (i = i + Math.imul(f, he) | 0) + Math.imul(m, de) | 0, o = o + Math.imul(m, he) | 0;
                        var Ee = (u + (r = r + Math.imul(d, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, me) | 0) + Math.imul(h, fe) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(h, me) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, r = Math.imul(F, J), i = (i = Math.imul(F, W)) + Math.imul(j, J) | 0, o = Math.imul(j, W), r = r + Math.imul(R, V) | 0, i = (i = i + Math.imul(R, z) | 0) + Math.imul(L, V) | 0, o = o + Math.imul(L, z) | 0, r = r + Math.imul(x, Z) | 0, i = (i = i + Math.imul(x, X) | 0) + Math.imul(N, Z) | 0, o = o + Math.imul(N, X) | 0, r = r + Math.imul(P, Q) | 0, i = (i = i + Math.imul(P, ee) | 0) + Math.imul(C, Q) | 0, o = o + Math.imul(C, ee) | 0, r = r + Math.imul(I, ne) | 0, i = (i = i + Math.imul(I, re) | 0) + Math.imul(k, ne) | 0, o = o + Math.imul(k, re) | 0, r = r + Math.imul(A, oe) | 0, i = (i = i + Math.imul(A, se) | 0) + Math.imul(S, oe) | 0, o = o + Math.imul(S, se) | 0, r = r + Math.imul(b, ce) | 0, i = (i = i + Math.imul(b, ue) | 0) + Math.imul(_, ce) | 0, o = o + Math.imul(_, ue) | 0, r = r + Math.imul(g, de) | 0, i = (i = i + Math.imul(g, he) | 0) + Math.imul(v, de) | 0, o = o + Math.imul(v, he) | 0;
                        var Ie = (u + (r = r + Math.imul(f, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, me) | 0) + Math.imul(m, fe) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(m, me) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, r = Math.imul(F, V), i = (i = Math.imul(F, z)) + Math.imul(j, V) | 0, o = Math.imul(j, z), r = r + Math.imul(R, Z) | 0, i = (i = i + Math.imul(R, X) | 0) + Math.imul(L, Z) | 0, o = o + Math.imul(L, X) | 0, r = r + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, ee) | 0) + Math.imul(N, Q) | 0, o = o + Math.imul(N, ee) | 0, r = r + Math.imul(P, ne) | 0, i = (i = i + Math.imul(P, re) | 0) + Math.imul(C, ne) | 0, o = o + Math.imul(C, re) | 0, r = r + Math.imul(I, oe) | 0, i = (i = i + Math.imul(I, se) | 0) + Math.imul(k, oe) | 0, o = o + Math.imul(k, se) | 0, r = r + Math.imul(A, ce) | 0, i = (i = i + Math.imul(A, ue) | 0) + Math.imul(S, ce) | 0, o = o + Math.imul(S, ue) | 0, r = r + Math.imul(b, de) | 0, i = (i = i + Math.imul(b, he) | 0) + Math.imul(_, de) | 0, o = o + Math.imul(_, he) | 0;
                        var ke = (u + (r = r + Math.imul(g, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, me) | 0) + Math.imul(v, fe) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(v, me) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, r = Math.imul(F, Z), i = (i = Math.imul(F, X)) + Math.imul(j, Z) | 0, o = Math.imul(j, X), r = r + Math.imul(R, Q) | 0, i = (i = i + Math.imul(R, ee) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, ee) | 0, r = r + Math.imul(x, ne) | 0, i = (i = i + Math.imul(x, re) | 0) + Math.imul(N, ne) | 0, o = o + Math.imul(N, re) | 0, r = r + Math.imul(P, oe) | 0, i = (i = i + Math.imul(P, se) | 0) + Math.imul(C, oe) | 0, o = o + Math.imul(C, se) | 0, r = r + Math.imul(I, ce) | 0, i = (i = i + Math.imul(I, ue) | 0) + Math.imul(k, ce) | 0, o = o + Math.imul(k, ue) | 0, r = r + Math.imul(A, de) | 0, i = (i = i + Math.imul(A, he) | 0) + Math.imul(S, de) | 0, o = o + Math.imul(S, he) | 0;
                        var Te = (u + (r = r + Math.imul(b, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(b, me) | 0) + Math.imul(_, fe) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(_, me) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, r = Math.imul(F, Q), i = (i = Math.imul(F, ee)) + Math.imul(j, Q) | 0, o = Math.imul(j, ee), r = r + Math.imul(R, ne) | 0, i = (i = i + Math.imul(R, re) | 0) + Math.imul(L, ne) | 0, o = o + Math.imul(L, re) | 0, r = r + Math.imul(x, oe) | 0, i = (i = i + Math.imul(x, se) | 0) + Math.imul(N, oe) | 0, o = o + Math.imul(N, se) | 0, r = r + Math.imul(P, ce) | 0, i = (i = i + Math.imul(P, ue) | 0) + Math.imul(C, ce) | 0, o = o + Math.imul(C, ue) | 0, r = r + Math.imul(I, de) | 0, i = (i = i + Math.imul(I, he) | 0) + Math.imul(k, de) | 0, o = o + Math.imul(k, he) | 0;
                        var Pe = (u + (r = r + Math.imul(A, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, me) | 0) + Math.imul(S, fe) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(S, me) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, r = Math.imul(F, ne), i = (i = Math.imul(F, re)) + Math.imul(j, ne) | 0, o = Math.imul(j, re), r = r + Math.imul(R, oe) | 0, i = (i = i + Math.imul(R, se) | 0) + Math.imul(L, oe) | 0, o = o + Math.imul(L, se) | 0, r = r + Math.imul(x, ce) | 0, i = (i = i + Math.imul(x, ue) | 0) + Math.imul(N, ce) | 0, o = o + Math.imul(N, ue) | 0, r = r + Math.imul(P, de) | 0, i = (i = i + Math.imul(P, he) | 0) + Math.imul(C, de) | 0, o = o + Math.imul(C, he) | 0;
                        var Ce = (u + (r = r + Math.imul(I, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, me) | 0) + Math.imul(k, fe) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(k, me) | 0) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, r = Math.imul(F, oe), i = (i = Math.imul(F, se)) + Math.imul(j, oe) | 0, o = Math.imul(j, se), r = r + Math.imul(R, ce) | 0, i = (i = i + Math.imul(R, ue) | 0) + Math.imul(L, ce) | 0, o = o + Math.imul(L, ue) | 0, r = r + Math.imul(x, de) | 0, i = (i = i + Math.imul(x, he) | 0) + Math.imul(N, de) | 0, o = o + Math.imul(N, he) | 0;
                        var Ke = (u + (r = r + Math.imul(P, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, me) | 0) + Math.imul(C, fe) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(C, me) | 0) + (i >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, r = Math.imul(F, ce), i = (i = Math.imul(F, ue)) + Math.imul(j, ce) | 0, o = Math.imul(j, ue), r = r + Math.imul(R, de) | 0, i = (i = i + Math.imul(R, he) | 0) + Math.imul(L, de) | 0, o = o + Math.imul(L, he) | 0;
                        var xe = (u + (r = r + Math.imul(x, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, me) | 0) + Math.imul(N, fe) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(N, me) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, r = Math.imul(F, de), i = (i = Math.imul(F, he)) + Math.imul(j, de) | 0, o = Math.imul(j, he);
                        var Ne = (u + (r = r + Math.imul(R, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, me) | 0) + Math.imul(L, fe) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(L, me) | 0) + (i >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863;
                        var Oe = (u + (r = Math.imul(F, fe)) | 0) + ((8191 & (i = (i = Math.imul(F, me)) + Math.imul(j, fe) | 0)) << 13) | 0;
                        return u = ((o = Math.imul(j, me)) + (i >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863, c[0] = ye, c[1] = ge, c[2] = ve, c[3] = we, c[4] = be, c[5] = _e, c[6] = Me, c[7] = Ae, c[8] = Se, c[9] = Ee, c[10] = Ie, c[11] = ke, c[12] = Te, c[13] = Pe, c[14] = Ce, c[15] = Ke, c[16] = xe, c[17] = Ne, c[18] = Oe, 0 !== u && (c[19] = u, n.length++), n
                    };

                    function g(e, t, n) {
                        n.negative = t.negative ^ e.negative, n.length = e.length + t.length;
                        for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var a = 67108863 & r, c = Math.min(o, t.length - 1), u = Math.max(0, o - e.length + 1); u <= c; u++) {
                                var l = o - u,
                                    d = (0 | e.words[l]) * (0 | t.words[u]),
                                    h = 67108863 & d;
                                a = 67108863 & (h = h + a | 0), i += (s = (s = s + (d / 67108864 | 0) | 0) + (h >>> 26) | 0) >>> 26, s &= 67108863
                            }
                            n.words[o] = a, r = s, s = i
                        }
                        return 0 !== r ? n.words[o] = r : n.length--, n._strip()
                    }

                    function v(e, t, n) {
                        return g(e, t, n)
                    }

                    function w(e, t) {
                        this.x = e, this.y = t
                    }
                    Math.imul || (y = m), o.prototype.mulTo = function(e, t) {
                        var n = this.length + e.length;
                        return 10 === this.length && 10 === e.length ? y(this, e, t) : n < 63 ? m(this, e, t) : n < 1024 ? g(this, e, t) : v(this, e, t)
                    }, w.prototype.makeRBT = function(e) {
                        for (var t = new Array(e), n = o.prototype._countBits(e) - 1, r = 0; r < e; r++) t[r] = this.revBin(r, n, e);
                        return t
                    }, w.prototype.revBin = function(e, t, n) {
                        if (0 === e || e === n - 1) return e;
                        for (var r = 0, i = 0; i < t; i++) r |= (1 & e) << t - i - 1, e >>= 1;
                        return r
                    }, w.prototype.permute = function(e, t, n, r, i, o) {
                        for (var s = 0; s < o; s++) r[s] = t[e[s]], i[s] = n[e[s]]
                    }, w.prototype.transform = function(e, t, n, r, i, o) {
                        this.permute(o, e, t, n, r, i);
                        for (var s = 1; s < i; s <<= 1)
                            for (var a = s << 1, c = Math.cos(2 * Math.PI / a), u = Math.sin(2 * Math.PI / a), l = 0; l < i; l += a)
                                for (var d = c, h = u, p = 0; p < s; p++) {
                                    var f = n[l + p],
                                        m = r[l + p],
                                        y = n[l + p + s],
                                        g = r[l + p + s],
                                        v = d * y - h * g;
                                    g = d * g + h * y, y = v, n[l + p] = f + y, r[l + p] = m + g, n[l + p + s] = f - y, r[l + p + s] = m - g, p !== a && (v = c * d - u * h, h = c * h + u * d, d = v)
                                }
                    }, w.prototype.guessLen13b = function(e, t) {
                        var n = 1 | Math.max(t, e),
                            r = 1 & n,
                            i = 0;
                        for (n = n / 2 | 0; n; n >>>= 1) i++;
                        return 1 << i + 1 + r
                    }, w.prototype.conjugate = function(e, t, n) {
                        if (!(n <= 1))
                            for (var r = 0; r < n / 2; r++) {
                                var i = e[r];
                                e[r] = e[n - r - 1], e[n - r - 1] = i, i = t[r], t[r] = -t[n - r - 1], t[n - r - 1] = -i
                            }
                    }, w.prototype.normalize13b = function(e, t) {
                        for (var n = 0, r = 0; r < t / 2; r++) {
                            var i = 8192 * Math.round(e[2 * r + 1] / t) + Math.round(e[2 * r] / t) + n;
                            e[r] = 67108863 & i, n = i < 67108864 ? 0 : i / 67108864 | 0
                        }
                        return e
                    }, w.prototype.convert13b = function(e, t, n, i) {
                        for (var o = 0, s = 0; s < t; s++) o += 0 | e[s], n[2 * s] = 8191 & o, o >>>= 13, n[2 * s + 1] = 8191 & o, o >>>= 13;
                        for (s = 2 * t; s < i; ++s) n[s] = 0;
                        r(0 === o), r(0 == (-8192 & o))
                    }, w.prototype.stub = function(e) {
                        for (var t = new Array(e), n = 0; n < e; n++) t[n] = 0;
                        return t
                    }, w.prototype.mulp = function(e, t, n) {
                        var r = 2 * this.guessLen13b(e.length, t.length),
                            i = this.makeRBT(r),
                            o = this.stub(r),
                            s = new Array(r),
                            a = new Array(r),
                            c = new Array(r),
                            u = new Array(r),
                            l = new Array(r),
                            d = new Array(r),
                            h = n.words;
                        h.length = r, this.convert13b(e.words, e.length, s, r), this.convert13b(t.words, t.length, u, r), this.transform(s, o, a, c, r, i), this.transform(u, o, l, d, r, i);
                        for (var p = 0; p < r; p++) {
                            var f = a[p] * l[p] - c[p] * d[p];
                            c[p] = a[p] * d[p] + c[p] * l[p], a[p] = f
                        }
                        return this.conjugate(a, c, r), this.transform(a, c, h, o, r, i), this.conjugate(h, o, r), this.normalize13b(h, r), n.negative = e.negative ^ t.negative, n.length = e.length + t.length, n._strip()
                    }, o.prototype.mul = function(e) {
                        var t = new o(null);
                        return t.words = new Array(this.length + e.length), this.mulTo(e, t)
                    }, o.prototype.mulf = function(e) {
                        var t = new o(null);
                        return t.words = new Array(this.length + e.length), v(this, e, t)
                    }, o.prototype.imul = function(e) {
                        return this.clone().mulTo(e, this)
                    }, o.prototype.imuln = function(e) {
                        var t = e < 0;
                        t && (e = -e), r("number" == typeof e), r(e < 67108864);
                        for (var n = 0, i = 0; i < this.length; i++) {
                            var o = (0 | this.words[i]) * e,
                                s = (67108863 & o) + (67108863 & n);
                            n >>= 26, n += o / 67108864 | 0, n += s >>> 26, this.words[i] = 67108863 & s
                        }
                        return 0 !== n && (this.words[i] = n, this.length++), t ? this.ineg() : this
                    }, o.prototype.muln = function(e) {
                        return this.clone().imuln(e)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(e) {
                        var t = function(e) {
                            for (var t = new Array(e.bitLength()), n = 0; n < t.length; n++) {
                                var r = n / 26 | 0,
                                    i = n % 26;
                                t[n] = e.words[r] >>> i & 1
                            }
                            return t
                        }(e);
                        if (0 === t.length) return new o(1);
                        for (var n = this, r = 0; r < t.length && 0 === t[r]; r++, n = n.sqr());
                        if (++r < t.length)
                            for (var i = n.sqr(); r < t.length; r++, i = i.sqr()) 0 !== t[r] && (n = n.mul(i));
                        return n
                    }, o.prototype.iushln = function(e) {
                        r("number" == typeof e && e >= 0);
                        var t, n = e % 26,
                            i = (e - n) / 26,
                            o = 67108863 >>> 26 - n << 26 - n;
                        if (0 !== n) {
                            var s = 0;
                            for (t = 0; t < this.length; t++) {
                                var a = this.words[t] & o,
                                    c = (0 | this.words[t]) - a << n;
                                this.words[t] = c | s, s = a >>> 26 - n
                            }
                            s && (this.words[t] = s, this.length++)
                        }
                        if (0 !== i) {
                            for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                            for (t = 0; t < i; t++) this.words[t] = 0;
                            this.length += i
                        }
                        return this._strip()
                    }, o.prototype.ishln = function(e) {
                        return r(0 === this.negative), this.iushln(e)
                    }, o.prototype.iushrn = function(e, t, n) {
                        var i;
                        r("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
                        var o = e % 26,
                            s = Math.min((e - o) / 26, this.length),
                            a = 67108863 ^ 67108863 >>> o << o,
                            c = n;
                        if (i -= s, i = Math.max(0, i), c) {
                            for (var u = 0; u < s; u++) c.words[u] = this.words[u];
                            c.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
                        else this.words[0] = 0, this.length = 1;
                        var l = 0;
                        for (u = this.length - 1; u >= 0 && (0 !== l || u >= i); u--) {
                            var d = 0 | this.words[u];
                            this.words[u] = l << 26 - o | d >>> o, l = d & a
                        }
                        return c && 0 !== l && (c.words[c.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, o.prototype.ishrn = function(e, t, n) {
                        return r(0 === this.negative), this.iushrn(e, t, n)
                    }, o.prototype.shln = function(e) {
                        return this.clone().ishln(e)
                    }, o.prototype.ushln = function(e) {
                        return this.clone().iushln(e)
                    }, o.prototype.shrn = function(e) {
                        return this.clone().ishrn(e)
                    }, o.prototype.ushrn = function(e) {
                        return this.clone().iushrn(e)
                    }, o.prototype.testn = function(e) {
                        r("number" == typeof e && e >= 0);
                        var t = e % 26,
                            n = (e - t) / 26,
                            i = 1 << t;
                        return !(this.length <= n) && !!(this.words[n] & i)
                    }, o.prototype.imaskn = function(e) {
                        r("number" == typeof e && e >= 0);
                        var t = e % 26,
                            n = (e - t) / 26;
                        if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this;
                        if (0 !== t && n++, this.length = Math.min(n, this.length), 0 !== t) {
                            var i = 67108863 ^ 67108863 >>> t << t;
                            this.words[this.length - 1] &= i
                        }
                        return this._strip()
                    }, o.prototype.maskn = function(e) {
                        return this.clone().imaskn(e)
                    }, o.prototype.iaddn = function(e) {
                        return r("number" == typeof e), r(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
                    }, o.prototype._iaddn = function(e) {
                        this.words[0] += e;
                        for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                        return this.length = Math.max(this.length, t + 1), this
                    }, o.prototype.isubn = function(e) {
                        if (r("number" == typeof e), r(e < 67108864), e < 0) return this.iaddn(-e);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                        if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                        return this._strip()
                    }, o.prototype.addn = function(e) {
                        return this.clone().iaddn(e)
                    }, o.prototype.subn = function(e) {
                        return this.clone().isubn(e)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(e, t, n) {
                        var i, o, s = e.length + n;
                        this._expand(s);
                        var a = 0;
                        for (i = 0; i < e.length; i++) {
                            o = (0 | this.words[i + n]) + a;
                            var c = (0 | e.words[i]) * t;
                            a = ((o -= 67108863 & c) >> 26) - (c / 67108864 | 0), this.words[i + n] = 67108863 & o
                        }
                        for (; i < this.length - n; i++) a = (o = (0 | this.words[i + n]) + a) >> 26, this.words[i + n] = 67108863 & o;
                        if (0 === a) return this._strip();
                        for (r(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, o.prototype._wordDiv = function(e, t) {
                        var n = (this.length, e.length),
                            r = this.clone(),
                            i = e,
                            s = 0 | i.words[i.length - 1];
                        0 !== (n = 26 - this._countBits(s)) && (i = i.ushln(n), r.iushln(n), s = 0 | i.words[i.length - 1]);
                        var a, c = r.length - i.length;
                        if ("mod" !== t) {
                            (a = new o(null)).length = c + 1, a.words = new Array(a.length);
                            for (var u = 0; u < a.length; u++) a.words[u] = 0
                        }
                        var l = r.clone()._ishlnsubmul(i, 1, c);
                        0 === l.negative && (r = l, a && (a.words[c] = 1));
                        for (var d = c - 1; d >= 0; d--) {
                            var h = 67108864 * (0 | r.words[i.length + d]) + (0 | r.words[i.length + d - 1]);
                            for (h = Math.min(h / s | 0, 67108863), r._ishlnsubmul(i, h, d); 0 !== r.negative;) h--, r.negative = 0, r._ishlnsubmul(i, 1, d), r.isZero() || (r.negative ^= 1);
                            a && (a.words[d] = h)
                        }
                        return a && a._strip(), r._strip(), "div" !== t && 0 !== n && r.iushrn(n), {
                            div: a || null,
                            mod: r
                        }
                    }, o.prototype.divmod = function(e, t, n) {
                        return r(!e.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === e.negative ? (a = this.neg().divmod(e, t), "mod" !== t && (i = a.div.neg()), "div" !== t && (s = a.mod.neg(), n && 0 !== s.negative && s.iadd(e)), {
                            div: i,
                            mod: s
                        }) : 0 === this.negative && 0 !== e.negative ? (a = this.divmod(e.neg(), t), "mod" !== t && (i = a.div.neg()), {
                            div: i,
                            mod: a.mod
                        }) : 0 != (this.negative & e.negative) ? (a = this.neg().divmod(e.neg(), t), "div" !== t && (s = a.mod.neg(), n && 0 !== s.negative && s.isub(e)), {
                            div: a.div,
                            mod: s
                        }) : e.length > this.length || this.cmp(e) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === e.length ? "div" === t ? {
                            div: this.divn(e.words[0]),
                            mod: null
                        } : "mod" === t ? {
                            div: null,
                            mod: new o(this.modrn(e.words[0]))
                        } : {
                            div: this.divn(e.words[0]),
                            mod: new o(this.modrn(e.words[0]))
                        } : this._wordDiv(e, t);
                        var i, s, a
                    }, o.prototype.div = function(e) {
                        return this.divmod(e, "div", !1).div
                    }, o.prototype.mod = function(e) {
                        return this.divmod(e, "mod", !1).mod
                    }, o.prototype.umod = function(e) {
                        return this.divmod(e, "mod", !0).mod
                    }, o.prototype.divRound = function(e) {
                        var t = this.divmod(e);
                        if (t.mod.isZero()) return t.div;
                        var n = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                            r = e.ushrn(1),
                            i = e.andln(1),
                            o = n.cmp(r);
                        return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                    }, o.prototype.modrn = function(e) {
                        var t = e < 0;
                        t && (e = -e), r(e <= 67108863);
                        for (var n = (1 << 26) % e, i = 0, o = this.length - 1; o >= 0; o--) i = (n * i + (0 | this.words[o])) % e;
                        return t ? -i : i
                    }, o.prototype.modn = function(e) {
                        return this.modrn(e)
                    }, o.prototype.idivn = function(e) {
                        var t = e < 0;
                        t && (e = -e), r(e <= 67108863);
                        for (var n = 0, i = this.length - 1; i >= 0; i--) {
                            var o = (0 | this.words[i]) + 67108864 * n;
                            this.words[i] = o / e | 0, n = o % e
                        }
                        return this._strip(), t ? this.ineg() : this
                    }, o.prototype.divn = function(e) {
                        return this.clone().idivn(e)
                    }, o.prototype.egcd = function(e) {
                        r(0 === e.negative), r(!e.isZero());
                        var t = this,
                            n = e.clone();
                        t = 0 !== t.negative ? t.umod(e) : t.clone();
                        for (var i = new o(1), s = new o(0), a = new o(0), c = new o(1), u = 0; t.isEven() && n.isEven();) t.iushrn(1), n.iushrn(1), ++u;
                        for (var l = n.clone(), d = t.clone(); !t.isZero();) {
                            for (var h = 0, p = 1; 0 == (t.words[0] & p) && h < 26; ++h, p <<= 1);
                            if (h > 0)
                                for (t.iushrn(h); h-- > 0;)(i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(d)), i.iushrn(1), s.iushrn(1);
                            for (var f = 0, m = 1; 0 == (n.words[0] & m) && f < 26; ++f, m <<= 1);
                            if (f > 0)
                                for (n.iushrn(f); f-- > 0;)(a.isOdd() || c.isOdd()) && (a.iadd(l), c.isub(d)), a.iushrn(1), c.iushrn(1);
                            t.cmp(n) >= 0 ? (t.isub(n), i.isub(a), s.isub(c)) : (n.isub(t), a.isub(i), c.isub(s))
                        }
                        return {
                            a: a,
                            b: c,
                            gcd: n.iushln(u)
                        }
                    }, o.prototype._invmp = function(e) {
                        r(0 === e.negative), r(!e.isZero());
                        var t = this,
                            n = e.clone();
                        t = 0 !== t.negative ? t.umod(e) : t.clone();
                        for (var i, s = new o(1), a = new o(0), c = n.clone(); t.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                            for (var u = 0, l = 1; 0 == (t.words[0] & l) && u < 26; ++u, l <<= 1);
                            if (u > 0)
                                for (t.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(c), s.iushrn(1);
                            for (var d = 0, h = 1; 0 == (n.words[0] & h) && d < 26; ++d, h <<= 1);
                            if (d > 0)
                                for (n.iushrn(d); d-- > 0;) a.isOdd() && a.iadd(c), a.iushrn(1);
                            t.cmp(n) >= 0 ? (t.isub(n), s.isub(a)) : (n.isub(t), a.isub(s))
                        }
                        return (i = 0 === t.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(e), i
                    }, o.prototype.gcd = function(e) {
                        if (this.isZero()) return e.abs();
                        if (e.isZero()) return this.abs();
                        var t = this.clone(),
                            n = e.clone();
                        t.negative = 0, n.negative = 0;
                        for (var r = 0; t.isEven() && n.isEven(); r++) t.iushrn(1), n.iushrn(1);
                        for (;;) {
                            for (; t.isEven();) t.iushrn(1);
                            for (; n.isEven();) n.iushrn(1);
                            var i = t.cmp(n);
                            if (i < 0) {
                                var o = t;
                                t = n, n = o
                            } else if (0 === i || 0 === n.cmpn(1)) break;
                            t.isub(n)
                        }
                        return n.iushln(r)
                    }, o.prototype.invm = function(e) {
                        return this.egcd(e).a.umod(e)
                    }, o.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, o.prototype.andln = function(e) {
                        return this.words[0] & e
                    }, o.prototype.bincn = function(e) {
                        r("number" == typeof e);
                        var t = e % 26,
                            n = (e - t) / 26,
                            i = 1 << t;
                        if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
                        for (var o = i, s = n; 0 !== o && s < this.length; s++) {
                            var a = 0 | this.words[s];
                            o = (a += o) >>> 26, a &= 67108863, this.words[s] = a
                        }
                        return 0 !== o && (this.words[s] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(e) {
                        var t, n = e < 0;
                        if (0 !== this.negative && !n) return -1;
                        if (0 === this.negative && n) return 1;
                        if (this._strip(), this.length > 1) t = 1;
                        else {
                            n && (e = -e), r(e <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            t = i === e ? 0 : i < e ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -t : t
                    }, o.prototype.cmp = function(e) {
                        if (0 !== this.negative && 0 === e.negative) return -1;
                        if (0 === this.negative && 0 !== e.negative) return 1;
                        var t = this.ucmp(e);
                        return 0 !== this.negative ? 0 | -t : t
                    }, o.prototype.ucmp = function(e) {
                        if (this.length > e.length) return 1;
                        if (this.length < e.length) return -1;
                        for (var t = 0, n = this.length - 1; n >= 0; n--) {
                            var r = 0 | this.words[n],
                                i = 0 | e.words[n];
                            if (r !== i) {
                                r < i ? t = -1 : r > i && (t = 1);
                                break
                            }
                        }
                        return t
                    }, o.prototype.gtn = function(e) {
                        return 1 === this.cmpn(e)
                    }, o.prototype.gt = function(e) {
                        return 1 === this.cmp(e)
                    }, o.prototype.gten = function(e) {
                        return this.cmpn(e) >= 0
                    }, o.prototype.gte = function(e) {
                        return this.cmp(e) >= 0
                    }, o.prototype.ltn = function(e) {
                        return -1 === this.cmpn(e)
                    }, o.prototype.lt = function(e) {
                        return -1 === this.cmp(e)
                    }, o.prototype.lten = function(e) {
                        return this.cmpn(e) <= 0
                    }, o.prototype.lte = function(e) {
                        return this.cmp(e) <= 0
                    }, o.prototype.eqn = function(e) {
                        return 0 === this.cmpn(e)
                    }, o.prototype.eq = function(e) {
                        return 0 === this.cmp(e)
                    }, o.red = function(e) {
                        return new I(e)
                    }, o.prototype.toRed = function(e) {
                        return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                    }, o.prototype.fromRed = function() {
                        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(e) {
                        return this.red = e, this
                    }, o.prototype.forceRed = function(e) {
                        return r(!this.red, "Already a number in reduction context"), this._forceRed(e)
                    }, o.prototype.redAdd = function(e) {
                        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                    }, o.prototype.redIAdd = function(e) {
                        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                    }, o.prototype.redSub = function(e) {
                        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                    }, o.prototype.redISub = function(e) {
                        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                    }, o.prototype.redShl = function(e) {
                        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                    }, o.prototype.redMul = function(e) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                    }, o.prototype.redIMul = function(e) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                    }, o.prototype.redSqr = function() {
                        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(e) {
                        return r(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                    };
                    var b = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function _(e, t) {
                        this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function M() {
                        _.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function A() {
                        _.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function S() {
                        _.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function E() {
                        _.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function I(e) {
                        if ("string" == typeof e) {
                            var t = o._prime(e);
                            this.m = t.p, this.prime = t
                        } else r(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                    }

                    function k(e) {
                        I.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    _.prototype._tmp = function() {
                        var e = new o(null);
                        return e.words = new Array(Math.ceil(this.n / 13)), e
                    }, _.prototype.ireduce = function(e) {
                        var t, n = e;
                        do {
                            this.split(n, this.tmp), t = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength()
                        } while (t > this.n);
                        var r = t < this.n ? -1 : n.ucmp(this.p);
                        return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : void 0 !== n.strip ? n.strip() : n._strip(), n
                    }, _.prototype.split = function(e, t) {
                        e.iushrn(this.n, 0, t)
                    }, _.prototype.imulK = function(e) {
                        return e.imul(this.k)
                    }, i(M, _), M.prototype.split = function(e, t) {
                        for (var n = Math.min(e.length, 9), r = 0; r < n; r++) t.words[r] = e.words[r];
                        if (t.length = n, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                        var i = e.words[9];
                        for (t.words[t.length++] = 4194303 & i, r = 10; r < e.length; r++) {
                            var o = 0 | e.words[r];
                            e.words[r - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                        }
                        i >>>= 22, e.words[r - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
                    }, M.prototype.imulK = function(e) {
                        e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                        for (var t = 0, n = 0; n < e.length; n++) {
                            var r = 0 | e.words[n];
                            t += 977 * r, e.words[n] = 67108863 & t, t = 64 * r + (t / 67108864 | 0)
                        }
                        return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                    }, i(A, _), i(S, _), i(E, _), E.prototype.imulK = function(e) {
                        for (var t = 0, n = 0; n < e.length; n++) {
                            var r = 19 * (0 | e.words[n]) + t,
                                i = 67108863 & r;
                            r >>>= 26, e.words[n] = i, t = r
                        }
                        return 0 !== t && (e.words[e.length++] = t), e
                    }, o._prime = function(e) {
                        if (b[e]) return b[e];
                        var t;
                        if ("k256" === e) t = new M;
                        else if ("p224" === e) t = new A;
                        else if ("p192" === e) t = new S;
                        else {
                            if ("p25519" !== e) throw new Error("Unknown prime " + e);
                            t = new E
                        }
                        return b[e] = t, t
                    }, I.prototype._verify1 = function(e) {
                        r(0 === e.negative, "red works only with positives"), r(e.red, "red works only with red numbers")
                    }, I.prototype._verify2 = function(e, t) {
                        r(0 == (e.negative | t.negative), "red works only with positives"), r(e.red && e.red === t.red, "red works only with red numbers")
                    }, I.prototype.imod = function(e) {
                        return this.prime ? this.prime.ireduce(e)._forceRed(this) : (l(e, e.umod(this.m)._forceRed(this)), e)
                    }, I.prototype.neg = function(e) {
                        return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                    }, I.prototype.add = function(e, t) {
                        this._verify2(e, t);
                        var n = e.add(t);
                        return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this)
                    }, I.prototype.iadd = function(e, t) {
                        this._verify2(e, t);
                        var n = e.iadd(t);
                        return n.cmp(this.m) >= 0 && n.isub(this.m), n
                    }, I.prototype.sub = function(e, t) {
                        this._verify2(e, t);
                        var n = e.sub(t);
                        return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this)
                    }, I.prototype.isub = function(e, t) {
                        this._verify2(e, t);
                        var n = e.isub(t);
                        return n.cmpn(0) < 0 && n.iadd(this.m), n
                    }, I.prototype.shl = function(e, t) {
                        return this._verify1(e), this.imod(e.ushln(t))
                    }, I.prototype.imul = function(e, t) {
                        return this._verify2(e, t), this.imod(e.imul(t))
                    }, I.prototype.mul = function(e, t) {
                        return this._verify2(e, t), this.imod(e.mul(t))
                    }, I.prototype.isqr = function(e) {
                        return this.imul(e, e.clone())
                    }, I.prototype.sqr = function(e) {
                        return this.mul(e, e)
                    }, I.prototype.sqrt = function(e) {
                        if (e.isZero()) return e.clone();
                        var t = this.m.andln(3);
                        if (r(t % 2 == 1), 3 === t) {
                            var n = this.m.add(new o(1)).iushrn(2);
                            return this.pow(e, n)
                        }
                        for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                        r(!i.isZero());
                        var a = new o(1).toRed(this),
                            c = a.redNeg(),
                            u = this.m.subn(1).iushrn(1),
                            l = this.m.bitLength();
                        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, u).cmp(c);) l.redIAdd(c);
                        for (var d = this.pow(l, i), h = this.pow(e, i.addn(1).iushrn(1)), p = this.pow(e, i), f = s; 0 !== p.cmp(a);) {
                            for (var m = p, y = 0; 0 !== m.cmp(a); y++) m = m.redSqr();
                            r(y < f);
                            var g = this.pow(d, new o(1).iushln(f - y - 1));
                            h = h.redMul(g), d = g.redSqr(), p = p.redMul(d), f = y
                        }
                        return h
                    }, I.prototype.invm = function(e) {
                        var t = e._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, I.prototype.pow = function(e, t) {
                        if (t.isZero()) return new o(1).toRed(this);
                        if (0 === t.cmpn(1)) return e.clone();
                        var n = new Array(16);
                        n[0] = new o(1).toRed(this), n[1] = e;
                        for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], e);
                        var i = n[0],
                            s = 0,
                            a = 0,
                            c = t.bitLength() % 26;
                        for (0 === c && (c = 26), r = t.length - 1; r >= 0; r--) {
                            for (var u = t.words[r], l = c - 1; l >= 0; l--) {
                                var d = u >> l & 1;
                                i !== n[0] && (i = this.sqr(i)), 0 !== d || 0 !== s ? (s <<= 1, s |= d, (4 === ++a || 0 === r && 0 === l) && (i = this.mul(i, n[s]), a = 0, s = 0)) : a = 0
                            }
                            c = 26
                        }
                        return i
                    }, I.prototype.convertTo = function(e) {
                        var t = e.umod(this.m);
                        return t === e ? t.clone() : t
                    }, I.prototype.convertFrom = function(e) {
                        var t = e.clone();
                        return t.red = null, t
                    }, o.mont = function(e) {
                        return new k(e)
                    }, i(k, I), k.prototype.convertTo = function(e) {
                        return this.imod(e.ushln(this.shift))
                    }, k.prototype.convertFrom = function(e) {
                        var t = this.imod(e.mul(this.rinv));
                        return t.red = null, t
                    }, k.prototype.imul = function(e, t) {
                        if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                        var n = e.imul(t),
                            r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = n.isub(r).iushrn(this.shift),
                            o = i;
                        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                    }, k.prototype.mul = function(e, t) {
                        if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
                        var n = e.mul(t),
                            r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = n.isub(r).iushrn(this.shift),
                            s = i;
                        return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                    }, k.prototype.invm = function(e) {
                        return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(e, this)
            }).call(this, n(81)(e))
        },
        3667: function(e, t, n) {
            "function" == typeof process.addon ? e.exports = process.addon.bind(process) : e.exports = n(3668)
        },
        3668: function(e, t, n) {
            var r = n(142),
                i = n(104),
                o = n(1397),
                s = require,
                a = process.config && process.config.variables || {},
                c = !!process.env.PREBUILDS_ONLY,
                u = process.versions.modules,
                l = !(!process.versions || !process.versions.electron) || !!process.env.ELECTRON_RUN_AS_NODE || "undefined" != typeof window && window.process && "renderer" === window.process.type ? "electron" : process.versions && process.versions.nw ? "node-webkit" : "node",
                d = process.env.npm_config_arch || o.arch(),
                h = process.env.npm_config_platform || o.platform(),
                p = process.env.LIBC || (function(e) {
                    return "linux" === e && r.existsSync("/etc/alpine-release")
                }(h) ? "musl" : "glibc"),
                f = process.env.ARM_VERSION || ("arm64" === d ? "8" : a.arm_version) || "",
                m = (process.versions.uv || "").split(".")[0];

            function y(e) {
                return s(y.resolve(e))
            }

            function g(e) {
                try {
                    return r.readdirSync(e)
                } catch (e) {
                    return []
                }
            }

            function v(e, t) {
                var n = g(e).filter(t);
                return n[0] && i.join(e, n[0])
            }

            function w(e) {
                return /\.node$/.test(e)
            }

            function b(e) {
                var t = e.split("-");
                if (2 === t.length) {
                    var n = t[0],
                        r = t[1].split("+");
                    if (n && r.length && r.every(Boolean)) return {
                        name: e,
                        platform: n,
                        architectures: r
                    }
                }
            }

            function _(e, t) {
                return function(n) {
                    return null != n && (n.platform === e && n.architectures.includes(t))
                }
            }

            function M(e, t) {
                return e.architectures.length - t.architectures.length
            }

            function A(e) {
                var t = e.split("."),
                    n = {
                        file: e,
                        specificity: 0
                    };
                if ("node" === t.pop()) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        if ("node" === i || "electron" === i || "node-webkit" === i) n.runtime = i;
                        else if ("napi" === i) n.napi = !0;
                        else if ("abi" === i.slice(0, 3)) n.abi = i.slice(3);
                        else if ("uv" === i.slice(0, 2)) n.uv = i.slice(2);
                        else if ("armv" === i.slice(0, 4)) n.armv = i.slice(4);
                        else {
                            if ("glibc" !== i && "musl" !== i) continue;
                            n.libc = i
                        }
                        n.specificity++
                    }
                    return n
                }
            }

            function S(e, t) {
                return function(n) {
                    return null != n && (!(n.runtime !== e && ! function(e) {
                        return "node" === e.runtime && e.napi
                    }(n)) && (!(n.abi !== t && !n.napi) && ((!n.uv || n.uv === m) && ((!n.armv || n.armv === f) && (!n.libc || n.libc === p)))))
                }
            }

            function E(e) {
                return function(t, n) {
                    return t.runtime !== n.runtime ? t.runtime === e ? -1 : 1 : t.abi !== n.abi ? t.abi ? -1 : 1 : t.specificity !== n.specificity ? t.specificity > n.specificity ? -1 : 1 : 0
                }
            }
            e.exports = y, y.resolve = y.path = function(e) {
                e = i.resolve(e || ".");
                try {
                    var t = s(i.join(e, "package.json")).name.toUpperCase().replace(/-/g, "_");
                    process.env[t + "_PREBUILD"] && (e = process.env[t + "_PREBUILD"])
                } catch (e) {}
                if (!c) {
                    var n = v(i.join(e, "build/Release"), w);
                    if (n) return n;
                    var r = v(i.join(e, "build/Debug"), w);
                    if (r) return r
                }
                var o = I(e);
                if (o) return o;
                var a = I(i.dirname(process.execPath));
                if (a) return a;
                var y = ["platform=" + h, "arch=" + d, "runtime=" + l, "abi=" + u, "uv=" + m, f ? "armv=" + f : "", "libc=" + p, "node=" + process.versions.node, process.versions.electron ? "electron=" + process.versions.electron : "", "webpack=true"].filter(Boolean).join(" ");
                throw new Error("No native build was found for " + y + "\n    loaded from: " + e + "\n");

                function I(e) {
                    var t = g(i.join(e, "prebuilds")).map(b).filter(_(h, d)).sort(M)[0];
                    if (t) {
                        var n = i.join(e, "prebuilds", t.name),
                            r = g(n).map(A).filter(S(l, u)).sort(E(l))[0];
                        return r ? i.join(n, r.file) : void 0
                    }
                }
            }, y.parseTags = A, y.matchTags = S, y.compareTags = E, y.parseTuple = b, y.matchTuple = _, y.compareTuples = M
        },
        3692: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MergeKeyStore = t.BrowserLocalStorageKeyStore = t.InMemoryKeyStore = t.KeyStore = void 0;
            const r = n(629);
            Object.defineProperty(t, "KeyStore", {
                enumerable: !0,
                get: function() {
                    return r.KeyStore
                }
            });
            const i = n(1875);
            Object.defineProperty(t, "InMemoryKeyStore", {
                enumerable: !0,
                get: function() {
                    return i.InMemoryKeyStore
                }
            });
            const o = n(3693);
            Object.defineProperty(t, "BrowserLocalStorageKeyStore", {
                enumerable: !0,
                get: function() {
                    return o.BrowserLocalStorageKeyStore
                }
            });
            const s = n(3694);
            Object.defineProperty(t, "MergeKeyStore", {
                enumerable: !0,
                get: function() {
                    return s.MergeKeyStore
                }
            })
        },
        3693: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BrowserLocalStorageKeyStore = void 0;
            const r = n(629),
                i = n(267);
            class BrowserLocalStorageKeyStore extends r.KeyStore {
                constructor(e = window.localStorage, t = "near-api-js:keystore:") {
                    super(), this.localStorage = e, this.prefix = t
                }
                async setKey(e, t, n) {
                    this.localStorage.setItem(this.storageKeyForSecretKey(e, t), n.toString())
                }
                async getKey(e, t) {
                    const n = this.localStorage.getItem(this.storageKeyForSecretKey(e, t));
                    return n ? i.KeyPair.fromString(n) : null
                }
                async removeKey(e, t) {
                    this.localStorage.removeItem(this.storageKeyForSecretKey(e, t))
                }
                async clear() {
                    for (const e of this.storageKeys()) e.startsWith(this.prefix) && this.localStorage.removeItem(e)
                }
                async getNetworks() {
                    const e = new Set;
                    for (const t of this.storageKeys())
                        if (t.startsWith(this.prefix)) {
                            const n = t.substring(this.prefix.length).split(":");
                            e.add(n[1])
                        } return Array.from(e.values())
                }
                async getAccounts(e) {
                    const t = new Array;
                    for (const n of this.storageKeys())
                        if (n.startsWith(this.prefix)) {
                            const r = n.substring(this.prefix.length).split(":");
                            r[1] === e && t.push(r[0])
                        } return t
                }
                storageKeyForSecretKey(e, t) {
                    return `${this.prefix}${t}:${e}`
                }* storageKeys() {
                    for (let e = 0; e < this.localStorage.length; e++) yield this.localStorage.key(e)
                }
            }
            t.BrowserLocalStorageKeyStore = BrowserLocalStorageKeyStore
        },
        3694: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MergeKeyStore = void 0;
            const r = n(629);
            class MergeKeyStore extends r.KeyStore {
                constructor(e, t = {
                    writeKeyStoreIndex: 0
                }) {
                    super(), this.options = t, this.keyStores = e
                }
                async setKey(e, t, n) {
                    await this.keyStores[this.options.writeKeyStoreIndex].setKey(e, t, n)
                }
                async getKey(e, t) {
                    for (const n of this.keyStores) {
                        const r = await n.getKey(e, t);
                        if (r) return r
                    }
                    return null
                }
                async removeKey(e, t) {
                    for (const n of this.keyStores) await n.removeKey(e, t)
                }
                async clear() {
                    for (const e of this.keyStores) await e.clear()
                }
                async getNetworks() {
                    const e = new Set;
                    for (const t of this.keyStores)
                        for (const n of await t.getNetworks()) e.add(n);
                    return Array.from(e)
                }
                async getAccounts(e) {
                    const t = new Set;
                    for (const n of this.keyStores)
                        for (const r of await n.getAccounts(e)) t.add(r);
                    return Array.from(t)
                }
                toString() {
                    return `MergeKeyStore(${this.keyStores.join(", ")})`
                }
            }
            t.MergeKeyStore = MergeKeyStore
        },
        3695: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JsonRpcProvider = t.ErrorContext = t.TypedError = void 0;
            const i = r(n(414)),
                o = n(1878),
                s = n(630),
                a = n(415);
            Object.defineProperty(t, "TypedError", {
                enumerable: !0,
                get: function() {
                    return a.TypedError
                }
            }), Object.defineProperty(t, "ErrorContext", {
                enumerable: !0,
                get: function() {
                    return a.ErrorContext
                }
            });
            const c = n(291),
                u = r(n(1080)),
                l = n(1081);
            let d = 123;
            class JsonRpcProvider extends o.Provider {
                constructor(e) {
                    if (super(), null != e && "object" == typeof e) this.connection = e;
                    else {
                        i.default("JsonRpcProvider(url?: string)")("use `JsonRpcProvider(connectionInfo: ConnectionInfo)` instead"), this.connection = {
                            url: e
                        }
                    }
                }
                async status() {
                    return this.sendJsonRpc("status", [])
                }
                async sendTransaction(e) {
                    const t = e.encode();
                    return this.sendJsonRpc("broadcast_tx_commit", [Buffer.from(t).toString("base64")])
                }
                async sendTransactionAsync(e) {
                    const t = e.encode();
                    return this.sendJsonRpc("broadcast_tx_async", [Buffer.from(t).toString("base64")])
                }
                async txStatus(e, t) {
                    return "string" == typeof e ? this.txStatusString(e, t) : this.txStatusUint8Array(e, t)
                }
                async txStatusUint8Array(e, t) {
                    return this.sendJsonRpc("tx", [c.baseEncode(e), t])
                }
                async txStatusString(e, t) {
                    return this.sendJsonRpc("tx", [e, t])
                }
                async txStatusReceipts(e, t) {
                    return this.sendJsonRpc("EXPERIMENTAL_tx_status", [c.baseEncode(e), t])
                }
                async query(...e) {
                    let t;
                    if (1 === e.length) t = await this.sendJsonRpc("query", e[0]);
                    else {
                        const [n, r] = e;
                        t = await this.sendJsonRpc("query", [n, r])
                    }
                    if (t && t.error) throw new a.TypedError(`Querying ${e} failed: ${t.error}.\n${JSON.stringify(t,null,2)}`, l.getErrorTypeFromErrorMessage(t.error));
                    return t
                }
                async block(e) {
                    const {
                        finality: t
                    } = e;
                    let {
                        blockId: n
                    } = e;
                    if ("object" != typeof e) {
                        i.default("JsonRpcProvider.block(blockId)")("use `block({ blockId })` or `block({ finality })` instead"), n = e
                    }
                    return this.sendJsonRpc("block", {
                        block_id: n,
                        finality: t
                    })
                }
                async blockChanges(e) {
                    const {
                        finality: t
                    } = e, {
                        blockId: n
                    } = e;
                    return this.sendJsonRpc("EXPERIMENTAL_changes_in_block", {
                        block_id: n,
                        finality: t
                    })
                }
                async chunk(e) {
                    return this.sendJsonRpc("chunk", [e])
                }
                async validators(e) {
                    return this.sendJsonRpc("validators", [e])
                }
                async experimental_genesisConfig() {
                    return i.default("JsonRpcProvider.experimental_protocolConfig()")("use `experimental_protocolConfig({ sync_checkpoint: 'genesis' })` to fetch the up-to-date or genesis protocol config explicitly"), await this.sendJsonRpc("EXPERIMENTAL_protocol_config", {
                        sync_checkpoint: "genesis"
                    })
                }
                async experimental_protocolConfig(e) {
                    return await this.sendJsonRpc("EXPERIMENTAL_protocol_config", e)
                }
                async experimental_lightClientProof(e) {
                    return i.default("JsonRpcProvider.experimental_lightClientProof(request)")("use `lightClientProof` instead"), await this.lightClientProof(e)
                }
                async lightClientProof(e) {
                    return await this.sendJsonRpc("EXPERIMENTAL_light_client_proof", e)
                }
                async accessKeyChanges(e, t) {
                    const {
                        finality: n
                    } = t, {
                        blockId: r
                    } = t;
                    return this.sendJsonRpc("EXPERIMENTAL_changes", {
                        changes_type: "all_access_key_changes",
                        account_ids: e,
                        block_id: r,
                        finality: n
                    })
                }
                async singleAccessKeyChanges(e, t) {
                    const {
                        finality: n
                    } = t, {
                        blockId: r
                    } = t;
                    return this.sendJsonRpc("EXPERIMENTAL_changes", {
                        changes_type: "single_access_key_changes",
                        keys: e,
                        block_id: r,
                        finality: n
                    })
                }
                async accountChanges(e, t) {
                    const {
                        finality: n
                    } = t, {
                        blockId: r
                    } = t;
                    return this.sendJsonRpc("EXPERIMENTAL_changes", {
                        changes_type: "account_changes",
                        account_ids: e,
                        block_id: r,
                        finality: n
                    })
                }
                async contractStateChanges(e, t, n = "") {
                    const {
                        finality: r
                    } = t, {
                        blockId: i
                    } = t;
                    return this.sendJsonRpc("EXPERIMENTAL_changes", {
                        changes_type: "data_changes",
                        account_ids: e,
                        key_prefix_base64: n,
                        block_id: i,
                        finality: r
                    })
                }
                async contractCodeChanges(e, t) {
                    const {
                        finality: n
                    } = t, {
                        blockId: r
                    } = t;
                    return this.sendJsonRpc("EXPERIMENTAL_changes", {
                        changes_type: "contract_code_changes",
                        account_ids: e,
                        block_id: r,
                        finality: n
                    })
                }
                async gasPrice(e) {
                    return await this.sendJsonRpc("gas_price", [e])
                }
                async sendJsonRpc(e, t) {
                    const n = await u.default(500, 12, 1.5, async () => {
                            try {
                                const n = {
                                        method: e,
                                        params: t,
                                        id: d++,
                                        jsonrpc: "2.0"
                                    },
                                    r = await s.fetchJson(this.connection, JSON.stringify(n));
                                if (r.error) {
                                    if ("object" == typeof r.error.data) {
                                        if ("string" == typeof r.error.data.error_message && "string" == typeof r.error.data.error_type) throw new a.TypedError(r.error.data.error_message, r.error.data.error_type);
                                        throw l.parseRpcError(r.error.data)
                                    } {
                                        const e = `[${r.error.code}] ${r.error.message}: ${r.error.data}`;
                                        if ("Timeout" === r.error.data || e.includes("Timeout error") || e.includes("query has timed out")) throw new a.TypedError(e, "TimeoutError");
                                        throw new a.TypedError(e, l.getErrorTypeFromErrorMessage(r.error.data))
                                    }
                                }
                                return r
                            } catch (n) {
                                if ("TimeoutError" === n.type) return process.env.NEAR_NO_LOGS || console.warn(`Retrying request to ${e} as it has timed out`, t), null;
                                throw n
                            }
                        }),
                        {
                            result: r
                        } = n;
                    if (void 0 === r) throw new a.TypedError(`Exceeded 12 attempts for request to ${e}.`, "RetriesExceeded");
                    return r
                }
            }
            t.JsonRpcProvider = JsonRpcProvider
        },
        3696: function(e, t, n) {
            "use strict";
            var r, i = n(3697)("http-errors"),
                o = n(3698),
                s = n(3699),
                a = n(18),
                c = n(3701);

            function u(e) {
                return Number(String(e).charAt(0) + "00")
            }

            function l(e, t) {
                var n = Object.getOwnPropertyDescriptor(e, "name");
                n && n.configurable && (n.value = t, Object.defineProperty(e, "name", n))
            }

            function d(e) {
                return "Error" !== e.substr(-5) ? e + "Error" : e
            }
            e.exports = function e() {
                    for (var t, n, r = 500, o = {}, a = 0; a < arguments.length; a++) {
                        var c = arguments[a];
                        if (c instanceof Error) r = (t = c).status || t.statusCode || r;
                        else switch (typeof c) {
                            case "string":
                                n = c;
                                break;
                            case "number":
                                r = c, 0 !== a && i("non-first-argument status code; replace with createError(" + c + ", ...)");
                                break;
                            case "object":
                                o = c
                        }
                    }
                    "number" == typeof r && (r < 400 || r >= 600) && i("non-error status code; use only 4xx or 5xx status codes");
                    ("number" != typeof r || !s[r] && (r < 400 || r >= 600)) && (r = 500);
                    var l = e[r] || e[u(r)];
                    t || (t = l ? new l(n) : new Error(n || s[r]), Error.captureStackTrace(t, e));
                    l && t instanceof l && t.status === r || (t.expose = r < 500, t.status = t.statusCode = r);
                    for (var d in o) "status" !== d && "statusCode" !== d && (t[d] = o[d]);
                    return t
                }, e.exports.HttpError = function() {
                    function e() {
                        throw new TypeError("cannot construct abstract class")
                    }
                    return a(e, Error), e
                }(), e.exports.isHttpError = (r = e.exports.HttpError, function(e) {
                    return !(!e || "object" != typeof e) && (e instanceof r || e instanceof Error && "boolean" == typeof e.expose && "number" == typeof e.statusCode && e.status === e.statusCode)
                }),
                function(e, t, n) {
                    t.forEach((function(t) {
                        var r, i = c(s[t]);
                        switch (u(t)) {
                            case 400:
                                r = function(e, t, n) {
                                    var r = d(t);

                                    function i(e) {
                                        var t = null != e ? e : s[n],
                                            a = new Error(t);
                                        return Error.captureStackTrace(a, i), o(a, i.prototype), Object.defineProperty(a, "message", {
                                            enumerable: !0,
                                            configurable: !0,
                                            value: t,
                                            writable: !0
                                        }), Object.defineProperty(a, "name", {
                                            enumerable: !1,
                                            configurable: !0,
                                            value: r,
                                            writable: !0
                                        }), a
                                    }
                                    return a(i, e), l(i, r), i.prototype.status = n, i.prototype.statusCode = n, i.prototype.expose = !0, i
                                }(n, i, t);
                                break;
                            case 500:
                                r = function(e, t, n) {
                                    var r = d(t);

                                    function i(e) {
                                        var t = null != e ? e : s[n],
                                            a = new Error(t);
                                        return Error.captureStackTrace(a, i), o(a, i.prototype), Object.defineProperty(a, "message", {
                                            enumerable: !0,
                                            configurable: !0,
                                            value: t,
                                            writable: !0
                                        }), Object.defineProperty(a, "name", {
                                            enumerable: !1,
                                            configurable: !0,
                                            value: r,
                                            writable: !0
                                        }), a
                                    }
                                    return a(i, e), l(i, r), i.prototype.status = n, i.prototype.statusCode = n, i.prototype.expose = !1, i
                                }(n, i, t)
                        }
                        r && (e[t] = r, e[i] = r)
                    })), e["I'mateapot"] = i.function(e.ImATeapot, '"I\'mateapot"; use "ImATeapot" instead')
                }(e.exports, s.codes, e.exports.HttpError)
        },
        3697: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if ("function" != typeof e) throw new TypeError("argument fn must be a function");
                return e
            }

            function i(e, t, n) {
                if (!e || "object" != typeof e && "function" != typeof e) throw new TypeError("argument obj must be object");
                var r = Object.getOwnPropertyDescriptor(e, t);
                if (!r) throw new TypeError("must call property on owner object");
                if (!r.configurable) throw new TypeError("property must be configurable")
            }
            e.exports = function(e) {
                if (!e) throw new TypeError("argument namespace is required");

                function t(e) {}
                return t._file = void 0, t._ignored = !0, t._namespace = e, t._traced = !1, t._warned = Object.create(null), t.function = r, t.property = i, t
            }
        },
        3699: function(e, t, n) {
            "use strict";
            var r = n(3700);

            function i(e) {
                if ("number" == typeof e) {
                    if (!i[e]) throw new Error("invalid status code: " + e);
                    return e
                }
                if ("string" != typeof e) throw new TypeError("code must be a number or string");
                var t = parseInt(e, 10);
                if (!isNaN(t)) {
                    if (!i[t]) throw new Error("invalid status code: " + t);
                    return t
                }
                if (!(t = i[e.toLowerCase()])) throw new Error('invalid status message: "' + e + '"');
                return t
            }
            e.exports = i, i.STATUS_CODES = r, i.codes = function(e, t) {
                var n = [];
                return Object.keys(t).forEach((function(r) {
                    var i = t[r],
                        o = Number(r);
                    e[o] = i, e[i] = o, e[i.toLowerCase()] = o, n.push(o)
                })), n
            }(i, r), i.redirect = {
                300: !0,
                301: !0,
                302: !0,
                303: !0,
                305: !0,
                307: !0,
                308: !0
            }, i.empty = {
                204: !0,
                205: !0,
                304: !0
            }, i.retry = {
                502: !0,
                503: !0,
                504: !0
            }
        },
        3700: function(e) {
            e.exports = JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","306":"(Unused)","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Unordered Collection","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')
        },
        3703: function(e) {
            e.exports = JSON.parse('{"schema":{"BadUTF16":{"name":"BadUTF16","subtypes":[],"props":{}},"BadUTF8":{"name":"BadUTF8","subtypes":[],"props":{}},"BalanceExceeded":{"name":"BalanceExceeded","subtypes":[],"props":{}},"BreakpointTrap":{"name":"BreakpointTrap","subtypes":[],"props":{}},"CacheError":{"name":"CacheError","subtypes":["ReadError","WriteError","DeserializationError","SerializationError"],"props":{}},"CallIndirectOOB":{"name":"CallIndirectOOB","subtypes":[],"props":{}},"CannotAppendActionToJointPromise":{"name":"CannotAppendActionToJointPromise","subtypes":[],"props":{}},"CannotReturnJointPromise":{"name":"CannotReturnJointPromise","subtypes":[],"props":{}},"CodeDoesNotExist":{"name":"CodeDoesNotExist","subtypes":[],"props":{"account_id":""}},"CompilationError":{"name":"CompilationError","subtypes":["CodeDoesNotExist","PrepareError","WasmerCompileError"],"props":{}},"ContractSizeExceeded":{"name":"ContractSizeExceeded","subtypes":[],"props":{"limit":"","size":""}},"Deprecated":{"name":"Deprecated","subtypes":[],"props":{"method_name":""}},"Deserialization":{"name":"Deserialization","subtypes":[],"props":{}},"DeserializationError":{"name":"DeserializationError","subtypes":[],"props":{}},"EmptyMethodName":{"name":"EmptyMethodName","subtypes":[],"props":{}},"FunctionCallError":{"name":"FunctionCallError","subtypes":["CompilationError","LinkError","MethodResolveError","WasmTrap","WasmUnknownError","HostError","EvmError"],"props":{}},"GasExceeded":{"name":"GasExceeded","subtypes":[],"props":{}},"GasInstrumentation":{"name":"GasInstrumentation","subtypes":[],"props":{}},"GasLimitExceeded":{"name":"GasLimitExceeded","subtypes":[],"props":{}},"GenericTrap":{"name":"GenericTrap","subtypes":[],"props":{}},"GuestPanic":{"name":"GuestPanic","subtypes":[],"props":{"panic_msg":""}},"HostError":{"name":"HostError","subtypes":["BadUTF16","BadUTF8","GasExceeded","GasLimitExceeded","BalanceExceeded","EmptyMethodName","GuestPanic","IntegerOverflow","InvalidPromiseIndex","CannotAppendActionToJointPromise","CannotReturnJointPromise","InvalidPromiseResultIndex","InvalidRegisterId","IteratorWasInvalidated","MemoryAccessViolation","InvalidReceiptIndex","InvalidIteratorIndex","InvalidAccountId","InvalidMethodName","InvalidPublicKey","ProhibitedInView","NumberOfLogsExceeded","KeyLengthExceeded","ValueLengthExceeded","TotalLogLengthExceeded","NumberPromisesExceeded","NumberInputDataDependenciesExceeded","ReturnedValueLengthExceeded","ContractSizeExceeded","Deprecated"],"props":{}},"IllegalArithmetic":{"name":"IllegalArithmetic","subtypes":[],"props":{}},"IncorrectCallIndirectSignature":{"name":"IncorrectCallIndirectSignature","subtypes":[],"props":{}},"Instantiate":{"name":"Instantiate","subtypes":[],"props":{}},"IntegerOverflow":{"name":"IntegerOverflow","subtypes":[],"props":{}},"InternalMemoryDeclared":{"name":"InternalMemoryDeclared","subtypes":[],"props":{}},"InvalidAccountId":{"name":"InvalidAccountId","subtypes":[],"props":{"account_id":""}},"InvalidIteratorIndex":{"name":"InvalidIteratorIndex","subtypes":[],"props":{"iterator_index":""}},"InvalidMethodName":{"name":"InvalidMethodName","subtypes":[],"props":{}},"InvalidPromiseIndex":{"name":"InvalidPromiseIndex","subtypes":[],"props":{"promise_idx":""}},"InvalidPromiseResultIndex":{"name":"InvalidPromiseResultIndex","subtypes":[],"props":{"result_idx":""}},"InvalidPublicKey":{"name":"InvalidPublicKey","subtypes":[],"props":{}},"InvalidReceiptIndex":{"name":"InvalidReceiptIndex","subtypes":[],"props":{"receipt_index":""}},"InvalidRegisterId":{"name":"InvalidRegisterId","subtypes":[],"props":{"register_id":""}},"IteratorWasInvalidated":{"name":"IteratorWasInvalidated","subtypes":[],"props":{"iterator_index":""}},"KeyLengthExceeded":{"name":"KeyLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"LinkError":{"name":"LinkError","subtypes":[],"props":{"msg":""}},"Memory":{"name":"Memory","subtypes":[],"props":{}},"MemoryAccessViolation":{"name":"MemoryAccessViolation","subtypes":[],"props":{}},"MemoryOutOfBounds":{"name":"MemoryOutOfBounds","subtypes":[],"props":{}},"MethodEmptyName":{"name":"MethodEmptyName","subtypes":[],"props":{}},"MethodInvalidSignature":{"name":"MethodInvalidSignature","subtypes":[],"props":{}},"MethodNotFound":{"name":"MethodNotFound","subtypes":[],"props":{}},"MethodResolveError":{"name":"MethodResolveError","subtypes":["MethodEmptyName","MethodUTF8Error","MethodNotFound","MethodInvalidSignature"],"props":{}},"MethodUTF8Error":{"name":"MethodUTF8Error","subtypes":[],"props":{}},"MisalignedAtomicAccess":{"name":"MisalignedAtomicAccess","subtypes":[],"props":{}},"NumberInputDataDependenciesExceeded":{"name":"NumberInputDataDependenciesExceeded","subtypes":[],"props":{"limit":"","number_of_input_data_dependencies":""}},"NumberOfLogsExceeded":{"name":"NumberOfLogsExceeded","subtypes":[],"props":{"limit":""}},"NumberPromisesExceeded":{"name":"NumberPromisesExceeded","subtypes":[],"props":{"limit":"","number_of_promises":""}},"PrepareError":{"name":"PrepareError","subtypes":["Serialization","Deserialization","InternalMemoryDeclared","GasInstrumentation","StackHeightInstrumentation","Instantiate","Memory"],"props":{}},"ProhibitedInView":{"name":"ProhibitedInView","subtypes":[],"props":{"method_name":""}},"ReadError":{"name":"ReadError","subtypes":[],"props":{}},"ReturnedValueLengthExceeded":{"name":"ReturnedValueLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"Serialization":{"name":"Serialization","subtypes":[],"props":{}},"SerializationError":{"name":"SerializationError","subtypes":[],"props":{"hash":""}},"StackHeightInstrumentation":{"name":"StackHeightInstrumentation","subtypes":[],"props":{}},"StackOverflow":{"name":"StackOverflow","subtypes":[],"props":{}},"TotalLogLengthExceeded":{"name":"TotalLogLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"Unreachable":{"name":"Unreachable","subtypes":[],"props":{}},"ValueLengthExceeded":{"name":"ValueLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"WasmTrap":{"name":"WasmTrap","subtypes":["Unreachable","IncorrectCallIndirectSignature","MemoryOutOfBounds","CallIndirectOOB","IllegalArithmetic","MisalignedAtomicAccess","BreakpointTrap","StackOverflow","GenericTrap"],"props":{}},"WasmUnknownError":{"name":"WasmUnknownError","subtypes":[],"props":{}},"WasmerCompileError":{"name":"WasmerCompileError","subtypes":[],"props":{"msg":""}},"WriteError":{"name":"WriteError","subtypes":[],"props":{}},"AccessKeyNotFound":{"name":"AccessKeyNotFound","subtypes":[],"props":{"account_id":"","public_key":""}},"AccountAlreadyExists":{"name":"AccountAlreadyExists","subtypes":[],"props":{"account_id":""}},"AccountDoesNotExist":{"name":"AccountDoesNotExist","subtypes":[],"props":{"account_id":""}},"ActionError":{"name":"ActionError","subtypes":["AccountAlreadyExists","AccountDoesNotExist","CreateAccountOnlyByRegistrar","CreateAccountNotAllowed","ActorNoPermission","DeleteKeyDoesNotExist","AddKeyAlreadyExists","DeleteAccountStaking","LackBalanceForState","TriesToUnstake","TriesToStake","InsufficientStake","FunctionCallError","NewReceiptValidationError","OnlyImplicitAccountCreationAllowed"],"props":{"index":""}},"ActionsValidationError":{"name":"ActionsValidationError","subtypes":["DeleteActionMustBeFinal","TotalPrepaidGasExceeded","TotalNumberOfActionsExceeded","AddKeyMethodNamesNumberOfBytesExceeded","AddKeyMethodNameLengthExceeded","IntegerOverflow","InvalidAccountId","ContractSizeExceeded","FunctionCallMethodNameLengthExceeded","FunctionCallArgumentsLengthExceeded","UnsuitableStakingKey","FunctionCallZeroAttachedGas"],"props":{}},"ActorNoPermission":{"name":"ActorNoPermission","subtypes":[],"props":{"account_id":"","actor_id":""}},"AddKeyAlreadyExists":{"name":"AddKeyAlreadyExists","subtypes":[],"props":{"account_id":"","public_key":""}},"AddKeyMethodNameLengthExceeded":{"name":"AddKeyMethodNameLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"AddKeyMethodNamesNumberOfBytesExceeded":{"name":"AddKeyMethodNamesNumberOfBytesExceeded","subtypes":[],"props":{"limit":"","total_number_of_bytes":""}},"BalanceMismatchError":{"name":"BalanceMismatchError","subtypes":[],"props":{"final_accounts_balance":"","final_postponed_receipts_balance":"","incoming_receipts_balance":"","incoming_validator_rewards":"","initial_accounts_balance":"","initial_postponed_receipts_balance":"","new_delayed_receipts_balance":"","other_burnt_amount":"","outgoing_receipts_balance":"","processed_delayed_receipts_balance":"","slashed_burnt_amount":"","tx_burnt_amount":""}},"CostOverflow":{"name":"CostOverflow","subtypes":[],"props":{}},"CreateAccountNotAllowed":{"name":"CreateAccountNotAllowed","subtypes":[],"props":{"account_id":"","predecessor_id":""}},"CreateAccountOnlyByRegistrar":{"name":"CreateAccountOnlyByRegistrar","subtypes":[],"props":{"account_id":"","predecessor_id":"","registrar_account_id":""}},"DeleteAccountStaking":{"name":"DeleteAccountStaking","subtypes":[],"props":{"account_id":""}},"DeleteActionMustBeFinal":{"name":"DeleteActionMustBeFinal","subtypes":[],"props":{}},"DeleteKeyDoesNotExist":{"name":"DeleteKeyDoesNotExist","subtypes":[],"props":{"account_id":"","public_key":""}},"DepositWithFunctionCall":{"name":"DepositWithFunctionCall","subtypes":[],"props":{}},"Expired":{"name":"Expired","subtypes":[],"props":{}},"FunctionCallArgumentsLengthExceeded":{"name":"FunctionCallArgumentsLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"FunctionCallMethodNameLengthExceeded":{"name":"FunctionCallMethodNameLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"FunctionCallZeroAttachedGas":{"name":"FunctionCallZeroAttachedGas","subtypes":[],"props":{}},"InsufficientStake":{"name":"InsufficientStake","subtypes":[],"props":{"account_id":"","minimum_stake":"","stake":""}},"InvalidAccessKeyError":{"name":"InvalidAccessKeyError","subtypes":["AccessKeyNotFound","ReceiverMismatch","MethodNameMismatch","RequiresFullAccess","NotEnoughAllowance","DepositWithFunctionCall"],"props":{}},"InvalidChain":{"name":"InvalidChain","subtypes":[],"props":{}},"InvalidDataReceiverId":{"name":"InvalidDataReceiverId","subtypes":[],"props":{"account_id":""}},"InvalidNonce":{"name":"InvalidNonce","subtypes":[],"props":{"ak_nonce":"","tx_nonce":""}},"InvalidPredecessorId":{"name":"InvalidPredecessorId","subtypes":[],"props":{"account_id":""}},"InvalidReceiverId":{"name":"InvalidReceiverId","subtypes":[],"props":{"account_id":""}},"InvalidSignature":{"name":"InvalidSignature","subtypes":[],"props":{}},"InvalidSignerId":{"name":"InvalidSignerId","subtypes":[],"props":{"account_id":""}},"InvalidTxError":{"name":"InvalidTxError","subtypes":["InvalidAccessKeyError","InvalidSignerId","SignerDoesNotExist","InvalidNonce","InvalidReceiverId","InvalidSignature","NotEnoughBalance","LackBalanceForState","CostOverflow","InvalidChain","Expired","ActionsValidation"],"props":{}},"LackBalanceForState":{"name":"LackBalanceForState","subtypes":[],"props":{"account_id":"","amount":""}},"MethodNameMismatch":{"name":"MethodNameMismatch","subtypes":[],"props":{"method_name":""}},"NotEnoughAllowance":{"name":"NotEnoughAllowance","subtypes":[],"props":{"account_id":"","allowance":"","cost":"","public_key":""}},"NotEnoughBalance":{"name":"NotEnoughBalance","subtypes":[],"props":{"balance":"","cost":"","signer_id":""}},"OnlyImplicitAccountCreationAllowed":{"name":"OnlyImplicitAccountCreationAllowed","subtypes":[],"props":{"account_id":""}},"ReceiptValidationError":{"name":"ReceiptValidationError","subtypes":["InvalidPredecessorId","InvalidReceiverId","InvalidSignerId","InvalidDataReceiverId","ReturnedValueLengthExceeded","NumberInputDataDependenciesExceeded","ActionsValidation"],"props":{}},"ReceiverMismatch":{"name":"ReceiverMismatch","subtypes":[],"props":{"ak_receiver":"","tx_receiver":""}},"RequiresFullAccess":{"name":"RequiresFullAccess","subtypes":[],"props":{}},"SignerDoesNotExist":{"name":"SignerDoesNotExist","subtypes":[],"props":{"signer_id":""}},"TotalNumberOfActionsExceeded":{"name":"TotalNumberOfActionsExceeded","subtypes":[],"props":{"limit":"","total_number_of_actions":""}},"TotalPrepaidGasExceeded":{"name":"TotalPrepaidGasExceeded","subtypes":[],"props":{"limit":"","total_prepaid_gas":""}},"TriesToStake":{"name":"TriesToStake","subtypes":[],"props":{"account_id":"","balance":"","locked":"","stake":""}},"TriesToUnstake":{"name":"TriesToUnstake","subtypes":[],"props":{"account_id":""}},"TxExecutionError":{"name":"TxExecutionError","subtypes":["ActionError","InvalidTxError"],"props":{}},"UnsuitableStakingKey":{"name":"UnsuitableStakingKey","subtypes":[],"props":{"public_key":""}},"Closed":{"name":"Closed","subtypes":[],"props":{}},"InternalError":{"name":"InternalError","subtypes":[],"props":{}},"ServerError":{"name":"ServerError","subtypes":["TxExecutionError","Timeout","Closed","InternalError"],"props":{}},"Timeout":{"name":"Timeout","subtypes":[],"props":{}}}}')
        },
        3704: function(e) {
            e.exports = JSON.parse('{"GasLimitExceeded":"Exceeded the maximum amount of gas allowed to burn per contract","MethodEmptyName":"Method name is empty","WasmerCompileError":"Wasmer compilation error: {{msg}}","GuestPanic":"Smart contract panicked: {{panic_msg}}","Memory":"Error creating Wasm memory","GasExceeded":"Exceeded the prepaid gas","MethodUTF8Error":"Method name is not valid UTF8 string","BadUTF16":"String encoding is bad UTF-16 sequence","WasmTrap":"WebAssembly trap: {{msg}}","GasInstrumentation":"Gas instrumentation failed or contract has denied instructions.","InvalidPromiseIndex":"{{promise_idx}} does not correspond to existing promises","InvalidPromiseResultIndex":"Accessed invalid promise result index: {{result_idx}}","Deserialization":"Error happened while deserializing the module","MethodNotFound":"Contract method is not found","InvalidRegisterId":"Accessed invalid register id: {{register_id}}","InvalidReceiptIndex":"VM Logic returned an invalid receipt index: {{receipt_index}}","EmptyMethodName":"Method name is empty in contract call","CannotReturnJointPromise":"Returning joint promise is currently prohibited","StackHeightInstrumentation":"Stack instrumentation failed","CodeDoesNotExist":"Cannot find contract code for account {{account_id}}","MethodInvalidSignature":"Invalid method signature","IntegerOverflow":"Integer overflow happened during contract execution","MemoryAccessViolation":"MemoryAccessViolation","InvalidIteratorIndex":"Iterator index {{iterator_index}} does not exist","IteratorWasInvalidated":"Iterator {{iterator_index}} was invalidated after its creation by performing a mutable operation on trie","InvalidAccountId":"VM Logic returned an invalid account id","Serialization":"Error happened while serializing the module","CannotAppendActionToJointPromise":"Actions can only be appended to non-joint promise.","InternalMemoryDeclared":"Internal memory declaration has been found in the module","Instantiate":"Error happened during instantiation","ProhibitedInView":"{{method_name}} is not allowed in view calls","InvalidMethodName":"VM Logic returned an invalid method name","BadUTF8":"String encoding is bad UTF-8 sequence","BalanceExceeded":"Exceeded the account balance","LinkError":"Wasm contract link error: {{msg}}","InvalidPublicKey":"VM Logic provided an invalid public key","ActorNoPermission":"Actor {{actor_id}} doesn\'t have permission to account {{account_id}} to complete the action","LackBalanceForState":"The account {{account_id}} wouldn\'t have enough balance to cover storage, required to have {{amount}} yoctoNEAR more","ReceiverMismatch":"Wrong AccessKey used for transaction: transaction is sent to receiver_id={{tx_receiver}}, but is signed with function call access key that restricted to only use with receiver_id={{ak_receiver}}. Either change receiver_id in your transaction or switch to use a FullAccessKey.","CostOverflow":"Transaction gas or balance cost is too high","InvalidSignature":"Transaction is not signed with the given public key","AccessKeyNotFound":"Signer \\"{{account_id}}\\" doesn\'t have access key with the given public_key {{public_key}}","NotEnoughBalance":"Sender {{signer_id}} does not have enough balance {{#formatNear}}{{balance}}{{/formatNear}} for operation costing {{#formatNear}}{{cost}}{{/formatNear}}","NotEnoughAllowance":"Access Key {account_id}:{public_key} does not have enough balance {{#formatNear}}{{allowance}}{{/formatNear}} for transaction costing {{#formatNear}}{{cost}}{{/formatNear}}","Expired":"Transaction has expired","DeleteAccountStaking":"Account {{account_id}} is staking and can not be deleted","SignerDoesNotExist":"Signer {{signer_id}} does not exist","TriesToStake":"Account {{account_id}} tried to stake {{#formatNear}}{{stake}}{{/formatNear}}, but has staked {{#formatNear}}{{locked}}{{/formatNear}} and only has {{#formatNear}}{{balance}}{{/formatNear}}","AddKeyAlreadyExists":"The public key {{public_key}} is already used for an existing access key","InvalidSigner":"Invalid signer account ID {{signer_id}} according to requirements","CreateAccountNotAllowed":"The new account_id {{account_id}} can\'t be created by {{predecessor_id}}","RequiresFullAccess":"The transaction contains more then one action, but it was signed with an access key which allows transaction to apply only one specific action. To apply more then one actions TX must be signed with a full access key","TriesToUnstake":"Account {{account_id}} is not yet staked, but tried to unstake","InvalidNonce":"Transaction nonce {{tx_nonce}} must be larger than nonce of the used access key {{ak_nonce}}","AccountAlreadyExists":"Can\'t create a new account {{account_id}}, because it already exists","InvalidChain":"Transaction parent block hash doesn\'t belong to the current chain","AccountDoesNotExist":"Can\'t complete the action because account {{account_id}} doesn\'t exist","MethodNameMismatch":"Transaction method name {{method_name}} isn\'t allowed by the access key","DeleteAccountHasRent":"Account {{account_id}} can\'t be deleted. It has {{#formatNear}}{{balance}}{{/formatNear}}, which is enough to cover the rent","DeleteAccountHasEnoughBalance":"Account {{account_id}} can\'t be deleted. It has {{#formatNear}}{{balance}}{{/formatNear}}, which is enough to cover it\'s storage","InvalidReceiver":"Invalid receiver account ID {{receiver_id}} according to requirements","DeleteKeyDoesNotExist":"Account {{account_id}} tries to remove an access key that doesn\'t exist","Timeout":"Timeout exceeded","Closed":"Connection closed"}')
        },
        3705: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.diffEpochValidators = t.findSeatPrice = void 0;
            const i = r(n(348)),
                o = r(n(414));
            t.findSeatPrice = function(e, t, n, r) {
                if (r && r < 49) return function(e, t) {
                    const n = e.map(e => new i.default(e.stake, 10)).sort((e, t) => e.cmp(t)),
                        r = new i.default(t),
                        o = n.reduce((e, t) => e.add(t));
                    if (o.lt(r)) throw new Error("Stakes are below seats");
                    let s = new i.default(1),
                        a = o.add(new i.default(1));
                    for (; !s.eq(a.sub(new i.default(1)));) {
                        const e = s.add(a).div(new i.default(2));
                        let t = !1,
                            o = new i.default(0);
                        for (let i = 0; i < n.length; ++i)
                            if (o = o.add(n[i].div(e)), o.gte(r)) {
                                s = e, t = !0;
                                break
                            } t || (a = e)
                    }
                    return s
                }(e, t);
                if (!n) {
                    o.default("findSeatPrice(validators, maxNumberOfSeats)")("`use `findSeatPrice(validators, maxNumberOfSeats, minimumStakeRatio)` instead"), n = [1, 6250]
                }
                return function(e, t, n) {
                    if (2 != n.length) throw Error("minimumStakeRatio should have 2 elements");
                    const r = e.map(e => new i.default(e.stake, 10)).sort((e, t) => e.cmp(t)),
                        o = r.reduce((e, t) => e.add(t));
                    return e.length < t ? o.mul(new i.default(n[0])).div(new i.default(n[1])) : r[0].add(new i.default(1))
                }(e, t, n)
            }, t.diffEpochValidators = function(e, t) {
                const n = new Map;
                e.forEach(e => n.set(e.account_id, e));
                const r = new Set(t.map(e => e.account_id));
                return {
                    newValidators: t.filter(e => !n.has(e.account_id)),
                    removedValidators: e.filter(e => !r.has(e.account_id)),
                    changedValidators: t.filter(e => n.has(e.account_id) && n.get(e.account_id).stake != e.stake).map(e => ({
                        current: n.get(e.account_id),
                        next: e
                    }))
                }
            }
        },
        3706: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DEFAULT_FUNCTION_CALL_GAS = void 0;
            const i = r(n(348));
            t.DEFAULT_FUNCTION_CALL_GAS = new i.default("30000000000000")
        },
        3707: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Account2FA = t.AccountMultisig = t.MULTISIG_CONFIRM_METHODS = t.MULTISIG_CHANGE_METHODS = t.MULTISIG_DEPOSIT = t.MULTISIG_GAS = t.MULTISIG_ALLOWANCE = t.MULTISIG_STORAGE_KEY = void 0;
            const i = r(n(348)),
                o = r(n(414)),
                s = n(632),
                a = n(1880),
                c = n(267),
                u = n(631),
                l = n(630);
            t.MULTISIG_STORAGE_KEY = "__multisigRequest", t.MULTISIG_ALLOWANCE = new i.default(a.parseNearAmount("1")), t.MULTISIG_GAS = new i.default("100000000000000"), t.MULTISIG_DEPOSIT = new i.default("0"), t.MULTISIG_CHANGE_METHODS = ["add_request", "add_request_and_confirm", "delete_request", "confirm"], t.MULTISIG_CONFIRM_METHODS = ["confirm"];
            const d = {
                [t.MULTISIG_STORAGE_KEY]: null
            };
            class AccountMultisig extends s.Account {
                constructor(e, t, n) {
                    super(e, t), this.storage = n.storage, this.onAddRequestResult = n.onAddRequestResult
                }
                async signAndSendTransactionWithAccount(e, t) {
                    return super.signAndSendTransaction({
                        receiverId: e,
                        actions: t
                    })
                }
                signAndSendTransaction(...e) {
                    return "string" == typeof e[0] ? this._signAndSendTransaction({
                        receiverId: e[0],
                        actions: e[1]
                    }) : this._signAndSendTransaction(e[0])
                }
                async _signAndSendTransaction({
                    receiverId: e,
                    actions: n
                }) {
                    const {
                        accountId: r
                    } = this, i = Buffer.from(JSON.stringify({
                        request: {
                            receiver_id: e,
                            actions: p(n, r, e)
                        }
                    }));
                    let o;
                    try {
                        o = await super.signAndSendTransaction({
                            receiverId: r,
                            actions: [u.functionCall("add_request_and_confirm", i, t.MULTISIG_GAS, t.MULTISIG_DEPOSIT)]
                        })
                    } catch (t) {
                        if (t.toString().includes("Account has too many active requests. Confirm or delete some")) return await this.deleteUnconfirmedRequests(), await this.signAndSendTransaction(e, n);
                        throw t
                    }
                    if (!o.status) throw new Error("Request failed");
                    const s = {
                        ...o.status
                    };
                    if (!s.SuccessValue || "string" != typeof s.SuccessValue) throw new Error("Request failed");
                    return this.setRequest({
                        accountId: r,
                        actions: n,
                        requestId: parseInt(Buffer.from(s.SuccessValue, "base64").toString("ascii"), 10)
                    }), this.onAddRequestResult && await this.onAddRequestResult(o), this.deleteUnconfirmedRequests(), o
                }
                async deleteUnconfirmedRequests() {
                    const e = await this.getRequestIds(),
                        {
                            requestId: n
                        } = this.getRequest();
                    for (const r of e)
                        if (r != n) try {
                            await super.signAndSendTransaction({
                                receiverId: this.accountId,
                                actions: [u.functionCall("delete_request", {
                                    request_id: r
                                }, t.MULTISIG_GAS, t.MULTISIG_DEPOSIT)]
                            })
                        } catch (e) {
                            console.warn("Attempt to delete an earlier request before 15 minutes failed. Will try again.")
                        }
                }
                async getRequestIds() {
                    return this.viewFunction(this.accountId, "list_request_ids")
                }
                getRequest() {
                    return this.storage ? JSON.parse(this.storage.getItem(t.MULTISIG_STORAGE_KEY) || "{}") : d[t.MULTISIG_STORAGE_KEY]
                }
                setRequest(e) {
                    if (this.storage) return this.storage.setItem(t.MULTISIG_STORAGE_KEY, JSON.stringify(e));
                    d[t.MULTISIG_STORAGE_KEY] = e
                }
            }
            t.AccountMultisig = AccountMultisig;
            t.Account2FA = class Account2FA extends AccountMultisig {
                constructor(e, t, n) {
                    super(e, t, n), this.helperUrl = "https://helper.testnet.near.org", this.helperUrl = n.helperUrl || this.helperUrl, this.storage = n.storage, this.sendCode = n.sendCode || this.sendCodeDefault, this.getCode = n.getCode || this.getCodeDefault, this.verifyCode = n.verifyCode || this.verifyCodeDefault, this.onConfirmResult = n.onConfirmResult
                }
                async signAndSendTransaction(...e) {
                    if ("string" == typeof e[0]) {
                        return o.default("Account.signAndSendTransaction(receiverId, actions")("use `Account2FA.signAndSendTransaction(SignAndSendTransactionOptions)` instead"), this.__signAndSendTransaction({
                            receiverId: e[0],
                            actions: e[1]
                        })
                    }
                    return this.__signAndSendTransaction(e[0])
                }
                async __signAndSendTransaction({
                    receiverId: e,
                    actions: t
                }) {
                    await super.signAndSendTransaction({
                        receiverId: e,
                        actions: t
                    }), await this.sendCode();
                    const n = await this.promptAndVerify();
                    return this.onConfirmResult && await this.onConfirmResult(n), n
                }
                async deployMultisig(e) {
                    const {
                        accountId: n
                    } = this, r = (await this.getRecoveryMethods()).data.filter(({
                        kind: e,
                        publicKey: t
                    }) => ("phrase" === e || "ledger" === e) && null !== t).map(e => e.publicKey), i = (await this.getAccessKeys()).filter(({
                        public_key: e,
                        access_key: {
                            permission: t
                        }
                    }) => "FullAccess" === t && !r.includes(e)).map(e => e.public_key).map(h), o = h((await this.postSignedJson("/2fa/getAccessKey", {
                        accountId: n
                    })).publicKey), s = Buffer.from(JSON.stringify({
                        num_confirmations: 2
                    })), a = [...i.map(e => u.deleteKey(e)), ...i.map(e => u.addKey(e, u.functionCallAccessKey(n, t.MULTISIG_CHANGE_METHODS, null))), u.addKey(o, u.functionCallAccessKey(n, t.MULTISIG_CONFIRM_METHODS, null)), u.deployContract(e)];
                    return "11111111111111111111111111111111" === (await this.state()).code_hash && a.push(u.functionCall("new", s, t.MULTISIG_GAS, t.MULTISIG_DEPOSIT)), console.log("deploying multisig contract for", n), await super.signAndSendTransactionWithAccount(n, a)
                }
                async disable(e) {
                    const {
                        accountId: t
                    } = this, n = (await this.getAccessKeys()).filter(({
                        access_key: e
                    }) => "FullAccess" !== e.permission).filter(({
                        access_key: e
                    }) => {
                        const n = e.permission.FunctionCall;
                        return n.receiver_id === t && 4 === n.method_names.length && n.method_names.includes("add_request_and_confirm")
                    }), r = c.PublicKey.from((await this.postSignedJson("/2fa/getAccessKey", {
                        accountId: t
                    })).publicKey), i = [u.deleteKey(r), ...n.map(({
                        public_key: e
                    }) => u.deleteKey(c.PublicKey.from(e))), ...n.map(({
                        public_key: e
                    }) => u.addKey(c.PublicKey.from(e), null)), u.deployContract(e)];
                    return console.log("disabling 2fa for", t), await this.signAndSendTransaction({
                        receiverId: t,
                        actions: i
                    })
                }
                async sendCodeDefault() {
                    const {
                        accountId: e
                    } = this, {
                        requestId: t
                    } = this.getRequest(), n = await this.get2faMethod();
                    return await this.postSignedJson("/2fa/send", {
                        accountId: e,
                        method: n,
                        requestId: t
                    }), t
                }
                async getCodeDefault(e) {
                    throw new Error('There is no getCode callback provided. Please provide your own in AccountMultisig constructor options. It has a parameter method where method.kind is "email" or "phone".')
                }
                async promptAndVerify() {
                    const e = await this.get2faMethod(),
                        t = await this.getCode(e);
                    try {
                        return await this.verifyCode(t)
                    } catch (e) {
                        if (console.warn("Error validating security code:", e), e.toString().includes("invalid 2fa code provided") || e.toString().includes("2fa code not valid")) return await this.promptAndVerify();
                        throw e
                    }
                }
                async verifyCodeDefault(e) {
                    const {
                        accountId: t
                    } = this, n = this.getRequest();
                    if (!n) throw new Error("no request pending");
                    const {
                        requestId: r
                    } = n;
                    return await this.postSignedJson("/2fa/verify", {
                        accountId: t,
                        securityCode: e,
                        requestId: r
                    })
                }
                async getRecoveryMethods() {
                    const {
                        accountId: e
                    } = this;
                    return {
                        accountId: e,
                        data: await this.postSignedJson("/account/recoveryMethods", {
                            accountId: e
                        })
                    }
                }
                async get2faMethod() {
                    let {
                        data: e
                    } = await this.getRecoveryMethods();
                    if (e && e.length && (e = e.find(e => 0 === e.kind.indexOf("2fa-"))), !e) return null;
                    const {
                        kind: t,
                        detail: n
                    } = e;
                    return {
                        kind: t,
                        detail: n
                    }
                }
                async signatureFor() {
                    const {
                        accountId: e
                    } = this, t = (await this.connection.provider.block({
                        finality: "final"
                    })).header.height.toString(), n = await this.connection.signer.signMessage(Buffer.from(t), e, this.connection.networkId);
                    return {
                        blockNumber: t,
                        blockNumberSignature: Buffer.from(n.signature).toString("base64")
                    }
                }
                async postSignedJson(e, t) {
                    return await l.fetchJson(this.helperUrl + e, JSON.stringify({
                        ...t,
                        ...await this.signatureFor()
                    }))
                }
            };
            const h = e => c.PublicKey.from(e),
                p = (e, n, r) => e.map(e => {
                    const i = e.enum,
                        {
                            gas: o,
                            publicKey: s,
                            methodName: a,
                            args: c,
                            deposit: u,
                            accessKey: l,
                            code: d
                        } = e[i],
                        h = {
                            type: i[0].toUpperCase() + i.substr(1),
                            gas: o && o.toString() || void 0,
                            public_key: s && (p = s, p.toString().replace("ed25519:", "")) || void 0,
                            method_name: a,
                            args: c && Buffer.from(c).toString("base64") || void 0,
                            code: d && Buffer.from(d).toString("base64") || void 0,
                            amount: u && u.toString() || void 0,
                            deposit: u && u.toString() || "0",
                            permission: void 0
                        };
                    var p;
                    if (l && (r === n && "fullAccess" !== l.permission.enum && (h.permission = {
                            receiver_id: n,
                            allowance: t.MULTISIG_ALLOWANCE.toString(),
                            method_names: t.MULTISIG_CHANGE_METHODS
                        }), "functionCall" === l.permission.enum)) {
                        const {
                            receiverId: e,
                            methodNames: t,
                            allowance: n
                        } = l.permission.functionCall;
                        h.permission = {
                            receiver_id: e,
                            allowance: n && n.toString() || void 0,
                            method_names: t
                        }
                    }
                    return h
                })
        },
        3708: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConnectedWalletAccount = t.WalletAccount = t.WalletConnection = void 0;
            const i = r(n(414)),
                o = n(632),
                s = n(631),
                a = n(1879),
                c = n(291),
                u = n(291);
            class WalletConnection {
                constructor(e, t) {
                    this._near = e;
                    const n = t + "_wallet_auth_key",
                        r = JSON.parse(window.localStorage.getItem(n));
                    this._networkId = e.config.networkId, this._walletBaseUrl = e.config.walletUrl, t = t || e.config.contractName || "default", this._keyStore = e.connection.signer.keyStore, this._authData = r || {
                        allKeys: []
                    }, this._authDataKey = n, this.isSignedIn() || this._completeSignInWithAccessKey()
                }
                isSignedIn() {
                    return !!this._authData.accountId
                }
                getAccountId() {
                    return this._authData.accountId || ""
                }
                async requestSignIn(e = {}, t, n, r) {
                    let o;
                    if ("string" == typeof e) {
                        i.default("requestSignIn(contractId, title)")("`title` ignored; use `requestSignIn({ contractId, methodNames, successUrl, failureUrl })` instead"), o = {
                            contractId: e,
                            successUrl: n,
                            failureUrl: r
                        }
                    } else o = e;
                    const s = new URL(window.location.href),
                        c = new URL(this._walletBaseUrl + "/login/");
                    if (c.searchParams.set("success_url", o.successUrl || s.href), c.searchParams.set("failure_url", o.failureUrl || s.href), o.contractId) {
                        const e = await this._near.account(o.contractId);
                        await e.state(), c.searchParams.set("contract_id", o.contractId);
                        const t = a.KeyPair.fromRandom("ed25519");
                        c.searchParams.set("public_key", t.getPublicKey().toString()), await this._keyStore.setKey(this._networkId, "pending_key" + t.getPublicKey(), t)
                    }
                    o.methodNames && o.methodNames.forEach(e => {
                        c.searchParams.append("methodNames", e)
                    }), window.location.assign(c.toString())
                }
                async requestSignTransactions(...e) {
                    if (Array.isArray(e[0])) {
                        return i.default("WalletConnection.requestSignTransactions(transactions, callbackUrl, meta)")("use `WalletConnection.requestSignTransactions(RequestSignTransactionsOptions)` instead"), this._requestSignTransactions({
                            transactions: e[0],
                            callbackUrl: e[1],
                            meta: e[2]
                        })
                    }
                    return this._requestSignTransactions(e[0])
                }
                async _requestSignTransactions({
                    transactions: e,
                    meta: t,
                    callbackUrl: n
                }) {
                    const r = new URL(window.location.href),
                        i = new URL("sign", this._walletBaseUrl);
                    i.searchParams.set("transactions", e.map(e => u.serialize(s.SCHEMA, e)).map(e => Buffer.from(e).toString("base64")).join(",")), i.searchParams.set("callbackUrl", n || r.href), t && i.searchParams.set("meta", t), window.location.assign(i.toString())
                }
                async _completeSignInWithAccessKey() {
                    const e = new URL(window.location.href),
                        t = e.searchParams.get("public_key") || "",
                        n = (e.searchParams.get("all_keys") || "").split(","),
                        r = e.searchParams.get("account_id") || "";
                    r && (this._authData = {
                        accountId: r,
                        allKeys: n
                    }, window.localStorage.setItem(this._authDataKey, JSON.stringify(this._authData)), t && await this._moveKeyFromTempToPermanent(r, t)), e.searchParams.delete("public_key"), e.searchParams.delete("all_keys"), e.searchParams.delete("account_id"), e.searchParams.delete("meta"), e.searchParams.delete("transactionHashes"), window.history.replaceState({}, document.title, e.toString())
                }
                async _moveKeyFromTempToPermanent(e, t) {
                    const n = await this._keyStore.getKey(this._networkId, "pending_key" + t);
                    await this._keyStore.setKey(this._networkId, e, n), await this._keyStore.removeKey(this._networkId, "pending_key" + t)
                }
                signOut() {
                    this._authData = {}, window.localStorage.removeItem(this._authDataKey)
                }
                account() {
                    return this._connectedAccount || (this._connectedAccount = new ConnectedWalletAccount(this, this._near.connection, this._authData.accountId)), this._connectedAccount
                }
            }
            t.WalletConnection = WalletConnection, t.WalletAccount = WalletConnection;
            class ConnectedWalletAccount extends o.Account {
                constructor(e, t, n) {
                    super(t, n), this.walletConnection = e
                }
                signAndSendTransaction(...e) {
                    return "string" == typeof e[0] ? this._signAndSendTransaction({
                        receiverId: e[0],
                        actions: e[1]
                    }) : this._signAndSendTransaction(e[0])
                }
                async _signAndSendTransaction({
                    receiverId: e,
                    actions: t,
                    walletMeta: n,
                    walletCallbackUrl: r = window.location.href
                }) {
                    const i = await this.connection.signer.getPublicKey(this.accountId, this.connection.networkId);
                    let o = await this.accessKeyForTransaction(e, t, i);
                    if (!o) throw new Error("Cannot find matching key for transaction sent to " + e);
                    if (i && i.toString() === o.public_key) try {
                        return await super.signAndSendTransaction({
                            receiverId: e,
                            actions: t
                        })
                    } catch (n) {
                        if ("NotEnoughAllowance" !== n.type) throw n;
                        o = await this.accessKeyForTransaction(e, t)
                    }
                    const u = await this.connection.provider.block({
                            finality: "final"
                        }),
                        l = c.baseDecode(u.header.hash),
                        d = a.PublicKey.from(o.public_key),
                        h = o.access_key.nonce + 1,
                        p = s.createTransaction(this.accountId, d, e, h, t, l);
                    return await this.walletConnection.requestSignTransactions({
                        transactions: [p],
                        meta: n,
                        callbackUrl: r
                    }), new Promise((e, t) => {
                        setTimeout(() => {
                            t(new Error("Failed to redirect to sign transaction"))
                        }, 1e3)
                    })
                }
                async accessKeyMatchesTransaction(e, t, n) {
                    const {
                        access_key: {
                            permission: r
                        }
                    } = e;
                    if ("FullAccess" === r) return !0;
                    if (r.FunctionCall) {
                        const {
                            receiver_id: e,
                            method_names: i
                        } = r.FunctionCall;
                        if (e === this.accountId && i.includes("add_request_and_confirm")) return !0;
                        if (e === t) {
                            if (1 !== n.length) return !1;
                            const [{
                                functionCall: e
                            }] = n;
                            return e && (!e.deposit || "0" === e.deposit.toString()) && (0 === i.length || i.includes(e.methodName))
                        }
                    }
                    return !1
                }
                async accessKeyForTransaction(e, t, n) {
                    const r = await this.getAccessKeys();
                    if (n) {
                        const i = r.find(e => e.public_key.toString() === n.toString());
                        if (i && await this.accessKeyMatchesTransaction(i, e, t)) return i
                    }
                    const i = this.walletConnection._authData.allKeys;
                    for (const n of r)
                        if (-1 !== i.indexOf(n.public_key) && await this.accessKeyMatchesTransaction(n, e, t)) return n;
                    return null
                }
            }
            t.ConnectedWalletAccount = ConnectedWalletAccount
        },
        3709: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.connect = void 0;
            const r = n(1885);
            t.connect = async function(e) {
                return new r.Near(e)
            }
        },
        415: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logWarning = t.ErrorContext = t.TypedError = t.ArgumentTypeError = t.PositionalArgsError = void 0;
            class PositionalArgsError extends Error {
                constructor() {
                    super("Contract method calls expect named arguments wrapped in object, e.g. { argName1: argValue1, argName2: argValue2 }")
                }
            }
            t.PositionalArgsError = PositionalArgsError;
            class ArgumentTypeError extends Error {
                constructor(e, t, n) {
                    super(`Expected ${t} for '${e}' argument, but got '${JSON.stringify(n)}'`)
                }
            }
            t.ArgumentTypeError = ArgumentTypeError;
            class TypedError extends Error {
                constructor(e, t, n) {
                    super(e), this.type = t || "UntypedError", this.context = n
                }
            }
            t.TypedError = TypedError;
            t.ErrorContext = class ErrorContext {
                constructor(e) {
                    this.transactionHash = e
                }
            }, t.logWarning = function(...e) {
                process.env.NEAR_NO_LOGS || console.warn(...e)
            }
        },
        508: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ErrorContext = t.TypedError = t.getTransactionLastResult = t.FinalExecutionStatusBasic = t.JsonRpcProvider = t.Provider = void 0;
            const r = n(1878);
            Object.defineProperty(t, "Provider", {
                enumerable: !0,
                get: function() {
                    return r.Provider
                }
            }), Object.defineProperty(t, "getTransactionLastResult", {
                enumerable: !0,
                get: function() {
                    return r.getTransactionLastResult
                }
            }), Object.defineProperty(t, "FinalExecutionStatusBasic", {
                enumerable: !0,
                get: function() {
                    return r.FinalExecutionStatusBasic
                }
            });
            const i = n(3695);
            Object.defineProperty(t, "JsonRpcProvider", {
                enumerable: !0,
                get: function() {
                    return i.JsonRpcProvider
                }
            }), Object.defineProperty(t, "TypedError", {
                enumerable: !0,
                get: function() {
                    return i.TypedError
                }
            }), Object.defineProperty(t, "ErrorContext", {
                enumerable: !0,
                get: function() {
                    return i.ErrorContext
                }
            })
        },
        629: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KeyStore = void 0;
            t.KeyStore = class KeyStore {}
        },
        630: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fetchJson = void 0;
            const i = r(n(3696)),
                o = r(n(1080)),
                s = n(508),
                a = n(415);
            t.fetchJson = async function(e, t) {
                let n = {
                    url: null
                };
                "string" == typeof e ? n.url = e : n = e;
                const r = await o.default(1e3, 10, 1.5, async () => {
                    try {
                        const e = await fetch(n.url, {
                            method: t ? "POST" : "GET",
                            body: t || void 0,
                            headers: {
                                ...n.headers,
                                "Content-Type": "application/json"
                            }
                        });
                        if (!e.ok) {
                            if (503 === e.status) return a.logWarning(`Retrying HTTP request for ${n.url} as it's not available now`), null;
                            throw i.default(e.status, await e.text())
                        }
                        return e
                    } catch (e) {
                        if (e.toString().includes("FetchError") || e.toString().includes("Failed to fetch")) return a.logWarning(`Retrying HTTP request for ${n.url} because of error: ${e}`), null;
                        throw e
                    }
                });
                if (!r) throw new s.TypedError(`Exceeded 10 attempts for ${n.url}.`, "RetriesExceeded");
                return await r.json()
            }
        },
        631: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.signTransaction = t.createTransaction = t.SCHEMA = t.Action = t.SignedTransaction = t.Transaction = t.Signature = t.deleteAccount = t.deleteKey = t.addKey = t.stake = t.transfer = t.functionCall = t.stringifyJsonOrBytes = t.deployContract = t.createAccount = t.DeleteAccount = t.DeleteKey = t.AddKey = t.Stake = t.Transfer = t.FunctionCall = t.DeployContract = t.CreateAccount = t.IAction = t.functionCallAccessKey = t.fullAccessKey = t.AccessKey = t.AccessKeyPermission = t.FullAccessPermission = t.FunctionCallPermission = void 0;
            const i = r(n(1082)),
                o = n(1079),
                s = n(291),
                a = n(267);
            class FunctionCallPermission extends o.Assignable {}
            t.FunctionCallPermission = FunctionCallPermission;
            class FullAccessPermission extends o.Assignable {}
            t.FullAccessPermission = FullAccessPermission;
            class AccessKeyPermission extends o.Enum {}
            t.AccessKeyPermission = AccessKeyPermission;
            class AccessKey extends o.Assignable {}
            t.AccessKey = AccessKey, t.fullAccessKey = function() {
                return new AccessKey({
                    nonce: 0,
                    permission: new AccessKeyPermission({
                        fullAccess: new FullAccessPermission({})
                    })
                })
            }, t.functionCallAccessKey = function(e, t, n) {
                return new AccessKey({
                    nonce: 0,
                    permission: new AccessKeyPermission({
                        functionCall: new FunctionCallPermission({
                            receiverId: e,
                            allowance: n,
                            methodNames: t
                        })
                    })
                })
            };
            class IAction extends o.Assignable {}
            t.IAction = IAction;
            class CreateAccount extends IAction {}
            t.CreateAccount = CreateAccount;
            class DeployContract extends IAction {}
            t.DeployContract = DeployContract;
            class FunctionCall extends IAction {}
            t.FunctionCall = FunctionCall;
            class Transfer extends IAction {}
            t.Transfer = Transfer;
            class Stake extends IAction {}
            t.Stake = Stake;
            class AddKey extends IAction {}
            t.AddKey = AddKey;
            class DeleteKey extends IAction {}
            t.DeleteKey = DeleteKey;
            class DeleteAccount extends IAction {}

            function c(e) {
                return void 0 !== e.byteLength && e.byteLength === e.length ? e : Buffer.from(JSON.stringify(e))
            }
            t.DeleteAccount = DeleteAccount, t.createAccount = function() {
                return new Action({
                    createAccount: new CreateAccount({})
                })
            }, t.deployContract = function(e) {
                return new Action({
                    deployContract: new DeployContract({
                        code: e
                    })
                })
            }, t.stringifyJsonOrBytes = c, t.functionCall = function(e, t, n, r, i = c) {
                return new Action({
                    functionCall: new FunctionCall({
                        methodName: e,
                        args: i(t),
                        gas: n,
                        deposit: r
                    })
                })
            }, t.transfer = function(e) {
                return new Action({
                    transfer: new Transfer({
                        deposit: e
                    })
                })
            }, t.stake = function(e, t) {
                return new Action({
                    stake: new Stake({
                        stake: e,
                        publicKey: t
                    })
                })
            }, t.addKey = function(e, t) {
                return new Action({
                    addKey: new AddKey({
                        publicKey: e,
                        accessKey: t
                    })
                })
            }, t.deleteKey = function(e) {
                return new Action({
                    deleteKey: new DeleteKey({
                        publicKey: e
                    })
                })
            }, t.deleteAccount = function(e) {
                return new Action({
                    deleteAccount: new DeleteAccount({
                        beneficiaryId: e
                    })
                })
            };
            class Signature extends o.Assignable {}
            t.Signature = Signature;
            class Transaction extends o.Assignable {
                encode() {
                    return s.serialize(t.SCHEMA, this)
                }
                static decode(e) {
                    return s.deserialize(t.SCHEMA, Transaction, e)
                }
            }
            t.Transaction = Transaction;
            class SignedTransaction extends o.Assignable {
                encode() {
                    return s.serialize(t.SCHEMA, this)
                }
                static decode(e) {
                    return s.deserialize(t.SCHEMA, SignedTransaction, e)
                }
            }
            t.SignedTransaction = SignedTransaction;
            class Action extends o.Enum {}

            function u(e, t, n, r, i, o) {
                return new Transaction({
                    signerId: e,
                    publicKey: t,
                    nonce: r,
                    receiverId: n,
                    actions: i,
                    blockHash: o
                })
            }
            async function l(e, n, r, o) {
                const a = s.serialize(t.SCHEMA, e),
                    c = new Uint8Array(i.default.sha256.array(a)),
                    u = await n.signMessage(a, r, o);
                return [c, new SignedTransaction({
                    transaction: e,
                    signature: new Signature({
                        keyType: e.publicKey.keyType,
                        data: u.signature
                    })
                })]
            }
            t.Action = Action, t.SCHEMA = new Map([
                [Signature, {
                    kind: "struct",
                    fields: [
                        ["keyType", "u8"],
                        ["data", [64]]
                    ]
                }],
                [SignedTransaction, {
                    kind: "struct",
                    fields: [
                        ["transaction", Transaction],
                        ["signature", Signature]
                    ]
                }],
                [Transaction, {
                    kind: "struct",
                    fields: [
                        ["signerId", "string"],
                        ["publicKey", a.PublicKey],
                        ["nonce", "u64"],
                        ["receiverId", "string"],
                        ["blockHash", [32]],
                        ["actions", [Action]]
                    ]
                }],
                [a.PublicKey, {
                    kind: "struct",
                    fields: [
                        ["keyType", "u8"],
                        ["data", [32]]
                    ]
                }],
                [AccessKey, {
                    kind: "struct",
                    fields: [
                        ["nonce", "u64"],
                        ["permission", AccessKeyPermission]
                    ]
                }],
                [AccessKeyPermission, {
                    kind: "enum",
                    field: "enum",
                    values: [
                        ["functionCall", FunctionCallPermission],
                        ["fullAccess", FullAccessPermission]
                    ]
                }],
                [FunctionCallPermission, {
                    kind: "struct",
                    fields: [
                        ["allowance", {
                            kind: "option",
                            type: "u128"
                        }],
                        ["receiverId", "string"],
                        ["methodNames", ["string"]]
                    ]
                }],
                [FullAccessPermission, {
                    kind: "struct",
                    fields: []
                }],
                [Action, {
                    kind: "enum",
                    field: "enum",
                    values: [
                        ["createAccount", CreateAccount],
                        ["deployContract", DeployContract],
                        ["functionCall", FunctionCall],
                        ["transfer", Transfer],
                        ["stake", Stake],
                        ["addKey", AddKey],
                        ["deleteKey", DeleteKey],
                        ["deleteAccount", DeleteAccount]
                    ]
                }],
                [CreateAccount, {
                    kind: "struct",
                    fields: []
                }],
                [DeployContract, {
                    kind: "struct",
                    fields: [
                        ["code", ["u8"]]
                    ]
                }],
                [FunctionCall, {
                    kind: "struct",
                    fields: [
                        ["methodName", "string"],
                        ["args", ["u8"]],
                        ["gas", "u64"],
                        ["deposit", "u128"]
                    ]
                }],
                [Transfer, {
                    kind: "struct",
                    fields: [
                        ["deposit", "u128"]
                    ]
                }],
                [Stake, {
                    kind: "struct",
                    fields: [
                        ["stake", "u128"],
                        ["publicKey", a.PublicKey]
                    ]
                }],
                [AddKey, {
                    kind: "struct",
                    fields: [
                        ["publicKey", a.PublicKey],
                        ["accessKey", AccessKey]
                    ]
                }],
                [DeleteKey, {
                    kind: "struct",
                    fields: [
                        ["publicKey", a.PublicKey]
                    ]
                }],
                [DeleteAccount, {
                    kind: "struct",
                    fields: [
                        ["beneficiaryId", "string"]
                    ]
                }]
            ]), t.createTransaction = u, t.signTransaction = async function(...e) {
                if (e[0].constructor === Transaction) {
                    const [t, n, r, i] = e;
                    return l(t, n, r, i)
                } {
                    const [t, n, r, i, o, s, a] = e;
                    return l(u(s, await o.getPublicKey(s, a), t, n, r, i), o, s, a)
                }
            }
        },
        632: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Account = void 0;
            const i = r(n(348)),
                o = r(n(414)),
                s = n(631),
                a = n(508),
                c = n(291),
                u = n(267),
                l = n(415),
                d = n(1081),
                h = n(3706),
                p = r(n(1080));

            function f(e) {
                return JSON.parse(Buffer.from(e).toString())
            }

            function m(e) {
                return Buffer.from(JSON.stringify(e))
            }
            class Account {
                constructor(e, t) {
                    this.accessKeyByPublicKeyCache = {}, this.connection = e, this.accountId = t
                }
                get ready() {
                    return o.default("Account.ready()")("not needed anymore, always ready"), Promise.resolve()
                }
                async fetchState() {
                    o.default("Account.fetchState()")("use `Account.state()` instead")
                }
                async state() {
                    return this.connection.provider.query({
                        request_type: "view_account",
                        account_id: this.accountId,
                        finality: "optimistic"
                    })
                }
                printLogsAndFailures(e, t) {
                    if (!process.env.NEAR_NO_LOGS)
                        for (const n of t) console.log(`Receipt${n.receiptIds.length>1?"s":""}: ${n.receiptIds.join(", ")}`), this.printLogs(e, n.logs, "\t"), n.failure && console.warn(`\tFailure [${e}]: ${n.failure}`)
                }
                printLogs(e, t, n = "") {
                    if (!process.env.NEAR_NO_LOGS)
                        for (const r of t) console.log(`${n}Log [${e}]: ${r}`)
                }
                async signTransaction(e, t) {
                    const n = await this.findAccessKey(e, t);
                    if (!n) throw new a.TypedError(`Can not sign transactions for account ${this.accountId} on network ${this.connection.networkId}, no matching key pair found in ${this.connection.signer}.`, "KeyNotFound");
                    const {
                        accessKey: r
                    } = n, i = (await this.connection.provider.block({
                        finality: "final"
                    })).header.hash, o = ++r.nonce;
                    return await s.signTransaction(e, o, t, c.baseDecode(i), this.connection.signer, this.accountId, this.connection.networkId)
                }
                signAndSendTransaction(...e) {
                    return "string" == typeof e[0] ? this.signAndSendTransactionV1(e[0], e[1]) : this.signAndSendTransactionV2(e[0])
                }
                signAndSendTransactionV1(e, t) {
                    return o.default("Account.signAndSendTransaction(receiverId, actions")("use `Account.signAndSendTransaction(SignAndSendTransactionOptions)` instead"), this.signAndSendTransactionV2({
                        receiverId: e,
                        actions: t
                    })
                }
                async signAndSendTransactionV2({
                    receiverId: e,
                    actions: t,
                    returnError: n
                }) {
                    let r, i;
                    const o = await p.default(500, 12, 1.5, async () => {
                        [r, i] = await this.signTransaction(e, t);
                        const n = i.transaction.publicKey;
                        try {
                            return await this.connection.provider.sendTransaction(i)
                        } catch (t) {
                            if ("InvalidNonce" === t.type) return l.logWarning(`Retrying transaction ${e}:${c.baseEncode(r)} with new nonce.`), delete this.accessKeyByPublicKeyCache[n.toString()], null;
                            if ("Expired" === t.type) return l.logWarning(`Retrying transaction ${e}:${c.baseEncode(r)} due to expired block hash`), null;
                            throw t.context = new a.ErrorContext(c.baseEncode(r)), t
                        }
                    });
                    if (!o) throw new a.TypedError("nonce retries exceeded for transaction. This usually means there are too many parallel requests with the same access key.", "RetriesExceeded");
                    const s = [o.transaction_outcome, ...o.receipts_outcome].reduce((e, t) => t.outcome.logs.length || "object" == typeof t.outcome.status && "object" == typeof t.outcome.status.Failure ? e.concat({
                        receiptIds: t.outcome.receipt_ids,
                        logs: t.outcome.logs,
                        failure: void 0 !== t.outcome.status.Failure ? d.parseRpcError(t.outcome.status.Failure) : null
                    }) : e, []);
                    if (this.printLogsAndFailures(i.transaction.receiverId, s), !n && "object" == typeof o.status && "object" == typeof o.status.Failure) throw o.status.Failure.error_message && o.status.Failure.error_type ? new a.TypedError(`Transaction ${o.transaction_outcome.id} failed. ${o.status.Failure.error_message}`, o.status.Failure.error_type) : d.parseResultError(o);
                    return o
                }
                async findAccessKey(e, t) {
                    const n = await this.connection.signer.getPublicKey(this.accountId, this.connection.networkId);
                    if (!n) return null;
                    const r = this.accessKeyByPublicKeyCache[n.toString()];
                    if (void 0 !== r) return {
                        publicKey: n,
                        accessKey: r
                    };
                    try {
                        const e = await this.connection.provider.query({
                            request_type: "view_access_key",
                            account_id: this.accountId,
                            public_key: n.toString(),
                            finality: "optimistic"
                        });
                        return this.accessKeyByPublicKeyCache[n.toString()] ? {
                            publicKey: n,
                            accessKey: this.accessKeyByPublicKeyCache[n.toString()]
                        } : (this.accessKeyByPublicKeyCache[n.toString()] = e, {
                            publicKey: n,
                            accessKey: e
                        })
                    } catch (e) {
                        if ("AccessKeyDoesNotExist" == e.type) return null;
                        throw e
                    }
                }
                async createAndDeployContract(e, t, n, r) {
                    const i = s.fullAccessKey();
                    await this.signAndSendTransaction({
                        receiverId: e,
                        actions: [s.createAccount(), s.transfer(r), s.addKey(u.PublicKey.from(t), i), s.deployContract(n)]
                    });
                    return new Account(this.connection, e)
                }
                async sendMoney(e, t) {
                    return this.signAndSendTransaction({
                        receiverId: e,
                        actions: [s.transfer(t)]
                    })
                }
                async createAccount(e, t, n) {
                    const r = s.fullAccessKey();
                    return this.signAndSendTransaction({
                        receiverId: e,
                        actions: [s.createAccount(), s.transfer(n), s.addKey(u.PublicKey.from(t), r)]
                    })
                }
                async deleteAccount(e) {
                    return this.signAndSendTransaction({
                        receiverId: this.accountId,
                        actions: [s.deleteAccount(e)]
                    })
                }
                async deployContract(e) {
                    return this.signAndSendTransaction({
                        receiverId: this.accountId,
                        actions: [s.deployContract(e)]
                    })
                }
                async functionCall(...e) {
                    return "string" == typeof e[0] ? this.functionCallV1(e[0], e[1], e[2], e[3], e[4]) : this.functionCallV2(e[0])
                }
                functionCallV1(e, t, n, r, i) {
                    return o.default("Account.functionCall(contractId, methodName, args, gas, amount)")("use `Account.functionCall(FunctionCallOptions)` instead"), n = n || {}, this.validateArgs(n), this.signAndSendTransaction({
                        receiverId: e,
                        actions: [s.functionCall(t, n, r || h.DEFAULT_FUNCTION_CALL_GAS, i)]
                    })
                }
                functionCallV2({
                    contractId: e,
                    methodName: t,
                    args: n = {},
                    gas: r = h.DEFAULT_FUNCTION_CALL_GAS,
                    attachedDeposit: i,
                    walletMeta: o,
                    walletCallbackUrl: a,
                    stringify: c
                }) {
                    this.validateArgs(n);
                    const u = void 0 === c ? s.stringifyJsonOrBytes : c;
                    return this.signAndSendTransaction({
                        receiverId: e,
                        actions: [s.functionCall(t, n, r, i, u)],
                        walletMeta: o,
                        walletCallbackUrl: a
                    })
                }
                async addKey(e, t, n, r) {
                    let i;
                    return n || (n = []), Array.isArray(n) || (n = [n]), i = t ? s.functionCallAccessKey(t, n, r) : s.fullAccessKey(), this.signAndSendTransaction({
                        receiverId: this.accountId,
                        actions: [s.addKey(u.PublicKey.from(e), i)]
                    })
                }
                async deleteKey(e) {
                    return this.signAndSendTransaction({
                        receiverId: this.accountId,
                        actions: [s.deleteKey(u.PublicKey.from(e))]
                    })
                }
                async stake(e, t) {
                    return this.signAndSendTransaction({
                        receiverId: this.accountId,
                        actions: [s.stake(t, u.PublicKey.from(e))]
                    })
                }
                validateArgs(e) {
                    if (!(void 0 !== e.byteLength && e.byteLength === e.length) && (Array.isArray(e) || "object" != typeof e)) throw new l.PositionalArgsError
                }
                async viewFunction(e, t, n = {}, {
                    parse: r = f,
                    stringify: i = m
                } = {}) {
                    this.validateArgs(n);
                    const o = i(n).toString("base64"),
                        s = await this.connection.provider.query({
                            request_type: "call_function",
                            account_id: e,
                            method_name: t,
                            args_base64: o,
                            finality: "optimistic"
                        });
                    return s.logs && this.printLogs(e, s.logs), s.result && s.result.length > 0 && r(Buffer.from(s.result))
                }
                async viewState(e, t = {
                    finality: "optimistic"
                }) {
                    const {
                        values: n
                    } = await this.connection.provider.query({
                        request_type: "view_state",
                        ...t,
                        account_id: this.accountId,
                        prefix_base64: Buffer.from(e).toString("base64")
                    });
                    return n.map(({
                        key: e,
                        value: t
                    }) => ({
                        key: Buffer.from(e, "base64"),
                        value: Buffer.from(t, "base64")
                    }))
                }
                async getAccessKeys() {
                    const e = await this.connection.provider.query({
                        request_type: "view_access_key_list",
                        account_id: this.accountId,
                        finality: "optimistic"
                    });
                    return Array.isArray(e) ? e : e.keys
                }
                async getAccountDetails() {
                    return {
                        authorizedApps: (await this.getAccessKeys()).filter(e => "FullAccess" !== e.access_key.permission).map(e => {
                            const t = e.access_key.permission;
                            return {
                                contractId: t.FunctionCall.receiver_id,
                                amount: t.FunctionCall.allowance,
                                publicKey: e.public_key
                            }
                        })
                    }
                }
                async getAccountBalance() {
                    const e = await this.connection.provider.experimental_protocolConfig({
                            finality: "final"
                        }),
                        t = await this.state(),
                        n = new i.default(e.runtime_config.storage_amount_per_byte),
                        r = new i.default(t.storage_usage).mul(n),
                        o = new i.default(t.locked),
                        s = new i.default(t.amount).add(o),
                        a = s.sub(i.default.max(o, r));
                    return {
                        total: s.toString(),
                        stateStaked: r.toString(),
                        staked: o.toString(),
                        available: a.toString()
                    }
                }
            }
            t.Account = Account
        }
    }
]);