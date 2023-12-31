(window.webpackJsonp = window.webpackJsonp || []).push([
    [205], {
        1163: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                methods: {
                    buy(e) {
                        this.$buy.isAvailable(e) ? this.$router.push("/simplex/USD/" + this.$buy.getAvailableWallet(e).id) : this.$router.push({
                            path: "/exchange",
                            query: {
                                coinToSend: "BTC%|%BTC",
                                coinToReceive: `${e.ticker}%|%${e.id}`
                            }
                        })
                    }
                }
            };
            t.default = a
        },
        1264: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("main", [!e.isOpenPopup && e.allNft.length ? i("NFTGallery", {
                        attrs: {
                            nfts: e.allNft,
                            "data-test-id": "nft_gallery"
                        },
                        on: {
                            toggleInfo: e.toggleInfo,
                            toggleReceivePopup: e.toggleReceivePopup
                        }
                    }) : e._e(), e._v(" "), e.isOpenPopup || 0 !== e.allNft.length ? e._e() : i("NFTEmpty", {
                        attrs: {
                            isLoading: e.isLoading,
                            "data-test-id": "nft_empty"
                        },
                        on: {
                            openReceivePopup: e.toggleReceivePopup
                        }
                    }), e._v(" "), e.showInfoPopup ? i("NFTInfo", {
                        attrs: {
                            nft: e.selectedNFT,
                            "data-test-id": "nft_info"
                        },
                        on: {
                            onShowSendPopup: e.toggleSendPopup,
                            onClose: function(t) {
                                e.showInfoPopup = !1
                            }
                        }
                    }) : e._e(), e._v(" "), e.showReceivePopup ? i("NFTReceive", {
                        on: {
                            onClose: e.toggleReceivePopup
                        }
                    }) : e._e(), e._v(" "), e.showSendPopup ? i("NFTSendToken", {
                        attrs: {
                            token: e.selectedNFT
                        },
                        on: {
                            close: e.toggleSendPopup,
                            closeAll: e.closeAll
                        }
                    }) : e._e()], 1)
                },
                s = []
        },
        1300: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("main", [i("KeepAlive", {
                        attrs: {
                            max: "5"
                        }
                    }, [i("TableCoins", {
                        on: {
                            editToken: e.editToken
                        }
                    })], 1), e._v(" "), i("div", {
                        staticClass: "add-token",
                        on: {
                            click: e.toggleTokenPopup
                        }
                    }, [e._v("\n    +\n  ")]), e._v(" "), i("RefreshButton", {
                        staticClass: "left-position",
                        class: {
                            updating: e.isUpdatingFiat && e.isLoading
                        },
                        on: {
                            refreshFinished: function(t) {
                                return e.updateBalances(!0)
                            }
                        }
                    }), e._v(" "), i("transition", {
                        attrs: {
                            mode: "out-in",
                            name: "page-fade"
                        }
                    }, [e.showTokenPopup ? i("TokenAddTabs", {
                        attrs: {
                            coin: e.coinTokenPopup,
                            isEditToken: e.isEditToken
                        },
                        on: {
                            closeTokenPopup: e.closeTokenPopup
                        }
                    }) : e._e()], 1)], 1)
                },
                s = []
        },
        1304: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "history scroll-list2",
                        on: {
                            scroll: e.handleScrollEnd
                        }
                    }, [i("Search", {
                        staticClass: "history-search-fix",
                        model: {
                            value: e.filter,
                            callback: function(t) {
                                e.filter = t
                            },
                            expression: "filter"
                        }
                    }), e._v(" "), e.settingsState ? e._e() : i("Table", {
                        attrs: {
                            filter: e.filter,
                            header: e.header,
                            isEmpty: e.isEmpty,
                            items: e.transactions
                        }
                    }, [e.filter.length && !e.transactions.length ? i("div", {
                        attrs: {
                            slot: "empty"
                        },
                        slot: "empty"
                    }, [i("div", {
                        staticClass: "empty"
                    }, [e._v("\n        No results found for “" + e._s(e.filter) + "”\n      ")])]) : e._e(), e._v(" "), i("FilterButton", {
                        attrs: {
                            slot: "header-row-2",
                            active: e.settingsState,
                            highlight: e.highlightSetting
                        },
                        on: {
                            click: function(t) {
                                e.settingsState = !e.settingsState
                            }
                        },
                        slot: "header-row-2"
                    }), e._v(" "), i("ExportButton", {
                        attrs: {
                            slot: "header-row-2"
                        },
                        on: {
                            click: e.exportHistory
                        },
                        slot: "header-row-2"
                    }), e._v(" "), e._l(e.transactions, (function(t, a) {
                        return i("HistoryTableRow", {
                            key: "row-" + a + "-" + Math.random(),
                            attrs: {
                                slot: "table-rows",
                                indexTx: a,
                                openedIds: e.openedIds,
                                tx: t
                            },
                            on: {
                                addOpenedId: e.addOpenedId,
                                removeOpenedId: e.removeOpenedId
                            },
                            slot: "table-rows"
                        })
                    }))], 2), e._v(" "), e.filter.length || e.transactions.length ? e._e() : i("BuyBitcoin", {
                        attrs: {
                            name: "transactions"
                        }
                    }), e._v(" "), e.isSavedTransactionPopup ? i("div", {
                        staticClass: "saved-transaction popup fixed"
                    }, [i("div", {
                        staticClass: "popup-background",
                        on: {
                            click: function(t) {
                                e.isSavedTransactionPopup = !1
                            }
                        }
                    }), e._v(" "), i("div", {
                        staticClass: "popup-wrap"
                    }, [i("div", {
                        staticClass: "success-icon"
                    }, [i("SuccessIconBig")], 1), e._v(" "), i("div", {
                        staticClass: "text-title"
                    }, [e._v("\n        Transactions are saved to your Desktop folder.\n      ")]), e._v(" "), i("button", {
                        staticClass: "button uppercase",
                        on: {
                            click: function(t) {
                                e.isSavedTransactionPopup = !1
                            }
                        }
                    }, [e._v("\n        Close\n      ")])])]) : e._e(), e._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e.settingsState ? i("FilterPopup", {
                        attrs: {
                            coins: e.coinsInvolvedInHistory,
                            directions: !0,
                            module: "history"
                        },
                        on: {
                            acceptFilter: e.acceptFilter,
                            close: function(t) {
                                e.settingsState = !1
                            }
                        }
                    }) : e._e()], 1)], 1)
                },
                s = []
        },
        1305: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("main", [a("div", {
                        staticClass: "support"
                    }, [a("div", {
                        staticClass: "title"
                    }, [e._v("\n      Atomic Wallet Support\n    ")]), e._v(" "), a("p", {
                        staticClass: "support__text"
                    }, [e._v("\n      Update your wallet to the latest version:\n    ")]), a("a", {
                        staticClass: "hover",
                        attrs: {
                            "data-test-id": "support_download_link"
                        },
                        on: {
                            click: function(t) {
                                return e.$electron.shell.openExternal("https://atomicwallet.io/downloads")
                            }
                        }
                    }, [e._v("atomicwallet.io/downloads")]), e._v(" "), a("div", {
                        staticClass: "row"
                    }, [a("a", {
                        on: {
                            click: function(t) {
                                return e.$electron.shell.openExternal("https://support.atomicwallet.io")
                            }
                        }
                    }, [a("img", {
                        attrs: {
                            src: i(2251)
                        }
                    }), e._v(" "), e._m(0)]), e._v(" "), a("a", {
                        on: {
                            click: function(t) {
                                return e.$bus.$emit("openSupportPopup", e.contactSupport)
                            }
                        }
                    }, [a("img", {
                        attrs: {
                            src: i(2247)
                        }
                    }), e._v(" "), e._m(1)]), e._v(" "), a("a", {
                        on: {
                            click: function(t) {
                                return e.$electron.shell.openExternal("https://www.youtube.com/atomicwallet")
                            }
                        }
                    }, [a("img", {
                        attrs: {
                            src: i(2253)
                        }
                    }), e._v(" "), e._m(2)])]), e._v(" "), a("div", {
                        staticClass: "social-networks"
                    }, [a("p", {
                        staticClass: "support__text"
                    }, [e._v("\n        Check out our social media\n      ")]), a("a", {
                        attrs: {
                            "data-test-id": "support_telegram_link"
                        },
                        on: {
                            click: function(t) {
                                return e.$electron.shell.openExternal("https://t.me/AtomicWalletNews")
                            }
                        }
                    }, [a("icon", {
                        attrs: {
                            name: "telegram"
                        }
                    })], 1), a("a", {
                        attrs: {
                            "data-test-id": "support_reddit_link"
                        },
                        on: {
                            click: function(t) {
                                return e.$electron.shell.openExternal("https://www.reddit.com/r/atomicwallet/")
                            }
                        }
                    }, [a("icon", {
                        attrs: {
                            name: "reddit"
                        }
                    })], 1), a("a", {
                        attrs: {
                            "data-test-id": "support_twitter_link"
                        },
                        on: {
                            click: function(t) {
                                return e.$electron.shell.openExternal("https://twitter.com/atomicwallet")
                            }
                        }
                    }, [a("icon", {
                        attrs: {
                            name: "twitter"
                        }
                    })], 1), a("a", {
                        attrs: {
                            "data-test-id": "support_facebook_link"
                        },
                        on: {
                            click: function(t) {
                                return e.$electron.shell.openExternal("https://www.facebook.com/atomicwallet")
                            }
                        }
                    }, [a("icon", {
                        attrs: {
                            name: "facebook"
                        }
                    })], 1)]), e._v(" "), a("p", {
                        staticClass: "support__text cursor",
                        on: {
                            click: e.copyID
                        }
                    }, [e._v("\n      Anonymous Atomic ID\n    ")]), e._v(" "), a("div", {
                        staticClass: "copy-wrap"
                    }, [a("a", {
                        attrs: {
                            "data-test-id": "support_atomic_id"
                        },
                        on: {
                            click: e.copyID
                        }
                    }, [e._v("\n        " + e._s(e.truncateHashId) + "\n      ")]), e._v(" "), a("div", {
                        staticClass: "icon-copy",
                        on: {
                            click: e.copyID
                        }
                    })]), e._v(" "), a("div", {
                        staticClass: "relative"
                    }, [a("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e.copied ? a("div", {
                        staticClass: "message"
                    }, [e._v("\n          Atomic ID copied to clipboard\n        ")]) : e._e()])], 1), e._v(" "), a("div", {
                        staticClass: "enable-logs"
                    }, [a("label", {
                        staticClass: "checkbox",
                        attrs: {
                            "data-test-id": "support_enable_logs"
                        }
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.enableMonitoring,
                            expression: "enableMonitoring"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.enableMonitoring) ? e._i(e.enableMonitoring, null) > -1 : e.enableMonitoring
                        },
                        on: {
                            change: function(t) {
                                var i = e.enableMonitoring,
                                    a = t.target,
                                    s = !!a.checked;
                                if (Array.isArray(i)) {
                                    var n = e._i(i, null);
                                    a.checked ? n < 0 && (e.enableMonitoring = i.concat([null])) : n > -1 && (e.enableMonitoring = i.slice(0, n).concat(i.slice(n + 1)))
                                } else e.enableMonitoring = s
                            }
                        }
                    }), a("span", [e._v("\n          Enable log collection\n        ")]), e._v(" "), e._m(3)])])])])
                },
                s = [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("span", [this._v("\n          Knowledge"), t("br"), this._v("Base\n        ")])
                }, function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("span", [this._v("\n          Contact"), t("br"), this._v("Support\n        ")])
                }, function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("span", [this._v("\n          Video"), t("br"), this._v("Tutorials\n        ")])
                }, function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "state tooltip-hover"
                    }, [t("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "static/img/icon-faq.png"
                        }
                    }), this._v(" "), t("div", {
                        staticClass: "tooltip"
                    }, [this._v("\n            Atomic Wallet will automatically collect error details to improve your experience."), t("br"), this._v("We respect your\n            privacy, so this data is fully anonymous and will help our support"), t("br"), this._v("\n            team resolve any issues you may encounter."), t("br"), this._v("\n            If you still prefer not to share your data, disable this option.\n          ")])])
                }]
        },
        1346: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "staking scroll-list2",
                        attrs: {
                            "data-test-id": "coin_staking_info"
                        }
                    }, [e.activeStaking ? i("StakingPopupTabs", {
                        attrs: {
                            staking: e.activeStaking
                        },
                        on: {
                            closePopup: e.closeExchangePopup
                        }
                    }) : e.isEmptyScreen ? i("StakingEmpty", {
                        attrs: {
                            items: e.tableItems
                        },
                        on: {
                            openStakingPopup: e.openExchangePopup
                        }
                    }) : [i("Search", {
                        staticClass: "table-search-fix",
                        model: {
                            value: e.searchInput,
                            callback: function(t) {
                                e.searchInput = t
                            },
                            expression: "searchInput"
                        }
                    }), e._v(" "), i("Table", {
                        attrs: {
                            activeSortField: e.activeSortField,
                            header: e.header,
                            isEmpty: !1,
                            isSortASC: e.isSortASC,
                            isSortable: !0,
                            items: e.tableItems
                        },
                        on: {
                            sortByField: e.sortByField
                        }
                    }, [!e.tableItems.length && e.searchInput ? i("div", {
                        staticClass: "no-result",
                        attrs: {
                            slot: "empty"
                        },
                        slot: "empty"
                    }, [i("div", [i("icon", {
                        staticClass: "icon-search",
                        attrs: {
                            name: "search",
                            width: "24",
                            height: "24"
                        }
                    })], 1), e._v(" "), i("h3", {
                        staticClass: "new-text-large"
                    }, [e._v("\n          No items found\n        ")]), e._v(" "), i("p", {
                        staticClass: "new-text-medium2 new-text-gray"
                    }, [e._v("\n          Try with a different search keyword.\n        ")])]) : e._e(), e._v(" "), e._l(e.tableItems, (function(t, a) {
                        return i("div", {
                            key: t.ticker + "-" + a,
                            staticClass: "table-row with-hover flex-wrap center",
                            attrs: {
                                slot: "table-rows"
                            },
                            on: {
                                click: function(i) {
                                    return e.handleClick(t)
                                }
                            },
                            slot: "table-rows"
                        }, [i("div", {
                            staticClass: "item"
                        }, [i("div", {
                            staticClass: "flex-wrap center"
                        }, [i("CoinIcon", {
                            attrs: {
                                wallet: t.walletInstance
                            }
                        }), e._v(" "), i("div", {
                            staticClass: "m-l-10 info"
                        }, [i("div", [i("AtomicNotifyPoint", {
                            attrs: {
                                UID: "staking-table-ticker-" + t.ticker
                            }
                        }, [i("p", {
                            staticClass: "new-title-medium"
                        }, [e._v("\n                    " + e._s(t.name) + "\n                  ")]), e._v(" "), e._l(t.tags, (function(t) {
                            return i("div", {
                                key: t,
                                staticClass: "tag tag--staking"
                            }, [i("div", {
                                class: "--" + t + " new-text-medium2"
                            }, [e._v("\n                      " + e._s(t) + "\n                    ")])])
                        }))], 2)], 1), e._v(" "), i("div", {
                            staticClass: "new-text-gray2 new-text-small"
                        }, [e._v("\n                " + e._s(t.displayTicker) + "\n              ")])])], 1)]), e._v(" "), i("div", {
                            staticClass: "item new-text-medium2"
                        }, [i("span", {
                            staticClass: "new-text-medium2",
                            domProps: {
                                innerHTML: e._s("" + e.fiatCharacter)
                            }
                        }), e._v(e._s(e._f("formatFiatV2")(t.fiatBalance, e.fiatRate)) + "\n        ")]), e._v(" "), i("div", {
                            staticClass: "item new-text-medium2"
                        }, [i("span", {
                            staticClass: "new-text-medium2",
                            domProps: {
                                innerHTML: e._s("" + e.fiatCharacter)
                            }
                        }), e._v(e._s(e._f("formatFiatV2")(t.fiatStaked, e.fiatRate)) + "\n        ")]), e._v(" "), i("div", {
                            staticClass: "item new-text-medium2"
                        }, [e._v("\n          " + e._s(t.reward ? t.reward + "%" : "") + "\n        ")])])
                    }))], 2)]], 2)
                },
                s = []
        },
        1347: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("main", {
                        staticClass: "settings"
                    }, [i("div", {
                        staticClass: "header-tabs"
                    }, e._l(e.tabs, (function(t) {
                        return i("router-link", {
                            key: t.name,
                            staticClass: "choice",
                            attrs: {
                                to: {
                                    name: t.name
                                },
                                exactActiveClass: "active",
                                tag: "div"
                            },
                            nativeOn: {
                                click: function(t) {
                                    return e.clickHandler.apply(null, arguments)
                                }
                            }
                        }, [i("AtomicNotifyPoint", {
                            attrs: {
                                UID: "settings-header-tabs-" + t.name
                            }
                        }, [i("span", [e._v("\n          " + e._s(t.title) + "\n        ")])])], 1)
                    })), 1), e._v(" "), i("div", {
                        staticClass: "content"
                    }, [i("router-view")], 1)])
                },
                s = []
        },
        1349: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("main", {
                        staticClass: "portfolio"
                    }, [e.chartData ? e.sortedTableItems.length ? i("div", {
                        staticClass: "wallet-table scroll-list2"
                    }, [i("DonutChart", {
                        attrs: {
                            data: e.chartData
                        }
                    }), e._v(" "), i("Table", {
                        attrs: {
                            activeSortField: e.activeSortField,
                            excludedFields: e.excludedFields,
                            header: e.header,
                            isEmpty: !1,
                            isSortASC: e.isSortASC,
                            isSortable: !0,
                            items: e.sortedTableItems,
                            spaceBetween: !0
                        },
                        on: {
                            sortByField: e.sortByField
                        }
                    }, e._l(e.sortedTableItems, (function(t, a) {
                        return i("Coin", {
                            key: a + "-coin-" + t.ticker,
                            ref: t.ticker + "-" + t.deprecatedParent,
                            refInFor: !0,
                            attrs: {
                                slot: "table-rows",
                                coin: t,
                                isPortfolio: !0,
                                "data-test-id": "portfolio_coin"
                            },
                            on: {
                                toggleCoinInfoPopup: e.toggleCoinInfoPopup,
                                changeCoin: e.changeActiveCoin
                            },
                            slot: "table-rows"
                        })
                    })), 1)], 1) : i("BuyBitcoin", {
                        attrs: {
                            name: "portfolio"
                        }
                    }) : i("div", {
                        staticClass: "loading portfolio__loading"
                    }), e._v(" "), i("transition", {
                        attrs: {
                            mode: "out-in",
                            name: "page-fade"
                        }
                    }, [e.showCoinInfoPopup && !e.showSendCoinPopup ? i("CoinInfo", {
                        key: "coinInfo",
                        attrs: {
                            coin: e.activeCoin
                        },
                        on: {
                            closePopup: e.closeCoinInfoPopup,
                            editToken: e.editToken,
                            changeCoin: e.changeActiveCoin,
                            toggleReceiveCoin: e.toggleReceiveCoinPopup,
                            toggleSendCoin: e.toggleSendCoinPopup
                        }
                    }) : e._e()], 1), e._v(" "), i("transition", {
                        attrs: {
                            mode: "out-in",
                            name: "page-fade"
                        }
                    }, [e.showSendCoinPopup ? i("SendCoin", {
                        key: "sendCoin",
                        attrs: {
                            coin: e.activeCoin
                        },
                        on: {
                            changeCoin: e.changeActiveCoin,
                            closePopup: e.closeSendCoinPopup
                        }
                    }) : e._e()], 1), e._v(" "), i("transition", {
                        attrs: {
                            mode: "out-in",
                            name: "page-fade"
                        }
                    }, [e.showReceiveCoinPopup ? i("ReceiveCoin", {
                        key: "receiveCoin",
                        attrs: {
                            coin: e.activeCoin
                        },
                        on: {
                            changeCoin: e.changeActiveCoin,
                            closePopup: e.closeReceiveCoinPopup
                        }
                    }) : e._e()], 1)], 1)
                },
                s = []
        },
        1350: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "invite-friends__landing"
                    }, [t("div", {
                        staticClass: "invite-friends__landing__body"
                    }, [this._m(0), this._v(" "), t("section", {
                        staticClass: "invite-friends__landing__body__content"
                    }, [t("AtomicLinkedCard", {
                        attrs: {
                            linkedCardData: this.cardsOptions
                        }
                    })], 1)]), this._v(" "), t("div", {
                        staticClass: "invite-friends__landing__control"
                    }, [t("button", {
                        staticClass: "new-button new-button-large new-button-yellow new-button-max300 new-button-bold",
                        on: {
                            click: this.makeEarning
                        }
                    }, [this._v("\n      Start earning\n    ")])])])
                },
                s = [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("section", {
                        staticClass: "invite-friends__landing__body__header"
                    }, [t("img", {
                        attrs: {
                            src: i(2249),
                            height: "66",
                            width: "283",
                            alt: "Invite friends"
                        }
                    }), this._v(" "), t("img", {
                        attrs: {
                            src: i(2250),
                            height: "66",
                            width: "440",
                            alt: "Earn crypto together"
                        }
                    })])
                }]
        },
        1353: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "invite-friends__dashboard-tab"
                    }, [i("div", {
                        staticClass: "invite-friends__dashboard-tab__stats"
                    }, [e._m(0), e._v(" "), i("div", {
                        staticClass: "invite-friends__dashboard-tab__stats__body"
                    }, e._l(e.infoGroup, (function(t) {
                        return i("AtomicInfoGroup", e._b({
                            key: t.label
                        }, "AtomicInfoGroup", t, !1))
                    })), 1)]), e._v(" "), i("div", {
                        staticClass: "invite-friends__dashboard-tab__code"
                    }, [e._m(1), e._v(" "), i("div", {
                        staticClass: "invite-friends__dashboard-tab__code__body"
                    }, [i("h3", [e._v("\n        Promo code\n      ")]), e._v(" "), i("div", {
                        staticClass: "invite-friends__dashboard-tab__code__body__content"
                    }, [i("div", {
                        staticClass: "block__copy-wrap"
                    }, [i("ClipboardWrap", {
                        attrs: {
                            textToClipboard: e.promoCode,
                            clipboardMessage: "Promo code copied to clipboard"
                        }
                    }, [i("div", {
                        ref: "clipboard_value",
                        staticClass: "block__copy"
                    }, [e._v("\n              " + e._s(e.promoCode) + "\n            ")])]), e._v(" "), i("div", {
                        staticClass: "block__copy-buttons"
                    }, [i("AtomicButton", {
                        on: {
                            click: e.copyLink
                        }
                    }, [e._v("\n              Copy link\n            ")]), e._v(" "), i("AtomicButton", {
                        attrs: {
                            type: "fucking_gray_button_which_is_using_in_one_place"
                        },
                        on: {
                            click: e.openModal
                        }
                    }, [e._v("\n              Share\n            ")]), e._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e.copied ? i("div", {
                        staticClass: "message message-2"
                    }, [e._v("\n                Link copied to clipboard\n              ")]) : e._e()])], 1)], 1)])])]), e._v(" "), i("div", {
                        staticClass: "invite-friends__dashboard-tab__how-it-works"
                    }, [i("AtomicLink", {
                        attrs: {
                            type: "secondary"
                        },
                        on: {
                            click: e.openLinkHowWorks
                        }
                    }, [e._v("\n      How it works?\n    ")])], 1), e._v(" "), e.socialLinksModal ? i("AtomicModal", {
                        attrs: {
                            title: "Share link"
                        },
                        on: {
                            close: e.closeModal
                        }
                    }, [i("div", {
                        staticClass: "social-links"
                    }, [i("div", {
                        staticClass: "title"
                    }, [e._v("\n        Share link with your friends in one click\n      ")]), e._v(" "), i("div", {
                        staticClass: "links"
                    }, e._l(e.socialNetworks, (function(t) {
                        return i("img", {
                            key: t.network,
                            attrs: {
                                src: e.getIcon(t.icon)
                            },
                            on: {
                                click: function(i) {
                                    return e.openShare(t.network)
                                }
                            }
                        })
                    })), 0)])]) : e._e()], 1)
                },
                s = [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "invite-friends__dashboard-tab__stats__header"
                    }, [t("h2", [this._v("\n        Your stats\n      ")])])
                }, function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "invite-friends__dashboard-tab__code__header"
                    }, [t("h2", [this._v("\n        Invite friends to install Atomic\n      ")])])
                }]
        },
        1354: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "invite-friends__dashboard__bonus-tab"
                    }, [i("h2", {
                        staticClass: "explain"
                    }, [e._v("\n    Make exchanges to receive AWC. When your exchange volume reaches " + e._s(e._f("toCurrency")(e.exchangeBonus.stages[0].volume)) + ", " + e._s(e._f("toCurrency")(e.exchangeBonus.stages[1].volume)) + ", and " + e._s(e._f("toCurrency")(e.exchangeBonus.stages[2].volume)) + " you will receive AWC\n    rewards.\n  ")]), e._v(" "), i("div", {
                        staticClass: "progress-bar"
                    }, [i("AtomicRewardsBar", {
                        attrs: {
                            scaleLimits: e.getScaleLimits,
                            steps: e.getSteps,
                            value: e.getCurrentRewardValuePercent,
                            absValue: e.valueNum
                        }
                    })], 1), e._v(" "), i("div", {
                        staticClass: "go-to-exchange"
                    }, [i("span", [e._v("\n      " + e._s(e._f("toCurrency")(e.exchangeBonus.untilNextReward)) + " of exchange volume left to the next reward\n    ")]), e._v(" "), i("button", {
                        staticClass: "new-button new-button-yellow new-button-medium new-button-bold",
                        on: {
                            click: e.goToExchange
                        }
                    }, [e._v("\n      Exchange now\n    ")])])])
                },
                s = []
        },
        1355: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "invite-friends__dashboard"
                    }, [e._m(0), e._v(" "), e.isReferral ? i("div", {
                        staticClass: "invite-friends__dashboard__tabs"
                    }, [i("AtomicTabs", {
                        attrs: {
                            tabs: ["INVITE FRIENDS", "MY EXCHANGE BONUS"],
                            align: "left"
                        },
                        model: {
                            value: e.activeTabIndex,
                            callback: function(t) {
                                e.activeTabIndex = t
                            },
                            expression: "activeTabIndex"
                        }
                    })], 1) : e._e(), e._v(" "), 0 === e.activeTabIndex ? i("DashboardTab") : e._e(), e._v(" "), 1 === e.activeTabIndex ? i("BonusTab") : e._e()], 1)
                },
                s = [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "invite-friends__dashboard__header"
                    }, [t("h1", [this._v("\n      Invite Friends and Earn Rewards Together\n    ")])])
                }]
        },
        1356: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "invite-friends"
                    }, [this.isLoading ? t("div", {
                        staticClass: "flex align-center justify-center"
                    }, [t("AtomicLoader")], 1) : [this.isLanding ? t("InviteLanding") : t("InviteDashboard")]], 2)
                },
                s = []
        },
        1357: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "login"
                    }, [a("transition", {
                        attrs: {
                            mode: "out-in",
                            name: "fade"
                        }
                    }, [a("div", [a("img", {
                        staticClass: "logo",
                        attrs: {
                            src: i(1168)
                        }
                    }), e._v(" "), a("router-view", {
                        key: e.$route.fullPath,
                        attrs: {
                            mnemonic: e.mnemonic
                        },
                        on: {
                            "show-mnemonic-warning": e.showMnemonicWarning
                        }
                    })], 1)]), e._v(" "), "/entry" === e.$route.path ? a("div", [a("button", {
                        staticClass: "button",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.$router.push("/entry/create")
                            }
                        }
                    }, [e._v("\n      New wallet\n    ")]), e._v(" "), a("button", {
                        staticClass: "button link",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.$router.push("/entry/restore")
                            }
                        }
                    }, [e._v("\n      Restore from backup\n    ")])]) : e._e(), e._v(" "), a("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, [e.showWarning ? a("div", {
                        staticClass: "modal",
                        on: {
                            click: function(t) {
                                return t.target !== t.currentTarget ? null : e.closeWarningPopup.apply(null, arguments)
                            }
                        }
                    }, [a("div", {
                        staticClass: "content"
                    }, [a("h2", [e._v("\n          Warning! You already have a wallet.\n        ")]), e._v(" "), a("p", [e._v("\n          Make sure that you have a backup of your 12 words seed phrase.\n        ")]), e._v(" "), a("p", [e._v("\n          Creating the new wallet will erase all your previous local data.\n        ")]), e._v(" "), a("div", {
                        staticClass: "buttons"
                    }, [a("button", {
                        staticClass: "button danger",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.continueWarningPopup.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n            Continue\n          ")]), e._v(" "), a("button", {
                        staticClass: "button success",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.closeWarningPopup.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n            Cancel\n          ")])])])]) : e._e()])], 1)
                },
                s = []
        },
        1358: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.loading,
                            expression: "!loading"
                        }],
                        staticClass: "wrap small"
                    }, [i("Edit", {
                        attrs: {
                            error: e.passwordError,
                            focus: !0,
                            isShowPassword: !0,
                            placeholder: "Password",
                            type: "password"
                        },
                        on: {
                            "enter-pressed": e.login
                        },
                        model: {
                            value: e.password,
                            callback: function(t) {
                                e.password = t
                            },
                            expression: "password"
                        }
                    }), e._v(" "), i("button", {
                        staticClass: "button",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.login.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n      Open wallet\n    ")]), e._v(" "), i("button", {
                        staticClass: "button link",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.goToRestore.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n      Restore from backup\n    ")]), e._v(" "), i("button", {
                        staticClass: "button link",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.createNewWallet.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n      Create wallet\n    ")])], 1), e._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.loading,
                            expression: "loading"
                        }],
                        staticClass: "loading-wrap"
                    }, [i("div", {
                        staticClass: "loading"
                    })])])
                },
                s = []
        },
        1359: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.loading,
                            expression: "!loading"
                        }]
                    }, [i("Edit", {
                        ref: "passwordRef",
                        attrs: {
                            error: e.passwordError,
                            focus: !0,
                            isShowPassword: !0,
                            placeholder: "Password",
                            type: "password"
                        },
                        on: {
                            "enter-pressed": e.focusNextEdit,
                            changeTypeRepeatPassword: e.changeTypeRepeatPassword
                        },
                        model: {
                            value: e.password,
                            callback: function(t) {
                                e.password = t
                            },
                            expression: "password"
                        }
                    }), e._v(" "), i("Edit", {
                        ref: "repeatPasswordRef",
                        attrs: {
                            error: e.passwordConfirmError,
                            type: e.repeatPasswordType,
                            placeholder: "Repeat Password",
                            name: "age"
                        },
                        on: {
                            "enter-pressed": e.setPassword
                        },
                        model: {
                            value: e.passwordConfirm,
                            callback: function(t) {
                                e.passwordConfirm = t
                            },
                            expression: "passwordConfirm"
                        }
                    }), e._v(" "), i("button", {
                        staticClass: "button",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.setPassword.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n      Set password\n    ")]), e._v(" "), i("button", {
                        staticClass: "button link",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.$emit("goBack")
                            }
                        }
                    }, [e._v("\n      Back\n    ")])], 1), e._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showLoaderSpinner,
                            expression: "showLoaderSpinner"
                        }],
                        staticClass: "loading-wrap"
                    }, [i("div", {
                        staticClass: "loading"
                    })])])
                },
                s = []
        },
        1360: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "wrap",
                        class: {
                            small: "setpass" === e.step,
                            big: "newseed" === e.step
                        }
                    }, ["setpass" === e.step ? i("SetPassword", {
                        attrs: {
                            isCreateWallet: ""
                        },
                        on: {
                            goBack: e.goBack,
                            goNext: e.goNext
                        }
                    }) : e._e(), e._v(" "), "newseed" === e.step ? i("div", {
                        staticClass: "newseed"
                    }, [i("div", {
                        staticClass: "title"
                    }, [e._v("\n      Please write down a 12-word Backup Phrase and keep the copy in a secure place\n    ")]), e._v(" "), i("p", [e._v("\n      " + e._s(e.Texts.TextDesktop.onboarding(e.Texts.TextDesktop.onboardingKeys.subtitle)) + "\n    ")]), e._v(" "), i("p", {
                        staticClass: "seed",
                        on: {
                            click: e.copySeed
                        }
                    }, [e._v("\n      " + e._s(e.seed) + "\n    ")]), e._v(" "), i("button", {
                        staticClass: "button link",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.copySeed.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n      " + e._s(e.copied ? "Copied" : "Copy to clipboard") + "\n    ")]), e._v(" "), i("button", {
                        staticClass: "button",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.openWallet.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n      Open wallet\n    ")]), e._v(" "), i("label", {
                        staticClass: "checkbox"
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.enableMonitoring,
                            expression: "enableMonitoring"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.enableMonitoring) ? e._i(e.enableMonitoring, null) > -1 : e.enableMonitoring
                        },
                        on: {
                            change: function(t) {
                                var i = e.enableMonitoring,
                                    a = t.target,
                                    s = !!a.checked;
                                if (Array.isArray(i)) {
                                    var n = e._i(i, null);
                                    a.checked ? n < 0 && (e.enableMonitoring = i.concat([null])) : n > -1 && (e.enableMonitoring = i.slice(0, n).concat(i.slice(n + 1)))
                                } else e.enableMonitoring = s
                            }
                        }
                    }), i("span", [e._v("\n        Enable log collection\n      ")]), e._v(" "), e._m(0)])]) : e._e()], 1)
                },
                s = [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "state tooltip-hover"
                    }, [t("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "static/img/icon-faq.png"
                        }
                    }), this._v(" "), t("div", {
                        staticClass: "tooltip"
                    }, [this._v("\n          Let Atomic automatically collect anonymous errors data to improve your experience. "), t("br"), this._v("This feature will\n          highly increase support quality and will help us to resolve your issues quicker. "), t("br"), this._v("\n          Atomic collects description of the error and coin name. This information is absolutely anonymous. "), t("br"), this._v("\n          If you don't like to send your errors, you can avoid this option.\n        ")])])
                }]
        },
        1361: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "wrap",
                        class: {
                            small: "setpass" === e.step
                        }
                    }, [i("transition", {
                        attrs: {
                            mode: "out-in",
                            name: "slide-left"
                        }
                    }, ["restore" === e.step ? i("div", [i("Edit", {
                        attrs: {
                            error: e.mnemonicError,
                            focus: !0,
                            isPasteFromClipboard: !0,
                            placeholder: "Your 12-word backup phrase",
                            type: "text"
                        },
                        on: {
                            "enter-pressed": e.restoreByWords
                        },
                        model: {
                            value: e.restoreseed,
                            callback: function(t) {
                                e.restoreseed = t
                            },
                            expression: "restoreseed"
                        }
                    }), e._v(" "), i("button", {
                        staticClass: "margin-top-big button",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.restoreByWords.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n        Restore wallet\n      ")]), e._v(" "), i("button", {
                        staticClass: "button link",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.goBack.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n        Back\n      ")])], 1) : e._e(), e._v(" "), "setpass" === e.step ? i("SetPassword", {
                        attrs: {
                            mnemonic: e.restoreseed
                        },
                        on: {
                            goBack: e.goToRestore
                        }
                    }) : e._e()], 1)], 1)
                },
                s = []
        },
        1363: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("main", [i("div", {
                        staticClass: "header-tabs"
                    }, e._l(e.tabs, (function(t, a) {
                        return i("router-link", {
                            key: a,
                            staticClass: "choice",
                            class: {
                                active: e.isActive(t.path)
                            },
                            attrs: {
                                tag: "div",
                                exactActiveClass: "active",
                                to: t.path
                            }
                        }, [i("span", [e._v("\n        " + e._s(t.title) + "\n      ")])])
                    })), 1), e._v(" "), i("router-view", {
                        on: {
                            openOrderDetails: e.openOrderDetails,
                            openExchangeDetails: e.openExchangeDetails,
                            startExchange: e.startExchange,
                            updatingStatus: e.updatingStatus
                        }
                    }), e._v(" "), i("transition", {
                        attrs: {
                            name: "fade-down"
                        }
                    }, [e.isExchangeDetails ? i("NewExchangeResult", {
                        attrs: {
                            coinToSend: e.coinToSend,
                            coinToReceive: e.coinToReceive,
                            amountToSend: e.amountToSend,
                            amountToReceive: e.amountToReceive,
                            orderId: e.exchangeResult.txid,
                            cashback: e.cashback,
                            type: "orderDetails",
                            transactionStatus: e.transactionStatus,
                            sentHash: e.sentHash,
                            receivedHash: e.receivedHash,
                            timestamp: e.transactionTimestamp,
                            isRefunded: e.isRefunded,
                            initTransactionData: e.initTransactionData
                        },
                        on: {
                            "continue-exchange": e.continueExchange,
                            "refund-exchange": e.refundExchange,
                            "close-popup": e.closePopups
                        }
                    }) : e._e()], 1)], 1)
                },
                s = []
        },
        1369: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "inner-exchange-basic"
                    }, [i("div", {
                        staticClass: "exchange-block"
                    }, [i("div", {
                        staticClass: "block-wrapper",
                        class: [{
                            disabled: e.loading
                        }],
                        attrs: {
                            "data-test-id": "exch_buycrypto"
                        }
                    }, [i("ExchangeCoin", {
                        attrs: {
                            amount: "0" === e.amountToSend ? "" : e.amountToSend,
                            availableBalance: e.availableBalance || "0",
                            coin: e.coinToSend,
                            currencies: e.filteredCurrenciesExchange,
                            icon: e.$iconClass(e.coinToSend),
                            isAvailableBalance: !0,
                            selectedCoin: e.selectedCoinToSend,
                            "data-test-id": "exchange_coin_send"
                        },
                        on: {
                            selectCoin: function(t) {
                                return e.selectCoin(t, !0)
                            },
                            setAmountToSend: e.setAmountToSend
                        }
                    })], 1), e._v(" "), i("ChangeIcon", {
                        on: {
                            clickAction: e.changeCoins
                        }
                    }), e._v(" "), i("div", {
                        staticClass: "block-wrapper",
                        class: [{
                            disabled: e.loading
                        }]
                    }, [i("ExchangeCoin", {
                        attrs: {
                            amount: e.coinToReceive === e.coinToSend ? " " : e.amountToReceive,
                            coin: e.coinToReceive,
                            currencies: e.filteredCurrenciesExchange,
                            icon: e.$iconClass(e.coinToReceive),
                            isSortByMarketCap: !0,
                            readonly: !0,
                            selectedCoin: e.selectedCoinToSend,
                            "data-test-id": "exchange_coin_receive"
                        },
                        on: {
                            selectCoin: e.selectCoin
                        }
                    }), e._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [Number(e.estimatedCashback) > 0 ? i("CashbackInfo", {
                        attrs: {
                            estimatedCashback: e.estimatedCashback
                        }
                    }) : e._e()], 1)], 1)], 1), e._v(" "), i("div", {
                        staticClass: "error-wrapper"
                    }, [i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e.isHBARActivate ? i("div", {
                        staticClass: "hbar-activate"
                    }, [i("ErrorPlain", {
                        attrs: {
                            message: "You need to activate your HBAR wallet to proceed"
                        }
                    }), e._v(" "), i("button", {
                        staticClass: "button button-buy",
                        on: {
                            click: function(t) {
                                return e.$router.push("/main/HBAR")
                            }
                        }
                    }, [e._v("\n          Activate\n        ")])], 1) : e.valid.message ? i("div", {
                        staticClass: "flex justify-center"
                    }, [i("ErrorPlain", {
                        attrs: {
                            message: e.valid.message
                        }
                    }), e._v(" "), e.isBuyCoin && !e.inactivePairError ? i("button", {
                        staticClass: "button button-buy",
                        attrs: {
                            "data-test-id": "exch_buy"
                        },
                        on: {
                            click: e.buyCoin
                        }
                    }, [e._v("\n          Buy\n          " + e._s(e.isMinMaxError ? e.coinToSend.ticker : e.coinToSend.feeTicker) + "\n        ")]) : e._e()], 1) : e._e()])], 1), e._v(" "), e.valid.message && e.feeToClaim ? i("button", {
                        staticClass: "button claim",
                        attrs: {
                            "data-test-id": "exch_support"
                        },
                        on: {
                            click: e.talkWithSupport
                        }
                    }, [e._v("\n    " + e._s(e.claimButtonText) + "\n  ")]) : e._e(), e._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [e.loading ? i("div", {
                        staticClass: "loading"
                    }) : i("button", {
                        staticClass: "button shadow",
                        class: [{
                            active: e.isActiveExchangeButton && !e.isExchangeDisabled,
                            disabled: e.isExchangeDisabled
                        }],
                        attrs: {
                            "data-test-id": "exch_submit_button"
                        },
                        on: {
                            click: e.exchangeCoins
                        }
                    }, [e._v("\n      Exchange\n    ")])]), e._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.exchangeRate,
                            expression: "exchangeRate"
                        }],
                        staticClass: "exchange-rate",
                        attrs: {
                            "data-test-id": "exch_rate"
                        }
                    }, [i("span", [e._v("\n        Exchange rate\n      ")]), e._v(" "), i("div", {
                        staticClass: "rate"
                    }, [e._v("\n        1 " + e._s(e.coinToSend.ticker) + " ~ " + e._s(e._f("formatFinance")(e.exchangeRate)) + " " + e._s(e.coinToReceive.ticker) + "\n      ")])])]), e._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e.feeParams.fee ? i("div", {
                        staticClass: "exchange-rate",
                        attrs: {
                            "data-test-id": "exch_fee"
                        }
                    }, [i("span", [e._v("\n        Network fee\n      ")]), e._v(" "), i("div", {
                        staticClass: "rate"
                    }, [e._v("\n        " + e._s(e.feeWallet.toCurrencyUnit(e.feeParams.fee)) + " " + e._s("VET" === e.feeWallet.ticker ? "VTHO" : e.feeWallet.ticker) + "\n      ")]), e._v(" "), i("span", [e._v("\n        $ " + e._s(e._f("formatFiat")(e.$rates.convertToUSD(e.feeWallet.toCurrencyUnit(e.feeParams.fee), e.feeWallet, "USD"))) + "\n      ")])]) : e._e()]), e._v(" "), e.isMember ? e._e() : i("CashbackPromotion"), e._v(" "), i("transition", {
                        attrs: {
                            name: "fade-down"
                        }
                    }, [e.isError ? i("div", {
                        staticClass: "send-coin popup",
                        attrs: {
                            "data-test-id": "exch_coin_popup"
                        }
                    }, [i("SendCoinResult", {
                        attrs: {
                            amount: e.amountToSend,
                            coin: e.coinToSend,
                            icon: e.$iconClass(e.coinToSend),
                            isError: e.isError,
                            mailText: e.coinToSend.ticker + " > " + e.coinToReceive.ticker + "%0A",
                            sendType: "Exchange",
                            mailTitle: "Exchange error",
                            contactData: {
                                issue: "Exchange",
                                tags: ["exchange_tag"]
                            }
                        },
                        on: {
                            tryAgain: e.tryAgain
                        }
                    })], 1) : e._e()])], 1)
                },
                s = []
        },
        1371: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "exchange-history order-details scroll-list2",
                        on: {
                            scroll: e.handleScrollEnd
                        }
                    }, [e.isLoader ? i("div", {
                        staticClass: "loader"
                    }) : i("Table", {
                        attrs: {
                            header: e.header,
                            isEmpty: 0 === e.exchangeTransactions.length,
                            items: e.exchangeTransactions
                        }
                    }, [e.exchangeTransactions.length ? e._e() : i("div", {
                        attrs: {
                            slot: "empty"
                        },
                        slot: "empty"
                    }, [i("div", {
                        staticClass: "empty"
                    }, [e._v("\n        Your exchanges will appear here\n      ")]), e._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.exchangeTransactionsLoading,
                            expression: "exchangeTransactionsLoading"
                        }],
                        staticClass: "adapted-loader loading-wrap"
                    }, [i("div", {
                        staticClass: "loading"
                    })])]), e._v(" "), i("div", {
                        attrs: {
                            slot: "table-rows"
                        },
                        slot: "table-rows"
                    }, e._l(e.transactions, (function(t, a) {
                        return i("ExchangeHistoryItem", {
                            key: a,
                            attrs: {
                                id: t.id,
                                date: e._f("moment")(t.timestamp, "DD/MM/YYYY HH:mm"),
                                getAmount: e._f("fixedAmount")(t.amountToReceive),
                                getWallet: e.getWallet(e.getWalletData(t.toCurrency)),
                                isOrderDetails: !0,
                                isTooltip: !0,
                                sentAmount: e._f("fixedAmount")(t.amountToSend),
                                sentWallet: e.getWallet(e.getWalletData(t.fromCurrency)),
                                status: t.status
                            },
                            on: {
                                openRow: function(i) {
                                    return e.$emit("openOrderDetails", t)
                                }
                            }
                        })
                    })), 1)])], 1)
                },
                s = []
        },
        1373: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("main", [i("div", {
                        staticClass: "header-tabs"
                    }, e._l(e.tabs, (function(t, a) {
                        return i("router-link", {
                            key: a,
                            staticClass: "choice",
                            class: {
                                active: e.isActive(t.path)
                            },
                            attrs: {
                                to: t.path,
                                exactActiveClass: "active",
                                tag: "div"
                            }
                        }, [i("span", [e._v("\n        " + e._s(t.title) + "\n      ")])])
                    })), 1), e._v(" "), i("router-view", {
                        on: {
                            openOrderDetails: e.toggleOrderDetails,
                            submitPayment: function(t) {
                                e.session = e.event
                            }
                        }
                    }), e._v(" "), i("transition", {
                        attrs: {
                            name: "fade-down"
                        }
                    }, [e.activeSimplexTransaction && e.isOpenOrderDetails ? i("NewSimplexResult", {
                        attrs: {
                            walletReceive: e.getWallet(e.getWalletData(e.activeSimplexTransaction.toCurrency)),
                            tickerSend: e.activeSimplexTransaction.fromCurrency,
                            amountSend: e.activeSimplexTransaction.amountToSend,
                            amountReceive: e.activeSimplexTransaction.amountToReceive,
                            amountCashback: e.activeSimplexTransaction.expectedCashbackAmount,
                            status: e.checkSimplexStatus(e.activeSimplexTransaction.status),
                            date: e._f("moment")(e.activeSimplexTransaction.timestamp, "DD.MM.YYYY, HH:mm"),
                            transactionID: e.activeSimplexTransaction.id
                        },
                        on: {
                            closePopup: function(t) {
                                return e.toggleOrderDetails(null)
                            }
                        }
                    }) : e._e()], 1)], 1)
                },
                s = []
        },
        1375: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "inner-exchange"
                    }, [i("webview", {
                        ref: "userAgent",
                        attrs: {
                            src: e.preload
                        }
                    }), e._v(" "), i("div", {
                        staticClass: "exchange-block"
                    }, [i("div", {
                        staticClass: "block-wrapper"
                    }, [i("div", {
                        staticClass: "coin-block"
                    }, [i("div", {
                        staticClass: "flex justify-center center"
                    }, [i("div", {
                        staticClass: "coin-icon",
                        on: {
                            click: e.toggleFiatDropdown
                        }
                    }, [i("AtomicFlagIcon", {
                        attrs: {
                            flagCode: e.selectedFiatToSend
                        }
                    })], 1)]), e._v(" "), i("div", {
                        staticClass: "flex-wrapper"
                    }, [i("EditAmount", {
                        attrs: {
                            error: e.amountError,
                            isExchange: !0,
                            value: e.coinToReceive,
                            type: "text"
                        },
                        on: {
                            input: e.onInput
                        },
                        model: {
                            value: e.requestedFiatAmount,
                            callback: function(t) {
                                e.requestedFiatAmount = t
                            },
                            expression: "requestedFiatAmount"
                        }
                    }), e._v(" "), i("div", {
                        staticClass: "coinname fiat"
                    }, [i("span", {
                        on: {
                            click: e.toggleFiatDropdown
                        }
                    }, [e._v("\n              " + e._s(e.selectedFiatToSend) + "\n            ")]), e._v(" "), e.isFiatDropdown ? i("FiatDropdownV2", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: e.toggleFiatDropdown,
                            expression: "toggleFiatDropdown"
                        }],
                        class: {
                            visible: e.isFiatDropdown
                        },
                        attrs: {
                            avaliableFiats: Object.values(e.$buy.settings.fiats)
                        },
                        on: {
                            selectFiatCoin: e.selectFiat
                        }
                    }) : e._e()], 1)], 1)])]), e._v(" "), i("ChangeIcon", {
                        staticClass: "no-hover"
                    }), e._v(" "), i("div", {
                        staticClass: "block-wrapper"
                    }, [i("ExchangeCoin", {
                        attrs: {
                            amount: e.requestedCoinAmount,
                            coin: e.coinToReceive,
                            currencies: e.availableCurrencies,
                            icon: e.$iconClass(e.coinToReceive),
                            readonly: !0,
                            isBuyCrypto: !0,
                            selectedCoin: e.selectedCoinToReceive
                        },
                        on: {
                            selectCoin: e.selectForReceive
                        }
                    }), e._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [Number(e.estimatedCashback) > 0 ? i("CashbackInfo", {
                        attrs: {
                            estimatedCashback: e.estimatedCashback
                        }
                    }) : e._e()], 1)], 1)], 1), e._v(" "), i("div", {
                        staticClass: "error-wrapper"
                    }, [i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e.quoteError || e.isCoinDisabled ? i("div", {
                        staticClass: "flex justify-center"
                    }, [i("span", {
                        staticClass: "text-red"
                    }, [e._v("\n          " + e._s(e.isCoinDisabled ? e.getCoinDisabilityReason() : "Pair is temporarily unavailable") + "\n        ")])]) : e._e()])], 1), e._v(" "), i("div", {
                        staticClass: "exchange-rate"
                    }, [i("p", {
                        staticClass: "fee-info"
                    }, [i("span", [e._v("\n        5% fees (min " + e._s(e.exchangeSettings && e.exchangeSettings.fee) + " " + e._s(e.selectedFiatToSend.toUpperCase()) + ") are included in the price")])]), i("br"), i("span", [e._v("\n      The average delivery time is 10 to 30 minutes\n    ")])]), e._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [i("button", {
                        staticClass: "button shadow",
                        class: {
                            accepted: !e.isCoinDisabled && e.isButtonAccepted,
                            disabled: e.quoteError || e.isCoinDisabled
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.submitSimplexForm.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n      Continue\n    ")])]), e._v(" "), i("div", {
                        staticClass: "produced-wrapper"
                    }, [i("div", {
                        staticClass: "produced"
                    }, [i("p", [e._v("\n        Powered by:\n      ")]), i("img", {
                        staticClass: "simplex",
                        attrs: {
                            src: "static/img/simplex.svg"
                        }
                    })]), e._v(" "), i("div", {
                        staticClass: "produced fiat"
                    }, [i("p", [e._v("\n        Bank cards accepted\n      ")]), e._v(" "), i("div", {
                        staticClass: "cards"
                    }, [i("img", {
                        staticClass: "visa",
                        attrs: {
                            src: "static/img/visa.svg"
                        }
                    }), i("img", {
                        staticClass: "master",
                        attrs: {
                            src: "static/img/mastercard.svg"
                        }
                    })])])]), e._v(" "), e.isMember ? e._e() : i("CashbackPromotion")], 1)
                },
                s = []
        },
        1376: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "exchange-history scroll-list2"
                    }, [e.isSimplexTransactionsLoading ? i("div", {
                        staticClass: "loader"
                    }) : i("Table", {
                        attrs: {
                            header: e.header,
                            isEmpty: 0 === e.simplexTransactions.length,
                            items: e.simplexTransactions
                        }
                    }, [e.simplexTransactions.length ? e._e() : i("div", {
                        attrs: {
                            slot: "empty"
                        },
                        slot: "empty"
                    }, [i("div", {
                        staticClass: "empty"
                    }, [e._v("\n        Your orders will appear here\n      ")])]), e._v(" "), i("div", {
                        attrs: {
                            slot: "table-rows"
                        },
                        slot: "table-rows"
                    }, e._l(e.simplexTransactions, (function(t, a) {
                        return i("ExchangeHistoryItem", {
                            key: a,
                            attrs: {
                                id: t.id,
                                isSimplex: "",
                                isOrderDetails: "",
                                date: e._f("moment")(t.timestamp, "DD/MM/YYYY HH:mm"),
                                getAmount: t.amountToReceive.toString(),
                                getTicker: t.toCurrency.toUpperCase(),
                                getWallet: e.getWallet(e.getWalletData(t.toCurrency)),
                                sentAmount: t.amountToSend.toString(),
                                sentTicker: t.fromCurrency.toUpperCase(),
                                sentWallet: e.getWallet(e.getWalletData(t.fromCurrency)),
                                status: e.checkStatus(t.status)
                            },
                            on: {
                                openRow: function(i) {
                                    return e.$emit("openOrderDetails", t)
                                }
                            }
                        })
                    })), 1)])], 1)
                },
                s = []
        },
        1377: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "webview-wrapper"
                    }, [t("webview", {
                        ref: "simplex_webview",
                        class: {
                            hidden: !this.showReady
                        },
                        attrs: {
                            id: "simplexWebview",
                            preload: this.preload,
                            src: this.sessionUrl,
                            httpreferrer: "https://backend-wallet-api.simplexcc.com/payments/new",
                            name: "simplex_payment",
                            partition: "simplex"
                        }
                    }), this._v(" "), this.showReady ? this._e() : t("div", {
                        staticClass: "loader"
                    })], 1)
                },
                s = []
        },
        1380: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "tab-wrap private-keys"
                    }, [e.innerKeyState ? e._e() : i("div", {
                        staticClass: "alert_wrap"
                    }, [i("Alert", {
                        attrs: {
                            message: "Never share your 12-word backup phrase and private keys with anyone. Never enter your info on any web wallets, online forms, or other websites claiming to be Atomic Wallet. Otherwise, you may risk losing your money.",
                            type: "Warning"
                        }
                    }, [i("a", {
                        staticClass: "text-link-underline text-word-break text-big new-text-blue m-l-10",
                        attrs: {
                            "data-test-id": "protect_link"
                        },
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.open.apply(null, arguments)
                            }
                        }
                    }, [e._v("How do I protect\n        my wallet?")])])], 1), e._v(" "), e.innerKeyState ? i("div", {
                        staticClass: "coins"
                    }, [i("div", {
                        staticClass: "filter"
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.filter,
                            expression: "filter"
                        }],
                        staticClass: "placeholder-white",
                        attrs: {
                            placeholder: "Search...",
                            type: "text",
                            "data-test-id": "keys_filter"
                        },
                        domProps: {
                            value: e.filter
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.filter = t.target.value)
                            }
                        }
                    })]), e._v(" "), e.keys.length > 0 ? i("div", {
                        staticClass: "list"
                    }, [!Object.keys(e.keysData).length && e.filter.length ? i("div", {
                        staticClass: "noresult"
                    }, [e._v("\n        No results found for “" + e._s(e.filter) + "”\n      ")]) : e._e(), e._v(" "), i("div", {
                        staticClass: "list-item",
                        attrs: {
                            "data-test-id": "coin-key"
                        }
                    }, [e._m(0), e._v(" "), i("div", {
                        staticClass: "info"
                    }, [i("CustomKey", {
                        attrs: {
                            isTrimValue: !1,
                            value: e.mnemonic,
                            title: "12-word backup phrase"
                        }
                    })], 1)]), e._v(" "), e._l(e.keysData, (function(t, a) {
                        return i("div", {
                            key: a,
                            staticClass: "list-item"
                        }, [i("div", {
                            staticClass: "name"
                        }, [i("div", {
                            class: t.icon
                        }), e._v(" "), i("span", [e._v("\n            " + e._s(t.name) + "\n          ")])]), e._v(" "), "EOS" === t.name ? i("div", {
                            staticClass: "info"
                        }, [i("CustomKey", {
                            attrs: {
                                isQrCode: !1,
                                value: t.address,
                                title: "Account name"
                            }
                        }), e._v(" "), t.additionalKeys ? i("div", e._l(t.additionalKeys, (function(t, a) {
                            return i("span", {
                                key: t,
                                staticClass: "value"
                            }, [e._v(e._s(e._f("printKey")(a)) + ":\n              "), e._l(t, (function(t, s) {
                                return i("CustomKey", {
                                    key: s,
                                    attrs: {
                                        textClipboard: e.eosTextClipboard(a, s),
                                        title: e._f("printKey")(s),
                                        value: t
                                    }
                                })
                            }))], 2)
                        })), 0) : e._e()], 1) : "Monero" === t.name ? i("div", {
                            staticClass: "info"
                        }, [i("CustomKey", {
                            attrs: {
                                value: t.address,
                                title: "Address"
                            }
                        }), e._v(" "), i("CustomKey", {
                            attrs: {
                                value: t.additionalKeys.privateKeyView,
                                title: "View Private Key"
                            }
                        }), e._v(" "), i("CustomKey", {
                            attrs: {
                                value: t.additionalKeys.privateKeySpend,
                                title: "Spend Private Key"
                            }
                        }), e._v(" "), i("CustomKey", {
                            attrs: {
                                value: t.additionalKeys.publicKeySpend,
                                title: "Spend Public Key"
                            }
                        })], 1) : "Cardano" === t.name ? i("div", {
                            staticClass: "info"
                        }, [i("CustomKey", {
                            attrs: {
                                value: t.additionalKeys.shelleyAddress,
                                title: "Address"
                            }
                        }), e._v(" "), i("CustomKey", {
                            attrs: {
                                value: t.additionalKeys.shelleyPrivateKey,
                                title: "Private Key"
                            }
                        }), e._v(" "), i("CustomKey", {
                            attrs: {
                                value: t.additionalKeys.byronPrivateKey,
                                title: "Legacy Private Key"
                            }
                        }), e._v(" "), i("CustomKey", {
                            attrs: {
                                value: t.additionalKeys.byronAddress,
                                title: "Legacy Address"
                            }
                        })], 1) : i("div", {
                            staticClass: "info"
                        }, [i("CustomKey", {
                            attrs: {
                                value: t.address,
                                title: "Public Key"
                            }
                        }), e._v(" "), i("CustomKey", {
                            attrs: {
                                value: t.privateKey,
                                title: "Private Key"
                            }
                        })], 1)])
                    }))], 2) : e._e()]) : i("div", {
                        staticClass: "enter-form"
                    }, [i("Edit", {
                        attrs: {
                            error: e.privateKeyError,
                            focus: !0,
                            isShowPassword: !0,
                            placeholder: "Password",
                            type: "password"
                        },
                        on: {
                            "enter-pressed": e.loadKeysData
                        },
                        model: {
                            value: e.passwordForKey,
                            callback: function(t) {
                                e.passwordForKey = t
                            },
                            expression: "passwordForKey"
                        }
                    }), e._v(" "), i("button", {
                        staticClass: "button",
                        attrs: {
                            "data-test-id": "show_private_keys"
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.loadKeysData.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n      Show private keys\n    ")])], 1)])
                },
                s = [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "name"
                    }, [t("div", {
                        staticClass: "icon-awc"
                    }), this._v(" "), t("span", [this._v("\n            Atomic\n          ")])])
                }]
        },
        1381: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "tab-wrap security"
                    }, [i("div", {
                        staticClass: "text"
                    }, [e._v("\n    Before changing your password, click Private Keys in the top panel and write down your 12-word backup phrase. This\n    will help you restore your wallet if you forget your new password.\n  ")]), e._v(" "), i("div", {
                        staticClass: "inputs"
                    }, [i("Edit", {
                        ref: "oldPasswordRef",
                        attrs: {
                            error: e.oldPasswordError,
                            focus: !0,
                            isShowPassword: !0,
                            placeholder: "Old Password",
                            type: "password",
                            "data-test-id": "old_password"
                        },
                        on: {
                            changeTypeRepeatPassword: e.changeTypeRepeatPassword,
                            "enter-pressed": function(t) {
                                return e.changeOldPassword()
                            }
                        },
                        model: {
                            value: e.oldPassword,
                            callback: function(t) {
                                e.oldPassword = t
                            },
                            expression: "oldPassword"
                        }
                    }), e._v(" "), i("Edit", {
                        ref: "newPasswordRef",
                        attrs: {
                            error: e.newPasswordError,
                            type: e.repeatPasswordType,
                            placeholder: "New Password",
                            "data-test-id": "new_password"
                        },
                        on: {
                            "enter-pressed": function(t) {
                                return e.changeOldPassword()
                            }
                        },
                        model: {
                            value: e.newPassword,
                            callback: function(t) {
                                e.newPassword = t
                            },
                            expression: "newPassword"
                        }
                    }), e._v(" "), i("Edit", {
                        ref: "repeatNewPasswordRef",
                        attrs: {
                            error: e.repeatNewPasswordError,
                            type: e.repeatPasswordType,
                            placeholder: "Repeat New Password",
                            "data-test-id": "repeat_new_password"
                        },
                        on: {
                            "enter-pressed": function(t) {
                                return e.changeOldPassword()
                            }
                        },
                        model: {
                            value: e.repeatNewPassword,
                            callback: function(t) {
                                e.repeatNewPassword = t
                            },
                            expression: "repeatNewPassword"
                        }
                    }), e._v(" "), i("button", {
                        staticClass: "button",
                        attrs: {
                            "data-test-id": "change_password_button"
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.changeOldPassword.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n      Change password\n    ")]), e._v(" "), i("transition", {
                        attrs: {
                            mode: "out-in",
                            name: "fade"
                        }
                    }, [e.passwordWasSuccessfullyChanged ? i("div", {
                        staticClass: "message"
                    }, [e._v("\n        Your password has been changed\n      ")]) : e._e()])], 1)])
                },
                s = []
        },
        1382: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            }));
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("main", {
                        staticClass: "membership"
                    }, [i("div", {
                        staticClass: "header-wrap"
                    }, [i("div", {
                        staticClass: "status"
                    }, [i("icon", {
                        attrs: {
                            name: "membership-" + (void 0 === e.settings ? "" : e.settings.class)
                        }
                    }), e._v(" "), i("span", {
                        attrs: {
                            "data-test-id": "settings-membership-status"
                        }
                    }, [e._v(e._s(void 0 === e.settings || "basic" === e.settings.class ? "Not a member" : e.settings.text + " Status"))])], 1), e._v(" "), i("div", {
                        staticClass: "balance"
                    }, [i("icon", {
                        attrs: {
                            name: "atomic-coins"
                        }
                    }), e._v("\n      You have "), i("span", {
                        staticClass: "text-white",
                        attrs: {
                            "data-test-id": "settings_awc_balance"
                        }
                    }, [e._v(e._s(e._f("formatFinance")(e.amount)))]), e._v(" AWC\n    ")], 1)]), e._v(" "), i("div", {
                        staticClass: "body"
                    }, [i("div", {
                        staticClass: "text-info"
                    }, [e._v("\n      Hold AWC-BNB token and receive AWC Cashback for each completed exchange."), i("br"), e._v(" Rewards are distributed monthly. "), i("a", {
                        staticClass: "readmore",
                        on: {
                            click: function(t) {
                                return e.$electron.shell.openExternal("https://atomicwallet.io/membership")
                            }
                        }
                    }, [e._v("Read more")])]), e._v(" "), i("div", {
                        staticClass: "settings"
                    }, e._l(e.$cashback.settings, (function(t, a) {
                        return i("div", {
                            key: a,
                            staticClass: "item",
                            class: [t.class, {
                                selected: "silver" === t.class && !e.isNeededAmount(t.minAWC)
                            }]
                        }, ["silver" === t.class && e.isNeededAmount(t.minAWC) ? i("div", {
                            staticClass: "choice"
                        }, [e._v("\n          Users’"), i("br"), e._v("Choice\n        ")]) : e._e(), e._v(" "), i("div", {
                            staticClass: "status"
                        }, [e._v("\n          " + e._s(t.text) + "\n        ")]), e._v(" "), i("div", {
                            staticClass: "atomic",
                            class: t.class
                        }, [i("div", {
                            staticClass: "background"
                        }), e._v(" "), i("div", {
                            staticClass: "icon-awc"
                        })]), e._v(" "), "basic" === t.class ? i("div", {
                            staticClass: "percent"
                        }, [e._v("\n          5 AWC\n        ")]) : i("div", {
                            staticClass: "percent"
                        }, [e._v("\n          " + e._s(100 * t.percent) + "%\n        ")]), e._v(" "), i("div", {
                            staticClass: "title"
                        }, [e._v("\n          Cashback\n        ")]), e._v(" "), "basic" === t.class ? i("div", {
                            staticClass: "limit"
                        }, [e._v("\n          One time bonus\n        ")]) : i("div", {
                            staticClass: "limit"
                        }, [e._v("\n          max " + e._s(t.limit) + " USD/mth\n        ")]), e._v(" "), e.isNeededAmount(t.minAWC) ? i("button", {
                            staticClass: "button",
                            attrs: {
                                "data-test-id": "buy-membership"
                            },
                            on: {
                                click: e.openCashbackExchange
                            }
                        }, [i("span", [e._v("BUY " + e._s(e._f("formatFinance")(e.neededAmount(t.minAWC))) + " AWC")])]) : "basic" !== t.class || e.hasTransaction ? i("div", {
                            staticClass: "step-completed"
                        }, [i("div", {
                            staticClass: "background"
                        }), e._v(" "), i("icon", {
                            staticClass: "svg-success",
                            attrs: {
                                name: "success"
                            }
                        })], 1) : i("button", {
                            staticClass: "button no-transactions"
                        }, [i("span", [i("icon", {
                            staticClass: "svg-success",
                            attrs: {
                                name: "success"
                            }
                        })], 1)])])
                    })), 0)])])
                },
                s = []
        },
        2285: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(892),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1359),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        30: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ActivateCoinMixin", {
                enumerable: !0,
                get: function() {
                    return T.default
                }
            }), Object.defineProperty(t, "AddressesMixin", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "BuyMixin", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "CashbackMixin", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(t, "CurrencyConverter", {
                enumerable: !0,
                get: function() {
                    return y.default
                }
            }), Object.defineProperty(t, "DBMixin", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "DisabledCoinMixin", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "ExchangeMixin", {
                enumerable: !0,
                get: function() {
                    return v.default
                }
            }), Object.defineProperty(t, "FeeMixin", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "HistoryMixin", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "ScrollMixin", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "SendStakeMixin", {
                enumerable: !0,
                get: function() {
                    return b.default
                }
            }), Object.defineProperty(t, "SettingsMixin", {
                enumerable: !0,
                get: function() {
                    return g.default
                }
            }), Object.defineProperty(t, "StakingMixin", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(t, "TransactionMixin", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(t, "WalletsStateMixin", {
                enumerable: !0,
                get: function() {
                    return w.default
                }
            }), Object.defineProperty(t, "WalletsTables", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(t, "iconsMixin", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            });
            var s = a(i(4484)),
                n = a(i(1163)),
                o = a(i(4485)),
                r = a(i(4486)),
                c = a(i(4487)),
                l = a(i(4488)),
                d = a(i(4489)),
                u = a(i(4490)),
                h = a(i(4491)),
                p = a(i(4492)),
                f = a(i(4493)),
                m = a(i(4494)),
                v = a(i(4495)),
                g = a(i(4496)),
                b = a(i(4497)),
                y = a(i(4498)),
                w = a(i(4499)),
                T = a(i(4500))
        },
        4484: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                methods: {
                    saveWallets() {
                        this.$bus.$emit("save::wallets");
                        try {
                            this.$addresses.set(this.$wallets)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }
            };
            t.default = a
        },
        4485: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(52),
                s = {
                    methods: {
                        async clearAllTables() {
                            const e = a.db.tables.map(e => "rates" !== e.name && e.clear()).filter(Boolean);
                            return Promise.all(e)
                        }
                    }
                };
            t.default = s
        },
        4486: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(38),
                s = {
                    computed: {
                        actionBuy: () => a.ACTION_BUY,
                        actionClaim: () => a.ACTION_CLAIM,
                        actionExchange: () => a.ACTION_EXCHANGE,
                        actionSend: () => a.ACTION_SEND,
                        actionStake: () => a.ACTION_STAKE,
                        actionUnstake: () => a.ACTION_UNSTAKE,
                        actionVote: () => a.ACTION_VOTE,
                        actionWithdraw: () => a.ACTION_WITHDRAW,
                        stakingAllOperation() {
                            return [this.actionClaim, this.actionStake, this.actionUnstake, this.actionVote, this.actionWithdraw]
                        },
                        stakingAllNoWithdrawOperation() {
                            return [this.actionClaim, this.actionStake, this.actionUnstake, this.actionVote]
                        }
                    },
                    methods: {
                        getCoinDisabilityReason(e) {
                            return a.CoinRestrictionPolicy.getMessage(this.coin.ticker, e)
                        },
                        isCoinDisabled(e) {
                            return e.some(e => !a.CoinRestrictionPolicy.isAllowed(this.coin.ticker, e))
                        }
                    }
                };
            t.default = s
        },
        4487: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(38);
            const s = 1e9,
                n = ["ETH", "LUNA", "LUNС", "BSC", "AVAX", "MATIC", "FLR", "FTM", "FIL", "OP"];
            var o = {
                data: () => ({
                    satPerByte: null,
                    utxos: [],
                    defaultGasPrice: null,
                    defaultGasLimit: null,
                    minGasLimit: "21000",
                    customGas: [],
                    fee: {
                        ticker: "",
                        fee: ""
                    }
                }),
                created() {
                    this.setCustomSatoshi(this.defaultSatPerByte)
                },
                computed: {
                    defaultSatPerByte() {
                        try {
                            const e = this.parent.getFeePerByte();
                            return e && String(e)
                        } catch {
                            return "1"
                        }
                    },
                    feeTicker() {
                        return this.getFeeTicker(this.coin)
                    },
                    fees() {
                        var e, t;
                        return null !== (e = null === (t = this.fee) || void 0 === t ? void 0 : t.fee) && void 0 !== e ? e : "0"
                    }
                },
                methods: {
                    async getUtxos() {
                        try {
                            return await this.parent.getUnspentOutputs()
                        } catch {
                            return []
                        }
                    },
                    setFee(e) {
                        this.fee.fee = e
                    },
                    setCustomSatoshi(e) {
                        this.satPerByte = e
                    },
                    setCustomGas(e) {
                        this.customGas = e
                    },
                    async getFee(e = 1, t = null) {
                        this.setFee(null), this.debounce(async () => {
                            var i, o, r;
                            const c = new Set(["BSC", "ETH", "LUNC", "LUNA", "THETA", "FLR", "ETHOP"]);
                            [this.coin.ticker, this.coin.deprecatedParent].some(e => c.has(e)) || (this.utxos = await this.getUtxos());
                            const l = this.coin instanceof a.Token;
                            let d = null;
                            const u = new Set(n);
                            if (this.isCustomFeeSupported && u.has(this.coin.deprecatedParent)) {
                                var h, p;
                                const e = await this.parent.getGasPrice(!1, !0);
                                d = "ETH" === this.coin.deprecatedParent && (null === (h = this.coin) || void 0 === h || null === (p = h.gasPriceConfig) || void 0 === p ? void 0 : p.fast) * s / 10 || e;
                                const t = await this.parent.getGasPrice(!0, l);
                                this.nodeGasPrice = (Number(t) / s).toString().replace(/\.[0-9]+[1-9]/, ""), this.defaultGasPrice = (Number(d) / s).toString().replace(/\.[0-9]+[1-9]/, ""), l || ["LUNC", "LUNA"].includes(this.coin.ticker) ? (this.minGasLimit = String(["LUNC", "LUNA"].includes(this.coin.deprecatedParent) ? await this.parent.estimateGas("1", "", this.coin.contract, this.coin.denom) : await this.parent.estimateGas("1", "", this.coin.contract)), this.defaultGasLimit = this.minGasLimit) : this.defaultGasLimit = String(this.coin.gasLimit)
                            }
                            const f = Number(e) && e || Number(this.inputs.amount) > 0 && this.inputs.amount,
                                m = f ? this.coin.toMinimalUnit(f) : null;
                            let v = null;
                            if ("ADA" === this.coin.ticker) v = {
                                utxos: this.utxos,
                                address: t,
                                sendAmount: m
                            };
                            else if ("TRX" === this.parent.ticker && "TRX" !== this.coin.ticker) v = {
                                address: this.inputs.address,
                                amount: m,
                                contract: this.coin.contract
                            };
                            else if ("ZIL" !== this.coin.deprecatedParent && "VTHO" !== this.coin.ticker) {
                                var g, b;
                                v = {
                                    feePerByte: this.satoshiPerByte || this.satPerByte || this.defaultSatPerByte,
                                    userGasPrice: (null === (g = this.customGas) || void 0 === g ? void 0 : g[0]) || d,
                                    utxos: this.utxos,
                                    gasLimit: (null === (b = this.customGas) || void 0 === b ? void 0 : b[1]) || this.defaultGasLimit,
                                    address: this.inputs.address,
                                    sendAmount: m,
                                    isToken: l,
                                    contract: this.coin.contract,
                                    denom: this.coin.denom,
                                    custom: this.inputs.custom
                                }
                            }
                            let y = this.$wallets.getWallet(null !== (i = null === (o = this.coin) || void 0 === o || null === (r = o.getFeeTicker) || void 0 === r ? void 0 : r.call(o)) && void 0 !== i ? i : this.coin.deprecatedParent);
                            "VTHO" === this.coin.ticker ? y = this.coin : ["OP", "ARB"].includes(this.coin.deprecatedParent) && (y = this.$wallets.getWallet(this.coin.deprecatedParent));
                            const w = await (v ? y.getFee(v) : y.getFee());
                            ["NEO3", "GAS3"].includes(this.coin.id) ? this.setFee(w) : ["VET"].includes(this.coin.id) ? this.setFee(this.coin.toCurrencyUnit(w, 20)) : this.setFee(l || "ONT" === this.coin.ticker && "BSC" !== this.coin.deprecatedParent ? this.parent.toCurrencyUnit(w) : this.coin.toCurrencyUnit(w)), this.fee.ticker = this.feeTicker
                        })
                    }
                }
            };
            t.default = o
        },
        4488: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(38),
                s = {
                    methods: {
                        $iconClass(e) {
                            var t;
                            let i = null;
                            const s = null === (t = String(e.ticker || e)) || void 0 === t ? void 0 : t.toUpperCase();
                            try {
                                i = "object" == typeof e && e.id && this.$wallets.getWallet(e.id) || this.$wallets.findWalletV2({
                                    ticker: s,
                                    parentTicker: e.parentTicker
                                })
                            } catch (e) {
                                console.log(e)
                            }
                            if (!i) return `icon-default icon-${s} icon-${s}`;
                            const n = i.contract || i.id,
                                o = String("icon-" + n).toLowerCase(),
                                r = "icon-" + (null == n ? void 0 : n.toUpperCase());
                            if (i instanceof a.Token) switch (i.deprecatedParent) {
                                case "OP":
                                    return "icon-opTokenDefault " + o;
                                case "ARB":
                                    return "icon-arbTokenDefault " + o;
                                case "ETH":
                                    return "icon-ethTokenDefault " + o;
                                case "BNB":
                                    return "icon-bnbTokenDefault " + o;
                                case "MATIC":
                                    return `icon-maticTokenDefault icon-${i.ticker} ${o}`;
                                case "FLR":
                                    return `icon-flrTokenDefault icon-${i.ticker} ${o}`;
                                case "FTM":
                                    return "icon-ftmTokenDefault " + o;
                                case "AVAX":
                                    return `icon-AVAX icon-${i.ticker} ${o}`;
                                case "LUNC":
                                    return `icon-LUNC icon-${i.ticker} ${o}`;
                                case "BSC":
                                    return "icon-bscTokenDefault " + o
                            }
                            return `icon-default ${r} ${o}`
                        }
                    }
                };
            t.default = s
        },
        4489: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                data: () => ({
                    page: 0
                }),
                methods: {
                    handleScrollEnd(e) {
                        const {
                            scrollHeight: t,
                            offsetHeight: i,
                            scrollTop: a
                        } = e.target;
                        t - (i + a) > 150 || this.isListEnded || (this.page += 1)
                    }
                }
            };
            t.default = a
        },
        4490: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                data: () => ({
                    openedIds: []
                }),
                methods: {
                    removeOpenedId(e) {
                        const t = this.openedIds.filter(t => e !== t);
                        this.openedIds = t
                    },
                    addOpenedId(e) {
                        this.openedIds.push(e)
                    }
                }
            };
            t.default = a
        },
        4491: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(61)),
                n = i(31);
            var o = {
                props: {
                    staking: {
                        type: Object,
                        default: () => ({})
                    }
                },
                data: () => ({
                    settings: {
                        rate: "",
                        tickerToSend: "",
                        receiveTicker: "",
                        tickerToReceive: ""
                    },
                    errorMessage: "",
                    txId: "",
                    isClaiming: !1,
                    isError: !1,
                    isSuccess: !1,
                    showHelpPopup: !1,
                    fetchCoinInfoTimeout: null,
                    successClaimedAmount: 0
                }),
                computed: {
                    ...(0, n.mapGetters)(["excludedCurrenciesExchange"]),
                    dailyReward() {
                        let e = new s.default(this.staking.balance).dividedBy(this.settings.rate).toString();
                        return e = Number(e) > 1 ? Number(e).toFixed(4) : Number(e).toFixed(6), Number(e) || 0
                    },
                    trxBalance() {
                        const {
                            balances: {
                                total: e
                            }
                        } = this.$wallets.getWallet("TRX", "atomic");
                        return Number(e) || 0
                    },
                    coin() {
                        return this.$wallets.findWallet(this.staking.ticker, "atomic")
                    },
                    parent() {
                        return this.$wallets.getWallet(this.coin.deprecatedParent)
                    },
                    unclaimed() {
                        const {
                            balances: e
                        } = this.coin;
                        return e && e.rewards || 0
                    },
                    unbonding() {
                        const {
                            balances: e
                        } = this.coin;
                        return e && e.unbonding || 0
                    },
                    receiveBalance() {
                        const e = this.settings.receiveTicker,
                            t = this.$wallets.findWallet(e).divisibleBalance;
                        return this.fixedBalance(t) || 0
                    },
                    isPossibleToBuy() {
                        return !this.excludedCurrenciesExchange.includes(this.coin.ticker)
                    }
                },
                mounted() {
                    this.fetchCoinInfo(), this.$bus.$on("close-staking-exchange-popup", this.closeHandler)
                },
                beforeDestroy() {
                    this.$bus.$off("close-staking-exchange-popup", this.closeHandler), clearTimeout(this.fetchCoinInfoTimeout)
                },
                methods: {
                    fetchCoinInfo() {
                        clearTimeout(this.fetchCoinInfoTimeout), this.fetchCoinInfoTimeout = setTimeout(async () => {
                            "SOL" === this.staking.ticker ? await this.coin.getInfo({
                                ignoreCache: !0
                            }) : "AWC-986" === this.staking.ticker ? await this.parent.getInfo() : await this.coin.getInfo()
                        }, 5e3)
                    },
                    closeHandler() {
                        this.$emit("closePopup")
                    },
                    goBuy(e) {
                        let t = this.coin;
                        e && (t = this.$wallets.getWallet(e)), this.$router.push({
                            path: "/exchange",
                            query: {
                                coinToReceive: `${t.ticker}%|%${t.id}`
                            }
                        })
                    },
                    fixedBalance(e) {
                        const t = Number(e);
                        return t > 1 ? t.toFixed(4) : t.toFixed(6)
                    },
                    backToStakeTable() {
                        this.backToStake(), this.$emit("closePopup")
                    },
                    backToStake() {
                        this.isSuccess = !1, this.isError = !1
                    },
                    async claim() {
                        const {
                            isValid: e,
                            message: t
                        } = this.validate();
                        if (!e) return void(this.errorMessage = t);
                        this.isClaiming = !0;
                        const i = await this.coin.claim().catch(e => {
                            this.errorMessage = e && e.message.replace("Error: ", "")
                        });
                        i ? (this.successClaimedAmount = this.unclaimed, this.isSuccess = !0, this.txId = i.txid) : this.isError = !0, this.isClaiming = !1
                    },
                    formatAmount: e => new Intl.NumberFormat("en-US").format(e)
                }
            };
            t.default = o
        },
        4492: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                props: {
                    tx: {
                        type: Object,
                        default: () => {}
                    }
                },
                computed: {
                    address() {
                        return this.tx.otherSideAddress && "..." !== this.tx.otherSideAddress ? this.tx.direction ? this.parentAddress : this.tx.otherSideAddress : this.parentAddress
                    },
                    amountUnit() {
                        return "vote" !== this.txType ? this.tx.ticker : "1" === this.tx.amount ? "Vote" : "Votes"
                    },
                    description() {
                        return this.isOperation ? {
                            freeze: "Freeze",
                            reward: "Claim rewards",
                            claim: "Claim rewards",
                            withdraw: "Withdraw",
                            stake: "Stake",
                            unstake: "Unstake",
                            vote: "Vote"
                        } [this.txType] : this.targetAddress
                    },
                    txType() {
                        var e, t;
                        return (null === (e = this.tx) || void 0 === e || null === (t = e.txType) || void 0 === t ? void 0 : t.toLowerCase()) || ""
                    },
                    isOperation() {
                        return ["freeze", "reward", "stake", "unstake", "vote", "withdraw", "claim"].includes(this.txType)
                    },
                    isPending() {
                        const e = ["ETH", "XMR"].includes(this.parent.ticker),
                            t = Number(this.tx.confirmations) < this.pendingConfirmations[this.parent.ticker];
                        return e && t
                    },
                    isResendButton() {
                        if ("ETH" !== this.parent.ticker || !this.isPending || this.tx.direction) return !1;
                        const e = Number(this.tx.timestamp) + 6e4 * this.parent.resendTimeout;
                        return Date.now() >= e
                    },
                    parent() {
                        const {
                            deprecatedParent: e,
                            parent: t
                        } = this.$wallets.getWallet(this.tx.walletid);
                        return this.$wallets.getWallet(e || t)
                    },
                    parentAddress() {
                        const {
                            address: e
                        } = this.parent;
                        return e
                    },
                    placeholderPaymentId() {
                        return this.getPlaceholderPaymentId(this.tx.ticker, this.parent.ticker)
                    },
                    targetAddress() {
                        return this.tx.direction ? this.tx.otherSideAddress : this.address
                    }
                },
                data: () => ({
                    isCopyAddress: !0,
                    pendingConfirmations: {
                        ETH: 1,
                        XMR: 1
                    },
                    showCopy: !1,
                    windowWidth: null
                }),
                methods: {
                    formatAddress(e) {
                        if (!e) return "";
                        const [t, i] = this.maxAddressSize();
                        return e.length <= t ? e : e.substr(0, i) + "..." + e.substr(-i)
                    },
                    open() {
                        const {
                            explorer: e
                        } = this.parent;
                        this.$electron.shell.openExternal(`${e.webUrl}${this.tx.txid}`)
                    },
                    copyToClipboard(e, t = !0) {
                        if (t) this.$electron.clipboard.writeText(e);
                        else {
                            const {
                                explorer: t = null
                            } = this.parent, i = `${t.webUrl}${e}`;
                            this.$electron.clipboard.writeText(i)
                        }
                        this.showCopy = !0, this.isCopyAddress = t, setTimeout(() => {
                            this.showCopy = !1
                        }, 1e3)
                    }
                }
            };
            t.default = a
        },
        4493: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                data: () => ({
                    awcBalance: 0,
                    estimatedCashback: "0"
                }),
                computed: {
                    ...(0, i(31).mapGetters)(["coinRate", "fiatRate"]),
                    isMember() {
                        var e;
                        return null === (e = this.$cashback.currentLevel(this.awcBalance)) || void 0 === e ? void 0 : e.isMember
                    },
                    isCashbackAvaliable() {
                        return this.isMember && !isNaN(this.estimatedCashback) && Number(this.estimatedCashback) >= 0
                    }
                },
                watch: {
                    async cashbackParams() {
                        await this.calculateCashback()
                    }
                },
                async mounted() {
                    await this.updateAwcBalance(), await this.calculateCashback()
                },
                methods: {
                    async updateAwcBalance() {
                        this.awcBalance = await this.$membership.getBalance()
                    },
                    async calculateCashback() {
                        let e = 0;
                        this.cashbackParams && this.cashbackParams.amount && Number(this.cashbackParams.amount > 0) && this.isCashbackAvaliable && (e = await this.$cashback.calculateCashback(this.cashbackParams.amount, this.cashbackParams.wallet, this.awcBalance)), this.estimatedCashback = e || 0
                    }
                }
            };
            t.default = a
        },
        4494: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(61)),
                n = i(31);
            var o = {
                data: () => ({
                    showCoinInfoPopup: !1,
                    activeCoin: null,
                    showSendCoinPopup: !1,
                    showReceiveCoinPopup: !1
                }),
                computed: {
                    ...(0, n.mapGetters)(["fiatRate", "coinRate", "walletsState", "walletWizard", "balanceSummary", "chartDataTickerByZoom"]),
                    walletsForTable() {
                        return this.filterWallets.map(e => {
                            const {
                                divisibleBalance: t,
                                ticker: i,
                                name: a,
                                id: n,
                                contract: o,
                                parent: r,
                                confirmed: c
                            } = e, l = this.chartDataTickerByZoom(i).data, {
                                rate: d,
                                change: u = 0,
                                marketCap: h = 0
                            } = this.coinRate(this.fiatRate, this.$wallets.getWallet(n)), p = this.getCoinBalance(t, i, n), f = this.fixedBalance(p), m = this.$options.filters.formatFiat(p * d, this.fiatRate, 1), v = new s.default(m).dividedBy(this.valueForOnePercent()).toString(), g = this.$options.filters.formatFiat(d, this.fiatRate), b = {
                                icon: "" + this.$iconClass(e),
                                fiatRate: this.fiatRate,
                                isPlaceholder: 0 === d,
                                portfolioToShow: Number(v || 0).toFixed(2),
                                id: n,
                                rate: d,
                                name: a,
                                price: g,
                                value: m,
                                parent: r,
                                change: u,
                                ticker: i,
                                balance: p,
                                contract: o,
                                portfolio: v,
                                marketCap: h,
                                chartData: l,
                                confirmed: c,
                                fixedBalance: f
                            };
                            return c && this.updateCoinBalance({
                                balance: p,
                                id: n
                            }), b
                        })
                    }
                },
                methods: {
                    ...(0, n.mapActions)(["updateCoinBalance"]),
                    valueForOnePercent() {
                        const e = localStorage.getItem(this.fiatRate + "-fiatBalance"),
                            t = this.balanceSummary(this.fiatRate);
                        return Number(new s.default(t || e).dividedBy(100).toString()) || 1
                    },
                    getCoinBalance(e, t, i) {
                        e && localStorage.setItem(i + "-balance", e);
                        const a = localStorage.getItem(i + "-balance");
                        return Number(e || a || 0)
                    },
                    fixedBalance: e => Number(e > 1 ? e.toFixed(4) : e.toFixed(6)),
                    closeCoinInfoPopup() {
                        this.showCoinInfoPopup = !this.showCoinInfoPopup
                    },
                    closeSendCoinPopup() {
                        this.showSendCoinPopup = !this.showSendCoinPopup
                    },
                    closeReceiveCoinPopup() {
                        this.showReceiveCoinPopup = !this.showReceiveCoinPopup
                    },
                    toggleSendCoinPopup(e, t = null) {
                        this.resendParams = t, this.activeCoin = e, this.closeSendCoinPopup(), this.$nextTick()
                    },
                    toggleReceiveCoinPopup(e) {
                        this.activeCoin = e, this.closeReceiveCoinPopup(), this.$nextTick()
                    },
                    changeActiveCoin(e) {
                        this.activeCoin = e
                    },
                    editToken(e) {
                        this.closeCoinInfoPopup(), this.$emit("editToken", e)
                    },
                    toggleCoinInfoPopup({
                        id: e,
                        alias: t
                    }) {
                        const i = this.$wallets.getWallet(e, t);
                        "" === i.address && "EOS" === i.id ? this.toggleWizard(i) : (this.activeCoin = i, this.closeCoinInfoPopup())
                    }
                }
            };
            t.default = o
        },
        4495: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(31);
            var s = {
                computed: {
                    ...(0, a.mapGetters)(["isMocked"]),
                    currentService() {
                        return this.$exchanges.getService(this.$exchanges.getCurrentServiceName())
                    }
                },
                data: () => ({
                    exchangeRate: null
                }),
                methods: {
                    cancelRequests() {
                        this.currentService.cancelAnyRequests()
                    },
                    getCurrencies() {
                        return this.currentService.getCurrencies()
                    },
                    getWallet(e) {
                        const {
                            contract: t,
                            ticker: i,
                            network: a
                        } = e || {};
                        return this.$wallets.findWalletV2({
                            ticker: i,
                            contract: t,
                            parentTicker: a
                        })
                    },
                    getWalletData(e) {
                        return this.currentService.getInternalWalletData({
                            legacyTicker: e
                        })
                    },
                    async getFilteredCurrencies() {
                        return this.$exchanges.getAvailableWalletIdCollection(this.currenciesExchange, this.$wallets)
                    },
                    getStatus(e) {
                        return this.currentService.getStatus(e)
                    },
                    getRate(e, t, i) {
                        return this.currentService.getExchangeAmount(e, t, i)
                    },
                    getMinimalAmount(e, t) {
                        return this.currentService.getMinAndMaxAmount(e, t)
                    },
                    validateExchangeTx(e) {
                        return this.currentService.validateExchangeTx(e)
                    },
                    refundTransaction(e) {
                        if (this.isMocked) return new Promise(e => setTimeout(() => {
                            e({
                                result: !0
                            })
                        }, 3e3));
                        const {
                            id: t,
                            refundAddress: i
                        } = e;
                        return this.currentService.exchangeRefund(t, i)
                    },
                    exchangeContinue(e) {
                        return this.isMocked ? new Promise(e => setTimeout(() => {
                            e({
                                result: !0
                            })
                        }, 3e3)) : this.currentService.exchangeContinue(e.id)
                    },
                    async createExchangeTransaction(e, t, i, a, s, n, o, r) {
                        try {
                            const c = await this.currentService.createTransaction(e, t, i, a, s, o, r);
                            if (!c) throw new Error("Can't create exchange transaction, service unavailable");
                            const l = this.$exchanges.getPreorder(e, t, s, n);
                            return this.$exchanges.postCashbackExchangeTx(c, this.$wallets.hash, s, r, a, l, this.$exchanges.getCurrentServiceName()), this.$exchanges.addExchangeTransactionToDb(c, this.$wallets.hash, s, r, a, l), c
                        } catch (e) {
                            console.error(e)
                        }
                    },
                    async sendTransaction(e, t, i, a = null, s, n = null) {
                        return this.$exchanges.sendTransaction(e, this.$wallets.getWallet(e.deprecatedParent), t, i, a, s, n)
                    }
                }
            };
            t.default = s
        },
        4496: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(31);
            var s = {
                computed: {
                    ...(0, a.mapGetters)(["stakingSettings"]),
                    feeReserveCoef() {
                        const e = this.coin.feeData && this.coin.feeData.reserveCoef || 3;
                        return "Stake" === this.sendType ? e : 1
                    }
                },
                methods: {
                    setStakingValidator() {
                        var e;
                        const t = this.stakingSettings.find(({
                                ticker: e
                            }) => this.coin.ticker === e).defaultValidator || (null === (e = this.stakingSettings[0]) || void 0 === e ? void 0 : e.name) || "",
                            i = localStorage.getItem(`selected::${this.coin.ticker}::validator`) || t;
                        this.selectedStakingValidator = this.$staking.getStakingInterface(this.coin.ticker).validators.find(({
                            address: e,
                            name: t
                        }) => e === i || t === i).name
                    },
                    getPlaceholderPaymentId: (e, t) => ["XLM", "KIN", "EOS"].includes(e) ? "Memo.ID" : ["XEM", "TON"].includes(t) ? "Message" : ["BNB", "ATOM", "HBAR", "BAND", "LUNC", "LUNA", "OSMO", "KAVA", "INJ"].includes(t) ? "Memo" : "XMR" === e ? "Payment ID" : "Destination tag",
                    backToWallets() {
                        this.clearInputs(), this.$emit("closePopup")
                    }
                }
            };
            t.default = s
        },
        4497: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(31),
                s = {
                    props: {
                        coin: {
                            type: Object,
                            default: null
                        }
                    },
                    computed: {
                        ...(0, a.mapGetters)(["fiatRate", "stakingRate"]),
                        feeWallet() {
                            return this.$wallets.findWallet(this.fee.ticker)
                        },
                        parent() {
                            return this.$wallets.getWallet(this.coin.deprecatedParent)
                        },
                        ticker() {
                            return "AWC-986" === this.coin.ticker ? "AWC" : this.coin.ticker
                        }
                    },
                    methods: {
                        buyCoin() {
                            this.buy(this.coin)
                        },
                        saveSuccessStaking(e = null, t = null) {
                            const i = e || this.inputs && this.inputs.amount || "",
                                a = t || this.inputs && this.inputs.address || "",
                                s = {
                                    currency: this.coin.ticker,
                                    atomicId: this.$wallets.hash,
                                    hash: this.txid,
                                    amount: i,
                                    orderId: null,
                                    providerAddress: a,
                                    provider: this.stakingValidator && this.stakingValidator.name || "",
                                    yearlyIncome: this.stakingProfit || "",
                                    walletVersion: `${this.$platformVersion.getPlatform()} ${this.$platformVersion.getVersion()}`,
                                    platform: this.$platformVersion.getVersion(),
                                    payoutAddress: this.coin.address,
                                    bnbAddress: this.$wallets.getWallet("BNB").address
                                };
                            this.$staking.saveSuccessStaking(s)
                        }
                    }
                };
            t.default = s
        },
        4498: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(31),
                n = a(i(61));
            var o = {
                methods: {
                    hasRate({
                        id: e
                    }) {
                        if (!this.$rates || !this.$rates.data) return !1;
                        const t = this.$rates.data[e];
                        return t && t[this.fiatRate] && !0
                    },
                    roundFiat(e, t = 6) {
                        if (/^\./.test(e)) return e;
                        let i = e.toString().match(/(?<!0\.[0-9]{0,6})0{1,6}(?=[0-9]{1,6})/g),
                            a = this.numberToFixed(e.toString()),
                            s = a.match(/\.$|\.0{1,6}$|(?<=\.[0-9]{1,6})0{1,6}$|(?<=[0-9]{1,6}\.[0-9]{1,6})0{1,6}$/g);
                        return s = null === s ? "" : s[0], i = null === i || 0 !== parseInt(e[0]) ? "" : i[0], a = Math.ceil((1e8 * a).toFixed(t)) / 1e8, i + a.toString() + s
                    },
                    numberToFixed(e, t = 6) {
                        if (!e) return "";
                        let i = e;
                        const [a, s] = i.toString().split(".");
                        return s && s.length >= t && (i = `${a}.${s.slice(0,t)}`), i.toString()
                    },
                    balanceInFiat(e) {
                        const t = this.$wallets.getWallet(e);
                        if (!t) return "0.00";
                        const i = this.coinRate(this.fiatRate, t).rate * t.divisibleBalance;
                        return i ? "BTC" === this.fiatRate ? i.toFixed(8) : i.toFixed(2) : "0.00"
                    },
                    getValueFiat(e, t, i = !1) {
                        if (!e || "0" === e) return 0;
                        const a = this.$rates.getCoinPrice(t, this.fiatRate),
                            s = new n.default(e).multipliedBy(a).toFixed(8);
                        return "BTC" === this.fiatRate ? s : s > 1 ? parseFloat(s).toFixed(2) : s < 1e-6 ? s : i ? parseFloat(s).toFixed(4) : s
                    },
                    formatNumber(e, {
                        locale: t = "en-US",
                        currency: i,
                        minDecimals: a,
                        maxDecimals: s
                    }) {
                        const n = {
                            minimumFractionDigits: a,
                            maximumFractionDigits: s
                        };
                        return i && Object.assign(n, {
                            currency: i,
                            style: "currency"
                        }), new Intl.NumberFormat(t, n).format(+e || 0)
                    },
                    calculateFiatValue(e, {
                        id: t
                    }) {
                        const {
                            rate: i = 0
                        } = this.coinRate(this.fiatRate, this.$wallets.getWallet(t)), a = new n.default(+e || 0).multipliedBy(i);
                        return this.formatFinanceValue(a)
                    },
                    formatFinanceValue(e, t) {
                        const i = +e || 0;
                        let a;
                        return a = "BTC" === this.fiatRate ? 8 : i < 1e-6 || i > 1 ? 2 : 6, this.formatNumber(i, {
                            minDecimals: 2,
                            maxDecimals: a,
                            currency: t
                        })
                    },
                    getFinanceValue(e) {
                        const t = new n.default(+e || 0);
                        let i;
                        return i = "BTC" === this.fiatRate ? 8 : t < 1e-6 || t > 1 ? 2 : 6, new Intl.NumberFormat("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: i
                        }).format(t)
                    }
                },
                computed: {
                    ...(0, s.mapGetters)(["fiatRate", "coinRate"])
                }
            };
            t.default = o
        },
        4499: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(38),
                s = i(31);
            let n = [];
            var o = {
                methods: {
                    ...(0, s.mapActions)(["setWalletsState", "updateWalletState"]),
                    data: () => ({
                        walletsAcc: [],
                        accTimeout: null
                    }),
                    setWalletsHandler() {
                        this.setWalletsState(Array.from(this.$wallets))
                    },
                    assumeWallets(e) {
                        clearTimeout(this.accTimeout);
                        const t = this.$wallets.getWallet(e);
                        if (t && (n.push(t), this.accTimeout = setTimeout(() => {
                                const e = n.map(e => this.$wallets.getWallet(e.id)).filter(Boolean);
                                this.setWalletsState(e)
                            }, 3e3), n.length > 15)) {
                            const e = [...n.map(e => this.$wallets.getWallet(e.id)).filter(Boolean)];
                            this.setWalletsState(e), n = []
                        }
                    },
                    updateWalletsHandler(e) {
                        this.assumeWallets(e)
                    },
                    async socketConfirmedTxHandler({
                        id: e
                    }) {
                        const t = e,
                            i = this.$wallets.getWallet(t),
                            s = this.$wallets.getWallet(i.deprecatedParent);
                        if (i instanceof a.Token && ["ETH", "LUNC"].includes(i.deprecatedParent)) {
                            s.getInfo({
                                isToken: !0,
                                contract: i.contract,
                                ticker: i.ticker
                            });
                            const e = await s.getTransactions();
                            this.$wallets.transactions(e)
                        } else s.getInfo()
                    }
                },
                computed: {
                    ...(0, s.mapGetters)(["walletsState"])
                },
                mounted() {
                    this.$bus.$on("save::wallets", this.setWalletsHandler), this.$bus.$on("update::fiat-balance", this.setWalletsHandler), this.$bus.$on("update::coin-list", this.setWalletsHandler), this.$bus.$on("update::balances", this.setWalletsHandler), this.$bus.$on("update::balance", this.updateWalletsHandler), this.$bus.$on("socket::tx::confirmed", this.socketConfirmedTxHandler)
                },
                beforeDestroy() {
                    clearTimeout(this.accTimeout), this.$bus.$off("save::wallets", this.setWalletsHandler), this.$bus.$off("update::fiat-balance", this.setWalletsHandler), this.$bus.$off("update::coin-list", this.setWalletsHandler), this.$bus.$off("update::balances", this.setWalletsHandler), this.$bus.$off("update::balance", this.updateWalletsHandler), this.$bus.$off("socket::tx::confirmed", this.socketConfirmedTxHandler)
                }
            };
            t.default = o
        },
        4500: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                props: {
                    id: {
                        type: String,
                        required: !0
                    }
                },
                data: () => ({
                    currentStage: "activate",
                    fee: null,
                    feeEnough: !0,
                    copied: !1,
                    transaction: {
                        txid: null,
                        isError: !1,
                        isSuccess: !1,
                        isLoading: !0
                    }
                }),
                computed: {
                    ticker() {
                        return this.coin.ticker.toUpperCase()
                    },
                    icon() {
                        return `${this.$iconClass(this.coin)} icon-${this.ticker.toLowerCase()}`
                    },
                    fiatFee() {
                        return this.getValueFiat(this.fee, {
                            id: this.coin.network,
                            confirmed: !0
                        })
                    },
                    coin() {
                        return this.$wallets.getWallet(this.id)
                    }
                },
                async created() {
                    await this.setFee()
                },
                methods: {
                    async handleActivate(e) {
                        if (this.feeEnough) {
                            this.transaction = {
                                isLoading: !0,
                                isError: !1,
                                isSuccess: !1,
                                txid: null
                            }, await this.handleChangeStage("result");
                            try {
                                const t = await e();
                                this.transaction.txid = null == t ? void 0 : t.txid, this.transaction.isSuccess = !0
                            } catch (e) {
                                console.error(e), this.transaction.isError = !0
                            } finally {
                                this.transaction.isLoading = !1
                            }
                        }
                    },
                    async handleSetFee(e) {
                        try {
                            const t = await e();
                            this.fee = this.coin.toCurrencyUnit(t), this.feeEnough = await this.coin.isAvailableForSend("0", this.fee)
                        } catch (e) {
                            console.error(e)
                        }
                    },
                    handleNavigate() {
                        this.$bus.$emit("activate-coin", {
                            id: null
                        })
                    },
                    async handleChangeStage(e) {
                        this.debounce(() => {
                            this.$nextTick(() => {
                                this.currentStage = e
                            })
                        }, 50)
                    },
                    copyPayment() {
                        this.$electron.clipboard.writeText(this.activationAddress), this.copied = !0, setTimeout(() => {
                            this.copied = !1
                        }, 1e3)
                    }
                }
            };
            t.default = a
        },
        4566: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NotifyPointsTree = void 0;
            var s = a(i(151)),
                n = a(i(207)),
                o = a(i(208));

            function r(e, t, i) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, i)
            }
            var c = new WeakMap,
                l = new WeakMap,
                d = new WeakMap,
                u = new WeakMap;
            t.NotifyPointsTree = class NotifyPointsTree {
                constructor(e = [], t = [], i = [], a = []) {
                    r(this, c, {
                        writable: !0,
                        value: void 0
                    }), r(this, l, {
                        writable: !0,
                        value: void 0
                    }), r(this, d, {
                        writable: !0,
                        value: void 0
                    }), r(this, u, {
                        writable: !0,
                        value: void 0
                    }), (0, s.default)(this, "notyfyTree", void 0), (0, s.default)(this, "notyfyWallets", void 0), this.setNotifyData(e, t, i, a), this.getCalculatedMap()
                }
                setNotifyData(e = [], t = [], i = [], a) {
                    (0, o.default)(this, d, i), (0, o.default)(this, l, e), (0, o.default)(this, c, t), (0, o.default)(this, u, a)
                }
                getCalculatedMap() {
                    const e = {},
                        t = (0, n.default)(this, d).reduce((e, t) => {
                            if (!t) return e;
                            if (Array.isArray(t.items)) {
                                const i = t.items.filter(({
                                    notify: e = !1
                                }) => e);
                                i.length > 0 && e.push(...i.map(e => ({
                                    baseUID: `${t.where.ticker.split("-").join("")}-${t.where.network||""}`,
                                    contentUrl: e.contentUrl,
                                    notify: e.notify,
                                    coin: {
                                        name: "article",
                                        ticker: t.where.ticker,
                                        network: t.where.network || ""
                                    }
                                })))
                            }
                            return e
                        }, []),
                        i = this.getNotifyByConfig(t, ({
                            baseUID: e,
                            contentUrl: t
                        }) => [`article-${e}-${t}`, "tababout-" + e, "walletTableTickerInfo-" + e, "walletTableTicker-" + e, "menu-Wallet"], ({
                            baseUID: e,
                            contentUrl: t
                        }) => ({
                            reasons: `article-${e}-${t}`,
                            duration: 5
                        })),
                        a = (0, n.default)(this, l).map(({
                            itemName: e,
                            notify: t,
                            reasons: i
                        }) => ({
                            baseUID: e,
                            notify: t,
                            reasons: i
                        })),
                        s = this.getNotifyByConfig(a, ({
                            baseUID: e
                        }) => [e], ({
                            reasons: e
                        }) => ({
                            duration: 120,
                            reasons: e
                        })),
                        o = (0, n.default)(this, u).filter(e => {
                            var t;
                            return (null == e || null === (t = e.tags) || void 0 === t ? void 0 : t.filter(e => "new" === e).length) >= 1
                        }).map(e => ({
                            baseUID: e.ticker,
                            notify: !0
                        })),
                        r = this.getNotifyByConfig(o, ({
                            baseUID: e
                        }) => ["menu-Staking", "staking-table-ticker-" + e], ({
                            baseUID: e
                        }) => ({
                            reasons: "staking-" + e,
                            duration: 10
                        })),
                        h = (0, n.default)(this, c).map(e => ({
                            baseUID: `${null==e?void 0:e.ticker.split("-").join("")}-${e.deprecatedParent&&e.deprecatedParent!==e.ticker?e.deprecatedParent:""}`,
                            notify: !0,
                            coin: {
                                name: "walletTableTickerInfo",
                                ticker: null == e ? void 0 : e.ticker,
                                network: e.deprecatedParent && e.deprecatedParent !== e.ticker ? e.deprecatedParent : ""
                            }
                        }));
                    [i, s, r, this.getNotifyByConfig(h, ({
                        baseUID: e
                    }) => ["walletTableTickerInfo-" + e, "walletTableTicker-" + e, "menu-Wallet"], ({
                        baseUID: e
                    }) => ({
                        reasons: "walletTableTickerInfo-" + e,
                        duration: 10
                    })), []].forEach(t => {
                        Object.keys(t).forEach(i => {
                            e[i] ? e[i].push(...t[i]) : e[i] = t[i]
                        })
                    }), this.notyfyWallets = [];
                    const p = e => {
                        const t = `${e.coin.name}-${e.coin.ticker.split("-").join("")}-${e.coin.network}`;
                        this.notyfyWallets.includes(t) || this.notyfyWallets.push(t)
                    };
                    for (let e of t) p(e);
                    for (let e of h) p(e);
                    this.notyfyTree = e
                }
                getNotifyByConfig(e, t, i = (() => ({
                    duration: 30,
                    reasons: ""
                }))) {
                    const a = {};
                    return e && Array.isArray(e) && e.forEach(e => {
                        t(e).forEach(t => {
                            a[t] = a[t] ? [...a[t], i(e)] : [i(e)]
                        })
                    }), a
                }
                getNotyfyTree() {
                    return this.notyfyTree
                }
                getNotyfyWallets() {
                    return this.notyfyWallets
                }
            }
        },
        4582: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(187)),
                n = a(i(4583)),
                o = a(i(4584)),
                r = a(i(5107)),
                c = a(i(5132)),
                l = a(i(5137)),
                d = a(i(5138)),
                u = a(i(5178)),
                h = a(i(5179)),
                p = a(i(5181)),
                f = i(5238),
                m = i(5243),
                v = i(5253),
                g = i(5262);
            s.default.use(n.default);
            var b = new n.default({
                scrollBehavior: () => ({
                    x: 0,
                    y: 0
                }),
                routes: [{
                    path: "/entry",
                    name: "entry-page",
                    component: f.Entry,
                    props: !0,
                    children: [{
                        path: "login",
                        name: "login-page",
                        component: f.Login,
                        meta: .1
                    }, {
                        path: "restore",
                        name: "restore-page",
                        component: f.Restore,
                        meta: .2
                    }, {
                        path: "create",
                        name: "create-page",
                        component: f.Create,
                        meta: .3
                    }]
                }, {
                    path: "/main",
                    name: "main-page",
                    component: r.default,
                    children: [{
                        path: ":ticker",
                        name: "main-with-tickers",
                        component: r.default
                    }]
                }, {
                    path: "/portfolio",
                    name: "portfolio-page",
                    component: h.default
                }, {
                    path: "/history",
                    name: "history-page",
                    component: c.default
                }, {
                    path: "/settings",
                    component: u.default,
                    children: [{
                        path: "",
                        name: "membership-tab",
                        component: g.MembershipTab,
                        meta: 1.1
                    }, {
                        path: "change-password",
                        name: "change-password-tab",
                        component: g.SecurityTab,
                        meta: 1.3
                    }, {
                        path: "private-keys",
                        name: "private-keys-tab",
                        component: g.PrivateKeys,
                        meta: 1.4
                    }]
                }, {
                    path: "/invite",
                    component: p.default,
                    name: "invite-friends"
                }, {
                    path: "/support",
                    name: "support-page",
                    component: l.default
                }, {
                    path: "/exchange",
                    component: m.Exchange,
                    children: [{
                        path: "",
                        name: "exchange-basic",
                        component: m.ExchangeBasic
                    }, {
                        path: "/exchange/history",
                        name: "exchange-history",
                        component: m.ExchangeHistory
                    }]
                }, {
                    path: "/simplex",
                    component: v.SimplexMain,
                    children: [{
                        path: "",
                        name: "simplex-page",
                        component: v.SimplexExchange,
                        children: [{
                            path: ":tickerToSend/:walletToReceive",
                            name: "simplex-with-tickers",
                            component: v.SimplexExchange,
                            children: [{
                                path: ":value",
                                name: "simplex-with-tickers-value",
                                component: v.SimplexExchange
                            }]
                        }]
                    }, {
                        path: "/simplex/history",
                        name: "simplex-history-tab",
                        component: v.SimplexHistory
                    }, {
                        path: "/simplex/webview",
                        name: "simplex-webview-tab",
                        component: v.SimplexWebview
                    }]
                }, {
                    path: "/staking",
                    name: "staking-page",
                    component: d.default,
                    children: [{
                        path: ":ticker",
                        name: "staking-with-tickers",
                        component: d.default
                    }]
                }, {
                    path: "/nft",
                    name: "nft-page",
                    component: o.default
                }, {
                    path: "*",
                    redirect: "/entry"
                }]
            });
            t.default = b
        },
        4584: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(751),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1264),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5107: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(789),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1300),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5132: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(833),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1304),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5137: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(837),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1305),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5138: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(838),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1346),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5178: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(879),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1347),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5179: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(880),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1349),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5181: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(882),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1356),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5182: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(883),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1350),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5183: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(884),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1355),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5184: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(885),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1353),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5237: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(888),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1354),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5238: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Create", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "Entry", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "Login", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "Restore", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            });
            var s = a(i(5239)),
                n = a(i(5240)),
                o = a(i(5241)),
                r = a(i(5242))
        },
        5239: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(889),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1357),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5240: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(890),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1358),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5241: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(891),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1360),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5242: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(893),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1361),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5243: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Exchange", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "ExchangeBasic", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "ExchangeHistory", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var s = a(i(5244)),
                n = a(i(5246)),
                o = a(i(5248))
        },
        5244: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(894),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1363),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5246: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(896),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1369),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5248: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(902),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1371),
                r = i(3);
            var c = function(e) {
                    i(5249)
                },
                l = Object(r.a)(s.a, o.a, o.b, !1, c, "data-v-11417710", null);
            t.default = l.exports
        },
        5249: function(e, t, i) {
            var a = i(5250);
            a.__esModule && (a = a.default), "string" == typeof a && (a = [
                [e.i, a, ""]
            ]), a.locals && (e.exports = a.locals);
            (0, i(50).default)("869b285e", a, !0, {})
        },
        5250: function(e, t, i) {
            (e.exports = i(49)(!1)).push([e.i, "\n.adapted-loader[data-v-11417710]{padding-top:3ex;text-align:center\n}\n", ""])
        },
        5253: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "SimplexExchange", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "SimplexHistory", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "SimplexMain", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "SimplexWebview", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            });
            var s = a(i(5254)),
                n = a(i(5256)),
                o = a(i(5260)),
                r = a(i(5261))
        },
        5254: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(904),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1373),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5256: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(906),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1375),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5260: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(908),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1376),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5261: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(909),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1377),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5262: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "MembershipTab", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "PrivateKeys", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "SecurityTab", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            });
            var s = a(i(5263)),
                n = a(i(5266)),
                o = a(i(5267))
        },
        5263: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(910),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1380),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5266: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(913),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1381),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5267: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(914),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(e) {
                i.d(t, e, (function() {
                    return a[e]
                }))
            }(n);
            var o = i(1382),
                r = i(3),
                c = Object(r.a)(s.a, o.a, o.b, !1, null, null, null);
            t.default = c.exports
        },
        5270: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "activeWalletsList", {
                enumerable: !0,
                get: function() {
                    return T.default
                }
            }), Object.defineProperty(t, "addresses", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(t, "analytics", {
                enumerable: !0,
                get: function() {
                    return b.default
                }
            }), Object.defineProperty(t, "bus", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "buy", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "cashback", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(t, "electron", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "exchanges", {
                enumerable: !0,
                get: function() {
                    return g.default
                }
            }), Object.defineProperty(t, "history", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "inviteFriends", {
                enumerable: !0,
                get: function() {
                    return w.default
                }
            }), Object.defineProperty(t, "membership", {
                enumerable: !0,
                get: function() {
                    return y.default
                }
            }), Object.defineProperty(t, "platformVersion", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "rates", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "reviews", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(t, "simplexDb", {
                enumerable: !0,
                get: function() {
                    return v.default
                }
            }), Object.defineProperty(t, "staking", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "storage", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "wallets", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            });
            var s = a(i(5271)),
                n = a(i(5272)),
                o = a(i(5273)),
                r = a(i(5274)),
                c = a(i(5275)),
                l = a(i(5276)),
                d = a(i(5277)),
                u = a(i(5278)),
                h = a(i(5279)),
                p = a(i(5280)),
                f = a(i(5281)),
                m = a(i(5282)),
                v = a(i(5283)),
                g = a(i(5284)),
                b = a(i(5285)),
                y = a(i(5367)),
                w = a(i(5368)),
                T = a(i(5369))
        },
        5271: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $bus: {
                        get: () => s
                    }
                })
            };
            const s = new(a(i(187)).default)
        },
        5272: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $electron: {
                        get: () => s.default
                    }
                })
            };
            var s = a(i(298))
        },
        5273: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $buy: {
                        get: () => a.Buy
                    }
                })
            };
            var a = i(38)
        },
        5274: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $platformVersion: {
                        get: () => a.PlatformVersion
                    }
                })
            };
            var a = i(38)
        },
        5275: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $rates: {
                        get: () => a.Rates
                    }
                })
            };
            var a = i(38)
        },
        5276: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $staking: {
                        get: () => a
                    }
                })
            };
            const a = new(i(38).Stakings)
        },
        5277: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $history: {
                        get: () => a.History
                    }
                })
            };
            var a = i(38)
        },
        5278: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $storage: {
                        get: () => n
                    }
                })
            };
            var a = i(38);
            const s = new class LocalStorageWrapper {
                    constructor() {
                        this.storage = localStorage
                    }
                    getItem(e, t, i) {
                        try {
                            const i = this.storage.getItem(e);
                            if (null === i) throw new Error("Key is not exists");
                            t(i)
                        } catch (e) {
                            i(e)
                        }
                    }
                    setItem(e, t, i, a) {
                        try {
                            i(this.storage.setItem(e, t))
                        } catch (e) {
                            a(e)
                        }
                    }
                    remove(e, t) {
                        t(this.storage.removeItem(e))
                    }
                },
                n = new a.SecureStorage(s)
        },
        5279: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $addresses: {
                        get: () => new a.Addresses(e.prototype.$storage)
                    }
                })
            };
            var a = i(38)
        },
        5280: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $wallets: {
                        get: () => a
                    }
                })
            };
            const a = i(38).Wallets.getInstance();
            a.initialized = a.initialize()
        },
        5281: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $reviews: {
                        get: () => a
                    }
                })
            };
            const a = new(i(38).Reviews)
        },
        5282: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $cashback: {
                        get() {
                            return a.Cashback.setCashbackWallet(this.$wallets.findWallet("AWC")), a.Cashback
                        }
                    }
                })
            };
            var a = i(38)
        },
        5283: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $simplexDb: {
                        get: () => a
                    }
                })
            };
            const a = new(i(38).SimplexDb)
        },
        5284: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $exchanges: {
                        get: () => a
                    }
                })
            };
            const a = new(i(38).Exchanges)
        },
        5285: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $ga: {
                        get: () => s
                    }
                })
            };
            const s = new(a(i(5286)).default)("UA-120528918-1")
        },
        5367: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $membership: {
                        get: () => new a.Membership(e.prototype.$wallets)
                    }
                })
            };
            var a = i(38)
        },
        5368: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $inviteFriends: {
                        get: () => a.inviteFriendsProgram
                    }
                })
            };
            var a = i(38)
        },
        5369: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                Object.defineProperties(e.prototype, {
                    $activeWalletsList: {
                        get: () => a.ActiveWalletsList
                    }
                })
            };
            var a = i(38)
        },
        5370: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                methods: {
                    $address(e) {
                        const {
                            address: t = null
                        } = this.$wallets.getWallet(e);
                        return t
                    },
                    debounce(e, t = 500) {
                        this.timerDebounce && clearTimeout(this.timerDebounce), this.timerDebounce = setTimeout(e, t)
                    },
                    getFeeTicker(e) {
                        const {
                            ticker: t,
                            deprecatedParent: i
                        } = e;
                        return ["VET", "VTHO"].includes(t) ? "VTHO" : ["NEO", "GAS"].includes(t) ? "GAS" : ["ONT", "ONG"].includes(t) && "BSC" !== this.coin.deprecatedParent ? "ONG" : e.getFeeTicker ? e.getFeeTicker() : i
                    },
                    filterSimilarsByKey: (e, t = "id") => e.reduce((e, i) => e.find(e => e[t] === i[t]) ? e : [...e, i], [])
                }
            };
            t.default = a
        },
        751: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(31),
                s = i(4585),
                n = {
                    name: "NFT",
                    components: {
                        NFTInfo: s.NFTInfo,
                        NFTEmpty: s.NFTEmpty,
                        NFTGallery: s.NFTGallery,
                        NFTReceive: s.NFTReceive,
                        NFTSendToken: s.NFTSendToken
                    },
                    data: () => ({
                        isLoading: !0,
                        selectedNFT: null,
                        showInfoPopup: !1,
                        showReceivePopup: !1,
                        showSendPopup: !1
                    }),
                    computed: {
                        ...(0, a.mapGetters)(["allNft"]),
                        isOpenPopup() {
                            return !0 === this.showInfoPopup || !0 === this.showReceivePopup || !0 === this.showSendPopup
                        }
                    },
                    mounted() {
                        this.setNFT({
                            isInitUpdate: !0,
                            isStopUpdate: !1
                        }), this.isLoading = !1, this.$bus.$on("update::nft::list::wallet", this.setNFT)
                    },
                    beforeDestroy() {
                        this.setNFT({
                            isInitUpdate: !1,
                            isStopUpdate: !0
                        }), this.$bus.$off("update::nft::list::wallet", this.setNFT)
                    },
                    methods: {
                        ...(0, a.mapActions)(["setNFT"]),
                        closeAll() {
                            this.showSendPopup = !1, this.showInfoPopup = !1
                        },
                        toggleReceivePopup() {
                            this.showReceivePopup = !this.showReceivePopup
                        },
                        toggleSendPopup() {
                            this.showSendPopup = !this.showSendPopup
                        },
                        toggleInfo(e) {
                            e && (this.selectedNFT = this.allNft.find(({
                                id: t
                            }) => t === e), this.showInfoPopup = !0)
                        }
                    }
                };
            t.default = n
        },
        789: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(31),
                n = a(i(5108)),
                o = a(i(5128)),
                r = a(i(5129));
            var c = {
                name: "MainPage",
                components: {
                    RefreshButton: o.default,
                    TableCoins: n.default,
                    TokenAddTabs: r.default
                },
                data() {
                    return {
                        showTokenPopup: !1,
                        coinTokenPopup: this.$wallets.getWallet("ETH", "atomic"),
                        isEditToken: !1,
                        isLoading: !1,
                        updateBalancesTimeout: null,
                        updateTransactionsTimeout: null
                    }
                },
                computed: {
                    ...(0, s.mapGetters)(["fiatRate", "isUpdatingFiat", "alwaysExcludedCoins"])
                },
                async beforeMount() {
                    if (!localStorage.getItem("WALLET_EXCLUDED_COINS")) {
                        const e = this.$wallets.getHiddenWallets().map(({
                            id: e
                        }) => e).concat(this.alwaysExcludedCoins);
                        this.setWalletExcludedCoins(e)
                    }
                    if (this.$route.query && this.$route.query.initAutoUpdates) {
                        const {
                            doNotCheckActivation: e
                        } = this.$route.query;
                        setTimeout(() => {
                            this.$wallets.initUpdateBalances(e), this.$wallets.initUpdateTransactions(e), this.setNFT({
                                isInitUpdate: !0,
                                isStopUpdate: !0
                            })
                        }, 3e3)
                    } else this.updateBalancesTimeout = setTimeout(() => {
                        this.updateBalances()
                    }, 3e3);
                    this.setNotifyTree(), this.setCompletedReason()
                },
                beforeDestroy() {
                    clearTimeout(this.updateBalancesTimeout), clearTimeout(this.updateTransactionsTimeout)
                },
                methods: {
                    ...(0, s.mapActions)(["setNFT", "updateRates", "setNotifyTree", "setCompletedReason", "setWalletExcludedCoins"]),
                    loadRatesStartHandler(e) {
                        this.isLoading = !0, this.getRatesFromDb(e), this.fetchRatesFromNet()
                    },
                    loadRatesFinishHandler() {
                        this.isLoading = !1
                    },
                    editToken(e) {
                        this.showTokenPopup = !0, "" !== e && (this.isEditToken = !0, this.coinTokenPopup = e)
                    },
                    toggleTokenPopup() {
                        this.showTokenPopup = !this.showTokenPopup
                    },
                    closeTokenPopup() {
                        this.showTokenPopup = !1, this.isEditToken = !1, this.coinTokenPopup = this.$wallets.getWallet("ETH", "atomic")
                    },
                    async updateBalances(e = !1) {
                        this.isLoading || (this.isLoading = !0, await this.$wallets.updateBalances(), e && this.$ga.event("User Actions", "Update balance", {
                            clientID: this.$ga.customParams.uid
                        }), this.isLoading = !1)
                    },
                    async getRatesFromDb(e) {
                        const t = this.$wallets.getTickers(),
                            i = await this.$rates.getRatesFromDb(e);
                        let a = {
                            [this.fiatRate]: {}
                        };
                        i.forEach(({
                            ticker: e,
                            fiat: i,
                            rate: s,
                            change: n,
                            supply: o,
                            volume: r,
                            marketCap: c
                        }) => {
                            let l = [];
                            if ("TRX-USDT" !== e && "TRX" !== e || (l[0] = e), "TRX-USDT" === e ? l[1] = "USDT" : l = t.filter(t => t === e), i === this.fiatRate)
                                for (let e = 0; e < l.length; e += 1) {
                                    const t = this.$wallets.findWallet(l[e]);
                                    if (!t) return;
                                    const i = t.divisibleBalance * s;
                                    t.fiatBalance = i, a[this.fiatRate][t.ticker] = Object.freeze({
                                        rate: s,
                                        supply: o,
                                        volume: r,
                                        change: n,
                                        balance: i,
                                        marketCap: c
                                    })
                                }
                        }), this.updateRates(a), this.$bus.$emit("update::fiat-balance")
                    },
                    async fetchRatesFromNet() {
                        await this.$rates.getRates(Array.from(this.$wallets)), this.getRatesFromDb()
                    }
                }
            };
            t.default = c
        },
        833: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(298),
                n = i(31),
                o = a(i(5133)),
                r = i(224),
                c = i(30),
                l = a(i(362)),
                d = a(i(529)),
                u = a(i(2282)),
                h = a(i(2279)),
                p = a(i(2281)),
                f = a(i(5135)),
                m = a(i(5136)),
                v = a(i(2277));
            var g = {
                name: "HistoryPage",
                components: {
                    Table: l.default,
                    Search: d.default,
                    BuyBitcoin: u.default,
                    FilterPopup: h.default,
                    FilterButton: p.default,
                    ExportButton: f.default,
                    SuccessIconBig: m.default,
                    HistoryTableRow: v.default
                },
                mixins: [c.HistoryMixin],
                data: () => ({
                    txs: [],
                    isEmpty: !0,
                    filter: "",
                    settingsState: !1,
                    page: 1,
                    updater: null,
                    isSavedTransactionPopup: !1,
                    header: [{
                        slot: "header-row-1"
                    }, {
                        slot: "header-row-2"
                    }]
                }),
                computed: {
                    ...(0, n.mapGetters)(["historyExcludedCoins", "historyExcludedDirections", "historyExcludedTypes"]),
                    highlightSetting() {
                        return this.historyExcludedCoins.length > 0 || this.historyExcludedDirections.length > 0 || this.historyExcludedTypes.length > 0
                    },
                    transactions() {
                        const e = this.filter.toLowerCase(),
                            t = this.txs.filter(({
                                amount: e
                            }) => "0" !== e).sort((e, t) => e.txType > t.txType ? 1 : -1).sort((e, t) => t.datetime.getTime() > e.datetime.getTime() ? 1 : -1),
                            i = (0, o.default)(t, e => {
                                const t = new Date(e.datetime) > Date.now(),
                                    i = e.direction ? "Received" : "Sent",
                                    a = this.historyExcludedCoins.includes(e.deprecatedParent),
                                    s = this.historyExcludedDirections.indexOf(i) >= 0,
                                    n = this.historyExcludedTypes.indexOf(e.title) >= 0;
                                return !(t || a || s || n)
                            }),
                            a = (0, o.default)(i, t => 0 === e.length || (t.ticker.toLowerCase().indexOf(e) >= 0 || t.name.toLowerCase().indexOf(e) >= 0));
                        return a.length > 20 ? a.slice(0, 20 * this.page) : a
                    },
                    coinsInvolvedInHistory() {
                        const e = [...new Set(this.$wallets.transactions.map(e => e.ticker))];
                        return Array.from(this.$wallets).filter(t => -1 !== e.indexOf(t.ticker) && !r.DISABLED_COINS.includes(t.deprecatedParent))
                    }
                },
                watch: {
                    txs(e) {
                        this.isEmpty = 0 === e.length
                    }
                },
                beforeMount() {
                    this.updateHistory(), this.refreshHistory(!0)
                },
                mounted() {
                    this.$bus.$on("socket::newtx", this.updateHistory), this.$bus.$on("socket::newtx::outgoing", this.updateHistory), this.$bus.$on("socket::tx::confirmed", this.loadTxs)
                },
                beforeDestroy() {
                    this.$bus.$off("socket::newtx", this.updateHistory), this.$bus.$off("socket::newtx::outgoing", this.updateHistory), this.$bus.$off("socket::tx::confirmed", this.loadTxs), clearTimeout(this.updater)
                },
                methods: {
                    ...(0, n.mapActions)(["setHistoryExcludedCoins", "setHistoryExcludedTypes", "setHistoryExcludedDirections"]),
                    async exportHistory() {
                        const e = this.txs.map(e => {
                                let t = "-",
                                    i = "-";
                                try {
                                    const a = this.$wallets.getWallet(e.deprecatedParent),
                                        {
                                            explorer: s
                                        } = a,
                                        {
                                            webUrl: n
                                        } = s;
                                    i = this.$wallets.getWallet(e.walletid).address, t = n && e.txid ? `${n}${e.txid}` : "-"
                                } catch (e) {
                                    console.warn(e)
                                }
                                const a = i || "-",
                                    s = e.direction;
                                return {
                                    DATE: new Intl.DateTimeFormat("en-GB", {
                                        dateStyle: "long",
                                        timeStyle: "long"
                                    }).format(e.datetime),
                                    TYPE: e.txType || "-",
                                    OUTAMOUNT: s ? "-" : e.amount,
                                    OUTCURRENCY: s ? "-" : e.ticker,
                                    FEEAMOUNT: e.fee,
                                    FEECURRENCY: e.feeTicker,
                                    OUTTXID: s ? e.otherSideAddress : a,
                                    OUTTXURL: t || "-",
                                    INAMOUNT: s ? e.amount : "-",
                                    INCURRENCY: s ? e.ticker : "-",
                                    INTXID: s ? a : e.otherSideAddress,
                                    INTXURL: s && t || "-",
                                    ORDERID: e.txid,
                                    ADDRESSTO: s ? a : e.otherSideAddress
                                }
                            }),
                            t = `"${Object.keys(e[0]).join('","')}"\n      ${e.map(e=>`"${Object.values(e).join('","')}"`).join("\n")}`,
                            i = `history-atomicwallet-${this.$moment(new Date).format("DD.MM.YYYY")}.csv`;
                        this.isSavedTransactionPopup = await s.ipcRenderer.invoke("exportTransactions", {
                            fileName: i,
                            body: t
                        })
                    },
                    acceptFilter(e) {
                        this.setHistoryExcludedCoins(e.excludedCoins), this.setHistoryExcludedTypes(e.types), this.setHistoryExcludedDirections(e.directions), this.settingsState = !1
                    },
                    async refreshHistory(e) {
                        const t = await this.$history.selectTransactions().catch(console.log);
                        this.$wallets.loadTransactions(t), this.updateHistory(), e && (this.updater = setTimeout(() => {
                            this.refreshHistory()
                        }, 15e3))
                    },
                    async loadTxs(e) {
                        const {
                            ticker: t = null
                        } = e, i = t || e, a = await this.$history.selectTransactions({
                            ticker: i
                        });
                        this.$wallets.loadTransactions(a), this.updateHistory()
                    },
                    async updateHistory() {
                        this.txs = Object.freeze(this.$wallets.transactions.map(e => Object.freeze(e))), setTimeout(() => {
                            this.txs = Object.freeze(this.$wallets.transactions.map(e => Object.freeze(e)))
                        }, 5e3)
                    },
                    handleScrollEnd(e) {
                        e.target.scrollHeight - (e.target.offsetHeight + e.target.scrollTop) > 100 || this.txs.length >= 20 * this.page && (this.page += 1)
                    }
                }
            };
            t.default = g
        },
        837: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, i(1167);
            var a = {
                name: "Support",
                data: () => ({
                    enableMonitoring: !0,
                    copied: !1
                }),
                computed: {
                    truncateHashId() {
                        return `${this.$wallets.hash.substring(0,20)}...${this.$wallets.hash.substring(this.$wallets.hash.length-20)}`
                    },
                    contactSupport: () => ({
                        tags: ["general_tag"]
                    })
                },
                watch: {
                    enableMonitoring(e) {
                        localStorage.setItem("isMonitoringEnabled", e)
                    }
                },
                beforeMount() {
                    const e = localStorage.getItem("isMonitoringEnabled");
                    this.enableMonitoring = !e || /true/i.test(e)
                },
                methods: {
                    copyID() {
                        this.$electron.clipboard.writeText(this.$wallets.hash), this.copied = !0;
                        setTimeout(() => {
                            this.copied = !1
                        }, 1e3)
                    }
                }
            };
            t.default = a
        },
        838: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(360)),
                n = a(i(61)),
                o = i(31),
                r = a(i(362)),
                c = a(i(529)),
                l = a(i(83)),
                d = a(i(5139)),
                u = a(i(359)),
                h = a(i(5140));
            const p = {
                    ONT: "ONG",
                    NEO: "GAS",
                    VET: "VTHO",
                    WINK: "WIN"
                },
                f = ["VET", "ALGO", "KMD", "NEO"],
                m = {
                    WIN: "WINK"
                };
            var v = {
                name: "StakingPage",
                components: {
                    Table: r.default,
                    CoinIcon: l.default,
                    StakingEmpty: d.default,
                    StakingPopupTabs: h.default,
                    AtomicNotifyPoint: u.default,
                    Search: c.default
                },
                data: () => ({
                    isStakingExchangePopup: !1,
                    activeSortField: "",
                    isSortASC: !1,
                    updatedTable: Date.now(),
                    updateTableIntervalID: null,
                    updateNearBalancesIntervalID: null,
                    activeStaking: null,
                    searchInput: "",
                    header: [{
                        key: "name",
                        slot: "header-row-1"
                    }, {
                        title: "Available",
                        key: "fiatBalance"
                    }, {
                        title: "Staked",
                        key: "fiatStaked"
                    }, {
                        title: "Yearly yield",
                        key: "reward"
                    }]
                }),
                computed: {
                    ...(0, o.mapGetters)(["fiatRate", "coinRate", "fiatCharacter", "balanceSummary", "stakingSettings", "isUpdatingFiat"]),
                    isEmptyScreen() {
                        return !1 === this.isUpdatingFiat && 0 === Number(this.balanceSummary(this.fiatRate))
                    },
                    tableItems() {
                        const e = this.stakingSettings.map(({
                            ticker: e,
                            name: t,
                            reward: i,
                            displayTicker: a,
                            tags: s = [],
                            emptyTag: o = null,
                            isDefaultBuyCrypto: r = !1,
                            id: c = null
                        }) => {
                            const l = c ? this.$wallets.getWallet(c) : this.$wallets.findWallet(e);
                            let d = "0",
                                u = "0",
                                h = "0",
                                p = "0";
                            if (l) {
                                if (f.includes(e)) {
                                    var v, g, b;
                                    const e = +(null !== (v = null === (g = l.balances) || void 0 === g ? void 0 : g.available) && void 0 !== v ? v : null !== (b = null == l ? void 0 : l.divisibleBalance) && void 0 !== b ? b : 0);
                                    d = String(this.$options.filters.formatFiatV2(e, this.fiatRate))
                                } else {
                                    var y, w, T, x, C, _;
                                    d = null !== (y = null !== (w = null !== (T = null === (x = l.getAvailableBalance) || void 0 === x ? void 0 : x.call(l).toCurrency()) && void 0 !== T ? T : null === (C = l.balances) || void 0 === C ? void 0 : C.available) && void 0 !== w ? w : null === (_ = l.balances) || void 0 === _ ? void 0 : _.availableForStake) && void 0 !== y ? y : "0"
                                }
                                var k, S, P, $, E, A, R, I, O, D, N, F, B, W, M;
                                if (["ZIL", "ADA", "SOL"].includes(e)) h = null !== (k = null !== (S = null == l || null === (P = l.toCurrencyUnit) || void 0 === P ? void 0 : P.call(l, h)) && void 0 !== S ? S : h) && void 0 !== k ? k : "0";
                                else h = null !== ($ = null !== (E = null !== (A = null !== (R = null !== (I = null === (O = l.getStakedBalance) || void 0 === O || null === (D = O.call(l)) || void 0 === D ? void 0 : D.toCurrency()) && void 0 !== I ? I : null === (N = l.balances) || void 0 === N ? void 0 : N.staked) && void 0 !== R ? R : null === (F = l.balances) || void 0 === F || null === (B = F.staking) || void 0 === B ? void 0 : B.total) && void 0 !== A ? A : null === (W = l.balances) || void 0 === W ? void 0 : W.frozen) && void 0 !== E ? E : null === (M = l.balances) || void 0 === M ? void 0 : M.total) && void 0 !== $ ? $ : "0";
                                const t = new n.default(this.coinRate(this.fiatRate, l).rate);
                                u = t.multipliedBy(d), p = t.multipliedBy(h)
                            }
                            const j = s.filter(e => "new" !== e);
                            return {
                                ticker: m[e] || e,
                                tags: j,
                                name: t,
                                reward: i,
                                staked: h,
                                balance: d,
                                fiatStaked: p,
                                fiatBalance: u,
                                displayTicker: a,
                                emptyTag: o,
                                isDefaultBuyCrypto: r,
                                walletInstance: l,
                                updatedTable: this.updatedTable
                            }
                        }).filter(({
                            ticker: e,
                            name: t
                        }) => !this.searchInput || [e, t].some(e => e.toLowerCase().startsWith(this.searchInput.toLowerCase())));
                        return this.activeSortField ? this.isSortASC ? (0, s.default)(e).asc(e => +e[this.activeSortField]) : (0, s.default)(e).desc(e => +e[this.activeSortField]) : e
                    }
                },
                async beforeMount() {
                    this.updateTableIntervalID = setInterval(() => {
                        this.updatedTable = Date.now()
                    }, 6e4), this.stakingSettings.find(({
                        ticker: e
                    }) => "NEAR" === e) && (await this.getNearBalances(), this.updateNearBalancesIntervalID = setInterval(async () => {
                        await this.getNearBalances()
                    }, 6e4), this.$bus.$on("get-near-balances", this.getNearBalances));
                    const e = this.$router.currentRoute.params.ticker && this.$router.currentRoute.params.ticker.toUpperCase();
                    if (e) {
                        const t = this.tableItems.find(t => t.ticker === e || p[t.ticker] === e);
                        this.openExchangePopup(t)
                    }
                },
                beforeDestroy() {
                    clearInterval(this.updateTableIntervalID), clearInterval(this.updateNearBalancesIntervalID), this.$bus.$off("get-near-balances", this.getNearBalances)
                },
                methods: {
                    async getNearBalances() {
                        const e = this.$wallets.findWallet("NEAR");
                        if (e) try {
                            await e.getStakingInfo()
                        } catch (e) {
                            console.error(e)
                        }
                    },
                    handleClick(e) {
                        this.$store.commit("ADD_COMPLETED_REASON", "staking-" + e.ticker), this.openExchangePopup(e)
                    },
                    openExchangePopup(e) {
                        this.Texts.setTicker("AWC-986" === e.ticker ? "AWC" : e.ticker), this.activeStaking = e
                    },
                    closeExchangePopup() {
                        this.activeStaking = null
                    },
                    sortByField(e) {
                        this.activeSortField === e ? this.isSortASC = !this.isSortASC : (this.activeSortField = e, this.isSortASC = !0)
                    }
                }
            };
            t.default = v
        },
        879: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = {
                name: "SettingsPage",
                components: {
                    AtomicNotifyPoint: a(i(359)).default
                },
                data: () => ({
                    tabs: [{
                        title: "Membership",
                        name: "membership-tab"
                    }, {
                        title: "Security",
                        name: "change-password-tab"
                    }, {
                        title: "Private Keys",
                        name: "private-keys-tab"
                    }]
                })
            };
            t.default = s
        },
        880: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(360)),
                n = i(31),
                o = i(30),
                r = a(i(2262)),
                c = a(i(362)),
                l = a(i(2276)),
                d = a(i(2274)),
                u = a(i(5180)),
                h = a(i(2282)),
                p = a(i(2280));
            var f = {
                name: "Portfolio",
                components: {
                    Coin: r.default,
                    Table: c.default,
                    CoinInfo: l.default,
                    SendCoin: d.default,
                    DonutChart: u.default,
                    BuyBitcoin: h.default,
                    ReceiveCoin: p.default
                },
                mixins: [o.WalletsTables],
                data: () => ({
                    header: [{
                        key: "name",
                        title: "Name"
                    }, {
                        key: "balance",
                        title: "Balance"
                    }, {
                        key: "value",
                        title: "Value"
                    }, {
                        key: "price",
                        title: "Price"
                    }, {
                        key: "change",
                        title: "24h"
                    }, {
                        key: "portfolio",
                        title: "Portfolio"
                    }, {
                        key: "marketCap",
                        title: "M. cap"
                    }, {
                        key: "chart",
                        title: "7 days chart"
                    }],
                    activeSortField: "portfolio",
                    isSortASC: !1,
                    excludedFields: ["chart"]
                }),
                computed: {
                    ...(0, n.mapGetters)(["fiatCharacter", "walletExcludedCoins"]),
                    filterWallets() {
                        return this.walletsState.filter(({
                            divisibleBalance: e,
                            ticker: t,
                            id: i
                        }) => {
                            const a = this.walletExcludedCoins.includes(i),
                                s = this.getCoinBalance(e, t, i);
                            return !a && s > 0
                        })
                    },
                    sortedTableItems() {
                        const e = this.walletsForTable.slice(),
                            t = ["name"].includes(this.activeSortField);
                        return this.isSortASC ? (0, s.default)(e).asc(e => t ? e[this.activeSortField] : e.isPlaceholder ? 1e12 : Number(e[this.activeSortField])) : (0, s.default)(e).desc(e => t ? e[this.activeSortField] : e.isPlaceholder ? -1e12 : Number(e[this.activeSortField]))
                    },
                    chartData() {
                        const e = (0, s.default)(this.walletsForTable).asc(e => Number(e.portfolio)).reverse(),
                            {
                                fiteredTableItems: t,
                                otherPercents: i,
                                otherBalance: a
                            } = this.filteredPortfolio(e),
                            n = t.map(({
                                name: e,
                                value: t,
                                ticker: i,
                                balance: a,
                                portfolio: s,
                                fixedBalance: n,
                                id: o,
                                contract: r
                            }) => ({
                                name: e,
                                value: t,
                                ticker: i,
                                id: o,
                                balance: a,
                                portfolio: s,
                                fixedBalance: n,
                                contract: r
                            }));
                        return i > 0 && n.push({
                            name: "Other",
                            value: a,
                            ticker: "",
                            balance: "",
                            portfolio: 1.6
                        }), n.sort((e, t) => Number(e.portfolio) - Number(t.portfolio)).reverse()
                    }
                },
                methods: {
                    filteredPortfolio(e) {
                        const t = [];
                        let i = 0,
                            a = 0;
                        return e.forEach(e => {
                            Number(e.portfolio) < 1.6 ? (i += Number(e.portfolio), a += Number(e.value)) : t.push(e)
                        }), {
                            fiteredTableItems: t,
                            otherPercents: i,
                            otherBalance: a
                        }
                    },
                    sortByField(e) {
                        this.excludedFields.includes(e) || (this.activeSortField === e ? this.isSortASC = !this.isSortASC : (this.isSortASC = !0, this.activeSortField = e))
                    }
                }
            };
            t.default = f
        },
        882: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(5182)),
                n = a(i(5183)),
                o = i(31),
                r = {
                    name: "InviteFriends",
                    components: {
                        AtomicLoader: a(i(2148)).default,
                        InviteDashboard: n.default,
                        InviteLanding: s.default
                    },
                    data: () => ({
                        isLoading: !0
                    }),
                    computed: {
                        ...(0, o.mapGetters)(["isAffiliate", "affiliateStat", "isReferral"]),
                        isLanding() {
                            return !this.isAffiliate && !this.isLoading
                        }
                    },
                    async mounted() {
                        this.isAffiliate || (this.isLoading = !0, await this.setAffiliate()), this.isLoading = !1, this.isReferral || (this.isLoading = !0, await this.setReferral(), this.isLoading = !1)
                    },
                    methods: {
                        ...(0, o.mapActions)(["setAffiliate", "setReferral"])
                    }
                };
            t.default = r
        },
        883: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(2255)),
                n = i(31),
                o = {
                    name: "InviteLanding",
                    components: {
                        AtomicLinkedCard: s.default
                    },
                    data: () => ({
                        cardsOptions: [{
                            icon: "user_add_badge_outline",
                            headerText: "Join the program",
                            bodyText: "Get your referral link and unique promo code"
                        }, {
                            icon: "users_outline",
                            headerText: "Invite friends",
                            bodyText: "Ask your friend to join Atomic Wallet via your link "
                        }, {
                            icon: "coins_stacks_2_outline",
                            headerText: "Earn rewards",
                            bodyText: "You both get rewards for your friend’s exchanges"
                        }]
                    }),
                    computed: {},
                    mounted() {
                        this.setAffiliateInfo()
                    },
                    methods: {
                        ...(0, n.mapActions)(["setAffiliate", "setAffiliateInfo"]),
                        async makeEarning() {
                            await this.$inviteFriends.registerAsAffiliate(), await this.setAffiliate()
                        }
                    }
                };
            t.default = o
        },
        884: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(2147)),
                n = a(i(5184)),
                o = a(i(5237)),
                r = i(31),
                c = {
                    name: "InviteDashboard",
                    components: {
                        AtomicTabs: s.default,
                        BonusTab: o.default,
                        DashboardTab: n.default
                    },
                    data: () => ({
                        activeTabIndex: 0
                    }),
                    computed: {
                        ...(0, r.mapGetters)(["isReferral"])
                    }
                };
            t.default = c
        },
        885: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(204),
                n = a(i(5185)),
                o = i(684),
                r = i(31);
            var c = {
                name: "DashboardTab",
                components: {
                    ClipboardWrap: n.default,
                    AtomicButton: s.AtomicButton,
                    AtomicInfoGroup: s.AtomicInfoGroup,
                    AtomicModal: s.AtomicModal,
                    AtomicLink: s.AtomicLink
                },
                data: () => ({
                    socialNetworks: [{
                        icon: "socials",
                        network: "facebook"
                    }, {
                        icon: "socials-1",
                        network: "twitter"
                    }, {
                        icon: "socials-2",
                        network: "telegram"
                    }, {
                        icon: "socials-3",
                        network: "reddit"
                    }, {
                        icon: "socials-4",
                        network: "whatsapp"
                    }],
                    copied: !1,
                    socialLinksModal: !1
                }),
                computed: {
                    ...(0, r.mapGetters)(["affiliateStat", "affiliateInfo"]),
                    promoCode() {
                        return this.affiliateInfo.promoCode
                    },
                    infoGroup() {
                        const {
                            activeReferralCount: e,
                            pendingRewards: t,
                            receivedRewards: i,
                            referralCount: a
                        } = this.affiliateStat, s = e => this.$options.filters.toCurrency(e, {
                            style: "decimal"
                        }) + " USD";
                        return [{
                            label: "Invited friends",
                            value: a,
                            icon: "user_added_outline_28",
                            hintText: "All invited friends who have started using Atomic"
                        }, {
                            label: "Active friends",
                            value: e,
                            icon: "users_outline_28",
                            hintText: "Invited friends with at least one completed exchange"
                        }, {
                            label: "Received rewards",
                            value: s(i),
                            icon: "money_received rewards_outline_28",
                            hintText: "Rewards received for the exchange volume of active friends"
                        }, {
                            label: "Pending rewards",
                            value: s(t),
                            icon: "money_pending rewards_outline_28",
                            hintText: "Rewards for all completed exchanges that will be received next month"
                        }]
                    },
                    link() {
                        return this.affiliateInfo.referralLink
                    }
                },
                created() {
                    this.setAffiliate()
                },
                methods: {
                    ...(0, r.mapActions)(["setAffiliate"]),
                    getIcon: e => i(5191)(`./${e}.svg`),
                    openModal() {
                        this.socialLinksModal = !0
                    },
                    closeModal() {
                        this.socialLinksModal = !1
                    },
                    openShare(e) {
                        const t = (0, o.getSocialLink)(e, this.link, ((e, t, i) => {
                            let a = "";
                            switch (e) {
                                case "telegram":
                                    a = `Install Atomic Wallet app! Exchange, buy, stake, hold crypto in one place. Download the app, use your promo code - ${i} to get rewards.`;
                                    break;
                                default:
                                    a = `Install Atomic Wallet app! Exchange, buy, stake, hold crypto in one place. Download the app: ${t}, use your promo code - ${i} to get rewards.`
                            }
                            return a
                        })(e, this.link, this.promoCode));
                        this.$electron.shell.openExternal(t)
                    },
                    openLinkHowWorks() {
                        this.$electron.shell.openExternal("https://atomicwallet.io/invite-friends/rules")
                    },
                    copyLink() {
                        this.$electron.clipboard.writeText(this.link), this.copied = !0, setTimeout(() => {
                            this.copied = !1
                        }, 1e3)
                    }
                }
            };
            t.default = c
        },
        888: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(2257)),
                n = i(31);
            const o = /[^0-9\.]/gm;
            var r = {
                name: "BonusTab",
                components: {
                    AtomicRewardsBar: s.default
                },
                computed: {
                    ...(0, n.mapGetters)(["exchangeBonus", "isReferral"]),
                    getSteps() {
                        let e = e => e.replace(o, "");
                        return this.exchangeBonus.stages.map(t => ({
                            value: +e(t.volume),
                            reward: +e(t.reward)
                        }))
                    },
                    getScaleLimits() {
                        var e;
                        const t = this.getSteps.length - 1;
                        return {
                            from: 0,
                            to: null === (e = this.getSteps[t]) || void 0 === e ? void 0 : e.value
                        }
                    },
                    valueNum() {
                        return +this.exchangeBonus.currentProgress.replace(o, "")
                    },
                    getCurrentRewardValuePercent() {
                        return +this.exchangeBonus.currentProgress.replace(o, "") / this.getScaleLimits.to * 100
                    }
                },
                mounted() {
                    this.setExchangeBonus()
                },
                methods: {
                    ...(0, n.mapActions)(["setExchangeBonus"]),
                    goToExchange() {
                        this.$router.push("/exchange")
                    }
                }
            };
            t.default = r
        },
        889: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                name: "EntryPage",
                props: {
                    mnemonic: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: () => ({
                    showWarning: !1,
                    nextRoute: ""
                }),
                methods: {
                    showMnemonicWarning(e) {
                        this.showWarning = !0, this.nextRoute = e
                    },
                    closeWarningPopup() {
                        this.showWarning = !1
                    },
                    continueWarningPopup() {
                        this.closeWarningPopup(), this.$router.push(this.nextRoute)
                    }
                }
            };
            t.default = a
        },
        890: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(31),
                n = a(i(76)),
                o = i(30),
                r = {
                    name: "LoginPage",
                    components: {
                        Edit: n.default
                    },
                    mixins: [o.AddressesMixin],
                    props: {
                        mnemonic: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: () => ({
                        loading: !1,
                        password: "",
                        passwordError: ""
                    }),
                    methods: {
                        ...(0, s.mapActions)(["initSimplexTransactions", "setNotifyTree", "setCompletedReason", "initChartData"]),
                        goToRestore() {
                            this.mnemonic ? this.$emit("show-mnemonic-warning", "/entry/restore") : this.$router.push("/entry/restore")
                        },
                        createNewWallet() {
                            this.mnemonic ? this.$emit("show-mnemonic-warning", "/entry/create") : this.$router.push("/entry/create")
                        },
                        async login() {
                            let e;
                            this.$storage.password = this.password;
                            try {
                                if (e = await this.$addresses.get(), 0 === e.length) throw new Error("empty addresses")
                            } catch (e) {
                                return console.error(e), void(this.passwordError = "Wrong password")
                            }
                            try {
                                this.loading = !0;
                                const [t] = await Promise.all([this.$storage.get("general_mnemonic"), this.$wallets.initialized]);
                                this.$wallets.mnemonic = new this.$wallets.BitcoreMnemonic(t), Array.isArray(e) && (await this.$wallets.loadWalletsByKeys(e, this.$bus, this.$wallets.mnemonic.phrase).catch(console.error).finally(() => this.saveWallets()), await Promise.allSettled([this.initSimplexTransactions(), this.setNotifyTree(), this.setCompletedReason(), this.initChartData()]), this.$router.push({
                                    path: "/main",
                                    query: {
                                        initAutoUpdates: "true"
                                    }
                                }))
                            } catch (e) {
                                console.error(e)
                            } finally {
                                this.loading = !1
                            }
                        }
                    }
                };
            t.default = r
        },
        891: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(298),
                n = i(30),
                o = a(i(2285));
            var r = {
                name: "CreatePage",
                components: {
                    SetPassword: o.default
                },
                mixins: [n.DBMixin],
                data: () => ({
                    step: "setpass",
                    seed: "",
                    copied: !1,
                    enableMonitoring: !0
                }),
                watch: {
                    enableMonitoring(e) {
                        localStorage.setItem("isMonitoringEnabled", e)
                    }
                },
                methods: {
                    openWallet() {
                        this.$router.push({
                            path: "/main",
                            query: {
                                initAutoUpdates: "true",
                                doNotCheckActivation: "true"
                            }
                        })
                    },
                    async goBack() {
                        await this.$storage.exists("general_mnemonic").catch(console.log) ? this.$router.push("/entry/login") : this.$router.push("/entry")
                    },
                    goNext(e) {
                        this.seed = e, this.step = "newseed"
                    },
                    copySeed() {
                        let e = this.seed;
                        s.clipboard.writeText(e), this.copied = !0, setTimeout(() => {
                            this.copied = !1
                        }, 800)
                    }
                }
            };
            t.default = r
        },
        892: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(38),
                n = i(31),
                o = a(i(76)),
                r = i(30);
            var c = {
                name: "SetPassword",
                components: {
                    Edit: o.default
                },
                mixins: [r.AddressesMixin, r.DBMixin],
                props: {
                    mnemonic: {
                        type: String,
                        default: ""
                    },
                    isCreateWallet: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: () => ({
                    value: "",
                    affiliateId: "",
                    password: "",
                    passwordConfirm: "",
                    passwordError: "",
                    passwordConfirmError: "",
                    mnemonicError: "",
                    loading: !1,
                    affiliateError: "",
                    repeatPasswordType: "password",
                    showLoaderSpinner: !1
                }),
                computed: {
                    ...(0, n.mapGetters)(["fiatRate"])
                },
                methods: {
                    ...(0, n.mapActions)(["clearState", "clearNotifyStorage", "initSimplexTransactions", "setNotifyTree", "setCompletedReason", "initChartData"]),
                    focusNextEdit() {
                        this.$refs.repeatPasswordRef && this.$refs.repeatPasswordRef.setFocus()
                    },
                    async resetWalletInfo() {
                        localStorage.clear(), this.clearState(), this.clearNotifyStorage(), await this.clearAllTables().catch(e => console.log(e))
                    },
                    changeTypeRepeatPassword(e) {
                        this.repeatPasswordType = e
                    },
                    async validateAffiliate() {
                        if (!this.affiliateId) return !0;
                        return await this.$inviteFriends.getIsPromoCodeExists(this.affiliateId)
                    },
                    async validateForm() {
                        return this.passwordError = "", this.passwordConfirmError = "", this.affiliateError = "", "" === this.password ? (this.passwordError = "Enter your password", this.$refs.passwordRef.setFocus(), !1) : this.passwordConfirm === this.password || (this.passwordConfirmError = "Check your password", this.$refs.repeatPasswordRef.setFocus(), !1)
                    },
                    async generateMnemonic() {
                        await this.$wallets.loadWalletsByMnemonic(void 0, this).catch(e => console.log(e)), this.newWallet()
                    },
                    async registerAsReferal() {
                        this.affiliateId.length && await this.$inviteFriends.registerAsReferral(this.affiliateId)
                    },
                    async restoreWallet() {
                        this.$wallets.validateMnemonic(this.mnemonic.trim().toLowerCase()) && (this.$storage.set("general_mnemonic", this.mnemonic.trim()), await this.$wallets.loadWalletsByMnemonic(this.mnemonic.trim().toLowerCase().replace(/\s+/g, " "), this), this.$router.push({
                            path: "/main",
                            query: {
                                initAutoUpdates: "true"
                            }
                        })), this.loadWallet()
                    },
                    async setPassword() {
                        await this.validateForm() && (this.$storage.password = this.password, this.loading = !0, this.showLoaderSpinner = !0, this.$activeWalletsList.reset(), await this.resetWalletInfo(), await this.$wallets.initialized, await this.$wallets.initialize(), await this.$wallets.initialized, this.showLoaderSpinner = !1, this.mnemonic ? this.restoreWallet() : (await this.generateMnemonic(), await this.registerAsReferal()), await Promise.allSettled([this.initSimplexTransactions(), this.setNotifyTree(), this.setCompletedReason(), this.initChartData()]))
                    },
                    async newWallet() {
                        Promise.all(Array.from(this.$wallets).map(async e => (e instanceof s.Token || (this.$bus.$emit("update", {
                            ticker: e.ticker,
                            alias: e.alias
                        }), "function" == typeof e.createToken && e.tokens && Object.values(e.tokens).forEach(e => {
                            this.$bus.$emit("update", {
                                ticker: e.ticker,
                                alias: e.alias
                            })
                        })), e))).then(() => {
                            this.$emit("goNext", this.$wallets.mnemonic.toString())
                        }).catch(e => {
                            console.log("some catch appeared in NewWallet method"), console.log(e)
                        }).finally(() => {
                            this.$storage.set("general_mnemonic", this.$wallets.mnemonic.phrase), this.saveWallets()
                        })
                    },
                    loadWallet() {
                        Promise.all(Array.from(this.$wallets).map(async e => (e instanceof s.Token || (this.$bus.$emit("update", {
                            ticker: e.ticker,
                            alias: e.alias
                        }), "function" == typeof e.createToken && e.tokens && Object.values(e.tokens).forEach(e => {
                            this.$bus.$emit("update", {
                                ticker: e.ticker,
                                alias: e.alias
                            })
                        })), e))).catch(console.log).finally(() => {
                            this.saveWallets()
                        })
                    }
                }
            };
            t.default = c
        },
        893: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(76)),
                n = a(i(2285));
            var o = {
                name: "RestorePage",
                components: {
                    Edit: s.default,
                    SetPassword: n.default
                },
                data: () => ({
                    step: "restore",
                    mnemonicError: "",
                    restoreseed: ""
                }),
                watch: {
                    restoreseed() {
                        this.restoreseed && this.restoreseed.length > 0 && (this.mnemonicError = "")
                    }
                },
                methods: {
                    async restoreByWords() {
                        12 === this.restoreseed.trim().split(/\s+/).length ? this.$wallets.validateMnemonic(this.restoreseed.trim().toLowerCase()) ? this.step = "setpass" : this.mnemonicError = "Invalid mnemonic" : this.mnemonicError = "Backup Phrase should contain 12 words"
                    },
                    async goBack() {
                        await this.$storage.exists("general_mnemonic").catch(console.log) ? this.$router.push("/entry/login") : this.$router.push("/entry")
                    },
                    goToRestore() {
                        this.step = "restore"
                    }
                }
            };
            t.default = o
        },
        894: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(31),
                n = i(30),
                o = a(i(5245));
            var r = {
                name: "Exchange",
                components: {
                    NewExchangeResult: o.default
                },
                filters: {
                    fixedAmount: function(e) {
                        return Number(Number(e).toFixed(6)).toString()
                    }
                },
                mixins: [n.ExchangeMixin],
                data: () => ({
                    tabs: [{
                        title: "Instant Exchange",
                        path: "/exchange"
                    }, {
                        title: "Order History",
                        path: "/exchange/history"
                    }],
                    isExchangeDetails: !1,
                    coinToSend: null,
                    coinToReceive: null,
                    amountToSend: "",
                    amountToReceive: "",
                    exchangeResult: null,
                    cashback: "",
                    sentHash: "",
                    receivedHash: "",
                    fetchExchangeTransactionsTimeout: null,
                    exchangeStartingValues: {},
                    initTransactionData: {},
                    transactionTimestamp: null,
                    isRefunded: !1
                }),
                computed: {
                    ...(0, s.mapGetters)(["exchangeTransactions"])
                },
                mounted() {
                    this.setBasicStorageTxsEstimated(), this.$bus.$on("close-exchange-basic-popup", this.closeOrderDetails)
                },
                beforeDestroy() {
                    clearTimeout(this.fetchExchangeTransactionsTimeout), this.$bus.$off("close-exchange-basic-popup", this.closeOrderDetails)
                },
                methods: {
                    ...(0, s.mapActions)(["updateExchangeTransactions", "getExchangeTransactions"]),
                    isActive(e) {
                        return "exchange-basic" === this.$route.name && "/exchange" === e
                    },
                    closeOrderDetails() {
                        this.isExchangeDetails = !1
                    },
                    closeSuccessPopup() {
                        this.initTransactionData = {}
                    },
                    closePopups() {
                        this.closeOrderDetails(), this.closeSuccessPopup(), clearTimeout(this.fetchExchangeTransactionsTimeout)
                    },
                    openExchangeDetails(e) {
                        clearTimeout(this.fetchExchangeTransactionsTimeout), this.openOrderDetails(e), this.fetchExchangeTransactionsTimeout = setTimeout(() => this.openExchangeDetails(e), 3e4)
                    },
                    startExchange(e) {
                        const t = {
                            initTime: Date.now(),
                            isCompleted: !1,
                            ...e
                        };
                        this.updateTxEstimatedInLocalStorage(t), this.openExchangeDetails(e)
                    },
                    updateTxEstimatedInLocalStorage(e) {
                        this.setBasicStorageTxsEstimated();
                        let t = JSON.parse(localStorage.getItem("txs::estimated"));
                        if (!Array.isArray(t)) return;
                        const i = t.findIndex(t => t.id === e.id); - 1 === i ? t.unshift(e) : t[i] = e, localStorage.setItem("txs::estimated", JSON.stringify(t))
                    },
                    getTxByIdFromTxEstimatedInLocalStorage(e) {
                        let t = JSON.parse(localStorage.getItem("txs::estimated"));
                        if (!Array.isArray(t)) return null;
                        const i = t.findIndex(t => t.id === e);
                        return -1 === i ? null : t[i]
                    },
                    setBasicStorageTxsEstimated() {
                        const e = JSON.parse(localStorage.getItem("txs::estimated"));
                        Array.isArray(e) || localStorage.setItem("txs::estimated", "[]")
                    },
                    getStatusName(e) {
                        switch (e && e.toLowerCase()) {
                            case "confirming":
                                return "Confirming";
                            case "exchanging":
                                return "Exchanging";
                            case "sending":
                                return "Sending";
                            case "finished":
                            case "completed":
                                return "Completed";
                            case "failed":
                                return "Failed";
                            case "refunded":
                                return "Refunded";
                            case "expired":
                                return "Expired";
                            default:
                                return "Awaiting deposit"
                        }
                    },
                    txCompletedHook(e) {
                        this.updateTxEstimatedInLocalStorage({
                            completedTime: Date.now(),
                            ...this.getTxByIdFromTxEstimatedInLocalStorage(e.id),
                            isCompleted: !0
                        }), this.amountToReceive = this.$options.filters.fixedAmount(e.amountToReceive), this.initTransactionData = this.getTxByIdFromTxEstimatedInLocalStorage(e.id), clearTimeout(this.fetchExchangeTransactionsTimeout)
                    },
                    updateActiveTx(e) {
                        this.activeTx = e, this.transactionStatus = this.getStatusName(e.status), this.isExchangeDetails = !0, this.coinToSend = e.from ? this.$wallets.findWalletV2({
                            ticker: e.from.ticker,
                            contract: e.from.contract,
                            parentTicker: e.from.network
                        }) : this.$wallets.findWalletV2(this.getWalletData(e.fromCurrency)), this.coinToReceive = e.to ? this.$wallets.findWalletV2({
                            ticker: e.to.ticker,
                            contract: e.to.contract,
                            parentTicker: e.to.network
                        }) : this.$wallets.findWalletV2(this.getWalletData(e.toCurrency)), this.amountToSend = this.$options.filters.fixedAmount(e.amountToSend), this.amountToReceive = this.$options.filters.fixedAmount(e.amountToReceive), this.cashback = e.expectedCashbackAmount, this.exchangeResult = {
                            txid: e.id
                        }, this.sentHash = e.payinHash, this.receivedHash = e.payoutHash, this.transactionTimestamp = e.timestamp
                    },
                    setTransactionValues(e) {
                        const t = e.find(e => {
                            var t;
                            return e.id === (null === (t = this.initTransactionData) || void 0 === t ? void 0 : t.id)
                        });
                        t && t.amountToReceive && ("completed" !== t.status.toLowerCase() && "refunded" !== t.status.toLowerCase() || this.txCompletedHook(t))
                    },
                    openOrderDetails(e) {
                        if (this.updateActiveTx(e), this.initTransactionData = this.getTxByIdFromTxEstimatedInLocalStorage(e.id), !this.isMocked) {
                            const t = [this.getStatus(e.id)];
                            t.length > 0 && this.updatingStatus(t)
                        }
                    },
                    continueExchange: async function(e) {
                        try {
                            this.isRefunded = !0, this.activeTx.amountToReceive = e;
                            (await this.exchangeContinue(this.activeTx)).result && (this.startExchange(this.activeTx), await this.updateExchangeTransactions([this.activeTx]), this.openExchangeDetails(this.activeTx))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            this.isRefunded = !1
                        }
                    },
                    async refundExchange() {
                        try {
                            this.isRefunded = !0;
                            (await this.refundTransaction(this.activeTx)).result && (this.startExchange(this.activeTx), this.updateTxRefundedInLocalStorage(this.activeTx), this.isMocked && setTimeout(() => {
                                this.updateActiveTx({
                                    ...this.activeTx,
                                    status: "Refunded"
                                })
                            }, 8e3))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            this.isRefunded = !1
                        }
                    },
                    updateTxRefundedInLocalStorage(e) {
                        try {
                            this.setBasicStorageTxsEstimated();
                            let t = JSON.parse(localStorage.getItem("refunding::txs"));
                            if (!Array.isArray(t)) return;
                            const i = t.findIndex(t => t.id === e.id); - 1 === i ? t.unshift({
                                id: e.id
                            }) : t[i] = {
                                id: e.id
                            }, localStorage.setItem("refunding::txs", JSON.stringify(t))
                        } catch (e) {
                            console.log(e)
                        }
                    },
                    async updatingStatus(e) {
                        Promise.all(e.map(e => e.catch(e => e))).then(e => {
                            const t = (e = e.filter(e => e.status)).map(e => {
                                const t = {
                                    id: e.id,
                                    status: this.getStatusName(e.status)
                                };
                                return this.activeTx && this.activeTx.id === t.id && (e.payinHash && (this.activeTx.payinHash = e.payinHash, this.sentHash = e.payinHash), e.payoutHash && (this.activeTx.payoutHash = e.payoutHash, this.receivedHash = e.payoutHash), this.activeTx.status = t.status, this.transactionStatus = t.status), e.amountToReceive && (t.amountToReceive = e.amountToReceive), e.payinHash && (t.payinHash = e.payinHash), e.payoutHash && (t.payoutHash = e.payoutHash, t.txHash = e.payoutHash), t
                            });
                            this.setTransactionValues(t), this.updateExchangeTransactions(t), this.$forceUpdate()
                        }).catch(e => {
                            console.log(e)
                        })
                    }
                }
            };
            t.default = r
        },
        896: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(31),
                n = i(38),
                o = i(30),
                r = a(i(5247)),
                c = a(i(2286)),
                l = a(i(2287)),
                d = a(i(2288)),
                u = a(i(92)),
                h = a(i(2289)),
                p = i(224);
            const f = ["MATIC"];
            var m = {
                name: "ExchangeBasic",
                components: {
                    ErrorPlain: r.default,
                    ChangeIcon: c.default,
                    ExchangeCoin: l.default,
                    CashbackInfo: d.default,
                    SendCoinResult: u.default,
                    CashbackPromotion: h.default
                },
                mixins: [o.ExchangeMixin, o.CashbackMixin],
                data: () => ({
                    valid: {
                        message: "",
                        status: !0
                    },
                    amountToSend: "",
                    amountToReceive: "...",
                    availableBalance: "...",
                    filteredCurrenciesExchange: [],
                    minimalAmount: 0,
                    exchangeRate: null,
                    loading: !1,
                    selectedCoinToSend: null,
                    selectedCoinToReceive: null,
                    selectedCoinToReceiveId: null,
                    selectedCoinToSendId: null,
                    inactivePairError: "",
                    amountToSendError: "",
                    exchangeResult: {},
                    currencies: [],
                    isError: !1,
                    feeToClaim: null,
                    fetcher: null,
                    pairRateInterval: null,
                    feeParams: {},
                    orderId: "",
                    sentHash: "",
                    isBuyCoin: !1,
                    isMinMaxError: !1
                }),
                computed: {
                    ...(0, s.mapGetters)(["currenciesExchange"]),
                    claimButtonText() {
                        var e;
                        return "Claim " + ((null === (e = {
                            THETA: "TFUEL",
                            VET: "VTHO"
                        }) || void 0 === e ? void 0 : e[this.coinToSend.deprecatedParent]) || this.coinToSend.deprecatedParent)
                    },
                    isActiveExchangeButton() {
                        return Number(this.amountToSend) > 0 && this.valid.status && "..." !== this.amountToReceive
                    },
                    isExchangeDisabled() {
                        return this.isCoinDisabled(this.coinToReceive) || this.isCoinDisabled(this.coinToSend)
                    },
                    coinToSend() {
                        if (!this.selectedCoinToSendId) return this.$wallets.getWallet("eth");
                        return this.$wallets.getWallet(this.selectedCoinToSendId) || this.$wallets.getWallet("eth")
                    },
                    coinToReceive() {
                        if (!this.selectedCoinToReceiveId) return this.$wallets.getWallet("btc");
                        return this.$wallets.getWallet(this.selectedCoinToReceiveId) || this.$wallets.getWallet("btc")
                    },
                    feeWallet() {
                        var e, t;
                        return "VET" === (null === (e = this.coinToSend) || void 0 === e ? void 0 : e.deprecatedParent) ? this.$wallets.findWallet("VTHO") : ["ARB"].includes(this.coinToSend.deprecatedParent) ? this.$wallets.getWallet(this.coinToSend.deprecatedParent) : this.$wallets.getWallet(this.coinToSend.getFeeTicker ? this.coinToSend.getFeeTicker() : null === (t = this.coinToSend) || void 0 === t ? void 0 : t.deprecatedParent)
                    },
                    cashbackParams() {
                        return {
                            amount: this.amountToSend,
                            wallet: this.coinToSend
                        }
                    },
                    isHBARActivate() {
                        return "HBAR" === this.coinToSend.id && !this.coinToSend.address || "HBAR" === this.coinToReceive.id && !this.coinToReceive.address
                    }
                },
                watch: {
                    async coinToSend(e, t) {
                        await this.watchForCoins(this.coinToReceive, e, t)
                    },
                    async coinToReceive(e, t) {
                        await this.watchForCoins(this.coinToSend, e, t), e !== t && this.valid.status && (clearTimeout(this.fetcher), this.fetcher = setTimeout(() => {
                            this.fetchRate()
                        }, 500))
                    }
                },
                created() {
                    this.initializeSetSelectedCoins()
                },
                async beforeMount() {
                    try {
                        const e = await this.$exchanges.getAvailableWalletIdCollection(this.currenciesExchange, this.$wallets);
                        this.filteredCurrenciesExchange = e.filter(e => !p.DISABLED_COINS.includes(e))
                    } catch (e) {
                        console.error(e)
                    }
                },
                beforeDestroy() {
                    clearTimeout(this.fetcher), clearInterval(this.pairRateInterval)
                },
                async mounted() {
                    await this.setMinimalAmount(), await this.getAvailableBalance()
                },
                methods: {
                    initializeSetSelectedCoins() {
                        const e = this.$route.query.coinToReceive ? this.$route.query.coinToReceive.split("%|%") : [],
                            t = this.$route.query.coinToSend ? this.$route.query.coinToSend.split("%|%") : [],
                            i = e.length > 0,
                            a = t.length > 0;
                        let s = {
                                ticker: localStorage.getItem("exchange::coin-to-receive") || "btc",
                                id: localStorage.getItem("exchange::coin-to-receive-id") || "btc"
                            },
                            n = {
                                ticker: localStorage.getItem("exchange::coin-to-send") || "eth",
                                id: localStorage.getItem("exchange::coin-to-send-id") || "eth"
                            };
                        i && a ? (s = {
                            ticker: e[0],
                            id: e[1]
                        }, n = {
                            ticker: t[0],
                            id: t[1]
                        }) : i ? (s = {
                            ticker: e[0],
                            id: e[1]
                        }, n = {
                            ticker: "eth",
                            id: "eth"
                        }) : a && (s = {
                            ticker: "btc",
                            id: "btc"
                        }, n = {
                            ticker: t[0],
                            id: t[1]
                        }), this.selectedCoinToReceive = s.ticker, this.selectedCoinToReceiveId = s.id, this.selectedCoinToSend = n.ticker, this.selectedCoinToSendId = n.id
                    },
                    async buyCoin() {
                        const e = this.isMinMaxError ? this.coinToSend.id : this.coinToSend.feeTicker;
                        this.$buy.isAvailable({
                            id: e
                        }) ? this.$router.push("/simplex/USD/" + this.$buy.getAvailableWallet({
                            id: e
                        }).id) : (this.selectedCoinToReceive = e, this.selectedCoinToReceiveId = e, this.selectedCoinToSend = "BTC", this.selectedCoinToSendId = "BTC", await this.getAvailableBalance())
                    },
                    isCoinDisabled: e => (null == e ? void 0 : e.ticker) && !n.CoinRestrictionPolicy.isAllowed(e.ticker, n.ACTION_EXCHANGE),
                    tryAgain() {
                        this.isError = !1
                    },
                    async watchForCoins(e, t) {
                        this.exchangeRate = null, e !== t && (this.clearValidation(), await this.setMinimalAmount())
                    },
                    clearValidation() {
                        this.amountToSendError = "", this.valid = {
                            message: "",
                            status: !0
                        }
                    },
                    async setMinimalAmount() {
                        this.inactivePairError = "";
                        try {
                            const e = await this.getMinimalAmount(this.coinToSend, this.coinToReceive);
                            this.minimalAmount = e ? e.min : 0
                        } catch (t) {
                            var e;
                            this.inactivePairError = "not_valid_ticker_pair" === (null == t || null === (e = t.data) || void 0 === e ? void 0 : e.error) ? "Choose different coins to exchange" : "Pair is temporarily unavailable", this.valid = {
                                message: this.inactivePairError,
                                status: !1
                            }
                        }
                    },
                    talkWithSupport() {
                        const e = ["TFUEL", "VTHO"].includes(this.feeWallet.ticker) ? this.coinToSend.address : this.feeWallet.address,
                            t = {
                                additionalText: `-----------------------\nFee: ${this.feeToClaim} ${this.feeWallet.ticker}\nMy ${this.feeWallet.ticker} address: ${e}`,
                                subject: "Other issues",
                                topic: `Claim ${this.feeWallet.ticker} for ${this.coinToSend.ticker}>${this.coinToReceive.ticker} exchange`,
                                isNotText: !1,
                                tags: ["claim"]
                            };
                        "TFUEL" === this.feeWallet.ticker && (t.additionalText = "Dear support, I don't have enough TFUEL to complete exchange. Could you help me, please?\n" + t.additionalText, t.isNotText = !0), this.$bus.$emit("openSupportPopup", t)
                    },
                    async validateExchange() {
                        this.feeToClaim = null, this.isBuyCoin = !1, this.isMinMaxError = !1;
                        for (const e of [this.selectedCoinToReceiveId, this.selectedCoinToSendId])
                            if (!n.CoinRestrictionPolicy.isAllowed(e.toUpperCase(), n.ACTION_EXCHANGE)) return void(this.valid = {
                                message: n.CoinRestrictionPolicy.getMessage(e.toUpperCase(), n.ACTION_EXCHANGE),
                                status: !1
                            });
                        if (this.inactivePairError) return void(this.valid = {
                            message: this.inactivePairError,
                            status: !1
                        });
                        if (this.coinToSend.id === this.coinToReceive.id) return void(this.valid = {
                            message: "Choose different coins to exchange",
                            status: !1
                        });
                        const e = this.getMaxMinErrorText();
                        if (e) return void(this.valid = {
                            message: e,
                            status: !1
                        });
                        const t = await this.isAvailableForSend();
                        t ? this.valid = {
                            message: t,
                            status: !1
                        } : Number(this.amountToSend) > 0 && "XRP" === this.coinToReceive.ticker && Number(this.amountToReceive) < 21 && Number(this.amountToReceive) > 0 && !isNaN(Number(this.amountToReceive)) ? this.valid = {
                            message: "Minimal amount for receiving is 21 XRP",
                            status: !1
                        } : this.amountToSendError ? this.valid = {
                            message: this.amountToSendError,
                            status: !1
                        } : this.valid = {
                            message: "",
                            status: !0
                        }
                    },
                    getMaxMinErrorText() {
                        const e = this.$rates.convertToUSD(this.amountToSend, this.coinToSend, "BTC"),
                            t = this.$rates.getCoinPrice(this.coinToSend, "BTC"),
                            i = Number((10 / t).toFixed(6));
                        var a;
                        if (i && e && Number(e) >= 10) return `The maximum amount for exchange is ${i} ${null===(a=this.coinToSend)||void 0===a?void 0:a.ticker}.\nWe recommend you to split the exchange into several transactions`;
                        if (Number(this.amountToSend) >= Number(this.minimalAmount)) return !1;
                        Number(this.availableBalance) < Number(this.minimalAmount) && (this.isBuyCoin = !f.includes(this.coinToSend.deprecatedParent), this.isMinMaxError = !0);
                        const s = this.coinToSend.ticker;
                        return `The minimum amount for exchange is ${this.$options.filters.formatFinance(this.minimalAmount)} ${s}`
                    },
                    getIsBuyCoin() {
                        const e = this.$rates.convertToUSD(this.amountToSend, this.coinToSend, "BTC"),
                            t = this.$rates.getCoinPrice(this.coinToSend, "BTC");
                        Number((10 / t).toFixed(6)) && e && Number(e) >= 10 || (Number(this.amountToSend) >= Number(this.minimalAmount) && (this.isBuyCoin = !f.includes(this.coinToSend.deprecatedParent)), Number(this.amountToSend) > Number(this.availableBalance || 0) && (this.isBuyCoin = !f.includes(this.coinToSend.deprecatedParent)))
                    },
                    async isAvailableForSend() {
                        let e = !0,
                            t = !0;
                        const i = this.coinToSend.toMinimalUnit(this.amountToSend),
                            a = this.coinToSend.toMinimalUnit(this.availableBalance),
                            {
                                BN: s
                            } = this.$wallets.getWallet(this.coinToSend.deprecatedParent);
                        if (t = this.amountToSend >= 0 && new s(i).lte(new s(a)), !t) return this.getIsBuyCoin(), this.isBuyCoin = !f.includes(this.coinToSend.deprecatedParent), this.isMinMaxError = !0, `To make this exchange, deposit more ${this.coinToSend.ticker} to your wallet`;
                        if (this.coinToSend instanceof n.Token ? e = await this.coinToSend.isAvailableForFee(new this.feeWallet.BN(this.feeParams.fee), this.feeWallet.indivisibleBalance) : "VET" === this.coinToSend.ticker && (e = await this.feeWallet.isAvailableForFee(new this.feeWallet.BN(this.feeParams.fee), this.feeWallet.indivisibleBalance)), ["ONT", "THETA"].includes(this.coinToSend.ticker) && (e = this.feeWallet.indivisibleBalance.gte(this.feeParams.fee)), !e) {
                            this.isBuyCoin = !1;
                            const e = this.feeWallet.toCurrencyUnit(this.feeParams.fee);
                            return ["TRX", "BSC", "BTT", "VTHO", "ONG", "TFUEL", "ETH"].includes(this.feeWallet.ticker) && (this.feeToClaim = e), "THETA" === this.coinToSend.ticker ? `You don’t have enough ${this.feeWallet.ticker} to exchange ${this.coinToSend.ticker}` : `You should have ${e} ${this.feeWallet.ticker} to exchange ${this.coinToSend.ticker}`
                        }
                        return !!(() => {
                            const e = new this.coinToSend.BN(this.coinToSend.toMinimalUnit(this.amountToSend)),
                                t = new this.coinToSend.BN(this.coinToSend.toMinimalUnit(this.availableBalance)),
                                i = this.coinToSend.indivisibleBalance;
                            return e.gt(t) && e.lte(i)
                        })() && `You should leave minimum\n          ${this.coinToSend.toCurrencyUnit(this.coinToSend.unspendableBalance)}\n          ${this.coinToSend.ticker} on your account,\n          this amount is locked by ${this.coinToSend.name}.`
                    },
                    async getAvailableBalance(e = !0) {
                        var t, i;
                        const a = this.coinToSend instanceof n.Token,
                            s = this.$wallets.getWallet(this.coinToSend.deprecatedParent);
                        let o = null;
                        if (a ? await s.getInfo({
                                isToken: !0,
                                contract: this.coinToSend.contract,
                                ticker: this.coinToSend.ticker
                            }) : await s.getInfo({
                                onlyCoin: !0
                            }), null !== (t = this.feeWallet) && void 0 !== t && null !== (i = t.isFeeDynamic) && void 0 !== i && i.call(t)) {
                            const e = a ? await this.feeWallet.estimateGas("1", "", this.coinToSend.contract, this.coinToSend.denom) : this.coinToSend.gasLimit,
                                t = await this.feeWallet.getGasPrice(!1, a);
                            o = await this.feeWallet.getFee({
                                userGasPrice: String(t),
                                gasLimit: e
                            }), this.feeParams.gasLimit = e, this.feeParams.gasPrice = t, this.feeParams.fee = o
                        } else {
                            const e = "ADA" === this.feeWallet.ticker ? this.feeWallet.privateKey.byronAddress : void 0;
                            o = await this.feeWallet.getFee({
                                address: e
                            }), this.feeParams.fee = o
                        }
                        var r, c;
                        "TRX" === this.feeWallet.ticker && "TRX" !== this.coinToSend.ticker && (this.feeParams.fee = this.feeWallet.toMinimalUnit(null === (r = this.feeWallet) || void 0 === r || null === (c = r.feeData) || void 0 === c ? void 0 : c.feeTRC20));
                        this.availableBalance = "THETA" === this.coinToSend.id ? await this.coinToSend.availableBalance("0") : await this.coinToSend.availableBalance(o), e && (this.availableBalance = await this.coinToSend.availableBalance(this.coinToSend.id === this.feeWallet.id && "THETA" !== this.coinToSend.id ? o : "0"), await this.setAmountToSend(this.availableBalance))
                    },
                    calcuteRate() {
                        if (0 === Number(this.amountToSend)) return;
                        const e = this.amountToReceive / this.amountToSend;
                        this.exchangeRate = Number(e > .1 ? e.toFixed(6) : e.toFixed(9))
                    },
                    async setAmountToSend(e) {
                        this.amountToReceive = "...", this.amountToSend = e, 0 === Number(e) && (this.amountToReceive = "0"), this.fetcher = setTimeout(() => {
                            this.fetchRate()
                        }, 500)
                    },
                    async changeCoins() {
                        if (this.loading) return;
                        const e = Object.assign({}, this.coinToReceive),
                            t = Object.assign({}, this.coinToSend);
                        this.exchangeRate = null, await Promise.all([this.selectCoin(e, !0, !1), this.selectCoin(t, !1, !1)]), await this.getAvailableBalance(!0)
                    },
                    getPairRate() {
                        const e = this.getRate(this.coinToSend, this.coinToReceive, this.amountToSend);
                        e && e.then(async e => {
                            this.amountToReceive = String(e), this.calcuteRate(), await this.validateExchange()
                        }).catch(e => {
                            console.log(e)
                        })
                    },
                    fetchRate() {
                        clearTimeout(this.fetcher), clearInterval(this.pairRateInterval), this.amountToReceive = Number(this.amountToSend) > 0 ? "..." : "0", this.exchangeRate = null, this.getPairRate(), this.pairRateInterval = setInterval(() => {
                            this.getPairRate()
                        }, 1e4)
                    },
                    async selectCoin(e, t = !1, i = !0) {
                        t ? (this.selectedCoinToSend = e.ticker, this.selectedCoinToSendId = e.id, localStorage.setItem("exchange::coin-to-send", e.ticker), localStorage.setItem("exchange::coin-to-send-id", e.id)) : (this.selectedCoinToReceive = e, this.selectedCoinToReceiveId = e.id, localStorage.setItem("exchange::coin-to-receive", e.ticker), localStorage.setItem("exchange::coin-to-receive-id", e.id)), i && await this.getAvailableBalance(t)
                    },
                    exchangeCoins() {
                        this.loading = !0;
                        let e = "",
                            t = !1;
                        this.$ga.event("User Actions", "Exchange coins", {
                            clientID: this.$ga.customParams.uid
                        });
                        const i = this.$wallets.findWallet("AWC", "atomic"),
                            a = this.$wallets.getWallet("BNB", "atomic"),
                            s = this.$wallets.getWallet("ETH", "atomic"),
                            n = this.estimatedCashback > 0 && this.isMember ? this.estimatedCashback : 0,
                            o = {
                                hash: this.$wallets.hash,
                                ethAddr: s.address,
                                bnbAddr: a.address,
                                estimatedAwcCashback: String(n),
                                estimatedAwcCashbackRate: String(this.$rates.convertToUSD(n, i, "USD")),
                                awcBep2Balance: String(this.awcBalance),
                                awcBep2Rate: String(this.$store.getters.coinRate("USD", i).rate)
                            },
                            r = "BSV" === this.coinToReceive.ticker ? this.coinToReceive.convertToLegacyAddress(this.$address(this.coinToReceive.deprecatedParent)) : this.$address(this.coinToReceive.deprecatedParent),
                            c = "BSV" === this.coinToSend.ticker ? this.coinToSend.convertToLegacyAddress(this.$address(this.coinToSend.deprecatedParent)) : this.$address(this.coinToSend.deprecatedParent);
                        this.createExchangeTransaction(this.coinToSend, this.coinToReceive, r, c, this.amountToSend, this.amountToReceive, void 0, o).then(async i => {
                            this.$ga.event("Exchange", "Create Exchange Tx Succeed", {
                                clientID: this.$ga.customParams.uid
                            });
                            try {
                                this.$activeWalletsList.activate(this.coinToReceive);
                                const e = this.validateExchangeTx(i);
                                t = e.payinAddress;
                                const a = this.coinToSend.toMinimalUnit(e.amountToSend);
                                this.exchangeResult = await this.sendTransaction(this.coinToSend, e.payinAddress, a, e.payinExtraId, e.id, this.feeParams), this.sentHash = this.exchangeResult.txid, this.orderId = e.orderId, this.loading = !1;
                                const s = {
                                    id: this.orderId,
                                    amountToSend: this.amountToSend,
                                    amountToReceive: this.amountToReceive,
                                    to: i.to,
                                    toCurrency: this.coinToReceive.ticker,
                                    from: i.from,
                                    fromCurrency: this.coinToSend.ticker,
                                    expectedCashbackAmount: this.estimatedCashback,
                                    status: "",
                                    payinHash: this.sentHash,
                                    payoutHash: ""
                                };
                                this.$emit("openExchangeDetails", s), this.$emit("startExchange", s), await this.getAvailableBalance(), this.$ga.event("Exchange", "Exchange Succeed", {
                                    clientID: this.$ga.customParams.uid
                                })
                            } catch (t) {
                                throw this.$ga.event("Exchange", "Exchange Failed", {
                                    clientID: this.$ga.customParams.uid
                                }), e = "sendExchangeTransaction", this.loading = !1, this.valid = {
                                    message: "Transaction failed, try again later.",
                                    status: !1
                                }, t
                            }
                        }).catch(i => {
                            this.isError = !0, this.$ga.event("Exchange", "Create Exchange Tx Failed", {
                                clientID: this.$ga.customParams.uid
                            }), console.log(i), e || (e = "createExchangeTransaction"), this.loading = !1, this.valid = {
                                message: "Exchange service currently unavailable, try again later.",
                                status: !1
                            }, i.message = JSON.stringify({
                                currentError: i.toString(),
                                exchangeErrorType: e,
                                provider: this.defaultService,
                                fromCurrency: this.coinToSend.ticker,
                                toCurrency: this.coinToReceive.ticker,
                                fromAddress: this.$address(this.coinToSend.deprecatedParent),
                                toAddress: this.$address(this.coinToReceive.deprecatedParent),
                                viaAddress: t || "",
                                inputHash: this.exchangeResult ? this.exchangeResult.txid : "",
                                amountTo: this.amountToSend
                            }), this.$wallets.logger.error({
                                type: "Exchange",
                                error: i,
                                currency: this.coinToSend.ticker,
                                instance: this
                            })
                        })
                    }
                }
            };
            t.default = m
        },
        902: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(31),
                n = i(30),
                o = a(i(362)),
                r = a(i(2290));
            var c = {
                name: "ExchangeHistory",
                components: {
                    ExchangeHistoryItem: r.default,
                    Table: o.default
                },
                filters: {
                    fixedAmount: function(e) {
                        return Number(Number(e).toFixed(6)).toString()
                    }
                },
                mixins: [n.ExchangeMixin, n.ScrollMixin],
                data: () => ({
                    page: 0,
                    isLoader: !1,
                    header: [{
                        title: "You sent"
                    }, {
                        title: "You got"
                    }],
                    activeTx: null
                }),
                computed: {
                    ...(0, s.mapGetters)(["exchangeTransactions", "exchangeTransactionsLoading"]),
                    transactions() {
                        return this.exchangeTransactions.slice(0, Math.max(50, 50 * this.page))
                    },
                    isListEnded() {
                        return this.exchangeTransactions.length <= 50 * this.page
                    }
                },
                async mounted() {
                    this.$ga.event("User Movement", "exchange-history-page", {
                        clientID: this.$ga.customParams.uid
                    }), this.initExchangeTransactions(), this.isLoader = 0 === this.exchangeTransactions.length, this.fetchExchangeTransactions(), this.isLoader = !1
                },
                beforeDestroy() {
                    clearTimeout(this.fetchExchangeTransactionsTimeout)
                },
                methods: {
                    ...(0, s.mapActions)(["getExchangeTransactions", "initExchangeTransactions"]),
                    async fetchExchangeTransactions() {
                        clearTimeout(this.fetchExchangeTransactionsTimeout);
                        const e = {
                            limit: 50,
                            offset: 50 * this.page
                        };
                        this.checkExchangeTransactionsUpdates(), await this.getExchangeTransactions({
                            atomicId: this.$wallets.hash,
                            params: e
                        }), this.fetchExchangeTransactionsTimeout = setTimeout(() => this.fetchExchangeTransactions(), 3e4)
                    },
                    checkExchangeTransactionsUpdates() {
                        if (!this.exchangeTransactions.length) return;
                        const e = [],
                            t = new Date;
                        this.exchangeTransactions.forEach(({
                            id: i,
                            status: a,
                            timestamp: s
                        }) => {
                            const n = !["Expired", "Completed", "Refunded"].includes(a),
                                o = new Date(s);
                            o.setDate(o.getDate() + 2), n && o > t && e.push(this.getStatus(i))
                        }), this.$emit("updatingStatus", e)
                    }
                }
            };
            t.default = c
        },
        904: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(31),
                n = i(30),
                o = a(i(5255)),
                r = a(i(2291)),
                c = {
                    name: "Simplex",
                    components: {
                        NewSimplexResult: o.default
                    },
                    mixins: [n.ExchangeMixin],
                    data: () => ({
                        isOpenOrderDetails: !1,
                        activeSimplexTransactionId: null,
                        tabs: [{
                            title: "Buy crypto",
                            path: "/simplex"
                        }, {
                            title: "Order History",
                            path: "/simplex/history"
                        }]
                    }),
                    computed: {
                        ...(0, s.mapGetters)(["activeTab", "simplexTransactions"]),
                        activeSimplexTransaction() {
                            return this.simplexTransactions.find(e => e.id === this.activeSimplexTransactionId)
                        }
                    },
                    methods: {
                        ...(0, s.mapActions)(["changeTab"]),
                        checkSimplexStatus: r.default,
                        toggleOrderDetails(e) {
                            this.activeSimplexTransactionId = null == e ? void 0 : e.id, this.$nextTick(() => {
                                this.isOpenOrderDetails = !!e
                            })
                        },
                        isActive(e) {
                            return ("simplex-with-tickers" === this.$route.name || "simplex-with-tickers-value" === this.$route.name) && "/simplex" === e
                        }
                    }
                };
            t.default = c
        },
        906: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(38),
                n = i(52),
                o = i(2077),
                r = i(31),
                c = i(30),
                l = i(204),
                d = a(i(106)),
                u = a(i(2286)),
                h = a(i(2287)),
                p = a(i(2288)),
                f = a(i(5257)),
                m = a(i(2289));
            const v = ["quoteId", "paymentId", "orderId", "userId", "cookieUaid", "coockieSession", "totalFiatAmount", "requestedCoinAmount"];
            var g = {
                name: "SimplexExchange",
                components: {
                    EditAmount: d.default,
                    ChangeIcon: u.default,
                    ExchangeCoin: h.default,
                    CashbackInfo: p.default,
                    AtomicFlagIcon: l.AtomicFlagIcon,
                    FiatDropdownV2: f.default,
                    CashbackPromotion: m.default
                },
                mixins: [c.CashbackMixin],
                data: () => ({
                    preload: "file:" + i(104).resolve(__dirname, "./userAgent.html"),
                    selectedCoinToReceive: "btc",
                    selectedCoinToReceiveId: "btc",
                    selectedFiatToSend: "USD",
                    requestedFiatAmount: "200",
                    totalFiatAmount: "",
                    requestedCoinAmount: "...",
                    amountError: "",
                    userId: void 0,
                    quoteId: void 0,
                    paymentId: void 0,
                    orderId: void 0,
                    cookieUaid: void 0,
                    cookieSession: void 0,
                    currentGeo: "",
                    currentIP: "",
                    currentUserAgent: null,
                    callTimer: null,
                    quoteError: !1,
                    isFiatDropdown: !1,
                    isFiatLoading: !1,
                    loadingSimplexForm: !1,
                    requestToken: null,
                    exchangeSettings: null
                }),
                computed: {
                    ...(0, r.mapGetters)(["coinRate"]),
                    availableCurrencies() {
                        try {
                            return this.simplex.getAvailableWallets()
                        } catch {
                            return []
                        }
                    },
                    cashbackParams() {
                        return {
                            amount: this.requestedCoinAmount,
                            wallet: this.coinToReceive
                        }
                    },
                    isButtonAccepted() {
                        return Number(this.requestedCoinAmount) && Number(this.requestedFiatAmount) && !this.isFiatLoading && !this.loadingSimplexForm
                    },
                    userAgent() {
                        return this.currentUserAgent
                    },
                    coinToReceive() {
                        return this.$wallets.getWallet(this.selectedCoinToReceiveId, "atomic")
                    },
                    coinAddress() {
                        const {
                            address: e
                        } = this.$wallets.getWallet(this.coinToReceive.deprecatedParent, "atomic");
                        return e
                    },
                    hasFiatRate() {
                        return Object.keys(this.$buy.settings.fiats).includes(this.fiatRate)
                    },
                    simplexTransaction() {
                        const e = this.estimatedCashback > 0 && this.isMember ? this.estimatedCashback : 0;
                        return {
                            buyParams: {
                                paymentId: this.paymentId,
                                quoteId: this.quoteId,
                                atomicId: this.$wallets.hash,
                                status: "Attempt",
                                fromCurrency: this.selectedFiatToSend,
                                toCurrency: this.coinToReceive.ticker,
                                amountSend: this.requestedFiatAmount,
                                amountReceive: this.requestedCoinAmount,
                                payoutAddress: this.coinAddress
                            },
                            cashbackParams: {
                                atomicId: this.$wallets.hash,
                                bnbAddress: this.$wallets.getWallet("BNB").address,
                                ethAddress: this.$wallets.getWallet("ETH").address,
                                expectedCashbackAmount: e,
                                expectedCashbackAmountRate: String(this.$rates.convertToUSD(e, "AWC", "USD")),
                                awcBep2Balance: this.awcBalance,
                                awcBep2Rate: String(this.coinRate("USD", this.$wallets.findWallet("AWC")).rate),
                                exchangeService: "Simplex",
                                platform: `${this.$platformVersion.getPlatform()} ${this.$platformVersion.getVersion()}`,
                                walletVersion: this.$platformVersion.getVersion()
                            }
                        }
                    },
                    isCoinDisabled() {
                        var e;
                        return !s.CoinRestrictionPolicy.isAllowed(null === (e = this.selectedCoinToReceive) || void 0 === e ? void 0 : e.toUpperCase(), s.ACTION_BUY)
                    }
                },
                watch: {
                    async selectedFiatToSend(e, t) {
                        e !== t && (await this.updateExchangeSettings(), await this.getCoinPrice())
                    },
                    fiatRate(e) {
                        this.selectedFiatToSend = this.hasFiatRate ? e : "USD"
                    },
                    userId(e) {
                        this.setUserID(e)
                    },
                    requestedFiatAmount(e, t) {
                        e !== t && this.validationAmount()
                    }
                },
                async beforeMount() {
                    const {
                        simplexApiUrl: e
                    } = this.$buy.settings;
                    this.simplex = new o.Simplex(e), await this.updateExchangeSettings()
                },
                async mounted() {
                    const e = localStorage.getItem("simplex::receiveCoinId");
                    if (this.$route.params.value && (this.requestedFiatAmount = Math.max(this.$route.params.value, 200).toString()), this.$route.params.walletToReceive) {
                        const e = this.$wallets.getWallet(this.$route.params.walletToReceive);
                        this.selectedCoinToReceiveId = e.id, this.selectedCoinToReceive = e.ticker
                    } else e && "undefined" !== e ? (this.selectedCoinToReceive = localStorage.getItem("simplex::receiveCoin"), this.selectedCoinToReceiveId = e) : (this.selectedCoinToReceive = "btc", this.selectedCoinToReceiveId = "btc");
                    this.selectedFiatToSend = this.hasFiatRate && this.fiatRate || "USD", this.$refs.userAgent.addEventListener("dom-ready", () => {
                        this.currentUserAgent = this.$refs.userAgent.getUserAgent()
                    }), this.changeTab(0), await this.getGeo()
                },
                methods: {
                    ...(0, r.mapActions)(["changeTab", "setUserID", "setSimplexSession", "setSimplexNewTransaction"]),
                    getCoinDisabilityReason() {
                        var e;
                        return s.CoinRestrictionPolicy.getMessage(null === (e = this.selectedCoinToReceive) || void 0 === e ? void 0 : e.toUpperCase(), s.ACTION_BUY)
                    },
                    async updateExchangeSettings() {
                        this.exchangeSettings = await this.$buy.getSettings(this.selectedFiatToSend), this.requestedFiatAmount = String(+(this.exchangeSettings.default || this.exchangeSettings.min))
                    },
                    outsideClick() {
                        this.isFiatDropdown = !1
                    },
                    onInput() {
                        this.clearExchangeInfo(), this.requestedCoinAmount = "...", this.isFiatLoading = !0, clearTimeout(this.callTimer), this.callTimer = setTimeout(() => {
                            this.getCoinPrice()
                        }, 500)
                    },
                    selectForReceive(e) {
                        this.isFiatLoading = !0, this.selectedCoinToReceive = e.ticker, this.selectedCoinToReceiveId = e.id, localStorage.setItem("simplex::receiveCoin", e.ticker), localStorage.setItem("simplex::receiveCoinId", e.id), this.getCoinPrice()
                    },
                    toggleFiatDropdown(e) {
                        e.stopPropagation(), this.isFiatDropdown = !this.isFiatDropdown
                    },
                    selectFiat(e) {
                        this.isFiatLoading = !0, this.selectedFiatToSend = e.code, this.isFiatDropdown = !1
                    },
                    validationAmount() {
                        this.amountError = "";
                        const e = Object.values(this.$buy.settings.fiats).find(e => e.code === this.selectedFiatToSend); + this.requestedFiatAmount < +e.min ? this.amountError = `Minimum order amount is ${e.char}${e.min}` : +this.requestedFiatAmount > +e.max && (this.amountError = `Maximum amount is ${e.char}${e.max}`)
                    },
                    setExchangeInfo(e) {
                        e.token === this.requestToken && v.forEach(t => {
                            this[t] = e[t]
                        })
                    },
                    clearExchangeInfo() {
                        v.forEach(e => {
                            this[e] = void 0
                        })
                    },
                    async getCoinPrice() {
                        if (this.requestedCoinAmount = "...", "" === this.amountError) {
                            this.isFiatLoading = !0, this.quoteError = !1, this.requestToken = Math.random().toString(36).substring(2, 15);
                            try {
                                const e = await this.simplex.getExchangeRate(this.selectedFiatToSend, this.coinToReceive, this.requestedFiatAmount, this.$wallets.hash, this.requestToken);
                                this.setExchangeInfo(e)
                            } catch (e) {
                                console.log(e), this.quoteError = !0
                            }
                            this.isFiatLoading = !1
                        }
                    },
                    async submitSimplexForm() {
                        if (this.loadingSimplexForm = !0, this.$ga.event("User Actions", "Create Simplex Exchange Tx", {
                                clientID: this.$ga.customParams.uid
                            }), "" !== this.amountError) return;
                        const {
                            paymentRequestPayload: e,
                            submitRequestPayload: t
                        } = await this.simplex.createExchangeTransaction({
                            userId: this.userId,
                            quoteId: this.quoteId,
                            paymentId: this.paymentId,
                            orderId: this.orderId,
                            cookieSession: this.cookieSession,
                            cookieUaid: this.cookieUaid,
                            fiatTicker: this.selectedFiatToSend,
                            fiatAmount: this.requestedFiatAmount,
                            coinAmount: this.requestedCoinAmount,
                            coinAddress: this.coinAddress,
                            coin: this.coinToReceive,
                            ip: this.currentIP,
                            geo: this.currentGeo
                        });
                        try {
                            const i = await this.simplex.makeExchange({
                                paymentRequestPayload: e,
                                submitRequestPayload: t
                            });
                            this.setSimplexSession(i), this.setSimplexNewTransaction(this.simplexTransaction), this.$activeWalletsList.activate(this.coinToReceive), this.$ga.event("User Actions", "Exchange fiat", {
                                clientID: this.$ga.customParams.uid
                            }), this.$router.push("/simplex/webview"), this.clearExchangeInfo(), this.loadingSimplexForm = !1
                        } catch (e) {
                            throw e
                        }
                    },
                    async getGeo() {
                        const {
                            ip: e,
                            geo: t
                        } = await (0, n.getGeo)();
                        this.currentIP = e, this.currentGeo = t, await this.getCoinPrice()
                    }
                }
            };
            t.default = g
        },
        908: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(31),
                n = a(i(362)),
                o = a(i(2290)),
                r = a(i(2291)),
                c = i(30),
                l = {
                    name: "SimplexHistory",
                    components: {
                        ExchangeHistoryItem: o.default,
                        Table: n.default
                    },
                    mixins: [c.ExchangeMixin],
                    data: () => ({
                        updateSimplexTransactionsFromDBID: null,
                        header: [{
                            title: "You sent"
                        }, {
                            title: "You got"
                        }]
                    }),
                    computed: {
                        ...(0, s.mapGetters)(["simplexTransactions", "isSimplexTransactionsLoading"])
                    },
                    async mounted() {
                        await this.updateSimplexTransactionsFromDB()
                    },
                    methods: {
                        ...(0, s.mapActions)(["updateSimplexTransactionsFromDB"]),
                        checkStatus: e => (0, r.default)(e)
                    }
                };
            t.default = l
        },
        909: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(298),
                s = i(31),
                n = {
                    name: "SimplexWebview",
                    data: () => ({
                        simplexWebView: null,
                        showReady: !1,
                        preload: "file:" + i(104).resolve(__dirname, "./simplexInject.js")
                    }),
                    computed: {
                        ...(0, s.mapGetters)(["simplexSession", "simplexNewTransaction"]),
                        sessionUrl() {
                            let e = "";
                            try {
                                e = this.simplexSession.headers.location.replace("/payments/new?", "")
                            } catch (e) {
                                console.warn("Simplex request failed: ", e)
                            }
                            return "https://checkout.simplexcc.com/payments/new?" + e
                        }
                    },
                    mounted() {
                        this.simplexWebView = this.$refs.simplex_webview, this.simplexWebView.addEventListener("new-window", e => {
                            a.ipcRenderer.send("openExternal", e.url)
                        }), this.startSimplexSession(this.simplexSession)
                    },
                    methods: {
                        ...(0, s.mapActions)(["changeTab", "updateSimplexTransactionsFromDB"]),
                        async saveTxToLocalDb({
                            buyParams: e,
                            cashbackParams: t
                        }) {
                            const i = {
                                id: e.paymentId,
                                userId: e.atomicId,
                                status: e.status,
                                txHash: null,
                                payoutHash: null,
                                payoutAddress: e.payoutAddress,
                                fromCurrency: e.fromCurrency,
                                toCurrency: e.toCurrency,
                                amountToSend: e.amountSend,
                                amountToReceive: e.amountReceive,
                                expectedCashbackAmount: t.estimatedAwcCashback,
                                timestamp: (new Date).toISOString()
                            };
                            this.$simplexDb.addSimplexTransactionToDb(i), await this.updateSimplexTransactionsFromDB()
                        },
                        goToFirstTab() {
                            this.$router.push("/simplex"), this.changeTab(0)
                        },
                        async startSimplexSession() {
                            this.$simplexDb.postCashbackBuyTx(this.simplexNewTransaction), this.saveTxToLocalDb(this.simplexNewTransaction), this.simplexWebView.addEventListener("dom-ready", () => {
                                setTimeout(() => {
                                    this.showReady = !0
                                }, 100), this.simplexWebView.send("check-success")
                            }), this.simplexWebView.addEventListener("ipc-message", e => {
                                "success" === e.channel && this.goToFirstTab()
                            }, {
                                once: !0
                            }), this.simplexWebView.addEventListener("will-navigate", e => {
                                "https://atomicwallet.io/" === e.url && this.goToFirstTab()
                            }), this.simplexWebView.addEventListener("close", e => this.goToFirstTab())
                        }
                    }
                };
            t.default = n
        },
        910: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(281)),
                n = a(i(76)),
                o = a(i(5264)),
                r = a(i(2278)),
                c = i(38);
            var l = {
                name: "PrivateKeysTab",
                components: {
                    Edit: n.default,
                    CustomKey: o.default,
                    Alert: r.default
                },
                filters: {
                    printKey: e => e.length > 45 ? e.substr(0, 20) + "..." + e.substr(-20) : e
                },
                data: () => ({
                    keys: [],
                    claiming: !1,
                    claimOk: !1,
                    claimFail: !1,
                    passwordForKey: "",
                    privateKeyError: "",
                    innerKeyState: "",
                    btnDisabled: !1,
                    filter: ""
                }),
                computed: {
                    mnemonic() {
                        return this.$wallets.mnemonic.phrase
                    },
                    keysData() {
                        const e = this.filter.toLowerCase();
                        return this.keys.filter(t => 0 === e.length || (t.ticker.toLowerCase().indexOf(e) >= 0 || t.name.toLowerCase().indexOf(e) >= 0))
                    }
                },
                methods: {
                    async claimFunds(e) {
                        let t, i;
                        this.claiming = !0, "YEC" === e && (i = this.$wallets.getWallet("YEC"), t = this.$wallets.getWallet("ZEC")), t || i || (this.claiming = !1);
                        const a = await i.createClaimTransaction(t.privateKey).catch(e => {
                            console.log(e)
                        });
                        if (!a) return void this.successClaim();
                        const s = await i.sendTransaction(a).catch(e => console.log(e));
                        s ? this.successClaim(s) : this.successClaim()
                    },
                    eosTextClipboard(e, t) {
                        return `${this.$options.filters.printKey(e)}\n          ${this.$options.filters.printKey(t)}`
                    },
                    successClaim(e) {
                        e ? this.claimOk = !0 : this.claimFail = !0
                    },
                    open() {
                        this.$electron.shell.openExternal("https://support.atomicwallet.io/article/94-how-to-keep-your-money-safe")
                    },
                    clearClaimStatus(e) {
                        e ? this.claimOk = !1 : this.claimFail = !1, this.claiming = !1
                    },
                    async loadKeysData() {
                        this.privateKeyError = "";
                        if (!await this.$storage.checkPassword(this.passwordForKey).catch(e => {
                                console.error(e), this.privateKeyError = "Invalid password"
                            })) return;
                        this.filter = "";
                        const e = [];
                        this.passwordForKey = "";
                        try {
                            [...this.$wallets].forEach(t => {
                                if (t instanceof c.Coin) {
                                    const i = {
                                        privateKey: t.privateKey,
                                        address: t.address,
                                        name: t.name,
                                        icon: this.$iconClass(t),
                                        ticker: t.ticker
                                    };
                                    "EOS" === t.ticker && (i.additionalKeys = JSON.parse(t.privateKey)), "ATOM" === t.ticker && (i.privateKey = s.default.decode(t.privateKey).privateKey.toString("hex")), "HBAR" === t.ticker && (i.address = t.publicKey), "XMR" === t.ticker && (i.additionalKeys = {
                                        privateKeyView: t.privateKeyView,
                                        privateKeySpend: t.privateKeySpend,
                                        publicKeySpend: t.publicKeySpend
                                    }), "ADA" === t.ticker && (i.additionalKeys = {
                                        shelleyPrivateKey: t.privateKey.shelleyKey,
                                        byronPrivateKey: t.privateKey.byronKey,
                                        shelleyAddress: t.address,
                                        byronAddress: t.privateKey.byronAddress
                                    }), e.push(i)
                                }
                            }), this.keys = e, this.innerKeyState = !0, this.privateKeyError = ""
                        } catch (e) {
                            this.privateKeyError = e.message, this.keys = []
                        }
                    }
                }
            };
            t.default = l
        },
        913: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(76));
            var n = {
                name: "SecurityTab",
                components: {
                    Edit: s.default
                },
                data: () => ({
                    oldPassword: "",
                    newPassword: "",
                    repeatNewPassword: "",
                    newPasswordError: "",
                    repeatNewPasswordError: "",
                    oldPasswordError: "",
                    passwordWasSuccessfullyChanged: !1,
                    btnDisabled: !1,
                    repeatPasswordType: "password"
                }),
                watch: {
                    oldPassword() {
                        this.btnDisabled = !1
                    },
                    newPassword() {
                        this.btnDisabled = !1
                    },
                    repeatNewPassword() {
                        this.btnDisabled = !1
                    }
                },
                methods: {
                    changeTypeRepeatPassword(e) {
                        this.repeatPasswordType = e
                    },
                    changeOldPassword() {
                        return this.oldPasswordError = "", this.newPasswordError = "", this.repeatNewPasswordError = "", "" === this.oldPassword ? (this.oldPasswordError = "Enter your password", this.$refs.oldPasswordRef.setFocus(), !1) : "" === this.newPassword ? (this.newPasswordError = "Enter your new password", this.$refs.newPasswordRef.setFocus(), !1) : this.newPassword !== this.repeatNewPassword ? (this.repeatNewPasswordError = "Passwords don't match", this.$refs.repeatNewPasswordRef.setFocus(), !1) : void(this.btnDisabled || (this.btnDisabled = !0, this.$storage.changePassword(this.oldPassword, this.newPassword).then(() => {
                            this.btnDisabled = !1, this.oldPassword = "", this.newPassword = "", this.repeatNewPassword = "", this.oldPasswordError = "", this.newPasswordError = "", this.repeatNewPasswordError = "", this.passwordWasSuccessfullyChanged = !0, setTimeout(() => {
                                this.passwordWasSuccessfullyChanged = !1
                            }, 5e3)
                        }).catch(e => {
                            this.oldPasswordError = e, this.btnDisabled = !1
                        })))
                    }
                }
            };
            t.default = n
        },
        914: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(31);
            i(1167);
            var s = {
                name: "Membership",
                data: () => ({
                    amount: 0
                }),
                computed: {
                    ...(0, a.mapGetters)(["hasTransaction"]),
                    settings() {
                        return this.$cashback.currentLevel(this.amount)
                    }
                },
                async mounted() {
                    this.$ga.event("User Movement", "membership-page", {
                        clientID: this.$ga.customParams.uid
                    }), this.amount = await this.$membership.getBalance()
                },
                methods: {
                    neededAmount(e) {
                        const t = e - this.amount;
                        return t < 0 ? "0" : String(Math.ceil(t))
                    },
                    isNeededAmount(e) {
                        return 0 !== e && 0 !== Number(this.neededAmount(e))
                    },
                    openCashbackExchange() {
                        const e = this.$wallets.findWalletV2({
                                ticker: "awc",
                                parentTicker: "bsc"
                            }),
                            t = this.$wallets.findWalletV2({
                                ticker: "eth"
                            });
                        this.$ga.event("User Actions", "Buy AWC Popup", {
                            clientID: this.$ga.customParams.uid
                        }), this.$router.push({
                            path: "/exchange",
                            query: {
                                coinToReceive: `${e.ticker}%|%${e.id}`,
                                coinToSend: `${t.ticker}%|%${t.id}`
                            }
                        })
                    }
                }
            };
            t.default = s
        }
    }
]);