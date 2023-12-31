(window.webpackJsonp = window.webpackJsonp || []).push([
    [111], {
        1309: function(t, s, i) {
            "use strict";
            i.d(s, "a", (function() {
                return e
            })), i.d(s, "b", (function() {
                return a
            }));
            var e = function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("AtomicPopup", {
                        attrs: {
                            isShowClose: !t.sending
                        },
                        on: {
                            close: t.backToWallets
                        }
                    }, [i("div", {
                        staticClass: "send-coin popup send-stake"
                    }, [t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : i("div", {
                        staticClass: "form"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendType) + " " + t._s(t.coin.name) + " (" + t._s(t.coin.ticker) + ")\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.calculator)) + "\n        ")]) : t._e()]), t._v(" "), i("EditAmount", {
                        staticClass: "last-child",
                        attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.inputsError.amount,
                            isBuyCoin: t.isBuyCoin,
                            isFiat: !0,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            readonly: "Claim" === t.sendType,
                            showBalance: !0,
                            wallet: t.coin,
                            value: t.inputs.amount,
                            placeholder: "Amount"
                        },
                        on: {
                            input: t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), i("AvailableAndFeeAmounts", {
                        attrs: {
                            availableBalance: String(t.availableBalance),
                            feeBalance: t.fee.fee,
                            feeWallet: t.feeWallet,
                            isDisableAvailable: "Claim" === t.sendType,
                            sendType: t.sendType,
                            wallet: t.coin
                        },
                        on: {
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "text"
                    }, [t.availableValidators.length > 0 && "Claim" !== t.sendType ? i("div", {
                        staticClass: "stake-validator"
                    }, [t._v("\n          Validator: "), i("span", {
                        staticClass: "text-white validator-name",
                        on: {
                            click: function(s) {
                                s.stopPropagation(), t.isChangeValidator = !0
                            }
                        }
                    }, [t._v(t._s(t.stakingValidator.validatorName) + " "), "Stake" === t.sendType && t.stakingValidator.validatorReward ? i("span", {
                        staticClass: "text-white"
                    }, [t._v("- " + t._s(t.stakingValidator.validatorReward) + "%"), i("span", {
                        staticClass: "ticker additional"
                    }, [t._v("\n            yearly yield\n          ")])]) : t._e()]), t._v(" "), t.isChangeValidator ? i("Dropdown", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.closeValidatorsDropdown,
                            expression: "closeValidatorsDropdown"
                        }],
                        attrs: {
                            elements: t.availableValidators,
                            showAdditional: !0
                        },
                        on: {
                            select: t.selectValidator
                        }
                    }) : t._e()], 1) : t._e(), t._v(" "), i("transition", {
                        attrs: {
                            name: "collapse-fade"
                        }
                    }, ["Stake" === t.sendType && t.stakingValidator.validatorReward && t.stakingProfit && Number(t.inputs.amount) > 0 ? i("div", {
                        staticClass: "network-fee flex-block"
                    }, [i("p", [t._v("\n              Yearly earning:\n            ")]), t._v(" "), i("p", {
                        staticClass: "text-white"
                    }, [t._v("\n              " + t._s(t.stakingProfit) + " " + t._s(t.coin.ticker) + " \n            ")]), t._v(" "), i("p", [t._v("\n              " + t._s(t._f("formatFinance")(t.getValueFiat(t.stakingProfit, t.coin))) + " " + t._s(t.fiatRate) + "\n            ")])]) : t._e()])], 1), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, [t.isFeeEnough ? t._e() : i("div", {
                        staticClass: "error"
                    }, [t._v("\n            You should have at least " + t._s(t._f("formatFinance")(Number(Number(t.fee.fee).toFixed(6)))) + "\n            " + t._s(t.coin.deprecatedParent) + " to send " + t._s(t.coin.getUserTicker()) + "\n          ")])]), t._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [t.initSend ? i("div", {
                        staticClass: "loader"
                    }) : i("button", {
                        staticClass: "button",
                        attrs: {
                            "data-test-id": "send_stake"
                        },
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n            " + t._s(t.sendType)), Number(t.inputs.amount) > 0 ? i("span", [t._v(t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker))]) : t._e()])])], 1)], 1), t._v(" "), t.isPasswordShow ? i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n          " + t._s(t.sendType) + " " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.stake)) + "\n        ")]) : t._e(), t._v(" "), "Unstake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.unstake)) + "\n        ")]) : t._e()]), t._v(" "), i("Edit", {
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
                            callback: function(s) {
                                t.$set(t.inputs, "password", s)
                            },
                            expression: "inputs.password"
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("button", {
                        staticClass: "button normal hover-white",
                        attrs: {
                            "data-test-id": "back_atom"
                        },
                        on: {
                            click: t.backFromPassword
                        }
                    }, [t._v("\n          Back\n        ")]), t._v(" "), i("button", {
                        staticClass: "button",
                        attrs: {
                            "data-test-id": "confirm_atom"
                        },
                        on: {
                            click: t.sendCoins
                        }
                    }, [t._v("\n          Confirm\n        ")])])], 1) : t._e(), t._v(" "), t.sending ? i("div", {
                        staticClass: "sending"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendType) + " " + t._s(t.inputs.amount) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating)) + "\n        ")]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : i("SendCoinResult", {
                        attrs: {
                            amount: t.inputs.amount,
                            coin: t.coin,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            sendType: t.sendType,
                            txid: t.txid,
                            contactData: {
                                issue: "Staking",
                                tags: ["staking_tag"]
                            },
                            mailTitle: "Sending error"
                        },
                        on: {
                            backToForm: t.backToForm,
                            backToWallets: t.backToWallets,
                            tryAgain: t.tryAgain
                        }
                    })], 1)])
                },
                a = []
        },
        1311: function(t, s, i) {
            "use strict";
            i.d(s, "a", (function() {
                return e
            })), i.d(s, "b", (function() {
                return a
            }));
            var e = function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                        staticClass: "send-coin popup staking"
                    }, [t.sending ? t._e() : i("div", {
                        staticClass: "close",
                        on: {
                            click: t.backToWallets
                        }
                    }, [t._v("\n    ✕\n  ")]), t._v(" "), t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : i("div", {
                        staticClass: "form"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n        " + t._s(t.sendType) + " " + t._s(t.coin.name) + " (AWC)\n      ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n        " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.calculator)) + "\n      ")]) : t._e()]), t._v(" "), i("EditAmount", {
                        staticClass: "last-child",
                        attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.amountError,
                            isFiat: !0,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            showBalance: !0,
                            wallet: t.coin,
                            value: t.amount,
                            placeholder: "Amount"
                        },
                        on: {
                            input: t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), i("AvailableAndFeeAmounts", {
                        attrs: {
                            availableBalance: String(t.availableBalance),
                            feeBalance: t.fee.fee,
                            feeWallet: t.feeWallet,
                            sendType: t.sendType,
                            wallet: t.coin
                        },
                        on: {
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "network-fee flex-block"
                    }, [i("p", [t._v("\n          Yearly earning:\n        ")]), t._v(" "), i("p", {
                        staticClass: "text-white"
                    }, [t._v("\n          " + t._s(t.yearlyYield) + " AWC \n        ")]), t._v(" "), t.hasRate(t.coin) ? i("p", [t._v("\n          " + t._s(t._f("formatFinance")(t.getValueFiat(t.yearlyYield, t.coin))) + " " + t._s(t.fiatRate) + "\n        ")]) : t._e()])]), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, [t.isFeeEnough ? t._e() : i("div", {
                        staticClass: "error"
                    }, [t._v("\n          You should have at least " + t._s(t._f("formatFinance")(Number(Number(t.fee.fee).toFixed(6)))) + " BNB\n          " + t._s(t.fee.fee.ticker) + " to send AWC\n        ")])]), t._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [i("button", {
                        staticClass: "button",
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n          " + t._s(t.sendType)), Number(t.amount) > 0 ? i("span", [t._v("\n            " + t._s(t._f("formatFinance")(t.amount)) + " AWC\n          ")]) : t._e()])])], 1)], 1), t._v(" "), t.isPasswordShow ? i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n        " + t._s(t.sendType) + " " + t._s(t._f("formatFinance")(t.amount)) + " AWC\n      ")])]), t._v(" "), i("Edit", {
                        ref: "confirmPassword",
                        attrs: {
                            error: t.passwordError,
                            focus: !0,
                            isShowPassword: !0,
                            type: t.inputTypePassword,
                            placeholder: "Password"
                        },
                        on: {
                            "enter-pressed": t.sendCoins
                        },
                        model: {
                            value: t.password,
                            callback: function(s) {
                                t.password = s
                            },
                            expression: "password"
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("button", {
                        staticClass: "button normal hover-white",
                        on: {
                            click: t.backFromPassword
                        }
                    }, [t._v("\n        Back\n      ")]), t._v(" "), i("button", {
                        staticClass: "button",
                        on: {
                            click: t.sendCoins
                        }
                    }, [t._v("\n        Confirm\n      ")])])], 1) : t._e(), t._v(" "), t.sending ? i("div", {
                        staticClass: "sending"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n        " + t._s(t.sendType) + " " + t._s(t.amount) + " AWC\n      ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n        " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating)) + "\n      ")]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : i("SendCoinResult", {
                        attrs: {
                            amount: t.sendAmount,
                            coin: t.coin,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            sendType: t.sendType,
                            txid: t.txid,
                            contactData: {
                                issue: "Staking",
                                tags: ["staking_tag"]
                            },
                            mailTitle: "Sending error"
                        },
                        on: {
                            backToForm: t.backToForm,
                            backToWallets: t.backToWallets,
                            tryAgain: t.tryAgain
                        }
                    })], 1)
                },
                a = []
        },
        1314: function(t, s, i) {
            "use strict";
            i.d(s, "a", (function() {
                return e
            })), i.d(s, "b", (function() {
                return a
            }));
            var e = function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("AtomicPopup", {
                        attrs: {
                            isShowClose: !t.sending
                        },
                        on: {
                            close: t.backToWallets
                        }
                    }, [i("div", {
                        staticClass: "send-coin popup send-stake"
                    }, [t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : i("div", {
                        staticClass: "form"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.textedSendType) + " " + t._s(t.coin.name) + " (" + t._s(t.coin.ticker) + ")\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.TextDesktop.hints("calculator")) + "\n        ")]) : t._e()]), t._v(" "), i("EditAmount", {
                        staticClass: "last-child",
                        attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.inputsError.amount,
                            isBuyCoin: t.isBuyCoin,
                            isFiat: !0,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            readonly: ["Withdrawal"].includes(t.sendType),
                            showBalance: !0,
                            wallet: t.coin,
                            value: t.inputs.amount,
                            placeholder: "Amount"
                        },
                        on: {
                            input: t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), i("AvailableAndFeeAmounts", {
                        attrs: {
                            availableBalance: String(t.availableBalance),
                            feeBalance: t.fee.fee,
                            feeWallet: t.feeWallet,
                            sendType: t.sendType,
                            wallet: t.coin
                        },
                        on: {
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "text"
                    }, [t.availableValidators.length > 0 ? i("div", {
                        staticClass: "stake-validator"
                    }, [t._v("\n          Validator: "), i("span", {
                        staticClass: "text-white validator-name",
                        on: {
                            click: function(s) {
                                s.stopPropagation(), t.isChangeValidator = !0
                            }
                        }
                    }, [t._v(t._s(t.stakingValidator.name) + " "), "Stake" === t.sendType && t.stakingValidator.reward ? i("span", {
                        staticClass: "text-white"
                    }, [t._v("- " + t._s(t.stakingValidator.reward) + "%"), i("span", {
                        staticClass: "ticker additional"
                    }, [t._v("\n            yearly yield\n          ")])]) : t._e()]), t._v(" "), t.isChangeValidator ? i("Dropdown", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.closeValidatorsDropdown,
                            expression: "closeValidatorsDropdown"
                        }],
                        attrs: {
                            elements: t.availableValidators,
                            showAdditional: !0
                        },
                        on: {
                            select: t.selectValidator
                        }
                    }) : t._e()], 1) : t._e(), t._v(" "), i("transition", {
                        attrs: {
                            name: "collapse-fade"
                        }
                    }, ["Stake" === t.sendType && t.stakingValidator.reward && t.stakingProfit && Number(t.inputs.amount) > 0 ? i("div", {
                        staticClass: "network-fee flex-block"
                    }, [i("p", [t._v("\n              Yearly earning:\n            ")]), t._v(" "), i("p", {
                        staticClass: "text-white"
                    }, [t._v("\n              " + t._s(t.stakingProfit) + " " + t._s(t.coin.ticker) + " \n            ")]), t._v(" "), i("p", [t._v("\n              " + t._s(t._f("formatFinance")(t.getValueFiat(t.stakingProfit, t.coin))) + " " + t._s(t.fiatRate) + "\n            ")])]) : t._e()])], 1), t._v(" "), i("div", {
                        staticClass: "submit p-t-40"
                    }, [i("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, ["Unstake" !== t.sendType || t.isUnstakeAvailable ? t._e() : i("div", {
                        staticClass: "error"
                    }, [i("div", {
                        staticClass: "new-text-error"
                    }, [i("div", {
                        staticClass: "new-text-error"
                    }, [t._v("\n                You have already unstaked from this validator in the last 7 days.\n              ")]), t._v(" "), i("div", {
                        staticClass: "new-text-error"
                    }, [t._v("\n                Please try again later. This is a Binance Chain rule\n              ")])])]), t._v(" "), "Claim" !== t.sendType || t.isFeeEnough ? t._e() : i("div", {
                        staticClass: "error flex center justify-center"
                    }, [i("span", {
                        staticClass: "new-text-error"
                    }, [t._v("\n              Not enough " + t._s(t.coin.getUserTicker()) + " to claim rewards\n            ")]), t._v(" "), i("button", {
                        staticClass: "button button-buy",
                        on: {
                            click: t.buyCoin
                        }
                    }, [t._v("\n              Buy\n            ")])]), t._v(" "), t.isFeeEnough ? t._e() : i("div", {
                        staticClass: "error"
                    }, [t._v("\n            You should have at least " + t._s(t._f("formatFinance")(Number(Number(t.fee.fee).toFixed(6)))) + "\n            " + t._s(t.fee.ticker) + " to send " + t._s(t.coin.getUserTicker()) + "\n          ")])]), t._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [t.initSend ? i("div", {
                        staticClass: "loader"
                    }) : i("button", {
                        staticClass: "button",
                        class: {
                            disabled: "Unstake" === t.sendType && !t.isUnstakeAvailable
                        },
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n            " + t._s(t.textedSendType)), Number(t.inputs.amount) > 0 ? i("span", [t._v(t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker))]) : t._e()])])], 1)], 1), t._v(" "), t.isPasswordShow ? i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n          " + t._s(t.textedSendType) + " " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.stake)) + "\n        ")]) : t._e(), t._v(" "), "Unstake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.unstake)) + "\n        ")]) : t._e()]), t._v(" "), i("Edit", {
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
                            callback: function(s) {
                                t.$set(t.inputs, "password", s)
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
                    }, [t._v("\n          Back\n        ")]), t._v(" "), i("button", {
                        staticClass: "button",
                        on: {
                            click: t.sendCoins
                        }
                    }, [t._v("\n          Confirm\n        ")])])], 1) : t._e(), t._v(" "), t.sending ? i("div", {
                        staticClass: "sending"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendTypeVerb) + " " + t._s(t.inputs.amount) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType && t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating) ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating)) + "\n        ")]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : i("SendCoinResult", {
                        attrs: {
                            amount: String(t.amountResult),
                            coin: t.coin,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            sendType: t.sendType,
                            txid: t.txid,
                            contactData: {
                                issue: "Staking",
                                tags: ["staking_tag"]
                            },
                            mailTitle: "Sending error"
                        },
                        on: {
                            backToForm: t.backToForm,
                            backToWallets: t.backToWallets,
                            tryAgain: t.tryAgain
                        }
                    })], 1)])
                },
                a = []
        },
        1321: function(t, s, i) {
            "use strict";
            i.d(s, "a", (function() {
                return e
            })), i.d(s, "b", (function() {
                return a
            }));
            var e = function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("AtomicPopup", {
                        attrs: {
                            isShowClose: !t.sending
                        },
                        on: {
                            close: t.backToWallets
                        }
                    }, [i("div", {
                        staticClass: "send-coin popup send-stake"
                    }, [t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : i("div", {
                        staticClass: "form"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendType) + " " + t._s(t.coin.name) + " (" + t._s(t.coin.ticker) + ")\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.calculator)) + "\n        ")]) : t._e()]), t._v(" "), i("EditAmount", {
                        staticClass: "last-child",
                        attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.inputsError.amount,
                            isFiat: !0,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            readonly: !1,
                            showBalance: !0,
                            wallet: t.coin,
                            value: t.inputs.amount,
                            placeholder: "Amount"
                        },
                        on: {
                            input: t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), i("AvailableAndFeeAmounts", {
                        attrs: {
                            availableBalance: String(t.availableBalance),
                            feeBalance: t.fee.fee,
                            feeWallet: t.feeWallet,
                            sendType: t.sendType,
                            wallet: t.coin,
                            isSendAll: !0
                        },
                        on: {
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "submit p-t-40"
                    }, [i("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, [t.isFeeEnough ? t._e() : i("div", {
                        staticClass: "error"
                    }, [t._v("\n            You should have at least " + t._s(t._f("formatFinance")(Number(Number(t.fee.fee).toFixed(6)))) + "\n            " + t._s(t.fee.ticker) + " to send " + t._s(t.coin.getUserTicker()) + "\n          ")])]), t._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [t.initSend ? i("div", {
                        staticClass: "loader"
                    }) : i("button", {
                        staticClass: "button",
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n            " + t._s(t.sendType) + "\n            "), Number(t.inputs.amount) > 0 ? i("span", [t._v("\n              " + t._s(t._f("formatFinance")(t.inputs.amount)) + "\n              " + t._s(t.coin.ticker) + "\n            ")]) : t._e()])])], 1)], 1), t._v(" "), t.isPasswordShow ? i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n          " + t._s(t.sendType) + " " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.stake)) + "\n        ")]) : t._e()]), t._v(" "), i("Edit", {
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
                            callback: function(s) {
                                t.$set(t.inputs, "password", s)
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
                    }, [t._v("\n          Back\n        ")]), t._v(" "), i("button", {
                        staticClass: "button",
                        on: {
                            click: t.sendCoins
                        }
                    }, [t._v("\n          Confirm\n        ")])])], 1) : t._e(), t._v(" "), t.sending ? i("div", {
                        staticClass: "sending"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendTypeVerb) + " " + t._s(t.inputs.amount) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating)) + "\n        ")]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : i("SendCoinResult", {
                        attrs: {
                            amount: t.sendAmount,
                            coin: t.coin,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            sendType: t.sendType,
                            txid: t.txid,
                            contactData: {
                                issue: "Staking",
                                tags: ["staking_tag"]
                            },
                            mailTitle: "Sending error"
                        },
                        on: {
                            backToForm: t.backToForm,
                            backToWallets: t.backToWallets,
                            tryAgain: t.tryAgain
                        }
                    })], 1)])
                },
                a = []
        },
        1322: function(t, s, i) {
            "use strict";
            i.d(s, "a", (function() {
                return e
            })), i.d(s, "b", (function() {
                return a
            }));
            var e = function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("AtomicPopup", {
                        on: {
                            close: t.backToWallets
                        }
                    }, [i("div", {
                        staticClass: "send-coin popup send-stake"
                    }, [t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : i("div", {
                        staticClass: "form"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendText) + " " + t._s(t.coin.name) + " (" + t._s(t.coin.ticker) + ")\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.TextDesktop.hints("calculator")) + "\n        ")]) : t._e()]), t._v(" "), i("EditAmount", {
                        staticClass: "last-child",
                        attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.inputsError.amount,
                            isBuyCoin: t.isBuyCoin,
                            isFiat: "Withdrawal" !== t.sendType,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            readonly: ["Claim", "Withdrawal"].includes(t.sendType),
                            showBalance: !0,
                            wallet: t.coin,
                            value: t.inputs.amount,
                            placeholder: "Amount"
                        },
                        on: {
                            input: t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), Number(t.fee.fee) ? i("AvailableAndFeeAmounts", {
                        attrs: {
                            availableBalance: String(t.availableBalance),
                            feeBalance: t.fee.fee,
                            feeWallet: t.feeWallet,
                            isRate: t.isRate,
                            sendType: t.sendType,
                            wallet: t.coin,
                            isSendAll: !["Claim", "Withdrawal"].includes(t.sendType)
                        },
                        on: {
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }) : t._e(), t._v(" "), i("div", {
                        staticClass: "text"
                    }, [t.availableValidators.length > 0 ? i("div", {
                        staticClass: "stake-validator"
                    }, [t._v("\n          Validator: "), i("span", {
                        staticClass: "text-white validator-name",
                        on: {
                            click: function(s) {
                                s.stopPropagation(), t.isChangeValidator = !0
                            }
                        }
                    }, [t._v(t._s(t.stakingValidator.name) + " "), "Stake" === t.sendType && t.stakingValidator.reward ? i("span", {
                        staticClass: "text-white"
                    }, [t._v("- " + t._s(t.stakingValidator.reward) + "%"), i("span", {
                        staticClass: "ticker additional"
                    }, [t._v("\n            yearly yield\n          ")])]) : t._e()]), t._v(" "), t.isChangeValidator ? i("Dropdown", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.closeValidatorsDropdown,
                            expression: "closeValidatorsDropdown"
                        }],
                        attrs: {
                            elements: t.availableValidators,
                            showAdditional: !0
                        },
                        on: {
                            select: t.selectValidator
                        }
                    }) : t._e()], 1) : t._e(), t._v(" "), i("transition", {
                        attrs: {
                            name: "collapse-fade"
                        }
                    }, ["Stake" === t.sendType && t.stakingValidator.reward && t.stakingProfit && Number(t.inputs.amount) > 0 ? i("div", {
                        staticClass: "network-fee flex-block"
                    }, [i("p", [t._v("\n              Yearly earning:\n            ")]), t._v(" "), i("p", {
                        staticClass: "text-white"
                    }, [t._v("\n              " + t._s(t.stakingProfit) + " " + t._s(t.coin.ticker) + " \n            ")]), t._v(" "), i("p", [t._v("\n              " + t._s(t._f("formatFinance")(t.getValueFiat(t.stakingProfit, t.coin))) + " " + t._s(t.fiatRate) + "\n            ")])]) : t._e()])], 1), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, ["Claim" !== t.sendType || t.isFeeEnough ? t.isFeeEnough ? t._e() : i("div", {
                        staticClass: "error"
                    }, [i("span", {
                        staticClass: "new-text-error"
                    }, [t._v("\n              Not enough " + t._s(t.feeTicker()) + " to pay the network fee\n            ")]), t._v(" "), i("button", {
                        staticClass: "button button-buy",
                        on: {
                            click: t.buyCoin
                        }
                    }, [t._v("\n              Buy\n            ")])]) : i("div", {
                        staticClass: "error flex center justify-center"
                    }, [i("span", {
                        staticClass: "new-text-error"
                    }, [t._v("\n              Not enough " + t._s(t.coin.getUserTicker()) + " to claim rewards\n            ")]), t._v(" "), i("button", {
                        staticClass: "button button-buy",
                        on: {
                            click: t.buyCoin
                        }
                    }, [t._v("\n              Buy\n            ")])])]), t._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [t.initSend ? i("div", {
                        staticClass: "loader"
                    }) : i("button", {
                        staticClass: "button",
                        class: {
                            disabled: !t.isFeeEnough
                        },
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n            " + t._s(t.sendText)), Number(t.inputs.amount) > 0 ? i("span", [t._v("\n              " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n            ")]) : t._e()])])], 1)], 1), t._v(" "), t.isPasswordShow ? i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n          " + t._s(t.sendText) + " " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.stake)) + "\n        ")]) : t._e(), t._v(" "), "Unstake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.unstake)) + "\n        ")]) : t._e()]), t._v(" "), i("Edit", {
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
                            callback: function(s) {
                                t.$set(t.inputs, "password", s)
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
                    }, [t._v("\n          Back\n        ")]), t._v(" "), i("button", {
                        staticClass: "button",
                        on: {
                            click: t.sendCoins
                        }
                    }, [t._v("\n          Confirm\n        ")])])], 1) : t._e(), t._v(" "), t.sending ? i("div", {
                        staticClass: "sending"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendTypeVerb) + " " + t._s(t.inputs.amount) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType && t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating) ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating)) + "\n        ")]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : i("SendCoinResult", {
                        attrs: {
                            amount: t.inputs.amount,
                            coin: t.coin,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            sendType: t.sendType,
                            txid: t.txid,
                            contactData: {
                                issue: "Staking",
                                tags: ["staking_tag"]
                            },
                            mailTitle: "Sending error"
                        },
                        on: {
                            backToForm: t.backToForm,
                            backToWallets: t.backToWallets,
                            tryAgain: t.tryAgain
                        }
                    })], 1)])
                },
                a = []
        },
        1323: function(t, s, i) {
            "use strict";
            i.d(s, "a", (function() {
                return e
            })), i.d(s, "b", (function() {
                return a
            }));
            var e = function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("AtomicPopup", {
                        on: {
                            close: t.backToWallets
                        }
                    }, [i("div", {
                        staticClass: "send-coin popup staking-hbar send-stake"
                    }, [t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : i("div", {
                        staticClass: "form"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendType) + " " + t._s(t.coin.name) + " (" + t._s(t.coin.ticker) + ")\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.calculator)) + "\n        ")]) : t._e()]), t._v(" "), i("EditAmount", {
                        staticClass: "last-child",
                        attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.amountError,
                            isFiat: !0,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            readonly: "",
                            showBalance: !0,
                            wallet: t.coin,
                            value: t.amount,
                            placeholder: "Amount"
                        },
                        on: {
                            input: t.changeAmount
                        }
                    }), t._v(" "), i("AvailableAndFeeAmounts", {
                        attrs: {
                            availableBalance: String(t.availableBalance),
                            feeBalance: t.fee.fee,
                            feeWallet: t.feeWallet,
                            isSendAll: !1,
                            sendType: t.sendType,
                            wallet: t.coin
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, ["Stake" === t.sendType ? i("div", {
                        staticClass: "network-fee flex-block"
                    }, [i("p", [t._v("\n              Yearly earning:\n            ")]), t._v(" "), i("p", {
                        staticClass: "text-white"
                    }, [t._v("\n              " + t._s(t.yearlyYield) + " " + t._s(t.coin.ticker) + " \n            ")]), t._v(" "), t.hasRate(t.coin) ? i("p", [t._v("\n              " + t._s(t._f("formatFinance")(t.getValueFiat(t.yearlyYield, t.coin))) + " " + t._s(t.fiatRate) + "\n            ")]) : t._e()]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "text"
                    }, [t.availableValidators.length > 0 && "Claim" !== t.sendType && ("Unstake" !== t.sendType || "HBAR" !== t.coin.ticker) ? i("div", {
                        staticClass: "stake-validator"
                    }, [t._v("\n            Validator: "), i("span", {
                        staticClass: "text-white validator-name",
                        on: {
                            click: function(s) {
                                s.stopPropagation(), t.isChangeValidator = !0
                            }
                        }
                    }, [t._v(t._s(t.stakingValidator.name) + " "), t.stakingValidator.reward ? i("span", {
                        staticClass: "text-white"
                    }, [t._v("- " + t._s(t.stakingValidator.reward) + "%"), i("span", {
                        staticClass: "ticker additional"
                    }, [t._v("\n              yearly yield\n            ")])]) : t._e()]), t._v(" "), t.isChangeValidator ? i("Dropdown", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.closeValidatorsDropdown,
                            expression: "closeValidatorsDropdown"
                        }],
                        attrs: {
                            elements: t.availableValidators,
                            showAdditional: !0
                        },
                        on: {
                            select: t.selectValidator
                        }
                    }) : t._e()], 1) : t._e()])]), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, ["Claim" !== t.sendType || t.isFeeEnough ? t._e() : i("div", {
                        staticClass: "error flex center justify-center"
                    }, [i("span", {
                        staticClass: "new-text-error"
                    }, [t._v("\n              Not enough " + t._s(t.coin.getUserTicker()) + " to claim rewards\n            ")]), t._v(" "), i("button", {
                        staticClass: "button button-buy",
                        on: {
                            click: t.buyCoin
                        }
                    }, [t._v("\n              Buy\n            ")])])]), t._v(" "), i("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, ["Claim" === t.sendType || t.isFeeEnough ? t._e() : i("div", {
                        staticClass: "error"
                    }, [i("span", {
                        staticClass: "new-text-error"
                    }, [t._v("\n              You should have at least " + t._s(t._f("formatFinance")(Number(Number(t.fee.fee).toFixed(6)))) + "\n            ")]), t._v(" " + t._s(t.coin.ticker) + " to send " + t._s(t.coin.ticker) + "\n            "), i("button", {
                        staticClass: "button button-buy",
                        on: {
                            click: t.buyCoin
                        }
                    }, [t._v("\n              Buy\n            ")])])]), t._v(" "), i("div", {
                        staticClass: "submit-wrapper m-t-10"
                    }, [i("button", {
                        staticClass: "button",
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n            " + t._s(t.sendType)), Number(t.amount) > 0 ? i("span", [t._v("\n              " + t._s(t._f("formatFinance")(t.amount)) + " " + t._s(t.coin.ticker) + "\n            ")]) : t._e()])])], 1)], 1), t._v(" "), t.isPasswordShow ? i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n          " + t._s(t.sendType) + " " + t._s(t._f("formatFinance")(t.amount)) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.stake)) + "\n        ")]) : t._e(), t._v(" "), "Unstake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.unstake)) + "\n        ")]) : t._e()]), t._v(" "), i("Edit", {
                        ref: "confirmPassword",
                        attrs: {
                            error: t.passwordError,
                            focus: !0,
                            isShowPassword: !0,
                            type: t.inputTypePassword,
                            placeholder: "Password"
                        },
                        on: {
                            "enter-pressed": t.sendCoins
                        },
                        model: {
                            value: t.password,
                            callback: function(s) {
                                t.password = s
                            },
                            expression: "password"
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("button", {
                        staticClass: "button normal hover-white",
                        on: {
                            click: t.backFromPassword
                        }
                    }, [t._v("\n          Back\n        ")]), t._v(" "), i("button", {
                        staticClass: "button",
                        on: {
                            click: t.sendCoins
                        }
                    }, [t._v("\n          Confirm\n        ")])])], 1) : t._e(), t._v(" "), t.sending ? i("div", {
                        staticClass: "sending"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendType) + " " + t._s(t.amount) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating)) + "\n        ")]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : i("SendCoinResult", {
                        attrs: {
                            amount: t.sendAmount,
                            coin: t.coin,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            sendType: t.sendType,
                            txid: t.txid,
                            contactData: {
                                issue: "Staking",
                                tags: ["staking_tag"]
                            },
                            mailTitle: "Sending error"
                        },
                        on: {
                            backToForm: t.backToForm,
                            backToWallets: t.backToWallets,
                            tryAgain: t.tryAgain
                        }
                    })], 1)])
                },
                a = []
        },
        1324: function(t, s, i) {
            "use strict";
            i.d(s, "a", (function() {
                return e
            })), i.d(s, "b", (function() {
                return a
            }));
            var e = function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("AtomicPopup", {
                        attrs: {
                            isShowClose: !t.sending
                        },
                        on: {
                            close: t.backToWallets
                        }
                    }, [i("div", {
                        staticClass: "send-coin popup send-stake"
                    }, ["Claim" === t.sendType ? [t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : i("div", {
                        staticClass: "form"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n            " + t._s(t.sendType) + " " + t._s(t.coin.name) + " (" + t._s(t.coin.ticker) + ")\n          ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n            " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.calculator)) + "\n          ")]) : t._e()]), t._v(" "), i("EditAmount", {
                        staticClass: "last-child",
                        attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.inputsError.amount,
                            isFiat: !0,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            readonly: !0,
                            showBalance: !0,
                            wallet: t.coin,
                            value: t.inputs.amount
                        },
                        on: {
                            input: t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), i("AvailableAndFeeAmounts", {
                        attrs: {
                            availableBalance: String(t.balanceToStake),
                            feeBalance: t.fee.fee,
                            feeWallet: t.feeWallet,
                            isSendAll: !1,
                            sendType: t.sendType,
                            wallet: t.coin
                        },
                        on: {
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, ["Stake" === t.sendType ? i("div", {
                        staticClass: "network-fee flex-block"
                    }, [i("p", [t._v("\n                Yearly earning:\n              ")]), t._v(" "), i("p", {
                        staticClass: "text-white"
                    }, [t._v("\n                " + t._s(t.yearlyYield) + " " + t._s(t.coin.ticker) + " \n              ")]), t._v(" "), t.hasRate(t.coin) ? i("p", [t._v("\n                " + t._s(t._f("formatFinance")(t.getValueFiat(t.yearlyYield, t.coin))) + " " + t._s(t.fiatRate) + "\n              ")]) : t._e()]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "text"
                    }, [t.availableValidators.length > 0 && "Claim" !== t.sendType ? i("div", {
                        staticClass: "stake-validator"
                    }, [t._v("\n              Validator: "), i("span", {
                        staticClass: "text-white validator-name",
                        on: {
                            click: function(s) {
                                s.stopPropagation(), t.isChangeValidator = !0
                            }
                        }
                    }, [t._v(t._s(t.stakingValidator.name) + " "), t.stakingValidator.reward ? i("span", {
                        staticClass: "text-white"
                    }, [t._v("- " + t._s(t.stakingValidator.reward) + "%"), i("span", {
                        staticClass: "ticker additional"
                    }, [t._v("\n                yearly yield\n              ")])]) : t._e()]), t._v(" "), t.isChangeValidator ? i("Dropdown", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.closeValidatorsDropdown,
                            expression: "closeValidatorsDropdown"
                        }],
                        attrs: {
                            elements: t.availableValidators,
                            showAdditional: !0
                        },
                        on: {
                            select: t.selectValidator
                        }
                    }) : t._e()], 1) : t._e()])]), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("div", {
                        staticClass: "submit-wrapper m-t-10"
                    }, [i("button", {
                        staticClass: "button",
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n              " + t._s(t.sendType)), Number(t.inputs.amount) > 0 ? i("span", [t._v("\n                " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n              ")]) : t._e()])])])], 1), t._v(" "), t.isPasswordShow ? i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n            " + t._s(t.sendType) + " " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n          ")])]), t._v(" "), i("Edit", {
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
                            callback: function(s) {
                                t.$set(t.inputs, "password", s)
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
                    }, [t._v("\n            Confirm\n          ")])])], 1) : t._e(), t._v(" "), t.sending ? i("div", {
                        staticClass: "sending"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n            Claiming " + t._s(t.inputs.amount) + " " + t._s(t.coin.ticker) + "\n          ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n            " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating)) + "\n          ")]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : i("SendCoinResult", {
                        attrs: {
                            amount: String(t.inputs.amount),
                            coin: t.coin,
                            errorMessage: t.errorMessage,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            sendType: t.sendType,
                            txid: t.txid,
                            contactData: {
                                issue: "Staking",
                                tags: ["staking_tag"]
                            },
                            mailTitle: "Sending error"
                        },
                        on: {
                            backToForm: t.backToForm,
                            backToWallets: t.backToWallets,
                            tryAgain: t.tryAgain
                        }
                    })] : [t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : i("div", {
                        staticClass: "form"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("div", [i("span", {
                        staticClass: "new-text-extra-large"
                    }, [t._v("\n              " + t._s(t.sendType) + " " + t._s(t.coin.name) + "\n            ")]), t._v(" "), i("span", {
                        staticClass: "new-text-extra-large new-text-gray"
                    }, [t._v("\n              (" + t._s(t.coin.ticker) + ")\n            ")])]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n            " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.calculator)) + "\n          ")]) : t._e()]), t._v(" "), i("EditAmount", {
                        staticClass: "last-child",
                        attrs: {
                            balance: t.balanceToStake,
                            decimals: t.coin.decimal,
                            error: t.inputsError.amount,
                            isBuyCoin: t.isBuyCoin,
                            isFiat: !0,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            readonly: !["Stake", "Unstake"].includes(t.sendType),
                            showBalance: !0,
                            wallet: t.coin,
                            value: String(t.inputs.amount),
                            placeholder: "Amount"
                        },
                        on: {
                            input: t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), i("AvailableAndFeeAmounts", {
                        attrs: {
                            availableBalance: String(t.availableBalance),
                            feeBalance: t.fee.fee,
                            feeWallet: t.feeWallet,
                            isSendAll: ["Stake", "Unstake"].includes(t.sendType),
                            isDisableAvailable: !1,
                            sendType: t.sendType,
                            wallet: t.coin
                        },
                        on: {
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), "Unstake" !== t.sendType ? i("div", {
                        staticClass: "text"
                    }, [t.availableValidators.length > 0 ? i("div", {
                        staticClass: "stake-validator"
                    }, [t._v("\n            Validator: "), i("span", {
                        staticClass: "text-white validator-name",
                        on: {
                            click: function(s) {
                                s.stopPropagation(), t.isChangeValidator = !0
                            }
                        }
                    }, [t._v(t._s(t.stakingValidator.name) + " "), "Stake" === t.sendType && t.stakingValidator.reward ? i("span", {
                        staticClass: "text-white"
                    }, [t._v("- " + t._s(t.stakingValidator.reward) + "%"), i("span", {
                        staticClass: "ticker additional"
                    }, [t._v("\n              yearly yield\n            ")])]) : t._e()]), t._v(" "), t.isChangeValidator ? i("Dropdown", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.closeValidatorsDropdown,
                            expression: "closeValidatorsDropdown"
                        }],
                        attrs: {
                            elements: t.availableValidators,
                            showAdditional: !0
                        },
                        on: {
                            select: t.selectValidator
                        }
                    }) : t._e()], 1) : t._e(), t._v(" "), i("transition", {
                        attrs: {
                            name: "collapse-fade"
                        }
                    }, ["Stake" === t.sendType && t.stakingValidator.reward && t.stakingProfit && Number(t.inputs.amount) > 0 ? i("div", {
                        staticClass: "network-fee flex-block"
                    }, [i("p", [t._v("\n                Yearly earning:\n              ")]), t._v(" "), i("p", {
                        staticClass: "text-white"
                    }, [t._v("\n                " + t._s(t.stakingProfit) + " " + t._s(t.coin.ticker) + " \n              ")]), t._v(" "), i("p", [t._v("\n                " + t._s(t._f("formatFinance")(t.getValueFiat(t.stakingProfit, t.coin))) + " " + t._s(t.fiatRate) + "\n              ")])]) : t._e()])], 1) : t._e(), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("div", {
                        staticClass: "submit-wrapper"
                    }, [t.initSend ? i("div", {
                        staticClass: "loader"
                    }) : i("button", {
                        staticClass: "button",
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n              " + t._s(t.sendType)), Number(t.inputs.amount) > 0 ? i("span", [t._v("\n                " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n              ")]) : t._e()])])])], 1), t._v(" "), t.isPasswordShow ? i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n            " + t._s(t.sendType) + " " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n          ")]), t._v(" "), "Claim" !== t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n            " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels["Vote" === t.sendType ? "delegating" : t.sendType.toLowerCase()])) + "\n          ")]) : t._e()]), t._v(" "), i("Edit", {
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
                            callback: function(s) {
                                t.$set(t.inputs, "password", s)
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
                    }, [t._v("\n            Confirm\n          ")])])], 1) : t._e(), t._v(" "), t.sending ? i("div", {
                        staticClass: "sending"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), i("p", [t._v("\n            " + t._s(t.sendType) + " " + t._s(t.inputs.amount) + " " + t._s(t.coin.ticker) + "\n          ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n            " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating)) + "\n          ")]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : i("SendCoinResult", {
                        attrs: {
                            amount: String(t.inputs.amount),
                            coin: t.coin,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            sendType: t.sendType,
                            txid: t.txid,
                            contactData: {
                                issue: "Staking",
                                tags: ["staking_tag"]
                            },
                            mailTitle: "Sending error"
                        },
                        on: {
                            backToForm: t.backToForm,
                            backToWallets: t.backToWallets,
                            tryAgain: t.tryAgain
                        }
                    })]], 2)])
                },
                a = []
        },
        5142: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(843),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1309),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5144: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(845),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1311),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5147: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(848),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1314),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5154: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(855),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1321),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5155: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(856),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1322),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5156: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(857),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1323),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5157: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(858),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1324),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        843: function(t, s, i) {
            "use strict";
            var e = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(i(61)),
                n = i(38),
                r = i(52),
                o = i(30),
                l = e(i(76)),
                d = e(i(168)),
                c = e(i(106)),
                u = e(i(92)),
                h = e(i(114));
            var p = {
                name: "SendStakeATOM",
                components: {
                    Dropdown: d.default,
                    Edit: l.default,
                    EditAmount: c.default,
                    SendCoinResult: u.default,
                    AvailableAndFeeAmounts: h.default
                },
                mixins: [o.CurrencyConverter, o.SettingsMixin, o.SendStakeMixin],
                props: {
                    sendType: {
                        type: String,
                        default: "Send"
                    }
                },
                data: () => ({
                    inputs: {
                        address: "",
                        custom: "",
                        amount: "",
                        password: ""
                    },
                    inputsError: {
                        address: "",
                        custom: "",
                        amount: "",
                        password: ""
                    },
                    fee: {
                        ticker: "",
                        fee: ""
                    },
                    customGas: [],
                    domainAddress: "",
                    inputTypePassword: "password",
                    isPasswordShow: !1,
                    initSend: !1,
                    sending: !1,
                    isFeeEnough: !0,
                    isUpdateCoin: !1,
                    isRate: !1,
                    isError: !1,
                    isSuccess: !1,
                    isChangeValidator: !1,
                    isOnSendAll: !1,
                    isSendAllClick: !1,
                    txid: null,
                    currencies: [],
                    selectedStakingValidator: "",
                    isBuyCoin: !1
                }),
                computed: {
                    availableValidators() {
                        if ("Send" === this.sendType) return [];
                        if ("Unstake" === this.sendType) {
                            const t = t => {
                                const s = this.coin.predefinedValidators.find(s => (null == s ? void 0 : s.name) === t || (null == s ? void 0 : s.address) === t);
                                return (null == s ? void 0 : s.name) || ""
                            };
                            return Object.entries(this.coin.getValidators()).reduce((s, i) => {
                                const {
                                    address: e
                                } = i[1] || {};
                                if (+this.coin.getStakedBalance(e).toCurrency() > 0) {
                                    const a = t(i[0]),
                                        n = i[0].substr(0, 4) + "..." + i[0].substr(-4);
                                    return s.concat({
                                        primary: a || n,
                                        additional: this.coin.getStakedBalance(e).toCurrency(!0),
                                        validatorName: a || i[0],
                                        validatorAddress: e
                                    })
                                }
                                return s
                            }, [])
                        }
                        return this.coin.predefinedValidators.map(({
                            name: t,
                            reward: s,
                            address: i
                        }) => ({
                            primary: t,
                            additional: s + "%",
                            validatorName: t,
                            validatorAddress: i,
                            validatorReward: s
                        })).filter(Boolean)
                    },
                    stakingValidator() {
                        if ("Send" === this.sendType) return;
                        const t = this.availableValidators.find(t => t.primary === this.selectedStakingValidator);
                        return !t && ["LUNA", "KAVA", "FET", "INJ"].some(t => t === this.coin.ticker) ? (0, r.randomElementFromArray)(this.availableValidators) : t || this.availableValidators[0] || {}
                    },
                    stakingProfit() {
                        if ("Send" === this.sendType) return;
                        return new a.default(this.stakingValidator.validatorReward || 0).dividedBy(100).multipliedBy(this.inputs.amount)
                    },
                    icon() {
                        return this.$iconClass(this.coin)
                    },
                    placeholderPaymentId() {
                        return this.getPlaceholderPaymentId(this.coin.ticker, this.coin.deprecatedParent)
                    },
                    availableBalance() {
                        if ("Unstake" === this.sendType) try {
                            var t;
                            const s = null === (t = this.coin.predefinedValidators.find(t => (null == t ? void 0 : t.name) === this.selectedStakingValidator)) || void 0 === t ? void 0 : t.address,
                                i = this.coin.getValidators(),
                                e = i[this.selectedStakingValidator] || i[s];
                            return this.coin.getStakedBalance(e.address).toCurrency()
                        } catch (t) {
                            return "0"
                        }
                        return this.coin.getAvailableBalance().toCurrency()
                    }
                },
                watch: {
                    "inputs.address"() {
                        this.domainAddress = "", this.isSuccess || this.isUpdateCoin || this.validateAddress()
                    },
                    "inputs.custom"() {
                        this.isSuccess || this.isUpdateCoin || this.validateCustom()
                    },
                    async "inputs.amount"() {
                        this.isSuccess || this.isUpdateCoin || ("LUNA" === this.coin.parent && await this.getFee(), this.validateAmount())
                    }
                },
                async mounted() {
                    this.setAmount(), await this.updateBalanceAndFee(), this.setStakingValidator(), this.setAmount(), this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    setStakingValidator() {
                        var t, s;
                        const i = this.stakingSettings.find(({
                                ticker: t
                            }) => this.coin.ticker === t).defaultValidator || "",
                            e = localStorage.getItem(`selected::${this.coin.ticker}::validator`) || i;
                        this.selectedStakingValidator = (null === (t = this.coin.predefinedValidators.find(({
                            address: t,
                            name: s
                        }) => t === e || s === e)) || void 0 === t ? void 0 : t.name) || (null === (s = this.coin.predefinedValidators[0]) || void 0 === s ? void 0 : s.name) || ""
                    },
                    setAmount() {
                        "Claim" === this.sendType && (this.inputs.amount = this.coin.getRewards().toCurrency()), "Stake" !== this.sendType && "Unstake" !== this.sendType || (this.inputs.amount = String(this.availableBalance || 0))
                    },
                    async updateBalanceAndFee() {
                        await this.coin.getInfo(), await this.getFee()
                    },
                    toggleCustomFee() {
                        this.$ga.event("User Actions", "Custom fee", {
                            clientID: this.$ga.customParams.uid
                        }), this.isRate = !this.isRate
                    },
                    setAllAvailableBalance() {
                        "Claim" !== this.sendType && (this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.inputs.amount = String(this.availableBalance) || "0")
                    },
                    setCustomGas(t) {
                        this.customGas = t
                    },
                    async changeFee(t) {
                        this.isOnSendAll && (this.inputs.amount = await this.coin.availableBalance(this.coin.toMinimalUnit(t))), this.fee.fee = t.toString(), this.availableForFee()
                    },
                    availableForFee() {
                        const {
                            divisibleBalance: t
                        } = this.coin;
                        this.isFeeEnough = Number(t) >= Number(this.fee.fee)
                    },
                    async getFee() {
                        if ("LUNA" === this.coin.parent) {
                            const t = await this.coin.getFee({
                                sendAmount: this.inputs.amount,
                                sendType: this.sendType
                            });
                            this.fee.fee = this.coin.toCurrencyUnit(t)
                        } else {
                            const t = await this.coin.getFee(0, !0);
                            this.fee.fee = this.coin instanceof n.Token ? this.parent.toCurrencyUnit(t) : this.coin.toCurrencyUnit(t)
                        }
                        this.fee.ticker = this.coin.deprecatedParent, this.availableForFee()
                    },
                    closeValidatorsDropdown() {
                        this.isChangeValidator = !1
                    },
                    selectValidator(t) {
                        if (this.selectedStakingValidator = t, "Unstake" === this.sendType) this.setAmount();
                        else {
                            this.coin.predefinedValidators.find(s => s.name === t) && localStorage.setItem(`selected::${this.coin.ticker}::validator`, t)
                        }
                        this.$bus.$emit(`select::${this.coin.ticker}::validator`, t), this.closeValidatorsDropdown()
                    },
                    async validateAddress() {
                        const t = this.$address(this.coin.deprecatedParent),
                            s = await this.coin.validateAddress(this.inputs.address);
                        return this.inputsError.address = "", "" === this.inputs.address ? this.inputsError.address = "Address can't be blank" : s ? ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT"].includes(this.coin.ticker) && t === this.inputs.address && (this.inputsError.address = "You can't send funds to your own address") : this.inputsError.address = "Please check the address", "string" == typeof s && (this.domainAddress = s), "" === this.inputsError.address
                    },
                    validateCustom() {
                        return this.inputsError.custom = "", "XMR" !== this.coin.getUserTicker() || /^([A-z0-9]{64})?$/.test(this.inputs.custom) ? ["EOS", "XLM", "KIN", "BNB", "XEM", "ATOM", "BAND", "OSMO"].includes(this.parent.getUserTicker()) || /^[0-9]*$/.test(this.inputs.custom) || (this.inputsError.custom = "Destination tag must be a number") : this.inputsError.custom = "Destination tag must be a 64 hexadecimal", ["BNB"].includes(this.parent.getUserTicker()) && this.inputs.custom.length > 64 && (this.inputsError.custom = "Maximum Memo length is 64 characters"), "" === this.inputsError.custom
                    },
                    async validateAmount() {
                        this.isBuyCoin = !1, this.inputsError.amount = "";
                        try {
                            "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : this.coin.balance && (/^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount) ? "Unstake" === this.sendType && Number(this.inputs.amount) > Number(this.availableBalance) ? this.inputsError.amount = "Amount exceeds available unstaking balance" : "Stake" === this.sendType && Number(this.inputs.amount) > Number(this.coin.getAvailableBalance().toCurrency()) ? (this.inputsError.amount = "Insufficient funds for staking", this.isBuyCoin = !0) : "Unstake" === this.sendType || await this.coin.isAvailableForSend("0", this.fee.fee) || (this.inputsError.amount = "Insufficient funds", this.isBuyCoin = !0) : this.inputsError.amount = "Enter correct amount")
                        } catch (t) {
                            return
                        }
                        return "" === this.inputsError.amount
                    },
                    validatePassword() {
                        return this.inputsError.password = "", "" === this.inputs.password ? this.inputsError.password = "Password can't be blank" : this.inputs.password !== this.$storage.password && (this.inputsError.password = "Wrong password"), "" === this.inputsError.password
                    },
                    async validateAll() {
                        let t = !1;
                        try {
                            this.validateCustom() || (t = !0), await this.validateAmount() || (t = !0)
                        } catch (s) {
                            this.inputsError.amount = "Block explorer is currently unavailable", t = !0
                        }
                        return t
                    },
                    changeAmount(t) {
                        this.isOnSendAll = !1, this.inputs.amount = t
                    },
                    async showPasswordForm() {
                        this.initSend = !0, !await this.validateAll() && this.isFeeEnough ? (this.isPasswordShow = !0, this.initSend = !1, setTimeout(() => {
                            this.$refs.confirmPassword.setFocus()
                        }, 300)) : this.initSend = !1
                    },
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            "Stake" === this.sendType && (this.inputs.address = this.stakingValidator.validatorAddress, this.inputs.custom = "atomicwallet"), "Unstake" === this.sendType && (this.inputs.address = this.stakingValidator.validatorAddress, this.inputs.custom = "atomicwallet"), this.isPasswordShow = !1, this.sending = !0;
                            let t = [this.domainAddress || this.inputs.address, this.coin.toMinimalUnit(this.inputs.amount), this.inputs.custom];
                            try {
                                let s;
                                if ("Stake" === this.sendType && (s = await this.coin.createDelegationTransaction(...t).catch(t => {
                                        console.log(t), this.$wallets.logger.error({
                                            type: "Send",
                                            error: t.toString(),
                                            url: "wallet.createDelegationTransaction",
                                            currency: this.coin.getUserTicker()
                                        }), this.isError = !0
                                    })), "Unstake" === this.sendType && (s = await this.coin.createUnbondingDelegationTransaction(...t).catch(t => {
                                        console.log(t), this.$wallets.logger.error({
                                            type: "Send",
                                            error: t.toString(),
                                            url: "wallet.createUnbondingDelegationTransaction",
                                            currency: this.coin.getUserTicker()
                                        }), this.isError = !0
                                    })), "Claim" === this.sendType) {
                                    const t = await this.coin.createWithdrawDelegationTransaction(),
                                        s = await this.coin.sendTransaction(t).catch(t => {
                                            console.log(t), this.$wallets.logger.error({
                                                type: "Claim",
                                                error: t.toString(),
                                                url: "wallet.sendTransaction",
                                                currency: this.coin.getUserTicker()
                                            }), this.isError = !0
                                        });
                                    this.txid = null == s ? void 0 : s.txid
                                } else {
                                    const t = await this.coin.sendTransaction(s).catch(t => {
                                        console.log(t), this.$wallets.logger.error({
                                            type: "Send",
                                            error: t.toString(),
                                            url: "wallet.sendTransaction",
                                            currency: this.coin.getUserTicker()
                                        }), this.isError = !0
                                    });
                                    this.txid = t.txid
                                }
                                this.isSuccess = !0, "Stake" === this.sendType && this.saveSuccessStaking(), this.$ga.event("Send Coin", "send tx succeed", {
                                    clientID: this.$ga.customParams.uid
                                })
                            } catch (t) {
                                this.$ga.event("Send Coin", "send tx failed", {
                                    clientID: this.$ga.customParams.uid
                                }), console.log(t), this.isError = !0
                            }
                            this.sending = !1
                        }
                    },
                    clearInputs() {
                        this.customGas = [], this.domainAddress = "", this.inputs.custom = "", this.inputs.password = "", this.inputsError.address = "", this.inputsError.custom = "", this.inputsError.amount = "", this.inputsError.password = "", this.isRate = !1, this.isOnSendAll = !1, this.inputs.amount = "", this.inputs.address = ""
                    },
                    backFromPassword() {
                        this.inputTypePassword = "password", this.inputs.password = "", this.isPasswordShow = !1
                    },
                    tryAgain() {
                        this.isError = !1, this.domainAddress = "", this.inputs.password = "", setTimeout(() => {
                            this.updateBalanceAndFee()
                        }, 100)
                    },
                    backToWallets() {
                        this.clearInputs(), this.$emit("closePopup")
                    },
                    backToForm() {
                        this.clearInputs(), setTimeout(() => {
                            this.isSuccess = !1, this.updateBalanceAndFee()
                        }, 100)
                    }
                }
            };
            s.default = p
        },
        845: function(t, s, i) {
            "use strict";
            var e = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(i(61)),
                n = i(30),
                r = e(i(76)),
                o = e(i(106)),
                l = e(i(92)),
                d = e(i(114));
            var c = {
                name: "SendStakeAWC",
                components: {
                    Edit: r.default,
                    EditAmount: o.default,
                    SendCoinResult: l.default,
                    AvailableAndFeeAmounts: d.default
                },
                mixins: [n.CurrencyConverter, n.SettingsMixin, n.SendStakeMixin],
                props: {
                    sendType: {
                        type: String,
                        default: "Stake"
                    }
                },
                data: () => ({
                    fee: {
                        ticker: "",
                        fee: ""
                    },
                    isFeeEnough: !0,
                    inputTypePassword: "password",
                    isPasswordShow: !1,
                    sending: !1,
                    isError: !1,
                    isSuccess: !1,
                    isOnSendAll: !1,
                    isSendAllClick: !1,
                    txid: null,
                    amount: "",
                    sendAmount: "",
                    amountError: "",
                    password: "",
                    passwordError: ""
                }),
                computed: {
                    yearlyYield() {
                        const t = new a.default(20).dividedBy(100).multipliedBy(this.amount);
                        return Number(t) || 0
                    },
                    staked() {
                        return this.coin.balances && this.coin.balances.frozen || 0
                    },
                    availableBalance() {
                        const t = this.coin.balances && this.coin.balances.available || 0;
                        return "Stake" === this.sendType ? t : this.staked
                    },
                    icon() {
                        return this.$iconClass(this.coin)
                    }
                },
                watch: {
                    async amount() {
                        this.isSuccess || (await this.validateAmount(), await this.validateFee())
                    }
                },
                async mounted() {
                    await this.updateBalanceAndFee(), this.amount = this.availableBalance, this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    setAllAvailableBalance() {
                        this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.amount = String(this.availableBalance) || "0"
                    },
                    async updateBalanceAndFee() {
                        await this.getFee()
                    },
                    async validateFee() {
                        const t = new this.parent.BN(this.parent.toMinimalUnit(this.fee.fee));
                        this.isFeeEnough = await this.coin.isAvailableForFee(t, this.parent.indivisibleBalance)
                    },
                    async getFee() {
                        const t = await this.parent.getFreezeFee();
                        this.fee.fee = this.parent.toCurrencyUnit(t), this.fee.ticker = this.parent.ticker, await this.validateFee()
                    },
                    validateAmount() {
                        this.amountError = "";
                        const t = "Stake" === this.sendType ? this.coin.balances.available : this.coin.balances.frozen,
                            s = Number(t) < Number(this.amount);
                        return "" === this.amount || 0 === Number(this.amount) ? this.amountError = "Amount can't be blank" : /^[0-9]+(\.[0-9]+)?$/.test(this.amount) ? "Stake" === this.sendType && s ? this.amountError = "Not enough for stake" : "Unstake" === this.sendType && s && (this.amountError = "Not enough for unstake") : this.amountError = "Enter correct amount", "" === this.amountError
                    },
                    validatePassword() {
                        return this.passwordError = "", "" === this.password ? this.passwordError = "Password can't be blank" : this.password !== this.$storage.password && (this.passwordError = "Wrong password"), "" === this.passwordError
                    },
                    changeAmount(t) {
                        this.isOnSendAll = !1, this.amount = t
                    },
                    showPasswordForm() {
                        this.validateAmount() && this.isFeeEnough && (this.isPasswordShow = !0)
                    },
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            this.isPasswordShow = !1, this.sending = !0;
                            const t = "Stake" === this.sendType ? "freezeTokenBalance" : "unfreezeTokenBalance",
                                s = await this.parent[t](this.coin.ticker, this.amount).catch(s => {
                                    console.log(s), this.$wallets.logger.error({
                                        type: "Send",
                                        error: s.toString(),
                                        url: "Staking AWC: " + t,
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                });
                            this.txid = s, this.sendAmount = this.amount, this.isError || (this.isSuccess = !0, "Stake" === this.sendType && this.saveSuccessStaking(this.sendAmount)), this.sending = !1
                        }
                    },
                    clearInputs() {
                        this.password = "", this.passwordError = "", this.amount = "", this.amountError = "", this.isOnSendAll = !1
                    },
                    backFromPassword() {
                        this.inputTypePassword = "password", this.password = "", this.isPasswordShow = !1
                    },
                    tryAgain() {
                        this.isError = !1, this.password = "", setTimeout(() => {
                            this.updateBalanceAndFee()
                        }, 100)
                    },
                    backToForm() {
                        this.clearInputs(), setTimeout(() => {
                            this.isSuccess = !1, this.updateBalanceAndFee()
                        }, 100)
                    }
                }
            };
            s.default = c
        },
        848: function(t, s, i) {
            "use strict";
            var e = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(i(61)),
                n = i(31),
                r = i(38),
                o = i(52),
                l = i(30),
                d = e(i(76)),
                c = e(i(168)),
                u = e(i(106)),
                h = e(i(92)),
                p = e(i(114));
            const m = "1";
            var v = {
                name: "SendStakeBNB",
                components: {
                    Dropdown: c.default,
                    Edit: d.default,
                    EditAmount: u.default,
                    SendCoinResult: h.default,
                    AvailableAndFeeAmounts: p.default
                },
                mixins: [l.CurrencyConverter, l.SettingsMixin, l.SendStakeMixin, l.BuyMixin],
                props: {
                    sendType: {
                        type: String,
                        default: "Send"
                    }
                },
                data: () => ({
                    inputs: {
                        address: "",
                        custom: "",
                        amount: "",
                        password: ""
                    },
                    inputsError: {
                        address: "",
                        custom: "",
                        amount: "",
                        password: ""
                    },
                    fee: {
                        ticker: "",
                        fee: ""
                    },
                    customGas: [],
                    domainAddress: "",
                    inputTypePassword: "password",
                    isPasswordShow: !1,
                    initSend: !1,
                    sending: !1,
                    isBuyCoin: !1,
                    isFeeEnough: !0,
                    isUnstakeAvailable: !0,
                    isUpdateCoin: !1,
                    isRate: !1,
                    isError: !1,
                    isSuccess: !1,
                    isChangeValidator: !1,
                    isOnSendAll: !1,
                    isSendAllClick: !1,
                    txid: null,
                    currencies: [],
                    selectedStakingValidator: null,
                    selectedAccountAddress: null,
                    minAmount: m,
                    amountResult: 0
                }),
                computed: {
                    ...(0, n.mapGetters)(["stakingSettings"]),
                    textedSendType() {
                        return "Withdrawal" === this.sendType ? "Withdraw" : this.sendType
                    },
                    availableValidators() {
                        if ("Unstake" === this.sendType) {
                            const t = this.coin.getValidators();
                            return Object.keys(t).map(s => {
                                const i = t[s];
                                if (Number(i.staked.toCurrency()) > 0) return s
                            }).filter(Boolean).map(s => ({
                                primary: t[s].name,
                                amount: t[s].staked.toCurrency(),
                                additional: t[s].staked.toCurrency(!0),
                                uniqueField: s
                            }))
                        }
                        return this.coin.predefinedValidators.map(({
                            name: t,
                            address: s,
                            reward: i
                        }) => ({
                            primary: t,
                            uniqueField: s,
                            additional: i + "%"
                        }))
                    },
                    stakingValidator() {
                        const t = this.coin.predefinedValidators.find(({
                            name: t
                        }) => t === this.selectedStakingValidator) || (0, o.randomElementFromArray)(this.coin.predefinedValidators);
                        if ("Stake" === this.sendType) return t;
                        if ("Unstake" === this.sendType) {
                            const s = this.coin.getValidators(),
                                i = Object.keys(s).find(t => t === this.selectedAccountAddress);
                            if (i) return {
                                address: i,
                                name: s[i].name,
                                accountAddress: i,
                                reward: t.reward,
                                staked: s[i].staked.toCurrency()
                            }
                        }
                        return t
                    },
                    stakingProfit() {
                        if ("Send" === this.sendType) return;
                        return new a.default(this.stakingValidator.reward).dividedBy(100).multipliedBy(this.inputs.amount)
                    },
                    icon() {
                        return `${this.$iconClass(this.coin)} icon-${this.coin.ticker.toLowerCase()}`
                    },
                    sendTypeVerb() {
                        return "Unstake" === this.sendType ? "Unstake" : "Withdrawal" === this.sendType ? "Withdrawing" : "Stake"
                    },
                    placeholderPaymentId() {
                        return this.getPlaceholderPaymentId(this.coin.ticker, this.coin.deprecatedParent)
                    },
                    availableBalance() {
                        if (["Unstake"].includes(this.sendType)) try {
                            return this.stakingValidator.staked
                        } catch (t) {
                            return "0"
                        }
                        return this.coin.getAvailableBalance().toCurrency()
                    },
                    defaultValidator() {
                        if ("Unstake" === this.sendType) return this.availableValidators.find(({
                            amount: t
                        }) => Number(t) > 0);
                        const t = this.selectedStakingValidator || this.stakingSettings.find(({
                                ticker: t
                            }) => this.coin.ticker === t).defaultValidator || this.stakingSettings[0].name || "",
                            s = ["Unstake"].includes(this.sendType) ? t : localStorage.getItem(`selected::${this.coin.ticker}::validator`);
                        return this.availableValidators.find(({
                            primary: t
                        }) => t === s) || (0, o.randomElementFromArray)(this.availableValidators)
                    }
                },
                watch: {
                    "inputs.address"() {
                        this.domainAddress = "", this.isSuccess || this.isUpdateCoin || this.validateAddress()
                    },
                    "inputs.custom"() {
                        this.isSuccess || this.isUpdateCoin || this.validateCustom()
                    },
                    "inputs.amount"() {
                        this.isSuccess || this.isUpdateCoin || this.validateAmount()
                    }
                },
                async beforeMount() {
                    this.selectValidator(this.defaultValidator)
                },
                async mounted() {
                    await this.updateBalanceAndFee(), this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    async updateBalanceAndFee() {
                        await this.coin.getInfo({
                            ignoreCache: !0
                        }), await this.getFee(), this.setAllAvailableBalance()
                    },
                    setAllAvailableBalance() {
                        "Unstake" !== this.sendType ? (this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.inputs.amount = String(this.availableBalance) || "0") : this.inputs.amount = this.stakingValidator.staked
                    },
                    async availableForFee() {
                        this.isFeeEnough = !0, this.coin instanceof r.Token && (this.isFeeEnough = await this.coin.isAvailableForFee()), this.isFeeEnough = Number(this.availableBalance) >= Number(this.fee.fee)
                    },
                    async getFee() {
                        const t = await this.coin.getFee();
                        this.fee.fee = "Stake" === this.sendType ? this.coin.toCurrencyUnit(t.mul(new this.coin.BN(2))) : this.coin.toCurrencyUnit(t), this.fee.ticker = this.coin.deprecatedParent, this.availableForFee()
                    },
                    closeValidatorsDropdown() {
                        this.isChangeValidator = !1
                    },
                    selectValidator(t) {
                        const s = "string" == typeof t ? t : t.name || t.primary,
                            i = "string" == typeof t ? void 0 : t.uniqueField;
                        this.selectedStakingValidator = s, this.selectedAccountAddress = i, this.isUnstakeAvailable = "Unstake" === this.sendType && this.checkIfUnstakeAvailable(), ["Unstake"].includes(this.sendType) && this.setAllAvailableBalance(), this.closeValidatorsDropdown()
                    },
                    async validateAddress() {
                        const t = this.$address(this.coin.deprecatedParent),
                            s = await this.coin.validateAddress(this.inputs.address);
                        return this.inputsError.address = "", "" === this.inputs.address ? this.inputsError.address = "Address can't be blank" : s ? ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT"].includes(this.coin.ticker) && t === this.inputs.address && (this.inputsError.address = "You can't send funds to your own address") : this.inputsError.address = "Please check the address", "string" == typeof s && (this.domainAddress = s), "" === this.inputsError.address
                    },
                    validateCustom() {
                        return this.inputsError.custom = "", "XMR" !== this.coin.getUserTicker() || /^([A-z0-9]{64})?$/.test(this.inputs.custom) ? ["EOS", "XLM", "KIN", "BNB", "XEM", "ATOM", "BAND"].includes(this.coin.deprecatedParent) || /^[0-9]*$/.test(this.inputs.custom) || (this.inputsError.custom = "Destination tag must be a number") : this.inputsError.custom = "Destination tag must be a 64 hexadecimal", ["BNB"].includes(this.coin.deprecatedParent) && this.inputs.custom.length > 64 && (this.inputsError.custom = "Maximum Memo length is 64 characters"), "" === this.inputsError.custom
                    },
                    async validateAmount() {
                        this.inputsError.amount = "", this.isBuyCoin = !1;
                        try {
                            "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : "Unstake" === this.sendType && this.checkUnstakeAmount() ? this.inputsError.amount = "Minimum amount for unstaking is 1 BNB" : "Unstake" === this.sendType && this.checkUnstakeHold() ? this.inputsError.amount = "Please unstake all BNB or leave at least 1 BNB staked" : /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount) ? "Stake" === this.sendType && Number(this.inputs.amount) < Number(this.minAmount) ? this.inputsError.amount = ((t = m) => `Minimum amount for staking is ${t} BNB`)(this.minAmount) : ["Stake"].includes(this.sendType) && Number(this.inputs.amount) > Number(this.availableBalance) ? (this.inputsError.amount = "Insufficient funds for staking", this.isBuyCoin = !0) : ["Unstake"].includes(this.sendType) && Number(this.inputs.amount) > Number(this.availableBalance) ? this.inputsError.amount = "The amount is too big. Please enter a smaller amount" : "Stake" !== this.sendType || await this.coin.isAvailableForSend("0", this.fee.fee) || (this.inputsError.amount = "Insufficient funds", this.isBuyCoin = !0) : this.inputsError.amount = "Enter correct amount"
                        } catch (t) {
                            return
                        }
                        return "" === this.inputsError.amount
                    },
                    checkUnstakeHold() {
                        const t = new a.default(this.inputs.amount),
                            s = new a.default(this.availableBalance).minus(t);
                        return !s.isNegative() && !s.eq(0) && s.lt(1)
                    },
                    checkUnstakeAmount() {
                        return new a.default(this.inputs.amount).lt(1)
                    },
                    validatePassword() {
                        return this.inputsError.password = "", "" === this.inputs.password ? this.inputsError.password = "Password can't be blank" : this.inputs.password !== this.$storage.password && (this.inputsError.password = "Wrong password"), "" === this.inputsError.password
                    },
                    async validateAll() {
                        let t = !1;
                        try {
                            this.validateCustom() || (t = !0), await this.validateAmount() || (t = !0)
                        } catch (s) {
                            this.inputsError.amount = "Block explorer is currently unavailable", t = !0
                        }
                        return t
                    },
                    changeAmount(t) {
                        this.isOnSendAll = !1, this.inputs.amount = t
                    },
                    getValueFiat(t, {
                        id: s
                    }, i = !1) {
                        if (!t) return 0;
                        const e = this.$rates.data[s];
                        if (!e) return 0;
                        const n = new a.default(t).multipliedBy(e[this.fiatRate] && e[this.fiatRate].rate || 0).toFixed(8);
                        return "BTC" === this.fiatRate ? n : n > 1 ? parseFloat(this.roundFiat(n)).toFixed(2) : n < 1e-6 ? n : i ? parseFloat(this.roundFiat(n)).toFixed(4) : this.roundFiat(n)
                    },
                    async showPasswordForm() {
                        this.initSend = !0, !await this.validateAll() && this.isFeeEnough ? (this.isPasswordShow = !0, this.initSend = !1, setTimeout(() => {
                            this.$refs.confirmPassword.setFocus()
                        }, 300)) : this.initSend = !1
                    },
                    checkIfUnstakeAvailable() {
                        var t;
                        return null === (t = this.coin.getValidators()[this.selectedAccountAddress]) || void 0 === t ? void 0 : t.isUnstakeAvailable
                    },
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            "Stake" === this.sendType && (this.inputs.address = this.stakingValidator.address, this.inputs.custom = "atomicwallet"), "Unstake" === this.sendType && (this.inputs.address = this.stakingValidator.accountAddress, this.inputs.custom = "atomicwallet"), "Withdrawal" === this.sendType && (this.inputs.address = this.stakingValidator.accountAddress), this.isPasswordShow = !1, this.sending = !0;
                            let s = {
                                toValidator: this.domainAddress || this.inputs.address,
                                account: this.coin.address,
                                amount: this.inputs.amount,
                                memo: this.inputs.custom
                            };
                            this.amountResult = this.inputs.amount;
                            try {
                                var t;
                                let i, e = {};
                                "Stake" === this.sendType && (i = await this.coin.createDelegationTransaction(s)), "Unstake" === this.sendType && (i = await this.coin.createUnDelegationTransaction(s)), e = "Unstake" === this.sendType ? await this.coin.sendUnDelegationTransaction(i).catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
                                        error: t.toString(),
                                        url: "wallet.sendTransaction",
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                }) : await this.coin.sendDelegationTransaction(i).catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
                                        error: t.toString(),
                                        url: "wallet.sendTransaction",
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                }), this.isError || (this.isSuccess = !0), this.txid = null === (t = e) || void 0 === t ? void 0 : t.txid, "Stake" === this.sendType && this.saveSuccessStaking(), this.$ga.event("Send Coin", "send tx succeed", {
                                    clientID: this.$ga.customParams.uid
                                })
                            } catch (t) {
                                this.$ga.event("Send Coin", "send tx failed", {
                                    clientID: this.$ga.customParams.uid
                                }), console.log(t), this.isError = !0
                            }
                            this.sending = !1, this.isSuccess && setTimeout(() => {
                                this.updateBalanceAndFee()
                            }, 100)
                        }
                    },
                    clearInputs() {
                        this.customGas = [], this.domainAddress = "", this.inputs.custom = "", this.inputs.password = "", this.inputsError.address = "", this.inputsError.custom = "", this.inputsError.amount = "", this.inputsError.password = "", this.isRate = !1, this.isOnSendAll = !1, this.inputs.amount = "", this.inputs.address = ""
                    },
                    backFromPassword() {
                        this.inputTypePassword = "password", this.inputs.password = "", this.isPasswordShow = !1
                    },
                    tryAgain() {
                        this.isError = !1, this.domainAddress = "", this.inputs.password = "", setTimeout(() => {
                            this.updateBalanceAndFee()
                        }, 100)
                    },
                    backToForm() {
                        this.clearInputs(), setTimeout(() => {
                            this.isSuccess = !1, this.updateBalanceAndFee()
                        }, 100)
                    }
                }
            };
            s.default = v
        },
        855: function(t, s, i) {
            "use strict";
            var e = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = i(31),
                n = i(38),
                r = i(30),
                o = e(i(76)),
                l = e(i(106)),
                d = e(i(92)),
                c = e(i(114));
            var u = {
                name: "SendStakeETH",
                components: {
                    Edit: o.default,
                    EditAmount: l.default,
                    SendCoinResult: d.default,
                    AvailableAndFeeAmounts: c.default
                },
                mixins: [r.CurrencyConverter, r.SettingsMixin, r.SendStakeMixin, r.BuyMixin, r.FeeMixin],
                props: {
                    sendType: {
                        type: String,
                        default: "Send"
                    }
                },
                data: () => ({
                    inputs: {
                        amount: "",
                        password: ""
                    },
                    inputsError: {
                        amount: "",
                        password: ""
                    },
                    fee: {
                        ticker: "",
                        fee: ""
                    },
                    inputTypePassword: "password",
                    isPasswordShow: !1,
                    initSend: !1,
                    sending: !1,
                    isFeeEnough: !0,
                    isUpdateCoin: !1,
                    isError: !1,
                    isSuccess: !1,
                    isOnSendAll: !1,
                    isSendAllClick: !1,
                    txid: null,
                    sendAmount: ""
                }),
                computed: {
                    ...(0, a.mapGetters)(["stakingSettings"]),
                    icon() {
                        return `${this.$iconClass(this.coin)} icon-${this.coin.ticker.toLowerCase()}`
                    },
                    sendTypeVerb: () => "Stake",
                    availableBalance() {
                        return this.coin.getAvailableBalance().toCurrency()
                    },
                    stETH() {
                        return this.$wallets.findWalletV2({
                            ticker: "stETH",
                            parentTicker: this.coin.ticker
                        })
                    }
                },
                watch: {
                    "inputs.amount"() {
                        this.isSuccess || this.isUpdateCoin || this.validateAmount()
                    }
                },
                async mounted() {
                    await this.updateBalanceAndFee(), this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    async updateBalanceAndFee() {
                        await this.coin.getInfo({
                            ignoreCache: !0
                        }), await this.getFee(), this.setAllAvailableBalance()
                    },
                    async getFee() {
                        const t = await this.coin.getFee({
                            gasLimit: this.coin.stakingGasLimit
                        });
                        this.setFee(this.coin.toCurrencyUnit(t)), this.fee.ticker = this.feeTicker
                    },
                    setAllAvailableBalance() {
                        this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.inputs.amount = String(this.availableBalance) || "0"
                    },
                    async availableForFee() {
                        this.isFeeEnough = !0, this.coin instanceof n.Token && (this.isFeeEnough = await this.coin.isAvailableForFee()), this.isFeeEnough = Number(this.availableBalance) >= Number(this.fee.fee)
                    },
                    async validateAmount() {
                        this.inputsError.amount = "";
                        try {
                            "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount) ? "Stake" === this.sendType && Number(this.inputs.amount) > Number(this.availableBalance) ? this.inputsError.amount = "Insufficient funds for staking" : "Stake" !== this.sendType || await this.coin.isAvailableForSend("0", this.fee.fee) || (this.inputsError.amount = "Insufficient funds") : this.inputsError.amount = "Enter correct amount"
                        } catch (t) {
                            return !1
                        }
                        return "" === this.inputsError.amount
                    },
                    validatePassword() {
                        return this.inputsError.password = "", "" === this.inputs.password ? this.inputsError.password = "Password can't be blank" : this.inputs.password !== this.$storage.password && (this.inputsError.password = "Wrong password"), "" === this.inputsError.password
                    },
                    async validateAll() {
                        let t = !1;
                        const s = !await this.validateAmount();
                        try {
                            s && (t = !0)
                        } catch (s) {
                            this.inputsError.amount = "Block explorer is currently unavailable", t = !0
                        }
                        return t
                    },
                    changeAmount(t) {
                        this.isOnSendAll = !1, this.inputs.amount = t
                    },
                    async showPasswordForm() {
                        this.initSend = !0;
                        !await this.validateAll() && this.isFeeEnough ? (this.isPasswordShow = !0, this.initSend = !1, setTimeout(() => {
                            this.$refs.confirmPassword.setFocus()
                        }, 100)) : this.initSend = !1
                    },
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            this.isPasswordShow = !1, this.sending = !0, this.sendAmount = this.inputs.amount;
                            try {
                                const t = {
                                        amount: this.coin.toMinimalUnit(this.inputs.amount),
                                        address: this.stETH.contract,
                                        gasLimit: this.coin.stakingGasLimit
                                    },
                                    s = await this.coin.createDelegationTransaction(t).catch(t => {
                                        this.$wallets.logger.error({
                                            type: "Stake",
                                            error: t.toString(),
                                            url: "wallet.createDelegationTransaction",
                                            currency: this.coin.getUserTicker()
                                        }), this.isError = !0
                                    }),
                                    i = await this.coin.sendTransaction(s).catch(t => {
                                        this.$wallets.logger.error({
                                            type: "Stake",
                                            error: t.toString(),
                                            url: "wallet.sendTransaction",
                                            currency: this.coin.getUserTicker()
                                        }), this.isError = !0
                                    });
                                this.txid = i.txid, this.isSuccess = !0, "Stake" === this.sendType && this.saveSuccessStaking(), this.$ga.event("Send Coin", "send tx succeed", {
                                    clientID: this.$ga.customParams.uid
                                })
                            } catch (t) {
                                this.$ga.event("Send Coin", "send tx failed", {
                                    clientID: this.$ga.customParams.uid
                                }), console.log(t), this.isError = !0
                            }
                            this.sending = !1, this.isSuccess && setTimeout(() => {
                                this.updateBalanceAndFee()
                            }, 100)
                        }
                    },
                    clearInputs() {
                        this.domainAddress = "", this.inputs.custom = "", this.inputs.password = "", this.inputsError.address = "", this.inputsError.custom = "", this.inputsError.amount = "", this.inputsError.password = "", this.isOnSendAll = !1, this.inputs.amount = "", this.inputs.address = ""
                    },
                    backFromPassword() {
                        this.inputTypePassword = "password", this.inputs.password = "", this.isPasswordShow = !1
                    },
                    tryAgain() {
                        this.isError = !1, this.inputs.password = "", setTimeout(() => {
                            this.updateBalanceAndFee()
                        }, 100)
                    },
                    backToForm() {
                        this.clearInputs(), setTimeout(() => {
                            this.isSuccess = !1, this.updateBalanceAndFee()
                        }, 100)
                    }
                }
            };
            s.default = u
        },
        856: function(t, s, i) {
            "use strict";
            var e = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(i(61)),
                n = i(31),
                r = i(38),
                o = i(30),
                l = e(i(76)),
                d = e(i(168)),
                c = e(i(106)),
                u = e(i(92)),
                h = e(i(114)),
                p = i(52);
            const m = "1";
            var v = {
                name: "SendStakeEGLD",
                components: {
                    Dropdown: d.default,
                    Edit: l.default,
                    EditAmount: c.default,
                    SendCoinResult: u.default,
                    AvailableAndFeeAmounts: h.default
                },
                mixins: [o.CurrencyConverter, o.SettingsMixin, o.SendStakeMixin, o.BuyMixin],
                props: {
                    sendType: {
                        type: String,
                        default: "Send"
                    }
                },
                data: () => ({
                    inputs: {
                        address: "",
                        custom: "",
                        amount: "",
                        password: ""
                    },
                    inputsError: {
                        address: "",
                        custom: "",
                        amount: "",
                        password: ""
                    },
                    fee: {
                        ticker: "",
                        fee: ""
                    },
                    domainAddress: "",
                    inputTypePassword: "password",
                    isPasswordShow: !1,
                    initSend: !1,
                    sending: !1,
                    isFeeEnough: !0,
                    isBuffered: !1,
                    isUpdateCoin: !1,
                    isRate: !1,
                    isError: !1,
                    isSuccess: !1,
                    isChangeValidator: !1,
                    isOnSendAll: !1,
                    isSendAllClick: !1,
                    txid: null,
                    currencies: [],
                    selectedStakingValidator: null,
                    isBuyCoin: !1,
                    minAmount: m
                }),
                computed: {
                    ...(0, n.mapGetters)(["stakingSettings"]),
                    sendText() {
                        return "Withdrawal" === this.sendType ? "Withdraw" : this.sendType
                    },
                    availableValidators() {
                        if ("Send" === this.sendType) return;
                        const t = t => {
                            const s = this.getPredefinedValidator(t),
                                i = this.getPredefinedValidator(t);
                            return s && s.name || i && i.name
                        };
                        if ("Unstake" === this.sendType) {
                            return Object.entries(this.coin.getValidators()).filter(s => t(s[0])).map(s => {
                                if (!(Number(s[1].staked.toCurrency()) <= 0)) return {
                                    primary: t(s[0]),
                                    additional: `${this.numberToFixed(s[1].staked.toCurrency(),4)} ${this.coin.ticker}`
                                }
                            }).filter(Boolean)
                        }
                        if ("Withdrawal" === this.sendType) {
                            return Object.entries(this.coin.getValidators()).filter(s => t(s[0])).map(s => {
                                if (!(Number(s[1].availableWithdrawals.toCurrency()) <= 0)) return {
                                    primary: t(s[0]),
                                    additional: `${this.numberToFixed(s[1].availableWithdrawals.toCurrency(),4)} ${this.coin.ticker}`
                                }
                            }).filter(Boolean)
                        }
                        if ("Claim" === this.sendType) {
                            return Object.entries(this.coin.getValidators()).filter(s => t(s[0])).map(s => {
                                if (!(Number(s[1].rewards.toCurrency()) <= 0)) return {
                                    primary: t(s[0]),
                                    additional: `${this.numberToFixed(s[1].rewards.toCurrency(),4)} ${this.coin.ticker}`
                                }
                            }).filter(Boolean)
                        }
                        return this.coin.predefinedValidators.map(({
                            name: t,
                            reward: s
                        }) => ({
                            primary: t,
                            additional: s + "%"
                        })).filter(Boolean)
                    },
                    stakingValidator() {
                        if ("Send" === this.sendType) return;
                        const t = this.selectedStakingValidator || this.defaultValidator ? this.getPredefinedValidator(this.selectedStakingValidator || this.defaultValidator) : (0, p.randomElementFromArray)(this.coin.predefinedValidators),
                            s = this.coin.getValidators(),
                            i = Object.keys(s).find(s => s === (t && t.address));
                        return t || {
                            address: s[i].address,
                            name: i
                        }
                    },
                    stakingProfit() {
                        if ("Send" === this.sendType) return;
                        return new a.default(this.stakingValidator.reward).dividedBy(100).multipliedBy(this.inputs.amount)
                    },
                    icon() {
                        return `${this.$iconClass(this.coin)} icon-${this.coin.ticker.toLowerCase()}`
                    },
                    sendTypeVerb() {
                        var t, s;
                        return {
                            unstake: "Unstake",
                            claim: "Claiming",
                            withdrawal: "Withdrawing"
                        } [null === (t = this.sendType) || void 0 === t || null === (s = t.toLowerCase) || void 0 === s ? void 0 : s.call(t)] || "Stake"
                    },
                    placeholderPaymentId() {
                        return this.getPlaceholderPaymentId(this.coin.ticker, this.coin.deprecatedParent)
                    },
                    defaultValidator() {
                        return (0, p.randomElementFromArray)(this.availableValidators).primary
                    },
                    availableBalance() {
                        if (!this.coin || !this.coin.balances) return "0";
                        const t = this.getPredefinedValidator(this.selectedStakingValidator || this.defaultValidator).address;
                        if ("Unstake" === this.sendType) try {
                            const s = this.coin.getValidators();
                            return s[t].staked.toCurrency()
                        } catch (t) {
                            return "0"
                        }
                        if ("Withdrawal" === this.sendType) try {
                            const s = this.coin.getValidators();
                            return s[t].availableWithdrawals.toCurrency()
                        } catch (t) {
                            return "0"
                        }
                        return this.coin.getAvailableBalance().toCurrency()
                    },
                    availableWithdrawal() {
                        return this.coin.getAvailableWithdrawals().toCurrency()
                    }
                },
                watch: {
                    "inputs.address"() {
                        this.domainAddress = "", this.isSuccess || this.isUpdateCoin || this.validateAddress()
                    },
                    "inputs.custom"() {
                        this.isSuccess || this.isUpdateCoin || this.validateCustom()
                    },
                    "inputs.amount"() {
                        this.isSuccess || this.isUpdateCoin || this.validateAmount()
                    },
                    selectedStakingValidator() {
                        "Claim" === this.sendType && this.setAllAvailableBalance()
                    }
                },
                async mounted() {
                    await this.getFee(), this.setAllAvailableBalance(), this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    setAllAvailableBalance() {
                        this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, "Claim" === this.sendType ? this.inputs.amount = this.coin.getValidators()[this.stakingValidator.address].rewards.toCurrency() : this.inputs.amount = String(this.availableBalance) || "0"
                    },
                    getPredefinedValidator(t) {
                        return this.coin.predefinedValidators.find(s => s.name === t || s.address === t)
                    },
                    async availableForFee() {
                        this.isFeeEnough = !0, this.coin instanceof r.Token && (this.isFeeEnough = await this.coin.isAvailableForFee());
                        const t = this.coin.getAvailableBalance().toCurrency();
                        this.isFeeEnough = Number(t) >= Number(this.fee.fee)
                    },
                    async getFee() {
                        const t = await this.coin.getFee({
                            gasLimit: this.coin.stakingGasLimit
                        });
                        this.fee.fee = this.coin.toCurrencyUnit(t), this.fee.ticker = this.feeTicker(), this.availableForFee()
                    },
                    closeValidatorsDropdown() {
                        this.isChangeValidator = !1
                    },
                    selectValidator(t) {
                        this.getPredefinedValidator(t) && "Stake" === this.sendType && localStorage.setItem(`selected::${this.coin.ticker}::validator`, t), this.selectedStakingValidator = t, this.$bus.$emit(`select::${this.coin.ticker}::validator`, t), this.closeValidatorsDropdown(), ["Unstake", "Withdrawal"].includes(this.sendType) && (this.inputs.amount = String(this.availableBalance || 0))
                    },
                    async validateAddress() {
                        const t = this.$address(this.coin.deprecatedParent),
                            s = await this.coin.validateAddress(this.inputs.address);
                        return this.inputsError.address = "", "" === this.inputs.address ? this.inputsError.address = "Address can't be blank" : s ? ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT"].includes(this.coin.ticker) && t === this.inputs.address && (this.inputsError.address = "You can't send funds to your own address") : this.inputsError.address = "Please check the address", "string" == typeof s && (this.domainAddress = s), "" === this.inputsError.address
                    },
                    validateCustom() {
                        return this.inputsError.custom = "", "XMR" !== this.coin.getUserTicker() || /^([A-z0-9]{64})?$/.test(this.inputs.custom) ? ["EOS", "XLM", "KIN", "BNB", "XEM", "ATOM", "BAND"].includes(this.parent.getUserTicker()) || /^[0-9]*$/.test(this.inputs.custom) || (this.inputsError.custom = "Destination tag must be a number") : this.inputsError.custom = "Destination tag must be a 64 hexadecimal", ["BNB"].includes(this.parent.getUserTicker()) && this.inputs.custom.length > 64 && (this.inputsError.custom = "Maximum Memo length is 64 characters"), "" === this.inputsError.custom
                    },
                    async validateAmount() {
                        this.inputsError.amount = "", this.isBuyCoin = !1;
                        try {
                            "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : "Unstake" === this.sendType && this.checkUnstakeAmount() ? this.inputsError.amount = "Minimum amount for unstaking is 1 EGLD" : "Unstake" === this.sendType && this.checkUnstakeHold() ? this.inputsError.amount = "Please unstake all or leave at least 1 EGLD staked" : /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount) ? "Stake" === this.sendType && Number(this.inputs.amount) < Number(this.minAmount) ? this.inputsError.amount = ((t = m) => `Minimum amount for staking is ${t} EGLD`)(this.minAmount) : ["Stake"].includes(this.sendType) && Number(this.inputs.amount) > Number(this.availableBalance) ? (this.inputsError.amount = "Insufficient funds", this.isBuyCoin = !0) : ["Unstake"].includes(this.sendType) && Number(this.inputs.amount) > Number(this.availableBalance) ? this.inputsError.amount = "The amount is too big. Please enter a smaller amount" : "Stake" !== this.sendType || await this.coin.isAvailableForSend("0", this.fee.fee) || (this.inputsError.amount = "Insufficient funds", this.isBuyCoin = !0) : this.inputsError.amount = "Enter correct amount"
                        } catch (t) {
                            return
                        }
                        return "" === this.inputsError.amount
                    },
                    validatePassword() {
                        return this.inputsError.password = "", "" === this.inputs.password ? this.inputsError.password = "Password can't be blank" : this.inputs.password !== this.$storage.password && (this.inputsError.password = "Wrong password"), "" === this.inputsError.password
                    },
                    async validateAll() {
                        let t = !1;
                        try {
                            this.validateCustom() || (t = !0), await this.validateAmount() || (t = !0)
                        } catch (s) {
                            this.inputsError.amount = "Block explorer is currently unavailable", t = !0
                        }
                        return t
                    },
                    feeTicker() {
                        return this.coin.deprecatedParent
                    },
                    changeAmount(t) {
                        this.isOnSendAll = !1, this.inputs.amount = t
                    },
                    getValueFiat(t, {
                        id: s
                    }, i = !1) {
                        if (!t) return 0;
                        const e = this.$rates.data[s];
                        if (!e) return 0;
                        const n = new a.default(t).multipliedBy(e[this.fiatRate] && e[this.fiatRate].rate || 0).toFixed(8);
                        return "BTC" === this.fiatRate ? n : n > 1 ? parseFloat(this.roundFiat(n)).toFixed(2) : n < 1e-6 ? n : i ? parseFloat(this.roundFiat(n)).toFixed(4) : this.roundFiat(n)
                    },
                    async showPasswordForm() {
                        this.initSend = !0, await this.validateAll() || !this.isFeeEnough || this.isBuffered ? this.initSend = !1 : (this.isPasswordShow = !0, this.initSend = !1, setTimeout(() => {
                            this.$refs.confirmPassword.setFocus()
                        }, 300))
                    },
                    sendErrorLogs(t, s) {
                        console.log(t, s), this.$wallets.logger.error({
                            type: "Send",
                            error: t.toString(),
                            url: "wallet." + s,
                            currency: this.coin.getUserTicker()
                        }), this.isError = !0
                    },
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            this.inputs.address = this.stakingValidator.address, this.inputs.custom = "atomicwallet", this.isPasswordShow = !1, this.sending = !0;
                            const t = {
                                validator: this.domainAddress || this.inputs.address,
                                amount: this.coin.toMinimalUnit(this.inputs.amount)
                            };
                            try {
                                let s;
                                "Stake" === this.sendType && (s = await this.coin.createDelegationTransaction(t).catch(t => this.sendErrorLogs(t, "createDelegationTransaction"))), "Unstake" === this.sendType && (s = await this.coin.createUnDelegationTransaction(t).catch(t => this.sendErrorLogs(t, "createUnDelegationTransaction"))), "Withdrawal" === this.sendType && (s = await this.coin.createWithdrawTransaction(t).catch(t => this.sendErrorLogs(t, "createWithdrawDelegationTransaction"))), "Claim" === this.sendType && (s = await this.coin.createClaimTransaction(t).catch(t => this.sendErrorLogs(t, "createWithdrawDelegationTransaction")));
                                const i = await this.coin.sendTransaction(s).catch(t => this.sendErrorLogs(t, "sendTransaction"));
                                this.txid = i.txid, this.isSuccess = !0, "Stake" === this.sendType && this.saveSuccessStaking(), this.$ga.event("Send Coin", "send tx succeed", {
                                    clientID: this.$ga.customParams.uid
                                })
                            } catch (t) {
                                this.$ga.event("Send Coin", "send tx failed", {
                                    clientID: this.$ga.customParams.uid
                                }), console.log(t), this.isError = !0
                            }
                            this.$bus.$emit("get-near-balances"), this.sending = !1
                        }
                    },
                    clearInputs() {
                        this.domainAddress = "", this.inputs.custom = "", this.inputs.password = "", this.inputsError.address = "", this.inputsError.custom = "", this.inputsError.amount = "", this.inputsError.password = "", this.isRate = !1, this.isOnSendAll = !1, this.inputs.amount = "", this.inputs.address = ""
                    },
                    backFromPassword() {
                        this.inputTypePassword = "password", this.inputs.password = "", this.isPasswordShow = !1
                    },
                    tryAgain() {
                        this.isError = !1, this.domainAddress = "", this.inputs.password = "", setTimeout(() => {
                            this.getFee()
                        }, 100)
                    },
                    backToForm() {
                        this.clearInputs(), setTimeout(() => {
                            this.isSuccess = !1, this.getFee()
                        }, 100)
                    },
                    checkUnstakeAmount() {
                        return new a.default(this.inputs.amount).lt(1)
                    },
                    checkUnstakeHold() {
                        const t = new a.default(this.inputs.amount),
                            s = new a.default(this.availableBalance).minus(t);
                        return !s.isNegative() && !s.eq(0) && s.lt(1)
                    }
                }
            };
            s.default = v
        },
        857: function(t, s, i) {
            "use strict";
            var e = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(i(61)),
                n = i(52),
                r = i(30),
                o = e(i(76)),
                l = e(i(168)),
                d = e(i(106)),
                c = e(i(92)),
                u = e(i(114));
            var h = {
                name: "SendStakeHBAR",
                components: {
                    Edit: o.default,
                    EditAmount: d.default,
                    SendCoinResult: c.default,
                    Dropdown: l.default,
                    AvailableAndFeeAmounts: u.default
                },
                mixins: [r.CurrencyConverter, r.SettingsMixin, r.SendStakeMixin, r.BuyMixin],
                props: {
                    sendType: {
                        type: String,
                        default: "Stake"
                    }
                },
                data: () => ({
                    fee: {
                        ticker: "",
                        fee: ""
                    },
                    isFeeEnough: !0,
                    inputTypePassword: "password",
                    isPasswordShow: !1,
                    sending: !1,
                    isError: !1,
                    isSuccess: !1,
                    isOnSendAll: !1,
                    txid: null,
                    amount: "",
                    sendAmount: "",
                    amountError: "",
                    password: "",
                    passwordError: "",
                    isChangeValidator: !1,
                    selectedValidator: ""
                }),
                computed: {
                    yearlyYield() {
                        const t = new a.default(20).dividedBy(100).multipliedBy(this.amount);
                        return Number(t) || 0
                    },
                    staked() {
                        return this.coin.getStakedBalance()
                    },
                    availableBalance() {
                        return "Claim" === this.sendType ? this.coin.getRewards().toCurrency() : "Stake" === this.sendType ? this.coin.getAvailableBalance().toCurrency() : this.coin.getAvailableForUnstakeBalance().toCurrency()
                    },
                    icon() {
                        return `${this.$iconClass(this.coin.ticker)} icon-${this.coin.ticker.toLowerCase()}`
                    },
                    availableValidators() {
                        return this.staking.validators.map(({
                            name: t,
                            reward: s
                        }) => ({
                            primary: t,
                            additional: s + "%"
                        }))
                    },
                    stakingValidator() {
                        return this.selectedValidator ? this.staking.getValidator(this.selectedValidator) : this.staking.validators[0]
                    },
                    staking() {
                        return this.$staking.getStakingInterface(this.coin.ticker)
                    },
                    stakingSettings() {
                        return this.$store.state.Settings.stakingSettings.find(t => t.ticker === this.coin.ticker)
                    }
                },
                watch: {
                    async amount() {
                        this.isSuccess || (await this.validateAmount(), await this.validateFee())
                    }
                },
                async mounted() {
                    await this.updateBalanceAndFee(), this.amount = "Claim" === this.sendType ? this.coin.getRewards().toCurrency() || 0 : this.availableBalance, this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                created() {
                    try {
                        const t = [],
                            s = this.staking.validators,
                            i = this.availableValidators.find(t => t.primary === (this.stakingSettings && this.stakingSettings.defaultValidator)) || (0, n.randomElementFromArray)(this.availableValidators);
                        this.selectedValidator = i ? i.primary : s[0].name || t[0]
                    } catch (t) {
                        console.log("SendStakeHBAR: created hook failed"), console.error(t)
                    }
                },
                methods: {
                    async updateBalanceAndFee() {
                        await this.getFee()
                    },
                    async validateFee() {
                        const t = new this.coin.BN(this.coin.toMinimalUnit(this.fee.fee));
                        this.isFeeEnough = t.lt(this.coin.indivisibleBalance)
                    },
                    async getFee() {
                        const {
                            updateAccountFee: t
                        } = this.parent, s = await this.parent.getFee({
                            feeLimit: t
                        });
                        this.fee.fee = this.parent.toCurrencyUnit(s), this.fee.ticker = this.parent.ticker, await this.validateFee()
                    },
                    validateAmount() {
                        this.amountError = "";
                        const t = "Stake" === this.sendType ? this.availableBalance : this.coin.getAvailableForUnstakeBalance().toCurrency(),
                            s = new a.default(t).lt(this.amount);
                        return "" === this.amount || 0 === Number(this.amount) ? this.amountError = "Amount can't be blank" : /^[0-9]+(\.[0-9]+)?$/.test(this.amount) ? "Stake" === this.sendType && s ? this.amountError = "Not enough for stake" : "Unstake" === this.sendType && s && (this.amountError = "Not enough for unstake") : this.amountError = "Enter correct amount", "" === this.amountError
                    },
                    validatePassword() {
                        return this.passwordError = "", "" === this.password ? this.passwordError = "Password can't be blank" : this.password !== this.$storage.password && (this.passwordError = "Wrong password"), "" === this.passwordError
                    },
                    changeAmount(t) {
                        this.isOnSendAll = !1, this.amount = t
                    },
                    showPasswordForm() {
                        this.validateAmount() && this.isFeeEnough && (this.isPasswordShow = !0)
                    },
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            this.isPasswordShow = !1, this.sending = !0;
                            const t = this.sendType.toLowerCase(),
                                s = await this.parent[t]({
                                    amount: this.amount,
                                    validator: this.stakingValidator.address
                                }).catch(s => {
                                    console.log(s), this.$wallets.logger.error({
                                        type: "Send",
                                        error: s.toString(),
                                        url: `Staking ${this.coin.ticker}: ${t}`,
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                });
                            this.txid = s, this.sendAmount = this.amount, this.isError || (this.isSuccess = !0, "Stake" === this.sendType && this.saveSuccessStaking(this.amount, this.stakingValidator.address)), this.sending = !1
                        }
                    },
                    clearInputs() {
                        this.password = "", this.passwordError = "", this.amount = "", this.amountError = "", this.isOnSendAll = !1
                    },
                    backFromPassword() {
                        this.inputTypePassword = "password", this.password = "", "Unstake" === this.sendType ? this.backToWallets() : this.isPasswordShow = !1
                    },
                    tryAgain() {
                        this.isError = !1, this.password = "", setTimeout(() => {
                            this.updateBalanceAndFee()
                        }, 100)
                    },
                    backToForm() {
                        this.clearInputs(), setTimeout(() => {
                            this.isSuccess = !1, this.updateBalanceAndFee()
                        }, 100)
                    },
                    selectValidator(t) {
                        this.selectedValidator = t, this.closeValidatorsDropdown()
                    },
                    closeValidatorsDropdown() {
                        this.isChangeValidator = !1
                    }
                }
            };
            s.default = h
        },
        858: function(t, s, i) {
            "use strict";
            var e = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(i(61)),
                n = i(30),
                r = e(i(76)),
                o = e(i(168)),
                l = e(i(106)),
                d = e(i(92)),
                c = e(i(114));
            var u = {
                name: "SendStakeFLR",
                components: {
                    Dropdown: o.default,
                    Edit: r.default,
                    EditAmount: l.default,
                    SendCoinResult: d.default,
                    AvailableAndFeeAmounts: c.default
                },
                mixins: [n.CurrencyConverter, n.SettingsMixin, n.SendStakeMixin],
                props: {
                    sendType: {
                        type: String,
                        default: "Stake"
                    }
                },
                data: () => ({
                    inputs: {
                        amount: "",
                        password: ""
                    },
                    inputsError: {
                        amount: "",
                        password: ""
                    },
                    fee: {
                        ticker: "",
                        fee: ""
                    },
                    inputTypePassword: "password",
                    isPasswordShow: !1,
                    initSend: !1,
                    sending: !1,
                    isUpdateCoin: !1,
                    isError: !1,
                    isSuccess: !1,
                    isChangeValidator: !1,
                    errorMessage: "",
                    isOnSendAll: !1,
                    amountError: "",
                    isSendAllClick: !1,
                    txid: null,
                    availableBalance: "0",
                    balanceToStake: "0",
                    selectedStakingValidator: "",
                    isBuyCoin: !1,
                    sendAmount: ""
                }),
                computed: {
                    isStakeVotes() {
                        return "Vote" === this.sendType
                    },
                    availableValidators() {
                        return this.coin.predefinedValidators.map(({
                            name: t,
                            reward: s,
                            address: i
                        }) => ({
                            primary: t,
                            additional: s + "%"
                        })).filter(Boolean)
                    },
                    stakingValidator() {
                        const t = this.selectedStakingValidator ? this.getPredefinedValidator(this.selectedStakingValidator) : this.coin.predefinedValidators[0];
                        if (!t) {
                            const t = Object.keys(this.coin.getValidators()),
                                s = t.find(t => t === this.selectedStakingValidator);
                            return {
                                address: t[s].address,
                                name: s
                            }
                        }
                        return t
                    },
                    stakingProfit() {
                        return new a.default(this.stakingValidator.reward).dividedBy(100).multipliedBy(this.inputs.amount)
                    },
                    icon() {
                        return this.$iconClass(this.coin)
                    },
                    unstakingBalance() {
                        return this.coin.getValidators()[this.stakingValidator.address].delegatedVotes.toCurrency()
                    }
                },
                watch: {
                    sending(t) {
                        "Claim" === this.sendType && t && setTimeout(() => {
                            this.isSuccess || (this.sending = !1, this.isError = !0)
                        }, 3e4)
                    },
                    "inputs.amount"() {
                        this.isSuccess || this.isUpdateCoin || this.validateAmount()
                    },
                    "fee.fee"(t) {
                        if ("Unstake" !== this.sendType) this.availableBalance = this.coin.getAvailableBalance().toCurrency();
                        else try {
                            this.availableBalance = this.unstakingBalance
                        } catch (t) {
                            this.availableBalance = "0"
                        }
                    },
                    "coin.divisibleBalance"() {
                        if ("Unstake" !== this.sendType) this.availableBalance = this.coin.getAvailableBalance().toCurrency();
                        else try {
                            this.availableBalance = this.unstakingBalance
                        } catch (t) {
                            this.availableBalance = "0"
                        }
                    }
                },
                async mounted() {
                    await this.updateAndSetAmount(), this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    async updateAndSetAmount() {
                        await this.updateBalanceAndFee(), this.balanceToStake = this.isStakeVotes ? this.coin.getAvailableVotes().toCurrency() : this.coin.getAvailableBalance().toCurrency(), this.setAmount()
                    },
                    getPredefinedValidator(t) {
                        return this.coin.predefinedValidators.find(s => s.name === t || s.address === t)
                    },
                    setAmount() {
                        "Unstake" === this.sendType ? this.inputs.amount = this.availableBalance : "Claim" === this.sendType ? this.inputs.amount = this.coin.getRewards().toCurrency() : this.inputs.amount = this.balanceToStake
                    },
                    async updateBalanceAndFee() {
                        await this.getFee();
                        try {
                            "Unstake" === this.sendType ? this.availableBalance = this.unstakingBalance : this.availableBalance = this.coin.getAvailableBalance().toCurrency()
                        } catch (t) {
                            this.availableBalance = "0"
                        }
                    },
                    setAllAvailableBalance() {
                        "Claim" !== this.sendType && (this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.inputs.amount = String("Unstake" === this.sendType ? this.availableBalance : this.balanceToStake))
                    },
                    async getFee() {
                        const t = await this.coin.getFee({
                            gasLimit: this.coin.stakingGasLimit
                        });
                        this.fee.fee = this.coin.toCurrencyUnit(t), this.fee.ticker = this.coin.deprecatedParent
                    },
                    closeValidatorsDropdown() {
                        this.isChangeValidator = !1
                    },
                    selectValidator(t) {
                        this.getPredefinedValidator(t) && localStorage.setItem(`selected::${this.coin.ticker}::validator`, t), this.selectedStakingValidator = t, this.$bus.$emit(`select::${this.coin.ticker}::validator`, t), this.closeValidatorsDropdown()
                    },
                    async validateAmount() {
                        this.isBuyCoin = !1, this.inputsError.amount = "";
                        try {
                            const t = new RegExp("^[0-9]+(.[0-9]+)?$");
                            if ("Claim" === this.sendType) return this.coin.getRewards().toCurrency() > 0;
                            "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : t.test(this.inputs.amount) ? "Unstake" === this.sendType && Number(this.inputs.amount) > Number(this.unstakingBalance) ? this.inputsError.amount = "Amount exceeds available unstaking balance" : !this.isStakeVotes && "Stake" === this.sendType && Number(this.inputs.amount) > Number(this.coin.getAvailableBalance().toCurrency()) || this.isStakeVotes && Number(this.inputs.amount) > Number(this.balanceToStake) ? (this.inputsError.amount = "Insufficient funds for staking", this.isBuyCoin = !0) : "Unstake" === this.sendType || await this.coin.isAvailableForSend("0", this.fee.fee) || (this.inputsError.amount = "Insufficient funds", this.isBuyCoin = !0) : this.inputsError.amount = "Enter correct amount"
                        } catch (t) {
                            return
                        }
                        return "" === this.inputsError.amount
                    },
                    validatePassword() {
                        return this.inputsError.password = "", "" === this.inputs.password ? this.inputsError.password = "Password can't be blank" : this.inputs.password !== this.$storage.password && (this.inputsError.password = "Wrong password"), "" === this.inputsError.password
                    },
                    async validateAll() {
                        let t = !1;
                        try {
                            await this.validateAmount() || (t = !0)
                        } catch (s) {
                            this.inputsError.amount = "Block explorer is currently unavailable", t = !0
                        }
                        return t
                    },
                    changeAmount(t) {
                        this.isOnSendAll = !1, this.inputs.amount = t
                    },
                    async showPasswordForm() {
                        this.initSend = !0, await this.validateAll() ? this.initSend = !1 : (this.isPasswordShow = !0, this.initSend = !1, setTimeout(() => {
                            this.$refs.confirmPassword.setFocus()
                        }, 300))
                    },
                    sendLoggerError(t, s) {
                        this.$wallets.logger.error({
                            type: "Send",
                            error: t.toString(),
                            url: s,
                            currency: this.coin.getUserTicker()
                        }), this.isError = !0
                    },
                    async createTransactions(t, s) {
                        const i = await this.coin[t]({
                                validator: this.stakingValidator.address,
                                amount: s
                            }).catch(s => {
                                this.sendLoggerError(s, "wallet." + t), this.isError = !0
                            }),
                            e = await this.coin.sendTransaction(i).catch(t => {
                                this.sendLoggerError(t, "wallet.sendTransaction"), this.isError = !0
                            });
                        return null == e ? void 0 : e.txid
                    },
                    async createStakeVotes() {
                        try {
                            this.txid = await this.createTransactions("createDelegationTransaction", this.coin.getAvailableVotes().toCurrency())
                        } catch (t) {
                            console.log(t), this.isError = !0
                        }
                    },
                    async createStakeOrUnstake() {
                        try {
                            const t = this.coin.toMinimalUnit(this.inputs.amount),
                                s = "Unstake" === this.sendType ? "createUnstakeTransaction" : "createStakeTransaction";
                            this.txid = await this.createTransactions(s, t), "Stake" !== this.sendType || this.isError || (this.saveSuccessStaking(t), this.$ga.event("Send Coin", "send tx succeed", {
                                clientID: this.$ga.customParams.uid
                            }))
                        } catch (t) {
                            this.$ga.event("Send Coin", "send tx failed", {
                                clientID: this.$ga.customParams.uid
                            }), this.isError = !0
                        }
                    },
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            if (this.isPasswordShow = !1, this.sending = !0, this.isStakeVotes && "Claim" !== this.sendType) await this.createStakeVotes();
                            else if (["Stake", "Unstake"].includes(this.sendType)) await this.createStakeOrUnstake();
                            else if ("Claim" === this.sendType) return void await this.createClaimFLR();
                            this.isSuccess = !this.isError, this.sending = !1
                        }
                    },
                    async createClaimFLR() {
                        try {
                            const t = await this.coin.createClaimTransaction();
                            if (!t) return void(this.isError = !0);
                            const s = await this.coin.sendTransaction(t);
                            if (s && s.txid) return this.txid = s.txid, this.isSuccess = !0, this.sending = !1, void(this.isError = !1);
                            this.isError = !0, this.sending = !1
                        } catch (t) {
                            const {
                                units: s,
                                value: i
                            } = (t => {
                                if (!t) return {};
                                const [s] = t.split(","), i = s.replace(/[^0-9]+/g, ""), e = 24 - ((new Date).getTime() - i) / 36e5, a = e >= 1;
                                return {
                                    units: a ? "hours" : "minutes",
                                    value: (a ? e : 60 * e).toFixed()
                                }
                            })(t);
                            this.errorMessage = `Claim will be available in ${i} ${s}`, this.isError = !0, this.sending = !1, this.isSuccess = !1
                        }
                    },
                    clearInputs() {
                        this.inputs.password = "", this.inputsError.custom = "", this.inputsError.amount = "", this.inputsError.password = "", this.isOnSendAll = !1, this.inputs.amount = ""
                    },
                    backFromPassword() {
                        this.inputTypePassword = "password", this.inputs.password = "", this.isPasswordShow = !1
                    },
                    tryAgain() {
                        this.isError = !1, this.inputs.password = "", setTimeout(async () => {
                            await this.updateAndSetAmount()
                        }, 100)
                    },
                    backToForm() {
                        this.clearInputs(), setTimeout(async () => {
                            this.isSuccess = !1, await this.updateAndSetAmount()
                        }, 100)
                    }
                }
            };
            s.default = u
        }
    }
]);