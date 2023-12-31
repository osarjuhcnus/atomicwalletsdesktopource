/*! For license information please see vendors.e908aeb22eb75d345787.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [204], {
        1075: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.erc721StandardTest = t.erc1155StandardTest = t.default = t.UNRECOGNIZED_TOKEN_STANDARD = t.ERC721_TOKEN_STANDARD = t.ERC1155_TOKEN_STANDARD = void 0;
            var n = a(346);
            t.ERC721_TOKEN_STANDARD = "ERC-721";
            t.ERC1155_TOKEN_STANDARD = "ERC-1155";
            const i = Symbol("UNRECOGNIZED_TOKEN_STANDARD");
            t.UNRECOGNIZED_TOKEN_STANDARD = i;
            t.erc721StandardTest = /^ERC.?721$/i;
            t.erc1155StandardTest = /^ERC.?1155$/i;
            class ETHNftToken extends n.NftToken {
                constructor(e, t, a, n, i, r, s) {
                    super(e, t, a, (e => {
                        switch (e) {
                            case "ETH":
                                return "Ethereum";
                            case "BSC":
                                return "BNB Smart Chain";
                            case "MATIC":
                                return "Polygon";
                            case "AVAX":
                                return "Avalanche";
                            case "FTM":
                                return "Fantom";
                            default:
                                return
                        }
                    })(a), n, i, r, s)
                }
            }
            var r = ETHNftToken;
            t.default = r
        },
        1160: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.createSendTransactionStatTracker = t.TX_STAT_TYPES = void 0;
            var i = a(173),
                r = n(a(143)),
                s = n(a(545)),
                o = n(a(557));
            t.TX_STAT_TYPES = {
                SEND: "SENDING",
                EXCHANGE: "EXCHANGE",
                STAKE: "STAKING",
                CLAIM: "CLAIM",
                UNSTAKE: "UNSTAKE"
            };
            let c = null;
            const d = (e, t) => {
                const a = t.createTransaction.bind(t),
                    n = t.sendTransaction.bind(t);
                return {
                    sendTransaction: async (...e) => {
                        try {
                            const a = await n(...e);
                            return c && (c.txHash = a.txid, c.type = "SUCCESFULL"), a
                        } catch (e) {
                            throw c && (c.type = "UNSUCCESSFULL"), e
                        } finally {
                            c && void 0 !== c.txType && (c.fromAddress = t.address, c.txHash || (c.txHash = "NONE"), r.default.emit(i.WALLETS.TX_SENT, {
                                ...c
                            })), c = null
                        }
                    },
                    createTransaction: async (...n) => {
                        try {
                            null === c && (c = ((e, t, a) => {
                                var n;
                                const {
                                    amount: i,
                                    txStatType: r
                                } = a[0], s = t.toCurrencyUnit(i), c = t.address || (null === (n = e.getWallet(t.parent)) || void 0 === n ? void 0 : n.address) || "";
                                return {
                                    atomicId: e.hash,
                                    coinName: t.name,
                                    ticker: t.ticker,
                                    fromAddress: c,
                                    amount: s,
                                    usdValue: o.default.convertToUSD(s, t, "USD").toString(),
                                    txType: r,
                                    txHash: "NONE_FAILED_TO_CREATE"
                                }
                            })(e, t, n), t instanceof s.default && (c.parentCoin = t.parent), c.type = "UNSUCCESSFULL")
                        } catch (e) {
                            console.error(e)
                        }
                        try {
                            return await a(...n)
                        } catch (e) {
                            throw void 0 !== c.txType && r.default.emit(i.WALLETS.TX_SENT, {
                                ...c
                            }), c = null, e
                        }
                    }
                }
            };
            t.createSendTransactionStatTracker = d;
            var l = d;
            t.default = l
        },
        1164: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(2089);
            a.d(t, "BaseInputField", (function() {
                return n.default
            }));
            var i = a(2094);
            a.d(t, "BaseButton", (function() {
                return i.default
            }));
            var r = a(1165);
            a.d(t, "BaseIcon", (function() {
                return r.default
            }))
        },
        1165: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(722),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(e) {
                a.d(t, e, (function() {
                    return n[e]
                }))
            }(r);
            var s = a(1195),
                o = a(3),
                c = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            t.default = c.exports
        },
        1195: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            })), a.d(t, "b", (function() {
                return i
            }));
            var n = function() {
                    var e = this.$createElement;
                    return (this._self._c || e)(this.dynamicComponent, {
                        tag: "component"
                    })
                },
                i = []
        },
        1196: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            })), a.d(t, "b", (function() {
                return i
            }));
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "input"
                    }, [a("div", {
                        class: ["input-block", {
                            "input-focus": e.isFocusInput
                        }]
                    }, [a("div", {
                        staticClass: "input-wrap",
                        on: {
                            click: e.onClick
                        }
                    }, [a("input", {
                        ref: "input",
                        staticClass: "input-field",
                        attrs: {
                            readonly: e.isReadOnly,
                            type: e.inputType
                        },
                        domProps: {
                            value: e.value
                        },
                        on: {
                            blur: e.onBlur,
                            focus: e.onFocus,
                            input: e.onInput,
                            keypress: e.onKeyPress,
                            keyup: [e.onKeyUp, function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), t.stopPropagation(), e.enterPressed.apply(null, arguments))
                            }]
                        }
                    }), e._v(" "), a("div", {
                        staticClass: "input-placeholder",
                        class: {
                            "input-placeholder-up": e.value || e.isFocusInput,
                            "input-placeholder-blue": !e.value && !e.isFocusInput
                        }
                    }, [e._v("\n        " + e._s(e.currentPlaceholder) + "\n        "), e.isRequired ? a("span", {
                        staticClass: "input-placeholder-required"
                    }, [e._v("*")]) : e._e()]), e._v(" "), a("div", {
                        staticClass: "input-controls"
                    }, [e.isSetValue ? a("div", {
                        staticClass: "input-clean input-icon",
                        on: {
                            click: e.onClean
                        }
                    }, [a("BaseIcon", {
                        attrs: {
                            name: "close"
                        }
                    })], 1) : e._e(), e._v(" "), e.isPassword ? a("div", {
                        staticClass: "input-icon m-l-20",
                        on: {
                            click: e.toggleTypePassword
                        }
                    }, [a("BaseIcon", {
                        attrs: {
                            name: "text" === e.inputType ? "openEye" : "closeEye"
                        }
                    })], 1) : e._e(), e._v(" "), e.isPaste && !e.value.length ? a("div", {
                        staticClass: "input-paste input-icon m-l-20",
                        on: {
                            click: e.onPaste
                        }
                    }, [a("BaseIcon", {
                        attrs: {
                            name: "edit"
                        }
                    })], 1) : e._e(), e._v(" "), e.isFiatAmount && e.ticker ? a("div", {
                        staticClass: "input-ticker m-l-20"
                    }, [e._v("\n          " + e._s(e.ticker) + "\n        ")]) : e._e()])]), e._v(" "), a("div", {
                        staticClass: "input-line",
                        class: {
                            "input-line-error": e.error,
                            "input-line-active": e.isSetValue && !e.error
                        }
                    }), e._v(" "), a("div", {
                        staticClass: "input-wrap"
                    }, [e.isFiatAmount ? a("input", {
                        ref: "inputFiat",
                        staticClass: "input-field input-field-amount",
                        attrs: {
                            type: "text",
                            readonly: e.isReadOnly
                        },
                        domProps: {
                            value: e.valueFiat
                        },
                        on: {
                            blur: e.onFiatBlur,
                            focus: e.onFiatFocus,
                            input: e.onFiatInput
                        }
                    }) : e._e(), e._v(" "), a("div", {
                        staticClass: "input-controls"
                    }, [e.isFiatAmount && e.fiatTicker ? a("div", {
                        staticClass: "input-ticker-fiat"
                    }, [e._v("\n          " + e._s(e.fiatTicker) + "\n        ")]) : e._e()])])]), e._v(" "), a("transition", {
                        attrs: {
                            name: "slide-in"
                        }
                    }, [e.error ? a("div", {
                        staticClass: "input-error",
                        domProps: {
                            innerHTML: e._s(e.error)
                        }
                    }) : e._e()]), e._v(" "), a("transition", {
                        attrs: {
                            name: "slide-in"
                        }
                    }, [e.note ? a("div", {
                        staticClass: "input-note",
                        domProps: {
                            innerHTML: e._s(e.note)
                        }
                    }) : e._e()])], 1)
                },
                i = []
        },
        1197: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            })), a.d(t, "b", (function() {
                return i
            }));
            var n = function() {
                    var e = this.$createElement;
                    return (this._self._c || e)("button", this._g({
                        class: this.buttonClasses,
                        attrs: {
                            disabled: this.disabled,
                            "data-test-id": "base-button"
                        }
                    }, this.$listeners), [this._t("default")], 2)
                },
                i = []
        },
        1407: function(e) {
            e.exports = JSON.parse('[{"name":"Atomic Wallet Token","ticker":"AWC","contract":"0xad22f63404f7305e4713ccbd4f296f34770513f4","decimal":"8","visibility":true},{"name":"Tether USD","ticker":"USDT","contract":"0xdac17f958d2ee523a2206206994597c13d831ec7","decimal":"6","visibility":true},{"name":"GeminiDollar","ticker":"GUSD","contract":"0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd","decimal":"2","visibility":true},{"name":"TrueUSD","ticker":"TUSD","contract":"0x0000000000085d4780B73119b644AE5ecd22b376","decimal":"18","visibility":true},{"name":"Pax Dollar","ticker":"USDP","contract":"0x8e870d67f660d95d5be530380d0ec0bd388289e1","decimal":"18","visibility":true},{"name":"USDCoin","ticker":"USDC","contract":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","decimal":"6","visibility":true},{"name":"StableUSD","ticker":"USDS","contract":"0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe","decimal":"6","visibility":true},{"name":"Pundi X-old","ticker":"NPXS","contract":"0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3","decimal":"18","visibility":false},{"name":"Pundi X","ticker":"PUNDIX","contract":"0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38","decimal":"18","visibility":true},{"name":"Crypto.com Chain","ticker":"CRO","contract":"0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b","decimal":"8","visibility":true},{"name":"Basic Attention Token","ticker":"BAT","contract":"0x0D8775F648430679A709E98d2b0Cb6250d2887EF","decimal":"18","visibility":true},{"name":"district0x","ticker":"DNT","contract":"0x0AbdAce70D3790235af448C88547603b945604ea","decimal":"18","visibility":true},{"name":"0x","ticker":"ZRX","contract":"0xE41d2489571d322189246DaFA5ebDe1F4699F498","decimal":"18","visibility":true},{"name":"Salt","ticker":"SALT","contract":"0x4156D3342D5c385a87D264F90653733592000581","decimal":"8","visibility":true},{"name":"DigixDAO","ticker":"DGD","contract":"0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A","decimal":"9","visibility":true},{"name":"iExecRLC","ticker":"RLC","contract":"0x607F4C5BB672230e8672085532f7e901544a7375","decimal":"9","visibility":true},{"name":"Gnosis","ticker":"GNO","contract":"0x6810e776880C02933D47DB1b9fc05908e5386b96","decimal":"18","visibility":true},{"name":"Lunyr","ticker":"LUN","contract":"0xfa05A73FfE78ef8f1a739473e462c54bae6567D9","decimal":"18","visibility":true},{"name":"Augur 0ld","ticker":"REP","contract":"0x1985365e9f78359a9B6AD760e32412f4a445E862","decimal":"18","visibility":false},{"name":"Augur","ticker":"REP","contract":"0x221657776846890989a759ba2973e427dff5c9bb","decimal":"18","visibility":true},{"name":"Aragon","ticker":"ANT","contract":"0xa117000000f279D81A1D3cc75430fAA017FA5A2e","decimal":"18","visibility":true},{"name":"Bancor","ticker":"BNT","contract":"0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C","decimal":"18","visibility":true},{"name":"Civic","ticker":"CVC","contract":"0x41e5560054824eA6B0732E656E3Ad64E20e94E45","decimal":"8","visibility":true},{"name":"TenXPay","ticker":"PAY","contract":"0xB97048628DB6B661D4C2aA833e95Dbe1A905B280","decimal":"18","visibility":true},{"name":"OmiseGO","ticker":"OMG","contract":"0xd26114cd6EE289AccF82350c8d8487fedB8A0C07","decimal":"18","visibility":true},{"name":"Monaco","ticker":"MCO","contract":"0xB63B606Ac810a52cCa15e44bB630fd42D8d1d83d","decimal":"8","visibility":true},{"name":"SwarmCity","ticker":"SWT","contract":"0xB9e7F8568e08d5659f5D29C4997173d84CdF2607","decimal":"18","visibility":false},{"name":"Patientory","ticker":"PTOY","contract":"0x8Ae4BF2C33a8e667de34B54938B0ccD03Eb8CC06","decimal":"8","visibility":false},{"name":"STORJ","ticker":"STORJ","contract":"0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC","decimal":"8","visibility":true},{"name":"FunFair","ticker":"FUN","contract":"0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b","decimal":"8","visibility":true},{"name":"Humaniq","ticker":"HMQ","contract":"0xcbCC0F036ED4788F63FC0fEE32873d6A7487b908","decimal":"8","visibility":false},{"name":"Numeraire","ticker":"NMR","contract":"0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671","decimal":"18","visibility":true},{"name":"Golem","ticker":"GLM","contract":"0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429","decimal":"18","visibility":true},{"name":"Melon","ticker":"MLN","contract":"0xec67005c4e498ec7f55e092bd1d35cbc47c91892","decimal":"18","visibility":false},{"name":"Viberate","ticker":"VIB","contract":"0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724","decimal":"18","visibility":false},{"name":"RipioCreditNetwork","ticker":"RCN","contract":"0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6","decimal":"18","visibility":true},{"name":"PowerLedger","ticker":"POWR","contract":"0x595832f8fc6bf59c85c527fec3740a1b7a361269","decimal":"6","visibility":true},{"name":"Populous","ticker":"PPT","contract":"0xd4fa1460F537bb9085d22C7bcCB5DD450Ef28e3a","decimal":"8","visibility":true},{"name":"Bread","ticker":"BRD","contract":"0x558ec3152e2eb2174905cd19aea4e34a23de9ad6","decimal":"18","visibility":false},{"name":"Dentacoin","ticker":"DCN","contract":"0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6","decimal":"0","visibility":true},{"name":"SONM","ticker":"SNM","contract":"0x983F6d60db79ea8cA4eB9968C6aFf8cfA04B3c63","decimal":"18","visibility":true},{"name":"Aeron","ticker":"ARN","contract":"0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6","decimal":"8","visibility":true},{"name":"Polymath","ticker":"POLY","contract":"0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec","decimal":"18","visibility":true},{"name":"NEXO","ticker":"NEXO","contract":"0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206","decimal":"18","visibility":true},{"name":"EnjinCoin","ticker":"ENJ","contract":"0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c","decimal":"18","visibility":true},{"name":"KyberNetwork Legacy","ticker":"KNCL","contract":"0xdd974D5C2e2928deA5F71b9825b8b646686BD200","decimal":"18","visibility":false},{"name":"KyberNetwork v2","ticker":"KNC","contract":"0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202","decimal":"18","visibility":true},{"name":"DENT","ticker":"DENT","contract":"0x3597bfD533a99c9aa083587B074434E61Eb0A258","decimal":"8","visibility":true},{"name":"SAI","ticker":"SAI","contract":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359","decimal":"18","visibility":true},{"name":"ChainLinkToken","ticker":"LINK","contract":"0x514910771af9ca656af840dff83e8264ecf986ca","decimal":"18","visibility":true},{"name":"Maker","ticker":"MKR","contract":"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2","decimal":"18","visibility":true},{"name":"Decentraland","ticker":"MANA","contract":"0x0F5D2fB29fb7d3CFeE444a200298f468908cC942","decimal":"18","visibility":true},{"name":"Kin ERC20","ticker":"KIN","contract":"0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5","decimal":"18","visibility":false},{"name":"Holo","ticker":"HOT","contract":"0x6c6ee5e31d828de241282b9606c8e98ea48526e2","decimal":"18","visibility":true},{"name":"Digitex Futures","ticker":"DGTX","contract":"0x1c83501478f1320977047008496dacbd60bb15ef","decimal":"18","visibility":true},{"name":"Sentinel","ticker":"SENT","contract":"0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037","decimal":"8","visibility":false},{"name":"UNUS SED LEO","ticker":"LEO","contract":"0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3","decimal":"18","visibility":true},{"name":"Credits","ticker":"CS","contract":"0x46b9ad944d1059450da1163511069c718f699d31","decimal":"6","visibility":true},{"name":"IQeon","ticker":"IQN","contract":"0x0db8d8b76bc361bacbb72e2c491e06085a97ab31","decimal":"18","visibility":false},{"name":"Matic ETH","ticker":"MATIC","contract":"0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0","decimal":"18","visibility":true},{"name":"Hydro","ticker":"HYDRO","contract":"0xebbdf302c940c6bfd49c6b165f457fdb324649bc","decimal":"18","visibility":true},{"name":"Metal","ticker":"MTL","contract":"0xF433089366899D83a9f26A773D59ec7eCF30355e","decimal":"8","visibility":true},{"name":"Constellation","ticker":"DAG","contract":"0xa8258abc8f2811dd48eccd209db68f25e3e34667","decimal":"8","visibility":false},{"name":"DAI","ticker":"DAI","contract":"0x6B175474E89094C44Da98b954EedeAC495271d0F","decimal":"18","visibility":true},{"name":"AmaCoin","ticker":"AMA","contract":"0x1dd0df760eb950083c1925da19fc7ac1356a190b","decimal":"18","visibility":true},{"name":"Celer","ticker":"CELR","contract":"0x4f9254c83eb525f9fcf346490bbb3ed28a81c667","decimal":"18","visibility":false},{"name":"Jobchain","ticker":"JOB","contract":"0xdfbc9050F5B01DF53512DCC39B4f2B2BBaCD517A","decimal":"8","visibility":false},{"name":"Origin Protocol","ticker":"OGN","contract":"0x8207c1ffc5b6804f6024322ccf34f29c3541ae26","decimal":"18","visibility":true},{"name":"HEX","ticker":"HEX","contract":"0x2b591e99afe9f32eaa6214f7b7629768c40eeb39","decimal":"8","visibility":true},{"name":"Binance USD","ticker":"BUSD","contract":"0x4Fabb145d64652a948d72533023f6E7A623C7C53","decimal":"18","visibility":true},{"name":"CryptoSoul","ticker":"SOUL","contract":"0xbb1f24c0c1554b9990222f036b0aad6ee4caec29","decimal":"18","visibility":false},{"name":"Reserve","ticker":"RSV","contract":"0x196f4727526eA7FB1e17b2071B3d8eAA38486988","decimal":"18","visibility":true},{"name":"Cartesi","ticker":"CTSI","contract":"0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d","decimal":"18","visibility":false},{"name":"Reserve Rights","ticker":"RSR","contract":"0x320623b8e4ff03373931769a31fc52a4e78b5d70","decimal":"18","visibility":true},{"name":"COTI","ticker":"COTI","contract":"0xddb3422497e61e13543bea06989c0789117555c5","decimal":"18","visibility":true},{"name":"Band Protocol","ticker":"BAND","contract":"0xba11d00c5f74255f56a5e366f4f77f5a186d7f55","decimal":"18","visibility":false},{"name":"Compound","ticker":"COMP","contract":"0xc00e94cb662c3520282e6f5717214004a7f26888","decimal":"18","visibility":true},{"name":"Aave","ticker":"LEND","contract":"0x80fB784B7eD66730e8b1DBd9820aFD29931aab03","decimal":"18","visibility":true},{"name":"Ren","ticker":"REN","contract":"0x408e41876cccdc0f92210600ef50372656052a38","decimal":"18","visibility":true},{"name":"Synthetix Network","ticker":"SNX","contract":"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f","decimal":"18","visibility":true},{"name":"FTX Token","ticker":"FTT","contract":"0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9","decimal":"18","visibility":true},{"name":"ShareToken","ticker":"SHR","contract":"0xd98f75b1a3261dab9eed4956c93f33749027a964","decimal":"2","visibility":false},{"name":"Uniswap","ticker":"UNI","contract":"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984","decimal":"18","visibility":true},{"name":"Aave","ticker":"AAVE","contract":"0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9","decimal":"18","visibility":true},{"name":"SHIBA INU","ticker":"SHIB","contract":"0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce","decimal":"18","visibility":true},{"name":"Aelf","ticker":"ELF","contract":"0xbf2179859fc6d5bee9bf9158632dc51678a4100e","decimal":"18","visibility":true},{"name":"Axie Infinity","ticker":"AXS","contract":"0xbb0e17ef65f82ab018d8edd776e8dd940327b28b","decimal":"18","visibility":true},{"name":"SushiSwap","ticker":"SUSHI","contract":"0x6b3595068778dd592e39a122f4f5a5cf09c90fe2","decimal":"18","visibility":true},{"name":"Chiliz","ticker":"CHZ","contract":"0x3506424f91fd33084466f402d5d97f05f8e3b4af","decimal":"18","visibility":true},{"name":"Chromia","ticker":"CHR","contract":"0x8a2279d4a90b6fe1c4b30fa660cc9f926797baa2","decimal":"6","visibility":true},{"name":"Graph","ticker":"GRT","contract":"0xc944e90c64b2c07662a292be6244bdf05cda44a7","decimal":"18","visibility":true},{"name":"Quant","ticker":"QNT","contract":"0x4a220e6096b25eadb88358cb44068a3248254675","decimal":"18","visibility":true},{"name":"StatusNetwork","ticker":"SNT","contract":"0x744d70fdbe2ba4cf95131626614a1763df805b9e","decimal":"18","visibility":true},{"name":"1inch","ticker":"1INCH","contract":"0x111111111117dc0aa78b770fa6a738034120c302","decimal":"18","visibility":true},{"name":"The Sandbox","ticker":"SAND","contract":"0x3845badAde8e6dFF049820680d1F14bD3903a5d0","decimal":"18","visibility":true},{"name":"Fantom","ticker":"FTM","contract":"0x4e15361fd6b4bb609fa63c81a2be19d873717870","decimal":"18","visibility":true},{"name":"Gala","ticker":"GALA","contract":"0x15d4c048f83bd7e37d49ea4c83a07267ec4203da","decimal":"8","visibility":true},{"name":"Amp","ticker":"AMP","contract":"0xff20817765cb7f73d4bde2e66e067e58d11095c2","decimal":"18","visibility":true},{"name":"ApeCoin","ticker":"APE","contract":"0x4d224452801aced8b2f0aebe155379bb5d594381","decimal":"18","visibility":true},{"name":"Lido DAO","ticker":"LDO","contract":"0x5a98fcbea516cf06857215779fd812ca3bef1b32","decimal":"18","visibility":true},{"name":"Yearn.finance","ticker":"YFI","contract":"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e","decimal":"18","visibility":true},{"name":"Balancer","ticker":"BAL","contract":"0xba100000625a3754423978a60c9317c58a424e3D","decimal":"18","visibility":true},{"name":"Ethereum Name Service","ticker":"ENS","contract":"0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72","decimal":"18","visibility":true},{"name":"APENFT","ticker":"NFT","contract":"0x198d14f2ad9ce69e76ea330b374de4957c3f850a","decimal":"6","visibility":true},{"name":"Loopring","ticker":"LRC","contract":"0xbbbbca6a901c926f240b89eacb641d8aec7aeafd","decimal":"18","visibility":true},{"name":"Verasity","ticker":"VRA","contract":"0xf411903cbc70a74d22900a5de66a2dda66507255","decimal":"18","visibility":true},{"name":"Wrapped Bitcoin","ticker":"WBTC","contract":"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599","decimal":"8","visibility":true},{"name":"Huobi Token","ticker":"HT","contract":"0x6f259637dcd74c767781e37bc6133cd6a68aa161","decimal":"18","visibility":true},{"name":"PAX Gold","ticker":"PAXG","contract":"0x45804880de22913dafe09f4980848ece6ecbaf78","decimal":"18","visibility":true},{"name":"Convex Finance","ticker":"CVX","contract":"0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b","decimal":"18","visibility":true},{"name":"Audius","ticker":"AUDIO","contract":"0x18aaa7115705e8be94bffebde57af9bfc265b998","decimal":"18","visibility":true},{"name":"Livepeer","ticker":"LPT","contract":"0x58b6a8a3302369daec383334672404ee733ab239","decimal":"18","visibility":true},{"name":"Celsius","ticker":"CEL","contract":"0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d","decimal":"4","visibility":true},{"name":"SwissBorg","ticker":"CHSB","contract":"0xba9d4199fab4f26efe3551d490e3821486f135ba","decimal":"8","visibility":true},{"name":"Swipe","ticker":"SXP","contract":"0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9","decimal":"18","visibility":true},{"name":"Dogelon Mars","ticker":"ELON","contract":"0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3","decimal":"18","visibility":true},{"name":"Ocean Protocol","ticker":"OCEAN","contract":"0x967da4048cd07ab37855c090aaf366e4ce1b9f48","decimal":"18","visibility":true},{"name":"Curve DAO","ticker":"CRV","contract":"0xd533a949740bb3306d119cc777fa900ba034cd52","decimal":"18","visibility":true},{"name":"Oasis Network","ticker":"ROSE","contract":"0x26b80fbfc01b71495f477d5237071242e0d959d7","decimal":"18","visibility":true},{"name":"Reef","ticker":"REEF","contract":"0xfe3e6a25e6b192a42a44ecddcd13796471735acf","decimal":"18","visibility":true},{"name":"Wrapped TON Coin","ticker":"TONCOIN","contract":"0x582d872a1b094fc48f5de31d3b73f2d9be47def1","decimal":"9","visibility":true},{"name":"Liquid staked Ether 2.0","ticker":"stETH","contract":"0xae7ab96520de3a18e5e111b5eaab095312d7fe84","decimal":"18","visibility":true},{"name":"BitDAO","ticker":"BIT","contract":"0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5","decimal":"18","visibility":true},{"name":"Chain","ticker":"XCN","contract":"0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18","decimal":"18","visibility":true}]')
        },
        1411: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "StakingMixin", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "WalletMixin", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            });
            var i = n(a(4060)),
                r = n(a(1995))
        },
        1412: function(e, t, a) {
            ! function(t) {
                "use strict";
                var n = {};
                e.exports ? (n.bytesToHex = a(4099).bytesToHex, n.convertString = a(4100), e.exports = o) : (n.bytesToHex = t.convertHex.bytesToHex, n.convertString = t.convertString, t.sha256 = o);
                var i = [];
                ! function() {
                    function e(e) {
                        for (var t = Math.sqrt(e), a = 2; a <= t; a++)
                            if (!(e % a)) return !1;
                        return !0
                    }

                    function t(e) {
                        return 4294967296 * (e - (0 | e)) | 0
                    }
                    for (var a = 2, n = 0; n < 64;) e(a) && (i[n] = t(Math.pow(a, 1 / 3)), n++), a++
                }();
                var r = [],
                    s = function(e, t, a) {
                        for (var n = e[0], s = e[1], o = e[2], c = e[3], d = e[4], l = e[5], u = e[6], p = e[7], f = 0; f < 64; f++) {
                            if (f < 16) r[f] = 0 | t[a + f];
                            else {
                                var m = r[f - 15],
                                    y = (m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3,
                                    b = r[f - 2],
                                    g = (b << 15 | b >>> 17) ^ (b << 13 | b >>> 19) ^ b >>> 10;
                                r[f] = y + r[f - 7] + g + r[f - 16]
                            }
                            var h = n & s ^ n & o ^ s & o,
                                T = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22),
                                v = p + ((d << 26 | d >>> 6) ^ (d << 21 | d >>> 11) ^ (d << 7 | d >>> 25)) + (d & l ^ ~d & u) + i[f] + r[f];
                            p = u, u = l, l = d, d = c + v | 0, c = o, o = s, s = n, n = v + (T + h) | 0
                        }
                        e[0] = e[0] + n | 0, e[1] = e[1] + s | 0, e[2] = e[2] + o | 0, e[3] = e[3] + c | 0, e[4] = e[4] + d | 0, e[5] = e[5] + l | 0, e[6] = e[6] + u | 0, e[7] = e[7] + p | 0
                    };

                function o(e, t) {
                    e.constructor === String && (e = n.convertString.UTF8.stringToBytes(e));
                    var a = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
                        i = function(e) {
                            for (var t = [], a = 0, n = 0; a < e.length; a++, n += 8) t[n >>> 5] |= e[a] << 24 - n % 32;
                            return t
                        }(e),
                        r = 8 * e.length;
                    i[r >> 5] |= 128 << 24 - r % 32, i[15 + (r + 64 >> 9 << 4)] = r;
                    for (var o = 0; o < i.length; o += 16) s(a, i, o);
                    var c = function(e) {
                        for (var t = [], a = 0; a < 32 * e.length; a += 8) t.push(e[a >>> 5] >>> 24 - a % 32 & 255);
                        return t
                    }(a);
                    return t && t.asBytes ? c : t && t.asString ? n.convertString.bytesToString(c) : n.bytesToHex(c)
                }
                o.x2 = function(e, t) {
                    return o(o(e, {
                        asBytes: !0
                    }), t)
                }
            }(this)
        },
        1437: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CHECK_IN_ACTION = void 0, t.clearWalletHash = function() {
                c = null
            }, t.default = void 0, t.startActivityTracking = function() {
                r.default.on(s.WALLETS.NEW_ATOMIC_ID, ({
                    atomicId: e
                }) => {
                    null === c && 64 === (null == e ? void 0 : e.length) && (c = e, u())
                }), r.default.on(s.WALLETS.TX_SENT, l)
            };
            var i = n(a(57)),
                r = n(a(143)),
                s = a(173),
                o = n(a(192));
            t.CHECK_IN_ACTION = "CHECK_IN";
            let c = null;
            const d = async (e, t = {}) => {
                if (null === c) throw new Error("Wallet hash is not set");
                await i.default.post("https://apollo.atomicwallet.io/users/activity", {
                    atomicId: c,
                    type: e,
                    ...t
                }, {
                    headers: o.default.getUserAgentHttpHeader()
                })
            }, l = async (e = {}) => {
                await i.default.post("https://apollo.atomicwallet.io/sendings", {
                    ...e
                }, {
                    headers: o.default.getUserAgentHttpHeader()
                })
            }, u = () => {
                d("CHECK_IN").then(() => {
                    setTimeout(() => {
                        u()
                    }, 864e5)
                })
            };
            var p = d;
            t.default = p
        },
        1439: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AtomicRaki", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "CoinMarketCap", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "CryptoCompare", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            });
            var i = n(a(2472)),
                r = n(a(2474)),
                s = n(a(2476))
        },
        1440: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(57)),
                r = a(52),
                s = n(a(1441)),
                o = n(a(2473));
            class CryptoCompareLikeRatesProvider extends s.default {
                constructor(e) {
                    super(o.default), this.baseUrl = e
                }
                convert(e, t) {
                    return e.map(({
                        RAW: e
                    }) => Object.keys(e).map(a => {
                        const n = e[a][t];
                        if (n) return {
                            rate: n.PRICE || 0,
                            change: n.CHANGEPCT24HOUR || 0,
                            volume: n.TOTALVOLUME24HTO || 0,
                            supply: n.SUPPLY || 0,
                            marketCap: n.MKTCAP || 0,
                            ticker: a
                        }
                    }).filter(e => void 0 !== e)).flat(1)
                }
                async fetch(e, t) {
                    try {
                        const a = 1e3;
                        return (await Promise.all((0, r.chunkString)(e.join(","), a).map(e => (0, i.default)({
                            url: `${this.baseUrl}/pricemultifull?tsyms=${t}&fsyms=${e.toString()}`,
                            method: "get"
                        })))).map(({
                            data: e
                        }) => e)
                    } catch (e) {
                        console.warn("Fetch rates error", e)
                    }
                    return []
                }
                async getTargetTickersMap(e) {
                    return e.reduce((e, {
                        id: t,
                        ticker: a
                    }) => Object.assign({
                        [t]: this.getTargetTicker(a)
                    }, e), {})
                }
                async getTargetTickers(e, t) {
                    const a = await super.getTargetTickers(e);
                    return a.includes(t) || a.push(t), a
                }
            }
            var c = CryptoCompareLikeRatesProvider;
            t.default = c
        },
        1441: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = class RatesProvider {
                constructor(e) {
                    this.aliases = e
                }
                convert(e) {
                    return e
                }
                async fetch() {
                    return []
                }
                async get(e, t) {
                    const a = await this.getTargetTickers(e, t);
                    if (0 === a.length) return [];
                    const n = await this.fetch(a, t);
                    return this.convert(n, t)
                }
                getTargetTicker(e) {
                    var t;
                    return null !== (t = this.aliases[e]) && void 0 !== t ? t : e
                }
                async getTargetTickersMap() {
                    return {}
                }
                async getTargetTickers(e) {
                    return Object.values(await this.getTargetTickersMap(e))
                }
            };
            t.default = n
        },
        1692: function(e, t, a) {
            var n = t,
                i = a(102),
                r = a(338),
                s = a(24),
                o = a(3016)(1e3);

            function c(e, t, a) {
                return s.createHmac("sha256", e).update(t, "utf8").digest(a)
            }

            function d(e, t) {
                return s.createHash("sha256").update(e, "utf8").digest(t)
            }

            function l(e) {
                return e.replace(/[!'()*]/g, (function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function u(e) {
                return l(encodeURIComponent(e))
            }
            var p = {
                authorization: !0,
                connection: !0,
                "x-amzn-trace-id": !0,
                "user-agent": !0,
                expect: !0,
                "presigned-expires": !0,
                range: !0
            };

            function f(e, t) {
                "string" == typeof e && (e = i.parse(e));
                var a = e.headers = e.headers || {},
                    n = (!this.service || !this.region) && this.matchHost(e.hostname || e.host || a.Host || a.host);
                this.request = e, this.credentials = t || this.defaultCredentials(), this.service = e.service || n[0] || "", this.region = e.region || n[1] || "us-east-1", "email" === this.service && (this.service = "ses"), !e.method && e.body && (e.method = "POST"), a.Host || a.host || (a.Host = e.hostname || e.host || this.createHost(), e.port && (a.Host += ":" + e.port)), e.hostname || e.host || (e.hostname = a.Host || a.host), this.isCodeCommitGit = "codecommit" === this.service && "GIT" === e.method, this.extraHeadersToIgnore = e.extraHeadersToIgnore || Object.create(null), this.extraHeadersToInclude = e.extraHeadersToInclude || Object.create(null)
            }
            f.prototype.matchHost = function(e) {
                var t = ((e || "").match(/([^\.]+)\.(?:([^\.]*)\.)?amazonaws\.com(\.cn)?$/) || []).slice(1, 3);
                if ("es" !== t[1] && "aoss" !== t[1] || (t = t.reverse()), "s3" == t[1]) t[0] = "s3", t[1] = "us-east-1";
                else
                    for (var a = 0; a < 2; a++)
                        if (/^s3-/.test(t[a])) {
                            t[1] = t[a].slice(3), t[0] = "s3";
                            break
                        } return t
            }, f.prototype.isSingleRegion = function() {
                return ["s3", "sdb"].indexOf(this.service) >= 0 && "us-east-1" === this.region || ["cloudfront", "ls", "route53", "iam", "importexport", "sts"].indexOf(this.service) >= 0
            }, f.prototype.createHost = function() {
                var e = this.isSingleRegion() ? "" : "." + this.region;
                return ("ses" === this.service ? "email" : this.service) + e + ".amazonaws.com"
            }, f.prototype.prepareRequest = function() {
                this.parsePath();
                var e, t = this.request,
                    a = t.headers;
                t.signQuery ? (this.parsedPath.query = e = this.parsedPath.query || {}, this.credentials.sessionToken && (e["X-Amz-Security-Token"] = this.credentials.sessionToken), "s3" !== this.service || e["X-Amz-Expires"] || (e["X-Amz-Expires"] = 86400), e["X-Amz-Date"] ? this.datetime = e["X-Amz-Date"] : e["X-Amz-Date"] = this.getDateTime(), e["X-Amz-Algorithm"] = "AWS4-HMAC-SHA256", e["X-Amz-Credential"] = this.credentials.accessKeyId + "/" + this.credentialString(), e["X-Amz-SignedHeaders"] = this.signedHeaders()) : (t.doNotModifyHeaders || this.isCodeCommitGit || (!t.body || a["Content-Type"] || a["content-type"] || (a["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8"), !t.body || a["Content-Length"] || a["content-length"] || (a["Content-Length"] = Buffer.byteLength(t.body)), !this.credentials.sessionToken || a["X-Amz-Security-Token"] || a["x-amz-security-token"] || (a["X-Amz-Security-Token"] = this.credentials.sessionToken), "s3" !== this.service || a["X-Amz-Content-Sha256"] || a["x-amz-content-sha256"] || (a["X-Amz-Content-Sha256"] = d(this.request.body || "", "hex")), a["X-Amz-Date"] || a["x-amz-date"] ? this.datetime = a["X-Amz-Date"] || a["x-amz-date"] : a["X-Amz-Date"] = this.getDateTime()), delete a.Authorization, delete a.authorization)
            }, f.prototype.sign = function() {
                return this.parsedPath || this.prepareRequest(), this.request.signQuery ? this.parsedPath.query["X-Amz-Signature"] = this.signature() : this.request.headers.Authorization = this.authHeader(), this.request.path = this.formatPath(), this.request
            }, f.prototype.getDateTime = function() {
                if (!this.datetime) {
                    var e = this.request.headers,
                        t = new Date(e.Date || e.date || new Date);
                    this.datetime = t.toISOString().replace(/[:\-]|\.\d{3}/g, ""), this.isCodeCommitGit && (this.datetime = this.datetime.slice(0, -1))
                }
                return this.datetime
            }, f.prototype.getDate = function() {
                return this.getDateTime().substr(0, 8)
            }, f.prototype.authHeader = function() {
                return ["AWS4-HMAC-SHA256 Credential=" + this.credentials.accessKeyId + "/" + this.credentialString(), "SignedHeaders=" + this.signedHeaders(), "Signature=" + this.signature()].join(", ")
            }, f.prototype.signature = function() {
                var e, t, a, n = this.getDate(),
                    i = [this.credentials.secretAccessKey, n, this.region, this.service].join(),
                    r = o.get(i);
                return r || (e = c("AWS4" + this.credentials.secretAccessKey, n), t = c(e, this.region), a = c(t, this.service), r = c(a, "aws4_request"), o.set(i, r)), c(r, this.stringToSign(), "hex")
            }, f.prototype.stringToSign = function() {
                return ["AWS4-HMAC-SHA256", this.getDateTime(), this.credentialString(), d(this.canonicalString(), "hex")].join("\n")
            }, f.prototype.canonicalString = function() {
                this.parsedPath || this.prepareRequest();
                var e, t = this.parsedPath.path,
                    a = this.parsedPath.query,
                    n = this.request.headers,
                    i = "",
                    r = "s3" !== this.service,
                    s = "s3" === this.service || this.request.doNotEncodePath,
                    o = "s3" === this.service,
                    c = "s3" === this.service;
                if (e = "s3" === this.service && this.request.signQuery ? "UNSIGNED-PAYLOAD" : this.isCodeCommitGit ? "" : n["X-Amz-Content-Sha256"] || n["x-amz-content-sha256"] || d(this.request.body || "", "hex"), a) {
                    var l = Object.keys(a).reduce((function(e, t) {
                            return t ? (e[u(t)] = Array.isArray(a[t]) && c ? a[t][0] : a[t], e) : e
                        }), {}),
                        p = [];
                    Object.keys(l).sort().forEach((function(e) {
                        Array.isArray(l[e]) ? l[e].map(u).sort().forEach((function(t) {
                            p.push(e + "=" + t)
                        })) : p.push(e + "=" + u(l[e]))
                    })), i = p.join("&")
                }
                return "/" !== t && (r && (t = t.replace(/\/{2,}/g, "/")), "/" !== (t = t.split("/").reduce((function(e, t) {
                    return r && ".." === t ? e.pop() : r && "." === t || (s && (t = decodeURIComponent(t.replace(/\+/g, " "))), e.push(u(t))), e
                }), []).join("/"))[0] && (t = "/" + t), o && (t = t.replace(/%2F/g, "/"))), [this.request.method || "GET", t, i, this.canonicalHeaders() + "\n", this.signedHeaders(), e].join("\n")
            }, f.prototype.canonicalHeaders = function() {
                var e = this.request.headers;
                return Object.keys(e).filter((function(e) {
                    return null == p[e.toLowerCase()]
                })).sort((function(e, t) {
                    return e.toLowerCase() < t.toLowerCase() ? -1 : 1
                })).map((function(t) {
                    return t.toLowerCase() + ":" + e[t].toString().trim().replace(/\s+/g, " ")
                })).join("\n")
            }, f.prototype.signedHeaders = function() {
                var e = this.extraHeadersToInclude,
                    t = this.extraHeadersToIgnore;
                return Object.keys(this.request.headers).map((function(e) {
                    return e.toLowerCase()
                })).filter((function(a) {
                    return e[a] || null == p[a] && !t[a]
                })).sort().join(";")
            }, f.prototype.credentialString = function() {
                return [this.getDate(), this.region, this.service, "aws4_request"].join("/")
            }, f.prototype.defaultCredentials = function() {
                var e = process.env;
                return {
                    accessKeyId: e.AWS_ACCESS_KEY_ID || e.AWS_ACCESS_KEY,
                    secretAccessKey: e.AWS_SECRET_ACCESS_KEY || e.AWS_SECRET_KEY,
                    sessionToken: e.AWS_SESSION_TOKEN
                }
            }, f.prototype.parsePath = function() {
                var e = this.request.path || "/";
                /[^0-9A-Za-z;,/?:@&=+$\-_.!~*'()#%]/.test(e) && (e = encodeURI(decodeURI(e)));
                var t = e.indexOf("?"),
                    a = null;
                t >= 0 && (a = r.parse(e.slice(t + 1)), e = e.slice(0, t)), this.parsedPath = {
                    path: e,
                    query: a
                }
            }, f.prototype.formatPath = function() {
                var e = this.parsedPath.path,
                    t = this.parsedPath.query;
                return t ? (null != t[""] && delete t[""], e + "?" + l(r.stringify(t))) : e
            }, n.RequestSigner = f, n.sign = function(e, t) {
                return new f(e, t).sign()
            }
        },
        1995: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(207)),
                r = n(a(208)),
                s = n(a(67)),
                o = n(a(55)),
                c = n(a(943)),
                d = a(29),
                l = a(201),
                u = n(a(464));

            function p(e, t) {
                m(e, t), t.add(e)
            }

            function f(e, t, a) {
                m(e, t), t.set(e, a)
            }

            function m(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function y(e, t, a) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return a
            }
            var b = e => {
                var t, a, n, m, b, g, h, T;
                return t = new WeakMap, a = new WeakMap, n = new WeakSet, m = new WeakSet, b = new WeakSet, g = new WeakSet, h = new WeakSet, T = new WeakSet, class extends e {
                    constructor(e) {
                        super(...arguments), p(this, T), p(this, h), p(this, g), p(this, b), p(this, m), p(this, n), f(this, t, {
                            writable: !0,
                            value: void 0
                        }), f(this, a, {
                            writable: !0,
                            value: void 0
                        }), (0, r.default)(this, a, []), (0, r.default)(this, t, {}), y(this, n, v).call(this), s.default.register(this.getPredefineValidatorsConfigName()), this.getPredefinedValidators().then(e => {
                            (0, r.default)(this, a, e);
                            const {
                                topic: t,
                                payload: n
                            } = (0, l.STAKING_PREDEFINED_VALIDATORS_UPDATED)(this.id, this.predefinedValidators);
                            this.eventEmmiter.emit(t, n)
                        })
                    }
                    get balances() {
                        return (0, i.default)(this, t)
                    }
                    get predefinedValidators() {
                        return (0, i.default)(this, a)
                    }
                    defaultAmount() {
                        return new u.default("0", this)
                    }
                    setBalances(e) {
                        (0, r.default)(this, t, e);
                        const {
                            topic: a,
                            payload: n
                        } = (0, l.STAKING_BALANCES_UPDATED)(this.id, this.balances);
                        y(this, m, A).call(this, n), this.eventEmmiter.emit(a, n)
                    }
                    isStakingSupported() {
                        return !0
                    }
                    async makeStakingInfoStruct({
                        staked: e = this.defaultAmount(),
                        unstaking: t = this.defaultAmount(),
                        delegatedVotes: a = this.defaultAmount(),
                        availableVotes: n = this.defaultAmount(),
                        pendingWithdrawals: i = this.defaultAmount(),
                        availableWithdrawals: r = this.defaultAmount(),
                        availableForUnstake: s = this.defaultAmount(),
                        rewards: o = this.defaultAmount(),
                        frozenVotes: c = this.defaultAmount(),
                        frozenEnergy: d = this.defaultAmount(),
                        validators: l = {},
                        additional: p = {}
                    } = {}) {
                        return {
                            total: this.calculateTotal({
                                balance: new u.default(this.balance || "0", this),
                                staked: e,
                                unstaking: t,
                                rewards: o,
                                availableWithdrawals: r,
                                frozenVotes: c,
                                frozenEnergy: d
                            }),
                            availableForStake: await this.calculateAvailableForStake({
                                balance: new u.default(this.balance || "0", this),
                                staked: e,
                                unstaking: t,
                                rewards: o,
                                frozenVotes: c,
                                frozenEnergy: d,
                                availableVotes: n
                            }),
                            availableForUnstake: s,
                            staked: e,
                            unstaking: t,
                            delegatedVotes: a,
                            availableVotes: n,
                            frozenVotes: c,
                            frozenEnergy: d,
                            pendingWithdrawals: i,
                            availableWithdrawals: r,
                            rewards: o,
                            validators: l,
                            additional: p
                        }
                    }
                    fetchStakingInfo() {
                        return this.getProvider("staking").fetchStakingInfo(this.address)
                    }
                    async getStakingInfo() {
                        const e = await this.fetchStakingInfo();
                        return this.setBalances(await this.makeStakingInfoStruct(e)), (0, i.default)(this, t)
                    }
                    calculateTotal({
                        balance: e,
                        staked: t,
                        unstaking: a,
                        availableWithdrawals: n,
                        pendingWithdrawals: i,
                        rewards: r
                    }) {
                        throw new d.UndeclaredAbstractMethodError("calculateTotal", this)
                    }
                    async calculateAvailableForStake({
                        balance: e,
                        staked: t,
                        unstaking: a
                    }) {
                        throw new d.UndeclaredAbstractMethodError("calculateAvailableForStake", this)
                    }
                    calculateAvailableForUnstake() {
                        throw new d.UndeclaredAbstractMethodError("calculateAvailableForUnstake", this)
                    }
                    calculateStakedAmount() {
                        throw new d.UndeclaredAbstractMethodError("calculateStakedAmount", this)
                    }
                    calculateUnstakingAmount() {
                        throw new d.UndeclaredAbstractMethodError("calculateUnstakingAmount", this)
                    }
                    calculateAvailableWithdrawalsAmount() {
                        throw new d.UndeclaredAbstractMethodError("calculateAvailableWithdrawalsAmount", this)
                    }
                    calculatePendingWithdrawalsAmount() {
                        throw new d.UndeclaredAbstractMethodError("calculatePendingWithdrawalsAmount", this)
                    }
                    calculateRewards() {
                        throw new d.UndeclaredAbstractMethodError("calculateRewards", this)
                    }
                    getValidators() {
                        return (0, i.default)(this, t).validators
                    }
                    getTotalBalance() {
                        return (0, i.default)(this, t).total
                    }
                    getAvailableBalance() {
                        return (0, i.default)(this, t).availableForStake
                    }
                    getAvailableForUnstakeBalance() {
                        return (0, i.default)(this, t).availableForUnstake
                    }
                    getStakedBalance(e) {
                        return y(this, T, x).call(this, "staked", e)
                    }
                    getUnstakingBalance(e) {
                        return y(this, T, x).call(this, "unstaking", e)
                    }
                    getRewards(e) {
                        return y(this, T, x).call(this, "rewards", e)
                    }
                    getDelegatedVotes() {
                        return (0, i.default)(this, t).delegatedVotes
                    }
                    getAvailableVotes() {
                        return (0, i.default)(this, t).availableVotes
                    }
                    getFrozenVotes() {
                        return (0, i.default)(this, t).frozenVotes
                    }
                    getFrozenEnergy() {
                        return (0, i.default)(this, t).frozenEnergy
                    }
                    getPendingWithdrawals(e) {
                        return y(this, T, x).call(this, "pendingWithdrawals", e)
                    }
                    getAvailableWithdrawals(e) {
                        return y(this, T, x).call(this, "availableWithdrawals", e)
                    }
                    getUserValidators(e) {
                        return this.getProvider("staking").getUserValidators(e)
                    }
                    getAdditionalInfo() {
                        return y(this, T, x).call(this, "additional")
                    }
                    async getPredefinedValidators() {
                        try {
                            const e = await s.default.get(this.getPredefineValidatorsConfigName());
                            return null != e ? e : this.getDefaultValidators()
                        } catch (e) {
                            return this.getDefaultValidators()
                        }
                    }
                    getDefaultValidators() {
                        var e;
                        const t = c.default.find(({
                            currency: e
                        }) => e === this.ticker);
                        return null !== (e = null == t ? void 0 : t.validators) && void 0 !== e ? e : []
                    }
                    getPredefineValidatorsConfigIdentifier() {
                        return this.ticker
                    }
                    getPredefineValidatorsConfigName() {
                        return "stake_validators_" + this.getPredefineValidatorsConfigIdentifier().toLowerCase()
                    }
                };
                async function v() {
                    const {
                        topic: e
                    } = (0, l.STAKING_BALANCES_CACHE)(this.id);
                    try {
                        const t = localStorage.getItem(e);
                        return this.setBalances(t ? y(this, h, w).call(this, JSON.parse(t)) : await this.makeStakingInfoStruct())
                    } catch (e) {
                        return o.default.error({
                            instance: this,
                            error: e
                        }), this.setBalances(await this.makeStakingInfoStruct())
                    }
                }

                function A(e) {
                    const {
                        topic: t,
                        payload: a
                    } = (0, l.STAKING_BALANCES_CACHE)(this.id, e);
                    localStorage.setItem(t, JSON.stringify(a))
                }

                function k(e) {
                    try {
                        return new u.default(e, this)
                    } catch (t) {
                        throw new Error(`${this}: \`transformValidatorsObjectFromJSON\`: Unable to transform value: ${e}`)
                    }
                }

                function E(e) {
                    return Object.entries(e).reduce((e, [t, a]) => (e[t] = Object.entries(a).reduce((e, [t, a]) => {
                        if (["address", "contract", "owner"].includes(t)) e[t] = a;
                        else try {
                            e[t] = y(this, b, k).call(this, a)
                        } catch (e) {
                            throw new Error(`${e.message}, key: ${t}`)
                        }
                        return e
                    }, {}), e), {})
                }

                function w(e) {
                    return Object.entries(e).reduce((e, [t, a]) => {
                        if ("additional" === t) e[t] = a;
                        else if ("validators" === t) e[t] = y(this, g, E).call(this, a);
                        else try {
                            e[t] = y(this, b, k).call(this, a)
                        } catch (e) {
                            throw new Error(`${e.message}, key: ${t}`)
                        }
                        return e
                    }, {})
                }

                function x(e, a) {
                    if (a) try {
                        return (0, i.default)(this, t).validators[a][e]
                    } catch (e) {
                        return console.warn(`Probably ${this.ticker} doesn't have such validator yet\n`, e), "0"
                    }
                    return (0, i.default)(this, t)[e]
                }
            };
            t.default = b
        },
        201: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.STAKING_PREDEFINED_VALIDATORS_UPDATED = t.STAKING_BALANCES_UPDATED = t.STAKING_BALANCES_CACHE = t.HISTORY_WALLET_UPDATED = void 0;
            t.STAKING_PREDEFINED_VALIDATORS_UPDATED = (e, t) => ({
                topic: e + "::staking::predefined-validators-updated",
                payload: t
            });
            t.STAKING_BALANCES_UPDATED = (e, t) => ({
                topic: e + "::staking::balances-updated",
                payload: t
            });
            t.STAKING_BALANCES_CACHE = (e, t) => ({
                topic: e + "-staking-infos",
                payload: t
            });
            t.HISTORY_WALLET_UPDATED = (e, t) => ({
                topic: e + "-history-updated",
                payload: t
            })
        },
        2075: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = function(e, t) {
                var a, n, i;
                return new e({
                    id: t.id,
                    ticker: t.ticker,
                    name: t.name,
                    alias: "atomic",
                    feeData: t.feeData,
                    explorers: t.explorers,
                    txWebUrl: t.txWebUrl,
                    socket: !!t.socket,
                    stakingContract: null === (a = t.feeData) || void 0 === a ? void 0 : a.stakingContract,
                    stakingProxyContract: null === (n = t.feeData) || void 0 === n ? void 0 : n.stakingProxyContract,
                    network: t.network,
                    chainId: t.chainId,
                    notify: null !== (i = t.notify) && void 0 !== i && i,
                    isTestnet: !!t.isTestnet
                })
            };
            t.default = n
        },
        2076: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.filtersAndGroupsConfig = void 0;
            var i = n(a(67)),
                r = a(321),
                s = n(a(4407));
            let o = s.default,
                c = null;
            const d = {
                load: () => (c || (c = async function() {
                    try {
                        o = await i.default.get(r.ConfigKey.FiltersAndGroups)
                    } catch (e) {
                        console.warn(`Could not load "${r.ConfigKey.FiltersAndGroups}" config, using fallback`), console.error(e)
                    }
                }()), c),
                getGroups: () => o.groups.reduce((e, t) => {
                    const a = t.coins.map(e => {
                        var t, a;
                        return {
                            ticker: null === (t = e.ticker) || void 0 === t ? void 0 : t.toUpperCase(),
                            contract: e.contract,
                            parentTicker: null === (a = e.network) || void 0 === a ? void 0 : a.toUpperCase()
                        }
                    });
                    return e.push({
                        name: t.name,
                        coins: a || []
                    }), e
                }, []),
                getFilterNames() {
                    var e;
                    return null === (e = o.filters) || void 0 === e ? void 0 : e.map(({
                        name: e
                    }) => e)
                },
                getCoinsForFilter(e) {
                    const t = o.filters.find(({
                        name: t
                    }) => {
                        return a = e, t.toLowerCase() === a.toLowerCase();
                        var a
                    });
                    return (null == t ? void 0 : t.coins.map(({
                        network: e,
                        ticker: t
                    }) => ({
                        parentTicker: e,
                        ticker: t
                    }))) || []
                }
            };
            t.filtersAndGroupsConfig = d
        },
        2079: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ACTION_WITHDRAW = t.ACTION_VOTE = t.ACTION_UNSTAKE = t.ACTION_STAKE = t.ACTION_SEND = t.ACTION_FREEZE = t.ACTION_EXCHANGE = t.ACTION_CLAIM = t.ACTION_BUY = void 0;
            t.ACTION_BUY = "buy";
            t.ACTION_CLAIM = "claim";
            t.ACTION_EXCHANGE = "exchange";
            t.ACTION_FREEZE = "freeze";
            t.ACTION_SEND = "send";
            t.ACTION_STAKE = "stake";
            t.ACTION_UNSTAKE = "unstake";
            t.ACTION_VOTE = "vote";
            t.ACTION_WITHDRAW = "withdraw"
        },
        2089: function(e, t, a) {
            "use strict";
            var n = a(721),
                i = a.n(n),
                r = a(1196),
                s = a(3);
            var o = function(e) {
                    a(4505)
                },
                c = Object(s.a)(i.a, r.a, r.b, !1, o, "data-v-a70f0ba8", null);
            t.default = c.exports
        },
        2090: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZwogICAgd2lkdGg9IjIwIgogICAgaGVpZ2h0PSIxNiIKICAgIHZpZXdCb3g9IjAgMCAyMCAxNiIKICAgIGZpbGw9Im5vbmUiCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgPgogICAgPHBhdGgKICAgICAgZmlsbC1ydWxlPSJldmVub2RkIgogICAgICBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik0zLjQ1OTQgMC4yOTI4OTNDMy44NDk5MiAtMC4wOTc2MzExIDQuNDgzMDkgLTAuMDk3NjMxMSA0Ljg3MzYxIDAuMjkyODkzTDE4Ljc2MjUgMTQuMTgxOEMxOS4xNTMgMTQuNTcyMyAxOS4xNTMgMTUuMjA1NSAxOC43NjI1IDE1LjU5NkMxOC4zNzIgMTUuOTg2NSAxNy43Mzg4IDE1Ljk4NjUgMTcuMzQ4MyAxNS41OTZMMTUuNDc5NCAxMy43MjcxQzEzLjc4MTkgMTQuNTM1NiAxMS44MTEzIDE1IDEwIDE1QzcuODE2MzQgMTUgNS4zODY5MiAxNC4zMjQ0IDMuNDgxMDIgMTMuMTY3M0MxLjYwMzcxIDEyLjAyNzUgMCAxMC4yNjE1IDAgOEMwIDYuNTQwNjggMC42NzcyOTIgNS4yNzc1OSAxLjY0NDc5IDQuMjc1OTRDMi4zNDk0MiAzLjU0NjQ0IDMuMjI5NyAyLjkzMDEzIDQuMTg5MTggMi40MzY4OUwzLjQ1OTQgMS43MDcxMUMzLjA2ODg3IDEuMzE2NTggMy4wNjg4NyAwLjY4MzQxNyAzLjQ1OTQgMC4yOTI4OTNaTTUuNjg5NjYgMy45MzczN0M0LjY0NDA2IDQuMzk0ODIgMy43MzU5OSA0Ljk4OTcgMy4wODMzMiA1LjY2NTQyQzIuMzY3MDggNi40MDY5NCAyIDcuMTk3MTUgMiA4QzIgOS4yMzg0NiAyLjg5NjI5IDEwLjQ3MjUgNC41MTg5OCAxMS40NTc3QzYuMTEzMDggMTIuNDI1NiA4LjE4MzY2IDEzIDEwIDEzQzExLjI3MzQgMTMgMTIuNjc5MSAxMi43MTczIDEzLjk2MDcgMTIuMjA4NEwxMi4zNDggMTAuNTk1N0MxMS43MjcgMTEuMTU3NyAxMC45MDM1IDExLjUgMTAgMTEuNUM4LjA2NyAxMS41IDYuNSA5LjkzMzA1IDYuNSA4LjAwMDA1QzYuNSA3LjA5NjU2IDYuODQyMzQgNi4yNzMwMyA3LjQwNDM4IDUuNjUyMDlMNS42ODk2NiAzLjkzNzM3Wk04LjgyMjcyIDcuMDcwNDNMMTAuOTI5NiA5LjE3NzMzQzEwLjY3NCA5LjM3OTQxIDEwLjM1MTEgOS41MDAwNSAxMCA5LjUwMDA1QzkuMTcxNTcgOS41MDAwNSA4LjUgOC44Mjg0OCA4LjUgOC4wMDAwNUM4LjUgNy42NDg5NCA4LjYyMDY0IDcuMzI2IDguODIyNzIgNy4wNzA0M1pNOS45NjE3OSAzLjAwMDA4TDEwIDNDMTEuODE2MyAzIDEzLjg4NjkgMy41NzQ0NCAxNS40ODEgNC41NDIyOUMxNy4xMDM3IDUuNTI3NDkgMTggNi43NjE1NCAxOCA4QzE4IDguNjQ5NyAxNy43NjEzIDkuMjg1MTEgMTcuMjk0NyA5Ljg5NjQ4QzE2Ljk1OTcgMTAuMzM1NSAxNy4wNDQgMTAuOTYzIDE3LjQ4MyAxMS4yOTgxQzE3LjkyMjEgMTEuNjMzMiAxOC41NDk2IDExLjU0ODkgMTguODg0NiAxMS4xMDk4QzE5LjU2MTMgMTAuMjIzMiAyMCA5LjE3MjE3IDIwIDhDMjAgNS43Mzg0NiAxOC4zOTYzIDMuOTcyNTEgMTYuNTE5IDIuODMyNzFDMTQuNjEzMSAxLjY3NTU2IDEyLjE4MzcgMSAxMCAxTDkuOTUyOTQgMS4wMDAxQzkuNDAwNjcgMS4wMDI1NSA4Ljk1NDk0IDEuNDUyMjQgOC45NTczOCAyLjAwNDUyQzguOTU5ODIgMi41NTY4IDkuNDA5NTEgMy4wMDI1MyA5Ljk2MTc5IDMuMDAwMDhaIgogICAgICBmaWxsPSIjN0E4NTlGIgogICAgLz4KICA8L3N2Zz4="
        },
        2091: function(e, t) {
            e.exports = "data:image/svg+xml;base64,IDxzdmcKICAgIHdpZHRoPSIyMCIKICAgIGhlaWdodD0iMTQiCiAgICB2aWV3Qm94PSIwIDAgMjAgMTQiCiAgICBmaWxsPSJub25lIgogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogID4KICAgIDxwYXRoCiAgICAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgICBkPSJNMTggN0MxOCA4LjA2NjIgMTcuMjU5NSA5LjI4MTUxIDE1LjU5MTYgMTAuMzQ0OEMxMy45NjI1IDExLjM4MzMgMTEuODM0NSAxMiAxMCAxMkM4LjE2NTUyIDEyIDYuMDM3NSAxMS4zODMzIDQuNDA4NDUgMTAuMzQ0OEMyLjc0MDU1IDkuMjgxNTEgMiA4LjA2NjIgMiA3QzIgNS45MzM4IDIuNzQwNTUgNC43MTg0OSA0LjQwODQ1IDMuNjU1MkM2LjAzNzUgMi42MTY2OSA4LjE2NTUyIDIgMTAgMkMxMS44MzQ1IDIgMTMuOTYyNSAyLjYxNjY5IDE1LjU5MTYgMy42NTUyQzE3LjI1OTUgNC43MTg0OSAxOCA1LjkzMzggMTggN1pNMjAgN0MyMCAxMS4wODMzIDE0LjQ0NDQgMTQgMTAgMTRDNS41NTU1NiAxNCAwIDExLjA4MzMgMCA3QzAgMi45MTY2NyA1LjU1NTU2IDAgMTAgMEMxNC40NDQ0IDAgMjAgMi45MTY2NyAyMCA3Wk0xMS41IDdDMTEuNSA3LjgyODQzIDEwLjgyODQgOC41IDEwIDguNUM5LjE3MTU3IDguNSA4LjUgNy44Mjg0MyA4LjUgN0M4LjUgNi4xNzE1NyA5LjE3MTU3IDUuNSAxMCA1LjVDMTAuODI4NCA1LjUgMTEuNSA2LjE3MTU3IDExLjUgN1pNMTMuNSA3QzEzLjUgOC45MzMgMTEuOTMzIDEwLjUgMTAgMTAuNUM4LjA2NyAxMC41IDYuNSA4LjkzMyA2LjUgN0M2LjUgNS4wNjcgOC4wNjcgMy41IDEwIDMuNUMxMS45MzMgMy41IDEzLjUgNS4wNjcgMTMuNSA3WiIKICAgICAgZmlsbD0iIzdBODU5RiIKICAgIC8+CiAgPC9zdmc+"
        },
        2092: function(e, t) {
            e.exports = "data:image/svg+xml;base64,ICA8c3ZnCiAgICB3aWR0aD0iMTQiCiAgICBoZWlnaHQ9IjE0IgogICAgdmlld0JveD0iMCAwIDE0IDE0IgogICAgZmlsbD0ibm9uZSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICA+CiAgICA8cGF0aAogICAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICAgIGNsaXAtcnVsZT0iZXZlbm9kZCIKICAgICAgZD0iTTEzLjcwNzEgMS43MDcxMUMxNC4wOTc2IDEuMzE2NTggMTQuMDk3NiAwLjY4MzQxNyAxMy43MDcxIDAuMjkyODkzQzEzLjMxNjYgLTAuMDk3NjMxMSAxMi42ODM0IC0wLjA5NzYzMTEgMTIuMjkyOSAwLjI5Mjg5M0w3IDUuNTg1NzlMMS43MDcxMSAwLjI5Mjg5M0MxLjMxNjU4IC0wLjA5NzYzMTEgMC42ODM0MTcgLTAuMDk3NjMxMSAwLjI5Mjg5MyAwLjI5Mjg5M0MtMC4wOTc2MzExIDAuNjgzNDE3IC0wLjA5NzYzMTEgMS4zMTY1OCAwLjI5Mjg5MyAxLjcwNzExTDUuNTg1NzkgN0wwLjI5Mjg5MyAxMi4yOTI5Qy0wLjA5NzYzMTEgMTIuNjgzNCAtMC4wOTc2MzExIDEzLjMxNjYgMC4yOTI4OTMgMTMuNzA3MUMwLjY4MzQxNyAxNC4wOTc2IDEuMzE2NTggMTQuMDk3NiAxLjcwNzExIDEzLjcwNzFMNyA4LjQxNDIxTDEyLjI5MjkgMTMuNzA3MUMxMi42ODM0IDE0LjA5NzYgMTMuMzE2NiAxNC4wOTc2IDEzLjcwNzEgMTMuNzA3MUMxNC4wOTc2IDEzLjMxNjYgMTQuMDk3NiAxMi42ODM0IDEzLjcwNzEgMTIuMjkyOUw4LjQxNDIxIDdMMTMuNzA3MSAxLjcwNzExWiIKICAgICAgZmlsbD0iIzdBODU5RiIKICAgIC8+CiAgPC9zdmc+"
        },
        2093: function(e, t) {
            e.exports = "data:image/svg+xml;base64,ICA8c3ZnCiAgICB3aWR0aD0iMjAiCiAgICBoZWlnaHQ9IjIwIgogICAgdmlld0JveD0iMCAwIDIwIDIwIgogICAgZmlsbD0ibm9uZSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICA+CiAgICA8cGF0aAogICAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICAgIGNsaXAtcnVsZT0iZXZlbm9kZCIKICAgICAgZD0iTTE4LjIwNzIgMS43OTI4N0MxNi45ODgzIDAuNTczOTIzIDE1LjAxMiAwLjU3MzkyNiAxMy43OTMgMS43OTI4N0wxLjIzMDI2IDE0LjM1NTZMMS4xNzEzMiAxNC40MTQ1QzAuODgzMzI5IDE0LjcwMTkgMC42Mjk0MTggMTQuOTU1NCAwLjQ0MjE4MiAxNS4yNjA5QzAuMjc3Njk2IDE1LjUyOTMgMC4xNTY0ODMgMTUuODIyIDAuMDgyOTkyMiAxNi4xMjgxQy0wLjAwMDY2MjE0MSAxNi40NzY1IC0wLjAwMDMyODM1NyAxNi44MzUzIDUuMDI1MmUtMDUgMTcuMjQyMkwwLjAwMDEwMTc1IDE3LjMyNTVWMTlDMC4wMDAxMDE3NSAxOS41NTIzIDAuNDQ3ODE3IDIwIDEuMDAwMSAyMEgyLjY3NDY0TDIuNzU3OTQgMjBDMy4xNjQ4NCAyMC4wMDA0IDMuNTIzNTkgMjAuMDAwNyAzLjg3MjA0IDE5LjkxNzFDNC4xNzgxNSAxOS44NDM2IDQuNDcwNzggMTkuNzIyNCA0LjczOTIgMTkuNTU3OUM1LjA0NDczIDE5LjM3MDcgNS4yOTgxNiAxOS4xMTY4IDUuNTg1NiAxOC44Mjg4TDUuNTg1NjIgMTguODI4OEw1LjY0NDQ5IDE4Ljc2OThMMTguMjA3MiA2LjIwNzA5QzE5LjQyNjIgNC45ODgxNCAxOS40MjYyIDMuMDExODMgMTguMjA3MiAxLjc5Mjg3Wk0xNS4yMDcyIDMuMjA3MDlDMTUuNjQ1MSAyLjc2OTE5IDE2LjM1NTEgMi43NjkxOSAxNi43OTMgMy4yMDcwOUMxNy4yMzA5IDMuNjQ0OTkgMTcuMjMwOSA0LjM1NDk3IDE2Ljc5MyA0Ljc5Mjg4TDE1LjAwMDEgNi41ODU4NEwxMy40MTQzIDUuMDAwMDVMMTUuMjA3MiAzLjIwNzA5Wk0xMi4wMDAxIDYuNDE0MjZMMi42NDQ0NyAxNS43Njk4QzIuMjY0OTEgMTYuMTQ5NCAyLjE5NDkyIDE2LjIyODUgMi4xNDc0NiAxNi4zMDU5QzIuMDkyNjMgMTYuMzk1NCAyLjA1MjIzIDE2LjQ5MjkgMi4wMjc3MyAxNi41OTVDMi4wMDY1MyAxNi42ODMzIDIuMDAwMSAxNi43ODg3IDIuMDAwMSAxNy4zMjU1VjE4SDIuNjc0NjRDMy4yMTE0MiAxOCAzLjMxNjgzIDE3Ljk5MzYgMy40MDUxNSAxNy45NzI0QzMuNTA3MTggMTcuOTQ3OSAzLjYwNDczIDE3LjkwNzUgMy42OTQyIDE3Ljg1MjZDMy43NzE2NCAxNy44MDUyIDMuODUwNzIgMTcuNzM1MiA0LjIzMDI4IDE3LjM1NTZMMTMuNTg1OCA4LjAwMDA2TDEyLjAwMDEgNi40MTQyNloiCiAgICAgIGZpbGw9IiM3QTg1OUYiCiAgICAvPgogIDwvc3ZnPg=="
        },
        2094: function(e, t, a) {
            "use strict";
            var n = a(723),
                i = a.n(n),
                r = a(1197),
                s = a(3);
            var o = function(e) {
                    a(4508)
                },
                c = Object(s.a)(i.a, r.a, r.b, !1, o, "data-v-05fa7eed", null);
            t.default = c.exports
        },
        232: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Staking", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            });
            var i = n(a(2459))
        },
        2340: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = [{
                constant: !0,
                inputs: [],
                name: "name",
                outputs: [{
                    name: "",
                    type: "string"
                }],
                payable: !1,
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "_spender",
                    type: "address"
                }, {
                    name: "_value",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    name: "success",
                    type: "bool"
                }],
                payable: !1,
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "_from",
                    type: "address"
                }, {
                    name: "_to",
                    type: "address"
                }, {
                    name: "_value",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    name: "success",
                    type: "bool"
                }],
                payable: !1,
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "decimals",
                outputs: [{
                    name: "",
                    type: "uint8"
                }],
                payable: !1,
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "version",
                outputs: [{
                    name: "",
                    type: "string"
                }],
                payable: !1,
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    name: "_owner",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    name: "balance",
                    type: "uint256"
                }],
                payable: !1,
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "symbol",
                outputs: [{
                    name: "",
                    type: "string"
                }],
                payable: !1,
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "_to",
                    type: "address"
                }, {
                    name: "_value",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    name: "success",
                    type: "bool"
                }],
                payable: !1,
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "_spender",
                    type: "address"
                }, {
                    name: "_value",
                    type: "uint256"
                }, {
                    name: "_extraData",
                    type: "bytes"
                }],
                name: "approveAndCall",
                outputs: [{
                    name: "success",
                    type: "bool"
                }],
                payable: !1,
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    name: "_owner",
                    type: "address"
                }, {
                    name: "_spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    name: "remaining",
                    type: "uint256"
                }],
                payable: !1,
                type: "function"
            }, {
                inputs: [{
                    name: "_initialAmount",
                    type: "uint256"
                }, {
                    name: "_tokenName",
                    type: "string"
                }, {
                    name: "_decimalUnits",
                    type: "uint8"
                }, {
                    name: "_tokenSymbol",
                    type: "string"
                }],
                type: "constructor"
            }, {
                payable: !1,
                type: "fallback"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    name: "_from",
                    type: "address"
                }, {
                    indexed: !0,
                    name: "_to",
                    type: "address"
                }, {
                    indexed: !1,
                    name: "_value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    name: "_owner",
                    type: "address"
                }, {
                    indexed: !0,
                    name: "_spender",
                    type: "address"
                }, {
                    indexed: !1,
                    name: "_value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                constant: !1,
                inputs: [{
                    name: "spender",
                    type: "address"
                }, {
                    name: "addedValue",
                    type: "uint256"
                }],
                name: "increaseAllowance",
                outputs: [{
                    name: "success",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }]
        },
        2341: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = [{
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                constant: !0,
                inputs: [],
                name: "activeAmount",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_minSharesToMint",
                    type: "uint256"
                }],
                name: "buyVoucher",
                outputs: [{
                    internalType: "uint256",
                    name: "amountToDeposit",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "commissionRate_deprecated",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "subtractedValue",
                    type: "uint256"
                }],
                name: "decreaseAllowance",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "delegation",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "address payable",
                    name: "destination",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "drain",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "eventsHub",
                outputs: [{
                    internalType: "contract EventsHub",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "exchangeRate",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }],
                name: "getLiquidRewards",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "getRewardPerShare",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }],
                name: "getTotalStake",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "addedValue",
                    type: "uint256"
                }],
                name: "increaseAllowance",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "initalRewardPerShare",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_validatorId",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "_stakingLogger",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_stakeManager",
                    type: "address"
                }],
                name: "initialize",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "isOwner",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "lastCommissionUpdate_deprecated",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "lock",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "locked",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "migrateIn",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "migrateOut",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "minAmount",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "restake",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "rewardPerShare",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "claimAmount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "maximumSharesToBurn",
                    type: "uint256"
                }],
                name: "sellVoucher",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "claimAmount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "maximumSharesToBurn",
                    type: "uint256"
                }],
                name: "sellVoucher_new",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorStake",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "delegatedAmount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "totalAmountToSlash",
                    type: "uint256"
                }],
                name: "slash",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "stakeManager",
                outputs: [{
                    internalType: "contract IStakeManager",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "stakingLogger",
                outputs: [{
                    internalType: "contract StakingInfo",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalStake_deprecated",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
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
                    name: "value",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "unbondNonces",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "unbonds",
                outputs: [{
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "withdrawEpoch",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "unbonds_new",
                outputs: [{
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "withdrawEpoch",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "unlock",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "unstakeClaimTokens",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "unbondNonce",
                    type: "uint256"
                }],
                name: "unstakeClaimTokens_new",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "bool",
                    name: "_delegation",
                    type: "bool"
                }],
                name: "updateDelegation",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "validatorId",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "validatorRewards_deprecated",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "withdrawExchangeRate",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "withdrawPool",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "withdrawRewards",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "withdrawShares",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }]
        },
        2349: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(26),
                r = a(29),
                s = n(a(1121));
            var o = e => class extends e {
                constructor() {
                    if (super(...arguments), "function" != typeof super.getProvider) throw new r.InternalError({
                        type: i.INTERNAL_ERROR,
                        instance: this
                    })
                }
                isNftSupported() {
                    return !0
                }
                getNftInfoUrl(e, t) {
                    return this.getProvider("nft-mint-url").makeNftInfoUrl(e, t)
                }
                async getNftList() {
                    return this.getProvider("nft-get").fetchNftList(this)
                }
                async transferNft(e, t, a, n = {}) {
                    let o, c;
                    try {
                        o = (await s.default.getOneOptimistic(this, e, t)).tokenStandard
                    } catch (e) {
                        throw console.warn(e), new r.InternalError({
                            type: i.INTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                    try {
                        c = await this.getProvider("nft-send").sendNft(this, a, e, t, o, n)
                    } catch (e) {
                        throw console.warn(e), new r.ExternalError({
                            type: i.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                    try {
                        await s.default.delete(this, e, t)
                    } catch (e) {
                        throw console.warn(e), new r.InternalError({
                            type: i.INTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                    return c
                }
            };
            t.default = o
        },
        2370: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = [{
                name: "approve",
                inputs: [{
                    name: "spender",
                    type: "address"
                }, {
                    name: "amount",
                    type: "uint256"
                }],
                outputs: [{
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                name: "balanceOf",
                inputs: [{
                    name: "account",
                    type: "address"
                }],
                outputs: [{
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                name: "delegate",
                inputs: [{
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_bips",
                    type: "uint256"
                }],
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                name: "delegatesOf",
                inputs: [{
                    internalType: "address",
                    name: "_owner",
                    type: "address"
                }],
                outputs: [{
                    internalType: "address[]",
                    name: "_delegateAddresses",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_bips",
                    type: "uint256[]"
                }, {
                    internalType: "uint256",
                    name: "_count",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_delegationMode",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                name: "delegatesOfAt",
                inputs: [{
                    internalType: "address",
                    name: "_owner",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_blockNumber",
                    type: "uint256"
                }],
                outputs: [{
                    internalType: "address[]",
                    name: "_delegateAddresses",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_bips",
                    type: "uint256[]"
                }, {
                    internalType: "uint256",
                    name: "_count",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_delegationMode",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                name: "delegationModeOf",
                inputs: [{
                    internalType: "address",
                    name: "_who",
                    type: "address"
                }],
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                name: "deposit",
                inputs: [],
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                name: "depositTo",
                inputs: [{
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }],
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes4",
                    name: "_selector",
                    type: "bytes4"
                }],
                name: "executeGovernanceCall",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "governance",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "governanceSettings",
                outputs: [{
                    internalType: "contract IGovernanceSettings",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "governanceVotePower",
                outputs: [{
                    internalType: "contract IGovernanceVotePower",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "addedValue",
                    type: "uint256"
                }],
                name: "increaseAllowance",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_initialGovernance",
                    type: "address"
                }],
                name: "initialise",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "productionMode",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "readVotePowerContract",
                outputs: [{
                    internalType: "contract IVPContractEvents",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_who",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_blockNumber",
                    type: "uint256"
                }],
                name: "revokeDelegationAt",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_cleanerContract",
                    type: "address"
                }],
                name: "setCleanerContract",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_blockNumber",
                    type: "uint256"
                }],
                name: "setCleanupBlockNumber",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "totalVotePower",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "undelegateAll",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address[]",
                    name: "_delegateAddresses",
                    type: "address[]"
                }],
                name: "undelegateAllExplicit",
                outputs: [{
                    internalType: "uint256",
                    name: "_remainingDelegation",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_from",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }],
                name: "votePowerFromTo",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_owner",
                    type: "address"
                }],
                name: "votePowerOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_owner",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_blockNumber",
                    type: "uint256"
                }],
                name: "votePowerOfAtIgnoringRevocation",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "withdraw",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }]
        },
        2371: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = [{
                inputs: [{
                    internalType: "address",
                    name: "_beneficiary",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_rewardEpoch",
                    type: "uint256"
                }],
                name: "getStateOfRewards",
                outputs: [{
                    internalType: "address[]",
                    name: "_dataProviders",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_rewardAmounts",
                    type: "uint256[]"
                }, {
                    internalType: "bool[]",
                    name: "_claimed",
                    type: "bool[]"
                }, {
                    internalType: "bool",
                    name: "_claimable",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_rewardOwner",
                    type: "address"
                }, {
                    internalType: "address payable",
                    name: "_recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_rewardEpoch",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "_wrap",
                    type: "bool"
                }],
                name: "claim",
                outputs: [{
                    internalType: "uint256",
                    name: "_rewardAmount",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_beneficiary",
                    type: "address"
                }],
                name: "getEpochsWithUnclaimedRewards",
                outputs: [{
                    internalType: "uint256[]",
                    name: "_epochIds",
                    type: "uint256[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "newFtsoRewardManager",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "claimSetupManager",
                outputs: [{
                    internalType: "contract IIClaimSetupManager",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }]
        },
        2412: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const i = new(n(a(2413)).default)("dexie");
            let r = 1;
            i.version(r++).stores({
                rates: "++id, [ticker+fiat]",
                tokens: "++id, uniqueField, parentTicker",
                exchangeTxs: "++exid, id",
                transactions: "++id, [txid+ticker+alias+direction]"
            }), i.version(r++).stores({
                rates: "++id, [ticker+fiat]",
                tokens: "++id, uniqueField, parentTicker",
                exchangeTxs: "++exid, id",
                transactions: "++id, [ticker+alias], [txid+ticker+alias]"
            }), i.version(r++).stores({
                rates: null,
                tokens: "++id, uniqueField, parentTicker",
                exchangeTxs: "++exid, id",
                transactions: null
            }), i.version(r++).stores({
                rates: "id, fiat, [ticker+fiat]",
                tokens: "++id, uniqueField, parentTicker",
                exchangeTxs: "++exid, id",
                transactions: "id, [ticker+alias], [txid+ticker+alias]"
            }), i.version(r++).stores({
                rates: "id, fiat, [ticker+fiat]",
                tokens: "++id, uniqueField, parentTicker",
                exchangeTxs: "++exid, id",
                simplexTxs: "id, quoteId",
                transactions: "id, [ticker+alias], [txid+ticker+alias]",
                chartData: "id, fiat, [ticker+fiat+endPoint]"
            }), i.version(r++).stores({
                rates: "id, fiat, [ticker+fiat]",
                tokens: "++id, uniqueField, parentTicker",
                exchangeTxs: "++exid, id",
                simplexTxs: "id, quoteId",
                transactions: "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]",
                chartData: "id, fiat, [ticker+fiat+endPoint]"
            }), i.version(r++).stores({
                configs: "id, expired",
                rates: "id, fiat, [ticker+fiat]",
                tokens: "++id, uniqueField, parentTicker",
                exchangeTxs: "++exid, id",
                simplexTxs: "id, quoteId",
                transactions: "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]",
                chartData: "id, fiat, [ticker+fiat+endPoint]"
            }), i.version(r++).stores({
                configs: "id, expired",
                rates: "id, fiat, [ticker+fiat]",
                tokens: "++id, uniqueField, parentTicker",
                exchangeTxs: "++exid, id",
                simplexTxs: "id, quoteId",
                transactions: "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]",
                chartData: "id, fiat, [ticker+fiat+endPoint]",
                addrCache: "id, ticker, address, type, [ticker+type]"
            }), i.version(r++).stores({
                addrCache: "id, ticker, address, type, [ticker+type]",
                chartData: "id, fiat, [ticker+fiat+endPoint]",
                configs: "id, expired",
                exchangeTxs: "++exid, id",
                nfts: "id, ticker",
                rates: "id, fiat, [ticker+fiat]",
                simplexTxs: "id, quoteId",
                tokens: "++id, uniqueField, parentTicker",
                transactions: "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]"
            }), i.version(r++).stores({
                addrCache: "id, ticker, address, type, [ticker+type]",
                chartData: "id, fiat, [ticker+fiat+endPoint]",
                configs: "id, expired",
                exchangeTxs: "++exid, id",
                nfts: "id, ticker",
                rates: "id, fiat, [walletId+fiat]",
                simplexTxs: "id, quoteId",
                tokens: "++id, uniqueField, parentTicker",
                transactions: "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]"
            }), i.version(r++).stores({
                addrCache: "id, ticker, address, type, [ticker+type]",
                chartData: "id, fiat, [ticker+fiat+endPoint]",
                configs: "id, expired",
                exchangeTxs: "++exid, id",
                nfts: "id, ticker, deletedTill",
                rates: "id, fiat, [walletId+fiat]",
                simplexTxs: "id, quoteId",
                tokens: "++id, uniqueField, parentTicker",
                transactions: "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]"
            }), i.version(r++).stores({
                addrCache: "id, ticker, address, type, [ticker+type]",
                chartData: "id, fiat, [ticker+fiat+endPoint]",
                configs: "id, expired",
                exchangeTxs: "++exid, id",
                nfts: "id, ticker, [ticker+id]",
                sentNfts: "id, ticker, expiredAt",
                rates: "id, fiat, [walletId+fiat]",
                simplexTxs: "id, quoteId",
                tokens: "++id, uniqueField, parentTicker",
                transactions: "id, [ticker+alias], [txid+ticker+alias],  [ticker+alias+walletid], [txid+ticker+alias+walletid]"
            }), i.version(r++).stores({
                addrCache: "id, ticker, address, type, [ticker+type]",
                chartData: "id, fiat, [ticker+fiat+endPoint]",
                configs: "id, expired",
                exchangeTxs: "++exid, id",
                nfts: "id, ticker, [ticker+id]",
                sentNfts: "id, ticker, expiredAt",
                rates: "id, fiat, [walletId+fiat]",
                simplexTxs: "id, quoteId",
                tokens: "++id, uniqueField, parentTicker",
                transactions: "id, alias, [txid+alias], [alias+walletid], [txid+alias+walletid], [ticker+alias], [txid+ticker+alias], [ticker+alias+walletid], [txid+ticker+alias+walletid]"
            }), i.version(r++).stores({
                tokens: "++id, uniqueField, parentTicker, [parentTicker+uniqueField]"
            }), i.version(r++).stores({
                nfts: null,
                sentNfts: null
            }), i.version(r++).stores({
                nfts: "[ticker+contractAddress+tokenId], ticker",
                sentNfts: "[ticker+contractAddress+tokenId], ticker, expiredAt"
            }), i.version(r++).stores({
                ifProgramState: "key"
            }), i.version(r++).stores({
                banner: "key"
            });
            var s = i;
            t.default = s
        },
        2414: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = e => {
                let t = 233495534;
                for (let a = 0; a < e.length; a += 1) t = 233495534, t = Math.imul(t ^ e.charCodeAt(a), 2654435761);
                return ((t ^ t >>> 16) >>> 0).toString()
            };
            t.default = n
        },
        2415: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = e => {
                let t = "";
                if (e) {
                    const a = "" + e;
                    for (let e = 0; e < a.length; e += 2) t += String.fromCharCode(parseInt(a.substr(e, 2), 16))
                }
                return t
            };
            t.default = n
        },
        2416: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(57));
            t.default = async () => {
                const {
                    data: e
                } = await i.default.get("http://api.ipstack.com/check?access_key=4e58e3f8a7bb4fd994f948b63e127e3b"), {
                    ip: t,
                    latitude: a,
                    longitude: n
                } = e;
                return {
                    ip: t,
                    geo: `${a}, ${n}`
                }
            }
        },
        2417: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = (e, t) => {
                const a = [],
                    n = e.length;
                for (let i = 0; i < n; i += t) a.push(e.slice(i, i + t));
                return a
            };
            t.default = n
        },
        2418: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = (e, t = 100) => {
                const a = [];
                for (; e.length > t;) {
                    const n = e.slice(0, t),
                        i = "," === e[t] ? t : n.lastIndexOf(",");
                    a.push(e.slice(0, i)), e = e.slice(i + 1)
                }
                return e.length > 0 && a.push(e), a
            };
            t.default = n
        },
        2419: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = (e, t) => {
                const a = e.length,
                    n = {};
                for (let i = 0; i < a; i += 1) n[e[i][t]] = e[i];
                return n
            };
            t.default = n
        },
        2420: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setCachedBalance = t.isBalanceCached = t.getCachedBalance = void 0;
            const n = e => e + "-balance",
                i = e => localStorage.getItem(n(e));
            t.getCachedBalance = e => Number(i(e));
            t.isBalanceCached = e => null != i(e);
            t.setCachedBalance = (e, t) => localStorage.setItem(n(e), t)
        },
        2421: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = e => {
                if (!Array.isArray(e)) throw new TypeError("Invalid Array");
                return e[Math.floor(Math.random() * e.length)]
            }
        },
        2422: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.requestQueueState = t.REQUEST_TYPE = void 0;
            var i = n(a(207)),
                r = n(a(208));

            function s(e, t, a) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return a
            }

            function o(e, t, a) {
                c(e, t), t.set(e, a)
            }

            function c(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
            const d = {
                INITIAL_RATES: "initial_rates",
                INITIAL_BALANCES: "initial_balances",
                INITIAL_TRANSACTIONS: "initial_transactions",
                NEXT: "next"
            };
            t.REQUEST_TYPE = d;
            const l = [d.INITIAL_RATES, d.INITIAL_BALANCES, d.INITIAL_TRANSACTIONS, d.NEXT];
            var u = new WeakMap,
                p = new WeakMap;
            class RequestState {
                constructor(e) {
                    o(this, u, {
                        writable: !0,
                        value: !1
                    }), o(this, p, {
                        writable: !0,
                        value: !1
                    }), this.promise = new Promise(t => {
                        this.resolve = t, e && this.setPermitted()
                    })
                }
                setPermitted() {
                    (0, r.default)(this, u, !0), this.resolve()
                }
                setCompleted() {
                    (0, r.default)(this, p, !0), this.setPermitted()
                }
                getIsCompleted() {
                    return (0, i.default)(this, p)
                }
            }
            var f = new WeakMap,
                m = new WeakSet;

            function y(e, t) {
                if (!e.includes(t)) throw new Error(`The type '${t}' is not in REQUEST_TYPE`)
            }
            const b = new class RequestQueueState {
                constructor() {
                    var e, t;
                    c(e = this, t = m), t.add(e), o(this, f, {
                        writable: !0,
                        value: l.reduce((e, t, a) => (e[t] = new RequestState(0 === a || void 0), e), {})
                    })
                }
                setAsCompleted(e) {
                    s(this, m, y).call(this, l, e), (0, i.default)(this, f)[e].setCompleted();
                    let t = !0;
                    for (const e of l) {
                        if (!t) return;
                        const a = (0, i.default)(this, f)[e];
                        a.setPermitted(), t = t && a.getIsCompleted()
                    }
                }
                waitForPermitted(e) {
                    return s(this, m, y).call(this, l, e), (0, i.default)(this, f)[e].promise
                }
            };
            t.requestQueueState = b
        },
        2423: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "sleepFor", (function() {
                return n
            }));
            const n = e => new Promise(t => setTimeout(t, e))
        },
        2424: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getTokenId = void 0;
            var i = n(a(1431));
            t.getTokenId = ({
                contract: e,
                parent: t,
                ticker: a
            }) => i.default.hash([a, e, t].map(e => null == e ? void 0 : e.toLowerCase()).join(""))
        },
        2425: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPromiseState = t.PROMISE_STATE = void 0;
            const n = {
                PENDING: "pending",
                FULFILLED: "fulfilled",
                REJECTED: "rejected"
            };
            t.PROMISE_STATE = n;
            t.getPromiseState = e => {
                const t = {};
                return Promise.race([e, t]).then(e => e === t ? n.PENDING : n.FULFILLED).catch(() => n.REJECTED)
            }
        },
        2440: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = () => {
                const e = new Map;
                return (t, a) => {
                    if (!e.has(t)) {
                        const n = a().finally(() => {
                            e.delete(t)
                        });
                        e.set(t, n)
                    }
                    return e.get(t)
                }
            }
        },
        2459: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = class Staking {
                constructor() {
                    this.name = "", this.validators = []
                }
                getName() {
                    return this.name
                }
                getValidator(e) {
                    return this.validators.find(t => t.name === e || t.address === e)
                }
                async fetchActiveValidators(e) {
                    throw new Error("Undeclared method `fetchActiveValidators", this)
                }
                modifyPredefinedValidators(e) {
                    this.validators = e, this.fetchActiveValidators()
                }
                modifyActiveValidators(e) {
                    throw new Error("Undeclared method `modifyActiveValidators", this)
                }
            };
            t.default = n
        },
        2469: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Everstake", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            });
            var i = n(a(2470))
        },
        2470: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(57)),
                r = a(29);
            const s = {
                QTUM: "2b76f09cfa059bb0be79b58a6580c918",
                ICX: "410c29bffb5931ba3eb87492b493d882",
                DOT: "773e9b457ee990ac620316c382774397",
                ADA: "fa282c50b8605c884c3cefe241fbd7aa",
                ATOM: "3a0efbd8d84808e8887f785daadd635d",
                BAND: "bcbc89707c4ee983b681c442d7a1b0db",
                XTZ: "a76192ac8395bdabcff083022831e814"
            };
            var o = {
                isEverstake: (e = "") => "everstake" === e.toLowerCase(),
                isCompatible: e => !!s[e],
                submitEverstakeTx({
                    provider: e,
                    currency: t = "",
                    hash: a
                }) {
                    if (this.isEverstake(e) && this.isCompatible(t)) {
                        const e = {
                            url: "https://aff-api.everstake.one/atomic/delegations",
                            method: "post",
                            data: {
                                link_id: s[t.toUpperCase()],
                                delegations: [a]
                            },
                            headers: {
                                "X-API-KEY": "142575db16b31752843bcdd1d50454c7",
                                "Content-type": "application/json"
                            }
                        };
                        (0, i.default)(e).catch(e => new r.InternalError({
                            type: "Everstake API Error",
                            error: e,
                            instance: this
                        }))
                    }
                }
            };
            t.default = o
        },
        2471: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.compareVersions = s, t.getVersion = function(e, t) {
                const a = i(t.replace(e, ""));
                if (a.length > r.length) throw new TypeError(`getVersion supports maximum ${r.length} version pieces`);
                return a.reduce((e, t, a) => e + t * 10 ** r[a], 0)
            }, t.isSupportedAppVersion = function(e, t, a) {
                return a.startsWith(e) && s(t, a.substring(e.length)) >= 0
            };
            const n = /[.-]/;

            function i(e) {
                const t = e.split(n).map(e => Number(e));
                return t.includes(NaN) ? [] : t
            }
            const r = [30, 25, 20, 15, 10, 5];

            function s(e, t) {
                const [a, n] = [e, t].map(e => i(e)), r = Math.max(a.length, n.length);
                for (let e = 0; e < r; e += 1) {
                    var s, o;
                    const t = null !== (s = a[e]) && void 0 !== s ? s : 0,
                        i = null !== (o = n[e]) && void 0 !== o ? o : 0;
                    if (t !== i) return t > i ? 1 : -1
                }
                return 0
            }
        },
        2472: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(1440));
            class AtomicRaki extends i.default {
                constructor() {
                    super("https://raki.atomicwallet.io/v2")
                }
            }
            var r = AtomicRaki;
            t.default = r
        },
        2473: function(e) {
            e.exports = JSON.parse('{"BSC":"BNB","gZIL":"GZIL","ODEM":"ODE","ONG":"ONGAS","PRE":"SRCH","SEN":"CSEN","TRX-USDC":"USDC","TRX-USDT":"USDT"}')
        },
        2474: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(57)),
                r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = d(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                            var s = i ? Object.getOwnPropertyDescriptor(e, r) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, r, s) : n[r] = e[r]
                        } n.default = e, a && a.set(e, n);
                    return n
                }(a(67)),
                s = n(a(55)),
                o = n(a(1441)),
                c = n(a(2475));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (d = function(e) {
                    return e ? a : t
                })(e)
            }
            class CoinMarketCap extends o.default {
                constructor() {
                    super(c.default)
                }
                convert({
                    data: e
                }, t) {
                    return Object.keys(e).reduce((a, n) => {
                        const i = e[n].quote[t];
                        return i ? a.concat({
                            rate: i.price || 0,
                            change: i.percent_change_24h || 0,
                            volume: i.volume_24h || 0,
                            supply: e[n].total_supply || 0,
                            marketCap: i.fully_diluted_market_cap || 0,
                            ticker: n
                        }) : a
                    }, [])
                }
                async fetch(e, t) {
                    try {
                        const a = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
                            {
                                data: n
                            } = await (0, i.default)({
                                url: `${a}?convert=${t}&symbol=${e.join(",")}`,
                                method: "get",
                                headers: {
                                    "X-CMC_PRO_API_KEY": "eae47ace-66b0-4503-9def-54356e4cd00f"
                                }
                            });
                        return n
                    } catch (e) {
                        return console.warn("Fetch rates error", e), []
                    }
                }
                async getTargetTickersMap(e) {
                    const t = await r.default.get(r.ConfigKey.CoinMarketCapSupportedCoins).then(({
                        data: e
                    }) => e).catch(e => (s.default.error(e), []));
                    return e.reduce((e, {
                        id: a,
                        contract: n,
                        parent: i,
                        ticker: r
                    }) => {
                        const s = t.find(({
                            is_active: e,
                            platform: t,
                            symbol: a
                        }) => {
                            const s = void 0 === n && null === t && this.getTargetTicker(r).toUpperCase() === (null == a ? void 0 : a.toUpperCase()),
                                o = void 0 !== n && null !== t && i.toUpperCase() === t.symbol.toUpperCase() && (n === t.token_address || "BNB" === i.toUpperCase() && t.token_address === r);
                            return e && (s || o)
                        });
                        return void 0 === s ? e : Object.assign({
                            [a]: s.symbol
                        }, e)
                    }, {})
                }
            }
            var l = CoinMarketCap;
            t.default = l
        },
        2475: function(e) {
            e.exports = JSON.parse('{"BSC":"BNB"}')
        },
        2476: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(1440));
            class CryptoCompare extends i.default {
                constructor() {
                    super("https://min-api.cryptocompare.com/data")
                }
            }
            var r = CryptoCompare;
            t.default = r
        },
        2477: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = [{
                isMember: !0,
                class: "blue",
                text: "Blue",
                percent: .0025,
                minAWC: 0,
                maxAWC: 300,
                limit: 150
            }, {
                isMember: !0,
                class: "silver",
                text: "Silver",
                percent: .005,
                minAWC: 300,
                maxAWC: 600,
                limit: 300
            }, {
                isMember: !0,
                class: "gold",
                text: "Gold",
                percent: .0075,
                minAWC: 600,
                maxAWC: 1e3,
                limit: 450
            }, {
                isMember: !0,
                class: "platinum",
                text: "Platinum",
                percent: .01,
                minAWC: 1e3,
                maxAWC: 1e3,
                limit: 900
            }]
        },
        2524: function(e) {
            e.exports = JSON.parse('{"AVAX-C":{"network":"AVAX","ticker":"AVAX"},"AXS-ERC20":{"contract":"47ce2dcfd80abaa35678d018e7a3cfa3","network":"ETH"},"BUSD-SC":{"contract":"21adec905340e2ac17bd4f459c81c7ae","network":"BSC"},"MATIC":{"ticker":"MATICMAINNET","network":"MATIC"},"MATIC-ERC20":{"contract":"10ad2e640fc9f7ceb673384bbcddd4a1","network":"ETH"},"USDC-SC":{"contract":"cd1fc7d839396202a609db1a19b727d7","network":"BSC"},"USDT-TRC20":{"contract":"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t","network":"TRX"}}')
        },
        2552: function(e) {
            e.exports = JSON.parse('[{"name":"Atomic Wallet Token","symbol":"AWC-986","original_symbol":"AWC","owner":"bnb1g5xj69c0s0x646hug7j3vr6eamlkf7jw3cr3yw"},{"name":"Harmony.BNB","symbol":"ONE-5F9","original_symbol":"ONE","owner":"bnb1a03uvqmnqzl85csnxnsx2xy28m76gkkht46f2l"},{"name":"Gifto","symbol":"GTO-908","original_symbol":"GTO","owner":"bnb1lvp8k3zenlfp2pl2nyaf428xjgh385m258gzvq"},{"name":"Raven Protocol","symbol":"RAVEN-F66","original_symbol":"RAVEN","owner":"bnb1vdjhrkgvt4y76ykyvrvh68pzqg3lvv0y5yfxyf"},{"name":"Contentos","symbol":"COS-2E4","original_symbol":"COS","owner":"bnb1u9j9hkst6gf09dkdvxlj7puk8c7vh68a0kkmht"},{"name":"Chiliz","symbol":"CHZ-ECD","original_symbol":"CHZ","owner":"bnb1cghr4z8ag440tv4wnk3l6wzynytlpvfqltm9ph"},{"name":"Rune","symbol":"RUNE-B1A","original_symbol":"RUNE","owner":"bnb1e4q8whcufp6d72w8nwmpuhxd96r4n0fstegyuy"},{"name":"Elrond","symbol":"ERD-D06","original_symbol":"ERD","owner":"bnb1m5uzzfxs7x05sl28gg96zyecn9jwgtkpyeftyn"},{"name":"Travala.com","symbol":"AVA-645","original_symbol":"AVA","owner":"bnb1dm9c7gccgd07td5r69m50u8fg8danfgqvlhj6c"},{"name":"WazirX","symbol":"WRX-ED1","original_symbol":"WRX","owner":"bnb19cvhgyrxmkw30hlqs9c5lp966drjzyylytl74z"},{"name":"NOW Token","symbol":"NOW-E68","original_symbol":"NOW","owner":"bnb1nug8ls9f0et0t558m4chmm46mf85ehpq0u8gwv"}]')
        },
        26: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WALLET_ERROR = t.UNDEFINED_OPERATION_ERROR = t.TxEventTypes = t.STAKING_SETTINGS_DEFAULT = t.STAKE_ADDR_TYPE = t.SEND_TRANSACTION_TYPE = t.REVIEW_SETTINGS_DEFAULT = t.PUBLIC_KEY_TO_ADDRESS_ERROR = t.ONE_MINUTE = t.LOCAL_ENV_CONFIG = t.LOAD_WALLET_ERROR = t.IcxTxTypes = t.INTERNAL_ERROR = t.HTTP_STATUS_SERVER_ERROR = t.HTTP_STATUS_OK = t.HTTP_STATUS_BAD_REQUEST = t.GET_UTXO_TYPE = t.GET_TRANSACTION_TYPE = t.GET_TRANSACTIONS_TYPE = t.GET_TOKENS_TYPE = t.GET_LATEST_BLOCK_TYPE = t.GET_BLOCK_TYPE = t.GET_BALANCE_TYPE = t.EXTERNAL_ERROR = t.EXPLORER_API_ERROR = t.BUY_SETTINGS = t.BTC_MOCK_ADDR = t.ATOM_MSG_TYPES = void 0;
            t.ONE_MINUTE = 6e4;
            t.GET_TRANSACTIONS_TYPE = "GetTxs";
            t.GET_TOKENS_TYPE = "GetTkns";
            t.GET_TRANSACTION_TYPE = "GetTx";
            t.SEND_TRANSACTION_TYPE = "Send";
            t.GET_UTXO_TYPE = "UTXO";
            t.GET_LATEST_BLOCK_TYPE = "GetLatestBlock";
            t.GET_BLOCK_TYPE = "GetBlockType";
            t.GET_BALANCE_TYPE = "Balance";
            t.INTERNAL_ERROR = "Internal";
            t.EXTERNAL_ERROR = "External";
            t.WALLET_ERROR = "Wallet internal error";
            t.UNDEFINED_OPERATION_ERROR = "Undefined operation";
            t.LOAD_WALLET_ERROR = "LoadWallet";
            t.EXPLORER_API_ERROR = "Explorer Api request error";
            t.PUBLIC_KEY_TO_ADDRESS_ERROR = "can't get address from public key from method: history/get_key_accounts, node: ";
            t.LOCAL_ENV_CONFIG = "LocalEnvConfig";
            t.HTTP_STATUS_OK = 200;
            t.HTTP_STATUS_BAD_REQUEST = 400;
            t.HTTP_STATUS_SERVER_ERROR = 500;
            t.BTC_MOCK_ADDR = "1LTcbL8h7xcWrJoDs4rcrEgpHMJ9TgsriS";
            t.ATOM_MSG_TYPES = {
                Send: "cosmos-sdk/MsgSend",
                Delegate: "cosmos-sdk/MsgDelegate",
                Undelegate: "cosmos-sdk/MsgUndelegate",
                Withdraw: "cosmos-sdk/MsgWithdrawDelegationReward",
                Redelegate: "cosmos-sdk/MsgBeginRedelegate"
            };
            t.STAKE_ADDR_TYPE = "stakeAddr";
            t.BUY_SETTINGS = {
                availableWallets: [{
                    ticker: "btc",
                    id: "btc"
                }, {
                    ticker: "eth",
                    id: "eth"
                }, {
                    ticker: "xrp",
                    id: "xrp"
                }, {
                    ticker: "ltc",
                    id: "ltc"
                }, {
                    ticker: "bch",
                    id: "bch"
                }, {
                    ticker: "xlm",
                    id: "xlm"
                }, {
                    ticker: "trx",
                    id: "trx"
                }, {
                    ticker: "qtum",
                    id: "qtum"
                }, {
                    ticker: "dgb",
                    id: "dgb"
                }, {
                    ticker: "bnb",
                    id: "bnb"
                }, {
                    ticker: "dash",
                    id: "dash"
                }, {
                    ticker: "atom",
                    id: "atom"
                }, {
                    ticker: "nano",
                    id: "nano"
                }, {
                    ticker: "icx",
                    id: "icx"
                }, {
                    ticker: "xem",
                    id: "xem"
                }, {
                    ticker: "axs",
                    id: "47ce2dcfd80abaa35678d018e7a3cfa3"
                }],
                fiats: {
                    USD: {
                        min: 50,
                        max: 2e4,
                        default: 200,
                        fee: 10
                    },
                    EUR: {
                        min: 50,
                        max: 18700,
                        default: 200,
                        fee: 10
                    },
                    CAD: {
                        min: 79,
                        max: 26337,
                        default: 200,
                        fee: 15
                    },
                    JPY: {
                        min: 6553,
                        max: 2183334,
                        default: 26500,
                        fee: 1100
                    },
                    RUB: {
                        min: 3851,
                        max: 1283158,
                        default: 12e3,
                        fee: 630
                    },
                    AUD: {
                        min: 89,
                        max: 29745,
                        default: 300,
                        fee: 15
                    },
                    KRW: {
                        min: 69615,
                        max: 23193398,
                        default: 23e4,
                        fee: 11750
                    },
                    CHF: {
                        min: 58,
                        max: 19380,
                        default: 200,
                        fee: 10
                    },
                    CZK: {
                        min: 1368,
                        max: 455772,
                        default: 4500,
                        fee: 330
                    },
                    DKK: {
                        min: 607,
                        max: 202099,
                        default: 2e3,
                        fee: 85
                    },
                    NOK: {
                        min: 911,
                        max: 303448,
                        default: 3e3,
                        fee: 90
                    },
                    NZD: {
                        min: 95,
                        max: 31564,
                        default: 300,
                        fee: 20
                    },
                    PLN: {
                        min: 233,
                        max: 77521,
                        default: 800,
                        fee: 40
                    },
                    SEK: {
                        min: 608,
                        max: 202499,
                        default: 2e3,
                        fee: 90
                    },
                    TRY: {
                        min: 366,
                        max: 121779,
                        default: 1200,
                        fee: 65
                    },
                    ZAR: {
                        min: 930,
                        max: 309845,
                        default: 3100,
                        fee: 160
                    },
                    HUF: {
                        min: 20575,
                        max: 6854771,
                        default: 68e3,
                        fee: 3395
                    },
                    ILS: {
                        min: 202,
                        max: 67166,
                        default: 600,
                        fee: 40
                    }
                },
                simplexTickers: {
                    "AXS-ERC20": "AXS"
                }
            };
            t.STAKING_SETTINGS_DEFAULT = [{
                ticker: "NEAR",
                displayTicker: "NEAR",
                name: "NearProtocol",
                reward: 7.4,
                defaultValidator: "LunaNova",
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
                tags: []
            }, {
                ticker: "SOL",
                displayTicker: "SOL",
                name: "Solana",
                reward: 7.4,
                defaultValidator: "AtomicWallet",
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
                tags: []
            }, {
                ticker: "ZIL",
                displayTicker: "ZIL",
                name: "Zilliqa",
                reward: 20,
                defaultValidator: "AtomicWallet",
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"],
                tags: []
            }, {
                ticker: "ADA",
                displayTicker: "ADA",
                name: "Cardano",
                reward: 5,
                defaultValidator: "Atomic Wallet",
                platforms: ["desktop2.24.0", "ios0.68.0", "android0.68.0"],
                tags: []
            }, {
                ticker: "AWC-986",
                displayTicker: "AWC",
                name: "Atomic Wallet Token",
                reward: 20,
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"]
            }, {
                ticker: "DOT",
                displayTicker: "DOT",
                name: "Polkadot",
                reward: 10,
                platforms: ["desktop2.25.0", "ios0.69.0", "android0.69.0"]
            }, {
                ticker: "ICX",
                displayTicker: "ICX",
                name: "Icon",
                reward: 10,
                defaultValidator: "Atomic Wallet",
                platforms: ["desktop2.24.0", "ios0.68.0", "android0.68.0"],
                tags: []
            }, {
                ticker: "ATOM",
                displayTicker: "Atom",
                name: "Cosmos",
                reward: 10,
                defaultValidator: "Everstake",
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"]
            }, {
                ticker: "XTZ",
                displayTicker: "XTZ",
                name: "Tezos",
                reward: 7,
                defaultValidator: "Everstake",
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"]
            }, {
                ticker: "TRX",
                displayTicker: "TRX",
                name: "Tron",
                reward: 5,
                defaultValidator: "Binance",
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"]
            }, {
                ticker: "BAND",
                displayTicker: "BAND",
                name: "Band Protocol",
                reward: 17,
                defaultValidator: "Everstake",
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"]
            }, {
                ticker: "NEO",
                displayTicker: "NEO - GAS",
                name: "NEO",
                reward: 1.4,
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"]
            }, {
                ticker: "KMD",
                displayTicker: "KMD",
                name: "Komodo",
                reward: 5.1,
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"]
            }, {
                ticker: "ALGO",
                displayTicker: "ALGO",
                name: "ALgorand",
                reward: 5.6,
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"]
            }, {
                ticker: "VET",
                displayTicker: "VET - VTHO",
                name: "Vechain",
                reward: 1.63,
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"]
            }, {
                ticker: "BNB",
                displayTicker: "BNB",
                name: "Binance chain",
                reward: 4,
                platforms: ["desktop2.22.0", "ios0.66.0", "android0.66.0"]
            }];
            t.TxEventTypes = ["receive", "confirm", "confirm::reward", "confirm::freeze", "confirm::unfreeze", "confirm::vote"];
            t.IcxTxTypes = {
                TXTYPE_STAKE: "13",
                TXTYPE_DELEGATE: "14",
                TXTYPE_CLAIM: "15"
            };
            t.REVIEW_SETTINGS_DEFAULT = {
                selectTitle: "Select subject",
                selectValues: ["Balance issue", "Transaction issue (deposit/withdrawal)", "Exchange", "Buy Crypto", "Staking", "Fee question", "Backup and Recovery", "Cashback/Membership/AWC staking rewards", "Report a Bug, Security issue, or Scam", "General question", "Feature/Coin request", "Other issues"]
            }
        },
        3016: function(e, t) {
            function a(e) {
                this.capacity = 0 | e, this.map = Object.create(null), this.list = new n
            }

            function n() {
                this.firstNode = null, this.lastNode = null
            }

            function i(e, t) {
                this.key = e, this.val = t, this.prev = null, this.next = null
            }
            e.exports = function(e) {
                return new a(e)
            }, a.prototype.get = function(e) {
                var t = this.map[e];
                if (null != t) return this.used(t), t.val
            }, a.prototype.set = function(e, t) {
                var a = this.map[e];
                if (null != a) a.val = t;
                else {
                    if (this.capacity || this.prune(), !this.capacity) return !1;
                    a = new i(e, t), this.map[e] = a, this.capacity--
                }
                return this.used(a), !0
            }, a.prototype.used = function(e) {
                this.list.moveToFront(e)
            }, a.prototype.prune = function() {
                var e = this.list.pop();
                null != e && (delete this.map[e.key], this.capacity++)
            }, n.prototype.moveToFront = function(e) {
                this.firstNode != e && (this.remove(e), null == this.firstNode ? (this.firstNode = e, this.lastNode = e, e.prev = null, e.next = null) : (e.prev = null, e.next = this.firstNode, e.next.prev = e, this.firstNode = e))
            }, n.prototype.pop = function() {
                var e = this.lastNode;
                return null != e && this.remove(e), e
            }, n.prototype.remove = function(e) {
                this.firstNode == e ? this.firstNode = e.next : null != e.prev && (e.prev.next = e.next), this.lastNode == e ? this.lastNode = e.prev : null != e.next && (e.next.prev = e.prev)
            }
        },
        346: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ETHNftToken", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "NftToken", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "SOLNftToken", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            });
            var i = n(a(3616)),
                r = n(a(3617)),
                s = n(a(1075))
        },
        3616: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(151)),
                r = n(a(57)),
                s = n(a(67)),
                o = a(321);
            class NftToken {
                constructor(e, t, a, n, i, r, s, o) {
                    this.contractAddress = e, this.tokenId = t, this.ticker = a, this.blockchain = n, this.tokenStandard = i, this.name = r, this.description = s, this.imageUrl = o
                }
                get address() {
                    return this.contractAddress
                }
                get id() {
                    return `${this.ticker}-${this.contractAddress}-${this.tokenId}`
                }
                get standard() {
                    return this.tokenStandard
                }
                get image() {
                    return this.imageUrl
                }
                getImageUrl() {
                    var e, t;
                    return null !== (e = this.imageUrl) && void 0 !== e && e.startsWith("ipfs://") ? null === (t = this.imageUrl) || void 0 === t ? void 0 : t.replace("ipfs://", NftToken.ipfsGateway) : this.imageUrl
                }
                async fetchImageBlob() {
                    if (!this.imageUrl) throw new Error("NftToken: fetchImageBlob: No imageUrl");
                    const e = await (0, r.default)(this.getImageUrl(), {
                        responseType: "arraybuffer"
                    });
                    if (200 !== e.status) throw new Error("NftToken: fetchImageBlob: Could not fetch image blob: Server returned " + e.status);
                    return {
                        base64: e.data,
                        buffer: Buffer.from(e.data, "base64"),
                        contentType: e.headers["content-type"]
                    }
                }
                static async updateIpfsGateway() {
                    var e;
                    const {
                        ipfsGateway: t
                    } = null !== (e = await s.default.get(o.ConfigKey.IpfsGateway).catch()) && void 0 !== e ? e : {};
                    t && (NftToken.ipfsGateway = t)
                }
            }(0, i.default)(NftToken, "ipfsGateway", "https://dweb.link/ipfs/");
            var c = NftToken;
            t.default = c
        },
        3617: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(346);
            class SOLNftToken extends n.NftToken {
                constructor(e, t, a, n, i) {
                    super(null, e, t, "Solana", "SPL", a, n, i)
                }
            }
            var i = SOLNftToken;
            t.default = i
        },
        3619: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getTransformedTokenUri", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            });
            var i = n(a(3620))
        },
        3620: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const n = new Map([
                [/https:\/\/api\.opensea\.io\/api\/v1\/metadata\/.*\/0x{id}\/?$/, ["0x{id}", ({
                    tokenId: e
                }) => e]]
            ]);
            var i = e => {
                const {
                    tokenUri: t
                } = e;
                let a = t;
                return n.forEach(([t, n], i) => {
                    const r = n(e);
                    a = i.test(a) ? a.replace(t, r) : a
                }), a
            };
            t.default = i
        },
        38: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                Addresses: !0,
                env: !0,
                Buy: !0,
                Coin: !0,
                Chat: !0,
                Rates: !0,
                Token: !0,
                Logger: !0,
                Emmiter: !0,
                History: !0,
                NftHistory: !0,
                Wallets: !0,
                Reviews: !0,
                Cashback: !0,
                Stakings: !0,
                Explorer: !0,
                SimplexDb: !0,
                ChartData: !0,
                Exchanges: !0,
                Membership: !0,
                Transaction: !0,
                PriceAlerts: !0,
                AboutInfoList: !0,
                ConfigManager: !0,
                inviteFriendsProgram: !0,
                SecureStorage: !0,
                PlatformVersion: !0,
                ActiveWalletsList: !0,
                CoinRestrictionPolicy: !0,
                TxPushSubscription: !0,
                ACTION_BUY: !0,
                ACTION_CLAIM: !0,
                ACTION_EXCHANGE: !0,
                ACTION_FREEZE: !0,
                ACTION_SEND: !0,
                ACTION_STAKE: !0,
                ACTION_UNSTAKE: !0,
                ACTION_VOTE: !0,
                ACTION_WITHDRAW: !0,
                submitActivityRequest: !0,
                notifyService: !0,
                getCachedBalance: !0,
                isBalanceCached: !0,
                setCachedBalance: !0,
                TX_STAT_TYPES: !0,
                banner: !0
            };
            Object.defineProperty(t, "ACTION_BUY", {
                enumerable: !0,
                get: function() {
                    return L.ACTION_BUY
                }
            }), Object.defineProperty(t, "ACTION_CLAIM", {
                enumerable: !0,
                get: function() {
                    return L.ACTION_CLAIM
                }
            }), Object.defineProperty(t, "ACTION_EXCHANGE", {
                enumerable: !0,
                get: function() {
                    return L.ACTION_EXCHANGE
                }
            }), Object.defineProperty(t, "ACTION_FREEZE", {
                enumerable: !0,
                get: function() {
                    return L.ACTION_FREEZE
                }
            }), Object.defineProperty(t, "ACTION_SEND", {
                enumerable: !0,
                get: function() {
                    return L.ACTION_SEND
                }
            }), Object.defineProperty(t, "ACTION_STAKE", {
                enumerable: !0,
                get: function() {
                    return L.ACTION_STAKE
                }
            }), Object.defineProperty(t, "ACTION_UNSTAKE", {
                enumerable: !0,
                get: function() {
                    return L.ACTION_UNSTAKE
                }
            }), Object.defineProperty(t, "ACTION_VOTE", {
                enumerable: !0,
                get: function() {
                    return L.ACTION_VOTE
                }
            }), Object.defineProperty(t, "ACTION_WITHDRAW", {
                enumerable: !0,
                get: function() {
                    return L.ACTION_WITHDRAW
                }
            }), Object.defineProperty(t, "AboutInfoList", {
                enumerable: !0,
                get: function() {
                    return I.default
                }
            }), Object.defineProperty(t, "ActiveWalletsList", {
                enumerable: !0,
                get: function() {
                    return j.default
                }
            }), Object.defineProperty(t, "Addresses", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "Buy", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "Cashback", {
                enumerable: !0,
                get: function() {
                    return v.default
                }
            }), Object.defineProperty(t, "ChartData", {
                enumerable: !0,
                get: function() {
                    return w.default
                }
            }), Object.defineProperty(t, "Chat", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "Coin", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "CoinRestrictionPolicy", {
                enumerable: !0,
                get: function() {
                    return P.default
                }
            }), Object.defineProperty(t, "ConfigManager", {
                enumerable: !0,
                get: function() {
                    return S.default
                }
            }), Object.defineProperty(t, "Emmiter", {
                enumerable: !0,
                get: function() {
                    return y.default
                }
            }), Object.defineProperty(t, "Exchanges", {
                enumerable: !0,
                get: function() {
                    return x.default
                }
            }), Object.defineProperty(t, "Explorer", {
                enumerable: !0,
                get: function() {
                    return k.default
                }
            }), Object.defineProperty(t, "History", {
                enumerable: !0,
                get: function() {
                    return b.default
                }
            }), Object.defineProperty(t, "Logger", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(t, "Membership", {
                enumerable: !0,
                get: function() {
                    return M.default
                }
            }), Object.defineProperty(t, "NftHistory", {
                enumerable: !0,
                get: function() {
                    return g.default
                }
            }), Object.defineProperty(t, "PlatformVersion", {
                enumerable: !0,
                get: function() {
                    return D.default
                }
            }), Object.defineProperty(t, "PriceAlerts", {
                enumerable: !0,
                get: function() {
                    return C.default
                }
            }), Object.defineProperty(t, "Rates", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(t, "Reviews", {
                enumerable: !0,
                get: function() {
                    return T.default
                }
            }), Object.defineProperty(t, "SecureStorage", {
                enumerable: !0,
                get: function() {
                    return O.default
                }
            }), Object.defineProperty(t, "SimplexDb", {
                enumerable: !0,
                get: function() {
                    return E.default
                }
            }), Object.defineProperty(t, "Stakings", {
                enumerable: !0,
                get: function() {
                    return A.default
                }
            }), Object.defineProperty(t, "TX_STAT_TYPES", {
                enumerable: !0,
                get: function() {
                    return H.TX_STAT_TYPES
                }
            }), Object.defineProperty(t, "Token", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(t, "Transaction", {
                enumerable: !0,
                get: function() {
                    return N.default
                }
            }), Object.defineProperty(t, "TxPushSubscription", {
                enumerable: !0,
                get: function() {
                    return R.default
                }
            }), Object.defineProperty(t, "Wallets", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(t, "banner", {
                enumerable: !0,
                get: function() {
                    return G.banner
                }
            }), t.default = void 0, Object.defineProperty(t, "env", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "getCachedBalance", {
                enumerable: !0,
                get: function() {
                    return W.getCachedBalance
                }
            }), Object.defineProperty(t, "inviteFriendsProgram", {
                enumerable: !0,
                get: function() {
                    return _.inviteFriendsProgram
                }
            }), Object.defineProperty(t, "isBalanceCached", {
                enumerable: !0,
                get: function() {
                    return W.isBalanceCached
                }
            }), Object.defineProperty(t, "notifyService", {
                enumerable: !0,
                get: function() {
                    return q.notifyService
                }
            }), Object.defineProperty(t, "setCachedBalance", {
                enumerable: !0,
                get: function() {
                    return W.setCachedBalance
                }
            }), Object.defineProperty(t, "submitActivityRequest", {
                enumerable: !0,
                get: function() {
                    return F.default
                }
            });
            var r = n(a(2390)),
                s = n(a(2527)),
                o = a(173);
            Object.keys(o).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(i, e) || e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            }));
            var c = n(a(1435)),
                d = n(a(955)),
                l = n(a(461)),
                u = n(a(4064)),
                p = n(a(557)),
                f = n(a(545)),
                m = n(a(55)),
                y = n(a(143)),
                b = n(a(230)),
                g = n(a(1121)),
                h = n(a(4065)),
                T = n(a(1460)),
                v = n(a(1438)),
                A = n(a(1436)),
                k = n(a(20)),
                E = n(a(4409)),
                w = n(a(944)),
                x = n(a(4410)),
                M = n(a(4422)),
                N = n(a(74)),
                C = n(a(4424)),
                I = n(a(1994)),
                S = n(a(67)),
                _ = a(4425),
                O = n(a(4477)),
                D = n(a(192)),
                j = n(a(650)),
                P = n(a(956)),
                R = n(a(4478)),
                L = a(2079),
                F = n(a(1437)),
                z = a(26);
            Object.keys(z).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(i, e) || e in t && t[e] === z[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return z[e]
                    }
                }))
            }));
            var U, B, q = a(4479),
                W = a(52),
                H = a(1160),
                G = a(5390),
                V = r.default;
            t.default = V, null !== (U = process) && void 0 !== U && null !== (B = U.env) && void 0 !== B && B.MANUAL_CORE_BOOTSTRAP_ENABLED || (0, r.default)()
        },
        4060: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(35)),
                r = n(a(1994)),
                s = a(95),
                o = a(29),
                c = a(173);
            const d = {};
            var l = e => class extends e {
                isStakingSupported() {
                    return !1
                }
                toMinimalUnit(e, t) {
                    return (0, s.toMinimal)(e || "0", t || this.decimal)
                }
                toCurrencyUnit(e, t) {
                    return (0, s.toCurrency)(e, t || this.decimal)
                }
                get balance() {
                    return this.indivisibleBalance ? this.indivisibleBalance.toString() : null
                }
                set balance(e) {
                    const t = null !== e && "" !== e,
                        a = this.divisibleBalance;
                    this.indivisibleBalance = t ? new i.default(String(e)) : null, this.divisibleBalance = t ? this.toCurrencyUnit(e) : null, this.bus ? this.bus.$emit("update::balance", this.id) : this.eventEmmiter && this.eventEmmiter.emit(`update::${this.deprecatedParent}::token`, this.id), this.divisibleBalance === a || [void 0, null].includes(a) || this.eventEmmiter.emit(c.WALLETS.BALANCE_UPDATED, {
                        wallet: this
                    })
                }
                get feeTicker() {
                    return this.deprecatedParent || this.id
                }
                getFeeSettings() {
                    return {}
                }
                setBus(e) {
                    this.bus = e
                }
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    throw new o.UndeclaredAbstractMethodError("createTransaction", this)
                }
                canRun(e) {
                    var t;
                    return (null !== (t = d[e]) && void 0 !== t ? t : 0) + 5e3 <= Date.now() && (d[e] = Date.now(), !0)
                }
                createTransactionOnce(e) {
                    return this.canRun("createTransaction") ? this.createTransaction(e) : {}
                }
                createTokenTransactionOnce(e) {
                    return this.canRun("createTokenTransaction") ? this.createTokenTransaction(e) : {}
                }
                sendTransactionOnce(e) {
                    return this.canRun("sendTransaction") ? this.sendTransaction(e) : {}
                }
                sendRawTransactionOnce(e) {
                    return this.canRun("sendRawTransaction") ? this.sendRawTransaction(e) : {}
                }
                freezeTokenBalanceOnce(e) {
                    return this.canRun("freezeTokenBalance") ? this.freezeTokenBalance(e) : {}
                }
                unfreezeTokenBalanceOnce(e) {
                    return this.canRun("unfreezeTokenBalance") ? this.unfreezeTokenBalance(e) : {}
                }
                async getTransaction(e) {
                    return this.explorer && this.explorer.getTransaction(this.address, e)
                }
                async sendTransaction(e) {
                    return this.explorer && this.explorer.sendTransaction(e)
                }
                async getUnspentOutputs() {
                    let e;
                    return "function" == typeof this.getScriptPubKey && (e = this.getScriptPubKey()), this.explorer && this.explorer.getUnspentOutputs(this.address, e)
                }
                async getBalance() {
                    return this.explorer && this.explorer.getBalance(this.address)
                }
                async getBalanceFromUnspent() {
                    return this.explorer && this.explorer.getBalanceFromUnspent()
                }
                async isAvailableForSend(e) {
                    const t = await this.availableBalance();
                    return new i.default(this.toMinimalUnit(e)).lte(new i.default(this.toMinimalUnit(t)))
                }
                fakeThrow(e = 10) {
                    return new Promise((t, a) => {
                        setTimeout(() => {
                            a(new Error("Fake"))
                        }, e)
                    })
                }
                getUserTicker() {
                    return this.ticker
                }
                getTxLimit() {
                    return this.explorer && this.explorer.getTxLimit()
                }
                get canPaginate() {
                    return this.explorer && this.explorer.canPaginate
                }
                async getAboutInfo() {
                    return r.default.get(this)
                }
                isNftSupported() {
                    return !1
                }
                getNftInfoUrl(e, t) {
                    throw new o.UndeclaredAbstractMethodError("getNftInfoUrl", this)
                }
                async getNftList() {
                    throw new o.UndeclaredAbstractMethodError("getNftList", this)
                }
                async transferNft(e, t, a, n = {}) {
                    throw new o.UndeclaredAbstractMethodError("transferNft", this)
                }
                async createNftTransaction({
                    toAddress: e,
                    contractAddress: t,
                    data: a,
                    userOptions: n
                }) {
                    throw new o.UndeclaredAbstractMethodError("createNftTransaction", this)
                }
                async getNftFee({
                    contractAddress: e,
                    tokenId: t,
                    tokenStandard: a,
                    toAddress: n,
                    userOptions: i = {}
                }) {
                    throw new o.UndeclaredAbstractMethodError("createNftTransaction", this)
                }
                isMatch({
                    ticker: e,
                    contract: t,
                    parent: a,
                    address: n,
                    network: i,
                    chainId: r
                } = {}) {
                    const s = {
                        contract: t,
                        parent: a,
                        address: n,
                        network: i,
                        chainId: r
                    };
                    if (!e) throw new Error("Parameter `ticker` or `id` is required");
                    const o = this.ticker.toLowerCase() === e.toLowerCase();
                    return Object.keys(s).reduce((e, t) => e && (!this[t] || !s[t] || this[t].toString().toLowerCase() === s[t].toString().toLowerCase()), o)
                }
            };
            t.default = l
        },
        4103: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(55)),
                r = n(a(4104)),
                s = n(a(2003)),
                o = n(a(2074)),
                c = n(a(650)),
                d = (n(a(4406)), n(a(2075)));

            function l(e, t) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.add(e)
            }

            function u(e, t, a) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return a
            }
            var p = new WeakSet,
                f = new WeakSet;
            class WalletsInstaller {
                static getDynamicallyLoadedCoinNames() {
                    const e = WalletsInstaller.getStaticallyLoadedCoins();
                    return Object.keys(r.default).filter(t => void 0 === e[t])
                }
                static getStaticallyLoadedCoins() {
                    return {
                        XMRCoin: s.default,
                        XTZCoin: o.default
                    }
                }
                constructor(e, t) {
                    l(this, f), l(this, p), this.feesMap = e, this.installCoin = t, this.installTokensPromises = []
                }
                installAsync() {
                    return Promise.allSettled(WalletsInstaller.getDynamicallyLoadedCoinNames().map(e => u(this, p, m).call(this, e)))
                }
                installTokens() {
                    return Promise.allSettled(this.installTokensPromises)
                }
                installStaticallyLoadedCoins() {
                    Object.entries(WalletsInstaller.getStaticallyLoadedCoins()).forEach(([e, t]) => {
                        u(this, f, y).call(this, t, e)
                    })
                }
            }
            async function m(e) {
                (e => {
                    const t = e => e.replace("Coin", "");
                    c.default.isActive({
                        id: t(e),
                        deprecatedParent: t(e)
                    })
                })(e);
                const t = r.default[e];
                u(this, f, y).call(this, (await t()).default, e)
            }

            function y(e, t, a) {
                const n = this.feesMap[t];
                if (!n) return void i.default.error({
                    instance: this,
                    error: new Error(`Failed to load ${t}. Coin data wasn't found in wallets_fee config`)
                });
                const r = a ? new e({
                    id: n.id,
                    ticker: n.ticker,
                    name: n.name,
                    network: n.network,
                    alias: "atomic",
                    coinData: n,
                    importFn: a
                }) : (0, d.default)(e, n);
                this.installTokensPromises.push(this.installCoin(r))
            }
            var b = WalletsInstaller;
            t.default = b
        },
        4157: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = {
                ERC20: n(a(4158)).default
            };
            t.default = i
        },
        4158: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(2340)),
                r = n(a(4159)),
                s = n(a(2370)),
                o = n(a(2371)),
                c = n(a(2341)),
                d = {
                    standard: {
                        methods: {
                            approve: {
                                name: "approve",
                                params: ["address", "amount"]
                            },
                            increaseAllowance: {
                                name: "increaseAllowance",
                                params: ["address", "amount"]
                            }
                        },
                        abi: i.default
                    },
                    "0xf98864DA30a5bd657B13e70A57f5718aBf7BAB31": {
                        methods: {
                            stake: {
                                name: "buyVoucher",
                                params: ["address", "amount", "heimdallFee", "accept", "signerPubkey"]
                            },
                            abi: c.default
                        }
                    },
                    "0x85627d71921AE25769f5370E482AdA5E1e418d37": {
                        methods: {
                            getUnclaimedEpochs: {
                                name: "getEpochsWithUnclaimedRewards",
                                params: ["address"]
                            },
                            getRewardsState: {
                                name: "getStateOfRewards",
                                params: ["address", "epoch"]
                            },
                            claim: {
                                name: "claim",
                                params: ["address", "address", "epochs", "wrap"]
                            }
                        },
                        abi: o.default
                    },
                    "0x1d80c49bbbcd1c0911346656b529df9e5c2f783d": {
                        methods: {
                            stake: {
                                name: "deposit",
                                params: []
                            },
                            unstake: {
                                name: "withdraw",
                                params: ["amount"]
                            },
                            delegate: {
                                name: "delegate",
                                params: ["address", "bips"]
                            },
                            undelegate: {
                                name: "undelegateAll",
                                params: []
                            }
                        },
                        abi: s.default
                    },
                    "0xae7ab96520de3a18e5e111b5eaab095312d7fe84": {
                        methods: {
                            stake: {
                                name: "submit",
                                params: ["address"]
                            }
                        },
                        abi: r.default
                    }
                };
            t.default = d
        },
        4159: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = [{
                constant: !0,
                name: "submit",
                inputs: [{
                    name: "_referral",
                    type: "address"
                }],
                outputs: [{
                    name: "shares",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }]
        },
        4407: function(e) {
            e.exports = JSON.parse('{"groups":[{"name":"Popular","coins":[{"ticker":"MATIC","network":"MATIC"},{"ticker":"BTC"},{"ticker":"LUNC"},{"ticker":"SOL"},{"ticker":"SAND","network":"ETH"},{"ticker":"SHIB"}]},{"name":"Stablecoins","coins":[{"ticker":"MATIC","network":"MATIC"},{"ticker":"BTC"},{"ticker":"LUNC"},{"ticker":"SOL"},{"ticker":"SAND","network":"ETH"},{"ticker":"SHIB"}]},{"name":"DeFi","coins":[{"ticker":"MATIC","network":"MATIC"},{"ticker":"BTC"},{"ticker":"LUNC"},{"ticker":"SOL"},{"ticker":"SAND","network":"ETH"},{"ticker":"SHIB"}]},{"name":"GameFi","coins":[{"ticker":"MATIC","network":"MATIC"},{"ticker":"BTC"},{"ticker":"LUNC"},{"ticker":"SOL"},{"ticker":"SAND","network":"ETH"},{"ticker":"SHIB"}]}],"filters":[{"name":"New","coins":[{"ticker":"MATIC","network":"MATIC"},{"ticker":"BTC"},{"ticker":"LUNC"},{"ticker":"SOL"},{"ticker":"SAND","network":"ETH"},{"ticker":"SHIB"}]}]}')
        },
        4412: function(e) {
            e.exports = JSON.parse('{"usdterc20":{"ticker":"usdt"},"bandmainnet":{"ticker":"band"},"bnbmainnet":{"ticker":"bnb"},"usdttrc20":{"ticker":"trx-usdt"},"bnbbsc":{"ticker":"bsc"},"avaxc":{"ticker":"avax"},"maticmainnet":{"ticker":"matic","parentTicker":"matic"},"matic":{"ticker":"matic","parentTicker":"eth"},"usdt":{"ticker":"usdt","parentTicker":"eth"},"ftmmainnet":{"ticker":"ftm","network":"ftm"}}')
        },
        4423: function(e) {
            e.exports = JSON.parse('[{"ticker":"AWC-986","parent":"BNB","contract":"bnb1g5xj69c0s0x646hug7j3vr6eamlkf7jw3cr3yw"},{"ticker":"AWC","parent":"ETH","contract":"0xad22f63404f7305e4713ccbd4f296f34770513f4"},{"ticker":"AWC","parent":"BSC","contract":"0x798af7725376765e7f3ca86d5e0cf1beaef19f34"}]')
        },
        4425: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.inviteFriendsProgram = void 0;
            var i = n(a(208)),
                r = n(a(207)),
                s = n(a(57)),
                o = a(29),
                c = a(26),
                d = a(52),
                l = a(173),
                u = n(a(143)),
                p = a(4426),
                f = a(4427),
                m = a(4428),
                y = a(4476);

            function b(e, t) {
                h(e, t), t.add(e)
            }

            function g(e, t, a) {
                h(e, t), t.set(e, a)
            }

            function h(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function T(e, t, a) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return a
            }
            const v = s.default.create({
                    validateStatus: e => [f.HTTP_STATUS_OK, f.HTTP_STATUS_BAD_REQUEST].includes(e)
                }),
                A = /^(\w|\d){5,10}/;
            var k = new WeakMap,
                E = new WeakSet,
                w = new WeakMap,
                x = new WeakSet,
                M = new WeakSet,
                N = new WeakSet;

            function C({
                atomicId: e
            }) {
                (0, r.default)(this, w).call(this, e)
            }
            async function I() {
                try {
                    return await d.db.ifProgramState.get("state")
                } catch (e) {
                    throw new o.ExternalError({
                        type: c.EXTERNAL_ERROR,
                        error: e,
                        instance: this
                    })
                }
            }
            async function S(e) {
                try {
                    await d.db.ifProgramState.put({
                        ...e,
                        key: "state"
                    })
                } catch (e) {
                    throw new o.ExternalError({
                        type: c.EXTERNAL_ERROR,
                        error: e,
                        instance: this
                    })
                }
            }

            function _(e, t) {
                return T(this, M, S).call(this, {
                    ...e,
                    ...t
                })
            }
            const O = new class InviteFriendsProgram {
                constructor() {
                    b(this, N), b(this, M), b(this, x), b(this, E), g(this, k, {
                        writable: !0,
                        value: void 0
                    }), g(this, w, {
                        writable: !0,
                        value: e => {
                            if (!e) throw new o.InternalError({
                                type: c.INTERNAL_ERROR,
                                error: "AtomicId cannot be empty",
                                instance: this
                            });
                            (0, i.default)(this, k, e)
                        }
                    }), u.default.on(l.WALLETS.NEW_ATOMIC_ID, T(this, E, C).bind(this))
                }
                get atomicId() {
                    if (!(0, r.default)(this, k)) throw new o.InternalError({
                        type: c.INTERNAL_ERROR,
                        error: "Empty atomicId",
                        instance: this
                    });
                    return (0, r.default)(this, k)
                }
                async getIsAffiliate() {
                    return null !== await this.getAffiliateInfo()
                }
                async getIsReferral() {
                    return null !== await this.getReferralInfo()
                }
                async updateRewardHistory() {
                    throw new o.UndeclaredAbstractMethodError("updateRewardHistory", this)
                }
                async registerAsAffiliate() {
                    try {
                        const {
                            status: e,
                            data: {
                                referralLink: t,
                                promoCode: a
                            } = {}
                        } = await v.post(p.API_AFFILIATE_REGISTER, {
                            atomicId: this.atomicId
                        });
                        if (e === f.HTTP_STATUS_BAD_REQUEST) throw new o.ExternalError({
                            type: c.EXTERNAL_ERROR,
                            error: "Affiliate already registered",
                            instance: this
                        });
                        const n = await T(this, x, I).call(this);
                        await T(this, N, _).call(this, n, {
                            referralLink: t,
                            promoCode: a
                        })
                    } catch (e) {
                        throw new o.ExternalError({
                            type: c.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async registerAsReferral(e) {
                    if (!A.test(e)) throw new o.ExternalError({
                        type: c.EXTERNAL_ERROR,
                        error: "Wrong promoCode",
                        instance: this
                    });
                    try {
                        const {
                            status: t,
                            data: {
                                invitedWithPromoCode: a
                            } = {}
                        } = await v.post(p.API_REFERRAL_REGISTER, {
                            atomicId: this.atomicId,
                            promoCode: e
                        });
                        if (t === f.HTTP_STATUS_BAD_REQUEST) throw new o.ExternalError({
                            type: c.EXTERNAL_ERROR,
                            error: "Referral already registered",
                            instance: this
                        });
                        const n = await T(this, x, I).call(this);
                        await T(this, N, _).call(this, n, {
                            invitedWithPromoCode: a
                        })
                    } catch (e) {
                        throw new o.ExternalError({
                            type: c.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getIsPromoCodeExists(e) {
                    try {
                        const {
                            status: t
                        } = await v.get(p.API_AFFILIATE_EXISTENCE, {
                            params: {
                                promoCode: e
                            }
                        });
                        return t === f.HTTP_STATUS_OK
                    } catch (e) {
                        throw new o.ExternalError({
                            type: c.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getAffiliateInfo() {
                    try {
                        const e = await T(this, x, I).call(this);
                        if (null != e && e.promoCode) return e;
                        const {
                            data: {
                                referralLink: t,
                                promoCode: a
                            } = {}
                        } = await v.get(p.API_AFFILIATE_INFO, {
                            params: {
                                atomicId: this.atomicId
                            }
                        });
                        if (a) {
                            const e = await T(this, x, I).call(this);
                            return await T(this, N, _).call(this, e, {
                                referralLink: t,
                                promoCode: a
                            }), {
                                referralLink: t,
                                promoCode: a
                            }
                        }
                        return null
                    } catch (e) {
                        throw new o.ExternalError({
                            type: c.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getAffiliateStatistics() {
                    try {
                        const {
                            status: e,
                            data: {
                                referrals: t,
                                activeReferrals: a,
                                receivedRewards: n,
                                pendingRewards: i
                            } = {}
                        } = await v.get(p.API_AFFILIATE_STAT, {
                            params: {
                                atomicId: this.atomicId
                            }
                        });
                        if (e === f.HTTP_STATUS_BAD_REQUEST) throw new o.ExternalError({
                            type: c.EXTERNAL_ERROR,
                            error: "Invalid atomicId",
                            instance: this
                        });
                        return {
                            referralCount: t,
                            activeReferralCount: a,
                            receivedRewards: n,
                            pendingRewards: i
                        }
                    } catch (e) {
                        throw new o.ExternalError({
                            type: c.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getReferralInfo() {
                    try {
                        const e = await T(this, x, I).call(this);
                        if (null != e && e.invitedWithPromoCode) return {
                            invitedWithPromoCode: e.invitedWithPromoCode
                        };
                        const {
                            data: {
                                invitedWithPromoCode: t
                            } = {}
                        } = await v.get(p.API_REFERRAL_INFO, {
                            params: {
                                atomicId: this.atomicId
                            }
                        });
                        if (t) {
                            const e = await T(this, x, I).call(this);
                            return await T(this, N, _).call(this, e, {
                                invitedWithPromoCode: t
                            }), {
                                invitedWithPromoCode: t
                            }
                        }
                        return null
                    } catch (e) {
                        throw new o.ExternalError({
                            type: c.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getExchangeBonusesState() {
                    try {
                        const {
                            status: e,
                            data: {
                                currentProgress: t,
                                untilNextReward: a,
                                stages: n
                            } = {}
                        } = await v.get(p.API_REFERRAL_REWARDS, {
                            params: {
                                atomicId: this.atomicId
                            }
                        });
                        if (e === f.HTTP_STATUS_BAD_REQUEST) throw new o.ExternalError({
                            type: c.EXTERNAL_ERROR,
                            error: "Invalid atomicId",
                            instance: this
                        });
                        const i = {
                            currentProgress: t,
                            untilNextReward: a,
                            stages: n
                        };
                        return m.exchangeBonusesValidationSchema.validateToThrow(i), i
                    } catch (e) {
                        throw new o.ExternalError({
                            type: c.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                getGuidanceList() {
                    return y.guidanceList.getKeys()
                }
                getGuidanceListItem(e) {
                    return y.guidanceList.getItemByKey(e)
                }
                async getRewardHistory() {
                    throw new o.UndeclaredAbstractMethodError("getRewardHistory", this)
                }
            };
            t.inviteFriendsProgram = O
        },
        4426: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.API_REFERRAL_REWARDS = t.API_REFERRAL_REGISTER = t.API_REFERRAL_INFO = t.API_AFFILIATE_STAT = t.API_AFFILIATE_REGISTER = t.API_AFFILIATE_INFO = t.API_AFFILIATE_EXISTENCE = void 0;
            var i = n(a(1434));
            const r = (0, a(95).getStringWithEnsuredEndChar)(i.default.get("REFERRAL_PROGRAM_API_URL"), "/"),
                s = r + "v1/affiliate/stat";
            t.API_AFFILIATE_STAT = s;
            const o = r + "v1/affiliate/info";
            t.API_AFFILIATE_INFO = o;
            const c = r + "v1/affiliate";
            t.API_AFFILIATE_EXISTENCE = c;
            const d = r + "v1/affiliate/register";
            t.API_AFFILIATE_REGISTER = d;
            const l = r + "v1/referral/rewards";
            t.API_REFERRAL_REWARDS = l;
            const u = r + "v1/referral/info";
            t.API_REFERRAL_INFO = u;
            const p = r + "v1/referral/register";
            t.API_REFERRAL_REGISTER = p
        },
        4427: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HTTP_STATUS_OK = t.HTTP_STATUS_NOT_FOUND = t.HTTP_STATUS_BAD_REQUEST = void 0;
            t.HTTP_STATUS_OK = 200;
            t.HTTP_STATUS_BAD_REQUEST = 400;
            t.HTTP_STATUS_NOT_FOUND = 404
        },
        4428: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "exchangeBonusesValidationSchema", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            });
            var i = n(a(4429))
        },
        4429: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = new(n(a(4430)).default)({
                type: "object",
                required: ["currentProgress", "untilNextReward", "stages"],
                properties: {
                    currentProgress: {
                        type: "string"
                    },
                    untilNextReward: {
                        type: "string"
                    },
                    stages: {
                        type: "array",
                        minItems: 1,
                        items: {
                            type: "object",
                            required: ["volume", "reward"],
                            properties: {
                                volume: {
                                    type: "string"
                                },
                                reward: {
                                    type: "string"
                                }
                            }
                        }
                    }
                },
                additionalProperties: !0
            });
            t.default = i
        },
        4430: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(4431)),
                r = a(29);
            t.default = class ValidationSchema {
                constructor(e) {
                    this.ajv = new i.default, this.testFn = this.ajv.compile(e)
                }
                validateToThrow(e) {
                    if (!this.testFn(e)) throw new r.AjvValidationError(this.testFn.errors)
                }
            }
        },
        4476: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.guidanceList = void 0;
            var i = a(29),
                r = a(26),
                s = n(a(67));
            const o = new class GuidanceList {
                async getItemByKey(e) {
                    try {
                        const t = (await s.default.get("referral-program-texts"))[e];
                        if (!t) throw new Error("Incorrect key");
                        return t
                    } catch (e) {
                        throw new i.ExternalError({
                            type: r.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getKeys() {
                    try {
                        const e = await s.default.get("referral-program-texts");
                        return Object.keys(e)
                    } catch (e) {
                        throw new i.ExternalError({
                            type: r.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
            };
            t.guidanceList = o
        },
        4479: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.notifyService = t.AtomicNotify = void 0;
            var i = n(a(57)),
                r = n(a(192));
            class AtomicNotify {
                constructor(e = "https://atomic-notify.atomicwallet.io/") {
                    this.axios = i.default.create({
                        baseURL: e
                    })
                }
                async registerToken({
                    token: e,
                    userId: t,
                    deviceId: a = ""
                }) {
                    try {
                        await this.axios.post("/notifications/token", {
                            userId: t,
                            deviceId: a,
                            platform: r.default.getPlatform(),
                            token: e
                        }), this.token = e
                    } catch (e) {
                        return console.error(e), !1
                    }
                    return !0
                }
                async subscribe(e) {
                    try {
                        this.validateToken(), await this.axios.post("/subscriptions/subscribe", {
                            token: this.token,
                            type: e
                        })
                    } catch (e) {
                        return console.error(e), !1
                    }
                    return !0
                }
                async unsubscribe(e) {
                    try {
                        this.validateToken(), await this.axios.post("/subscriptions/unsubscribe", {
                            token: this.token,
                            type: e
                        })
                    } catch (e) {
                        return console.error(e), !1
                    }
                    return !0
                }
                async getSubscriptions() {
                    try {
                        this.validateToken();
                        const e = (await this.axios.get("/subscriptions?token=" + this.token)).data;
                        return e.map(e => {
                            if (!e.type || !e.isEnabled) throw new Error("AtomicNotify: wrong subscriptions answer format");
                            return {
                                type: e.type,
                                isEnabled: "true" === e.isEnabled
                            }
                        })
                    } catch (e) {
                        throw console.error(e), e
                    }
                }
                validateToken() {
                    if ("string" != typeof this.token || !this.token) throw new Error("AtomicNotify: token not registered")
                }
            }
            t.AtomicNotify = AtomicNotify;
            const s = new AtomicNotify;
            t.notifyService = s
        },
        4480: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ArticlesSettings", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "FilterSettings", {
                enumerable: !0,
                get: function() {
                    return s.filtersAndGroupsConfig
                }
            }), Object.defineProperty(t, "FontSettings", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            });
            var i = n(a(4481)),
                r = n(a(4482)),
                s = a(2076)
        },
        4481: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.ICON_FONT_URL = void 0;
            var i = n(a(67));
            const r = "https://services.atomicwallet.io/fonts/icon-font.css";
            t.ICON_FONT_URL = r;
            var s = {
                loadStyles(e = 1, t = r) {
                    const a = document.createElement("style"),
                        n = `@import url('${t}?v=${e}')`;
                    document.body.append(a), a.append(document.createTextNode(n))
                },
                async loadIconFontStyles() {
                    try {
                        const {
                            iconFontVersion: e,
                            iconFontUrl: t
                        } = await i.default.get("icon-font-config");
                        e && this.loadStyles(e, t)
                    } catch (e) {
                        console.warn("Failed load font styles", e)
                    }
                }
            };
            t.default = s
        },
        4482: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(a(67)),
                r = n(a(55)),
                s = n(a(4483)),
                o = {
                    async loadArticles() {
                        let e;
                        try {
                            e = await i.default.get("learn-staking")
                        } catch (e) {
                            r.default.error({
                                error: e
                            })
                        }
                        return e || s.default
                    }
                };
            t.default = o
        },
        4483: function(e) {
            e.exports = JSON.parse('[{"link":"https://support.atomicwallet.io/article/155-how-to-stake-zil","title":"How to Stake ZIL","image":"","ticker":"ZIL","isVideo":false},{"link":"https://support.atomicwallet.io/article/157-ada-staking","title":"How to Stake ADA","image":"","ticker":"ADA","isVideo":false},{"link":"https://support.atomicwallet.io/article/151-how-to-stake-awc","title":"How to Stake AWC","image":"","ticker":"AWC","isVideo":false},{"link":"https://support.atomicwallet.io/article/158-icx-staking","title":"How to Stake ICX","image":"","ticker":"ICX","isVideo":false},{"link":"https://support.atomicwallet.io/article/152-how-to-stake-band","title":"How to Stake BAND","image":"","ticker":"BAND","isVideo":false},{"link":"https://support.atomicwallet.io/article/128-how-to-stake-xtz","title":"How to Stake XTZ","image":"","ticker":"XTZ","isVideo":false},{"link":"https://support.atomicwallet.io/article/131-how-to-stake-trx","title":"How to Stake TRX","image":"","ticker":"TRX","isVideo":false},{"link":"https://support.atomicwallet.io/article/132-how-to-stake-kmd","title":"How to Stake KMD","image":"","ticker":"KMD","isVideo":false},{"link":"https://support.atomicwallet.io/article/72-how-to-claim-neo-gas","title":"How to Stake NEO","image":"","ticker":"NEO","isVideo":false},{"link":"https://support.atomicwallet.io/article/133-how-to-stake-algo","title":"How to Stake ALGO","image":"","ticker":"ALGO","isVideo":false}]')
        },
        4505: function(e, t, a) {
            var n = a(4506);
            n.__esModule && (n = n.default), "string" == typeof n && (n = [
                [e.i, n, ""]
            ]), n.locals && (e.exports = n.locals);
            (0, a(50).default)("74f2ab02", n, !0, {})
        },
        4506: function(e, t, a) {
            (e.exports = a(49)(!1)).push([e.i, "\n.input[data-v-a70f0ba8]{width:100%;text-align:left;position:relative\n}\n.input-icon[data-v-a70f0ba8]{cursor:pointer;transition:all 0.2s ease-in-out\n}\n.input-icon[data-v-a70f0ba8]:hover{filter:brightness(0) invert(1)\n}\n.input-block[data-v-a70f0ba8]{padding-top:10px;border:1px solid transparent;border-bottom:0\n}\n.input-focus[data-v-a70f0ba8]{border-color:rgba(31,158,255,0.64);border-radius:2px 2px 0px 0px\n}\n.input-focus .input-placeholder[data-v-a70f0ba8]{top:-20px\n}\n.input-focus .input-line[data-v-a70f0ba8]{background-color:#1f9eff;width:100%\n}\n.input-field[data-v-a70f0ba8]{width:100%;background:transparent;transition:all 0.2s ease-in-out;border:none;outline:none;padding:0 30px 0 0;font-size:16px;line-height:32px\n}\n@media (min-width: 1360px){\n.input-field[data-v-a70f0ba8]{font-size:21px\n}\n}\n.input-field-amount[data-v-a70f0ba8]{width:calc(100% + 2px);background:#1a2847;margin:0 -1px;padding:0 30px 0 1px\n}\n.input-line[data-v-a70f0ba8]{height:2px;background:#fff;transition:all 0.3s ease-out\n}\n.input-line-error[data-v-a70f0ba8]{background-color:#c03647;width:100%\n}\n.input-line-active[data-v-a70f0ba8]{background-color:#1f9eff;width:100%\n}\n.input-line[data-v-a70f0ba8]:before{content:'';height:2px;left:0;right:0;width:0;transition:all 0.3s ease-out;position:absolute\n}\n.input-ticker[data-v-a70f0ba8],.input-ticker-fiat[data-v-a70f0ba8],.input-placeholder[data-v-a70f0ba8],.input-placeholder-required[data-v-a70f0ba8],.input-note[data-v-a70f0ba8],.input-error[data-v-a70f0ba8]{font-weight:400;font-size:14px;line-height:18px;letter-spacing:0.15px\n}\n.input-note[data-v-a70f0ba8],.input-error[data-v-a70f0ba8]{margin-top:5px\n}\n.input-error[data-v-a70f0ba8]{color:#c03647\n}\n.input-note[data-v-a70f0ba8]{color:#858fad\n}\n.input-placeholder[data-v-a70f0ba8]{position:absolute;top:0;z-index:1;transition:all 0.4s ease-out;color:#8290ad;user-select:none;line-height:34px\n}\n.input-placeholder-up[data-v-a70f0ba8]{top:-20px\n}\n.input-placeholder-required[data-v-a70f0ba8]{color:#f75555\n}\n.input-placeholder-blue[data-v-a70f0ba8]{color:#1f9eff\n}\n.input-controls[data-v-a70f0ba8]{position:absolute;right:0;top:0;max-width:100px;display:flex;align-items:center;justify-content:flex-end;background-color:#1d2845;height:32px;padding-left:10px\n}\n.input-wrap[data-v-a70f0ba8]{display:flex;align-items:center;position:relative\n}\n.input-ticker[data-v-a70f0ba8],.input-ticker-fiat[data-v-a70f0ba8]{font-size:18px;line-height:28px\n}\n.input-ticker-fiat[data-v-a70f0ba8]{color:#858fad\n}\n.input:hover .input-line[data-v-a70f0ba8]{background-color:#1f9eff;width:100%\n}\n.input:hover .input-line.input-line-error[data-v-a70f0ba8]{background-color:#c03647\n}\n", ""])
        },
        4507: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(2090),
                i = a.n(n);
            a.d(t, "closeEye", (function() {
                return i.a
            }));
            var r = a(2091),
                s = a.n(r);
            a.d(t, "openEye", (function() {
                return s.a
            }));
            var o = a(2092),
                c = a.n(o);
            a.d(t, "close", (function() {
                return c.a
            }));
            var d = a(2093),
                l = a.n(d);
            a.d(t, "edit", (function() {
                return l.a
            }))
        },
        4508: function(e, t, a) {
            var n = a(4509);
            n.__esModule && (n = n.default), "string" == typeof n && (n = [
                [e.i, n, ""]
            ]), n.locals && (e.exports = n.locals);
            (0, a(50).default)("073a6770", n, !0, {})
        },
        4509: function(e, t, a) {
            (e.exports = a(49)(!1)).push([e.i, "\n.root[data-v-05fa7eed]{display:flex;justify-content:center;align-items:center;box-sizing:border-box;outline:none;transition:background 0.2s ease;border-radius:100px;color:#fff;text-transform:uppercase;border-width:2px;border-style:solid;border-color:transparent\n}\n.extra-small[data-v-05fa7eed]{min-height:24px;min-width:64px;padding:0px 12px;font-family:Roboto,sans-serif;font-size:10px;font-weight:400;line-height:14px;letter-spacing:.22px\n}\n.small[data-v-05fa7eed]{min-height:32px;min-width:96px;padding:0px 16px;font-family:Roboto,sans-serif;font-size:12px;font-weight:600;line-height:16px;letter-spacing:1.25px\n}\n.medium[data-v-05fa7eed]{min-height:44px;min-width:120px;padding:0px 24px;font-family:Roboto,sans-serif;font-size:18px;font-weight:600;line-height:28px;letter-spacing:1.25px\n}\n.large[data-v-05fa7eed]{min-height:56px;min-width:140px;padding:0px 32px;font-family:Roboto,sans-serif;font-size:18px;font-weight:600;line-height:28px;letter-spacing:1.25px\n}\n.primary-desktop[data-v-05fa7eed]{border-color:#1F9EFF;background:linear-gradient(180deg, #343F5C 0%, #1F2843 100%)\n}\n.primary-desktop[data-v-05fa7eed]:not([disabled]):hover{background:#1F9EFF;box-shadow:0px 8px 16px rgba(51,144,214,0.32)\n}\n.primary-desktop[data-v-05fa7eed]:not([disabled]):focus-visible{background:#1F9EFF\n}\n.primary-desktop[data-v-05fa7eed]:not([disabled]):active{background:linear-gradient(0deg, rgba(7,12,29,0.32), rgba(7,12,29,0.32)),#1F9EFF;border-color:transparent\n}\n.primary-desktop[disabled][data-v-05fa7eed]{opacity:0.32\n}\n.primary-mobile[data-v-05fa7eed]{background:#1F9EFF\n}\n.primary-mobile[data-v-05fa7eed]:active{background:linear-gradient(0deg, rgba(7,12,29,0.32), rgba(7,12,29,0.32)),#1F9EFF\n}\n.primary-mobile.disabled[data-v-05fa7eed]{background:linear-gradient(0deg, #1F4E7F, #1F4E7F),#1F578E;color:rgba(255,255,255,0.48)\n}\n.primary-color-desktop[data-v-05fa7eed]{background:linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%);border-color:rgba(255,255,255,0.68)\n}\n.primary-color-desktop[data-v-05fa7eed]:not([disabled]):hover{background:rgba(255,255,255,0.92);box-shadow:0px 8px 16px rgba(51,144,214,0.32);color:#1F2843\n}\n.primary-color-desktop[data-v-05fa7eed]:not([disabled]):focus-visible{background:rgba(255,255,255,0.92);color:#1F2843\n}\n.primary-color-desktop[data-v-05fa7eed]:not([disabled]):active{background:rgba(255,255,255,0.56);border-color:transparent;color:#1F2843\n}\n.primary-color-desktop[disabled][data-v-05fa7eed]{opacity:0.32\n}\n.primary-color-mobile[data-v-05fa7eed]{background:rgba(255,255,255,0.56);color:#1F2843;background:#FFFFFFAD\n}\n.primary-color-mobile[data-v-05fa7eed]:active{background:#FFFFFF8F\n}\n.primary-color-mobile.disabled[data-v-05fa7eed]{background:#FFFFFF29;color:#404A65\n}\n.error-desktop[data-v-05fa7eed]{border-color:#F75555;background:linear-gradient(180deg, #343F5C 0%, #1F2843 100%)\n}\n.error-desktop[data-v-05fa7eed]:not([disabled]):hover,.error-desktop[data-v-05fa7eed]:not([disabled]):focus-visible{background:#F75555;box-shadow:0px 8px 16px rgba(51,144,214,0.32)\n}\n.error-desktop[data-v-05fa7eed]:not([disabled]):active{background:#AA3E43;border-color:transparent\n}\n.error-desktop[disabled][data-v-05fa7eed]{opacity:0.32\n}\n.error-mobile[data-v-05fa7eed]{background:#F75555\n}\n.error-mobile[data-v-05fa7eed]:not([disabled]):active{background:#AA3E43;border-color:transparent\n}\n.error-mobile[disabled][data-v-05fa7eed]{background:#643648;color:#FFFFFF7A\n}\n.secondary-desktop[data-v-05fa7eed]{border-color:#7A859F;background:linear-gradient(180deg, #343F5C 0%, #1F2843 100%)\n}\n.secondary-desktop[data-v-05fa7eed]:not([disabled]):hover,.secondary-desktop[data-v-05fa7eed]:not([disabled]):focus-visible{background:#404A65;box-shadow:0px 8px 16px rgba(51,144,214,0.32)\n}\n.secondary-desktop[data-v-05fa7eed]:not([disabled]):active{background:#2A3552;border-color:#404A65\n}\n.secondary-desktop[disabled][data-v-05fa7eed]{opacity:0.32\n}\n.secondary-mobile[data-v-05fa7eed]{background:#404A65\n}\n.secondary-mobile[data-v-05fa7eed]:not([disabled]):active{background:#343F5C;border-color:transparent\n}\n.secondary-mobile[disabled][data-v-05fa7eed]{background:#2A3552;color:#858FAD\n}\n.secondary-color-desktop[data-v-05fa7eed]{background:linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%);border-color:#FFFFFF70\n}\n.secondary-color-desktop[data-v-05fa7eed]:not([disabled]):hover{background:rgba(255,255,255,0.16);box-shadow:0px 8px 16px rgba(51,144,214,0.32)\n}\n.secondary-color-desktop[data-v-05fa7eed]:not([disabled]):focus-visible{background:rgba(255,255,255,0.16)\n}\n.secondary-color-desktop[data-v-05fa7eed]:not([disabled]):active{background:rgba(255,255,255,0.06);border-color:#FFFFFF29\n}\n.secondary-color-desktop[disabled][data-v-05fa7eed]{opacity:0.32\n}\n.secondary-color-mobile[data-v-05fa7eed]{background:#FFFFFF29\n}\n.secondary-color-mobile[data-v-05fa7eed]:active{background:#FFFFFF1F\n}\n.secondary-color-mobile.disabled[data-v-05fa7eed]{background:#FFFFFF0F;color:#FFFFFF7A\n}\n.outline-desktop[data-v-05fa7eed],.outline-mobile[data-v-05fa7eed]{border-color:#404A65;background:transparent\n}\n.outline-desktop[data-v-05fa7eed]:not([disabled]):hover,.outline-desktop[data-v-05fa7eed]:not([disabled]):focus-visible,.outline-mobile[data-v-05fa7eed]:not([disabled]):hover,.outline-mobile[data-v-05fa7eed]:not([disabled]):focus-visible{border-color:#7A859F\n}\n.outline-desktop[data-v-05fa7eed]:not([disabled]):active,.outline-mobile[data-v-05fa7eed]:not([disabled]):active{border-color:#343F5C\n}\n.outline-desktop[disabled][data-v-05fa7eed]{opacity:0.32\n}\n.outline-mobile[disabled][data-v-05fa7eed]{border-color:#2A3552;color:#858FAD\n}\n.outline-color-desktop[data-v-05fa7eed],.outline-color-mobile[data-v-05fa7eed]{border-color:#FFFFFF29;background:transparent\n}\n.outline-color-desktop[data-v-05fa7eed]:not([disabled]):hover,.outline-color-desktop[data-v-05fa7eed]:not([disabled]):focus-visible,.outline-color-mobile[data-v-05fa7eed]:not([disabled]):hover,.outline-color-mobile[data-v-05fa7eed]:not([disabled]):focus-visible{border-color:#FFFFFF70\n}\n.outline-color-desktop[data-v-05fa7eed]:not([disabled]):active,.outline-color-mobile[data-v-05fa7eed]:not([disabled]):active{border-color:#FFFFFF1F\n}\n.outline-color-desktop[disabled][data-v-05fa7eed]{opacity:0.32\n}\n.outline-color-mobile[disabled][data-v-05fa7eed]{border-color:#FFFFFF0F;color:#FFFFFF7A\n}\n.primary-text[data-v-05fa7eed]{border-color:transparent;background:transparent;color:#fff;padding:0;min-height:0\n}\n.primary-text svg[data-v-05fa7eed]{margin-right:10px\n}\n.primary-text.large[data-v-05fa7eed]{font-family:Roboto,sans-serif;font-size:16px;font-weight:600;line-height:24px;letter-spacing:1.25px\n}\n.primary-text.large svg[data-v-05fa7eed]{max-width:20px;max-height:20px\n}\n.primary-text.medium[data-v-05fa7eed]{font-family:Roboto,sans-serif;font-size:14px;font-weight:600;line-height:20px;letter-spacing:1.25px\n}\n.primary-text.medium svg[data-v-05fa7eed]{max-width:20px;max-height:20px\n}\n.primary-text.small svg[data-v-05fa7eed],.primary-text.extra-small svg[data-v-05fa7eed]{max-width:13px;max-height:13px;margin-right:5.5px\n}\n.primary-text[data-v-05fa7eed]:not([disabled]):hover{color:#1F9EFF\n}\n.primary-text:not([disabled]):hover svg[data-v-05fa7eed]{fill:#1F9EFF\n}\n.primary-text[data-v-05fa7eed]:not([disabled]):focus-visible{color:#1F9EFF;border-color:#1F9EFFA3;border-style:dashed;border-width:2px;border-radius:0\n}\n.primary-text:not([disabled]):focus-visible svg[data-v-05fa7eed]{fill:#1F9EFF\n}\n.primary-text[data-v-05fa7eed]:not([disabled]):active{color:#176FB7\n}\n.primary-text:not([disabled]):active svg[data-v-05fa7eed]{fill:#176FB7\n}\n.primary-text[disabled][data-v-05fa7eed]{opacity:0.32;color:#1F9EFF\n}\n.primary-text[disabled] svg[data-v-05fa7eed]{fill:#1F9EFF\n}\n.secondary-text[data-v-05fa7eed]{border-color:transparent;background:transparent;color:#858FAD;padding:0;min-height:0\n}\n.secondary-text svg[data-v-05fa7eed]{margin-right:10px;fill:#858FAD\n}\n.secondary-text.large[data-v-05fa7eed]{font-family:Roboto,sans-serif;font-size:16px;font-weight:600;line-height:24px;letter-spacing:1.25px\n}\n.secondary-text.large svg[data-v-05fa7eed]{max-width:20px;max-height:20px\n}\n.secondary-text.medium[data-v-05fa7eed]{font-family:Roboto,sans-serif;font-size:14px;font-weight:600;line-height:20px;letter-spacing:1.25px\n}\n.secondary-text.medium svg[data-v-05fa7eed]{max-width:20px;max-height:20px\n}\n.secondary-text.small svg[data-v-05fa7eed],.secondary-text.extra-small svg[data-v-05fa7eed]{max-width:13px;max-height:13px;margin-right:5.5px\n}\n.secondary-text[data-v-05fa7eed]:not([disabled]):hover{color:#fff\n}\n.secondary-text:not([disabled]):hover svg[data-v-05fa7eed]{fill:#fff\n}\n.secondary-text[data-v-05fa7eed]:not([disabled]):focus-visible{color:#1F9EFF;border-color:#1F9EFFA3;border-style:dashed;border-width:2px;border-radius:0\n}\n.secondary-text:not([disabled]):focus-visible svg[data-v-05fa7eed]{fill:#fff\n}\n.secondary-text[data-v-05fa7eed]:not([disabled]):active{color:#5D657F\n}\n.secondary-text:not([disabled]):active svg[data-v-05fa7eed]{fill:#5D657F\n}\n.secondary-text[disabled][data-v-05fa7eed]{opacity:0.32;color:#858FAD\n}\n.secondary-text[disabled] svg[data-v-05fa7eed]{fill:#858FAD\n}\n.block[data-v-05fa7eed]{width:100%\n}\n", ""])
        },
        4510: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "EXTRA_SMALL", (function() {
                return n
            })), a.d(t, "SMALL", (function() {
                return i
            })), a.d(t, "MEDIUM", (function() {
                return r
            })), a.d(t, "LARGE", (function() {
                return s
            })), a.d(t, "PRIMARY_MOBILE", (function() {
                return o
            })), a.d(t, "PRIMARY_COLOR_MOBILE", (function() {
                return c
            })), a.d(t, "ERROR_MOBILE", (function() {
                return d
            })), a.d(t, "SECONDARY_MOBILE", (function() {
                return l
            })), a.d(t, "SECONDARY_COLOR_MOBILE", (function() {
                return u
            })), a.d(t, "OUTLINE_MOBILE", (function() {
                return p
            })), a.d(t, "OUTLINE_COLOR_MOBILE", (function() {
                return f
            })), a.d(t, "PRIMARY_DESKTOP", (function() {
                return m
            })), a.d(t, "PRIMARY_COLOR_DESKTOP", (function() {
                return y
            })), a.d(t, "ERROR_DESKTOP", (function() {
                return b
            })), a.d(t, "SECONDARY_DESKTOP", (function() {
                return g
            })), a.d(t, "SECONDARY_COLOR_DESKTOP", (function() {
                return h
            })), a.d(t, "OUTLINE_DESKTOP", (function() {
                return T
            })), a.d(t, "OUTLINE_COLOR_DESKTOP", (function() {
                return v
            })), a.d(t, "PRIMARY_TEXT", (function() {
                return A
            })), a.d(t, "SECONDARY_TEXT", (function() {
                return k
            })), a.d(t, "SIZE_BUTTONS", (function() {
                return E
            })), a.d(t, "TYPE_BUTTONS_MOBILE", (function() {
                return w
            })), a.d(t, "TYPE_BUTTONS_DESKTOP", (function() {
                return x
            })), a.d(t, "TYPE_BUTTONS", (function() {
                return M
            }));
            const n = "extra-small",
                i = "small",
                r = "medium",
                s = "large",
                o = "primary-mobile",
                c = "primary-color-mobile",
                d = "error-mobile",
                l = "secondary-mobile",
                u = "secondary-color-mobile",
                p = "outline-mobile",
                f = "outline-color-mobile",
                m = "primary-desktop",
                y = "primary-color-desktop",
                b = "error-desktop",
                g = "secondary-desktop",
                h = "secondary-color-desktop",
                T = "outline-desktop",
                v = "outline-color-desktop",
                A = "primary-text",
                k = "secondary-text",
                E = [n, i, r, s],
                w = [o, c, d, l, u, p, f, A, k],
                x = [m, y, b, g, h, T, v],
                M = [...new Set(x, w)]
        },
        52: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PROMISE_STATE", {
                enumerable: !0,
                get: function() {
                    return b.PROMISE_STATE
                }
            }), Object.defineProperty(t, "REQUEST_TYPE", {
                enumerable: !0,
                get: function() {
                    return f.REQUEST_TYPE
                }
            }), Object.defineProperty(t, "arrayToObject", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "chunkArray", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "chunkString", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "db", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "getCachedBalance", {
                enumerable: !0,
                get: function() {
                    return u.getCachedBalance
                }
            }), Object.defineProperty(t, "getGeo", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "getPromiseState", {
                enumerable: !0,
                get: function() {
                    return b.getPromiseState
                }
            }), Object.defineProperty(t, "getTokenId", {
                enumerable: !0,
                get: function() {
                    return y.getTokenId
                }
            }), Object.defineProperty(t, "hashCode", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "hex2a", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "isBalanceCached", {
                enumerable: !0,
                get: function() {
                    return u.isBalanceCached
                }
            }), Object.defineProperty(t, "randomElementFromArray", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(t, "requestQueueState", {
                enumerable: !0,
                get: function() {
                    return f.requestQueueState
                }
            }), Object.defineProperty(t, "setCachedBalance", {
                enumerable: !0,
                get: function() {
                    return u.setCachedBalance
                }
            }), Object.defineProperty(t, "sleepFor", {
                enumerable: !0,
                get: function() {
                    return m.sleepFor
                }
            });
            var i = n(a(2412)),
                r = n(a(2414)),
                s = n(a(2415)),
                o = n(a(2416)),
                c = n(a(2417)),
                d = n(a(2418)),
                l = n(a(2419)),
                u = a(2420),
                p = n(a(2421)),
                f = a(2422),
                m = a(2423),
                y = a(2424),
                b = a(2425)
        },
        5294: function(e, t, a) {
            var n = a(24),
                i = a(102).parse,
                r = ["acl", "location", "logging", "notification", "partNumber", "policy", "requestPayment", "torrent", "uploadId", "uploads", "versionId", "versioning", "versions", "website"];

            function s(e) {
                return "AWS " + e.key + ":" + c(e)
            }

            function o(e) {
                return n.createHmac("sha1", e.secret).update(e.message).digest("base64")
            }

            function c(e) {
                return e.message = d(e), o(e)
            }

            function d(e) {
                var t = e.amazonHeaders || "";
                return t && (t += "\n"), [e.verb, e.md5, e.contentType, e.date ? e.date.toUTCString() : "", t + e.resource].join("\n")
            }

            function l(e) {
                return "GET\n\n\n" + e.date + "\n" + e.resource
            }
            e.exports = s, e.exports.authorization = s, e.exports.hmacSha1 = o, e.exports.sign = c, e.exports.signQuery = function(e) {
                return e.message = l(e), o(e)
            }, e.exports.stringToSign = d, e.exports.queryStringToSign = l, e.exports.canonicalizeHeaders = function(e) {
                for (var t = [], a = Object.keys(e), n = 0, i = a.length; n < i; ++n) {
                    var r, s = e[r = a[n]];
                    0 === (r = r.toLowerCase()).indexOf("x-amz") && t.push(r + ":" + s)
                }
                return t.sort().join("\n")
            }, e.exports.canonicalizeResource = function(e) {
                var t = i(e, !0),
                    a = t.pathname,
                    n = [];
                return Object.keys(t.query).forEach((function(e) {
                    if (~r.indexOf(e)) {
                        var a = "" == t.query[e] ? "" : "=" + encodeURIComponent(t.query[e]);
                        n.push(e + a)
                    }
                })), a + (n.length ? "?" + n.sort().join("&") : "")
            }
        },
        721: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = {
                name: "BaseInputField",
                components: {
                    BaseIcon: n(a(1165)).default
                },
                props: {
                    coin: {
                        type: Object,
                        default: () => ({})
                    },
                    placeholder: {
                        type: String,
                        default: "Some placeholder"
                    },
                    editPlaceholder: {
                        type: String,
                        default: ""
                    },
                    focusPlaceholder: {
                        type: String,
                        default: ""
                    },
                    value: {
                        type: String,
                        default: ""
                    },
                    valueFiat: {
                        type: String,
                        default: ""
                    },
                    error: {
                        type: String,
                        default: ""
                    },
                    note: {
                        type: String,
                        default: ""
                    },
                    ticker: {
                        type: String,
                        default: ""
                    },
                    fiatTicker: {
                        type: String,
                        default: ""
                    },
                    isFocus: {
                        type: Boolean,
                        default: !1
                    },
                    isReadOnly: {
                        type: Boolean,
                        default: !1
                    },
                    isRequired: {
                        type: Boolean,
                        default: !1
                    },
                    isPassword: {
                        type: Boolean,
                        default: !1
                    },
                    isPaste: {
                        type: Boolean,
                        default: !1
                    },
                    isFiatAmount: {
                        type: Boolean,
                        default: !1
                    },
                    validationPattern: {
                        type: RegExp,
                        default: () => /(?:)/
                    }
                },
                data: () => ({
                    isFocusElement: !1,
                    isFocusInput: !1,
                    inputType: "text",
                    typetimer: null,
                    isEditPlaceholder: !1
                }),
                computed: {
                    currentPlaceholder() {
                        var e, t, a;
                        return this.isEditPlaceholder && null !== (e = this.editPlaceholder) && void 0 !== e && e.length ? this.editPlaceholder : (null !== (t = this.value) && void 0 !== t && t.length || this.isFocusInput) && null !== (a = this.focusPlaceholder) && void 0 !== a && a.length ? this.focusPlaceholder : this.placeholder
                    },
                    isSetValue() {
                        return this.isFiatAmount && !isNaN(this.value) ? +this.value > 0 : String(this.value).length > 0
                    }
                },
                mounted() {
                    this.isFocus && this.setFocus(), this.isPassword && (this.inputType = "password")
                },
                methods: {
                    enterPressed() {
                        this.$emit("enter-pressed")
                    },
                    pastSomething() {
                        if (this.isPaste && !this.isEditPlaceholder && !this.isFocusInput) {
                            const e = this.$electron.clipboard.readText().trim();
                            e && this.setValue(e)
                        }
                    },
                    setFocus() {
                        this.isFocusInput = !0, this.$refs.input.focus()
                    },
                    setValue(e) {
                        console.log(this.$refs), this.$emit("input", e), this.$refs.input.value = e
                    },
                    setFiatValue(e) {
                        this.$refs.inputFiat.value = e, this.$emit("input", e)
                    },
                    toggleTypePassword() {
                        this.inputType = "password" === this.inputType ? "text" : "password"
                    },
                    onPaste() {
                        this.isEditPlaceholder = !0, this.setFocus(), this.onFocus()
                    },
                    onClean() {
                        console.log("onClean"), this.setValue(""), this.setFocus()
                    },
                    onClick() {
                        this.pastSomething(), console.log("onClick")
                    },
                    onInput(e) {
                        let {
                            value: t
                        } = e.target;
                        new RegExp(this.validationPattern).test(t) && this.setValue(t)
                    },
                    onBlur() {
                        this.isFocusInput = !1, this.isEditPlaceholder = !1
                    },
                    onFocus() {
                        this.isFocusInput = !0, this.$emit("focus")
                    },
                    onKeyUp() {
                        console.log("onKeyUp")
                    },
                    onKeyPress() {
                        console.log("onKeyPress")
                    },
                    onFiatBlur() {
                        console.log("onFiatBlur")
                    },
                    onFiatFocus() {
                        console.log("onFiatFocus")
                    },
                    onFiatInput(e) {
                        console.log("onFiatInput");
                        let {
                            value: t
                        } = e.target;
                        this.setFiatValue(t)
                    }
                }
            };
            t.default = i
        },
        722: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = function(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var a = i(t);
                if (a && a.has(e)) return a.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
                    } n.default = e, a && a.set(e, n);
                return n
            }(a(4507));

            function i(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (i = function(e) {
                    return e ? a : t
                })(e)
            }
            var r = {
                name: "BaseIcon",
                props: {
                    name: {
                        type: String,
                        required: !0
                    }
                },
                computed: {
                    dynamicComponent() {
                        return n[this.name]
                    }
                }
            };
            t.default = r
        },
        723: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(4510),
                i = {
                    name: "BaseButton",
                    props: {
                        type: {
                            type: String,
                            default: "primary-desktop",
                            validate: e => n.TYPE_BUTTONS.includes(e)
                        },
                        size: {
                            type: String,
                            default: "medium",
                            validate: e => n.SIZE_BUTTONS.includes(e)
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        block: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        buttonClasses() {
                            const {
                                type: e,
                                size: t,
                                block: a,
                                disabled: n
                            } = this;
                            return ["root", e, t, a && "block", n && "disabled"]
                        }
                    }
                };
            t.default = i
        },
        943: function(e) {
            e.exports = JSON.parse('[{"currency":"EGLD","validators":[{"address":"erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqc0llllsayxegu","name":"Binance Staking","reward":9.4},{"address":"erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqq8hlllls7a6h85","name":"Just Mining","reward":9.4}]},{"currency":"NEAR","validators":[{"address":"lunanova.poolv1.near","name":"LunaNova","fee":7,"reward":11}]},{"currency":"ATOM","validators":[{"name":"Sikka","reward":"10.16","address":"cosmosvaloper1ey69r37gfxvxg62sh4r0ktpuc46pzjrm873ae8","consensus_pubkey":"cosmosvalconspub1zcjduepqg6y8magedjwr9p6s2c28zp28jdjtecxhn97ew6tnuzqklg63zgfspp9y3n","description":{"moniker":"Sikka","identity":"https://keybase.io/team/sikka","website":"sikka.tech","details":"Sunny Aggarwal (@sunnya97) and Dev Ojha (@ValarDragon)"},"commission":{"rate":"0.000000000000000000","max_rate":"1.000000000000000000","max_change_rate":"1.000000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"Polychain Labs","reward":"8.13","address":"cosmosvaloper14k4pzckkre6uxxyd2lnhnpp8sngys9m6hl6ml7","consensus_pubkey":"cosmosvalconspub1zcjduepquhlqdhjw4qp2c2t6qh5z7tfk52qc72623f0etc8f3n7hy8uuh25ql34fvu","description":{"moniker":"Polychain Labs","identity":"A51CE3B9CD649C3F","website":"https://cosmos.polychainlabs.com","details":"Secure staking with Polychain Labs, the most experienced institutional grade staking team."},"commission":{"rate":"0.200000000000000000","max_rate":"1.000000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-04-22T04:57:29.717811274Z"}},{"name":"🐠stake.fish | bitfish","reward":"9.76","address":"cosmosvaloper1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u2lcnj0","consensus_pubkey":"cosmosvalconspub1zcjduepq6fpkt3qn9xd7u44478ypkhrvtx45uhfj3uhdny420hzgsssrvh3qnzwdpe","description":{"moniker":"🐠stake.fish | bitfish","identity":"90B597A673FC950E","website":"stake.fish","details":"Winner of the Game of Stakes. Brought to you by stake.fish and bitfish."},"commission":{"rate":"0.040000000000000000","max_rate":"1.000000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"DokiaCapital","reward":"8.64","address":"cosmosvaloper14lultfckehtszvzw4ehu0apvsr77afvyju5zzy","consensus_pubkey":"cosmosvalconspub1zcjduepqp0j4vum7ryt6nl6zsgq9ar347afmq2c5z6jmzeavv2p2ns6m0dgs5zmg4z","description":{"moniker":"DokiaCapital","identity":"25422F4ADF3F6765","website":"https://ion.dokia.capital","details":"We are open for delegations."},"commission":{"rate":"0.150000000000000000","max_rate":"0.150000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"SparkPool","reward":"9.76","address":"cosmosvaloper1rwh0cxa72d3yle3r4l8gd7vyphrmjy2kpe4x72","consensus_pubkey":"cosmosvalconspub1zcjduepq5kg8xls9l35ftulkm2rt70hexeeyr5cqqkcv4h7936z5uasvvazqla8eck","description":{"moniker":"SparkPool","identity":"DE8E37240061B04E","website":"https://cosmos.sparkpool.com/","details":"The biggest Ethereum mining pool, we can be a reliable validator with our 3 years"},"commission":{"rate":"0.040000000000000000","max_rate":"0.200000000000000000","max_change_rate":"0.050000000000000000","update_time":"2019-09-26T06:05:19.676181518Z"}},{"name":"Certus One","reward":"8.89","address":"cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys","consensus_pubkey":"cosmosvalconspub1zcjduepqwrjpn0slu86e32zfu5xxg8l42uk40guuw6er44vw2yl6s7wc38est6l0ux","description":{"moniker":"Certus One","identity":"ABD51DF68C0D1ECF","website":"https://certus.one","details":"Stake and earn rewards with the most secure and stable validator. Winner of the Game of Stakes. Operated by Certus One Inc. By delegating, you confirm that you are aware of the risk of slashing and that Certus One Inc is not liable for any potential damages to your investment."},"commission":{"rate":"0.125000000000000000","max_rate":"0.300000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"Cosmostation","reward":"8.94","address":"cosmosvaloper1clpqr4nrk4khgkxj78fcwwh6dl3uw4epsluffn","consensus_pubkey":"cosmosvalconspub1zcjduepq0dc9apn3pz2x2qyujcnl2heqq4aceput2uaucuvhrjts75q0rv5smjjn7v","description":{"moniker":"Cosmostation","identity":"AE4C403A6E7AA1AC","website":"https://www.cosmostation.io","details":"CØSMOSTATION Validator. Delegate your atoms and Start Earning Staking Rewards"},"commission":{"rate":"0.120000000000000000","max_rate":"0.200000000000000000","max_change_rate":"0.100000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"iqlusion","reward":"9.15","address":"cosmosvaloper1grgelyng2v6v3t8z87wu3sxgt9m5s03xfytvz7","consensus_pubkey":"cosmosvalconspub1zcjduepqdgvppnyr5c9pulsrmzr9e9rp7qpgm9jwp5yu8g3aumekgjugxacq8a9p2c","description":{"moniker":"iqlusion","identity":"DCB176E79AE7D51F","website":"iqlusion.io","details":""},"commission":{"rate":"0.100000000000000000","max_rate":"1.000000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-03-13T23:00:00Z"}},{"name":"Figment Networks","reward":"8.94","address":"cosmosvaloper1hjct6q7npsspsg3dgvzk3sdf89spmlpfdn6m9d","consensus_pubkey":"cosmosvalconspub1zcjduepqnltddase4lqjcfhup8ymg0qex3srakg54ppv06pstvwdjxkm6tmq08znvs","description":{"moniker":"Figment Networks","identity":"E5F274B870BDA01D","website":"https://figment.network","details":"Makers of Hubble and Canada’s largest Cosmos validator, Figment is the easiest and most secure way to stake your Atoms."},"commission":{"rate":"0.120000000000000000","max_rate":"0.300000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-04-30T21:17:48.866795285Z"}},{"name":"Forbole","reward":"10.16","address":"cosmosvaloper14kn0kk33szpwus9nh8n87fjel8djx0y070ymmj","consensus_pubkey":"cosmosvalconspub1zcjduepqmfxl36td7rcdzszzrk6c7kzp5l3jlw4lnxz8zms3py7qcsa9xlns7zxfd6","description":{"moniker":"Forbole","identity":"2861F5EE06627224","website":"https://www.forbole.com/cosmos-hub-validator/","details":"We are a named winner in Game of Stakes and HackAtom3 by Cosmos proving us as a validator with high uptime and never jailed. We are currently running a [#PWYW campaign](https://bit.ly/2Hx9dM2) which you can choose how much commission you would like to pay us."},"commission":{"rate":"0.000000000000000000","max_rate":"0.250000000000000000","max_change_rate":"0.010000000000000000","update_time":"2019-03-28T07:25:41.600375946Z"}},{"name":"jackzampolin","reward":"9.15","address":"cosmosvaloper130mdu9a0etmeuw52qfxk73pn0ga6gawkxsrlwf","consensus_pubkey":"cosmosvalconspub1zcjduepqfahazsjeru5wqulfuzklmkh272ggss2ru6fk00zq2fmlfzcq773sqlqe42","description":{"moniker":"jackzampolin","identity":"0979483D4F669CFF","website":"https://pylonvalidator.com","details":"\'Trust, but verify.\' -Russian Proverb"},"commission":{"rate":"0.100000000000000000","max_rate":"0.150000000000000000","max_change_rate":"0.100000000000000000","update_time":"2019-03-25T15:28:01.171914203Z"}}]},{"currency":"BAND","validators":[{"name":"Figment Networks Inc.","reward":"10.16","address":"bandvaloper1zm5p8gg3ugjcdwz9yrxaf6fdptxa4gw04rplr9","consensus_pubkey":"bandvalconspub1addwnpepqvll0h6xd65l4w0dvunurmdz7dapxxxp7jm2s5fg7v6rqla8fqmpqmwytma","description":{"moniker":"figment","identity":"E5F274B870BDA01D","website":"https://figment.network","details":"Figment Networks Inc."},"commission":{"rate":"0.100000000000000000","max_rate":"0.250000000000000000","max_change_rate":"0.050000000000000000","update_time":"2020-05-28T14:00:00Z"}},{"name":"Chorus One","reward":"10.16","address":"bandvaloper1fyn907tzlxknxgmvkjvmhgksf7t3zwjlcd6a0a","consensus_pubkey":"bandvalconspub1addwnpepqg008dkxcurd0fl47glld92j0aycld27nvl8ufkp8vqwlu2pmzzqy7me5tg","description":{"moniker":"Chorus One","identity":"00B79D689B7DC1CE","website":"https://chorus.one","details":"Secure Band and shape its future by delegating to Chorus One, a highly secure and stable validator. By delegating, you agree to the terms of service."},"commission":{"rate":"0.120000000000000000","max_rate":"0.300000000000000000","max_change_rate":"0.100000000000000000","update_time":"2020-05-28T14:00:00Z"}}]},{"currency":"OSMO","validators":[{"name":"Atomic Wallet","reward":"11","address":"osmovaloper1x2e2pnenh0mmc99cnp7sukngnt8lc4saljavr3"}]},{"currency":"XTZ","validators":[{"address":"tz1TcH4Nb3aHNDJ7CGZhU7jgAK1BkSP4Lxds","name":"XTZ Antipodes","logo":"xtz-antipodes.png","site":"https://xtzantipodes.org","balance":118800.355971,"stakingBalance":904501.913143,"stakingCapacity":1127415.637111,"estimatedRoi":0.064791},{"address":"tz3adcvQaKXTCg12zbninqo3q8ptKKtDFTLv","name":"Tezzigator","logo":"tezzigator.png","site":"https://www.tezzigator.com","balance":1029350.686895,"stakingBalance":7431297.310968,"stakingCapacity":9772716.158969,"estimatedRoi":0.063356},{"address":"tz1YKh8T79LAtWxX29N5VedCSmaZGw9LNVxQ","name":"Tezos Brazil","logo":"tezos-brazil.png","site":"https://tezosbr.com","balance":21826.653288,"stakingBalance":96594.775482,"stakingCapacity":208302.655757,"estimatedRoi":0.063728},{"address":"tz1TDSmoZXwVevLTEvKCTHWpomG76oC9S2fJ","name":"Tezos Capital Legacy","logo":"tezos-capital.png","site":"https://www.tezos.capital","balance":1871626.207705,"stakingBalance":11820408.108919,"stakingCapacity":17758503.268737,"estimatedRoi":0.059872},{"address":"tz3bEQoFCZEEfZMskefZ8q8e4eiHH1pssRax","name":"Ceibo XTZ","logo":"ceibo-xtz.png","site":"https://www.ceiboxtz.com","balance":26485.185431,"stakingBalance":229672.952134,"stakingCapacity":257566.932136,"estimatedRoi":0.065288},{"address":"tz2PdGc7U5tiyqPgTSgqCDct94qd6ovQwP6u","name":"Tezos Capital","logo":"tezos-capital.png","site":"https://www.tezos.capital","balance":100349.565992,"stakingBalance":510696.612696,"stakingCapacity":964435.509474,"estimatedRoi":0.055632},{"address":"tz1NRGxXV9h6SdNaZLcgmjuLx3hyy2f8YoGN","name":"Bake ꜩ For Me","logo":"bake-tz-for-me.png","site":"https://baketzfor.me","balance":12320.529561,"stakingBalance":75422.663562,"stakingCapacity":122412.00096,"estimatedRoi":0.06054},{"address":"tz1Ldzz6k1BHdhuKvAtMRX7h5kJSMHESMHLC","name":"PayTezos","logo":"paytezos.png","site":"https://paytezos.com","balance":1268461.397504,"stakingBalance":7910797.121167,"stakingCapacity":12041367.832962,"estimatedRoi":0.063363},{"address":"tz1Xek93iSXXckyQ6aYLVS5Rr2tge2en7ZxS","name":"XTZ Delegate","logo":"xtz-delegate.png","site":"https://xtzdelegate.io","balance":49473.941936,"stakingBalance":307538.312934,"stakingCapacity":474708.941335,"estimatedRoi":0.062688},{"address":"tz1TaLYBeGZD3yKVHQGBM857CcNnFFNceLYh","name":"Tezocracy","logo":"tezocracy.png","site":"https://tezocracy.com","balance":712467.090159,"stakingBalance":4434120.689041,"stakingCapacity":6760795.80625,"estimatedRoi":0.063388,"insAmount":12560.84988}]},{"currency":"ADA","validators":[{"address":"57eb48cdf25980039f087207af09fafb4970018e322d37c11c9a2496","ticker":"EVERS","name":"Everstake","logo":"57eb48cdf25980039f087207af09fafb4970018e322d37c11c9a2496.png","estimatedRoi":0.063388,"visibility":false},{"address":"ae66e56ab11ccb39e882669f220a37956c683e4ce84fefd910012d7a","ticker":"AWP2","name":"Atomic Wallet 2","estimatedRoi":5,"visibility":true},{"address":"a3ac6ca0694fc5825f831c8d0d97f202c4f298741ae60874730fafb8","ticker":"AWP","name":"Atomic Wallet","estimatedRoi":5,"visibility":true}]},{"currency":"TRX","validators":[{"name":"Binance","reward":"4.32","address":"TLyqzVGLV1srkB7dToTAEqgDSfPtXRJZYH"},{"name":"Sesameseed","reward":"4.32","address":"TGzz8gjYiYRqpfmDwnLxfgPuLVNmpCswVp"},{"name":"BitGuils","reward":"4.32","address":"TV9QitxEJ3pdiAUAfJ2QuPxLKp9qTTR3og"}]},{"currency":"ICX","validators":[{"address":"hx0b047c751658f7ce1b2595da34d57a0e7dad357d","name":"ICON Foundation","reward":"10"},{"address":"hxfba37e91ccc13ec1dab115811f73e429cde44d48","name":"ICX_Station","reward":"10"},{"address":"hxd0d9b0fee857de26fd1e8b15209ca15b14b851b2","name":"VELIC","reward":"10"},{"address":"hx54d6f19c3d16b2ef23c09c885ca1ba776aaa80e2","name":"Ubik Capital","reward":"10"},{"address":"hx262afdeda4eba10fe41fa5ef21796ac2bdcc6629","name":"ICONation","reward":"10"},{"address":"hx4a43790d44b07909d20fbcc233548fc80f7a4067","name":"RHIZOME","reward":"10"},{"address":"hxab751d4e83b6fda412a38cb5f7f96860396b1327","name":"Symmetry SLC","reward":"10"},{"address":"hxd5059fec8665bc7b769f4893aef65cf00049377a","name":"ICON Hyperconnect","reward":"10"},{"address":"hxf75bfd0df8d96ee0963965135af2485cee6d5000","name":"weBloc asia","reward":"10"},{"address":"hxdc35f82a3a943e040ae2b9ab2baa2118781b2bc9","name":"Mineable","reward":"10"},{"address":"hx863e16bd18ceaa7d498b4b275e36cd58818b1f25","name":"ICONVIET","reward":"10"},{"address":"hxe4c008b838e8a9a7c065f20f393974de4c86f917","name":"ReliantNode","reward":"10"},{"address":"hx168d2cfe6d73acb8cb690d3abda54d3af266addf","name":"block42","reward":"10"},{"address":"hxb11448743cbb63fcf29609401cdc5782793be211","name":"ICONbet Community","reward":"10"},{"address":"hx8e6dcffdf06f850af5d372ac96389135e17d56d3","name":"Everstake","reward":"10"},{"address":"hx3aa778e1f00c77d3490e9e625f1f83ed26f90133","name":"Paradigm Citadel","reward":"10"},{"address":"hx5b97bbec2e555289351806103833a465b7fbbd47","name":"Blockmove","reward":"10"},{"address":"hx231a795d1c719b9edf35c46b9daa4e0b5a1e83aa","name":"iBriz - ICONOsphere","reward":"10"},{"address":"hx6f89b2c25c15f6294c79810221753131067ed3f8","name":"Sharpn","reward":"10"},{"address":"hx9780bfcd8d33c50f56e37f5b27313433c28eb8d8","name":"Stakin (POS Bakerz)","reward":"10"}]},{"currency":"ZIL","validators":[{"address":"0x122219cceab410901e96c3a0e55e46231480341b","name":"Zilliqa","reward":null},{"address":"0x3ee34d308f962d17774a591f32cd1214e8bc470d","name":"Shardpool.io","reward":null},{"address":"0x635eff625a147c7ca0397445eee436129ee6ca0b","name":"Moonlet.io","reward":null},{"address":"0x82b82c65213e0b2b206492d3d8a2a679e7fe52e0","name":"ViewBlock","reward":null},{"address":"0xb83fc2c72c44b6b869c64384375c979dc3f7cf05","name":"Zillacracy","reward":null}]},{"currency":"SOL","validators":[{"address":"2Y2opv8Kq8zFATg6ipqb2AjgCf18tkv1CLMLXQGif2NH","name":"AtomicWallet","reward":7.4}]},{"currency":"BNB","validators":[{"address":"bva1t42gtf6hawqgpmdpjzmvlzvmlttlqtkvlmgjxt","name":"BscScan","reward":4.7},{"address":"bva1rv0d5yehn48jnza2f490xa00t20scse9y4khvh","name":"Neptune","reward":4.2}]},{"currency":"LUNC","validators":[{"name":"Interstellar Lounge","reward":"10.16","address":"terravaloper1fg5g8acntt90n9303cm5fjza9s3newleq60zt9"},{"name":"Orion.Money","reward":"8.13","address":"terravaloper1259cmu5zyklsdkmgstxhwqpe0utfe5hhyty0at"}]},{"currency":"LUNA","validators":[{"name":"Allnodes.com ⚡️ Auto-compound (Ledger or Keplr)","reward":"7","address":"terravaloper120ppepaj2lh5vreadx42wnjjznh55vvktp78wk"},{"name":"polkachu.com","reward":"7","address":"terravaloper1rr2g4z2ch4cqwl8s70yj94a5l2vakg0v36nmjh"}]},{"currency":"FET","validators":[{"name":"Binance Staking","reward":"11","address":"fetchvaloper17zr49k6tmcz7eezxgl7x0pfxa9e92h7lv29hd3"}]}]')
        },
        95: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MILLISECONDS_IN_ONE_SECOND = void 0, t.convertSecondsToDateTime = function(e) {
                return s(e, 1)
            }, t.convertTimestampToDateTime = s, t.getNumberWithoutENotation = function(e) {
                if (!(e = e.toString().replace(r, "").toLowerCase())) return "0";
                if (!e.includes("e")) return e;
                const [t, a] = e.split("e", 2);
                e = t;
                const n = Number(a);
                if (0 === n) return t;
                if (e.indexOf(".") > -1) {
                    const [t, a] = e.split(".");
                    return n > 0 ? n < a.length ? `${t}${a.slice(0,n)}.${a.slice(n)}` : `${t}${a}${"0".repeat(n-a.length)}` : `0.${t.padStart(Math.abs(n)-1+t.length,"0")}${a}`
                }
                if (n > 0) return e.padEnd(n + e.length, "0");
                return "0." + e.padStart(Math.abs(n) - 1 + e.length, "0")
            }, t.getStringWithEnsuredEndChar = function(e, t) {
                return e.endsWith(t) ? e : e.concat(t)
            }, t.toCurrency = function(e, t) {
                if (null === e) throw new Error("value must not be null");
                if ("string" == typeof e) {
                    if (-1 !== e.indexOf(".")) throw new Error(e + " must not contain '.'");
                    if (-1 !== e.indexOf("-")) throw new Error(e + " must not contain '-'");
                    if ("number" != typeof t) throw new TypeError("toCurrency error: decimal is not a number")
                }
                if (new i.default(e).lte(0)) throw new Error("negative");
                const a = new i.default(e).toString(),
                    n = a.substring(0, a.length - t).replace(/^0+/, "") || 0,
                    r = a.substring(a.length - t).padStart(t, "0").replace(/0+$/, ""); - 1 !== r.search("-") && console.warn("convert: toCurrency: fractionPart is bad");
                if ("" !== r) return `${n}.${r}`;
                return "" + n
            }, t.toMinimal = function(e, t) {
                if (!Number.isInteger(t) || t < 0) throw new TypeError("toMinimal error: precision is not a positive integer");
                let a = e.toString().replace(",", ".");
                const n = a.startsWith("-");
                n && (a = a.substring(1));
                const i = function(e, t) {
                    if (!(e = e.replace(r, ""))) return "0";
                    let a = t;
                    if (e.includes("e")) {
                        const [t, n] = e.split("e", 2);
                        if (e = t, a += Number(n), a < 0) return "0"
                    }
                    if (0 === t) {
                        if ("" === (e = e.split(".", 2)[0]) || "0" === e) return "0"
                    } else {
                        const t = e.indexOf(".");
                        if (t > -1) {
                            const n = e.substring(0, t),
                                i = e.substring(t + 1, t + 1 + a);
                            e = `${n}${i}`.replace(r, ""), a -= i.length
                        }
                    }
                    return a > 0 ? e.padEnd(a + e.length, "0") : e
                }(a, t);
                return "0" !== i && n ? "-" + i : i
            };
            var i = n(a(35));
            t.MILLISECONDS_IN_ONE_SECOND = 1e3;
            const r = /^0+/;

            function s(e, t) {
                return new Date(1e3 * e / t)
            }
        }
    }
]);