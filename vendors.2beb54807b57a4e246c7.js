(window.webpackJsonp = window.webpackJsonp || []).push([
    [137], {
        106: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(803),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1269),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        114: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(808),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1273),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        1173: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(755),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1228),
                o = a(3);
            var l = function(t) {
                    a(4593)
                },
                d = Object(o.a)(i.a, s.a, s.b, !1, l, "data-v-34634091", null);
            e.default = d.exports
        },
        1177: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(788),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1262),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        1194: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("div", {
                        staticClass: "atomic-progress-bar loading-proggress",
                        attrs: {
                            loading: this.loadingPercentage
                        }
                    }, [this._v(this._s(this.text))])
                },
                i = []
        },
        1198: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("div", {
                        staticClass: "icon",
                        class: this.$iconClass(this.wallet),
                        attrs: {
                            "data-test-id": "coin_icon"
                        }
                    })
                },
                i = []
        },
        1199: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("svg", {
                        attrs: {
                            fill: "none",
                            height: "24",
                            viewBox: "0 0 24 24",
                            width: "24"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M3 17.2496V20.9996H6.75L17.81 9.93957L14.06 6.18957L3 17.2496ZM20.71 7.03957C21.1 6.64957 21.1 6.01957 20.71 5.62957L18.37 3.28957C17.98 2.89957 17.35 2.89957 16.96 3.28957L15.13 5.11957L18.88 8.86957L20.71 7.03957Z",
                            fill: "#B0BDD6"
                        }
                    })])
                },
                i = []
        },
        1200: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "form-field"
                    }, [n("div", {
                        staticClass: "input-wrap",
                        class: {
                            "past-click": t.isPasteByClick && "" === t.value
                        }
                    }, [n("input", {
                        ref: "input",
                        attrs: {
                            readonly: t.readonly,
                            type: t.inputType
                        },
                        domProps: {
                            value: t.value
                        },
                        on: {
                            blur: t.onBlur,
                            click: t.pasteFromClipboardToInput,
                            focus: function(e) {
                                return t.$emit("focus")
                            },
                            input: t.onInput,
                            keypress: t.keypressHandler,
                            keyup: [t.onKeyUp, function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), e.stopPropagation(), t.enterPressed.apply(null, arguments))
                            }]
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "line",
                        class: {
                            "line-error": t.error,
                            "line-true": !t.error && t.value
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "placeholder",
                        class: {
                            "is-up": t.value
                        }
                    }, [t._v("\n      " + t._s(t.isPasteByClick && t.isEditPlaceholder ? t.editPlaceholder : t.placeholder) + "\n    ")]), t._v(" "), t.isPasteFromClipboard ? n("div", {
                        staticClass: "icon-paste",
                        on: {
                            click: t.pasteValueFromClipboard
                        }
                    }) : t._e(), t._v(" "), t.isPasteByClick && "" !== t.value ? n("div", {
                        staticClass: "icon-delete",
                        on: {
                            click: t.cleanInput
                        }
                    }, [t._v("\n      ✕\n    ")]) : t._e(), t._v(" "), t.isPasteByClick && "" === t.value ? n("div", {
                        staticClass: "icon-edit",
                        on: {
                            click: t.editInput
                        }
                    }, [n("EditSvg")], 1) : t._e(), t._v(" "), t.isShowPassword ? n("div", {
                        staticClass: "password-icon",
                        class: {
                            "close-eye": "text" === t.inputType
                        },
                        on: {
                            click: t.toggleTypePassword
                        }
                    }, [n("img", {
                        attrs: {
                            src: a(2097)
                        }
                    })]) : t._e(), t._v(" "), t.ticker ? n("div", {
                        staticClass: "ticker"
                    }, [t._v("\n      " + t._s(t.ticker) + "\n    ")]) : t._e()]), t._v(" "), n("transition", {
                        attrs: {
                            name: "slide-in"
                        }
                    }, [t.error ? n("div", {
                        staticClass: "error",
                        domProps: {
                            innerHTML: t._s(t.error)
                        }
                    }) : t._e()])], 1)
                },
                i = []
        },
        1211: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return t.isRateStars ? a("div", {
                        staticClass: "rate-stars"
                    }, [t.isRate ? a("p", {
                        staticClass: "rate-popup__title"
                    }, [t._v("\n    How was your experience with Atomic Wallet?\n  ")]) : t._e(), t._v(" "), a("div", {
                        staticClass: "rate-stars__wrap"
                    }, t._l(5, (function(e) {
                        return a("div", {
                            key: e,
                            staticClass: "rate-stars__item",
                            class: {
                                "rate-stars__item--hover": t.hoverStars.length > 0 && t.hoverStars.includes(e),
                                "rate-stars__item--active": e <= t.userRate,
                                "rate-stars__item--good": 5 === t.userRate
                            },
                            on: {
                                click: function(a) {
                                    t.isRate && t.rateApp(e)
                                },
                                mouseleave: function(e) {
                                    t.isRate && t.disableHoverStart()
                                },
                                mouseover: function(a) {
                                    t.isRate && t.hoverStart(e)
                                }
                            }
                        }, [a("RateStart")], 1)
                    })), 0)]) : t._e()
                },
                i = []
        },
        1216: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "dropdown small"
                    }, [a("div", {
                        staticClass: "search"
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.filter,
                            expression: "filter"
                        }],
                        ref: "fiatDropdown",
                        staticClass: "placeholder-white",
                        attrs: {
                            placeholder: "Search...",
                            type: "text",
                            "data-test-id": "fiat_dropdown_filter_input"
                        },
                        domProps: {
                            value: t.filter
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.filter = e.target.value)
                            }
                        }
                    })]), t._v(" "), a("div", {
                        staticClass: "scroll-area"
                    }, [a("ul", {
                        staticClass: "search-select",
                        attrs: {
                            "data-test-id": "fiat_dropdown_list"
                        }
                    }, t._l(t.filteredFiat, (function(e, n) {
                        return a("li", {
                            key: n,
                            staticClass: "search-select-element",
                            on: {
                                click: function(a) {
                                    return t.$emit("selectFiatCoin", e)
                                }
                            }
                        }, [a("img", {
                            attrs: {
                                src: "static/img/fiat/" + e.code + ".png"
                            }
                        }), a("span", [t._v("\n          " + t._s(e.code) + "\n        ")])])
                    })), 0)])])
                },
                i = []
        },
        1227: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return t.pathToFile ? a("img", {
                        attrs: {
                            src: t.pathToFile,
                            alt: t.alt
                        },
                        on: {
                            load: function(e) {
                                return t.$emit("loadFromCache", t.isCacheUse)
                            }
                        }
                    }) : t._e()
                },
                i = []
        },
        1228: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "image-preview"
                    }, ["article" === t.type ? [t.isVideo ? n("img", {
                        attrs: {
                            src: a(2138)
                        }
                    }) : n("img", {
                        attrs: {
                            src: a(2139)
                        }
                    })] : t._e(), t._v(" "), "nft" === t.type ? [n("img", {
                        attrs: {
                            src: a(2140)
                        }
                    })] : t._e(), t._v(" "), "nft-small" === t.type ? [n("img", {
                        attrs: {
                            src: a(685)
                        }
                    })] : t._e()], 2)
                },
                i = []
        },
        1231: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        staticClass: "nft__image__wrap",
                        on: {
                            mouseover: function(e) {
                                t.isMouseOnNFT = !0
                            },
                            mouseleave: function(e) {
                                t.isMouseOnNFT = !1
                            }
                        }
                    }, [t.nft.isFormatSupported ? n("div", [t.isShowControl ? n("div", {
                        staticClass: "nft__image__control__wrap"
                    }, [n("div", {
                        staticClass: "nft__image__control"
                    }, [n("AtomicButton", {
                        attrs: {
                            type: "dark",
                            size: "icon",
                            icon: "magnifier_plus_outline"
                        },
                        on: {
                            click: t.openNFTFullSize
                        }
                    }), t._v(" "), n("AtomicButton", {
                        attrs: {
                            type: "dark",
                            size: "icon",
                            icon: "download_outline"
                        },
                        on: {
                            click: t.downloadNFTFullSize
                        }
                    })], 1)]) : t._e(), t._v(" "), t.imagePlaceholder ? n("div", {
                        staticClass: "thumbnail__image"
                    }, [n("div", {
                        staticClass: "thumbnail__warning"
                    }), t._v(" "), n("div", {
                        staticClass: "text text_extra-small text_gray"
                    }, [t._v("\n          Couldn't load."), n("br"), t._v("Try checking your connection\n        ")])]) : n("CachedImage", {
                        staticClass: "image_cover",
                        style: {
                            width: "250px",
                            borderRadius: "16px",
                            position: "relative"
                        },
                        attrs: {
                            src: t.nft.getImageUrl(),
                            alt: t.nft.name,
                            type: t.nft.fileType
                        },
                        on: {
                            fetchImage: t.fetchImage
                        }
                    })], 1) : n("ImagePreview", {
                        style: {
                            width: "250px",
                            borderRadius: "16px",
                            position: "relative"
                        },
                        attrs: {
                            type: "nft"
                        }
                    })], 1), t._v(" "), n("Teleport", {
                        attrs: {
                            to: "body"
                        }
                    }, [t.fullSizeModal ? n("AtomicModalFullScreen", {
                        on: {
                            close: t.closeModal
                        }
                    }, [n("CachedImage", {
                        staticClass: "image_cover__fullscreen",
                        attrs: {
                            src: t.nft.getImageUrl(),
                            alt: t.nft.name,
                            type: t.nft.fileType
                        }
                    })], 1) : t._e(), t._v(" "), n("div", {
                        staticClass: "rate-popup",
                        class: {
                            "rate-popup_show": t.isShowSaveModal
                        },
                        attrs: {
                            "data-test-id": "contact_support"
                        }
                    }, [n("div", {
                        staticClass: "rate-popup__wrap",
                        staticStyle: {
                            padding: "40px 20px 20px"
                        }
                    }, [n("img", {
                        staticClass: "rate-popup__atomic",
                        attrs: {
                            src: a(1169)
                        }
                    }), t._v(" "), n("p", {
                        staticClass: "rate-popup__title-big"
                    }, [t._v("\n          Download complete\n        ")]), t._v(" "), n("div", {
                        staticClass: "m-t-20"
                    }, [n("div", {
                        staticClass: "success_save_image_popup_text"
                    }, [t._v("\n            NFT asset is saved to your Desktop folder\n          ")]), t._v(" "), n("div", {
                        staticClass: "m-t-20"
                    }, [n("AtomicButton", {
                        staticClass: "rate-popup__button",
                        on: {
                            click: function(e) {
                                t.isShowSaveModal = !1
                            }
                        }
                    }, [t._v("\n              Close\n            ")])], 1)])])])], 1)], 1)
                },
                i = []
        },
        1253: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [t.isShowTag && "small" !== t.elemSize ? a("div", {
                        staticClass: "token-tag"
                    }, [a("div", {
                        class: ["element color-" + t.tag]
                    }, [a("span", {
                        attrs: {
                            "data-test-id": "wall_coin_tag"
                        }
                    }, [t._v("\n        " + t._s(t.tag) + "\n      ")])])]) : t.isShowTag ? a("div", {
                        staticClass: "tag small"
                    }, [a("div", {
                        class: ["element color-" + t.tag, {
                            small: "small" === t.elemSize
                        }],
                        attrs: {
                            "data-test-id": "wall_coin_tag"
                        }
                    }, [t._v("\n      " + t._s(t.tag) + "\n    ")])]) : t._e()])
                },
                i = []
        },
        1256: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "search"
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.searchInput,
                            expression: "searchInput"
                        }],
                        attrs: {
                            placeholder: t.placeholder,
                            type: "text",
                            "data-test-id": "wallet_search_coin"
                        },
                        domProps: {
                            value: t.searchInput
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.searchInput = e.target.value)
                            }
                        }
                    }), t._v(" "), t.searchInput ? a("span", {
                        staticClass: "clear",
                        on: {
                            click: function(e) {
                                return t.$emit("input", "")
                            }
                        }
                    }, [t._v("\n    ✕\n  ")]) : t._e()])
                },
                i = []
        },
        1257: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("label", {
                        class: ["ui-toggle-label", t.isActive && "ui-toggle-label_checked"]
                    }, [a("div", {
                        staticClass: "ui-toggle-label__icon m-r-10",
                        class: t.$iconClass(t.item.coin),
                        attrs: {
                            "data-test-id": "filter_" + t.item.name
                        }
                    }), t._v(" "), a("div", [t._v("\n    " + t._s(t.item.name) + "\n  ")]), t._v(" "), a("input", {
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            value: t.isActive
                        },
                        on: {
                            input: t.onChange
                        }
                    })])
                },
                i = []
        },
        1262: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "loading-ellipsis"
                    }, this._l(4, (function(t) {
                        return e("div", {
                            key: t
                        })
                    })), 0)
                },
                i = []
        },
        1265: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        ref: t.chartWrapId,
                        class: "chart-wrap " + t.chartWrapId,
                        attrs: {
                            "data-test-id": "coin_chart"
                        }
                    }, [a("CoinIcon", {
                        staticClass: "coin-hidden",
                        attrs: {
                            wallet: t.coin
                        }
                    }), t._v(" "), t.zoomSettings.length > 0 && t.activeZoom ? a("div", {
                        staticClass: "chart-zoom"
                    }, t._l(t.zoomSettings, (function(e, n) {
                        return a("div", {
                            key: n,
                            staticClass: "zoom-button",
                            class: {
                                active: t.activeZoom === e
                            },
                            on: {
                                click: function(a) {
                                    return t.zoomChart(e)
                                }
                            }
                        }, [t._v("\n      " + t._s(e) + "\n    ")])
                    })), 0) : t._e(), t._v(" "), t.isLoading ? a("div", {
                        staticClass: "loading-wrap"
                    }, [a("div", {
                        staticClass: "loading"
                    })]) : a("div", {
                        staticClass: "graph",
                        attrs: {
                            id: "graph" + t.refName
                        }
                    })], 1)
                },
                i = []
        },
        1267: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "table table-new"
                    }, [!t.isEmpty && t.header && t.header.length > 0 ? a("div", {
                        staticClass: "header header-new",
                        class: {
                            border: t.isHeaderBorder
                        }
                    }, [a("div", {
                        staticClass: "table-row flex-wrap center",
                        class: {
                            "space-between": t.spaceBetween
                        },
                        attrs: {
                            "data-test-id": "wallet_"
                        }
                    }, t._l(t.header, (function(e, n) {
                        return a("div", {
                            key: "header-" + n + "-" + Math.random(),
                            staticClass: "item"
                        }, [e.slot ? t._t(e.slot) : a("div", {
                            class: {
                                "sort-active": t.activeSortField === e.key,
                                "sort-enable": t.isSortable && !t.excludedFields.includes(e.key)
                            },
                            on: {
                                click: function(a) {
                                    t.isSortable && t.$emit("sortByField", e.key)
                                }
                            }
                        }, [t.isSortable ? a("svg", {
                            staticClass: "sort-arrow",
                            class: {
                                asc: t.isSortASC
                            },
                            attrs: {
                                viewBox: "0 0 24 24"
                            }
                        }, [a("path", {
                            attrs: {
                                d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
                                fill: "#fff",
                                stroke: "#fff"
                            }
                        })]) : t._e(), t._v(" "), e.title ? a("span", {
                            staticClass: "text-middle",
                            class: {
                                "text-gray": t.activeSortField !== e.key
                            },
                            attrs: {
                                "data-test-id": "wallet_sort_" + e.key
                            }
                        }, [t._v(t._s(e.title))]) : t._e()])], 2)
                    })), 0)]) : t._e(), t._v(" "), a("div", {
                        staticClass: "main"
                    }, [t._t("empty", (function() {
                        return [!t.items.length && t.filter.length ? a("div", {
                            staticClass: "empty"
                        }, [t._v("\n        " + t._s(t.noResultText) + "\n      ")]) : t._e()]
                    })), t._v(" "), t.$scopedSlots["table-rows"] ? t._t("table-rows") : t._e()], 2)])
                },
                i = []
        },
        1268: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "currency-input"
                    }, [e("input", {
                        ref: "input",
                        attrs: {
                            type: "text",
                            readonly: this.readonly
                        },
                        on: {
                            blur: this.onBlur,
                            focus: this.onFocus,
                            input: this.onInput,
                            mouseleave: this.onBlur
                        }
                    })])
                },
                i = []
        },
        1269: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "form-field"
                    }, [a("div", {
                        staticClass: "input-wrap",
                        class: {
                            "input-send-all": t.isExchange && t.showBalance
                        }
                    }, [a("input", {
                        ref: "input",
                        class: {
                            "placeholder-white": t.isZeroPlaceholder
                        },
                        attrs: {
                            placeholder: t.isZeroPlaceholder ? "0.00" : "",
                            readonly: t.readonly,
                            "data-test-id": "amount_id"
                        },
                        domProps: {
                            value: t.value
                        },
                        on: {
                            focus: function(e) {
                                return t.$emit("focus")
                            },
                            input: t.onInput
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "line",
                        class: {
                            "line-error": t.error,
                            "line-true": !t.error && t.value
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "placeholder",
                        class: {
                            "is-up": t.value || t.isZeroPlaceholder
                        }
                    }, [t._v("\n      " + t._s(t.placeholder) + "\n    ")]), t._v(" "), t.isExchange ? t._e() : a("div", {
                        staticClass: "ticker"
                    }, [t._v("\n      " + t._s(t.wallet.ticker) + "\n    ")]), t._v(" "), t.isExchange && t.showBalance ? a("div", {
                        staticClass: "send-all",
                        attrs: {
                            "data-test-id": "send_all_id"
                        },
                        on: {
                            click: t.putAllAvailableBalance
                        }
                    }, [t._v("\n      Send all\n    ")]) : t._e()]), t._v(" "), t.isFiat ? a("div", {
                        staticClass: "input-wrap",
                        class: {
                            hidden: t.isFiat && !t.hasCoinRate
                        }
                    }, [a("CurrencyInput", {
                        attrs: {
                            readonly: t.readonly,
                            initialValue: t.valueFiat,
                            formatter: t.$options.filters.formatFiatV2,
                            "data-test-id": "currency_id"
                        },
                        on: {
                            onInput: t.onInputFiat
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "ticker grey",
                        attrs: {
                            "data-test-id": "rate_id"
                        }
                    }, [t._v("\n      " + t._s(t.fiatRate) + "\n    ")])], 1) : t._e(), t._v(" "), a("transition", {
                        attrs: {
                            name: "slide-in"
                        }
                    }, [t.error ? a("div", {
                        staticClass: "flex",
                        class: {
                            "buy-coin": t.isBuyCoin
                        }
                    }, [a("div", {
                        staticClass: "error",
                        class: {
                            "error-amount": t.isFiat && t.hasCoinRate,
                            "error-amount-fix": t.isFiat && !t.hasCoinRate && !t.isBuyCoin
                        },
                        domProps: {
                            innerHTML: t._s(t.error)
                        }
                    }), t._v(" "), t.isBuyCoin ? a("button", {
                        staticClass: "button button-buy",
                        on: {
                            click: t.buyCoin
                        }
                    }, [t._v("\n        Buy " + t._s(t.wallet.ticker || "") + "\n      ")]) : t._e()]) : t._e()]), t._v(" "), t._l(t.notesList, (function(e, n) {
                        return a("div", {
                            key: n,
                            staticClass: "note",
                            on: {
                                click: t.putAllAvailableBalance
                            }
                        }, [t._v("\n    " + t._s(e.name) + "\n    "), t.isLoadingBalance ? a("LoadingEllipsis") : t.isExchange ? a("span", [a("b", [t._v("\n      " + t._s(t._f("formatFinance")(t.numberToFixed(e.value))) + "\n    ")]), t._v(" " + t._s(t.wallet.ticker.toUpperCase()))]) : a("b", [t._v("\n      " + t._s(t._f("formatFinance")(e.value)) + "\n    ")])], 1)
                    }))], 2)
                },
                i = []
        },
        1270: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "dropdown"
                    }, [a("div", {
                        staticClass: "search"
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.filter,
                            expression: "filter"
                        }],
                        ref: "coinDropdown",
                        staticClass: "placeholder-white",
                        attrs: {
                            "data-test-id": "send_searchcoin",
                            placeholder: "Search...",
                            type: "text"
                        },
                        domProps: {
                            value: t.filter
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.filter = e.target.value)
                            }
                        }
                    })]), t._v(" "), a("div", {
                        staticClass: "scroll-area",
                        attrs: {
                            "data-test-id": "send_scrollcoin"
                        }
                    }, [a("ul", {
                        staticClass: "search-select"
                    }, [0 === t.filteredCoins.length ? a("li", {
                        staticClass: "nocoins"
                    }, [a("span", [t._v("\n          No results\n        ")])]) : t._e(), t._v(" "), t._l(t.filteredCoins, (function(e, n) {
                        return a("li", {
                            key: e.id + n,
                            attrs: {
                                "data-test-id": "send_" + e.ticker.toLowerCase()
                            },
                            on: {
                                click: function(a) {
                                    return t.selectCoin(e)
                                }
                            }
                        }, [a("div", {
                            class: t.$iconClass(e)
                        }), t._v(" "), a("div", {
                            staticClass: "flex align-center"
                        }, [a("span", [t._v("\n            " + t._s(e.ticker) + "\n          ")]), t._v(" "), a("TokenTag", {
                            attrs: {
                                wallet: e,
                                elemSize: "small"
                            }
                        }), t._v(" "), t._l(t.getTags(e.ticker), (function(e) {
                            var n = e.tag,
                                i = e.bgColor;
                            return a("div", {
                                key: n,
                                staticClass: "tag small"
                            }, [a("div", {
                                class: "--" + n.toLowerCase(),
                                style: {
                                    backgroundColor: i
                                }
                            }, [t._v("\n              " + t._s(n) + "\n            ")])])
                        }))], 2), t._v(" "), t.showBalance ? a("span", {
                            staticClass: "balance"
                        }, [t._v(t._s(t._f("formatFinance")(t._f("formatMiddleAmount")(t.balance(e)))))]) : t._e()])
                    }))], 2)])])
                },
                i = []
        },
        1271: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "range"
                    }, [t.numericInput ? a("p", {
                        staticClass: "feePerByte"
                    }, [a("span", {
                        staticClass: "text-white"
                    }, [t._v("\n      " + t._s(t.numericInput.text) + " \n    ")]), a("span", {
                        staticClass: "text-white"
                    }, [a("input", {
                        ref: "numericInput",
                        staticClass: "fee-input",
                        class: {
                            error: t.isError
                        },
                        attrs: {
                            max: t.maximum,
                            min: t.minimum,
                            placeholder: parseInt(t.minimum)
                        },
                        domProps: {
                            value: t.value
                        },
                        on: {
                            input: function(e) {
                                return t.changeValue(e.target.value)
                            }
                        }
                    })]), t._v(" \n    " + t._s(t.numericInput.units) + "\n  ")]) : t._e(), t._v(" "), a("input", {
                        style: t.style,
                        attrs: {
                            max: t.maximum,
                            min: t.minimum,
                            type: "range"
                        },
                        domProps: {
                            value: t.value || t.minimum
                        },
                        on: {
                            input: function(e) {
                                return t.changeValue(e.target.value)
                            }
                        }
                    })])
                },
                i = []
        },
        1272: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "fee-constructor fee-constructor-old"
                    }, [t.isSetFee ? a("button", {
                        staticClass: "button small-gray",
                        on: {
                            click: t.setDefault
                        }
                    }, [t._v("\n    Set default\n  ")]) : t._e(), t._v(" "), a("p", {
                        staticClass: "fee-constructor__estimated-time"
                    }, [t.estimatedTime ? a("span", {
                        staticClass: "text-gray"
                    }, [t._v("\n      Estimated time: " + t._s(t.estimatedTime) + "\n    ")]) : t._e()]), t._v(" "), t.isSetFee && !t.coinsWithGas.has(t.wallet.deprecatedParent) ? a("NumericRange", {
                        attrs: {
                            defaultValue: t.defaultSatoshiPerByte,
                            hideButtons: !1,
                            maximum: t.maxSatoshiPerByte,
                            minimum: t.minSatoshiPerByte,
                            numericInput: {
                                text: "Fees per byte",
                                units: "sat/B"
                            },
                            satPerByte: !0
                        },
                        on: {
                            change: function(e) {
                                return t.setFieldProperValue("satoshiPerByte", e)
                            }
                        }
                    }) : t.isSetFee ? a("div", {
                        staticClass: "gas-range"
                    }, [t.defaultGasPrice && t.isCustomGasPrice ? a("p", [a("NumericRange", {
                        attrs: {
                            defaultValue: t.defaultGasPrice,
                            hideButtons: !0,
                            maximum: t.maxGasPrice,
                            minimum: t.minGasPrice,
                            numericInput: {
                                text: "Gas price:",
                                units: t.getGasPriceUnits()
                            }
                        },
                        on: {
                            change: function(e) {
                                return t.setFieldProperValue("gasPrice", e)
                            }
                        }
                    })], 1) : t._e(), t._v(" "), a("p", [a("NumericRange", {
                        attrs: {
                            defaultValue: t.defaultGasLimit,
                            hideButtons: !0,
                            maximum: +t.defaultGasLimit > +t.maxGasLimit ? t.defaultGasLimit : t.maxGasLimit,
                            minimum: t.minGasLimit,
                            numericInput: {
                                text: "Gas limit:",
                                units: ""
                            }
                        },
                        on: {
                            change: function(e) {
                                return t.setFieldProperValue("gasLimit", e)
                            }
                        }
                    })], 1)]) : t._e(), t._v(" "), t.isSetFee && ["ETH", "BSC", "AVAX", "MATIC"].includes(t.wallet.deprecatedParent) && "" !== t.nonce ? a("p", {
                        staticClass: "text-gray nonce m-t-10"
                    }, [t._v("\n    Nonce:"), a("span", {
                        staticClass: "text-white"
                    }, [t._v("\n      " + t._s(t.nonce) + "\n    ")])]) : t._e()], 1)
                },
                i = []
        },
        1273: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "available-fee-amounts"
                    }, [t.isDisableAvailable ? t._e() : a("div", {
                        staticClass: "available",
                        class: {
                            "no-hover": "Withdrawal" === t.sendType
                        },
                        attrs: {
                            "data-test-id": "available_fiat"
                        }
                    }, [a("div", {
                        staticStyle: {
                            width: "max-content"
                        },
                        on: {
                            click: function(e) {
                                t.isCanSetAllAvailableBalance && t.$emit("setAllAvailableBalance")
                            }
                        }
                    }, [a("p", {
                        staticClass: "text-gray"
                    }, [t._v("\n        " + t._s("Unstake" === t.sendType ? "Staked amount" : "Available") + ":\n      ")]), t._v(" "), t.availableBalance ? a("p", {
                        staticClass: "text-white",
                        attrs: {
                            "data-test-id": "ticker_available"
                        }
                    }, [t._v("\n        " + t._s(t._f("formatFinance")(t.availableBalance)) + " " + t._s(t.wallet.ticker) + "\n      ")]) : a("LoadingEllipsis"), t._v(" "), t.availableBalance && t.hasCoinRate ? a("p", {
                        staticClass: "text-gray",
                        attrs: {
                            "data-test-id": "amount_available"
                        }
                    }, [t._v("\n        " + t._s(t._f("formatFinance")(t.getValueFiat(t.availableBalance, t.wallet))) + " " + t._s(t.fiatRate) + "\n      ")]) : t._e()], 1), t._v(" "), t.isCanSetAllAvailableBalance ? a("button", {
                        staticClass: "button small-gray",
                        on: {
                            click: function(e) {
                                return t.$emit("setAllAvailableBalance")
                            }
                        }
                    }, [t._v("\n      " + t._s(t.sendType) + " all\n    ")]) : t._e()]), t._v(" "), a("div", {
                        staticClass: "network-fee"
                    }, [a("p", {
                        staticClass: "text-gray"
                    }, [t._v("\n      Network fee:\n    ")]), t._v(" "), t.feeBalance && t.feeWallet ? a("p", {
                        class: ["text-white", {
                            "is-custom-fee": t.isCustomFeeSupported
                        }],
                        attrs: {
                            "data-test-id": "ticker_fee"
                        },
                        on: {
                            click: function(e) {
                                t.isCustomFeeSupported && t.$emit("toggleCustomFee")
                            }
                        }
                    }, [t._v("\n      " + t._s(t._f("formatFinance")(t.feeBalance)) + " " + t._s(t.feeWallet && t.feeWallet.ticker) + "\n    ")]) : a("LoadingEllipsis"), t._v(" "), t.feeBalance && t.feeWallet && t.hasCoinRate ? a("p", {
                        staticClass: "text-gray",
                        attrs: {
                            "data-test-id": "amount_fee"
                        }
                    }, [t._v("\n      " + t._s(t._f("formatFinance")(t.getValueFiat(t.feeBalance, t.feeWallet, !0))) + " " + t._s(t.fiatRate) + "\n    ")]) : t._e(), t._v(" "), t.isCustomFeeSupported && !t.isRate ? a("button", {
                        staticClass: "button small-gray is-custom-fee",
                        on: {
                            click: function(e) {
                                t.isCustomFeeSupported && t.$emit("toggleCustomFee")
                            }
                        }
                    }, [t._v("\n      Set fee\n    ")]) : t._e(), t._v(" "), t.isCustomFeeSupported && t.isRate && !["BTC", "ZIL"].includes(t.feeWallet.ticker) ? a("button", {
                        staticClass: "button small-gray is-custom-fee",
                        attrs: {
                            "data-test-id": "default_fee_button"
                        },
                        on: {
                            click: function(e) {
                                t.isCustomFeeSupported && t.$emit("setDefaultFee")
                            }
                        }
                    }, [t._v("\n      Set default\n    ")]) : t._e()], 1), t._v(" "), t._t("default")], 2)
                },
                i = []
        },
        1276: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "chart-price"
                    }, [a("div", {
                        staticClass: "about-coin"
                    }, [a("div", {
                        staticClass: "price"
                    }, [a("span", {
                        staticClass: "price",
                        domProps: {
                            innerHTML: t._s("" + t.fiatCharacter)
                        }
                    }), a("span", {
                        staticClass: "price",
                        domProps: {
                            innerHTML: t._s("" + t.$options.filters.formatFinance(t.$options.filters.formatFiatFixed(t.coinRates.rate)))
                        }
                    })]), t._v(" "), a("div", {
                        staticClass: "change",
                        class: [{
                            "text-green": t.coinRates.change > 0
                        }, {
                            "text-danger": t.coinRates.change < 0
                        }]
                    }, [a("span", {
                        staticClass: "text-gray"
                    }, [t._v("\n        24 H \n      ")]), t._v(t._s(t.coinRates.change > 0 ? "+" : "") + t._s(t.coinRates.change) + "%\n    ")])]), t._v(" "), a("Chart", {
                        attrs: {
                            coin: t.coin,
                            data: t.chartData.points,
                            dates: t.chartData.dates,
                            activeZoom: t.activeZoom,
                            isArea: !0,
                            isAxis: !0,
                            isLoading: !!t.isChartDataLoading[t.activeZoom],
                            "is-max-height": !0,
                            isMaxWidth: !0,
                            isMinMaxPoints: !0,
                            isPriceChart: !0,
                            isTooltip: !0,
                            isYAxis: !0,
                            isZoom: !0,
                            zoomSettings: Object.keys(t.chartDataEndpoints)
                        },
                        on: {
                            changeActiveData: t.handleChangeZoom
                        }
                    })], 1)
                },
                i = []
        },
        1279: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "article",
                        on: {
                            click: this.clickHandler
                        }
                    }, [e("ArticleCard", {
                        staticClass: "article__card",
                        attrs: {
                            article: this.article
                        }
                    }), this._v(" "), e("AtomicNotifyPoint", {
                        attrs: {
                            UID: this.articleUID,
                            type: "secondary"
                        }
                    }, [e("div", {
                        staticClass: "article__text"
                    }, [this._v("\n    " + this._s(this.article.title) + "\n    ")])])], 1)
                },
                i = []
        },
        1286: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("span", {
                        staticClass: "toggler",
                        on: {
                            click: function(e) {
                                return t.$emit("click")
                            }
                        }
                    }, [a("div", {
                        staticClass: "switch",
                        class: {
                            active: !t.trigger
                        }
                    })])
                },
                i = []
        },
        1287: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("li", {
                        staticClass: "filter-ticker",
                        class: {
                            grey: this.isHidden
                        }
                    }, [e("div", {
                        class: this.$iconClass(this.coin)
                    }), this._v(" "), e("span", [this._v("\n    " + this._s(this.coin.getUserTicker()) + "\n  ")])])
                },
                i = []
        },
        1291: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "filter-button",
                        class: {
                            active: t.active,
                            highlight: t.highlight
                        },
                        attrs: {
                            "data-test-id": "wallet_filter_button"
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("click")
                            }
                        }
                    }, [a("i"), a("i"), a("i")])
                },
                i = []
        },
        1296: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "refresh-btn",
                        class: {
                            updating: this.isLoading
                        },
                        attrs: {
                            "data-test-id": "wallet_refresh_button"
                        }
                    }, [e("div", {
                        staticClass: "refresh-loader icon-refresh",
                        on: {
                            click: this.toggleLoader
                        }
                    })])
                },
                i = []
        },
        1301: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "buy-bitcoin"
                    }, [e("span", {
                        staticClass: "text-bigger text-gray"
                    }, [this._v("\n    Your " + this._s(this.name) + " will appear here\n  ")]), e("img", {
                        staticClass: "buy-bitcoin__image",
                        attrs: {
                            src: a(5134)
                        }
                    }), this._v(" "), e("router-link", {
                        staticClass: "button",
                        attrs: {
                            tag: "button",
                            to: "/simplex"
                        }
                    }, [this._v("\n    BUY BITCOIN\n  ")])], 1)
                },
                i = []
        },
        1302: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "export-button",
                        on: {
                            click: function(e) {
                                return t.$emit("click")
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: a(2283)
                        }
                    })])
                },
                i = []
        },
        1307: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "dropdown"
                    }, [a("div", {
                        staticClass: "search"
                    }, [a("input", {
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
                            input: function(e) {
                                e.target.composing || (t.filter = e.target.value)
                            }
                        }
                    })]), t._v(" "), a("div", {
                        staticClass: "scroll-area"
                    }, [a("ul", {
                        staticClass: "search-select"
                    }, [0 === t.filterElements.length ? a("li", {
                        staticClass: "nocoins"
                    }, [a("span", [t._v("No results")])]) : t._e(), t._v(" "), t._l(t.filterElements, (function(e, n) {
                        return a("li", {
                            key: n,
                            on: {
                                click: function(a) {
                                    return t.select(e)
                                }
                            }
                        }, [a("span", [t._v(t._s(e.primary))]), t._v(" "), t.showAdditional && e.additional ? a("span", {
                            staticClass: "balance"
                        }, [a("span", {
                            domProps: {
                                innerHTML: t._s(e.additional)
                            }
                        })]) : t._e()])
                    }))], 2)])])
                },
                i = []
        },
        1317: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("transition", {
                        staticClass: "lazy-load-container",
                        attrs: {
                            name: "lazy-fade"
                        }
                    }, [this.loaded ? e("img", {
                        key: "loadedimage",
                        attrs: {
                            src: this.loaded
                        }
                    }) : e("img", {
                        key: "defaultimage",
                        attrs: {
                            src: this.defaultImage
                        }
                    })])
                },
                i = []
        },
        1327: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("transition", {
                        attrs: {
                            name: "fade-down"
                        }
                    }, [a("div", {
                        staticClass: "simple-popup__wrap",
                        on: {
                            click: function(e) {
                                return e.target !== e.currentTarget ? null : t.$emit("onClose")
                            }
                        }
                    }, [a("div", {
                        staticClass: "simple-popup"
                    }, [a("div", {
                        staticClass: "simple-popup__close",
                        on: {
                            click: function(e) {
                                return t.$emit("onClose")
                            }
                        }
                    }, [t._v("\n        ✕\n      ")]), t._v(" "), a("div", {
                        staticClass: "simple-popup__title"
                    }, [t._v("\n        " + t._s(t.title) + "\n      ")]), t._v(" "), a("div", {
                        staticClass: "simple-popup__body"
                    }, t._l(t.items, (function(e) {
                        return a("div", {
                            key: e.title,
                            staticClass: "simple-popup__item"
                        }, [a("span", [t._v("\n            " + t._s(e.title) + "\n          ")]), a("span", [t._v(t._s(e.text))])])
                    })), 0)])])])
                },
                i = []
        },
        1328: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isDisable,
                            expression: "!isDisable"
                        }],
                        staticClass: "section__item"
                    }, [a("div", {
                        staticClass: "section__item__main"
                    }, [a("div", {
                        staticClass: "text"
                    }, [t._v("\n      " + t._s(t.title) + "\n    ")]), t._v(" "), Array.isArray(t.value) ? a("div", {
                        staticStyle: {
                            display: "flex",
                            "flex-direction": "column"
                        }
                    }, t._l(t.value, (function(e) {
                        return a("span", {
                            key: e.ticker
                        }, [a("div", {
                            staticClass: "text"
                        }, [t._v("\n          " + t._s(t.formatAmount(e.value)) + "\n        ")]), t._v(" "), a("div", {
                            staticClass: "text text_gray"
                        }, [t._v("\n          " + t._s(e.ticker) + "\n        ")])])
                    })), 0) : a("span", [a("div", {
                        staticClass: "text"
                    }, [t._v("\n        " + t._s(t.formatAmount(t.value)) + "\n      ")]), t._v(" "), a("div", {
                        staticClass: "text text_gray"
                    }, [t._v("\n        " + t._s(t.ticker) + "\n      ")])])]), t._v(" "), t.badge.title && t.badge.show ? a("div", {
                        staticClass: "section__item__control"
                    }, [a("div", {
                        staticClass: "badge badge_cta",
                        class: {
                            badge_disabled: t.badge.disabled
                        },
                        attrs: {
                            "data-test-id": "action_" + t.badge.title.toLowerCase()
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("badgeClick")
                            }
                        }
                    }, [t._v("\n      " + t._s(t.badge.title) + "\n    ")])]) : t._e()])
                },
                i = []
        },
        1348: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("div", {
                        ref: "donutChart",
                        staticClass: "donut-chart"
                    })
                },
                i = []
        },
        1352: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "clipboard-wrap"
                    }, [t._t("default"), t._v(" "), t.isButton ? a("div", {
                        staticClass: "round__button",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.copyToClipboard.apply(null, arguments)
                            }
                        }
                    }, [a("IconClipboard", {
                        attrs: {
                            isBig: t.isBigIcon
                        }
                    })], 1) : t._e(), t._v(" "), a("transition", {
                        attrs: {
                            name: "fade-down"
                        }
                    }, [t.showCopy ? a("div", {
                        staticClass: "message"
                    }, [t._v("\n      " + t._s(t.clipboardMessage) + "\n    ")]) : t._e()])], 2)
                },
                i = []
        },
        1364: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "error-plain",
                        attrs: {
                            "data-test-id": "error_id"
                        }
                    }, t._l(t.messages, (function(e) {
                        return a("p", {
                            key: e
                        }, [t._v("\n    " + t._s(e) + "\n  ")])
                    })), 0)
                },
                i = []
        },
        1365: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "change-icon",
                        attrs: {
                            "data-test-id": "change_coins"
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("clickAction")
                            }
                        }
                    }, [a("svg", {
                        attrs: {
                            fill: "none",
                            viewBox: "0 0 35 16"
                        }
                    }, [a("path", {
                        attrs: {
                            d: "M1.67391 8H31.3261",
                            "stroke-linecap": "round",
                            "stroke-width": "3"
                        }
                    }), t._v(" "), a("path", {
                        attrs: {
                            d: "M25.2607 2L31.9999 8.1471L25.2607 13.765",
                            "stroke-linecap": "round",
                            "stroke-width": "3"
                        }
                    })])])
                },
                i = []
        },
        1366: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "coin-block"
                    }, [a("div", {
                        staticClass: "flex justify-center center"
                    }, [t.coin ? a("div", {
                        key: t.coin.ticker,
                        staticClass: "coin-icon",
                        class: [t.icon, {
                            "no-change": !t.isChangeCoin
                        }],
                        on: {
                            click: t.showCoinDropdown
                        }
                    }) : t._e()]), t._v(" "), a("div", {
                        staticClass: "flex-wrapper"
                    }, [a("EditAmount", {
                        attrs: {
                            coin: t.selectedCoin,
                            decimals: t.coin.decimal,
                            isExchange: !0,
                            isZeroPlaceholder: !0,
                            notes: t.minAmountNotes,
                            readonly: t.readonly,
                            showBalance: t.isAvailableBalance,
                            wallet: t.coin,
                            value: t.amount,
                            "data-test-id": "exch_inputcoin_sent"
                        },
                        on: {
                            input: t.setAmount,
                            setAllAvailableBalance: function(e) {
                                return t.setAmount(t.availableBalance)
                            }
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "coinname",
                        class: {
                            "no-change": !t.isChangeCoin,
                            "coinname-big": "TRX-USDT" === t.coin.ticker
                        },
                        attrs: {
                            "data-test-id": "exch_coin_sent"
                        }
                    }, [a("span", {
                        key: t.coin.ticker,
                        on: {
                            click: t.showCoinDropdown
                        }
                    }, [t._v(t._s(t.coin.ticker))]), t._v(" "), t.isBuyCrypto && t.isCoinDropdown && t.isChangeCoin ? a("CoinDropdown", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.outsideClick,
                            expression: "outsideClick"
                        }],
                        ref: "coindropdown",
                        attrs: {
                            coins: t.availableCoins,
                            enableSort: !0,
                            isShowExchangeTags: "exchange-basic" === t.$route.name,
                            isShowSimplexTags: "simplex-page" === t.$route.name,
                            isSortByMarketCap: t.isSortByMarketCap,
                            showBalance: !0
                        },
                        on: {
                            selectCoin: function(e) {
                                return t.selectCoin(e)
                            }
                        }
                    }) : t._e(), t._v(" "), !t.isBuyCrypto && t.isCoinDropdown && t.isChangeCoin ? a("ExchangeCoinDropdown", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.outsideClick,
                            expression: "outsideClick"
                        }],
                        attrs: {
                            coins: t.availableCoins,
                            filters: t.filters,
                            newTagCoins: t.newTagCoins,
                            activeFilter: t.activeFilter
                        },
                        on: {
                            selectCoin: function(e) {
                                return t.selectCoin(e)
                            },
                            changeActiveFilter: t.changeActiveFilter
                        }
                    }) : t._e()], 1)], 1)])
                },
                i = []
        },
        1367: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "cashback-info",
                        on: {
                            click: this.goToCashbackClub
                        }
                    }, [e("span", {
                        staticClass: "text-gray",
                        attrs: {
                            "data-test-id": "exchange_reward"
                        }
                    }, [this._v("Reward: ")]), e("span", [this._v("\n    " + this._s(this._f("formatFinance")(this.estimatedCashback))), e("span", {
                        staticClass: "text-gray"
                    }, [this._v("\n       AWC\n    ")])])])
                },
                i = []
        },
        1368: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "cashback-promotion",
                        on: {
                            click: this.goToCashbackClub
                        }
                    }, [e("span", {
                        staticClass: "text-gray"
                    }, [this._v("\n    " + this._s(this.clubMessage) + "\n  ")])])
                },
                i = []
        },
        1374: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "dropdown small"
                    }, [a("div", {
                        staticClass: "search"
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.filter,
                            expression: "filter"
                        }],
                        ref: "fiatDropdown",
                        staticClass: "placeholder-white",
                        attrs: {
                            placeholder: "Search...",
                            type: "text",
                            "data-test-id": "fiat_dropdown_filter_input"
                        },
                        domProps: {
                            value: t.filter
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.filter = e.target.value)
                            }
                        }
                    })]), t._v(" "), a("div", {
                        staticClass: "scroll-area"
                    }, [a("ul", {
                        staticClass: "search-select",
                        attrs: {
                            "data-test-id": "fiat_dropdown_list"
                        }
                    }, t._l(t.filteredFiat, (function(e, n) {
                        return a("li", {
                            key: n,
                            staticClass: "search-select-element",
                            on: {
                                click: function(a) {
                                    return t.selectFiatCoin(e)
                                }
                            }
                        }, [a("AtomicFlagIcon", {
                            attrs: {
                                flagCode: e.code
                            }
                        }), t._v(" "), a("span", [t._v("\n          " + t._s(e.code) + "\n        ")])], 1)
                    })), 0)])])
                },
                i = []
        },
        1378: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.hideQRCode,
                            expression: "hideQRCode"
                        }],
                        staticClass: "qr-code"
                    }, [a("div", {
                        staticClass: "icon",
                        on: {
                            click: function(e) {
                                return t.showQRCode()
                            }
                        }
                    }, [a("img", {
                        attrs: {
                            src: "static/img/qr.png"
                        }
                    })]), t._v(" "), a("transition", {
                        attrs: {
                            name: "scale"
                        }
                    }, [t.qrCodeImage ? a("div", {
                        staticClass: "popup",
                        on: {
                            click: t.hideQRCode
                        }
                    }, [a("img", {
                        attrs: {
                            src: t.qrCodeImage
                        }
                    })]) : t._e()])], 1)
                },
                i = []
        },
        1379: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "custom-key"
                    }, [t.isQrCode ? a("QrCode", {
                        attrs: {
                            value: t.value
                        }
                    }) : t._e(), t._v(" "), a("div", {
                        staticClass: "item"
                    }, [a("span", [t._v("\n      " + t._s(t.title) + "\n    ")]), a("span", {
                        staticClass: "value",
                        attrs: {
                            "data-test-id": "private_coin_key"
                        },
                        on: {
                            click: t.copyValue
                        }
                    }, [t._v(t._s(t.trimValue(t.value)) + "\n      "), a("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.copied ? a("div", {
                        staticClass: "message"
                    }, [t._v(t._s(t.textClipboard ? t.textClipboard : t.title) + " copied to clipboard")]) : t._e()])], 1)])], 1)
                },
                i = []
        },
        168: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(842),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1307),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        2096: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(727),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1199),
                o = a(3);
            var l = function(t) {
                    a(4513)
                },
                d = Object(o.a)(i.a, s.a, s.b, !1, l, "data-v-41b0ca1b", null);
            e.default = d.exports
        },
        2137: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(754),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1227),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        225: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(862),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1327),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        226: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(863),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1328),
                o = a(3);
            var l = function(t) {
                    a(5161)
                },
                d = Object(o.a)(i.a, s.a, s.b, !1, l, "data-v-0eda7b33", null);
            e.default = d.exports
        },
        2263: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(792),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1265),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        2275: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(807),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1271),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        2281: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(825),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1291),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        2282: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(834),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1301),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        2286: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(898),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1365),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        2287: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(899),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1366),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        2288: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(900),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1367),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        2289: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(901),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1368),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        362: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(801),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1267),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        4501: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(719),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1194),
                o = a(3);
            var l = function(t) {
                    a(4502)
                },
                d = Object(o.a)(i.a, s.a, s.b, !1, l, "data-v-57baff82", null);
            e.default = d.exports
        },
        4502: function(t, e, a) {
            var n = a(4503);
            n.__esModule && (n = n.default), "string" == typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            (0, a(50).default)("32b453f4", n, !0, {})
        },
        4503: function(t, e, a) {
            (t.exports = a(49)(!1)).push([t.i, '\n.loading[data-v-57baff82]{position:relative;display:inline-block;height:44px;width:44px;border:3px solid #1f8efa;border-bottom:3px solid transparent;border-radius:50%;animation:spinner 1.2s linear infinite\n}\n.loader[data-v-57baff82]{transition:all 0.5s;opacity:0.7;position:absolute;width:150px;height:150px;top:40%;left:40%;border:5px solid #1f8efa;border-top:5px solid transparent;border-bottom:5px solid transparent;border-radius:50%;animation:spinner 1s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55)\n}\n.loading-ellipsis[data-v-57baff82]{display:inline-block;position:relative;width:44px;height:10px\n}\n.loading-ellipsis div[data-v-57baff82]{position:absolute;top:2px;width:8px;height:8px;border-radius:50%;background:#fff;animation-timing-function:cubic-bezier(0, 1, 1, 0)\n}\n.loading-ellipsis div[data-v-57baff82]:nth-child(1){left:6px;animation:loading-ellipsis1-data-v-57baff82 0.6s infinite\n}\n.loading-ellipsis div[data-v-57baff82]:nth-child(2){left:6px;animation:loading-ellipsis2-data-v-57baff82 0.6s infinite\n}\n.loading-ellipsis div[data-v-57baff82]:nth-child(3){left:26px;animation:loading-ellipsis2-data-v-57baff82 0.6s infinite\n}\n.loading-ellipsis div[data-v-57baff82]:nth-child(4){left:45px;animation:loading-ellipsis3-data-v-57baff82 0.6s infinite\n}\n.loading-proggress[data-v-57baff82]{display:flex;align-items:center;justify-content:center;padding:5px 0;position:relative;width:100%;transition:all .1s;background:none;z-index:1;margin-left:0 !important;background:rgba(0,0,0,0.25);transition:all .15s\n}\n.loading-proggress[data-v-57baff82]:before{content:\'\';z-index:-1;position:absolute;top:50%;left:0;height:85%;width:0%;transform:translateY(-50%);background:linear-gradient(to right, #42c1fd 0%, #1f8efa 95%, #0081ff 100%);opacity:0.5\n}\n.loading-proggress[loading="1"][data-v-57baff82]:before{width:1% !important\n}\n.loading-proggress[loading="2"][data-v-57baff82]:before{width:2% !important\n}\n.loading-proggress[loading="3"][data-v-57baff82]:before{width:3% !important\n}\n.loading-proggress[loading="4"][data-v-57baff82]:before{width:4% !important\n}\n.loading-proggress[loading="5"][data-v-57baff82]:before{width:5% !important\n}\n.loading-proggress[loading="6"][data-v-57baff82]:before{width:6% !important\n}\n.loading-proggress[loading="7"][data-v-57baff82]:before{width:7% !important\n}\n.loading-proggress[loading="8"][data-v-57baff82]:before{width:8% !important\n}\n.loading-proggress[loading="9"][data-v-57baff82]:before{width:9% !important\n}\n.loading-proggress[loading="10"][data-v-57baff82]:before{width:10% !important\n}\n.loading-proggress[loading="11"][data-v-57baff82]:before{width:11% !important\n}\n.loading-proggress[loading="12"][data-v-57baff82]:before{width:12% !important\n}\n.loading-proggress[loading="13"][data-v-57baff82]:before{width:13% !important\n}\n.loading-proggress[loading="14"][data-v-57baff82]:before{width:14% !important\n}\n.loading-proggress[loading="15"][data-v-57baff82]:before{width:15% !important\n}\n.loading-proggress[loading="16"][data-v-57baff82]:before{width:16% !important\n}\n.loading-proggress[loading="17"][data-v-57baff82]:before{width:17% !important\n}\n.loading-proggress[loading="18"][data-v-57baff82]:before{width:18% !important\n}\n.loading-proggress[loading="19"][data-v-57baff82]:before{width:19% !important\n}\n.loading-proggress[loading="20"][data-v-57baff82]:before{width:20% !important\n}\n.loading-proggress[loading="21"][data-v-57baff82]:before{width:21% !important\n}\n.loading-proggress[loading="22"][data-v-57baff82]:before{width:22% !important\n}\n.loading-proggress[loading="23"][data-v-57baff82]:before{width:23% !important\n}\n.loading-proggress[loading="24"][data-v-57baff82]:before{width:24% !important\n}\n.loading-proggress[loading="25"][data-v-57baff82]:before{width:25% !important\n}\n.loading-proggress[loading="26"][data-v-57baff82]:before{width:26% !important\n}\n.loading-proggress[loading="27"][data-v-57baff82]:before{width:27% !important\n}\n.loading-proggress[loading="28"][data-v-57baff82]:before{width:28% !important\n}\n.loading-proggress[loading="29"][data-v-57baff82]:before{width:29% !important\n}\n.loading-proggress[loading="30"][data-v-57baff82]:before{width:30% !important\n}\n.loading-proggress[loading="31"][data-v-57baff82]:before{width:31% !important\n}\n.loading-proggress[loading="32"][data-v-57baff82]:before{width:32% !important\n}\n.loading-proggress[loading="33"][data-v-57baff82]:before{width:33% !important\n}\n.loading-proggress[loading="34"][data-v-57baff82]:before{width:34% !important\n}\n.loading-proggress[loading="35"][data-v-57baff82]:before{width:35% !important\n}\n.loading-proggress[loading="36"][data-v-57baff82]:before{width:36% !important\n}\n.loading-proggress[loading="37"][data-v-57baff82]:before{width:37% !important\n}\n.loading-proggress[loading="38"][data-v-57baff82]:before{width:38% !important\n}\n.loading-proggress[loading="39"][data-v-57baff82]:before{width:39% !important\n}\n.loading-proggress[loading="40"][data-v-57baff82]:before{width:40% !important\n}\n.loading-proggress[loading="41"][data-v-57baff82]:before{width:41% !important\n}\n.loading-proggress[loading="42"][data-v-57baff82]:before{width:42% !important\n}\n.loading-proggress[loading="43"][data-v-57baff82]:before{width:43% !important\n}\n.loading-proggress[loading="44"][data-v-57baff82]:before{width:44% !important\n}\n.loading-proggress[loading="45"][data-v-57baff82]:before{width:45% !important\n}\n.loading-proggress[loading="46"][data-v-57baff82]:before{width:46% !important\n}\n.loading-proggress[loading="47"][data-v-57baff82]:before{width:47% !important\n}\n.loading-proggress[loading="48"][data-v-57baff82]:before{width:48% !important\n}\n.loading-proggress[loading="49"][data-v-57baff82]:before{width:49% !important\n}\n.loading-proggress[loading="50"][data-v-57baff82]:before{width:50% !important\n}\n.loading-proggress[loading="51"][data-v-57baff82]:before{width:51% !important\n}\n.loading-proggress[loading="52"][data-v-57baff82]:before{width:52% !important\n}\n.loading-proggress[loading="53"][data-v-57baff82]:before{width:53% !important\n}\n.loading-proggress[loading="54"][data-v-57baff82]:before{width:54% !important\n}\n.loading-proggress[loading="55"][data-v-57baff82]:before{width:55% !important\n}\n.loading-proggress[loading="56"][data-v-57baff82]:before{width:56% !important\n}\n.loading-proggress[loading="57"][data-v-57baff82]:before{width:57% !important\n}\n.loading-proggress[loading="58"][data-v-57baff82]:before{width:58% !important\n}\n.loading-proggress[loading="59"][data-v-57baff82]:before{width:59% !important\n}\n.loading-proggress[loading="60"][data-v-57baff82]:before{width:60% !important\n}\n.loading-proggress[loading="61"][data-v-57baff82]:before{width:61% !important\n}\n.loading-proggress[loading="62"][data-v-57baff82]:before{width:62% !important\n}\n.loading-proggress[loading="63"][data-v-57baff82]:before{width:63% !important\n}\n.loading-proggress[loading="64"][data-v-57baff82]:before{width:64% !important\n}\n.loading-proggress[loading="65"][data-v-57baff82]:before{width:65% !important\n}\n.loading-proggress[loading="66"][data-v-57baff82]:before{width:66% !important\n}\n.loading-proggress[loading="67"][data-v-57baff82]:before{width:67% !important\n}\n.loading-proggress[loading="68"][data-v-57baff82]:before{width:68% !important\n}\n.loading-proggress[loading="69"][data-v-57baff82]:before{width:69% !important\n}\n.loading-proggress[loading="70"][data-v-57baff82]:before{width:70% !important\n}\n.loading-proggress[loading="71"][data-v-57baff82]:before{width:71% !important\n}\n.loading-proggress[loading="72"][data-v-57baff82]:before{width:72% !important\n}\n.loading-proggress[loading="73"][data-v-57baff82]:before{width:73% !important\n}\n.loading-proggress[loading="74"][data-v-57baff82]:before{width:74% !important\n}\n.loading-proggress[loading="75"][data-v-57baff82]:before{width:75% !important\n}\n.loading-proggress[loading="76"][data-v-57baff82]:before{width:76% !important\n}\n.loading-proggress[loading="77"][data-v-57baff82]:before{width:77% !important\n}\n.loading-proggress[loading="78"][data-v-57baff82]:before{width:78% !important\n}\n.loading-proggress[loading="79"][data-v-57baff82]:before{width:79% !important\n}\n.loading-proggress[loading="80"][data-v-57baff82]:before{width:80% !important\n}\n.loading-proggress[loading="81"][data-v-57baff82]:before{width:81% !important\n}\n.loading-proggress[loading="82"][data-v-57baff82]:before{width:82% !important\n}\n.loading-proggress[loading="83"][data-v-57baff82]:before{width:83% !important\n}\n.loading-proggress[loading="84"][data-v-57baff82]:before{width:84% !important\n}\n.loading-proggress[loading="85"][data-v-57baff82]:before{width:85% !important\n}\n.loading-proggress[loading="86"][data-v-57baff82]:before{width:86% !important\n}\n.loading-proggress[loading="87"][data-v-57baff82]:before{width:87% !important\n}\n.loading-proggress[loading="88"][data-v-57baff82]:before{width:88% !important\n}\n.loading-proggress[loading="89"][data-v-57baff82]:before{width:89% !important\n}\n.loading-proggress[loading="90"][data-v-57baff82]:before{width:90% !important\n}\n.loading-proggress[loading="91"][data-v-57baff82]:before{width:91% !important\n}\n.loading-proggress[loading="92"][data-v-57baff82]:before{width:92% !important\n}\n.loading-proggress[loading="93"][data-v-57baff82]:before{width:93% !important\n}\n.loading-proggress[loading="94"][data-v-57baff82]:before{width:94% !important\n}\n.loading-proggress[loading="95"][data-v-57baff82]:before{width:95% !important\n}\n.loading-proggress[loading="96"][data-v-57baff82]:before{width:96% !important\n}\n.loading-proggress[loading="97"][data-v-57baff82]:before{width:97% !important\n}\n.loading-proggress[loading="98"][data-v-57baff82]:before{width:98% !important\n}\n.loading-proggress[loading="99"][data-v-57baff82]:before{width:99% !important\n}\n.loading-proggress[loading="100"][data-v-57baff82]:before{width:100% !important\n}\n@keyframes loading-ellipsis1-data-v-57baff82{\n0%{transform:scale(0)\n}\n100%{transform:scale(1)\n}\n}\n@keyframes loading-ellipsis2-data-v-57baff82{\n0%{transform:translate(0, 0)\n}\n100%{transform:translate(19px, 0)\n}\n}\n@keyframes loading-ellipsis3-data-v-57baff82{\n0%{transform:scale(1)\n}\n100%{transform:scale(0)\n}\n}\n.atomic-progress-bar[data-v-57baff82]{height:40px;left:0;margin-left:1%;margin-top:-20px;position:fixed;text-align:center;top:75%;width:100%;z-index:1000\n}\n', ""])
        },
        4513: function(t, e, a) {
            var n = a(4514);
            n.__esModule && (n = n.default), "string" == typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            (0, a(50).default)("74dcaff5", n, !0, {})
        },
        4514: function(t, e, a) {
            (t.exports = a(49)(!1)).push([t.i, "\nsvg .outline[data-v-41b0ca1b]{fill:#7A859F\n}\nsvg:hover .outline[data-v-41b0ca1b]{fill:#fff\n}\n", ""])
        },
        4555: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(743),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1216),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        4590: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(753),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1231),
                o = a(3);
            var l = function(t) {
                    a(4591)
                },
                d = Object(o.a)(i.a, s.a, s.b, !1, l, "data-v-b7dbd1ba", null);
            e.default = d.exports
        },
        4591: function(t, e, a) {
            var n = a(4592);
            n.__esModule && (n = n.default), "string" == typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            (0, a(50).default)("6774ab1e", n, !0, {})
        },
        4592: function(t, e, a) {
            (t.exports = a(49)(!1)).push([t.i, '\nhtml[data-v-b7dbd1ba]{-webkit-font-smoothing:subpixel-antialiased\n}\nbody[data-v-b7dbd1ba]{height:100vh;background-image:linear-gradient(196deg, #2f3b55, #232c48);background-size:cover;overflow:hidden\n}\n*[data-v-b7dbd1ba]{box-sizing:border-box;margin:0;padding:0;font-family:"Roboto", sans-serif;font-size:14px;color:#fff;font-weight:400\n}\n[data-v-b7dbd1ba]::-webkit-scrollbar{width:10px;box-shadow:none\n}\n[data-v-b7dbd1ba]::-webkit-scrollbar-thumb{background-image:linear-gradient(to bottom, rgba(130,144,173,0.521569), rgba(104,118,147,0.521569));box-shadow:none\n}\n[data-v-b7dbd1ba]::-webkit-scrollbar-thumb:hover{box-shadow:4px 0 13px 0 rgba(53,147,238,0.43)\n}\n[data-v-b7dbd1ba]::-webkit-scrollbar-track{background:rgba(255,255,255,0.1);box-shadow:none\n}\n[data-v-b7dbd1ba]::-webkit-scrollbar-track:hover{background:rgba(255,255,255,0.15)\n}\n[data-v-b7dbd1ba]::-webkit-input-placeholder{color:#8290AD\n}\n.placeholder-white[data-v-b7dbd1ba]::-webkit-input-placeholder{color:white\n}\n#app[data-v-b7dbd1ba]{display:flex;justify-content:flex-start\n}\n#wrapper[data-v-b7dbd1ba]{position:relative;z-index:6;height:100vh;transition:all .15s;width:calc(100% - 200px)\n}\n#wrapper .lazy-load-container[data-v-b7dbd1ba]{position:relative\n}\n#wrapper .preload-hack[data-v-b7dbd1ba]{opacity:0;height:0;width:0;position:absolute;z-index:-1\n}\n@keyframes spinner-data-v-b7dbd1ba{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-b7dbd1ba{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-b7dbd1ba{\n0%{color:#8290AD\n}\n50%{color:#6a8c45\n}\n100%{color:#8290AD\n}\n}\n@keyframes changedown-data-v-b7dbd1ba{\n0%{color:#8290AD\n}\n50%{color:#8a313e\n}\n100%{color:#8290AD\n}\n}\n@keyframes shake-data-v-b7dbd1ba{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-b7dbd1ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-b7dbd1ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-b7dbd1ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-b7dbd1ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-b7dbd1ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-b7dbd1ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-b7dbd1ba]{color:#6b963b\n}\n.text-red[data-v-b7dbd1ba]{color:#c03647\n}\n.text-gray[data-v-b7dbd1ba]{color:#8290AD\n}\n.text-blue[data-v-b7dbd1ba]{color:#00C2FF\n}\n.text-danger[data-v-b7dbd1ba]{color:#8c4545\n}\n.text-title[data-v-b7dbd1ba]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-b7dbd1ba]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-b7dbd1ba]{color:#F1B70B\n}\n.text-white[data-v-b7dbd1ba]{color:white\n}\n.text-bigger[data-v-b7dbd1ba]{font-size:18px;font-weight:500\n}\n.text-big[data-v-b7dbd1ba]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-b7dbd1ba]{font-size:14px\n}\n.text-middle-height[data-v-b7dbd1ba]{line-height:24px\n}\n.text-small[data-v-b7dbd1ba]{font-size:12px\n}\n.text-word-break[data-v-b7dbd1ba]{word-break:break-all\n}\n.text-right[data-v-b7dbd1ba]{text-align:right\n}\n.text-left[data-v-b7dbd1ba]{text-align:left\n}\n.text-line-middle[data-v-b7dbd1ba]{line-height:24px\n}\n.text-link[data-v-b7dbd1ba],.text-link-underline[data-v-b7dbd1ba]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-b7dbd1ba]:hover,.text-link-underline[data-v-b7dbd1ba]:hover{color:#1F8EFA;text-decoration:none\n}\n.text-link-underline[data-v-b7dbd1ba]{text-decoration:underline\n}\n.text-center[data-v-b7dbd1ba]{text-align:center\n}\n.text-pointer[data-v-b7dbd1ba]{cursor:pointer\n}\n.gap-10[data-v-b7dbd1ba]{gap:10px\n}\n.m-t-4[data-v-b7dbd1ba]{margin-top:4px\n}\n.m-t-5[data-v-b7dbd1ba]{margin-top:5px\n}\n.m-t-8[data-v-b7dbd1ba]{margin-top:10px\n}\n.m-t-10[data-v-b7dbd1ba]{margin-top:10px\n}\n.m-t-13[data-v-b7dbd1ba]{margin-top:10px\n}\n.m-t-15[data-v-b7dbd1ba]{margin-top:15px\n}\n.m-t-20[data-v-b7dbd1ba]{margin-top:20px\n}\n.m-t-25[data-v-b7dbd1ba]{margin-top:25px\n}\n.m-t-26[data-v-b7dbd1ba]{margin-top:26px\n}\n.m-t-30[data-v-b7dbd1ba]{margin-top:30px\n}\n.m-t-35[data-v-b7dbd1ba]{margin-top:35px\n}\n.m-t-40[data-v-b7dbd1ba]{margin-top:40px\n}\n.m-t-45[data-v-b7dbd1ba]{margin-top:45px\n}\n.m-l-5[data-v-b7dbd1ba]{margin-left:5px\n}\n.m-l-10[data-v-b7dbd1ba]{margin-left:10px\n}\n.m-l-15[data-v-b7dbd1ba]{margin-left:15px\n}\n.m-l-30[data-v-b7dbd1ba]{margin-left:30px\n}\n.m-l-35[data-v-b7dbd1ba]{margin-left:35px\n}\n.m-r-5[data-v-b7dbd1ba]{margin-right:5px\n}\n.m-r-10[data-v-b7dbd1ba]{margin-right:10px\n}\n.m-r-15[data-v-b7dbd1ba]{margin-right:15px\n}\n.m-r-30[data-v-b7dbd1ba]{margin-right:30px\n}\n.m-l-20[data-v-b7dbd1ba]{margin-left:20px\n}\n.m-b-20[data-v-b7dbd1ba]{margin-bottom:20px !important\n}\n.m-b-30[data-v-b7dbd1ba]{margin-bottom:30px !important\n}\n.m-b-25[data-v-b7dbd1ba]{margin-bottom:25px !important\n}\n.m-b-50[data-v-b7dbd1ba]{margin-bottom:50px !important\n}\n.p-t-40[data-v-b7dbd1ba]{padding-top:40px\n}\n.p-t-85[data-v-b7dbd1ba]{padding-top:85px !important\n}\n.hidden[data-v-b7dbd1ba]{opacity:0 !important\n}\n.relative[data-v-b7dbd1ba]{position:relative\n}\n.space-nowrap[data-v-b7dbd1ba]{white-space:nowrap\n}\n.uppercase[data-v-b7dbd1ba]{text-transform:uppercase\n}\n.fade-enter-active[data-v-b7dbd1ba]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-b7dbd1ba]{transition:all .1s ease-out\n}\n.fade-enter[data-v-b7dbd1ba],.fade-leave-to[data-v-b7dbd1ba]{opacity:0\n}\n.fade-down-enter-active[data-v-b7dbd1ba],.fade-down-leave-active[data-v-b7dbd1ba],.fade-down-move[data-v-b7dbd1ba]{transition:all .15s\n}\n.fade-down-leave-active[data-v-b7dbd1ba],.fade-down-enter-active[data-v-b7dbd1ba]{position:absolute !important\n}\n.fade-down-enter[data-v-b7dbd1ba],.fade-down-leave-to[data-v-b7dbd1ba]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-b7dbd1ba],.scale-leave-active[data-v-b7dbd1ba],.scale-move[data-v-b7dbd1ba]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-b7dbd1ba],.scale-leave-to[data-v-b7dbd1ba]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-b7dbd1ba],.slide-leave-active[data-v-b7dbd1ba]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-b7dbd1ba]{transition:all 0.2s ease\n}\n.slide-leave-active[data-v-b7dbd1ba]{transition:all 0.1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-b7dbd1ba],.slide-leave-to[data-v-b7dbd1ba]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-b7dbd1ba],.slide-leave[data-v-b7dbd1ba]{margin-bottom:0px\n}\n.slide-enter[data-v-b7dbd1ba],.slide-leave-to[data-v-b7dbd1ba]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-b7dbd1ba],.slide-in-leave-active[data-v-b7dbd1ba]{transition:all .3s ease\n}\n.slide-in-enter[data-v-b7dbd1ba]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-b7dbd1ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-b7dbd1ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-b7dbd1ba]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-b7dbd1ba],.page-fade-enter-active[data-v-b7dbd1ba]{transition:opacity 0.05s linear;pointer-events:none\n}\n.page-fade[data-v-b7dbd1ba],.page-fade-leave-to[data-v-b7dbd1ba],.page-fade-enter[data-v-b7dbd1ba]{opacity:0\n}\n.page-fade-enter-to[data-v-b7dbd1ba]{opacity:1\n}\n.fade-out-leave-active[data-v-b7dbd1ba],.fade-out-enter-active[data-v-b7dbd1ba]{transition:opacity 0.25s ease-out\n}\n.fade-out[data-v-b7dbd1ba],.fade-out-leave-to[data-v-b7dbd1ba],.fade-out-enter[data-v-b7dbd1ba]{opacity:0\n}\n.fade-out-enter-to[data-v-b7dbd1ba]{opacity:1\n}\n.slide-down-enter-active[data-v-b7dbd1ba],.slide-down-leave-active[data-v-b7dbd1ba]{transition:all 0.7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-b7dbd1ba],.slide-down-enter[data-v-b7dbd1ba]{top:100%\n}\n.slide-down-leave[data-v-b7dbd1ba],.slide-down-enter-to[data-v-b7dbd1ba]{top:0%\n}\n.slide-out-enter-active[data-v-b7dbd1ba],.slide-out-leave-active[data-v-b7dbd1ba]{transition:all 0.15s ease\n}\n.slide-out-leave-to[data-v-b7dbd1ba]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-b7dbd1ba]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-b7dbd1ba]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-b7dbd1ba],.exchange-result.slide-out-enter[data-v-b7dbd1ba]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-b7dbd1ba],.exchange-pending.slide-out-enter[data-v-b7dbd1ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-b7dbd1ba],.slide-left-leave-active[data-v-b7dbd1ba]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-b7dbd1ba]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-b7dbd1ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-b7dbd1ba]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-b7dbd1ba],.slide-right-leave-active[data-v-b7dbd1ba]{transition:all 0.15s ease\n}\n.slide-right-leave-to[data-v-b7dbd1ba]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-b7dbd1ba]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-b7dbd1ba]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-b7dbd1ba],.spin-down-leave-active[data-v-b7dbd1ba]{transition:all 0.3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-b7dbd1ba]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-b7dbd1ba]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-b7dbd1ba]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-b7dbd1ba],.spin-up-leave-active[data-v-b7dbd1ba]{transition:all 0.3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-b7dbd1ba]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-b7dbd1ba]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-b7dbd1ba]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-b7dbd1ba],.puff-out-leave-active[data-v-b7dbd1ba]{transition:all 0.5s ease\n}\n.puff-out-leave-to[data-v-b7dbd1ba]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-b7dbd1ba]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-b7dbd1ba],.puff-out-enter-to[data-v-b7dbd1ba]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-b7dbd1ba],.collapse-fade-enter-active[data-v-b7dbd1ba]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-b7dbd1ba],.collapse-fade-leave-to[data-v-b7dbd1ba],.collapse-fade-enter[data-v-b7dbd1ba]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-b7dbd1ba]{opacity:1\n}\n.lazy-fade-leave-active[data-v-b7dbd1ba],.lazy-fade-enter-active[data-v-b7dbd1ba]{transition:opacity 0.35s ease-out\n}\n.lazy-fade[data-v-b7dbd1ba],.lazy-fade-leave-to[data-v-b7dbd1ba],.lazy-fade-enter[data-v-b7dbd1ba]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-b7dbd1ba]{opacity:1\n}\n.new-text-white[data-v-b7dbd1ba]{color:#fff\n}\n.new-text-green[data-v-b7dbd1ba]{color:#00E05A\n}\n.new-text-gray[data-v-b7dbd1ba]{color:#7A859F\n}\n.new-text-gray2[data-v-b7dbd1ba]{color:#858FAD\n}\n.new-text-blue[data-v-b7dbd1ba]{color:#00C2FF\n}\n.new-text-red[data-v-b7dbd1ba]{color:#FF2528\n}\n.new-text-red2[data-v-b7dbd1ba]{color:#F75555\n}\n.new-text-error[data-v-b7dbd1ba]{color:#c03647\n}\n.new-text-yellow[data-v-b7dbd1ba]{color:#FAC900\n}\n.new-text-word-break[data-v-b7dbd1ba]{word-break:break-all\n}\n.new-text-extra-extra-large[data-v-b7dbd1ba]{font-weight:300;font-size:48px;line-height:48px;letter-spacing:0.4px\n}\n.new-text-extra-large[data-v-b7dbd1ba]{font-size:24px;line-height:32px\n}\n.new-text-large[data-v-b7dbd1ba]{font-size:18px;line-height:24px;letter-spacing:0.15px\n}\n.new-text-medium2[data-v-b7dbd1ba]{font-size:16px;line-height:24px;letter-spacing:0.15px\n}\n.new-text-medium[data-v-b7dbd1ba]{font-size:14px;line-height:18px;letter-spacing:0.15px\n}\n.new-text-small[data-v-b7dbd1ba]{font-size:12px;line-height:16px;letter-spacing:0.25px\n}\n.new-text-extra-small[data-v-b7dbd1ba]{font-size:10px;line-height:14px;letter-spacing:0.22px\n}\n.new-text-headline[data-v-b7dbd1ba]{font-size:24px;font-style:normal;font-weight:400;line-height:32px;letter-spacing:0px;text-align:left\n}\n.bg-light-blue[data-v-b7dbd1ba]{background-color:#7A859F\n}\n.fill-white[data-v-b7dbd1ba]{fill:white\n}\n.fill-green[data-v-b7dbd1ba]{fill:#00E05A\n}\n.new-title-extra-extra-large[data-v-b7dbd1ba]{font-size:32px;line-height:38px\n}\n.new-title-extra-large[data-v-b7dbd1ba]{font-weight:300;font-size:28px;line-height:28px;letter-spacing:0.25px\n}\n.new-title-large[data-v-b7dbd1ba]{font-weight:bold;font-size:24px;line-height:28px\n}\n.new-title-extra-medium[data-v-b7dbd1ba]{font-weight:500;font-size:22px;line-height:22px\n}\n.new-title-medium[data-v-b7dbd1ba]{font-weight:500;font-size:16px;line-height:22px\n}\n.new-title-medium-bold[data-v-b7dbd1ba]{font-weight:400;font-size:16px;line-height:22px\n}\n.new-title-small[data-v-b7dbd1ba]{font-size:14px;line-height:20px\n}\n.new-title-bold[data-v-b7dbd1ba]{font-weight:400\n}\n.hover-blue[data-v-b7dbd1ba],.hover-opacity[data-v-b7dbd1ba],.hover-decoration[data-v-b7dbd1ba],.hover-blue-decoration[data-v-b7dbd1ba]{cursor:pointer\n}\n.hover-opacity[data-v-b7dbd1ba]:hover{opacity:.7\n}\n.hover-blue[data-v-b7dbd1ba]:hover,.hover-blue-decoration[data-v-b7dbd1ba]:hover{color:#00C2FF\n}\n.hover-decoration[data-v-b7dbd1ba],.hover-blue-decoration[data-v-b7dbd1ba]{text-decoration:underline\n}\n.hover-decoration[data-v-b7dbd1ba]:hover,.hover-blue-decoration[data-v-b7dbd1ba]:hover{text-decoration:none\n}\n.flex[data-v-b7dbd1ba]{display:flex\n}\n.flex-wrap[data-v-b7dbd1ba]{flex-wrap:wrap\n}\n.space-between[data-v-b7dbd1ba]{justify-content:space-between\n}\n.justify-center[data-v-b7dbd1ba]{justify-content:center\n}\n.align-center[data-v-b7dbd1ba],.center[data-v-b7dbd1ba]{align-items:center\n}\n.align-flex-end[data-v-b7dbd1ba]{align-items:flex-end\n}\n.new-button[data-v-b7dbd1ba],.button[data-v-b7dbd1ba]{border:0;cursor:pointer;border-radius:8px;transition:all .3s\n}\n.new-button[data-v-b7dbd1ba]:hover,.button[data-v-b7dbd1ba]:hover{opacity:0.7;box-shadow:none\n}\n.new-button-disable[data-v-b7dbd1ba],.button-disable[data-v-b7dbd1ba]{cursor:default;opacity:.7;pointer-events:none\n}\n.new-button-bold[data-v-b7dbd1ba],.button-bold[data-v-b7dbd1ba]{font-weight:400\n}\n.new-button-large[data-v-b7dbd1ba],.button-large[data-v-b7dbd1ba]{width:100%;padding:18px 0;font-size:18px;line-height:24px;letter-spacing:0.15px;height:60px\n}\n.new-button-medium[data-v-b7dbd1ba],.button-medium[data-v-b7dbd1ba]{padding:10px 20px;font-size:14px;min-width:80px;line-height:20px\n}\n.new-button-small[data-v-b7dbd1ba],.button-small[data-v-b7dbd1ba]{padding:7px 14px;font-size:12px;line-height:16px;letter-spacing:0.25px\n}\n.new-button-extra-small[data-v-b7dbd1ba],.button-extra-small[data-v-b7dbd1ba]{border-radius:6px;font-size:10px;padding:5px 10px;line-height:14px;letter-spacing:0.22px\n}\n.new-button-medium__height[data-v-b7dbd1ba],.button-medium__height[data-v-b7dbd1ba]{width:100%;padding:10px 0;font-size:14px;line-height:20px;letter-spacing:0.15px\n}\n.new-button-max300[data-v-b7dbd1ba],.button-max300[data-v-b7dbd1ba]{max-width:300px;margin-left:auto;margin-right:auto\n}\n.new-button-max30vw[data-v-b7dbd1ba],.button-max30vw[data-v-b7dbd1ba]{max-width:30vw;margin-left:auto;margin-right:auto\n}\n.new-button-yellow[data-v-b7dbd1ba],.button-yellow[data-v-b7dbd1ba]{background:#FAC900;color:#1F2843;border:1px solid #FAC900\n}\n.new-button-blue[data-v-b7dbd1ba],.button-blue[data-v-b7dbd1ba]{background:#00C2FF;color:#fff;border:1px solid #00C2FF\n}\n.new-button-transparent[data-v-b7dbd1ba],.button-transparent[data-v-b7dbd1ba]{background:transparent;color:#FFFFFF;border:1px solid #7A859F\n}\n.new-button-green[data-v-b7dbd1ba],.button-green[data-v-b7dbd1ba]{background:transparent;color:#00E05A;border:1px solid #00E05A\n}\n.new-button-green_fill[data-v-b7dbd1ba],.button-green_fill[data-v-b7dbd1ba]{background:#00E05A;color:#FFFFFF;border:1px solid #00E05A\n}\n.new-button-bg__green[data-v-b7dbd1ba],.button-bg__green[data-v-b7dbd1ba]{background:#00E05A;color:#1F2843;border:1px solid #00E05A\n}\n.position-bottom[data-v-b7dbd1ba]{position:absolute;bottom:30px;width:calc(100% - 60px)\n}\n.border-line[data-v-b7dbd1ba]{background:#404A65;height:1px\n}\n.border-line-big[data-v-b7dbd1ba]{height:2px;background:#404A65\n}\n.border-line-blue[data-v-b7dbd1ba]{background:#00C2FF;height:2px\n}\n.border-line-tab[data-v-b7dbd1ba]{background:#fff;height:2px;border-radius:3px\n}\n.nft__image__wrap[data-v-b7dbd1ba]{position:relative\n}\n.nft__image__control[data-v-b7dbd1ba]{width:100%;display:flex;justify-content:flex-end;gap:8px\n}\n.nft__image__control__wrap[data-v-b7dbd1ba]{position:absolute;bottom:0;top:0;left:0;right:0;z-index:3;padding:10px\n}\n.image_cover__fullscreen[data-v-b7dbd1ba]{cursor:default;object-fit:contain;max-width:100%;max-height:100%;height:auto;width:auto\n}\n.success_save_image_popup_text[data-v-b7dbd1ba]{display:flex;height:100%;align-items:center;font-size:14px;line-height:16px;text-align:center;letter-spacing:0.15px\n}\n.rate-popup__wrap[data-v-b7dbd1ba]{width:310px\n}\n.rate-popup__title-big[data-v-b7dbd1ba]{margin-top:20px;font-weight:bold;font-size:24px;line-height:22px\n}\n', ""])
        },
        4593: function(t, e, a) {
            var n = a(4594);
            n.__esModule && (n = n.default), "string" == typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            (0, a(50).default)("e4108cfa", n, !0, {})
        },
        4594: function(t, e, a) {
            (t.exports = a(49)(!1)).push([t.i, "\n.image-preview[data-v-34634091]{background:#2A3552;position:relative;width:100%;height:100%;padding-top:56.25%;cursor:pointer\n}\n.image-preview>img[data-v-34634091]{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);cursor:inherit\n}\n", ""])
        },
        5098: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(784),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1257),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5109: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(804),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1268),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5110: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(806),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1272),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5113: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(811),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1276),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5115: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(813),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1279),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5122: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(821),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1286),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5123: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(822),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1287),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5128: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(829),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1296),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5135: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(835),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1302),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5151: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(852),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1317),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5161: function(t, e, a) {
            var n = a(5162);
            n.__esModule && (n = n.default), "string" == typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            (0, a(50).default)("14febf72", n, !0, {})
        },
        5162: function(t, e, a) {
            (t.exports = a(49)(!1)).push([t.i, "\n.section__item[data-v-0eda7b33]{width:100%;display:flex;align-items:center;justify-content:start;position:relative\n}\n.section__item__main[data-v-0eda7b33]{display:flex;justify-content:space-between;width:412px\n}\n.section__item__control[data-v-0eda7b33]{position:absolute;right:-115px\n}\n", ""])
        },
        5180: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(881),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1348),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5185: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(886),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1352),
                o = a(3);
            var l = function(t) {
                    a(5186)
                },
                d = Object(o.a)(i.a, s.a, s.b, !1, l, "data-v-7b17ffb6", null);
            e.default = d.exports
        },
        5186: function(t, e, a) {
            var n = a(5187);
            n.__esModule && (n = n.default), "string" == typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            (0, a(50).default)("3ed8be4a", n, !0, {})
        },
        5187: function(t, e, a) {
            (t.exports = a(49)(!1)).push([t.i, "\n.clipboard-wrap[data-v-7b17ffb6]{display:inline-flex;position:relative;align-items:center;cursor:pointer\n}\n.message[data-v-7b17ffb6]{min-width:200px;padding:2px 15px;top:50%;left:50%;transform:translate(-50%, -50%);font-size:11px;line-height:18px;position:absolute;background:#2fa6fa;border-radius:12px;text-align:center\n}\n.round__button[data-v-7b17ffb6]{flex-shrink:0;align-self:center;margin-left:20px;width:30px;height:30px;left:50%;top:-50% !important;border-radius:100%;transition:opacity .3s;display:flex;align-items:center;justify-content:center\n}\n.round__button>svg[data-v-7b17ffb6]{fill:#404A65\n}\n.round__button[data-v-7b17ffb6]:hover{cursor:pointer\n}\n.round__button:hover>svg[data-v-7b17ffb6]{fill:#7A859F\n}\n", ""])
        },
        5247: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(897),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1364),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5257: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(907),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1374),
                o = a(3);
            var l = function(t) {
                    a(5258)
                },
                d = Object(o.a)(i.a, s.a, s.b, !1, l, "data-v-169e4374", null);
            e.default = d.exports
        },
        5258: function(t, e, a) {
            var n = a(5259);
            n.__esModule && (n = n.default), "string" == typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            (0, a(50).default)("44376398", n, !0, {})
        },
        5259: function(t, e, a) {
            (t.exports = a(49)(!1)).push([t.i, "\n.dropdown .search-select li img[data-v-169e4374]{width:24px;height:24px\n}\n", ""])
        },
        5264: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(911),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1379),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        5265: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(912),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1378),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        527: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(729),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1211),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        529: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(782),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1256),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        686: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(780),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1253),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        691: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(805),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1270),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        719: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "ProgressBar",
                computed: {
                    loadingPercentage() {
                        return (this.value / this.max * 100).toFixed()
                    }
                },
                props: {
                    text: {
                        type: String,
                        default: ""
                    },
                    max: {
                        type: Number,
                        default: 1
                    },
                    value: {
                        type: Number,
                        default: 0
                    }
                }
            };
            e.default = n
        },
        724: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "CoinIcon",
                props: {
                    wallet: {
                        type: [Object, String],
                        default: () => ({})
                    }
                }
            };
            e.default = n
        },
        726: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                name: "Edit",
                components: {
                    EditSvg: n(a(2096)).default
                },
                props: {
                    type: {
                        type: String,
                        default: ""
                    },
                    placeholder: {
                        type: String,
                        default: ""
                    },
                    value: {
                        type: String,
                        default: ""
                    },
                    error: {
                        type: String,
                        default: ""
                    },
                    readonly: {
                        type: Boolean,
                        default: !1
                    },
                    startWithVal: {
                        type: String,
                        default: ""
                    },
                    editPlaceholder: {
                        type: String,
                        default: "Type address or domain here"
                    },
                    isPasteFromClipboard: {
                        type: Boolean,
                        default: !1
                    },
                    isPasteByClick: {
                        type: Boolean,
                        default: !1
                    },
                    coin: {
                        type: Object,
                        default: () => ({})
                    },
                    isShowPassword: {
                        type: Boolean,
                        default: !1
                    },
                    focus: {
                        type: Boolean,
                        default: !1
                    },
                    specialCharacters: {
                        type: Boolean,
                        default: !0
                    },
                    specialCharactersPattern: {
                        type: RegExp,
                        default: () => /(?:)/
                    },
                    validationPattern: {
                        type: RegExp,
                        default: () => /(?:)/
                    },
                    ticker: {
                        type: String,
                        default: ""
                    },
                    isFixedNumber: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: () => ({
                    typetimer: null,
                    forsedStartWithval: !1,
                    isTextTypePassword: !1,
                    text: "",
                    isEditPlaceholder: !1
                }),
                computed: {
                    inputType() {
                        let t = this.type;
                        return this.isShowPassword && (t = this.isTextTypePassword ? "text" : "password"), t
                    }
                },
                mounted() {
                    ("" !== this.value || this.startWithVal) && (this.forsedStartWithval = !0), this.focus && this.setFocus()
                },
                methods: {
                    onBlur() {
                        this.isPasteByClick && "" === this.value && (this.isEditPlaceholder = !1)
                    },
                    cleanInput() {
                        this.isEditPlaceholder = !1, this.$emit("input", "")
                    },
                    editInput() {
                        this.$nextTick(() => {
                            this.isEditPlaceholder = !0, this.setFocus()
                        })
                    },
                    toggleTypePassword() {
                        const t = "password" === this.inputType ? "text" : "password";
                        this.isTextTypePassword = !this.isTextTypePassword, this.$emit("changeTypeRepeatPassword", t)
                    },
                    enterPressed() {
                        this.$emit("enter-pressed")
                    },
                    pasteValueFromClipboard() {
                        this.$emit("input", this.$electron.clipboard.readText().trim())
                    },
                    pasteFromClipboardToInput() {
                        if (this.isPasteByClick) {
                            const t = this.$electron.clipboard.readText().trim(),
                                e = new RegExp(this.validationPattern).test(t);
                            "" === this.value && t && e ? this.pasteValueFromClipboard() : "" === this.value && this.$refs.input.blur()
                        }
                    },
                    keypressHandler(t) {
                        if (!this.specialCharacters) {
                            !new RegExp(this.specialCharactersPattern).test(t.key) && t.preventDefault()
                        }
                    },
                    onInput(t) {
                        let {
                            value: e
                        } = t.target;
                        const a = new RegExp(this.validationPattern).test(e);
                        this.isFixedNumber && (e = String(e).replace(/[^0-9]+/g, "")), a ? (this.$refs.input.value = e, this.$emit("input", e)) : this.$refs.input.value = this.value
                    },
                    setFocus() {
                        this.$refs.input.focus()
                    },
                    onKeyUp() {
                        this.$emit("keyup"), clearTimeout(this.typetimer), this.typetimer = setTimeout(() => {
                            this.$emit("typed")
                        }, 500)
                    },
                    putAllAvailableBalance() {
                        this.onKeyUp(), this.$emit("setAllAvailableBalance")
                    }
                }
            };
            e.default = i
        },
        727: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "EditSvg",
                props: {
                    outline: {
                        type: Boolean,
                        default: !1
                    }
                }
            };
            e.default = n
        },
        729: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(246);
            var i = {
                name: "RateStars",
                components: {
                    RateStart: n.RateStart
                },
                props: {
                    userRate: {
                        type: Number,
                        default: 0
                    },
                    isRate: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: () => ({
                    fetchRatingDisabledTimeout: null,
                    isRateStars: !1,
                    hoverStars: []
                }),
                mounted() {
                    this.fetchRatingDisabled()
                },
                destroyed() {
                    clearTimeout(this.fetchRatingDisabledTimeout)
                },
                methods: {
                    fetchRatingDisabled() {
                        this.isRateStars = !localStorage.getItem("appRate::disabled"), clearTimeout(this.fetchRatingDisabledTimeout), this.fetchRatingDisabledTimeout = setTimeout(() => this.fetchRatingDisabled(), 1e3)
                    },
                    hoverStart(t) {
                        if (!this.userRate) {
                            this.disableHoverStart();
                            for (let e = 0; e <= t; e += 1) this.hoverStars.push(e)
                        }
                    },
                    disableHoverStart() {
                        this.userRate || (this.hoverStars = [])
                    },
                    rateApp(t) {
                        t >= 4 ? (localStorage.setItem("appRate::disabled", "1"), this.$bus.$emit("openRateSuccess"), this.$electron.shell.openExternal("https://www.trustpilot.com/evaluate/atomicwallet.io")) : this.$bus.$emit("openRatePopup", t)
                    }
                }
            };
            e.default = i
        },
        743: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(224),
                i = {
                    name: "FiatDropdown",
                    props: {
                        avaliableFiats: {
                            type: Array,
                            default: null
                        }
                    },
                    data: () => ({
                        filter: "",
                        currencies: n.CURRENCIES
                    }),
                    computed: {
                        filteredFiat() {
                            const t = this.filter.toLowerCase();
                            let e = [];
                            if (this.avaliableFiats && this.avaliableFiats.length > 0 ? this.avaliableFiats.forEach(t => {
                                    e.push(this.currencies.find(e => e.code === t))
                                }) : e = this.currencies, "" === t) return e;
                            let a = {},
                                n = [];
                            for (let i in e) {
                                const r = -1 !== e[i].code.toLowerCase().indexOf(t),
                                    s = -1 !== e[i].name.toLowerCase().indexOf(t);
                                (r || s) && (a[i] = e[i]), n.push(a[i])
                            }
                            return n.filter(Boolean)
                        }
                    },
                    mounted() {
                        this.$refs.fiatDropdown.focus()
                    }
                };
            e.default = i
        },
        753: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(1171),
                r = n(a(2137)),
                s = n(a(1173)),
                o = n(a(4595)),
                l = n(a(4596)),
                d = n(a(1174)),
                c = n(a(1172)),
                u = a(1022),
                f = {
                    name: "ImageNFT",
                    components: {
                        AtomicModalFullScreen: l.default,
                        AtomicButton: o.default,
                        ImagePreview: s.default,
                        CachedImage: r.default,
                        Teleport: d.default
                    },
                    props: {
                        nft: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    data: () => ({
                        imagePlaceholder: !1,
                        fullSizeModal: !1,
                        isMouseOnNFT: !1,
                        isShowSaveModal: !1
                    }),
                    computed: {
                        isShowControl() {
                            return this.isMouseOnNFT
                        }
                    },
                    methods: {
                        shortener: i.shortener,
                        fetchImage(t) {
                            this.imagePlaceholder = !t
                        },
                        openNFTFullSize() {
                            this.fullSizeModal = !0
                        },
                        async downloadNFTFullSize() {
                            try {
                                const t = await fetch(this.nft.getImageUrl()),
                                    e = await t.blob(),
                                    a = e.type;
                                let n = await e.arrayBuffer();
                                n = Buffer.from(n), this.isShowSaveModal = await c.default.save(this.getFilename(a), n, "desktop")
                            } catch (t) {
                                console.log(t)
                            }
                        },
                        getFilename(t) {
                            const e = (0, u.extension)(t);
                            let a = "";
                            if (!e) {
                                var n, i, r;
                                const t = /(\.|=)\D{3,5}$/,
                                    e = null === (n = this.nft) || void 0 === n || null === (i = n.getImageUrl()) || void 0 === i ? void 0 : i.match(t);
                                a = e && (null === (r = e[0]) || void 0 === r ? void 0 : r.slice(1)) || ""
                            }
                            const s = e || a,
                                o = s ? "." + s : "";
                            return this.nft.tokenId + o
                        },
                        closeModal() {
                            this.fullSizeModal = !1
                        }
                    }
                };
            e.default = f
        },
        754: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(1172)),
                r = {
                    name: "CachedImage",
                    props: {
                        src: {
                            type: String,
                            required: !0
                        },
                        alt: {
                            type: String,
                            required: !0
                        },
                        type: {
                            type: String,
                            default: "image/jpeg"
                        }
                    },
                    data: () => ({
                        pathToFile: null,
                        isError: !1
                    }),
                    computed: {
                        isCacheUse() {
                            return this.pathToFile !== this.src
                        }
                    },
                    watch: {
                        async src() {
                            await this.handleLoad()
                        }
                    },
                    async created() {
                        await this.handleLoad()
                    },
                    methods: {
                        async handleLoad() {
                            try {
                                let t = await i.default.read(this.src, {
                                    option: "file"
                                });
                                t || (t = await this.saveImageToCache()), this.pathToFile = `data:${this.type};base64,${t}`
                            } catch (t) {
                                console.error(t), this.isError = !0, this.$emit("fetchImage", !this.isError)
                            }
                        },
                        async saveImageToCache() {
                            this.abortController = new AbortController;
                            const t = await fetch(this.src, {
                                signal: this.abortController.signal
                            });
                            if (!t.ok) throw new Error("Can't get buffer image");
                            const e = Buffer.from(await (await t.blob()).arrayBuffer());
                            return await i.default.save(this.src, e), await i.default.read(this.src, {
                                option: "file"
                            })
                        }
                    }
                };
            e.default = r
        },
        755: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "ImagePreview",
                props: {
                    isVideo: {
                        type: Boolean,
                        default: !1
                    },
                    type: {
                        type: String,
                        default: "article"
                    }
                }
            };
            e.default = n
        },
        76: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(726),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1200),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        780: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(38);
            const i = new Set(["BNB", "TRX", "ETH", "BSC", "LUNC", "AVAX", "THETA", "MATIC", "FTM", "OP", "ARB"]),
                r = new Set(["ETHOP", "ETHARB"]);
            var s = {
                name: "TokenTag",
                props: {
                    wallet: {
                        type: Object,
                        default: () => ({})
                    },
                    elemSize: {
                        type: String,
                        default: "normal",
                        validator: t => !!~["normal", "small", "big"].indexOf(t)
                    }
                },
                computed: {
                    tag() {
                        return this.wallet.deprecatedParent.toUpperCase()
                    },
                    isShowTag() {
                        return this.wallet instanceof n.Token && i.has(this.wallet.deprecatedParent) || r.has(this.wallet.ticker)
                    }
                }
            };
            e.default = s
        },
        782: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "Search",
                props: {
                    value: {
                        type: String,
                        default: ""
                    },
                    placeholder: {
                        type: String,
                        default: "Search"
                    }
                },
                data: () => ({
                    timeout: null
                }),
                computed: {
                    searchInput: {
                        get() {
                            return this.value
                        },
                        set(t) {
                            this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
                                this.$emit("input", t)
                            }, 250)
                        }
                    }
                }
            };
            e.default = n
        },
        784: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "ToggleLabel",
                props: {
                    item: {
                        type: Object,
                        default: () => ({})
                    },
                    isActive: {
                        type: Boolean,
                        default: !0
                    }
                },
                methods: {
                    onChange() {
                        this.$emit(this.isActive ? "onDisabled" : "onEnabled")
                    }
                }
            };
            e.default = n
        },
        788: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            e.default = {
                name: "LoadingEllipsis"
            }
        },
        792: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = o(e);
                    if (a && a.has(t)) return a.get(t);
                    var n = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in t)
                        if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
                            var s = i ? Object.getOwnPropertyDescriptor(t, r) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, r, s) : n[r] = t[r]
                        } n.default = t, a && a.set(t, n);
                    return n
                }(a(2308)),
                r = a(31),
                s = n(a(83));

            function o(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (o = function(t) {
                    return t ? a : e
                })(t)
            }
            var l = {
                name: "Chart",
                components: {
                    CoinIcon: s.default
                },
                props: {
                    data: {
                        type: Array,
                        default: () => []
                    },
                    dates: {
                        type: Array,
                        default: () => []
                    },
                    color: {
                        type: String,
                        default: "#ffffff"
                    },
                    lineWidth: {
                        type: String,
                        default: "2"
                    },
                    step: {
                        type: Number,
                        default: 10
                    },
                    width: {
                        type: Number,
                        default: 0
                    },
                    height: {
                        type: Number,
                        default: 40
                    },
                    coin: {
                        type: Object,
                        default: () => ({})
                    },
                    isPriceChart: {
                        type: Boolean,
                        default: !1
                    },
                    isArea: {
                        type: Boolean,
                        default: !1
                    },
                    isMaxWidth: {
                        type: Boolean,
                        default: !1
                    },
                    isMaxHeight: {
                        type: Boolean,
                        default: !1
                    },
                    isTooltip: {
                        type: Boolean,
                        default: !1
                    },
                    isAxis: {
                        type: Boolean,
                        default: !1
                    },
                    isYAxis: {
                        type: Boolean,
                        default: !1
                    },
                    isMinMaxPoints: {
                        type: Boolean,
                        default: !1
                    },
                    isLoading: {
                        type: Boolean,
                        default: !1
                    },
                    activeZoom: {
                        type: String,
                        default: ""
                    },
                    zoomSettings: {
                        type: Array,
                        default: () => []
                    }
                },
                data: () => ({
                    widthChart: 0,
                    heightChart: 0,
                    svg: null,
                    coinColor: {}
                }),
                computed: {
                    ...(0, r.mapGetters)(["coinRate", "fiatRate", "fiatCharacter"]),
                    chartWrapId() {
                        return "chartWrap" + this.refName
                    },
                    refName() {
                        return this.isPriceChart ? `-priceChart-${this.coin.id}-${this.coin.ticker}-${this.coin.deprecatedParent}` : `-${this.coin.id}-${this.coin.ticker}-${this.coin.deprecatedParent}`
                    },
                    currentCoinColor() {
                        var t, e;
                        return (null === (t = this.coinColor) || void 0 === t ? void 0 : t.gradientDown) || (null === (e = this.coinColor) || void 0 === e ? void 0 : e.gradientUp) || "#ffffff"
                    },
                    createXYPos() {
                        const t = i.extent(this.data, t => t.x),
                            e = i.extent(this.data, t => t.y);
                        return {
                            xPos: i.scaleLinear().domain(t).range([0, this.widthChart]),
                            yPos: i.scaleLinear().domain(e).range([this.heightChart, 0])
                        }
                    },
                    writeLine() {
                        return i.line().x(t => this.createXYPos.xPos(t.x)).y(t => this.createXYPos.yPos(t.y)).curve(i.curveCatmullRom)
                    },
                    fixedFiatCharacter() {
                        return "BTC" === this.fiatRate ? "&#36;" : this.fiatCharacter
                    }
                },
                watch: {
                    data() {
                        this.$nextTick(() => {
                            this.setCoinColor(), this.updateChart()
                        })
                    },
                    isLoading(t, e) {
                        t !== e && (t ? this.$nextTick(() => this.removeChart()) : this.$nextTick(() => this.updateChart()))
                    }
                },
                created() {
                    this.isMaxWidth && window.addEventListener("resize", this.updateChart)
                },
                mounted() {
                    this.$nextTick(() => {
                        this.setCoinColor(), this.createChart()
                    })
                },
                destroyed() {
                    this.isMaxWidth && window.removeEventListener("resize", this.updateChart), i.select(this.$refs[this.chartWrapId]).remove()
                },
                methods: {
                    setCoinColor() {
                        var t;
                        const e = (null === (t = this.$refs[this.chartWrapId]) || void 0 === t ? void 0 : t.querySelector(".coin-hidden")) || document.querySelector(`.${this.chartWrapId} .coin-hidden`) || document.querySelector(".coin-info .coin-hidden");
                        if (!e) return;
                        const a = getComputedStyle(e).getPropertyValue("background").split("rgb"),
                            n = "rgb" + a[2].split(")")[0] + ")",
                            i = "rgb" + a[3].split(")")[0] + ")";
                        this.coinColor = {
                            gradientUp: n,
                            gradientDown: i
                        }
                    },
                    removeChart() {
                        this.removeTooltip(), this.removeOverlay(), this.svg && this.svg.remove(), i.select(this.$refs[this.chartWrapId]).select("svg").remove()
                    },
                    updateChart() {
                        this.removeChart(), this.createChart()
                    },
                    setMaxWidthChart() {
                        const t = this.$refs[this.chartWrapId];
                        if (t) {
                            const e = this.$parent.$el.offsetWidth;
                            this.widthChart = e || t.parentNode.parentNode.offsetWidth
                        }
                    },
                    setMaxHeightChart() {
                        const t = this.$refs[this.chartWrapId];
                        if (t) {
                            const e = t.parentNode.parentNode,
                                a = e.offsetHeight,
                                n = t => {
                                    const a = e.querySelector(t);
                                    if (!a) return 0;
                                    const n = window.getComputedStyle(a);
                                    return ["height", "padding-top", "padding-bottom", "margin-top", "margin-bottom"].map(t => parseInt(n.getPropertyValue(t))).reduce((t, e) => t + e)
                                },
                                i = [".coin-wrap", ".about-coin", ".info", ".tabs", ".chart-zoom"].map(t => n(t)).reduce((t, e) => t + e);
                            this.heightChart = a - i - 30
                        }
                    },
                    createChart() {
                        this.isLoading || (this.widthChart = this.width, this.heightChart = this.height, this.isMaxWidth && this.setMaxWidthChart(), this.isMaxHeight && this.setMaxHeightChart(), Number(this.widthChart) < 1 && (this.widthChart = 210), this.data && this.data.length && this.createLineGraph())
                    },
                    getDataGraph() {
                        const t = this.data.length;
                        let e = [];
                        for (let a = 0; a < t; a += 1) {
                            const t = Number(this.data[a]),
                                n = a,
                                i = {
                                    x: isNaN(n) ? 0 : n,
                                    y: isNaN(t) ? 0 : t
                                };
                            e.push(i)
                        }
                        return e
                    },
                    addArea() {
                        const t = i.area().x(t => this.createXYPos.xPos(t.x)).y0(this.heightChart + 30).y1(t => this.createXYPos.yPos(t.y)),
                            e = "area" + this.refName,
                            a = this.svg.append("defs").append("linearGradient").attr("id", e).attr("x1", "0").attr("x2", "0").attr("y1", "0").attr("y2", "1");
                        a.append("stop").attr("offset", "40%").attr("stop-color", this.currentCoinColor).attr("stop-opacity", "0.2"), a.append("stop").attr("offset", "70%").attr("stop-color", this.currentCoinColor).attr("stop-opacity", "0.05"), a.append("stop").attr("offset", "90%").attr("stop-color", this.currentCoinColor).attr("stop-opacity", "0.01"), this.svg.append("path").attr("class", "area").attr("d", t(this.data)).attr("fill", `url(#${e})`)
                    },
                    createChartPoint(t, e, a, n, i, r = !1) {
                        const {
                            arrowYFix: s,
                            arrowXFix: o,
                            textYFix: l,
                            textXFix: d
                        } = n;
                        this.svg.append("svg:foreignObject").attr("width", "80").attr("height", "30").attr("x", "0").attr("fill", "currentColor").attr("transform", `translate(${t-d},${e-l})`).append("xhtml:div").attr("class", "min-max-text" + (i ? " right-position" : "")).html(() => {
                            const t = this.$options.filters.formatFinance(this.$options.filters.formatFiatFixed(a));
                            return `${this.fixedFiatCharacter}${t}`
                        }), this.svg.append("path").attr("d", r ? "M3.5 10L3.5 1M3.5 1L6 6M3.5 1L1 6" : "M3.5 1L3.5 10M3.5 10L1 5M3.5 10L6 5").attr("stroke", "#FAFCFF").attr("stroke-width", "1.5").attr("stroke-linecap", "round").attr("stroke-linejoin", "round").attr("x1", "0").attr("x2", "0").attr("y1", "0").attr("y2", "30").attr("transform", `translate(${t-o},${e-s})`), this.svg.append("circle").attr("class", "min-max-point").attr("fill", this.currentCoinColor).attr("transform", `translate(${t},${e})`)
                    },
                    addMinMaxPoints() {
                        const t = this.data.map(t => t.y),
                            e = t.indexOf(Math.max(...t)),
                            a = this.createXYPos.xPos(this.data[e].x),
                            n = this.createXYPos.yPos(this.data[e].y),
                            i = this.data[e].y;
                        let r = a + 80 > this.widthChart;
                        const s = {
                            arrowYFix: 18,
                            arrowXFix: 3.5,
                            textYFix: 19,
                            textXFix: -5
                        };
                        r && (s.textXFix = 85), this.createChartPoint(a, n, i, s, r);
                        const o = t.indexOf(Math.min(...t)),
                            l = this.createXYPos.xPos(this.data[o].x),
                            d = this.createXYPos.yPos(this.data[o].y),
                            c = this.data[o].y,
                            u = {
                                arrowYFix: -7,
                                arrowXFix: 3.5,
                                textYFix: -6.5,
                                textXFix: -5
                            };
                        r = l + 80 > this.widthChart, r && (u.textXFix = 85), this.createChartPoint(l, d, c, u, r, !0)
                    },
                    addLine() {
                        this.svg.append("path").attr("d", this.writeLine(this.data)).attr("class", "line").attr("stroke-width", 2).attr("stroke", this.currentCoinColor).attr("fill", "none"), this.isMinMaxPoints && this.addMinMaxPoints()
                    },
                    getDateFormat(t) {
                        let e = "24H" === this.activeZoom ? "HH:mm" : "DD MMMM";
                        return "ALL" === this.activeZoom ? e = "DD MMM YYYY" : t && (e = "1Y" === this.activeZoom ? "DD MMM YYYY" : "DD MMM HH:mm"), e
                    },
                    dateFormat(t, e = !1) {
                        const a = this.getDateFormat(e);
                        if (this.dates && this.dates.length > t) {
                            const e = this.dates[t];
                            return this.$moment(e).format(a)
                        }
                        const n = this.data.length - 1 - t,
                            i = new Date;
                        let r;
                        return r = "24H" === this.activeZoom ? i.setHours(i.getHours() - n) : i.setDate(i.getDate() - n), this.$moment(r).format(a)
                    },
                    removeTooltip() {
                        const t = this.$refs[this.chartWrapId];
                        if (t) {
                            const e = i.select(t).select(".tooltip-chart");
                            e && e.remove()
                        }
                    },
                    removeOverlay() {
                        const t = this.$refs[this.chartWrapId];
                        if (t) {
                            const e = i.select(t).select(".overlay");
                            e && e.remove()
                        }
                    },
                    updateOverlay() {
                        if (this.removeOverlay(), !this.svg || !this.svg.node() || !this.svg.node().closest("main")) return;
                        const t = this.svg.node().parentNode;
                        let e = i.select(t).select(".overlay");
                        const a = i.select(t).select(".tooltip-chart"),
                            n = i.select(t).select(".circle"),
                            {
                                xPos: r,
                                yPos: s
                            } = this.createXYPos,
                            {
                                data: o,
                                fixedFiatCharacter: l,
                                heightChart: d,
                                currentCoinColor: c
                            } = this,
                            u = this.$options.filters,
                            f = t => this.dateFormat(t, !0),
                            p = i.bisector(t => t.x),
                            b = this.svg.node().closest("main").getBoundingClientRect(),
                            h = t => {
                                a.style("display", t), n.style("display", t)
                            };
                        e = i.select(t).append("svg").attr("class", "overlay").attr("width", this.widthChart).attr("height", this.heightChart + 30), e.append("rect").attr("width", this.widthChart).attr("height", this.heightChart + 30).on("mouseover", () => h(null)).on("mouseout", () => h("none")).on("mousemove", (function() {
                            if (!n.node()) return;
                            const e = r.invert(i.mouse(this)[0]),
                                h = p.right(o, e),
                                v = f(h),
                                g = u.formatFinance(u.formatFiatFixed(o[h].y));
                            a.select(".date").text(v), a.select(".tooltip-price").html(`${l}${g}`), n.attr("transform", `translate(${r(o[h].x)},${s(o[h].y)})`).attr("fill", c);
                            const m = n.node().getBoundingClientRect(),
                                x = t.querySelector(".tooltip-chart").getBoundingClientRect().width / 2;
                            let y = m.left - b.left - 26 - x,
                                _ = x - 15,
                                w = "+";
                            y < 0 ? (y += _, w = "-") : b.right < m.right + x + 25 ? y -= _ : _ = 1;
                            a.select(".triangle").attr("style", `border-top-color:${c};left: calc(50% ${w} ${_}px);`), a.select(".line").attr("style", `background-color:${c};left: calc(50% ${w} ${_}px);height: ${d+30+33}px;`), a.attr("style", `background:${c};left:${y}px;display:block;`)
                        }))
                    },
                    addTooltip() {
                        this.removeTooltip();
                        const t = i.select("#" + ("graph" + this.refName)).append("div").attr("class", "tooltip-chart").style("display", "none");
                        t.append("p").attr("class", "date"), t.append("p").attr("class", "tooltip-price"), t.append("p").attr("class", "triangle"), t.append("p").attr("class", "line"), this.svg.append("circle").attr("class", "circle").style("display", "none"), this.updateOverlay()
                    },
                    getTickDataValues() {
                        const t = [],
                            e = "1W" === this.activeZoom ? 4 : 5,
                            a = Math.ceil((this.data.length - 1) / e);
                        for (let n = 0; n < e; n += 1) this.data[a * n] && t.push(this.data[a * n].x);
                        return t
                    },
                    addAxis() {
                        const t = this.getTickDataValues(),
                            e = i.axisBottom(this.createXYPos.xPos).tickValues(t).tickFormat(() => "").tickSize(0);
                        if (this.svg.append("g").attr("class", "xaxis").call(e).selectAll("g").append("svg:foreignObject").attr("width", "140").attr("height", "30").attr("x", "-1").attr("y", "0").append("xhtml:div").attr("class", "xaxis-tick").html(t => this.dateFormat(t)), this.isYAxis) {
                            const t = 4,
                                e = 85,
                                a = i.axisRight(this.createXYPos.yPos).ticks(t).tickSize(this.widthChart).tickPadding(15);
                            this.svg.append("g").attr("class", "yaxis").call(a).selectAll("g").append("svg:foreignObject").attr("width", "80").attr("height", "30").attr("x", this.widthChart - e).attr("y", "-10").append("xhtml:div").html(t => {
                                const e = this.$options.filters.formatFinance(t);
                                return `${this.fixedFiatCharacter}${e}`
                            })
                        }
                    },
                    createLineGraph() {
                        const t = this.isAxis ? "main-chart" : "";
                        this.svg = i.select("#" + ("graph" + this.refName)).append("svg").attr("class", t).attr("width", this.widthChart).attr("height", this.heightChart), this.addLine(), this.isAxis && this.addAxis(), this.isArea && this.addArea(), this.isTooltip && this.addTooltip()
                    },
                    zoomChart(t) {
                        this.isLoading || this.$emit("changeActiveData", t)
                    }
                }
            };
            e.default = l
        },
        801: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "Table",
                props: {
                    excludedFields: {
                        type: Array,
                        default: () => []
                    },
                    items: {
                        type: Array,
                        default: () => []
                    },
                    noResultText: {
                        type: String,
                        default: "No results"
                    },
                    filter: {
                        type: String,
                        default: ""
                    },
                    header: {
                        type: Array,
                        default: () => []
                    },
                    isEmpty: {
                        type: Boolean,
                        default: !0
                    },
                    isHeaderBorder: {
                        type: Boolean,
                        default: !1
                    },
                    isSortable: {
                        type: Boolean,
                        default: !1
                    },
                    activeSortField: {
                        type: String,
                        default: ""
                    },
                    isSortASC: {
                        type: Boolean,
                        default: !1
                    },
                    spaceBetween: {
                        type: Boolean,
                        default: !1
                    }
                }
            };
            e.default = n
        },
        803: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(31),
                r = a(30),
                s = n(a(1177)),
                o = n(a(5109));
            var l = {
                name: "EditAmount",
                components: {
                    LoadingEllipsis: s.default,
                    CurrencyInput: o.default
                },
                mixins: [r.BuyMixin, r.CurrencyConverter],
                props: {
                    readonly: {
                        type: Boolean,
                        default: !1
                    },
                    isExchange: {
                        type: Boolean,
                        default: !1
                    },
                    value: {
                        type: String,
                        default: ""
                    },
                    error: {
                        type: String,
                        default: ""
                    },
                    placeholder: {
                        type: String,
                        default: ""
                    },
                    decimals: {
                        type: Number,
                        default: 0
                    },
                    showBalance: {
                        type: Boolean,
                        default: !1
                    },
                    isFiat: {
                        type: Boolean,
                        default: !1
                    },
                    notes: {
                        type: Array,
                        default: () => []
                    },
                    isZeroPlaceholder: {
                        type: Boolean,
                        default: !1
                    },
                    wallet: {
                        type: Object,
                        default: null
                    },
                    parentTicker: {
                        type: String,
                        default: ""
                    },
                    focus: {
                        type: Boolean,
                        default: !1
                    },
                    isSendAllClick: {
                        type: Boolean,
                        default: !1
                    },
                    isInteger: {
                        type: Boolean,
                        default: !1
                    },
                    isBuyCoin: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: () => ({
                    isUpdateFiat: !0,
                    isLoadingBalance: !0,
                    currentCoin: null,
                    currentFiat: 0
                }),
                computed: {
                    ...(0, i.mapGetters)(["fiatRate", "coinRate"]),
                    hasCoinRate() {
                        const t = this.coinRate(this.fiatRate, this.wallet);
                        return (null == t ? void 0 : t.rate) > 0
                    },
                    valueFiat() {
                        const t = this.coinRate(this.fiatRate, this.wallet);
                        return this.value ? this.isUpdateFiat ? this.$options.filters.formatFiatV2(this.getValueFiat(null == t ? void 0 : t.rate)) : this.getValueFiat(null == t ? void 0 : t.rate) : this.currentFiat ? this.currentFiat : "0.00"
                    },
                    notesList() {
                        return void 0 !== this.notes ? this.notes : []
                    }
                },
                watch: {
                    notes() {
                        this.setIsLoadingBalance()
                    },
                    isSendAllClick() {
                        this.isUpdateFiat = !0
                    },
                    value() {
                        this.isInteger && this.updateValueInput(Math.floor(this.value))
                    }
                },
                mounted() {
                    this.focus && this.setFocus(), this.setIsLoadingBalance()
                },
                methods: {
                    buyCoin() {
                        this.buy(this.wallet)
                    },
                    setIsLoadingBalance() {
                        let t = !1;
                        if (this.showBalance && this.notes[0]) {
                            const e = this.notes[0].value;
                            t = "" === e || "..." === e
                        }
                        this.isLoadingBalance = t
                    },
                    setCurrentCoin() {
                        this.currentCoin !== this.wallet.ticker.toUpperCase() && (this.currentCoin = this.wallet.ticker.toUpperCase(), this.isUpdateFiat = !0)
                    },
                    getValueFiat(t) {
                        if (!this.isFiat) return null;
                        if (isNaN(this.value)) return "";
                        if (this.setCurrentCoin(), !this.isUpdateFiat) return this.currentFiat;
                        if (0 === Number(this.value)) return "0";
                        const e = (this.value * t).toFixed(8);
                        return e < 1e-6 ? e : this.roundFiat(e)
                    },
                    updateValueInput(t) {
                        this.$refs.input.value = t, this.$emit("input", t)
                    },
                    cleanValueInput(t, e = !1) {
                        if (this.isInteger && !e) {
                            const e = /[^0-9]+/g;
                            return t.replace(e, "")
                        }
                        return t.replace(/[^0-9.,]+/g, "").replace(/[^0-9.]|\.(?=.*\.)|\.(?=.^[0-9]{3}\.)/g, "")
                    },
                    coinWithWholeNumber(t) {
                        let e = t;
                        return "NEO" !== this.currentCoin && "ONT" !== this.currentCoin || (e = Math.ceil(e)), e
                    },
                    onInputFiat(t) {
                        this.setCurrentCoin(), this.isUpdateFiat = !1, this.currentFiat = t;
                        const e = (this.$rates.data[this.wallet.id] || this.$rates.data[this.parentTicker.toUpperCase()])[this.fiatRate].rate,
                            a = this.coinWithWholeNumber((t / e).toFixed(20)),
                            n = "" === a || 0 === parseFloat(a) || isNaN(parseFloat(a)) ? "" : this.numberToFixed(a, this.decimals);
                        this.updateValueInput(n)
                    },
                    onInput(t) {
                        const e = this.numberToFixed(this.cleanValueInput(t.target.value), this.decimals);
                        this.isUpdateFiat = !0, this.updateValueInput(e)
                    },
                    setFocus() {
                        this.$refs.input.focus()
                    },
                    putAllAvailableBalance() {
                        this.isUpdateFiat = !0, this.$emit("setAllAvailableBalance")
                    }
                }
            };
            e.default = l
        },
        804: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "CurrencyInput",
                props: {
                    initialValue: {
                        required: !0,
                        type: [Number, String],
                        default: "0.00"
                    },
                    options: {
                        required: !1,
                        type: Object,
                        default: () => ({})
                    },
                    formatter: {
                        required: !1,
                        type: Function,
                        default: null
                    },
                    readonly: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: () => ({
                    numericValue: 0
                }),
                watch: {
                    initialValue(t) {
                        this.isValid(t) ? (this.numericValue = +t, this.$refs.input.value = t) : this.$refs.input.value = this.numericValue
                    }
                },
                mounted() {
                    this.numericValue = this.initialValue, this.$refs.input.value = this.numericValue
                },
                methods: {
                    isValid(t) {
                        return !isNaN(+t) && this.isLengthValid(t)
                    },
                    isLengthValid(t) {
                        const {
                            maximumIntegerDigits: e = 9,
                            maximumFractionDigits: a = 6
                        } = this.options || {}, [n, i = ""] = ("" + t).split(".");
                        return n.length <= e && (null == i ? void 0 : i.length) <= a
                    },
                    onInput({
                        target: t
                    }) {
                        const {
                            value: e
                        } = t, a = t.selectionStart - 1;
                        this.isValid(e) ? (this.numericValue = +e, this.$refs.input.value = e) : (this.$refs.input.value = this.numericValue, t.setSelectionRange(a, a)), this.$emit("onInput", this.numericValue)
                    },
                    onFocus({
                        target: t
                    }) {
                        const e = t.selectionStart - 1;
                        this.$refs.input.value = this.numericValue, t.setSelectionRange(e, e)
                    },
                    onBlur() {
                        var t;
                        this.$refs.input.value = (null === (t = this.formatter) || void 0 === t ? void 0 : t.call(this, this.numericValue)) || this.numericValue, this.$emit("onBlur", this.numericValue)
                    }
                }
            };
            e.default = n
        },
        805: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(31),
                r = n(a(686));
            var s = {
                name: "CoinDropdown",
                components: {
                    TokenTag: r.default
                },
                props: {
                    coins: {
                        type: Array,
                        default: () => []
                    },
                    showBalance: {
                        type: Boolean,
                        default: !1
                    },
                    isSortByMarketCap: {
                        type: Boolean,
                        default: !1
                    },
                    enableSort: {
                        type: Boolean,
                        default: !0
                    },
                    isSwowTags: {
                        type: Boolean,
                        default: !0
                    },
                    isShowExchangeTags: {
                        type: Boolean,
                        default: !1
                    },
                    isShowSimplexTags: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: () => ({
                    filter: ""
                }),
                computed: {
                    ...(0, i.mapGetters)(["fiatRate", "coinRate"]),
                    filteredCoins() {
                        const t = this.filter.toLowerCase().trim(),
                            e = [];
                        return this.coins.forEach(a => {
                            (a.name.toLowerCase().indexOf(t) >= 0 || a.ticker.toLowerCase().indexOf(t) >= 0) && e.push(a)
                        }), this.enableSort ? this.isSortByMarketCap ? e.sort(this.sortByMarketCap) : e.sort(this.sortByAvailableBalance) : e
                    },
                    currentCoin() {
                        const t = void 0 !== this.coins[this.current] ? this.coins[this.current] : this.tokens[this.current];
                        return t.img = this.icon(t.icon), t
                    }
                },
                mounted() {
                    this.$refs.coinDropdown.focus()
                },
                methods: {
                    selectCoin(t) {
                        return this.$emit("selectCoin", t), t
                    },
                    sortByAvailableBalance: (t, e) => Number(e.fiatBalance) - Number(t.fiatBalance),
                    getTags(t) {
                        if (!this.isSwowTags) return [];
                        const {
                            settings: e
                        } = this.$buy;
                        return (this.isShowExchangeTags ? (null == e ? void 0 : e.exchangesTags) || [] : (null == e ? void 0 : e.simplexTags) || [])[t] || []
                    },
                    sortByMarketCap(t, e) {
                        const a = this.coinRate(this.fiatRate, t).marketCap || 0;
                        return (this.coinRate(this.fiatRate, e).marketCap || 0) - a
                    },
                    balance({
                        id: t,
                        balances: e,
                        divisibleBalance: a
                    }) {
                        const n = localStorage.getItem(t + "-balance"),
                            i = +((null == e ? void 0 : e.available) || a || n || 0);
                        return +i.toFixed(i > 1 ? 4 : 6)
                    }
                }
            };
            e.default = s
        },
        806: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(61)),
                r = n(a(2275)),
                s = a(38);
            const o = new Set(["ETH", "LUNA", "LUNС", "BSC", "AVAX", "MATIC", "FLR", "FTM", "FIL", "ETHOP", "OP"]);
            var l = {
                name: "FeeConstructorOld",
                components: {
                    NumericRange: r.default
                },
                props: {
                    isSetFee: {
                        type: Boolean,
                        default: !1
                    },
                    wallet: {
                        type: Object,
                        required: !0
                    },
                    utxos: {
                        type: Array,
                        default: () => []
                    },
                    sendAmount: {
                        type: String,
                        default: "0"
                    },
                    sendAddress: {
                        type: String,
                        default: ""
                    },
                    minimumValue: {
                        type: String,
                        default: "0"
                    },
                    maximumValue: {
                        type: String,
                        default: "0"
                    },
                    defaultValue: {
                        type: String,
                        default: "0"
                    },
                    nonce: {
                        type: String,
                        default: ""
                    },
                    minGasLimit: {
                        type: String,
                        default: "21000"
                    },
                    defaultGasPrice: {
                        type: String,
                        default: "1"
                    },
                    defaultGasLimit: {
                        type: String,
                        default: "21000"
                    },
                    defaultSatoshiPerByte: {
                        type: String,
                        default: "1"
                    },
                    nodeGasPrice: {
                        type: String,
                        default: "1"
                    },
                    custom: {
                        type: String,
                        required: !1,
                        default: ""
                    },
                    estimatedTime: {
                        type: String,
                        default: ""
                    }
                },
                data: () => ({
                    satoshiPerByte: "1",
                    gasPrice: "1",
                    gasLimit: "21000",
                    maxGasLimit: "300000",
                    minGasPrice: "1",
                    maxGasPrice: "200",
                    minSatoshiPerByte: "1",
                    coinsWithGas: o
                }),
                computed: {
                    feeWallet() {
                        return this.$wallets.getWallet(this.wallet.deprecatedParent)
                    },
                    maxSatoshiPerByte() {
                        return "LTC" === this.wallet.ticker ? "1000" : "400"
                    },
                    isCustomGasPrice() {
                        return !["FIL"].includes(this.wallet.deprecatedParent)
                    },
                    debounceTimeForGas() {
                        return new Set(["OP"]).has(this.feeWallet.deprecatedParent) ? 500 : 0
                    }
                },
                created() {
                    this.feeWallet.defaultMaxGasPrice && (this.maxGasPrice = String(this.feeWallet.defaultMaxGasPrice)), this.minGasPrice = +this.nodeGasPrice > 0 ? this.nodeGasPrice : "1", this.gasLimit = this.defaultGasLimit, this.gasPrice = this.defaultGasPrice, this.satoshiPerByte = this.defaultSatoshiPerByte, this.getEstimatedTime()
                },
                methods: {
                    emitNewValue(t) {
                        this.$emit("change", t)
                    },
                    async getFeeAndEmitValue() {
                        var t, e;
                        let a = null,
                            n = null;
                        this.coinsWithGas.has(this.feeWallet.ticker) ? (a = new i.default(this.gasPrice).multipliedBy(1e9).toString(), this.$emit("setCustomGas", [a, this.gasLimit])) : (n = this.satoshiPerByte, this.$emit("setCustomSatoshi", n));
                        const r = await this.feeWallet.getFee({
                                sendAmount: null !== (t = this.sendAmount) && void 0 !== t ? t : "0",
                                address: null !== (e = this.sendAddress) && void 0 !== e ? e : null,
                                userGasPrice: a,
                                gasLimit: this.gasLimit,
                                feePerByte: this.satoshiPerByte,
                                utxos: this.utxos,
                                isToken: this.wallet instanceof s.Token,
                                contract: this.wallet.contract,
                                denom: this.wallet.denom,
                                custom: this.custom
                            }),
                            o = this.feeWallet.toCurrencyUnit(r);
                        await this.getEstimatedTime(), this.$emit("change", o)
                    },
                    setFieldProperValue(t, e) {
                        this[t] = Number.isNaN(Number(e)) ? "0" : e, this.debounce(this.getFeeAndEmitValue, this.debounceTimeForGas)
                    },
                    setDefault() {
                        this.$bus.$emit("numeric::range::default")
                    },
                    async getEstimatedTime() {
                        var t;
                        if (!["ETH", "BTC", "BSC"].includes(this.wallet.id)) return;
                        const e = {
                                ETH: this.gasPrice,
                                BTC: this.satoshiPerByte,
                                BSC: this.gasPrice
                            },
                            a = await (null === (t = this.wallet) || void 0 === t ? void 0 : t.getEstimatedTimeTx(e[this.wallet.id], "label"));
                        this.$emit("setEstimatedTime", a)
                    },
                    getGasPriceUnits() {
                        return this.feeWallet.getGasPriceUnits ? this.feeWallet.getGasPriceUnits() : "GWEI"
                    }
                }
            };
            e.default = l
        },
        807: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(61));
            const r = "linear-gradient(to right, #2FA6FA 0%, #2FA6FA {value}%, #8290AD {value}%, #8290AD 100%)",
                s = /^-?\d+(\.\d+)?$/;
            var o = {
                props: {
                    maximum: {
                        required: !0,
                        type: String
                    },
                    minimum: {
                        required: !0,
                        type: String
                    },
                    defaultValue: {
                        type: String,
                        default: ""
                    },
                    hideButtons: {
                        type: Boolean,
                        default: !1
                    },
                    satPerByte: {
                        type: Boolean,
                        default: !1
                    },
                    numericInput: {
                        type: Object,
                        default: null
                    }
                },
                data: () => ({
                    middle: 0,
                    value: 0,
                    style: {
                        background: null
                    }
                }),
                created() {
                    this.initValues()
                },
                mounted() {
                    this.$bus.$on("numeric::range::default", this.initValues)
                },
                beforeDestroy() {
                    this.$bus.$off("numeric::range::default", this.initValues)
                },
                methods: {
                    initValues() {
                        this.changeValue(this.defaultValue)
                    },
                    changeValue(t) {
                        if (t && !s.test(t)) return this.$refs.numericInput.value = this.value, !1;
                        this.isError = t && 0 == +t;
                        let e = new i.default(t);
                        const a = new i.default(this.maximum),
                            n = new i.default(this.minimum);
                        let o = 0;
                        if (t) {
                            o = e.minus(n).multipliedBy(100).dividedBy(a.minus(n)).toFixed(), this.$emit("change", e.toNumber()), this.value = e.toNumber()
                        } else this.$emit("change", 0), this.value = t;
                        this.style.background = r.replace(/{value}/gi, o)
                    }
                }
            };
            e.default = o
        },
        808: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(31),
                r = a(30),
                s = {
                    name: "AvailableAndFeeAmounts",
                    components: {
                        LoadingEllipsis: n(a(1177)).default
                    },
                    mixins: [r.CurrencyConverter],
                    props: {
                        availableBalance: {
                            type: String,
                            default: ""
                        },
                        wallet: {
                            type: Object,
                            default: null
                        },
                        feeBalance: {
                            type: String,
                            default: ""
                        },
                        feeWallet: {
                            type: Object,
                            default: null
                        },
                        isCustomFeeSupported: {
                            type: Boolean,
                            default: !1
                        },
                        isRate: {
                            type: Boolean,
                            default: !1
                        },
                        sendType: {
                            type: String,
                            default: "Send"
                        },
                        isDisableAvailable: {
                            type: Boolean,
                            default: !1
                        },
                        estimatedTime: {
                            type: String,
                            default: ""
                        },
                        isSendAll: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: {
                        ...(0, i.mapGetters)(["fiatRate", "coinRate"]),
                        hasCoinRate() {
                            const t = this.coinRate(this.fiatRate, this.wallet);
                            return (null == t ? void 0 : t.rate) > 0
                        },
                        isCanSetAllAvailableBalance() {
                            return this.isSendAll && !(["Claim", "Withdrawal"].includes(this.sendType) && ["ZIL", "NEAR"].includes(this.wallet.ticker))
                        }
                    }
                };
            e.default = s
        },
        811: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(31),
                r = {
                    name: "ChartPrice",
                    components: {
                        Chart: n(a(2263)).default
                    },
                    props: {
                        coin: {
                            type: Object,
                            default: null
                        }
                    },
                    data: () => ({
                        activeZoom: null
                    }),
                    computed: {
                        ...(0, i.mapGetters)(["fiatRate", "coinRate", "fiatCharacter", "chartDataTickerByZoom", "chartDataEndpoints", "chartDataMainEndpoint", "isChartDataLoading"]),
                        coinRates() {
                            const {
                                rate: t,
                                change: e
                            } = this.coinRate(this.fiatRate, this.coin);
                            return {
                                change: e.toFixed(2),
                                rate: t
                            }
                        },
                        chartData() {
                            return this.chartDataTickerByZoom({
                                zoom: this.activeZoom,
                                ticker: this.coin.ticker
                            })
                        }
                    },
                    watch: {
                        fiatRate() {
                            this.activeZoom = this.chartDataMainEndpoint
                        },
                        "coin.ticker"() {
                            this.handleChangeZoom(this.chartDataMainEndpoint)
                        }
                    },
                    created() {
                        this.activeZoom = this.chartDataMainEndpoint
                    },
                    methods: {
                        ...(0, i.mapActions)(["updateChartData"]),
                        async handleChangeZoom(t) {
                            t === this.activeZoom || this.isChartDataLoading[t] || (this.activeZoom = t, await this.updateChartData({
                                zoom: t,
                                ticker: this.coin.ticker
                            }))
                        }
                    }
                };
            e.default = r
        },
        813: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(5116)),
                r = n(a(359)),
                s = a(31),
                o = {
                    name: "CoinArticle",
                    components: {
                        AtomicNotifyPoint: r.default,
                        ArticleCard: i.default
                    },
                    props: {
                        coin: {
                            type: Object,
                            default: null
                        },
                        article: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    computed: {
                        articleUID() {
                            return `article-${this.coin.ticker.split("-").join("")}-${this.coin.deprecatedParent&&this.coin.deprecatedParent!==this.coin.ticker?this.coin.deprecatedParent:""}-${this.article.contentUrl}`
                        }
                    },
                    methods: {
                        ...(0, s.mapActions)(["setCompletedReason"]),
                        ...(0, s.mapMutations)(["ADD_COMPLETED_REASON"]),
                        clickHandler() {
                            this.registerArticleReason(), this.openExternal()
                        },
                        registerArticleReason() {
                            this.ADD_COMPLETED_REASON(this.articleUID), this.setCompletedReason()
                        },
                        openExternal() {
                            this.article.contentUrl && this.$electron.shell.openExternal(this.article.contentUrl)
                        }
                    }
                };
            e.default = o
        },
        821: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "SwitchToggle",
                props: {
                    trigger: {
                        type: Boolean,
                        default: !1
                    }
                }
            };
            e.default = n
        },
        822: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "Ticker",
                props: {
                    coin: {
                        type: Object,
                        default: () => ({})
                    },
                    isHidden: {
                        type: Boolean,
                        default: !1
                    }
                }
            };
            e.default = n
        },
        825: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "FilterButton",
                props: {
                    active: {
                        type: Boolean,
                        default: !1
                    },
                    highlight: {
                        type: Boolean,
                        default: !1
                    }
                }
            };
            e.default = n
        },
        829: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "RefreshButton",
                data: () => ({
                    isLoading: !1
                }),
                methods: {
                    async toggleLoader() {
                        if (this.isLoading) return;
                        this.isLoading = !0, setTimeout(() => {
                            this.isLoading = !1
                        }, 3500), this.$emit("refreshFinished")
                    }
                }
            };
            e.default = n
        },
        83: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(724),
                i = a.n(n);
            for (var r in n)["default"].indexOf(r) < 0 && function(t) {
                a.d(e, t, (function() {
                    return n[t]
                }))
            }(r);
            var s = a(1198),
                o = a(3),
                l = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
            e.default = l.exports
        },
        834: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "BuyBitcoin",
                props: {
                    name: {
                        type: String,
                        default: ""
                    }
                }
            };
            e.default = n
        },
        835: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            e.default = {
                name: "ExportButton"
            }
        },
        842: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "Dropdown",
                props: {
                    elements: {
                        type: Array,
                        default: () => []
                    },
                    showAdditional: {
                        type: Boolean,
                        default: !1
                    },
                    custom: {
                        type: String,
                        default: ""
                    }
                },
                data: () => ({
                    filter: ""
                }),
                computed: {
                    filterElements() {
                        const t = this.filter.toLowerCase().trim(),
                            e = this.elements.filter(e => e.primary.toLowerCase().indexOf(t) >= 0).sort((t, e) => parseFloat(e.additional) - parseFloat(t.additional));
                        return this.custom && e.push({
                            primary: this.custom,
                            isCustom: !0
                        }), e
                    }
                },
                methods: {
                    select(t) {
                        if (t.isCustom) return this.$emit("selectCustom");
                        this.$emit("select", t.uniqueField ? {
                            uniqueField: t.uniqueField,
                            name: t.primary
                        } : t.primary)
                    }
                }
            };
            e.default = n
        },
        852: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(556)),
                r = {
                    name: "LazyImage",
                    props: {
                        defaultImage: {
                            type: String,
                            required: !0
                        },
                        loading: {
                            type: String,
                            required: !0
                        },
                        cached: {
                            type: String,
                            default: ""
                        }
                    },
                    data: () => ({
                        loaded: null,
                        timeout: null
                    }),
                    created() {
                        this.cached && (this.loaded = this.cached)
                    },
                    beforeMount() {
                        this.loaded || (this.timeout = setTimeout(this.startLoad, 300))
                    },
                    beforeDestroy() {
                        clearTimeout(this.timeout)
                    },
                    methods: {
                        startLoad() {
                            (0, i.default)({
                                url: this.loading,
                                responseType: "arraybuffer",
                                headers: {
                                    "Content-type": "image/png"
                                }
                            }).then(t => {
                                let e = t && t.data && Buffer.from(t.data, "binary").toString("base64");
                                this.loaded = e && "data:image/png;base64," + e || null, this.$emit("imageLoaded", this.loaded)
                            }).catch(() => console.log("Failed to load logo"))
                        }
                    }
                };
            e.default = r
        },
        862: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "SimplePopup",
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    items: {
                        type: Array,
                        default: () => []
                    }
                }
            };
            e.default = n
        },
        863: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "StakingInfoItem",
                props: {
                    ticker: {
                        type: String,
                        required: !0
                    },
                    title: {
                        type: String,
                        required: !0
                    },
                    value: {
                        type: [String, Number, Array],
                        required: !0
                    },
                    badge: {
                        type: Object,
                        default: () => ({
                            title: "",
                            disable: !0,
                            show: !1
                        })
                    },
                    isDisable: {
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    formatAmount(t) {
                        if ("number" != typeof Number(t) || isNaN(Number(t))) return 0;
                        return new Intl.NumberFormat("en-US", {
                            maximumFractionDigits: 6
                        }).format(+t)
                    }
                }
            };
            e.default = n
        },
        881: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t, e) {
                    if (!e && t && t.__esModule) return t;
                    if (null === t || "object" != typeof t && "function" != typeof t) return {
                        default: t
                    };
                    var a = r(e);
                    if (a && a.has(t)) return a.get(t);
                    var n = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in t)
                        if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
                            var o = i ? Object.getOwnPropertyDescriptor(t, s) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = t[s]
                        } n.default = t, a && a.set(t, n);
                    return n
                }(a(2308)),
                i = a(31);

            function r(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    a = new WeakMap;
                return (r = function(t) {
                    return t ? a : e
                })(t)
            }
            var s = {
                name: "DonutChart",
                props: {
                    data: {
                        type: Array,
                        default: () => []
                    }
                },
                data: () => ({
                    svg: null
                }),
                computed: {
                    ...(0, i.mapGetters)(["fiatRate", "fiatCharacter", "balanceSummary"]),
                    portfolioBalance() {
                        const t = this.getCacheFiatBalance(),
                            e = this.$options.filters.formatFiat(this.balanceSummary(this.fiatRate), this.fiatRate);
                        return this.$options.filters.formatFinance(e || t)
                    }
                },
                watch: {
                    data(t, e) {
                        t.length !== e.length && this.$nextTick(() => {
                            this.updateChart()
                        })
                    },
                    portfolioBalance() {
                        this.updateChart()
                    }
                },
                mounted() {
                    this.createChart()
                },
                methods: {
                    getCacheFiatBalance() {
                        const t = localStorage.getItem(this.fiatRate + "-fiatBalance");
                        return "undefined" !== t && t ? t : null
                    },
                    updateChart() {
                        this.svg && this.svg.remove(), this.createChart()
                    },
                    createChart() {
                        if (!this.$refs.donutChart) return;
                        const {
                            portfolioBalance: t,
                            fiatCharacter: e,
                            getCoinColor: a
                        } = this, i = this.$options.filters, r = n.arc().innerRadius(192).outerRadius(200), s = n.arc().innerRadius(189).outerRadius(203), o = n.arc().innerRadius(132).outerRadius(200), l = n.pie().value(({
                            portfolio: t
                        }) => t).sort(null).padAngle(.01);
                        this.svg = n.select(this.$refs.donutChart).append("svg").attr("class", "pie").attr("width", 400).attr("height", 400);
                        const d = this.svg.append("g").attr("transform", "translate(200, 200)"),
                            c = `<p class="text-top">${e}${t}</p>`,
                            u = d.append("svg:foreignObject").attr("width", 400).attr("height", 400).attr("x", -200).attr("y", -200).append("xhtml:div").attr("class", "donut-chart__info").html(() => c),
                            f = 1 === this.data.length && "100" === this.data[0].portfolio,
                            p = (t, e = !1) => {
                                n.selectAll(".g-pie").transition().attr("style", e ? "opacity:0.5;" : "opacity:1;").duration(200);
                                const a = n.select(t.parentNode);
                                a.transition().attr("style", "opacity:1;").duration(200), a.select(".g-pie-item").transition().attr("d", e && !f ? s : r).duration(200), e || u.html(() => c)
                            },
                            b = (t, e = null) => `<p ${e?`class="text-bottom" style="color:${a(e)};"`:'class="text-top"'}>${t}</p>`,
                            h = d.selectAll("path").data(l(this.data)).enter().append("g").attr("class", "g-pie").on("mouseover", (function({
                                data: t = null
                            }) {
                                const a = i.formatFinance(Number(i.formatFiatFixed(t.value))),
                                    r = b(e + a),
                                    s = "Other" !== t.name ? `${r}${b(`${t.balance} ${t.ticker}`,t.contract||t.id)}` : "" + `<p class="text-top">${r}</p><p class="text-bottom text-gray">Other assets</p>`;
                                !f && n.select(this).style("cursor", "pointer"), u.html(() => s)
                            })).on("mouseout", (function() {
                                n.select(this).style("cursor", "none")
                            }));
                        h.append("path").attr("d", o).attr("fill", "transparent").on("mouseover", (function() {
                            p(this, !0)
                        })).on("mouseout", (function() {
                            p(this, !1)
                        })), h.append("path").attr("class", "g-pie-item").attr("d", r).attr("fill", ({
                            data: t = null
                        }) => f ? "#8290AD" : a(t.contract || t.id)).on("mouseover", (function() {
                            p(this, !0)
                        })).on("mouseout", (function() {
                            p(this, !1)
                        }))
                    },
                    getCoinColor(t) {
                        if (!t) return "#8290AD";
                        const e = t.split("*")[0].toLowerCase(),
                            a = document.querySelector(".icon.icon-" + e) || document.querySelector(".icon");
                        if (!a) return;
                        return "rgb" + getComputedStyle(a).getPropertyValue("background").split("rgb")[2].split(")")[0] + ")"
                    }
                }
            };
            e.default = s
        },
        886: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                name: "ClipboardWrap",
                components: {
                    IconClipboard: n(a(5188)).default
                },
                props: {
                    isButton: {
                        type: Boolean,
                        default: !0
                    },
                    clipboardMessage: {
                        type: String,
                        default: "Success added to clipboard"
                    },
                    textToClipboard: {
                        type: String,
                        default: ""
                    },
                    isBigIcon: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: () => ({
                    showCopy: !1
                }),
                computed: {
                    clipboardText() {
                        return this.textToClipboard || this.$scopedSlots.default()[0].context.$refs.clipboard_value.textContent
                    }
                },
                methods: {
                    copyToClipboard() {
                        this.$electron.clipboard.writeText(this.clipboardText), this.showCopy = !0, setTimeout(() => {
                            this.showCopy = !1
                        }, 1e3)
                    }
                }
            };
            e.default = i
        },
        897: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "ErrorPlain",
                props: {
                    message: {
                        type: String,
                        default: ""
                    }
                },
                computed: {
                    messages() {
                        return this.message.split("\n")
                    }
                }
            };
            e.default = n
        },
        898: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            e.default = {
                name: "ChangeIcon"
            }
        },
        899: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(30),
                r = n(a(106)),
                s = n(a(691)),
                o = a(204),
                l = {
                    name: "ExchangeCoin",
                    components: {
                        EditAmount: r.default,
                        CoinDropdown: s.default,
                        ExchangeCoinDropdown: o.ExchangeCoinDropdown
                    },
                    mixins: [i.ExchangeMixin],
                    props: {
                        icon: {
                            type: String,
                            default: ""
                        },
                        coin: {
                            type: Object,
                            default: null
                        },
                        currencies: {
                            type: Array,
                            default: null
                        },
                        availableBalance: {
                            type: String,
                            default: ""
                        },
                        selectedCoin: {
                            type: String,
                            default: ""
                        },
                        amount: {
                            type: String,
                            default: ""
                        },
                        readonly: {
                            type: Boolean,
                            default: !1
                        },
                        isAvailableBalance: {
                            type: Boolean,
                            default: !1
                        },
                        isChangeCoin: {
                            type: Boolean,
                            default: !0
                        },
                        isSortByMarketCap: {
                            type: Boolean,
                            default: !1
                        },
                        isBuyCrypto: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: () => ({
                        filters: [],
                        isCoinDropdown: !1,
                        activeFilter: "all"
                    }),
                    computed: {
                        availableCoins() {
                            const t = [];
                            return this.currencies.forEach(e => {
                                const a = this.$wallets.getWallet(e);
                                if (a) {
                                    ("EOS" !== a.ticker || a.activated) && t.push(a)
                                }
                            }), t
                        },
                        minAmountNotes() {
                            return this.isAvailableBalance ? [{
                                name: "Available: ",
                                value: this.availableBalance
                            }] : null
                        }
                    },
                    watch: {
                        async currencies(t, e) {
                            t !== e && await this.setExchangeData()
                        }
                    },
                    async beforeMount() {
                        await this.setExchangeData()
                    },
                    methods: {
                        async setExchangeData() {
                            this.filters = await this.$wallets.getFilters(), this.newTagCoins = await this.$wallets.getAvailableWalletsByFilter(this.filters[0], this.currencies)
                        },
                        changeActiveFilter(t) {
                            this.activeFilter = t
                        },
                        selectCoin(t) {
                            this.isCoinDropdown = !1, this.$emit("selectCoin", t)
                        },
                        outsideClick() {
                            this.isCoinDropdown = !1
                        },
                        showCoinDropdown(t) {
                            t.stopPropagation(), this.isChangeCoin && (this.isCoinDropdown = !this.isCoinDropdown)
                        },
                        setAmount(t) {
                            this.$emit("setAmountToSend", t)
                        }
                    }
                };
            e.default = l
        },
        900: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "CashbackInfo",
                props: {
                    estimatedCashback: {
                        type: String,
                        default: ""
                    }
                },
                methods: {
                    goToCashbackClub() {
                        this.$router.push("/settings")
                    }
                }
            };
            e.default = n
        },
        901: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "CashbackPromotion",
                data: () => ({
                    clubMessage: "Join the Membership Program to receive up to 1% rewards for every exchange"
                }),
                methods: {
                    goToCashbackClub() {
                        this.$router.push("/settings")
                    }
                }
            };
            e.default = n
        },
        907: function(t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(31),
                i = {
                    name: "FiatDropdownV2",
                    components: {
                        AtomicFlagIcon: a(204).AtomicFlagIcon
                    },
                    props: {
                        avaliableFiats: {
                            type: Array,
                            default: () => []
                        }
                    },
                    data: () => ({
                        filter: ""
                    }),
                    computed: {
                        filteredFiat() {
                            const t = this.filter.toLowerCase();
                            return this.avaliableFiats.filter(({
                                code: e,
                                name: a
                            }) => {
                                const n = -1 !== e.toLowerCase().indexOf(t),
                                    i = -1 !== a.toLowerCase().indexOf(t);
                                return n || i
                            })
                        }
                    },
                    mounted() {
                        this.$refs.fiatDropdown.focus()
                    },
                    methods: {
                        ...(0, n.mapActions)(["toggleFiat"]),
                        selectFiatCoin(t) {
                            this.avaliableFiats || this.toggleFiat(t), this.$emit("selectFiatCoin", t)
                        }
                    }
                };
            e.default = i
        },
        911: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(5265));
            var r = {
                name: "CustomKey",
                components: {
                    QrCode: i.default
                },
                filters: {
                    printKey(t) {
                        const e = t[0].toUpperCase() + t.slice(1),
                            a = e.indexOf("Key");
                        return -1 !== a ? e.slice(0, a) + " " + e.slice(a) : e
                    }
                },
                props: {
                    value: {
                        type: String,
                        default: ""
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    textClipboard: {
                        type: String,
                        default: ""
                    },
                    isTrimValue: {
                        type: Boolean,
                        default: !0
                    },
                    isQrCode: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: () => ({
                    copied: !1
                }),
                methods: {
                    trimValue(t) {
                        return this.isTrimValue && t.length > 45 ? t.substr(0, 20) + "..." + t.substr(-20) : t
                    },
                    copyValue() {
                        this.$electron.clipboard.writeText(this.value), this.copied = !0, setTimeout(() => {
                            this.copied = !1
                        }, 1e3)
                    }
                }
            };
            e.default = r
        },
        912: function(t, e, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(a(687)),
                r = {
                    name: "QrCode",
                    props: {
                        value: {
                            type: String,
                            default: ""
                        }
                    },
                    data: () => ({
                        qrCodeImage: ""
                    }),
                    methods: {
                        showQRCode() {
                            const t = new i.default({
                                value: this.value
                            });
                            t.set({
                                size: 200,
                                padding: 5
                            }), this.qrCodeImage = t.toDataURL("image/jpeg"), this.$ga.event("User Actions", "Show address QR", {
                                clientID: this.$ga.customParams.uid
                            })
                        },
                        hideQRCode() {
                            this.qrCodeImage = ""
                        }
                    }
                };
            e.default = r
        }
    }
]);