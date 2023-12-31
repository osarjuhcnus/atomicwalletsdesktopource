(window.webpackJsonp = window.webpackJsonp || []).push([
    [210], {
        1213: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("AtomicPopup", {
                        staticClass: "activate-coin",
                        on: {
                            close: t.handleNavigate
                        }
                    }, [a("transition", {
                        attrs: {
                            name: "fade",
                            mode: "out-in"
                        }
                    }, [t.currentComponent === t.COMPONENT_TYPES.activate ? a("div", {
                        staticClass: "activate-coin__activation"
                    }, [a("div", {
                        staticClass: "activate-coin__icon"
                    }, [t._t("icon")], 2), t._v(" "), a("div", {
                        staticClass: "activate-coin__info"
                    }, [a("h2", {
                        staticClass: "activate-coin__info-title new-text-headline"
                    }, [t._v("\n            " + t._s(t.headline) + "\n          ")]), t._v(" "), a("p", {
                        staticClass: "activate-coin__info-description new-text-medium2"
                    }, [t._v("\n            " + t._s(t.text) + "\n          ")])]), t._v(" "), a("div", {
                        staticClass: "activate-coin__rows"
                    }, [t._t("form")], 2), t._v(" "), a("transition", {
                        attrs: {
                            name: "slide-left"
                        }
                    }, [a("div", {
                        staticClass: "activate-coin__error new-text-red2 new-text-medium"
                    }, [t._t("error")], 2)]), t._v(" "), a("div", {
                        staticClass: "activate-coin__actions"
                    }, [t._t("actions")], 2)], 1) : t.currentComponent === t.COMPONENT_TYPES.password ? a("div", {
                        staticClass: "activate-coin__password"
                    }, [a("h2", {
                        staticClass: "new-text-extra-large"
                    }, [t._v("\n          Send transaction\n        ")]), t._v(" "), a("Edit", {
                        attrs: {
                            type: "password",
                            placeholder: "Password",
                            focus: "",
                            isShowPassword: "",
                            error: t.password.error
                        },
                        on: {
                            enterPressed: t.handleValidatePassword
                        },
                        model: {
                            value: t.password.value,
                            callback: function(e) {
                                t.$set(t.password, "value", e)
                            },
                            expression: "password.value"
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "activate-coin__password-submit"
                    }, [a("button", {
                        staticClass: "button normal hover-white",
                        on: {
                            click: function(e) {
                                return t.handleChangeComponent(t.COMPONENT_TYPES.activate)
                            }
                        }
                    }, [t._v("\n            Back\n          ")]), t._v(" "), a("button", {
                        staticClass: "button",
                        on: {
                            click: t.handleValidatePassword
                        }
                    }, [t._v("\n            Confirm\n          ")])])], 1) : t.currentComponent === t.COMPONENT_TYPES.result ? a("div", {
                        staticClass: "activate-coin__result"
                    }, [t.transaction.isLoading ? a("div", {
                        staticClass: "activate-coin__loading"
                    }, [a("div", {
                        staticClass: "activate-coin__loading-info"
                    }, [a("CoinIcon", {
                        attrs: {
                            wallet: t.coin
                        }
                    }), t._v(" "), a("h2", {
                        staticClass: "new-title-extra-extra-large"
                    }, [t._v("\n              Sending\n            ")])], 1), t._v(" "), a("div", {
                        staticClass: "activate-coin__loading-loader loading"
                    })]) : a("SendCoinResult", t._b({
                        on: {
                            tryAgain: function(e) {
                                return t.handleChangeComponent(t.COMPONENT_TYPES.activate)
                            },
                            backToWallets: t.handleNavigate
                        }
                    }, "SendCoinResult", t.transaction, !1))], 1) : t._e()])], 1)], 1)
                },
                n = []
        },
        1214: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("WrapperActivate", {
                        attrs: {
                            stage: t.currentStage,
                            text: t.text,
                            headline: t.headline,
                            coin: t.coin,
                            transaction: Object.assign({}, t.transaction, t.transactionAdditionalInfo, {
                                customSuccessfulMessage: "Staking account is active. You can stake your " + t.coin.ticker + " now!"
                            })
                        },
                        on: {
                            forceChangeComponent: t.handleChangeStage,
                            confirmPassword: t.handleActivateCoin,
                            navigate: t.handleNavigate
                        },
                        scopedSlots: t._u([{
                            key: "icon",
                            fn: function() {
                                return [a("CoinIcon", {
                                    attrs: {
                                        wallet: t.coin
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "form",
                            fn: function() {
                                return [a("div", {
                                    staticClass: "flex align-center activate-coin__rows-item"
                                }, [a("div", {
                                    staticClass: "new-text-medium new-text-gray"
                                }, [t._v("\n        Activation address\n      ")]), t._v(" "), a("div", {
                                    staticClass: "flex align-center",
                                    staticStyle: {
                                        width: "100%"
                                    }
                                }, [a("div", {
                                    staticClass: "new-text-medium",
                                    staticStyle: {
                                        position: "relative"
                                    }
                                }, [a("span", {
                                    staticClass: "activate-coin__rows--activation-address"
                                }, [t._v("\n            " + t._s(t.activationAddress) + "\n          ")]), t._v(" "), a("transition", {
                                    attrs: {
                                        name: "fade"
                                    }
                                }, [t.copied ? a("div", {
                                    staticClass: "message"
                                }, [t._v("\n              Address is copied to clipboard\n            ")]) : t._e()])], 1), t._v(" "), a("icon", {
                                    staticStyle: {
                                        cursor: "pointer",
                                        width: "24px",
                                        height: "24px",
                                        "margin-left": "auto"
                                    },
                                    attrs: {
                                        name: "copy-square-twice"
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.copyPayment.apply(null, arguments)
                                        }
                                    }
                                })], 1)]), t._v(" "), a("div", {
                                    staticClass: "flex align-center activate-coin__rows-item"
                                }, [a("div", {
                                    staticClass: "new-text-medium new-text-gray"
                                }, [t._v("\n        Network fee\n      ")]), t._v(" "), a("div", {
                                    staticClass: "new-text-medium flex align-center"
                                }, [a("span", [t._v("\n          " + t._s(t.fee) + " " + t._s(t.coin.feeTicker) + "\n        ")]), t._v(" "), a("span", {
                                    staticClass: "new-text-gray",
                                    staticStyle: {
                                        "margin-left": "8px"
                                    }
                                }, [t._v("\n          " + t._s(t.fiatFee) + " " + t._s(t.fiatRate) + "\n        ")])])])]
                            },
                            proxy: !0
                        }, {
                            key: "error",
                            fn: function() {
                                return [t.feeEnough ? t._e() : [t._v("\n      " + t._s("You should have at least " + t.fee + " " + t.coin.feeTicker + " to pay network fee") + "\n    ")]]
                            },
                            proxy: !0
                        }, {
                            key: "actions",
                            fn: function() {
                                return [a("BaseButton", {
                                    attrs: {
                                        type: "primary-desktop",
                                        disabled: !t.feeEnough
                                    },
                                    on: {
                                        click: function(e) {
                                            t.feeEnough && t.handleChangeStage("password")
                                        }
                                    }
                                }, [t._v("\n      Send\n    ")]), t._v(" "), a("BaseButton", {
                                    attrs: {
                                        type: "secondary-desktop"
                                    },
                                    on: {
                                        click: t.handleNavigate
                                    }
                                }, [t._v("\n      Back\n    ")])]
                            },
                            proxy: !0
                        }])
                    })
                },
                n = []
        },
        1215: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("WrapperActivate", {
                        attrs: {
                            stage: t.currentStage,
                            text: t.text,
                            headline: t.headline,
                            coin: t.coin,
                            transaction: Object.assign({}, t.transaction, t.transactionAdditionalInfo, {
                                customSuccessfulMessage: t.coin.name + "Drops Autoclaim is active now! <br /> The next drop takes place on " + t.nextDrop + "."
                            })
                        },
                        on: {
                            forceChangeComponent: t.handleChangeStage,
                            confirmPassword: t.handleActivateCoin,
                            navigate: t.handleNavigate
                        },
                        scopedSlots: t._u([{
                            key: "icon",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "activate-coin__icon--gift"
                                }, [i("img", {
                                    attrs: {
                                        src: a(1166),
                                        width: "32",
                                        height: "32"
                                    }
                                })])]
                            },
                            proxy: !0
                        }, {
                            key: "form",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "flex align-center activate-coin__rows-item"
                                }, [i("div", {
                                    staticClass: "new-text-medium new-text-gray"
                                }, [t._v("\n        Network fee\n      ")]), t._v(" "), i("div", {
                                    staticClass: "new-text-medium flex align-center"
                                }, [i("span", [t._v("\n          " + t._s(t.fee) + " " + t._s(t.coin.feeTicker) + "\n        ")]), t._v(" "), i("span", {
                                    staticClass: "new-text-gray",
                                    staticStyle: {
                                        "margin-left": "8px"
                                    }
                                }, [t._v("\n          " + t._s(t.fiatFee) + " " + t._s(t.fiatRate) + "\n        ")])])]), t._v(" "), i("div", {
                                    staticClass: "flex align-center activate-coin__rows-item"
                                }, [i("div", {
                                    staticClass: "new-text-medium new-text-gray"
                                }, [t._v("\n        Next drop\n      ")]), t._v(" "), i("div", {
                                    staticClass: "new-text-medium flex align-center"
                                }, [i("span", [t._v("\n          " + t._s(t.nextDrop) + "\n        ")]), t._v(" "), i("span", {
                                    staticClass: "new-text-gray",
                                    staticStyle: {
                                        "margin-left": "8px",
                                        color: "#1F9EFF",
                                        cursor: "pointer"
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.$electron.shell.openExternal("https://support.atomicwallet.io/article/355-how-do-i-claim-flaredrops ")
                                        }
                                    }
                                }, [t._v("\n          More info\n        ")])])])]
                            },
                            proxy: !0
                        }, {
                            key: "error",
                            fn: function() {
                                return [t.feeEnough || t.isActivateAutoclaimDrops ? t._e() : [t._v("\n      " + t._s("You should have at least " + t.fee + " " + t.coin.feeTicker + " to pay network fee") + "\n    ")]]
                            },
                            proxy: !0
                        }, {
                            key: "actions",
                            fn: function() {
                                return [t.isActivateAutoclaimDrops ? t._e() : i("BaseButton", {
                                    attrs: {
                                        type: "primary-desktop",
                                        disabled: !t.feeEnough
                                    },
                                    on: {
                                        click: function(e) {
                                            t.feeEnough && t.handleChangeStage("password")
                                        }
                                    }
                                }, [t._v("\n      Activate\n    ")]), t._v(" "), i("BaseButton", {
                                    attrs: {
                                        type: t.isActivateAutoclaimDrops ? "secondary-desktop" : "primary-desktop"
                                    },
                                    on: {
                                        click: t.handleNavigate
                                    }
                                }, [t._v("\n      Back\n    ")])]
                            },
                            proxy: !0
                        }])
                    })
                },
                n = []
        },
        1217: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "sidebar-balance"
                    }, [a("div", {
                        class: ["sidebar-balance__wrap", {
                            "sidebar-balance__wrap--loading": t.isUpdatingData
                        }],
                        on: {
                            click: t.goToPortfolio
                        }
                    }, [a("PortfolioChart"), t._v(" "), a("div", {
                        ref: "counter",
                        staticClass: "sidebar-balance__amount"
                    })], 1), t._v(" "), a("div", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: function() {
                                return t.selectActiveFiat = !1
                            },
                            expression: "() => (selectActiveFiat = false)"
                        }],
                        staticClass: "sidebar-balance__fiat",
                        class: {
                            active: t.selectActiveFiat
                        },
                        on: {
                            click: t.toggleFiatRate
                        }
                    }, [t.isUpdatingData ? a("div", {
                        staticClass: "sidebar-balance__loader"
                    }, [a("div", {
                        staticClass: "loading"
                    })]) : t._e(), t._v(" "), a("span", {
                        staticClass: "sidebar-balance__fiat-label"
                    }, [t._v("\n      " + t._s(t.fiatRate) + "\n    ")]), t._v(" "), a("FiatDropdown", {
                        class: {
                            visible: t.selectActiveFiat
                        },
                        on: {
                            selectFiatCoin: t.selectFiatCallback
                        }
                    })], 1)])
                },
                n = []
        },
        1219: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("aside", {
                        attrs: {
                            id: "aside"
                        }
                    }, [i("img", {
                        staticClass: "logo",
                        attrs: {
                            src: a(1168)
                        },
                        on: {
                            click: t.goToPortfolio
                        }
                    }), t._v(" "), i("SidebarBalance"), t._v(" "), t._e(), t._v(" "), i("ul", {
                        staticClass: "menu"
                    }, [t._l(t.menu, (function(e, a) {
                        return i("router-link", {
                            key: a,
                            attrs: {
                                to: "/" + e.route,
                                activeClass: "active",
                                tag: "li"
                            },
                            nativeOn: {
                                click: function(a) {
                                    return t.routerLinkClick(e.route)
                                }
                            }
                        }, [i("icon", {
                            class: "icon-" + e.icon,
                            attrs: {
                                name: e.icon
                            }
                        }), t._v(" "), i("AtomicNotifyPoint", {
                            attrs: {
                                UID: "menu-" + e.name
                            }
                        }, [i("span", {
                            staticClass: "menu__text__item",
                            attrs: {
                                "data-test-id": "main_" + e.icon
                            }
                        }, [t._v("\n          " + t._s(e.name) + "\n        ")])])], 1)
                    })), t._v(" "), i("li", {
                        staticClass: "exit",
                        on: {
                            click: function(e) {
                                return t.$emit("close")
                            }
                        }
                    }, [i("icon", {
                        attrs: {
                            name: "exit"
                        }
                    }), t._v(" "), i("span", {
                        staticClass: "menu__text__item",
                        attrs: {
                            "data-test-id": "main_exit_id"
                        }
                    }, [t._v("\n        Exit\n      ")])], 1)], 2)], 1)
                },
                n = []
        },
        1220: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.outsideClick,
                            expression: "outsideClick"
                        }],
                        staticClass: "a-select",
                        on: {
                            click: function(e) {
                                t.isOpen = !t.isOpen
                            }
                        }
                    }, [a("div", {
                        staticClass: "a-select__default new-text-medium",
                        class: {
                            "a-select__error": t.isError
                        }
                    }, [t._v("\n    " + t._s(t.activeLabel || (t.isError ? "*" : "") + t.label) + "\n  ")]), t._v(" "), a("div", {
                        staticClass: "a-select__icon"
                    }, [a("SelectArrow")], 1), t._v(" "), t.isOpen ? a("div", {
                        staticClass: "a-select__dropdown"
                    }, t._l(t.list, (function(e, i) {
                        return a("div", {
                            key: i,
                            staticClass: "a-select__dropdown-item new-text-medium",
                            on: {
                                click: function(a) {
                                    return t.setActiveLabel(e)
                                }
                            }
                        }, [t._v("\n      " + t._s(e) + "\n    ")])
                    })), 0) : t._e()])
                },
                n = []
        },
        1224: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("svg", {
                        attrs: {
                            fill: "none",
                            height: "208",
                            viewBox: "0 0 208 208",
                            width: "208",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [a("circle", {
                        attrs: {
                            cx: "104",
                            cy: "104",
                            fill: "url(#paint0_linear)",
                            r: "50"
                        }
                    }), t._v(" "), a("g", {
                        attrs: {
                            filter: "url(#filter0_d)"
                        }
                    }, [a("path", {
                        class: "membership-logo-color-" + t.status,
                        attrs: {
                            "clip-rule": "evenodd",
                            d: "M129.995 124L115.16 83.4867C113.278 78.7566 109.768 76.0791 105.102 76.0017V76C105.068 76 105.034 76.0002 105 76.0004C104.964 76.0001 104.929 76 104.894 76V76.0018C100.228 76.0791 96.7183 78.7566 94.8359 83.4867L80.0004 124L89.187 120.815L101.86 86.2073C102.632 84.2928 103.522 83.6038 104.999 83.5736C106.474 83.6043 107.365 84.2934 108.136 86.2073L120.809 120.815L129.995 124ZM111 110C111 113.314 108.314 116 105 116C101.686 116 99 113.314 99 110C99 106.686 101.686 104 105 104C108.314 104 111 106.686 111 110Z",
                            fill: "white",
                            "fill-rule": "evenodd"
                        }
                    })]), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "118",
                            cy: "6",
                            opacity: "0.8",
                            r: "6"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "100",
                            cy: "20",
                            opacity: "0.4",
                            r: "3"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "192",
                            cy: "53",
                            opacity: "0.8",
                            r: "6"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "170",
                            cy: "48",
                            opacity: "0.4",
                            r: "3"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "202",
                            cy: "140",
                            opacity: "0.8",
                            r: "6"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "140",
                            cy: "202",
                            opacity: "0.8",
                            r: "6"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "53",
                            cy: "192",
                            opacity: "0.8",
                            r: "6"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "192",
                            cy: "119",
                            opacity: "0.4",
                            r: "3"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "150",
                            cy: "181",
                            opacity: "0.4",
                            r: "3"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "76",
                            cy: "187",
                            opacity: "0.4",
                            r: "3"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "6",
                            cy: "118",
                            opacity: "0.8",
                            r: "6"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "24",
                            cy: "133",
                            opacity: "0.4",
                            r: "3"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "35",
                            cy: "35",
                            opacity: "0.8",
                            r: "6"
                        }
                    }) : t._e(), t._v(" "), t.edges ? a("circle", {
                        class: "membership-color-" + t.status,
                        attrs: {
                            cx: "35",
                            cy: "59",
                            opacity: "0.4",
                            r: "3"
                        }
                    }) : t._e(), t._v(" "), a("defs", [a("filter", {
                        attrs: {
                            id: "filter0_d",
                            "color-interpolation-filters": "sRGB",
                            filterUnits: "userSpaceOnUse",
                            height: "49",
                            width: "49.9951",
                            x: "80.0004",
                            y: "76"
                        }
                    }, [a("feFlood", {
                        attrs: {
                            "flood-opacity": "0",
                            result: "BackgroundImageFix"
                        }
                    }), t._v(" "), a("feColorMatrix", {
                        attrs: {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        }
                    }), t._v(" "), a("feOffset", {
                        attrs: {
                            dy: "1"
                        }
                    }), t._v(" "), a("feColorMatrix", {
                        attrs: {
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        }
                    }), t._v(" "), a("feBlend", {
                        attrs: {
                            in2: "BackgroundImageFix",
                            mode: "normal",
                            result: "effect1_dropShadow"
                        }
                    }), t._v(" "), a("feBlend", {
                        attrs: {
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow",
                            mode: "normal",
                            result: "shape"
                        }
                    })], 1), t._v(" "), a("linearGradient", {
                        attrs: {
                            id: "paint0_linear",
                            gradientUnits: "userSpaceOnUse",
                            x1: "104",
                            x2: "104",
                            y1: "54",
                            y2: "154"
                        }
                    }, [a("stop", {
                        class: "membership-color-" + t.status
                    }), t._v(" "), a("stop", {
                        class: "membership-color-" + t.status + "-gradient",
                        attrs: {
                            offset: "1"
                        }
                    })], 1)], 1)])
                },
                n = []
        },
        1266: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "table-row with-hover coin-row flex-wrap center space-between",
                        on: {
                            click: t.clickHandler
                        }
                    }, [a("div", {
                        staticClass: "item"
                    }, [a("div", {
                        staticClass: "flex-wrap center"
                    }, [a("CoinIcon", {
                        attrs: {
                            wallet: t.coin,
                            "data-test-id": "icon_" + t.coin.name
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "m-l-10"
                    }, [a("AtomicNotifyPoint", {
                        attrs: {
                            UID: t.notifyUID
                        }
                    }, [a("p", {
                        staticClass: "text-big",
                        class: {
                            "tooltip-hover": t.coin.name.length > (t.isNotify ? t.nameMinLength : t.nameMaxLength)
                        },
                        attrs: {
                            "data-test-id": "wallet_coin_fullname"
                        }
                    }, [t._v("\n            " + t._s(t._f("trimText")(t.coin.name, t.isNotify ? t.nameMinLength : t.nameMaxLength)) + "\n            "), t.coin.name.length > (t.isNotify ? t.nameMinLength : t.nameMaxLength) ? a("span", {
                        staticClass: "tooltip"
                    }, [t._v("\n              " + t._s(t.coin.name) + "\n            ")]) : t._e()])])], 1)], 1)]), t._v(" "), a("div", {
                        staticClass: "item item_currency",
                        attrs: {
                            tooltip: t.$options.filters.formatFinance(t.coin.fixedBalance)
                        }
                    }, [a("p", {
                        staticClass: "text-big"
                    }, [a("span", {
                        staticClass: "text-big",
                        attrs: {
                            "data-test-id": "wallet_coin_balance"
                        }
                    }, [t._v(t._s(t._f("formatFinanceTrim")(t.coin.fixedBalance, t.maxTrimLength - t.coin.ticker.length)) + "  ")]), a("span", {
                        staticClass: "text-middle text-gray",
                        attrs: {
                            "data-test-id": "wallet_coin_name"
                        }
                    }, [t._v(t._s(t.coin.ticker))])])]), t._v(" "), a("div", {
                        staticClass: "item item_currency",
                        attrs: {
                            tooltip: t.formatNumber(t.coin.value, {
                                currency: t.fiatRate
                            })
                        }
                    }, [t.isPlaceholder ? a("p", {
                        staticClass: "text-big text-gray"
                    }, [t._v("\n      --.--\n    ")]) : a("p", {
                        staticClass: "text-big"
                    }, [a("span", {
                        staticClass: "text-big",
                        domProps: {
                            innerHTML: t._s("" + t.fiatCharacter)
                        }
                    }), a("span", {
                        staticClass: "text-big",
                        attrs: {
                            "data-test-id": "wallet_coin_value"
                        }
                    }, [t._v(t._s(t._f("formatFinanceTrim")(t.coin.value)))])])]), t._v(" "), a("div", {
                        staticClass: "item item_currency text-right",
                        attrs: {
                            tooltip: t.formatNumber(t.coin.price, {
                                currency: t.fiatRate
                            })
                        }
                    }, [t.isPlaceholder ? a("p", {
                        staticClass: "text-big text-gray"
                    }, [t._v("\n      --.--\n    ")]) : a("p", {
                        staticClass: "text-big text-gray text-currency",
                        attrs: {
                            "data-test-id": "wallet_coin_price"
                        },
                        domProps: {
                            innerHTML: t._s("" + t.fiatCharacter + t.$options.filters.formatFinance(t.coin.price))
                        }
                    })]), t._v(" "), a("div", {
                        staticClass: "item"
                    }, [t.isPlaceholder ? a("p", {
                        staticClass: "text-big text-gray"
                    }, [t._v("\n      --.--\n    ")]) : a("p", {
                        staticClass: "text-middle",
                        class: [{
                            "text-green": t.coin.change > 0
                        }, {
                            "text-danger": t.coin.change < 0
                        }, {
                            "text-gray": 0 === t.coin.change
                        }],
                        attrs: {
                            "data-test-id": "wallet_coin_change"
                        }
                    }, [t._v("\n      " + t._s(t.coin.change > 0 ? "+" : "") + t._s(t.coin.change.toFixed(2)) + "%\n    ")])]), t._v(" "), a("div", {
                        staticClass: "item"
                    }, [t.isPlaceholder ? a("p", {
                        staticClass: "text-big text-gray"
                    }, [t._v("\n      --.--\n    ")]) : a("p", {
                        staticClass: "text-middle text-gray"
                    }, [t._v("\n      " + t._s(t.coin.portfolioToShow) + "%\n    ")])]), t._v(" "), a("div", {
                        staticClass: "item"
                    }, [t.isPlaceholder ? a("p", {
                        staticClass: "text-big text-gray"
                    }, [t._v("\n      --.--\n    ")]) : a("p", {
                        staticClass: "text-middle text-gray",
                        domProps: {
                            innerHTML: t._s("" + t.fiatCharacter + t.$options.filters.balanceFormat(t.coin.marketCap))
                        }
                    })]), t._v(" "), a("div", {
                        staticClass: "item chart-item"
                    }, [t.isChartDataLoading[t.chartDataMainEndpoint] ? a("div", {
                        staticClass: "loading"
                    }) : a("Chart", {
                        key: t.coin.ticker + "+" + t.coin.name + "-chart",
                        attrs: {
                            coin: t.coin,
                            data: t.getData
                        }
                    })], 1), t._v(" "), t.isPortfolio ? t._e() : a("div", {
                        staticClass: "item"
                    })])
                },
                n = []
        },
        1278: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "article__card"
                    }, [t.isLoadingImage || t.backupImage ? a("ImagePreview", {
                        attrs: {
                            isVideo: t.isYoutube
                        }
                    }) : t._e(), t._v(" "), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isLoadingImage,
                            expression: "!isLoadingImage"
                        }]
                    }, [a("CachedImage", {
                        staticClass: "image_cover",
                        attrs: {
                            src: t.article.previewUrl.desktop,
                            alt: t.article.title || "article image"
                        },
                        on: {
                            error: t.handleImageError,
                            load: function(e) {
                                t.isLoadingImage = !1
                            },
                            loadFromCache: function(e) {
                                t.isLoadingImage = !1
                            }
                        }
                    }), t._v(" "), t.isYoutube && !t.backupImage ? a("YoutubePlay", {
                        staticClass: "youtube_button"
                    }) : t._e()], 1)], 1)
                },
                n = []
        },
        1280: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "about-tab"
                    }, [a("div", {
                        staticClass: "about-tab__gallery"
                    }, t._l(t.articles, (function(e, i) {
                        return a("CoinArticle", {
                            key: i,
                            attrs: {
                                coin: t.coin,
                                article: e
                            }
                        })
                    })), 1), t._v(" "), a("div", {
                        staticClass: "m-t-40"
                    })])
                },
                n = []
        },
        1283: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return t.tx && t.tx.walletid ? a("div", {
                        staticClass: "table-row with-hover",
                        attrs: {
                            "data-test-id": "wall_pay"
                        },
                        on: {
                            click: t.toggleItem
                        }
                    }, [a("div", {
                        staticClass: "flex-wrap flex-wrap-fix"
                    }, [a("div", {
                        staticClass: "item"
                    }, [a("div", {
                        staticClass: "flex-wrap center",
                        attrs: {
                            "data-test-id": "wall_pay_sent"
                        }
                    }, [a("CoinIcon", {
                        attrs: {
                            wallet: t.currentCoin
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "m-l-10"
                    }, [(t.tx.direction || t.isOperation) && t.isTxSign ? a("span", {
                        staticClass: "text-big text-green text-operator"
                    }, [t._v("+")]) : !t.tx.direction && t.isTxSign ? a("span", {
                        staticClass: "text-big text-red text-operator negative-operator"
                    }, [t._v("-")]) : t._e(), t._v(" "), a("span", {
                        staticClass: "text-big",
                        class: {
                            "unsigned-amount": !t.isTxSign
                        }
                    }, [t._v(" " + t._s(t._f("formatFinance")(t._f("formatBigAmount")(t.tx.amount))))]), t._v(" "), a("span", {
                        staticClass: "text-big text-gray"
                    }, [t._v("\n            " + t._s(t.amountUnit) + "\n          ")])])], 1)]), t._v(" "), a("div", {
                        staticClass: "item"
                    }, [a("p", {
                        staticClass: "text-small text-gray"
                    }, [t._v("\n        " + t._s(t.isOperation ? "Operation" : t.tx.direction ? "From" : "To") + "\n      ")]), t._v(" "), t.activeOpened ? a("div", [a("a", {
                        staticClass: "text-link text-word-break",
                        attrs: {
                            "data-test-id": "wall_pay_to"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.copyToClipboard(t.description)
                            }
                        }
                    }, [t._v("\n          " + t._s(t.description) + "\n        ")]), t._v(" "), t.isOperation ? t._e() : a("p", {
                        staticClass: "text-small text-gray m-t-20"
                    }, [t._v("\n          " + t._s(t.tx.direction ? "To" : "From") + "\n        ")]), t._v(" "), t.isOperation ? t._e() : a("a", {
                        staticClass: "text-link text-word-break",
                        attrs: {
                            "data-test-id": "wall_pay_from"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.copyToClipboard(t.tx.direction ? t.address : t.parentAddress)
                            }
                        }
                    }, [t._v("\n          " + t._s(t.tx.direction ? t.address : t.parentAddress) + "\n        ")]), t._v(" "), t.tx.memo && t.tx.memo.length && "undefined" !== t.tx.memo ? a("p", {
                        staticClass: "text-small text-gray m-t-20",
                        attrs: {
                            "data-test-id": "wall_pay_placeholder"
                        }
                    }, [t._v("\n          " + t._s(t.placeholderPaymentId) + "\n        ")]) : t._e(), t._v(" "), t.tx.memo && t.tx.memo.length && "undefined" !== t.tx.memo ? a("a", {
                        staticClass: "text-link text-word-break",
                        attrs: {
                            "data-test-id": "wall_pay_memo"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.copyToClipboard(t.tx.memo)
                            }
                        }
                    }, [t._v("\n          " + t._s(t.tx.memo) + "\n        ")]) : t._e(), t._v(" "), null !== t.tx.fee && Number(t.tx.fee) >= 0 && (!t.tx.direction || t.isOperation) ? a("div", {
                        staticClass: "flex align-flex-end"
                    }, [a("div", [a("p", {
                        staticClass: "text-small text-gray m-t-20"
                    }, [t._v("\n              Network Fee\n            ")]), t._v(" "), a("p", {
                        staticClass: "text-link text-word-break m-t-4",
                        attrs: {
                            "data-test-id": "wall_pay_fee"
                        }
                    }, [t._v("\n              " + t._s(t._f("formatFinance")(t._f("formatBigAmount")(t.tx.fee))) + " " + t._s(t.tx.feeTicker || t.currentCoin.deprecatedParent) + "\n            ")])]), t._v(" "), t.isResendButton ? a("button", {
                        staticClass: "button resend-button m-l-30",
                        attrs: {
                            "data-test-id": "wall_pay_resend"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.resendTx.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n            Resend\n          ")]) : t._e()]) : t._e(), t._v(" "), a("p", {
                        staticClass: "text-small text-gray m-t-20"
                    }, [t._v("\n          Hash\n        ")]), t._v(" "), a("div", [a("a", {
                        staticClass: "text-link-underline text-word-break",
                        attrs: {
                            "data-test-id": "wall_pay_hash"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.open.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n            " + t._s(t.tx.txid) + "\n          ")]), t._v(" "), [a("div", {
                        staticClass: "flex"
                    }, [t.tx.nonce && "undefined" !== t.tx.nonce ? a("p", {
                        staticClass: "text-small text-gray m-t-5 m-r-10",
                        style: {
                            color: "#858FAD"
                        }
                    }, [t._v("\n                Nonce:\n              ")]) : t._e(), t._v(" "), t.tx.nonce && "undefined" !== t.tx.nonce ? a("a", {
                        staticClass: "text-word-break text-small text-gray m-t-5",
                        style: {
                            color: "#858FAD"
                        },
                        attrs: {
                            "data-test-id": "wall_pay_nonce"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.copyToClipboard(t.tx.nonce)
                            }
                        }
                    }, [t._v("\n                " + t._s(t.tx.nonce) + "\n              ")]) : t._e()])]], 2), t._v(" "), a("div", {
                        staticClass: "button-center"
                    }, [a("button", {
                        staticClass: "button copy",
                        attrs: {
                            "data-test-id": "wall_pay_copy"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.copyToClipboard(t.tx.txid, !1)
                            }
                        }
                    }, [t._v("\n            Copy\n          ")])])]) : a("a", {
                        staticClass: "text-link text-word-break",
                        attrs: {
                            "data-test-id": "wall_pay_to"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.copyToClipboard(t.description)
                            }
                        }
                    }, [t._v("\n        " + t._s(t.formatAddress(t.description)) + "\n      ")])]), t._v(" "), a("div", {
                        staticClass: "item"
                    }, [a("p", {
                        staticClass: "text-middle text-gray text-right",
                        attrs: {
                            "data-test-id": "wall_pay_time"
                        }
                    }, [t._v("\n        " + t._s(t._f("moment")(t.tx.datetime, "YYYY/MM/DD HH:mm")) + "\n      ")])]), t._v(" "), a("div", {
                        staticClass: "item"
                    }, [t.isPendingTx ? a("div", {
                        staticClass: "history-status"
                    }) : t.isSuccessTx ? a("SuccessMark", {
                        attrs: {
                            color: "green"
                        }
                    }) : a("div", {
                        staticClass: "history-status history-status-fail"
                    })], 1)]), t._v(" "), a("transition", {
                        attrs: {
                            name: "fade-down"
                        }
                    }, [t.showCopy ? a("div", {
                        staticClass: "message",
                        style: {
                            left: "50%",
                            top: t.activeOpened ? "45%" : "30px"
                        },
                        attrs: {
                            "data-test-id": "wall_copied_alert"
                        }
                    }, [t._v("\n      " + t._s(t.isCopyAddress ? "Address" : "Hash") + " copied to clipboard\n    ")]) : t._e()])], 1) : t._e()
                },
                n = []
        },
        1284: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "alert",
                        class: "alert-" + t.type.toLowerCase()
                    }, [a("AlertIcon", {
                        attrs: {
                            type: t.type
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "alert_body"
                    }, [a("div", {
                        staticClass: "alert_message"
                    }, [t._v("\n      " + t._s(t.message) + "\n    ")]), t._v(" "), t._t("default")], 2)], 1)
                },
                n = []
        },
        1289: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "hedera-activation"
                    }, [t.isActivating ? a("div", {
                        staticClass: "activating"
                    }, [a("div", {
                        staticClass: "icon",
                        class: t.$iconClass(t.coin)
                    }), t._v(" "), t.isSuccess ? a("div", [a("div", {
                        staticClass: "text-green text-bigger"
                    }, [t._v("\n        Activation is successful\n      ")]), t._v(" "), a("div", {
                        staticClass: "submit"
                    }, [a("button", {
                        staticClass: "button",
                        on: {
                            click: function(e) {
                                return t.$emit("changeActivation", !1)
                            }
                        }
                    }, [t._v("\n          BACK\n        ")])])]) : t._e(), t._v(" "), t.isError ? a("div", [a("div", {
                        staticClass: "text-bigger"
                    }, [t._v("\n        Сan’t activate now\n      ")]), t._v(" "), a("div", {
                        staticClass: "submit"
                    }, [a("button", {
                        staticClass: "button",
                        on: {
                            click: function(e) {
                                return t.$emit("changeActivation", !1)
                            }
                        }
                    }, [t._v("\n          BACK\n        ")])])]) : t._e(), t._v(" "), t.isError || t.isSuccess ? t._e() : a("div", [a("div", {
                        staticClass: "text-bigger"
                    }, [t._v("\n        Activating account\n      ")]), t._v(" "), a("div", {
                        staticClass: "loading"
                    })])]) : a("div", [a("p", {
                        staticClass: "text-middle text-gray"
                    }, [t._v("\n      You should activate your account to receive an address.\n    ")]), t._v(" "), a("p", {
                        staticClass: "text-middle text-gray"
                    }, [t._v("\n      It’s free for Atomic users and takes 1 min.\n    ")]), t._v(" "), a("div", {
                        staticClass: "submit"
                    }, [a("button", {
                        staticClass: "button",
                        on: {
                            click: t.activateAccount
                        }
                    }, [t._v("\n        ACTIVATE ACCOUNT\n      ")]), t._v(" "), a("button", {
                        staticClass: "button",
                        on: {
                            click: t.talkWithSupport
                        }
                    }, [t._v("\n        CONTACT SUPPORT\n      ")])])])])
                },
                n = []
        },
        1292: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("svg", {
                        attrs: {
                            fill: "none",
                            height: "306",
                            viewBox: "0 0 200 306",
                            width: "200"
                        }
                    }, [a("path", {
                        attrs: {
                            d: "M156.502 39.537C156.502 39.537 196.201 74.5156 196.661 137.191C197.121 199.867 171.82 249.316 171.82 249.316C171.82 249.316 177.617 223.831 151.074 229.776C130.926 234.247 113.032 250.745 79.911 240.33C59.8547 234.016 64.9148 208.255 49.0445 217.564C35.7043 225.398 15.832 211.941 15.832 211.941C15.832 211.941 43.7545 200.973 64.9148 157.284C86.0751 113.596 87.4091 38.7997 87.4091 38.7997C87.4091 38.7997 107.143 33.546 130.236 34.7903C146.842 35.712 156.502 39.537 156.502 39.537Z",
                            fill: "#1B2647"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M44.5777 217.105C55.4338 212.589 59.2979 201.574 68.084 194.155C78.4342 185.399 93.0164 199.086 89.4743 224.064C87.9563 234.848 107.047 241.576 123.745 227.659C140.443 213.741 158.613 182.08 164.179 140.696C168.136 111.202 170.896 64.1026 142.973 37.235C138.879 36.175 134.509 35.2994 130.185 34.8385C107.185 32.2578 87.3583 38.8479 87.3583 38.8479C87.3583 38.8479 86.0243 113.644 64.864 157.333C43.7037 201.021 15.7812 211.99 15.7812 211.99C15.7812 211.99 30.3175 223.096 44.5777 217.105Z",
                            fill: "#18203A"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M69.4641 167.932C86.6223 124.428 91.7284 61.6138 94.9945 37.1426C90.0264 37.926 87.3584 38.8016 87.3584 38.8016C87.3584 38.8016 80.5042 109.22 59.3439 152.908C38.1836 196.597 15.7812 211.989 15.7812 211.989C15.7812 211.989 17.2993 226.46 37.0336 229.225C47.1537 211.482 62.104 186.597 69.4641 167.932Z",
                            fill: "#253B6D"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M37.0352 229.227C47.1553 211.484 62.1055 186.644 69.4656 167.98C86.6239 124.476 91.73 61.6616 94.996 37.1904",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M168.046 212.128C166.988 214.524 166.206 217.059 165.7 219.686C165.608 220.239 165.516 220.884 165.976 221.252C166.62 221.805 167.586 221.068 168.092 220.377C173.474 212.819 176.418 203.878 179.96 195.307C180.558 193.832 182.03 190.283 183.548 190.836C185.342 191.481 183.778 196.689 183.272 199.178C181.018 210.699 178.258 221.667 174.716 230.976",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M80.8281 215.998C80.8281 215.998 79.9081 221.62 82.3001 229.224C83.0821 231.759 84.5082 234.202 84.5082 234.202C84.5082 234.202 85.0602 238.626 86.4862 244.939C93.4323 244.018 101.758 249.686 110.591 249.041C110.637 248.903 110.637 248.764 110.591 248.718C109.624 245.861 108.52 241.207 105.99 237.612C103.46 233.971 100.562 229.777 100.792 226.459C101.206 220.468 109.348 207.703 110.452 200.053C111.556 192.402 117.859 162.217 90.3042 151.341C85.3362 149.359 83.4501 151.894 81.6561 159.129C79.8621 166.41 73.56 184.891 74.664 196.873C75.768 208.809 80.8281 215.998 80.8281 215.998Z",
                            fill: "#237DBD"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M90.0756 171.895C91.0416 178.623 92.3296 190.098 93.8936 185.628C94.9976 182.54 102.496 185.628 103.462 196.181C104.428 206.735 102.496 211.113 98.6777 217.196C94.8597 223.279 89.1096 221.436 91.0416 223.003C92.9736 224.616 96.4697 225.86 97.7577 229.731C98.8617 233.003 101.576 231.943 105.716 237.151C103.278 233.51 100.656 229.639 100.84 226.459C101.254 220.468 109.396 207.703 110.5 200.053C111.604 192.402 117.906 162.217 90.3516 151.341C87.4536 150.189 85.5675 149.912 84.1875 151.295C87.6375 153.507 89.1096 165.166 90.0756 171.895Z",
                            fill: "#116DB0"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M42.9694 96.0854C45.9595 90.0482 50.2375 84.2415 54.6536 79.7251C52.1696 77.4209 48.7655 75.6236 44.0735 74.5636C35.1033 72.5359 26.7312 67.0978 23.7412 63.7797C23.6032 63.6414 23.9252 60.6459 24.5692 57.2356C25.2132 53.8714 20.0611 43.7327 18.4051 45.8987C17.7151 46.8204 18.0831 48.8481 17.8531 50.0924C17.6231 51.2906 16.8871 51.6593 16.9791 51.7515L13.575 47.2812C13.575 47.2812 6.76693 40.4606 4.6969 41.9354C1.38486 44.3318 2.58087 56.7748 5.2489 61.798C6.35292 63.918 9.66497 65.3466 14.219 68.2039C15.8291 69.2177 15.4151 69.8629 16.4271 71.3837C18.2211 74.1949 19.6471 74.4714 23.4192 81.1538C25.9492 85.624 33.4473 95.4402 40.9914 100.325C41.5434 99.0809 42.3714 97.2836 42.9694 96.0854Z",
                            fill: "#253B6D"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M74.8501 45.7139C68.134 51.7971 68.456 56.8665 68.456 56.8665C68.456 56.8665 64.6839 61.2446 61.0038 71.6137C58.1058 79.7708 58.7498 82.8585 57.7838 82.2133C55.5298 80.6925 55.0237 80.969 54.1957 80.1856C49.7797 84.7019 45.9616 90.0017 42.9716 96.0389C42.3735 97.2832 41.7755 98.5275 41.2695 99.7718C42.2815 100.417 44.0756 102.353 46.8816 103.643C52.4017 106.178 53.6897 108.113 56.2198 109.45C60.7738 111.846 63.3499 107.652 63.3499 107.652C63.3499 107.652 67.2139 104.979 70.848 101.753C75.3101 97.8362 81.2442 91.2921 84.5562 87.2366C88.3283 82.6742 91.1343 75.9918 91.1343 75.9918C91.1343 75.9918 105.395 62.028 102.083 51.0598C98.7705 40.1837 87.3623 34.3769 74.8501 45.7139Z",
                            fill: "#237DBD"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M75.5875 84.7017C75.3115 88.9876 74.9435 98.389 79.3596 105.993C84.6957 115.164 86.6737 120.832 87.3637 127.699C87.6397 130.602 87.8697 135.349 87.6857 138.16L139.436 137.838C139.068 135.211 138.838 131.524 139.482 127.607C140.771 119.957 141.507 117.929 146.843 112.076C152.179 106.223 164.921 87.0981 166.163 73.0882C167.451 59.0784 176.099 42.0269 148.453 36.0819C122.232 30.4595 100.152 32.8559 88.5137 38.7088C72.6895 46.6354 71.3555 69.2171 71.3555 74.3325C71.3555 79.448 75.7715 81.614 75.5875 84.7017Z",
                            fill: "#378DCC"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M86.1185 38.2943C84.7385 38.7552 82.7605 39.6769 81.6105 42.1655C79.8624 46.0366 80.1384 47.7879 82.6685 47.9261C86.2565 48.1565 88.2806 47.9722 89.4766 45.5297C90.9946 42.3037 93.3866 39.6308 95.1347 37.8795C96.8827 36.1283 98.1707 35.6675 98.1707 35.6675C98.1707 35.6675 96.5147 35.0223 93.2946 35.8979C89.9366 36.8196 88.6026 37.4648 86.1185 38.2943Z",
                            fill: "#1B2647"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M85.8112 45.3875C87.0533 45.1211 87.8661 43.9971 87.6267 42.8772C87.3873 41.7573 86.1864 41.0655 84.9443 41.3319C83.7022 41.5984 82.8894 42.7223 83.1288 43.8423C83.3682 44.9622 84.5691 45.654 85.8112 45.3875Z",
                            fill: "#2983C5"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M161.01 85.5313C162.068 72.8579 152.132 63.4566 151.948 63.0879C150.384 65.6226 142.012 80.0933 140.678 81.7984C138.056 85.1166 130.419 84.9322 120.115 82.4436C114.917 81.1993 107.925 78.1116 101.623 79.4481C98.265 80.1394 100.749 79.4481 106.039 80.7385C116.021 83.1349 123.289 87.7434 125.405 89.4025C128.855 92.1215 128.671 92.5363 128.395 93.5501C127.567 96.8222 122.093 98.896 118.551 98.6656C115.009 98.4352 116.343 104.011 118.459 108.297C120.575 112.583 128.257 115.256 127.567 124.335C127.383 126.639 126.923 131.432 128.487 131.063C133.318 130.003 137.228 130.418 139.114 130.787C139.85 125.072 141.276 119.22 143.07 116.731C144.312 114.98 150.2 109.035 153.282 103.965C155.766 99.9099 159.4 93.9649 161.148 89.9094C160.366 89.0338 160.918 86.8217 161.01 85.5313Z",
                            fill: "#237DBD"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M101.718 7.09441C102.96 3.08501 103.19 2.53199 105.812 1.51812C109.86 -0.0487762 125.454 -0.509628 133.044 0.6425C135.39 1.01118 136.08 1.05727 137.92 4.32931C139.806 7.7396 141.508 11.1038 143.394 17.5096C145.97 26.0815 146.476 35.6672 146.476 35.6672C146.476 35.6672 144.038 35.4367 137.322 37.6488C131.296 39.6305 121.59 45.299 109.308 43.4095C105.214 42.7643 100.89 39.2618 99.1876 37.741C98.0376 36.681 96.9336 36.4967 96.9336 36.4967C96.9336 36.4967 99.3256 14.7906 101.718 7.09441Z",
                            fill: "#9CD6ED"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M140.402 139.912C139.666 138.391 139.298 136.916 139.114 133.275C127.614 136.409 114.733 137.469 101.669 137.469C96.9773 137.469 92.3772 137.239 87.8231 136.824C86.7191 140.926 86.0291 143.829 85.1551 146.778C83.5451 152.262 83.0391 154.382 83.0391 154.382C83.0391 154.382 86.3051 154.843 89.2491 158.484C92.2392 162.125 94.6772 167.286 97.4833 170.881C103.417 178.577 111.881 178.347 111.881 178.347C111.881 178.347 115.47 166.549 120.714 159.913C125.958 153.276 132.72 150.373 138.01 152.032C146.474 154.659 145.922 167.24 145.922 167.24C145.922 167.24 148.36 155.534 145.6 149.82C142.84 144.105 141.598 142.446 140.402 139.912Z",
                            fill: "#253B6D"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M87.1752 133.137C87.1752 133.137 93.0173 137.101 102.769 136.456C112.476 135.81 121.584 132.538 128.484 131.064C135.384 129.543 140.352 131.064 140.352 131.064L141.226 139.728C141.226 139.728 135.614 136.916 129.542 139.728C123.516 142.539 110.038 147.654 102.171 147.239C94.7193 146.825 90.6713 144.705 88.9692 143.23C86.5772 141.156 86.1172 140.741 86.1172 140.741L87.1752 133.137Z",
                            fill: "#253B6D"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M141.226 139.728C141.226 139.728 135.614 136.917 129.542 139.728C123.516 142.539 110.038 147.655 102.171 147.24C94.7193 146.825 90.6713 144.705 88.9692 143.23C86.5772 141.157 86.1172 140.742 86.1172 140.742",
                            stroke: "#191D2B",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M105.165 148.3C101.715 148.668 98.2652 148.208 94.8152 147.839C93.4352 147.701 92.2852 146.364 92.2852 144.982C92.2852 142.124 92.2852 139.498 92.2852 136.64C92.2852 135.258 93.4352 134.29 94.8152 134.428C98.2652 134.797 101.715 134.981 105.165 134.613C106.545 134.474 107.695 135.396 107.695 136.825C107.695 139.682 107.695 142.585 107.695 145.442C107.695 146.825 106.545 148.115 105.165 148.3Z",
                            fill: "#3CB8EB"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M22.9604 54.1472L12.5642 59.1244C11.1842 59.7696 9.5742 59.1244 9.0682 57.6958L0.144056 32.4873C-0.361951 31.0586 0.512065 29.4917 2.03009 29.1691L13.3923 26.8188C14.6343 26.5423 15.8763 27.2796 16.2903 28.4779L24.2484 51.1056C24.6624 52.2578 24.1104 53.5942 22.9604 54.1472Z",
                            fill: "#9CD6ED"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M194.405 125.073C187.689 125.073 181.249 124.013 175.223 122.077C174.257 125.349 173.521 128.99 174.671 133.691C176.833 142.631 175.775 146.226 174.993 151.572C174.441 155.535 174.395 156.226 174.395 156.318C174.211 156.457 171.957 157.655 168.599 158.577C165.287 159.498 162.987 164.936 163.953 165.95C165.609 167.655 165.103 168.715 165.195 168.485C165.195 168.485 163.217 173.416 165.425 174.752C169.013 176.872 168.553 174.522 169.611 174.752C174.487 175.997 176.327 176.135 177.891 175.812C180.375 175.352 181.985 173.831 181.985 173.831C181.985 173.831 182.445 171.388 182.951 166.042C183.457 160.696 187.919 155.443 190.173 150.097C192.197 145.35 197.487 133.921 198.499 125.027C197.119 125.027 195.785 125.073 194.405 125.073Z",
                            fill: "#253B6D"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M158.985 75.5313C158.985 75.5313 158.111 85.5778 163.815 94.9331C169.059 103.505 177.753 105.487 177.247 113.966C177.063 117.284 175.039 122.676 175.223 122.077C181.249 124.013 187.689 125.073 194.406 125.073C195.786 125.073 197.166 125.027 198.5 124.935C198.638 123.736 198.684 122.584 198.684 121.524C198.408 112.353 199.42 108.113 199.88 105.302C200.754 99.9564 196.614 98.0208 196.614 98.0208C196.614 98.0208 193.808 93.228 193.624 88.389C193.44 84.564 192.06 77.559 190.082 72.7201C187.874 67.236 183.365 61.5214 183.365 61.5214C183.365 61.5214 181.433 44.3316 170.255 42.0274C159.077 39.7231 157.559 40.5066 153.971 41.7509C148.037 43.8708 146.335 52.7191 149.003 61.3831C151.671 70.0471 158.985 75.5313 158.985 75.5313Z",
                            fill: "#378DCC"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M106.91 27.5566C110.36 29.1696 114.454 29.4922 118.134 28.4322C117.996 28.4783 117.858 28.5705 117.72 28.6166",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M105.019 16.3112C104.927 16.6799 104.927 17.0486 104.927 17.4173C104.927 17.786 105.065 18.2468 105.387 18.339C105.939 18.5233 106.307 17.786 106.399 17.2329C106.491 16.7721 106.537 16.2651 106.353 15.8504C106.169 15.4356 105.617 15.113 105.203 15.3434C104.835 15.5278 104.743 15.9886 104.697 16.3573C104.559 17.3712 104.559 18.6155 105.387 19.2607C105.525 19.3529 105.709 19.445 105.847 19.3989C106.031 19.3529 106.123 19.1224 106.215 18.9381C106.445 18.2929 106.537 17.5555 106.537 16.8643C106.537 16.4956 106.491 16.173 106.307 15.8504C106.123 15.5278 105.709 15.3895 105.387 15.4817C105.065 15.5739 104.927 16.1269 105.203 16.3112",
                            fill: "#1B1733"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M105.019 16.3112C104.927 16.6799 104.927 17.0486 104.927 17.4173C104.927 17.786 105.065 18.2468 105.387 18.339C105.939 18.5233 106.307 17.786 106.399 17.2329C106.491 16.7721 106.537 16.2651 106.353 15.8504C106.169 15.4356 105.617 15.113 105.203 15.3434C104.835 15.5278 104.743 15.9886 104.697 16.3573C104.559 17.3712 104.559 18.6155 105.387 19.2607C105.525 19.3529 105.709 19.445 105.847 19.3989C106.031 19.3529 106.123 19.1224 106.215 18.9381C106.445 18.2929 106.537 17.5555 106.537 16.8643C106.537 16.4956 106.491 16.173 106.307 15.8504C106.123 15.5278 105.709 15.3895 105.387 15.4817C105.065 15.5739 104.927 16.1269 105.203 16.3112",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M119.005 17.2321C118.913 17.8773 118.821 18.5225 119.051 19.1216C119.281 19.7207 119.925 20.2276 120.569 19.9972C121.397 19.7207 121.443 18.5686 121.351 17.693C121.259 17.1399 121.167 16.5408 120.707 16.2643C120.063 15.8956 119.189 16.4487 119.005 17.1399C118.821 17.8312 119.005 18.6147 119.235 19.3059C119.327 19.5364 119.419 19.8129 119.603 19.9972C120.155 20.4581 121.029 19.8129 121.029 19.1216C121.075 18.4303 120.615 17.8312 120.155 17.2782C120.017 17.1399 119.879 16.9556 119.695 16.9556C119.373 16.9556 119.235 17.4165 119.281 17.739C119.327 18.5225 119.465 19.3059 119.695 20.0433",
                            fill: "#1B1733"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M119.005 17.2321C118.913 17.8773 118.821 18.5225 119.051 19.1216C119.281 19.7207 119.925 20.2276 120.569 19.9972C121.397 19.7207 121.443 18.5686 121.351 17.693C121.259 17.1399 121.167 16.5408 120.707 16.2643C120.063 15.8956 119.189 16.4487 119.005 17.1399C118.821 17.8312 119.005 18.6147 119.235 19.3059C119.327 19.5364 119.419 19.8129 119.603 19.9972C120.155 20.4581 121.029 19.8129 121.029 19.1216C121.075 18.4303 120.615 17.8312 120.155 17.2782C120.017 17.1399 119.879 16.9556 119.695 16.9556C119.373 16.9556 119.235 17.4165 119.281 17.739C119.327 18.5225 119.465 19.3059 119.695 20.0433",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M108.013 11.15C105.575 9.81349 103.229 10.9656 102.539 12.3943",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M117.945 9.721C119.969 6.03418 123.235 8.43061 125.213 10.5044",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M146.61 35.6205C146.61 35.6205 142.286 39.3534 140.124 43.3167C137.594 47.9253 137.272 50.0913 139.756 51.1973C143.298 52.8103 145.368 53.3172 147.162 50.5521C149.508 46.9114 152.452 43.0863 154.614 41.4733C156.776 39.8143 159.214 39.3534 159.214 39.3534C159.214 39.3534 157.006 37.9248 152.958 36.7726C148.634 35.4823 146.61 35.6205 146.61 35.6205Z",
                            fill: "#1B2647"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M143.749 45.0624C142.519 44.7464 141.291 45.3897 141.007 46.4991C140.723 47.6086 141.491 48.7642 142.721 49.0802C143.952 49.3962 145.179 48.7529 145.463 47.6434C145.747 46.5339 144.98 45.3784 143.749 45.0624Z",
                            fill: "#2983C5"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M77.3324 81.6136C76.5964 80.8302 75.9064 80.0468 75.1704 79.2172C74.9864 79.0329 74.8024 78.7103 74.9864 78.4799C75.0784 78.3877 75.2164 78.3416 75.3544 78.3416C82.5305 77.3278 89.8906 76.1296 96.9287 77.7886C90.9026 79.7242 84.0485 78.9868 78.1604 81.245L77.3324 81.6136Z",
                            fill: "#237DBD"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M84.832 63.9637C89.1101 72.0286 93.5262 80.0013 98.1262 87.8358C104.704 79.863 112.294 73.0885 120.299 66.5905C120.253 63.1802 120.253 61.4751 120.345 58.2491C110.638 57.7422 100.886 57.2813 91.1801 56.7744C88.3741 59.4473 87.1321 60.9221 84.832 63.9637Z",
                            fill: "#253B6D"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M101.528 68.7571C99.4118 68.5728 97.1578 70.2319 96.6518 72.49C96.1458 74.7482 97.5258 76.776 99.5958 76.9603C101.666 77.1447 103.69 75.4395 104.288 73.1813C104.886 70.9232 103.644 68.9415 101.528 68.7571Z",
                            fill: "#3CB8EB"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M107.514 77.7896C109.124 76.2227 109.952 75.4392 111.746 73.8723C111.516 68.4804 111.47 63.2728 111.7 57.8808C111.976 55.254 110.55 53.6871 107.974 53.5949C105.398 53.5488 102.131 54.8853 99.9694 57.2356C95.7374 61.6598 92.1033 66.637 89.1133 71.9368C90.0793 73.688 90.5853 74.6097 91.5513 76.3609C95.0474 70.0012 98.8654 64.4249 103.465 58.8025C104.201 57.973 105.076 57.4661 105.812 57.5121C106.548 57.5582 106.916 58.0652 106.824 59.0329C106.502 65.3005 106.824 71.5681 107.514 77.7896Z",
                            fill: "#3CB8EB"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M55.2969 87.6056C55.5729 86.73 55.8489 85.8083 56.1249 84.9327C56.2169 84.6101 56.3089 84.2875 56.5389 84.0571C56.7689 83.8266 57.1369 83.7345 57.4129 83.9188C57.5969 84.0571 57.6889 84.3336 57.7349 84.564C57.9649 85.4396 58.2409 86.3152 58.5629 87.1447C58.793 87.6977 59.253 88.2969 59.805 88.1586C60.081 86.8221 60.035 85.4396 59.759 84.1032C59.713 83.8266 59.621 83.504 59.667 83.2275C59.713 82.951 59.943 82.6284 60.219 82.6284C60.587 82.5824 60.817 82.9049 61.001 83.2275C61.461 83.9188 61.875 84.6562 62.1971 85.3935",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M181.477 104.288C180.557 105.118 176.693 106.961 178.533 107.791C179.867 108.39 183.501 105.901 184.283 107.698C184.927 109.265 178.625 108.989 178.717 111.247C178.763 112.491 181.937 111.938 183.363 111.846",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M158.986 75.5312C158.986 75.5312 158.112 85.5778 163.816 94.9331C169.06 103.505 177.754 105.487 177.248 113.966C177.064 117.284 175.04 122.676 175.224 122.077",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M153.191 69.4941C156.733 75.6235 163.312 77.6973 163.312 77.6973",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M190.632 125.441C185.296 125.118 179.04 123.874 174.164 122.261",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M108.934 80.6922C112.154 81.4757 115.328 82.5817 118.364 83.9182C121.492 85.3007 124.528 86.9598 127.748 88.0658C131.014 89.1258 134.602 89.5866 137.822 88.4806C142.284 86.9137 145.274 82.72 147.896 78.8027",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M140.996 254.432C141.64 254.202 144.124 253.326 146.01 251.667C149.414 248.718 153.14 244.109 156.821 243.326C159.121 242.819 161.651 244.34 164.043 244.847C163.583 243.188 162.939 241.436 162.111 239.869C159.535 234.984 154.566 228.809 154.566 228.809C154.566 228.809 153.922 225.906 153.278 221.666C152.634 217.426 151.346 215.813 151.346 215.813C151.346 215.813 156.453 209.545 153.508 193.324C150.61 177.055 146.056 163.46 144.768 157.93C143.48 152.4 142.514 150.142 138.926 149.451C135.338 148.759 128.254 149.174 121.584 156.502C117.536 160.972 116.11 165.119 113.212 169.636C110.314 174.198 111.05 181.987 115.834 192.955C127.518 219.73 128.714 207.149 133.176 223.002C135.2 230.192 141.042 232.173 140.122 237.657C138.788 245.722 140.812 253.741 140.996 254.432Z",
                            fill: "#378DCC"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M39.7969 102.213C40.3029 100.969 42.0049 96.8674 42.6949 95.6692C45.225 91.1529 46.973 87.9269 49.6871 84.5166",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M106.636 273.005C105.716 265.125 110.362 251.253 110.73 248.995C101.76 249.732 93.2962 243.879 86.3041 244.939C87.3161 249.456 88.9721 254.986 90.9961 260.516C95.0902 271.807 96.1482 276.969 96.3322 279.503C96.8842 287.153 87.3161 289.135 79.726 292.038C72.0898 294.942 70.7098 298.721 73.2859 298.721C84.004 298.721 108.108 298.721 108.108 298.721C108.108 298.721 115.008 299.965 110.684 286.37C108.89 280.932 107.28 278.443 106.636 273.005Z",
                            fill: "#253B6D"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M173.657 295.588C168.091 290.703 165.653 285.173 165.653 285.173C165.653 285.173 165.101 281.256 165.423 268.352C165.561 262.269 165.285 251.162 165.285 251.162C165.285 251.162 165.239 248.259 164.273 244.895C161.789 244.434 159.213 242.821 156.821 243.328C153.187 244.111 149.415 248.72 146.011 251.669C143.757 253.651 140.812 254.527 140.812 254.527C140.812 254.527 150.151 264.896 153.417 272.73C156.683 280.519 156.591 285.772 155.947 287.846C153.325 295.865 155.625 297.939 155.625 297.939C155.625 297.939 160.547 299.828 162.479 302.778C164.411 305.727 169.471 305.451 173.795 305.451C181.247 305.451 182.305 305.727 182.305 303.607C182.305 301.626 178.487 299.828 173.657 295.588Z",
                            fill: "#253B6D"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M142.471 159.867C142.149 164.429 143.161 169.406 147.301 179.176C151.533 189.039 150.751 208.671 150.981 207.058C150.337 212.265 149.371 212.911 147.071 211.62C144.817 210.33 140.677 198.302 141.781 203.509C142.885 208.717 143.299 212.634 141.781 215.86C140.263 219.132 143.851 216.505 147.071 218.118C150.337 219.731 152.269 224.939 152.591 228.856C152.913 232.773 153.511 232.451 157.743 237.29C159.721 239.594 161.975 242.175 163.631 244.802C163.769 244.848 163.907 244.848 163.999 244.894C163.539 243.235 162.895 241.483 162.067 239.917C159.491 235.032 154.523 228.856 154.523 228.856C154.523 228.856 153.879 225.953 153.235 221.713C152.591 217.473 151.303 215.86 151.303 215.86C151.303 215.86 156.409 209.593 153.465 193.371C150.567 177.103 146.013 163.507 144.725 157.977C143.667 153.553 142.839 151.203 140.723 150.097C142.195 153.691 142.655 157.148 142.471 159.867Z",
                            fill: "#237DBD"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M98.9531 286.232C101.943 286.371 103.921 286.924 104.703 287.154C105.531 287.384 105.991 287.615 106.405 286.878C106.865 286.002 106.267 284.85 105.439 284.251C104.243 283.329 102.449 281.946 103.553 280.979C104.013 280.564 104.795 281.209 105.393 281.301C105.531 281.347 105.669 281.347 105.761 281.255",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M158.433 286.278C159.031 285.863 159.675 285.449 160.411 285.403C161.147 285.356 161.975 285.817 162.021 286.555C162.067 287.246 161.331 287.384 160.733 287.753C160.135 288.122 158.479 289.596 158.249 290.841C158.019 292.177 161.515 289.55 163.953 289.55",
                            stroke: "#1B1733",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-miterlimit": "10",
                            "stroke-width": "2"
                        }
                    })])
                },
                n = []
        },
        1295: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("main", {
                        staticClass: "main-coins"
                    }, [a("div", {
                        staticClass: "scroll-list2 wallet-table"
                    }, [a("Search", {
                        staticClass: "table-search-fix",
                        model: {
                            value: t.filter,
                            callback: function(e) {
                                t.filter = e
                            },
                            expression: "filter"
                        }
                    }), t._v(" "), a("Table", {
                        attrs: {
                            activeSortField: t.activeSortField,
                            excludedFields: t.excludedFields,
                            header: t.tableFields,
                            isEmpty: !1,
                            isSortASC: t.isSortASC,
                            isSortable: !0,
                            items: t.tableItems,
                            spaceBetween: !0
                        },
                        on: {
                            sortByField: t.sortByField
                        }
                    }, [a("FilterButton", {
                        attrs: {
                            slot: "header-row-2",
                            highlight: t.highlight
                        },
                        on: {
                            click: t.toggleFiltersPopup
                        },
                        slot: "header-row-2"
                    }), t._v(" "), !t.tableItems.length && t.filter ? a("div", {
                        staticClass: "no-result",
                        attrs: {
                            slot: "empty"
                        },
                        slot: "empty"
                    }, [a("div", {
                        staticClass: "left-block"
                    }, [a("span", [t._v("\n            No results found for “" + t._s(t.filter) + "”\n          ")]), t._v(" "), a("button", {
                        staticClass: "button",
                        attrs: {
                            "data-test-id": "wallet_custom_token"
                        },
                        on: {
                            click: function(e) {
                                return t.editToken("")
                            }
                        }
                    }, [t._v("\n            ADD CUSTOM TOKEN\n          ")])]), t._v(" "), a("div", {
                        staticClass: "right-block"
                    }, [a("AtomicManSvg")], 1)]) : t._e(), t._v(" "), t._l(t.tableItems, (function(e, i) {
                        return a("Coin", {
                            key: i + "-coin-" + e.ticker,
                            ref: e.ticker + "-" + e.deprecatedParent,
                            refInFor: !0,
                            attrs: {
                                slot: "table-rows",
                                coin: e,
                                "data-test-id": "main_coins"
                            },
                            on: {
                                toggleCoinInfoPopup: t.toggleCoinInfoPopup
                            },
                            slot: "table-rows"
                        })
                    }))], 2)], 1), t._v(" "), a("transition", {
                        attrs: {
                            mode: "in-out",
                            name: "page-fade"
                        }
                    }, [t.showCoinInfoPopup && !t.showSendCoinPopup ? a("CoinInfo", {
                        key: "coinInfo",
                        attrs: {
                            coin: t.activeCoin
                        },
                        on: {
                            closePopup: t.closeCoinInfoPopup,
                            editToken: t.editToken,
                            changeCoin: t.changeActiveCoin,
                            toggleReceiveCoin: t.toggleReceiveCoinPopup,
                            toggleSendCoin: t.toggleSendCoinPopup
                        }
                    }) : t._e()], 1), t._v(" "), a("transition", {
                        attrs: {
                            mode: "out-in",
                            name: "page-fade"
                        }
                    }, [t.showSendCoinPopup ? a("SendCoin", {
                        key: "sendCoin",
                        attrs: {
                            coin: t.activeCoin,
                            txParams: t.resendParams
                        },
                        on: {
                            changeCoin: t.changeActiveCoin,
                            closePopup: t.closeSendCoinPopup
                        }
                    }) : t._e()], 1), t._v(" "), a("transition", {
                        attrs: {
                            mode: "out-in",
                            name: "page-fade"
                        }
                    }, [t.showReceiveCoinPopup ? a("ReceiveCoin", {
                        key: "receiveCoin",
                        attrs: {
                            coin: t.activeCoin
                        },
                        on: {
                            changeCoin: t.changeActiveCoin,
                            closePopup: t.closeReceiveCoinPopup
                        }
                    }) : t._e()], 1), t._v(" "), t.walletWizard ? a("WalletWizard", {
                        attrs: {
                            coin: t.walletWizard
                        },
                        on: {
                            toggleWizard: t.toggleWizard
                        }
                    }) : t._e(), t._v(" "), a("transition", {
                        attrs: {
                            mode: "out-in",
                            name: "page-fade"
                        }
                    }, [t.isFiltersPopup ? a("FilterPopup", {
                        attrs: {
                            coins: t.coinListForSettings,
                            module: "wallet"
                        },
                        on: {
                            acceptFilter: t.acceptFilter,
                            close: t.toggleFiltersPopup
                        }
                    }) : t._e()], 1)], 1)
                },
                n = []
        },
        1306: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "staking-empty",
                        attrs: {
                            "data-test-id": "empty_staking_page"
                        }
                    }, [a("div", {
                        staticClass: "new-title-large"
                    }, [t._v("\n    Stake and Earn\n  ")]), t._v(" "), a("div", {
                        staticClass: "new-text-medium m-t-10",
                        attrs: {
                            "data-test-id": "staking_empty_info"
                        }
                    }, [t._v("\n    Earn passive income from your crypto by staking it. Your crypto will remain under your full control, while also\n    helping support the blockchain and earning you regular rewards.\n  ")]), t._v(" "), a("div", {
                        staticClass: "flex center m-t-30"
                    }, [t._m(0), t._v(" "), a("ExchangeWhiteArrow", {
                        staticClass: "m-l-35"
                    }), t._v(" "), t._m(1), t._v(" "), a("ExchangeWhiteArrow", {
                        staticClass: "m-l-35"
                    }), t._v(" "), t._m(2)], 1), t._v(" "), a("div", {
                        staticClass: "flex center text-center staking-empty__cards"
                    }, t._l(t.sortedItems, (function(e, i) {
                        return a("div", {
                            key: i,
                            staticClass: "staking-empty__card",
                            attrs: {
                                "data-test-id": "staking_" + e.ticker
                            },
                            on: {
                                click: function(a) {
                                    return t.clickHandler(e)
                                }
                            }
                        }, [e.emptyTag ? a("div", {
                            staticClass: "staking-empty__tag",
                            class: "staking-empty__tag-" + e.emptyTag.toLowerCase()
                        }, [t._v("\n        " + t._s(e.emptyTag) + "\n      ")]) : t._e(), t._v(" "), a("div", {
                            staticClass: "notify-wrap"
                        }, [a("AtomicNotifyPoint", {
                            attrs: {
                                UID: "staking-table-ticker-" + e.ticker
                            }
                        })], 1), t._v(" "), a("CoinIcon", {
                            attrs: {
                                wallet: e.walletInstance
                            }
                        }), t._v(" "), a("div", {
                            staticClass: "new-title-medium new-text-gray m-t-5",
                            attrs: {
                                "data-test-id": "staking_ticker"
                            }
                        }, [t._v("\n        " + t._s("AWC-986" === e.ticker ? "AWC" : e.ticker) + "\n      ")]), t._v(" "), a("div", {
                            staticClass: "new-title-extra-medium m-t-10",
                            attrs: {
                                "data-test-id": "staking_reward"
                            }
                        }, [t._v("\n        " + t._s(e.reward) + "%\n      ")])], 1)
                    })), 0)])
                },
                n = [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("div", {
                        staticClass: "new-title-small"
                    }, [this._v("\n        Stake coins to validator\n      ")]), this._v(" "), e("div", {
                        staticClass: "new-text-small m-t-5 new-text-gray"
                    }, [this._v("\n        Available $1000\n      ")]), this._v(" "), e("div", {
                        staticClass: "new-text-small new-text-gray"
                    }, [this._v("\n        Staked $0\n      ")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "m-l-35"
                    }, [e("div", {
                        staticClass: "new-title-small"
                    }, [this._v("\n        Validator creates blocks\n      ")]), this._v(" "), e("div", {
                        staticClass: "new-text-small m-t-5 new-text-gray"
                    }, [this._v("\n        Available $0\n      ")]), this._v(" "), e("div", {
                        staticClass: "new-text-small new-text-gray"
                    }, [this._v("\n        Staked $1000\n      ")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "m-l-35"
                    }, [e("div", {
                        staticClass: "new-title-small"
                    }, [this._v("\n        You receive rewards\n      ")]), this._v(" "), e("div", {
                        staticClass: "new-text-small m-t-5 new-text-gray"
                    }, [this._v("\n        Staked $1000\n      ")]), this._v(" "), e("div", {
                        staticClass: "new-text-small new-text-gray"
                    }, [this._v("\n        Rewards $230\n      ")])])
                }]
        },
        1370: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return n
            }));
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "table-row with-hover",
                        attrs: {
                            "data-test-id": "exch_history"
                        },
                        on: {
                            click: t.toogleExpanded
                        }
                    }, [a("div", {
                        staticClass: "flex-wrap center"
                    }, [a("div", {
                        staticClass: "item"
                    }, [a("div", {
                        staticClass: "flex-wrap center"
                    }, [t.isSimplex ? a("AtomicFlagIcon", {
                        staticClass: "simplex-flag",
                        attrs: {
                            flagCode: t.sentTicker
                        }
                    }) : a("CoinIcon", {
                        attrs: {
                            wallet: t.sentWallet || t.findWallet(t.sentTicker)
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "m-l-10"
                    }, [a("span", {
                        staticClass: "text-bigger"
                    }, [t._v("\n            " + t._s(t._f("formatFinance")(t.sentAmount)) + " \n          ")]), a("span", {
                        staticClass: "text-middle text-gray"
                    }, [t._v("\n            " + t._s((t.sentWallet ? t.sentWallet.ticker : t.sentTicker).toUpperCase()) + "\n          ")])])], 1)]), t._v(" "), a("div", {
                        staticClass: "item",
                        class: {
                            "tooltip-hover": t.showTooltip
                        }
                    }, [a("div", {
                        staticClass: "flex-wrap center"
                    }, [a("CoinIcon", {
                        attrs: {
                            wallet: t.getWallet || t.findWallet(t.getTicker)
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "m-l-10"
                    }, [t.showTooltip ? a("span", {
                        staticClass: "text-bigger"
                    }, [t._v("~")]) : t._e(), a("span", {
                        staticClass: "text-bigger"
                    }, [t._v("\n            " + t._s(t._f("formatFinance")(t.getAmount)) + " \n          ")]), a("span", {
                        staticClass: "text-middle text-gray"
                    }, [t._v("\n            " + t._s((t.getWallet ? t.getWallet.ticker : t.getTicker).toUpperCase()) + "\n          ")]), t.showTooltip ? a("span", {
                        staticClass: "tooltip small"
                    }, [t._v(t._s(t.Texts.TextDesktop.generalExchange(t.Texts.TextDesktop.generalExchangeKeys.exchangeRateDisclaimer)))]) : t._e()])], 1)]), t._v(" "), a("div", {
                        staticClass: "item"
                    }, [a("span", {
                        staticClass: "text-middle text-gray"
                    }, [t._v("\n        " + t._s(t.date) + "\n      ")])]), t._v(" "), a("div", {
                        staticClass: "item text-right"
                    }, [t.isPending ? a("div", {
                        staticClass: "history-status",
                        attrs: {
                            "data-test-id": "exchange_pending"
                        }
                    }) : t.isSuccess ? a("SuccessMark", {
                        attrs: {
                            color: "green",
                            "data-test-id": "exchange_success"
                        }
                    }) : a("div", {
                        staticClass: "history-status history-status-fail",
                        attrs: {
                            "data-test-id": "exchange_failed"
                        }
                    })], 1)]), t._v(" "), t.expanded ? a("div", {
                        staticClass: "expanded"
                    }, [a("div", {
                        staticClass: "title",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.copyOrderId.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n      Payment ID: " + t._s(t.id) + "\n      "), a("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.copied ? a("div", {
                        staticClass: "message"
                    }, [t._v("\n          Payment ID is copied to clipboard\n        ")]) : t._e()])], 1), t._v(" "), a("button", {
                        staticClass: "button",
                        on: {
                            click: function(e) {
                                return t.$bus.$emit("openSupportPopup", t.contactSupport)
                            }
                        }
                    }, [t._v("\n      Contact Atomic Support about this\n      exchange\n    ")])]) : t._e()])
                },
                n = []
        },
        2095: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(725),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1213),
                o = a(3);
            var l = function(t) {
                    a(4511)
                },
                c = Object(o.a)(n.a, r.a, r.b, !1, l, "data-v-f3e41004", null);
            e.default = c.exports
        },
        2134: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(746),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1220),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        2262: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(791),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1266),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        2277: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(818),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1283),
                o = a(3);
            var l = function(t) {
                    a(5120)
                },
                c = Object(o.a)(n.a, r.a, r.b, !1, l, "data-v-5b6ad494", null);
            e.default = c.exports
        },
        2278: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(819),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1284),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        2290: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(903),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1370),
                o = a(3);
            var l = function(t) {
                    a(5251)
                },
                c = Object(o.a)(n.a, r.a, r.b, !1, l, "data-v-748afffa", null);
            e.default = c.exports
        },
        4504: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(720),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1214),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        4511: function(t, e, a) {
            var i = a(4512);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(50).default)("119caa90", i, !0, {})
        },
        4512: function(t, e, a) {
            (t.exports = a(49)(!1)).push([t.i, "\n.activate-coin__activation[data-v-f3e41004]{max-width:412px;margin-inline:auto\n}\n.activate-coin__icon[data-v-f3e41004]{margin-bottom:28px;display:flex;justify-content:center;align-items:center\n}\n[data-v-f3e41004] .activate-coin__icon--gift{margin-inline:auto;width:60px;height:60px;border-radius:50%;background-color:#1F9EFF;display:flex;justify-content:center;align-items:center\n}\n.activate-coin__icon[data-v-f3e41004] .icon{font-size:60px\n}\n.activate-coin__info[data-v-f3e41004]{margin-bottom:27px\n}\n.activate-coin__info-title[data-v-f3e41004]{font-weight:500;text-align:center;margin-bottom:12px\n}\n.activate-coin__rows[data-v-f3e41004]{width:100%;display:flex;flex-direction:column\n}\n[data-v-f3e41004] .activate-coin__rows-item{width:100%;height:44px;border-bottom:1px solid #404A65\n}\n[data-v-f3e41004] .activate-coin__rows-item>div:first-child{min-width:145px\n}\n[data-v-f3e41004] .activate-coin__rows--activation-address{max-width:229px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\n}\n.activate-coin__error[data-v-f3e41004]{margin-top:32px\n}\n.activate-coin__actions[data-v-f3e41004]{margin-top:44px;display:flex;align-items:center;gap:19px\n}\n.activate-coin__actions[data-v-f3e41004] button{width:100%\n}\n.activate-coin__password[data-v-f3e41004]{max-width:450px;margin:120px auto 0;text-align:center\n}\n.activate-coin__password>h2[data-v-f3e41004]{margin-bottom:20px\n}\n.activate-coin__password-submit[data-v-f3e41004]{margin-top:50px;display:flex;gap:70px;width:100%;align-items:center\n}\n.activate-coin__password-submit[data-v-f3e41004] button{width:100%\n}\n.activate-coin__result[data-v-f3e41004]{height:100%;max-width:665px;margin:0px auto 0;padding-top:90px\n}\n.activate-coin__result[data-v-f3e41004] .result .info{text-align:center;position:relative;margin-bottom:40px\n}\n.activate-coin__result[data-v-f3e41004] .result .info .icon{font-size:65px;margin-bottom:30px\n}\n.activate-coin__result[data-v-f3e41004] .result .info p{font-size:24px;line-height:28px;font-weight:normal\n}\n.activate-coin__result[data-v-f3e41004] .result .info p.text-green{color:#70CE49;margin-bottom:10px\n}\n.activate-coin__result[data-v-f3e41004] .result .info p.rate-popup__title{font-size:16px;line-height:24px;opacity:0.8\n}\n.activate-coin__result[data-v-f3e41004] .result .info .steps{list-style:none;display:inline-block;text-align:left;color:#d3d4d9;font-size:18px;max-width:212px\n}\n.activate-coin__result[data-v-f3e41004] .result .info .steps li{color:#d3d4d9;margin:5px 0;font-size:inherit\n}\n.activate-coin__result[data-v-f3e41004] .result p.text-small,.activate-coin__result[data-v-f3e41004] .result a,.activate-coin__result[data-v-f3e41004] .result .text-small{font-size:16px;line-height:24px;opacity:0.8\n}\n.activate-coin__result[data-v-f3e41004] .result p.text-small.no-hover,.activate-coin__result[data-v-f3e41004] .result a.no-hover,.activate-coin__result[data-v-f3e41004] .result .text-small.no-hover{display:block;margin-bottom:0;margin-top:30px;text-decoration:none\n}\n.activate-coin__result[data-v-f3e41004] .result .copy-wrap .text-small{color:white\n}\n.activate-coin__result[data-v-f3e41004] .result .text-small{display:inline-block;word-break:break-all\n}\n.activate-coin__result[data-v-f3e41004] .result .version{text-align:center;position:absolute;bottom:10px;left:50%;transform:translateX(-50%)\n}\n.activate-coin__result[data-v-f3e41004] .result .version span{color:#d3d4d9;font-size:16px;text-align:center\n}\n.activate-coin__result[data-v-f3e41004] .result .failed{display:flex;max-width:500px;margin:auto\n}\n.activate-coin__result[data-v-f3e41004] .result .failed>button{display:block;margin:auto;font-size:15px;width:200px;padding:10px 10px;min-width:33%\n}\n.activate-coin__result[data-v-f3e41004] .result.error .info>p{margin-bottom:30px\n}\n.activate-coin__result[data-v-f3e41004] .result.error .info .icon{background:#fff\n}\n.activate-coin__result[data-v-f3e41004] .result.success .submit{position:absolute;bottom:40px;left:50%;transform:translateX(-50%)\n}\n.activate-coin__result[data-v-f3e41004] .result.success .button ~ p{margin:25px 0\n}\n.activate-coin__result[data-v-f3e41004] .result.success .button:last-child.copy{margin-right:0\n}\n.activate-coin__result[data-v-f3e41004] .result.success .button.second-button{margin-left:30px\n}\n.activate-coin__result[data-v-f3e41004] .result.success .message{top:5px\n}\n.activate-coin__loading[data-v-f3e41004]{height:100%;margin-top:-120px;display:flex;justify-content:center;align-items:center;flex-direction:column\n}\n.activate-coin__loading-loader[data-v-f3e41004]{margin-top:20px\n}\n.activate-coin__loading-info[data-v-f3e41004] .icon{font-size:66px;display:flex;justify-content:center;align-items:center;margin-bottom:23px\n}\n", ""])
        },
        4526: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(740),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1215),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        4527: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(741),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1219),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        4552: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(742),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1217),
                o = a(3);
            var l = function(t) {
                    a(4553)
                },
                c = Object(o.a)(n.a, r.a, r.b, !1, l, "data-v-758d5546", null);
            e.default = c.exports
        },
        4553: function(t, e, a) {
            var i = a(4554);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(50).default)("56185fc5", i, !0, {})
        },
        4554: function(t, e, a) {
            (t.exports = a(49)(!1)).push([t.i, "\n.sidebar-balance[data-v-758d5546]{display:contents\n}\n.sidebar-balance__wrap[data-v-758d5546]{text-align:center;position:relative;background:#374866;padding:6px 12px 6px 6px;border-radius:20px;cursor:pointer;user-select:none;margin:0 auto 5px;display:flex;align-items:center;justify-content:center;transition:all 0.3s\n}\n.sidebar-balance__wrap[data-v-758d5546]:hover{background:#5a6b90\n}\n.sidebar-balance__wrap[data-v-758d5546]:hover::after{background:#5a6b90\n}\n.sidebar-balance__wrap--loading[data-v-758d5546]::after{content:\"--.--\";position:absolute;background:#374866;display:flex;justify-content:center;align-items:center;transition:all 0.3s;right:0;height:100%;width:calc(100% - 30px);border-radius:20px\n}\n.sidebar-balance__amount[data-v-758d5546]{font-size:16px;line-height:22px;text-decoration:none;display:inline-block;bottom:0;letter-spacing:0.15px;transition:all 0.3s ease-in-out;margin-left:8px\n}\n.sidebar-balance__loader[data-v-758d5546]{position:absolute;left:-24px\n}\n.sidebar-balance__loader .loading[data-v-758d5546]{width:16px;height:16px;border-width:1px\n}\n.sidebar-balance__fiat[data-v-758d5546]{position:relative;width:40px;margin:0 auto 15px;cursor:pointer;user-select:none\n}\n.sidebar-balance__fiat-label[data-v-758d5546]{color:#8290AD;transition:all 0.3s;font-family:Roboto;font-size:14px;font-weight:400;line-height:22px;letter-spacing:0.15px;text-align:right\n}\n.sidebar-balance__fiat:hover .sidebar-balance__fiat-label[data-v-758d5546]{color:#1F8EFA\n}\n.sidebar-balance__fiat.active[data-v-758d5546]:after{transform:rotate(180deg)\n}\n.sidebar-balance__fiat[data-v-758d5546]:after{content:url(\"data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.15557 4.2952C2.40812 3.96688 2.879 3.90546 3.20732 4.15801L6.00004 6.30625L8.79275 4.15801C9.12107 3.90546 9.59196 3.96688 9.84451 4.2952C10.0971 4.62351 10.0356 5.0944 9.70732 5.34695L6.45732 7.84695C6.18773 8.05432 5.81234 8.05432 5.54275 7.84695L2.29275 5.34695C1.96444 5.0944 1.90302 4.62351 2.15557 4.2952Z' fill='%237A859F'/%3E%3C/svg%3E%0A\");position:absolute;transform:translate(0, 3px);transition:all 0.3s;margin-left:5px\n}\n", ""])
        },
        4578: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(750),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1224),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        5108: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(790),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1295),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        5114: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(812),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1280),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        5116: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(814),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1278),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        5120: function(t, e, a) {
            var i = a(5121);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(50).default)("66212390", i, !0, {})
        },
        5121: function(t, e, a) {
            (t.exports = a(49)(!1)).push([t.i, "\n.unsigned-amount[data-v-5b6ad494]{padding-left:12px\n}\n", ""])
        },
        5124: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(824),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1289),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        5125: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(826),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1292),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        5139: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = a(839),
                n = a.n(i);
            for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }))
            }(s);
            var r = a(1306),
                o = a(3),
                l = Object(o.a)(n.a, r.a, r.b, !1, null, null, null);
            e.default = l.exports
        },
        5251: function(t, e, a) {
            var i = a(5252);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(50).default)("1030479e", i, !0, {})
        },
        5252: function(t, e, a) {
            (t.exports = a(49)(!1)).push([t.i, "\n.simplex-flag[data-v-748afffa]{width:34px;height:34px\n}\n", ""])
        },
        720: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(1164),
                s = i(a(83)),
                r = i(a(2095)),
                o = a(30),
                l = {
                    name: "ActivateCoin",
                    components: {
                        CoinIcon: s.default,
                        WrapperActivate: r.default,
                        BaseButton: n.BaseButton
                    },
                    mixins: [o.CurrencyConverter, o.ActivateCoinMixin],
                    computed: {
                        headline() {
                            return `Activating ${this.coin.ticker.toUpperCase()} account`
                        },
                        text() {
                            return `Before staking, you need to activate your ${this.coin.ticker.toUpperCase()} account by making a zero transaction with a small fee. You can easily do this by clicking the "Send" button below.`
                        },
                        activationAddress() {
                            return this.coin.address
                        },
                        transactionAdditionalInfo() {
                            return {
                                icon: this.icon,
                                coin: this.coin,
                                message: " staking",
                                sendType: "Activate",
                                contactData: {
                                    issue: "Staking"
                                }
                            }
                        }
                    },
                    methods: {
                        async setFee() {
                            await this.handleSetFee(async () => await this.coin.getFee({
                                gasLimit: this.coin.stakingGasLimit
                            }))
                        },
                        async handleActivateCoin() {
                            await this.handleActivate(async () => {
                                const t = await this.coin.createApproveTransaction({});
                                return await this.coin.sendTransaction(t)
                            })
                        }
                    }
                };
            e.default = l
        },
        725: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(a(83)),
                s = i(a(76)),
                r = i(a(92));
            const o = {
                activate: "activate",
                password: "password",
                result: "result"
            };
            var l = {
                name: "WrapperActivate",
                components: {
                    CoinIcon: n.default,
                    Edit: s.default,
                    SendCoinResult: r.default
                },
                props: {
                    stage: {
                        type: String,
                        required: !0,
                        validator: t => Object.keys(o).includes(t)
                    },
                    headline: {
                        type: String,
                        default: ""
                    },
                    text: {
                        type: String,
                        default: ""
                    },
                    transaction: {
                        type: Object,
                        required: !0
                    },
                    coin: {
                        type: Object,
                        required: !0
                    }
                },
                data: () => ({
                    password: {
                        value: "",
                        error: null
                    }
                }),
                computed: {
                    COMPONENT_TYPES: () => o,
                    currentComponent() {
                        return this.COMPONENT_TYPES[this.stage]
                    }
                },
                methods: {
                    handleChangeComponent(t) {
                        this.$emit("forceChangeComponent", t)
                    },
                    handleNavigate() {
                        this.$emit("navigate")
                    },
                    handleValidatePassword() {
                        this.password.error = null;
                        const t = this.password.value;
                        "" === t ? this.password.error = "Password can't be blank" : t !== this.$storage.password && (this.password.error = "Wrong password"), null === this.password.error && this.$emit("confirmPassword")
                    }
                }
            };
            e.default = l
        },
        740: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(1164),
                s = i(a(2095)),
                r = a(30),
                o = {
                    name: "ActivateAutoclaimDrops",
                    components: {
                        WrapperActivate: s.default,
                        BaseButton: n.BaseButton
                    },
                    mixins: [r.CurrencyConverter, r.ActivateCoinMixin],
                    computed: {
                        isActivateAutoclaimDrops() {
                            return this.coin.balances.additional.activeAutoClaim || this.$store.getters.hasAutoclaimAirdropByTicker({
                                ticker: this.ticker
                            })
                        },
                        dropsName() {
                            return this.coin.name + "Drops"
                        },
                        headline() {
                            return this.isActivateAutoclaimDrops ? this.dropsName + " Autoclaim is active!" : `Activating ${this.dropsName} Autoclaim`
                        },
                        text() {
                            return this.isActivateAutoclaimDrops ? `\n          You must hold WFLR for 23 days before each claim day to receive ${this.ticker} tokens from FlareDrops. Tokens will be claimed automatically every month.\n          The next drop takes place on ${this.nextDrop}.\n        ` : this.Texts.TextDesktop.hintsActivate("autoclaimAirdrops")
                        },
                        nextDrop() {
                            return this.$moment(new Date(this.coin.getNextDropDate())).format("DD-MMM-YYYY")
                        },
                        transactionAdditionalInfo() {
                            return {
                                icon: this.icon,
                                coin: this.coin,
                                message: this.dropsName + " autoclaim",
                                sendType: "ActivateAutoclaim",
                                contactData: {
                                    issue: "Transaction issue (deposit/withdrawal)"
                                }
                            }
                        }
                    },
                    methods: {
                        async setFee() {
                            await this.handleSetFee(async () => await this.coin.getFee({
                                gasLimit: this.coin.autoClaimGasLimit
                            }))
                        },
                        async handleActivateCoin() {
                            await this.handleActivate(async () => {
                                const t = await this.coin.createAutoClaimTransaction(),
                                    e = await this.coin.sendTransaction(t);
                                return this.$store.dispatch("updateAutoclaimAirdrop", {
                                    ticker: this.ticker,
                                    value: !0
                                }), e
                            })
                        }
                    }
                };
            e.default = o
        },
        741: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, a(1167);
            var n = a(31),
                s = i(a(4552)),
                r = i(a(359)),
                o = {
                    name: "Sidebar",
                    components: {
                        SidebarBalance: s.default,
                        AtomicNotifyPoint: r.default
                    },
                    data: () => ({
                        menu: [{
                            icon: "wallets",
                            name: "Wallet",
                            route: "main"
                        }, {
                            icon: "exchange",
                            name: "Exchange",
                            route: "exchange"
                        }, {
                            icon: "buycrypto",
                            name: "Buy crypto",
                            route: "simplex"
                        }, {
                            icon: "history",
                            name: "History",
                            route: "history"
                        }, {
                            icon: "staking",
                            name: "Staking",
                            route: "staking"
                        }, {
                            icon: "nft",
                            name: "NFT gallery",
                            route: "nft"
                        }, {
                            icon: "settings",
                            name: "Settings",
                            route: "settings"
                        }, {
                            icon: "support",
                            name: "Support",
                            route: "support"
                        }]
                    }),
                    computed: {
                        ...(0, n.mapGetters)(["currentMembershipStatus"])
                    },
                    methods: {
                        ...(0, n.mapActions)(["toggleWizardWindow"]),
                        goToPortfolio() {
                            this.$bus.$emit("close-info-coin"), this.$bus.$emit("close-send-coin"), "/portfolio" !== this.$router.currentRoute.path && this.$router.push("/portfolio");
                            document.querySelector(".wallet-table").scrollTop = 0
                        },
                        routerLinkClick(t) {
                            "main-page" === this.$router.currentRoute.name && "main" === t && (this.toggleWizardWindow(!1), this.$bus.$emit("close-info-coin"), this.$bus.$emit("close-send-coin"), this.$bus.$emit("close-token-add"), this.$bus.$emit("close-staking-popup")), "staking-page" === this.$router.currentRoute.name && "staking" === t && (this.$bus.$emit("close-staking-exchange-popup"), this.$bus.$emit("close-staking-popup")), "exchange-basic" === this.$router.currentRoute.name && this.$bus.$emit("close-exchange-basic-popup"), this.$bus.$emit("activate-coin", {
                                id: null
                            }), this.$ga.event("User Movement", this.$router.currentRoute.name, {
                                clientID: this.$ga.customParams.uid
                            })
                        }
                    }
                };
            e.default = o
        },
        742: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(31),
                s = a(30),
                r = a(224),
                o = i(a(4555)),
                l = a(246),
                c = i(a(4556));
            var d = {
                name: "SidebarBalance",
                components: {
                    FiatDropdown: o.default,
                    PortfolioChart: l.PortfolioChart
                },
                mixins: [s.CurrencyConverter],
                data: () => ({
                    selectActiveFiat: !1,
                    refreshDataTimeoutID: null,
                    balanceAmountHTML: null
                }),
                computed: {
                    ...(0, n.mapGetters)(["fiatRate", "prevFiatRate", "coinRate", "balanceSummary", "isUpdatingFiat"]),
                    amountDecimals() {
                        return "BTC" === this.fiatRate ? 8 : 2
                    },
                    isUpdatingData() {
                        return this.isUpdatingFiat
                    },
                    balanceSummaryFixed() {
                        return Number(this.$options.filters.formatFiat(this.balanceSummary(this.fiatRate)))
                    }
                },
                watch: {
                    amountDecimals: "refreshData",
                    balanceSummaryFixed: "refreshData"
                },
                beforeDestroy() {
                    this.$bus.$off("update::fiat-balance", this.refreshData)
                },
                mounted() {
                    this.$bus.$on("update::fiat-balance", this.refreshData), this.balanceAmountHTML = new c.default(this.$refs.counter, 0, this.balanceSummaryFixed, this.amountDecimals, .3), this.balanceAmountHTML.start()
                },
                methods: {
                    ...(0, n.mapActions)(["getRates", "toggleFiat", "changeUpdatingFiat", "initChartData"]),
                    refreshData() {
                        this.isUpdatingData || (this.refreshDataTimeoutID && clearTimeout(this.refreshDataTimeoutID), this.refreshDataTimeoutID = setTimeout(() => {
                            this.balanceAmountHTML.decimals = Math.max(0, this.amountDecimals), this.balanceAmountHTML.update(this.balanceSummaryFixed)
                        }, 250))
                    },
                    goToPortfolio() {
                        this.$bus.$emit("close-info-coin"), this.$bus.$emit("close-send-coin"), this.$router.push("/portfolio").catch(() => null)
                    },
                    toggleFiatRate(t) {
                        this.isUpdatingData || "INPUT" !== t.srcElement.nodeName && (this.selectActiveFiat = !this.selectActiveFiat)
                    },
                    async selectFiatCallback(t) {
                        if (!this.isUpdatingData) try {
                            this.selectActiveFiat = !1, this.changeUpdatingFiat(!0), this.toggleFiat(t), localStorage.setItem(r.CURRENT_FIAT_CURRENCY, JSON.stringify(t)), localStorage.setItem("simplex::sendFiat", t.code), await Promise.allSettled([this.initChartData(), this.getRates()])
                        } catch (t) {
                            this.toggleFiat(this.prevFiatRate)
                        } finally {
                            this.changeUpdatingFiat(!1), this.refreshData()
                        }
                    }
                }
            };
            e.default = d
        },
        746: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                name: "AtomicSelect",
                components: {
                    SelectArrow: a(246).SelectArrow
                },
                props: {
                    label: {
                        type: String,
                        default: ""
                    },
                    list: {
                        type: Array,
                        default: () => []
                    },
                    isError: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: () => ({
                    activeLabel: "",
                    isOpen: !1
                }),
                methods: {
                    outsideClick(t) {
                        t.stopPropagation(), this.isOpen = !1
                    },
                    setActiveLabel(t) {
                        this.activeLabel = t, this.$emit("setActiveLabel", t)
                    }
                }
            };
            e.default = i
        },
        750: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                name: "AtomicLogoExtended",
                props: {
                    status: {
                        type: String,
                        default: "basic"
                    },
                    edges: {
                        type: Boolean,
                        default: !0
                    }
                }
            };
            e.default = i
        },
        790: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(a(360)),
                s = a(31),
                r = a(30),
                o = i(a(2262)),
                l = i(a(362)),
                c = i(a(529)),
                d = i(a(2274)),
                u = i(a(2276)),
                p = i(a(2279)),
                v = i(a(2280)),
                f = i(a(2281)),
                C = i(a(5125)),
                m = i(a(5126)),
                _ = a(224);
            var h = {
                name: "TableCoins",
                components: {
                    Coin: o.default,
                    Table: l.default,
                    Search: c.default,
                    SendCoin: d.default,
                    CoinInfo: u.default,
                    FilterPopup: p.default,
                    ReceiveCoin: v.default,
                    FilterButton: f.default,
                    AtomicManSvg: C.default,
                    WalletWizard: m.default
                },
                mixins: [r.CurrencyConverter, r.WalletsTables],
                data: () => ({
                    tableFields: [{
                        key: "name",
                        slot: "header-row-1"
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
                    }, {
                        key: "controls",
                        slot: "header-row-2"
                    }],
                    activeSortField: "marketCap",
                    isSortASC: !1,
                    filter: "",
                    isFiltersPopup: !1,
                    hideZero: !1,
                    activeStaking: null,
                    sortWallet: [],
                    excludedFields: ["name", "controls", "chart"],
                    resendParams: null
                }),
                computed: {
                    ...(0, s.mapGetters)(["walletsNotify", "walletExcludedCoins", "defaultExcludedCoins"]),
                    highlight() {
                        return this.defaultExcludedCoins.slice().sort().join() !== this.walletExcludedCoins.slice().sort().join() && this.walletExcludedCoins.length > 0
                    },
                    filterWallets() {
                        const t = this.filter.toLowerCase().trim();
                        return this.walletsState.filter(({
                            divisibleBalance: e,
                            ticker: a,
                            name: i,
                            id: n
                        }) => {
                            const s = -1 !== a.toLowerCase().indexOf(t) || -1 !== i.toLowerCase().indexOf(t),
                                r = !this.walletExcludedCoins.includes(n),
                                o = 0 === this.getCoinBalance(e, a, n),
                                l = this.hideZero && o;
                            return r && s && !l
                        })
                    },
                    mapedWalletsNotify() {
                        return this.walletsNotify.map(t => {
                            const e = t.split("-");
                            return {
                                ticker: e[1],
                                network: e[2] || ""
                            }
                        })
                    },
                    tableItems() {
                        let t;
                        const e = this.$rates.getCoinPrice(this.$wallets.getWallet("BTC"), this.fiatRate),
                            a = t => this.mapedWalletsNotify.filter(({
                                ticker: e = "",
                                network: a = ""
                            }) => e === (null == t ? void 0 : t.ticker.split("-").join("")) && (!a.length || a === ((null == t ? void 0 : t.deprecatedParent) || (null == t ? void 0 : t.parent)))).length;
                        return !String(e) && this.sortWallet.length > 0 ? (0, n.default)(this.walletsForTable).asc((t, e) => a(t) ? -1e12 : e) : (t = this.isSortASC ? (0, n.default)(this.walletsForTable).asc(t => a(t) ? -1e12 : t.isPlaceholder ? 1e12 : Number(t[this.activeSortField])) : (0, n.default)(this.walletsForTable).desc(t => a(t) ? 1e12 : t.isPlaceholder ? -1e12 : Number(t[this.activeSortField])), this.cachingSortWallet(t), t)
                    },
                    coinListForSettings() {
                        return this.$wallets.filter(t => !_.DISABLED_COINS.includes(t.deprecatedParent)).sort((t, e) => t.ticker.localeCompare(e.ticker))
                    }
                },
                async beforeMount() {
                    if (this.$route.params && this.$route.params.resend) {
                        const {
                            tx: t
                        } = this.$route.params, e = this.$wallets.getWallet(t.walletid, t.alias);
                        this.toggleSendCoinPopup(e, t)
                    }
                    this.$route.params.ticker && (this.activeCoin = this.$wallets.getWallet(this.$route.params.ticker), this.toggleReceiveCoinPopup(this.activeCoin)), this.activeSortField = localStorage.getItem("activeSortField") || "marketCap", this.hideZero = "true" === localStorage.getItem("hidezero::filter")
                },
                methods: {
                    ...(0, s.mapActions)(["toggleWizardWindow", "setWalletExcludedCoins", "disableDefaultExcludedCoins"]),
                    acceptFilter(t) {
                        this.disableDefaultExcludedCoins(), this.setWalletExcludedCoins(t.excludedCoins), this.toggleFiltersPopup(), this.hideZero = t.hideZero, localStorage.setItem("hidezero::filter", this.hideZero)
                    },
                    toggleFiltersPopup() {
                        this.isFiltersPopup = !this.isFiltersPopup
                    },
                    toggleWizard(t) {
                        this.toggleWizardWindow(t)
                    },
                    cachingSortWallet(t) {
                        this.sortWallet = t
                    },
                    sortByField(t) {
                        this.excludedFields.includes(t) || (this.activeSortField === t ? this.isSortASC = !this.isSortASC : (this.activeSortField = t, this.isSortASC = !1, localStorage.setItem("activeSortField", t)))
                    }
                }
            };
            e.default = h
        },
        791: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(31),
                s = a(30),
                r = i(a(2263)),
                o = i(a(83)),
                l = i(a(359));
            var c = {
                name: "Coin",
                components: {
                    Chart: r.default,
                    CoinIcon: o.default,
                    AtomicNotifyPoint: l.default
                },
                filters: {
                    trimText(t, e) {
                        const a = "" + (t || "");
                        return a.length > e ? a.substr(0, e) + "..." : a
                    }
                },
                mixins: [s.CurrencyConverter],
                props: {
                    coin: {
                        type: Object,
                        default: Object
                    },
                    isPortfolio: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: () => ({
                    nameMaxLength: 15,
                    nameMinLength: 10,
                    chartReady: !1,
                    maxTrimLength: 17
                }),
                computed: {
                    ...(0, n.mapGetters)(["fiatRate", "coinRate", "fiatCharacter", "walletsNotify", "isUpdatingFiat", "chartDataTickerByZoom", "isChartDataLoading", "chartDataMainEndpoint"]),
                    currentCoinRate() {
                        return this.coinRate(this.fiatRate, this.coin)
                    },
                    isPlaceholder() {
                        return !this.coin.confirmed || this.isUpdatingFiat || 0 === this.currentCoinRate.rate
                    },
                    getData() {
                        return this.chartDataTickerByZoom({
                            ticker: this.coin.ticker
                        }).points.filter((t, e) => e % 4 == 0)
                    },
                    notifyUID() {
                        return `walletTableTicker-${this.coin.ticker.split("-").join("")}-${this.coin.parent&&this.coin.parent!==this.coin.ticker?this.coin.parent:""}`
                    },
                    isNotify() {
                        const t = `${this.coin.ticker.split("-").join("")}-${this.coin.parent&&this.coin.parent!==this.coin.ticker?this.coin.parent:""}`,
                            e = "walletTableTickerInfo-" + t,
                            a = "article-" + t;
                        return this.walletsNotify.includes(e) || this.walletsNotify.includes(a)
                    }
                },
                watch: {
                    coin() {
                        this.cacheBalance()
                    }
                },
                mounted() {
                    this.cacheBalance()
                },
                created() {
                    const t = this.$wallets.getWallet(this.coin.id),
                        e = localStorage.getItem(this.coin.id + "-staking-infos");
                    t && !t.isStakingSupported() && 0 === Object.keys(t.balances || {}).length && e && (t.balances = JSON.parse(e))
                },
                methods: {
                    ...(0, n.mapActions)(["updateWalletState"]),
                    clickHandler() {
                        this.$emit("toggleCoinInfoPopup", this.coin)
                    },
                    cacheBalance() {
                        const t = this.$wallets.getWallet(this.coin.id);
                        localStorage.setItem(this.coin.id + "-balance", this.coin.balance), t && t.balances && !t.isStakingSupported() && localStorage.setItem(this.coin.id + "-staking-infos", JSON.stringify(t.balances))
                    }
                }
            };
            e.default = c
        },
        812: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "AboutTab",
                components: {
                    CoinArticle: i(a(5115)).default
                },
                props: {
                    coin: {
                        type: Object,
                        default: null
                    },
                    articles: {
                        type: Array,
                        default: () => []
                    }
                }
            };
            e.default = n
        },
        814: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(a(5117)),
                s = i(a(1173)),
                r = {
                    name: "ArticleCard",
                    components: {
                        CachedImage: i(a(2137)).default,
                        ImagePreview: s.default,
                        YoutubePlay: n.default
                    },
                    props: {
                        article: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    data: () => ({
                        backupImage: !1,
                        isLoadingImage: !0
                    }),
                    computed: {
                        isYoutube() {
                            return this.article.contentUrl.toLowerCase().includes("youtu")
                        }
                    },
                    methods: {
                        handleImageError() {
                            this.backupImage = !0
                        }
                    }
                };
            e.default = r
        },
        818: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(30),
                s = i(a(83)),
                r = a(246);
            const o = [38, 15],
                l = [42, 20],
                c = [55, 22],
                d = [60, 25];
            var u = {
                name: "HistoryTableRow",
                components: {
                    CoinIcon: s.default,
                    SuccessMark: r.SuccessMark
                },
                mixins: [n.SettingsMixin, n.CurrencyConverter, n.TransactionMixin],
                props: {
                    openedIds: {
                        type: Array,
                        default: () => []
                    },
                    indexTx: {
                        type: Number,
                        default: 0
                    }
                },
                data: () => ({
                    showCopy: !1,
                    isCopyAddress: !0,
                    resizeEvent: null
                }),
                computed: {
                    isTxSign() {
                        const t = ["reward", "claim", "transfer", "regular", "transfer nft"].includes(this.txType);
                        return this.isPendingTx && (t || !this.txType) || t || !this.txType
                    },
                    activeOpened() {
                        return this.openedIds.includes(this.idRow)
                    },
                    idRow() {
                        return `${this.tx.txid}txid${this.indexTx}`
                    },
                    isSuccessTx() {
                        return !this.isPending && 0 !== Number(this.tx.confirmations)
                    },
                    isPendingTx() {
                        return 0 === Number(this.tx.confirmations)
                    },
                    currentCoin() {
                        return this.tx.walletid && this.$wallets.getWallet(this.tx.walletid)
                    }
                },
                beforeDestroy() {
                    window.removeEventListener("resize", this.resizeHandler)
                },
                beforeMount() {
                    window.addEventListener("resize", this.resizeHandler)
                },
                methods: {
                    resendTx() {
                        "main-page" === this.$route.name ? this.$emit("resendCoin", this.tx) : this.$router.push({
                            name: "main-page",
                            params: {
                                resend: !0,
                                tx: this.tx
                            }
                        })
                    },
                    toggleItem() {
                        const t = this.activeOpened ? "removeOpenedId" : "addOpenedId";
                        this.$emit(t, this.idRow)
                    },
                    maxAddressSize() {
                        return this.windowWidth < 1e3 ? o : this.windowWidth < 1150 ? l : this.windowWidth < 1300 ? c : d
                    },
                    resizeHandler(t) {
                        this.windowWidth = t.target.innerWidth
                    }
                }
            };
            e.default = u
        },
        819: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(246);
            const n = ["Success", "Warning", "Error", "Report"];
            var s = {
                name: "Alert",
                components: {
                    AlertIcon: i.AlertIcon
                },
                props: {
                    type: {
                        type: String,
                        default: "Success"
                    },
                    message: {
                        type: String,
                        default: ""
                    }
                },
                created() {
                    n.includes(this.type) || console.error(this.type + " not found in list of types")
                }
            };
            e.default = s
        },
        824: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                name: "HederaActivation",
                props: {
                    coin: {
                        type: Object,
                        default: Object
                    },
                    isActivating: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: () => ({
                    isError: !1,
                    isSuccess: !1
                }),
                methods: {
                    async activateAccount() {
                        this.$emit("changeActivation", !0);
                        await this.coin.activationAccount() ? this.isSuccess = !0 : this.isError = !0
                    },
                    talkWithSupport() {
                        this.$bus.$emit("openSupportPopup", {
                            isNotText: !1,
                            tags: ["send_tag"],
                            subject: "Transaction issue (deposit/withdrawal)"
                        })
                    }
                }
            };
            e.default = i
        },
        826: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            e.default = {
                name: "AtomicManSvg"
            }
        },
        839: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(a(360)),
                s = a(246),
                r = i(a(83)),
                o = a(30),
                l = i(a(359)),
                c = {
                    name: "StakingEmpty",
                    components: {
                        ExchangeWhiteArrow: s.ExchangeWhiteArrow,
                        CoinIcon: r.default,
                        AtomicNotifyPoint: l.default
                    },
                    mixins: [o.BuyMixin],
                    props: {
                        items: {
                            type: Array,
                            default: () => []
                        }
                    },
                    computed: {
                        sortedItems() {
                            return (0, n.default)(this.items).desc(t => Number(t.reward))
                        },
                        buyCryptoWallet() {
                            return this.items.find(({
                                isDefaultBuyCrypto: t
                            }) => t) || null
                        }
                    },
                    methods: {
                        clickHandler(t) {
                            this.$store.commit("ADD_COMPLETED_REASON", "staking-" + t.ticker), this.$emit("openStakingPopup", t)
                        }
                    }
                };
            e.default = c
        },
        903: function(t, e, a) {
            "use strict";
            var i = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(204),
                s = i(a(83)),
                r = a(246);
            const o = ["Completed", "Refunded", "Finished", "Success"],
                l = ["Awaiting deposit", "Confirming", "Exchanging", "Sending", "Attempt", "Pending"];
            var c = {
                name: "ExchangeHistoryItem",
                components: {
                    AtomicFlagIcon: n.AtomicFlagIcon,
                    CoinIcon: s.default,
                    SuccessMark: r.SuccessMark
                },
                props: {
                    isSimplex: {
                        type: Boolean,
                        default: !1
                    },
                    isTooltip: {
                        type: Boolean,
                        default: !1
                    },
                    isOrderDetails: {
                        type: Boolean,
                        default: !1
                    },
                    sentAmount: {
                        type: String,
                        default: ""
                    },
                    sentTicker: {
                        type: String,
                        default: ""
                    },
                    sentWallet: {
                        type: Object,
                        default: null
                    },
                    getAmount: {
                        type: String,
                        default: ""
                    },
                    getTicker: {
                        type: String,
                        default: ""
                    },
                    getWallet: {
                        type: Object,
                        default: null
                    },
                    date: {
                        type: String,
                        default: ""
                    },
                    status: {
                        type: String,
                        default: ""
                    },
                    id: {
                        type: String,
                        default: ""
                    }
                },
                data: () => ({
                    copied: !1,
                    expanded: !1
                }),
                computed: {
                    contactSupport() {
                        return {
                            additionalText: `-----------------------\n${this.sentWallet?this.sentWallet.ticker:this.sentTicker} > ${this.getWallet?this.getWallet.ticker:this.getTicker}\nOrder ID: ${this.id}`,
                            subject: "Buy crypto",
                            tags: ["buycrypto_tag"]
                        }
                    },
                    showTooltip() {
                        return !["Completed", "Refunded"].includes(this.status) && this.isTooltip
                    },
                    isSuccess() {
                        return o.includes(this.status)
                    },
                    isPending() {
                        return l.includes(this.status)
                    }
                },
                methods: {
                    findWallet(t) {
                        return "USDT" === t ? this.$wallets.findWalletV2({
                            ticker: t,
                            parentTicker: "ETH"
                        }) : this.$wallets.findWallet(t) || t
                    },
                    toogleExpanded() {
                        this.isOrderDetails ? this.$emit("openRow") : this.expanded = !this.expanded
                    },
                    copyOrderId() {
                        this.$electron.clipboard.writeText(this.id), this.copied = !0, setTimeout(() => {
                            this.copied = !1
                        }, 1e3)
                    }
                }
            };
            e.default = c
        }
    }
]);