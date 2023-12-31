(window.webpackJsonp = window.webpackJsonp || []).push([
    [348], {
        5427: function(t, e, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(2362),
                i = a(2378),
                n = r(a(57)),
                c = r(a(464)),
                o = r(a(461)),
                d = a(29),
                l = a(26),
                h = a(930);
            class HBARCoin extends((0, h.StakingMixin)((0, h.HasProviders)(o.default))) {
                constructor({
                    alias: t,
                    notify: e,
                    feeData: a,
                    explorers: r,
                    txWebUrl: s,
                    socket: i
                }) {
                    super({
                        alias: t,
                        notify: e,
                        name: "Hedera",
                        ticker: "HBAR",
                        decimal: 8,
                        derivation: "m/44'/3030'/0'/0/0",
                        unspendableBalance: "100000000",
                        explorers: r,
                        txWebUrl: s,
                        socket: i
                    }), this.grpc = a.grpc, this.fee = a.fee, this.updateAccountFee = a.updateAccountFee, this.transactions = [], this.fields.paymentId = !0
                }
                getFee(t) {
                    var e;
                    return new this.BN(null !== (e = null == t ? void 0 : t.feeLimit) && void 0 !== e ? e : this.fee)
                }
                async activationAccount() {
                    if (!this.address) try {
                        const {
                            data: t
                        } = await n.default.post("https://hedera-service.atomicwallet.io/account/", {
                            publicKey: this.publicKey
                        });
                        this.address = t.accountId
                    } catch (t) {
                        console.error(t)
                    }
                    return this.address
                }
                async loadWallet(t, e) {
                    const a = await s.Ed25519PrivateKey.fromMnemonic(e);
                    if (!a) throw new d.WalletError({
                        type: l.WALLET_ERROR,
                        error: new Error("can't get a privateKey!"),
                        instance: this
                    });
                    return this.privateKey = a.toString(), this.publicKey = a.publicKey.toString(), this.address || n.default.get("https://hedera-service.atomicwallet.io/account/" + this.publicKey).then(({
                        data: t
                    }) => {
                        this.address = t.accountId, this.account = this.getAddressStringFromAccountID(t.accountId)
                    }).catch(t => {
                        console.error(t)
                    }), this
                }
                getAddress() {
                    if (this.address && this.privateKey) return this.address;
                    throw new d.WalletError({
                        type: l.WALLET_ERROR,
                        error: new Error("address or privateKey is empty!"),
                        instance: this
                    })
                }
                async getAddressByPublicKey(t = null) {
                    if (!t && !this.publicKey) throw new d.WalletError({
                        type: l.WALLET_ERROR,
                        error: new Error("PublicKey is empty"),
                        instance: this
                    });
                    t || (t = this.publicKey);
                    try {
                        const {
                            accountId: t
                        } = await n.default.get("https://hedera-service.atomicwallet.io/account/" + this.publicKey);
                        return t
                    } catch (t) {
                        return null
                    }
                }
                getAddressStringFromAccountID(t) {
                    return s.AccountId.fromString(t).toString()
                }
                validateAddress(t) {
                    try {
                        return s.AccountId.fromString(t).account > 0
                    } catch (t) {
                        return !1
                    }
                }
                getClient() {
                    if (!this.client) {
                        const t = this.getProvider("send");
                        this.client = new s.Client({
                            network: t.node,
                            operator: {
                                account: this.address,
                                privateKey: this.privateKey
                            }
                        })
                    }
                    return this.client
                }
                getClientV2() {
                    return this.clientV2 || (this.clientV2 = i.Client.forMainnet({
                        scheduleNetworkUpdate: !0
                    }), this.clientV2.setOperator(this.address, this.privateKey), this.clientV2.setMirrorNetwork(this.grpc)), this.clientV2
                }
                async signTransaction(t) {
                    const e = this.getClient();
                    return t.build(e)
                }
                async signTransactionV2(t) {
                    const e = this.getClientV2();
                    return t.freezeWith(e), t.sign(i.PrivateKey.fromString(this.privateKey))
                }
                async createTransactionV2({
                    address: t,
                    amount: e,
                    memo: a
                }) {
                    const r = (new i.TransferTransaction).addApprovedHbarTransfer(this.address, e).addHbarTransfer(t, e);
                    a && r.setTransactionMemo(a);
                    return await this.signTransaction(r)
                }
                async sendTransactionV2({
                    signedTx: t
                }) {
                    const e = this.getClientV2();
                    return {
                        txid: (await t.execute(e)).transactionHash
                    }
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    memo: a
                }) {
                    const r = (new s.CryptoTransferTransaction).addSender(this.address, s.Hbar.fromTinybar(e)).addRecipient(t, s.Hbar.fromTinybar(e));
                    a && r.setTransactionMemo(a);
                    const i = await this.signTransaction(r);
                    return {
                        rawtx: Buffer.from(i.toBytes()).toString("hex"),
                        account: this.address,
                        privateKey: this.privateKey
                    }
                }
                async sendTransaction(t) {
                    return this.getProvider("send").sendTransaction(t)
                }
                async createAccountTransaction(t, e) {
                    const a = s.Ed25519PublicKey.fromString(t),
                        r = (new s.AccountCreateTransaction).setKey(a).setInitialBalance(s.Hbar.fromTinybar(e)),
                        i = await this.signTransaction(r);
                    return Buffer.from(i.toBytes()).toString("hex")
                }
                async getInfo() {
                    const {
                        balance: t
                    } = await this.getProvider("balance").getInfo(this.address);
                    return this.balance = t, await this.getStakingInfo(), {
                        balance: t,
                        balances: this.balances
                    }
                }
                async fetchStakingInfo() {
                    const {
                        pending_reward: t,
                        staked_node_id: e
                    } = await this.getProvider("staking").getInfo(this.address), a = this.calculateRewards(t), r = this.calculateStakedBalance(e), s = {};
                    return null !== e && (s[e] = {
                        address: e,
                        rewards: a,
                        staked: r
                    }), {
                        availableForUnstake: r,
                        rewards: a,
                        staked: r,
                        validators: s
                    }
                }
                calculateRewards(t) {
                    return new c.default(t, this)
                }
                calculateStakedBalance(t) {
                    return new c.default(null === t ? "0" : this.balance, this)
                }
                async calculateAvailableForStake({
                    balance: t
                }) {
                    const e = t.toBN().sub(new this.BN(this.fee)).sub(new this.BN(this.reserveForStake));
                    return new c.default(e.isNeg() ? "0" : e, this)
                }
                calculateTotal({
                    balance: t,
                    rewards: e
                }) {
                    return new c.default(t.toBN().add(e.toBN()).toString(), this)
                }
                async claim() {
                    const {
                        staked_node_id: t
                    } = await this.getProvider("staking").getInfo(this.address);
                    return this.stake({
                        validator: t
                    })
                }
                async stake({
                    validator: t
                }) {
                    const {
                        transactionHash: e
                    } = await this.getProvider("staking").stake(this, t);
                    return Buffer.from(e).toString("hex")
                }
                async unstake() {
                    const {
                        transactionHash: t
                    } = await this.getProvider("staking").unstake(this);
                    return Buffer.from(t).toString("hex")
                }
                async getTransactions() {
                    if (!this.address) throw new Error("HBAR: getTransactions error: address is not loaded");
                    return await this.getProvider("history").getTransactions({
                        address: this.address
                    })
                }
                setPrivateKey(t) {
                    this.privateKey = t, this.publicKey = s.Ed25519PrivateKey.fromString(t).publicKey.toString()
                }
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        alias: this.alias,
                        assetName: this.assetName,
                        decimal: this.decimal,
                        privateKey: this.privateKey,
                        account: this.address,
                        getClient: () => this.getClient()
                    }
                }
            }
            var u = HBARCoin;
            e.default = u
        }
    }
]);