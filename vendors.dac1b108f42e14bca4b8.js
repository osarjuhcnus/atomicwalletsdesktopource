(window.webpackJsonp = window.webpackJsonp || []).push([
    [107], {
        1018: function(e, t, r) {
            e.exports = {
                DiffieHellman: l,
                generateECDSA: function(e) {
                    var t = [];
                    if (p) {
                        var r = {
                                nistp256: "prime256v1",
                                nistp384: "secp384r1",
                                nistp521: "secp521r1"
                            } [e],
                            a = n.createECDH(r);
                        return a.generateKeys(), t.push({
                            name: "curve",
                            data: i.from(e)
                        }), t.push({
                            name: "Q",
                            data: a.getPublicKey()
                        }), t.push({
                            name: "d",
                            data: a.getPrivateKey()
                        }), new u({
                            type: "ecdsa",
                            curve: e,
                            parts: t
                        })
                    }
                    var s = new g(e),
                        o = s.getN(),
                        f = Math.ceil((o.bitLength() + 64) / 8),
                        c = new d(n.randomBytes(f)),
                        h = o.subtract(d.ONE),
                        l = c.mod(h).add(d.ONE),
                        m = s.getG().multiply(l);
                    return l = i.from(l.toByteArray()), m = i.from(s.getCurve().encodePointHex(m), "hex"), t.push({
                        name: "curve",
                        data: i.from(e)
                    }), t.push({
                        name: "Q",
                        data: m
                    }), t.push({
                        name: "d",
                        data: l
                    }), new u({
                        type: "ecdsa",
                        curve: e,
                        parts: t
                    })
                },
                generateED25519: function() {
                    var e = f.sign.keyPair(),
                        t = i.from(e.secretKey),
                        r = i.from(e.publicKey);
                    a.strictEqual(t.length, 64), a.strictEqual(r.length, 32);
                    var n = [];
                    return n.push({
                        name: "A",
                        data: r
                    }), n.push({
                        name: "k",
                        data: t.slice(0, 32)
                    }), new u({
                        type: "ed25519",
                        parts: n
                    })
                }
            };
            var a = r(75),
                n = r(24),
                i = r(77).Buffer,
                s = r(146),
                o = r(118),
                f = r(602),
                c = r(116),
                u = r(117),
                p = void 0 !== n.createECDH,
                h = (r(3022), r(601)),
                d = r(491).BigInteger;

            function l(e) {
                if (o.assertCompatible(e, c, [1, 4], "key"), this._isPriv = u.isPrivateKey(e, [1, 3]), this._algo = e.type, this._curve = e.curve, this._key = e, "dsa" === e.type) {
                    if (!p) throw new Error("Due to bugs in the node 0.10 crypto API, node 0.12.x or later is required to use DH");
                    this._dh = n.createDiffieHellman(e.part.p.data, void 0, e.part.g.data, void 0), this._p = e.part.p, this._g = e.part.g, this._isPriv && this._dh.setPrivateKey(e.part.x.data), this._dh.setPublicKey(e.part.y.data)
                } else if ("ecdsa" === e.type) {
                    if (!p) return this._ecParams = new g(this._curve), void(this._isPriv && (this._priv = new v(this._ecParams, e.part.d.data)));
                    var t = {
                        nistp256: "prime256v1",
                        nistp384: "secp384r1",
                        nistp521: "secp521r1"
                    } [e.curve];
                    if (this._dh = n.createECDH(t), "object" != typeof this._dh || "function" != typeof this._dh.setPrivateKey) return p = !1, void l.call(this, e);
                    this._isPriv && this._dh.setPrivateKey(e.part.d.data), this._dh.setPublicKey(e.part.Q.data)
                } else {
                    if ("curve25519" !== e.type) throw new Error("DH not supported for " + e.type + " keys");
                    this._isPriv && (o.assertCompatible(e, u, [1, 5], "key"), this._priv = e.part.k.data)
                }
            }

            function g(e) {
                var t = s.curves[e];
                a.object(t);
                var r = new d(t.p),
                    n = new d(t.a),
                    i = new d(t.b),
                    o = new d(t.n),
                    f = d.ONE,
                    c = new h.ECCurveFp(r, n, i),
                    u = c.decodePointHex(t.G.toString("hex"));
                this.curve = c, this.g = u, this.n = o, this.h = f
            }

            function m(e, t) {
                this._params = e, 0 === t[0] && (t = t.slice(1)), this._pub = e.getCurve().decodePointHex(t.toString("hex"))
            }

            function v(e, t) {
                this._params = e, this._priv = new d(o.mpNormalize(t))
            }
            l.prototype.getPublicKey = function() {
                return this._isPriv ? this._key.toPublic() : this._key
            }, l.prototype.getPrivateKey = function() {
                return this._isPriv ? this._key : void 0
            }, l.prototype.getKey = l.prototype.getPrivateKey, l.prototype._keyCheck = function(e, t) {
                if (a.object(e, "key"), t || o.assertCompatible(e, u, [1, 3], "key"), o.assertCompatible(e, c, [1, 4], "key"), e.type !== this._algo) throw new Error("A " + e.type + " key cannot be used in " + this._algo + " Diffie-Hellman");
                if (e.curve !== this._curve) throw new Error("A key from the " + e.curve + " curve cannot be used with a " + this._curve + " Diffie-Hellman");
                "dsa" === e.type && (a.deepEqual(e.part.p, this._p, "DSA key prime does not match"), a.deepEqual(e.part.g, this._g, "DSA key generator does not match"))
            }, l.prototype.setKey = function(e) {
                if (this._keyCheck(e), "dsa" === e.type) this._dh.setPrivateKey(e.part.x.data), this._dh.setPublicKey(e.part.y.data);
                else if ("ecdsa" === e.type) p ? (this._dh.setPrivateKey(e.part.d.data), this._dh.setPublicKey(e.part.Q.data)) : this._priv = new v(this._ecParams, e.part.d.data);
                else if ("curve25519" === e.type) {
                    var t = e.part.k;
                    e.part.k || (t = e.part.r), this._priv = t.data, 0 === this._priv[0] && (this._priv = this._priv.slice(1)), this._priv = this._priv.slice(0, 32)
                }
                this._key = e, this._isPriv = !0
            }, l.prototype.setPrivateKey = l.prototype.setKey, l.prototype.computeSecret = function(e) {
                if (this._keyCheck(e, !0), !this._isPriv) throw new Error("DH exchange has not been initialized with a private key yet");
                var t;
                if ("dsa" === this._algo) return this._dh.computeSecret(e.part.y.data);
                if ("ecdsa" === this._algo) return p ? this._dh.computeSecret(e.part.Q.data) : (t = new m(this._ecParams, e.part.Q.data), this._priv.deriveSharedSecret(t));
                if ("curve25519" === this._algo) {
                    for (t = e.part.A.data; 0 === t[0] && t.length > 32;) t = t.slice(1);
                    var r = this._priv;
                    a.strictEqual(t.length, 32), a.strictEqual(r.length, 32);
                    var n = f.box.before(new Uint8Array(t), new Uint8Array(r));
                    return i.from(n)
                }
                throw new Error("Invalid algorithm: " + this._algo)
            }, l.prototype.generateKey = function() {
                var e, t, r = [];
                if ("dsa" === this._algo) return this._dh.generateKeys(), r.push({
                    name: "p",
                    data: this._p.data
                }), r.push({
                    name: "q",
                    data: this._key.part.q.data
                }), r.push({
                    name: "g",
                    data: this._g.data
                }), r.push({
                    name: "y",
                    data: this._dh.getPublicKey()
                }), r.push({
                    name: "x",
                    data: this._dh.getPrivateKey()
                }), this._key = new u({
                    type: "dsa",
                    parts: r
                }), this._isPriv = !0, this._key;
                if ("ecdsa" === this._algo) {
                    if (p) return this._dh.generateKeys(), r.push({
                        name: "curve",
                        data: i.from(this._curve)
                    }), r.push({
                        name: "Q",
                        data: this._dh.getPublicKey()
                    }), r.push({
                        name: "d",
                        data: this._dh.getPrivateKey()
                    }), this._key = new u({
                        type: "ecdsa",
                        curve: this._curve,
                        parts: r
                    }), this._isPriv = !0, this._key;
                    var s = this._ecParams.getN(),
                        o = new d(n.randomBytes(s.bitLength())),
                        c = s.subtract(d.ONE);
                    return e = o.mod(c).add(d.ONE), t = this._ecParams.getG().multiply(e), e = i.from(e.toByteArray()), t = i.from(this._ecParams.getCurve().encodePointHex(t), "hex"), this._priv = new v(this._ecParams, e), r.push({
                        name: "curve",
                        data: i.from(this._curve)
                    }), r.push({
                        name: "Q",
                        data: t
                    }), r.push({
                        name: "d",
                        data: e
                    }), this._key = new u({
                        type: "ecdsa",
                        curve: this._curve,
                        parts: r
                    }), this._isPriv = !0, this._key
                }
                if ("curve25519" === this._algo) {
                    var h = f.box.keyPair();
                    return e = i.from(h.secretKey), t = i.from(h.publicKey), e = i.concat([e, t]), a.strictEqual(e.length, 64), a.strictEqual(t.length, 32), r.push({
                        name: "A",
                        data: t
                    }), r.push({
                        name: "k",
                        data: e
                    }), this._key = new u({
                        type: "curve25519",
                        parts: r
                    }), this._isPriv = !0, this._key
                }
                throw new Error("Invalid algorithm: " + this._algo)
            }, l.prototype.generateKeys = l.prototype.generateKey, g.prototype.getCurve = function() {
                return this.curve
            }, g.prototype.getG = function() {
                return this.g
            }, g.prototype.getN = function() {
                return this.n
            }, g.prototype.getH = function() {
                return this.h
            }, v.prototype.deriveSharedSecret = function(e) {
                a.ok(e instanceof m);
                var t = e._pub.multiply(this._priv);
                return i.from(t.getX().toBigInteger().toByteArray())
            }
        },
        1019: function(e, t, r) {
            e.exports = {
                read: function(e, t) {
                    return u.read(e, t, "pkcs1")
                },
                readPkcs1: function(e, t, r) {
                    switch (e) {
                        case "RSA":
                            if ("public" === t) return function(e) {
                                var t = h(e, "modulus"),
                                    r = h(e, "exponent");
                                return new f({
                                    type: "rsa",
                                    parts: [{
                                        name: "e",
                                        data: r
                                    }, {
                                        name: "n",
                                        data: t
                                    }]
                                })
                            }(r);
                            if ("private" === t) return function(e) {
                                var t = h(e, "version");
                                a.strictEqual(t[0], 0);
                                var r = h(e, "modulus"),
                                    n = h(e, "public exponent"),
                                    i = h(e, "private exponent"),
                                    s = h(e, "prime1"),
                                    o = h(e, "prime2"),
                                    f = h(e, "exponent1"),
                                    u = h(e, "exponent2"),
                                    p = h(e, "iqmp");
                                return new c({
                                    type: "rsa",
                                    parts: [{
                                        name: "n",
                                        data: r
                                    }, {
                                        name: "e",
                                        data: n
                                    }, {
                                        name: "d",
                                        data: i
                                    }, {
                                        name: "iqmp",
                                        data: p
                                    }, {
                                        name: "p",
                                        data: s
                                    }, {
                                        name: "q",
                                        data: o
                                    }, {
                                        name: "dmodp",
                                        data: f
                                    }, {
                                        name: "dmodq",
                                        data: u
                                    }]
                                })
                            }(r);
                            throw new Error("Unknown key type: " + t);
                        case "DSA":
                            if ("public" === t) return function(e) {
                                var t = h(e, "y"),
                                    r = h(e, "p"),
                                    a = h(e, "q"),
                                    n = h(e, "g");
                                return new f({
                                    type: "dsa",
                                    parts: [{
                                        name: "y",
                                        data: t
                                    }, {
                                        name: "p",
                                        data: r
                                    }, {
                                        name: "q",
                                        data: a
                                    }, {
                                        name: "g",
                                        data: n
                                    }]
                                })
                            }(r);
                            if ("private" === t) return function(e) {
                                var t = h(e, "version");
                                a.strictEqual(t.readUInt8(0), 0);
                                var r = h(e, "p"),
                                    n = h(e, "q"),
                                    i = h(e, "g"),
                                    s = h(e, "y"),
                                    o = h(e, "x");
                                return new c({
                                    type: "dsa",
                                    parts: [{
                                        name: "p",
                                        data: r
                                    }, {
                                        name: "q",
                                        data: n
                                    }, {
                                        name: "g",
                                        data: i
                                    }, {
                                        name: "y",
                                        data: s
                                    }, {
                                        name: "x",
                                        data: o
                                    }]
                                })
                            }(r);
                            throw new Error("Unknown key type: " + t);
                        case "EC":
                        case "ECDSA":
                            if ("private" === t) return function(e) {
                                var t = h(e, "version");
                                a.strictEqual(t.readUInt8(0), 1);
                                var r = e.readString(n.Ber.OctetString, !0);
                                e.readSequence(160);
                                var s = p(e);
                                a.string(s, "a known elliptic curve"), e.readSequence(161);
                                var f = e.readString(n.Ber.BitString, !0);
                                f = o.ecNormalize(f);
                                var u = {
                                    type: "ecdsa",
                                    parts: [{
                                        name: "curve",
                                        data: i.from(s)
                                    }, {
                                        name: "Q",
                                        data: f
                                    }, {
                                        name: "d",
                                        data: r
                                    }]
                                };
                                return new c(u)
                            }(r);
                            if ("public" === t) return function(e) {
                                e.readSequence();
                                var t = e.readOID();
                                a.strictEqual(t, "1.2.840.10045.2.1", "must be ecPublicKey");
                                for (var r, c = e.readOID(), u = Object.keys(s.curves), p = 0; p < u.length; ++p) {
                                    var h = u[p];
                                    if (s.curves[h].pkcs8oid === c) {
                                        r = h;
                                        break
                                    }
                                }
                                a.string(r, "a known ECDSA named curve");
                                var d = e.readString(n.Ber.BitString, !0);
                                d = o.ecNormalize(d);
                                var l = {
                                    type: "ecdsa",
                                    parts: [{
                                        name: "curve",
                                        data: i.from(r)
                                    }, {
                                        name: "Q",
                                        data: d
                                    }]
                                };
                                return new f(l)
                            }(r);
                            throw new Error("Unknown key type: " + t);
                        case "EDDSA":
                        case "EdDSA":
                            if ("private" === t) return function(e) {
                                var t = h(e, "version");
                                a.strictEqual(t.readUInt8(0), 1);
                                var r = e.readString(n.Ber.OctetString, !0);
                                e.readSequence(160);
                                var i = e.readOID();
                                a.strictEqual(i, "1.3.101.112", "the ed25519 curve identifier"), e.readSequence(161);
                                var s = o.readBitString(e),
                                    f = {
                                        type: "ed25519",
                                        parts: [{
                                            name: "A",
                                            data: o.zeroPadToLength(s, 32)
                                        }, {
                                            name: "k",
                                            data: r
                                        }]
                                    };
                                return new c(f)
                            }(r);
                            throw new Error(t + " keys not supported with EdDSA");
                        default:
                            throw new Error("Unknown key algo: " + e)
                    }
                },
                write: function(e, t) {
                    return u.write(e, t, "pkcs1")
                },
                writePkcs1: function(e, t) {
                    switch (e.startSequence(), t.type) {
                        case "rsa":
                            c.isPrivateKey(t) ? function(e, t) {
                                var r = i.from([0]);
                                e.writeBuffer(r, n.Ber.Integer), e.writeBuffer(t.part.n.data, n.Ber.Integer), e.writeBuffer(t.part.e.data, n.Ber.Integer), e.writeBuffer(t.part.d.data, n.Ber.Integer), e.writeBuffer(t.part.p.data, n.Ber.Integer), e.writeBuffer(t.part.q.data, n.Ber.Integer), t.part.dmodp && t.part.dmodq || o.addRSAMissing(t);
                                e.writeBuffer(t.part.dmodp.data, n.Ber.Integer), e.writeBuffer(t.part.dmodq.data, n.Ber.Integer), e.writeBuffer(t.part.iqmp.data, n.Ber.Integer)
                            }(e, t) : function(e, t) {
                                e.writeBuffer(t.part.n.data, n.Ber.Integer), e.writeBuffer(t.part.e.data, n.Ber.Integer)
                            }(e, t);
                            break;
                        case "dsa":
                            c.isPrivateKey(t) ? function(e, t) {
                                var r = i.from([0]);
                                e.writeBuffer(r, n.Ber.Integer), e.writeBuffer(t.part.p.data, n.Ber.Integer), e.writeBuffer(t.part.q.data, n.Ber.Integer), e.writeBuffer(t.part.g.data, n.Ber.Integer), e.writeBuffer(t.part.y.data, n.Ber.Integer), e.writeBuffer(t.part.x.data, n.Ber.Integer)
                            }(e, t) : function(e, t) {
                                e.writeBuffer(t.part.y.data, n.Ber.Integer), e.writeBuffer(t.part.p.data, n.Ber.Integer), e.writeBuffer(t.part.q.data, n.Ber.Integer), e.writeBuffer(t.part.g.data, n.Ber.Integer)
                            }(e, t);
                            break;
                        case "ecdsa":
                            c.isPrivateKey(t) ? function(e, t) {
                                var r = i.from([1]);
                                e.writeBuffer(r, n.Ber.Integer), e.writeBuffer(t.part.d.data, n.Ber.OctetString), e.startSequence(160);
                                var f = t.part.curve.data.toString(),
                                    c = s.curves[f].pkcs8oid;
                                a.string(c, "a known ECDSA named curve"), e.writeOID(c), e.endSequence(), e.startSequence(161);
                                var u = o.ecNormalize(t.part.Q.data, !0);
                                e.writeBuffer(u, n.Ber.BitString), e.endSequence()
                            }(e, t) : function(e, t) {
                                e.startSequence(), e.writeOID("1.2.840.10045.2.1");
                                var r = t.part.curve.data.toString(),
                                    i = s.curves[r].pkcs8oid;
                                a.string(i, "a known ECDSA named curve"), e.writeOID(i), e.endSequence();
                                var f = o.ecNormalize(t.part.Q.data, !0);
                                e.writeBuffer(f, n.Ber.BitString)
                            }(e, t);
                            break;
                        case "ed25519":
                            c.isPrivateKey(t) ? function(e, t) {
                                var r = i.from([1]);
                                e.writeBuffer(r, n.Ber.Integer), e.writeBuffer(t.part.k.data, n.Ber.OctetString), e.startSequence(160), e.writeOID("1.3.101.112"), e.endSequence(), e.startSequence(161), o.writeBitString(e, t.part.A.data), e.endSequence()
                            }(e, t) : function(e, t) {
                                throw new Error("Public keys are not supported for EdDSA PKCS#1")
                            }();
                            break;
                        default:
                            throw new Error("Unknown key algo: " + t.type)
                    }
                    e.endSequence()
                }
            };
            var a = r(75),
                n = r(260),
                i = r(77).Buffer,
                s = r(146),
                o = r(118),
                f = r(116),
                c = r(117),
                u = r(286),
                p = r(492).readECDSACurve;

            function h(e, t) {
                return a.strictEqual(e.peek(), n.Ber.Integer, t + " is not an Integer"), o.mpNormalize(e.readString(n.Ber.Integer, !0))
            }
        },
        1020: function(e, t, r) {
            e.exports = {
                read: function(e, t) {
                    "string" != typeof e && (a.buffer(e, "buf"), e = e.toString("ascii"));
                    var r = e.split("\n");
                    if (r[0].match(/^Private-key-format\: v1/)) {
                        var f = r[1].split(" "),
                            p = parseInt(f[1], 10),
                            h = f[2];
                        if (!c[p]) throw new Error("Unsupported algorithm: " + h);
                        return function(e, t) {
                            if (c[e].match(/^RSA-/)) return function(e) {
                                var t = {};
                                e.forEach((function(e) {
                                    "Modulus:" === e.split(" ")[0] ? t.n = u(e) : "PublicExponent:" === e.split(" ")[0] ? t.e = u(e) : "PrivateExponent:" === e.split(" ")[0] ? t.d = u(e) : "Prime1:" === e.split(" ")[0] ? t.p = u(e) : "Prime2:" === e.split(" ")[0] ? t.q = u(e) : "Exponent1:" === e.split(" ")[0] ? t.dmodp = u(e) : "Exponent2:" === e.split(" ")[0] ? t.dmodq = u(e) : "Coefficient:" === e.split(" ")[0] && (t.iqmp = u(e))
                                }));
                                var r = {
                                    type: "rsa",
                                    parts: [{
                                        name: "e",
                                        data: o.mpNormalize(t.e)
                                    }, {
                                        name: "n",
                                        data: o.mpNormalize(t.n)
                                    }, {
                                        name: "d",
                                        data: o.mpNormalize(t.d)
                                    }, {
                                        name: "p",
                                        data: o.mpNormalize(t.p)
                                    }, {
                                        name: "q",
                                        data: o.mpNormalize(t.q)
                                    }, {
                                        name: "dmodp",
                                        data: o.mpNormalize(t.dmodp)
                                    }, {
                                        name: "dmodq",
                                        data: o.mpNormalize(t.dmodq)
                                    }, {
                                        name: "iqmp",
                                        data: o.mpNormalize(t.iqmp)
                                    }]
                                };
                                return new s(r)
                            }(t);
                            if ("ECDSA-P384-SHA384" === c[e] || "ECDSA-P256-SHA256" === c[e]) {
                                var r = n.from(t[0].split(" ")[1], "base64"),
                                    a = "nistp384",
                                    i = 384;
                                "ECDSA-P256-SHA256" === c[e] && (a = "nistp256", i = 256);
                                var f = o.publicFromPrivateECDSA(a, r).part.Q.data,
                                    p = {
                                        type: "ecdsa",
                                        curve: a,
                                        size: i,
                                        parts: [{
                                            name: "curve",
                                            data: n.from(a)
                                        }, {
                                            name: "d",
                                            data: r
                                        }, {
                                            name: "Q",
                                            data: f
                                        }]
                                    };
                                return new s(p)
                            }
                            throw new Error("Unsupported algorithm: " + c[e])
                        }(p, r.slice(2))
                    }
                    var d = 0;
                    for (; r[d].match(/^\;/);) d++;
                    if ((r[d].match(/\. IN KEY /) || r[d].match(/\. IN DNSKEY /)) && 0 === r[d + 1].length) return function(e) {
                        var t = e.split(" "),
                            r = parseInt(t[5], 10);
                        if (!c[r]) throw new Error("Unsupported algorithm: " + r);
                        var a = t.slice(6, t.length).join(),
                            s = n.from(a, "base64");
                        if (c[r].match(/^RSA-/)) {
                            var f = s.readUInt8(0);
                            if (3 != f && 1 != f) throw new Error("Cannot parse dnssec key: unsupported exponent length");
                            var u = s.slice(1, f + 1);
                            u = o.mpNormalize(u);
                            var p = s.slice(1 + f);
                            p = o.mpNormalize(p);
                            var h = {
                                type: "rsa",
                                parts: []
                            };
                            return h.parts.push({
                                name: "e",
                                data: u
                            }), h.parts.push({
                                name: "n",
                                data: p
                            }), new i(h)
                        }
                        if ("ECDSA-P384-SHA384" === c[r] || "ECDSA-P256-SHA256" === c[r]) {
                            var d = "nistp384",
                                l = 384;
                            c[r].match(/^ECDSA-P256-SHA256/) && (d = "nistp256", l = 256);
                            var g = {
                                type: "ecdsa",
                                curve: d,
                                size: l,
                                parts: [{
                                    name: "curve",
                                    data: n.from(d)
                                }, {
                                    name: "Q",
                                    data: o.ecNormalize(s)
                                }]
                            };
                            return new i(g)
                        }
                        throw new Error("Unsupported algorithm: " + c[r])
                    }(r[d]);
                    throw new Error("Cannot parse dnssec key")
                },
                write: function(e, t) {
                    if (s.isPrivateKey(e)) {
                        if ("rsa" === e.type) return function(e, t) {
                            e.part.dmodp && e.part.dmodq || o.addRSAMissing(e);
                            var r = "";
                            r += "Private-key-format: v1.3\n", r += "Algorithm: " + function(e) {
                                if (e && e.hashAlgo && "sha1" !== e.hashAlgo) {
                                    if ("sha256" === e.hashAlgo) return "8 (RSASHA256)";
                                    if ("sha512" === e.hashAlgo) return "10 (RSASHA512)";
                                    throw new Error("Unknown or unsupported hash: " + e.hashAlgo)
                                }
                                return "5 (RSASHA1)"
                            }(t) + "\n";
                            var a = o.mpDenormalize(e.part.n.data);
                            r += "Modulus: " + a.toString("base64") + "\n";
                            var i = o.mpDenormalize(e.part.e.data);
                            r += "PublicExponent: " + i.toString("base64") + "\n";
                            var s = o.mpDenormalize(e.part.d.data);
                            r += "PrivateExponent: " + s.toString("base64") + "\n";
                            var f = o.mpDenormalize(e.part.p.data);
                            r += "Prime1: " + f.toString("base64") + "\n";
                            var c = o.mpDenormalize(e.part.q.data);
                            r += "Prime2: " + c.toString("base64") + "\n";
                            var u = o.mpDenormalize(e.part.dmodp.data);
                            r += "Exponent1: " + u.toString("base64") + "\n";
                            var h = o.mpDenormalize(e.part.dmodq.data);
                            r += "Exponent2: " + h.toString("base64") + "\n";
                            var d = o.mpDenormalize(e.part.iqmp.data);
                            r += "Coefficient: " + d.toString("base64") + "\n";
                            var l = new Date;
                            return r += "Created: " + p(l) + "\n", r += "Publish: " + p(l) + "\n", r += "Activate: " + p(l) + "\n", n.from(r, "ascii")
                        }(e, t);
                        if ("ecdsa" === e.type) return function(e, t) {
                            var r = "";
                            if (r += "Private-key-format: v1.3\n", "nistp256" === e.curve) r += "Algorithm: 13 (ECDSAP256SHA256)\n";
                            else {
                                if ("nistp384" !== e.curve) throw new Error("Unsupported curve");
                                r += "Algorithm: 14 (ECDSAP384SHA384)\n"
                            }
                            var a = e.part.d.data.toString("base64");
                            r += "PrivateKey: " + a + "\n";
                            var i = new Date;
                            return r += "Created: " + p(i) + "\n", r += "Publish: " + p(i) + "\n", r += "Activate: " + p(i) + "\n", n.from(r, "ascii")
                        }(e);
                        throw new Error("Unsupported algorithm: " + e.type)
                    }
                    throw i.isKey(e) ? new Error('Format "dnssec" only supports writing private keys') : new Error("key is not a Key or PrivateKey")
                }
            };
            var a = r(75),
                n = r(77).Buffer,
                i = r(116),
                s = r(117),
                o = r(118),
                f = (r(399), r(1018), {
                    "rsa-sha1": 5,
                    "rsa-sha256": 8,
                    "rsa-sha512": 10,
                    "ecdsa-p256-sha256": 13,
                    "ecdsa-p384-sha384": 14
                }),
                c = {};

            function u(e) {
                return n.from(e.split(" ")[1], "base64")
            }

            function p(e) {
                var t = e.getFullYear() + "" + (e.getMonth() + 1) + e.getUTCDate();
                return t += "" + e.getUTCHours() + e.getUTCMinutes(), t += e.getUTCSeconds()
            }
            Object.keys(f).forEach((function(e) {
                c[f[e]] = e.toUpperCase()
            }))
        },
        1021: function(e, t, r) {
            e.exports = {
                read: function(e, t) {
                    var r, s, h = e.toString("ascii").split(/[\r\n]+/),
                        d = !1,
                        l = 0;
                    for (; l < h.length;)
                        if ((r = p(h[l++])) && (s = {
                                "putty-user-key-file-2": 2,
                                "putty-user-key-file-3": 3
                            } [r[0].toLowerCase()])) {
                            d = !0;
                            break
                        } if (!d) throw new Error("No PuTTY format first line found");
                    var g = r[1];
                    r = p(h[l++]), a.equal(r[0].toLowerCase(), "encryption");
                    var m = r[1];
                    r = p(h[l++]), a.equal(r[0].toLowerCase(), "comment");
                    var v = r[1];
                    r = p(h[l++]), a.equal(r[0].toLowerCase(), "public-lines");
                    var y = parseInt(r[1], 10);
                    if (!isFinite(y) || y < 0 || y > h.length) throw new Error("Invalid public-lines count");
                    var w = n.from(h.slice(l, l + y).join(""), "base64"),
                        b = i.algToKeyType(g),
                        S = i.read(w);
                    if (S.type !== b) throw new Error("Outer key algorithm mismatch");
                    if (h[l += y]) {
                        r = p(h[l++]), a.equal(r[0].toLowerCase(), "private-lines");
                        var k = parseInt(r[1], 10);
                        if (!isFinite(k) || k < 0 || k > h.length) throw new Error("Invalid private-lines count");
                        var B = n.from(h.slice(l, l + k).join(""), "base64");
                        if ("none" !== m && 3 === s) throw new Error("Encrypted keys arenot supported for PuTTY format version 3");
                        if ("aes256-cbc" === m) {
                            if (!t.passphrase) throw new u.KeyEncryptedError(t.filename, "PEM");
                            var E = n.alloc(16, 0),
                                F = f.createDecipheriv("aes-256-cbc", (A = t.passphrase, _ = f.createHash("sha1").update(n.concat([n.from([0, 0, 0, 0]), n.from(A)])).digest(), P = f.createHash("sha1").update(n.concat([n.from([0, 0, 0, 1]), n.from(A)])).digest(), n.concat([_, P]).slice(0, 32)), E);
                            F.setAutoPadding(!1), B = n.concat([F.update(B), F.final()])
                        }
                        if ((S = new c(S)).type !== b) throw new Error("Outer key algorithm mismatch");
                        var q, I = new o({
                            buffer: B
                        });
                        if ("ssh-dss" === g) q = [{
                            name: "x",
                            data: I.readBuffer()
                        }];
                        else if ("ssh-rsa" === g) q = [{
                            name: "d",
                            data: I.readBuffer()
                        }, {
                            name: "p",
                            data: I.readBuffer()
                        }, {
                            name: "q",
                            data: I.readBuffer()
                        }, {
                            name: "iqmp",
                            data: I.readBuffer()
                        }];
                        else if (g.match(/^ecdsa-sha2-nistp/)) q = [{
                            name: "d",
                            data: I.readBuffer()
                        }];
                        else {
                            if ("ssh-ed25519" !== g) throw new Error("Unsupported PPK key type: " + g);
                            q = [{
                                name: "k",
                                data: I.readBuffer()
                            }]
                        }
                        S = new c({
                            type: S.type,
                            parts: S.parts.concat(q)
                        })
                    }
                    var A, _, P;
                    return S.comment = v, S
                },
                write: function(e, t) {
                    if (a.object(e), !s.isKey(e)) throw new Error("Must be a public key");
                    var r = i.keyTypeToAlg(e),
                        o = i.write(e),
                        f = e.comment || "",
                        c = function(e, t) {
                            var r = [],
                                a = 0;
                            for (; a < e.length;) r.push(e.slice(a, a + 64)), a += 64;
                            return r
                        }(o.toString("base64"));
                    return c.unshift("Public-Lines: " + c.length), c.unshift("Comment: " + f), c.unshift("Encryption: none"), c.unshift("PuTTY-User-Key-File-2: " + r), n.from(c.join("\n") + "\n")
                }
            };
            var a = r(75),
                n = r(77).Buffer,
                i = r(287),
                s = r(116),
                o = r(399),
                f = r(24),
                c = r(117),
                u = r(237);

            function p(e) {
                var t = e.indexOf(":");
                if (-1 === t) return null;
                var r = e.slice(0, t);
                for (++t;
                    " " === e[t];) ++t;
                return [r, e.slice(t)]
            }
        },
        116: function(e, t, r) {
            e.exports = m;
            var a, n = r(75),
                i = r(146),
                s = r(24),
                o = r(490),
                f = r(259),
                c = r(1018).DiffieHellman,
                u = r(237),
                p = r(118),
                h = r(117);
            try {
                a = r(1693)
            } catch (e) {}
            var d = u.InvalidAlgorithmError,
                l = u.KeyParseError,
                g = {};

            function m(e) {
                n.object(e, "options"), n.arrayOfObject(e.parts, "options.parts"), n.string(e.type, "options.type"), n.optionalString(e.comment, "options.comment");
                var t = i.info[e.type];
                if ("object" != typeof t) throw new d(e.type);
                for (var r, a = {}, s = 0; s < e.parts.length; ++s) {
                    var o = e.parts[s];
                    a[o.name] = o
                }
                if (this.type = e.type, this.parts = e.parts, this.part = a, this.comment = void 0, this.source = e.source, this._rfc4253Cache = e._rfc4253Cache, this._hashCache = {}, this.curve = void 0, "ecdsa" === this.type) {
                    var f = this.part.curve.data.toString();
                    this.curve = f, r = i.curves[f].size
                } else if ("ed25519" === this.type || "curve25519" === this.type) r = 256, this.curve = "curve25519";
                else {
                    var c = this.part[t.sizePart];
                    r = 8 * (r = c.data.length) - p.countZeros(c.data)
                }
                this.size = r
            }
            g.auto = r(1694), g.pem = r(286), g.pkcs1 = r(1019), g.pkcs8 = r(492), g.rfc4253 = r(287), g.ssh = r(1696), g["ssh-private"] = r(603), g.openssh = g["ssh-private"], g.dnssec = r(1020), g.putty = r(1021), g.ppk = g.putty, m.formats = g, m.prototype.toBuffer = function(e, t) {
                return void 0 === e && (e = "ssh"), n.string(e, "format"), n.object(g[e], "formats[format]"), n.optionalObject(t, "options"), "rfc4253" === e ? (void 0 === this._rfc4253Cache && (this._rfc4253Cache = g.rfc4253.write(this)), this._rfc4253Cache) : g[e].write(this, t)
            }, m.prototype.toString = function(e, t) {
                return this.toBuffer(e, t).toString()
            }, m.prototype.hash = function(e, t) {
                if (n.string(e, "algorithm"), n.optionalString(t, "type"), void 0 === t && (t = "ssh"), e = e.toLowerCase(), void 0 === i.hashAlgs[e]) throw new d(e);
                var r, a = e + "||" + t;
                if (this._hashCache[a]) return this._hashCache[a];
                if ("ssh" === t) r = this.toBuffer("rfc4253");
                else {
                    if ("spki" !== t) throw new Error("Hash type " + t + " not supported");
                    r = g.pkcs8.pkcs8ToBuffer(this)
                }
                var o = s.createHash(e).update(r).digest();
                return this._hashCache[a] = o, o
            }, m.prototype.fingerprint = function(e, t) {
                void 0 === e && (e = "sha256"), void 0 === t && (t = "ssh"), n.string(e, "algorithm"), n.string(t, "type");
                var r = {
                    type: "key",
                    hash: this.hash(e, t),
                    algorithm: e,
                    hashType: t
                };
                return new o(r)
            }, m.prototype.defaultHashAlgorithm = function() {
                var e = "sha1";
                return "rsa" === this.type && (e = "sha256"), "dsa" === this.type && this.size > 1024 && (e = "sha256"), "ed25519" === this.type && (e = "sha512"), "ecdsa" === this.type && (e = this.size <= 256 ? "sha256" : this.size <= 384 ? "sha384" : "sha512"), e
            }, m.prototype.createVerify = function(e) {
                if (void 0 === e && (e = this.defaultHashAlgorithm()), n.string(e, "hash algorithm"), "ed25519" === this.type && void 0 !== a) return new a.Verifier(this, e);
                if ("curve25519" === this.type) throw new Error("Curve25519 keys are not suitable for signing or verification");
                var t, r, i;
                try {
                    r = e.toUpperCase(), t = s.createVerify(r)
                } catch (e) {
                    i = e
                }(void 0 === t || i instanceof Error && i.message.match(/Unknown message digest/)) && (r = "RSA-", r += e.toUpperCase(), t = s.createVerify(r)), n.ok(t, "failed to create verifier");
                var o = t.verify.bind(t),
                    c = this.toBuffer("pkcs8"),
                    u = this.curve,
                    p = this;
                return t.verify = function(t, r) {
                    if (f.isSignature(t, [2, 0])) return t.type === p.type && ((!t.hashAlgorithm || t.hashAlgorithm === e) && ((!t.curve || "ecdsa" !== p.type || t.curve === u) && o(c, t.toBuffer("asn1"))));
                    if ("string" == typeof t || Buffer.isBuffer(t)) return o(c, t, r);
                    throw f.isSignature(t, [1, 0]) ? new Error("signature was created by too old a version of sshpk and cannot be verified") : new TypeError("signature must be a string, Buffer, or Signature object")
                }, t
            }, m.prototype.createDiffieHellman = function() {
                if ("rsa" === this.type) throw new Error("RSA keys do not support Diffie-Hellman");
                return new c(this)
            }, m.prototype.createDH = m.prototype.createDiffieHellman, m.parse = function(e, t, r) {
                "string" != typeof e && n.buffer(e, "data"), void 0 === t && (t = "auto"), n.string(t, "format"), "string" == typeof r && (r = {
                    filename: r
                }), n.optionalObject(r, "options"), void 0 === r && (r = {}), n.optionalString(r.filename, "options.filename"), void 0 === r.filename && (r.filename = "(unnamed)"), n.object(g[t], "formats[format]");
                try {
                    var a = g[t].read(e, r);
                    return a instanceof h && (a = a.toPublic()), a.comment || (a.comment = r.filename), a
                } catch (e) {
                    if ("KeyEncryptedError" === e.name) throw e;
                    throw new l(r.filename, t, e)
                }
            }, m.isKey = function(e, t) {
                return p.isCompatible(e, m, t)
            }, m.prototype._sshpkApiVersion = [1, 7], m._oldVersionDetect = function(e) {
                return n.func(e.toBuffer), n.func(e.fingerprint), e.createDH ? [1, 4] : e.defaultHashAlgorithm ? [1, 3] : e.formats.auto ? [1, 2] : e.formats.pkcs1 ? [1, 1] : [1, 0]
            }
        },
        117: function(e, t, r) {
            e.exports = w;
            var a = r(75),
                n = r(77).Buffer,
                i = r(146),
                s = r(24),
                o = (r(490), r(259)),
                f = r(237),
                c = r(43),
                u = r(118),
                p = r(1018),
                h = p.generateECDSA,
                d = p.generateED25519,
                l = r(1693),
                g = r(602),
                m = r(116),
                v = (f.InvalidAlgorithmError, f.KeyParseError),
                y = (f.KeyEncryptedError, {});

            function w(e) {
                a.object(e, "options"), m.call(this, e), this._pubCache = void 0
            }
            y.auto = r(1694), y.pem = r(286), y.pkcs1 = r(1019), y.pkcs8 = r(492), y.rfc4253 = r(287), y["ssh-private"] = r(603), y.openssh = y["ssh-private"], y.ssh = y["ssh-private"], y.dnssec = r(1020), y.putty = r(1021), c.inherits(w, m), w.formats = y, w.prototype.toBuffer = function(e, t) {
                return void 0 === e && (e = "pkcs1"), a.string(e, "format"), a.object(y[e], "formats[format]"), a.optionalObject(t, "options"), y[e].write(this, t)
            }, w.prototype.hash = function(e, t) {
                return this.toPublic().hash(e, t)
            }, w.prototype.fingerprint = function(e, t) {
                return this.toPublic().fingerprint(e, t)
            }, w.prototype.toPublic = function() {
                if (this._pubCache) return this._pubCache;
                for (var e = i.info[this.type], t = [], r = 0; r < e.parts.length; ++r) {
                    var a = e.parts[r];
                    t.push(this.part[a])
                }
                return this._pubCache = new m({
                    type: this.type,
                    source: this,
                    parts: t
                }), this.comment && (this._pubCache.comment = this.comment), this._pubCache
            }, w.prototype.derive = function(e) {
                var t, r, i;
                if (a.string(e, "type"), "ed25519" === this.type && "curve25519" === e) return 0 === (t = this.part.k.data)[0] && (t = t.slice(1)), i = g.box.keyPair.fromSecretKey(new Uint8Array(t)), r = n.from(i.publicKey), new w({
                    type: "curve25519",
                    parts: [{
                        name: "A",
                        data: u.mpNormalize(r)
                    }, {
                        name: "k",
                        data: u.mpNormalize(t)
                    }]
                });
                if ("curve25519" === this.type && "ed25519" === e) return 0 === (t = this.part.k.data)[0] && (t = t.slice(1)), i = g.sign.keyPair.fromSeed(new Uint8Array(t)), r = n.from(i.publicKey), new w({
                    type: "ed25519",
                    parts: [{
                        name: "A",
                        data: u.mpNormalize(r)
                    }, {
                        name: "k",
                        data: u.mpNormalize(t)
                    }]
                });
                throw new Error("Key derivation not supported from " + this.type + " to " + e)
            }, w.prototype.createVerify = function(e) {
                return this.toPublic().createVerify(e)
            }, w.prototype.createSign = function(e) {
                if (void 0 === e && (e = this.defaultHashAlgorithm()), a.string(e, "hash algorithm"), "ed25519" === this.type && void 0 !== l) return new l.Signer(this, e);
                if ("curve25519" === this.type) throw new Error("Curve25519 keys are not suitable for signing or verification");
                var t, r, i;
                try {
                    r = e.toUpperCase(), t = s.createSign(r)
                } catch (e) {
                    i = e
                }(void 0 === t || i instanceof Error && i.message.match(/Unknown message digest/)) && (r = "RSA-", r += e.toUpperCase(), t = s.createSign(r)), a.ok(t, "failed to create verifier");
                var f = t.sign.bind(t),
                    c = this.toBuffer("pkcs1"),
                    u = this.type,
                    p = this.curve;
                return t.sign = function() {
                    var t = f(c);
                    return "string" == typeof t && (t = n.from(t, "binary")), (t = o.parse(t, u, "asn1")).hashAlgorithm = e, t.curve = p, t
                }, t
            }, w.parse = function(e, t, r) {
                "string" != typeof e && a.buffer(e, "data"), void 0 === t && (t = "auto"), a.string(t, "format"), "string" == typeof r && (r = {
                    filename: r
                }), a.optionalObject(r, "options"), void 0 === r && (r = {}), a.optionalString(r.filename, "options.filename"), void 0 === r.filename && (r.filename = "(unnamed)"), a.object(y[t], "formats[format]");
                try {
                    var n = y[t].read(e, r);
                    return a.ok(n instanceof w, "key is not a private key"), n.comment || (n.comment = r.filename), n
                } catch (e) {
                    if ("KeyEncryptedError" === e.name) throw e;
                    throw new v(r.filename, t, e)
                }
            }, w.isPrivateKey = function(e, t) {
                return u.isCompatible(e, w, t)
            }, w.generate = function(e, t) {
                switch (void 0 === t && (t = {}), a.object(t, "options"), e) {
                    case "ecdsa":
                        return void 0 === t.curve && (t.curve = "nistp256"), a.string(t.curve, "options.curve"), h(t.curve);
                    case "ed25519":
                        return d();
                    default:
                        throw new Error('Key generation not supported with key type "' + e + '"')
                }
            }, w.prototype._sshpkApiVersion = [1, 6], w._oldVersionDetect = function(e) {
                return a.func(e.toPublic), a.func(e.createSign), e.derive ? [1, 3] : e.defaultHashAlgorithm ? [1, 2] : e.formats.auto ? [1, 1] : [1, 0]
            }
        },
        118: function(e, t, r) {
            e.exports = {
                bufferSplit: function(e, t) {
                    a.buffer(e), a.string(t);
                    for (var r = [], n = 0, i = 0, s = 0; s < e.length; ++s)
                        if (e[s] === t.charCodeAt(i) ? ++i : i = e[s] === t.charCodeAt(0) ? 1 : 0, i >= t.length) {
                            var o = s + 1;
                            r.push(e.slice(n, o - i)), n = o, i = 0
                        } n <= e.length && r.push(e.slice(n, e.length));
                    return r
                },
                addRSAMissing: function(e) {
                    a.object(e), d(e, i, [1, 1]);
                    var t, r = new p(e.part.d.data);
                    if (!e.part.dmodp) {
                        var n = new p(e.part.p.data),
                            s = r.mod(n.subtract(1));
                        t = m(s), e.part.dmodp = {
                            name: "dmodp",
                            data: t
                        }, e.parts.push(e.part.dmodp)
                    }
                    if (!e.part.dmodq) {
                        var o = new p(e.part.q.data),
                            f = r.mod(o.subtract(1));
                        t = m(f), e.part.dmodq = {
                            name: "dmodq",
                            data: t
                        }, e.parts.push(e.part.dmodq)
                    }
                },
                calculateDSAPublic: function(e, t, r) {
                    return a.buffer(e), a.buffer(t), a.buffer(r), e = new p(e), t = new p(t), r = new p(r), m(e.modPow(r, t))
                },
                calculateED25519Public: function(e) {
                    a.buffer(e);
                    var t = h.sign.keyPair.fromSeed(new Uint8Array(e));
                    return n.from(t.publicKey)
                },
                calculateX25519Public: function(e) {
                    a.buffer(e);
                    var t = h.box.keyPair.fromSeed(new Uint8Array(e));
                    return n.from(t.publicKey)
                },
                mpNormalize: g,
                mpDenormalize: function(e) {
                    a.buffer(e);
                    for (; e.length > 1 && 0 === e[0];) e = e.slice(1);
                    return e
                },
                ecNormalize: function(e, t) {
                    if (a.buffer(e), 0 === e[0] && 4 === e[1]) return t ? e : e.slice(1);
                    if (4 === e[0]) {
                        if (!t) return e
                    } else {
                        for (; 0 === e[0];) e = e.slice(1);
                        if (2 === e[0] || 3 === e[0]) throw new Error("Compressed elliptic curve points are not supported");
                        if (4 !== e[0]) throw new Error("Not a valid elliptic curve point");
                        if (!t) return e
                    }
                    var r = n.alloc(e.length + 1);
                    return r[0] = 0, e.copy(r, 1), r
                },
                countZeros: function(e) {
                    var t = 0,
                        r = 8;
                    for (; t < e.length;) {
                        var a = 1 << r;
                        if ((e[t] & a) === a) break;
                        --r < 0 && (t++, r = 8)
                    }
                    return 8 * t + (8 - r) - 1
                },
                assertCompatible: d,
                isCompatible: function(e, t, r) {
                    if (null === e || "object" != typeof e) return !1;
                    void 0 === r && (r = t.prototype._sshpkApiVersion);
                    if (e instanceof t && t.prototype._sshpkApiVersion[0] == r[0]) return !0;
                    var a = Object.getPrototypeOf(e),
                        n = 0;
                    for (; a.constructor.name !== t.name;)
                        if (!(a = Object.getPrototypeOf(a)) || ++n > 3) return !1;
                    if (a.constructor.name !== t.name) return !1;
                    var i = a._sshpkApiVersion;
                    void 0 === i && (i = t._oldVersionDetect(e));
                    return !(i[0] != r[0] || i[1] < r[1])
                },
                opensslKeyDeriv: function(e, t, r, i) {
                    a.buffer(t, "salt"), a.buffer(r, "passphrase"), a.number(i, "iteration count");
                    var s, f, c, u = l[e];
                    a.object(u, "supported cipher"), t = t.slice(0, 8);
                    var p = n.alloc(0);
                    for (; p.length < u.key + u.iv;) {
                        c = [], f && c.push(f), c.push(r), c.push(t), s = n.concat(c);
                        for (var h = 0; h < i; ++h) s = o.createHash("md5").update(s).digest();
                        p = n.concat([p, s]), f = s
                    }
                    return {
                        key: p.slice(0, u.key),
                        iv: p.slice(u.key, u.key + u.iv)
                    }
                },
                opensshCipherInfo: function(e) {
                    var t = {};
                    switch (e) {
                        case "3des-cbc":
                            t.keySize = 24, t.blockSize = 8, t.opensslName = "des-ede3-cbc";
                            break;
                        case "blowfish-cbc":
                            t.keySize = 16, t.blockSize = 8, t.opensslName = "bf-cbc";
                            break;
                        case "aes128-cbc":
                        case "aes128-ctr":
                        case "aes128-gcm@openssh.com":
                            t.keySize = 16, t.blockSize = 16, t.opensslName = "aes-128-" + e.slice(7, 10);
                            break;
                        case "aes192-cbc":
                        case "aes192-ctr":
                        case "aes192-gcm@openssh.com":
                            t.keySize = 24, t.blockSize = 16, t.opensslName = "aes-192-" + e.slice(7, 10);
                            break;
                        case "aes256-cbc":
                        case "aes256-ctr":
                        case "aes256-gcm@openssh.com":
                            t.keySize = 32, t.blockSize = 16, t.opensslName = "aes-256-" + e.slice(7, 10);
                            break;
                        default:
                            throw new Error('Unsupported openssl cipher "' + e + '"')
                    }
                    return t
                },
                publicFromPrivateECDSA: function(e, t) {
                    a.string(e, "curveName"), a.buffer(t);
                    var r = f.curves[e],
                        i = new p(r.p),
                        o = new p(r.a),
                        c = new p(r.b),
                        h = new u.ECCurveFp(i, o, c),
                        d = h.decodePointHex(r.G.toString("hex")),
                        l = new p(g(t)),
                        m = d.multiply(l);
                    m = n.from(h.encodePointHex(m), "hex");
                    var v = [];
                    return v.push({
                        name: "curve",
                        data: n.from(e)
                    }), v.push({
                        name: "Q",
                        data: m
                    }), new s({
                        type: "ecdsa",
                        curve: h,
                        parts: v
                    })
                },
                zeroPadToLength: function(e, t) {
                    a.buffer(e), a.number(t);
                    for (; e.length > t;) a.equal(e[0], 0), e = e.slice(1);
                    for (; e.length < t;) {
                        var r = n.alloc(e.length + 1);
                        r[0] = 0, e.copy(r, 1), e = r
                    }
                    return e
                },
                writeBitString: function(e, t, r) {
                    void 0 === r && (r = c.Ber.BitString);
                    var a = n.alloc(t.length + 1);
                    a[0] = 0, t.copy(a, 1), e.writeBuffer(a, r)
                },
                readBitString: function(e, t) {
                    void 0 === t && (t = c.Ber.BitString);
                    var r = e.readString(t, !0);
                    return a.strictEqual(r[0], 0, "bit strings with unused bits are not supported (0x" + r[0].toString(16) + ")"), r.slice(1)
                },
                pbkdf2: function(e, t, r, a, i) {
                    var s = n.alloc(t.length + 4);
                    t.copy(s);
                    var f = 0,
                        c = [],
                        u = 1;
                    for (; f < a;) {
                        var p = h(u++);
                        f += p.length, c.push(p)
                    }
                    return n.concat(c).slice(0, a);

                    function h(t) {
                        s.writeUInt32BE(t, s.length - 4);
                        var a = o.createHmac(e, i);
                        a.update(s);
                        for (var n = a.digest(), f = n, c = 1; c++ < r;) {
                            (a = o.createHmac(e, i)).update(f), f = a.digest();
                            for (var u = 0; u < n.length; ++u) n[u] ^= f[u]
                        }
                        return n
                    }
                }
            };
            var a = r(75),
                n = r(77).Buffer,
                i = r(117),
                s = r(116),
                o = r(24),
                f = r(146),
                c = r(260),
                u = r(601),
                p = r(491).BigInteger,
                h = r(602);

            function d(e, t, r, n) {
                if (void 0 === n && (n = "object"), a.ok(e, n + " must not be null"), a.object(e, n + " must be an object"), void 0 === r && (r = t.prototype._sshpkApiVersion), !(e instanceof t && t.prototype._sshpkApiVersion[0] == r[0])) {
                    for (var i = Object.getPrototypeOf(e), s = 0; i.constructor.name !== t.name;) i = Object.getPrototypeOf(i), a.ok(i && ++s <= 3, n + " must be a " + t.name + " instance");
                    a.strictEqual(i.constructor.name, t.name, n + " must be a " + t.name + " instance");
                    var o = i._sshpkApiVersion;
                    void 0 === o && (o = t._oldVersionDetect(e)), a.ok(o[0] == r[0] && o[1] >= r[1], n + " must be compatible with " + t.name + " klass version " + r[0] + "." + r[1])
                }
            }
            var l = {
                "des-ede3-cbc": {
                    key: 24,
                    iv: 8
                },
                "aes-128-cbc": {
                    key: 16,
                    iv: 16
                },
                "aes-256-cbc": {
                    key: 32,
                    iv: 16
                }
            };

            function g(e) {
                for (a.buffer(e); e.length > 1 && 0 === e[0] && 0 == (128 & e[1]);) e = e.slice(1);
                if (128 == (128 & e[0])) {
                    var t = n.alloc(e.length + 1);
                    t[0] = 0, e.copy(t, 1), e = t
                }
                return e
            }

            function m(e) {
                var t = n.from(e.toByteArray());
                return t = g(t)
            }
        },
        146: function(e, t, r) {
            var a = r(77).Buffer,
                n = {
                    dsa: {
                        parts: ["p", "q", "g", "y"],
                        sizePart: "p"
                    },
                    rsa: {
                        parts: ["e", "n"],
                        sizePart: "n"
                    },
                    ecdsa: {
                        parts: ["curve", "Q"],
                        sizePart: "Q"
                    },
                    ed25519: {
                        parts: ["A"],
                        sizePart: "A"
                    }
                };
            n.curve25519 = n.ed25519;
            var i = {
                dsa: {
                    parts: ["p", "q", "g", "y", "x"]
                },
                rsa: {
                    parts: ["n", "e", "d", "iqmp", "p", "q"]
                },
                ecdsa: {
                    parts: ["curve", "Q", "d"]
                },
                ed25519: {
                    parts: ["A", "k"]
                }
            };
            i.curve25519 = i.ed25519;
            var s = {
                nistp256: {
                    size: 256,
                    pkcs8oid: "1.2.840.10045.3.1.7",
                    p: a.from("00ffffffff 00000001 00000000 0000000000000000 ffffffff ffffffff ffffffff".replace(/ /g, ""), "hex"),
                    a: a.from("00FFFFFFFF 00000001 00000000 0000000000000000 FFFFFFFF FFFFFFFF FFFFFFFC".replace(/ /g, ""), "hex"),
                    b: a.from("5ac635d8 aa3a93e7 b3ebbd55 769886bc651d06b0 cc53b0f6 3bce3c3e 27d2604b".replace(/ /g, ""), "hex"),
                    s: a.from("00c49d3608 86e70493 6a6678e1 139d26b7819f7e90".replace(/ /g, ""), "hex"),
                    n: a.from("00ffffffff 00000000 ffffffff ffffffffbce6faad a7179e84 f3b9cac2 fc632551".replace(/ /g, ""), "hex"),
                    G: a.from("046b17d1f2 e12c4247 f8bce6e5 63a440f277037d81 2deb33a0 f4a13945 d898c2964fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e162bce3357 6b315ece cbb64068 37bf51f5".replace(/ /g, ""), "hex")
                },
                nistp384: {
                    size: 384,
                    pkcs8oid: "1.3.132.0.34",
                    p: a.from("00ffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffeffffffff 00000000 00000000 ffffffff".replace(/ /g, ""), "hex"),
                    a: a.from("00FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFEFFFFFFFF 00000000 00000000 FFFFFFFC".replace(/ /g, ""), "hex"),
                    b: a.from("b3312fa7 e23ee7e4 988e056b e3f82d19181d9c6e fe814112 0314088f 5013875ac656398d 8a2ed19d 2a85c8ed d3ec2aef".replace(/ /g, ""), "hex"),
                    s: a.from("00a335926a a319a27a 1d00896a 6773a4827acdac73".replace(/ /g, ""), "hex"),
                    n: a.from("00ffffffff ffffffff ffffffff ffffffffffffffff ffffffff c7634d81 f4372ddf581a0db2 48b0a77a ecec196a ccc52973".replace(/ /g, ""), "hex"),
                    G: a.from("04aa87ca22 be8b0537 8eb1c71e f320ad746e1d3b62 8ba79b98 59f741e0 82542a385502f25d bf55296c 3a545e38 72760ab73617de4a 96262c6f 5d9e98bf 9292dc29f8f41dbd 289a147c e9da3113 b5f0b8c00a60b1ce 1d7e819d 7a431d7c 90ea0e5f".replace(/ /g, ""), "hex")
                },
                nistp521: {
                    size: 521,
                    pkcs8oid: "1.3.132.0.35",
                    p: a.from("01ffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff ffffffffffff".replace(/ /g, ""), "hex"),
                    a: a.from("01FFFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFC".replace(/ /g, ""), "hex"),
                    b: a.from("51953eb961 8e1c9a1f 929a21a0 b68540eea2da725b 99b315f3 b8b48991 8ef109e156193951 ec7e937b 1652c0bd 3bb1bf073573df88 3d2c34f1 ef451fd4 6b503f00".replace(/ /g, ""), "hex"),
                    s: a.from("00d09e8800 291cb853 96cc6717 393284aaa0da64ba".replace(/ /g, ""), "hex"),
                    n: a.from("01ffffffffff ffffffff ffffffff ffffffffffffffff ffffffff ffffffff fffffffa51868783 bf2f966b 7fcc0148 f709a5d03bb5c9b8 899c47ae bb6fb71e 91386409".replace(/ /g, ""), "hex"),
                    G: a.from("0400c6 858e06b7 0404e9cd 9e3ecb66 2395b4429c648139 053fb521 f828af60 6b4d3dbaa14b5e77 efe75928 fe1dc127 a2ffa8de3348b3c1 856a429b f97e7e31 c2e5bd660118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd998f54449 579b4468 17afbd17 273e662c97ee7299 5ef42640 c550b901 3fad0761353c7086 a272c240 88be9476 9fd16650".replace(/ /g, ""), "hex")
                }
            };
            e.exports = {
                info: n,
                privInfo: i,
                hashAlgs: {
                    md5: !0,
                    sha1: !0,
                    sha256: !0,
                    sha384: !0,
                    sha512: !0
                },
                curves: s
            }
        },
        1693: function(e, t, r) {
            e.exports = {
                Verifier: c,
                Signer: u
            };
            var a = r(602),
                n = r(145),
                i = r(43),
                s = r(75),
                o = r(77).Buffer,
                f = r(259);

            function c(e, t) {
                if ("sha512" !== t.toLowerCase()) throw new Error("ED25519 only supports the use of SHA-512 hashes");
                this.key = e, this.chunks = [], n.Writable.call(this, {})
            }

            function u(e, t) {
                if ("sha512" !== t.toLowerCase()) throw new Error("ED25519 only supports the use of SHA-512 hashes");
                this.key = e, this.chunks = [], n.Writable.call(this, {})
            }
            i.inherits(c, n.Writable), c.prototype._write = function(e, t, r) {
                this.chunks.push(e), r()
            }, c.prototype.update = function(e) {
                "string" == typeof e && (e = o.from(e, "binary")), this.chunks.push(e)
            }, c.prototype.verify = function(e, t) {
                var r;
                if (f.isSignature(e, [2, 0])) {
                    if ("ed25519" !== e.type) return !1;
                    r = e.toBuffer("raw")
                } else if ("string" == typeof e) r = o.from(e, "base64");
                else if (f.isSignature(e, [1, 0])) throw new Error("signature was created by too old a version of sshpk and cannot be verified");
                return s.buffer(r), a.sign.detached.verify(new Uint8Array(o.concat(this.chunks)), new Uint8Array(r), new Uint8Array(this.key.part.A.data))
            }, i.inherits(u, n.Writable), u.prototype._write = function(e, t, r) {
                this.chunks.push(e), r()
            }, u.prototype.update = function(e) {
                "string" == typeof e && (e = o.from(e, "binary")), this.chunks.push(e)
            }, u.prototype.sign = function() {
                var e = a.sign.detached(new Uint8Array(o.concat(this.chunks)), new Uint8Array(o.concat([this.key.part.k.data, this.key.part.A.data]))),
                    t = o.from(e),
                    r = f.parse(t, "ed25519", "raw");
                return r.hashAlgorithm = "sha512", r
            }
        },
        1694: function(e, t, r) {
            e.exports = {
                read: function(e, t) {
                    if ("string" == typeof e) {
                        if (e.trim().match(/^[-]+[ ]*BEGIN/)) return i.read(e, t);
                        if (e.match(/^\s*ssh-[a-z]/)) return s.read(e, t);
                        if (e.match(/^\s*ecdsa-/)) return s.read(e, t);
                        if (e.match(/^putty-user-key-file-2:/i)) return c.read(e, t);
                        if (u(e)) return f.read(e, t);
                        e = n.from(e, "binary")
                    } else {
                        if (a.buffer(e), function(e) {
                                var t = 0;
                                for (; t < e.length && (32 === e[t] || 10 === e[t]);) ++t;
                                if (45 !== e[t]) return !1;
                                for (; t < e.length && 45 === e[t];) ++t;
                                for (; t < e.length && 32 === e[t];) ++t;
                                return !(t + 5 > e.length || "BEGIN" !== e.slice(t, t + 5).toString("ascii"))
                            }(e)) return i.read(e, t);
                        if (function(e) {
                                var t = 0;
                                for (; t < e.length && (32 === e[t] || 10 === e[t] || 9 === e[t]);) ++t;
                                return t + 4 <= e.length && "ssh-" === e.slice(t, t + 4).toString("ascii") || t + 6 <= e.length && "ecdsa-" === e.slice(t, t + 6).toString("ascii")
                            }(e)) return s.read(e, t);
                        if (function(e) {
                                var t = 0;
                                for (; t < e.length && (32 === e[t] || 10 === e[t] || 9 === e[t]);) ++t;
                                return t + 22 <= e.length && "putty-user-key-file-2:" === e.slice(t, t + 22).toString("ascii").toLowerCase()
                            }(e)) return c.read(e, t);
                        if (u(e)) return f.read(e, t)
                    }
                    if (e.readUInt32BE(0) < e.length) return o.read(e, t);
                    throw new Error("Failed to auto-detect format of key")
                },
                write: function(e, t) {
                    throw new Error('"auto" format cannot be used for writing')
                }
            };
            var a = r(75),
                n = r(77).Buffer,
                i = (r(118), r(116), r(117), r(286)),
                s = r(1696),
                o = r(287),
                f = r(1020),
                c = r(1021);

            function u(e) {
                if (e.length <= "Private-key-format: v1".length) return !1;
                if ("Private-key-format: v1" === e.slice(0, "Private-key-format: v1".length).toString("ascii")) return !0;
                "string" != typeof e && (e = e.toString("ascii"));
                for (var t = e.split("\n"), r = 0; t[r].match(/^\;/);) r++;
                return !!t[r].toString("ascii").match(/\. IN KEY /) || !!t[r].toString("ascii").match(/\. IN DNSKEY /)
            }
        },
        1696: function(e, t, r) {
            e.exports = {
                read: function(e, t) {
                    "string" != typeof e && (a.buffer(e, "buf"), e = e.toString("ascii"));
                    var r = e.trim().replace(/[\\\r]/g, ""),
                        s = r.match(o);
                    s || (s = r.match(f));
                    a.ok(s, "key must match regex");
                    var c, u = i.algToKeyType(s[1]),
                        p = n.from(s[2], "base64"),
                        h = {};
                    if (s[4]) try {
                        c = i.read(p)
                    } catch (e) {
                        s = r.match(f), a.ok(s, "key must match regex"), p = n.from(s[2], "base64"), c = i.readInternal(h, "public", p)
                    } else c = i.readInternal(h, "public", p);
                    if (a.strictEqual(u, c.type), s[4] && s[4].length > 0) c.comment = s[4];
                    else if (h.consumed) {
                        var d = s[2] + (s[3] ? s[3] : ""),
                            l = 4 * Math.ceil(h.consumed / 3);
                        for (d = d.slice(0, l - 2).replace(/[^a-zA-Z0-9+\/=]/g, "") + d.slice(l - 2), h.consumed % 3 > 0 && "=" !== d.slice(l - 1, l) && l--;
                            "=" === d.slice(l, l + 1);) l++;
                        var g = d.slice(l);
                        (g = g.replace(/[\r\n]/g, " ").replace(/^\s+/, "")).match(/^[a-zA-Z0-9]/) && (c.comment = g)
                    }
                    return c
                },
                write: function(e, t) {
                    if (a.object(e), !s.isKey(e)) throw new Error("Must be a public key");
                    var r = [],
                        o = i.keyTypeToAlg(e);
                    r.push(o);
                    var f = i.write(e);
                    r.push(f.toString("base64")), e.comment && r.push(e.comment);
                    return n.from(r.join(" "))
                }
            };
            var a = r(75),
                n = r(77).Buffer,
                i = r(287),
                s = (r(118), r(116)),
                o = (r(117), r(603), /^([a-z0-9-]+)[ \t]+([a-zA-Z0-9+\/]+[=]*)([ \t]+([^ \t][^\n]*[\n]*)?)?$/),
                f = /^([a-z0-9-]+)[ \t\n]+([a-zA-Z0-9+\/][a-zA-Z0-9+\/ \t\n=]*)([^a-zA-Z0-9+\/ \t\n=].*)?$/
        },
        1697: function(e, t, r) {
            e.exports = {
                read: function(e, t) {
                    "string" == typeof e && (e = i.from(e, "binary"));
                    a.buffer(e, "buf");
                    var r = new n.BerReader(e);
                    if (r.readSequence(), Math.abs(r.length - r.remain) > 1) throw new Error("DER sequence does not contain whole byte stream");
                    var h = r.offset;
                    r.readSequence();
                    var l = r.offset + r.length,
                        g = l;
                    if (r.peek() === p(0)) {
                        r.readSequence(p(0));
                        var m = r.readInt();
                        a.ok(m <= 3, "only x.509 versions up to v3 supported")
                    }
                    var v = {
                            signatures: {}
                        },
                        w = v.signatures.x509 = {};
                    w.extras = {}, v.serial = function(e, t) {
                        return a.strictEqual(e.peek(), n.Ber.Integer, t + " is not an Integer"), s.mpNormalize(e.readString(n.Ber.Integer, !0))
                    }(r, "serial"), r.readSequence();
                    var b = r.offset + r.length,
                        S = r.readOID();
                    if (void 0 === d[S]) throw new Error("unknown signature algorithm " + S);
                    r._offset = b, v.issuer = o.parseAsn1(r), r.readSequence(), v.validFrom = y(r), v.validUntil = y(r), v.subjects = [o.parseAsn1(r)], r.readSequence(), b = r.offset + r.length, v.subjectKey = u.readPkcs8(void 0, "public", r), r._offset = b, r.peek() === p(1) && (r.readSequence(p(1)), w.extras.issuerUniqueID = e.slice(r.offset, r.offset + r.length), r._offset += r.length);
                    r.peek() === p(2) && (r.readSequence(p(2)), w.extras.subjectUniqueID = e.slice(r.offset, r.offset + r.length), r._offset += r.length);
                    if (r.peek() === p(3)) {
                        r.readSequence(p(3));
                        var k = r.offset + r.length;
                        for (r.readSequence(); r.offset < k;) E(v, e, r);
                        a.strictEqual(r.offset, k)
                    }
                    a.strictEqual(r.offset, l), r.readSequence(), b = r.offset + r.length;
                    var B = r.readOID(),
                        F = d[B];
                    if (void 0 === F) throw new Error("unknown signature algorithm " + B);
                    r._offset = b;
                    var q = r.readString(n.Ber.BitString, !0);
                    0 === q[0] && (q = q.slice(1));
                    var I = F.split("-");
                    return w.signature = f.parse(q, I[0], "asn1"), w.signature.hashAlgorithm = I[1], w.algo = F, w.cache = e.slice(h, g), new c(v)
                },
                verify: function(e, t) {
                    var r = e.signatures.x509;
                    a.object(r, "x509 signature");
                    var i = r.algo.split("-");
                    if (i[0] !== t.type) return !1;
                    var s = r.cache;
                    if (void 0 === s) {
                        var o = new n.BerWriter;
                        A(e, o), s = o.buffer
                    }
                    var f = t.createVerify(i[1]);
                    return f.write(s), f.verify(r.signature)
                },
                sign: function(e, t) {
                    void 0 === e.signatures.x509 && (e.signatures.x509 = {});
                    var r = e.signatures.x509;
                    if (r.algo = t.type + "-" + t.defaultHashAlgorithm(), void 0 === d[r.algo]) return !1;
                    var a = new n.BerWriter;
                    A(e, a);
                    var i = a.buffer;
                    r.cache = i;
                    var s = t.createSign();
                    return s.write(i), e.signatures.x509.signature = s.sign(), !0
                },
                signAsync: function(e, t, r) {
                    void 0 === e.signatures.x509 && (e.signatures.x509 = {});
                    var a = e.signatures.x509,
                        i = new n.BerWriter;
                    A(e, i);
                    var s = i.buffer;
                    a.cache = s, t(s, (function(e, t) {
                        e ? r(e) : (a.algo = t.type + "-" + t.hashAlgorithm, void 0 !== d[a.algo] ? (a.signature = t, r()) : r(new Error('Invalid signing algorithm "' + a.algo + '"')))
                    }))
                },
                write: function(e, t) {
                    var r = e.signatures.x509;
                    a.object(r, "x509 signature");
                    var s = new n.BerWriter;
                    s.startSequence(), r.cache ? (s._ensure(r.cache.length), r.cache.copy(s._buf, s._offset), s._offset += r.cache.length) : A(e, s);
                    s.startSequence(), s.writeOID(d[r.algo]), r.algo.match(/^rsa-/) && s.writeNull();
                    s.endSequence();
                    var o = r.signature.toBuffer("asn1"),
                        f = i.alloc(o.length + 1);
                    return f[0] = 0, o.copy(f, 1), s.writeBuffer(f, n.Ber.BitString), s.endSequence(), s.buffer
                }
            };
            var a = r(75),
                n = r(260),
                i = r(77).Buffer,
                s = (r(146), r(118)),
                o = (r(116), r(117), r(286), r(494)),
                f = r(259),
                c = r(493),
                u = r(492);

            function p(e) {
                return n.Ber.Context | n.Ber.Constructor | e
            }

            function h(e) {
                return n.Ber.Context | e
            }
            var d = {
                "rsa-md5": "1.2.840.113549.1.1.4",
                "rsa-sha1": "1.2.840.113549.1.1.5",
                "rsa-sha256": "1.2.840.113549.1.1.11",
                "rsa-sha384": "1.2.840.113549.1.1.12",
                "rsa-sha512": "1.2.840.113549.1.1.13",
                "dsa-sha1": "1.2.840.10040.4.3",
                "dsa-sha256": "2.16.840.1.101.3.4.3.2",
                "ecdsa-sha1": "1.2.840.10045.4.1",
                "ecdsa-sha256": "1.2.840.10045.4.3.2",
                "ecdsa-sha384": "1.2.840.10045.4.3.3",
                "ecdsa-sha512": "1.2.840.10045.4.3.4",
                "ed25519-sha512": "1.3.101.112"
            };
            Object.keys(d).forEach((function(e) {
                d[d[e]] = e
            })), d["1.3.14.3.2.3"] = "rsa-md5", d["1.3.14.3.2.29"] = "rsa-sha1";
            var l = "2.5.29.17",
                g = "2.5.29.19",
                m = "2.5.29.15",
                v = "2.5.29.37";

            function y(e) {
                if (e.peek() === n.Ber.UTCTime) return function(e) {
                    var t = e.match(F);
                    a.ok(t, "timestamps must be in UTC");
                    var r = new Date,
                        n = r.getUTCFullYear(),
                        i = 100 * Math.floor(n / 100),
                        s = parseInt(t[1], 10);
                    s += n % 100 < 50 && s >= 60 ? i - 1 : i;
                    r.setUTCFullYear(s, parseInt(t[2], 10) - 1, parseInt(t[3], 10)), r.setUTCHours(parseInt(t[4], 10), parseInt(t[5], 10)), t[6] && t[6].length > 0 && r.setUTCSeconds(parseInt(t[6], 10));
                    return r
                }(e.readString(n.Ber.UTCTime));
                if (e.peek() === n.Ber.GeneralizedTime) return function(e) {
                    var t = e.match(q);
                    a.ok(t);
                    var r = new Date;
                    r.setUTCFullYear(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10)), r.setUTCHours(parseInt(t[4], 10), parseInt(t[5], 10)), t[6] && t[6].length > 0 && r.setUTCSeconds(parseInt(t[6], 10));
                    return r
                }(e.readString(n.Ber.GeneralizedTime));
                throw new Error("Unsupported date format")
            }

            function w(e, t) {
                var r, a;
                t.getUTCFullYear() >= 2050 || t.getUTCFullYear() < 1950 ? e.writeString((a = "", a += I((r = t).getUTCFullYear(), 4), a += I(r.getUTCMonth() + 1), a += I(r.getUTCDate()), a += I(r.getUTCHours()), a += I(r.getUTCMinutes()), a += I(r.getUTCSeconds()), a += "Z"), n.Ber.GeneralizedTime) : e.writeString(function(e) {
                    var t = "";
                    return t += I(e.getUTCFullYear() % 100), t += I(e.getUTCMonth() + 1), t += I(e.getUTCDate()), t += I(e.getUTCHours()), t += I(e.getUTCMinutes()), t += I(e.getUTCSeconds()), t += "Z"
                }(t), n.Ber.UTCTime)
            }
            var b = {
                    OtherName: p(0),
                    RFC822Name: h(1),
                    DNSName: h(2),
                    X400Address: p(3),
                    DirectoryName: p(4),
                    EDIPartyName: p(5),
                    URI: h(6),
                    IPAddress: h(7),
                    OID: h(8)
                },
                S = {
                    serverAuth: "1.3.6.1.5.5.7.3.1",
                    clientAuth: "1.3.6.1.5.5.7.3.2",
                    codeSigning: "1.3.6.1.5.5.7.3.3",
                    joyentDocker: "1.3.6.1.4.1.38678.1.4.1",
                    joyentCmon: "1.3.6.1.4.1.38678.1.4.2"
                },
                k = {};
            Object.keys(S).forEach((function(e) {
                k[S[e]] = e
            }));
            var B = ["signature", "identity", "keyEncryption", "encryption", "keyAgreement", "ca", "crl"];

            function E(e, t, r) {
                r.readSequence();
                var a, i, s = r.offset + r.length,
                    f = r.readOID(),
                    c = e.signatures.x509;
                switch (c.extras.exts || (c.extras.exts = []), r.peek() === n.Ber.Boolean && (i = r.readBoolean()), f) {
                    case g:
                        r.readSequence(n.Ber.OctetString), r.readSequence();
                        var u = r.offset + r.length,
                            p = !1;
                        r.peek() === n.Ber.Boolean && (p = r.readBoolean()), void 0 === e.purposes && (e.purposes = []), !0 === p && e.purposes.push("ca");
                        var h = {
                            oid: f,
                            critical: i
                        };
                        r.offset < u && r.peek() === n.Ber.Integer && (h.pathLen = r.readInt()), c.extras.exts.push(h);
                        break;
                    case v:
                        r.readSequence(n.Ber.OctetString), r.readSequence(), void 0 === e.purposes && (e.purposes = []);
                        for (var d = r.offset + r.length; r.offset < d;) {
                            var y = r.readOID();
                            e.purposes.push(k[y] || y)
                        } - 1 !== e.purposes.indexOf("serverAuth") && -1 === e.purposes.indexOf("clientAuth") ? e.subjects.forEach((function(e) {
                            "host" !== e.type && (e.type = "host", e.hostname = e.uid || e.email || e.components[0].value)
                        })) : -1 !== e.purposes.indexOf("clientAuth") && -1 === e.purposes.indexOf("serverAuth") && e.subjects.forEach((function(e) {
                            "user" !== e.type && (e.type = "user", e.uid = e.hostname || e.email || e.components[0].value)
                        })), c.extras.exts.push({
                            oid: f,
                            critical: i
                        });
                        break;
                    case m:
                        r.readSequence(n.Ber.OctetString);
                        var w = r.readString(n.Ber.BitString, !0);
                        (function(e, t) {
                            for (var r = 8 * (e.length - 1) - e[0], a = {}, n = 0; n < r; ++n) {
                                var i = 1 + Math.floor(n / 8),
                                    s = 1 << 7 - n % 8,
                                    o = 0 != (e[i] & s),
                                    f = t[n];
                                o && "string" == typeof f && (a[f] = !0)
                            }
                            return Object.keys(a)
                        })(w, B).forEach((function(t) {
                            void 0 === e.purposes && (e.purposes = []), -1 === e.purposes.indexOf(t) && e.purposes.push(t)
                        })), c.extras.exts.push({
                            oid: f,
                            critical: i,
                            bits: w
                        });
                        break;
                    case l:
                        r.readSequence(n.Ber.OctetString), r.readSequence();
                        for (var S = r.offset + r.length; r.offset < S;) switch (r.peek()) {
                            case b.OtherName:
                            case b.EDIPartyName:
                                r.readSequence(), r._offset += r.length;
                                break;
                            case b.OID:
                                r.readOID(b.OID);
                                break;
                            case b.RFC822Name:
                                var E = r.readString(b.RFC822Name);
                                a = o.forEmail(E), e.subjects[0].equals(a) || e.subjects.push(a);
                                break;
                            case b.DirectoryName:
                                r.readSequence(b.DirectoryName), a = o.parseAsn1(r), e.subjects[0].equals(a) || e.subjects.push(a);
                                break;
                            case b.DNSName:
                                var F = r.readString(b.DNSName);
                                a = o.forHost(F), e.subjects[0].equals(a) || e.subjects.push(a);
                                break;
                            default:
                                r.readString(r.peek())
                        }
                        c.extras.exts.push({
                            oid: f,
                            critical: i
                        });
                        break;
                    default:
                        c.extras.exts.push({
                            oid: f,
                            critical: i,
                            data: r.readString(n.Ber.OctetString, !0)
                        })
                }
                r._offset = s
            }
            var F = /^([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})?Z$/;
            var q = /^([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})?Z$/;

            function I(e, t) {
                void 0 === t && (t = 2);
                for (var r = "" + e; r.length < t;) r = "0" + r;
                return r
            }

            function A(e, t) {
                var r = e.signatures.x509;
                a.object(r, "x509 signature"), t.startSequence(), t.startSequence(p(0)), t.writeInt(2), t.endSequence(), t.writeBuffer(s.mpNormalize(e.serial), n.Ber.Integer), t.startSequence(), t.writeOID(d[r.algo]), r.algo.match(/^rsa-/) && t.writeNull(), t.endSequence(), e.issuer.toAsn1(t), t.startSequence(), w(t, e.validFrom), w(t, e.validUntil), t.endSequence();
                var i = e.subjects[0],
                    o = e.subjects.slice(1);
                if (i.toAsn1(t), u.writePkcs8(t, e.subjectKey), r.extras && r.extras.issuerUniqueID && t.writeBuffer(r.extras.issuerUniqueID, p(1)), r.extras && r.extras.subjectUniqueID && t.writeBuffer(r.extras.subjectUniqueID, p(2)), o.length > 0 || "host" === i.type || void 0 !== e.purposes && e.purposes.length > 0 || r.extras && r.extras.exts) {
                    t.startSequence(p(3)), t.startSequence();
                    var f = [];
                    void 0 !== e.purposes && e.purposes.length > 0 && (f.push({
                        oid: g,
                        critical: !0
                    }), f.push({
                        oid: m,
                        critical: !0
                    }), f.push({
                        oid: v,
                        critical: !0
                    })), f.push({
                        oid: l
                    }), r.extras && r.extras.exts && (f = r.extras.exts);
                    for (var c = 0; c < f.length; ++c) {
                        if (t.startSequence(), t.writeOID(f[c].oid), void 0 !== f[c].critical && t.writeBoolean(f[c].critical), f[c].oid === l) {
                            t.startSequence(n.Ber.OctetString), t.startSequence(), "host" === i.type && t.writeString(i.hostname, h(2));
                            for (var y = 0; y < o.length; ++y) "host" === o[y].type ? t.writeString(o[y].hostname, b.DNSName) : "email" === o[y].type ? t.writeString(o[y].email, b.RFC822Name) : (t.startSequence(b.DirectoryName), o[y].toAsn1(t), t.endSequence());
                            t.endSequence(), t.endSequence()
                        } else if (f[c].oid === g) {
                            t.startSequence(n.Ber.OctetString), t.startSequence();
                            var k = -1 !== e.purposes.indexOf("ca"),
                                E = f[c].pathLen;
                            t.writeBoolean(k), void 0 !== E && t.writeInt(E), t.endSequence(), t.endSequence()
                        } else if (f[c].oid === v) t.startSequence(n.Ber.OctetString), t.startSequence(), e.purposes.forEach((function(e) {
                            if ("ca" !== e && -1 === B.indexOf(e)) {
                                var r = e;
                                void 0 !== S[e] && (r = S[e]), t.writeOID(r)
                            }
                        })), t.endSequence(), t.endSequence();
                        else if (f[c].oid === m) {
                            if (t.startSequence(n.Ber.OctetString), void 0 !== f[c].bits) t.writeBuffer(f[c].bits, n.Ber.BitString);
                            else {
                                var F = _(e.purposes, B);
                                t.writeBuffer(F, n.Ber.BitString)
                            }
                            t.endSequence()
                        } else t.writeBuffer(f[c].data, n.Ber.OctetString);
                        t.endSequence()
                    }
                    t.endSequence(), t.endSequence()
                }
                t.endSequence()
            }

            function _(e, t) {
                var r = t.length,
                    a = Math.ceil(r / 8),
                    n = 8 * a - r,
                    s = i.alloc(1 + a);
                s[0] = n;
                for (var o = 0; o < r; ++o) {
                    var f = 1 + Math.floor(o / 8),
                        c = 1 << 7 - o % 8,
                        u = t[o];
                    if (void 0 !== u) - 1 !== e.indexOf(u) && (s[f] |= c)
                }
                return s
            }
        },
        237: function(e, t, r) {
            r(75);
            var a = r(43);

            function n(e, t) {
                Error.captureStackTrace && Error.captureStackTrace(this, n), this.name = "FingerprintFormatError", this.fingerprint = e, this.format = t, this.message = "Fingerprint format is not supported, or is invalid: ", void 0 !== e && (this.message += " fingerprint = " + e), void 0 !== t && (this.message += " format = " + t)
            }

            function i(e) {
                Error.captureStackTrace && Error.captureStackTrace(this, i), this.name = "InvalidAlgorithmError", this.algorithm = e, this.message = 'Algorithm "' + e + '" is not supported'
            }

            function s(e, t, r) {
                Error.captureStackTrace && Error.captureStackTrace(this, s), this.name = "KeyParseError", this.format = t, this.keyName = e, this.innerErr = r, this.message = "Failed to parse " + e + " as a valid " + t + " format key: " + r.message
            }

            function o(e, t, r) {
                Error.captureStackTrace && Error.captureStackTrace(this, o), this.name = "SignatureParseError", this.type = e, this.format = t, this.innerErr = r, this.message = "Failed to parse the given data as a " + e + " signature in " + t + " format: " + r.message
            }

            function f(e, t, r) {
                Error.captureStackTrace && Error.captureStackTrace(this, f), this.name = "CertificateParseError", this.format = t, this.certName = e, this.innerErr = r, this.message = "Failed to parse " + e + " as a valid " + t + " format certificate: " + r.message
            }

            function c(e, t) {
                Error.captureStackTrace && Error.captureStackTrace(this, c), this.name = "KeyEncryptedError", this.format = t, this.keyName = e, this.message = "The " + t + " format key " + e + " is encrypted (password-protected), and no passphrase was provided in `options`"
            }
            a.inherits(n, Error), a.inherits(i, Error), a.inherits(s, Error), a.inherits(o, Error), a.inherits(f, Error), a.inherits(c, Error), e.exports = {
                FingerprintFormatError: n,
                InvalidAlgorithmError: i,
                KeyParseError: s,
                SignatureParseError: o,
                KeyEncryptedError: c,
                CertificateParseError: f
            }
        },
        259: function(e, t, r) {
            e.exports = p;
            var a = r(75),
                n = r(77).Buffer,
                i = (r(146), r(24), r(237)),
                s = r(118),
                o = r(260),
                f = r(399),
                c = i.InvalidAlgorithmError,
                u = i.SignatureParseError;

            function p(e) {
                a.object(e, "options"), a.arrayOfObject(e.parts, "options.parts"), a.string(e.type, "options.type");
                for (var t = {}, r = 0; r < e.parts.length; ++r) {
                    var n = e.parts[r];
                    t[n.name] = n
                }
                this.type = e.type, this.hashAlgorithm = e.hashAlgo, this.curve = e.curve, this.parts = e.parts, this.part = t
            }

            function h(e, t, r, n) {
                if ("ssh" === r) {
                    try {
                        var i = new f({
                                buffer: e
                            }),
                            s = i.readString()
                    } catch (e) {}
                    if (void 0 !== i) {
                        var o = "SSH signature does not match expected type (expected " + t + ", got " + s + ")";
                        switch (s) {
                            case "ssh-rsa":
                                a.strictEqual(t, "rsa", o), n.hashAlgo = "sha1";
                                break;
                            case "rsa-sha2-256":
                                a.strictEqual(t, "rsa", o), n.hashAlgo = "sha256";
                                break;
                            case "rsa-sha2-512":
                                a.strictEqual(t, "rsa", o), n.hashAlgo = "sha512";
                                break;
                            case "ssh-ed25519":
                                a.strictEqual(t, "ed25519", o), n.hashAlgo = "sha512";
                                break;
                            default:
                                throw new Error("Unknown SSH signature type: " + s)
                        }
                        var c = i.readPart();
                        return a.ok(i.atEnd(), "extra trailing bytes"), c.name = "sig", n.parts.push(c), new p(n)
                    }
                }
                return n.parts.push({
                    name: "sig",
                    data: e
                }), new p(n)
            }
            p.prototype.toBuffer = function(e) {
                var t;
                void 0 === e && (e = "asn1"), a.string(e, "format");
                var r = "ssh-" + this.type;
                switch (this.type) {
                    case "rsa":
                        switch (this.hashAlgorithm) {
                            case "sha256":
                                r = "rsa-sha2-256";
                                break;
                            case "sha512":
                                r = "rsa-sha2-512";
                                break;
                            case "sha1":
                            case void 0:
                                break;
                            default:
                                throw new Error("SSH signature format does not support hash algorithm " + this.hashAlgorithm)
                        }
                        return "ssh" === e ? ((t = new f({})).writeString(r), t.writePart(this.part.sig), t.toBuffer()) : this.part.sig.data;
                    case "ed25519":
                        return "ssh" === e ? ((t = new f({})).writeString(r), t.writePart(this.part.sig), t.toBuffer()) : this.part.sig.data;
                    case "dsa":
                    case "ecdsa":
                        var i, c;
                        if ("asn1" === e) {
                            var u = new o.BerWriter;
                            return u.startSequence(), i = s.mpNormalize(this.part.r.data), c = s.mpNormalize(this.part.s.data), u.writeBuffer(i, o.Ber.Integer), u.writeBuffer(c, o.Ber.Integer), u.endSequence(), u.buffer
                        }
                        if ("ssh" === e && "dsa" === this.type) {
                            if ((t = new f({})).writeString("ssh-dss"), (i = this.part.r.data).length > 20 && 0 === i[0] && (i = i.slice(1)), (c = this.part.s.data).length > 20 && 0 === c[0] && (c = c.slice(1)), this.hashAlgorithm && "sha1" !== this.hashAlgorithm || i.length + c.length !== 40) throw new Error("OpenSSH only supports DSA signatures with SHA1 hash");
                            return t.writeBuffer(n.concat([i, c])), t.toBuffer()
                        }
                        if ("ssh" === e && "ecdsa" === this.type) {
                            var p, h = new f({});
                            i = this.part.r.data, h.writeBuffer(i), h.writePart(this.part.s), t = new f({}), 0 === i[0] && (i = i.slice(1));
                            var d = 8 * i.length;
                            return 256 === d ? p = "nistp256" : 384 === d ? p = "nistp384" : 528 === d && (p = "nistp521"), t.writeString("ecdsa-sha2-" + p), t.writeBuffer(h.toBuffer()), t.toBuffer()
                        }
                        throw new Error("Invalid signature format");
                    default:
                        throw new Error("Invalid signature data")
                }
            }, p.prototype.toString = function(e) {
                return a.optionalString(e, "format"), this.toBuffer(e).toString("base64")
            }, p.parse = function(e, t, r) {
                "string" == typeof e && (e = n.from(e, "base64")), a.buffer(e, "data"), a.string(r, "format"), a.string(t, "type");
                var i = {};
                i.type = t.toLowerCase(), i.parts = [];
                try {
                    switch (a.ok(e.length > 0, "signature must not be empty"), i.type) {
                        case "rsa":
                        case "ed25519":
                            return h(e, t, r, i);
                        case "dsa":
                        case "ecdsa":
                            return "asn1" === r ? function(e, t, r, a) {
                                var n = new o.BerReader(e);
                                n.readSequence();
                                var i = n.readString(o.Ber.Integer, !0),
                                    f = n.readString(o.Ber.Integer, !0);
                                return a.parts.push({
                                    name: "r",
                                    data: s.mpNormalize(i)
                                }), a.parts.push({
                                    name: "s",
                                    data: s.mpNormalize(f)
                                }), new p(a)
                            }(e, 0, 0, i) : "dsa" === i.type ? function(e, t, r, n) {
                                if (40 != e.length) {
                                    var i = new f({
                                            buffer: e
                                        }),
                                        s = i.readBuffer();
                                    "ssh-dss" === s.toString("ascii") && (s = i.readBuffer()), a.ok(i.atEnd(), "extra trailing bytes"), a.strictEqual(s.length, 40, "invalid inner length"), e = s
                                }
                                return n.parts.push({
                                    name: "r",
                                    data: e.slice(0, 20)
                                }), n.parts.push({
                                    name: "s",
                                    data: e.slice(20, 40)
                                }), new p(n)
                            }(e, 0, 0, i) : function(e, t, r, n) {
                                var i, s, o = new f({
                                        buffer: e
                                    }),
                                    c = o.readBuffer(),
                                    u = c.toString("ascii");
                                if ("ecdsa-" === u.slice(0, 6)) {
                                    var h = u.split("-");
                                    switch (a.strictEqual(h[0], "ecdsa"), a.strictEqual(h[1], "sha2"), n.curve = h[2], n.curve) {
                                        case "nistp256":
                                            n.hashAlgo = "sha256";
                                            break;
                                        case "nistp384":
                                            n.hashAlgo = "sha384";
                                            break;
                                        case "nistp521":
                                            n.hashAlgo = "sha512";
                                            break;
                                        default:
                                            throw new Error("Unsupported ECDSA curve: " + n.curve)
                                    }
                                    c = o.readBuffer(), a.ok(o.atEnd(), "extra trailing bytes on outer"), o = new f({
                                        buffer: c
                                    }), i = o.readPart()
                                } else i = {
                                    data: c
                                };
                                return s = o.readPart(), a.ok(o.atEnd(), "extra trailing bytes"), i.name = "r", s.name = "s", n.parts.push(i), n.parts.push(s), new p(n)
                            }(e, 0, 0, i);
                        default:
                            throw new c(t)
                    }
                } catch (e) {
                    if (e instanceof c) throw e;
                    throw new u(t, r, e)
                }
            }, p.isSignature = function(e, t) {
                return s.isCompatible(e, p, t)
            }, p.prototype._sshpkApiVersion = [2, 1], p._oldVersionDetect = function(e) {
                return a.func(e.toBuffer), e.hasOwnProperty("hashAlgorithm") ? [2, 0] : [1, 0]
            }
        },
        286: function(e, t, r) {
            e.exports = {
                read: function(e, t, r) {
                    var f = e;
                    "string" != typeof e && (a.buffer(e, "buf"), e = e.toString("ascii"));
                    var c, m, y = e.trim().split(/[\r\n]+/g),
                        w = -1;
                    for (; !c && w < y.length;) c = y[++w].match(/[-]+[ ]*BEGIN ([A-Z0-9][A-Za-z0-9]+ )?(PUBLIC|PRIVATE) KEY[ ]*[-]+/);
                    a.ok(c, "invalid PEM header");
                    var b = y.length;
                    for (; !m && b > 0;) m = y[--b].match(/[-]+[ ]*END ([A-Z0-9][A-Za-z0-9]+ )?(PUBLIC|PRIVATE) KEY[ ]*[-]+/);
                    a.ok(m, "invalid PEM footer"), a.equal(c[2], m[2]);
                    var S, k = c[2].toLowerCase();
                    c[1] && (a.equal(c[1], m[1], "PEM header and footer mismatch"), S = c[1].trim());
                    y = y.slice(w, b + 1);
                    var B, E, F, q = {};
                    for (; y = y.slice(1), c = y[0].match(/^([A-Za-z0-9-]+): (.+)$/);) q[c[1].toLowerCase()] = c[2];
                    if (y = y.slice(0, -1).join(""), e = s.from(y, "base64"), q["proc-type"]) {
                        var I = q["proc-type"].split(",");
                        if ("4" === I[0] && "ENCRYPTED" === I[1]) {
                            if ("string" == typeof t.passphrase && (t.passphrase = s.from(t.passphrase, "utf-8")), !s.isBuffer(t.passphrase)) throw new l.KeyEncryptedError(t.filename, "PEM");
                            I = q["dek-info"].split(","), a.ok(2 === I.length), B = I[0].toLowerCase(), F = s.from(I[1], "hex"), E = o.opensslKeyDeriv(B, F, t.passphrase, 1).key
                        }
                    }
                    if (S && "encrypted" === S.toLowerCase()) {
                        var A, _ = new n.BerReader(e);
                        _.readSequence(), _.readSequence(), A = _.offset + _.length;
                        var P = _.readOID();
                        if ("1.2.840.113549.1.5.13" !== P) throw new Error("Unsupported PEM/PKCS8 encryption scheme: " + P);
                        _.readSequence(), _.readSequence();
                        var x = _.offset + _.length,
                            C = _.readOID();
                        if ("1.2.840.113549.1.5.12" !== C) throw new Error("Unsupported PBES2 KDF: " + C);
                        _.readSequence();
                        var O = _.readString(n.Ber.OctetString, !0),
                            D = _.readInt(),
                            K = "sha1";
                        if (_.offset < x) {
                            _.readSequence();
                            var z = _.readOID();
                            if (void 0 === (K = v[z])) throw new Error("Unsupported PBKDF2 hash: " + z)
                        }
                        _._offset = x, _.readSequence();
                        var U = _.readOID();
                        if (void 0 === (B = g[U])) throw new Error("Unsupported PBES2 cipher: " + U);
                        if (F = _.readString(n.Ber.OctetString, !0), _._offset = A, e = _.readString(n.Ber.OctetString, !0), "string" == typeof t.passphrase && (t.passphrase = s.from(t.passphrase, "utf-8")), !s.isBuffer(t.passphrase)) throw new l.KeyEncryptedError(t.filename, "PEM");
                        var j = o.opensshCipherInfo(B);
                        B = j.opensslName, E = o.pbkdf2(K, O, D, j.keySize, t.passphrase), S = void 0
                    }
                    if (B && E && F) {
                        var T, N = i.createDecipheriv(B, E, F),
                            H = [];
                        for (N.once("error", (function(e) {
                                if (-1 !== e.toString().indexOf("bad decrypt")) throw new Error("Incorrect passphrase supplied, could not decrypt key");
                                throw e
                            })), N.write(e), N.end(); null !== (T = N.read());) H.push(T);
                        e = s.concat(H)
                    }
                    if (S && "openssh" === S.toLowerCase()) return h.readSSHPrivate(k, e, t);
                    if (S && "ssh2" === S.toLowerCase()) return d.readType(k, e, t);
                    var L = new n.BerReader(e);
                    return L.originalInput = f, L.readSequence(), S ? (r && a.strictEqual(r, "pkcs1"), u.readPkcs1(S, k, L)) : (r && a.strictEqual(r, "pkcs8"), p.readPkcs8(S, k, L))
                },
                write: function(e, t, r) {
                    a.object(e);
                    var i, o = {
                            ecdsa: "EC",
                            rsa: "RSA",
                            dsa: "DSA",
                            ed25519: "EdDSA"
                        } [e.type],
                        h = new n.BerWriter;
                    if (c.isPrivateKey(e)) r && "pkcs8" === r ? (i = "PRIVATE KEY", p.writePkcs8(h, e)) : (r && a.strictEqual(r, "pkcs1"), i = o + " PRIVATE KEY", u.writePkcs1(h, e));
                    else {
                        if (!f.isKey(e)) throw new Error("key is not a Key or PrivateKey");
                        r && "pkcs1" === r ? (i = o + " PUBLIC KEY", u.writePkcs1(h, e)) : (r && a.strictEqual(r, "pkcs8"), i = "PUBLIC KEY", p.writePkcs8(h, e))
                    }
                    var d = h.buffer.toString("base64"),
                        l = d.length + d.length / 64 + 18 + 16 + 2 * i.length + 10,
                        g = s.alloc(l),
                        m = 0;
                    m += g.write("-----BEGIN " + i + "-----\n", m);
                    for (var v = 0; v < d.length;) {
                        var y = v + 64;
                        y > d.length && (y = d.length), m += g.write(d.slice(v, y), m), g[m++] = 10, v = y
                    }
                    return m += g.write("-----END " + i + "-----\n", m), g.slice(0, m)
                }
            };
            var a = r(75),
                n = r(260),
                i = r(24),
                s = r(77).Buffer,
                o = (r(146), r(118)),
                f = r(116),
                c = r(117),
                u = r(1019),
                p = r(492),
                h = r(603),
                d = r(287),
                l = r(237),
                g = {
                    "1.2.840.113549.3.7": "3des-cbc",
                    "2.16.840.1.101.3.4.1.2": "aes128-cbc",
                    "2.16.840.1.101.3.4.1.42": "aes256-cbc"
                },
                m = {};
            Object.keys(g).forEach((function(e) {
                m[g[e]] = e
            }));
            var v = {
                    "1.2.840.113549.2.7": "sha1",
                    "1.2.840.113549.2.9": "sha256",
                    "1.2.840.113549.2.11": "sha512"
                },
                y = {};
            Object.keys(v).forEach((function(e) {
                y[v[e]] = e
            }))
        },
        287: function(e, t, r) {
            e.exports = {
                read: h.bind(void 0, !1, void 0),
                readType: h.bind(void 0, !1),
                write: function(e, t) {
                    a.object(e);
                    var r, o = p(e),
                        u = i.info[e.type];
                    f.isPrivateKey(e) && (u = i.privInfo[e.type]);
                    var h = u.parts,
                        d = new c({});
                    for (d.writeString(o), r = 0; r < h.length; ++r) {
                        var l = e.part[h[r]].data;
                        !1 !== u.normalize && (l = "ed25519" === e.type ? s.zeroPadToLength(l, 32) : s.mpNormalize(l)), "ed25519" === e.type && "k" === h[r] && (l = n.concat([l, e.part.A.data])), d.writeBuffer(l)
                    }
                    return d.toBuffer()
                },
                readPartial: h.bind(void 0, !0),
                readInternal: h,
                keyTypeToAlg: p,
                algToKeyType: u
            };
            var a = r(75),
                n = r(77).Buffer,
                i = r(146),
                s = r(118),
                o = r(116),
                f = r(117),
                c = r(399);

            function u(e) {
                if (a.string(e), "ssh-dss" === e) return "dsa";
                if ("ssh-rsa" === e) return "rsa";
                if ("ssh-ed25519" === e) return "ed25519";
                if ("ssh-curve25519" === e) return "curve25519";
                if (e.match(/^ecdsa-sha2-/)) return "ecdsa";
                throw new Error("Unknown algorithm " + e)
            }

            function p(e) {
                if (a.object(e), "dsa" === e.type) return "ssh-dss";
                if ("rsa" === e.type) return "ssh-rsa";
                if ("ed25519" === e.type) return "ssh-ed25519";
                if ("curve25519" === e.type) return "ssh-curve25519";
                if ("ecdsa" === e.type) return "ecdsa-sha2-" + e.part.curve.data.toString();
                throw new Error("Unknown key type " + e.type)
            }

            function h(e, t, r, p) {
                "string" == typeof r && (r = n.from(r)), a.buffer(r, "buf");
                var h = {},
                    d = h.parts = [],
                    l = new c({
                        buffer: r
                    }),
                    g = l.readString();
                a.ok(!l.atEnd(), "key must have at least one part"), h.type = u(g);
                var m = i.info[h.type].parts.length;
                for (t && "private" === t && (m = i.privInfo[h.type].parts.length); !l.atEnd() && d.length < m;) d.push(l.readPart());
                for (; !e && !l.atEnd();) d.push(l.readPart());
                a.ok(d.length >= 1, "key must have at least one part"), a.ok(e || l.atEnd(), "leftover bytes at end of key");
                var v = o,
                    y = i.info[h.type];
                if ("private" !== t && y.parts.length === d.length || (y = i.privInfo[h.type], v = f), a.strictEqual(y.parts.length, d.length), "ecdsa" === h.type) {
                    var w = /^ecdsa-sha2-(.+)$/.exec(g);
                    a.ok(null !== w), a.strictEqual(w[1], d[0].data.toString())
                }
                for (var b = !0, S = 0; S < y.parts.length; ++S) {
                    var k, B = d[S];
                    if (B.name = y.parts[S], "ed25519" === h.type && "k" === B.name && (B.data = B.data.slice(0, 32)), "curve" !== B.name && !1 !== y.normalize)(k = "ed25519" === h.type ? s.zeroPadToLength(B.data, 32) : s.mpNormalize(B.data)).toString("binary") !== B.data.toString("binary") && (B.data = k, b = !1)
                }
                return b && (h._rfc4253Cache = l.toBuffer()), e && "object" == typeof e && (e.remainder = l.remainder(), e.consumed = l._offset), new v(h)
            }
        },
        3025: function(e, t, r) {
            e.exports = {
                read: function(e, t) {
                    s.isBuffer(e) && (e = e.toString("ascii"));
                    var r = e.trim().split(/[ \t\n]+/g);
                    if (r.length < 2 || r.length > 3) throw new Error("Not a valid SSH certificate line");
                    var a = r[0],
                        n = r[1];
                    return m(n = s.from(n, "base64"), a)
                },
                verify: function(e, t) {
                    return !1
                },
                sign: function(e, t) {
                    void 0 === e.signatures.openssh && (e.signatures.openssh = {});
                    try {
                        var r = w(e, !0)
                    } catch (t) {
                        return delete e.signatures.openssh, !1
                    }
                    var a = e.signatures.openssh,
                        n = void 0;
                    "rsa" !== t.type && "dsa" !== t.type || (n = "sha1");
                    var i = t.createSign(n);
                    return i.write(r), a.signature = i.sign(), !0
                },
                signAsync: function(e, t, r) {
                    void 0 === e.signatures.openssh && (e.signatures.openssh = {});
                    try {
                        var a = w(e, !0)
                    } catch (t) {
                        return delete e.signatures.openssh, void r(t)
                    }
                    var n = e.signatures.openssh;
                    t(a, (function(e, t) {
                        if (e) r(e);
                        else {
                            try {
                                t.toBuffer("ssh")
                            } catch (e) {
                                return void r(e)
                            }
                            n.signature = t, r()
                        }
                    }))
                },
                write: function(e, t) {
                    void 0 === t && (t = {});
                    var r = w(e),
                        a = b(e.subjectKey) + " " + r.toString("base64");
                    t.comment && (a = a + " " + t.comment);
                    return a
                },
                fromBuffer: m,
                toBuffer: w
            };
            var a = r(75),
                n = r(399),
                i = r(24),
                s = r(77).Buffer,
                o = r(146),
                f = r(116),
                c = (r(117), r(494)),
                u = r(287),
                p = r(259),
                h = r(118),
                d = r(493);
            var l = {
                user: 1,
                host: 2
            };
            Object.keys(l).forEach((function(e) {
                l[l[e]] = e
            }));
            var g = /^ecdsa-sha2-([^@-]+)-cert-v01@openssh.com$/;

            function m(e, t, r) {
                var i = new n({
                        buffer: e
                    }),
                    s = i.readString();
                if (void 0 !== t && s !== t) throw new Error("SSH certificate algorithm mismatch");
                void 0 === t && (t = s);
                var m = {
                    signatures: {}
                };
                m.signatures.openssh = {}, m.signatures.openssh.nonce = i.readBuffer();
                var y = {},
                    w = y.parts = [];
                y.type = function(e) {
                    if ("ssh-rsa-cert-v01@openssh.com" === e) return "rsa";
                    if ("ssh-dss-cert-v01@openssh.com" === e) return "dsa";
                    if (e.match(g)) return "ecdsa";
                    if ("ssh-ed25519-cert-v01@openssh.com" === e) return "ed25519";
                    throw new Error("Unsupported cert type " + e)
                }(t);
                for (var b = o.info[y.type].parts.length; w.length < b;) w.push(i.readPart());
                a.ok(w.length >= 1, "key must have at least one part");
                var S = o.info[y.type];
                if ("ecdsa" === y.type) {
                    var k = g.exec(t);
                    a.ok(null !== k), a.strictEqual(k[1], w[0].data.toString())
                }
                for (var B = 0; B < S.parts.length; ++B)
                    if (w[B].name = S.parts[B], "curve" !== w[B].name && !1 !== S.normalize) {
                        var E = w[B];
                        E.data = h.mpNormalize(E.data)
                    } m.subjectKey = new f(y), m.serial = i.readInt64();
                var F = l[i.readInt()];
                a.string(F, "valid cert type"), m.signatures.openssh.keyId = i.readString();
                for (var q = [], I = i.readBuffer(), A = new n({
                        buffer: I
                    }); !A.atEnd();) q.push(A.readString());
                0 === q.length && (q = ["*"]), m.subjects = q.map((function(e) {
                    if ("user" === F) return c.forUser(e);
                    if ("host" === F) return c.forHost(e);
                    throw new Error("Unknown identity type " + F)
                })), m.validFrom = v(i.readInt64()), m.validUntil = v(i.readInt64());
                for (var _, P = [], x = new n({
                        buffer: i.readBuffer()
                    }); !x.atEnd();)(_ = {
                    critical: !0
                }).name = x.readString(), _.data = x.readBuffer(), P.push(_);
                for (x = new n({
                        buffer: i.readBuffer()
                    }); !x.atEnd();)(_ = {
                    critical: !1
                }).name = x.readString(), _.data = x.readBuffer(), P.push(_);
                m.signatures.openssh.exts = P, i.readBuffer();
                var C = i.readBuffer();
                m.issuerKey = u.read(C), m.issuer = c.forHost("**");
                var O = i.readBuffer();
                return m.signatures.openssh.signature = p.parse(O, m.issuerKey.type, "ssh"), void 0 !== r && (r.remainder = i.remainder(), r.consumed = i._offset), new d(m)
            }

            function v(e) {
                var t = 4294967296 * e.readUInt32BE(0);
                t += e.readUInt32BE(4);
                var r = new Date;
                return r.setTime(1e3 * t), r.sourceInt64 = e, r
            }

            function y(e) {
                if (void 0 !== e.sourceInt64) return e.sourceInt64;
                var t = Math.round(e.getTime() / 1e3),
                    r = Math.floor(t / 4294967296),
                    a = Math.floor(t % 4294967296),
                    n = s.alloc(8);
                return n.writeUInt32BE(r, 0), n.writeUInt32BE(a, 4), n
            }

            function w(e, t) {
                a.object(e.signatures.openssh, "signature for openssh format");
                var r = e.signatures.openssh;
                void 0 === r.nonce && (r.nonce = i.randomBytes(16));
                var f = new n({});
                f.writeString(b(e.subjectKey)), f.writeBuffer(r.nonce);
                var c = e.subjectKey;
                o.info[c.type].parts.forEach((function(e) {
                    f.writePart(c.part[e])
                })), f.writeInt64(e.serial);
                var p = e.subjects[0].type;
                a.notStrictEqual(p, "unknown"), e.subjects.forEach((function(e) {
                    a.strictEqual(e.type, p)
                })), p = l[p], f.writeInt(p), void 0 === r.keyId && (r.keyId = e.subjects[0].type + "_" + (e.subjects[0].uid || e.subjects[0].hostname)), f.writeString(r.keyId);
                var h = new n({});
                e.subjects.forEach((function(e) {
                    p === l.host ? h.writeString(e.hostname) : p === l.user && h.writeString(e.uid)
                })), f.writeBuffer(h.toBuffer()), f.writeInt64(y(e.validFrom)), f.writeInt64(y(e.validUntil));
                var d = r.exts;
                void 0 === d && (d = []);
                var g = new n({});
                return d.forEach((function(e) {
                    !0 === e.critical && (g.writeString(e.name), g.writeBuffer(e.data))
                })), f.writeBuffer(g.toBuffer()), g = new n({}), d.forEach((function(e) {
                    !0 !== e.critical && (g.writeString(e.name), g.writeBuffer(e.data))
                })), f.writeBuffer(g.toBuffer()), f.writeBuffer(s.alloc(0)), h = u.write(e.issuerKey), f.writeBuffer(h), t || f.writeBuffer(r.signature.toBuffer("ssh")), f.toBuffer()
            }

            function b(e) {
                if ("rsa" === e.type) return "ssh-rsa-cert-v01@openssh.com";
                if ("dsa" === e.type) return "ssh-dss-cert-v01@openssh.com";
                if ("ecdsa" === e.type) return "ecdsa-sha2-" + e.curve + "-cert-v01@openssh.com";
                if ("ed25519" === e.type) return "ssh-ed25519-cert-v01@openssh.com";
                throw new Error("Unsupported key type " + e.type)
            }
        },
        3026: function(e, t, r) {
            var a = r(1697);
            e.exports = {
                read: function(e, t) {
                    "string" != typeof e && (n.buffer(e, "buf"), e = e.toString("ascii"));
                    var r, s, o = e.trim().split(/[\r\n]+/g),
                        f = -1;
                    for (; !r && f < o.length;) r = o[++f].match(/[-]+[ ]*BEGIN CERTIFICATE[ ]*[-]+/);
                    n.ok(r, "invalid PEM header");
                    var c = o.length;
                    for (; !s && c > 0;) s = o[--c].match(/[-]+[ ]*END CERTIFICATE[ ]*[-]+/);
                    n.ok(s, "invalid PEM footer"), o = o.slice(f, c + 1);
                    var u = {};
                    for (; o = o.slice(1), r = o[0].match(/^([A-Za-z0-9-]+): (.+)$/);) u[r[1].toLowerCase()] = r[2];
                    return o = o.slice(0, -1).join(""), e = i.from(o, "base64"), a.read(e, t)
                },
                verify: a.verify,
                sign: a.sign,
                write: function(e, t) {
                    var r = a.write(e, t),
                        n = r.toString("base64"),
                        s = n.length + n.length / 64 + 18 + 16 + 2 * "CERTIFICATE".length + 10,
                        o = i.alloc(s),
                        f = 0;
                    f += o.write("-----BEGIN CERTIFICATE-----\n", f);
                    for (var c = 0; c < n.length;) {
                        var u = c + 64;
                        u > n.length && (u = n.length), f += o.write(n.slice(c, u), f), o[f++] = 10, c = u
                    }
                    return f += o.write("-----END CERTIFICATE-----\n", f), o.slice(0, f)
                }
            };
            var n = r(75),
                i = (r(260), r(77).Buffer);
            r(146), r(118), r(116), r(117), r(286), r(494), r(259), r(493)
        },
        398: function(e, t, r) {
            var a = r(116),
                n = r(490),
                i = r(259),
                s = r(117),
                o = r(493),
                f = r(494),
                c = r(237);
            e.exports = {
                Key: a,
                parseKey: a.parse,
                Fingerprint: n,
                parseFingerprint: n.parse,
                Signature: i,
                parseSignature: i.parse,
                PrivateKey: s,
                parsePrivateKey: s.parse,
                generatePrivateKey: s.generate,
                Certificate: o,
                parseCertificate: o.parse,
                createSelfSignedCertificate: o.createSelfSigned,
                createCertificate: o.create,
                Identity: f,
                identityFromDN: f.parseDN,
                identityForHost: f.forHost,
                identityForUser: f.forUser,
                identityForEmail: f.forEmail,
                identityFromArray: f.fromArray,
                FingerprintFormatError: c.FingerprintFormatError,
                InvalidAlgorithmError: c.InvalidAlgorithmError,
                KeyParseError: c.KeyParseError,
                SignatureParseError: c.SignatureParseError,
                KeyEncryptedError: c.KeyEncryptedError,
                CertificateParseError: c.CertificateParseError
            }
        },
        399: function(e, t, r) {
            e.exports = i;
            var a = r(75),
                n = r(77).Buffer;

            function i(e) {
                a.object(e, "options"), void 0 !== e.buffer && a.buffer(e.buffer, "options.buffer"), this._size = e.buffer ? e.buffer.length : 1024, this._buffer = e.buffer || n.alloc(this._size), this._offset = 0
            }
            i.prototype.toBuffer = function() {
                return this._buffer.slice(0, this._offset)
            }, i.prototype.atEnd = function() {
                return this._offset >= this._buffer.length
            }, i.prototype.remainder = function() {
                return this._buffer.slice(this._offset)
            }, i.prototype.skip = function(e) {
                this._offset += e
            }, i.prototype.expand = function() {
                this._size *= 2;
                var e = n.alloc(this._size);
                this._buffer.copy(e, 0), this._buffer = e
            }, i.prototype.readPart = function() {
                return {
                    data: this.readBuffer()
                }
            }, i.prototype.readBuffer = function() {
                var e = this._buffer.readUInt32BE(this._offset);
                this._offset += 4, a.ok(this._offset + e <= this._buffer.length, "length out of bounds at +0x" + this._offset.toString(16) + " (data truncated?)");
                var t = this._buffer.slice(this._offset, this._offset + e);
                return this._offset += e, t
            }, i.prototype.readString = function() {
                return this.readBuffer().toString()
            }, i.prototype.readCString = function() {
                for (var e = this._offset; e < this._buffer.length && 0 !== this._buffer[e];) e++;
                a.ok(e < this._buffer.length, "c string does not terminate");
                var t = this._buffer.slice(this._offset, e).toString();
                return this._offset = e + 1, t
            }, i.prototype.readInt = function() {
                var e = this._buffer.readUInt32BE(this._offset);
                return this._offset += 4, e
            }, i.prototype.readInt64 = function() {
                a.ok(this._offset + 8 < this._buffer.length, "buffer not long enough to read Int64");
                var e = this._buffer.slice(this._offset, this._offset + 8);
                return this._offset += 8, e
            }, i.prototype.readChar = function() {
                return this._buffer[this._offset++]
            }, i.prototype.writeBuffer = function(e) {
                for (; this._offset + 4 + e.length > this._size;) this.expand();
                this._buffer.writeUInt32BE(e.length, this._offset), this._offset += 4, e.copy(this._buffer, this._offset), this._offset += e.length
            }, i.prototype.writeString = function(e) {
                this.writeBuffer(n.from(e, "utf8"))
            }, i.prototype.writeCString = function(e) {
                for (; this._offset + 1 + e.length > this._size;) this.expand();
                this._buffer.write(e, this._offset), this._offset += e.length, this._buffer[this._offset++] = 0
            }, i.prototype.writeInt = function(e) {
                for (; this._offset + 4 > this._size;) this.expand();
                this._buffer.writeUInt32BE(e, this._offset), this._offset += 4
            }, i.prototype.writeInt64 = function(e) {
                if (a.buffer(e, "value"), e.length > 8) {
                    for (var t = e.slice(0, e.length - 8), r = 0; r < t.length; ++r) a.strictEqual(t[r], 0, "must fit in 64 bits of precision");
                    e = e.slice(e.length - 8, e.length)
                }
                for (; this._offset + 8 > this._size;) this.expand();
                e.copy(this._buffer, this._offset), this._offset += 8
            }, i.prototype.writeChar = function(e) {
                for (; this._offset + 1 > this._size;) this.expand();
                this._buffer[this._offset++] = e
            }, i.prototype.writePart = function(e) {
                this.writeBuffer(e.data)
            }, i.prototype.write = function(e) {
                for (; this._offset + e.length > this._size;) this.expand();
                e.copy(this._buffer, this._offset), this._offset += e.length
            }
        },
        490: function(e, t, r) {
            e.exports = l;
            var a = r(75),
                n = r(77).Buffer,
                i = r(146),
                s = r(24),
                o = r(237),
                f = r(116),
                c = r(117),
                u = r(493),
                p = r(118),
                h = o.FingerprintFormatError,
                d = o.InvalidAlgorithmError;

            function l(e) {
                if (a.object(e, "options"), a.string(e.type, "options.type"), a.buffer(e.hash, "options.hash"), a.string(e.algorithm, "options.algorithm"), this.algorithm = e.algorithm.toLowerCase(), !0 !== i.hashAlgs[this.algorithm]) throw new d(this.algorithm);
                this.hash = e.hash, this.type = e.type, this.hashType = e.hashType
            }
            l.prototype.toString = function(e) {
                switch (void 0 === e && (e = "md5" === this.algorithm || "spki" === this.hashType ? "hex" : "base64"), a.string(e), e) {
                    case "hex":
                        return "spki" === this.hashType ? this.hash.toString("hex") : this.hash.toString("hex").replace(/(.{2})(?=.)/g, "$1:");
                    case "base64":
                        return "spki" === this.hashType ? this.hash.toString("base64") : (t = this.algorithm, r = this.hash.toString("base64"), t.toUpperCase() + ":" + function(e) {
                            return e.replace(/=*$/, "")
                        }(r));
                    default:
                        throw new h(void 0, e)
                }
                var t, r
            }, l.prototype.matches = function(e) {
                a.object(e, "key or certificate"), "key" === this.type && "ssh" !== this.hashType ? (p.assertCompatible(e, f, [1, 7], "key with spki"), c.isPrivateKey(e) && p.assertCompatible(e, c, [1, 6], "privatekey with spki support")) : "key" === this.type ? p.assertCompatible(e, f, [1, 0], "key") : p.assertCompatible(e, u, [1, 0], "certificate");
                var t = e.hash(this.algorithm, this.hashType),
                    r = s.createHash(this.algorithm).update(t).digest("base64");
                return void 0 === this.hash2 && (this.hash2 = s.createHash(this.algorithm).update(this.hash).digest("base64")), this.hash2 === r
            };
            var g = /^[A-Za-z0-9+\/=]+$/,
                m = /^[a-fA-F0-9]+$/;
            l.parse = function(e, t) {
                var r, s, o;
                a.string(e, "fingerprint"), Array.isArray(t) && (o = t, t = {}), a.optionalObject(t, "options"), void 0 === t && (t = {}), void 0 !== t.enAlgs && (o = t.enAlgs), void 0 !== t.algorithms && (o = t.algorithms), a.optionalArrayOfString(o, "algorithms");
                var f = "ssh";
                void 0 !== t.hashType && (f = t.hashType), a.string(f, "options.hashType");
                var c = e.split(":");
                if (2 == c.length) {
                    if (r = c[0].toLowerCase(), !g.test(c[1])) throw new h(e);
                    try {
                        s = n.from(c[1], "base64")
                    } catch (t) {
                        throw new h(e)
                    }
                } else if (c.length > 2) {
                    if (r = "md5", "md5" === c[0].toLowerCase() && (c = c.slice(1)), c = (c = c.map((function(t) {
                            for (; t.length < 2;) t = "0" + t;
                            if (t.length > 2) throw new h(e);
                            return t
                        }))).join(""), !m.test(c) || c.length % 2 != 0) throw new h(e);
                    try {
                        s = n.from(c, "hex")
                    } catch (t) {
                        throw new h(e)
                    }
                } else {
                    if (m.test(e)) s = n.from(e, "hex");
                    else {
                        if (!g.test(e)) throw new h(e);
                        s = n.from(e, "base64")
                    }
                    switch (s.length) {
                        case 32:
                            r = "sha256";
                            break;
                        case 16:
                            r = "md5";
                            break;
                        case 20:
                            r = "sha1";
                            break;
                        case 64:
                            r = "sha512";
                            break;
                        default:
                            throw new h(e)
                    }
                    void 0 === t.hashType && (f = "spki")
                }
                if (void 0 === r) throw new h(e);
                if (void 0 === i.hashAlgs[r]) throw new d(r);
                if (void 0 !== o && -1 === (o = o.map((function(e) {
                        return e.toLowerCase()
                    }))).indexOf(r)) throw new d(r);
                return new l({
                    algorithm: r,
                    hash: s,
                    type: t.type || "key",
                    hashType: f
                })
            }, l.isFingerprint = function(e, t) {
                return p.isCompatible(e, l, t)
            }, l.prototype._sshpkApiVersion = [1, 2], l._oldVersionDetect = function(e) {
                return a.func(e.toString), a.func(e.matches), [1, 0]
            }
        },
        492: function(e, t, r) {
            e.exports = {
                read: function(e, t) {
                    return u.read(e, t, "pkcs8")
                },
                readPkcs8: function(e, t, r) {
                    r.peek() === n.Ber.Integer && (a.strictEqual(t, "private", "unexpected Integer at start of public key"), r.readString(n.Ber.Integer, !0));
                    r.readSequence();
                    var s = r.offset + r.length,
                        u = r.readOID();
                    switch (u) {
                        case "1.2.840.113549.1.1.1":
                            return r._offset = s, "public" === t ? function(e) {
                                e.readSequence(n.Ber.BitString), e.readByte(), e.readSequence();
                                var t = p(e, "modulus"),
                                    r = p(e, "exponent"),
                                    a = {
                                        type: "rsa",
                                        source: e.originalInput,
                                        parts: [{
                                            name: "e",
                                            data: r
                                        }, {
                                            name: "n",
                                            data: t
                                        }]
                                    };
                                return new f(a)
                            }(r) : function(e) {
                                e.readSequence(n.Ber.OctetString), e.readSequence();
                                var t = p(e, "version");
                                a.equal(t[0], 0, "unknown RSA private key version");
                                var r = p(e, "modulus"),
                                    i = p(e, "public exponent"),
                                    s = p(e, "private exponent"),
                                    o = p(e, "prime1"),
                                    f = p(e, "prime2"),
                                    u = p(e, "exponent1"),
                                    h = p(e, "exponent2"),
                                    d = p(e, "iqmp");
                                return new c({
                                    type: "rsa",
                                    parts: [{
                                        name: "n",
                                        data: r
                                    }, {
                                        name: "e",
                                        data: i
                                    }, {
                                        name: "d",
                                        data: s
                                    }, {
                                        name: "iqmp",
                                        data: d
                                    }, {
                                        name: "p",
                                        data: o
                                    }, {
                                        name: "q",
                                        data: f
                                    }, {
                                        name: "dmodp",
                                        data: u
                                    }, {
                                        name: "dmodq",
                                        data: h
                                    }]
                                })
                            }(r);
                        case "1.2.840.10040.4.1":
                            return "public" === t ? function(e) {
                                e.readSequence();
                                var t = p(e, "p"),
                                    r = p(e, "q"),
                                    a = p(e, "g");
                                e.readSequence(n.Ber.BitString), e.readByte();
                                var i = p(e, "y");
                                return new f({
                                    type: "dsa",
                                    parts: [{
                                        name: "p",
                                        data: t
                                    }, {
                                        name: "q",
                                        data: r
                                    }, {
                                        name: "g",
                                        data: a
                                    }, {
                                        name: "y",
                                        data: i
                                    }]
                                })
                            }(r) : function(e) {
                                e.readSequence();
                                var t = p(e, "p"),
                                    r = p(e, "q"),
                                    a = p(e, "g");
                                e.readSequence(n.Ber.OctetString);
                                var i = p(e, "x"),
                                    s = o.calculateDSAPublic(a, t, i);
                                return new c({
                                    type: "dsa",
                                    parts: [{
                                        name: "p",
                                        data: t
                                    }, {
                                        name: "q",
                                        data: r
                                    }, {
                                        name: "g",
                                        data: a
                                    }, {
                                        name: "y",
                                        data: s
                                    }, {
                                        name: "x",
                                        data: i
                                    }]
                                })
                            }(r);
                        case "1.2.840.10045.2.1":
                            return "public" === t ? function(e) {
                                var t = h(e);
                                a.string(t, "a known elliptic curve");
                                var r = e.readString(n.Ber.BitString, !0);
                                r = o.ecNormalize(r);
                                var s = {
                                    type: "ecdsa",
                                    parts: [{
                                        name: "curve",
                                        data: i.from(t)
                                    }, {
                                        name: "Q",
                                        data: r
                                    }]
                                };
                                return new f(s)
                            }(r) : function(e) {
                                var t = h(e);
                                a.string(t, "a known elliptic curve"), e.readSequence(n.Ber.OctetString), e.readSequence();
                                var r = p(e, "version");
                                a.equal(r[0], 1, "unknown version of ECDSA key");
                                var s, f = e.readString(n.Ber.OctetString, !0);
                                160 == e.peek() && (e.readSequence(160), e._offset += e.length);
                                161 == e.peek() && (e.readSequence(161), s = e.readString(n.Ber.BitString, !0), s = o.ecNormalize(s));
                                if (void 0 === s) {
                                    var u = o.publicFromPrivateECDSA(t, f);
                                    s = u.part.Q.data
                                }
                                var d = {
                                    type: "ecdsa",
                                    parts: [{
                                        name: "curve",
                                        data: i.from(t)
                                    }, {
                                        name: "Q",
                                        data: s
                                    }, {
                                        name: "d",
                                        data: f
                                    }]
                                };
                                return new c(d)
                            }(r);
                        case "1.3.101.112":
                            return "public" === t ? function(e) {
                                0 === e.peek() && e.readByte();
                                var t = o.readBitString(e),
                                    r = {
                                        type: "ed25519",
                                        parts: [{
                                            name: "A",
                                            data: o.zeroPadToLength(t, 32)
                                        }]
                                    };
                                return new f(r)
                            }(r) : function(e) {
                                0 === e.peek() && e.readByte();
                                e.readSequence(n.Ber.OctetString);
                                var t, r = e.readString(n.Ber.OctetString, !0);
                                r = o.zeroPadToLength(r, 32), e.peek() === n.Ber.BitString ? (t = o.readBitString(e), t = o.zeroPadToLength(t, 32)) : t = o.calculateED25519Public(r);
                                var a = {
                                    type: "ed25519",
                                    parts: [{
                                        name: "A",
                                        data: o.zeroPadToLength(t, 32)
                                    }, {
                                        name: "k",
                                        data: o.zeroPadToLength(r, 32)
                                    }]
                                };
                                return new c(a)
                            }(r);
                        case "1.3.101.110":
                            return "public" === t ? function(e) {
                                var t = o.readBitString(e),
                                    r = {
                                        type: "curve25519",
                                        parts: [{
                                            name: "A",
                                            data: o.zeroPadToLength(t, 32)
                                        }]
                                    };
                                return new f(r)
                            }(r) : function(e) {
                                0 === e.peek() && e.readByte();
                                e.readSequence(n.Ber.OctetString);
                                var t = e.readString(n.Ber.OctetString, !0);
                                t = o.zeroPadToLength(t, 32);
                                var r = o.calculateX25519Public(t),
                                    a = {
                                        type: "curve25519",
                                        parts: [{
                                            name: "A",
                                            data: o.zeroPadToLength(r, 32)
                                        }, {
                                            name: "k",
                                            data: o.zeroPadToLength(t, 32)
                                        }]
                                    };
                                return new c(a)
                            }(r);
                        default:
                            throw new Error("Unknown key type OID " + u)
                    }
                },
                write: function(e, t) {
                    return u.write(e, t, "pkcs8")
                },
                writePkcs8: d,
                pkcs8ToBuffer: function(e) {
                    var t = new n.BerWriter;
                    return d(t, e), t.buffer
                },
                readECDSACurve: h,
                writeECDSACurve: l
            };
            var a = r(75),
                n = r(260),
                i = r(77).Buffer,
                s = r(146),
                o = r(118),
                f = r(116),
                c = r(117),
                u = r(286);

            function p(e, t) {
                return a.strictEqual(e.peek(), n.Ber.Integer, t + " is not an Integer"), o.mpNormalize(e.readString(n.Ber.Integer, !0))
            }

            function h(e) {
                var t, r, f, c, u;
                if (e.peek() === n.Ber.OID) {
                    var p = e.readOID();
                    for (r = Object.keys(s.curves), f = 0; f < r.length; ++f)
                        if (c = r[f], (u = s.curves[c]).pkcs8oid === p) {
                            t = c;
                            break
                        }
                } else {
                    e.readSequence();
                    var h = e.readString(n.Ber.Integer, !0);
                    a.strictEqual(h[0], 1, "ECDSA key not version 1");
                    var d = {};
                    e.readSequence();
                    var l = e.readOID();
                    a.strictEqual(l, "1.2.840.10045.1.1", "ECDSA key is not from a prime-field");
                    var g = d.p = o.mpNormalize(e.readString(n.Ber.Integer, !0));
                    d.size = 8 * g.length - o.countZeros(g), e.readSequence(), d.a = o.mpNormalize(e.readString(n.Ber.OctetString, !0)), d.b = o.mpNormalize(e.readString(n.Ber.OctetString, !0)), e.peek() === n.Ber.BitString && (d.s = e.readString(n.Ber.BitString, !0)), d.G = e.readString(n.Ber.OctetString, !0), a.strictEqual(d.G[0], 4, "uncompressed G is required"), d.n = o.mpNormalize(e.readString(n.Ber.Integer, !0)), d.h = o.mpNormalize(e.readString(n.Ber.Integer, !0)), a.strictEqual(d.h[0], 1, "a cofactor=1 curve is required"), r = Object.keys(s.curves);
                    var m = Object.keys(d);
                    for (f = 0; f < r.length; ++f) {
                        c = r[f], u = s.curves[c];
                        for (var v = !0, y = 0; y < m.length; ++y) {
                            var w = m[y];
                            if (void 0 !== u[w])
                                if ("object" == typeof u[w] && void 0 !== u[w].equals) {
                                    if (!u[w].equals(d[w])) {
                                        v = !1;
                                        break
                                    }
                                } else if (i.isBuffer(u[w])) {
                                if (u[w].toString("binary") !== d[w].toString("binary")) {
                                    v = !1;
                                    break
                                }
                            } else if (u[w] !== d[w]) {
                                v = !1;
                                break
                            }
                        }
                        if (v) {
                            t = c;
                            break
                        }
                    }
                }
                return t
            }

            function d(e, t) {
                if (e.startSequence(), c.isPrivateKey(t)) {
                    var r = i.from([0]);
                    e.writeBuffer(r, n.Ber.Integer)
                }
                switch (e.startSequence(), t.type) {
                    case "rsa":
                        e.writeOID("1.2.840.113549.1.1.1"), c.isPrivateKey(t) ? function(e, t) {
                            t.writeNull(), t.endSequence(), t.startSequence(n.Ber.OctetString), t.startSequence();
                            var r = i.from([0]);
                            t.writeBuffer(r, n.Ber.Integer), t.writeBuffer(e.part.n.data, n.Ber.Integer), t.writeBuffer(e.part.e.data, n.Ber.Integer), t.writeBuffer(e.part.d.data, n.Ber.Integer), t.writeBuffer(e.part.p.data, n.Ber.Integer), t.writeBuffer(e.part.q.data, n.Ber.Integer), e.part.dmodp && e.part.dmodq || o.addRSAMissing(e);
                            t.writeBuffer(e.part.dmodp.data, n.Ber.Integer), t.writeBuffer(e.part.dmodq.data, n.Ber.Integer), t.writeBuffer(e.part.iqmp.data, n.Ber.Integer), t.endSequence(), t.endSequence()
                        }(t, e) : function(e, t) {
                            t.writeNull(), t.endSequence(), t.startSequence(n.Ber.BitString), t.writeByte(0), t.startSequence(), t.writeBuffer(e.part.n.data, n.Ber.Integer), t.writeBuffer(e.part.e.data, n.Ber.Integer), t.endSequence(), t.endSequence()
                        }(t, e);
                        break;
                    case "dsa":
                        e.writeOID("1.2.840.10040.4.1"), c.isPrivateKey(t) ? function(e, t) {
                            t.startSequence(), t.writeBuffer(e.part.p.data, n.Ber.Integer), t.writeBuffer(e.part.q.data, n.Ber.Integer), t.writeBuffer(e.part.g.data, n.Ber.Integer), t.endSequence(), t.endSequence(), t.startSequence(n.Ber.OctetString), t.writeBuffer(e.part.x.data, n.Ber.Integer), t.endSequence()
                        }(t, e) : function(e, t) {
                            t.startSequence(), t.writeBuffer(e.part.p.data, n.Ber.Integer), t.writeBuffer(e.part.q.data, n.Ber.Integer), t.writeBuffer(e.part.g.data, n.Ber.Integer), t.endSequence(), t.endSequence(), t.startSequence(n.Ber.BitString), t.writeByte(0), t.writeBuffer(e.part.y.data, n.Ber.Integer), t.endSequence()
                        }(t, e);
                        break;
                    case "ecdsa":
                        e.writeOID("1.2.840.10045.2.1"), c.isPrivateKey(t) ? function(e, t) {
                            l(e, t), t.endSequence(), t.startSequence(n.Ber.OctetString), t.startSequence();
                            var r = i.from([1]);
                            t.writeBuffer(r, n.Ber.Integer), t.writeBuffer(e.part.d.data, n.Ber.OctetString), t.startSequence(161);
                            var a = o.ecNormalize(e.part.Q.data, !0);
                            t.writeBuffer(a, n.Ber.BitString), t.endSequence(), t.endSequence(), t.endSequence()
                        }(t, e) : function(e, t) {
                            l(e, t), t.endSequence();
                            var r = o.ecNormalize(e.part.Q.data, !0);
                            t.writeBuffer(r, n.Ber.BitString)
                        }(t, e);
                        break;
                    case "ed25519":
                        if (e.writeOID("1.3.101.112"), c.isPrivateKey(t)) throw new Error("Ed25519 private keys in pkcs8 format are not supported");
                        ! function(e, t) {
                            t.endSequence(), o.writeBitString(t, e.part.A.data)
                        }(t, e);
                        break;
                    default:
                        throw new Error("Unsupported key type: " + t.type)
                }
                e.endSequence()
            }

            function l(e, t) {
                var r = s.curves[e.curve];
                if (r.pkcs8oid) t.writeOID(r.pkcs8oid);
                else {
                    t.startSequence();
                    var a = i.from([1]);
                    t.writeBuffer(a, n.Ber.Integer), t.startSequence(), t.writeOID("1.2.840.10045.1.1"), t.writeBuffer(r.p, n.Ber.Integer), t.endSequence(), t.startSequence();
                    var o = r.p;
                    0 === o[0] && (o = o.slice(1)), t.writeBuffer(o, n.Ber.OctetString), t.writeBuffer(r.b, n.Ber.OctetString), t.writeBuffer(r.s, n.Ber.BitString), t.endSequence(), t.writeBuffer(r.G, n.Ber.OctetString), t.writeBuffer(r.n, n.Ber.Integer);
                    var f = r.h;
                    f || (f = i.from([1])), t.writeBuffer(f, n.Ber.Integer), t.endSequence()
                }
            }
        },
        493: function(e, t, r) {
            e.exports = m;
            var a = r(75),
                n = r(77).Buffer,
                i = r(146),
                s = r(24),
                o = r(490),
                f = (r(259), r(237)),
                c = (r(43), r(118)),
                u = r(116),
                p = r(117),
                h = r(494),
                d = {};
            d.openssh = r(3025), d.x509 = r(1697), d.pem = r(3026);
            var l = f.CertificateParseError,
                g = f.InvalidAlgorithmError;

            function m(e) {
                a.object(e, "options"), a.arrayOfObject(e.subjects, "options.subjects"), c.assertCompatible(e.subjects[0], h, [1, 0], "options.subjects"), c.assertCompatible(e.subjectKey, u, [1, 0], "options.subjectKey"), c.assertCompatible(e.issuer, h, [1, 0], "options.issuer"), void 0 !== e.issuerKey && c.assertCompatible(e.issuerKey, u, [1, 0], "options.issuerKey"), a.object(e.signatures, "options.signatures"), a.buffer(e.serial, "options.serial"), a.date(e.validFrom, "options.validFrom"), a.date(e.validUntil, "optons.validUntil"), a.optionalArrayOfString(e.purposes, "options.purposes"), this._hashCache = {}, this.subjects = e.subjects, this.issuer = e.issuer, this.subjectKey = e.subjectKey, this.issuerKey = e.issuerKey, this.signatures = e.signatures, this.serial = e.serial, this.validFrom = e.validFrom, this.validUntil = e.validUntil, this.purposes = e.purposes
            }
            m.formats = d, m.prototype.toBuffer = function(e, t) {
                return void 0 === e && (e = "x509"), a.string(e, "format"), a.object(d[e], "formats[format]"), a.optionalObject(t, "options"), d[e].write(this, t)
            }, m.prototype.toString = function(e, t) {
                return void 0 === e && (e = "pem"), this.toBuffer(e, t).toString()
            }, m.prototype.fingerprint = function(e) {
                void 0 === e && (e = "sha256"), a.string(e, "algorithm");
                var t = {
                    type: "certificate",
                    hash: this.hash(e),
                    algorithm: e
                };
                return new o(t)
            }, m.prototype.hash = function(e) {
                if (a.string(e, "algorithm"), e = e.toLowerCase(), void 0 === i.hashAlgs[e]) throw new g(e);
                if (this._hashCache[e]) return this._hashCache[e];
                var t = s.createHash(e).update(this.toBuffer("x509")).digest();
                return this._hashCache[e] = t, t
            }, m.prototype.isExpired = function(e) {
                return void 0 === e && (e = new Date), !(e.getTime() >= this.validFrom.getTime() && e.getTime() < this.validUntil.getTime())
            }, m.prototype.isSignedBy = function(e) {
                return c.assertCompatible(e, m, [1, 0], "issuer"), !!this.issuer.equals(e.subjects[0]) && (!(this.issuer.purposes && this.issuer.purposes.length > 0 && -1 === this.issuer.purposes.indexOf("ca")) && this.isSignedByKey(e.subjectKey))
            }, m.prototype.getExtension = function(e) {
                return a.string(e, "keyOrOid"), this.getExtensions().filter((function(t) {
                    return "x509" === t.format ? t.oid === e : "openssh" === t.format && t.name === e
                }))[0]
            }, m.prototype.getExtensions = function() {
                var e = [],
                    t = this.signatures.x509;
                t && t.extras && t.extras.exts && t.extras.exts.forEach((function(t) {
                    t.format = "x509", e.push(t)
                }));
                var r = this.signatures.openssh;
                return r && r.exts && r.exts.forEach((function(t) {
                    t.format = "openssh", e.push(t)
                })), e
            }, m.prototype.isSignedByKey = function(e) {
                if (c.assertCompatible(e, u, [1, 2], "issuerKey"), void 0 !== this.issuerKey) return this.issuerKey.fingerprint("sha512").matches(e);
                var t = Object.keys(this.signatures)[0],
                    r = d[t].verify(this, e);
                return r && (this.issuerKey = e), r
            }, m.prototype.signWith = function(e) {
                c.assertCompatible(e, p, [1, 2], "key");
                for (var t = Object.keys(d), r = !1, a = 0; a < t.length; ++a) {
                    if ("pem" !== t[a]) !0 === d[t[a]].sign(this, e) && (r = !0)
                }
                if (!r) throw new Error("Failed to sign the certificate for any available certificate formats")
            }, m.createSelfSigned = function(e, t, r) {
                var i;
                i = Array.isArray(e) ? e : [e], a.arrayOfObject(i), i.forEach((function(e) {
                    c.assertCompatible(e, h, [1, 0], "subject")
                })), c.assertCompatible(t, p, [1, 2], "private key"), a.optionalObject(r, "options"), void 0 === r && (r = {}), a.optionalObject(r.validFrom, "options.validFrom"), a.optionalObject(r.validUntil, "options.validUntil");
                var s = r.validFrom,
                    o = r.validUntil;
                if (void 0 === s && (s = new Date), void 0 === o) {
                    a.optionalNumber(r.lifetime, "options.lifetime");
                    var f = r.lifetime;
                    void 0 === f && (f = 31536e4), (o = new Date).setTime(o.getTime() + 1e3 * f)
                }
                a.optionalBuffer(r.serial, "options.serial");
                var u = r.serial;
                void 0 === u && (u = n.from("0000000000000001", "hex"));
                var d = r.purposes;
                if (void 0 === d && (d = []), -1 === d.indexOf("signature") && d.push("signature"), -1 === d.indexOf("ca") && d.push("ca"), -1 === d.indexOf("crl") && d.push("crl"), d.length <= 3) {
                    var l = i.filter((function(e) {
                            return "host" === e.type
                        })),
                        g = i.filter((function(e) {
                            return "user" === e.type
                        }));
                    l.length > 0 && -1 === d.indexOf("serverAuth") && d.push("serverAuth"), g.length > 0 && -1 === d.indexOf("clientAuth") && d.push("clientAuth"), (g.length > 0 || l.length > 0) && (-1 === d.indexOf("keyAgreement") && d.push("keyAgreement"), "rsa" === t.type && -1 === d.indexOf("encryption") && d.push("encryption"))
                }
                var v = new m({
                    subjects: i,
                    issuer: i[0],
                    subjectKey: t.toPublic(),
                    issuerKey: t.toPublic(),
                    signatures: {},
                    serial: u,
                    validFrom: s,
                    validUntil: o,
                    purposes: d
                });
                return v.signWith(t), v
            }, m.create = function(e, t, r, i, s) {
                var o;
                o = Array.isArray(e) ? e : [e], a.arrayOfObject(o), o.forEach((function(e) {
                    c.assertCompatible(e, h, [1, 0], "subject")
                })), c.assertCompatible(t, u, [1, 0], "key"), p.isPrivateKey(t) && (t = t.toPublic()), c.assertCompatible(r, h, [1, 0], "issuer"), c.assertCompatible(i, p, [1, 2], "issuer key"), a.optionalObject(s, "options"), void 0 === s && (s = {}), a.optionalObject(s.validFrom, "options.validFrom"), a.optionalObject(s.validUntil, "options.validUntil");
                var f = s.validFrom,
                    d = s.validUntil;
                if (void 0 === f && (f = new Date), void 0 === d) {
                    a.optionalNumber(s.lifetime, "options.lifetime");
                    var l = s.lifetime;
                    void 0 === l && (l = 31536e4), (d = new Date).setTime(d.getTime() + 1e3 * l)
                }
                a.optionalBuffer(s.serial, "options.serial");
                var g = s.serial;
                void 0 === g && (g = n.from("0000000000000001", "hex"));
                var v = s.purposes;
                void 0 === v && (v = []), -1 === v.indexOf("signature") && v.push("signature"), !0 === s.ca && (-1 === v.indexOf("ca") && v.push("ca"), -1 === v.indexOf("crl") && v.push("crl"));
                var y = o.filter((function(e) {
                        return "host" === e.type
                    })),
                    w = o.filter((function(e) {
                        return "user" === e.type
                    }));
                y.length > 0 && -1 === v.indexOf("serverAuth") && v.push("serverAuth"), w.length > 0 && -1 === v.indexOf("clientAuth") && v.push("clientAuth"), (w.length > 0 || y.length > 0) && (-1 === v.indexOf("keyAgreement") && v.push("keyAgreement"), "rsa" === t.type && -1 === v.indexOf("encryption") && v.push("encryption"));
                var b = new m({
                    subjects: o,
                    issuer: r,
                    subjectKey: t,
                    issuerKey: i.toPublic(),
                    signatures: {},
                    serial: g,
                    validFrom: f,
                    validUntil: d,
                    purposes: v
                });
                return b.signWith(i), b
            }, m.parse = function(e, t, r) {
                "string" != typeof e && a.buffer(e, "data"), void 0 === t && (t = "auto"), a.string(t, "format"), "string" == typeof r && (r = {
                    filename: r
                }), a.optionalObject(r, "options"), void 0 === r && (r = {}), a.optionalString(r.filename, "options.filename"), void 0 === r.filename && (r.filename = "(unnamed)"), a.object(d[t], "formats[format]");
                try {
                    return d[t].read(e, r)
                } catch (e) {
                    throw new l(r.filename, t, e)
                }
            }, m.isCertificate = function(e, t) {
                return c.isCompatible(e, m, t)
            }, m.prototype._sshpkApiVersion = [1, 1], m._oldVersionDetect = function(e) {
                return [1, 0]
            }
        },
        494: function(e, t, r) {
            e.exports = u;
            var a = r(75),
                n = (r(146), r(24), r(490), r(259), r(237), r(43), r(118)),
                i = r(260),
                s = r(77).Buffer,
                o = /^([*]|[a-z0-9][a-z0-9\-]{0,62})(?:\.([*]|[a-z0-9][a-z0-9\-]{0,62}))*$/i,
                f = {
                    cn: "2.5.4.3",
                    o: "2.5.4.10",
                    ou: "2.5.4.11",
                    l: "2.5.4.7",
                    s: "2.5.4.8",
                    c: "2.5.4.6",
                    sn: "2.5.4.4",
                    postalCode: "2.5.4.17",
                    serialNumber: "2.5.4.5",
                    street: "2.5.4.9",
                    x500UniqueIdentifier: "2.5.4.45",
                    role: "2.5.4.72",
                    telephoneNumber: "2.5.4.20",
                    description: "2.5.4.13",
                    dc: "0.9.2342.19200300.100.1.25",
                    uid: "0.9.2342.19200300.100.1.1",
                    mail: "0.9.2342.19200300.100.1.3",
                    title: "2.5.4.12",
                    gn: "2.5.4.42",
                    initials: "2.5.4.43",
                    pseudonym: "2.5.4.65",
                    emailAddress: "1.2.840.113549.1.9.1"
                },
                c = {};

            function u(e) {
                var t = this;
                if (a.object(e, "options"), a.arrayOfObject(e.components, "options.components"), this.components = e.components, this.componentLookup = {}, this.components.forEach((function(e) {
                        e.name && !e.oid && (e.oid = f[e.name]), e.oid && !e.name && (e.name = c[e.oid]), void 0 === t.componentLookup[e.name] && (t.componentLookup[e.name] = []), t.componentLookup[e.name].push(e)
                    })), this.componentLookup.cn && this.componentLookup.cn.length > 0 && (this.cn = this.componentLookup.cn[0].value), a.optionalString(e.type, "options.type"), void 0 === e.type) 1 === this.components.length && this.componentLookup.cn && 1 === this.componentLookup.cn.length && this.componentLookup.cn[0].value.match(o) ? (this.type = "host", this.hostname = this.componentLookup.cn[0].value) : this.componentLookup.dc && this.components.length === this.componentLookup.dc.length ? (this.type = "host", this.hostname = this.componentLookup.dc.map((function(e) {
                    return e.value
                })).join(".")) : this.componentLookup.uid && this.components.length === this.componentLookup.uid.length ? (this.type = "user", this.uid = this.componentLookup.uid[0].value) : this.componentLookup.cn && 1 === this.componentLookup.cn.length && this.componentLookup.cn[0].value.match(o) ? (this.type = "host", this.hostname = this.componentLookup.cn[0].value) : this.componentLookup.uid && 1 === this.componentLookup.uid.length ? (this.type = "user", this.uid = this.componentLookup.uid[0].value) : this.componentLookup.mail && 1 === this.componentLookup.mail.length ? (this.type = "email", this.email = this.componentLookup.mail[0].value) : this.componentLookup.cn && 1 === this.componentLookup.cn.length ? (this.type = "user", this.uid = this.componentLookup.cn[0].value) : this.type = "unknown";
                else if (this.type = e.type, "host" === this.type) this.hostname = e.hostname;
                else if ("user" === this.type) this.uid = e.uid;
                else {
                    if ("email" !== this.type) throw new Error("Unknown type " + this.type);
                    this.email = e.email
                }
            }
            Object.keys(f).forEach((function(e) {
                c[f[e]] = e
            })), u.prototype.toString = function() {
                return this.components.map((function(e) {
                    var t = e.name.toUpperCase();
                    t = t.replace(/=/g, "\\=");
                    var r = e.value;
                    return t + "=" + (r = r.replace(/,/g, "\\,"))
                })).join(", ")
            }, u.prototype.get = function(e, t) {
                a.string(e, "name");
                var r = this.componentLookup[e];
                if (void 0 !== r && 0 !== r.length) {
                    if (!t && r.length > 1) throw new Error("Multiple values for attribute " + e);
                    return t ? r.map((function(e) {
                        return e.value
                    })) : r[0].value
                }
            }, u.prototype.toArray = function(e) {
                return this.components.map((function(e) {
                    return {
                        name: e.name,
                        value: e.value
                    }
                }))
            };
            var p = /[^a-zA-Z0-9 '(),+.\/:=?-]/,
                h = /[^\x00-\x7f]/;

            function d(e, t) {
                if ("**" === e || "**" === t) return !0;
                var r = e.split("."),
                    a = t.split(".");
                if (r.length !== a.length) return !1;
                for (var n = 0; n < r.length; ++n)
                    if ("*" !== r[n] && "*" !== a[n] && r[n] !== a[n]) return !1;
                return !0
            }
            u.prototype.toAsn1 = function(e, t) {
                e.startSequence(t), this.components.forEach((function(t) {
                    if (e.startSequence(i.Ber.Constructor | i.Ber.Set), e.startSequence(), e.writeOID(t.oid), t.asn1type === i.Ber.Utf8String || t.value.match(h)) {
                        var r = s.from(t.value, "utf8");
                        e.writeBuffer(r, i.Ber.Utf8String)
                    } else if (t.asn1type === i.Ber.IA5String || t.value.match(p)) e.writeString(t.value, i.Ber.IA5String);
                    else {
                        var a = i.Ber.PrintableString;
                        void 0 !== t.asn1type && (a = t.asn1type), e.writeString(t.value, a)
                    }
                    e.endSequence(), e.endSequence()
                })), e.endSequence()
            }, u.prototype.equals = function(e) {
                if (!u.isIdentity(e, [1, 0])) return !1;
                if (e.components.length !== this.components.length) return !1;
                for (var t = 0; t < this.components.length; ++t) {
                    if (this.components[t].oid !== e.components[t].oid) return !1;
                    if (!d(this.components[t].value, e.components[t].value)) return !1
                }
                return !0
            }, u.forHost = function(e) {
                return a.string(e, "hostname"), new u({
                    type: "host",
                    hostname: e,
                    components: [{
                        name: "cn",
                        value: e
                    }]
                })
            }, u.forUser = function(e) {
                return a.string(e, "uid"), new u({
                    type: "user",
                    uid: e,
                    components: [{
                        name: "uid",
                        value: e
                    }]
                })
            }, u.forEmail = function(e) {
                return a.string(e, "email"), new u({
                    type: "email",
                    email: e,
                    components: [{
                        name: "mail",
                        value: e
                    }]
                })
            }, u.parseDN = function(e) {
                a.string(e, "dn");
                for (var t = [""], r = 0, n = e; n.length > 0;) {
                    var i;
                    if (null !== (i = /^,/.exec(n))) t[++r] = "", n = n.slice(i[0].length);
                    else if (null !== (i = /^\\,/.exec(n))) t[r] += ",", n = n.slice(i[0].length);
                    else if (null !== (i = /^\\./.exec(n))) t[r] += i[0], n = n.slice(i[0].length);
                    else {
                        if (null === (i = /^[^\\,]+/.exec(n))) throw new Error("Failed to parse DN");
                        t[r] += i[0], n = n.slice(i[0].length)
                    }
                }
                return new u({
                    components: t.map((function(e) {
                        for (var t = (e = e.trim()).indexOf("="); t > 0 && "\\" === e.charAt(t - 1);) t = e.indexOf("=", t + 1);
                        if (-1 === t) throw new Error("Failed to parse DN");
                        return {
                            name: e.slice(0, t).toLowerCase().replace(/\\=/g, "="),
                            value: e.slice(t + 1)
                        }
                    }))
                })
            }, u.fromArray = function(e) {
                return a.arrayOfObject(e, "components"), e.forEach((function(e) {
                    if (a.object(e, "component"), a.string(e.name, "component.name"), !s.isBuffer(e.value) && "string" != typeof e.value) throw new Error("Invalid component value")
                })), new u({
                    components: e
                })
            }, u.parseAsn1 = function(e, t) {
                var r = [];
                e.readSequence(t);
                for (var a = e.offset + e.length; e.offset < a;) {
                    e.readSequence(i.Ber.Constructor | i.Ber.Set);
                    var n = e.offset + e.length;
                    e.readSequence();
                    var s, o = e.readOID(),
                        f = e.peek();
                    switch (f) {
                        case i.Ber.PrintableString:
                        case i.Ber.IA5String:
                        case i.Ber.OctetString:
                        case i.Ber.T61String:
                            s = e.readString(f);
                            break;
                        case i.Ber.Utf8String:
                            s = (s = e.readString(f, !0)).toString("utf8");
                            break;
                        case i.Ber.CharacterString:
                        case i.Ber.BMPString:
                            s = (s = e.readString(f, !0)).toString("utf16le");
                            break;
                        default:
                            throw new Error("Unknown asn1 type " + f)
                    }
                    r.push({
                        oid: o,
                        asn1type: f,
                        value: s
                    }), e._offset = n
                }
                return e._offset = a, new u({
                    components: r
                })
            }, u.isIdentity = function(e, t) {
                return n.isCompatible(e, u, t)
            }, u.prototype._sshpkApiVersion = [1, 0], u._oldVersionDetect = function(e) {
                return [1, 0]
            }
        },
        603: function(e, t, r) {
            e.exports = {
                read: function(e, t) {
                    return c.read(e, t)
                },
                readSSHPrivate: function(e, t, f) {
                    var c = (t = new p({
                        buffer: t
                    })).readCString();
                    n.strictEqual(c, "openssh-key-v1", "bad magic string");
                    var d = t.readString(),
                        l = t.readString(),
                        g = t.readBuffer();
                    if (1 !== t.readInt()) throw new Error("OpenSSH-format key file contains multiple keys: this is unsupported.");
                    var m = t.readBuffer();
                    if ("public" === e) return n.ok(t.atEnd(), "excess bytes left after key"), u.read(m);
                    var v = t.readBuffer();
                    n.ok(t.atEnd(), "excess bytes left after key");
                    var y = new p({
                        buffer: g
                    });
                    switch (l) {
                        case "none":
                            if ("none" !== d) throw new Error('OpenSSH-format key uses KDF "none" but specifies a cipher other than "none"');
                            break;
                        case "bcrypt":
                            var w = y.readBuffer(),
                                b = y.readInt(),
                                S = s.opensshCipherInfo(d);
                            if (void 0 === a && (a = r(1695)), "string" == typeof f.passphrase && (f.passphrase = i.from(f.passphrase, "utf-8")), !i.isBuffer(f.passphrase)) throw new h.KeyEncryptedError(f.filename, "OpenSSH");
                            var k = new Uint8Array(f.passphrase),
                                B = new Uint8Array(w),
                                E = new Uint8Array(S.keySize + S.blockSize);
                            if (0 !== a.pbkdf(k, k.length, B, B.length, E, E.length, b)) throw new Error("bcrypt_pbkdf function returned failure, parameters invalid");
                            var F = (E = i.from(E)).slice(0, S.keySize),
                                q = E.slice(S.keySize, S.keySize + S.blockSize),
                                I = o.createDecipheriv(S.opensslName, F, q);
                            I.setAutoPadding(!1);
                            var A, _ = [];
                            for (I.once("error", (function(e) {
                                    if (-1 !== e.toString().indexOf("bad decrypt")) throw new Error("Incorrect passphrase supplied, could not decrypt key");
                                    throw e
                                })), I.write(v), I.end(); null !== (A = I.read());) _.push(A);
                            v = i.concat(_);
                            break;
                        default:
                            throw new Error('OpenSSH-format key uses unknown KDF "' + l + '"')
                    }
                    var P = (t = new p({
                            buffer: v
                        })).readInt(),
                        x = t.readInt();
                    if (P !== x) throw new Error("Incorrect passphrase supplied, could not decrypt key");
                    var C = {},
                        O = u.readInternal(C, "private", t.remainder());
                    t.skip(C.consumed);
                    var D = t.readString();
                    return O.comment = D, O
                },
                write: function(e, t) {
                    var c;
                    c = f.isPrivateKey(e) ? e.toPublic() : e;
                    var u, h, d = "none",
                        l = "none",
                        g = i.alloc(0),
                        m = {
                            blockSize: 8
                        };
                    void 0 !== t && ("string" == typeof(u = t.passphrase) && (u = i.from(u, "utf-8")), void 0 !== u && (n.buffer(u, "options.passphrase"), n.optionalString(t.cipher, "options.cipher"), void 0 === (d = t.cipher) && (d = "aes128-ctr"), m = s.opensshCipherInfo(d), l = "bcrypt"));
                    if (f.isPrivateKey(e)) {
                        h = new p({});
                        var v = o.randomBytes(4).readUInt32BE(0);
                        h.writeInt(v), h.writeInt(v), h.write(e.toBuffer("rfc4253")), h.writeString(e.comment || "");
                        for (var y = 1; h._offset % m.blockSize != 0;) h.writeChar(y++);
                        h = h.toBuffer()
                    }
                    switch (l) {
                        case "none":
                            break;
                        case "bcrypt":
                            var w = o.randomBytes(16),
                                b = new p({});
                            b.writeBuffer(w), b.writeInt(16), g = b.toBuffer(), void 0 === a && (a = r(1695));
                            var S = new Uint8Array(u),
                                k = new Uint8Array(w),
                                B = new Uint8Array(m.keySize + m.blockSize);
                            if (0 !== a.pbkdf(S, S.length, k, k.length, B, B.length, 16)) throw new Error("bcrypt_pbkdf function returned failure, parameters invalid");
                            var E = (B = i.from(B)).slice(0, m.keySize),
                                F = B.slice(m.keySize, m.keySize + m.blockSize),
                                q = o.createCipheriv(m.opensslName, E, F);
                            q.setAutoPadding(!1);
                            var I, A = [];
                            for (q.once("error", (function(e) {
                                    throw e
                                })), q.write(h), q.end(); null !== (I = q.read());) A.push(I);
                            h = i.concat(A);
                            break;
                        default:
                            throw new Error("Unsupported kdf " + l)
                    }
                    var _, P = new p({});
                    P.writeCString("openssh-key-v1"), P.writeString(d), P.writeString(l), P.writeBuffer(g), P.writeInt(1), P.writeBuffer(c.toBuffer("rfc4253")), h && P.writeBuffer(h);
                    P = P.toBuffer(), _ = f.isPrivateKey(e) ? "OPENSSH PRIVATE KEY" : "OPENSSH PUBLIC KEY";
                    var x = P.toString("base64"),
                        C = x.length + x.length / 70 + 18 + 16 + 2 * _.length + 10;
                    P = i.alloc(C);
                    var O = 0;
                    O += P.write("-----BEGIN " + _ + "-----\n", O);
                    for (var D = 0; D < x.length;) {
                        var K = D + 70;
                        K > x.length && (K = x.length), O += P.write(x.slice(D, K), O), P[O++] = 10, D = K
                    }
                    return O += P.write("-----END " + _ + "-----\n", O), P.slice(0, O)
                }
            };
            var a, n = r(75),
                i = (r(260), r(77).Buffer),
                s = (r(146), r(118)),
                o = r(24),
                f = (r(116), r(117)),
                c = r(286),
                u = r(287),
                p = r(399),
                h = r(237)
        }
    }
]);