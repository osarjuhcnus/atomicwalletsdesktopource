(window.webpackJsonp = window.webpackJsonp || []).push([
    [156], {
        1297: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "info-block"
                    }, [i("p", [t._v("\n    " + t._s(t.Texts.TextDesktop.customeToken("infoTitle")) + "\n  ")]), t._v(" "), i("img", {
                        staticClass: "qr",
                        attrs: {
                            src: t.generatedQR
                        }
                    }), t._v(" "), i("p", {
                        staticClass: "text-small"
                    }, [t._v("\n    Your Ethereum address:\n  ")]), t._v(" "), i("div", {
                        staticClass: "transition"
                    }, [i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.copied ? t._e() : i("div", {
                        staticClass: "address",
                        on: {
                            click: t.copy
                        }
                    }, [t._v("\n        " + t._s(t.coin.address) + "\n      ")])]), t._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.copied ? i("div", {
                        staticClass: "message"
                    }, [t._v("\n        Your address copied to Clipboard\n      ")]) : t._e()])], 1)])
                },
                s = []
        },
        1298: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", [t.isConfirmScreen ? i("div", {
                        staticClass: "confirm-screen"
                    }, [i("div", {
                        staticClass: "title"
                    }, [t._v("\n      Delete " + t._s(t.inputs.ticker) + " token from Atomic Wallet?\n    ")]), t._v(" "), i("p", [t._v("\n      " + t._s(t.Texts.TextDesktop.customeToken("deleteText")) + "\n    ")]), t._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [t.isEditToken ? i("button", {
                        staticClass: "button normal hover-white",
                        on: {
                            click: function(e) {
                                t.isConfirmScreen = !1
                            }
                        }
                    }, [t._v("\n        Back\n      ")]) : t._e(), t._v(" "), t.isEditToken ? i("button", {
                        staticClass: "button normal",
                        on: {
                            click: t.removeToken
                        }
                    }, [t._v("\n        Delete " + t._s(t.inputs.ticker) + "\n      ")]) : t._e()])]) : t._e(), t._v(" "), t.isConfirmScreen ? t._e() : i("div", {
                        staticClass: "form-wrapper"
                    }, [t.isEditToken ? t._e() : i("p", [t._v("\n      To add your ERC-20 token, paste its contract address into the field below. The rest will be\n      filled out automatically\n    ")]), t._v(" "), i("Edit", {
                        attrs: {
                            error: t.inputErrors.contract,
                            isPasteFromClipboard: !0,
                            placeholder: "Contract address (starts with 0x)",
                            type: "text"
                        },
                        on: {
                            input: t.inputContract
                        },
                        model: {
                            value: t.inputs.contract,
                            callback: function(e) {
                                t.$set(t.inputs, "contract", e)
                            },
                            expression: "inputs.contract"
                        }
                    }), t._v(" "), i("Edit", {
                        attrs: {
                            error: t.inputErrors.name,
                            isPasteFromClipboard: !0,
                            placeholder: "Token name",
                            type: "text"
                        },
                        on: {
                            input: t.validateName
                        },
                        model: {
                            value: t.inputs.name,
                            callback: function(e) {
                                t.$set(t.inputs, "name", e)
                            },
                            expression: "inputs.name"
                        }
                    }), t._v(" "), i("Edit", {
                        attrs: {
                            error: t.inputErrors.ticker,
                            isPasteFromClipboard: !0,
                            placeholder: "Ticker",
                            type: "text"
                        },
                        on: {
                            input: t.validateTicker
                        },
                        model: {
                            value: t.inputs.ticker,
                            callback: function(e) {
                                t.$set(t.inputs, "ticker", e)
                            },
                            expression: "inputs.ticker"
                        }
                    }), t._v(" "), i("Edit", {
                        attrs: {
                            error: t.inputErrors.decimals,
                            placeholder: "Decimals",
                            type: "text"
                        },
                        on: {
                            input: t.validateDecimals
                        },
                        model: {
                            value: t.inputs.decimals,
                            callback: function(e) {
                                t.$set(t.inputs, "decimals", e)
                            },
                            expression: "inputs.decimals"
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [t.isEditToken ? i("button", {
                        staticClass: "button normal hover-white",
                        class: {
                            "width-big": t.isEditToken
                        },
                        on: {
                            click: function(e) {
                                t.isConfirmScreen = !0
                            }
                        }
                    }, [t._v("\n        Delete\n      ")]) : t._e(), t._v(" "), t.isEditToken ? i("button", {
                        staticClass: "button normal",
                        class: {
                            "width-big": t.isEditToken
                        },
                        on: {
                            click: t.updateToken
                        }
                    }, [t._v("\n        Save\n      ")]) : t._e(), t._v(" "), t.isEditToken ? t._e() : i("button", {
                        staticClass: "button",
                        class: t.inputErrors.contract ? "disabled" : "",
                        on: {
                            click: t.saveToken
                        }
                    }, [t._v("\n        Add\n        token\n      ")])]), t._v(" "), t.isSuccess ? i("div", {
                        staticClass: "result-wrapper text-green"
                    }, [t._v("\n      Success! " + t._s(t.successTicker) + " is now available in your\n      wallet\n    ")]) : t._e(), t._v(" "), t.isUpdate ? i("div", {
                        staticClass: "result-wrapper"
                    }, [t._v("\n      Successfully updated token\n    ")]) : t._e()], 1)])
                },
                s = []
        },
        1299: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "token-popup popup"
                    }, [i("div", {
                        staticClass: "close",
                        on: {
                            click: t.close
                        }
                    }, [t._v("\n    ✕\n  ")]), t._v(" "), t.isEditToken ? i("div", {
                        staticClass: "title margin-bottom"
                    }, [t._v("\n    " + t._s(t.Texts.TextDesktop.customeToken("editTitle")) + "\n  ")]) : i("div", {
                        staticClass: "title"
                    }, [t._v("\n    " + t._s(t.Texts.TextDesktop.customeToken("addTitle")) + "\n  ")]), t._v(" "), i("div", {
                        staticClass: "content"
                    }, [t.isActiveContract || t.isEditToken ? t._e() : i("TokenAddAlert", {
                        attrs: {
                            coin: t.coin
                        }
                    }), t._v(" "), t.isActiveContract || t.isEditToken ? i("TokenAddForm", {
                        attrs: {
                            coin: t.coin,
                            isEditToken: t.isEditToken
                        },
                        on: {
                            closeForm: t.close
                        }
                    }) : t._e(), t._v(" "), t.isActiveContract || t.isEditToken ? t._e() : i("p", {
                        staticClass: "text-small"
                    }, [t._v("\n      " + t._s(t.Texts.TextDesktop.customeToken("infoText")) + "\n    ")]), t._v(" "), t.isActiveContract || t.isEditToken ? t._e() : i("button", {
                        staticClass: "button",
                        on: {
                            click: function(e) {
                                t.isActiveContract = !0
                            }
                        }
                    }, [t._v("\n      Add by contract\n    ")])], 1)])
                },
                s = []
        },
        1326: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        }
                    }, [t.showWarning ? t._e() : i("div", {
                        staticClass: "staking-exchange"
                    }, [i("div", {
                        staticClass: "content"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.coin
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.coin.ticker) + " staking\n      ")]), t._v(" "), i("p", {
                        staticClass: "text-default"
                    }, [i("span", {
                        staticClass: "text-green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "%\n        ")]), t._v(" Yearly yield\n      ")])], 1), t._v(" "), i("div", {
                        staticClass: "content text-left"
                    }, [i("div", {
                        staticClass: "info-wrap"
                    }, [i("p", {
                        staticClass: "info-text tooltip-hover"
                    }, [t._v("\n          " + t._s(t.currentValidator ? "Staked" : "Available") + "\n          "), i("span", {
                        staticClass: "tooltip"
                    }, [t._v("\n            Coins available for staking and sending.\n          ")])]), t._v(" "), i("p", {
                        staticClass: "info-text",
                        attrs: {
                            "data-test-id": "available_for_claim"
                        }
                    }, [t._v("\n          " + t._s(t._f("formatFinance")(t.coin.balances && t.coin.balances.available || 0)) + "\n          "), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v("\n            " + t._s(t.coin.ticker) + "\n          ")])])]), t._v(" "), i("div", {
                        staticClass: "info-wrap relative"
                    }, [i("p", {
                        staticClass: "info-text tooltip-hover"
                    }, [t._v("\n          Rewards"), i("span", {
                        staticClass: "tooltip"
                    }, [t._v("\n            Available for claim.\n          ")])]), t._v(" "), i("p", {
                        staticClass: "info-text",
                        attrs: {
                            "data-test-id": "reward_for_stake"
                        }
                    }, [t._v("\n          " + t._s(t._f("formatFinance")(t.coin.balances && t.coin.toCurrencyUnit(t.coin.balances.rewards || 0))) + "\n          "), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v("\n            " + t._s(t.coin.ticker) + "\n          ")])]), t._v(" "), i("div", {
                        staticClass: "claim-section tooltip-hover"
                    }, [i("transition", {
                        attrs: {
                            mode: "out-in",
                            name: "fade"
                        }
                    }, [t.claiming || t.claimOk || t.claimFail ? t._e() : i("button", {
                        key: "claim",
                        staticClass: "button small-gray claim",
                        class: {
                            disabled: t.isClaimDisabled
                        },
                        attrs: {
                            disabled: t.isClaimDisabled,
                            "data-test-id": "claim_button"
                        },
                        on: {
                            click: t.claimReward
                        }
                    }, [t._v("\n              Claim\n            ")])]), t._v(" "), t.isRewardEnough ? t._e() : i("div", {
                        staticClass: "tooltip"
                    }, [t._v("\n            The network fee is higher than the reward. Min claim is a\n            " + t._s(t.minReward) + " " + t._s(t.coin.ticker) + ".\n          ")])], 1)]), t._v(" "), t.currentValidator ? i("div", {
                        staticClass: "info-wrap space-nowrap offset-top"
                    }, [i("p", {
                        staticClass: "text-middle text-gray"
                    }, [t._v("\n          Current pool:\n          "), t.currentValidator ? i("span", {
                        attrs: {
                            "data-test-id": "ada_pool_value"
                        }
                    }, [t._v("\n            " + t._s(t.validatorMap[t.currentValidator] || t.currentValidator) + "\n          ")]) : t._e()])]) : t._e()]), t._v(" "), t.isCoinDisabled([t.actionClaim, t.actionStake]) || t.disabled ? i("div", {
                        staticClass: "info-wrap error"
                    }, [t._l([t.actionClaim, t.actionStake], (function(e) {
                        return i("div", {
                            key: e
                        }, [t.isCoinDisabled([e]) ? i("p", {
                            staticClass: "info-text multi"
                        }, [t._v("\n          " + t._s(t.getCoinDisabilityReason(e)) + "\n        ")]) : t._e()])
                    })), t._v(" "), t.disabled ? i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n        Min amount to stake is 4 ADA. Please top up your wallet to be able to\n        stake.\n      ")]) : t._e()], 2) : t._e(), t._v(" "), i("div", {
                        staticClass: "footer-section"
                    }, [i("div", {
                        staticClass: "button-wrap"
                    }, [i("button", {
                        staticClass: "button",
                        class: {
                            disabled: t.isCoinDisabled([t.actionStake])
                        },
                        attrs: {
                            "data-test-id": "choose_pool"
                        },
                        on: {
                            click: t.onClickPool
                        }
                    }, [t._v("\n          Choose pool\n        ")])]), t._v(" "), i("div", {
                        staticClass: "content"
                    }, [i("p", {
                        staticClass: "text-small text-gray m-t-20",
                        domProps: {
                            innerHTML: t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.detailsOnMainPage))
                        }
                    })])])]), t._v(" "), t.showWarning ? i("div", {
                        staticClass: "send-coin"
                    }, [i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n          " + t._s(t.stakingBalance) + " " + t._s(t.coin.ticker) + " is already staked and earns interest.\n        ")]), t._v(" "), i("p", [t._v("\n          If you change the pool, you will have to wait for 20 days to receive first rewards.\n        ")])]), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("button", {
                        staticClass: "button",
                        attrs: {
                            "data-test-id": "ada_cancel"
                        },
                        on: {
                            click: t.cancel
                        }
                    }, [t._v("\n          Cancel\n        ")]), t._v(" "), i("button", {
                        staticClass: "button normal hover-white",
                        class: {
                            disabled: t.isCoinDisabled([t.actionStake])
                        },
                        attrs: {
                            "data-test-id": "ada_continue"
                        },
                        on: {
                            click: t.makeStake
                        }
                    }, [t._v("\n          Continue\n        ")])])])]) : t._e()])
                },
                s = []
        },
        1329: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "text text_small text_cta",
                                    on: {
                                        click: function(e) {
                                            t.showHelpPopup = !0
                                        }
                                    }
                                }, [t._v("\n      " + t._s(t.Texts.TextDesktop.tipsTitle || t.Texts.TextDesktop.currentTicker + " staking hints") + "\n    ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), i("div", {
                        staticClass: "section"
                    }, [i("div", {
                        staticClass: "section__header"
                    }, [i("div", {
                        staticClass: "section__icon"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.$wallets.findWallet(t.staking.ticker)
                        }
                    })], 1), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.staking.displayTicker) + " staking\n      ")]), t._v(" "), t.staking.reward ? i("div", {
                        staticClass: "section__subtitle"
                    }, [i("div", {
                        staticClass: "text text_small text_green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "% Yearly yield\n        ")])]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "section__body"
                    }, [i("div", {
                        staticClass: "section__info"
                    }, t._l(t.stakingData, (function(e) {
                        return i("StakingInfoItem", t._b({
                            key: e.title,
                            on: {
                                badgeClick: e.badgeClick
                            }
                        }, "StakingInfoItem", e, !1))
                    })), 1), t._v(" "), t.detailsOnMainPage ? i("div", {
                        staticClass: "section__info m-t-26"
                    }, [i("p", {
                        staticClass: "new-text-medium2 new-text-gray2",
                        domProps: {
                            innerHTML: t._s(t.detailsOnMainPage)
                        }
                    })]) : t._e(), t._v(" "), t.isCoinDisabled(t.stakingAllNoWithdrawOperation) || t.errorMessage ? i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.isCoinDisabled(t.stakingAllNoWithdrawOperation) ? i("div", {
                        staticClass: "section__message"
                    }, t._l(t.stakingAllNoWithdrawOperation, (function(e) {
                        return i("p", {
                            key: e,
                            staticClass: "new-text-red2 new-text-medium2"
                        }, [t._v("\n            " + t._s(t.getCoinDisabilityReason(e)) + "\n          ")])
                    })), 0) : t._e(), t._v(" "), t.errorMessage ? i("div", {
                        staticClass: "section__message"
                    }, [i("p", {
                        staticClass: "new-text-red2 new-text-medium2"
                    }, [t._v("\n            " + t._s(t.errorMessage) + "\n          ")])]) : t._e()]) : t._e(), t._v(" "), i("div", {
                        staticClass: "section__info-row m-t-45"
                    }, [i("button", {
                        staticClass: "button",
                        on: {
                            click: function(e) {
                                return t.$emit("make", "Stake")
                            }
                        }
                    }, [t._v("\n          Stake " + t._s(t.staking.displayTicker) + "\n        ")]), t._v(" "), i("button", {
                        staticClass: "button outlined",
                        class: {
                            button_disabled: t.isCoinDisabled([t.actionUnstake])
                        },
                        on: {
                            click: t.doUnstake
                        }
                    }, [t._v("\n          Unstake\n        ")])])], 1), t._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.showHelpPopup ? i("SimplePopup", {
                        attrs: {
                            items: Object.values(t.Texts.TextDesktop.tips),
                            title: t.Texts.TextDesktop.tipsTitle
                        },
                        on: {
                            onClose: function(e) {
                                t.showHelpPopup = !1
                            }
                        }
                    }) : t._e()], 1)], 1)])
                },
                s = []
        },
        1330: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        }
                    }, [i("div", {
                        staticClass: "popup"
                    }, [i("div", {
                        staticClass: "staking-exchange"
                    }, [i("div", {
                        staticClass: "content"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.$wallets.findWallet(t.staking.ticker)
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n          " + t._s(t.staking.ticker) + " staking\n        ")]), t._v(" "), t.staking.reward ? i("p", {
                        staticClass: "text-default"
                    }, [t.staking.reward ? i("span", {
                        staticClass: "text-green"
                    }, [t._v("+" + t._s(t.staking.reward) + "%")]) : t._e(), t._v(" Yearly yield\n        ")]) : t._e()], 1), t._v(" "), i("div", {
                        staticClass: "content text-left"
                    }, [i("div", {
                        staticClass: "info-wrap"
                    }, [i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n            You have\n          ")]), t._v(" "), i("p", {
                        staticClass: "info-text text-right"
                    }, [t._v("\n            " + t._s(t._f("formatFinance")(t.staking.balance))), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v(" " + t._s(t.staking.ticker)), i("br")]), t._v(t._s(t.receiveBalance)), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v(" " + t._s(t.settings.receiveTicker))])])]), t._v(" "), i("div", {
                        staticClass: "info-wrap"
                    }, [i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n            Daily reward\n          ")]), t._v(" "), i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n            " + t._s(t._f("formatFinance")(t.dailyReward))), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v("\n              " + t._s(t.settings.receiveTicker) + "\n            ")])])])]), t._v(" "), i("div", {
                        staticClass: "content text-left"
                    }, [i("p", {
                        staticClass: "text-default",
                        domProps: {
                            innerHTML: t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.detailsOnMainPage))
                        }
                    })]), t._v(" "), t.isCoinDisabled([t.actionBuy]) ? i("div", {
                        staticClass: "info-wrap error"
                    }, [i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n          " + t._s(t.getCoinDisabilityReason(t.actionBuy)) + "\n        ")])]) : t._e(), t._v(" "), i("div", {
                        staticClass: "footer-section"
                    }, [i("div", {
                        staticClass: "button-wrap"
                    }, [t.isPossibleToBuy ? i("button", {
                        staticClass: "button",
                        class: {
                            disabled: t.isCoinDisabled([t.actionBuy])
                        },
                        on: {
                            click: function(e) {
                                return t.goBuy()
                            }
                        }
                    }, [t._v("\n            Buy " + t._s(t.staking.ticker) + "\n          ")]) : t._e()])])])])])
                },
                s = []
        },
        1331: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        attrs: {
                            isShowClose: !t.isClaiming
                        },
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        }
                    }, [i("div", {
                        staticClass: "popup"
                    }, [t.isShowPasswordForm ? i("div", {
                        staticClass: "send-coin"
                    }, [i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n            Claim " + t._s(t.coin.ticker) + "\n          ")])]), t._v(" "), i("Edit", {
                        ref: "confirmPassword",
                        attrs: {
                            error: t.inputsError.password,
                            focus: !0,
                            isShowPassword: !0,
                            type: t.inputTypePassword,
                            placeholder: "Password"
                        },
                        on: {
                            "enter-pressed": t.sendCoins
                        },
                        model: {
                            value: t.inputs.password,
                            callback: function(e) {
                                t.$set(t.inputs, "password", e)
                            },
                            expression: "inputs.password"
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("button", {
                        staticClass: "button normal hover-white",
                        on: {
                            click: t.backFromPassword
                        }
                    }, [t._v("\n            Back\n          ")]), t._v(" "), i("button", {
                        staticClass: "button",
                        on: {
                            click: t.sendCoins
                        }
                    }, [t._v("\n            Confirm\n          ")])])], 1)]) : t._e(), t._v(" "), t.isClaiming || t.isError || t.isSuccess || t.isShowPasswordForm ? t._e() : i("div", {
                        staticClass: "staking-exchange"
                    }, [i("div", {
                        staticClass: "content"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.$wallets.findWallet(t.staking.ticker)
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n          " + t._s(t.staking.ticker) + " staking\n        ")]), t._v(" "), t.staking.reward ? i("p", {
                        staticClass: "text-default"
                    }, [t.staking.reward ? i("span", {
                        staticClass: "text-green"
                    }, [t._v("+" + t._s(t.staking.reward) + "%")]) : t._e(), t._v(" Yearly yield\n        ")]) : t._e()], 1), t._v(" "), i("div", {
                        staticClass: "content text-left"
                    }, [i("div", {
                        staticClass: "info-wrap"
                    }, [i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n            You have\n          ")]), t._v(" "), i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n            " + t._s(t._f("formatFinance")(t.staking.balance))), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v("\n              " + t._s(t.staking.ticker) + "\n            ")])])]), t._v(" "), i("div", {
                        staticClass: "info-wrap"
                    }, [i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n            Unclaimed\n          ")]), t._v(" "), i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n            " + t._s(t._f("formatFinance")(t.unclaimed))), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v("\n              " + t._s(t.settings.receiveTicker) + "\n            ")])])])]), t._v(" "), i("div", {
                        staticClass: "content text-left"
                    }, [i("p", {
                        staticClass: "text-default"
                    }, [t._v("\n          " + t._s(t.Texts.TextDesktop.hints("mainPage.stakingInfo")) + "\n        ")]), t._v(" "), t.unclaimed > 0 ? i("p", {
                        staticClass: "text-default"
                    }, [i("span", {
                        staticClass: "text-default"
                    }, [t._v("\n            Very important!"), i("br")]), t._v("Claim all\n          your rewards before sending KMD out of the wallet.\n          Otherwise, unclaimed rewards will be lost\n        ")]) : i("p", {
                        staticClass: "text-default"
                    }, [t._v("\n          " + t._s(t.Texts.TextDesktop.hints("mainPage.rewardsTitle")) + " "), i("br"), t._v(" "), t._l(t.Texts.TextDesktop.hints("mainPage.rewardsInfo"), (function(e) {
                        return i("span", {
                            key: e,
                            staticClass: "text-default"
                        }, [t._v("\n            " + t._s(e) + " "), i("br")])
                    }))], 2), t._v(" "), t.errorMessage || t.isCoinDisabled([t.actionBuy, t.actionClaim]) ? i("div", {
                        staticClass: "info-wrap error"
                    }, [t._l([t.actionBuy, t.actionClaim], (function(e) {
                        return i("div", {
                            key: e
                        }, [t.isCoinDisabled([e]) ? i("p", {
                            staticClass: "info-text multi"
                        }, [t._v("\n              " + t._s(t.getCoinDisabilityReason(e)) + "\n            ")]) : t._e()])
                    })), t._v(" "), t.errorMessage ? i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n            " + t._s(t.errorMessage) + "\n          ")]) : t._e()], 2) : t._e()]), t._v(" "), i("div", {
                        staticClass: "footer-section"
                    }, [i("div", {
                        staticClass: "button-wrap"
                    }, [t.isPossibleToBuy ? i("button", {
                        staticClass: "button",
                        class: {
                            disabled: t.isCoinDisabled([t.actionBuy])
                        },
                        on: {
                            click: function(e) {
                                return t.goBuy()
                            }
                        }
                    }, [t._v("\n            Buy " + t._s(t.staking.ticker) + "\n          ")]) : t._e(), t._v(" "), i("button", {
                        staticClass: "button button-margin",
                        class: {
                            disabled: t.isCoinDisabled([t.actionClaim])
                        },
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n            claim\n            " + t._s(t.settings.receiveTicker) + "\n          ")])])])]), t._v(" "), i("div", {
                        staticClass: "send-coin staking-processing"
                    }, [!t.isClaiming || t.isError || t.isSuccess ? t._e() : i("div", {
                        staticClass: "sending"
                    }, [i("div", {
                        staticClass: "info-wrap"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.staking.icon
                    }), t._v(" "), i("p", [t._v("\n            Claiming " + t._s(t.staking.ticker) + "\n          ")])]), t._v(" "), i("div", {
                        staticClass: "loading"
                    })]), t._v(" "), t.isClaiming || !t.isError && !t.isSuccess ? t._e() : i("SendCoinResult", {
                        attrs: {
                            amount: String(t.successClaimedAmount),
                            coin: t.coin,
                            icon: t.staking.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            txid: t.txId,
                            contactData: {
                                issue: "Staking",
                                tags: ["staking_tag"]
                            },
                            mailTitle: "Sending error",
                            sendType: "Claim"
                        },
                        on: {
                            backToForm: t.backToStake,
                            backToWallets: t.backToStakeTable,
                            tryAgain: t.backToStake
                        }
                    })], 1)])])
                },
                s = []
        },
        1332: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "text text_small text_cta",
                                    on: {
                                        click: function(e) {
                                            t.showHelpPopup = !0
                                        }
                                    }
                                }, [t._v("\n      " + t._s(t.Texts.TextDesktop.tipsTitle || t.Texts.TextDesktop.currentTicker + " staking hints") + "\n    ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), i("div", {
                        staticClass: "section"
                    }, [i("div", {
                        staticClass: "section__header"
                    }, [i("div", {
                        staticClass: "section__icon"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.coin
                        }
                    })], 1), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.staking.ticker) + " staking\n      ")]), t._v(" "), i("div", {
                        staticClass: "section__subtitle"
                    }, [i("div", {
                        staticClass: "text text_small text_green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "% Yearly yield\n        ")])])]), t._v(" "), i("div", {
                        staticClass: "section__body"
                    }, [i("div", {
                        staticClass: "section__info"
                    }, t._l(t.stakingData, (function(e) {
                        return i("StakingInfoItem", t._b({
                            key: e.title,
                            on: {
                                badgeClick: e.badgeClick
                            }
                        }, "StakingInfoItem", e, !1))
                    })), 1), t._v(" "), t.isCoinDisabled(t.stakingAllNoWithdrawOperation) ? i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.isCoinDisabled(t.stakingAllNoWithdrawOperation) ? i("div", {
                        staticClass: "section__message"
                    }, t._l(t.stakingAllNoWithdrawOperation, (function(e) {
                        return i("p", {
                            key: e,
                            staticClass: "new-text-red2 new-text-medium2"
                        }, [t._v("\n            " + t._s(t.getCoinDisabilityReason(e)) + "\n          ")])
                    })), 0) : t._e()]) : t._e(), t._v(" "), i("div", {
                        staticClass: "section__info-row m-t-45"
                    }, [i("button", {
                        staticClass: "button",
                        attrs: {
                            "data-test-id": "stake_atom"
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("makeStake")
                            }
                        }
                    }, [t._v("\n          Stake " + t._s(t.staking.ticker) + "\n        ")]), t._v(" "), i("button", {
                        staticClass: "button outlined",
                        class: {
                            button_disabled: t.isCoinDisabled([t.actionUnstake]) || t.total <= 0
                        },
                        attrs: {
                            "data-test-id": "unstake_atom"
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("makeUnstake")
                            }
                        }
                    }, [t._v("\n          Unstake\n        ")])]), t._v(" "), i("div", {
                        staticClass: "content text-left"
                    }, [i("p", {
                        staticClass: "text-default",
                        domProps: {
                            innerHTML: t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.detailsOnMainPage))
                        }
                    })])], 1), t._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.showHelpPopup ? i("SimplePopup", {
                        attrs: {
                            items: Object.values(t.Texts.TextDesktop.tips),
                            title: t.Texts.TextDesktop.tipsTitle
                        },
                        on: {
                            onClose: function(e) {
                                t.showHelpPopup = !1
                            }
                        }
                    }) : t._e()], 1)], 1)])
                },
                s = []
        },
        1333: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        }
                    }, [i("div", {
                        staticClass: "staking-exchange"
                    }, [i("div", {
                        staticClass: "content"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.$wallets.findWallet(t.staking.ticker)
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.staking.displayTicker) + " staking\n      ")]), t._v(" "), t.reward ? i("p", {
                        staticClass: "text-default"
                    }, [i("span", {
                        staticClass: "text-green"
                    }, [t._v("\n          +" + t._s(t.reward) + "%\n        ")]), t._v(" Per year\n      ")]) : t._e()], 1), t._v(" "), i("div", {
                        staticClass: "content text-left"
                    }, [i("div", {
                        staticClass: "info-wrap"
                    }, [i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n          Available\n        ")]), t._v(" "), i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n          " + t._s(t._f("formatFinance")(t.available))), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v("\n            " + t._s(t.staking.displayTicker) + "\n          ")])])]), t._v(" "), i("div", {
                        staticClass: "info-wrap"
                    }, [i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n          Staked\n        ")]), t._v(" "), i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n          " + t._s(t._f("formatFinance")(t.staked))), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v("\n            " + t._s(t.staking.displayTicker) + "\n          ")])])]), t._v(" "), i("div", {
                        staticClass: "info-wrap"
                    }, [i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n          Total\n        ")]), t._v(" "), i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n          " + t._s(t._f("formatFinance")(t.total))), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v("\n            " + t._s(t.staking.displayTicker) + "\n          ")])])]), t._v(" "), i("div", [i("p", {
                        staticClass: "text-default",
                        domProps: {
                            innerHTML: t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.detailsOnMainPage))
                        }
                    })])]), t._v(" "), t.isCoinDisabled([t.actionStake, t.actionUnstake]) ? i("div", {
                        staticClass: "info-wrap error"
                    }, t._l([t.actionStake, t.actionUnstake], (function(e) {
                        return i("div", {
                            key: e
                        }, [t.isCoinDisabled([e]) ? i("p", {
                            staticClass: "info-text multi"
                        }, [t._v("\n          " + t._s(t.getCoinDisabilityReason(e)) + "\n        ")]) : t._e()])
                    })), 0) : t._e(), t._v(" "), i("div", {
                        staticClass: "footer-section"
                    }, [i("div", {
                        staticClass: "button-wrap"
                    }, [i("button", {
                        staticClass: "button",
                        class: {
                            disabled: t.isCoinDisabled([t.actionStake])
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("makeStake")
                            }
                        }
                    }, [t._v("\n          stake\n        ")]), t._v(" "), i("button", {
                        staticClass: "button button-gray button-margin",
                        class: {
                            disabled: t.isCoinDisabled([t.actionUnstake])
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("makeUnstake")
                            }
                        }
                    }, [t._v("\n          unstake\n        ")])])])])])
                },
                s = []
        },
        1334: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "text text_small text_cta",
                                    on: {
                                        click: function(e) {
                                            t.showHelpPopup = !0
                                        }
                                    }
                                }, [t._v("\n      " + t._s(t.Texts.TextDesktop.tipsTitle || t.Texts.TextDesktop.currentTicker + " staking hints") + "\n    ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), i("div", {
                        staticClass: "section"
                    }, [i("div", {
                        staticClass: "section__header"
                    }, [i("div", {
                        staticClass: "section__icon"
                    }, [i("div", {
                        staticClass: "icon icon_coin",
                        class: "icon-" + t.coin.ticker.toLowerCase()
                    })]), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.Texts.TextDesktop.labels.title) + " " + t._s(t.coin.ticker) + "\n      ")]), t._v(" "), i("div", {
                        staticClass: "section__subtitle"
                    }, [i("div", {
                        staticClass: "text text_small text_green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "% Yearly yield\n        ")])])]), t._v(" "), i("div", {
                        staticClass: "section__body"
                    }, [i("div", {
                        staticClass: "section__info"
                    }, t._l(t.stakingData, (function(e) {
                        return i("StakingInfoItem", t._b({
                            key: e.title,
                            on: {
                                badgeClick: e.badgeClick
                            }
                        }, "StakingInfoItem", e, !1))
                    })), 1), t._v(" "), t.detailsOnMainPage ? i("div", {
                        staticClass: "section__info m-t-26"
                    }, [i("p", {
                        staticClass: "new-text-medium2 new-text-gray2",
                        domProps: {
                            innerHTML: t._s(t.detailsOnMainPage)
                        }
                    })]) : t._e(), t._v(" "), t.errorMessage ? i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.errorMessage ? i("div", {
                        staticClass: "section__message"
                    }, [i("p", {
                        staticClass: "new-text-red2 new-text-medium2"
                    }, [t._v(t._s(t.errorMessage))])]) : t._e()]) : t._e(), t._v(" "), i("div", {
                        staticClass: "section__info-row m-t-45"
                    }, [i("button", {
                        staticClass: "button",
                        on: {
                            click: function(e) {
                                return t.$emit("makeStake")
                            }
                        }
                    }, [t._v("\n          Stake " + t._s(t.staking.displayTicker) + "\n        ")]), t._v(" "), i("button", {
                        staticClass: "button outlined",
                        on: {
                            click: t.unstake
                        }
                    }, [t._v("\n          Unstake\n        ")])])], 1), t._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.showHelpPopup ? i("SimplePopup", {
                        attrs: {
                            items: Object.values(t.Texts.TextDesktop.tips),
                            title: t.Texts.TextDesktop.tipsTitle
                        },
                        on: {
                            onClose: function(e) {
                                t.showHelpPopup = !1
                            }
                        }
                    }) : t._e()], 1)], 1)])
                },
                s = []
        },
        1335: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "text text_small text_cta",
                                    on: {
                                        click: function(e) {
                                            t.showHelpPopup = !0
                                        }
                                    }
                                }, [t._v("\n      " + t._s(t.Texts.TextDesktop.tipsTitle || t.Texts.TextDesktop.currentTicker + " staking hints") + "\n    ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), i("div", {
                        staticClass: "section"
                    }, [i("div", {
                        staticClass: "section__header"
                    }, [i("div", {
                        staticClass: "section__icon"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.coin
                        }
                    })], 1), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.staking.displayTicker) + " staking\n      ")]), t._v(" "), i("div", {
                        staticClass: "section__subtitle"
                    }, [i("div", {
                        staticClass: "text text_small text_green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "% Yearly yield\n        ")])])]), t._v(" "), i("div", {
                        staticClass: "section__body"
                    }, [i("div", {
                        staticClass: "section__info"
                    }, t._l(t.stakingData, (function(e) {
                        return i("StakingInfoItem", t._b({
                            key: e.title,
                            on: {
                                badgeClick: e.badgeClick
                            }
                        }, "StakingInfoItem", e, !1))
                    })), 1), t._v(" "), t.detailsOnMainPage ? i("div", {
                        staticClass: "section__info m-t-26"
                    }, [i("p", {
                        staticClass: "new-text-medium2 new-text-gray2",
                        domProps: {
                            innerHTML: t._s(t.detailsOnMainPage)
                        }
                    })]) : t._e(), t._v(" "), t.isCoinDisabled(t.stakingAllNoWithdrawOperation) ? i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.isCoinDisabled(t.stakingAllNoWithdrawOperation) ? i("div", {
                        staticClass: "section__message"
                    }, t._l(t.stakingAllNoWithdrawOperation, (function(e) {
                        return i("p", {
                            key: e,
                            staticClass: "new-text-red2 new-text-medium2"
                        }, [t._v("\n            " + t._s(t.getCoinDisabilityReason(e)) + "\n          ")])
                    })), 0) : t._e()]) : t._e(), t._v(" "), i("div", {
                        staticClass: "section__info-row m-t-45"
                    }, [i("button", {
                        staticClass: "button",
                        on: {
                            click: function(e) {
                                return t.$emit("make", "Stake")
                            }
                        }
                    }, [t._v("\n          Stake " + t._s(t.staking.displayTicker) + "\n        ")]), t._v(" "), i("button", {
                        staticClass: "button outlined",
                        class: {
                            button_disabled: t.isCoinDisabled([t.actionUnstake]) || t.staked <= 0
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("make", "Unstake")
                            }
                        }
                    }, [t._v("\n          Unstake\n        ")])])], 1), t._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.showHelpPopup ? i("SimplePopup", {
                        attrs: {
                            items: Object.values(t.Texts.TextDesktop.tips),
                            title: t.Texts.TextDesktop.tipsTitle
                        },
                        on: {
                            onClose: function(e) {
                                t.showHelpPopup = !1
                            }
                        }
                    }) : t._e()], 1)], 1)])
                },
                s = []
        },
        1336: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "text text_small text_cta",
                                    on: {
                                        click: function(e) {
                                            t.showHelpPopup = !0
                                        }
                                    }
                                }, [t._v("\n      " + t._s(t.Texts.TextDesktop.tipsTitle || t.Texts.TextDesktop.currentTicker + " staking hints") + "\n    ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), i("div", {
                        staticClass: "section"
                    }, [i("div", {
                        staticClass: "section__header"
                    }, [i("div", {
                        staticClass: "section__icon"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.coin
                        }
                    })], 1), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.staking.displayTicker) + " staking\n      ")]), t._v(" "), i("div", {
                        staticClass: "section__subtitle"
                    }, [i("div", {
                        staticClass: "text text_small text_green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "% Yearly yield\n        ")])])]), t._v(" "), i("div", {
                        staticClass: "section__body"
                    }, [i("div", {
                        staticClass: "section__info"
                    }, t._l(t.stakingData, (function(e) {
                        return i("StakingInfoItem", t._b({
                            key: e.title,
                            on: {
                                badgeClick: e.badgeClick
                            }
                        }, "StakingInfoItem", e, !1))
                    })), 1), t._v(" "), t.detailsOnMainPage ? i("div", {
                        staticClass: "section__info m-t-26"
                    }, [i("p", {
                        staticClass: "new-text-medium2 new-text-gray2",
                        domProps: {
                            innerHTML: t._s(t.detailsOnMainPage)
                        }
                    })]) : t._e(), t._v(" "), t.isCoinDisabled(t.stakingAllOperation) || t.errorMessage ? i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.isCoinDisabled(t.stakingAllOperation) ? i("div", {
                        staticClass: "section__message"
                    }, t._l(t.stakingAllOperation, (function(e) {
                        return i("p", {
                            key: e,
                            staticClass: "new-text-red2 new-text-medium2"
                        }, [t._v("\n            " + t._s(t.getCoinDisabilityReason(e)) + "\n          ")])
                    })), 0) : t._e(), t._v(" "), t.errorMessage ? i("div", {
                        staticClass: "section__message"
                    }, [i("p", {
                        staticClass: "new-text-red2 new-text-medium2"
                    }, [t._v(t._s(t.errorMessage))])]) : t._e()]) : t._e(), t._v(" "), i("div", {
                        staticClass: "section__info-row m-t-45"
                    }, [i("button", {
                        staticClass: "button rounded",
                        on: {
                            click: function(e) {
                                return t.$emit("makeStake")
                            }
                        }
                    }, [t._v("\n          Stake " + t._s(t.staking.displayTicker) + "\n        ")]), t._v(" "), i("button", {
                        staticClass: "button outlined",
                        class: {
                            button_disabled: t.isCoinDisabled([t.actionUnstake])
                        },
                        on: {
                            click: t.unstake
                        }
                    }, [t._v("\n          Unstake\n        ")])])], 1), t._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.showHelpPopup ? i("SimplePopup", {
                        attrs: {
                            items: Object.values(t.Texts.TextDesktop.tips),
                            title: t.Texts.TextDesktop.tipsTitle
                        },
                        on: {
                            onClose: function(e) {
                                t.showHelpPopup = !1
                            }
                        }
                    }) : t._e()], 1)], 1)])
                },
                s = []
        },
        1337: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "text text_small text_cta",
                                    on: {
                                        click: function(e) {
                                            t.showHelpPopup = !0
                                        }
                                    }
                                }, [t._v("\n      " + t._s(t.Texts.TextDesktop.tipsTitle || t.Texts.TextDesktop.currentTicker + " staking hints") + "\n    ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), i("div", {
                        staticClass: "section"
                    }, [i("div", {
                        staticClass: "section__header"
                    }, [i("div", {
                        staticClass: "section__icon"
                    }, [i("div", {
                        staticClass: "icon icon_coin",
                        class: "icon-" + t.coin.ticker.toLowerCase()
                    })]), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.coin.ticker) + " staking\n      ")]), t._v(" "), i("div", {
                        staticClass: "section__subtitle"
                    }, [i("div", {
                        staticClass: "text text_small text_green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "% yearly yield\n        ")])])]), t._v(" "), i("div", {
                        staticClass: "section__body"
                    }, [i("div", {
                        staticClass: "section__info"
                    }, t._l(t.stakingData, (function(e) {
                        return i("StakingInfoItem", t._b({
                            key: e.title,
                            on: {
                                badgeClick: e.badgeClick
                            }
                        }, "StakingInfoItem", e, !1))
                    })), 1), t._v(" "), t.detailsOnMainPage ? i("div", {
                        staticClass: "section__info m-t-26"
                    }, [i("p", {
                        staticClass: "new-text-medium2 new-text-gray2",
                        domProps: {
                            innerHTML: t._s(t.detailsOnMainPage)
                        }
                    })]) : t._e(), t._v(" "), t.isCoinDisabled(t.stakingAllOperation) ? i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.isCoinDisabled(t.stakingAllOperation) ? i("div", {
                        staticClass: "section__message"
                    }, t._l(t.stakingAllOperation, (function(e) {
                        return i("p", {
                            key: e,
                            staticClass: "new-text-red2 new-text-medium2"
                        }, [t._v("\n            " + t._s(t.getCoinDisabilityReason(e)) + "\n          ")])
                    })), 0) : t._e()]) : t._e(), t._v(" "), i("div", {
                        staticClass: "section__info-row m-t-45"
                    }, [i("button", {
                        staticClass: "button",
                        on: {
                            click: function(e) {
                                return t.$emit("makeStake")
                            }
                        }
                    }, [t._v("\n          Stake " + t._s(t.staking.displayTicker) + "\n        ")]), t._v(" "), i("button", {
                        staticClass: "button outlined",
                        class: {
                            button_disabled: t.isCoinDisabled([t.actionUnstake])
                        },
                        on: {
                            click: t.unstake
                        }
                    }, [t._v("\n          Unstake\n        ")])])], 1), t._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.showHelpPopup ? i("SimplePopup", {
                        attrs: {
                            items: Object.values(t.Texts.TextDesktop.tips),
                            title: t.Texts.TextDesktop.tipsTitle
                        },
                        on: {
                            onClose: function(e) {
                                t.showHelpPopup = !1
                            }
                        }
                    }) : t._e()], 1)], 1)])
                },
                s = []
        },
        1338: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "text text_small text_cta",
                                    on: {
                                        click: function(e) {
                                            t.showHelpPopup = !0
                                        }
                                    }
                                }, [t._v("\n      " + t._s(t.Texts.TextDesktop.tipsTitle || t.Texts.TextDesktop.currentTicker + " staking hints") + "\n    ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), i("div", {
                        staticClass: "section"
                    }, [i("div", {
                        staticClass: "section__header"
                    }, [i("div", {
                        staticClass: "section__icon"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.$wallets.findWallet(t.staking.ticker)
                        }
                    })], 1), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.staking.displayTicker) + " staking\n      ")]), t._v(" "), t.staking.reward ? i("div", {
                        staticClass: "section__subtitle"
                    }, [i("div", {
                        staticClass: "text text_small text_green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "% Yearly yield\n        ")])]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "section__body"
                    }, [i("div", {
                        staticClass: "section__info"
                    }, t._l(t.stakingData, (function(e) {
                        return i("StakingInfoItem", t._b({
                            key: e.title,
                            on: {
                                badgeClick: e.badgeClick
                            }
                        }, "StakingInfoItem", e, !1))
                    })), 1), t._v(" "), t.isCoinDisabled(t.stakingAllNoWithdrawOperation) || t.errorMessage ? i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.isCoinDisabled(t.stakingAllNoWithdrawOperation) ? i("div", {
                        staticClass: "section__message"
                    }, t._l(t.stakingAllNoWithdrawOperation, (function(e) {
                        return i("p", {
                            key: e,
                            staticClass: "new-text-red2 new-text-medium2"
                        }, [t._v("\n            " + t._s(t.getCoinDisabilityReason(e)) + "\n          ")])
                    })), 0) : t._e(), t._v(" "), t.errorMessage ? i("div", {
                        staticClass: "section__message"
                    }, [i("p", {
                        staticClass: "new-text-red2 new-text-medium2"
                    }, [t._v("\n            " + t._s(t.errorMessage) + "\n          ")])]) : t._e()]) : t._e(), t._v(" "), i("div", {
                        staticClass: "section__info-row m-t-45"
                    }, [i("button", {
                        staticClass: "button",
                        on: {
                            click: function(e) {
                                return t.$emit("make", "Stake")
                            }
                        }
                    }, [t._v("\n          Stake " + t._s(t.staking.displayTicker) + "\n        ")]), t._v(" "), i("button", {
                        staticClass: "button outlined",
                        class: {
                            button_disabled: t.isCoinDisabled([t.actionUnstake])
                        },
                        on: {
                            click: t.doUnstake
                        }
                    }, [t._v("\n          Unstake\n        ")])])], 1), t._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.showHelpPopup ? i("SimplePopup", {
                        attrs: {
                            items: Object.values(t.Texts.TextDesktop.tips),
                            title: t.Texts.TextDesktop.tipsTitle
                        },
                        on: {
                            onClose: function(e) {
                                t.showHelpPopup = !1
                            }
                        }
                    }) : t._e()], 1)], 1)])
                },
                s = []
        },
        1339: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        }
                    }, [i("div", {
                        staticClass: "staking-exchange"
                    }, [i("div", {
                        staticClass: "content"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.coin
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.coin.ticker) + " staking\n      ")]), t._v(" "), t.staking.reward ? i("p", {
                        staticClass: "text-default"
                    }, [i("span", {
                        staticClass: "text-green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "%\n        ")]), t._v(" Yearly yield\n      ")]) : t._e()], 1), t._v(" "), i("div", {
                        staticClass: "content text-left"
                    }, [Number(t.stakingBalance) <= 0 ? i("div", {
                        staticClass: "info-wrap"
                    }, [i("p", {
                        staticClass: "info-text tooltip-hover"
                    }, [t._v("\n          Available"), i("span", {
                        staticClass: "tooltip"
                    }, [t._v("\n            Coins available for staking, sending.\n          ")])]), t._v(" "), i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n          " + t._s(t._f("formatFinance")(t.available))), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v("\n            " + t._s(t.coin.ticker) + "\n          ")])])]) : i("div", {
                        staticClass: "info-wrap"
                    }, [i("p", {
                        staticClass: "info-text tooltip-hover"
                    }, [t._v("\n          Staked"), i("span", {
                        staticClass: "tooltip"
                    }, [t._v("\n            Coins delegated to validators.\n          ")])]), t._v(" "), i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n          " + t._s(t._f("formatFinance")(t.stakingBalance))), i("span", {
                        staticClass: "info-text info-text-gray"
                    }, [t._v(" " + t._s(t.coin.ticker))])])]), t._v(" "), t.currentValidator || t.coin.balances && t.coin.balances.staking.validator ? i("div", {
                        staticClass: "info-wrap space-nowrap offset-top"
                    }, [i("p", {
                        staticClass: "text-middle text-gray"
                    }, [t._v("\n          Current validator:"), t.currentValidator ? i("span", [t._v(" " + t._s(t.currentValidator.name) + " - " + t._s((100 * t.currentValidator.estimatedRoi).toFixed(2)) + "%"), i("span", {
                        staticClass: "text-gray"
                    }, [t._v("\n            yearly yield\n          ")])]) : i("span", [t._v("\n            " + t._s(t.coin.balances.staking && t.coin.balances.staking.validator) + "\n          ")])])]) : t._e()]), t._v(" "), t.isCoinDisabled([t.actionStake]) ? i("div", {
                        staticClass: "info-wrap error"
                    }, [i("p", {
                        staticClass: "info-text"
                    }, [t._v("\n        " + t._s(t.getCoinDisabilityReason(t.actionStake)) + "\n      ")])]) : t._e(), t._v(" "), i("div", {
                        staticClass: "footer-section"
                    }, [i("div", {
                        staticClass: "button-wrap"
                    }, [i("button", {
                        staticClass: "button",
                        class: {
                            disabled: t.isCoinDisabled([t.actionStake]) || !Number(t.available)
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("makeStake")
                            }
                        }
                    }, [t._v("\n          Choose\n          baker\n        ")])]), t._v(" "), i("div", {
                        staticClass: "content"
                    }, [i("p", {
                        staticClass: "text-small text-gray m-t-20",
                        domProps: {
                            innerHTML: t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.detailsOnMainPage))
                        }
                    })])])])])
                },
                s = []
        },
        1340: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "text text_small text_cta",
                                    on: {
                                        click: function(e) {
                                            t.showHelpPopup = !0
                                        }
                                    }
                                }, [t._v("\n      " + t._s(t.Texts.TextDesktop.tipsTitle || t.Texts.TextDesktop.currentTicker + " staking hints") + "\n    ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), i("div", {
                        staticClass: "section"
                    }, [i("div", {
                        staticClass: "section__header"
                    }, [i("div", {
                        staticClass: "section__icon"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.coin
                        }
                    })], 1), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.staking.displayTicker) + " staking\n      ")]), t._v(" "), i("div", {
                        staticClass: "section__subtitle"
                    }, [i("div", {
                        staticClass: "text text_small text_green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "% Yearly yield\n        ")])])]), t._v(" "), i("div", {
                        staticClass: "section__body"
                    }, [i("div", {
                        staticClass: "section__info"
                    }, t._l(t.stakingData, (function(e) {
                        return i("StakingInfoItem", t._b({
                            key: e.title,
                            on: {
                                badgeClick: e.badgeClick
                            }
                        }, "StakingInfoItem", e, !1))
                    })), 1), t._v(" "), t.detailsOnMainPage ? i("div", {
                        staticClass: "section__info m-t-26"
                    }, [i("p", {
                        staticClass: "new-text-medium2 new-text-gray2",
                        domProps: {
                            innerHTML: t._s(t.detailsOnMainPage)
                        }
                    })]) : t._e(), t._v(" "), t.isCoinDisabled(t.stakingAllOperation) || t.message ? i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.isCoinDisabled(t.stakingAllOperation) ? i("div", {
                        staticClass: "section__message"
                    }, t._l(t.stakingAllOperation, (function(e) {
                        return i("p", {
                            key: e,
                            staticClass: "new-text-red2 new-text-medium2"
                        }, [t._v("\n            " + t._s(t.getCoinDisabilityReason(e)) + "\n          ")])
                    })), 0) : t._e(), t._v(" "), t.message ? i("div", {
                        staticClass: "section__message"
                    }, [i("p", {
                        staticClass: "new-text-red2 new-text-medium2"
                    }, [t._v(t._s(t.message))])]) : t._e()]) : t._e(), t._v(" "), i("div", {
                        staticClass: "section__info-row m-t-45"
                    }, [i("button", {
                        staticClass: "button rounded",
                        on: {
                            click: function(e) {
                                return t.$emit("makeStake")
                            }
                        }
                    }, [t._v("\n          Stake " + t._s(t.staking.displayTicker) + "\n        ")]), t._v(" "), i("button", {
                        staticClass: "button outlined",
                        class: {
                            button_disabled: t.isCoinDisabled([t.actionUnstake]) || !t.isAvailableUnstake
                        },
                        on: {
                            click: t.unstake
                        }
                    }, [t._v("\n          Unstake\n        ")])])], 1), t._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.showHelpPopup ? i("SimplePopup", {
                        attrs: {
                            items: Object.values(t.Texts.TextDesktop.tips),
                            title: t.Texts.TextDesktop.tipsTitle
                        },
                        on: {
                            onClose: function(e) {
                                t.showHelpPopup = !1
                            }
                        }
                    }) : t._e()], 1)], 1)])
                },
                s = []
        },
        1341: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "text text_small text_cta",
                                    on: {
                                        click: function(e) {
                                            t.showHelpPopup = !0
                                        }
                                    }
                                }, [t._v("\n      " + t._s(t.Texts.TextDesktop.tipsTitle || t.Texts.TextDesktop.currentTicker + " staking hints") + "\n    ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), i("div", {
                        staticClass: "section"
                    }, [i("div", {
                        staticClass: "section__header"
                    }, [i("div", {
                        staticClass: "section__icon"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.coin
                        }
                    })], 1), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.staking.displayTicker) + " staking\n      ")]), t._v(" "), i("div", {
                        staticClass: "section__subtitle"
                    }, [i("div", {
                        staticClass: "text text_small text_green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "% Yearly yield\n        ")])])]), t._v(" "), i("div", {
                        staticClass: "section__body"
                    }, [i("div", {
                        staticClass: "section__info"
                    }, t._l(t.stakingData, (function(e) {
                        return i("StakingInfoItem", t._b({
                            key: e.title,
                            on: {
                                badgeClick: e.badgeClick
                            }
                        }, "StakingInfoItem", e, !1))
                    })), 1), t._v(" "), t.detailsOnMainPage ? i("div", {
                        staticClass: "section__info m-t-26"
                    }, [i("p", {
                        staticClass: "new-text-medium2 new-text-gray2",
                        domProps: {
                            innerHTML: t._s(t.detailsOnMainPage)
                        }
                    })]) : t._e(), t._v(" "), t.isCoinDisabled(t.stakingAllOperation) || t.errorMessage ? i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.isCoinDisabled(t.stakingAllOperation) ? i("div", {
                        staticClass: "section__message"
                    }, t._l(t.stakingAllOperation, (function(e) {
                        return i("p", {
                            key: e,
                            staticClass: "new-text-red2 new-text-medium2"
                        }, [t._v("\n            " + t._s(t.getCoinDisabilityReason(e)) + "\n          ")])
                    })), 0) : t._e(), t._v(" "), t.errorMessage ? i("div", {
                        staticClass: "section__message"
                    }, [i("p", {
                        staticClass: "new-text-red2 new-text-medium2"
                    }, [t._v(t._s(t.errorMessage))])]) : t._e()]) : t._e(), t._v(" "), i("div", {
                        staticClass: "section__info-row m-t-45"
                    }, [i("button", {
                        staticClass: "button rounded",
                        on: {
                            click: function(e) {
                                return t.$emit("makeStake")
                            }
                        }
                    }, [t._v("\n          Stake " + t._s(t.staking.displayTicker) + "\n        ")]), t._v(" "), i("button", {
                        staticClass: "button outlined",
                        class: {
                            button_disabled: t.isCoinDisabled([t.actionUnstake])
                        },
                        on: {
                            click: t.unstake
                        }
                    }, [t._v("\n          Unstake\n        ")])])], 1), t._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.showHelpPopup ? i("SimplePopup", {
                        attrs: {
                            items: Object.values(t.Texts.TextDesktop.tips),
                            title: t.Texts.TextDesktop.tipsTitle
                        },
                        on: {
                            onClose: function(e) {
                                t.showHelpPopup = !1
                            }
                        }
                    }) : t._e()], 1)], 1)])
                },
                s = []
        },
        1342: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("AtomicPopup", {
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [a("div", {
                                    staticClass: "text text_small text_cta",
                                    on: {
                                        click: function(e) {
                                            t.showHelpPopup = !0
                                        }
                                    }
                                }, [t._v("\n      " + t._s(t.Texts.TextDesktop.tipsTitle || t.Texts.TextDesktop.currentTicker + " staking hints") + "\n    ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), a("div", {
                        staticClass: "section"
                    }, [a("div", {
                        staticClass: "section__header"
                    }, [a("div", {
                        staticClass: "section__icon"
                    }, [a("div", {
                        staticClass: "icon icon_coin",
                        class: "icon-" + t.coin.ticker.toLowerCase()
                    })]), t._v(" "), a("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.Texts.TextDesktop.labels.title) + " " + t._s(t.coin.ticker) + "\n      ")]), t._v(" "), a("div", {
                        staticClass: "section__subtitle"
                    }, [a("div", {
                        staticClass: "text text_small text_green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "% Yearly yield\n        ")])])]), t._v(" "), a("div", {
                        staticClass: "section__body"
                    }, [a("div", {
                        staticClass: "section__info"
                    }, t._l(t.stakingData, (function(e) {
                        return a("StakingInfoItem", t._b({
                            key: e.title,
                            on: {
                                badgeClick: e.badgeClick
                            }
                        }, "StakingInfoItem", e, !1))
                    })), 1), t._v(" "), t.detailsOnMainPage ? a("div", {
                        staticClass: "section__info m-t-26"
                    }, [a("p", {
                        staticClass: "new-text-medium2 new-text-gray2",
                        domProps: {
                            innerHTML: t._s(t.detailsOnMainPage)
                        }
                    })]) : t._e(), t._v(" "), a("div", {
                        staticClass: "section__message"
                    }, [t.errorMessage ? a("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [a("div", {
                        staticClass: "error"
                    }, [t._v("\n            " + t._s(t.errorMessage) + "\n          ")])]) : t._e()], 1), t._v(" "), a("div", {
                        staticClass: "section__info-row m-t-45"
                    }, [a("button", {
                        staticClass: "button",
                        on: {
                            click: t.stake
                        }
                    }, [t._v("\n          Stake " + t._s(t.staking.displayTicker) + "\n        ")]), t._v(" "), a("button", {
                        staticClass: "button outlined",
                        on: {
                            click: t.unstake
                        }
                    }, [t._v("\n          Unstake\n        ")])])]), t._v(" "), a("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.showHelpPopup ? a("SimplePopup", {
                        attrs: {
                            items: Object.values(t.Texts.TextDesktop.tips),
                            title: t.Texts.TextDesktop.tipsTitle
                        },
                        on: {
                            onClose: function(e) {
                                t.showHelpPopup = !1
                            }
                        }
                    }) : t._e()], 1)], 1), t._v(" "), t.showWarning ? a("div", {
                        staticClass: "section__warning section"
                    }, [a("div", {
                        staticClass: "section__warning-close",
                        on: {
                            click: function(e) {
                                t.showWarning = !1
                            }
                        }
                    }, [a("img", {
                        attrs: {
                            src: i(528)
                        }
                    })]), t._v(" "), a("div", {
                        staticClass: "section__warning-body"
                    }, [a("p", {
                        staticClass: "new-text-extra-large text-center"
                    }, [t._v("\n        " + t._s(t.staked) + " " + t._s(t.coin.ticker) + " is already staked and earns interest."), a("br"), t._v("\n        If you restake HBAR, you will have to wait for 24 hours to start earning interest again. Accumulated rewards will be transferred to your balance automatically.\n      ")]), t._v(" "), a("div", {
                        staticClass: "section__info-row m-t-45"
                    }, [a("button", {
                        staticClass: "button",
                        on: {
                            click: function(e) {
                                t.showWarning = !1
                            }
                        }
                    }, [t._v("\n          Cancel\n        ")]), t._v(" "), a("button", {
                        staticClass: "button outlined",
                        class: {
                            disabled: t.isCoinDisabled([t.actionStake])
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("makeStake")
                            }
                        }
                    }, [t._v("\n          Continue\n        ")])])])]) : t._e()])
                },
                s = []
        },
        1343: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        staticClass: "staking-exchange popup",
                        on: {
                            close: function(e) {
                                return t.$emit("closePopup")
                            }
                        }
                    }, [i("div", {
                        staticClass: "title not-found"
                    }, [t._v("\n    Coming Soon\n  ")]), t._v(" "), i("div", {
                        staticClass: "footer-section"
                    }, [i("div", {
                        staticClass: "button-wrap"
                    }, [i("button", {
                        staticClass: "button",
                        on: {
                            click: function(e) {
                                return t.$emit("closePopup")
                            }
                        }
                    }, [t._v("\n        Go back\n      ")])])])])
                },
                s = []
        },
        1344: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("AtomicPopup", {
                        on: {
                            close: t.handleClosePopup
                        },
                        scopedSlots: t._u([t.Texts.TextDesktop.tipsTitle ? {
                            key: "header",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "text text_small text_cta",
                                    on: {
                                        click: function(e) {
                                            t.isHelpPopup = !0
                                        }
                                    }
                                }, [t._v("\n      " + t._s(t.Texts.TextDesktop.tipsTitle) + "\n    ")])]
                            },
                            proxy: !0
                        } : null], null, !0)
                    }, [t._v(" "), i("div", {
                        staticClass: "section"
                    }, [i("div", {
                        staticClass: "section__header"
                    }, [i("div", {
                        staticClass: "section__icon"
                    }, [i("CoinIcon", {
                        attrs: {
                            wallet: t.coin
                        }
                    })], 1), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [t._v("\n        " + t._s(t.staking.displayTicker) + " staking\n      ")]), t._v(" "), i("div", {
                        staticClass: "section__subtitle"
                    }, [i("div", {
                        staticClass: "text text_small text_green"
                    }, [t._v("\n          +" + t._s(t.staking.reward) + "% yearly yield\n        ")])])]), t._v(" "), i("div", {
                        staticClass: "section__body"
                    }, [i("div", {
                        staticClass: "section__info"
                    }, t._l(t.stakingData.infoItems, (function(e) {
                        return i("StakingInfoItem", t._b({
                            key: e.title,
                            nativeOn: {
                                click: function(t) {
                                    return e.click.apply(null, arguments)
                                }
                            }
                        }, "StakingInfoItem", e, !1))
                    })), 1), t._v(" "), i(t.stakingData.component, {
                        tag: "component"
                    })], 1), t._v(" "), i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.isHelpPopup ? i("SimplePopup", {
                        attrs: {
                            items: Object.values(t.Texts.TextDesktop.tips),
                            title: t.Texts.TextDesktop.tipsTitle
                        },
                        on: {
                            onClose: function(e) {
                                t.isHelpPopup = !1
                            }
                        }
                    }) : t._e()], 1)], 1)])
                },
                s = []
        },
        1345: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return a
            })), i.d(e, "b", (function() {
                return s
            }));
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", [t.showSendStakePopup ? ["ADA" === t.coin.ticker ? i("SendStakeADA", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : ["ATOM", "BAND", "OSMO", "LUNA", "KAVA", "FET", "INJ"].includes(t.coin.ticker) ? i("SendStakeATOM", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "LUNC" === t.coin.ticker ? i("SendStakeLUNC", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "AWC-986" === t.coin.ticker ? i("SendStakeAWC", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "BNB" === t.coin.ticker ? i("SendStakeBNB", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "ICX" === t.coin.ticker && ["Stake", "Unstake", "Claim"].includes(t.sendType) ? i("SendStakeICX", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "NEAR" === t.coin.ticker ? i("SendStakeNEAR", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "SOL" === t.coin.ticker ? i("SendStakeSOL", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "TRX" === t.coin.ticker ? i("SendStakeTRX", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "XTZ" === t.coin.ticker ? i("SendStakeXTZ", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "ZIL" === t.coin.ticker ? i("SendStakeZIL", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "ICX" === t.coin.ticker && ["Vote", "Revote"].includes(t.sendType) ? i("SendVoteICX", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "ETH" === t.coin.ticker ? i("SendStakeETH", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "EGLD" === t.coin.ticker ? i("SendStakeEGLD", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "FLR" === t.coin.ticker ? i("SendStakeFLR", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : "MATIC" === t.coin.ticker ? i("SendStakeMATIC", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    }) : i("SendStakeHBAR", {
                        attrs: {
                            coin: t.coin,
                            sendType: t.sendType
                        },
                        on: {
                            closePopup: t.togglePopups
                        }
                    })] : [
                        ["ETH", "MATIC"].includes(t.coin.ticker) ? i("StakingPopupCoin", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                make: t.make,
                                closePopup: t.handleClosePopup
                            }
                        }) : "ADA" === t.coin.ticker ? i("StakingPopupADA", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                makeClaim: t.makeClaim,
                                makeStake: t.makeStake,
                                closePopup: t.handleClosePopup
                            }
                        }) : "AWC-986" === t.coin.ticker ? i("StakingPopupAWC", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                makeStake: t.makeStake,
                                makeUnstake: t.makeUnstake,
                                closePopup: t.handleClosePopup
                            }
                        }) : "XTZ" === t.coin.ticker ? i("StakingPopupXTZ", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                makeStake: t.makeStake,
                                closePopup: t.handleClosePopup
                            }
                        }) : ["ATOM", "BAND", "OSMO", "LUNC", "LUNA", "KAVA", "FET", "INJ"].includes(t.coin.ticker) ? i("StakingPopupATOM", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                makeClaim: t.makeClaim,
                                makeStake: t.makeStake,
                                makeUnstake: t.makeUnstake,
                                closePopup: t.handleClosePopup
                            }
                        }) : "BNB" === t.coin.ticker ? i("StakingPopupBNB", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                makeStake: t.makeStake,
                                makeUnstake: t.makeUnstake,
                                closePopup: t.handleClosePopup
                            }
                        }) : "FLR" === t.coin.ticker ? i("StakingPopupFLR", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                make: t.make,
                                closePopup: t.handleClosePopup
                            }
                        }) : "ICX" === t.coin.ticker ? i("StakingPopupICX", {
                            attrs: {
                                payload: t.payload,
                                staking: t.staking
                            },
                            on: {
                                make: t.make,
                                closePopup: t.handleClosePopup
                            }
                        }) : "NEAR" === t.coin.ticker ? i("StakingPopupNEAR", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                makeStake: t.makeStake,
                                makeUnstake: t.makeUnstake,
                                makeWithdrawal: t.makeWithdrawal,
                                closePopup: t.handleClosePopup
                            }
                        }) : "SOL" === t.coin.ticker ? i("StakingPopupSOL", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                makeStake: t.makeStake,
                                makeUnstake: t.makeUnstake,
                                makeWithdrawal: t.makeWithdrawal,
                                closePopup: t.handleClosePopup
                            }
                        }) : "TRX" === t.coin.ticker ? i("StakingPopupTRX", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                make: t.make,
                                closePopup: t.handleClosePopup
                            }
                        }) : "ZIL" === t.coin.ticker ? i("StakingPopupZIL", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                makeClaim: t.makeClaim,
                                makeStake: t.makeStake,
                                makeUnstake: t.makeUnstake,
                                makeWithdrawal: t.makeWithdrawal,
                                closePopup: t.handleClosePopup
                            }
                        }) : "EGLD" === t.coin.ticker ? i("StakingPopupEGLD", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                makeClaim: t.makeClaim,
                                makeStake: t.makeStake,
                                makeUnstake: t.makeUnstake,
                                makeWithdrawal: t.makeWithdrawal,
                                closePopup: t.handleClosePopup
                            }
                        }) : "HBAR" === t.coin.ticker ? i("StakingPopupHBAR", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                make: t.make,
                                makeStake: t.makeStake,
                                makeUnstake: t.makeUnstake,
                                closePopup: t.handleClosePopup
                            }
                        }) : "VET" === t.coin.ticker ? i("StakingPopupVET", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                closePopup: t.handleClosePopup
                            }
                        }) : "KMD" === t.coin.ticker ? i("StakingPopupKMD", {
                            attrs: {
                                staking: t.staking
                            },
                            on: {
                                closePopup: t.handleClosePopup
                            }
                        }) : i("StakingPopupNotFound", {
                            on: {
                                closePopup: t.handleClosePopup
                            }
                        })
                    ]], 2)
                },
                s = []
        },
        5129: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(830),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1299),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5130: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(831),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1297),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5131: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(832),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1298),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5140: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(840),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1345),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5159: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(860),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1326),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5160: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(861),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1329),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5163: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(864),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1330),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5164: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(865),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1331),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5165: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(866),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1332),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5166: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(867),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1333),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5167: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(868),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1334),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5168: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(869),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1335),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5169: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(870),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1336),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5170: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(871),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1337),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5171: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(872),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1338),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5172: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(873),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1339),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5173: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(874),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1340),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5174: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(875),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1341),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5175: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(876),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1342),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5176: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(877),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1343),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        5177: function(t, e, i) {
            "use strict";
            i.r(e);
            var a = i(878),
                s = i.n(a);
            for (var n in a)["default"].indexOf(n) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(n);
            var o = i(1344),
                l = i(3),
                r = Object(l.a)(s.a, o.a, o.b, !1, null, null, null);
            e.default = r.exports
        },
        830: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(i(5130)),
                n = a(i(5131)),
                o = {
                    name: "TokenAddTabs",
                    components: {
                        TokenAddAlert: s.default,
                        TokenAddForm: n.default
                    },
                    props: {
                        coin: {
                            type: Object,
                            default: Object
                        },
                        isEditToken: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: () => ({
                        isActiveContract: !1
                    }),
                    mounted() {
                        this.$ga.event("User Movement", "add-token-page", {
                            clientID: this.$ga.customParams.uid
                        }), this.$bus.$on("close-token-add", () => {
                            this.$emit("closeTokenPopup")
                        })
                    },
                    methods: {
                        close() {
                            this.$emit("closeTokenPopup")
                        }
                    }
                };
            e.default = o
        },
        831: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(i(687));
            var n = {
                name: "TokenAddAlert",
                props: {
                    coin: {
                        type: Object,
                        default: Object
                    }
                },
                data: () => ({
                    copied: !1
                }),
                computed: {
                    generatedQR() {
                        return new s.default({
                            value: this.coin.address,
                            size: 200
                        }).toDataURL("image/jpeg")
                    }
                },
                methods: {
                    copy() {
                        this.copied = !0, this.$electron.clipboard.writeText(this.coin.address), setTimeout(() => {
                            this.copied = !1
                        }, 1e3)
                    }
                }
            };
            e.default = n
        },
        832: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(i(556)),
                n = i(31),
                o = a(i(76));
            var l = {
                name: "TokenAddForm",
                components: {
                    Edit: o.default
                },
                props: {
                    coin: {
                        type: Object,
                        default: Object
                    },
                    isEditToken: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: () => ({
                    inputs: {
                        contract: "",
                        name: "",
                        ticker: "",
                        decimals: ""
                    },
                    inputErrors: {
                        contract: "",
                        name: "",
                        ticker: "",
                        decimals: ""
                    },
                    successTicker: "",
                    isSuccess: !1,
                    isUpdate: !1,
                    isConfirmScreen: !1,
                    currentContract: null,
                    isValidateInput: !1
                }),
                computed: {
                    parent() {
                        return this.$wallets.getWallet(this.coin.deprecatedParent)
                    },
                    bannedTokens() {
                        var t, e;
                        return null === (t = this.parent) || void 0 === t || null === (e = t.bannedTokens) || void 0 === e ? void 0 : e.map(t => t.toLowerCase())
                    }
                },
                mounted() {
                    this.isEditToken && (this.currentContract = this.coin.contract, this.inputs.contract = this.coin.contract, this.inputs.name = this.coin.name, this.inputs.ticker = this.coin.ticker, this.inputs.decimals = this.coin.decimal.toString())
                },
                methods: {
                    ...(0, n.mapActions)(["removeWalletFromState", "removeCoinBalance"]),
                    isContractBanned() {
                        return !(!this.bannedTokens || 0 === this.bannedTokens.length) && this.bannedTokens.includes(this.inputs.contract.toLowerCase())
                    },
                    isContractExist() {
                        if (this.currentContract === this.inputs.contract.toLowerCase()) return !1;
                        return !!Array.from(this.$wallets).find(t => t.contract === this.inputs.contract.toLowerCase())
                    },
                    validateContract() {
                        return this.inputErrors.contract = "", !this.isValidateInput || ("" !== this.inputs.contract.trim() && this.inputs.contract.startsWith("0x") || (this.inputErrors.contract = "Please enter the contract address"), this.isContractExist() && (this.inputErrors.contract = "This token is already available in your wallet"), this.isContractBanned() && (this.inputErrors.contract = "Address was banned"), "" === this.inputErrors.contract)
                    },
                    validateTicker() {
                        return this.inputErrors.ticker = "", !this.isValidateInput || ("" === this.inputs.ticker.trim() ? this.inputErrors.ticker = "Please enter the token's ticker (for example, AWC)" : this.inputs.ticker.length > 8 && (this.inputErrors.ticker = "Ticker must be up to 8 characters long. Please remove a few letters"), "" === this.inputErrors.ticker)
                    },
                    validateName() {
                        return this.inputErrors.name = "", !this.isValidateInput || ("" === this.inputs.name.trim() ? this.inputErrors.name = "Please enter the token's name (for example, Atomic Wallet Token)" : this.inputs.name.length > 35 && (this.inputErrors.name = "Name must be up to 35 characters long. Please remove a few letters"), "" === this.inputErrors.name)
                    },
                    validateDecimals() {
                        return this.inputErrors.decimals = "", !this.isValidateInput || ("" === this.inputs.decimals ? this.inputErrors.decimals = "Please enter a decimal number between 0 and 36" : (isNaN(parseInt(this.inputs.decimals)) || this.inputs.decimals < 0 || this.inputs.decimals > 36 || parseInt(this.inputs.decimals) !== +this.inputs.decimals) && (this.inputErrors.decimals = "Decimal must be a number between 0 and 36"), "" === this.inputErrors.decimals)
                    },
                    clearInputs() {
                        this.inputs.contract = "", this.inputs.name = "", this.inputs.ticker = "", this.inputs.decimals = "", this.inputErrors.contract = "", this.inputErrors.name = "", this.inputErrors.ticker = "", this.inputErrors.decimals = ""
                    },
                    validateAll() {
                        let t = !1;
                        return this.validateContract() || (t = !0), this.validateTicker() || (t = !0), this.validateName() || (t = !0), this.validateDecimals() || (t = !0), t
                    },
                    inputContract() {
                        if (!this.isEditToken && this.validateContract()) {
                            const t = "freekey",
                                e = `https://api.ethplorer.io/getTokenInfo/${this.inputs.contract.trim().toUpperCase()}?apiKey=${t}`,
                                i = 104,
                                a = 150;
                            s.default.get(e).then(t => {
                                t.data.error ? t.data.error.code !== i && (this.inputErrors.contract = t.data.error.message) : (this.inputs.name = t.data.name, this.inputs.ticker = t.data.symbol, this.inputs.decimals = String(t.data.decimals), this.validateAll())
                            }).catch(t => {
                                [i, a].includes(t.response.data.error.code) && (this.inputErrors.contract = "This looks like a wallet address. Try the token's contract address instead")
                            })
                        }
                    },
                    async saveToken() {
                        if (this.isValidateInput = !0, !this.validateAll()) try {
                            const t = {
                                name: this.inputs.name,
                                ticker: this.inputs.ticker,
                                decimal: parseInt(this.inputs.decimals),
                                contract: this.inputs.contract.toLowerCase(),
                                uniqueField: this.inputs.contract.toLowerCase()
                            };
                            await this.coin.createCustomToken(t, this.$wallets), this.successTicker = this.inputs.ticker, this.$bus.$emit("save::wallets");
                            const e = 100;
                            this.isSuccess = !0, setTimeout(() => {
                                this.clearInputs()
                            }, e)
                        } catch (t) {
                            console.log(t)
                        }
                    },
                    async updateToken() {
                        if (this.isValidateInput = !0, !this.validateAll()) try {
                            await this.parent.updateCustomToken(this.coin, {
                                name: this.inputs.name,
                                ticker: this.inputs.ticker,
                                decimal: parseInt(this.inputs.decimals),
                                contract: this.inputs.contract.toLowerCase(),
                                uniqueField: this.inputs.contract.toLowerCase(),
                                isCustom: !0,
                                visibility: !0
                            });
                            const t = 1e3;
                            this.isUpdate = !0, setTimeout(() => {
                                this.isUpdate = !1
                            }, t)
                        } catch (t) {
                            console.log(t)
                        }
                    },
                    async removeToken() {
                        try {
                            this.removeCoinBalance(this.coin.id), this.removeWalletFromState(this.coin.id), await this.parent.removeTokenFromDb(this.inputs.contract);
                            const t = Array.from(this.$wallets).findIndex(t => t.id === this.coin.id.toLowerCase());
                            this.$wallets.splice(t, 1), delete this.parent.tokens[this.inputs.contract.toLowerCase()], this.$wallets.store.walletsCollection.atomic.delete(this.coin.id.toUpperCase()), this.$bus.$emit("save::wallets"), this.$emit("closeForm")
                        } catch (t) {
                            console.log(t), this.$emit("closeForm")
                        }
                    }
                }
            };
            e.default = l
        },
        840: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(i(5141)),
                n = a(i(5142)),
                o = a(i(5143)),
                l = a(i(5144)),
                r = a(i(5145)),
                c = a(i(5146)),
                d = a(i(5147)),
                u = a(i(5148)),
                k = a(i(5149)),
                p = a(i(5150)),
                v = a(i(5152)),
                h = a(i(5153)),
                m = a(i(5154)),
                _ = a(i(5155)),
                g = a(i(5156)),
                b = a(i(5157)),
                f = a(i(5158)),
                C = a(i(5159)),
                w = a(i(5160)),
                T = a(i(5163)),
                x = a(i(5164)),
                S = a(i(5165)),
                y = a(i(5166)),
                P = a(i(5167)),
                D = a(i(5168)),
                A = a(i(5169)),
                M = a(i(5170)),
                E = a(i(5171)),
                O = a(i(5172)),
                B = a(i(5173)),
                I = a(i(5174)),
                $ = a(i(5175)),
                W = a(i(5176)),
                U = a(i(5177)),
                F = {
                    name: "StakingPopupTabs",
                    components: {
                        SendStakeFLR: b.default,
                        SendStakeADA: s.default,
                        SendStakeATOM: n.default,
                        SendStakeLUNC: o.default,
                        SendStakeAWC: l.default,
                        SendStakeBNB: d.default,
                        SendStakeICX: r.default,
                        SendStakeNEAR: u.default,
                        SendStakeSOL: c.default,
                        SendStakeTRX: k.default,
                        SendStakeXTZ: p.default,
                        SendStakeZIL: v.default,
                        SendVoteICX: h.default,
                        SendStakeETH: m.default,
                        SendStakeEGLD: _.default,
                        SendStakeHBAR: g.default,
                        SendStakeMATIC: f.default,
                        StakingPopupNotFound: W.default,
                        StakingPopupCoin: U.default,
                        StakingPopupFLR: w.default,
                        StakingPopupKMD: x.default,
                        StakingPopupADA: C.default,
                        StakingPopupVET: T.default,
                        StakingPopupATOM: S.default,
                        StakingPopupAWC: y.default,
                        StakingPopupBNB: P.default,
                        StakingPopupICX: D.default,
                        StakingPopupNEAR: A.default,
                        StakingPopupTRX: E.default,
                        StakingPopupXTZ: O.default,
                        StakingPopupZIL: B.default,
                        StakingPopupEGLD: I.default,
                        StakingPopupHBAR: $.default,
                        StakingPopupSOL: M.default
                    },
                    props: {
                        staking: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    data: () => ({
                        showSendStakePopup: !1,
                        sendType: "",
                        payload: null
                    }),
                    computed: {
                        coin() {
                            return this.staking.walletInstance
                        }
                    },
                    created() {
                        this.$bus.$on("close-staking-popup", this.handleClosePopup)
                    },
                    beforeDestroy() {
                        this.$bus.$off("close-staking-popup", this.handleClosePopup)
                    },
                    methods: {
                        handleClosePopup() {
                            this.$emit("closePopup")
                        },
                        togglePopups() {
                            this.showSendStakePopup = !this.showSendStakePopup
                        },
                        makeStake() {
                            this.sendType = "Stake", this.togglePopups()
                        },
                        makeUnstake() {
                            this.sendType = "Unstake", this.togglePopups()
                        },
                        makeWithdrawal() {
                            this.sendType = "Withdrawal", this.togglePopups()
                        },
                        makeVote() {
                            this.sendType = "Vote", this.togglePopups()
                        },
                        makeClaim() {
                            this.sendType = "Claim", this.togglePopups()
                        },
                        make(t, e) {
                            this.sendType = t, this.payload = e, this.togglePopups()
                        }
                    }
                };
            e.default = F
        },
        860: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(30),
                n = a(i(83));
            var o = {
                name: "StakingPopupADA",
                components: {
                    CoinIcon: n.default
                },
                mixins: [s.DisabledCoinMixin, s.StakingMixin],
                props: {
                    staking: {
                        type: Object,
                        default: () => ({})
                    }
                },
                data: () => ({
                    claiming: !1,
                    claimOk: !1,
                    claimFail: !1,
                    disabled: !1,
                    validatorMap: {
                        ac2d2d66a30cbb3163e68a7073bcd3f9cdd4a11a8af6e2c5653402c7: "Everstake"
                    },
                    showWarning: !1
                }),
                computed: {
                    isClaimDisabled() {
                        return !this.isRewardEnough || this.isCoinDisabled([this.actionClaim]) || this.coin.isClaiming
                    },
                    isRewardEnough() {
                        var t, e;
                        return Number((null === (t = this.coin) || void 0 === t || null === (e = t.balances) || void 0 === e ? void 0 : e.rewards) || 0) >= this.minReward
                    },
                    minReward: () => .3,
                    currentValidator() {
                        const t = this.coin.balances && this.coin.balances.staking && this.coin.balances.staking.validator,
                            e = this.$staking.getStakingInterface(this.coin.ticker).validators.find(e => e.address === t);
                        return e && e.name || t
                    },
                    stakingBalance() {
                        return this.coin.balances && this.coin.balances.staking && this.coin.toCurrencyUnit(this.coin.balances.staking.total || "0") || 0
                    },
                    haveEnoughtBalance() {
                        var t, e;
                        return ((null === (t = this.coin) || void 0 === t || null === (e = t.balances) || void 0 === e ? void 0 : e.available) || 0) > 4
                    }
                },
                methods: {
                    clearClaimStatus(t) {
                        t ? this.claimOk = !1 : this.claimFail = !1, this.claiming = !1
                    },
                    async claimReward() {
                        this.$emit("makeClaim")
                    },
                    onClickPool() {
                        this.haveEnoughtBalance ? this.currentValidator ? this.showWarning = !0 : this.makeStake() : this.disabled = !0
                    },
                    cancel() {
                        this.showWarning = !1
                    },
                    makeStake() {
                        this.haveEnoughtBalance ? this.$emit("makeStake") : this.disabled = !0
                    }
                }
            };
            e.default = o
        },
        861: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(30),
                n = a(i(83)),
                o = a(i(225)),
                l = a(i(226)),
                r = i(201),
                c = i(38);
            var d = {
                name: "StakingPopupFLR",
                components: {
                    CoinIcon: n.default,
                    SimplePopup: o.default,
                    StakingInfoItem: l.default
                },
                mixins: [s.DisabledCoinMixin, s.StakingMixin],
                props: {
                    staking: {
                        type: Object,
                        default: () => ({})
                    }
                },
                data: () => ({
                    errorMessage: "",
                    processingName: "",
                    isStakingProcessing: !1,
                    sendType: "Stake",
                    isError: !1,
                    isSuccess: !1,
                    txId: "",
                    isPasswordShow: !1,
                    password: "",
                    passwordError: "",
                    cacheVotesAvailable: 0,
                    total: "0",
                    staked: "0",
                    reward: "0",
                    availableForStake: "0",
                    votesAvailable: "0",
                    balancesTimeout: 0,
                    showHelpPopup: !1
                }),
                computed: {
                    detailsOnMainPage() {
                        return this.Texts.CoinTips.staking(this.Texts.CoinTips.labels.detailsOnMainPage)
                    },
                    stakingData() {
                        const t = this.coin.ticker,
                            e = 0 != +this.votesAvailable,
                            i = [{
                                title: this.Texts.TextDesktop.labels.total,
                                value: this.total || 0
                            }, {
                                title: this.Texts.TextDesktop.labels.available,
                                value: this.availableForStake,
                                badge: {
                                    title: "Stake",
                                    show: !0
                                },
                                badgeClick: () => this.$emit("make", "Stake")
                            }, {
                                title: this.Texts.TextDesktop.labels.staked,
                                value: this.staked,
                                ticker: t
                            }, {
                                title: this.Texts.TextDesktop.labels.rewards,
                                value: this.reward,
                                badge: {
                                    title: "Claim",
                                    show: !this.isCoinDisabled([this.actionClaim]),
                                    disabled: !+this.reward || +this.reward <= .01
                                },
                                badgeClick: () => this.$emit("make", "Claim")
                            }];
                        return e && i.push({
                            title: this.Texts.TextDesktop.labels.availableVotes,
                            value: this.votesAvailable,
                            badge: {
                                title: "Vote",
                                show: !this.isCoinDisabled([this.actionVote])
                            },
                            badgeClick: () => this.$emit("make", "Vote")
                        }), i.map(e => ({
                            ...e,
                            badgeClick: e.badgeClick ? e.badgeClick : () => null,
                            value: e.value,
                            ticker: t
                        }))
                    }
                },
                beforeMount() {
                    this.getBalances();
                    const {
                        topic: t
                    } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
                    c.Emmiter.on(t, this.getBalances)
                },
                beforeDestroy() {
                    const {
                        topic: t
                    } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
                    c.Emmiter.removeListener(t, this.getBalances)
                },
                methods: {
                    getBalances() {
                        this.total = this.coin.getTotalBalance().toCurrency(), this.reward = this.coin.getRewards().toCurrency(), this.staked = this.coin.getStakedBalance().toCurrency(), this.availableForStake = this.coin.getAvailableBalance().toCurrency(), this.votesAvailable = this.coin.getAvailableVotes().toCurrency()
                    },
                    checkUnstake() {
                        this.errorMessage = "", Number(this.coin.getStakedBalance().toCurrency()) <= 0 && (this.errorMessage = "Nothing to unstake. You should delegate FLR first")
                    },
                    doUnstake() {
                        this.checkUnstake(), "" === this.errorMessage && this.$emit("make", "Unstake")
                    }
                }
            };
            e.default = d
        },
        864: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(30),
                n = {
                    name: "StakingPopupVET",
                    components: {
                        CoinIcon: a(i(83)).default
                    },
                    mixins: [s.DisabledCoinMixin, s.StakingMixin],
                    props: {
                        staking: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    data: () => ({
                        settings: {
                            rate: "2314.8",
                            receiveTicker: "VTHO",
                            tickerToSend: "BTC",
                            tickerToReceive: "VET"
                        }
                    })
                };
            e.default = n
        },
        865: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(30),
                n = a(i(76)),
                o = a(i(83)),
                l = a(i(92));
            var r = {
                name: "StakingPopupKMD",
                components: {
                    CoinIcon: o.default,
                    SendCoinResult: l.default,
                    Edit: n.default
                },
                mixins: [s.DisabledCoinMixin, s.StakingMixin],
                props: {
                    staking: {
                        type: Object,
                        default: () => ({})
                    }
                },
                data: () => ({
                    settings: {
                        receiveTicker: "KMD",
                        tickerToSend: "BTC",
                        tickerToReceive: "KMD"
                    },
                    inputs: {
                        amount: "",
                        address: "",
                        password: ""
                    },
                    inputsError: {
                        amount: "",
                        address: "",
                        password: ""
                    },
                    inputTypePassword: "password",
                    isShowPasswordForm: !1
                }),
                methods: {
                    backFromPassword() {
                        this.isShowPasswordForm = !1
                    },
                    showPasswordForm() {
                        const {
                            isValid: t,
                            message: e
                        } = this.validate();
                        t ? this.isShowPasswordForm = !0 : this.errorMessage = e
                    },
                    validatePassword() {
                        return this.inputsError.password = "", "" === this.inputs.password ? this.inputsError.password = "Password can't be blank" : this.inputs.password !== this.$storage.password && (this.inputsError.password = "Wrong password"), "" === this.inputsError.password
                    },
                    sendCoins() {
                        this.validatePassword() && (this.isShowPasswordForm = !1, this.claim())
                    },
                    validate() {
                        let t = "";
                        return 0 === Number(this.unclaimed) ? t = "Unclaimed KMD not found" : this.unclaimed < 0 && (t = "Min amount to claim is 0 KMD"), {
                            isValid: !t,
                            message: t
                        }
                    }
                }
            };
            e.default = r
        },
        866: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(i(61)),
                n = i(201),
                o = i(38),
                l = i(30),
                r = a(i(225)),
                c = a(i(226)),
                d = a(i(83));
            var u = {
                name: "StakingPopupATOM",
                components: {
                    SimplePopup: r.default,
                    StakingInfoItem: c.default,
                    CoinIcon: d.default
                },
                mixins: [l.CurrencyConverter, l.StakingMixin, l.DisabledCoinMixin],
                props: {
                    staking: {
                        type: Object,
                        default: () => ({})
                    }
                },
                data: () => ({
                    availableForStake: "0",
                    rewards: "0",
                    staked: "0",
                    total: "0",
                    unstaking: "0",
                    claiming: !1,
                    claimOk: !1,
                    claimFail: !1,
                    errorMessage: "",
                    minimumClaim: .01,
                    showHelpPopup: !1,
                    timeout: null
                }),
                computed: {
                    stakingData() {
                        const t = this.staking.ticker;
                        return [{
                            title: this.Texts.TextDesktop.labels.total,
                            value: this.total,
                            ticker: t
                        }, {
                            title: this.Texts.TextDesktop.labels.available,
                            value: this.availableForStake,
                            ticker: t,
                            badge: {
                                title: "Stake",
                                show: !0
                            },
                            badgeClick: () => this.$emit("makeStake")
                        }, {
                            title: this.Texts.TextDesktop.labels.staked,
                            value: this.staked,
                            ticker: t
                        }, {
                            title: this.Texts.TextDesktop.labels.rewards,
                            value: this.rewards,
                            ticker: t,
                            badge: {
                                title: "Claim",
                                show: !this.isCoinDisabled([this.actionClaim]),
                                disabled: !this.isClaimAvailable
                            },
                            badgeClick: () => this.$emit("makeClaim")
                        }, {
                            title: this.Texts.TextDesktop.labels.unbonding,
                            value: this.unstaking,
                            ticker: t
                        }].map(t => ({
                            ...t,
                            badgeClick: t.badgeClick ? t.badgeClick : () => null,
                            value: t.value
                        }))
                    },
                    isClaimAvailable() {
                        return "LUNA" === this.staking.ticker ? +this.rewards >= .03 : +this.rewards >= .01
                    }
                },
                mounted() {
                    this.timeout = setInterval(this.updateBalance, 6e4), this.computeFeeForClaim()
                },
                beforeMount() {
                    this.getBalances();
                    const {
                        topic: t
                    } = (0, n.STAKING_BALANCES_UPDATED)(this.coin.id);
                    o.Emmiter.on(t, this.getBalances)
                },
                beforeDestroy() {
                    const {
                        topic: t
                    } = (0, n.STAKING_BALANCES_UPDATED)(this.coin.id);
                    o.Emmiter.removeListener(t, this.getBalances), clearTimeout(this.timeout)
                },
                methods: {
                    async computeFeeForClaim() {
                        if (["KAVA", "LUNA"].includes(this.staking.ticker)) {
                            const t = 3;
                            try {
                                const e = await this.coin.getFee();
                                this.minimumClaim = this.coin.toCurrencyUnit(new s.default(e).multipliedBy(t).toString())
                            } catch (t) {
                                console.error(t)
                            }
                        } else this.minimumClaim = .01
                    },
                    clearClaimStatus(t) {
                        t ? this.claimOk = !1 : this.claimFail = !1, this.claiming = !1
                    },
                    async claimReward() {
                        this.$emit("makeClaim")
                    },
                    getBalances() {
                        this.availableForStake = this.coin.getAvailableBalance().toCurrency(), this.rewards = this.coin.getRewards().toCurrency(), this.staked = this.coin.getStakedBalance().toCurrency(), this.total = this.coin.getTotalBalance().toCurrency(), this.unstaking = this.coin.getUnstakingBalance().toCurrency()
                    }
                }
            };
            e.default = u
        },
        867: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(31),
                n = i(30),
                o = a(i(83));
            const l = [{
                min: 10,
                max: 999,
                persent: 17
            }, {
                min: 1e3,
                max: 9999,
                persent: 20
            }, {
                min: 1e4,
                persent: 23
            }];
            var r = {
                name: "StakingPopupAWC",
                components: {
                    CoinIcon: o.default
                },
                mixins: [n.DisabledCoinMixin, n.StakingMixin],
                props: {
                    staking: {
                        type: Object,
                        default: () => ({})
                    }
                },
                computed: {
                    ...(0, s.mapGetters)(["stakingSettings"]),
                    available() {
                        return this.coin.balances && this.coin.balances.available || 0
                    },
                    staked() {
                        return this.coin.balances && this.coin.balances.frozen || 0
                    },
                    total() {
                        return this.coin.toCurrencyUnit(this.coin.balance || 0)
                    },
                    rewards() {
                        var t;
                        return (null === (t = this.stakingSettings.find(({
                            ticker: t
                        }) => t === this.coin.ticker)) || void 0 === t ? void 0 : t.rewards) || l
                    },
                    reward() {
                        const t = this.rewards.find(t => this.staked >= t.min && this.staked <= t.max);
                        if (!t) {
                            const t = this.rewards[this.rewards.length - 1];
                            return this.staked >= t.min ? t.persent : this.staking.reward
                        }
                        return t.persent
                    }
                }
            };
            e.default = r
        },
        868: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(30),
                n = a(i(225)),
                o = a(i(226)),
                l = i(201),
                r = i(38),
                c = {
                    name: "StakingPopupBNB",
                    components: {
                        SimplePopup: n.default,
                        StakingInfoItem: o.default
                    },
                    mixins: [s.CurrencyConverter, s.StakingMixin, s.BuyMixin],
                    props: {
                        staking: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    data: () => ({
                        claiming: !1,
                        claimOk: !1,
                        claimFail: !1,
                        withdrawing: !1,
                        withdrawOk: !1,
                        withdrawFail: !1,
                        errorMessage: "",
                        showHelpPopup: !1,
                        total: "0",
                        availableForStake: "0",
                        staked: "0",
                        unstaking: "0"
                    }),
                    computed: {
                        detailsOnMainPage() {
                            return this.Texts.CoinTips.staking(this.Texts.CoinTips.labels.detailsOnMainPage)
                        },
                        stakingData() {
                            const t = this.coin.ticker;
                            return [{
                                title: this.Texts.TextDesktop.labels.total,
                                value: this.total
                            }, {
                                title: this.Texts.TextDesktop.labels.available,
                                value: this.availableForStake,
                                badge: {
                                    title: Number(this.availableForStake) > 1 ? "Stake" : "Buy",
                                    show: !0
                                },
                                badgeClick: () => Number(this.availableForStake) > 1 ? this.$emit("makeStake") : this.buy(this.coin)
                            }, {
                                title: this.Texts.TextDesktop.labels.staked,
                                value: this.staked
                            }, {
                                title: this.Texts.TextDesktop.labels.unbonding,
                                value: this.unstaking
                            }].map(e => ({
                                ...e,
                                badgeClick: e.badgeClick ? e.badgeClick : () => null,
                                value: e.value,
                                ticker: t
                            }))
                        }
                    },
                    async mounted() {
                        await this.coin.getInfo()
                    },
                    beforeMount() {
                        this.getBalances();
                        const {
                            topic: t
                        } = (0, l.STAKING_BALANCES_UPDATED)(this.coin.id);
                        r.Emmiter.on(t, this.getBalances)
                    },
                    beforeDestroy() {
                        const {
                            topic: t
                        } = (0, l.STAKING_BALANCES_UPDATED)(this.coin.id);
                        r.Emmiter.removeListener(t, this.getBalances)
                    },
                    methods: {
                        clearClaimStatus(t) {
                            t ? this.claimOk = !1 : this.claimFail = !1, this.claiming = !1
                        },
                        unstake() {
                            this.checkUnstake() ? this.$emit("makeUnstake") : this.errorMessage = "You need to stake some coins first"
                        },
                        checkUnstake() {
                            return Number(this.staked) > 0
                        },
                        getBalances() {
                            this.total = this.coin.getTotalBalance().toCurrency(), this.staked = this.coin.getStakedBalance().toCurrency(), this.unstaking = this.coin.getUnstakingBalance().toCurrency(), this.availableForStake = this.coin.getAvailableBalance().toCurrency()
                        }
                    }
                };
            e.default = c
        },
        869: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(30),
                n = a(i(225)),
                o = a(i(226)),
                l = i(38),
                r = i(201),
                c = a(i(83)),
                d = {
                    name: "StakingPopupICX",
                    components: {
                        SimplePopup: n.default,
                        StakingInfoItem: o.default,
                        CoinIcon: c.default
                    },
                    mixins: [s.DisabledCoinMixin, s.StakingMixin],
                    props: {
                        staking: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    data: () => ({
                        isStakingProcessing: !1,
                        processingName: "Claiming",
                        isError: !1,
                        isSuccess: !1,
                        sendType: "Stake",
                        showHelpPopup: !1,
                        total: "0",
                        staked: "0",
                        unstaking: "0",
                        availableForStake: "0",
                        availableVotes: "0",
                        delegatedVotes: "0",
                        rewards: "0"
                    }),
                    computed: {
                        detailsOnMainPage() {
                            return this.Texts.CoinTips.staking(this.Texts.CoinTips.labels.detailsOnMainPage)
                        },
                        stakingData() {
                            const t = this.staking.displayTicker;
                            return [{
                                title: this.Texts.TextDesktop.labels.total,
                                value: this.total,
                                ticker: t
                            }, {
                                title: this.Texts.TextDesktop.labels.available,
                                value: this.availableForStake,
                                ticker: t,
                                badge: {
                                    title: "Stake",
                                    show: !0
                                },
                                badgeClick: () => this.$emit("make", "Stake")
                            }, {
                                title: this.Texts.TextDesktop.labels.staked,
                                value: this.staked,
                                ticker: t
                            }, {
                                title: this.Texts.TextDesktop.labels.rewards,
                                value: this.rewards,
                                ticker: t,
                                badge: {
                                    title: "Claim",
                                    show: !this.isCoinDisabled([this.actionClaim]) && 0 != +this.rewards
                                },
                                badgeClick: () => this.$emit("make", "Claim")
                            }, {
                                title: this.Texts.TextDesktop.labels.pendingWithdrawal,
                                value: this.unstaking,
                                ticker: t
                            }, {
                                title: this.Texts.TextDesktop.labels.availableVotes,
                                value: this.availableVotes,
                                ticker: t,
                                badge: {
                                    title: "Vote",
                                    show: !this.isCoinDisabled([this.actionVote]) && 0 != +this.availableVotes
                                },
                                badgeClick: () => this.$emit("make", "Vote")
                            }, {
                                title: this.Texts.TextDesktop.labels.assignedVotes,
                                value: this.delegatedVotes,
                                ticker: t,
                                badge: {
                                    title: "Revote",
                                    show: !this.isCoinDisabled([this.actionVote]) && 0 != +this.delegatedVotes
                                },
                                badgeClick: () => this.$emit("make", "Revote")
                            }].map(t => ({
                                ...t,
                                badgeClick: t.badgeClick ? t.badgeClick : () => null,
                                value: t.value
                            }))
                        }
                    },
                    beforeMount() {
                        this.getBalances();
                        const {
                            topic: t
                        } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
                        l.Emmiter.on(t, this.getBalances)
                    },
                    beforeDestroy() {
                        const {
                            topic: t
                        } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
                        l.Emmiter.removeListener(t, this.getBalances)
                    },
                    methods: {
                        backToWallets() {
                            this.backToForm(), this.$emit("closePopup")
                        },
                        getBalances() {
                            this.total = this.coin.getTotalBalance().toCurrency(), this.availableForStake = this.coin.getAvailableBalance().toCurrency(), this.staked = this.coin.getStakedBalance().toCurrency(), this.unstaking = this.coin.getUnstakingBalance().toCurrency(), this.availableVotes = this.coin.getAvailableVotes().toCurrency(), this.delegatedVotes = this.coin.getDelegatedVotes().toCurrency(), this.rewards = this.coin.getRewards().toCurrency()
                        },
                        backToForm() {
                            this.isError = !1, this.isSuccess = !1
                        }
                    }
                };
            e.default = d
        },
        870: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(i(225)),
                n = a(i(226)),
                o = i(30),
                l = a(i(1163)),
                r = i(201),
                c = i(38),
                d = a(i(83));
            var u = {
                name: "StakingPopupNEAR",
                components: {
                    StakingInfoItem: n.default,
                    SimplePopup: s.default,
                    CoinIcon: d.default
                },
                mixins: [o.CurrencyConverter, o.StakingMixin, o.DisabledCoinMixin, l.default],
                props: {
                    staking: {
                        type: Object,
                        default: () => ({})
                    }
                },
                data: () => ({
                    claiming: !1,
                    claimOk: !1,
                    claimFail: !1,
                    errorMessage: "",
                    showHelpPopup: !1,
                    isDisableUnstakeButton: !1,
                    isInvisibleClaimButton: !1,
                    isFeeEnough: !0,
                    total: "0",
                    staked: "0",
                    availableForStake: "0",
                    pendingWithdrawals: "0",
                    availableWithdrawals: "0"
                }),
                computed: {
                    detailsOnMainPage() {
                        return this.Texts.CoinTips.staking(this.Texts.CoinTips.labels.detailsOnMainPage)
                    },
                    stakingData() {
                        const t = this.staking.displayTicker;
                        return [{
                            title: this.Texts.TextDesktop.labels.total,
                            value: this.total,
                            ticker: t
                        }, {
                            title: this.Texts.TextDesktop.labels.available,
                            value: this.availableForStake,
                            ticker: t,
                            badge: {
                                title: Number(this.availableForStake) > 0 ? "Stake" : "Buy",
                                show: !0
                            },
                            badgeClick: () => Number(this.availableForStake) > 0 ? this.$emit("makeStake") : this.buy(this.coin)
                        }, {
                            title: this.Texts.TextDesktop.labels.staked,
                            value: this.staked,
                            ticker: t,
                            badgeClick: () => this.unstake()
                        }, {
                            title: this.Texts.TextDesktop.labels.pendingWithdrawal,
                            value: this.pendingWithdrawals,
                            ticker: t
                        }, {
                            title: this.Texts.TextDesktop.labels.availableWithdrawal,
                            value: this.availableWithdrawals,
                            ticker: t,
                            badge: {
                                title: "Withdraw",
                                show: Number(this.availableWithdrawals),
                                disabled: !this.availableWithdrawals
                            },
                            badgeClick: () => this.withdraw()
                        }].map(t => ({
                            ...t,
                            badgeClick: t.badgeClick ? t.badgeClick : () => null
                        }))
                    },
                    isWithdraw() {
                        return Number(this.availableWithdrawals) > 0
                    }
                },
                beforeMount() {
                    this.$bus.$emit("get-near-balances"), this.getBalances();
                    const {
                        topic: t
                    } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
                    c.Emmiter.on(t, this.getBalances)
                },
                beforeDestroy() {
                    const {
                        topic: t
                    } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
                    c.Emmiter.removeListener(t, this.getBalances)
                },
                methods: {
                    clearClaimStatus(t) {
                        t ? this.claimOk = !1 : this.claimFail = !1, this.claiming = !1
                    },
                    async completeWithdrawal() {
                        this.$emit("makeWithdrawal")
                    },
                    unstake() {
                        this.checkUnstake() ? this.$emit("makeUnstake") : (this.errorMessage = "You have nothing to unstake yet", this.isDisableUnstakeButton = !0, setTimeout(() => {
                            this.isDisableUnstakeButton = !1, this.errorMessage = ""
                        }, 3e4))
                    },
                    withdraw() {
                        this.$emit("makeWithdrawal")
                    },
                    checkUnstake() {
                        return Number(this.staked) > 0
                    },
                    getBalances() {
                        this.total = this.coin.getTotalBalance().toCurrency(), this.availableForStake = this.coin.getAvailableBalance().toCurrency(), this.staked = this.coin.getStakedBalance().toCurrency(), this.unstaking = this.coin.getUnstakingBalance().toCurrency(), this.availableWithdrawals = this.coin.getAvailableWithdrawals().toCurrency(), this.pendingWithdrawals = this.coin.getPendingWithdrawals().toCurrency()
                    }
                }
            };
            e.default = u
        },
        871: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(30),
                n = a(i(225)),
                o = a(i(226)),
                l = {
                    name: "StakingPopupSOL",
                    components: {
                        SimplePopup: n.default,
                        StakingInfoItem: o.default
                    },
                    mixins: [s.CurrencyConverter, s.DisabledCoinMixin, s.StakingMixin],
                    props: {
                        staking: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    data: () => ({
                        claiming: !1,
                        claimOk: !1,
                        claimFail: !1,
                        withdrawing: !1,
                        withdrawOk: !1,
                        withdrawFail: !1,
                        errorMessage: "",
                        showHelpPopup: !1
                    }),
                    computed: {
                        detailsOnMainPage() {
                            return this.Texts.CoinTips.staking(this.Texts.CoinTips.labels.detailsOnMainPage)
                        },
                        stakingData() {
                            const t = this.coin.ticker;
                            return [{
                                title: this.Texts.TextDesktop.labels.total,
                                value: this.total
                            }, {
                                title: this.Texts.TextDesktop.labels.available,
                                value: this.available,
                                badge: {
                                    title: "Stake",
                                    show: !0
                                },
                                badgeClick: () => this.$emit("makeStake")
                            }, {
                                title: this.Texts.TextDesktop.labels.staked,
                                value: this.coin.toCurrencyUnit(this.staked)
                            }, {
                                title: this.Texts.TextDesktop.labels.pendingWithdrawal,
                                value: this.coin.toCurrencyUnit(this.pendingWithdrawals)
                            }, {
                                title: this.Texts.TextDesktop.labels.availableWithdrawal,
                                value: this.coin.toCurrencyUnit(this.availableWithdrawals),
                                badge: {
                                    title: "Withdraw",
                                    show: !this.isCoinDisabled([this.actionWithdraw]) && +this.availableWithdrawals > 0
                                },
                                badgeClick: () => this.withdraw()
                            }].map(e => ({
                                ...e,
                                badgeClick: e.badgeClick ? e.badgeClick : () => null,
                                value: e.value,
                                ticker: t
                            }))
                        },
                        stakingBalances() {
                            var t;
                            const {
                                total: e = 0,
                                staking: i = [],
                                availableForStake: a = 0
                            } = (null === (t = this.coin) || void 0 === t ? void 0 : t.balances) || {};
                            return {
                                total: e,
                                staking: i,
                                availableForStake: a
                            }
                        },
                        available() {
                            return this.stakingBalances.availableForStake
                        },
                        staked() {
                            return this.stakingBalances.staking.reduce((t, e) => e.isAvailableForWithdraw || e.isDeactivated ? t : t.add(new this.coin.BN(e.staked)), new this.coin.BN("0"))
                        },
                        availableWithdrawals() {
                            return this.stakingBalances.staking.reduce((t, e) => e.isAvailableForWithdraw ? t.add(new this.coin.BN(e.staked)) : t, new this.coin.BN("0"))
                        },
                        pendingWithdrawals() {
                            return this.stakingBalances.staking.reduce((t, e) => e.isDeactivated && !e.isAvailableForWithdraw ? t.add(new this.coin.BN(e.staked)) : t, new this.coin.BN("0"))
                        },
                        total() {
                            const t = new this.coin.BN(this.coin.balance).add(this.staked).add(this.pendingWithdrawals).add(this.availableWithdrawals);
                            return this.coin.toCurrencyUnit(t)
                        }
                    },
                    async mounted() {
                        await this.coin.getInfo()
                    },
                    methods: {
                        clearClaimStatus(t) {
                            t ? this.claimOk = !1 : this.claimFail = !1, this.claiming = !1
                        },
                        withdraw() {
                            this.checkWithdrawals() ? this.$emit("makeWithdrawal") : this.errorMessage = "You need to deactivate staked coins first"
                        },
                        unstake() {
                            this.checkUnstake() ? this.$emit("makeUnstake") : this.errorMessage = "You need to stake some coins first"
                        },
                        checkUnstake() {
                            return this.staked.toNumber() > 0
                        },
                        checkWithdrawals() {
                            return this.availableWithdrawals > 0
                        },
                        async claimReward() {
                            this.$emit("makeClaim")
                        }
                    }
                };
            e.default = l
        },
        872: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(30),
                n = a(i(83)),
                o = a(i(225)),
                l = a(i(226)),
                r = i(201),
                c = i(38);
            var d = {
                name: "StakingPopupTRX",
                components: {
                    CoinIcon: n.default,
                    SimplePopup: o.default,
                    StakingInfoItem: l.default
                },
                mixins: [s.DisabledCoinMixin, s.StakingMixin],
                props: {
                    staking: {
                        type: Object,
                        default: () => ({})
                    }
                },
                data: () => ({
                    errorMessage: "",
                    processingName: "",
                    isStakingProcessing: !1,
                    isSendStakeTRX: !1,
                    sendType: "Stake",
                    isError: !1,
                    isSuccess: !1,
                    txId: "",
                    isPasswordShow: !1,
                    password: "",
                    passwordError: "",
                    cacheVotesAvailable: 0,
                    total: "0",
                    frozen: "0",
                    reward: "0",
                    availableForStake: "0",
                    votesAvailable: "0",
                    balancesTimeout: 0,
                    showHelpPopup: !1
                }),
                computed: {
                    stakingData() {
                        const t = this.coin.ticker;
                        return [{
                            title: this.Texts.TextDesktop.labels.total,
                            value: this.total
                        }, {
                            title: this.Texts.TextDesktop.labels.available,
                            value: this.availableForStake,
                            badge: {
                                title: "Stake",
                                show: !0
                            },
                            badgeClick: () => this.$emit("make", "Stake")
                        }, {
                            title: this.Texts.TextDesktop.labels.staked,
                            value: this.frozen
                        }, {
                            title: this.Texts.TextDesktop.labels.unclaimedRewards,
                            value: this.reward,
                            badge: {
                                title: "Claim",
                                show: !this.isCoinDisabled([this.actionClaim]),
                                disabled: !+this.reward || +this.reward <= .01
                            },
                            badgeClick: () => this.$emit("make", "Claim")
                        }, {
                            title: this.Texts.TextDesktop.labels.availableVotes,
                            value: this.votesAvailable,
                            badge: {
                                title: "Vote",
                                show: !this.isCoinDisabled([this.actionVote]) && 0 != +this.votesAvailable
                            },
                            badgeClick: () => this.$emit("make", "Vote")
                        }].map(e => ({
                            ...e,
                            badgeClick: e.badgeClick ? e.badgeClick : () => null,
                            value: e.value,
                            ticker: t
                        }))
                    }
                },
                beforeMount() {
                    this.getBalances();
                    const {
                        topic: t
                    } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
                    c.Emmiter.on(t, this.getBalances)
                },
                beforeDestroy() {
                    const {
                        topic: t
                    } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
                    c.Emmiter.removeListener(t, this.getBalances)
                },
                methods: {
                    getBalances() {
                        this.total = this.coin.getTotalBalance().toCurrency(), this.reward = this.coin.getRewards().toCurrency(), this.frozen = this.coin.getFrozenVotes().toCurrency(), this.availableForStake = this.coin.getAvailableBalance().toCurrency(), this.votesAvailable = this.coin.getAvailableVotes().toCurrency()
                    },
                    checkUnstake() {
                        this.errorMessage = "";
                        const t = this.coin.getFreezeExpiration(); + t > 0 && (this.errorMessage = `Unstaking will be available in ${t} hours`), +this.frozen <= 0 && (this.errorMessage = "Nothing to unstake. You should delegate TRX first")
                    },
                    doUnstake() {
                        this.checkUnstake(), "" === this.errorMessage && this.$emit("make", "Unstake")
                    }
                }
            };
            e.default = d
        },
        873: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(i(83)),
                n = i(30),
                o = {
                    name: "StakingPopupXTZ",
                    components: {
                        CoinIcon: s.default
                    },
                    mixins: [n.DisabledCoinMixin, n.StakingMixin],
                    props: {
                        staking: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    computed: {
                        currentValidator() {
                            return this.$staking.getStakingInterface(this.coin.ticker).validators.find(t => t.address.toLowerCase() === (this.coin.balances && this.coin.balances.staking && this.coin.balances.staking.validator.toLowerCase()))
                        },
                        stakingBalance() {
                            return this.isDelegated() && this.coin.balances && this.coin.balances.staking && this.coin.balances.staking.total || 0
                        },
                        available() {
                            return this.coin.balances && this.coin.balances.available || 0
                        }
                    },
                    methods: {
                        isDelegated() {
                            if (this.coin.balances && this.coin.balances.staking && this.coin.balances.staking.total) return Number(this.coin.balances.available) && Number(this.coin.balances.staking.total)
                        }
                    }
                };
            e.default = o
        },
        874: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(i(225)),
                n = a(i(226)),
                o = a(i(83)),
                l = i(30);
            var r = {
                name: "StakingPopupZIL",
                components: {
                    SimplePopup: s.default,
                    StakingInfoItem: n.default,
                    CoinIcon: o.default
                },
                mixins: [l.CurrencyConverter, l.StakingMixin, l.DisabledCoinMixin],
                props: {
                    staking: {
                        type: Object,
                        default: () => ({})
                    }
                },
                data: () => ({
                    claiming: !1,
                    claimOk: !1,
                    claimFail: !1,
                    showHelpPopup: !1,
                    isFeeEnough: !0,
                    message: ""
                }),
                computed: {
                    stakingData() {
                        const t = this.staking.displayTicker;
                        return [{
                            title: this.Texts.TextDesktop.labels.total,
                            value: this.total,
                            ticker: t
                        }, {
                            title: this.Texts.TextDesktop.labels.available,
                            value: this.available,
                            ticker: t,
                            badge: {
                                title: "Stake",
                                show: !0
                            },
                            badgeClick: () => this.$emit("makeStake")
                        }, {
                            title: this.Texts.TextDesktop.labels.staked,
                            value: this.staked,
                            ticker: t
                        }, {
                            title: this.Texts.TextDesktop.labels.rewards,
                            value: this.reward,
                            ticker: t,
                            badge: {
                                title: "Claim",
                                show: 0 != +this.reward && !this.isCoinDisabled([this.actionClaim]),
                                disabled: this.coin.isClaiming
                            },
                            badgeClick: () => this.$emit("makeClaim")
                        }, {
                            title: this.Texts.TextDesktop.labels.pendingWithdrawal,
                            value: this.unstaking,
                            ticker: t
                        }, {
                            title: this.Texts.TextDesktop.labels.availableWithdrawal,
                            value: this.availableWithdrawal,
                            ticker: t,
                            badge: {
                                title: "Withdraw",
                                show: this.isWithdraw,
                                disabled: this.stakingBalances.withdrawals && 0 === Number(this.stakingBalances.withdrawals.availableWithdrawal.total)
                            },
                            badgeClick: () => this.completeWithdrawal()
                        }].map(t => ({
                            ...t,
                            badgeClick: t.badgeClick ? t.badgeClick : () => null
                        }))
                    },
                    stakingBalances() {
                        if (!this.coin.balances) return {
                            available: 0,
                            total: 0,
                            rewards: 0,
                            availableForStake: 0,
                            withdrawals: {
                                pendingWithdrawal: {},
                                availableWithdrawal: {},
                                total: 0
                            }
                        };
                        const {
                            total: t = 0,
                            staking: e = 0,
                            rewards: i = 0,
                            withdrawals: a = 0,
                            available: s = 0,
                            availableForStake: n
                        } = this.coin.balances;
                        return {
                            total: t,
                            staking: e,
                            rewards: i,
                            withdrawals: a,
                            available: s,
                            availableForStake: n
                        }
                    },
                    total() {
                        return this.coin.toCurrencyUnit(this.stakingBalances.total)
                    },
                    available() {
                        var t;
                        return (null === (t = this.stakingBalances) || void 0 === t ? void 0 : t.availableForStake) || 0
                    },
                    availableWithdrawal() {
                        var t, e, i;
                        return null !== (t = this.stakingBalances) && void 0 !== t && null !== (e = t.withdrawals) && void 0 !== e && null !== (i = e.availableWithdrawal) && void 0 !== i && i.total ? this.coin.toCurrencyUnit(this.stakingBalances.withdrawals.availableWithdrawal.total) : 0
                    },
                    staked() {
                        var t, e;
                        return null !== (t = this.stakingBalances) && void 0 !== t && null !== (e = t.staking) && void 0 !== e && e.total ? this.coin.toCurrencyUnit(this.stakingBalances.staking.total) : 0
                    },
                    reward() {
                        return this.coin.toCurrencyUnit(this.stakingBalances.rewards.total)
                    },
                    unstaking() {
                        return this.stakingBalances.withdrawals && this.stakingBalances.withdrawals.pendingWithdrawal.total ? this.coin.toCurrencyUnit(this.stakingBalances.withdrawals.pendingWithdrawal.total) : 0
                    },
                    isWithdraw() {
                        var t, e;
                        return 0 !== +((null === (t = this.stakingBalances.withdrawals) || void 0 === t || null === (e = t.availableWithdrawal) || void 0 === e ? void 0 : e.total) || 0) && !this.isCoinDisabled([this.actionWithdraw])
                    },
                    isAvailableUnstake() {
                        var t;
                        return Number((null === (t = this.stakingBalances) || void 0 === t ? void 0 : t.total) || 0) > 0
                    },
                    detailsOnMainPage() {
                        return this.Texts.CoinTips.staking(this.Texts.CoinTips.labels.detailsOnMainPage)
                    }
                },
                methods: {
                    clearClaimStatus(t) {
                        t ? this.claimOk = !1 : this.claimFail = !1, this.claiming = !1
                    },
                    completeWithdrawal() {
                        this.$emit("makeWithdrawal")
                    },
                    unstake() {
                        const t = Number(this.reward) > 0,
                            e = Number(this.staked) > 0;
                        t ? (this.message = "To unstake your ZIL, claim your rewards", this.isDisableUnstakeButton = !0, setTimeout(() => {
                            this.isDisableUnstakeButton = !1, this.message = ""
                        }, 3e4)) : e ? this.$emit("makeUnstake") : this.message = "To unstake your ZIL, claim your rewards"
                    }
                }
            };
            e.default = r
        },
        875: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = a(i(225)),
                n = a(i(226)),
                o = i(30),
                l = a(i(1163)),
                r = i(201),
                c = i(38),
                d = a(i(61)),
                u = a(i(83));
            var k = {
                name: "StakingPopupEGLD",
                components: {
                    StakingInfoItem: n.default,
                    SimplePopup: s.default,
                    CoinIcon: u.default
                },
                mixins: [o.CurrencyConverter, o.StakingMixin, o.DisabledCoinMixin, l.default],
                props: {
                    staking: {
                        type: Object,
                        default: () => ({})
                    }
                },
                data: () => ({
                    claiming: !1,
                    claimOk: !1,
                    claimFail: !1,
                    errorMessage: "",
                    showHelpPopup: !1,
                    isDisableUnstakeButton: !1,
                    isInvisibleClaimButton: !1,
                    isFeeEnough: !0,
                    total: "0",
                    staked: "0",
                    rewards: "0",
                    availableForStake: "0",
                    pendingWithdrawals: "0",
                    availableWithdrawals: "0"
                }),
                computed: {
                    detailsOnMainPage() {
                        return this.Texts.CoinTips.staking(this.Texts.CoinTips.labels.detailsOnMainPage)
                    },
                    stakingData() {
                        const t = this.staking.displayTicker;
                        return [{
                            title: this.Texts.TextDesktop.labels.total,
                            value: this.total,
                            ticker: t
                        }, {
                            title: this.Texts.TextDesktop.labels.available,
                            value: this.availableForStake,
                            ticker: t,
                            badge: {
                                title: Number(this.availableForStake) > 0 ? "Stake" : "Buy",
                                show: !0
                            },
                            badgeClick: () => Number(this.availableForStake) > 0 ? this.$emit("makeStake") : this.buy(this.coin)
                        }, {
                            title: this.Texts.TextDesktop.labels.staked,
                            value: this.staked,
                            ticker: t,
                            badgeClick: () => this.unstake()
                        }, {
                            title: this.Texts.TextDesktop.labels.rewards,
                            value: this.rewards,
                            ticker: t,
                            badge: {
                                title: "Claim",
                                show: Number(this.rewards),
                                disabled: 0 === Number(this.rewards)
                            },
                            badgeClick: () => this.claim()
                        }, {
                            title: this.Texts.TextDesktop.labels.pendingWithdrawal,
                            value: this.pendingWithdrawals,
                            ticker: t
                        }, {
                            title: this.Texts.TextDesktop.labels.availableWithdrawal,
                            value: this.availableWithdrawals,
                            ticker: t,
                            badge: {
                                title: "Withdraw",
                                show: Number(this.availableWithdrawals),
                                disabled: !this.availableWithdrawals
                            },
                            badgeClick: () => this.withdraw()
                        }].map(t => ({
                            ...t,
                            badgeClick: t.badgeClick ? t.badgeClick : () => null
                        }))
                    },
                    isWithdraw() {
                        return Number(this.availableWithdrawals) > 0
                    }
                },
                beforeMount() {
                    this.getBalances();
                    const {
                        topic: t
                    } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
                    c.Emmiter.on(t, this.getBalances)
                },
                beforeDestroy() {
                    const {
                        topic: t
                    } = (0, r.STAKING_BALANCES_UPDATED)(this.coin.id);
                    c.Emmiter.removeListener(t, this.getBalances)
                },
                methods: {
                    clearClaimStatus(t) {
                        t ? this.claimOk = !1 : this.claimFail = !1, this.claiming = !1
                    },
                    async completeWithdrawal() {
                        this.$emit("makeWithdrawal")
                    },
                    unstake() {
                        this.checkUnstake() ? this.$emit("makeUnstake") : (this.errorMessage = "You have nothing to unstake yet", this.isDisableUnstakeButton = !0, setTimeout(() => {
                            this.isDisableUnstakeButton = !1, this.errorMessage = ""
                        }, 3e4))
                    },
                    async claim() {
                        const t = await this.coin.getFee({
                                gasLimit: this.coin.stakingGasLimit
                            }),
                            e = this.coin.toCurrencyUnit(new d.default(t).multipliedBy(3).toString());
                        new d.default(this.rewards).gte(e) ? this.$emit("makeClaim") : (this.errorMessage = `The network fee is higher than the reward. Min amount to claim is ${e} EGLD`, this.isDisableUnstakeButton = !0, setTimeout(() => {
                            this.isDisableUnstakeButton = !1, this.errorMessage = ""
                        }, 3e4))
                    },
                    withdraw() {
                        this.$emit("makeWithdrawal")
                    },
                    checkUnstake() {
                        return Number(this.staked) > 0
                    },
                    getBalances() {
                        this.total = this.coin.getTotalBalance().toCurrency(), this.availableForStake = this.coin.getAvailableBalance().toCurrency(), this.rewards = this.coin.getRewards().toCurrency(), this.staked = this.coin.getStakedBalance().toCurrency(), this.unstaking = this.coin.getUnstakingBalance().toCurrency(), this.availableWithdrawals = this.coin.getAvailableWithdrawals().toCurrency(), this.pendingWithdrawals = this.coin.getPendingWithdrawals().toCurrency()
                    }
                }
            };
            e.default = k
        },
        876: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(38),
                n = i(201),
                o = i(30),
                l = a(i(225)),
                r = a(i(226)),
                c = {
                    name: "StakingPopupHBAR",
                    components: {
                        SimplePopup: l.default,
                        StakingInfoItem: r.default
                    },
                    mixins: [o.BuyMixin, o.CurrencyConverter, o.DisabledCoinMixin, o.StakingMixin],
                    props: {
                        staking: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    data: () => ({
                        availableForStake: "0",
                        errorMessage: "",
                        rewards: "0",
                        staked: "0",
                        showHelpPopup: !1,
                        showWarning: !1
                    }),
                    computed: {
                        detailsOnMainPage() {
                            return this.Texts.CoinTips.staking(this.Texts.CoinTips.labels.detailsOnMainPage)
                        },
                        stakingData() {
                            const t = this.coin.ticker;
                            return [{
                                title: this.Texts.TextDesktop.labels.available,
                                value: this.availableForStake,
                                badge: {
                                    title: Number(this.availableForStake) > 0 ? "Stake" : "Buy",
                                    show: !+this.staked
                                },
                                badgeClick: () => Number(this.availableForStake) > 0 ? this.$emit("makeStake") : this.buy(this.coin),
                                isDisable: +this.staked > 0
                            }, {
                                title: this.Texts.TextDesktop.labels.staked,
                                value: this.staked,
                                isDisable: 0 == +this.staked
                            }, {
                                title: this.Texts.TextDesktop.labels.rewards,
                                value: this.rewards,
                                ticker: t,
                                badge: {
                                    title: "Claim",
                                    show: !this.isCoinDisabled([this.actionClaim]) && 0 != +this.rewards
                                },
                                badgeClick: () => this.$emit("make", "Claim")
                            }].map(e => ({
                                ...e,
                                badgeClick: e.badgeClick ? e.badgeClick : () => null,
                                value: e.value,
                                ticker: t
                            }))
                        }
                    },
                    async mounted() {
                        await this.coin.getInfo()
                    },
                    beforeMount() {
                        this.getBalances();
                        const {
                            topic: t
                        } = (0, n.STAKING_BALANCES_UPDATED)(this.coin.id);
                        s.Emmiter.on(t, this.getBalances)
                    },
                    beforeDestroy() {
                        const {
                            topic: t
                        } = (0, n.STAKING_BALANCES_UPDATED)(this.coin.id);
                        s.Emmiter.removeListener(t, this.getBalances)
                    },
                    methods: {
                        stake() {
                            +this.staked > 0 ? this.showWarning = !0 : this.$emit("makeStake")
                        },
                        unstake() {
                            this.checkUnstake() ? this.$emit("makeUnstake") : this.errorMessage = "You need to stake some coins first"
                        },
                        checkUnstake() {
                            return Number(this.staked) > 0
                        },
                        getBalances() {
                            this.availableForStake = this.coin.getAvailableBalance().toCurrency(), this.rewards = this.coin.getRewards().toCurrency(), this.staked = this.coin.getStakedBalance().toCurrency()
                        }
                    }
                };
            e.default = c
        },
        877: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = {
                name: "StakingPopupNotFound",
                mixins: [i(30).StakingMixin]
            };
            e.default = a
        },
        878: function(t, e, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(38),
                n = i(201),
                o = i(30),
                l = a(i(225)),
                r = a(i(226)),
                c = a(i(83));

            function d(t, e, i) {
                return function(t, e) {
                        if (t !== e) throw new TypeError("Private static access of wrong provenance")
                    }(t, e),
                    function(t, e) {
                        if (void 0 === t) throw new TypeError("attempted to " + e + " private static field before its declaration")
                    }(i, "get"),
                    function(t, e) {
                        if (e.get) return e.get.call(t);
                        return e.value
                    }(t, i)
            }
            class ConfigComponent {
                static generateComponent({
                    vm: t,
                    actions: e,
                    makeEmit: i,
                    balances: a,
                    coin: s
                }) {
                    var n;
                    return {
                        methods: {
                            makeEmit: i
                        },
                        computed: {
                            parent: () => t,
                            coin: () => s,
                            stakingActions: () => e,
                            stakingBalances: () => a
                        },
                        template: `\n      <div>\n        ${d(this,ConfigComponent,u).new.sectionBody.detailsOnMainPage.template}\n        ${d(this,ConfigComponent,u).new.sectionBody.errorMessage.template}\n        ${null===(n=d(this,ConfigComponent,u).new.sectionFooter.buttons)||void 0===n?void 0:n[s.ticker].template}\n      </div>\n    `
                    }
                }
            }
            var u = {
                    writable: !0,
                    value: {
                        new: {
                            sectionBody: {
                                detailsOnMainPage: {
                                    template: '\n          <transition name="fade">\n            <div\n              v-if="parent.detailsOnMainPage"\n              class="section__info m-t-26"\n            >\n              <p\n                class="new-text-medium2 new-text-gray2"\n                v-html="parent.detailsOnMainPage"\n              >\n              </p>\n            </div>\n          </transition>\n        '
                                },
                                stakingAllNoWithdrawOperation: {
                                    template: '\n          <transition name="fade">\n            <div\n              v-if="parent.isCoinDisabled(parent.stakingAllNoWithdrawOperation)"\n              class="section__message"\n            >\n              <p\n                v-for="action in parent.stakingAllNoWithdrawOperation"\n                :key="action"\n                class="new-text-red2 new-text-medium2"\n              >\n                {{ parent.getCoinDisabilityReason(action) }}\n              </p>\n            </div>\n          </transition>\n        '
                                },
                                stakingAllOperation: {
                                    template: '\n          <transition name="fade">\n            <div\n              v-if="parent.isCoinDisabled(parent.stakingAllOperation)"\n              class="section__message"\n            >\n              <p\n                v-for="action in parent.stakingAllOperation"\n                :key="action"\n                class="new-text-red2 new-text-medium2"\n              >\n                {{ parent.getCoinDisabilityReason(action) }}\n              </p>\n            </div>\n          </transition>\n        '
                                },
                                errorMessage: {
                                    template: '\n          <transition name="fade">\n            <div\n              v-if="parent.errorMessage"\n              class="section__message"\n            >\n              <p class="new-text-red2 new-text-medium2">\n                {{ parent.errorMessage }}\n              </p>\n            </div>\n          </transition>\n        '
                                }
                            },
                            sectionFooter: {
                                buttons: {
                                    ETH: {
                                        template: "\n              <div>\n                <div class=\"section__info-row m-t-45\">\n                  <button\n                    class=\"button rounded\"\n                    @click=\"makeEmit('stake')\"\n                  >\n                    Stake {{ parent.staking.displayTicker }}\n                  </button>\n                  <button\n                    class=\"button outlined\"\n                    @click=\"() => {\n                      const stETH = this.$wallets.findWalletV2({ ticker: 'stETH', parentTicker: this.coin.ticker })\n                      this.$router.push('/exchange?coinToSend='+ stETH.ticker +'%|%' + stETH.id + '&coinToReceive=' + this.coin.ticker + '%|%' + this.coin.id)\n                    }\"\n                  >\n                    Exchange\n                  </button>\n                </div>\n              </div>\n              "
                                    },
                                    MATIC: {
                                        template: '\n              <div>\n                <div class="section__info-row m-t-45">\n                  <button\n                    class="button rounded"\n                    :class="{ \'button_disabled\': parent.isCoinDisabled([parent.actionStake]) }"\n                    @click="stakingActions.clicks.stake"\n                  >\n                    {{ +stakingBalances.availableVotes === 0 ? \'Activate\' : \'Stake\' }}\n                  </button>\n                  <button\n                    class="button outlined"\n                    :class="{ \'button_disabled\': parent.isCoinDisabled([parent.actionUnstake]) }"\n                    @click="stakingActions.clicks.unstake"\n                  >\n                    Unstake\n                  </button>\n                </div>\n              </div>\n              '
                                    }
                                }
                            }
                        }
                    }
                },
                k = {
                    name: "StakingPopupCoin",
                    components: {
                        SimplePopup: l.default,
                        StakingInfoItem: r.default,
                        CoinIcon: c.default
                    },
                    mixins: [o.CurrencyConverter, o.DisabledCoinMixin, o.BuyMixin],
                    props: {
                        staking: {
                            type: Object,
                            required: !0
                        }
                    },
                    data: () => ({
                        errorMessage: "",
                        isHelpPopup: !1,
                        balances: {
                            total: "0",
                            available: "0",
                            availableForStake: "0",
                            availableForUnstake: "0",
                            frozenEnergy: "0",
                            staked: "0",
                            rewards: "0",
                            unstaking: "0",
                            pendingWithdrawals: "0",
                            availableWithdrawals: "0",
                            availableVotes: "0",
                            delegatedVotes: "0",
                            frozenVotes: "0",
                            divisibleBalance: "0"
                        }
                    }),
                    computed: {
                        coin() {
                            return this.staking.walletInstance
                        },
                        stakingData() {
                            const t = ConfigComponent.generateComponent({
                                vm: this,
                                makeEmit: this.handleMakeEmit,
                                actions: this.config.actions,
                                balances: this.balances,
                                coin: this.coin
                            });
                            return {
                                infoItems: this.config.infoItems,
                                component: t
                            }
                        },
                        detailsOnMainPage() {
                            return this.Texts.CoinTips.staking(this.Texts.CoinTips.labels.detailsOnMainPage)
                        },
                        config() {
                            var t;
                            const e = this,
                                i = e.Texts.TextDesktop.labels,
                                a = e.balances,
                                s = null === (t = [{
                                    tickers: "ETH",
                                    data: {
                                        actions: {
                                            clicks: {
                                                stake: () => e.handleMakeEmit("stake")
                                            }
                                        },
                                        infoItems: [{
                                            title: i.total,
                                            value: a.total
                                        }, {
                                            title: i.available,
                                            value: a.availableForStake,
                                            badge: {
                                                title: "Stake",
                                                show: !0
                                            },
                                            click: "stake"
                                        }, {
                                            title: i.staked,
                                            value: a.staked,
                                            badge: {
                                                show: !1
                                            }
                                        }]
                                    }
                                }, {
                                    tickers: "MATIC",
                                    data: {
                                        actions: {
                                            clicks: {
                                                withdrawals: () => e.handleMakeEmit("withdrawals"),
                                                claim: () => {
                                                    +a.rewards < 1 ? e.errorMessage = "Min amount to claim is 1 MATIC" : e.handleMakeEmit("claim")
                                                },
                                                stake: () => {
                                                    0 == +a.availableVotes ? e.$bus.$emit("activate-coin", {
                                                        id: e.coin.id
                                                    }) : e.handleMakeEmit("stake")
                                                },
                                                unstake: () => {
                                                    +a.staked > 0 ? e.handleMakeEmit("unstake") : e.errorMessage = "Nothing to unstake. You should delegate MATIC first"
                                                }
                                            }
                                        },
                                        infoItems: [{
                                            title: i.total,
                                            value: a.total
                                        }, {
                                            title: i.available,
                                            value: a.availableForStake,
                                            badge: {
                                                title: "Stake",
                                                show: !e.isCoinDisabled([e.actionStake]) && +a.availableForStake > 0
                                            },
                                            click: "stake"
                                        }, {
                                            title: i.staked,
                                            value: a.staked
                                        }, {
                                            title: i.rewards,
                                            value: a.rewards,
                                            badge: {
                                                title: "Claim",
                                                show: !e.isCoinDisabled([e.actionClaim]) && +a.rewards > 0
                                            },
                                            click: "claim"
                                        }, {
                                            title: i.pendingWithdrawal,
                                            value: a.pendingWithdrawals
                                        }, {
                                            title: i.availableWithdrawal,
                                            value: a.availableWithdrawals,
                                            badge: {
                                                title: "Withdraw",
                                                show: !e.isCoinDisabled([e.actionVote]) && +a.availableWithdrawals > 0
                                            },
                                            click: "withdrawals"
                                        }]
                                    }
                                }].find(t => t.tickers.includes(e.coin.ticker))) || void 0 === t ? void 0 : t.data;
                            return {
                                infoItems: e.formatInfoData(s),
                                actions: s.actions
                            }
                        }
                    },
                    async created() {
                        const {
                            topic: t
                        } = (0, n.STAKING_BALANCES_UPDATED)(this.coin.id);
                        this.setBalances(this.coin.balances), s.Emmiter.on(t, this.setBalances), this.$bus.$on("close-staking-exchange-popup", this.handleClosePopup)
                    },
                    beforeDestroy() {
                        const {
                            topic: t
                        } = (0, n.STAKING_BALANCES_UPDATED)(this.coin.id);
                        s.Emmiter.removeListener(t, this.setBalances), this.$bus.$off("close-staking-exchange-popup", this.handleClosePopup)
                    },
                    methods: {
                        handleClosePopup() {
                            this.$bus.$emit("close-staking-popup")
                        },
                        handleMakeEmit(t) {
                            var e;
                            const i = {
                                stake: () => this.$emit("make", "Stake"),
                                unstake: () => this.$emit("make", "Unstake"),
                                claim: () => this.$emit("make", "Claim"),
                                withdrawals: () => this.$emit("make", "Withdrawal")
                            };
                            null === (e = i[t]) || void 0 === e || e.call(i)
                        },
                        formatInfoData(t) {
                            var e;
                            return (null !== (e = null == t ? void 0 : t.infoItems) && void 0 !== e ? e : []).map(e => {
                                var i, a;
                                return {
                                    ...e,
                                    ticker: this.staking.displayTicker,
                                    click: null !== (i = null === (a = t.actions.clicks) || void 0 === a ? void 0 : a[e.click]) && void 0 !== i ? i : () => null
                                }
                            })
                        },
                        setBalances({
                            availableForStake: t,
                            staked: e,
                            rewards: i,
                            availableVotes: a,
                            total: s,
                            pendingWithdrawals: n,
                            availableWithdrawals: o
                        } = {}) {
                            const l = {
                                total: (null != s ? s : this.coin.getTotalBalance()).toCurrency(),
                                availableForStake: (t || this.coin.getAvailableBalance()).toCurrency(),
                                staked: (null != e ? e : this.coin.getStakedBalance()).toCurrency(),
                                rewards: (null != i ? i : this.coin.getRewards()).toCurrency(),
                                pendingWithdrawals: (null != n ? n : this.coin.getPendingWithdrawals()).toCurrency(),
                                availableWithdrawals: (null != o ? o : this.coin.getAvailableWithdrawals()).toCurrency(),
                                availableVotes: (null != a ? a : this.coin.getAvailableVotes()).toCurrency()
                            };
                            this.balances = {
                                ...this.balances,
                                ...l
                            }
                        }
                    }
                };
            e.default = k
        }
    }
]);