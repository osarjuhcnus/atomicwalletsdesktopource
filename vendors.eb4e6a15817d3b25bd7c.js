(window.webpackJsonp = window.webpackJsonp || []).push([
    [159], {
        1167: function(t, l, e) {
            e(4528), e(4529), e(4530), e(2102), e(2103), e(2104), e(2105), e(2106), e(2107), e(4531), e(4532), e(2108), e(2109), e(2110), e(4533), e(2111), e(2112), e(2113), e(4534), e(4535), e(2114), e(4536), e(2115), e(2116), e(4537), e(2117), e(2118), e(2119), e(2120), e(4538), e(2121), e(2122), e(2123), e(2124), e(2125), e(2126), e(4539), e(2127), e(2128), e(2129), e(2130), e(2131), e(4540), e(2132), e(4541), e(2102), e(2103), e(2104), e(2105), e(2106), e(2107), e(2108), e(2109), e(2110), e(2111), e(2112), e(2113), e(2114), e(2115), e(2116), e(2117), e(2118), e(2119), e(2120), e(2121), e(2123), e(2124), e(2125), e(2126), e(2127), e(2128), e(2129), e(2130), e(2131), e(2132), e(4542), e(4543), e(4544), e(4545), e(4546), e(4547), e(4548), e(4549), e(2122), e(4550), e(4551)
        },
        1293: function(t, l, e) {
            "use strict";
            e.d(l, "a", (function() {
                return i
            })), e.d(l, "b", (function() {
                return a
            }));
            var i = function() {
                    var t = this,
                        l = t.$createElement,
                        e = t._self._c || l;
                    return e("div", {
                        staticClass: "eos-wizard"
                    }, [e("div", {
                        staticClass: "icon icon-default icon-eos"
                    }), t._v(" "), e("div", {
                        staticClass: "header"
                    }, [t.isFirstStep ? e("div", {
                        staticClass: "title"
                    }, [t._v("\n      Choose your EOS account address\n    ")]) : t._e(), t._v(" "), t.isFirstStep ? t._e() : e("div", {
                        staticClass: "title"
                    }, [t._v("\n      Activate account\n    ")]), t._v(" "), t.isFirstStep ? t._e() : e("div", {
                        staticClass: "subtitle"
                    }, [t._v("\n      Send " + t._s(t.coin.accountActivationSum) + " EOS to the activation Address and specify the Memo id in transaction.\n    ")])]), t._v(" "), t.isFirstStep ? e("div", {
                        staticClass: "step-1",
                        class: {
                            disabled: t.loading
                        }
                    }, [e("Edit", {
                        attrs: {
                            error: t.loginError,
                            maxLength: t.charsMax,
                            specialCharacters: !1,
                            specialCharactersPattern: /^[a-zA-Z1-5]+$/,
                            placeholder: "Enter account address",
                            type: "text"
                        },
                        model: {
                            value: t.login,
                            callback: function(l) {
                                t.login = l
                            },
                            expression: "login"
                        }
                    }), t._v(" "), e("p", [t._v("\n      The account address must have exactly " + t._s(t.charsLeft) + " more characters. a-z, 1-5\n    ")]), t._v(" "), e("button", {
                        staticClass: "button link",
                        on: {
                            click: function(l) {
                                return t.generateName()
                            }
                        }
                    }, [t._v("\n      Generate account address\n    ")]), t._v(" "), e("button", {
                        staticClass: "button link button-instruction",
                        on: {
                            click: function(l) {
                                return t.$electron.shell.openExternal("https://support.atomicwallet.io/article/65-how-to-create-a-eos-account")
                            }
                        }
                    }, [t._v("\n      Instruction: How to activate EOS account\n    ")])], 1) : e("div", {
                        staticClass: "step-2"
                    }, [e("p", [t._v("\n      Activation address\n    ")]), t._v(" "), e("p", {
                        staticClass: "name",
                        on: {
                            click: function(l) {
                                return t.copyAddress(t.coin.accountActivationAddress, "account")
                            }
                        }
                    }, [t._v("\n      " + t._s(t.coin.accountActivationAddress) + "\n    ")]), t._v(" "), e("p", [t._v("\n      Memo. ID\n    ")]), t._v(" "), e("p", {
                        staticClass: "name",
                        on: {
                            click: function(l) {
                                return t.copyAddress(t.signUpTxMemo, "Memo. ID")
                            }
                        }
                    }, [t._v("\n      " + t._s(t.signUpTxMemo) + "\n    ")]), t._v(" "), e("p", {
                        staticClass: "notify"
                    }, [t._v("\n      You may send EOS from any exchange, like Bitfinex, Huobi, OkEx or any other existing wallet or service\n    ")]), t._v(" "), e("p", {
                        staticClass: "notify"
                    }, [t._v("\n      You should reload balances within 10-20 minutes after the transaction to get into your activated account\n    ")]), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.copied ? e("div", {
                        staticClass: "message"
                    }, [t._v("\n        Your " + t._s(t.notificationTag) + " copied to Clipboard\n      ")]) : t._e()])], 1), t._v(" "), e("div", {
                        staticClass: "footer",
                        class: {
                            above: t.isFirstStep
                        }
                    }, [t.loading ? e("div", {
                        staticClass: "loader"
                    }) : t._e(), t._v(" "), t.isFirstStep ? e("button", {
                        staticClass: "button",
                        class: {
                            disabled: t.loading
                        },
                        on: {
                            click: t.nextStep
                        }
                    }, [t._v("\n      Next\n    ")]) : e("button", {
                        staticClass: "button",
                        class: {
                            disabled: t.loading
                        },
                        on: {
                            click: function(l) {
                                return t.toggleWizardWindow(!1)
                            }
                        }
                    }, [t._v("\n      Close\n    ")]), t._v(" "), e("p", [t._v("\n      Step " + t._s(t.isFirstStep ? 1 : 2) + " / 2\n    ")]), t._v(" "), t.isFirstStep ? t._e() : e("button", {
                        staticClass: "button link",
                        on: {
                            click: function(l) {
                                t.isFirstStep = !0
                            }
                        }
                    }, [t._v("\n      Back\n    ")])])])
                },
                a = []
        },
        1294: function(t, l, e) {
            "use strict";
            e.d(l, "a", (function() {
                return i
            })), e.d(l, "b", (function() {
                return a
            }));
            var i = function() {
                    var t = this.$createElement,
                        l = this._self._c || t;
                    return l("div", {
                        staticClass: "popup wizard"
                    }, [l("div", {
                        staticClass: "close",
                        on: {
                            click: this.close
                        }
                    }, [this._v("\n    ✕\n  ")]), this._v(" "), 0 !== Object.keys(this.coin).length ? l("Wizard", {
                        attrs: {
                            coin: this.coin
                        }
                    }) : this._e()], 1)
                },
                a = []
        },
        2102: function(t, l, e) {
            e(32).register({
                "atomic-active": {
                    width: 25,
                    height: 25,
                    viewBox: "0 0 25 25",
                    data: '<use xlink:href="#path0_stroke" transform="translate(1 1)" fill="#2FA6FA"/><g transform="translate(6 5)" _fill="#2FA6FA"><use xlink:href="#path1_fill"/><use xlink:href="#path2_fill"/><use xlink:href="#path3_fill"/><use xlink:href="#path4_fill"/></g><defs><path pid="0" id="path0_stroke" d="M11.5 24C18.404 24 24 18.404 24 11.5h-2C22 17.299 17.299 22 11.5 22v2zM24 11.5C24 4.596 18.404-1 11.5-1v2C17.299 1 22 5.701 22 11.5h2zM11.5-1C4.596-1-1 4.596-1 11.5h2C1 5.701 5.701 1 11.5 1v-2zM-1 11.5C-1 18.404 4.596 24 11.5 24v-2C5.701 22 1 17.299 1 11.5h-2z"/><path pid="1" id="path1_fill" d="M0 13L3.858 2.028C4.348.747 5.26.02 6.473 0a3.11 3.11 0 01.054 0C7.74.021 8.653.747 9.142 2.028L13 13l-2.389-.863-3.295-9.373c-.2-.518-.432-.705-.816-.713-.384.008-.615.195-.816.713L2.39 12.137 0 13z"/><path pid="2" id="path2_fill" d="M8.179 8.822c0 .958-.742 1.735-1.656 1.735-.915 0-1.656-.777-1.656-1.735 0-.958.741-1.735 1.656-1.735.914 0 1.656.777 1.656 1.735z"/><path pid="3" id="path3_fill" d="M0 13L3.858 2.028C4.348.747 5.26.02 6.473 0a3.11 3.11 0 01.054 0C7.74.021 8.653.747 9.142 2.028L13 13l-2.389-.863-3.295-9.373c-.2-.518-.432-.705-.816-.713-.384.008-.615.195-.816.713L2.39 12.137 0 13z"/><path pid="4" id="path4_fill" d="M8.179 8.822c0 .958-.742 1.735-1.656 1.735-.915 0-1.656-.777-1.656-1.735 0-.958.741-1.735 1.656-1.735.914 0 1.656.777 1.656 1.735z"/></defs>'
                }
            })
        },
        2103: function(t, l, e) {
            e(32).register({
                atomic: {
                    width: 25,
                    height: 25,
                    viewBox: "0 0 25 25",
                    data: '<g _fill="#8290AD" transform="translate(-13562 -2293)"><use xlink:href="#path0_fill" transform="translate(13563 2294)"/><use xlink:href="#path1_fill" transform="translate(13568 2298)"/><use xlink:href="#path2_fill" transform="translate(13568 2298)"/><use xlink:href="#path3_fill" transform="translate(13568 2298)"/><use xlink:href="#path4_fill" transform="translate(13568 2298)"/></g><defs><path pid="0" id="path0_fill" d="M11.5 24C18.404 24 24 18.404 24 11.5h-2C22 17.299 17.299 22 11.5 22v2zM24 11.5C24 4.596 18.404-1 11.5-1v2C17.299 1 22 5.701 22 11.5h2zM11.5-1C4.596-1-1 4.596-1 11.5h2C1 5.701 5.701 1 11.5 1v-2zM-1 11.5C-1 18.404 4.596 24 11.5 24v-2C5.701 22 1 17.299 1 11.5h-2z"/><path pid="1" id="path1_fill" d="M0 13L3.858 2.028C4.348.747 5.26.02 6.473 0a3.11 3.11 0 01.054 0C7.74.021 8.653.747 9.142 2.028L13 13l-2.389-.863-3.295-9.373c-.2-.518-.432-.705-.816-.713-.384.008-.615.195-.816.713L2.39 12.137 0 13z"/><path pid="2" id="path2_fill" d="M8.179 8.822c0 .958-.742 1.735-1.656 1.735-.915 0-1.656-.777-1.656-1.735 0-.958.741-1.735 1.656-1.735.914 0 1.656.777 1.656 1.735z"/><path pid="3" id="path3_fill" d="M0 13L3.858 2.028C4.348.747 5.26.02 6.473 0a3.11 3.11 0 01.054 0C7.74.021 8.653.747 9.142 2.028L13 13l-2.389-.863-3.295-9.373c-.2-.518-.432-.705-.816-.713-.384.008-.615.195-.816.713L2.39 12.137 0 13z"/><path pid="4" id="path4_fill" d="M8.179 8.822c0 .958-.742 1.735-1.656 1.735-.915 0-1.656-.777-1.656-1.735 0-.958.741-1.735 1.656-1.735.914 0 1.656.777 1.656 1.735z"/></defs>'
                }
            })
        },
        2104: function(t, l, e) {
            e(32).register({
                awc: {
                    width: 65,
                    height: 65,
                    viewBox: "0 0 65 65",
                    data: '<use xlink:href="#path0_fill" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 65 -65 0 32.5 0)"><stop offset="0" stop-color="#42C1FD"/><stop offset="1" stop-color="#1F8EFA"/></linearGradient><path pid="0" id="path0_fill" fill-rule="evenodd" d="M0 32.5C0 14.55 14.55 0 32.5 0S65 14.55 65 32.5 50.45 65 32.5 65 0 50.45 0 32.5zm24.463-16.105L12 51l7.718-2.72 10.646-29.561c.648-1.635 1.396-2.224 2.636-2.25 1.24.026 1.988.615 2.636 2.25l10.646 29.56L54 51 41.537 16.395c-1.581-4.04-4.53-6.327-8.45-6.393V10h-.175v.002c-3.92.066-6.868 2.353-8.449 6.393zm8.61 26.901c2.955 0 5.35-2.45 5.35-5.473 0-3.023-2.395-5.473-5.35-5.473-2.954 0-5.35 2.45-5.35 5.473 0 3.023 2.396 5.473 5.35 5.473z"/></defs>'
                }
            })
        },
        2105: function(t, l, e) {
            e(32).register({
                buycrypto: {
                    width: 23,
                    height: 17,
                    viewBox: "0 0 23 17",
                    data: '<mask id="svgicon_buycrypto_a" fill="#fff"><path pid="0" d="M0 3a3 3 0 013-3h17a3 3 0 013 3v11a3 3 0 01-3 3H3a3 3 0 01-3-3V3z"/></mask><path pid="1" d="M1 6.25h21v-1.5H1v1.5zM1.5 3A1.5 1.5 0 013 1.5v-3A4.5 4.5 0 00-1.5 3h3zM3 1.5h17v-3H3v3zm17 0A1.5 1.5 0 0121.5 3h3A4.5 4.5 0 0020-1.5v3zM21.5 3v11h3V3h-3zm0 11a1.5 1.5 0 01-1.5 1.5v3a4.5 4.5 0 004.5-4.5h-3zM20 15.5H3v3h17v-3zm-17 0A1.5 1.5 0 011.5 14h-3A4.5 4.5 0 003 18.5v-3zM1.5 14V3h-3v11h3z" _fill="#fff" mask="url(#svgicon_buycrypto_a)"/>'
                }
            })
        },
        2106: function(t, l, e) {
            e(32).register({
                check: {
                    width: 16,
                    height: 12,
                    viewBox: "0 0 16 12",
                    data: '<path pid="0" d="M16 1L5.698 11.182 0 5.55" _stroke="#6B963B" _fill="none" fill-rule="evenodd" stroke-linecap="square"/>'
                }
            })
        },
        2107: function(t, l, e) {
            e(32).register({
                checkbox: {
                    width: 12,
                    height: 9,
                    viewBox: "0 0 12 9",
                    data: '<path pid="0" d="M10 2L4.849 7.09 2 4.277" _stroke="#1F2843" stroke-width="2" _fill="none" fill-rule="evenodd" stroke-linecap="square"/>'
                }
            })
        },
        2108: function(t, l, e) {
            e(32).register({
                "create-wallet": {
                    width: 89,
                    height: 89,
                    viewBox: "0 0 89 89",
                    data: '<circle pid="0" cx="44.5" cy="44.5" r="43.5" _stroke="#858F9A" stroke-width="2"/><path pid="1" _stroke="#858F9A" stroke-width="2" d="M46 23v44M23 44h44"/>'
                }
            })
        },
        2109: function(t, l, e) {
            e(32).register({
                dots: {
                    width: 24,
                    height: 6,
                    viewBox: "0 0 24 6",
                    data: '<g _fill="#8290AD" fill-rule="evenodd"><circle pid="0" cx="3" cy="3" r="3"/><circle pid="1" cx="12" cy="3" r="3"/><circle pid="2" cx="21" cy="3" r="3"/></g>'
                }
            })
        },
        2110: function(t, l, e) {
            e(32).register({
                doublelines: {
                    width: 16,
                    height: 11,
                    viewBox: "0 0 16 11",
                    data: '<g _stroke="#8290AD" stroke-width="4" _fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path pid="0" d="M2 2h12M2 9h12"/></g>'
                }
            })
        },
        2111: function(t, l, e) {
            e(32).register({
                exchange: {
                    width: 27,
                    height: 21,
                    viewBox: "0 0 27 21",
                    data: '<path pid="0" d="M22.32 4.5l-2.998-2.765a1 1 0 011.356-1.47l5.834 5.38-5.868 4.943a1 1 0 11-1.288-1.529L22.392 6.5H2.5a1 1 0 110-2h19.82zm-17.629 10l2.999-2.765a1 1 0 00-1.356-1.47L.5 15.645l5.867 4.943a1 1 0 101.29-1.529L4.618 16.5h19.893a1 1 0 000-2H4.692z" _fill="#8290AD"/>'
                }
            })
        },
        2112: function(t, l, e) {
            e(32).register({
                "exit-active": {
                    width: 25,
                    height: 27,
                    viewBox: "0 0 25 27",
                    data: '<use xlink:href="#path0_stroke" transform="rotate(-90 14 1)" fill="red"/><use xlink:href="#path1_fill" transform="translate(0 4.958)" fill="red"/><defs><path pid="0" id="path0_stroke" d="M1-2a1 1 0 000 2v-2zm13 2a1 1 0 100-2v2zM1 0h13v-2H1v2z"/><path pid="1" id="path1_fill" fill-rule="evenodd" d="M19.322 1.56A10.477 10.477 0 0123 9.541c0 5.799-4.701 10.5-10.5 10.5S2 15.34 2 9.542c0-3.195 1.427-6.057 3.679-7.983L4.425 0A12.473 12.473 0 000 9.542c0 6.903 5.596 12.5 12.5 12.5S25 16.445 25 9.542c0-3.825-1.718-7.25-4.425-9.542l-1.253 1.56z"/></defs>'
                }
            })
        },
        2113: function(t, l, e) {
            e(32).register({
                exit: {
                    width: 25,
                    height: 27,
                    viewBox: "0 0 25 27",
                    data: '<use xlink:href="#path0_stroke" transform="rotate(-90 14 1)" fill="#8290AD"/><use xlink:href="#path1_fill" transform="translate(0 4.958)" fill="#8290AD"/><defs><path pid="0" id="path0_stroke" d="M1-2a1 1 0 000 2v-2zm13 2a1 1 0 100-2v2zM1 0h13v-2H1v2z"/><path pid="1" id="path1_fill" fill-rule="evenodd" d="M19.322 1.56A10.477 10.477 0 0123 9.541c0 5.799-4.701 10.5-10.5 10.5S2 15.34 2 9.542c0-3.195 1.427-6.057 3.679-7.983L4.425 0A12.473 12.473 0 000 9.542c0 6.903 5.596 12.5 12.5 12.5S25 16.445 25 9.542c0-3.825-1.718-7.25-4.425-9.542l-1.253 1.56z"/></defs>'
                }
            })
        },
        2114: function(t, l, e) {
            e(32).register({
                facebook: {
                    width: 34,
                    height: 34,
                    viewBox: "0 0 34 34",
                    data: '<use xlink:href="#pathfb_fill" fill="#FFF"/><defs><path pid="0" id="pathfb_fill" fill-rule="evenodd" d="M17 0C7.611 0 0 7.611 0 17s7.611 17 17 17 17-7.611 17-17S26.389 0 17 0zm1.205 17.18v9.249H14.38V17.18h-1.912v-3.187h1.912V12.08c0-2.6 1.079-4.147 4.146-4.147h2.554v3.188h-1.597c-1.193 0-1.272.445-1.272 1.277l-.005 1.595h2.892l-.338 3.187h-2.554z"/></defs>'
                }
            })
        },
        2115: function(t, l, e) {
            e(32).register({
                git: {
                    width: 33,
                    height: 33,
                    viewBox: "0 0 33 33",
                    data: '<use xlink:href="#path0_fill" fill="#FFF"/><defs><path pid="0" id="path0_fill" fill-rule="evenodd" d="M16.5 0C7.39 0 0 7.574 0 16.918c0 7.474 4.728 13.816 11.284 16.053.824.157 1.127-.367 1.127-.814 0-.403-.015-1.736-.022-3.15-4.59 1.024-5.56-1.996-5.56-1.996-.75-1.955-1.831-2.475-1.831-2.475-1.497-1.05.113-1.029.113-1.029 1.656.12 2.529 1.744 2.529 1.744 1.472 2.586 3.86 1.838 4.801 1.406.149-1.093.576-1.84 1.048-2.262-3.665-.428-7.517-1.878-7.517-8.361 0-1.847.644-3.356 1.7-4.541-.172-.426-.736-2.147.16-4.477 0 0 1.385-.455 4.538 1.734a15.45 15.45 0 014.13-.57c1.402.007 2.815.195 4.134.57 3.149-2.189 4.533-1.734 4.533-1.734.898 2.33.333 4.05.161 4.477 1.058 1.185 1.698 2.694 1.698 4.541 0 6.498-3.86 7.929-7.534 8.347.592.525 1.12 1.555 1.12 3.133 0 2.264-.02 4.086-.02 4.643 0 .45.297.978 1.134.812C28.278 30.729 33 24.389 33 16.918 33 7.574 25.613 0 16.5 0z"/></defs>'
                }
            })
        },
        2116: function(t, l, e) {
            e(32).register({
                help: {
                    width: 25,
                    height: 25,
                    viewBox: "0 0 25 25",
                    data: '<g _fill="#8290AD"><path pid="0" d="M13.5 15.896a1 1 0 11-2 0l-.001-2.863c0-.907.562-1.564 1.456-1.753.782-.165 1.351-.668 1.351-1.635 0-1.07-.676-1.645-1.602-1.645-1.098 0-1.577.439-1.71 1.589a1 1 0 01-1.987-.23C9.255 7.211 10.579 6 12.704 6c1.965 0 3.602 1.391 3.602 3.645 0 2.02-1.259 3.188-2.807 3.563l.001 2.688zm-2 2.919a1 1 0 012 0v.062a1 1 0 01-2 0v-.062z"/><path pid="1" d="M12.5 25C5.596 25 0 19.404 0 12.5S5.596 0 12.5 0 25 5.596 25 12.5 19.404 25 12.5 25zm0-2C18.299 23 23 18.299 23 12.5S18.299 2 12.5 2 2 6.701 2 12.5 6.701 23 12.5 23z"/></g>'
                }
            })
        },
        2117: function(t, l, e) {
            e(32).register({
                history: {
                    width: 27,
                    height: 25,
                    viewBox: "0 0 27 25",
                    data: '<g _fill="#8290AD"><path pid="0" d="M14.5 25c-5.098 0-9.626-3.08-11.548-7.708A12.465 12.465 0 012 12.5C2 5.596 7.596 0 14.5 0S27 5.596 27 12.5 21.404 25 14.5 25zm0-2C20.299 23 25 18.299 25 12.5S20.299 2 14.5 2C9.376 2 5.109 5.67 4.185 10.526c-.121.64-1.88-.058-2.122.792-.085.632-.198 2.698.503 4.918l1.882-.69s.218.659.35.98A10.502 10.502 0 0014.5 23z"/><path pid="1" d="M6.472 7.636a1 1 0 111.01 1.727l-5.011 2.93L.262 7.12a1 1 0 011.84-.785l1.317 3.087 3.053-1.786zm11.485 9.112a1 1 0 01-1.194 1.605L12 14.808V7a1 1 0 012 0v6.804l3.957 2.944z"/></g>'
                }
            })
        },
        2118: function(t, l, e) {
            e(32).register({
                "import-wallet": {
                    width: 89,
                    height: 89,
                    viewBox: "0 0 89 89",
                    data: '<circle pid="0" cx="44.5" cy="44.5" r="43.5" _stroke="#858F9A" stroke-width="2"/><path pid="1" d="M23.734 63.289h41.534M35.324 46.207l9.337 9.347 9.337-9.347M44.34 19.778V55.23" _stroke="#858F9A" stroke-width="2"/>'
                }
            })
        },
        2119: function(t, l, e) {
            e(32).register({
                import: {
                    width: 23,
                    height: 24,
                    viewBox: "0 0 23 24",
                    data: '<path pid="0" d="M18.5 19.32l2.765-2.998a1 1 0 011.47 1.356l-4.298 4.66a1.003 1.003 0 01-.513.558l-.568.616-4.944-5.868a1 1 0 111.529-1.288l2.559 3.036V8.99a1 1 0 112 0v10.33zM6.5 4.691L9.265 7.69a1 1 0 001.47-1.356L5.355.5.413 6.367a1 1 0 101.529 1.29L4.5 4.618v11.893a1 1 0 002 0V4.692z" _fill="#8290AD"/>'
                }
            })
        },
        2120: function(t, l, e) {
            e(32).register({
                line: {
                    width: 16,
                    height: 4,
                    viewBox: "0 0 16 4",
                    data: '<path pid="0" d="M2 2h12" _stroke="#8290AD" stroke-width="4" _fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/>'
                }
            })
        },
        2121: function(t, l, e) {
            e(32).register({
                medium: {
                    width: 34,
                    height: 34,
                    viewBox: "0 0 34 34",
                    data: '<use xlink:href="#path0_fill" fill="#FFF"/><defs><path pid="0" id="path0_fill" fill-rule="evenodd" d="M0 17C0 7.611 7.611 0 17 0s17 7.611 17 17-7.611 17-17 17S0 26.389 0 17zm14.267-4.578l-5.444-2.69a.296.296 0 00-.13-.033.176.176 0 00-.14.063.258.258 0 00-.053.168v11.545c0 .197.146.43.323.517l5.03 2.485c.07.035.136.051.197.051.17 0 .288-.13.288-.347V12.537a.128.128 0 00-.071-.115zm11.262 12.051l-4.887-2.415 5.372-8.627v10.746c0 .295-.218.428-.485.296zM14.854 13.286v5.917l5.323 2.63-5.322-8.547zm5.484-3.633l5.548 2.741a.13.13 0 01.053.185l-5.46 8.767-3.817-6.13 3.42-5.49a.203.203 0 01.256-.073zm-.08-.02h-.005.005z"/></defs>'
                }
            })
        },
        2122: function(t, l, e) {
            e(32).register({
                nft: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    data: '<rect x="1" width="18" height="18" rx="2" stroke="#8290AD" stroke-width="1.5" y="1"/><circle cx="13.7497" cy="6.25" r="0.75" stroke="#8290AD" stroke-width="1.5"/><path d="M1 14.5L5.5 10L13 19" stroke="#8290AD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 16.0003L14.5 11.5003L10.75 15.2503" stroke="#8290AD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'
                }
            })
        },
        2123: function(t, l, e) {
            e(32).register({
                paste_btn: {
                    width: 17,
                    height: 18,
                    viewBox: "0 0 17 18",
                    data: '<path pid="0" d="M1 13V1h8.5L12 4v9H1z" _fill="#1F2843" _stroke="#8290AD"/><path pid="1" d="M5.5 17.5v-12H14l2.5 3v9h-11z" _fill="#1F2843" _stroke="#8290AD"/><path pid="2" _stroke="#8290AD" stroke-width=".5" d="M8 8.75h6M8 11.75h6M8 14.75h6"/>'
                }
            })
        },
        2124: function(t, l, e) {
            e(32).register({
                plus: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    data: '<g _stroke="#8290AD" stroke-width="4" _fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path pid="0" d="M2 8h12M8 2v12"/></g>'
                }
            })
        },
        2125: function(t, l, e) {
            e(32).register({
                qr: {
                    width: 25,
                    height: 25,
                    viewBox: "0 0 25 25",
                    data: '<use xlink:href="#path0_fill" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 1.19)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 5.952)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 17.857)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 22.619)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(0 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(1.19)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(1.19 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(1.19 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(1.19 14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(1.19 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(1.19 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 10.714)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 11.905)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(2.381 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(3.571 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(3.571 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(3.571 4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(3.571 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(3.571 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(3.571 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(3.571 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(3.571 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(3.571 21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(3.571 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 10.714)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(4.762 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(5.952)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(5.952 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(5.952 11.905)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(5.952 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(5.952 14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(5.952 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(5.952 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 1.19)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 5.952)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 11.905)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 17.857)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 22.619)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(7.143 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(8.333 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(8.333 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(8.333 14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 1.19)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 5.952)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 10.714)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 11.905)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 15.476)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 22.619)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(9.524 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 1.19)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 8.333)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 10.714)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 11.905)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(10.714 22.619)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(11.905)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(11.905 1.19)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(11.905 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(11.905 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(11.905 10.714)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(11.905 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(11.905 14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(11.905 17.857)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(11.905 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(11.905 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(11.905 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(13.095 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(13.095 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(13.095 5.952)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(13.095 8.333)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(13.095 11.905)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(13.095 14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(13.095 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(13.095 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(13.095 21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(13.095 22.619)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(13.095 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286 1.19)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286 5.952)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286 8.333)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286 11.905)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286 17.857)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286 21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286 22.619)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(14.286 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(15.476 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(15.476 11.905)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(15.476 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(15.476 15.476)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(15.476 17.857)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(15.476 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(15.476 22.619)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667 1.19)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667 4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667 5.952)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667 14.286)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667 15.476)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(16.667 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(17.857)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(17.857 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(17.857 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(17.857 10.714)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(17.857 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(17.857 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(17.857 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(19.048 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(19.048 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(19.048 4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(19.048 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(19.048 10.714)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(19.048 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(19.048 15.476)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(19.048 17.857)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(19.048 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(19.048 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 10.714)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 15.476)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 17.857)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 20.238)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(20.238 22.619)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(21.429 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(21.429 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(21.429 4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(21.429 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(21.429 10.714)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(21.429 11.905)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(21.429 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(21.429 17.857)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(21.429 21.429)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(21.429 22.619)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(22.619)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(22.619 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(22.619 9.524)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(22.619 10.714)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(22.619 11.905)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(22.619 13.095)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(22.619 16.667)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(22.619 17.857)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(22.619 19.048)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(22.619 23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(23.81)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(23.81 1.19)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(23.81 2.381)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(23.81 3.571)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(23.81 4.762)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(23.81 5.952)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(23.81 7.143)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(23.81 10.714)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(23.81 15.476)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(23.81 17.857)" fill="#8290AD"/><use xlink:href="#path0_fill" transform="translate(23.81 19.048)" fill="#8290AD"/><defs><path pid="0" id="path0_fill" d="M1.19 0H0v1.19h1.19V0z"/></defs>'
                }
            })
        },
        2126: function(t, l, e) {
            e(32).register({
                reddit: {
                    width: 36,
                    height: 36,
                    viewBox: "0 0 36 36",
                    data: '<use xlink:href="#pathrd_fill" transform="translate(0 .01)" fill="#FFF"/><use xlink:href="#path1rd_fill" transform="translate(20.5 15.66)" fill="#FFF"/><use xlink:href="#path2_fill" transform="translate(13.2 22.07)" fill="#FFF"/><use xlink:href="#path3_fill" transform="translate(11.9 15.66)" fill="#FFF"/><defs><path pid="0" id="pathrd_fill" fill-rule="evenodd" d="M35.987 18.508C36.26 8.154 27.85-.227 17.585.005 8.017.22.06 7.985 0 17.985c.049 10.016 8.052 17.898 17.781 17.996 10.212.103 17.958-8.035 18.206-17.473zm-3.891-3.878c.115 1.236-.464 2.151-1.417 2.858-.229.17-.3.313-.26.608.299 2.21-.344 4.146-1.797 5.811-1.831 2.1-4.21 3.246-6.88 3.85-1.857.419-3.736.508-5.626.27-2.16-.27-4.22-.864-6.078-2.037-1.628-1.026-2.967-2.326-3.745-4.127-.548-1.266-.69-2.582-.463-3.939.024-.145-.006-.226-.138-.314-.808-.541-1.394-1.255-1.545-2.24-.384-2.508 1.846-4.034 3.724-3.537.396.105.77.291 1.144.477.14.069.278.137.418.202.126.057.21.096.347.002 1.506-1.027 3.163-1.7 4.945-2.077.993-.21 1.994-.353 3.01-.347.203.002.24-.108.288-.257l1.014-3.22.615-1.952c.194-.612.486-.784 1.112-.65l1.216.26c1.101.234 2.202.468 3.3.709.186.04.292.006.418-.14 1.278-1.485 3.261-.807 3.898.328.798 1.42-.096 3.193-1.741 3.459A2.423 2.423 0 0 1 25.15 6.87c-.067-.252-.184-.335-.424-.384-.827-.168-1.65-.347-2.475-.526l-1.001-.216a2.72 2.72 0 0 0-.188-.032l-.114-.017-1.459 4.54.8.082c2.27.23 4.372.935 6.281 2.194.121.08.194.075.31-.021 1.03-.841 2.179-.99 3.379-.461 1.11.49 1.723 1.39 1.836 2.601z"/><path pid="1" id="path1rd_fill" d="M3.803 1.927c.004.997-.891 1.89-1.898 1.89C.858 3.82.001 2.938 0 1.858-.001.868.882.003 1.895 0c1.043-.004 1.903.864 1.908 1.927z"/><path pid="2" id="path2_fill" d="M9.622.277c.201.199.257.5.039.753-.256.294-.56.57-.894.77-.91.547-1.917.825-2.973.922-.302.028-.603.044-.788.058C3.308 2.76 1.84 2.378.535 1.462a1.687 1.687 0 0 1-.404-.394C-.06.8-.035.471.155.281c.288-.29.664-.35.964-.177.403.236.796.499 1.224.677 2.088.87 4.104.686 6.033-.486.11-.067.214-.147.326-.213.28-.16.641-.082.92.195z"/><path pid="3" id="path3_fill" d="M3.818 1.923c.004.964-.903 1.893-1.85 1.895C.895 3.82.004 2.957 0 1.912-.002.881.871 0 1.897 0c1.039 0 1.916.878 1.92 1.923z"/></defs>'
                }
            })
        },
        2127: function(t, l, e) {
            e(32).register({
                settings: {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    data: '<g _fill="#8290AD"><path pid="0" d="M12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/><path pid="1" d="M20.91 13H21a1 1 0 000-2h-.174a2.65 2.65 0 01-2.425-1.606l-.081-.189v-.1a2.655 2.655 0 01.623-2.712l.06-.06a1 1 0 10-1.416-1.416l-.068.068a2.646 2.646 0 01-2.913.534A2.651 2.651 0 0113 3.09V3a1 1 0 00-2 0v.174a2.65 2.65 0 01-1.606 2.425l-.189.081h-.1a2.655 2.655 0 01-2.712-.623l-.06-.06a1 1 0 10-1.416 1.416l.068.068c.757.774.967 1.932.554 2.864A2.657 2.657 0 013.09 11.08H3a1 1 0 000 2h.174a2.646 2.646 0 012.42 1.596 2.654 2.654 0 01-.537 2.931l-.06.06a1 1 0 101.416 1.416l.068-.068c.774-.757 1.932-.967 2.864-.554a2.657 2.657 0 011.735 2.449V21a1 1 0 002 0v-.174a2.646 2.646 0 011.596-2.42 2.654 2.654 0 012.931.537l.06.06a1 1 0 101.416-1.416l-.068-.068a2.65 2.65 0 01-.532-2.918A2.651 2.651 0 0120.91 13zm-2.425 1.596l-.004.01a2.635 2.635 0 01.004-.01zM20.83 9H21a3 3 0 010 6h-.086a.65.65 0 00-.595.394.65.65 0 00.118.719l.06.06a3 3 0 11-4.244 4.244l-.052-.052a.654.654 0 00-.727-.126.649.649 0 00-.394.591V21a3 3 0 01-6 0 .698.698 0 00-.484-.685.647.647 0 00-.709.122l-.06.06a3 3 0 11-4.244-4.244l.052-.052a.654.654 0 00.126-.727.649.649 0 00-.591-.394H3a3 3 0 010-6 .698.698 0 00.685-.484.647.647 0 00-.122-.709l-.06-.06a3 3 0 114.244-4.244l.052.052a.65.65 0 00.717.13l.193-.085A.592.592 0 009 3.17V3a3 3 0 016 0v.086c.001.26.156.493.404.6a.647.647 0 00.709-.123l.06-.06a3 3 0 114.244 4.244l-.052.052a.65.65 0 00-.13.717l.085.193c.12.194.309.29.51.291z"/></g>'
                }
            })
        },
        2128: function(t, l, e) {
            e(32).register({
                steemit: {
                    width: 36,
                    height: 36,
                    viewBox: "0 0 36 36",
                    data: '<use xlink:href="#path0_fill" fill="#FFF"/><defs><path pid="0" id="path0_fill" fill-rule="evenodd" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18zM8.887 13.13c.368-1.111 1.273-2.023 2.15-2.764.198-.142.339-.085.31.086a4.608 4.608 0 01-.07.459 4.51 4.51 0 00-.07.453 6.187 6.187 0 00-.028 1.253c.028.541.141 1.054.339 1.538.198.456.424.912.65 1.339a197.215 197.215 0 011.669 3.59l.177.41.023.056c.187.433.37.858.536 1.3.226.626.34 1.224.14 1.88-.395 1.31-1.47 2.279-2.46 3.133l-.093.083c-.206.189-.54.496-.444.06.063-.343.148-.68.234-1.017.107-.419.212-.836.275-1.262.125-.959-.326-1.961-.726-2.85l-.151-.34a51.65 51.65 0 00-1.029-2.162l-.026-.054a82.994 82.994 0 01-.67-1.374c-.566-1.168-1.16-2.507-.736-3.817zm15.105-2.764c-.877.74-1.782 1.653-2.15 2.764-.424 1.31.17 2.649.736 3.817.218.46.444.916.67 1.374l.026.053c.353.713.706 1.427 1.029 2.162l.151.34c.4.89.85 1.892.726 2.85-.063.427-.168.844-.275 1.263-.086.336-.17.674-.234 1.017-.097.436.238.129.444-.06l.093-.083c.99-.854 2.065-1.823 2.46-3.133.2-.655.086-1.254-.14-1.88-.167-.442-.35-.867-.536-1.3l-.023-.055-.177-.412a196.549 196.549 0 00-1.669-3.59 19.938 19.938 0 01-.65-1.338 4.696 4.696 0 01-.34-1.538 6.187 6.187 0 01.03-1.254 4.51 4.51 0 01.07-.452c.028-.15.056-.301.07-.46.028-.17-.113-.227-.31-.085zm-9.215.934c.581-1.15 1.632-2.133 2.6-2.947.25-.196.416-.168.333.14 0 .191-.036.373-.071.556-.029.14-.056.28-.068.427a9.601 9.601 0 00-.055 1.543c.028.674.138 1.347.387 1.992.107.307.26.603.413.901.086.166.172.332.251.503.664 1.347 1.3 2.694 1.909 4.069.332.73.664 1.459.968 2.217l.11.255c.249.567.506 1.155.554 1.765.11 1.712-1.19 3.171-2.324 4.266-.415.42-.885.842-1.355 1.206-.11.085-.221.169-.25-.028-.018-.167.05-.372.113-.565a2.87 2.87 0 00.081-.277l.048-.166c.238-.828.502-1.744.45-2.612-.055-.757-.36-1.515-.636-2.189-.412-1.014-.902-1.99-1.391-2.963-.43-.857-.862-1.713-1.237-2.593-.415-.982-.802-1.992-1.079-3.003-.221-.842-.166-1.684.25-2.497z"/></defs>'
                }
            })
        },
        2129: function(t, l, e) {
            e(32).register({
                support: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 512 512",
                    data: '<circle pid="0" cx="256" cy="378.5" r="25"/><path pid="1" d="M256 0C114.516 0 0 114.497 0 256c0 141.484 114.497 256 256 256 141.484 0 256-114.497 256-256C512 114.516 397.503 0 256 0zm0 472c-119.377 0-216-96.607-216-216 0-119.377 96.607-216 216-216 119.377 0 216 96.607 216 216 0 119.377-96.607 216-216 216z"/><path pid="2" d="M256 128.5c-44.112 0-80 35.888-80 80 0 11.046 8.954 20 20 20s20-8.954 20-20c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40c-11.046 0-20 8.954-20 20v50c0 11.046 8.954 20 20 20s20-8.954 20-20v-32.531c34.466-8.903 60-40.26 60-77.469 0-44.112-35.888-80-80-80z"/>'
                }
            })
        },
        2130: function(t, l, e) {
            e(32).register({
                telegram: {
                    width: 34,
                    height: 34,
                    viewBox: "0 0 34 34",
                    data: '<use xlink:href="#pathtg_fill" fill="#FFF"/><defs><path pid="0" id="pathtg_fill" fill-rule="evenodd" d="M17 34c9.389 0 17-7.611 17-17S26.389 0 17 0 0 7.611 0 17s7.611 17 17 17zm-3.116-9.208c.413 0 .601-.184.83-.406l.02-.02 2.041-1.984 4.248 3.138c.782.431 1.346.208 1.54-.726l2.79-13.141c.285-1.145-.437-1.664-1.185-1.325L7.793 16.642c-1.118.449-1.111 1.072-.204 1.35l4.202 1.312 9.73-6.138c.459-.279.88-.129.534.178l-7.882 7.114-.29 4.334z"/></defs>'
                }
            })
        },
        2131: function(t, l, e) {
            e(32).register({
                twitter: {
                    width: 34,
                    height: 34,
                    viewBox: "0 0 34 34",
                    data: '<use xlink:href="#pathtw_fill" fill="#FFF"/><defs><path pid="0" id="pathtw_fill" fill-rule="evenodd" d="M17 0C7.611 0 0 7.611 0 17s7.611 17 17 17 17-7.611 17-17S26.389 0 17 0zm-.474 14.406l-.035-.588c-.107-1.525.832-2.917 2.319-3.458.546-.192 1.474-.216 2.08-.048.238.072.69.313 1.011.529l.583.396.642-.204c.356-.108.832-.288 1.047-.409.202-.108.38-.168.38-.132 0 .204-.44.9-.809 1.285-.499.54-.356.588.654.228.607-.204.619-.204.5.024-.072.12-.44.54-.833.924-.666.66-.7.733-.7 1.285 0 .852-.405 2.629-.81 3.601-.748 1.825-2.354 3.71-3.96 4.658-2.26 1.333-5.267 1.669-7.8.889-.844-.264-2.295-.937-2.295-1.057 0-.036.44-.084.975-.096a6.695 6.695 0 0 0 3.187-.888l.642-.384-.738-.252c-1.046-.36-1.985-1.189-2.223-1.97-.072-.252-.047-.263.619-.263l.69-.012-.584-.276c-.69-.349-1.319-.937-1.629-1.537-.225-.432-.511-1.525-.427-1.609.023-.036.273.036.558.132.82.3.928.228.453-.276-.893-.912-1.167-2.269-.738-3.553l.202-.576.784.78c1.606 1.573 3.497 2.509 5.66 2.785l.595.072z"/></defs>'
                }
            })
        },
        2132: function(t, l, e) {
            e(32).register({
                wallets: {
                    width: 27,
                    height: 20,
                    viewBox: "0 0 27 20",
                    data: '<g _fill="#8290AD" fill-rule="evenodd" transform="rotate(90 13.5 13.5)"><path pid="0" fill-rule="nonzero" d="M5 4.964a3 3 0 00-3 3v13.75a3 3 0 003 3h10a3 3 0 003-3V7.964a3 3 0 00-3-3h-1.922V2.961h-6.06v2.003H5zm0-2h10a5 5 0 015 5v13.75a5 5 0 01-5 5H5a5 5 0 01-5-5V7.964a5 5 0 015-5z"/><path pid="1" fill-rule="nonzero" d="M9 2a1 1 0 00-1 1v8.75a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1H9zm0-2h2a3 3 0 013 3v8.75a3 3 0 01-3 3H9a3 3 0 01-3-3V3a3 3 0 013-3z"/><circle pid="2" cx="10" cy="9.643" r="1"/></g>'
                }
            })
        },
        2307: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = function(t, l, e) {
                const [i, a] = String(t).split(".");
                if (a) {
                    const t = Number(i) > 0 ? e : l;
                    return a.length >= t ? `${i}.${a.slice(0,t)}` : `${i}.${a}`
                }
                return t
            }
        },
        2381: function(t, l, e) {
            "use strict";
            var i = e(2)(e(192)),
                a = e(2382);
            i.default.setVersion(a.version), i.default.setPlatform("desktop"), i.default.setOS(process.platform)
        },
        437: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.THOUSAND = l.SHORTCUT_SIZE = l.MIN_BALANCE = l.MILLION = l.MAX_VALUE_SIZE = l.MAX_LENGTH_FINANCE_TRIM_DEFAULT = l.MAX_ADDRES_SIZE = l.BILLION = l.AMOUNT_TO_FIXED = void 0;
            l.MAX_LENGTH_FINANCE_TRIM_DEFAULT = 15;
            l.BILLION = 1e9;
            l.MILLION = 1e6;
            l.THOUSAND = 1e3;
            l.MIN_BALANCE = .01;
            l.MAX_VALUE_SIZE = 9;
            l.MAX_ADDRES_SIZE = 23;
            l.SHORTCUT_SIZE = 10;
            l.AMOUNT_TO_FIXED = 6
        },
        4528: function(t, l, e) {
            e(32).register({
                "airdrop-active": {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.477 4.478 0 10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10C4.478 20 0 15.523 0 10zm7.527-4.956L3.692 15.692l2.375-.837L9.343 5.76c.199-.503.43-.685.811-.693.381.008.612.19.81.693l3.277 9.095 2.374.837L12.78 5.044c-.486-1.243-1.393-1.946-2.6-1.967h-.053c-1.206.02-2.113.724-2.6 1.967zm2.65 8.278c.909 0 1.645-.754 1.645-1.684 0-.93-.736-1.684-1.645-1.684-.91 0-1.647.754-1.647 1.684 0 .93.738 1.684 1.647 1.684z" _fill="#2FA6FA"/>'
                }
            })
        },
        4529: function(t, l, e) {
            e(32).register({
                airdrop: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.477 4.478 0 10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10C4.478 20 0 15.523 0 10zm7.527-4.956L3.692 15.692l2.375-.837L9.343 5.76c.199-.503.43-.685.811-.693.381.008.612.19.81.693l3.277 9.095 2.374.837L12.78 5.044c-.486-1.243-1.393-1.946-2.6-1.967h-.053c-1.206.02-2.113.724-2.6 1.967zm2.65 8.278c.909 0 1.645-.754 1.645-1.684 0-.93-.736-1.684-1.645-1.684-.91 0-1.647.754-1.647 1.684 0 .93.738 1.684 1.647 1.684z" _fill="#8290AD"/>'
                }
            })
        },
        4530: function(t, l, e) {
            e(32).register({
                "arrow-top": {
                    width: 16,
                    height: 8,
                    viewBox: "0 0 16 8",
                    data: '<path pid="0" d="M14.35 7.76a1 1 0 101.3-1.52l-7-6a1 1 0 00-1.3 0l-7 6a1 1 0 001.3 1.52L8 2.316l6.35 5.442z" _fill="#7A859F"/>'
                }
            })
        },
        4531: function(t, l, e) {
            e(32).register({
                clipboard: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    data: '<path pid="0" d="M3.823 2.304l-.718-.697.718.697zM3 4.587L4.54 3 3.106 1.607l-1.54 1.587L3 4.587zM3 11h4V9H3v2zm1.54-8H7V1H4.54v2zM7 3v6h2V3H7zM1 4.587V9h2V4.587H1zM3 9H1a2 2 0 002 2V9zM1.565 3.194A2 2 0 001 4.587h2L1.565 3.194zM4.54 3V1a2 2 0 00-1.436.607L4.541 3zM7 11a2 2 0 002-2H7v2zm0-8h2a2 2 0 00-2-2v2zM13 6a1 1 0 10-2 0h2zm-6 7a1 1 0 100 2v-2zm0 2h4v-2H7v2zm4-9v7h2V6h-2zm0 9a2 2 0 002-2h-2v2z" _fill="#7A859F"/>'
                }
            })
        },
        4532: function(t, l, e) {
            e(32).register({
                copy: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    data: '<path pid="0" d="M3.823 2.304l-.718-.697.718.697zM3 4.587L4.54 3 3.106 1.607l-1.54 1.587L3 4.587zM3 11h4V9H3v2zm1.54-8H7V1H4.54v2zM7 3v6h2V3H7zM1 4.587V9h2V4.587H1zM3 9H1a2 2 0 002 2V9zM1.565 3.194A2 2 0 001 4.587h2L1.565 3.194zM4.54 3V1a2 2 0 00-1.436.607L4.541 3zM7 11a2 2 0 002-2H7v2zm0-8h2a2 2 0 00-2-2v2zM13 6a1 1 0 10-2 0h2zm-6 7a1 1 0 100 2v-2zm0 2h4v-2H7v2zm4-9v7h2V6h-2zm0 9a2 2 0 002-2h-2v2z" _fill="#fff"/>'
                }
            })
        },
        4533: function(t, l, e) {
            e(32).register({
                download_outline: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M4 17.75a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75z" _fill="#FFF" fill-opacity=".68"/><path pid="1" d="M10.75 2.726c0-.401-.336-.726-.75-.726a.738.738 0 00-.75.726v9.722l-3.97-3.97a.75.75 0 00-1.06 1.06l5.245 5.245a.75.75 0 001.06 0l5.256-5.255a.75.75 0 00-1.06-1.061l-3.972 3.971V2.726z" _fill="#FFF" fill-opacity=".68"/>'
                }
            })
        },
        4534: function(t, l, e) {
            e(32).register({
                export: {
                    width: 28,
                    height: 28,
                    viewBox: "0 0 28 28",
                    data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M20.707 8.293a1 1 0 01-1.414 1.414L15 5.414V17a1 1 0 11-2 0V5.414L8.707 9.707a1 1 0 01-1.414-1.414l6-6A.997.997 0 0113.997 2h.006a.997.997 0 01.7.289m6.004 6.004l-6-6 6 6zM4 17.643V16a1 1 0 112 0v1.6c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 001.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h5.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 001.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546V16a1 1 0 112 0v1.643c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 01-2.185 2.185c-.592.302-1.232.428-1.961.487C18.6 25 17.727 25 16.643 25h-5.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 01-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C4 19.6 4 18.727 4 17.643z" _fill="#8290AD"/>'
                }
            })
        },
        4535: function(t, l, e) {
            e(32).register({
                external_link: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    data: '<path pid="0" d="M6.944 4.818c0 .282.219.501.502.501l3.024-.002-5.508 5.508a.495.495 0 000 .707.495.495 0 00.706 0l5.508-5.509.005 3.031c0 .283.219.502.501.502.283 0 .502-.22.502-.502l.003-4.24a.568.568 0 00-.035-.19.692.692 0 00-.12-.163.404.404 0 00-.162-.106.355.355 0 00-.191-.035l-4.24.003a.484.484 0 00-.495.495z" _fill="#13A5F5"/><path pid="1" d="M6.944 4.818c0 .282.219.501.502.501l3.024-.002-5.508 5.508a.495.495 0 000 .707.495.495 0 00.706 0l5.508-5.509.005 3.031c0 .283.219.502.501.502.283 0 .502-.22.502-.502l.003-4.24a.568.568 0 00-.035-.19.692.692 0 00-.12-.163.404.404 0 00-.162-.106.355.355 0 00-.191-.035l-4.24.003a.484.484 0 00-.495.495z" _fill="#fff" fill-opacity=".1"/>'
                }
            })
        },
        4536: function(t, l, e) {
            e(32).register({
                filters: {
                    width: 22,
                    height: 16,
                    viewBox: "0 0 22 16",
                    data: '<path pid="0" d="M15.5 9a3.501 3.501 0 013.355 2.5H21a1 1 0 110 2h-2.145a3.501 3.501 0 01-6.71 0H1a1 1 0 110-2h11.145A3.501 3.501 0 0115.5 9zm0 1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM7.5 0a3.502 3.502 0 013.355 2.5H21a1 1 0 110 2H10.855a3.502 3.502 0 01-6.71 0H1a1 1 0 010-2h3.145A3.502 3.502 0 017.5 0zm0 1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z" _fill="#fff"/>'
                }
            })
        },
        4537: function(t, l, e) {
            e(32).register({
                hide_outline: {
                    width: 28,
                    height: 28,
                    viewBox: "0 0 28 28",
                    data: '<path pid="0" d="M7.707 4.793l5.325 5.325h.004l4.847 4.846v.004l5.824 5.825a1 1 0 01-1.414 1.414l-1.875-1.873A13.314 13.314 0 0114 22c-5.818 0-11.5-4.356-11.5-8 0-2.127 2.185-4.77 5.193-6.393l-1.4-1.4a1 1 0 011.414-1.414zM4.5 14c0 2.406 4.688 6 9.5 6 1.732 0 3.415-.41 4.934-1.15l-2.063-2.065a4 4 0 11-5.656-5.656L9.18 9.096C6.48 10.377 4.5 12.634 4.5 14zM14 6c5.818 0 11.5 4.356 11.5 8 0 .945-.433 1.998-1.197 3.033a1 1 0 01-1.61-1.187c.532-.72.807-1.389.807-1.846 0-2.406-4.688-6-9.5-6a1 1 0 110-2zm-1.37 6.543a2 2 0 102.827 2.827l-2.828-2.826z" _fill="#7A859F"/>'
                }
            })
        },
        4538: function(t, l, e) {
            e(32).register({
                magnifier_plus_outline: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    data: '<path pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M9.5 4.5a5 5 0 100 10 5 5 0 000-10zM3 9.5a6.5 6.5 0 1111.596 4.035l3.184 3.185a.75.75 0 11-1.06 1.06l-3.185-3.184A6.5 6.5 0 013 9.5zm6.496-3.501a.75.75 0 01.75.75v2h2a.75.75 0 010 1.5h-2v2a.75.75 0 01-1.5 0v-2h-2a.75.75 0 110-1.5h2v-2a.75.75 0 01.75-.75z" _fill="#fff" fill-opacity=".68"/>'
                }
            })
        },
        4539: function(t, l, e) {
            e(32).register({
                search: {
                    width: 14,
                    height: 15,
                    viewBox: "0 0 14 15",
                    data: '<path pid="0" opacity=".92" d="M5.5 0a5.5 5.5 0 014.383 8.823l3.896 3.9a.75.75 0 01-1.061 1.06l-3.895-3.9A5.5 5.5 0 115.5 0zm0 1.5a4 4 0 100 8 4 4 0 000-8z" _fill="#7A859F"/>'
                }
            })
        },
        4540: function(t, l, e) {
            e(32).register({
                view_outline: {
                    width: 28,
                    height: 28,
                    viewBox: "0 0 28 28",
                    data: '<path pid="0" d="M14 6c5.994 0 11.5 4.557 11.5 8 0 3.443-5.506 8-11.5 8S2.5 17.443 2.5 14c0-3.443 5.506-8 11.5-8zm0 2c-4.964 0-9.5 3.754-9.5 6s4.536 6 9.5 6 9.5-3.754 9.5-6-4.536-6-9.5-6zm0 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" _fill="#7A859F"/>'
                }
            })
        },
        4541: function(t, l, e) {
            e(32).register({
                warning: {
                    width: 28,
                    height: 28,
                    viewBox: "0 0 28 28",
                    data: '<path pid="0" d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2zm0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4zm0 13.6a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zm.074-9.6c.237 0 .386.037.517.107.13.07.232.172.302.302.07.13.107.28.107.517v6.148c0 .237-.037.386-.107.517a.726.726 0 01-.302.302c-.13.07-.28.107-.517.107h-.148c-.237 0-.386-.037-.517-.107a.726.726 0 01-.302-.302c-.07-.13-.107-.28-.107-.517V8.926c0-.237.037-.386.107-.517a.727.727 0 01.302-.302c.13-.07.28-.107.517-.107h.148z" _fill="#7A859F"/>'
                }
            })
        },
        4542: function(t, l, e) {
            e(32).register({
                "membership-basic": {
                    width: 34,
                    height: 40,
                    viewBox: "0 0 34 40",
                    data: '<path d="M22.5082 7.19189C28.631 9.46815 33 15.4304 33 22.4273C33 31.3866 25.8366 38.6495 17 38.6495C8.16344 38.6495 1 31.3866 1 22.4273C1 15.5307 5.24456 9.63935 11.2295 7.29208" stroke="#778697" stroke-width="2"/><path d="M22.5818 11.8394C23.436 13.9465 22.9804 16.2244 22.9804 16.2244C22.9804 16.2244 23.2082 16.1675 23.5499 16.2244C23.8916 16.2814 24.5181 16.5661 24.4042 17.5912C24.2903 18.6163 23.493 19.0719 23.493 19.0719C23.493 19.0719 23.3221 20.4387 22.2401 22.0333C21.1011 23.6278 19.2218 24.7668 19.1649 25.6211C19.1079 26.5322 22.1262 26.6461 25.1445 27.8421C28.1628 29.038 29.131 31.0882 29.4727 32.6258" stroke="#778697" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M4.25 32.6836C4.64864 31.089 5.55983 29.0958 8.57814 27.8999C11.5964 26.7039 14.6147 26.59 14.5578 25.6788C14.5008 24.7677 12.6215 23.6856 11.4825 22.0911C10.3436 20.4965 10.2297 19.1297 10.2297 19.1297C10.2297 19.1297 9.43237 18.6741 9.31847 17.649C9.20458 16.6239 9.88797 16.3392 10.1727 16.2822C10.5144 16.2253 10.7422 16.2822 10.7422 16.2822C10.7422 16.2822 10.4575 14.0612 11.3117 11.9541" stroke="#778697" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M23.103 12.4156C23.103 13.2129 20.3125 13.8963 16.8386 13.8963C13.3647 13.8963 10.5742 13.2129 10.5742 12.4156L11.5424 4.55662L13.5356 9.85289L16.8386 2.84814L20.0847 9.62509L22.1349 4.44272L23.103 12.4156Z" stroke="#778697" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.1982 4.2709C11.8901 4.2709 12.4511 3.70997 12.4511 3.01802C12.4511 2.32607 11.8901 1.76514 11.1982 1.76514C10.5062 1.76514 9.94531 2.32607 9.94531 3.01802C9.94531 3.70997 10.5062 4.2709 11.1982 4.2709Z" fill="#778697"/><path d="M22.3115 4.2709C23.0034 4.2709 23.5644 3.70997 23.5644 3.01802C23.5644 2.32607 23.0034 1.76514 22.3115 1.76514C21.6195 1.76514 21.0586 2.32607 21.0586 3.01802C21.0586 3.70997 21.6195 4.2709 22.3115 4.2709Z" fill="#778697"/><path d="M16.8388 2.50576C17.5308 2.50576 18.0917 1.94483 18.0917 1.25288C18.0917 0.560934 17.5308 0 16.8388 0C16.1469 0 15.5859 0.560934 15.5859 1.25288C15.5859 1.94483 16.1469 2.50576 16.8388 2.50576Z" fill="#778697"/>'
                }
            })
        },
        4543: function(t, l, e) {
            e(32).register({
                "membership-blue": {
                    width: 32,
                    height: 40,
                    viewBox: "0 0 32 40",
                    data: '<circle cx="16" cy="23.2729" r="16" fill="url(#paint0_linear1)"/><mask id="mask01" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="7" width="32" height="33"><circle cx="16" cy="23.2729" r="16" fill="url(#paint1_linear1)"/></mask><g mask="url(#mask01)"><path d="M2.91016 38.2688C2.91016 38.2688 3.26093 34.3333 3.56159 33.0879C3.96247 31.4937 4.91456 29.4513 7.97127 28.2557C11.028 27.0601 14.0847 26.9106 14.0346 26.0139C13.9344 25.1172 12.0302 23.9714 10.8777 22.3773C9.72512 20.7832 9.57479 19.3385 9.57479 19.3385C9.57479 19.3385 8.72292 18.8901 8.6227 17.844C8.52248 16.7978 9.17391 16.5487 9.52468 16.4491C9.82534 16.3495 10.0759 16.4491 10.0759 16.4491C10.0759 16.4491 9.07369 8.72754 16.3898 8.72754C24.1568 8.72754 22.6535 16.4491 22.6535 16.4491C22.6535 16.4491 22.9041 16.3495 23.2047 16.4491C23.5054 16.5487 24.2069 16.7978 24.1067 17.844C24.0065 18.8901 23.1546 19.3385 23.1546 19.3385C23.1546 19.3385 23.0043 20.7333 21.8517 22.3773C20.6992 23.9714 18.795 25.1172 18.6948 26.0139C18.5946 26.9106 21.7014 27.0601 24.7581 28.2557C27.8148 29.4513 28.7669 31.4937 29.1678 33.0879C29.4685 34.3333 29.8192 38.2688 29.8192 38.2688C29.8192 38.2688 20.4988 43.4995 2.91016 38.2688Z" stroke="#2FA6FA" stroke-width="1.9992" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></g><path d="M22.357 12.1488C22.357 12.9289 19.6265 13.5976 16.2273 13.5976C12.8281 13.5976 10.0977 12.9289 10.0977 12.1488L11.045 4.45884L12.9953 9.6412L16.2273 2.78711L19.4036 9.4183L21.4097 4.34739L22.357 12.1488Z" fill="#2FA6FA" stroke="#2FA6FA" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7103 4.17892C11.3874 4.17892 11.9362 3.63005 11.9362 2.95299C11.9362 2.27592 11.3874 1.72705 10.7103 1.72705C10.0332 1.72705 9.48438 2.27592 9.48438 2.95299C9.48438 3.63005 10.0332 4.17892 10.7103 4.17892Z" fill="#2FA6FA"/><path d="M21.5814 4.17892C22.2585 4.17892 22.8073 3.63005 22.8073 2.95299C22.8073 2.27592 22.2585 1.72705 21.5814 1.72705C20.9043 1.72705 20.3555 2.27592 20.3555 2.95299C20.3555 3.63005 20.9043 4.17892 21.5814 4.17892Z" fill="#2FA6FA"/><path d="M16.2259 2.45187C16.903 2.45187 17.4519 1.903 17.4519 1.22593C17.4519 0.54887 16.903 0 16.2259 0C15.5489 0 15 0.54887 15 1.22593C15 1.903 15.5489 2.45187 16.2259 2.45187Z" fill="#2FA6FA"/><defs><linearGradient id="paint0_linear1" x1="28.5" y1="9.5" x2="3.5" y2="36.5" gradientUnits="userSpaceOnUse"><stop stop-color="#3B558F"/><stop offset="1" stop-color="#304A83"/></linearGradient><linearGradient id="paint1_linear1" x1="-5.85892e-08" y1="23.6285" x2="32" y2="23.6285" gradientUnits="userSpaceOnUse"><stop stop-color="#169DCA"/><stop offset="1" stop-color="#36C290"/></linearGradient></defs>'
                }
            })
        },
        4544: function(t, l, e) {
            e(32).register({
                "membership-silver": {
                    width: 32,
                    height: 40,
                    viewBox: "0 0 32 40",
                    data: '<circle cx="16" cy="23.2729" r="16" fill="url(#paint0_linear2)"/><mask id="mask02" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="7" width="32" height="33"><circle cx="16" cy="23.2729" r="16" fill="url(#paint1_linear2)"/></mask><g mask="url(#mask02)"><path d="M2.91016 38.2688C2.91016 38.2688 3.26093 34.3333 3.56159 33.0879C3.96247 31.4937 4.91456 29.4513 7.97127 28.2557C11.028 27.0601 14.0847 26.9106 14.0346 26.0139C13.9344 25.1172 12.0302 23.9714 10.8777 22.3773C9.72512 20.7832 9.57479 19.3385 9.57479 19.3385C9.57479 19.3385 8.72292 18.8901 8.6227 17.844C8.52248 16.7978 9.17391 16.5487 9.52468 16.4491C9.82534 16.3495 10.0759 16.4491 10.0759 16.4491C10.0759 16.4491 9.07369 8.72754 16.3898 8.72754C24.1568 8.72754 22.6535 16.4491 22.6535 16.4491C22.6535 16.4491 22.9041 16.3495 23.2047 16.4491C23.5054 16.5487 24.2069 16.7978 24.1067 17.844C24.0065 18.8901 23.1546 19.3385 23.1546 19.3385C23.1546 19.3385 23.0043 20.7333 21.8517 22.3773C20.6992 23.9714 18.795 25.1172 18.6948 26.0139C18.5946 26.9106 21.7014 27.0601 24.7581 28.2557C27.8148 29.4513 28.7669 31.4937 29.1678 33.0879C29.4685 34.3333 29.8192 38.2688 29.8192 38.2688C29.8192 38.2688 20.4988 43.4995 2.91016 38.2688Z" stroke="#E6ECF4" stroke-width="1.9992" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></g><path d="M22.357 12.1488C22.357 12.9289 19.6265 13.5976 16.2273 13.5976C12.8281 13.5976 10.0977 12.9289 10.0977 12.1488L11.045 4.45884L12.9953 9.6412L16.2273 2.78711L19.4036 9.4183L21.4097 4.34739L22.357 12.1488Z" fill="#E6ECF4" stroke="#E6ECF4" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7103 4.17892C11.3874 4.17892 11.9362 3.63005 11.9362 2.95299C11.9362 2.27592 11.3874 1.72705 10.7103 1.72705C10.0332 1.72705 9.48438 2.27592 9.48438 2.95299C9.48438 3.63005 10.0332 4.17892 10.7103 4.17892Z" fill="#E6ECF4"/><path d="M21.5814 4.17892C22.2585 4.17892 22.8073 3.63005 22.8073 2.95299C22.8073 2.27592 22.2585 1.72705 21.5814 1.72705C20.9043 1.72705 20.3555 2.27592 20.3555 2.95299C20.3555 3.63005 20.9043 4.17892 21.5814 4.17892Z" fill="#E6ECF4"/><path d="M16.2259 2.45187C16.903 2.45187 17.4519 1.903 17.4519 1.22593C17.4519 0.54887 16.903 0 16.2259 0C15.5489 0 15 0.54887 15 1.22593C15 1.903 15.5489 2.45187 16.2259 2.45187Z" fill="#E6ECF4"/><defs><linearGradient id="paint0_linear2" x1="5.28068e-07" y1="34.9093" x2="32" y2="13.0911" gradientUnits="userSpaceOnUse"><stop stop-color="#4C5870"/><stop offset="1" stop-color="#6B7A99"/></linearGradient><linearGradient id="paint1_linear2" x1="5.28068e-07" y1="34.9093" x2="32" y2="13.0911" gradientUnits="userSpaceOnUse"><stop stop-color="#4C5870"/><stop offset="1" stop-color="#6B7A99"/></linearGradient></defs>'
                }
            })
        },
        4545: function(t, l, e) {
            e(32).register({
                "membership-gold": {
                    width: 32,
                    height: 40,
                    viewBox: "0 0 32 40",
                    data: '<circle cx="16" cy="23.2729" r="16" fill="url(#paint0_linear4)"/><mask id="mask04" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="7" width="32" height="33"><circle cx="16" cy="23.2729" r="16" fill="url(#paint1_linear4)"/></mask><g mask="url(#mask04)"><path d="M2.91016 38.2688C2.91016 38.2688 3.26093 34.3333 3.56159 33.0879C3.96247 31.4937 4.91456 29.4513 7.97127 28.2557C11.028 27.0601 14.0847 26.9106 14.0346 26.0139C13.9344 25.1172 12.0302 23.9714 10.8777 22.3773C9.72512 20.7832 9.57479 19.3385 9.57479 19.3385C9.57479 19.3385 8.72292 18.8901 8.6227 17.844C8.52248 16.7978 9.17391 16.5487 9.52468 16.4491C9.82534 16.3495 10.0759 16.4491 10.0759 16.4491C10.0759 16.4491 9.07369 8.72754 16.3898 8.72754C24.1568 8.72754 22.6535 16.4491 22.6535 16.4491C22.6535 16.4491 22.9041 16.3495 23.2047 16.4491C23.5054 16.5487 24.2069 16.7978 24.1067 17.844C24.0065 18.8901 23.1546 19.3385 23.1546 19.3385C23.1546 19.3385 23.0043 20.7333 21.8517 22.3773C20.6992 23.9714 18.795 25.1172 18.6948 26.0139C18.5946 26.9106 21.7014 27.0601 24.7581 28.2557C27.8148 29.4513 28.7669 31.4937 29.1678 33.0879C29.4685 34.3333 29.8192 38.2688 29.8192 38.2688C29.8192 38.2688 20.4988 43.4995 2.91016 38.2688Z" stroke="#ECD278" stroke-width="1.9992" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></g><path d="M22.357 12.1488C22.357 12.9289 19.6265 13.5976 16.2273 13.5976C12.8281 13.5976 10.0977 12.9289 10.0977 12.1488L11.045 4.45884L12.9953 9.6412L16.2273 2.78711L19.4036 9.4183L21.4097 4.34739L22.357 12.1488Z" fill="#ECD278" stroke="#ECD278" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7103 4.17892C11.3874 4.17892 11.9362 3.63005 11.9362 2.95299C11.9362 2.27592 11.3874 1.72705 10.7103 1.72705C10.0332 1.72705 9.48438 2.27592 9.48438 2.95299C9.48438 3.63005 10.0332 4.17892 10.7103 4.17892Z" fill="#ECD278"/><path d="M21.5814 4.17892C22.2585 4.17892 22.8073 3.63005 22.8073 2.95299C22.8073 2.27592 22.2585 1.72705 21.5814 1.72705C20.9043 1.72705 20.3555 2.27592 20.3555 2.95299C20.3555 3.63005 20.9043 4.17892 21.5814 4.17892Z" fill="#ECD278"/><path d="M16.2259 2.45187C16.903 2.45187 17.4519 1.903 17.4519 1.22593C17.4519 0.54887 16.903 0 16.2259 0C15.5489 0 15 0.54887 15 1.22593C15 1.903 15.5489 2.45187 16.2259 2.45187Z" fill="#ECD278"/><defs><linearGradient id="paint0_linear4" x1="5.28068e-07" y1="34.9093" x2="32" y2="13.0911" gradientUnits="userSpaceOnUse"><stop stop-color="#5C5548"/><stop offset="1" stop-color="#868069"/></linearGradient><linearGradient id="paint1_linear4" x1="5.28068e-07" y1="34.9093" x2="32" y2="13.0911" gradientUnits="userSpaceOnUse"><stop stop-color="#65512A"/><stop offset="1" stop-color="#9E8D4F"/></linearGradient></defs>'
                }
            })
        },
        4546: function(t, l, e) {
            e(32).register({
                "membership-platinum": {
                    width: 32,
                    height: 40,
                    viewBox: "0 0 32 40",
                    data: '<circle cx="16" cy="23.2729" r="16" fill="url(#paint0_linear5)"/><mask id="mask05" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="7" width="32" height="33"><circle cx="16" cy="23.2729" r="16" fill="url(#paint1_linear5)"/></mask><g mask="url(#mask05)"><path d="M2.91016 38.2688C2.91016 38.2688 3.26093 34.3333 3.56159 33.0879C3.96247 31.4937 4.91456 29.4513 7.97127 28.2557C11.028 27.0601 14.0847 26.9106 14.0346 26.0139C13.9344 25.1172 12.0302 23.9714 10.8777 22.3773C9.72512 20.7832 9.57479 19.3385 9.57479 19.3385C9.57479 19.3385 8.72292 18.8901 8.6227 17.844C8.52248 16.7978 9.17391 16.5487 9.52468 16.4491C9.82534 16.3495 10.0759 16.4491 10.0759 16.4491C10.0759 16.4491 9.07369 8.72754 16.3898 8.72754C24.1568 8.72754 22.6535 16.4491 22.6535 16.4491C22.6535 16.4491 22.9041 16.3495 23.2047 16.4491C23.5054 16.5487 24.2069 16.7978 24.1067 17.844C24.0065 18.8901 23.1546 19.3385 23.1546 19.3385C23.1546 19.3385 23.0043 20.7333 21.8517 22.3773C20.6992 23.9714 18.795 25.1172 18.6948 26.0139C18.5946 26.9106 21.7014 27.0601 24.7581 28.2557C27.8148 29.4513 28.7669 31.4937 29.1678 33.0879C29.4685 34.3333 29.8192 38.2688 29.8192 38.2688C29.8192 38.2688 20.4988 43.4995 2.91016 38.2688Z" stroke="#E6ECF4" stroke-width="1.9992" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></g><path d="M22.357 12.1488C22.357 12.9289 19.6265 13.5976 16.2273 13.5976C12.8281 13.5976 10.0977 12.9289 10.0977 12.1488L11.045 4.45884L12.9953 9.6412L16.2273 2.78711L19.4036 9.4183L21.4097 4.34739L22.357 12.1488Z" fill="#E6ECF4" stroke="#E6ECF4" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7103 4.17892C11.3874 4.17892 11.9362 3.63005 11.9362 2.95299C11.9362 2.27592 11.3874 1.72705 10.7103 1.72705C10.0332 1.72705 9.48438 2.27592 9.48438 2.95299C9.48438 3.63005 10.0332 4.17892 10.7103 4.17892Z" fill="#E6ECF4"/><path d="M21.5814 4.17892C22.2585 4.17892 22.8073 3.63005 22.8073 2.95299C22.8073 2.27592 22.2585 1.72705 21.5814 1.72705C20.9043 1.72705 20.3555 2.27592 20.3555 2.95299C20.3555 3.63005 20.9043 4.17892 21.5814 4.17892Z" fill="#E6ECF4"/><path d="M16.2259 2.45187C16.903 2.45187 17.4519 1.903 17.4519 1.22593C17.4519 0.54887 16.903 0 16.2259 0C15.5489 0 15 0.54887 15 1.22593C15 1.903 15.5489 2.45187 16.2259 2.45187Z" fill="#E6ECF4"/><defs><linearGradient id="paint0_linear5" x1="5.28068e-07" y1="34.9093" x2="32" y2="13.0911" gradientUnits="userSpaceOnUse"><stop stop-color="#4C5870"/><stop offset="1" stop-color="#DB4F68"/></linearGradient><linearGradient id="paint1_linear5" x1="5.28068e-07" y1="34.9093" x2="32" y2="13.0911" gradientUnits="userSpaceOnUse"><stop stop-color="#607298"/><stop offset="1" stop-color="#DB4F68"/></linearGradient></defs>'
                }
            })
        },
        4547: function(t, l, e) {
            e(32).register({
                "atomic-coins": {
                    width: 26,
                    height: 25,
                    viewBox: "0 0 26 25",
                    data: '<path d="M24.25 6.17143C24.25 7.44958 23.2265 8.79643 21.1423 9.86832C19.0971 10.9201 16.2195 11.5929 13 11.5929C9.78046 11.5929 6.90289 10.9201 4.85773 9.86832C2.7735 8.79643 1.75 7.44958 1.75 6.17143C1.75 4.89327 2.7735 3.54642 4.85773 2.47453C6.90289 1.42274 9.78046 0.75 13 0.75C16.2195 0.75 19.0971 1.42274 21.1423 2.47453C23.2265 3.54642 24.25 4.89327 24.25 6.17143Z" stroke="#778697" stroke-width="1.5"/><path d="M24.6619 5.82812V10.2363C24.6619 13.4824 19.4429 16.1138 13.0048 16.1138C6.56674 16.1138 1.34766 13.4824 1.34766 10.2363V5.82812" stroke="#778697" stroke-width="1.5"/><path d="M24.6619 9.94263V14.3508C24.6619 17.5969 19.4429 20.2283 13.0048 20.2283C6.56674 20.2283 1.34766 17.5969 1.34766 14.3508V9.94263" stroke="#778697" stroke-width="1.5"/><path d="M24.6619 13.7141V18.1223C24.6619 21.3684 19.4429 23.9998 13.0048 23.9998C6.56674 23.9998 1.34766 21.3684 1.34766 18.1223V13.7141" stroke="#778697" stroke-width="1.5"/><path d="M8.53906 8.10149L11.7886 3.68444C12.3105 2.88364 13.8533 2.8836 14.4099 3.69758L17.4533 8.10149" stroke="#778697" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="13.1377" cy="6.62802" rx="1.11429" ry="0.561613" stroke="#778697" stroke-width="1.5"/>'
                }
            })
        },
        4548: function(t, l, e) {
            e(32).register({
                staking: {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    data: '<path d="M22 6C22 6.15118 21.9189 6.42452 21.4836 6.79869C21.0517 7.17008 20.3681 7.54985 19.4364 7.88863C17.5814 8.56321 14.9523 9 12 9C9.04769 9 6.41865 8.56321 4.56357 7.88863C3.63192 7.54985 2.94833 7.17008 2.51636 6.79869C2.08113 6.42452 2 6.15118 2 6C2 5.84882 2.08113 5.57548 2.51636 5.2013C2.94833 4.82992 3.63192 4.45015 4.56357 4.11137C6.41865 3.43679 9.04769 3 12 3C14.9523 3 17.5814 3.43679 19.4364 4.11137C20.3681 4.45015 21.0517 4.82992 21.4836 5.2013C21.9189 5.57548 22 5.84882 22 6Z" stroke="#8290AD" stroke-width="2"/><path d="M21.998 6.00024V9.23554C21.998 11.3147 17.5209 13.0002 11.998 13.0002C6.4752 13.0002 1.99805 11.3147 1.99805 9.23554V6.00024" stroke="#8290AD" stroke-width="2"/><path d="M21.998 9.00024V13.2355C21.998 15.3147 17.5209 17.0002 11.998 17.0002C6.4752 17.0002 1.99805 15.3147 1.99805 13.2355V9.00024" stroke="#8290AD" stroke-width="2"/><path d="M21.998 13.0002V17.2355C21.998 19.3147 17.5209 21.0002 11.998 21.0002C6.4752 21.0002 1.99805 19.3147 1.99805 17.2355V13.0002" stroke="#8290AD" stroke-width="2"/>'
                }
            })
        },
        4549: function(t, l, e) {
            e(32).register({
                success: {
                    width: 12,
                    height: 12,
                    viewBox: "0 0 12 12",
                    data: '<path d="M0.75 6.21429L4.35938 9.75L11.25 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />'
                }
            })
        },
        4550: function(t, l, e) {
            e(32).register({
                invite_friends: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    data: '\n      <g>\n      <path d="M10.8955 11.7101C13.3559 11.7101 15.3505 9.71553 15.3505 7.25508C15.3505 4.79463 13.3559 2.80005 10.8955 2.80005C8.43502 2.80005 6.44043 4.79463 6.44043 7.25508C6.44043 9.71553 8.43502 11.7101 10.8955 11.7101Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n      <path d="M7.68244 10.3464C4.80692 11.5884 2.79541 14.4505 2.79541 17.785C2.79541 17.8345 2.79541 17.8795 2.79541 17.929C5.25693 18.6175 8.00195 19 10.8955 19C13.789 19 16.534 18.6175 18.9955 17.929C18.9955 17.8795 18.9955 17.8345 18.9955 17.785C18.9955 14.4505 16.984 11.5884 14.104 10.3464"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n      <path d="M6.47619 6.67904C6.37719 6.68804 6.27819 6.69254 6.17469 6.69254C4.60418 6.69254 3.32617 5.41903 3.32617 3.84402C3.32617 2.26901 4.60418 1 6.17469 1C7.5382 1 8.68121 1.95851 8.95571 3.24102"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n      <path d="M4.12302 5.81982C2.28701 6.61633 1 8.44334 1 10.5764C1 10.6079 1 10.6394 1 10.6664C2.51651 11.0894 4.19952 11.3324 5.97253 11.3504"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n      </g>\n          '
                }
            })
        },
        4551: function(t, l, e) {
            e(32).register({
                "copy-square-twice": {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    data: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2412 2H13.1586H13.1586C12.3536 1.99999 11.6893 1.99998 11.1481 2.04419C10.586 2.09012 10.0693 2.18868 9.58394 2.43598C8.83129 2.81947 8.21937 3.43139 7.83588 4.18404C7.58859 4.66937 7.49002 5.18608 7.4441 5.74818C7.40662 6.20684 7.40092 6.75397 7.40005 7.40018C6.7539 7.40104 6.20681 7.40675 5.74818 7.44422C5.18608 7.49014 4.66937 7.58871 4.18404 7.836C3.43139 8.21949 2.81947 8.83142 2.43598 9.58406C2.18868 10.0694 2.09012 10.5861 2.04419 11.1482C1.99998 11.6894 1.99999 12.3537 2 13.1587V13.1587V16.2413V16.2413C1.99999 17.0463 1.99998 17.7107 2.04419 18.2519C2.09012 18.8139 2.18868 19.3307 2.43598 19.816C2.81947 20.5686 3.43139 21.1806 4.18404 21.5641C4.66937 21.8113 5.18608 21.9099 5.74817 21.9558C6.28935 22 6.95368 22 7.75862 22H7.75872H10.8413H10.8414C11.6463 22 12.3107 22 12.8518 21.9558C13.4139 21.9099 13.9306 21.8113 14.416 21.5641C15.1686 21.1806 15.7805 20.5686 16.164 19.816C16.4113 19.3307 16.5099 18.8139 16.5558 18.2519C16.5933 17.7932 16.599 17.2461 16.5998 16.5999C17.246 16.599 17.7931 16.5933 18.2517 16.5558C18.8138 16.5099 19.3305 16.4113 19.8159 16.164C20.5685 15.7805 21.1804 15.1686 21.5639 14.416C21.8112 13.9306 21.9098 13.4139 21.9557 12.8518C21.9999 12.3107 21.9999 11.6463 21.9999 10.8414V10.8413V7.75868V7.75857C21.9999 6.95366 21.9999 6.28934 21.9557 5.74818C21.9098 5.18608 21.8112 4.66937 21.5639 4.18404C21.1804 3.43139 20.5685 2.81947 19.8159 2.43598C19.3305 2.18868 18.8138 2.09012 18.2517 2.04419C17.7105 1.99998 17.0462 1.99999 16.2412 2H16.2412ZM14.6 15.5858C14.5999 15.5906 14.5999 15.5953 14.5999 15.6C14.5999 15.6047 14.5999 15.6094 14.6 15.6142V16.2C14.6 17.0566 14.5992 17.6389 14.5624 18.089C14.5266 18.5274 14.4617 18.7516 14.382 18.908C14.1903 19.2843 13.8843 19.5903 13.508 19.782C13.3516 19.8617 13.1274 19.9267 12.689 19.9625C12.2389 19.9992 11.6566 20 10.8 20H7.8C6.94342 20 6.36113 19.9992 5.91104 19.9625C5.47262 19.9267 5.24842 19.8617 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.1383 18.7516 4.07337 18.5274 4.03755 18.089C4.00078 17.6389 4 17.0566 4 16.2V13.2C4 12.3434 4.00078 11.7612 4.03755 11.3111C4.07337 10.8726 4.1383 10.6484 4.21799 10.492C4.40973 10.1157 4.7157 9.80976 5.09202 9.61801C5.24842 9.53832 5.47262 9.4734 5.91104 9.43758C6.36113 9.4008 6.94342 9.40003 7.8 9.40003H10.8C11.6566 9.40003 12.2389 9.4008 12.689 9.43758C13.1274 9.4734 13.3516 9.53832 13.508 9.61801C13.8843 9.80976 14.1903 10.1157 14.382 10.492C14.4617 10.6484 14.5266 10.8726 14.5624 11.3111C14.5992 11.7612 14.6 12.3434 14.6 13.2V15.5858ZM16.6 14.5998C17.244 14.5988 17.7126 14.5932 18.0889 14.5625C18.5273 14.5266 18.7515 14.4617 18.9079 14.382C19.2842 14.1903 19.5902 13.8843 19.7819 13.508C19.8616 13.3516 19.9265 13.1274 19.9624 12.689C19.9991 12.2389 19.9999 11.6566 19.9999 10.8V7.8C19.9999 6.94342 19.9991 6.36113 19.9624 5.91104C19.9265 5.47262 19.8616 5.24842 19.7819 5.09202C19.5902 4.7157 19.2842 4.40973 18.9079 4.21799C18.7515 4.1383 18.5273 4.07337 18.0889 4.03755C17.6388 4.00078 17.0565 4 16.1999 4H13.1999C12.3433 4 11.761 4.00078 11.3109 4.03755C10.8725 4.07337 10.6483 4.1383 10.4919 4.21799C10.1156 4.40973 9.80964 4.7157 9.61789 5.09202C9.5382 5.24842 9.47328 5.47262 9.43746 5.91104C9.40671 6.28731 9.40113 6.75596 9.40012 7.40003H10.8413C11.6463 7.40001 12.3106 7.4 12.8518 7.44422C13.4139 7.49014 13.9306 7.58871 14.416 7.836C15.1686 8.21949 15.7805 8.83142 16.164 9.58406C16.4113 10.0694 16.5099 10.5861 16.5558 11.1482C16.6 11.6894 16.6 12.3538 16.6 13.1587V14.5998Z" fill="#7A859F" />'
                }
            })
        },
        5126: function(t, l, e) {
            "use strict";
            e.r(l);
            var i = e(827),
                a = e.n(i);
            for (var r in i)["default"].indexOf(r) < 0 && function(t) {
                e.d(l, t, (function() {
                    return i[t]
                }))
            }(r);
            var n = e(1294),
                s = e(3),
                f = Object(s.a)(a.a, n.a, n.b, !1, null, null, null);
            l.default = f.exports
        },
        5127: function(t, l, e) {
            "use strict";
            e.r(l);
            var i = e(828),
                a = e.n(i);
            for (var r in i)["default"].indexOf(r) < 0 && function(t) {
                e.d(l, t, (function() {
                    return i[t]
                }))
            }(r);
            var n = e(1293),
                s = e(3),
                f = Object(s.a)(a.a, n.a, n.b, !1, null, null, null);
            l.default = f.exports
        },
        5373: function(t, l, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), Object.defineProperty(l, "balanceFormat", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(l, "fixedAmount", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(l, "fixedExchangeValue", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(l, "formatAddress", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(l, "formatBigAmount", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(l, "formatFiat", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(l, "formatFiatFixed", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(l, "formatFiatV2", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(l, "formatFinance", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(l, "formatFinanceTrim", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(l, "formatMiddleAmount", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(l, "toCurrency", {
                enumerable: !0,
                get: function() {
                    return _.default
                }
            });
            var a = i(e(5374)),
                r = i(e(5375)),
                n = i(e(5376)),
                s = i(e(5377)),
                f = i(e(5378)),
                o = i(e(5379)),
                h = i(e(5380)),
                d = i(e(5381)),
                u = i(e(5382)),
                p = i(e(5383)),
                c = i(e(5384)),
                _ = i(e(5385))
        },
        5374: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var i = e(437);
            l.default = t => {
                const l = Number(Math.abs(Number(t)));
                return l >= i.BILLION ? (l / i.BILLION).toFixed(2) + "B" : l >= i.MILLION ? (l / i.MILLION).toFixed(2) + "M" : l >= i.THOUSAND ? (l / i.THOUSAND).toFixed(2) + "K" : Number(l < i.MIN_BALANCE ? l.toFixed(6) : l.toFixed(2))
            }
        },
        5375: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var i = e(437);
            l.default = t => (+t).toFixed(i.AMOUNT_TO_FIXED)
        },
        5376: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var i = e(437);
            l.default = (t, l = i.MAX_VALUE_SIZE) => {
                const e = String(t);
                if (e.length > l && e.includes(".")) {
                    const [t, i] = e.split(".");
                    return t.length >= l ? Number(t) : Number(`${t}.${i.substr(0,Math.min(i.length,l-t.length))}`)
                }
                return t
            }
        },
        5377: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var i = e(437);
            l.default = t => t.length <= i.MAX_ADDRES_SIZE ? t : t.substr(0, i.SHORTCUT_SIZE) + "..." + t.substr(-i.SHORTCUT_SIZE)
        },
        5378: function(t, l, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var a = i(e(2307));
            l.default = t => (0, a.default)(t || "0", 9, 4)
        },
        5379: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var i = e(437);
            l.default = (t, l, e = i.MIN_BALANCE) => {
                const a = Number(t);
                return "BTC" === l ? a.toFixed(8) : 0 === a ? "0" : a < e ? a.toFixed(6) : a.toFixed(2)
            }
        },
        5380: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            l.default = t => {
                const l = t < 1 ? Number(t).toFixed(6) : Number(t).toFixed(2);
                return Number(l)
            }
        },
        5381: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            l.default = (t, l = null) => {
                let e = 2;
                const i = Number(t),
                    a = i - Math.trunc(i);
                return 0 === i || a < .01 ? Math.trunc(i) + ".00" : "BTC" === l ? (e = 8, i.toFixed(e)) : i.toFixed(e)
            }
        },
        5382: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            l.default = t => {
                const [l, e] = String(t).split("."), i = l.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                return e ? `${i}.${e}` : "" + i
            }
        },
        5383: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var i = e(437);
            l.default = (t, l = i.MAX_LENGTH_FINANCE_TRIM_DEFAULT) => {
                const [e, a] = String(t).split("."), r = e.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"), n = a ? `${r}.${a}` : "" + r;
                return r.length > l ? r.substr(0, l - "...".length) + "..." : n.length > l ? n.substr(0, l) : n
            }
        },
        5384: function(t, l, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var a = i(e(2307));
            l.default = t => (0, a.default)(t || "0", 5, 4)
        },
        5385: function(t, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            l.default = (t, l = {}) => {
                const e = Object.assign({
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                    currencyDisplay: "symbol",
                    trailingZeroDisplay: "stripIfInteger"
                }, l);
                return new Intl.NumberFormat("en-US", e).format(t)
            }
        },
        5457: function(t, l, e) {
            "use strict";
            var i = e(2);
            e(2381);
            var a = i(e(187)),
                r = i(e(2383)),
                n = i(e(4582)),
                s = i(e(2133)),
                f = _(e(32)),
                o = _(e(204));
            e(5268);
            var h = _(e(5270)),
                d = e(30),
                u = i(e(5370));
            e(5371);
            var p = _(e(5373));

            function c(t) {
                if ("function" != typeof WeakMap) return null;
                var l = new WeakMap,
                    e = new WeakMap;
                return (c = function(t) {
                    return t ? e : l
                })(t)
            }

            function _(t, l) {
                if (!l && t && t.__esModule) return t;
                if (null === t || "object" != typeof t && "function" != typeof t) return {
                    default: t
                };
                var e = c(l);
                if (e && e.has(t)) return e.get(t);
                var i = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in t)
                    if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
                        var n = a ? Object.getOwnPropertyDescriptor(t, r) : null;
                        n && (n.get || n.set) ? Object.defineProperty(i, r, n) : i[r] = t[r]
                    } return i.default = t, e && e.set(t, i), i
            }!async function() {
                Object.values(h).map(t => a.default.use(t)), a.default.mixin(u.default), a.default.mixin(d.iconsMixin), a.default.use(e(5386)), a.default.use(f, {
                    tagName: "icon"
                }), a.default.directive("click-outside", {
                    bind: function(t, l, e) {
                        if ("function" != typeof l.value) {
                            const t = e.context.name;
                            let i = `v-click-outside provided expression '${l.expression}' is not a function.`;
                            t && (i += `Found in component '${t}'`), console.warn(i)
                        }
                        const i = l.modifiers.bubble,
                            a = e => {
                                (i || !t.contains(e.target) && t !== e.target) && l.value(e)
                            };
                        t.__vueClickOutside__ = a, document.addEventListener("click", a)
                    },
                    unbind: function(t, l) {
                        document.removeEventListener("click", t.__vueClickOutside__), t.__vueClickOutside__ = null
                    }
                }), Object.entries(o).forEach(([t, l]) => {
                    try {
                        if (null == l || !l.name) throw new Error(t + " should have a name for global registration");
                        a.default.component(l.name || t, l)
                    } catch (t) {
                        console.error(t)
                    }
                }), Object.keys(p).forEach(t => {
                    a.default.filter(t, p[t])
                }), top.vue = new a.default({
                    components: {
                        App: r.default
                    },
                    router: n.default,
                    store: s.default,
                    template: "<App/>"
                }).$mount("#app")
            }()
        },
        827: function(t, l, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var a = i(e(5127)),
                r = e(31),
                n = {
                    name: "WalletWizard",
                    components: {
                        Wizard: a.default
                    },
                    props: {
                        coin: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    methods: {
                        ...(0, r.mapActions)(["toggleWizardWindow"]),
                        close() {
                            this.toggleWizardWindow(!1)
                        }
                    }
                };
            l.default = n
        },
        828: function(t, l, e) {
            "use strict";
            var i = e(2);
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var a = e(31),
                r = i(e(76));
            var n = {
                name: "Wizard",
                components: {
                    Edit: r.default
                },
                props: {
                    coin: {
                        type: Object,
                        default: Object
                    }
                },
                data: () => ({
                    loading: !1,
                    isFirstStep: !0,
                    copied: !1,
                    notificationTag: "",
                    login: "",
                    loginError: "",
                    charsMax: 12
                }),
                computed: {
                    charsLeft() {
                        return this.charsMax - this.login.length
                    },
                    signUpTxMemo() {
                        return `${this.login}-${JSON.parse(this.coin.privateKey).active.publicKey}`
                    }
                },
                watch: {
                    async login(t) {
                        t.length ? t.length === this.charsMax ? this.loginError = "" : this.loginError = "Account name must contain exactly 12 characters" : this.loginError = ""
                    }
                },
                methods: {
                    ...(0, a.mapActions)(["toggleWizardWindow"]),
                    generateName() {
                        this.login = "";
                        const t = "abcdefghijklmnopqrstuvwxyz12345";
                        for (; this.charsLeft;) this.login += t.charAt(Math.floor(Math.random() * t.length))
                    },
                    copyAddress(t, l) {
                        this.notificationTag = l, this.$electron.clipboard.writeText(t), this.copied = !0, setTimeout(() => {
                            this.copied = !1
                        }, 1e3)
                    },
                    async validateLogin() {
                        if (this.loginError = "", this.login.length === this.charsMax) {
                            try {
                                await this.coin.validateNewAccountName(this.login) ? await this.coin.validateAddress(this.login) || (this.loginError = "Account name contains invalid characters") : this.loginError = "This account is already exists, please choose another name"
                            } catch (t) {
                                this.loginError = "Service temporary unavailable"
                            }
                            return this.loginError
                        }
                        this.loginError = "Account name must contain exactly 12 characters"
                    },
                    async nextStep() {
                        this.loading = !0, await this.validateLogin(), this.loading = !1, this.isFirstStep = "" !== this.loginError
                    }
                }
            };
            l.default = n
        }
    }
]);