(window.webpackJsonp = window.webpackJsonp || []).push([
    [283], {
        5399: function(t, e, i) {
            "use strict";
            var n = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = i(9030),
                A = i(6479),
                a = i(9041),
                o = n(i(35)),
                s = n(i(461)),
                I = n(i(464)),
                g = i(930);
            const h = "delegate",
                c = t => "unDelegate@" + (t => (t = new o.default(t).toString(16)).length % 2 == 1 ? "0" + t : t)(t),
                u = "claimRewards",
                f = "withdraw";
            class EGLDCoin extends((0, g.StakingMixin)((0, g.HasProviders)(s.default))) {
                constructor({
                    alias: t,
                    notify: e,
                    feeData: i,
                    explorers: n,
                    txWebUrl: r,
                    socket: A
                }) {
                    super({
                        alias: t,
                        notify: e,
                        name: "MultiversX",
                        ticker: "EGLD",
                        decimal: 18,
                        derivation: "m/44'/508'/0'/0'/0'",
                        unspendableBalance: "0",
                        explorers: n,
                        txWebUrl: r,
                        socket: A,
                        feeData: i
                    }), this.gasPrice = i.gasPrice || 1e9, this.gasLimit = i.gasLimit || 5e4, this.stakingGasLimit = i.stakingGasLimit || 1e7, this.reserveForStake = i.reserveForStake || "10000", this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (t, e) => {
                        this.getInfo(), e && e.direction ? this.bus.$emit("socket::newtx", {
                            id: this.id,
                            ticker: this.ticker,
                            amount: e.amount,
                            txid: e.txid
                        }) : this.bus.$emit("socket::newtx::outgoing", {
                            id: this.id,
                            ticker: this.ticker
                        })
                    })
                }
                loadWallet(t, e) {
                    const i = new r.account;
                    return t = i.privateKeyFromMnemonic(e), i.loadFromSeed(Buffer.from(t, "hex")), this.privateKey = i.privateKeyAsString(), this.address = i.address(), this
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    data: i = "",
                    gasLimit: n
                }) {
                    const o = a.Address.fromBech32(this.address),
                        s = new a.Transaction({
                            nonce: this.nonce,
                            value: e,
                            receiver: a.Address.fromBech32(t),
                            sender: o,
                            gasPrice: Number(this.gasPrice),
                            gasLimit: Number(n || this.gasLimit),
                            data: new a.TransactionPayload(i),
                            chainID: "1",
                            version: 1
                        }),
                        I = s.serializeForSigning(o),
                        g = new r.account;
                    return g.loadFromPrivateKey(Buffer.from(this.privateKey, "hex")), s.applySignature(A.Signature.fromHex(g.sign(I)), o), s.toSendable()
                }
                createDelegationTransaction({
                    validator: t,
                    amount: e
                }) {
                    return this.createTransaction({
                        address: t,
                        amount: e,
                        data: h,
                        gasLimit: this.stakingGasLimit
                    })
                }
                createUnDelegationTransaction({
                    validator: t,
                    amount: e
                }) {
                    return this.createTransaction({
                        address: t,
                        amount: "0",
                        data: c(e),
                        gasLimit: this.stakingGasLimit
                    })
                }
                createClaimTransaction({
                    validator: t
                }) {
                    return this.createTransaction({
                        address: t,
                        amount: "0",
                        data: u,
                        gasLimit: this.stakingGasLimit
                    })
                }
                createWithdrawTransaction({
                    validator: t
                }) {
                    return this.createTransaction({
                        address: t,
                        amount: "0",
                        data: f,
                        gasLimit: this.stakingGasLimit
                    })
                }
                calculateTotal({
                    balance: t,
                    staked: e,
                    unstaking: i,
                    availableWithdrawals: n,
                    rewards: r
                }) {
                    return new I.default(t.toBN().add(e.toBN()).add(i.toBN()).add(r.toBN()).add(n.toBN()).toString(), this)
                }
                async calculateAvailableForStake({
                    balance: t
                }) {
                    const e = await this.getFee({
                            gasLimit: this.stakingGasLimit
                        }),
                        i = t.toBN().sub(new this.BN(this.reserveForStake)).sub(e).sub(new this.BN(this.unspendableBalance));
                    return new I.default(i.isNeg() ? "0" : i, this)
                }
                async sendTransaction(t) {
                    const e = await this.getProvider("send").sendTransaction(t);
                    return e && (this.nonce = Number(this.nonce) + 1), e
                }
                async getInfo() {
                    const {
                        balance: t,
                        nonce: e
                    } = await this.getProvider("balance").getInfo(this.address);
                    return t && (this.balance = t), e && (this.nonce = Number(e || "0")), await this.getStakingInfo(), {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
                getFee({
                    gasLimit: t,
                    userGasPrice: e
                } = {}) {
                    return new o.default(String(e || this.gasPrice)).mul(new this.BN(t || this.gasLimit))
                }
                async validateAddress(t) {
                    try {
                        return !!a.Address.fromBech32(t)
                    } catch (t) {
                        return !1
                    }
                }
            }
            var C = EGLDCoin;
            e.default = C
        },
        5612: function(t, e, i) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(t, e, i, n) {
                    void 0 === n && (n = i), Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, n) {
                    void 0 === n && (n = i), t[n] = e[i]
                }),
                r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                A = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && n(e, t, i);
                    return r(e, t), e
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isEmpty = e.guardEmpty = e.guardNotEmpty = e.guardLength = e.guardSameLength = e.guardValueIsSetWithMessage = e.guardValueIsSet = e.guardTrue = void 0;
            const a = A(i(5487));

            function o(t, e) {
                if (null == e || void 0 === e) throw new a.ErrInvariantFailed(t)
            }

            function s(t) {
                return t.isEmpty ? t.isEmpty() : 0 === t.length
            }
            e.guardTrue = function(t, e) {
                if (!t) throw new a.ErrInvariantFailed(`[<${e}>] isn't true`)
            }, e.guardValueIsSet = function(t, e) {
                o(t + " isn't set (null or undefined)", e)
            }, e.guardValueIsSetWithMessage = o, e.guardSameLength = function(t, e) {
                if (e = e || [], (t = t || []).length != e.length) throw new a.ErrInvariantFailed("arrays do not have the same length")
            }, e.guardLength = function(t, e) {
                let i = t.length || 0;
                if (i != e) throw new a.ErrInvariantFailed(`wrong length, expected: ${e}, actual: ${i}`)
            }, e.guardNotEmpty = function(t, e) {
                if (s(t)) throw new a.ErrInvariantFailed(e + " is empty")
            }, e.guardEmpty = function(t, e) {
                if (!s(t)) throw new a.ErrInvariantFailed(e + " is not empty")
            }, e.isEmpty = s
        },
        5775: function(t, e, i) {
            const n = i(24);

            function r(t, e, i, n, r, A, I) {
                let g;
                for (s(t, e + 64 * (2 * n - 1), r, 0, 64), g = 0; g < 2 * n; g++) o(t, 64 * g, r, 0, 64), a(r, A, I), s(r, 0, t, i + 64 * g, 64);
                for (g = 0; g < n; g++) s(t, i + 2 * g * 64, t, e + 64 * g, 64);
                for (g = 0; g < n; g++) s(t, i + 64 * (2 * g + 1), t, e + 64 * (g + n), 64)
            }

            function A(t, e) {
                return t << e | t >>> 32 - e
            }

            function a(t, e, i) {
                let n;
                for (n = 0; n < 16; n++) e[n] = (255 & t[4 * n + 0]) << 0, e[n] |= (255 & t[4 * n + 1]) << 8, e[n] |= (255 & t[4 * n + 2]) << 16, e[n] |= (255 & t[4 * n + 3]) << 24;
                for (s(e, 0, i, 0, 16), n = 8; n > 0; n -= 2) i[4] ^= A(i[0] + i[12], 7), i[8] ^= A(i[4] + i[0], 9), i[12] ^= A(i[8] + i[4], 13), i[0] ^= A(i[12] + i[8], 18), i[9] ^= A(i[5] + i[1], 7), i[13] ^= A(i[9] + i[5], 9), i[1] ^= A(i[13] + i[9], 13), i[5] ^= A(i[1] + i[13], 18), i[14] ^= A(i[10] + i[6], 7), i[2] ^= A(i[14] + i[10], 9), i[6] ^= A(i[2] + i[14], 13), i[10] ^= A(i[6] + i[2], 18), i[3] ^= A(i[15] + i[11], 7), i[7] ^= A(i[3] + i[15], 9), i[11] ^= A(i[7] + i[3], 13), i[15] ^= A(i[11] + i[7], 18), i[1] ^= A(i[0] + i[3], 7), i[2] ^= A(i[1] + i[0], 9), i[3] ^= A(i[2] + i[1], 13), i[0] ^= A(i[3] + i[2], 18), i[6] ^= A(i[5] + i[4], 7), i[7] ^= A(i[6] + i[5], 9), i[4] ^= A(i[7] + i[6], 13), i[5] ^= A(i[4] + i[7], 18), i[11] ^= A(i[10] + i[9], 7), i[8] ^= A(i[11] + i[10], 9), i[9] ^= A(i[8] + i[11], 13), i[10] ^= A(i[9] + i[8], 18), i[12] ^= A(i[15] + i[14], 7), i[13] ^= A(i[12] + i[15], 9), i[14] ^= A(i[13] + i[12], 13), i[15] ^= A(i[14] + i[13], 18);
                for (n = 0; n < 16; ++n) e[n] = i[n] + e[n];
                for (n = 0; n < 16; n++) {
                    let i = 4 * n;
                    t[i + 0] = e[n] >> 0 & 255, t[i + 1] = e[n] >> 8 & 255, t[i + 2] = e[n] >> 16 & 255, t[i + 3] = e[n] >> 24 & 255
                }
            }

            function o(t, e, i, n, r) {
                for (let A = 0; A < r; A++) i[n + A] ^= t[e + A]
            }

            function s(t, e, i, n, r) {
                if (Buffer.isBuffer(t) && Buffer.isBuffer(i)) t.copy(i, n, e, e + r);
                else
                    for (; r--;) i[n++] = t[e++]
            }
            t.exports = {
                checkAndInit: function(t, e, i, r, A, a, o) {
                    if (0 === i || 0 != (i & i - 1)) throw Error("N must be > 0 and a power of 2");
                    if (i > 2147483647 / 128 / r) throw Error("Parameter N is too large");
                    if (r > 2147483647 / 128 / A) throw Error("Parameter r is too large");
                    let s, I = Buffer.alloc(256 * r),
                        g = Buffer.alloc(128 * r * i),
                        h = new Int32Array(16),
                        c = new Int32Array(16),
                        u = Buffer.alloc(64),
                        f = n.pbkdf2Sync(t, e, 1, 128 * A * r, "sha256");
                    if (o) {
                        let t = A * i * 2,
                            e = 0;
                        s = function() {
                            ++e, e % 1e3 == 0 && o({
                                current: e,
                                total: t,
                                percent: e / t * 100
                            })
                        }
                    }
                    return {
                        XY: I,
                        V: g,
                        B32: h,
                        x: c,
                        _X: u,
                        B: f,
                        tickCallback: s
                    }
                },
                smix: async function(t, e, i, n, A, a, s, I, g, h, c) {
                    c = c || 5e3;
                    let u, f = 128 * i;
                    for (t.copy(a, 0, e, e + f), u = 0; u < n; u++) a.copy(A, u * f, 0, 0 + f), u % c == 0 && await new Promise(t => setImmediate(t)), r(a, 0, f, i, s, I, g), h && h();
                    for (u = 0; u < n; u++) {
                        let t = 0 + 64 * (2 * i - 1);
                        o(A, (a.readUInt32LE(t) & n - 1) * f, a, 0, f), u % c == 0 && await new Promise(t => setImmediate(t)), r(a, 0, f, i, s, I, g), h && h()
                    }
                    a.copy(t, e, 0, 0 + f)
                },
                smixSync: function(t, e, i, n, A, a, s, I, g, h) {
                    let c, u = 128 * i;
                    for (t.copy(a, 0, e, e + u), c = 0; c < n; c++) a.copy(A, c * u, 0, 0 + u), r(a, 0, u, i, s, I, g), h && h();
                    for (c = 0; c < n; c++) {
                        let t = 0 + 64 * (2 * i - 1);
                        o(A, (a.readUInt32LE(t) & n - 1) * u, a, 0, u), r(a, 0, u, i, s, I, g), h && h()
                    }
                    a.copy(t, e, 0, 0 + u)
                }
            }
        },
        5781: function(t, e) {
            function i(t, e) {
                if (!t) throw new Error(e || "AssertionError")
            }
            i.notEqual = function(t, e, n) {
                i(t != e, n)
            }, i.notOk = function(t, e) {
                i(!t, e)
            }, i.equal = function(t, e, n) {
                i(t == e, n)
            }, i.ok = i, t.exports = i
        },
        5830: function(t, e, i) {
            const n = i(6009);
            n.async = i(6010), t.exports = n
        },
        5843: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TransactionPayload = void 0;
            const n = i(6480);
            class TransactionPayload {
                constructor(t) {
                    this.data = Buffer.from(t || [])
                }
                static fromEncoded(t) {
                    if (!t) return new TransactionPayload("");
                    let e = Buffer.from(t, "base64").toString();
                    return new TransactionPayload(e)
                }
                isEmpty() {
                    return 0 == this.data.length
                }
                encoded() {
                    return this.data.toString("base64")
                }
                valueOf() {
                    return this.data
                }
                toString() {
                    return this.data.toString()
                }
                getEncodedArguments() {
                    return this.toString().split("@")
                }
                getRawArguments() {
                    return this.getEncodedArguments().map(t => Buffer.from(t, "hex"))
                }
                length() {
                    return Buffer.from(this.data).length
                }
                static contractDeploy() {
                    return new n.ContractDeployPayloadBuilder
                }
                static contractUpgrade() {
                    return new n.ContractUpgradePayloadBuilder
                }
                static contractCall() {
                    return new n.ContractCallPayloadBuilder
                }
            }
            e.TransactionPayload = TransactionPayload
        },
        6009: function(t, e, i) {
            const n = i(24),
                {
                    checkAndInit: r,
                    smixSync: A
                } = i(5775);
            t.exports = function(t, e, i, a, o, s, I) {
                const {
                    XY: g,
                    V: h,
                    B32: c,
                    x: u,
                    _X: f,
                    B: C,
                    tickCallback: l
                } = r(t, e, i, a, o, s, I);
                for (var E = 0; E < o; E++) A(C, 128 * E * a, a, i, h, g, f, c, u, l);
                return n.pbkdf2Sync(t, C, 1, s, "sha256")
            }
        },
        6010: function(t, e, i) {
            const n = i(24),
                {
                    checkAndInit: r,
                    smix: A
                } = i(5775);
            t.exports = async function(t, e, i, a, o, s, I, g) {
                const {
                    XY: h,
                    V: c,
                    B32: u,
                    x: f,
                    _X: C,
                    B: l,
                    tickCallback: E
                } = r(t, e, i, a, o, s, I);
                for (var d = 0; d < o; d++) await A(l, 128 * d * a, a, i, c, h, C, u, f, E, g);
                return n.pbkdf2Sync(t, l, 1, s, "sha256")
            }
        },
        6033: function(t, e, i) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(t, e, i, n) {
                    void 0 === n && (n = i), Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, n) {
                    void 0 === n && (n = i), t[n] = e[i]
                }),
                r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                A = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && n(e, t, i);
                    return r(e, t), e
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TransactionHash = e.Transaction = void 0;
            const a = i(5646),
                o = i(5605),
                s = i(7173),
                I = i(6479),
                g = i(5612),
                h = i(5843),
                c = A(i(5487)),
                u = i(9068),
                f = i(9071),
                C = i(6176),
                l = i(9072);
            class Transaction {
                constructor({
                    nonce: t,
                    value: e,
                    receiver: i,
                    sender: n,
                    gasPrice: r,
                    gasLimit: A,
                    data: a,
                    chainID: o,
                    version: g,
                    options: c
                }) {
                    this.nonce = t || 0, this.value = e || 0, this.sender = n, this.receiver = i, this.gasPrice = r || C.TRANSACTION_MIN_GAS_PRICE, this.gasLimit = A, this.data = a || new h.TransactionPayload, this.chainID = o, this.version = g || s.TransactionVersion.withDefaultVersion(), this.options = c || s.TransactionOptions.withDefaultOptions(), this.signature = I.Signature.empty(), this.hash = TransactionHash.empty()
                }
                getNonce() {
                    return this.nonce
                }
                setNonce(t) {
                    this.nonce = t
                }
                getValue() {
                    return this.value
                }
                setValue(t) {
                    this.value = t
                }
                getSender() {
                    return this.sender
                }
                getReceiver() {
                    return this.receiver
                }
                getGasPrice() {
                    return this.gasPrice
                }
                setGasPrice(t) {
                    this.gasPrice = t
                }
                getGasLimit() {
                    return this.gasLimit
                }
                setGasLimit(t) {
                    this.gasLimit = t
                }
                getData() {
                    return this.data
                }
                getChainID() {
                    return this.chainID
                }
                setChainID(t) {
                    this.chainID = t
                }
                getVersion() {
                    return this.version
                }
                getOptions() {
                    return this.options
                }
                getSignature() {
                    return this.signature
                }
                getHash() {
                    return g.guardNotEmpty(this.hash, "hash"), this.hash
                }
                serializeForSigning(t) {
                    let e = this.toPlainObject(t);
                    e.signature && delete e.signature;
                    let i = JSON.stringify(e);
                    return Buffer.from(i)
                }
                toPlainObject(t) {
                    return {
                        nonce: this.nonce.valueOf(),
                        value: this.value.toString(),
                        receiver: this.receiver.bech32(),
                        sender: t ? t.bech32() : this.sender.bech32(),
                        gasPrice: this.gasPrice.valueOf(),
                        gasLimit: this.gasLimit.valueOf(),
                        data: 0 == this.data.length() ? void 0 : this.data.encoded(),
                        chainID: this.chainID.valueOf(),
                        version: this.version.valueOf(),
                        options: 0 == this.options.valueOf() ? void 0 : this.options.valueOf(),
                        signature: this.signature.hex() ? this.signature.hex() : void 0
                    }
                }
                static fromPlainObject(t) {
                    const e = new Transaction({
                        nonce: Number(t.nonce),
                        value: new a.BigNumber(t.value),
                        receiver: o.Address.fromString(t.receiver),
                        sender: o.Address.fromString(t.sender),
                        gasPrice: Number(t.gasPrice),
                        gasLimit: Number(t.gasLimit),
                        data: new h.TransactionPayload(Buffer.from(t.data || "", "base64")),
                        chainID: String(t.chainID),
                        version: new s.TransactionVersion(t.version)
                    });
                    return t.signature && e.applySignature(new I.Signature(t.signature), o.Address.fromString(t.sender)), e
                }
                applySignature(t, e) {
                    this.signature = t, this.sender = e, this.hash = TransactionHash.compute(this)
                }
                toSendable() {
                    return this.toPlainObject()
                }
                computeFee(t) {
                    let e = t.MinGasLimit.valueOf() + this.data.length() * t.GasPerDataByte.valueOf();
                    if (e > this.gasLimit.valueOf()) throw new c.ErrNotEnoughGas(this.gasLimit.valueOf());
                    let i = new a.BigNumber(this.gasPrice.valueOf()),
                        n = new a.BigNumber(e).multipliedBy(i);
                    if (e === this.gasLimit.valueOf()) return n;
                    let r = new a.BigNumber(this.gasLimit.valueOf() - e),
                        A = i.multipliedBy(new a.BigNumber(t.GasPriceModifier.valueOf())),
                        o = r.multipliedBy(A);
                    return n.plus(o)
                }
            }
            e.Transaction = Transaction;
            class TransactionHash extends f.Hash {
                constructor(t) {
                    super(t)
                }
                static compute(t) {
                    let e = (new u.ProtoSerializer).serializeTransaction(t),
                        i = l(32).update(e).digest("hex");
                    return new TransactionHash(i)
                }
            }
            e.TransactionHash = TransactionHash
        },
        7179: function(t, e, i) {
            "use strict";
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.zeroPadStringIfOddLength = e.isPaddedHex = e.numberToPaddedHex = void 0;
            const r = n(i(5646));

            function A(t) {
                return (t = t || "").length % 2 == 1 ? "0" + t : t
            }
            e.numberToPaddedHex = function(t) {
                return A(new r.default(t).toString(16))
            }, e.isPaddedHex = function(t) {
                t = t || "";
                let e = Buffer.from(t, "hex").toString("hex");
                return t.toUpperCase() == e.toUpperCase()
            }, e.zeroPadStringIfOddLength = A
        },
        7182: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MultiESDTNFTTransferPayloadBuilder = e.ESDTNFTTransferPayloadBuilder = e.ESDTTransferPayloadBuilder = void 0;
            const n = i(5605),
                r = i(6034),
                A = i(5569),
                a = i(7183),
                o = i(5843);
            e.ESDTTransferPayloadBuilder = class ESDTTransferPayloadBuilder {
                constructor() {
                    this.payment = a.TokenPayment.fungibleFromAmount("", "0", 0)
                }
                setPayment(t) {
                    return this.payment = t, this
                }
                build() {
                    let t = [A.BytesValue.fromUTF8(this.payment.tokenIdentifier), new A.BigUIntValue(this.payment.valueOf())],
                        {
                            argumentsString: e
                        } = (new r.ArgSerializer).valuesToString(t),
                        i = "ESDTTransfer@" + e;
                    return new o.TransactionPayload(i)
                }
            };
            e.ESDTNFTTransferPayloadBuilder = class ESDTNFTTransferPayloadBuilder {
                constructor() {
                    this.payment = a.TokenPayment.nonFungible("", 0), this.destination = new n.Address("")
                }
                setPayment(t) {
                    return this.payment = t, this
                }
                setDestination(t) {
                    return this.destination = t, this
                }
                build() {
                    let t = [A.BytesValue.fromUTF8(this.payment.tokenIdentifier), new A.U64Value(this.payment.nonce), new A.BigUIntValue(this.payment.valueOf()), new A.AddressValue(this.destination)],
                        {
                            argumentsString: e
                        } = (new r.ArgSerializer).valuesToString(t),
                        i = "ESDTNFTTransfer@" + e;
                    return new o.TransactionPayload(i)
                }
            };
            e.MultiESDTNFTTransferPayloadBuilder = class MultiESDTNFTTransferPayloadBuilder {
                constructor() {
                    this.payments = [], this.destination = new n.Address("")
                }
                setPayments(t) {
                    return this.payments = t, this
                }
                setDestination(t) {
                    return this.destination = t, this
                }
                build() {
                    let t = [new A.AddressValue(this.destination), new A.U16Value(this.payments.length)];
                    for (const e of this.payments) t.push(A.BytesValue.fromUTF8(e.tokenIdentifier), new A.U64Value(e.nonce), new A.BigUIntValue(e.valueOf()));
                    let {
                        argumentsString: e
                    } = (new r.ArgSerializer).valuesToString(t), i = "MultiESDTNFTTransfer@" + e;
                    return new o.TransactionPayload(i)
                }
            }
        },
        7183: function(t, e, i) {
            "use strict";
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TokenPayment = void 0;
            const r = n(i(5646)),
                A = i(5487);
            r.default.set({
                ROUNDING_MODE: 1
            });
            class TokenPayment {
                constructor(t, e, i, n) {
                    let a = new r.default(i);
                    if (!a.isInteger() || a.isNegative()) throw new A.ErrInvalidArgument("bad amountAsBigInteger: " + i);
                    this.tokenIdentifier = t, this.nonce = e, this.amountAsBigInteger = a, this.numDecimals = n
                }
                static egldFromAmount(t) {
                    let e = new r.default(t).shiftedBy(18).decimalPlaces(0);
                    return this.egldFromBigInteger(e)
                }
                static egldFromBigInteger(t) {
                    return new TokenPayment("EGLD", 0, t, 18)
                }
                static fungibleFromAmount(t, e, i) {
                    let n = new r.default(e).shiftedBy(i).decimalPlaces(0);
                    return this.fungibleFromBigInteger(t, n, i)
                }
                static fungibleFromBigInteger(t, e, i = 0) {
                    return new TokenPayment(t, 0, e, i)
                }
                static nonFungible(t, e) {
                    return new TokenPayment(t, e, 1, 0)
                }
                static semiFungible(t, e, i) {
                    return new TokenPayment(t, e, i, 0)
                }
                static metaEsdtFromAmount(t, e, i, n) {
                    let A = new r.default(i).shiftedBy(n).decimalPlaces(0);
                    return this.metaEsdtFromBigInteger(t, e, A, n)
                }
                static metaEsdtFromBigInteger(t, e, i, n = 0) {
                    return new TokenPayment(t, e, i, n)
                }
                toString() {
                    return this.amountAsBigInteger.toFixed(0)
                }
                valueOf() {
                    return this.amountAsBigInteger
                }
                toPrettyString() {
                    return `${this.toRationalNumber()} ${this.tokenIdentifier}`
                }
                toRationalNumber() {
                    return this.amountAsBigInteger.shiftedBy(-this.numDecimals).toFixed(this.numDecimals)
                }
                isEgld() {
                    return "EGLD" == this.tokenIdentifier
                }
                isFungible() {
                    return 0 == this.nonce
                }
            }
            e.TokenPayment = TokenPayment
        },
        9049: function(t, e, i) {
            var n = i(9050);

            function r(t, e) {
                for (var i, n, r = t.length, A = e, a = e; a < r; a++) {
                    var o = t[a];
                    if ("," === o) {
                        i = a;
                        break
                    }
                    if ("]" === o || "}" === o) {
                        i = a - 1;
                        break
                    }
                    if (!C(o)) throw d(t, a, "expecting end of expression or separator")
                }
                return void 0 === i ? n = t[i = r] : (n = t[i], i++), {
                    start: A,
                    end: i,
                    value: n
                }
            }

            function A(t, e) {
                for (var i, n = t.length, r = e, A = e; A < n; A++) {
                    var a = t[A];
                    if (":" === a) {
                        i = A;
                        break
                    }
                    if (!C(a)) throw d(t, A, "expecting ':'")
                }
                if (void 0 === i) throw d(t, A, "expecting ':'");
                return {
                    start: r,
                    end: ++i
                }
            }

            function a(t, e, i, r) {
                for (var A, a, o, f = t.length, l = !1, B = !1, Q = !1, y = !1, w = !1, D = !1, m = e; m < f; m++) {
                    var p = t[m];
                    if (void 0 === A) {
                        if (!C(p)) {
                            if ("[" === p) l = !0;
                            else if ("{" === p) B = !0;
                            else if ('"' === p) Q = !0;
                            else {
                                if (h(t, m)) {
                                    A = m, a = m += 3, o = !0;
                                    break
                                }
                                if (c(t, m)) {
                                    A = m, a = m += 4, o = !1;
                                    break
                                }
                                if (u(t, m)) {
                                    A = m, a = m += 3, o = null;
                                    break
                                }
                                if (E(p)) y = !0;
                                else {
                                    if ("-" !== p) throw d(t, m, "");
                                    y = !0
                                }
                            }
                            A = m
                        }
                    } else {
                        if (l) {
                            var S = g(t, m, i, r);
                            a = S.end, o = S.value;
                            break
                        }
                        if (B) {
                            var v = s(t, m, i, r);
                            a = v.end, o = v.value;
                            break
                        }
                        if (Q && '"' === p && I(t, m - 1)) {
                            a = m, o = n(t.substring(A + 1, a));
                            break
                        }
                        if (y)
                            if (C(p)) D = !0;
                            else {
                                if ("," === p || "]" === p || "}" === p) {
                                    o = parseFloat(t.substring(A, a), 10), a = m - 1;
                                    break
                                }
                                if (E(p) && !D) continue;
                                if ("." !== p || w || D) throw d(t, m, "expecting number");
                                w = !0
                            }
                    }
                }
                if (void 0 === a) {
                    if (!y) throw d(t, m, "unclosed statement");
                    o = parseFloat(t.substring(A, m), 10), a = m - 1
                }
                return {
                    value: o,
                    start: A,
                    end: ++a
                }
            }

            function o(t, e) {
                for (var i, r, A = t.length, a = e; a < A; a++) {
                    var o = t[a];
                    if (void 0 === i) {
                        if (!C(o)) {
                            if ('"' !== o) throw d(t, a, "expecting String");
                            i = a
                        }
                    } else if ('"' === o && I(t, a - 1)) {
                        r = a;
                        break
                    }
                }
                if (void 0 === r) throw d(t, A, "expecting String");
                var s = n(t.substring(i + 1, r));
                if ("" === s) throw d(t, i, "empty string");
                return {
                    start: i,
                    end: ++r,
                    value: s
                }
            }

            function s(t, e, i, n) {
                for (var s = e, I = ",", g = {}, h = [], c = [], u = e; C(t[u]);) u++;
                if ("}" === t[u]) return {
                    start: e,
                    end: u,
                    value: g
                };
                for (;
                    "," === I;) {
                    var f = o(t, s),
                        l = a(t, A(t, f.end).end, i, n),
                        E = r(t, l.end);
                    i || -1 !== h.indexOf(f.value) && (f.value = f.value + "1"), h.push(f.value), c.push(l.value), s = E.end, I = E.value
                }
                if (n) {
                    var d = 0;
                    for (d = 0; d < h.length; d++) g[h[d]] = c[d]
                }
                return {
                    start: e,
                    end: s,
                    value: g
                }
            }

            function I(t, e) {
                for (var i = e, n = 0; i > -1 && "\\" === t[i];) n++, i--;
                return n % 2 == 0
            }

            function g(t, e, i, n) {
                for (var A = e, o = ",", s = [], I = e; C(t[I]);) I++;
                if ("]" === t[I]) return {
                    start: e,
                    end: I,
                    value: s
                };
                for (;
                    "," === o;) {
                    var g = a(t, A, i, n),
                        h = r(t, g.end);
                    n && s.push(g.value), A = h.end, o = h.value
                }
                return {
                    start: e,
                    end: A,
                    value: s
                }
            }

            function h(t, e) {
                return "true" === t.substr(e, 4)
            }

            function c(t, e) {
                return "false" === t.substr(e, 5)
            }

            function u(t, e) {
                return "null" === t.substr(e, 4)
            }
            t.exports = {
                validate: function(t, e) {
                    var i;
                    if (e = e || !1, "string" != typeof t) i = "Input must be a string";
                    else try {
                        a(t, 0, e, !1)
                    } catch (t) {
                        i = t.message
                    }
                    return i
                },
                parse: function(t, e) {
                    if ("string" != typeof t) throw new Error("Input must be a string");
                    return a(t, 0, e = e || !1, !0).value
                }
            };
            var f = new RegExp(/^\s$/);

            function C(t) {
                return f.test(t)
            }
            var l = new RegExp(/^\d$/);

            function E(t) {
                return l.test(t)
            }

            function d(t, e, i) {
                var n, r;
                return n = t.length < e + 10 ? t.substr(B(t.length - 10), t.length) : e - 5 < 0 ? t.substr(0, 10) : t.substr(B(e - 5), 10), r = i ? "Syntax error: " + i + " near " + n : "Syntax error near " + n, new Error(r)
            }

            function B(t) {
                return t < 0 ? 0 : t
            }
        },
        9050: function(t, e, i) {
            "use strict";
            var n = i(469);

            function r(t, e) {
                this.__proto__ = new Error(e), this.__proto__.name = "BackslashError", this.offset = t
            }

            function A(t) {
                return t >= "0" && t <= "7"
            }

            function a(t) {
                return t >= "0" && t <= "9" || t >= "a" && t <= "f" || t >= "A" && t <= "F"
            }

            function o(t) {
                return t = parseInt(t, 16), n.ucs2.encode([t])
            }

            function s(t, e, i) {
                var s = !1,
                    I = [];

                function g(e) {
                    var i = t[e];
                    if (!a(i)) throw new r(e, "Unexpected token ILLEGAL");
                    return i
                }
                for (; e < t.length;) {
                    var h = t[e];
                    if (e++, s) {
                        switch (s = !1, h) {
                            case "n":
                                I.push("\n");
                                continue;
                            case "r":
                                I.push("\r");
                                continue;
                            case "f":
                                I.push("\f");
                                continue;
                            case "b":
                                I.push("\b");
                                continue;
                            case "t":
                                I.push("\t");
                                continue;
                            case "v":
                                I.push("\v");
                                continue;
                            case "\\":
                                I.push("\\");
                                continue
                        }
                        if ("x" === h) {
                            I.push(o(g(e) + g(e + 1))), e += 2;
                            continue
                        }
                        if ("u" === h) {
                            I.push(o(g(e) + g(e + 1) + g(e + 2) + g(e + 3))), e += 4;
                            continue
                        }
                        if (A(h)) {
                            var c;
                            A(c = t[e]) && (e++, h += c, A(c = t[e]) && h[0] <= "3" && (e++, h += c)), I.push(n.ucs2.encode([parseInt(h, 8)]));
                            continue
                        }
                        I.push(h)
                    } else if ("\\" === h) s = !0;
                    else {
                        if (h === i) {
                            e--;
                            break
                        }
                        I.push(h)
                    }
                }
                return 3 === arguments.length ? {
                    end: e,
                    value: I.join("")
                } : I.join("")
            }
            t.exports = function(t) {
                return s(t, 0)
            }, t.exports.parseUntil = function(t, e, i) {
                return s(t, e, i)
            }
        },
        9072: function(t, e, i) {
            var n = i(5781),
                r = i(9073);

            function A(t, e, i) {
                var n = t[e] + t[i],
                    r = t[e + 1] + t[i + 1];
                n >= 4294967296 && r++, t[e] = n, t[e + 1] = r
            }

            function a(t, e, i, n) {
                var r = t[e] + i;
                i < 0 && (r += 4294967296);
                var A = t[e + 1] + n;
                r >= 4294967296 && A++, t[e] = r, t[e + 1] = A
            }

            function o(t, e) {
                return t[e] ^ t[e + 1] << 8 ^ t[e + 2] << 16 ^ t[e + 3] << 24
            }

            function s(t, e, i, n, r, o) {
                var s = c[r],
                    I = c[r + 1],
                    g = c[o],
                    u = c[o + 1];
                A(h, t, e), a(h, t, s, I);
                var f = h[n] ^ h[t],
                    C = h[n + 1] ^ h[t + 1];
                h[n] = C, h[n + 1] = f, A(h, i, n), f = h[e] ^ h[i], C = h[e + 1] ^ h[i + 1], h[e] = f >>> 24 ^ C << 8, h[e + 1] = C >>> 24 ^ f << 8, A(h, t, e), a(h, t, g, u), f = h[n] ^ h[t], C = h[n + 1] ^ h[t + 1], h[n] = f >>> 16 ^ C << 16, h[n + 1] = C >>> 16 ^ f << 16, A(h, i, n), f = h[e] ^ h[i], C = h[e + 1] ^ h[i + 1], h[e] = C >>> 31 ^ f << 1, h[e + 1] = f >>> 31 ^ C << 1
            }
            var I = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]),
                g = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3].map((function(t) {
                    return 2 * t
                }))),
                h = new Uint32Array(32),
                c = new Uint32Array(32);

            function u(t, e) {
                var i = 0;
                for (i = 0; i < 16; i++) h[i] = t.h[i], h[i + 16] = I[i];
                for (h[24] = h[24] ^ t.t, h[25] = h[25] ^ t.t / 4294967296, e && (h[28] = ~h[28], h[29] = ~h[29]), i = 0; i < 32; i++) c[i] = o(t.b, 4 * i);
                for (i = 0; i < 12; i++) s(0, 8, 16, 24, g[16 * i + 0], g[16 * i + 1]), s(2, 10, 18, 26, g[16 * i + 2], g[16 * i + 3]), s(4, 12, 20, 28, g[16 * i + 4], g[16 * i + 5]), s(6, 14, 22, 30, g[16 * i + 6], g[16 * i + 7]), s(0, 10, 20, 30, g[16 * i + 8], g[16 * i + 9]), s(2, 12, 22, 24, g[16 * i + 10], g[16 * i + 11]), s(4, 14, 16, 26, g[16 * i + 12], g[16 * i + 13]), s(6, 8, 18, 28, g[16 * i + 14], g[16 * i + 15]);
                for (i = 0; i < 16; i++) t.h[i] = t.h[i] ^ h[i] ^ h[i + 16]
            }
            var f = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

            function C(t, e, i, n) {
                f.fill(0), this.b = new Uint8Array(128), this.h = new Uint32Array(16), this.t = 0, this.c = 0, this.outlen = t, f[0] = t, e && (f[1] = e.length), f[2] = 1, f[3] = 1, i && f.set(i, 32), n && f.set(n, 48);
                for (var r = 0; r < 16; r++) this.h[r] = I[r] ^ o(f, 4 * r);
                e && (l(this, e), this.c = 128)
            }

            function l(t, e) {
                for (var i = 0; i < e.length; i++) 128 === t.c && (t.t += t.c, u(t, !1), t.c = 0), t.b[t.c++] = e[i]
            }

            function E(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }
            C.prototype.update = function(t) {
                return n(null != t, "input must be Uint8Array or Buffer"), l(this, t), this
            }, C.prototype.digest = function(t) {
                var e = t && "binary" !== t && "hex" !== t ? t : new Uint8Array(this.outlen);
                return n(e.length >= this.outlen, "out must have at least outlen bytes of space"),
                    function(t, e) {
                        t.t += t.c;
                        for (; t.c < 128;) t.b[t.c++] = 0;
                        u(t, !0);
                        for (var i = 0; i < t.outlen; i++) e[i] = t.h[i >> 2] >> 8 * (3 & i)
                    }(this, e), "hex" === t ? function(t) {
                        for (var e = "", i = 0; i < t.length; i++) e += E(t[i]);
                        return e
                    }(e) : e
            }, C.prototype.final = C.prototype.digest, C.ready = function(t) {
                r.ready((function() {
                    t()
                }))
            };
            var d = C;
            t.exports = function(t, e, i, r, A) {
                return !0 !== A && (n(t >= B, "outlen must be at least " + B + ", was given " + t), n(t <= Q, "outlen must be at most " + Q + ", was given " + t), null != e && n(e.length >= y, "key must be at least " + y + ", was given " + e.length), null != e && n(e.length <= w, "key must be at most " + w + ", was given " + e.length), null != i && n(i.length === D, "salt must be exactly " + D + ", was given " + i.length), null != r && n(r.length === m, "personal must be exactly " + m + ", was given " + r.length)), new d(t, e, i, r)
            }, t.exports.ready = function(t) {
                r.ready((function() {
                    t()
                }))
            }, t.exports.WASM_SUPPORTED = r.SUPPORTED, t.exports.WASM_LOADED = !1;
            var B = t.exports.BYTES_MIN = 16,
                Q = t.exports.BYTES_MAX = 64,
                y = (t.exports.BYTES = 32, t.exports.KEYBYTES_MIN = 16),
                w = t.exports.KEYBYTES_MAX = 64,
                D = (t.exports.KEYBYTES = 32, t.exports.SALTBYTES = 16),
                m = t.exports.PERSONALBYTES = 16;
            r.ready((function(e) {
                e || (t.exports.WASM_LOADED = !0, d = r)
            }))
        },
        9073: function(t, e, i) {
            var n = i(5781),
                r = i(9074)(),
                A = 64,
                a = [];
            t.exports = u;
            var o = t.exports.BYTES_MIN = 16,
                s = t.exports.BYTES_MAX = 64,
                I = (t.exports.BYTES = 32, t.exports.KEYBYTES_MIN = 16),
                g = t.exports.KEYBYTES_MAX = 64,
                h = (t.exports.KEYBYTES = 32, t.exports.SALTBYTES = 16),
                c = t.exports.PERSONALBYTES = 16;

            function u(t, e, i, f, C) {
                if (!(this instanceof u)) return new u(t, e, i, f, C);
                if (!r || !r.exports) throw new Error("WASM not loaded. Wait for Blake2b.ready(cb)");
                t || (t = 32), !0 !== C && (n(t >= o, "digestLength must be at least " + o + ", was given " + t), n(t <= s, "digestLength must be at most " + s + ", was given " + t), null != e && n(e.length >= I, "key must be at least " + I + ", was given " + e.length), null != e && n(e.length <= g, "key must be at least " + g + ", was given " + e.length), null != i && n(i.length === h, "salt must be exactly " + h + ", was given " + i.length), null != f && n(f.length === c, "personal must be exactly " + c + ", was given " + f.length)), a.length || (a.push(A), A += 216), this.digestLength = t, this.finalized = !1, this.pointer = a.pop(), r.memory.fill(0, 0, 64), r.memory[0] = this.digestLength, r.memory[1] = e ? e.length : 0, r.memory[2] = 1, r.memory[3] = 1, i && r.memory.set(i, 32), f && r.memory.set(f, 48), this.pointer + 216 > r.memory.length && r.realloc(this.pointer + 216), r.exports.blake2b_init(this.pointer, this.digestLength), e && (this.update(e), r.memory.fill(0, A, A + e.length), r.memory[this.pointer + 200] = 128)
            }

            function f() {}

            function C(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }
            u.prototype.update = function(t) {
                return n(!1 === this.finalized, "Hash instance finalized"), n(t, "input must be TypedArray or Buffer"), A + t.length > r.memory.length && r.realloc(A + t.length), r.memory.set(t, A), r.exports.blake2b_update(this.pointer, A, A + t.length), this
            }, u.prototype.digest = function(t) {
                if (n(!1 === this.finalized, "Hash instance finalized"), this.finalized = !0, a.push(this.pointer), r.exports.blake2b_final(this.pointer), !t || "binary" === t) return r.memory.slice(this.pointer + 128, this.pointer + 128 + this.digestLength);
                if ("hex" === t) return function(t, e, i) {
                    for (var n = "", r = 0; r < i; r++) n += C(t[e + r]);
                    return n
                }(r.memory, this.pointer + 128, this.digestLength);
                n(t.length >= this.digestLength, "input must be TypedArray or Buffer");
                for (var e = 0; e < this.digestLength; e++) t[e] = r.memory[this.pointer + 128 + e];
                return t
            }, u.prototype.final = u.prototype.digest, u.WASM = r && r.buffer, u.SUPPORTED = "undefined" != typeof WebAssembly, u.ready = function(t) {
                return t || (t = f), r ? new Promise((function(e, i) {
                    r.onload((function(n) {
                        n ? i() : e(), t(n)
                    }))
                })) : t(new Error("WebAssembly not supported"))
            }, u.prototype.ready = u.ready
        },
        9074: function(t, e, i) {
            function n(t) {
                if (!n.supported) return null;
                var e, A = t && t.imports,
                    a = (e = "AGFzbQEAAAABEANgAn9/AGADf39/AGABfwADBQQAAQICBQUBAQroBwdNBQZtZW1vcnkCAAxibGFrZTJiX2luaXQAAA5ibGFrZTJiX3VwZGF0ZQABDWJsYWtlMmJfZmluYWwAAhBibGFrZTJiX2NvbXByZXNzAAMK00AElgMAIABCADcDACAAQQhqQgA3AwAgAEEQakIANwMAIABBGGpCADcDACAAQSBqQgA3AwAgAEEoakIANwMAIABBMGpCADcDACAAQThqQgA3AwAgAEHAAGpCADcDACAAQcgAakIANwMAIABB0ABqQgA3AwAgAEHYAGpCADcDACAAQeAAakIANwMAIABB6ABqQgA3AwAgAEHwAGpCADcDACAAQfgAakIANwMAIABBgAFqQoiS853/zPmE6gBBACkDAIU3AwAgAEGIAWpCu86qptjQ67O7f0EIKQMAhTcDACAAQZABakKr8NP0r+68tzxBECkDAIU3AwAgAEGYAWpC8e30+KWn/aelf0EYKQMAhTcDACAAQaABakLRhZrv+s+Uh9EAQSApAwCFNwMAIABBqAFqQp/Y+dnCkdqCm39BKCkDAIU3AwAgAEGwAWpC6/qG2r+19sEfQTApAwCFNwMAIABBuAFqQvnC+JuRo7Pw2wBBOCkDAIU3AwAgAEHAAWpCADcDACAAQcgBakIANwMAIABB0AFqQgA3AwALbQEDfyAAQcABaiEDIABByAFqIQQgBCkDAKchBQJAA0AgASACRg0BIAVBgAFGBEAgAyADKQMAIAWtfDcDAEEAIQUgABADCyAAIAVqIAEtAAA6AAAgBUEBaiEFIAFBAWohAQwACwsgBCAFrTcDAAtkAQN/IABBwAFqIQEgAEHIAWohAiABIAEpAwAgAikDAHw3AwAgAEHQAWpCfzcDACACKQMApyEDAkADQCADQYABRg0BIAAgA2pBADoAACADQQFqIQMMAAsLIAIgA603AwAgABADC+U7AiB+CX8gAEGAAWohISAAQYgBaiEiIABBkAFqISMgAEGYAWohJCAAQaABaiElIABBqAFqISYgAEGwAWohJyAAQbgBaiEoICEpAwAhASAiKQMAIQIgIykDACEDICQpAwAhBCAlKQMAIQUgJikDACEGICcpAwAhByAoKQMAIQhCiJLznf/M+YTqACEJQrvOqqbY0Ouzu38hCkKr8NP0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", "function" == typeof atob ? new Uint8Array(atob(e).split("").map(r)) : new(i(12).Buffer)(e, "base64")),
                    o = null,
                    s = {
                        buffer: a,
                        memory: null,
                        exports: null,
                        realloc: function(t) {
                            s.exports.memory.grow(Math.ceil(Math.abs(t - s.memory.length) / 65536)), s.memory = new Uint8Array(s.exports.memory.buffer)
                        },
                        onload: I
                    };
                return I((function() {})), s;

                function I(e) {
                    if (s.exports) return e();
                    if (o) o.then(e.bind(null, null)).catch(e);
                    else {
                        try {
                            if (t && t.async) throw new Error("async");
                            g({
                                instance: new WebAssembly.Instance(new WebAssembly.Module(a), A)
                            })
                        } catch (t) {
                            o = WebAssembly.instantiate(a, A).then(g)
                        }
                        I(e)
                    }
                }

                function g(t) {
                    s.exports = t.instance.exports, s.memory = s.exports.memory && s.exports.memory.buffer && new Uint8Array(s.exports.memory.buffer)
                }
            }

            function r(t) {
                return t.charCodeAt(0)
            }
            t.exports = n, n.supported = "undefined" != typeof WebAssembly
        },
        9075: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TransactionFactory = void 0;
            const n = i(7182),
                r = i(6033),
                A = i(5605);
            e.TransactionFactory = class TransactionFactory {
                constructor(t) {
                    this.gasEstimator = t
                }
                createEGLDTransfer(t) {
                    var e;
                    const i = (null === (e = t.data) || void 0 === e ? void 0 : e.length()) || 0,
                        n = this.gasEstimator.forEGLDTransfer(i);
                    return new r.Transaction({
                        nonce: t.nonce,
                        value: t.value,
                        receiver: t.receiver,
                        sender: t.sender || A.Address.Zero(),
                        gasPrice: t.gasPrice,
                        gasLimit: t.gasLimit || n,
                        data: t.data,
                        chainID: t.chainID
                    })
                }
                createESDTTransfer(t) {
                    const e = (new n.ESDTTransferPayloadBuilder).setPayment(t.payment).build(),
                        i = e.length() || 0,
                        a = this.gasEstimator.forESDTTransfer(i);
                    return new r.Transaction({
                        nonce: t.nonce,
                        receiver: t.receiver,
                        sender: t.sender || A.Address.Zero(),
                        gasPrice: t.gasPrice,
                        gasLimit: t.gasLimit || a,
                        data: e,
                        chainID: t.chainID
                    })
                }
                createESDTNFTTransfer(t) {
                    const e = (new n.ESDTNFTTransferPayloadBuilder).setPayment(t.payment).setDestination(t.destination).build(),
                        i = e.length() || 0,
                        A = this.gasEstimator.forESDTNFTTransfer(i);
                    return new r.Transaction({
                        nonce: t.nonce,
                        receiver: t.sender,
                        sender: t.sender,
                        gasPrice: t.gasPrice,
                        gasLimit: t.gasLimit || A,
                        data: e,
                        chainID: t.chainID
                    })
                }
                createMultiESDTNFTTransfer(t) {
                    const e = (new n.MultiESDTNFTTransferPayloadBuilder).setPayments(t.payments).setDestination(t.destination).build(),
                        i = e.length() || 0,
                        A = this.gasEstimator.forMultiESDTNFTTransfer(i, t.payments.length);
                    return new r.Transaction({
                        nonce: t.nonce,
                        receiver: t.sender,
                        sender: t.sender,
                        gasPrice: t.gasPrice,
                        gasLimit: t.gasLimit || A,
                        data: e,
                        chainID: t.chainID
                    })
                }
            }
        },
        9076: function(t, e, i) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, i, n) {
                return new(i || (i = Promise))((function(r, A) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (t) {
                            A(t)
                        }
                    }

                    function o(t) {
                        try {
                            s(n.throw(t))
                        } catch (t) {
                            A(t)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                            t(e)
                        }))).then(a, o)
                    }
                    s((n = n.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TransactionWatcher = void 0;
            const r = i(7172),
                A = i(6175),
                a = i(5487);
            class TransactionWatcher {
                constructor(t, e = TransactionWatcher.DefaultPollingInterval, i = TransactionWatcher.DefaultTimeout) {
                    this.fetcher = new TransactionFetcherWithTracing(t), this.pollingInterval = e, this.timeout = i
                }
                awaitPending(t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.awaitConditionally(t => t.status.isPending(), () => n(this, void 0, void 0, (function*() {
                            return yield this.fetcher.getTransaction(t.getHash().hex())
                        })), () => new a.ErrExpectedTransactionStatusNotReached)
                    }))
                }
                awaitCompleted(t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.awaitConditionally(t => t.isCompleted, () => n(this, void 0, void 0, (function*() {
                            return yield this.fetcher.getTransaction(t.getHash().hex())
                        })), () => new a.ErrExpectedTransactionStatusNotReached)
                    }))
                }
                awaitAllEvents(t, e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.awaitConditionally(t => {
                            const i = this.getAllTransactionEvents(t).map(t => t.identifier);
                            return e.every(t => i.includes(t))
                        }, () => n(this, void 0, void 0, (function*() {
                            return yield this.fetcher.getTransaction(t.getHash().hex())
                        })), () => new a.ErrExpectedTransactionEventsNotFound)
                    }))
                }
                awaitAnyEvent(t, e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.awaitConditionally(t => {
                            const i = this.getAllTransactionEvents(t).map(t => t.identifier);
                            return null != e.find(t => i.includes(t))
                        }, () => n(this, void 0, void 0, (function*() {
                            return yield this.fetcher.getTransaction(t.getHash().hex())
                        })), () => new a.ErrExpectedTransactionEventsNotFound)
                    }))
                }
                awaitOnCondition(t, e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.awaitConditionally(e, () => n(this, void 0, void 0, (function*() {
                            return yield this.fetcher.getTransaction(t.getHash().hex())
                        })), () => new a.ErrExpectedTransactionStatusNotReached)
                    }))
                }
                awaitConditionally(t, e, i) {
                    return n(this, void 0, void 0, (function*() {
                        const n = new r.AsyncTimer("watcher:periodic"),
                            o = new r.AsyncTimer("watcher:timeout");
                        let s = !1,
                            I = void 0,
                            g = !1;
                        for (o.start(this.timeout).finally(() => {
                                o.stop(), s = !0
                            }); !s;) {
                            yield n.start(this.pollingInterval);
                            try {
                                if (I = yield e(), g = t(I), g || s) break
                            } catch (t) {
                                if (A.Logger.debug("TransactionWatcher.awaitConditionally(): cannot (yet) fetch data."), !(t instanceof a.Err)) throw t
                            }
                        }
                        if (o.isStopped() || o.stop(), !I || !g) throw i();
                        return I
                    }))
                }
                getAllTransactionEvents(t) {
                    const e = [...t.logs.events];
                    for (const i of t.contractResults.items) e.push(...i.logs.events);
                    return e
                }
            }
            e.TransactionWatcher = TransactionWatcher, TransactionWatcher.DefaultPollingInterval = 6e3, TransactionWatcher.DefaultTimeout = 15 * TransactionWatcher.DefaultPollingInterval, TransactionWatcher.NoopOnStatusReceived = t => {};
            class TransactionFetcherWithTracing {
                constructor(t) {
                    this.fetcher = t
                }
                getTransaction(t) {
                    return n(this, void 0, void 0, (function*() {
                        return A.Logger.debug(`transactionWatcher, getTransaction(${t})`), yield this.fetcher.getTransaction(t)
                    }))
                }
            }
        },
        9083: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TokenTransferProperties = e.TransactionMetadataTransfer = e.TransactionMetadata = e.TransactionToDecode = e.TransactionDecoder = void 0;
            const n = i(9084);
            e.TransactionDecoder = class TransactionDecoder {
                getTransactionMetadata(t) {
                    const e = this.getNormalTransactionMetadata(t),
                        i = this.getEsdtTransactionMetadata(e);
                    if (i) return i;
                    const n = this.getNftTransferMetadata(e);
                    if (n) return n;
                    const r = this.getMultiTransferMetadata(e);
                    return r || e
                }
                getNormalTransactionMetadata(t) {
                    const e = new TransactionMetadata;
                    if (e.sender = t.sender, e.receiver = t.receiver, e.value = BigInt(t.value), t.data) {
                        const i = this.base64Decode(t.data).split("@"),
                            n = i.slice(1);
                        if (n.every(t => this.isSmartContractArgument(t)) && (e.functionName = i[0], e.functionArgs = n), "relayedTx" === e.functionName && 1 === e.functionArgs.length) try {
                            const t = JSON.parse(this.hexToString(e.functionArgs[0]));
                            return t.value = t.value.toString(), t.sender = this.bech32Encode(this.base64ToHex(t.sender)), t.receiver = this.bech32Encode(this.base64ToHex(t.receiver)), this.getNormalTransactionMetadata(t)
                        } catch (t) {}
                        if ("relayedTxV2" === e.functionName && 4 === e.functionArgs.length) try {
                            const i = new TransactionToDecode;
                            return i.sender = t.receiver, i.receiver = this.bech32Encode(e.functionArgs[0]), i.data = this.base64Encode(this.hexToString(e.functionArgs[2])), i.value = "0", this.getNormalTransactionMetadata(i)
                        } catch (t) {}
                    }
                    try {
                        "SmartContractResult" === t.type && ("MultiESDTNFTTransfer" === e.functionName && e.functionArgs.length > 0 && this.bech32Encode(e.functionArgs[0]) === e.receiver && (e.receiver = e.sender), "ESDTNFTTransfer" === e.functionName && e.functionArgs.length > 3 && this.bech32Encode(e.functionArgs[3]) === e.receiver && (e.receiver = e.sender))
                    } catch (t) {}
                    return e
                }
                getMultiTransferMetadata(t) {
                    if (t.sender !== t.receiver) return;
                    if ("MultiESDTNFTTransfer" !== t.functionName) return;
                    const e = t.functionArgs;
                    if (e.length < 3) return;
                    if (!this.isAddressValid(e[0])) return;
                    const i = this.bech32Encode(e[0]),
                        n = this.hexToNumber(e[1]),
                        r = new TransactionMetadata;
                    r.transfers || (r.transfers = []);
                    let A = 2;
                    for (let t = 0; t < n; t++) {
                        const t = this.hexToString(e[A++]),
                            i = e[A++],
                            n = this.hexToBigInt(e[A++]);
                        i ? r.transfers.push({
                            value: n,
                            properties: {
                                collection: t,
                                identifier: `${t}-${i}`
                            }
                        }) : r.transfers.push({
                            value: n,
                            properties: {
                                token: t
                            }
                        })
                    }
                    return r.sender = t.sender, r.receiver = i, e.length > A && (r.functionName = this.hexToString(e[A++]), r.functionArgs = e.slice(A++)), r
                }
                getNftTransferMetadata(t) {
                    if (t.sender !== t.receiver) return;
                    if ("ESDTNFTTransfer" !== t.functionName) return;
                    const e = t.functionArgs;
                    if (e.length < 4) return;
                    if (!this.isAddressValid(e[3])) return;
                    const i = this.hexToString(e[0]),
                        n = e[1],
                        r = this.hexToBigInt(e[2]),
                        A = this.bech32Encode(e[3]),
                        a = new TransactionMetadata;
                    return a.sender = t.sender, a.receiver = A, a.value = r, e.length > 4 && (a.functionName = this.hexToString(e[4]), a.functionArgs = e.slice(5)), a.transfers = [{
                        value: r,
                        properties: {
                            collection: i,
                            identifier: `${i}-${n}`
                        }
                    }], a
                }
                base64Encode(t) {
                    return Buffer.from(t).toString("base64")
                }
                base64Decode(t) {
                    return Buffer.from(t, "base64").toString("binary")
                }
                hexToNumber(t) {
                    return parseInt(t, 16)
                }
                getEsdtTransactionMetadata(t) {
                    if ("ESDTTransfer" !== t.functionName) return;
                    const e = t.functionArgs;
                    if (e.length < 2) return;
                    const i = this.hexToString(e[0]),
                        n = this.hexToBigInt(e[1]),
                        r = new TransactionMetadata;
                    return r.sender = t.sender, r.receiver = t.receiver, e.length > 2 && (r.functionName = this.hexToString(e[2]), r.functionArgs = e.slice(3)), r.transfers = [{
                        value: n,
                        properties: {
                            identifier: i
                        }
                    }], r.value = t.value, r
                }
                bech32Encode(t) {
                    const e = Buffer.from(t, "hex");
                    let i = n.bech32.toWords(e);
                    return n.bech32.encode("erd", i)
                }
                isAddressValid(t) {
                    return 32 == Buffer.from(t, "hex").length
                }
                isSmartContractArgument(t) {
                    return !!this.isHex(t) && t.length % 2 == 0
                }
                isHex(t) {
                    return !1 === new RegExp(/[^a-f0-9]/gi).test(t)
                }
                base64ToHex(t) {
                    return Buffer.from(t, "base64").toString("hex")
                }
                hexToString(t) {
                    return Buffer.from(t, "hex").toString("ascii")
                }
                hexToBigInt(t) {
                    return t ? BigInt("0x" + t) : BigInt(0)
                }
            };
            class TransactionToDecode {
                constructor() {
                    this.sender = "", this.receiver = "", this.data = "", this.value = "0", this.type = ""
                }
            }
            e.TransactionToDecode = TransactionToDecode;
            class TransactionMetadata {
                constructor() {
                    this.sender = "", this.receiver = "", this.value = BigInt(0), this.functionArgs = []
                }
            }
            e.TransactionMetadata = TransactionMetadata;
            e.TransactionMetadataTransfer = class TransactionMetadataTransfer {
                constructor() {
                    this.value = BigInt(0)
                }
            };
            e.TokenTransferProperties = class TokenTransferProperties {}
        },
        9084: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.bech32m = e.bech32 = void 0;
            const n = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
                r = {};
            for (let t = 0; t < n.length; t++) {
                const e = n.charAt(t);
                r[e] = t
            }

            function A(t) {
                const e = t >> 25;
                return (33554431 & t) << 5 ^ 996825010 & -(e >> 0 & 1) ^ 642813549 & -(e >> 1 & 1) ^ 513874426 & -(e >> 2 & 1) ^ 1027748829 & -(e >> 3 & 1) ^ 705979059 & -(e >> 4 & 1)
            }

            function a(t) {
                let e = 1;
                for (let i = 0; i < t.length; ++i) {
                    const n = t.charCodeAt(i);
                    if (n < 33 || n > 126) return "Invalid prefix (" + t + ")";
                    e = A(e) ^ n >> 5
                }
                e = A(e);
                for (let i = 0; i < t.length; ++i) {
                    const n = t.charCodeAt(i);
                    e = A(e) ^ 31 & n
                }
                return e
            }

            function o(t, e, i, n) {
                let r = 0,
                    A = 0;
                const a = (1 << i) - 1,
                    o = [];
                for (let n = 0; n < t.length; ++n)
                    for (r = r << e | t[n], A += e; A >= i;) A -= i, o.push(r >> A & a);
                if (n) A > 0 && o.push(r << i - A & a);
                else {
                    if (A >= e) return "Excess padding";
                    if (r << i - A & a) return "Non-zero padding"
                }
                return o
            }

            function s(t) {
                return o(t, 8, 5, !0)
            }

            function I(t) {
                const e = o(t, 5, 8, !1);
                if (Array.isArray(e)) return e
            }

            function g(t) {
                const e = o(t, 5, 8, !1);
                if (Array.isArray(e)) return e;
                throw new Error(e)
            }

            function h(t) {
                let e;

                function i(t, i) {
                    if (i = i || 90, t.length < 8) return t + " too short";
                    if (t.length > i) return "Exceeds length limit";
                    const n = t.toLowerCase(),
                        o = t.toUpperCase();
                    if (t !== n && t !== o) return "Mixed-case string " + t;
                    const s = (t = n).lastIndexOf("1");
                    if (-1 === s) return "No separator character for " + t;
                    if (0 === s) return "Missing prefix for " + t;
                    const I = t.slice(0, s),
                        g = t.slice(s + 1);
                    if (g.length < 6) return "Data too short";
                    let h = a(I);
                    if ("string" == typeof h) return h;
                    const c = [];
                    for (let t = 0; t < g.length; ++t) {
                        const e = g.charAt(t),
                            i = r[e];
                        if (void 0 === i) return "Unknown character " + e;
                        h = A(h) ^ i, t + 6 >= g.length || c.push(i)
                    }
                    return h !== e ? "Invalid checksum for " + t : {
                        prefix: I,
                        words: c
                    }
                }
                return e = "bech32" === t ? 1 : 734539939, {
                    decodeUnsafe: function(t, e) {
                        const n = i(t, e);
                        if ("object" == typeof n) return n
                    },
                    decode: function(t, e) {
                        const n = i(t, e);
                        if ("object" == typeof n) return n;
                        throw new Error(n)
                    },
                    encode: function(t, i, r) {
                        if (r = r || 90, t.length + 7 + i.length > r) throw new TypeError("Exceeds length limit");
                        let o = a(t = t.toLowerCase());
                        if ("string" == typeof o) throw new Error(o);
                        let s = t + "1";
                        for (let t = 0; t < i.length; ++t) {
                            const e = i[t];
                            if (e >> 5 != 0) throw new Error("Non 5-bit word");
                            o = A(o) ^ e, s += n.charAt(e)
                        }
                        for (let t = 0; t < 6; ++t) o = A(o);
                        o ^= e;
                        for (let t = 0; t < 6; ++t) {
                            s += n.charAt(o >> 5 * (5 - t) & 31)
                        }
                        return s
                    },
                    toWords: s,
                    fromWordsUnsafe: I,
                    fromWords: g
                }
            }
            e.bech32 = h("bech32"), e.bech32m = h("bech32m")
        }
    }
]);