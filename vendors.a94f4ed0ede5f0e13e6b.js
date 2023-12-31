(window.webpackJsonp = window.webpackJsonp || []).push([
    [38], {
        1433: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(151)),
                s = r(26),
                i = a(r(374));
            class InternalError extends i.default {
                constructor(e) {
                    super(e), (0, n.default)(this, "defaultType", s.INTERNAL_ERROR), this.name = this.constructor.name
                }
            }
            var o = InternalError;
            t.default = o
        },
        1435: function(e) {
            e.exports = JSON.parse('{"default":{"CONFIGS_BASE_URL":"https://services.atomicwallet.io","REFERRAL_PROGRAM_API_URL":"https://invite-friends.atomicwallet.io"},"stage":{"CONFIGS_BASE_URL":"https://services-stage.atomicwallet.io","REFERRAL_PROGRAM_API_URL":"http://invite-friends.anyswap.co"},"dev":{"CONFIGS_BASE_URL":"https://services-dev.atomicwallet.io","REFERRAL_PROGRAM_API_URL":"http://invite-friends.anyswap.co"}}')
        },
        173: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WALLETS = t.CONFIGS = void 0;
            t.WALLETS = {
                NEW_ATOMIC_ID: "new_atomic_id",
                FINISH_LOADING: "finish-loading",
                FINISH_LOADING_ALL: "finish-loading-all",
                RAISE_LOADING_ERROR: "raise-loading-error",
                START_LOADING: "start-loading",
                START_LOADING_ALL: "start-loading-all",
                UPDATE_LOADING_PROGRESS: "update-loading-progress",
                TX_SENT: "tx-sent",
                WALLET_READY: "wallet-ready",
                ACTIVATE_COIN: "activate_coin",
                DEACTIVATE_COIN: "deactivate_coin",
                UPDATE: "wallets-update",
                BALANCE_UPDATED: "balance-updated"
            };
            t.CONFIGS = {
                UPDATE: "update_config",
                UPDATED: "config_updated",
                LOG_SETTINGS_UPDATED: "log_settings_config_updated",
                FAILED_FETCH: "failed_fetch"
            }
        },
        1841: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.erc721Abi = t.erc1155Abi = t.default = void 0;
            var n = a(r(2346)),
                s = r(26),
                i = r(29),
                o = r(95),
                c = a(r(20)),
                l = r(1075);
            const d = [{
                inputs: [{
                    internalType: "address",
                    name: "_from",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_id",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }, {
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes"
                }],
                name: "safeTransferFrom",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }];
            t.erc1155Abi = d;
            const u = [{
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "safeTransferFrom",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }];
            t.erc721Abi = u;
            class ETHNftExplorer extends c.default {
                constructor({
                    wallet: e,
                    config: t
                }) {
                    super({
                        wallet: e,
                        config: t
                    }), this.baseUrl = (0, o.getStringWithEnsuredEndChar)(t.baseUrl, "/"), this.web3 = new n.default(t.baseUrl), this.ticker = e.ticker
                }
                getAllowedTickers() {
                    return ["ETH", "BSC", "MATIC", "AVAX", "FTM"]
                }
                makeNftInfoUrl(e, t) {
                    return `${this.baseUrl}${e}?a=${t}`
                }
                async getGasPrice() {
                    return this.web3.eth.getGasPrice()
                }
                estimateGas(e, t, r = null, a) {
                    const n = {
                        from: e,
                        to: t,
                        data: a
                    };
                    return r && (n.nonce = r + 1), this.web3.eth.estimateGas(n)
                }
                sendTransaction(e) {
                    return new Promise((t, r) => {
                        this.wallet.coreLibrary.eth.sendSignedTransaction(e).on("transactionHash", e => {
                            t({
                                tx: e
                            })
                        }).catch(e => r(e))
                    })
                }
                async getNftContractData(e, t, r, a, n) {
                    if (![l.ERC721_TOKEN_STANDARD, l.ERC1155_TOKEN_STANDARD].includes(n)) throw new i.InternalError({
                        type: s.INTERNAL_ERROR,
                        error: "Unrecognized nft token standard",
                        instance: this
                    });
                    const {
                        address: o
                    } = e;
                    return {
                        [l.ERC1155_TOKEN_STANDARD]: (e, t, r, a) => new this.web3.eth.Contract(d, r).methods.safeTransferFrom(e, t, a, 1, "0x0").encodeABI(),
                        [l.ERC721_TOKEN_STANDARD]: (e, t, r, a) => new this.web3.eth.Contract(u, r).methods.safeTransferFrom(e, t, a).encodeABI()
                    } [n](o, t, r, a)
                }
                async sendNft(e, t, r, a, n, o) {
                    try {
                        const s = await this.getNftContractData(e, t, r, a, n),
                            i = await e.createNftTransaction({
                                toAddress: t,
                                contractAddress: r,
                                data: s,
                                userOptions: o
                            });
                        return await this.sendTransaction(i)
                    } catch (e) {
                        throw console.warn(e), new i.ExternalError({
                            type: s.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
            }
            var h = ETHNftExplorer;
            t.default = h
        },
        1864: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(57)),
                s = a(r(20));
            class DgbInsightExplorer extends s.default {
                getAllowedTickers() {
                    return ["BTC", "LTC", "ZEC", "DGB", "DASH", "DOGE", "BTG", "QTUM"]
                }
                getInfoUrl(e) {
                    return "addr/" + e
                }
                getTransactionUrl(e) {
                    return "tx/" + e
                }
                getTransactionsUrl(e) {
                    return `addrs/${e}/txs`
                }
                modifyTransactionsResponse(e, t) {
                    return super.modifyTransactionsResponse(e.items, t)
                }
                getUnspentOutputsUrl(e) {
                    return `addr/${e}/utxo`
                }
                getSendTransactionUrl() {
                    return "tx/send"
                }
                getSendTransactionParam() {
                    return "rawtx"
                }
                modifyInfoResponse(e) {
                    return {
                        balance: e.balanceSat,
                        transactions: []
                    }
                }
                modifyUnspentOutputsResponse(e) {
                    return e.map(({
                        address: e,
                        txid: t,
                        vout: r,
                        scriptPubKey: a,
                        satoshis: n
                    }) => ({
                        txid: t,
                        vout: r,
                        script: a,
                        value: n,
                        address: e
                    }))
                }
                async sendTransaction(e) {
                    const t = await n.default.post(`${this.config.baseUrl}${this.getSendTransactionUrl()}`, {
                        [this.getSendTransactionParam()]: e
                    });
                    return this.modifyGeneralResponse(this.modifySendTransactionResponse(t))
                }
                getTxOtherSideAddress(e, t) {
                    if (!t.vin) return "...";
                    if (this.getTxDirection(e, t)) return t.vin[0].addr;
                    let r = new this.wallet.BN(0),
                        a = "...";
                    return t.vout.forEach(t => {
                        t.scriptPubKey.addresses.length > 0 && t.scriptPubKey.addresses[0] !== e && r.lt(new this.wallet.BN(this.wallet.toMinimalUnit(t.value))) && (r = new this.wallet.BN(this.wallet.toMinimalUnit(t.value)), a = t.scriptPubKey.addresses[0])
                    }), a
                }
                getTxValue(e, t) {
                    let r = new this.wallet.BN(0),
                        a = new this.wallet.BN(0);
                    t.vin.forEach(t => {
                        t.addr === e && (r = r.add(new this.wallet.BN(t.valueSat)))
                    }), t.vout.forEach(t => {
                        t.scriptPubKey.addresses && t.scriptPubKey.addresses[0] === e && (a = a.add(new this.wallet.BN(this.wallet.toMinimalUnit(t.value))))
                    });
                    const n = r.sub(a),
                        s = n.lt(new this.wallet.BN(0)),
                        i = n.abs();
                    return Number(this.wallet.toCurrencyUnit(s ? i : i.sub(new this.wallet.BN(this.wallet.toMinimalUnit(t.fees)))))
                }
                calculateBalance(e = []) {
                    return e.reduce((e, {
                        value: t
                    }) => new this.wallet.BN(t).add(e), new this.wallet.BN("0"))
                }
            }
            var i = DgbInsightExplorer;
            t.default = i
        },
        1865: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = r(29),
                i = r(26),
                o = a(r(943)),
                c = r(347);
            class CosmosNodeExplorer extends((0, c.CosmosNodeTransactionTypeMixin)(n.default)) {
                constructor() {
                    super(...arguments), this.defaultTxLimit = 50, this.canPaginate = !0, this.lastKnownHeight = 0;
                    const e = o.default.find(e => e.currency === this.wallet.ticker);
                    this.validatorMoniker = {}, e.validators.forEach(e => {
                        this.validatorMoniker[e.address] = e.name
                    })
                }
                getAllowedTickers() {
                    return ["ATOM", "BAND"]
                }
                async request() {
                    const e = await super.request(...arguments);
                    return e && e.height && this.lastKnownHeight < Number(e.height) && (this.lastKnownHeight = e.height), e && e.result ? e.result : e
                }
                async getAuth(e) {
                    const t = await this.request("auth/accounts/" + e);
                    if (t && t.value && "0" === t.value.account_number) throw new s.ExplorerRequestError({
                        type: i.EXTERNAL_ERROR,
                        error: new Error(JSON.stringify(t)),
                        instance: this
                    });
                    return t && t.value
                }
                getLatestBlockUrl() {
                    return "blocks/latest"
                }
                getSendTransactionUrl() {
                    return "txs"
                }
                getSendTransactionParams(e) {
                    return e
                }
                modifySendTransactionResponse(e) {
                    if (e.code) throw new s.ExplorerRequestError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error(e.raw_log),
                        instance: this
                    });
                    return {
                        txid: e.txhash
                    }
                }
                async sendDelegationTransaction(e, t) {
                    const r = await this.request(`staking/delegators/${e}/delegations`, "post", t);
                    if (r.value && "0" === r.value.account_number) throw new s.ExplorerRequestError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error(r),
                        instance: this
                    });
                    return r.value
                }
                async getTransactionRewardsBlueprint({
                    from: e,
                    gas: t,
                    gas_adjustment: r = "1.2",
                    fee: a,
                    chain_id: n,
                    denom: s = "uatom"
                }) {
                    return (await this.request(`distribution/delegators/${e}/rewards`, "post", {
                        base_req: {
                            from: e,
                            chain_id: n,
                            gas: t,
                            gas_adjustment: r,
                            fees: [{
                                denom: s,
                                amount: a
                            }],
                            simulate: !1
                        }
                    })).value
                }
                async getTransaction(e, t) {
                    const r = await this.request("txs/" + t);
                    return this.modifyTransactionResponse(r, e)
                }
                async getTransactions({
                    address: e,
                    limit: t,
                    pageNum: r
                }) {
                    r += 1;
                    const [a, n] = await Promise.all([this.request(`txs?message.sender=${e}&message.action=send&page=${r}&limit=${t}`), this.request(`txs?transfer.recipient=${e}&message.action=send&page=${r}&limit=${t}`)]), s = n.txs.map(e => e.txhash), i = a.txs.filter(e => !s.includes(e.txhash));
                    n.txs.forEach(e => {
                        e.direction = !0
                    }), i.forEach(e => {
                        e.direction = !1
                    });
                    const o = n.txs.concat(i).sort((e, t) => Number(e.height) < Number(t.height) ? 1 : -1);
                    return await this.getLatestBlock(), this.modifyTransactionsResponse(o, e)
                }
                getTxValue(e, t) {
                    const r = t.tx.value.msg[0].value.amount,
                        a = Array.isArray(r) ? r[0].amount : r.amount;
                    return this.wallet.toCurrencyUnit(a)
                }
                getTxDirection(e, t) {
                    return String(t.tx.value.msg[0].value.to_address).toLowerCase() === e.toLowerCase()
                }
                getTxOtherSideAddress(e, t) {
                    return this.getTxDirection(e, t) ? t.tx.value.msg[0].value.from_address : t.tx.value.msg[0].value.to_address
                }
                getTxDateTime(e) {
                    return new Date(e.timestamp)
                }
                getTxConfirmations(e) {
                    return this.lastKnownHeight - Number(e.height)
                }
                getTxHash(e) {
                    return e.txhash
                }
                getTxMemo(e) {
                    return e.tx.value.memo
                }
                getTotalDelegations(e, t) {
                    switch (this.wallet.ticker) {
                        case "ATOM":
                            return this.getTotalDelegationsAtom(e, t);
                        case "BAND":
                            return this.getTotalDelegationsBand(e, t);
                        default:
                            throw new Error("Unknown wallet ticker")
                    }
                }
                getTotalDelegationsBand(e, t) {
                    let r = new this.wallet.BN("0");
                    return e.forEach(({
                        shares: e,
                        validator_address: a
                    }) => {
                        const n = this.validatorMoniker[a] || a;
                        t.validators[n] = {
                            shares: this.wallet.toCurrencyUnit(e.split(".")[0]),
                            address: a
                        }, r = r.add(new this.wallet.BN(e.split(".")[0]))
                    }), r
                }
                getTotalDelegationsAtom(e, t) {
                    let r = new this.wallet.BN("0");
                    return e.forEach(({
                        delegation: e
                    }) => {
                        const a = this.validatorMoniker[e.validator_address] || e.validator_address;
                        t.validators[a] = {
                            shares: this.wallet.toCurrencyUnit(e.shares.split(".")[0]),
                            address: e.validator_address
                        }, r = r.add(new this.wallet.BN(e.shares.split(".")[0]))
                    }), r
                }
                async getInfo(e) {
                    await this.getLatestBlock();
                    const t = await this.request("bank/balances/" + e),
                        r = await this.request(`staking/delegators/${e}/delegations`),
                        a = await this.request(`staking/delegators/${e}/unbonding_delegations`),
                        n = await this.request(`distribution/delegators/${e}/rewards`);
                    let s = new this.wallet.BN(0);
                    n.total && n.total.length > 0 && (s = new this.wallet.BN(n.total[0].amount.split(".")[0]));
                    const i = this.wallet.toCurrencyUnit(s.toString());
                    let o = "0";
                    const c = {
                            validators: {},
                            total: new this.wallet.BN("0")
                        },
                        l = {
                            validators: {},
                            total: new this.wallet.BN("0")
                        };
                    let d = new this.wallet.BN(0);
                    if (t && t.length > 0) {
                        const e = new this.wallet.BN(t[0].amount);
                        d = d.add(e), o = e.toString()
                    }
                    if (r && r.length > 0) {
                        const e = this.getTotalDelegations(r, c);
                        d = d.add(e), c.total = this.wallet.toCurrencyUnit(e.toString())
                    }
                    if (a && a.length > 0) {
                        let e = new this.wallet.BN("0");
                        a.forEach(({
                            entries: t,
                            validator_address: r
                        }) => {
                            const a = r;
                            l.validators[a] = t.map(e => new this.wallet.BN(e.balance.split(".")[0])).reduce((e, t) => e.add(new this.wallet.BN(t)), new this.wallet.BN("0")), e = e.add(l.validators[a])
                        }), d = d.add(e), l.total = this.wallet.toCurrencyUnit(e.toString().split(".")[0])
                    }
                    d = d.add(s);
                    const u = new this.wallet.BN(o).sub(new this.wallet.BN(this.wallet.feeDefault || 0)).sub(new this.wallet.BN(this.wallet.reserveForStake || 0)),
                        h = Number(u) > 0 ? this.wallet.toCurrencyUnit(u) : 0;
                    return {
                        balance: d,
                        balances: {
                            available: this.wallet.toCurrencyUnit(o),
                            total: d,
                            staking: c,
                            rewards: i,
                            unbonding: l,
                            availableForStake: h
                        },
                        transactions: this.wallet.transactions
                    }
                }
                modifyLatestBlockResponse(e) {
                    if (!e) throw new Error("[CosmosNodeExplorer] wrong latest block response");
                    const t = Object.hasOwnProperty.call(e, "block") ? "block" : "block_meta";
                    return this.chainId = e[t].header.chain_id, this.lastKnownHeight = Number(e[t].header.height) || 0, e
                }
                getChainId() {
                    return this.chainId
                }
                getTxFee(e) {
                    try {
                        const t = e.tx.value.fee.amount[0].amount;
                        return this.wallet.toCurrencyUnit(t)
                    } catch (e) {
                        return 0
                    }
                }
            }
            var l = CosmosNodeExplorer;
            t.default = l
        },
        1872: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(67)),
                s = a(r(20)),
                i = a(r(230)),
                o = a(r(55)),
                c = a(r(74)),
                l = r(52),
                d = r(26),
                u = r(95);
            class BlockbookV2Explorer extends s.default {
                constructor(...e) {
                    super(...e), this.version = 2, this.canPaginate = !0
                }
                async getSocketTransaction({
                    address: e,
                    hash: t,
                    scriptPubKey: r
                }) {
                    const a = await this.getTransaction(e, t),
                        n = await this.getUnspentOutputs(e, r),
                        s = this.calculateBalance(n).toString();
                    await i.default.filterAndUpdateTransactions([a]), this.eventEmmiter.emit(`${this.wallet.parent}-${this.wallet.id}::new-socket-tx`, {
                        unconfirmedTx: a,
                        unconfirmedBalance: s
                    })
                }
                getAllowedTickers() {
                    return ["BTC", "BSC", "BCD", "BTG", "BCH", "BSV", "DOGE", "LTC", "DGB", "DASH", "RVN", "KMD", "ETH", "DCR", "QTUM", "ZEC", "YEC", "GRS"]
                }
                getApiPrefix() {
                    return `api/v${this.version}/`
                }
                getLatestBlockUrl() {
                    return this.getApiPrefix() + "block-index/last"
                }
                getBlockUrl(e) {
                    return `${this.getApiPrefix()}block/${e}`
                }
                getBlockMethod() {
                    return "get"
                }
                getBlockParams() {
                    return {}
                }
                getBlockOptions() {
                    return {}
                }
                getAddressUrl(e) {
                    return `${this.getApiPrefix()}address/${e}`
                }
                getInfoUrl(e) {
                    return `${this.getApiPrefix()}address/${e}`
                }
                getInfoOptions() {
                    return this.config.options || {}
                }
                getUserTokenListParams() {
                    return {}
                }
                getTransactionsOptions() {
                    return "BSC" === this.wallet.ticker ? {
                        headers: {
                            "api-key": "ypa5Llv3B3fyToNsMkkaiEIIGKdcRYqU"
                        }
                    } : {}
                }
                getInfoParams() {
                    return this.config.options || {}
                }
                getSendOptions() {
                    return "BSV" === this.wallet.ticker ? {
                        headers: {
                            "Content-Type": "text/plain"
                        }
                    } : {}
                }
                modifyInfoResponse(e) {
                    const t = new this.wallet.BN(e.unconfirmedBalance),
                        r = new this.wallet.BN(e.balance).add(t).toString(),
                        a = {};
                    return e.tokens && e.tokens.forEach(e => {
                        a[e.symbol] = e.balance
                    }), {
                        balance: r,
                        tokenBalances: a,
                        unconfirmedBalance: t.toString(),
                        transactions: []
                    }
                }
                getTransactionUrl(e) {
                    return `${this.getApiPrefix()}tx/${e}`
                }
                getTransactionParams() {
                    return this.getInfoParams()
                }
                getTransactionsUrl(e) {
                    return `${this.getApiPrefix()}address/${e}`
                }
                getTransactionsParams(e, t = 0, r = this.defaultTxLimit, a) {
                    return {
                        ...this.getInfoParams(),
                        page: a,
                        pageSize: r,
                        details: "txs",
                        filter: "All"
                    }
                }
                async getTokenTransactions({
                    address: e,
                    offset: t,
                    limit: r,
                    pageNum: a,
                    contract: n
                }) {
                    if (this.defaultRequestTimeout && Date.now() - this.defaultRequestTimeout * d.ONE_MINUTE < this.lastGetTxsRequestTime) return [];
                    this.defaultRequestTimeout && Date.now() - this.defaultRequestTimeout * d.ONE_MINUTE > this.lastGetTxsRequestTime && (this.lastGetTxsRequestTime = Date.now());
                    try {
                        const s = await this.request(this.getTransactionsUrl(e, t || 0, r || this.defaultTxLimit, a), this.getTransactionsMethod(), this.getTokenTransactionsParams(e, t || 0, r || this.defaultTxLimit, a, n), d.GET_TRANSACTIONS_TYPE, this.getTransactionsOptions());
                        return this.modifyTokenTransactionsResponse((null == s ? void 0 : s.transactions) || [], e)
                    } catch {
                        return []
                    }
                }
                getTokenTransactionsParams(e, t, r, a, n) {
                    return {
                        ...this.getTransactionsParams(e, t, r, a),
                        contract: n
                    }
                }
                modifyTransactionResponse(e, t) {
                    if (e.tokenTransfers && 0 === Number(e.value)) {
                        const r = {};
                        e.tokenTransfers.forEach(a => {
                            a.symbol && (r[a.token] || (r[a.token] = []), r[a.token].push(this.getTransactionFromTokenTransfer({
                                transfer: a,
                                selfAddress: t,
                                tx: e
                            })))
                        });
                        for (const e in r) {
                            const a = r[e];
                            if (0 !== a.length)
                                for (const e of a) {
                                    const {
                                        otherSideAddress: r
                                    } = e;
                                    if ([r.toLowerCase(), t.toLowerCase()].includes(t.toLowerCase())) return e
                                }
                        }
                    }
                    return super.modifyTransactionResponse(e, t)
                }
                modifyTransactionsResponse(e, t) {
                    const r = e && !!e.transactions,
                        a = r ? e.transactions.filter(e => e.tokenTransfers && Array.isArray(e.tokenTransfers) && 0 === Number(e.value)) : [],
                        n = r ? e.transactions.filter(e => !(e.tokenTransfers && 0 === Number(e.value) || e.ethereumSpecific && 0 === e.ethereumSpecific.status)) : [],
                        s = r ? e.transactions.filter(e => e.ethereumSpecific && 0 === e.ethereumSpecific.status) : [],
                        i = super.modifyTransactionsResponse(n, t);
                    return a.length > 0 ? {
                        transactions: i,
                        failed: s,
                        tokenTransactions: this.modifyTokenTransactionsResponse(a, t)
                    } : ["ETH", "BSC"].includes(this.wallet.parent) ? {
                        transactions: i,
                        failed: s
                    } : i
                }
                modifyTokenTransactionsResponse(e, t) {
                    var r;
                    return null !== (r = null == e ? void 0 : e.map(e => {
                        var r;
                        return null === (r = e.tokenTransfers) || void 0 === r ? void 0 : r.filter(e => this.filterTokenTransferTransactions(t, e)).map(r => this.getTransactionFromTokenTransfer({
                            transfer: r,
                            selfAddress: t,
                            tx: e
                        }))
                    }).flat()) && void 0 !== r ? r : []
                }
                filterTokenTransferTransactions(e, t) {
                    return !(![t.to.toLowerCase(), t.from.toLowerCase()].includes(e.toLowerCase()) || !t.symbol)
                }
                getTransactionFromTokenTransfer({
                    transfer: e,
                    selfAddress: t,
                    tx: r
                }) {
                    return new c.default({
                        ticker: e.symbol.toUpperCase(),
                        txid: this.getTxHash(r),
                        walletid: (0, l.getTokenId)({
                            ticker: e.symbol,
                            contract: e.token,
                            parent: this.wallet.parent
                        }),
                        fee: this.getTxFee(r),
                        feeTicker: this.wallet.parent,
                        direction: e.to.toLowerCase() === t.toLowerCase(),
                        otherSideAddress: e.to.toLowerCase() === t.toLowerCase() ? e.from.toLowerCase() : e.to.toLowerCase(),
                        amount: (0, u.toCurrency)(e.value, e.decimals),
                        datetime: this.getTxDateTime(r),
                        memo: this.getTxMemo(r),
                        confirmations: this.getTxConfirmations(r),
                        nonce: this.getTxNonce(r),
                        alias: this.wallet.alias
                    })
                }
                getUnspentOutputsUrl(e) {
                    return `${this.getApiPrefix()}utxo/${e}`
                }
                getUnspentOutputsParams(e) {
                    return this.getInfoParams()
                }
                modifyUnspentOutputsResponse(e, t, r) {
                    if (!r) throw this.createError("No scriptPubKey");
                    return t.map(({
                        txid: t,
                        vout: a,
                        value: n,
                        height: s
                    }) => ({
                        txid: t,
                        txId: t,
                        vout: a,
                        script: r,
                        value: n,
                        address: e,
                        outputIndex: a,
                        satoshis: Number(n),
                        height: s
                    }))
                }
                getSendTransactionUrl() {
                    return this.getApiPrefix() + "sendtx/"
                }
                getSendTransactionParams(e) {
                    return e
                }
                modifySendTransactionResponse(e) {
                    return {
                        txid: e.result
                    }
                }
                getTxDateTime(e) {
                    return e.blockTime ? new Date(Number(e.blockTime + "000")) : new Date
                }
                getTxValue(e, t) {
                    let r = new this.wallet.BN(0),
                        a = new this.wallet.BN(0);
                    if (!t.vin || !t.vout) return "0";
                    if (["ETH", "BSC"].includes(this.wallet.ticker)) return t.vout.forEach(e => {
                        Array.isArray(e.addresses) && e.addresses.length > 0 && (a = a.add(new this.wallet.BN(e.value)))
                    }), this.wallet.toCurrencyUnit(a);
                    const n = new this.wallet.BN(t.fees);
                    let s = [];
                    t.vin.forEach(t => {
                        Array.isArray(t.addresses) && (s = s.concat(t.addresses), t.addresses.includes(e) && (r = r.add(new this.wallet.BN(t.value))))
                    }), t.vout.forEach(t => {
                        Array.isArray(t.addresses) && (s = s.concat(t.addresses), t.addresses.includes(e) && (a = a.add(new this.wallet.BN(t.value))))
                    });
                    const i = s.every(t => t === e),
                        o = this.wallet.decimal;
                    if (i) {
                        if ("KMD" === this.wallet.ticker) {
                            const e = a.sub(r);
                            if (e.gten(0)) return (0, u.toCurrency)(e, o)
                        }
                        return (0, u.toCurrency)(t.fees, o)
                    }
                    const c = this.getTxDirection(e, t) ? a : r.sub(a).sub(n);
                    return (0, u.toCurrency)(c, o)
                }
                getTxNonce(e) {
                    if (e.ethereumSpecific) return e.ethereumSpecific.nonce
                }
                getTxDirection(e, t) {
                    if (["ETH", "BSC"].includes(this.wallet.ticker)) return t.vout[0].addresses && t.vout[0].addresses[0].toLowerCase() === e.toLowerCase();
                    const r = t.vin && t.vin.filter(({
                            addresses: e
                        }) => Array.isArray(e)).some(({
                            addresses: t
                        }) => t.some(t => t === e)),
                        a = t.vout && t.vout.filter(({
                            addresses: e
                        }) => Array.isArray(e)).some(({
                            addresses: t
                        }) => t.some(t => t === e)),
                        n = t.vout && t.vout.filter(({
                            addresses: e
                        }) => Array.isArray(e)).some(({
                            addresses: t
                        }) => t.some(t => t !== e));
                    return !(!a || r) || !(!r || !a || n || "KMD" !== this.wallet.ticker)
                }
                getTxOtherSideAddress(e, t) {
                    if (!e) throw new Error("selfAddress is not defined");
                    const r = this.getTxDirection(e, t);
                    if (["ETH", "BSC"].includes(this.wallet.ticker)) return r ? t.vin[0].addresses[0] : t.vout[0].addresses && t.vout[0].addresses[0] || e;
                    if (!t.vin) return "...";
                    let a = [],
                        n = [];
                    if (t.vout.forEach(e => {
                            a = a.concat(e.addresses)
                        }), t.vin.forEach(e => {
                            n = n.concat(e.addresses)
                        }), r) {
                        return t.vin && t.vin.filter(({
                            addresses: e
                        }) => Array.isArray(e)).some(({
                            addresses: t
                        }) => t.some(t => t !== e)) ? n.find(t => t !== e) : "Claim"
                    }
                    if (a.reduce((t, r) => r === e ? t + 1 : t, 0) === a.length) return e;
                    return a.find(t => t !== e)
                }
                calculateBalance(e = []) {
                    return e.reduce((e, {
                        value: t
                    }) => new this.wallet.BN(t).add(e), new this.wallet.BN("0"))
                }
                getUserTokenList(e) {
                    return this.request(this.getInfoUrl(e), "get", this.getUserTokenListParams(), "", this.getTransactionsOptions()).then(e => e.tokens.map(e => ({
                        contractAddress: e.contract,
                        decimals: 0,
                        ...e
                    })))
                }
                async getBannedTokensList() {
                    let e;
                    try {
                        e = await n.default.get("ethereum-tokens-banned", !0)
                    } catch (e) {
                        o.default.error({
                            instance: this,
                            error: e
                        })
                    }
                    return Array.isArray(e) ? e : []
                }
                async getNonce(e) {
                    return (await this.request(this.getInfoUrl(e))).nonce
                }
                getTokensInfo() {
                    return 0
                }
                getTokenBalanceByContractAddress({
                    info: e,
                    tokenTicker: t
                }) {
                    if ("undefined" === e && "undefined" === e.tokenBalances) throw new Error("BlockbookV2Explorer: getTokenBalanceByContractAddress error: info.tokenBalances must be object");
                    return e.tokenBalances[t]
                }
                async getTransactionUnmodified(e) {
                    return this.request(this.getTransactionUrl(e), this.getTransactionMethod(), this.getTransactionParams(e), d.GET_TRANSACTION_TYPE, this.getTransactionOptions())
                }
                getTxFee(e) {
                    return this.wallet.toCurrencyUnit(e && e.fees || 0)
                }
            }
            var h = BlockbookV2Explorer;
            t.default = h
        },
        2077: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Changenow", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "Simplex", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            });
            var n = a(r(2078)),
                s = a(r(4416))
        },
        2078: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.TICKER_MAPPING = void 0;
            var n = a(r(208)),
                s = a(r(207)),
                i = a(r(57)),
                o = a(r(67)),
                c = r(321),
                l = r(29),
                d = a(r(4412)),
                u = a(r(4413)),
                h = a(r(4414)),
                g = a(r(4415));

            function f(e, t) {
                m(e, t), t.add(e)
            }

            function m(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function p(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            const T = {
                "bsc|bnb|": "BSC",
                "trx|usdt|TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t": "TRX-USDT",
                "trx|bttc|TAFjULxiVgT4qWk6UZwjqwZXTSaGaqnVp4": "BTT",
                "nano|xno|": "NANO",
                "op|eth|": "ETHOP",
                "arbitrum|eth|": "ETHARB"
            };
            t.TICKER_MAPPING = T;
            const w = ({
                contract: e,
                parent: t,
                ticker: r
            }) => ({
                contract: e,
                parent: t,
                ticker: r
            });
            var x = new WeakMap,
                y = new WeakSet,
                v = new WeakSet,
                E = new WeakSet;
            async function A() {
                return void 0 === (0, s.default)(this, x) && (0, n.default)(this, x, i.default.get("https://move-api.atomicwallet.io/affiliate/confirmations")), (await (0, s.default)(this, x)).data
            }
            async function b(e) {
                const [t, r] = await Promise.all([p(this, y, A).call(this), o.default.get(c.ConfigKey.ChangeNowUniqueTickers)]), {
                    confirmations: a
                } = t.find(({
                    ticker: t,
                    network: a
                }) => {
                    var n;
                    return e.isMatch({
                        ticker: null !== (n = r[t]) && void 0 !== n ? n : t,
                        parent: a
                    })
                });
                return a
            }
            async function k(e, t) {
                return e.getTransaction(t)
            }
            var _ = class ChangeNowService {
                constructor() {
                    var e, t, r;
                    f(this, E), f(this, v), f(this, y), r = {
                        writable: !0,
                        value: void 0
                    }, m(e = this, t = x), t.set(e, r), this.apiClient = new u.default(g.default.apiKey), this.walletConverter = new h.default(this.apiClient)
                }
                getInternalContract({
                    network: e,
                    ticker: t,
                    tokenContract: r
                }) {
                    return this.walletConverter.isContractIgnored(e, t) ? void 0 : r
                }
                getInternalTicker({
                    network: e,
                    ticker: t,
                    tokenContract: r
                }) {
                    var a;
                    return null !== (a = T[`${e}|${t}|${null!=r?r:""}`]) && void 0 !== a ? a : t.toUpperCase()
                }
                getInternalWalletData({
                    network: e,
                    ticker: t,
                    tokenContract: r,
                    legacyTicker: a
                }) {
                    if (!a) return {
                        ticker: this.getInternalTicker({
                            ticker: t,
                            network: e,
                            tokenContract: r
                        }),
                        parentTicker: e.toUpperCase()
                    };
                    const [, n] = Object.entries(d.default).find(([e]) => e === a.toLowerCase()) || [];
                    return n || {
                        ticker: a
                    }
                }
                getName() {
                    return "ChangeNow"
                }
                async getDefaultPairQueryParams(e, t) {
                    const [r, a] = await Promise.all([this.walletConverter.getTarget(e), this.walletConverter.getTarget(t)]);
                    return {
                        fromCurrency: r.ticker,
                        fromNetwork: r.network,
                        toCurrency: a.ticker,
                        toNetwork: a.network
                    }
                }
                async getExchangeAmount(e, t, r) {
                    if (!r || !Number(r)) return 0;
                    try {
                        const a = await this.getDefaultPairQueryParams(e, t),
                            {
                                toAmount: n
                            } = await this.apiClient.queryGet("estimated-amount", Object.assign({
                                fromAmount: (r || "0").replace(/,/g, ".")
                            }, a));
                        return n
                    } catch (e) {
                        throw new l.ExchangeConnectionError
                    }
                }
                async getMinAndMaxAmount(e, t) {
                    try {
                        const r = await this.getDefaultPairQueryParams(e, t),
                            {
                                minAmount: a
                            } = await this.apiClient.queryGet("min-amount", r);
                        return {
                            min: a,
                            max: null
                        }
                    } catch (e) {
                        throw new l.ExchangeConnectionError
                    }
                }
                getCurrencies() {
                    return this.apiClient.queryGet("currencies")
                }
                async getConfirmationsData(e, t) {
                    try {
                        const [r, {
                            confirmations: a
                        }] = await Promise.all([p(this, v, b).call(this, e), p(this, E, k).call(this, e, t)]);
                        return {
                            current: a,
                            required: r,
                            remaining: r > a ? r - a : 0
                        }
                    } catch (e) {
                        throw new l.ExchangeConfirmsCalculationError({
                            cause: e
                        })
                    }
                }
                async createTransaction(e, t, r, a, n, s, i, o = {}) {
                    const [{
                        network: c,
                        ticker: d
                    }, {
                        network: u,
                        ticker: h
                    }] = await Promise.all([this.walletConverter.getTarget(e), this.walletConverter.getTarget(t)]), g = {
                        address: r,
                        fromAmount: n,
                        fromCurrency: d,
                        fromNetwork: c,
                        toCurrency: h,
                        toNetwork: u,
                        refundAddress: a,
                        flow: "standard",
                        type: "direct",
                        userId: i.hash,
                        payload: {
                            bnb: i.bnbAddr,
                            eth: i.ethAddr
                        },
                        ...o
                    };
                    s && (g.extraId = s);
                    try {
                        var f, m, p;
                        const r = await this.apiClient.queryPost("", g);
                        return {
                            amountToReceive: r.toAmount,
                            amountToSend: r.fromAmount,
                            from: Object.assign({
                                network: null !== (f = e.parent) && void 0 !== f ? f : e.network
                            }, w(e)),
                            to: Object.assign({
                                network: null !== (m = t.parent) && void 0 !== m ? m : t.network
                            }, w(t)),
                            id: r.id,
                            orderId: r.id,
                            payinAddress: r.payinAddress,
                            payinExtraId: null !== (p = r.payinExtraId) && void 0 !== p ? p : null,
                            payoutAddress: r.payoutAddress
                        }
                    } catch (e) {
                        throw new l.ExchangeConnectionError
                    }
                }
                async isAvailableToBuy(e) {
                    const {
                        network: t,
                        ticker: r
                    } = await this.walletConverter.getTarget(e);
                    return (await this.apiClient.queryGet("exchange/currencies", {
                        toNetwork: t,
                        toCurrency: r
                    })).length > 0
                }
                validateExchangeTx(e) {
                    const {
                        id: t = "",
                        amountToSend: r = "",
                        payinAddress: a = ""
                    } = e;
                    if (!t || void 0 === t) throw new l.ExchangeValidationError;
                    if (!r || void 0 === r) throw new l.ExchangeValidationError;
                    if (!a || void 0 === a) throw new l.ExchangeValidationError;
                    return e
                }
                async getStatus(e) {
                    try {
                        const {
                            amountReceive: t,
                            payinHash: r,
                            payoutHash: a,
                            status: n
                        } = await this.apiClient.queryGet("by-id", {
                            id: e
                        });
                        if (void 0 !== n) return Object.assign({
                            id: e,
                            payinHash: r,
                            payoutHash: a,
                            status: n
                        }, t ? {
                            amountToReceive: t
                        } : {});
                        throw new l.ExchangeConnectionError
                    } catch (e) {
                        throw new l.ExchangeConnectionError
                    }
                }
                getTransactions(e) {
                    return Promise.all(e.map(e => this.getStatus(e)))
                }
                getExchangeActions(e) {
                    return this.apiClient.queryGet("actions", {
                        id: e
                    })
                }
                exchangeContinue(e) {
                    return this.apiClient.queryPost("continue", {
                        id: e
                    })
                }
                exchangeRefund(e, t, r) {
                    return this.apiClient.queryPost("refund", Object.assign({
                        address: t,
                        id: e
                    }, r ? {
                        extraId: r
                    } : {}))
                }
            };
            t.default = _
        },
        2426: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class ExchangeConnectionError extends Error {
                constructor() {
                    super("Can't connect to ChangeNOW")
                }
            }
            var a = ExchangeConnectionError;
            t.default = a
        },
        2427: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class ExchangeValidationError extends Error {
                constructor() {
                    super("Exchange Transaction validation failed, probably exchange tx has not been created properly")
                }
            }
            var a = ExchangeValidationError;
            t.default = a
        },
        2428: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(374));
            class ExplorerRequestError extends n.default {
                constructor(e) {
                    super(e), this.errorData = e.errorData, this.name = this.constructor.name
                }
            }
            var s = ExplorerRequestError;
            t.default = s
        },
        2430: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(151)),
                s = r(26),
                i = a(r(374));
            class ExternalError extends i.default {
                constructor(e) {
                    super(e), (0, n.default)(this, "defaultType", s.EXTERNAL_ERROR), this.name = this.constructor.name
                }
            }
            var o = ExternalError;
            t.default = o
        },
        2431: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(374));
            class WalletError extends n.default {
                constructor(e) {
                    super(e), this.name = "WalletError"
                }
            }
            var s = WalletError;
            t.default = s
        },
        2432: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class RequestStatusCodeError extends Error {
                constructor(e) {
                    super("Request Status Code Error " + e)
                }
            }
            var a = RequestStatusCodeError;
            t.default = a
        },
        2433: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(374));
            class WalletsCollectionError extends n.default {
                constructor(e) {
                    super(e), this.name = this.constructor.name
                }
            }
            var s = WalletsCollectionError;
            t.default = s
        },
        2434: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(374));
            class InsufficientFundsError extends n.default {
                constructor(e) {
                    super(e), this.name = "InsufficientFundsError"
                }
            }
            var s = InsufficientFundsError;
            t.default = s
        },
        2435: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class UndeclaredAbstractMethodError extends Error {
                constructor(e, t) {
                    super(`You should declare the '${e}' abstract method in the ${t.constructor.name} class!`)
                }
            }
            var a = UndeclaredAbstractMethodError;
            t.default = a
        },
        2436: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class AjvValidationError extends Error {
                constructor(e) {
                    super("Schema validation failed"), this.validationErrors = e
                }
            }
            var a = AjvValidationError;
            t.default = a
        },
        2437: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class UnknownConfigKeyError extends Error {
                constructor(e) {
                    super("Unknown config key: " + e)
                }
            }
            t.default = UnknownConfigKeyError
        },
        2438: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class DuplicatedConfigRegistrationError extends Error {
                constructor(e) {
                    super("Trying to register config which is already registered: " + e)
                }
            }
            t.default = DuplicatedConfigRegistrationError
        },
        2439: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class ExchangeConfirmsCalculationError extends Error {
                constructor(e) {
                    super("Remaining confirmations cannot be calculated", e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name
                }
            }
            var a = ExchangeConfirmsCalculationError;
            t.default = a
        },
        2525: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = [{
                code: "BTC",
                name: "Bitcoin",
                char: "Ƀ"
            }, {
                code: "USD",
                name: "United States dollar",
                char: "&#36;",
                default: 200
            }, {
                code: "EUR",
                name: "Euro",
                char: "&#8364;",
                default: 200
            }, {
                code: "GBP",
                name: "British pound",
                char: "&#163;",
                default: 200
            }, {
                code: "AUD",
                name: "Australian dollar",
                char: "&#36;"
            }, {
                code: "BRL",
                name: "Brazilian real",
                char: "&#82;&#36;"
            }, {
                code: "CAD",
                name: "Canadian dollar",
                char: "&#36;"
            }, {
                code: "CHF",
                name: "Swiss franc",
                char: "&#67;&#72;&#70;"
            }, {
                code: "CLP",
                name: "Chilean peso",
                char: "&#36;"
            }, {
                code: "CNY",
                name: "Chinese yuan",
                char: "&#165;"
            }, {
                code: "CZK",
                name: "Czech koruna",
                char: "&#75;&#269;"
            }, {
                code: "DKK",
                name: "Danish krone",
                char: "&#107;&#114;"
            }, {
                code: "HKD",
                name: "Hong Kong dollar",
                char: "&#36;"
            }, {
                code: "HUF",
                name: "Hungrian forint",
                char: "&#70;&#116;"
            }, {
                code: "IDR",
                name: "Indonesian rupiah",
                char: "&#82;&#112;"
            }, {
                code: "ILS",
                name: "Israel new shekel",
                char: "&#8362;"
            }, {
                code: "INR",
                name: "Indian rupee",
                char: "&#8377;"
            }, {
                code: "JPY",
                name: "Japanese yen",
                char: "&#165;"
            }, {
                code: "KRW",
                name: "South Korean won",
                char: "&#65510;"
            }, {
                code: "MXN",
                name: "Mexican peso",
                char: "&#36;"
            }, {
                code: "MYR",
                name: "Malaysian ringgit",
                char: "&#82;&#77;"
            }, {
                code: "NOK",
                name: "Norway krone",
                char: "&#107;&#114;"
            }, {
                code: "NZD",
                name: "New Zealand dollar",
                char: "&#36;"
            }, {
                code: "PHP",
                name: "Philippine peso",
                char: "&#8369;"
            }, {
                code: "PKR",
                name: "Pakistani ruppie",
                char: "&#8360;"
            }, {
                code: "PLN",
                name: "Polish zloty",
                char: "&#122;&#322;"
            }, {
                code: "RUB",
                name: "Russian ruble",
                char: "&#8381;"
            }, {
                code: "SEK",
                name: "Swedish krona",
                char: "&#107;&#114;"
            }, {
                code: "SGD",
                name: "Singapore dollar",
                char: "&#36;"
            }, {
                code: "THB",
                name: "Thai bat",
                char: "&#3647;"
            }, {
                code: "TRY",
                name: "Turkish lira",
                char: "₺"
            }, {
                code: "TWD",
                name: "New Taiwan dollar",
                char: "&#78;&#84;&#36;"
            }, {
                code: "ZAR",
                name: "South African rand",
                char: "&#82;"
            }, {
                code: "AED",
                name: "United Arab Emirates Dirham",
                char: "&#82;"
            }, {
                code: "UAH",
                name: "Ukrainian hryvnia",
                char: "&#8372;"
            }, {
                code: "VND",
                name: "Vietnamese Dong",
                char: "&#x20ab;"
            }, {
                code: "KZT",
                name: "Kazakhstani tenge",
                char: "&#8376;"
            }, {
                code: "DOP",
                name: "Dominican peso",
                char: "&#8369;"
            }, {
                code: "PEN",
                name: "Peruvian sol",
                char: "&#x53;&#x2f;&#x2e;"
            }, {
                code: "MDL",
                name: "Moldovan leu",
                char: "L"
            }, {
                code: "QAR",
                name: "Qatari riyal",
                char: "QR"
            }, {
                code: "GEL",
                name: "Georgian lari",
                char: "ლ;"
            }, {
                code: "UYU",
                name: "Uruguayan peso",
                char: "$U"
            }, {
                code: "CRC",
                name: "Costa Rican colón",
                char: "₡"
            }, {
                code: "NAD",
                name: "Namibian dollar",
                char: "N$"
            }, {
                code: "AZN",
                name: "Azerbaijani manat",
                char: "₼"
            }, {
                code: "NGN",
                name: "Nigerian naira",
                char: "₦"
            }, {
                code: "BGN",
                name: "Bulgarian lev",
                char: "lv."
            }, {
                code: "MAD",
                name: "Moroccan dirham",
                char: "DH"
            }, {
                code: "RON",
                name: "Romanian leu",
                char: "L"
            }, {
                code: "ARS",
                name: "Argentine peso",
                char: "Arg$"
            }, {
                code: "ALL",
                name: "Albanian Lek",
                char: "Lek"
            }, {
                code: "BDT",
                name: "Bangladeshi taka",
                char: "৳"
            }, {
                code: "EGP",
                name: "Egyptian pound",
                char: "£E"
            }, {
                code: "HRK",
                name: "Croatian kuna",
                char: "kn"
            }, {
                code: "JOD",
                name: "Jordanian dinar",
                char: "JD"
            }, {
                code: "KWD",
                name: "Kuwaiti dinar",
                char: "KD"
            }, {
                code: "COP",
                name: "Colombian peso",
                char: "$"
            }, {
                code: "SAR",
                name: "Saudi riyal",
                char: "SR"
            }, {
                code: "BHD",
                name: "Bahraini dinar",
                char: "BD"
            }, {
                code: "IQD",
                name: "Iraqi dinar",
                char: "ID;"
            }, {
                code: "OMR",
                name: "Omani rial",
                char: "R.O;"
            }, {
                code: "LKR",
                name: "Sri Lankan rupee",
                char: "௹;"
            }, {
                code: "BOB",
                name: "Bolivian boliviano",
                char: "Bs;"
            }, {
                code: "ANG",
                name: "Netherlands Antillean guilder",
                char: "NAƒ"
            }, {
                code: "BBD",
                name: "Barbados dollar ",
                char: "BBD$"
            }, {
                code: "BMD",
                name: "Bermudian dollar",
                char: "$"
            }, {
                code: "BND",
                name: "Brunei dollar",
                char: "B$"
            }, {
                code: "BWP",
                name: "Botswana pula",
                char: "P"
            }, {
                code: "DJF",
                name: "Djiboutian franc",
                char: "Fdj"
            }, {
                code: "GHS",
                name: "Ghanaian cedi",
                char: "₵"
            }, {
                code: "GTQ",
                name: "Guatemalan quetzal",
                char: "Q"
            }, {
                code: "TZS",
                name: "Tanzanian shilling",
                char: "TSh"
            }, {
                code: "UGX",
                name: "Ugandan shilling",
                char: "USh"
            }, {
                code: "XOF",
                name: "CFA franc",
                char: "F.CFA;"
            }, {
                code: "KGS",
                name: "Kyrgyzstani som",
                char: "с"
            }, {
                code: "MZN",
                name: "Mozambican metical",
                char: "MTn"
            }, {
                code: "BAM",
                name: "Bosnia and Herzegovina convertible mark",
                char: "KM"
            }, {
                code: "MNT",
                name: "Mongolian tögrög",
                char: "₮"
            }, {
                code: "AMD",
                name: "Armenian dram",
                char: "֏"
            }, {
                code: "KHR",
                name: "Cambodian riel",
                char: "៛"
            }, {
                code: "KYD",
                name: "Cayman Islands dollar",
                char: "CI$"
            }, {
                code: "LBP",
                name: "Lebanese pound",
                char: "LL"
            }, {
                code: "PAB",
                name: "Panamanian balboa",
                char: "B/."
            }, {
                code: "PGK",
                name: "Papua New Guinean kina",
                char: "K"
            }, {
                code: "PYG",
                name: "Paraguayan guaraní",
                char: "₲"
            }, {
                code: "KES",
                name: "Kenyan shilling",
                char: "KSh"
            }, {
                code: "RSD",
                name: "Serbian dinar",
                char: "DIN"
            }, {
                code: "SOS",
                name: "Somali shilling",
                char: "Sh.So."
            }, {
                code: "MOP",
                name: "Macanese pataca",
                char: "$"
            }, {
                code: "MUR",
                name: "Mauritian rupee",
                char: "Re/Rs"
            }, {
                code: "ISK",
                name: "Icelandic króna",
                char: "kr"
            }, {
                code: "JMD",
                name: "Jamaican dollar",
                char: "$"
            }, {
                code: "MKD",
                name: "Macedonian denar",
                char: "den"
            }]
        },
        2528: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(1461)),
                s = a(r(67)),
                i = a(r(20)),
                o = a(r(2552)),
                c = a(r(55)),
                l = a(r(74)),
                d = a(r(230));
            const u = {
                WebSocket: global.WebSocket,
                connectionTimeout: 2e3,
                maxReconnectionDelay: 2e4,
                minReconnectionDelay: 1e4,
                maxRetries: 10
            };
            class BinanceDex extends i.default {
                constructor(...e) {
                    super(...e), this.socket = null
                }
                getAllowedTickers() {
                    return ["BNB"]
                }
                getTransactionUrl(e) {
                    return `${this.config.baseUrl}api/v1/tx/${e}`
                }
                getTransactionParams() {
                    return {
                        format: "json"
                    }
                }
                getLatestBlockUrl() {
                    return this.config.baseUrl + "api/v1/node-info"
                }
                getBlockUrl(e) {
                    return `${this.config.baseUrl}api/v2/transactions-in-block/${e}`
                }
                async getBlock(e) {
                    return await this.request(this.getBlockUrl(e))
                }
                async getTransactions(e, t = "BNB") {
                    const {
                        tx: r
                    } = await this.request(`${this.config.baseUrl}api/v1/transactions?address=${e}`);
                    return this.modifyTransactionsResponse(r.filter(e => "TRANSFER" === e.type).filter(e => e.txAsset === t), e)
                }
                async getMultisendTransactions(e, t) {
                    this.latestBlock = await this.getLatestBlock();
                    return (await Promise.all(t.map(async ({
                        hash: t,
                        height: r
                    }) => {
                        const a = await this.getBlock(r).catch(e => console.warn("GetBlockError", e));
                        if (!a) return;
                        const {
                            subTransactions: n = [],
                            memo: s,
                            timeStamp: i
                        } = a.tx.find(e => e.txHash === t), o = n.find(t => [t.toAddr, t.fromAddr].includes(e));
                        if (!o) return;
                        const c = o.fromAddr,
                            l = o.toAddr,
                            d = o.value,
                            u = o.txAsset,
                            h = Number(this.latestBlock) - Number(r);
                        return this.modifyMultisendTransactionResponse({
                            ticker: u,
                            value: d,
                            memo: s,
                            fromAddr: c,
                            toAddr: l,
                            hash: t,
                            timeStamp: i,
                            confirmations: h
                        }, e)
                    }))).filter(Boolean)
                }
                async modifyMultisendTransactionResponse(e, t) {
                    return new l.default({
                        ticker: e.ticker,
                        name: this.wallet.name,
                        alias: this.wallet.alias,
                        explorer: this.constructor.name,
                        txid: this.getTxHash(e),
                        fee: this.getTxFee(e),
                        feeTicker: this.wallet.parent,
                        direction: this.getTxDirection(t, e),
                        otherSideAddress: this.getTxOtherSideAddress(t, e),
                        amount: this.getTxValue(t, e),
                        datetime: this.getTxDateTime(e),
                        memo: this.getTxMemo(e),
                        confirmations: this.getTxConfirmations(e)
                    })
                }
                modifyLatestBlockResponse(e) {
                    return e.sync_info.latest_block_height
                }
                getTxHash(e) {
                    return e.hash || e.txHash
                }
                getTxDirection(e, t) {
                    return t.toAddr === e
                }
                getTxOtherSideAddress(e, t) {
                    return this.getTxDirection(e, t) ? t.fromAddr : t.toAddr
                }
                getTxValue(e, t) {
                    return t.value.replace(/(\.\d*[1-9])0+$|\.0*$/, "$1")
                }
                getTxDateTime(e) {
                    return new Date(e.timeStamp)
                }
                getTxMemo(e) {
                    return e.memo
                }
                getTxConfirmations(e) {
                    return e.confirmations || e.txAge
                }
                async getTokenList(e = []) {
                    return (await this.request(this.config.baseUrl + "api/v1/tokens?limit=1000").catch(() => o.default)).filter(t => e.includes(t.symbol))
                }
                async getAtomicTokenList() {
                    let e;
                    try {
                        e = await s.default.get("bnb-tokens", !0)
                    } catch (e) {
                        c.default.error({
                            instance: this,
                            error: e
                        })
                    }
                    return e || o.default
                }
                setSocketClient(e) {
                    this.socket ? this.socket.reconnect() : this.socket = new n.default(`${this.config.websocketUrl}${e}`, void 0, u)
                }
                disconnectSocket() {
                    this.socket.close()
                }
                async connectSocket(e) {
                    this.setSocketClient(e), this.socket._listeners.message.length > 0 ? console.warn("[BNB][websocket] already have message listener, skip") : this.socket.addEventListener("message", async t => {
                        try {
                            const r = JSON.parse(t.data);
                            if ("accounts" === r.stream && this.wallet.updateBalances(r.data.B), "transfers" === r.stream) {
                                const t = r.data,
                                    a = t.H,
                                    n = t.f;
                                t.t.forEach(t => {
                                    const r = t.o,
                                        s = r === e;
                                    t.c.forEach(e => {
                                        const t = e.a,
                                            i = String(e.A).replace(/(\.\d*[1-9])0+$|\.0*$/, "$1"),
                                            o = new l.default({
                                                ticker: t,
                                                txid: a,
                                                direction: s,
                                                otherSideAddress: s ? n : r,
                                                amount: i,
                                                datetime: new Date,
                                                alias: this.wallet.alias
                                            });
                                        d.default.filterAndUpdateTransactions([o]), this.eventEmmiter.emit(`${this.wallet.parent}-${t}::new-socket-tx`, {
                                            unconfirmedTx: o
                                        })
                                    })
                                })
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    })
                }
            }
            var h = BinanceDex;
            t.default = h
        },
        2553: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = r(29),
                i = r(26);
            class ArkExplorer extends n.default {
                async getTransactions(e) {
                    try {
                        return await super.getTransactions(e)
                    } catch (e) {
                        var t, r;
                        if (404 === (null == e || null === (t = e.errorData) || void 0 === t || null === (r = t.response) || void 0 === r ? void 0 : r.status)) return [];
                        throw e
                    }
                }
                getAllowedTickers() {
                    return ["ARK"]
                }
                getApiPrefix() {
                    return "api"
                }
                getInfoUrl(e) {
                    return `${this.getApiPrefix()}/wallets/${e}`
                }
                modifyInfoResponse(e) {
                    return {
                        balance: e.data.balance,
                        transactions: this.wallet.transactions,
                        nonce: e.data.nonce
                    }
                }
                getTransactionUrl(e) {
                    return `${this.getApiPrefix()}/transactions/${e}`
                }
                getTransactionsUrl(e) {
                    return `${this.getApiPrefix()}/wallets/${e}/transactions`
                }
                getTransactionsParams(e, t = 0, r = this.defaultTxLimit) {
                    return {
                        limit: r,
                        orderBy: "timestamp:desc",
                        page: t > r ? parseInt(t / r, 10) : 1
                    }
                }
                modifyTransactionsResponse(e, t) {
                    return super.modifyTransactionsResponse(e.data, t)
                }
                getTxHash(e) {
                    return e.id
                }
                getTxDirection(e, t) {
                    return t.recipient === e
                }
                getTxOtherSideAddress(e, t) {
                    return this.getTxDirection(e, t) ? t.sender : t.recipient
                }
                getTxValue(e, t) {
                    return Number(this.wallet.toCurrencyUnit(this.getTxDirection(e, t) ? t.amount : new this.wallet.BN(t.amount).add(new this.wallet.BN(t.fee))))
                }
                getTxDateTime(e) {
                    return new Date(Number(e.timestamp.unix + "000"))
                }
                getSendTransactionUrl() {
                    return this.getApiPrefix() + "/transactions"
                }
                getSendTransactionParams(e) {
                    return {
                        transactions: [e]
                    }
                }
                modifySendTransactionResponse(e) {
                    if (e.data.invalid.length > 0) throw new s.ExplorerRequestError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error(e.data.invalid[0]),
                        instance: this
                    });
                    if (0 === e.data.broadcast.length) throw new s.ExplorerRequestError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error("Not found broadcast transaction"),
                        instance: this
                    });
                    return {
                        txid: e.data.broadcast[0]
                    }
                }
                getTxFee(e) {
                    return this.wallet.toCurrencyUnit(e && e.fee || 0)
                }
            }
            var o = ArkExplorer;
            t.default = o
        },
        29: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AjvValidationError", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(t, "DuplicatedConfigRegistrationError", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(t, "ExchangeConfirmsCalculationError", {
                enumerable: !0,
                get: function() {
                    return T.default
                }
            }), Object.defineProperty(t, "ExchangeConnectionError", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "ExchangeValidationError", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "ExplorerRequestError", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "ExternalError", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "InsufficientFundsError", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(t, "InternalError", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "RequestStatusCodeError", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "UndeclaredAbstractMethodError", {
                enumerable: !0,
                get: function() {
                    return g.default
                }
            }), Object.defineProperty(t, "UnknownConfigKeyError", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(t, "WalletError", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "WalletsCollectionError", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            });
            var n = a(r(2426)),
                s = a(r(2427)),
                i = a(r(2428)),
                o = a(r(1433)),
                c = a(r(2430)),
                l = a(r(2431)),
                d = a(r(2432)),
                u = a(r(2433)),
                h = a(r(2434)),
                g = a(r(2435)),
                f = a(r(2436)),
                m = a(r(2437)),
                p = a(r(2438)),
                T = a(r(2439))
        },
        2912: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = a(r(74)),
                i = r(29),
                o = r(26),
                c = r(95);
            class AlgoExplorer extends n.default {
                getAllowedTickers() {
                    return ["ALGO"]
                }
                getApiPrefix() {
                    return "v2"
                }
                getInfoUrl(e) {
                    return `${this.getApiPrefix()}/accounts/${e}`
                }
                modifyInfoResponse(e) {
                    return {
                        balance: e.account.amount
                    }
                }
                getTransactionUrl(e) {
                    return `${this.getApiPrefix()}/transaction/${e}`
                }
                getTransactionsUrl(e) {
                    return `${this.getApiPrefix()}/accounts/${e}/transactions`
                }
                getTransactionsParams(e, t = 0, r = this.defaultTxLimit) {
                    return {}
                }
                async getTransactions(e, t = 0, r = this.defaultTxLimit) {
                    return super.getTransactions(e, t, r)
                }
                modifyTransactionsResponse(e, t) {
                    if (!1 === Array.isArray(null == e ? void 0 : e.transactions)) throw new i.ExplorerRequestError({
                        type: o.GET_TRANSACTIONS_TYPE,
                        error: e,
                        instance: this
                    });
                    const r = e["current-round"];
                    return e.transactions.map(e => new s.default({
                        walletid: this.wallet.id,
                        ticker: this.wallet.ticker,
                        name: this.wallet.name,
                        alias: this.wallet.alias,
                        explorer: this.constructor.name,
                        txid: this.getTxHash(e),
                        direction: this.getTxDirection(t, e),
                        otherSideAddress: this.getTxOtherSideAddress(t, e),
                        amount: this.getTxValue(t, e),
                        fee: this.wallet.toCurrencyUnit(e.fee),
                        feeTicker: this.wallet.parent,
                        datetime: this.getTxDateTime(e),
                        memo: this.getTxMemo(e),
                        confirmations: this.getTxConfirmations(r, e)
                    }))
                }
                getTxHash(e) {
                    return e.id
                }
                getTxDirection(e, t) {
                    return t["payment-transaction"].receiver === e
                }
                getTxOtherSideAddress(e, t) {
                    return this.getTxDirection(e, t) ? t.sender : t["payment-transaction"].receiver
                }
                getTxValue(e, t) {
                    return Number(this.wallet.toCurrencyUnit(this.getTxDirection(e, t) ? t["payment-transaction"].amount : new this.wallet.BN(t["payment-transaction"].amount).add(new this.wallet.BN(t.fee))))
                }
                getTxDateTime(e) {
                    return (0, c.convertSecondsToDateTime)(e["round-time"])
                }
                getTxConfirmations(e, t) {
                    return e - t["confirmed-round"]
                }
            }
            var l = AlgoExplorer;
            t.default = l
        },
        2913: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = a(r(74));
            class DoraExplorer extends n.default {
                constructor(e) {
                    super(e), this.ticker = this.wallet.ticker.toUpperCase().substr(0, 3), this.height = 0
                }
                getAllowedTickers() {
                    return ["NEO", "GAS"]
                }
                getInitParams() {
                    return {
                        ...super.getInitParams(),
                        headers: {
                            "X-Referer": "https://atomicwallet.io"
                        }
                    }
                }
                async getInfo(e) {
                    let t = [];
                    this.request("height").then(e => {
                        this.height = Number(e.height)
                    });
                    try {
                        t = await this.request("balance/" + e)
                    } catch (e) {
                        console.error(e)
                    }
                    const r = {
                        NEO: "0",
                        GAS: "0"
                    };
                    let a;
                    return t.forEach(({
                        asset_name: e,
                        balance: t
                    }) => {
                        e === this.ticker && (a = t), ["NEO", "GAS"].includes(e) && (r[e] = a)
                    }), {
                        balance: a,
                        balances: r
                    }
                }
                async getTransactions({
                    address: e
                }) {
                    const t = await this.request(`transfer_history/${e}/1`);
                    return this.modifyTransactionsResponse(t, e)
                }
                modifyTransactionsResponse(e, t) {
                    return e.items.filter(e => e.symbol === this.ticker).map(e => new s.default({
                        ticker: this.ticker,
                        name: this.wallet.name,
                        alias: this.wallet.alias,
                        txid: this.getTxHash(e),
                        walletid: this.wallet.id,
                        datetime: this.getTxDateTime(e),
                        amount: this.getTxValue(t, e),
                        direction: this.getTxDirection(t, e),
                        confirmations: this.getTxConfirmations(e),
                        otherSideAddress: this.getTxOtherSideAddress(t, e)
                    }))
                }
                getTxConfirmations(e) {
                    return this.height ? this.height - e.block : 1
                }
                getTxHash(e) {
                    return e.txid
                }
                getTxDirection(e, t) {
                    return t.to === e
                }
                getTxOtherSideAddress(e, t) {
                    return this.getTxDirection(e, t) ? t.from : t.to
                }
                getTxValue(e, t) {
                    return t.amount
                }
                getTxDateTime(e) {
                    return new Date(1e3 * Number(e.time.split(".")[0]))
                }
            }
            var i = DoraExplorer;
            t.default = i
        },
        2921: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = r(29),
                i = r(26);
            class AtomicExplorer extends n.default {
                getAllowedTickers() {
                    return ["KMD"]
                }
                async getInfo(e) {
                    const t = await this.request("rewards?address=" + e);
                    if ("success" !== t.msg) throw new s.ExplorerRequestError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error(JSON.stringify(t)),
                        instance: this
                    });
                    return {
                        balance: t.result.balanceSats,
                        balances: t.result
                    }
                }
                async getRewards(e) {
                    const t = await this.request("rewards?address=" + e);
                    if ("success" !== t.msg) throw new s.ExplorerRequestError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error(JSON.stringify(t)),
                        instance: this
                    });
                    return t.result.interest
                }
            }
            var o = AtomicExplorer;
            t.default = o
        },
        2925: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20));
            class DcrDataExplorer extends n.default {
                getAllowedTickers() {
                    return ["DCR"]
                }
                getInfoUrl(e) {
                    return `${this.getApiPrefix()}/address/${e}/totals`
                }
                modifyInfoResponse(e) {
                    return {
                        balance: this.wallet.toMinimalUnit(e.dcr_unspent),
                        transactions: []
                    }
                }
                getTransactionUrl(e) {
                    return `${this.getApiPrefix()}/tx/${e}`
                }
                getTransactionsUrl(e, t, r) {
                    return `${this.getApiPrefix()}/address/${e}/count/${r}/skip/${t}/raw`
                }
                async getTransactions({
                    address: e,
                    offset: t = 0,
                    limit: r = this.defaultTxLimit
                }) {
                    const a = await this.request(this.getTransactionsUrl(e, t, r), this.getTransactionsMethod(), this.getTransactionsParams(), "GetTxs");
                    return this.modifyTransactionsResponse(a, e)
                }
                getTxValue(e, t) {
                    let r = new this.wallet.BN(0),
                        a = new this.wallet.BN(0),
                        n = new this.wallet.BN(0),
                        s = new this.wallet.BN(0);
                    t.vin.forEach(t => {
                        t.prevOut.addresses && t.prevOut.addresses.length > 0 && t.prevOut.addresses[0] === e && (r = r.add(new this.wallet.BN(this.wallet.toMinimalUnit(t.amountin)))), n = n.add(new this.wallet.BN(this.wallet.toMinimalUnit(t.amountin)))
                    }), t.vout.forEach(t => {
                        t.scriptPubKey.addresses && t.scriptPubKey.addresses.length > 0 && t.scriptPubKey.addresses[0] === e && (a = a.add(new this.wallet.BN(this.wallet.toMinimalUnit(t.value)))), s = s.add(new this.wallet.BN(this.wallet.toMinimalUnit(t.value)))
                    });
                    const i = r.sub(a),
                        o = i.lt(new this.wallet.BN(0)),
                        c = i.abs(),
                        l = n.sub(s);
                    return Number(this.wallet.toCurrencyUnit(o ? c : c.sub(l)))
                }
                getTxDirection(e, t) {
                    return t.vin && !t.vin.find(({
                        prevOut: t
                    }) => t.addresses && t.addresses.length > 0 && t.addresses[0] === e)
                }
                getTxOtherSideAddress(e, t) {
                    if (!t.vin) return "...";
                    if (this.getTxDirection(e, t)) return t.vin[0].prevOut.addresses && t.vin[0].prevOut.addresses.length > 0 ? t.vin[0].prevOut.addresses[0] : "...";
                    let r = new this.wallet.BN(0),
                        a = "...";
                    return t.vout.forEach(t => {
                        t.scriptPubKey.addresses.length > 0 && t.scriptPubKey.addresses[0] !== e && r.lt(new this.wallet.BN(this.wallet.toMinimalUnit(t.value))) && (r = new this.wallet.BN(this.wallet.toMinimalUnit(t.value)), a = t.scriptPubKey.addresses[0])
                    }), a
                }
            }
            var s = DcrDataExplorer;
            t.default = s
        },
        2926: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(2927),
                s = r(2955),
                i = a(r(20)),
                o = r(29),
                c = r(26);
            class EOSNodeExplorer extends i.default {
                getAllowedTickers() {
                    return ["EOS"]
                }
                async getKeyAccounts(e) {
                    const t = await this.request(this.getApiPrefix() + "history/get_key_accounts", "post", {
                        public_key: e
                    }, "KeyAccountInfo");
                    if (!t.account_names) throw new o.WalletError({
                        type: c.LOAD_WALLET_ERROR,
                        error: new Error(`${c.PUBLIC_KEY_TO_ADDRESS_ERROR}${this.config.baseUrl}`),
                        instance: this
                    });
                    return t.account_names
                }
                async checkAccountName(e) {
                    const t = await this.request(this.getApiPrefix() + "chain/get_account", "post", {
                        account_name: e
                    }, "checkAccountName").catch(() => {
                        console.warn(e + " is already in use")
                    });
                    return !(t && t.permissions && t.permissions.length > 0)
                }
                getInfoUrl(e) {
                    return this.getApiPrefix() + "chain/get_currency_balance"
                }
                getApiPrefix() {
                    return "/v1/"
                }
                getInfoMethod() {
                    return "post"
                }
                getInfoParams(e) {
                    return {
                        code: this.wallet.assetName,
                        account: e
                    }
                }
                modifyInfoResponse(e) {
                    return {
                        balance: e,
                        transactions: []
                    }
                }
                getTransactionsUrl(e) {
                    return this.getApiPrefix() + "history/get_actions"
                }
                getTransactionsMethod() {
                    return "post"
                }
                getTransactionsParams(e, t = 0, r = this.defaultTxLimit) {
                    return {
                        pos: -1,
                        offset: -r,
                        account_name: e
                    }
                }
                modifyTransactionsResponse(e, t) {
                    return super.modifyTransactionsResponse(e.actions.filter(e => this.wallet.assetName === e.action_trace.act.account && "transfer" === e.action_trace.act.name).reduce((e, t) => (e.some(e => e.action_trace.trx_id === t.action_trace.trx_id) || e.push(t), e), []).reverse(), t)
                }
                getTxHash(e) {
                    return e.action_trace.trx_id
                }
                getTxDirection(e, t) {
                    return t.action_trace.act.data.to === e
                }
                getTxOtherSideAddress(e, t) {
                    return t.action_trace.act.data.to === e ? t.action_trace.act.data.from : t.action_trace.act.data.to
                }
                getTxValue(e, t) {
                    const r = t.action_trace.act.data.quantity.split(" ");
                    return Number(r[0])
                }
                getTxDateTime(e) {
                    return new Date(e.action_trace.block_time)
                }
                getTxConfirmations(e) {
                    return 10
                }
                getTxMemo(e) {
                    return e.action_trace.act.data.memo
                }
                async sendTransaction(e, t) {
                    const r = JSON.parse(e),
                        a = new s.Api({
                            rpc: new s.JsonRpc(this.config.baseUrl.replace(/\/$/, ""), {
                                fetch: fetch
                            }),
                            signatureProvider: new n.JsSignatureProvider([JSON.parse(t).active.privateKey]),
                            textDecoder: new TextDecoder,
                            textEncoder: new TextEncoder
                        });
                    try {
                        return {
                            txid: (await a.transact(r, {
                                blocksBehind: 10,
                                expireSeconds: 3600
                            })).transaction_id
                        }
                    } catch (e) {
                        if (e.message && e.message.indexOf("CPU") + 1) return {
                            error: "CPU"
                        };
                        if (e.message && e.message.indexOf("RAM") + 1) return {
                            error: "RAM"
                        };
                        throw new o.ExplorerRequestError({
                            type: c.SEND_TRANSACTION_TYPE,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getAccount(e) {
                    return this.request(this.getApiPrefix() + "chain/get_account", "post", {
                        account_name: e
                    })
                }
                getTxFee() {
                    return 0
                }
            }
            var l = EOSNodeExplorer;
            t.default = l
        },
        2962: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = r(29),
                i = r(26);
            class EOSApiExplorer extends n.default {
                constructor(...e) {
                    super(...e), this.apiKey = e[3]
                }
                getAllowedTickers() {
                    return ["EOS"]
                }
                async validateNewAccountName(e) {
                    const t = await this.request(this.config.baseUrl, "get", {
                        module: "account",
                        action: "get_account_info",
                        apikey: this.apiKey,
                        account: e
                    }).catch(e => {
                        throw new s.ExplorerRequestError({
                            type: i.EXPLORER_API_ERROR,
                            error: e,
                            instance: this
                        })
                    });
                    return !(t.data && t.data.permissions && t.data.permissions.length > 0) && (this.wallet.address = e, !0)
                }
            }
            var o = EOSApiExplorer;
            t.default = o
        },
        3150: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = r(29),
                i = r(26),
                o = a(r(74)),
                c = r(377);
            const l = {
                SIDECHAIN_DELEGATE: c.TxTypes.STAKE,
                SIDECHAIN_UNDELEGATE: c.TxTypes.UNDELEGATE,
                TRANSFER: c.TxTypes.TRANSFER
            };
            class BinanceExplorer extends n.default {
                getAllowedTickers() {
                    return ["BNB"]
                }
                async getBalance(e) {
                    const {
                        balance: t
                    } = await this.request(`${this.config.baseUrl}api/v1/balances/${e}`);
                    return t
                }
                async getAssetTransfers({
                    address: e,
                    txArray: t
                }) {
                    const r = [],
                        a = t.reduce((e, t) => {
                            if (Object.keys(l).includes(t.txType)) {
                                if (t.hasChildren) return r.push({
                                    hash: t.txHash,
                                    height: t.blockHeight
                                }), e;
                                e.push(t)
                            }
                            return e
                        }, []);
                    return {
                        transactions: this.modifyTransactionsResponse(a, e),
                        multisend: r
                    }
                }
                async getTransactions({
                    address: e
                }) {
                    const t = `${this.config.baseUrl}api/v1/txs?page=1&rows=100&address=${e}`,
                        r = await this.request(t).catch(e => {
                            throw new s.ExplorerRequestError({
                                type: i.GET_TRANSACTIONS_TYPE,
                                error: e,
                                instance: this
                            })
                        });
                    if (0 === r.txNums) return [];
                    return await this.getAssetTransfers({
                        txArray: r.txArray,
                        address: e
                    })
                }
                modifyTransactionsResponse(e, t) {
                    return Array.isArray(e) ? e.map(e => new o.default({
                        ticker: e.txAsset,
                        name: this.wallet.name,
                        txid: this.getTxHash(e),
                        walletid: this.getTxAssetId(e.txAsset),
                        fee: this.getTxFee(e),
                        feeTicker: this.wallet.parent,
                        direction: this.getTxDirection(t, e),
                        otherSideAddress: this.getTxOtherSideAddress(t, e),
                        amount: this.getTxValue(t, e),
                        datetime: this.getTxDateTime(e),
                        memo: this.getTxMemo(e),
                        confirmations: this.getTxConfirmations(e),
                        txType: this.getTxType(e),
                        alias: this.wallet.alias
                    })) : []
                }
                getTxType({
                    txType: e
                }) {
                    return l[e] || l.TRANSFER
                }
                getTxAssetId(e) {
                    if (e === this.wallet.ticker) return this.wallet.id;
                    const t = Object.keys(this.wallet.tokens()).find(t => this.wallet.tokens()[t].ticker === e);
                    return this.wallet.tokens()[t].id
                }
                getTxHash(e) {
                    return e.txHash
                }
                getTxDirection(e, t) {
                    return "TRANSFER" === t.txType && (t.hasChildren || t.toAddr === e)
                }
                getTxOtherSideAddress(e, t) {
                    if (t.hasChildren) return "Multiple Addresses";
                    if ("TRANSFER" !== t.txType) try {
                        return JSON.parse(t.data).validatorAddress
                    } catch {
                        return this.getTxDirection(e, t) ? t.fromAddr : t.toAddr
                    }
                    return this.getTxDirection(e, t) ? t.fromAddr : t.toAddr
                }
                getTxValue(e, t) {
                    if (void 0 === t.value) return "0";
                    const r = String(t.value).replace(/(\.\d*[1-9])0+$|\.0*$/, "$1");
                    let a = !1;
                    return -1 !== r.search("e") && (a = !0), a ? t.value.toFixed(8).replace(/(\.\d*[1-9])0+$|\.0*$/, "$1") : r
                }
                getTxDateTime(e) {
                    return new Date(e.timeStamp)
                }
                getTxMemo(e) {
                    return e.memo
                }
                getTxConfirmations(e) {
                    return e.txAge
                }
                getTxFee(e) {
                    return e && e.txFee || 0
                }
            }
            var d = BinanceExplorer;
            t.default = d
        },
        3251: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20));
            class AlgoNodeExplorer extends n.default {
                getAllowedTickers() {
                    return ["ALGO"]
                }
                getApiPrefix() {
                    return "v2"
                }
                getSendTransactionUrl() {
                    return this.getApiPrefix() + "/transactions"
                }
                getSendTransactionParams(e) {
                    return e
                }
                getSendOptions() {
                    return {
                        headers: {
                            "Content-Type": "application/x-binary"
                        }
                    }
                }
                getLatestBlockUrl() {
                    return this.getApiPrefix() + "/transactions/params"
                }
                getTxFee(e) {
                    return this.wallet.toCurrencyUnit(e && e.fee || 0)
                }
                modifySendTransactionResponse(e) {
                    return {
                        txid: e.txId
                    }
                }
            }
            var s = AlgoNodeExplorer;
            t.default = s
        },
        3322: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = r(26),
                i = r(29),
                o = r(52),
                c = r(95),
                l = r(377);

            function d(e, t) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.add(e)
            }

            function u(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            var h = new WeakSet;
            class CovalentHQExplorer extends n.default {
                constructor({
                    wallet: e,
                    config: t
                }) {
                    super({
                        wallet: e,
                        config: t
                    }), d(this, h)
                }
                modifyTokenResponse(e) {
                    if (e.data && !e.data.error) return e.data.items;
                    throw new i.ExplorerRequestError({
                        type: s.GET_BALANCE_TYPE,
                        error: new Error(JSON.stringify(e)),
                        instance: this
                    })
                }
                async getUserTokenList(e, t = !1) {
                    try {
                        const r = await this.request(`${this.wallet.chainId}/address/${e}/balances_v2/`, "get"),
                            a = this.modifyTokenResponse(r);
                        return t ? a.map(e => this._mapToTokenFormat(e)) : a
                    } catch (e) {
                        return console.error(e), []
                    }
                }
                _mapToTokenFormat(e) {
                    return {
                        name: e.contract_name,
                        ticker: e.contract_ticker_symbol,
                        decimal: Number(e.contract_decimals) || 0,
                        contract: e.contract_address.toLowerCase(),
                        parentTicker: this.wallet.ticker,
                        uniqueField: e.contract_address.toLowerCase(),
                        supportedStandards: e.supports_erc
                    }
                }
                getTransactionsUrl(e, t, r, a) {
                    return `${this.wallet.chainId}/address/${e}/transactions_v2/`
                }
                getTransactionsParams(e, t = 0, r = this.defaultTxLimit, a) {
                    return {
                        "page-size": r,
                        "page-number": a
                    }
                }
                modifyTransactionsResponse(e, t) {
                    if (e.data && !e.data.error) return super.modifyTransactionsResponse(e.data.items, t);
                    throw new i.ExplorerRequestError({
                        type: s.GET_BALANCE_TYPE,
                        error: new Error(JSON.stringify(e)),
                        instance: this
                    })
                }
                getTransactionsModifiedResponse(e, t, r = this.wallet.ticker) {
                    var a, n, s;
                    return {
                        ...super.getTransactionsModifiedResponse(e, t, r),
                        ticker: this.getTxTicker(e),
                        name: this.getTxName(e),
                        walletid: this.getTxWalletId(e),
                        txid: e.tx_hash,
                        datetime: new Date(e.block_signed_at),
                        memo: "",
                        confirmations: 1,
                        fee: this.wallet.toCurrencyUnit(e.fees_paid),
                        feeTicker: null !== (a = null === (n = (s = this.wallet).getFeeTicker) || void 0 === n ? void 0 : n.call(s)) && void 0 !== a ? a : this.wallet.ticker,
                        isToken: this.getTxIsToken(e),
                        explorer: this.constructor.name,
                        contract: this.getTxContract(e)
                    }
                }
                getTxTicker(e) {
                    const {
                        type: t,
                        ticker: r
                    } = u(this, h, g).call(this, e);
                    return t ? r : this.wallet.ticker
                }
                getTxName(e) {
                    const {
                        type: t,
                        name: r
                    } = u(this, h, g).call(this, e);
                    return t ? r : this.wallet.name
                }
                getTxWalletId(e) {
                    const {
                        type: t
                    } = u(this, h, g).call(this, e), r = this.getTxTicker(e), a = this.getTxContract(e);
                    return t ? (0, o.getTokenId)({
                        ticker: r,
                        contract: a,
                        parent: this.wallet.id
                    }) : this.wallet.id
                }
                getTxDirection(e, t) {
                    const {
                        type: r,
                        to: a
                    } = u(this, h, g).call(this, t), n = e.toLowerCase();
                    var s;
                    return r ? "string" == typeof a && a.toLowerCase() === n : (null === (s = t.to_address) || void 0 === s ? void 0 : s.toLowerCase()) === n
                }
                getTxOtherSideAddress(e, t) {
                    const {
                        type: r,
                        to: a,
                        from: n
                    } = u(this, h, g).call(this, t), s = e.toLowerCase();
                    var i;
                    return r ? "string" == typeof a && a.toLowerCase() === s ? n : a : (null === (i = t.to_address) || void 0 === i ? void 0 : i.toLowerCase()) === s ? t.from_address : t.to_address
                }
                getTxValue(e, t) {
                    const {
                        type: r,
                        value: a,
                        decimal: n
                    } = u(this, h, g).call(this, t);
                    switch (r) {
                        case "Transfer":
                            return (0, c.toCurrency)(a, n);
                        case "SafeTransferFrom":
                            return 0;
                        default:
                            return this.wallet.toCurrencyUnit(t.value)
                    }
                }
                getTxType(e) {
                    const {
                        type: t
                    } = u(this, h, g).call(this, e);
                    switch (t) {
                        case "Transfer":
                            return l.TxTypes.TRANSFER;
                        case "SafeTransferFrom":
                            return l.TxTypes.TRANSFERNFT;
                        default:
                            return l.TxTypes.TRANSACTION
                    }
                }
                getTxIsToken(e) {
                    var t, r;
                    return "Transfer" === (null === (t = e.log_events[0]) || void 0 === t || null === (r = t.decoded) || void 0 === r ? void 0 : r.name)
                }
                getTxContract(e) {
                    return this.getTxIsToken(e) ? e.to_address : null
                }
                async getTokensTransactions(e) {
                    return {
                        tokenTransactions: []
                    }
                }
            }

            function g(e) {
                var t, r, a, n, s, i, o, c, l, d;
                const u = null === (t = e.log_events[0]) || void 0 === t || null === (r = t.decoded) || void 0 === r ? void 0 : r.params;
                return {
                    type: null === (a = e.log_events[0]) || void 0 === a || null === (n = a.decoded) || void 0 === n ? void 0 : n.name,
                    name: null === (s = e.log_events[0]) || void 0 === s ? void 0 : s.sender_name,
                    ticker: null === (i = e.log_events[0]) || void 0 === i ? void 0 : i.sender_contract_ticker_symbol,
                    decimal: null === (o = e.log_events[0]) || void 0 === o ? void 0 : o.sender_contract_decimals,
                    from: u && (null === (c = u[0]) || void 0 === c ? void 0 : c.value),
                    to: u && (null === (l = u[1]) || void 0 === l ? void 0 : l.value),
                    value: u && (null === (d = u[2]) || void 0 === d ? void 0 : d.value)
                }
            }
            var f = CovalentHQExplorer;
            t.default = f
        },
        3444: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(35)),
                s = a(r(20)),
                i = r(26);
            class AdaAtomicExplorer extends s.default {
                getAllowedTickers() {
                    return ["ADA"]
                }
                getApiPrefix() {
                    return "/"
                }
                getLatestBlockUrl() {
                    return this.getApiPrefix() + "lastblock"
                }
                getInfoUrl(e) {
                    return this.getApiPrefix() + "balance"
                }
                getInfoParams(e) {
                    return {
                        address: e
                    }
                }
                getAccountStateUrl() {
                    return this.getApiPrefix() + "stakingAccount"
                }
                getTransactionUrl() {
                    return this.getApiPrefix() + "tx"
                }
                getTransactionParams(e) {
                    return {
                        txid: e
                    }
                }
                getTransactionsUrl() {
                    return this.getApiPrefix() + "txs"
                }
                getTransactionsParams(e, t = 0, r = this.defaultTxLimit) {
                    return {
                        address: e,
                        limit: r
                    }
                }
                getUnspentOutputsUrl() {
                    return this.getApiPrefix() + "utxo"
                }
                getUnspentOutputsParams(e) {
                    return {
                        address: e
                    }
                }
                getSendTransactionUrl() {
                    return this.getApiPrefix() + "submit"
                }
                getSendTransactionMethod() {
                    return "POST"
                }
                getSendTransactionParams(e) {
                    return {
                        tx: Buffer.from(e).toString("hex"),
                        network: "mainnet"
                    }
                }
                getTxHash(e) {
                    return e.hash
                }
                getTxDirection(e, t) {
                    return !t.inputs.find(({
                        address: t
                    }) => e === t)
                }
                getTxOtherSideAddress(e, t) {
                    if (!!this.getTxDirection(e, t)) {
                        return t.inputs.find(({
                            address: t
                        }) => t !== e).address
                    } {
                        const r = t.outputs.find(({
                            address: t
                        }) => t !== e);
                        if (r) return r.address
                    }
                    return e
                }
                getTxValueSatoshis(e, t) {
                    const r = this.getTxDirection(e, t);
                    if (t.inputs.concat(t.outputs).every(({
                            address: t
                        }) => t === e)) return t.outputs.reduce((e, t) => e.add(new n.default(t.value)), new n.default("0"));
                    return t.outputs.reduce((t, a) => r ? a.address === e ? t.add(new n.default(a.value)) : t : a.address !== e ? t.add(new n.default(a.value)) : t, new n.default("0"))
                }
                getTxValue(e, t) {
                    return this.wallet.toCurrencyUnit(this.getTxValueSatoshis(e, t))
                }
                getTxDateTime(e) {
                    return new Date(e.block.time)
                }
                async getBalance(e) {
                    const t = await this.getInfo(e);
                    return t && t.balance
                }
                async getAccountState(e) {
                    return this.request(this.getAccountStateUrl(), "get", {
                        address: e
                    }, this.getInfoOptions()).catch(e => console.warn("Error", e))
                }
                modifyInfoResponse(e) {
                    let t = e.balance;
                    return 0 === Number(t) && (t = "0"), {
                        balance: t
                    }
                }
                modifyUnspentOutputsResponse(e, t) {
                    return t.map(({
                        amount: e,
                        hash: t,
                        tx_index: r,
                        receiver: a
                    }) => ({
                        amount: e,
                        tx_hash: t,
                        tx_index: r,
                        receiver: a
                    }))
                }
                modifySendTransactionResponse(e, t) {
                    return console.warn("RESPONSE", e), {
                        txid: t
                    }
                }
                async sendTransaction({
                    rawtx: e,
                    txid: t
                }) {
                    const r = await this.request(this.getSendTransactionUrl(), this.getSendTransactionMethod(), this.getSendTransactionParams(e), i.SEND_TRANSACTION_TYPE, this.getSendOptions());
                    return this.modifySendTransactionResponse(r, t)
                }
                getTxFee() {
                    return null
                }
                getTxConfirmations() {
                    return 1
                }
            }
            var o = AdaAtomicExplorer;
            t.default = o
        },
        3445: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(57)),
                s = a(r(1010)),
                i = a(r(20));
            class BlockbookExplorer extends i.default {
                constructor({
                    config: e
                }) {
                    super(...arguments), this.version = e.version
                }
                get args() {
                    return {
                        wallet: Object,
                        baseUrl: String,
                        webUrl: String,
                        version: Number
                    }
                }
                getWalletAddress() {
                    return this.wallet.address
                }
                getAllowedTickers() {
                    return ["GRS"]
                }
                getApiPrefix() {
                    return `api/v${this.version}/`
                }
                getAddressUrl(e) {
                    return `${this.getApiPrefix()}address/${e}`
                }
                getInfoUrl(e) {
                    return `${this.getApiPrefix()}address/${e}`
                }
                modifyInfoResponse(e) {
                    return {
                        balance: e.balanceSat,
                        transactions: []
                    }
                }
                getTransactionUrl(e) {
                    return `${this.getApiPrefix()}tx/${e}`
                }
                getTransactionsUrl(e) {
                    return `${this.getApiPrefix()}address/${e}?details=txs&filter=All`
                }
                modifyTransactionsResponse(e, t) {
                    return super.modifyTransactionsResponse(e.txs, t)
                }
                getUnspentOutputsUrl(e) {
                    return `${this.getApiPrefix()}addrs/${e}/utxo`
                }
                modifyUnspentOutputsResponse(e) {
                    return e.map(({
                        address: e,
                        txid: t,
                        vout: r,
                        scriptPubKey: a,
                        satoshis: n
                    }) => ({
                        txid: t,
                        txId: t,
                        vout: r,
                        script: a,
                        value: n,
                        address: this.modifyUnspentAddress(e),
                        outputIndex: r,
                        satoshis: Number(n)
                    }))
                }
                modifyUnspentAddress(e) {
                    return ["BCH", "BSV"].includes(this.wallet.ticker) ? s.default.isCashAddress(e) ? e : s.default.toCashAddress(e) : e
                }
                getTransactionsParams(e, t, r) {
                    return {}
                }
                getSendTransactionUrl() {
                    return this.getApiPrefix() + "tx/send"
                }
                getSendTransactionParam() {
                    return "rawtx"
                }
                async sendTransaction(e) {
                    const t = await n.default.post(`${this.config.baseUrl}${this.getSendTransactionUrl()}`, {
                        [this.getSendTransactionParam()]: e
                    });
                    return this.modifyGeneralResponse(this.modifySendTransactionResponse(t))
                }
                getTxDateTime(e) {
                    return e.time ? new Date(Number(e.time + "000")) : new Date
                }
                getTxValue(e, t) {
                    let r = new this.wallet.BN(0),
                        a = new this.wallet.BN(0);
                    if (!t.vin || !t.vout) return 0;
                    t.vin.forEach(t => {
                        t.addresses.includes(e) && (r = r.add(new this.wallet.BN(this.wallet.toMinimalUnit(t.value))))
                    }), t.vout.forEach(t => {
                        t.scriptPubKey && t.scriptPubKey.addresses && t.scriptPubKey.addresses.length > 0 && t.scriptPubKey.addresses[0] === e && (a = a.add(new this.wallet.BN(this.wallet.toMinimalUnit(t.value))))
                    });
                    const n = r.sub(a),
                        s = n.lt(new this.wallet.BN(0)),
                        i = n.abs();
                    return Number(this.wallet.toCurrencyUnit(s ? i : i.sub(new this.wallet.BN(this.wallet.toMinimalUnit(t.fees)))))
                }
                getTxDirection(e, t) {
                    return t.vin && !t.vin.find(({
                        addresses: t
                    }) => t.includes(e))
                }
                getTxOtherSideAddress(e, t) {
                    if (!t.vin) return "...";
                    if (this.getTxDirection(e, t)) return t.vin[0].addresses[0];
                    let r = new this.wallet.BN(0),
                        a = "...";
                    return t.vout.forEach(t => {
                        t.scriptPubKey && t.scriptPubKey.addresses && t.scriptPubKey.addresses.length > 0 && t.scriptPubKey.addresses[0] !== e && r.lt(new this.wallet.BN(this.wallet.toMinimalUnit(t.value))) && (r = new this.wallet.BN(this.wallet.toMinimalUnit(t.value)), a = t.scriptPubKey.addresses[0])
                    }), a
                }
                calculateBalance(e = []) {
                    return e.reduce((e, {
                        value: t
                    }) => new this.wallet.BN(t).add(e), new this.wallet.BN("0"))
                }
            }
            var o = BlockbookExplorer;
            t.default = o
        },
        3446: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = r(29),
                i = r(26);
            class DogeChainExplorer extends n.default {
                getAllowedTickers() {
                    return ["DOGE"]
                }
                getApiPrefix() {
                    return "api/v1/"
                }
                getInfoUrl(e) {
                    return `${this.getApiPrefix()}address/balance/${e}`
                }
                modifyInfoResponse(e) {
                    if (1 === e.success) return {
                        balance: this.wallet.toMinimalUnit(e.balance),
                        transactions: []
                    };
                    throw new s.ExplorerRequestError({
                        type: i.GET_BALANCE_TYPE,
                        error: new Error(e.error),
                        instance: this
                    })
                }
                getSendTransactionUrl() {
                    return this.getApiPrefix() + "pushtx"
                }
                getSendTransactionParam() {
                    return "tx"
                }
                modifySendTransactionResponse(e) {
                    if (void 0 === e.tx_hash || 0 === e.success) throw new s.ExplorerRequestError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error(e.error),
                        instance: this
                    });
                    return {
                        txid: e.tx_hash
                    }
                }
                async getBalance() {
                    const e = await this.getInfo();
                    return this.wallet.toCurrencyUnit(e.balance)
                }
                getUnspentOutputsUrl(e) {
                    return `${this.getApiPrefix()}unspent/${e}`
                }
                modifyUnspentOutputsResponse(e) {
                    return e.unspent_outputs.map(({
                        address: e,
                        tx_hash: t,
                        tx_output_n: r,
                        script: a,
                        value: n
                    }) => ({
                        txid: t,
                        vout: r,
                        script: a,
                        value: n,
                        address: e
                    }))
                }
                calculateBalance(e = []) {
                    return e.reduce((e, {
                        value: t
                    }) => new this.wallet.BN(t).add(e), new this.wallet.BN("0"))
                }
            }
            var o = DogeChainExplorer;
            t.default = o
        },
        3447: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = a(r(464)),
                i = a(r(74));
            const o = {
                delegate: "stake",
                unDelegate: "unstake",
                withdraw: "withdraw",
                claimRewards: "reward"
            };
            class ElrondApiExporer extends n.default {
                getAllowedTickers() {
                    return ["EGLD"]
                }
                getInfoUrl(e) {
                    return "/accounts/" + e
                }
                getTransactionsUrl(e) {
                    return `/accounts/${e}/transactions`
                }
                getTransactionsParams(e, t = 0, r = this.defaultTxLimit, a) {
                    return {
                        from: t,
                        to: t + r,
                        withScResults: !0
                    }
                }
                getTransfersrUrl(e) {
                    return `/accounts/${e}/transfers`
                }
                getStakingInfoUrl(e) {
                    return `/accounts/${e}/delegation`
                }
                getSendTransactionUrl() {
                    return "/transactions"
                }
                getSendTransactionParams(e) {
                    return e
                }
                getTransactionUrl(e) {
                    return this.getTransactionsUrl(e)
                }
                modifyInfoResponse(e) {
                    const {
                        balance: t,
                        nonce: r
                    } = e;
                    return {
                        balance: t,
                        nonce: r
                    }
                }
                modifySendTransactionResponse(e) {
                    return {
                        txid: e.txHash
                    }
                }
                modifyTransactionsResponse(e, t) {
                    return Array.isArray(e) ? e.map(e => new i.default({
                        ticker: this.wallet.ticker,
                        name: this.wallet.name,
                        txid: this.getTxHash(e),
                        walletid: this.wallet.id,
                        fee: this.getTxFee(e),
                        feeTicker: this.wallet.parent,
                        direction: this.getTxDirection(t, e),
                        otherSideAddress: this.getTxOtherSideAddress(t, e),
                        amount: this.getTxValue(t, e),
                        datetime: this.getTxDateTime(e),
                        memo: this.getTxMemo(e),
                        confirmations: this.getTxConfirmations(e),
                        txType: this.getTransactionType(e),
                        alias: this.wallet.alias
                    })) : []
                }
                getTransactionType(e) {
                    return o[e.function] || "transfer"
                }
                getTxConfirmations(e) {
                    return e.round
                }
                getTxHash(e) {
                    return e.txHash
                }
                getTxDirection(e, t) {
                    return t.receiver === e
                }
                getTxOtherSideAddress(e, t) {
                    return this.getTxDirection(e, t) ? t.sender : t.receiver
                }
                getTxValue(e, t) {
                    const r = this.getTransactionType(t);
                    return "unstake" === r ? this.wallet.toCurrencyUnit(t.action.arguments.value) : ["transfer", "stake"].includes(r) ? this.wallet.toCurrencyUnit(t.value) : this.wallet.toCurrencyUnit(this.getValueFromSmartContractResults(e, t))
                }
                getValueFromSmartContractResults(e, {
                    results: t = []
                } = {}) {
                    return t.reduce((t, r) => r.receiver === e ? t.add(new this.wallet.BN(r.value)) : t, new this.wallet.BN("0")).toString()
                }
                getTxNonce(e) {
                    return e.nonce
                }
                getTxDateTime(e) {
                    return new Date(Number(e.timestamp + "000"))
                }
                async fetchStakingInfo(e) {
                    const t = await this.request(this.getStakingInfoUrl(e), this.getInfoMethod());
                    return this.modifyFetchStakingInfo(t)
                }
                modifyFetchStakingInfo(e) {
                    const t = e.reduce((e, {
                            contract: t,
                            userUnBondable: r,
                            userActiveStake: a,
                            claimableRewards: n,
                            userUndelegatedList: i = []
                        }) => {
                            const o = i.filter(({
                                seconds: e
                            }) => e > 0).reduce((e, {
                                amount: t
                            }) => e = e.add(new this.wallet.BN(t)), new this.wallet.BN("0"));
                            return e[t] = {
                                address: t,
                                staked: new s.default(a, this.wallet),
                                unstaking: new s.default(o, this.wallet),
                                rewards: new s.default(n, this.wallet),
                                availableWithdrawals: new s.default(r, this.wallet),
                                pendingWithdrawals: new s.default(o, this.wallet)
                            }, e
                        }, {}),
                        [r, a, n, i] = ["staked", "availableWithdrawals", "pendingWithdrawals", "rewards"].map(e => Object.values(t).reduce((t, r) => new this.wallet.BN(t).add(r[e].toBN()).toString(), "0"));
                    return {
                        staked: new s.default(r, this.wallet),
                        unstaking: new s.default(n, this.wallet),
                        pendingWithdrawals: new s.default(n, this.wallet),
                        availableWithdrawals: new s.default(a, this.wallet),
                        rewards: new s.default(i, this.wallet),
                        validators: t
                    }
                }
            }
            var c = ElrondApiExporer;
            t.default = c
        },
        3448: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = r(26),
                i = r(29),
                o = r(52);

            function c(e, t) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.add(e)
            }

            function l(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            var d = new WeakSet;
            class EtherscanExplorer extends n.default {
                constructor(...e) {
                    super(...e), c(this, d)
                }
                modifyGeneralResponse(e) {
                    if (e.data && "1" === e.data.status) return e.data;
                    throw new i.ExplorerRequestError({
                        type: s.GET_BALANCE_TYPE,
                        error: new Error(JSON.stringify(e)),
                        instance: this
                    })
                }
                getTransactionsUrl(e) {
                    return ""
                }
                getTransactionsParams(e) {
                    return l(this, d, u).call(this, e, "txlist")
                }
                modifyTransactionsResponse(e, t) {
                    return super.modifyTransactionsResponse(e.result.filter(({
                        value: e
                    }) => e > 0), t)
                }
                async sendTransaction(e) {
                    const t = await this.request("submit", null, {
                        tx_blob: e
                    });
                    if ("tesSUCCESS" === !t.engine_result) throw new i.ExplorerRequestError({
                        type: s.SEND_TRANSACTION_TYPE,
                        error: new Error(t.engine_result),
                        instance: this
                    });
                    return {
                        txid: t.tx_json.hash
                    }
                }
                getTxHash(e) {
                    return e.hash
                }
                getTxDateTime(e) {
                    return new Date(Number(e.timeStamp + "000"))
                }
                getTxConfirmations(e) {
                    return Number(e.confirmations)
                }
                getTxDirection(e, t) {
                    return e.toLowerCase() !== t.from.toLowerCase()
                }
                getTxOtherSideAddress(e, t) {
                    return e.toLowerCase() === t.from.toLowerCase() ? t.to : t.from
                }
                getTxValue(e, t) {
                    return this.wallet.toCurrencyUnit(t.value)
                }
                getTxFeeTicker() {
                    return this.wallet.getFeeTicker()
                }
                getTxFee(e) {
                    return this.wallet.l2Name ? null : super.getTxFee(e)
                }
                async getTokensTransactions({
                    address: e,
                    offset: t,
                    limit: r,
                    pageNum: a
                }) {
                    if (this.defaultRequestTimeout && Date.now() - this.defaultRequestTimeout * s.ONE_MINUTE < this.lastGetTxsRequestTime) return [];
                    this.defaultRequestTimeout && Date.now() - this.defaultRequestTimeout * s.ONE_MINUTE > this.lastGetTxsRequestTime && (this.lastGetTxsRequestTime = Date.now());
                    const n = await this.request(this.getTransactionsUrl(), this.getTransactionsMethod(), this.getTokensTransactionsParams(e), s.GET_TRANSACTIONS_TYPE, this.getTransactionsOptions());
                    return this.modifyTokenTransactionsResponse(n, e)
                }
                getTokensTransactionsParams(e) {
                    return l(this, d, u).call(this, e, "tokentx")
                }
                modifyTokenTransactionsResponse(e, t) {
                    const {
                        result: r
                    } = null != e ? e : {
                        result: []
                    };
                    return {
                        tokenTransactions: r.reduce((e, r, a) => {
                            const n = this.getTxDirection(t, r),
                                s = r.tokenSymbol,
                                i = r.contractAddress;
                            return e.push({
                                contract: i,
                                alias: this.wallet.alias,
                                explorer: this.constructor.name,
                                txid: this.getTxHash(r),
                                direction: n,
                                otherSideAddress: this.getTxOtherSideAddress(t, r),
                                amount: this.getTxValue(t, r),
                                datetime: this.getTxDateTime(r),
                                memo: "",
                                confirmations: this.getTxConfirmations(r),
                                ticker: s,
                                name: r.tokenName,
                                walletid: (0, o.getTokenId)({
                                    ticker: s,
                                    contract: i,
                                    parent: this.wallet.id
                                })
                            }), e
                        }, [])
                    }
                }
            }

            function u(e, t) {
                const r = {
                        module: "account",
                        action: t,
                        address: e,
                        startblock: 0,
                        endblock: 99999999,
                        sort: "desc"
                    },
                    a = "ETH" === this.wallet.id ? process.env.ETHERSCAN_API_KEY : null;
                return a && (r.apikey = a), r
            }
            var h = EtherscanExplorer;
            t.default = h
        },
        3621: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(67)),
                s = a(r(20)),
                i = a(r(74)),
                o = r(26),
                c = a(r(55)),
                l = a(r(1407));
            const {
                ETHPLORER_API_KEY: d
            } = process.env;
            class EthplorerExplorer extends s.default {
                getAllowedTickers() {
                    return ["ETH"]
                }
                async getBalance() {
                    let e;
                    try {
                        e = await this.getInfo()
                    } catch (e) {
                        throw e
                    }
                    return String(this.wallet.toCurrencyUnit(e.balance))
                }
                async getInfo(e) {
                    try {
                        const t = await this.request(this.getInfoUrl(e), this.getInfoMethod(), this.getInfoParams(e), o.GET_BALANCE_TYPE);
                        return this.modifyInfoResponse(t, e)
                    } catch (t) {
                        return {
                            balance: e ? await this.wallet.coreLibrary.eth.getBalance(e) : 0
                        }
                    }
                }
                getInfoUrl(e) {
                    return "service/service.php"
                }
                getInfoParams(e) {
                    return {
                        data: e,
                        apiKey: d,
                        page: "pageSize=1000"
                    }
                }
                modifyInfoResponse(e) {
                    if (Array.isArray(e.transfers)) {
                        const t = [],
                            r = {};
                        e.transfers.forEach(e => {
                            e.contract = e.contract.toLowerCase();
                            const a = e.isEth ? this.modifyTransactionResponse(e) : this.modifyTokenTransactionResponse(e, this.wallet.tokens[e.contract]);
                            e.isEth ? t.push(a) : this.wallet.tokens[e.contract] && (r[e.contract] = r[e.contract] || [], r[e.contract].push(a))
                        }), this.wallet.transactions = t;
                        for (const e in r) this.wallet.tokens[e].transactions = r[e]
                    }
                    return {
                        balance: this.wallet.toMinimalUnit(e.balance),
                        transactions: []
                    }
                }
                getTransactionsUrl(e) {
                    return "service/service.php"
                }
                getTransactionsParams(e, t, r) {
                    return {
                        data: e,
                        apiKey: d,
                        page: "pageSize=1000"
                    }
                }
                modifyTransactionsResponse(e) {
                    return e.transfers.map(e => {
                        if (e.isEth) return this.modifyTransactionResponse(e);
                        const t = this.wallet.tokens[e.contract.toLowerCase()];
                        return this.modifyTokenTransactionResponse(e, t), !1
                    }).filter(Boolean)
                }
                modifyTokenTransactionResponse(e, t, r) {
                    return new i.default({
                        ticker: t.ticker,
                        name: t.name,
                        walletid: this.wallet.id,
                        txid: this.getTxHash(e),
                        fee: this.getTxFee(e),
                        feeTicker: this.wallet.parent,
                        direction: this.getTxDirection(r, e),
                        otherSideAddress: this.getTxOtherSideAddress(r, e),
                        amount: this.getTxValue(r, e),
                        datetime: this.getTxDateTime(e),
                        memo: this.getTxMemo(e),
                        confirmations: this.getTxConfirmations(e),
                        alias: this.wallet.alias
                    })
                }
                getTxHash(e) {
                    return e.transactionHash
                }
                getTxDateTime(e) {
                    return new Date(Number(e.timestamp + "000"))
                }
                getTxConfirmations(e) {
                    return Number(e.blockNumber > 0 ? 10 : 0)
                }
                getTxDirection(e, t) {
                    return e.toLowerCase() !== t.from.toLowerCase()
                }
                getTxOtherSideAddress(e, t) {
                    return e.toLowerCase() === t.from.toLowerCase() ? t.to : t.from
                }
                getTxValue(e, t) {
                    if (t.isEth) return t.value;
                    const r = this.wallet.tokens[t.contract.toLowerCase()];
                    return r ? r.toCurrencyUnit(t.value) : this.wallet.toCurrencyUnit(t.value)
                }
                getUserTokenListUrl(e) {
                    return "https://api.ethplorer.io/getAddressInfo/{address}?apiKey=jgsh10179vezF82".replace("{address}", e)
                }
                modifyTokenListResponse(e) {
                    return e.data
                }
                async getTokenList() {
                    let e = l.default;
                    try {
                        e = await n.default.get("ethereum-tokens", !0)
                    } catch (e) {
                        c.default.error({
                            instance: this,
                            error: e
                        })
                    }
                    return e
                }
                async getUserTokenList(e) {
                    if (!e) return [];
                    return await this.request(this.getUserTokenListUrl(e)).then(e => e.tokens).catch(() => [])
                }
            }
            var u = EthplorerExplorer;
            t.default = u
        },
        3629: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = r(29),
                i = r(26),
                o = a(r(464));
            class BinanceBCExplorer extends n.default {
                getAllowedTickers() {
                    return ["BNB", "BSC"]
                }
                getStakingInfoMethod() {
                    return "get"
                }
                getStakingInfoBaseUrl(e) {
                    return `${this.config.baseUrl}v1/staking/chains/bsc/delegators/${e}`
                }
                getDelegationsUrl(e) {
                    return this.getStakingInfoBaseUrl(e) + "/delegations"
                }
                getUnDelegationsUrl(e) {
                    return this.getStakingInfoBaseUrl(e) + "/ubds"
                }
                getReDelegationsUrl(e) {
                    return this.getStakingInfoBaseUrl(e) + "/reds"
                }
                getRewardsUrl(e) {
                    return this.getStakingInfoBaseUrl(e) + "/rewards"
                }
                async getDelegations({
                    address: e = this.wallet.address,
                    offset: t = 0,
                    limit: r = 100
                } = {}) {
                    const a = await this.request(this.getDelegationsUrl(e), this.getStakingInfoMethod(), {
                        offset: t,
                        limit: r
                    }).catch(e => {
                        throw new s.ExplorerRequestError({
                            type: i.GET_TRANSACTIONS_TYPE,
                            error: e,
                            instance: this
                        })
                    });
                    return null == a ? void 0 : a.delegations
                }
                async getUnDelegations({
                    address: e = this.wallet.address,
                    offset: t = 0,
                    limit: r = 100
                } = {}) {
                    const a = await this.request(this.getUnDelegationsUrl(e), this.getStakingInfoMethod(), {
                        offset: t,
                        limit: r
                    }).catch(e => {
                        throw new s.ExplorerRequestError({
                            type: i.GET_TRANSACTIONS_TYPE,
                            error: e,
                            instance: this
                        })
                    });
                    return null == a ? void 0 : a.unbondingDelegations.filter(({
                        completeHeight: e
                    }) => !e)
                }
                async getReDelegations({
                    address: e = this.wallet.address,
                    offset: t = 0,
                    limit: r = 100
                } = {}) {
                    const a = await this.request(this.getReDelegationsUrl(e), this.getStakingInfoMethod(), {
                        offset: t,
                        limit: r
                    }).catch(e => {
                        throw new s.ExplorerRequestError({
                            type: i.GET_TRANSACTIONS_TYPE,
                            error: e,
                            instance: this
                        })
                    });
                    return null == a ? void 0 : a.redelegations
                }
                async getRewards({
                    address: e = this.wallet.address,
                    offset: t = 0,
                    limit: r = 100
                } = {}) {
                    const a = await this.request(this.getRewardsUrl(e), this.getStakingInfoMethod(), {
                        offset: t,
                        limit: r
                    }).catch(e => {
                        throw new s.ExplorerRequestError({
                            type: i.GET_TRANSACTIONS_TYPE,
                            error: e,
                            instance: this
                        })
                    });
                    return null == a ? void 0 : a.rewardDetails
                }
                async getUserValidators(e = this.wallet.address, t) {
                    try {
                        t || (t = await Promise.all([this.getDelegations({
                            address: e
                        }), this.getUnDelegations({
                            address: e
                        })]));
                        const r = new Map;
                        return t.flatMap(e => e).forEach(e => {
                            Object.keys(e).forEach(t => {
                                r.set(e.validator, {
                                    ...r.get(e.validator),
                                    [t]: e[t]
                                })
                            })
                        }), Array.from(r.values())
                    } catch (e) {
                        throw new s.ExplorerRequestError({
                            type: i.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async fetchStakingInfo(e) {
                    const [t, r, a] = await Promise.all([this.getDelegations({
                        address: e
                    }), this.getUnDelegations({
                        address: e
                    }), this.getRewards({
                        address: e
                    })]), n = t.reduce((e, t) => e.set(t.validator, t), new Map), s = r.reduce((e, t) => e.set(t.validator, t), new Map), i = a.reduce((e, t) => {
                        const r = e.get(t.validator);
                        return r && (t.reward += r.reward), e.set(t.validator, t)
                    }, new Map), c = (await this.getUserValidators(e, [t, r])).reduce((e, {
                        validatorName: t,
                        validator: r,
                        valName: a
                    }) => {
                        var c, l, d;
                        const u = new o.default(this.wallet.toMinimalUnit(null === (c = n.get(r)) || void 0 === c ? void 0 : c.amount).toString(), this.wallet),
                            h = new o.default(this.wallet.toMinimalUnit(null === (l = s.get(r)) || void 0 === l ? void 0 : l.balance).toString(), this.wallet);
                        return e[r] = {
                            staked: u,
                            unstaked: h,
                            rewards: new o.default(this.wallet.toMinimalUnit(null === (d = i.get(r)) || void 0 === d ? void 0 : d.reward).toString(), this.wallet),
                            name: t || a,
                            isUnstakeAvailable: u.toBN().gt(new this.wallet.BN(0)) && h.toBN().eq(new this.wallet.BN(0))
                        }, e
                    }, {}), [l, d, u] = ["unstaked", "staked", "rewards"].map(e => Object.values(c).reduce((t, r) => t.add(r[e].toBN()), new this.wallet.BN("0")));
                    return {
                        total: new o.default(d.add(l).toString(), this.wallet),
                        staked: new o.default(d.toString(), this.wallet),
                        unstaking: new o.default(l.toString(), this.wallet),
                        rewards: new o.default(u.toString(), this.wallet),
                        validators: c
                    }
                }
            }
            var c = BinanceBCExplorer;
            t.default = c
        },
        3630: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(67)),
                s = a(r(20)),
                i = r(26),
                o = r(29),
                c = a(r(74)),
                l = a(r(1407)),
                d = a(r(55));
            class BlockscoutExplorer extends s.default {
                getAllowedTickers() {
                    return ["ETH", "ETC", "FLR"]
                }
                async request(e, t = "get", r = {}, a = i.UNDEFINED_OPERATION_ERROR) {
                    const n = await super.request(e, t, r, a);
                    if ("0" === n.status) throw new o.ExplorerRequestError({
                        type: a,
                        error: n.message,
                        url: `${this.config.baseUrl}${e}`,
                        instance: this
                    });
                    return n.result ? n.result : n
                }
                getInfoUrl(e) {
                    return this.getApiPrefix()
                }
                getTokenInfoParams(e) {
                    return {
                        module: "account",
                        action: "tokenlist",
                        address: e
                    }
                }
                getInfoParams(e) {
                    return {
                        module: "account",
                        action: "balance",
                        address: e
                    }
                }
                async getInfo(e) {
                    const t = await this.request(this.getInfoUrl(e), this.getInfoMethod(), this.getInfoParams(e), i.GET_BALANCE_TYPE);
                    return this.modifyInfoResponse({
                        balance: t
                    })
                }
                async getTokensInfo(e, t) {
                    const r = await this.request(this.getInfoUrl(t), this.getInfoMethod(), this.getTokenInfoParams(t), i.GET_BALANCE_TYPE);
                    return this.modifyInfoResponse({
                        tokens: r
                    })
                }
                modifyInfoResponse(e) {
                    return {
                        balance: e.balance,
                        tokensBalances: e.tokens || [],
                        transactions: []
                    }
                }
                getTransactionsUrl(e) {
                    return this.getApiPrefix()
                }
                getTransactionsParams(e, t, r) {
                    return {
                        module: "account",
                        action: "txlist",
                        address: e
                    }
                }
                getTransferParams(e, t, r) {
                    return {
                        module: "account",
                        action: "tokentx",
                        address: e
                    }
                }
                async getTransactions({
                    address: e,
                    offset: t = 0,
                    limit: r = this.defaultTxLimit
                }) {
                    try {
                        var a, n;
                        const s = await this.request(this.getTransactionsUrl(e), this.getTransactionsMethod(), this.getTransactionsParams(e, t, r), i.GET_TRANSACTIONS_TYPE).catch(console.warn);
                        let o = [];
                        ["ETH", "FLR"].includes(this.wallet.ticker) && (o = await this.request(this.getTransactionsUrl(e), this.getTransactionsMethod(), this.getTransferParams(e, t, r), i.GET_TRANSACTIONS_TYPE).catch(console.warn));
                        const c = this.modifyTokenTransactionsResponse(null !== (a = null === (n = o) || void 0 === n ? void 0 : n.reverse()) && void 0 !== a ? a : [], e);
                        return this.modifyTransactionsResponse(s.filter(({
                            input: e
                        }) => "0x" === e).reverse(), e).concat(c)
                    } catch (e) {
                        return console.error(e), []
                    }
                }
                modifyTokenTransactionsResponse(e, t) {
                    return e.map(e => new c.default({
                        ticker: e.tokenSymbol,
                        name: e.tokenName,
                        txid: this.getTxHash(e),
                        fee: this.getTxFee(e),
                        feeTicker: this.wallet.parent,
                        direction: this.getTxDirection(t, e),
                        otherSideAddress: this.getTxOtherSideAddress(t, e),
                        amount: this.getTxValue(t, e),
                        datetime: this.getTxDateTime(e),
                        memo: this.getTxMemo(e),
                        nonce: this.getTxNonce(e),
                        confirmations: this.getTxConfirmations(e),
                        alias: this.wallet.alias
                    }))
                }
                getTxNonce(e) {
                    return e.nonce
                }
                getTxHash(e) {
                    return e.hash
                }
                getTxDateTime(e) {
                    return new Date(Number(e.timeStamp + "000"))
                }
                getTxDirection(e, t) {
                    return e.toLowerCase() !== t.from.toLowerCase()
                }
                getTxOtherSideAddress(e, t) {
                    return e.toLowerCase() === t.from.toLowerCase() ? t.to : t.from
                }
                getTxValue(e, t) {
                    return t.contractAddress, this.wallet.toCurrencyUnit(t.value)
                }
                getTxConfirmations(e) {
                    return Number(e.confirmations)
                }
                getUserTokenListUrl(e) {
                    return this.getApiPrefix()
                }
                modifyTokenListResponse(e) {
                    return e.data
                }
                async getTokenList() {
                    let e;
                    try {
                        e = await n.default.get("ethereum-tokens", !0)
                    } catch (e) {
                        d.default.error({
                            instance: this,
                            error: e
                        })
                    }
                    return e || l.default
                }
                async getBannedTokensList() {
                    let e;
                    try {
                        e = await n.default.get("ethereum-tokens-banned", !0)
                    } catch (e) {
                        d.default.error({
                            instance: this,
                            error: e
                        })
                    }
                    return JSON.stringify(e) || []
                }
                async getUserTokenList(e) {
                    if (!e) return [];
                    return await this.request(this.getUserTokenListUrl(), this.getInfoMethod(), this.getTokenInfoParams(e)).then(e => e).catch(() => []) || []
                }
                getTxFee(e) {
                    const t = new this.wallet.BN(e.gasUsed),
                        r = new this.wallet.BN(e.gasPrice),
                        a = new this.wallet.BN(this.wallet.feeCoefficient || 1).mul(t.mul(r)).toString();
                    return this.wallet.toCurrencyUnit(a)
                }
            }
            var u = BlockscoutExplorer;
            t.default = u
        },
        3631: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(57)),
                s = a(r(1864));
            class BtgInsightExplorer extends s.default {
                getAllowedTickers() {
                    return ["BTG"]
                }
                getInfoUrl(e) {
                    return "insight-api/addr/" + e
                }
                getTransactionUrl(e) {
                    return "insight-api/tx/" + e
                }
                getTransactionsUrl(e) {
                    return `insight-api/addrs/${e}/txs`
                }
                modifyTransactionsResponse(e, t) {
                    return super.modifyTransactionsResponse(e.items, t)
                }
                getUnspentOutputsUrl(e) {
                    return `insight-api/addr/${e}/utxo`
                }
                getSendTransactionUrl() {
                    return "insight-api/tx/send"
                }
                getSendTransactionParam() {
                    return "rawtx"
                }
                async sendTransaction(e) {
                    const t = await n.default.post(`${this.config.baseUrl}${this.getSendTransactionUrl()}`, `${this.getSendTransactionParam()}=${e}`, {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    });
                    return this.modifyGeneralResponse(this.modifySendTransactionResponse(t))
                }
            }
            var i = BtgInsightExplorer;
            t.default = i
        },
        3635: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(53),
                s = a(r(20)),
                i = r(29),
                o = r(26),
                c = r(347);
            class CosmosNodeExplorerV2 extends((0, c.CosmosNodeTransactionTypeMixin)(s.default)) {
                constructor() {
                    super(...arguments), this.defaultTxLimit = 50, this.canPaginate = !1, this.lastKnownHeight = 0
                }
                getInitParams() {
                    if (!this.config.baseUrl) throw new Error(`${this.wallet.ticker} ${this.constructor.name}: explorer config have no baseUrl`);
                    return {
                        baseURL: this.config.baseUrl,
                        headers: {
                            "Cache-Control": "no-cache, no-store, must-revalidate",
                            Pragma: "no-cache",
                            Expires: 0
                        }
                    }
                }
                getAllowedTickers() {
                    return ["ATOM", "BAND", "OSMO", "KAVA", "FET"]
                }
                async request() {
                    const e = await super.request(...arguments);
                    return e && e.height && this.lastKnownHeight < Number(e.height) && (this.lastKnownHeight = e.height), e && e.result ? e.result : e
                }
                async getAuth(e) {
                    const t = await this.request("cosmos/auth/v1beta1/accounts/" + e);
                    return t.account.base_account || t.account
                }
                getLatestBlockUrl() {
                    return "cosmos/base/tendermint/v1beta1/blocks/latest"
                }
                getSendTransactionUrl() {
                    return "cosmos/tx/v1beta1/txs"
                }
                getSendTransactionParams(e) {
                    return {
                        tx_bytes: Buffer.from(e).toString("base64"),
                        mode: "BROADCAST_MODE_SYNC"
                    }
                }
                modifySendTransactionResponse(e) {
                    var t;
                    if (e.tx_response.code) throw new i.ExplorerRequestError({
                        type: o.SEND_TRANSACTION_TYPE,
                        error: new Error(JSON.stringify(e)),
                        instance: this
                    });
                    return {
                        txid: null === (t = e.tx_response) || void 0 === t ? void 0 : t.txhash
                    }
                }
                async sendDelegationTransaction(e, t) {
                    const r = await this.request(`staking/delegators/${e}/delegations`, "post", t);
                    if (r.value && "0" === r.value.account_number) throw new i.ExplorerRequestError({
                        type: o.SEND_TRANSACTION_TYPE,
                        error: new Error(r),
                        instance: this
                    });
                    return r.value
                }
                async getTransaction(e, t) {
                    const r = await this.request("txs/" + t);
                    return this.modifyTransactionResponse(r, e)
                }
                async getTransactions({
                    address: e,
                    limit: t,
                    denom: r
                }) {
                    const a = await this.request(`/cosmos/tx/v1beta1/txs?events=message.sender=%27${e}%27`),
                        s = await this.request(`/cosmos/tx/v1beta1/txs?events=transfer.recipient=%27${e}%27`),
                        i = new Map;
                    a.tx_responses.forEach(e => {
                        i.set(e.txhash, {
                            ...e,
                            direction: !1
                        })
                    }), s.tx_responses.forEach(e => {
                        i.set(e.txhash, {
                            ...e,
                            direction: !0
                        })
                    });
                    const o = [];
                    for (const [, e] of i.entries()) o.push(e);
                    o.sort((e, t) => Number(e.height) < Number(t.height));
                    const c = o.flatMap(e => [...e.tx.body.messages.map(t => ({
                        ...t,
                        ...(0, n.pick)(e, "from_address", "to_address", "amount", "txhash", "height", "gas_used", "gas_wanted", "direction", "logs", "timestamp"),
                        memo: e.tx.body.memo,
                        messages: e.tx.body.messages
                    }))]).filter(e => "MsgBeginRedelegate" !== this.getTransactionNativeType(e));
                    return this.modifyTransactionsResponse((0, n.uniqBy)(c, ({
                        "@type": e,
                        txhash: t
                    }) => `${t}/${e}`), e)
                }
                getTxValue(e, t) {
                    var r;
                    const a = Array.isArray(t.amount) ? t.amount[0].amount : (null === (r = t.amount) || void 0 === r ? void 0 : r.amount) || t.withdraw_amount || this.getAmountFromLogs(t);
                    return this.wallet.toCurrencyUnit(a)
                }
                getAmountFromLogs(e) {
                    return (e.logs || []).reduce((e, {
                        events: t
                    }) => e.concat(t || []), []).filter(({
                        type: e
                    }) => "transfer" === e).reduce((e, {
                        attributes: t
                    }) => e.concat(t), []).filter(({
                        key: e
                    }) => "amount" === e).reduce((e, {
                        value: t
                    }) => e + parseInt((t || "0").replace(/\D/gi, ""), 10), 0)
                }
                getTxDirection(e, t) {
                    return t.direction
                }
                getTxOtherSideAddress(e, t) {
                    return this.getTxDirection(e, t) ? t.from_address || t.validator_address : t.to_address
                }
                getTxDateTime(e) {
                    return new Date(e.timestamp)
                }
                getTxConfirmations(e) {
                    return this.lastKnownHeight - Number(e.height)
                }
                getTxHash(e) {
                    return e.txhash
                }
                getTxMemo(e) {
                    return e.memo
                }
                getTxType(e) {
                    return this.getTransactionType(e)
                }
                async getTotalBalance(e) {
                    try {
                        const {
                            balances: t
                        } = await this.request("cosmos/bank/v1beta1/balances/" + e);
                        return t
                    } catch (e) {
                        console.warn(e)
                    }
                    return []
                }
                async getRewardsBalance(e) {
                    try {
                        const {
                            total: t
                        } = await this.request(`cosmos/distribution/v1beta1/delegators/${e}/rewards`);
                        return t
                    } catch (e) {
                        console.warn(e)
                    }
                    return "0"
                }
                async getStakedDelegations(e) {
                    try {
                        const {
                            delegation_responses: t
                        } = await this.request("cosmos/staking/v1beta1/delegations/" + e);
                        return t
                    } catch (e) {
                        console.warn(e)
                    }
                    return []
                }
                async getUnbondingDelegations(e) {
                    try {
                        const {
                            unbonding_responses: t
                        } = await this.request(`cosmos/staking/v1beta1/delegators/${e}/unbonding_delegations`);
                        return t
                    } catch (e) {
                        console.warn(e)
                    }
                    return []
                }
                modifyLatestBlockResponse(e) {
                    if (!e) throw new Error("[CosmosNodeExplorer] wrong latest block response");
                    const t = Object.hasOwnProperty.call(e, "block") ? "block" : "block_meta";
                    return this.chainId = e[t].header.chain_id, this.lastKnownHeight = Number(e[t].header.height) || 0, e
                }
                async getChainId() {
                    return await this.getLatestBlock(), this.chainId
                }
                async getSignerData(e) {
                    const {
                        sequence: t = "0",
                        account_number: r
                    } = await this.getAuth(e);
                    return {
                        sequence: t,
                        accountNumber: r,
                        chainId: this.chainId || await this.getChainId()
                    }
                }
                async getValidators(e) {
                    const {
                        validators: t
                    } = await this.request(`cosmos/distribution/v1beta1/delegators/${e}/validators`);
                    return t
                }
                getTxFee() {
                    return this.wallet.toCurrencyUnit(this.wallet.feeDefault)
                }
            }
            var l = CosmosNodeExplorerV2;
            t.default = l
        },
        3657: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20));
            class BlockcypherExplorer extends n.default {
                getAllowedTickers() {
                    return ["BTC", "LTC", "DOGE"]
                }
                getApiPrefix() {
                    return `v1/${this.wallet.ticker.toLowerCase()}/`
                }
                getInfoUrl(e) {
                    return `${this.getApiPrefix()}addrs/${e}`
                }
                getUnspentOutputsUrl(e) {
                    return `${this.getApiPrefix()}addrs/${e}?unspentOnly=true`
                }
                getSendTransactionUrl() {
                    return "txs/push"
                }
                getSendTransactionParam() {
                    return "tx"
                }
                getTransactionUrl(e) {
                    return `${this.getApiPrefix()}main/txs/${e}?limit=9999`
                }
                getTransactionsUrl(e) {
                    return `${this.getApiPrefix()}main/addrs/${e}/full`
                }
                modifyTransactionsResponse(e, t) {
                    return super.modifyTransactionsResponse(e.txs, t)
                }
                getTxHash(e) {
                    return e.hash
                }
                getTxDirection(e, t) {
                    return t.inputs && !t.inputs.find(({
                        addresses: t
                    }) => t[0] === e) && !0
                }
                getTxOtherSideAddress(e, t) {
                    if (!t.inputs) return "...";
                    if (this.getTxDirection(e, t)) return t.inputs[0].addresses[0];
                    let r = new this.wallet.BN(0),
                        a = "...";
                    return t.outputs.forEach(t => {
                        t.addresses.length > 0 && t.addresses[0] !== e && r.lt(new this.wallet.BN(t.value)) && (r = new this.wallet.BN(t.value), a = t.addresses[0])
                    }), a
                }
                getTxValue(e, t) {
                    let r = new this.wallet.BN(0),
                        a = new this.wallet.BN(0);
                    t.inputs.forEach(t => {
                        t.addresses[0] === e && (r = r.add(new this.wallet.BN(t.output_value)))
                    }), t.outputs.forEach(t => {
                        t.addresses && t.addresses[0] === e && (a = a.add(new this.wallet.BN(t.value)))
                    });
                    const n = r.sub(a),
                        s = n.lt(new this.wallet.BN(0)),
                        i = n.abs();
                    return Number(this.wallet.toCurrencyUnit(s ? i : i.sub(new this.wallet.BN(t.fees))))
                }
                getTxDateTime(e) {
                    return new Date(e.confirmed)
                }
                getTxConfirmations(e) {
                    return e.confirmations
                }
            }
            var s = BlockcypherExplorer;
            t.default = s
        },
        3658: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(20)),
                s = r(26),
                i = r(29);
            class CardanoliteExplorer extends n.default {
                constructor(e, t, r, a) {
                    super(...arguments), this.submitUrl = a
                }
                getAllowedTickers() {
                    return ["ADA"]
                }
                getInfoUrl(e) {
                    return "/addresses/summary/" + e
                }
                modifyInfoResponse(e) {
                    return {
                        balance: e.Right.caBalance.getCoin,
                        transactions: []
                    }
                }
                getUTXOUrl() {
                    return "/v2/txs/utxoForAddresses"
                }
                getTransactionsUrl(e) {
                    return "/v2/txs/history"
                }
                getTransactionsMethod() {
                    return "post"
                }
                getTransactionsParams(e, t, r) {
                    return {
                        addresses: [e],
                        dateFrom: 14832288e5,
                        txLimit: r || this.defaultTxLimit
                    }
                }
                modifyTransactionsResponse(e, t) {
                    return super.modifyTransactionsResponse(e, t)
                }
                getSendTransactionUrl() {
                    return "/v2/txs/signed"
                }
                getSendTransactionMethod() {
                    return "post"
                }
                getSendTransactionParams(e) {
                    return {
                        signedTx: Buffer.from(e.txBody, "hex").toString("base64"),
                        txHash: e.txHash
                    }
                }
                modifySendTransactionResponse(e, t) {
                    let r;
                    if ("Transaction sent successfully!" !== e) throw new i.WalletError({
                        type: s.SEND_TRANSACTION_TYPE,
                        error: new Error("[ADA] " + e),
                        instance: this
                    });
                    return r = {
                        txid: t
                    }, r
                }
                getTxHash(e) {
                    return e.hash
                }
                getTxDirection(e, t) {
                    return !t.inputs_address.find(t => e === t)
                }
                getTxOtherSideAddress(e, t) {
                    return this.getTxDirection(e, t) ? t.inputs_address.find(t => e !== t) : t.outputs_address.find(t => e !== t) || e
                }
                getTxDate(e) {
                    return this.getTxDateTime(e).toDateString().slice(4)
                }
                getTxTime(e) {
                    return this.getTxDateTime(e).toTimeString().slice(0, 5)
                }
                getTxValue(e, t) {
                    const r = this.getTxDirection(e, t),
                        a = [];
                    t.outputs_address.forEach((t, n) => {
                        r && t === e ? a.push(n) : r || t === e || a.push(n)
                    });
                    let n;
                    if (t.inputs_address.concat(t.outputs_address).every(t => t === e)) {
                        const e = t.outputs_amount.reduce((e, t) => e.add(new this.wallet.BN(t)), new this.wallet.BN(0));
                        n = t.inputs_amount.reduce((e, t) => e.add(new this.wallet.BN(t)), new this.wallet.BN(0)).sub(e).toString()
                    } else n = a.reduce((e, r) => e.add(new this.wallet.BN(t.outputs_amount[r])), new this.wallet.BN(0)).toString();
                    return this.wallet.toCurrencyUnit(n)
                }
                getTxDateTime(e) {
                    return new Date(e.time)
                }
                getTxConfirmations(e) {
                    return 1
                }
                async getBalance(e) {
                    const t = await this.getInfo(e);
                    return t && t.balance
                }
                async sendTransaction(e) {
                    const t = await this.request(this.getSendTransactionUrl(), this.getSendTransactionMethod(), this.getSendTransactionParams(e), s.SEND_TRANSACTION_TYPE, this.getSendOptions());
                    return this.modifySendTransactionResponse(t, e.txHash)
                }
                async getUnspentOutputs(e) {
                    return await this.request(this.getUTXOUrl(), "post", {
                        addresses: [e]
                    }).catch(e => {
                        throw new i.ExplorerRequestError({
                            type: s.GET_UTXO_TYPE,
                            error: e,
                            url: this.getUTXOUrl(),
                            instance: this
                        })
                    })
                }
            }
            var o = CardanoliteExplorer;
            t.default = o
        },
        3659: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(35)),
                s = a(r(20));
            class CardanoRestExplorer extends s.default {
                getAllowedTickers() {
                    return ["ADA"]
                }
                getTxHash(e) {
                    return e.ctbId
                }
                getTxDirection(e, t) {
                    return !t.ctbInputs.find(({
                        ctaAddress: t
                    }) => e === t)
                }
                getTxOtherSideAddress(e, t) {
                    if (!!this.getTxDirection(e, t)) {
                        return t.ctbInputs.find(({
                            ctaAddress: t
                        }) => t !== e).ctaAddress
                    } {
                        const r = t.ctbOutputs.find(({
                            ctaAddress: t
                        }) => t !== e);
                        if (r) return r.ctaAddress
                    }
                    return e
                }
                getTxValue(e, t) {
                    const r = this.getTxDirection(e, t);
                    if (t.ctbInputs.concat(t.ctbOutputs).every(({
                            ctaAddress: t
                        }) => t === e)) return this.wallet.toCurrencyUnit(t.ctbFees.getCoin);
                    const a = t.ctbOutputs.reduce((t, a) => r ? a.ctaAddress === e ? t.add(new n.default(a.ctaAmount.getCoin)) : t : a.ctaAddress !== e ? t.add(new n.default(a.ctaAmount.getCoin)) : t, new n.default("0"));
                    return this.wallet.toCurrencyUnit(a)
                }
                getTxDateTime(e) {
                    return new Date(1e3 * e.ctbTimeIssued)
                }
                async getBalance(e) {
                    return (await this.getUnspentOutputs(e)).reduce((e, t) => e.add(new n.default(t.amount)), new n.default(0))
                }
                async sendTransaction({
                    rawtx: e
                }) {
                    return {
                        txid: await this.request("api/submit/tx", "post", Buffer.from(e), void 0, {
                            headers: {
                                "Content-Type": "application/cbor",
                                "API-key": this.config.options ? this.config.options["API-key"] : void 0
                            }
                        })
                    }
                }
                async getUnspentOutputs(e) {
                    return (await this.request("mainnet/utxos/" + e, "get")).map(e => ({
                        amount: String(e.coin),
                        tx_hash: e.txid,
                        tx_index: e.index,
                        receiver: e.address
                    }))
                }
                async getTransactions({
                    address: e
                }) {
                    const t = await this.request("api/addresses/summary/" + e, "get");
                    if (t.Left) throw new Error(t.Left);
                    return this.modifyTransactionsResponse(t.Right && t.Right.caTxList, e)
                }
                async getInfo(e) {
                    const t = await this.request("api/addresses/summary/" + e, "get");
                    return {
                        balance: t.Right && t.Right.caBalance.getCoin,
                        transactions: t.Right && t.Right.caTxList
                    }
                }
            }
            var i = CardanoRestExplorer;
            t.default = i
        },
        374: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(151)),
                s = a(r(55));
            class AtomicError extends Error {
                constructor(e) {
                    var t, r;
                    e.error.data && (e.error = Object.values(e.error.data).toString());
                    const a = e.instance.ticker || e.instance.wallet && e.instance.wallet.ticker;
                    let i = "";
                    if (e.error.response) {
                        const t = e.error.response.status;
                        let r = "";
                        e.error.response.data && e.error.response.data.message ? r = e.error.response.data.message : e.error.response.data ? r = "string" == typeof e.error.response.data ? e.error.response.data : e.error.response.data.error : e.error.response.detail && (r = e.error.response.detail), i = `${t} - ${r}`
                    } else i = "Unknown error: - " + e.error;
                    super(null === (t = e.error) || void 0 === t ? void 0 : t.toString()), (0, n.default)(this, "defaultType", "Unknown");
                    const o = {
                        type: null !== (r = e.type) && void 0 !== r ? r : this.defaultType,
                        error: i,
                        currency: a,
                        instance: e.instance,
                        stack: this.stack
                    };
                    e.url && (o.url = e.url), s.default.error(o), this.name = this.constructor.name
                }
            }
            var i = AtomicError;
            t.default = i
        },
        3934: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(2368),
                s = r(26),
                i = r(29),
                o = r(95),
                c = a(r(20));

            function l(e, t) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.add(e)
            }

            function d(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            var u = new WeakSet,
                h = new WeakSet;
            class AptExplorer extends c.default {
                constructor({
                    wallet: e,
                    config: t
                }) {
                    super({
                        wallet: e,
                        config: t
                    }), l(this, h), l(this, u), this.baseUrl = (0, o.getStringWithEnsuredEndChar)(t.baseUrl, "/"), this.ticker = e.ticker, this.aptosClient = new n.AptosClient(this.baseUrl), this.coinClient = new n.CoinClient(this.aptosClient)
                }
                getAllowedTickers() {
                    return ["APT"]
                }
                getAccount(e) {
                    return this.aptosClient.getAccount(e)
                }
                async sendTransaction(e) {
                    try {
                        const {
                            hash: t
                        } = await this.aptosClient.submitSignedBCSTransaction(e);
                        return {
                            txid: t
                        }
                    } catch (e) {
                        throw new i.ExternalError({
                            type: s.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getInfo(e) {
                    try {
                        const {
                            account: e
                        } = this.wallet.getLocalAccount();
                        return {
                            balance: (await this.coinClient.checkBalance(e)).toString(),
                            isRegistered: !0
                        }
                    } catch (e) {
                        const {
                            status: t,
                            errorCode: r
                        } = null != e ? e : {};
                        if (404 === t && "account_not_found" === r) return {
                            balance: null,
                            isRegistered: !1
                        };
                        throw new i.ExternalError({
                            type: s.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                getGasPrice() {
                    return this.aptosClient.estimateGasPrice()
                }
                getTransactionsParams(e, t = 0, r = this.defaultTxLimit, a) {
                    return {
                        start: String(t),
                        limit: String(r)
                    }
                }
                getTransactionsUrl(e) {
                    return `/accounts/${e}/transactions`
                }
                getTxHash(e) {
                    return e.hash
                }
                getTxDirection(e, t) {
                    return d(this, u, g).call(this, t) === e
                }
                getTxOtherSideAddress(e, t) {
                    return this.getTxDirection(e, t) ? e : d(this, u, g).call(this, t)
                }
                getTxValue(e, t) {
                    const r = d(this, h, f).call(this, t);
                    return this.wallet.toCurrencyUnit(r)
                }
                getTxDateTime(e) {
                    return (0, o.convertTimestampToDateTime)(Number(e.timestamp), 1e6)
                }
                getTxFee(e) {
                    const {
                        gas_used: t,
                        gas_unit_price: r
                    } = e;
                    return this.wallet.toCurrencyUnit(BigInt(t) * BigInt(r))
                }
                getTxConfirmations(e) {
                    return e.success ? 1 : 0
                }
            }

            function g(e) {
                var t;
                return null === (t = e.payload) || void 0 === t ? void 0 : t.arguments[0]
            }

            function f(e) {
                var t;
                return null === (t = e.payload) || void 0 === t ? void 0 : t.arguments[1]
            }
            var m = AptExplorer;
            t.default = m
        },
        3993: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(95),
                s = a(r(20)),
                i = a(r(74));
            class FtmExplorer extends s.default {
                constructor({
                    wallet: e,
                    config: t
                }) {
                    super({
                        wallet: e,
                        config: t
                    }), this.baseUrl = (0, n.getStringWithEnsuredEndChar)(t.baseUrl, "/"), this.ticker = e.ticker
                }
                getAllowedTickers() {
                    return ["FTM"]
                }
                getTransactionsParams(e, t = 0, r = this.defaultTxLimit, a = 1) {
                    return {
                        module: "account",
                        action: "txlist",
                        address: e,
                        page: String(a),
                        offset: String(r),
                        sort: "desc"
                    }
                }
                getTransactionsUrl(e) {
                    return ""
                }
                modifyTransactionsResponse(e, t, r = this.wallet.ticker) {
                    return (Array.isArray(null == e ? void 0 : e.result) ? e.result : []).reduce((e, a, s) => {
                        try {
                            const s = this.getTxDirection(t, a);
                            return e.push(new i.default({
                                ticker: r,
                                name: this.wallet.name,
                                alias: this.wallet.alias,
                                walletid: this.wallet.id,
                                explorer: this.constructor.name,
                                txid: a.hash,
                                direction: s,
                                otherSideAddress: s ? a.from : a.to,
                                amount: (0, n.toCurrency)(a.value, this.wallet.decimal),
                                datetime: this.getTxDateTime(a),
                                memo: "",
                                confirmations: a.confirmations,
                                fee: this.getTxFee(a),
                                feeTicker: r
                            })), e
                        } catch (t) {
                            return console.warn("[FTM] tx parse failed"), console.error(t), e
                        }
                    }, [])
                }
                getTxDirection(e, t) {
                    return t.to.toLowerCase() === e.toLowerCase()
                }
                getTxDateTime(e) {
                    return (0, n.convertTimestampToDateTime)(Number(e.timeStamp), 1)
                }
                getTxFee(e) {
                    return this.wallet.toCurrencyUnit(BigInt(e.gasUsed) * BigInt(e.gasPrice))
                }
            }
            var o = FtmExplorer;
            t.default = o
        },
        4413: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(57));
            var s = class ChangeNowV2ApiClient {
                constructor(e) {
                    this.apiKey = e, this.baseUrl = "https://move-api.atomicwallet.io/v2/move"
                }
                queryGet(e, t = {}) {
                    return this.query("get", e, t)
                }
                queryPost(e, t = {}) {
                    return this.query("post", e, t)
                }
                async query(e, t, r = {}) {
                    try {
                        const {
                            data: a
                        } = await (0, n.default)({
                            method: e,
                            url: `${this.baseUrl}/${t}`,
                            ["post" === e ? "data" : "params"]: r,
                            headers: {
                                "x-changenow-api-key": this.apiKey
                            }
                        });
                        return a
                    } catch (e) {
                        throw new Error("Can't connect to ChangeNOW")
                    }
                }
            };
            t.default = s
        },
        4414: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(2078);
            var n = class WalletConverter {
                constructor(e) {
                    this.apiClient = e, this.availableTargetCoinsPromise = null
                }
                getDeterministicFieldSet(e = {}) {
                    const {
                        contract: t,
                        network: r,
                        deprecatedParent: n,
                        ticker: s
                    } = e, i = "string" != typeof r || ["", "mainnet"].includes(r) ? n : r, o = {
                        deprecatedParent: {
                            ong: "ont"
                        } [i.toLowerCase()] || i,
                        contract: "OP" === i && "OP" === s ? void 0 : t,
                        ticker: s
                    };
                    for (const [e, i] of Object.entries(a.TICKER_MAPPING)) {
                        const [a, c, l] = e.split("|");
                        if (s === i && (a === n.toLowerCase() || "arbitrum" === r) && (null != t ? t : "") === l) {
                            o.ticker = c.toUpperCase();
                            break
                        }
                    }
                    return o
                }
                async getTarget(e) {
                    const {
                        contract: t,
                        deprecatedParent: r,
                        ticker: a
                    } = this.getDeterministicFieldSet(e);
                    return this.isInitialized() || this.initialize(), (await this.availableTargetCoinsPromise).find(({
                        network: e,
                        ticker: n,
                        tokenContract: s
                    }) => {
                        const i = (!t && !s || this.isContractIgnored(r, a)) && a.toLowerCase() === n.toLowerCase(),
                            o = void 0 !== t && null !== s && t.toLowerCase() === s.toLowerCase();
                        return ("ARB" === r ? "arbitrum" : (r || a).toLowerCase()) === e.toLowerCase() && (i || o)
                    })
                }
                initialize() {
                    this.availableTargetCoinsPromise = this.apiClient.queryGet("currencies")
                }
                isInitialized() {
                    return null !== this.availableTargetCoinsPromise
                }
                isContractIgnored(e, t) {
                    return "ont" === e.toLowerCase() && "ong" === t.toLowerCase()
                }
            };
            t.default = n
        },
        4415: function(e) {
            e.exports = JSON.parse('{"apiKey":"7cd76888ccee2317b76dab909e1b36f0d70aa7fc13d8866eeace933dfc7f4544"}')
        },
        4416: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(1431)),
                s = a(r(1412)),
                i = a(r(4417)),
                o = a(r(955)),
                c = a(r(956)),
                l = r(2079),
                d = r(52),
                u = a(r(192)),
                h = a(r(4419));

            function g(e, t) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.add(e)
            }

            function f(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            const m = /^([a-f0-9]{8})([a-f0-9]{4})([a-f0-9]{4})([a-f0-9]{4})([a-f0-9]{12})$/;
            var p = new WeakSet,
                T = new WeakSet;
            class Simplex extends i.default {
                constructor(e = "https://ob.atomicwallet.io/") {
                    super(e), g(this, T), g(this, p)
                }
                createExchangeClient(e) {
                    return new h.default(e)
                }
                getAvailableWallets() {
                    return o.default.settings.availableWallets.filter(({
                        ticker: e
                    }) => c.default.isAllowed(e.toUpperCase(), l.ACTION_BUY)).map(({
                        id: e
                    }) => e)
                }
                getAvailableFiats() {
                    return o.default.settings.fiats
                }
                async getExchangeRate(e, t, r, a, n) {
                    if (!(e && t && r && a && n)) throw new TypeError("Initial values should be defined: `fiatToSend`, `coinToReceive`, `amount`, `walletHash`, `requestToken");
                    const s = this.hashFormat(a),
                        {
                            ip: i
                        } = await (0, d.getGeo)(),
                        c = {
                            digital_currency: o.default.getSimplexTicker(t),
                            fiat_currency: e,
                            requested_currency: e,
                            requested_amount: Number(r),
                            end_user_id: s,
                            wallet_id: "atomicwallet",
                            client_ip: i
                        },
                        {
                            response: l,
                            token: u
                        } = await this.client.getQuote(c, n);
                    if (l.data.result.error) throw l.data.result.error;
                    const h = l.data.result.quote_id,
                        g = this.getPaymentId(h, a),
                        f = this.getOrderId(g),
                        m = this.getCookieUaid(f),
                        p = this.getCookieSession(m);
                    return {
                        totalFiatAmount: l.data.result.fiat_money.total_amount,
                        requestedCoinAmount: l.data.result.digital_money.amount.toString(),
                        userId: s,
                        quoteId: h,
                        paymentId: g,
                        orderId: f,
                        cookieUaid: m,
                        cookieSession: p,
                        token: u
                    }
                }
                hashFormat(e) {
                    return e.replace(m, "$1-$2-$3-$4-$5")
                }
                getPaymentId(e, t) {
                    if (!e || !t) throw new TypeError("`quoteId` and `wallethash` should be defined");
                    const r = Math.random().toString(36);
                    return this.hashFormat(n.default.hash(e + t + r))
                }
                getOrderId(e) {
                    if (!e) throw new TypeError("`paymentId` should be defined");
                    return this.hashFormat(n.default.hash(e))
                }
                getCookieUaid(e) {
                    if (!e) throw new TypeError("`orderId` should be defined");
                    return this.hashFormat((0, s.default)(e))
                }
                getCookieSession(e) {
                    if (!e) throw new TypeError("`cookieUaid` should be defined");
                    return this.hashFormat((0, s.default)(e))
                }
                createExchangeTransaction({
                    userId: e,
                    quoteId: t,
                    paymentId: r,
                    orderId: a,
                    cookieUaid: n,
                    cookieSession: s,
                    fiatTicker: i,
                    fiatAmount: o,
                    coinAmount: c,
                    coinAddress: l,
                    coin: d,
                    geo: u,
                    ip: h
                }) {
                    const g = {
                        userId: e,
                        quoteId: t,
                        paymentId: r,
                        orderId: a,
                        cookieUaid: n,
                        cookieSession: s,
                        fiatTicker: i,
                        fiatAmount: o,
                        coinAmount: c,
                        coinAddress: l,
                        coin: d,
                        geo: u,
                        ip: h
                    };
                    return {
                        paymentRequestPayload: f(this, p, w).call(this, g),
                        submitRequestPayload: f(this, T, x).call(this, g)
                    }
                }
                async makeExchange({
                    paymentRequestPayload: e,
                    submitRequestPayload: t
                }) {
                    await this.client.requestPayment(e);
                    const {
                        data: r
                    } = await this.client.submitPayment(t);
                    return r.result
                }
            }

            function w({
                userId: e,
                quoteId: t,
                paymentId: r,
                orderId: a,
                cookieUaid: n,
                cookieSession: s,
                fiatTicker: i,
                fiatAmount: c,
                coinAmount: l,
                coinAddress: d,
                coin: h,
                geo: g,
                ip: f
            }) {
                return {
                    account_details: {
                        app_provider_id: "atomicwallet",
                        app_version_id: u.default.getVersion(),
                        app_end_user_id: e,
                        app_install_date: new Date,
                        signup_login: {
                            ip: f,
                            location: g,
                            uaid: n,
                            accept_language: "en-US;q=0.7,en;",
                            http_accept_language: "en-US;q=0.7,en;",
                            user_agent: navigator.userAgent,
                            cookie_session_id: s,
                            timestamp: new Date
                        }
                    },
                    transaction_details: {
                        payment_details: {
                            quote_id: t,
                            payment_id: r,
                            order_id: a,
                            fiat_total_amount: {
                                currency: i,
                                amount: Number(c)
                            },
                            requested_digital_amount: {
                                currency: o.default.getSimplexTicker(h),
                                amount: Number(l)
                            },
                            destination_wallet: {
                                currency: o.default.getSimplexTicker(h),
                                address: d
                            },
                            original_http_ref_url: "https://atomicwallet.io"
                        }
                    }
                }
            }

            function x({
                userId: e,
                quoteId: t,
                paymentId: r,
                fiatTicker: a,
                fiatAmount: n,
                coinAmount: s,
                coinAddress: i,
                coin: c
            }) {
                return {
                    version: "1",
                    partner: "atomicwallet",
                    payment_flow_type: "wallet",
                    return_url: "https://atomicwallet.io",
                    quote_id: t,
                    payment_id: r,
                    user_id: e,
                    destination_wallet: {
                        address: i,
                        currency: o.default.getSimplexTicker(c)
                    },
                    fiat_total_amount: {
                        amount: n,
                        currency: a
                    },
                    digital_total_amount: {
                        amount: s,
                        currency: o.default.getSimplexTicker(c)
                    }
                }
            }
            var y = Simplex;
            t.default = y
        },
        4417: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(29),
                s = a(r(4418));
            t.default = class Exchanger {
                constructor(e) {
                    this.client = this.createExchangeClient(e)
                }
                createExchangeClient(e) {
                    throw new n.UndeclaredAbstractMethodError("createExchangeClient", this)
                }
                fetchAvailableTickers() {
                    throw new n.UndeclaredAbstractMethodError("fetchAvailableTickers", this)
                }
                getAvailableWallets() {
                    throw new n.UndeclaredAbstractMethodError("getAvailableWallets", this)
                }
                async getExchangeRate() {
                    throw new n.UndeclaredAbstractMethodError("getExchangeRate", this)
                }
                getMinAndMaxAmount(e, t) {
                    throw new n.UndeclaredAbstractMethodError("getMinAndMaxAmount", this)
                }
                createExchangeTransaction(e) {
                    return new s.default(e)
                }
                validateExchangeTx(e) {
                    throw new n.UndeclaredAbstractMethodError("validateExchangeTx", this)
                }
                async makeExchange(e) {
                    throw new n.UndeclaredAbstractMethodError("makeExchange", this)
                }
                getExchangeTransactions(e) {
                    throw new n.UndeclaredAbstractMethodError("getExchangeTransactions", this)
                }
                getExchangeTransaction(e) {
                    throw new n.UndeclaredAbstractMethodError("getExchangeTransaction", this)
                }
            }
        },
        4419: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(207)),
                s = a(r(208)),
                i = a(r(57));

            function o(e, t, r) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, r)
            }
            var c = new WeakMap;
            var l = class ApiClient {
                constructor(e) {
                    o(this, c, {
                        writable: !0,
                        value: void 0
                    }), (0, s.default)(this, c, i.default.create({
                        baseURL: e
                    }))
                }
                createV2Payload(e, t) {
                    return {
                        method: "GET",
                        url: e,
                        data: {
                            paymentMethod: t
                        }
                    }
                }
                async getQuote(e, t) {
                    const r = {
                        method: "POST",
                        url: "simplex",
                        data: e
                    };
                    return {
                        response: await (0, n.default)(this, c).call(this, r),
                        token: t
                    }
                }
                requestPayment(e) {
                    const t = {
                        method: "POST",
                        url: "simplexPay",
                        data: e
                    };
                    return (0, n.default)(this, c).call(this, t)
                }
                submitPayment(e) {
                    const t = {
                        method: "POST",
                        url: "simplexSubmit",
                        data: e
                    };
                    return (0, n.default)(this, c).call(this, t)
                }
                getEvents(e) {
                    const t = {
                        method: "GET",
                        url: "simplexEvent/" + e
                    };
                    return (0, n.default)(this, c).call(this, t)
                }
                getSupportedCountries(e) {
                    const t = this.createV2Payload("supportedContries", e);
                    return (0, n.default)(this, c).call(this, t)
                }
                getSupportedCurrencies(e) {
                    const t = this.createV2Payload("supportedCryptoCurrencies", e);
                    return (0, n.default)(this, c).call(this, t)
                }
                getSupportedFiat(e) {
                    const t = this.createV2Payload("supportedFiatCurrencies", e);
                    return (0, n.default)(this, c).call(this, t)
                }
            };
            t.default = l
        }
    }
]);