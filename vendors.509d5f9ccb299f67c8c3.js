(window.webpackJsonp = window.webpackJsonp || []).push([
    [268], {
        5606: function(t, e, r) {
            t.exports = r(7275), t.exports.Interpreter = r(9555)
        },
        5652: function(t, e, r) {
            var i = r(5541),
                s = r(9561);

            function n() {}
            n.prototype.toBuffer = function(t) {
                throw new Error("Not implemented")
            }, n.prototype.toJSON = function(t) {
                throw new Error("Not implemented")
            }, n.prototype.toString = function(t) {
                return this.toBuffer().toString("hex")
            }, n.prototype.getHash = function(t) {
                return i.sha256sha256(this.toBuffer(t))
            }, n.prototype.sign = function(t) {
                var e = this.getHash({
                        skipSignature: !0
                    }),
                    r = s.signHash(e, t);
                return this.payloadSig = r.toString("hex"), this.payloadSigSize = this.payloadSig.length / 2, this
            }, n.prototype.verifySignature = function(t) {
                var e = this.getHash({
                        skipSignature: !0
                    }),
                    r = Buffer.from(this.payloadSig, "hex");
                return s.verifySignature(e, r, t)
            }, t.exports = n
        },
        5668: function(t, e, r) {
            "use strict";
            var i = r(5593),
                Point = r(5932),
                s = r(5541),
                n = r(5484),
                o = r(5848),
                u = r(53),
                a = r(5478);

            function h(t, e) {
                if (!(this instanceof h)) return new h(t, e);
                if (a.checkArgument(t, "First argument is required, please include public key data."), t instanceof h) return t;
                e = e || {};
                var r = this._classifyArgs(t, e);
                return r.point.validate(), n.defineImmutable(this, {
                    point: r.point,
                    compressed: r.compressed,
                    network: r.network || o.defaultNetwork
                }), this
            }
            h.prototype._classifyArgs = function(t, e) {
                var r = {
                    compressed: u.isUndefined(e.compressed) || e.compressed
                };
                if (t instanceof Point) r.point = t;
                else if (t.x && t.y) r = h._transformObject(t);
                else if ("string" == typeof t) r = h._transformDER(Buffer.from(t, "hex"));
                else if (h._isBuffer(t)) r = h._transformDER(t);
                else {
                    if (!h._isPrivateKey(t)) throw new TypeError("First argument is an unrecognized data format.");
                    r = h._transformPrivateKey(t)
                }
                return r.network || (r.network = u.isUndefined(e.network) ? void 0 : o.get(e.network)), r
            }, h._isPrivateKey = function(t) {
                return t instanceof r(5743)
            }, h._isBuffer = function(t) {
                return t instanceof Buffer || t instanceof Uint8Array
            }, h._transformPrivateKey = function(t) {
                a.checkArgument(h._isPrivateKey(t), "Must be an instance of PrivateKey");
                var e = {};
                return e.point = Point.getG().mul(t.bn), e.compressed = t.compressed, e.network = t.network, e
            }, h._transformDER = function(t, e) {
                a.checkArgument(h._isBuffer(t), "Must be a hex buffer of DER encoded public key");
                var r, s, n, o, c = {};
                if (e = !!u.isUndefined(e) || e, 4 !== t[0] && (e || 6 !== t[0] && 7 !== t[0]))
                    if (3 === t[0]) n = t.slice(1), r = new i(n), (c = h._transformX(!0, r)).compressed = !0;
                    else {
                        if (2 !== t[0]) throw new TypeError("Invalid DER format public key");
                        n = t.slice(1), r = new i(n), (c = h._transformX(!1, r)).compressed = !0
                    }
                else {
                    if (n = t.slice(1, 33), o = t.slice(33, 65), 32 !== n.length || 32 !== o.length || 65 !== t.length) throw new TypeError("Length of x and y must be 32 bytes");
                    r = new i(n), s = new i(o), c.point = new Point(r, s), c.compressed = !1
                }
                return c
            }, h._transformX = function(t, e) {
                a.checkArgument("boolean" == typeof t, "Must specify whether y is odd or not (true or false)");
                var r = {};
                return r.point = Point.fromX(t, e), r
            }, h._transformObject = function(t) {
                var e = new i(t.x, "hex"),
                    r = new i(t.y, "hex");
                return new h(new Point(e, r), {
                    compressed: t.compressed
                })
            }, h.fromPrivateKey = function(t) {
                a.checkArgument(h._isPrivateKey(t), "Must be an instance of PrivateKey");
                var e = h._transformPrivateKey(t);
                return new h(e.point, {
                    compressed: e.compressed,
                    network: e.network
                })
            }, h.fromDER = h.fromBuffer = function(t, e) {
                a.checkArgument(h._isBuffer(t), "Must be a hex buffer of DER encoded public key");
                var r = h._transformDER(t, e);
                return new h(r.point, {
                    compressed: r.compressed
                })
            }, h.fromPoint = function(t, e) {
                return a.checkArgument(t instanceof Point, "First argument must be an instance of Point."), new h(t, {
                    compressed: e
                })
            }, h.fromString = function(t, e) {
                var r = Buffer.from(t, e || "hex"),
                    i = h._transformDER(r);
                return new h(i.point, {
                    compressed: i.compressed
                })
            }, h.fromX = function(t, e) {
                var r = h._transformX(t, e);
                return new h(r.point, {
                    compressed: r.compressed
                })
            }, h.getValidationError = function(t) {
                var e;
                try {
                    new h(t)
                } catch (t) {
                    e = t
                }
                return e
            }, h.isValid = function(t) {
                return !h.getValidationError(t)
            }, h.prototype.toObject = h.prototype.toJSON = function() {
                return {
                    x: this.point.getX().toString("hex", 2),
                    y: this.point.getY().toString("hex", 2),
                    compressed: this.compressed
                }
            }, h.prototype.toBuffer = h.prototype.toDER = function() {
                var t, e = this.point.getX(),
                    r = this.point.getY(),
                    i = e.toBuffer({
                        size: 32
                    }),
                    s = r.toBuffer({
                        size: 32
                    });
                return this.compressed ? (t = s[s.length - 1] % 2 ? Buffer.from([3]) : Buffer.from([2]), Buffer.concat([t, i])) : (t = Buffer.from([4]), Buffer.concat([t, i, s]))
            }, h.prototype._getID = function() {
                return s.sha256ripemd160(this.toBuffer())
            }, h.prototype.toAddress = function(t) {
                return r(5744).fromPublicKey(this, t || this.network)
            }, h.prototype.toString = function() {
                return this.toDER().toString("hex")
            }, h.prototype.inspect = function() {
                return "<PublicKey: " + this.toString() + (this.compressed ? "" : ", uncompressed") + ">"
            }, t.exports = h
        },
        5743: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5744),
                n = r(6055),
                o = r(5593),
                u = r(5484),
                a = r(5848),
                Point = r(5932),
                h = r(5668),
                c = r(6059),
                p = r(5478);

            function f(t, e) {
                if (!(this instanceof f)) return new f(t, e);
                if (t instanceof f) return t;
                var r = this._classifyArguments(t, e);
                if (!r.bn || 0 === r.bn.cmp(new o(0))) throw new TypeError("Number cannot be equal to zero, undefined, null or false");
                if (!r.bn.lt(Point.getN())) throw new TypeError("Number must be less than N");
                if (void 0 === r.network) throw new TypeError('Must specify the network ("livenet" or "testnet")');
                return u.defineImmutable(this, {
                    bn: r.bn,
                    compressed: r.compressed,
                    network: r.network
                }), Object.defineProperty(this, "publicKey", {
                    configurable: !1,
                    enumerable: !0,
                    get: this.toPublicKey.bind(this)
                }), this
            }
            f.prototype._classifyArguments = function(t, e) {
                var r = {
                    compressed: !0,
                    network: e ? a.get(e) : a.defaultNetwork
                };
                if (i.isUndefined(t) || i.isNull(t)) r.bn = f._getRandomBN();
                else if (t instanceof o) r.bn = t;
                else if (t instanceof Buffer || t instanceof Uint8Array) r = f._transformBuffer(t, e);
                else if (t.bn && t.network) r = f._transformObject(t);
                else if (!e && a.get(t)) r.bn = f._getRandomBN(), r.network = a.get(t);
                else {
                    if ("string" != typeof t) throw new TypeError("First argument is an unrecognized data type.");
                    u.isHexa(t) ? r.bn = new o(Buffer.from(t, "hex")) : r = f._transformWIF(t, e)
                }
                return r
            }, f._getRandomBN = function() {
                var t, e;
                do {
                    var r = c.getRandomBuffer(32);
                    t = (e = o.fromBuffer(r)).lt(Point.getN())
                } while (!t);
                return e
            }, f._transformBuffer = function(t, e) {
                var r = {};
                if (32 === t.length) return f._transformBNBuffer(t, e);
                if (r.network = a.get(t[0], "privatekey"), !r.network) throw new Error("Invalid network");
                if (e && r.network !== a.get(e)) throw new TypeError("Private key network mismatch");
                if (34 === t.length && 1 === t[33]) r.compressed = !0;
                else {
                    if (33 !== t.length) throw new Error("Length of buffer must be 33 (uncompressed) or 34 (compressed)");
                    r.compressed = !1
                }
                return r.bn = o.fromBuffer(t.slice(1, 33)), r
            }, f._transformBNBuffer = function(t, e) {
                var r = {};
                return r.network = a.get(e) || a.defaultNetwork, r.bn = o.fromBuffer(t), r.compressed = !1, r
            }, f._transformWIF = function(t, e) {
                return f._transformBuffer(n.decode(t), e)
            }, f.fromBuffer = function(t, e) {
                return new f(t, e)
            }, f._transformObject = function(t) {
                return {
                    bn: new o(t.bn, "hex"),
                    network: a.get(t.network),
                    compressed: t.compressed
                }
            }, f.fromString = f.fromWIF = function(t) {
                return p.checkArgument(i.isString(t), "First argument is expected to be a string."), new f(t)
            }, f.fromObject = function(t) {
                return p.checkArgument(i.isObject(t), "First argument is expected to be an object."), new f(t)
            }, f.fromRandom = function(t) {
                var e = f._getRandomBN();
                return new f(e, t)
            }, f.getValidationError = function(t, e) {
                var r;
                try {
                    new f(t, e)
                } catch (t) {
                    r = t
                }
                return r
            }, f.isValid = function(t, e) {
                return !!t && !f.getValidationError(t, e)
            }, f.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, f.prototype.toWIF = function() {
                var t, e = this.network;
                return t = this.compressed ? Buffer.concat([Buffer.from([e.privatekey]), this.bn.toBuffer({
                    size: 32
                }), Buffer.from([1])]) : Buffer.concat([Buffer.from([e.privatekey]), this.bn.toBuffer({
                    size: 32
                })]), n.encode(t)
            }, f.prototype.toBigNumber = function() {
                return this.bn
            }, f.prototype.toBuffer = function() {
                return this.bn.toBuffer()
            }, f.prototype.toBufferNoPadding = function() {
                return this.bn.toBuffer()
            }, f.prototype.toPublicKey = function() {
                return this._pubkey || (this._pubkey = h.fromPrivateKey(this)), this._pubkey
            }, f.prototype.toAddress = function(t) {
                var e = this.toPublicKey();
                return s.fromPublicKey(e, t || this.network)
            }, f.prototype.toObject = f.prototype.toJSON = function() {
                return {
                    bn: this.bn.toString("hex"),
                    compressed: this.compressed,
                    network: this.network.toString()
                }
            }, f.prototype.inspect = function() {
                var t = this.compressed ? "" : ", uncompressed";
                return "<PrivateKey: " + this.toString() + ", network: " + this.network + t + ">"
            }, t.exports = f
        },
        5787: function(t, e, r) {
            "use strict";
            var i = r(5630),
                s = r(5606),
                n = r(5788),
                o = r(5515),
                u = r(5507),
                a = r(5593),
                h = r(5541),
                c = r(6204),
                p = r(5478),
                f = r(53),
                d = function(t, e, c, p) {
                    var f, d = r(6550),
                        g = r(6551),
                        S = d.shallowCopy(t);
                    for ((p = new s(p)).removeCodeseparators(), f = 0; f < S.inputs.length; f++) S.inputs[f] = new g(S.inputs[f]).setScript(s.empty());
                    if (S.inputs[c] = new g(S.inputs[c]).setScript(p), (31 & e) === i.SIGHASH_NONE || (31 & e) === i.SIGHASH_SINGLE)
                        for (f = 0; f < S.inputs.length; f++) f !== c && (S.inputs[f].sequenceNumber = 0);
                    if ((31 & e) === i.SIGHASH_NONE) S.outputs = [];
                    else if ((31 & e) === i.SIGHASH_SINGLE) {
                        if (c >= S.outputs.length) return Buffer.from("0000000000000000000000000000000000000000000000000000000000000001", "hex");
                        for (S.outputs.length = c + 1, f = 0; f < c; f++) S.outputs[f] = new n({
                            satoshis: a.fromBuffer(Buffer.from("ffffffffffffffff", "hex")),
                            script: s.empty()
                        })
                    }
                    e & i.SIGHASH_ANYONECANPAY && (S.inputs = [S.inputs[c]]);
                    var l = (new u).write(S.toBuffer()).writeInt32LE(e).toBuffer(),
                        y = h.sha256sha256(l);
                    return y = new o(y).readReverse()
                };
            t.exports = {
                sighash: d,
                sign: function(t, e, r, i, s) {
                    var n = d(t, r, i, s);
                    return c.sign(n, e, "little").set({
                        nhashtype: r
                    })
                },
                verify: function(t, e, r, i, s) {
                    p.checkArgument(!f.isUndefined(t)), p.checkArgument(!f.isUndefined(e) && !f.isUndefined(e.nhashtype));
                    var n = d(t, e.nhashtype, i, s);
                    return c.verify(n, e, r, "little")
                }
            }
        },
        5788: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5593),
                n = r(5503),
                o = r(5484),
                u = r(5507),
                a = r(5606),
                h = r(5478),
                c = r(5615);

            function p(t) {
                if (!(this instanceof p)) return new p(t);
                if (!i.isObject(t)) throw new TypeError("Unrecognized argument for Output");
                var e;
                this.satoshis = t.satoshis, n.isBuffer(t.script) ? this._scriptBuffer = t.script : (e = i.isString(t.script) && o.isHexa(t.script) ? Buffer.from(t.script, "hex") : t.script, this.setScript(e))
            }
            Object.defineProperty(p.prototype, "script", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._script || this.setScriptFromBuffer(this._scriptBuffer), this._script
                }
            }), Object.defineProperty(p.prototype, "satoshis", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._satoshis
                },
                set: function(t) {
                    t instanceof s ? (this._satoshisBN = t, this._satoshis = t.toNumber()) : i.isString(t) ? (this._satoshis = parseInt(t), this._satoshisBN = s.fromNumber(this._satoshis)) : (h.checkArgument(o.isNaturalNumber(t), "Output satoshis is not a natural number"), this._satoshisBN = s.fromNumber(t), this._satoshis = t), h.checkState(o.isNaturalNumber(this._satoshis), "Output satoshis is not a natural number")
                }
            }), p.prototype.invalidSatoshis = function() {
                return this._satoshis > 9007199254740991 ? "transaction txout satoshis greater than max safe integer" : this._satoshis !== this._satoshisBN.toNumber() ? "transaction txout satoshis has corrupted value" : this._satoshis < 0 && "transaction txout negative"
            }, p.prototype.toObject = p.prototype.toJSON = function() {
                var t = {
                    satoshis: this.satoshis
                };
                return t.script = this._scriptBuffer.toString("hex"), t
            }, p.fromObject = function(t) {
                return new p(t)
            }, p.prototype.setScriptFromBuffer = function(t) {
                this._scriptBuffer = t;
                try {
                    this._script = a.fromBuffer(this._scriptBuffer), this._script._isOutput = !0
                } catch (t) {
                    if (!(t instanceof c.Script.InvalidBuffer)) throw t;
                    this._script = null
                }
            }, p.prototype.setScript = function(t) {
                if (t instanceof a) this._scriptBuffer = t.toBuffer(), this._script = t, this._script._isOutput = !0;
                else if (i.isString(t)) this._script = a.fromString(t), this._scriptBuffer = this._script.toBuffer(), this._script._isOutput = !0;
                else {
                    if (!n.isBuffer(t)) throw new TypeError("Invalid argument type: script");
                    this.setScriptFromBuffer(t)
                }
                return this
            }, p.prototype.inspect = function() {
                var t;
                return t = this.script ? this.script.inspect() : this._scriptBuffer.toString("hex"), "<Output (" + this.satoshis + " sats) " + t + ">"
            }, p.fromBufferReader = function(t) {
                var e = {};
                e.satoshis = t.readUInt64LEBN();
                var r = t.readVarintNum();
                return e.script = 0 !== r ? t.read(r) : Buffer.from([]), new p(e)
            }, p.prototype.toBufferWriter = function(t) {
                t || (t = new u), t.writeUInt64LEBN(this._satoshisBN);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t
            }, t.exports = p
        },
        5848: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5503),
                n = r(5484),
                o = [],
                u = {};

            function a() {}

            function h(t, e) {
                if (~o.indexOf(t)) return t;
                if (!e) return u[t];
                i.isArray(e) || (e = [e]);
                var r = function(e) {
                    return o[s][e] === t
                };
                for (var s in o)
                    if (i.some(e, r)) return o[s]
            }

            function c(t) {
                var e = new a;
                return n.defineImmutable(e, {
                    name: t.name,
                    alias: t.alias,
                    pubkeyhash: t.pubkeyhash,
                    privatekey: t.privatekey,
                    scripthash: t.scripthash,
                    xpubkey: t.xpubkey,
                    xprivkey: t.xprivkey
                }), t.networkMagic && n.defineImmutable(e, {
                    networkMagic: s.integerAsBuffer(t.networkMagic)
                }), t.port && n.defineImmutable(e, {
                    port: t.port
                }), t.dnsSeeds && n.defineImmutable(e, {
                    dnsSeeds: t.dnsSeeds
                }), i.each(e, (function(t) {
                    i.isUndefined(t) || i.isObject(t) || (u[t] = e)
                })), o.push(e), e
            }
            a.prototype.toString = function() {
                return this.name
            }, c({
                name: "livenet",
                alias: "mainnet",
                pubkeyhash: 76,
                privatekey: 204,
                scripthash: 16,
                xpubkey: 76067358,
                xprivkey: 76066276,
                networkMagic: 3205262269,
                port: 9999,
                dnsSeeds: ["dnsseed.darkcoin.io", "dnsseed.dashdot.io", "dnsseed.masternode.io", "dnsseed.dashpay.io"]
            });
            var p = h("livenet");
            c({
                name: "testnet",
                alias: "regtest",
                pubkeyhash: 140,
                privatekey: 239,
                scripthash: 19,
                xpubkey: 70617039,
                xprivkey: 70615956
            });
            var f = h("testnet"),
                d = {
                    PORT: 19999,
                    NETWORK_MAGIC: s.integerAsBuffer(3470969599),
                    DNS_SEEDS: ["testnet-seed.darkcoin.io", "testnet-seed.dashdot.io", "test.dnsseed.masternode.io"]
                };
            for (var g in d) i.isObject(d[g]) || (u[d[g]] = f);
            var S = {
                PORT: 19994,
                NETWORK_MAGIC: s.integerAsBuffer(4240553948),
                DNS_SEEDS: []
            };
            for (var g in S) i.isObject(S[g]) || (u[S[g]] = f);
            Object.defineProperty(f, "port", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.regtestEnabled ? S.PORT : d.PORT
                }
            }), Object.defineProperty(f, "networkMagic", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.regtestEnabled ? S.NETWORK_MAGIC : d.NETWORK_MAGIC
                }
            }), Object.defineProperty(f, "dnsSeeds", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.regtestEnabled ? S.DNS_SEEDS : d.DNS_SEEDS
                }
            }), t.exports = {
                add: c,
                remove: function(t) {
                    for (var e = 0; e < o.length; e++) o[e] === t && o.splice(e, 1);
                    for (var r in u) u[r] === t && delete u[r]
                },
                defaultNetwork: p,
                livenet: p,
                mainnet: p,
                testnet: f,
                get: h,
                enableRegtest: function() {
                    f.regtestEnabled = !0
                },
                disableRegtest: function() {
                    f.regtestEnabled = !1
                }
            }
        },
        5933: function(t, e, r) {
            t.exports = r(6550), t.exports.Input = r(6551), t.exports.Output = r(5788), t.exports.UnspentOutput = r(7276), t.exports.Signature = r(6058), t.exports.Sighash = r(5787), t.exports.Payload = r(7277)
        },
        6056: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5478),
                n = r(5615),
                o = r(5507),
                u = r(5503),
                a = r(5484),
                h = r(5606),
                c = r(5787),
                p = r(5788);

            function f(t) {
                return this instanceof f ? t ? this._fromObject(t) : void 0 : new f(t)
            }
            f.MAXINT = 4294967295, f.DEFAULT_SEQNUMBER = 4294967295, f.DEFAULT_LOCKTIME_SEQNUMBER = 4294967294, f.DEFAULT_RBF_SEQNUMBER = 4294967293, Object.defineProperty(f.prototype, "script", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this.isNull() ? null : (this._script || (this._script = new h(this._scriptBuffer), this._script._isInput = !0), this._script)
                }
            }), f.fromObject = function(t) {
                return s.checkArgument(i.isObject(t)), (new f)._fromObject(t)
            }, f.prototype._fromObject = function(t) {
                var e;
                if (e = i.isString(t.prevTxId) && a.isHexa(t.prevTxId) ? Buffer.from(t.prevTxId, "hex") : t.prevTxId, this.output = t.output ? t.output instanceof p ? t.output : new p(t.output) : void 0, this.prevTxId = e || t.txidbuf, this.outputIndex = i.isUndefined(t.outputIndex) ? t.txoutnum : t.outputIndex, this.sequenceNumber = i.isUndefined(t.sequenceNumber) ? i.isUndefined(t.seqnum) ? 4294967295 : t.seqnum : t.sequenceNumber, i.isUndefined(t.script) && i.isUndefined(t.scriptBuffer)) throw new n.Transaction.Input.MissingScript;
                return this.setScript(t.scriptBuffer || t.script), this
            }, f.prototype.toObject = f.prototype.toJSON = function() {
                var t = {
                    prevTxId: this.prevTxId.toString("hex"),
                    outputIndex: this.outputIndex,
                    sequenceNumber: this.sequenceNumber,
                    script: this._scriptBuffer.toString("hex")
                };
                return this.script && (t.scriptString = this.script.toString()), this.output && (t.output = this.output.toObject()), t
            }, f.fromBufferReader = function(t) {
                var e = new f;
                return e.prevTxId = t.readReverse(32), e.outputIndex = t.readUInt32LE(), e._scriptBuffer = t.readVarLengthBuffer(), e.sequenceNumber = t.readUInt32LE(), e
            }, f.prototype.toBufferWriter = function(t) {
                t || (t = new o), t.writeReverse(this.prevTxId), t.writeUInt32LE(this.outputIndex);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t.writeUInt32LE(this.sequenceNumber), t
            }, f.prototype.setScript = function(t) {
                if (this._script = null, t instanceof h) this._script = t, this._script._isInput = !0, this._scriptBuffer = t.toBuffer();
                else if (a.isHexa(t)) this._scriptBuffer = Buffer.from(t, "hex");
                else if (i.isString(t)) this._script = new h(t), this._script._isInput = !0, this._scriptBuffer = this._script.toBuffer();
                else {
                    if (!u.isBuffer(t)) throw new TypeError("Invalid argument type: script");
                    this._scriptBuffer = Buffer.from(t)
                }
                return this
            }, f.prototype.getSignatures = function() {
                throw new n.AbstractMethodInvoked("Trying to sign unsupported output type (only P2PKH and P2SH multisig inputs are supported) for input: " + JSON.stringify(this))
            }, f.prototype.isFullySigned = function() {
                throw new n.AbstractMethodInvoked("Input#isFullySigned")
            }, f.prototype.isFinal = function() {
                return 4294967295 !== this.sequenceNumber
            }, f.prototype.addSignature = function() {
                throw new n.AbstractMethodInvoked("Input#addSignature")
            }, f.prototype.clearSignatures = function() {
                throw new n.AbstractMethodInvoked("Input#clearSignatures")
            }, f.prototype.isValidSignature = function(t, e) {
                return e.signature.nhashtype = e.sigtype, c.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script)
            }, f.prototype.isNull = function() {
                return "0000000000000000000000000000000000000000000000000000000000000000" === this.prevTxId.toString("hex") && 4294967295 === this.outputIndex
            }, f.prototype._estimateSize = function() {
                return this.toBufferWriter().toBuffer().length
            }, t.exports = f
        },
        6058: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5478),
                n = r(6057),
                o = r(5503),
                u = r(5484),
                a = r(5668),
                h = r(5615),
                c = r(5630);

            function p(t) {
                if (!(this instanceof p)) return new p(t);
                if (t instanceof p) return t;
                if (i.isObject(t)) return this._fromObject(t);
                throw new h.InvalidArgument("TransactionSignatures must be instantiated from an object")
            }
            n(p, c), p.prototype._fromObject = function(t) {
                return this._checkObjectArgs(t), this.publicKey = new a(t.publicKey), this.prevTxId = o.isBuffer(t.prevTxId) ? t.prevTxId : Buffer.from(t.prevTxId, "hex"), this.outputIndex = t.outputIndex, this.inputIndex = t.inputIndex, this.signature = t.signature instanceof c ? t.signature : o.isBuffer(t.signature) ? c.fromBuffer(t.signature) : c.fromString(t.signature), this.sigtype = t.sigtype, this
            }, p.prototype._checkObjectArgs = function(t) {
                s.checkArgument(a(t.publicKey), "publicKey"), s.checkArgument(!i.isUndefined(t.inputIndex), "inputIndex"), s.checkArgument(!i.isUndefined(t.outputIndex), "outputIndex"), s.checkState(i.isNumber(t.inputIndex), "inputIndex must be a number"), s.checkState(i.isNumber(t.outputIndex), "outputIndex must be a number"), s.checkArgument(t.signature, "signature"), s.checkArgument(t.prevTxId, "prevTxId"), s.checkState(t.signature instanceof c || o.isBuffer(t.signature) || u.isHexa(t.signature), "signature must be a buffer or hexa value"), s.checkState(o.isBuffer(t.prevTxId) || u.isHexa(t.prevTxId), "prevTxId must be a buffer or hexa value"), s.checkArgument(t.sigtype, "sigtype"), s.checkState(i.isNumber(t.sigtype), "sigtype must be a number")
            }, p.prototype.toObject = p.prototype.toJSON = function() {
                return {
                    publicKey: this.publicKey.toString(),
                    prevTxId: this.prevTxId.toString("hex"),
                    outputIndex: this.outputIndex,
                    inputIndex: this.inputIndex,
                    signature: this.signature.toString(),
                    sigtype: this.sigtype
                }
            }, p.fromObject = function(t) {
                return s.checkArgument(t), new p(t)
            }, t.exports = p
        },
        6549: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5478),
                n = r(5503),
                o = r(5484);

            function u(t) {
                if (!(this instanceof u)) return new u(t);
                var e;
                if (i.isNumber(t)) e = t;
                else {
                    if (!i.isString(t)) throw new TypeError('Unrecognized num type: "' + typeof t + '" for Opcode');
                    e = u.map[t]
                }
                return o.defineImmutable(this, {
                    num: e
                }), this
            }
            for (var a in u.fromBuffer = function(t) {
                    return s.checkArgument(n.isBuffer(t)), new u(Number("0x" + t.toString("hex")))
                }, u.fromNumber = function(t) {
                    return s.checkArgument(i.isNumber(t)), new u(t)
                }, u.fromString = function(t) {
                    s.checkArgument(i.isString(t));
                    var e = u.map[t];
                    if (void 0 === e) throw new TypeError("Invalid opcodestr");
                    return new u(e)
                }, u.prototype.toHex = function() {
                    return this.num.toString(16)
                }, u.prototype.toBuffer = function() {
                    return Buffer.from(this.toHex(), "hex")
                }, u.prototype.toNumber = function() {
                    return this.num
                }, u.prototype.toString = function() {
                    var t = u.reverseMap[this.num];
                    if (void 0 === t) throw new Error("Opcode does not have a string representation");
                    return t
                }, u.smallInt = function(t) {
                    return s.checkArgument(i.isNumber(t), "Invalid Argument: n should be number"), s.checkArgument(t >= 0 && t <= 16, "Invalid Argument: n must be between 0 and 16"), 0 === t ? u("OP_0") : new u(u.map.OP_1 + t - 1)
                }, u.map = {
                    OP_FALSE: 0,
                    OP_0: 0,
                    OP_PUSHDATA1: 76,
                    OP_PUSHDATA2: 77,
                    OP_PUSHDATA4: 78,
                    OP_1NEGATE: 79,
                    OP_RESERVED: 80,
                    OP_TRUE: 81,
                    OP_1: 81,
                    OP_2: 82,
                    OP_3: 83,
                    OP_4: 84,
                    OP_5: 85,
                    OP_6: 86,
                    OP_7: 87,
                    OP_8: 88,
                    OP_9: 89,
                    OP_10: 90,
                    OP_11: 91,
                    OP_12: 92,
                    OP_13: 93,
                    OP_14: 94,
                    OP_15: 95,
                    OP_16: 96,
                    OP_NOP: 97,
                    OP_VER: 98,
                    OP_IF: 99,
                    OP_NOTIF: 100,
                    OP_VERIF: 101,
                    OP_VERNOTIF: 102,
                    OP_ELSE: 103,
                    OP_ENDIF: 104,
                    OP_VERIFY: 105,
                    OP_RETURN: 106,
                    OP_TOALTSTACK: 107,
                    OP_FROMALTSTACK: 108,
                    OP_2DROP: 109,
                    OP_2DUP: 110,
                    OP_3DUP: 111,
                    OP_2OVER: 112,
                    OP_2ROT: 113,
                    OP_2SWAP: 114,
                    OP_IFDUP: 115,
                    OP_DEPTH: 116,
                    OP_DROP: 117,
                    OP_DUP: 118,
                    OP_NIP: 119,
                    OP_OVER: 120,
                    OP_PICK: 121,
                    OP_ROLL: 122,
                    OP_ROT: 123,
                    OP_SWAP: 124,
                    OP_TUCK: 125,
                    OP_CAT: 126,
                    OP_SUBSTR: 127,
                    OP_LEFT: 128,
                    OP_RIGHT: 129,
                    OP_SIZE: 130,
                    OP_INVERT: 131,
                    OP_AND: 132,
                    OP_OR: 133,
                    OP_XOR: 134,
                    OP_EQUAL: 135,
                    OP_EQUALVERIFY: 136,
                    OP_RESERVED1: 137,
                    OP_RESERVED2: 138,
                    OP_1ADD: 139,
                    OP_1SUB: 140,
                    OP_2MUL: 141,
                    OP_2DIV: 142,
                    OP_NEGATE: 143,
                    OP_ABS: 144,
                    OP_NOT: 145,
                    OP_0NOTEQUAL: 146,
                    OP_ADD: 147,
                    OP_SUB: 148,
                    OP_MUL: 149,
                    OP_DIV: 150,
                    OP_MOD: 151,
                    OP_LSHIFT: 152,
                    OP_RSHIFT: 153,
                    OP_BOOLAND: 154,
                    OP_BOOLOR: 155,
                    OP_NUMEQUAL: 156,
                    OP_NUMEQUALVERIFY: 157,
                    OP_NUMNOTEQUAL: 158,
                    OP_LESSTHAN: 159,
                    OP_GREATERTHAN: 160,
                    OP_LESSTHANOREQUAL: 161,
                    OP_GREATERTHANOREQUAL: 162,
                    OP_MIN: 163,
                    OP_MAX: 164,
                    OP_WITHIN: 165,
                    OP_RIPEMD160: 166,
                    OP_SHA1: 167,
                    OP_SHA256: 168,
                    OP_HASH160: 169,
                    OP_HASH256: 170,
                    OP_CODESEPARATOR: 171,
                    OP_CHECKSIG: 172,
                    OP_CHECKSIGVERIFY: 173,
                    OP_CHECKMULTISIG: 174,
                    OP_CHECKMULTISIGVERIFY: 175,
                    OP_CHECKLOCKTIMEVERIFY: 177,
                    OP_NOP1: 176,
                    OP_NOP2: 177,
                    OP_NOP3: 178,
                    OP_NOP4: 179,
                    OP_NOP5: 180,
                    OP_NOP6: 181,
                    OP_NOP7: 182,
                    OP_NOP8: 183,
                    OP_NOP9: 184,
                    OP_NOP10: 185,
                    OP_PUBKEYHASH: 253,
                    OP_PUBKEY: 254,
                    OP_INVALIDOPCODE: 255
                }, u.reverseMap = [], u.map) u.reverseMap[u.map[a]] = a;
            i.extend(u, u.map), u.isSmallIntOp = function(t) {
                return t instanceof u && (t = t.toNumber()), t === u.map.OP_0 || t >= u.map.OP_1 && t <= u.map.OP_16
            }, u.prototype.inspect = function() {
                return "<Opcode: " + this.toString() + ", hex: " + this.toHex() + ", decimal: " + this.num + ">"
            }, t.exports = u
        },
        6550: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5478),
                n = r(5540),
                o = r(5615),
                u = r(5503),
                a = r(5484),
                h = r(5515),
                c = r(5507),
                p = r(5541),
                f = r(5630),
                d = r(5787),
                g = r(5744),
                S = r(7276),
                l = r(6551),
                y = l.PublicKeyHash,
                _ = l.PublicKey,
                I = l.MultiSigScriptHash,
                m = l.MultiSig,
                O = r(5788),
                P = r(5606),
                E = r(5743),
                T = r(5593),
                v = r(7277),
                b = v.constants.registeredTransactionTypes;

            function A(t) {
                if (!(this instanceof A)) return new A(t);
                if (this.inputs = [], this.outputs = [], this._inputAmount = void 0, this._outputAmount = void 0, t) {
                    if (t instanceof A) return A.shallowCopy(t);
                    if (a.isHexa(t)) this.fromString(t);
                    else if (u.isBuffer(t)) this.fromBuffer(t);
                    else {
                        if (!i.isObject(t)) throw new o.InvalidArgument("Must provide an object or string to deserialize a transaction");
                        this.fromObject(t)
                    }
                } else this._newTransaction()
            }
            A.DUST_AMOUNT = 5460, A.FEE_SECURITY_MARGIN = 15, A.MAX_MONEY = 21e14, A.NLOCKTIME_BLOCKHEIGHT_LIMIT = 5e8, A.NLOCKTIME_MAX_VALUE = 4294967295, A.FEE_PER_KB = 1e3, A.CHANGE_OUTPUT_MAX_SIZE = 62, A.MAXIMUM_EXTRA_SIZE = 26, A.TYPES = b, A.CURRENT_VERSION = 3, A.shallowCopy = function(t) {
                return new A(t.toBuffer())
            };
            var k = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return new h(this._getHash()).readReverse().toString("hex")
                }
            };
            Object.defineProperty(A.prototype, "hash", k), Object.defineProperty(A.prototype, "id", k);
            var x = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._getInputAmount()
                }
            };
            Object.defineProperty(A.prototype, "inputAmount", x), x.get = function() {
                return this._getOutputAmount()
            }, Object.defineProperty(A.prototype, "outputAmount", x), A.prototype._getHash = function() {
                return p.sha256sha256(this.toBuffer())
            }, A.prototype.serialize = function(t) {
                return !0 === t || t && t.disableAll ? this.uncheckedSerialize() : this.checkedSerialize(t)
            }, A.prototype.uncheckedSerialize = A.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, A.prototype.checkedSerialize = function(t) {
                var e = this.getSerializationError(t);
                if (e) throw e.message += " - For more information please see: https://bitcore.io/api/lib/transaction#serialization-checks", e;
                return this.uncheckedSerialize()
            }, A.prototype.invalidSatoshis = function() {
                for (var t = !1, e = 0; e < this.outputs.length; e++) this.outputs[e].invalidSatoshis() && (t = !0);
                return t
            }, A.prototype.getSerializationError = function(t) {
                if (t = t || {}, this.invalidSatoshis()) return new o.Transaction.InvalidSatoshis;
                var e, r = this._getUnspentValue();
                if (r < 0 ? t.disableMoreOutputThanInput || (e = new o.Transaction.InvalidOutputAmountSum) : this.canHaveNoUtxo() || (e = this._hasFeeError(t, r)), this.isSpecialTransaction() && !this.hasExtraPayload()) return new o.Transaction.InvalidPayloadSize;
                if (this.hasExtraPayload() && !this.isSpecialTransaction()) return new o.Transaction.SpecialTransactionTypeIsNotSet;
                var i = !this.canHaveNoUtxo() && this._isMissingSignatures(t),
                    s = !this.canHaveNoUtxo() && this._hasDustOutputs(t);
                return e || s || i
            }, A.prototype._hasFeeError = function(t, e) {
                if (!i.isUndefined(this._fee) && this._fee !== e) return new o.Transaction.FeeError.Different("Unspent value is " + e + " but specified fee is " + this._fee);
                if (!t.disableLargeFees) {
                    var r = this.estimateInstantSendFee(),
                        s = Math.floor(A.FEE_SECURITY_MARGIN * this._estimateFee()),
                        n = Math.max(s, r);
                    if (e > n) return this._missingChange() ? new o.Transaction.ChangeAddressMissing("Fee is too large and no change address was provided") : new o.Transaction.FeeError.TooLarge("expected less than " + n + " but got " + e)
                }
                if (!t.disableSmallFees) {
                    var u = Math.ceil(this._estimateFee() / A.FEE_SECURITY_MARGIN);
                    if (e < u) return new o.Transaction.FeeError.TooSmall("expected more than " + u + " but got " + e)
                }
            }, A.prototype.estimateInstantSendFee = function() {
                return this.inputs.length * n.INSTANTSEND_FEE_PER_INPUT
            }, A.prototype._missingChange = function() {
                return !this._changeScript
            }, A.prototype._hasDustOutputs = function(t) {
                var e, r;
                if (!t.disableDustOutputs)
                    for (e in this.outputs)
                        if ((r = this.outputs[e]).satoshis < A.DUST_AMOUNT && !r.script.isDataOut()) return new o.Transaction.DustOutputs
            }, A.prototype._isMissingSignatures = function(t) {
                if (!t.disableIsFullySigned) return this.isFullySigned() ? void 0 : new o.Transaction.MissingSignatures
            }, A.prototype.inspect = function() {
                return "<Transaction: " + this.uncheckedSerialize() + ">"
            }, A.prototype.toBufferWriter = function(t) {
                if (t.writeUInt16LE(this.version), t.writeUInt16LE(this.type), t.writeVarintNum(this.inputs.length), i.each(this.inputs, (function(e) {
                        e.toBufferWriter(t)
                    })), t.writeVarintNum(this.outputs.length), i.each(this.outputs, (function(e) {
                        e.toBufferWriter(t)
                    })), t.writeUInt32LE(this.nLockTime), this.isSpecialTransaction() && this.hasExtraPayload()) {
                    var e = v.serializeToBuffer(this.extraPayload);
                    t.writeVarintNum(e.length), t.write(e)
                }
                return t
            }, A.prototype.toBuffer = function() {
                var t = new c;
                return this.toBufferWriter(t).toBuffer()
            }, A.prototype.fromBufferReader = function(t) {
                var e, r, i;
                s.checkArgument(!t.finished(), "No transaction data received");
                var n = t.readInt32LE();
                for (this.version = 65535 & n, this.type = n >> 16 & 65535, r = t.readVarintNum(), e = 0; e < r; e++) {
                    var o = l.fromBufferReader(t);
                    this.inputs.push(o)
                }
                for (i = t.readVarintNum(), e = 0; e < i; e++) this.outputs.push(O.fromBufferReader(t));
                if (this.nLockTime = t.readUInt32LE(), this.isSpecialTransaction() && !t.finished()) {
                    var u = t.readVarintNum();
                    if (u > 0) {
                        var a = t.read(u);
                        this.setExtraPayload(v.parseBuffer(this.type, a))
                    }
                }
                return this
            }, A.prototype.fromBuffer = function(t) {
                var e = new h(t);
                return this.fromBufferReader(e)
            }, A.prototype.toObject = A.prototype.toJSON = function() {
                var t = [];
                this.inputs.forEach((function(e) {
                    t.push(e.toObject())
                }));
                var e = [];
                this.outputs.forEach((function(t) {
                    e.push(t.toObject())
                }));
                var r = {
                    hash: this.hash,
                    version: this.version,
                    inputs: t,
                    outputs: e,
                    nLockTime: this.nLockTime
                };
                return this._changeScript && (r.changeScript = this._changeScript.toString()), i.isUndefined(this._changeIndex) || (r.changeIndex = this._changeIndex), i.isUndefined(this._fee) || (r.fee = this._fee), this.isSpecialTransaction() && (r.type = this.type, r.extraPayload = v.serializeToBuffer(this.extraPayload).toString("hex")), r
            }, A.prototype.fromObject = function(t) {
                s.checkArgument(i.isObject(t) || t instanceof A);
                var e, r = this;
                return e = t instanceof A ? t.toObject() : t, i.each(e.inputs, (function(t) {
                    if (t.output && t.output.script) {
                        var e, i = new P(t.output.script);
                        if (i.isPublicKeyHashOut()) e = new l.PublicKeyHash(t);
                        else if (i.isScriptHashOut() && t.publicKeys && t.threshold) e = new l.MultiSigScriptHash(t, t.publicKeys, t.threshold, t.signatures);
                        else {
                            if (!i.isPublicKeyOut()) throw new o.Transaction.Input.UnsupportedScript(t.output.script);
                            e = new l.PublicKey(t)
                        }
                        r.addInput(e)
                    } else r.uncheckedAddInput(new l(t))
                })), i.each(e.outputs, (function(t) {
                    r.addOutput(new O(t))
                })), e.changeIndex && (this._changeIndex = e.changeIndex), e.changeScript && (this._changeScript = new P(e.changeScript)), e.fee && (this._fee = e.fee), this.nLockTime = e.nLockTime, this.version = null == e.version ? 3 : e.version, e.type && (this.setType(e.type), this.type = e.type, e.extraPayload && this.setExtraPayload(v.parseBuffer(e.type, Buffer.from(e.extraPayload, "hex")))), this._checkConsistency(t), this
            }, A.prototype._checkConsistency = function(t) {
                i.isUndefined(this._changeIndex) || (s.checkState(this._changeScript), s.checkState(this.outputs[this._changeIndex]), s.checkState(this.outputs[this._changeIndex].script.toString() === this._changeScript.toString())), t && t.hash && s.checkState(t.hash === this.hash, "Hash in object does not match transaction hash")
            }, A.prototype.lockUntilDate = function(t) {
                if (s.checkArgument(t), i.isNumber(t) && t < A.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new o.Transaction.LockTimeTooEarly;
                i.isDate(t) && (t = t.getTime() / 1e3);
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === l.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = l.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, A.prototype.lockUntilBlockHeight = function(t) {
                if (s.checkArgument(i.isNumber(t)), t >= A.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new o.Transaction.BlockHeightTooHigh;
                if (t < 0) throw new o.Transaction.NLockTimeOutOfRange;
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === l.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = l.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, A.prototype.getLockTime = function() {
                return this.nLockTime ? this.nLockTime < A.NLOCKTIME_BLOCKHEIGHT_LIMIT ? this.nLockTime : new Date(1e3 * this.nLockTime) : null
            }, A.prototype.fromString = function(t) {
                this.fromBuffer(Buffer.from(t, "hex"))
            }, A.prototype._newTransaction = function() {
                this.version = 3, this.type = b.TRANSACTION_NORMAL, this.nLockTime = 0
            }, A.prototype.from = function(t, e, r) {
                if (i.isArray(t)) {
                    var s = this;
                    return i.each(t, (function(t) {
                        s.from(t, e, r)
                    })), this
                }
                return i.some(this.inputs, (function(e) {
                    return e.prevTxId.toString("hex") === t.txId && e.outputIndex === t.outputIndex
                })) || (e && r ? this._fromMultisigUtxo(t, e, r) : this._fromNonP2SH(t)), this
            }, A.prototype._fromNonP2SH = function(t) {
                var e;
                e = (t = new S(t)).script.isPublicKeyHashOut() ? y : t.script.isPublicKeyOut() ? _ : l, this.addInput(new e({
                    output: new O({
                        script: t.script,
                        satoshis: t.satoshis
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: P.empty()
                }))
            }, A.prototype._fromMultisigUtxo = function(t, e, r) {
                var i;
                if (s.checkArgument(r <= e.length, "Number of required signatures must be greater than the number of public keys"), (t = new S(t)).script.isMultisigOut()) i = m;
                else {
                    if (!t.script.isScriptHashOut()) throw new Error("@TODO");
                    i = I
                }
                this.addInput(new i({
                    output: new O({
                        script: t.script,
                        satoshis: t.satoshis
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: P.empty()
                }, e, r))
            }, A.prototype.addInput = function(t, e, r) {
                if (s.checkArgumentType(t, l, "input"), !t.output && (i.isUndefined(e) || i.isUndefined(r))) throw new o.Transaction.NeedMoreInfo("Need information about the UTXO script and satoshis");
                return t.output || !e || i.isUndefined(r) || (e = e instanceof P ? e : new P(e), s.checkArgumentType(r, "number", "satoshis"), t.output = new O({
                    script: e,
                    satoshis: r
                })), this.uncheckedAddInput(t)
            }, A.prototype.uncheckedAddInput = function(t) {
                return s.checkArgumentType(t, l, "input"), this.inputs.push(t), this._inputAmount = void 0, this._updateChangeOutput(), this
            }, A.prototype.hasAllUtxoInfo = function() {
                return i.some(this.inputs.map((function(t) {
                    return !!t.output
                })))
            }, A.prototype.fee = function(t) {
                return s.checkArgument(i.isNumber(t), "amount must be a number"), this._fee = t, this._updateChangeOutput(), this
            }, A.prototype.feePerKb = function(t) {
                return s.checkArgument(i.isNumber(t), "amount must be a number"), this._feePerKb = t, this._updateChangeOutput(), this
            }, A.prototype.change = function(t) {
                return s.checkArgument(t, "address is required"), this._changeScript = P.fromAddress(t), this._updateChangeOutput(), this
            }, A.prototype.getChangeOutput = function() {
                return i.isUndefined(this._changeIndex) ? null : this.outputs[this._changeIndex]
            }, A.prototype.to = function(t, e) {
                if (i.isArray(t)) {
                    var r = this;
                    return i.each(t, (function(t) {
                        r.to(t.address, t.satoshis)
                    })), this
                }
                return s.checkArgument(a.isNaturalNumber(e), "Amount is expected to be a positive integer"), this.addOutput(new O({
                    script: P(new g(t)),
                    satoshis: e
                })), this
            }, A.prototype.addData = function(t) {
                return this.addOutput(new O({
                    script: P.buildDataOut(t),
                    satoshis: 0
                })), this
            }, A.prototype.addOutput = function(t) {
                return s.checkArgumentType(t, O, "output"), this._addOutput(t), this._updateChangeOutput(), this
            }, A.prototype.clearOutputs = function() {
                return this.outputs = [], this._clearSignatures(), this._outputAmount = void 0, this._changeIndex = void 0, this._updateChangeOutput(), this
            }, A.prototype._addOutput = function(t) {
                this.outputs.push(t), this._outputAmount = void 0
            }, A.prototype._getOutputAmount = function() {
                if (i.isUndefined(this._outputAmount)) {
                    var t = this;
                    this._outputAmount = 0, i.each(this.outputs, (function(e) {
                        t._outputAmount += e.satoshis
                    }))
                }
                return this._outputAmount
            }, A.prototype._getInputAmount = function() {
                if (i.isUndefined(this._inputAmount)) {
                    var t = this;
                    this._inputAmount = 0, i.each(this.inputs, (function(e) {
                        if (i.isUndefined(e.output)) throw new o.Transaction.Input.MissingPreviousOutput;
                        t._inputAmount += e.output.satoshis
                    }))
                }
                return this._inputAmount
            }, A.prototype._updateChangeOutput = function() {
                if (this._changeScript) {
                    this._clearSignatures(), i.isUndefined(this._changeIndex) || this._removeOutput(this._changeIndex);
                    var t = this._getUnspentValue() - this.getFee();
                    t > 0 ? (this._changeIndex = this.outputs.length, this._addOutput(new O({
                        script: this._changeScript,
                        satoshis: t
                    }))) : this._changeIndex = void 0
                }
            }, A.prototype.getFee = function() {
                return this.isCoinbase() ? 0 : i.isUndefined(this._fee) ? this._changeScript ? this._estimateFee() : this._getUnspentValue() : this._fee
            }, A.prototype._estimateFee = function() {
                var t = this._estimateSize(),
                    e = this._getUnspentValue();
                return A._estimateFee(t, e, this._feePerKb)
            }, A.prototype._getUnspentValue = function() {
                return this._getInputAmount() - this._getOutputAmount()
            }, A.prototype._clearSignatures = function() {
                i.each(this.inputs, (function(t) {
                    t.clearSignatures()
                }))
            }, A._estimateFee = function(t, e, r) {
                return e > Math.ceil(t / 1e3) * (r || A.FEE_PER_KB) && (t += A.CHANGE_OUTPUT_MAX_SIZE), Math.ceil(t / 1e3) * (r || A.FEE_PER_KB)
            }, A.prototype._estimateSize = function() {
                var t = A.MAXIMUM_EXTRA_SIZE;
                return i.each(this.inputs, (function(e) {
                    t += e._estimateSize()
                })), i.each(this.outputs, (function(e) {
                    t += e.script.toBuffer().length + 9
                })), t
            }, A.prototype._removeOutput = function(t) {
                var e = this.outputs[t];
                this.outputs = i.without(this.outputs, e), this._outputAmount = void 0
            }, A.prototype.removeOutput = function(t) {
                this._removeOutput(t), this._updateChangeOutput()
            }, A.prototype.sort = function() {
                return this.sortInputs((function(t) {
                    var e = Array.prototype.concat.apply([], t);
                    return e.sort((function(t, e) {
                        return Buffer.compare(t.prevTxId, e.prevTxId) || t.outputIndex - e.outputIndex
                    })), e
                })), this.sortOutputs((function(t) {
                    var e = Array.prototype.concat.apply([], t);
                    return e.sort((function(t, e) {
                        return t.satoshis - e.satoshis || Buffer.compare(t.script.toBuffer(), e.script.toBuffer())
                    })), e
                })), this
            }, A.prototype.shuffleOutputs = function() {
                return this.sortOutputs(i.shuffle)
            }, A.prototype.sortOutputs = function(t) {
                var e = t(this.outputs);
                return this._newOutputOrder(e)
            }, A.prototype.sortInputs = function(t) {
                return this.inputs = t(this.inputs), this._clearSignatures(), this
            }, A.prototype._newOutputOrder = function(t) {
                if (this.outputs.length !== t.length || 0 !== i.difference(this.outputs, t).length) throw new o.Transaction.InvalidSorting;
                if (!i.isUndefined(this._changeIndex)) {
                    var e = this.outputs[this._changeIndex];
                    this._changeIndex = i.findIndex(t, e)
                }
                return this.outputs = t, this
            }, A.prototype.removeInput = function(t, e) {
                var r;
                if ((r = !e && i.isNumber(t) ? t : i.findIndex(this.inputs, (function(r) {
                        return r.prevTxId.toString("hex") === t && r.outputIndex === e
                    }))) < 0 || r >= this.inputs.length) throw new o.Transaction.InvalidIndex(r, this.inputs.length);
                var s = this.inputs[r];
                this.inputs = i.without(this.inputs, s), this._inputAmount = void 0, this._updateChangeOutput()
            }, A.prototype.sign = function(t, e) {
                this.canHaveNoUtxo() || s.checkState(this.hasAllUtxoInfo());
                var r = this;
                return i.isArray(t) ? (i.each(t, (function(t) {
                    r.sign(t, e)
                })), this) : (i.each(this.getSignatures(t, e), (function(t) {
                    r.applySignature(t)
                })), this)
            }, A.prototype.getSignatures = function(t, e) {
                t = new E(t), e = e || f.SIGHASH_ALL;
                var r = this,
                    s = [],
                    n = p.sha256ripemd160(t.publicKey.toBuffer());
                return i.each(this.inputs, (function(o, u) {
                    i.each(o.getSignatures(r, t, u, e, n), (function(t) {
                        s.push(t)
                    }))
                })), s
            }, A.prototype.canHaveNoUtxo = function() {
                return this.isSpecialTransaction() && this.type === A.TYPES.TRANSACTION_SUBTX_TRANSITION
            }, A.prototype.applySignature = function(t) {
                return this.inputs[t.inputIndex].addSignature(this, t), this
            }, A.prototype.isFullySigned = function() {
                return i.each(this.inputs, (function(t) {
                    if (t.isFullySigned === l.prototype.isFullySigned) throw new o.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction")
                })), i.some(i.map(this.inputs, (function(t) {
                    return t.isFullySigned()
                })))
            }, A.prototype.isValidSignature = function(t) {
                if (this.inputs[t.inputIndex].isValidSignature === l.prototype.isValidSignature) throw new o.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction");
                return this.inputs[t.inputIndex].isValidSignature(this, t)
            }, A.prototype.verifySignature = function(t, e, r, i) {
                return d.verify(this, t, e, r, i)
            }, A.prototype.verify = function() {
                if (0 === this.inputs.length) return "transaction txins empty";
                if (0 === this.outputs.length) return "transaction txouts empty";
                for (var t = new T(0), e = 0; e < this.outputs.length; e++) {
                    var r = this.outputs[e];
                    if (r.invalidSatoshis()) return "transaction txout " + e + " satoshis is invalid";
                    if (r._satoshisBN.gt(new T(A.MAX_MONEY, 10))) return "transaction txout " + e + " greater than MAX_MONEY";
                    if ((t = t.add(r._satoshisBN)).gt(new T(A.MAX_MONEY))) return "transaction txout " + e + " total output greater than MAX_MONEY"
                }
                if (this.toBuffer().length > 1e6) return "transaction over the maximum block size";
                var s = {};
                for (e = 0; e < this.inputs.length; e++) {
                    var n = this.inputs[e],
                        o = n.prevTxId + ":" + n.outputIndex;
                    if (!i.isUndefined(s[o])) return "transaction input " + e + " duplicate input";
                    s[o] = !0
                }
                if (this.isCoinbase()) {
                    var u = this.inputs[0]._scriptBuffer;
                    if (u.length < 2 || u.length > 100) return "coinbase transaction script size invalid"
                } else
                    for (e = 0; e < this.inputs.length; e++)
                        if (this.inputs[e].isNull()) return "transaction input " + e + " has null input";
                return !0
            }, A.prototype.isCoinbase = function() {
                return 1 === this.inputs.length && this.inputs[0].isNull()
            }, A.prototype.isRBF = function() {
                for (var t = 0; t < this.inputs.length; t++) {
                    if (this.inputs[t].sequenceNumber < l.MAXINT - 1) return !0
                }
                return !1
            }, A.prototype.enableRBF = function() {
                for (var t = 0; t < this.inputs.length; t++) {
                    var e = this.inputs[t];
                    e.sequenceNumber >= l.MAXINT - 1 && (e.sequenceNumber = l.DEFAULT_RBF_SEQNUMBER)
                }
                return this
            }, A.prototype.isSimpleTransaction = function() {
                return this.inputs.length <= 4
            }, A.prototype.setType = function(t) {
                if (Boolean(this.type)) throw new Error("Type is already set");
                return s.checkArgumentType(t, "number"), this.type = t, this.setExtraPayload(v.create(t)), this
            }, A.prototype.isSpecialTransaction = function() {
                return this.version >= 3 && !!this.type && this.type !== b.TRANSACTION_NORMAL
            }, A.prototype.hasExtraPayload = function() {
                return !!this.extraPayload
            }, A.prototype.setExtraPayload = function(t) {
                if (!Boolean(this.type)) throw new Error("Transaction type is not set");
                if (!v.hasCorrectType(this.type, t)) throw new Error("Payload doesn't match the transaction type");
                return this.extraPayload = t, this
            }, A.prototype.getExtraPayloadSize = function() {
                return v.serializeToBuffer(this.extraPayload).length
            }, A.prototype.addFundingOutput = function(t) {
                var e = (new P).add("OP_RETURN"),
                    r = new O({
                        satoshis: t,
                        script: e
                    });
                return this.addOutput(r), this
            }, t.exports = A
        },
        6551: function(t, e, r) {
            t.exports = r(6056), t.exports.PublicKey = r(9556), t.exports.PublicKeyHash = r(9557), t.exports.MultiSig = r(9558), t.exports.MultiSigScriptHash = r(9559)
        },
        7275: function(t, e, r) {
            "use strict";
            var i = r(5744),
                s = r(5515),
                n = r(5507),
                o = r(5541),
                u = r(6549),
                a = r(5668),
                h = r(5630),
                c = r(5848),
                p = r(5478),
                f = r(53),
                d = r(5615),
                g = r(5503),
                S = r(5484),
                l = function t(e) {
                    return this instanceof t ? (this.chunks = [], g.isBuffer(e) ? t.fromBuffer(e) : e instanceof i ? t.fromAddress(e) : e instanceof t ? t.fromBuffer(e.toBuffer()) : "string" == typeof e ? t.fromString(e) : void(void 0 !== e && this.set(e))) : new t(e)
                };
            l.prototype.set = function(t) {
                return this.chunks = t.chunks || this.chunks, this
            }, l.fromBuffer = function(t) {
                var e = new l;
                e.chunks = [];
                for (var r = new s(t); !r.finished();) try {
                    var i, n, o = r.readUInt8();
                    o > 0 && o < u.OP_PUSHDATA1 ? (i = o, e.chunks.push({
                        buf: r.read(i),
                        len: i,
                        opcodenum: o
                    })) : o === u.OP_PUSHDATA1 ? (i = r.readUInt8(), n = r.read(i), e.chunks.push({
                        buf: n,
                        len: i,
                        opcodenum: o
                    })) : o === u.OP_PUSHDATA2 ? (i = r.readUInt16LE(), n = r.read(i), e.chunks.push({
                        buf: n,
                        len: i,
                        opcodenum: o
                    })) : o === u.OP_PUSHDATA4 ? (i = r.readUInt32LE(), n = r.read(i), e.chunks.push({
                        buf: n,
                        len: i,
                        opcodenum: o
                    })) : e.chunks.push({
                        opcodenum: o
                    })
                } catch (e) {
                    if (e instanceof RangeError) throw new d.Script.InvalidBuffer(t.toString("hex"));
                    throw e
                }
                return e
            }, l.prototype.toBuffer = function() {
                for (var t = new n, e = 0; e < this.chunks.length; e++) {
                    var r = this.chunks[e],
                        i = r.opcodenum;
                    t.writeUInt8(r.opcodenum), r.buf && (i < u.OP_PUSHDATA1 ? t.write(r.buf) : i === u.OP_PUSHDATA1 ? (t.writeUInt8(r.len), t.write(r.buf)) : i === u.OP_PUSHDATA2 ? (t.writeUInt16LE(r.len), t.write(r.buf)) : i === u.OP_PUSHDATA4 && (t.writeUInt32LE(r.len), t.write(r.buf)))
                }
                return t.concat()
            }, l.fromASM = function(t) {
                var e = new l;
                e.chunks = [];
                for (var r = t.split(" "), i = 0; i < r.length;) {
                    var s = r[i],
                        n = u(s).toNumber();
                    if (f.isUndefined(n)) {
                        var o = Buffer.from(r[i], "hex");
                        e.chunks.push({
                            buf: o,
                            len: o.length,
                            opcodenum: o.length
                        }), i += 1
                    } else n === u.OP_PUSHDATA1 || n === u.OP_PUSHDATA2 || n === u.OP_PUSHDATA4 ? (e.chunks.push({
                        buf: Buffer.from(r[i + 2], "hex"),
                        len: parseInt(r[i + 1]),
                        opcodenum: n
                    }), i += 3) : (e.chunks.push({
                        opcodenum: n
                    }), i += 1)
                }
                return e
            }, l.fromHex = function(t) {
                return new l(Buffer.from(t, "hex"))
            }, l.fromString = function(t) {
                if (S.isHexa(t) || 0 === t.length) return new l(Buffer.from(t, "hex"));
                var e = new l;
                e.chunks = [];
                for (var r = t.split(" "), i = 0; i < r.length;) {
                    var s = r[i],
                        n = u(s).toNumber();
                    if (f.isUndefined(n)) {
                        if (!((n = parseInt(s)) > 0 && n < u.OP_PUSHDATA1)) throw new Error("Invalid script: " + JSON.stringify(t));
                        e.chunks.push({
                            buf: Buffer.from(r[i + 1].slice(2), "hex"),
                            len: n,
                            opcodenum: n
                        }), i += 2
                    } else if (n === u.OP_PUSHDATA1 || n === u.OP_PUSHDATA2 || n === u.OP_PUSHDATA4) {
                        if ("0x" !== r[i + 2].slice(0, 2)) throw new Error("Pushdata data must start with 0x");
                        e.chunks.push({
                            buf: Buffer.from(r[i + 2].slice(2), "hex"),
                            len: parseInt(r[i + 1]),
                            opcodenum: n
                        }), i += 3
                    } else e.chunks.push({
                        opcodenum: n
                    }), i += 1
                }
                return e
            }, l.prototype._chunkToString = function(t, e) {
                var r = t.opcodenum,
                    i = "asm" === e,
                    s = "";
                if (t.buf) r !== u.OP_PUSHDATA1 && r !== u.OP_PUSHDATA2 && r !== u.OP_PUSHDATA4 || (s = s + " " + u(r).toString()), t.len > 0 && (s = i ? s + " " + t.buf.toString("hex") : s + " " + t.len + " 0x" + t.buf.toString("hex"));
                else if (void 0 !== u.reverseMap[r]) s = s + " " + u(r).toString();
                else {
                    var n = r.toString(16);
                    n.length % 2 != 0 && (n = "0" + n), s = i ? s + " " + n : s + " 0x" + n
                }
                return s
            }, l.prototype.toASM = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var r = this.chunks[e];
                    t += this._chunkToString(r, "asm")
                }
                return t.substr(1)
            }, l.prototype.toString = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var r = this.chunks[e];
                    t += this._chunkToString(r)
                }
                return t.substr(1)
            }, l.prototype.toHex = function() {
                return this.toBuffer().toString("hex")
            }, l.prototype.inspect = function() {
                return "<Script: " + this.toString() + ">"
            }, l.prototype.isPublicKeyHashOut = function() {
                return !(5 !== this.chunks.length || this.chunks[0].opcodenum !== u.OP_DUP || this.chunks[1].opcodenum !== u.OP_HASH160 || !this.chunks[2].buf || 20 !== this.chunks[2].buf.length || this.chunks[3].opcodenum !== u.OP_EQUALVERIFY || this.chunks[4].opcodenum !== u.OP_CHECKSIG)
            }, l.prototype.isPublicKeyHashIn = function() {
                if (2 === this.chunks.length) {
                    var t = this.chunks[0].buf,
                        e = this.chunks[1].buf;
                    if (t && t.length && 48 === t[0] && e && e.length) {
                        var r = e[0];
                        if ((4 === r || 6 === r || 7 === r) && 65 === e.length) return !0;
                        if ((3 === r || 2 === r) && 33 === e.length) return !0
                    }
                }
                return !1
            }, l.prototype.getPublicKey = function() {
                return p.checkState(this.isPublicKeyOut(), "Can't retrieve PublicKey from a non-PK output"), this.chunks[0].buf
            }, l.prototype.getPublicKeyHash = function() {
                return p.checkState(this.isPublicKeyHashOut(), "Can't retrieve PublicKeyHash from a non-PKH output"), this.chunks[2].buf
            }, l.prototype.isPublicKeyOut = function() {
                if (2 === this.chunks.length && this.chunks[0].buf && this.chunks[0].buf.length && this.chunks[1].opcodenum === u.OP_CHECKSIG) {
                    var t = this.chunks[0].buf,
                        e = t[0],
                        r = !1;
                    if ((4 !== e && 6 !== e && 7 !== e || 65 !== t.length) && (3 !== e && 2 !== e || 33 !== t.length) || (r = !0), r) return a.isValid(t)
                }
                return !1
            }, l.prototype.isPublicKeyIn = function() {
                if (1 === this.chunks.length) {
                    var t = this.chunks[0].buf;
                    if (t && t.length && 48 === t[0]) return !0
                }
                return !1
            }, l.prototype.isScriptHashOut = function() {
                var t = this.toBuffer();
                return 23 === t.length && t[0] === u.OP_HASH160 && 20 === t[1] && t[t.length - 1] === u.OP_EQUAL
            }, l.prototype.isScriptHashIn = function() {
                if (this.chunks.length <= 1) return !1;
                var t, e = this.chunks[this.chunks.length - 1].buf;
                if (!e) return !1;
                try {
                    t = l.fromBuffer(e)
                } catch (t) {
                    if (t instanceof d.Script.InvalidBuffer) return !1;
                    throw t
                }
                return t.classify() !== l.types.UNKNOWN
            }, l.prototype.isMultisigOut = function() {
                return this.chunks.length > 3 && u.isSmallIntOp(this.chunks[0].opcodenum) && this.chunks.slice(1, this.chunks.length - 2).every((function(t) {
                    return t.buf && g.isBuffer(t.buf)
                })) && u.isSmallIntOp(this.chunks[this.chunks.length - 2].opcodenum) && this.chunks[this.chunks.length - 1].opcodenum === u.OP_CHECKMULTISIG
            }, l.prototype.isMultisigIn = function() {
                return this.chunks.length >= 2 && 0 === this.chunks[0].opcodenum && this.chunks.slice(1, this.chunks.length).every((function(t) {
                    return t.buf && g.isBuffer(t.buf) && h.isTxDER(t.buf)
                }))
            }, l.prototype.isDataOut = function() {
                return this.chunks.length >= 1 && this.chunks[0].opcodenum === u.OP_RETURN && (1 === this.chunks.length || 2 === this.chunks.length && this.chunks[1].buf && this.chunks[1].buf.length <= l.OP_RETURN_STANDARD_SIZE && this.chunks[1].length === this.chunks.len)
            }, l.prototype.getData = function() {
                if (this.isDataOut() || this.isScriptHashOut()) return f.isUndefined(this.chunks[1]) ? Buffer.alloc(0) : Buffer.from(this.chunks[1].buf);
                if (this.isPublicKeyHashOut()) return Buffer.from(this.chunks[2].buf);
                throw new Error("Unrecognized script type to get data from")
            }, l.prototype.isPushOnly = function() {
                return f.every(this.chunks, (function(t) {
                    return t.opcodenum <= u.OP_16
                }))
            }, (l.types = {}).UNKNOWN = "Unknown", l.types.PUBKEY_OUT = "Pay to public key", l.types.PUBKEY_IN = "Spend from public key", l.types.PUBKEYHASH_OUT = "Pay to public key hash", l.types.PUBKEYHASH_IN = "Spend from public key hash", l.types.SCRIPTHASH_OUT = "Pay to script hash", l.types.SCRIPTHASH_IN = "Spend from script hash", l.types.MULTISIG_OUT = "Pay to multisig", l.types.MULTISIG_IN = "Spend from multisig", l.types.DATA_OUT = "Data push", l.OP_RETURN_STANDARD_SIZE = 80, l.prototype.classify = function() {
                if (this._isInput) return this.classifyInput();
                if (this._isOutput) return this.classifyOutput();
                var t = this.classifyOutput();
                return t != l.types.UNKNOWN ? t : this.classifyInput()
            }, (l.outputIdentifiers = {}).PUBKEY_OUT = l.prototype.isPublicKeyOut, l.outputIdentifiers.PUBKEYHASH_OUT = l.prototype.isPublicKeyHashOut, l.outputIdentifiers.MULTISIG_OUT = l.prototype.isMultisigOut, l.outputIdentifiers.SCRIPTHASH_OUT = l.prototype.isScriptHashOut, l.outputIdentifiers.DATA_OUT = l.prototype.isDataOut, l.prototype.classifyOutput = function() {
                for (var t in l.outputIdentifiers)
                    if (l.outputIdentifiers[t].bind(this)()) return l.types[t];
                return l.types.UNKNOWN
            }, (l.inputIdentifiers = {}).PUBKEY_IN = l.prototype.isPublicKeyIn, l.inputIdentifiers.PUBKEYHASH_IN = l.prototype.isPublicKeyHashIn, l.inputIdentifiers.MULTISIG_IN = l.prototype.isMultisigIn, l.inputIdentifiers.SCRIPTHASH_IN = l.prototype.isScriptHashIn, l.prototype.classifyInput = function() {
                for (var t in l.inputIdentifiers)
                    if (l.inputIdentifiers[t].bind(this)()) return l.types[t];
                return l.types.UNKNOWN
            }, l.prototype.isStandard = function() {
                return this.classify() !== l.types.UNKNOWN
            }, l.prototype.prepend = function(t) {
                return this._addByType(t, !0), this
            }, l.prototype.equals = function(t) {
                if (p.checkState(t instanceof l, "Must provide another script"), this.chunks.length !== t.chunks.length) return !1;
                var e;
                for (e = 0; e < this.chunks.length; e++) {
                    if (g.isBuffer(this.chunks[e].buf) && !g.isBuffer(t.chunks[e].buf)) return !1;
                    if (g.isBuffer(this.chunks[e].buf) && !g.equals(this.chunks[e].buf, t.chunks[e].buf)) return !1;
                    if (this.chunks[e].opcodenum !== t.chunks[e].opcodenum) return !1
                }
                return !0
            }, l.prototype.add = function(t) {
                return this._addByType(t, !1), this
            }, l.prototype._addByType = function(t, e) {
                if ("string" == typeof t) this._addOpcode(t, e);
                else if ("number" == typeof t) this._addOpcode(t, e);
                else if (t instanceof u) this._addOpcode(t, e);
                else if (g.isBuffer(t)) this._addBuffer(t, e);
                else if (t instanceof l) this.chunks = this.chunks.concat(t.chunks);
                else {
                    if ("object" != typeof t) throw new Error("Invalid script chunk");
                    this._insertAtPosition(t, e)
                }
            }, l.prototype._insertAtPosition = function(t, e) {
                e ? this.chunks.unshift(t) : this.chunks.push(t)
            }, l.prototype._addOpcode = function(t, e) {
                var r;
                return r = "number" == typeof t ? t : t instanceof u ? t.toNumber() : u(t).toNumber(), this._insertAtPosition({
                    opcodenum: r
                }, e), this
            }, l.prototype._addBuffer = function(t, e) {
                var r, i = t.length;
                if (i >= 0 && i < u.OP_PUSHDATA1) r = i;
                else if (i < Math.pow(2, 8)) r = u.OP_PUSHDATA1;
                else if (i < Math.pow(2, 16)) r = u.OP_PUSHDATA2;
                else {
                    if (!(i < Math.pow(2, 32))) throw new Error("You can't push that much data");
                    r = u.OP_PUSHDATA4
                }
                return this._insertAtPosition({
                    buf: t,
                    len: i,
                    opcodenum: r
                }, e), this
            }, l.prototype.removeCodeseparators = function() {
                for (var t = [], e = 0; e < this.chunks.length; e++) this.chunks[e].opcodenum !== u.OP_CODESEPARATOR && t.push(this.chunks[e]);
                return this.chunks = t, this
            }, l.buildMultisigOut = function(t, e, r) {
                p.checkArgument(e <= t.length, "Number of required signatures must be less than or equal to the number of public keys"), r = r || {};
                var i = new l;
                i.add(u.smallInt(e));
                var s = t = f.map(t, a);
                r.noSorting || (s = f.sortBy(t, (function(t) {
                    return t.toString("hex")
                })));
                for (var n = 0; n < s.length; n++) {
                    var o = s[n];
                    i.add(o.toBuffer())
                }
                return i.add(u.smallInt(t.length)), i.add(u.OP_CHECKMULTISIG), i
            }, l.buildMultisigIn = function(t, e, r, i) {
                p.checkArgument(f.isArray(t)), p.checkArgument(f.isNumber(e)), p.checkArgument(f.isArray(r)), i = i || {};
                var s = new l;
                return s.add(u.OP_0), f.each(r, (function(t) {
                    p.checkArgument(g.isBuffer(t), "Signatures must be an array of Buffers"), s.add(t)
                })), s
            }, l.buildP2SHMultisigIn = function(t, e, r, i) {
                p.checkArgument(f.isArray(t)), p.checkArgument(f.isNumber(e)), p.checkArgument(f.isArray(r)), i = i || {};
                var s = new l;
                return s.add(u.OP_0), f.each(r, (function(t) {
                    p.checkArgument(g.isBuffer(t), "Signatures must be an array of Buffers"), s.add(t)
                })), s.add((i.cachedMultisig || l.buildMultisigOut(t, e, i)).toBuffer()), s
            }, l.buildPublicKeyHashOut = function(t) {
                p.checkArgument(!f.isUndefined(t)), p.checkArgument(t instanceof a || t instanceof i || f.isString(t)), t instanceof a ? t = t.toAddress() : f.isString(t) && (t = new i(t));
                var e = new l;
                return e.add(u.OP_DUP).add(u.OP_HASH160).add(t.hashBuffer).add(u.OP_EQUALVERIFY).add(u.OP_CHECKSIG), e._network = t.network, e
            }, l.buildPublicKeyOut = function(t) {
                p.checkArgument(t instanceof a);
                var e = new l;
                return e.add(t.toBuffer()).add(u.OP_CHECKSIG), e
            }, l.buildDataOut = function(t, e) {
                p.checkArgument(f.isUndefined(t) || f.isString(t) || g.isBuffer(t)), f.isString(t) && (t = Buffer.from(t, e));
                var r = new l;
                return r.add(u.OP_RETURN), f.isUndefined(t) || r.add(t), r
            }, l.buildScriptHashOut = function(t) {
                p.checkArgument(t instanceof l || t instanceof i && t.isPayToScriptHash());
                var e = new l;
                return e.add(u.OP_HASH160).add(t instanceof i ? t.hashBuffer : o.sha256ripemd160(t.toBuffer())).add(u.OP_EQUAL), e._network = t._network || t.network, e
            }, l.buildPublicKeyIn = function(t, e) {
                p.checkArgument(t instanceof h || g.isBuffer(t)), p.checkArgument(f.isUndefined(e) || f.isNumber(e)), t instanceof h && (t = t.toBuffer());
                var r = new l;
                return r.add(g.concat([t, g.integerAsSingleByteBuffer(e || h.SIGHASH_ALL)])), r
            }, l.buildPublicKeyHashIn = function(t, e, r) {
                return p.checkArgument(e instanceof h || g.isBuffer(e)), p.checkArgument(f.isUndefined(r) || f.isNumber(r)), e instanceof h && (e = e.toBuffer()), (new l).add(g.concat([e, g.integerAsSingleByteBuffer(r || h.SIGHASH_ALL)])).add(new a(t).toBuffer())
            }, l.empty = function() {
                return new l
            }, l.prototype.toScriptHashOut = function() {
                return l.buildScriptHashOut(this)
            }, l.fromAddress = function(t) {
                if ((t = i(t)).isPayToScriptHash()) return l.buildScriptHashOut(t);
                if (t.isPayToPublicKeyHash()) return l.buildPublicKeyHashOut(t);
                throw new d.Script.UnrecognizedAddress(t)
            }, l.prototype.getAddressInfo = function(t) {
                if (this._isInput) return this._getInputAddressInfo();
                if (this._isOutput) return this._getOutputAddressInfo();
                var e = this._getOutputAddressInfo();
                return e || this._getInputAddressInfo()
            }, l.prototype._getOutputAddressInfo = function() {
                var t = {};
                if (this.isScriptHashOut()) t.hashBuffer = this.getData(), t.type = i.PayToScriptHash;
                else {
                    if (!this.isPublicKeyHashOut()) return !1;
                    t.hashBuffer = this.getData(), t.type = i.PayToPublicKeyHash
                }
                return t
            }, l.prototype._getInputAddressInfo = function() {
                var t = {};
                if (this.isPublicKeyHashIn()) t.hashBuffer = o.sha256ripemd160(this.chunks[1].buf), t.type = i.PayToPublicKeyHash;
                else {
                    if (!this.isScriptHashIn()) return !1;
                    t.hashBuffer = o.sha256ripemd160(this.chunks[this.chunks.length - 1].buf), t.type = i.PayToScriptHash
                }
                return t
            }, l.prototype.toAddress = function(t) {
                var e = this.getAddressInfo();
                return !!e && (e.network = c.get(t) || this._network || c.defaultNetwork, new i(e))
            }, l.prototype.findAndDelete = function(t) {
                for (var e = t.toBuffer().toString("hex"), r = 0; r < this.chunks.length; r++) {
                    e === l({
                        chunks: [this.chunks[r]]
                    }).toBuffer().toString("hex") && this.chunks.splice(r, 1)
                }
                return this
            }, l.prototype.checkMinimalPush = function(t) {
                var e = this.chunks[t],
                    r = e.buf,
                    i = e.opcodenum;
                return !r || (0 === r.length ? i === u.OP_0 : 1 === r.length && r[0] >= 1 && r[0] <= 16 ? i === u.OP_1 + (r[0] - 1) : 1 === r.length && 129 === r[0] ? i === u.OP_1NEGATE : r.length <= 75 ? i === r.length : r.length <= 255 ? i === u.OP_PUSHDATA1 : !(r.length <= 65535) || i === u.OP_PUSHDATA2)
            }, l.prototype._decodeOP_N = function(t) {
                if (t === u.OP_0) return 0;
                if (t >= u.OP_1 && t <= u.OP_16) return t - (u.OP_1 - 1);
                throw new Error("Invalid opcode: " + JSON.stringify(t))
            }, l.prototype.getSignatureOperationsCount = function(t) {
                t = !!f.isUndefined(t) || t;
                var e = this,
                    r = 0,
                    i = u.OP_INVALIDOPCODE;
                return f.each(e.chunks, (function(s) {
                    var n = s.opcodenum;
                    n == u.OP_CHECKSIG || n == u.OP_CHECKSIGVERIFY ? r++ : n != u.OP_CHECKMULTISIG && n != u.OP_CHECKMULTISIGVERIFY || (t && i >= u.OP_1 && i <= u.OP_16 ? r += e._decodeOP_N(i) : r += 20), i = n
                })), r
            }, t.exports = l
        },
        7276: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5478),
                n = r(5484),
                o = r(5606),
                u = r(5744),
                a = r(6552);

            function h(t) {
                if (!(this instanceof h)) return new h(t);
                s.checkArgument(i.isObject(t), "Must provide an object from where to extract data");
                var e = t.address ? new u(t.address) : void 0,
                    r = t.txid ? t.txid : t.txId;
                if (!r || !n.isHexaString(r) || r.length > 64) throw new Error("Invalid TXID in object", t);
                var c = i.isUndefined(t.vout) ? t.outputIndex : t.vout;
                if (!i.isNumber(c)) throw new Error("Invalid outputIndex, received " + c);
                s.checkArgument(!i.isUndefined(t.scriptPubKey) || !i.isUndefined(t.script), "Must provide the scriptPubKey for that output!");
                var p = new o(t.scriptPubKey || t.script);
                s.checkArgument(!i.isUndefined(t.amount) || !i.isUndefined(t.satoshis), "Must provide an amount for the output");
                var f = i.isUndefined(t.amount) ? t.satoshis : new a.fromBTC(t.amount).toSatoshis();
                s.checkArgument(i.isNumber(f), "Amount must be a number"), n.defineImmutable(this, {
                    address: e,
                    txId: r,
                    outputIndex: c,
                    script: p,
                    satoshis: f
                })
            }
            h.prototype.inspect = function() {
                return "<UnspentOutput: " + this.txId + ":" + this.outputIndex + ", satoshis: " + this.satoshis + ", address: " + this.address + ">"
            }, h.prototype.toString = function() {
                return this.txId + ":" + this.outputIndex
            }, h.fromObject = function(t) {
                return new h(t)
            }, h.prototype.toObject = h.prototype.toJSON = function() {
                return {
                    address: this.address ? this.address.toString() : void 0,
                    txid: this.txId,
                    vout: this.outputIndex,
                    scriptPubKey: this.script.toBuffer().toString("hex"),
                    amount: a.fromSatoshis(this.satoshis).toBTC()
                }
            }, t.exports = h
        },
        7277: function(t, e, r) {
            var i = r(9560);
            i.ProRegTxPayload = r(7285), i.ProUpRegTxPayload = r(7287), i.ProUpRevTxPayload = r(7288), i.ProTxUpServPayload = r(7286), i.SubTxCloseAccountPayload = r(7278), i.SubTxRegisterPayload = r(7279), i.SubTxResetKeyPayload = r(7280), i.SubTxTopupPayload = r(7281), i.SubTxTransitionPayload = r(7282), i.CoinbasePayload = r(7283), i.constants = r(5540), i.CommitmentTxPayload = r(7284), t.exports = i
        },
        7278: function(t, e, r) {
            var i = r(5540),
                s = r(5478),
                n = r(5507),
                o = r(5515),
                u = r(5652),
                a = r(5484),
                h = r(5743),
                c = r(6054),
                p = a.isUnsignedInteger,
                f = a.isSha256HexString,
                d = a.isHexaString,
                g = i.SHA256_HASH_SIZE;

            function S(t) {
                u.call(this), t ? (this.version = t.version, this.regTxHash = t.regTxHash, this.hashPrevSubTx = t.hashPrevSubTx, this.creditFee = t.creditFee, this.newPubKey = t.newPubKey, this.payloadSigSize = 0, t.payloadSig && (this.payloadSig = t.payloadSig, this.payloadSigSize = Number(this.payloadSig.length) / 2), this.validate()) : this.version = 1
            }
            S.prototype = Object.create(u.prototype), S.prototype.constructor = u, S.fromBuffer = function(t) {
                var e = new o(t),
                    r = new S;
                if (r.version = e.readUInt16LE(), r.regTxHash = e.read(g).reverse().toString("hex"), r.hashPrevSubTx = e.read(g).reverse().toString("hex"), r.creditFee = e.readUInt64LEBN().toNumber(), r.payloadSigSize = e.readVarintNum(), e.finished() || (r.payloadSig = e.read(r.payloadSigSize).reverse().toString("hex")), !e.finished()) throw new Error("Failed to parse payload: raw payload is bigger than expected.");
                return r.validate(), r
            }, S.fromJSON = function(t) {
                return new S(t)
            }, S.convertPrivateKeyToPubKeyId = function(t) {
                return "string" == typeof t && (t = new h(t)), t.toPublicKey()._getID()
            }, S.prototype.validate = function() {
                return s.checkArgumentType(this.version, "number", "version"), s.checkArgumentType(this.creditFee, "number", "creditFee"), s.checkArgument(p(this.version), "Expect version to be an unsigned integer"), s.checkArgument(f(this.regTxHash), "Expect regTxHash to be a hex string representing sha256 hash"), s.checkArgument(f(this.hashPrevSubTx), "Expect hashPrevSubTx to be a hex string representing sha256 hash"), this.payloadSig && 0 !== this.payloadSigSize && (s.checkArgumentType(this.payloadSigSize, "number", "payloadSigSize"), s.checkArgument(d(this.payloadSig), "expect payloadSig to be a hex string but got " + typeof this.payloadSig), s.checkArgument(p(this.payloadSigSize), "Expect payloadSigSize to be an unsigned integer"), s.checkArgument(this.payloadSigSize === i.COMPACT_SIGNATURE_SIZE, "Invalid payloadSigSize size"), s.checkArgument(this.payloadSig.length === 2 * i.COMPACT_SIGNATURE_SIZE, "Invalid Argument: Invalid payloadSigSize size")), !0
            }, S.prototype.setRegTxHash = function(t) {
                return this.regTxHash = t, this
            }, S.prototype.setPrevSubTxHash = function(t) {
                return this.hashPrevSubTx = t, this
            }, S.prototype.setCreditFee = function(t) {
                return this.creditFee = t, this
            }, S.prototype.toJSON = function(t) {
                var e = t && t.skipSignature || !1;
                this.validate();
                var r = {
                    version: this.version,
                    regTxHash: this.regTxHash,
                    hashPrevSubTx: this.hashPrevSubTx,
                    creditFee: this.creditFee
                };
                return e || (r.payloadSigSize = this.payloadSigSize, r.payloadSig = this.payloadSig), r
            }, S.prototype.toBuffer = function(t) {
                var e = t && t.skipSignature || !1;
                this.validate();
                var r = new n;
                return r.writeUInt16LE(this.version), r.write(Buffer.from(this.regTxHash, "hex").reverse()), r.write(Buffer.from(this.hashPrevSubTx, "hex").reverse()), r.writeUInt64LEBN(new c(this.creditFee)), e ? r.writeVarintNum(0) : (r.writeVarintNum(this.payloadSigSize), r.write(Buffer.from(this.payloadSig, "hex").reverse())), r.toBuffer()
            }, t.exports = S
        },
        7279: function(t, e, r) {
            var i = r(5484),
                s = r(5540),
                n = r(5478),
                o = r(5503),
                u = r(5507),
                a = r(5515),
                h = r(5743),
                c = r(5652),
                p = i.isHexaString,
                f = s.PUBKEY_ID_SIZE;

            function d() {
                c.call(this), this.version = 1
            }
            d.prototype = Object.create(c.prototype), d.prototype.constructor = c, d.serializeJSONToBuffer = function(t) {
                d.validatePayloadJSON(t);
                var e = new u,
                    r = Buffer.from(t.userName, "utf8");
                if (e.writeUInt16LE(t.version).writeVarintNum(r.length).write(r).write(t.pubKeyId), t.payloadSig) {
                    var i = Buffer.from(t.payloadSig, "hex");
                    e.writeVarintNum(i.length), e.write(i)
                } else e.writeVarintNum(s.EMPTY_SIGNATURE_SIZE);
                return e.toBuffer()
            }, d.fromBuffer = function(t) {
                var e = new a(t),
                    r = new d,
                    i = 0;
                r.version = e.readUInt16LE();
                var s = e.readVarintNum();
                return r.userName = e.read(s).toString(), r.pubKeyId = e.read(f), e.finished() || (i = e.readVarintNum()), i > 0 && (r.payloadSigSize = i, r.payloadSig = e.read(i).toString("hex")), d.validatePayloadJSON(r.toJSON()), r
            }, d.fromJSON = function(t) {
                d.validatePayloadJSON(t);
                var e = new d;
                return e.version = t.version, e.setUserName(t.userName), e.setPubKeyId(t.pubKeyId), t.payloadSig && (e.payloadSig = t.payloadSig), t.payloadSigSize && (e.payloadSigSize = t.payloadSigSize), e
            }, d.validatePayloadJSON = function(t) {
                if (!t) throw new Error("No Payload specified");
                n.checkArgumentType(t.version, "number", "version"), n.checkArgument(o.isBuffer(t.pubKeyId), "expect pubKeyId to be a Buffer but got " + typeof t.pubKeyId), n.checkArgument(t.pubKeyId.length === s.PUBKEY_ID_SIZE, "Invalid pubKeyId size"), n.checkArgumentType(t.userName, "string", "userName"), n.checkArgument(t.userName.length > 1, "userName is too short"), t.payloadSig && (n.checkArgument(p(t.payloadSig), "expect payloadSig to be a hex string but got " + typeof t.payloadSig), n.checkArgument(t.payloadSig.length === 2 * s.COMPACT_SIGNATURE_SIZE, "Invalid payloadSig size"))
            }, d.convertPrivateKeyToPubKeyId = function(t) {
                return "string" == typeof t && (t = new h(t)), t.toPublicKey()._getID()
            }, d.prototype.setUserName = function(t) {
                return this.userName = t, this
            }, d.prototype.setPubKeyId = function(t) {
                return this.pubKeyId = o.copy(t), this
            }, d.prototype.setPubKeyIdFromPrivateKey = function(t) {
                return this.setPubKeyId(d.convertPrivateKeyToPubKeyId(t)), this
            }, d.prototype.toJSON = function(t) {
                var e = t && t.skipSignature,
                    r = {
                        version: this.version,
                        userName: this.userName,
                        pubKeyId: this.pubKeyId
                    };
                return e || (r.payloadSig = this.payloadSig, r.payloadSigSize = this.payloadSigSize), d.validatePayloadJSON(r), r
            }, d.prototype.toBuffer = function(t) {
                return d.serializeJSONToBuffer(this.toJSON(t))
            }, t.exports = d
        },
        7280: function(t, e, r) {
            var i = r(5540),
                s = r(5478),
                n = r(5503),
                o = r(5507),
                u = r(5515),
                a = r(5652),
                h = r(5484),
                c = r(5743),
                p = r(6054),
                f = h.isUnsignedInteger,
                d = h.isSha256HexString,
                g = h.isHexaString,
                S = i.SHA256_HASH_SIZE,
                l = i.PUBKEY_ID_SIZE;

            function y(t) {
                a.call(this), t ? (this.version = t.version, this.regTxHash = t.regTxHash, this.hashPrevSubTx = t.hashPrevSubTx, this.creditFee = t.creditFee, this.newPubKey = t.newPubKey, this.payloadSigSize = 0, t.payloadSig && (this.payloadSig = t.payloadSig, this.payloadSigSize = Number(this.payloadSig.length) / 2), this.validate()) : this.version = 1
            }
            y.prototype = Object.create(a.prototype), y.prototype.constructor = a, y.fromBuffer = function(t) {
                var e = new u(t),
                    r = new y;
                if (r.version = e.readUInt16LE(), r.regTxHash = e.read(S).reverse().toString("hex"), r.hashPrevSubTx = e.read(S).reverse().toString("hex"), r.creditFee = e.readUInt64LEBN().toNumber(), r.newPubKey = e.read(l), r.payloadSigSize = e.readVarintNum(), e.finished() || (r.payloadSig = e.read(r.payloadSigSize).reverse().toString("hex")), !e.finished()) throw new Error("Failed to parse payload: raw payload is bigger than expected.");
                return r.validate(), r
            }, y.fromJSON = function(t) {
                return new y(t)
            }, y.convertPrivateKeyToPubKeyId = function(t) {
                return "string" == typeof t && (t = new c(t)), t.toPublicKey()._getID()
            }, y.prototype.validate = function() {
                return s.checkArgumentType(this.version, "number", "version"), s.checkArgumentType(this.creditFee, "number", "creditFee"), s.checkArgument(f(this.version), "Expect version to be an unsigned integer"), s.checkArgument(d(this.regTxHash), "Expect regTxHash to be a hex string representing sha256 hash"), s.checkArgument(d(this.hashPrevSubTx), "Expect hashPrevSubTx to be a hex string representing sha256 hash"), s.checkArgument(f(this.creditFee), "Expect creditFee to be an unsigned integer"), s.checkArgument(n.isBuffer(this.newPubKey), "expect newPubKey to be a Buffer but got " + typeof this.newPubKey), this.payloadSig && 0 !== this.payloadSigSize && (s.checkArgumentType(this.payloadSigSize, "number", "payloadSigSize"), s.checkArgument(g(this.payloadSig), "expect payloadSig to be a hex string but got " + typeof this.payloadSig), s.checkArgument(f(this.payloadSigSize), "Expect payloadSigSize to be an unsigned integer"), s.checkArgument(this.payloadSigSize === i.COMPACT_SIGNATURE_SIZE, "Invalid payloadSigSize size"), s.checkArgument(this.payloadSig.length === 2 * i.COMPACT_SIGNATURE_SIZE, "Invalid Argument: Invalid payloadSigSize size")), !0
            }, y.prototype.setRegTxHash = function(t) {
                return this.regTxHash = t, this
            }, y.prototype.setPrevSubTxHash = function(t) {
                return this.hashPrevSubTx = t, this
            }, y.prototype.setCreditFee = function(t) {
                return this.creditFee = t, this
            }, y.prototype.setNewPubKeyId = function(t) {
                return this.newPubKey = n.copy(t), this
            }, y.prototype.setPubKeyIdFromPrivateKey = function(t) {
                return this.setNewPubKeyId(y.convertPrivateKeyToPubKeyId(t)), this
            }, y.prototype.toJSON = function(t) {
                var e = t && t.skipSignature || !1;
                this.validate();
                var r = {
                    version: this.version,
                    regTxHash: this.regTxHash,
                    hashPrevSubTx: this.hashPrevSubTx,
                    creditFee: this.creditFee,
                    newPubKey: this.newPubKey
                };
                return e || (r.payloadSigSize = this.payloadSigSize, r.payloadSig = this.payloadSig), r
            }, y.prototype.toBuffer = function(t) {
                var e = t && t.skipSignature || !1;
                this.validate();
                var r = new o;
                return r.writeUInt16LE(this.version), r.write(Buffer.from(this.regTxHash, "hex").reverse()), r.write(Buffer.from(this.hashPrevSubTx, "hex").reverse()), r.writeUInt64LEBN(new p(this.creditFee)), r.write(this.newPubKey), e ? r.writeVarintNum(0) : (r.writeVarintNum(this.payloadSigSize), r.write(Buffer.from(this.payloadSig, "hex").reverse())), r.toBuffer()
            }, t.exports = y
        },
        7281: function(t, e, r) {
            var i = r(5540),
                s = r(5478),
                n = r(5507),
                o = r(5515),
                u = r(5652),
                a = r(5484),
                h = a.isUnsignedInteger,
                c = a.isSha256HexString,
                p = i.SHA256_HASH_SIZE;

            function f(t) {
                u.call(this), t ? (this.version = t.version, this.regTxHash = t.regTxHash, this.validate()) : this.version = 1
            }
            f.prototype = Object.create(u.prototype), f.prototype.constructor = u, f.fromBuffer = function(t) {
                var e = new o(t),
                    r = new f;
                if (r.version = e.readUInt16LE(), r.regTxHash = e.read(p).reverse().toString("hex"), !e.finished()) throw new Error("Failed to parse payload: raw payload is bigger than expected.");
                return r.validate(), r
            }, f.fromJSON = function(t) {
                return new f(t)
            }, f.prototype.validate = function() {
                return s.checkArgument(h(this.version), "Expect version to be an unsigned integer"), s.checkArgument(c(this.regTxHash), "Expect regTxHash to be a hex string representing sha256 hash"), !0
            }, f.prototype.toJSON = function() {
                return this.validate(), {
                    version: this.version,
                    regTxHash: this.regTxHash
                }
            }, f.prototype.toBuffer = function() {
                this.validate();
                var t = new n;
                return t.writeUInt16LE(this.version), t.write(Buffer.from(this.regTxHash, "hex").reverse()), t.toBuffer()
            }, f.prototype.copy = function() {
                return f.fromJSON(this.toJSON())
            }, t.exports = f
        },
        7282: function(t, e, r) {
            var i = r(5540),
                s = (i = r(5540), r(5478)),
                n = r(5507),
                o = r(5515),
                u = r(5652),
                a = r(5484),
                h = r(6054),
                c = a.isUnsignedInteger,
                p = a.isHexaString,
                f = i.SHA256_HASH_SIZE;

            function d() {
                u.call(this), this.version = 1
            }
            d.prototype = Object.create(u.prototype), d.prototype.constructor = u, d.serializeJSONToBuffer = function(t) {
                var e = new n;
                if (e.writeUInt16LE(t.version).write(Buffer.from(t.regTxId, "hex").reverse()).write(Buffer.from(t.hashPrevSubTx, "hex").reverse()).writeUInt64LEBN(new h(t.creditFee)).write(Buffer.from(t.hashSTPacket, "hex").reverse()), t.payloadSig) {
                    var r = Buffer.from(t.payloadSig, "hex");
                    e.writeVarintNum(r.length), e.write(r)
                } else e.writeVarintNum(i.EMPTY_SIGNATURE_SIZE);
                return e.toBuffer()
            }, d.fromBuffer = function(t) {
                var e = new o(t),
                    r = new d,
                    i = 0;
                return r.version = e.readUInt16LE(), r.setRegTxId(e.read(f).reverse().toString("hex")).setHashPrevSubTx(e.read(f).reverse().toString("hex")).setCreditFee(e.readUInt64LEBN().toNumber()).setHashSTPacket(e.read(f).reverse().toString("hex")), e.finished() || (i = e.readVarintNum()), i > 0 && (r.payloadSigSize = i, r.payloadSig = e.read(i).toString("hex")), d.validatePayloadJSON(r.toJSON()), r
            }, d.fromJSON = function(t) {
                var e = new d;
                return e.version = t.version, e.setHashSTPacket(t.hashSTPacket).setCreditFee(t.creditFee).setRegTxId(t.regTxId).setHashPrevSubTx(t.hashPrevSubTx), t.payloadSig && (e.payloadSig = t.payloadSig), t.payloadSigSize && (e.payloadSigSize = t.payloadSigSize), d.validatePayloadJSON(e.toJSON()), e
            }, d.validatePayloadJSON = function(t) {
                if (!t) throw new Error("No Payload specified");
                s.checkArgumentType(t.version, "number", "version"), s.checkArgumentType(t.creditFee, "number", "creditFee"), s.checkArgument(c(t.version), "Expect version to be an unsigned integer"), s.checkArgument(c(t.creditFee), "Expect creditFee to be an unsigned integer"), s.checkArgument(p(t.regTxId), "expect regTxId to be a hex string but got " + typeof t.regTxId), s.checkArgument(t.regTxId.length === 2 * i.SHA256_HASH_SIZE, "Invalid regTxId size"), s.checkArgument(p(t.hashPrevSubTx), "expect hashPrevSubTx to be a hex string but got " + typeof t.hashPrevSubTx), s.checkArgument(t.hashPrevSubTx.length === 2 * i.SHA256_HASH_SIZE, "Invalid hashPrevSubTx size"), s.checkArgument(p(t.hashSTPacket), "expect hashSTPacket to be a hex string but got " + typeof t.hashSTPacket), s.checkArgument(t.hashSTPacket.length === 2 * i.SHA256_HASH_SIZE, "Invalid hashSTPacket size"), t.payloadSig && (s.checkArgument(p(t.payloadSig), "expect payloadSig to be a hex string but got " + typeof t.payloadSig), s.checkArgument(t.payloadSig.length === 2 * i.COMPACT_SIGNATURE_SIZE, "Invalid payloadSig size"))
            }, d.prototype.validate = function() {
                return d.validatePayloadJSON(this.toJSON())
            }, d.prototype.setRegTxId = function(t) {
                return this.regTxId = t, this
            }, d.prototype.setHashPrevSubTx = function(t) {
                return this.hashPrevSubTx = t, this
            }, d.prototype.setHashSTPacket = function(t) {
                return this.hashSTPacket = t, this
            }, d.prototype.setCreditFee = function(t) {
                return this.creditFee = t, this
            }, d.prototype.toJSON = function(t) {
                var e = Boolean(t && t.skipSignature) || !Boolean(this.payloadSig),
                    r = {
                        version: this.version,
                        regTxId: this.regTxId,
                        hashPrevSubTx: this.hashPrevSubTx,
                        creditFee: this.creditFee,
                        hashSTPacket: this.hashSTPacket
                    };
                return e || (r.payloadSig = this.payloadSig, r.payloadSigSize = this.payloadSigSize), d.validatePayloadJSON(r), r
            }, d.prototype.toBuffer = function(t) {
                return d.serializeJSONToBuffer(this.toJSON(t))
            }, d.prototype.copy = function() {
                return d.fromJSON(this.toJSON())
            }, t.exports = d
        },
        7283: function(t, e, r) {
            var i = r(5540),
                s = r(5478),
                n = r(5507),
                o = r(5515),
                u = r(5652),
                a = r(5484),
                h = a.isUnsignedInteger,
                c = a.isHexaString,
                p = i.SHA256_HASH_SIZE;

            function f() {
                u.call(this), this.version = 1
            }
            f.prototype = Object.create(u.prototype), f.prototype.constructor = u, f.fromBuffer = function(t) {
                var e = new o(t),
                    r = new f;
                if (r.version = e.readUInt16LE(), r.height = e.readUInt32LE(), r.merkleRootMNList = e.read(p).reverse().toString("hex"), !e.finished()) throw new Error("Failed to parse payload: raw payload is bigger than expected.");
                return r.validate(), r
            }, f.fromJSON = function(t) {
                var e = new f;
                return e.version = t.version, e.height = t.height, e.merkleRootMNList = t.merkleRootMNList, e.validate(), e
            }, f.prototype.validate = function() {
                return s.checkArgument(h(this.version), "Expect version to be an unsigned integer"), s.checkArgument(h(this.height), "Expect height to be an unsigned integer"), s.checkArgument(c(this.merkleRootMNList), "expect merkleRootMNList to be a hex string but got " + typeof this.merkleRootMNList), s.checkArgument(this.merkleRootMNList.length === 2 * i.SHA256_HASH_SIZE, "Invalid merkleRootMNList size"), !0
            }, f.prototype.toJSON = function() {
                return this.validate(), {
                    version: this.version,
                    height: this.height,
                    merkleRootMNList: this.merkleRootMNList
                }
            }, f.prototype.toBuffer = function() {
                this.validate();
                var t = new n;
                return t.writeUInt16LE(this.version).writeUInt32LE(this.height).write(Buffer.from(this.merkleRootMNList, "hex").reverse()), t.toBuffer()
            }, f.prototype.copy = function() {
                return f.fromJSON(this.toJSON())
            }, t.exports = f
        },
        7284: function(t, e, r) {
            var i = r(5484),
                s = r(5540),
                n = r(5478),
                o = r(5507),
                u = r(5515),
                a = r(5652);
            r(5606);

            function h(t) {
                a.call(this), this.version = 1, t && (this.height = t.height, this.qfcVersion = t.qfcVersion, this.llmqtype = t.llmqtype, this.quorumHash = t.quorumHash, this.signers = t.signers, this.validMembers = t.validMembers, this.quorumPublicKey = t.quorumPublicKey, this.quorumVvecHash = t.quorumVvecHash, this.quorumSig = t.quorumSig, this.sig = t.sig)
            }
            h.prototype = Object.create(a.prototype), h.prototype.constructor = a, h.fromBuffer = function(t) {
                var e = new u(t),
                    r = new h;
                if (r.version = e.readUInt16LE(), r.height = e.readInt32LE(), r.qfcVersion = e.readUInt16LE(), r.llmqtype = e.readUInt8(), r.quorumHash = e.read(s.SHA256_HASH_SIZE).toString("hex"), r.signersSize = e.readVarintNum(), r.signers = e.read(Math.floor((r.signersSize + 7) / 8)).toString("hex"), r.validMembersSize = e.readVarintNum(), r.validMembers = e.read(Math.floor((r.validMembersSize + 7) / 8)).toString("hex"), r.quorumPublicKey = e.read(s.BLS_PUBLIC_KEY_SIZE).toString("hex"), r.quorumVvecHash = e.read(s.SHA256_HASH_SIZE).toString("hex"), r.quorumSig = e.read(s.BLS_SIGNATURE_SIZE).toString("hex"), r.sig = e.read(s.BLS_SIGNATURE_SIZE).toString("hex"), !e.finished()) throw new Error("Failed to parse payload: raw payload is bigger than expected.");
                return r
            }, h.fromJSON = function(t) {
                var e = new h(t);
                return e.validate(), e
            }, h.prototype.validate = function() {
                n.checkArgument(i.isUnsignedInteger(this.version), "Expect version to be an unsigned integer"), n.checkArgument(i.isUnsignedInteger(this.height), "Expect height to be an unsigned integer"), n.checkArgument(i.isUnsignedInteger(this.qfcVersion), "Expect qfcVersion to be an unsigned integer"), n.checkArgument(i.isUnsignedInteger(this.llmqtype), "Expect llmqtype to be an unsigned integer"), n.checkArgument(i.isHexaString(this.quorumHash), "Expect quorumHash to be a hex string"), n.checkArgument(i.isHexaString(this.signers), "Expect signers to be a hex string"), n.checkArgument(i.isHexaString(this.validMembers), "Expect validMembers to be a hex string"), n.checkArgument(i.isHexaString(this.quorumPublicKey), "Expect quorumPublicKey to be a hex string"), n.checkArgument(i.isHexaString(this.quorumVvecHash), "Expect quorumVvecHash to be a hex string"), n.checkArgument(i.isHexaString(this.quorumSig), "Expect quorumSig to be a hex string"), n.checkArgument(i.isHexaString(this.sig), "Expect sig to be a hex string")
            }, h.prototype.toJSON = function(t) {
                return this.validate(), {
                    version: this.version,
                    height: this.height,
                    qfcVersion: this.qfcVersion,
                    llmqtype: this.llmqtype,
                    quorumHash: this.quorumHash,
                    signerSize: this.signerSize,
                    signers: this.signers,
                    validMembersSize: this.validMembersSize,
                    validMembers: this.validMembers,
                    quorumPublicKey: this.quorumPublicKey,
                    quorumVvecHash: this.quorumVvecHash,
                    quorumSig: this.quorumSig,
                    sig: this.sig
                }
            }, h.prototype.toBuffer = function(t) {
                this.validate();
                var e = 50,
                    r = 50;
                switch (this.llmqtype) {
                    case 1:
                        e = 50, r = 50;
                        break;
                    case 2:
                    case 3:
                        e = 400, r = 400;
                        break;
                    case 100:
                        e = 10, r = 10;
                        break;
                    default:
                        throw new Error("Invalid llmq type " + this.llmqtype)
                }
                var i = new o;
                return i.writeUInt16LE(this.version).writeUInt32LE(this.height).writeUInt16LE(this.qfcVersion).writeUInt8(this.llmqtype).write(Buffer.from(this.quorumHash, "hex")).writeVarintNum(e).write(Buffer.from(this.signers, "hex")).writeVarintNum(r).write(Buffer.from(this.validMembers, "hex")).write(Buffer.from(this.quorumPublicKey, "hex")).write(Buffer.from(this.quorumVvecHash, "hex")).write(Buffer.from(this.quorumSig, "hex")).write(Buffer.from(this.sig, "hex")), i.toBuffer()
            }, h.prototype.copy = function() {
                return h.fromBuffer(this.toBuffer())
            }, t.exports = h
        },
        7285: function(t, e, r) {
            var i = r(5484),
                s = r(5540),
                n = r(5478),
                o = r(5507),
                u = r(5515),
                a = r(5652),
                h = r(5606),
                c = r(6553);

            function p(t) {
                a.call(this), this.version = 1, t && (this.type = t.type, this.mode = t.mode, this.collateralHash = t.collateralHash, this.collateralIndex = t.collateralIndex, this.service = t.service, this.keyIDOwner = t.keyIDOwner, this.pubKeyOperator = t.pubKeyOperator, this.keyIDVoting = t.keyIDVoting, this.operatorReward = t.operatorReward, this.scriptPayout = h.fromAddress(t.payoutAddress).toHex(), this.inputsHash = t.inputsHash, this.payloadSig = t.payloadSig, this.payloadSigSize = this.payloadSig ? s.BLS_SIGNATURE_SIZE : 0)
            }
            p.prototype = Object.create(a.prototype), p.prototype.constructor = a, p.fromBuffer = function(t) {
                var e = new u(t),
                    r = new p;
                r.version = e.readUInt16LE(), r.type = e.readUInt16LE(), r.mode = e.readUInt16LE(), r.collateralHash = e.read(s.SHA256_HASH_SIZE).reverse().toString("hex"), r.collateralIndex = e.readUInt32LE(), r.service = c.bufferToIPAndPort(e.read(c.IP_AND_PORT_SIZE)), r.keyIDOwner = e.read(s.PUBKEY_ID_SIZE).reverse().toString("hex"), r.pubKeyOperator = e.read(s.BLS_PUBLIC_KEY_SIZE).toString("hex"), r.keyIDVoting = e.read(s.PUBKEY_ID_SIZE).reverse().toString("hex"), r.operatorReward = e.readUInt16LE();
                var i = e.readVarintNum();
                if (r.scriptPayout = e.read(i).toString("hex"), r.inputsHash = e.read(s.SHA256_HASH_SIZE).reverse().toString("hex"), r.payloadSigSize = e.readVarintNum(), r.payloadSigSize > 0 && (r.payloadSig = e.read(r.payloadSigSize).toString("hex")), !e.finished()) throw new Error("Failed to parse payload: raw payload is bigger than expected.");
                return r
            }, p.fromJSON = function(t) {
                var e = new p(t);
                return e.validate(), e
            }, p.prototype.validate = function() {
                if (n.checkArgument(i.isUnsignedInteger(this.version), "Expect version to be an unsigned integer"), n.checkArgumentType(this.collateralIndex, "number", "collateralIndex"), n.checkArgument(i.isSha256HexString(this.collateralHash), "Expect collateralHash to be a hex string representing sha256 hash"), c.isZeroAddress(this.service) || n.checkArgument(c.isIPV4(this.service), "Expected service to be a string with ip address and port"), n.checkArgument(i.isHexaString(this.keyIDOwner), "Expect keyIDOwner to be a hex string"), n.checkArgument(i.isHexaString(this.pubKeyOperator), "Expect pubKeyOperator to be a hex string"), n.checkArgument(i.isHexaString(this.keyIDVoting), "Expect keyIDVoting to be a hex string"), n.checkArgument(this.keyIDOwner.length === 2 * s.PUBKEY_ID_SIZE, "Expect keyIDOwner to be 20 bytes in size "), n.checkArgument(this.pubKeyOperator.length === 2 * s.BLS_PUBLIC_KEY_SIZE, "Expect keyIDOwner to be 48 bytes in size "), n.checkArgument(this.keyIDVoting.length === 2 * s.PUBKEY_ID_SIZE, "Expect keyIDOwner to be 20 bytes in size "), n.checkArgumentType(this.operatorReward, "number", "operatorReward"), n.checkArgument(this.operatorReward <= 1e4, "Expect operatorReward to be lesser than or equal 10000"), n.checkArgument(i.isHexaString(this.inputsHash), "Expect inputsHash to be a hex string"), this.scriptPayout) {
                    var t = new h(this.scriptPayout);
                    n.checkArgument(t.isPublicKeyHashOut() || t.isScriptHashOut(), "Expected scriptOperatorPayout to be a p2pkh/p2sh")
                }
                Boolean(this.payloadSig) && (n.checkArgumentType(this.payloadSigSize, "number", "payloadSigSize"), n.checkArgument(i.isUnsignedInteger(this.payloadSigSize), "Expect payloadSigSize to be an unsigned integer"), n.checkArgument(i.isHexaString(this.payloadSig), "Expect payload sig to be a hex string"))
            }, p.prototype.toJSON = function(t) {
                var e = !Boolean(this.payloadSig) || t && t.skipSignature,
                    r = t && t.network;
                this.validate();
                var i = {
                    version: this.version,
                    collateralHash: this.collateralHash,
                    collateralIndex: this.collateralIndex,
                    service: this.service,
                    keyIDOwner: this.keyIDOwner,
                    pubKeyOperator: this.pubKeyOperator,
                    keyIDVoting: this.keyIDVoting,
                    operatorReward: this.operatorReward,
                    payoutAddress: new h(this.scriptPayout).toAddress(r).toString(),
                    inputsHash: this.inputsHash
                };
                return e || (i.payloadSigSize = this.payloadSigSize, i.payloadSig = this.payloadSig), i
            }, p.prototype.toBuffer = function(t) {
                var e = !Boolean(this.payloadSig) || t && t.skipSignature;
                this.validate();
                var r = new o;
                return r.writeUInt16LE(this.version).writeUInt16LE(this.type).writeUInt16LE(this.mode).write(Buffer.from(this.collateralHash, "hex").reverse()).writeInt32LE(this.collateralIndex).write(c.ipAndPortToBuffer(this.service)).write(Buffer.from(this.keyIDOwner, "hex").reverse()).write(Buffer.from(this.pubKeyOperator, "hex")).write(Buffer.from(this.keyIDVoting, "hex").reverse()).writeUInt16LE(this.operatorReward).writeVarintNum(Buffer.from(this.scriptPayout, "hex").length).write(Buffer.from(this.scriptPayout, "hex")).write(Buffer.from(this.inputsHash, "hex").reverse()), !e && this.payloadSig ? (r.writeVarintNum(Buffer.from(this.payloadSig, "hex").length), r.write(Buffer.from(this.payloadSig, "hex"))) : r.writeVarintNum(s.EMPTY_SIGNATURE_SIZE), r.toBuffer()
            }, p.prototype.copy = function() {
                return p.fromBuffer(this.toBuffer())
            }, t.exports = p
        },
        7286: function(t, e, r) {
            var i = r(5540),
                s = r(5478),
                n = r(5507),
                o = r(5515),
                u = r(5652),
                a = r(5484),
                h = r(5606),
                c = r(6553),
                p = a.isUnsignedInteger,
                f = a.isHexaString,
                d = a.isSha256HexString,
                g = i.SHA256_HASH_SIZE,
                S = i.BLS_SIGNATURE_SIZE;

            function l(t) {
                u.call(this), t ? (this.version = t.version, this.proTxHash = t.proTxHash, this.service = t.service, this.scriptOperatorPayout = h.fromAddress(t.operatorPayoutAddress).toHex(), this.inputsHash = t.inputsHash, t.payloadSig && (this.payloadSig = t.payloadSig), this.validate()) : this.version = 1
            }
            l.prototype = Object.create(u.prototype), l.prototype.constructor = u, l.fromBuffer = function(t) {
                var e = new o(t),
                    r = new l;
                r.version = e.readUInt16LE(), r.proTxHash = e.read(g).reverse().toString("hex"), r.service = c.bufferToIPAndPort(e.read(c.IP_AND_PORT_SIZE));
                var i = e.readVarintNum();
                if (r.scriptOperatorPayout = e.read(i).toString("hex"), r.inputsHash = e.read(g).reverse().toString("hex"), r.payloadSig = e.read(S).toString("hex"), !e.finished()) throw new Error("Failed to parse payload: raw payload is bigger than expected.");
                return r.validate(), r
            }, l.fromJSON = function(t) {
                return new l(t)
            }, l.prototype.validate = function() {
                if (s.checkArgument(p(this.version), "Expect version to be an unsigned integer"), s.checkArgument(d(this.proTxHash), "Expect proTXHash to be a hex string representing sha256 hash"), c.isZeroAddress(this.service) || s.checkArgument(c.isIPV4(this.service), "Expected service to be a string with ip address and port"), s.checkArgument(d(this.inputsHash), "Expect inputsHash to be a hex string representing sha256 hash"), this.scriptOperatorPayout) {
                    var t = new h(this.scriptOperatorPayout);
                    s.checkArgument(t.isPublicKeyHashOut() || t.isScriptHashOut(), "Expected scriptOperatorPayout to be a p2pkh/p2sh")
                }
                return Boolean(this.payloadSig) && (s.checkArgument(f(this.payloadSig), "Expect payloadSig to be a hex string"), s.checkArgument(2 * this.payloadSig.length !== S, "payloadSig size doesn't match BLS signature size")), !0
            }, l.prototype.toJSON = function(t) {
                var e = !Boolean(this.payloadSig) || t && t.skipSignature,
                    r = t && t.network;
                this.validate();
                var i = {
                    version: this.version,
                    proTxHash: this.proTxHash,
                    service: this.service,
                    operatorPayoutAddress: new h(this.scriptOperatorPayout).toAddress(r).toString(),
                    inputsHash: this.inputsHash
                };
                return e || (i.payloadSig = this.payloadSig), i
            }, l.prototype.toBuffer = function(t) {
                var e = !Boolean(this.payloadSig) || t && t.skipSignature;
                this.validate();
                var r = new n;
                r.writeUInt16LE(this.version), r.write(Buffer.from(this.proTxHash, "hex").reverse()), r.write(c.ipAndPortToBuffer(this.service));
                var s, o = Buffer.from(this.scriptOperatorPayout, "hex");
                return r.writeVarintNum(o.length), r.write(o), r.write(Buffer.from(this.inputsHash, "hex").reverse()), e ? r.writeVarintNum(i.EMPTY_SIGNATURE_SIZE) : (s = Buffer.from(this.payloadSig, "hex"), r.write(s)), r.toBuffer()
            }, l.prototype.copy = function() {
                return l.fromJSON(this.toJSON())
            }, t.exports = l
        },
        7287: function(t, e, r) {
            var i = r(5540),
                s = r(5478),
                n = r(5507),
                o = r(5515),
                u = r(5652),
                a = r(5606),
                h = r(5484),
                c = h.isUnsignedInteger,
                p = h.isHexaString,
                f = h.isSha256HexString,
                d = i.SHA256_HASH_SIZE,
                g = i.PUBKEY_ID_SIZE,
                S = i.BLS_PUBLIC_KEY_SIZE,
                l = i.BLS_SIGNATURE_SIZE;

            function y(t) {
                u.call(this), this.version = 1, t && (this.proTxHash = t.proTxHash, this.pubKeyOperator = t.pubKeyOperator, this.keyIDVoting = t.keyIDVoting, this.scriptPayout = a.fromAddress(t.payoutAddress).toHex(), this.inputsHash = t.inputsHash, t.payloadSig && (this.payloadSig = t.payloadSig), this.validate())
            }
            y.prototype = Object.create(u.prototype), y.prototype.constructor = u, y.fromBuffer = function(t) {
                var e = new o(t),
                    r = new y,
                    i = 0;
                r.version = e.readUInt16LE(), r.proTxHash = e.read(d).reverse().toString("hex"), r.mode = e.readUInt16LE(), r.pubKeyOperator = e.read(S).toString("hex"), r.keyIDVoting = e.read(g).reverse().toString("hex");
                var s = e.readVarintNum();
                if (r.scriptPayout = e.read(s).toString("hex"), r.inputsHash = e.read(d).reverse().toString("hex"), e.finished() || (i = e.readVarintNum()), i > 0 && (r.payloadSig = e.read(i).toString("hex")), !e.finished()) throw new Error("Failed to parse payload: raw payload is bigger than expected.");
                return r.validate(), r
            }, y.fromJSON = function(t) {
                return new y(t)
            }, y.prototype.validate = function() {
                if (s.checkArgument(c(this.version), "Expected version to be an unsigned integer"), s.checkArgument(p(this.pubKeyOperator), "Expect pubKeyOperator to be a hex string"), s.checkArgument(p(this.keyIDVoting), "Expect keyIDVoting to be a hex string"), s.checkArgument(f(this.proTxHash), "expected proTxHash to be a sha256 hex string"), s.checkArgument(f(this.inputsHash), "expected inputsHash to be a sha256 hex string"), this.scriptPayout) {
                    var t = new a(this.scriptPayout);
                    s.checkArgument(t.isPublicKeyHashOut() || t.isScriptHashOut(), "Expected scriptPayout to be a p2pkh/p2sh")
                }
                return Boolean(this.payloadSig) && (s.checkArgument(p(this.payloadSig), "Expect payloadSig to be a hex string"), s.checkArgument(2 * this.payloadSig.length !== l, "payloadSig size doesn't match BLS signature size")), !0
            }, y.prototype.toJSON = function(t) {
                var e = Boolean(t && t.skipSignature) || !Boolean(this.payloadSig),
                    r = t && t.network,
                    i = {
                        version: this.version,
                        proTxHash: this.proTxHash,
                        pubKeyOperator: this.pubKeyOperator,
                        keyIDVoting: this.keyIDVoting,
                        payoutAddress: new a(this.scriptPayout).toAddress(r).toString(),
                        inputsHash: this.inputsHash
                    };
                return e || (i.payloadSig = this.payloadSig), i
            }, y.prototype.toBuffer = function(t) {
                var e = !Boolean(this.payloadSig) || t && t.skipSignature;
                this.validate();
                var r = new n;
                if (r.writeUInt16LE(this.version).write(Buffer.from(this.proTxHash, "hex").reverse()).writeUInt16LE(this.mode).write(Buffer.from(this.pubKeyOperator, "hex")).write(Buffer.from(this.keyIDVoting, "hex").reverse()), this.scriptPayout) {
                    var s = Buffer.from(this.scriptPayout, "hex"),
                        o = s.length;
                    r.writeVarintNum(o), r.write(s)
                } else r.writeVarintNum(i.EMPTY_SIGNATURE_SIZE);
                if (r.write(Buffer.from(this.inputsHash, "hex").reverse()), e) r.writeVarintNum(i.EMPTY_SIGNATURE_SIZE);
                else {
                    var u = Buffer.from(this.payloadSig, "hex");
                    r.writeVarintNum(u.length), r.write(u)
                }
                return r.toBuffer()
            }, y.prototype.copy = function() {
                return y.fromJSON(this.toJSON())
            }, t.exports = y
        },
        7288: function(t, e, r) {
            var i = r(5540),
                s = r(5478),
                n = r(5507),
                o = r(5515),
                u = r(5652),
                a = r(5484),
                h = a.isUnsignedInteger,
                c = a.isHexaString,
                p = a.isSha256HexString,
                f = i.SHA256_HASH_SIZE;

            function d(t) {
                u.call(this), this.version = 1, t && (this.proTxHash = t.proTxHash, this.reason = t.reason, this.inputsHash = t.inputsHash, this.payloadSigSize = t.payloadSigSize, t.payloadSig && (this.payloadSig = t.payloadSig), this.validate())
            }
            d.prototype = Object.create(u.prototype), d.prototype.constructor = u, d.serializeJSONToBuffer = function(t) {
                var e = new n;
                if (e.writeUInt16LE(t.version).write(Buffer.from(t.proTxHash, "hex").reverse()).writeUInt16LE(t.reason).write(Buffer.from(t.inputsHash, "hex")), t.payloadSig) {
                    var r = Buffer.from(t.payloadSig, "hex");
                    e.write(r)
                } else e.writeVarintNum(i.EMPTY_SIGNATURE_SIZE);
                return e.toBuffer()
            }, d.fromBuffer = function(t) {
                var e = new o(t),
                    r = new d;
                if (r.version = e.readUInt16LE(), r.proTxHash = e.read(f).reverse().toString("hex"), r.reason = e.readUInt16LE(), r.inputsHash = e.read(f).reverse().toString("hex"), r.payloadSig = e.read(i.BLS_SIGNATURE_SIZE).toString("hex"), !e.finished()) throw new Error("Failed to parse payload: raw payload is bigger than expected.");
                return r.validate(), r
            }, d.fromJSON = function(t) {
                return new d(t)
            }, d.prototype.validate = function() {
                return s.checkArgument(h(this.version), "Expected version to be an unsigned integer"), s.checkArgument(h(this.reason), "Expected reason to be an unsigned integer"), s.checkArgument(p(this.proTxHash), "expected proTxHash to be a sha256 hex string"), s.checkArgument(p(this.inputsHash), "expected inputsHash to be a sha246 hex string"), this.payloadSig && (s.checkArgument(c(this.payloadSig), "expected payloadSig to be a hex string"), s.checkArgument(this.payloadSig.length === 2 * i.BLS_SIGNATURE_SIZE, "Invalid payloadSig size")), !0
            }, d.prototype.toJSON = function(t) {
                var e = Boolean(t && t.skipSignature) || !Boolean(this.payloadSig),
                    r = {
                        version: this.version,
                        proTxHash: this.proTxHash,
                        reason: this.reason,
                        inputsHash: this.inputsHash
                    };
                return e || (r.payloadSig = this.payloadSig), r
            }, d.prototype.toBuffer = function(t) {
                this.validate();
                var e = Boolean(t && t.skipSignature) || !Boolean(this.payloadSig),
                    r = new n;
                if (r.writeUInt16LE(this.version).write(Buffer.from(this.proTxHash, "hex").reverse()).writeUInt16LE(this.reason).write(Buffer.from(this.inputsHash, "hex").reverse()), e) r.writeVarintNum(i.EMPTY_SIGNATURE_SIZE);
                else {
                    var s = Buffer.from(this.payloadSig, "hex");
                    r.write(s)
                }
                return r.toBuffer()
            }, d.prototype.copy = function() {
                return d.fromJSON(this.toJSON())
            }, t.exports = d
        },
        9555: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(7275),
                n = r(6549),
                o = r(5593),
                u = r(5541),
                a = r(5630),
                h = r(5668),
                c = function t(e) {
                    if (!(this instanceof t)) return new t(e);
                    e ? (this.initialize(), this.set(e)) : this.initialize()
                };
            c.prototype.verify = function(t, e, n, o, u) {
                var a, h = r(5933);
                if (i.isUndefined(n) && (n = new h), i.isUndefined(o) && (o = 0), i.isUndefined(u) && (u = 0), this.set({
                        script: t,
                        tx: n,
                        nin: o,
                        flags: u
                    }), 0 != (u & c.SCRIPT_VERIFY_SIGPUSHONLY) && !t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                if (!this.evaluate()) return !1;
                u & c.SCRIPT_VERIFY_P2SH && (a = this.stack.slice());
                var p = this.stack;
                if (this.initialize(), this.set({
                        script: e,
                        stack: p,
                        tx: n,
                        nin: o,
                        flags: u
                    }), !this.evaluate()) return !1;
                if (0 === this.stack.length) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_RESULT", !1;
                var f = this.stack[this.stack.length - 1];
                if (!c.castToBool(f)) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK", !1;
                if (u & c.SCRIPT_VERIFY_P2SH && e.isScriptHashOut()) {
                    if (!t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                    if (0 === a.length) throw new Error("internal error - stack copy empty");
                    var d = a[a.length - 1],
                        g = s.fromBuffer(d);
                    return a.pop(), this.initialize(), this.set({
                        script: g,
                        stack: a,
                        tx: n,
                        nin: o,
                        flags: u
                    }), !!this.evaluate() && (0 === a.length ? (this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_P2SH_STACK", !1) : !!c.castToBool(a[a.length - 1]) || (this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_P2SH_STACK", !1))
                }
                return !0
            }, t.exports = c, c.prototype.initialize = function(t) {
                this.stack = [], this.altstack = [], this.pc = 0, this.pbegincodehash = 0, this.nOpCount = 0, this.vfExec = [], this.errstr = "", this.flags = 0
            }, c.prototype.set = function(t) {
                this.script = t.script || this.script, this.tx = t.tx || this.tx, this.nin = void 0 !== t.nin ? t.nin : this.nin, this.stack = t.stack || this.stack, this.altstack = t.altack || this.altstack, this.pc = void 0 !== t.pc ? t.pc : this.pc, this.pbegincodehash = void 0 !== t.pbegincodehash ? t.pbegincodehash : this.pbegincodehash, this.nOpCount = void 0 !== t.nOpCount ? t.nOpCount : this.nOpCount, this.vfExec = t.vfExec || this.vfExec, this.errstr = t.errstr || this.errstr, this.flags = void 0 !== t.flags ? t.flags : this.flags
            }, c.true = Buffer.from([1]), c.false = Buffer.from([]), c.MAX_SCRIPT_ELEMENT_SIZE = 520, c.LOCKTIME_THRESHOLD_BN = new o(c.LOCKTIME_THRESHOLD = 5e8), c.SCRIPT_VERIFY_NONE = 0, c.SCRIPT_VERIFY_P2SH = 1, c.SCRIPT_VERIFY_STRICTENC = 2, c.SCRIPT_VERIFY_DERSIG = 4, c.SCRIPT_VERIFY_LOW_S = 8, c.SCRIPT_VERIFY_NULLDUMMY = 16, c.SCRIPT_VERIFY_SIGPUSHONLY = 32, c.SCRIPT_VERIFY_MINIMALDATA = 64, c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 128, c.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY = 512, c.castToBool = function(t) {
                for (var e = 0; e < t.length; e++)
                    if (0 !== t[e]) return e !== t.length - 1 || 128 !== t[e];
                return !1
            }, c.prototype.checkSignatureEncoding = function(t) {
                if (0 != (this.flags & (c.SCRIPT_VERIFY_DERSIG | c.SCRIPT_VERIFY_LOW_S | c.SCRIPT_VERIFY_STRICTENC)) && !a.isTxDER(t)) return this.errstr = "SCRIPT_ERR_SIG_DER_INVALID_FORMAT", !1;
                if (0 != (this.flags & c.SCRIPT_VERIFY_LOW_S)) {
                    if (!a.fromTxFormat(t).hasLowS()) return this.errstr = "SCRIPT_ERR_SIG_DER_HIGH_S", !1
                } else if (0 != (this.flags & c.SCRIPT_VERIFY_STRICTENC) && !a.fromTxFormat(t).hasDefinedHashtype()) return this.errstr = "SCRIPT_ERR_SIG_HASHTYPE", !1;
                return !0
            }, c.prototype.checkPubkeyEncoding = function(t) {
                return !(0 != (this.flags & c.SCRIPT_VERIFY_STRICTENC) && !h.isValid(t)) || (this.errstr = "SCRIPT_ERR_PUBKEYTYPE", !1)
            }, c.prototype.evaluate = function() {
                if (this.script.toBuffer().length > 1e4) return this.errstr = "SCRIPT_ERR_SCRIPT_SIZE", !1;
                try {
                    for (; this.pc < this.script.chunks.length;) {
                        if (!this.step()) return !1
                    }
                    if (this.stack.length + this.altstack.length > 1e3) return this.errstr = "SCRIPT_ERR_STACK_SIZE", !1
                } catch (t) {
                    return this.errstr = "SCRIPT_ERR_UNKNOWN_ERROR: " + t, !1
                }
                return !(this.vfExec.length > 0) || (this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1)
            }, c.prototype.checkLockTime = function(t) {
                return !!(this.tx.nLockTime < c.LOCKTIME_THRESHOLD && t.lt(c.LOCKTIME_THRESHOLD_BN) || this.tx.nLockTime >= c.LOCKTIME_THRESHOLD && t.gte(c.LOCKTIME_THRESHOLD_BN)) && (!t.gt(new o(this.tx.nLockTime)) && !!this.tx.inputs[this.nin].isFinal())
            }, c.prototype.step = function() {
                var t, e, r, p, f, d, g, S, l, y, _, I, m, O, P, E, T, v = 0 != (this.flags & c.SCRIPT_VERIFY_MINIMALDATA),
                    b = -1 === this.vfExec.indexOf(!1),
                    A = this.script.chunks[this.pc];
                this.pc++;
                var k = A.opcodenum;
                if (i.isUndefined(k)) return this.errstr = "SCRIPT_ERR_UNDEFINED_OPCODE", !1;
                if (A.buf && A.buf.length > c.MAX_SCRIPT_ELEMENT_SIZE) return this.errstr = "SCRIPT_ERR_PUSH_SIZE", !1;
                if (k > n.OP_16 && ++this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                if (k === n.OP_CAT || k === n.OP_SUBSTR || k === n.OP_LEFT || k === n.OP_RIGHT || k === n.OP_INVERT || k === n.OP_AND || k === n.OP_OR || k === n.OP_XOR || k === n.OP_2MUL || k === n.OP_2DIV || k === n.OP_MUL || k === n.OP_DIV || k === n.OP_MOD || k === n.OP_LSHIFT || k === n.OP_RSHIFT) return this.errstr = "SCRIPT_ERR_DISABLED_OPCODE", !1;
                if (b && 0 <= k && k <= n.OP_PUSHDATA4) {
                    if (v && !this.script.checkMinimalPush(this.pc - 1)) return this.errstr = "SCRIPT_ERR_MINIMALDATA", !1;
                    if (A.buf) {
                        if (A.len !== A.buf.length) throw new Error("Length of push value not equal to length of data");
                        this.stack.push(A.buf)
                    } else this.stack.push(c.false)
                } else if (b || n.OP_IF <= k && k <= n.OP_ENDIF) switch (k) {
                    case n.OP_1NEGATE:
                    case n.OP_1:
                    case n.OP_2:
                    case n.OP_3:
                    case n.OP_4:
                    case n.OP_5:
                    case n.OP_6:
                    case n.OP_7:
                    case n.OP_8:
                    case n.OP_9:
                    case n.OP_10:
                    case n.OP_11:
                    case n.OP_12:
                    case n.OP_13:
                    case n.OP_14:
                    case n.OP_15:
                    case n.OP_16:
                        f = k - (n.OP_1 - 1), t = new o(f).toScriptNumBuffer(), this.stack.push(t);
                        break;
                    case n.OP_NOP:
                        break;
                    case n.OP_NOP2:
                    case n.OP_CHECKLOCKTIMEVERIFY:
                        if (!(this.flags & c.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY)) {
                            if (this.flags & c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                            break
                        }
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var x = o.fromScriptNumBuffer(this.stack[this.stack.length - 1], v, 5);
                        if (x.lt(new o(0))) return this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME", !1;
                        if (!this.checkLockTime(x)) return this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME", !1;
                        break;
                    case n.OP_NOP1:
                    case n.OP_NOP3:
                    case n.OP_NOP4:
                    case n.OP_NOP5:
                    case n.OP_NOP6:
                    case n.OP_NOP7:
                    case n.OP_NOP8:
                    case n.OP_NOP9:
                    case n.OP_NOP10:
                        if (this.flags & c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                        break;
                    case n.OP_IF:
                    case n.OP_NOTIF:
                        if (E = !1, b) {
                            if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                            t = this.stack.pop(), E = c.castToBool(t), k === n.OP_NOTIF && (E = !E)
                        }
                        this.vfExec.push(E);
                        break;
                    case n.OP_ELSE:
                        if (0 === this.vfExec.length) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                        this.vfExec[this.vfExec.length - 1] = !this.vfExec[this.vfExec.length - 1];
                        break;
                    case n.OP_ENDIF:
                        if (0 === this.vfExec.length) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                        this.vfExec.pop();
                        break;
                    case n.OP_VERIFY:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (t = this.stack[this.stack.length - 1], !(E = c.castToBool(t))) return this.errstr = "SCRIPT_ERR_VERIFY", !1;
                        this.stack.pop();
                        break;
                    case n.OP_RETURN:
                        return this.errstr = "SCRIPT_ERR_OP_RETURN", !1;
                    case n.OP_TOALTSTACK:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.altstack.push(this.stack.pop());
                        break;
                    case n.OP_FROMALTSTACK:
                        if (this.altstack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_ALTSTACK_OPERATION", !1;
                        this.stack.push(this.altstack.pop());
                        break;
                    case n.OP_2DROP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.pop(), this.stack.pop();
                        break;
                    case n.OP_2DUP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 2], r = this.stack[this.stack.length - 1], this.stack.push(e), this.stack.push(r);
                        break;
                    case n.OP_3DUP:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 3], r = this.stack[this.stack.length - 2];
                        var N = this.stack[this.stack.length - 1];
                        this.stack.push(e), this.stack.push(r), this.stack.push(N);
                        break;
                    case n.OP_2OVER:
                        if (this.stack.length < 4) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 4], r = this.stack[this.stack.length - 3], this.stack.push(e), this.stack.push(r);
                        break;
                    case n.OP_2ROT:
                        if (this.stack.length < 6) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        p = this.stack.splice(this.stack.length - 6, 2), this.stack.push(p[0]), this.stack.push(p[1]);
                        break;
                    case n.OP_2SWAP:
                        if (this.stack.length < 4) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        p = this.stack.splice(this.stack.length - 4, 2), this.stack.push(p[0]), this.stack.push(p[1]);
                        break;
                    case n.OP_IFDUP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        t = this.stack[this.stack.length - 1], (E = c.castToBool(t)) && this.stack.push(t);
                        break;
                    case n.OP_DEPTH:
                        t = new o(this.stack.length).toScriptNumBuffer(), this.stack.push(t);
                        break;
                    case n.OP_DROP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.pop();
                        break;
                    case n.OP_DUP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.push(this.stack[this.stack.length - 1]);
                        break;
                    case n.OP_NIP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.splice(this.stack.length - 2, 1);
                        break;
                    case n.OP_OVER:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.push(this.stack[this.stack.length - 2]);
                        break;
                    case n.OP_PICK:
                    case n.OP_ROLL:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (t = this.stack[this.stack.length - 1], f = (S = o.fromScriptNumBuffer(t, v)).toNumber(), this.stack.pop(), f < 0 || f >= this.stack.length) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        t = this.stack[this.stack.length - f - 1], k === n.OP_ROLL && this.stack.splice(this.stack.length - f - 1, 1), this.stack.push(t);
                        break;
                    case n.OP_ROT:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        d = this.stack[this.stack.length - 3], g = this.stack[this.stack.length - 2];
                        var R = this.stack[this.stack.length - 1];
                        this.stack[this.stack.length - 3] = g, this.stack[this.stack.length - 2] = R, this.stack[this.stack.length - 1] = d;
                        break;
                    case n.OP_SWAP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        d = this.stack[this.stack.length - 2], g = this.stack[this.stack.length - 1], this.stack[this.stack.length - 2] = g, this.stack[this.stack.length - 1] = d;
                        break;
                    case n.OP_TUCK:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.splice(this.stack.length - 2, 0, this.stack[this.stack.length - 1]);
                        break;
                    case n.OP_SIZE:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        S = new o(this.stack[this.stack.length - 1].length), this.stack.push(S.toScriptNumBuffer());
                        break;
                    case n.OP_EQUAL:
                    case n.OP_EQUALVERIFY:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 2], r = this.stack[this.stack.length - 1];
                        var w = e.toString("hex") === r.toString("hex");
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(w ? c.true : c.false), k === n.OP_EQUALVERIFY) {
                            if (!w) return this.errstr = "SCRIPT_ERR_EQUALVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case n.OP_1ADD:
                    case n.OP_1SUB:
                    case n.OP_NEGATE:
                    case n.OP_ABS:
                    case n.OP_NOT:
                    case n.OP_0NOTEQUAL:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        switch (t = this.stack[this.stack.length - 1], S = o.fromScriptNumBuffer(t, v), k) {
                            case n.OP_1ADD:
                                S = S.add(o.One);
                                break;
                            case n.OP_1SUB:
                                S = S.sub(o.One);
                                break;
                            case n.OP_NEGATE:
                                S = S.neg();
                                break;
                            case n.OP_ABS:
                                S.cmp(o.Zero) < 0 && (S = S.neg());
                                break;
                            case n.OP_NOT:
                                S = new o((0 === S.cmp(o.Zero)) + 0);
                                break;
                            case n.OP_0NOTEQUAL:
                                S = new o((0 !== S.cmp(o.Zero)) + 0)
                        }
                        this.stack.pop(), this.stack.push(S.toScriptNumBuffer());
                        break;
                    case n.OP_ADD:
                    case n.OP_SUB:
                    case n.OP_BOOLAND:
                    case n.OP_BOOLOR:
                    case n.OP_NUMEQUAL:
                    case n.OP_NUMEQUALVERIFY:
                    case n.OP_NUMNOTEQUAL:
                    case n.OP_LESSTHAN:
                    case n.OP_GREATERTHAN:
                    case n.OP_LESSTHANOREQUAL:
                    case n.OP_GREATERTHANOREQUAL:
                    case n.OP_MIN:
                    case n.OP_MAX:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        switch (l = o.fromScriptNumBuffer(this.stack[this.stack.length - 2], v), y = o.fromScriptNumBuffer(this.stack[this.stack.length - 1], v), S = new o(0), k) {
                            case n.OP_ADD:
                                S = l.add(y);
                                break;
                            case n.OP_SUB:
                                S = l.sub(y);
                                break;
                            case n.OP_BOOLAND:
                                S = new o((0 !== l.cmp(o.Zero) && 0 !== y.cmp(o.Zero)) + 0);
                                break;
                            case n.OP_BOOLOR:
                                S = new o((0 !== l.cmp(o.Zero) || 0 !== y.cmp(o.Zero)) + 0);
                                break;
                            case n.OP_NUMEQUAL:
                            case n.OP_NUMEQUALVERIFY:
                                S = new o((0 === l.cmp(y)) + 0);
                                break;
                            case n.OP_NUMNOTEQUAL:
                                S = new o((0 !== l.cmp(y)) + 0);
                                break;
                            case n.OP_LESSTHAN:
                                S = new o((l.cmp(y) < 0) + 0);
                                break;
                            case n.OP_GREATERTHAN:
                                S = new o((l.cmp(y) > 0) + 0);
                                break;
                            case n.OP_LESSTHANOREQUAL:
                                S = new o((l.cmp(y) <= 0) + 0);
                                break;
                            case n.OP_GREATERTHANOREQUAL:
                                S = new o((l.cmp(y) >= 0) + 0);
                                break;
                            case n.OP_MIN:
                                S = l.cmp(y) < 0 ? l : y;
                                break;
                            case n.OP_MAX:
                                S = l.cmp(y) > 0 ? l : y
                        }
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(S.toScriptNumBuffer()), k === n.OP_NUMEQUALVERIFY) {
                            if (!c.castToBool(this.stack[this.stack.length - 1])) return this.errstr = "SCRIPT_ERR_NUMEQUALVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case n.OP_WITHIN:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        l = o.fromScriptNumBuffer(this.stack[this.stack.length - 3], v), y = o.fromScriptNumBuffer(this.stack[this.stack.length - 2], v);
                        var B = o.fromScriptNumBuffer(this.stack[this.stack.length - 1], v);
                        E = y.cmp(l) <= 0 && l.cmp(B) < 0, this.stack.pop(), this.stack.pop(), this.stack.pop(), this.stack.push(E ? c.true : c.false);
                        break;
                    case n.OP_RIPEMD160:
                    case n.OP_SHA1:
                    case n.OP_SHA256:
                    case n.OP_HASH160:
                    case n.OP_HASH256:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var H;
                        t = this.stack[this.stack.length - 1], k === n.OP_RIPEMD160 ? H = u.ripemd160(t) : k === n.OP_SHA1 ? H = u.sha1(t) : k === n.OP_SHA256 ? H = u.sha256(t) : k === n.OP_HASH160 ? H = u.sha256ripemd160(t) : k === n.OP_HASH256 && (H = u.sha256sha256(t)), this.stack.pop(), this.stack.push(H);
                        break;
                    case n.OP_CODESEPARATOR:
                        this.pbegincodehash = this.pc;
                        break;
                    case n.OP_CHECKSIG:
                    case n.OP_CHECKSIGVERIFY:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = this.stack[this.stack.length - 2], I = this.stack[this.stack.length - 1], m = (new s).set({
                            chunks: this.script.chunks.slice(this.pbegincodehash)
                        });
                        var U = (new s).add(_);
                        if (m.findAndDelete(U), !this.checkSignatureEncoding(_) || !this.checkPubkeyEncoding(I)) return !1;
                        try {
                            O = a.fromTxFormat(_), P = h.fromBuffer(I, !1), T = this.tx.verifySignature(O, P, this.nin, m)
                        } catch (t) {
                            T = !1
                        }
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(T ? c.true : c.false), k === n.OP_CHECKSIGVERIFY) {
                            if (!T) return this.errstr = "SCRIPT_ERR_CHECKSIGVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case n.OP_CHECKMULTISIG:
                    case n.OP_CHECKMULTISIGVERIFY:
                        var C = 1;
                        if (this.stack.length < C) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var K = o.fromScriptNumBuffer(this.stack[this.stack.length - C], v).toNumber();
                        if (K < 0 || K > 20) return this.errstr = "SCRIPT_ERR_PUBKEY_COUNT", !1;
                        if (this.nOpCount += K, this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                        var L = ++C;
                        if (C += K, this.stack.length < C) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var D = o.fromScriptNumBuffer(this.stack[this.stack.length - C], v).toNumber();
                        if (D < 0 || D > K) return this.errstr = "SCRIPT_ERR_SIG_COUNT", !1;
                        var M = ++C;
                        if (C += D, this.stack.length < C) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        m = (new s).set({
                            chunks: this.script.chunks.slice(this.pbegincodehash)
                        });
                        for (var V = 0; V < D; V++) _ = this.stack[this.stack.length - M - V], m.findAndDelete((new s).add(_));
                        for (T = !0; T && D > 0;) {
                            if (_ = this.stack[this.stack.length - M], I = this.stack[this.stack.length - L], !this.checkSignatureEncoding(_) || !this.checkPubkeyEncoding(I)) return !1;
                            var F;
                            try {
                                O = a.fromTxFormat(_), P = h.fromBuffer(I, !1), F = this.tx.verifySignature(O, P, this.nin, m)
                            } catch (t) {
                                F = !1
                            }
                            F && (M++, D--), L++, D > --K && (T = !1)
                        }
                        for (; C-- > 1;) this.stack.pop();
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (this.flags & c.SCRIPT_VERIFY_NULLDUMMY && this.stack[this.stack.length - 1].length) return this.errstr = "SCRIPT_ERR_SIG_NULLDUMMY", !1;
                        if (this.stack.pop(), this.stack.push(T ? c.true : c.false), k === n.OP_CHECKMULTISIGVERIFY) {
                            if (!T) return this.errstr = "SCRIPT_ERR_CHECKMULTISIGVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    default:
                        return this.errstr = "SCRIPT_ERR_BAD_OPCODE", !1
                }
                return !0
            }
        },
        9556: function(t, e, r) {
            "use strict";
            var i = r(6057),
                s = r(5478),
                n = (r(5503), r(6056)),
                o = r(5788),
                u = r(5787),
                a = r(5606),
                h = r(5630),
                c = r(6058);

            function p() {
                n.apply(this, arguments)
            }
            i(p, n), p.prototype.getSignatures = function(t, e, r, i) {
                s.checkState(this.output instanceof o), i = i || h.SIGHASH_ALL;
                var n = e.toPublicKey();
                return n.toString() === this.output.script.getPublicKey().toString("hex") ? [new c({
                    publicKey: n,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: r,
                    signature: u.sign(t, e, i, r, this.output.script),
                    sigtype: i
                })] : []
            }, p.prototype.addSignature = function(t, e) {
                return s.checkState(this.isValidSignature(t, e), "Signature is invalid"), this.setScript(a.buildPublicKeyIn(e.signature.toDER(), e.sigtype)), this
            }, p.prototype.clearSignatures = function() {
                return this.setScript(a.empty()), this
            }, p.prototype.isFullySigned = function() {
                return this.script.isPublicKeyIn()
            }, p.SCRIPT_MAX_SIZE = 73, p.prototype._estimateSize = function() {
                return p.SCRIPT_MAX_SIZE
            }, t.exports = p
        },
        9557: function(t, e, r) {
            "use strict";
            var i = r(6057),
                s = r(5478),
                n = r(5503),
                o = r(5541),
                u = r(6056),
                a = r(5788),
                h = r(5787),
                c = r(5606),
                p = r(5630),
                f = r(6058);

            function d() {
                u.apply(this, arguments)
            }
            i(d, u), d.prototype.getSignatures = function(t, e, r, i, u) {
                return s.checkState(this.output instanceof a), u = u || o.sha256ripemd160(e.publicKey.toBuffer()), i = i || p.SIGHASH_ALL, n.equals(u, this.output.script.getPublicKeyHash()) ? [new f({
                    publicKey: e.publicKey,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: r,
                    signature: h.sign(t, e, i, r, this.output.script),
                    sigtype: i
                })] : []
            }, d.prototype.addSignature = function(t, e) {
                return s.checkState(this.isValidSignature(t, e), "Signature is invalid"), this.setScript(c.buildPublicKeyHashIn(e.publicKey, e.signature.toDER(), e.sigtype)), this
            }, d.prototype.clearSignatures = function() {
                return this.setScript(c.empty()), this
            }, d.prototype.isFullySigned = function() {
                return this.script.isPublicKeyHashIn()
            }, d.SCRIPT_MAX_SIZE = 107, d.prototype._estimateSize = function() {
                return d.SCRIPT_MAX_SIZE
            }, t.exports = d
        },
        9558: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(6057),
                n = (r(6550), r(6056)),
                o = r(5788),
                u = r(5478),
                a = r(5606),
                h = r(5630),
                c = r(5787),
                p = (r(5668), r(5503)),
                f = r(6058);

            function d(t, e, r, s) {
                n.apply(this, arguments);
                var o = this;
                e = e || t.publicKeys, r = r || t.threshold, s = s || t.signatures, this.publicKeys = i.sortBy(e, (function(t) {
                    return t.toString("hex")
                })), u.checkState(a.buildMultisigOut(this.publicKeys, r).equals(this.output.script), "Provided public keys don't match to the provided output script"), this.publicKeyIndex = {}, i.each(this.publicKeys, (function(t, e) {
                    o.publicKeyIndex[t.toString()] = e
                })), this.threshold = r, this.signatures = s ? this._deserializeSignatures(s) : new Array(this.publicKeys.length)
            }
            s(d, n), d.prototype.toObject = function() {
                var t = n.prototype.toObject.apply(this, arguments);
                return t.threshold = this.threshold, t.publicKeys = i.map(this.publicKeys, (function(t) {
                    return t.toString()
                })), t.signatures = this._serializeSignatures(), t
            }, d.prototype._deserializeSignatures = function(t) {
                return i.map(t, (function(t) {
                    if (t) return new f(t)
                }))
            }, d.prototype._serializeSignatures = function() {
                return i.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, d.prototype.getSignatures = function(t, e, r, s) {
                u.checkState(this.output instanceof o), s = s || h.SIGHASH_ALL;
                var n = this,
                    a = [];
                return i.each(this.publicKeys, (function(i) {
                    i.toString() === e.publicKey.toString() && a.push(new f({
                        publicKey: e.publicKey,
                        prevTxId: n.prevTxId,
                        outputIndex: n.outputIndex,
                        inputIndex: r,
                        signature: c.sign(t, e, s, r, n.output.script),
                        sigtype: s
                    }))
                })), a
            }, d.prototype.addSignature = function(t, e) {
                return u.checkState(!this.isFullySigned(), "All needed signatures have already been added"), u.checkArgument(!i.isUndefined(this.publicKeyIndex[e.publicKey.toString()]), "Signature has no matching public key"), u.checkState(this.isValidSignature(t, e)), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this._updateScript(), this
            }, d.prototype._updateScript = function() {
                return this.setScript(a.buildMultisigIn(this.publicKeys, this.threshold, this._createSignatures())), this
            }, d.prototype._createSignatures = function() {
                return i.map(i.filter(this.signatures, (function(t) {
                    return !i.isUndefined(t)
                })), (function(t) {
                    return p.concat([t.signature.toDER(), p.integerAsSingleByteBuffer(t.sigtype)])
                }))
            }, d.prototype.clearSignatures = function() {
                this.signatures = new Array(this.publicKeys.length), this._updateScript()
            }, d.prototype.isFullySigned = function() {
                return this.countSignatures() === this.threshold
            }, d.prototype.countMissingSignatures = function() {
                return this.threshold - this.countSignatures()
            }, d.prototype.countSignatures = function() {
                return i.reduce(this.signatures, (function(t, e) {
                    return t + !!e
                }), 0)
            }, d.prototype.publicKeysWithoutSignature = function() {
                var t = this;
                return i.filter(this.publicKeys, (function(e) {
                    return !t.signatures[t.publicKeyIndex[e.toString()]]
                }))
            }, d.prototype.isValidSignature = function(t, e) {
                return e.signature.nhashtype = e.sigtype, c.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script)
            }, d.normalizeSignatures = function(t, e, r, i, s) {
                return s.map((function(s) {
                    var n = null;
                    return i = i.filter((function(i) {
                        if (n) return !0;
                        var o = new f({
                            signature: h.fromTxFormat(i),
                            publicKey: s,
                            prevTxId: e.prevTxId,
                            outputIndex: e.outputIndex,
                            inputIndex: r,
                            sigtype: h.SIGHASH_ALL
                        });
                        return o.signature.nhashtype = o.sigtype, !c.verify(t, o.signature, o.publicKey, o.inputIndex, e.output.script) || (n = o, !1)
                    })), n || null
                }))
            }, d.OPCODES_SIZE = 1, d.SIGNATURE_SIZE = 73, d.prototype._estimateSize = function() {
                return d.OPCODES_SIZE + this.threshold * d.SIGNATURE_SIZE
            }, t.exports = d
        },
        9559: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(6057),
                n = r(6056),
                o = r(5788),
                u = r(5478),
                a = r(5606),
                h = r(5630),
                c = r(5787),
                p = (r(5668), r(5503)),
                f = r(6058);

            function d(t, e, r, s) {
                n.apply(this, arguments);
                var o = this;
                e = e || t.publicKeys, r = r || t.threshold, s = s || t.signatures, this.publicKeys = i.sortBy(e, (function(t) {
                    return t.toString("hex")
                })), this.redeemScript = a.buildMultisigOut(this.publicKeys, r), u.checkState(a.buildScriptHashOut(this.redeemScript).equals(this.output.script), "Provided public keys don't hash to the provided output"), this.publicKeyIndex = {}, i.each(this.publicKeys, (function(t, e) {
                    o.publicKeyIndex[t.toString()] = e
                })), this.threshold = r, this.signatures = s ? this._deserializeSignatures(s) : new Array(this.publicKeys.length)
            }
            s(d, n), d.prototype.toObject = function() {
                var t = n.prototype.toObject.apply(this, arguments);
                return t.threshold = this.threshold, t.publicKeys = i.map(this.publicKeys, (function(t) {
                    return t.toString()
                })), t.signatures = this._serializeSignatures(), t
            }, d.prototype._deserializeSignatures = function(t) {
                return i.map(t, (function(t) {
                    if (t) return new f(t)
                }))
            }, d.prototype._serializeSignatures = function() {
                return i.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, d.prototype.getSignatures = function(t, e, r, s) {
                u.checkState(this.output instanceof o), s = s || h.SIGHASH_ALL;
                var n = this,
                    a = [];
                return i.each(this.publicKeys, (function(i) {
                    i.toString() === e.publicKey.toString() && a.push(new f({
                        publicKey: e.publicKey,
                        prevTxId: n.prevTxId,
                        outputIndex: n.outputIndex,
                        inputIndex: r,
                        signature: c.sign(t, e, s, r, n.redeemScript),
                        sigtype: s
                    }))
                })), a
            }, d.prototype.addSignature = function(t, e) {
                return u.checkState(!this.isFullySigned(), "All needed signatures have already been added"), u.checkArgument(!i.isUndefined(this.publicKeyIndex[e.publicKey.toString()]), "Signature has no matching public key"), u.checkState(this.isValidSignature(t, e)), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this._updateScript(), this
            }, d.prototype._updateScript = function() {
                return this.setScript(a.buildP2SHMultisigIn(this.publicKeys, this.threshold, this._createSignatures(), {
                    cachedMultisig: this.redeemScript
                })), this
            }, d.prototype._createSignatures = function() {
                return i.map(i.filter(this.signatures, (function(t) {
                    return !i.isUndefined(t)
                })), (function(t) {
                    return p.concat([t.signature.toDER(), p.integerAsSingleByteBuffer(t.sigtype)])
                }))
            }, d.prototype.clearSignatures = function() {
                this.signatures = new Array(this.publicKeys.length), this._updateScript()
            }, d.prototype.isFullySigned = function() {
                return this.countSignatures() === this.threshold
            }, d.prototype.countMissingSignatures = function() {
                return this.threshold - this.countSignatures()
            }, d.prototype.countSignatures = function() {
                return i.reduce(this.signatures, (function(t, e) {
                    return t + !!e
                }), 0)
            }, d.prototype.publicKeysWithoutSignature = function() {
                var t = this;
                return i.filter(this.publicKeys, (function(e) {
                    return !t.signatures[t.publicKeyIndex[e.toString()]]
                }))
            }, d.prototype.isValidSignature = function(t, e) {
                return e.signature.nhashtype = e.sigtype, c.verify(t, e.signature, e.publicKey, e.inputIndex, this.redeemScript)
            }, d.OPCODES_SIZE = 7, d.SIGNATURE_SIZE = 74, d.PUBKEY_SIZE = 34, d.prototype._estimateSize = function() {
                return d.OPCODES_SIZE + this.threshold * d.SIGNATURE_SIZE + this.publicKeys.length * d.PUBKEY_SIZE
            }, t.exports = d
        },
        9560: function(t, e, r) {
            var i = r(5540).registeredTransactionTypes,
                s = (r(5652), r(7278)),
                n = r(7279),
                o = r(7280),
                u = r(7281),
                a = r(7282),
                h = r(7283),
                c = r(7284),
                p = r(7285),
                f = r(7286),
                d = r(7287),
                g = r(7288),
                S = {};

            function l(t) {
                var e = S[t];
                if (!e) throw new Error("Unknown special transaction type");
                return e
            }
            S[i.TRANSACTION_SUBTX_CLOSEACCOUNT] = s, S[i.TRANSACTION_SUBTX_REGISTER] = n, S[i.TRANSACTION_SUBTX_RESETKEY] = o, S[i.TRANSACTION_SUBTX_TOPUP] = u, S[i.TRANSACTION_SUBTX_TRANSITION] = a, S[i.TRANSACTION_COINBASE] = h, S[i.TRANSACTION_QUORUM_COMMITMENT] = c, S[i.TRANSACTION_PROVIDER_REGISTER] = p, S[i.TRANSACTION_PROVIDER_UPDATE_SERVICE] = f, S[i.TRANSACTION_PROVIDER_UPDATE_REGISTRAR] = d, S[i.TRANSACTION_PROVIDER_UPDATE_REVOKE] = g, t.exports = {
                parseBuffer: function(t, e) {
                    return l(t).fromBuffer(e)
                },
                parseJSON: function(t, e) {
                    return l(t).fromJSON(e)
                },
                serializeToBuffer: function(t) {
                    return t.toBuffer()
                },
                serializeToJSON: function(t) {
                    return t.toJSON()
                },
                create: function(t) {
                    return new(l(t))
                },
                hasCorrectType: function(t, e) {
                    return e instanceof l(t)
                }
            }
        }
    }
]);