(window.webpackJsonp = window.webpackJsonp || []).push([
    [152], {
        1541: function(e, t, r) {
            e.exports = function(e) {
                var t = {};

                function r(n) {
                    if (t[n]) return t[n].exports;
                    var a = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
                }
                return r.m = e, r.c = t, r.d = function(e, t, n) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }, r.r = function(e) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "", r(r.s = 40)
            }([function(e, t) {
                e.exports = r(2587)
            }, function(e, t) {
                e.exports = r(2590)
            }, function(e, t) {
                e.exports = r(2591)
            }, function(e, t) {
                e.exports = r(2593)
            }, function(e, t) {
                e.exports = r(2596)
            }, function(e, t) {
                e.exports = r(2606)
            }, function(e, t) {
                e.exports = r(2623)
            }, function(e, t) {
                e.exports = r(937)
            }, function(e, t) {
                e.exports = r(2652)
            }, function(e, t) {
                e.exports = r(1567)
            }, function(e, t) {
                e.exports = r(2655)
            }, function(e, t) {
                e.exports = r(2672)
            }, function(e, t) {
                e.exports = r(2673)
            }, function(e, t) {
                e.exports = r(85)
            }, function(e, t) {
                e.exports = r(2688)
            }, function(e, t) {
                e.exports = r(2708)
            }, function(e, t) {
                e.exports = r(2709)
            }, function(e, t) {
                e.exports = r(24)
            }, function(e, t) {
                e.exports = r(2712)
            }, function(e, t) {
                e.exports = r(2716)
            }, function(e, t) {
                e.exports = r(1)
            }, function(e, t) {
                e.exports = r(2717)
            }, function(e, t) {
                e.exports = r(1557)
            }, function(e, t) {
                e.exports = r(2721)
            }, function(e, t) {
                e.exports = r(1587)
            }, function(e, t) {
                e.exports = r(2722)
            }, function(e, t) {
                e.exports = r(2354)
            }, function(e, t) {
                e.exports = r(2725)
            }, function(e, t) {
                e.exports = r(982)
            }, function(e, t) {
                e.exports = r(2726)
            }, function(e, t) {
                e.exports = r(2731)
            }, function(e, t) {
                e.exports = r(281)
            }, function(e, t) {
                e.exports = r(467)
            }, function(e, t) {
                e.exports = r(2734)
            }, function(e, t) {
                e.exports = r(2735)
            }, function(e, t) {
                e.exports = r(2736)
            }, function(e, t) {
                e.exports = r(2737)
            }, function(e, t) {
                e.exports = r(2739)
            }, function(e, t) {
                e.exports = r(2740)
            }, function(e, t) {
                e.exports = r(2744)
            }, function(e, t, r) {
                "use strict";
                r.r(t);
                var n = {};
                r.d(n, "ADDR_VERSION", (function() {
                    return T
                })), r.d(n, "DEFAULT_SCRYPT", (function() {
                    return I
                })), r.d(n, "OEP_HEADER", (function() {
                    return B
                })), r.d(n, "OEP_FLAG", (function() {
                    return N
                })), r.d(n, "WEBVIEW_SCHEME", (function() {
                    return C
                })), r.d(n, "DEFAULT_ALGORITHM", (function() {
                    return D
                })), r.d(n, "DEFAULT_SM2_ID", (function() {
                    return O
                })), r.d(n, "TEST_NODE", (function() {
                    return H
                })), r.d(n, "MAIN_NODE", (function() {
                    return _
                })), r.d(n, "HTTP_REST_PORT", (function() {
                    return z
                })), r.d(n, "HTTP_WS_PORT", (function() {
                    return U
                })), r.d(n, "HTTP_JSON_PORT", (function() {
                    return L
                })), r.d(n, "REST_API", (function() {
                    return M
                })), r.d(n, "ONT_NETWORK", (function() {
                    return K
                })), r.d(n, "TEST_ONT_URL", (function() {
                    return V
                })), r.d(n, "MAIN_ONT_URL", (function() {
                    return G
                })), r.d(n, "TOKEN_TYPE", (function() {
                    return W
                })), r.d(n, "DEFAULT_GAS_LIMIT", (function() {
                    return J
                })), r.d(n, "NATIVE_INVOKE_NAME", (function() {
                    return F
                })), r.d(n, "TX_MAX_SIG_SIZE", (function() {
                    return q
                })), r.d(n, "ONT_BIP44_PATH", (function() {
                    return j
                })), r.d(n, "UNBOUND_GENERATION_AMOUNT", (function() {
                    return Y
                })), r.d(n, "UNBOUND_TIME_INTERVAL", (function() {
                    return Q
                })), r.d(n, "ONT_TOTAL_SUPPLY", (function() {
                    return X
                })), r.d(n, "GENESIS_BLOCK_TIMESTAMP", (function() {
                    return Z
                }));
                var a = {};
                r.d(a, "hexstring2ab", (function() {
                    return ye
                })), r.d(a, "ab2hexstring", (function() {
                    return pe
                })), r.d(a, "ab2str", (function() {
                    return ge
                })), r.d(a, "str2ab", (function() {
                    return me
                })), r.d(a, "str2hexstr", (function() {
                    return we
                })), r.d(a, "hexstr2str", (function() {
                    return Se
                })), r.d(a, "hex2VarBytes", (function() {
                    return Ae
                })), r.d(a, "str2VarBytes", (function() {
                    return ke
                })), r.d(a, "bool2VarByte", (function() {
                    return xe
                })), r.d(a, "hexXor", (function() {
                    return be
                })), r.d(a, "num2hexstring", (function() {
                    return Ee
                })), r.d(a, "num2VarInt", (function() {
                    return Re
                })), r.d(a, "reverseHex", (function() {
                    return Pe
                })), r.d(a, "bigIntFromBytes", (function() {
                    return Te
                })), r.d(a, "bigIntToBytes", (function() {
                    return Ie
                })), r.d(a, "StringReader", (function() {
                    return Be
                })), r.d(a, "EventEmitter", (function() {
                    return Ne
                })), r.d(a, "sendBackResult2Native", (function() {
                    return Ce
                })), r.d(a, "axiosPost", (function() {
                    return De
                })), r.d(a, "now", (function() {
                    return Oe
                })), r.d(a, "sha256", (function() {
                    return He
                })), r.d(a, "ripemd160", (function() {
                    return _e
                })), r.d(a, "hash160", (function() {
                    return ze
                })), r.d(a, "generateRandomArray", (function() {
                    return Ue
                })), r.d(a, "randomBytes", (function() {
                    return Le
                })), r.d(a, "generateMnemonic", (function() {
                    return Me
                })), r.d(a, "parseMnemonic", (function() {
                    return Ke
                })), r.d(a, "varifyPositiveInt", (function() {
                    return Ve
                })), r.d(a, "isBase64", (function() {
                    return Ge
                })), r.d(a, "isHexString", (function() {
                    return We
                })), r.d(a, "unboundDeadline", (function() {
                    return Je
                })), r.d(a, "calcUnboundOng", (function() {
                    return Fe
                }));
                var i = {};
                r.d(i, "pushBool", (function() {
                    return Pt
                })), r.d(i, "pushInt", (function() {
                    return Tt
                })), r.d(i, "pushBigNum", (function() {
                    return It
                })), r.d(i, "pushHexString", (function() {
                    return Bt
                })), r.d(i, "getStructBytes", (function() {
                    return Nt
                })), r.d(i, "getMapBytes", (function() {
                    return Ct
                })), r.d(i, "pushMap", (function() {
                    return Dt
                })), r.d(i, "pushParam", (function() {
                    return Ot
                })), r.d(i, "serializeAbiFunction", (function() {
                    return Ht
                })), r.d(i, "convertArray", (function() {
                    return _t
                })), r.d(i, "convertMap", (function() {
                    return zt
                })), r.d(i, "deserializeItem", (function() {
                    return Ut
                })), r.d(i, "createCodeParamsScript", (function() {
                    return Lt
                })), r.d(i, "buildSmartContractParam", (function() {
                    return Mt
                })), r.d(i, "buildWasmContractParam", (function() {
                    return Kt
                }));
                var u = {};
                r.d(u, "encryptWithCtr", (function() {
                    return $t
                })), r.d(u, "decryptWithCtr", (function() {
                    return er
                })), r.d(u, "checkCtrDecrypted", (function() {
                    return tr
                })), r.d(u, "encryptWithEcb", (function() {
                    return rr
                })), r.d(u, "decryptWithEcb", (function() {
                    return nr
                })), r.d(u, "checkEcbDecrypted", (function() {
                    return ar
                })), r.d(u, "encryptWithGcm", (function() {
                    return ir
                })), r.d(u, "decryptWithGcm", (function() {
                    return ur
                }));
                var s = {};
                r.d(s, "Address", (function() {
                    return Vt
                })), r.d(s, "KeyType", (function() {
                    return Ye
                })), r.d(s, "CurveLabel", (function() {
                    return rt
                })), r.d(s, "SignatureScheme", (function() {
                    return je
                })), r.d(s, "KeyParameters", (function() {
                    return at
                })), r.d(s, "PrivateKey", (function() {
                    return lr
                })), r.d(s, "registerKeyDeserializer", (function() {
                    return dr
                })), r.d(s, "PublicKey", (function() {
                    return ut
                })), r.d(s, "PublicKeyStatus", (function() {
                    return st
                })), r.d(s, "Signature", (function() {
                    return or
                })), r.d(s, "Issuer", (function() {
                    return gr
                })), r.d(s, "User", (function() {
                    return mr
                })), r.d(s, "Ecies", (function() {
                    return Er
                }));
                var o = {};
                r.d(o, "ONT_CONTRACT", (function() {
                    return Gr
                })), r.d(o, "ONG_CONTRACT", (function() {
                    return Wr
                })), r.d(o, "getTokenContract", (function() {
                    return Jr
                })), r.d(o, "verifyAmount", (function() {
                    return Fr
                })), r.d(o, "makeTransferTx", (function() {
                    return qr
                })), r.d(o, "makeTransferStateTx", (function() {
                    return jr
                })), r.d(o, "makeTransferToMany", (function() {
                    return Yr
                })), r.d(o, "makeWithdrawOngTx", (function() {
                    return Qr
                })), r.d(o, "makeQueryAllowanceTx", (function() {
                    return Xr
                })), r.d(o, "makeQueryBalanceTx", (function() {
                    return Zr
                })), r.d(o, "deserializeTransferTx", (function() {
                    return $r
                }));
                var c = {};
                r.d(c, "ONTID_CONTRACT", (function() {
                    return en
                })), r.d(c, "buildRegisterOntidTx", (function() {
                    return vn
                })), r.d(c, "buildRegIdWithAttributes", (function() {
                    return yn
                })), r.d(c, "buildAddAttributeTx", (function() {
                    return pn
                })), r.d(c, "buildRemoveAttributeTx", (function() {
                    return gn
                })), r.d(c, "buildGetAttributesTx", (function() {
                    return mn
                })), r.d(c, "buildGetDDOTx", (function() {
                    return wn
                })), r.d(c, "buildAddControlKeyTx", (function() {
                    return Sn
                })), r.d(c, "buildRemoveControlKeyTx", (function() {
                    return An
                })), r.d(c, "buildGetPublicKeysTx", (function() {
                    return kn
                })), r.d(c, "buildAddRecoveryTx", (function() {
                    return xn
                })), r.d(c, "buildChangeRecoveryTx", (function() {
                    return bn
                })), r.d(c, "buildGetPublicKeyStateTx", (function() {
                    return En
                }));
                var l = {};
                r.d(l, "Default_params", (function() {
                    return Pn
                })), r.d(l, "signTransaction", (function() {
                    return Tn
                })), r.d(l, "signTransactionAsync", (function() {
                    return In
                })), r.d(l, "addSign", (function() {
                    return Bn
                })), r.d(l, "signTx", (function() {
                    return Cn
                })), r.d(l, "makeInvokeTransaction", (function() {
                    return Dn
                })), r.d(l, "makeDeployCodeTransaction", (function() {
                    return On
                })), r.d(l, "buildTxParam", (function() {
                    return Hn
                })), r.d(l, "buildRpcParam", (function() {
                    return _n
                })), r.d(l, "buildRestfulParam", (function() {
                    return zn
                })), r.d(l, "sendRawTxRestfulUrl", (function() {
                    return Un
                })), r.d(l, "transferStringParameter", (function() {
                    return Ln
                })), r.d(l, "transformMapParameter", (function() {
                    return Mn
                })), r.d(l, "transformArrayParameter", (function() {
                    return Kn
                })), r.d(l, "transformParameter", (function() {
                    return Vn
                })), r.d(l, "buildParamsByJson", (function() {
                    return Gn
                })), r.d(l, "makeTransactionsByJson", (function() {
                    return Wn
                })), r.d(l, "buildNativeTxFromJson", (function() {
                    return Jn
                }));
                var h = {};
                r.d(h, "InvocationTransaction", (function() {
                    return ni
                })), r.d(h, "NeoRpc", (function() {
                    return ai
                })), r.d(h, "Program", (function() {
                    return ii
                })), r.d(h, "SmartContract", (function() {
                    return ui
                })), r.d(h, "TransactionInput", (function() {
                    return si
                })), r.d(h, "TransactionOutput", (function() {
                    return oi
                })), r.d(h, "TransactionNeo", (function() {
                    return ri
                }));
                var f = {};
                r.d(f, "Oep8State", (function() {
                    return li
                })), r.d(f, "TransferFrom", (function() {
                    return hi
                })), r.d(f, "Oep8TxBuilder", (function() {
                    return fi
                }));
                var d = {};
                r.d(d, "formatBigNumParameter", (function() {
                    return vi
                })), r.d(d, "Oep4State", (function() {
                    return yi
                })), r.d(d, "Oep4TxBuilder", (function() {
                    return pi
                }));
                var v = {};
                r.d(v, "makeRegisterCandidateTx", (function() {
                    return ki
                })), r.d(v, "makeUnregisterCandidateTx", (function() {
                    return xi
                })), r.d(v, "makeApproveCandidateTx", (function() {
                    return bi
                })), r.d(v, "makeRejectCandidateTx", (function() {
                    return Ei
                })), r.d(v, "makeVoteForPeerTx", (function() {
                    return Ri
                })), r.d(v, "makeUnvoteForPeerTx", (function() {
                    return Pi
                })), r.d(v, "makeWithdrawTx", (function() {
                    return Ti
                })), r.d(v, "makeQuitNodeTx", (function() {
                    return Ii
                })), r.d(v, "makeChangeAuthorizationTx", (function() {
                    return Bi
                })), r.d(v, "makeSetPeerCostTx", (function() {
                    return Ni
                })), r.d(v, "makeWithdrawFeeTx", (function() {
                    return Ci
                })), r.d(v, "makeAuthorizeForPeerTx", (function() {
                    return Di
                })), r.d(v, "makeUnauthorizeForPeerTx", (function() {
                    return Oi
                })), r.d(v, "makeAddInitPosTx", (function() {
                    return Hi
                })), r.d(v, "makeReduceInitPosTx", (function() {
                    return _i
                })), r.d(v, "makeWithdrawPeerUnboundOngTx", (function() {
                    return zi
                })), r.d(v, "getAttributes", (function() {
                    return Gi
                })), r.d(v, "getSplitFeeAddress", (function() {
                    return Wi
                })), r.d(v, "getAuthorizeInfo", (function() {
                    return Ji
                })), r.d(v, "getGovernanceView", (function() {
                    return Fi
                })), r.d(v, "getPeerPoolMap", (function() {
                    return qi
                })), r.d(v, "getGlobalParam", (function() {
                    return ji
                })), r.d(v, "getTotalStake", (function() {
                    return Yi
                })), r.d(v, "getPeerUnboundOng", (function() {
                    return Qi
                })), r.d(v, "GovernanceView", (function() {
                    return Xi
                })), r.d(v, "PeerPoolItem", (function() {
                    return Zi
                })), r.d(v, "PeerAttributes", (function() {
                    return $i
                })), r.d(v, "SplitFeeAddress", (function() {
                    return eu
                })), r.d(v, "AuthorizeInfo", (function() {
                    return tu
                })), r.d(v, "GlobalParam", (function() {
                    return ru
                })), r.d(v, "TotalStake", (function() {
                    return nu
                }));
                var y = {};
                r.d(y, "Transfers", (function() {
                    return au
                })), r.d(y, "TokenTransfer", (function() {
                    return iu
                })), r.d(y, "State", (function() {
                    return uu
                })), r.d(y, "Contract", (function() {
                    return su
                })), r.d(y, "TransferFrom", (function() {
                    return ou
                }));
                var p = {};
                r.d(p, "Oep5Param", (function() {
                    return cu
                })), r.d(p, "Oep5TxBuilder", (function() {
                    return lu
                }));
                var g, m, w = r(1),
                    S = r.n(w),
                    A = r(0),
                    k = r.n(A),
                    x = r(18),
                    b = r.n(x),
                    E = r(2),
                    R = r.n(E),
                    P = r(14),
                    T = "17",
                    I = {
                        cost: 4096,
                        blockSize: 8,
                        parallel: 8,
                        size: 64
                    },
                    B = "0142",
                    N = "e0",
                    C = "Ont",
                    D = {
                        algorithm: "ECDSA",
                        parameters: {
                            curve: "P-256"
                        }
                    },
                    O = "1234567812345678",
                    H = "polaris1.ont.io",
                    _ = "dappnode1.ont.io",
                    z = "20334",
                    U = "20335",
                    L = "20336",
                    M = {
                        getBalance: "/api/v1/balance",
                        sendRawTx: "/api/v1/transaction",
                        getMerkleProof: "/api/v1/merkleproof"
                    },
                    K = {
                        MAIN: "MainNet",
                        TEST: "TestNet"
                    },
                    V = {
                        SOCKET_URL: "ws://" + H + ":" + U,
                        RPC_URL: "http://" + H + ":" + L,
                        REST_URL: "http://" + H + ":" + z,
                        sendRawTxByRestful: "http://" + H + ":" + z + M.sendRawTx
                    },
                    G = {
                        SOCKET_URL: "ws://" + _ + ":" + U,
                        RPC_URL: "http://" + _ + ":" + L + "/",
                        REST_URL: "http://" + _ + ":" + z + "/",
                        sendRawTxByRestful: "http://" + H + ":" + z + M.sendRawTx
                    },
                    W = {
                        ONT: "ONT",
                        ONG: "ONG"
                    },
                    J = 3e4,
                    F = "Ontology.Native.Invoke",
                    q = 16,
                    j = "m/44'/1024'/0'/0/0",
                    Y = [5, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    Q = 31536e3,
                    X = 1e9,
                    Z = 1530316800,
                    $ = r(4),
                    ee = r.n($),
                    te = r(19),
                    re = r(7);
                ! function(e) {
                    e[e.SUCCESS = 0] = "SUCCESS", e[e.SESSION_EXPIRED = 41001] = "SESSION_EXPIRED", e[e.SERVICE_CEILING = 41002] = "SERVICE_CEILING", e[e.ILLEGAL_DATAFORMAT = 41003] = "ILLEGAL_DATAFORMAT", e[e.INVALID_VERSION = 41004] = "INVALID_VERSION", e[e.INVALID_METHOD = 42001] = "INVALID_METHOD", e[e.INVALID_PARAMS = 42002] = "INVALID_PARAMS", e[e.INVALID_TRANSACTION = 43001] = "INVALID_TRANSACTION", e[e.INVALID_ASSET = 43002] = "INVALID_ASSET", e[e.INVALID_BLOCK = 43003] = "INVALID_BLOCK", e[e.UNKNOWN_TRANSACTION = 44001] = "UNKNOWN_TRANSACTION", e[e.UNKNOWN_ASSET = 44002] = "UNKNOWN_ASSET", e[e.UNKNOWN_BLOCK = 44003] = "UNKNOWN_BLOCK", e[e.UNKNWN_CONTRACT = 44004] = "UNKNWN_CONTRACT", e[e.INTERNAL_ERROR = 45001] = "INTERNAL_ERROR", e[e.SMARTCODE_ERROR = 47001] = "SMARTCODE_ERROR", e[e.UNKNOWN_ONTID = 51e3] = "UNKNOWN_ONTID", e[e.NETWORK_ERROR = 52e3] = "NETWORK_ERROR", e[e.Decrypto_ERROR = 53e3] = "Decrypto_ERROR", e[e.INVALID_ADDR = 53001] = "INVALID_ADDR", e[e.PreExec_ERROR = 54e3] = "PreExec_ERROR"
                }(g || (g = {})),
                function(e) {
                    e[e.PUSH0 = 0] = "PUSH0", e[e.PUSHF = 0] = "PUSHF", e[e.PUSHBYTES1 = 1] = "PUSHBYTES1", e[e.PUSHBYTES75 = 75] = "PUSHBYTES75", e[e.PUSHDATA1 = 76] = "PUSHDATA1", e[e.PUSHDATA2 = 77] = "PUSHDATA2", e[e.PUSHDATA4 = 78] = "PUSHDATA4", e[e.PUSHM1 = 79] = "PUSHM1", e[e.PUSH1 = 81] = "PUSH1", e[e.PUSHT = 81] = "PUSHT", e[e.PUSH2 = 82] = "PUSH2", e[e.PUSH3 = 83] = "PUSH3", e[e.PUSH4 = 84] = "PUSH4", e[e.PUSH5 = 85] = "PUSH5", e[e.PUSH6 = 86] = "PUSH6", e[e.PUSH7 = 87] = "PUSH7", e[e.PUSH8 = 88] = "PUSH8", e[e.PUSH9 = 89] = "PUSH9", e[e.PUSH10 = 90] = "PUSH10", e[e.PUSH11 = 91] = "PUSH11", e[e.PUSH12 = 92] = "PUSH12", e[e.PUSH13 = 93] = "PUSH13", e[e.PUSH14 = 94] = "PUSH14", e[e.PUSH15 = 95] = "PUSH15", e[e.PUSH16 = 96] = "PUSH16", e[e.NOP = 97] = "NOP", e[e.JMP = 98] = "JMP", e[e.JMPIF = 99] = "JMPIF", e[e.JMPIFNOT = 100] = "JMPIFNOT", e[e.CALL = 101] = "CALL", e[e.RET = 102] = "RET", e[e.APPCALL = 103] = "APPCALL", e[e.SYSCALL = 104] = "SYSCALL", e[e.TAILCALL = 105] = "TAILCALL", e[e.DUPFROMALTSTACK = 106] = "DUPFROMALTSTACK", e[e.TOALTSTACK = 107] = "TOALTSTACK", e[e.FROMALTSTACK = 108] = "FROMALTSTACK", e[e.XDROP = 109] = "XDROP", e[e.XSWAP = 114] = "XSWAP", e[e.XTUCK = 115] = "XTUCK", e[e.DEPTH = 116] = "DEPTH", e[e.DROP = 117] = "DROP", e[e.DUP = 118] = "DUP", e[e.NIP = 119] = "NIP", e[e.OVER = 120] = "OVER", e[e.PICK = 121] = "PICK", e[e.ROLL = 122] = "ROLL", e[e.ROT = 123] = "ROT", e[e.SWAP = 124] = "SWAP", e[e.TUCK = 125] = "TUCK", e[e.CAT = 126] = "CAT", e[e.SUBSTR = 127] = "SUBSTR", e[e.LEFT = 128] = "LEFT", e[e.RIGHT = 129] = "RIGHT", e[e.SIZE = 130] = "SIZE", e[e.INVERT = 131] = "INVERT", e[e.AND = 132] = "AND", e[e.OR = 133] = "OR", e[e.XOR = 134] = "XOR", e[e.EQUAL = 135] = "EQUAL", e[e.INC = 139] = "INC", e[e.DEC = 140] = "DEC", e[e.NEGATE = 143] = "NEGATE", e[e.ABS = 144] = "ABS", e[e.NOT = 145] = "NOT", e[e.NZ = 146] = "NZ", e[e.ADD = 147] = "ADD", e[e.SUB = 148] = "SUB", e[e.MUL = 149] = "MUL", e[e.DIV = 150] = "DIV", e[e.MOD = 151] = "MOD", e[e.SHL = 152] = "SHL", e[e.SHR = 153] = "SHR", e[e.BOOLAND = 154] = "BOOLAND", e[e.BOOLOR = 155] = "BOOLOR", e[e.NUMEQUAL = 156] = "NUMEQUAL", e[e.NUMNOTEQUAL = 158] = "NUMNOTEQUAL", e[e.LT = 159] = "LT", e[e.GT = 160] = "GT", e[e.LTE = 161] = "LTE", e[e.GTE = 162] = "GTE", e[e.MIN = 163] = "MIN", e[e.MAX = 164] = "MAX", e[e.WITHIN = 165] = "WITHIN", e[e.SHA1 = 167] = "SHA1", e[e.SHA256 = 168] = "SHA256", e[e.HASH160 = 169] = "HASH160", e[e.HASH256 = 170] = "HASH256", e[e.CHECKSIG = 172] = "CHECKSIG", e[e.CHECKMULTISIG = 174] = "CHECKMULTISIG", e[e.ARRAYSIZE = 192] = "ARRAYSIZE", e[e.PACK = 193] = "PACK", e[e.UNPACK = 194] = "UNPACK", e[e.PICKITEM = 195] = "PICKITEM", e[e.SETITEM = 196] = "SETITEM", e[e.NEWARRAY = 197] = "NEWARRAY", e[e.NEWSTRUCT = 198] = "NEWSTRUCT", e[e.NEWMAP = 199] = "NEWMAP", e[e.APPEND = 200] = "APPEND", e[e.REVERSE = 201] = "REVERSE", e[e.REMOVE = 202] = "REMOVE", e[e.HASKEY = 203] = "HASKEY", e[e.KEYS = 204] = "KEYS", e[e.VALUES = 205] = "VALUES", e[e.THROW = 240] = "THROW", e[e.THROWIFNOT = 241] = "THROWIFNOT"
                }(m || (m = {}));
                var ne = m,
                    ae = r(13),
                    ie = r(16),
                    ue = r(8),
                    se = r(20),
                    oe = r(39),
                    ce = r.n(oe),
                    le = r(38),
                    he = r.n(le),
                    fe = r(5),
                    de = r.n(fe),
                    ve = r(26);

                function ye(e) {
                    for (var t = []; e.length >= 2;) t.push(parseInt(e.substring(0, 2), 16)), e = e.substring(2, e.length);
                    return t
                }

                function pe(e) {
                    for (var t = "", r = new Uint8Array(e), n = 0; n < r.byteLength; n++) {
                        var a = r[n].toString(16);
                        t += a = 0 === a.length ? "00" : 1 === a.length ? "0" + a : a
                    }
                    return t
                }

                function ge(e) {
                    return String.fromCharCode.apply(null, new Uint8Array(e))
                }

                function me(e) {
                    for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0, a = e.length; n < a; n++) r[n] = e.charCodeAt(n);
                    return t
                }

                function we(e) {
                    return pe(me(e))
                }

                function Se(e) {
                    return ge(ye(e))
                }

                function Ae(e) {
                    var t = "";
                    return (t += Re(e.length / 2)) + e
                }

                function ke(e) {
                    var t = "",
                        r = we(e);
                    return (t += Re(r.length / 2)) + r
                }

                function xe(e) {
                    return e ? "01" : "00"
                }

                function be(e, t) {
                    if (e.length !== t.length) throw new Error("strings are disparate lengths");
                    if (e.length % 2 != 0) throw new Error("strings must be hex");
                    for (var r = new ArrayBuffer(e.length / 2), n = new Uint8Array(r), a = 0; a < e.length; a += 2) n[a / 2] = parseInt(e.substr(a, 2), 16) ^ parseInt(t.substr(a, 2), 16);
                    return pe(r)
                }
                var Ee = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (e < 0) throw new RangeError("num must be >=0");
                        if (t % 1 != 0) throw new Error("size must be a whole integer");
                        if (!he()(e)) throw new RangeError("num (" + e + ") must be a safe integer");
                        t *= 2;
                        var n = e.toString(16);
                        return n = n.length % t == 0 ? n : ("0".repeat(t) + n).substring(n.length), r && (n = Pe(n)), n
                    },
                    Re = function(e) {
                        return e < 253 ? Ee(e) : e <= 65535 ? "fd" + Ee(e, 2, !0) : e <= 4294967295 ? "fe" + Ee(e, 4, !0) : "ff" + Ee(e, 8, !0)
                    },
                    Pe = function(e) {
                        if (e.length % 2 != 0) throw new Error("Incorrect Length: " + e);
                        for (var t = "", r = e.length - 2; r >= 0; r -= 2) t += e.substr(r, 2);
                        return t
                    };

                function Te(e) {
                    var t = Buffer.from(e, "hex"),
                        r = ce()(t.subarray(0));
                    return r[r.length - 1] >> 7 == 1 && (r = r.concat(Array(8 - r.length).fill(255))), se.fromBytesLE(r)
                }

                function Ie(e) {
                    for (var t, r = e.toBytesLE(), n = e.neg().toBytesLE(), a = t = e.isNegative() ? 255 : 0, i = 0, u = r.length - 1; u >= 0; u--)
                        if (r[u] !== t) {
                            a = e.isNegative() ? n[u] : r[u], i = u + 1;
                            break
                        } return r = r.slice(0, i), a >> 7 == 1 && r.push(e.isNegative() ? 255 : 0), new Buffer(r).toString("hex")
                }
                var Be = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            if (S()(this, e), t.length % 2 != 0) throw new Error("Param's length is not even.");
                            this.str = t, this.pos = 0, this.size = this.str.length / 2
                        }
                        return k()(e, [{
                            key: "isEmpty",
                            value: function() {
                                return this.pos >= this.str.length
                            }
                        }, {
                            key: "read",
                            value: function(e) {
                                if (this.isEmpty()) throw new Error("StringReader reached the end.");
                                var t = this.str.substr(this.pos, 2 * e);
                                return this.pos += 2 * e, t
                            }
                        }, {
                            key: "unreadBytes",
                            value: function(e) {
                                if (this.pos - 2 * e < 0) throw new Error("Can not unread too many bytes.");
                                this.pos -= 2 * e
                            }
                        }, {
                            key: "readNullTerminated",
                            value: function() {
                                var e = this.str.indexOf("00", this.pos);
                                if (-1 === e) throw new Error("No ending NULL found");
                                var t = this.str.substring(this.pos, e);
                                return this.pos = e + 2, t
                            }
                        }, {
                            key: "readNextBytes",
                            value: function() {
                                var e = this.readNextLen();
                                return 0 === e ? "" : this.read(e)
                            }
                        }, {
                            key: "readNextLen",
                            value: function() {
                                var e = parseInt(this.read(1), 16);
                                return 253 === e ? e = parseInt(Pe(this.read(2)), 16) : 254 === e ? e = parseInt(Pe(this.read(4)), 16) : 255 === e && (e = parseInt(Pe(this.read(8)), 16)), e
                            }
                        }, {
                            key: "readUint8",
                            value: function() {
                                return parseInt(Pe(this.read(1)), 16)
                            }
                        }, {
                            key: "readUint16",
                            value: function() {
                                return parseInt(Pe(this.read(2)), 16)
                            }
                        }, {
                            key: "readUint32",
                            value: function() {
                                return parseInt(Pe(this.read(4)), 16)
                            }
                        }, {
                            key: "readInt",
                            value: function() {
                                return parseInt(Pe(this.read(4)), 16)
                            }
                        }, {
                            key: "readLong",
                            value: function() {
                                return parseInt(Pe(this.read(8)), 16)
                            }
                        }, {
                            key: "readBoolean",
                            value: function() {
                                return 0 !== parseInt(this.read(1), 16)
                            }
                        }]), e
                    }(),
                    Ne = function() {
                        function e() {
                            S()(this, e), this.handlers = {}
                        }
                        return k()(e, [{
                            key: "on",
                            value: function(e, t) {
                                void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t)
                            }
                        }, {
                            key: "trigger",
                            value: function(e, t) {
                                if (this.handlers[e] instanceof Array)
                                    for (var r = this.handlers[e], n = 0, a = r.length; n < a; n++) r[n](t)
                            }
                        }, {
                            key: "off",
                            value: function(e) {
                                delete this.handlers[e]
                            }
                        }]), e
                    }(),
                    Ce = function(e, t) {
                        window && window.prompt && window.prompt(C + "://" + t + "?params=" + e)
                    },
                    De = function(e, t) {
                        return de.a.post(e, t).then((function(e) {
                            return console.log("axios res:" + e), e
                        })).catch((function(e) {
                            return console.log("axios res:" + R()(e)), e
                        }))
                    };

                function Oe() {
                    return Math.floor(Date.now() / 1e3)
                }

                function He(e) {
                    var t = re.enc.Hex.parse(e);
                    return re.SHA256(t).toString()
                }

                function _e(e) {
                    var t = re.enc.Hex.parse(e);
                    return re.RIPEMD160(t).toString()
                }

                function ze(e) {
                    return _e(He(e))
                }

                function Ue(e) {
                    return ve(e)
                }

                function Le(e) {
                    return pe(Ue(e))
                }

                function Me() {
                    var e = pe(Ue(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16));
                    return P.entropyToMnemonic(e)
                }

                function Ke(e) {
                    return P.mnemonicToEntropy(e)
                }

                function Ve(e) {
                    if (!/^[1-9]\d*$/.test(e.toString())) throw g.INVALID_PARAMS
                }

                function Ge(e) {
                    return Buffer.from(e, "base64").toString("base64") === e
                }

                function We(e) {
                    return /^[0-9a-fA-F]+$/.test(e) && e.length % 2 == 0
                }

                function Je() {
                    var e = 0,
                        t = !0,
                        r = !1,
                        n = void 0;
                    try {
                        for (var a, i = ee()(Y); !(t = (a = i.next()).done); t = !0) e += a.value
                    } catch (e) {
                        r = !0, n = e
                    } finally {
                        try {
                            !t && i.return && i.return()
                        } finally {
                            if (r) throw n
                        }
                    }
                    e *= Q;
                    var u = Y.length;
                    if (1 !== Y[u - 1] || !(e - Q < X && X <= e)) throw new Error("incompatible constants setting");
                    return Q * u - (e - X)
                }

                function Fe(e, t, r) {
                    var n = 0;
                    if (t >= r) return 0;
                    var a = Je();
                    if (t < a) {
                        var i = Math.floor(t / Q),
                            u = t % Q;
                        r >= a && (r = a);
                        for (var s = Math.floor(r / Q), o = r % Q; i < s;) n += (Q - u) * Y[i], i++, u = 0;
                        n += (o - u) * Y[i]
                    }
                    return n * e
                }
                var qe = function() {
                        function e(t) {
                            var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            S()(this, e);
                            var n = new ue.BigNumber(t);
                            if (!n.isInteger() || n.isNegative()) throw g.INVALID_PARAMS;
                            this.value = t, this.ledgerCompatible = r
                        }
                        return k()(e, null, [{
                            key: "fromHexstr",
                            value: function(t) {
                                return t = Pe(t), new e(new ue.BigNumber(t, 16).toString())
                            }
                        }]), k()(e, [{
                            key: "toHexstr",
                            value: function() {
                                var e = Ie(se.fromValue(this.value));
                                return this.ledgerCompatible && (e.length % 2 != 0 || e.length < 16) && (e += "0".repeat(16 - e.length)), e
                            }
                        }]), e
                    }(),
                    je = function() {
                        function e(t, r, n) {
                            S()(this, e), this.label = t, this.hex = r, this.labelJWS = n, e.values.push(this)
                        }
                        return k()(e, null, [{
                            key: "fromHex",
                            value: function(t) {
                                var r = e.values.find((function(e) {
                                    return e.hex === t
                                }));
                                if (void 0 === r) throw new Error("Enum value not found");
                                return r
                            }
                        }, {
                            key: "fromLabel",
                            value: function(t) {
                                var r = e.values.find((function(e) {
                                    return e.label === t
                                }));
                                if (void 0 === r) throw new Error("Enum value not found");
                                return r
                            }
                        }, {
                            key: "fromLabelJWS",
                            value: function(t) {
                                var r = e.values.find((function(e) {
                                    return e.labelJWS === t
                                }));
                                if (void 0 === r) throw new Error("Enum value not found");
                                return r
                            }
                        }]), e
                    }();
                je.values = [], je.ECDSAwithSHA224 = new je("SHA224withECDSA", 0, "ES224"), je.ECDSAwithSHA256 = new je("SHA256withECDSA", 1, "ES256"), je.ECDSAwithSHA384 = new je("SHA384withECDSA", 2, "ES384"), je.ECDSAwithSHA512 = new je("SHA512withECDSA", 3, "ES512"), je.ECDSAwithSHA3_224 = new je("SHA3-224withECDSA", 4, "ES3-224"), je.ECDSAwithSHA3_256 = new je("SHA3-256withECDSA", 5, "ES3-256"), je.ECDSAwithSHA3_384 = new je("SHA3-384withECDSA", 6, "ES3-384"), je.ECDSAwithSHA3_512 = new je("SHA3-512withECDSA", 7, "ES3-512"), je.ECDSAwithRIPEMD160 = new je("RIPEMD160withECDSA", 8, "ER160"), je.SM2withSM3 = new je("SM3withSM2", 9, "SM"), je.EDDSAwithSHA512 = new je("SHA512withEdDSA", 10, "EDS512");
                var Ye = function() {
                    function e(t, r, n) {
                        S()(this, e), this.label = t, this.hex = r, this.defaultSchema = n, e.values.push(this)
                    }
                    return k()(e, null, [{
                        key: "fromHex",
                        value: function(t) {
                            var r = e.values.find((function(e) {
                                return e.hex === t
                            }));
                            if (void 0 === r) throw new Error("Enum value not found");
                            return r
                        }
                    }, {
                        key: "fromLabel",
                        value: function(t) {
                            var r = e.values.find((function(e) {
                                return e.label === t
                            }));
                            if (void 0 === r) throw new Error("Enum value not found");
                            return r
                        }
                    }]), e
                }();
                Ye.values = [], Ye.ECDSA = new Ye("ECDSA", 18, je.ECDSAwithSHA256), Ye.SM2 = new Ye("SM2", 19, je.SM2withSM3), Ye.EDDSA = new Ye("EDDSA", 20, je.EDDSAwithSHA512);
                var Qe = r(9),
                    Xe = r.n(Qe),
                    Ze = r(11),
                    $e = r.n(Ze),
                    et = r(10),
                    tt = r.n(et),
                    rt = function() {
                        function e(t, r, n) {
                            S()(this, e), this.label = t, this.hex = r, this.preset = n, e.values.push(this)
                        }
                        return k()(e, null, [{
                            key: "fromHex",
                            value: function(t) {
                                var r = e.values.find((function(e) {
                                    return e.hex === t
                                }));
                                if (void 0 === r) throw new Error("Enum value not found");
                                return r
                            }
                        }, {
                            key: "fromLabel",
                            value: function(t) {
                                var r = e.values.find((function(e) {
                                    return e.label === t
                                }));
                                if (void 0 === r) throw new Error("Enum value not found");
                                return r
                            }
                        }]), e
                    }();
                rt.values = [], rt.SECP224R1 = new rt("P-224", 1, "p224"), rt.SECP256R1 = new rt("P-256", 2, "p256"), rt.SECP384R1 = new rt("P-384", 3, "p384"), rt.SECP521R1 = new rt("P-521", 4, "p521"), rt.SM2P256V1 = new rt("sm2p256v1", 20, "sm2p256v1"), rt.ED25519 = new rt("ed25519", 25, "ed25519");
                var nt = r(23),
                    at = function() {
                        function e(t) {
                            S()(this, e), this.curve = t
                        }
                        return k()(e, null, [{
                            key: "deserializeJson",
                            value: function(t) {
                                return new e(rt.fromLabel(t.curve))
                            }
                        }]), k()(e, [{
                            key: "serializeJson",
                            value: function() {
                                return {
                                    curve: this.curve.label
                                }
                            }
                        }]), e
                    }(),
                    it = function() {
                        function e(t, r, n) {
                            S()(this, e), this.key = t, void 0 === r && (r = Ye.fromLabel(D.algorithm)), void 0 === n && (n = at.deserializeJson(D.parameters)), this.algorithm = r, this.parameters = n
                        }
                        return k()(e, [{
                            key: "computeHash",
                            value: function(e, t) {
                                switch (t) {
                                    case je.ECDSAwithSHA224:
                                        return re.SHA224(re.enc.Hex.parse(e)).toString();
                                    case je.ECDSAwithSHA256:
                                        return re.SHA256(re.enc.Hex.parse(e)).toString();
                                    case je.ECDSAwithSHA384:
                                        return re.SHA384(re.enc.Hex.parse(e)).toString();
                                    case je.ECDSAwithSHA512:
                                    case je.EDDSAwithSHA512:
                                        return re.SHA512(re.enc.Hex.parse(e)).toString();
                                    case je.ECDSAwithSHA3_224:
                                        return Object(nt.sha3_224)(ye(e));
                                    case je.ECDSAwithSHA3_256:
                                        return Object(nt.sha3_256)(ye(e));
                                    case je.ECDSAwithSHA3_384:
                                        return Object(nt.sha3_384)(ye(e));
                                    case je.ECDSAwithSHA3_512:
                                        return Object(nt.sha3_512)(ye(e));
                                    case je.ECDSAwithRIPEMD160:
                                        return re.RIPEMD160(re.enc.Hex.parse(e)).toString();
                                    case je.SM2withSM3:
                                        return (new ie.sm3).sum(ye(e), "hex");
                                    default:
                                        throw new Error("Unsupported hash algorithm.")
                                }
                            }
                        }, {
                            key: "isSchemaSupported",
                            value: function(e) {
                                switch (e) {
                                    case je.ECDSAwithSHA224:
                                    case je.ECDSAwithSHA256:
                                    case je.ECDSAwithSHA384:
                                    case je.ECDSAwithSHA512:
                                    case je.ECDSAwithSHA3_224:
                                    case je.ECDSAwithSHA3_256:
                                    case je.ECDSAwithSHA3_384:
                                    case je.ECDSAwithSHA3_512:
                                    case je.ECDSAwithRIPEMD160:
                                        return this.algorithm === Ye.ECDSA;
                                    case je.EDDSAwithSHA512:
                                        return this.algorithm === Ye.EDDSA;
                                    case je.SM2withSM3:
                                        return this.algorithm === Ye.SM2;
                                    default:
                                        throw new Error("Unsupported signature schema.")
                                }
                            }
                        }, {
                            key: "serializeJson",
                            value: function() {
                                return {
                                    algorithm: this.algorithm.label,
                                    parameters: this.parameters.serializeJson(),
                                    key: this.key
                                }
                            }
                        }]), e
                    }(),
                    ut = function(e) {
                        function t() {
                            return S()(this, t), $e()(this, (t.__proto__ || Xe()(t)).apply(this, arguments))
                        }
                        return tt()(t, e), k()(t, [{
                            key: "verify",
                            value: function(e, t) {
                                if (!this.isSchemaSupported(t.algorithm)) throw new Error("Signature schema does not match key type.");
                                "string" != typeof e && (e = e.getSignContent());
                                var r;
                                return r = t.algorithm === je.SM2withSM3 ? e : this.computeHash(e, t.algorithm), this.verifySignature(r, t.value, t.algorithm)
                            }
                        }, {
                            key: "serializeHex",
                            value: function() {
                                var e = "";
                                switch (this.algorithm) {
                                    case Ye.ECDSA:
                                        e += this.key;
                                        break;
                                    case Ye.EDDSA:
                                    case Ye.SM2:
                                        e += Ee(this.algorithm.hex), e += Ee(this.parameters.curve.hex), e += this.key
                                }
                                return e
                            }
                        }, {
                            key: "verifySignature",
                            value: function(e, t, r) {
                                switch (r) {
                                    case je.ECDSAwithSHA224:
                                    case je.ECDSAwithSHA256:
                                    case je.ECDSAwithSHA384:
                                    case je.ECDSAwithSHA512:
                                    case je.ECDSAwithSHA3_224:
                                    case je.ECDSAwithSHA3_256:
                                    case je.ECDSAwithSHA3_384:
                                    case je.ECDSAwithSHA3_512:
                                    case je.ECDSAwithRIPEMD160:
                                        return this.verifyEcDSASignature(e, t);
                                    case je.EDDSAwithSHA512:
                                        return this.verifyEdDSASignature(e, t);
                                    case je.SM2withSM3:
                                        return this.verifySM2Signature(e, t);
                                    default:
                                        throw new Error("Unsupported signature schema.")
                                }
                            }
                        }, {
                            key: "verifyEcDSASignature",
                            value: function(e, t) {
                                var r = t.substr(0, 64),
                                    n = t.substr(64, 64);
                                return new ae.ec(this.parameters.curve.preset).verify(e, {
                                    r: r,
                                    s: n
                                }, this.key, "hex")
                            }
                        }, {
                            key: "verifyEdDSASignature",
                            value: function(e, t) {
                                var r = t.substr(0, 64),
                                    n = t.substr(64, 64);
                                return new ae.eddsa(this.parameters.curve.preset).verify(e, {
                                    r: r,
                                    s: n
                                }, this.key, "hex")
                            }
                        }, {
                            key: "verifySM2Signature",
                            value: function(e, t) {
                                var r = new Be(t),
                                    n = Se(r.readNullTerminated());
                                if (n !== O && "" !== n) throw new Error("Unsupported SM2 id used.");
                                var a = r.read(32),
                                    i = r.read(32);
                                return ie.sm2.SM2KeyPair(this.key).verify(ye(e), a, i)
                            }
                        }], [{
                            key: "deserializeHex",
                            value: function(e) {
                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 33;
                                if (33 === r) {
                                    var n = Ye.ECDSA,
                                        a = rt.SECP256R1;
                                    return new t(e.read(33), n, new at(a))
                                }
                                var i = parseInt(e.read(1), 16),
                                    u = parseInt(e.read(1), 16);
                                return new t(e.read(r - 2), Ye.fromHex(i), new at(rt.fromHex(u)))
                            }
                        }]), t
                    }(it),
                    st = function() {
                        function e(t) {
                            S()(this, e), this.label = t, e.values.push(this)
                        }
                        return k()(e, null, [{
                            key: "fromHexLabel",
                            value: function(t) {
                                var r = Se(t),
                                    n = e.values.find((function(e) {
                                        return e.label === r
                                    }));
                                if (void 0 === n) throw new Error("Enum value not found");
                                return n
                            }
                        }]), e
                    }();

                function ot(e, t) {
                    if (e.algorithm !== t.algorithm) return e.algorithm.hex - t.algorithm.hex;
                    switch (e.algorithm) {
                        case Ye.ECDSA:
                            var r = new ae.ec(e.parameters.curve.preset),
                                n = r.keyFromPublic(e.key, "hex", !0),
                                a = r.keyFromPublic(t.key, "hex", !0),
                                i = n.getPublic(),
                                u = a.getPublic();
                            return i.getX() !== u.getX() ? i.getX() - u.getX() : i.getY() - u.getY();
                        case Ye.SM2:
                            var s = new ie.sm2.SM2KeyPair,
                                o = new ie.sm2.SM2KeyPair;
                            return s._pubFromString(e.key), o._pubFromString(t.key), s.getX().toString() !== o.getX().toString() ? Number(s.getX().toString()) - Number(o.getX().toString()) : Number(s.getY().toString()) - Number(o.getY().toString());
                        case Ye.EDDSA:
                            return Number(e.key) - Number(t.key);
                        default:
                            return 0
                    }
                }

                function ct(e) {
                    return Ee(e)
                }

                function lt(e) {
                    return -1 === e ? Ee(ne.PUSHM1) : 0 === e ? Ee(ne.PUSH0) : e > 0 && e <= 16 ? Ee(ne.PUSH1 - 1 + e) : Ee(e, 8, !0)
                }

                function ht(e) {
                    return 0 === e ? ct(ne.PUSH0) : e <= 16 ? Ee(e - 1 + ne.PUSH1) : ft(new qe(e.toString()).toHexstr())
                }

                function ft(e) {
                    var t = "";
                    if (0 === e.length) throw new Error("pushBytes error, hexstr is empty.");
                    var r = e.length / 2;
                    if (r <= ne.PUSHBYTES75 + 1 - ne.PUSHBYTES1) t += Ee(r + ne.PUSHBYTES1 - 1);
                    else if (r < 256) t += Ee(ne.PUSHDATA1), t += Ee(r);
                    else if (r < 65536) t += Ee(ne.PUSHDATA2), t += Ee(r, 2, !0);
                    else {
                        if (!(r < 4294967296)) throw g.INVALID_PARAMS;
                        t += Ee(ne.PUSHDATA4), t += Ee(r, 4, !0)
                    }
                    return t + e
                }

                function dt(e) {
                    var t = "";
                    return (t += function(e) {
                        return ft(e.serializeHex())
                    }(e)) + ct(ne.CHECKSIG)
                }

                function vt(e, t) {
                    var r = e.length;
                    if (!(1 <= t && t <= r && r <= 1024)) throw new Error("Wrong multi-sig param");
                    e.sort(ot);
                    var n = "";
                    n += ht(t);
                    var a = !0,
                        i = !1,
                        u = void 0;
                    try {
                        for (var s, o = ee()(e); !(a = (s = o.next()).done); a = !0) n += ft(s.value.serializeHex())
                    } catch (e) {
                        i = !0, u = e
                    } finally {
                        try {
                            !a && o.return && o.return()
                        } finally {
                            if (i) throw u
                        }
                    }
                    return (n += ht(r)) + ct(ne.CHECKMULTISIG)
                }

                function yt(e) {
                    var t = "";
                    e.sort();
                    var r = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var i, u = ee()(e); !(r = (i = u.next()).done); r = !0) t += ft(i.value)
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return t
                }

                function pt(e) {
                    var t = function(e) {
                            return parseInt(e.read(1), 16)
                        }(e),
                        r = void 0;
                    if (t === ne.PUSHDATA4) r = e.readUint32();
                    else if (t === ne.PUSHDATA2) r = e.readUint16();
                    else if (t === ne.PUSHDATA1) r = e.readUint8();
                    else {
                        if (!(t <= ne.PUSHBYTES75 && t >= ne.PUSHBYTES1)) throw new Error("unexpected opcode: " + t);
                        r = t - ne.PUSHBYTES1 + 1
                    }
                    return e.read(r)
                }

                function gt(e) {
                    var t = e.readNextBytes();
                    return ut.deserializeHex(new Be(t))
                }
                st.values = [], st.IN_USE = new st("in use"), st.REVOKED = new st("revoked");
                var mt, wt, St = function e() {
                        S()(this, e)
                    },
                    At = r(25),
                    kt = r.n(At),
                    xt = r(12),
                    bt = r.n(xt);
                ! function(e) {
                    e.Boolean = "Boolean", e.Integer = "Integer", e.ByteArray = "ByteArray", e.Interface = "Interface", e.Array = "Array", e.Struct = "Struct", e.Map = "Map", e.String = "String", e.Int = "Integer", e.Long = "Long", e.IntArray = "IntArray", e.LongArray = "LongArray", e.Address = "Address"
                }(mt || (mt = {})),
                function(e) {
                    e[e.ByteArray = 0] = "ByteArray", e[e.Boolean = 1] = "Boolean", e[e.Integer = 2] = "Integer", e[e.Interface = 64] = "Interface", e[e.Array = 128] = "Array", e[e.Struct = 129] = "Struct", e[e.Map = 130] = "Map"
                }(wt || (wt = {}));
                var Et = function() {
                        function e(t, r, n) {
                            S()(this, e), this.name = t, this.type = r, this.value = n
                        }
                        return k()(e, [{
                            key: "getName",
                            value: function() {
                                return this.name
                            }
                        }, {
                            key: "getType",
                            value: function() {
                                return this.type
                            }
                        }, {
                            key: "getValue",
                            value: function() {
                                return this.value
                            }
                        }, {
                            key: "setValue",
                            value: function(e) {
                                return e.type === this.type && e.name === this.name && null != e.value && (this.value = e.value, !0)
                            }
                        }]), e
                    }(),
                    Rt = function() {
                        function e() {
                            S()(this, e), this.list = []
                        }
                        return k()(e, [{
                            key: "add",
                            value: function() {
                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                var n = !0,
                                    a = !1,
                                    i = void 0;
                                try {
                                    for (var u, s = ee()(t); !(n = (u = s.next()).done); n = !0) {
                                        var o = u.value;
                                        this.list.push(o)
                                    }
                                } catch (e) {
                                    a = !0, i = e
                                } finally {
                                    try {
                                        !n && s.return && s.return()
                                    } finally {
                                        if (a) throw i
                                    }
                                }
                            }
                        }]), e
                    }(),
                    Pt = function(e) {
                        return "" + Ee(e ? ne.PUSHT : ne.PUSHF)
                    },
                    Tt = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = "";
                        if (-1 === e) r = Ee(ne.PUSHM1);
                        else if (0 === e) r = Ee(ne.PUSH0);
                        else if (e > 0 && e < 16) {
                            var n = ne.PUSH1 - 1 + e;
                            r = Ee(n)
                        } else {
                            var a = new qe(e.toString(), t).toHexstr();
                            r = Bt(a)
                        }
                        return r
                    },
                    It = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = "";
                        if (e.isEqualTo(-1)) r = Ee(ne.PUSHM1);
                        else if (e.isEqualTo(0)) r = Ee(ne.PUSH0);
                        else if (e.isGreaterThan(0) && e.isLessThan(16)) {
                            var n = ne.PUSH1 - 1 + e.toNumber();
                            r = Ee(n)
                        } else {
                            var a = new qe(e.toString(), t).toHexstr();
                            r = Bt(a)
                        }
                        return r
                    },
                    Bt = function(e) {
                        var t = "",
                            r = e.length / 2;
                        return r <= ne.PUSHBYTES75 ? t += Ee(r) : r < 256 ? (t += Ee(ne.PUSHDATA1), t += Ee(r)) : r < 65536 ? (t += Ee(ne.PUSHDATA2), t += Ee(r, 2, !0)) : (t += Ee(ne.PUSHDATA4), t += Ee(r, 4, !0)), t + e
                    },
                    Nt = function(e) {
                        var t = "";
                        t += Ee(wt.Struct), t += Ee(e.list.length);
                        var r = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var i, u = ee()(e.list); !(r = (i = u.next()).done); r = !0) {
                                var s = i.value;
                                if ("string" == typeof s) t += Ee(wt.ByteArray), t += Bt(s);
                                else {
                                    if ("number" != typeof s) throw g.INVALID_PARAMS;
                                    t += Ee(wt.ByteArray), t += Bt(Re(s))
                                }
                            }
                        } catch (e) {
                            n = !0, a = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                        return t
                    },
                    Ct = function(e) {
                        var t = "";
                        t += Ee(wt.Map), t += Ee(e.size);
                        var r = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var i, u = ee()(e.keys()); !(r = (i = u.next()).done); r = !0) {
                                var s = i.value;
                                t += Ee(wt.ByteArray), t += Bt(we(s));
                                var o = e.get(s);
                                if (o && o.getType() === mt.ByteArray) t += Ee(wt.ByteArray), t += Bt(o.getValue());
                                else if (o && o.getType() === mt.String) t += Ee(wt.ByteArray), t += Bt(we(o.getValue()));
                                else if (o && o.getType() === mt.Integer) t += Ee(wt.Integer), t += Bt(Re(o.getValue()));
                                else {
                                    if (!o || o.getType() !== mt.Long) throw g.INVALID_PARAMS;
                                    t += Ee(wt.Integer), t += Bt(Re(o.getValue()))
                                }
                            }
                        } catch (e) {
                            n = !0, a = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                        return t
                    },
                    Dt = function(e, t) {
                        var r = "";
                        r += Ee(ne.NEWMAP), r += Ee(ne.TOALTSTACK);
                        var n = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (var u, s = ee()(e.keys()); !(n = (u = s.next()).done); n = !0) {
                                var o = u.value;
                                r += Ee(ne.DUPFROMALTSTACK), r += Bt(we(o)), r += Ot(e.get(o), t), r += Ee(ne.SETITEM)
                            }
                        } catch (e) {
                            a = !0, i = e
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return r + Ee(ne.FROMALTSTACK)
                    },
                    Ot = function e(t, r) {
                        if (!t) throw Error("Parameter can not be undefined");
                        var n = "";
                        if (t.type === mt.ByteArray) n += Bt(t.value);
                        else if (t.type === mt.String) n += Bt(we(t.value));
                        else if (t.type === mt.Boolean) n += Pt(Boolean(t.value)), n += Ee(ne.PUSH0), n += Ee(ne.BOOLOR);
                        else if (t.type === mt.Map) n += Dt(zt(t), r);
                        else if (t instanceof bt.a) n += Dt(t, r);
                        else if (t.type === mt.Array) {
                            for (var a = t.value.length - 1; a > -1; a--) n += e(t.value[a], r);
                            n += Tt(t.value.length, r), n += Ee(ne.PACK)
                        } else if (t.type === mt.Integer) n += Tt(t.value, r), n += Ee(ne.PUSH0), n += Ee(ne.ADD);
                        else {
                            if (t.type !== mt.Long) throw Error("Invalid parameter type: " + R()(t));
                            n += It(new ue.BigNumber(t.value), r), n += Ee(ne.PUSH0), n += Ee(ne.ADD)
                        }
                        return n
                    },
                    Ht = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = [];
                        r.push(we(e.name));
                        var n = [],
                            a = !0,
                            i = !1,
                            u = void 0;
                        try {
                            for (var s, o = ee()(e.parameters); !(a = (s = o.next()).done); a = !0) {
                                var c = s.value;
                                c.getType() === mt.String ? n.push(we(c.getValue())) : c.getType() === mt.Long ? n.push(new ue.BigNumber(c.getValue())) : c.getType() === mt.Map ? n.push(zt(c)) : n.push(c.getValue())
                            }
                        } catch (e) {
                            i = !0, u = e
                        } finally {
                            try {
                                !a && o.return && o.return()
                            } finally {
                                if (i) throw u
                            }
                        }
                        return r.length > 0 && r.push(n), Lt(r, t)
                    };

                function _t(e) {
                    var t = [],
                        r = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var i, u = ee()(e); !(r = (i = u.next()).done); r = !0) {
                            var s = i.value;
                            s.getType && s.getType() === mt.String ? t.push(we(s.getValue())) : s.getType && s.getType() === mt.Long ? t.push(new ue.BigNumber(s.getValue())) : s.getType && s.getType() === mt.Array ? t.push(_t(s.value)) : s.getType && s.getType() === mt.Map ? t.push(zt(s)) : t.push(s.getValue ? s.getValue() : s)
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return t
                }

                function zt(e) {
                    var t = new bt.a,
                        r = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var i, u = ee()(kt()(e.value)); !(r = (i = u.next()).done); r = !0) {
                            var s = i.value,
                                o = e.value[s];
                            o.type && o.type === mt.Map ? t.set(s, zt(o)) : t.set(s, o)
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return t
                }

                function Ut(e) {
                    var t = parseInt(e.read(1), 16);
                    if (t === wt.ByteArray) return e.readNextBytes();
                    if (t === wt.Boolean) return e.readBoolean();
                    if (t === wt.Integer) return Te(e.readNextBytes()).toNumber();
                    if (t === wt.Array || t === wt.Struct) {
                        for (var r = [], n = e.readNextLen(); n > 0; n--) {
                            var a = Ut(e);
                            r.push(a)
                        }
                        return r
                    }
                    if (t === wt.Map) {
                        for (var i = e.readNextLen(), u = new bt.a, s = i; s > 0; s--) {
                            var o = Se(Ut(e)),
                                c = Ut(e);
                            u.set(o, c)
                        }
                        return u
                    }
                    throw Error("Invalid parameter type: " + t)
                }
                var Lt = function e(t) {
                        for (var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = "", a = t.length - 1; a >= 0; a--) {
                            var i = t[a];
                            if ("string" == typeof i) n += Bt(i);
                            else if ("number" == typeof i) n += Tt(i, r);
                            else if ("boolean" == typeof i) n += Pt(i);
                            else if (i instanceof ue.BigNumber) n += It(i, r);
                            else if (i instanceof bt.a) n += Dt(i, r);
                            else if (i instanceof Rt) {
                                var u = Nt(i);
                                n += Bt(u)
                            } else i instanceof Array && (n += e(_t(i), r), n += Tt(i.length, r), n += Ee(ne.PACK))
                        }
                        return n
                    },
                    Mt = function(e, t) {
                        for (var r = "", n = t.length - 1; n > -1; n--) switch (t[n].getType()) {
                            case mt.Boolean:
                                r += Pt(t[n].getValue());
                                break;
                            case mt.Integer:
                                r += Tt(t[n].getValue());
                                break;
                            case mt.String:
                                var a = we(t[n].getValue());
                                r += Bt(a);
                                break;
                            case mt.ByteArray:
                                r += Bt(t[n].getValue());
                                break;
                            case mt.Map:
                                var i = Ct(t[n].getValue());
                                r += Bt(i);
                                break;
                            case mt.Struct:
                                var u = Nt(t[n].getValue());
                                r += Bt(u);
                                break;
                            default:
                                throw new Error("Unsupported param type: " + R()(t[n]))
                        }
                        return r += Tt(t.length), (r += Ee(ne.PACK)) + Bt(we(e))
                    },
                    Kt = function(e) {
                        var t = [],
                            r = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var i, u = ee()(e); !(r = (i = u.next()).done); r = !0) {
                                var s = i.value,
                                    o = void 0;
                                switch (s.getType()) {
                                    case mt.String:
                                        o = {
                                            type: "string",
                                            value: s.getValue()
                                        };
                                        break;
                                    case mt.Int:
                                        o = {
                                            type: "int",
                                            value: s.getValue().toString()
                                        };
                                        break;
                                    case mt.Long:
                                        o = {
                                            type: "int64",
                                            value: s.getValue()
                                        };
                                        break;
                                    case mt.IntArray:
                                    case mt.LongArray:
                                        o = {
                                            type: "int_array",
                                            value: s.getValue()
                                        }
                                }
                                t.push(o)
                            }
                        } catch (e) {
                            n = !0, a = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                        var c = {
                            Params: t
                        };
                        return we(R()(c))
                    },
                    Vt = function() {
                        function e(t) {
                            if (S()(this, e), 40 !== t.length && 34 !== t.length) throw g.INVALID_PARAMS;
                            this.value = t
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                return new e(t.read(20))
                            }
                        }, {
                            key: "fromPubKey",
                            value: function(t) {
                                return new e(ze(dt(t)))
                            }
                        }, {
                            key: "fromOntid",
                            value: function(t) {
                                return new e(t.substr(8))
                            }
                        }, {
                            key: "fromVmCode",
                            value: function(t) {
                                return new e(ze(t))
                            }
                        }, {
                            key: "fromMultiPubKeys",
                            value: function(t, r) {
                                var n = r.length;
                                if (t <= 0 || t > n || n > 24) throw g.INVALID_PARAMS;
                                r.sort(ot);
                                var a = "";
                                a += lt(t);
                                var i = !0,
                                    u = !1,
                                    s = void 0;
                                try {
                                    for (var o, c = ee()(r); !(i = (o = c.next()).done); i = !0) {
                                        var l = o.value;
                                        a += Bt(l.serializeHex())
                                    }
                                } catch (e) {
                                    u = !0, s = e
                                } finally {
                                    try {
                                        !i && c.return && c.return()
                                    } finally {
                                        if (u) throw s
                                    }
                                }
                                return a += lt(n), new e(ze(a += Ee(ne.CHECKMULTISIG)))
                            }
                        }, {
                            key: "generateOntid",
                            value: function(t) {
                                return "did:ont:" + e.fromPubKey(t).toBase58()
                            }
                        }]), k()(e, [{
                            key: "toBase58",
                            value: function() {
                                return 34 === this.value.length ? this.value : Gt(this.value)
                            }
                        }, {
                            key: "toHexString",
                            value: function() {
                                var e;
                                return e = 40 === this.value.length ? this.value : Wt(this.value), Pe(e)
                            }
                        }, {
                            key: "serialize",
                            value: function() {
                                return 40 === this.value.length ? this.value : Wt(this.value)
                            }
                        }, {
                            key: "getB58Checksum",
                            value: function() {
                                var e = this.toBase58();
                                return He(re.SHA256(e).toString()).slice(0, 8)
                            }
                        }]), e
                    }();

                function Gt(e) {
                    var t = T + e,
                        r = t + He(He(t)).slice(0, 8);
                    return te.encode(new Buffer(r, "hex"))
                }

                function Wt(e) {
                    var t = pe(te.decode(e)).substr(2, 40);
                    if (e !== Gt(t)) throw new Error("[addressToU160] decode encoded verify failed");
                    return t
                }
                var Jt = r(3),
                    Ft = r.n(Jt),
                    qt = r(6),
                    jt = r.n(qt),
                    Yt = r(31),
                    Qt = r(17),
                    Xt = r(37);

                function Zt(e, t, r) {
                    var n = [];
                    return Xt(e.normalize("NFC"), ye(t), {
                        N: r.cost,
                        r: r.blockSize,
                        p: r.parallel,
                        dkLen: r.size
                    }, (function(e) {
                        n = e
                    })), new Buffer(n)
                }

                function $t(e, t, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : I,
                        a = ut.deserializeHex(new Be(t)),
                        i = Zt(r, Vt.fromPubKey(a).getB58Checksum(), n).toString("hex"),
                        u = i.slice(0, 32),
                        s = i.slice(64),
                        o = re.enc.Hex.parse(u),
                        c = re.AES.encrypt(re.enc.Hex.parse(e), re.enc.Hex.parse(s), {
                            mode: re.mode.CTR,
                            padding: re.pad.NoPadding,
                            iv: o
                        }).ciphertext.toString();
                    return new Buffer(c, "hex").toString("base64")
                }

                function er(e, t, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : I,
                        a = Buffer.from(e, "base64").toString("hex"),
                        i = "";
                    if ("string" == typeof r && 8 === r.length) i = r;
                    else {
                        if (!(r instanceof Vt)) throw g.INVALID_PARAMS;
                        i = r.getB58Checksum()
                    }
                    var u = Zt(t, i, n).toString("hex"),
                        s = u.slice(0, 32),
                        o = u.slice(64),
                        c = re.enc.Hex.parse(s),
                        l = {
                            ciphertext: re.enc.Hex.parse(a),
                            salt: "",
                            iv: ""
                        };
                    return re.AES.decrypt(l, re.enc.Hex.parse(o), {
                        mode: re.mode.CTR,
                        padding: re.pad.NoPadding,
                        iv: c
                    }).toString()
                }

                function tr(e, t) {
                    var r = "";
                    if ("string" == typeof e && 8 === e.length) r = e;
                    else {
                        if (!(e instanceof Vt)) throw g.INVALID_PARAMS;
                        r = e.getB58Checksum()
                    }
                    var n = ut.deserializeHex(new Be(t));
                    if (Vt.fromPubKey(n).getB58Checksum() !== r) throw console.log("keyphrase error."), g.Decrypto_ERROR
                }

                function rr(e, t, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : I,
                        a = ut.deserializeHex(new Be(t)),
                        i = Vt.fromPubKey(a).getB58Checksum(),
                        u = Zt(r, i, n).toString("hex"),
                        s = u.slice(0, 64),
                        o = u.slice(64),
                        c = be(e, s),
                        l = re.AES.encrypt(re.enc.Hex.parse(c), re.enc.Hex.parse(o), {
                            mode: re.mode.ECB,
                            padding: re.pad.NoPadding
                        }),
                        h = B + N + i + l.ciphertext.toString();
                    return te.encode(Buffer.from(h, "hex"))
                }

                function nr(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I,
                        n = pe(te.decode(e)),
                        a = n.substr(6, 8),
                        i = n.substr(-64),
                        u = Zt(t, a, r).toString("hex"),
                        s = u.slice(0, 64),
                        o = u.slice(64),
                        c = {
                            ciphertext: re.enc.Hex.parse(i),
                            salt: "",
                            iv: ""
                        };
                    return be(re.AES.decrypt(c, re.enc.Hex.parse(o), {
                        mode: re.mode.ECB,
                        padding: re.pad.NoPadding
                    }).toString(), s)
                }

                function ar(e, t, r) {
                    var n = pe(te.decode(e)).substr(6, 8),
                        a = ut.deserializeHex(new Be(r));
                    if (Vt.fromPubKey(a).getB58Checksum() !== n) throw console.log("keyphrase error."), g.Decrypto_ERROR
                }

                function ir(e, t, r, n) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : I;
                    if (!We(e)) throw new Error(g.INVALID_PARAMS + ", Invalid private key");
                    var i = Zt(n, r, a),
                        u = i.slice(0, 12),
                        s = i.slice(32),
                        o = u,
                        c = new Buffer(t.toBase58()),
                        l = Object(Qt.createCipheriv)("aes-256-gcm", s, o);
                    l.setAAD(c);
                    var h = Buffer.from(e, "hex"),
                        f = l.update(h),
                        d = l.final(),
                        v = l.getAuthTag();
                    return f = Buffer.concat([f, d]), Buffer.concat([f, v]).toString("base64")
                }

                function ur(e, t, r, n) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : I;
                    if (32 !== r.length) throw g.INVALID_PARAMS;
                    var i = Buffer.from(e, "base64"),
                        u = i.slice(0, i.length - 16),
                        s = i.slice(i.length - 16),
                        o = Zt(n, r, a),
                        c = o.slice(0, 12),
                        l = o.slice(32),
                        h = c,
                        f = new Buffer(t.toBase58()),
                        d = Object(Qt.createDecipheriv)("aes-256-gcm", l, h);
                    d.setAAD(f), d.setAuthTag(s);
                    var v = d.update(u).toString("hex");
                    try {
                        v += d.final().toString("hex")
                    } catch (e) {
                        throw g.Decrypto_ERROR
                    }
                    return v
                }
                var sr = r(15),
                    or = function() {
                        function e(t, r, n) {
                            S()(this, e), this.algorithm = t, this.value = r, this.publicKeyId = n
                        }
                        return k()(e, null, [{
                            key: "deserializeJWT",
                            value: function(t, r, n) {
                                return new e(r, sr.decode(t, "hex"), n)
                            }
                        }, {
                            key: "deserializePgp",
                            value: function(t) {
                                var r = new Buffer(t.Value, "base64").toString("hex"),
                                    n = e.deserializeHex(r).value;
                                return new e(je.fromLabel(t.Algorithm), n)
                            }
                        }, {
                            key: "deserializeHex",
                            value: function(t) {
                                if (t.length < 4) throw new Error("Invalid params.");
                                var r = new Be(t),
                                    n = parseInt(r.read(1), 16);
                                return new e(je.fromHex(n), t.substr(2))
                            }
                        }]), k()(e, [{
                            key: "serializeHex",
                            value: function() {
                                var e = "";
                                return (e += Ee(this.algorithm.hex)) + this.value
                            }
                        }, {
                            key: "serializePgp",
                            value: function(e) {
                                return {
                                    PublicKeyId: e,
                                    Format: "pgp",
                                    Value: new Buffer(this.serializeHex(), "hex").toString("base64"),
                                    Algorithm: this.algorithm.label
                                }
                            }
                        }, {
                            key: "serializeJWT",
                            value: function() {
                                return sr.encode(this.value, "hex")
                            }
                        }]), e
                    }(),
                    cr = r(29),
                    lr = function(e) {
                        function t() {
                            return S()(this, t), $e()(this, (t.__proto__ || Xe()(t)).apply(this, arguments))
                        }
                        return tt()(t, e), k()(t, [{
                            key: "sign",
                            value: function(e, t, r) {
                                if (void 0 === t && (t = this.algorithm.defaultSchema), !this.isSchemaSupported(t)) throw new Error("Signature schema does not match key type.");
                                "string" != typeof e && (e = e.getSignContent());
                                var n;
                                n = t === je.SM2withSM3 ? e : this.computeHash(e, t);
                                var a = this.computeSignature(n, t);
                                return new or(t, a, r)
                            }
                        }, {
                            key: "signAsync",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t, r, n) {
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", this.sign(t, r, n));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t, r, n) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getPublicKey",
                            value: function() {
                                switch (this.algorithm) {
                                    case Ye.ECDSA:
                                        return this.getEcDSAPublicKey();
                                    case Ye.EDDSA:
                                        return this.getEdDSAPublicKey();
                                    case Ye.SM2:
                                        return this.getSM2PublicKey();
                                    default:
                                        throw new Error("Unsupported signature schema.")
                                }
                            }
                        }, {
                            key: "decrypt",
                            value: function(e, r, n, a) {
                                24 === n.length && Ge(n) && (n = Buffer.from(n, "base64").toString("hex"));
                                var i = new t(ur(this.key, r, n, e, a), this.algorithm, this.parameters),
                                    u = i.getPublicKey();
                                if (Vt.fromPubKey(u).toBase58() !== r.toBase58()) throw g.Decrypto_ERROR;
                                return i
                            }
                        }, {
                            key: "encrypt",
                            value: function(e, r, n, a) {
                                var i = this.getPublicKey();
                                if (Vt.fromPubKey(i).toBase58() !== r.toBase58()) throw g.INVALID_ADDR;
                                return new t(ir(this.key, r, n, e, a), this.algorithm, this.parameters)
                            }
                        }, {
                            key: "getEcDSAPublicKey",
                            value: function() {
                                var e = new ae.ec(this.parameters.curve.preset).keyFromPrivate(this.key, "hex").getPublic(!0, "hex");
                                return new ut(e, this.algorithm, this.parameters)
                            }
                        }, {
                            key: "getEdDSAPublicKey",
                            value: function() {
                                var e = new ae.eddsa(this.parameters.curve.preset).keyFromSecret(this.key, "hex").getPublic(!0, "hex");
                                return new ut(e, this.algorithm, this.parameters)
                            }
                        }, {
                            key: "getSM2PublicKey",
                            value: function() {
                                var e = ie.sm2.SM2KeyPair(null, this.key).pubToString("compress");
                                return new ut(e, this.algorithm, this.parameters)
                            }
                        }, {
                            key: "computeSignature",
                            value: function(e, t) {
                                switch (t) {
                                    case je.ECDSAwithSHA224:
                                    case je.ECDSAwithSHA256:
                                    case je.ECDSAwithSHA384:
                                    case je.ECDSAwithSHA512:
                                    case je.ECDSAwithSHA3_224:
                                    case je.ECDSAwithSHA3_256:
                                    case je.ECDSAwithSHA3_384:
                                    case je.ECDSAwithSHA3_512:
                                    case je.ECDSAwithRIPEMD160:
                                        return this.computeEcDSASignature(e);
                                    case je.EDDSAwithSHA512:
                                        return this.computeEdDSASignature(e);
                                    case je.SM2withSM3:
                                        return this.computeSM2Signature(e);
                                    default:
                                        throw new Error("Unsupported signature schema.")
                                }
                            }
                        }, {
                            key: "computeEcDSASignature",
                            value: function(e) {
                                var t = new ae.ec(this.parameters.curve.preset).sign(e, this.key, {
                                    canonical: !0
                                });
                                return Buffer.concat([t.r.toArrayLike(Buffer, "be", 32), t.s.toArrayLike(Buffer, "be", 32)]).toString("hex")
                            }
                        }, {
                            key: "computeEdDSASignature",
                            value: function(e) {
                                return new ae.eddsa(this.parameters.curve.preset).sign(e, this.key).toHex().toLowerCase()
                            }
                        }, {
                            key: "computeSM2Signature",
                            value: function(e) {
                                var t = ie.sm2.SM2KeyPair(null, this.key).sign(ye(e));
                                return we(O + "\0") + t.r + t.s
                            }
                        }, {
                            key: "serializeWIF",
                            value: function() {
                                return Yt.encode(128, Buffer.from(this.key, "hex"), !0)
                            }
                        }], [{
                            key: "random",
                            value: function(e, r) {
                                return void 0 === e && (e = Ye.fromLabel(D.algorithm)), void 0 === r && (r = at.deserializeJson(D.parameters)), new t(pe(ve(32)), e, r)
                            }
                        }, {
                            key: "deserializeWIF",
                            value: function(e) {
                                return new t(pe(Yt.decode(e, 128).privateKey))
                            }
                        }, {
                            key: "generateFromMnemonic",
                            value: function(e) {
                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j;
                                if (e.split(" ").length < 12) throw g.INVALID_PARAMS;
                                var n = P.mnemonicToSeedHex(e),
                                    a = cr.fromMasterSeed(Buffer.from(n, "hex")).derive(r);
                                return new t(Buffer.from(a.privateKey).toString("hex"))
                            }
                        }]), t
                    }(it),
                    hr = [],
                    fr = new(function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, [{
                            key: "getType",
                            value: function() {
                                return ""
                            }
                        }, {
                            key: "deserialize",
                            value: function(e) {
                                if (null != e.key) return new lr(e.key, Ye.fromLabel(e.algorithm), at.deserializeJson(e.parameters));
                                throw new Error("Unsupported Key type.")
                            }
                        }]), e
                    }());

                function dr(e) {
                    hr.push(e)
                }

                function vr(e) {
                    if (null == e.external) return fr.deserialize(e);
                    var t = !0,
                        r = !1,
                        n = void 0;
                    try {
                        for (var a, i = ee()(hr); !(t = (a = i.next()).done); t = !0) {
                            var u = a.value;
                            if (u.getType() === e.external.type) return u.deserialize(e)
                        }
                    } catch (e) {
                        r = !0, n = e
                    } finally {
                        try {
                            !t && i.return && i.return()
                        } finally {
                            if (r) throw n
                        }
                    }
                    throw new Error("Unsupported Key type.")
                }
                var yr, pr = r(36),
                    gr = function() {
                        function e(t) {
                            S()(this, e), this.param = new wr(t), this.sk = new Ar(this.param)
                        }
                        return k()(e, [{
                            key: "GenerateSk",
                            value: function() {
                                return this.sk.Rand(), this.sk
                            }
                        }, {
                            key: "GenerateKeyPair",
                            value: function() {
                                this.sk = Ar.GenerateSk(this.param), this.pk = this.sk.GenerateIssuerPublicKey()
                            }
                        }, {
                            key: "SetAttributeSet",
                            value: function(e) {
                                this.AttributeName = e, this.pk.GenerateAttr(e)
                            }
                        }, {
                            key: "Sign",
                            value: function(e, t) {
                                var r = this.param.getRandBN(),
                                    n = this.param.getRandBN(),
                                    a = new this.param.ECP;
                                a.copy(this.param.g1), a.add(this.param.PAIR.G1mul(this.pk.h0, n)), a.add(e);
                                for (var i = 0; i < this.pk.attr.length; i++) a.add(this.param.PAIR.G1mul(this.pk.h[i], t[i]));
                                var u = new this.param.ECP,
                                    s = new this.param.BIG;
                                s.copy(r), s.add(this.sk.value), s.invmodp(this.param.order), u = this.param.PAIR.G1mul(a, s);
                                var o = new xr(this.param);
                                return o.Set(u, a, r, n, t), o
                            }
                        }, {
                            key: "GetPk",
                            value: function() {
                                return kr.COPY(this.pk)
                            }
                        }, {
                            key: "GenerateNonce",
                            value: function() {
                                return this.param.getRandBN()
                            }
                        }, {
                            key: "VerifyCredentialRequest",
                            value: function(e) {
                                return this.pk.VerifyCredentialRequest(e)
                            }
                        }]), e
                    }(),
                    mr = function() {
                        function e(t) {
                            S()(this, e), this.param = new wr(t)
                        }
                        return k()(e, [{
                            key: "GenerateSk",
                            value: function() {
                                return this.sk = Ar.GenerateSk(this.param), this.sk
                            }
                        }, {
                            key: "SetIpk",
                            value: function(e) {
                                this.ipk = kr.COPY(e)
                            }
                        }, {
                            key: "GenerateCrendentialRequest",
                            value: function(e) {
                                if (void 0 !== this.ipk) {
                                    var t = this.ipk,
                                        r = this.param.PAIR.G1mul(t.h_sk, this.sk.value),
                                        n = this.param.getRandBN(),
                                        a = this.param.PAIR.G1mul(t.h_sk, n),
                                        i = this.param.hashToBN(a, t.h_sk, r, e),
                                        u = this.param.BIG.modmul(i, this.sk.value, this.param.order);
                                    u.add(n), u.mod(this.param.order);
                                    var s = {
                                            C: i,
                                            S: u
                                        },
                                        o = this.param.genAttrBN(t.attr);
                                    return this.Nym = r, this.attrs = o, {
                                        Nym: r,
                                        pi: s,
                                        nonce: e,
                                        attrs: o
                                    }
                                }
                                console.log("Please set ipk first.")
                            }
                        }, {
                            key: "VerifyBBSplus",
                            value: function(e) {
                                var t = new this.param.ECP2;
                                t.copy(this.ipk.w), t.add(this.param.PAIR.G2mul(this.param.g2, e.sig.e)), t.affine();
                                var r = new this.param.ECP;
                                r.copy(e.sig.A), r.affine();
                                var n = this.param.PAIR.ate(t, r);
                                n = this.param.PAIR.fexp(n);
                                var a = new this.param.ECP;
                                a.copy(this.param.g1), a.add(this.param.PAIR.G1mul(this.ipk.h0, e.sig.s)), a.add(this.Nym);
                                for (var i = 0; i < e.attrs.length; i++) a.add(this.param.PAIR.G1mul(this.ipk.h[i], e.attrs[i]));
                                a.affine();
                                var u = this.param.PAIR.ate(this.param.g2, a);
                                return u = this.param.PAIR.fexp(u), n.equals(u)
                            }
                        }, {
                            key: "SetCredential",
                            value: function(e) {
                                return this.Cred = new xr(this.param), this.Cred.Copy(e), !0
                            }
                        }, {
                            key: "Prove",
                            value: function(e) {
                                var t = this.ipk,
                                    r = this.Cred,
                                    n = this.param.getRandBN(),
                                    a = this.param.PAIR.G1mul(r.sig.A, n),
                                    i = new this.param.BIG(0);
                                i.copy(n), i.invmodp(this.param.order);
                                var u = new this.param.BIG(0);
                                u.copy(r.sig.e), u = this.param.BIG.modneg(u, this.param.order);
                                var s = this.param.PAIR.G1mul(a, u);
                                s.add(this.param.PAIR.G1mul(r.sig.B, n));
                                var o = this.param.getRandBN(),
                                    c = new this.param.BIG(0);
                                c.copy(o), c = this.param.BIG.modneg(c, this.param.order);
                                var l = this.param.PAIR.G1mul(r.sig.B, n);
                                l.add(this.param.PAIR.G1mul(t.h0, c));
                                var h = this.param.BIG.modmul(o, i, this.param.order);
                                (h = this.param.BIG.modneg(h, this.param.order)).add(r.sig.s), h.mod(this.param.order);
                                for (var f = [], d = 0; d < e.length; d++) 0 === e[d] ? f[d] = this.param.getRandBN() : f[d] = !1;
                                var v = this.param.getRandBN(),
                                    y = this.param.getRandBN(),
                                    p = this.param.getRandBN(),
                                    g = this.param.getRandBN(),
                                    m = this.param.getRandBN(),
                                    w = this.param.PAIR.G1mul(t.h_sk, m),
                                    S = this.param.PAIR.G1mul(a, v);
                                S.add(this.param.PAIR.G1mul(t.h0, y));
                                var A = this.param.PAIR.G1mul(l, p);
                                A.add(this.param.PAIR.G1mul(t.h0, g)), A.add(this.param.PAIR.G1mul(w, new this.param.BIG(-1)));
                                for (var k = 0; k < f.length; k++) !1 !== f[k] && A.add(this.param.PAIR.G1mul(t.h[k], f[k]));
                                var x = this.param.hashToBN(a, s, l, this.Nym, S, A, this.param.g1, t.h0, t.h, t.w),
                                    b = this.param.getRandBN(),
                                    E = this.param.hashToBN(b, x, e, this.attrs),
                                    R = new this.param.BIG(0);
                                R.copy(m), R.add(this.param.BIG.modmul(E, this.sk.value, this.param.order)), R.mod(this.param.order);
                                for (var P = [], T = 0; T < e.length; T++) 0 === e[T] ? (P[T] = new this.param.BIG(0), P[T].copy(f[T]), P[T].sub(this.param.BIG.modmul(E, this.attrs[T], this.param.order)), P[T].mod(this.param.order)) : P[T] = !1;
                                var I = new this.param.BIG(0);
                                I.copy(v), I.sub(this.param.BIG.modmul(E, r.sig.e, this.param.order)), I.mod(this.param.order);
                                var B = new this.param.BIG(0);
                                B.copy(y), B.add(this.param.BIG.modmul(E, o, this.param.order)), B.mod(this.param.order);
                                var N = new this.param.BIG(0);
                                N.copy(p), N.add(this.param.BIG.modmul(E, i, this.param.order)), N.mod(this.param.order);
                                var C = new this.param.BIG(0);
                                C.copy(g), C.sub(this.param.BIG.modmul(E, h, this.param.order)), C.mod(this.param.order);
                                var D = {
                                    c: E,
                                    s_sk: R,
                                    s_a: P,
                                    s_e: I,
                                    s_r2: B,
                                    s_r3: N,
                                    s_s_: C,
                                    nonce: b
                                };
                                return {
                                    A_: a,
                                    _A: s,
                                    B_: l,
                                    Nym: this.Nym,
                                    pi: D
                                }
                            }
                        }, {
                            key: "Verify",
                            value: function(e, t, r) {
                                var n = this.ipk,
                                    a = new this.param.ECP(0);
                                if (e.A_.equals(a)) return console.log("A' == O return true, verify failed."), !1;
                                var i = new this.param.ECP;
                                i.copy(e.A_);
                                var u = new this.param.ECP2;
                                u.copy(n.w);
                                var s = new this.param.ECP;
                                s.copy(e._A);
                                var o = new this.param.ECP2;
                                o.copy(this.param.g2), i.affine(), u.affine(), s.affine(), o.affine();
                                var c = this.param.PAIR.ate(u, i),
                                    l = this.param.PAIR.ate(o, s);
                                if (c = this.param.PAIR.fexp(c), l = this.param.PAIR.fexp(l), !c.equals(l)) return console.log("e(A', w) == e(_A, g2) return false, verify failed."), !1;
                                s.copy(e._A);
                                var h = this.param.PAIR.G1mul(i, e.pi.s_e);
                                h.add(this.param.PAIR.G1mul(n.h0, e.pi.s_r2)), s.sub(e.B_), h.add(this.param.PAIR.G1mul(s, this.param.BIG.modneg(e.pi.c, this.param.order)));
                                var f = this.param.PAIR.G1mul(e.B_, e.pi.s_r3);
                                f.add(this.param.PAIR.G1mul(n.h0, e.pi.s_s_)), f.add(this.param.PAIR.G1mul(n.h_sk, this.param.BIG.modneg(e.pi.s_sk, this.param.order)));
                                var d = new this.param.ECP;
                                d.copy(this.param.g1);
                                for (var v = 0; v < t.length; v++) 0 === t[v] ? f.add(this.param.PAIR.G1mul(n.h[v], e.pi.s_a[v])) : d.add(this.param.PAIR.G1mul(n.h[v], r[v]));
                                f.add(this.param.PAIR.G1mul(d, this.param.BIG.modneg(e.pi.c, this.param.order)));
                                var y = this.param.hashToBN(e.A_, e._A, e.B_, e.Nym, h, f, this.param.g1, n.h0, n.h, n.w),
                                    p = this.param.hashToBN(e.pi.nonce, y, t, r);
                                return 0 === this.param.BIG.comp(p, e.pi.c) || (console.log("c == H(nonce, H(A', _A, B', Nym, ~t1, ~t2, g1, HRand, h1, ... , hL, w), (D, I)) return false, verify failed."), !1)
                            }
                        }]), e
                    }(),
                    wr = function() {
                        function e(t) {
                            S()(this, e), this.curve = t, this.ctx = new pr(t), this.PAIR = this.ctx.PAIR, this.ECP = this.ctx.ECP, this.ECP2 = this.ctx.ECP2, this.BIG = this.ctx.BIG, this.rng = new this.ctx.RAND, this.g1 = this.getG1Generator(), this.g2 = this.getG2Generator(), this.order = this.getOrder()
                        }
                        return k()(e, [{
                            key: "getG1Generator",
                            value: function() {
                                var e = new this.ctx.ECP(0),
                                    t = new this.ctx.BIG(0),
                                    r = new this.ctx.BIG(0);
                                return t.rcopy(this.ctx.ROM_CURVE.CURVE_Gx), r.rcopy(this.ctx.ROM_CURVE.CURVE_Gy), e.setxy(t, r), e
                            }
                        }, {
                            key: "getG2Generator",
                            value: function() {
                                var e = new this.ctx.ECP2(0),
                                    t = new this.ctx.BIG(0),
                                    r = new this.ctx.BIG(0),
                                    n = new this.ctx.FP2(0),
                                    a = new this.ctx.FP2(0);
                                return t.rcopy(this.ctx.ROM_CURVE.CURVE_Pxa), r.rcopy(this.ctx.ROM_CURVE.CURVE_Pxb), n.bset(t, r), t.rcopy(this.ctx.ROM_CURVE.CURVE_Pya), r.rcopy(this.ctx.ROM_CURVE.CURVE_Pyb), a.bset(t, r), e.setxy(n, a), e
                            }
                        }, {
                            key: "getOrder",
                            value: function() {
                                var e = new this.ctx.BIG(0);
                                return e.rcopy(this.ctx.ROM_CURVE.CURVE_Order), e
                            }
                        }, {
                            key: "getRandBN",
                            value: function() {
                                var e = Ue(256);
                                return this.rng.clean(), this.rng.seed(256, e), this.BIG.randomnum(this.order, this.rng)
                            }
                        }, {
                            key: "getRandG1",
                            value: function() {
                                var e = this.getRandBN();
                                return this.PAIR.G1mul(this.g1, e)
                            }
                        }, {
                            key: "getRandG2",
                            value: function() {
                                var e = this.getRandBN();
                                return this.PAIR.G2mul(this.g2, e)
                            }
                        }, {
                            key: "hashToBN",
                            value: function() {
                                for (var e = [], t = [], r = arguments.length, n = Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                                n.forEach((function(r) {
                                    Array.isArray(r) ? "number" == typeof r[0] ? (e = e.concat(r), t = []) : r.forEach((function(r) {
                                        r.toBytes(t), e = e.concat(t), t = []
                                    })) : (r.toBytes(t), e = e.concat(t), t = [])
                                }));
                                var i = new this.ctx.HASH256;
                                i.process_array(e);
                                var u = i.hash(),
                                    s = this.BIG.fromBytes(u);
                                return s.mod(this.order), s
                            }
                        }, {
                            key: "genAttrBN",
                            value: function(e) {
                                for (var t = [], r = 0; r < e.length; r++) {
                                    var n = this.getRandBN();
                                    t[r] = n
                                }
                                return t
                            }
                        }, {
                            key: "genAttrElement",
                            value: function(e) {
                                for (var t = [], r = 0; r < e.length; r++) {
                                    var n = this.getRandG1();
                                    t[r] = n
                                }
                                return t
                            }
                        }]), e
                    }(),
                    Sr = function e(t) {
                        S()(this, e), this.param = t
                    },
                    Ar = function(e) {
                        function t(e) {
                            S()(this, t);
                            var r = $e()(this, (t.__proto__ || Xe()(t)).call(this, e));
                            return r.value = new r.param.BIG(0), r
                        }
                        return tt()(t, e), k()(t, null, [{
                            key: "GenerateSk",
                            value: function(e) {
                                var r = e.getRandBN(),
                                    n = new t(e);
                                return n.setValue(r), n
                            }
                        }]), k()(t, [{
                            key: "setValue",
                            value: function(e) {
                                this.value.copy(e)
                            }
                        }, {
                            key: "GenerateIssuerPublicKey",
                            value: function() {
                                var e = this.value,
                                    t = this.param.PAIR.G2mul(this.param.g2, e),
                                    r = this.param.getRandBN(),
                                    n = this.param.PAIR.G1mul(this.param.g1, r),
                                    a = this.param.PAIR.G1mul(n, e);
                                r = this.param.getRandBN();
                                var i = this.param.PAIR.G2mul(this.param.g2, r),
                                    u = this.param.PAIR.G1mul(n, r),
                                    s = this.param.hashToBN(i, u, this.param.g2, n, t, a),
                                    o = this.param.BIG.modmul(s, e, this.param.order);
                                o.add(r), o.mod(this.param.order);
                                var c = {
                                        C: s,
                                        S: o
                                    },
                                    l = new kr(this.param);
                                return l.SetBasicValue(t, n, a, c), l
                            }
                        }, {
                            key: "ToBytes",
                            value: function() {
                                return void 0 === this.value ? "" : this.value.toBytes()
                            }
                        }, {
                            key: "FromBytes",
                            value: function(e) {
                                return this.value = this.param.BIG.fromBytes(e), this.value.toString()
                            }
                        }, {
                            key: "Rand",
                            value: function() {
                                var e = this.param.getRandBN();
                                this.setValue(e)
                            }
                        }]), t
                    }(Sr),
                    kr = function(e) {
                        function t(e) {
                            S()(this, t);
                            var r = $e()(this, (t.__proto__ || Xe()(t)).call(this, e));
                            r.w = new r.param.ECP2, r._g1 = new r.param.ECP, r._g2 = new r.param.ECP;
                            var n = new r.param.BIG,
                                a = new r.param.BIG;
                            return r.pi = {
                                C: n,
                                S: a
                            }, r.h0 = new r.param.ECP, r.h_sk = new r.param.ECP, r.attr = [], r
                        }
                        return tt()(t, e), k()(t, null, [{
                            key: "COPY",
                            value: function(e) {
                                var r = new t(e.param);
                                return r.SetBasicValue(e.w, e._g1, e._g2, e.pi), r.SetAttrValue(e.h0, e.h_sk, e.h, e.attr), r
                            }
                        }]), k()(t, [{
                            key: "SetBasicValue",
                            value: function(e, t, r, n) {
                                this.w.copy(e), this._g1.copy(t), this._g2.copy(r), this.pi.C.copy(n.C), this.pi.S.copy(n.S)
                            }
                        }, {
                            key: "SetAttrValue",
                            value: function(e, t, r, n) {
                                this.h0.copy(e), this.h_sk.copy(t), this.h = [], this.attr = [];
                                for (var a = 0; a < r.length; a++) this.h[a] = new this.param.ECP, this.h[a].copy(r[a]);
                                for (var i = 0; i < n.length; i++) this.attr[i] = n[i]
                            }
                        }, {
                            key: "GenerateAttr",
                            value: function(e) {
                                var t = this.param.genAttrElement(e),
                                    r = this.param.getRandG1(),
                                    n = this.param.getRandG1(),
                                    a = [];
                                t.forEach((function(e) {
                                    a.push(e)
                                })), this.h0 = r, this.h_sk = n, this.h = a, this.attr = e
                            }
                        }, {
                            key: "VerifyCredentialRequest",
                            value: function(e) {
                                var t = new this.param.BIG(0);
                                t.copy(e.pi.C);
                                var r = this.param.PAIR.G1mul(this.h_sk, e.pi.S);
                                r.add(this.param.PAIR.G1mul(e.Nym, this.param.BIG.modneg(t, this.param.order)));
                                var n = this.param.hashToBN(r, this.h_sk, e.Nym, e.nonce);
                                return 0 === this.param.BIG.comp(e.pi.C, n)
                            }
                        }]), t
                    }(Sr),
                    xr = function(e) {
                        function t(e) {
                            S()(this, t);
                            var r = $e()(this, (t.__proto__ || Xe()(t)).call(this, e)),
                                n = new r.param.ECP,
                                a = new r.param.ECP,
                                i = new r.param.BIG,
                                u = new r.param.BIG;
                            return r.sig = {
                                A: n,
                                B: a,
                                e: i,
                                s: u
                            }, r.attrs = [], r
                        }
                        return tt()(t, e), k()(t, [{
                            key: "Set",
                            value: function(e, t, r, n, a) {
                                this.sig.A.copy(e), this.sig.B.copy(t), this.sig.e.copy(r), this.sig.s.copy(n);
                                for (var i = 0; i < a.length; i++) this.attrs[i] = new this.param.BIG, this.attrs[i].copy(a[i])
                            }
                        }, {
                            key: "Copy",
                            value: function(e) {
                                this.Set(e.sig.A, e.sig.B, e.sig.e, e.sig.s, e.attrs)
                            }
                        }]), t
                    }(Sr),
                    br = r(30),
                    Er = function() {
                        function e(t) {
                            S()(this, e), this.encAlg = "aes-256-cbc", this.hashAlg = "sha256", this.digestSize = 32, this.keyFormat = "hex", this.compact = !0;
                            var r = t || "p256";
                            this.ec = new ae.ec(r), this.keyPair = this.ec.genKeyPair(), this.iv = Buffer.alloc(0)
                        }
                        return k()(e, [{
                            key: "generateKeyPair",
                            value: function() {
                                return this.keyPair = this.ec.genKeyPair(), {
                                    priv: this.keyPair.getPrivate("hex"),
                                    pub: this.keyPair.getPublic(this.compact, "hex")
                                }
                            }
                        }, {
                            key: "setKeyPair",
                            value: function(e) {
                                this.keyPair = this.ec.keyFromPrivate(e, "hex")
                            }
                        }, {
                            key: "getKeyPair",
                            value: function() {
                                return {
                                    priv: this.keyPair.getPrivate("hex"),
                                    pub: this.keyPair.getPublic(this.compact, "hex")
                                }
                            }
                        }, {
                            key: "enc",
                            value: function(e, t, r, n) {
                                var a = this.ec.keyFromPublic(e, "hex").getPublic(),
                                    i = this.ec.genKeyPair(),
                                    u = i.getPrivate(),
                                    s = i.getPublic(),
                                    o = a.mul(u),
                                    c = s.encode("hex"),
                                    l = o.getX().toString("hex"),
                                    h = Buffer.from(c + l, "hex"),
                                    f = this.kdf2(h, 8 * r, this.digestSize, this.hashAlg);
                                if (f) {
                                    var d = Buffer.concat(f),
                                        v = Buffer.alloc(16);
                                    n ? v = Buffer.from(n, "hex") : Qt.randomFillSync(v);
                                    var y = this.encAlg,
                                        p = Qt.createCipheriv(y, d, v);
                                    p.setAutoPadding(!1);
                                    var g = p.update(br.pad(t), "binary", "hex") + p.final("hex");
                                    return {
                                        iv: v.toString("hex"),
                                        out: c,
                                        msgCipher: g
                                    }
                                }
                            }
                        }, {
                            key: "dec",
                            value: function(e, t, r, n) {
                                var a = this.ec.keyFromPublic(t, "hex").getPublic().mul(this.keyPair.getPrivate()).getX().toString("hex"),
                                    i = Buffer.from(t + a, "hex"),
                                    u = this.kdf2(i, 8 * n, this.digestSize, this.hashAlg);
                                if (!u) return Buffer.alloc(0);
                                var s = Buffer.concat(u),
                                    o = Buffer.from(r, "hex"),
                                    c = this.encAlg,
                                    l = Qt.createDecipheriv(c, s, o);
                                l.setAutoPadding(!1);
                                var h = l.update(e, "hex", "binary") + l.final("binary"),
                                    f = br.unpad(Buffer.from(h, "binary"));
                                return Buffer.from(f)
                            }
                        }, {
                            key: "kdf2",
                            value: function(e, t, r, n) {
                                if (t < 0) return [];
                                for (var a = Math.ceil(t / 8), i = Math.ceil(a / r), u = [], s = a - (i - 1) * r, o = 1; o < i;) {
                                    var c = Qt.createHash(n).update(Buffer.concat([e, this.I2OSP(o, 4)])).digest();
                                    u[o - 1] = Buffer.alloc(s), u[o - 1] = c, o++
                                }
                                var l = Qt.createHash(n).update(Buffer.concat([e, this.I2OSP(o, 4)])).digest();
                                return u[o - 1] = Buffer.alloc(s), u[o - 1] = l, u
                            }
                        }, {
                            key: "I2OSP",
                            value: function(e, t) {
                                var r = Buffer.allocUnsafe(t);
                                return r.writeUIntBE(e, 0, t), r
                            }
                        }]), e
                    }(),
                    Rr = r(28),
                    Pr = r.n(Rr),
                    Tr = r(24),
                    Ir = r.n(Tr),
                    Br = function() {
                        function e(t) {
                            if (S()(this, e), t && t.length > 16 || t && !/^[0-9]\d*$/.test(t)) throw new Error("Invalid value." + t);
                            this.value = t || "0000000000000000"
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e,
                                    n = t.read(8);
                                for (n = Pe(n);
                                    "00" === n.substr(0, 2);) n = n.substring(2);
                                return r.value = new ue.BigNumber(n, 16).toString(), r
                            }
                        }]), k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = new ue.BigNumber(this.value).toString(16);
                                return e = e.length % 16 == 0 ? e : ("0".repeat(16) + e).substring(e.length), Pe(e)
                            }
                        }]), e
                    }(),
                    Nr = function() {
                        function e(t, r, n) {
                            S()(this, e), this.name = t, this.returntype = r, this.parameters = n
                        }
                        return k()(e, [{
                            key: "getParameter",
                            value: function(e) {
                                var t = !0,
                                    r = !1,
                                    n = void 0;
                                try {
                                    for (var a, i = ee()(this.parameters); !(t = (a = i.next()).done); t = !0) {
                                        var u = a.value;
                                        if (u.getName() === e) return u
                                    }
                                } catch (e) {
                                    r = !0, n = e
                                } finally {
                                    try {
                                        !t && i.return && i.return()
                                    } finally {
                                        if (r) throw n
                                    }
                                }
                                return null
                            }
                        }, {
                            key: "setParamsValue",
                            value: function() {
                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                for (var n = 0, a = t.length; n < a; n++)
                                    for (var i = 0; i < this.parameters.length; i++) t[n].name === this.parameters[i].getName() && this.parameters[i].setValue(t[n])
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                var e = {
                                    name: this.name,
                                    returntype: this.returntype,
                                    parameters: this.parameters
                                };
                                return R()(e)
                            }
                        }]), e
                    }(),
                    Cr = function e() {
                        S()(this, e)
                    },
                    Dr = function(e) {
                        function t() {
                            return S()(this, t), $e()(this, (t.__proto__ || Xe()(t)).apply(this, arguments))
                        }
                        return tt()(t, e), k()(t, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                return e += Ae(this.code), e += xe(this.needStorage), e += ke(this.name), e += ke(this.version), e += ke(this.author), (e += ke(this.email)) + ke(this.description)
                            }
                        }, {
                            key: "deserialize",
                            value: function(e) {
                                var t = e.readNextBytes();
                                this.code = t;
                                var r = e.read(1);
                                this.needStorage = "00" !== r;
                                var n = e.readNextBytes();
                                this.name = Se(n);
                                var a = e.readNextBytes();
                                this.version = Se(a);
                                var i = e.readNextBytes();
                                this.author = Se(i);
                                var u = e.readNextBytes();
                                this.email = Se(u);
                                var s = e.readNextBytes();
                                this.description = Se(s)
                            }
                        }]), t
                    }(Cr),
                    Or = function(e) {
                        function t() {
                            return S()(this, t), $e()(this, (t.__proto__ || Xe()(t)).call(this))
                        }
                        return tt()(t, e), k()(t, [{
                            key: "serialize",
                            value: function() {
                                return "" + Ae(this.code)
                            }
                        }, {
                            key: "deserialize",
                            value: function(e) {
                                var t = e.readNextBytes();
                                return this.code = t, this
                            }
                        }]), t
                    }(Cr);
                ! function(e) {
                    e[e.Nonce = 0] = "Nonce", e[e.Script = 32] = "Script", e[e.DescriptionUrl = 129] = "DescriptionUrl", e[e.Description = 144] = "Description"
                }(yr || (yr = {}));
                var Hr, _r = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                if (e += Ee(this.usage), this.usage === yr.Script) e += this.data;
                                else {
                                    if (this.usage !== yr.DescriptionUrl && this.usage !== yr.Description && this.usage !== yr.Nonce) throw g.INVALID_PARAMS;
                                    e += Ae(this.data)
                                }
                                return e
                            }
                        }, {
                            key: "deserialize",
                            value: function(e) {
                                var t = parseInt(e.read(1), 16),
                                    r = e.readNextLen(),
                                    n = e.read(r);
                                this.usage = t, this.data = n
                            }
                        }]), e
                    }(),
                    zr = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e, t = "",
                                    r = yt(this.sigData);
                                if (0 === this.pubKeys.length) throw new Error("No pubkeys in sig");
                                return e = 1 === this.pubKeys.length ? dt(this.pubKeys[0]) : vt(this.pubKeys, this.M), (t += Ae(r)) + Ae(e)
                            }
                        }], [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e,
                                    n = t.readNextBytes(),
                                    a = t.readNextBytes(),
                                    i = function(e) {
                                        for (var t = [], r = new Be(e); !r.isEmpty();) t.push(pt(r));
                                        return t
                                    }(n),
                                    u = function(e) {
                                        var t = new St,
                                            r = parseInt(e.substr(-2, 2), 16);
                                        if (r === ne.CHECKSIG) {
                                            var n = gt(new Be(e));
                                            return t.M = 1, t.pubKeys = [n], t
                                        }
                                        if (r === ne.CHECKMULTISIG) {
                                            var a = new Be(e),
                                                i = parseInt(a.read(1), 16) - ne.PUSH1 + 1,
                                                u = parseInt(e.substr(-4, 2), 16) - ne.PUSH1 + 1;
                                            t.M = i, t.pubKeys = [];
                                            for (var s = 0; s < u; s++) {
                                                var o = gt(a);
                                                t.pubKeys.push(o)
                                            }
                                            return t
                                        }
                                        throw new Error("Unsupported program.")
                                    }(a);
                                return r.M = u.M, r.pubKeys = u.pubKeys, r.sigData = i, r
                            }
                        }, {
                            key: "create",
                            value: function(t, r, n) {
                                var a = new e;
                                return a.M = 1, a.pubKeys = [r.getPublicKey()], a.sigData = [r.sign(t, n).serializeHex()], a
                            }
                        }, {
                            key: "createAsync",
                            value: function() {
                                var t = jt()(Ft.a.mark((function t(r, n, a) {
                                    var i;
                                    return Ft.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return (i = new e).M = 1, i.pubKeys = [n.getPublicKey()], t.next = 5, n.signAsync(r, a);
                                            case 5:
                                                return t.t0 = t.sent.serializeHex(), i.sigData = [t.t0], t.abrupt("return", i);
                                            case 8:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this)
                                })));
                                return function(e, r, n) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }]), e
                    }();
                ! function(e) {
                    e[e.BookKeeper = 2] = "BookKeeper", e[e.Claim = 3] = "Claim", e[e.Deploy = 208] = "Deploy", e[e.Invoke = 209] = "Invoke", e[e.Enrollment = 4] = "Enrollment", e[e.Vote = 5] = "Vote"
                }(Hr || (Hr = {})),
                function() {
                    function e() {
                        S()(this, e)
                    }
                    k()(e, [{
                        key: "serialize",
                        value: function() {
                            var e = "";
                            return (e += this.amount.serialize()) + this.payer.serialize()
                        }
                    }], [{
                        key: "deserialize",
                        value: function(t) {
                            var r = new e,
                                n = Br.deserialize(t),
                                a = t.read(20);
                            return r.amount = n, r.payer = new Vt(a), r
                        }
                    }])
                }();
                var Ur = function() {
                        function e() {
                            S()(this, e), this.type = 209, this.version = 0, this.txAttributes = [], this.sigs = [], this.nonce = pe(Ue(4)), this.gasPrice = new Br, this.gasLimit = new Br, this.payer = new Vt("0000000000000000000000000000000000000000")
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                return this.serializeUnsignedData() + this.serializeSignedData()
                            }
                        }, {
                            key: "serializeUnsignedData",
                            value: function() {
                                var e = "";
                                e += Ee(this.version), e += Ee(this.type), e += this.nonce, e += this.gasPrice.serialize(), e += this.gasLimit.serialize(), e += this.payer.serialize(), e += this.payload.serialize(), e += Ee(this.txAttributes.length);
                                for (var t = 0; t < this.txAttributes.length; t++) e += this.txAttributes[t].serialize();
                                return e
                            }
                        }, {
                            key: "serializeSignedData",
                            value: function() {
                                var e = "";
                                e += Ee(this.sigs.length);
                                for (var t = 0; t < this.sigs.length; t++) e += this.sigs[t].serialize();
                                return e
                            }
                        }, {
                            key: "getSignContent",
                            value: function() {
                                var e = this.serializeUnsignedData(),
                                    t = re.enc.Hex.parse(e),
                                    r = re.SHA256(t).toString();
                                return re.SHA256(re.enc.Hex.parse(r)).toString()
                            }
                        }, {
                            key: "getHash",
                            value: function() {
                                return this.getSignContent()
                            }
                        }], [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e,
                                    n = new Be(t);
                                r.version = parseInt(n.read(1), 16), r.type = parseInt(n.read(1), 16), r.nonce = n.read(4), r.gasPrice = Br.deserialize(n), r.gasLimit = Br.deserialize(n), r.payer = new Vt(n.read(20));
                                var a = void 0;
                                switch (r.type) {
                                    case Hr.Invoke:
                                        a = new Or;
                                        break;
                                    case Hr.Deploy:
                                        a = new Dr;
                                        break;
                                    default:
                                        a = new Or
                                }
                                a.deserialize(n), r.payload = a, r.txAttributes = [], r.sigs = [];
                                for (var i = n.readNextLen(), u = 0; u < i; u++) {
                                    var s = new _r;
                                    s.deserialize(n), r.txAttributes.push(s)
                                }
                                for (var o = n.readNextLen(), c = 0; c < o; c++) r.sigs.push(zr.deserialize(n));
                                return r
                            }
                        }]), e
                    }(),
                    Lr = function(e) {
                        function t() {
                            return S()(this, t), $e()(this, (t.__proto__ || Xe()(t)).apply(this, arguments))
                        }
                        return tt()(t, e), t
                    }(Ur);

                function Mr(e, t, r, n, a, i) {
                    var u = "";
                    u += t, u += Bt(we(e)), u += Bt(r.serialize()), u += Tt(0), u += Ee(ne.SYSCALL), u += Bt(we(F));
                    var s = new Or;
                    s.code = u;
                    var o = void 0;
                    return (o = "transfer" === e || "transferFrom" === e ? new Lr : new Ur).type = Hr.Invoke, o.payload = s, a && (o.gasLimit = new Br(a)), n && (o.gasPrice = new Br(n)), i && (o.payer = i), o
                }

                function Kr(e) {
                    var t = "";
                    if ("string" == typeof e) t += Bt(e);
                    else if ("boolean" == typeof e) t += Pt(e);
                    else if ("number" == typeof e) t += Tt(e);
                    else if (e instanceof ue.BigNumber) t += It(e);
                    else if (e instanceof Vt) t += Bt(e.serialize());
                    else if (e instanceof Rt) {
                        var r = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var i, u = ee()(e.list); !(r = (i = u.next()).done); r = !0) t += Kr(i.value), t += Ee(ne.DUPFROMALTSTACK), t += Ee(ne.SWAP), t += Ee(ne.APPEND)
                        } catch (e) {
                            n = !0, a = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                    }
                    return t
                }

                function Vr(e) {
                    for (var t = "", r = e.length - 1; r >= 0; r--) {
                        var n = e[r];
                        if ("string" == typeof n) t += Bt(n);
                        else if ("boolean" == typeof n) t += Pt(n);
                        else if ("number" == typeof n) t += Tt(n);
                        else if (n instanceof ue.BigNumber) t += It(n);
                        else if (n instanceof Vt) t += Bt(n.serialize());
                        else if (n instanceof Rt) {
                            t += Tt(0), t += Ee(ne.NEWSTRUCT), t += Ee(ne.TOALTSTACK);
                            var a = !0,
                                i = !1,
                                u = void 0;
                            try {
                                for (var s, o = ee()(n.list); !(a = (s = o.next()).done); a = !0) t += Kr(s.value), t += Ee(ne.DUPFROMALTSTACK), t += Ee(ne.SWAP), t += Ee(ne.APPEND)
                            } catch (e) {
                                i = !0, u = e
                            } finally {
                                try {
                                    !a && o.return && o.return()
                                } finally {
                                    if (i) throw u
                                }
                            }
                            t += Ee(ne.FROMALTSTACK)
                        } else Array.isArray(n) && (t += Vr(n), t += Tt(n.length), t += Ee(ne.PACK))
                    }
                    return t
                }
                var Gr = "0000000000000000000000000000000000000001",
                    Wr = "0000000000000000000000000000000000000002";

                function Jr(e) {
                    if (e === W.ONT) return new Vt(Gr);
                    if (e === W.ONG) return new Vt(Wr);
                    throw new Error("Error token type.")
                }

                function Fr(e) {
                    var t = new ue.BigNumber(e);
                    if (!t.isInteger() || t.lte(new ue.BigNumber(0))) throw new Error("Amount is invalid.")
                }

                function qr(e, t, r, n, a, i, u) {
                    Fr(n);
                    var s = new ue.BigNumber(n),
                        o = new Rt;
                    o.add(t, r, s);
                    var c = [];
                    c.push([o]);
                    var l = Jr(e),
                        h = Mr("transfer", Vr(c), l, a, i);
                    return h.tokenType = e, h.from = t, h.to = r, h.amount = n, h.method = "transfer", h.payer = u || t, h
                }

                function jr(e, t, r, n, a) {
                    var i = [],
                        u = !0,
                        s = !1,
                        o = void 0;
                    try {
                        for (var c, l = ee()(t); !(u = (c = l.next()).done); u = !0) {
                            var h = c.value;
                            Fr(h.value);
                            var f = new Rt;
                            f.add(h.from, h.to, new ue.BigNumber(h.value)), i.push(f)
                        }
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            !u && l.return && l.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    var d = [];
                    d.push(i);
                    var v = Mr("transfer", Vr(d), Jr(e), r, n);
                    return a && (v.payer = a), v
                }

                function Yr(e, t, r, n, a, i) {
                    if (r.length !== n.length) throw new Error("Params error.");
                    for (var u = [], s = 0; s < r.length; s++) {
                        Fr(n[s]);
                        var o = new Rt;
                        o.add(t, r[s], new ue.BigNumber(n[s])), u.push(o)
                    }
                    var c = [];
                    c.push(u);
                    var l = Jr(e),
                        h = Mr("transfer", Vr(c), l, a, i);
                    return h.payer = t, h
                }

                function Qr(e, t, r, n, a, i) {
                    Fr(r);
                    var u = new ue.BigNumber(r),
                        s = [],
                        o = new Rt;
                    o.add(e, new Vt(Gr), t, u), s.push(o);
                    var c = Mr("transferFrom", Vr(s), new Vt(Wr), a, i);
                    return c.payer = n, c.tokenType = "ONG", c.from = e, c.to = t, c.amount = r, c.method = "transferFrom", c
                }

                function Xr(e, t, r) {
                    if ("ont" !== (e = e.toLowerCase()) && "ong" !== e) throw g.INVALID_PARAMS;
                    var n;
                    n = "ong" === e ? Wr : Gr;
                    var a = [],
                        i = new Rt;
                    return i.add(t, r), a.push(i), Mr("allowance", Vr(a), new Vt(n), "0", "0")
                }

                function Zr(e, t) {
                    if ("ont" !== (e = e.toLowerCase()) && "ong" !== e) throw g.INVALID_PARAMS;
                    var r;
                    return r = "ong" === e ? Wr : Gr, Mr("balanceOf", Ae(t.serialize()), new Vt(r), "0", "0")
                }

                function $r(e) {
                    var t = Ur.deserialize(e),
                        r = t.payload.serialize(),
                        n = r.lastIndexOf("14000000000000000000000000000000000000000"),
                        a = r.lastIndexOf("140000000000000000000000000000000000000002");
                    if (n > 0 && "1" === r.substr(n + 41, 1)) t.tokenType = "ONT";
                    else {
                        if (!(n > 0 && "2" === r.substr(n + 41, 1))) throw new Error("Not a transfer tx");
                        t.tokenType = "ONG"
                    }
                    var i = Math.max(n, a),
                        u = r.substring(0, i),
                        s = u.indexOf("6a7cc86c") + 8;
                    if ("51c1" === u.substr(s, 4)) {
                        var o = u.substring(s + 6);
                        t.method = Se(o)
                    } else {
                        var c = u.substring(s + 2);
                        t.method = Se(c)
                    }
                    if ("transfer" === t.method) {
                        var l = new Be(u);
                        l.pos += 10;
                        var h = new Vt(l.read(20));
                        t.from = h, l.pos += 8;
                        var f = new Vt(l.read(20));
                        t.to = f, l.pos += 6;
                        var d = parseInt(l.read(1), 16);
                        if ("6a7cc8" === l.str.substr(l.pos, 6)) t.amount = d - 80;
                        else {
                            var v = qe.fromHexstr(l.read(d)).value;
                            t.amount = new ue.BigNumber(v).toString()
                        }
                    } else {
                        if ("transferFrom" !== t.method) throw new Error("Not a transfer tx");
                        var y = new Be(u);
                        y.pos += 10;
                        var p = new Vt(y.read(20));
                        t.from = p, y.pos += 56;
                        var g = new Vt(y.read(20));
                        t.to = g, y.pos += 6;
                        var m = parseInt(y.read(1), 16);
                        if ("6a7cc8" === y.str.substr(y.pos, 6)) t.amount = m - 80;
                        else {
                            var w = qe.fromHexstr(y.read(m)).value;
                            t.amount = new ue.BigNumber(w).toString()
                        }
                    }
                    return t
                }
                var en = "0000000000000000000000000000000000000003",
                    tn = "regIDWithPublicKey",
                    rn = "regIDWithAttributes",
                    nn = "addAttributes",
                    an = "removeAttribute",
                    un = "getAttributes",
                    sn = "getDDO",
                    on = "addKey",
                    cn = "removeKey",
                    ln = "getPublicKeys",
                    hn = "addRecovery",
                    fn = "changeRecovery",
                    dn = "getKeyState";

                function vn(e, t, r, n, a) {
                    var i = tn;
                    "did" === e.substr(0, 3) && (e = we(e));
                    var u = new Rt;
                    return u.add(e, t.serializeHex()), Mr(i, Vr([u]), new Vt(en), r, n, a)
                }

                function yn(e, t, r, n, a, i) {
                    var u = rn;
                    "did" === e.substr(0, 3) && (e = we(e));
                    var s = t.length,
                        o = new Rt;
                    o.add(e, r.serializeHex(), s);
                    var c = !0,
                        l = !1,
                        h = void 0;
                    try {
                        for (var f, d = ee()(t); !(c = (f = d.next()).done); c = !0) {
                            var v = f.value,
                                y = we(v.key),
                                p = we(v.type),
                                g = we(v.value);
                            o.add(y, p, g)
                        }
                    } catch (e) {
                        l = !0, h = e
                    } finally {
                        try {
                            !c && d.return && d.return()
                        } finally {
                            if (l) throw h
                        }
                    }
                    return Mr(u, Vr([o]), new Vt(en), n, a, i)
                }

                function pn(e, t, r, n, a, i) {
                    var u = nn;
                    "did" === e.substr(0, 3) && (e = we(e));
                    var s = new Rt;
                    s.add(e, t.length);
                    var o = !0,
                        c = !1,
                        l = void 0;
                    try {
                        for (var h, f = ee()(t); !(o = (h = f.next()).done); o = !0) {
                            var d = h.value,
                                v = we(d.key),
                                y = we(d.type),
                                p = we(d.value);
                            s.add(v, y, p)
                        }
                    } catch (e) {
                        c = !0, l = e
                    } finally {
                        try {
                            !o && f.return && f.return()
                        } finally {
                            if (c) throw l
                        }
                    }
                    return s.list.push(r.serializeHex()), Mr(u, Vr([s]), new Vt(en), n, a, i)
                }

                function gn(e, t, r, n, a, i) {
                    var u = an;
                    "did" === e.substr(0, 3) && (e = we(e));
                    var s = new Rt;
                    return s.add(e, we(t), r.serializeHex()), Mr(u, Vr([s]), new Vt(en), n, a, i)
                }

                function mn(e) {
                    var t = un;
                    "did" === e.substr(0, 3) && (e = we(e));
                    var r = new Rt;
                    return r.add(e), Mr(t, Vr([r]), new Vt(en))
                }

                function wn(e) {
                    var t = sn;
                    "did" === e.substr(0, 3) && (e = we(e));
                    var r = new Rt;
                    return r.add(e), Mr(t, Vr([r]), new Vt(en))
                }

                function Sn(e, t, r, n, a, i) {
                    var u = on;
                    "did" === e.substr(0, 3) && (e = we(e));
                    var s = e,
                        o = t.serializeHex(),
                        c = void 0;
                    r instanceof ut ? c = r.serializeHex() : r instanceof Vt && (c = r.serialize());
                    var l = new Rt;
                    return l.add(s, o, c), Mr(u, Vr([l]), new Vt(en), n, a, i)
                }

                function An(e, t, r, n, a, i) {
                    var u = cn;
                    "did" === e.substr(0, 3) && (e = we(e));
                    var s = e,
                        o = t.serializeHex(),
                        c = void 0;
                    r instanceof ut ? c = r.serializeHex() : r instanceof Vt && (c = r.serialize());
                    var l = new Rt;
                    return l.add(s, o, c), Mr(u, Vr([l]), new Vt(en), n, a, i)
                }

                function kn(e) {
                    var t = ln;
                    "did" === e.substr(0, 3) && (e = we(e));
                    var r = new Rt;
                    return r.add(e), Mr(t, Vr([r]), new Vt(en))
                }

                function xn(e, t, r, n, a, i) {
                    var u = hn;
                    "did" === e.substr(0, 3) && (e = we(e));
                    var s = e,
                        o = t,
                        c = r.serializeHex(),
                        l = new Rt;
                    return l.add(s, o, c), Mr(u, Vr([l]), new Vt(en), n, a, i)
                }

                function bn(e, t, r, n, a, i) {
                    var u = fn;
                    "did" === e.substr(0, 3) && (e = we(e));
                    var s = e,
                        o = t,
                        c = r,
                        l = new Rt;
                    l.add(s, o, c);
                    var h = Mr(u, Vr([l]), new Vt(en), n, a);
                    return h.payer = i || r, h
                }

                function En(e, t) {
                    var r = dn;
                    "did" === e.substr(0, 3) && (e = we(e)), console.log("did: " + e);
                    var n = Ee(t, 4, !0);
                    console.log("index: " + n);
                    var a = new Rt;
                    return a.add(e, t), Mr(r, Vr([a]), new Vt(en))
                }
                var Rn, Pn = {
                        Action: "sendrawtransaction",
                        Version: "1.0.0",
                        Type: "",
                        Op: "test"
                    },
                    Tn = function(e, t, r) {
                        var n = zr.create(e, t, r);
                        e.sigs = [n]
                    },
                    In = (Rn = jt()(Ft.a.mark((function e(t, r, n) {
                        var a;
                        return Ft.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, zr.createAsync(t, r, n);
                                case 2:
                                    a = e.sent, t.sigs = [a];
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, void 0)
                    }))), function(e, t, r) {
                        return Rn.apply(this, arguments)
                    }),
                    Bn = function(e, t, r) {
                        var n = zr.create(e, t, r);
                        e.sigs.push(n)
                    },
                    Nn = function(e, t) {
                        if (e === t) return !0;
                        if (e.sort(ot), t.sort(ot), e.length !== t.length) return !1;
                        for (var r = 0; r < e.length; r++)
                            if (e[r].key !== t[r].key) return !1;
                        return !0
                    },
                    Cn = function(e, t, r, n, a) {
                        if (0 === e.sigs.length) e.sigs = [];
                        else {
                            if (e.sigs.length > q || t > r.length || t <= 0 || 0 === r.length) throw g.INVALID_PARAMS;
                            for (var i = 0; i < e.sigs.length; i++)
                                if (Nn(e.sigs[i].pubKeys, r)) {
                                    if (e.sigs[i].sigData.length + 1 > r.length) throw new Error("Too many sigData");
                                    var u = n.sign(e, a).serializeHex();
                                    return void e.sigs[i].sigData.push(u)
                                }
                        }
                        var s = new zr;
                        s.M = t, s.pubKeys = r, s.sigData = [n.sign(e, a).serializeHex()], e.sigs.push(s)
                    },
                    Dn = function(e, t, r, n, a, i) {
                        var u = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                            s = new Ur;
                        s.type = Hr.Invoke;
                        var o = "";
                        if ("string" == typeof t) o = t;
                        else {
                            var c = new Nr(e, "", t);
                            o = Ht(c, u)
                        }
                        var l = o + Ee(ne.APPCALL);
                        l += r.serialize();
                        var h = new Or;
                        return h.code = l, s.payload = h, a && (s.gasLimit = new Br(a)), n && (s.gasPrice = new Br(n)), i && (s.payer = i), s
                    };

                function On(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1.0",
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                        i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
                        u = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                        s = arguments[7],
                        o = arguments[8],
                        c = arguments[9],
                        l = new Dr;
                    l.author = n, l.code = e, l.version = r, l.description = i, l.email = a, l.name = t, l.needStorage = u;
                    var h = new Ur;
                    return h.version = 0, h.payload = l, h.type = Hr.Deploy, h.gasLimit = new Br(o), h.gasPrice = new Br(s), c && (h.payer = c), h
                }

                function Hn(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? {
                            PreExec: "1"
                        } : {},
                        r = e.serialize();
                    return R()(Ir()({}, Pn, {
                        Data: r
                    }, t))
                }

                function _n(e, t) {
                    return {
                        jsonrpc: "2.0",
                        method: t || "sendrawtransaction",
                        params: [e.serialize()],
                        id: 10
                    }
                }

                function zn(e) {
                    return {
                        Action: "sendrawtransaction",
                        Version: "1.0.0",
                        Data: e.serialize()
                    }
                }

                function Un(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    "/" === e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1));
                    var r = e + M.sendRawTx;
                    return t && (r += "?preExec=1"), r
                }

                function Ln(e) {
                    if (e.split(":").length < 2) throw new Error("Invalid parameter. " + e);
                    var t = e.substring(0, e.indexOf(":")),
                        r = e.substring(e.indexOf(":") + 1),
                        n = new Et("", t, r);
                    return n.type === mt.Address && (n.type = mt.ByteArray, n.value = new Vt(n.value).serialize()), n
                }

                function Mn(e) {
                    var t = {},
                        r = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var i, u = ee()(kt()(e)); !(r = (i = u.next()).done); r = !0) {
                            var s = i.value,
                                o = e[s];
                            "number" == typeof o ? t[s] = new Et("", mt.Integer, o) : "boolean" == typeof o ? t[s] = new Et("", mt.Boolean, o) : Array.isArray(o) ? t[s] = new Et("", mt.Array, Kn(o)) : "object" === (void 0 === o ? "undefined" : Pr()(o)) ? t[s] = new Et("", mt.Map, Mn(o)) : "string" == typeof o && (t[s] = Ln(o))
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return t
                }

                function Kn(e) {
                    var t = [],
                        r = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var i, u = ee()(e); !(r = (i = u.next()).done); r = !0) {
                            var s = i.value,
                                o = new Et("", mt.ByteArray, s);
                            "number" == typeof s ? o.type = mt.Integer : "boolean" == typeof s ? o.type = mt.Boolean : Array.isArray(s) ? (o.type = mt.Array, o.value = Kn(s)) : "object" === (void 0 === s ? "undefined" : Pr()(s)) ? (o.type = mt.Map, o.value = Mn(s)) : "string" == typeof s && (o = Ln(s)), t.push(o)
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return t
                }

                function Vn(e) {
                    var t = e.name,
                        r = e.value,
                        n = new Et(t, mt.ByteArray, r);
                    return "number" == typeof r ? (n.type = mt.Integer, n.value = Number(r)) : "boolean" == typeof r ? (n.type = mt.Boolean, n.value = Boolean(r)) : Array.isArray(r) ? (n.type = mt.Array, n.value = Kn(r)) : "object" === (void 0 === r ? "undefined" : Pr()(r)) ? (n.type = mt.Map, n.value = Mn(r)) : "string" == typeof r && (n = Ln(r)), n
                }

                function Gn(e) {
                    var t = [],
                        r = e.functions,
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var u, s = ee()(r); !(n = (u = s.next()).done); n = !0) {
                            var o = u.value,
                                c = o.operation,
                                l = o.args,
                                h = [];
                            h.push(we(c));
                            var f = [],
                                d = !0,
                                v = !1,
                                y = void 0;
                            try {
                                for (var p, g = ee()(l); !(d = (p = g.next()).done); d = !0) {
                                    var m = p.value;
                                    f.push(Vn(m))
                                }
                            } catch (e) {
                                v = !0, y = e
                            } finally {
                                try {
                                    !d && g.return && g.return()
                                } finally {
                                    if (v) throw y
                                }
                            }
                            h.push(f), t.push(h)
                        }
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            !n && s.return && s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }

                function Wn(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (!e) throw new Error("Invalid parameter. Expect JSON object");
                    if (!e.action || "invoke" !== e.action && "invokeRead" !== e.action && "invokePasswordFree" !== e.action) throw new Error('Invalid parameter. The action type must be "invoke or invokeRead"');
                    if (!e.params || !e.params.invokeConfig) throw new Error("Invalid parameter. The params can not be empty.");
                    var r = e.params.invokeConfig,
                        n = r.payer,
                        a = r.gasPrice,
                        i = r.gasLimit,
                        u = r.contractHash;
                    if (!u) throw new Error("Invalid parameter. The contractHash can not be empty.");
                    var s = new Vt(Pe(u));
                    n = n ? new Vt(n) : null, a = a + "" || "500", i = i + "" || "200000";
                    var o = [];
                    if (u.indexOf("00000000000000000000000000000000000000") > -1) {
                        var c = Jn(r);
                        o.push(c)
                    } else {
                        var l = Gn(r),
                            h = !0,
                            f = !1,
                            d = void 0;
                        try {
                            for (var v, y = ee()(l); !(h = (v = y.next()).done); h = !0) {
                                var p = v.value,
                                    g = Lt(p, t),
                                    m = Dn("", g, s, a, i, n, t);
                                o.push(m)
                            }
                        } catch (e) {
                            f = !0, d = e
                        } finally {
                            try {
                                !h && y.return && y.return()
                            } finally {
                                if (f) throw d
                            }
                        }
                    }
                    return o
                }

                function Jn(e) {
                    var t = e.functions[0],
                        r = t.args;
                    if (e.contractHash.indexOf("02") > -1 || e.contractHash.indexOf("01") > -1) {
                        var n = e.contractHash.indexOf("02") > -1 ? "ONG" : "ONT";
                        if ("transfer" === t.operation) {
                            var a = new Vt(r[0].value.split(":")[1]),
                                i = new Vt(r[1].value.split(":")[1]),
                                u = r[2].value.split(":")[1] + "",
                                s = new Vt(e.payer);
                            return qr(n, a, i, u, e.gasPrice, e.gasLimit, s)
                        }
                    } else if (e.contractHash.indexOf("03") > -1) {
                        if ("regIDWithPublicKey" === t.operation) {
                            var o = r[0].value.substr(r[0].value.indexOf(":") + 1),
                                c = new ut(r[1].value.split(":")[1]),
                                l = new Vt(e.payer);
                            return vn(o, c, e.gasPrice, e.gasLimit, l)
                        }
                        if ("getDDO" === t.operation) return wn(r[0].value.substr(r[0].value.indexOf(":") + 1))
                    }
                }
                var Fn = r(29),
                    qn = function() {
                        function e() {
                            S()(this, e), this["enc-alg"] = "aes-256-gcm", this.hash = "sha256"
                        }
                        return k()(e, [{
                            key: "toJson",
                            value: function() {
                                return R()(this.toJsonObj())
                            }
                        }, {
                            key: "toJsonObj",
                            value: function() {
                                return b()({
                                    address: this.address.toBase58(),
                                    label: this.label,
                                    lock: this.lock
                                }, this.encryptedKey.serializeJson(), {
                                    "enc-alg": this["enc-alg"],
                                    hash: this.hash,
                                    salt: this.salt,
                                    isDefault: this.isDefault,
                                    publicKey: this.publicKey,
                                    signatureScheme: this.encryptedKey.algorithm.defaultSchema.label
                                })
                            }
                        }, {
                            key: "exportPrivateKey",
                            value: function(e, t) {
                                return this.encryptedKey.decrypt(e, this.address, this.salt, t)
                            }
                        }, {
                            key: "signTransaction",
                            value: function(e, t, r) {
                                var n = this.exportPrivateKey(e, r);
                                return Tn(t, n, n.algorithm.defaultSchema), t
                            }
                        }], [{
                            key: "importAccount",
                            value: function(t, r, n, a, i, u) {
                                var s = new e,
                                    o = Buffer.from(i, "base64").toString("hex"),
                                    c = r.decrypt(n, a, o, u);
                                t || (t = pe(Ue(4))), s.label = t, s.lock = !1, s.isDefault = !1, s.salt = i, s.encryptedKey = r;
                                var l = c.getPublicKey();
                                return s.publicKey = l.key, s.address = Vt.fromPubKey(l), s
                            }
                        }, {
                            key: "importWithMnemonic",
                            value: function(t, r, n, a) {
                                if (r = r.trim(), !P.validateMnemonic(r)) throw g.INVALID_PARAMS;
                                var i = P.mnemonicToSeedHex(r),
                                    u = Fn.fromMasterSeed(Buffer.from(i, "hex")).derive(j),
                                    s = Buffer.from(u.privateKey).toString("hex"),
                                    o = new lr(s);
                                return e.create(o, n, t, a)
                            }
                        }, {
                            key: "create",
                            value: function(t, r, n, a) {
                                var i = new e;
                                n || (n = pe(Ue(4))), i.label = n, i.lock = !1, i.isDefault = !1;
                                var u = Le(16),
                                    s = t.getPublicKey(),
                                    o = Vt.fromPubKey(s);
                                return i.publicKey = s.serializeHex(), i.address = o, i.encryptedKey = t.encrypt(r, o, u, a), i.salt = Buffer.from(u, "hex").toString("base64"), i
                            }
                        }, {
                            key: "parseJson",
                            value: function(t) {
                                return e.parseJsonObj(JSON.parse(t))
                            }
                        }, {
                            key: "parseJsonObj",
                            value: function(t) {
                                var r = new e;
                                return r.address = new Vt(t.address), r.label = t.label, r.lock = t.lock, r.isDefault = t.isDefault, r.publicKey = t.publicKey, r.hash = t.hash, r.salt = t.salt, r.encryptedKey = vr({
                                    algorithm: t.algorithm,
                                    parameters: t.parameters,
                                    key: t.key,
                                    external: t.external
                                }), r.extra = t.extra, r
                            }
                        }]), e
                    }(),
                    jn = r(21),
                    Yn = r.n(jn),
                    Qn = "/api/v1/transaction",
                    Xn = "/api/v1/transaction/",
                    Zn = "/api/v1/block/details/height/",
                    $n = "/api/v1/block/details/hash/",
                    ea = "/api/v1/contract/",
                    ta = function() {
                        function e(t) {
                            S()(this, e), this.version = "v1.0.0", this.action = "sendrawtransaction", this.url = t || V.REST_URL, "/" === this.url[this.url.length - 1] && (this.url = this.url.substring(0, this.url.length - 1))
                        }
                        return k()(e, [{
                            key: "concatParams",
                            value: function(e) {
                                var t = "";
                                if (0 === e.size) return "";
                                var r = !0,
                                    n = !1,
                                    a = void 0;
                                try {
                                    for (var i, u = ee()(e.keys()); !(r = (i = u.next()).done); r = !0) {
                                        var s = i.value,
                                            o = e.get(s);
                                        o && (o = encodeURIComponent(o)), t += "&" + s + "=" + o
                                    }
                                } catch (e) {
                                    n = !0, a = e
                                } finally {
                                    try {
                                        !r && u.return && u.return()
                                    } finally {
                                        if (n) throw a
                                    }
                                }
                                return "?" + t.substr(1)
                            }
                        }, {
                            key: "getUrl",
                            value: function() {
                                return this.url
                            }
                        }, {
                            key: "sendRawTransaction",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = arguments[2],
                                    n = new bt.a;
                                r && n.set("userid", r), t && n.set("preExec", "1");
                                var a = this.url + Qn;
                                a += this.concatParams(n);
                                var i = {
                                    Action: this.action,
                                    Version: this.version,
                                    Data: e
                                };
                                return de.a.post(a, i).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getRawTransaction",
                            value: function(e) {
                                var t = new bt.a;
                                t.set("raw", "1");
                                var r = this.url + Xn + e;
                                return r += this.concatParams(t), de.a.get(r).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getRawTransactionJson",
                            value: function(e) {
                                var t = new bt.a;
                                t.set("raw", "0");
                                var r = this.url + Xn + e;
                                return r += this.concatParams(t), de.a.get(r).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getNodeCount",
                            value: function() {
                                var e = this.url + "/api/v1/node/connectioncount";
                                return de.a.get(e).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getBlockHeight",
                            value: function() {
                                var e = this.url + "/api/v1/block/height";
                                return de.a.get(e).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getBlock",
                            value: function(e) {
                                var t = new bt.a;
                                t.set("raw", "1");
                                var r = "";
                                return "number" == typeof e ? r = this.url + Zn + e : "string" == typeof e && (r = this.url + $n + e), r += this.concatParams(t), de.a.get(r).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getContract",
                            value: function(e) {
                                var t = new bt.a;
                                t.set("raw", "1");
                                var r = this.url + ea + e;
                                return r += this.concatParams(t), de.a.get(r).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getContractJson",
                            value: function(e) {
                                var t = new bt.a;
                                t.set("raw", "0");
                                var r = this.url + ea + e;
                                return r += this.concatParams(t), de.a.get(r).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getSmartCodeEvent",
                            value: function(e) {
                                var t = "";
                                return "string" == typeof e ? t = this.url + "/api/v1/smartcode/event/txhash/" + e : "number" == typeof e && (t = this.url + "/api/v1/smartcode/event/transactions/" + e), de.a.get(t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getBlockHeightByTxHash",
                            value: function(e) {
                                var t = this.url + "/api/v1/block/height/txhash/" + e;
                                return de.a.get(t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getStorage",
                            value: function(e, t) {
                                var r = this.url + "/api/v1/storage/" + e + "/" + t;
                                return de.a.get(r).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getMerkleProof",
                            value: function(e) {
                                var t = this.url + "/api/v1/merkleproof/" + e;
                                return console.log("url: " + t), de.a.get(t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getBalance",
                            value: function(e) {
                                var t = this.url + "/api/v1/balance/" + e.toBase58();
                                return de.a.get(t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getBlockJson",
                            value: function(e) {
                                var t = "";
                                return "number" == typeof e ? t = this.url + Zn + e : "string" == typeof e && (t = this.url + $n + e), de.a.get(t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getAllowance",
                            value: function(e, t, r) {
                                if ("ont" !== (e = e.toLowerCase()) && "ong" !== e) throw g.INVALID_PARAMS;
                                var n = this.url + "/api/v1/allowance/" + e.toLowerCase() + "/" + t.toBase58() + "/" + r.toBase58();
                                return de.a.get(n).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getUnboundOng",
                            value: function(e) {
                                var t = this.url + "/api/v1/unboundong/" + e.toBase58();
                                return de.a.get(t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getBlockTxsByHeight",
                            value: function(e) {
                                var t = this.url + "/api/v1/block/transactions/height/" + e;
                                return de.a.get(t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getGasPrice",
                            value: function() {
                                var e = this.url + "/api/v1/gasprice";
                                return de.a.get(e).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getGrangOng",
                            value: function(e) {
                                var t = this.url + "/api/v1/grantong/" + e.toBase58();
                                return de.a.get(t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getMempoolTxCount",
                            value: function() {
                                var e = this.url + "/api/v1/mempool/txcount";
                                return de.a.get(e).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getMempoolTxState",
                            value: function(e) {
                                var t = this.url + "/api/v1/mempool/txstate/" + e;
                                return de.a.get(t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getVersion",
                            value: function() {
                                var e = this.url + "/api/v1/version";
                                return de.a.get(e).then((function(e) {
                                    return e.data
                                }))
                            }
                        }]), e
                    }(),
                    ra = r(22),
                    na = r.n(ra),
                    aa = function() {
                        function e() {
                            var t = this;
                            S()(this, e), this.resolve = function(e) {
                                t._resolve(e)
                            }, this.reject = function(e) {
                                t._reject(e)
                            }, this._promise = new na.a((function(e, r) {
                                t._resolve = e, t._reject = r
                            }))
                        }
                        return k()(e, [{
                            key: "promise",
                            get: function() {
                                return this._promise
                            }
                        }]), e
                    }();

                function ia() {
                    return {
                        Action: "subscribe",
                        Version: "1.0.0",
                        SubscribeEvent: arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        SubscribeJsonBlock: arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        SubscribeRawBlock: arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        SubscribeBlockTxHashs: arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                    }
                }

                function ua(e) {
                    var t = {
                        Action: "sendrawtransaction",
                        Version: "1.0.0",
                        Data: e
                    };
                    return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (t = Ir()(t, {
                        PreExec: "1"
                    })), t
                }

                function sa(e) {
                    return {
                        Action: "gettransaction",
                        Version: "1.0.0",
                        Hash: e,
                        Raw: "1"
                    }
                }

                function oa(e) {
                    return {
                        Action: "gettransaction",
                        Version: "1.0.0",
                        Hash: e,
                        Raw: "0"
                    }
                }

                function ca(e) {
                    var t = {};
                    return "number" == typeof e ? t = {
                        Action: "getblockbyheight",
                        Version: "1.0.0",
                        Height: e,
                        Raw: "1"
                    } : "string" == typeof e && (t = {
                        Action: "getblockbyhash",
                        Version: "1.0.0",
                        Hash: e,
                        Raw: "1"
                    }), t
                }

                function la(e) {
                    var t = {};
                    return "number" == typeof e ? t = {
                        Action: "getblockbyheight",
                        Version: "1.0.0",
                        Height: e
                    } : "string" == typeof e && (t = {
                        Action: "getblockbyhash",
                        Version: "1.0.0",
                        Hash: e
                    }), t
                }

                function ha(e) {
                    return {
                        Action: "getbalance",
                        Version: "1.0.0",
                        Addr: e.toBase58()
                    }
                }

                function fa(e) {
                    return {
                        Action: "getunboundong",
                        Version: "1.0.0",
                        Addr: e.toBase58()
                    }
                }

                function da(e) {
                    return {
                        Action: "getcontract",
                        Version: "1.0.0",
                        Hash: e,
                        Raw: "1"
                    }
                }

                function va(e) {
                    return {
                        Action: "getcontract",
                        Version: "1.0.0",
                        Hash: e,
                        Raw: "0"
                    }
                }

                function ya(e) {
                    var t = {};
                    return "number" == typeof e ? t = {
                        Action: "getsmartcodeeventbyheight",
                        Version: "1.0.0",
                        Height: e
                    } : "string" == typeof e && (t = {
                        Action: "getsmartcodeeventbyhash",
                        Version: "1.0.0",
                        Hash: e
                    }), t
                }

                function pa(e) {
                    return {
                        Action: "getblockheightbytxhash",
                        Version: "1.0.0",
                        Hash: e
                    }
                }

                function ga(e, t) {
                    return {
                        Action: "getstorage",
                        Version: "1.0.0",
                        Hash: e,
                        Key: t
                    }
                }

                function ma(e) {
                    return {
                        Action: "getmerkleproof",
                        Version: "1.0.0",
                        Hash: e
                    }
                }

                function wa(e, t, r) {
                    return {
                        Action: "getallowance",
                        Version: "1.0.0",
                        Asset: e,
                        From: t.toBase58(),
                        To: r.toBase58()
                    }
                }

                function Sa(e) {
                    return {
                        Action: "getgrantong",
                        Version: "1.0.0",
                        Addr: e.toBase58()
                    }
                }

                function Aa(e) {
                    return {
                        Action: "getmempooltxstate",
                        Version: "1.0.0",
                        Hash: e
                    }
                }
                var ka = r(35),
                    xa = r(34),
                    ba = function() {
                        function e() {
                            var t = this,
                                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V.SOCKET_URL,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            S()(this, e), this.debug = n, this.wsp = new xa(r, {
                                createWebSocket: function(e) {
                                    return new ka(e)
                                },
                                attachRequestId: function(e, t) {
                                    return b()({
                                        Id: t
                                    }, e)
                                },
                                extractRequestId: function(e) {
                                    return e && e.Id
                                },
                                packMessage: function(e) {
                                    return R()(e)
                                },
                                unpackMessage: function(e) {
                                    return JSON.parse(e)
                                }
                            }), this.wsp.onOpen.addListener((function() {
                                t.debug && console.log("connected")
                            })), this.wsp.onClose.addListener((function() {
                                t.debug && console.log("disconnected")
                            })), this.wsp.onSend.addListener((function(e) {
                                t.debug && console.log("sent: ", e)
                            })), this.wsp.onMessage.addListener((function(e) {
                                t.debug && console.log("received: ", e)
                            })), this.wsp.onError.addListener((function(e) {
                                t.debug && console.log("error: ", e)
                            }))
                        }
                        return k()(e, null, [{
                            key: "generateReqId",
                            value: function() {
                                return Math.floor(1e9 * Math.random())
                            }
                        }]), k()(e, [{
                            key: "send",
                            value: function() {
                                var t = jt()(Ft.a.mark((function t(r) {
                                    var n, a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                    return Ft.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (t.prev = 0, r) {
                                                    t.next = 3;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 3:
                                                return t.next = 5, this.wsp.open();
                                            case 5:
                                                return t.next = 7, this.wsp.sendRequest(r, {
                                                    requestId: e.generateReqId()
                                                });
                                            case 7:
                                                return n = t.sent, t.abrupt("return", n);
                                            case 9:
                                                if (t.prev = 9, !a) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return t.next = 13, this.wsp.close();
                                            case 13:
                                                return t.finish(9);
                                            case 14:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this, [
                                        [0, , 9, 14]
                                    ])
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "addListener",
                            value: function(e) {
                                this.wsp.onUnpackedMessage.addListener(e)
                            }
                        }, {
                            key: "close",
                            value: function() {
                                this.wsp.close()
                            }
                        }]), e
                    }(),
                    Ea = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V.SOCKET_URL,
                                r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            S()(this, e), this.autoClose = n, this.promises = new bt.a, this.sender = new ba(t, r), this.sender.addListener(this.notifyListener.bind(this))
                        }
                        return k()(e, [{
                            key: "sendHeartBeat",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e() {
                                    var t;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = {
                                                    Action: "heartbeat",
                                                    Version: "V1.0.0"
                                                }, e.abrupt("return", this.send(t));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "sendSubscribe",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e() {
                                    var t, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = ia(r, n, a, i), e.abrupt("return", this.send(t));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "sendRawTransaction",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r, n, a, i, u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = ua(t, u), e.next = 3, this.send(r, this.autoClose && !s);
                                            case 3:
                                                if (0 === (n = e.sent).Error) {
                                                    e.next = 7;
                                                    break
                                                }
                                                throw console.log(n), new Error(R()(n));
                                            case 7:
                                                if (!s) {
                                                    e.next = 14;
                                                    break
                                                }
                                                return a = n.Result, i = new aa, this.promises.set(a, i), e.abrupt("return", i.promise);
                                            case 14:
                                                return e.abrupt("return", n);
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getRawTransaction",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = sa(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getRawTransactionJson",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = oa(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getNodeCount",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e() {
                                    var t;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = {
                                                    Action: "getconnectioncount",
                                                    Version: "1.0.0"
                                                }, e.abrupt("return", this.send(t));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getBlockHeight",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e() {
                                    var t;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = {
                                                    Action: "getblockheight",
                                                    Version: "1.0.0"
                                                }, e.abrupt("return", this.send(t));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getBlock",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = ca(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getBlockJson",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = la(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getBalance",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = ha(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getUnboundong",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = fa(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getContract",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = da(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getContractJson",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = va(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getSmartCodeEvent",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = ya(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getBlockHeightByTxHash",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = pa(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getStorage",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t, r) {
                                    var n;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = ga(t, r), e.abrupt("return", this.send(n));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t, r) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getMerkleProof",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = ma(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getAllowance",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t, r, n) {
                                    var a;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return a = wa(t, r, n), e.abrupt("return", this.send(a));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t, r, n) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getBlockHash",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = {
                                                    Action: "getblockhash",
                                                    Version: "1.0.0",
                                                    Height: t
                                                }, e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getBlockTxsByHeight",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = {
                                                    Action: "getblocktxsbyheight",
                                                    Version: "1.0.0",
                                                    Height: t
                                                }, e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getGasPrice",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e() {
                                    var t;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = {
                                                    Action: "getgasprice",
                                                    Version: "1.0.0"
                                                }, e.abrupt("return", this.send(t));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getGrantOng",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = Sa(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getMempoolTxCount",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e() {
                                    var t;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = {
                                                    Action: "getmempooltxcount",
                                                    Version: "1.0.0"
                                                }, e.abrupt("return", this.send(t));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getMempoolTxState",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = Aa(t), e.abrupt("return", this.send(r));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getVersion",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e() {
                                    var t;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = {
                                                    Action: "getversion",
                                                    Version: "1.0.0"
                                                }, e.abrupt("return", this.send(t));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getNetworkId",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e() {
                                    var t;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = {
                                                    Action: "getnetworkid",
                                                    Version: "1.0.0"
                                                }, e.abrupt("return", this.send(t));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "addNotifyListener",
                            value: function(e) {
                                this.sender.addListener((function(t) {
                                    "Notify" === t.Action && e(t)
                                }))
                            }
                        }, {
                            key: "close",
                            value: function() {
                                this.sender.close()
                            }
                        }, {
                            key: "send",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.autoClose;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", this.sender.send(t, r));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "notifyListener",
                            value: function(e) {
                                if ("Notify" === e.Action || "Log" === e.Action) {
                                    var t = e.Result.TxHash;
                                    if (void 0 !== t) {
                                        var r = this.promises.get(t);
                                        void 0 !== r ? (this.promises.delete(t), r.resolve(e)) : console.warn("Received Notify event for unknown transaction"), this.autoClose && this.sender.close()
                                    }
                                }
                            }
                        }]), e
                    }(),
                    Ra = function() {
                        function e() {
                            S()(this, e), this.functions = []
                        }
                        return k()(e, [{
                            key: "getHash",
                            value: function() {
                                return this.hash
                            }
                        }, {
                            key: "getEntryPoint",
                            value: function() {
                                return this.entrypoint
                            }
                        }, {
                            key: "getFunction",
                            value: function(e) {
                                var t = !0,
                                    r = !1,
                                    n = void 0;
                                try {
                                    for (var a, i = ee()(this.functions); !(t = (a = i.next()).done); t = !0) {
                                        var u = a.value;
                                        if (u.name === e) {
                                            var s = u.parameters.map((function(e) {
                                                return new Et(e.name, e.type, "")
                                            }));
                                            return new Nr(u.name, u.returntype, s)
                                        }
                                    }
                                } catch (e) {
                                    r = !0, n = e
                                } finally {
                                    try {
                                        !t && i.return && i.return()
                                    } finally {
                                        if (r) throw n
                                    }
                                }
                                throw Error("not found")
                            }
                        }], [{
                            key: "parseJson",
                            value: function(t) {
                                var r = new e,
                                    n = JSON.parse(t);
                                return r.hash = n.hash, r.entrypoint = n.entrypoint, r.functions = n.functions, r
                            }
                        }]), e
                    }(),
                    Pa = Ra.parseJson(R()({
                        hash: "36bb5c053b6b839c8f6b923fe852f91239b9fccc",
                        entrypoint: "Main",
                        functions: [{
                            name: "Main",
                            parameters: [{
                                name: "operation",
                                type: "String"
                            }, {
                                name: "args",
                                type: "Array"
                            }],
                            returntype: "Any"
                        }, {
                            name: "Commit",
                            parameters: [{
                                name: "claimId",
                                type: "ByteArray"
                            }, {
                                name: "commiterId",
                                type: "ByteArray"
                            }, {
                                name: "ownerId",
                                type: "ByteArray"
                            }],
                            returntype: "Boolean"
                        }, {
                            name: "Revoke",
                            parameters: [{
                                name: "claimId",
                                type: "ByteArray"
                            }, {
                                name: "ontId",
                                type: "ByteArray"
                            }],
                            returntype: "Boolean"
                        }, {
                            name: "GetStatus",
                            parameters: [{
                                name: "claimId",
                                type: "ByteArray"
                            }],
                            returntype: "ByteArray"
                        }],
                        events: [{
                            name: "ErrorMsg",
                            parameters: [{
                                name: "arg1",
                                type: "ByteArray"
                            }, {
                                name: "arg2",
                                type: "String"
                            }],
                            returntype: "Void"
                        }, {
                            name: "Push",
                            parameters: [{
                                name: "arg1",
                                type: "ByteArray"
                            }, {
                                name: "arg2",
                                type: "String"
                            }, {
                                name: "arg3",
                                type: "ByteArray"
                            }],
                            returntype: "Void"
                        }]
                    })),
                    Ta = Pa.getHash().replace("0x", ""),
                    Ia = new Vt(Pe(Ta));

                function Ba(e, t, r, n, a, i) {
                    var u = Pa.getFunction("Commit");
                    "did" === t.substr(0, 3) && (t = we(t)), "did" === r.substr(0, 3) && (r = we(t));
                    var s = new Et(u.parameters[0].getName(), mt.ByteArray, we(e)),
                        o = new Et(u.parameters[1].getName(), mt.ByteArray, t),
                        c = new Et(u.parameters[2].getName(), mt.ByteArray, r);
                    return new Ur, Dn(u.name, [s, o, c], Ia, n, a, i)
                }

                function Na(e, t, r, n, a) {
                    var i = Pa.getFunction("Revoke"),
                        u = i.parameters[0].getName(),
                        s = mt.ByteArray;
                    "did" === t.substr(0, 3) && (t = we(t));
                    var o = new Et(u, s, we(e)),
                        c = new Et(i.parameters[1].getName(), mt.ByteArray, t);
                    return Dn(i.name, [o, c], Ia, r, n, a)
                }

                function Ca(e) {
                    var t = Pa.getFunction("GetStatus"),
                        r = new Et(t.parameters[0].getName(), mt.ByteArray, we(e));
                    return Dn(t.name, [r], Ia)
                }
                var Da, Oa, Ha, _a = function() {
                        function e() {
                            S()(this, e), this.Action = "Notify"
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e;
                                return r.Action = t.Action, r.Error = t.Error, r.Desc = t.Desc, r.Result = za.deserialize(t.Result), r
                            }
                        }]), e
                    }(),
                    za = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e;
                                return r.TxHash = t.TxHash, r.State = t.State, r.GasConsumed = t.GasConsumed, r.Notify = t.Notify.map((function(e) {
                                    return {
                                        ContractAddress: e.ContractAddress,
                                        States: e.States.map((function(e) {
                                            return "string" == typeof e ? Se(e) : e
                                        }))
                                    }
                                })), r.Version = t.Version, r
                            }
                        }]), e
                    }(),
                    Ua = r(33),
                    La = r.n(Ua),
                    Ma = r(32),
                    Ka = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                for (var r = new Be(t), n = []; !r.isEmpty();) {
                                    var a = r.readUint32(),
                                        i = r.readNextBytes(),
                                        u = new e;
                                    u.id = a, u.pk = ut.deserializeHex(new Be(i)), n.push(u)
                                }
                                return n
                            }
                        }]), e
                    }(),
                    Va = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                return e += ke(this.key), (e += ke(this.type)) + ke(this.value)
                            }
                        }], [{
                            key: "deserialize",
                            value: function(t) {
                                for (var r = new Be(t), n = []; !r.isEmpty();) {
                                    var a = Se(r.readNextBytes()),
                                        i = Se(r.readNextBytes()),
                                        u = Se(r.readNextBytes()),
                                        s = new e;
                                    s.key = a, s.type = i, s.value = u, n.push(s)
                                }
                                return n
                            }
                        }]), e
                    }(),
                    Ga = function() {
                        function e() {
                            S()(this, e), this.publicKeys = [], this.attributes = [], this.recovery = ""
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new Be(t),
                                    n = new e,
                                    a = r.readNextLen();
                                a > 0 && (n.publicKeys = Ka.deserialize(r.read(a)));
                                var i = r.readNextLen();
                                i > 0 && (n.attributes = Va.deserialize(r.read(i)));
                                var u = r.readNextLen();
                                return u > 0 && (n.recovery = r.read(u)), n
                            }
                        }]), e
                    }(),
                    Wa = function() {
                        function e(t, r) {
                            S()(this, e), this.metadata = t, this.signature = r, void 0 === this.metadata.messageId && (this.metadata.messageId = Ma())
                        }
                        return k()(e, null, [{
                            key: "deserializeInternal",
                            value: function(t, r) {
                                var n = t.split(".", 3);
                                if (n.length < 2) throw new Error("Invalid message.");
                                var a = e.deserializeHeader(n[0]),
                                    i = e.deserializePayload(n[1]),
                                    u = void 0;
                                if (n.length > 2) {
                                    if (void 0 === a.algorithm || void 0 === a.publicKeyId) throw new Error("Signature scheme was not specified.");
                                    u = or.deserializeJWT(n[2], a.algorithm, a.publicKeyId)
                                }
                                var s = r(i.metadata, u);
                                return s.payloadFromJSON(i.rest), s
                            }
                        }, {
                            key: "deserializePayload",
                            value: function(e) {
                                var t = sr.decode(e),
                                    r = JSON.parse(t);
                                return {
                                    metadata: {
                                        messageId: r.jti,
                                        issuer: r.iss,
                                        subject: r.sub,
                                        issuedAt: r.iat,
                                        expireAt: r.exp
                                    },
                                    rest: La()(r, ["jti", "iss", "sub", "iat", "exp"])
                                }
                            }
                        }, {
                            key: "deserializeHeader",
                            value: function(e) {
                                var t = sr.decode(e),
                                    r = JSON.parse(t);
                                return {
                                    algorithm: void 0 !== r.alg ? je.fromLabelJWS(r.alg) : void 0,
                                    publicKeyId: r.kid
                                }
                            }
                        }]), k()(e, [{
                            key: "sign",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t, r, n, a) {
                                    var i;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Ja(r, t);
                                            case 2:
                                                return void 0 === a && (a = n.algorithm.defaultSchema), i = this.serializeUnsigned(a, r), e.next = 6, n.signAsync(i, a, r);
                                            case 6:
                                                this.signature = e.sent;
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t, r, n, a) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "verify",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r, n, a;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (void 0 === (r = this.signature) || void 0 === r.publicKeyId) {
                                                    e.next = 24;
                                                    break
                                                }
                                                if (e.prev = 2, this.verifyKeyOwnership()) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.abrupt("return", !1);
                                            case 5:
                                                if (this.verifyExpiration()) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.abrupt("return", !1);
                                            case 7:
                                                return e.next = 9, Fa(r.publicKeyId, t);
                                            case 9:
                                                if (e.sent !== st.REVOKED) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return e.abrupt("return", !1);
                                            case 12:
                                                return e.next = 14, Ja(r.publicKeyId, t);
                                            case 14:
                                                return n = e.sent, a = this.serializeUnsigned(r.algorithm, r.publicKeyId), e.abrupt("return", n.verify(a, r));
                                            case 19:
                                                return e.prev = 19, e.t0 = e.catch(2), e.abrupt("return", !1);
                                            case 22:
                                                e.next = 25;
                                                break;
                                            case 24:
                                                return e.abrupt("return", !1);
                                            case 25:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [2, 19]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "serializeUnsigned",
                            value: function(e, t) {
                                return this.serializeHeader(e, t) + "." + this.serializePayload()
                            }
                        }, {
                            key: "serialize",
                            value: function() {
                                var e = this.signature;
                                if (void 0 !== e) {
                                    var t = e.serializeJWT();
                                    return this.serializeUnsigned(e.algorithm, e.publicKeyId) + "." + t
                                }
                                return this.serializeUnsigned()
                            }
                        }, {
                            key: "serializeHeader",
                            value: function(e, t) {
                                var r;
                                r = void 0 !== e ? {
                                    alg: e.labelJWS,
                                    typ: "JWT",
                                    kid: t
                                } : {
                                    typ: "JWT"
                                };
                                var n = R()(r);
                                return sr.encode(n, "utf-8")
                            }
                        }, {
                            key: "verifyExpiration",
                            value: function() {
                                return void 0 === this.metadata.expireAt || Oe() < this.metadata.expireAt
                            }
                        }, {
                            key: "verifyKeyOwnership",
                            value: function() {
                                var e = this.signature;
                                return void 0 !== e && void 0 !== e.publicKeyId && qa(e.publicKeyId) === this.metadata.issuer
                            }
                        }, {
                            key: "serializePayload",
                            value: function() {
                                var e = {
                                        jti: this.metadata.messageId,
                                        iss: this.metadata.issuer,
                                        sub: this.metadata.subject,
                                        iat: this.metadata.issuedAt,
                                        exp: this.metadata.expireAt
                                    },
                                    t = this.payloadToJSON(),
                                    r = R()(b()({}, e, t));
                                return sr.encode(r, "utf-8")
                            }
                        }]), e
                    }(),
                    Ja = (Da = jt()(Ft.a.mark((function e(t, r) {
                        var n, a, i, u, s, o, c;
                        return Ft.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = qa(t), a = ja(t), i = new ta(r), u = wn(n), e.next = 6, i.sendRawTransaction(u.serialize(), !0);
                                case 6:
                                    if (!(s = e.sent).Result || !s.Result.Result) {
                                        e.next = 15;
                                        break
                                    }
                                    if (o = Ga.deserialize(s.Result.Result), void 0 !== (c = o.publicKeys.find((function(e) {
                                            return e.id === a
                                        })))) {
                                        e.next = 12;
                                        break
                                    }
                                    throw new Error("Not found");
                                case 12:
                                    return e.abrupt("return", c.pk);
                                case 15:
                                    throw new Error("Not found");
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t) {
                        return Da.apply(this, arguments)
                    }),
                    Fa = (Oa = jt()(Ft.a.mark((function e(t, r) {
                        var n, a, i, u, s;
                        return Ft.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = qa(t), a = ja(t), i = new ta(r), u = En(n, a), e.next = 6, i.sendRawTransaction(u.serialize(), !0);
                                case 6:
                                    if (!(s = e.sent).Result || !s.Result.Result) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", st.fromHexLabel(s.Result.Result));
                                case 11:
                                    throw new Error("Not found");
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t) {
                        return Oa.apply(this, arguments)
                    });

                function qa(e) {
                    var t = e.indexOf("#keys-");
                    if (-1 === t) throw new Error("Is not a publicKeId.");
                    return e.substr(0, t)
                }

                function ja(e) {
                    var t = e.indexOf("#keys-");
                    if (-1 === t) throw new Error("Is not a publicKeId.");
                    return Number(e.substr(t + "#keys-".length))
                }! function(e) {
                    e.AttestContract = "AttestContract", e.RevocationList = "RevocationList"
                }(Ha || (Ha = {}));
                var Ya, Qa = function(e) {
                        function t(e, r, n) {
                            S()(this, t);
                            var a = $e()(this, (t.__proto__ || Xe()(t)).call(this, e, r));
                            return a.useProof = !0 === n, a
                        }
                        return tt()(t, e), k()(t, null, [{
                            key: "deserialize",
                            value: function(e) {
                                return Yn()(t.__proto__ || Xe()(t), "deserializeInternal", this).call(this, e, (function(e, r) {
                                    return new t(e, r)
                                }))
                            }
                        }]), k()(t, [{
                            key: "verify",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(r) {
                                    var n, a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Yn()(t.prototype.__proto__ || Xe()(t.prototype), "verify", this).call(this, r);
                                            case 2:
                                                if (!(n = e.sent) || !a) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.abrupt("return", this.getStatus(r));
                                            case 7:
                                                return e.abrupt("return", n);
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "serialize",
                            value: function() {
                                return this.useProof ? Yn()(t.prototype.__proto__ || Xe()(t.prototype), "serialize", this).call(this) + "." + this.serializeProof() : Yn()(t.prototype.__proto__ || Xe()(t.prototype), "serialize", this).call(this)
                            }
                        }, {
                            key: "attest",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t, r, n, a, i) {
                                    var u, s, o, c, l, h, f;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (u = this.metadata.issuer, s = this.metadata.subject, void 0 !== (o = this.metadata.messageId)) {
                                                    e.next = 5;
                                                    break
                                                }
                                                throw new Error("Claim id not specified.");
                                            case 5:
                                                return c = new Ea(t), l = Ba(o, u, s, r, n, a), e.next = 9, In(l, i);
                                            case 9:
                                                return e.next = 11, c.sendRawTransaction(l.serialize(), !1, !0);
                                            case 11:
                                                return h = e.sent, f = _a.deserialize(h), console.log(R()(f)), e.abrupt("return", "Push" === f.Result.Notify[0].States[0]);
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t, r, n, a, i) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "revoke",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t, r, n, a, i) {
                                    var u, s, o, c, l, h;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (u = this.metadata.issuer, void 0 !== (s = this.metadata.messageId)) {
                                                    e.next = 4;
                                                    break
                                                }
                                                throw new Error("Claim id not specified.");
                                            case 4:
                                                return o = new Ea(t), c = Na(s, u, r, n, a), e.next = 8, In(c, i);
                                            case 8:
                                                return e.next = 10, o.sendRawTransaction(c.serialize(), !1, !0);
                                            case 10:
                                                return l = e.sent, h = _a.deserialize(l), e.abrupt("return", "Push" === h.Result.Notify[0].States[0]);
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t, r, n, a, i) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getStatus",
                            value: function() {
                                var e = jt()(Ft.a.mark((function e(t) {
                                    var r, n, a, i, u, s;
                                    return Ft.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (r = this.metadata.issuer, void 0 !== (n = this.metadata.messageId)) {
                                                    e.next = 4;
                                                    break
                                                }
                                                throw new Error("Claim id not specified.");
                                            case 4:
                                                return a = new ta(t), i = Ca(n), e.next = 8, a.sendRawTransaction(i.serialize(), !0);
                                            case 8:
                                                return u = e.sent, s = Xa.deserialize(u), console.log(s), e.abrupt("return", s.status === Ya.ATTESTED && s.issuerId === r);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "payloadToJSON",
                            value: function() {
                                return {
                                    ver: this.version,
                                    "@context": this.context,
                                    clm: this.content,
                                    "clm-rev": this.revocation
                                }
                            }
                        }, {
                            key: "payloadFromJSON",
                            value: function(e) {
                                this.version = e.ver, this.context = e["@context"], this.content = e.clm, this.revocation = e["clm-rev"]
                            }
                        }, {
                            key: "serializeHeader",
                            value: function(e, r) {
                                if (this.useProof) {
                                    if (void 0 === e || void 0 === r) throw new Error("Signature is needed fow JWT-X.");
                                    var n = {
                                            alg: e.labelJWS,
                                            typ: "JWT-X",
                                            kid: r
                                        },
                                        a = R()(n);
                                    return sr.encode(a, "utf-8")
                                }
                                return Yn()(t.prototype.__proto__ || Xe()(t.prototype), "serializeHeader", this).call(this, e, r)
                            }
                        }, {
                            key: "serializeProof",
                            value: function() {
                                var e = R()(this.proof);
                                return sr.encode(e, "utf-8")
                            }
                        }]), t
                    }(Wa),
                    Xa = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e;
                                if (void 0 !== t.Result && "" === t.Result.Result) return r.status = Ya.NOTFOUND, r;
                                var n = new Be(t.Result.Result);
                                n.read(1), n.readNextLen(), n.read(1);
                                var a = Se(n.readNextBytes());
                                n.read(1);
                                var i = Se(n.readNextBytes());
                                n.read(1);
                                var u = Se(n.readNextBytes());
                                n.read(1);
                                var s = n.readNextBytes();
                                return r.claimId = a, r.issuerId = i, r.subjectId = u, s || (s = "00"), r.status = s, r
                            }
                        }]), e
                    }();
                ! function(e) {
                    e.REVOKED = "00", e.ATTESTED = "01", e.NOTFOUND = "-1"
                }(Ya || (Ya = {}));
                var Za = r(27),
                    $a = r.n(Za),
                    ei = function() {
                        function e(t, r, n, a) {
                            S()(this, e), this.hash = "sha256", this.id = t, this.encryptedKey = r, this.address = n, this.salt = a
                        }
                        return k()(e, [{
                            key: "toJson",
                            value: function() {
                                var e;
                                return b()({
                                    id: this.id
                                }, this.encryptedKey.serializeJson(), (e = {
                                    address: this.address.toBase58(),
                                    salt: this.salt
                                }, $a()(e, "enc-alg", "aes-256-gcm"), $a()(e, "hash", this.hash), $a()(e, "publicKey", this.publicKey), e))
                            }
                        }], [{
                            key: "fromJson",
                            value: function(t) {
                                var r = vr(t),
                                    n = new e(t.id, r, new Vt(t.address), t.salt);
                                return n.publicKey = t.publicKey, n.hash = t.hash, n
                            }
                        }]), e
                    }(),
                    ti = function() {
                        function e() {
                            S()(this, e), this.controls = []
                        }
                        return k()(e, [{
                            key: "addControl",
                            value: function(e) {
                                var t = !0,
                                    r = !1,
                                    n = void 0;
                                try {
                                    for (var a, i = ee()(this.controls); !(t = (a = i.next()).done); t = !0)
                                        if (a.value.address.toBase58() === e.address.toBase58()) return
                                } catch (e) {
                                    r = !0, n = e
                                } finally {
                                    try {
                                        !t && i.return && i.return()
                                    } finally {
                                        if (r) throw n
                                    }
                                }
                                e.id = (this.controls.length + 1).toString(), this.controls.push(e)
                            }
                        }, {
                            key: "toJson",
                            value: function() {
                                return R()(this.toJsonObj())
                            }
                        }, {
                            key: "toJsonObj",
                            value: function() {
                                return {
                                    ontid: this.ontid,
                                    label: this.label,
                                    lock: this.lock,
                                    isDefault: this.isDefault,
                                    controls: this.controls.map((function(e) {
                                        return e.toJson()
                                    })),
                                    extra: this.extra
                                }
                            }
                        }, {
                            key: "exportPrivateKey",
                            value: function(e, t) {
                                var r = this.controls[0].encryptedKey,
                                    n = this.controls[0].address,
                                    a = this.controls[0].salt;
                                return r.decrypt(e, n, a, t)
                            }
                        }, {
                            key: "signTransaction",
                            value: function(e, t, r) {
                                var n = this.exportPrivateKey(e, r);
                                return Tn(t, n, n.algorithm.defaultSchema), t
                            }
                        }], [{
                            key: "importIdentity",
                            value: function(t, r, n, a, i, u) {
                                var s = new e,
                                    o = Buffer.from(i, "base64").toString("hex"),
                                    c = r.decrypt(n, a, o, u);
                                t || (t = pe(Ue(4)));
                                var l = c.getPublicKey();
                                s.ontid = Vt.generateOntid(l), s.label = t, s.lock = !1, s.isDefault = !1;
                                var h = new ei("1", r, Vt.fromOntid(s.ontid), i);
                                return h.publicKey = l.serializeHex(), s.controls.push(h), s
                            }
                        }, {
                            key: "create",
                            value: function(t, r, n, a) {
                                var i = new e;
                                i.ontid = "", i.label = n, i.lock = !1, i.isDefault = !1;
                                var u = t.getPublicKey();
                                i.ontid = Vt.generateOntid(u);
                                var s = Vt.fromOntid(i.ontid),
                                    o = Le(16),
                                    c = t.encrypt(r, s, o, a),
                                    l = Buffer.from(o, "hex").toString("base64"),
                                    h = new ei("1", c, s, l);
                                return h.publicKey = u.serializeHex(), i.controls.push(h), i
                            }
                        }, {
                            key: "parseJson",
                            value: function(t) {
                                return e.parseJsonObj(JSON.parse(t))
                            }
                        }, {
                            key: "parseJsonObj",
                            value: function(t) {
                                var r = new e;
                                return r.ontid = t.ontid, r.label = t.label, r.lock = t.lock, r.isDefault = t.isDefault, r.controls = t.controls.map((function(e) {
                                    return ei.fromJson(e)
                                })), r.extra = t.extra, r
                            }
                        }]), e
                    }(),
                    ri = function() {
                        function e() {
                            S()(this, e), this.version = 0
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = this.serializeUnsigned();
                                e += Re(this.scripts.length);
                                var t = !0,
                                    r = !1,
                                    n = void 0;
                                try {
                                    for (var a, i = ee()(this.scripts); !(t = (a = i.next()).done); t = !0) e += a.value.serialize()
                                } catch (e) {
                                    r = !0, n = e
                                } finally {
                                    try {
                                        !t && i.return && i.return()
                                    } finally {
                                        if (r) throw n
                                    }
                                }
                                return e
                            }
                        }, {
                            key: "serializeUnsigned",
                            value: function() {
                                var e = "";
                                e += Ee(this.type), e += Ee(this.version), e += this.serializeExclusiveData(), e += Re(this.attributes.length);
                                var t = !0,
                                    r = !1,
                                    n = void 0;
                                try {
                                    for (var a, i = ee()(this.attributes); !(t = (a = i.next()).done); t = !0) e += a.value.serialize()
                                } catch (e) {
                                    r = !0, n = e
                                } finally {
                                    try {
                                        !t && i.return && i.return()
                                    } finally {
                                        if (r) throw n
                                    }
                                }
                                e += Re(this.inputs.length);
                                var u = !0,
                                    s = !1,
                                    o = void 0;
                                try {
                                    for (var c, l = ee()(this.inputs); !(u = (c = l.next()).done); u = !0) e += c.value.serialize()
                                } catch (e) {
                                    s = !0, o = e
                                } finally {
                                    try {
                                        !u && l.return && l.return()
                                    } finally {
                                        if (s) throw o
                                    }
                                }
                                e += Re(this.outputs.length);
                                var h = !0,
                                    f = !1,
                                    d = void 0;
                                try {
                                    for (var v, y = ee()(this.outputs); !(h = (v = y.next()).done); h = !0) e += v.value.serialize()
                                } catch (e) {
                                    f = !0, d = e
                                } finally {
                                    try {
                                        !h && y.return && y.return()
                                    } finally {
                                        if (f) throw d
                                    }
                                }
                                return e
                            }
                        }, {
                            key: "getHash",
                            value: function() {
                                var e = this.serializeUnsigned(),
                                    t = re.enc.Hex.parse(e),
                                    r = re.SHA256(t).toString();
                                return re.SHA256(re.enc.Hex.parse(r)).toString()
                            }
                        }, {
                            key: "getSignContent",
                            value: function() {
                                return this.getHashData()
                            }
                        }, {
                            key: "serializeUnsignedData",
                            value: function() {
                                return this.getHashData()
                            }
                        }, {
                            key: "getHashData",
                            value: function() {
                                return this.serializeUnsigned()
                            }
                        }, {
                            key: "sign",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : je.ECDSAwithSHA256;
                                return e.sign(this.getHashData(), t).serializeHex().substring(2)
                            }
                        }, {
                            key: "serializeExclusiveData",
                            value: function() {
                                return ""
                            }
                        }]), e
                    }(),
                    ni = function(e) {
                        function t() {
                            S()(this, t);
                            var e = $e()(this, (t.__proto__ || Xe()(t)).call(this));
                            return e.type = Hr.Invoke, e
                        }
                        return tt()(t, e), k()(t, [{
                            key: "serializeExclusiveData",
                            value: function() {
                                var e = "";
                                return (e += Ae(this.script)) + Ee(this.gas, 8, !0)
                            }
                        }]), t
                    }(ri),
                    ai = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, null, [{
                            key: "sendRawTransaction",
                            value: function(e, t) {
                                var r = this.makeRequest("sendrawtransaction", t);
                                return de.a.post(e, r).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "makeRequest",
                            value: function(e) {
                                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                return {
                                    jsonrpc: "2.0",
                                    method: e,
                                    params: r,
                                    id: 1
                                }
                            }
                        }, {
                            key: "getBalance",
                            value: function(e, t, r) {
                                var n = this.makeRequest("getstorage", t.toHexString(), r.serialize());
                                return de.a.post(e, n).then((function(e) {
                                    return e.data
                                }))
                            }
                        }]), e
                    }(),
                    ii = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                return (e += Ae(this.parameter)) + Ae(this.code)
                            }
                        }], [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new Be,
                                    n = new e;
                                return n.parameter = r.readNextBytes(), n.code = r.readNextBytes(), n
                            }
                        }, {
                            key: "programFromParams",
                            value: function(e) {
                                return yt(e)
                            }
                        }, {
                            key: "programFromPubKey",
                            value: function(e) {
                                return dt(e)
                            }
                        }, {
                            key: "programFromMultiPubKey",
                            value: function(e, t) {
                                return vt(t, e)
                            }
                        }]), e
                    }(),
                    ui = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, null, [{
                            key: "makeInvokeTransaction",
                            value: function(e, t, r) {
                                var n = Ht(r);
                                return n += Ee(103), n += e.serialize(), this.makeInvocationTransaction(n, t)
                            }
                        }, {
                            key: "makeInvocationTransaction",
                            value: function(e, t) {
                                var r = new ni;
                                r.version = 1, r.attributes = [];
                                var n = new _r;
                                n.usage = yr.Script, n.data = t.serialize(), r.attributes[0] = n;
                                var a = new _r;
                                return a.usage = yr.DescriptionUrl, a.data = Le(16), r.attributes[1] = a, r.inputs = [], r.outputs = [], r.script = e, r.gas = 0, r
                            }
                        }]), e
                    }(),
                    si = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, [{
                            key: "equals",
                            value: function(t) {
                                return t === this || null !== t && t instanceof e && this.prevHash === t.prevHash && this.prevIndex === t.prevIndex
                            }
                        }, {
                            key: "hashCode",
                            value: function() {
                                return parseInt(Pe(this.prevHash), 16) + this.prevIndex
                            }
                        }, {
                            key: "serialize",
                            value: function() {
                                var e = "";
                                return (e += this.prevHash) + Ee(this.prevIndex, 2, !0)
                            }
                        }], [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new Be(t),
                                    n = new e;
                                return n.prevHash = r.read(20), n.prevIndex = parseInt(Pe(r.read(2)), 16), n
                            }
                        }]), e
                    }(),
                    oi = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                return e += this.assetId, (e += Ee(this.value, 8, !0)) + this.scriptHash.serialize()
                            }
                        }], [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new Be(t),
                                    n = new e;
                                return n.assetId = r.read(32), n.value = r.readLong(), n.scriptHash = new Vt(r.read(20)), n
                            }
                        }]), e
                    }(),
                    ci = function() {
                        function e(t) {
                            S()(this, e), this.url = t || V.RPC_URL
                        }
                        return k()(e, [{
                            key: "getUrl",
                            value: function() {
                                return this.url
                            }
                        }, {
                            key: "makeRequest",
                            value: function(e) {
                                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                return {
                                    jsonrpc: "2.0",
                                    method: e,
                                    params: r,
                                    id: 1
                                }
                            }
                        }, {
                            key: "getBalance",
                            value: function(e) {
                                var t = this.makeRequest("getbalance", e.toBase58());
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "sendRawTransaction",
                            value: function(e) {
                                var t = void 0;
                                return t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? this.makeRequest("sendrawtransaction", e, 1) : this.makeRequest("sendrawtransaction", e), de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getRawTransaction",
                            value: function(e) {
                                var t = this.makeRequest("getrawtransaction", e);
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getRawTransactionJson",
                            value: function(e) {
                                var t = this.makeRequest("getrawtransaction", e, 1);
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getNodeCount",
                            value: function() {
                                var e = this.makeRequest("getconnectioncount");
                                return de.a.post(this.url, e).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getBlockHeight",
                            value: function() {
                                var e = this.makeRequest("getblockcount");
                                return de.a.post(this.url, e).then((function(e) {
                                    return e.data && e.data.result ? e.data.result - 1 : 0
                                }))
                            }
                        }, {
                            key: "getBlockCount",
                            value: function() {
                                var e = this.makeRequest("getblockcount");
                                return de.a.post(this.url, e).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getBlockJson",
                            value: function(e) {
                                var t = this.makeRequest("getblock", e, 1);
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getContract",
                            value: function(e) {
                                var t = this.makeRequest("getcontractstate", e);
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getContractJson",
                            value: function(e) {
                                var t = this.makeRequest("getcontractstate", e, 1);
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getBlock",
                            value: function(e) {
                                var t = this.makeRequest("getblock", e);
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getSmartCodeEvent",
                            value: function(e) {
                                var t = this.makeRequest("getsmartcodeevent", e);
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getBlockHeightByTxHash",
                            value: function(e) {
                                var t = this.makeRequest("getblockheightbytxhash", e);
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getStorage",
                            value: function(e, t) {
                                var r = this.makeRequest("getstorage", e, t);
                                return console.log(r), de.a.post(this.url, r).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getMerkleProof",
                            value: function(e) {
                                var t = this.makeRequest("getmerkleproof", e);
                                return console.log(this.url), console.log(t), de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getAllowance",
                            value: function(e, t, r) {
                                if ("ont" !== e && "ong" !== e) throw g.INVALID_PARAMS;
                                var n = this.makeRequest("getallowance", e, t.toBase58(), r.toBase58());
                                return de.a.post(this.url, n).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getUnboundOng",
                            value: function(e) {
                                var t = this.makeRequest("getunboundong", "ong", e.toBase58(), e.toBase58());
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getBlockTxsByHeight",
                            value: function(e) {
                                var t = this.makeRequest("getblocktxsbyheight", e);
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getGasPrice",
                            value: function() {
                                var e = this.makeRequest("getgasprice");
                                return de.a.post(this.url, e).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getGrantOng",
                            value: function(e) {
                                var t = this.makeRequest("getgrantong", e.toBase58());
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getMempoolTxCount",
                            value: function() {
                                var e = this.makeRequest("getmempooltxcount");
                                return de.a.post(this.url, e).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getMempoolTxState",
                            value: function(e) {
                                var t = this.makeRequest("getmempooltxstate", e);
                                return de.a.post(this.url, t).then((function(e) {
                                    return e.data
                                }))
                            }
                        }, {
                            key: "getVersion",
                            value: function() {
                                var e = this.makeRequest("getversion");
                                return de.a.post(this.url, e).then((function(e) {
                                    return e.data
                                }))
                            }
                        }]), e
                    }(),
                    li = function e(t, r, n, a) {
                        S()(this, e), this.from = t.serialize(), this.to = r.serialize(), this.tokenId = Ee(n), this.value = new ue.BigNumber(a)
                    },
                    hi = function e(t, r, n, a, i) {
                        S()(this, e), this.spender = t.serialize(), this.from = r.serialize(), this.to = n.serialize(), this.tokenId = Ee(a), this.value = new ue.BigNumber(i)
                    },
                    fi = function() {
                        function e(t) {
                            S()(this, e), this.contractAddr = t
                        }
                        return k()(e, [{
                            key: "makeInitTx",
                            value: function(e, t, r) {
                                return Dn("init", [], this.contractAddr, e, t, r)
                            }
                        }, {
                            key: "makeTransferTx",
                            value: function(e, t, r, n, a, i, u) {
                                var s = [new Et("sender", mt.ByteArray, e.serialize()), new Et("recv", mt.ByteArray, t.serialize()), new Et("tokenId", mt.ByteArray, r), new Et("amount", mt.Long, n)];
                                return Dn("transfer", s, this.contractAddr, a, i, u)
                            }
                        }, {
                            key: "makeTransferMultiTx",
                            value: function(e, t, r, n) {
                                var a = [];
                                a.push(we("transferMulti"));
                                var i = [],
                                    u = !0,
                                    s = !1,
                                    o = void 0;
                                try {
                                    for (var c, l = ee()(e); !(u = (c = l.next()).done); u = !0) {
                                        var h = c.value;
                                        i.push([h.from, h.to, h.tokenId, h.value])
                                    }
                                } catch (e) {
                                    s = !0, o = e
                                } finally {
                                    try {
                                        !u && l.return && l.return()
                                    } finally {
                                        if (s) throw o
                                    }
                                }
                                a.push(i);
                                var f = Lt(a);
                                return Dn("", f, this.contractAddr, t, r, n)
                            }
                        }, {
                            key: "makeApproveTx",
                            value: function(e, t, r, n, a, i, u) {
                                var s = [new Et("owner", mt.ByteArray, e.serialize()), new Et("spender", mt.ByteArray, t.serialize()), new Et("tokenId", mt.ByteArray, Ee(r)), new Et("amount", mt.Long, n)];
                                return Dn("approve", s, this.contractAddr, a, i, u)
                            }
                        }, {
                            key: "makeApproveMulti",
                            value: function(e, t, r, n) {
                                var a = [];
                                a.push(we("approveMulti"));
                                var i = [],
                                    u = !0,
                                    s = !1,
                                    o = void 0;
                                try {
                                    for (var c, l = ee()(e); !(u = (c = l.next()).done); u = !0) {
                                        var h = c.value;
                                        i.push([h.from, h.to, h.tokenId, h.value])
                                    }
                                } catch (e) {
                                    s = !0, o = e
                                } finally {
                                    try {
                                        !u && l.return && l.return()
                                    } finally {
                                        if (s) throw o
                                    }
                                }
                                a.push(i);
                                var f = Lt(a);
                                return Dn("", f, this.contractAddr, t, r, n)
                            }
                        }, {
                            key: "makeTransferFromMulti",
                            value: function(e, t, r, n) {
                                var a = [];
                                a.push(we("transferFromMulti"));
                                var i = [],
                                    u = !0,
                                    s = !1,
                                    o = void 0;
                                try {
                                    for (var c, l = ee()(e); !(u = (c = l.next()).done); u = !0) {
                                        var h = c.value;
                                        i.push([h.spender, h.from, h.to, h.tokenId, h.value])
                                    }
                                } catch (e) {
                                    s = !0, o = e
                                } finally {
                                    try {
                                        !u && l.return && l.return()
                                    } finally {
                                        if (s) throw o
                                    }
                                }
                                a.push(i);
                                var f = Lt(a);
                                return Dn("", f, this.contractAddr, t, r, n)
                            }
                        }, {
                            key: "makeTransferFromTx",
                            value: function(e, t, r, n, a, i, u, s) {
                                var o = [new Et("sender", mt.ByteArray, e.serialize()), new Et("from", mt.ByteArray, t.serialize()), new Et("to", mt.ByteArray, r.serialize()), new Et("tokenId", mt.ByteArray, Ee(n)), new Et("amount", mt.Long, a)];
                                return Dn("transferFrom", o, this.contractAddr, i, u, s)
                            }
                        }, {
                            key: "makeCompoundTx",
                            value: function(e, t, r, n, a) {
                                var i = [new Et("account", mt.ByteArray, e.serialize()), new Et("compoundNum", mt.Integer, t)];
                                return Dn("compound", i, this.contractAddr, r, n, a)
                            }
                        }, {
                            key: "makeQueryAllowanceTx",
                            value: function(e, t, r) {
                                var n = [new Et("owner", mt.ByteArray, e.serialize()), new Et("spender", mt.ByteArray, t.serialize()), new Et("tokenId", mt.ByteArray, Ee(r))];
                                return Dn("allowance", n, this.contractAddr)
                            }
                        }, {
                            key: "makeQueryBalanceOfTx",
                            value: function(e, t) {
                                var r = [new Et("addr", mt.ByteArray, e.serialize()), new Et("tokenId", mt.ByteArray, Ee(t))];
                                return Dn("balanceOf", r, this.contractAddr)
                            }
                        }, {
                            key: "makeQueryTotalSupplyTx",
                            value: function(e) {
                                var t = [new Et("tokenId", mt.ByteArray, Ee(e))];
                                return Dn("totalSupply", t, this.contractAddr)
                            }
                        }, {
                            key: "makeQueryNameTx",
                            value: function(e) {
                                var t = [new Et("tokenId", mt.ByteArray, Ee(e))];
                                return Dn("name", t, this.contractAddr)
                            }
                        }, {
                            key: "makeQueryDecimalsTx",
                            value: function() {
                                return Dn("symbol", [], this.contractAddr)
                            }
                        }, {
                            key: "makeQuerySymbolTx",
                            value: function(e) {
                                var t = [new Et("tokenId", mt.ByteArray, Ee(e))];
                                return Dn("symbol", t, this.contractAddr)
                            }
                        }, {
                            key: "makeQueryBalancesTx",
                            value: function(e) {
                                var t = [new Et("account", mt.ByteArray, e.serialize())];
                                return Dn("balancesOf", t, this.contractAddr)
                            }
                        }, {
                            key: "makeQueryTotalBalanceTx",
                            value: function(e) {
                                var t = [new Et("account", mt.ByteArray, e.serialize())];
                                return Dn("totalBalanceOf", t, this.contractAddr)
                            }
                        }]), e
                    }(),
                    di = function() {
                        function e() {
                            S()(this, e), this.defaultOntid = "", this.defaultAccountAddress = "", this.identities = [], this.accounts = []
                        }
                        return k()(e, [{
                            key: "addAccount",
                            value: function(e) {
                                var t = !0,
                                    r = !1,
                                    n = void 0;
                                try {
                                    for (var a, i = ee()(this.accounts); !(t = (a = i.next()).done); t = !0)
                                        if (a.value.address.toBase58() === e.address.toBase58()) return
                                } catch (e) {
                                    r = !0, n = e
                                } finally {
                                    try {
                                        !t && i.return && i.return()
                                    } finally {
                                        if (r) throw n
                                    }
                                }
                                this.accounts.push(e)
                            }
                        }, {
                            key: "addIdentity",
                            value: function(e) {
                                var t = !0,
                                    r = !1,
                                    n = void 0;
                                try {
                                    for (var a, i = ee()(this.identities); !(t = (a = i.next()).done); t = !0)
                                        if (a.value.ontid === e.ontid) return
                                } catch (e) {
                                    r = !0, n = e
                                } finally {
                                    try {
                                        !t && i.return && i.return()
                                    } finally {
                                        if (r) throw n
                                    }
                                }
                                this.identities.push(e)
                            }
                        }, {
                            key: "setDefaultAccount",
                            value: function(e) {
                                this.defaultAccountAddress = e
                            }
                        }, {
                            key: "setDefaultIdentity",
                            value: function(e) {
                                this.defaultOntid = e
                            }
                        }, {
                            key: "toJson",
                            value: function() {
                                return R()(this.toJsonObj())
                            }
                        }, {
                            key: "toJsonObj",
                            value: function() {
                                return {
                                    name: this.name,
                                    defaultOntid: this.defaultOntid,
                                    defaultAccountAddress: this.defaultAccountAddress,
                                    createTime: this.createTime,
                                    version: this.version,
                                    scrypt: this.scrypt,
                                    identities: this.identities.map((function(e) {
                                        return e.toJsonObj()
                                    })),
                                    accounts: this.accounts.map((function(e) {
                                        return e.toJsonObj()
                                    })),
                                    extra: null
                                }
                            }
                        }, {
                            key: "signatureData",
                            value: function() {
                                return ""
                            }
                        }, {
                            key: "toWalletFile",
                            value: function() {
                                return this.toJsonObj()
                            }
                        }], [{
                            key: "parseJson",
                            value: function(t) {
                                return e.parseJsonObj(JSON.parse(t))
                            }
                        }, {
                            key: "parseJsonObj",
                            value: function(t) {
                                var r = new e;
                                return r.name = t.name, r.defaultOntid = t.defaultOntid, r.defaultAccountAddress = t.defaultAccountAddress, r.createTime = t.createTime, r.version = t.version, r.scrypt = t.scrypt, r.identities = t.identities && t.identities.map((function(e) {
                                    return ti.parseJsonObj(e)
                                })), r.accounts = t.accounts && t.accounts.map((function(e) {
                                    return qn.parseJsonObj(e)
                                })), r.extra = t.extra, r
                            }
                        }, {
                            key: "fromWalletFile",
                            value: function(t) {
                                return e.parseJsonObj(t)
                            }
                        }, {
                            key: "create",
                            value: function(t) {
                                var r = new e;
                                return r.name = t, r.createTime = (new Date).toISOString(), r.version = "1.0", r.scrypt = {
                                    n: I.cost,
                                    r: I.blockSize,
                                    p: I.parallel,
                                    dkLen: I.size
                                }, r
                            }
                        }]), e
                    }(),
                    vi = function(e) {
                        var t = Ie(se.fromString(e));
                        return new Et("value", mt.ByteArray, t)
                    },
                    yi = function e(t, r, n) {
                        S()(this, e), this.from = t.serialize(), this.to = r.serialize(), this.amount = vi(n).value
                    },
                    pi = function() {
                        function e(t) {
                            S()(this, e), this.contractAddr = t
                        }
                        return k()(e, [{
                            key: "init",
                            value: function(e, t, r) {
                                return Dn("init", [], this.contractAddr, e, t, r)
                            }
                        }, {
                            key: "makeTransferTx",
                            value: function(e, t, r, n, a, i) {
                                var u = new Et("from", mt.ByteArray, e.serialize()),
                                    s = new Et("to", mt.ByteArray, t.serialize()),
                                    o = vi(r);
                                return Dn("transfer", [u, s, o], this.contractAddr, n, a, i)
                            }
                        }, {
                            key: "makeTransferMultiTx",
                            value: function(e, t, r, n) {
                                var a = [];
                                a.push(we("transferMulti"));
                                var i = [],
                                    u = !0,
                                    s = !1,
                                    o = void 0;
                                try {
                                    for (var c, l = ee()(e); !(u = (c = l.next()).done); u = !0) {
                                        var h = c.value;
                                        i.push([h.from, h.to, h.amount])
                                    }
                                } catch (e) {
                                    s = !0, o = e
                                } finally {
                                    try {
                                        !u && l.return && l.return()
                                    } finally {
                                        if (s) throw o
                                    }
                                }
                                a.push(i);
                                var f = Lt(a);
                                return Dn("", f, this.contractAddr, t, r, n)
                            }
                        }, {
                            key: "makeApproveTx",
                            value: function(e, t, r, n, a, i) {
                                var u = [new Et("owner", mt.ByteArray, e.serialize()), new Et("spender", mt.ByteArray, t.serialize()), vi(r)];
                                return Dn("approve", u, this.contractAddr, n, a, i)
                            }
                        }, {
                            key: "makeTransferFromTx",
                            value: function(e, t, r, n, a, i, u) {
                                var s = [new Et("owner", mt.ByteArray, e.serialize()), new Et("from", mt.ByteArray, t.serialize()), new Et("to", mt.ByteArray, r.serialize()), vi(n)];
                                return Dn("transferFrom", s, this.contractAddr, a, i, u)
                            }
                        }, {
                            key: "makeQueryAllowanceTx",
                            value: function(e, t) {
                                var r = [new Et("owner", mt.ByteArray, e.serialize()), new Et("spender", mt.ByteArray, t.serialize())];
                                return Dn("allowance", r, this.contractAddr)
                            }
                        }, {
                            key: "queryBalanceOf",
                            value: function(e) {
                                var t = new Et("from", mt.ByteArray, e.serialize());
                                return Dn("balanceOf", [t], this.contractAddr)
                            }
                        }, {
                            key: "queryTotalSupply",
                            value: function() {
                                return Dn("totalSupply", [], this.contractAddr)
                            }
                        }, {
                            key: "queryDecimals",
                            value: function() {
                                return Dn("decimals", [], this.contractAddr)
                            }
                        }, {
                            key: "querySymbol",
                            value: function() {
                                return Dn("symbol", [], this.contractAddr)
                            }
                        }, {
                            key: "queryName",
                            value: function() {
                                return Dn("name", [], this.contractAddr)
                            }
                        }]), e
                    }(),
                    gi = r(29),
                    mi = "ceab719b8baa2310f232ee0d277c061704541cfb",
                    wi = "http://neonode1.ont.network:10332",
                    Si = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, null, [{
                            key: "setServerNode",
                            value: function(t) {
                                if (t) {
                                    var r;
                                    return r = t.indexOf("http") > -1 ? t.substr("http://".length) : t, void(e.SERVER_NODE = r)
                                }
                                throw new Error("Can not set " + t + "as server node")
                            }
                        }, {
                            key: "setRestPort",
                            value: function(t) {
                                if (t) return e.REST_PORT = t, void(e.restClient = new ta("http://" + e.SERVER_NODE + ":" + e.REST_PORT));
                                throw new Error("Can not set " + t + " as restful port")
                            }
                        }, {
                            key: "setSocketPort",
                            value: function(t) {
                                if (t) return e.SOCKET_PORT = t, void(e.socketClient = new Ea("ws://" + e.SERVER_NODE + ":" + e.SOCKET_PORT));
                                throw new Error("Can not set " + t + "as socket port")
                            }
                        }, {
                            key: "getDecryptError",
                            value: function(e) {
                                return {
                                    error: g.Decrypto_ERROR,
                                    result: ""
                                }
                            }
                        }, {
                            key: "transformPassword",
                            value: function(e) {
                                return Ge(e) ? Buffer.from(e, "base64").toString() : e
                            }
                        }, {
                            key: "createWallet",
                            value: function(t, r, n, a, i, u) {
                                var s = di.create(t);
                                r = this.transformPassword(r);
                                var o = lr.random(),
                                    c = ti.create(o, r, t);
                                s.defaultOntid = c.ontid, s.addIdentity(c);
                                var l = {
                                        error: 0,
                                        result: s.toJson(),
                                        tx: ""
                                    },
                                    h = o.getPublicKey(),
                                    f = vn(c.ontid, h, a, i);
                                return f.payer = new Vt(n), Tn(f, o), o.key = "", r = "", new ta("http://" + e.SERVER_NODE + ":" + e.REST_PORT).sendRawTransaction(f.serialize(), !0).then((function(e) {
                                    if ("01" === e.Result.Result) return l.tx = f.serialize(), u && Ce(R()(l), u), l;
                                    var t = {
                                        error: g.PreExec_ERROR,
                                        result: ""
                                    };
                                    return u && Ce(R()(t), u), t
                                })).catch((function(e) {
                                    l = {
                                        error: g.NETWORK_ERROR,
                                        result: ""
                                    }, u && Ce(R()(l), u)
                                }))
                            }
                        }, {
                            key: "importIdentityWithPrivateKey",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    r = arguments[1],
                                    n = arguments[2],
                                    a = arguments[3];
                                if (r = r.trim(), n = this.transformPassword(n), !r || 64 !== r.length || !We(r)) {
                                    var i = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return a && Ce(R()(i), a), i
                                }
                                var u = void 0,
                                    s = new lr(r),
                                    o = ti.create(s, n, t);
                                u = {
                                    error: g.SUCCESS,
                                    result: o.toJson()
                                };
                                var c = wn(o.ontid);
                                return new ta("http://" + e.SERVER_NODE + ":" + e.REST_PORT).sendRawTransaction(c.serialize(), !0).then((function(e) {
                                    return e.Result.Result || (u.error = g.UNKNOWN_ONTID, u.result = ""), a && Ce(R()(u), a), u
                                })).catch((function(e) {
                                    u = {
                                        error: g.NETWORK_ERROR,
                                        result: ""
                                    }, a && Ce(R()(u), a)
                                }))
                            }
                        }, {
                            key: "importIdentityWithWif",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    r = arguments[1],
                                    n = arguments[2],
                                    a = arguments[3];
                                r = r.trim(), n = this.transformPassword(n);
                                var i = void 0,
                                    u = void 0;
                                try {
                                    u = lr.deserializeWIF(r)
                                } catch (e) {
                                    var s = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return a && Ce(R()(s), a), s
                                }
                                var o = ti.create(u, n, t);
                                i = {
                                    error: g.SUCCESS,
                                    result: o.toJson()
                                };
                                var c = wn(o.ontid);
                                return new ta("http://" + e.SERVER_NODE + ":" + e.REST_PORT).sendRawTransaction(c.serialize(), !0).then((function(e) {
                                    return e.Result.Result || (i.error = g.UNKNOWN_ONTID, i.result = ""), a && Ce(R()(i), a), i
                                })).catch((function(e) {
                                    i = {
                                        error: g.NETWORK_ERROR,
                                        result: ""
                                    }, a && Ce(R()(i), a)
                                }))
                            }
                        }, {
                            key: "importIdentityWithWifOffChain",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    t = arguments[1],
                                    r = arguments[2],
                                    n = arguments[3];
                                t = t.trim(), r = this.transformPassword(r);
                                var a, i = void 0;
                                try {
                                    i = lr.deserializeWIF(t)
                                } catch (e) {
                                    var u = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return n && Ce(R()(u), n), u
                                }
                                var s = ti.create(i, r, e);
                                return a = {
                                    error: g.SUCCESS,
                                    result: s.toJson()
                                }, n && Ce(R()(a), n), a
                            }
                        }, {
                            key: "importIdentityWithWallet",
                            value: function(t, r, n, a, i, u) {
                                var s = void 0,
                                    o = new ti;
                                try {
                                    var c = new lr(r),
                                        l = new Vt(a);
                                    n = this.transformPassword(n), o = ti.importIdentity(t, c, n, l, i)
                                } catch (e) {
                                    return s = this.getDecryptError(e), u && Ce(R()(s), u), s
                                }
                                s = {
                                    error: g.SUCCESS,
                                    result: o.toJson()
                                };
                                var h = zn(wn(o.ontid)),
                                    f = Un("http://" + e.SERVER_NODE + ":" + e.REST_PORT, !0);
                                return n = "", de.a.post(f, h).then((function(e) {
                                    return e.data.Result.Result || (s.error = g.UNKNOWN_ONTID, s.result = ""), u && Ce(R()(s), u), s
                                })).catch((function(e) {
                                    s = {
                                        error: g.NETWORK_ERROR,
                                        result: ""
                                    }, u && Ce(R()(s), u)
                                }))
                            }
                        }, {
                            key: "importIdentityAndCreateWallet",
                            value: function(t, r, n, a, i, u) {
                                var s = new ti,
                                    o = {},
                                    c = void 0;
                                try {
                                    n = this.transformPassword(n);
                                    var l = new lr(r),
                                        h = new Vt(a);
                                    s = ti.importIdentity(t, l, n, h, i);
                                    var f = di.create(s.label);
                                    f.defaultOntid = s.ontid, f.addIdentity(s);
                                    var d = f.toJson();
                                    c = {
                                        error: g.SUCCESS,
                                        result: d
                                    };
                                    var v = zn(wn(s.ontid)),
                                        y = Un("http://" + e.SERVER_NODE + ":" + e.REST_PORT, !0);
                                    return de.a.post(y, v).then((function(e) {
                                        return e.data.Result.Result || (c.error = g.UNKNOWN_ONTID, c.result = ""), n = "", u && Ce(R()(c), u), c
                                    })).catch((function(e) {
                                        c = {
                                            error: g.NETWORK_ERROR,
                                            result: ""
                                        }, u && Ce(R()(c), u)
                                    }))
                                } catch (e) {
                                    return o = this.getDecryptError(e), u && Ce(R()(o), u), na.a.reject(o)
                                }
                            }
                        }, {
                            key: "createIdentity",
                            value: function(t, r, n, a, i, u) {
                                var s = lr.random();
                                r = this.transformPassword(r);
                                var o = ti.create(s, r, t),
                                    c = o.toJson(),
                                    l = {
                                        error: g.SUCCESS,
                                        result: c,
                                        tx: ""
                                    },
                                    h = s.getPublicKey(),
                                    f = vn(o.ontid, h, a, i);
                                return f.payer = new Vt(n), Tn(f, s), r = "", s.key = "", new ta("http://" + e.SERVER_NODE + ":" + e.REST_PORT).sendRawTransaction(f.serialize(), !0).then((function(e) {
                                    if ("01" === e.Result.Result) return l.tx = f.serialize(), u && Ce(R()(l), u), s.key = "", r = "", l;
                                    var t = {
                                        error: g.PreExec_ERROR,
                                        result: ""
                                    };
                                    return u && Ce(R()(t), u), t
                                })).catch((function(e) {
                                    l = {
                                        error: g.NETWORK_ERROR,
                                        result: ""
                                    }, u && Ce(R()(l), u)
                                }))
                            }
                        }, {
                            key: "createAccount",
                            value: function(e, t, r) {
                                var n = Me();
                                t = this.transformPassword(t);
                                var a = we(n),
                                    i = lr.generateFromMnemonic(n),
                                    u = qn.create(i, t, e),
                                    s = ir(a, u.address, Buffer.from(u.salt, "base64").toString("hex"), t),
                                    o = u.toJson(),
                                    c = {
                                        error: g.SUCCESS,
                                        result: o,
                                        mnemonicEnc: s
                                    };
                                return r && Ce(R()(c), r), i.key = "", t = "", n = "", c
                            }
                        }, {
                            key: "decryptMnemonicEnc",
                            value: function(e, t, r, n, a) {
                                var i;
                                n = this.transformPassword(n);
                                var u = Se(ur(e, new Vt(t), Buffer.from(r, "base64").toString("hex"), n));
                                return i = {
                                    error: g.SUCCESS,
                                    result: u
                                }, a && Ce(R()(i), a), i
                            }
                        }, {
                            key: "importAccountWithWallet",
                            value: function(e, t, r, n, a, i) {
                                var u = new qn;
                                a = this.transformPassword(a);
                                var s = new lr(t);
                                try {
                                    var o = new Vt(r);
                                    u = qn.importAccount(e, s, a, o, n)
                                } catch (e) {
                                    var c = this.getDecryptError(e);
                                    return i && Ce(R()(c), i), c
                                }
                                var l = {
                                    error: g.SUCCESS,
                                    result: u.toJson()
                                };
                                return r !== u.address.toBase58() && (l.error = g.INVALID_ADDR, l.result = ""), i && Ce(R()(l), i), a = "", l
                            }
                        }, {
                            key: "signSelfClaim",
                            value: function(t, r, n, a, i, u, s, o) {
                                var c = void 0;
                                i = this.transformPassword(i);
                                var l = new lr(a),
                                    h = "http://" + e.SERVER_NODE + ":" + e.REST_PORT + M.sendRawTx;
                                try {
                                    var f = new Vt(u),
                                        d = Buffer.from(s, "base64").toString("hex");
                                    c = l.decrypt(i, f, d)
                                } catch (e) {
                                    var v = this.getDecryptError(e);
                                    return o && Ce(R()(v), o), v
                                }
                                var y = {
                                        issuer: n,
                                        subject: n,
                                        issuedAt: Oe()
                                    },
                                    p = n + "#keys-1",
                                    g = new Qa(y, void 0, void 0);
                                g.sign(h, p, c);
                                var m = {
                                    error: 0,
                                    result: g
                                };
                                return o && Ce(R()(m), o), c.key = "", i = "", m
                            }
                        }, {
                            key: "decryptEncryptedPrivateKey",
                            value: function(e, t, r, n, a) {
                                t = this.transformPassword(t);
                                var i = new lr(e),
                                    u = void 0;
                                try {
                                    var s = new Vt(r),
                                        o = Buffer.from(n, "base64").toString("hex");
                                    u = i.decrypt(t, s, o)
                                } catch (e) {
                                    var c = this.getDecryptError(e);
                                    return a && Ce(R()(c), a), c
                                }
                                var l = {
                                    error: 0,
                                    result: u.key
                                };
                                return a && Ce(R()(l), a), t = "", l
                            }
                        }, {
                            key: "getClaim",
                            value: function(t, r, n, a, i, u, s, o, c, l, h, f) {
                                var d = void 0;
                                u = this.transformPassword(u);
                                var v = new lr(i);
                                try {
                                    var y = new Vt(s),
                                        p = Buffer.from(o, "base64").toString("hex");
                                    d = v.decrypt(u, y, p)
                                } catch (e) {
                                    var m = this.getDecryptError(e);
                                    return f && Ce(R()(m), f), m
                                }
                                var w = "claim" + t,
                                    S = {
                                        Type: "JSON",
                                        Value: {
                                            Context: r,
                                            Issuer: n
                                        }
                                    },
                                    A = R()(S),
                                    k = new Va;
                                k.key = w, k.type = "JSON", k.value = A;
                                var x = pn(a, [k], d.getPublicKey(), l, h);
                                return x.payer = new Vt(c), Tn(x, d), new ta("http://" + e.SERVER_NODE + ":" + e.REST_PORT).sendRawTransaction(x.serialize(), !0).then((function(e) {
                                    if ("01" === e.Result.Result) {
                                        var t = {
                                            error: g.SUCCESS,
                                            result: "",
                                            tx: x.serialize()
                                        };
                                        return f && Ce(R()(t), f), d.key = "", u = "", t
                                    }
                                    var r = {
                                        error: g.PreExec_ERROR,
                                        result: ""
                                    };
                                    return f && Ce(R()(r), f), r
                                })).catch((function(e) {
                                    var t = {
                                        error: g.NETWORK_ERROR,
                                        result: ""
                                    };
                                    f && Ce(R()(t), f)
                                }))
                            }
                        }, {
                            key: "signData",
                            value: function(e, t, r, n, a, i) {
                                var u = void 0;
                                r = this.transformPassword(r);
                                var s = new lr(t),
                                    o = void 0;
                                try {
                                    var c = new Vt(n),
                                        l = Buffer.from(a, "base64").toString("hex");
                                    u = s.decrypt(r, c, l)
                                } catch (e) {
                                    return o = this.getDecryptError(e), i && Ce(R()(o), i), o
                                }
                                return o = u.sign(e).serializePgp(), i && Ce(R()(o), i), u.key = "", r = "", o
                            }
                        }, {
                            key: "getBalance",
                            value: function(t, r) {
                                var n = new Vt(t),
                                    a = "http://" + e.SERVER_NODE + ":" + e.REST_PORT + M.getBalance + "/" + n.toBase58();
                                return de.a.get(a).then((function(e) {
                                    if (0 === e.data.Error) {
                                        var t = {
                                            error: 0,
                                            result: e.data.Result
                                        };
                                        return r && Ce(R()(t), r), t
                                    }
                                    var n = {
                                        error: e.data.Error,
                                        result: ""
                                    };
                                    return r && Ce(R()(n), r), n
                                })).catch((function(e) {
                                    var t = {
                                        error: g.NETWORK_ERROR,
                                        result: ""
                                    };
                                    return r && Ce(R()(t), r), na.a.reject(t)
                                }))
                            }
                        }, {
                            key: "transferAssets",
                            value: function(e, t, r, n, a, i, u, s, o, c, l) {
                                var h = void 0,
                                    f = void 0;
                                i = this.transformPassword(i);
                                try {
                                    h = new Vt(t), f = new Vt(r)
                                } catch (e) {
                                    var d = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return l && Ce(R()(d), l), d
                                }
                                var v = void 0,
                                    y = new lr(a);
                                try {
                                    var p = new Vt(t),
                                        m = Buffer.from(u, "base64").toString("hex");
                                    v = y.decrypt(i, p, m)
                                } catch (e) {
                                    var w = this.getDecryptError(e);
                                    return l && Ce(R()(w), l), w
                                }
                                var S = qr(e, h, f, n, s, o);
                                S.payer = new Vt(c), Tn(S, v);
                                var A = {
                                    error: g.SUCCESS,
                                    result: "",
                                    tx: S.serialize(),
                                    txHash: Pe(S.getSignContent())
                                };
                                return l && Ce(R()(A), l), v.key = "", i = "", A
                            }
                        }, {
                            key: "claimOng",
                            value: function(e, t, r, n, a, i, u, s, o) {
                                var c = void 0;
                                n = this.transformPassword(n);
                                try {
                                    c = new Vt(e)
                                } catch (e) {
                                    var l = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return o && Ce(R()(l), o), l
                                }
                                var h = void 0,
                                    f = new lr(r);
                                try {
                                    var d = Buffer.from(a, "base64").toString("hex");
                                    h = f.decrypt(n, c, d)
                                } catch (e) {
                                    var v = this.getDecryptError(e);
                                    return o && Ce(R()(v), o), v
                                }
                                var y = Qr(c, c, t, new Vt(s), i, u);
                                Tn(y, h);
                                var p = {
                                    error: g.SUCCESS,
                                    result: "",
                                    tx: y.serialize(),
                                    txHash: Pe(y.getSignContent())
                                };
                                return o && Ce(R()(p), o), h.key = "", n = "", p
                            }
                        }, {
                            key: "exportIdentityToQrcode",
                            value: function(e, t) {
                                var r = ti.parseJson(e),
                                    n = r.controls[0].salt;
                                Ge(n) || (n = Buffer.from(n, "hex").toString("base64"));
                                var a = {
                                    type: "I",
                                    label: r.label,
                                    algorithm: "ECDSA",
                                    scrypt: {
                                        n: 4096,
                                        p: 8,
                                        r: 8,
                                        dkLen: 64
                                    },
                                    key: r.controls[0].encryptedKey.key,
                                    salt: n,
                                    address: r.controls[0].address.toBase58(),
                                    parameters: {
                                        curve: "secp256r1"
                                    }
                                };
                                return t && Ce(R()(a), t), a
                            }
                        }, {
                            key: "exportIdentityToKeystring",
                            value: function(e, t) {
                                var r = ti.parseJson(e),
                                    n = r.controls[0].address.toBase58(),
                                    a = r.controls[0].salt + n + r.controls[0].encryptedKey.key;
                                return t && Ce(R()(a), t), a
                            }
                        }, {
                            key: "exportAccountToQrcode",
                            value: function(e, t) {
                                var r = qn.parseJson(e),
                                    n = {
                                        type: "A",
                                        label: r.label,
                                        algorithm: "ECDSA",
                                        scrypt: {
                                            n: 4096,
                                            p: 8,
                                            r: 8,
                                            dkLen: 64
                                        },
                                        key: r.encryptedKey.key,
                                        salt: r.salt,
                                        address: r.address.toBase58(),
                                        parameters: {
                                            curve: "secp256r1"
                                        }
                                    };
                                return t && Ce(R()(n), t), n
                            }
                        }, {
                            key: "exportAccountToKeystring",
                            value: function(e, t) {
                                var r = qn.parseJson(e),
                                    n = r.salt + r.address.toBase58() + r.encryptedKey.key;
                                return t && Ce(R()(n), t), n
                            }
                        }, {
                            key: "importAccountMnemonic",
                            value: function(e, t, r, n) {
                                if (t = t.trim(), r = this.transformPassword(r), !P.validateMnemonic(t)) {
                                    var a = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return n && Ce(R()(a), n), a
                                }
                                var i = P.mnemonicToSeedHex(t),
                                    u = gi.fromMasterSeed(Buffer.from(i, "hex")).derive(j),
                                    s = Buffer.from(u.privateKey).toString("hex"),
                                    o = new lr(s),
                                    c = qn.create(o, r, e).toJson(),
                                    l = {
                                        error: g.SUCCESS,
                                        result: c
                                    };
                                return n && Ce(R()(l), n), o.key = "", r = "", t = "", l
                            }
                        }, {
                            key: "exportWifPrivakeKey",
                            value: function(e, t, r, n, a) {
                                if (34 !== r.length && 40 !== r.length) {
                                    var i = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return a && Ce(R()(i), a), i
                                }
                                t = this.transformPassword(t);
                                var u = new lr(e),
                                    s = new Vt(r),
                                    o = Buffer.from(n, "base64").toString("hex"),
                                    c = u.decrypt(t, s, o),
                                    l = c.serializeWIF(),
                                    h = {
                                        error: g.SUCCESS,
                                        result: {
                                            wif: l,
                                            privateKey: c.key
                                        }
                                    };
                                return a && Ce(R()(h), a), c.key = "", l = "", t = "", h
                            }
                        }, {
                            key: "importAccountWithWif",
                            value: function(e, t, r, n) {
                                var a = void 0;
                                r = this.transformPassword(r);
                                try {
                                    a = lr.deserializeWIF(t)
                                } catch (e) {
                                    var i = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return n && Ce(R()(i), n), i
                                }
                                var u = qn.create(a, r, e),
                                    s = {
                                        error: g.SUCCESS,
                                        result: u.toJson()
                                    };
                                return n && Ce(R()(s), n), a.key = "", r = "", s
                            }
                        }, {
                            key: "importAccountWithPrivateKey",
                            value: function(e, t, r, n) {
                                if (t = t.trim(), r = this.transformPassword(r), !t || 64 !== t.length || !We(t)) {
                                    var a = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return n && Ce(R()(a), n), a
                                }
                                var i = new lr(t),
                                    u = qn.create(i, r, e),
                                    s = {
                                        error: g.SUCCESS,
                                        result: u.toJson()
                                    };
                                return n && Ce(R()(s), n), t = "", r = "", s
                            }
                        }, {
                            key: "importAccountWithKeystore",
                            value: function(e, t, r) {
                                var n = void 0;
                                t = this.transformPassword(t);
                                try {
                                    n = JSON.parse(e)
                                } catch (e) {
                                    var a = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return r && Ce(R()(a), r), a
                                }
                                if ("A" !== n.type) {
                                    var i = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return r && Ce(R()(i), r), i
                                }
                                var u = new qn,
                                    s = new lr(n.key);
                                try {
                                    var o = {
                                            cost: n.scrypt.n || 4096,
                                            blockSize: n.scrypt.p || 8,
                                            parallel: n.scrypt.r || 8,
                                            size: n.scrypt.dkLen || 64
                                        },
                                        c = new Vt(n.address);
                                    u = qn.importAccount(n.label, s, t, c, n.salt, o);
                                    var l = {
                                        error: g.SUCCESS,
                                        result: u.toJson()
                                    };
                                    return r && Ce(R()(l), r), t = "", l
                                } catch (e) {
                                    var h = this.getDecryptError(e);
                                    return r && Ce(R()(h), r), h
                                }
                            }
                        }, {
                            key: "getUnclaimedOng",
                            value: function(t, r) {
                                return new ta("http://" + e.SERVER_NODE + ":" + e.REST_PORT).getAllowance("ong", new Vt(Gr), new Vt(t)).then((function(e) {
                                    var t = {
                                        error: g.SUCCESS,
                                        result: e.Result
                                    };
                                    return r && Ce(R()(t), r), t
                                })).catch((function(e) {
                                    var t = {
                                        error: e.Error,
                                        result: ""
                                    };
                                    return r && Ce(R()(t), r), t
                                }))
                            }
                        }, {
                            key: "querySmartCodeEventByTxhash",
                            value: function(t, r) {
                                return new ta("http://" + e.SERVER_NODE + ":" + e.REST_PORT).getSmartCodeEvent(t).then((function(e) {
                                    var t = {
                                        error: g.SUCCESS,
                                        result: e
                                    };
                                    return r && Ce(R()(t), r), t
                                })).catch((function(e) {
                                    var t = {
                                        error: e.Error,
                                        result: ""
                                    };
                                    return r && Ce(R()(t), r), t
                                }))
                            }
                        }, {
                            key: "createSharedWallet",
                            value: function(e, t, r) {
                                var n = parseInt(e, 10),
                                    a = [],
                                    i = [],
                                    u = g.SUCCESS;
                                try {
                                    i = (a = JSON.parse(t)).map((function(e) {
                                        return ut.deserializeHex(new Be(e))
                                    }))
                                } catch (e) {
                                    u = g.INVALID_PARAMS
                                }(n < 2 || a.length < n || a.length > 12) && (u = g.INVALID_PARAMS);
                                var s = "";
                                try {
                                    s = Vt.fromMultiPubKeys(n, i).toBase58()
                                } catch (e) {
                                    u = g.INVALID_PARAMS
                                }
                                if (r) {
                                    var o = {
                                        error: u,
                                        result: s
                                    };
                                    Ce(R()(o), r)
                                }
                                return s
                            }
                        }, {
                            key: "adderssFromPublicKey",
                            value: function(e, t) {
                                var r = ut.deserializeHex(new Be(e)),
                                    n = Vt.fromPubKey(r).toBase58(),
                                    a = {
                                        error: g.SUCCESS,
                                        result: n
                                    };
                                return t && Ce(R()(a), t), n
                            }
                        }, {
                            key: "makeMultiSignTransaction",
                            value: function(e, t, r, n, a, i, u) {
                                var s = void 0,
                                    o = void 0;
                                try {
                                    s = new Vt(t), o = new Vt(r)
                                } catch (e) {
                                    var c = {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    };
                                    return u && Ce(R()(c), u), c
                                }
                                var l = qr(e, s, o, n, a, i);
                                l.payer = s;
                                var h = {
                                    error: g.SUCCESS,
                                    txHash: Pe(l.getSignContent()),
                                    txData: l.serialize()
                                };
                                return u && Ce(R()(h), u), h
                            }
                        }, {
                            key: "signMultiAddrTransaction",
                            value: function(e, t, r, n, a, i, u, s) {
                                n = this.transformPassword(n);
                                var o = void 0,
                                    c = new lr(e);
                                try {
                                    var l = new Vt(t),
                                        h = Buffer.from(r, "base64").toString("hex");
                                    o = c.decrypt(n, l, h)
                                } catch (e) {
                                    var f = this.getDecryptError(e);
                                    return s && Ce(R()(f), s), f
                                }
                                var d = parseInt(i, 10),
                                    v = Ur.deserialize(u),
                                    y = JSON.parse(a).map((function(e) {
                                        return new ut(e)
                                    }));
                                Cn(v, d, y, o);
                                var p = {
                                    error: g.SUCCESS,
                                    signedHash: v.serialize()
                                };
                                return s && Ce(R()(p), s), v
                            }
                        }, {
                            key: "neoTransfer",
                            value: function(e, t, r, n, a, i, u, s) {
                                a = this.transformPassword(a);
                                var o = new Vt(t),
                                    c = new Vt(e),
                                    l = Ra.parseJson('{"hash":"0x5bb169f915c916a5e30a3c13a5e0cd228ea26826","entrypoint":"Main","functions":[{"name":"Name","parameters":[],"returntype":"String"},{"name":"Symbol","parameters":[],"returntype":"String"},{"name":"Decimals","parameters":[],"returntype":"Integer"},{"name":"Main","parameters":[{"name":"operation","type":"String"},{"name":"args","type":"Array"}],"returntype":"Any"},{"name":"Init","parameters":[],"returntype":"Boolean"},{"name":"TotalSupply","parameters":[],"returntype":"Integer"},{"name":"Transfer","parameters":[{"name":"from","type":"ByteArray"},{"name":"to","type":"ByteArray"},{"name":"value","type":"Integer"}],"returntype":"Boolean"},{"name":"BalanceOf","parameters":[{"name":"address","type":"ByteArray"}],"returntype":"Integer"}],"events":[{"name":"transfer","parameters":[{"name":"arg1","type":"ByteArray"},{"name":"arg2","type":"ByteArray"},{"name":"arg3","type":"Integer"}],"returntype":"Void"}]}'),
                                    h = new Vt(Pe(mi)),
                                    f = parseInt(r, 10),
                                    d = l.getFunction("Transfer");
                                d.name = d.name.toLowerCase();
                                var v = void 0,
                                    y = new lr(n);
                                try {
                                    var p = Buffer.from(i, "base64").toString("hex");
                                    v = y.decrypt(a, c, p, s)
                                } catch (e) {
                                    var m = this.getDecryptError(e);
                                    return u && Ce(R()(m), u), m
                                }
                                var w = new Et("from", mt.ByteArray, c.serialize()),
                                    S = new Et("to", mt.ByteArray, o.serialize()),
                                    A = new Et("value", mt.Integer, 1e8 * f);
                                d.setParamsValue(w, S, A);
                                var k = ui.makeInvokeTransaction(h, c, d),
                                    x = new ii;
                                return x.parameter = ii.programFromParams([k.sign(v)]), x.code = ii.programFromPubKey(v.getPublicKey()), k.scripts = [x], ai.sendRawTransaction(wi, k.serialize()).then((function(e) {
                                    var t = {
                                        error: g.SUCCESS,
                                        result: ""
                                    };
                                    return e.result ? (t.result = Pe(k.getHash()), u && Ce(R()(t), u)) : (t.error = g.NETWORK_ERROR, u && Ce(R()(t), u)), t
                                }))
                            }
                        }, {
                            key: "getNeoBalance",
                            value: function(e, t) {
                                var r = new Vt(Pe(mi)),
                                    n = new Vt(e);
                                return ai.getBalance(wi, r, n).then((function(e) {
                                    var r = {
                                        error: g.SUCCESS,
                                        result: 0
                                    };
                                    if (e.result) {
                                        var n = parseInt(Pe(e.result), 16);
                                        r.result = n
                                    }
                                    return t && Ce(R()(r), t), r
                                }))
                            }
                        }, {
                            key: "sendTransaction",
                            value: function(t, r) {
                                return new ta("http://" + e.SERVER_NODE + ":" + e.REST_PORT).sendRawTransaction(t).then((function(e) {
                                    var t = {
                                        error: g.SUCCESS,
                                        result: e
                                    };
                                    return r && Ce(R()(t), r), t
                                })).catch((function(e) {
                                    var t = {
                                        error: e.Error,
                                        result: ""
                                    };
                                    return r && Ce(R()(t), r), t
                                }))
                            }
                        }, {
                            key: "sendTransactionWithWebsocket",
                            value: function(t, r) {
                                return new Ea("ws://" + e.SERVER_NODE + ":" + e.SOCKET_PORT).sendRawTransaction(t, !1, !0).then((function(e) {
                                    var t = {
                                        error: g.SUCCESS,
                                        result: e
                                    };
                                    return r && Ce(R()(t), r), t
                                })).catch((function(e) {
                                    var t = {
                                        error: e.Error,
                                        result: ""
                                    };
                                    return r && Ce(R()(t), r), t
                                }))
                            }
                        }, {
                            key: "queryOep8Balance",
                            value: function(t, r, n, a) {
                                var i = new Vt(Pe(t)),
                                    u = new fi(i),
                                    s = new Vt(r),
                                    o = u.makeQueryBalanceOfTx(s, n);
                                return e.restClient.sendRawTransaction(o.serialize(), !0).then((function(e) {
                                    var t = {
                                        error: g.SUCCESS,
                                        result: 0
                                    };
                                    return e.Result.Result && (t.result = parseInt(Pe(e.Result.Result), 16)), a && Ce(R()(t), a), t
                                }))
                            }
                        }, {
                            key: "queryOep8Balances",
                            value: function(t, r, n) {
                                var a = new Vt(Pe(t)),
                                    i = new fi(a),
                                    u = new Vt(r),
                                    s = i.makeQueryBalancesTx(u);
                                return e.restClient.sendRawTransaction(s.serialize(), !0).then((function(e) {
                                    var t = {
                                        error: g.SUCCESS,
                                        result: [0, 0, 0, 0, 0, 0, 0, 0]
                                    };
                                    if (e.Result.Result) {
                                        var r = e.Result.Result.map((function(e) {
                                            return e ? parseInt(Pe(e), 16) : 0
                                        }));
                                        t.result = r
                                    }
                                    return n && Ce(R()(t), n), t
                                }))
                            }
                        }, {
                            key: "queryOep8TotalBalance",
                            value: function(t, r, n) {
                                var a = new Vt(Pe(t)),
                                    i = new fi(a),
                                    u = new Vt(r),
                                    s = i.makeQueryTotalBalanceTx(u);
                                return e.restClient.sendRawTransaction(s.serialize(), !0).then((function(e) {
                                    var t = {
                                        error: g.SUCCESS,
                                        result: 0
                                    };
                                    return e.Result.Result && (t.result = parseInt(Pe(e.Result.Result), 16)), n && Ce(R()(t), n), t
                                }))
                            }
                        }, {
                            key: "transferOep8",
                            value: function(e, t, r, n, a, i, u, s, o, c, l, h) {
                                var f = void 0,
                                    d = void 0,
                                    v = void 0;
                                u = this.transformPassword(u);
                                try {
                                    f = new Vt(t), d = new Vt(r), v = new Vt(l)
                                } catch (e) {
                                    return {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    }
                                }
                                var y = void 0,
                                    p = new lr(i);
                                try {
                                    var m = new Vt(t),
                                        w = Buffer.from(s, "base64").toString("hex");
                                    y = p.decrypt(u, m, w)
                                } catch (e) {
                                    return this.getDecryptError(e)
                                }
                                var S = new Vt(Pe(e)),
                                    A = new fi(S).makeTransferTx(f, d, a, n, o, c, v);
                                Tn(A, y);
                                var k = {
                                    error: g.SUCCESS,
                                    result: "",
                                    tx: A.serialize(),
                                    txHash: Pe(A.getSignContent())
                                };
                                return h && Ce(R()(k), h), y.key = "", u = "", k
                            }
                        }, {
                            key: "compoundOep8",
                            value: function(e, t, r, n, a, i, u, s, o, c) {
                                var l = void 0;
                                a = this.transformPassword(a);
                                try {
                                    l = new Vt(t)
                                } catch (e) {
                                    return {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    }
                                }
                                var h = void 0,
                                    f = new lr(n);
                                try {
                                    var d = Buffer.from(i, "base64").toString("hex");
                                    h = f.decrypt(a, l, d)
                                } catch (e) {
                                    return this.getDecryptError(e)
                                }
                                var v = new Vt(Pe(e)),
                                    y = new fi(v).makeCompoundTx(l, r, u, s, l);
                                Tn(y, h);
                                var p = {
                                    error: g.SUCCESS,
                                    result: "",
                                    tx: y.serialize(),
                                    txHash: Pe(y.getSignContent())
                                };
                                return c && Ce(R()(p), c), h.key = "", a = "", p
                            }
                        }, {
                            key: "queryOep4Balance",
                            value: function(t, r, n) {
                                var a = new Vt(Pe(t)),
                                    i = new pi(a),
                                    u = new Vt(r),
                                    s = i.queryBalanceOf(u);
                                return e.restClient.sendRawTransaction(s.serialize(), !0).then((function(e) {
                                    var t = {
                                        error: g.SUCCESS,
                                        result: 0
                                    };
                                    return e.Result.Result && (t.result = parseInt(Pe(e.Result.Result), 16)), n && Ce(R()(t), n), t
                                }))
                            }
                        }, {
                            key: "transferOep4",
                            value: function(e, t, r, n, a, i, u, s, o, c) {
                                var l = void 0,
                                    h = void 0;
                                i = this.transformPassword(i);
                                try {
                                    l = new Vt(t), h = new Vt(r)
                                } catch (e) {
                                    return {
                                        error: g.INVALID_PARAMS,
                                        result: ""
                                    }
                                }
                                var f = void 0,
                                    d = new lr(a);
                                try {
                                    var v = new Vt(t),
                                        y = Buffer.from(u, "base64").toString("hex");
                                    f = d.decrypt(i, v, y)
                                } catch (e) {
                                    return this.getDecryptError(e)
                                }
                                var p = new Vt(Pe(e)),
                                    m = new pi(p).makeTransferTx(l, h, n, s, o, l);
                                Tn(m, f);
                                var w = {
                                    error: g.SUCCESS,
                                    result: "",
                                    tx: m.serialize(),
                                    txHash: Pe(m.getSignContent())
                                };
                                return c && Ce(R()(w), c), f.key = "", i = "", w
                            }
                        }, {
                            key: "eciesDecrypt",
                            value: function(e, t, r, n, a, i) {
                                t = this.transformPassword(t);
                                var u = new lr(e),
                                    s = void 0;
                                try {
                                    var o = new Vt(r),
                                        c = Buffer.from(n, "base64").toString("hex");
                                    s = u.decrypt(t, o, c)
                                } catch (e) {
                                    var l = this.getDecryptError(e);
                                    return i && Ce(R()(l), i), l
                                }
                                var h = new Er,
                                    f = a.split(".");
                                h.setKeyPair(s.key);
                                var d = {
                                    error: 0,
                                    result: h.dec(f[0], f[1], f[2], 32).toString("utf8")
                                };
                                return i && Ce(R()(d), i), d
                            }
                        }]), e
                    }();
                Si.SERVER_NODE = H, Si.REST_PORT = z, Si.SOCKET_PORT = U, Si.restClient = new ta, Si.socketClient = new Ea;
                var Ai = new Vt("0000000000000000000000000000000000000007");

                function ki(e, t, r, n, a, i, u, s) {
                    Ve(a), "did" === e.substr(0, 3) && (e = we(e));
                    var o = new Rt;
                    return o.add(we(t), n.serialize(), a, e, r), Mr("registerCandidate", Vr([o]), Ai, u, s, i)
                }

                function xi(e, t, r, n, a) {
                    var i = new Rt;
                    return i.add(we(t), e.serialize()), Mr("unRegisterCandidate", Vr([i]), Ai, n, a, r)
                }

                function bi(e, t, r, n) {
                    var a = new Rt;
                    return a.add(we(e)), Mr("approveCandidate", Vr([a]), Ai, r, n, t)
                }

                function Ei(e, t, r, n) {
                    var a = new Rt;
                    return a.add(we(e)), Mr("rejectCandidate", Vr([a]), Ai, r, n, t)
                }

                function Ri(e, t, r, n, a, i) {
                    if (t.length !== r.length) throw g.INVALID_PARAMS;
                    var u = new Rt;
                    u.add(e.serialize()), u.add(t.length);
                    var s = !0,
                        o = !1,
                        c = void 0;
                    try {
                        for (var l, h = ee()(t); !(s = (l = h.next()).done); s = !0) {
                            var f = l.value;
                            u.add(we(f))
                        }
                    } catch (e) {
                        o = !0, c = e
                    } finally {
                        try {
                            !s && h.return && h.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                    u.add(r.length);
                    var d = !0,
                        v = !1,
                        y = void 0;
                    try {
                        for (var p, m = ee()(r); !(d = (p = m.next()).done); d = !0) {
                            var w = p.value;
                            u.add(w)
                        }
                    } catch (e) {
                        v = !0, y = e
                    } finally {
                        try {
                            !d && m.return && m.return()
                        } finally {
                            if (v) throw y
                        }
                    }
                    return Mr("voteForPeer", Vr([u]), Ai, a, i, n)
                }

                function Pi(e, t, r, n, a, i) {
                    if (t.length !== r.length) throw g.INVALID_PARAMS;
                    var u = new Rt;
                    u.add(e.serialize()), u.add(t.length);
                    var s = !0,
                        o = !1,
                        c = void 0;
                    try {
                        for (var l, h = ee()(t); !(s = (l = h.next()).done); s = !0) {
                            var f = l.value;
                            u.add(we(f))
                        }
                    } catch (e) {
                        o = !0, c = e
                    } finally {
                        try {
                            !s && h.return && h.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                    u.add(r.length);
                    var d = !0,
                        v = !1,
                        y = void 0;
                    try {
                        for (var p, m = ee()(r); !(d = (p = m.next()).done); d = !0) {
                            var w = p.value;
                            u.add(w)
                        }
                    } catch (e) {
                        v = !0, y = e
                    } finally {
                        try {
                            !d && m.return && m.return()
                        } finally {
                            if (v) throw y
                        }
                    }
                    return Mr("unVoteForPeer", Vr([u]), Ai, a, i, n)
                }

                function Ti(e, t, r, n, a, i) {
                    if (t.length !== r.length) throw g.INVALID_PARAMS;
                    var u = new Rt;
                    u.add(e.serialize()), u.add(t.length);
                    var s = !0,
                        o = !1,
                        c = void 0;
                    try {
                        for (var l, h = ee()(t); !(s = (l = h.next()).done); s = !0) {
                            var f = l.value;
                            u.add(we(f))
                        }
                    } catch (e) {
                        o = !0, c = e
                    } finally {
                        try {
                            !s && h.return && h.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                    u.add(r.length);
                    var d = !0,
                        v = !1,
                        y = void 0;
                    try {
                        for (var p, m = ee()(r); !(d = (p = m.next()).done); d = !0) {
                            var w = p.value;
                            u.add(w)
                        }
                    } catch (e) {
                        v = !0, y = e
                    } finally {
                        try {
                            !d && m.return && m.return()
                        } finally {
                            if (v) throw y
                        }
                    }
                    return Mr("withdraw", Vr([u]), Ai, a, i, n)
                }

                function Ii(e, t, r, n, a) {
                    var i = new Rt;
                    return i.add(we(t), e.serialize()), Mr("quitNode", Vr([i]), Ai, n, a, r)
                }

                function Bi(e, t, r, n, a, i) {
                    var u = new Rt;
                    return u.add(we(e), t.serialize(), r), Mr("changeMaxAuthorization", Vr([u]), Ai, a, i, n)
                }

                function Ni(e, t, r, n, a, i) {
                    var u = new Rt;
                    return u.add(we(e), t.serialize(), r), Mr("setPeerCost", Vr([u]), Ai, a, i, n)
                }

                function Ci(e, t, r, n) {
                    var a = new Rt;
                    return a.add(e.serialize()), Mr("withdrawFee", Vr([a]), Ai, r, n, t)
                }

                function Di(e, t, r, n, a, i) {
                    var u = new Rt;
                    u.add(e.serialize()), u.add(t.length);
                    var s = !0,
                        o = !1,
                        c = void 0;
                    try {
                        for (var l, h = ee()(t); !(s = (l = h.next()).done); s = !0) {
                            var f = l.value;
                            u.add(we(f))
                        }
                    } catch (e) {
                        o = !0, c = e
                    } finally {
                        try {
                            !s && h.return && h.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                    u.add(r.length);
                    var d = !0,
                        v = !1,
                        y = void 0;
                    try {
                        for (var p, g = ee()(r); !(d = (p = g.next()).done); d = !0) {
                            var m = p.value;
                            u.add(m)
                        }
                    } catch (e) {
                        v = !0, y = e
                    } finally {
                        try {
                            !d && g.return && g.return()
                        } finally {
                            if (v) throw y
                        }
                    }
                    return Mr("authorizeForPeer", Vr([u]), Ai, a, i, n)
                }

                function Oi(e, t, r, n, a, i) {
                    var u = new Rt;
                    u.add(e.serialize()), u.add(t.length);
                    var s = !0,
                        o = !1,
                        c = void 0;
                    try {
                        for (var l, h = ee()(t); !(s = (l = h.next()).done); s = !0) {
                            var f = l.value;
                            u.add(we(f))
                        }
                    } catch (e) {
                        o = !0, c = e
                    } finally {
                        try {
                            !s && h.return && h.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                    u.add(r.length);
                    var d = !0,
                        v = !1,
                        y = void 0;
                    try {
                        for (var p, g = ee()(r); !(d = (p = g.next()).done); d = !0) {
                            var m = p.value;
                            u.add(m)
                        }
                    } catch (e) {
                        v = !0, y = e
                    } finally {
                        try {
                            !d && g.return && g.return()
                        } finally {
                            if (v) throw y
                        }
                    }
                    return Mr("unAuthorizeForPeer", Vr([u]), Ai, a, i, n)
                }

                function Hi(e, t, r, n, a, i) {
                    var u = new Rt;
                    return u.add(we(e), t.serialize(), r), Mr("addInitPos", Vr([u]), Ai, a, i, n)
                }

                function _i(e, t, r, n, a, i) {
                    var u = new Rt;
                    return u.add(we(e), t.serialize(), r), Mr("reduceInitPos", Vr([u]), Ai, a, i, n)
                }

                function zi(e, t, r, n) {
                    var a = new Rt;
                    return a.add(e.serialize()), Mr("withdrawOng", Vr([a]), Ai, r, n, t)
                }
                var Ui, Li, Mi, Ki, Vi, Gi = function() {
                        var e = jt()(Ft.a.mark((function e(t, r) {
                            var n, a, i, u, s;
                            return Ft.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = new ta(r), a = Ai.toHexString(), i = we("peerAttributes") + t, e.next = 5, n.getStorage(a, i);
                                    case 5:
                                        if (u = e.sent, !(s = u.Result)) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return", $i.deserialize(new Be(s)));
                                    case 11:
                                        return e.abrupt("return", new $i);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Wi = (Ui = jt()(Ft.a.mark((function e(t, r) {
                        var n, a, i, u, s;
                        return Ft.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = new ta(r), a = Ai.toHexString(), i = we("splitFeeAddress") + t.serialize(), e.next = 5, n.getStorage(a, i);
                                case 5:
                                    if (u = e.sent, !(s = u.Result)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", eu.deserialize(new Be(s)));
                                case 11:
                                    return e.abrupt("return", new eu);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t) {
                        return Ui.apply(this, arguments)
                    }),
                    Ji = function() {
                        var e = jt()(Ft.a.mark((function e(t, r, n) {
                            var a, i, u, s, o;
                            return Ft.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = new ta(n), i = Ai.toHexString(), u = we("voteInfoPool") + t + r.serialize(), e.next = 5, a.getStorage(i, u);
                                    case 5:
                                        if (s = e.sent, !(o = s.Result)) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return", tu.deserialize(new Be(o)));
                                    case 11:
                                        return e.abrupt("return", new tu);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t, r, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Fi = function() {
                        var e = jt()(Ft.a.mark((function e(t) {
                            var r, n, a, i, u, s;
                            return Ft.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = new ta(t), n = Ai.toHexString(), a = we("governanceView"), e.next = 5, r.getStorage(n, a);
                                    case 5:
                                        return i = e.sent, u = i.Result, s = Xi.deserialize(new Be(u)), e.abrupt("return", s);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    qi = (Li = jt()(Ft.a.mark((function e(t) {
                        var r, n, a, i, u, s, o, c, l, h, f, d;
                        return Ft.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = new ta(t), n = Ai.toHexString(), e.next = 4, Fi(t);
                                case 4:
                                    return a = e.sent, i = we("peerPool"), u = Ee(a.view, 4, !0), s = i + u, e.next = 10, r.getStorage(n, s);
                                case 10:
                                    for (o = e.sent, c = new Be(o.Result), l = c.readInt(), h = {}, f = 0; f < l; f++) d = Zi.deserialize(c), h[d.peerPubkey] = d;
                                    return e.abrupt("return", h);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return Li.apply(this, arguments)
                    }),
                    ji = (Mi = jt()(Ft.a.mark((function e(t) {
                        var r, n, a, i;
                        return Ft.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = new ta(t), n = Ai.toHexString(), a = we("globalParam"), e.next = 5, r.getStorage(n, a);
                                case 5:
                                    if (!(i = e.sent).Result) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", ru.deserialize(new Be(i.Result)));
                                case 10:
                                    return e.abrupt("return", new ru);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return Mi.apply(this, arguments)
                    }),
                    Yi = (Ki = jt()(Ft.a.mark((function e(t, r) {
                        var n, a, i, u;
                        return Ft.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = new ta(r), a = Ai.toHexString(), i = we("totalStake") + t.serialize(), e.next = 5, n.getStorage(a, i);
                                case 5:
                                    if (!(u = e.sent).Result) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", nu.deserialize(new Be(u.Result)));
                                case 10:
                                    return e.abrupt("return", new nu);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t) {
                        return Ki.apply(this, arguments)
                    }),
                    Qi = (Vi = jt()(Ft.a.mark((function e(t, r) {
                        var n, a, i, u, s;
                        return Ft.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Yi(t, r);
                                case 2:
                                    if ((n = e.sent).address) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", 0);
                                case 5:
                                    return a = new ta(r), e.next = 8, a.getBlockHeight();
                                case 8:
                                    return i = e.sent.Result, e.next = 11, a.getBlockJson(i);
                                case 11:
                                    return u = e.sent.Result, s = u.Header.Timestamp - Z, e.abrupt("return", Fe(n.stake, n.timeOffset, s));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t) {
                        return Vi.apply(this, arguments)
                    }),
                    Xi = function() {
                        function e() {
                            S()(this, e), this.view = 0, this.height = 0, this.txhash = ""
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                return e += Ee(this.view, 4, !0), (e += Ee(this.height, 4, !0)) + Ae(this.txhash)
                            }
                        }], [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e;
                                return r.view = t.readUint32(), r.height = t.readUint32(), r.txhash = t.read(64), r
                            }
                        }]), e
                    }(),
                    Zi = function() {
                        function e() {
                            S()(this, e), this.index = 0, this.peerPubkey = "", this.status = 0, this.initPos = 0, this.totalPos = 0
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                return e += Ee(this.index, 4, !0), e += ke(this.peerPubkey), e += this.address.serialize(), e += Ee(this.status), (e += Ee(this.initPos, 8, !0)) + Ee(this.totalPos, 8, !0)
                            }
                        }], [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e;
                                return r.index = t.readInt(), r.peerPubkey = Se(t.readNextBytes()), r.address = Vt.deserialize(t), r.status = parseInt(t.read(1), 16), r.initPos = t.readLong(), r.totalPos = t.readLong(), r
                            }
                        }]), e
                    }(),
                    $i = function() {
                        function e() {
                            S()(this, e), this.peerPubkey = "", this.maxAuthorize = 0, this.t2PeerCost = 100, this.t1PeerCost = 100, this.tPeerCost = 0, this.field1 = "", this.field2 = "", this.field3 = "", this.field4 = ""
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                return ""
                            }
                        }], [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e;
                                return r.peerPubkey = Se(t.readNextBytes()), r.maxAuthorize = t.readLong(), r.t2PeerCost = t.readLong(), r.t1PeerCost = t.readLong(), r.tPeerCost = t.readLong(), t.isEmpty || (r.field1 = t.readNextBytes(), r.field2 = t.readNextBytes(), r.field3 = t.readNextBytes(), r.field4 = t.readNextBytes()), r
                            }
                        }]), e
                    }(),
                    eu = function() {
                        function e() {
                            S()(this, e), this.amount = 0
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e;
                                return r.address = Vt.deserialize(t), r.amount = t.readLong(), r
                            }
                        }]), e
                    }(),
                    tu = function() {
                        function e() {
                            S()(this, e), this.peerPubkey = "", this.consensusPos = 0, this.freezePos = 0, this.newPos = 0, this.withdrawPos = 0, this.withdrawFreezePos = 0, this.withdrawUnfreezePos = 0
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e;
                                return r.peerPubkey = Se(t.readNextBytes()), r.address = Vt.deserialize(t), r.consensusPos = t.readLong(), r.freezePos = t.readLong(), r.newPos = t.readLong(), r.withdrawPos = t.readLong(), r.withdrawFreezePos = t.readLong(), r.withdrawUnfreezePos = t.readLong(), r
                            }
                        }]), e
                    }(),
                    ru = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e,
                                    n = t.readNextBytes(),
                                    a = qe.fromHexstr(n).value;
                                r.candidateFee = Number(a);
                                var i = qe.fromHexstr(t.readNextBytes()).value;
                                r.minInitState = Number(i);
                                var u = qe.fromHexstr(t.readNextBytes()).value,
                                    s = Number(u);
                                r.candidateNum = s;
                                var o = qe.fromHexstr(t.readNextBytes()).value;
                                r.posLimit = Number(o);
                                var c = qe.fromHexstr(t.readNextBytes()).value,
                                    l = Number(c),
                                    h = qe.fromHexstr(t.readNextBytes()).value,
                                    f = Number(h),
                                    d = qe.fromHexstr(t.readNextBytes()).value,
                                    v = Number(d),
                                    y = qe.fromHexstr(t.readNextBytes()).value,
                                    p = Number(y);
                                return r.A = l, r.B = f, r.yita = v, r.penalty = p, r
                            }
                        }]), e
                    }(),
                    nu = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e;
                                return r.address = Vt.deserialize(t), r.stake = t.readLong(), r.timeOffset = t.readUint32(), r
                            }
                        }]), e
                    }(),
                    au = function() {
                        function e() {
                            S()(this, e), this.states = []
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                e += Ee(this.states.length);
                                for (var t = 0; t < this.states.length; t++) e += this.states[t].serialize();
                                return e
                            }
                        }], [{
                            key: "deserialize",
                            value: function(t) {
                                for (var r = new e, n = [], a = t.readNextLen(), i = 0; i < a; i++) {
                                    var u = uu.deserialize(t);
                                    n.push(u)
                                }
                                return r.states = n, r
                            }
                        }]), e
                    }(),
                    iu = function() {
                        function e() {
                            S()(this, e)
                        }
                        return k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                e += this.contract, e += Ee(this.states.length);
                                for (var t = 0; t < this.states.length; t++) e += this.states[t].serialize();
                                return e
                            }
                        }], [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e;
                                r.states = [];
                                var n = t.read(20);
                                r.contract = n;
                                for (var a = t.readNextLen(), i = 0; i < a; i++) {
                                    var u = uu.deserialize(t);
                                    r.states.push(u)
                                }
                                return r
                            }
                        }]), e
                    }(),
                    uu = function() {
                        function e(t, r, n) {
                            S()(this, e);
                            var a = new ue.BigNumber(n);
                            if (!a.isInteger() || a.isNegative()) throw g.INVALID_PARAMS;
                            this.from = t, this.to = r, this.value = n
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                return new e(new Vt(t.readNextBytes()), new Vt(t.readNextBytes()), qe.fromHexstr(t.readNextBytes()).value.toString())
                            }
                        }]), k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                return e += Ae(this.from.serialize()), (e += Ae(this.to.serialize())) + Ae(new qe(this.value).toHexstr())
                            }
                        }]), e
                    }(),
                    su = function() {
                        function e() {
                            S()(this, e), this.version = "00"
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                var r = new e,
                                    n = t.read(1),
                                    a = Vt.deserialize(t),
                                    i = t.readNextBytes(),
                                    u = t.readNextBytes();
                                return r.version = n, r.address = a, r.method = Se(i), r.args = u, r
                            }
                        }]), k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                return e += this.version, e += this.address.serialize(), (e += ke(this.method)) + Ae(this.args)
                            }
                        }]), e
                    }(),
                    ou = function() {
                        function e(t, r, n, a) {
                            S()(this, e);
                            var i = new ue.BigNumber(a);
                            if (!i.isInteger() || !i.isNegative()) throw g.INVALID_PARAMS;
                            this.sender = t, this.from = r, this.to = n, this.value = a
                        }
                        return k()(e, null, [{
                            key: "deserialize",
                            value: function(t) {
                                return new e(new Vt(t.readNextBytes()), new Vt(t.readNextBytes()), new Vt(t.readNextBytes()), qe.fromHexstr(t.readNextBytes()).value.toString())
                            }
                        }]), k()(e, [{
                            key: "serialize",
                            value: function() {
                                var e = "";
                                return e += Ae(this.sender.serialize()), e += Ae(this.from.serialize()), (e += Ae(this.to.serialize())) + Ae(new qe(this.value).toHexstr())
                            }
                        }]), e
                    }(),
                    cu = function e(t, r) {
                        S()(this, e), this.toAcct = t.serialize(), this.tokenId = r
                    },
                    lu = function() {
                        function e(t) {
                            S()(this, e), this.contractAddr = t
                        }
                        return k()(e, [{
                            key: "makeInitTx",
                            value: function(e, t, r) {
                                return Dn("init", [], this.contractAddr, e, t, r)
                            }
                        }, {
                            key: "makeOwnerOfTx",
                            value: function(e) {
                                var t = [new Et("tokenId", mt.ByteArray, e)];
                                return Dn("ownerOf", t, this.contractAddr)
                            }
                        }, {
                            key: "makeTransferTx",
                            value: function(e, t, r, n) {
                                var a = [new Et("toAcct", mt.ByteArray, e.toAcct), new Et("tokenId", mt.ByteArray, e.tokenId)];
                                return Dn("transfer", a, this.contractAddr, t, r, n)
                            }
                        }, {
                            key: "makeTransferMultiTx",
                            value: function(e, t, r, n) {
                                var a = [];
                                a.push(we("transferMulti"));
                                var i = [],
                                    u = !0,
                                    s = !1,
                                    o = void 0;
                                try {
                                    for (var c, l = ee()(e); !(u = (c = l.next()).done); u = !0) {
                                        var h = c.value;
                                        i.push([h.toAcct, h.tokenId])
                                    }
                                } catch (e) {
                                    s = !0, o = e
                                } finally {
                                    try {
                                        !u && l.return && l.return()
                                    } finally {
                                        if (s) throw o
                                    }
                                }
                                a.push(i);
                                var f = Lt(a);
                                return Dn("", f, this.contractAddr, t, r, n)
                            }
                        }, {
                            key: "makeApproveTx",
                            value: function(e, t, r, n) {
                                var a = [new Et("toAcct", mt.ByteArray, e.toAcct), new Et("tokenId", mt.ByteArray, e.tokenId)];
                                return Dn("approve", a, this.contractAddr, t, r, n)
                            }
                        }, {
                            key: "makeTakeOwnershipTx",
                            value: function(e, t, r, n) {
                                var a = [new Et("toAcct", mt.ByteArray, e.toAcct), new Et("tokenId", mt.ByteArray, e.tokenId)];
                                return Dn("takeOwnership", a, this.contractAddr, t, r, n)
                            }
                        }, {
                            key: "makeQueryBalanceOfTx",
                            value: function(e) {
                                var t = [new Et("addr", mt.ByteArray, e.serialize())];
                                return Dn("balanceOf", t, this.contractAddr)
                            }
                        }, {
                            key: "makeQueryTotalSupplyTx",
                            value: function() {
                                return Dn("totalSupply", [], this.contractAddr)
                            }
                        }, {
                            key: "makeQueryTokenIDByIndexTx",
                            value: function(e) {
                                var t = [new Et("index", mt.Long, e)];
                                return Dn("queryTokenIDByIndex", t, this.contractAddr)
                            }
                        }, {
                            key: "makeQueryTokenByIDTx",
                            value: function(e) {
                                var t = [new Et("tokenId", mt.ByteArray, e)];
                                return Dn("queryTokenByID", t, this.contractAddr)
                            }
                        }, {
                            key: "makeGetApprovedTx",
                            value: function(e) {
                                var t = [new Et("tokenId", mt.ByteArray, e)];
                                return Dn("getApproved", t, this.contractAddr)
                            }
                        }, {
                            key: "makeQueryNameTx",
                            value: function() {
                                return Dn("name", [], this.contractAddr)
                            }
                        }, {
                            key: "makeQuerySymbolTx",
                            value: function() {
                                return Dn("symbol", [], this.contractAddr)
                            }
                        }]), e
                    }();
                r.d(t, "Account", (function() {
                    return qn
                })), r.d(t, "Identity", (function() {
                    return ti
                })), r.d(t, "Claim", (function() {
                    return Qa
                })), r.d(t, "DDO", (function() {
                    return Ga
                })), r.d(t, "DDOAttribute", (function() {
                    return Va
                })), r.d(t, "Transaction", (function() {
                    return Ur
                })), r.d(t, "Transfer", (function() {
                    return Lr
                })), r.d(t, "TxSignature", (function() {
                    return zr
                })), r.d(t, "Parameter", (function() {
                    return Et
                })), r.d(t, "ParameterType", (function() {
                    return mt
                })), r.d(t, "AbiFunction", (function() {
                    return Nr
                })), r.d(t, "AbiInfo", (function() {
                    return Ra
                })), r.d(t, "TransactionBuilder", (function() {
                    return l
                })), r.d(t, "OntAssetTxBuilder", (function() {
                    return o
                })), r.d(t, "GovernanceTxBuilder", (function() {
                    return v
                })), r.d(t, "utils", (function() {
                    return a
                })), r.d(t, "scrypt", (function() {
                    return u
                })), r.d(t, "CONST", (function() {
                    return n
                })), r.d(t, "Wallet", (function() {
                    return di
                })), r.d(t, "SDK", (function() {
                    return Si
                })), r.d(t, "Token", (function() {
                    return y
                })), r.d(t, "OntidContract", (function() {
                    return c
                })), r.d(t, "RestClient", (function() {
                    return ta
                })), r.d(t, "RpcClient", (function() {
                    return ci
                })), r.d(t, "WebsocketClient", (function() {
                    return Ea
                })), r.d(t, "Crypto", (function() {
                    return s
                })), r.d(t, "Struct", (function() {
                    return Rt
                })), r.d(t, "ScriptBuilder", (function() {
                    return i
                })), r.d(t, "NeoCore", (function() {
                    return h
                })), r.d(t, "Oep4", (function() {
                    return d
                })), r.d(t, "Oep8", (function() {
                    return f
                })), r.d(t, "Oep5", (function() {
                    return p
                }));
                var hu = function() {
                    function e() {
                        S()(this, e), this.Account = qn, this.Identity = ti, this.Claim = Qa, this.DDO = Ga, this.DDOAttribute = Va, this.Transaction = Ur, this.Transfer = Lr, this.TxSignature = zr, this.TransactionBuilder = l, this.OntAssetTxBuilder = o, this.GovernanceTxBuilder = v, this.Parameter = Et, this.ParameterType = mt, this.AbiFunction = Nr, this.AbiInfo = Ra, this.utils = a, this.scrypt = u, this.CONST = n, this.Wallet = di, this.SDK = Si, this.Token = y, this.OntidContract = c, this.RestClient = ta, this.RpcClient = ci, this.WebsocketClient = Ea, this.Crypto = s, this.Struct = Rt, this.ScriptBuilder = i, this.NeoCore = h, this.Oep4 = d, this.Oep8 = f, this.Oep5 = p
                    }
                    return k()(e, [{
                        key: "setNode",
                        value: function(e) {
                            this.CONST.TEST_NODE = e
                        }
                    }, {
                        key: "setRpcPort",
                        value: function(e) {
                            this.CONST.HTTP_JSON_PORT = e
                        }
                    }, {
                        key: "setRestPort",
                        value: function(e) {
                            this.CONST.HTTP_REST_PORT = e
                        }
                    }, {
                        key: "setSocketPort",
                        value: function(e) {
                            this.CONST.HTTP_WS_PORT = e
                        }
                    }]), e
                }();
                t.default = hu
            }])
        }
    }
]);