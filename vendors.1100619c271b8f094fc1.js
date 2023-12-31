(window.webpackJsonp = window.webpackJsonp || []).push([
    [70], {
        1014: function(e, t, n) {
            "use strict";
            var r = c(n(196)),
                o = c(n(214)),
                i = c(n(394)),
                a = c(n(593)),
                u = (c(n(215)), c(n(391))),
                s = c(n(90));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function(e, t) {
                if (!e) throw new Error("Missing argument !");
                if (!t || t <= 0) throw new Error("Please provide a count number above 0");
                var n = e;
                console.time("sha3^n generation time");
                for (var r = 0; r < t; ++r) n = u.default.SHA3(n, {
                    outputLength: 256
                });
                return console.timeEnd("sha3^n generation time"), {
                    priv: u.default.enc.Hex.stringify(n)
                }
            };

            function d(e, t, n) {
                var r = o.default.ua2words(t, n),
                    i = u.default.SHA3(r, {
                        outputLength: 512
                    });
                o.default.words2ua(e, i)
            }

            function p(e, t, n, r) {
                a.default.lowlevel.crypto_shared_key_hash(e, r, n, d);
                for (var i = 0; i < t.length; i++) e[i] ^= t[i];
                return u.default.SHA3(o.default.ua2words(e, 32), {
                    outputLength: 256
                })
            }
            var h = function(e, t) {
                    if (!e || !t) throw new Error("Missing argument !");
                    var n = a.default.randomBytes(16),
                        r = o.default.ua2words(t, 32),
                        i = {
                            iv: o.default.ua2words(n, 16)
                        };
                    return {
                        ciphertext: u.default.AES.encrypt(u.default.enc.Hex.parse(e), r, i).ciphertext,
                        iv: n,
                        key: t
                    }
                },
                v = function(e) {
                    if (!e) throw new Error("Missing argument !");
                    var t = o.default.ua2words(e.key, 32),
                        n = {
                            iv: o.default.ua2words(e.iv, 16)
                        };
                    return u.default.enc.Hex.stringify(u.default.AES.decrypt(e, t, n))
                },
                y = function(e, t, n, r, i) {
                    if (!(e && t && n && r && i)) throw new Error("Missing argument !");
                    if (!s.default.isPrivateKeyValid(e)) throw new Error("Private key is not valid !");
                    if (!s.default.isPublicKeyValid(t)) throw new Error("Public key is not valid !");
                    var a = o.default.hex2ua_reversed(e),
                        c = o.default.hex2ua(t),
                        l = p(new Uint8Array(32), i, a, c),
                        d = {
                            iv: o.default.ua2words(r, 16)
                        },
                        h = u.default.AES.encrypt(u.default.enc.Hex.parse(o.default.utf8ToHex(n)), l, d);
                    return o.default.ua2hex(i) + o.default.ua2hex(r) + u.default.enc.Hex.stringify(h.ciphertext)
                };
            e.exports = {
                toMobileKey: function(e, t) {
                    if (!e || !t) throw new Error("Missing argument !");
                    if (!s.default.isPrivateKeyValid(t)) throw new Error("Private key is not valid !");
                    var n = u.default.lib.WordArray.random(32),
                        r = u.default.PBKDF2(e, n, {
                            keySize: 8,
                            iterations: 2e3
                        }),
                        i = a.default.randomBytes(16),
                        c = {
                            iv: o.default.ua2words(i, 16)
                        },
                        l = u.default.AES.encrypt(u.default.enc.Hex.parse(t), r, c);
                    return {
                        encrypted: o.default.ua2hex(i) + l.ciphertext,
                        salt: n.toString()
                    }
                },
                derivePassSha: l,
                passwordToPrivatekey: function(e, t, n) {
                    if (!e || !t || !n) throw new Error("Missing argument !");
                    var r = void 0;
                    if ("trezor" === n) r = {
                        priv: ""
                    }, e.isHW = !0;
                    else if (!e.password) throw new Error("Missing argument !");
                    if ("pass:6k" === n)
                        if (t.encrypted || t.iv) {
                            if (!t.encrypted || !t.iv) return !1;
                            var i = l(e.password, 20),
                                a = {
                                    ciphertext: u.default.enc.Hex.parse(t.encrypted),
                                    iv: o.default.hex2ua(t.iv),
                                    key: o.default.hex2ua(i.priv)
                                };
                            r = {
                                priv: v(a)
                            }
                        } else r = l(e.password, 6e3);
                    else if ("pass:bip32" === n) {
                        var s = l(e.password, 20),
                            c = {
                                ciphertext: u.default.enc.Hex.parse(t.encrypted),
                                iv: o.default.hex2ua(t.iv),
                                key: o.default.hex2ua(s.priv)
                            };
                        r = {
                            priv: v(c)
                        }
                    } else if ("pass:enc" === n) {
                        var d = l(e.password, 20),
                            p = {
                                ciphertext: u.default.enc.Hex.parse(t.encrypted),
                                iv: o.default.hex2ua(t.iv),
                                key: o.default.hex2ua(d.priv)
                            };
                        r = {
                            priv: v(p)
                        }
                    } else if (!r) return !1;
                    return e.privateKey = r.priv, !0
                },
                checkAddress: function(e, t, n) {
                    if (!e || !t || !n) throw new Error("Missing argument !");
                    if (!s.default.isPrivateKeyValid(e)) throw new Error("Private key is not valid !");
                    var o = n.toUpperCase().replace(/-/g, ""),
                        a = r.default.create(e);
                    return i.default.toAddress(a.publicKey.toString(), t) === o
                },
                randomKey: function() {
                    return a.default.randomBytes(32)
                },
                decrypt: v,
                encrypt: h,
                encodePrivKey: function(e, t) {
                    if (!e || !t) throw new Error("Missing argument !");
                    if (!s.default.isPrivateKeyValid(e)) throw new Error("Private key is not valid !");
                    var n = l(t, 20),
                        r = h(e, o.default.hex2ua(n.priv));
                    return {
                        ciphertext: u.default.enc.Hex.stringify(r.ciphertext),
                        iv: o.default.ua2hex(r.iv)
                    }
                },
                _encode: y,
                encode: function(e, t, n) {
                    if (!e || !t || !n) throw new Error("Missing argument !");
                    if (!s.default.isPrivateKeyValid(e)) throw new Error("Private key is not valid !");
                    if (!s.default.isPublicKeyValid(t)) throw new Error("Public key is not valid !");
                    var r = a.default.randomBytes(16),
                        o = a.default.randomBytes(32);
                    return y(e, t, n, r, o)
                },
                decode: function(e, t, n) {
                    if (!e || !t || !n) throw new Error("Missing argument !");
                    if (!s.default.isPrivateKeyValid(e)) throw new Error("Private key is not valid !");
                    if (!s.default.isPublicKeyValid(t)) throw new Error("Public key is not valid !");
                    var r = o.default.hex2ua(n),
                        i = new Uint8Array(r.buffer, 0, 32),
                        a = new Uint8Array(r.buffer, 32, 16),
                        c = new Uint8Array(r.buffer, 48),
                        l = o.default.hex2ua_reversed(e),
                        d = o.default.hex2ua(t),
                        h = p(new Uint8Array(32), i, l, d),
                        v = {
                            iv: o.default.ua2words(a, 16)
                        },
                        y = {
                            ciphertext: o.default.ua2words(c, c.length)
                        },
                        m = u.default.AES.decrypt(y, h, v);
                    return u.default.enc.Hex.stringify(m)
                }
            }
        },
        1685: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = p(n(3008)),
                o = p(n(3106)),
                i = p(n(3107)),
                a = p(n(3108)),
                u = p(n(3109)),
                s = p(n(3110)),
                c = p(n(3111)),
                l = p(n(3112)),
                d = p(n(3113));

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = {
                account: r.default,
                apostille: o.default,
                chain: i.default,
                endpoint: a.default,
                market: u.default,
                mosaic: s.default,
                namespace: c.default,
                supernodes: l.default,
                transaction: d.default
            }
        },
        196: function(e, t, n) {
            "use strict";
            var r = u(n(593)),
                o = u(n(214)),
                i = u(n(90)),
                a = u(n(391));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                    this.data = e, this.toString = function() {
                        return o.default.ua2hex(this.data)
                    }
                },
                c = function(e, t, n) {
                    var r = o.default.ua2words(t, n),
                        i = a.default.SHA3(r, {
                            outputLength: 512
                        });
                    o.default.words2ua(e, i)
                },
                l = function() {
                    this.sha3 = a.default.algo.SHA3.create({
                        outputLength: 512
                    }), this.reset = function() {
                        this.sha3 = a.default.algo.SHA3.create({
                            outputLength: 512
                        })
                    }, this.update = function(e) {
                        if (e instanceof s) {
                            var t = o.default.ua2words(e.data, e.data.length);
                            a.default.enc.Hex.stringify(t);
                            this.sha3.update(t)
                        } else if (e instanceof Uint8Array) {
                            var n = o.default.ua2words(e, e.length);
                            this.sha3.update(n)
                        } else {
                            if ("string" != typeof e) throw new Error("unhandled argument");
                            var r = a.default.enc.Hex.parse(e);
                            this.sha3.update(r)
                        }
                    }, this.finalize = function(e) {
                        var t = this.sha3.finalize();
                        o.default.words2ua(e, t)
                    }
                },
                d = function(e) {
                    var t = this;
                    this.publicKey = new s(new Uint8Array(r.default.lowlevel.crypto_sign_PUBLICKEYBYTES)), this.secretKey = o.default.hex2ua_reversed(e), r.default.lowlevel.crypto_sign_keypair_hash(this.publicKey.data, this.secretKey, c), this.sign = function(e) {
                        var n = new Uint8Array(64),
                            o = new l;
                        if (!r.default.lowlevel.crypto_sign_hash(n, t, e, o)) throw alert("Couldn't sign the tx, generated invalid signature"), new Error("Couldn't sign the tx, generated invalid signature");
                        return new s(n)
                    }
                };
            e.exports = {
                create: function(e) {
                    if (!e) throw new Error("Missing argument !");
                    if (!i.default.isPrivateKeyValid(e)) throw new Error("Private key is not valid !");
                    return new d(e)
                },
                verifySignature: function(e, t, n) {
                    if (!e || !t || !n) throw new Error("Missing argument !");
                    if (!i.default.isPublicKeyValid(e)) throw new Error("Public key is not valid !");
                    if (!i.default.isHexadecimal(n)) return !1;
                    if (128 !== n.length) return !1;
                    var a = new l,
                        u = o.default.hex2ua(e),
                        s = o.default.hex2ua(n),
                        c = r.default,
                        d = [c.gf(), c.gf(), c.gf(), c.gf()],
                        p = [c.gf(), c.gf(), c.gf(), c.gf()];
                    if (c.unpackneg(p, u)) return !1;
                    var h = new Uint8Array(64);
                    a.reset(), a.update(s.subarray(0, 32)), a.update(u), a.update(t), a.finalize(h), c.reduce(h), c.scalarmult(d, p, h);
                    var v = new Uint8Array(64);
                    return c.scalarbase(p, s.subarray(32)), c.add(d, p), c.pack(v, d), 0 === r.default.lowlevel.crypto_verify_32(s, 0, v, 0)
                }
            }
        },
        258: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i(n(90)),
                o = i(n(3009));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                return new Promise((function(t, n) {
                    (0, o.default)(e, (function(e, o, i) {
                        var a = void 0;
                        a = r.default.isJSON(i) ? JSON.parse(i) : i, e || 200 != o.statusCode ? n(e ? {
                            code: -1,
                            data: e
                        } : {
                            code: 0,
                            data: a
                        }) : t(a)
                    }))
                }))
            }
        },
        3008: function(e, t, n) {
            "use strict";
            var r = a(n(90)),
                o = a(n(396)),
                i = a(n(258));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                data: function(e, t) {
                    var n = {
                        url: r.default.formatEndpoint(e) + "/account/get",
                        method: "GET",
                        headers: o.default.urlEncoded,
                        qs: {
                            address: t
                        }
                    };
                    return (0, i.default)(n)
                },
                dataFromPublicKey: function(e, t) {
                    var n = {
                        url: r.default.formatEndpoint(e) + "/account/get/from-public-key",
                        method: "GET",
                        headers: o.default.urlEncoded,
                        qs: {
                            publicKey: t
                        }
                    };
                    return (0, i.default)(n)
                },
                batchData: function(e, t) {
                    for (var n = {
                            data: []
                        }, o = 0; o < t.length; o++) n.data.push({
                        account: t[o]
                    });
                    var a = {
                        url: r.default.formatEndpoint(e) + "/account/get/batch",
                        method: "POST",
                        json: !0,
                        body: n
                    };
                    return (0, i.default)(a)
                },
                historical: {
                    data: function(e, t, n) {
                        var a = {
                                params: {
                                    address: t,
                                    startHeight: n,
                                    endHeight: n,
                                    increment: 1
                                }
                            },
                            u = {
                                url: r.default.formatEndpoint(e) + "/account/historical/get",
                                method: "GET",
                                headers: o.default.urlEncoded,
                                qs: a
                            };
                        return (0, i.default)(u)
                    },
                    batchData: function(e, t, n) {
                        for (var o = {
                                accounts: [],
                                startHeight: n,
                                endHeight: n,
                                incrementBy: 1
                            }, a = 0; a < t.length; a++) o.accounts.push({
                            account: t[a]
                        });
                        var u = {
                            url: r.default.formatEndpoint(e) + "/account/historical/get/batch",
                            method: "POST",
                            json: !0,
                            body: o
                        };
                        return (0, i.default)(u)
                    }
                },
                unlockInfo: function(e) {
                    var t = {
                        url: r.default.formatEndpoint(e) + "/account/unlocked/info",
                        method: "POST",
                        headers: o.default.urlEncoded
                    };
                    return (0, i.default)(t)
                },
                forwarded: function(e, t) {
                    var n = {
                        url: r.default.formatEndpoint(e) + "/account/get/forwarded",
                        method: "GET",
                        headers: o.default.urlEncoded,
                        qs: {
                            address: t
                        }
                    };
                    return (0, i.default)(n)
                },
                mosaics: {
                    owned: function(e, t) {
                        var n = {
                            url: r.default.formatEndpoint(e) + "/account/mosaic/owned",
                            method: "GET",
                            headers: o.default.urlEncoded,
                            qs: {
                                address: t
                            }
                        };
                        return (0, i.default)(n)
                    },
                    definitions: function(e, t, n) {
                        var a = {
                            url: r.default.formatEndpoint(e) + "/account/mosaic/definition/page",
                            method: "GET",
                            headers: o.default.urlEncoded,
                            qs: {
                                address: t,
                                parent: n || ""
                            }
                        };
                        return (0, i.default)(a)
                    },
                    allDefinitions: function(e, t) {
                        var n = {
                            url: r.default.formatEndpoint(e) + "/account/mosaic/owned/definition",
                            method: "GET",
                            headers: o.default.urlEncoded,
                            qs: {
                                address: t
                            }
                        };
                        return (0, i.default)(n)
                    }
                },
                namespaces: {
                    owned: function(e, t, n) {
                        var a = {
                            url: r.default.formatEndpoint(e) + "/account/namespace/page",
                            method: "GET",
                            headers: o.default.urlEncoded,
                            qs: {
                                address: t,
                                parent: n || ""
                            }
                        };
                        return (0, i.default)(a)
                    }
                },
                harvesting: {
                    blocks: function(e, t) {
                        var n = {
                            url: r.default.formatEndpoint(e) + "/account/harvests",
                            method: "GET",
                            headers: o.default.urlEncoded,
                            qs: {
                                address: t
                            }
                        };
                        return (0, i.default)(n)
                    },
                    start: function(e, t) {
                        var n = {
                            url: r.default.formatEndpoint(e) + "/account/unlock",
                            method: "POST",
                            json: !0,
                            body: {
                                value: t
                            }
                        };
                        return (0, i.default)(n)
                    },
                    stop: function(e, t) {
                        var n = {
                            url: r.default.formatEndpoint(e) + "/account/lock",
                            method: "POST",
                            json: !0,
                            body: {
                                value: t
                            }
                        };
                        return (0, i.default)(n)
                    }
                },
                transactions: {
                    incoming: function(e, t, n, a) {
                        var u = {
                            address: t
                        };
                        n && (u.hash = n), a && (u.id = a);
                        var s = {
                            url: r.default.formatEndpoint(e) + "/account/transfers/incoming",
                            method: "GET",
                            headers: o.default.urlEncoded,
                            qs: u
                        };
                        return (0, i.default)(s)
                    },
                    outgoing: function(e, t, n, a) {
                        var u = {
                            address: t
                        };
                        n && (u.hash = n), a && (u.id = a);
                        var s = {
                            url: r.default.formatEndpoint(e) + "/account/transfers/outgoing",
                            method: "GET",
                            headers: o.default.urlEncoded,
                            qs: u
                        };
                        return (0, i.default)(s)
                    },
                    unconfirmed: function(e, t) {
                        var n = {
                            url: r.default.formatEndpoint(e) + "/account/unconfirmedTransactions",
                            method: "GET",
                            headers: o.default.urlEncoded,
                            qs: {
                                address: t
                            }
                        };
                        return (0, i.default)(n)
                    },
                    all: function(e, t, n, a) {
                        var u = {
                            address: t
                        };
                        n && (u.hash = n), a && (u.id = a);
                        var s = {
                            url: r.default.formatEndpoint(e) + "/account/transfers/all",
                            method: "GET",
                            headers: o.default.urlEncoded,
                            qs: u
                        };
                        return (0, i.default)(s)
                    }
                }
            }
        },
        3106: function(e, t, n) {
            "use strict";
            var r = a(n(258)),
                o = a(n(396)),
                i = a(n(596));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                audit: function(e, t, n) {
                    var a = {
                        url: i.default.apostilleAuditServer,
                        method: "POST",
                        headers: o.default.urlEncoded,
                        qs: {
                            publicKey: e,
                            data: t,
                            signedData: n
                        }
                    };
                    return (0, r.default)(a)
                }
            }
        },
        3107: function(e, t, n) {
            "use strict";
            var r = i(n(258)),
                o = i(n(90));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                height: function(e) {
                    var t = {
                        url: o.default.formatEndpoint(e) + "/chain/height",
                        method: "GET"
                    };
                    return (0, r.default)(t)
                },
                lastBlock: function(e) {
                    var t = {
                        url: o.default.formatEndpoint(e) + "/chain/last-block",
                        method: "GET"
                    };
                    return (0, r.default)(t)
                },
                time: function(e) {
                    var t = {
                        url: o.default.formatEndpoint(e) + "/time-sync/network-time",
                        method: "GET"
                    };
                    return (0, r.default)(t)
                },
                blockByHeight: function(e, t) {
                    var n = {
                        url: o.default.formatEndpoint(e) + "/block/at/public",
                        method: "POST",
                        json: !0,
                        body: {
                            height: t
                        }
                    };
                    return (0, r.default)(n)
                }
            }
        },
        3108: function(e, t, n) {
            "use strict";
            var r = i(n(258)),
                o = i(n(90));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                heartbeat: function(e) {
                    var t = {
                        url: o.default.formatEndpoint(e) + "/heartbeat",
                        method: "GET"
                    };
                    return (0, r.default)(t)
                }
            }
        },
        3109: function(e, t, n) {
            "use strict";
            var r = a(n(258)),
                o = a(n(396)),
                i = a(n(596));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                xem: function() {
                    var e = {
                        url: i.default.marketInfo,
                        method: "GET",
                        headers: o.default.urlEncoded,
                        qs: {
                            command: "returnTicker"
                        }
                    };
                    return (0, r.default)(e)
                },
                btc: function() {
                    var e = {
                        url: i.default.btcPrice,
                        method: "GET",
                        headers: o.default.urlEncoded,
                        qs: {
                            cors: !0
                        }
                    };
                    return (0, r.default)(e)
                }
            }
        },
        3110: function(e, t, n) {
            "use strict";
            var r = a(n(258)),
                o = a(n(396)),
                i = a(n(90));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                supply: function(e, t) {
                    var n = {
                        url: i.default.formatEndpoint(e) + "/mosaic/supply",
                        method: "GET",
                        headers: o.default.urlEncoded,
                        qs: {
                            mosaicId: t
                        }
                    };
                    return (0, r.default)(n)
                }
            }
        },
        3111: function(e, t, n) {
            "use strict";
            var r = a(n(258)),
                o = a(n(396)),
                i = a(n(90));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                roots: function(e, t) {
                    var n = {
                        url: i.default.formatEndpoint(e) + "/namespace/root/page",
                        method: "GET",
                        headers: o.default.urlEncoded,
                        qs: void 0 === t ? {
                            pageSize: 100
                        } : {
                            id: t,
                            pageSize: 100
                        }
                    };
                    return (0, r.default)(n)
                },
                mosaicDefinitions: function(e, t) {
                    var n = {
                        url: i.default.formatEndpoint(e) + "/namespace/mosaic/definition/page",
                        method: "GET",
                        headers: o.default.urlEncoded,
                        qs: {
                            namespace: t
                        }
                    };
                    return (0, r.default)(n)
                },
                info: function(e, t) {
                    var n = {
                        url: i.default.formatEndpoint(e) + "/namespace",
                        method: "GET",
                        headers: o.default.urlEncoded,
                        qs: {
                            namespace: t
                        }
                    };
                    return (0, r.default)(n)
                }
            }
        },
        3112: function(e, t, n) {
            "use strict";
            var r = i(n(258)),
                o = i(n(596));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                all: function() {
                    var e = {
                        url: o.default.supernodes,
                        method: "GET"
                    };
                    return (0, r.default)(e)
                },
                nearest: function(e) {
                    var t = {
                        url: "http://199.217.113.179:7782/nodes/nearest",
                        method: "POST",
                        json: !0,
                        body: {
                            latitude: e.latitude,
                            longitude: e.longitude,
                            numNodes: 5
                        }
                    };
                    return (0, r.default)(t)
                },
                get: function(e) {
                    var t = {
                        url: "http://199.217.113.179:7782/nodes",
                        method: "POST",
                        json: !0,
                        body: {
                            status: void 0 === e ? 1 : e
                        }
                    };
                    return (0, r.default)(t)
                }
            }
        },
        3113: function(e, t, n) {
            "use strict";
            var r = a(n(258)),
                o = a(n(396)),
                i = a(n(90));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                announce: function(e, t) {
                    var n = {
                        url: i.default.formatEndpoint(e) + "/transaction/announce",
                        method: "POST",
                        headers: o.default.json(t),
                        json: JSON.parse(t)
                    };
                    return (0, r.default)(n)
                },
                byHash: function(e, t) {
                    var n = {
                        url: i.default.formatEndpoint(e) + "/transaction/get",
                        method: "GET",
                        headers: o.default.urlEncoded,
                        qs: {
                            hash: t
                        }
                    };
                    return (0, r.default)(n)
                }
            }
        },
        3114: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = u(n(3115)),
                o = u(n(3144)),
                i = u(n(3145)),
                a = u(n(3146));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = {
                connector: r.default,
                requests: {
                    account: o.default.requests,
                    chain: i.default.requests
                },
                subscribe: {
                    account: o.default.subscribe,
                    chain: i.default.subscribe,
                    errors: a.default.subscribe
                }
            }
        },
        3115: function(e, t, n) {
            "use strict";
            var r, o = n(605),
                i = n(606),
                a = (r = i) && r.__esModule ? r : {
                    default: r
                },
                u = n(3143);
            var s = function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        var r = e;
                        o.SockJS ? r.socket = new o.SockJS(r.endpoint.host + ":" + r.endpoint.port + "/w/messages") : r.socket = new a.default(r.endpoint.host + ":" + r.endpoint.port + "/w/messages"), r.stompClient = u.Stomp.over(r.socket), r.stompClient.debug = !1, r.stompClient.connect({}, (function(e) {
                            t(!0)
                        }), (function(e) {
                            n("Connection failed!")
                        }))
                    }))
                },
                c = function() {
                    console.log("Connection to " + this.endpoint.host + " must be closed now."), this.socket.close(), this.socket.onclose = function(e) {
                        console.log(e)
                    }
                };
            e.exports = {
                create: function(e, t) {
                    return {
                        endpoint: e,
                        address: t.replace(/-/g, "").toUpperCase(),
                        socket: void 0,
                        stompClient: void 0,
                        connect: s,
                        close: c
                    }
                }
            }
        },
        3143: function(e, t, n) {
            "use strict";
            (function() {
                var e, n, r, o, i = {}.hasOwnProperty,
                    a = [].slice;
                e = {
                    LF: "\n",
                    NULL: "\0"
                }, r = function() {
                    var t;

                    function n(e, t, n) {
                        this.command = e, this.headers = null != t ? t : {}, this.body = null != n ? n : ""
                    }
                    return n.prototype.toString = function() {
                        var t, r, o, a, u;
                        for (r in t = [this.command], (o = !1 === this.headers["content-length"]) && delete this.headers["content-length"], u = this.headers) i.call(u, r) && (a = u[r], t.push(r + ":" + a));
                        return this.body && !o && t.push("content-length:" + n.sizeOfUTF8(this.body)), t.push(e.LF + this.body), t.join(e.LF)
                    }, n.sizeOfUTF8 = function(e) {
                        return e ? encodeURI(e).match(/%..|./g).length : 0
                    }, t = function(t) {
                        var r, o, i, a, u, s, c, l, d, p, h, v, y, m, g, _, b;
                        for (a = t.search(RegExp("" + e.LF + e.LF)), i = (u = t.substring(0, a).split(e.LF)).shift(), s = {}, v = function(e) {
                                return e.replace(/^\s+|\s+$/g, "")
                            }, y = 0, g = (_ = u.reverse()).length; y < g; y++) l = (p = _[y]).indexOf(":"), s[v(p.substring(0, l))] = v(p.substring(l + 1));
                        if (r = "", h = a + 2, s["content-length"]) d = parseInt(s["content-length"]), r = ("" + t).substring(h, h + d);
                        else
                            for (o = null, c = m = h, b = t.length;
                                (h <= b ? m < b : m > b) && (o = t.charAt(c)) !== e.NULL; c = h <= b ? ++m : --m) r += o;
                        return new n(i, s, r)
                    }, n.unmarshall = function(n) {
                        var r, o, i, a;
                        return o = n.split(RegExp("" + e.NULL + e.LF + "*")), (a = {
                            frames: [],
                            partial: ""
                        }).frames = function() {
                            var e, n, i, a;
                            for (a = [], e = 0, n = (i = o.slice(0, -1)).length; e < n; e++) r = i[e], a.push(t(r));
                            return a
                        }(), (i = o.slice(-1)[0]) === e.LF || -1 !== i.search(RegExp("" + e.NULL + e.LF + "*$")) ? a.frames.push(t(i)) : a.partial = i, a
                    }, n.marshall = function(t, r, o) {
                        return new n(t, r, o).toString() + e.NULL
                    }, n
                }(), n = function() {
                    var t;

                    function n(e) {
                        this.ws = e, this.ws.binaryType = "arraybuffer", this.counter = 0, this.connected = !1, this.heartbeat = {
                            outgoing: 1e4,
                            incoming: 1e4
                        }, this.maxWebSocketFrameSize = 16384, this.subscriptions = {}, this.partialData = ""
                    }
                    return n.prototype.debug = function(e) {
                        var t;
                        return "undefined" != typeof window && null !== window && null != (t = window.console) ? t.log(e) : void 0
                    }, t = function() {
                        return Date.now ? Date.now() : (new Date).valueOf
                    }, n.prototype._transmit = function(e, t, n) {
                        var o;
                        for (o = r.marshall(e, t, n), "function" == typeof this.debug && this.debug(">>> " + o);;) {
                            if (!(o.length > this.maxWebSocketFrameSize)) return this.ws.send(o);
                            this.ws.send(o.substring(0, this.maxWebSocketFrameSize)), o = o.substring(this.maxWebSocketFrameSize), "function" == typeof this.debug && this.debug("remaining = " + o.length)
                        }
                    }, n.prototype._setupHeartbeat = function(n) {
                        var r, i, a, u, s, c, l;
                        if ((s = n.version) === o.VERSIONS.V1_1 || s === o.VERSIONS.V1_2) return i = (c = function() {
                            var e, t, r, o;
                            for (o = [], e = 0, t = (r = n["heart-beat"].split(",")).length; e < t; e++) u = r[e], o.push(parseInt(u));
                            return o
                        }())[0], r = c[1], 0 !== this.heartbeat.outgoing && 0 !== r && (a = Math.max(this.heartbeat.outgoing, r), "function" == typeof this.debug && this.debug("send PING every " + a + "ms"), this.pinger = o.setInterval(a, (l = this, function() {
                            return l.ws.send(e.LF), "function" == typeof l.debug ? l.debug(">>> PING") : void 0
                        }))), 0 !== this.heartbeat.incoming && 0 !== i ? (a = Math.max(this.heartbeat.incoming, i), "function" == typeof this.debug && this.debug("check PONG every " + a + "ms"), this.ponger = o.setInterval(a, function(e) {
                            return function() {
                                var n;
                                if ((n = t() - e.serverActivity) > 2 * a) return "function" == typeof e.debug && e.debug("did not receive server activity for the last " + n + "ms"), e.ws.close()
                            }
                        }(this))) : void 0
                    }, n.prototype._parseConnect = function() {
                        var e, t, n, r;
                        switch (r = {}, (e = 1 <= arguments.length ? a.call(arguments, 0) : []).length) {
                            case 2:
                                r = e[0], t = e[1];
                                break;
                            case 3:
                                e[1] instanceof Function ? (r = e[0], t = e[1], n = e[2]) : (r.login = e[0], r.passcode = e[1], t = e[2]);
                                break;
                            case 4:
                                r.login = e[0], r.passcode = e[1], t = e[2], n = e[3];
                                break;
                            default:
                                r.login = e[0], r.passcode = e[1], t = e[2], n = e[3], r.host = e[4]
                        }
                        return [r, t, n]
                    }, n.prototype.connect = function() {
                        var n, i, u, s, c;
                        return n = 1 <= arguments.length ? a.call(arguments, 0) : [], s = this._parseConnect.apply(this, n), u = s[0], this.connectCallback = s[1], i = s[2], "function" == typeof this.debug && this.debug("Opening Web Socket..."), this.ws.onmessage = (c = this, function(n) {
                            var o, a, u, s, l, d, p, h, v, y, m, g, _;
                            if (s = "undefined" != typeof ArrayBuffer && n.data instanceof ArrayBuffer ? (o = new Uint8Array(n.data), "function" == typeof c.debug && c.debug("--- got data length: " + o.length), function() {
                                    var e, t, n;
                                    for (n = [], e = 0, t = o.length; e < t; e++) a = o[e], n.push(String.fromCharCode(a));
                                    return n
                                }().join("")) : n.data, c.serverActivity = t(), s !== e.LF) {
                                for ("function" == typeof c.debug && c.debug("<<< " + s), v = r.unmarshall(c.partialData + s), c.partialData = v.partial, _ = [], y = 0, m = (g = v.frames).length; y < m; y++) switch ((l = g[y]).command) {
                                    case "CONNECTED":
                                        "function" == typeof c.debug && c.debug("connected to server " + l.headers.server), c.connected = !0, c._setupHeartbeat(l.headers), _.push("function" == typeof c.connectCallback ? c.connectCallback(l) : void 0);
                                        break;
                                    case "MESSAGE":
                                        h = l.headers.subscription, (p = c.subscriptions[h] || c.onreceive) ? (u = c, d = l.headers["message-id"], l.ack = function(e) {
                                            return null == e && (e = {}), u.ack(d, h, e)
                                        }, l.nack = function(e) {
                                            return null == e && (e = {}), u.nack(d, h, e)
                                        }, _.push(p(l))) : _.push("function" == typeof c.debug ? c.debug("Unhandled received MESSAGE: " + l) : void 0);
                                        break;
                                    case "RECEIPT":
                                        _.push("function" == typeof c.onreceipt ? c.onreceipt(l) : void 0);
                                        break;
                                    case "ERROR":
                                        _.push("function" == typeof i ? i(l) : void 0);
                                        break;
                                    default:
                                        _.push("function" == typeof c.debug ? c.debug("Unhandled frame: " + l) : void 0)
                                }
                                return _
                            }
                            "function" == typeof c.debug && c.debug("<<< PONG")
                        }), this.ws.onclose = function(e) {
                            return function() {
                                var t;
                                return t = "Whoops! Lost connection to " + e.ws.url, "function" == typeof e.debug && e.debug(t), e._cleanUp(), "function" == typeof i ? i(t) : void 0
                            }
                        }(this), this.ws.onopen = function(e) {
                            return function() {
                                return "function" == typeof e.debug && e.debug("Web Socket Opened..."), u["accept-version"] = o.VERSIONS.supportedVersions(), u["heart-beat"] = [e.heartbeat.outgoing, e.heartbeat.incoming].join(","), e._transmit("CONNECT", u)
                            }
                        }(this)
                    }, n.prototype.disconnect = function(e, t) {
                        return null == t && (t = {}), this._transmit("DISCONNECT", t), this.ws.onclose = null, this.ws.close(), this._cleanUp(), "function" == typeof e ? e() : void 0
                    }, n.prototype._cleanUp = function() {
                        if (this.connected = !1, this.pinger && o.clearInterval(this.pinger), this.ponger) return o.clearInterval(this.ponger)
                    }, n.prototype.send = function(e, t, n) {
                        return null == t && (t = {}), null == n && (n = ""), t.destination = e, this._transmit("SEND", t, n)
                    }, n.prototype.subscribe = function(e, t, n) {
                        var r;
                        return null == n && (n = {}), n.id || (n.id = "sub-" + this.counter++), n.destination = e, this.subscriptions[n.id] = t, this._transmit("SUBSCRIBE", n), r = this, {
                            id: n.id,
                            unsubscribe: function() {
                                return r.unsubscribe(n.id)
                            }
                        }
                    }, n.prototype.unsubscribe = function(e) {
                        return delete this.subscriptions[e], this._transmit("UNSUBSCRIBE", {
                            id: e
                        })
                    }, n.prototype.begin = function(e) {
                        var t, n;
                        return n = e || "tx-" + this.counter++, this._transmit("BEGIN", {
                            transaction: n
                        }), t = this, {
                            id: n,
                            commit: function() {
                                return t.commit(n)
                            },
                            abort: function() {
                                return t.abort(n)
                            }
                        }
                    }, n.prototype.commit = function(e) {
                        return this._transmit("COMMIT", {
                            transaction: e
                        })
                    }, n.prototype.abort = function(e) {
                        return this._transmit("ABORT", {
                            transaction: e
                        })
                    }, n.prototype.ack = function(e, t, n) {
                        return null == n && (n = {}), n["message-id"] = e, n.subscription = t, this._transmit("ACK", n)
                    }, n.prototype.nack = function(e, t, n) {
                        return null == n && (n = {}), n["message-id"] = e, n.subscription = t, this._transmit("NACK", n)
                    }, n
                }(), o = {
                    VERSIONS: {
                        V1_0: "1.0",
                        V1_1: "1.1",
                        V1_2: "1.2",
                        supportedVersions: function() {
                            return "1.1,1.0"
                        }
                    },
                    client: function(e, t) {
                        var r;
                        return null == t && (t = ["v10.stomp", "v11.stomp"]), r = new(o.WebSocketClass || WebSocket)(e, t), new n(r)
                    },
                    over: function(e) {
                        return new n(e)
                    },
                    Frame: r
                }, null !== t && (t.Stomp = o), "undefined" != typeof window && null !== window ? (o.setInterval = function(e, t) {
                    return window.setInterval(t, e)
                }, o.clearInterval = function(e) {
                    return window.clearInterval(e)
                }, window.Stomp = o) : t || (self.Stomp = o)
            }).call(void 0)
        },
        3144: function(e, t, n) {
            "use strict";
            var r, o = n(605),
                i = n(606),
                a = (r = i) && r.__esModule ? r : {
                    default: r
                };
            var u = function(e) {
                var t = e;
                return o.SockJS ? t.socket.readyState === o.SockJS.OPEN : t.socket.readyState === a.default.OPEN
            };
            e.exports = {
                requests: {
                    data: function e(t, n) {
                        var r = t;
                        if (u(t)) {
                            var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                            r.stompClient.send("/w/api/account/get", {}, "{'account':'" + o + "'}")
                        } else r.timeoutHandle = setTimeout((function() {
                            e(t, n)
                        }), 100)
                    },
                    transactions: {
                        recent: function e(t, n) {
                            var r = t;
                            if (u(t)) {
                                var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                                r.stompClient.send("/w/api/account/transfers/all", {}, "{'account':'" + o + "'}")
                            } else r.timeoutHandle = setTimeout((function() {
                                e(t, n)
                            }), 100)
                        }
                    },
                    mosaics: {
                        owned: function e(t, n) {
                            var r = t;
                            if (u(t)) {
                                var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                                r.stompClient.send("/w/api/account/mosaic/owned", {}, "{'account':'" + o + "'}")
                            } else r.timeoutHandle = setTimeout((function() {
                                e(t, n)
                            }), 100)
                        },
                        definitions: function e(t, n) {
                            var r = t;
                            if (u(t)) {
                                var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                                r.stompClient.send("/w/api/account/mosaic/owned/definition", {}, "{'account':'" + o + "'}")
                            } else r.timeoutHandle = setTimeout((function() {
                                e(t, n)
                            }), 100)
                        }
                    },
                    namespaces: {
                        owned: function e(t, n) {
                            var r = t;
                            if (u(t)) {
                                var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                                r.stompClient.send("/w/api/account/namespace/owned", {}, "{'account':'" + o + "'}")
                            } else r.timeoutHandle = setTimeout((function() {
                                e(t, n)
                            }), 100)
                        }
                    }
                },
                subscribe: {
                    data: function(e, t, n) {
                        var r = e;
                        if (!u(e)) return !1;
                        var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                        r.stompClient.subscribe("/account/" + o, (function(e) {
                            t(JSON.parse(e.body))
                        }))
                    },
                    transactions: {
                        recent: function(e, t, n) {
                            var r = e;
                            if (!u(e)) return !1;
                            var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                            r.stompClient.subscribe("/recenttransactions/" + o, (function(e) {
                                t(JSON.parse(e.body))
                            }))
                        },
                        confirmed: function(e, t, n) {
                            var r = e;
                            if (!u(e)) return !1;
                            var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                            r.stompClient.subscribe("/transactions/" + o, (function(e) {
                                t(JSON.parse(e.body))
                            }))
                        },
                        unconfirmed: function(e, t, n) {
                            var r = e;
                            if (!u(e)) return !1;
                            var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                            r.stompClient.subscribe("/unconfirmed/" + o, (function(e) {
                                t(JSON.parse(e.body))
                            }))
                        }
                    },
                    mosaics: {
                        owned: function(e, t, n) {
                            var r = e;
                            if (!u(e)) return !1;
                            var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                            r.stompClient.subscribe("/account/mosaic/owned/" + o, (function(e) {
                                t(JSON.parse(e.body), o)
                            }))
                        },
                        definitions: function(e, t, n) {
                            var r = e;
                            if (!u(e)) return !1;
                            var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                            r.stompClient.subscribe("/account/mosaic/owned/definition/" + o, (function(e) {
                                t(JSON.parse(e.body))
                            }))
                        }
                    },
                    namespaces: {
                        owned: function(e, t, n) {
                            var r = e;
                            if (!u(e)) return !1;
                            var o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
                            r.stompClient.subscribe("/account/namespace/owned/" + o, (function(e) {
                                t(JSON.parse(e.body), o)
                            }))
                        }
                    }
                }
            }
        },
        3145: function(e, t, n) {
            "use strict";
            var r, o = n(605),
                i = n(606),
                a = (r = i) && r.__esModule ? r : {
                    default: r
                };
            var u = function(e) {
                var t = e;
                return o.SockJS ? t.socket.readyState === o.SockJS.OPEN : t.socket.readyState === a.default.OPEN
            };
            e.exports = {
                requests: {},
                subscribe: {
                    height: function(e, t) {
                        var n = e;
                        if (!u(e)) return !1;
                        n.stompClient.subscribe("/blocks/new", (function(e) {
                            t(JSON.parse(e.body))
                        }))
                    },
                    blocks: function(e, t) {
                        var n = e;
                        if (!u(e)) return !1;
                        n.stompClient.subscribe("/blocks", (function(e) {
                            t(JSON.parse(e.body))
                        }))
                    }
                }
            }
        },
        3146: function(e, t, n) {
            "use strict";
            var r, o = n(605),
                i = n(606),
                a = (r = i) && r.__esModule ? r : {
                    default: r
                };
            e.exports = {
                subscribe: function(e, t) {
                    var n = e;
                    if (! function(e) {
                            var t = e;
                            return o.SockJS ? t.socket.readyState === o.SockJS.OPEN : t.socket.readyState === a.default.OPEN
                        }(e)) return !1;
                    n.stompClient.subscribe("/errors", (function(e) {
                        t(JSON.parse(e.body))
                    }))
                }
            }
        },
        396: function(e, t, n) {
            "use strict";
            e.exports = {
                urlEncoded: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                json: function(e) {
                    return {
                        "Content-Type": "application/json",
                        "Content-Length": Buffer.from(e).byteLength
                    }
                }
            }
        },
        593: function(e, t, n) {
            "use strict";
            ! function(e) {
                var t = function(e) {
                        var t, n = new Float64Array(16);
                        if (e)
                            for (t = 0; t < e.length; t++) n[t] = e[t];
                        return n
                    },
                    r = function() {
                        throw new Error("no PRNG")
                    },
                    o = (new Uint8Array(16), new Uint8Array(32));
                o[0] = 9;
                var i = t(),
                    a = t([1]),
                    u = t([56129, 1]),
                    s = t([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                    c = t([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                    l = t([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                    d = t([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                    p = t([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                function h(e, t, n, r, o) {
                    var i, a = 0;
                    for (i = 0; i < o; i++) a |= e[t + i] ^ n[r + i];
                    return (1 & a - 1 >>> 8) - 1
                }

                function v(e, t, n, r) {
                    return h(e, t, n, r, 32)
                }

                function y(e, t) {
                    var n;
                    for (n = 0; n < 16; n++) e[n] = 0 | t[n]
                }

                function m(e) {
                    var t, n, r = 1;
                    for (t = 0; t < 16; t++) n = e[t] + r + 65535, r = Math.floor(n / 65536), e[t] = n - 65536 * r;
                    e[0] += r - 1 + 37 * (r - 1)
                }

                function g(e, t, n) {
                    for (var r, o = ~(n - 1), i = 0; i < 16; i++) r = o & (e[i] ^ t[i]), e[i] ^= r, t[i] ^= r
                }

                function _(e, n) {
                    var r, o, i, a = t(),
                        u = t();
                    for (r = 0; r < 16; r++) u[r] = n[r];
                    for (m(u), m(u), m(u), o = 0; o < 2; o++) {
                        for (a[0] = u[0] - 65517, r = 1; r < 15; r++) a[r] = u[r] - 65535 - (a[r - 1] >> 16 & 1), a[r - 1] &= 65535;
                        a[15] = u[15] - 32767 - (a[14] >> 16 & 1), i = a[15] >> 16 & 1, a[14] &= 65535, g(u, a, 1 - i)
                    }
                    for (r = 0; r < 16; r++) e[2 * r] = 255 & u[r], e[2 * r + 1] = u[r] >> 8
                }

                function b(e, t) {
                    var n = new Uint8Array(32),
                        r = new Uint8Array(32);
                    return _(n, e), _(r, t), v(n, 0, r, 0)
                }

                function w(e) {
                    var t = new Uint8Array(32);
                    return _(t, e), 1 & t[0]
                }

                function S(e, t) {
                    var n;
                    for (n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
                    e[15] &= 32767
                }

                function E(e, t, n) {
                    for (var r = 0; r < 16; r++) e[r] = t[r] + n[r]
                }

                function x(e, t, n) {
                    for (var r = 0; r < 16; r++) e[r] = t[r] - n[r]
                }

                function O(e, t, n) {
                    var r, o, i = 0,
                        a = 0,
                        u = 0,
                        s = 0,
                        c = 0,
                        l = 0,
                        d = 0,
                        p = 0,
                        h = 0,
                        v = 0,
                        y = 0,
                        m = 0,
                        g = 0,
                        _ = 0,
                        b = 0,
                        w = 0,
                        S = 0,
                        E = 0,
                        x = 0,
                        O = 0,
                        C = 0,
                        k = 0,
                        T = 0,
                        N = 0,
                        M = 0,
                        A = 0,
                        P = 0,
                        U = 0,
                        J = 0,
                        I = 0,
                        R = 0,
                        L = n[0],
                        H = n[1],
                        G = n[2],
                        q = n[3],
                        F = n[4],
                        D = n[5],
                        B = n[6],
                        X = n[7],
                        K = n[8],
                        V = n[9],
                        z = n[10],
                        W = n[11],
                        Y = n[12],
                        $ = n[13],
                        Z = n[14],
                        Q = n[15];
                    i += (r = t[0]) * L, a += r * H, u += r * G, s += r * q, c += r * F, l += r * D, d += r * B, p += r * X, h += r * K, v += r * V, y += r * z, m += r * W, g += r * Y, _ += r * $, b += r * Z, w += r * Q, a += (r = t[1]) * L, u += r * H, s += r * G, c += r * q, l += r * F, d += r * D, p += r * B, h += r * X, v += r * K, y += r * V, m += r * z, g += r * W, _ += r * Y, b += r * $, w += r * Z, S += r * Q, u += (r = t[2]) * L, s += r * H, c += r * G, l += r * q, d += r * F, p += r * D, h += r * B, v += r * X, y += r * K, m += r * V, g += r * z, _ += r * W, b += r * Y, w += r * $, S += r * Z, E += r * Q, s += (r = t[3]) * L, c += r * H, l += r * G, d += r * q, p += r * F, h += r * D, v += r * B, y += r * X, m += r * K, g += r * V, _ += r * z, b += r * W, w += r * Y, S += r * $, E += r * Z, x += r * Q, c += (r = t[4]) * L, l += r * H, d += r * G, p += r * q, h += r * F, v += r * D, y += r * B, m += r * X, g += r * K, _ += r * V, b += r * z, w += r * W, S += r * Y, E += r * $, x += r * Z, O += r * Q, l += (r = t[5]) * L, d += r * H, p += r * G, h += r * q, v += r * F, y += r * D, m += r * B, g += r * X, _ += r * K, b += r * V, w += r * z, S += r * W, E += r * Y, x += r * $, O += r * Z, C += r * Q, d += (r = t[6]) * L, p += r * H, h += r * G, v += r * q, y += r * F, m += r * D, g += r * B, _ += r * X, b += r * K, w += r * V, S += r * z, E += r * W, x += r * Y, O += r * $, C += r * Z, k += r * Q, p += (r = t[7]) * L, h += r * H, v += r * G, y += r * q, m += r * F, g += r * D, _ += r * B, b += r * X, w += r * K, S += r * V, E += r * z, x += r * W, O += r * Y, C += r * $, k += r * Z, T += r * Q, h += (r = t[8]) * L, v += r * H, y += r * G, m += r * q, g += r * F, _ += r * D, b += r * B, w += r * X, S += r * K, E += r * V, x += r * z, O += r * W, C += r * Y, k += r * $, T += r * Z, N += r * Q, v += (r = t[9]) * L, y += r * H, m += r * G, g += r * q, _ += r * F, b += r * D, w += r * B, S += r * X, E += r * K, x += r * V, O += r * z, C += r * W, k += r * Y, T += r * $, N += r * Z, M += r * Q, y += (r = t[10]) * L, m += r * H, g += r * G, _ += r * q, b += r * F, w += r * D, S += r * B, E += r * X, x += r * K, O += r * V, C += r * z, k += r * W, T += r * Y, N += r * $, M += r * Z, A += r * Q, m += (r = t[11]) * L, g += r * H, _ += r * G, b += r * q, w += r * F, S += r * D, E += r * B, x += r * X, O += r * K, C += r * V, k += r * z, T += r * W, N += r * Y, M += r * $, A += r * Z, P += r * Q, g += (r = t[12]) * L, _ += r * H, b += r * G, w += r * q, S += r * F, E += r * D, x += r * B, O += r * X, C += r * K, k += r * V, T += r * z, N += r * W, M += r * Y, A += r * $, P += r * Z, U += r * Q, _ += (r = t[13]) * L, b += r * H, w += r * G, S += r * q, E += r * F, x += r * D, O += r * B, C += r * X, k += r * K, T += r * V, N += r * z, M += r * W, A += r * Y, P += r * $, U += r * Z, J += r * Q, b += (r = t[14]) * L, w += r * H, S += r * G, E += r * q, x += r * F, O += r * D, C += r * B, k += r * X, T += r * K, N += r * V, M += r * z, A += r * W, P += r * Y, U += r * $, J += r * Z, I += r * Q, w += (r = t[15]) * L, a += 38 * (E += r * G), u += 38 * (x += r * q), s += 38 * (O += r * F), c += 38 * (C += r * D), l += 38 * (k += r * B), d += 38 * (T += r * X), p += 38 * (N += r * K), h += 38 * (M += r * V), v += 38 * (A += r * z), y += 38 * (P += r * W), m += 38 * (U += r * Y), g += 38 * (J += r * $), _ += 38 * (I += r * Z), b += 38 * (R += r * Q), i = (r = (i += 38 * (S += r * H)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536)), a = (r = a + o + 65535) - 65536 * (o = Math.floor(r / 65536)), u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536)), s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536)), c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536)), l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536)), d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536)), p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536)), h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536)), v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536)), y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536)), m = (r = m + o + 65535) - 65536 * (o = Math.floor(r / 65536)), g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536)), _ = (r = _ + o + 65535) - 65536 * (o = Math.floor(r / 65536)), b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536)), w = (r = w + o + 65535) - 65536 * (o = Math.floor(r / 65536)), i = (r = (i += o - 1 + 37 * (o - 1)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536)), a = (r = a + o + 65535) - 65536 * (o = Math.floor(r / 65536)), u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536)), s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536)), c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536)), l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536)), d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536)), p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536)), h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536)), v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536)), y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536)), m = (r = m + o + 65535) - 65536 * (o = Math.floor(r / 65536)), g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536)), _ = (r = _ + o + 65535) - 65536 * (o = Math.floor(r / 65536)), b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536)), w = (r = w + o + 65535) - 65536 * (o = Math.floor(r / 65536)), i += o - 1 + 37 * (o - 1), e[0] = i, e[1] = a, e[2] = u, e[3] = s, e[4] = c, e[5] = l, e[6] = d, e[7] = p, e[8] = h, e[9] = v, e[10] = y, e[11] = m, e[12] = g, e[13] = _, e[14] = b, e[15] = w
                }

                function C(e, t) {
                    O(e, t, t)
                }

                function k(e, n) {
                    var r, o = t();
                    for (r = 0; r < 16; r++) o[r] = n[r];
                    for (r = 253; r >= 0; r--) C(o, o), 2 !== r && 4 !== r && O(o, o, n);
                    for (r = 0; r < 16; r++) e[r] = o[r]
                }

                function T(e, n) {
                    var r, o = t();
                    for (r = 0; r < 16; r++) o[r] = n[r];
                    for (r = 250; r >= 0; r--) C(o, o), 1 !== r && O(o, o, n);
                    for (r = 0; r < 16; r++) e[r] = o[r]
                }

                function N(e, n, r) {
                    var o, i, a = new Uint8Array(32),
                        s = new Float64Array(80),
                        c = t(),
                        l = t(),
                        d = t(),
                        p = t(),
                        h = t(),
                        v = t();
                    for (i = 0; i < 31; i++) a[i] = n[i];
                    for (a[31] = 127 & n[31] | 64, a[0] &= 248, S(s, r), i = 0; i < 16; i++) l[i] = s[i], p[i] = c[i] = d[i] = 0;
                    for (c[0] = p[0] = 1, i = 254; i >= 0; --i) g(c, l, o = a[i >>> 3] >>> (7 & i) & 1), g(d, p, o), E(h, c, d), x(c, c, d), E(d, l, p), x(l, l, p), C(p, h), C(v, c), O(c, d, c), O(d, l, h), E(h, c, d), x(c, c, d), C(l, c), x(d, p, v), O(c, d, u), E(c, c, p), O(d, d, c), O(c, p, v), O(p, l, s), C(l, h), g(c, l, o), g(d, p, o);
                    for (i = 0; i < 16; i++) s[i + 16] = c[i], s[i + 32] = d[i], s[i + 48] = l[i], s[i + 64] = p[i];
                    var y = s.subarray(32),
                        m = s.subarray(16);
                    return k(y, y), O(m, m, y), _(e, m), 0
                }

                function M(e, t) {
                    return N(e, t, o)
                }

                function A(e, n) {
                    var r = t(),
                        o = t(),
                        i = t(),
                        a = t(),
                        u = t(),
                        s = t(),
                        l = t(),
                        d = t(),
                        p = t();
                    x(r, e[1], e[0]), x(p, n[1], n[0]), O(r, r, p), E(o, e[0], e[1]), E(p, n[0], n[1]), O(o, o, p), O(i, e[3], n[3]), O(i, i, c), O(a, e[2], n[2]), E(a, a, a), x(u, o, r), x(s, a, i), E(l, a, i), E(d, o, r), O(e[0], u, s), O(e[1], d, l), O(e[2], l, s), O(e[3], u, d)
                }

                function P(e, t, n) {
                    var r;
                    for (r = 0; r < 4; r++) g(e[r], t[r], n)
                }

                function U(e, n) {
                    var r = t(),
                        o = t(),
                        i = t();
                    k(i, n[2]), O(r, n[0], i), O(o, n[1], i), _(e, o), e[31] ^= w(r) << 7
                }

                function J(e, t, n) {
                    var r, o;
                    for (y(e[0], i), y(e[1], a), y(e[2], a), y(e[3], i), o = 255; o >= 0; --o) P(e, t, r = n[o / 8 | 0] >> (7 & o) & 1), A(t, e), A(e, e), P(e, t, r)
                }

                function I(e, n) {
                    var r = [t(), t(), t(), t()];
                    y(r[0], l), y(r[1], d), y(r[2], a), O(r[3], l, d), J(e, r, n)
                }
                var R = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

                function L(e, t) {
                    var n, r, o, i;
                    for (r = 63; r >= 32; --r) {
                        for (n = 0, o = r - 32, i = r - 12; o < i; ++o) t[o] += n - 16 * t[r] * R[o - (r - 32)], n = t[o] + 128 >> 8, t[o] -= 256 * n;
                        t[o] += n, t[r] = 0
                    }
                    for (n = 0, o = 0; o < 32; o++) t[o] += n - (t[31] >> 4) * R[o], n = t[o] >> 8, t[o] &= 255;
                    for (o = 0; o < 32; o++) t[o] -= n * R[o];
                    for (r = 0; r < 32; r++) t[r + 1] += t[r] >> 8, e[r] = 255 & t[r]
                }

                function H(e) {
                    var t, n = new Float64Array(64);
                    for (t = 0; t < 64; t++) n[t] = e[t];
                    for (t = 0; t < 64; t++) e[t] = 0;
                    L(e, n)
                }

                function G(e, n) {
                    var r = t(),
                        o = t(),
                        u = t(),
                        c = t(),
                        l = t(),
                        d = t(),
                        h = t();
                    return y(e[2], a), S(e[1], n), C(u, e[1]), O(c, u, s), x(u, u, e[2]), E(c, e[2], c), C(l, c), C(d, l), O(h, d, l), O(r, h, u), O(r, r, c), T(r, r), O(r, r, u), O(r, r, c), O(r, r, c), O(e[0], r, c), C(o, e[0]), O(o, o, c), b(o, u) && O(e[0], e[0], p), C(o, e[0]), O(o, o, c), b(o, u) ? -1 : (w(e[0]) === n[31] >> 7 && x(e[0], i, e[0]), O(e[3], e[0], e[1]), 0)
                }
                var q;

                function F() {
                    var e, t;
                    for (t = 0; t < arguments.length; t++)
                        if ("[object Uint8Array]" !== (e = Object.prototype.toString.call(arguments[t]))) throw new TypeError("unexpected type " + e + ", use Uint8Array")
                }

                function D(e) {
                    for (var t = 0; t < e.length; t++) e[t] = 0
                }
                e.lowlevel = {
                    crypto_verify_32: v,
                    crypto_scalarmult: N,
                    crypto_scalarmult_base: M,
                    crypto_sign_keypair_hash: function(e, n, r) {
                        var o, i = new Uint8Array(64),
                            a = [t(), t(), t(), t()];
                        for (r(i, n, 32), i[0] &= 248, i[31] &= 127, i[31] |= 64, I(a, i), U(e, a), o = 0; o < 32; o++) n[o + 32] = e[o];
                        return 0
                    },
                    crypto_shared_key_hash: function(e, n, r, o) {
                        var u = new Uint8Array(64),
                            c = [t(), t(), t(), t()];
                        o(u, r, 32), u[0] &= 248, u[31] &= 127, u[31] |= 64;
                        var l = [t(), t(), t(), t()];
                        ! function(e, n) {
                            var r = t(),
                                o = t(),
                                u = t(),
                                c = t(),
                                l = t(),
                                d = t(),
                                h = t();
                            y(e[2], a), S(e[1], n), C(u, e[1]), O(c, u, s), x(u, u, e[2]), E(c, e[2], c), C(l, c), C(d, l), O(h, d, l), O(r, h, u), O(r, r, c), T(r, r), O(r, r, u), O(r, r, c), O(r, r, c), O(e[0], r, c), C(o, e[0]), O(o, o, c), b(o, u) && O(e[0], e[0], p);
                            if (C(o, e[0]), O(o, o, c), b(o, u)) return console.log("not a valid Ed25519EncodedGroupElement."), -1;
                            w(e[0]) !== n[31] >> 7 && x(e[0], i, e[0]);
                            O(e[3], e[0], e[1])
                        }(l, n), J(c, l, u), U(e, c)
                    },
                    crypto_sign_hash: function(e, n, r, o) {
                        var i = new Uint8Array(64),
                            a = new Uint8Array(64),
                            u = new Uint8Array(64),
                            s = [t(), t(), t(), t()];
                        o.update(n.secretKey), o.finalize(i), i[0] &= 248, i[31] &= 127, i[31] |= 64, o.reset(), o.update(i.slice(32)), o.update(r), o.finalize(a), H(a), I(s, a), U(e, s), o.reset(), o.update(e.slice(0, 32)), o.update(n.publicKey), o.update(r), o.finalize(u), H(u);
                        for (var c = new Float64Array(64), l = 0; l < 64; l++) c[l] = 0;
                        for (l = 0; l < 32; l++) c[l] = a[l];
                        for (l = 0; l < 32; l++)
                            for (var d = 0; d < 32; d++) c[l + d] += u[l] * i[d];
                        L(e.subarray(32), c);
                        var p = 0;
                        for (l = 0; l < 32; l++) p |= 0 ^ e[32 + l], u[l] = e[32 + l];
                        if (0 == p) return !1;
                        for (H(u), p = 0, l = 0; l < 32; l++) p |= e[32 + l] ^ u[l];
                        return 0 == p
                    },
                    crypto_scalarmult_BYTES: 32,
                    crypto_scalarmult_SCALARBYTES: 32,
                    crypto_sign_BYTES: 64,
                    crypto_sign_PUBLICKEYBYTES: 32,
                    crypto_sign_SECRETKEYBYTES: 64,
                    crypto_sign_SEEDBYTES: 32,
                    crypto_hash_BYTES: 64
                }, e.randomBytes = function(e) {
                    var t = new Uint8Array(e);
                    return r(t, e), t
                }, e.scalarMult = function(e, t) {
                    if (F(e, t), 32 !== e.length) throw new Error("bad n size");
                    if (32 !== t.length) throw new Error("bad p size");
                    var n = new Uint8Array(32);
                    return N(n, e, t), n
                }, e.scalarMult.base = function(e) {
                    if (F(e), 32 !== e.length) throw new Error("bad n size");
                    var t = new Uint8Array(32);
                    return M(t, e), t
                }, e.scalarMult.scalarLength = 32, e.scalarMult.groupElementLength = 32, e.verify = function(e, t) {
                    return F(e, t), 0 !== e.length && 0 !== t.length && (e.length === t.length && 0 === h(e, 0, t, 0, e.length))
                }, e.setPRNG = function(e) {
                    r = e
                }, e.gf = t, e.unpackneg = G, e.reduce = H, e.scalarmult = J, e.scalarbase = I, e.add = A, e.pack = U, "undefined" != typeof window ? (window.crypto && window.crypto.getRandomValues ? q = window.crypto : window.msCrypto && window.msCrypto.getRandomValues && (q = window.msCrypto), q && e.setPRNG((function(e, t) {
                    var n, r = new Uint8Array(t);
                    for (q.getRandomValues(r), n = 0; n < t; n++) e[n] = r[n];
                    D(r)
                }))) : (q = n(24)) && e.setPRNG((function(e, t) {
                    var n, r = q.randomBytes(t);
                    for (n = 0; n < t; n++) e[n] = r[n];
                    D(r)
                }))
            }(e.exports ? e.exports : window.nacl = window.nacl || {})
        },
        605: function(module, exports, __webpack_require__) {
            "use strict";
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                JSON;
            JSON || (JSON = {}),
                function() {
                    function str(e, t) {
                        var n, r, o, i, a, u = gap,
                            s = t[e];
                        switch (s && "object" == (void 0 === s ? "undefined" : _typeof(s)) && "function" == typeof s.toJSON && (s = s.toJSON(e)), "function" == typeof rep && (s = rep.call(t, e, s)), void 0 === s ? "undefined" : _typeof(s)) {
                            case "string":
                                return quote(s);
                            case "number":
                                return isFinite(s) ? String(s) : "null";
                            case "boolean":
                            case "null":
                                return String(s);
                            case "object":
                                if (!s) return "null";
                                if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(s)) {
                                    for (i = s.length, n = 0; n < i; n += 1) a[n] = str(n, s) || "null";
                                    return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + u + "]" : "[" + a.join(",") + "]", gap = u, o
                                }
                                if (rep && "object" == (void 0 === rep ? "undefined" : _typeof(rep)))
                                    for (i = rep.length, n = 0; n < i; n += 1) "string" == typeof rep[n] && ((o = str(r = rep[n], s)) && a.push(quote(r) + (gap ? ": " : ":") + o));
                                else
                                    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && ((o = str(r, s)) && a.push(quote(r) + (gap ? ": " : ":") + o));
                                return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + u + "}" : "{" + a.join(",") + "}", gap = u, o
                        }
                    }

                    function quote(e) {
                        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, (function(e) {
                            var t = meta[e];
                            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        })) + '"' : '"' + e + '"'
                    }

                    function f(e) {
                        return e < 10 ? "0" + e : e
                    }
                    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
                        return this.valueOf()
                    });
                    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        gap, indent, meta = {
                            "\b": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        },
                        rep;
                    "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
                        var r;
                        if (gap = "", indent = "", "number" == typeof n)
                            for (r = 0; r < n; r += 1) indent += " ";
                        else "string" == typeof n && (indent = n);
                        if (rep = t, !t || "function" == typeof t || "object" == (void 0 === t ? "undefined" : _typeof(t)) && "number" == typeof t.length) return str("", {
                            "": e
                        });
                        throw new Error("JSON.stringify")
                    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                        function walk(e, t) {
                            var n, r, o = e[t];
                            if (o && "object" == (void 0 === o ? "undefined" : _typeof(o)))
                                for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (void 0 !== (r = walk(o, n)) ? o[n] = r : delete o[n]);
                            return reviver.call(e, t, o)
                        }
                        var j;
                        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, (function(e) {
                                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                            }))), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                            "": j
                        }, "") : j;
                        throw new SyntaxError("JSON.parse")
                    })
                }();
            var SockJS = function() {
                if ("undefined" == typeof document || "undefined" == typeof window) return null;
                var e = document,
                    t = window,
                    n = {},
                    r = function() {};
                r.prototype.addEventListener = function(e, t) {
                    this._listeners || (this._listeners = {}), e in this._listeners || (this._listeners[e] = []);
                    var r = this._listeners[e]; - 1 === n.arrIndexOf(r, t) && r.push(t)
                }, r.prototype.removeEventListener = function(e, t) {
                    if (this._listeners && e in this._listeners) {
                        var r = this._listeners[e],
                            o = n.arrIndexOf(r, t); - 1 === o || (r.length > 1 ? this._listeners[e] = r.slice(0, o).concat(r.slice(o + 1)) : delete this._listeners[e])
                    }
                }, r.prototype.dispatchEvent = function(e) {
                    var t = e.type,
                        n = Array.prototype.slice.call(arguments, 0);
                    if (this["on" + t] && this["on" + t].apply(this, n), this._listeners && t in this._listeners)
                        for (var r = 0; r < this._listeners[t].length; r++) this._listeners[t][r].apply(this, n)
                };
                var o = function(e, t) {
                    if (this.type = e, void 0 !== t)
                        for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n])
                };
                o.prototype.toString = function() {
                    var e = [];
                    for (var t in this)
                        if (this.hasOwnProperty(t)) {
                            var n = this[t];
                            "function" == typeof n && (n = "[function]"), e.push(t + "=" + n)
                        } return "SimpleEvent(" + e.join(", ") + ")"
                };
                var i = function(e) {
                    this._events = e || [], this._listeners = {}
                };
                i.prototype.emit = function(e) {
                    var t = this;
                    if (t._verifyType(e), !t._nuked) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        if (t["on" + e] && t["on" + e].apply(t, n), e in t._listeners)
                            for (var r = 0; r < t._listeners[e].length; r++) t._listeners[e][r].apply(t, n)
                    }
                }, i.prototype.on = function(e, t) {
                    this._verifyType(e), this._nuked || (e in this._listeners || (this._listeners[e] = []), this._listeners[e].push(t))
                }, i.prototype._verifyType = function(e) {
                    -1 === n.arrIndexOf(this._events, e) && n.log("Event " + JSON.stringify(e) + " not listed " + JSON.stringify(this._events) + " in " + this)
                }, i.prototype.nuke = function() {
                    this._nuked = !0;
                    for (var e = 0; e < this._events.length; e++) delete this[this._events[e]];
                    this._listeners = {}
                };
                n.random_string = function(e, t) {
                    t = t || "abcdefghijklmnopqrstuvwxyz0123456789_".length;
                    var n, r = [];
                    for (n = 0; n < e; n++) r.push("abcdefghijklmnopqrstuvwxyz0123456789_".substr(Math.floor(Math.random() * t), 1));
                    return r.join("")
                }, n.random_number = function(e) {
                    return Math.floor(Math.random() * e)
                }, n.random_number_string = function(e) {
                    var t = ("" + (e - 1)).length;
                    return (Array(t + 1).join("0") + n.random_number(e)).slice(-t)
                }, n.getOrigin = function(e) {
                    return (e += "/").split("/").slice(0, 3).join("/")
                }, n.isSameOriginUrl = function(e, n) {
                    return n || (n = t.location.href), e.split("/").slice(0, 3).join("/") === n.split("/").slice(0, 3).join("/")
                }, n.getParentDomain = function(e) {
                    return /^[0-9.]*$/.test(e) || /^\[/.test(e) ? e : /[.]/.test(e) ? e.split(".").slice(1).join(".") : e
                }, n.objectExtend = function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                };
                n.polluteGlobalNamespace = function() {
                    "_jp" in t || (t._jp = {})
                }, n.closeFrame = function(e, t) {
                    return "c" + JSON.stringify([e, t])
                }, n.userSetCode = function(e) {
                    return 1e3 === e || e >= 3e3 && e <= 4999
                }, n.countRTO = function(e) {
                    return e > 100 ? 3 * e : e + 200
                }, n.log = function() {
                    t.console && console.log && console.log.apply && console.log.apply(console, arguments)
                }, n.bind = function(e, t) {
                    return e.bind ? e.bind(t) : function() {
                        return e.apply(t, arguments)
                    }
                }, n.flatUrl = function(e) {
                    return -1 === e.indexOf("?") && -1 === e.indexOf("#")
                }, n.amendUrl = function(t) {
                    var r = e.location;
                    if (!t) throw new Error("Wrong url for SockJS");
                    if (!n.flatUrl(t)) throw new Error("Only basic urls are supported in SockJS");
                    return 0 === t.indexOf("//") && (t = r.protocol + t), 0 === t.indexOf("/") && (t = r.protocol + "//" + r.host + t), t = t.replace(/[/]+$/, "")
                }, n.arrIndexOf = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n] === t) return n;
                    return -1
                }, n.arrSkip = function(e, t) {
                    var r = n.arrIndexOf(e, t);
                    return -1 === r ? e.slice() : e.slice(0, r).concat(e.slice(r + 1))
                }, n.isArray = Array.isArray || function(e) {
                    return {}.toString.call(e).indexOf("Array") >= 0
                }, n.delay = function(e, t) {
                    return "function" == typeof e && (t = e, e = 0), setTimeout(t, e)
                };
                var a, u = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    s = {
                        "\0": "\\u0000",
                        "": "\\u0001",
                        "": "\\u0002",
                        "": "\\u0003",
                        "": "\\u0004",
                        "": "\\u0005",
                        "": "\\u0006",
                        "": "\\u0007",
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\v": "\\u000b",
                        "\f": "\\f",
                        "\r": "\\r",
                        "": "\\u000e",
                        "": "\\u000f",
                        "": "\\u0010",
                        "": "\\u0011",
                        "": "\\u0012",
                        "": "\\u0013",
                        "": "\\u0014",
                        "": "\\u0015",
                        "": "\\u0016",
                        "": "\\u0017",
                        "": "\\u0018",
                        "": "\\u0019",
                        "": "\\u001a",
                        "": "\\u001b",
                        "": "\\u001c",
                        "": "\\u001d",
                        "": "\\u001e",
                        "": "\\u001f",
                        '"': '\\"',
                        "\\": "\\\\",
                        "": "\\u007f",
                        "": "\\u0080",
                        "": "\\u0081",
                        "": "\\u0082",
                        "": "\\u0083",
                        "": "\\u0084",
                        "": "\\u0085",
                        "": "\\u0086",
                        "": "\\u0087",
                        "": "\\u0088",
                        "": "\\u0089",
                        "": "\\u008a",
                        "": "\\u008b",
                        "": "\\u008c",
                        "": "\\u008d",
                        "": "\\u008e",
                        "": "\\u008f",
                        "": "\\u0090",
                        "": "\\u0091",
                        "": "\\u0092",
                        "": "\\u0093",
                        "": "\\u0094",
                        "": "\\u0095",
                        "": "\\u0096",
                        "": "\\u0097",
                        "": "\\u0098",
                        "": "\\u0099",
                        "": "\\u009a",
                        "": "\\u009b",
                        "": "\\u009c",
                        "": "\\u009d",
                        "": "\\u009e",
                        "": "\\u009f",
                        "­": "\\u00ad",
                        "؀": "\\u0600",
                        "؁": "\\u0601",
                        "؂": "\\u0602",
                        "؃": "\\u0603",
                        "؄": "\\u0604",
                        "܏": "\\u070f",
                        "឴": "\\u17b4",
                        "឵": "\\u17b5",
                        "‌": "\\u200c",
                        "‍": "\\u200d",
                        "‎": "\\u200e",
                        "‏": "\\u200f",
                        "\u2028": "\\u2028",
                        "\u2029": "\\u2029",
                        "‪": "\\u202a",
                        "‫": "\\u202b",
                        "‬": "\\u202c",
                        "‭": "\\u202d",
                        "‮": "\\u202e",
                        " ": "\\u202f",
                        "⁠": "\\u2060",
                        "⁡": "\\u2061",
                        "⁢": "\\u2062",
                        "⁣": "\\u2063",
                        "⁤": "\\u2064",
                        "⁥": "\\u2065",
                        "⁦": "\\u2066",
                        "⁧": "\\u2067",
                        "⁨": "\\u2068",
                        "⁩": "\\u2069",
                        "⁪": "\\u206a",
                        "⁫": "\\u206b",
                        "⁬": "\\u206c",
                        "⁭": "\\u206d",
                        "⁮": "\\u206e",
                        "⁯": "\\u206f",
                        "\ufeff": "\\ufeff",
                        "￰": "\\ufff0",
                        "￱": "\\ufff1",
                        "￲": "\\ufff2",
                        "￳": "\\ufff3",
                        "￴": "\\ufff4",
                        "￵": "\\ufff5",
                        "￶": "\\ufff6",
                        "￷": "\\ufff7",
                        "￸": "\\ufff8",
                        "￹": "\\ufff9",
                        "￺": "\\ufffa",
                        "￻": "\\ufffb",
                        "￼": "\\ufffc",
                        "�": "\\ufffd",
                        "￾": "\\ufffe",
                        "￿": "\\uffff"
                    },
                    c = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
                    l = JSON && JSON.stringify || function(e) {
                        return u.lastIndex = 0, u.test(e) && (e = e.replace(u, (function(e) {
                            return s[e]
                        }))), '"' + e + '"'
                    };
                n.quote = function(e) {
                    var t = l(e);
                    return c.lastIndex = 0, c.test(t) ? (a || (a = function(e) {
                        var t, n = {},
                            r = [];
                        for (t = 0; t < 65536; t++) r.push(String.fromCharCode(t));
                        return e.lastIndex = 0, r.join("").replace(e, (function(e) {
                            return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), ""
                        })), e.lastIndex = 0, n
                    }(c)), t.replace(c, (function(e) {
                        return a[e]
                    }))) : t
                };
                var d = ["websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];
                n.probeProtocols = function() {
                    for (var e = {}, t = 0; t < d.length; t++) {
                        var n = d[t];
                        e[n] = _[n] && _[n].enabled()
                    }
                    return e
                }, n.detectProtocols = function(e, t, n) {
                    var r = {},
                        o = [];
                    t || (t = d);
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        r[a] = e[a]
                    }
                    var u = function e(t) {
                        var n = t.shift();
                        r[n] ? o.push(n) : t.length > 0 && e(t)
                    };
                    return !1 !== n.websocket && u(["websocket"]), r["xhr-streaming"] && !n.null_origin ? o.push("xhr-streaming") : !r["xdr-streaming"] || n.cookie_needed || n.null_origin ? u(["iframe-eventsource", "iframe-htmlfile"]) : o.push("xdr-streaming"), r["xhr-polling"] && !n.null_origin ? o.push("xhr-polling") : !r["xdr-polling"] || n.cookie_needed || n.null_origin ? u(["iframe-xhr-polling", "jsonp-polling"]) : o.push("xdr-polling"), o
                };
                var p = "_sockjs_global";
                n.createHook = function() {
                    var e = "a" + n.random_string(8);
                    if (!(p in t)) {
                        var r = {};
                        t[p] = function(e) {
                            return e in r || (r[e] = {
                                id: e,
                                del: function() {
                                    delete r[e]
                                }
                            }), r[e]
                        }
                    }
                    return t[p](e)
                }, n.attachMessage = function(e) {
                    n.attachEvent("message", e)
                }, n.attachEvent = function(n, r) {
                    void 0 !== t.addEventListener ? t.addEventListener(n, r, !1) : (e.attachEvent("on" + n, r), t.attachEvent("on" + n, r))
                }, n.detachMessage = function(e) {
                    n.detachEvent("message", e)
                }, n.detachEvent = function(n, r) {
                    void 0 !== t.addEventListener ? t.removeEventListener(n, r, !1) : (e.detachEvent("on" + n, r), t.detachEvent("on" + n, r))
                };
                var h = {},
                    v = !1,
                    y = function() {
                        for (var e in h) h[e](), delete h[e]
                    };
                n.attachEvent("unload", (function() {
                    v || (v = !0, y())
                })), n.unload_add = function(e) {
                    var t = n.random_string(8);
                    return h[t] = e, v && n.delay(y), t
                }, n.unload_del = function(e) {
                    e in h && delete h[e]
                }, n.createIframe = function(t, r) {
                    var o, i, a = e.createElement("iframe"),
                        u = function() {
                            clearTimeout(o);
                            try {
                                a.onload = null
                            } catch (e) {}
                            a.onerror = null
                        },
                        s = function() {
                            a && (u(), setTimeout((function() {
                                a && a.parentNode.removeChild(a), a = null
                            }), 0), n.unload_del(i))
                        },
                        c = function(e) {
                            a && (s(), r(e))
                        };
                    return a.src = t, a.style.display = "none", a.style.position = "absolute", a.onerror = function() {
                        c("onerror")
                    }, a.onload = function() {
                        clearTimeout(o), o = setTimeout((function() {
                            c("onload timeout")
                        }), 2e3)
                    }, e.body.appendChild(a), o = setTimeout((function() {
                        c("timeout")
                    }), 15e3), i = n.unload_add(s), {
                        post: function(e, t) {
                            try {
                                a && a.contentWindow && a.contentWindow.postMessage(e, t)
                            } catch (e) {}
                        },
                        cleanup: s,
                        loaded: u
                    }
                }, n.createHtmlfile = function(e, r) {
                    var o, i, a, u = new ActiveXObject("htmlfile"),
                        s = function() {
                            clearTimeout(o)
                        },
                        c = function() {
                            u && (s(), n.unload_del(i), a.parentNode.removeChild(a), a = u = null, CollectGarbage())
                        };
                    u.open(), u.write('<html><script>document.domain="' + document.domain + '";<\/script></html>'), u.close(), u.parentWindow._jp = t._jp;
                    var l = u.createElement("div");
                    return u.body.appendChild(l), a = u.createElement("iframe"), l.appendChild(a), a.src = e, o = setTimeout((function() {
                        var e;
                        e = "timeout", u && (c(), r(e))
                    }), 15e3), i = n.unload_add(c), {
                        post: function(e, t) {
                            try {
                                a && a.contentWindow && a.contentWindow.postMessage(e, t)
                            } catch (e) {}
                        },
                        cleanup: c,
                        loaded: s
                    }
                };
                var m = function() {};
                (m.prototype = new i(["chunk", "finish"]))._start = function(e, r, o, i) {
                    var a = this;
                    try {
                        a.xhr = new XMLHttpRequest
                    } catch (e) {}
                    if (!a.xhr) try {
                        a.xhr = new t.ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {}(t.ActiveXObject || t.XDomainRequest) && (r += (-1 === r.indexOf("?") ? "?" : "&") + "t=" + +new Date), a.unload_ref = n.unload_add((function() {
                        a._cleanup(!0)
                    }));
                    try {
                        a.xhr.open(e, r, !0)
                    } catch (e) {
                        return a.emit("finish", 0, ""), void a._cleanup()
                    }
                    if (i && i.no_credentials || (a.xhr.withCredentials = "true"), i && i.headers)
                        for (var u in i.headers) a.xhr.setRequestHeader(u, i.headers[u]);
                    a.xhr.onreadystatechange = function() {
                        if (a.xhr) {
                            var e = a.xhr;
                            switch (e.readyState) {
                                case 3:
                                    try {
                                        var t = e.status,
                                            n = e.responseText
                                    } catch (e) {}
                                    1223 === t && (t = 204), n && n.length > 0 && a.emit("chunk", t, n);
                                    break;
                                case 4:
                                    1223 === (t = e.status) && (t = 204), a.emit("finish", t, e.responseText), a._cleanup(!1)
                            }
                        }
                    }, a.xhr.send(o)
                }, m.prototype._cleanup = function(e) {
                    if (this.xhr) {
                        if (n.unload_del(this.unload_ref), this.xhr.onreadystatechange = function() {}, e) try {
                            this.xhr.abort()
                        } catch (e) {}
                        this.unload_ref = this.xhr = null
                    }
                }, m.prototype.close = function() {
                    this.nuke(), this._cleanup(!0)
                }, (n.XHRCorsObject = function() {
                    var e = this,
                        t = arguments;
                    n.delay((function() {
                        e._start.apply(e, t)
                    }))
                }).prototype = new m, (n.XHRLocalObject = function(e, t, r) {
                    var o = this;
                    n.delay((function() {
                        o._start(e, t, r, {
                            no_credentials: !0
                        })
                    }))
                }).prototype = new m;
                var g = n.XDRObject = function(e, t, r) {
                    var o = this;
                    n.delay((function() {
                        o._start(e, t, r)
                    }))
                };
                g.prototype = new i(["chunk", "finish"]), g.prototype._start = function(e, t, r) {
                    var o = this,
                        i = new XDomainRequest;
                    t += (-1 === t.indexOf("?") ? "?" : "&") + "t=" + +new Date;
                    var a = i.ontimeout = i.onerror = function() {
                        o.emit("finish", 0, ""), o._cleanup(!1)
                    };
                    i.onprogress = function() {
                        o.emit("chunk", 200, i.responseText)
                    }, i.onload = function() {
                        o.emit("finish", 200, i.responseText), o._cleanup(!1)
                    }, o.xdr = i, o.unload_ref = n.unload_add((function() {
                        o._cleanup(!0)
                    }));
                    try {
                        o.xdr.open(e, t), o.xdr.send(r)
                    } catch (e) {
                        a()
                    }
                }, g.prototype._cleanup = function(e) {
                    if (this.xdr) {
                        if (n.unload_del(this.unload_ref), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, e) try {
                            this.xdr.abort()
                        } catch (e) {}
                        this.unload_ref = this.xdr = null
                    }
                }, g.prototype.close = function() {
                    this.nuke(), this._cleanup(!0)
                }, n.isXHRCorsCapable = function() {
                    return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : t.XDomainRequest && e.domain ? 2 : P.enabled() ? 3 : 4
                };
                var _ = function e(r, o, i) {
                    if (this === t) return new e(r, o, i);
                    var a, u = this;
                    u._options = {
                        devel: !1,
                        debug: !1,
                        protocols_whitelist: [],
                        info: void 0,
                        rtt: void 0
                    }, i && n.objectExtend(u._options, i), u._base_url = n.amendUrl(r), u._server = u._options.server || n.random_number_string(1e3), u._options.protocols_whitelist && u._options.protocols_whitelist.length ? a = u._options.protocols_whitelist : (a = "string" == typeof o && o.length > 0 ? [o] : n.isArray(o) ? o : null) && u._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.'), u._protocols = [], u.protocol = null, u.readyState = e.CONNECTING, u._ir = H(u._base_url), u._ir.onfinish = function(e, t) {
                        u._ir = null, e ? (u._options.info && (e = n.objectExtend(e, u._options.info)), u._options.rtt && (t = u._options.rtt), u._applyInfo(e, t, a), u._didClose()) : u._didClose(1002, "Can't connect to server", !0)
                    }
                };
                _.prototype = new r, _.version = "0.3.4", _.CONNECTING = 0, _.OPEN = 1, _.CLOSING = 2, _.CLOSED = 3, _.prototype._debug = function() {
                    this._options.debug && n.log.apply(n, arguments)
                }, _.prototype._dispatchOpen = function() {
                    this.readyState === _.CONNECTING ? (this._transport_tref && (clearTimeout(this._transport_tref), this._transport_tref = null), this.readyState = _.OPEN, this.dispatchEvent(new o("open"))) : this._didClose(1006, "Server lost session")
                }, _.prototype._dispatchMessage = function(e) {
                    this.readyState === _.OPEN && this.dispatchEvent(new o("message", {
                        data: e
                    }))
                }, _.prototype._dispatchHeartbeat = function(e) {
                    this.readyState === _.OPEN && this.dispatchEvent(new o("heartbeat", {}))
                }, _.prototype._didClose = function(e, t, r) {
                    var i = this;
                    if (i.readyState !== _.CONNECTING && i.readyState !== _.OPEN && i.readyState !== _.CLOSING) throw new Error("INVALID_STATE_ERR");
                    i._ir && (i._ir.nuke(), i._ir = null), i._transport && (i._transport.doCleanup(), i._transport = null);
                    var a = new o("close", {
                        code: e,
                        reason: t,
                        wasClean: n.userSetCode(e)
                    });
                    if (!n.userSetCode(e) && i.readyState === _.CONNECTING && !r) {
                        if (i._try_next_protocol(a)) return;
                        a = new o("close", {
                            code: 2e3,
                            reason: "All transports failed",
                            wasClean: !1,
                            last_event: a
                        })
                    }
                    i.readyState = _.CLOSED, n.delay((function() {
                        i.dispatchEvent(a)
                    }))
                }, _.prototype._didMessage = function(e) {
                    switch (e.slice(0, 1)) {
                        case "o":
                            this._dispatchOpen();
                            break;
                        case "a":
                            for (var t = JSON.parse(e.slice(1) || "[]"), n = 0; n < t.length; n++) this._dispatchMessage(t[n]);
                            break;
                        case "m":
                            t = JSON.parse(e.slice(1) || "null");
                            this._dispatchMessage(t);
                            break;
                        case "c":
                            t = JSON.parse(e.slice(1) || "[]");
                            this._didClose(t[0], t[1]);
                            break;
                        case "h":
                            this._dispatchHeartbeat()
                    }
                }, _.prototype._try_next_protocol = function(t) {
                    var r = this;
                    for (r.protocol && (r._debug("Closed transport:", r.protocol, "" + t), r.protocol = null), r._transport_tref && (clearTimeout(r._transport_tref), r._transport_tref = null);;) {
                        var o = r.protocol = r._protocols.shift();
                        if (!o) return !1;
                        if (_[o] && !0 === _[o].need_body && (!e.body || void 0 !== e.readyState && "complete" !== e.readyState)) return r._protocols.unshift(o), r.protocol = "waiting-for-load", n.attachEvent("load", (function() {
                            r._try_next_protocol()
                        })), !0;
                        if (_[o] && _[o].enabled(r._options)) {
                            var i = _[o].roundTrips || 1,
                                a = (r._options.rto || 0) * i || 5e3;
                            r._transport_tref = n.delay(a, (function() {
                                r.readyState === _.CONNECTING && r._didClose(2007, "Transport timeouted")
                            }));
                            var u = n.random_string(8),
                                s = r._base_url + "/" + r._server + "/" + u;
                            return r._debug("Opening transport:", o, " url:" + s, " RTO:" + r._options.rto), r._transport = new _[o](r, s, r._base_url), !0
                        }
                        r._debug("Skipping transport:", o)
                    }
                }, _.prototype.close = function(e, t) {
                    if (e && !n.userSetCode(e)) throw new Error("INVALID_ACCESS_ERR");
                    return (this.readyState === _.CONNECTING || this.readyState === _.OPEN) && (this.readyState = _.CLOSING, this._didClose(e || 1e3, t || "Normal closure"), !0)
                }, _.prototype.send = function(e) {
                    if (this.readyState === _.CONNECTING) throw new Error("INVALID_STATE_ERR");
                    return this.readyState === _.OPEN && this._transport.doSend(n.quote("" + e)), !0
                }, _.prototype._applyInfo = function(t, r, o) {
                    this._options.info = t, this._options.rtt = r, this._options.rto = n.countRTO(r), this._options.info.null_origin = !e.domain;
                    var i = n.probeProtocols();
                    this._protocols = n.detectProtocols(i, o, t)
                };
                var b = _.websocket = function(e, r) {
                    var o = this,
                        i = r + "/websocket";
                    i = "https" === i.slice(0, 5) ? "wss" + i.slice(5) : "ws" + i.slice(4), o.ri = e, o.url = i;
                    var a = t.WebSocket || t.MozWebSocket;
                    o.ws = new a(o.url), o.ws.onmessage = function(e) {
                        o.ri._didMessage(e.data)
                    }, o.unload_ref = n.unload_add((function() {
                        o.ws.close()
                    })), o.ws.onclose = function() {
                        o.ri._didMessage(n.closeFrame(1006, "WebSocket connection broken"))
                    }
                };
                b.prototype.doSend = function(e) {
                    this.ws.send("[" + e + "]")
                }, b.prototype.doCleanup = function() {
                    var e = this.ws;
                    e && (e.onmessage = e.onclose = null, e.close(), n.unload_del(this.unload_ref), this.unload_ref = this.ri = this.ws = null)
                }, b.enabled = function() {
                    return !(!t.WebSocket && !t.MozWebSocket)
                }, b.roundTrips = 2;
                var w = function() {};
                w.prototype.send_constructor = function(e) {
                    this.send_buffer = [], this.sender = e
                }, w.prototype.doSend = function(e) {
                    this.send_buffer.push(e), this.send_stop || this.send_schedule()
                }, w.prototype.send_schedule_wait = function() {
                    var e, t = this;
                    t.send_stop = function() {
                        t.send_stop = null, clearTimeout(e)
                    }, e = n.delay(25, (function() {
                        t.send_stop = null, t.send_schedule()
                    }))
                }, w.prototype.send_schedule = function() {
                    var e = this;
                    if (e.send_buffer.length > 0) {
                        var t = "[" + e.send_buffer.join(",") + "]";
                        e.send_stop = e.sender(e.trans_url, t, (function(t, n) {
                            e.send_stop = null, !1 === t ? e.ri._didClose(1006, "Sending error " + n) : e.send_schedule_wait()
                        })), e.send_buffer = []
                    }
                }, w.prototype.send_destructor = function() {
                    this._send_stop && this._send_stop(), this._send_stop = null
                };
                var S = function(t, r, o) {
                        if (!("_send_form" in this)) {
                            var i = this._send_form = e.createElement("form");
                            (u = this._send_area = e.createElement("textarea")).name = "d", i.style.display = "none", i.style.position = "absolute", i.method = "POST", i.enctype = "application/x-www-form-urlencoded", i.acceptCharset = "UTF-8", i.appendChild(u), e.body.appendChild(i)
                        }
                        i = this._send_form;
                        var a, u = this._send_area,
                            s = "a" + n.random_string(8);
                        i.target = s, i.action = t + "/jsonp_send?i=" + s;
                        try {
                            a = e.createElement('<iframe name="' + s + '">')
                        } catch (t) {
                            (a = e.createElement("iframe")).name = s
                        }
                        a.id = s, i.appendChild(a), a.style.display = "none";
                        try {
                            u.value = r
                        } catch (e) {
                            n.log("Your browser is seriously broken. Go home! " + e.message)
                        }
                        i.submit();
                        var c = function(e) {
                            a.onerror && (a.onreadystatechange = a.onerror = a.onload = null, n.delay(500, (function() {
                                a.parentNode.removeChild(a), a = null
                            })), u.value = "", o(!0))
                        };
                        return a.onerror = a.onload = c, a.onreadystatechange = function(e) {
                            "complete" == a.readyState && c()
                        }, c
                    },
                    E = function(t, r) {
                        var o, i, a = e.createElement("script"),
                            u = function(e) {
                                i && (i.parentNode.removeChild(i), i = null), a && (clearTimeout(o), a.parentNode.removeChild(a), a.onreadystatechange = a.onerror = a.onload = a.onclick = null, a = null, r(e), r = null)
                            },
                            s = !1,
                            c = null;
                        if (a.id = "a" + n.random_string(8), a.src = t, a.type = "text/javascript", a.charset = "UTF-8", a.onerror = function(e) {
                                c || (c = setTimeout((function() {
                                    s || u(n.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
                                }), 1e3))
                            }, a.onload = function(e) {
                                u(n.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
                            }, a.onreadystatechange = function(e) {
                                if (/loaded|closed/.test(a.readyState)) {
                                    if (a && a.htmlFor && a.onclick) {
                                        s = !0;
                                        try {
                                            a.onclick()
                                        } catch (e) {}
                                    }
                                    a && u(n.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
                                }
                            }, void 0 === a.async && e.attachEvent)
                            if (/opera/i.test(navigator.userAgent))(i = e.createElement("script")).text = "try{var a = document.getElementById('" + a.id + "'); if(a)a.onerror();}catch(x){};", a.async = i.async = !1;
                            else {
                                try {
                                    a.htmlFor = a.id, a.event = "onclick"
                                } catch (e) {}
                                a.async = !0
                            } void 0 !== a.async && (a.async = !0), o = setTimeout((function() {
                            u(n.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
                        }), 35e3);
                        var l = e.getElementsByTagName("head")[0];
                        return l.insertBefore(a, l.firstChild), i && l.insertBefore(i, l.firstChild), u
                    },
                    x = _["jsonp-polling"] = function(e, t) {
                        n.polluteGlobalNamespace();
                        this.ri = e, this.trans_url = t, this.send_constructor(S), this._schedule_recv()
                    };
                x.prototype = new w, x.prototype._schedule_recv = function() {
                    var e = this;
                    e._recv_stop = O(e.trans_url + "/jsonp", E, (function(t) {
                        e._recv_stop = null, t && (e._is_closing || e.ri._didMessage(t)), e._is_closing || e._schedule_recv()
                    }))
                }, x.enabled = function() {
                    return !0
                }, x.need_body = !0, x.prototype.doCleanup = function() {
                    this._is_closing = !0, this._recv_stop && this._recv_stop(), this.ri = this._recv_stop = null, this.send_destructor()
                };
                var O = function(e, r, o) {
                        var i = "a" + n.random_string(6),
                            a = e + "?c=" + escape("_jp." + i),
                            u = 0,
                            s = r(a, (function(e) {
                                switch (u) {
                                    case 0:
                                        delete t._jp[i], o(e);
                                        break;
                                    case 1:
                                        o(e), u = 2;
                                        break;
                                    case 2:
                                        delete t._jp[i]
                                }
                            }));
                        t._jp[i] = s;
                        return function() {
                            t._jp[i] && (u = 1, t._jp[i](n.closeFrame(1e3, "JSONP user aborted read")))
                        }
                    },
                    C = function() {};
                (C.prototype = new w).run = function(e, t, n, r, o) {
                    this.ri = e, this.trans_url = t, this.send_constructor(function(e) {
                        return function(t, n, r) {
                            return new e("POST", t + "/xhr_send", n).onfinish = function(e, t) {
                                    r(200 === e || 204 === e, "http status " + e)
                                },
                                function(e) {
                                    r(!1, e)
                                }
                        }
                    }(o)), this.poll = new D(e, r, t + n, o)
                }, C.prototype.doCleanup = function() {
                    this.poll && (this.poll.abort(), this.poll = null)
                };
                var k = _["xhr-streaming"] = function(e, t) {
                    this.run(e, t, "/xhr_streaming", V, n.XHRCorsObject)
                };
                k.prototype = new C, k.enabled = function() {
                    return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
                }, k.roundTrips = 2, k.need_body = !0;
                var T = _["xdr-streaming"] = function(e, t) {
                    this.run(e, t, "/xhr_streaming", V, n.XDRObject)
                };
                T.prototype = new C, T.enabled = function() {
                    return !!t.XDomainRequest
                }, T.roundTrips = 2;
                var N = _["xhr-polling"] = function(e, t) {
                    this.run(e, t, "/xhr", V, n.XHRCorsObject)
                };
                N.prototype = new C, N.enabled = k.enabled, N.roundTrips = 2;
                var M = _["xdr-polling"] = function(e, t) {
                    this.run(e, t, "/xhr", V, n.XDRObject)
                };
                M.prototype = new C, M.enabled = T.enabled, M.roundTrips = 2;
                var A, P = function() {};
                P.prototype.i_constructor = function(e, t, r) {
                    var o = this;
                    o.ri = e, o.origin = n.getOrigin(r), o.base_url = r, o.trans_url = t;
                    var i = r + "/iframe.html";
                    o.ri._options.devel && (i += "?t=" + +new Date), o.window_id = n.random_string(8), i += "#" + o.window_id, o.iframeObj = n.createIframe(i, (function(e) {
                        o.ri._didClose(1006, "Unable to load an iframe (" + e + ")")
                    })), o.onmessage_cb = n.bind(o.onmessage, o), n.attachMessage(o.onmessage_cb)
                }, P.prototype.doCleanup = function() {
                    if (this.iframeObj) {
                        n.detachMessage(this.onmessage_cb);
                        try {
                            this.iframeObj.iframe.contentWindow && this.postMessage("c")
                        } catch (e) {}
                        this.iframeObj.cleanup(), this.iframeObj = null, this.onmessage_cb = this.iframeObj = null
                    }
                }, P.prototype.onmessage = function(e) {
                    if (e.origin === this.origin) {
                        var t = e.data.slice(0, 8),
                            n = e.data.slice(8, 9),
                            r = e.data.slice(9);
                        if (t === this.window_id) switch (n) {
                            case "s":
                                this.iframeObj.loaded(), this.postMessage("s", JSON.stringify([_.version, this.protocol, this.trans_url, this.base_url]));
                                break;
                            case "t":
                                this.ri._didMessage(r)
                        }
                    }
                }, P.prototype.postMessage = function(e, t) {
                    this.iframeObj.post(this.window_id + e + (t || ""), this.origin)
                }, P.prototype.doSend = function(e) {
                    this.postMessage("m", e)
                }, P.enabled = function() {
                    var e = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
                    return ("function" == typeof t.postMessage || "object" === _typeof(t.postMessage)) && !e
                };
                var U = function(e, r) {
                        parent !== t ? parent.postMessage(A + e + (r || ""), "*") : n.log("Can't postMessage, no parent window.", e, r)
                    },
                    J = function() {};
                J.prototype._didClose = function(e, t) {
                    U("t", n.closeFrame(e, t))
                }, J.prototype._didMessage = function(e) {
                    U("t", e)
                }, J.prototype._doSend = function(e) {
                    this._transport.doSend(e)
                }, J.prototype._doCleanup = function() {
                    this._transport.doCleanup()
                }, n.parent_origin = void 0, _.bootstrap_iframe = function() {
                    var r;
                    A = e.location.hash.slice(1);
                    n.attachMessage((function(e) {
                        if (e.source === parent && (void 0 === n.parent_origin && (n.parent_origin = e.origin), e.origin === n.parent_origin)) {
                            var o = e.data.slice(0, 8),
                                i = e.data.slice(8, 9),
                                a = e.data.slice(9);
                            if (o === A) switch (i) {
                                case "s":
                                    var u = JSON.parse(a),
                                        s = u[0],
                                        c = u[1],
                                        l = u[2],
                                        d = u[3];
                                    if (s !== _.version && n.log('Incompatibile SockJS! Main site uses: "' + s + '", the iframe: "' + _.version + '".'), !n.flatUrl(l) || !n.flatUrl(d)) return void n.log("Only basic urls are supported in SockJS");
                                    if (!n.isSameOriginUrl(l) || !n.isSameOriginUrl(d)) return void n.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([t.location.href, l, d]) + ")");
                                    (r = new J)._transport = new J[c](r, l, d);
                                    break;
                                case "m":
                                    r._doSend(a);
                                    break;
                                case "c":
                                    r && r._doCleanup(), r = null
                            }
                        }
                    })), U("s")
                };
                var I = function(e, t) {
                    var r = this;
                    n.delay((function() {
                        r.doXhr(e, t)
                    }))
                };
                (I.prototype = new i(["finish"])).doXhr = function(e, t) {
                    var r = this,
                        o = (new Date).getTime(),
                        i = new t("GET", e + "/info"),
                        a = n.delay(8e3, (function() {
                            i.ontimeout()
                        }));
                    i.onfinish = function(e, t) {
                        if (clearTimeout(a), a = null, 200 === e) {
                            var n = (new Date).getTime() - o,
                                i = JSON.parse(t);
                            "object" !== (void 0 === i ? "undefined" : _typeof(i)) && (i = {}), r.emit("finish", i, n)
                        } else r.emit("finish")
                    }, i.ontimeout = function() {
                        i.close(), r.emit("finish")
                    }
                };
                var R = function(t) {
                    var r = this,
                        o = function() {
                            var e = new P;
                            e.protocol = "w-iframe-info-receiver";
                            var n = function(t) {
                                    if ("string" == typeof t && "m" === t.substr(0, 1)) {
                                        var n = JSON.parse(t.substr(1)),
                                            o = n[0],
                                            i = n[1];
                                        r.emit("finish", o, i)
                                    } else r.emit("finish");
                                    e.doCleanup(), e = null
                                },
                                o = {
                                    _options: {},
                                    _didClose: n,
                                    _didMessage: n
                                };
                            e.i_constructor(o, t, t)
                        };
                    e.body ? o() : n.attachEvent("load", o)
                };
                R.prototype = new i(["finish"]);
                var L = function() {
                    var e = this;
                    n.delay((function() {
                        e.emit("finish", {}, 2e3)
                    }))
                };
                L.prototype = new i(["finish"]);
                var H = function(e) {
                    if (n.isSameOriginUrl(e)) return new I(e, n.XHRLocalObject);
                    switch (n.isXHRCorsCapable()) {
                        case 1:
                            return new I(e, n.XHRLocalObject);
                        case 2:
                            return new I(e, n.XDRObject);
                        case 3:
                            return new R(e);
                        default:
                            return new L
                    }
                };
                (J["w-iframe-info-receiver"] = function(e, t, r) {
                    new I(r, n.XHRLocalObject).onfinish = function(t, n) {
                        e._didMessage("m" + JSON.stringify([t, n])), e._didClose()
                    }
                }).prototype.doCleanup = function() {};
                var G = _["iframe-eventsource"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-eventsource", e.i_constructor.apply(e, arguments)
                };
                G.prototype = new P, G.enabled = function() {
                    return "EventSource" in t && P.enabled()
                }, G.need_body = !0, G.roundTrips = 3, (J["w-iframe-eventsource"] = function(e, t) {
                    this.run(e, t, "/eventsource", X, n.XHRLocalObject)
                }).prototype = new C;
                var q = _["iframe-xhr-polling"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-xhr-polling", e.i_constructor.apply(e, arguments)
                };
                q.prototype = new P, q.enabled = function() {
                    return t.XMLHttpRequest && P.enabled()
                }, q.need_body = !0, q.roundTrips = 3, (J["w-iframe-xhr-polling"] = function(e, t) {
                    this.run(e, t, "/xhr", V, n.XHRLocalObject)
                }).prototype = new C;
                var F = _["iframe-htmlfile"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-htmlfile", e.i_constructor.apply(e, arguments)
                };
                F.prototype = new P, F.enabled = function() {
                    return P.enabled()
                }, F.need_body = !0, F.roundTrips = 3, (J["w-iframe-htmlfile"] = function(e, t) {
                    this.run(e, t, "/htmlfile", K, n.XHRLocalObject)
                }).prototype = new C;
                var D = function(e, t, n, r) {
                    this.ri = e, this.Receiver = t, this.recv_url = n, this.AjaxObject = r, this._scheduleRecv()
                };
                D.prototype._scheduleRecv = function() {
                    var e = this,
                        t = e.poll = new e.Receiver(e.recv_url, e.AjaxObject);
                    t.onmessage = function(t) {
                        1,
                        e.ri._didMessage(t.data)
                    }, t.onclose = function(n) {
                        e.poll = t = t.onmessage = t.onclose = null, e.poll_is_closing || ("permanent" === n.reason ? e.ri._didClose(1006, "Polling error (" + n.reason + ")") : e._scheduleRecv())
                    }
                }, D.prototype.abort = function() {
                    this.poll_is_closing = !0, this.poll && this.poll.abort()
                };
                var B, X = function(e) {
                    var t = this,
                        r = new EventSource(e);
                    r.onmessage = function(e) {
                        t.dispatchEvent(new o("message", {
                            data: unescape(e.data)
                        }))
                    }, t.es_close = r.onerror = function(e, i) {
                        var a = i ? "user" : 2 !== r.readyState ? "network" : "permanent";
                        t.es_close = r.onmessage = r.onerror = null, r.close(), r = null, n.delay(200, (function() {
                            t.dispatchEvent(new o("close", {
                                reason: a
                            }))
                        }))
                    }
                };
                X.prototype = new r, X.prototype.abort = function() {
                    this.es_close && this.es_close({}, !0)
                };
                var K = function(e) {
                    var r = this;
                    n.polluteGlobalNamespace(), r.id = "a" + n.random_string(6, 26), e += (-1 === e.indexOf("?") ? "?" : "&") + "c=" + escape("_jp." + r.id);
                    var i, a = function() {
                        if (void 0 === B)
                            if ("ActiveXObject" in t) try {
                                B = !!new ActiveXObject("htmlfile")
                            } catch (e) {} else B = !1;
                        return B
                    }() ? n.createHtmlfile : n.createIframe;
                    t._jp[r.id] = {
                        start: function() {
                            i.loaded()
                        },
                        message: function(e) {
                            r.dispatchEvent(new o("message", {
                                data: e
                            }))
                        },
                        stop: function() {
                            r.iframe_close({}, "network")
                        }
                    }, r.iframe_close = function(e, n) {
                        i.cleanup(), r.iframe_close = i = null, delete t._jp[r.id], r.dispatchEvent(new o("close", {
                            reason: n
                        }))
                    }, i = a(e, (function(e) {
                        r.iframe_close({}, "permanent")
                    }))
                };
                K.prototype = new r, K.prototype.abort = function() {
                    this.iframe_close && this.iframe_close({}, "user")
                };
                var V = function(e, t) {
                    var n = this,
                        r = 0;
                    n.xo = new t("POST", e, null), n.xo.onchunk = function(e, t) {
                        if (200 === e)
                            for (;;) {
                                var i = t.slice(r),
                                    a = i.indexOf("\n");
                                if (-1 === a) break;
                                r += a + 1;
                                var u = i.slice(0, a);
                                n.dispatchEvent(new o("message", {
                                    data: u
                                }))
                            }
                    }, n.xo.onfinish = function(e, t) {
                        n.xo.onchunk(e, t), n.xo = null;
                        var r = 200 === e ? "network" : "permanent";
                        n.dispatchEvent(new o("close", {
                            reason: r
                        }))
                    }
                };
                return V.prototype = new r, V.prototype.abort = function() {
                    this.xo && (this.xo.close(), this.dispatchEvent(new o("close", {
                        reason: "user"
                    })), this.xo = null)
                }, _.getUtils = function() {
                    return n
                }, _.getIframeTransport = function() {
                    return P
                }, _
            }();
            "undefined" != typeof window && "_sockjs_onload" in window && setTimeout(_sockjs_onload, 1), null !== exports && (exports.SockJS = SockJS)
        }
    }
]);