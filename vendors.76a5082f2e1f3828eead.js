(window.webpackJsonp = window.webpackJsonp || []).push([
    [195], {
        1212: function(t, s, e) {
            "use strict";
            e.d(s, "a", (function() {
                return i
            })), e.d(s, "b", (function() {
                return a
            }));
            var i = function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "result",
                        class: {
                            error: t.isError,
                            success: t.isSuccess && !t.isError
                        }
                    }, [t.isSuccess && !t.isError ? e("div", {
                        staticClass: "info"
                    }, ["DOGE" !== t.coin.ticker ? e("div", {
                        staticClass: "icon",
                        class: t.icon
                    }) : e("img", {
                        staticClass: "doge",
                        class: t.icon,
                        attrs: {
                            src: "static/img/doge.png"
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "text-green"
                    }, [t._v("\n      " + t._s("DOGE" === t.coin.ticker ? "Wow, much success" : "Success") + "\n    ")]), t._v(" "), e("p", {
                        staticClass: "text-small",
                        domProps: {
                            innerHTML: t._s(t.successfulMessage)
                        }
                    }), t._v(" "), "Stake" === t.sendType ? e("p", {
                        staticClass: "warning"
                    }, [t._v("\n      " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.successScreen)) + "\n    ")]) : t._e(), t._v(" "), "Unstake" === t.sendType ? e("p", {
                        staticClass: "warning"
                    }, [t._v("\n      " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.successScreenUnstaking)) + "\n    ")]) : t._e(), t._v(" "), e("a", {
                        staticClass: "text-small no-hover",
                        on: {
                            click: function(s) {
                                return s.stopPropagation(), t.openTransactionHash.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n      Transaction hash:\n    ")]), t._v(" "), e("a", {
                        staticClass: "text-link-underline",
                        on: {
                            click: function(s) {
                                return s.stopPropagation(), t.openTransactionHash.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n      " + t._s(t.txid) + "\n    ")]), t._v(" "), e("div", {
                        staticClass: "button-center"
                    }, [e("button", {
                        staticClass: "button copy",
                        on: {
                            click: function(s) {
                                return s.stopPropagation(), t.copyTxid.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n        Copy\n      ")]), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.copied ? e("div", {
                        staticClass: "message"
                    }, [t._v("\n          Copied to clipboard\n        ")]) : t._e()])], 1), t._v(" "), e("div", {
                        staticClass: "rate-result"
                    }, [e("RateStars")], 1)]) : t._e(), t._v(" "), t.isError ? e("div", {
                        staticClass: "info"
                    }, [t.errorMessage ? e("div", {
                        staticClass: "info-wrap error"
                    }, [e("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), e("p", {
                        staticClass: "info-text"
                    }, [t._v("\n        " + t._s(t.errorMessage) + "\n      ")])]) : [e("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), e("p", [t._v("\n        " + t._s(t.errorHeadline) + "\n      ")]), t._v(" "), t._m(0)]], 2) : t._e(), t._v(" "), t.isSuccess && !t.isError ? e("div", {
                        staticClass: "submit"
                    }, [e("BaseButton", {
                        attrs: {
                            type: "primary-desktop"
                        },
                        on: {
                            click: function(s) {
                                return t.backActions("backToWallets")
                            }
                        }
                    }, [t._v("\n      " + t._s(t.buttonTitle.back) + "\n    ")]), t._v(" "), ["Withdrawal", "Activate", "ActivateAutoclaim", "Claim"].every((function(s) {
                        return t.sendType !== s
                    })) && "XRP" !== t.coin.ticker || "Send" === t.sendType ? e("BaseButton", {
                        attrs: {
                            type: "primary-desktop"
                        },
                        on: {
                            click: function(s) {
                                return t.backActions("backToForm")
                            }
                        }
                    }, [t._v("\n      " + t._s(t.buttonTitle.repeat) + "\n    ")]) : t._e()], 1) : t._e(), t._v(" "), t.isError ? e("div", {
                        staticClass: "submit failed"
                    }, [e("button", {
                        staticClass: "button platinum hover-white",
                        on: {
                            click: function(s) {
                                return t.$emit("tryAgain")
                            }
                        }
                    }, [t._v("\n      Back\n    ")]), t._v(" "), e("button", {
                        staticClass: "button platinum hover-white",
                        on: {
                            click: t.talkWithSupport
                        }
                    }, [t._v("\n      Contact Atomic Support\n    ")])]) : t._e(), t._v(" "), t.isError ? e("div", {
                        staticClass: "version"
                    }, [e("span", [t._v("\n      v " + t._s(t.version) + " " + t._s(t.$platformVersion.getPlatform()) + " " + t._s(t.$platformVersion.getVersion()) + "\n    ")])]) : t._e()])
                },
                a = [function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("ul", {
                        staticClass: "steps"
                    }, [t._v("\n        Please try these steps:\n        "), e("li", [t._v("\n          - Refresh the balance\n        ")]), t._v(" "), e("li", [t._v("\n          - Wait for 5-10 min and repeat the transaction\n        ")]), t._v(" "), e("li", [t._v("\n          - Turn on/off VPN\n        ")]), t._v(" "), e("li", [t._v("\n          - Restart the wallet\n        ")])])
                }]
        },
        1221: function(t, s, e) {
            "use strict";
            e.d(s, "a", (function() {
                return i
            })), e.d(s, "b", (function() {
                return a
            }));
            var i = function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                        staticClass: "rate-popup",
                        class: {
                            "rate-popup_show": t.isRatePopup
                        }
                    }, [i("div", {
                        staticClass: "rate-popup__wrap rate-popup__wrap-padding rate-popup__start-big",
                        class: {
                            "rate-popup__wrap-small": t.isSendSuccess
                        }
                    }, [t.isSendSuccess ? i("img", {
                        staticClass: "rate-popup__atomic",
                        attrs: {
                            src: e(1169)
                        }
                    }) : t._e(), t._v(" "), t.isSendSuccess ? t._e() : i("div", {
                        staticClass: "rate-popup__close",
                        on: {
                            click: t.closePopup
                        }
                    }, [t._v("\n      ✕\n    ")]), t._v(" "), t.isSendSuccess ? i("p", {
                        staticClass: "rate-popup__title-big"
                    }, [t._v("\n      Thank you\n    ")]) : i("p", {
                        staticClass: "rate-popup__title-big"
                    }, [t._v("\n      Leave your feedback\n    ")]), t._v(" "), t.isSendSuccess ? i("p", {
                        staticClass: "rate-popup__text m-t-10"
                    }, [t._v("\n      For helping us make Atomic Wallet better for you\n    ")]) : t._e(), t._v(" "), t.isSendSuccess ? t._e() : i("RateStars", {
                        attrs: {
                            isRate: !1,
                            userRate: t.userRate
                        }
                    }), t._v(" "), t.isSendSuccess ? i("div", {
                        staticClass: "m-t-30"
                    }, [i("button", {
                        staticClass: "rate-popup__button rate-popup__button-small",
                        on: {
                            click: t.closePopup
                        }
                    }, [t._v("\n        Close\n      ")])]) : t._e(), t._v(" "), !t.isSendSuccess && t.userRate && t.userRate < 5 ? i("div", {
                        staticClass: "rate-popup__content"
                    }, [i("div", {
                        staticClass: "rate-popup__row"
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.userEmail,
                            expression: "userEmail"
                        }],
                        staticClass: "rate-popup__input",
                        class: {
                            "rate-popup__input-error": !t.isValidEmail
                        },
                        attrs: {
                            placeholder: (t.isValidEmail ? "" : "*") + "Your e-mail",
                            type: "text"
                        },
                        domProps: {
                            value: t.userEmail
                        },
                        on: {
                            input: function(s) {
                                s.target.composing || (t.userEmail = s.target.value)
                            }
                        }
                    }), t._v(" "), !t.isValidEmail && t.userEmail ? i("p", {
                        staticClass: "rate-popup__error"
                    }, [t._v("\n          Enter a valid e-mail\n        ")]) : t._e()]), t._v(" "), i("AtomicSelect", {
                        attrs: {
                            label: t.$reviews.settings.selectTitle,
                            list: t.$reviews.settings.selectValues
                        },
                        on: {
                            setActiveLabel: t.setSelect
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "rate-popup__row rate-popup__textarea-wrap"
                    }, [i("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.userComment,
                            expression: "userComment"
                        }],
                        staticClass: "rate-popup__textarea",
                        class: {
                            "rate-popup__textarea-error": !t.isValidComment
                        },
                        attrs: {
                            placeholder: (t.isValidComment ? "" : "*") + "Describe your issue or share your ideas"
                        },
                        domProps: {
                            value: t.userComment
                        },
                        on: {
                            input: function(s) {
                                s.target.composing || (t.userComment = s.target.value)
                            }
                        }
                    })]), t._v(" "), i("div", [i("button", {
                        staticClass: "rate-popup__button",
                        on: {
                            click: t.sendResult
                        }
                    }, [t._v("\n          Send\n        ")])]), t._v(" "), i("div", {
                        staticClass: "m-t-15"
                    }, [i("a", {
                        staticClass: "rate-popup__link",
                        on: {
                            click: t.neverRemind
                        }
                    }, [t._v("Never remind me")])])], 1) : t._e()], 1)])
                },
                a = []
        },
        1222: function(t, s, e) {
            "use strict";
            e.d(s, "a", (function() {
                return i
            })), e.d(s, "b", (function() {
                return a
            }));
            var i = function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                        staticClass: "rate-popup",
                        class: {
                            "rate-popup_show": t.isSupportPopup
                        },
                        attrs: {
                            "data-test-id": "contact_support"
                        }
                    }, [i("div", {
                        staticClass: "rate-popup__wrap",
                        class: {
                            "rate-popup__wrap-small": t.isSendSuccess
                        }
                    }, [t.isSendSuccess ? i("img", {
                        staticClass: "rate-popup__atomic",
                        attrs: {
                            src: e(1169)
                        }
                    }) : t._e(), t._v(" "), t.isSendSuccess ? t._e() : i("div", {
                        staticClass: "rate-popup__close",
                        attrs: {
                            "data-test-id": "contact_close"
                        },
                        on: {
                            click: t.closeSupportPopup
                        }
                    }, [t._v("\n      ✕\n    ")]), t._v(" "), t.isSendSuccess ? i("p", {
                        staticClass: "rate-popup__title-big"
                    }, [t._v("\n      We're on it\n    ")]) : i("p", {
                        staticClass: "rate-popup__title-big"
                    }, [t._v("\n      Contact support\n    ")]), t._v(" "), t.isSendSuccess ? i("div", {
                        staticClass: "m-t-20"
                    }, [i("p", {
                        staticClass: "rate-popup__text"
                    }, [t._v("\n        Message sent. Someone from the support team will reply soon\n      ")]), t._v(" "), i("div", {
                        staticClass: "m-t-20"
                    }, [i("button", {
                        staticClass: "rate-popup__button",
                        on: {
                            click: t.closeSupportPopup
                        }
                    }, [t._v("\n          Close\n        ")])])]) : i("div", {
                        staticClass: "rate-popup__content m-t-25"
                    }, [i("div", {
                        staticClass: "rate-popup__row"
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.userEmail,
                            expression: "userEmail"
                        }],
                        staticClass: "rate-popup__input",
                        class: {
                            "rate-popup__input-error": !t.isValidEmail
                        },
                        attrs: {
                            placeholder: (t.isValidEmail ? "" : "*") + "Your e-mail",
                            type: "text",
                            "data-test-id": "contact_email"
                        },
                        domProps: {
                            value: t.userEmail
                        },
                        on: {
                            input: [function(s) {
                                s.target.composing || (t.userEmail = s.target.value)
                            }, t.validateEmail]
                        }
                    }), t._v(" "), !t.isValidEmail && t.userEmail ? i("p", {
                        staticClass: "rate-popup__error"
                    }, [t._v("\n          Enter a valid e-mail\n        ")]) : t._e()]), t._v(" "), i("AtomicSelect", {
                        attrs: {
                            isError: !t.isValidSubject,
                            label: t.userSubject || t.$reviews.settings.selectTitle,
                            list: t.$reviews.settings.selectValues,
                            "data-test-id": "contact_subject"
                        },
                        on: {
                            setActiveLabel: t.setSelect
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "rate-popup__row rate-popup__textarea-wrap"
                    }, [i("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.userComment,
                            expression: "userComment"
                        }],
                        staticClass: "rate-popup__textarea",
                        class: {
                            "rate-popup__textarea-error": !t.isValidComment
                        },
                        attrs: {
                            placeholder: (t.isValidComment ? "" : "*") + "Describe your issue or share your ideas",
                            "data-test-id": "contact_text"
                        },
                        domProps: {
                            value: t.userComment
                        },
                        on: {
                            input: [function(s) {
                                s.target.composing || (t.userComment = s.target.value)
                            }, t.validateComment]
                        }
                    })]), t._v(" "), i("div", [i("button", {
                        staticClass: "rate-popup__button",
                        on: {
                            click: t.sendResult
                        }
                    }, [t._v("\n          Send\n        ")])])], 1)])])
                },
                a = []
        },
        1223: function(t, s, e) {
            "use strict";
            e.d(s, "a", (function() {
                return i
            })), e.d(s, "b", (function() {
                return a
            }));
            var i = function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return t.isUpdateAvailable ? e("div", {
                        staticClass: "popup scroll-list updates",
                        class: {
                            "updates--minimum": t.isMinimumScreen,
                            "updates--minimum__restart": t.isMinimumScreen && "restart" === t.status
                        }
                    }, [t.isMinimumScreen && "downloading" === t.status ? e("div", {
                        staticClass: "flex center",
                        on: {
                            click: function(s) {
                                t.isMinimumScreen = !1
                            }
                        }
                    }, [e("div", {
                        staticClass: "flex center"
                    }, [e("ClockIcon"), t._v(" "), e("div", {
                        staticClass: "new-text-small m-l-5"
                    }, [t._v("\n        Downloading\n      ")])], 1), t._v(" "), e("div", {
                        staticClass: "updates__progress"
                    }, [e("span", {
                        style: {
                            width: t.percent + "%"
                        }
                    })])]) : t.isMinimumScreen && "restart" === t.status ? e("div", {
                        staticClass: "position-bottom flex"
                    }, [e("button", {
                        staticClass: "new-button new-button-large new-button-yellow new-button-max300",
                        on: {
                            click: t.restart
                        }
                    }, [t._v("\n      Restart Atomic\n      Wallet to update\n    ")])]) : e("div", [e("div", {
                        staticClass: "flex space-between"
                    }, [e("div", {
                        staticClass: "new-title-large"
                    }, [t._v("\n        New version " + t._s(t.version) + " is available\n      ")]), t._v(" "), e("div", {
                        staticClass: "hover-opacity new-text-large close",
                        on: {
                            click: t.close
                        }
                    }, [t._v("\n        ✕\n      ")])]), t._v(" "), t.assets && t.assets.length > 0 ? e("div", {
                        staticClass: "m-t-20"
                    }, [e("div", {
                        staticClass: "new-title-medium"
                    }, [t._v("\n        Assets updated\n      ")]), t._v(" "), e("div", {
                        staticClass: "flex m-t-10"
                    }, t._l(t.assets, (function(s, i) {
                        return e("div", {
                            key: s,
                            staticClass: "updates-asset__coin-wrap",
                            class: {
                                "m-l-15": 0 !== i
                            }
                        }, [e("CoinIcon", {
                            attrs: {
                                wallet: t.$wallets.findWallet(s) || s
                            }
                        }), t._v(" "), e("span", [t._v("\n            " + t._s(s) + "\n          ")])], 1)
                    })), 0)]) : t._e(), t._v(" "), t.features && t.features.length > 0 ? e("div", {
                        staticClass: "border-line m-t-20"
                    }) : t._e(), t._v(" "), t.features && t.features.length > 0 ? e("div", {
                        staticClass: "m-t-20"
                    }, [e("div", {
                        staticClass: "new-title-medium"
                    }, [t._v("\n        New features\n      ")]), t._v(" "), e("div", {
                        staticClass: "new-text-medium m-t-10",
                        domProps: {
                            innerHTML: t._s(t.features)
                        }
                    })]) : t._e(), t._v(" "), t.bugsFixed && t.bugsFixed.length > 0 ? e("div", {
                        staticClass: "border-line m-t-20"
                    }) : t._e(), t._v(" "), t.bugsFixed && t.bugsFixed.length > 0 ? e("div", {
                        staticClass: "m-t-20"
                    }, [e("div", {
                        staticClass: "new-title-medium"
                    }, [t._v("\n        Bug fixes\n      ")]), t._v(" "), e("div", {
                        staticClass: "new-text-medium m-t-10",
                        domProps: {
                            innerHTML: t._s(t.bugsFixed)
                        }
                    })]) : t._e(), t._v(" "), "downloading" === t.status ? e("div", {
                        staticClass: "position-bottom"
                    }, [e("div", {
                        staticClass: "updates__progress"
                    }, [e("span", {
                        style: {
                            width: t.percent + "%"
                        }
                    })])]) : "restart" === t.status ? e("div", {
                        staticClass: "position-bottom"
                    }, [e("div", {
                        staticClass: "flex"
                    }, [e("button", {
                        staticClass: "new-button new-button-large new-button-blue new-button-max30vw",
                        on: {
                            click: t.restart
                        }
                    }, [t._v("\n          Restart\n        ")])])]) : e("div", {
                        staticClass: "position-bottom flex space-between"
                    }, [t.isUnix ? t._e() : e("button", {
                        staticClass: "new-button new-button-large new-button-yellow",
                        on: {
                            click: t.download
                        }
                    }, [t._v("\n        Update now\n      ")]), t._v(" "), e("button", {
                        staticClass: "new-button new-button-large new-button-blue m-l-20",
                        on: {
                            click: t.close
                        }
                    }, [t._v("\n        Remind later\n      ")]), t._v(" "), e("button", {
                        staticClass: "new-button new-button-large new-button-transparent m-l-20",
                        on: {
                            click: function(s) {
                                return t.$electron.shell.openExternal("https://atomicwallet.io/downloads")
                            }
                        }
                    }, [t._v("\n        Download from website\n      ")])])])]) : t._e()
                },
                a = []
        },
        1274: function(t, s, e) {
            "use strict";
            e.d(s, "a", (function() {
                return i
            })), e.d(s, "b", (function() {
                return a
            }));
            var i = function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "send-coin popup"
                    }, [t.sending ? t._e() : e("div", {
                        staticClass: "close",
                        on: {
                            click: t.backToWallets
                        }
                    }, [t._v("\n    ✕\n  ")]), t._v(" "), t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : e("div", {
                        staticClass: "form"
                    }, [e("div", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.closeCoinDropdown,
                            expression: "closeCoinDropdown"
                        }],
                        staticClass: "info send-coin"
                    }, [e("div", {
                        staticClass: "icon",
                        class: t.icon,
                        attrs: {
                            "data-test-id": "send_icon"
                        },
                        on: {
                            click: t.toggleDropdown
                        }
                    }), t._v(" "), e("p", [t._v("\n        Send\n        "), e("span", {
                        staticClass: "border",
                        attrs: {
                            "data-test-id": "send_coin"
                        }
                    }, [e("span", {
                        on: {
                            click: t.toggleDropdown
                        }
                    }, [t._v("\n            " + t._s(t.coin.name) + "\n          ")]), t._v(" "), e("span", {
                        staticClass: "text-small",
                        on: {
                            click: t.toggleDropdown
                        }
                    }, [t._v("(" + t._s(t.coin.ticker) + ")")])])]), t._v(" "), t.isChangeCoin ? e("CoinDropdown", {
                        attrs: {
                            coins: t.dropdownCoins,
                            showBalance: !0
                        },
                        on: {
                            selectCoin: t.selectCoin
                        }
                    }) : t._e()], 1), t._v(" "), e("Edit", {
                        attrs: {
                            error: t.inputsError.address,
                            isPasteByClick: !0,
                            placeholder: "Click here to paste address or domain",
                            "data-test-id": "send_input_address"
                        },
                        model: {
                            value: t.inputs.address,
                            callback: function(s) {
                                t.$set(t.inputs, "address", s)
                            },
                            expression: "inputs.address"
                        }
                    }), t._v(" "), t.coin.fields.paymentId ? e("Edit", {
                        attrs: {
                            editPlaceholder: t.editPlaceholderPaymentId,
                            error: t.inputsError.custom,
                            isPasteByClick: !0,
                            placeholder: t.placeholderPaymentId,
                            validationPattern: t.validationPattern,
                            "data-test-id": "send_input_paymentId"
                        },
                        model: {
                            value: t.inputs.custom,
                            callback: function(s) {
                                t.$set(t.inputs, "custom", s)
                            },
                            expression: "inputs.custom"
                        }
                    }) : t._e(), t._v(" "), e("EditAmount", {
                        staticClass: "last-child-send-coin",
                        attrs: {
                            balance: t.coin.divisibleBalance,
                            decimals: t.coin.decimal,
                            error: t.inputsError.amount,
                            isBuyCoin: t.isBuyCoin,
                            isFiat: !0,
                            isSendAllClick: t.isSendAllClick,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            showBalance: !0,
                            wallet: t.coin,
                            value: t.inputs.amount,
                            placeholder: "Amount",
                            "data-test-id": "send_amount"
                        },
                        on: {
                            input: t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), e("AvailableAndFeeAmounts", {
                        attrs: {
                            availableBalance: String(t.availableBalance),
                            estimatedTime: t.estimatedTime,
                            feeBalance: t.fee.fee,
                            feeWallet: t.feeWallet,
                            isCustomFeeSupported: t.isCustomFeeSupported,
                            isRate: t.isRate,
                            wallet: t.coin,
                            "data-test-id": "send_networkfee"
                        },
                        on: {
                            setAllAvailableBalance: t.setAllAvailableBalance,
                            toggleCustomFee: t.toggleCustomFee,
                            setDefaultFee: t.setDefaultFee
                        }
                    }), t._v(" "), t.isCustomFeeSupported ? e("FeeConstructorOld", {
                        attrs: {
                            isSetFee: t.isRate,
                            custom: t.inputs.custom,
                            defaultGasLimit: t.defaultGasLimit,
                            defaultGasPrice: t.defaultGasPrice,
                            defaultSatoshiPerByte: t.defaultSatPerByte,
                            defaultValue: t.fee.fee,
                            estimatedTime: t.estimatedTime,
                            minGasLimit: t.minGasLimit,
                            nodeGasPrice: t.nodeGasPrice,
                            nonce: t.inputs.nonce,
                            sendAddress: t.inputs.address,
                            sendAmount: t.inputs.amount,
                            utxos: t.utxos,
                            wallet: t.coin,
                            config: t.feeConfig,
                            "data-test-id": "send_controlfee"
                        },
                        on: {
                            change: t.changeFee,
                            setCustomGas: t.setCustomGas,
                            setCustomSatoshi: t.setCustomSatoshi,
                            setEstimatedTime: t.setEstimatedTime
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "submit"
                    }, [e("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, [t.isCoinDisabled([t.actionSend]) ? e("div", {
                        staticClass: "error"
                    }, [t._v("\n          " + t._s(t.getCoinDisabilityReason(t.actionSend)) + "\n        ")]) : t._e(), t._v(" "), t.isFeeEnough ? t._e() : e("div", {
                        staticClass: "error"
                    }, [t._v("\n          You should have at least " + t._s(Number(Number(t.fees).toFixed(6))) + "\n          " + t._s(t.feeWallet.ticker) + " to send " + t._s(t.coin.getUserTicker()) + "\n        ")])]), t._v(" "), e("div", {
                        staticClass: "submit-wrapper"
                    }, [t.initSend ? e("div", {
                        staticClass: "loader"
                    }) : e("button", {
                        staticClass: "button",
                        attrs: {
                            disabled: t.isCoinDisabled([t.actionSend]) || t.isDisabled || t.isSendCoinDisable,
                            "data-test-id": "send_coin_button"
                        },
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n          Send"), Number(t.inputs.amount) > 0 ? e("span", [t._v("\n            " + t._s(t.inputs.amount) + " " + t._s(t.coin.ticker) + "\n          ")]) : t._e()]), t._v(" "), "XMR" === t.coin.ticker && t.xmrHasFrozenBalance ? e("div", {
                        staticClass: "warn"
                    }, [t._v("\n          Your total balance is not available to\n          send until it is confirmed on the blockchain\n        ")]) : t._e()])], 1)], 1), t._v(" "), t.isPasswordShow ? e("div", {
                        staticClass: "form-password"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("p", [t._v("\n        Send " + t._s(t.inputs.amount) + " " + t._s(t.coin.ticker) + "\n      ")]), t._v(" "), e("p", {
                        staticClass: "text-small"
                    }, [t._v("\n        To address "), e("br"), t._v("\n        " + t._s(t.inputs.address) + "\n      ")])]), t._v(" "), e("Edit", {
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
                    }), t._v(" "), e("div", {
                        staticClass: "submit"
                    }, [e("button", {
                        staticClass: "button normal hover-white",
                        attrs: {
                            "data-test-id": "back_send"
                        },
                        on: {
                            click: t.backFromPassword
                        }
                    }, [t._v("\n        Back\n      ")]), t._v(" "), e("button", {
                        staticClass: "button",
                        attrs: {
                            "data-test-id": "confirm_send"
                        },
                        on: {
                            click: t.sendCoins
                        }
                    }, [t._v("\n        Confirm\n      ")])])], 1) : t._e(), t._v(" "), t.sending ? e("div", {
                        staticClass: "sending"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), e("p", [t._v("\n        Sending " + t._s(t.inputs.amount) + " " + t._s(t.coin.ticker) + "\n      ")])]), t._v(" "), e("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : e("SendCoinResult", {
                        attrs: {
                            amount: t.inputs.amount,
                            coin: t.coin,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            sendType: "Send",
                            contactData: {
                                tags: ["send_tag"]
                            },
                            txid: t.txid,
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
        1275: function(t, s, e) {
            "use strict";
            e.d(s, "a", (function() {
                return i
            })), e.d(s, "b", (function() {
                return a
            }));
            var i = function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "send-coin popup"
                    }, [t.sending ? t._e() : e("div", {
                        staticClass: "close",
                        attrs: {
                            "data-test-id": "claim_ada_close"
                        },
                        on: {
                            click: t.backToWallets
                        }
                    }, [t._v("\n    ✕\n  ")]), t._v(" "), t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : e("div", {
                        staticClass: "form"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("div", {
                        class: ["icon", t.icon]
                    }), t._v(" "), e("p", [t._v("\n        Claim ADA from the old address\n      ")])]), t._v(" "), e("Edit", {
                        attrs: {
                            error: t.inputsError.address,
                            readonly: !0,
                            placeholder: "My Shelley address",
                            "data-test-id": "wall_claddress"
                        },
                        model: {
                            value: t.inputs.address,
                            callback: function(s) {
                                t.$set(t.inputs, "address", s)
                            },
                            expression: "inputs.address"
                        }
                    }), t._v(" "), e("EditAmount", {
                        staticClass: "last-child",
                        attrs: {
                            balance: t.inputs.amount,
                            decimals: t.coin.decimal,
                            error: t.inputsError.amount,
                            isFiat: !0,
                            isInteger: !0,
                            isZeroPlaceholder: !0,
                            parentTicker: t.coin.deprecatedParent,
                            readonly: !0,
                            showBalance: !0,
                            wallet: t.coin,
                            value: String(t.inputs.amount),
                            placeholder: "Amount",
                            "data-test-id": "wall_clamount"
                        }
                    }), t._v(" "), e("AvailableAndFeeAmounts", {
                        attrs: {
                            feeBalance: t.feeBalance,
                            feeWallet: t.coin,
                            isDisableAvailable: !0,
                            wallet: t.coin,
                            "data-test-id": "wall_clnetworkfee"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "submit"
                    }, [e("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, [t.isClaimAvailable ? t._e() : e("div", {
                        staticClass: "error",
                        attrs: {
                            "data-test-id": "wall_clnothing"
                        }
                    }, [t._v("\n          Nothing to claim\n        ")])]), t._v(" "), e("div", {
                        staticClass: "submit-wrapper"
                    }, [t.initSend ? e("div", {
                        staticClass: "loader"
                    }) : e("button", {
                        staticClass: "button",
                        class: {
                            disabled: !t.isClaimAvailable || 0 === Number(t.inputs.amount)
                        },
                        attrs: {
                            "data-test-id": "wall_clbutton"
                        },
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n          Claim"), Number(t.inputs.amount) > 0 ? e("span", [t._v("\n            " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n          ")]) : t._e()])])], 1)], 1), t._v(" "), t.isPasswordShow ? e("div", {
                        staticClass: "form-password"
                    }, [t._m(0), t._v(" "), e("Edit", {
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
                    }), t._v(" "), e("div", {
                        staticClass: "submit"
                    }, [e("button", {
                        staticClass: "button normal hover-white",
                        on: {
                            click: t.backFromPassword
                        }
                    }, [t._v("\n        Back\n      ")]), t._v(" "), e("button", {
                        staticClass: "button",
                        on: {
                            click: t.sendCoins
                        }
                    }, [t._v("\n        Confirm\n      ")])])], 1) : t._e(), t._v(" "), t.sending ? e("div", {
                        staticClass: "sending"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), e("p", [t._v("\n        Claiming ADA\n      ")])]), t._v(" "), e("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : e("SendCoinResult", {
                        attrs: {
                            amount: String(t.inputs.amount),
                            buttonName: {
                                back: "Back to the wallet",
                                repeat: "Send another one"
                            },
                            coin: t.coin,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            sendType: "ClaimADA",
                            txid: t.txid,
                            contactData: {
                                issue: "Transaction issue (deposit/withdrawal)",
                                tags: ["send_tag"]
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
                a = [function() {
                    var t = this.$createElement,
                        s = this._self._c || t;
                    return s("div", {
                        staticClass: "info"
                    }, [s("p", [this._v("\n        Claim ADA\n      ")])])
                }]
        },
        1281: function(t, s, e) {
            "use strict";
            e.d(s, "a", (function() {
                return i
            })), e.d(s, "b", (function() {
                return a
            }));
            var i = function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "send-coin popup"
                    }, [t.sending ? t._e() : e("div", {
                        staticClass: "close",
                        on: {
                            click: t.backToWallets
                        }
                    }, [t._v("\n    ✕\n  ")]), t._v(" "), t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : e("div", {
                        staticClass: "form"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), e("p", [t._v("\n        Claim Spark\n      ")])]), t._v(" "), e("Edit", {
                        attrs: {
                            error: t.inputsError.address,
                            readonly: !0,
                            placeholder: "My Flare address"
                        },
                        model: {
                            value: t.inputs.address,
                            callback: function(s) {
                                t.$set(t.inputs, "address", s)
                            },
                            expression: "inputs.address"
                        }
                    }), t._v(" "), e("AvailableAndFeeAmounts", {
                        attrs: {
                            feeBalance: t.coin.toCurrencyUnit(t.coin.fee),
                            feeWallet: t.coin,
                            isDisableAvailable: !0,
                            wallet: t.coin
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "submit"
                    }, [e("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, [t.isClaimAvailable ? t._e() : e("div", {
                        staticClass: "error"
                    }, [t._v("\n          Nothing to claim\n        ")])]), t._v(" "), e("div", {
                        staticClass: "submit-wrapper"
                    }, [t.initSend ? e("div", {
                        staticClass: "loader"
                    }) : e("button", {
                        staticClass: "button",
                        class: {
                            disabled: !t.isClaimAvailable
                        },
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n          Claim"), Number(t.inputs.amount) > 0 ? e("span", [t._v("\n            " + t._s(t._f("formatFinance")(t.inputs.amount)) + " " + t._s(t.coin.ticker) + "\n          ")]) : t._e()])])], 1)], 1), t._v(" "), t.isPasswordShow ? e("div", {
                        staticClass: "form-password"
                    }, [t._m(0), t._v(" "), e("Edit", {
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
                    }), t._v(" "), e("div", {
                        staticClass: "submit"
                    }, [e("button", {
                        staticClass: "button normal hover-white",
                        on: {
                            click: t.backFromPassword
                        }
                    }, [t._v("\n        Back\n      ")]), t._v(" "), e("button", {
                        staticClass: "button",
                        on: {
                            click: t.sendCoins
                        }
                    }, [t._v("\n        Confirm\n      ")])])], 1) : t._e(), t._v(" "), t.sending ? e("div", {
                        staticClass: "sending"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), e("p", [t._v("\n        Claiming Spark\n      ")])]), t._v(" "), e("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : e("SendCoinResult", {
                        attrs: {
                            amount: String(t.inputs.amount),
                            coin: t.coin,
                            icon: t.icon,
                            isError: t.isError,
                            isSuccess: t.isSuccess,
                            sendType: "Claim",
                            txid: t.txid,
                            mailTitle: "Sending error"
                        },
                        on: {
                            backToForm: t.backToForm,
                            backToWallets: t.backToWallets,
                            tryAgain: t.tryAgain
                        }
                    })], 1)
                },
                a = [function() {
                    var t = this.$createElement,
                        s = this._self._c || t;
                    return s("div", {
                        staticClass: "info"
                    }, [s("p", [this._v("\n        Claim Spark\n      ")])])
                }]
        },
        1290: function(t, s, e) {
            "use strict";
            e.d(s, "a", (function() {
                return i
            })), e.d(s, "b", (function() {
                return a
            }));
            var i = function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "coin-receive popup"
                    }, [e("div", {
                        staticClass: "close",
                        attrs: {
                            "data-test-id": "rec_close"
                        },
                        on: {
                            click: t.backToWallets
                        }
                    }, [t._v("\n    ✕\n  ")]), t._v(" "), t.isActivating ? t._e() : e("div", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.closeDropdown,
                            expression: "closeDropdown"
                        }],
                        staticClass: "coin-wrap"
                    }, [e("div", {
                        class: ["icon", t.icon],
                        attrs: {
                            "data-test-id": "rec_icon_coin"
                        },
                        on: {
                            click: t.toggleDropdown
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "dropdown-wrap"
                    }, [e("div", {
                        staticClass: "flex"
                    }, [e("a", {
                        staticClass: "name",
                        attrs: {
                            "data-test-id": "rec_coin"
                        },
                        on: {
                            click: t.toggleDropdown
                        }
                    }, [t._v("\n          " + t._s(t.coin.name) + "\n        ")]), t._v(" "), e("TokenTag", {
                        attrs: {
                            wallet: t.coin
                        }
                    })], 1), t._v(" "), t.isChangeCoin ? e("CoinDropdown", {
                        attrs: {
                            coins: t.dropdownCoins,
                            showBalance: !0
                        },
                        on: {
                            selectCoin: t.selectCoin
                        }
                    }) : t._e()], 1)]), t._v(" "), t.isWalletActive ? "HBAR" === t.coin.ticker && !t.coin.address || t.isActivating ? e("HederaActivation", {
                        attrs: {
                            coin: t.coin,
                            isActivating: t.isActivating
                        },
                        on: {
                            changeActivation: t.changeActivation
                        }
                    }) : e("div", {
                        staticClass: "address-wrapper"
                    }, [e("p", {
                        staticClass: "text-small",
                        attrs: {
                            "data-test-id": "rec_address_coti"
                        }
                    }, [t._v("\n      Your " + t._s(t.coin.ticker) + " Address\n    ")]), t._v(" "), e("img", {
                        staticClass: "qr-code",
                        attrs: {
                            src: t.qrCodeImage,
                            "data-test-id": "rec_addressqr_coti"
                        }
                    }), t._v(" "), e("a", {
                        staticClass: "address",
                        attrs: {
                            "data-test-id": "rec_pubKey_coti"
                        },
                        on: {
                            click: function(s) {
                                return t.copyAddress()
                            }
                        }
                    }, [t._v(t._s(t.$address(t.coin.deprecatedParent)) + "\n      "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.copied ? e("div", {
                        staticClass: "message",
                        attrs: {
                            "data-test-id": "rec_tooltipscopy"
                        }
                    }, [t._v("Your address copied to Clipboard")]) : t._e()])], 1), t._v(" "), t.isNeedWarnings ? e("div", {
                        staticClass: "warning_wrap",
                        attrs: {
                            "data-test-id": "rec_sendtoken_erc-20"
                        }
                    }, [e("div", {
                        staticClass: "new-text-medium text-gray new-title-bold"
                    }, [t._v("\n        Send only " + t._s(t.getMessage) + " tokens to this address\n      ")]), t._v(" "), e("div", {
                        staticClass: "new-text-medium text-gray new-title-bold"
                    }, [t._v("\n        Sending any other coins may result in permanent loss.\n      ")])]) : t._e(), t._v(" "), e("button", {
                        staticClass: "button small-gray",
                        attrs: {
                            "data-test-id": "rec_copy"
                        },
                        on: {
                            click: t.copyAddress
                        }
                    }, [t._v("\n      Copy\n    ")]), t._v(" "), t.isHaveUnspendableBalance ? e("p", {
                        staticClass: "text-small m-t",
                        attrs: {
                            "data-test-id": "rec_unspendable_balance"
                        }
                    }, [t._v("\n      " + t._s(t.unspendableBalanceTitle) + "\n    ")]) : t.isRequiredActivate ? e("p", {
                        staticClass: "text-small m-t",
                        attrs: {
                            "data-test-id": "rec_infoactivate"
                        }
                    }, [t._v("\n      " + t._s(t.requiredActivateTitle) + "\n    ")]) : t._e()]) : e("div", {
                        staticClass: "address-wrapper"
                    }, [e("button", {
                        staticClass: "button",
                        attrs: {
                            "data-test-id": ""
                        },
                        on: {
                            click: function(s) {
                                return t.activateWallet()
                            }
                        }
                    }, [t._v("\n      Activate\n    ")])])], 1)
                },
                a = []
        },
        1308: function(t, s, e) {
            "use strict";
            e.d(s, "a", (function() {
                return i
            })), e.d(s, "b", (function() {
                return a
            }));
            var i = function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "send-coin popup",
                        attrs: {
                            "data-test-id": "send_stake"
                        }
                    }, [t.sending ? t._e() : e("div", {
                        staticClass: "close",
                        attrs: {
                            "data-test-id": "close_popup"
                        },
                        on: {
                            click: t.backToWallets
                        }
                    }, [t._v("\n    ✕\n  ")]), t._v(" "), t.isCustomShow || t.isPasswordShow || t.sending || t.isError || t.isSuccess ? t._e() : e("div", {
                        staticClass: "form"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), e("p", [t._v("\n        " + t._s(t.sendType) + " " + t._s(t.coin.name) + " (" + t._s(t.coin.ticker) + ")\n      ")]), t._v(" "), "Stake" === t.sendType ? e("div", {
                        staticClass: "warning"
                    }, [t._v("\n        " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.calculator)) + "\n      ")]) : t._e()]), t._v(" "), e("EditAmount", {
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
                            value: t.inputs.amount,
                            placeholder: "Amount"
                        },
                        on: {
                            input: t.changeAmount,
                            setAllAvailableBalance: t.setAllAvailableBalance
                        }
                    }), t._v(" "), e("AvailableAndFeeAmounts", {
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
                    }), t._v(" "), e("div", {
                        staticClass: "text"
                    }, [t.availableValidators.length > 0 && "Claim" !== t.sendType ? e("div", {
                        staticClass: "stake-validator"
                    }, [t._v("\n        Pool: \n        "), e("span", {
                        staticClass: "text-white validator-name",
                        attrs: {
                            "data-test-id": "pool_name"
                        },
                        on: {
                            click: function(s) {
                                s.stopPropagation(), t.isChangeValidator = !0
                            }
                        }
                    }, [t._v("\n          " + t._s(t.stakingValidator.name) + " \n          "), "Stake" === t.sendType && t.stakingReward ? e("span", {
                        staticClass: "text-white"
                    }, [t._v("\n            - " + t._s(t.stakingReward) + "%\n            "), e("span", {
                        staticClass: "ticker additional"
                    }, [t._v("\n              yearly yield\n            ")])]) : t._e()]), t._v(" "), t.isChangeValidator ? e("Dropdown", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.closeValidatorsDropdown,
                            expression: "closeValidatorsDropdown"
                        }],
                        attrs: {
                            custom: "Custom pool",
                            elements: t.availableValidators,
                            showAdditional: !0,
                            "data-test-id": "pool_search"
                        },
                        on: {
                            select: t.selectValidator,
                            selectCustom: t.showCustomForm
                        }
                    }) : t._e()], 1) : t._e(), t._v(" "), e("transition", {
                        attrs: {
                            name: "collapse-fade"
                        }
                    }, ["Stake" === t.sendType && t.stakingProfit > 0 && Number(t.inputs.amount) > 0 ? e("div", {
                        staticClass: "network-fee flex-block"
                    }, [e("p", [t._v("\n            Yearly earning:\n          ")]), t._v(" "), e("p", {
                        staticClass: "text-white"
                    }, [t._v("\n            " + t._s(t.stakingProfit) + " " + t._s(t.coin.ticker) + " \n          ")]), t._v(" "), e("p", [t._v("\n            " + t._s(t._f("formatFinance")(t.getValueFiat(t.stakingProfit, t.coin))) + " " + t._s(t.fiatRate) + "\n          ")])]) : t._e()])], 1), t._v(" "), e("div", {
                        staticClass: "submit"
                    }, [e("transition", {
                        attrs: {
                            name: "page-fade"
                        }
                    }, ["Claim" !== t.sendType || t.isFeeEnough ? t._e() : e("div", {
                        staticClass: "error flex center justify-center"
                    }, [e("span", {
                        staticClass: "new-text-error"
                    }, [t._v("\n            Not enough " + t._s(t.coin.getUserTicker()) + " to claim rewards\n          ")]), t._v(" "), e("button", {
                        staticClass: "button button-buy",
                        on: {
                            click: t.buyCoin
                        }
                    }, [t._v("\n            Buy\n          ")])]), t._v(" "), t.isFeeEnough ? t._e() : e("div", {
                        staticClass: "error"
                    }, [t._v("\n          You should have at least " + t._s(t._f("formatFinance")(Number(Number(t.fee.fee).toFixed(6)))) + "\n          " + t._s(t.feeTicker()) + " to " + t._s(t.sendType.toLowerCase()) + " " + t._s(t.coin.getUserTicker()) + "\n        ")])]), t._v(" "), e("div", {
                        staticClass: "submit-wrapper"
                    }, [e("button", {
                        staticClass: "button",
                        class: {
                            disabled: t.disableButton
                        },
                        on: {
                            click: t.showPasswordForm
                        }
                    }, [t._v("\n          " + t._s(t.sendType.toUpperCase()) + "\n        ")])])], 1)], 1), t._v(" "), t.isCustomShow ? e("div", {
                        staticClass: "form-custom-baker form-password"
                    }, [t._m(0), t._v(" "), e("Edit", {
                        attrs: {
                            focus: !1,
                            placeholder: "Pool name",
                            type: "text"
                        },
                        model: {
                            value: t.customPoolName,
                            callback: function(s) {
                                t.customPoolName = s
                            },
                            expression: "customPoolName"
                        }
                    }), t._v(" "), e("Edit", {
                        attrs: {
                            error: t.customPoolError,
                            focus: !1,
                            placeholder: "Custom pool id",
                            type: "text"
                        },
                        model: {
                            value: t.customPool,
                            callback: function(s) {
                                t.customPool = s
                            },
                            expression: "customPool"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "submit"
                    }, [e("button", {
                        staticClass: "button normal hover-white",
                        on: {
                            click: t.backFromCustom
                        }
                    }, [t._v("\n        Back\n      ")]), t._v(" "), e("button", {
                        staticClass: "button",
                        class: {
                            disabled: t.disableButton
                        },
                        on: {
                            click: t.selectCustomValidator
                        }
                    }, [t._v("\n        Save\n      ")])])], 1) : t._e(), t._v(" "), t.isPasswordShow ? e("div", {
                        staticClass: "form-password"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("p", [t._v("\n        " + t._s(t.sendType) + " " + t._s(t.coin.ticker) + " " + t._s("Claim" !== t.sendType ? "to " + t.stakingValidator.name : "rewards") + "\n      ")])]), t._v(" "), e("Edit", {
                        ref: "confirmPassword",
                        attrs: {
                            error: t.inputsError.password,
                            focus: !0,
                            isShowPassword: !0,
                            type: t.inputTypePassword,
                            placeholder: "Password",
                            "data-test-id": "password_field"
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
                    }), t._v(" "), e("div", {
                        staticClass: "submit"
                    }, [e("button", {
                        staticClass: "button normal hover-white",
                        attrs: {
                            "data-test-id": "back_stake"
                        },
                        on: {
                            click: t.backFromPassword
                        }
                    }, [t._v("\n        Back\n      ")]), t._v(" "), e("button", {
                        staticClass: "button",
                        attrs: {
                            "data-test-id": "confirm_stake"
                        },
                        on: {
                            click: t.sendCoins
                        }
                    }, [t._v("\n        Confirm\n      ")])])], 1) : t._e(), t._v(" "), t.sending ? e("div", {
                        staticClass: "sending"
                    }, [e("div", {
                        staticClass: "info"
                    }, [e("div", {
                        staticClass: "icon",
                        class: t.icon
                    }), t._v(" "), e("p", [t._v("\n        " + t._s("Claim" === t.sendType ? "Claiming" : "Stake") + " " + t._s(t.coin.ticker) + "\n      ")]), t._v(" "), "Stake" === t.sendType ? e("div", {
                        staticClass: "warning"
                    }, [t._v("\n        " + t._s(t.Texts.CoinTips.staking(t.Texts.CoinTips.labels.delegating)) + "\n      ")]) : t._e()]), t._v(" "), e("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), t.sending ? t._e() : e("SendCoinResult", {
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
                    })], 1)
                },
                a = [function() {
                    var t = this.$createElement,
                        s = this._self._c || t;
                    return s("div", {
                        staticClass: "info"
                    }, [s("p", [this._v("\n        Custom Pool\n      ")])])
                }]
        },
        2274: function(t, s, e) {
            "use strict";
            e.r(s);
            var i = e(802),
                a = e.n(i);
            for (var n in i)["default"].indexOf(n) < 0 && function(t) {
                e.d(s, t, (function() {
                    return i[t]
                }))
            }(n);
            var o = e(1274),
                r = e(3),
                c = Object(r.a)(a.a, o.a, o.b, !1, null, null, null);
            s.default = c.exports
        },
        2280: function(t, s, e) {
            "use strict";
            e.r(s);
            var i = e(823),
                a = e.n(i);
            for (var n in i)["default"].indexOf(n) < 0 && function(t) {
                e.d(s, t, (function() {
                    return i[t]
                }))
            }(n);
            var o = e(1290),
                r = e(3),
                c = Object(r.a)(a.a, o.a, o.b, !1, null, null, null);
            s.default = c.exports
        },
        4572: function(t, s, e) {
            "use strict";
            e.r(s);
            var i = e(745),
                a = e.n(i);
            for (var n in i)["default"].indexOf(n) < 0 && function(t) {
                e.d(s, t, (function() {
                    return i[t]
                }))
            }(n);
            var o = e(1221),
                r = e(3),
                c = Object(r.a)(a.a, o.a, o.b, !1, null, null, null);
            s.default = c.exports
        },
        4573: function(t, s, e) {
            "use strict";
            e.r(s);
            var i = e(747),
                a = e.n(i);
            for (var n in i)["default"].indexOf(n) < 0 && function(t) {
                e.d(s, t, (function() {
                    return i[t]
                }))
            }(n);
            var o = e(1222),
                r = e(3),
                c = Object(r.a)(a.a, o.a, o.b, !1, null, null, null);
            s.default = c.exports
        },
        4574: function(t, s, e) {
            "use strict";
            e.r(s);
            var i = e(748),
                a = e.n(i);
            for (var n in i)["default"].indexOf(n) < 0 && function(t) {
                e.d(s, t, (function() {
                    return i[t]
                }))
            }(n);
            var o = e(1223),
                r = e(3),
                c = Object(r.a)(a.a, o.a, o.b, !1, null, null, null);
            s.default = c.exports
        },
        5112: function(t, s, e) {
            "use strict";
            e.r(s);
            var i = e(810),
                a = e.n(i);
            for (var n in i)["default"].indexOf(n) < 0 && function(t) {
                e.d(s, t, (function() {
                    return i[t]
                }))
            }(n);
            var o = e(1275),
                r = e(3),
                c = Object(r.a)(a.a, o.a, o.b, !1, null, null, null);
            s.default = c.exports
        },
        5118: function(t, s, e) {
            "use strict";
            e.r(s);
            var i = e(816),
                a = e.n(i);
            for (var n in i)["default"].indexOf(n) < 0 && function(t) {
                e.d(s, t, (function() {
                    return i[t]
                }))
            }(n);
            var o = e(1281),
                r = e(3),
                c = Object(r.a)(a.a, o.a, o.b, !1, null, null, null);
            s.default = c.exports
        },
        5141: function(t, s, e) {
            "use strict";
            e.r(s);
            var i = e(841),
                a = e.n(i);
            for (var n in i)["default"].indexOf(n) < 0 && function(t) {
                e.d(s, t, (function() {
                    return i[t]
                }))
            }(n);
            var o = e(1308),
                r = e(3),
                c = Object(r.a)(a.a, o.a, o.b, !1, null, null, null);
            s.default = c.exports
        },
        728: function(t, s, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = i(e(527)),
                n = e(1164);
            const o = {
                Exchange: "Exchange",
                Stake: "Staking",
                Unstake: "Unstaking",
                Withdraw: "Withdrawing",
                Withdrawal: "Withdrawing",
                Vote: "Voting",
                Revote: "Revoting",
                Claim: "Claiming rewards",
                ClaimADA: "ADA claiming"
            };
            var r = {
                name: "SendCoinResult",
                components: {
                    RateStars: a.default,
                    BaseButton: n.BaseButton
                },
                props: {
                    icon: {
                        type: String,
                        default: ""
                    },
                    coin: {
                        type: Object,
                        default: Object
                    },
                    amount: {
                        type: String,
                        default: ""
                    },
                    txid: {
                        type: String,
                        default: ""
                    },
                    isError: {
                        type: Boolean,
                        default: !1
                    },
                    isSuccess: {
                        type: Boolean,
                        default: !1
                    },
                    message: {
                        type: String,
                        default: ""
                    },
                    errorMessage: {
                        type: String,
                        default: ""
                    },
                    sendType: {
                        type: String,
                        default: "Send"
                    },
                    buttonName: {
                        type: Object,
                        default: null
                    },
                    contactData: {
                        type: Object,
                        default: null
                    },
                    customSuccessfulMessage: {
                        type: String,
                        default: ""
                    }
                },
                data: () => ({
                    copied: !1
                }),
                computed: {
                    errorHeadline() {
                        let t = this.sendType,
                            s = this.coin.ticker;
                        return "Withdrawal" === t ? t = "withdraw" : "ActivateAutoclaim" === t && (t = "activate", s = ""), `Can’t ${t.toLowerCase()} ${s}${this.message} now`
                    },
                    ticker() {
                        return "AWC-986" === this.coin.ticker ? "AWC" : this.coin.ticker
                    },
                    successfulMessage() {
                        if (this.customSuccessfulMessage) return this.customSuccessfulMessage;
                        const t = t => t + " was successfully claimed",
                            s = this.coin.ticker;
                        return "Stake" === this.sendType && ["NEO", "ONG", "KMD"].includes(s) ? t(`${this.amount} ${"NEO"===s?"GAS":s}`) : "Claim" === this.sendType && ["ADA", "TRX"].includes(s) ? t(`${this.amount} ${s}`) : "Claim" === this.sendType && ["XRP"].includes(s) ? t(this.amount + " Spark") : `${this.amount} ${s} was successfully ${this.resultMessage}\n         ${"DOGE"===s?", so excited":""}`
                    },
                    buttonTitle() {
                        if (this.buttonName) return this.buttonName;
                        switch (this.sendType) {
                            case "Claim":
                                return "XRP" === this.coin.ticker ? {
                                    back: "Back to the coin screen",
                                    repeat: "Claim again"
                                } : {
                                    back: "Back to the staking",
                                    repeat: "Send another one"
                                };
                            case "Stake":
                                return {
                                    back: "Back to the staking", repeat: "Stake another one"
                                };
                            case "Unstake":
                                return {
                                    back: "Back to the staking", repeat: "Unstake another one"
                                };
                            case "Activate":
                                return {
                                    back: "Back to the staking", repeat: ""
                                };
                            case "ActivateAutoclaim":
                                return {
                                    back: "Back", repeat: ""
                                };
                            default:
                                return {
                                    back: "Back to the wallet", repeat: "Send another one"
                                }
                        }
                    },
                    resultMessage() {
                        switch (this.sendType) {
                            case "Send":
                                return "sent";
                            case "Stake":
                                return "staked";
                            case "Unstake":
                                return "unstaked";
                            case "Claim":
                                return "claimed";
                            case "Withdrawal":
                                return "withdrawn";
                            default:
                                return "sent"
                        }
                    },
                    version() {
                        return this.$platformVersion.getVersion()
                    }
                },
                methods: {
                    backActions(t) {
                        this.$emit(t)
                    },
                    openTransactionHash() {
                        const {
                            explorer: t
                        } = this.$wallets.getWallet(this.coin.deprecatedParent);
                        this.$electron.shell.openExternal(`${t.webUrl}${this.txid}`)
                    },
                    copyTxid() {
                        this.copied = !0;
                        const {
                            explorer: t
                        } = this.$wallets.getWallet(this.coin.deprecatedParent), s = `${t.webUrl}${this.txid}`;
                        this.$electron.clipboard.writeText(s), setTimeout(() => {
                            this.copied = !1
                        }, 1300)
                    },
                    talkWithSupport() {
                        var t, s, e;
                        const i = (null === (t = this.contactData) || void 0 === t ? void 0 : t.issue) || "Transaction issue (deposit/withdrawal)",
                            a = "ClaimADA" === this.sendType ? this.coin.privateKey.byronAddress : this.$address(this.coin.deprecatedParent),
                            n = `\n-----------------------\nMy ${this.coin.ticker} address:\n${a}`,
                            r = {
                                isNotText: !0,
                                additionalText: "Sending wasn't successful" + n,
                                subject: i
                            };
                        (null === (s = this.contactData) || void 0 === s || null === (e = s.tags) || void 0 === e ? void 0 : e.length) > 0 && (r.tags = this.contactData.tags), o[this.sendType] && (r.additionalText = `${o[this.sendType]} wasn't successful${n}`), ["Activate", "ActivateAutoclaim"].includes(this.sendType) && (r.additionalText = "Activation wasn’t successful" + n), this.$bus.$emit("openSupportPopup", r)
                    }
                }
            };
            s.default = r
        },
        745: function(t, s, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = i(e(527)),
                n = i(e(2134));
            var o = {
                name: "RatePopup",
                components: {
                    RateStars: a.default,
                    AtomicSelect: n.default
                },
                data: () => ({
                    userSubject: "",
                    userRate: 0,
                    userEmail: "",
                    userComment: "",
                    isRatePopup: !1,
                    isValidEmail: !0,
                    isValidComment: !0,
                    isClickSendReview: !1,
                    isSendSuccess: !1,
                    selectLabel: ""
                }),
                watch: {
                    userEmail(t, s) {
                        t !== s && this.isClickSendReview && this.validateEmail()
                    },
                    userComment(t, s) {
                        t !== s && this.isClickSendReview && this.validateComment()
                    }
                },
                mounted() {
                    this.$bus.$on("openRatePopup", t => {
                        this.resetFormState(), this.isRatePopup = !0, this.rateApp(t)
                    }), this.$bus.$on("openRateSuccess", () => this.showClosePopup(!1))
                },
                methods: {
                    resetFormState() {
                        this.userEmail = "", this.userComment = "", this.isClickSendReview = !1, this.isValidEmail = !0, this.isValidComment = !0
                    },
                    setSelect(t) {
                        this.userSubject = t
                    },
                    rateApp(t) {
                        this.userRate = t
                    },
                    validateComment() {
                        this.isValidComment = this.userComment.length > 0
                    },
                    validateEmail() {
                        this.isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(this.userEmail).toLowerCase())
                    },
                    validateForm() {
                        this.validateEmail(), this.validateComment()
                    },
                    sendResult() {
                        if (this.validateForm(), this.isClickSendReview = !0, this.isValidComment && this.isValidEmail) {
                            const t = this.$wallets.hash,
                                s = {
                                    text: this.userComment,
                                    email: this.userEmail,
                                    rating: this.userRate,
                                    subject: this.userSubject,
                                    platform: process.platform,
                                    operatingSystem: process.platform,
                                    appVersion: this.$platformVersion.getVersion(),
                                    atomicId: t
                                };
                            this.$reviews.sendReview(s), this.showClosePopup(), localStorage.setItem("appRate::disabled", "1")
                        }
                    },
                    showClosePopup(t = !0) {
                        this.isRatePopup = !1, setTimeout(() => {
                            this.isRatePopup = !0, this.isSendSuccess = !0, t && setTimeout(() => this.closePopup(), 1e4)
                        }, 250)
                    },
                    closePopup() {
                        this.isSendSuccess = !1, this.isRatePopup = !1
                    },
                    neverRemind() {
                        localStorage.setItem("appRate::disabled", "1"), this.closePopup()
                    }
                }
            };
            s.default = o
        },
        747: function(t, s, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = i(e(2134)),
                n = e(224);
            var o = {
                name: "SupportPopup",
                components: {
                    AtomicSelect: a.default
                },
                data: () => ({
                    tags: [],
                    userTopic: "",
                    userEmail: "",
                    userSubject: "",
                    userComment: "",
                    isValidEmail: !0,
                    isValidSubject: !0,
                    isValidComment: !0,
                    isSendSuccess: !1,
                    isSupportPopup: !1
                }),
                mounted() {
                    this.$bus.$on("openSupportPopup", t => {
                        const s = null != t && t.isNotText ? "" : "\n\n\n\n";
                        this.userComment = null != t && t.additionalText ? `${s}${t.additionalText}` : "", this.isSupportPopup = !0, null != t && t.tags && (this.tags = t.tags), null != t && t.subject && this.setSelect(t.subject), null != t && t.topic && (this.userTopic = t.topic)
                    })
                },
                methods: {
                    resetFormState() {
                        this.isValidEmail = !0, this.isValidSubject = !0, this.isValidComment = !0, this.tags = [], this.userEmail = "", this.userTopic = "", this.userSubject = "", this.userComment = ""
                    },
                    closeSupportPopup() {
                        this.isSendSuccess = !1, this.isSupportPopup = !1, this.resetFormState()
                    },
                    setSelect(t) {
                        this.userSubject = t, this.validateSubject()
                    },
                    validateComment() {
                        this.isValidComment = this.userComment.length > 0
                    },
                    validateEmail() {
                        this.isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(this.userEmail).toLowerCase())
                    },
                    validateSubject() {
                        this.isValidSubject = this.userSubject.length > 0
                    },
                    validateForm() {
                        return this.validateEmail(), this.validateSubject(), this.validateComment(), this.isValidComment && this.isValidEmail && this.isValidSubject
                    },
                    sendResult() {
                        if (this.validateForm()) {
                            const t = this.$wallets.hash,
                                s = this.userComment,
                                e = {
                                    email: this.userEmail,
                                    rating: 5,
                                    subject: this.userSubject,
                                    platform: process.platform,
                                    operatingSystem: process.platform,
                                    appVersion: n.APP_VERSION,
                                    atomicId: t,
                                    text: s
                                };
                            this.tags.length > 0 && (e.tags = this.tags), this.userTopic && (e.topic = this.userTopic), this.$reviews.sendReview(e), this.isSupportPopup = !1, setTimeout(() => {
                                this.isSupportPopup = !0, this.isSendSuccess = !0, setTimeout(() => this.closeSupportPopup(), 1e4)
                            }, 250)
                        }
                    }
                }
            };
            s.default = o
        },
        748: function(t, s, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(38),
                n = e(298),
                o = i(e(4575)),
                r = i(e(4576)),
                c = i(e(83)),
                l = e(246);
            var d = {
                name: "UpdatesPopup",
                components: {
                    CoinIcon: c.default,
                    ClockIcon: l.ClockIcon
                },
                data: () => ({
                    percent: 0,
                    status: "available",
                    isUpdateAvailable: !1,
                    isMinimumScreen: !1,
                    isUnix: !1,
                    assets: [],
                    features: "",
                    version: "",
                    bugsFixed: ""
                }),
                async beforeMount() {
                    await this.fetchSettings()
                },
                mounted() {
                    "darwin" !== process.platform && "win32" !== process.platform ? (this.isUnix = !0, this.checkStatus()) : (n.ipcRenderer.send("checking-for-update"), n.ipcRenderer.on("update-available", () => {
                        this.status = "available", this.isUpdateAvailable = !0
                    }), n.ipcRenderer.on("download-progress", (t, {
                        percent: s
                    }) => {
                        this.status = "downloading", this.$nextTick(() => {
                            this.percent = Math.min(95, s)
                        })
                    }), n.ipcRenderer.on("update-downloaded", () => {
                        this.percent = 100, this.$nextTick(() => {
                            this.status = "restart"
                        })
                    }))
                },
                methods: {
                    close() {
                        "downloading" === this.status || "restart" === this.status ? this.isMinimumScreen = !0 : this.isUpdateAvailable = !1
                    },
                    download() {
                        n.ipcRenderer.send("download-initiated")
                    },
                    restart() {
                        n.ipcRenderer.send("restart-initiated")
                    },
                    checkStatus() {
                        (new r.default).getStatus().then(t => {
                            t.data.version && (this.isUpdateAvailable = 1 === (0, o.default)(t.data.version, this.$platformVersion.getVersion()))
                        }).catch(() => {
                            this.close()
                        })
                    },
                    async fetchSettings() {
                        try {
                            const t = await a.ConfigManager.get("new-release-features-desktop", !0),
                                {
                                    assets: s = null,
                                    features: e = null,
                                    bugsFixed: i = null,
                                    version: n = null
                                } = t;
                            this.version = n, this.assets = s, this.features = e, this.bugsFixed = i
                        } catch (t) {
                            console.log("Fetch update settings failed: ", t)
                        }
                    }
                }
            };
            s.default = d
        },
        802: function(t, s, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(38),
                n = e(31),
                o = e(30),
                r = i(e(76)),
                c = i(e(106)),
                l = i(e(691)),
                d = i(e(92)),
                u = i(e(5110)),
                h = i(e(114)),
                p = e(224);
            const m = t => `Maximum Memo length is ${t} characters`,
                v = t => `You'll need more ${t} to make this transaction`,
                _ = ["XRP", "EOS", "VET", "VTHO", "TRX", "BTT", "HBAR", "THETA", "TFUEL"],
                C = ["MATIC"],
                f = ["LUNC", "LUNA", "TRX"];
            var w = {
                name: "SendCoin",
                components: {
                    Edit: r.default,
                    EditAmount: c.default,
                    CoinDropdown: l.default,
                    SendCoinResult: d.default,
                    FeeConstructorOld: u.default,
                    AvailableAndFeeAmounts: h.default
                },
                mixins: [o.DisabledCoinMixin, o.SettingsMixin, o.FeeMixin, o.ExchangeMixin],
                props: {
                    coin: {
                        type: Object,
                        default: null
                    },
                    txParams: {
                        type: Object,
                        default: null
                    }
                },
                data: () => ({
                    inputs: {
                        address: "",
                        custom: "",
                        amount: "",
                        password: "",
                        nonce: ""
                    },
                    inputsError: {
                        address: "",
                        custom: "",
                        amount: "",
                        password: "",
                        nonce: ""
                    },
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
                    isChangeCoin: !1,
                    isOnSendAll: !1,
                    isSendAllClick: !1,
                    txid: null,
                    availableBalance: "",
                    currencies: [],
                    nodeGasPrice: null,
                    minGasLimit: "21000",
                    defaultGasPrice: null,
                    defaultGasLimit: null,
                    xmrHasFrozenBalance: !1,
                    utxos: null,
                    customFeesUsed: !1,
                    isBuyCoin: !1,
                    isSendCoinDisable: !1,
                    estimatedTime: "",
                    feeConfig: null,
                    filteredCurrenciesExchangeIds: new Set
                }),
                computed: {
                    ...(0, n.mapGetters)(["currenciesExchange"]),
                    feeWallet() {
                        var t, s, e;
                        let i = this.$wallets.getWallet(null !== (t = null === (s = this.coin) || void 0 === s || null === (e = s.getFeeTicker) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t ? t : this.coin.deprecatedParent);
                        return ["ARB", "OP"].includes(this.coin.deprecatedParent) && (i = this.$wallets.getWallet(this.coin.deprecatedParent)), i
                    },
                    icon() {
                        return this.$iconClass(this.coin)
                    },
                    parent() {
                        return "THETA" === this.coin.deprecatedParent ? this.$wallets.getWallet(this.coin.deprecatedParent) : this.feeWallet
                    },
                    isAvailableForBuyOrExchange() {
                        var t;
                        return !C.includes(this.coin.deprecatedParent) && (this.$buy.isAvailable(this.coin) || this.filteredCurrenciesExchangeIds.has(null === (t = this.coin) || void 0 === t ? void 0 : t.id))
                    },
                    placeholderPaymentId() {
                        return "Click here to paste " + this.getPlaceholderPaymentId(this.coin.ticker, this.coin.deprecatedParent)
                    },
                    editPlaceholderPaymentId() {
                        return `Type ${this.getPlaceholderPaymentId(this.coin.ticker,this.coin.deprecatedParent)} here`
                    },
                    dropdownCoins() {
                        return [...this.$wallets].filter(t => "EOS" === t.ticker ? t.activated : t.ticker !== this.coin.ticker && !p.DISABLED_COINS.includes(t.deprecatedParent))
                    },
                    paternalCoin() {
                        return "VTHO" === this.coin.ticker ? this.coin : "VET" === this.coin.ticker ? this.$wallets.getWallet("VTHO", "atomic") : this.coin.deprecatedParent
                    },
                    isCustomFeeSupported() {
                        return ["BTC", "LTC", "ETH", "BSC", "AVAX", "MATIC", "FLR", "FTM", "FIL", "OP"].includes(this.coin.deprecatedParent)
                    },
                    isDisabled() {
                        var t, s, e, i;
                        const a = +(null === (t = this.customGas) || void 0 === t ? void 0 : t[0]) < 1 || +(null === (s = this.customGas) || void 0 === s ? void 0 : s[1]) < +this.minGasLimit || !this.isFeeEnough,
                            n = this.satPerByte < 1;
                        return null !== (e = null === (i = {
                            OP: a,
                            LTC: n,
                            BTC: n,
                            ETH: a,
                            BSC: a,
                            FTM: a,
                            FLR: a,
                            MATIC: a,
                            FIL: a,
                            ARB: a,
                            USDT: a
                        }) || void 0 === i ? void 0 : i[this.coin.deprecatedParent]) && void 0 !== e ? e : !this.isFeeEnough
                    },
                    validationPattern() {
                        return {
                            HBAR: /^[A-Za-z0-9]{1,100}$/
                        } [this.coin.ticker]
                    }
                },
                watch: {
                    "inputs.address"() {
                        this.debounce(() => {
                            this.domainAddress = "", this.isSuccess || this.isUpdateCoin || this.validateAddress().then(async () => {
                                "Please check the address" !== this.inputsError.address && await this.updateBalanceAndFee()
                            })
                        })
                    },
                    "inputs.custom"() {
                        this.debounce(async () => {
                            this.isSuccess || this.isUpdateCoin || (this.validateCustom(), "TON" === this.coin.id && await this.updateBalanceAndFee())
                        })
                    },
                    "inputs.amount"() {
                        this.debounce(async () => {
                            this.isSuccess || this.isUpdateCoin || this.validateAmount() && this.validateAll() && f.includes(this.coin.deprecatedParent) && await this.updateBalanceAndFee()
                        })
                    },
                    fees(t) {
                        this.coin.availableBalance(this.coin.toMinimalUnit(t)).then(t => {
                            this.availableBalance = t || "0"
                        })
                    },
                    "fee.fee"(t, s) {
                        s || this.availableForFee()
                    },
                    "coin.divisibleBalance"() {
                        this.coin.availableBalance(this.coin.toMinimalUnit(this.fees)).then(t => {
                            this.availableBalance = t || "0"
                        })
                    }
                },
                async mounted() {
                    const t = new Set(["BSC", "ETH", "LUNA", "THETA"]);
                    [this.coin.ticker, this.coin.deprecatedParent].some(s => t.has(s)) || (this.utxos = await this.getUtxos()), await this.updateEstimatedTimeCfg(), await this.updateBalanceAndFee(), this.txParams && (this.inputs.amount = this.txParams.amount, this.inputs.address = this.txParams.otherSideAddress, this.inputs.nonce = this.txParams.nonce), this.$bus.$on("close-send-coin", this.backToWallets), this.xmrHasFrozenBalance = await this.$history.xmrHasFrozenBalance(), this.filteredCurrenciesExchangeIds = new Set(await this.getFilteredCurrencies())
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    ...(0, n.mapActions)(["changeAccountEOSError"]),
                    setDefaultFee() {
                        this.$bus.$emit("set-default-fee")
                    },
                    async updateEstimatedTimeCfg() {
                        const t = {
                            AVAX: "avax-c-gas-price"
                        } [this.coin.ticker];
                        if (t) this.feeConfig = await a.ConfigManager.get(t);
                        else {
                            var s, e;
                            const t = await (null === (s = (e = this.parent).getEstimatedTimeCfg) || void 0 === s ? void 0 : s.call(e, !0));
                            t && (this.feeConfig = t)
                        }
                    },
                    async removeReplacedTx() {
                        this.txParams && this.txParams.nonce === this.inputs.nonce && (await this.$history.removeTransaction({
                            ticker: this.coin.ticker,
                            txid: this.txParams.txid
                        }), this.$wallets.removeTransaction(this.txParams))
                    },
                    async updateBalanceAndFee(t = this.inputs.amount, s = this.inputs.address) {
                        await this.getFee(t, s), this.availableForFee(), await this.setAvailableBalance(this.fees), await this.updateEstimatedTime()
                    },
                    async updateEstimatedTime() {
                        if (["ETH", "BTC", "BSC"].includes(this.coin.ticker) && !["ARB", "OP"].includes(this.coin.deprecatedParent)) {
                            var t;
                            let s = "1";
                            if (["ETH", "BSC"].includes(this.coin.ticker)) {
                                const t = await this.coin.getGasPrice();
                                s = (Number(t) / 1e9).toString().replace(/\.[0-9]+[1-9]/, "")
                            }
                            const e = await (null === (t = this.coin) || void 0 === t ? void 0 : t.getEstimatedTimeTx(s, "label"));
                            this.setEstimatedTime(e)
                        } else this.setEstimatedTime(null)
                    },
                    async setAvailableBalance() {
                        ["ETH", "BSC", "AVAX"].includes(this.coin.deprecatedParent) && !this.txParams && (this.inputs.nonce = String(this.parent.nonce));
                        try {
                            this.availableBalance = await this.coin.availableBalance(this.feeWallet.id === this.coin.id ? this.coin.toMinimalUnit(this.fees) : "0") || "0"
                        } catch (t) {
                            this.availableBalance = "0"
                        }
                    },
                    async toggleCustomFee() {
                        this.$ga.event("User Actions", "Custom fee", {
                            clientID: this.$ga.customParams.uid
                        }), this.isRate && await this.updateBalanceAndFee(), this.isRate = !this.isRate
                    },
                    setAllAvailableBalance() {
                        this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, this.inputs.amount = this.availableBalance
                    },
                    async changeFee(t) {
                        this.customFeesUsed = !0, this.isOnSendAll && (this.inputs.amount = await this.coin.availableBalance(this.coin.toMinimalUnit(t))), this.setFee(t.toString()), await this.availableForFee()
                    },
                    setEstimatedTime(t) {
                        this.estimatedTime = t
                    },
                    async availableForFee() {
                        if (this.isFeeEnough = !0, this.coin instanceof a.Token || "VET" === this.coin.ticker || this.feeWallet.id !== this.coin.id) {
                            const t = new this.feeWallet.BN(this.feeWallet.toMinimalUnit(this.fees || this.fee.fee)),
                                {
                                    indivisibleBalance: s
                                } = this.feeWallet;
                            ["OP", "ARB"].includes(this.coin.deprecatedParent) ? this.isFeeEnough = s.gt(t) : this.isFeeEnough = await this.coin.isAvailableForFee(t, s)
                        }
                        if ("ONT" === this.coin.ticker && "BSC" !== this.coin.deprecatedParent) {
                            const {
                                divisibleBalance: t
                            } = this.$wallets.getWallet("ONG");
                            this.isFeeEnough = Number(t) >= Number(this.fees)
                        }
                    },
                    closeCoinDropdown() {
                        this.isChangeCoin = !1
                    },
                    toggleDropdown() {
                        event.preventDefault(), this.isChangeCoin = !this.isChangeCoin
                    },
                    selectCoin(t) {
                        this.isUpdateCoin = !0, this.$emit("changeCoin", t), this.closeCoinDropdown(), this.clearInputs(), this.$nextTick(async () => {
                            await this.updateBalanceAndFee(), await this.updateEstimatedTimeCfg(), this.isUpdateCoin = !1
                        })
                    },
                    async validateAddress() {
                        this.inputsError.address = "";
                        const t = this.$address(this.coin.deprecatedParent);
                        try {
                            const t = await this.parent.validateAddress(this.inputs.address);
                            t || (this.inputsError.address = "Please check the address"), "string" == typeof t && (this.domainAddress = t)
                        } catch (t) {
                            this.inputsError.address = "Please check the address"
                        }
                        return "" === this.inputs.address ? this.inputsError.address = "Address can't be blank" : _.includes(this.coin.ticker) && t === this.inputs.address && (this.inputsError.address = "You can't send funds to your own address"), "" === this.inputsError.address
                    },
                    validateCustom() {
                        const t = this.feeWallet.getUserTicker() || this.coin.getUserTicker();
                        return this.inputsError.custom = "", "XMR" !== t || /^([A-z0-9]{64})?$/.test(this.inputs.custom) ? "HBAR" === t && this.inputs.custom.length > 50 ? this.inputsError.custom = m(50) : "BNB" === t && this.inputs.custom.length > 64 ? this.inputsError.custom = m(64) : ["LUNC", "LUNA"].includes(t) && this.inputs.custom.length > 256 ? this.inputsError.custom = m(256) : "OSMO" !== t || /^[0-9]*$/.test(this.inputs.custom) ? ["EOS", "XLM", "KIN", "BNB", "XEM", "ATOM", "BAND", "HBAR", "LUNC", "LUNA", "KAVA", "TON", "FET", "INJ"].includes(t) || /^[0-9]*$/.test(this.inputs.custom) || (this.inputsError.custom = "Destination tag must be a number") : this.inputsError.custom = "Memo must be a number" : this.inputsError.custom = "Destination tag must be a 64 hexadecimal", ["XLM"].includes(this.feeWallet.getUserTicker()) && this.inputs.custom.length > 28 ? (this.isSendCoinDisable = !0, this.inputsError.custom = "XLM memo must be 28 characters long") : this.isSendCoinDisable = !1, "" === this.inputsError.custom
                    },
                    isDust(t) {
                        if (this.coin.dustAmount) {
                            const s = new this.coin.BN(this.coin.dustAmount),
                                e = new this.coin.BN(this.coin.toMinimalUnit(t)),
                                i = new this.coin.BN(this.coin.toMinimalUnit(this.availableBalance)).sub(e);
                            if (i.gt(new this.coin.BN(0)) && i.lt(s)) return ((t, s) => `Minimal change is ${s} ${t}. Try to send another amount `)(this.coin.ticker, this.coin.toCurrencyUnit(this.coin.dustAmount));
                            if (e.lt(s)) return ((t, s) => `Minimum amount for send is ${s} ${t}`)(this.coin.ticker, this.coin.toCurrencyUnit(this.coin.dustAmount))
                        }
                        return !1
                    },
                    async validateAmount() {
                        var t;
                        this.isBuyCoin = !1, this.inputsError.amount = "";
                        const s = this.isDust(this.inputs.amount);
                        if ("" === this.inputs.amount || 0 === Number(this.inputs.amount) ? this.inputsError.amount = "Amount can't be blank" : this.coin.balance ? /^[0-9]+(\.[0-9]+)?$/.test(this.inputs.amount) ? s ? this.inputsError.amount = s : "MATIC" === this.coin.ticker ? (await this.coin.isAvailableForSend("0", this.fee.fee) || (this.inputsError.amount = v(this.coin.getFeeTicker()), this.isBuyCoin = this.isAvailableForBuyOrExchange), +this.inputs.amount > +this.coin.balance && (this.inputsError.amount = v(this.coin.getUserTicker()), this.isBuyCoin = this.isAvailableForBuyOrExchange)) : await this.coin.isAvailableForSend(this.inputs.amount, (null === (t = this.feeWallet) || void 0 === t ? void 0 : t.id) === this.coin.id ? this.fees : "0") || (this.inputsError.amount = v(this.coin.ticker), this.isBuyCoin = this.isAvailableForBuyOrExchange) : this.inputsError.amount = "Enter correct amount" : this.inputsError.amount = "Block explorer is currently unavailable", "function" == typeof this.coin.isDustAmount) {
                            const t = await this.coin.isDustAmount(this.inputs.amount, this.availableBalance);
                            t && (this.inputsError.amount = t)
                        }
                        return "" === this.inputsError.amount
                    },
                    validatePassword() {
                        return this.inputsError.password = "", "" === this.inputs.password ? this.inputsError.password = "Password can't be blank" : this.inputs.password !== this.$storage.password && (this.inputsError.password = "Wrong password"), "" === this.inputsError.password
                    },
                    validateGas() {
                        return !["ETH", "BSC", "AVAX"].includes(this.coin.ticker) || (!this.customFeesUsed || !!Number(this.customGas[0]) && !!Number(this.customGas[1]))
                    },
                    async validateAll() {
                        let t = !1;
                        try {
                            await this.validateAddress() || (t = !0), this.validateCustom() || (t = !0), await this.validateAmount() || (t = !0), this.validateGas() || (t = !0)
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
                        const t = this.coin instanceof a.Token;
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            this.isPasswordShow = !1, this.sending = !0;
                            const s = this.coin.toMinimalUnit(this.fees),
                                e = {
                                    txStatType: a.TX_STAT_TYPES.SEND,
                                    address: this.domainAddress || this.inputs.address,
                                    amount: this.coin.toMinimalUnit(this.inputs.amount),
                                    memo: this.inputs.custom,
                                    userFee: s,
                                    userGasPrice: this.customGas[0] || 1e9 * this.defaultGasPrice,
                                    gasLimit: this.customGas[1] || this.defaultGasLimit,
                                    isSendAll: this.isOnSendAll,
                                    nonce: this.inputs.nonce
                                };
                            "ONT" === this.coin.ticker && "BSC" !== this.coin.deprecatedParent && (e.asset = this.coin.ticker);
                            let i = {};
                            try {
                                let s;
                                this.coin instanceof a.Token && (i = await this.coin.createTransaction(e)), s = await this.parent[t ? "createTokenTransaction" : "createTransaction"](t ? i : e).catch(t => {
                                    this.$wallets.logger.error({
                                        type: "Send",
                                        error: t.toString(),
                                        url: "wallet.createTransaction",
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                });
                                const n = await this.parent.sendTransaction(s).catch(t => {
                                    console.log(t), this.$wallets.logger.error({
                                        type: "Send",
                                        error: t.toString(),
                                        url: "wallet.sendTransaction",
                                        currency: this.coin.getUserTicker()
                                    }), this.isError = !0
                                });
                                if ("EOS" === this.coin.ticker && n.error) return this.changeAccountEOSError(n.error), this.$ga.event("Send Coin", "send tx failed", {
                                    clientID: this.$ga.customParams.uid
                                }), this.isError = !0, void(this.sending = !1);
                                this.txid = n.txid, this.isSuccess = !0, n && n.txid && (await this.parent.checkTransaction({
                                    ...e,
                                    txid: n.txid,
                                    coin: this.coin,
                                    fee: this.fee.fee
                                }).catch(t => console.warn(t)), this.removeReplacedTx()), this.$ga.event("Send Coin", "send tx succeed", {
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
                    backToForm() {
                        this.clearInputs(), setTimeout(() => {
                            this.isSuccess = !1, this.updateBalanceAndFee()
                        }, 100)
                    }
                }
            };
            s.default = w
        },
        810: function(t, s, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(30),
                n = i(e(76)),
                o = i(e(106)),
                r = i(e(92)),
                c = i(e(114));
            var l = {
                name: "ClaimADA",
                components: {
                    Edit: n.default,
                    EditAmount: o.default,
                    SendCoinResult: r.default,
                    AvailableAndFeeAmounts: c.default
                },
                mixins: [a.CurrencyConverter, a.SettingsMixin, a.FeeMixin],
                props: {
                    coin: {
                        type: Object,
                        default: null
                    }
                },
                data: () => ({
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
                    feeBalance: "0",
                    inputTypePassword: "password",
                    isPasswordShow: !1,
                    initSend: !1,
                    sending: !1,
                    isClaimAvailable: !0,
                    isError: !1,
                    isSuccess: !1,
                    txid: null,
                    availableBalance: 0,
                    legacyUtxo: null
                }),
                computed: {
                    icon() {
                        return `${this.$iconClass(this.coin)} icon-${this.coin.ticker.toLowerCase()}`
                    },
                    parent() {
                        return this.$wallets.getWallet(this.coin.deprecatedParent)
                    }
                },
                async mounted() {
                    this.inputs.address = String(this.coin.address), this.legacyUtxo = await this.coin.getLegacyAddressUnspentOutputs();
                    const t = this.legacyUtxo.reduce((t, s) => t.add(new this.coin.BN(s.amount)), new this.coin.BN("0")),
                        s = await this.coin.getFee({
                            amount: t,
                            address: this.coin.address,
                            utxos: this.legacyUtxo
                        });
                    this.feeBalance = this.coin.toCurrencyUnit(s);
                    const e = await this.coin.getLegacyAddressAvailableBalance({
                        legacyUtxo: this.legacyUtxo,
                        address: this.coin.address
                    });
                    this.isClaimAvailable = Number(e) > 0, this.availableBalance = this.isClaimAvailable ? this.coin.toCurrencyUnit(e) : 0, this.inputs.amount = String(this.availableBalance), this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    validatePassword() {
                        return this.inputsError.password = "", "" === this.inputs.password ? this.inputsError.password = "Password can't be blank" : this.inputs.password !== this.$storage.password && (this.inputsError.password = "Wrong password"), "" === this.inputsError.password
                    },
                    async showPasswordForm() {
                        this.initSend = !0, this.isClaimAvailable && (this.isPasswordShow = !0, setTimeout(() => {
                            this.$refs.confirmPassword.setFocus()
                        }, 300)), this.initSend = !1
                    },
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            this.isPasswordShow = !1, this.sending = !0;
                            try {
                                const t = await this.coin.createClaimTransaction(this.legacyUtxo),
                                    s = await this.coin.sendTransaction(t);
                                this.txid = s.txid
                            } catch (t) {
                                console.log(t), this.isError = !0
                            }
                            this.isSuccess = !this.isError, this.sending = !1
                        }
                    },
                    clearInputs() {
                        this.inputs.amount = "", this.inputs.address = "", this.inputs.password = "", this.inputsError.amount = "", this.inputsError.address = "", this.inputsError.password = ""
                    },
                    backFromPassword() {
                        this.inputTypePassword = "password", this.inputs.password = "", this.isPasswordShow = !1
                    },
                    tryAgain() {
                        this.isError = !1, this.inputs.password = "", setTimeout(() => {
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
            s.default = l
        },
        816: function(t, s, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = e(30),
                n = i(e(76)),
                o = i(e(92)),
                r = i(e(114));
            var c = {
                name: "ClaimFlair",
                components: {
                    Edit: n.default,
                    SendCoinResult: o.default,
                    AvailableAndFeeAmounts: r.default
                },
                mixins: [a.CurrencyConverter, a.SettingsMixin, a.FeeMixin],
                props: {
                    coin: {
                        type: Object,
                        default: null
                    }
                },
                data: () => ({
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
                    isPasswordShow: !1,
                    initSend: !1,
                    sending: !1,
                    isClaimAvailable: !0,
                    isError: !1,
                    isSuccess: !1,
                    txid: null,
                    availableBalance: 0,
                    legacyUtxo: null
                }),
                computed: {
                    icon() {
                        return `${this.$iconClass(this.coin.ticker)} icon-${this.coin.ticker.toLowerCase()}`
                    },
                    parent() {
                        return this.$wallets.getWallet(this.coin.deprecatedParent)
                    }
                },
                async mounted() {
                    const t = this.$wallets.getWallet("ETH").address;
                    this.inputs.address = this.$wallets.getWallet("ETH").address, this.inputs.message = "02000000000000000000000000" + t.slice(2).toUpperCase(), this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    validatePassword() {
                        return this.inputsError.password = "", "" === this.inputs.password ? this.inputsError.password = "Password can't be blank" : this.inputs.password !== this.$storage.password && (this.inputsError.password = "Wrong password"), "" === this.inputsError.password
                    },
                    async showPasswordForm() {
                        this.initSend = !0, this.isClaimAvailable && (this.isPasswordShow = !0, setTimeout(() => {
                            this.$refs.confirmPassword.setFocus()
                        }, 300)), this.initSend = !1
                    },
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            this.isPasswordShow = !1, this.sending = !0;
                            try {
                                const t = await this.coin.createClaimFlareTransaction(this.inputs.message),
                                    s = await this.coin.sendTransaction(t);
                                this.txid = s.txid
                            } catch (t) {
                                console.log(t), this.isError = !0
                            }
                            this.isSuccess = !this.isError, this.sending = !1
                        }
                    },
                    clearInputs() {
                        this.inputs.amount = "", this.inputs.address = "", this.inputs.password = "", this.inputsError.amount = "", this.inputsError.address = "", this.inputsError.password = ""
                    },
                    backFromPassword() {
                        this.inputTypePassword = "password", this.inputs.password = "", this.isPasswordShow = !1
                    },
                    tryAgain() {
                        this.isError = !1, this.inputs.password = "", setTimeout(() => {
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
            s.default = c
        },
        823: function(t, s, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = i(e(687)),
                n = i(e(691)),
                o = i(e(5124)),
                r = e(38),
                c = i(e(686));
            const l = ["ETH", "BNB", "TRX", "THETA", "MATIC", "OP", "ARB"],
                d = ["DOT"];
            var u = {
                name: "ReceiveCoin",
                components: {
                    CoinDropdown: n.default,
                    HederaActivation: o.default,
                    TokenTag: c.default
                },
                props: {
                    coin: {
                        type: Object,
                        default: null
                    }
                },
                data: () => ({
                    copied: !1,
                    isActivating: !1,
                    isChangeCoin: !1,
                    isWalletActive: !1
                }),
                computed: {
                    qrCodeImage() {
                        const t = new a.default({
                            value: this.$address(this.coin.deprecatedParent)
                        });
                        return t.set({
                            size: 200,
                            padding: 5
                        }), t.toDataURL("image/jpeg")
                    },
                    getMessage() {
                        switch (this.coin.deprecatedParent) {
                            case "BNB":
                                return "BNB BEP-2";
                            case "ETH":
                                return "Ethereum ERC-20";
                            case "TRX":
                                return "TRX";
                            case "THETA":
                                return "THETA";
                            case "ARB":
                                return "ARB";
                            case "MATIC":
                                return "Polygon";
                            default:
                                return ""
                        }
                    },
                    icon() {
                        return this.$iconClass(this.coin)
                    },
                    dropdownCoins() {
                        return [...this.$wallets].filter(t => "EOS" === t.ticker ? t.activated : t.ticker !== this.coin.ticker)
                    },
                    isToken() {
                        return this.coin instanceof r.Token
                    },
                    unspendableBalance() {
                        return this.coin.toCurrencyUnit(this.coin.unspendableBalance)
                    },
                    isNeedWarnings() {
                        return l.includes(this.coin.deprecatedParent) && this.isToken
                    },
                    isHaveUnspendableBalance() {
                        return Number(this.coin.unspendableBalance) > 0
                    },
                    isRequiredActivate() {
                        return Number(this.coin.activationAmount) > 0 || d.includes(this.coin.ticker)
                    },
                    unspendableBalanceTitle() {
                        const t = `${this.unspendableBalance} ${this.coin.ticker} is an unspendable balance`;
                        switch (this.coin.ticker) {
                            case "ALGO":
                            case "XTZ":
                            case "XRP":
                            case "XLM":
                                return t + " required to activate your account.";
                            case "NEAR":
                                return t + " reserved for storage.";
                            default:
                                return t + "."
                        }
                    },
                    requiredActivateTitle() {
                        switch (this.coin.ticker) {
                            case "DOT":
                                return "1 DOT is required to activate your account.";
                            case "NEAR":
                                return this.coin.toCurrencyUnit(this.coin.activationAmount) + " NEAR is required to activate your account.";
                            default:
                                return ""
                        }
                    }
                },
                mounted() {
                    this.isWalletActive = this.$activeWalletsList.isActive(this.coin), this.$bus.$on("close-info-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-info-coin", this.backToWallets)
                },
                methods: {
                    activateWallet() {
                        this.isWalletActive = !0, this.$activeWalletsList.activate(this.coin)
                    },
                    changeActivation(t) {
                        this.isActivating = t
                    },
                    closeDropdown() {
                        this.isChangeCoin = !1
                    },
                    toggleDropdown() {
                        event.preventDefault(), this.isChangeCoin = !this.isChangeCoin
                    },
                    async selectCoin(t) {
                        this.isWalletActive = this.$activeWalletsList.isActive(t), this.$emit("changeCoin", t), this.closeDropdown()
                    },
                    backToWallets() {
                        this.$emit("closePopup")
                    },
                    copyAddress() {
                        this.$electron.clipboard.writeText(this.$address(this.coin.deprecatedParent)), this.copied = !0, setTimeout(() => {
                            this.copied = !1
                        }, 1e3)
                    }
                }
            };
            s.default = u
        },
        841: function(t, s, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = i(e(61)),
                n = i(e(360)),
                o = e(30),
                r = i(e(76)),
                c = i(e(168)),
                l = i(e(92)),
                d = i(e(114)),
                u = i(e(106));
            const h = /[0-9A-Fa-f]{6}/g;
            var p = {
                name: "SendStakeADA",
                components: {
                    Edit: r.default,
                    SendCoinResult: l.default,
                    EditAmount: u.default,
                    AvailableAndFeeAmounts: d.default,
                    Dropdown: c.default
                },
                mixins: [o.CurrencyConverter, o.SettingsMixin, o.SendStakeMixin, o.BuyMixin],
                props: {
                    sendType: {
                        type: String,
                        default: "Stake"
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
                    filter: "",
                    customGas: [],
                    domainAddress: "",
                    inputTypePassword: "password",
                    isPasswordShow: !1,
                    isCustomShow: !1,
                    isFromCustom: !1,
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
                    customPool: "",
                    customPoolName: "",
                    customPoolError: "",
                    customPoolSelected: !1,
                    validators: []
                }),
                computed: {
                    disableButton() {
                        return this.customPoolSelected ? this.customPoolError || !this.customPool || !this.customPoolName : !this.stakingValidator
                    },
                    availableValidators() {
                        if (!this.coin.balances || !this.coin.balances.staking || "Send" === this.sendType) return [];
                        const t = this.$staking.getStakingInterface(this.coin.ticker);
                        if ("Unstake" === this.sendType) {
                            const s = s => {
                                const e = t.getValidator(s),
                                    i = t.validators.find(t => t.address === s);
                                return e && e.name || i && i.description.moniker
                            };
                            return Object.entries(this.coin.balances.staking.validators).map(t => {
                                const e = s(t[0]);
                                return {
                                    primary: e || `${t[0].substr(0,4)}...${t[0].substr(-4)}`,
                                    additional: `${t[1].shares} ${this.coin.ticker}`,
                                    validatorName: e || t[0],
                                    validatorAddress: t[1].address
                                }
                            })
                        }
                        return t.validators.filter(t => t.visibility).map(({
                            name: t,
                            estimatedRoi: s,
                            address: e
                        }) => ({
                            primary: t,
                            additional: s + "%",
                            validatorName: t,
                            validatorAddress: e,
                            validatorReward: s
                        }))
                    },
                    stakingReward() {
                        var t, s, e, i, a, n;
                        return null !== (t = null !== (s = null !== (e = null === (i = this.stakingValidator) || void 0 === i ? void 0 : i.reward) && void 0 !== e ? e : null === (a = this.stakingValidator) || void 0 === a ? void 0 : a.validatorReward) && void 0 !== s ? s : null === (n = this.stakingValidator) || void 0 === n ? void 0 : n.estimatedRoi) && void 0 !== t ? t : 0
                    },
                    stakingValidator() {
                        const t = this.selectedStakingValidator ? this.$staking.getStakingInterface(this.coin.ticker).getValidator(this.selectedStakingValidator) : this.$staking.getStakingInterface(this.coin.ticker).getValidator(this.defaultValidator);
                        return t || this.$staking.getStakingInterface(this.coin.ticker).validators[0]
                    },
                    defaultValidator() {
                        const t = this.stakingSettings.find(({
                                ticker: t
                            }) => this.coin.ticker === t).defaultValidator || this.stakingSettings[0].name || "" || localStorage.getItem(`selected::${this.coin.ticker}::validator`),
                            s = this.availableValidators.find(({
                                primary: s
                            }) => s === t);
                        return s && s.primary || this.availableValidators && this.availableValidators[0].primary
                    },
                    stakingProfit() {
                        return new a.default(this.stakingReward).multipliedBy(this.availableBalance)
                    },
                    icon() {
                        return `${this.$iconClass(this.coin.ticker)} icon-${this.coin.ticker.toLowerCase()}`
                    },
                    placeholderPaymentId() {
                        return this.getPlaceholderPaymentId(this.coin.ticker, this.coin.deprecatedParent)
                    }
                },
                watch: {
                    async customPool(t) {
                        await this.validateStakePoolId(t) ? this.customPoolError = "" : this.customPoolError = "Invalid pool address"
                    }
                },
                beforeMount() {
                    this.validators = this.$staking.getStakingInterface(this.coin.ticker).validators
                },
                async mounted() {
                    await this.updateBalanceAndFee(), this.$bus.$on("close-send-coin", this.backToWallets)
                },
                beforeDestroy() {
                    this.$bus.$off("close-send-coin", this.backToWallets)
                },
                methods: {
                    validateStakePoolId: t => 56 === t.length && h.test(t),
                    sortByField(t) {
                        this.activeSortField === t ? this.isSortASC = !this.isSortASC : this.activeSortField = t
                    },
                    adaClaimingTimeout() {
                        "Claim" === this.sendType && (this.$set(this.coin, "isClaiming", !0), setTimeout(() => {
                            this.coin.isClaiming = !1
                        }, 6e4))
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
                        this.setAllAvailableBalance()
                    },
                    setAllAvailableBalance() {
                        this.isSendAllClick = !this.isSendAllClick, this.isOnSendAll = !0, "Claim" === this.sendType ? this.inputs.amount = this.coin.toCurrencyUnit(this.coin.balances.rewards) : this.inputs.amount = this.availableBalance || "0"
                    },
                    setCustomGas(t) {
                        this.customGas = t
                    },
                    async changeFee(t) {
                        this.isOnSendAll && (this.inputs.amount = await this.coin.availableBalance(this.coin.toMinimalUnit(t))), this.fee.fee = t.toString() || "0", this.availableForFee()
                    },
                    async availableForFee() {
                        this.isFeeEnough = await this.coin.isAvailableForSend(this.fee.fee, this.fee.fee)
                    },
                    async getFee() {
                        let t = await this.coin.getFee();
                        "Claim" !== this.sendType && this.coin.balances && 0 === Number(this.coin.balances.staking.total) && (t = t.add(new this.coin.BN(this.coin.toMinimalUnit(2)))), this.fee.fee = this.coin.toCurrencyUnit(t), this.fee.ticker = this.feeTicker(), this.availableForFee()
                    },
                    closeValidatorsDropdown() {
                        this.isChangeValidator = !1
                    },
                    selectValidator(t) {
                        if (this.customPoolSelected = !t, this.customPoolSelected) return this.selectedStakingValidator = null, localStorage.setItem(`selected::${this.coin.ticker}::validator`, this.customPoolName), this.$bus.$emit(`select::${this.coin.ticker}::validator`, this.customPoolName), this.validators.push({
                            name: this.customPoolName,
                            address: this.customPool
                        }), this.selectedStakingValidator = this.customPoolName, void this.closeValidatorsDropdown();
                        this.selectedStakingValidator = t, localStorage.setItem(`selected::${this.coin.ticker}::validator`, t), this.$bus.$emit(`select::${this.coin.ticker}::validator`, t), this.closeValidatorsDropdown()
                    },
                    selectCustomValidator() {
                        this.selectValidator(), this.isFromCustom = !0, this.isCustomShow = !1
                    },
                    async validateAddress() {
                        const t = await this.coin.validateAddress(this.inputs.address);
                        return this.inputsError.address = "", "" === this.inputs.address ? this.inputsError.address = "Address can't be blank" : t || (this.inputsError.address = "Please check the address"), "string" == typeof t && (this.domainAddress = t), "" === this.inputsError.address
                    },
                    validateCustom() {
                        return this.inputsError.custom = "", /^[0-9]*$/.test(this.inputs.custom) || (this.inputsError.custom = "Destination tag must be a number"), "" === this.inputsError.custom
                    },
                    validatePassword() {
                        return this.inputsError.password = "", "" === this.inputs.password ? this.inputsError.password = "Password can't be blank" : this.inputs.password !== this.$storage.password && (this.inputsError.password = "Wrong password"), "" === this.inputsError.password
                    },
                    async validateAmount() {
                        return await this.coin.availableBalance() > 0
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
                    }, e = !1) {
                        if (!t) return 0;
                        const i = this.$rates.data[s];
                        if (!i) return 0;
                        const n = new a.default(t).multipliedBy(i[this.fiatRate] && i[this.fiatRate].rate || 0).toFixed(8);
                        return "BTC" === this.fiatRate ? n : n > 1 ? parseFloat(this.roundFiat(n)).toFixed(2) : n < 1e-6 ? n : e ? parseFloat(this.roundFiat(n)).toFixed(4) : this.roundFiat(n)
                    },
                    showCustomForm() {
                        this.customPoolSelected = !0, this.isCustomShow = !this.isCustomShow
                    },
                    async showPasswordForm() {
                        this.isFeeEnough && (this.isPasswordShow = !0, setTimeout(() => {
                            this.$refs.confirmPassword.setFocus()
                        }, 300))
                    },
                    async sendCoins() {
                        if (this.$ga.event("User Actions", "Send Coin", {
                                clientID: this.$ga.customParams.uid
                            }), this.validatePassword()) {
                            this.isError = !1, this.isPasswordShow = !1, this.sending = !0, this.inputs.address = this.stakingValidator.address, this.inputs.custom = "";
                            const t = this.stakingValidator.address;
                            try {
                                let s;
                                s = "Claim" === this.sendType ? await this.coin.claim() : await this.coin.stake(t), this.txid = s.txid, this.isSuccess = !0, "ADA" === this.coin.ticker && this.adaClaimingTimeout(), "Claim" !== this.sendType && this.saveSuccessStaking(), this.$ga.event("Send Coin", "send tx succeed", {
                                    clientID: this.$ga.customParams.uid
                                })
                            } catch (t) {
                                this.$ga.event("Send Coin", "send tx failed", {
                                    clientID: this.$ga.customParams.uid
                                }), this.$wallets.logger.error({
                                    type: "Send",
                                    error: t.toString(),
                                    url: "wallet.sendTransaction",
                                    currency: this.coin.getUserTicker()
                                }), console.log(t), this.isSuccess = !1, this.isError = !0
                            }
                            this.sending = !1
                        }
                    },
                    clearInputs() {
                        this.customGas = [], this.domainAddress = "", this.inputs.custom = "", this.inputs.password = "", this.inputsError.address = "", this.inputsError.custom = "", this.inputsError.amount = "", this.inputsError.password = "", this.isRate = !1, this.isOnSendAll = !1, this.inputs.amount = this.availableBalance
                    },
                    backFromCustom() {
                        this.customPoolSelected = !1, this.customPool = "", this.customPoolError = "", this.isCustomShow = !1
                    },
                    backFromPassword() {
                        this.inputTypePassword = "password", this.inputs.password = "", this.isPasswordShow = !1, this.isFromCustom && (this.isFromCustom = !1, this.isCustomShow = !0)
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
        92: function(t, s, e) {
            "use strict";
            e.r(s);
            var i = e(728),
                a = e.n(i);
            for (var n in i)["default"].indexOf(n) < 0 && function(t) {
                e.d(s, t, (function() {
                    return i[t]
                }))
            }(n);
            var o = e(1212),
                r = e(3),
                c = Object(r.a)(a.a, o.a, o.b, !1, null, null, null);
            s.default = c.exports
        }
    }
]);