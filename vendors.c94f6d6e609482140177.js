(window.webpackJsonp = window.webpackJsonp || []).push([
    [318], {
        5402: function(e, t, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(162),
                n = a(9174),
                i = r(a(73)),
                c = r(a(461)),
                o = r(a(67)),
                u = r(a(1408)),
                d = a(26),
                l = a(5664),
                y = a(930);
            class SOLCoin extends((0, l.NftMixin)((0, y.HasProviders)((0, y.HasBlockScanner)(c.default)))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: a,
                    explorers: r,
                    txWebUrl: s,
                    socket: n
                }) {
                    const i = {
                        alias: e,
                        notify: t,
                        name: "Solana",
                        ticker: "SOL",
                        decimal: 9,
                        derivation: "m/44'/501'/0'",
                        unspendableBalance: "0",
                        explorers: r,
                        txWebUrl: s,
                        socket: n,
                        feeData: a
                    };
                    o.default.register("stake_validators_sol"), super(i), this.fee = a && a.fee || "7000", this.feeData = a, this.feePerByte = 0, this.coefficient = 0, this.reserveForStake = a.reserveForStake || "28000", this.balances = {}
                }
                getPrivateKey() {
                    return Buffer.from(this.privateKey, "hex")
                }
                async loadWallet(e) {
                    const t = (0, n.derivePath)("m/44'/501'/0'", e).key,
                        a = new s.Account(i.default.sign.keyPair.fromSeed(t).secretKey);
                    this.privateKey = a.secretKey.toString("hex"), this.address = a.publicKey.toString()
                }
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    return (new s.Transaction).add(s.SystemProgram.transfer({
                        fromPubkey: new s.PublicKey(this.address),
                        toPubkey: new s.PublicKey(e),
                        lamports: t
                    }))
                }
                async getFee() {
                    try {
                        const e = await this.getProvider("balance").getFee();
                        return new this.BN(e)
                    } catch {
                        return new this.BN(this.fee)
                    }
                }
                getNftFee() {
                    return this.getFee()
                }
                async sendTransaction(e) {
                    if (!(e instanceof s.Transaction)) {
                        return await this.getProvider("send").sendRawTransaction(e)
                    }
                    const t = {
                        secretKey: this.getPrivateKey(),
                        publicKey: new s.PublicKey(this.address)
                    };
                    return await this.getProvider("send").sendTransaction({
                        rawtx: e,
                        signer: t
                    })
                }
                validateAddress(e) {
                    try {
                        const t = new s.PublicKey(e);
                        return s.PublicKey.isOnCurve(t)
                    } catch {
                        return !1
                    }
                }
                async connectSocket() {
                    this.getProvider("node").connectSocket(this.address)
                }
                createStakeAccount(e, t) {
                    const {
                        secretKey: a,
                        publicKey: r
                    } = s.Keypair.generate(), n = new s.PublicKey(e), i = r, c = a, o = new s.Authorized(n, n), u = new s.Lockup(0, 0, n), d = Number(t);
                    return {
                        createStakeAccountInstructions: s.StakeProgram.createAccount({
                            fromPubkey: n,
                            stakePubkey: i,
                            authorized: o,
                            lockup: u,
                            lamports: d
                        }).instructions,
                        stakePubkey: i,
                        stakeSeckey: c,
                        authorized: o,
                        lockup: u
                    }
                }
                async createDelegationTransaction({
                    validator: e,
                    amount: t
                }) {
                    const {
                        createStakeAccountInstructions: a,
                        stakePubkey: r,
                        stakeSeckey: n,
                        authorized: i
                    } = this.createStakeAccount(this.address, t), c = new s.PublicKey(e), o = {
                        stakePubkey: r,
                        authorizedPubkey: i.staker,
                        votePubkey: c
                    }, l = [...a, ...s.StakeProgram.delegate(o).instructions], y = new s.Transaction;
                    y.add(...l);
                    const h = [{
                            publicKey: i.staker,
                            secretKey: Buffer.from(this.privateKey, "hex")
                        }, {
                            publicKey: r,
                            secretKey: n
                        }],
                        {
                            blockhash: k
                        } = await this.getProvider("node").getLatestBlock();
                    return y.recentBlockhash = k, y.feePayer = i.staker, y.sign(...h), u.default.setAddrCache({
                        ticker: this.ticker,
                        type: d.STAKE_ADDR_TYPE,
                        addresses: [r.toBase58()]
                    }), y.serialize()
                }
                async createDeactivateStakeTransaction({
                    stakeAccount: e,
                    ownerAddress: t = this.address
                }) {
                    const a = {
                        stakePubkey: new s.PublicKey(e),
                        authorizedPubkey: new s.PublicKey(t)
                    };
                    return s.StakeProgram.deactivate(a)
                }
                async createUndelegationTransaction({
                    stakeAccount: e,
                    ownerAddress: t = this.address,
                    amount: a
                }) {
                    const r = new s.PublicKey(e),
                        n = new s.PublicKey(t),
                        i = {
                            stakePubkey: r,
                            authorizedPubkey: n,
                            toPubkey: new s.PublicKey(t),
                            custodianPubkey: n,
                            lamports: a
                        };
                    return s.StakeProgram.withdraw(i)
                }
                async getInfo(e) {
                    const t = await this.getProvider("balance").getBalance(this.address, !0);
                    t && (this.balance = t);
                    const a = {
                            address: this.address,
                            ignoreCache: (null == e ? void 0 : e.ignoreCache) || !1
                        },
                        r = await this.getProvider("stake").getStakingBalance(a),
                        s = (await this.getFee()).mul(new this.BN(2)),
                        n = new this.BN(t).sub(new this.BN(s)).sub(new this.BN(this.reserveForStake));
                    return r && (r.availableForStake = Number(n) > 0 ? this.toCurrencyUnit(n) : "0", this.balances = r), {
                        balance: t,
                        balances: this.balances
                    }
                }
                getAccountInfo(e) {
                    return this.getProvider("node").getAccountInfo(new s.PublicKey(e || this.address))
                }
                getMinRent(e = 200) {
                    return this.getProvider("node").getMinRent(e)
                }
                convertToPubkey(e) {
                    return new s.PublicKey(e)
                }
            }
            var h = SOLCoin;
            t.default = h
        },
        5664: function(e, t, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "NftMixin", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            });
            var s = r(a(2349))
        },
        9174: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.derivePath = t.isValidPath = t.getPublicKey = t.getMasterKeyFromSeed = void 0;
            const r = a(320),
                s = a(73),
                n = a(9175);
            t.getMasterKeyFromSeed = e => {
                const t = r("sha512", "ed25519 seed").update(Buffer.from(e, "hex")).digest();
                return {
                    key: t.slice(0, 32),
                    chainCode: t.slice(32)
                }
            };
            t.getPublicKey = (e, t = !0) => {
                const a = s.sign.keyPair.fromSeed(e).secretKey.subarray(32),
                    r = Buffer.alloc(1, 0);
                return t ? Buffer.concat([r, Buffer.from(a)]) : Buffer.from(a)
            }, t.isValidPath = e => !!n.pathRegex.test(e) && !e.split("/").slice(1).map(n.replaceDerive).some(isNaN), t.derivePath = (e, a, s = 2147483648) => {
                if (!t.isValidPath(e)) throw new Error("Invalid derivation path");
                const {
                    key: i,
                    chainCode: c
                } = t.getMasterKeyFromSeed(a);
                return e.split("/").slice(1).map(n.replaceDerive).map(e => parseInt(e, 10)).reduce((e, t) => (({
                    key: e,
                    chainCode: t
                }, a) => {
                    const s = Buffer.allocUnsafe(4);
                    s.writeUInt32BE(a, 0);
                    const n = Buffer.concat([Buffer.alloc(1, 0), e, s]),
                        i = r("sha512", t).update(n).digest();
                    return {
                        key: i.slice(0, 32),
                        chainCode: i.slice(32)
                    }
                })(e, t + s), {
                    key: i,
                    chainCode: c
                })
            }
        },
        9175: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.replaceDerive = t.pathRegex = void 0, t.pathRegex = new RegExp("^m(\\/[0-9]+')+$"), t.replaceDerive = e => e.replace("'", "")
        }
    }
]);