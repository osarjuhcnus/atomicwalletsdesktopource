(window.webpackJsonp = window.webpackJsonp || []).push([
    [56], {
        2554: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = r(2378),
                s = n(r(20));

            function i(t, e) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.add(t)
            }

            function o(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            var l = new WeakSet,
                c = new WeakSet;
            class HederaStakingExplorer extends s.default {
                constructor(...t) {
                    super(...t), i(this, c), i(this, l)
                }
                getAllowedTickers() {
                    return ["HBAR"]
                }
                getInfoParams() {
                    return {
                        limit: 1
                    }
                }
                getInfoUrl(t) {
                    return "accounts/" + t
                }
                stake(t, e) {
                    return o(this, c, u).call(this, o(this, l, d).call(this, t).setStakedNodeId(e).setDeclineStakingReward(!1), t)
                }
                unstake(t) {
                    return o(this, c, u).call(this, o(this, l, d).call(this, t).clearStakedNodeId(), t)
                }
            }

            function d({
                address: t
            }) {
                return (new a.AccountUpdateTransaction).setAccountId(t)
            }
            async function u(t, e) {
                return (await t.freezeWith(e.getClientV2()).sign(a.PrivateKey.fromString(e.privateKey))).execute(e.getClientV2())
            }
            var h = HederaStakingExplorer;
            e.default = h
        },
        2586: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = r(1541),
                s = n(r(20)),
                i = r(29),
                o = r(26);
            class OntExplorer extends s.default {
                constructor(...t) {
                    super(...t), this.rest = new a.RestClient(a.CONST.MAIN_ONT_URL.REST_URL)
                }
                getAllowedTickers() {
                    return ["ONT", "ONG"]
                }
                getApiPrefix() {
                    return "/v2"
                }
                modifyGeneralResponse(t) {
                    if (void 0 !== t.Error && 0 !== t.Error || t.data && (0 !== t.data.code || null === t.data.result)) throw new Error("" + t.data.msg);
                    return t.data && t.data.result ? t.data.result : t
                }
                getInfoUrl(t) {
                    return `${this.getApiPrefix()}/addresses/${t}/native/balances`
                }
                async getInfo(t) {
                    const e = await this.request(this.getInfoUrl(t)),
                        r = {
                            unbonding: "0",
                            rewards: "0"
                        };
                    return e.forEach(t => {
                        ["ont", "ong"].includes(t.asset_name) && (r[t.asset_name] = t.balance), "unboundong" === t.asset_name && (r.rewards = t.balance), "waitboundong" === t.asset_name && (r.unbonding = t.balance)
                    }), {
                        balances: r
                    }
                }
                getTransactionsUrl(t) {
                    return `${this.getApiPrefix()}/addresses/${t}/${this.wallet.ticker.toLowerCase()}/transactions?page_size=20&page_number=1`
                }
                async getTransactions(t, e = 0, r = this.defaultTxLimit) {
                    return this.latestBlock = await this.getLatestBlock(), super.getTransactions(t, e, r)
                }
                modifyTransactionsResponse(t, e) {
                    const r = t.map(t => (t.transfers = t.transfers.filter(t => t.asset_name === this.wallet.ticker.toLowerCase()), t)).filter(t => 0 !== t.transfers.length);
                    return super.modifyTransactionsResponse(r, e)
                }
                getLatestBlockUrl() {
                    return this.getApiPrefix() + "/latest-blocks?count=1"
                }
                modifyLatestBlockResponse([t]) {
                    return t
                }
                getTxHash(t) {
                    return t.tx_hash
                }
                getTxDirection(t, e) {
                    return e.transfers[0].to_address === t
                }
                getTxOtherSideAddress(t, e) {
                    return this.getTxDirection(t, e) ? e.transfers[0].from_address : e.transfers[0].to_address
                }
                getTxValue(t, e) {
                    return e.transfers[0].amount.replace(/(\.\d*[1-9])0+$|\.0*$/, "$1")
                }
                getTxDateTime(t) {
                    return new Date(Number(t.tx_time + "000"))
                }
                getTxConfirmations(t) {
                    return this.latestBlock.block_height - t.block_height
                }
                async sendTransaction(t) {
                    let e;
                    try {
                        if (e = await this.rest.sendRawTransaction(t), 0 !== e.Error) throw new Error(`${e.Desc} : ${e.Result}`)
                    } catch (t) {
                        throw new i.ExplorerRequestError({
                            type: o.SEND_TRANSACTION_TYPE,
                            error: t,
                            instance: this
                        })
                    }
                    return {
                        txid: e.Result
                    }
                }
                getTxFee(t) {
                    return t && t.fee || 0
                }
                getTxFeeTicker() {
                    return "ONG"
                }
            }
            var l = OntExplorer;
            e.default = l
        },
        2914: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(20)),
                s = r(26);
            class IconExplorer extends a.default {
                getAllowedTickers() {
                    return ["ICX"]
                }
                getApiPrefix() {
                    return "v3/"
                }
                getInfoUrl(t) {
                    return this.getApiPrefix() + "address/info"
                }
                getInfoParams(t) {
                    return {
                        address: t
                    }
                }
                modifyInfoResponse(t) {
                    var e;
                    return {
                        balance: this.wallet.toMinimalUnit(null === (e = t.data) || void 0 === e ? void 0 : e.balance),
                        transactions: []
                    }
                }
                getTransactionsUrl(t) {
                    return this.getApiPrefix() + "address/txList"
                }
                getTransactionsParams(t, e = 0) {
                    return {
                        address: t,
                        page: e > this.defaultTxLimit ? parseInt(e / this.defaultTxLimit, 10) : 1,
                        count: this.defaultTxLimit
                    }
                }
                modifyTransactionsResponse(t, e) {
                    return super.modifyTransactionsResponse(t.data, e)
                }
                async getTransactions({
                    address: t,
                    offset: e = 0,
                    limit: r = this.defaultTxLimit
                }) {
                    return this.latestBlock = await this.getLatestBlock(), super.getTransactions({
                        address: t,
                        offset: e,
                        limit: r
                    })
                }
                getTxHash(t) {
                    return t.txHash
                }
                getTxDirection(t, e) {
                    switch (e.txType) {
                        case s.IcxTxTypes.TXTYPE_CLAIM:
                            return !0
                    }
                    return e.toAddr === t
                }
                getTxOtherSideAddress(t, e) {
                    switch (e.txType) {
                        case s.IcxTxTypes.TXTYPE_STAKE:
                            return "Stake";
                        case s.IcxTxTypes.TXTYPE_DELEGATE:
                            return "Delegate";
                        case s.IcxTxTypes.TXTYPE_CLAIM:
                            return "Claim reward";
                        default:
                            return this.getTxDirection(t, e) ? e.fromAddr : e.toAddr
                    }
                }
                getTxValue(t, e) {
                    return e.amount
                }
                getTxDateTime({
                    createDate: t = ""
                }) {
                    return new Date(t)
                }
                getTxConfirmations(t) {
                    return this.latestBlock ? this.latestBlock.height - t.height : 1
                }
                getLatestBlockUrl() {
                    return this.getApiPrefix() + "block/list"
                }
                getLatestBlockParams() {
                    return {
                        count: 1
                    }
                }
                modifyLatestBlockResponse(t) {
                    return t.data[0]
                }
                getSendTransactionUrl() {
                    super.getSendTransactionUrl()
                }
                getTxFee(t) {
                    return t && t.fee || 0
                }
            }
            var i = IconExplorer;
            e.default = i
        },
        2922: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(20)),
                s = r(26),
                i = n(r(74)),
                o = r(95);
            class KabutoExplorer extends a.default {
                getAllowedTickers() {
                    return ["HBAR"]
                }
                getApiPrefix() {
                    return ""
                }
                async getInfo(t) {
                    if (!t) throw new Error("[HBAR] KabutoExplorer: address is not defined");
                    const e = await this.request(this.getInfoUrl(t), this.getInfoMethod(), this.getInfoParams(), s.GET_BALANCE_TYPE, this.getInfoOptions());
                    return this.modifyInfoResponse(e, t)
                }
                getInfoUrl(t) {
                    return "account/" + t
                }
                getTxValue(t, e) {
                    return (0, o.toCurrency)(e.value, this.wallet.decimal)
                }
                getTxDateTime(t) {
                    return new Date(t.consensusAt)
                }
                getTxDirection(t, e) {
                    return e.transfers.find(t => t.amount === e.value).account === t
                }
                getTxHash(t) {
                    return t.hash
                }
                getTxMemo(t) {
                    return t.memo || ""
                }
                getTxOtherSideAddress(t, e) {
                    const r = e.transfers.find(t => t.amount === e.value);
                    return this.getTxDirection(t, e) ? e.operator : r.account
                }
                modifyInfoResponse(t) {
                    return {
                        balance: t.balance.amount,
                        transactions: []
                    }
                }
                async getTransaction(t, e) {
                    const r = await this.request("transaction/" + e);
                    return this.modifyTransactionResponse(r, t)
                }
                async getTransactions({
                    address: t
                }) {
                    if (!t) throw new Error("KabutoExplorer: no address");
                    const e = await this.request(`account/${t}/transaction`);
                    return this.modifyTransactionsResponse(e, t)
                }
                modifyTransactionsResponse(t, e) {
                    return t.transactions.filter(t => "CRYPTO_TRANSFER" === t.type).map(t => ({
                        ticker: this.wallet.ticker,
                        name: this.wallet.name,
                        alias: this.wallet.alias,
                        walletid: this.wallet.id,
                        explorer: "KabutoExplorer",
                        txid: this.getTxHash(t),
                        fee: this.getTxFee(t),
                        feeTicker: "HBAR",
                        direction: this.getTxDirection(e, t),
                        otherSideAddress: this.getTxOtherSideAddress(e, t),
                        amount: this.getTxValue(e, t),
                        datetime: this.getTxDateTime(t),
                        memo: this.getTxMemo(t),
                        confirmations: 1
                    })).map(t => new i.default(t))
                }
                getTxFee(t) {
                    return (0, o.toCurrency)(t && t.fee || 0, this.wallet.decimal)
                }
            }
            var l = KabutoExplorer;
            e.default = l
        },
        2923: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(20)),
                s = n(r(74)),
                i = r(26),
                o = r(95);
            class KabutoExplorerV2 extends a.default {
                getAllowedTickers() {
                    return ["HBAR"]
                }
                getApiPrefix() {
                    return ""
                }
                async getInfo(t) {
                    if (!t) throw new Error("[HBAR] KabutoExplorerV2: address is not defined");
                    const e = await this.request(this.getInfoUrl(t), this.getInfoMethod(), this.getInfoParams(), i.GET_BALANCE_TYPE, this.getInfoOptions());
                    return this.modifyInfoResponse(e, t)
                }
                getInfoUrl(t) {
                    return "id/" + t
                }
                getTransactionsUrl(t) {
                    return "/transaction?filter[entityId]=" + t
                }
                getTxValue(t, e) {
                    const r = this.getTxDirection(t, e),
                        n = this.getTxOtherSideAddress(t, e),
                        a = r ? this.getTransferFromTx(n, e) : this.getTransferFromTx(t, e);
                    return (0, o.toCurrency)(a.amount, this.wallet.decimal)
                }
                getTxDateTime(t) {
                    return new Date(t.consensusAt)
                }
                getTxDirection(t, e) {
                    return this.getTransferFromTx(t, e).amount < 0
                }
                getTxHash(t) {
                    return t.hash
                }
                getTxMemo(t) {
                    return t.memo || ""
                }
                getTransferFromTx(t, e) {
                    const r = [t, e.nodeAccountId, "0.0.98"];
                    return e.transfers.find(t => !r.includes(t.accountId))
                }
                getTxOtherSideAddress(t, e) {
                    return this.getTransferFromTx(t, e).accountId
                }
                modifyInfoResponse(t) {
                    return {
                        balance: t.balance.amount,
                        transactions: []
                    }
                }
                async getTransaction(t, e) {
                    const r = await this.request("transaction/" + e);
                    return this.modifyTransactionResponse(r, t)
                }
                async getTransactions({
                    address: t
                }) {
                    if (!t) throw new Error("KabutoExplorerV2: no address");
                    const e = await this.request(this.getTransactionsUrl(t));
                    return this.modifyTransactionsResponse(e, t)
                }
                modifyTransactionsResponse(t, e) {
                    return t.data.filter(t => "TRANSFER" === t.type).map(t => ({
                        ticker: this.wallet.ticker,
                        name: this.wallet.name,
                        alias: this.wallet.alias,
                        walletid: this.wallet.id,
                        explorer: "KabutoExplorerV2",
                        txid: this.getTxHash(t),
                        fee: this.getTxFee(t),
                        feeTicker: "HBAR",
                        direction: this.getTxDirection(e, t),
                        otherSideAddress: this.getTxOtherSideAddress(e, t),
                        amount: this.getTxValue(e, t),
                        datetime: this.getTxDateTime(t),
                        memo: this.getTxMemo(t),
                        confirmations: 1
                    })).map(t => new s.default(t))
                }
                getTxFee(t) {
                    return (0, o.toCurrency)(t && t.fee || 0, this.wallet.decimal)
                }
            }
            var l = KabutoExplorerV2;
            e.default = l
        },
        2963: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(57)),
                s = n(r(1010)),
                i = n(r(20)),
                o = r(29),
                l = r(26),
                c = n(r(74));
            class InsightExplorer extends i.default {
                constructor(...t) {
                    super(...t), this.canPaginate = !0
                }
                getAllowedTickers() {
                    return ["BTC", "LTC", "ZEC", "DGB", "DASH", "DOGE", "BTG", "QTUM", "BCH", "BSV", "SMART", "DCR", "GRS", "YEC", "RVN", "KMD", "BCD"]
                }
                getWalletAddress(t) {
                    return ["BCH", "BSV"].includes(this.wallet.ticker) && s.default.isCashAddress(t) ? s.default.toLegacyAddress(t) : t
                }
                getApiPrefix() {
                    return ["BTG", "BCD"].includes(this.wallet.ticker) ? "insight-api/" : "YEC" === this.wallet.ticker ? "api/YEC/mainnet/" : "KMD" === this.wallet.ticker ? "insight-api-komodo/" : "api/"
                }
                getInfoUrl(t) {
                    return `${this.getApiPrefix()}addr/${t}`
                }
                modifyInfoResponse(t) {
                    return {
                        balance: t.balanceSat,
                        transactions: []
                    }
                }
                getTransactionUrl(t) {
                    return `${this.getApiPrefix()}tx/${t}`
                }
                getTransactionsUrl(t) {
                    return "DCR" === this.wallet.ticker ? `${this.getApiPrefix()}addr/${t}/txs` : `${this.getApiPrefix()}txs?address=${t}`
                }
                getTransactionsParams(t, e, r, n) {
                    return {
                        pageNum: n
                    }
                }
                modifyTransactionsResponse(t, e) {
                    return "DCR" === this.wallet.ticker ? Promise.all(t.transactions.map(async t => this.getTransaction(t))) : super.modifyTransactionsResponse(t.txs, e)
                }
                getUnspentOutputsUrl(t) {
                    return "YEC" === this.wallet.ticker ? `${this.getApiPrefix()}address/${t}/` : `${this.getApiPrefix()}addr/${t}/utxo`
                }
                getUnspentOutputsParams() {
                    return "YEC" === this.wallet.ticker ? {
                        unspent: !0,
                        limit: 1e3
                    } : {}
                }
                modifyUnspentOutputsResponse(t, e) {
                    return "YEC" === this.wallet.ticker ? e.map(({
                        address: t,
                        mintTxid: e,
                        mintIndex: r,
                        script: n,
                        value: a
                    }) => ({
                        txid: e,
                        vout: r,
                        script: n,
                        value: a,
                        address: t,
                        outputIndex: r,
                        satoshis: a
                    })) : e.map(({
                        address: t,
                        txid: e,
                        vout: r,
                        scriptPubKey: n,
                        satoshis: a,
                        amount: s
                    }) => ({
                        txid: e,
                        txId: e,
                        vout: r,
                        script: n,
                        value: a || s,
                        address: this.modifyUnspentAddress(t),
                        outputIndex: r,
                        satoshis: "DGB" === this.wallet.ticker ? Number(this.wallet.toMinimalUnit(a || s)) : a || s,
                        atoms: Number(a)
                    }))
                }
                modifyUnspentAddress(t) {
                    return ["BCH", "BSV"].includes(this.wallet.ticker) ? s.default.isCashAddress(t) ? t : s.default.toCashAddress(t) : t
                }
                getSendTransactionUrl() {
                    return this.getApiPrefix() + "tx/send"
                }
                getSendTransactionParam() {
                    return "YEC" === this.wallet.ticker ? "rawTx" : "rawtx"
                }
                async sendTransaction(t) {
                    let e;
                    const r = `${this.config.baseUrl}${this.getSendTransactionUrl()}`;
                    try {
                        e = "BTG" === this.wallet.ticker ? await a.default.post(r, `${this.getSendTransactionParam()}=${t}`, {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }) : await a.default.post(r, {
                            [this.getSendTransactionParam()]: t
                        })
                    } catch (t) {
                        throw new o.ExplorerRequestError({
                            type: l.SEND_TRANSACTION_TYPE,
                            error: t,
                            url: r,
                            instance: this
                        })
                    }
                    return this.modifyGeneralResponse(this.modifySendTransactionResponse(e))
                }
                getTxDateTime(t) {
                    return t.time ? new Date(Number(t.time + "000")) : new Date
                }
                getTxValue(t, e) {
                    let r = new this.wallet.BN(0),
                        n = new this.wallet.BN(0);
                    if (!e.vin || !e.vout) return 0;
                    e.vin.forEach(e => {
                        e.addr === t && (r = r.add(new this.wallet.BN(e.valueSat)))
                    }), e.vout.forEach(e => {
                        e.scriptPubKey.addresses && e.scriptPubKey.addresses.length > 0 && e.scriptPubKey.addresses[0] === t && (n = n.add(new this.wallet.BN(this.wallet.toMinimalUnit(e.value))))
                    });
                    const a = r.sub(n),
                        s = a.lt(new this.wallet.BN(0)),
                        i = a.abs();
                    return Number(this.wallet.toCurrencyUnit(s ? i : i.sub(new this.wallet.BN(this.wallet.toMinimalUnit(e.fees)))))
                }
                getTxDirection(t, e) {
                    return e.vin && !e.vin.find(({
                        addr: e
                    }) => e === t)
                }
                getTxOtherSideAddress(t, e) {
                    if (!e.vin) return "...";
                    if (this.getTxDirection(t, e)) return e.vin[0].addr;
                    let r = new this.wallet.BN(0),
                        n = "...";
                    return e.vout.forEach(e => {
                        e.scriptPubKey && e.scriptPubKey.addresses && e.scriptPubKey.addresses.length > 0 && e.scriptPubKey.addresses[0] !== t && r.lt(new this.wallet.BN(this.wallet.toMinimalUnit(e.value))) && (r = new this.wallet.BN(this.wallet.toMinimalUnit(e.value)), n = e.scriptPubKey.addresses[0])
                    }), n
                }
                calculateBalance(t = []) {
                    return t.reduce((t, {
                        value: e
                    }) => new this.wallet.BN(e).add(t), new this.wallet.BN("0"))
                }
                modifyTransactionResponse(t, e) {
                    return new c.default({
                        ticker: this.wallet.ticker,
                        name: this.wallet.name,
                        walletid: this.wallet.id,
                        txid: this.getTxHash(t),
                        fee: this.getTxFee(t),
                        feeTicker: this.wallet.parent,
                        direction: this.getTxDirection(e, t),
                        otherSideAddress: this.getTxOtherSideAddress(e, t),
                        amount: this.getTxValue(e, t),
                        datetime: this.getTxDateTime(t),
                        memo: this.getTxMemo(t),
                        confirmations: this.getTxConfirmations(t),
                        alias: this.wallet.alias,
                        locktime: t.locktime
                    })
                }
                getTxFee(t) {
                    return "SMART" === this.wallet.ticker ? t && t.fees || 0 : this.wallet.toCurrencyUnit(t && t.fees || 0)
                }
            }
            var d = InsightExplorer;
            e.default = d
        },
        2968: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(2360)),
                s = n(r(20)),
                i = r(29),
                o = r(26),
                l = r(52);
            const c = a.default.model.network.data.mainnet;
            class NemNodeExplorer extends s.default {
                constructor(...t) {
                    super(...t), this.endpoint = a.default.model.objects.create("endpoint")(this.config.baseUrl, a.default.model.nodes.defaultPort)
                }
                getAllowedTickers() {
                    return ["XEM"]
                }
                getWalletAddress() {
                    return this.wallet.address
                }
                updateEndpoint(t) {
                    this.config.baseUrl = t, this.endpoint = a.default.model.objects.create("endpoint")(t, a.default.model.nodes.defaultPort)
                }
                async getInfo(t) {
                    const e = await a.default.com.requests.account.data(this.endpoint, t);
                    return this.modifyInfoResponse(e)
                }
                modifyInfoResponse(t) {
                    return {
                        balance: t.account.balance,
                        transactions: this.wallet.transactions
                    }
                }
                async getTransaction(t) {
                    const e = await a.default.com.requests.transaction.byHash(this.endpoint, t);
                    return this.modifyTransactionResponse(e)
                }
                async getTransactions({
                    address: t,
                    offset: e = 0,
                    limit: r = this.defaultTxLimit
                }) {
                    this.latestBlock = await this.getLatestBlock();
                    const n = await a.default.com.requests.account.transactions.all(this.endpoint, t);
                    return this.modifyTransactionsResponse(n.data, t)
                }
                async getLatestBlock() {
                    return await a.default.com.requests.chain.height(this.endpoint)
                }
                getTxHash(t) {
                    return t.meta.hash.data
                }
                getTxDateTime(t) {
                    const e = Date.UTC(2015, 2, 29, 0, 6, 25, 0),
                        r = 1e3 * Number(t.transaction.timeStamp) + e;
                    return new Date(Number("" + r))
                }
                getTxMemo(t) {
                    return (0, l.hex2a)(t.transaction.message.payload)
                }
                getTxDirection(t, e) {
                    return t === e.transaction.recipient
                }
                getTxOtherSideAddress(t, e) {
                    return this.getTxDirection(t, e) ? a.default.model.address.toAddress(e.transaction.signer, c.id) : e.transaction.recipient
                }
                getTxValue(t, e) {
                    return Number(this.wallet.toCurrencyUnit(this.getTxDirection(t, e) ? e.transaction.amount : new this.wallet.BN(e.transaction.amount).add(new this.wallet.BN(e.transaction.fee))))
                }
                getTxConfirmations(t) {
                    return this.latestBlock ? this.latestBlock.height - t.meta.height : Number(1)
                }
                async sendTransaction(t) {
                    try {
                        const e = await a.default.com.requests.transaction.announce(this.endpoint, t);
                        return this.modifySendTransactionResponse(e)
                    } catch (t) {
                        throw new i.ExplorerRequestError({
                            type: o.SEND_TRANSACTION_TYPE,
                            error: t,
                            instance: this
                        })
                    }
                }
                modifySendTransactionResponse(t) {
                    if ("SUCCESS" !== t.message) throw new Error(t.message);
                    return {
                        txid: t.transactionHash.data
                    }
                }
                getTxFee(t) {
                    return this.wallet.toCurrencyUnit(t && t.transaction && t.transaction.fee || 0)
                }
            }
            var d = NemNodeExplorer;
            e.default = d
        },
        3148: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(20));
            const s = {
                NEO: "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b",
                GAS: "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7"
            };
            class NeoscanExplorer extends a.default {
                getAllowedTickers() {
                    return ["NEO", "GAS"]
                }
                async getInfo(t) {
                    const [e, {
                        unclaimed: r
                    }] = await Promise.all([this.request("get_balance/" + t), this.request("get_unclaimed/" + t)]), n = this.modifyInfoResponse(e), a = this.wallet.ticker.substr(0, 3).toLowerCase(), s = this.wallet.toMinimalUnit(n[a]);
                    return {
                        balance: s,
                        balances: {
                            available: this.wallet.toCurrencyUnit(s),
                            rewards: r,
                            ...n
                        }
                    }
                }
                getTransactionUrl(t) {
                    return "get_transaction/" + t
                }
                getTransactionsUrl(t) {
                    return `get_last_transactions_by_address/${t}/0`
                }
                modifyInfoResponse(t) {
                    const e = {};
                    return t.balance.forEach(({
                        asset_symbol: t,
                        amount: r
                    }) => {
                        ["NEO", "GAS"].includes(t) && (e[t.toLowerCase()] = r)
                    }), e
                }
                modifyTransactionsResponse(t, e) {
                    return super.modifyTransactionsResponse(this.filterTransactionList(t, e), e)
                }
                filterTransactionList(t, e) {
                    const r = this.wallet.ticker.substr(0, 3);
                    return t.filter(t => {
                        let n = !1;
                        return this.getTxDirection(e, t) ? t.vouts.forEach(t => {
                            t.asset === s[r] && (n = !0)
                        }) : t.vin.forEach(t => {
                            t.asset === s[r] && (n = !0)
                        }), n
                    })
                }
                getTxHash(t) {
                    return t.txid
                }
                getTxDirection(t, e) {
                    return !(e.vouts && e.vouts.find(({
                        address_hash: e
                    }) => e !== t))
                }
                getTxOtherSideAddress(t, e) {
                    if (!e.vin) return "...";
                    if (this.getTxDirection(t, e)) return e.vin.length > 0 ? e.vin[0].address_hash : "-";
                    let r = new this.wallet.BN(0),
                        n = "...";
                    const a = this.wallet.ticker.substr(0, 3);
                    return e.vouts.forEach(e => {
                        e.address_hash !== t && e.asset === s[a] && r.lt(new this.wallet.BN(this.wallet.toMinimalUnit(e.value))) && (r = new this.wallet.BN(this.wallet.toMinimalUnit(e.value)), n = e.address_hash)
                    }), n
                }
                getTxValue(t, e) {
                    let r = new this.wallet.BN(0),
                        n = new this.wallet.BN(0);
                    const a = this.wallet.ticker.substr(0, 3);
                    e.vin.forEach(e => {
                        e.address_hash === t && e.asset === s[a] && (r = r.add(new this.wallet.BN(this.wallet.toMinimalUnit(e.value))))
                    }), e.vouts.forEach(e => {
                        e.address_hash === t && e.asset === s[a] && (n = n.add(new this.wallet.BN(this.wallet.toMinimalUnit(e.value))))
                    });
                    const i = r.sub(n).abs();
                    return Number(this.wallet.toCurrencyUnit(i))
                }
                getTxDateTime(t) {
                    return new Date(Number(t.time + "000"))
                }
                getTxConfirmations(t) {
                    return 10
                }
                async sendTransaction(t) {
                    return this.wallet.sendTransaction(t)
                }
                getTxFee(t) {
                    return t && t.net_fee || 0
                }
                getTxFeeTicker() {
                    return "GAS"
                }
            }
            var i = NeoscanExplorer;
            e.default = i
        },
        3149: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(20));
            class NeoNodeExplorer extends a.default {
                constructor(...t) {
                    super(...t);
                    const {
                        wallet: e,
                        config: r
                    } = t[0];
                    this.nodeClientPromise = e.coreLib.api.NetworkFacade.fromConfig({
                        node: r.baseUrl
                    })
                }
                getAllowedTickers() {
                    return ["NEO", "GAS"]
                }
                async sendTransaction({
                    tx: t,
                    signingConfig: e
                }) {
                    return (await this.getClient()).transferToken([t], e)
                }
                async getFeeInformation(t) {
                    const e = await this.getClient();
                    return t.getFeeInformation(e)
                }
                async sendRawTransaction(t) {
                    return (await this.getClient()).sendRawTransaction(t)
                }
                async getClient() {
                    return (await this.nodeClientPromise).client
                }
            }
            var s = NeoNodeExplorer;
            e.default = s
        },
        3252: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(2361)),
                s = n(r(20)),
                i = r(29),
                o = r(26);
            class IconNodeExplorer extends s.default {
                constructor(...t) {
                    super(...t);
                    const e = new a.default.HttpProvider(`${this.config.baseUrl}${this.getApiPrefix()}`),
                        r = new a.default(e);
                    this.service = r, this.sdk = a.default
                }
                getAllowedTickers() {
                    return ["ICX"]
                }
                getApiPrefix() {
                    return "api/v3/"
                }
                async getInfo(t) {
                    return {
                        balance: (await this.service.getBalance(t).execute()).toString()
                    }
                }
                async sendTransaction(t) {
                    try {
                        return {
                            txid: await this.service.sendTransaction(t).execute()
                        }
                    } catch (t) {
                        throw new i.ExplorerRequestError({
                            type: o.SEND_TRANSACTION_TYPE,
                            error: t,
                            instance: this
                        })
                    }
                }
                async call(t) {
                    try {
                        return this.service.call(t).execute()
                    } catch (t) {
                        throw new i.ExplorerRequestError({
                            type: o.SEND_TRANSACTION_TYPE,
                            error: t,
                            instance: this
                        })
                    }
                }
                getTransactionByHash(t) {
                    try {
                        return this.service.getTransaction(t).execute()
                    } catch (t) {
                        throw new i.ExplorerRequestError({
                            type: o.SEND_TRANSACTION_TYPE,
                            error: t,
                            instance: this
                        })
                    }
                }
                getTransactionResult(t) {
                    try {
                        return this.service.getTransactionResult(t).execute()
                    } catch (t) {
                        throw new i.ExplorerRequestError({
                            type: o.SEND_TRANSACTION_TYPE,
                            error: t,
                            instance: this
                        })
                    }
                }
            }
            var l = IconNodeExplorer;
            e.default = l
        },
        3253: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = r(2362),
                s = n(r(20));
            class HashnodeExplorer extends s.default {
                constructor(...t) {
                    super(...t), this.node = {
                        [this.config.baseUrl]: this.config.nodeAccount
                    }
                }
                getAllowedTickers() {
                    return ["HBAR"]
                }
                async getInfo(t) {
                    if (!t) throw new Error("[HBAR] HashnodeExplorer: address is not defined");
                    return {
                        balance: (await this.wallet.getClient().getAccountBalance(t)).asTinybar().toString()
                    }
                }
                async sendTransaction({
                    rawtx: t,
                    account: e,
                    privateKey: r
                }) {
                    if (!t) throw new Error(`HBAR: sendTransaction error: incorrect tx: got "${t}" of type ${typeof t}`);
                    const n = a.Transaction.fromBytes(new Uint8Array(Buffer.from(t, "hex"))),
                        s = await n.execute(this.wallet.getClient()),
                        i = await s.getReceipt(this.wallet.getClient());
                    if (i.status && 22 !== i.status.code) throw new Error(i.status);
                    const o = {
                        txid: s.toString()
                    };
                    try {
                        o.accountId = i.accountId
                    } catch (t) {
                        console.warn("[HashnodeExplorer] sendTransaction:", t)
                    }
                    return o
                }
            }
            var i = HashnodeExplorer;
            e.default = i
        },
        3321: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(20));
            class MintscanExplorer extends a.default {
                getAllowedTickers() {
                    return ["ATOM"]
                }
                getApiPrefix() {
                    return "v1"
                }
                getInfoUrl(t) {
                    return `${this.getApiPrefix()}/account/${t}`
                }
                modifyInfoResponse(t) {
                    const {
                        balance: e,
                        rewards: r,
                        delegations: n,
                        unbonding_delegations: a
                    } = t;
                    let s = "0";
                    const i = {
                            validators: {},
                            total: new this.wallet.BN("0")
                        },
                        o = {
                            validators: {},
                            total: new this.wallet.BN("0")
                        };
                    let l = new this.wallet.BN(0);
                    if (e && e.length > 0 && (s = new this.wallet.BN(e[0].amount).toString()), r && r.length > 0 && r.forEach(({
                            amount: t
                        }) => {
                            l = l.add(new this.wallet.BN(t.split(".")[0]))
                        }), n && n.length > 0) {
                        let t = new this.wallet.BN("0");
                        n.forEach(({
                            moniker: e,
                            shares: r,
                            validator_address: n
                        }) => {
                            i.validators[e] = {
                                shares: this.wallet.toCurrencyUnit(r.split(".")[0]),
                                address: n
                            }, t = t.add(new this.wallet.BN(r.split(".")[0]))
                        }), i.total = this.wallet.toCurrencyUnit(t.toString())
                    }
                    if (a && a.length > 0) {
                        let t = new this.wallet.BN("0");
                        a.forEach(({
                            moniker: e,
                            entries: r
                        }) => {
                            o.validators[e] = r.map(t => new this.wallet.BN(t.balance.split(".")[0])).reduce((t, e) => t.add(new this.wallet.BN(e)), new this.wallet.BN("0")), t = t.add(o.validators[e])
                        }), o.total = this.wallet.toCurrencyUnit(t.toString().split(".")[0])
                    }
                    return {
                        balance: s,
                        balances: {
                            available: this.wallet.toCurrencyUnit(s),
                            staking: i,
                            unbonding: o,
                            rewards: this.wallet.toCurrencyUnit(l)
                        },
                        transactions: this.wallet.transactions
                    }
                }
            }
            var s = MintscanExplorer;
            e.default = s
        },
        3323: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(1461)),
                s = n(r(20)),
                i = r(29),
                o = r(26),
                l = n(r(74)),
                c = n(r(230));
            const d = {
                WebSocket: global.WebSocket,
                connectionTimeout: 2e3,
                maxReconnectionDelay: 2e4,
                minReconnectionDelay: 1e4,
                maxRetries: 10
            };
            class NanonodeExplorer extends s.default {
                getAllowedTickers() {
                    return ["NANO"]
                }
                getBaseUrl() {
                    return "" + this.config.baseUrl
                }
                getSendTransactionUrl() {
                    return this.getBaseUrl()
                }
                getInfoUrl(t) {
                    return this.getBaseUrl()
                }
                getTransactionUrl(t) {
                    return this.requestedTxId = t, ""
                }
                getActionMethod() {
                    return "POST"
                }
                getTransactionsMethod() {
                    return this.getActionMethod()
                }
                getInfoMethod() {
                    return this.getActionMethod()
                }
                getTransactionMethod() {
                    return this.getActionMethod()
                }
                getSendTransactionParams(t) {
                    return {
                        action: "process",
                        json_block: !0,
                        ...t
                    }
                }
                workGenerateParams(t) {
                    return {
                        action: "work_generate",
                        hash: t
                    }
                }
                pendingTransactionsParams(t) {
                    return {
                        action: "pending",
                        account: t,
                        count: "100"
                    }
                }
                blockInfoParams(t) {
                    return {
                        action: "block_info",
                        hash: t,
                        json_block: !0,
                        source: !0
                    }
                }
                getInfoParams(t) {
                    return {
                        action: "account_info",
                        account: t,
                        pending: !0,
                        representative: !0
                    }
                }
                getTransactionsParams(t, e = 0, r = this.defaultTxLimit) {
                    return {
                        action: "account_history",
                        account: t,
                        count: "100"
                    }
                }
                modifySendTransactionResponse(t) {
                    if (void 0 !== t.error) throw new i.ExplorerRequestError({
                        type: o.SEND_TRANSACTION_TYPE,
                        error: new Error(t.error),
                        instance: this
                    });
                    return this.eventEmmiter.emit("socket::newtx::outgoing", {
                        id: this.wallet.id,
                        ticker: this.wallet.ticker
                    }), {
                        txid: t.hash
                    }
                }
                async workGenerate(t) {
                    return (await this.request(this.getBaseUrl(), this.getActionMethod(), this.workGenerateParams(t), "Work generate", this.getSendOptions())).work
                }
                async getPendingTransactions(t) {
                    return await this.request(this.getBaseUrl(), this.getActionMethod(), this.pendingTransactionsParams(t))
                }
                async getBlockInfo(t) {
                    const e = await this.request(this.getBaseUrl(), this.getActionMethod(), this.blockInfoParams(t), "Block info", this.getSendOptions());
                    return e.requestedTxId = t, e
                }
                modifyInfoResponse(t) {
                    if (t.error) throw new Error(t.error);
                    return t
                }
                modifyTransactionResponse(t, e) {
                    return t.hash = t.requestedTxId, super.modifyTransactionResponse(t, e)
                }
                async getTransactions({
                    address: t,
                    offset: e = 0,
                    limit: r = this.defaultTxLimit,
                    pending: n
                }) {
                    const a = await this.request(this.getBaseUrl(), this.getTransactionsMethod(), this.getTransactionsParams(t, e, r), o.GET_TRANSACTIONS_TYPE);
                    if (a.error) throw new Error(a.error);
                    return this.modifyTransactionsResponse(a.history, this.wallet.address, this.wallet.ticker, n)
                }
                modifyTransactionsResponse(t, e, r = this.wallet.ticker, n) {
                    return Array.isArray(t) ? t.map(t => new l.default({
                        ticker: r,
                        name: this.wallet.name,
                        walletid: this.wallet.id,
                        txid: this.getTxHash(t),
                        fee: this.getTxFee(t),
                        feeTicker: this.wallet.parent,
                        direction: this.getTxDirection(e, t),
                        otherSideAddress: this.getTxOtherSideAddress(e, t),
                        amount: this.getTxValue(e, t),
                        datetime: this.getTxDateTime(t),
                        memo: this.getTxMemo(t),
                        confirmations: this.getTxConfirmations(t, n),
                        alias: this.wallet.alias
                    })) : []
                }
                getTxHash(t) {
                    return t.hash
                }
                getTxDirection(t, e) {
                    return "receive" === e.type
                }
                getTxOtherSideAddress(t, e) {
                    return e.account
                }
                getTxValue(t, e) {
                    return Number(this.wallet.toCurrencyUnit(e.amount))
                }
                getTxDateTime(t) {
                    return new Date(Number(t.local_timestamp + "000"))
                }
                getTxConfirmations(t, e) {
                    return e && e.includes(t.hash) ? 0 : 1
                }
                async getTransaction(t, e) {
                    const r = await this.getBlockInfo(e);
                    return this.modifyTransactionResponse(r, t)
                }
                setSocketClient(t) {
                    this.socket[this.wallet.ticker] = new a.default(t, [], d)
                }
                async connectSocket(t) {
                    const {
                        websocketUrl: e
                    } = this.config, {
                        ticker: r
                    } = this.wallet;
                    if (!e) throw new i.ExplorerRequestError({
                        type: o.SEND_TRANSACTION_TYPE,
                        error: new Error(`[${r}] connectSocket error: no websocket url in coin config`),
                        instance: this
                    });
                    this.setSocketClient(e);
                    const n = this.socket[r];
                    return n.addEventListener("message", async e => {
                        const r = JSON.parse(e.data).data;
                        "send" === r.subtype && this.processSendEvent(r, t), "receive" === r.subtype && this.processReceiveEvent(r, t)
                    }), new Promise((r, a) => {
                        n.addEventListener("open", () => (n.removeEventListener("error"), r(n.send(JSON.stringify({
                            event: "subscribe",
                            data: [t]
                        }))))), n.addEventListener("error", t => (console.error("[NANO][socket] connection failed", e, t), a(t)))
                    })
                }
                disconnectSocket() {
                    this.socket[this.wallet.ticker].close()
                }
                async processSendEvent(t, e) {
                    if (t.confirmed) return;
                    const r = t.account !== e;
                    if (this.eventEmmiter.emit(`${this.wallet.parent}-${this.wallet.id}::mine-txs`), r) return;
                    const n = new l.default({
                        ticker: this.wallet.ticker,
                        name: this.wallet.name,
                        walletid: this.wallet.id,
                        txid: r ? "pending" : t.hash,
                        direction: r,
                        otherSideAddress: r ? t.account : t.block.link_as_account,
                        amount: this.wallet.toCurrencyUnit(t.amount),
                        datetime: new Date,
                        alias: this.wallet.alias
                    });
                    await c.default.updatePendingOrInsert(n), this.eventEmmiter.emit(`${this.wallet.parent}-${this.wallet.id}::new-socket-tx`, {
                        unconfirmedTx: n
                    })
                }
                async processReceiveEvent(t) {
                    const e = await this.getBlockInfo(t.block.link),
                        r = new l.default({
                            ticker: this.wallet.ticker,
                            name: this.wallet.name,
                            txid: t.hash,
                            walletid: this.wallet.id,
                            direction: !0,
                            otherSideAddress: e.block_account,
                            amount: this.wallet.toCurrencyUnit(t.amount),
                            datetime: new Date,
                            alias: this.wallet.alias
                        });
                    await c.default.updatePendingOrInsert(r), this.eventEmmiter.emit(`${this.wallet.parent}-${this.wallet.id}::new-socket-tx`, {
                        unconfirmedTx: r
                    })
                }
                async getInfo(t) {
                    const e = await super.getInfo(t);
                    return e.pending > 0 && (e.pending = await this.getPendingTransactions(t)), e
                }
                getTxFee() {
                    return 0
                }
            }
            var u = NanonodeExplorer;
            e.default = u
        },
        3618: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(57)),
                s = r(29),
                i = r(26),
                o = n(r(20)),
                l = r(3619),
                c = r(95),
                d = r(346),
                u = r(1075),
                h = r(377);
            const f = [
                [u.erc721StandardTest, u.ERC721_TOKEN_STANDARD],
                [u.erc1155StandardTest, u.ERC1155_TOKEN_STANDARD]
            ];
            class MoralisExplorer extends o.default {
                constructor({
                    wallet: t,
                    config: e
                }) {
                    super({
                        wallet: t,
                        config: e
                    }), this.chain = e.chain || "eth"
                }
                getAllowedTickers() {
                    return ["ETH", "BSC", "MATIC", "AVAX", "FTM"]
                }
                async getInfo(t) {
                    try {
                        const e = await this.request(this.getInfoUrl(t), this.getInfoMethod(), this.getInfoParams(t, this.chain));
                        return this.modifyInfoResponse(e)
                    } catch (t) {
                        throw new s.ExternalError({
                            type: i.EXTERNAL_ERROR,
                            error: t,
                            instance: this
                        })
                    }
                }
                getInfoUrl(t) {
                    return `/${t}/nft`
                }
                getIsApiKeyRequired(t) {
                    return "https://deep-index.moralis.io/api/v2/" === (0, c.getStringWithEnsuredEndChar)(t, "/")
                }
                getInitParams() {
                    const t = super.getInitParams(),
                        e = {
                            accept: "application/json"
                        };
                    return this.getIsApiKeyRequired(null == t ? void 0 : t.baseURL) && (e["X-API-Key"] = "sA9pBlEiuyZFgcTuS0HqhMvR7r37Fsvkb7xAgJLXNz6KpDEE5yDCd9vEfZp3VPwb"), {
                        ...t,
                        headers: e
                    }
                }
                getInfoParams(t, e) {
                    return {
                        chain: e,
                        format: "decimal"
                    }
                }
                async modifyInfoResponse(t) {
                    const {
                        result: e
                    } = t, r = [], n = e.map((t, e) => {
                        const {
                            token_address: n,
                            token_id: o,
                            token_uri: c,
                            contract_type: d,
                            metadata: u
                        } = t;
                        if (!u) {
                            const t = (0, l.getTransformedTokenUri)({
                                tokenId: o,
                                tokenUri: c
                            });
                            return r.push(Promise.all([e, a.default.get(t).catch(t => {
                                throw new Error(JSON.stringify({
                                    index: e,
                                    error: t
                                }))
                            })])), {
                                contractAddress: n,
                                tokenId: o,
                                tokenStandard: d
                            }
                        }
                        try {
                            const {
                                name: t,
                                description: e,
                                image: r
                            } = JSON.parse(u);
                            return {
                                contractAddress: n,
                                tokenId: o,
                                tokenStandard: d,
                                name: t,
                                description: e,
                                imageUrl: r
                            }
                        } catch (t) {
                            throw console.warn(t), new s.InternalError({
                                type: i.INTERNAL_ERROR,
                                error: t,
                                instance: this
                            })
                        }
                    });
                    try {
                        (await Promise.allSettled(r)).forEach(t => {
                            if ("fulfilled" === t.status) {
                                const {
                                    value: [e, {
                                        data: r
                                    }]
                                } = t, {
                                    name: a,
                                    description: s,
                                    image: i
                                } = r;
                                n[e] = {
                                    ...n[e],
                                    name: a,
                                    description: s,
                                    imageUrl: i
                                }
                            } else {
                                const {
                                    reason: {
                                        message: e
                                    }
                                } = t;
                                try {
                                    const {
                                        index: t,
                                        message: r
                                    } = JSON.parse(e);
                                    console.warn("Failed to get NFT metadata for tokenUri=" + n[t], r)
                                } catch (t) {
                                    console.warn(t)
                                }
                            }
                        })
                    } catch (t) {
                        throw console.warn(t), new s.ExternalError({
                            type: i.EXTERNAL_ERROR,
                            error: t,
                            instance: this
                        })
                    }
                    return n
                }
                fixTokenStandard(t) {
                    for (const [e, r] of f)
                        if (e.test(t)) return r;
                    return u.UNRECOGNIZED_TOKEN_STANDARD
                }
                async fetchNftList(t) {
                    const {
                        address: e
                    } = t;
                    return (await this.getInfo(e)).map(({
                        contractAddress: e,
                        tokenId: r,
                        tokenStandard: n,
                        name: a,
                        description: s,
                        imageUrl: i
                    }) => new d.ETHNftToken(e, r, t.ticker, this.fixTokenStandard(n), a, s, i))
                }
                async getRawTokenTransactions({
                    address: t,
                    limit: e = this.defaultTxLimit,
                    cursor: r = null
                }) {
                    try {
                        const n = await this.request(this.getTokenTransactionsUrl(t), "get", this.getTokenTransactionsParams(e, r), i.GET_TRANSACTIONS_TYPE, this.getTransactionsOptions());
                        return this.modifyRawTokenTransactionsResponse(n, t)
                    } catch (t) {
                        return console.warn(t), []
                    }
                }
                getTokenTransactionsUrl(t) {
                    return `/${t}/erc20/transfers`
                }
                getTokenTransactionsParams(t, e) {
                    const r = t > 100 ? 100 : t;
                    return {
                        chain: this.chain,
                        disable_total: !1,
                        limit: r,
                        cursor: e
                    }
                }
                modifyRawTokenTransactionsResponse(t, e) {
                    const {
                        total: r,
                        page: n,
                        page_size: a,
                        cursor: s,
                        result: i
                    } = null != t ? t : {
                        result: []
                    };
                    return {
                        total: r,
                        page: n,
                        pageSize: a,
                        cursor: s,
                        rawTokenTransactions: i.reduce((t, r, n) => {
                            try {
                                const n = this.getTokenTxDirection(e, r);
                                return t.push({
                                    contract: r.address,
                                    alias: this.wallet.alias,
                                    explorer: this.constructor.name,
                                    txid: r.transaction_hash,
                                    direction: n,
                                    otherSideAddress: n ? r.from_address : r.to_address,
                                    value: r.value,
                                    datetime: new Date(r.block_timestamp),
                                    memo: "",
                                    confirmations: 1
                                }), t
                            } catch (e) {
                                return console.warn("[FTM] tx parse failed"), console.error(e), t
                            }
                        }, [])
                    }
                }
                getTokenTxDirection(t, e) {
                    return e.to_address.toLowerCase() === t.toLowerCase()
                }
                async getUserTokenList(t) {
                    const e = await this.request(this.getUserTokenListUrl(t), "get", this.getInfoParams(t, this.chain), "", this.getTransactionsOptions());
                    return this.modifyUserTokenList(e)
                }
                modifyUserTokenList(t = []) {
                    return t.map(t => ({
                        contract: t.token_address,
                        contractAddress: t.token_address,
                        decimals: 0,
                        ...t
                    }))
                }
                getUserTokenListUrl(t) {
                    return `/${t}/erc20`
                }
                async getNftTransactions({
                    address: t,
                    limit: e = this.defaultTxLimit,
                    cursor: r = null
                }) {
                    try {
                        const n = await this.request(this.getNftTransactionsUrl(t), "get", this.getNftTransactionsParams(e, r), i.GET_TRANSACTIONS_TYPE, this.getTransactionsOptions());
                        return this.modifyNftTransactionsResponse(n, t)
                    } catch (t) {
                        return console.warn(t), []
                    }
                }
                getNftTransactionsUrl(t) {
                    return `/${t}/nft/transfers`
                }
                getNftTransactionsParams(t, e) {
                    const r = t > 100 ? 100 : t;
                    return {
                        chain: this.chain,
                        disable_total: !1,
                        limit: r,
                        format: "decimal",
                        direction: "both",
                        cursor: e
                    }
                }
                modifyNftTransactionsResponse(t, e) {
                    const {
                        total: r,
                        page: n,
                        page_size: a,
                        cursor: s,
                        result: i
                    } = null != t ? t : {
                        result: []
                    };
                    return {
                        total: r,
                        page: n,
                        pageSize: a,
                        cursor: s,
                        nftTransactions: i.reduce((t, r, n) => {
                            try {
                                const n = this.getTokenTxDirection(e, r);
                                return t.push({
                                    ticker: this.wallet.ticker,
                                    name: this.wallet.name,
                                    alias: this.wallet.alias,
                                    walletid: this.wallet.id,
                                    explorer: this.constructor.name,
                                    contract: r.token_address,
                                    contractType: r.contract_type,
                                    tokenId: r.token_id,
                                    txid: r.transaction_hash,
                                    direction: n,
                                    otherSideAddress: n ? r.from_address : r.to_address,
                                    datetime: new Date(r.block_timestamp),
                                    memo: "",
                                    confirmations: 1,
                                    txType: h.TxTypes.TRANSFERNFT,
                                    isNft: !0,
                                    amount: "NFT"
                                }), t
                            } catch (e) {
                                return console.warn("[FTM] tx parse failed"), console.error(e), t
                            }
                        }, [])
                    }
                }
            }
            var g = MoralisExplorer;
            e.default = g
        },
        3622: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(35)),
                s = n(r(20)),
                i = n(r(74));
            class GuardaMoneroProxy extends s.default {
                getAllowedTickers() {
                    return ["XMR"]
                }
                async getAccount(t) {
                    return this.request("account/" + t, "GET", void 0, void 0, {
                        headers: {
                            "api-key": this.config.apiKey
                        }
                    })
                }
                async postAccount(t) {
                    return this.request("account", "POST", {
                        address: t,
                        API_key: this.config.apiKey
                    })
                }
                async balance(t, e) {
                    if (!t) throw new Error("XMR: GuardaMoneroProxy: no address");
                    if (!e) throw new Error("XMR: GuardaMoneroProxy: no viewKey");
                    return this.request("balance", "POST", {
                        address: t,
                        viewKey: e,
                        API_key: this.config.apiKey
                    })
                }
                async random(t) {
                    return this.request("random", "POST", {
                        ...t,
                        API_key: this.config.apiKey
                    })
                }
                async resync(t, e) {
                    return this.request("resync", "POST", {
                        address: t,
                        viewKey: e,
                        API_key: this.config.apiKey
                    })
                }
                async submit({
                    tx: t,
                    address: e,
                    viewKey: r
                }) {
                    return this.request("submit", "POST", {
                        tx: t,
                        address: e,
                        viewKey: r,
                        API_key: this.config.apiKey
                    })
                }
                async txData(t) {
                    return this.request("tx/data/" + t, "GET", void 0, void 0, {
                        headers: {
                            API_key: this.config.apiKey
                        }
                    })
                }
                async unspent({
                    address: t,
                    secViewKey: e,
                    mixin: r,
                    dustThreshold: n,
                    useDust: a = !1,
                    amount: s = "0"
                }) {
                    return this.request("unspend", "POST", {
                        address: t,
                        viewKey: e,
                        amount: s,
                        useDust: a,
                        mixin: r,
                        dustThreshold: String(n),
                        API_key: this.config.apiKey
                    })
                }
                async txs(t, e) {
                    if (!t) throw new Error("XMR: GuardaMoneroProxy: no address");
                    if (!e) throw new Error("XMR: GuardaMoneroProxy: no viewKey");
                    return this.request("txs", "POST", {
                        address: t,
                        viewKey: e,
                        API_key: this.config.apiKey
                    })
                }
                getTxHash(t) {
                    return t.hash
                }
                getTxDirection(t) {
                    return void 0 === t.spent_outputs
                }
                getTxOtherSideAddress(t) {
                    return t.tx_pub_key
                }
                getTxValue(t) {
                    return Number(this.wallet.toCurrencyUnit(this.getTxDirection(t) ? t.total_received : new a.default(t.total_sent).sub(new a.default(t.total_received))))
                }
                getTxDateTime(t) {
                    return new Date(Number("" + t.timestamp))
                }
                getTxConfirmations(t, e) {
                    return e - t.height
                }
                async getTransactions({
                    address: t,
                    viewKey: e,
                    lastHeight: r
                }) {
                    const n = await this.txs(t, e);
                    return this.modifyTransactionsResponse(t, n, r)
                }
                modifyTransactionsResponse(t, e, r) {
                    if (!e || !Array.isArray(e.transactions)) throw new Error("Wrong response");
                    return e.transactions.filter(this.wallet.filterTransactions).map(t => new i.default({
                        walletid: this.wallet.id,
                        ticker: this.wallet.ticker,
                        name: this.wallet.name,
                        alias: this.wallet.alias,
                        explorer: this.constructor.name,
                        txid: this.getTxHash(t),
                        direction: this.getTxDirection(t),
                        otherSideAddress: this.getTxOtherSideAddress(t),
                        amount: this.getTxValue(t),
                        datetime: this.getTxDateTime(t),
                        memo: this.getTxMemo(t),
                        confirmations: this.getTxConfirmations(t, r)
                    }))
                }
                async getInfo({
                    address: t,
                    viewKey: e
                }) {
                    return this.balance(t, e)
                }
                async request(...t) {
                    const e = "XMR:GuardaMoneroProxy:" + t[0];
                    return new Promise((r, n) => {
                        const a = this.eventEmmiter._events[e];
                        this.eventEmmiter.once(e, t => {
                            t instanceof Error ? n(t) : r(t)
                        }), a || super.request(...t).then(t => {
                            this.eventEmmiter.emit(e, t)
                        }).catch(t => {
                            this.eventEmmiter.emit(e, t)
                        })
                    })
                }
            }
            var o = GuardaMoneroProxy;
            e.default = o
        },
        3636: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(20));
            class GastrackerExplorer extends a.default {
                getAllowedTickers() {
                    return ["ETC"]
                }
                async getTransactions(t) {
                    const e = `${this.config.baseUrl}${"v1/addr/{address}/transactions".replace("{address}",t)}`,
                        {
                            items: r
                        } = await this.request(e).catch(t => {
                            throw t
                        });
                    return this.modifyTransactionsResponse(r, t)
                }
                async getInfo(t) {
                    return {
                        balance: await this.wallet.coreLibrary.eth.getBalance(t),
                        transactions: []
                    }
                }
                getTxHash(t) {
                    return t.hash
                }
                getTxDirection(t, e) {
                    return e.to === t
                }
                getTxOtherSideAddress(t, e) {
                    return this.getTxDirection(t, e) ? e.from : e.to
                }
                getTxValue(t, e) {
                    return e.value.ether
                }
                getTxDateTime(t) {
                    return new Date(t.timestamp)
                }
                getTxConfirmations(t) {
                    return t.confirmations
                }
            }
            var s = GastrackerExplorer;
            e.default = s
        },
        3660: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(20)),
                s = r(29),
                i = r(26);
            class NanocrawlerExplorer extends a.default {
                getAllowedTickers() {
                    return ["NANO"]
                }
                getApiPrefix() {
                    return "v2"
                }
                getInfoUrl(t) {
                    return `${this.getApiPrefix()}/accounts/${t}`
                }
                modifyInfoResponse(t) {
                    return {
                        balance: t.account.balance,
                        account_state: t.account
                    }
                }
                getTransactionUrl(t) {
                    return this.requestedTxId = t, `${this.getApiPrefix()}/blocks/${t}`
                }
                modifyTransactionResponse(t) {
                    return t.hash = this.requestedTxId, super.modifyTransactionResponse(t)
                }
                getTransactionsUrl(t) {
                    return `${this.getApiPrefix()}/accounts/${t}/history`
                }
                getPendingTransactionsUrl(t) {
                    return `${this.getApiPrefix()}/accounts/${t}/pending`
                }
                getTransactionsParams(t, e = 0, r = this.defaultTxLimit) {
                    return {}
                }
                async getTransactions(t, e = 0, r = this.defaultTxLimit) {
                    const n = await this.request(this.getTransactionsUrl(t), this.getTransactionsMethod(), this.getTransactionsParams(e, r), i.GET_TRANSACTIONS_TYPE);
                    return this.modifyTransactionsResponse(n, t)
                }
                getTxHash(t) {
                    return t.hash
                }
                getTxDirection(t, e) {
                    return "receive" === e.subtype
                }
                getTxOtherSideAddress(t, e) {
                    return e.account
                }
                getTxValue(t, e) {
                    return Number(this.wallet.toCurrencyUnit(e.amount))
                }
                getTxDateTime(t) {
                    return new Date(Number("" + t.timestamp))
                }
                getSendTransactionUrl() {
                    return this.getApiPrefix() + "/transactions"
                }
                getTxConfirmations(t) {
                    return Number("state" === t.type)
                }
                getSendTransactionParams(t) {
                    return {
                        transactions: [t]
                    }
                }
                modifySendTransactionResponse(t) {
                    if (t.data.invalid.length > 0) throw new s.ExplorerRequestError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error(t.data.invalid[0]),
                        instance: this
                    });
                    if (0 === t.data.broadcast.length) throw new s.ExplorerRequestError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error("Not found broadcast transaction"),
                        instance: this
                    });
                    return {
                        txid: t.data.broadcast[0]
                    }
                }
            }
            var o = NanocrawlerExplorer;
            e.default = o
        },
        3690: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(20)),
                s = n(r(55));
            class NearHelperExplorer extends a.default {
                getAllowedTickers() {
                    return ["NEAR"]
                }
                async getTransactions(...t) {
                    try {
                        return await super.getTransactions(...t)
                    } catch (t) {
                        return s.default.error({
                            instance: this,
                            error: this.wallet.ticker + ": failed to load user transactions"
                        }), []
                    }
                }
                getTransactionsUrl(t) {
                    return `account/${t}/activity`
                }
                getTransactionsMethod() {
                    return "get"
                }
                getTransactionsParams(t, e = 0, r = this.defaultTxLimit, n) {
                    return {
                        limit: r
                    }
                }
                modifyTransactionsResponse(t, e) {
                    return super.modifyTransactionsResponse(t, e).filter(Boolean)
                }
                getTransactionsModifiedResponse(t, e) {
                    return "TRANSFER" === t.action_kind ? super.getTransactionsModifiedResponse(t, e) : null
                }
                getTxDirection(t, e) {
                    return e.receiver_id === t
                }
                getTxDateTime(t) {
                    return new Date(new this.wallet.BN(t.block_timestamp).div(new this.wallet.BN(1e6)).toNumber())
                }
                getTxOtherSideAddress(t, e) {
                    return e.receiver_id === t ? e.signer_id : e.receiver_id
                }
                getTxValue(t, e) {
                    return this.wallet.toCurrencyUnit(e.args.deposit)
                }
                getTxHash(t) {
                    return t.hash
                }
                getTxFee() {
                    return null
                }
                getTxConfirmations() {
                    return 2
                }
            }
            var i = NearHelperExplorer;
            e.default = i
        },
        3691: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(151)),
                s = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var r = f(e);
                    if (r && r.has(t)) return r.get(t);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in t)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
                            var i = a ? Object.getOwnPropertyDescriptor(t, s) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, s, i) : n[s] = t[s]
                        } n.default = t, r && r.set(t, n);
                    return n
                }(r(2366)),
                i = n(r(53)),
                o = n(r(35)),
                l = n(r(20)),
                c = n(r(55)),
                d = r(29),
                u = r(38),
                h = n(r(464));

            function f(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    r = new WeakMap;
                return (f = function(t) {
                    return t ? r : e
                })(t)
            }
            const g = new o.default("100");
            class NearRPCExplorer extends l.default {
                constructor(...t) {
                    super(...t), (0, a.default)(this, "getNodeConfig", i.default.throttle(this._getNodeConfig, 800)), (0, a.default)(this, "getGasPrice", i.default.throttle(this._getGasPrice, 800)), this.provider = new s.providers.JsonRpcProvider(this.config.baseUrl)
                }
                getAllowedTickers() {
                    return ["NEAR"]
                }
                async _getNodeConfig() {
                    try {
                        return this.provider.experimental_protocolConfig({
                            finality: "final"
                        })
                    } catch (t) {
                        return c.default.error({
                            instance: this,
                            error: t
                        }), null
                    }
                }
                async getAccessKey(t, e) {
                    return this.provider.query(`access_key/${t}/${e}`, "")
                }
                async sendTransaction(t) {
                    const {
                        transaction: e
                    } = await this.provider.sendJsonRpc("broadcast_tx_commit", [t]);
                    return {
                        txid: null == e ? void 0 : e.hash
                    }
                }
                async _getGasPrice() {
                    try {
                        const {
                            gas_price: t
                        } = await this.provider.gasPrice(null);
                        return t
                    } catch (t) {
                        return c.default.error({
                            instance: this,
                            error: t
                        }), null
                    }
                }
                async getInfo(t) {
                    try {
                        const {
                            runtime_config: {
                                storage_amount_per_byte: e
                            }
                        } = await this.getNodeConfig(), r = await this.provider.query({
                            request_type: "view_account",
                            finality: "final",
                            account_id: t
                        }), n = new this.wallet.BN(r.storage_usage).mul(new this.wallet.BN(e)), a = new this.wallet.BN(r.locked), s = n.sub(a), i = new this.wallet.BN(r.amount).add(a);
                        return {
                            balance: i.sub(a).toString(),
                            unspendable: s
                        }
                    } catch (t) {
                        if ("AccountDoesNotExist" === t.type) return {
                            balance: "0"
                        };
                        throw t
                    }
                }
                async fetchStakingInfo(t, {
                    activeValidators: e = []
                } = {}) {
                    const r = {};
                    for (const {
                            address: n
                        }
                        of e) r[n] = await this.getValidatorInfo(t, n);
                    const [n, a, s, i] = ["unstaking", "staked", "availableWithdrawals", "pendingWithdrawals"].map(t => Object.values(r).reduce((e, r) => new this.wallet.BN(e).add(r[t].toBN()).toString(), "0"));
                    return {
                        staked: new h.default(a, this.wallet),
                        unstaking: new h.default(n, this.wallet),
                        pendingWithdrawals: new h.default(i, this.wallet),
                        availableWithdrawals: new h.default(new this.wallet.BN(s).gt(g) ? s : "0", this.wallet),
                        validators: r
                    }
                }
                async getValidatorInfo(t, e) {
                    const [r, n, a, s] = await Promise.all([this.viewFunction(e, "get_account_total_balance", {
                        account_id: t
                    }), this.viewFunction(e, "get_account_staked_balance", {
                        account_id: t
                    }), this.viewFunction(e, "get_account_unstaked_balance", {
                        account_id: t
                    }), this.viewFunction(e, "is_account_unstaked_balance_available", {
                        account_id: t
                    })]);
                    return {
                        total: new h.default(r, this.wallet),
                        staked: new h.default(n, this.wallet),
                        unstaking: new h.default(a, this.wallet),
                        availableWithdrawals: new h.default(s ? a : "0", this.wallet),
                        pendingWithdrawals: new h.default(s ? "0" : a, this.wallet)
                    }
                }
                async viewFunction(t, e, r = {}) {
                    try {
                        var n;
                        const a = this.bytesJsonStringify(r).toString("base64"),
                            s = await this.provider.query({
                                request_type: "call_function",
                                account_id: t,
                                method_name: e,
                                args_base64: a,
                                finality: "final"
                            });
                        return (null == s || null === (n = s.result) || void 0 === n ? void 0 : n.length) > 0 && this.jsonFromRawResponse(Buffer.from(s.result))
                    } catch (t) {
                        throw console.warn(t), new d.ExternalError({
                            type: u.EXTERNAL_ERROR,
                            error: t,
                            instance: this
                        })
                    }
                }
                jsonFromRawResponse(t) {
                    return JSON.parse(Buffer.from(t).toString())
                }
                bytesJsonStringify(t) {
                    return Buffer.from(JSON.stringify(t))
                }
            }
            var T = NearRPCExplorer;
            e.default = T
        },
        3726: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = r(95),
                s = n(r(74)),
                i = n(r(20));
            class NearblocksExplorer extends i.default {
                constructor(...t) {
                    super(...t), this.defaultTxLimit = 25
                }
                getTxLimit() {
                    return this.defaultTxLimit
                }
                getAllowedTickers() {
                    return ["NEAR"]
                }
                getTransactionsUrl(t, e, r = this.defaultTxLimit, n = 0) {
                    return `account/txns?address=${t}&offset=${n*r}&limit=${r}`
                }
                getTransactionsMethod() {
                    return "GET"
                }
                getTransactionsParams(t, e = 0, r = this.defaultTxLimit) {
                    return {
                        address: t,
                        offset: e,
                        limit: r
                    }
                }
                modifyTransactionsResponse(t, e) {
                    return super.modifyTransactionsResponse(t.txns, e).filter(Boolean)
                }
                getTransactionsModifiedResponse(t, e) {
                    try {
                        const r = this.getTxDirection(e, t);
                        return new s.default({
                            walletid: this.wallet.id,
                            ticker: this.wallet.ticker,
                            name: this.wallet.name,
                            alias: this.wallet.alias,
                            explorer: this.constructor.name,
                            txid: this.getTxHash(t),
                            direction: r,
                            otherSideAddress: this.getTxOtherSideAddress(e, t, r),
                            amount: this.getTxValue(e, t),
                            fee: this.getTxFee(t),
                            feeTicker: this.wallet.parent,
                            datetime: this.getTxDateTime(t),
                            memo: this.getTxMemo(t),
                            confirmations: this.getTxConfirmations()
                        })
                    } catch (t) {
                        return void console.error(t)
                    }
                }
                getTxDirection(t, e) {
                    return "Unstake" === e.type || e.to === t
                }
                getTxDateTime(t) {
                    try {
                        return new Date(Number(String(t.block_timestamp).substr(0, 13)))
                    } catch (t) {
                        return console.error(t), new Date
                    }
                }
                getTxOtherSideAddress(t, e, r) {
                    return "Unstake" === e.type ? e.to : r ? e.from : e.to
                }
                getTxValue(t, e) {
                    try {
                        return this.wallet.toCurrencyUnit((0, a.getNumberWithoutENotation)(e.deposit_value))
                    } catch (t) {
                        return console.error(t), "0"
                    }
                }
                getTxHash(t) {
                    return t.transaction_hash
                }
                getTxFee(t) {
                    try {
                        return this.wallet.toCurrencyUnit((0, a.getNumberWithoutENotation)(t.transaction_fee))
                    } catch (t) {
                        return console.error(t), "0"
                    }
                }
                getTxConfirmations() {
                    return 2
                }
            }
            var o = NearblocksExplorer;
            e.default = o
        },
        3962: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(20)),
                s = r(95),
                i = n(r(961));

            function o(t, e) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.add(t)
            }

            function l(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            var c = new WeakSet,
                d = new WeakSet;
            class HederaMirrorNodeExplorer extends a.default {
                constructor(...t) {
                    super(...t), o(this, d), o(this, c)
                }
                getAllowedTickers() {
                    return ["HBAR"]
                }
                getApiPrefix() {
                    return "api/v1/"
                }
                getInfoUrl(t) {
                    return `${this.getApiPrefix()}accounts/${t}`
                }
                getTransactionUrl(t) {
                    return `${this.getApiPrefix()}transactions/${t}`
                }
                getTransactionsUrl() {
                    return this.getApiPrefix() + "transactions"
                }
                getTransactionsParams(t, e = 0, r = this.defaultTxLimit) {
                    return {
                        "account.id": t,
                        limit: r
                    }
                }
                getTxValue(t, e) {
                    const r = [() => {
                        var t;
                        return null === (t = e.staking_reward_transfers) || void 0 === t ? void 0 : t[0]
                    }, () => l(this, c, u).call(this, t, e), () => l(this, d, h).call(this, t, e)];
                    for (const t of r) {
                        const e = t();
                        if ((null == e ? void 0 : e.amount) > 0) return (0, s.toCurrency)(e.amount, this.wallet.decimal)
                    }
                    return (0, s.toCurrency)(0, this.wallet.decimal)
                }
                getTxDateTime(t) {
                    const [e, r] = t.consensus_timestamp.split(".");
                    return new Date(Number(`${e}${(r||"").substring(0,3).padEnd(3,"0")}`))
                }
                getTxDirection(t, e) {
                    var r;
                    return (null === (r = l(this, c, u).call(this, t, e)) || void 0 === r ? void 0 : r.amount) >= 0
                }
                getTxHash(t) {
                    return t.transaction_hash
                }
                getTxMemo(t) {
                    return t.memo_base64 || ""
                }
                getTxConfirmations() {
                    return 1
                }
                getTxType(t) {
                    var e;
                    return "CRYPTOTRANSFER" === t.name ? i.default.TRANSFER : "CRYPTOUPDATEACCOUNT" === t.name && null !== (e = t.staking_reward_transfers) && void 0 !== e && e.length ? i.default.REWARD : ""
                }
                getTxFee(t) {
                    var e;
                    return (0, s.toCurrency)(null !== (e = null == t ? void 0 : t.charged_tx_fee) && void 0 !== e ? e : 0, this.wallet.decimal)
                }
                getTxOtherSideAddress(t, e) {
                    var r, n;
                    return null !== (r = null === (n = l(this, d, h).call(this, t, e)) || void 0 === n ? void 0 : n.account) && void 0 !== r ? r : ""
                }
                modifyInfoResponse(t) {
                    return {
                        balance: t.balance.balance,
                        transactions: []
                    }
                }
                modifyTransactionResponse(t, e, r = this.wallet.ticker) {
                    return super.modifyTransactionResponse(t.transactions[0], e, r)
                }
                modifyTransactionsResponse(t, e) {
                    return super.modifyTransactionsResponse(t.transactions, e).filter(t => t.txType)
                }
            }

            function u(t, {
                transfers: e
            }) {
                return e.find(({
                    account: e
                }) => e === t)
            }

            function h(t, {
                transfers: e,
                node: r
            }) {
                const n = [t, r, "0.0.98"];
                return e.find(({
                    account: t
                }) => !n.includes(t))
            }
            e.default = HederaMirrorNodeExplorer
        },
        3963: function(t, e, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(r(208)),
                s = n(r(207)),
                i = n(r(57)),
                o = n(r(3964)),
                l = r(29),
                c = r(95),
                d = r(173),
                u = n(r(143)),
                h = n(r(20)),
                f = n(r(650));

            function g(t, e) {
                w(t, e), e.add(t)
            }

            function T(t, e, r) {
                w(t, e), e.set(t, r)
            }

            function w(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function m(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            const p = /^\/?activate_account$/;
            var x = new WeakMap,
                y = new WeakMap,
                v = new WeakSet,
                E = new WeakSet,
                k = new WeakSet;
            class MyMoneroExplorer extends h.default {
                constructor({
                    wallet: t,
                    config: e
                }) {
                    super({
                        wallet: t,
                        config: e
                    }), g(this, k), g(this, E), g(this, v), T(this, x, {
                        writable: !0,
                        value: void 0
                    }), T(this, y, {
                        writable: !0,
                        value: {
                            walletManager: void 0,
                            wallet: void 0,
                            isLoggedIn: !1
                        }
                    }), this.baseUrl = (0, c.getStringWithEnsuredEndChar)(e.baseUrl, "/"), this.ticker = t.ticker, u.default.on(d.WALLETS.NEW_ATOMIC_ID, ({
                        atomicId: t
                    }) => m(this, v, _).call(this, t)), u.default.on(d.WALLETS.ACTIVATE_COIN, ({
                        id: t
                    }) => {
                        t === this.wallet.id && m(this, E, A).call(this)
                    });
                    const r = i.default.create({
                        baseURL: this.baseUrl
                    });
                    r.interceptors.request.use(t => (t.headers.common["x-atomic-id"] = (0, s.default)(this, x), t)), r.interceptors.response.use(null, t => {
                        var e;
                        const {
                            config: {
                                url: r
                            },
                            response: {
                                status: n
                            }
                        } = t;
                        if (404 !== n || !p.test(r)) return 409 === (null === (e = t.response) || void 0 === e ? void 0 : e.status) && u.default.emit(d.WALLETS.DEACTIVATE_COIN, {
                            id: this.wallet.id
                        }), Promise.reject(t)
                    }), (0, s.default)(this, y).walletManager = new o.default("MAINNET", this.baseUrl), (0, s.default)(this, y).walletManager.apiClient.httpClient = r
                }
                getAllowedTickers() {
                    return ["XMR"]
                }
                async setupMyMonero(t, e, r) {
                    await (0, s.default)(this, y).walletManager.init(), (0, s.default)(this, y).wallet = await (0, s.default)(this, y).walletManager.importWalletKeys("atomic", t, e, r)
                }
                async getInfo(t) {
                    return await m(this, k, b).call(this), {
                        balance: (0, s.default)(this, y).wallet.balance.toString()
                    }
                }
                async getFee() {
                    await m(this, k, b).call(this);
                    try {
                        return (await (0, s.default)(this, y).wallet.estimateFee()).toString()
                    } catch (t) {
                        throw new l.ExternalError(t, this)
                    }
                }
                async sendTransaction(t) {
                    await m(this, k, b).call(this);
                    try {
                        return {
                            txid: await (0, s.default)(this, y).wallet.transfer(t)
                        }
                    } catch (t) {
                        throw new l.ExternalError(t, this)
                    }
                }
                async getTransactions({
                    address: t
                } = {}) {
                    await m(this, k, b).call(this);
                    const e = (0, s.default)(this, y).wallet.transactions;
                    return this.modifyTransactionsResponse(e, t)
                }
                getTxHash(t) {
                    return t.hash
                }
                getTxDirection(t, e) {
                    return "incoming" === e.direction
                }
                getTxOtherSideAddress(t, e) {
                    return e.destinationAddress
                }
                getTxValue(t, e) {
                    return this.wallet.toCurrencyUnit(e.amount.abs().toString())
                }
                getTxDateTime(t) {
                    return new Date(t.timestamp)
                }
                getTxFee(t) {
                    return this.wallet.toCurrencyUnit(t.fee.toString())
                }
            }

            function _(t) {
                if (!t) throw new l.InternalError({
                    error: "AtomicId cannot be empty",
                    instance: this
                });
                (0, a.default)(this, x, t)
            }

            function A() {
                return (0, s.default)(this, y).walletManager.apiClient.httpClient.post("/activate_account", {
                    atomicId: (0, s.default)(this, x)
                })
            }
            async function b() {
                if (!f.default.isActivated(this.wallet)) throw new Error("Wallet is not active");
                try {
                    (0, s.default)(this, y).isLoggedIn || (await (0, s.default)(this, y).wallet.login(!0), (0, s.default)(this, y).isLoggedIn = !0), await (0, s.default)(this, y).wallet.sync()
                } catch (t) {
                    throw new l.ExternalError(t, this)
                }
            }
            var N = MyMoneroExplorer;
            e.default = N
        }
    }
]);