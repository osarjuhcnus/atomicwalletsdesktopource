(window.webpackJsonp = window.webpackJsonp || []).push([
    [76], {
        1005: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getCurrentServerTime = t.SERVER_TIME_MAP = void 0;
            var n = r(82),
                o = n.__importDefault(r(1006)),
                i = n.__importDefault(r(389)),
                a = r(989).version;
            t.SERVER_TIME_MAP = {};
            var s = o.default.create({
                headers: {
                    "X-Client-Name": "js-stellar-sdk",
                    "X-Client-Version": a
                }
            });

            function u(e) {
                return Math.floor(e / 1e3)
            }
            s.interceptors.response.use((function(e) {
                var r = i.default(e.config.url).hostname(),
                    n = u(Date.parse(e.headers.date)),
                    o = u((new Date).getTime());
                return isNaN(n) || (t.SERVER_TIME_MAP[r] = {
                    serverTime: n,
                    localTimeRecorded: o
                }), e
            })), t.default = s, t.getCurrentServerTime = function(e) {
                var r = t.SERVER_TIME_MAP[e];
                if (!r || !r.localTimeRecorded || !r.serverTime) return null;
                var n = r.serverTime,
                    o = r.localTimeRecorded,
                    i = u((new Date).getTime());
                return i - o > 300 ? null : i - o + n
            }
        },
        127: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CallBuilder = void 0;
            var n, o = r(82),
                i = o.__importDefault(r(2872)),
                a = o.__importDefault(r(389)),
                s = o.__importDefault(r(2873)),
                u = r(388),
                l = o.__importDefault(r(1005)),
                c = r(989).version,
                f = ["transaction"],
                h = global;
            n = h.EventSource ? h.EventSource : i.default ? r(1659) : h.window.EventSource ? h.window.EventSource : r(1659);
            var d = function() {
                function e(e, t) {
                    void 0 === t && (t = ""), this.url = e.clone(), this.filter = [], this.originalSegments = this.url.segment() || [], this.neighborRoot = t
                }
                return e.prototype.call = function() {
                    var e = this;
                    return this.checkFilter(), this._sendNormalRequest(this.url).then((function(t) {
                        return e._parseResponse(t)
                    }))
                }, e.prototype.stream = function(e) {
                    var t, r, o = this;
                    void 0 === e && (e = {}), this.checkFilter(), this.url.setQuery("X-Client-Name", "js-stellar-sdk"), this.url.setQuery("X-Client-Version", c);
                    var i = function() {
                            r = setTimeout((function() {
                                t && t.close(), t = a()
                            }), e.reconnectTimeout || 15e3)
                        },
                        a = function() {
                            try {
                                t = new n(o.url.toString())
                            } catch (t) {
                                e.onerror && e.onerror(t)
                            }
                            if (i(), t) {
                                var s = !1,
                                    u = function() {
                                        s || (clearTimeout(r), t.close(), a(), s = !0)
                                    },
                                    l = function(t) {
                                        if ("close" !== t.type) {
                                            var n = t.data ? o._parseRecord(JSON.parse(t.data)) : t;
                                            n.paging_token && o.url.setQuery("cursor", n.paging_token), clearTimeout(r), i(), void 0 !== e.onmessage && e.onmessage(n)
                                        } else u()
                                    },
                                    c = function(t) {
                                        e.onerror && e.onerror(t)
                                    };
                                t.addEventListener ? (t.addEventListener("message", l.bind(o)), t.addEventListener("error", c.bind(o)), t.addEventListener("close", u.bind(o))) : (t.onmessage = l.bind(o), t.onerror = c.bind(o))
                            }
                            return t
                        };
                    return a(),
                        function() {
                            clearTimeout(r), t && t.close()
                        }
                }, e.prototype.cursor = function(e) {
                    return this.url.setQuery("cursor", e), this
                }, e.prototype.limit = function(e) {
                    return this.url.setQuery("limit", e.toString()), this
                }, e.prototype.order = function(e) {
                    return this.url.setQuery("order", e), this
                }, e.prototype.join = function(e) {
                    return this.url.setQuery("join", e), this
                }, e.prototype.forEndpoint = function(e, t) {
                    if ("" === this.neighborRoot) throw new Error("Invalid usage: neighborRoot not set in constructor");
                    return this.filter.push([e, t, this.neighborRoot]), this
                }, e.prototype.checkFilter = function() {
                    if (this.filter.length >= 2) throw new u.BadRequestError("Too many filters specified", this.filter);
                    if (1 === this.filter.length) {
                        var e = this.originalSegments.concat(this.filter[0]);
                        this.url.segment(e)
                    }
                }, e.prototype._requestFnForLink = function(e) {
                    var t = this;
                    return function(r) {
                        return void 0 === r && (r = {}), o.__awaiter(t, void 0, void 0, (function() {
                            var t, n, i;
                            return o.__generator(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return e.templated ? (n = s.default(e.href), t = a.default(n.expand(r))) : t = a.default(e.href), [4, this._sendNormalRequest(t)];
                                    case 1:
                                        return i = o.sent(), [2, this._parseResponse(i)]
                                }
                            }))
                        }))
                    }
                }, e.prototype._parseRecord = function(e) {
                    var t = this;
                    if (!e._links) return e;
                    for (var r = function(r) {
                            var i = e._links[r],
                                a = !1;
                            if (void 0 !== e[r] && (e[r + "_attr"] = e[r], a = !0), a && f.indexOf(r) >= 0) {
                                var s = n._parseRecord(e[r]);
                                e[r] = function() {
                                    return o.__awaiter(t, void 0, void 0, (function() {
                                        return o.__generator(this, (function(e) {
                                            return [2, s]
                                        }))
                                    }))
                                }
                            } else e[r] = n._requestFnForLink(i)
                        }, n = this, i = 0, a = Object.keys(e._links); i < a.length; i++) {
                        r(a[i])
                    }
                    return e
                }, e.prototype._sendNormalRequest = function(e) {
                    return o.__awaiter(this, void 0, void 0, (function() {
                        var t;
                        return o.__generator(this, (function(r) {
                            return "" === (t = e).authority() && (t = t.authority(this.url.authority())), "" === t.protocol() && (t = t.protocol(this.url.protocol())), [2, l.default.get(t.toString()).then((function(e) {
                                return e.data
                            })).catch(this._handleNetworkError)]
                        }))
                    }))
                }, e.prototype._parseResponse = function(e) {
                    return e._embedded && e._embedded.records ? this._toCollectionPage(e) : this._parseRecord(e)
                }, e.prototype._toCollectionPage = function(e) {
                    for (var t = this, r = 0; r < e._embedded.records.length; r += 1) e._embedded.records[r] = this._parseRecord(e._embedded.records[r]);
                    return {
                        records: e._embedded.records,
                        next: function() {
                            return o.__awaiter(t, void 0, void 0, (function() {
                                var t;
                                return o.__generator(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this._sendNormalRequest(a.default(e._links.next.href))];
                                        case 1:
                                            return t = r.sent(), [2, this._toCollectionPage(t)]
                                    }
                                }))
                            }))
                        },
                        prev: function() {
                            return o.__awaiter(t, void 0, void 0, (function() {
                                var t;
                                return o.__generator(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this._sendNormalRequest(a.default(e._links.prev.href))];
                                        case 1:
                                            return t = r.sent(), [2, this._toCollectionPage(t)]
                                    }
                                }))
                            }))
                        }
                    }
                }, e.prototype._handleNetworkError = function(e) {
                    return o.__awaiter(this, void 0, void 0, (function() {
                        return o.__generator(this, (function(t) {
                            if (!(e.response && e.response.status && e.response.statusText)) return [2, Promise.reject(new Error(e.message))];
                            switch (e.response.status) {
                                case 404:
                                    return [2, Promise.reject(new u.NotFoundError(e.response.statusText, e.response.data))];
                                default:
                                    return [2, Promise.reject(new u.NetworkError(e.response.statusText, e.response.data))]
                            }
                            return [2]
                        }))
                    }))
                }, e
            }();
            t.CallBuilder = d
        },
        1614: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AccountResponse = void 0;
            var n = r(82).__importDefault(r(2752)),
                o = r(486),
                i = function() {
                    function e(e) {
                        var t = this;
                        this._baseAccount = new o.Account(e.account_id, e.sequence), n.default(e, (function(e, r) {
                            t[r] = e
                        }))
                    }
                    return e.prototype.accountId = function() {
                        return this._baseAccount.accountId()
                    }, e.prototype.sequenceNumber = function() {
                        return this._baseAccount.sequenceNumber()
                    }, e.prototype.incrementSequenceNumber = function() {
                        this._baseAccount.incrementSequenceNumber(), this.sequence = this._baseAccount.sequenceNumber()
                    }, e
                }();
            t.AccountResponse = i
        },
        1660: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StellarTomlResolver = t.STELLAR_TOML_MAX_SIZE = void 0;
            var n = r(82),
                o = n.__importDefault(r(1006)),
                i = n.__importDefault(r(2908)),
                a = r(584);
            t.STELLAR_TOML_MAX_SIZE = 102400;
            var s = o.default.CancelToken,
                u = function() {
                    function e() {}
                    return e.resolve = function(e, r) {
                        return void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, (function() {
                            var u, l, c;
                            return n.__generator(this, (function(n) {
                                return u = void 0 === r.allowHttp ? a.Config.isAllowHttp() : r.allowHttp, l = void 0 === r.timeout ? a.Config.getTimeout() : r.timeout, c = u ? "http" : "https", [2, o.default.get(c + "://" + e + "/.well-known/stellar.toml", {
                                    maxContentLength: t.STELLAR_TOML_MAX_SIZE,
                                    cancelToken: l ? new s((function(e) {
                                        return setTimeout((function() {
                                            return e("timeout of " + l + "ms exceeded")
                                        }), l)
                                    })) : void 0,
                                    timeout: l
                                }).then((function(e) {
                                    try {
                                        var t = i.default.parse(e.data);
                                        return Promise.resolve(t)
                                    } catch (e) {
                                        return Promise.reject(new Error("stellar.toml is invalid - Parsing error on line " + e.line + ", column " + e.column + ": " + e.message))
                                    }
                                })).catch((function(e) {
                                    throw e.message.match(/^maxContentLength size/) ? new Error("stellar.toml file exceeds allowed size of " + t.STELLAR_TOML_MAX_SIZE) : e
                                }))]
                            }))
                        }))
                    }, e
                }();
            t.StellarTomlResolver = u
        },
        2355: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.version = void 0;
            var n = r(82);
            r(2749).polyfill();
            var o = r(989).version;
            t.version = o, n.__exportStar(r(2750), t), n.__exportStar(r(2751), t), n.__exportStar(r(1614), t), n.__exportStar(r(388), t);
            var i = r(584);
            Object.defineProperty(t, "Config", {
                enumerable: !0,
                get: function() {
                    return i.Config
                }
            });
            var a = r(2870);
            Object.defineProperty(t, "Server", {
                enumerable: !0,
                get: function() {
                    return a.Server
                }
            });
            var s = r(2907);
            Object.defineProperty(t, "FederationServer", {
                enumerable: !0,
                get: function() {
                    return s.FederationServer
                }
            }), Object.defineProperty(t, "FEDERATION_RESPONSE_MAX_SIZE", {
                enumerable: !0,
                get: function() {
                    return s.FEDERATION_RESPONSE_MAX_SIZE
                }
            });
            var u = r(1660);
            Object.defineProperty(t, "StellarTomlResolver", {
                enumerable: !0,
                get: function() {
                    return u.StellarTomlResolver
                }
            }), Object.defineProperty(t, "STELLAR_TOML_MAX_SIZE", {
                enumerable: !0,
                get: function() {
                    return u.STELLAR_TOML_MAX_SIZE
                }
            });
            var l = r(1005);
            Object.defineProperty(t, "HorizonAxiosClient", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "SERVER_TIME_MAP", {
                enumerable: !0,
                get: function() {
                    return l.SERVER_TIME_MAP
                }
            }), Object.defineProperty(t, "getCurrentServerTime", {
                enumerable: !0,
                get: function() {
                    return l.getCurrentServerTime
                }
            }), n.__exportStar(r(2911), t), n.__exportStar(r(486), t), t.default = e.exports
        },
        2750: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Horizon = void 0,
                function(e) {
                    ! function(e) {
                        e.constantProduct = "constant_product"
                    }(e.LiquidityPoolType || (e.LiquidityPoolType = {})),
                    function(e) {
                        e.createAccount = "create_account", e.payment = "payment", e.pathPayment = "path_payment_strict_receive", e.createPassiveOffer = "create_passive_sell_offer", e.manageOffer = "manage_sell_offer", e.setOptions = "set_options", e.changeTrust = "change_trust", e.allowTrust = "allow_trust", e.accountMerge = "account_merge", e.inflation = "inflation", e.manageData = "manage_data", e.bumpSequence = "bump_sequence", e.manageBuyOffer = "manage_buy_offer", e.pathPaymentStrictSend = "path_payment_strict_send", e.createClaimableBalance = "create_claimable_balance", e.claimClaimableBalance = "claim_claimable_balance", e.beginSponsoringFutureReserves = "begin_sponsoring_future_reserves", e.endSponsoringFutureReserves = "end_sponsoring_future_reserves", e.revokeSponsorship = "revoke_sponsorship", e.clawback = "clawback", e.clawbackClaimableBalance = "clawback_claimable_balance", e.setTrustLineFlags = "set_trust_line_flags", e.liquidityPoolDeposit = "liquidity_pool_deposit", e.liquidityPoolWithdraw = "liquidity_pool_withdraw"
                    }(e.OperationResponseType || (e.OperationResponseType = {})),
                    function(e) {
                        e[e.createAccount = 0] = "createAccount", e[e.payment = 1] = "payment", e[e.pathPayment = 2] = "pathPayment", e[e.createPassiveOffer = 3] = "createPassiveOffer", e[e.manageOffer = 4] = "manageOffer", e[e.setOptions = 5] = "setOptions", e[e.changeTrust = 6] = "changeTrust", e[e.allowTrust = 7] = "allowTrust", e[e.accountMerge = 8] = "accountMerge", e[e.inflation = 9] = "inflation", e[e.manageData = 10] = "manageData", e[e.bumpSequence = 11] = "bumpSequence", e[e.manageBuyOffer = 12] = "manageBuyOffer", e[e.pathPaymentStrictSend = 13] = "pathPaymentStrictSend", e[e.createClaimableBalance = 14] = "createClaimableBalance", e[e.claimClaimableBalance = 15] = "claimClaimableBalance", e[e.beginSponsoringFutureReserves = 16] = "beginSponsoringFutureReserves", e[e.endSponsoringFutureReserves = 17] = "endSponsoringFutureReserves", e[e.revokeSponsorship = 18] = "revokeSponsorship", e[e.clawback = 19] = "clawback", e[e.clawbackClaimableBalance = 20] = "clawbackClaimableBalance", e[e.setTrustLineFlags = 21] = "setTrustLineFlags", e[e.liquidityPoolDeposit = 22] = "liquidityPoolDeposit", e[e.liquidityPoolWithdraw = 23] = "liquidityPoolWithdraw"
                    }(e.OperationResponseTypeI || (e.OperationResponseTypeI = {})),
                    function(e) {
                        e.TX_FAILED = "tx_failed", e.TX_BAD_SEQ = "tx_bad_seq", e.TX_BAD_AUTH = "tx_bad_auth", e.TX_BAD_AUTH_EXTRA = "tx_bad_auth_extra", e.TX_FEE_BUMP_INNER_SUCCESS = "tx_fee_bump_inner_success", e.TX_FEE_BUMP_INNER_FAILED = "tx_fee_bump_inner_failed", e.TX_NOT_SUPPORTED = "tx_not_supported", e.TX_SUCCESS = "tx_success", e.TX_TOO_EARLY = "tx_too_early", e.TX_TOO_LATE = "tx_too_late", e.TX_MISSING_OPERATION = "tx_missing_operation", e.TX_INSUFFICIENT_BALANCE = "tx_insufficient_balance", e.TX_NO_SOURCE_ACCOUNT = "tx_no_source_account", e.TX_INSUFFICIENT_FEE = "tx_insufficient_fee", e.TX_INTERNAL_ERROR = "tx_internal_error"
                    }(e.TransactionFailedResultCodes || (e.TransactionFailedResultCodes = {}))
                }(t.Horizon || (t.Horizon = {}))
        },
        2751: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ServerApi = void 0,
                function(e) {
                    ! function(e) {
                        e.all = "all", e.liquidityPools = "liquidity_pool", e.orderbook = "orderbook"
                    }(e.TradeType || (e.TradeType = {}))
                }(t.ServerApi || (t.ServerApi = {}))
        },
        2870: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Server = t.SUBMIT_TRANSACTION_TIMEOUT = void 0;
            var n = r(82),
                o = n.__importDefault(r(285)),
                i = n.__importDefault(r(2871)),
                a = n.__importDefault(r(1442)),
                s = r(486),
                u = n.__importDefault(r(389)),
                l = r(127),
                c = r(584),
                f = r(388),
                h = r(2891),
                d = r(1614),
                p = r(2892),
                _ = r(2893),
                v = r(2894),
                y = r(2895),
                g = r(2896),
                m = r(2897),
                w = r(2898),
                b = r(2899),
                E = r(2900),
                S = r(2901),
                T = r(2902),
                A = r(2903),
                C = r(2904),
                R = r(2905),
                B = r(2906),
                I = n.__importStar(r(1005));
            t.SUBMIT_TRANSACTION_TIMEOUT = 6e4;

            function O(e) {
                return new o.default(e).div(1e7).toString()
            }
            var x = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.serverURL = u.default(e);
                    var r = void 0 === t.allowHttp ? c.Config.isAllowHttp() : t.allowHttp,
                        n = {};
                    if (t.appName && (n["X-App-Name"] = t.appName), t.appVersion && (n["X-App-Version"] = t.appVersion), i.default(n) || I.default.interceptors.request.use((function(e) {
                            return e.headers = a.default(n, e.headers), e
                        })), "https" !== this.serverURL.protocol() && !r) throw new Error("Cannot connect to insecure horizon server")
                }
                return e.prototype.fetchTimebounds = function(e, t) {
                    return void 0 === t && (t = !1), n.__awaiter(this, void 0, void 0, (function() {
                        var r;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return (r = I.getCurrentServerTime(this.serverURL.hostname())) ? [2, {
                                        minTime: 0,
                                        maxTime: r + e
                                    }] : t ? [2, {
                                        minTime: 0,
                                        maxTime: Math.floor((new Date).getTime() / 1e3) + e
                                    }] : [4, I.default.get(u.default(this.serverURL).toString())];
                                case 1:
                                    return n.sent(), [4, this.fetchTimebounds(e, !0)];
                                case 2:
                                    return [2, n.sent()]
                            }
                        }))
                    }))
                }, e.prototype.fetchBaseFee = function() {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var e;
                        return n.__generator(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.feeStats()];
                                case 1:
                                    return e = t.sent(), [2, parseInt(e.last_ledger_base_fee, 10) || 100]
                            }
                        }))
                    }))
                }, e.prototype.feeStats = function() {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var e;
                        return n.__generator(this, (function(t) {
                            return (e = new l.CallBuilder(u.default(this.serverURL))).filter.push(["fee_stats"]), [2, e.call()]
                        }))
                    }))
                }, e.prototype.submitTransaction = function(e, r) {
                    return void 0 === r && (r = {
                        skipMemoRequiredCheck: !1
                    }), n.__awaiter(this, void 0, void 0, (function() {
                        var i;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return r.skipMemoRequiredCheck ? [3, 2] : [4, this.checkMemoRequired(e)];
                                case 1:
                                    n.sent(), n.label = 2;
                                case 2:
                                    return i = encodeURIComponent(e.toEnvelope().toXDR().toString("base64")), [2, I.default.post(u.default(this.serverURL).segment("transactions").toString(), "tx=" + i, {
                                        timeout: t.SUBMIT_TRANSACTION_TIMEOUT
                                    }).then((function(e) {
                                        if (!e.data.result_xdr) return e.data;
                                        var t, r, n = s.xdr.TransactionResult.fromXDR(e.data.result_xdr, "base64").result().value();
                                        return n.length && (t = n.map((function(e, t) {
                                            if ("manageBuyOffer" !== e.value().switch().name && "manageSellOffer" !== e.value().switch().name) return null;
                                            r = !0;
                                            var n, i = new o.default(0),
                                                a = new o.default(0),
                                                u = e.value().value().success(),
                                                l = u.offersClaimed().map((function(e) {
                                                    var t = e.value(),
                                                        r = "";
                                                    switch (e.switch()) {
                                                        case s.xdr.ClaimAtomType.claimAtomTypeV0():
                                                            r = s.StrKey.encodeEd25519PublicKey(t.sellerEd25519());
                                                            break;
                                                        case s.xdr.ClaimAtomType.claimAtomTypeOrderBook():
                                                            r = s.StrKey.encodeEd25519PublicKey(t.sellerId().ed25519());
                                                            break;
                                                        default:
                                                            throw new Error("Invalid offer result type: " + e.switch())
                                                    }
                                                    var n = new o.default(t.amountBought().toString()),
                                                        u = new o.default(t.amountSold().toString());
                                                    i = i.add(u), a = a.add(n);
                                                    var l = s.Asset.fromOperation(t.assetSold()),
                                                        c = s.Asset.fromOperation(t.assetBought()),
                                                        f = {
                                                            type: l.getAssetType(),
                                                            assetCode: l.getCode(),
                                                            issuer: l.getIssuer()
                                                        },
                                                        h = {
                                                            type: c.getAssetType(),
                                                            assetCode: c.getCode(),
                                                            issuer: c.getIssuer()
                                                        };
                                                    return {
                                                        sellerId: r,
                                                        offerId: t.offerId().toString(),
                                                        assetSold: f,
                                                        amountSold: O(u),
                                                        assetBought: h,
                                                        amountBought: O(n)
                                                    }
                                                })),
                                                c = u.offer().switch().name;
                                            if ("function" == typeof u.offer().value && u.offer().value()) {
                                                var f = u.offer().value();
                                                n = {
                                                    offerId: f.offerId().toString(),
                                                    selling: {},
                                                    buying: {},
                                                    amount: O(f.amount().toString()),
                                                    price: {
                                                        n: f.price().n(),
                                                        d: f.price().d()
                                                    }
                                                };
                                                var h = s.Asset.fromOperation(f.selling());
                                                n.selling = {
                                                    type: h.getAssetType(),
                                                    assetCode: h.getCode(),
                                                    issuer: h.getIssuer()
                                                };
                                                var d = s.Asset.fromOperation(f.buying());
                                                n.buying = {
                                                    type: d.getAssetType(),
                                                    assetCode: d.getCode(),
                                                    issuer: d.getIssuer()
                                                }
                                            }
                                            return {
                                                offersClaimed: l,
                                                effect: c,
                                                operationIndex: t,
                                                currentOffer: n,
                                                amountBought: O(i),
                                                amountSold: O(a),
                                                isFullyOpen: !l.length && "manageOfferDeleted" !== c,
                                                wasPartiallyFilled: !!l.length && "manageOfferDeleted" !== c,
                                                wasImmediatelyFilled: !!l.length && "manageOfferDeleted" === c,
                                                wasImmediatelyDeleted: !l.length && "manageOfferDeleted" === c
                                            }
                                        })).filter((function(e) {
                                            return !!e
                                        }))), Object.assign({}, e.data, {
                                            offerResults: r ? t : void 0
                                        })
                                    })).catch((function(e) {
                                        return e instanceof Error ? Promise.reject(e) : Promise.reject(new f.BadResponseError("Transaction submission failed. Server responded: " + e.status + " " + e.statusText, e.data))
                                    }))]
                            }
                        }))
                    }))
                }, e.prototype.accounts = function() {
                    return new h.AccountCallBuilder(u.default(this.serverURL))
                }, e.prototype.claimableBalances = function() {
                    return new _.ClaimableBalanceCallBuilder(u.default(this.serverURL))
                }, e.prototype.ledgers = function() {
                    return new g.LedgerCallBuilder(u.default(this.serverURL))
                }, e.prototype.transactions = function() {
                    return new B.TransactionCallBuilder(u.default(this.serverURL))
                }, e.prototype.offers = function() {
                    return new w.OfferCallBuilder(u.default(this.serverURL))
                }, e.prototype.orderbook = function(e, t) {
                    return new E.OrderbookCallBuilder(u.default(this.serverURL), e, t)
                }, e.prototype.trades = function() {
                    return new R.TradesCallBuilder(u.default(this.serverURL))
                }, e.prototype.operations = function() {
                    return new b.OperationCallBuilder(u.default(this.serverURL))
                }, e.prototype.liquidityPools = function() {
                    return new m.LiquidityPoolCallBuilder(u.default(this.serverURL))
                }, e.prototype.strictReceivePaths = function(e, t, r) {
                    return new T.StrictReceivePathCallBuilder(u.default(this.serverURL), e, t, r)
                }, e.prototype.strictSendPaths = function(e, t, r) {
                    return new A.StrictSendPathCallBuilder(u.default(this.serverURL), e, t, r)
                }, e.prototype.payments = function() {
                    return new S.PaymentCallBuilder(u.default(this.serverURL))
                }, e.prototype.effects = function() {
                    return new v.EffectCallBuilder(u.default(this.serverURL))
                }, e.prototype.friendbot = function(e) {
                    return new y.FriendbotBuilder(u.default(this.serverURL), e)
                }, e.prototype.assets = function() {
                    return new p.AssetsCallBuilder(u.default(this.serverURL))
                }, e.prototype.loadAccount = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var t;
                        return n.__generator(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.accounts().accountId(e).call()];
                                case 1:
                                    return t = r.sent(), [2, new d.AccountResponse(t)]
                            }
                        }))
                    }))
                }, e.prototype.tradeAggregation = function(e, t, r, n, o, i) {
                    return new C.TradeAggregationCallBuilder(u.default(this.serverURL), e, t, r, n, o, i)
                }, e.prototype.checkMemoRequired = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var t, r, o, i, a;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    if (e instanceof s.FeeBumpTransaction && (e = e.innerTransaction), "none" !== e.memo.type) return [2];
                                    t = new Set, r = 0, n.label = 1;
                                case 1:
                                    if (!(r < e.operations.length)) return [3, 6];
                                    switch ((o = e.operations[r]).type) {
                                        case "payment":
                                        case "pathPaymentStrictReceive":
                                        case "pathPaymentStrictSend":
                                        case "accountMerge":
                                            break;
                                        default:
                                            return [3, 5]
                                    }
                                    if (i = o.destination, t.has(i)) return [3, 5];
                                    if (t.add(i), i.startsWith("M")) return [3, 5];
                                    n.label = 2;
                                case 2:
                                    return n.trys.push([2, 4, , 5]), [4, this.loadAccount(i)];
                                case 3:
                                    if ("MQ==" === n.sent().data_attr["config.memo_required"]) throw new f.AccountRequiresMemoError("account requires memo", i, r);
                                    return [3, 5];
                                case 4:
                                    if ((a = n.sent()) instanceof f.AccountRequiresMemoError) throw a;
                                    if (!(a instanceof f.NotFoundError)) throw a;
                                    return [3, 5];
                                case 5:
                                    return r++, [3, 1];
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }, e
            }();
            t.Server = x
        },
        2891: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AccountCallBuilder = void 0;
            var n = r(82),
                o = r(127),
                i = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.url.segment("accounts"), r
                    }
                    return n.__extends(t, e), t.prototype.accountId = function(e) {
                        var t = new o.CallBuilder(this.url.clone());
                        return t.filter.push([e]), t
                    }, t.prototype.forSigner = function(e) {
                        return this.url.setQuery("signer", e), this
                    }, t.prototype.forAsset = function(e) {
                        return this.url.setQuery("asset", "" + e), this
                    }, t.prototype.sponsor = function(e) {
                        return this.url.setQuery("sponsor", e), this
                    }, t.prototype.forLiquidityPool = function(e) {
                        return this.url.setQuery("liquidity_pool", e), this
                    }, t
                }(o.CallBuilder);
            t.AccountCallBuilder = i
        },
        2892: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AssetsCallBuilder = void 0;
            var n = r(82),
                o = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.url.segment("assets"), r
                    }
                    return n.__extends(t, e), t.prototype.forCode = function(e) {
                        return this.url.setQuery("asset_code", e), this
                    }, t.prototype.forIssuer = function(e) {
                        return this.url.setQuery("asset_issuer", e), this
                    }, t
                }(r(127).CallBuilder);
            t.AssetsCallBuilder = o
        },
        2893: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClaimableBalanceCallBuilder = void 0;
            var n = r(82),
                o = r(127),
                i = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.url.segment("claimable_balances"), r
                    }
                    return n.__extends(t, e), t.prototype.claimableBalance = function(e) {
                        var t = new o.CallBuilder(this.url.clone());
                        return t.filter.push([e]), t
                    }, t.prototype.sponsor = function(e) {
                        return this.url.setQuery("sponsor", e), this
                    }, t.prototype.claimant = function(e) {
                        return this.url.setQuery("claimant", e), this
                    }, t.prototype.asset = function(e) {
                        return this.url.setQuery("asset", e.toString()), this
                    }, t
                }(o.CallBuilder);
            t.ClaimableBalanceCallBuilder = i
        },
        2894: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EffectCallBuilder = void 0;
            var n = r(82),
                o = function(e) {
                    function t(t) {
                        var r = e.call(this, t, "effects") || this;
                        return r.url.segment("effects"), r
                    }
                    return n.__extends(t, e), t.prototype.forAccount = function(e) {
                        return this.forEndpoint("accounts", e)
                    }, t.prototype.forLedger = function(e) {
                        return this.forEndpoint("ledgers", e.toString())
                    }, t.prototype.forTransaction = function(e) {
                        return this.forEndpoint("transactions", e)
                    }, t.prototype.forOperation = function(e) {
                        return this.forEndpoint("operations", e)
                    }, t.prototype.forLiquidityPool = function(e) {
                        return this.forEndpoint("liquidity_pools", e)
                    }, t
                }(r(127).CallBuilder);
            t.EffectCallBuilder = o
        },
        2895: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FriendbotBuilder = void 0;
            var n = r(82),
                o = function(e) {
                    function t(t, r) {
                        var n = e.call(this, t) || this;
                        return n.url.segment("friendbot"), n.url.setQuery("addr", r), n
                    }
                    return n.__extends(t, e), t
                }(r(127).CallBuilder);
            t.FriendbotBuilder = o
        },
        2896: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LedgerCallBuilder = void 0;
            var n = r(82),
                o = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.url.segment("ledgers"), r
                    }
                    return n.__extends(t, e), t.prototype.ledger = function(e) {
                        return this.filter.push(["ledgers", e.toString()]), this
                    }, t
                }(r(127).CallBuilder);
            t.LedgerCallBuilder = o
        },
        2897: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LiquidityPoolCallBuilder = void 0;
            var n = r(82),
                o = r(127),
                i = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.url.segment("liquidity_pools"), r
                    }
                    return n.__extends(t, e), t.prototype.forAssets = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var r = e.map((function(e) {
                            return e.toString()
                        })).join(",");
                        return this.url.setQuery("reserves", r), this
                    }, t.prototype.forAccount = function(e) {
                        return this.url.setQuery("account", e), this
                    }, t.prototype.liquidityPoolId = function(e) {
                        if (!e.match(/[a-fA-F0-9]{64}/)) throw new TypeError(e + " does not look like a liquidity pool ID");
                        var t = new o.CallBuilder(this.url.clone());
                        return t.filter.push([e.toLowerCase()]), t
                    }, t
                }(o.CallBuilder);
            t.LiquidityPoolCallBuilder = i
        },
        2898: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OfferCallBuilder = void 0;
            var n = r(82),
                o = r(127),
                i = function(e) {
                    function t(t) {
                        var r = e.call(this, t, "offers") || this;
                        return r.url.segment("offers"), r
                    }
                    return n.__extends(t, e), t.prototype.offer = function(e) {
                        var t = new o.CallBuilder(this.url.clone());
                        return t.filter.push([e]), t
                    }, t.prototype.forAccount = function(e) {
                        return this.forEndpoint("accounts", e)
                    }, t.prototype.buying = function(e) {
                        return e.isNative() ? this.url.setQuery("buying_asset_type", "native") : (this.url.setQuery("buying_asset_type", e.getAssetType()), this.url.setQuery("buying_asset_code", e.getCode()), this.url.setQuery("buying_asset_issuer", e.getIssuer())), this
                    }, t.prototype.selling = function(e) {
                        return e.isNative() ? this.url.setQuery("selling_asset_type", "native") : (this.url.setQuery("selling_asset_type", e.getAssetType()), this.url.setQuery("selling_asset_code", e.getCode()), this.url.setQuery("selling_asset_issuer", e.getIssuer())), this
                    }, t.prototype.sponsor = function(e) {
                        return this.url.setQuery("sponsor", e), this
                    }, t.prototype.seller = function(e) {
                        return this.url.setQuery("seller", e), this
                    }, t
                }(o.CallBuilder);
            t.OfferCallBuilder = i
        },
        2899: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OperationCallBuilder = void 0;
            var n = r(82),
                o = r(127),
                i = function(e) {
                    function t(t) {
                        var r = e.call(this, t, "operations") || this;
                        return r.url.segment("operations"), r
                    }
                    return n.__extends(t, e), t.prototype.operation = function(e) {
                        var t = new o.CallBuilder(this.url.clone());
                        return t.filter.push([e]), t
                    }, t.prototype.forAccount = function(e) {
                        return this.forEndpoint("accounts", e)
                    }, t.prototype.forClaimableBalance = function(e) {
                        return this.forEndpoint("claimable_balances", e)
                    }, t.prototype.forLedger = function(e) {
                        return this.forEndpoint("ledgers", e.toString())
                    }, t.prototype.forTransaction = function(e) {
                        return this.forEndpoint("transactions", e)
                    }, t.prototype.forLiquidityPool = function(e) {
                        return this.forEndpoint("liquidity_pools", e)
                    }, t.prototype.includeFailed = function(e) {
                        return this.url.setQuery("include_failed", e.toString()), this
                    }, t
                }(o.CallBuilder);
            t.OperationCallBuilder = i
        },
        2900: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderbookCallBuilder = void 0;
            var n = r(82),
                o = function(e) {
                    function t(t, r, n) {
                        var o = e.call(this, t) || this;
                        return o.url.segment("order_book"), r.isNative() ? o.url.setQuery("selling_asset_type", "native") : (o.url.setQuery("selling_asset_type", r.getAssetType()), o.url.setQuery("selling_asset_code", r.getCode()), o.url.setQuery("selling_asset_issuer", r.getIssuer())), n.isNative() ? o.url.setQuery("buying_asset_type", "native") : (o.url.setQuery("buying_asset_type", n.getAssetType()), o.url.setQuery("buying_asset_code", n.getCode()), o.url.setQuery("buying_asset_issuer", n.getIssuer())), o
                    }
                    return n.__extends(t, e), t
                }(r(127).CallBuilder);
            t.OrderbookCallBuilder = o
        },
        2901: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PaymentCallBuilder = void 0;
            var n = r(82),
                o = function(e) {
                    function t(t) {
                        var r = e.call(this, t, "payments") || this;
                        return r.url.segment("payments"), r
                    }
                    return n.__extends(t, e), t.prototype.forAccount = function(e) {
                        return this.forEndpoint("accounts", e)
                    }, t.prototype.forLedger = function(e) {
                        return this.forEndpoint("ledgers", e.toString())
                    }, t.prototype.forTransaction = function(e) {
                        return this.forEndpoint("transactions", e)
                    }, t
                }(r(127).CallBuilder);
            t.PaymentCallBuilder = o
        },
        2902: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StrictReceivePathCallBuilder = void 0;
            var n = r(82),
                o = function(e) {
                    function t(t, r, n, o) {
                        var i = e.call(this, t) || this;
                        if (i.url.segment("paths/strict-receive"), "string" == typeof r) i.url.setQuery("source_account", r);
                        else {
                            var a = r.map((function(e) {
                                return e.isNative() ? "native" : e.getCode() + ":" + e.getIssuer()
                            })).join(",");
                            i.url.setQuery("source_assets", a)
                        }
                        return i.url.setQuery("destination_amount", o), n.isNative() ? i.url.setQuery("destination_asset_type", "native") : (i.url.setQuery("destination_asset_type", n.getAssetType()), i.url.setQuery("destination_asset_code", n.getCode()), i.url.setQuery("destination_asset_issuer", n.getIssuer())), i
                    }
                    return n.__extends(t, e), t
                }(r(127).CallBuilder);
            t.StrictReceivePathCallBuilder = o
        },
        2903: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StrictSendPathCallBuilder = void 0;
            var n = r(82),
                o = function(e) {
                    function t(t, r, n, o) {
                        var i = e.call(this, t) || this;
                        if (i.url.segment("paths/strict-send"), r.isNative() ? i.url.setQuery("source_asset_type", "native") : (i.url.setQuery("source_asset_type", r.getAssetType()), i.url.setQuery("source_asset_code", r.getCode()), i.url.setQuery("source_asset_issuer", r.getIssuer())), i.url.setQuery("source_amount", n), "string" == typeof o) i.url.setQuery("destination_account", o);
                        else {
                            var a = o.map((function(e) {
                                return e.isNative() ? "native" : e.getCode() + ":" + e.getIssuer()
                            })).join(",");
                            i.url.setQuery("destination_assets", a)
                        }
                        return i
                    }
                    return n.__extends(t, e), t
                }(r(127).CallBuilder);
            t.StrictSendPathCallBuilder = o
        },
        2904: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TradeAggregationCallBuilder = void 0;
            var n = r(82),
                o = r(127),
                i = r(388),
                a = [6e4, 3e5, 9e5, 36e5, 864e5, 6048e5],
                s = function(e) {
                    function t(t, r, n, o, a, s, u) {
                        var l = e.call(this, t) || this;
                        if (l.url.segment("trade_aggregations"), r.isNative() ? l.url.setQuery("base_asset_type", "native") : (l.url.setQuery("base_asset_type", r.getAssetType()), l.url.setQuery("base_asset_code", r.getCode()), l.url.setQuery("base_asset_issuer", r.getIssuer())), n.isNative() ? l.url.setQuery("counter_asset_type", "native") : (l.url.setQuery("counter_asset_type", n.getAssetType()), l.url.setQuery("counter_asset_code", n.getCode()), l.url.setQuery("counter_asset_issuer", n.getIssuer())), "number" != typeof o || "number" != typeof a) throw new i.BadRequestError("Invalid time bounds", [o, a]);
                        if (l.url.setQuery("start_time", o.toString()), l.url.setQuery("end_time", a.toString()), !l.isValidResolution(s)) throw new i.BadRequestError("Invalid resolution", s);
                        if (l.url.setQuery("resolution", s.toString()), !l.isValidOffset(u, s)) throw new i.BadRequestError("Invalid offset", u);
                        return l.url.setQuery("offset", u.toString()), l
                    }
                    return n.__extends(t, e), t.prototype.isValidResolution = function(e) {
                        for (var t = 0, r = a; t < r.length; t++) {
                            if (r[t] === e) return !0
                        }
                        return !1
                    }, t.prototype.isValidOffset = function(e, t) {
                        return !(e > t || e >= 864e5 || e % 36e5 != 0)
                    }, t
                }(o.CallBuilder);
            t.TradeAggregationCallBuilder = s
        },
        2905: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TradesCallBuilder = void 0;
            var n = r(82),
                o = function(e) {
                    function t(t) {
                        var r = e.call(this, t, "trades") || this;
                        return r.url.segment("trades"), r
                    }
                    return n.__extends(t, e), t.prototype.forAssetPair = function(e, t) {
                        return e.isNative() ? this.url.setQuery("base_asset_type", "native") : (this.url.setQuery("base_asset_type", e.getAssetType()), this.url.setQuery("base_asset_code", e.getCode()), this.url.setQuery("base_asset_issuer", e.getIssuer())), t.isNative() ? this.url.setQuery("counter_asset_type", "native") : (this.url.setQuery("counter_asset_type", t.getAssetType()), this.url.setQuery("counter_asset_code", t.getCode()), this.url.setQuery("counter_asset_issuer", t.getIssuer())), this
                    }, t.prototype.forOffer = function(e) {
                        return this.url.setQuery("offer_id", e), this
                    }, t.prototype.forType = function(e) {
                        return this.url.setQuery("trade_type", e), this
                    }, t.prototype.forAccount = function(e) {
                        return this.forEndpoint("accounts", e)
                    }, t.prototype.forLiquidityPool = function(e) {
                        return this.forEndpoint("liquidity_pools", e)
                    }, t
                }(r(127).CallBuilder);
            t.TradesCallBuilder = o
        },
        2906: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TransactionCallBuilder = void 0;
            var n = r(82),
                o = r(127),
                i = function(e) {
                    function t(t) {
                        var r = e.call(this, t, "transactions") || this;
                        return r.url.segment("transactions"), r
                    }
                    return n.__extends(t, e), t.prototype.transaction = function(e) {
                        var t = new o.CallBuilder(this.url.clone());
                        return t.filter.push([e]), t
                    }, t.prototype.forAccount = function(e) {
                        return this.forEndpoint("accounts", e)
                    }, t.prototype.forClaimableBalance = function(e) {
                        return this.forEndpoint("claimable_balances", e)
                    }, t.prototype.forLedger = function(e) {
                        return this.forEndpoint("ledgers", e.toString())
                    }, t.prototype.forLiquidityPool = function(e) {
                        return this.forEndpoint("liquidity_pools", e)
                    }, t.prototype.includeFailed = function(e) {
                        return this.url.setQuery("include_failed", e.toString()), this
                    }, t
                }(o.CallBuilder);
            t.TransactionCallBuilder = i
        },
        2907: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FederationServer = t.FEDERATION_RESPONSE_MAX_SIZE = void 0;
            var n = r(82),
                o = n.__importDefault(r(1006)),
                i = r(486),
                a = n.__importDefault(r(389)),
                s = r(584),
                u = r(388),
                l = r(1660);
            t.FEDERATION_RESPONSE_MAX_SIZE = 102400;
            var c = function() {
                function e(e, t, r) {
                    void 0 === r && (r = {}), this.serverURL = a.default(e), this.domain = t;
                    var n = void 0 === r.allowHttp ? s.Config.isAllowHttp() : r.allowHttp;
                    if (this.timeout = void 0 === r.timeout ? s.Config.getTimeout() : r.timeout, "https" !== this.serverURL.protocol() && !n) throw new Error("Cannot connect to insecure federation server")
                }
                return e.resolve = function(t, r) {
                    return void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, (function() {
                        var o, a;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return t.indexOf("*") < 0 ? i.StrKey.isValidEd25519PublicKey(t) ? [2, Promise.resolve({
                                        account_id: t
                                    })] : [2, Promise.reject(new Error("Invalid Account ID"))] : (o = t.split("*"), a = o[1], 2 === o.length && a ? [4, e.createForDomain(a, r)] : [2, Promise.reject(new Error("Invalid Stellar address"))]);
                                case 1:
                                    return [2, n.sent().resolveAddress(t)]
                            }
                        }))
                    }))
                }, e.createForDomain = function(t, r) {
                    return void 0 === r && (r = {}), n.__awaiter(this, void 0, void 0, (function() {
                        var o;
                        return n.__generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, l.StellarTomlResolver.resolve(t, r)];
                                case 1:
                                    return (o = n.sent()).FEDERATION_SERVER ? [2, new e(o.FEDERATION_SERVER, t, r)] : [2, Promise.reject(new Error("stellar.toml does not contain FEDERATION_SERVER field"))]
                            }
                        }))
                    }))
                }, e.prototype.resolveAddress = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var t, r;
                        return n.__generator(this, (function(n) {
                            if (t = e, e.indexOf("*") < 0) {
                                if (!this.domain) return [2, Promise.reject(new Error("Unknown domain. Make sure `address` contains a domain (ex. `bob*stellar.org`) or pass `domain` parameter when instantiating the server object."))];
                                t = e + "*" + this.domain
                            }
                            return r = this.serverURL.query({
                                type: "name",
                                q: t
                            }), [2, this._sendRequest(r)]
                        }))
                    }))
                }, e.prototype.resolveAccountId = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var t;
                        return n.__generator(this, (function(r) {
                            return t = this.serverURL.query({
                                type: "id",
                                q: e
                            }), [2, this._sendRequest(t)]
                        }))
                    }))
                }, e.prototype.resolveTransactionId = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var t;
                        return n.__generator(this, (function(r) {
                            return t = this.serverURL.query({
                                type: "txid",
                                q: e
                            }), [2, this._sendRequest(t)]
                        }))
                    }))
                }, e.prototype._sendRequest = function(e) {
                    return n.__awaiter(this, void 0, void 0, (function() {
                        var r;
                        return n.__generator(this, (function(n) {
                            return r = this.timeout, [2, o.default.get(e.toString(), {
                                maxContentLength: t.FEDERATION_RESPONSE_MAX_SIZE,
                                timeout: r
                            }).then((function(e) {
                                if (void 0 !== e.data.memo && "string" != typeof e.data.memo) throw new Error("memo value should be of type string");
                                return e.data
                            })).catch((function(e) {
                                if (e instanceof Error) {
                                    if (e.message.match(/^maxContentLength size/)) throw new Error("federation response exceeds allowed size of " + t.FEDERATION_RESPONSE_MAX_SIZE);
                                    return Promise.reject(e)
                                }
                                return Promise.reject(new u.BadResponseError("Server query failed. Server responded: " + e.status + " " + e.statusText, e.data))
                            }))]
                        }))
                    }))
                }, e
            }();
            t.FederationServer = c
        },
        2911: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Utils = void 0;
            var n = r(82),
                o = n.__importDefault(r(323)),
                i = n.__importDefault(r(125)),
                a = r(486),
                s = r(388);
            ! function(e) {
                function t(e, t, r, n, o) {
                    var i, l;
                    if (t.startsWith("M")) throw Error("Invalid serverAccountID: multiplexed accounts are not supported.");
                    try {
                        l = new a.Transaction(e, r)
                    } catch (t) {
                        try {
                            l = new a.FeeBumpTransaction(e, r)
                        } catch (e) {
                            throw new s.InvalidSep10ChallengeError("Invalid challenge: unable to deserialize challengeTx transaction string")
                        }
                        throw new s.InvalidSep10ChallengeError("Invalid challenge: expected a Transaction but received a FeeBumpTransaction")
                    }
                    if (0 !== Number.parseInt(l.sequence, 10)) throw new s.InvalidSep10ChallengeError("The transaction sequence number should be zero");
                    if (l.source !== t) throw new s.InvalidSep10ChallengeError("The transaction source account is not equal to the server's account");
                    if (l.operations.length < 1) throw new s.InvalidSep10ChallengeError("The transaction should contain at least one operation");
                    var c = l.operations,
                        f = c[0],
                        h = c.slice(1);
                    if (!f.source) throw new s.InvalidSep10ChallengeError("The transaction's operation should contain a source account");
                    var d, p = f.source,
                        _ = null;
                    if (l.memo.type !== a.MemoNone) {
                        if (p.startsWith("M")) throw new s.InvalidSep10ChallengeError("The transaction has a memo but the client account ID is a muxed account");
                        if (l.memo.type !== a.MemoID) throw new s.InvalidSep10ChallengeError("The transaction's memo must be of type `id`");
                        _ = l.memo.value
                    }
                    if ("manageData" !== f.type) throw new s.InvalidSep10ChallengeError("The transaction's operation type should be 'manageData'");
                    if (l.timeBounds && Number.parseInt(null === (i = l.timeBounds) || void 0 === i ? void 0 : i.maxTime, 10) === a.TimeoutInfinite) throw new s.InvalidSep10ChallengeError("The transaction requires non-infinite timebounds");
                    if (! function(e, t) {
                            void 0 === t && (t = 0);
                            if (!e.timeBounds) return !1;
                            var r = Math.floor(Date.now() / 1e3),
                                n = e.timeBounds,
                                o = n.minTime,
                                i = n.maxTime;
                            return r >= Number.parseInt(o, 10) - t && r <= Number.parseInt(i, 10) + t
                        }(l, 300)) throw new s.InvalidSep10ChallengeError("The transaction has expired");
                    if (void 0 === f.value) throw new s.InvalidSep10ChallengeError("The transaction's operation values should not be null");
                    if (!f.value) throw new s.InvalidSep10ChallengeError("The transaction's operation value should not be null");
                    if (48 !== Buffer.from(f.value.toString(), "base64").length) throw new s.InvalidSep10ChallengeError("The transaction's operation value should be a 64 bytes base64 random string");
                    if (!n) throw new s.InvalidSep10ChallengeError("Invalid homeDomains: a home domain must be provided for verification");
                    if ("string" == typeof n) n + " auth" === f.name && (d = n);
                    else {
                        if (!Array.isArray(n)) throw new s.InvalidSep10ChallengeError("Invalid homeDomains: homeDomains type is " + typeof n + " but should be a string or an array");
                        d = n.find((function(e) {
                            return e + " auth" === f.name
                        }))
                    }
                    if (!d) throw new s.InvalidSep10ChallengeError("Invalid homeDomains: the transaction's operation key name does not match the expected home domain");
                    for (var v = 0, y = h; v < y.length; v++) {
                        var g = y[v];
                        if ("manageData" !== g.type) throw new s.InvalidSep10ChallengeError("The transaction has operations that are not of type 'manageData'");
                        if (g.source !== t && "client_domain" !== g.name) throw new s.InvalidSep10ChallengeError("The transaction has operations that are unrecognized");
                        if ("web_auth_domain" === g.name) {
                            if (void 0 === g.value) throw new s.InvalidSep10ChallengeError("'web_auth_domain' operation value should not be null");
                            if (g.value.compare(Buffer.from(o))) throw new s.InvalidSep10ChallengeError("'web_auth_domain' operation value does not match " + o)
                        }
                    }
                    if (!u(l, t)) throw new s.InvalidSep10ChallengeError("Transaction not signed by server: '" + t + "'");
                    return {
                        tx: l,
                        clientAccountID: p,
                        matchedHomeDomain: d,
                        memo: _
                    }
                }

                function r(e, r, o, i, u, c) {
                    var f, h = t(e, r, o, u, c).tx;
                    try {
                        f = a.Keypair.fromPublicKey(r)
                    } catch (e) {
                        throw new Error("Couldn't infer keypair from the provided 'serverAccountID': " + e.message)
                    }
                    for (var d, p = new Set, _ = 0, v = i; _ < v.length; _++) {
                        (C = v[_]) !== f.publicKey() && ("G" === C.charAt(0) && p.add(C))
                    }
                    if (0 === p.size) throw new s.InvalidSep10ChallengeError("No verifiable client signers provided, at least one G... address must be provided");
                    for (var y = 0, g = h.operations; y < g.length; y++) {
                        var m = g[y];
                        if ("manageData" === m.type && "client_domain" === m.name) {
                            if (d) throw new s.InvalidSep10ChallengeError("Found more than one client_domain operation");
                            d = m.source
                        }
                    }
                    var w = n.__spreadArrays([f.publicKey()], Array.from(p));
                    d && w.push(d);
                    for (var b = l(h, w), E = !1, S = !1, T = 0, A = b; T < A.length; T++) {
                        var C;
                        (C = A[T]) === f.publicKey() && (E = !0), C === d && (S = !0)
                    }
                    if (!E) throw new s.InvalidSep10ChallengeError("Transaction not signed by server: '" + f.publicKey() + "'");
                    if (d && !S) throw new s.InvalidSep10ChallengeError("Transaction not signed by the source account of the 'client_domain' ManageData operation");
                    if (1 === b.length) throw new s.InvalidSep10ChallengeError("None of the given signers match the transaction signatures");
                    if (b.length !== h.signatures.length) throw new s.InvalidSep10ChallengeError("Transaction has unrecognized signatures");
                    return b.splice(b.indexOf(f.publicKey()), 1), d && b.splice(b.indexOf(d), 1), b
                }

                function u(e, t) {
                    return 0 !== l(e, [t]).length
                }

                function l(e, t) {
                    for (var r = e.hash(), n = o.default(e.signatures), i = new Set, u = 0, l = t; u < l.length; u++) {
                        var c = l[u];
                        if (0 === n.length) break;
                        var f = void 0;
                        try {
                            f = a.Keypair.fromPublicKey(c)
                        } catch (e) {
                            throw new s.InvalidSep10ChallengeError("Signer is not a valid address: " + e.message)
                        }
                        for (var h = 0; h < n.length; h++) {
                            var d = n[h];
                            if (d.hint().equals(f.signatureHint()) && f.verify(r, d.signature())) {
                                i.add(c), n.splice(h, 1);
                                break
                            }
                        }
                    }
                    return Array.from(i)
                }
                e.buildChallengeTx = function(e, t, r, n, o, s, u, l, c) {
                    if (void 0 === n && (n = 300), void 0 === u && (u = null), void 0 === l && (l = null), void 0 === c && (c = null), t.startsWith("M") && u) throw Error("memo cannot be used if clientAccountID is a muxed account");
                    var f = new a.Account(e.publicKey(), "-1"),
                        h = Math.floor(Date.now() / 1e3),
                        d = i.default(48).toString("base64"),
                        p = new a.TransactionBuilder(f, {
                            fee: a.BASE_FEE,
                            networkPassphrase: o,
                            timebounds: {
                                minTime: h,
                                maxTime: h + n
                            }
                        }).addOperation(a.Operation.manageData({
                            name: r + " auth",
                            value: d,
                            source: t
                        })).addOperation(a.Operation.manageData({
                            name: "web_auth_domain",
                            value: s,
                            source: f.accountId()
                        }));
                    if (l) {
                        if (!c) throw Error("clientSigningKey is required if clientDomain is provided");
                        p.addOperation(a.Operation.manageData({
                            name: "client_domain",
                            value: l,
                            source: c
                        }))
                    }
                    u && p.addMemo(a.Memo.id(u));
                    var _ = p.build();
                    return _.sign(e), _.toEnvelope().toXDR("base64").toString()
                }, e.readChallengeTx = t, e.verifyChallengeTxThreshold = function(e, t, n, o, i, a, u) {
                    for (var l, c = r(e, t, n, i.map((function(e) {
                            return e.key
                        })), a, u), f = 0, h = function(e) {
                            var t = (null === (l = i.find((function(t) {
                                return t.key === e
                            }))) || void 0 === l ? void 0 : l.weight) || 0;
                            f += t
                        }, d = 0, p = c; d < p.length; d++) {
                        h(p[d])
                    }
                    if (f < o) throw new s.InvalidSep10ChallengeError("signers with weight " + f + " do not meet threshold " + o + '"');
                    return c
                }, e.verifyChallengeTxSigners = r, e.verifyTxSignedBy = u, e.gatherTxSigners = l
            }(t.Utils || (t.Utils = {}))
        },
        388: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AccountRequiresMemoError = t.InvalidSep10ChallengeError = t.BadResponseError = t.BadRequestError = t.NotFoundError = t.NetworkError = void 0;
            var n = r(82),
                o = function(e) {
                    function t(r, n) {
                        var o = this,
                            i = this.constructor.prototype;
                        return (o = e.call(this, r) || this).__proto__ = i, o.constructor = t, o.response = n, o
                    }
                    return n.__extends(t, e), t.prototype.getResponse = function() {
                        return this.response
                    }, t
                }(Error);
            t.NetworkError = o;
            var i = function(e) {
                function t(r, n) {
                    var o = this,
                        i = this.constructor.prototype;
                    return (o = e.call(this, r, n) || this).__proto__ = i, o.constructor = t, o.name = "NotFoundError", o
                }
                return n.__extends(t, e), t
            }(o);
            t.NotFoundError = i;
            var a = function(e) {
                function t(r, n) {
                    var o = this,
                        i = this.constructor.prototype;
                    return (o = e.call(this, r, n) || this).__proto__ = i, o.constructor = t, o.name = "BadRequestError", o
                }
                return n.__extends(t, e), t
            }(o);
            t.BadRequestError = a;
            var s = function(e) {
                function t(r, n) {
                    var o = this,
                        i = this.constructor.prototype;
                    return (o = e.call(this, r, n) || this).__proto__ = i, o.constructor = t, o.name = "BadResponseError", o
                }
                return n.__extends(t, e), t
            }(o);
            t.BadResponseError = s;
            var u = function(e) {
                function t(r) {
                    var n = this,
                        o = this.constructor.prototype;
                    return (n = e.call(this, r) || this).__proto__ = o, n.constructor = t, n.name = "InvalidSep10ChallengeError", n
                }
                return n.__extends(t, e), t
            }(Error);
            t.InvalidSep10ChallengeError = u;
            var l = function(e) {
                function t(r, n, o) {
                    var i = this,
                        a = this.constructor.prototype;
                    return (i = e.call(this, r) || this).__proto__ = a, i.constructor = t, i.name = "AccountRequiresMemoError", i.accountId = n, i.operationIndex = o, i
                }
                return n.__extends(t, e), t
            }(Error);
            t.AccountRequiresMemoError = l
        },
        584: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Config = void 0;
            var n = r(82).__importDefault(r(323)),
                o = {
                    allowHttp: !1,
                    timeout: 0
                },
                i = n.default(o),
                a = function() {
                    function e() {}
                    return e.setAllowHttp = function(e) {
                        i.allowHttp = e
                    }, e.setTimeout = function(e) {
                        i.timeout = e
                    }, e.isAllowHttp = function() {
                        return i.allowHttp
                    }, e.getTimeout = function() {
                        return i.timeout
                    }, e.setDefault = function() {
                        i = Object.assign({}, o)
                    }, e
                }();
            t.Config = a
        },
        602: function(e, t, r) {
            ! function(e) {
                "use strict";
                var t = function(e) {
                        var t, r = new Float64Array(16);
                        if (e)
                            for (t = 0; t < e.length; t++) r[t] = e[t];
                        return r
                    },
                    n = function() {
                        throw new Error("no PRNG")
                    },
                    o = new Uint8Array(16),
                    i = new Uint8Array(32);
                i[0] = 9;
                var a = t(),
                    s = t([1]),
                    u = t([56129, 1]),
                    l = t([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                    c = t([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                    f = t([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                    h = t([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                    d = t([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                function p(e, t, r, n) {
                    e[t] = r >> 24 & 255, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r, e[t + 4] = n >> 24 & 255, e[t + 5] = n >> 16 & 255, e[t + 6] = n >> 8 & 255, e[t + 7] = 255 & n
                }

                function _(e, t, r, n, o) {
                    var i, a = 0;
                    for (i = 0; i < o; i++) a |= e[t + i] ^ r[n + i];
                    return (1 & a - 1 >>> 8) - 1
                }

                function v(e, t, r, n) {
                    return _(e, t, r, n, 16)
                }

                function y(e, t, r, n) {
                    return _(e, t, r, n, 32)
                }

                function g(e, t, r, n) {
                    ! function(e, t, r, n) {
                        for (var o, i = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, u = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, l = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, c = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, f = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, h = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, d = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, p = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, _ = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, v = 255 & r[16] | (255 & r[17]) << 8 | (255 & r[18]) << 16 | (255 & r[19]) << 24, y = 255 & r[20] | (255 & r[21]) << 8 | (255 & r[22]) << 16 | (255 & r[23]) << 24, g = 255 & r[24] | (255 & r[25]) << 8 | (255 & r[26]) << 16 | (255 & r[27]) << 24, m = 255 & r[28] | (255 & r[29]) << 8 | (255 & r[30]) << 16 | (255 & r[31]) << 24, w = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, b = i, E = a, S = s, T = u, A = l, C = c, R = f, B = h, I = d, O = p, x = _, M = v, P = y, U = g, L = m, N = w, k = 0; k < 20; k += 2) b ^= (o = (P ^= (o = (I ^= (o = (A ^= (o = b + P | 0) << 7 | o >>> 25) + b | 0) << 9 | o >>> 23) + A | 0) << 13 | o >>> 19) + I | 0) << 18 | o >>> 14, C ^= (o = (E ^= (o = (U ^= (o = (O ^= (o = C + E | 0) << 7 | o >>> 25) + C | 0) << 9 | o >>> 23) + O | 0) << 13 | o >>> 19) + U | 0) << 18 | o >>> 14, x ^= (o = (R ^= (o = (S ^= (o = (L ^= (o = x + R | 0) << 7 | o >>> 25) + x | 0) << 9 | o >>> 23) + L | 0) << 13 | o >>> 19) + S | 0) << 18 | o >>> 14, N ^= (o = (M ^= (o = (B ^= (o = (T ^= (o = N + M | 0) << 7 | o >>> 25) + N | 0) << 9 | o >>> 23) + T | 0) << 13 | o >>> 19) + B | 0) << 18 | o >>> 14, b ^= (o = (T ^= (o = (S ^= (o = (E ^= (o = b + T | 0) << 7 | o >>> 25) + b | 0) << 9 | o >>> 23) + E | 0) << 13 | o >>> 19) + S | 0) << 18 | o >>> 14, C ^= (o = (A ^= (o = (B ^= (o = (R ^= (o = C + A | 0) << 7 | o >>> 25) + C | 0) << 9 | o >>> 23) + R | 0) << 13 | o >>> 19) + B | 0) << 18 | o >>> 14, x ^= (o = (O ^= (o = (I ^= (o = (M ^= (o = x + O | 0) << 7 | o >>> 25) + x | 0) << 9 | o >>> 23) + M | 0) << 13 | o >>> 19) + I | 0) << 18 | o >>> 14, N ^= (o = (L ^= (o = (U ^= (o = (P ^= (o = N + L | 0) << 7 | o >>> 25) + N | 0) << 9 | o >>> 23) + P | 0) << 13 | o >>> 19) + U | 0) << 18 | o >>> 14;
                        b = b + i | 0, E = E + a | 0, S = S + s | 0, T = T + u | 0, A = A + l | 0, C = C + c | 0, R = R + f | 0, B = B + h | 0, I = I + d | 0, O = O + p | 0, x = x + _ | 0, M = M + v | 0, P = P + y | 0, U = U + g | 0, L = L + m | 0, N = N + w | 0, e[0] = b >>> 0 & 255, e[1] = b >>> 8 & 255, e[2] = b >>> 16 & 255, e[3] = b >>> 24 & 255, e[4] = E >>> 0 & 255, e[5] = E >>> 8 & 255, e[6] = E >>> 16 & 255, e[7] = E >>> 24 & 255, e[8] = S >>> 0 & 255, e[9] = S >>> 8 & 255, e[10] = S >>> 16 & 255, e[11] = S >>> 24 & 255, e[12] = T >>> 0 & 255, e[13] = T >>> 8 & 255, e[14] = T >>> 16 & 255, e[15] = T >>> 24 & 255, e[16] = A >>> 0 & 255, e[17] = A >>> 8 & 255, e[18] = A >>> 16 & 255, e[19] = A >>> 24 & 255, e[20] = C >>> 0 & 255, e[21] = C >>> 8 & 255, e[22] = C >>> 16 & 255, e[23] = C >>> 24 & 255, e[24] = R >>> 0 & 255, e[25] = R >>> 8 & 255, e[26] = R >>> 16 & 255, e[27] = R >>> 24 & 255, e[28] = B >>> 0 & 255, e[29] = B >>> 8 & 255, e[30] = B >>> 16 & 255, e[31] = B >>> 24 & 255, e[32] = I >>> 0 & 255, e[33] = I >>> 8 & 255, e[34] = I >>> 16 & 255, e[35] = I >>> 24 & 255, e[36] = O >>> 0 & 255, e[37] = O >>> 8 & 255, e[38] = O >>> 16 & 255, e[39] = O >>> 24 & 255, e[40] = x >>> 0 & 255, e[41] = x >>> 8 & 255, e[42] = x >>> 16 & 255, e[43] = x >>> 24 & 255, e[44] = M >>> 0 & 255, e[45] = M >>> 8 & 255, e[46] = M >>> 16 & 255, e[47] = M >>> 24 & 255, e[48] = P >>> 0 & 255, e[49] = P >>> 8 & 255, e[50] = P >>> 16 & 255, e[51] = P >>> 24 & 255, e[52] = U >>> 0 & 255, e[53] = U >>> 8 & 255, e[54] = U >>> 16 & 255, e[55] = U >>> 24 & 255, e[56] = L >>> 0 & 255, e[57] = L >>> 8 & 255, e[58] = L >>> 16 & 255, e[59] = L >>> 24 & 255, e[60] = N >>> 0 & 255, e[61] = N >>> 8 & 255, e[62] = N >>> 16 & 255, e[63] = N >>> 24 & 255
                    }(e, t, r, n)
                }

                function m(e, t, r, n) {
                    ! function(e, t, r, n) {
                        for (var o, i = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, u = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, l = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, c = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, f = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, h = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, d = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, p = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, _ = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, v = 255 & r[16] | (255 & r[17]) << 8 | (255 & r[18]) << 16 | (255 & r[19]) << 24, y = 255 & r[20] | (255 & r[21]) << 8 | (255 & r[22]) << 16 | (255 & r[23]) << 24, g = 255 & r[24] | (255 & r[25]) << 8 | (255 & r[26]) << 16 | (255 & r[27]) << 24, m = 255 & r[28] | (255 & r[29]) << 8 | (255 & r[30]) << 16 | (255 & r[31]) << 24, w = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, b = 0; b < 20; b += 2) i ^= (o = (y ^= (o = (d ^= (o = (l ^= (o = i + y | 0) << 7 | o >>> 25) + i | 0) << 9 | o >>> 23) + l | 0) << 13 | o >>> 19) + d | 0) << 18 | o >>> 14, c ^= (o = (a ^= (o = (g ^= (o = (p ^= (o = c + a | 0) << 7 | o >>> 25) + c | 0) << 9 | o >>> 23) + p | 0) << 13 | o >>> 19) + g | 0) << 18 | o >>> 14, _ ^= (o = (f ^= (o = (s ^= (o = (m ^= (o = _ + f | 0) << 7 | o >>> 25) + _ | 0) << 9 | o >>> 23) + m | 0) << 13 | o >>> 19) + s | 0) << 18 | o >>> 14, w ^= (o = (v ^= (o = (h ^= (o = (u ^= (o = w + v | 0) << 7 | o >>> 25) + w | 0) << 9 | o >>> 23) + u | 0) << 13 | o >>> 19) + h | 0) << 18 | o >>> 14, i ^= (o = (u ^= (o = (s ^= (o = (a ^= (o = i + u | 0) << 7 | o >>> 25) + i | 0) << 9 | o >>> 23) + a | 0) << 13 | o >>> 19) + s | 0) << 18 | o >>> 14, c ^= (o = (l ^= (o = (h ^= (o = (f ^= (o = c + l | 0) << 7 | o >>> 25) + c | 0) << 9 | o >>> 23) + f | 0) << 13 | o >>> 19) + h | 0) << 18 | o >>> 14, _ ^= (o = (p ^= (o = (d ^= (o = (v ^= (o = _ + p | 0) << 7 | o >>> 25) + _ | 0) << 9 | o >>> 23) + v | 0) << 13 | o >>> 19) + d | 0) << 18 | o >>> 14, w ^= (o = (m ^= (o = (g ^= (o = (y ^= (o = w + m | 0) << 7 | o >>> 25) + w | 0) << 9 | o >>> 23) + y | 0) << 13 | o >>> 19) + g | 0) << 18 | o >>> 14;
                        e[0] = i >>> 0 & 255, e[1] = i >>> 8 & 255, e[2] = i >>> 16 & 255, e[3] = i >>> 24 & 255, e[4] = c >>> 0 & 255, e[5] = c >>> 8 & 255, e[6] = c >>> 16 & 255, e[7] = c >>> 24 & 255, e[8] = _ >>> 0 & 255, e[9] = _ >>> 8 & 255, e[10] = _ >>> 16 & 255, e[11] = _ >>> 24 & 255, e[12] = w >>> 0 & 255, e[13] = w >>> 8 & 255, e[14] = w >>> 16 & 255, e[15] = w >>> 24 & 255, e[16] = f >>> 0 & 255, e[17] = f >>> 8 & 255, e[18] = f >>> 16 & 255, e[19] = f >>> 24 & 255, e[20] = h >>> 0 & 255, e[21] = h >>> 8 & 255, e[22] = h >>> 16 & 255, e[23] = h >>> 24 & 255, e[24] = d >>> 0 & 255, e[25] = d >>> 8 & 255, e[26] = d >>> 16 & 255, e[27] = d >>> 24 & 255, e[28] = p >>> 0 & 255, e[29] = p >>> 8 & 255, e[30] = p >>> 16 & 255, e[31] = p >>> 24 & 255
                    }(e, t, r, n)
                }
                var w = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

                function b(e, t, r, n, o, i, a) {
                    var s, u, l = new Uint8Array(16),
                        c = new Uint8Array(64);
                    for (u = 0; u < 16; u++) l[u] = 0;
                    for (u = 0; u < 8; u++) l[u] = i[u];
                    for (; o >= 64;) {
                        for (g(c, l, a, w), u = 0; u < 64; u++) e[t + u] = r[n + u] ^ c[u];
                        for (s = 1, u = 8; u < 16; u++) s = s + (255 & l[u]) | 0, l[u] = 255 & s, s >>>= 8;
                        o -= 64, t += 64, n += 64
                    }
                    if (o > 0)
                        for (g(c, l, a, w), u = 0; u < o; u++) e[t + u] = r[n + u] ^ c[u];
                    return 0
                }

                function E(e, t, r, n, o) {
                    var i, a, s = new Uint8Array(16),
                        u = new Uint8Array(64);
                    for (a = 0; a < 16; a++) s[a] = 0;
                    for (a = 0; a < 8; a++) s[a] = n[a];
                    for (; r >= 64;) {
                        for (g(u, s, o, w), a = 0; a < 64; a++) e[t + a] = u[a];
                        for (i = 1, a = 8; a < 16; a++) i = i + (255 & s[a]) | 0, s[a] = 255 & i, i >>>= 8;
                        r -= 64, t += 64
                    }
                    if (r > 0)
                        for (g(u, s, o, w), a = 0; a < r; a++) e[t + a] = u[a];
                    return 0
                }

                function S(e, t, r, n, o) {
                    var i = new Uint8Array(32);
                    m(i, n, o, w);
                    for (var a = new Uint8Array(8), s = 0; s < 8; s++) a[s] = n[s + 16];
                    return E(e, t, r, a, i)
                }

                function T(e, t, r, n, o, i, a) {
                    var s = new Uint8Array(32);
                    m(s, i, a, w);
                    for (var u = new Uint8Array(8), l = 0; l < 8; l++) u[l] = i[l + 16];
                    return b(e, t, r, n, o, u, s)
                }
                var A = function(e) {
                    var t, r, n, o, i, a, s, u;
                    this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, t = 255 & e[0] | (255 & e[1]) << 8, this.r[0] = 8191 & t, r = 255 & e[2] | (255 & e[3]) << 8, this.r[1] = 8191 & (t >>> 13 | r << 3), n = 255 & e[4] | (255 & e[5]) << 8, this.r[2] = 7939 & (r >>> 10 | n << 6), o = 255 & e[6] | (255 & e[7]) << 8, this.r[3] = 8191 & (n >>> 7 | o << 9), i = 255 & e[8] | (255 & e[9]) << 8, this.r[4] = 255 & (o >>> 4 | i << 12), this.r[5] = i >>> 1 & 8190, a = 255 & e[10] | (255 & e[11]) << 8, this.r[6] = 8191 & (i >>> 14 | a << 2), s = 255 & e[12] | (255 & e[13]) << 8, this.r[7] = 8065 & (a >>> 11 | s << 5), u = 255 & e[14] | (255 & e[15]) << 8, this.r[8] = 8191 & (s >>> 8 | u << 8), this.r[9] = u >>> 5 & 127, this.pad[0] = 255 & e[16] | (255 & e[17]) << 8, this.pad[1] = 255 & e[18] | (255 & e[19]) << 8, this.pad[2] = 255 & e[20] | (255 & e[21]) << 8, this.pad[3] = 255 & e[22] | (255 & e[23]) << 8, this.pad[4] = 255 & e[24] | (255 & e[25]) << 8, this.pad[5] = 255 & e[26] | (255 & e[27]) << 8, this.pad[6] = 255 & e[28] | (255 & e[29]) << 8, this.pad[7] = 255 & e[30] | (255 & e[31]) << 8
                };

                function C(e, t, r, n, o, i) {
                    var a = new A(i);
                    return a.update(r, n, o), a.finish(e, t), 0
                }

                function R(e, t, r, n, o, i) {
                    var a = new Uint8Array(16);
                    return C(a, 0, r, n, o, i), v(e, t, a, 0)
                }

                function B(e, t, r, n, o) {
                    var i;
                    if (r < 32) return -1;
                    for (T(e, 0, t, 0, r, n, o), C(e, 16, e, 32, r - 32, e), i = 0; i < 16; i++) e[i] = 0;
                    return 0
                }

                function I(e, t, r, n, o) {
                    var i, a = new Uint8Array(32);
                    if (r < 32) return -1;
                    if (S(a, 0, 32, n, o), 0 !== R(t, 16, t, 32, r - 32, a)) return -1;
                    for (T(e, 0, t, 0, r, n, o), i = 0; i < 32; i++) e[i] = 0;
                    return 0
                }

                function O(e, t) {
                    var r;
                    for (r = 0; r < 16; r++) e[r] = 0 | t[r]
                }

                function x(e) {
                    var t, r, n = 1;
                    for (t = 0; t < 16; t++) r = e[t] + n + 65535, n = Math.floor(r / 65536), e[t] = r - 65536 * n;
                    e[0] += n - 1 + 37 * (n - 1)
                }

                function M(e, t, r) {
                    for (var n, o = ~(r - 1), i = 0; i < 16; i++) n = o & (e[i] ^ t[i]), e[i] ^= n, t[i] ^= n
                }

                function P(e, r) {
                    var n, o, i, a = t(),
                        s = t();
                    for (n = 0; n < 16; n++) s[n] = r[n];
                    for (x(s), x(s), x(s), o = 0; o < 2; o++) {
                        for (a[0] = s[0] - 65517, n = 1; n < 15; n++) a[n] = s[n] - 65535 - (a[n - 1] >> 16 & 1), a[n - 1] &= 65535;
                        a[15] = s[15] - 32767 - (a[14] >> 16 & 1), i = a[15] >> 16 & 1, a[14] &= 65535, M(s, a, 1 - i)
                    }
                    for (n = 0; n < 16; n++) e[2 * n] = 255 & s[n], e[2 * n + 1] = s[n] >> 8
                }

                function U(e, t) {
                    var r = new Uint8Array(32),
                        n = new Uint8Array(32);
                    return P(r, e), P(n, t), y(r, 0, n, 0)
                }

                function L(e) {
                    var t = new Uint8Array(32);
                    return P(t, e), 1 & t[0]
                }

                function N(e, t) {
                    var r;
                    for (r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
                    e[15] &= 32767
                }

                function k(e, t, r) {
                    for (var n = 0; n < 16; n++) e[n] = t[n] + r[n]
                }

                function q(e, t, r) {
                    for (var n = 0; n < 16; n++) e[n] = t[n] - r[n]
                }

                function D(e, t, r) {
                    var n, o, i = 0,
                        a = 0,
                        s = 0,
                        u = 0,
                        l = 0,
                        c = 0,
                        f = 0,
                        h = 0,
                        d = 0,
                        p = 0,
                        _ = 0,
                        v = 0,
                        y = 0,
                        g = 0,
                        m = 0,
                        w = 0,
                        b = 0,
                        E = 0,
                        S = 0,
                        T = 0,
                        A = 0,
                        C = 0,
                        R = 0,
                        B = 0,
                        I = 0,
                        O = 0,
                        x = 0,
                        M = 0,
                        P = 0,
                        U = 0,
                        L = 0,
                        N = r[0],
                        k = r[1],
                        q = r[2],
                        D = r[3],
                        Q = r[4],
                        F = r[5],
                        j = r[6],
                        K = r[7],
                        X = r[8],
                        z = r[9],
                        Y = r[10],
                        H = r[11],
                        V = r[12],
                        Z = r[13],
                        G = r[14],
                        W = r[15];
                    i += (n = t[0]) * N, a += n * k, s += n * q, u += n * D, l += n * Q, c += n * F, f += n * j, h += n * K, d += n * X, p += n * z, _ += n * Y, v += n * H, y += n * V, g += n * Z, m += n * G, w += n * W, a += (n = t[1]) * N, s += n * k, u += n * q, l += n * D, c += n * Q, f += n * F, h += n * j, d += n * K, p += n * X, _ += n * z, v += n * Y, y += n * H, g += n * V, m += n * Z, w += n * G, b += n * W, s += (n = t[2]) * N, u += n * k, l += n * q, c += n * D, f += n * Q, h += n * F, d += n * j, p += n * K, _ += n * X, v += n * z, y += n * Y, g += n * H, m += n * V, w += n * Z, b += n * G, E += n * W, u += (n = t[3]) * N, l += n * k, c += n * q, f += n * D, h += n * Q, d += n * F, p += n * j, _ += n * K, v += n * X, y += n * z, g += n * Y, m += n * H, w += n * V, b += n * Z, E += n * G, S += n * W, l += (n = t[4]) * N, c += n * k, f += n * q, h += n * D, d += n * Q, p += n * F, _ += n * j, v += n * K, y += n * X, g += n * z, m += n * Y, w += n * H, b += n * V, E += n * Z, S += n * G, T += n * W, c += (n = t[5]) * N, f += n * k, h += n * q, d += n * D, p += n * Q, _ += n * F, v += n * j, y += n * K, g += n * X, m += n * z, w += n * Y, b += n * H, E += n * V, S += n * Z, T += n * G, A += n * W, f += (n = t[6]) * N, h += n * k, d += n * q, p += n * D, _ += n * Q, v += n * F, y += n * j, g += n * K, m += n * X, w += n * z, b += n * Y, E += n * H, S += n * V, T += n * Z, A += n * G, C += n * W, h += (n = t[7]) * N, d += n * k, p += n * q, _ += n * D, v += n * Q, y += n * F, g += n * j, m += n * K, w += n * X, b += n * z, E += n * Y, S += n * H, T += n * V, A += n * Z, C += n * G, R += n * W, d += (n = t[8]) * N, p += n * k, _ += n * q, v += n * D, y += n * Q, g += n * F, m += n * j, w += n * K, b += n * X, E += n * z, S += n * Y, T += n * H, A += n * V, C += n * Z, R += n * G, B += n * W, p += (n = t[9]) * N, _ += n * k, v += n * q, y += n * D, g += n * Q, m += n * F, w += n * j, b += n * K, E += n * X, S += n * z, T += n * Y, A += n * H, C += n * V, R += n * Z, B += n * G, I += n * W, _ += (n = t[10]) * N, v += n * k, y += n * q, g += n * D, m += n * Q, w += n * F, b += n * j, E += n * K, S += n * X, T += n * z, A += n * Y, C += n * H, R += n * V, B += n * Z, I += n * G, O += n * W, v += (n = t[11]) * N, y += n * k, g += n * q, m += n * D, w += n * Q, b += n * F, E += n * j, S += n * K, T += n * X, A += n * z, C += n * Y, R += n * H, B += n * V, I += n * Z, O += n * G, x += n * W, y += (n = t[12]) * N, g += n * k, m += n * q, w += n * D, b += n * Q, E += n * F, S += n * j, T += n * K, A += n * X, C += n * z, R += n * Y, B += n * H, I += n * V, O += n * Z, x += n * G, M += n * W, g += (n = t[13]) * N, m += n * k, w += n * q, b += n * D, E += n * Q, S += n * F, T += n * j, A += n * K, C += n * X, R += n * z, B += n * Y, I += n * H, O += n * V, x += n * Z, M += n * G, P += n * W, m += (n = t[14]) * N, w += n * k, b += n * q, E += n * D, S += n * Q, T += n * F, A += n * j, C += n * K, R += n * X, B += n * z, I += n * Y, O += n * H, x += n * V, M += n * Z, P += n * G, U += n * W, w += (n = t[15]) * N, a += 38 * (E += n * q), s += 38 * (S += n * D), u += 38 * (T += n * Q), l += 38 * (A += n * F), c += 38 * (C += n * j), f += 38 * (R += n * K), h += 38 * (B += n * X), d += 38 * (I += n * z), p += 38 * (O += n * Y), _ += 38 * (x += n * H), v += 38 * (M += n * V), y += 38 * (P += n * Z), g += 38 * (U += n * G), m += 38 * (L += n * W), i = (n = (i += 38 * (b += n * k)) + (o = 1) + 65535) - 65536 * (o = Math.floor(n / 65536)), a = (n = a + o + 65535) - 65536 * (o = Math.floor(n / 65536)), s = (n = s + o + 65535) - 65536 * (o = Math.floor(n / 65536)), u = (n = u + o + 65535) - 65536 * (o = Math.floor(n / 65536)), l = (n = l + o + 65535) - 65536 * (o = Math.floor(n / 65536)), c = (n = c + o + 65535) - 65536 * (o = Math.floor(n / 65536)), f = (n = f + o + 65535) - 65536 * (o = Math.floor(n / 65536)), h = (n = h + o + 65535) - 65536 * (o = Math.floor(n / 65536)), d = (n = d + o + 65535) - 65536 * (o = Math.floor(n / 65536)), p = (n = p + o + 65535) - 65536 * (o = Math.floor(n / 65536)), _ = (n = _ + o + 65535) - 65536 * (o = Math.floor(n / 65536)), v = (n = v + o + 65535) - 65536 * (o = Math.floor(n / 65536)), y = (n = y + o + 65535) - 65536 * (o = Math.floor(n / 65536)), g = (n = g + o + 65535) - 65536 * (o = Math.floor(n / 65536)), m = (n = m + o + 65535) - 65536 * (o = Math.floor(n / 65536)), w = (n = w + o + 65535) - 65536 * (o = Math.floor(n / 65536)), i = (n = (i += o - 1 + 37 * (o - 1)) + (o = 1) + 65535) - 65536 * (o = Math.floor(n / 65536)), a = (n = a + o + 65535) - 65536 * (o = Math.floor(n / 65536)), s = (n = s + o + 65535) - 65536 * (o = Math.floor(n / 65536)), u = (n = u + o + 65535) - 65536 * (o = Math.floor(n / 65536)), l = (n = l + o + 65535) - 65536 * (o = Math.floor(n / 65536)), c = (n = c + o + 65535) - 65536 * (o = Math.floor(n / 65536)), f = (n = f + o + 65535) - 65536 * (o = Math.floor(n / 65536)), h = (n = h + o + 65535) - 65536 * (o = Math.floor(n / 65536)), d = (n = d + o + 65535) - 65536 * (o = Math.floor(n / 65536)), p = (n = p + o + 65535) - 65536 * (o = Math.floor(n / 65536)), _ = (n = _ + o + 65535) - 65536 * (o = Math.floor(n / 65536)), v = (n = v + o + 65535) - 65536 * (o = Math.floor(n / 65536)), y = (n = y + o + 65535) - 65536 * (o = Math.floor(n / 65536)), g = (n = g + o + 65535) - 65536 * (o = Math.floor(n / 65536)), m = (n = m + o + 65535) - 65536 * (o = Math.floor(n / 65536)), w = (n = w + o + 65535) - 65536 * (o = Math.floor(n / 65536)), i += o - 1 + 37 * (o - 1), e[0] = i, e[1] = a, e[2] = s, e[3] = u, e[4] = l, e[5] = c, e[6] = f, e[7] = h, e[8] = d, e[9] = p, e[10] = _, e[11] = v, e[12] = y, e[13] = g, e[14] = m, e[15] = w
                }

                function Q(e, t) {
                    D(e, t, t)
                }

                function F(e, r) {
                    var n, o = t();
                    for (n = 0; n < 16; n++) o[n] = r[n];
                    for (n = 253; n >= 0; n--) Q(o, o), 2 !== n && 4 !== n && D(o, o, r);
                    for (n = 0; n < 16; n++) e[n] = o[n]
                }

                function j(e, r, n) {
                    var o, i, a = new Uint8Array(32),
                        s = new Float64Array(80),
                        l = t(),
                        c = t(),
                        f = t(),
                        h = t(),
                        d = t(),
                        p = t();
                    for (i = 0; i < 31; i++) a[i] = r[i];
                    for (a[31] = 127 & r[31] | 64, a[0] &= 248, N(s, n), i = 0; i < 16; i++) c[i] = s[i], h[i] = l[i] = f[i] = 0;
                    for (l[0] = h[0] = 1, i = 254; i >= 0; --i) M(l, c, o = a[i >>> 3] >>> (7 & i) & 1), M(f, h, o), k(d, l, f), q(l, l, f), k(f, c, h), q(c, c, h), Q(h, d), Q(p, l), D(l, f, l), D(f, c, d), k(d, l, f), q(l, l, f), Q(c, l), q(f, h, p), D(l, f, u), k(l, l, h), D(f, f, l), D(l, h, p), D(h, c, s), Q(c, d), M(l, c, o), M(f, h, o);
                    for (i = 0; i < 16; i++) s[i + 16] = l[i], s[i + 32] = f[i], s[i + 48] = c[i], s[i + 64] = h[i];
                    var _ = s.subarray(32),
                        v = s.subarray(16);
                    return F(_, _), D(v, v, _), P(e, v), 0
                }

                function K(e, t) {
                    return j(e, t, i)
                }

                function X(e, t) {
                    return n(t, 32), K(e, t)
                }

                function z(e, t, r) {
                    var n = new Uint8Array(32);
                    return j(n, r, t), m(e, o, n, w)
                }
                A.prototype.blocks = function(e, t, r) {
                    for (var n, o, i, a, s, u, l, c, f, h, d, p, _, v, y, g, m, w, b, E = this.fin ? 0 : 2048, S = this.h[0], T = this.h[1], A = this.h[2], C = this.h[3], R = this.h[4], B = this.h[5], I = this.h[6], O = this.h[7], x = this.h[8], M = this.h[9], P = this.r[0], U = this.r[1], L = this.r[2], N = this.r[3], k = this.r[4], q = this.r[5], D = this.r[6], Q = this.r[7], F = this.r[8], j = this.r[9]; r >= 16;) h = f = 0, h += (S += 8191 & (n = 255 & e[t + 0] | (255 & e[t + 1]) << 8)) * P, h += (T += 8191 & (n >>> 13 | (o = 255 & e[t + 2] | (255 & e[t + 3]) << 8) << 3)) * (5 * j), h += (A += 8191 & (o >>> 10 | (i = 255 & e[t + 4] | (255 & e[t + 5]) << 8) << 6)) * (5 * F), h += (C += 8191 & (i >>> 7 | (a = 255 & e[t + 6] | (255 & e[t + 7]) << 8) << 9)) * (5 * Q), f = (h += (R += 8191 & (a >>> 4 | (s = 255 & e[t + 8] | (255 & e[t + 9]) << 8) << 12)) * (5 * D)) >>> 13, h &= 8191, h += (B += s >>> 1 & 8191) * (5 * q), h += (I += 8191 & (s >>> 14 | (u = 255 & e[t + 10] | (255 & e[t + 11]) << 8) << 2)) * (5 * k), h += (O += 8191 & (u >>> 11 | (l = 255 & e[t + 12] | (255 & e[t + 13]) << 8) << 5)) * (5 * N), h += (x += 8191 & (l >>> 8 | (c = 255 & e[t + 14] | (255 & e[t + 15]) << 8) << 8)) * (5 * L), d = f += (h += (M += c >>> 5 | E) * (5 * U)) >>> 13, d += S * U, d += T * P, d += A * (5 * j), d += C * (5 * F), f = (d += R * (5 * Q)) >>> 13, d &= 8191, d += B * (5 * D), d += I * (5 * q), d += O * (5 * k), d += x * (5 * N), f += (d += M * (5 * L)) >>> 13, d &= 8191, p = f, p += S * L, p += T * U, p += A * P, p += C * (5 * j), f = (p += R * (5 * F)) >>> 13, p &= 8191, p += B * (5 * Q), p += I * (5 * D), p += O * (5 * q), p += x * (5 * k), _ = f += (p += M * (5 * N)) >>> 13, _ += S * N, _ += T * L, _ += A * U, _ += C * P, f = (_ += R * (5 * j)) >>> 13, _ &= 8191, _ += B * (5 * F), _ += I * (5 * Q), _ += O * (5 * D), _ += x * (5 * q), v = f += (_ += M * (5 * k)) >>> 13, v += S * k, v += T * N, v += A * L, v += C * U, f = (v += R * P) >>> 13, v &= 8191, v += B * (5 * j), v += I * (5 * F), v += O * (5 * Q), v += x * (5 * D), y = f += (v += M * (5 * q)) >>> 13, y += S * q, y += T * k, y += A * N, y += C * L, f = (y += R * U) >>> 13, y &= 8191, y += B * P, y += I * (5 * j), y += O * (5 * F), y += x * (5 * Q), g = f += (y += M * (5 * D)) >>> 13, g += S * D, g += T * q, g += A * k, g += C * N, f = (g += R * L) >>> 13, g &= 8191, g += B * U, g += I * P, g += O * (5 * j), g += x * (5 * F), m = f += (g += M * (5 * Q)) >>> 13, m += S * Q, m += T * D, m += A * q, m += C * k, f = (m += R * N) >>> 13, m &= 8191, m += B * L, m += I * U, m += O * P, m += x * (5 * j), w = f += (m += M * (5 * F)) >>> 13, w += S * F, w += T * Q, w += A * D, w += C * q, f = (w += R * k) >>> 13, w &= 8191, w += B * N, w += I * L, w += O * U, w += x * P, b = f += (w += M * (5 * j)) >>> 13, b += S * j, b += T * F, b += A * Q, b += C * D, f = (b += R * q) >>> 13, b &= 8191, b += B * k, b += I * N, b += O * L, b += x * U, S = h = 8191 & (f = (f = ((f += (b += M * P) >>> 13) << 2) + f | 0) + (h &= 8191) | 0), T = d += f >>>= 13, A = p &= 8191, C = _ &= 8191, R = v &= 8191, B = y &= 8191, I = g &= 8191, O = m &= 8191, x = w &= 8191, M = b &= 8191, t += 16, r -= 16;
                    this.h[0] = S, this.h[1] = T, this.h[2] = A, this.h[3] = C, this.h[4] = R, this.h[5] = B, this.h[6] = I, this.h[7] = O, this.h[8] = x, this.h[9] = M
                }, A.prototype.finish = function(e, t) {
                    var r, n, o, i, a = new Uint16Array(10);
                    if (this.leftover) {
                        for (i = this.leftover, this.buffer[i++] = 1; i < 16; i++) this.buffer[i] = 0;
                        this.fin = 1, this.blocks(this.buffer, 0, 16)
                    }
                    for (r = this.h[1] >>> 13, this.h[1] &= 8191, i = 2; i < 10; i++) this.h[i] += r, r = this.h[i] >>> 13, this.h[i] &= 8191;
                    for (this.h[0] += 5 * r, r = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += r, r = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += r, a[0] = this.h[0] + 5, r = a[0] >>> 13, a[0] &= 8191, i = 1; i < 10; i++) a[i] = this.h[i] + r, r = a[i] >>> 13, a[i] &= 8191;
                    for (a[9] -= 8192, n = (1 ^ r) - 1, i = 0; i < 10; i++) a[i] &= n;
                    for (n = ~n, i = 0; i < 10; i++) this.h[i] = this.h[i] & n | a[i];
                    for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), o = this.h[0] + this.pad[0], this.h[0] = 65535 & o, i = 1; i < 8; i++) o = (this.h[i] + this.pad[i] | 0) + (o >>> 16) | 0, this.h[i] = 65535 & o;
                    e[t + 0] = this.h[0] >>> 0 & 255, e[t + 1] = this.h[0] >>> 8 & 255, e[t + 2] = this.h[1] >>> 0 & 255, e[t + 3] = this.h[1] >>> 8 & 255, e[t + 4] = this.h[2] >>> 0 & 255, e[t + 5] = this.h[2] >>> 8 & 255, e[t + 6] = this.h[3] >>> 0 & 255, e[t + 7] = this.h[3] >>> 8 & 255, e[t + 8] = this.h[4] >>> 0 & 255, e[t + 9] = this.h[4] >>> 8 & 255, e[t + 10] = this.h[5] >>> 0 & 255, e[t + 11] = this.h[5] >>> 8 & 255, e[t + 12] = this.h[6] >>> 0 & 255, e[t + 13] = this.h[6] >>> 8 & 255, e[t + 14] = this.h[7] >>> 0 & 255, e[t + 15] = this.h[7] >>> 8 & 255
                }, A.prototype.update = function(e, t, r) {
                    var n, o;
                    if (this.leftover) {
                        for ((o = 16 - this.leftover) > r && (o = r), n = 0; n < o; n++) this.buffer[this.leftover + n] = e[t + n];
                        if (r -= o, t += o, this.leftover += o, this.leftover < 16) return;
                        this.blocks(this.buffer, 0, 16), this.leftover = 0
                    }
                    if (r >= 16 && (o = r - r % 16, this.blocks(e, t, o), t += o, r -= o), r) {
                        for (n = 0; n < r; n++) this.buffer[this.leftover + n] = e[t + n];
                        this.leftover += r
                    }
                };
                var Y = B,
                    H = I;
                var V = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                function Z(e, t, r, n) {
                    for (var o, i, a, s, u, l, c, f, h, d, p, _, v, y, g, m, w, b, E, S, T, A, C, R, B, I, O = new Int32Array(16), x = new Int32Array(16), M = e[0], P = e[1], U = e[2], L = e[3], N = e[4], k = e[5], q = e[6], D = e[7], Q = t[0], F = t[1], j = t[2], K = t[3], X = t[4], z = t[5], Y = t[6], H = t[7], Z = 0; n >= 128;) {
                        for (E = 0; E < 16; E++) S = 8 * E + Z, O[E] = r[S + 0] << 24 | r[S + 1] << 16 | r[S + 2] << 8 | r[S + 3], x[E] = r[S + 4] << 24 | r[S + 5] << 16 | r[S + 6] << 8 | r[S + 7];
                        for (E = 0; E < 80; E++)
                            if (o = M, i = P, a = U, s = L, u = N, l = k, c = q, D, h = Q, d = F, p = j, _ = K, v = X, y = z, g = Y, H, C = 65535 & (A = H), R = A >>> 16, B = 65535 & (T = D), I = T >>> 16, C += 65535 & (A = (X >>> 14 | N << 18) ^ (X >>> 18 | N << 14) ^ (N >>> 9 | X << 23)), R += A >>> 16, B += 65535 & (T = (N >>> 14 | X << 18) ^ (N >>> 18 | X << 14) ^ (X >>> 9 | N << 23)), I += T >>> 16, C += 65535 & (A = X & z ^ ~X & Y), R += A >>> 16, B += 65535 & (T = N & k ^ ~N & q), I += T >>> 16, C += 65535 & (A = V[2 * E + 1]), R += A >>> 16, B += 65535 & (T = V[2 * E]), I += T >>> 16, T = O[E % 16], R += (A = x[E % 16]) >>> 16, B += 65535 & T, I += T >>> 16, B += (R += (C += 65535 & A) >>> 16) >>> 16, C = 65535 & (A = b = 65535 & C | R << 16), R = A >>> 16, B = 65535 & (T = w = 65535 & B | (I += B >>> 16) << 16), I = T >>> 16, C += 65535 & (A = (Q >>> 28 | M << 4) ^ (M >>> 2 | Q << 30) ^ (M >>> 7 | Q << 25)), R += A >>> 16, B += 65535 & (T = (M >>> 28 | Q << 4) ^ (Q >>> 2 | M << 30) ^ (Q >>> 7 | M << 25)), I += T >>> 16, R += (A = Q & F ^ Q & j ^ F & j) >>> 16, B += 65535 & (T = M & P ^ M & U ^ P & U), I += T >>> 16, f = 65535 & (B += (R += (C += 65535 & A) >>> 16) >>> 16) | (I += B >>> 16) << 16, m = 65535 & C | R << 16, C = 65535 & (A = _), R = A >>> 16, B = 65535 & (T = s), I = T >>> 16, R += (A = b) >>> 16, B += 65535 & (T = w), I += T >>> 16, P = o, U = i, L = a, N = s = 65535 & (B += (R += (C += 65535 & A) >>> 16) >>> 16) | (I += B >>> 16) << 16, k = u, q = l, D = c, M = f, F = h, j = d, K = p, X = _ = 65535 & C | R << 16, z = v, Y = y, H = g, Q = m, E % 16 == 15)
                                for (S = 0; S < 16; S++) T = O[S], C = 65535 & (A = x[S]), R = A >>> 16, B = 65535 & T, I = T >>> 16, T = O[(S + 9) % 16], C += 65535 & (A = x[(S + 9) % 16]), R += A >>> 16, B += 65535 & T, I += T >>> 16, w = O[(S + 1) % 16], C += 65535 & (A = ((b = x[(S + 1) % 16]) >>> 1 | w << 31) ^ (b >>> 8 | w << 24) ^ (b >>> 7 | w << 25)), R += A >>> 16, B += 65535 & (T = (w >>> 1 | b << 31) ^ (w >>> 8 | b << 24) ^ w >>> 7), I += T >>> 16, w = O[(S + 14) % 16], R += (A = ((b = x[(S + 14) % 16]) >>> 19 | w << 13) ^ (w >>> 29 | b << 3) ^ (b >>> 6 | w << 26)) >>> 16, B += 65535 & (T = (w >>> 19 | b << 13) ^ (b >>> 29 | w << 3) ^ w >>> 6), I += T >>> 16, I += (B += (R += (C += 65535 & A) >>> 16) >>> 16) >>> 16, O[S] = 65535 & B | I << 16, x[S] = 65535 & C | R << 16;
                        C = 65535 & (A = Q), R = A >>> 16, B = 65535 & (T = M), I = T >>> 16, T = e[0], R += (A = t[0]) >>> 16, B += 65535 & T, I += T >>> 16, I += (B += (R += (C += 65535 & A) >>> 16) >>> 16) >>> 16, e[0] = M = 65535 & B | I << 16, t[0] = Q = 65535 & C | R << 16, C = 65535 & (A = F), R = A >>> 16, B = 65535 & (T = P), I = T >>> 16, T = e[1], R += (A = t[1]) >>> 16, B += 65535 & T, I += T >>> 16, I += (B += (R += (C += 65535 & A) >>> 16) >>> 16) >>> 16, e[1] = P = 65535 & B | I << 16, t[1] = F = 65535 & C | R << 16, C = 65535 & (A = j), R = A >>> 16, B = 65535 & (T = U), I = T >>> 16, T = e[2], R += (A = t[2]) >>> 16, B += 65535 & T, I += T >>> 16, I += (B += (R += (C += 65535 & A) >>> 16) >>> 16) >>> 16, e[2] = U = 65535 & B | I << 16, t[2] = j = 65535 & C | R << 16, C = 65535 & (A = K), R = A >>> 16, B = 65535 & (T = L), I = T >>> 16, T = e[3], R += (A = t[3]) >>> 16, B += 65535 & T, I += T >>> 16, I += (B += (R += (C += 65535 & A) >>> 16) >>> 16) >>> 16, e[3] = L = 65535 & B | I << 16, t[3] = K = 65535 & C | R << 16, C = 65535 & (A = X), R = A >>> 16, B = 65535 & (T = N), I = T >>> 16, T = e[4], R += (A = t[4]) >>> 16, B += 65535 & T, I += T >>> 16, I += (B += (R += (C += 65535 & A) >>> 16) >>> 16) >>> 16, e[4] = N = 65535 & B | I << 16, t[4] = X = 65535 & C | R << 16, C = 65535 & (A = z), R = A >>> 16, B = 65535 & (T = k), I = T >>> 16, T = e[5], R += (A = t[5]) >>> 16, B += 65535 & T, I += T >>> 16, I += (B += (R += (C += 65535 & A) >>> 16) >>> 16) >>> 16, e[5] = k = 65535 & B | I << 16, t[5] = z = 65535 & C | R << 16, C = 65535 & (A = Y), R = A >>> 16, B = 65535 & (T = q), I = T >>> 16, T = e[6], R += (A = t[6]) >>> 16, B += 65535 & T, I += T >>> 16, I += (B += (R += (C += 65535 & A) >>> 16) >>> 16) >>> 16, e[6] = q = 65535 & B | I << 16, t[6] = Y = 65535 & C | R << 16, C = 65535 & (A = H), R = A >>> 16, B = 65535 & (T = D), I = T >>> 16, T = e[7], R += (A = t[7]) >>> 16, B += 65535 & T, I += T >>> 16, I += (B += (R += (C += 65535 & A) >>> 16) >>> 16) >>> 16, e[7] = D = 65535 & B | I << 16, t[7] = H = 65535 & C | R << 16, Z += 128, n -= 128
                    }
                    return n
                }

                function G(e, t, r) {
                    var n, o = new Int32Array(8),
                        i = new Int32Array(8),
                        a = new Uint8Array(256),
                        s = r;
                    for (o[0] = 1779033703, o[1] = 3144134277, o[2] = 1013904242, o[3] = 2773480762, o[4] = 1359893119, o[5] = 2600822924, o[6] = 528734635, o[7] = 1541459225, i[0] = 4089235720, i[1] = 2227873595, i[2] = 4271175723, i[3] = 1595750129, i[4] = 2917565137, i[5] = 725511199, i[6] = 4215389547, i[7] = 327033209, Z(o, i, t, r), r %= 128, n = 0; n < r; n++) a[n] = t[s - r + n];
                    for (a[r] = 128, a[(r = 256 - 128 * (r < 112 ? 1 : 0)) - 9] = 0, p(a, r - 8, s / 536870912 | 0, s << 3), Z(o, i, a, r), n = 0; n < 8; n++) p(e, 8 * n, o[n], i[n]);
                    return 0
                }

                function W(e, r) {
                    var n = t(),
                        o = t(),
                        i = t(),
                        a = t(),
                        s = t(),
                        u = t(),
                        l = t(),
                        f = t(),
                        h = t();
                    q(n, e[1], e[0]), q(h, r[1], r[0]), D(n, n, h), k(o, e[0], e[1]), k(h, r[0], r[1]), D(o, o, h), D(i, e[3], r[3]), D(i, i, c), D(a, e[2], r[2]), k(a, a, a), q(s, o, n), q(u, a, i), k(l, a, i), k(f, o, n), D(e[0], s, u), D(e[1], f, l), D(e[2], l, u), D(e[3], s, f)
                }

                function J(e, t, r) {
                    var n;
                    for (n = 0; n < 4; n++) M(e[n], t[n], r)
                }

                function $(e, r) {
                    var n = t(),
                        o = t(),
                        i = t();
                    F(i, r[2]), D(n, r[0], i), D(o, r[1], i), P(e, o), e[31] ^= L(n) << 7
                }

                function ee(e, t, r) {
                    var n, o;
                    for (O(e[0], a), O(e[1], s), O(e[2], s), O(e[3], a), o = 255; o >= 0; --o) J(e, t, n = r[o / 8 | 0] >> (7 & o) & 1), W(t, e), W(e, e), J(e, t, n)
                }

                function te(e, r) {
                    var n = [t(), t(), t(), t()];
                    O(n[0], f), O(n[1], h), O(n[2], s), D(n[3], f, h), ee(e, n, r)
                }

                function re(e, r, o) {
                    var i, a = new Uint8Array(64),
                        s = [t(), t(), t(), t()];
                    for (o || n(r, 32), G(a, r, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64, te(s, a), $(e, s), i = 0; i < 32; i++) r[i + 32] = e[i];
                    return 0
                }
                var ne = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

                function oe(e, t) {
                    var r, n, o, i;
                    for (n = 63; n >= 32; --n) {
                        for (r = 0, o = n - 32, i = n - 12; o < i; ++o) t[o] += r - 16 * t[n] * ne[o - (n - 32)], r = t[o] + 128 >> 8, t[o] -= 256 * r;
                        t[o] += r, t[n] = 0
                    }
                    for (r = 0, o = 0; o < 32; o++) t[o] += r - (t[31] >> 4) * ne[o], r = t[o] >> 8, t[o] &= 255;
                    for (o = 0; o < 32; o++) t[o] -= r * ne[o];
                    for (n = 0; n < 32; n++) t[n + 1] += t[n] >> 8, e[n] = 255 & t[n]
                }

                function ie(e) {
                    var t, r = new Float64Array(64);
                    for (t = 0; t < 64; t++) r[t] = e[t];
                    for (t = 0; t < 64; t++) e[t] = 0;
                    oe(e, r)
                }

                function ae(e, r, n, o) {
                    var i, a, s = new Uint8Array(64),
                        u = new Uint8Array(64),
                        l = new Uint8Array(64),
                        c = new Float64Array(64),
                        f = [t(), t(), t(), t()];
                    G(s, o, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64;
                    var h = n + 64;
                    for (i = 0; i < n; i++) e[64 + i] = r[i];
                    for (i = 0; i < 32; i++) e[32 + i] = s[32 + i];
                    for (G(l, e.subarray(32), n + 32), ie(l), te(f, l), $(e, f), i = 32; i < 64; i++) e[i] = o[i];
                    for (G(u, e, n + 64), ie(u), i = 0; i < 64; i++) c[i] = 0;
                    for (i = 0; i < 32; i++) c[i] = l[i];
                    for (i = 0; i < 32; i++)
                        for (a = 0; a < 32; a++) c[i + a] += u[i] * s[a];
                    return oe(e.subarray(32), c), h
                }

                function se(e, r) {
                    var n = t(),
                        o = t(),
                        i = t(),
                        u = t(),
                        c = t(),
                        f = t(),
                        h = t();
                    return O(e[2], s), N(e[1], r), Q(i, e[1]), D(u, i, l), q(i, i, e[2]), k(u, e[2], u), Q(c, u), Q(f, c), D(h, f, c), D(n, h, i), D(n, n, u),
                        function(e, r) {
                            var n, o = t();
                            for (n = 0; n < 16; n++) o[n] = r[n];
                            for (n = 250; n >= 0; n--) Q(o, o), 1 !== n && D(o, o, r);
                            for (n = 0; n < 16; n++) e[n] = o[n]
                        }(n, n), D(n, n, i), D(n, n, u), D(n, n, u), D(e[0], n, u), Q(o, e[0]), D(o, o, u), U(o, i) && D(e[0], e[0], d), Q(o, e[0]), D(o, o, u), U(o, i) ? -1 : (L(e[0]) === r[31] >> 7 && q(e[0], a, e[0]), D(e[3], e[0], e[1]), 0)
                }

                function ue(e, r, n, o) {
                    var i, a = new Uint8Array(32),
                        s = new Uint8Array(64),
                        u = [t(), t(), t(), t()],
                        l = [t(), t(), t(), t()];
                    if (-1, n < 64) return -1;
                    if (se(l, o)) return -1;
                    for (i = 0; i < n; i++) e[i] = r[i];
                    for (i = 0; i < 32; i++) e[i + 32] = o[i];
                    if (G(s, e, n), ie(s), ee(u, l, s), te(l, r.subarray(32)), W(u, l), $(a, u), n -= 64, y(r, 0, a, 0)) {
                        for (i = 0; i < n; i++) e[i] = 0;
                        return -1
                    }
                    for (i = 0; i < n; i++) e[i] = r[i + 64];
                    return n
                }

                function le(e, t) {
                    if (32 !== e.length) throw new Error("bad key size");
                    if (24 !== t.length) throw new Error("bad nonce size")
                }

                function ce() {
                    var e, t;
                    for (t = 0; t < arguments.length; t++)
                        if ("[object Uint8Array]" !== (e = Object.prototype.toString.call(arguments[t]))) throw new TypeError("unexpected type " + e + ", use Uint8Array")
                }

                function fe(e) {
                    for (var t = 0; t < e.length; t++) e[t] = 0
                }
                e.lowlevel = {
                        crypto_core_hsalsa20: m,
                        crypto_stream_xor: T,
                        crypto_stream: S,
                        crypto_stream_salsa20_xor: b,
                        crypto_stream_salsa20: E,
                        crypto_onetimeauth: C,
                        crypto_onetimeauth_verify: R,
                        crypto_verify_16: v,
                        crypto_verify_32: y,
                        crypto_secretbox: B,
                        crypto_secretbox_open: I,
                        crypto_scalarmult: j,
                        crypto_scalarmult_base: K,
                        crypto_box_beforenm: z,
                        crypto_box_afternm: Y,
                        crypto_box: function(e, t, r, n, o, i) {
                            var a = new Uint8Array(32);
                            return z(a, o, i), Y(e, t, r, n, a)
                        },
                        crypto_box_open: function(e, t, r, n, o, i) {
                            var a = new Uint8Array(32);
                            return z(a, o, i), H(e, t, r, n, a)
                        },
                        crypto_box_keypair: X,
                        crypto_hash: G,
                        crypto_sign: ae,
                        crypto_sign_keypair: re,
                        crypto_sign_open: ue,
                        crypto_secretbox_KEYBYTES: 32,
                        crypto_secretbox_NONCEBYTES: 24,
                        crypto_secretbox_ZEROBYTES: 32,
                        crypto_secretbox_BOXZEROBYTES: 16,
                        crypto_scalarmult_BYTES: 32,
                        crypto_scalarmult_SCALARBYTES: 32,
                        crypto_box_PUBLICKEYBYTES: 32,
                        crypto_box_SECRETKEYBYTES: 32,
                        crypto_box_BEFORENMBYTES: 32,
                        crypto_box_NONCEBYTES: 24,
                        crypto_box_ZEROBYTES: 32,
                        crypto_box_BOXZEROBYTES: 16,
                        crypto_sign_BYTES: 64,
                        crypto_sign_PUBLICKEYBYTES: 32,
                        crypto_sign_SECRETKEYBYTES: 64,
                        crypto_sign_SEEDBYTES: 32,
                        crypto_hash_BYTES: 64
                    }, e.util || (e.util = {}, e.util.decodeUTF8 = e.util.encodeUTF8 = e.util.encodeBase64 = e.util.decodeBase64 = function() {
                        throw new Error("nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js")
                    }), e.randomBytes = function(e) {
                        var t = new Uint8Array(e);
                        return n(t, e), t
                    }, e.secretbox = function(e, t, r) {
                        ce(e, t, r), le(r, t);
                        for (var n = new Uint8Array(32 + e.length), o = new Uint8Array(n.length), i = 0; i < e.length; i++) n[i + 32] = e[i];
                        return B(o, n, n.length, t, r), o.subarray(16)
                    }, e.secretbox.open = function(e, t, r) {
                        ce(e, t, r), le(r, t);
                        for (var n = new Uint8Array(16 + e.length), o = new Uint8Array(n.length), i = 0; i < e.length; i++) n[i + 16] = e[i];
                        return !(n.length < 32) && (0 === I(o, n, n.length, t, r) && o.subarray(32))
                    }, e.secretbox.keyLength = 32, e.secretbox.nonceLength = 24, e.secretbox.overheadLength = 16, e.scalarMult = function(e, t) {
                        if (ce(e, t), 32 !== e.length) throw new Error("bad n size");
                        if (32 !== t.length) throw new Error("bad p size");
                        var r = new Uint8Array(32);
                        return j(r, e, t), r
                    }, e.scalarMult.base = function(e) {
                        if (ce(e), 32 !== e.length) throw new Error("bad n size");
                        var t = new Uint8Array(32);
                        return K(t, e), t
                    }, e.scalarMult.scalarLength = 32, e.scalarMult.groupElementLength = 32, e.box = function(t, r, n, o) {
                        var i = e.box.before(n, o);
                        return e.secretbox(t, r, i)
                    }, e.box.before = function(e, t) {
                        ce(e, t),
                            function(e, t) {
                                if (32 !== e.length) throw new Error("bad public key size");
                                if (32 !== t.length) throw new Error("bad secret key size")
                            }(e, t);
                        var r = new Uint8Array(32);
                        return z(r, e, t), r
                    }, e.box.after = e.secretbox, e.box.open = function(t, r, n, o) {
                        var i = e.box.before(n, o);
                        return e.secretbox.open(t, r, i)
                    }, e.box.open.after = e.secretbox.open, e.box.keyPair = function() {
                        var e = new Uint8Array(32),
                            t = new Uint8Array(32);
                        return X(e, t), {
                            publicKey: e,
                            secretKey: t
                        }
                    }, e.box.keyPair.fromSecretKey = function(e) {
                        if (ce(e), 32 !== e.length) throw new Error("bad secret key size");
                        var t = new Uint8Array(32);
                        return K(t, e), {
                            publicKey: t,
                            secretKey: new Uint8Array(e)
                        }
                    }, e.box.publicKeyLength = 32, e.box.secretKeyLength = 32, e.box.sharedKeyLength = 32, e.box.nonceLength = 24, e.box.overheadLength = e.secretbox.overheadLength, e.sign = function(e, t) {
                        if (ce(e, t), 64 !== t.length) throw new Error("bad secret key size");
                        var r = new Uint8Array(64 + e.length);
                        return ae(r, e, e.length, t), r
                    }, e.sign.open = function(e, t) {
                        if (2 !== arguments.length) throw new Error("nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?");
                        if (ce(e, t), 32 !== t.length) throw new Error("bad public key size");
                        var r = new Uint8Array(e.length),
                            n = ue(r, e, e.length, t);
                        if (n < 0) return null;
                        for (var o = new Uint8Array(n), i = 0; i < o.length; i++) o[i] = r[i];
                        return o
                    }, e.sign.detached = function(t, r) {
                        for (var n = e.sign(t, r), o = new Uint8Array(64), i = 0; i < o.length; i++) o[i] = n[i];
                        return o
                    }, e.sign.detached.verify = function(e, t, r) {
                        if (ce(e, t, r), 64 !== t.length) throw new Error("bad signature size");
                        if (32 !== r.length) throw new Error("bad public key size");
                        var n, o = new Uint8Array(64 + e.length),
                            i = new Uint8Array(64 + e.length);
                        for (n = 0; n < 64; n++) o[n] = t[n];
                        for (n = 0; n < e.length; n++) o[n + 64] = e[n];
                        return ue(i, o, o.length, r) >= 0
                    }, e.sign.keyPair = function() {
                        var e = new Uint8Array(32),
                            t = new Uint8Array(64);
                        return re(e, t), {
                            publicKey: e,
                            secretKey: t
                        }
                    }, e.sign.keyPair.fromSecretKey = function(e) {
                        if (ce(e), 64 !== e.length) throw new Error("bad secret key size");
                        for (var t = new Uint8Array(32), r = 0; r < t.length; r++) t[r] = e[32 + r];
                        return {
                            publicKey: t,
                            secretKey: new Uint8Array(e)
                        }
                    }, e.sign.keyPair.fromSeed = function(e) {
                        if (ce(e), 32 !== e.length) throw new Error("bad seed size");
                        for (var t = new Uint8Array(32), r = new Uint8Array(64), n = 0; n < 32; n++) r[n] = e[n];
                        return re(t, r, !0), {
                            publicKey: t,
                            secretKey: r
                        }
                    }, e.sign.publicKeyLength = 32, e.sign.secretKeyLength = 64, e.sign.seedLength = 32, e.sign.signatureLength = 64, e.hash = function(e) {
                        ce(e);
                        var t = new Uint8Array(64);
                        return G(t, e, e.length), t
                    }, e.hash.hashLength = 64, e.verify = function(e, t) {
                        return ce(e, t), 0 !== e.length && 0 !== t.length && (e.length === t.length && 0 === _(e, 0, t, 0, e.length))
                    }, e.setPRNG = function(e) {
                        n = e
                    },
                    function() {
                        var t = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                        if (t && t.getRandomValues) {
                            e.setPRNG((function(e, r) {
                                var n, o = new Uint8Array(r);
                                for (n = 0; n < r; n += 65536) t.getRandomValues(o.subarray(n, n + Math.min(r - n, 65536)));
                                for (n = 0; n < r; n++) e[n] = o[n];
                                fe(o)
                            }))
                        } else(t = r(24)) && t.randomBytes && e.setPRNG((function(e, r) {
                            var n, o = t.randomBytes(r);
                            for (n = 0; n < r; n++) e[n] = o[n];
                            fe(o)
                        }))
                    }()
            }(e.exports ? e.exports : self.nacl = self.nacl || {})
        }
    }
]);