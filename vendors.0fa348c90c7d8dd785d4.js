(window.webpackJsonp = window.webpackJsonp || []).push([
    [344], {
        5437: function(t, e, a) {
            "use strict";
            var s = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = s(a(2359)),
                r = s(a(461)),
                n = s(a(55)),
                c = a(930);
            class EOSCoin extends((0, c.HasProviders)(r.default)) {
                constructor({
                    alias: t,
                    notify: e,
                    feeData: a,
                    explorers: s,
                    txWebUrl: i,
                    socket: r
                }) {
                    super({
                        alias: t,
                        notify: e,
                        name: "EOS",
                        ticker: "EOS",
                        decimal: 4,
                        derivation: "",
                        unspendableBalance: "0",
                        txWebUrl: i,
                        explorers: s,
                        socket: r
                    }), this.activated = !1, this.fields.paymentId = !0, this.assetName = "eosio.token", this.accountActivationSum = a.accountActivationSum, this.accountActivationAddress = a.accountActivationAddress, this.transactions = [], this.balances = null
                }
                async loadWallet(t, e) {
                    const a = i.default.PrivateKey.fromSeed(e);
                    if (!a) throw new Error(this.ticker + " privateKey is empty!!!");
                    const s = a.getChildKey("owner"),
                        r = s.getChildKey("active"),
                        n = s.toPublic().toString(),
                        c = s.toWif(),
                        o = r.toPublic().toString(),
                        d = r.toWif();
                    return this.privateKeysObject = {
                        owner: {
                            privateKey: c,
                            publicKey: n
                        },
                        active: {
                            privateKey: d,
                            publicKey: o
                        }
                    }, this.privateKey = JSON.stringify(this.privateKeysObject), this.address ? this.activated = !0 : this.resolveAccountName(o), this
                }
                resolveAccountName(t) {
                    return this.getProvider("checkActivation").getKeyAccounts(t).then(t => {
                        t && t.length > 0 && (this.address = t[0], this.activated = !0)
                    }).catch(t => n.default.error({
                        instance: this,
                        error: t
                    }))
                }
                getAddress() {
                    return this.address
                }
                async validateNewAccountName(t) {
                    return await this.getProvider("checkActivation").checkAccountName(t)
                }
                async validateAddress(t) {
                    return !!t && (t.length <= 13 && /^[a-z1-5.]{1,11}[a-z1-5]$|^[a-z1-5.]{12}[a-j1-5]$/.test(t))
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    memo: a
                }) {
                    const s = {
                        actions: [{
                            account: this.assetName,
                            name: "transfer",
                            authorization: [{
                                actor: this.address,
                                permission: "active"
                            }],
                            data: {
                                from: this.address,
                                to: t,
                                quantity: `${Number(this.toCurrencyUnit(e)).toFixed(4)} ${this.ticker}`,
                                memo: a
                            }
                        }]
                    };
                    return JSON.stringify(s)
                }
                async sendTransaction(t) {
                    return this.getProvider("send").sendTransaction(t, this.privateKey)
                }
                async getInfo() {
                    if (this.address) {
                        const t = await this.getProvider("balance").getAccount(this.address);
                        this.balance = t.core_liquid_balance ? this.toMinimalUnit(t.core_liquid_balance.split(" ")[0]) : 0;
                        const e = Number(t.total_resources.net_weight.split(" ")[0]),
                            a = Number(t.total_resources.cpu_weight.split(" ")[0]),
                            s = Number(t.self_delegated_bandwidth.net_weight.split(" ")[0]),
                            i = Number(t.self_delegated_bandwidth.cpu_weight.split(" ")[0]),
                            r = e - s,
                            n = a - i;
                        this.balances = {
                            net: t.net_limit,
                            cpu: t.cpu_limit,
                            ram: {
                                ramUsage: t.ram_usage,
                                ramQuota: t.ram_quota,
                                ramBytesTotal: t.total_resources.ram_bytes
                            },
                            staked: {
                                selfStakedNet: s,
                                selfStakedCpu: i,
                                othersStakedNet: r,
                                othersStakedCpu: n,
                                totalStakedNet: e,
                                totalStakedCpu: a
                            }
                        }
                    }
                    return {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
            }
            var o = EOSCoin;
            e.default = o
        }
    }
]);