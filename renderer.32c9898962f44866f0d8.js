module.exports = function(t) {
    function e(e) {
        for (var n, s, o = e[0], c = e[1], l = e[2], d = 0, u = []; d < o.length; d++) s = o[d], Object.prototype.hasOwnProperty.call(i, s) && i[s] && u.push(i[s][0]), i[s] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        for (f && f(e); u.length;) u.shift()();
        return r.push.apply(r, l || []), a()
    }

    function a() {
        for (var t, e = 0; e < r.length; e++) {
            for (var a = r[e], n = !0, s = 1; s < a.length; s++) {
                var o = a[s];
                0 !== i[o] && (n = !1)
            }
            n && (r.splice(e--, 1), t = c(c.s = a[0]))
        }
        return t
    }
    var n = {},
        i = {
            49: 0
        },
        r = [];
    var s = {};
    var o = {
        7589: function() {
            return {
                "./cardano_serialization_lib_bg.js": {
                    __wbindgen_object_drop_ref: function(t) {
                        return n[5589].exports.gc(t)
                    },
                    __wbindgen_string_new: function(t, e) {
                        return n[5589].exports.jc(t, e)
                    },
                    __wbg_new_3a746f2619705add: function(t, e) {
                        return n[5589].exports.Zb(t, e)
                    },
                    __wbg_call_f54d3a6dadb199ca: function(t, e) {
                        return n[5589].exports.Vb(t, e)
                    },
                    __wbindgen_jsval_eq: function(t, e) {
                        return n[5589].exports.fc(t, e)
                    },
                    __wbg_self_ac379e780a0d8b94: function(t) {
                        return n[5589].exports.cc(t)
                    },
                    __wbg_crypto_1e4302b85d4f64a2: function(t) {
                        return n[5589].exports.Wb(t)
                    },
                    __wbindgen_is_undefined: function(t) {
                        return n[5589].exports.ec(t)
                    },
                    __wbg_getRandomValues_1b4ba144162a5c9e: function(t) {
                        return n[5589].exports.Xb(t)
                    },
                    __wbg_require_6461b1e9a0d7c34a: function(t, e) {
                        return n[5589].exports.bc(t, e)
                    },
                    __wbg_getRandomValues_1ef11e888e5228e9: function(t, e, a) {
                        return n[5589].exports.Yb(t, e, a)
                    },
                    __wbg_randomFillSync_1b52c8482374c55b: function(t, e, a) {
                        return n[5589].exports.ac(t, e, a)
                    },
                    __wbindgen_string_get: function(t, e) {
                        return n[5589].exports.ic(t, e)
                    },
                    __wbindgen_debug_string: function(t, e) {
                        return n[5589].exports.dc(t, e)
                    },
                    __wbindgen_throw: function(t, e) {
                        return n[5589].exports.kc(t, e)
                    },
                    __wbindgen_rethrow: function(t) {
                        return n[5589].exports.hc(t)
                    }
                }
            }
        },
        10428: function() {
            return {
                "./cardano_wallet_browser.js": {
                    __wbindgen_string_new: function(t, e) {
                        return n[5874].exports.__wbindgen_string_new(t, e)
                    },
                    __wbindgen_object_drop_ref: function(t) {
                        return n[5874].exports.__wbindgen_object_drop_ref(t)
                    },
                    __wbindgen_json_parse: function(t, e) {
                        return n[5874].exports.__wbindgen_json_parse(t, e)
                    },
                    __wbindgen_json_serialize: function(t, e) {
                        return n[5874].exports.__wbindgen_json_serialize(t, e)
                    },
                    __wbindgen_throw: function(t, e) {
                        return n[5874].exports.__wbindgen_throw(t, e)
                    },
                    __wbindgen_rethrow: function(t) {
                        return n[5874].exports.__wbindgen_rethrow(t)
                    }
                }
            }
        }
    };

    function c(e) {
        if (n[e]) return n[e].exports;
        var a = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, c), a.l = !0, a.exports
    }
    c.e = function(t) {
        var e = [],
            a = i[t];
        if (0 !== a)
            if (a) e.push(a[2]);
            else {
                var n = new Promise((function(e, n) {
                    a = i[t] = [e, n]
                }));
                e.push(a[2] = n);
                var r, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = function(t) {
                    return c.p + "vendors." + {
                        0: "43ab3ed08af5fec483c2",
                        1: "e26676c61182212bce9c",
                        2: "ae67f4149555f8ebe2e8",
                        3: "051fee7ba3c9622699ce",
                        4: "9178d353603bf36e8c08",
                        5: "463615d1325a63c67f3e",
                        6: "ee25e9b52a8e9d097f42",
                        7: "799792fd4fd992f3d481",
                        8: "cfab075f5a75b226eaf9",
                        9: "f243af4d68402b08efda",
                        10: "eb857bc0c06505ec43f8",
                        11: "49e6a0ca45d34cb31e01",
                        12: "81ee0d71e70aa359fad7",
                        13: "72c29a6a0fb10efaccec",
                        14: "eb8b5e69f4dee604c383",
                        15: "0c2c6af9ba0751db6aa5",
                        16: "83f0d8f7179225f9473f",
                        17: "21ebde79950b0af1dc73",
                        18: "5dd2b38005133f1814cc",
                        19: "d4073ad2a64ce587065c",
                        20: "b1777b889c5d82fef1a5",
                        21: "745f95ef11ea4b0f5335",
                        22: "161061a5431f57f5d06c",
                        23: "7080bf74c183f0883652",
                        24: "91b08cd42d05ee291b4f",
                        25: "cb9581cdba5e6fcbf409",
                        26: "276363329db67f6eee47",
                        27: "88f545bc58ae54ed164b",
                        28: "7f1d20c209533020fa50",
                        218: "510f3fe33fdeec0eb749",
                        219: "4d7423f6066150498372",
                        220: "9d34c4a00e9f09e991ee",
                        221: "b676a781f46d0dd6b427",
                        222: "f498240ce6bcf2f4e29e",
                        223: "8ade3b5ff3d686ea4472",
                        224: "9dbe0a4f06083f4d56a1",
                        225: "6fa2b953d336d5c2b653",
                        226: "9805de316f958a4b8267",
                        227: "0866a4c9be64ea8ec8ee",
                        228: "11ad3f86e8f28caf5609",
                        229: "3bd6095324e7d069f473",
                        230: "3ce7f177aefdb41152b1",
                        231: "3aab5268c6696085932d",
                        232: "286749647a18f336bb98",
                        233: "92817a5faeac936c7690",
                        234: "465e88e1639ac5e4e76e",
                        235: "a2c56b740ef949c53a57",
                        236: "a97a9d37d0b835a065c5",
                        237: "be89a3c8d06a208f78e7",
                        238: "c6e9ee7c5f746482a073",
                        239: "02b2b62e673b1ea0c6f5",
                        240: "5586ee6a4bd85e3268b8",
                        241: "8ed79b1db929bede74e9",
                        242: "a8275dc81fbcd8c72672",
                        243: "a8fb4d044035563140b7",
                        244: "7d602082b87404c06241",
                        245: "2c09dcef8f6ca0d64f52",
                        246: "80a452a9905acf62c8fd",
                        247: "3c269506949da42513ad",
                        248: "98731ac7e9a2a549d468",
                        249: "acd6821057ec51b5bd1f",
                        250: "894c79dad743b9b07c99",
                        251: "a7f282002441b122393b",
                        252: "099458600b5805c3cced",
                        253: "22f100f661e5ab20f74e",
                        254: "af53c8276f0a2aaa3564",
                        255: "c4b45a3cc48704ca2ca3",
                        256: "35ba8d61db5c2aee1a2f",
                        257: "eca017ca7c5280e4852e",
                        258: "a54a78da4711e0c2d75b",
                        259: "4e885cc3ec212144df90",
                        260: "a5f5d294ef2bd52e19b0",
                        261: "3ad417aeab318f085be3",
                        262: "12905814b50c767b691a",
                        263: "a2c64825c79a5f287448",
                        264: "60da4710a21b22d15145",
                        265: "3e0e0ddd66c0e630a52d",
                        266: "2373cec9d32eadc3c1d7",
                        267: "80a3aced098012c38ddf",
                        268: "509d5f9ccb299f67c8c3",
                        269: "affdb3a5fc534cc34546",
                        270: "021999540f1c061113a6",
                        271: "ab0a26b3250a226d0e1f",
                        272: "c63744ef389516905ffe",
                        273: "bd76c705523c952520a5",
                        274: "ebf4430a2942c9ed8fc6",
                        275: "20b3e250ad256fe5f9b1",
                        276: "4393cef332efed896ea8",
                        277: "8713dba12d4b7f95c4c9",
                        278: "0b93d15f21441c5928c6",
                        279: "25abace9403ce37198f4",
                        280: "6d580a29dfa3dbf4f505",
                        281: "4412061ba6960fc7f610",
                        282: "72871e4b494576d3e484",
                        283: "b2162829cf03bd9d8f73",
                        284: "3f8ec7c6fef80391091d",
                        285: "c7dd7830d5ce9627d86f",
                        286: "5d56c944ee4ee00c9071",
                        287: "2bc975931dbb5113364c",
                        288: "ffa48ac00e568f39f85a",
                        289: "96190378fe376d4edaf8",
                        290: "21f0591fccb3a4167f38",
                        291: "5adeac6b0ab49d2d7e2a",
                        292: "c9f460a41c78f3271660",
                        293: "12bcc52ef4eccde7959d",
                        294: "1775694bd3308cbc6fdb",
                        295: "2968e405dc9bd670bb4b",
                        296: "065377cf83debb7776d7",
                        297: "fc87d2a45d83a150b7c3",
                        298: "0eccb071a8ceb5f6af3b",
                        299: "ea6de3fa15058bef6efd",
                        300: "2afb9e2242b02581f022",
                        301: "44dac5179a6355b70287",
                        302: "605fb76ac1c0b9650e6b",
                        303: "437ce994df62efaab887",
                        304: "333229dbf43f4b03e255",
                        305: "44b31cede68dae737448",
                        306: "c967006eb2026baa65fb",
                        307: "cc928eaec4b8a4f766ed",
                        308: "1a62144565f99668b08a",
                        309: "80f51115766f056cf8df",
                        310: "2a0418a6c98d68a56595",
                        311: "f960bdff59d6978099f2",
                        312: "88fd8e328edc9cc9ceb1",
                        313: "89dd963d4a177b5615e0",
                        314: "ab3fae6da888fcdb9ca7",
                        315: "88d4750d7a7014ea0ae8",
                        316: "d4ac19d03e953393b8ac",
                        317: "2abdfeec2f5182ff79aa",
                        318: "c94f6d6e609482140177",
                        319: "e3285583855b55758d24",
                        320: "d738d89986e864ce40e9",
                        321: "c5c824a30a9c80315270",
                        322: "5ec9e5fcc0c6f88c26b7",
                        323: "277fb3de8217fdef39ea",
                        324: "28cb9114047b5fb54354",
                        325: "064c42dd9e2328519a83",
                        326: "a1116fd0f481fe54bd4f",
                        327: "28a47d7766859abc60e9",
                        328: "ddeffb01c5687de1981c",
                        329: "98d87f2cb488c378151f",
                        330: "a6400e9ea2ca2f3d8909",
                        331: "0401531cb158f77c3604",
                        332: "ec50bba11b8631124792",
                        333: "e172cc3a07db2f223930",
                        334: "de58486b39e7604e2ede",
                        335: "eccdc0807ccf7d676652",
                        336: "b7ecda7f784c1cd0614d",
                        337: "14bab4368330c37331c0",
                        338: "420e8a60241590c25530",
                        339: "062a1cec7f93b12b0bac",
                        340: "093e924394dcca92a557",
                        341: "e24faa727ada241d03f4",
                        342: "f83ac41c17d53351f112",
                        343: "efe14ec0699b4089e74f",
                        344: "0fa348c90c7d8dd785d4",
                        345: "fff7582720edce563a3e",
                        346: "e15a2086334dd29f89d8",
                        347: "5db9df81235c7b5f0873",
                        348: "5a2da6b64108c4340cba",
                        349: "132142536d2f041e9193",
                        350: "44d303e24e484b406097",
                        351: "7de780aa7418a7abcda4",
                        352: "c7acff38355e27cef551",
                        353: "19a2dcc1d51d1a9b854c",
                        354: "33ecb3196511be64972b",
                        355: "c6aeaacef61fea8669a9",
                        356: "a03971d8ebaf354d10bf",
                        357: "30e7d71183f02ebe6e3d",
                        358: "88d691aad45c2389f05a",
                        359: "ec72520df853d71ee2a1",
                        360: "001d791d24797348508b",
                        361: "85578afae814bf5a43bd",
                        362: "b99bbe3362e820daced1",
                        363: "357cec274eeb373c3ccd"
                    } [t] + ".js"
                }(t);
                var d = new Error;
                r = function(e) {
                    l.onerror = l.onload = null, clearTimeout(u);
                    var a = i[t];
                    if (0 !== a) {
                        if (a) {
                            var n = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src;
                            d.message = "Loading chunk " + t + " failed.\n(" + n + ": " + r + ")", d.name = "ChunkLoadError", d.type = n, d.request = r, a[1](d)
                        }
                        i[t] = void 0
                    }
                };
                var u = setTimeout((function() {
                    r({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = r, document.head.appendChild(l)
            } return ({
            327: [10428],
            330: [7589]
        } [t] || []).forEach((function(t) {
            var a = s[t];
            if (a) e.push(a);
            else {
                var n, i = o[t](),
                    r = fetch(c.p + "" + {
                        7589: "9e62610360eb303b6973",
                        10428: "57f6a20f807a0ad779d6"
                    } [t] + ".module.wasm");
                if (i instanceof Promise && "function" == typeof WebAssembly.compileStreaming) n = Promise.all([WebAssembly.compileStreaming(r), i]).then((function(t) {
                    return WebAssembly.instantiate(t[0], t[1])
                }));
                else if ("function" == typeof WebAssembly.instantiateStreaming) n = WebAssembly.instantiateStreaming(r, i);
                else {
                    n = r.then((function(t) {
                        return t.arrayBuffer()
                    })).then((function(t) {
                        return WebAssembly.instantiate(t, i)
                    }))
                }
                e.push(s[t] = n.then((function(e) {
                    return c.w[t] = (e.instance || e).exports
                })))
            }
        })), Promise.all(e)
    }, c.m = t, c.c = n, c.d = function(t, e, a) {
        c.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, c.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, c.t = function(t, e) {
        if (1 & e && (t = c(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (c.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) c.d(a, n, function(e) {
                return t[e]
            }.bind(null, n));
        return a
    }, c.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return c.d(e, "a", e), e
    }, c.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, c.p = "", c.oe = function(t) {
        throw console.error(t), t
    }, c.w = {};
    var l = window.webpackJsonp = window.webpackJsonp || [],
        d = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var u = 0; u < l.length; u++) e(l[u]);
    var f = d;
    return r.push([5457, 203, 145, 39, 117, 103, 184, 45, 69, 106, 143, 110, 62, 167, 97, 88, 118, 150, 172, 190, 120, 119, 153, 102, 178, 36, 154, 185, 51, 217, 175, 158, 60, 112, 162, 212, 138, 99, 81, 32, 192, 144, 113, 91, 40, 140, 85, 199, 58, 44, 171, 74, 43, 204, 188, 109, 197, 34, 116, 29, 70, 54, 42, 96, 52, 170, 38, 56, 198, 89, 169, 63, 129, 200, 166, 209, 186, 72, 104, 50, 191, 142, 90, 82, 79, 95, 207, 48, 93, 214, 165, 176, 174, 114, 194, 160, 68, 133, 59, 46, 115, 206, 155, 125, 83, 100, 157, 35, 182, 86, 173, 127, 55, 92, 148, 77, 30, 132, 134, 71, 73, 161, 183, 215, 66, 65, 130, 101, 128, 139, 208, 135, 122, 201, 136, 105, 211, 147, 152, 78, 53, 213, 75, 181, 177, 149, 76, 107, 108, 141, 87, 189, 164, 187, 41, 168, 64, 61, 151, 94, 146, 216, 33, 47, 193, 57, 98, 37, 67, 179, 131, 180, 196, 84, 163, 202, 124, 121, 31, 80, 159, 210, 137, 123, 195, 156, 126, 111, 205]), a()
}({
    102: function(t, e) {
        t.exports = require("url")
    },
    104: function(t, e) {
        t.exports = require("path")
    },
    1171: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), Object.defineProperty(e, "oneOf", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(e, "shortener", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        });
        var i = n(a(4589)),
            r = n(a(684))
    },
    1172: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(104)),
            r = a(298);
        var s = new class FileService {
            async save(t, e, a = "cache") {
                try {
                    const n = "desktop" === a ? "saveToDesktop" : "saveToCache";
                    return await r.ipcRenderer.invoke(n, {
                        uri: t,
                        body: e
                    })
                } catch (t) {
                    return console.error(t), !1
                }
            }
            async read(t, e = {
                source: "url"
            }) {
                try {
                    const a = await r.ipcRenderer.invoke("getFileFromCache", t);
                    if ("url" === e.source) {
                        const t = "file://" + i.default.normalize(a.path);
                        return "win32" === process.platform ? "" + t.replace(/\\/g, "/") : t
                    }
                    return "" + a.buf
                } catch {
                    return !1
                }
            }
        };
        e.default = s
    },
    12: function(t, e) {
        t.exports = require("buffer")
    },
    1218: function(t, e, a) {
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
                    staticClass: "atomic-notify-point",
                    attrs: {
                        uid: t.UID
                    }
                }, [a("div", {
                    class: ["atomic-notify-point__wrap", {
                        "atomic-notify-point--center": "new" === t.type
                    }]
                }, [a("div", {
                    staticClass: "atomic-notify-point__slot"
                }, [t._t("default")], 2), t._v(" "), a("div", {
                    ref: "notify",
                    class: ["atomic-notify-point__label-wrap", {
                        "atomic-notify-point__label-wrap--visible": t.amount && "hidden" !== t.type
                    }],
                    attrs: {
                        id: t.UID
                    }
                }, [t.amount && "hidden" !== t.type ? a("div", {
                    class: ["atomic-notify-point__label atomic-notify-point__label--" + t.type]
                }, [a("span", [t._v("\n          " + t._s(t.type) + "\n        ")])]) : t._e()])])])
            },
            i = []
    },
    1229: function(t, e, a) {
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
                return a(t.tagName, t._b({
                    tag: "component",
                    class: t.classes,
                    attrs: {
                        disabled: t.disabled
                    },
                    on: {
                        click: t.handleClickLink
                    }
                }, "component", t.tagProps, !1), [t.loading ? a("icon", {
                    staticClass: "ivu-load-loop",
                    attrs: {
                        type: "ios-loading"
                    }
                }) : t._e(), t._v(" "), !t.icon && !t.customIcon || t.loading ? t._e() : a("icon", {
                    attrs: {
                        name: t.icon,
                        width: "20",
                        height: "20",
                        type: t.icon,
                        custom: t.customIcon
                    }
                }), t._v(" "), t.showSlot ? a("span", {
                    ref: "slot"
                }, [t._t("default")], 2) : t._e()], 1)
            },
            i = []
    },
    1230: function(t, e, a) {
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
                return n("Teleport", {
                    attrs: {
                        to: "body"
                    }
                }, [n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [n("div", {
                    staticClass: "atomic-modal__fullscreen",
                    on: {
                        click: function(e) {
                            return e.target !== e.currentTarget ? null : t.closeModal.apply(null, arguments)
                        }
                    }
                }, [n("div", {
                    staticClass: "close__icon",
                    on: {
                        click: t.closeModal
                    }
                }, [n("img", {
                    attrs: {
                        src: a(528)
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "nft-image"
                }, [t._t("default")], 2)])])], 1)
            },
            i = []
    },
    1232: function(t, e, a) {
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
                    staticClass: "section section_popup",
                    attrs: {
                        "data-test-id": "nft_info"
                    }
                }, [a("div", {
                    staticClass: "section__close",
                    attrs: {
                        "data-test-id": "close"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("onClose")
                        }
                    }
                }, [t._v("\n    ✕\n  ")]), t._v(" "), a("div", {
                    staticClass: "section__column section__column_fixed-w670"
                }, [a("div", {
                    staticClass: "section__item"
                }, [a("div", {
                    staticClass: "title",
                    attrs: {
                        "data-test-id": "nft_name"
                    }
                }, [t._v("\n        " + t._s(t.nft.name) + "\n      ")])]), t._v(" "), a("div", {
                    staticClass: "section__item",
                    attrs: {
                        "data-test-id": "preview"
                    }
                }, [a("div", {
                    staticClass: "section__column m-r-30",
                    style: {
                        width: "250px"
                    }
                }, [a("ImageNFT", {
                    attrs: {
                        nft: t.nft
                    }
                })], 1), t._v(" "), a("div", {
                    staticClass: "section__column"
                }, [a("div", {
                    staticClass: "text text_small m-b-20",
                    attrs: {
                        "data-test-id": "description"
                    }
                }, [t._v("\n          " + t._s(t.nft.description) + "\n        ")]), t._v(" "), a("div", {
                    staticClass: "title title_secondary"
                }, [t._v("\n          Details\n        ")]), t._v(" "), a("div", {
                    staticClass: "list"
                }, [t.contractAddress ? a("div", {
                    staticClass: "list__item"
                }, [a("div", {
                    staticClass: "text text_small"
                }, [t._v("\n              Contract address\n            ")]), t._v(" "), a("span", {
                    attrs: {
                        "data-test-id": "contract_nft_address"
                    },
                    on: {
                        click: function(e) {
                            return t.copyToClipboard(t.contractAddress, "contractAddress")
                        }
                    }
                }, [a("div", {
                    staticClass: "link",
                    attrs: {
                        "data-test-id": "nft_address"
                    }
                }, [t._v("\n                " + t._s(t.shortener(t.contractAddress, 26)) + "\n              ")]), t._v(" "), a("div", {
                    staticClass: "icon icon_clipboard",
                    attrs: {
                        "data-test-id": "copy_clipboard"
                    }
                })]), t._v(" "), a("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.contractAddressCopyTimeoutId ? a("div", {
                    staticClass: "message"
                }, [t._v("\n                Contract address copied to Clipboard\n              ")]) : t._e()])], 1) : t._e(), t._v(" "), t.nft.tokenId ? a("div", {
                    staticClass: "list__item"
                }, [a("div", {
                    staticClass: "text text_small"
                }, [t._v("\n              Token ID\n            ")]), t._v(" "), a("span", {
                    on: {
                        click: function(e) {
                            return t.copyToClipboard(t.nft.tokenId, "tokenId")
                        }
                    }
                }, [a("div", {
                    staticClass: "link",
                    attrs: {
                        "data-test-id": "nft_address"
                    }
                }, [t._v("\n                " + t._s(t.shortener(t.nft.tokenId, 26)) + "\n              ")]), t._v(" "), a("div", {
                    staticClass: "icon icon_clipboard",
                    attrs: {
                        "data-test-id": "copy_address"
                    }
                })]), t._v(" "), a("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.tokenIdCopyTimeoutId ? a("div", {
                    staticClass: "message"
                }, [t._v("\n                Token ID copied to Clipboard\n              ")]) : t._e()])], 1) : t._e(), t._v(" "), a("div", {
                    staticClass: "list__item"
                }, [a("div", {
                    staticClass: "text text_small"
                }, [t._v("\n              Token standard\n            ")]), t._v(" "), a("div", {
                    staticClass: "text text_small text_gray",
                    attrs: {
                        "data-test-id": "token_standard"
                    }
                }, [t._v("\n              " + t._s(t.nft.tokenStandard) + "\n            ")])]), t._v(" "), a("div", {
                    staticClass: "list__item"
                }, [a("div", {
                    staticClass: "text text_small"
                }, [t._v("\n              Blockchain\n            ")]), t._v(" "), a("div", {
                    staticClass: "text text_small text_gray",
                    attrs: {
                        "data-test-id": "nft_blockchain"
                    }
                }, [t._v("\n              " + t._s(t.nft.blockchain) + "\n            ")])])])])]), t._v(" "), a("div", {
                    staticClass: "section__column section__column_center section__column_bottom"
                }, [a("button", {
                    staticClass: "button",
                    attrs: {
                        "data-test-id": "send_button"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("onShowSendPopup")
                        }
                    }
                }, [t._v("\n        Send\n      ")])])])])
            },
            i = []
    },
    1233: function(t, e, a) {
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
                    staticClass: "thumbnail",
                    on: {
                        click: function(e) {
                            return t.$emit("onClick")
                        }
                    }
                }, [t.available ? [!t.base64Img || t.isLoading || t.isError ? a("div", {
                    class: ["thumbnail__image", {
                        thumbnail__loading: t.isLoading
                    }]
                }, [t.isError ? a("div", {
                    staticClass: "thumbnail__warning"
                }) : t._e(), t._v(" "), t.isError ? a("div", {
                    staticClass: "text text_extra-small text_gray"
                }, [t._v("\n        Couldn't load."), a("br"), t._v("Try checking your connection\n      ")]) : t._e()]) : a("div", {
                    staticClass: "thumbnail__image",
                    style: {
                        backgroundImage: "url(" + t.base64Img + ")"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("handleClick")
                        }
                    }
                }, [a("div", {
                    staticClass: "badge badge_float",
                    style: {
                        position: "absolute",
                        bottom: "4px",
                        right: "4px"
                    }
                }, [t._v("\n        " + t._s(t.label) + "\n      ")])])] : [a("div", {
                    staticClass: "thumbnail__image image-preview",
                    on: {
                        click: function(e) {
                            return t.$emit("handleClick")
                        }
                    }
                }, [a("ImagePreview", {
                    attrs: {
                        type: "nft"
                    }
                }), t._v(" "), a("div", {
                    staticClass: "badge badge_float",
                    style: {
                        position: "absolute",
                        bottom: "4px",
                        right: "4px"
                    }
                }, [t._v("\n        " + t._s(t.label) + "\n      ")])], 1)], t._v(" "), a("div", {
                    class: ["thumbnail__description", t.isLoading && "thumbnail__loading"]
                }, [a("div", {
                    staticClass: "text text_smaller"
                }, [t._v("\n      " + t._s(t.description) + "\n    ")])])], 2)
            },
            i = []
    },
    1234: function(t, e, a) {
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
                    staticClass: "atomic__form-field"
                }, [n("div", {
                    staticClass: "input-wrap",
                    class: {
                        "past-click": t.isPasteByClick && "" === t.value,
                        "input-wrap_password": t.isShowPassword
                    }
                }, [n("input", {
                    ref: "input",
                    attrs: {
                        type: t.inputType,
                        readonly: t.readonly
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        click: t.pasteFromClipboardToInput,
                        input: t.onInput,
                        keypress: t.keypressHandler,
                        keyup: [function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), e.stopPropagation(), t.enterPressed.apply(null, arguments))
                        }, t.onKeyUp],
                        focus: function(e) {
                            return t.$emit("focus")
                        },
                        blur: t.onBlur
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
                }, [n("EditSvg", {
                    attrs: {
                        outline: ""
                    }
                })], 1) : t._e(), t._v(" "), t.isShowPassword ? n("div", {
                    staticClass: "password-icon",
                    on: {
                        click: t.toggleTypePassword
                    }
                }, ["password" === t.inputType ? n("img", {
                    attrs: {
                        src: a(2142)
                    }
                }) : t._e(), t._v(" "), "text" === t.inputType ? n("img", {
                    attrs: {
                        src: a(2143)
                    }
                }) : t._e()]) : t._e()]), t._v(" "), n("transition", {
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
    1235: function(t, e, a) {
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
                    class: ["atomic-hint", , {
                        "atomic-hint__visible": t.value
                    }]
                }, [n("div", {
                    ref: "atomicHint",
                    class: ["position", "position__" + t.position, {
                        "with-close": t.closeIcon
                    }]
                }, [t.closeIcon ? n("div", {
                    staticClass: "close__icon",
                    on: {
                        click: function(e) {
                            return t.$emit("input", !1)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: a(2145)
                    }
                })]) : t._e(), t._v(" "), n("div", {
                    staticClass: "content"
                }, [t._t("default")], 2)])])
            },
            i = []
    },
    1236: function(t, e, a) {
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
                return n("a", {
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.$emit("click")
                        }
                    }
                }, [n("span", {
                    ref: "slot"
                }, [t._t("default")], 2), t._v(" "), t.external ? n("img", {
                    attrs: {
                        src: a(2146)
                    }
                }) : t._e(), n("img")])
            },
            i = []
    },
    1237: function(t, e, a) {
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
                    staticClass: "ui-dropdown"
                }, [a("div", {
                    staticClass: "ui-dropdown__search"
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.filter,
                        expression: "filter"
                    }],
                    ref: "dropdown",
                    attrs: {
                        type: "text",
                        placeholder: "Search",
                        "data-test-id": "search_dropdown"
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
                    staticClass: "ui-dropdown__list"
                }, [a("div", {
                    staticClass: "ui-dropdown__items"
                }, t._l(t.filteredItems, (function(e, n) {
                    return a("div", {
                        key: n,
                        staticClass: "ui-dropdown__item",
                        attrs: {
                            "data-test-id": "dropdown_item"
                        },
                        on: {
                            click: function(a) {
                                return t.selectItem(e)
                            }
                        }
                    }, [e.icon ? a("div", {
                        staticClass: "ui-dropdown__icon",
                        class: e.icon
                    }) : t._e(), t._v(" "), e.title ? a("div", {
                        staticClass: "text text_small",
                        attrs: {
                            "data-test-id": "dropdown_title"
                        }
                    }, [t._v("\n          " + t._s(e.title) + "\n        ")]) : t._e(), t._v(" "), e.description ? a("div", {
                        staticClass: "text text_small text_secondary"
                    }, [t._v("\n          " + t._s(e.description) + "\n        ")]) : t._e()])
                })), 0)])])
            },
            i = []
    },
    1238: function(t, e, a) {
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
                    staticClass: "atomic-tabs"
                }, [a("div", {
                    staticClass: "tabs",
                    style: {
                        textAlign: t.align
                    }
                }, t._l(t.tabs, (function(e, n) {
                    return a("div", {
                        key: e,
                        staticClass: "tab-title",
                        class: [{
                            active: n === t.value
                        }],
                        on: {
                            click: function(e) {
                                return t.changeActiveTab(n)
                            }
                        }
                    }, [t._v("\n      " + t._s(e) + "\n    ")])
                })), 0)])
            },
            i = []
    },
    1239: function(t, e, a) {
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
                    staticClass: "atomic__ui atomic__popup"
                }, [e("div", {
                    staticClass: "atomic__popup__header"
                }, [e("div", {
                    staticClass: "atomic__popup__header__content"
                }, [this._t("header")], 2), this._v(" "), e("div", {
                    staticClass: "close",
                    class: {
                        hide: !this.isShowClose
                    },
                    on: {
                        click: this.close
                    }
                }, [this._m(0)])]), this._v(" "), e("div", {
                    staticClass: "content__wrap"
                }, [this._t("default")], 2)])
            },
            i = [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "close__icon"
                }, [e("img", {
                    attrs: {
                        src: a(528)
                    }
                })])
            }]
    },
    1240: function(t, e, a) {
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
                return n("Teleport", {
                    attrs: {
                        to: "body"
                    }
                }, [n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [n("div", {
                    staticClass: "atomic-modal",
                    on: {
                        click: function(e) {
                            return e.target !== e.currentTarget ? null : t.closeModal.apply(null, arguments)
                        }
                    }
                }, [n("div", {
                    staticClass: "atomic-modal__content"
                }, [n("div", {
                    staticClass: "atomic-modal__content__header"
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("\n            " + t._s(t.title) + "\n          ")]), t._v(" "), n("div", {
                    staticClass: "close",
                    on: {
                        click: t.closeModal
                    }
                }, [n("div", {
                    staticClass: "close__icon"
                }, [n("img", {
                    attrs: {
                        src: a(528)
                    }
                })])])]), t._v(" "), n("div", {
                    staticClass: "atomic-modal__content__body"
                }, [t._t("default")], 2)])])])], 1)
            },
            i = []
    },
    1241: function(t, e, a) {
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
                    staticClass: "atomic-loader"
                }, [a("svg", {
                    staticClass: "loader-logo",
                    attrs: {
                        width: "148",
                        height: "145",
                        viewBox: "0 0 148 145",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [a("g", {
                    attrs: {
                        filter: "url(#filter0_d)"
                    }
                }, [a("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M53.6738 49.0045L24 130.2L42.375 123.817L67.7235 54.4571C69.2664 50.6206 71.0474 49.2397 74 49.1787C76.9526 49.2397 78.7336 50.6206 80.2765 54.4571L105.625 123.817L124 130.2L94.3262 49.0045C90.5609 39.5245 83.541 34.1584 74.2085 34.0035V34C74.1389 34 74.0694 34.0003 74 34.0009C73.9306 34.0003 73.8611 34 73.7915 34V34.0035C64.459 34.1584 57.4391 39.5245 53.6738 49.0045Z",
                        fill: "url(#paint0_linear)"
                    }
                })]), t._v(" "), a("mask", {
                    attrs: {
                        id: "mask0",
                        "mask-type": "alpha",
                        maskUnits: "userSpaceOnUse",
                        x: "24",
                        y: "34",
                        width: "100",
                        height: "97"
                    }
                }, [a("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M53.6738 49.0045L24 130.2L42.375 123.817L67.7235 54.4571C69.2664 50.6206 71.0474 49.2397 74 49.1787C76.9526 49.2397 78.7336 50.6206 80.2765 54.4571L105.625 123.817L124 130.2L94.3262 49.0045C90.5609 39.5245 83.541 34.1584 74.2085 34.0035V34C74.1389 34 74.0694 34.0003 74 34.0009C73.9306 34.0003 73.8611 34 73.7915 34V34.0035C64.459 34.1584 57.4391 39.5245 53.6738 49.0045Z",
                        fill: "white"
                    }
                })]), t._v(" "), a("g", {
                    attrs: {
                        mask: "url(#mask0)"
                    }
                }), t._v(" "), a("defs", [a("filter", {
                    attrs: {
                        id: "filter0_d",
                        x: "0",
                        y: "0",
                        width: "148",
                        height: "144.2",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB"
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
                        dy: "-10"
                    }
                }), t._v(" "), a("feGaussianBlur", {
                    attrs: {
                        stdDeviation: "12"
                    }
                }), t._v(" "), a("feColorMatrix", {
                    attrs: {
                        type: "matrix",
                        values: "0 0 0 0 0.192157 0 0 0 0 0.498039 0 0 0 0 0.796078 0 0 0 0.32 0"
                    }
                }), t._v(" "), a("feBlend", {
                    attrs: {
                        mode: "normal",
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow"
                    }
                }), t._v(" "), a("feBlend", {
                    attrs: {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow",
                        result: "shape"
                    }
                })], 1), t._v(" "), a("linearGradient", {
                    attrs: {
                        id: "paint0_linear",
                        x1: "24",
                        y1: "34",
                        x2: "24",
                        y2: "130.2",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [a("stop", {
                    attrs: {
                        "stop-color": "#42C1FD"
                    }
                }), t._v(" "), a("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "#1F8EFA"
                    }
                })], 1)], 1)]), t._v(" "), t._m(0), t._v(" "), a("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        version: "1.1"
                    }
                }, [a("defs", [a("filter", {
                    attrs: {
                        id: "goo"
                    }
                }, [a("feGaussianBlur", {
                    attrs: {
                        in: "SourceGraphic",
                        stdDeviation: "10",
                        result: "blur"
                    }
                }), t._v(" "), a("feColorMatrix", {
                    attrs: {
                        in: "blur",
                        mode: "matrix",
                        values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",
                        result: "goo"
                    }
                }), t._v(" "), a("feBlend", {
                    attrs: {
                        in: "SourceGraphic",
                        in2: "goo"
                    }
                })], 1)])])])
            },
            i = [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "blobs"
                }, [e("div", {
                    staticClass: "blob-center"
                }), this._v(" "), e("div", {
                    staticClass: "blob"
                }), this._v(" "), e("div", {
                    staticClass: "blob"
                }), this._v(" "), e("div", {
                    staticClass: "blob"
                }), this._v(" "), e("div", {
                    staticClass: "blob"
                }), this._v(" "), e("div", {
                    staticClass: "blob"
                }), this._v(" "), e("div", {
                    staticClass: "blob"
                })])
            }]
    },
    1242: function(t, e, a) {
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
                    staticClass: "atomic-spinner"
                }, this._l(11, (function(t) {
                    return e("div", {
                        key: t
                    })
                })), 0)
            },
            i = []
    },
    1243: function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return n
        })), a.d(e, "b", (function() {
            return i
        }));
        var n = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return this.flagSrc ? e("img", {
                    attrs: {
                        src: this.flagSrc
                    }
                }) : this._e()
            },
            i = []
    },
    1244: function(t, e, a) {
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
                    attrs: {
                        className: "atomic-hint-wrap"
                    }
                }, [a("div", {
                    ref: "atomic_hint_wrap_slot",
                    staticClass: "slot",
                    on: {
                        mouseenter: t.showHint,
                        mouseleave: t.hideHint
                    }
                }, [t._t("default"), t._v(" "), a("AtomicHint", {
                    attrs: {
                        position: t.hintPosition
                    },
                    model: {
                        value: t.isShowHint,
                        callback: function(e) {
                            t.isShowHint = e
                        },
                        expression: "isShowHint"
                    }
                }, [t._v("\n      " + t._s(t.hintText) + "\n    ")])], 2)])
            },
            i = []
    },
    1245: function(t, e, a) {
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
                    staticClass: "atomic__info-group"
                }, [n("div", {
                    staticClass: "atomic__info-group__label"
                }, [n("div", {
                    staticClass: "icon"
                }, [n("img", {
                    staticClass: "close",
                    attrs: {
                        src: t.iconPath
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "text"
                }, [t._v("\n      " + t._s(t.label) + "\n    ")])]), t._v(" "), n("div", {
                    staticClass: "atomic__info-group__value"
                }, [n("div", {
                    staticClass: "text"
                }, [t._v("\n      " + t._s(t.value) + "\n    ")]), t._v(" "), t.hintText ? n("div", {
                    staticClass: "icon_hint"
                }, [n("AtomicHintWrap", {
                    attrs: {
                        hintText: t.hintText,
                        iconBig: ""
                    }
                }, [n("img", {
                    staticClass: "close",
                    attrs: {
                        src: a(2254)
                    }
                })])], 1) : t._e()])])
            },
            i = []
    },
    1246: function(t, e, a) {
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
                    staticClass: "atomic__label-group"
                }, [e("div", {
                    staticClass: "label new-text-medium new-text-gray"
                }, [this._v("\n    " + this._s(this.label) + "\n  ")]), this._v(" "), e("div", {
                    staticClass: "value new-text-medium new-text-white"
                }, [this._v("\n    " + this._s(this.value) + "\n  ")])])
            },
            i = []
    },
    1247: function(t, e, a) {
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
                    staticClass: "simple-card"
                }, [a("div", {
                    staticClass: "simple-card__icon"
                }, [a("img", {
                    attrs: {
                        src: t.src
                    }
                })]), t._v(" "), a("div", {
                    staticClass: "simple-card__header"
                }, [t._v("\n    " + t._s(t.headerText) + "\n  ")]), t._v(" "), a("div", {
                    staticClass: "simple-card__body"
                }, [t._v("\n    " + t._s(t.bodyText) + "\n  ")])])
            },
            i = []
    },
    1248: function(t, e, a) {
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
                    staticClass: "atomic-linked-card"
                }, [t._l(t.linkedCardData, (function(e, i) {
                    return [n("AtomicSimpleCard", t._b({
                        key: e.icon + i
                    }, "AtomicSimpleCard", e, !1)), t._v(" "), t.isLast(i) ? t._e() : n("img", {
                        key: i,
                        attrs: {
                            src: a(2245)
                        }
                    })]
                }))], 2)
            },
            i = []
    },
    1250: function(t, e, a) {
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
                    staticClass: "atomic-rewards-bar"
                }, [a("div", {
                    staticClass: "titles"
                }, [a("div", {
                    staticClass: "reward__title"
                }, [t._v("\n      " + t._s(t.titles.reward) + "\n    ")]), t._v(" "), a("div", {
                    staticClass: "value__title"
                }, [t._v("\n      " + t._s(t.titles.value) + "\n    ")])]), t._v(" "), a("div", {
                    staticClass: "bar"
                }, [a("div", {
                    staticClass: "progress-bar__wrap"
                }, [a("div", {
                    staticClass: "progress-bar__reward"
                }, t._l(t.steps, (function(e, n) {
                    return a("div", {
                        key: e.value,
                        staticClass: "reward__item",
                        class: {
                            isLast: "100%" === t.getStepLeft(e, n),
                            isFirst: "0%" === t.getStepLeft(e, n)
                        },
                        style: {
                            left: t.getStepLeft(e, n)
                        }
                    }, [a("RewardBox", {
                        attrs: {
                            complete: +e.value <= t.valueInNumbers,
                            size: n + 1
                        }
                    }), t._v(" "), a("span", {
                        class: {
                            complete: +e.value <= t.valueInNumbers
                        }
                    }, [t._v("\n            $" + t._s(e.reward) + "\n          ")])], 1)
                })), 0), t._v(" "), a("div", {
                    staticClass: "progress-bar__volume"
                }, t._l(t.steps, (function(e, n) {
                    return a("div", {
                        key: e.value,
                        staticClass: "reward__item",
                        class: {
                            isLast: "100%" === t.getStepLeft(e, n),
                            isFirst: "0%" === t.getStepLeft(e, n)
                        },
                        style: {
                            left: t.getStepLeft(e, n)
                        }
                    }, [a("span", {
                        style: {
                            marginLeft: 0
                        }
                    }, [t._v("\n            $" + t._s(e.value) + "\n          ")])])
                })), 0), t._v(" "), t._l(t.steps, (function(e, n) {
                    return [a("div", {
                        key: e.value,
                        staticClass: "progress-bar__step",
                        style: {
                            left: t.getStepLeft(e, n)
                        }
                    })]
                })), t._v(" "), a("div", {
                    staticClass: "progress-bar__progress",
                    style: {
                        width: t.value + "%",
                        maxWidth: "100%"
                    }
                })], 2)])])
            },
            i = []
    },
    1251: function(t, e, a) {
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
                    staticClass: "atomic__ui atomic__circle-avatar",
                    style: {
                        width: this.size + "px",
                        height: this.size + "px"
                    }
                }, [e("img", {
                    attrs: {
                        src: this.src,
                        alt: "tokenImage"
                    }
                })])
            },
            i = []
    },
    1252: function(t, e, a) {
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
                    staticClass: "send-result-animation"
                }, [a("div", {
                    staticClass: "token__animation"
                }, [a("svg", {
                    class: {
                        success: t.isSuccess
                    },
                    attrs: {
                        width: "160",
                        height: "160",
                        viewBox: "0 0 160 160",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [a("circle", {
                    attrs: {
                        opacity: "0.8",
                        cx: "90.7697",
                        cy: "4.61538",
                        r: "4.61538"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.4",
                        cx: "76.9229",
                        cy: "15.3846",
                        r: "2.30769"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.8",
                        cx: "147.693",
                        cy: "40.7692",
                        r: "4.61538"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.4",
                        cx: "130.77",
                        cy: "36.9231",
                        r: "2.30769"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.8",
                        cx: "155.385",
                        cy: "107.692",
                        r: "4.61538"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.8",
                        cx: "107.693",
                        cy: "155.385",
                        r: "4.61538"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.8",
                        cx: "40.7697",
                        cy: "147.692",
                        r: "4.61538"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.4",
                        cx: "147.692",
                        cy: "91.5385",
                        r: "2.30769"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.4",
                        cx: "115.385",
                        cy: "139.231",
                        r: "2.30769"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.4",
                        cx: "58.462",
                        cy: "143.846",
                        r: "2.30769"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.8",
                        cx: "4.61538",
                        cy: "90.7692",
                        r: "4.61538"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.4",
                        cx: "18.462",
                        cy: "102.308",
                        r: "2.30769"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.8",
                        cx: "26.923",
                        cy: "26.9231",
                        r: "4.61538"
                    }
                }), t._v(" "), a("circle", {
                    attrs: {
                        opacity: "0.4",
                        cx: "26.9229",
                        cy: "45.3846",
                        r: "2.30769"
                    }
                })])]), t._v(" "), a("div", {
                    staticClass: "avatar__wrap"
                }, [t.isAvailable && t.src ? a("AtomicCircleAvatar", {
                    class: [t.isSuccess ? "result-success" : "result-error"],
                    attrs: {
                        src: t.src
                    }
                }) : a("div", {
                    staticClass: "empty__nft",
                    class: {
                        success: t.isSuccess
                    }
                })], 1)])
            },
            i = []
    },
    1254: function(t, e, a) {
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
                    staticClass: "exchange-dropdown"
                }, [a("div", {
                    staticClass: "exchange-dropdown__search"
                }, [a("svg", {
                    attrs: {
                        width: "21",
                        height: "21",
                        viewBox: "0 0 21 21",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [a("path", {
                    attrs: {
                        d: "M9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 10.987 16.8182 12.8147 15.6758 14.2621L20.2071 18.7929C20.5976 19.1834 20.5976 19.8166 20.2071 20.2071C19.8166 20.5976 19.1834 20.5976 18.7929 20.2071L14.2621 15.6758C12.8147 16.8182 10.987 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9C0.5 4.30558 4.30558 0.5 9 0.5ZM9 2.5C5.41015 2.5 2.5 5.41015 2.5 9C2.5 12.5899 5.41015 15.5 9 15.5C12.5899 15.5 15.5 12.5899 15.5 9C15.5 5.41015 12.5899 2.5 9 2.5Z",
                        fill: "#7A859F"
                    }
                })]), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.searchQuery,
                        expression: "searchQuery",
                        modifiers: {
                            trim: !0
                        }
                    }],
                    ref: "coinDropdown",
                    attrs: {
                        "data-test-id": "send_searchcoin",
                        placeholder: "Search",
                        type: "text"
                    },
                    domProps: {
                        value: t.searchQuery
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.searchQuery = e.target.value.trim())
                        },
                        blur: function(e) {
                            return t.$forceUpdate()
                        }
                    }
                })]), t._v(" "), a("div", {
                    staticClass: "exchange-dropdown__filters"
                }, t._l(t.filterConfig, (function(e) {
                    return a("span", {
                        key: e.key,
                        class: ["exchange-dropdown__filters-item", {
                            "exchange-dropdown__filters-active": e.key === t.activeFilter
                        }],
                        attrs: {
                            "data-test-id": "filter_" + e.key.toLocaleLowerCase()
                        },
                        on: {
                            click: function(a) {
                                return t.$emit("changeActiveFilter", e.key)
                            }
                        }
                    }, [t._v("\n      " + t._s(e.name) + "\n    ")])
                })), 0), t._v(" "), a("ul", {
                    staticClass: "exchange-dropdown__coins",
                    attrs: {
                        "data-test-id": "send_scrollcoin"
                    }
                }, [0 === t.filteredCoins.length ? a("li", {
                    staticClass: "exchange-dropdown__coin-empty"
                }, [t._v("\n      No assets found\n    ")]) : t._e(), t._v(" "), t._l(t.filteredCoins, (function(e, n) {
                    return a("li", {
                        key: e.id + n,
                        staticClass: "exchange-dropdown__coin",
                        attrs: {
                            "data-test-id": "send_" + e.ticker.toLowerCase()
                        },
                        on: {
                            click: function(a) {
                                return t.selectCoin(e)
                            }
                        }
                    }, [a("div", {
                        staticClass: "exchange-dropdown__coin-left"
                    }, [a("CoinIcon", {
                        attrs: {
                            wallet: e
                        }
                    }), t._v(" "), a("div", [a("div", {
                        staticClass: "exchange-dropdown__coin-top"
                    }, [a("div", [t._v("\n              " + t._s(e.ticker) + "\n            ")]), t._v(" "), t._l(t.getTags(e.ticker), (function(e) {
                        var n = e.tag,
                            i = e.bgColor;
                        return a("div", {
                            key: n,
                            class: "tag-element --" + n.toLowerCase(),
                            style: {
                                backgroundColor: i
                            }
                        }, [t._v("\n              " + t._s(n) + "\n            ")])
                    })), t._v(" "), a("TokenTag", {
                        attrs: {
                            wallet: e,
                            elemSize: "small"
                        }
                    })], 2), t._v(" "), a("div", {
                        staticClass: "exchange-dropdown__text-gray"
                    }, [t._v("\n            " + t._s(e.name) + "\n          ")])])], 1), t._v(" "), a("div", {
                        staticClass: "exchange-dropdown__coin-right"
                    }, [a("div", [t._v("\n          " + t._s(t._f("formatFinance")(t._f("formatMiddleAmount")(e.displayedBalance))) + "\n        ")]), t._v(" "), t.isUpdatingFiat || !e.change ? a("div", {
                        staticClass: "exchange-dropdown__coin-null"
                    }, [t._v("\n          --.--\n        ")]) : a("div", {
                        class: [{
                            "exchange-dropdown__coin-green": e.change > 0
                        }, {
                            "exchange-dropdown__coin-red": e.change <= 0
                        }]
                    }, [t._v("\n          " + t._s(e.change > 0 ? "+" : "") + t._s(e.change.toFixed(2)) + "%\n        ")])])])
                }))], 2)])
            },
            i = []
    },
    1255: function(t, e, a) {
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
                    staticClass: "section",
                    attrs: {
                        "data-test-id": "nft_empty"
                    }
                }, [t._m(0), t._v(" "), a("div", {
                    staticClass: "nft-overlay"
                }), t._v(" "), a("div", {
                    staticClass: "section__column section__column_center"
                }, [a("button", {
                    staticClass: "button m-b-30",
                    attrs: {
                        "data-test-id": "receive_nft"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("openReceivePopup")
                        }
                    }
                }, [t._v("\n      Receive NFT\n    ")]), t._v(" "), a("div", {
                    staticClass: "link",
                    attrs: {
                        "data-test-link": t.LINK,
                        "data-test-id": "what_is_nft"
                    },
                    on: {
                        click: function(e) {
                            return t.$electron.shell.openExternal(t.LINK)
                        }
                    }
                }, [t._v("\n      What is NFT?\n    ")])]), t._v(" "), t.isLoading ? a("div", {
                    staticClass: "section__column section__column_center empty__spinner"
                }, [a("AtomicSpinner"), t._v(" "), a("p", {
                    staticClass: "text text_medium text_gray"
                }, [t._v("\n      Checking your NFTs...\n    ")])], 1) : t._e()])
            },
            i = [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "section__item"
                }, [e("div", {
                    staticClass: "title"
                }, [this._v("\n      NFT Gallery\n    ")])])
            }]
    },
    1258: function(t, e, a) {
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
                    staticClass: "section section_popup p-t-85",
                    attrs: {
                        "data-test-id": "filters"
                    }
                }, [a("div", {
                    staticClass: "section__header section__header_panel"
                }, [a("div", {
                    staticClass: "title"
                }, [t._v("\n      Filters\n    ")]), t._v(" "), a("div", {
                    staticClass: "flex"
                }, [a("button", {
                    staticClass: "button button_small button_secondary m-r-10",
                    attrs: {
                        "data-test-id": "filter_close"
                    },
                    on: {
                        click: t.close
                    }
                }, [t._v("\n        Cancel\n      ")]), t._v(" "), a("button", {
                    staticClass: "button button_small",
                    attrs: {
                        "data-test-id": "filter_apply"
                    },
                    on: {
                        click: t.apply
                    }
                }, [t._v("\n        Apply\n      ")])])]), t._v(" "), a("div", {
                    staticClass: "section__body"
                }, [a("div", {
                    staticClass: "section__item m-b-30"
                }, [a("div", {
                    staticClass: "text text_medium"
                }, [t._v("\n        Blockchain\n      ")]), t._v(" "), a("div", {
                    staticClass: "link",
                    attrs: {
                        "data-test-id": t.isHiddenAll ? "hide_all" : "show_all"
                    },
                    on: {
                        click: function(e) {
                            return t.toggleShowAll(!t.isHiddenAll)
                        }
                    }
                }, [t._v("\n        " + t._s(t.isHiddenAll ? "Hide all" : "Show all") + "\n      ")])]), t._v(" "), a("div", {
                    staticClass: "section__item section__item_start flex-wrap gap-10"
                }, t._l(t.filterItems, (function(e) {
                    return a("ToggleLabel", {
                        key: e.id,
                        attrs: {
                            item: e,
                            isActive: t.currentActiveFilters.includes(e.id)
                        },
                        on: {
                            onEnabled: function(a) {
                                return t.updateItem(e.id, !0)
                            },
                            onDisabled: function(a) {
                                return t.updateItem(e.id, !1)
                            }
                        }
                    })
                })), 1)])])
            },
            i = []
    },
    1259: function(t, e, a) {
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
                    staticClass: "send-token-result",
                    attrs: {
                        "data-test-id": "send_result"
                    }
                }, [t.isSuccess ? n("section", {
                    staticClass: "send-token-result__success"
                }, [n("SendResultAnimation", {
                    attrs: {
                        src: t.token.getImageUrl(),
                        isAvailable: t.token.isFormatSupported,
                        isSuccess: t.isSuccess,
                        "data-test-id": "send_animation"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "info__group"
                }, [n("div", {
                    staticClass: "title new-text-headline new-text-extra-large"
                }, [t._v("\n        Token sent\n      ")]), t._v(" "), n("div", {
                    staticClass: "text new-title-medium new-text-white"
                }, [t._v("\n        " + t._s(t.sendText) + "\n      ")])]), t._v(" "), t.hash.length ? n("div", {
                    staticClass: "transaction_info"
                }, [n("a", {
                    staticClass: "new-title-small new-title-bold new-text-gray no-hover",
                    attrs: {
                        "data-test-id": "transaction_hash"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.openTransactionHash.apply(null, arguments)
                        }
                    }
                }, [t._v("Transaction\n        hash:")]), t._v(" "), n("div", {
                    staticClass: "transaction_info__body"
                }, [n("a", {
                    staticClass: "text-link-underline",
                    attrs: {
                        "data-test-id": "hash_address"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.openTransactionHash.apply(null, arguments)
                        }
                    }
                }, [t._v(t._s(t.hash))]), t._v(" "), n("div", [n("a", {
                    staticClass: "transaction_info__body__icon-button",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.copyTxid.apply(null, arguments)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: a(2261),
                        alt: "copy"
                    }
                })])]), t._v(" "), n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.copied ? n("div", {
                    staticClass: "transaction_info__body__message"
                }, [t._v("\n            Copied to clipboard\n          ")]) : t._e()])], 1)]) : t._e(), t._v(" "), n("RateStars"), t._v(" "), n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "new-button new-button-large new-button-yellow new-button-max300",
                    attrs: {
                        "data-test-id": "send_another"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("backToForm")
                        }
                    }
                }, [t._v("\n        Send another one\n      ")])])], 1) : n("section", {
                    staticClass: "send-token-result__error"
                }, [n("SendResultAnimation", {
                    attrs: {
                        src: t.token.getImageUrl(),
                        isAvailable: t.token.isFormatSupported,
                        isSuccess: t.isSuccess
                    }
                }), t._v(" "), t._m(0), t._v(" "), n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "new-button new-button-large new-button-blue new-button-max300",
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("openSupportPopup", t.contactSupport)
                        }
                    }
                }, [t._v("\n        Contact support\n      ")]), t._v(" "), n("div", {
                    staticClass: "space"
                }), t._v(" "), n("button", {
                    staticClass: "new-button new-button-large new-button-yellow new-button-max300",
                    attrs: {
                        "data-test-id": "try_again"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("tryAgain")
                        }
                    }
                }, [t._v("\n        Try again\n      ")])]), t._v(" "), n("a", {
                    staticClass: "new-title-medium new-title-bold new-text-blue",
                    on: {
                        click: function(e) {
                            return t.$electron.shell.openExternal("https://support.atomicwallet.io/article/279-i-am-getting-couldnt-send-your-token-error")
                        }
                    }
                }, [t._v("Troubleshooting")])], 1)])
            },
            i = [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "info__group"
                }, [e("div", {
                    staticClass: "title new-text-headline new-text-extra-large"
                }, [this._v("\n        Couldn't send your token\n      ")]), this._v(" "), e("div", {
                    staticClass: "text new-title-medium new-text-white"
                }, [this._v("\n        Try sending your token later. You can also try turning your\n        VPN on or off or restarting Atomic Wallet.\n      ")])])
            }]
    },
    1260: function(t, e, a) {
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
                    staticClass: "nft-gallery"
                }, [a("div", {
                    staticClass: "nft-gallery__header"
                }, [a("Search", {
                    staticClass: "search_modern",
                    attrs: {
                        "data-test-id": "search_nft"
                    },
                    model: {
                        value: t.searchQuery,
                        callback: function(e) {
                            t.searchQuery = e
                        },
                        expression: "searchQuery"
                    }
                }), t._v(" "), a("div", {
                    staticClass: "nft-gallery__filter"
                }, [a("div", {
                    staticClass: "icon icon_filters",
                    attrs: {
                        "data-test-id": "nft_filter"
                    },
                    on: {
                        click: t.toggleFilter
                    }
                }), t._v(" "), a("button", {
                    staticClass: "button button_medium",
                    attrs: {
                        "data-test-id": "receive_nft"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("toggleReceivePopup")
                        }
                    }
                }, [t._v("\n        Receive NFT\n      ")])])], 1), t._v(" "), t.filteredNFTs.length ? a("div", {
                    staticClass: "nft-gallery__scroll-area",
                    on: {
                        scroll: t.handleScrollEnd
                    }
                }, [t.isAllHided ? t._e() : a("div", {
                    staticClass: "nft-gallery__thumbnails"
                }, [t._l(t.filteredNFTs, (function(e) {
                    return [a("Thumbnail", {
                        key: e.id,
                        attrs: {
                            available: e.isFormatSupported,
                            url: e.getImageUrl(),
                            description: e.name,
                            label: e.ticker,
                            type: e.fileType,
                            "data-test-id": "nft_image_" + e.ticker
                        },
                        on: {
                            handleClick: function(a) {
                                return t.$emit("toggleInfo", e.id)
                            }
                        }
                    })]
                }))], 2)]) : a("div", {
                    staticClass: "nft-gallery__not-found"
                }, [a("div", {
                    staticClass: "new-text-gray2 new-text-medium2"
                }, [t._v("\n      Nothing found\n    ")])]), t._v(" "), t.showFilter ? a("FilterUI", {
                    attrs: {
                        filterItems: t.nftFilter,
                        activeFilter: t.activeFilter,
                        isHided: t.isAllHided
                    },
                    on: {
                        onClose: t.closeFilter,
                        onApply: t.updateFilters
                    }
                }) : t._e()], 1)
            },
            i = []
    },
    1261: function(t, e, a) {
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
                    staticClass: "section section_popup",
                    attrs: {
                        "data-test-id": "nft_receive"
                    }
                }, [a("div", {
                    staticClass: "section__close",
                    attrs: {
                        "data-test-id": "close_receive_nft"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("onClose")
                        }
                    }
                }, [t._v("\n    ✕\n  ")]), t._v(" "), a("div", {
                    staticClass: "section__item section__item_center m-b-50"
                }, [a("div", {
                    directives: [{
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: t.closeDropdown,
                        expression: "closeDropdown"
                    }],
                    staticClass: "flex align-center"
                }, [a("div", {
                    staticClass: "icon icon_coin m-r-15",
                    class: t.icon,
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.toggleDropdown.apply(null, arguments)
                        }
                    }
                }), t._v(" "), a("a", {
                    staticClass: "title title_big",
                    attrs: {
                        "data-test-id": "receive_coin"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.toggleDropdown.apply(null, arguments)
                        }
                    }
                }, [t._v("\n        " + t._s(t.activeCoin.name) + "\n        "), t.dropdownItems.length > 1 ? a("span", {
                    class: ["toggle-arrow", t.isChangeCoin && "toggle-arrow_opened"]
                }) : t._e()]), t._v(" "), t.dropdownItems.length > 1 && t.isChangeCoin ? a("DropdownUI", {
                    attrs: {
                        items: t.dropdownItems,
                        searchBy: ["title", "description"]
                    },
                    on: {
                        onSelect: t.selectCoin
                    }
                }) : t._e()], 1)]), t._v(" "), a("div", {
                    staticClass: "section__item section__item_center m-b-20"
                }, [a("div", {
                    staticClass: "text text_small",
                    attrs: {
                        "data-test-id": "nft_receive_address"
                    }
                }, [t._v("\n      Your " + t._s(t.activeCoin.ticker) + " Address\n    ")])]), t._v(" "), a("div", {
                    staticClass: "section__item section__item_center m-b-25"
                }, [a("img", {
                    staticClass: "qr-code",
                    attrs: {
                        src: t.qrCodeImage
                    }
                })]), t._v(" "), a("div", {
                    staticClass: "section__item section__item_center m-b-25"
                }, [a("a", {
                    staticClass: "text",
                    on: {
                        click: t.copyToClipboard
                    }
                }, [t._v("\n      " + t._s(t.activeCoin.address) + "\n      "), a("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.addressCopyTimeoutId ? a("div", {
                    staticClass: "message"
                }, [t._v("\n          Your address copied to Clipboard\n        ")]) : t._e()])], 1)]), t._v(" "), a("div", {
                    staticClass: "section__item section__item_center"
                }, [a("button", {
                    staticClass: "button m-b-25",
                    on: {
                        click: t.copyToClipboard
                    }
                }, [t._v("\n      Copy address\n    ")])])])
            },
            i = []
    },
    1263: function(t, e, a) {
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
                return a("AtomicPopup", {
                    staticClass: "nft__send-token",
                    attrs: {
                        "data-test-id": "send_nft"
                    },
                    on: {
                        close: t.closeSendToken
                    }
                }, [1 == t.stage ? a("div", {
                    class: "stage" + t.stage + "__wrap",
                    attrs: {
                        name: "stage1"
                    }
                }, [a("section", {
                    staticClass: "send-token__header stage1"
                }, [t.token.isFormatSupported ? a("AtomicCircleAvatar", {
                    attrs: {
                        src: t.token.getImageUrl()
                    }
                }) : a("div", {
                    staticClass: "empty__nft"
                }), t._v(" "), a("div", [a("div", {
                    staticClass: "title new-text-headline new-text-extra-large"
                }, [t._v("\n          Send NFT\n        ")]), t._v(" "), a("div", {
                    staticClass: "text new-text-medium new-text-gray"
                }, [t._v("\n          " + t._s(t.transferText) + "\n        ")])])], 1), t._v(" "), a("section", {
                    staticClass: "send-token__body stage1"
                }, [a("AtomicEdit", {
                    attrs: {
                        error: t.addressError,
                        isPasteByClick: !0,
                        placeholder: "Click here to paste address",
                        "data-test-id": "coin_address"
                    },
                    on: {
                        "enter-pressed": t.goToPassword,
                        input: t.validateAddress
                    },
                    model: {
                        value: t.address,
                        callback: function(e) {
                            t.address = e
                        },
                        expression: "address"
                    }
                })], 1), t._v(" "), a("section", {
                    staticClass: "send-token__wallet-info stage1"
                }, [a("div", {
                    staticClass: "text new-text-small new-text-gray"
                }, [t._v("\n        Available: " + t._s(t._f("formatFinanceTrim")(t.available, 6)) + " " + t._s(t.coin.ticker) + " /\n        "), a("span", {
                    staticClass: "text new-text-small new-text-gray",
                    domProps: {
                        innerHTML: t._s("" + t.fiatCharacter + t.getValueFiat(t.available, t.coin))
                    }
                })]), t._v(" "), a("div", {
                    staticClass: "text new-text-small new-text-gray"
                }, [t._v("\n        Network fee:\n        "), t.fee ? a("span", {
                    staticClass: "text new-text-small new-text-gray"
                }, [t._v("\n          " + t._s(t.fee) + " " + t._s(t.coin.deprecatedParent) + " /\n          "), a("span", {
                    staticClass: "text new-text-small new-text-gray",
                    domProps: {
                        innerHTML: t._s("" + t.fiatCharacter + t.getValueFiat(t.fee, t.coin))
                    }
                })]) : a("LoadingEllipsis")], 1)]), t._v(" "), a("section", {
                    staticClass: "send-token__control stage1"
                }, [t.isFeeEnough ? t._e() : a("div", {
                    staticClass: "error"
                }, [t._v("\n        You should have at least " + t._s(Number(Number(t.fee).toFixed(6))) + "\n        " + t._s(t.coin.deprecatedParent) + " to pay network fee\n      ")]), t._v(" "), a("button", {
                    staticClass: "new-button new-button-large new-button-yellow new-button-max300",
                    attrs: {
                        "data-test-id": "send_nft"
                    },
                    on: {
                        click: t.goToPassword
                    }
                }, [t._v("\n        Send\n      ")])])]) : t._e(), t._v(" "), 2 === t.stage ? a("div", {
                    class: "stage" + t.stage + "__wrap",
                    attrs: {
                        name: "stage2"
                    }
                }, [a("section", {
                    staticClass: "send-token__body stage2"
                }, [a("div", {
                    staticClass: "text new-title-extra-large"
                }, [t._v("\n        Confirm sending\n      ")]), t._v(" "), a("section", {
                    staticClass: "send-token__header stage2"
                }, [a("div", {
                    staticClass: "flex justify-center width-big"
                }, [t.token.isFormatSupported ? a("AtomicCircleAvatar", {
                    attrs: {
                        src: t.token.getImageUrl(),
                        size: 100
                    }
                }) : a("div", {
                    staticClass: "empty__nft"
                })], 1)]), t._v(" "), a("div", {
                    staticClass: "title new-text-headline m-t-20"
                }, [t._v("\n        " + t._s(t.token.name) + "\n      ")]), t._v(" "), a("AtomicLabelGroup", {
                    attrs: {
                        value: t.shortener(t.address, 34),
                        label: "To address",
                        "data-test-id": "token_address"
                    }
                }), t._v(" "), a("AtomicLabelGroup", {
                    attrs: {
                        value: t.shortener(t.token.tokenId, 36),
                        label: "Token ID",
                        "data-test-id": "token_id"
                    }
                }), t._v(" "), t._e()], 1), t._v(" "), a("section", {
                    staticClass: "send-token__password stage2"
                }, [a("div", {
                    staticClass: "password_wrap"
                }, [a("AtomicEdit", {
                    ref: "confirmPassword",
                    attrs: {
                        focus: !0,
                        error: t.passwordError,
                        isShowPassword: !0,
                        type: "password",
                        placeholder: "Password",
                        "data-test-id": "password"
                    },
                    on: {
                        "enter-pressed": t.sendToken
                    },
                    model: {
                        value: t.password,
                        callback: function(e) {
                            t.password = e
                        },
                        expression: "password"
                    }
                })], 1)]), t._v(" "), a("section", {
                    staticClass: "send-token__control stage2"
                }, [a("button", {
                    staticClass: "new-button new-button-large new-button-yellow new-button-max300",
                    attrs: {
                        "data-test-id": "confirm"
                    },
                    on: {
                        click: t.sendToken
                    }
                }, [t._v("\n        Confirm\n      ")])])]) : t._e(), t._v(" "), 3 === t.stage ? a("div", {
                    attrs: {
                        name: "stage3"
                    }
                }, [a("section", {
                    staticClass: "send-token__sending stage3"
                }, [a("AtomicLoader"), t._v(" "), a("div", {
                    staticClass: "new-title-extra-large text"
                }, [t._v("\n        Sending...\n      ")]), t._v(" "), a("div", {
                    staticClass: "sending-process-text new-text-medium new-text-gray"
                }, [t._v("\n        " + t._s(t.sendingProcessText) + "\n      ")])], 1)]) : t._e(), t._v(" "), 4 === t.stage ? a("div", {
                    class: "stage" + t.stage + "__wrap",
                    attrs: {
                        name: "stage4 result"
                    }
                }, [a("SendTokenResult", {
                    attrs: {
                        hash: t.txHash,
                        token: t.token,
                        isSuccess: t.success,
                        "data-test-id": t.success ? "send_success" : "send_failed"
                    },
                    on: {
                        tryAgain: t.tryAgain,
                        backToForm: function(e) {
                            return t.$emit("closeAll")
                        }
                    }
                })], 1) : t._e()])
            },
            i = []
    },
    1397: function(t, e) {
        t.exports = require("os")
    },
    1400: function(t, e) {
        t.exports = require("string_decoder")
    },
    142: function(t, e) {
        t.exports = require("fs")
    },
    145: function(t, e) {
        t.exports = require("stream")
    },
    1691: function(t, e) {
        t.exports = require("zlib")
    },
    1700: function(t, e) {
        t.exports = require("tls")
    },
    204: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), Object.defineProperty(e, "AtomicButton", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }), Object.defineProperty(e, "AtomicCircleAvatar", {
            enumerable: !0,
            get: function() {
                return y.default
            }
        }), Object.defineProperty(e, "AtomicEdit", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(e, "AtomicFlagIcon", {
            enumerable: !0,
            get: function() {
                return m.default
            }
        }), Object.defineProperty(e, "AtomicHint", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }), Object.defineProperty(e, "AtomicInfoGroup", {
            enumerable: !0,
            get: function() {
                return v.default
            }
        }), Object.defineProperty(e, "AtomicLabelGroup", {
            enumerable: !0,
            get: function() {
                return h.default
            }
        }), Object.defineProperty(e, "AtomicLink", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(e, "AtomicLinkedCard", {
            enumerable: !0,
            get: function() {
                return g.default
            }
        }), Object.defineProperty(e, "AtomicLoader", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }), Object.defineProperty(e, "AtomicModal", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }), Object.defineProperty(e, "AtomicPopup", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        }), Object.defineProperty(e, "AtomicRewardsBar", {
            enumerable: !0,
            get: function() {
                return b.default
            }
        }), Object.defineProperty(e, "AtomicSimpleCard", {
            enumerable: !0,
            get: function() {
                return x.default
            }
        }), Object.defineProperty(e, "AtomicSpinner", {
            enumerable: !0,
            get: function() {
                return _.default
            }
        }), Object.defineProperty(e, "AtomicTabs", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }), Object.defineProperty(e, "DropdownUI", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }), Object.defineProperty(e, "ExchangeCoinDropdown", {
            enumerable: !0,
            get: function() {
                return C.default
            }
        }), Object.defineProperty(e, "SendResultAnimation", {
            enumerable: !0,
            get: function() {
                return w.default
            }
        }), Object.defineProperty(e, "Thumbnail", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        });
        var i = n(a(4600)),
            r = n(a(4603)),
            s = n(a(2144)),
            o = n(a(4608)),
            c = n(a(4611)),
            l = n(a(2147)),
            d = n(a(4614)),
            u = n(a(4617)),
            f = n(a(2148)),
            p = n(a(2141)),
            _ = n(a(4622)),
            m = n(a(4625)),
            v = n(a(4627)),
            h = n(a(5076)),
            g = n(a(2255)),
            b = n(a(2257)),
            x = n(a(2256)),
            y = n(a(2258)),
            w = n(a(5090)),
            C = n(a(5093))
    },
    2133: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, e.useStore = function() {
            return o
        };
        var i = n(a(187)),
            r = n(a(31)),
            s = n(a(4559));
        i.default.use(r.default);
        const o = new r.default.Store({
            modules: s.default
        });
        var c = o;
        e.default = c
    },
    2135: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(151));
        e.default = class BaseText {
            constructor() {
                (0, i.default)(this, "text", null), (0, i.default)(this, "currentTicker", null)
            }
            setText(t) {
                this.text = t
            }
            setTicker(t) {
                this.currentTicker = t
            }
        }
    },
    2141: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(756),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1229),
            o = a(3),
            c = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
        e.default = c.exports
    },
    2144: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(761),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1235),
            o = a(3);
        var c = function(t) {
                a(4606)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-b0291e26", null);
        e.default = l.exports
    },
    2147: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(764),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1238),
            o = a(3);
        var c = function(t) {
                a(4612)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-e8bf5fec", null);
        e.default = l.exports
    },
    2148: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(767),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1241),
            o = a(3);
        var c = function(t) {
                a(4620)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, null, null);
        e.default = l.exports
    },
    2255: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(773),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1248),
            o = a(3);
        var c = function(t) {
                a(5079)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-54ba5706", null);
        e.default = l.exports
    },
    2256: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(774),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1247),
            o = a(3);
        var c = function(t) {
                a(5081)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, null, null);
        e.default = l.exports
    },
    2257: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(775),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1250),
            o = a(3);
        var c = function(t) {
                a(5083)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-664e14d0", null);
        e.default = l.exports
    },
    2258: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(777),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1251),
            o = a(3);
        var c = function(t) {
                a(5088)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-2e4cf8bd", null);
        e.default = l.exports
    },
    2259: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), Object.defineProperty(e, "FilterUI", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }), Object.defineProperty(e, "SendTokenResult", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        });
        var i = n(a(5097)),
            r = n(a(5099))
    },
    2260: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), Object.defineProperty(e, "SendNFTTokenMixin", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        });
        var i = n(a(5102))
    },
    24: function(t, e) {
        t.exports = require("crypto")
    },
    256: function(t, e) {
        t.exports = require("http")
    },
    298: function(t, e) {
        t.exports = require("electron")
    },
    325: function(t, e) {
        t.exports = require("https")
    },
    338: function(t, e) {
        t.exports = require("querystring")
    },
    359: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(744),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1218),
            o = a(3);
        var c = function(t) {
                a(4557)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-7b1971d6", null);
        e.default = l.exports
    },
    43: function(t, e) {
        t.exports = require("util")
    },
    4557: function(t, e, a) {
        var n = a(4558);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("26130ff2", n, !0, {})
    },
    4558: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "\n.atomic-notify-point__wrap[data-v-7b1971d6]{display:flex;gap:6px\n}\n.atomic-notify-point__slot[data-v-7b1971d6]{display:flex;gap:6px\n}\n.atomic-notify-point--center[data-v-7b1971d6]{align-items:center\n}\n.atomic-notify-point__label[data-v-7b1971d6]{height:16px;width:33px;border-width:1px;border-style:solid;border-color:transparent;border-radius:4px;display:flex;justify-content:center;align-items:center;text-align:center\n}\n.atomic-notify-point__label-wrap[data-v-7b1971d6]{transition:transform linear 0.3s;transform:scale(0)\n}\n.atomic-notify-point__label-wrap--visible[data-v-7b1971d6]{transition:transform linear 0.3s;transform:scale(1)\n}\n.atomic-notify-point__label--new[data-v-7b1971d6]{background:linear-gradient(76.77deg, #F6D365 0%, #FAB975 100%)\n}\n.atomic-notify-point__label--hot[data-v-7b1971d6]{background:#BE3849;border-color:rgba(255,255,255,0.12)\n}\n.atomic-notify-point__label--secondary[data-v-7b1971d6]{background:#F5922F;border-color:rgba(255,255,255,0.12);width:8px;height:8px;margin-top:1.25rem\n}\n.atomic-notify-point__label--secondary>span[data-v-7b1971d6]{display:none\n}\n.atomic-notify-point__label>span[data-v-7b1971d6]{letter-spacing:1px;font-size:10px;font-weight:400;color:#1F2843;text-transform:uppercase;line-height:16px\n}\n", ""])
    },
    4559: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(4560)),
            r = n(a(4561)),
            s = n(a(4562)),
            o = n(a(4563)),
            c = n(a(4565)),
            l = n(a(4567)),
            d = n(a(4568)),
            u = n(a(4569)),
            f = n(a(4570)),
            p = n(a(4571)),
            _ = {
                ChartData: i.default,
                Exchanges: r.default,
                InviteFriends: s.default,
                Nft: o.default,
                Notify: c.default,
                Rates: l.default,
                Settings: d.default,
                Simplex: u.default,
                Wallets: f.default,
                Wizard: p.default
            };
        e.default = _
    },
    4560: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(944));
        const r = {
            "24H": "last24Hour",
            "1W": "lastWeek",
            "1M": "lastMonth",
            "1Y": "lastYear",
            ALL: "allTime"
        };
        var s = {
            state: () => ({
                isChartDataLoading: {
                    "24H": !1,
                    "1W": !1,
                    "1M": !1,
                    "1Y": !1,
                    ALL: !1
                },
                initChartIntervalID: null,
                updateChartData: 0
            }),
            actions: {
                async initChartData({
                    state: t,
                    dispatch: e,
                    commit: a,
                    rootGetters: n
                }) {
                    t.initChartIntervalID && clearTimeout(t.initChartIntervalID), a("SET_CHART_DATA_LOADING", {
                        value: !0,
                        chartEndpoint: "1W"
                    }), await i.default.getHistoryDataFromNet(this._vm.$wallets.getTickers(), n.fiatRate, !0, !1, [r["1W"]]);
                    a("SET_INIT_CHART_INTERVAL_ID", setTimeout(async () => {
                        await e("initChartData")
                    }, 18e4)), a("SET_CHART_DATA_LOADING", {
                        value: !1,
                        chartEndpoint: "1W"
                    }), a("SET_UPDATE_CHART_DATA")
                },
                async updateChartData({
                    state: t,
                    commit: e,
                    getters: a,
                    dispatch: n,
                    rootGetters: s
                }, {
                    ticker: o,
                    zoom: c
                }) {
                    if ("1W" === c) {
                        t.initChartIntervalID && clearTimeout(t.initChartIntervalID);
                        e("SET_INIT_CHART_INTERVAL_ID", setTimeout(async () => {
                            await n("initChartData")
                        }, 18e4))
                    }
                    Object.keys(a.chartDataTicker(o)).includes(r[c]) || "1W" === c ? await i.default.getHistoryDataFromNetByEndpoint(o, r[c], s.fiatRate) : (e("SET_CHART_DATA_LOADING", {
                        value: !0,
                        chartEndpoint: c
                    }), await i.default.getHistoryDataFromNetByEndpoint(o, r[c], s.fiatRate), e("SET_CHART_DATA_LOADING", {
                        value: !1,
                        chartEndpoint: c
                    })), e("SET_UPDATE_CHART_DATA")
                }
            },
            mutations: {
                SET_CHART_DATA_LOADING(t, {
                    value: e,
                    chartEndpoint: a
                }) {
                    t.isChartDataLoading[a] = e
                },
                SET_INIT_CHART_INTERVAL_ID(t, e) {
                    t.initChartIntervalID = e
                },
                SET_UPDATE_CHART_DATA(t) {
                    t.updateChartData += 1
                }
            },
            getters: {
                chartDataEndpoints: () => r,
                isChartDataPrice: () => t => i.default.isPriceChart(t),
                isChartDataLoading: t => t.isChartDataLoading,
                chartDataMainEndpoint: () => "1W",
                chartDataTicker: () => t => {
                    var e;
                    return null !== (e = i.default.getCoinChartData(t)) && void 0 !== e ? e : {}
                },
                chartDataTickerByZoom: (t, {
                    chartDataTicker: e
                }) => ({
                    zoom: a = "1W",
                    ticker: n
                }) => {
                    var i, s;
                    const o = (null !== (i = null === (s = e(n)) || void 0 === s ? void 0 : s[r[a]]) && void 0 !== i ? i : []).map(({
                        close: t,
                        time: e
                    }, a) => ({
                        dates: e,
                        point: {
                            x: isNaN(a) ? 0 : a,
                            y: isNaN(+t) ? 0 : +t
                        }
                    }));
                    return {
                        data: o,
                        points: o.map(({
                            point: t
                        }) => ({
                            ...t
                        })),
                        dates: o.map(({
                            dates: t
                        }) => t),
                        updateChartData: t.updateChartData
                    }
                }
            }
        };
        e.default = s
    },
    4561: function(t, e, a) {
        "use strict";

        function n(t) {
            return t.map(t => (t.status = function(t) {
                switch (t && t.toLowerCase()) {
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
            }(t.status), t))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            state: {
                exchangeTransactions: [],
                exchangeTransactionsLoading: !0,
                modifiedTransaction: {
                    id: "a9b1f66ee3294c",
                    status: "failed",
                    type: "continue"
                },
                isMocked: !1
            },
            strict: !1,
            actions: {
                initExchangeTransactions({
                    commit: t
                }) {
                    var e;
                    t("SET_EXCHANGE_TRANSACTIONS", n(JSON.parse(null !== (e = localStorage.getItem("exchange::txs")) && void 0 !== e ? e : "[]")))
                },
                async getExchangeTransactions({
                    state: t,
                    commit: e
                }, {
                    atomicId: a,
                    params: i
                }) {
                    e("SET_EXCHANGE_TRANSACTIONS_LOADING", !0);
                    try {
                        await this._vm.$exchanges.getExchangeTransactionsFromNet(a, i)
                    } catch (t) {
                        console.log("[APOLLO] getExchangeTransactionsFromNet error ", t)
                    } finally {
                        e("SET_EXCHANGE_TRANSACTIONS_LOADING", !1)
                    }
                    try {
                        const a = (await this._vm.$exchanges.getExchangeTransactionFromDb()).sort((t, e) => new Date(e.timestamp) - new Date(t.timestamp));
                        if (t.isMocked && t.modifiedTransaction.id) {
                            const e = a.findIndex(e => e.id === t.modifiedTransaction.id);
                            a[e] = {
                                ...a[e],
                                ...t.modifiedTransaction
                            }
                        }
                        e("SET_EXCHANGE_TRANSACTIONS", n(a))
                    } catch (t) {
                        console.log("getExchangeTransactionFromDb error:", t)
                    }
                },
                updateExchangeTransactions({
                    commit: t
                }, e) {
                    const a = n(e);
                    this._vm.$exchanges.updateExchangeTransactionsInDb(a), t("UPDATE_EXCHANGE_TRANSACTIONS", a)
                }
            },
            mutations: {
                SET_EXCHANGE_TRANSACTIONS(t, e) {
                    t.exchangeTransactions = e, localStorage.setItem("exchange::txs", JSON.stringify(e))
                },
                SET_EXCHANGE_TRANSACTIONS_LOADING(t, e) {
                    t.exchangeTransactionsLoading = e
                },
                UPDATE_EXCHANGE_TRANSACTIONS(t, e) {
                    const a = [];
                    e.forEach(t => {
                        a[t.id] = t
                    }), t.exchangeTransactions.forEach(t => {
                        a[t.id] && (t = a[t.id])
                    }), localStorage.setItem("exchange::txs", JSON.stringify(t.exchangeTransactions))
                }
            },
            getters: {
                exchangeTransactions: t => t.exchangeTransactions,
                exchangeTransactionsLoading: t => t.exchangeTransactionsLoading,
                hasTransaction: (t, e) => e.simplexTransactions.length > 0 || t.exchangeTransactions.length > 0,
                isMocked: t => t.isMocked
            }
        };
        e.default = i
    },
    4562: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            state: {
                affiliate: !1,
                affiliateStatistic: {},
                affiliateInformation: {},
                exchangeBonusState: {},
                referral: !1
            },
            mutations: {
                SET_AFFILIATE(t, e) {
                    t.affiliate = e
                },
                SET_AFFILIATE_STATS(t, e) {
                    t.affiliateStatistic = e
                },
                SET_AFFILIATE_INFO(t, e) {
                    t.affiliateInformation = e
                },
                SET_REFERRAL(t, e) {
                    t.referral = e
                },
                SET_EXCHANGE_BONUS(t, e) {
                    t.exchangeBonusState = e
                }
            },
            actions: {
                async setAffiliate(t) {
                    const {
                        commit: e,
                        dispatch: a
                    } = t, n = await this._vm.$inviteFriends.getIsAffiliate();
                    n && (a("setAffiliateStats"), a("setAffiliateInfo"), a("setExchangeBonus")), e("SET_AFFILIATE", n)
                },
                async setAffiliateStats({
                    commit: t
                }) {
                    t("SET_AFFILIATE_STATS", await this._vm.$inviteFriends.getAffiliateStatistics())
                },
                async setAffiliateInfo({
                    commit: t
                }) {
                    t("SET_AFFILIATE_INFO", await this._vm.$inviteFriends.getAffiliateInfo())
                },
                async setReferral(t) {
                    const {
                        commit: e,
                        dispatch: a
                    } = t, n = await this._vm.$inviteFriends.getIsReferral();
                    n && a("setExchangeBonus"), e("SET_REFERRAL", n)
                },
                async setExchangeBonus({
                    commit: t
                }) {
                    t("SET_EXCHANGE_BONUS", await this._vm.$inviteFriends.getExchangeBonusesState())
                }
            },
            getters: {
                isAffiliate: t => t.affiliate,
                isReferral: t => t.referral,
                affiliateStat: t => t.affiliateStatistic,
                affiliateInfo: t => t.affiliateInformation,
                exchangeBonus: t => t.exchangeBonusState
            }
        };
        e.default = n
    },
    4563: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = a(38),
            r = n(a(4564)),
            s = n(a(104));
        var o = {
            state: {
                nfts: JSON.parse(localStorage.getItem("atomicnfts")) || [],
                nfts_support: JSON.parse(localStorage.getItem("atomicnftssupport")) || {}
            },
            mutations: {
                SET_NFTS(t, e = []) {
                    t.nfts = e, localStorage.setItem("atomicnfts", JSON.stringify(e || []))
                },
                SET_NFTS_SUPPORT(t, e) {
                    t.nfts_support = {
                        ...t.nfts_support,
                        ...e
                    }, localStorage.setItem("atomicnftssupport", JSON.stringify({
                        ...t.nfts_support,
                        ...e
                    }))
                }
            },
            actions: {
                async setNFT({
                    commit: t,
                    state: e
                }, {
                    isInitUpdate: a = !1,
                    isStopUpdate: n = !1
                }) {
                    let o = [];
                    a && await this._vm.$wallets.initUpdateNft();
                    for (let t of this._vm.$wallets) {
                        if (t.isNftSupported()) try {
                            const e = await i.NftHistory.get([t]);
                            o = o.concat(e)
                        } catch (t) {
                            console.log(t)
                        }
                    }
                    const c = e.nfts_support;
                    for (const t of o) {
                        var l, d;
                        const e = s.default.normalize((null == t ? void 0 : t.getImageUrl()) || "");
                        (!c[e] || (null === (l = c[e]) || void 0 === l || !l.time) && Date.now() - +(null === (d = c[e]) || void 0 === d ? void 0 : d.time) > 6e5) && (c[e] = await (0, r.default)(t.getImageUrl()))
                    }
                    o = o.map((t, e) => {
                        const a = s.default.normalize((null == t ? void 0 : t.getImageUrl()) || "");
                        return Object.assign(t, c[a])
                    }), t("SET_NFTS_SUPPORT", c), n && await this._vm.$wallets.stopUpdateNft(), t("SET_NFTS", o)
                }
            },
            getters: {
                allNft: t => t.nfts
            }
        };
        e.default = o
    },
    4564: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = async function(t) {
            try {
                const e = await fetch(t),
                    a = await e.blob();
                if (e.ok) {
                    const e = a.type,
                        i = n.includes(e) || function(t, e = "") {
                            return r(e).includes("image")
                        }(0, t);
                    return {
                        fileType: e,
                        isFormatSupported: i,
                        time: Date.now()
                    }
                }
            } catch (t) {
                return console.error(t), {
                    fileType: "",
                    isFormatSupported: !1,
                    time: Date.now()
                }
            }
        };
        const n = ["image/gif", "image/jpeg", "image/png", "image/svg+xml", "video/*", "image/jpg", "image/webp"],
            i = /(\.)\D{3,5}$/;

        function r(t) {
            var e;
            const a = t.match(i);
            if (!a) return "";
            const n = null === (e = a[0]) || void 0 === e ? void 0 : e.slice(1);
            return ["png", "jpg", "jpeg", "gif", "webp"].includes(n) ? "image/" + n : n
        }
    },
    4565: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(38),
            i = a(4566);
        const r = ["article", "walletTableTickerInfo"];
        var s = {
            state: {
                notifyTree: {},
                walletsNotify: [],
                completedNotifyReasons: ["someReason"]
            },
            mutations: {
                SET_WALLETS_NOTIFY(t, e) {
                    const a = t.completedNotifyReasons.filter(t => r.includes(t.split("-")[0])).map(t => {
                        const e = t.split("-");
                        return `${e[0]}-${e[1].split("-").join("")}-${e[2]?e[2]:""}`
                    });
                    for (let t in a) e = e.filter(e => e !== a[t]);
                    localStorage.setItem("notify_point_wallets", JSON.stringify(e)), t.walletsNotify = e
                },
                SET_NOTIFY_TREE(t, e) {
                    t.notifyTree = e
                },
                SET_COMPLETED_REASON(t, e) {
                    t.completedNotifyReasons = Array.from(new Set([...t.completedNotifyReasons, ...e])), localStorage.setItem("notify_point", JSON.stringify(t.completedNotifyReasons))
                },
                CLEAR_COMPLETED_REASON(t) {
                    t.completedNotifyReasons = ["someReason"], localStorage.setItem("notify_point", JSON.stringify(t.completedNotifyReasons))
                },
                ADD_COMPLETED_REASON(t, e) {
                    const a = t.completedNotifyReasons;
                    a.includes(e) || a.push(e), localStorage.setItem("notify_point", JSON.stringify(a))
                }
            },
            actions: {
                async setNotifyTree({
                    commit: t,
                    getters: e
                }) {
                    const a = await n.ConfigManager.get("about-tab"),
                        r = Array.from(this._vm.$wallets).filter(t => {
                            var e, a;
                            return !0 === (null === (e = t.config) || void 0 === e || null === (a = e.config) || void 0 === a ? void 0 : a.notify)
                        }),
                        s = new i.NotifyPointsTree([], r, a, e.stakingSettings);
                    t("SET_NOTIFY_TREE", s.getNotyfyTree()), t("SET_WALLETS_NOTIFY", s.getNotyfyWallets())
                },
                setCompletedReason({
                    commit: t
                }) {
                    const e = localStorage.getItem("notify_point");
                    t("SET_COMPLETED_REASON", e ? JSON.parse(e) : []);
                    const a = localStorage.getItem("notify_point_wallets");
                    t("SET_WALLETS_NOTIFY", a ? JSON.parse(a) : [])
                },
                clearNotifyStorage({
                    commit: t
                }) {
                    t("CLEAR_COMPLETED_REASON")
                }
            },
            getters: {
                notifyTree: t => t.notifyTree,
                walletsNotify: t => t.walletsNotify,
                getCompletedNotifyReasons: t => t.completedNotifyReasons
            }
        };
        e.default = s
    },
    4567: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(187));
        const r = Object.freeze({
            rate: 0,
            change: 0,
            supply: 0,
            volume: 0,
            balance: 0,
            marketCap: 0
        });
        var s = {
            state: {
                balances: {},
                rates: {
                    BTC: {},
                    USD: {},
                    AUD: {},
                    BRL: {},
                    CAD: {},
                    CHF: {},
                    CLP: {},
                    CNY: {},
                    CZK: {},
                    DKK: {},
                    EUR: {},
                    GBP: {},
                    HKD: {},
                    HUF: {},
                    IDR: {},
                    ILS: {},
                    INR: {},
                    JPY: {},
                    KRW: {},
                    MXN: {},
                    MYR: {},
                    NOK: {},
                    NZD: {},
                    PHP: {},
                    PKR: {},
                    PLN: {},
                    RUB: {},
                    SEK: {},
                    SGD: {},
                    THB: {},
                    TRY: {},
                    TWD: {},
                    ZAR: {}
                }
            },
            strict: !1,
            actions: {
                updateCoinBalance({
                    state: t,
                    commit: e
                }, a) {
                    e("UPDATE_COIN_BALANCE", a)
                },
                removeCoinBalance({
                    state: t,
                    commit: e
                }, a) {
                    e("REMOVE_COIN_BALANCE", a)
                },
                updateCoinsRate({
                    commit: t
                }, e) {
                    t("UPDATE_COIN_RATE", e)
                },
                updateRates({
                    commit: t
                }, e) {
                    t("UPDATE_RATES", e)
                },
                initRatesState({
                    commit: t
                }, e) {
                    const a = e.length;
                    for (let n = 0; n < a; n += 1) {
                        const a = Object.freeze(e[n]);
                        if ("undefined" === a.fiat) return;
                        t("UPDATE_COIN_RATE", a)
                    }
                },
                updateFiatRate({
                    commit: t
                }, e) {
                    t("UPDATE_FIAT_RATE", e)
                },
                clearState({
                    commit: t
                }) {
                    t("CLEAR_STATE")
                },
                async getRates({
                    commit: t,
                    getters: e
                }) {
                    const a = e.fiatRate,
                        n = Array.from(this._vm.$wallets),
                        i = await this._vm.$rates.getRates(n, a, a !== e.prevFiatRate);
                    n.forEach(e => {
                        const {
                            id: n,
                            divisibleBalance: r
                        } = e;
                        if (i[n] && i[n][a]) {
                            const e = this._vm.$wallets.getWallet(n);
                            if (!e) return;
                            const s = localStorage.getItem(n + "-balance"),
                                {
                                    rate: o,
                                    change: c,
                                    marketCap: l,
                                    volume: d,
                                    supply: u
                                } = i[n][a],
                                f = r || s,
                                p = f * o,
                                _ = {
                                    fiat: a,
                                    rates: {
                                        rate: o,
                                        change: c,
                                        balance: p,
                                        marketCap: l,
                                        volume: d,
                                        supply: u
                                    },
                                    walletId: n
                                };
                            null !== f && e.confirmed && t("UPDATE_COIN_BALANCE", {
                                balance: f,
                                id: n
                            }), e.fiatBalance = p, t("UPDATE_COIN_RATE", _)
                        }
                    })
                }
            },
            mutations: {
                UPDATE_COIN_BALANCE(t, {
                    id: e,
                    balance: a
                }) {
                    i.default.set(t.balances, e, Object.freeze({
                        balance: a
                    }))
                },
                REMOVE_COIN_BALANCE(t, e) {
                    i.default.set(t.balances, e, "0"), i.default.delete(t.balances, e)
                },
                UPDATE_COIN_RATE(t, e) {
                    e && e.rates && i.default.set(t.rates[e.fiat], e.walletId, Object.freeze(e.rates) || r)
                },
                CLEAR_STATE(t) {
                    Object.keys(t.rates).forEach(e => {
                        t.rates[e] = {}
                    })
                }
            },
            getters: {
                coinRate: t => (e, {
                    id: a,
                    confirmed: n
                }) => t.rates[e][a] && n ? t.rates[e][a] : r,
                balanceSummary: (t, e) => a => {
                    try {
                        const n = Object.keys(t.balances).filter(t => !e.walletExcludedCoins.includes(t)).reduce((n, i) => n + Number(t.balances[i].balance) * Number(e.coinRate(a, {
                            id: i,
                            confirmed: !0
                        }).rate), 0);
                        return localStorage.setItem(a + "-fiatBalance", n), n
                    } catch (t) {
                        return console.log(t), 0
                    }
                }
            }
        };
        e.default = s
    },
    4568: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(187)),
            r = a(224);
        const s = ["FIO", "TPAY"].concat(r.DISABLED_COINS),
            o = ["AE", "BNB", "KIN", "ZIL"].concat(s),
            c = localStorage.getItem("IS_DEFAULT_EXCLUDED_COINS") ? s : o,
            l = JSON.parse(localStorage.getItem("excludedCurrenciesExchange")) || ["AE"],
            d = JSON.parse(localStorage.getItem("current_fiat_currency"));
        let u;
        try {
            u = JSON.parse(localStorage.getItem("MEMBERSHIP_CURRENT_STATUS"))
        } catch (t) {
            u = {}
        }

        function f(t, e, a) {
            return a.indexOf(t) === e
        }
        var p = {
            state: {
                historyExcludedCoins: localStorage.getItem("HISTORY_EXCLUDED_COINS") || [],
                historyExcludedTypes: localStorage.getItem("HISTORY_EXCLUDED_TYPES") || [],
                historyExcludedDirections: localStorage.getItem("HISTORY_EXCLUDED_DIRECTIONS") || [],
                alwaysExcludedCoins: s,
                walletExcludedCoins: function() {
                    const t = localStorage.getItem("WALLET_EXCLUDED_COINS");
                    return null !== t ? t.split(",").concat(s).filter(f) : c
                }(),
                walletHideZero: null !== localStorage.getItem("WALLET_HIDE_ZERO") && "true" === localStorage.getItem("WALLET_HIDE_ZERO"),
                exchangeSort: null !== localStorage.getItem("EXCHANGE_SORT_KEY") ? localStorage.getItem("EXCHANGE_SORT_KEY") : "desc",
                walletSort: null !== localStorage.getItem("WALLET_SORT") ? localStorage.getItem("WALLET_SORT") : "desc",
                fiatRate: d ? d.code : "USD",
                prevFiatRate: d ? d.code : "USD",
                fiatCharacter: d ? d.char : "&#36;",
                currentMembershipStatus: u,
                serviceMessageSettings: [],
                stakingSettings: [],
                defaultExcludedCoins: o,
                excludedCurrenciesExchange: l,
                currenciesExchange: [],
                isUpdatingFiat: !1,
                autoclaimAirdrop: {},
                accountEOSError: ""
            },
            mutations: {
                SET_AUTOCLAIM_AIRDROP(t, e) {
                    t.autoclaimAirdrop = {
                        ...t.autoclaimAirdrop,
                        ...e
                    }
                },
                CHANGE_UPDATING_FIAT(t, e) {
                    t.isUpdatingFiat = e
                },
                WALLET_TOGGLE_HIDEZERO(t) {
                    t.walletHideZero = !t.walletHideZero, localStorage.setItem("WALLET_HIDE_ZERO", t.walletHideZero)
                },
                WALLET_UPDATE_EXCLUDED_COINS(t, e) {
                    i.default.set(t, "walletExcludedCoins", e), 0 === e.length ? localStorage.removeItem("WALLET_EXCLUDED_COINS") : localStorage.setItem("WALLET_EXCLUDED_COINS", e)
                },
                WALLET_SET_SORT(t, e) {
                    ["asc", "desc"].indexOf(e) >= 0 && (t.walletSort = e, localStorage.setItem("WALLET_SORT", t.walletSort))
                },
                HISTORY_UPDATE_EXCLUDED_COINS(t, e) {
                    i.default.set(t, "historyExcludedCoins", e), 0 === e.length ? localStorage.removeItem("HISTORY_EXCLUDED_COINS") : localStorage.setItem("HISTORY_EXCLUDED_COINS", e)
                },
                HISTORY_UPDATE_EXCLUDED_TYPES(t, e) {
                    i.default.set(t, "historyExcludedTypes", e), 0 === e.length ? localStorage.removeItem("HISTORY_EXCLUDED_TYPES") : localStorage.setItem("HISTORY_EXCLUDED_TYPES", e)
                },
                HISTORY_UPDATE_EXCLUDED_DIRECTIONS(t, e) {
                    i.default.set(t, "historyExcludedDirections", e), 0 === e.length ? localStorage.removeItem("HISTORY_EXCLUDED_DIRECTIONS") : localStorage.setItem("HISTORY_EXCLUDED_DIRECTIONS", e)
                },
                EXCHANGE_SET_SORT(t, e) {
                    ["asc", "desc"].indexOf(e) >= 0 && (t.exchangeSort = e, localStorage.setItem("EXCHANGE_SORT_KEY", t.exchangeSort))
                },
                TOGGLE_FIAT(t, e) {
                    t.prevFiatRate = t.fiatRate, t.fiatRate = e.code, t.fiatCharacter = e.char
                },
                DISABLE_DEFAULT_EXCLUDED_COINS() {
                    localStorage.setItem("IS_DEFAULT_EXCLUDED_COINS", 1)
                },
                UPDATE_SERVICE_MESSAGES(t, e) {
                    i.default.set(t, "serviceMessageSettings", e)
                },
                UPDATE_EXCLUDED_CURRENCY(t, e) {
                    i.default.set(t, "excludedCurrenciesExchange", e)
                },
                UPDATE_CURRENCIES_EXCHANGE(t, e) {
                    i.default.set(t, "currenciesExchange", e)
                },
                FETCH_STAKING_SETTINGS(t, e) {
                    i.default.set(t, "stakingSettings", e)
                },
                MEMBERSHIP_CURRENT_STATUS(t, e) {
                    i.default.set(t, "currentMembershipStatus", e), localStorage.setItem("MEMBERSHIP_CURRENT_STATUS", JSON.stringify(t.currentMembershipStatus))
                },
                CHANGE_ACCOUNT_EOS_ERROR(t, e) {
                    i.default.set(t, "accountEOSError", e)
                }
            },
            actions: {
                changeUpdatingFiat({
                    commit: t
                }, e) {
                    t("CHANGE_UPDATING_FIAT", e)
                },
                toggleFiat({
                    commit: t
                }, e) {
                    t("TOGGLE_FIAT", e)
                },
                setWalletExcludedCoins({
                    commit: t
                }, e) {
                    t("WALLET_UPDATE_EXCLUDED_COINS", e)
                },
                setHistoryExcludedCoins({
                    commit: t
                }, e) {
                    t("HISTORY_UPDATE_EXCLUDED_COINS", e)
                },
                setHistoryExcludedTypes({
                    commit: t
                }, e) {
                    t("HISTORY_UPDATE_EXCLUDED_TYPES", e)
                },
                setHistoryExcludedDirections({
                    commit: t
                }, e) {
                    t("HISTORY_UPDATE_EXCLUDED_DIRECTIONS", e)
                },
                setCurrentMembershipStatus({
                    commit: t
                }, e) {
                    t("MEMBERSHIP_CURRENT_STATUS", e)
                },
                disableDefaultExcludedCoins({
                    commit: t
                }) {
                    t("DISABLE_DEFAULT_EXCLUDED_COINS")
                },
                updateServiceMessages({
                    commit: t
                }, e) {
                    t("UPDATE_SERVICE_MESSAGES", e)
                },
                updateAutoclaimAirdrop({
                    commit: t
                }, {
                    ticker: e,
                    value: a
                }) {
                    t("SET_AUTOCLAIM_AIRDROP", {
                        [e.toUpperCase()]: a
                    })
                },
                updateExcludedCurrency({
                    commit: t
                }, e) {
                    localStorage.setItem("excludedCurrenciesExchange", JSON.stringify(e)), t("UPDATE_EXCLUDED_CURRENCY", e)
                },
                updateCurrenciesExchange({
                    commit: t
                }, e) {
                    t("UPDATE_CURRENCIES_EXCHANGE", e)
                },
                async fetchStakingSettings({
                    commit: t
                }) {
                    const e = await this._vm.$staking.fetchSettings();
                    e.length > 0 && t("FETCH_STAKING_SETTINGS", e)
                },
                changeAccountEOSError({
                    commit: t
                }, e) {
                    t("CHANGE_ACCOUNT_EOS_ERROR", e)
                }
            },
            getters: {
                fiatRate: t => t.fiatRate,
                prevFiatRate: t => t.prevFiatRate,
                fiatCharacter: t => t.fiatCharacter,
                alwaysExcludedCoins: t => t.alwaysExcludedCoins,
                walletExcludedCoins: t => t.walletExcludedCoins,
                historyExcludedCoins: t => t.historyExcludedCoins,
                historyExcludedTypes: t => t.historyExcludedTypes,
                historyExcludedDirections: t => t.historyExcludedDirections,
                defaultExcludedCoins: t => t.defaultExcludedCoins,
                serviceMessageSettings: t => t.serviceMessageSettings,
                stakingSettings: t => t.stakingSettings,
                isUpdatingFiat: t => t.isUpdatingFiat,
                excludedCurrenciesExchange: t => t.excludedCurrenciesExchange,
                currenciesExchange: t => t.currenciesExchange,
                currentMembershipStatus: t => t.currentMembershipStatus,
                accountEOSError: t => t.accountEOSError,
                hasAutoclaimAirdropByTicker: ({
                    autoclaimAirdrop: t
                }) => ({
                    ticker: e
                }) => {
                    var a, n;
                    const i = null !== (a = {
                        WFLR: "FLR"
                    } [e]) && void 0 !== a ? a : e;
                    return null !== (n = null == t ? void 0 : t[i.toUpperCase()]) && void 0 !== n && n
                }
            }
        };
        e.default = p
    },
    4569: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            state: {
                userID: "",
                activeTab: 0,
                simplexSession: {},
                simplexNewTransaction: {},
                simplexTransactions: [],
                isSimplexTransactionsLoading: !1
            },
            mutations: {
                CHANGE_TAB(t, e) {
                    t.activeTab = e
                },
                SET_USERID(t, e) {
                    t.userID = e
                },
                SET_SESSION(t, e) {
                    t.simplexSession = e
                },
                SET_NEW_TRANSACTION(t, e) {
                    t.simplexNewTransaction = e
                },
                SET_TRANSACTIONS(t, e) {
                    localStorage.setItem("simplex::txs", JSON.stringify(e)), t.simplexTransactions = e
                },
                SET_LOADING_TRANSACTIONS(t, e) {
                    t.isSimplexTransactionsLoading = e
                }
            },
            actions: {
                setUserID({
                    commit: t
                }, e) {
                    t("SET_USERID", e)
                },
                changeTab({
                    commit: t
                }, e) {
                    t("CHANGE_TAB", e)
                },
                setSimplexSession({
                    commit: t
                }, e = {}) {
                    t("SET_SESSION", e)
                },
                setSimplexNewTransaction({
                    commit: t
                }, e) {
                    t("SET_NEW_TRANSACTION", e)
                },
                async updateSimplexTransactionsFromDB({
                    commit: t
                }) {
                    try {
                        await this._vm.$simplexDb.getSimplexTransactionsFromNet(this._vm.$wallets.hash);
                        t("SET_TRANSACTIONS", (await this._vm.$simplexDb.getSimplexTransactionsFromDb() || []).sort((t, e) => new Date(t.timestamp) > new Date(e.timestamp) ? -1 : 1))
                    } catch (t) {
                        console.log("[APOLLO] Error with getting simplex transactions: ", t)
                    }
                },
                async initSimplexTransactions({
                    commit: t,
                    dispatch: e
                }) {
                    var a;
                    t("SET_LOADING_TRANSACTIONS", !0);
                    const n = JSON.parse(null !== (a = localStorage.getItem("simplex::txs")) && void 0 !== a ? a : "[]");
                    0 === n.length ? await e("updateSimplexTransactionsFromDB") : t("SET_TRANSACTIONS", n), t("SET_LOADING_TRANSACTIONS", !1)
                }
            },
            getters: {
                activeTab: t => t.activeTab,
                simplexSession: t => t.simplexSession,
                simplexNewTransaction: t => t.simplexNewTransaction,
                isSimplexTransactionsLoading: t => t.isSimplexTransactionsLoading,
                simplexTransactions: t => t.simplexTransactions
            }
        };
        e.default = n
    },
    4570: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(187));
        const r = t => Object.freeze({
            ticker: t.ticker,
            id: t.id,
            contract: t.contract,
            name: t.name,
            divisibleBalance: t.divisibleBalance,
            indivisibleBalance: t.indivisibleBalance,
            fiatBalance: t.fiatBalance,
            parent: t.deprecatedParent,
            deprecatedParent: t.deprecatedParent,
            confirmed: t.confirmed
        });
        var s = {
            state: {
                all: {}
            },
            strict: !1,
            mutations: {
                SET_WALLETS_STATE(t, e) {
                    t.all = {
                        ...t.all,
                        ...e
                    }
                },
                UPDATE_WALLET_STATE(t, e) {
                    const a = r(e);
                    i.default.set(t.all, e.id, a)
                },
                SET_WALLET_PORTFOLIO(t, e) {
                    i.default.set(t[e.ticker], "portfolio", e.portfolio)
                },
                REMOVE_WALLET_FROM_STATE(t, e) {
                    i.default.delete(t.all, e)
                }
            },
            actions: {
                setWalletsState({
                    commit: t
                }, e = []) {
                    const a = {};
                    for (let t = 0; t < e.length; t += 1) {
                        const n = e[t];
                        a[n.id] = r(n)
                    }
                    t("SET_WALLETS_STATE", a)
                },
                removeWalletFromState({
                    commit: t
                }, e) {
                    t("REMOVE_WALLET_FROM_STATE", e)
                },
                setWalletPortfolio({
                    commit: t
                }, e) {
                    t("SET_WALLET_PORTFOLIO", e)
                },
                updateWalletState({
                    commit: t
                }, e) {
                    t("UPDATE_WALLET_STATE", r(e))
                }
            },
            getters: {
                walletsState: t => Object.values(t.all)
            }
        };
        e.default = s
    },
    4571: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            state: {
                walletWizard: null
            },
            mutations: {
                WALLET_TOGGLE_WIZARD(t, e) {
                    t.walletWizard = e
                }
            },
            actions: {
                toggleWizardWindow({
                    commit: t
                }, e = {}) {
                    t("WALLET_TOGGLE_WIZARD", e)
                }
            },
            getters: {
                walletWizard: t => t.walletWizard
            }
        };
        e.default = n
    },
    4576: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(556)),
            r = a(224);
        const s = "/status";
        e.default = class RestService {
            getStatus() {
                return i.default.get(r.COB + s)
            }
        }
    },
    4579: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(151)),
            r = n(a(4580)),
            s = n(a(4581));
        e.default = class Texts {
            constructor({
                textDesktop: t,
                coinTips: e
            }) {
                (0, i.default)(this, "TextDesktop", new s.default), (0, i.default)(this, "CoinTips", new r.default), this.TextDesktop.setText(t), this.CoinTips.setText(e)
            }
            setTicker(t) {
                this.TextDesktop.setTicker(t), this.CoinTips.setTicker(t)
            }
        }
    },
    4580: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(151)),
            r = n(a(2135));
        class CoinTips extends r.default {
            constructor(...t) {
                super(...t), (0, i.default)(this, "labels", {
                    successScreen: "successScreenText",
                    successScreenUnstaking: "successScreenTextUnstaking",
                    calculator: "calculatorText",
                    delegating: "delegatingText",
                    stake: "stakeText",
                    unstake: "unstakeText",
                    detailsOnMainPage: "detailsOnMainPageText"
                })
            }
            staking(t) {
                var e, a, n, i, r;
                return null === (e = this.text) || void 0 === e || null === (a = e.staking) || void 0 === a || null === (n = a[this.currentTicker.toLowerCase()]) || void 0 === n || null === (i = n.tips) || void 0 === i || null === (r = i[t]) || void 0 === r ? void 0 : r.text
            }
        }
        e.default = CoinTips
    },
    4581: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(151)),
            r = n(a(2135));

        function s(t, e) {
            ! function(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(t, e), e.add(t)
        }

        function o(t, e, a) {
            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
            return a
        }
        var c = new WeakSet;
        class TextDesktop extends r.default {
            constructor(...t) {
                super(...t), s(this, c), (0, i.default)(this, "labels", {
                    title: "Stake",
                    total: "Total",
                    available: "Available",
                    staked: "Staked",
                    rewards: "Rewards",
                    pendingWithdrawal: "Pending withdrawal",
                    availableWithdrawal: "Available for withdrawal",
                    availableVotes: "Available votes",
                    assignedVotes: "Assigned votes",
                    unclaimedRewards: "Unclaimed rewards",
                    unstake: "Unstake",
                    unbonding: "Unbonding"
                }), (0, i.default)(this, "onboardingKeys", {
                    subtitle: "subtitle"
                }), (0, i.default)(this, "customeTokenKeys", {
                    editTitle: "editTitle",
                    addTitle: "addTitle",
                    infoTitle: "infoTitle",
                    infoText: "infoText",
                    deleteText: "deleteText"
                }), (0, i.default)(this, "generalExchangeKeys", {
                    exchangeRateDisclaimer: "exchangeRateDisclaimer"
                }), (0, i.default)(this, "hintsKeys", {
                    stake: "stake",
                    unStake: "unStake",
                    calculator: "calculator",
                    delegating: "delegating",
                    successStaking: "successStaking",
                    successUnStaking: "successUnStaking",
                    mainPage: "mainPage",
                    stakingInfo: "stakingInfo",
                    rewardsInfo: "rewardsInfo",
                    rewardsTitle: "rewardsTitle",
                    autoclaimAirdrops: "autoclaimAirdrops"
                })
            }
            get tipsTitle() {
                var t;
                return null === (t = this.textStaking) || void 0 === t ? void 0 : t.tipsTitle
            }
            get tips() {
                var t;
                return (null === (t = this.textStaking) || void 0 === t ? void 0 : t.tips) || {}
            }
            get textStaking() {
                var t, e;
                return (null === (t = this.text) || void 0 === t || null === (e = t.staking) || void 0 === e ? void 0 : e[this.currentTicker]) || {}
            }
            get textActivate() {
                var t, e;
                return (null === (t = this.text) || void 0 === t || null === (e = t.activate) || void 0 === e ? void 0 : e[this.currentTicker]) || {}
            }
            checkKey(t, e) {
                try {
                    if (!t[e]) throw new Error(`Didn't find key ${e} in Text Desktop`);
                    return t[e]
                } catch (t) {
                    return void console.warn(t)
                }
            }
            generalExchange(t) {
                var e, a;
                const n = this.checkKey(this.generalExchangeKeys, t);
                return (null === (e = this.text.exchange) || void 0 === e || null === (a = e.general) || void 0 === a ? void 0 : a[n]) || ""
            }
            onboarding(t) {
                var e;
                const a = this.checkKey(this.onboardingKeys, t);
                return (null === (e = this.text.onboarding) || void 0 === e ? void 0 : e[a]) || ""
            }
            hintsActivate(t = "") {
                return o(this, c, l).call(this, this.textActivate.hints, t)
            }
            hints(t = "") {
                return o(this, c, l).call(this, this.textStaking.hints, t)
            }
            customeToken(t) {
                var e;
                const a = this.checkKey(this.customeTokenKeys, t);
                return (null === (e = this.text.customeToken) || void 0 === e ? void 0 : e[a]) || ""
            }
        }

        function l(t, e = "") {
            let a = null != t ? t : {};
            try {
                return e.split(".").filter(Boolean).forEach(t => {
                    const e = this.checkKey(this.hintsKeys, t);
                    if (!a[e]) throw new Error(`Hint key ${t} didn't find`);
                    a = a[e]
                }), a
            } catch (t) {
                return console.log(t), null
            }
        }
        e.default = TextDesktop
    },
    4585: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), Object.defineProperty(e, "NFTEmpty", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(e, "NFTGallery", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }), Object.defineProperty(e, "NFTInfo", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }), Object.defineProperty(e, "NFTReceive", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(e, "NFTSendToken", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        });
        var i = n(a(4586)),
            r = n(a(4599)),
            s = n(a(5096)),
            o = n(a(5103)),
            c = n(a(5104))
    },
    4586: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(752),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1232),
            o = a(3);
        var c = function(t) {
                a(4587)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-8fa7a740", null);
        e.default = l.exports
    },
    4587: function(t, e, a) {
        var n = a(4588);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("6dd028db", n, !0, {})
    },
    4588: function(t, e, a) {
        e = t.exports = a(49)(!1);
        var n = a(373)(a(1170));
        e.push([t.i, "\n.thumbnail[data-v-8fa7a740]{display:flex;flex-shrink:0;flex-direction:column;position:relative\n}\n.thumbnail__image[data-v-8fa7a740]{display:flex;flex-shrink:0;flex-direction:column;align-items:center;padding:80px 16px 16px 16px;width:250px;height:250px;margin-bottom:10px;background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:8px;overflow:hidden;text-align:center;cursor:pointer;position:relative\n}\n.thumbnail__warning[data-v-8fa7a740]{display:inline-block;width:24px;height:24px;margin-bottom:17px;background-image:url(" + n + ");background-position:center;background-size:100%;background-repeat:no-repeat\n}\n", ""])
    },
    4589: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = (t, e = 10) => {
            if (t.length > e && e > 7) {
                const a = Math.floor(e / 2) + 1,
                    n = -(Math.floor(e / 2) - 1);
                return `${t.slice(0,a)}...${t.slice(n)}`
            }
            return t
        };
        e.default = n
    },
    4595: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(2141)).default;
        e.default = i
    },
    4596: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(757),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1230),
            o = a(3);
        var c = function(t) {
                a(4597)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-e5d87d50", null);
        e.default = l.exports
    },
    4597: function(t, e, a) {
        var n = a(4598);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("6c388a28", n, !0, {})
    },
    4598: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "\n.atomic-modal__fullscreen[data-v-e5d87d50]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background:#000000AA;display:flex;align-items:center;justify-content:center\n}\n.atomic-modal__fullscreen .nft-image[data-v-e5d87d50]{max-width:100%;max-height:100%;display:flex;justify-content:center;align-items:center;padding:2%\n}\n.close__icon[data-v-e5d87d50]{position:absolute;right:33px;top:33px;padding:15px;border-radius:50%;background:#1c233aAA;display:flex;justify-content:center;align-items:center;z-index:2;cursor:pointer\n}\n.close__icon[data-v-e5d87d50]:hover{background:#1c233aDD\n}\n", ""])
    },
    4599: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(758),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1255),
            o = a(3),
            c = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
        e.default = c.exports
    },
    4600: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(759),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1233),
            o = a(3);
        var c = function(t) {
                a(4601)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-d95a9934", null);
        e.default = l.exports
    },
    4601: function(t, e, a) {
        var n = a(4602);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("0e0c08e2", n, !0, {})
    },
    4602: function(t, e, a) {
        e = t.exports = a(49)(!1);
        var n = a(373)(a(1170));
        e.push([t.i, "\n.thumbnail[data-v-d95a9934]{display:flex;width:150px;height:max-content;flex-shrink:0;flex-direction:column;position:relative\n}\n.thumbnail__loading[data-v-d95a9934]{animation-name:skeletonAnimation-data-v-d95a9934;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear;background-color:#404A65\n}\n.thumbnail__loading *[data-v-d95a9934]{opacity:0\n}\n.thumbnail__image[data-v-d95a9934]{display:flex;flex-shrink:0;flex-direction:column;align-items:center;padding:35px 16px 16px 16px;width:150px;height:150px;margin-bottom:10px;background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:8px;overflow:hidden;text-align:center;cursor:pointer;position:relative\n}\n.thumbnail .image-preview[data-v-d95a9934]{padding:0\n}\n.thumbnail__warning[data-v-d95a9934]{display:inline-block;width:24px;height:24px;margin-bottom:17px;background-image:url(" + n + ");background-position:center;background-size:100%;background-repeat:no-repeat\n}\n.thumbnail__description[data-v-d95a9934]{align-self:flex-start;cursor:default\n}\n.thumbnail__description>div[data-v-d95a9934]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-break:break-word\n}\n@keyframes skeletonAnimation-data-v-d95a9934{\n0%{opacity:0.8\n}\n50%{opacity:0.4\n}\n100%{opacity:0.8\n}\n}\n", ""])
    },
    4603: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(760),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1234),
            o = a(3);
        var c = function(t) {
                a(4604)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-6ebee4aa", null);
        e.default = l.exports
    },
    4604: function(t, e, a) {
        var n = a(4605);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("7454d70a", n, !0, {})
    },
    4605: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, '\n.atomic__form-field[data-v-6ebee4aa]{width:100%;margin:-1px auto 35px;text-align:left;position:relative\n}\n.atomic__form-field.last-child[data-v-6ebee4aa]{margin-bottom:20px\n}\n.atomic__form-field.last-child-send-coin[data-v-6ebee4aa]{margin-bottom:0\n}\n.atomic__form-field .placeholder[data-v-6ebee4aa]{position:absolute;top:15px;z-index:0;transition:all .4s ease-out;color:#8290AD;user-select:none;font-family:"Roboto",sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px;letter-spacing:0.15px\n}\n.atomic__form-field .placeholder.is-up[data-v-6ebee4aa]{top:-15px\n}\n.atomic__form-field .ticker[data-v-6ebee4aa]{position:absolute;right:0;top:7px;font-size:18px\n}\n.atomic__form-field .ticker.grey[data-v-6ebee4aa]{color:#8290AD\n}\n.atomic__form-field .icon-paste[data-v-6ebee4aa],.atomic__form-field .icon-delete[data-v-6ebee4aa],.atomic__form-field .icon-edit[data-v-6ebee4aa]{background:#8290AD;position:absolute;font-size:1.3em;cursor:pointer;padding:10px 5px;z-index:1;right:-5px;bottom:6px\n}\n.atomic__form-field .icon-paste[data-v-6ebee4aa]:hover,.atomic__form-field .icon-delete[data-v-6ebee4aa]:hover,.atomic__form-field .icon-edit[data-v-6ebee4aa]:hover{background:#1F8EFA\n}\n.atomic__form-field .icon-paste:hover path[data-v-6ebee4aa],.atomic__form-field .icon-delete:hover path[data-v-6ebee4aa],.atomic__form-field .icon-edit:hover path[data-v-6ebee4aa]{transition:all .2s ease-in-out;fill:#1F8EFA\n}\n.atomic__form-field .icon-delete[data-v-6ebee4aa]{font-size:26px;padding:5px;background:#fff;transition:all .2s ease-in-out\n}\n.atomic__form-field .input-wrap[data-v-6ebee4aa]{display:flex;align-items:center;position:relative\n}\n.atomic__form-field .input-wrap.past-click[data-v-6ebee4aa]{padding-right:45px\n}\n.atomic__form-field .input-wrap.past-click input[data-v-6ebee4aa]{padding-right:0;cursor:pointer\n}\n.atomic__form-field .input-wrap.past-click input:hover ~ .placeholder[data-v-6ebee4aa]{color:#1F8EFA\n}\n.atomic__form-field .input-wrap_password[data-v-6ebee4aa]{max-width:400px\n}\n.atomic__form-field .input-wrap input[data-v-6ebee4aa]{width:100%;background:transparent;transition:all .2s ease-in-out;border:none;outline:none;padding:10px 30px 10px 0;position:relative;z-index:1;font-family:"Roboto",sans-serif;font-style:normal;font-weight:400;font-size:28px;line-height:28px;letter-spacing:0.25px\n}\n.atomic__form-field .input-wrap .line[data-v-6ebee4aa]{background:#404A65;position:absolute;bottom:0;left:0;right:0;height:2px;transition:all 0.3s ease-out\n}\n.atomic__form-field .input-wrap .line[data-v-6ebee4aa]:before{content:\'\';height:2px;left:0;right:0;width:0;transition:all 0.3s ease-out;position:absolute\n}\n.atomic__form-field .input-wrap .line.line-error[data-v-6ebee4aa]:before{width:100%\n}\n.atomic__form-field .input-wrap .line.line-true[data-v-6ebee4aa]:before{background-color:#1f8efa;width:100%\n}\n.atomic__form-field .input-wrap.input-send-all input[data-v-6ebee4aa]{padding-right:55px\n}\n.atomic__form-field .password-icon[data-v-6ebee4aa]{position:absolute;align-items:center;justify-content:center;cursor:pointer;right:0;width:23px;height:18px;z-index:1\n}\n.atomic__form-field .password-icon:hover svg[data-v-6ebee4aa]{fill:#fff !important\n}\n.atomic__form-field .send-all[data-v-6ebee4aa]{position:absolute;top:50%;right:0;transform:translateY(-50%);color:#8290AD;transition:all .3s;cursor:pointer;z-index:1\n}\n.atomic__form-field .send-all[data-v-6ebee4aa]:hover{color:#1F8EFA\n}\n.atomic__form-field .error[data-v-6ebee4aa]{margin-top:10px;position:absolute;color:#c03647\n}\n.atomic__form-field .error.error-amount[data-v-6ebee4aa]{margin-top:-5px\n}\n.atomic__form-field .error.error-amount-fix[data-v-6ebee4aa]{top:35px\n}\n.atomic__form-field .note[data-v-6ebee4aa]{font-size:14px;margin-top:10px;color:#8290AD;position:absolute;min-width:200px\n}\n.atomic__form-field .note b[data-v-6ebee4aa]{font-weight:500;color:#ffffff\n}\n.atomic__form-field .note span[data-v-6ebee4aa]{color:#8290AD\n}\n@media (min-width: 1360px){\n.atomic__form-field .input-wrap input[data-v-6ebee4aa]{font-size:21px\n}\n.atomic__form-field .send-all[data-v-6ebee4aa]{font-size:18px\n}\n}\n', ""])
    },
    4606: function(t, e, a) {
        var n = a(4607);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("4fa44eae", n, !0, {})
    },
    4607: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, '\n.atomic-hint[data-v-b0291e26]{user-select:none;transition:all ease 0.5s;transform:scale(0)\n}\n.atomic-hint__visible[data-v-b0291e26]{transform:scale(1)\n}\n.atomic-hint div.position[data-v-b0291e26]{position:absolute;padding:16px;background:#343F5C;max-width:300px;font-size:14px;font-weight:400;line-height:22px;letter-spacing:0.15px;text-align:left;border-radius:8px;border:1px solid #404A65;cursor:auto\n}\n.atomic-hint div.position .close__icon[data-v-b0291e26]{cursor:pointer;position:absolute;right:11px;top:11px\n}\n.atomic-hint div.position .content[data-v-b0291e26]{min-width:200px\n}\n.atomic-hint div.position.with-close[data-v-b0291e26]{padding:16px 32px 16px 16px\n}\n.atomic-hint div.position.position__left[data-v-b0291e26]{right:100%;top:50%;transform:translate(-20px, -50%)\n}\n.atomic-hint div.position.position__right[data-v-b0291e26]{left:100%;top:50%;transform:translate(20px, -50%)\n}\n.atomic-hint div.position.position__top[data-v-b0291e26]{left:50%;bottom:100%;transform:translate(-50%, -20px)\n}\n.atomic-hint div.position.position__bottom[data-v-b0291e26]{left:50%;top:100%;transform:translate(-50%, 20px)\n}\n.atomic-hint div.position.position__bottom[data-v-b0291e26]:after{content:"";display:block;border-top:1px solid #404A65;border-left:1px solid #404A65;width:15px;height:15px;position:absolute;background:#343F5C;left:50%;bottom:100%;transform:translate(-50%, 7px) rotate(45deg)\n}\n.atomic-hint div.position.position__bottom-left[data-v-b0291e26]{right:0;top:100%;transform:translate(15px, 20px)\n}\n.atomic-hint div.position.position__bottom-left[data-v-b0291e26]:after{content:"";display:block;border-top:1px solid #404A65;border-left:1px solid #404A65;width:15px;height:15px;position:absolute;background:#343F5C;bottom:100%;right:0px;transform:translate(-100%, 7px) rotate(45deg)\n}\n', ""])
    },
    4608: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(762),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1236),
            o = a(3);
        var c = function(t) {
                a(4609)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-668a5deb", null);
        e.default = l.exports
    },
    4609: function(t, e, a) {
        var n = a(4610);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("132d2d26", n, !0, {})
    },
    4610: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "\na[data-v-668a5deb]{display:flex;align-items:center\n}\nspan[data-v-668a5deb]{cursor:pointer;font-size:16px;font-weight:400;line-height:24px;letter-spacing:0.15px;color:#13A5F5\n}\n", ""])
    },
    4611: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(763),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1237),
            o = a(3),
            c = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
        e.default = c.exports
    },
    4612: function(t, e, a) {
        var n = a(4613);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("91982376", n, !0, {})
    },
    4613: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, '\n.tabs[data-v-e8bf5fec]{border-bottom:1px solid rgba(247,247,247,0.2);padding:0px 17px 10px\n}\n.tab-title[data-v-e8bf5fec]{margin:0px 15px 0;letter-spacing:0.05em;text-transform:uppercase;color:#8290AD;display:inline-block;cursor:pointer;transition:all .3s ease-out;position:relative\n}\n.tab-title.no-hover[data-v-e8bf5fec]{cursor:inherit\n}\n.tab-title.no-hover[data-v-e8bf5fec]:hover{color:#fff\n}\n.tab-title[data-v-e8bf5fec]:hover{color:#1F8EFA\n}\n.tab-title.active[data-v-e8bf5fec]{color:#fff;position:relative\n}\n.tab-title.active[data-v-e8bf5fec]:after{content:"";position:absolute;width:100%;height:1px;background-color:#09B3FA;bottom:-11px;left:0\n}\n.tab-title[data-v-e8bf5fec]:after{content:"";position:absolute;width:100%;height:40px;bottom:-11px;left:0;cursor:pointer\n}\n', ""])
    },
    4614: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(765),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1239),
            o = a(3);
        var c = function(t) {
                a(4615)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-428d81c3", null);
        e.default = l.exports
    },
    4615: function(t, e, a) {
        var n = a(4616);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("1784dc5e", n, !0, {})
    },
    4616: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "\n.atomic__popup[data-v-428d81c3]{position:absolute;top:0;left:0;width:100%;height:100%;background:#1f2843;z-index:100\n}\n.atomic__popup__header[data-v-428d81c3]{display:flex;top:0;left:0;right:0;justify-content:space-between;align-items:center\n}\n.atomic__popup__header__content[data-v-428d81c3]{display:flex;width:100%;justify-content:flex-end;text-align:left\n}\n.atomic__popup__header>*[data-v-428d81c3]{z-index:100\n}\n.atomic__popup .close[data-v-428d81c3]{padding:36px;top:0;right:0;cursor:pointer;color:white;display:flex;align-items:center;justify-content:center;opacity:0.6;transition:opacity .3s\n}\n.atomic__popup .close__icon[data-v-428d81c3]{color:#8290AD\n}\n.atomic__popup .close[data-v-428d81c3]:hover,.atomic__popup .close:hover .close__icon[data-v-428d81c3]{opacity:1\n}\n.atomic__popup .hide[data-v-428d81c3]{visibility:hidden\n}\n.atomic__popup .content__wrap[data-v-428d81c3]{margin:0px auto;padding:45px 5% 0;position:absolute;top:0;bottom:0;left:0;right:0\n}\n.atomic__popup .back[data-v-428d81c3]{top:0px;left:15px;position:absolute;margin:0;transform:rotate(-180deg)\n}\n", ""])
    },
    4617: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(766),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1240),
            o = a(3);
        var c = function(t) {
                a(4618)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-56ac177a", null);
        e.default = l.exports
    },
    4618: function(t, e, a) {
        var n = a(4619);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("0aeb358e", n, !0, {})
    },
    4619: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, '\n.atomic-modal[data-v-56ac177a]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background:#000000AA\n}\n.atomic-modal__content[data-v-56ac177a]{opacity:1;min-width:300px;background:red;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);background:#404A65;border-radius:16px\n}\n.atomic-modal__content__header[data-v-56ac177a]{display:flex;justify-content:space-between;padding:20px 24px 0px;align-items:center\n}\n.atomic-modal__content__header .close__icon[data-v-56ac177a]{cursor:pointer\n}\n.atomic-modal__content__header .title[data-v-56ac177a]{font-family:"Roboto",sans-serif;font-style:normal;font-weight:400;font-size:24px;line-height:32px\n}\n.atomic-modal__content__body[data-v-56ac177a]{padding:0px 24px 20px\n}\n', ""])
    },
    4620: function(t, e, a) {
        var n = a(4621);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("0afcf137", n, !0, {})
    },
    4621: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, '\n.atomic-loader{position:relative\n}\n.atomic-loader .loader-logo{position:absolute;top:0;left:50%;z-index:1;transform:translate(-50%)\n}\n.atomic-loader .blobs{filter:url("#goo");width:250px;height:150px;overflow:hidden;border-radius:70px;transform-style:preserve-3d;position:absolute;top:20px;left:50%;transform:translate(-50%)\n}\n.atomic-loader .blobs .blob-center{transform-style:preserve-3d;position:absolute;background:#2a9ffb;top:50%;left:50%;width:18px;height:18px;transform-origin:left top;transform:scale(0.9) translate(-50%, -50%);animation:blob-grow linear 3.4s infinite;border-radius:50%;box-shadow:0 -10px 40px -5px #2a9ffb\n}\n.atomic-loader .blob{position:absolute;background:#2a9ffb;top:50%;left:50%;width:20px;height:20px;border-radius:50%;animation:blobs ease-out 3.4s infinite;transform:scale(0.9) translate(-50%, -50%);transform-origin:center top;opacity:0\n}\n.atomic-loader .blob:nth-child(1){animation-delay:0.2s\n}\n.atomic-loader .blob:nth-child(2){animation-delay:0.4s\n}\n.atomic-loader .blob:nth-child(3){animation-delay:0.6s\n}\n.atomic-loader .blob:nth-child(4){animation-delay:0.8s\n}\n.atomic-loader .blob:nth-child(5){animation-delay:1s\n}\n@keyframes blobs{\n0%{opacity:0;transform:scale(0) translate(calc(-330px - 50%), -50%)\n}\n1%{opacity:1\n}\n35%,65%{opacity:1;transform:scale(0.9) translate(-50%, -50%)\n}\n99%{opacity:1\n}\n100%{opacity:0;transform:scale(0) translate(calc(330px - 50%), -50%)\n}\n}\n@keyframes blob-grow{\n0%,39%{transform:scale(0) translate(-50%, -50%)\n}\n40%,42%{transform:scale(1, 0.9) translate(-50%, -50%)\n}\n43%,44%{transform:scale(1.2, 1.1) translate(-50%, -50%)\n}\n45%,46%{transform:scale(1.3, 1.2) translate(-50%, -50%)\n}\n47%,48%{transform:scale(1.4, 1.3) translate(-50%, -50%)\n}\n52%{transform:scale(1.5, 1.4) translate(-50%, -50%)\n}\n54%{transform:scale(1.7, 1.6) translate(-50%, -50%)\n}\n58%{transform:scale(1.8, 1.7) translate(-50%, -50%)\n}\n78%{transform:scale(1.6, 1.4) translate(-50%, -50%)\n}\n68%,70%{transform:scale(1.7, 1.5) translate(-50%, -50%)\n}\n80%,81%{transform:scale(1.5, 1.4) translate(-50%, -50%)\n}\n82%,83%{transform:scale(1.4, 1.3) translate(-50%, -50%)\n}\n84%,85%{transform:scale(1.3, 1.2) translate(-50%, -50%)\n}\n86%,87%{transform:scale(1.2, 1.1) translate(-50%, -50%)\n}\n90%,91%{transform:scale(1, 0.9) translate(-50%, -50%)\n}\n92%,100%{transform:scale(0) translate(-50%, -50%)\n}\n}\n', ""])
    },
    4622: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(768),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1242),
            o = a(3);
        var c = function(t) {
                a(4623)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, null, null);
        e.default = l.exports
    },
    4623: function(t, e, a) {
        var n = a(4624);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("42280d93", n, !0, {})
    },
    4624: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, '\n.atomic-spinner{display:inline-block;position:absolute;transform:scale(0.4);left:0\n}\n.atomic-spinner div{transform-origin:40px 40px;animation:atomic-spinner 1.2s linear infinite\n}\n.atomic-spinner div:after{content:" ";display:block;position:absolute;top:3px;left:37px;width:6px;height:18px;border-radius:20%;background:#fff\n}\n.atomic-spinner div:nth-child(1){transform:rotate(0deg);animation-delay:-1.1s\n}\n.atomic-spinner div:nth-child(2){transform:rotate(30deg);animation-delay:-1s\n}\n.atomic-spinner div:nth-child(3){transform:rotate(60deg);animation-delay:-0.9s\n}\n.atomic-spinner div:nth-child(4){transform:rotate(90deg);animation-delay:-0.8s\n}\n.atomic-spinner div:nth-child(5){transform:rotate(120deg);animation-delay:-0.7s\n}\n.atomic-spinner div:nth-child(6){transform:rotate(150deg);animation-delay:-0.6s\n}\n.atomic-spinner div:nth-child(7){transform:rotate(180deg);animation-delay:-0.5s\n}\n.atomic-spinner div:nth-child(8){transform:rotate(210deg);animation-delay:-0.4s\n}\n.atomic-spinner div:nth-child(9){transform:rotate(240deg);animation-delay:-0.3s\n}\n.atomic-spinner div:nth-child(10){transform:rotate(270deg);animation-delay:-0.2s\n}\n.atomic-spinner div:nth-child(11){transform:rotate(300deg);animation-delay:-0.1s\n}\n.atomic-spinner div:nth-child(12){transform:rotate(330deg);animation-delay:0s\n}\n@keyframes atomic-spinner{\n0%{opacity:1\n}\n100%{opacity:0\n}\n}\n', ""])
    },
    4625: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(769),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1243),
            o = a(3),
            c = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
        e.default = c.exports
    },
    4627: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(770),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1245),
            o = a(3);
        var c = function(t) {
                a(4628)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-a766836e", null);
        e.default = l.exports
    },
    4628: function(t, e, a) {
        var n = a(4629);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("4780d011", n, !0, {})
    },
    4629: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "\n.atomic__info-group[data-v-a766836e]{border-radius:8px;min-height:52px;background:#28314C;display:flex;align-items:center;justify-content:space-between;padding:5px 20px\n}\n.atomic__info-group__label[data-v-a766836e],.atomic__info-group__value[data-v-a766836e]{display:flex;align-items:center\n}\n.atomic__info-group__label .icon[data-v-a766836e],.atomic__info-group__value .icon[data-v-a766836e]{margin-right:13px\n}\n.atomic__info-group__label .text[data-v-a766836e],.atomic__info-group__value .text[data-v-a766836e]{margin-right:13px;font-size:16px;font-weight:400;line-height:24px;letter-spacing:0.15px\n}\n", ""])
    },
    4630: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(771),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1244),
            o = a(3);
        var c = function(t) {
                a(4631)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-23167798", null);
        e.default = l.exports
    },
    4631: function(t, e, a) {
        var n = a(4632);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("4cc31e23", n, !0, {})
    },
    4632: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "", ""])
    },
    469: function(t, e) {
        t.exports = require("punycode")
    },
    5076: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(772),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1246),
            o = a(3);
        var c = function(t) {
                a(5077)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-54b2978e", null);
        e.default = l.exports
    },
    5077: function(t, e, a) {
        var n = a(5078);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("79dc246a", n, !0, {})
    },
    5078: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "\n.atomic__label-group[data-v-54b2978e]{display:flex\n}\n.atomic__label-group .value[data-v-54b2978e]{margin-left:0.4rem\n}\n", ""])
    },
    5079: function(t, e, a) {
        var n = a(5080);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("bf019e0a", n, !0, {})
    },
    5080: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "\n.atomic-linked-card[data-v-54ba5706]{display:flex;justify-content:space-around\n}\n.atomic-linked-card img[data-v-54ba5706]{transform:translateY(20px)\n}\n", ""])
    },
    5081: function(t, e, a) {
        var n = a(5082);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("11ae5555", n, !0, {})
    },
    5082: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, '\n.simple-card{display:grid;grid-auto-columns:180px;text-align:center;grid-template-rows:repeat(3, auto);justify-items:center;gap:15px\n}\n.simple-card__icon{height:80px;width:80px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#343F5C\n}\n.simple-card__header{font-family:"Roboto",sans-serif;font-weight:400;font-size:18px;line-height:24px;letter-spacing:0.15px;display:flex;align-items:center;position:relative\n}\n.simple-card__header img{display:block;position:absolute;right:-50%\n}\n.simple-card__body{font-family:"Roboto",sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px;letter-spacing:0.15px;color:#858FAD\n}\n', ""])
    },
    5083: function(t, e, a) {
        var n = a(5084);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("fa9b7726", n, !0, {})
    },
    5084: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "\n.atomic-rewards-bar[data-v-664e14d0]{display:flex;width:100%\n}\n.atomic-rewards-bar .titles[data-v-664e14d0]{min-width:150px;display:flex;justify-content:space-around;flex-direction:column;height:80px;font-size:16px;font-weight:400;line-height:24px;letter-spacing:0.15px\n}\n.atomic-rewards-bar .titles .value__title[data-v-664e14d0]{color:#858FAD\n}\n.atomic-rewards-bar .bar[data-v-664e14d0]{width:100%;position:relative\n}\n.atomic-rewards-bar .bar .progress-bar__wrap[data-v-664e14d0]{position:absolute;top:50%;width:100%;height:4px;transform:translateY(-50%);background:#7A859F\n}\n.atomic-rewards-bar .bar .progress-bar__progress[data-v-664e14d0]{position:absolute;height:4px;background:#00E05A\n}\n.atomic-rewards-bar .bar .progress-bar__step[data-v-664e14d0]{background:#F0F2F7;position:absolute;width:4px;height:4px;border-radius:50%;transform:translateX(-50%);z-index:2\n}\n.atomic-rewards-bar .bar .progress-bar__reward[data-v-664e14d0],.atomic-rewards-bar .bar .progress-bar__volume[data-v-664e14d0]{display:flex;align-items:flex-end;height:auto;position:absolute;bottom:100%;margin-bottom:9px;width:100%\n}\n.atomic-rewards-bar .bar .progress-bar__reward .reward__item[data-v-664e14d0],.atomic-rewards-bar .bar .progress-bar__volume .reward__item[data-v-664e14d0]{display:flex;align-items:flex-end;position:absolute;transform:translateX(-50%)\n}\n.atomic-rewards-bar .bar .progress-bar__reward .reward__item.isLast[data-v-664e14d0],.atomic-rewards-bar .bar .progress-bar__volume .reward__item.isLast[data-v-664e14d0]{transform:translateX(-100%)\n}\n.atomic-rewards-bar .bar .progress-bar__reward .reward__item.isFirst[data-v-664e14d0],.atomic-rewards-bar .bar .progress-bar__volume .reward__item.isFirst[data-v-664e14d0]{transform:translateX(0)\n}\n.atomic-rewards-bar .bar .progress-bar__reward .reward__item span[data-v-664e14d0],.atomic-rewards-bar .bar .progress-bar__volume .reward__item span[data-v-664e14d0]{font-size:16px;line-height:22px;margin-left:6px\n}\n.atomic-rewards-bar .bar .progress-bar__reward .reward__item span.complete[data-v-664e14d0],.atomic-rewards-bar .bar .progress-bar__volume .reward__item span.complete[data-v-664e14d0]{color:#12E064\n}\n.atomic-rewards-bar .bar .progress-bar__volume[data-v-664e14d0]{margin-top:9px;top:100%;align-items:flex-start\n}\n.atomic-rewards-bar .bar .progress-bar__volume span[data-v-664e14d0]{color:#858FAD\n}\n", ""])
    },
    5088: function(t, e, a) {
        var n = a(5089);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("13d92f8b", n, !0, {})
    },
    5089: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "\n.atomic__circle-avatar[data-v-2e4cf8bd]{overflow:hidden;border-radius:100%\n}\n.atomic__circle-avatar img[data-v-2e4cf8bd]{object-fit:cover;height:100%;width:100%\n}\n.atomic__circle-avatar.result-success[data-v-2e4cf8bd]{border:4px solid #00E05A\n}\n.atomic__circle-avatar.result-error[data-v-2e4cf8bd]{border:4px solid #FF474B\n}\n", ""])
    },
    5090: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(778),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1252),
            o = a(3);
        var c = function(t) {
                a(5091)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-53f41028", null);
        e.default = l.exports
    },
    5091: function(t, e, a) {
        var n = a(5092);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("ee9541c0", n, !0, {})
    },
    5092: function(t, e, a) {
        e = t.exports = a(49)(!1);
        var n = a(373)(a(685));
        e.push([t.i, "\n.send-result-animation[data-v-53f41028]{position:relative;width:fit-content\n}\n.send-result-animation .token__animation svg[data-v-53f41028]{fill:#FF2528;animation:spinner2 3s 2 linear\n}\n.send-result-animation .token__animation svg.success[data-v-53f41028]{fill:#00E05A\n}\n.send-result-animation .avatar__wrap[data-v-53f41028]{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)\n}\n.send-result-animation .empty__nft[data-v-53f41028]{background-color:#404A65;border-radius:50%;background-image:url(" + n + ");background-repeat:no-repeat;background-position:center center;width:60px;height:60px;border:4px solid #FF474B\n}\n.send-result-animation .empty__nft.success[data-v-53f41028]{border:4px solid #00E05A\n}\n", ""])
    },
    5093: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(779),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1254),
            o = a(3);
        var c = function(t) {
                a(5094)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, null, null);
        e.default = l.exports
    },
    5094: function(t, e, a) {
        var n = a(5095);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("420397f6", n, !0, {})
    },
    5095: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "\n.exchange-dropdown{width:300px;background:#2A3552;border:1px solid #404A65;box-shadow:0px 0px 24px rgba(7,12,29,0.08),0px 4px 8px rgba(7,12,29,0.04),0px 6px 12px rgba(7,12,29,0.08);border-radius:8px;position:absolute;right:9px;margin-top:4px;z-index:1;text-align:left\n}\n.exchange-dropdown *{font-weight:400;font-size:14px;line-height:22px;letter-spacing:0.15px;color:rgba(255,255,255,0.92);text-transform:initial\n}\n.exchange-dropdown__search{border-bottom:1px solid #404A65;display:flex;padding:12.5px 20.5px 11.5px\n}\n.exchange-dropdown__search input{background:transparent;border:0;width:100%;margin-left:19.5px\n}\n.exchange-dropdown__search input::placeholder{color:#858FAD\n}\n.exchange-dropdown__search input:focus{outline:none\n}\n.exchange-dropdown__filters{display:flex;padding:16px 16px 17px;border-bottom:1px solid #404A65\n}\n.exchange-dropdown__filters-item{cursor:pointer;padding:5px 12px;background:#343F5C;border-radius:100px;border:1px solid #343F5C;margin-right:12px\n}\n.exchange-dropdown__filters-item:last-child{margin-right:0\n}\n.exchange-dropdown__filters-active{border-color:#1F9EFF;background:#28314C\n}\n.exchange-dropdown__coins{list-style:none;height:228px;overflow-x:hidden;margin-right:4px\n}\n.exchange-dropdown__coins::-webkit-scrollbar{width:4px\n}\n.exchange-dropdown__coins::-webkit-scrollbar-track{background:rgba(255,255,255,0.12);border-radius:100px;margin:6px 0 8px\n}\n.exchange-dropdown__coins::-webkit-scrollbar-thumb{border-radius:100px;border:3px solid #7A859F\n}\n.exchange-dropdown__coin{display:flex;justify-content:space-between;cursor:pointer;padding:6px 8px 8px 16px;position:relative\n}\n.exchange-dropdown__coin:hover{background:#343F5C\n}\n.exchange-dropdown__coin-left{display:flex;align-items:center\n}\n.exchange-dropdown__coin-left .icon{font-size:32px;line-height:1;margin-right:12px\n}\n.exchange-dropdown__coin-top{display:flex\n}\n.exchange-dropdown__coin-top .tag .element,.exchange-dropdown__coin-top .tag-element{font-size:10px;line-height:11px;letter-spacing:1px;text-transform:uppercase;border-radius:5px;padding:2px 5px;margin-left:5px;margin-top:3px;height:15px\n}\n.exchange-dropdown__coin-right{text-align:right\n}\n.exchange-dropdown__coin-red,.exchange-dropdown__coin-null,.exchange-dropdown__coin-green{font-size:12px;line-height:16px;letter-spacing:0.25px\n}\n.exchange-dropdown__coin-red{color:#F75555\n}\n.exchange-dropdown__coin-null{color:#858FAD\n}\n.exchange-dropdown__coin-green{color:#16C784\n}\n.exchange-dropdown__coin-empty{color:#858FAD;padding:16px 0;text-align:center\n}\n.exchange-dropdown__text-gray{font-size:12px;line-height:16px;letter-spacing:0.25px;color:#858FAD\n}\n", ""])
    },
    5096: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(781),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1260),
            o = a(3),
            c = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
        e.default = c.exports
    },
    5097: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(783),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1258),
            o = a(3),
            c = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
        e.default = c.exports
    },
    5099: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(785),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1259),
            o = a(3);
        var c = function(t) {
                a(5100)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, "data-v-099f350a", null);
        e.default = l.exports
    },
    5100: function(t, e, a) {
        var n = a(5101);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("603d66f2", n, !0, {})
    },
    5101: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "\n.send-token-result[data-v-099f350a]{height:100%\n}\n.send-token-result__success[data-v-099f350a]{display:flex;justify-content:space-evenly;flex-direction:column;align-items:center;height:100%;max-height:700px;padding-bottom:30px\n}\n.send-token-result__success .token__animation[data-v-099f350a]{display:flex;justify-content:center\n}\n.send-token-result__success .transaction_info[data-v-099f350a]{max-width:455px;display:flex;justify-content:center;align-items:center;overflow:hidden;word-break:break-all;flex-direction:column;position:relative\n}\n.send-token-result__success .transaction_info__body[data-v-099f350a]{display:flex;align-items:center;margin-top:10px\n}\n.send-token-result__success .transaction_info__body[data-v-099f350a]>:first-child{margin-right:20px;text-align:center\n}\n.send-token-result__success .transaction_info__body[data-v-099f350a]>:nth-child(2){display:inline-flex\n}\n.send-token-result__success .transaction_info__body__message[data-v-099f350a]{min-width:200px;padding:2px 15px;transform:translateX(50%);right:50%;font-size:11px;line-height:18px;position:absolute;background:#2fa6fa;border-radius:12px;text-align:center\n}\n.send-token-result__success .transaction_info__body__icon-button[data-v-099f350a]{height:30px;width:30px;background:#404A65;border-radius:100%;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0.7\n}\n.send-token-result__success .transaction_info__body__icon-button[data-v-099f350a]:hover{opacity:1\n}\n.send-token-result__success .info__group[data-v-099f350a]>:first-child{margin-bottom:0.5rem\n}\n.send-token-result__success .info__group *[data-v-099f350a]{text-align:center\n}\n.send-token-result__error[data-v-099f350a]{display:flex;justify-content:space-evenly;flex-direction:column;align-items:center;height:100%;max-height:700px\n}\n.send-token-result__error a[data-v-099f350a]{cursor:pointer\n}\n.send-token-result .control[data-v-099f350a]{display:flex;width:100%;justify-content:center;max-width:450px\n}\n.send-token-result .control .space[data-v-099f350a]{width:3rem\n}\n.send-token-result .info__group[data-v-099f350a]>:first-child{margin-bottom:1rem\n}\n.send-token-result .info__group .text[data-v-099f350a]{max-width:427px\n}\n.send-token-result .info__group *[data-v-099f350a]{text-align:center\n}\n", ""])
    },
    5102: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(31);
        var i = {
            props: {
                token: {
                    type: Object,
                    default: () => ({})
                }
            },
            computed: {
                ...(0, n.mapGetters)(["fiatCharacter"]),
                coin() {
                    const {
                        ticker: t
                    } = this.token;
                    return this.$wallets.getWallet(t)
                },
                avatar() {
                    var t;
                    return null === (t = this.token) || void 0 === t ? void 0 : t.getImageUrl()
                },
                sendText() {
                    var t;
                    return `You sent your ${(null===(t=this.token)||void 0===t?void 0:t.name)||""} NFT out`
                }
            }
        };
        e.default = i
    },
    5103: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(786),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1261),
            o = a(3),
            c = Object(o.a)(i.a, s.a, s.b, !1, null, null, null);
        e.default = c.exports
    },
    5104: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a(787),
            i = a.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
            a.d(e, t, (function() {
                return n[t]
            }))
        }(r);
        var s = a(1263),
            o = a(3);
        var c = function(t) {
                a(5105)
            },
            l = Object(o.a)(i.a, s.a, s.b, !1, c, null, null);
        e.default = l.exports
    },
    5105: function(t, e, a) {
        var n = a(5106);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("23069966", n, !0, {})
    },
    5106: function(t, e, a) {
        e = t.exports = a(49)(!1);
        var n = a(373)(a(685));
        e.push([t.i, "\n.nft__send-token-result{padding:20px 5% 0 !important\n}\n.error{color:#c03647;margin-bottom:1.5rem\n}\n.stage1__wrap{display:flex;flex-direction:column\n}\n.stage1.send-token__header{margin-bottom:5rem;display:flex\n}\n.stage1.send-token__header .empty__nft{width:60px;height:60px\n}\n.stage1.send-token__header>:first-child{margin-right:2rem\n}\n.stage1.send-token__wallet-info{margin-top:2.4rem\n}\n.stage1.send-token__wallet-info>:first-child{margin-bottom:0.5rem\n}\n.stage1.send-token__control{margin-top:3rem;display:flex;justify-content:center;flex-flow:column;align-items:center\n}\n.stage2.send-token__body{display:flex;flex-direction:column;align-items:center;margin-top:2rem\n}\n.stage2.send-token__body>:first-child{margin-bottom:1rem\n}\n.stage2.send-token__body .title{margin-bottom:1.2rem\n}\n.stage2.send-token__body .atomic__label-group{margin-bottom:10px;width:400px;justify-content:space-between;border-bottom:1px solid #404A65;padding-bottom:10px\n}\n.stage2.send-token__password{margin-top:44px\n}\n.stage2.send-token__password .password_wrap{max-width:40rem;margin:0 auto\n}\n.stage2.send-token__control{margin-top:3rem;display:flex;justify-content:center\n}\n.stage2__wrap{display:flex;flex-direction:column\n}\n.stage2__wrap .empty__nft{width:100px;height:100px\n}\n.stage2__wrap .send-token__password{width:400px;align-self:center\n}\n.stage3.send-token__sending{display:flex;justify-content:center;margin-top:10rem;flex-direction:column;align-items:center\n}\n.stage3.send-token__sending .text{margin-top:30px\n}\n.stage3.send-token__sending .sending-process-text{margin-top:1.5rem\n}\n.stage4__wrap{height:100%\n}\n.empty__nft{background-color:#404A65;border-radius:50%;background-image:url(" + n + ");background-repeat:no-repeat;background-position:center center\n}\n", ""])
    },
    5268: function(t, e, a) {
        var n = a(5269);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals);
        (0, a(50).default)("0e5dfb9d", n, !0, {})
    },
    5269: function(t, e, a) {
        (t.exports = a(49)(!1)).push([t.i, "", ""])
    },
    5371: function(t, e, a) {
        "use strict";
        var n = a(5372);
        (0, n.extend)("positive", {
            validate: t => t >= 0,
            message: "The {_field_} field must be a positive number"
        }), (0, n.extend)("required", {
            validate: t => ({
                required: !0,
                valid: -1 === ["", null, void 0].indexOf(t)
            }),
            computesRequired: !0,
            message: "The {_field_} must be not empty"
        })
    },
    598: function(t, e) {
        t.exports = require("net")
    },
    684: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getSocialLink = function(t, e, a) {
            return n[t].replace(/@tu/g, "&via=" + encodeURIComponent("")).replace(/@u/g, encodeURIComponent(e)).replace(/@t/g, encodeURIComponent(a)).replace(/@d/g, encodeURIComponent("")).replace(/@q/g, encodeURIComponent("")).replace(/@h/g, "").replace(/@m/g, encodeURIComponent(""))
        }, e.oneOf = function(t, e) {
            for (let a = 0; a < e.length; a++)
                if (t === e[a]) return !0;
            return !1
        };
        const n = {
            baidu: "http://cang.baidu.com/do/add?iu=@u&it=@t",
            buffer: "https://bufferapp.com/add?text=@t&url=@u",
            email: "mailto:?subject=@t&body=@u%0D%0A@d",
            evernote: "https://www.evernote.com/clip.action?url=@u&title=@t",
            facebook: "https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d&quote=@q&hashtag=@h",
            flipboard: "https://share.flipboard.com/bookmarklet/popout?v=2&url=@u&title=@t",
            hackernews: "https://news.ycombinator.com/submitlink?u=@u&t=@t",
            instapaper: "http://www.instapaper.com/edit?url=@u&title=@t&description=@d",
            line: "http://line.me/R/msg/text/?@t%0D%0A@u%0D%0A@d",
            linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=@u",
            messenger: "fb-messenger://share/?link=@u",
            odnoklassniki: "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@u&st.comments=@t",
            pinterest: "https://pinterest.com/pin/create/button/?url=@u&media=@m&description=@t",
            pocket: "https://getpocket.com/save?url=@u&title=@t",
            quora: "https://www.quora.com/share?url=@u&title=@t",
            reddit: "https://www.reddit.com/submit?url=@u&title=@t",
            skype: "https://web.skype.com/share?url=@t%0D%0A@u%0D%0A@d",
            sms: "sms:?body=@t%0D%0A@u%0D%0A@d",
            stumbleupon: "https://www.stumbleupon.com/submit?url=@u&title=@t",
            telegram: "https://t.me/share/url?url=@u&text=@t%0D%0A@d",
            tumblr: "https://www.tumblr.com/share/link?url=@u&name=@t&description=@d",
            twitter: "https://twitter.com/intent/tweet?text=@t&hashtags=@h@tu",
            viber: "viber://forward?text=@t%0D%0A@u%0D%0A@d",
            vk: "https://vk.com/share.php?url=@u&title=@t&description=@d&image=@m&noparse=true",
            weibo: "http://service.weibo.com/share/share.php?url=@u&title=@t&pic=@m",
            whatsapp: "https://api.whatsapp.com/send?text=@t%0D%0A%0D%0A@d",
            wordpress: "https://wordpress.com/press-this.php?u=@u&t=@t&s=@d&i=@m",
            xing: "https://www.xing.com/social/share/spi?op=share&url=@u&title=@t",
            yammer: "https://www.yammer.com/messages/new?login=true&status=@t%0D%0A@u%0D%0A@d"
        }
    },
    69: function(t, e) {
        t.exports = require("events")
    },
    72: function(t, e) {
        t.exports = require("assert")
    },
    744: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(187),
            i = a(2133);

        function r(t, e, a) {
            const r = (0, i.useStore)();
            const s = (0, n.ref)(new IntersectionObserver((function(e) {
                e.forEach(e => {
                    if (1 === e.intersectionRatio) {
                        const e = a.map(t => t.reasons).includes(t),
                            n = r.getters.getCompletedNotifyReasons;
                        (function(t) {
                            const e = t;
                            if (Array.isArray(e)) return a.reduce((t, a) => !1 === e.includes(a.reasons) ? [...t, a] : t, []);
                            return []
                        })(n).length > 0 && e && setTimeout(() => {
                            n.includes(t) || (r.commit("ADD_COMPLETED_REASON", t), r.dispatch("setCompletedReason"))
                        }, 1500)
                    }
                })
            }), {
                threshold: 1
            }));
            (0, n.onMounted)(() => {
                try {
                    var t;
                    null == s || null === (t = s.value) || void 0 === t || t.observe(e.value)
                } catch (t) {}
            }), (0, n.onUnmounted)(() => {
                try {
                    var t;
                    null == s || null === (t = s.value) || void 0 === t || t.unobserve(e.value)
                } catch (t) {}
            })
        }
        var s = {
            name: "AtomicNotifyPoint",
            props: {
                UID: {
                    type: String,
                    required: !0
                },
                type: {
                    type: String,
                    default: "new"
                }
            },
            setup({
                UID: t
            }) {
                const e = (0, n.ref)(null),
                    a = (0, i.useStore)();
                try {
                    var s;
                    const o = null === (s = a.getters.notifyTree) || void 0 === s ? void 0 : s[t];
                    if (o) {
                        const a = function(t) {
                            const e = (0, n.ref)(0),
                                a = (0, i.useStore)(),
                                r = null == t ? void 0 : t.map(t => t.reasons),
                                s = () => {
                                    var t;
                                    e.value = (null == r || null === (t = r.filter(t => !a.getters.getCompletedNotifyReasons.includes(t))) || void 0 === t ? void 0 : t.length) || 0
                                };
                            return s(), (0, n.watch)(() => a.getters.getCompletedNotifyReasons.length, s), e
                        }(o);
                        return r(t, e, o), {
                            notify: e,
                            amount: a
                        }
                    }
                    throw new Error("haven`t element")
                } catch (t) {
                    return {
                        notify: e,
                        amount: 0
                    }
                }
            }
        };
        e.default = s
    },
    752: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = a(1171),
            r = {
                name: "NFTInfo",
                components: {
                    ImageNFT: n(a(4590)).default
                },
                props: {
                    nft: {
                        type: Object,
                        default: () => ({})
                    }
                },
                data: () => ({
                    showSendPopup: !1,
                    tokenIdCopyTimeoutId: 0,
                    contractAddressCopyTimeoutId: 0,
                    imagePlaceholder: !1
                }),
                computed: {
                    contractAddress: () => ""
                },
                methods: {
                    shortener: i.shortener,
                    copyToClipboard(t, e) {
                        this.$electron.clipboard.writeText(t), this.setCopyTimeout(e)
                    },
                    setCopyTimeout(t) {
                        const e = t + "CopyTimeoutId";
                        clearTimeout(this[e]), this[e] = setTimeout(() => {
                            this[e] = 0
                        }, 2e3)
                    }
                }
            };
        e.default = r
    },
    756: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(684);
        const i = "atomic-button";
        var r = {
            name: "AtomicButton",
            props: {
                type: {
                    validator: t => (0, n.oneOf)(t, ["default", "primary", "secondary", "outline", "text", "info", "success", "warning", "error", "dark"]),
                    default: "default"
                },
                shape: {
                    validator: t => (0, n.oneOf)(t, ["circle", "circle-outline"])
                },
                size: {
                    validator: t => (0, n.oneOf)(t, ["small", "large", "medium", "icon"]),
                    default: () => "medium"
                },
                loading: Boolean,
                disabled: Boolean,
                htmlType: {
                    default: "button",
                    validator: t => (0, n.oneOf)(t, ["button", "submit", "reset"])
                },
                icon: {
                    type: String,
                    default: ""
                },
                customIcon: {
                    type: String,
                    default: ""
                },
                long: {
                    type: Boolean,
                    default: !1
                },
                ghost: {
                    type: Boolean,
                    default: !1
                }
            },
            data: () => ({
                showSlot: !0
            }),
            computed: {
                classes() {
                    return ["" + i, `${i}-${this.type}`, {
                        [i + "-long"]: this.long,
                        [`${i}-${this.shape}`]: !!this.shape,
                        [`${i}__size-${this.size}`]: this.size,
                        [i + "-loading"]: null !== this.loading && this.loading,
                        [i + "-icon-only"]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
                        [i + "-ghost"]: this.ghost
                    }]
                },
                isHrefPattern() {
                    const {
                        to: t
                    } = this;
                    return !!t
                },
                tagName() {
                    const {
                        isHrefPattern: t
                    } = this;
                    return t ? "a" : "button"
                },
                tagProps() {
                    const {
                        isHrefPattern: t
                    } = this;
                    if (t) {
                        const {
                            linkUrl: t,
                            target: e
                        } = this;
                        return {
                            href: t,
                            target: e
                        }
                    }
                    const {
                        htmlType: e
                    } = this;
                    return {
                        type: e
                    }
                }
            },
            mounted() {
                this.showSlot = void 0 !== this.$slots.default
            },
            methods: {
                handleClickLink(t) {
                    this.$emit("click", t);
                    const e = t.ctrlKey || t.metaKey;
                    this.handleCheckClick(t, e)
                },
                handleClick(t = !1) {
                    const e = this.$router;
                    if (t) {
                        let t = this.to;
                        if (e) {
                            const a = this.$route,
                                n = e.resolve(this.to, a, this.append);
                            t = n ? n.href : this.to
                        }
                        window.open(t)
                    } else e ? this.replace ? this.$router.replace(this.to) : this.$router.push(this.to) : window.location.href = this.to
                },
                handleCheckClick(t, e = !1) {
                    if (this.to) {
                        if ("_blank" === this.target) return !1;
                        t.preventDefault(), this.handleClick(e)
                    }
                }
            }
        };
        e.default = r
    },
    757: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "AtomicModalFullScreen",
            components: {
                Teleport: n(a(1174)).default
            },
            data: () => ({}),
            methods: {
                closeModal() {
                    this.$emit("close")
                }
            }
        };
        e.default = i
    },
    758: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(204);
        var i = {
            name: "NFTEmpty",
            components: {
                AtomicSpinner: n.AtomicSpinner
            },
            props: {
                isLoading: {
                    type: Boolean,
                    default: !0
                }
            },
            data: () => ({
                LINK: "https://atomicwallet.io/academy/brief-history-of-non-fungible-tokens-nfts"
            })
        };
        e.default = i
    },
    759: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(1172)),
            r = {
                name: "Thumbnail",
                components: {
                    ImagePreview: n(a(1173)).default
                },
                props: {
                    available: {
                        type: Boolean,
                        default: !1
                    },
                    url: {
                        type: String,
                        default: null
                    },
                    description: {
                        type: String,
                        default: ""
                    },
                    label: {
                        type: String,
                        default: ""
                    },
                    type: {
                        type: String,
                        default: "image/png"
                    }
                },
                data: () => ({
                    isLoading: !1,
                    isError: !1,
                    base64Img: null,
                    abortController: null
                }),
                watch: {
                    async url() {
                        await this.handleLoad()
                    }
                },
                async created() {
                    await this.handleLoad()
                },
                beforeDestroy() {
                    this.abortController && this.abortController.abort()
                },
                methods: {
                    async handleLoad() {
                        try {
                            if (this.isError = !1, this.isLoading = !0, this.available) {
                                let t = await i.default.read(this.url, {
                                    option: "file"
                                });
                                t || (t = await this.saveImageToCache()), this.base64Img = `data:${this.type};base64,${t}`
                            }
                        } catch (t) {
                            console.error(t), this.isError = !0
                        } finally {
                            this.isLoading = !1
                        }
                    },
                    async saveImageToCache() {
                        this.abortController = new AbortController;
                        const t = await fetch(this.url, {
                            signal: this.abortController.signal
                        });
                        if (!t.ok) throw new Error("Can't get buffer image");
                        const e = Buffer.from(await (await t.blob()).arrayBuffer());
                        return await i.default.save(this.url, e), await i.default.read(this.url, {
                            option: "file"
                        })
                    }
                }
            };
        e.default = r
    },
    760: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "AtomicEdit",
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
                    const {
                        value: e
                    } = t.target;
                    new RegExp(this.validationPattern).test(e) ? this.$emit("input", e) : this.$refs.input.value = this.value
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
    761: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            name: "AtomicHint",
            props: {
                value: {
                    type: Boolean,
                    default: !1
                },
                text: {
                    type: String,
                    default: ""
                },
                position: {
                    type: String,
                    default: "bottom"
                },
                closeIcon: {
                    type: Boolean,
                    default: !1
                }
            }
        };
        e.default = n
    },
    762: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(684),
            i = {
                name: "AtomicButton",
                props: {
                    type: {
                        validator: t => (0, n.oneOf)(t, ["default", "secondary", "success", "warning", "error"]),
                        default: "default"
                    },
                    external: {
                        type: Boolean,
                        default: !1
                    }
                }
            };
        e.default = i
    },
    763: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            name: "DropdownUI",
            props: {
                items: {
                    type: Array,
                    default: () => []
                },
                searchBy: {
                    type: Array,
                    default: () => ["title"]
                }
            },
            data: () => ({
                filter: ""
            }),
            computed: {
                filteredItems() {
                    var t;
                    const e = null === (t = this.filter) || void 0 === t ? void 0 : t.toLowerCase().trim();
                    return this.items.filter(t => {
                        var a;
                        return null === (a = this.searchBy) || void 0 === a ? void 0 : a.some(a => t[a].toLowerCase().indexOf(e) >= 0)
                    })
                }
            },
            mounted() {
                this.$refs.dropdown.focus()
            },
            methods: {
                selectItem(t) {
                    this.$emit("onSelect", t)
                }
            }
        };
        e.default = n
    },
    764: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            name: "AtomicTabs",
            props: {
                tabs: {
                    type: Array,
                    default: () => []
                },
                align: {
                    type: String,
                    default: "left"
                },
                value: {
                    type: Number,
                    default: 0
                }
            },
            methods: {
                changeActiveTab(t) {
                    this.$emit("input", t)
                }
            }
        };
        e.default = n
    },
    765: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            name: "AtomicPopup",
            props: {
                isShowClose: {
                    type: Boolean,
                    default: !0
                }
            },
            methods: {
                close() {
                    this.$emit("close")
                }
            }
        };
        e.default = n
    },
    766: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "AtomicModal",
            components: {
                Teleport: n(a(1174)).default
            },
            props: {
                title: {
                    type: String,
                    default: "Modal title"
                }
            },
            methods: {
                closeModal() {
                    this.$emit("close")
                }
            }
        };
        e.default = i
    },
    767: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        e.default = {
            name: "AtomicLoader"
        }
    },
    768: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        e.default = {
            name: "AtomicSpinner"
        }
    },
    769: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            name: "AtomicFlagIcon",
            props: {
                flagCode: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                flagSrc() {
                    const t = this.flagCode || "PLACEHOLDER";
                    try {
                        return a(4626)(`./${t}.svg`)
                    } catch (e) {
                        console.log(`FLAG ${t} not found`)
                    }
                    return a(1175)
                }
            }
        };
        e.default = n
    },
    770: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "AtomicInfoGroup",
            components: {
                AtomicHintWrap: n(a(4630)).default
            },
            props: {
                label: {
                    type: String,
                    default: ""
                },
                value: {
                    type: [String, Number],
                    default: ""
                },
                icon: {
                    type: String,
                    default: "user_added_outline_28"
                },
                hintText: {
                    type: String,
                    default: ""
                }
            },
            data: () => ({
                isShowHint: !1,
                isMouseOnHint: !1
            }),
            computed: {
                iconPath() {
                    return a(2244)(`./${this.icon}.svg`)
                }
            },
            methods: {
                showHint() {
                    this.isShowHint = !0, this.isMouseOnHint = !0
                },
                hideHint() {
                    this.isMouseOnHint = !1, setTimeout(() => {
                        this.isMouseOnHint || (this.isShowHint = !1)
                    }, 500)
                }
            }
        };
        e.default = i
    },
    771: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "AtomicHintWrap",
            components: {
                AtomicHint: n(a(2144)).default
            },
            props: {
                hintText: {
                    type: String,
                    default: ""
                },
                position: {
                    type: Object,
                    default: () => ({
                        x: "left",
                        y: "center"
                    })
                }
            },
            data: () => ({
                isShowHint: !1,
                isMouseOnHint: !1,
                hintPosition: "bottom"
            }),
            methods: {
                async showHint() {
                    await this.setHintPosition(), this.isShowHint = !0, this.isMouseOnHint = !0
                },
                hideHint() {
                    this.isMouseOnHint = !1, setTimeout(() => {
                        this.isMouseOnHint || (this.isShowHint = !1)
                    }, 500)
                },
                async setHintPosition() {
                    const t = this.$refs.atomic_hint_wrap_slot.getBoundingClientRect(),
                        {
                            innerWidth: e
                        } = window,
                        a = t.right + 125 + 30 < e;
                    this.hintPosition = a ? "bottom" : "bottom-left"
                }
            }
        };
        e.default = i
    },
    772: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            name: "AtomicLabelGroup",
            props: {
                label: {
                    type: String,
                    default: ""
                },
                value: {
                    type: String,
                    default: ""
                }
            }
        };
        e.default = n
    },
    773: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "AtomicLinkedCard",
            components: {
                AtomicSimpleCard: n(a(2256)).default
            },
            props: {
                linkedCardData: {
                    type: Array,
                    default: () => []
                }
            },
            methods: {
                isLast(t) {
                    return t === this.linkedCardData.length - 1
                }
            }
        };
        e.default = i
    },
    774: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            name: "AtomicSimpleCard",
            props: {
                icon: {
                    type: String,
                    default: "coins_stacks_2_outline"
                },
                headerText: {
                    type: String,
                    default: ""
                },
                bodyText: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                src() {
                    return a(2244)(`./${this.icon}.svg`)
                }
            }
        };
        e.default = n
    },
    775: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "AtomicRewardsBar",
            components: {
                RewardBox: n(a(5085)).default
            },
            props: {
                scaleLimits: {
                    type: Object,
                    default: () => ({
                        from: 1e3,
                        to: 3e3
                    })
                },
                steps: {
                    type: Array,
                    default: () => [{
                        value: 500,
                        reward: 5,
                        icon: "iconName1"
                    }, {
                        value: 1500,
                        reward: 15,
                        icon: "iconName2"
                    }, {
                        value: 3e3,
                        reward: 30,
                        icon: "iconName3"
                    }]
                },
                titles: {
                    type: Object,
                    default: () => ({
                        reward: "Rewards",
                        value: "Exchange volume"
                    })
                },
                value: {
                    type: Number,
                    default: 0,
                    validator: function(t) {
                        return !(t > 100 || t < 0)
                    }
                },
                absValue: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                valueInNumbers() {
                    return this.absValue || (this.scaleLimits.to - this.scaleLimits.from) / 100 * this.value + this.scaleLimits.from
                }
            },
            methods: {
                getStepLeft(t, e) {
                    let a = (t.value - this.scaleLimits.from) / (this.scaleLimits.to - this.scaleLimits.from);
                    return t.value >= this.scaleLimits.to && (a = 1), t.value <= this.scaleLimits.from && (a = 0), 100 * a + "%"
                }
            }
        };
        e.default = i
    },
    777: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = {
            name: "AtomicCircleAvatar",
            props: {
                src: {
                    type: String,
                    default: ""
                },
                size: {
                    type: Number,
                    default: 60
                }
            }
        };
        e.default = n
    },
    778: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "SendResultAnimation",
            components: {
                AtomicCircleAvatar: n(a(2258)).default
            },
            props: {
                isSuccess: {
                    type: Boolean,
                    default: !0
                },
                isAvailable: {
                    type: Boolean,
                    default: !0
                },
                src: {
                    type: String,
                    default: ""
                },
                size: {
                    type: Number,
                    default: 60
                }
            }
        };
        e.default = i
    },
    779: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(360)),
            r = a(31),
            s = n(a(83)),
            o = n(a(686));
        const c = {
                key: "all",
                name: "All"
            },
            l = [{
                key: "gainers",
                name: "Gainers"
            }, {
                key: "losers",
                name: "Losers"
            }];
        var d = {
            name: "ExchangeCoinDropdown",
            components: {
                TokenTag: o.default,
                CoinIcon: s.default
            },
            props: {
                filters: {
                    type: Array,
                    default: () => []
                },
                coins: {
                    type: Array,
                    default: () => []
                },
                newTagCoins: {
                    type: Array,
                    default: () => []
                },
                activeFilter: {
                    type: String,
                    default: "all"
                }
            },
            data: () => ({
                searchQuery: ""
            }),
            computed: {
                ...(0, r.mapGetters)(["fiatRate", "coinRate", "balanceSummary", "isUpdatingFiat"]),
                coinsDropdown() {
                    let t = 1;
                    return this.coins.map(e => {
                        const a = this.balance(e),
                            n = this.coinRate(this.fiatRate, e),
                            i = a * (null == n ? void 0 : n.rate);
                        return e.change = null == n ? void 0 : n.change, e.displayedBalance = a, e.fiatValue = i, e.sortIndex = t, t++, e
                    })
                },
                fixedNewTagCoins() {
                    return this.newTagCoins.map(t => {
                        const e = this.balance(t),
                            a = this.coinRate(this.fiatRate, t),
                            n = e * a.rate;
                        return t.change = null == a ? void 0 : a.change, t.displayedBalance = e, t.fiatValue = n, t
                    })
                },
                sortedCoins() {
                    const t = this.balanceSummary(this.fiatRate);
                    return "new" === this.activeFilter ? this.fixedNewTagCoins : "gainers" === this.activeFilter ? (0, i.default)(this.coinsDropdown).desc(t => t.change ? Number(t.change) : -1e8) : "losers" === this.activeFilter ? (0, i.default)(this.coinsDropdown).asc(t => t.change ? Number(t.change) : 1e8) : "all" === this.activeFilter && 0 === t ? (0, i.default)(this.coinsDropdown).asc(t => Number(t.sortIndex)) : (0, i.default)(this.coinsDropdown).desc(t => Number(t.fiatValue) > 0 ? Number(t.fiatValue) : -Number(t.sortIndex))
                },
                filteredCoins() {
                    return this.sortedCoins.filter(({
                        name: t,
                        ticker: e
                    }) => [e, t].some(t => !!~t.toLowerCase().indexOf(this.searchQuery.toLowerCase())))
                },
                filterConfig() {
                    const t = this.filters.map(t => ({
                        key: t.toLowerCase(),
                        name: t
                    }));
                    return [c, ...t, ...l]
                }
            },
            mounted() {
                var t, e;
                null === (t = this.$refs) || void 0 === t || null === (e = t.coinDropdown) || void 0 === e || e.focus()
            },
            methods: {
                selectCoin(t) {
                    return this.$emit("selectCoin", t), t
                },
                getTags(t) {
                    const {
                        settings: e
                    } = this.$buy;
                    return ((null == e ? void 0 : e.exchangesTags) || [])[t] || []
                },
                balance({
                    id: t,
                    balances: e,
                    divisibleBalance: a
                }) {
                    const n = localStorage.getItem(t + "-balance");
                    return +((null == e ? void 0 : e.available) || a || n || 0)
                }
            }
        };
        e.default = d
    },
    781: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(529)),
            r = a(30),
            s = a(2259),
            o = a(204);
        var c = {
            name: "NFTGallery",
            components: {
                Search: i.default,
                FilterUI: s.FilterUI,
                Thumbnail: o.Thumbnail
            },
            mixins: [r.ScrollMixin],
            props: {
                nfts: {
                    type: Array,
                    default: () => []
                }
            },
            data: () => ({
                searchQuery: "",
                nftFilter: [],
                activeFilter: [],
                isAllHided: !1,
                showFilter: !1
            }),
            computed: {
                isListEnded() {
                    return this.nfts.length <= 20 * this.page
                },
                filteredNFTs() {
                    var t;
                    let e = this.nfts;
                    const a = null === (t = this.searchQuery) || void 0 === t ? void 0 : t.toLowerCase();
                    return e = this.nfts.filter(t => (!a || -1 !== t.name.toLowerCase().indexOf(a)) && this.activeFilter.includes(t.ticker)), e.slice(0, Math.max(20, 20 * this.page))
                }
            },
            mounted() {
                this.setNFTfilters()
            },
            methods: {
                setNFTfilters() {
                    this.nftFilter = [];
                    const t = JSON.parse(localStorage.getItem("nft::filters"));
                    t && (this.activeFilter = t);
                    for (let e of this.$wallets) {
                        if (e.isNftSupported()) {
                            const a = {
                                id: e.id || e.ticker,
                                name: e.name,
                                ticker: e.ticker,
                                parent: e.deprecatedParent,
                                coin: e,
                                isActive: !0
                            };
                            this.nftFilter.push(a), t || this.activeFilter.push(a.id)
                        }
                    }
                },
                closeFilter() {
                    this.toggleFilter()
                },
                toggleFilter() {
                    this.showFilter = !this.showFilter
                },
                updateFilters(t) {
                    this.activeFilter = t.slice(), localStorage.setItem("nft::filters", JSON.stringify(this.activeFilter)), this.toggleFilter()
                }
            }
        };
        e.default = c
    },
    783: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "FilterUI",
            components: {
                ToggleLabel: n(a(5098)).default
            },
            props: {
                filterItems: {
                    type: Array,
                    default: () => []
                },
                activeFilter: {
                    type: Array,
                    default: () => []
                }
            },
            data: () => ({
                isHiddenAll: !1,
                currentActiveFilters: []
            }),
            mounted() {
                this.isHiddenAll = this.filterItems.length === this.activeFilter.length, this.currentActiveFilters = this.activeFilter.slice()
            },
            methods: {
                updateItem(t, e) {
                    e ? this.currentActiveFilters.push(t) : this.currentActiveFilters = this.currentActiveFilters.filter(e => e !== t)
                },
                toggleShowAll(t) {
                    if (this.currentActiveFilters = [], t)
                        for (let t of this.filterItems) this.currentActiveFilters.push(t.id);
                    this.isHiddenAll = t
                },
                close() {
                    this.$emit("onClose")
                },
                apply() {
                    this.$emit("onApply", this.currentActiveFilters)
                }
            }
        };
        e.default = i
    },
    785: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(527)),
            r = a(204),
            s = a(2260);
        var o = {
            name: "SendTokenResult",
            components: {
                SendResultAnimation: r.SendResultAnimation,
                RateStars: i.default
            },
            mixins: [s.SendNFTTokenMixin],
            props: {
                token: {
                    type: Object,
                    default: () => ({})
                },
                hash: {
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
                mailTitle: {
                    type: String,
                    default: ""
                },
                mailText: {
                    type: String,
                    default: ""
                },
                errorMessage: {
                    type: String,
                    default: ""
                },
                buttonName: {
                    type: Object,
                    default: null
                }
            },
            data: () => ({
                copied: !1
            }),
            computed: {
                version() {
                    return this.$platformVersion.getVersion()
                },
                explorerUrl() {
                    const {
                        explorer: t
                    } = this.$wallets.getWallet(this.coin.deprecatedParent);
                    return (null == t ? void 0 : t.webUrl) || ""
                },
                contactSupport: () => ({
                    tags: ["send_tag"]
                })
            },
            methods: {
                backActions(t) {
                    this.$emit(t)
                },
                openTransactionHash() {
                    this.$electron.shell.openExternal(`${this.explorerUrl}${this.hash}`)
                },
                copyTxid() {
                    this.copied = !0, this.$electron.clipboard.writeText(`${this.explorerUrl}${this.hash}`), setTimeout(() => {
                        this.copied = !1
                    }, 1300)
                }
            }
        };
        e.default = o
    },
    786: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n(a(687)),
            r = a(204);
        var s = {
            name: "NFTReceive",
            components: {
                DropdownUI: r.DropdownUI
            },
            data: () => ({
                activeTicker: "ETH",
                isChangeCoin: !1,
                addressCopyTimeoutId: 0
            }),
            computed: {
                dropdownCoins() {
                    return [...this.$wallets].filter(t => t.isNftSupported())
                },
                dropdownItems() {
                    return this.dropdownCoins.map(t => ({
                        icon: this.$iconClass(t),
                        title: t.ticker,
                        ticker: t.ticker,
                        description: t.name
                    }))
                },
                activeCoin() {
                    return this.dropdownCoins.find(({
                        ticker: t
                    }) => t === this.activeTicker)
                },
                icon() {
                    return this.$iconClass(this.activeCoin)
                },
                qrCodeImage() {
                    const t = new i.default({
                        value: this.$address(this.activeCoin.deprecatedParent)
                    });
                    return t.set({
                        size: 200,
                        padding: 5
                    }), t.toDataURL("image/jpeg")
                }
            },
            methods: {
                selectCoin(t) {
                    this.activeTicker = t.ticker, this.isChangeCoin = !1
                },
                closeDropdown() {
                    this.isChangeCoin && (this.isChangeCoin = !1)
                },
                toggleDropdown() {
                    this.isChangeCoin = !this.isChangeCoin
                },
                copyToClipboard() {
                    this.$electron.clipboard.writeText(this.activeCoin.address), this.setCopyTimeout()
                },
                setCopyTimeout() {
                    clearTimeout(this.addressCopyTimeoutId), this.addressCopyTimeoutId = setTimeout(() => {
                        this.addressCopyTimeoutId = 0
                    }, 2e3)
                }
            }
        };
        e.default = s
    },
    787: function(t, e, a) {
        "use strict";
        var n = a(2);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = a(31),
            r = a(30),
            s = a(2260),
            o = a(2259),
            c = a(204),
            l = a(1171),
            d = n(a(1177));
        var u = {
            name: "NFTSendToken",
            components: {
                AtomicEdit: c.AtomicEdit,
                AtomicPopup: c.AtomicPopup,
                AtomicLoader: c.AtomicLoader,
                SendTokenResult: o.SendTokenResult,
                LoadingEllipsis: d.default,
                AtomicLabelGroup: c.AtomicLabelGroup,
                AtomicCircleAvatar: c.AtomicCircleAvatar
            },
            mixins: [s.SendNFTTokenMixin, r.CurrencyConverter],
            data: () => ({
                fee: "",
                password: "",
                passwordError: "",
                address: "",
                addressError: "",
                sendingProcessText: "We are currently working on your NFT",
                isFeeEnough: !0,
                success: !0,
                txHash: "",
                stage: 1
            }),
            computed: {
                transferText() {
                    return t = this.token.name || "", e = this.coin.deprecatedParent, `Transfer ${t} to ${e} address`;
                    var t, e
                },
                available() {
                    return this.coin.toCurrencyUnit(new this.coin.BN(this.coin.balance || 0))
                }
            },
            mounted() {
                this.setFee()
            },
            methods: {
                ...(0, i.mapActions)(["setNFT"]),
                shortener: l.shortener,
                closeSendToken() {
                    4 === this.stage ? this.$emit("closeAll") : this.$emit("close")
                },
                tryAgain() {
                    this.stage = 1, this.address = "", this.password = ""
                },
                async setFee() {
                    const t = this.address || this.$address(this.coin.deprecatedParent),
                        e = {
                            contractAddress: this.token.contractAddress,
                            tokenId: this.token.tokenId,
                            tokenStandard: this.token.tokenStandard,
                            toAddress: t
                        },
                        a = await this.coin.getNftFee(e) || 0;
                    this.fee = this.coin.toCurrencyUnit(new this.coin.BN(a)), this.isFeeEnough = Number(this.available) > Number(this.fee)
                },
                async validateAddress() {
                    try {
                        return this.addressError = "", this.address.length || (this.addressError = "Address can't be blank"), await this.coin.validateAddress(this.address), "" === this.addressError
                    } catch (t) {
                        return this.addressError = "Please check the address", !1
                    }
                },
                async goToPassword() {
                    await this.validateAddress() && this.isFeeEnough && (this.stage = 2, this.$nextTick(() => this.$refs.confirmPassword.setFocus()))
                },
                validatePassword() {
                    return this.passwordError = "", "" === this.password ? this.passwordError = "Password can't be blank" : this.password !== this.$storage.password && (this.passwordError = "Wrong password"), "" === this.passwordError
                },
                async sendToken() {
                    if (this.validatePassword()) {
                        this.stage = 3, this.success = !1;
                        try {
                            const {
                                contractAddress: t,
                                tokenId: e
                            } = this.token, {
                                tx: a
                            } = await this.coin.transferNft(t, e, this.address);
                            this.txHash = a, this.txHash && (this.stage = 4, this.success = !0, this.setNFT({
                                isInitUpdate: !1,
                                isStopUpdate: !1
                            }))
                        } catch (t) {
                            this.stage = 4, console.error("ACT-1712: transfer error", t)
                        }
                    }
                }
            }
        };
        e.default = u
    }
});