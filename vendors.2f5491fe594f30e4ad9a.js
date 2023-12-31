(window.webpackJsonp = window.webpackJsonp || []).push([
    [126], {
        1310: function(t, s, i) {
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
        1312: function(t, s, i) {
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
                        staticClass: "send-coin popup staking-icx send-stake"
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
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            readonly: "Claim" === t.sendType,
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
                            wallet: t.coin,
                            isSendAll: !1
                        },
                        on: {
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, ["Stake" === t.sendType ? i("div", {
                        staticClass: "network-fee flex-block"
                    }, [i("p", [t._v("\n              Yearly earning:\n            ")]), t._v(" "), i("p", {
                        staticClass: "text-white"
                    }, [t._v("\n              " + t._s(t.yearlyYield) + " " + t._s(t.coin.ticker) + " \n            ")]), t._v(" "), t.hasRate(t.coin) ? i("p", [t._v("\n              " + t._s(t._f("formatFinance")(t.getValueFiat(t.yearlyYield, t.coin))) + " " + t._s(t.fiatRate) + "\n            ")]) : t._e()]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "text"
                    }, [t.availableValidators.length > 0 && "Claim" !== t.sendType && ("Unstake" !== t.sendType || "ICX" !== t.coin.ticker) ? i("div", {
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
        1313: function(t, s, i) {
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
                            readonly: ["Unstake", "Withdrawal"].includes(t.sendType),
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
                            isSendAll: "Withdrawal" !== t.sendType
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
                    }, ["Claim" !== t.sendType || t.isFeeEnough ? t._e() : i("div", {
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
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendTypeVerb) + " " + t._s(t.inputs.amount) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
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
        1315: function(t, s, i) {
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
                            wallet: t.coin
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
        1316: function(t, s, i) {
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
                    }, [i("p", [t._v("\n            " + t._s(t.sendType) + " " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n          ")]), t._v(" "), "Claim" !== t.sendType ? i("div", {
                        staticClass: "warning"
                    }, [t._v("\n            Please note, coins will be frozen for ~8 days\n            " + t._s("Unstake" === t.sendType ? "after the unstake" : "once you decide to unstake them later") + ".\n            It’s an " + t._s(t.coin.ticker) + " blockchain rule.\n          ")]) : t._e()]), t._v(" "), i("Edit", {
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
                            decimals: t.decimals,
                            error: t.inputsError.amount,
                            isBuyCoin: t.isBuyCoin,
                            isFiat: !0,
                            isInteger: !0,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            readonly: t.isStakeVotes || "Unstake" === t.sendType,
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
                            isSendAll: !t.isStakeVotes,
                            isDisableAvailable: "Unstake" === t.sendType,
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
                    }, [i("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, [t.isFeeEnough ? t._e() : i("div", {
                        staticClass: "error"
                    }, [t._v("\n              You should have at least " + t._s(t._f("formatFinance")(Number(Number(t.fee.fee).toFixed(6)))) + "\n              " + t._s(t.coin.deprecatedParent) + " to send " + t._s(t.coin.getUserTicker()) + "\n            ")])]), t._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [t.initSend ? i("div", {
                        staticClass: "loader"
                    }) : i("button", {
                        staticClass: "button",
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n              " + t._s(t.sendType)), Number(t.inputs.amount) > 0 ? i("span", [t._v("\n                " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n              ")]) : t._e()])])], 1)], 1), t._v(" "), t.isPasswordShow ? i("div", {
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
        1318: function(t, s, i) {
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
                        staticClass: "send-coin popup xtz-stake"
                    }, [t.isCustomShow || t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : i("div", {
                        staticClass: "form"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n          Select Tezos Baker\n        ")]), t._v(" "), i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.calculator)) + "\n        ")])]), t._v(" "), i("div", {
                        staticClass: "table xtz-validators-table"
                    }, [i("div", {
                        staticClass: "table-row header"
                    }, [i("div", {
                        staticClass: "item"
                    }), t._v(" "), i("div", {
                        staticClass: "item"
                    }, [i("div", {
                        staticClass: "search"
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.filter,
                            expression: "filter"
                        }],
                        staticClass: "placeholder-white",
                        attrs: {
                            placeholder: "Search...",
                            type: "text"
                        },
                        domProps: {
                            value: t.filter
                        },
                        on: {
                            input: function(s) {
                                s.target.composing || (t.filter = s.target.value)
                            }
                        }
                    }), t.filter ? i("span", {
                        staticClass: "clear",
                        on: {
                            click: function(s) {
                                t.filter = ""
                            }
                        }
                    }, [t._v("✕")]) : t._e()])]), t._v(" "), i("div", {
                        staticClass: "item sort-item",
                        class: {
                            active: "estimatedRoi" === t.activeSortField
                        },
                        on: {
                            click: function(s) {
                                return t.sortByField("estimatedRoi")
                            }
                        }
                    }, [t._v("\n            Reward\n            "), "estimatedRoi" === t.activeSortField ? i("svg", {
                        staticClass: "sort-arrow",
                        class: [t.isSortASC ? "asc" : "desc"],
                        attrs: {
                            viewBox: "0 0 24 24"
                        }
                    }, [i("path", {
                        attrs: {
                            d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
                            fill: "#fff",
                            stroke: "#fff"
                        }
                    })]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "item sort-item",
                        class: {
                            active: "staked" === t.activeSortField
                        },
                        on: {
                            click: function(s) {
                                return t.sortByField("staked")
                            }
                        }
                    }, [t._v("\n            Staked\n            "), "staked" === t.activeSortField ? i("svg", {
                        staticClass: "sort-arrow",
                        class: [t.isSortASC ? "asc" : "desc"],
                        attrs: {
                            viewBox: "0 0 24 24"
                        }
                    }, [i("path", {
                        attrs: {
                            d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
                            fill: "#fff",
                            stroke: "#fff"
                        }
                    })]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "item sort-item",
                        class: {
                            active: "capacity" === t.activeSortField
                        },
                        on: {
                            click: function(s) {
                                return t.sortByField("capacity")
                            }
                        }
                    }, [t._v("\n            Capacity\n            "), "capacity" === t.activeSortField ? i("svg", {
                        staticClass: "sort-arrow",
                        class: {
                            asc: t.isSortASC
                        },
                        attrs: {
                            viewBox: "0 0 24 24"
                        }
                    }, [i("path", {
                        attrs: {
                            d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
                            fill: "#fff",
                            stroke: "#fff"
                        }
                    })]) : t._e()]), t._v(" "), i("div", {
                        staticClass: "item"
                    })]), t._v(" "), t._l(t.availableValidators, (function(s) {
                        return i("div", {
                            key: s.stakingBalance,
                            staticClass: "table-row main",
                            on: {
                                click: function(i) {
                                    return t.selectValidator(s)
                                }
                            }
                        }, [i("div", {
                            staticClass: "item logo"
                        }, [i("LazyImage", {
                            attrs: {
                                cached: t.cacheImage[s.name.toLowerCase().replace(/ /g, "")],
                                loading: "" + s.logo,
                                defaultImage: "static/img/xtz-baker.png"
                            },
                            on: {
                                imageLoaded: function(i) {
                                    t.saveCache(i, s.name.toLowerCase().replace(/ /g, ""))
                                }
                            }
                        })], 1), t._v(" "), i("div", {
                            staticClass: "item name"
                        }, [t._v("\n            " + t._s(s.name) + "\n          ")]), t._v(" "), i("div", {
                            staticClass: "item reward"
                        }, [t._v("\n            " + t._s((100 * s.estimatedRoi).toFixed(2)) + " %\n          ")]), t._v(" "), i("div", {
                            staticClass: "item capacity"
                        }, [t._v("\n            " + t._s(t._f("formatFinance")(s.staked)) + " "), i("span", {
                            staticClass: "ticker"
                        }, [t._v("\n              XTZ\n            ")])]), t._v(" "), i("div", {
                            staticClass: "item balance"
                        }, [t._v("\n            " + t._s(t._f("formatFinance")(s.capacity)) + " "), i("span", {
                            staticClass: "ticker"
                        }, [t._v("\n              XTZ\n            ")])]), t._v(" "), i("div", {
                            staticClass: "item select",
                            class: {
                                selected: s.name === t.selectedStakingValidator
                            }
                        }, [i("div", {
                            staticClass: "icon-success"
                        })])])
                    })), t._v(" "), t.filter && !t.availableValidators.length ? i("p", {
                        staticClass: "noresult"
                    }, [t._v('\n          No result found for "' + t._s(t.filter) + '"\n        ')]) : t._e()], 2), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, [t.isFeeEnough ? t._e() : i("div", {
                        staticClass: "error"
                    }, [t._v("\n            You should have at least " + t._s(t._f("formatFinance")(Number(Number(t.fee.fee).toFixed(6)))) + "\n            " + t._s(t.feeTicker()) + " to send " + t._s(t.coin.getUserTicker()) + "\n          ")])]), t._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [i("button", {
                        staticClass: "button",
                        on: {
                            click: t.showCustomForm
                        }
                    }, [t._v("\n            CUSTOM BAKER\n          ")]), t._v(" "), i("button", {
                        staticClass: "button",
                        class: {
                            disabled: t.disableButton
                        },
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n            STAKE\n          ")])])], 1)]), t._v(" "), t.isCustomShow ? i("div", {
                        staticClass: "form-custom-baker form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n          Custom Baker\n        ")])]), t._v(" "), i("Edit", {
                        attrs: {
                            error: t.customBakerError,
                            focus: !1,
                            placeholder: "Custom baker address",
                            type: "text"
                        },
                        model: {
                            value: t.customBaker,
                            callback: function(s) {
                                t.customBaker = s
                            },
                            expression: "customBaker"
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("button", {
                        staticClass: "button normal hover-white",
                        on: {
                            click: t.backFromCustom
                        }
                    }, [t._v("\n          Back\n        ")]), t._v(" "), i("button", {
                        staticClass: "button",
                        class: {
                            disabled: t.disableButton
                        },
                        on: {
                            click: t.selectCustomValidator
                        }
                    }, [t._v("\n          STAKE\n        ")])])], 1) : t._e(), t._v(" "), t.isPasswordShow ? i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n          Stake " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + " to " + t._s(t.stakingValidator.name) + "\n        ")])]), t._v(" "), i("Edit", {
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
                    }), t._v(" "), i("p", [t._v("\n          Stake " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), i("div", {
                        staticClass: "warning"
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating)) + "\n        ")])]), t._v(" "), i("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : i("SendCoinResult", {
                        attrs: {
                            amount: t.inputs.amount,
                            coin: t.coin,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            txid: t.txid,
                            contactData: {
                                issue: "Staking",
                                tags: ["staking_tag"]
                            },
                            mailTitle: "Sending error",
                            sendType: "Stake"
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
        1319: function(t, s, i) {
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
                    }, [t._v("\n          " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.calculator)) + "\n        ")]) : t._e()]), t._v(" "), i("EditAmount", {
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
                            isCustomFeeSupported: t.isCustomFee,
                            isRate: t.isRate,
                            sendType: t.sendType,
                            wallet: t.coin
                        },
                        on: {
                            setAllAvailableBalance: t.setAllAvailableBalance,
                            toggleCustomFee: t.toggleCustomFee
                        }
                    }) : t._e(), t._v(" "), t.isCustomFee && t.isRate ? i("div", {
                        staticClass: "fee-constructor"
                    }, [i("button", {
                        staticClass: "button small-gray",
                        on: {
                            click: t.setDefaultFee
                        }
                    }, [t._v("\n          Set default\n        ")]), t._v(" "), i("p", {
                        staticClass: "text-gray",
                        style: {
                            width: "100%"
                        }
                    }, [t._v("\n          Gas:"), i("span", {
                        staticClass: "text-white"
                    }, [t._v("\n            " + t._s(t.customGas) + "\n          ")]), t._v(" "), i("NumericRange", {
                        attrs: {
                            defaultValue: t.coin.getGasLimit(t.sendType.toLowerCase()),
                            hideButtons: !0,
                            maximum: t.coin.getGasRange().limitMax,
                            minimum: t.coin.getGasRange().limitMin
                        },
                        on: {
                            change: t.setCustomGas
                        }
                    })], 1)]) : t._e(), t._v(" "), "Withdrawal" !== t.sendType ? i("div", {
                        staticClass: "text m-t-4"
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
                    }, [t._v("\n              " + t._s(t.stakingProfit) + " " + t._s(t.coin.ticker) + " \n            ")]), t._v(" "), i("p", [t._v("\n              " + t._s(t._f("formatFinance")(t.getValueFiat(t.stakingProfit, t.coin))) + " " + t._s(t.fiatRate) + "\n            ")])]) : t._e()])], 1) : t._e(), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, ["Claim" !== t.sendType || t.isFeeEnough ? t.isFeeEnough ? t.isBuffered ? i("div", {
                        staticClass: "error"
                    }, [t._v("\n            Withdrawals from chosen validator is currently in pending state due to buffered deposit, try again later\n          ")]) : t._e() : i("div", {
                        staticClass: "error"
                    }, [t._v("\n            You should have at least " + t._s(t._f("formatFinance")(Number(Number(t.fee.fee).toFixed(6)))) + "\n            " + t._s(t.feeTicker()) + " to send " + t._s(t.coin.getUserTicker()) + "\n          ")]) : i("div", {
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
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendTypeVerb) + " " + t._s(t.inputs.amount) + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
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
        1320: function(t, s, i) {
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
                        staticClass: "send-coin popup staking-icx"
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
                    }), t._v(" "), i("p", [t._v("\n        " + t._s(t.sendType) + " " + t._s(t.coin.name) + " (" + t._s(t.coin.ticker) + ")\n      ")])]), t._v(" "), i("EditAmount", {
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
                            availableBalance: String(t.availableVotes),
                            feeBalance: t.fee.fee,
                            feeWallet: t.feeWallet,
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
                    }, [i("p", [t._v("\n            Yearly earning:\n          ")]), t._v(" "), i("p", {
                        staticClass: "text-white"
                    }, [t._v("\n            " + t._s(t.yearlyYield) + " " + t._s(t.coin.ticker) + " \n          ")]), t._v(" "), t.hasRate(t.coin) ? i("p", [t._v("\n            " + t._s(t._f("formatFinance")(t.getValueFiat(t.yearlyYield, t.coin))) + " " + t._s(t.fiatRate) + "\n          ")]) : t._e()]) : t._e()]), t._v(" "), i("div", {
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
                    }, [t._v(t._s(t.stakingValidator.name) + " "), t.stakingValidator.reward ? i("span", {
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
                    }) : t._e()], 1) : t._e()])]), t._v(" "), i("div", {
                        staticClass: "submit"
                    }, [i("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, [t.isFeeEnough ? t._e() : i("div", {
                        staticClass: "error"
                    }, [t._v("\n          You should have at least " + t._s(t._f("formatFinance")(Number(Number(t.fee.fee).toFixed(6)))) + "\n          " + t._s(t.fee.fee.ticker) + " to send " + t._s(t.coin.ticker) + "\n        ")])]), t._v(" "), i("div", {
                        staticClass: "submit-wrapper"
                    }, [i("button", {
                        staticClass: "button",
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n          " + t._s(t.sendType)), Number(t.amount) > 0 ? i("span", [t._v("\n            " + t._s(t._f("formatFinance")(t.amount)) + " " + t._s(t.coin.ticker) + "\n          ")]) : t._e()])])], 1)], 1), t._v(" "), t.isPasswordShow ? i("div", {
                        staticClass: "form-password"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("p", [t._v("\n        " + t._s(t.sendType) + " " + t._s(t._f("formatFinance")(t.amount)) + " " + t._s(t.coin.ticker) + "\n      ")]), t._v(" "), "Stake" === t.sendType ? i("p", {
                        staticClass: "text-small"
                    }, [t._v("\n        You can unstake " + t._s(t.coin.ticker) + " at any moment\n      ")]) : t._e()]), t._v(" "), i("Edit", {
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
                    }), t._v(" "), i("p", [t._v("\n        " + t._s(t.sendType) + " " + t._s(t.amount) + " " + t._s(t.coin.ticker) + "\n      ")]), t._v(" "), "Stake" === t.sendType ? i("div", {
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
        1325: function(t, s, i) {
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
                            parentTicker: t.coin.parent,
                            readonly: ["Claim", "Withdrawal", "Prepare"].includes(t.sendType),
                            showBalance: !0,
                            wallet: t.coin,
                            value: t.inputs.amount,
                            buyCoinSendWallet: t.$wallets.getWallet("eth"),
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
                            isSendAll: !["Claim", "Withdrawal", "Prepare"].includes(t.sendType)
                        },
                        on: {
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }) : t._e(), t._v(" "), "Prepare" !== t.sendType ? i("div", {
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
                    }, [t._v("\n              " + t._s(t.stakingProfit) + " " + t._s(t.coin.ticker) + " \n            ")]), t._v(" "), i("p", [t._v("\n              " + t._s(t._f("formatFinance")(t.getValueFiat(t.stakingProfit, t.coin))) + " " + t._s(t.fiatRate) + "\n            ")])]) : t._e()])], 1) : t._e(), t._v(" "), i("div", {
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
                            click: function(s) {
                                t.buy(t.$wallets.getWallet("eth"))
                            }
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
                    }), t._v(" "), i("p", [t._v("\n          " + t._s(t.sendTypeVerb) + " " + t._s("Prepare" !== t.sendType ? t.inputs.amount : "") + " " + t._s(t.coin.ticker) + "\n        ")]), t._v(" "), "Stake" === t.sendType && t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating) ? i("div", {
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
        5143: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(844),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1310),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5145: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(846),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1312),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5146: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(847),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1313),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5148: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(849),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1315),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5149: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(850),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1316),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5150: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(851),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1318),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5152: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(853),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1319),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5153: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(854),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1320),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        5158: function(t, s, i) {
            "use strict";
            i.r(s);
            var e = i(859),
                a = i.n(e);
            for (var n in e)["default"].indexOf(n) < 0 && function(t) {
                i.d(s, t, (function() {
                    return e[t]
                }))
            }(n);
            var r = i(1325),
                o = i(3),
                l = Object(o.a)(a.a, r.a, r.b, !1, null, null, null);
            s.default = l.exports
        },
        844: function(t, s, i) {
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
                c = e(i(114)),
                u = i(52);
            var h = {
                name: "SendStakeLUNC",
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
                        const t = this.coin.predefinedValidators;
                        if ("Unstake" === this.sendType) {
                            const s = s => {
                                const i = t.find(t => t.address === s);
                                return (null == i ? void 0 : i.name) || s
                            };
                            return Object.entries(this.coin.getValidators()).reduce((t, i) => {
                                const {
                                    address: e,
                                    staked: a
                                } = i[1] || {}, n = this.coin.getStakedBalance(e).toCurrency();
                                if (+n > 0) {
                                    const r = s(i[0]),
                                        o = i[0].substr(0, 4) + "..." + i[0].substr(-4);
                                    return t.concat({
                                        primary: r || o,
                                        uniqueField: e,
                                        additional: `${n}&nbsp;${null==a?void 0:a.ticker}`,
                                        validatorName: r || i[0],
                                        validatorAddress: e,
                                        validatorReward: n
                                    })
                                }
                                return t
                            }, [])
                        }
                        return t.map(({
                            name: t,
                            reward: s,
                            address: i
                        }) => ({
                            primary: t,
                            uniqueField: i,
                            additional: s + "%",
                            validatorName: t,
                            validatorAddress: i,
                            validatorReward: s
                        }))
                    },
                    stakingValidator() {
                        if ("Send" === this.sendType) return;
                        return this.availableValidators.find(t => t.validatorAddress === this.selectedStakingValidator) || (0, u.randomElementFromArray)(this.availableValidators) || {}
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
                            return this.stakingValidator.validatorReward ? this.stakingValidator.validatorReward : this.coin.getStakedBalance(this.selectedStakingValidator).toCurrency()
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
                    "inputs.amount"() {
                        this.isSuccess || this.isUpdateCoin || this.validateAmount()
                    }
                },
                created() {
                    const t = [],
                        s = this.coin.predefinedValidators,
                        i = this.availableValidators.find(t => t.primary === (this.stakingSettings && this.stakingSettings.defaultValidator)) || (0, u.randomElementFromArray)(this.availableValidators);
                    this.selectedValidator = i ? i.primary : s[0].name || t[0]
                },
                async mounted() {
                    this.setAmount(), await this.updateBalanceAndFee(), this.setAmount(), this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    setAmount() {
                        "Claim" === this.sendType && (this.inputs.amount = this.coin.getRewards().toCurrency()), "Stake" !== this.sendType && "Unstake" !== this.sendType || (this.inputs.amount = String(this.availableBalance || 0))
                    },
                    async updateBalanceAndFee() {
                        await this.coin.getInfo();
                        try {
                            await this.getFee()
                        } catch (t) {
                            console.log(t)
                        }
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
                    async availableForFee() {
                        this.isFeeEnough = !0
                    },
                    async getFee() {
                        try {
                            const t = await this.coin.getFee({
                                sendAmount: this.inputs.amount,
                                sendType: this.sendType
                            });
                            this.fee.fee = this.coin.toCurrencyUnit(t), this.fee.ticker = this.coin.deprecatedParent
                        } catch (t) {
                            console.error(t)
                        }
                        this.availableForFee()
                    },
                    closeValidatorsDropdown() {
                        this.isChangeValidator = !1
                    },
                    selectValidator(t) {
                        if (this.selectedStakingValidator = t.uniqueField || t, "Unstake" === this.sendType) this.setAmount();
                        else {
                            this.coin.predefinedValidators.find(s => s.address === t) && localStorage.setItem(`selected::${this.coin.ticker}::validator`, t)
                        }
                        this.$bus.$emit(`select::${this.coin.ticker}::validator`, t), this.closeValidatorsDropdown()
                    },
                    async validateAddress() {
                        const t = this.$address(this.coin.deprecatedParent),
                            s = await this.coin.validateAddress(this.inputs.address);
                        return this.inputsError.address = "", "" === this.inputs.address ? this.inputsError.address = "Address can't be blank" : s ? ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT"].includes(this.coin.ticker) && t === this.inputs.address && (this.inputsError.address = "You can't send funds to your own address") : this.inputsError.address = "Please check the address", "string" == typeof s && (this.domainAddress = s), "" === this.inputsError.address
                    },
                    validateCustom() {
                        return this.inputsError.custom = "", /^[0-9]*$/.test(this.inputs.custom) || (this.inputsError.custom = "Destination tag must be a number"), "" === this.inputsError.custom
                    },
                    async validateAmount() {
                        this.isBuyCoin = !1, this.inputsError.amount = "";
                        try {
                            "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : this.coin.balance && (/^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount) ? "Unstake" === this.sendType && Number(this.inputs.amount) > Number(this.availableBalance) ? this.inputsError.amount = "Amount exceeds available unstaking balance" : "Stake" === this.sendType && Number(this.inputs.amount) > Number(this.coin.getAvailableBalance().toCurrency()) ? (this.inputsError.amount = "Insufficient funds for staking", this.isBuyCoin = !0) : "Unstake" === this.sendType || await this.coin.isAvailableForSend("0", this.fee.fee) || (this.inputsError.amount = "Insufficient funds", this.isBuyCoin = !0) : this.inputsError.amount = "Enter correct amount")
                        } catch (t) {
                            return void console.error(t)
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
            s.default = h
        },
        846: function(t, s, i) {
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
                name: "SendStakeICX",
                components: {
                    Edit: r.default,
                    EditAmount: l.default,
                    SendCoinResult: d.default,
                    Dropdown: o.default,
                    AvailableAndFeeAmounts: c.default
                },
                mixins: [n.CurrencyConverter, n.SettingsMixin, n.SendStakeMixin, n.BuyMixin],
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
                        let t;
                        if (["Stake", "Claim"].includes(this.sendType)) {
                            const s = new a.default(this.coin.getAvailableBalance().toCurrency()).minus(this.feeReserveCoef * Number(this.fee.fee));
                            t = s.gt(0) ? s.toString() : "0"
                        } else t = this.coin.getAvailableForUnstakeBalance().toCurrency();
                        return t
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
                            i = this.availableValidators.find(t => t.primary === (this.stakingSettings && this.stakingSettings.defaultValidator)) || s[0].name;
                        this.selectedValidator = i ? i.primary : s[0].name || t[0]
                    } catch (t) {
                        console.log("SendStakeICX: created hook failed"), console.error(t)
                    }
                },
                methods: {
                    setAllAvailableBalance() {
                        "Claim" !== this.sendType && (this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.amount = String(this.availableBalance) || "0")
                    },
                    async updateBalanceAndFee() {
                        await this.getFee()
                    },
                    async validateFee() {
                        const t = new this.coin.BN(this.coin.toMinimalUnit(this.fee.fee));
                        this.isFeeEnough = t.lt(this.coin.indivisibleBalance)
                    },
                    async getFee() {
                        const t = await this.parent.getFee();
                        this.fee.fee = this.parent.toCurrencyUnit(t), this.fee.ticker = this.parent.ticker, await this.validateFee()
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
            s.default = u
        },
        847: function(t, s, i) {
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
                h = e(i(114));
            const p = "0.00228288";
            var m = {
                name: "SendStakeSOL",
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
                    selectedStakingValidator: null,
                    selectedAccountAddress: null,
                    minRentAmount: p,
                    amountResult: 0
                }),
                computed: {
                    ...(0, n.mapGetters)(["stakingSettings"]),
                    textedSendType() {
                        return "Withdrawal" === this.sendType ? "Withdraw" : this.sendType
                    },
                    rewardAmount() {
                        if (!(this.coin.balances.rewards.validators && Object.keys(this.coin.balances.rewards.validators))) return "0";
                        const t = this.coin.balances.rewards.validators[this.stakingValidator.address];
                        return this.coin.toCurrencyUnit(t)
                    },
                    availableValidators() {
                        if (!this.coin.balances || !this.coin.balances.staking || "Send" === this.sendType) return [];
                        const t = this.$staking.getStakingInterface(this.coin.ticker);
                        if (["Unstake", "Withdrawal"].includes(this.sendType)) {
                            const s = s => {
                                const i = t.getValidator(s),
                                    e = t.validators.find(t => t.address === s);
                                return i && i.name || e && e.name
                            };
                            return this.coin.balances.staking.filter(({
                                validator: t,
                                isDeactivated: i,
                                isAvailableForWithdraw: e
                            }) => ("Withdrawal" === this.sendType && e || "Unstake" === this.sendType && !i) && s(t)).map(({
                                validator: t,
                                staked: i,
                                accountAddress: e
                            }) => ({
                                primary: s(t),
                                additional: `${this.coin.toCurrencyUnit(i)} ${this.coin.ticker}`,
                                uniqueField: e
                            }))
                        }
                        return t.validators.map(({
                            name: t
                        }) => ({
                            primary: t
                        })).filter(Boolean)
                    },
                    stakingValidator() {
                        if ("Send" === this.sendType) return;
                        const t = this.selectedStakingValidator ? this.$staking.getStakingInterface(this.coin.ticker).getValidator(this.selectedStakingValidator) : this.$staking.getStakingInterface(this.coin.ticker).validators[0];
                        if ("Stake" === this.sendType) return t;
                        const s = this.coin.balances.staking.find(({
                            validator: s,
                            accountAddress: i
                        }) => s === (t && t.address) && i === this.selectedAccountAddress);
                        return {
                            address: this.coin.balances.staking && this.coin.balances.staking.find(t => t.validator === s.validator),
                            name: t.name,
                            accountAddress: s && s.accountAddress
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
                        return "Unstake" === this.sendType ? "Unstake" : "Withdrawal" === this.sendType ? "Withdrawing" : "Stake"
                    },
                    placeholderPaymentId() {
                        return this.getPlaceholderPaymentId(this.coin.ticker, this.coin.deprecatedParent)
                    },
                    availableForStake() {
                        var t, s;
                        return (null == this || null === (t = this.coin) || void 0 === t || null === (s = t.balances) || void 0 === s ? void 0 : s.availableForStake) || "0"
                    },
                    availableBalance() {
                        if (!this.coin || !this.coin.balances) return "0";
                        if (["Unstake", "Withdrawal"].includes(this.sendType)) try {
                            const t = this.$staking.getStakingInterface(this.coin.ticker).validators.find(t => t.name === this.selectedStakingValidator).address,
                                s = this.coin.balances.staking.find(s => {
                                    const i = s.accountAddress === this.selectedAccountAddress,
                                        e = s.validator === t;
                                    return "Unstake" === this.sendType ? !s.isDeactivated && i && e : "Withdrawal" === this.sendType && (s.isAvailableForWithdraw && i && e)
                                });
                            return this.coin.toCurrencyUnit(s.staked) || "0"
                        } catch (t) {
                            return "0"
                        }
                        return this.availableForStake
                    },
                    defaultValidator() {
                        const t = this.coin.balances.staking,
                            s = this.$staking.getStakingInterface(this.coin.ticker).validators || [],
                            i = s.map(({
                                address: t
                            }) => t),
                            e = t => {
                                var i;
                                const e = `${this.coin.toCurrencyUnit((null==t?void 0:t.staked)||"")} ${this.coin.ticker}`,
                                    a = (null == t ? void 0 : t.accountAddress) || "",
                                    n = (null === (i = s.find(({
                                        address: s
                                    }) => s === t.validator)) || void 0 === i ? void 0 : i.name) || "";
                                return {
                                    secondary: e,
                                    uniqueField: a,
                                    name: n,
                                    primary: n
                                }
                            },
                            a = t.filter(({
                                validator: t = null
                            }) => i.includes(t));
                        if ("Unstake" === this.sendType && t.length > 0) {
                            return e(a.find(({
                                isDeactivated: t
                            }) => !t))
                        }
                        if ("Withdrawal" === this.sendType && t.length > 0) {
                            return e(a.find(({
                                isAvailableForWithdraw: t
                            }) => t))
                        }
                        const n = this.selectedStakingValidator || this.stakingSettings.find(({
                                ticker: t
                            }) => this.coin.ticker === t).defaultValidator || this.stakingSettings[0].name || "",
                            r = ["Unstake", "Withdrawal"].includes(this.sendType) ? n : localStorage.getItem(`selected::${this.coin.ticker}::validator`);
                        return this.availableValidators.find(({
                            primary: t
                        }) => t === r) || this.availableValidators[0]
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
                    this.selectValidator(this.defaultValidator);
                    const t = await this.coin.getMinRent();
                    this.minRentAmount = this.coin.toCurrencyUnit(t)
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
                        "Claim" !== this.sendType ? (this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.inputs.amount = String(this.availableBalance) || "0") : this.inputs.amount = this.rewardAmount
                    },
                    async availableForFee() {
                        this.isFeeEnough = !0, this.coin instanceof r.Token && (this.isFeeEnough = await this.coin.isAvailableForFee()), this.isFeeEnough = +this.availableForStake >= +this.fee.fee
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
                        this.$staking.getStakingInterface(this.coin.ticker).getValidator(s) && "Stake" === this.sendType && localStorage.setItem(`selected::${this.coin.ticker}::validator`, s), this.selectedStakingValidator = s, this.selectedAccountAddress = i, ["Unstake", "Withdrawal"].includes(this.sendType) && this.setAllAvailableBalance(), this.closeValidatorsDropdown()
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
                        this.inputsError.amount = "";
                        try {
                            "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : this.coin.balance && (/^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount) ? "Stake" === this.sendType && Number(this.inputs.amount) < Number(this.minRentAmount) ? this.inputsError.amount = ((t = p) => `Minimum amount for staking is ${t} SOL`)(this.minRentAmount) : "Stake" === this.sendType && Number(this.inputs.amount) > Number(this.availableBalance) ? this.inputsError.amount = "Insufficient funds for staking" : "Stake" !== this.sendType || await this.coin.isAvailableForSend("0", this.fee.fee) || (this.inputsError.amount = "Insufficient funds") : this.inputsError.amount = "Enter correct amount")
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
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            "Stake" === this.sendType && (this.inputs.address = this.stakingValidator.address, this.inputs.custom = "atomicwallet"), "Unstake" === this.sendType && (this.inputs.address = this.stakingValidator.accountAddress, this.inputs.custom = "atomicwallet"), "Withdrawal" === this.sendType && (this.inputs.address = this.stakingValidator.accountAddress), this.isPasswordShow = !1, this.sending = !0;
                            let t = {
                                validator: this.domainAddress || this.inputs.address,
                                stakeAccount: this.inputs.address,
                                amount: this.coin.toMinimalUnit(this.inputs.amount),
                                memo: this.inputs.custom
                            };
                            this.amountResult = this.inputs.amount;
                            try {
                                let s;
                                "Stake" === this.sendType && (s = await this.coin.createDelegationTransaction(t).catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
                                        error: t.toString(),
                                        url: "wallet.createDelegationTransaction",
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                })), "Unstake" === this.sendType && (s = await this.coin.createDeactivateStakeTransaction(t).catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
                                        error: t.toString(),
                                        url: "wallet.createUnbondingDelegationTransaction",
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                })), "Withdrawal" === this.sendType && (s = await this.coin.createUndelegationTransaction(t).catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
                                        error: t.toString(),
                                        url: "wallet.createUnbondingDelegationTransaction",
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                }));
                                const i = await this.coin.sendTransaction(s).catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
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
            s.default = m
        },
        849: function(t, s, i) {
            "use strict";
            var e = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(i(61)),
                n = i(31),
                r = i(30),
                o = e(i(76)),
                l = e(i(168)),
                d = e(i(106)),
                c = e(i(92)),
                u = e(i(114)),
                h = i(52);
            var p = {
                name: "SendStakeNEAR",
                components: {
                    Dropdown: l.default,
                    Edit: o.default,
                    EditAmount: d.default,
                    SendCoinResult: c.default,
                    AvailableAndFeeAmounts: u.default
                },
                mixins: [r.CurrencyConverter, r.SettingsMixin, r.SendStakeMixin, r.BuyMixin],
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
                    isBuyCoin: !1
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
                        const t = this.selectedStakingValidator || this.defaultValidator ? this.getPredefinedValidator(this.selectedStakingValidator || this.defaultValidator) : (0, h.randomElementFromArray)(this.coin.predefinedValidators),
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
                        return (0, h.randomElementFromArray)(this.availableValidators).primary
                    },
                    availableBalance() {
                        if (!this.coin || !this.coin.balances) return "0";
                        try {
                            const t = this.$staking.getStakingInterface(this.coin.ticker).validators.find(t => t.name === this.defaultValidator).address;
                            if ("Unstake" === this.sendType) {
                                const {
                                    validators: s
                                } = this.coin.balances;
                                return (s[this.defaultValidator] || s[t]).staked.toCurrency()
                            }
                            if ("Withdrawal" === this.sendType) {
                                const s = this.coin.getValidators();
                                return (s[this.defaultValidator] || s[t]).availableWithdrawals.toCurrency()
                            }
                        } catch {
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
                    await this.getAndCheckFee(), this.inputs.amount = String(this.availableBalance || 0), this.$bus.$on("close-send-coin", this.backToWallets), this.$bus.$emit("get-near-balances")
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    getPredefinedValidator(t) {
                        return this.coin.predefinedValidators.find(s => s.name === t || s.address === t)
                    },
                    setAllAvailableBalance() {
                        this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.inputs.amount = String(this.availableBalance) || "0"
                    },
                    async getAndCheckFee() {
                        const {
                            stakingGasLimit: t
                        } = this.coin, s = await this.coin.getFee({
                            gasLimit: t || 1
                        });
                        this.fee.ticker = this.coin.ticker, this.fee.fee = this.coin.toCurrencyUnit(s), this.isFeeEnough = +this.coin.divisibleBalance >= +this.fee.fee
                    },
                    closeValidatorsDropdown() {
                        this.isChangeValidator = !1
                    },
                    selectValidator(t) {
                        this.$staking.getStakingInterface(this.coin.ticker).getValidator(t) && "Stake" === this.sendType && localStorage.setItem(`selected::${this.coin.ticker}::validator`, t), this.selectedStakingValidator = t, this.$bus.$emit(`select::${this.coin.ticker}::validator`, t), this.closeValidatorsDropdown(), ["Unstake", "Withdrawal"].includes(this.sendType) && (this.inputs.amount = String(this.availableBalance || 0))
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
                        if (this.isBuyCoin = !1, this.inputsError.amount = "", "Claim" === this.sendType) return "" === this.inputsError.amount;
                        try {
                            "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount) ? ["Stake"].includes(this.sendType) && Number(this.inputs.amount) > Number(this.availableBalance) ? (this.inputsError.amount = "Insufficient funds", this.isBuyCoin = !0) : ["Unstake"].includes(this.sendType) && Number(this.inputs.amount) > Number(this.availableBalance) ? (this.inputsError.amount = "The amount is too big. Please enter a smaller amount", this.isBuyCoin = !1) : "Unstake" === this.sendType || await this.coin.isAvailableForSend("0", this.fee.fee) || (this.inputsError.amount = "Insufficient funds", this.isBuyCoin = !0) : this.inputsError.amount = "Enter correct amount"
                        } catch (t) {
                            return void console.log(t)
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
                                "Stake" === this.sendType && (s = await this.coin.createDelegationTransaction(t).catch(t => this.sendErrorLogs(t, "createDelegationTransaction"))), "Unstake" === this.sendType && (s = await this.coin.createUnDelegationTransaction(t).catch(t => this.sendErrorLogs(t, "createUnDelegationTransaction"))), "Withdrawal" === this.sendType && (s = await this.coin.createWithdrawDelegationTransaction(t).catch(t => this.sendErrorLogs(t, "createWithdrawDelegationTransaction")));
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
                            this.getAndCheckFee()
                        }, 100)
                    },
                    backToForm() {
                        this.clearInputs(), setTimeout(() => {
                            this.isSuccess = !1, this.getAndCheckFee()
                        }, 100)
                    }
                }
            };
            s.default = p
        },
        850: function(t, s, i) {
            "use strict";
            var e = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(i(61)),
                n = i(38),
                r = i(30),
                o = e(i(76)),
                l = e(i(168)),
                d = e(i(106)),
                c = e(i(92)),
                u = e(i(114));
            var h = {
                name: "SendStakeTRX",
                components: {
                    Dropdown: l.default,
                    Edit: o.default,
                    EditAmount: d.default,
                    SendCoinResult: c.default,
                    AvailableAndFeeAmounts: u.default
                },
                mixins: [r.CurrencyConverter, r.SettingsMixin, r.SendStakeMixin],
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
                    isFeeEnough: !0,
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
                    decimals() {
                        return this.isStakeVotes ? 0 : this.coin.decimal
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
                            this.availableBalance = this.coin.getValidators()[this.selectedStakingValidator].staked.toCurrency()
                        } catch (t) {
                            this.availableBalance = "0"
                        }
                    },
                    "coin.divisibleBalance"() {
                        if ("Unstake" !== this.sendType) this.availableBalance = this.coin.getAvailableBalance().toCurrency();
                        else try {
                            this.availableBalance = this.coin.getValidators()[this.selectedStakingValidator].staked.toCurrency()
                        } catch (t) {
                            this.availableBalance = "0"
                        }
                    }
                },
                created() {
                    this.setStakingValidator()
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
                            "Unstake" === this.sendType ? this.availableBalance = this.coin.getFrozenVotes().toCurrency() : this.availableBalance = this.coin.getAvailableBalance().toCurrency()
                        } catch (t) {
                            this.availableBalance = "0"
                        }
                    },
                    setAllAvailableBalance() {
                        "Claim" !== this.sendType && (this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.inputs.amount = String(this.balanceToStake))
                    },
                    async availableForFee() {
                        this.isFeeEnough = !0, this.coin instanceof n.Token && (this.isFeeEnough = await this.coin.isAvailableForFee())
                    },
                    async getFee() {
                        const t = await this.coin.getFee({
                            contract: "1002000",
                            address: this.coin.address
                        });
                        this.fee.fee = this.coin instanceof n.Token ? this.parent.toCurrencyUnit(t) : this.coin.toCurrencyUnit(t), this.fee.ticker = this.coin.deprecatedParent, this.availableForFee()
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
                            "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : t.test(this.inputs.amount) ? "Unstake" === this.sendType && Number(this.inputs.amount) > Number(this.coin.balances.staking) ? this.inputsError.amount = "Amount exceeds available unstaking balance" : !this.isStakeVotes && "Stake" === this.sendType && Number(this.inputs.amount) > Number(this.coin.getAvailableBalance().toCurrency()) || this.isStakeVotes && Number(this.inputs.amount) > Number(this.balanceToStake) ? (this.inputsError.amount = "Insufficient funds for staking", this.isBuyCoin = !0) : "Unstake" === this.sendType || await this.coin.isAvailableForSend("0", this.fee.fee) ? Number(this.inputs.amount) < 1 && (this.inputsError.amount = "Min amount for stake is 1 TRX") : (this.inputsError.amount = "Insufficient funds", this.isBuyCoin = !0) : this.inputsError.amount = "Enter correct amount"
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
                        this.initSend = !0, !await this.validateAll() && this.isFeeEnough ? (this.isPasswordShow = !0, this.initSend = !1, setTimeout(() => {
                            this.$refs.confirmPassword.setFocus()
                        }, 300)) : this.initSend = !1
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
                        const i = [this.stakingValidator.address, s],
                            e = await this.coin[t](...i).catch(s => {
                                this.sendLoggerError(s, "wallet." + t), this.isError = !0
                            });
                        if ("createUnfreezeTransaction" === t) return e;
                        const a = await this.coin.sendRawTransaction(e).catch(t => {
                            this.sendLoggerError(t, "wallet.sendRawTransaction"), this.isError = !0
                        });
                        return a && a.txid
                    },
                    async createStakeVotes() {
                        try {
                            const t = this.coin.getAvailableVotes().toCurrency(),
                                s = "createVoteTransaction";
                            this.txid = await this.createTransactions(s, t)
                        } catch (t) {
                            console.log(t), this.isError = !0
                        }
                    },
                    async createStakeOrUnstake() {
                        try {
                            const t = this.coin.toMinimalUnit(this.inputs.amount),
                                s = "Unstake" === this.sendType ? "createUnfreezeTransaction" : "createDelegationTransaction",
                                i = await this.createTransactions(s, t);
                            this.txid = "Unstake" === this.sendType ? i.txid : i, "Stake" !== this.sendType || this.isError || (this.saveSuccessStaking(t), this.$ga.event("Send Coin", "send tx succeed", {
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
                            else if ("Claim" === this.sendType) return void await this.createClaimTRX();
                            this.isSuccess = !this.isError, this.sending = !1
                        }
                    },
                    async createClaimTRX() {
                        try {
                            const t = await this.coin.createWithdrawRewardTransaction();
                            if (!t) return void(this.isError = !0);
                            const s = await this.coin.sendRawTransaction(t);
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
            s.default = h
        },
        851: function(t, s, i) {
            "use strict";
            var e = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(i(61)),
                n = e(i(360)),
                r = i(38),
                o = i(30),
                l = e(i(76)),
                d = e(i(5151)),
                c = e(i(92));
            var u = {
                name: "SendStakeXTZ",
                components: {
                    Edit: l.default,
                    SendCoinResult: c.default,
                    LazyImage: d.default
                },
                mixins: [o.CurrencyConverter, o.SettingsMixin, o.SendStakeMixin],
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
                    filter: "",
                    customGas: [],
                    domainAddress: "",
                    inputTypePassword: "password",
                    isPasswordShow: !1,
                    isCustomShow: !1,
                    isFromCustom: !0,
                    initSend: !1,
                    sending: !1,
                    isFeeEnough: !0,
                    isUpdateCoin: !1,
                    isRate: !1,
                    isError: !1,
                    isSuccess: !1,
                    isChangeCoin: !1,
                    isChangeValidator: !1,
                    isOnSendAll: !1,
                    isSendAllClick: !1,
                    txid: null,
                    availableBalance: 0,
                    currencies: [],
                    selectedStakingValidator: "",
                    cacheImage: {},
                    isSortASC: !1,
                    activeSortField: "staked",
                    customBaker: "",
                    customBakerError: "",
                    customBakerSelected: !1
                }),
                computed: {
                    disableButton() {
                        return this.customBakerSelected ? this.customBakerError || !this.customBaker : !this.stakingValidator
                    },
                    availableValidators() {
                        const t = this.filter.replace(/ /g, "").toLowerCase();
                        let s = this.$staking.getStakingInterface(this.coin.ticker).validators.map(t => t.address.toLowerCase() !== (this.coin.balances && this.coin.balances.staking && this.coin.balances.staking.validator.toLowerCase()) && t).filter(s => t ? s && s.name.replace(/ /g, "").toLowerCase().indexOf(t) >= 0 : s);
                        return s = s.map(t => ({
                            staked: Math.ceil(t.stakingBalance),
                            capacity: Math.ceil(t.stakingCapacity - t.stakingBalance),
                            ...t
                        })), this.sortItems(s)
                    },
                    stakingValidator() {
                        if (this.customBakerSelected && this.customBaker && !this.customBakerError) return {
                            address: this.customBaker,
                            name: this.customBaker
                        };
                        return this.selectedStakingValidator && this.$staking.getStakingInterface(this.coin.ticker).getValidator(this.selectedStakingValidator)
                    },
                    stakingProfit() {
                        const t = new a.default(this.stakingValidator.estimatedRoi),
                            s = this.availableBalance;
                        return t.multipliedBy(s)
                    },
                    icon() {
                        return this.$iconClass(this.coin)
                    },
                    placeholderPaymentId() {
                        return this.getPlaceholderPaymentId(this.coin.ticker, this.coin.deprecatedParent)
                    }
                },
                watch: {
                    async customBaker(t) {
                        if (!await this.coin.validateAddress(t)) return void(this.customBakerError = "Invalid baker address");
                        await this.coin.node.isValidator(t) ? this.customBakerError = "" : this.customBakerError = "Not a baker address"
                    },
                    "fee.fee"() {
                        const t = this.coin.toCurrencyUnit(new this.coin.BN(this.coin.balance).sub(new this.coin.BN(this.coin.toMinimalUnit(this.fee.fee))).toString());
                        this.availableBalance = Number(t) > 0 ? t : "0"
                    },
                    "coin.divisibleBalance"() {
                        const t = this.coin.toCurrencyUnit(new this.coin.BN(this.coin.balance).sub(new this.coin.BN(this.coin.toMinimalUnit(this.fee.fee))).toString());
                        this.availableBalance = Number(t) > 0 ? t : "0"
                    }
                },
                async mounted() {
                    await this.updateBalanceAndFee(), this.inputs.amount = this.availableBalance, this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    sortByField(t) {
                        this.activeSortField === t ? this.isSortASC = !this.isSortASC : this.activeSortField = t
                    },
                    sortItems(t) {
                        return this.isSortASC ? (0, n.default)(t).asc(t => Number(t[this.activeSortField])) : (0, n.default)(t).desc(t => Number(t[this.activeSortField]))
                    },
                    saveCache(t, s) {
                        this.cacheImage[s] = t
                    },
                    async updateBalanceAndFee() {
                        await this.getFee();
                        try {
                            const t = this.coin.toCurrencyUnit(new this.coin.BN(this.coin.balance).sub(new this.coin.BN(this.coin.toMinimalUnit(this.fee.fee))).toString());
                            this.availableBalance = Number(t) > 0 ? t : "0"
                        } catch (t) {
                            this.availableBalance = "0"
                        }
                    },
                    setAllAvailableBalance() {
                        this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.inputs.amount = this.availableBalance || "0"
                    },
                    setCustomGas(t) {
                        this.customGas = t
                    },
                    async changeFee(t) {
                        this.isOnSendAll && (this.inputs.amount = await this.coin.availableBalance(this.coin.toMinimalUnit(t))), this.fee.fee = t.toString() || "0", this.availableForFee()
                    },
                    async availableForFee() {
                        this.isFeeEnough = !0, this.coin instanceof r.Token && (this.isFeeEnough = await this.coin.isAvailableForFee())
                    },
                    async getFee() {
                        const t = await this.coin.getFee(0, !0);
                        "ONT" === this.coin.ticker ? this.fee.fee = t : this.fee.fee = this.coin instanceof r.Token ? this.coin.deprecatedParent.toCurrencyUnit(t) : this.coin.toCurrencyUnit(t), this.fee.ticker = this.feeTicker(), this.availableForFee()
                    },
                    closeValidatorsDropdown() {
                        this.isChangeValidator = !1
                    },
                    selectValidator({
                        name: t
                    } = {}) {
                        if (this.customBakerSelected = !t, this.customBakerSelected) return this.selectedStakingValidator = null, localStorage.setItem(`selected::${this.coin.ticker}::validator`, "custom"), void this.$bus.$emit(`select::${this.coin.ticker}::validator`, "custom");
                        this.$staking.getStakingInterface(this.coin.ticker).getValidator(t) && localStorage.setItem(`selected::${this.coin.ticker}::validator`, t), this.selectedStakingValidator = t, this.$bus.$emit(`select::${this.coin.ticker}::validator`, t)
                    },
                    selectCustomValidator() {
                        this.selectValidator(), this.isFromCustom = !0, this.isCustomShow = !1, this.showPasswordForm()
                    },
                    async validateAddress() {
                        const t = this.$address(this.coin.deprecatedParent),
                            s = await this.coin.validateAddress(this.inputs.address);
                        return this.inputsError.address = "", "" === this.inputs.address ? this.inputsError.address = "Address can't be blank" : s ? ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT"].includes(this.coin.ticker) && t === this.inputs.address && (this.inputsError.address = "You can't send funds to your own address") : this.inputsError.address = "Please check the address", "string" == typeof s && (this.domainAddress = s), "" === this.inputsError.address
                    },
                    validateCustom() {
                        return this.inputsError.custom = "", "XMR" !== this.coin.getUserTicker() || /^([A-z0-9]{64})?$/.test(this.inputs.custom) ? ["EOS", "XLM", "KIN", "BNB", "XEM", "ATOM"].includes(this.coin.deprecatedParent) || /^[0-9]*$/.test(this.inputs.custom) || (this.inputsError.custom = "Destination tag must be a number") : this.inputsError.custom = "Destination tag m dust be a 64 hexadecimal", ["BNB"].includes(this.coin.deprecatedParent) && this.inputs.custom.length > 64 && (this.inputsError.custom = "Maximum Memo length is 64 characters"), "" === this.inputsError.custom
                    },
                    async validateAmount() {
                        return this.inputsError.amount = "", "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : this.coin.balance ? /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount) ? Number(this.inputs.amount) > Number(this.coin.balances.available) ? this.inputsError.amount = "Insufficient funds for staking" : await this.coin.isAvailableForSend("0", this.fee.fee) || (this.inputsError.amount = "Insufficient funds") : this.inputsError.amount = "Enter correct amount" : this.inputsError.amount = "Block explorer is currently unavailable", "" === this.inputsError.amount
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
                    showCustomForm() {
                        this.customBakerSelected = !0, this.isCustomShow = !this.isCustomShow
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
                            this.inputs.address = this.stakingValidator.address, this.inputs.custom = "", this.isPasswordShow = !1, this.sending = !0;
                            let t = [this.domainAddress || this.inputs.address, this.coin.toMinimalUnit(this.inputs.amount), this.inputs.custom];
                            try {
                                const s = await this.coin.createDelegationTransaction(...t).catch(t => {
                                        console.log(t), this.$wallets.logger.error({
                                            type: "Send",
                                            error: t.toString(),
                                            url: "wallet.createDelegationTransaction",
                                            currency: this.coin.getUserTicker()
                                        }), this.isError = !0
                                    }),
                                    i = await this.coin.sendTransaction(s).catch(t => {
                                        console.log(t), this.$wallets.logger.error({
                                            type: "Send",
                                            error: t.toString(),
                                            url: "wallet.sendTransaction",
                                            currency: this.coin.getUserTicker()
                                        }), this.isError = !0
                                    });
                                this.txid = i.txid, this.isSuccess = !0, this.saveSuccessStaking(), this.$ga.event("Send Coin", "send tx succeed", {
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
                        this.customGas = [], this.domainAddress = "", this.inputs.custom = "", this.inputs.password = "", this.inputsError.address = "", this.inputsError.custom = "", this.inputsError.amount = "", this.inputsError.password = "", this.isRate = !1, this.isOnSendAll = !1, this.inputs.amount = this.availableBalance
                    },
                    backFromCustom() {
                        this.customBakerSelected = !1, this.customBaker = "", this.customBakerError = "", this.isCustomShow = !1
                    },
                    backFromPassword() {
                        this.inputTypePassword = "password", this.inputs.password = "", this.isPasswordShow = !1, this.isFromCustom && (this.isFromCustom = !1, this.isCustomShow = !0)
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
            s.default = u
        },
        853: function(t, s, i) {
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
                p = e(i(2275));
            var m = {
                name: "SendStakeZIL",
                components: {
                    Dropdown: d.default,
                    Edit: l.default,
                    EditAmount: c.default,
                    SendCoinResult: u.default,
                    AvailableAndFeeAmounts: h.default,
                    NumericRange: p.default
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
                    customGas: [],
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
                    isBuyCoin: !1
                }),
                computed: {
                    ...(0, n.mapGetters)(["stakingSettings"]),
                    sendText() {
                        return "Withdrawal" === this.sendType ? "Withdraw" : this.sendType
                    },
                    isCustomFee() {
                        return ["Claim", "Unstake"].includes(this.sendType)
                    },
                    rewardAmount() {
                        if (!(this.coin.balances.rewards.validators && Object.keys(this.coin.balances.rewards.validators))) return "0";
                        const t = this.coin.balances.rewards.validators[this.stakingValidator.address];
                        return this.coin.toCurrencyUnit(t)
                    },
                    availableValidators() {
                        if (!this.coin.balances || !this.coin.balances.staking) return [];
                        if ("Send" === this.sendType) return;
                        const t = this.$staking.getStakingInterface(this.coin.ticker);
                        if ("Unstake" === this.sendType) {
                            const s = s => {
                                const i = t.getValidator(s),
                                    e = t.validators.find(t => t.address === s);
                                return i && i.name || e && e.name
                            };
                            return Object.entries(this.coin.balances.staking.validators).filter(t => s(t[0])).map(t => ({
                                primary: s(t[0]),
                                additional: `${this.numberToFixed(this.coin.toCurrencyUnit(t[1].amount),4)} ${this.coin.ticker}`
                            }))
                        }
                        return "Claim" === this.sendType ? t.validators.map(({
                            name: t,
                            address: s
                        }) => ({
                            primary: t,
                            additional: this.coin.toCurrencyUnit(this.getReward(s))
                        })).filter(({
                            additional: t
                        }) => Number(t)).filter(Boolean) : t.validators.map(({
                            name: t,
                            address: s
                        }) => ({
                            primary: t
                        })).filter(Boolean)
                    },
                    stakingValidator() {
                        if ("Send" === this.sendType) return;
                        const t = this.defaultValidator ? this.$staking.getStakingInterface(this.coin.ticker).getValidator(this.defaultValidator) : this.$staking.getStakingInterface(this.coin.ticker).validators[0],
                            s = this.coin.balances.staking.validators && Object.keys(this.coin.balances.staking.validators).find(s => s === (t && t.address)),
                            i = {
                                address: this.coin.balances.staking.validators && this.coin.balances.staking.validators[s] && this.coin.balances.staking.validators[s].address,
                                name: s,
                                buffered: this.coin.balances.staking.validators && this.coin.balances.staking.validators[s] && this.coin.balances.staking.validators[s].buffered
                            };
                        return t ? (t.buffered = i.buffered, t) : i
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
                        const t = this.selectedStakingValidator || this.stakingSettings.find(({
                                ticker: t
                            }) => this.coin.ticker === t).defaultValidator || this.stakingSettings[0].name || "" || localStorage.getItem(`selected::${this.coin.ticker}::validator`),
                            s = this.availableValidators.find(({
                                primary: s
                            }) => s === t);
                        return s && s.primary || this.availableValidators[0].primary
                    },
                    availableBalance() {
                        if (!this.coin || !this.coin.balances) return "0";
                        const t = this.$staking.getStakingInterface(this.coin.ticker).validators.find(t => t.name === this.defaultValidator).address;
                        if ("Unstake" === this.sendType) try {
                            const {
                                validators: s
                            } = this.coin.balances.staking, i = s[this.defaultValidator] || s[t];
                            return this.coin.toCurrencyUnit(i.amount) || "0"
                        } catch (t) {
                            return "0"
                        }
                        return "Claim" === this.sendType || "Withdrawal" === this.sendType ? this.coin.balances.available || "0" : this.coin.balances.availableForStake || "0"
                    },
                    availableWithdrawal() {
                        var t, s;
                        const {
                            total: i = 0
                        } = (null === (t = this.coin.balances) || void 0 === t || null === (s = t.withdrawals) || void 0 === s ? void 0 : s.availableWithdrawal) || {};
                        return i && this.coin.toCurrencyUnit(i)
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
                    customGas() {
                        this.getFee(), "Stake" === this.sendType && (this.inputs.amount = String(this.availableBalance || 0)), "Claim" === this.sendType && (this.inputs.amount = this.rewardAmount)
                    },
                    selectedStakingValidator() {
                        "Unstake" === this.sendType && this.checkBuffered(), "Claim" === this.sendType && this.setAllAvailableBalance()
                    }
                },
                async mounted() {
                    await this.getFee(), "Stake" === this.sendType && (this.inputs.amount = String(this.availableBalance || 0)), "Unstake" === this.sendType && (this.inputs.amount = String(Math.max(+this.availableBalance - 10, 0))), "Claim" === this.sendType && (this.inputs.amount = this.rewardAmount), "Withdrawal" === this.sendType && (this.inputs.amount = "" + this.availableWithdrawal), this.customGas = this.coin.getGasLimit(this.sendType.toLowerCase()), this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    checkBuffered() {
                        this.isBuffered = this.stakingValidator.buffered && "Unstake" === this.sendType
                    },
                    setDefaultFee() {
                        this.customGas = this.coin.getGasLimit(this.sendType.toLowerCase()), this.$bus.$emit("numeric::range::default")
                    },
                    getReward(t) {
                        return this.coin.balances.rewards.validators && this.coin.balances.rewards.validators[t] || "0"
                    },
                    isValidMinStakeRemaining() {
                        const t = new this.coin.BN(this.coin.toMinimalUnit(this.inputs.amount)),
                            s = new this.coin.BN(this.coin.toMinimalUnit(10));
                        return new this.coin.BN(this.coin.balances.staking.total).sub(t).gte(s)
                    },
                    toggleCustomFee() {
                        this.isRate = !this.isRate
                    },
                    setAllAvailableBalance() {
                        "Claim" !== this.sendType ? (this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, "Unstake" !== this.sendType ? this.inputs.amount = String(this.availableBalance) || "0" : this.inputs.amount = String(Math.max(+this.availableBalance - 10, 0))) : this.inputs.amount = this.rewardAmount
                    },
                    setCustomGas(t) {
                        t != this.customGas && (this.customGas = t)
                    },
                    async availableForFee() {
                        this.isFeeEnough = !0, this.coin instanceof r.Token && (this.isFeeEnough = await this.coin.isAvailableForFee());
                        const {
                            available: t
                        } = this.coin.balances;
                        this.isFeeEnough = Number(t) >= Number(this.fee.fee)
                    },
                    async getFee() {
                        let t = this.customGas;
                        const s = await this.coin.getFee({
                            gasLimit: t || 1
                        });
                        "ONT" === this.coin.ticker ? this.fee.fee = s : this.fee.fee = this.coin instanceof r.Token ? this.parent.toCurrencyUnit(s) : this.coin.toCurrencyUnit(s), this.fee.ticker = this.feeTicker(), this.availableForFee()
                    },
                    closeValidatorsDropdown() {
                        this.isChangeValidator = !1
                    },
                    selectValidator(t) {
                        this.$staking.getStakingInterface(this.coin.ticker).getValidator(t) && "Stake" === this.sendType && localStorage.setItem(`selected::${this.coin.ticker}::validator`, t), this.selectedStakingValidator = t, this.$bus.$emit(`select::${this.coin.ticker}::validator`, t), this.closeValidatorsDropdown(), "Unstake" === this.sendType && (this.inputs.amount = String(this.availableBalance || 0))
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
                        if (this.isBuyCoin = !1, this.inputsError.amount = "", "Claim" === this.sendType) return "" === this.inputsError.amount;
                        try {
                            "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : this.coin.balance && (/^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount) ? "Unstake" !== this.sendType && Number(this.inputs.amount) < 10 ? this.inputsError.amount = "Minimum amount for staking is 10 ZIL" : "Unstake" === this.sendType && Number(this.inputs.amount) > Number(this.coin.balances.staking) ? this.inputsError.amount = "Amount exceeds available unstaking balance" : "Stake" === this.sendType && Number(this.inputs.amount) > Number(this.coin.balances.availableForStake) ? (this.inputsError.amount = "Insufficient funds for staking", this.isBuyCoin = !0) : "Unstake" === this.sendType || await this.coin.isAvailableForSend("0", this.fee.fee) ? "Unstake" !== this.sendType || this.isValidMinStakeRemaining() || (this.inputsError.amount = "Minimum remaining staked amount must be greater than 10 ZIL") : (this.inputsError.amount = "Insufficient funds", this.isBuyCoin = !0) : this.inputsError.amount = "Enter correct amount")
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
                        this.initSend = !0, this.checkBuffered(), await this.validateAll() || !this.isFeeEnough || this.isBuffered ? this.initSend = !1 : (this.isPasswordShow = !0, this.initSend = !1, setTimeout(() => {
                            this.$refs.confirmPassword.setFocus()
                        }, 300))
                    },
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            "Stake" === this.sendType && (this.inputs.address = this.stakingValidator.address, this.inputs.custom = "atomicwallet"), "Unstake" === this.sendType && (this.inputs.address = this.stakingValidator.address, this.inputs.custom = "atomicwallet"), "Claim" === this.sendType && (this.inputs.address = this.stakingValidator.address), this.isPasswordShow = !1, this.sending = !0;
                            let t = {
                                validator: this.domainAddress || this.inputs.address,
                                amount: this.coin.toMinimalUnit(this.inputs.amount),
                                memo: this.inputs.custom,
                                gasLimit: this.customGas
                            };
                            try {
                                let s;
                                "Stake" === this.sendType && (s = await this.coin.createDelegationTransaction(t).catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
                                        error: t.toString(),
                                        url: "wallet.createDelegationTransaction",
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                })), "Unstake" === this.sendType && (s = await this.coin.createUnDelegationTransaction(t).catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
                                        error: t.toString(),
                                        url: "wallet.createUnbondingDelegationTransaction",
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                })), "Claim" === this.sendType && (s = await this.coin.createClaimTransaction(t).catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
                                        error: t.toString(),
                                        url: "wallet.createUnbondingDelegationTransaction",
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                })), "Withdrawal" === this.sendType && (s = await this.coin.completeWithdrawal().catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
                                        error: t.toString(),
                                        url: "wallet.completeWithdrawal",
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                }));
                                const i = await this.coin.sendTransaction(s).catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
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
                            this.getFee()
                        }, 100)
                    },
                    backToForm() {
                        this.clearInputs(), setTimeout(() => {
                            this.isSuccess = !1, this.getFee()
                        }, 100)
                    }
                }
            };
            s.default = m
        },
        854: function(t, s, i) {
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
                name: "SendVoteICX",
                components: {
                    Edit: r.default,
                    EditAmount: l.default,
                    SendCoinResult: d.default,
                    Dropdown: o.default,
                    AvailableAndFeeAmounts: c.default
                },
                mixins: [n.CurrencyConverter, n.SettingsMixin, n.SendStakeMixin],
                props: {
                    sendType: {
                        type: String,
                        default: "Stake"
                    },
                    isStakeVotes: {
                        type: Boolean,
                        default: !1
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
                    passwordError: "",
                    isChangeValidator: !1,
                    stakingProfit: 0,
                    selectedValidator: ""
                }),
                computed: {
                    yearlyYield() {
                        const t = new a.default(20).dividedBy(100).multipliedBy(this.amount);
                        return Number(t) || 0
                    },
                    delegatedVotes() {
                        return this.coin.getDelegatedVotes()
                    },
                    availableVotes() {
                        return "Vote" === this.sendType ? this.coin.getAvailableVotes().toCurrency() : this.coin.getDelegatedVotes().toCurrency()
                    },
                    icon() {
                        return `${this.$iconClass(this.coin.ticker)} icon-${this.coin.ticker.toLowerCase()}`
                    },
                    availableValidators() {
                        return this.$staking.getStakingInterface(this.coin.ticker).validators.map(({
                            name: t,
                            reward: s
                        }) => ({
                            primary: t,
                            additional: s + "%"
                        }))
                    },
                    stakingValidator() {
                        return this.selectedValidator ? this.$staking.getStakingInterface(this.coin.ticker).getValidator(this.selectedValidator) : this.$staking.getStakingInterface(this.coin.ticker).validators.find(t => "Everstake" === t.name)
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
                created() {
                    try {
                        const t = [],
                            s = this.staking.validators,
                            i = this.availableValidators.find(t => t.primary === (this.stakingSettings && this.stakingSettings.defaultValidator)) || s[0].name;
                        this.selectedValidator = i ? i.primary : s[0].name || t[0]
                    } catch (t) {
                        console.log("SendVoteICX: created hook failed"), console.error(t)
                    }
                },
                async mounted() {
                    await this.updateBalanceAndFee(), this.amount = this.availableVotes, this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    setAllAvailableBalance() {
                        this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.amount = String(this.availableVotes) || "0"
                    },
                    async updateBalanceAndFee() {
                        await this.getFee()
                    },
                    async validateFee() {
                        const t = new this.coin.BN(this.coin.toMinimalUnit(this.fee.fee));
                        this.isFeeEnough = t.lt(this.coin.indivisibleBalance)
                    },
                    async getFee() {
                        const t = await this.coin.getFee();
                        this.fee.fee = this.coin.toCurrencyUnit(t), this.fee.ticker = this.coin.ticker, await this.validateFee()
                    },
                    validateAmount() {
                        this.amountError = "";
                        const t = this.coin.balances.availableVotes;
                        return Number(t) < Number(this.amount) && (this.amountError = "Not enough for vote"), "" === this.amountError
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
                                s = await this.coin[t]({
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
                            this.txid = s, this.sendAmount = this.amount, this.isError || (this.isSuccess = !0), this.sending = !1
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
                    backToWallets() {
                        this.clearInputs(), this.$emit("closePopup")
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
            s.default = u
        },
        859: function(t, s, i) {
            "use strict";
            var e = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(i(61)),
                n = i(31),
                r = i(30),
                o = e(i(76)),
                l = e(i(168)),
                d = e(i(106)),
                c = e(i(92)),
                u = e(i(114)),
                h = i(52);
            var p = {
                name: "SendStakeMATIC",
                components: {
                    Dropdown: l.default,
                    Edit: o.default,
                    EditAmount: d.default,
                    SendCoinResult: c.default,
                    AvailableAndFeeAmounts: u.default
                },
                mixins: [r.CurrencyConverter, r.SettingsMixin, r.SendStakeMixin, r.BuyMixin],
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
                    isBuyCoin: !1
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
                        const t = this.selectedStakingValidator || this.defaultValidator ? this.getPredefinedValidator(this.selectedStakingValidator || this.defaultValidator) : (0, h.randomElementFromArray)(this.coin.predefinedValidators),
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
                            prepare: "Preparing",
                            unstake: "Unstake",
                            claim: "Claiming",
                            withdrawal: "Withdrawing"
                        } [null === (t = this.sendType) || void 0 === t || null === (s = t.toLowerCase) || void 0 === s ? void 0 : s.call(t)] || "Stake"
                    },
                    placeholderPaymentId() {
                        return this.getPlaceholderPaymentId(this.coin.ticker, this.coin.parent)
                    },
                    defaultValidator() {
                        return (0, h.randomElementFromArray)(this.availableValidators).primary
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
                        return "Prepare" === this.sendType ? this.coin.getTotalBalance().toCurrency() : this.coin.getAvailableBalance().toCurrency()
                    },
                    availableWithdrawal() {
                        return this.coin.getAvailableWithdrawals().toCurrency()
                    },
                    gasLimitByTypeStake() {
                        return "Unstake" === this.sendType ? this.coin.unstakingGasLimit : "Claim" === this.sendType ? this.coin.claimRewardsGasLimit : "Withdrawal" === this.sendType ? this.coin.withdrawGasLimit : this.coin.stakingGasLimit
                    }
                },
                watch: {
                    "inputs.address"() {
                        this.domainAddress = "", this.isSuccess || this.isUpdateCoin || this.validateAddress()
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
                        this.isFeeEnough = await this.coin.isAvailableForSend("0", this.fee.fee)
                    },
                    async getFee() {
                        const t = await this.coin.getFee({
                            gasLimit: this.gasLimitByTypeStake
                        });
                        this.fee.fee = this.coin.toCurrencyUnit(t), this.fee.ticker = this.feeTicker(), await this.availableForFee()
                    },
                    closeValidatorsDropdown() {
                        this.isChangeValidator = !1
                    },
                    selectValidator(t) {
                        this.getPredefinedValidator(t) && "Stake" === this.sendType && localStorage.setItem(`selected::${this.coin.ticker}::validator`, t), this.selectedStakingValidator = t, this.$bus.$emit(`select::${this.coin.ticker}::validator`, t), this.closeValidatorsDropdown(), ["Unstake", "Withdrawal"].includes(this.sendType) && (this.inputs.amount = String(this.availableBalance || 0))
                    },
                    async validateAddress() {
                        const t = this.$address(this.coin.parent),
                            s = await this.coin.validateAddress(this.inputs.address);
                        return this.inputsError.address = "", "" === this.inputs.address ? this.inputsError.address = "Address can't be blank" : s ? ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT"].includes(this.coin.ticker) && t === this.inputs.address && (this.inputsError.address = "You can't send funds to your own address") : this.inputsError.address = "Please check the address", "string" == typeof s && (this.domainAddress = s), "" === this.inputsError.address
                    },
                    async validateAmount() {
                        this.inputsError.amount = "", this.isBuyCoin = !1;
                        try {
                            "" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount) ? ["Stake"].includes(this.sendType) && Number(this.inputs.amount) > Number(this.availableBalance) ? (this.inputsError.amount = "Not enough for stake", this.isBuyCoin = !0) : ["Unstake"].includes(this.sendType) && Number(this.inputs.amount) > Number(this.availableBalance) && (this.inputsError.amount = "The amount is too big. Please enter a smaller amount") : this.inputsError.amount = "Enter correct amount"
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
                    feeTicker() {
                        return this.coin.feeTicker
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
                        this.$wallets.logger.error({
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
                            this.inputs.address = this.stakingValidator.address, this.isPasswordShow = !1, this.sending = !0;
                            const t = {
                                validator: this.domainAddress || this.inputs.address,
                                amount: this.coin.toMinimalUnit(this.inputs.amount)
                            };
                            try {
                                let s;
                                "Prepare" === this.sendType && (s = await this.coin.createApproveTransaction(t).catch(t => this.sendErrorLogs(t, "createDelegationTransaction"))), "Stake" === this.sendType && (s = await this.coin.createDelegationTransaction(t).catch(t => this.sendErrorLogs(t, "createDelegationTransaction"))), "Unstake" === this.sendType && (s = await this.coin.createUnstakeTransaction(t).catch(t => this.sendErrorLogs(t, "createUnDelegationTransaction"))), "Withdrawal" === this.sendType && (s = await this.coin.createWithdrawTransaction(t).catch(t => this.sendErrorLogs(t, "createWithdrawDelegationTransaction"))), "Claim" === this.sendType && (s = await this.coin.createClaimRewardsTransaction(t).catch(t => this.sendErrorLogs(t, "createWithdrawDelegationTransaction")));
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
            s.default = p
        }
    }
]);