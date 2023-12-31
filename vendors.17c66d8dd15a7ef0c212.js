(window.webpackJsonp = window.webpackJsonp || []).push([
    [184], {
        1072: function(e, t, o) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, o, r) {
                    void 0 === r && (r = o);
                    var a = Object.getOwnPropertyDescriptor(t, o);
                    a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
                        enumerable: !0,
                        get: function() {
                            return t[o]
                        }
                    }), Object.defineProperty(e, r, a)
                } : function(e, t, o, r) {
                    void 0 === r && (r = o), e[r] = t[o]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                n = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var o in e) "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && r(t, e, o);
                    return a(t, e), t
                },
                i = this && this.__values || function(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        o = t && e[t],
                        r = 0;
                    if (o) return o.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                },
                s = this && this.__read || function(e, t) {
                    var o = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!o) return e;
                    var r, a, n = o.call(e),
                        i = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = n.next()).done;) i.push(r.value)
                    } catch (e) {
                        a = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (o = n.return) && o.call(n)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                    return i
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BaseTransaction = void 0;
            var c = n(o(1073)),
                d = o(241),
                f = o(413),
                x = function() {
                    function e(e, t) {
                        this.cache = {
                            hash: void 0,
                            dataFee: void 0
                        }, this.activeCapabilities = [], this.DEFAULT_CHAIN = c.Chain.Mainnet, this.DEFAULT_HARDFORK = c.Hardfork.Istanbul;
                        var o = e.nonce,
                            r = e.gasLimit,
                            a = e.to,
                            n = e.value,
                            i = e.data,
                            s = e.v,
                            f = e.r,
                            x = e.s,
                            u = e.type;
                        this._type = new d.BN((0, d.toBuffer)(u)).toNumber(), this.txOptions = t;
                        var h = (0, d.toBuffer)("" === a ? "0x" : a),
                            l = (0, d.toBuffer)("" === s ? "0x" : s),
                            p = (0, d.toBuffer)("" === f ? "0x" : f),
                            m = (0, d.toBuffer)("" === x ? "0x" : x);
                        this.nonce = new d.BN((0, d.toBuffer)("" === o ? "0x" : o)), this.gasLimit = new d.BN((0, d.toBuffer)("" === r ? "0x" : r)), this.to = h.length > 0 ? new d.Address(h) : void 0, this.value = new d.BN((0, d.toBuffer)("" === n ? "0x" : n)), this.data = (0, d.toBuffer)("" === i ? "0x" : i), this.v = l.length > 0 ? new d.BN(l) : void 0, this.r = p.length > 0 ? new d.BN(p) : void 0, this.s = m.length > 0 ? new d.BN(m) : void 0, this._validateCannotExceedMaxInteger({
                            value: this.value,
                            r: this.r,
                            s: this.s
                        }), this._validateCannotExceedMaxInteger({
                            gasLimit: this.gasLimit
                        }, 64), this._validateCannotExceedMaxInteger({
                            nonce: this.nonce
                        }, 64, !0)
                    }
                    return Object.defineProperty(e.prototype, "transactionType", {
                        get: function() {
                            return this.type
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "type", {
                        get: function() {
                            return this._type
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.supports = function(e) {
                        return this.activeCapabilities.includes(e)
                    }, e.prototype.validate = function(e) {
                        void 0 === e && (e = !1);
                        var t = [];
                        return this.getBaseFee().gt(this.gasLimit) && t.push("gasLimit is too low. given ".concat(this.gasLimit, ", need at least ").concat(this.getBaseFee())), this.isSigned() && !this.verifySignature() && t.push("Invalid Signature"), e ? t : 0 === t.length
                    }, e.prototype.getBaseFee = function() {
                        var e = this.getDataFee().addn(this.common.param("gasPrices", "tx"));
                        return this.common.gteHardfork("homestead") && this.toCreationAddress() && e.iaddn(this.common.param("gasPrices", "txCreation")), e
                    }, e.prototype.getDataFee = function() {
                        for (var e = this.common.param("gasPrices", "txDataZero"), t = this.common.param("gasPrices", "txDataNonZero"), o = 0, r = 0; r < this.data.length; r++) 0 === this.data[r] ? o += e : o += t;
                        if (o = new d.BN(o), (void 0 === this.to || null === this.to) && this.common.isActivatedEIP(3860)) {
                            var a = Math.ceil(this.data.length / 32),
                                n = new d.BN(this.common.param("gasPrices", "initCodeWordCost")).imuln(a);
                            o.iadd(n)
                        }
                        return o
                    }, e.prototype.toCreationAddress = function() {
                        return void 0 === this.to || 0 === this.to.buf.length
                    }, e.prototype.isSigned = function() {
                        var e = this.v,
                            t = this.r,
                            o = this.s;
                        return 0 === this.type ? !!(e && t && o) : !(void 0 === e || !t || !o)
                    }, e.prototype.verifySignature = function() {
                        try {
                            var e = this.getSenderPublicKey();
                            return 0 !== (0, d.unpadBuffer)(e).length
                        } catch (e) {
                            return !1
                        }
                    }, e.prototype.getSenderAddress = function() {
                        return new d.Address((0, d.publicToAddress)(this.getSenderPublicKey()))
                    }, e.prototype.sign = function(e) {
                        if (32 !== e.length) {
                            var t = this._errorMsg("Private key must be 32 bytes in length.");
                            throw new Error(t)
                        }
                        var o = !1;
                        0 === this.type && this.common.gteHardfork("spuriousDragon") && !this.supports(f.Capability.EIP155ReplayProtection) && (this.activeCapabilities.push(f.Capability.EIP155ReplayProtection), o = !0);
                        var r = this.getMessageToSign(!0),
                            a = (0, d.ecsign)(r, e),
                            n = a.v,
                            i = a.r,
                            s = a.s,
                            c = this._processSignature(n, i, s);
                        if (o) {
                            var x = this.activeCapabilities.indexOf(f.Capability.EIP155ReplayProtection);
                            x > -1 && this.activeCapabilities.splice(x, 1)
                        }
                        return c
                    }, e.prototype._getCommon = function(e, t) {
                        var o;
                        if (t) {
                            var r = new d.BN((0, d.toBuffer)(t));
                            if (e) {
                                if (!e.chainIdBN().eq(r)) {
                                    var a = this._errorMsg("The chain ID does not match the chain ID of Common");
                                    throw new Error(a)
                                }
                                return e.copy()
                            }
                            return c.default.isSupportedChainId(r) ? new c.default({
                                chain: r,
                                hardfork: this.DEFAULT_HARDFORK
                            }) : c.default.forCustomChain(this.DEFAULT_CHAIN, {
                                name: "custom-chain",
                                networkId: r,
                                chainId: r
                            }, this.DEFAULT_HARDFORK)
                        }
                        return null !== (o = null == e ? void 0 : e.copy()) && void 0 !== o ? o : new c.default({
                            chain: this.DEFAULT_CHAIN,
                            hardfork: this.DEFAULT_HARDFORK
                        })
                    }, e.prototype._validateCannotExceedMaxInteger = function(e, t, o) {
                        var r, a;
                        void 0 === t && (t = 256), void 0 === o && (o = !1);
                        try {
                            for (var n = i(Object.entries(e)), c = n.next(); !c.done; c = n.next()) {
                                var f = s(c.value, 2),
                                    x = f[0],
                                    u = f[1];
                                switch (t) {
                                    case 64:
                                        if (o) {
                                            if (null == u ? void 0 : u.gte(d.MAX_UINT64)) {
                                                var h = this._errorMsg("".concat(x, " cannot equal or exceed MAX_UINT64 (2^64-1), given ").concat(u));
                                                throw new Error(h)
                                            }
                                        } else if (null == u ? void 0 : u.gt(d.MAX_UINT64)) {
                                            h = this._errorMsg("".concat(x, " cannot exceed MAX_UINT64 (2^64-1), given ").concat(u));
                                            throw new Error(h)
                                        }
                                        break;
                                    case 256:
                                        if (o) {
                                            if (null == u ? void 0 : u.gte(d.MAX_INTEGER)) {
                                                h = this._errorMsg("".concat(x, " cannot equal or exceed MAX_INTEGER (2^256-1), given ").concat(u));
                                                throw new Error(h)
                                            }
                                        } else if (null == u ? void 0 : u.gt(d.MAX_INTEGER)) {
                                            h = this._errorMsg("".concat(x, " cannot exceed MAX_INTEGER (2^256-1), given ").concat(u));
                                            throw new Error(h)
                                        }
                                        break;
                                    default:
                                        h = this._errorMsg("unimplemented bits value");
                                        throw new Error(h)
                                }
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                c && !c.done && (a = n.return) && a.call(n)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }, e.prototype._getSharedErrorPostfix = function() {
                        var e = "";
                        try {
                            e = this.isSigned() ? (0, d.bufferToHex)(this.hash()) : "not available (unsigned)"
                        } catch (t) {
                            e = "error"
                        }
                        var t = "";
                        try {
                            t = this.isSigned().toString()
                        } catch (t) {
                            e = "error"
                        }
                        var o = "";
                        try {
                            o = this.common.hardfork()
                        } catch (e) {
                            o = "error"
                        }
                        var r = "tx type=".concat(this.type, " hash=").concat(e, " nonce=").concat(this.nonce, " value=").concat(this.value, " ");
                        return r += "signed=".concat(t, " hf=").concat(o)
                    }, e
                }();
            t.BaseTransaction = x
        },
        1073: function(e, t, o) {
            "use strict";
            var r, a = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function o() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                }),
                n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, o = 1, r = arguments.length; o < r; o++)
                            for (var a in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                i = this && this.__values || function(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        o = t && e[t],
                        r = 0;
                    if (o) return o.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConsensusAlgorithm = t.ConsensusType = t.Hardfork = t.Chain = t.CustomChain = void 0;
            var s, c, d = o(69),
                f = o(3537),
                x = o(241),
                u = o(3538),
                h = o(3545),
                l = o(3563);
            ! function(e) {
                e.PolygonMainnet = "polygon-mainnet", e.PolygonMumbai = "polygon-mumbai", e.ArbitrumRinkebyTestnet = "arbitrum-rinkeby-testnet", e.xDaiChain = "x-dai-chain", e.OptimisticKovan = "optimistic-kovan", e.OptimisticEthereum = "optimistic-ethereum"
            }(s = t.CustomChain || (t.CustomChain = {})),
            function(e) {
                e[e.Mainnet = 1] = "Mainnet", e[e.Ropsten = 3] = "Ropsten", e[e.Rinkeby = 4] = "Rinkeby", e[e.Kovan = 42] = "Kovan", e[e.Goerli = 5] = "Goerli", e[e.Sepolia = 11155111] = "Sepolia"
            }(t.Chain || (t.Chain = {})),
            function(e) {
                e.Chainstart = "chainstart", e.Homestead = "homestead", e.Dao = "dao", e.TangerineWhistle = "tangerineWhistle", e.SpuriousDragon = "spuriousDragon", e.Byzantium = "byzantium", e.Constantinople = "constantinople", e.Petersburg = "petersburg", e.Istanbul = "istanbul", e.MuirGlacier = "muirGlacier", e.Berlin = "berlin", e.London = "london", e.ArrowGlacier = "arrowGlacier", e.GrayGlacier = "grayGlacier", e.MergeForkIdTransition = "mergeForkIdTransition", e.Merge = "merge", e.Shanghai = "shanghai"
            }(c = t.Hardfork || (t.Hardfork = {})),
            function(e) {
                e.ProofOfStake = "pos", e.ProofOfWork = "pow", e.ProofOfAuthority = "poa"
            }(t.ConsensusType || (t.ConsensusType = {})),
            function(e) {
                e.Ethash = "ethash", e.Clique = "clique", e.Casper = "casper"
            }(t.ConsensusAlgorithm || (t.ConsensusAlgorithm = {}));
            var p = function(e) {
                function t(t) {
                    var o, r, a, n, s = this;
                    (s = e.call(this) || this)._supportedHardforks = [], s._eips = [], s._customChains = null !== (a = t.customChains) && void 0 !== a ? a : [], s._chainParams = s.setChain(t.chain), s.DEFAULT_HARDFORK = null !== (n = s._chainParams.defaultHardfork) && void 0 !== n ? n : c.Istanbul;
                    try {
                        for (var d = i(s._chainParams.hardforks), f = d.next(); !f.done; f = d.next()) {
                            var x = f.value;
                            x.forkHash || (x.forkHash = s._calcForkHash(x.name))
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            f && !f.done && (r = d.return) && r.call(d)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s._hardfork = s.DEFAULT_HARDFORK, t.supportedHardforks && (s._supportedHardforks = t.supportedHardforks), t.hardfork && s.setHardfork(t.hardfork), t.eips && s.setEIPs(t.eips), s
                }
                return a(t, e), t.custom = function(e, o) {
                    var r;
                    void 0 === o && (o = {});
                    var a = null !== (r = o.baseChain) && void 0 !== r ? r : "mainnet",
                        i = n({}, t._getChainParams(a));
                    if (i.name = "custom-chain", "string" != typeof e) return new t(n({
                        chain: n(n({}, i), e)
                    }, o));
                    if (e === s.PolygonMainnet) return t.custom({
                        name: s.PolygonMainnet,
                        chainId: 137,
                        networkId: 137
                    }, o);
                    if (e === s.PolygonMumbai) return t.custom({
                        name: s.PolygonMumbai,
                        chainId: 80001,
                        networkId: 80001
                    }, o);
                    if (e === s.ArbitrumRinkebyTestnet) return t.custom({
                        name: s.ArbitrumRinkebyTestnet,
                        chainId: 421611,
                        networkId: 421611
                    }, o);
                    if (e === s.xDaiChain) return t.custom({
                        name: s.xDaiChain,
                        chainId: 100,
                        networkId: 100
                    }, o);
                    if (e === s.OptimisticKovan) return t.custom({
                        name: s.OptimisticKovan,
                        chainId: 69,
                        networkId: 69
                    }, n({
                        hardfork: c.Berlin
                    }, o));
                    if (e === s.OptimisticEthereum) return t.custom({
                        name: s.OptimisticEthereum,
                        chainId: 10,
                        networkId: 10
                    }, n({
                        hardfork: c.Berlin
                    }, o));
                    throw new Error("Custom chain ".concat(e, " not supported"))
                }, t.forCustomChain = function(e, o, r, a) {
                    var i = t._getChainParams(e);
                    return new t({
                        chain: n(n({}, i), o),
                        hardfork: r,
                        supportedHardforks: a
                    })
                }, t.isSupportedChainId = function(e) {
                    var t = (0, u._getInitializedChains)();
                    return Boolean(t.names[e.toString()])
                }, t._getChainParams = function(e, t) {
                    var o = (0, u._getInitializedChains)(t);
                    if ("number" == typeof e || x.BN.isBN(e)) {
                        if (e = e.toString(), o.names[e]) return o[o.names[e]];
                        throw new Error("Chain with ID ".concat(e, " not supported"))
                    }
                    if (o[e]) return o[e];
                    throw new Error("Chain with name ".concat(e, " not supported"))
                }, t.prototype.setChain = function(e) {
                    var o, r;
                    if ("number" == typeof e || "string" == typeof e || x.BN.isBN(e)) {
                        var a = void 0;
                        a = this._customChains && this._customChains.length > 0 && Array.isArray(this._customChains[0]) ? this._customChains.map((function(e) {
                            return e[0]
                        })) : this._customChains, this._chainParams = t._getChainParams(e, a)
                    } else {
                        if ("object" != typeof e) throw new Error("Wrong input format");
                        if (this._customChains.length > 0) throw new Error("Chain must be a string, number, or BN when initialized with customChains passed in");
                        try {
                            for (var n = i(["networkId", "genesis", "hardforks", "bootstrapNodes"]), s = n.next(); !s.done; s = n.next()) {
                                var c = s.value;
                                if (void 0 === e[c]) throw new Error("Missing required chain parameter: ".concat(c))
                            }
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (r = n.return) && r.call(n)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        this._chainParams = e
                    }
                    return this._chainParams
                }, t.prototype.setHardfork = function(e) {
                    var t, o;
                    if (!this._isSupportedHardfork(e)) throw new Error("Hardfork ".concat(e, " not set as supported in supportedHardforks"));
                    var r = !1;
                    try {
                        for (var a = i(h.hardforks), n = a.next(); !n.done; n = a.next()) {
                            n.value[0] === e && (this._hardfork !== e && (this._hardfork = e, this.emit("hardforkChanged", e)), r = !0)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (o = a.return) && o.call(a)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    if (!r) throw new Error("Hardfork with name ".concat(e, " not supported"))
                }, t.prototype.getHardforkByBlockNumber = function(e, t) {
                    var o, r;
                    e = (0, x.toType)(e, x.TypeOutput.BN), t = (0, x.toType)(t, x.TypeOutput.BN);
                    var a, n, s, d = c.Chainstart;
                    try {
                        for (var f = i(this.hardforks()), u = f.next(); !u.done; u = f.next()) {
                            var h = u.value;
                            if (null !== h.block) e.gte(new x.BN(h.block)) && (d = h.name), t && h.td && (t.gte(new x.BN(h.td)) ? a = h.name : n = s), s = h.name;
                            else if (null != t && void 0 !== h.td && null !== h.td && t.gte(new x.BN(h.td))) return h.name
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (r = f.return) && r.call(f)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    if (t) {
                        var l = "block number: ".concat(e, " (-> ").concat(d, "), ");
                        if (a && !this.hardforkGteHardfork(d, a)) {
                            var p = "HF determined by block number is lower than the minimum total difficulty HF";
                            throw l += "total difficulty: ".concat(t, " (-> ").concat(a, ")"), new Error("".concat(p, ": ").concat(l))
                        }
                        if (n && !this.hardforkGteHardfork(n, d)) {
                            p = "Maximum HF determined by total difficulty is lower than the block number HF";
                            throw l += "total difficulty: ".concat(t, " (-> ").concat(n, ")"), new Error("".concat(p, ": ").concat(l))
                        }
                    }
                    return d
                }, t.prototype.setHardforkByBlockNumber = function(e, t) {
                    var o = this.getHardforkByBlockNumber(e, t);
                    return this.setHardfork(o), o
                }, t.prototype._chooseHardfork = function(e, t) {
                    if (void 0 === t && (t = !0), e) {
                        if (t && !this._isSupportedHardfork(e)) throw new Error("Hardfork ".concat(e, " not set as supported in supportedHardforks"))
                    } else e = this._hardfork;
                    return e
                }, t.prototype._getHardfork = function(e) {
                    var t, o, r = this.hardforks();
                    try {
                        for (var a = i(r), n = a.next(); !n.done; n = a.next()) {
                            var s = n.value;
                            if (s.name === e) return s
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (o = a.return) && o.call(a)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    throw new Error("Hardfork ".concat(e, " not defined for chain ").concat(this.chainName()))
                }, t.prototype._isSupportedHardfork = function(e) {
                    var t, o;
                    if (!(this._supportedHardforks.length > 0)) return !0;
                    try {
                        for (var r = i(this._supportedHardforks), a = r.next(); !a.done; a = r.next()) {
                            if (e === a.value) return !0
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (o = r.return) && o.call(r)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return !1
                }, t.prototype.setEIPs = function(e) {
                    var t, o, r = this;
                    void 0 === e && (e = []);
                    var a = function(t) {
                            if (!(t in l.EIPs)) throw new Error("".concat(t, " not supported"));
                            var o = n.gteHardfork(l.EIPs[t].minimumHardfork);
                            if (!o) throw new Error("".concat(t, " cannot be activated on hardfork ").concat(n.hardfork(), ", minimumHardfork: ").concat(o));
                            l.EIPs[t].requiredEIPs && l.EIPs[t].requiredEIPs.forEach((function(o) {
                                if (!e.includes(o) && !r.isActivatedEIP(o)) throw new Error("".concat(t, " requires EIP ").concat(o, ", but is not included in the EIP list"))
                            }))
                        },
                        n = this;
                    try {
                        for (var s = i(e), c = s.next(); !c.done; c = s.next()) {
                            a(c.value)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (o = s.return) && o.call(s)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    this._eips = e
                }, t.prototype.param = function(e, t) {
                    var o, r, a = null;
                    try {
                        for (var n = i(this._eips), s = n.next(); !s.done; s = n.next()) {
                            var c = s.value;
                            if (null !== (a = this.paramByEIP(e, t, c))) return a
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (r = n.return) && r.call(n)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return this.paramByHardfork(e, t, this._hardfork)
                }, t.prototype.paramByHardfork = function(e, t, o) {
                    var r, a, n, s;
                    o = this._chooseHardfork(o);
                    var c = null;
                    try {
                        for (var d = i(h.hardforks), f = d.next(); !f.done; f = d.next()) {
                            var x = f.value;
                            if ("eips" in x[1]) {
                                var u = x[1].eips;
                                try {
                                    for (var l = (n = void 0, i(u)), p = l.next(); !p.done; p = l.next()) {
                                        var m = p.value,
                                            b = this.paramByEIP(e, t, m);
                                        c = null !== b ? b : c
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        p && !p.done && (s = l.return) && s.call(l)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            } else {
                                if (!x[1][e]) throw new Error("Topic ".concat(e, " not defined"));
                                void 0 !== x[1][e][t] && (c = x[1][e][t].v)
                            }
                            if (x[0] === o) break
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            f && !f.done && (a = d.return) && a.call(d)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return c
                }, t.prototype.paramByEIP = function(e, t, o) {
                    if (!(o in l.EIPs)) throw new Error("".concat(o, " not supported"));
                    var r = l.EIPs[o];
                    if (!(e in r)) throw new Error("Topic ".concat(e, " not defined"));
                    return void 0 === r[e][t] ? null : r[e][t].v
                }, t.prototype.paramByBlock = function(e, t, o) {
                    var r = this.activeHardforks(o),
                        a = r[r.length - 1].name;
                    return this.paramByHardfork(e, t, a)
                }, t.prototype.isActivatedEIP = function(e) {
                    var t, o;
                    if (this.eips().includes(e)) return !0;
                    try {
                        for (var r = i(h.hardforks), a = r.next(); !a.done; a = r.next()) {
                            var n = a.value[1];
                            if (this.gteHardfork(n.name) && "eips" in n && n.eips.includes(e)) return !0
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (o = r.return) && o.call(r)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return !1
                }, t.prototype.hardforkIsActiveOnBlock = function(e, t, o) {
                    var r;
                    void 0 === o && (o = {}), t = (0, x.toType)(t, x.TypeOutput.BN);
                    var a = null !== (r = o.onlySupported) && void 0 !== r && r;
                    e = this._chooseHardfork(e, a);
                    var n = this.hardforkBlockBN(e);
                    return !(!n || !t.gte(n))
                }, t.prototype.activeOnBlock = function(e, t) {
                    return this.hardforkIsActiveOnBlock(null, e, t)
                }, t.prototype.hardforkGteHardfork = function(e, t, o) {
                    var r, a;
                    void 0 === o && (o = {});
                    var n, s = void 0 !== o.onlyActive && o.onlyActive;
                    e = this._chooseHardfork(e, o.onlySupported), n = s ? this.activeHardforks(null, o) : this.hardforks();
                    var c = -1,
                        d = -1,
                        f = 0;
                    try {
                        for (var x = i(n), u = x.next(); !u.done; u = x.next()) {
                            var h = u.value;
                            h.name === e && (c = f), h.name === t && (d = f), f += 1
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (a = x.return) && a.call(x)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return c >= d && -1 !== d
                }, t.prototype.gteHardfork = function(e, t) {
                    return this.hardforkGteHardfork(null, e, t)
                }, t.prototype.hardforkIsActiveOnChain = function(e, t) {
                    var o, r, a;
                    void 0 === t && (t = {});
                    var n = null !== (a = t.onlySupported) && void 0 !== a && a;
                    e = this._chooseHardfork(e, n);
                    try {
                        for (var s = i(this.hardforks()), c = s.next(); !c.done; c = s.next()) {
                            var d = c.value;
                            if (d.name === e && null !== d.block) return !0
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (r = s.return) && r.call(s)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return !1
                }, t.prototype.activeHardforks = function(e, t) {
                    var o, r;
                    void 0 === t && (t = {});
                    var a = [],
                        n = this.hardforks();
                    try {
                        for (var s = i(n), c = s.next(); !c.done; c = s.next()) {
                            var d = c.value;
                            if (null !== d.block) {
                                if (null != e && e < d.block) break;
                                t.onlySupported && !this._isSupportedHardfork(d.name) || a.push(d)
                            }
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (r = s.return) && r.call(s)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                }, t.prototype.activeHardfork = function(e, t) {
                    void 0 === t && (t = {});
                    var o = this.activeHardforks(e, t);
                    if (o.length > 0) return o[o.length - 1].name;
                    throw new Error("No (supported) active hardfork found")
                }, t.prototype.hardforkBlock = function(e) {
                    var t = this.hardforkBlockBN(e);
                    return (0, x.toType)(t, x.TypeOutput.Number)
                }, t.prototype.hardforkBlockBN = function(e) {
                    e = this._chooseHardfork(e, !1);
                    var t = this._getHardfork(e).block;
                    return null == t ? null : new x.BN(t)
                }, t.prototype.hardforkTD = function(e) {
                    e = this._chooseHardfork(e, !1);
                    var t = this._getHardfork(e).td;
                    return null == t ? null : new x.BN(t)
                }, t.prototype.isHardforkBlock = function(e, t) {
                    e = (0, x.toType)(e, x.TypeOutput.BN), t = this._chooseHardfork(t, !1);
                    var o = this.hardforkBlockBN(t);
                    return !!o && o.eq(e)
                }, t.prototype.nextHardforkBlock = function(e) {
                    var t = this.nextHardforkBlockBN(e);
                    return (0, x.toType)(t, x.TypeOutput.Number)
                }, t.prototype.nextHardforkBlockBN = function(e) {
                    e = this._chooseHardfork(e, !1);
                    var t = this.hardforkBlockBN(e);
                    return null === t ? null : this.hardforks().reduce((function(e, o) {
                        var r = new x.BN(o.block);
                        return r.gt(t) && null === e ? r : e
                    }), null)
                }, t.prototype.isNextHardforkBlock = function(e, t) {
                    e = (0, x.toType)(e, x.TypeOutput.BN), t = this._chooseHardfork(t, !1);
                    var o = this.nextHardforkBlockBN(t);
                    return null !== o && o.eq(e)
                }, t.prototype._calcForkHash = function(e) {
                    var t, o, r = Buffer.from(this.genesis().hash.substr(2), "hex"),
                        a = Buffer.alloc(0),
                        n = 0;
                    try {
                        for (var s = i(this.hardforks()), c = s.next(); !c.done; c = s.next()) {
                            var d = c.value,
                                u = d.block;
                            if (0 !== u && null !== u && u !== n) {
                                var h = Buffer.from(u.toString(16).padStart(16, "0"), "hex");
                                a = Buffer.concat([a, h])
                            }
                            if (d.name === e) break;
                            null !== u && (n = u)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (o = s.return) && o.call(s)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    var l = Buffer.concat([r, a]),
                        p = (0, x.intToBuffer)((0, f.buf)(l) >>> 0).toString("hex");
                    return "0x".concat(p)
                }, t.prototype.forkHash = function(e) {
                    e = this._chooseHardfork(e, !1);
                    var t = this._getHardfork(e);
                    if (null === t.block && void 0 === t.td) {
                        throw new Error("No fork hash calculation possible for future hardfork")
                    }
                    return void 0 !== t.forkHash ? t.forkHash : this._calcForkHash(e)
                }, t.prototype.hardforkForForkHash = function(e) {
                    var t = this.hardforks().filter((function(t) {
                        return t.forkHash === e
                    }));
                    return t.length >= 1 ? t[t.length - 1] : null
                }, t.prototype.genesis = function() {
                    return this._chainParams.genesis
                }, t.prototype.genesisState = function() {
                    var e, t;
                    switch (this.chainName()) {
                        case "mainnet":
                            return o(3586);
                        case "ropsten":
                            return o(3587);
                        case "rinkeby":
                            return o(3588);
                        case "kovan":
                            return o(3589);
                        case "goerli":
                            return o(3590);
                        case "sepolia":
                            return o(3591)
                    }
                    if (this._customChains && this._customChains.length > 0 && Array.isArray(this._customChains[0])) try {
                        for (var r = i(this._customChains), a = r.next(); !a.done; a = r.next()) {
                            var n = a.value;
                            if (n[0].name === this.chainName()) return n[1]
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            a && !a.done && (t = r.return) && t.call(r)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return {}
                }, t.prototype.hardforks = function() {
                    return this._chainParams.hardforks
                }, t.prototype.bootstrapNodes = function() {
                    return this._chainParams.bootstrapNodes
                }, t.prototype.dnsNetworks = function() {
                    return this._chainParams.dnsNetworks
                }, t.prototype.hardfork = function() {
                    return this._hardfork
                }, t.prototype.chainId = function() {
                    return (0, x.toType)(this.chainIdBN(), x.TypeOutput.Number)
                }, t.prototype.chainIdBN = function() {
                    return new x.BN(this._chainParams.chainId)
                }, t.prototype.chainName = function() {
                    return this._chainParams.name
                }, t.prototype.networkId = function() {
                    return (0, x.toType)(this.networkIdBN(), x.TypeOutput.Number)
                }, t.prototype.networkIdBN = function() {
                    return new x.BN(this._chainParams.networkId)
                }, t.prototype.eips = function() {
                    return this._eips
                }, t.prototype.consensusType = function() {
                    var e, t, o, r = this.hardfork();
                    try {
                        for (var a = i(h.hardforks), n = a.next(); !n.done; n = a.next()) {
                            var s = n.value;
                            if ("consensus" in s[1] && (o = s[1].consensus.type), s[0] === r) break
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            n && !n.done && (t = a.return) && t.call(a)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return o || this._chainParams.consensus.type
                }, t.prototype.consensusAlgorithm = function() {
                    var e, t, o, r = this.hardfork();
                    try {
                        for (var a = i(h.hardforks), n = a.next(); !n.done; n = a.next()) {
                            var s = n.value;
                            if ("consensus" in s[1] && (o = s[1].consensus.algorithm), s[0] === r) break
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            n && !n.done && (t = a.return) && t.call(a)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return o || this._chainParams.consensus.algorithm
                }, t.prototype.consensusConfig = function() {
                    var e, t, o, r = this.hardfork();
                    try {
                        for (var a = i(h.hardforks), n = a.next(); !n.done; n = a.next()) {
                            var s = n.value;
                            if ("consensus" in s[1] && (o = s[1].consensus[s[1].consensus.algorithm]), s[0] === r) break
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            n && !n.done && (t = a.return) && t.call(a)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    if (o) return o;
                    var c = this.consensusAlgorithm();
                    return this._chainParams.consensus[c]
                }, t.prototype.copy = function() {
                    var e = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
                    return e.removeAllListeners(), e
                }, t
            }(d.EventEmitter);
            t.default = p
        },
        1074: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AccessLists = t.checkMaxInitCodeSize = void 0;
            var r = o(241),
                a = o(413);
            t.checkMaxInitCodeSize = function(e, t) {
                if (t > e.param("vm", "maxInitCodeSize")) throw new Error("the initcode size of this transaction is too large: it is ".concat(t, " while the max is ").concat(e.param("vm", "maxInitCodeSize")))
            };
            var n = function() {
                function e() {}
                return e.getAccessListData = function(e) {
                    var t, o;
                    if (e && (0, a.isAccessList)(e)) {
                        t = e;
                        for (var n = [], i = 0; i < e.length; i++) {
                            for (var s = e[i], c = (0, r.toBuffer)(s.address), d = [], f = 0; f < s.storageKeys.length; f++) d.push((0, r.toBuffer)(s.storageKeys[f]));
                            n.push([c, d])
                        }
                        o = n
                    } else {
                        o = null != e ? e : [];
                        var x = [];
                        for (i = 0; i < o.length; i++) {
                            var u = o[i],
                                h = (0, r.bufferToHex)(u[0]),
                                l = [];
                            for (s = 0; s < u[1].length; s++) l.push((0, r.bufferToHex)(u[1][s]));
                            var p = {
                                address: h,
                                storageKeys: l
                            };
                            x.push(p)
                        }
                        t = x
                    }
                    return {
                        AccessListJSON: t,
                        accessList: o
                    }
                }, e.verifyAccessList = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var o = e[t],
                            r = o[0],
                            a = o[1];
                        if (void 0 !== o[2]) throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");
                        if (20 != r.length) throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");
                        for (var n = 0; n < a.length; n++)
                            if (32 != a[n].length) throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes")
                    }
                }, e.getAccessListJSON = function(e) {
                    for (var t = [], o = 0; o < e.length; o++) {
                        for (var a = e[o], n = {
                                address: "0x" + (0, r.setLengthLeft)(a[0], 20).toString("hex"),
                                storageKeys: []
                            }, i = a[1], s = 0; s < i.length; s++) {
                            var c = i[s];
                            n.storageKeys.push("0x" + (0, r.setLengthLeft)(c, 32).toString("hex"))
                        }
                        t.push(n)
                    }
                    return t
                }, e.getDataFeeEIP2930 = function(e, t) {
                    for (var o = t.param("gasPrices", "accessListStorageKeyCost"), r = t.param("gasPrices", "accessListAddressCost"), a = 0, n = 0; n < e.length; n++) {
                        a += e[n][1].length
                    }
                    return e.length * r + a * o
                }, e
            }();
            t.AccessLists = n
        },
        1860: function(e, t, o) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, o, r) {
                    void 0 === r && (r = o);
                    var a = Object.getOwnPropertyDescriptor(t, o);
                    a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
                        enumerable: !0,
                        get: function() {
                            return t[o]
                        }
                    }), Object.defineProperty(e, r, a)
                } : function(e, t, o, r) {
                    void 0 === r && (r = o), e[r] = t[o]
                }),
                a = this && this.__exportStar || function(e, t) {
                    for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || r(t, e, o)
                },
                n = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FeeMarketEIP1559Transaction = t.TransactionFactory = t.AccessListEIP2930Transaction = t.Transaction = void 0;
            var i = o(3536);
            Object.defineProperty(t, "Transaction", {
                enumerable: !0,
                get: function() {
                    return n(i).default
                }
            });
            var s = o(3592);
            Object.defineProperty(t, "AccessListEIP2930Transaction", {
                enumerable: !0,
                get: function() {
                    return n(s).default
                }
            });
            var c = o(3593);
            Object.defineProperty(t, "TransactionFactory", {
                enumerable: !0,
                get: function() {
                    return n(c).default
                }
            });
            var d = o(3594);
            Object.defineProperty(t, "FeeMarketEIP1559Transaction", {
                enumerable: !0,
                get: function() {
                    return n(d).default
                }
            }), a(o(413), t)
        },
        3536: function(e, t, o) {
            "use strict";
            var r, a = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function o() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                }),
                n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, o = 1, r = arguments.length; o < r; o++)
                            for (var a in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                i = this && this.__read || function(e, t) {
                    var o = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!o) return e;
                    var r, a, n = o.call(e),
                        i = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = n.next()).done;) i.push(r.value)
                    } catch (e) {
                        a = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (o = n.return) && o.call(n)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                    return i
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = o(241),
                c = o(413),
                d = o(1072),
                f = o(1074),
                x = function(e) {
                    function t(t, o) {
                        void 0 === o && (o = {});
                        var r, a = this;
                        if ((a = e.call(this, n(n({}, t), {
                                type: 0
                            }), o) || this).common = a._validateTxV(a.v, o.common), a.gasPrice = new s.BN((0, s.toBuffer)("" === t.gasPrice ? "0x" : t.gasPrice)), a.gasPrice.mul(a.gasLimit).gt(s.MAX_INTEGER)) {
                            var i = a._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");
                            throw new Error(i)
                        }
                        if (a._validateCannotExceedMaxInteger({
                                gasPrice: a.gasPrice
                            }), a.common.gteHardfork("spuriousDragon"))
                            if (a.isSigned()) {
                                var d = a.v,
                                    x = a.common.chainIdBN().muln(2);
                                (d.eq(x.addn(35)) || d.eq(x.addn(36))) && a.activeCapabilities.push(c.Capability.EIP155ReplayProtection)
                            } else a.activeCapabilities.push(c.Capability.EIP155ReplayProtection);
                        return a.common.isActivatedEIP(3860) && (0, f.checkMaxInitCodeSize)(a.common, a.data.length), (null === (r = null == o ? void 0 : o.freeze) || void 0 === r || r) && Object.freeze(a), a
                    }
                    return a(t, e), t.fromTxData = function(e, o) {
                        return void 0 === o && (o = {}), new t(e, o)
                    }, t.fromSerializedTx = function(e, t) {
                        void 0 === t && (t = {});
                        var o = s.rlp.decode(e);
                        if (!Array.isArray(o)) throw new Error("Invalid serialized tx input. Must be array");
                        return this.fromValuesArray(o, t)
                    }, t.fromRlpSerializedTx = function(e, o) {
                        return void 0 === o && (o = {}), t.fromSerializedTx(e, o)
                    }, t.fromValuesArray = function(e, o) {
                        if (void 0 === o && (o = {}), 6 !== e.length && 9 !== e.length) throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");
                        var r = i(e, 9),
                            a = r[0],
                            n = r[1],
                            c = r[2],
                            d = r[3],
                            f = r[4],
                            x = r[5],
                            u = r[6],
                            h = r[7],
                            l = r[8];
                        return (0, s.validateNoLeadingZeroes)({
                            nonce: a,
                            gasPrice: n,
                            gasLimit: c,
                            value: f,
                            v: u,
                            r: h,
                            s: l
                        }), new t({
                            nonce: a,
                            gasPrice: n,
                            gasLimit: c,
                            to: d,
                            value: f,
                            data: x,
                            v: u,
                            r: h,
                            s: l
                        }, o)
                    }, t.prototype.raw = function() {
                        return [(0, s.bnToUnpaddedBuffer)(this.nonce), (0, s.bnToUnpaddedBuffer)(this.gasPrice), (0, s.bnToUnpaddedBuffer)(this.gasLimit), void 0 !== this.to ? this.to.buf : Buffer.from([]), (0, s.bnToUnpaddedBuffer)(this.value), this.data, void 0 !== this.v ? (0, s.bnToUnpaddedBuffer)(this.v) : Buffer.from([]), void 0 !== this.r ? (0, s.bnToUnpaddedBuffer)(this.r) : Buffer.from([]), void 0 !== this.s ? (0, s.bnToUnpaddedBuffer)(this.s) : Buffer.from([])]
                    }, t.prototype.serialize = function() {
                        return s.rlp.encode(this.raw())
                    }, t.prototype._getMessageToSign = function() {
                        var e = [(0, s.bnToUnpaddedBuffer)(this.nonce), (0, s.bnToUnpaddedBuffer)(this.gasPrice), (0, s.bnToUnpaddedBuffer)(this.gasLimit), void 0 !== this.to ? this.to.buf : Buffer.from([]), (0, s.bnToUnpaddedBuffer)(this.value), this.data];
                        return this.supports(c.Capability.EIP155ReplayProtection) && (e.push((0, s.toBuffer)(this.common.chainIdBN())), e.push((0, s.unpadBuffer)((0, s.toBuffer)(0))), e.push((0, s.unpadBuffer)((0, s.toBuffer)(0)))), e
                    }, t.prototype.getMessageToSign = function(e) {
                        void 0 === e && (e = !0);
                        var t = this._getMessageToSign();
                        return e ? (0, s.rlphash)(t) : t
                    }, t.prototype.getDataFee = function() {
                        return this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork() ? this.cache.dataFee.value : (Object.isFrozen(this) && (this.cache.dataFee = {
                            value: e.prototype.getDataFee.call(this),
                            hardfork: this.common.hardfork()
                        }), e.prototype.getDataFee.call(this))
                    }, t.prototype.getUpfrontCost = function() {
                        return this.gasLimit.mul(this.gasPrice).add(this.value)
                    }, t.prototype.hash = function() {
                        return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = (0, s.rlphash)(this.raw())), this.cache.hash) : (0, s.rlphash)(this.raw())
                    }, t.prototype.getMessageToVerifySignature = function() {
                        if (!this.isSigned()) {
                            var e = this._errorMsg("This transaction is not signed");
                            throw new Error(e)
                        }
                        var t = this._getMessageToSign();
                        return (0, s.rlphash)(t)
                    }, t.prototype.getSenderPublicKey = function() {
                        var e, t = this.getMessageToVerifySignature();
                        if (this.common.gteHardfork("homestead") && (null === (e = this.s) || void 0 === e ? void 0 : e.gt(c.N_DIV_2))) {
                            var o = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                            throw new Error(o)
                        }
                        var r = this.v,
                            a = this.r,
                            n = this.s;
                        try {
                            return (0, s.ecrecover)(t, r, (0, s.bnToUnpaddedBuffer)(a), (0, s.bnToUnpaddedBuffer)(n), this.supports(c.Capability.EIP155ReplayProtection) ? this.common.chainIdBN() : void 0)
                        } catch (e) {
                            o = this._errorMsg("Invalid Signature");
                            throw new Error(o)
                        }
                    }, t.prototype._processSignature = function(e, o, r) {
                        var a = new s.BN(e);
                        this.supports(c.Capability.EIP155ReplayProtection) && a.iadd(this.common.chainIdBN().muln(2).addn(8));
                        var i = n(n({}, this.txOptions), {
                            common: this.common
                        });
                        return t.fromTxData({
                            nonce: this.nonce,
                            gasPrice: this.gasPrice,
                            gasLimit: this.gasLimit,
                            to: this.to,
                            value: this.value,
                            data: this.data,
                            v: a,
                            r: new s.BN(o),
                            s: new s.BN(r)
                        }, i)
                    }, t.prototype.toJSON = function() {
                        return {
                            nonce: (0, s.bnToHex)(this.nonce),
                            gasPrice: (0, s.bnToHex)(this.gasPrice),
                            gasLimit: (0, s.bnToHex)(this.gasLimit),
                            to: void 0 !== this.to ? this.to.toString() : void 0,
                            value: (0, s.bnToHex)(this.value),
                            data: "0x" + this.data.toString("hex"),
                            v: void 0 !== this.v ? (0, s.bnToHex)(this.v) : void 0,
                            r: void 0 !== this.r ? (0, s.bnToHex)(this.r) : void 0,
                            s: void 0 !== this.s ? (0, s.bnToHex)(this.s) : void 0
                        }
                    }, t.prototype._validateTxV = function(e, t) {
                        if (void 0 !== e && e.ltn(37) && !e.eqn(27) && !e.eqn(28)) throw new Error("Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ".concat(e));
                        var o;
                        if (void 0 !== e && (!t || t.gteHardfork("spuriousDragon")) && !e.eqn(27) && !e.eqn(28))
                            if (t) {
                                var r = t.chainIdBN().muln(2);
                                if (!(e.eq(r.addn(35)) || e.eq(r.addn(36)))) throw new Error("Incompatible EIP155-based V ".concat(e, " and chain id ").concat(t.chainIdBN(), ". See the Common parameter of the Transaction constructor to set the chain id."))
                            } else {
                                var a = void 0;
                                a = e.subn(35).isEven() ? 35 : 36, o = e.subn(a).divn(2)
                            } return this._getCommon(t, o)
                    }, t.prototype._unsignedTxImplementsEIP155 = function() {
                        return this.common.gteHardfork("spuriousDragon")
                    }, t.prototype._signedTxImplementsEIP155 = function() {
                        if (!this.isSigned()) {
                            var e = this._errorMsg("This transaction is not signed");
                            throw new Error(e)
                        }
                        var t = this.common.gteHardfork("spuriousDragon"),
                            o = this.v,
                            r = this.common.chainIdBN().muln(2);
                        return (o.eq(r.addn(35)) || o.eq(r.addn(36))) && t
                    }, t.prototype.errorStr = function() {
                        var e = this._getSharedErrorPostfix();
                        return e += " gasPrice=".concat(this.gasPrice)
                    }, t.prototype._errorMsg = function(e) {
                        return "".concat(e, " (").concat(this.errorStr(), ")")
                    }, t
                }(d.BaseTransaction);
            t.default = x
        },
        3538: function(e, t, o) {
            "use strict";
            var r = this && this.__values || function(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        o = t && e[t],
                        r = 0;
                    if (o) return o.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.chains = t._getInitializedChains = void 0;
            var n = a(o(3539)),
                i = a(o(3540)),
                s = a(o(3541)),
                c = a(o(3542)),
                d = a(o(3543)),
                f = a(o(3544));

            function x(e) {
                var t, o, a = {
                        1: "mainnet",
                        3: "ropsten",
                        4: "rinkeby",
                        42: "kovan",
                        5: "goerli",
                        11155111: "sepolia"
                    },
                    x = {
                        mainnet: n.default,
                        ropsten: i.default,
                        rinkeby: s.default,
                        kovan: c.default,
                        goerli: d.default,
                        sepolia: f.default
                    };
                if (e) try {
                    for (var u = r(e), h = u.next(); !h.done; h = u.next()) {
                        var l = h.value,
                            p = l.name;
                        a[l.chainId.toString()] = p, x[p] = l
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        h && !h.done && (o = u.return) && o.call(u)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return x.names = a, x
            }
            t._getInitializedChains = x, t.chains = x()
        },
        3539: function(e) {
            e.exports = JSON.parse('{"name":"mainnet","chainId":1,"networkId":1,"defaultHardfork":"istanbul","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"The Ethereum main chain","url":"https://ethstats.net/","genesis":{"hash":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","timestamp":null,"gasLimit":5000,"difficulty":17179869184,"nonce":"0x0000000000000042","extraData":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","stateRoot":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xfc64ec04"},{"name":"homestead","block":1150000,"forkHash":"0x97c2c34c"},{"name":"dao","block":1920000,"forkHash":"0x91d1f948"},{"name":"tangerineWhistle","block":2463000,"forkHash":"0x7a64da13"},{"name":"spuriousDragon","block":2675000,"forkHash":"0x3edd5b10"},{"name":"byzantium","block":4370000,"forkHash":"0xa00bc324"},{"name":"constantinople","block":7280000,"forkHash":"0x668db0af"},{"name":"petersburg","block":7280000,"forkHash":"0x668db0af"},{"name":"istanbul","block":9069000,"forkHash":"0x879d6e30"},{"name":"muirGlacier","block":9200000,"forkHash":"0xe029e991"},{"name":"berlin","block":12244000,"forkHash":"0x0eb440f6"},{"name":"london","block":12965000,"forkHash":"0xb715077d"},{"name":"arrowGlacier","block":13773000,"forkHash":"0x20c327fc"},{"name":"grayGlacier","block":15050000,"forkHash":"0xf0afd0e3"},{"name":"mergeForkIdTransition","block":null,"forkHash":null},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"18.138.108.67","port":30303,"id":"d860a01f9722d78051619d1e2351aba3f43f943f6f00718d1b9baa4101932a1f5011f16bb2b1bb35db20d6fe28fa0bf09636d26a87d31de9ec6203eeedb1f666","location":"ap-southeast-1-001","comment":"bootnode-aws-ap-southeast-1-001"},{"ip":"3.209.45.79","port":30303,"id":"22a8232c3abc76a16ae9d6c3b164f98775fe226f0917b0ca871128a74a8e9630b458460865bab457221f1d448dd9791d24c4e5d88786180ac185df813a68d4de","location":"us-east-1-001","comment":"bootnode-aws-us-east-1-001"},{"ip":"34.255.23.113","port":30303,"id":"ca6de62fce278f96aea6ec5a2daadb877e51651247cb96ee310a318def462913b653963c155a0ef6c7d50048bba6e6cea881130857413d9f50a621546b590758","location":"eu-west-1-001","comment":"bootnode-aws-eu-west-1-001"},{"ip":"35.158.244.151","port":30303,"id":"279944d8dcd428dffaa7436f25ca0ca43ae19e7bcf94a8fb7d1641651f92d121e972ac2e8f381414b80cc8e5555811c2ec6e1a99bb009b3f53c4c69923e11bd8","location":"eu-central-1-001","comment":"bootnode-aws-eu-central-1-001"},{"ip":"52.187.207.27","port":30303,"id":"8499da03c47d637b20eee24eec3c356c9a2e6148d6fe25ca195c7949ab8ec2c03e3556126b0d7ed644675e78c4318b08691b7b57de10e5f0d40d05b09238fa0a","location":"australiaeast-001","comment":"bootnode-azure-australiaeast-001"},{"ip":"191.234.162.198","port":30303,"id":"103858bdb88756c71f15e9b5e09b56dc1be52f0a5021d46301dbbfb7e130029cc9d0d6f73f693bc29b665770fff7da4d34f3c6379fe12721b5d7a0bcb5ca1fc1","location":"brazilsouth-001","comment":"bootnode-azure-brazilsouth-001"},{"ip":"52.231.165.108","port":30303,"id":"715171f50508aba88aecd1250af392a45a330af91d7b90701c436b618c86aaa1589c9184561907bebbb56439b8f8787bc01f49a7c77276c58c1b09822d75e8e8","location":"koreasouth-001","comment":"bootnode-azure-koreasouth-001"},{"ip":"104.42.217.25","port":30303,"id":"5d6d7cd20d6da4bb83a1d28cadb5d409b64edf314c0335df658c1a54e32c7c4a7ab7823d57c39b6a757556e68ff1df17c748b698544a55cb488b52479a92b60f","location":"westus-001","comment":"bootnode-azure-westus-001"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net"]}')
        },
        3540: function(e) {
            e.exports = JSON.parse('{"name":"ropsten","chainId":3,"networkId":3,"defaultHardfork":"istanbul","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"PoW test network","url":"https://github.com/ethereum/ropsten","genesis":{"hash":"0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d","timestamp":null,"gasLimit":16777216,"difficulty":1048576,"nonce":"0x0000000000000042","extraData":"0x3535353535353535353535353535353535353535353535353535353535353535","stateRoot":"0x217b0bbcfb72e2d57e28f33cb361b9983513177755dc3f33ce3e7022ed62b77b"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x30c7ddbc"},{"name":"homestead","block":0,"forkHash":"0x30c7ddbc"},{"name":"tangerineWhistle","block":0,"forkHash":"0x30c7ddbc"},{"name":"spuriousDragon","block":10,"forkHash":"0x63760190"},{"name":"byzantium","block":1700000,"forkHash":"0x3ea159c7"},{"name":"constantinople","block":4230000,"forkHash":"0x97b544f3"},{"name":"petersburg","block":4939394,"forkHash":"0xd6e2149b"},{"name":"istanbul","block":6485846,"forkHash":"0x4bc66396"},{"name":"muirGlacier","block":7117117,"forkHash":"0x6727ef90"},{"name":"berlin","block":9812189,"forkHash":"0xa157d377"},{"name":"london","block":10499401,"forkHash":"0x7119b6b3"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"52.176.7.10","port":30303,"id":"30b7ab30a01c124a6cceca36863ece12c4f5fa68e3ba9b0b51407ccc002eeed3b3102d20a88f1c1d3c3154e2449317b8ef95090e77b312d5cc39354f86d5d606","location":"","comment":"US-Azure geth"},{"ip":"52.176.100.77","port":30303,"id":"865a63255b3bb68023b6bffd5095118fcc13e79dcf014fe4e47e065c350c7cc72af2e53eff895f11ba1bbb6a2b33271c1116ee870f266618eadfc2e78aa7349c","location":"","comment":"US-Azure parity"},{"ip":"52.232.243.152","port":30303,"id":"6332792c4a00e3e4ee0926ed89e0d27ef985424d97b6a45bf0f23e51f0dcb5e66b875777506458aea7af6f9e4ffb69f43f3778ee73c81ed9d34c51c4b16b0b0f","location":"","comment":"Parity"},{"ip":"192.81.208.223","port":30303,"id":"94c15d1b9e2fe7ce56e458b9a3b672ef11894ddedd0c6f247e0f1d3487f52b66208fb4aeb8179fce6e3a749ea93ed147c37976d67af557508d199d9594c35f09","location":"","comment":"@gpip"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.ropsten.ethdisco.net"]}')
        },
        3541: function(e) {
            e.exports = JSON.parse('{"name":"rinkeby","chainId":4,"networkId":4,"defaultHardfork":"istanbul","consensus":{"type":"poa","algorithm":"clique","clique":{"period":15,"epoch":30000}},"comment":"PoA test network","url":"https://www.rinkeby.io","genesis":{"hash":"0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177","timestamp":"0x58ee40ba","gasLimit":4700000,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x52657370656374206d7920617574686f7269746168207e452e436172746d616e42eb768f2244c8811c63729a21a3569731535f067ffc57839b00206d1ad20c69a1981b489f772031b279182d99e65703f0076e4812653aab85fca0f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","stateRoot":"0x53580584816f617295ea26c0e17641e0120cab2f0a8ffb53a866fd53aa8e8c2d"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x3b8e0691"},{"name":"homestead","block":1,"forkHash":"0x60949295"},{"name":"tangerineWhistle","block":2,"forkHash":"0x8bde40dd"},{"name":"spuriousDragon","block":3,"forkHash":"0xcb3a64bb"},{"name":"byzantium","block":1035301,"forkHash":"0x8d748b57"},{"name":"constantinople","block":3660663,"forkHash":"0xe49cab14"},{"name":"petersburg","block":4321234,"forkHash":"0xafec6b27"},{"name":"istanbul","block":5435345,"forkHash":"0xcbdb8838"},{"name":"berlin","block":8290928,"forkHash":"0x6910c8bd"},{"name":"london","block":8897988,"forkHash":"0x8e29f2f3"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"52.169.42.101","port":30303,"id":"a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf","location":"","comment":"IE"},{"ip":"52.3.158.184","port":30303,"id":"343149e4feefa15d882d9fe4ac7d88f885bd05ebb735e547f12e12080a9fa07c8014ca6fd7f373123488102fe5e34111f8509cf0b7de3f5b44339c9f25e87cb8","location":"","comment":"INFURA"},{"ip":"159.89.28.211","port":30303,"id":"b6b28890b006743680c52e64e0d16db57f28124885595fa03a562be1d2bf0f3a1da297d56b13da25fb992888fd556d4c1a27b1f39d531bde7de1921c90061cc6","location":"","comment":"AKASHA"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.rinkeby.ethdisco.net"]}')
        },
        3542: function(e) {
            e.exports = JSON.parse('{"name":"kovan","chainId":42,"networkId":42,"defaultHardfork":"istanbul","consensus":{"type":"poa","algorithm":"aura","aura":{}},"comment":"Parity PoA test network","url":"https://kovan-testnet.github.io/website/","genesis":{"hash":"0xa3c565fc15c7478862d50ccd6561e3c06b24cc509bf388941c25ea985ce32cb9","timestamp":null,"gasLimit":6000000,"difficulty":131072,"nonce":"0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","extraData":"0x","stateRoot":"0x2480155b48a1cea17d67dbfdfaafe821c1d19cdd478c5358e8ec56dec24502b2"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x010ffe56"},{"name":"homestead","block":0,"forkHash":"0x010ffe56"},{"name":"tangerineWhistle","block":0,"forkHash":"0x010ffe56"},{"name":"spuriousDragon","block":0,"forkHash":"0x010ffe56"},{"name":"byzantium","block":5067000,"forkHash":"0x7f83c620"},{"name":"constantinople","block":9200000,"forkHash":"0xa94e3dc4"},{"name":"petersburg","block":10255201,"forkHash":"0x186874aa"},{"name":"istanbul","block":14111141,"forkHash":"0x7f6599a6"},{"name":"berlin","block":24770900,"forkHash":"0x1a0f10d9"},{"name":"london","block":26741100,"forkHash":"0x1ed20b71"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"116.203.116.241","port":30303,"id":"16898006ba2cd4fa8bf9a3dfe32684c178fa861df144bfc21fe800dc4838a03e342056951fa9fd533dcb0be1219e306106442ff2cf1f7e9f8faa5f2fc1a3aa45","location":"","comment":"1"},{"ip":"3.217.96.11","port":30303,"id":"2909846f78c37510cc0e306f185323b83bb2209e5ff4fdd279d93c60e3f365e3c6e62ad1d2133ff11f9fd6d23ad9c3dad73bb974d53a22f7d1ac5b7dea79d0b0","location":"","comment":"2"},{"ip":"108.61.170.124","port":30303,"id":"740e1c8ea64e71762c71a463a04e2046070a0c9394fcab5891d41301dc473c0cff00ebab5a9bc87fbcb610ab98ac18225ff897bc8b7b38def5975d5ceb0a7d7c","location":"","comment":"3"},{"ip":"157.230.31.163","port":30303,"id":"2909846f78c37510cc0e306f185323b83bb2209e5ff4fdd279d93c60e3f365e3c6e62ad1d2133ff11f9fd6d23ad9c3dad73bb974d53a22f7d1ac5b7dea79d0b0","location":"","comment":"4"}]}')
        },
        3543: function(e) {
            e.exports = JSON.parse('{"name":"goerli","chainId":5,"networkId":5,"defaultHardfork":"istanbul","consensus":{"type":"poa","algorithm":"clique","clique":{"period":15,"epoch":30000}},"comment":"Cross-client PoA test network","url":"https://github.com/goerli/testnet","genesis":{"hash":"0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a","timestamp":"0x5c51a607","gasLimit":10485760,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","stateRoot":"0x5d6cded585e73c4e322c30c2f782a336316f17dd85a4863b9d838d2d4b8b3008"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xa3f5ab08"},{"name":"homestead","block":0,"forkHash":"0xa3f5ab08"},{"name":"tangerineWhistle","block":0,"forkHash":"0xa3f5ab08"},{"name":"spuriousDragon","block":0,"forkHash":"0xa3f5ab08"},{"name":"byzantium","block":0,"forkHash":"0xa3f5ab08"},{"name":"constantinople","block":0,"forkHash":"0xa3f5ab08"},{"name":"petersburg","block":0,"forkHash":"0xa3f5ab08"},{"name":"istanbul","block":1561651,"forkHash":"0xc25efa5c"},{"name":"berlin","block":4460644,"forkHash":"0x757a1c47"},{"name":"london","block":5062605,"forkHash":"0xb8c6299d"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"51.141.78.53","port":30303,"id":"011f758e6552d105183b1761c5e2dea0111bc20fd5f6422bc7f91e0fabbec9a6595caf6239b37feb773dddd3f87240d99d859431891e4a642cf2a0a9e6cbb98a","location":"","comment":"Upstream bootnode 1"},{"ip":"13.93.54.137","port":30303,"id":"176b9417f511d05b6b2cf3e34b756cf0a7096b3094572a8f6ef4cdcb9d1f9d00683bf0f83347eebdf3b81c3521c2332086d9592802230bf528eaf606a1d9677b","location":"","comment":"Upstream bootnode 2"},{"ip":"94.237.54.114","port":30313,"id":"46add44b9f13965f7b9875ac6b85f016f341012d84f975377573800a863526f4da19ae2c620ec73d11591fa9510e992ecc03ad0751f53cc02f7c7ed6d55c7291","location":"","comment":"Upstream bootnode 3"},{"ip":"18.218.250.66","port":30313,"id":"b5948a2d3e9d486c4d75bf32713221c2bd6cf86463302339299bd227dc2e276cd5a1c7ca4f43a0e9122fe9af884efed563bd2a1fd28661f3b5f5ad7bf1de5949","location":"","comment":"Upstream bootnode 4"},{"ip":"3.11.147.67","port":30303,"id":"a61215641fb8714a373c80edbfa0ea8878243193f57c96eeb44d0bc019ef295abd4e044fd619bfc4c59731a73fb79afe84e9ab6da0c743ceb479cbb6d263fa91","location":"","comment":"Ethereum Foundation bootnode"},{"ip":"51.15.116.226","port":30303,"id":"a869b02cec167211fb4815a82941db2e7ed2936fd90e78619c53eb17753fcf0207463e3419c264e2a1dd8786de0df7e68cf99571ab8aeb7c4e51367ef186b1dd","location":"","comment":"Goerli Initiative bootnode"},{"ip":"51.15.119.157","port":30303,"id":"807b37ee4816ecf407e9112224494b74dd5933625f655962d892f2f0f02d7fbbb3e2a94cf87a96609526f30c998fd71e93e2f53015c558ffc8b03eceaf30ee33","location":"","comment":"Goerli Initiative bootnode"},{"ip":"51.15.119.157","port":40303,"id":"a59e33ccd2b3e52d578f1fbd70c6f9babda2650f0760d6ff3b37742fdcdfdb3defba5d56d315b40c46b70198c7621e63ffa3f987389c7118634b0fefbbdfa7fd","location":"","comment":"Goerli Initiative bootnode"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net"]}')
        },
        3544: function(e) {
            e.exports = JSON.parse('{"name":"sepolia","chainId":11155111,"networkId":11155111,"defaultHardfork":"istanbul","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"PoW test network to replace Ropsten","url":"https://github.com/ethereum/go-ethereum/pull/23730","genesis":{"hash":"0x25a5cc106eea7138acab33231d7160d69cb777ee0c2c553fcddf5138993e6dd9","timestamp":"0x6159af19","gasLimit":30000000,"difficulty":131072,"nonce":"0x0000000000000000","extraData":"0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521","stateRoot":"0x5eb6e371a698b8d68f665192350ffcecbbbf322916f4b51bd79bb6887da3f494"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xfe3366e7"},{"name":"homestead","block":0,"forkHash":"0xfe3366e7"},{"name":"tangerineWhistle","block":0,"forkHash":"0xfe3366e7"},{"name":"spuriousDragon","block":0,"forkHash":"0xfe3366e7"},{"name":"byzantium","block":0,"forkHash":"0xfe3366e7"},{"name":"constantinople","block":0,"forkHash":"0xfe3366e7"},{"name":"petersburg","block":0,"forkHash":"0xfe3366e7"},{"name":"istanbul","block":0,"forkHash":"0xfe3366e7"},{"name":"muirGlacier","block":0,"forkHash":"0xfe3366e7"},{"name":"berlin","block":0,"forkHash":"0xfe3366e7"},{"name":"london","block":0,"forkHash":"0xfe3366e7"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"18.168.182.86","port":30303,"id":"9246d00bc8fd1742e5ad2428b80fc4dc45d786283e05ef6edbd9002cbc335d40998444732fbe921cb88e1d2c73d1b1de53bae6a2237996e9bfe14f871baf7066","location":"","comment":"geth"},{"ip":"52.14.151.177","port":30303,"id":"ec66ddcf1a974950bd4c782789a7e04f8aa7110a72569b6e65fcd51e937e74eed303b1ea734e4d19cfaec9fbff9b6ee65bf31dcb50ba79acce9dd63a6aca61c7","location":"","comment":"besu"}],"dnsNetworks":[]}')
        },
        3545: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hardforks = void 0, t.hardforks = [
                ["chainstart", o(3546)],
                ["homestead", o(3547)],
                ["dao", o(3548)],
                ["tangerineWhistle", o(3549)],
                ["spuriousDragon", o(3550)],
                ["byzantium", o(3551)],
                ["constantinople", o(3552)],
                ["petersburg", o(3553)],
                ["istanbul", o(3554)],
                ["muirGlacier", o(3555)],
                ["berlin", o(3556)],
                ["london", o(3557)],
                ["shanghai", o(3558)],
                ["arrowGlacier", o(3559)],
                ["grayGlacier", o(3560)],
                ["mergeForkIdTransition", o(3561)],
                ["merge", o(3562)]
            ]
        },
        3546: function(e) {
            e.exports = JSON.parse('{"name":"chainstart","comment":"Start of the Ethereum main chain","url":"","status":"","gasConfig":{"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be"},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations"},"maxRefundQuotient":{"v":2,"d":"Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"}},"gasPrices":{"base":{"v":2,"d":"Gas base cost, used e.g. for ChainID opcode (Istanbul)"},"tierStep":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them"},"exp":{"v":10,"d":"Base fee of the EXP opcode"},"expByte":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction"},"sha3":{"v":30,"d":"Base fee of the SHA3 opcode"},"sha3Word":{"v":6,"d":"Once per word of the SHA3 operation\'s data"},"sload":{"v":50,"d":"Base fee of the SLOAD opcode"},"sstoreSet":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero"},"sstoreReset":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero"},"sstoreRefund":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero"},"jumpdest":{"v":1,"d":"Base fee of the JUMPDEST opcode"},"log":{"v":375,"d":"Base fee of the LOG opcode"},"logData":{"v":8,"d":"Per byte in a LOG* operation\'s data"},"logTopic":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"},"create":{"v":32000,"d":"Base fee of the CREATE opcode"},"call":{"v":40,"d":"Base fee of the CALL opcode"},"callStipend":{"v":2300,"d":"Free gas given at beginning of call"},"callValueTransfer":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero"},"callNewAccount":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior"},"selfdestructRefund":{"v":24000,"d":"Refunded following a selfdestruct operation"},"memory":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation"},"createData":{"v":200,"d":""},"tx":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions"},"txCreation":{"v":32000,"d":"The cost of creating a contract via tx"},"txDataZero":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"},"txDataNonZero":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"copy":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"},"ecRecover":{"v":3000,"d":""},"sha256":{"v":60,"d":""},"sha256Word":{"v":12,"d":""},"ripemd160":{"v":600,"d":""},"ripemd160Word":{"v":120,"d":""},"identity":{"v":15,"d":""},"identityWord":{"v":3,"d":""},"stop":{"v":0,"d":"Base fee of the STOP opcode"},"add":{"v":3,"d":"Base fee of the ADD opcode"},"mul":{"v":5,"d":"Base fee of the MUL opcode"},"sub":{"v":3,"d":"Base fee of the SUB opcode"},"div":{"v":5,"d":"Base fee of the DIV opcode"},"sdiv":{"v":5,"d":"Base fee of the SDIV opcode"},"mod":{"v":5,"d":"Base fee of the MOD opcode"},"smod":{"v":5,"d":"Base fee of the SMOD opcode"},"addmod":{"v":8,"d":"Base fee of the ADDMOD opcode"},"mulmod":{"v":8,"d":"Base fee of the MULMOD opcode"},"signextend":{"v":5,"d":"Base fee of the SIGNEXTEND opcode"},"lt":{"v":3,"d":"Base fee of the LT opcode"},"gt":{"v":3,"d":"Base fee of the GT opcode"},"slt":{"v":3,"d":"Base fee of the SLT opcode"},"sgt":{"v":3,"d":"Base fee of the SGT opcode"},"eq":{"v":3,"d":"Base fee of the EQ opcode"},"iszero":{"v":3,"d":"Base fee of the ISZERO opcode"},"and":{"v":3,"d":"Base fee of the AND opcode"},"or":{"v":3,"d":"Base fee of the OR opcode"},"xor":{"v":3,"d":"Base fee of the XOR opcode"},"not":{"v":3,"d":"Base fee of the NOT opcode"},"byte":{"v":3,"d":"Base fee of the BYTE opcode"},"address":{"v":2,"d":"Base fee of the ADDRESS opcode"},"balance":{"v":20,"d":"Base fee of the BALANCE opcode"},"origin":{"v":2,"d":"Base fee of the ORIGIN opcode"},"caller":{"v":2,"d":"Base fee of the CALLER opcode"},"callvalue":{"v":2,"d":"Base fee of the CALLVALUE opcode"},"calldataload":{"v":3,"d":"Base fee of the CALLDATALOAD opcode"},"calldatasize":{"v":2,"d":"Base fee of the CALLDATASIZE opcode"},"calldatacopy":{"v":3,"d":"Base fee of the CALLDATACOPY opcode"},"codesize":{"v":2,"d":"Base fee of the CODESIZE opcode"},"codecopy":{"v":3,"d":"Base fee of the CODECOPY opcode"},"gasprice":{"v":2,"d":"Base fee of the GASPRICE opcode"},"extcodesize":{"v":20,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":20,"d":"Base fee of the EXTCODECOPY opcode"},"blockhash":{"v":20,"d":"Base fee of the BLOCKHASH opcode"},"coinbase":{"v":2,"d":"Base fee of the COINBASE opcode"},"timestamp":{"v":2,"d":"Base fee of the TIMESTAMP opcode"},"number":{"v":2,"d":"Base fee of the NUMBER opcode"},"difficulty":{"v":2,"d":"Base fee of the DIFFICULTY opcode"},"gaslimit":{"v":2,"d":"Base fee of the GASLIMIT opcode"},"pop":{"v":2,"d":"Base fee of the POP opcode"},"mload":{"v":3,"d":"Base fee of the MLOAD opcode"},"mstore":{"v":3,"d":"Base fee of the MSTORE opcode"},"mstore8":{"v":3,"d":"Base fee of the MSTORE8 opcode"},"sstore":{"v":0,"d":"Base fee of the SSTORE opcode"},"jump":{"v":8,"d":"Base fee of the JUMP opcode"},"jumpi":{"v":10,"d":"Base fee of the JUMPI opcode"},"pc":{"v":2,"d":"Base fee of the PC opcode"},"msize":{"v":2,"d":"Base fee of the MSIZE opcode"},"gas":{"v":2,"d":"Base fee of the GAS opcode"},"push":{"v":3,"d":"Base fee of the PUSH opcode"},"dup":{"v":3,"d":"Base fee of the DUP opcode"},"swap":{"v":3,"d":"Base fee of the SWAP opcode"},"callcode":{"v":40,"d":"Base fee of the CALLCODE opcode"},"return":{"v":0,"d":"Base fee of the RETURN opcode"},"invalid":{"v":0,"d":"Base fee of the INVALID opcode"},"selfdestruct":{"v":0,"d":"Base fee of the SELFDESTRUCT opcode"}},"vm":{"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed"},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack"},"maxExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis"}},"pow":{"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be"},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations"},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"difficultyBombDelay":{"v":0,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        3547: function(e) {
            e.exports = JSON.parse('{"name":"homestead","comment":"Homestead hardfork with protocol and network changes","url":"https://eips.ethereum.org/EIPS/eip-606","status":"Final","gasConfig":{},"gasPrices":{"delegatecall":{"v":40,"d":"Base fee of the DELEGATECALL opcode"}},"vm":{},"pow":{}}')
        },
        3548: function(e) {
            e.exports = JSON.parse('{"name":"dao","comment":"DAO rescue hardfork","url":"https://eips.ethereum.org/EIPS/eip-779","status":"Final","gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3549: function(e) {
            e.exports = JSON.parse('{"name":"tangerineWhistle","comment":"Hardfork with gas cost changes for IO-heavy operations","url":"https://eips.ethereum.org/EIPS/eip-608","status":"Final","gasConfig":{},"gasPrices":{"sload":{"v":200,"d":"Once per SLOAD operation"},"call":{"v":700,"d":"Once per CALL operation & message call transaction"},"extcodesize":{"v":700,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":700,"d":"Base fee of the EXTCODECOPY opcode"},"balance":{"v":400,"d":"Base fee of the BALANCE opcode"},"delegatecall":{"v":700,"d":"Base fee of the DELEGATECALL opcode"},"callcode":{"v":700,"d":"Base fee of the CALLCODE opcode"},"selfdestruct":{"v":5000,"d":"Base fee of the SELFDESTRUCT opcode"}},"vm":{},"pow":{}}')
        },
        3550: function(e) {
            e.exports = JSON.parse('{"name":"spuriousDragon","comment":"HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit","url":"https://eips.ethereum.org/EIPS/eip-607","status":"Final","gasConfig":{},"gasPrices":{"expByte":{"v":50,"d":"Times ceil(log256(exponent)) for the EXP instruction"}},"vm":{"maxCodeSize":{"v":24576,"d":"Maximum length of contract code"}},"pow":{}}')
        },
        3551: function(e) {
            e.exports = JSON.parse('{"name":"byzantium","comment":"Hardfork with new precompiles, instructions and other protocol changes","url":"https://eips.ethereum.org/EIPS/eip-609","status":"Final","gasConfig":{},"gasPrices":{"modexpGquaddivisor":{"v":20,"d":"Gquaddivisor from modexp precompile for gas calculation"},"ecAdd":{"v":500,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":40000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":100000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":80000,"d":"Gas costs regarding curve pairing precompile input length"},"revert":{"v":0,"d":"Base fee of the REVERT opcode"},"staticcall":{"v":700,"d":"Base fee of the STATICCALL opcode"},"returndatasize":{"v":2,"d":"Base fee of the RETURNDATASIZE opcode"},"returndatacopy":{"v":3,"d":"Base fee of the RETURNDATACOPY opcode"}},"vm":{},"pow":{"minerReward":{"v":"3000000000000000000","d":"the amount a miner get rewarded for mining a block"},"difficultyBombDelay":{"v":3000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        3552: function(e) {
            e.exports = JSON.parse('{"name":"constantinople","comment":"Postponed hardfork including EIP-1283 (SSTORE gas metering changes)","url":"https://eips.ethereum.org/EIPS/eip-1013","status":"Final","gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":200,"d":"Once per SSTORE operation if the value doesn\'t change"},"netSstoreInitGas":{"v":20000,"d":"Once per SSTORE operation from clean zero"},"netSstoreCleanGas":{"v":5000,"d":"Once per SSTORE operation from clean non-zero"},"netSstoreDirtyGas":{"v":200,"d":"Once per SSTORE operation from dirty"},"netSstoreClearRefund":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"},"netSstoreResetRefund":{"v":4800,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"netSstoreResetClearRefund":{"v":19800,"d":"Once per SSTORE operation for resetting to the original zero value"},"shl":{"v":3,"d":"Base fee of the SHL opcode"},"shr":{"v":3,"d":"Base fee of the SHR opcode"},"sar":{"v":3,"d":"Base fee of the SAR opcode"},"extcodehash":{"v":400,"d":"Base fee of the EXTCODEHASH opcode"},"create2":{"v":32000,"d":"Base fee of the CREATE2 opcode"}},"vm":{},"pow":{"minerReward":{"v":"2000000000000000000","d":"The amount a miner gets rewarded for mining a block"},"difficultyBombDelay":{"v":5000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        3553: function(e) {
            e.exports = JSON.parse('{"name":"petersburg","comment":"Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople","url":"https://eips.ethereum.org/EIPS/eip-1716","status":"Final","gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreInitGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreCleanGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreDirtyGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreClearRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetClearRefund":{"v":null,"d":"Removed along EIP-1283"}},"vm":{},"pow":{}}')
        },
        3554: function(e) {
            e.exports = JSON.parse('{"name":"istanbul","comment":"HF targeted for December 2019 following the Constantinople/Petersburg HF","url":"https://eips.ethereum.org/EIPS/eip-1679","status":"Final","gasConfig":{},"gasPrices":{"blake2Round":{"v":1,"d":"Gas cost per round for the Blake2 F precompile"},"ecAdd":{"v":150,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":6000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":45000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":34000,"d":"Gas costs regarding curve pairing precompile input length"},"txDataNonZero":{"v":16,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"sstoreSentryGasEIP2200":{"v":2300,"d":"Minimum gas required to be present for an SSTORE call, not consumed"},"sstoreNoopGasEIP2200":{"v":800,"d":"Once per SSTORE operation if the value doesn\'t change"},"sstoreDirtyGasEIP2200":{"v":800,"d":"Once per SSTORE operation if a dirty value is changed"},"sstoreInitGasEIP2200":{"v":20000,"d":"Once per SSTORE operation from clean zero to non-zero"},"sstoreInitRefundEIP2200":{"v":19200,"d":"Once per SSTORE operation for resetting to the original zero value"},"sstoreCleanGasEIP2200":{"v":5000,"d":"Once per SSTORE operation from clean non-zero to something else"},"sstoreCleanRefundEIP2200":{"v":4200,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"sstoreClearRefundEIP2200":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"},"balance":{"v":700,"d":"Base fee of the BALANCE opcode"},"extcodehash":{"v":700,"d":"Base fee of the EXTCODEHASH opcode"},"chainid":{"v":2,"d":"Base fee of the CHAINID opcode"},"selfbalance":{"v":5,"d":"Base fee of the SELFBALANCE opcode"},"sload":{"v":800,"d":"Base fee of the SLOAD opcode"}},"vm":{},"pow":{}}')
        },
        3555: function(e) {
            e.exports = JSON.parse('{"name":"muirGlacier","comment":"HF to delay the difficulty bomb","url":"https://eips.ethereum.org/EIPS/eip-2384","status":"Final","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":9000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        3556: function(e) {
            e.exports = JSON.parse('{"name":"berlin","comment":"HF targeted for July 2020 following the Muir Glacier HF","url":"https://eips.ethereum.org/EIPS/eip-2070","status":"Final","eips":[2565,2929,2718,2930]}')
        },
        3557: function(e) {
            e.exports = JSON.parse('{"name":"london","comment":"HF targeted for July 2021 following the Berlin fork","url":"https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md","status":"Final","eips":[1559,3198,3529,3541]}')
        },
        3558: function(e) {
            e.exports = JSON.parse('{"name":"shanghai","comment":"Next feature hardfork after the merge hardfork","url":"https://github.com/ethereum/pm/issues/356","status":"Pre-Draft","eips":[]}')
        },
        3559: function(e) {
            e.exports = JSON.parse('{"name":"arrowGlacier","comment":"HF to delay the difficulty bomb","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md","status":"Final","eips":[4345],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3560: function(e) {
            e.exports = JSON.parse('{"name":"grayGlacier","comment":"Delaying the difficulty bomb to Mid September 2022","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md","status":"Draft","eips":[5133],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3561: function(e) {
            e.exports = JSON.parse('{"name":"mergeForkIdTransition","comment":"Pre-merge hardfork to fork off non-upgraded clients","url":"https://eips.ethereum.org/EIPS/eip-3675","status":"Draft","eips":[]}')
        },
        3562: function(e) {
            e.exports = JSON.parse('{"name":"merge","comment":"Hardfork to upgrade the consensus mechanism to Proof-of-Stake","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md","status":"Draft","consensus":{"type":"pos","algorithm":"casper","casper":{}},"eips":[3675,4399]}')
        },
        3563: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EIPs = void 0, t.EIPs = {
                1153: o(3564),
                1559: o(3565),
                2315: o(3566),
                2537: o(3567),
                2565: o(3568),
                2718: o(3569),
                2929: o(3570),
                2930: o(3571),
                3198: o(3572),
                3529: o(3573),
                3540: o(3574),
                3541: o(3575),
                3554: o(3576),
                3607: o(3577),
                3651: o(3578),
                3670: o(3579),
                3675: o(3580),
                3855: o(3581),
                3860: o(3582),
                4345: o(3583),
                4399: o(3584),
                5133: o(3585)
            }
        },
        3564: function(e) {
            e.exports = JSON.parse('{"name":"EIP-1153","number":1153,"comment":"Transient Storage","url":"https://eips.ethereum.org/EIPS/eip-1153","status":"Review","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{"tstore":{"v":100,"d":"Base fee of the TSTORE opcode"},"tload":{"v":100,"d":"Base fee of the TLOAD opcode"}},"vm":{},"pow":{}}')
        },
        3565: function(e) {
            e.exports = JSON.parse('{"name":"EIP-1559","number":1559,"comment":"Fee market change for ETH 1.0 chain","url":"https://eips.ethereum.org/EIPS/eip-1559","status":"Final","minimumHardfork":"berlin","requiredEIPs":[2930],"gasConfig":{"baseFeeMaxChangeDenominator":{"v":8,"d":"Maximum base fee change denominator"},"elasticityMultiplier":{"v":2,"d":"Maximum block gas target elasticity"},"initialBaseFee":{"v":1000000000,"d":"Initial base fee on first EIP1559 block"}},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3566: function(e) {
            e.exports = JSON.parse('{"name":"EIP-2315","number":2315,"comment":"Simple subroutines for the EVM","url":"https://eips.ethereum.org/EIPS/eip-2315","status":"Draft","minimumHardfork":"istanbul","gasConfig":{},"gasPrices":{"beginsub":{"v":2,"d":"Base fee of the BEGINSUB opcode"},"returnsub":{"v":5,"d":"Base fee of the RETURNSUB opcode"},"jumpsub":{"v":10,"d":"Base fee of the JUMPSUB opcode"}},"vm":{},"pow":{}}')
        },
        3567: function(e) {
            e.exports = JSON.parse('{"name":"EIP-2537","number":2537,"comment":"BLS12-381 precompiles","url":"https://eips.ethereum.org/EIPS/eip-2537","status":"Draft","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{"Bls12381G1AddGas":{"v":600,"d":"Gas cost of a single BLS12-381 G1 addition precompile-call"},"Bls12381G1MulGas":{"v":12000,"d":"Gas cost of a single BLS12-381 G1 multiplication precompile-call"},"Bls12381G2AddGas":{"v":4500,"d":"Gas cost of a single BLS12-381 G2 addition precompile-call"},"Bls12381G2MulGas":{"v":55000,"d":"Gas cost of a single BLS12-381 G2 multiplication precompile-call"},"Bls12381PairingBaseGas":{"v":115000,"d":"Base gas cost of BLS12-381 pairing check"},"Bls12381PairingPerPairGas":{"v":23000,"d":"Per-pair gas cost of BLS12-381 pairing check"},"Bls12381MapG1Gas":{"v":5500,"d":"Gas cost of BLS12-381 map field element to G1"},"Bls12381MapG2Gas":{"v":110000,"d":"Gas cost of BLS12-381 map field element to G2"},"Bls12381MultiExpGasDiscount":{"v":[[1,1200],[2,888],[3,764],[4,641],[5,594],[6,547],[7,500],[8,453],[9,438],[10,423],[11,408],[12,394],[13,379],[14,364],[15,349],[16,334],[17,330],[18,326],[19,322],[20,318],[21,314],[22,310],[23,306],[24,302],[25,298],[26,294],[27,289],[28,285],[29,281],[30,277],[31,273],[32,269],[33,268],[34,266],[35,265],[36,263],[37,262],[38,260],[39,259],[40,257],[41,256],[42,254],[43,253],[44,251],[45,250],[46,248],[47,247],[48,245],[49,244],[50,242],[51,241],[52,239],[53,238],[54,236],[55,235],[56,233],[57,232],[58,231],[59,229],[60,228],[61,226],[62,225],[63,223],[64,222],[65,221],[66,220],[67,219],[68,219],[69,218],[70,217],[71,216],[72,216],[73,215],[74,214],[75,213],[76,213],[77,212],[78,211],[79,211],[80,210],[81,209],[82,208],[83,208],[84,207],[85,206],[86,205],[87,205],[88,204],[89,203],[90,202],[91,202],[92,201],[93,200],[94,199],[95,199],[96,198],[97,197],[98,196],[99,196],[100,195],[101,194],[102,193],[103,193],[104,192],[105,191],[106,191],[107,190],[108,189],[109,188],[110,188],[111,187],[112,186],[113,185],[114,185],[115,184],[116,183],[117,182],[118,182],[119,181],[120,180],[121,179],[122,179],[123,178],[124,177],[125,176],[126,176],[127,175],[128,174]],"d":"Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair"}},"vm":{},"pow":{}}')
        },
        3568: function(e) {
            e.exports = JSON.parse('{"name":"EIP-2565","number":2565,"comment":"ModExp gas cost","url":"https://eips.ethereum.org/EIPS/eip-2565","status":"Final","minimumHardfork":"byzantium","gasConfig":{},"gasPrices":{"modexpGquaddivisor":{"v":3,"d":"Gquaddivisor from modexp precompile for gas calculation"}},"vm":{},"pow":{}}')
        },
        3569: function(e) {
            e.exports = JSON.parse('{"name":"EIP-2718","comment":"Typed Transaction Envelope","url":"https://eips.ethereum.org/EIPS/eip-2718","status":"Final","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3570: function(e) {
            e.exports = JSON.parse('{"name":"EIP-2929","comment":"Gas cost increases for state access opcodes","url":"https://eips.ethereum.org/EIPS/eip-2929","status":"Final","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{"coldsload":{"v":2100,"d":"Gas cost of the first read of storage from a given location (per transaction)"},"coldaccountaccess":{"v":2600,"d":"Gas cost of the first read of a given address (per transaction)"},"warmstorageread":{"v":100,"d":"Gas cost of reading storage locations which have already loaded \'cold\'"},"sstoreCleanGasEIP2200":{"v":2900,"d":"Once per SSTORE operation from clean non-zero to something else"},"sstoreNoopGasEIP2200":{"v":100,"d":"Once per SSTORE operation if the value doesn\'t change"},"sstoreDirtyGasEIP2200":{"v":100,"d":"Once per SSTORE operation if a dirty value is changed"},"sstoreInitRefundEIP2200":{"v":19900,"d":"Once per SSTORE operation for resetting to the original zero value"},"sstoreCleanRefundEIP2200":{"v":4900,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"call":{"v":0,"d":"Base fee of the CALL opcode"},"callcode":{"v":0,"d":"Base fee of the CALLCODE opcode"},"delegatecall":{"v":0,"d":"Base fee of the DELEGATECALL opcode"},"staticcall":{"v":0,"d":"Base fee of the STATICCALL opcode"},"balance":{"v":0,"d":"Base fee of the BALANCE opcode"},"extcodesize":{"v":0,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":0,"d":"Base fee of the EXTCODECOPY opcode"},"extcodehash":{"v":0,"d":"Base fee of the EXTCODEHASH opcode"},"sload":{"v":0,"d":"Base fee of the SLOAD opcode"},"sstore":{"v":0,"d":"Base fee of the SSTORE opcode"}},"vm":{},"pow":{}}')
        },
        3571: function(e) {
            e.exports = JSON.parse('{"name":"EIP-2930","comment":"Optional access lists","url":"https://eips.ethereum.org/EIPS/eip-2930","status":"Final","minimumHardfork":"istanbul","requiredEIPs":[2718,2929],"gasConfig":{},"gasPrices":{"accessListStorageKeyCost":{"v":1900,"d":"Gas cost per storage key in an Access List transaction"},"accessListAddressCost":{"v":2400,"d":"Gas cost per storage key in an Access List transaction"}},"vm":{},"pow":{}}')
        },
        3572: function(e) {
            e.exports = JSON.parse('{"name":"EIP-3198","number":3198,"comment":"BASEFEE opcode","url":"https://eips.ethereum.org/EIPS/eip-3198","status":"Final","minimumHardfork":"london","gasConfig":{},"gasPrices":{"basefee":{"v":2,"d":"Gas cost of the BASEFEE opcode"}},"vm":{},"pow":{}}')
        },
        3573: function(e) {
            e.exports = JSON.parse('{"name":"EIP-3529","comment":"Reduction in refunds","url":"https://eips.ethereum.org/EIPS/eip-3529","status":"Final","minimumHardfork":"berlin","requiredEIPs":[2929],"gasConfig":{"maxRefundQuotient":{"v":5,"d":"Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"}},"gasPrices":{"selfdestructRefund":{"v":0,"d":"Refunded following a selfdestruct operation"},"sstoreClearRefundEIP2200":{"v":4800,"d":"Once per SSTORE operation for clearing an originally existing storage slot"}},"vm":{},"pow":{}}')
        },
        3574: function(e) {
            e.exports = JSON.parse('{"name":"EIP-3540","number":3540,"comment":"EVM Object Format (EOF) v1","url":"https://eips.ethereum.org/EIPS/eip-3540","status":"Review","minimumHardfork":"london","requiredEIPs":[3541],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3575: function(e) {
            e.exports = JSON.parse('{"name":"EIP-3541","comment":"Reject new contracts starting with the 0xEF byte","url":"https://eips.ethereum.org/EIPS/eip-3541","status":"Final","minimumHardfork":"berlin","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3576: function(e) {
            e.exports = JSON.parse('{"name":"EIP-3554","comment":"Reduction in refunds","url":"Difficulty Bomb Delay to December 1st 2021","status":"Final","minimumHardfork":"muirGlacier","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":9500000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        3577: function(e) {
            e.exports = JSON.parse('{"name":"EIP-3607","number":3607,"comment":"Reject transactions from senders with deployed code","url":"https://eips.ethereum.org/EIPS/eip-3607","status":"Final","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3578: function(e) {
            e.exports = JSON.parse('{"name":"EIP-3651","number":3198,"comment":"Warm COINBASE","url":"https://eips.ethereum.org/EIPS/eip-3651","status":"Review","minimumHardfork":"london","requiredEIPs":[2929],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3579: function(e) {
            e.exports = JSON.parse('{"name":"EIP-3670","number":3670,"comment":"EOF - Code Validation","url":"https://eips.ethereum.org/EIPS/eip-3670","status":"Review","minimumHardfork":"london","requiredEIPs":[3540],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3580: function(e) {
            e.exports = JSON.parse('{"name":"EIP-3675","number":3675,"comment":"Upgrade consensus to Proof-of-Stake","url":"https://eips.ethereum.org/EIPS/eip-3675","status":"Review","minimumHardfork":"london","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3581: function(e) {
            e.exports = JSON.parse('{"name":"EIP-3855","number":3855,"comment":"PUSH0 instruction","url":"https://eips.ethereum.org/EIPS/eip-3855","status":"Review","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{"push0":{"v":2,"d":"Base fee of the PUSH0 opcode"}},"vm":{},"pow":{}}')
        },
        3582: function(e) {
            e.exports = JSON.parse('{"name":"EIP-3860","number":3860,"comment":"Limit and meter initcode","url":"https://eips.ethereum.org/EIPS/eip-3860","status":"Review","minimumHardfork":"spuriousDragon","requiredEIPs":[],"gasConfig":{},"gasPrices":{"initCodeWordCost":{"v":2,"d":"Gas to pay for each word (32 bytes) of initcode when creating a contract"}},"vm":{"maxInitCodeSize":{"v":49152,"d":"Maximum length of initialization code when creating a contract"}},"pow":{}}')
        },
        3583: function(e) {
            e.exports = JSON.parse('{"name":"EIP-4345","number":4345,"comment":"Difficulty Bomb Delay to June 2022","url":"https://eips.ethereum.org/EIPS/eip-4345","status":"Final","minimumHardfork":"london","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":10700000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        3584: function(e) {
            e.exports = JSON.parse('{"name":"EIP-4399","number":4399,"comment":"Supplant DIFFICULTY opcode with PREVRANDAO","url":"https://eips.ethereum.org/EIPS/eip-4399","status":"Review","minimumHardfork":"london","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        3585: function(e) {
            e.exports = JSON.parse('{"name":"EIP-5133","number":5133,"comment":"Delaying Difficulty Bomb to mid-September 2022","url":"https://eips.ethereum.org/EIPS/eip-5133","status":"Draft","minimumHardfork":"grayGlacier","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":11400000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        3587: function(e) {
            e.exports = JSON.parse('{"0x0000000000000000000000000000000000000000":"0x1","0x0000000000000000000000000000000000000001":"0x1","0x0000000000000000000000000000000000000002":"0x1","0x0000000000000000000000000000000000000003":"0x1","0x0000000000000000000000000000000000000004":"0x1","0x0000000000000000000000000000000000000005":"0x1","0x0000000000000000000000000000000000000006":"0x1","0x0000000000000000000000000000000000000007":"0x1","0x0000000000000000000000000000000000000008":"0x1","0x0000000000000000000000000000000000000009":"0x1","0x000000000000000000000000000000000000000a":"0x0","0x000000000000000000000000000000000000000b":"0x0","0x000000000000000000000000000000000000000c":"0x0","0x000000000000000000000000000000000000000d":"0x0","0x000000000000000000000000000000000000000e":"0x0","0x000000000000000000000000000000000000000f":"0x0","0x0000000000000000000000000000000000000010":"0x0","0x0000000000000000000000000000000000000011":"0x0","0x0000000000000000000000000000000000000012":"0x0","0x0000000000000000000000000000000000000013":"0x0","0x0000000000000000000000000000000000000014":"0x0","0x0000000000000000000000000000000000000015":"0x0","0x0000000000000000000000000000000000000016":"0x0","0x0000000000000000000000000000000000000017":"0x0","0x0000000000000000000000000000000000000018":"0x0","0x0000000000000000000000000000000000000019":"0x0","0x000000000000000000000000000000000000001a":"0x0","0x000000000000000000000000000000000000001b":"0x0","0x000000000000000000000000000000000000001c":"0x0","0x000000000000000000000000000000000000001d":"0x0","0x000000000000000000000000000000000000001e":"0x0","0x000000000000000000000000000000000000001f":"0x0","0x0000000000000000000000000000000000000020":"0x0","0x0000000000000000000000000000000000000021":"0x0","0x0000000000000000000000000000000000000022":"0x0","0x0000000000000000000000000000000000000023":"0x0","0x0000000000000000000000000000000000000024":"0x0","0x0000000000000000000000000000000000000025":"0x0","0x0000000000000000000000000000000000000026":"0x0","0x0000000000000000000000000000000000000027":"0x0","0x0000000000000000000000000000000000000028":"0x0","0x0000000000000000000000000000000000000029":"0x0","0x000000000000000000000000000000000000002a":"0x0","0x000000000000000000000000000000000000002b":"0x0","0x000000000000000000000000000000000000002c":"0x0","0x000000000000000000000000000000000000002d":"0x0","0x000000000000000000000000000000000000002e":"0x0","0x000000000000000000000000000000000000002f":"0x0","0x0000000000000000000000000000000000000030":"0x0","0x0000000000000000000000000000000000000031":"0x0","0x0000000000000000000000000000000000000032":"0x0","0x0000000000000000000000000000000000000033":"0x0","0x0000000000000000000000000000000000000034":"0x0","0x0000000000000000000000000000000000000035":"0x0","0x0000000000000000000000000000000000000036":"0x0","0x0000000000000000000000000000000000000037":"0x0","0x0000000000000000000000000000000000000038":"0x0","0x0000000000000000000000000000000000000039":"0x0","0x000000000000000000000000000000000000003a":"0x0","0x000000000000000000000000000000000000003b":"0x0","0x000000000000000000000000000000000000003c":"0x0","0x000000000000000000000000000000000000003d":"0x0","0x000000000000000000000000000000000000003e":"0x0","0x000000000000000000000000000000000000003f":"0x0","0x0000000000000000000000000000000000000040":"0x0","0x0000000000000000000000000000000000000041":"0x0","0x0000000000000000000000000000000000000042":"0x0","0x0000000000000000000000000000000000000043":"0x0","0x0000000000000000000000000000000000000044":"0x0","0x0000000000000000000000000000000000000045":"0x0","0x0000000000000000000000000000000000000046":"0x0","0x0000000000000000000000000000000000000047":"0x0","0x0000000000000000000000000000000000000048":"0x0","0x0000000000000000000000000000000000000049":"0x0","0x000000000000000000000000000000000000004a":"0x0","0x000000000000000000000000000000000000004b":"0x0","0x000000000000000000000000000000000000004c":"0x0","0x000000000000000000000000000000000000004d":"0x0","0x000000000000000000000000000000000000004e":"0x0","0x000000000000000000000000000000000000004f":"0x0","0x0000000000000000000000000000000000000050":"0x0","0x0000000000000000000000000000000000000051":"0x0","0x0000000000000000000000000000000000000052":"0x0","0x0000000000000000000000000000000000000053":"0x0","0x0000000000000000000000000000000000000054":"0x0","0x0000000000000000000000000000000000000055":"0x0","0x0000000000000000000000000000000000000056":"0x0","0x0000000000000000000000000000000000000057":"0x0","0x0000000000000000000000000000000000000058":"0x0","0x0000000000000000000000000000000000000059":"0x0","0x000000000000000000000000000000000000005a":"0x0","0x000000000000000000000000000000000000005b":"0x0","0x000000000000000000000000000000000000005c":"0x0","0x000000000000000000000000000000000000005d":"0x0","0x000000000000000000000000000000000000005e":"0x0","0x000000000000000000000000000000000000005f":"0x0","0x0000000000000000000000000000000000000060":"0x0","0x0000000000000000000000000000000000000061":"0x0","0x0000000000000000000000000000000000000062":"0x0","0x0000000000000000000000000000000000000063":"0x0","0x0000000000000000000000000000000000000064":"0x0","0x0000000000000000000000000000000000000065":"0x0","0x0000000000000000000000000000000000000066":"0x0","0x0000000000000000000000000000000000000067":"0x0","0x0000000000000000000000000000000000000068":"0x0","0x0000000000000000000000000000000000000069":"0x0","0x000000000000000000000000000000000000006a":"0x0","0x000000000000000000000000000000000000006b":"0x0","0x000000000000000000000000000000000000006c":"0x0","0x000000000000000000000000000000000000006d":"0x0","0x000000000000000000000000000000000000006e":"0x0","0x000000000000000000000000000000000000006f":"0x0","0x0000000000000000000000000000000000000070":"0x0","0x0000000000000000000000000000000000000071":"0x0","0x0000000000000000000000000000000000000072":"0x0","0x0000000000000000000000000000000000000073":"0x0","0x0000000000000000000000000000000000000074":"0x0","0x0000000000000000000000000000000000000075":"0x0","0x0000000000000000000000000000000000000076":"0x0","0x0000000000000000000000000000000000000077":"0x0","0x0000000000000000000000000000000000000078":"0x0","0x0000000000000000000000000000000000000079":"0x0","0x000000000000000000000000000000000000007a":"0x0","0x000000000000000000000000000000000000007b":"0x0","0x000000000000000000000000000000000000007c":"0x0","0x000000000000000000000000000000000000007d":"0x0","0x000000000000000000000000000000000000007e":"0x0","0x000000000000000000000000000000000000007f":"0x0","0x0000000000000000000000000000000000000080":"0x0","0x0000000000000000000000000000000000000081":"0x0","0x0000000000000000000000000000000000000082":"0x0","0x0000000000000000000000000000000000000083":"0x0","0x0000000000000000000000000000000000000084":"0x0","0x0000000000000000000000000000000000000085":"0x0","0x0000000000000000000000000000000000000086":"0x0","0x0000000000000000000000000000000000000087":"0x0","0x0000000000000000000000000000000000000088":"0x0","0x0000000000000000000000000000000000000089":"0x0","0x000000000000000000000000000000000000008a":"0x0","0x000000000000000000000000000000000000008b":"0x0","0x000000000000000000000000000000000000008c":"0x0","0x000000000000000000000000000000000000008d":"0x0","0x000000000000000000000000000000000000008e":"0x0","0x000000000000000000000000000000000000008f":"0x0","0x0000000000000000000000000000000000000090":"0x0","0x0000000000000000000000000000000000000091":"0x0","0x0000000000000000000000000000000000000092":"0x0","0x0000000000000000000000000000000000000093":"0x0","0x0000000000000000000000000000000000000094":"0x0","0x0000000000000000000000000000000000000095":"0x0","0x0000000000000000000000000000000000000096":"0x0","0x0000000000000000000000000000000000000097":"0x0","0x0000000000000000000000000000000000000098":"0x0","0x0000000000000000000000000000000000000099":"0x0","0x000000000000000000000000000000000000009a":"0x0","0x000000000000000000000000000000000000009b":"0x0","0x000000000000000000000000000000000000009c":"0x0","0x000000000000000000000000000000000000009d":"0x0","0x000000000000000000000000000000000000009e":"0x0","0x000000000000000000000000000000000000009f":"0x0","0x00000000000000000000000000000000000000a0":"0x0","0x00000000000000000000000000000000000000a1":"0x0","0x00000000000000000000000000000000000000a2":"0x0","0x00000000000000000000000000000000000000a3":"0x0","0x00000000000000000000000000000000000000a4":"0x0","0x00000000000000000000000000000000000000a5":"0x0","0x00000000000000000000000000000000000000a6":"0x0","0x00000000000000000000000000000000000000a7":"0x0","0x00000000000000000000000000000000000000a8":"0x0","0x00000000000000000000000000000000000000a9":"0x0","0x00000000000000000000000000000000000000aa":"0x0","0x00000000000000000000000000000000000000ab":"0x0","0x00000000000000000000000000000000000000ac":"0x0","0x00000000000000000000000000000000000000ad":"0x0","0x00000000000000000000000000000000000000ae":"0x0","0x00000000000000000000000000000000000000af":"0x0","0x00000000000000000000000000000000000000b0":"0x0","0x00000000000000000000000000000000000000b1":"0x0","0x00000000000000000000000000000000000000b2":"0x0","0x00000000000000000000000000000000000000b3":"0x0","0x00000000000000000000000000000000000000b4":"0x0","0x00000000000000000000000000000000000000b5":"0x0","0x00000000000000000000000000000000000000b6":"0x0","0x00000000000000000000000000000000000000b7":"0x0","0x00000000000000000000000000000000000000b8":"0x0","0x00000000000000000000000000000000000000b9":"0x0","0x00000000000000000000000000000000000000ba":"0x0","0x00000000000000000000000000000000000000bb":"0x0","0x00000000000000000000000000000000000000bc":"0x0","0x00000000000000000000000000000000000000bd":"0x0","0x00000000000000000000000000000000000000be":"0x0","0x00000000000000000000000000000000000000bf":"0x0","0x00000000000000000000000000000000000000c0":"0x0","0x00000000000000000000000000000000000000c1":"0x0","0x00000000000000000000000000000000000000c2":"0x0","0x00000000000000000000000000000000000000c3":"0x0","0x00000000000000000000000000000000000000c4":"0x0","0x00000000000000000000000000000000000000c5":"0x0","0x00000000000000000000000000000000000000c6":"0x0","0x00000000000000000000000000000000000000c7":"0x0","0x00000000000000000000000000000000000000c8":"0x0","0x00000000000000000000000000000000000000c9":"0x0","0x00000000000000000000000000000000000000ca":"0x0","0x00000000000000000000000000000000000000cb":"0x0","0x00000000000000000000000000000000000000cc":"0x0","0x00000000000000000000000000000000000000cd":"0x0","0x00000000000000000000000000000000000000ce":"0x0","0x00000000000000000000000000000000000000cf":"0x0","0x00000000000000000000000000000000000000d0":"0x0","0x00000000000000000000000000000000000000d1":"0x0","0x00000000000000000000000000000000000000d2":"0x0","0x00000000000000000000000000000000000000d3":"0x0","0x00000000000000000000000000000000000000d4":"0x0","0x00000000000000000000000000000000000000d5":"0x0","0x00000000000000000000000000000000000000d6":"0x0","0x00000000000000000000000000000000000000d7":"0x0","0x00000000000000000000000000000000000000d8":"0x0","0x00000000000000000000000000000000000000d9":"0x0","0x00000000000000000000000000000000000000da":"0x0","0x00000000000000000000000000000000000000db":"0x0","0x00000000000000000000000000000000000000dc":"0x0","0x00000000000000000000000000000000000000dd":"0x0","0x00000000000000000000000000000000000000de":"0x0","0x00000000000000000000000000000000000000df":"0x0","0x00000000000000000000000000000000000000e0":"0x0","0x00000000000000000000000000000000000000e1":"0x0","0x00000000000000000000000000000000000000e2":"0x0","0x00000000000000000000000000000000000000e3":"0x0","0x00000000000000000000000000000000000000e4":"0x0","0x00000000000000000000000000000000000000e5":"0x0","0x00000000000000000000000000000000000000e6":"0x0","0x00000000000000000000000000000000000000e7":"0x0","0x00000000000000000000000000000000000000e8":"0x0","0x00000000000000000000000000000000000000e9":"0x0","0x00000000000000000000000000000000000000ea":"0x0","0x00000000000000000000000000000000000000eb":"0x0","0x00000000000000000000000000000000000000ec":"0x0","0x00000000000000000000000000000000000000ed":"0x0","0x00000000000000000000000000000000000000ee":"0x0","0x00000000000000000000000000000000000000ef":"0x0","0x00000000000000000000000000000000000000f0":"0x0","0x00000000000000000000000000000000000000f1":"0x0","0x00000000000000000000000000000000000000f2":"0x0","0x00000000000000000000000000000000000000f3":"0x0","0x00000000000000000000000000000000000000f4":"0x0","0x00000000000000000000000000000000000000f5":"0x0","0x00000000000000000000000000000000000000f6":"0x0","0x00000000000000000000000000000000000000f7":"0x0","0x00000000000000000000000000000000000000f8":"0x0","0x00000000000000000000000000000000000000f9":"0x0","0x00000000000000000000000000000000000000fa":"0x0","0x00000000000000000000000000000000000000fb":"0x0","0x00000000000000000000000000000000000000fc":"0x0","0x00000000000000000000000000000000000000fd":"0x0","0x00000000000000000000000000000000000000fe":"0x0","0x00000000000000000000000000000000000000ff":"0x0","0x874b54a8bd152966d63f706bae1ffeb0411921e5":"0xc9f2c9cd04674edea40000000"}')
        },
        3588: function(e) {
            e.exports = JSON.parse('{"0x0000000000000000000000000000000000000000":"0x1","0x0000000000000000000000000000000000000001":"0x1","0x0000000000000000000000000000000000000002":"0x1","0x0000000000000000000000000000000000000003":"0x1","0x0000000000000000000000000000000000000004":"0x1","0x0000000000000000000000000000000000000005":"0x1","0x0000000000000000000000000000000000000006":"0x1","0x0000000000000000000000000000000000000007":"0x1","0x0000000000000000000000000000000000000008":"0x1","0x0000000000000000000000000000000000000009":"0x1","0x000000000000000000000000000000000000000a":"0x1","0x000000000000000000000000000000000000000b":"0x1","0x000000000000000000000000000000000000000c":"0x1","0x000000000000000000000000000000000000000d":"0x1","0x000000000000000000000000000000000000000e":"0x1","0x000000000000000000000000000000000000000f":"0x1","0x0000000000000000000000000000000000000010":"0x1","0x0000000000000000000000000000000000000011":"0x1","0x0000000000000000000000000000000000000012":"0x1","0x0000000000000000000000000000000000000013":"0x1","0x0000000000000000000000000000000000000014":"0x1","0x0000000000000000000000000000000000000015":"0x1","0x0000000000000000000000000000000000000016":"0x1","0x0000000000000000000000000000000000000017":"0x1","0x0000000000000000000000000000000000000018":"0x1","0x0000000000000000000000000000000000000019":"0x1","0x000000000000000000000000000000000000001a":"0x1","0x000000000000000000000000000000000000001b":"0x1","0x000000000000000000000000000000000000001c":"0x1","0x000000000000000000000000000000000000001d":"0x1","0x000000000000000000000000000000000000001e":"0x1","0x000000000000000000000000000000000000001f":"0x1","0x0000000000000000000000000000000000000020":"0x1","0x0000000000000000000000000000000000000021":"0x1","0x0000000000000000000000000000000000000022":"0x1","0x0000000000000000000000000000000000000023":"0x1","0x0000000000000000000000000000000000000024":"0x1","0x0000000000000000000000000000000000000025":"0x1","0x0000000000000000000000000000000000000026":"0x1","0x0000000000000000000000000000000000000027":"0x1","0x0000000000000000000000000000000000000028":"0x1","0x0000000000000000000000000000000000000029":"0x1","0x000000000000000000000000000000000000002a":"0x1","0x000000000000000000000000000000000000002b":"0x1","0x000000000000000000000000000000000000002c":"0x1","0x000000000000000000000000000000000000002d":"0x1","0x000000000000000000000000000000000000002e":"0x1","0x000000000000000000000000000000000000002f":"0x1","0x0000000000000000000000000000000000000030":"0x1","0x0000000000000000000000000000000000000031":"0x1","0x0000000000000000000000000000000000000032":"0x1","0x0000000000000000000000000000000000000033":"0x1","0x0000000000000000000000000000000000000034":"0x1","0x0000000000000000000000000000000000000035":"0x1","0x0000000000000000000000000000000000000036":"0x1","0x0000000000000000000000000000000000000037":"0x1","0x0000000000000000000000000000000000000038":"0x1","0x0000000000000000000000000000000000000039":"0x1","0x000000000000000000000000000000000000003a":"0x1","0x000000000000000000000000000000000000003b":"0x1","0x000000000000000000000000000000000000003c":"0x1","0x000000000000000000000000000000000000003d":"0x1","0x000000000000000000000000000000000000003e":"0x1","0x000000000000000000000000000000000000003f":"0x1","0x0000000000000000000000000000000000000040":"0x1","0x0000000000000000000000000000000000000041":"0x1","0x0000000000000000000000000000000000000042":"0x1","0x0000000000000000000000000000000000000043":"0x1","0x0000000000000000000000000000000000000044":"0x1","0x0000000000000000000000000000000000000045":"0x1","0x0000000000000000000000000000000000000046":"0x1","0x0000000000000000000000000000000000000047":"0x1","0x0000000000000000000000000000000000000048":"0x1","0x0000000000000000000000000000000000000049":"0x1","0x000000000000000000000000000000000000004a":"0x1","0x000000000000000000000000000000000000004b":"0x1","0x000000000000000000000000000000000000004c":"0x1","0x000000000000000000000000000000000000004d":"0x1","0x000000000000000000000000000000000000004e":"0x1","0x000000000000000000000000000000000000004f":"0x1","0x0000000000000000000000000000000000000050":"0x1","0x0000000000000000000000000000000000000051":"0x1","0x0000000000000000000000000000000000000052":"0x1","0x0000000000000000000000000000000000000053":"0x1","0x0000000000000000000000000000000000000054":"0x1","0x0000000000000000000000000000000000000055":"0x1","0x0000000000000000000000000000000000000056":"0x1","0x0000000000000000000000000000000000000057":"0x1","0x0000000000000000000000000000000000000058":"0x1","0x0000000000000000000000000000000000000059":"0x1","0x000000000000000000000000000000000000005a":"0x1","0x000000000000000000000000000000000000005b":"0x1","0x000000000000000000000000000000000000005c":"0x1","0x000000000000000000000000000000000000005d":"0x1","0x000000000000000000000000000000000000005e":"0x1","0x000000000000000000000000000000000000005f":"0x1","0x0000000000000000000000000000000000000060":"0x1","0x0000000000000000000000000000000000000061":"0x1","0x0000000000000000000000000000000000000062":"0x1","0x0000000000000000000000000000000000000063":"0x1","0x0000000000000000000000000000000000000064":"0x1","0x0000000000000000000000000000000000000065":"0x1","0x0000000000000000000000000000000000000066":"0x1","0x0000000000000000000000000000000000000067":"0x1","0x0000000000000000000000000000000000000068":"0x1","0x0000000000000000000000000000000000000069":"0x1","0x000000000000000000000000000000000000006a":"0x1","0x000000000000000000000000000000000000006b":"0x1","0x000000000000000000000000000000000000006c":"0x1","0x000000000000000000000000000000000000006d":"0x1","0x000000000000000000000000000000000000006e":"0x1","0x000000000000000000000000000000000000006f":"0x1","0x0000000000000000000000000000000000000070":"0x1","0x0000000000000000000000000000000000000071":"0x1","0x0000000000000000000000000000000000000072":"0x1","0x0000000000000000000000000000000000000073":"0x1","0x0000000000000000000000000000000000000074":"0x1","0x0000000000000000000000000000000000000075":"0x1","0x0000000000000000000000000000000000000076":"0x1","0x0000000000000000000000000000000000000077":"0x1","0x0000000000000000000000000000000000000078":"0x1","0x0000000000000000000000000000000000000079":"0x1","0x000000000000000000000000000000000000007a":"0x1","0x000000000000000000000000000000000000007b":"0x1","0x000000000000000000000000000000000000007c":"0x1","0x000000000000000000000000000000000000007d":"0x1","0x000000000000000000000000000000000000007e":"0x1","0x000000000000000000000000000000000000007f":"0x1","0x0000000000000000000000000000000000000080":"0x1","0x0000000000000000000000000000000000000081":"0x1","0x0000000000000000000000000000000000000082":"0x1","0x0000000000000000000000000000000000000083":"0x1","0x0000000000000000000000000000000000000084":"0x1","0x0000000000000000000000000000000000000085":"0x1","0x0000000000000000000000000000000000000086":"0x1","0x0000000000000000000000000000000000000087":"0x1","0x0000000000000000000000000000000000000088":"0x1","0x0000000000000000000000000000000000000089":"0x1","0x000000000000000000000000000000000000008a":"0x1","0x000000000000000000000000000000000000008b":"0x1","0x000000000000000000000000000000000000008c":"0x1","0x000000000000000000000000000000000000008d":"0x1","0x000000000000000000000000000000000000008e":"0x1","0x000000000000000000000000000000000000008f":"0x1","0x0000000000000000000000000000000000000090":"0x1","0x0000000000000000000000000000000000000091":"0x1","0x0000000000000000000000000000000000000092":"0x1","0x0000000000000000000000000000000000000093":"0x1","0x0000000000000000000000000000000000000094":"0x1","0x0000000000000000000000000000000000000095":"0x1","0x0000000000000000000000000000000000000096":"0x1","0x0000000000000000000000000000000000000097":"0x1","0x0000000000000000000000000000000000000098":"0x1","0x0000000000000000000000000000000000000099":"0x1","0x000000000000000000000000000000000000009a":"0x1","0x000000000000000000000000000000000000009b":"0x1","0x000000000000000000000000000000000000009c":"0x1","0x000000000000000000000000000000000000009d":"0x1","0x000000000000000000000000000000000000009e":"0x1","0x000000000000000000000000000000000000009f":"0x1","0x00000000000000000000000000000000000000a0":"0x1","0x00000000000000000000000000000000000000a1":"0x1","0x00000000000000000000000000000000000000a2":"0x1","0x00000000000000000000000000000000000000a3":"0x1","0x00000000000000000000000000000000000000a4":"0x1","0x00000000000000000000000000000000000000a5":"0x1","0x00000000000000000000000000000000000000a6":"0x1","0x00000000000000000000000000000000000000a7":"0x1","0x00000000000000000000000000000000000000a8":"0x1","0x00000000000000000000000000000000000000a9":"0x1","0x00000000000000000000000000000000000000aa":"0x1","0x00000000000000000000000000000000000000ab":"0x1","0x00000000000000000000000000000000000000ac":"0x1","0x00000000000000000000000000000000000000ad":"0x1","0x00000000000000000000000000000000000000ae":"0x1","0x00000000000000000000000000000000000000af":"0x1","0x00000000000000000000000000000000000000b0":"0x1","0x00000000000000000000000000000000000000b1":"0x1","0x00000000000000000000000000000000000000b2":"0x1","0x00000000000000000000000000000000000000b3":"0x1","0x00000000000000000000000000000000000000b4":"0x1","0x00000000000000000000000000000000000000b5":"0x1","0x00000000000000000000000000000000000000b6":"0x1","0x00000000000000000000000000000000000000b7":"0x1","0x00000000000000000000000000000000000000b8":"0x1","0x00000000000000000000000000000000000000b9":"0x1","0x00000000000000000000000000000000000000ba":"0x1","0x00000000000000000000000000000000000000bb":"0x1","0x00000000000000000000000000000000000000bc":"0x1","0x00000000000000000000000000000000000000bd":"0x1","0x00000000000000000000000000000000000000be":"0x1","0x00000000000000000000000000000000000000bf":"0x1","0x00000000000000000000000000000000000000c0":"0x1","0x00000000000000000000000000000000000000c1":"0x1","0x00000000000000000000000000000000000000c2":"0x1","0x00000000000000000000000000000000000000c3":"0x1","0x00000000000000000000000000000000000000c4":"0x1","0x00000000000000000000000000000000000000c5":"0x1","0x00000000000000000000000000000000000000c6":"0x1","0x00000000000000000000000000000000000000c7":"0x1","0x00000000000000000000000000000000000000c8":"0x1","0x00000000000000000000000000000000000000c9":"0x1","0x00000000000000000000000000000000000000ca":"0x1","0x00000000000000000000000000000000000000cb":"0x1","0x00000000000000000000000000000000000000cc":"0x1","0x00000000000000000000000000000000000000cd":"0x1","0x00000000000000000000000000000000000000ce":"0x1","0x00000000000000000000000000000000000000cf":"0x1","0x00000000000000000000000000000000000000d0":"0x1","0x00000000000000000000000000000000000000d1":"0x1","0x00000000000000000000000000000000000000d2":"0x1","0x00000000000000000000000000000000000000d3":"0x1","0x00000000000000000000000000000000000000d4":"0x1","0x00000000000000000000000000000000000000d5":"0x1","0x00000000000000000000000000000000000000d6":"0x1","0x00000000000000000000000000000000000000d7":"0x1","0x00000000000000000000000000000000000000d8":"0x1","0x00000000000000000000000000000000000000d9":"0x1","0x00000000000000000000000000000000000000da":"0x1","0x00000000000000000000000000000000000000db":"0x1","0x00000000000000000000000000000000000000dc":"0x1","0x00000000000000000000000000000000000000dd":"0x1","0x00000000000000000000000000000000000000de":"0x1","0x00000000000000000000000000000000000000df":"0x1","0x00000000000000000000000000000000000000e0":"0x1","0x00000000000000000000000000000000000000e1":"0x1","0x00000000000000000000000000000000000000e2":"0x1","0x00000000000000000000000000000000000000e3":"0x1","0x00000000000000000000000000000000000000e4":"0x1","0x00000000000000000000000000000000000000e5":"0x1","0x00000000000000000000000000000000000000e6":"0x1","0x00000000000000000000000000000000000000e7":"0x1","0x00000000000000000000000000000000000000e8":"0x1","0x00000000000000000000000000000000000000e9":"0x1","0x00000000000000000000000000000000000000ea":"0x1","0x00000000000000000000000000000000000000eb":"0x1","0x00000000000000000000000000000000000000ec":"0x1","0x00000000000000000000000000000000000000ed":"0x1","0x00000000000000000000000000000000000000ee":"0x1","0x00000000000000000000000000000000000000ef":"0x1","0x00000000000000000000000000000000000000f0":"0x1","0x00000000000000000000000000000000000000f1":"0x1","0x00000000000000000000000000000000000000f2":"0x1","0x00000000000000000000000000000000000000f3":"0x1","0x00000000000000000000000000000000000000f4":"0x1","0x00000000000000000000000000000000000000f5":"0x1","0x00000000000000000000000000000000000000f6":"0x1","0x00000000000000000000000000000000000000f7":"0x1","0x00000000000000000000000000000000000000f8":"0x1","0x00000000000000000000000000000000000000f9":"0x1","0x00000000000000000000000000000000000000fa":"0x1","0x00000000000000000000000000000000000000fb":"0x1","0x00000000000000000000000000000000000000fc":"0x1","0x00000000000000000000000000000000000000fd":"0x1","0x00000000000000000000000000000000000000fe":"0x1","0x00000000000000000000000000000000000000ff":"0x1","0x31b98d14007bdee637298086988a0bbd31184523":"0x200000000000000000000000000000000000000000000000000000000000000"}')
        },
        3589: function(e) {
            e.exports = JSON.parse('{"0x0000000000000000000000000000000000000001":"0x1","0x0000000000000000000000000000000000000002":"0x1","0x0000000000000000000000000000000000000003":"0x1","0x0000000000000000000000000000000000000004":"0x1","0x00521965e7bd230323c423d96c657db5b79d099f":"0x100000000000000000000000000000000000000000000000000"}')
        },
        3590: function(e) {
            e.exports = JSON.parse('{"0x0000000000000000000000000000000000000000":"0x1","0x0000000000000000000000000000000000000001":"0x1","0x0000000000000000000000000000000000000002":"0x1","0x0000000000000000000000000000000000000003":"0x1","0x0000000000000000000000000000000000000004":"0x1","0x0000000000000000000000000000000000000005":"0x1","0x0000000000000000000000000000000000000006":"0x1","0x0000000000000000000000000000000000000007":"0x1","0x0000000000000000000000000000000000000008":"0x1","0x0000000000000000000000000000000000000009":"0x1","0x000000000000000000000000000000000000000a":"0x1","0x000000000000000000000000000000000000000b":"0x1","0x000000000000000000000000000000000000000c":"0x1","0x000000000000000000000000000000000000000d":"0x1","0x000000000000000000000000000000000000000e":"0x1","0x000000000000000000000000000000000000000f":"0x1","0x0000000000000000000000000000000000000010":"0x1","0x0000000000000000000000000000000000000011":"0x1","0x0000000000000000000000000000000000000012":"0x1","0x0000000000000000000000000000000000000013":"0x1","0x0000000000000000000000000000000000000014":"0x1","0x0000000000000000000000000000000000000015":"0x1","0x0000000000000000000000000000000000000016":"0x1","0x0000000000000000000000000000000000000017":"0x1","0x0000000000000000000000000000000000000018":"0x1","0x0000000000000000000000000000000000000019":"0x1","0x000000000000000000000000000000000000001a":"0x1","0x000000000000000000000000000000000000001b":"0x1","0x000000000000000000000000000000000000001c":"0x1","0x000000000000000000000000000000000000001d":"0x1","0x000000000000000000000000000000000000001e":"0x1","0x000000000000000000000000000000000000001f":"0x1","0x0000000000000000000000000000000000000020":"0x1","0x0000000000000000000000000000000000000021":"0x1","0x0000000000000000000000000000000000000022":"0x1","0x0000000000000000000000000000000000000023":"0x1","0x0000000000000000000000000000000000000024":"0x1","0x0000000000000000000000000000000000000025":"0x1","0x0000000000000000000000000000000000000026":"0x1","0x0000000000000000000000000000000000000027":"0x1","0x0000000000000000000000000000000000000028":"0x1","0x0000000000000000000000000000000000000029":"0x1","0x000000000000000000000000000000000000002a":"0x1","0x000000000000000000000000000000000000002b":"0x1","0x000000000000000000000000000000000000002c":"0x1","0x000000000000000000000000000000000000002d":"0x1","0x000000000000000000000000000000000000002e":"0x1","0x000000000000000000000000000000000000002f":"0x1","0x0000000000000000000000000000000000000030":"0x1","0x0000000000000000000000000000000000000031":"0x1","0x0000000000000000000000000000000000000032":"0x1","0x0000000000000000000000000000000000000033":"0x1","0x0000000000000000000000000000000000000034":"0x1","0x0000000000000000000000000000000000000035":"0x1","0x0000000000000000000000000000000000000036":"0x1","0x0000000000000000000000000000000000000037":"0x1","0x0000000000000000000000000000000000000038":"0x1","0x0000000000000000000000000000000000000039":"0x1","0x000000000000000000000000000000000000003a":"0x1","0x000000000000000000000000000000000000003b":"0x1","0x000000000000000000000000000000000000003c":"0x1","0x000000000000000000000000000000000000003d":"0x1","0x000000000000000000000000000000000000003e":"0x1","0x000000000000000000000000000000000000003f":"0x1","0x0000000000000000000000000000000000000040":"0x1","0x0000000000000000000000000000000000000041":"0x1","0x0000000000000000000000000000000000000042":"0x1","0x0000000000000000000000000000000000000043":"0x1","0x0000000000000000000000000000000000000044":"0x1","0x0000000000000000000000000000000000000045":"0x1","0x0000000000000000000000000000000000000046":"0x1","0x0000000000000000000000000000000000000047":"0x1","0x0000000000000000000000000000000000000048":"0x1","0x0000000000000000000000000000000000000049":"0x1","0x000000000000000000000000000000000000004a":"0x1","0x000000000000000000000000000000000000004b":"0x1","0x000000000000000000000000000000000000004c":"0x1","0x000000000000000000000000000000000000004d":"0x1","0x000000000000000000000000000000000000004e":"0x1","0x000000000000000000000000000000000000004f":"0x1","0x0000000000000000000000000000000000000050":"0x1","0x0000000000000000000000000000000000000051":"0x1","0x0000000000000000000000000000000000000052":"0x1","0x0000000000000000000000000000000000000053":"0x1","0x0000000000000000000000000000000000000054":"0x1","0x0000000000000000000000000000000000000055":"0x1","0x0000000000000000000000000000000000000056":"0x1","0x0000000000000000000000000000000000000057":"0x1","0x0000000000000000000000000000000000000058":"0x1","0x0000000000000000000000000000000000000059":"0x1","0x000000000000000000000000000000000000005a":"0x1","0x000000000000000000000000000000000000005b":"0x1","0x000000000000000000000000000000000000005c":"0x1","0x000000000000000000000000000000000000005d":"0x1","0x000000000000000000000000000000000000005e":"0x1","0x000000000000000000000000000000000000005f":"0x1","0x0000000000000000000000000000000000000060":"0x1","0x0000000000000000000000000000000000000061":"0x1","0x0000000000000000000000000000000000000062":"0x1","0x0000000000000000000000000000000000000063":"0x1","0x0000000000000000000000000000000000000064":"0x1","0x0000000000000000000000000000000000000065":"0x1","0x0000000000000000000000000000000000000066":"0x1","0x0000000000000000000000000000000000000067":"0x1","0x0000000000000000000000000000000000000068":"0x1","0x0000000000000000000000000000000000000069":"0x1","0x000000000000000000000000000000000000006a":"0x1","0x000000000000000000000000000000000000006b":"0x1","0x000000000000000000000000000000000000006c":"0x1","0x000000000000000000000000000000000000006d":"0x1","0x000000000000000000000000000000000000006e":"0x1","0x000000000000000000000000000000000000006f":"0x1","0x0000000000000000000000000000000000000070":"0x1","0x0000000000000000000000000000000000000071":"0x1","0x0000000000000000000000000000000000000072":"0x1","0x0000000000000000000000000000000000000073":"0x1","0x0000000000000000000000000000000000000074":"0x1","0x0000000000000000000000000000000000000075":"0x1","0x0000000000000000000000000000000000000076":"0x1","0x0000000000000000000000000000000000000077":"0x1","0x0000000000000000000000000000000000000078":"0x1","0x0000000000000000000000000000000000000079":"0x1","0x000000000000000000000000000000000000007a":"0x1","0x000000000000000000000000000000000000007b":"0x1","0x000000000000000000000000000000000000007c":"0x1","0x000000000000000000000000000000000000007d":"0x1","0x000000000000000000000000000000000000007e":"0x1","0x000000000000000000000000000000000000007f":"0x1","0x0000000000000000000000000000000000000080":"0x1","0x0000000000000000000000000000000000000081":"0x1","0x0000000000000000000000000000000000000082":"0x1","0x0000000000000000000000000000000000000083":"0x1","0x0000000000000000000000000000000000000084":"0x1","0x0000000000000000000000000000000000000085":"0x1","0x0000000000000000000000000000000000000086":"0x1","0x0000000000000000000000000000000000000087":"0x1","0x0000000000000000000000000000000000000088":"0x1","0x0000000000000000000000000000000000000089":"0x1","0x000000000000000000000000000000000000008a":"0x1","0x000000000000000000000000000000000000008b":"0x1","0x000000000000000000000000000000000000008c":"0x1","0x000000000000000000000000000000000000008d":"0x1","0x000000000000000000000000000000000000008e":"0x1","0x000000000000000000000000000000000000008f":"0x1","0x0000000000000000000000000000000000000090":"0x1","0x0000000000000000000000000000000000000091":"0x1","0x0000000000000000000000000000000000000092":"0x1","0x0000000000000000000000000000000000000093":"0x1","0x0000000000000000000000000000000000000094":"0x1","0x0000000000000000000000000000000000000095":"0x1","0x0000000000000000000000000000000000000096":"0x1","0x0000000000000000000000000000000000000097":"0x1","0x0000000000000000000000000000000000000098":"0x1","0x0000000000000000000000000000000000000099":"0x1","0x000000000000000000000000000000000000009a":"0x1","0x000000000000000000000000000000000000009b":"0x1","0x000000000000000000000000000000000000009c":"0x1","0x000000000000000000000000000000000000009d":"0x1","0x000000000000000000000000000000000000009e":"0x1","0x000000000000000000000000000000000000009f":"0x1","0x00000000000000000000000000000000000000a0":"0x1","0x00000000000000000000000000000000000000a1":"0x1","0x00000000000000000000000000000000000000a2":"0x1","0x00000000000000000000000000000000000000a3":"0x1","0x00000000000000000000000000000000000000a4":"0x1","0x00000000000000000000000000000000000000a5":"0x1","0x00000000000000000000000000000000000000a6":"0x1","0x00000000000000000000000000000000000000a7":"0x1","0x00000000000000000000000000000000000000a8":"0x1","0x00000000000000000000000000000000000000a9":"0x1","0x00000000000000000000000000000000000000aa":"0x1","0x00000000000000000000000000000000000000ab":"0x1","0x00000000000000000000000000000000000000ac":"0x1","0x00000000000000000000000000000000000000ad":"0x1","0x00000000000000000000000000000000000000ae":"0x1","0x00000000000000000000000000000000000000af":"0x1","0x00000000000000000000000000000000000000b0":"0x1","0x00000000000000000000000000000000000000b1":"0x1","0x00000000000000000000000000000000000000b2":"0x1","0x00000000000000000000000000000000000000b3":"0x1","0x00000000000000000000000000000000000000b4":"0x1","0x00000000000000000000000000000000000000b5":"0x1","0x00000000000000000000000000000000000000b6":"0x1","0x00000000000000000000000000000000000000b7":"0x1","0x00000000000000000000000000000000000000b8":"0x1","0x00000000000000000000000000000000000000b9":"0x1","0x00000000000000000000000000000000000000ba":"0x1","0x00000000000000000000000000000000000000bb":"0x1","0x00000000000000000000000000000000000000bc":"0x1","0x00000000000000000000000000000000000000bd":"0x1","0x00000000000000000000000000000000000000be":"0x1","0x00000000000000000000000000000000000000bf":"0x1","0x00000000000000000000000000000000000000c0":"0x1","0x00000000000000000000000000000000000000c1":"0x1","0x00000000000000000000000000000000000000c2":"0x1","0x00000000000000000000000000000000000000c3":"0x1","0x00000000000000000000000000000000000000c4":"0x1","0x00000000000000000000000000000000000000c5":"0x1","0x00000000000000000000000000000000000000c6":"0x1","0x00000000000000000000000000000000000000c7":"0x1","0x00000000000000000000000000000000000000c8":"0x1","0x00000000000000000000000000000000000000c9":"0x1","0x00000000000000000000000000000000000000ca":"0x1","0x00000000000000000000000000000000000000cb":"0x1","0x00000000000000000000000000000000000000cc":"0x1","0x00000000000000000000000000000000000000cd":"0x1","0x00000000000000000000000000000000000000ce":"0x1","0x00000000000000000000000000000000000000cf":"0x1","0x00000000000000000000000000000000000000d0":"0x1","0x00000000000000000000000000000000000000d1":"0x1","0x00000000000000000000000000000000000000d2":"0x1","0x00000000000000000000000000000000000000d3":"0x1","0x00000000000000000000000000000000000000d4":"0x1","0x00000000000000000000000000000000000000d5":"0x1","0x00000000000000000000000000000000000000d6":"0x1","0x00000000000000000000000000000000000000d7":"0x1","0x00000000000000000000000000000000000000d8":"0x1","0x00000000000000000000000000000000000000d9":"0x1","0x00000000000000000000000000000000000000da":"0x1","0x00000000000000000000000000000000000000db":"0x1","0x00000000000000000000000000000000000000dc":"0x1","0x00000000000000000000000000000000000000dd":"0x1","0x00000000000000000000000000000000000000de":"0x1","0x00000000000000000000000000000000000000df":"0x1","0x00000000000000000000000000000000000000e0":"0x1","0x00000000000000000000000000000000000000e1":"0x1","0x00000000000000000000000000000000000000e2":"0x1","0x00000000000000000000000000000000000000e3":"0x1","0x00000000000000000000000000000000000000e4":"0x1","0x00000000000000000000000000000000000000e5":"0x1","0x00000000000000000000000000000000000000e6":"0x1","0x00000000000000000000000000000000000000e7":"0x1","0x00000000000000000000000000000000000000e8":"0x1","0x00000000000000000000000000000000000000e9":"0x1","0x00000000000000000000000000000000000000ea":"0x1","0x00000000000000000000000000000000000000eb":"0x1","0x00000000000000000000000000000000000000ec":"0x1","0x00000000000000000000000000000000000000ed":"0x1","0x00000000000000000000000000000000000000ee":"0x1","0x00000000000000000000000000000000000000ef":"0x1","0x00000000000000000000000000000000000000f0":"0x1","0x00000000000000000000000000000000000000f1":"0x1","0x00000000000000000000000000000000000000f2":"0x1","0x00000000000000000000000000000000000000f3":"0x1","0x00000000000000000000000000000000000000f4":"0x1","0x00000000000000000000000000000000000000f5":"0x1","0x00000000000000000000000000000000000000f6":"0x1","0x00000000000000000000000000000000000000f7":"0x1","0x00000000000000000000000000000000000000f8":"0x1","0x00000000000000000000000000000000000000f9":"0x1","0x00000000000000000000000000000000000000fa":"0x1","0x00000000000000000000000000000000000000fb":"0x1","0x00000000000000000000000000000000000000fc":"0x1","0x00000000000000000000000000000000000000fd":"0x1","0x00000000000000000000000000000000000000fe":"0x1","0x00000000000000000000000000000000000000ff":"0x1","0x4c2ae482593505f0163cdefc073e81c63cda4107":"0x152d02c7e14af6800000","0xa8e8f14732658e4b51e8711931053a8a69baf2b1":"0x152d02c7e14af6800000","0xd9a5179f091d85051d3c982785efd1455cec8699":"0x84595161401484a000000","0xe0a2bd4258d2768837baa26a28fe71dc079f84c7":"0x4a47e3c12448f4ad000000"}')
        },
        3591: function(e) {
            e.exports = JSON.parse('{"0xa2A6d93439144FFE4D27c9E088dCD8b783946263":"0xD3C21BCECCEDA1000000","0xBc11295936Aa79d594139de1B2e12629414F3BDB":"0xD3C21BCECCEDA1000000","0x7cF5b79bfe291A67AB02b393E456cCc4c266F753":"0xD3C21BCECCEDA1000000","0xaaec86394441f915bce3e6ab399977e9906f3b69":"0xD3C21BCECCEDA1000000","0xF47CaE1CF79ca6758Bfc787dbD21E6bdBe7112B8":"0xD3C21BCECCEDA1000000","0xd7eDDB78ED295B3C9629240E8924fb8D8874ddD8":"0xD3C21BCECCEDA1000000","0x8b7F0977Bb4f0fBE7076FA22bC24acA043583F5e":"0xD3C21BCECCEDA1000000","0xe2e2659028143784d557bcec6ff3a0721048880a":"0xD3C21BCECCEDA1000000","0xd9a5179f091d85051d3c982785efd1455cec8699":"0xD3C21BCECCEDA1000000","0xbeef32ca5b9a198d27B4e02F4c70439fE60356Cf":"0xD3C21BCECCEDA1000000","0x0000006916a87b82333f4245046623b23794c65c":"0x84595161401484A000000","0xb21c33de1fab3fa15499c62b59fe0cc3250020d1":"0x52B7D2DCC80CD2E4000000","0x10F5d45854e038071485AC9e402308cF80D2d2fE":"0x52B7D2DCC80CD2E4000000","0xd7d76c58b3a519e9fA6Cc4D22dC017259BC49F1E":"0x52B7D2DCC80CD2E4000000","0x799D329e5f583419167cD722962485926E338F4a":"0xDE0B6B3A7640000"}')
        },
        3592: function(e, t, o) {
            "use strict";
            var r, a = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function o() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                }),
                n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, o = 1, r = arguments.length; o < r; o++)
                            for (var a in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                i = this && this.__read || function(e, t) {
                    var o = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!o) return e;
                    var r, a, n = o.call(e),
                        i = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = n.next()).done;) i.push(r.value)
                    } catch (e) {
                        a = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (o = n.return) && o.call(n)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                    return i
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = o(241),
                c = o(1072),
                d = o(413),
                f = o(1074),
                x = Buffer.from(1..toString(16).padStart(2, "0"), "hex"),
                u = function(e) {
                    function t(t, o) {
                        void 0 === o && (o = {});
                        var r, a, i = this;
                        (i = e.call(this, n(n({}, t), {
                            type: 1
                        }), o) || this).DEFAULT_HARDFORK = "berlin";
                        var c = t.chainId,
                            x = t.accessList,
                            u = t.gasPrice;
                        if (i.common = i._getCommon(o.common, c), i.chainId = i.common.chainIdBN(), !i.common.isActivatedEIP(2930)) throw new Error("EIP-2930 not enabled on Common");
                        i.activeCapabilities = i.activeCapabilities.concat([2718, 2930]);
                        var h = f.AccessLists.getAccessListData(null != x ? x : []);
                        if (i.accessList = h.accessList, i.AccessListJSON = h.AccessListJSON, f.AccessLists.verifyAccessList(i.accessList), i.gasPrice = new s.BN((0, s.toBuffer)("" === u ? "0x" : u)), i._validateCannotExceedMaxInteger({
                                gasPrice: i.gasPrice
                            }), i.gasPrice.mul(i.gasLimit).gt(s.MAX_INTEGER)) {
                            var l = i._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");
                            throw new Error(l)
                        }
                        if (i.v && !i.v.eqn(0) && !i.v.eqn(1)) {
                            l = i._errorMsg("The y-parity of the transaction should either be 0 or 1");
                            throw new Error(l)
                        }
                        if (i.common.gteHardfork("homestead") && (null === (r = i.s) || void 0 === r ? void 0 : r.gt(d.N_DIV_2))) {
                            l = i._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                            throw new Error(l)
                        }
                        return i.common.isActivatedEIP(3860) && (0, f.checkMaxInitCodeSize)(i.common, i.data.length), (null === (a = null == o ? void 0 : o.freeze) || void 0 === a || a) && Object.freeze(i), i
                    }
                    return a(t, e), Object.defineProperty(t.prototype, "senderR", {
                        get: function() {
                            return this.r
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "senderS", {
                        get: function() {
                            return this.s
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "yParity", {
                        get: function() {
                            return this.v
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.fromTxData = function(e, o) {
                        return void 0 === o && (o = {}), new t(e, o)
                    }, t.fromSerializedTx = function(e, o) {
                        if (void 0 === o && (o = {}), !e.slice(0, 1).equals(x)) throw new Error("Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ".concat(1, ", received: ").concat(e.slice(0, 1).toString("hex")));
                        var r = s.rlp.decode(e.slice(1));
                        if (!Array.isArray(r)) throw new Error("Invalid serialized tx input: must be array");
                        return t.fromValuesArray(r, o)
                    }, t.fromRlpSerializedTx = function(e, o) {
                        return void 0 === o && (o = {}), t.fromSerializedTx(e, o)
                    }, t.fromValuesArray = function(e, o) {
                        if (void 0 === o && (o = {}), 8 !== e.length && 11 !== e.length) throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");
                        var r = i(e, 11),
                            a = r[0],
                            n = r[1],
                            c = r[2],
                            d = r[3],
                            f = r[4],
                            x = r[5],
                            u = r[6],
                            h = r[7],
                            l = r[8],
                            p = r[9],
                            m = r[10];
                        (0, s.validateNoLeadingZeroes)({
                            nonce: n,
                            gasPrice: c,
                            gasLimit: d,
                            value: x,
                            v: l,
                            r: p,
                            s: m
                        });
                        return new t({
                            chainId: new s.BN(a),
                            nonce: n,
                            gasPrice: c,
                            gasLimit: d,
                            to: f,
                            value: x,
                            data: u,
                            accessList: null != h ? h : [],
                            v: void 0 !== l ? new s.BN(l) : void 0,
                            r: p,
                            s: m
                        }, o)
                    }, t.prototype.getDataFee = function() {
                        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
                        var t = e.prototype.getDataFee.call(this);
                        return t.iaddn(f.AccessLists.getDataFeeEIP2930(this.accessList, this.common)), Object.isFrozen(this) && (this.cache.dataFee = {
                            value: t,
                            hardfork: this.common.hardfork()
                        }), t
                    }, t.prototype.getUpfrontCost = function() {
                        return this.gasLimit.mul(this.gasPrice).add(this.value)
                    }, t.prototype.raw = function() {
                        return [(0, s.bnToUnpaddedBuffer)(this.chainId), (0, s.bnToUnpaddedBuffer)(this.nonce), (0, s.bnToUnpaddedBuffer)(this.gasPrice), (0, s.bnToUnpaddedBuffer)(this.gasLimit), void 0 !== this.to ? this.to.buf : Buffer.from([]), (0, s.bnToUnpaddedBuffer)(this.value), this.data, this.accessList, void 0 !== this.v ? (0, s.bnToUnpaddedBuffer)(this.v) : Buffer.from([]), void 0 !== this.r ? (0, s.bnToUnpaddedBuffer)(this.r) : Buffer.from([]), void 0 !== this.s ? (0, s.bnToUnpaddedBuffer)(this.s) : Buffer.from([])]
                    }, t.prototype.serialize = function() {
                        var e = this.raw();
                        return Buffer.concat([x, s.rlp.encode(e)])
                    }, t.prototype.getMessageToSign = function(e) {
                        void 0 === e && (e = !0);
                        var t = this.raw().slice(0, 8),
                            o = Buffer.concat([x, s.rlp.encode(t)]);
                        return e ? (0, s.keccak256)(o) : o
                    }, t.prototype.hash = function() {
                        if (!this.isSigned()) {
                            var e = this._errorMsg("Cannot call hash method if transaction is not signed");
                            throw new Error(e)
                        }
                        return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = (0, s.keccak256)(this.serialize())), this.cache.hash) : (0, s.keccak256)(this.serialize())
                    }, t.prototype.getMessageToVerifySignature = function() {
                        return this.getMessageToSign()
                    }, t.prototype.getSenderPublicKey = function() {
                        var e;
                        if (!this.isSigned()) {
                            var t = this._errorMsg("Cannot call this method if transaction is not signed");
                            throw new Error(t)
                        }
                        var o = this.getMessageToVerifySignature();
                        if (this.common.gteHardfork("homestead") && (null === (e = this.s) || void 0 === e ? void 0 : e.gt(d.N_DIV_2))) {
                            t = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                            throw new Error(t)
                        }
                        var r = this.yParity,
                            a = this.r,
                            n = this.s;
                        try {
                            return (0, s.ecrecover)(o, r.addn(27), (0, s.bnToUnpaddedBuffer)(a), (0, s.bnToUnpaddedBuffer)(n))
                        } catch (e) {
                            t = this._errorMsg("Invalid Signature");
                            throw new Error(t)
                        }
                    }, t.prototype._processSignature = function(e, o, r) {
                        var a = n(n({}, this.txOptions), {
                            common: this.common
                        });
                        return t.fromTxData({
                            chainId: this.chainId,
                            nonce: this.nonce,
                            gasPrice: this.gasPrice,
                            gasLimit: this.gasLimit,
                            to: this.to,
                            value: this.value,
                            data: this.data,
                            accessList: this.accessList,
                            v: new s.BN(e - 27),
                            r: new s.BN(o),
                            s: new s.BN(r)
                        }, a)
                    }, t.prototype.toJSON = function() {
                        var e = f.AccessLists.getAccessListJSON(this.accessList);
                        return {
                            chainId: (0, s.bnToHex)(this.chainId),
                            nonce: (0, s.bnToHex)(this.nonce),
                            gasPrice: (0, s.bnToHex)(this.gasPrice),
                            gasLimit: (0, s.bnToHex)(this.gasLimit),
                            to: void 0 !== this.to ? this.to.toString() : void 0,
                            value: (0, s.bnToHex)(this.value),
                            data: "0x" + this.data.toString("hex"),
                            accessList: e,
                            v: void 0 !== this.v ? (0, s.bnToHex)(this.v) : void 0,
                            r: void 0 !== this.r ? (0, s.bnToHex)(this.r) : void 0,
                            s: void 0 !== this.s ? (0, s.bnToHex)(this.s) : void 0
                        }
                    }, t.prototype.errorStr = function() {
                        var e, t, o = this._getSharedErrorPostfix();
                        return o += " gasPrice=".concat(this.gasPrice, " accessListCount=").concat(null !== (t = null === (e = this.accessList) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0)
                    }, t.prototype._errorMsg = function(e) {
                        return "".concat(e, " (").concat(this.errorStr(), ")")
                    }, t
                }(c.BaseTransaction);
            t.default = u
        },
        3593: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(241),
                a = o(1860),
                n = function() {
                    function e() {}
                    return e.fromTxData = function(e, t) {
                        if (void 0 === t && (t = {}), "type" in e && void 0 !== e.type) {
                            var o = new r.BN((0, r.toBuffer)(e.type)).toNumber();
                            if (0 === o) return a.Transaction.fromTxData(e, t);
                            if (1 === o) return a.AccessListEIP2930Transaction.fromTxData(e, t);
                            if (2 === o) return a.FeeMarketEIP1559Transaction.fromTxData(e, t);
                            throw new Error("Tx instantiation with type ".concat(o, " not supported"))
                        }
                        return a.Transaction.fromTxData(e, t)
                    }, e.fromSerializedData = function(e, t) {
                        if (void 0 === t && (t = {}), e[0] <= 127) {
                            var o = void 0;
                            switch (e[0]) {
                                case 1:
                                    o = 2930;
                                    break;
                                case 2:
                                    o = 1559;
                                    break;
                                default:
                                    throw new Error("TypedTransaction with ID ".concat(e[0], " unknown"))
                            }
                            return 1559 === o ? a.FeeMarketEIP1559Transaction.fromSerializedTx(e, t) : a.AccessListEIP2930Transaction.fromSerializedTx(e, t)
                        }
                        return a.Transaction.fromSerializedTx(e, t)
                    }, e.fromBlockBodyData = function(e, t) {
                        if (void 0 === t && (t = {}), Buffer.isBuffer(e)) return this.fromSerializedData(e, t);
                        if (Array.isArray(e)) return a.Transaction.fromValuesArray(e, t);
                        throw new Error("Cannot decode transaction: unknown type input")
                    }, e.getTransactionClass = function(e, t) {
                        if (void 0 === e && (e = 0), 0 == e || e >= 128 && e <= 255) return a.Transaction;
                        switch (e) {
                            case 1:
                                return a.AccessListEIP2930Transaction;
                            case 2:
                                return a.FeeMarketEIP1559Transaction;
                            default:
                                throw new Error("TypedTransaction with ID ".concat(e, " unknown"))
                        }
                    }, e
                }();
            t.default = n
        },
        3594: function(e, t, o) {
            "use strict";
            var r, a = this && this.__extends || (r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                        })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function o() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
                }),
                n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, o = 1, r = arguments.length; o < r; o++)
                            for (var a in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                i = this && this.__read || function(e, t) {
                    var o = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!o) return e;
                    var r, a, n = o.call(e),
                        i = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = n.next()).done;) i.push(r.value)
                    } catch (e) {
                        a = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (o = n.return) && o.call(n)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                    return i
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = o(241),
                c = o(1072),
                d = o(413),
                f = o(1074),
                x = Buffer.from(2..toString(16).padStart(2, "0"), "hex"),
                u = function(e) {
                    function t(t, o) {
                        void 0 === o && (o = {});
                        var r, a, i = this;
                        (i = e.call(this, n(n({}, t), {
                            type: 2
                        }), o) || this).DEFAULT_HARDFORK = "london";
                        var c = t.chainId,
                            x = t.accessList,
                            u = t.maxFeePerGas,
                            h = t.maxPriorityFeePerGas;
                        if (i.common = i._getCommon(o.common, c), i.chainId = i.common.chainIdBN(), !i.common.isActivatedEIP(1559)) throw new Error("EIP-1559 not enabled on Common");
                        i.activeCapabilities = i.activeCapabilities.concat([1559, 2718, 2930]);
                        var l = f.AccessLists.getAccessListData(null != x ? x : []);
                        if (i.accessList = l.accessList, i.AccessListJSON = l.AccessListJSON, f.AccessLists.verifyAccessList(i.accessList), i.maxFeePerGas = new s.BN((0, s.toBuffer)("" === u ? "0x" : u)), i.maxPriorityFeePerGas = new s.BN((0, s.toBuffer)("" === h ? "0x" : h)), i._validateCannotExceedMaxInteger({
                                maxFeePerGas: i.maxFeePerGas,
                                maxPriorityFeePerGas: i.maxPriorityFeePerGas
                            }), i.gasLimit.mul(i.maxFeePerGas).gt(s.MAX_INTEGER)) {
                            var p = i._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
                            throw new Error(p)
                        }
                        if (i.maxFeePerGas.lt(i.maxPriorityFeePerGas)) {
                            p = i._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
                            throw new Error(p)
                        }
                        if (i.v && !i.v.eqn(0) && !i.v.eqn(1)) {
                            p = i._errorMsg("The y-parity of the transaction should either be 0 or 1");
                            throw new Error(p)
                        }
                        if (i.common.gteHardfork("homestead") && (null === (r = i.s) || void 0 === r ? void 0 : r.gt(d.N_DIV_2))) {
                            p = i._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                            throw new Error(p)
                        }
                        return i.common.isActivatedEIP(3860) && (0, f.checkMaxInitCodeSize)(i.common, i.data.length), (null === (a = null == o ? void 0 : o.freeze) || void 0 === a || a) && Object.freeze(i), i
                    }
                    return a(t, e), Object.defineProperty(t.prototype, "senderR", {
                        get: function() {
                            return this.r
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "senderS", {
                        get: function() {
                            return this.s
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "yParity", {
                        get: function() {
                            return this.v
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.fromTxData = function(e, o) {
                        return void 0 === o && (o = {}), new t(e, o)
                    }, t.fromSerializedTx = function(e, o) {
                        if (void 0 === o && (o = {}), !e.slice(0, 1).equals(x)) throw new Error("Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ".concat(2, ", received: ").concat(e.slice(0, 1).toString("hex")));
                        var r = s.rlp.decode(e.slice(1));
                        if (!Array.isArray(r)) throw new Error("Invalid serialized tx input: must be array");
                        return t.fromValuesArray(r, o)
                    }, t.fromRlpSerializedTx = function(e, o) {
                        return void 0 === o && (o = {}), t.fromSerializedTx(e, o)
                    }, t.fromValuesArray = function(e, o) {
                        if (void 0 === o && (o = {}), 9 !== e.length && 12 !== e.length) throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");
                        var r = i(e, 12),
                            a = r[0],
                            n = r[1],
                            c = r[2],
                            d = r[3],
                            f = r[4],
                            x = r[5],
                            u = r[6],
                            h = r[7],
                            l = r[8],
                            p = r[9],
                            m = r[10],
                            b = r[11];
                        return (0, s.validateNoLeadingZeroes)({
                            nonce: n,
                            maxPriorityFeePerGas: c,
                            maxFeePerGas: d,
                            gasLimit: f,
                            value: u,
                            v: p,
                            r: m,
                            s: b
                        }), new t({
                            chainId: new s.BN(a),
                            nonce: n,
                            maxPriorityFeePerGas: c,
                            maxFeePerGas: d,
                            gasLimit: f,
                            to: x,
                            value: u,
                            data: h,
                            accessList: null != l ? l : [],
                            v: void 0 !== p ? new s.BN(p) : void 0,
                            r: m,
                            s: b
                        }, o)
                    }, t.prototype.getDataFee = function() {
                        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
                        var t = e.prototype.getDataFee.call(this);
                        return t.iaddn(f.AccessLists.getDataFeeEIP2930(this.accessList, this.common)), Object.isFrozen(this) && (this.cache.dataFee = {
                            value: t,
                            hardfork: this.common.hardfork()
                        }), t
                    }, t.prototype.getUpfrontCost = function(e) {
                        void 0 === e && (e = new s.BN(0));
                        var t = s.BN.min(this.maxPriorityFeePerGas, this.maxFeePerGas.sub(e)).add(e);
                        return this.gasLimit.mul(t).add(this.value)
                    }, t.prototype.raw = function() {
                        return [(0, s.bnToUnpaddedBuffer)(this.chainId), (0, s.bnToUnpaddedBuffer)(this.nonce), (0, s.bnToUnpaddedBuffer)(this.maxPriorityFeePerGas), (0, s.bnToUnpaddedBuffer)(this.maxFeePerGas), (0, s.bnToUnpaddedBuffer)(this.gasLimit), void 0 !== this.to ? this.to.buf : Buffer.from([]), (0, s.bnToUnpaddedBuffer)(this.value), this.data, this.accessList, void 0 !== this.v ? (0, s.bnToUnpaddedBuffer)(this.v) : Buffer.from([]), void 0 !== this.r ? (0, s.bnToUnpaddedBuffer)(this.r) : Buffer.from([]), void 0 !== this.s ? (0, s.bnToUnpaddedBuffer)(this.s) : Buffer.from([])]
                    }, t.prototype.serialize = function() {
                        var e = this.raw();
                        return Buffer.concat([x, s.rlp.encode(e)])
                    }, t.prototype.getMessageToSign = function(e) {
                        void 0 === e && (e = !0);
                        var t = this.raw().slice(0, 9),
                            o = Buffer.concat([x, s.rlp.encode(t)]);
                        return e ? (0, s.keccak256)(o) : o
                    }, t.prototype.hash = function() {
                        if (!this.isSigned()) {
                            var e = this._errorMsg("Cannot call hash method if transaction is not signed");
                            throw new Error(e)
                        }
                        return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = (0, s.keccak256)(this.serialize())), this.cache.hash) : (0, s.keccak256)(this.serialize())
                    }, t.prototype.getMessageToVerifySignature = function() {
                        return this.getMessageToSign()
                    }, t.prototype.getSenderPublicKey = function() {
                        var e;
                        if (!this.isSigned()) {
                            var t = this._errorMsg("Cannot call this method if transaction is not signed");
                            throw new Error(t)
                        }
                        var o = this.getMessageToVerifySignature();
                        if (this.common.gteHardfork("homestead") && (null === (e = this.s) || void 0 === e ? void 0 : e.gt(d.N_DIV_2))) {
                            t = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                            throw new Error(t)
                        }
                        var r = this.v,
                            a = this.r,
                            n = this.s;
                        try {
                            return (0, s.ecrecover)(o, r.addn(27), (0, s.bnToUnpaddedBuffer)(a), (0, s.bnToUnpaddedBuffer)(n))
                        } catch (e) {
                            t = this._errorMsg("Invalid Signature");
                            throw new Error(t)
                        }
                    }, t.prototype._processSignature = function(e, o, r) {
                        var a = n(n({}, this.txOptions), {
                            common: this.common
                        });
                        return t.fromTxData({
                            chainId: this.chainId,
                            nonce: this.nonce,
                            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
                            maxFeePerGas: this.maxFeePerGas,
                            gasLimit: this.gasLimit,
                            to: this.to,
                            value: this.value,
                            data: this.data,
                            accessList: this.accessList,
                            v: new s.BN(e - 27),
                            r: new s.BN(o),
                            s: new s.BN(r)
                        }, a)
                    }, t.prototype.toJSON = function() {
                        var e = f.AccessLists.getAccessListJSON(this.accessList);
                        return {
                            chainId: (0, s.bnToHex)(this.chainId),
                            nonce: (0, s.bnToHex)(this.nonce),
                            maxPriorityFeePerGas: (0, s.bnToHex)(this.maxPriorityFeePerGas),
                            maxFeePerGas: (0, s.bnToHex)(this.maxFeePerGas),
                            gasLimit: (0, s.bnToHex)(this.gasLimit),
                            to: void 0 !== this.to ? this.to.toString() : void 0,
                            value: (0, s.bnToHex)(this.value),
                            data: "0x" + this.data.toString("hex"),
                            accessList: e,
                            v: void 0 !== this.v ? (0, s.bnToHex)(this.v) : void 0,
                            r: void 0 !== this.r ? (0, s.bnToHex)(this.r) : void 0,
                            s: void 0 !== this.s ? (0, s.bnToHex)(this.s) : void 0
                        }
                    }, t.prototype.errorStr = function() {
                        var e = this._getSharedErrorPostfix();
                        return e += " maxFeePerGas=".concat(this.maxFeePerGas, " maxPriorityFeePerGas=").concat(this.maxPriorityFeePerGas)
                    }, t.prototype._errorMsg = function(e) {
                        return "".concat(e, " (").concat(this.errorStr(), ")")
                    }, t
                }(c.BaseTransaction);
            t.default = u
        },
        413: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.N_DIV_2 = t.isAccessList = t.isAccessListBuffer = t.Capability = void 0;
            var r = o(241);

            function a(e) {
                if (0 === e.length) return !0;
                var t = e[0];
                return !!Array.isArray(t)
            }! function(e) {
                e[e.EIP155ReplayProtection = 155] = "EIP155ReplayProtection", e[e.EIP1559FeeMarket = 1559] = "EIP1559FeeMarket", e[e.EIP2718TypedTransaction = 2718] = "EIP2718TypedTransaction", e[e.EIP2930AccessLists = 2930] = "EIP2930AccessLists"
            }(t.Capability || (t.Capability = {})), t.isAccessListBuffer = a, t.isAccessList = function(e) {
                return !a(e)
            }, t.N_DIV_2 = new r.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16)
        }
    }
]);