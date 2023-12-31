(window.webpackJsonp = window.webpackJsonp || []).push([
    [290], {
        5627: function(t, e, i) {
            t.exports = i(7258), t.exports.Interpreter = i(9458)
        },
        5696: function(t, e, i) {
            "use strict";
            var r = i(5592),
                Point = i(5929),
                s = i(5600),
                n = i(5572),
                u = i(5846),
                o = i(5483),
                h = i(5497);

            function a(t, e) {
                if (!(this instanceof a)) return new a(t, e);
                if (h.checkArgument(t, "First argument is required, please include public key data."), t instanceof a) return t;
                e = e || {};
                var i = this._classifyArgs(t, e);
                return i.point.validate(), n.defineImmutable(this, {
                    point: i.point,
                    compressed: i.compressed,
                    network: i.network || u.defaultNetwork
                }), this
            }
            a.prototype._classifyArgs = function(t, e) {
                var i = {
                    compressed: o.isUndefined(e.compressed) || e.compressed
                };
                if (t instanceof Point) i.point = t;
                else if (t.x && t.y) i = a._transformObject(t);
                else if ("string" == typeof t) i = a._transformDER(Buffer.from(t, "hex"));
                else if (a._isBuffer(t)) i = a._transformDER(t);
                else {
                    if (!a._isPrivateKey(t)) throw new TypeError("First argument is an unrecognized data format.");
                    i = a._transformPrivateKey(t)
                }
                return i.network || (i.network = o.isUndefined(e.network) ? void 0 : u.get(e.network)), i
            }, a._isPrivateKey = function(t) {
                return t instanceof i(6048)
            }, a._isBuffer = function(t) {
                return t instanceof Buffer || t instanceof Uint8Array
            }, a._transformPrivateKey = function(t) {
                h.checkArgument(a._isPrivateKey(t), "Must be an instance of PrivateKey");
                var e = {};
                return e.point = Point.getG().mul(t.bn), e.compressed = t.compressed, e.network = t.network, e
            }, a._transformDER = function(t, e) {
                h.checkArgument(a._isBuffer(t), "Must be a hex buffer of DER encoded public key");
                var i, s, n, u, c = {};
                if (e = !!o.isUndefined(e) || e, 4 !== t[0] && (e || 6 !== t[0] && 7 !== t[0]))
                    if (3 === t[0]) n = t.slice(1), i = new r(n), (c = a._transformX(!0, i)).compressed = !0;
                    else {
                        if (2 !== t[0]) throw new TypeError("Invalid DER format public key");
                        n = t.slice(1), i = new r(n), (c = a._transformX(!1, i)).compressed = !0
                    }
                else {
                    if (n = t.slice(1, 33), u = t.slice(33, 65), 32 !== n.length || 32 !== u.length || 65 !== t.length) throw new TypeError("Length of x and y must be 32 bytes");
                    i = new r(n), s = new r(u), c.point = new Point(i, s), c.compressed = !1
                }
                return c
            }, a._transformX = function(t, e) {
                h.checkArgument("boolean" == typeof t, "Must specify whether y is odd or not (true or false)");
                var i = {};
                return i.point = Point.fromX(t, e), i
            }, a._transformObject = function(t) {
                var e = new r(t.x, "hex"),
                    i = new r(t.y, "hex");
                return new a(new Point(e, i), {
                    compressed: t.compressed
                })
            }, a.fromPrivateKey = function(t) {
                h.checkArgument(a._isPrivateKey(t), "Must be an instance of PrivateKey");
                var e = a._transformPrivateKey(t);
                return new a(e.point, {
                    compressed: e.compressed,
                    network: e.network
                })
            }, a.fromDER = a.fromBuffer = function(t, e) {
                h.checkArgument(a._isBuffer(t), "Must be a hex buffer of DER encoded public key");
                var i = a._transformDER(t, e);
                return new a(i.point, {
                    compressed: i.compressed
                })
            }, a.fromPoint = function(t, e) {
                return h.checkArgument(t instanceof Point, "First argument must be an instance of Point."), new a(t, {
                    compressed: e
                })
            }, a.fromString = function(t, e) {
                var i = Buffer.from(t, e || "hex"),
                    r = a._transformDER(i);
                return new a(r.point, {
                    compressed: r.compressed
                })
            }, a.fromX = function(t, e) {
                var i = a._transformX(t, e);
                return new a(i.point, {
                    compressed: i.compressed
                })
            }, a.getValidationError = function(t) {
                var e;
                try {
                    new a(t)
                } catch (t) {
                    e = t
                }
                return e
            }, a.isValid = function(t) {
                return !a.getValidationError(t)
            }, a.prototype.toObject = a.prototype.toJSON = function() {
                return {
                    x: this.point.getX().toString("hex", 2),
                    y: this.point.getY().toString("hex", 2),
                    compressed: this.compressed
                }
            }, a.prototype.toBuffer = a.prototype.toDER = function() {
                var t, e = this.point.getX(),
                    i = this.point.getY(),
                    r = e.toBuffer({
                        size: 32
                    }),
                    s = i.toBuffer({
                        size: 32
                    });
                return this.compressed ? (t = s[s.length - 1] % 2 ? Buffer.from([3]) : Buffer.from([2]), Buffer.concat([t, r])) : (t = Buffer.from([4]), Buffer.concat([t, r, s]))
            }, a.prototype._getID = function() {
                return s.sha256ripemd160(this.toBuffer())
            }, a.prototype.toAddress = function(t) {
                return i(5784).fromPublicKey(this, t || this.network)
            }, a.prototype.toString = function() {
                return this.toDER().toString("hex")
            }, a.prototype.inspect = function() {
                return "<PublicKey: " + this.toString() + (this.compressed ? "" : ", uncompressed") + ">"
            }, t.exports = a
        },
        5741: function(t, e, i) {
            "use strict";
            var r = i(5483),
                s = i(5592),
                n = i(12),
                u = i(5537),
                o = i(5572),
                h = i(5628),
                a = i(5627),
                c = i(5497),
                p = i(5650);

            function f(t) {
                if (!(this instanceof f)) return new f(t);
                if (!r.isObject(t)) throw new TypeError("Unrecognized argument for Output");
                var e;
                this.satoshis = t.satoshis, u.isBuffer(t.script) ? this._scriptBuffer = t.script : (e = r.isString(t.script) && o.isHexa(t.script) ? new n.Buffer(t.script, "hex") : t.script, this.setScript(e))
            }
            Object.defineProperty(f.prototype, "script", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._script || this.setScriptFromBuffer(this._scriptBuffer), this._script
                }
            }), Object.defineProperty(f.prototype, "satoshis", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._satoshis
                },
                set: function(t) {
                    t instanceof s ? (this._satoshisBN = t, this._satoshis = t.toNumber()) : r.isString(t) ? (this._satoshis = parseInt(t), this._satoshisBN = s.fromNumber(this._satoshis)) : (c.checkArgument(o.isNaturalNumber(t), "Output satoshis is not a natural number"), this._satoshisBN = s.fromNumber(t), this._satoshis = t), c.checkState(o.isNaturalNumber(this._satoshis), "Output satoshis is not a natural number")
                }
            }), f.prototype.invalidSatoshis = function() {
                return this._satoshis > 9007199254740991 ? "transaction txout satoshis greater than max safe integer" : this._satoshis !== this._satoshisBN.toNumber() ? "transaction txout satoshis has corrupted value" : this._satoshis < 0 && "transaction txout negative"
            }, f.prototype.toObject = f.prototype.toJSON = function() {
                var t = {
                    satoshis: this.satoshis
                };
                return t.script = this._scriptBuffer.toString("hex"), t
            }, f.fromObject = function(t) {
                return new f(t)
            }, f.prototype.setScriptFromBuffer = function(t) {
                this._scriptBuffer = t;
                try {
                    this._script = a.fromBuffer(this._scriptBuffer), this._script._isOutput = !0
                } catch (t) {
                    if (!(t instanceof p.Script.InvalidBuffer)) throw t;
                    this._script = null
                }
            }, f.prototype.setScript = function(t) {
                if (t instanceof a) this._scriptBuffer = t.toBuffer(), this._script = t, this._script._isOutput = !0;
                else if (r.isString(t)) this._script = a.fromString(t), this._scriptBuffer = this._script.toBuffer(), this._script._isOutput = !0;
                else {
                    if (!u.isBuffer(t)) throw new TypeError("Invalid argument type: script");
                    this.setScriptFromBuffer(t)
                }
                return this
            }, f.prototype.inspect = function() {
                var t;
                return t = this.script ? this.script.inspect() : this._scriptBuffer.toString("hex"), "<Output (" + this.satoshis + " sats) " + t + ">"
            }, f.fromBufferReader = function(t) {
                var e = {};
                e.satoshis = t.readUInt64LEBN();
                var i = t.readVarintNum();
                return e.script = 0 !== i ? t.read(i) : new n.Buffer([]), new f(e)
            }, f.prototype.toBufferWriter = function(t) {
                t || (t = new h), t.writeUInt64LEBN(this._satoshisBN);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t
            }, t.exports = f
        },
        5785: function(t, e, i) {
            "use strict";
            var r = i(12),
                s = i(5626),
                n = i(5627),
                u = i(5741),
                o = i(5740),
                h = i(5628),
                a = i(5592),
                c = i(5600),
                p = i(6192),
                f = i(5497),
                _ = i(5483),
                d = function(t, e, p, f) {
                    var _, d = i(6529),
                        g = i(6530),
                        S = d.shallowCopy(t);
                    for ((f = new n(f)).removeCodeseparators(), _ = 0; _ < S.inputs.length; _++) S.inputs[_] = new g(S.inputs[_]).setScript(n.empty());
                    if (S.inputs[p] = new g(S.inputs[p]).setScript(f), (31 & e) === s.SIGHASH_NONE || (31 & e) === s.SIGHASH_SINGLE)
                        for (_ = 0; _ < S.inputs.length; _++) _ !== p && (S.inputs[_].sequenceNumber = 0);
                    if ((31 & e) === s.SIGHASH_NONE) S.outputs = [];
                    else if ((31 & e) === s.SIGHASH_SINGLE) {
                        if (p >= S.outputs.length) return Buffer.from("0000000000000000000000000000000000000000000000000000000000000001", "hex");
                        for (S.outputs.length = p + 1, _ = 0; _ < p; _++) S.outputs[_] = new u({
                            satoshis: a.fromBuffer(new r.Buffer("ffffffffffffffff", "hex")),
                            script: n.empty()
                        })
                    }
                    e & s.SIGHASH_ANYONECANPAY && (S.inputs = [S.inputs[p]]);
                    var l = (new h).write(S.toBuffer()).writeInt32LE(e).toBuffer(),
                        I = c.sha256sha256(l);
                    return I = new o(I).readReverse()
                };
            t.exports = {
                sighash: d,
                sign: function(t, e, i, r, s) {
                    var n = d(t, i, r, s);
                    return p.sign(n, e, "little").set({
                        nhashtype: i
                    })
                },
                verify: function(t, e, i, r, s) {
                    f.checkArgument(!_.isUndefined(t)), f.checkArgument(!_.isUndefined(e) && !_.isUndefined(e.nhashtype));
                    var n = d(t, e.nhashtype, r, s);
                    return p.verify(n, e, i, "little")
                }
            }
        },
        6048: function(t, e, i) {
            "use strict";
            var r = i(5483),
                s = i(5784),
                n = i(6049),
                u = i(5592),
                o = i(5572),
                h = i(5846),
                Point = i(5929),
                a = i(5696),
                c = i(6196),
                p = i(5497);

            function f(t, e) {
                if (!(this instanceof f)) return new f(t, e);
                if (t instanceof f) return t;
                var i = this._classifyArguments(t, e);
                if (!i.bn || 0 === i.bn.cmp(new u(0))) throw new TypeError("Number can not be equal to zero, undefined, null or false");
                if (!i.bn.lt(Point.getN())) throw new TypeError("Number must be less than N");
                if (void 0 === i.network) throw new TypeError('Must specify the network ("livenet" or "testnet")');
                return o.defineImmutable(this, {
                    bn: i.bn,
                    compressed: i.compressed,
                    network: i.network
                }), Object.defineProperty(this, "publicKey", {
                    configurable: !1,
                    enumerable: !0,
                    get: this.toPublicKey.bind(this)
                }), this
            }
            f.prototype._classifyArguments = function(t, e) {
                var i = {
                    compressed: !0,
                    network: e ? h.get(e) : h.defaultNetwork
                };
                if (r.isUndefined(t) || r.isNull(t)) i.bn = f._getRandomBN();
                else if (t instanceof u) i.bn = t;
                else if (t instanceof Buffer || t instanceof Uint8Array) i = f._transformBuffer(t, e);
                else if (t.bn && t.network) i = f._transformObject(t);
                else if (!e && h.get(t)) i.bn = f._getRandomBN(), i.network = h.get(t);
                else {
                    if ("string" != typeof t) throw new TypeError("First argument is an unrecognized data type.");
                    o.isHexa(t) ? i.bn = new u(Buffer.from(t, "hex")) : i = f._transformWIF(t, e)
                }
                return i
            }, f._getRandomBN = function() {
                var t, e;
                do {
                    var i = c.getRandomBuffer(32);
                    t = (e = u.fromBuffer(i)).lt(Point.getN())
                } while (!t);
                return e
            }, f._transformBuffer = function(t, e) {
                var i = {};
                if (32 === t.length) return f._transformBNBuffer(t, e);
                if (i.network = h.get(t[0], "privatekey"), !i.network) throw new Error("Invalid network");
                if (e && i.network !== h.get(e)) throw new TypeError("Private key network mismatch");
                if (34 === t.length && 1 === t[33]) i.compressed = !0;
                else {
                    if (33 !== t.length) throw new Error("Length of buffer must be 33 (uncompressed) or 34 (compressed)");
                    i.compressed = !1
                }
                return i.bn = u.fromBuffer(t.slice(1, 33)), i
            }, f._transformBNBuffer = function(t, e) {
                var i = {};
                return i.network = h.get(e) || h.defaultNetwork, i.bn = u.fromBuffer(t), i.compressed = !1, i
            }, f._transformWIF = function(t, e) {
                return f._transformBuffer(n.decode(t), e)
            }, f.fromBuffer = function(t, e) {
                return new f(t, e)
            }, f._transformObject = function(t) {
                return {
                    bn: new u(t.bn, "hex"),
                    network: h.get(t.network),
                    compressed: t.compressed
                }
            }, f.fromString = f.fromWIF = function(t) {
                return p.checkArgument(r.isString(t), "First argument is expected to be a string."), new f(t)
            }, f.fromObject = function(t) {
                return p.checkArgument(r.isObject(t), "First argument is expected to be an object."), new f(t)
            }, f.fromRandom = function(t) {
                var e = f._getRandomBN();
                return new f(e, t)
            }, f.getValidationError = function(t, e) {
                var i;
                try {
                    new f(t, e)
                } catch (t) {
                    i = t
                }
                return i
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
                return this._pubkey || (this._pubkey = a.fromPrivateKey(this)), this._pubkey
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
        6050: function(t, e, i) {
            "use strict";
            var r = i(5483),
                s = i(5497),
                n = i(5650),
                u = i(5628),
                o = i(12),
                h = i(5537),
                a = i(5572),
                c = i(5627),
                p = i(5785),
                f = i(5741);

            function _(t) {
                return this instanceof _ ? t ? this._fromObject(t) : void 0 : new _(t)
            }
            _.MAXINT = 4294967295, _.DEFAULT_SEQNUMBER = 4294967295, _.DEFAULT_LOCKTIME_SEQNUMBER = 4294967294, _.DEFAULT_RBF_SEQNUMBER = 4294967293, Object.defineProperty(_.prototype, "script", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this.isNull() ? null : (this._script || (this._script = new c(this._scriptBuffer), this._script._isInput = !0), this._script)
                }
            }), _.fromObject = function(t) {
                return s.checkArgument(r.isObject(t)), (new _)._fromObject(t)
            }, _.prototype._fromObject = function(t) {
                var e;
                if (e = r.isString(t.prevTxId) && a.isHexa(t.prevTxId) ? new o.Buffer(t.prevTxId, "hex") : t.prevTxId, this.witnesses = [], this.output = t.output ? t.output instanceof f ? t.output : new f(t.output) : void 0, this.prevTxId = e || t.txidbuf, this.outputIndex = r.isUndefined(t.outputIndex) ? t.txoutnum : t.outputIndex, this.sequenceNumber = r.isUndefined(t.sequenceNumber) ? r.isUndefined(t.seqnum) ? 4294967295 : t.seqnum : t.sequenceNumber, r.isUndefined(t.script) && r.isUndefined(t.scriptBuffer)) throw new n.Transaction.Input.MissingScript;
                return this.setScript(t.scriptBuffer || t.script), this
            }, _.prototype.toObject = _.prototype.toJSON = function() {
                var t = {
                    prevTxId: this.prevTxId.toString("hex"),
                    outputIndex: this.outputIndex,
                    sequenceNumber: this.sequenceNumber,
                    script: this._scriptBuffer.toString("hex")
                };
                return this.script && (t.scriptString = this.script.toString()), this.output && (t.output = this.output.toObject()), t
            }, _.fromBufferReader = function(t) {
                var e = new _;
                return e.prevTxId = t.readReverse(32), e.outputIndex = t.readUInt32LE(), e._scriptBuffer = t.readVarLengthBuffer(), e.sequenceNumber = t.readUInt32LE(), e
            }, _.prototype.toBufferWriter = function(t) {
                t || (t = new u), t.writeReverse(this.prevTxId), t.writeUInt32LE(this.outputIndex);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t.writeUInt32LE(this.sequenceNumber), t
            }, _.prototype.setScript = function(t) {
                if (this._script = null, t instanceof c) this._script = t, this._script._isInput = !0, this._scriptBuffer = t.toBuffer();
                else if (a.isHexa(t)) this._scriptBuffer = new o.Buffer(t, "hex");
                else if (r.isString(t)) this._script = new c(t), this._script._isInput = !0, this._scriptBuffer = this._script.toBuffer();
                else {
                    if (!h.isBuffer(t)) throw new TypeError("Invalid argument type: script");
                    this._scriptBuffer = new o.Buffer(t)
                }
                return this
            }, _.prototype.getSignatures = function() {
                throw new n.AbstractMethodInvoked("Trying to sign unsupported output type (only P2PKH and P2SH multisig inputs are supported) for input: " + JSON.stringify(this))
            }, _.prototype.getSatoshisBuffer = function() {
                return s.checkState(this.output instanceof f), s.checkState(this.output._satoshisBN), (new u).writeUInt64LEBN(this.output._satoshisBN).toBuffer()
            }, _.prototype.isFullySigned = function() {
                throw new n.AbstractMethodInvoked("Input#isFullySigned")
            }, _.prototype.isFinal = function() {
                return 4294967295 !== this.sequenceNumber
            }, _.prototype.addSignature = function() {
                throw new n.AbstractMethodInvoked("Input#addSignature")
            }, _.prototype.clearSignatures = function() {
                throw new n.AbstractMethodInvoked("Input#clearSignatures")
            }, _.prototype.hasWitnesses = function() {
                return !!(this.witnesses && this.witnesses.length > 0)
            }, _.prototype.getWitnesses = function() {
                return this.witnesses
            }, _.prototype.setWitnesses = function(t) {
                this.witnesses = t
            }, _.prototype.isValidSignature = function(t, e) {
                return e.signature.nhashtype = e.sigtype, p.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script)
            }, _.prototype.isNull = function() {
                return "0000000000000000000000000000000000000000000000000000000000000000" === this.prevTxId.toString("hex") && 4294967295 === this.outputIndex
            }, _.prototype._estimateSize = function() {
                return this.toBufferWriter().toBuffer().length
            }, t.exports = _
        },
        6052: function(t, e, i) {
            "use strict";
            var r = i(5483),
                s = i(5497),
                n = i(6051),
                u = i(5537),
                o = i(5572),
                h = i(5696),
                a = i(5650),
                c = i(5626);

            function p(t) {
                if (!(this instanceof p)) return new p(t);
                if (t instanceof p) return t;
                if (r.isObject(t)) return this._fromObject(t);
                throw new a.InvalidArgument("TransactionSignatures must be instantiated from an object")
            }
            n(p, c), p.prototype._fromObject = function(t) {
                return this._checkObjectArgs(t), this.publicKey = new h(t.publicKey), this.prevTxId = u.isBuffer(t.prevTxId) ? t.prevTxId : Buffer.from(t.prevTxId, "hex"), this.outputIndex = t.outputIndex, this.inputIndex = t.inputIndex, this.signature = t.signature instanceof c ? t.signature : u.isBuffer(t.signature) ? c.fromBuffer(t.signature) : c.fromString(t.signature), this.sigtype = t.sigtype, this
            }, p.prototype._checkObjectArgs = function(t) {
                s.checkArgument(h(t.publicKey), "publicKey"), s.checkArgument(!r.isUndefined(t.inputIndex), "inputIndex"), s.checkArgument(!r.isUndefined(t.outputIndex), "outputIndex"), s.checkState(r.isNumber(t.inputIndex), "inputIndex must be a number"), s.checkState(r.isNumber(t.outputIndex), "outputIndex must be a number"), s.checkArgument(t.signature, "signature"), s.checkArgument(t.prevTxId, "prevTxId"), s.checkState(t.signature instanceof c || u.isBuffer(t.signature) || o.isHexa(t.signature), "signature must be a buffer or hexa value"), s.checkState(u.isBuffer(t.prevTxId) || o.isHexa(t.prevTxId), "prevTxId must be a buffer or hexa value"), s.checkArgument(t.sigtype, "sigtype"), s.checkState(r.isNumber(t.sigtype), "sigtype must be a number")
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
        6195: function(t, e, i) {
            t.exports = i(6529), t.exports.Input = i(6530), t.exports.Output = i(5741), t.exports.UnspentOutput = i(7259), t.exports.Signature = i(6052), t.exports.Sighash = i(5785), t.exports.SighashWitness = i(6531)
        },
        6528: function(t, e, i) {
            "use strict";
            var r = i(5483),
                s = i(5497),
                n = i(5537),
                u = i(5572);

            function o(t) {
                if (!(this instanceof o)) return new o(t);
                var e;
                if (r.isNumber(t)) e = t;
                else {
                    if (!r.isString(t)) throw new TypeError('Unrecognized num type: "' + typeof t + '" for Opcode');
                    e = o.map[t]
                }
                return u.defineImmutable(this, {
                    num: e
                }), this
            }
            for (var h in o.fromBuffer = function(t) {
                    return s.checkArgument(n.isBuffer(t)), new o(Number("0x" + t.toString("hex")))
                }, o.fromNumber = function(t) {
                    return s.checkArgument(r.isNumber(t)), new o(t)
                }, o.fromString = function(t) {
                    s.checkArgument(r.isString(t));
                    var e = o.map[t];
                    if (void 0 === e) throw new TypeError("Invalid opcodestr");
                    return new o(e)
                }, o.prototype.toHex = function() {
                    return this.num.toString(16)
                }, o.prototype.toBuffer = function() {
                    return Buffer.from(this.toHex(), "hex")
                }, o.prototype.toNumber = function() {
                    return this.num
                }, o.prototype.toString = function() {
                    var t = o.reverseMap[this.num];
                    if (void 0 === t) throw new Error("Opcode does not have a string representation");
                    return t
                }, o.smallInt = function(t) {
                    return s.checkArgument(r.isNumber(t), "Invalid Argument: n should be number"), s.checkArgument(t >= 0 && t <= 16, "Invalid Argument: n must be between 0 and 16"), 0 === t ? o("OP_0") : new o(o.map.OP_1 + t - 1)
                }, o.map = {
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
                    OP_CHECKSEQUENCEVERIFY: 178,
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
                }, o.reverseMap = [], o.map) o.reverseMap[o.map[h]] = h;
            r.extend(o, o.map), o.isSmallIntOp = function(t) {
                return t instanceof o && (t = t.toNumber()), t === o.map.OP_0 || t >= o.map.OP_1 && t <= o.map.OP_16
            }, o.prototype.inspect = function() {
                return "<Opcode: " + this.toString() + ", hex: " + this.toHex() + ", decimal: " + this.num + ">"
            }, t.exports = o
        },
        6529: function(t, e, i) {
            "use strict";
            var r = i(5483),
                s = i(5497),
                n = i(12),
                u = Buffer.compare || i(2350),
                o = i(5650),
                h = i(5537),
                a = i(5572),
                c = i(5740),
                p = i(5628),
                f = i(5600),
                _ = i(5626),
                d = i(5785),
                g = i(6531),
                S = i(5784),
                l = i(7259),
                I = i(6530),
                O = I.PublicKeyHash,
                P = I.PublicKey,
                E = I.MultiSigScriptHash,
                m = I.MultiSig,
                y = i(5741),
                A = i(5627),
                R = i(6048),
                T = i(5592);

            function k(t) {
                if (!(this instanceof k)) return new k(t);
                if (this.inputs = [], this.outputs = [], this._inputAmount = void 0, this._outputAmount = void 0, t) {
                    if (t instanceof k) return k.shallowCopy(t);
                    if (a.isHexa(t)) this.fromString(t);
                    else if (h.isBuffer(t)) this.fromBuffer(t);
                    else {
                        if (!r.isObject(t)) throw new o.InvalidArgument("Must provide an object or string to deserialize a transaction");
                        this.fromObject(t)
                    }
                } else this._newTransaction()
            }
            k.DUST_AMOUNT = 546, k.FEE_SECURITY_MARGIN = 150, k.MAX_MONEY = 16555e14, k.NLOCKTIME_BLOCKHEIGHT_LIMIT = 5e8, k.NLOCKTIME_MAX_VALUE = 4294967295, k.FEE_PER_KB = 1e5, k.CHANGE_OUTPUT_MAX_SIZE = 62, k.MAXIMUM_EXTRA_SIZE = 26, k.shallowCopy = function(t) {
                return new k(t.toBuffer())
            };
            var b = {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                        return this._hash = new c(this._getHash()).readReverse().toString("hex"), this._hash
                    }
                },
                N = {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                        return new c(this._getWitnessHash()).readReverse().toString("hex")
                    }
                };
            Object.defineProperty(k.prototype, "witnessHash", N), Object.defineProperty(k.prototype, "hash", b), Object.defineProperty(k.prototype, "id", b);
            var v = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._getInputAmount()
                }
            };
            Object.defineProperty(k.prototype, "inputAmount", v), v.get = function() {
                return this._getOutputAmount()
            }, Object.defineProperty(k.prototype, "outputAmount", v), k.prototype._getHash = function() {
                return f.sha256sha256(this.toBuffer(!0))
            }, k.prototype._getWitnessHash = function() {
                return f.sha256sha256(this.toBuffer(!1))
            }, k.prototype.serialize = function(t) {
                return !0 === t || t && t.disableAll ? this.uncheckedSerialize() : this.checkedSerialize(t)
            }, k.prototype.uncheckedSerialize = k.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, k.prototype.checkedSerialize = function(t) {
                var e = this.getSerializationError(t);
                if (e) throw e.message += " - For more information please see: https://bitcore.io/api/lib/transaction#serialization-checks", e;
                return this.uncheckedSerialize()
            }, k.prototype.invalidSatoshis = function() {
                for (var t = !1, e = 0; e < this.outputs.length; e++) this.outputs[e].invalidSatoshis() && (t = !0);
                return t
            }, k.prototype.getSerializationError = function(t) {
                if (t = t || {}, this.invalidSatoshis()) return new o.Transaction.InvalidSatoshis;
                var e, i = this._getUnspentValue();
                return i < 0 ? t.disableMoreOutputThanInput || (e = new o.Transaction.InvalidOutputAmountSum) : e = this._hasFeeError(t, i), e || this._hasDustOutputs(t) || this._isMissingSignatures(t)
            }, k.prototype._hasFeeError = function(t, e) {
                if (!r.isUndefined(this._fee) && this._fee !== e) return new o.Transaction.FeeError.Different("Unspent value is " + e + " but specified fee is " + this._fee);
                if (!t.disableLargeFees) {
                    var i = Math.floor(k.FEE_SECURITY_MARGIN * this._estimateFee());
                    if (e > i) return this._missingChange() ? new o.Transaction.ChangeAddressMissing("Fee is too large and no change address was provided") : new o.Transaction.FeeError.TooLarge("expected less than " + i + " but got " + e)
                }
                if (!t.disableSmallFees) {
                    var s = this._estimateFee();
                    if (e < s) return new o.Transaction.FeeError.TooSmall("expected more than " + s + " but got " + e)
                }
            }, k.prototype._missingChange = function() {
                return !this._changeScript
            }, k.prototype._hasDustOutputs = function(t) {
                var e, i;
                if (!t.disableDustOutputs)
                    for (e in this.outputs)
                        if ((i = this.outputs[e]).satoshis < k.DUST_AMOUNT && !i.script.isDataOut()) return new o.Transaction.DustOutputs
            }, k.prototype._isMissingSignatures = function(t) {
                if (!t.disableIsFullySigned) return this.isFullySigned() ? void 0 : new o.Transaction.MissingSignatures
            }, k.prototype.inspect = function() {
                return "<Transaction: " + this.uncheckedSerialize() + ">"
            }, k.prototype.toBuffer = function(t) {
                var e = new p;
                return this.toBufferWriter(e, t).toBuffer()
            }, k.prototype.hasWitnesses = function() {
                for (var t = 0; t < this.inputs.length; t++)
                    if (this.inputs[t].hasWitnesses()) return !0;
                return !1
            }, k.prototype.toBufferWriter = function(t, e) {
                t.writeInt32LE(this.version), t.writeInt32LE(this.timestamp);
                var i = this.hasWitnesses();
                return i && !e && t.write(new Buffer("0001", "hex")), t.writeVarintNum(this.inputs.length), r.each(this.inputs, (function(e) {
                    e.toBufferWriter(t)
                })), t.writeVarintNum(this.outputs.length), r.each(this.outputs, (function(e) {
                    e.toBufferWriter(t)
                })), i && !e && r.each(this.inputs, (function(e) {
                    var i = e.getWitnesses();
                    t.writeVarintNum(i.length);
                    for (var r = 0; r < i.length; r++) t.writeVarintNum(i[r].length), t.write(i[r])
                })), t.writeUInt32LE(this.nLockTime), t
            }, k.prototype.fromBuffer = function(t) {
                var e = new c(t);
                return this.fromBufferReader(e)
            }, k.prototype.fromBufferReader = function(t) {
                s.checkArgument(!t.finished(), "No transaction data received"), this.version = t.readInt32LE(), this.timestamp = t.readInt32LE();
                var e = t.readVarintNum(),
                    i = !1;
                0 === e && 0 !== t.buf[t.pos] && (t.pos += 1, i = !0, e = t.readVarintNum());
                for (var r = 0; r < e; r++) {
                    var n = I.fromBufferReader(t);
                    this.inputs.push(n)
                }
                for (var u = t.readVarintNum(), o = 0; o < u; o++) this.outputs.push(y.fromBufferReader(t));
                if (i)
                    for (var h = 0; h < e; h++) {
                        for (var a = t.readVarintNum(), c = [], p = 0; p < a; p++) {
                            var f = t.readVarintNum(),
                                _ = t.read(f);
                            c.push(_)
                        }
                        this.inputs[h].setWitnesses(c)
                    }
                return this.nLockTime = t.readUInt32LE(), this
            }, k.prototype.toObject = k.prototype.toJSON = function() {
                var t = [];
                this.inputs.forEach((function(e) {
                    t.push(e.toObject())
                }));
                var e = [];
                this.outputs.forEach((function(t) {
                    e.push(t.toObject())
                }));
                var i = {
                    hash: this.hash,
                    version: this.version,
                    timestamp: this.timestamp,
                    inputs: t,
                    outputs: e,
                    nLockTime: this.nLockTime
                };
                return this._changeScript && (i.changeScript = this._changeScript.toString()), r.isUndefined(this._changeIndex) || (i.changeIndex = this._changeIndex), r.isUndefined(this._fee) || (i.fee = this._fee), i
            }, k.prototype.fromObject = function(t) {
                s.checkArgument(r.isObject(t) || t instanceof k);
                var e, i = this;
                return e = t instanceof k ? e.toObject() : t, r.each(e.inputs, (function(t) {
                    if (t.output && t.output.script) {
                        var e, r = new A(t.output.script);
                        if (r.isPublicKeyHashOut()) e = new I.PublicKeyHash(t);
                        else if (r.isScriptHashOut() && t.publicKeys && t.threshold) e = new I.MultiSigScriptHash(t, t.publicKeys, t.threshold, t.signatures);
                        else {
                            if (!r.isPublicKeyOut()) throw new o.Transaction.Input.UnsupportedScript(t.output.script);
                            e = new I.PublicKey(t)
                        }
                        i.addInput(e)
                    } else i.uncheckedAddInput(new I(t))
                })), r.each(e.outputs, (function(t) {
                    i.addOutput(new y(t))
                })), e.changeIndex && (this._changeIndex = e.changeIndex), e.changeScript && (this._changeScript = new A(e.changeScript)), e.fee && (this._fee = e.fee), this.nLockTime = e.nLockTime, this.version = e.version, this.timestamp = e.timestamp, this._checkConsistency(t), this
            }, k.prototype._checkConsistency = function(t) {
                r.isUndefined(this._changeIndex) || (s.checkState(this._changeScript, "Change script is expected."), s.checkState(this.outputs[this._changeIndex], "Change index points to undefined output."), s.checkState(this.outputs[this._changeIndex].script.toString() === this._changeScript.toString(), "Change output has an unexpected script.")), t && t.hash && s.checkState(t.hash === this.hash, "Hash in object does not match transaction hash.")
            }, k.prototype.lockUntilDate = function(t) {
                if (s.checkArgument(t), r.isNumber(t) && t < k.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new o.Transaction.LockTimeTooEarly;
                r.isDate(t) && (t = t.getTime() / 1e3);
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === I.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = I.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, k.prototype.lockUntilBlockHeight = function(t) {
                if (s.checkArgument(r.isNumber(t)), t >= k.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new o.Transaction.BlockHeightTooHigh;
                if (t < 0) throw new o.Transaction.NLockTimeOutOfRange;
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === I.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = I.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, k.prototype.getLockTime = function() {
                return this.nLockTime ? this.nLockTime < k.NLOCKTIME_BLOCKHEIGHT_LIMIT ? this.nLockTime : new Date(1e3 * this.nLockTime) : null
            }, k.prototype.fromString = function(t) {
                this.fromBuffer(n.Buffer.from(t, "hex"))
            }, k.prototype._newTransaction = function() {
                this.version = 1, this.nLockTime = 0
            }, k.prototype.from = function(t, e, i, s, n) {
                if (r.isArray(t)) {
                    var u = this;
                    return r.each(t, (function(t) {
                        u.from(t, e, i)
                    })), this
                }
                return r.some(this.inputs, (function(e) {
                    return e.prevTxId.toString("hex") === t.txId && e.outputIndex === t.outputIndex
                })) || (e && i ? this._fromMultisigUtxo(t, e, i, s, n) : this._fromNonP2SH(t)), this
            }, k.prototype._fromNonP2SH = function(t) {
                var e;
                e = (t = new l(t)).script.isPublicKeyHashOut() ? O : t.script.isPublicKeyOut() ? P : I, this.addInput(new e({
                    output: new y({
                        script: t.script,
                        satoshis: t.satoshis
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: A.empty()
                }))
            }, k.prototype._fromMultisigUtxo = function(t, e, i, r, n) {
                var u;
                if (s.checkArgument(i <= e.length, "Number of required signatures must be greater than the number of public keys"), (t = new l(t)).script.isMultisigOut()) u = m;
                else {
                    if (!t.script.isScriptHashOut()) throw new Error("@TODO");
                    u = E
                }
                this.addInput(new u({
                    output: new y({
                        script: t.script,
                        satoshis: t.satoshis
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: A.empty()
                }, e, i, !1, r, n))
            }, k.prototype.addInput = function(t, e, i) {
                if (s.checkArgumentType(t, I, "input"), !t.output && (r.isUndefined(e) || r.isUndefined(i))) throw new o.Transaction.NeedMoreInfo("Need information about the UTXO script and satoshis");
                return t.output || !e || r.isUndefined(i) || (e = e instanceof A ? e : new A(e), s.checkArgumentType(i, "number", "satoshis"), t.output = new y({
                    script: e,
                    satoshis: i
                })), this.uncheckedAddInput(t)
            }, k.prototype.uncheckedAddInput = function(t) {
                return s.checkArgumentType(t, I, "input"), this.inputs.push(t), this._inputAmount = void 0, this._updateChangeOutput(), this
            }, k.prototype.hasAllUtxoInfo = function() {
                return r.every(this.inputs.map((function(t) {
                    return !!t.output
                })))
            }, k.prototype.fee = function(t) {
                return s.checkArgument(r.isNumber(t), "amount must be a number"), this._fee = t, this._updateChangeOutput(), this
            }, k.prototype.feePerKb = function(t) {
                return s.checkArgument(r.isNumber(t), "amount must be a number"), this._feePerKb = t, this._updateChangeOutput(), this
            }, k.prototype.feePerByte = function(t) {
                return s.checkArgument(r.isNumber(t), "amount must be a number"), this._feePerByte = t, this._updateChangeOutput(), this
            }, k.prototype.change = function(t) {
                return s.checkArgument(t, "address is required"), this._changeScript = A.fromAddress(t), this._updateChangeOutput(), this
            }, k.prototype.getChangeOutput = function() {
                return r.isUndefined(this._changeIndex) ? null : this.outputs[this._changeIndex]
            }, k.prototype.to = function(t, e) {
                if (r.isArray(t)) {
                    var i = this;
                    return r.each(t, (function(t) {
                        i.to(t.address, t.satoshis)
                    })), this
                }
                return s.checkArgument(a.isNaturalNumber(e), "Amount is expected to be a positive integer"), this.addOutput(new y({
                    script: A(new S(t)),
                    satoshis: e
                })), this
            }, k.prototype.addData = function(t) {
                return this.addOutput(new y({
                    script: A.buildDataOut(t),
                    satoshis: 0
                })), this
            }, k.prototype.addOutput = function(t) {
                return s.checkArgumentType(t, y, "output"), this._addOutput(t), this._updateChangeOutput(), this
            }, k.prototype.clearOutputs = function() {
                return this.outputs = [], this._clearSignatures(), this._outputAmount = void 0, this._changeIndex = void 0, this._updateChangeOutput(), this
            }, k.prototype._addOutput = function(t) {
                this.outputs.push(t), this._outputAmount = void 0
            }, k.prototype._getOutputAmount = function() {
                if (r.isUndefined(this._outputAmount)) {
                    var t = this;
                    this._outputAmount = 0, r.each(this.outputs, (function(e) {
                        t._outputAmount += e.satoshis
                    }))
                }
                return this._outputAmount
            }, k.prototype._getInputAmount = function() {
                return r.isUndefined(this._inputAmount) && (this._inputAmount = r.sumBy(this.inputs, (function(t) {
                    if (r.isUndefined(t.output)) throw new o.Transaction.Input.MissingPreviousOutput;
                    return t.output.satoshis
                }))), this._inputAmount
            }, k.prototype._updateChangeOutput = function() {
                if (this._changeScript) {
                    this._clearSignatures(), r.isUndefined(this._changeIndex) || this._removeOutput(this._changeIndex);
                    var t = this._getUnspentValue() - this.getFee();
                    t > 0 ? (this._changeIndex = this.outputs.length, this._addOutput(new y({
                        script: this._changeScript,
                        satoshis: t
                    }))) : this._changeIndex = void 0
                }
            }, k.prototype.getFee = function() {
                return this.isCoinbase() ? 0 : r.isUndefined(this._fee) ? this._changeScript ? this._estimateFee() : this._getUnspentValue() : this._fee
            }, k.prototype._estimateFee = function() {
                var t = this._estimateSize(),
                    e = this._getUnspentValue(),
                    i = this._feePerByte || (this._feePerKb || k.FEE_PER_KB) / 1e3;

                function r(t) {
                    return t * i
                }
                var s = Math.ceil(r(t)),
                    n = Math.ceil(r(t) + r(k.CHANGE_OUTPUT_MAX_SIZE));
                return !this._changeScript || e <= n ? s : n
            }, k.prototype._getUnspentValue = function() {
                return this._getInputAmount() - this._getOutputAmount()
            }, k.prototype._clearSignatures = function() {
                r.each(this.inputs, (function(t) {
                    t.clearSignatures()
                }))
            }, k.prototype._estimateSize = function() {
                var t = k.MAXIMUM_EXTRA_SIZE;
                return r.each(this.inputs, (function(e) {
                    t += e._estimateSize()
                })), r.each(this.outputs, (function(e) {
                    t += e.script.toBuffer().length + 9
                })), t
            }, k.prototype._removeOutput = function(t) {
                var e = this.outputs[t];
                this.outputs = r.without(this.outputs, e), this._outputAmount = void 0
            }, k.prototype.removeOutput = function(t) {
                this._removeOutput(t), this._updateChangeOutput()
            }, k.prototype.sort = function() {
                return this.sortInputs((function(t) {
                    var e = Array.prototype.concat.apply([], t);
                    return e.sort((function(t, e) {
                        return u(t.prevTxId, e.prevTxId) || t.outputIndex - e.outputIndex
                    })), e
                })), this.sortOutputs((function(t) {
                    var e = Array.prototype.concat.apply([], t);
                    return e.sort((function(t, e) {
                        return t.satoshis - e.satoshis || u(t.script.toBuffer(), e.script.toBuffer())
                    })), e
                })), this
            }, k.prototype.shuffleOutputs = function() {
                return this.sortOutputs(r.shuffle)
            }, k.prototype.sortOutputs = function(t) {
                var e = t(this.outputs);
                return this._newOutputOrder(e)
            }, k.prototype.sortInputs = function(t) {
                return this.inputs = t(this.inputs), this._clearSignatures(), this
            }, k.prototype._newOutputOrder = function(t) {
                if (this.outputs.length !== t.length || 0 !== r.difference(this.outputs, t).length) throw new o.Transaction.InvalidSorting;
                if (!r.isUndefined(this._changeIndex)) {
                    var e = this.outputs[this._changeIndex];
                    this._changeIndex = r.findIndex(t, e)
                }
                return this.outputs = t, this
            }, k.prototype.removeInput = function(t, e) {
                var i;
                if ((i = !e && r.isNumber(t) ? t : r.findIndex(this.inputs, (function(i) {
                        return i.prevTxId.toString("hex") === t && i.outputIndex === e
                    }))) < 0 || i >= this.inputs.length) throw new o.Transaction.InvalidIndex(i, this.inputs.length);
                var s = this.inputs[i];
                this.inputs = r.without(this.inputs, s), this._inputAmount = void 0, this._updateChangeOutput()
            }, k.prototype.sign = function(t, e) {
                s.checkState(this.hasAllUtxoInfo(), "Not all utxo information is available to sign the transaction.");
                var i = this;
                return r.isArray(t) ? (r.each(t, (function(t) {
                    i.sign(t, e)
                })), this) : (r.each(this.getSignatures(t, e), (function(t) {
                    i.applySignature(t)
                })), this)
            }, k.prototype.getSignatures = function(t, e) {
                t = new R(t), e = e || _.SIGHASH_ALL;
                var i = this,
                    s = [],
                    n = f.sha256ripemd160(t.publicKey.toBuffer());
                return r.each(this.inputs, (function(u, o) {
                    r.each(u.getSignatures(i, t, o, e, n), (function(t) {
                        s.push(t)
                    }))
                })), s
            }, k.prototype.applySignature = function(t) {
                return this.inputs[t.inputIndex].addSignature(this, t), this
            }, k.prototype.isFullySigned = function() {
                return r.each(this.inputs, (function(t) {
                    if (t.isFullySigned === I.prototype.isFullySigned) throw new o.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction")
                })), r.every(r.map(this.inputs, (function(t) {
                    return t.isFullySigned()
                })))
            }, k.prototype.isValidSignature = function(t) {
                if (this.inputs[t.inputIndex].isValidSignature === I.prototype.isValidSignature) throw new o.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction");
                return this.inputs[t.inputIndex].isValidSignature(this, t)
            }, k.prototype.verifySignature = function(t, e, i, n, u, o) {
                if (r.isUndefined(u) && (u = 0), 1 === u) {
                    var h, c = n.toBuffer(),
                        f = new p;
                    return f.writeVarintNum(c.length), f.write(c), o ? (s.checkState(a.isNaturalNumber(o)), h = (new p).writeUInt64LEBN(new T(o)).toBuffer()) : h = this.inputs[i].getSatoshisBuffer(), g.verify(this, t, e, i, f.toBuffer(), h)
                }
                return d.verify(this, t, e, i, n)
            }, k.prototype.verify = function() {
                if (0 === this.inputs.length) return "transaction txins empty";
                if (0 === this.outputs.length) return "transaction txouts empty";
                for (var t = new T(0), e = 0; e < this.outputs.length; e++) {
                    var i = this.outputs[e];
                    if (i.invalidSatoshis()) return "transaction txout " + e + " satoshis is invalid";
                    if (i._satoshisBN.gt(new T(k.MAX_MONEY, 10))) return "transaction txout " + e + " greater than MAX_MONEY";
                    if ((t = t.add(i._satoshisBN)).gt(new T(k.MAX_MONEY))) return "transaction txout " + e + " total output greater than MAX_MONEY"
                }
                if (this.toBuffer().length > 1e6) return "transaction over the maximum block size";
                var s = {};
                for (e = 0; e < this.inputs.length; e++) {
                    var n = this.inputs[e],
                        u = n.prevTxId + ":" + n.outputIndex;
                    if (!r.isUndefined(s[u])) return "transaction input " + e + " duplicate input";
                    s[u] = !0
                }
                if (this.isCoinbase()) {
                    var o = this.inputs[0]._scriptBuffer;
                    if (o.length < 2 || o.length > 100) return "coinbase transaction script size invalid"
                } else
                    for (e = 0; e < this.inputs.length; e++)
                        if (this.inputs[e].isNull()) return "transaction input " + e + " has null input";
                return !0
            }, k.prototype.isCoinbase = function() {
                return 1 === this.inputs.length && this.inputs[0].isNull()
            }, k.prototype.isRBF = function() {
                for (var t = 0; t < this.inputs.length; t++) {
                    if (this.inputs[t].sequenceNumber < I.MAXINT - 1) return !0
                }
                return !1
            }, k.prototype.enableRBF = function() {
                for (var t = 0; t < this.inputs.length; t++) {
                    var e = this.inputs[t];
                    e.sequenceNumber >= I.MAXINT - 1 && (e.sequenceNumber = I.DEFAULT_RBF_SEQNUMBER)
                }
                return this
            }, t.exports = k
        },
        6530: function(t, e, i) {
            t.exports = i(6050), t.exports.PublicKey = i(9459), t.exports.PublicKeyHash = i(9460), t.exports.MultiSig = i(9461), t.exports.MultiSigScriptHash = i(9462)
        },
        6531: function(t, e, i) {
            "use strict";
            var r = i(5626),
                s = (i(5627), i(5741), i(5740)),
                n = i(5628),
                u = (i(5592), i(5600)),
                o = i(6192),
                h = i(5497),
                a = i(5483),
                c = function(t, e, i, o, h) {
                    var a, c, p;
                    if (!(e & r.SIGHASH_ANYONECANPAY)) {
                        for (var f = [], _ = 0; _ < t.inputs.length; _++) {
                            var d = t.inputs[_],
                                g = new s(d.prevTxId).readReverse();
                            f.push(g);
                            var S = new Buffer(new Array(4));
                            S.writeUInt32LE(d.outputIndex, 0), f.push(S)
                        }
                        a = u.sha256sha256(Buffer.concat(f))
                    }
                    if (!(e & r.SIGHASH_ANYONECANPAY) && (31 & e) !== r.SIGHASH_SINGLE && (31 & e) !== r.SIGHASH_NONE) {
                        for (var l = [], I = 0; I < t.inputs.length; I++) {
                            var O = new Buffer(new Array(4));
                            O.writeUInt32LE(t.inputs[I].sequenceNumber, 0), l.push(O)
                        }
                        c = u.sha256sha256(Buffer.concat(l))
                    }
                    var P = new n;
                    if ((31 & e) !== r.SIGHASH_SINGLE && (31 & e) !== r.SIGHASH_NONE) {
                        for (var E = 0; E < t.outputs.length; E++) t.outputs[E].toBufferWriter(P);
                        p = u.sha256sha256(P.toBuffer())
                    } else(31 & e) === r.SIGHASH_SINGLE && i < t.outputs.length && (t.outputs[i].toBufferWriter(P), p = u.sha256sha256(P.toBuffer()));
                    var m = new n;
                    m.writeUInt32LE(t.version), m.write(a), m.write(c);
                    var y = new s(t.inputs[i].prevTxId).readReverse();
                    return m.write(y), m.writeUInt32LE(t.inputs[i].outputIndex), m.write(o), m.write(h), m.writeUInt32LE(t.inputs[i].sequenceNumber), m.write(p), m.writeUInt32LE(t.nLockTime), m.writeInt32LE(e), u.sha256sha256(m.toBuffer())
                };
            t.exports = {
                sighash: c,
                sign: function(t, e, i, r, s, n) {
                    var u = c(t, i, r, s, n);
                    return o.sign(u, e).set({
                        nhashtype: i
                    })
                },
                verify: function(t, e, i, r, s, n) {
                    h.checkArgument(!a.isUndefined(t)), h.checkArgument(!a.isUndefined(e) && !a.isUndefined(e.nhashtype));
                    var u = c(t, e.nhashtype, r, s, n);
                    return o.verify(u, e, i)
                }
            }
        },
        7258: function(t, e, i) {
            "use strict";
            var r = i(5784),
                s = i(5740),
                n = i(5628),
                u = i(5600),
                o = i(6528),
                h = i(5696),
                a = i(5626),
                c = i(5846),
                p = i(5497),
                f = i(5483),
                _ = i(5650),
                d = i(12),
                g = i(5537),
                S = i(5572),
                l = function t(e) {
                    return this instanceof t ? (this.chunks = [], g.isBuffer(e) ? t.fromBuffer(e) : e instanceof r ? t.fromAddress(e) : e instanceof t ? t.fromBuffer(e.toBuffer()) : f.isString(e) ? t.fromString(e) : void(f.isObject(e) && f.isArray(e.chunks) && this.set(e))) : new t(e)
                };
            l.prototype.set = function(t) {
                return p.checkArgument(f.isObject(t)), p.checkArgument(f.isArray(t.chunks)), this.chunks = t.chunks, this
            }, l.fromBuffer = function(t) {
                var e = new l;
                e.chunks = [];
                for (var i = new s(t); !i.finished();) try {
                    var r, n, u = i.readUInt8();
                    u > 0 && u < o.OP_PUSHDATA1 ? (r = u, e.chunks.push({
                        buf: i.read(r),
                        len: r,
                        opcodenum: u
                    })) : u === o.OP_PUSHDATA1 ? (r = i.readUInt8(), n = i.read(r), e.chunks.push({
                        buf: n,
                        len: r,
                        opcodenum: u
                    })) : u === o.OP_PUSHDATA2 ? (r = i.readUInt16LE(), n = i.read(r), e.chunks.push({
                        buf: n,
                        len: r,
                        opcodenum: u
                    })) : u === o.OP_PUSHDATA4 ? (r = i.readUInt32LE(), n = i.read(r), e.chunks.push({
                        buf: n,
                        len: r,
                        opcodenum: u
                    })) : e.chunks.push({
                        opcodenum: u
                    })
                } catch (e) {
                    if (e instanceof RangeError) throw new _.Script.InvalidBuffer(t.toString("hex"));
                    throw e
                }
                return e
            }, l.prototype.toBuffer = function() {
                for (var t = new n, e = 0; e < this.chunks.length; e++) {
                    var i = this.chunks[e],
                        r = i.opcodenum;
                    t.writeUInt8(i.opcodenum), i.buf && (r < o.OP_PUSHDATA1 ? t.write(i.buf) : r === o.OP_PUSHDATA1 ? (t.writeUInt8(i.len), t.write(i.buf)) : r === o.OP_PUSHDATA2 ? (t.writeUInt16LE(i.len), t.write(i.buf)) : r === o.OP_PUSHDATA4 && (t.writeUInt32LE(i.len), t.write(i.buf)))
                }
                return t.concat()
            }, l.fromASM = function(t) {
                var e = new l;
                e.chunks = [];
                for (var i = t.split(" "), r = 0; r < i.length;) {
                    var s = i[r],
                        n = o(s).toNumber();
                    if (f.isUndefined(n)) {
                        var u = Buffer.from(i[r], "hex");
                        e.chunks.push({
                            buf: u,
                            len: u.length,
                            opcodenum: u.length
                        }), r += 1
                    } else n === o.OP_PUSHDATA1 || n === o.OP_PUSHDATA2 || n === o.OP_PUSHDATA4 ? (e.chunks.push({
                        buf: Buffer.from(i[r + 2], "hex"),
                        len: parseInt(i[r + 1]),
                        opcodenum: n
                    }), r += 3) : (e.chunks.push({
                        opcodenum: n
                    }), r += 1)
                }
                return e
            }, l.fromHex = function(t) {
                return new l(new d.Buffer(t, "hex"))
            }, l.fromString = function(t) {
                if (S.isHexa(t) || 0 === t.length) return new l(new d.Buffer(t, "hex"));
                var e = new l;
                e.chunks = [];
                for (var i = t.split(" "), r = 0; r < i.length;) {
                    var s = i[r],
                        n = o(s).toNumber();
                    if (f.isUndefined(n)) {
                        if (!((n = parseInt(s)) > 0 && n < o.OP_PUSHDATA1)) throw new Error("Invalid script: " + JSON.stringify(t));
                        e.chunks.push({
                            buf: Buffer.from(i[r + 1].slice(2), "hex"),
                            len: n,
                            opcodenum: n
                        }), r += 2
                    } else if (n === o.OP_PUSHDATA1 || n === o.OP_PUSHDATA2 || n === o.OP_PUSHDATA4) {
                        if ("0x" !== i[r + 2].slice(0, 2)) throw new Error("Pushdata data must start with 0x");
                        e.chunks.push({
                            buf: Buffer.from(i[r + 2].slice(2), "hex"),
                            len: parseInt(i[r + 1]),
                            opcodenum: n
                        }), r += 3
                    } else e.chunks.push({
                        opcodenum: n
                    }), r += 1
                }
                return e
            }, l.prototype._chunkToString = function(t, e) {
                var i = t.opcodenum,
                    r = "asm" === e,
                    s = "";
                if (t.buf)(!r && i === o.OP_PUSHDATA1 || i === o.OP_PUSHDATA2 || i === o.OP_PUSHDATA4) && (s = s + " " + o(i).toString()), t.len > 0 && (s = r ? s + " " + t.buf.toString("hex") : s + " " + t.len + " 0x" + t.buf.toString("hex"));
                else if (void 0 !== o.reverseMap[i]) r ? 0 === i ? s += " 0" : 79 === i ? s += " -1" : s = s + " " + o(i).toString() : s = s + " " + o(i).toString();
                else {
                    var n = i.toString(16);
                    n.length % 2 != 0 && (n = "0" + n), s = r ? s + " " + n : s + " 0x" + n
                }
                return s
            }, l.prototype.toASM = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var i = this.chunks[e];
                    t += this._chunkToString(i, "asm")
                }
                return t.substr(1)
            }, l.prototype.toString = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var i = this.chunks[e];
                    t += this._chunkToString(i)
                }
                return t.substr(1)
            }, l.prototype.toHex = function() {
                return this.toBuffer().toString("hex")
            }, l.prototype.inspect = function() {
                return "<Script: " + this.toString() + ">"
            }, l.prototype.isPublicKeyHashOut = function() {
                return !(5 !== this.chunks.length || this.chunks[0].opcodenum !== o.OP_DUP || this.chunks[1].opcodenum !== o.OP_HASH160 || !this.chunks[2].buf || 20 !== this.chunks[2].buf.length || this.chunks[3].opcodenum !== o.OP_EQUALVERIFY || this.chunks[4].opcodenum !== o.OP_CHECKSIG)
            }, l.prototype.isPublicKeyHashIn = function() {
                if (2 === this.chunks.length) {
                    var t = this.chunks[0].buf,
                        e = this.chunks[1].buf;
                    if (t && t.length && 48 === t[0] && e && e.length) {
                        var i = e[0];
                        if ((4 === i || 6 === i || 7 === i) && 65 === e.length) return !0;
                        if ((3 === i || 2 === i) && 33 === e.length) return !0
                    }
                }
                return !1
            }, l.prototype.getPublicKey = function() {
                return p.checkState(this.isPublicKeyOut(), "Can't retrieve PublicKey from a non-PK output"), this.chunks[0].buf
            }, l.prototype.getPublicKeyHash = function() {
                return p.checkState(this.isPublicKeyHashOut(), "Can't retrieve PublicKeyHash from a non-PKH output"), this.chunks[2].buf
            }, l.prototype.isPublicKeyOut = function() {
                if (2 === this.chunks.length && this.chunks[0].buf && this.chunks[0].buf.length && this.chunks[1].opcodenum === o.OP_CHECKSIG) {
                    var t = this.chunks[0].buf,
                        e = t[0],
                        i = !1;
                    if ((4 !== e && 6 !== e && 7 !== e || 65 !== t.length) && (3 !== e && 2 !== e || 33 !== t.length) || (i = !0), i) return h.isValid(t)
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
                return 23 === t.length && t[0] === o.OP_HASH160 && 20 === t[1] && t[t.length - 1] === o.OP_EQUAL
            }, l.prototype.isWitnessScriptHashOut = function() {
                var t = this.toBuffer();
                return 34 === t.length && 0 === t[0] && 32 === t[1]
            }, l.prototype.isWitnessPublicKeyHashOut = function() {
                var t = this.toBuffer();
                return 22 === t.length && 0 === t[0] && 20 === t[1]
            }, l.prototype.isWitnessProgram = function(t) {
                t || (t = {});
                var e = this.toBuffer();
                return !(e.length < 4 || e.length > 42) && ((e[0] === o.OP_0 || e[0] >= o.OP_1 && e[0] <= o.OP_16) && (e.length === e[1] + 2 && (t.version = e[0], t.program = e.slice(2, e.length), !0)))
            }, l.prototype.isScriptHashIn = function() {
                if (this.chunks.length <= 1) return !1;
                var t, e = this.chunks[this.chunks.length - 1].buf;
                if (!e) return !1;
                try {
                    t = l.fromBuffer(e)
                } catch (t) {
                    if (t instanceof _.Script.InvalidBuffer) return !1;
                    throw t
                }
                return t.classify() !== l.types.UNKNOWN
            }, l.prototype.isMultisigOut = function() {
                return this.chunks.length > 3 && o.isSmallIntOp(this.chunks[0].opcodenum) && this.chunks.slice(1, this.chunks.length - 2).every((function(t) {
                    return t.buf && g.isBuffer(t.buf)
                })) && o.isSmallIntOp(this.chunks[this.chunks.length - 2].opcodenum) && this.chunks[this.chunks.length - 1].opcodenum === o.OP_CHECKMULTISIG
            }, l.prototype.isMultisigIn = function() {
                return this.chunks.length >= 2 && 0 === this.chunks[0].opcodenum && this.chunks.slice(1, this.chunks.length).every((function(t) {
                    return t.buf && g.isBuffer(t.buf) && a.isTxDER(t.buf)
                }))
            }, l.prototype.isDataOut = function() {
                return this.chunks.length >= 1 && this.chunks[0].opcodenum === o.OP_RETURN && (1 === this.chunks.length || 2 === this.chunks.length && this.chunks[1].buf && this.chunks[1].buf.length <= l.OP_RETURN_STANDARD_SIZE && this.chunks[1].length === this.chunks.len)
            }, l.prototype.getData = function() {
                if (this.isDataOut() || this.isScriptHashOut()) return f.isUndefined(this.chunks[1]) ? Buffer.alloc(0) : Buffer.from(this.chunks[1].buf);
                if (this.isPublicKeyHashOut()) return Buffer.from(this.chunks[2].buf);
                throw new Error("Unrecognized script type to get data from")
            }, l.prototype.isPushOnly = function() {
                return f.every(this.chunks, (function(t) {
                    return t.opcodenum <= o.OP_16
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
                else if (t instanceof o) this._addOpcode(t, e);
                else if (g.isBuffer(t)) this._addBuffer(t, e);
                else if (t instanceof l) this.chunks = this.chunks.concat(t.chunks);
                else {
                    if ("object" != typeof t) throw new Error("Invalid script chunk");
                    this._insertAtPosition(t, e)
                }
            }, l.prototype._insertAtPosition = function(t, e) {
                e ? this.chunks.unshift(t) : this.chunks.push(t)
            }, l.prototype._addOpcode = function(t, e) {
                var i;
                return i = "number" == typeof t ? t : t instanceof o ? t.toNumber() : o(t).toNumber(), this._insertAtPosition({
                    opcodenum: i
                }, e), this
            }, l.prototype._addBuffer = function(t, e) {
                var i, r = t.length;
                if (r >= 0 && r < o.OP_PUSHDATA1) i = r;
                else if (r < Math.pow(2, 8)) i = o.OP_PUSHDATA1;
                else if (r < Math.pow(2, 16)) i = o.OP_PUSHDATA2;
                else {
                    if (!(r < Math.pow(2, 32))) throw new Error("You can't push that much data");
                    i = o.OP_PUSHDATA4
                }
                return this._insertAtPosition({
                    buf: t,
                    len: r,
                    opcodenum: i
                }, e), this
            }, l.prototype.hasCodeseparators = function() {
                for (var t = 0; t < this.chunks.length; t++)
                    if (this.chunks[t].opcodenum === o.OP_CODESEPARATOR) return !0;
                return !1
            }, l.prototype.removeCodeseparators = function() {
                for (var t = [], e = 0; e < this.chunks.length; e++) this.chunks[e].opcodenum !== o.OP_CODESEPARATOR && t.push(this.chunks[e]);
                return this.chunks = t, this
            }, l.buildMultisigOut = function(t, e, i) {
                p.checkArgument(e <= t.length, "Number of required signatures must be less than or equal to the number of public keys"), i = i || {};
                var r = new l;
                r.add(o.smallInt(e));
                var s = t = f.map(t, h);
                i.noSorting || (s = f.sortBy(t, (function(t) {
                    return t.toString("hex")
                })));
                for (var n = 0; n < s.length; n++) {
                    var u = s[n];
                    r.add(u.toBuffer())
                }
                return r.add(o.smallInt(t.length)), r.add(o.OP_CHECKMULTISIG), r
            }, l.buildWitnessMultisigOutFromScript = function(t) {
                if (t instanceof l) {
                    var e = new l;
                    return e.add(o.OP_0), e.add(u.sha256(t.toBuffer())), e
                }
                throw new TypeError("First argument is expected to be a p2sh script")
            }, l.buildMultisigIn = function(t, e, i, r) {
                p.checkArgument(f.isArray(t)), p.checkArgument(f.isNumber(e)), p.checkArgument(f.isArray(i)), r = r || {};
                var s = new l;
                return s.add(o.OP_0), f.each(i, (function(t) {
                    p.checkArgument(g.isBuffer(t), "Signatures must be an array of Buffers"), s.add(t)
                })), s
            }, l.buildP2SHMultisigIn = function(t, e, i, r) {
                p.checkArgument(f.isArray(t)), p.checkArgument(f.isNumber(e)), p.checkArgument(f.isArray(i)), r = r || {};
                var s = new l;
                return s.add(o.OP_0), f.each(i, (function(t) {
                    p.checkArgument(g.isBuffer(t), "Signatures must be an array of Buffers"), s.add(t)
                })), s.add((r.cachedMultisig || l.buildMultisigOut(t, e, r)).toBuffer()), s
            }, l.buildPublicKeyHashOut = function(t) {
                p.checkArgument(!f.isUndefined(t)), p.checkArgument(t instanceof h || t instanceof r || f.isString(t)), t instanceof h ? t = t.toAddress() : f.isString(t) && (t = new r(t));
                var e = new l;
                return e.add(o.OP_DUP).add(o.OP_HASH160).add(t.hashBuffer).add(o.OP_EQUALVERIFY).add(o.OP_CHECKSIG), e._network = t.network, e
            }, l.buildPublicKeyOut = function(t) {
                p.checkArgument(t instanceof h);
                var e = new l;
                return e.add(t.toBuffer()).add(o.OP_CHECKSIG), e
            }, l.buildDataOut = function(t, e) {
                p.checkArgument(f.isUndefined(t) || f.isString(t) || g.isBuffer(t)), f.isString(t) && (t = Buffer.from(t, e));
                var i = new l;
                return i.add(o.OP_RETURN), f.isUndefined(t) || i.add(t), i
            }, l.buildScriptHashOut = function(t) {
                p.checkArgument(t instanceof l || t instanceof r && t.isPayToScriptHash());
                var e = new l;
                return e.add(o.OP_HASH160).add(t instanceof r ? t.hashBuffer : u.sha256ripemd160(t.toBuffer())).add(o.OP_EQUAL), e._network = t._network || t.network, e
            }, l.buildPublicKeyIn = function(t, e) {
                p.checkArgument(t instanceof a || g.isBuffer(t)), p.checkArgument(f.isUndefined(e) || f.isNumber(e)), t instanceof a && (t = t.toBuffer());
                var i = new l;
                return i.add(g.concat([t, g.integerAsSingleByteBuffer(e || a.SIGHASH_ALL)])), i
            }, l.buildPublicKeyHashIn = function(t, e, i) {
                return p.checkArgument(e instanceof a || g.isBuffer(e)), p.checkArgument(f.isUndefined(i) || f.isNumber(i)), e instanceof a && (e = e.toBuffer()), (new l).add(g.concat([e, g.integerAsSingleByteBuffer(i || a.SIGHASH_ALL)])).add(new h(t).toBuffer())
            }, l.empty = function() {
                return new l
            }, l.prototype.toScriptHashOut = function() {
                return l.buildScriptHashOut(this)
            }, l.fromAddress = function(t) {
                if ((t = r(t)).isPayToScriptHash()) return l.buildScriptHashOut(t);
                if (t.isPayToPublicKeyHash()) return l.buildPublicKeyHashOut(t);
                throw new _.Script.UnrecognizedAddress(t)
            }, l.prototype.getAddressInfo = function(t) {
                if (this._isInput) return this._getInputAddressInfo();
                if (this._isOutput) return this._getOutputAddressInfo();
                var e = this._getOutputAddressInfo();
                return e || this._getInputAddressInfo()
            }, l.prototype._getOutputAddressInfo = function() {
                var t = {};
                if (this.isScriptHashOut()) t.hashBuffer = this.getData(), t.type = r.PayToScriptHash;
                else {
                    if (!this.isPublicKeyHashOut()) return !1;
                    t.hashBuffer = this.getData(), t.type = r.PayToPublicKeyHash
                }
                return t
            }, l.prototype._getInputAddressInfo = function() {
                var t = {};
                if (this.isPublicKeyHashIn()) t.hashBuffer = u.sha256ripemd160(this.chunks[1].buf), t.type = r.PayToPublicKeyHash;
                else {
                    if (!this.isScriptHashIn()) return !1;
                    t.hashBuffer = u.sha256ripemd160(this.chunks[this.chunks.length - 1].buf), t.type = r.PayToScriptHash
                }
                return t
            }, l.prototype.toAddress = function(t) {
                var e = this.getAddressInfo();
                return !!e && (e.network = c.get(t) || this._network || c.defaultNetwork, new r(e))
            }, l.prototype.findAndDelete = function(t) {
                for (var e = t.toBuffer().toString("hex"), i = 0; i < this.chunks.length; i++) {
                    e === l({
                        chunks: [this.chunks[i]]
                    }).toBuffer().toString("hex") && this.chunks.splice(i, 1)
                }
                return this
            }, l.prototype.checkMinimalPush = function(t) {
                var e = this.chunks[t],
                    i = e.buf,
                    r = e.opcodenum;
                return !i || (0 === i.length ? r === o.OP_0 : 1 === i.length && i[0] >= 1 && i[0] <= 16 ? r === o.OP_1 + (i[0] - 1) : 1 === i.length && 129 === i[0] ? r === o.OP_1NEGATE : i.length <= 75 ? r === i.length : i.length <= 255 ? r === o.OP_PUSHDATA1 : !(i.length <= 65535) || r === o.OP_PUSHDATA2)
            }, l.prototype._decodeOP_N = function(t) {
                if (t === o.OP_0) return 0;
                if (t >= o.OP_1 && t <= o.OP_16) return t - (o.OP_1 - 1);
                throw new Error("Invalid opcode: " + JSON.stringify(t))
            }, l.prototype.getSignatureOperationsCount = function(t) {
                t = !!f.isUndefined(t) || t;
                var e = this,
                    i = 0,
                    r = o.OP_INVALIDOPCODE;
                return f.each(e.chunks, (function(s) {
                    var n = s.opcodenum;
                    n == o.OP_CHECKSIG || n == o.OP_CHECKSIGVERIFY ? i++ : n != o.OP_CHECKMULTISIG && n != o.OP_CHECKMULTISIGVERIFY || (t && r >= o.OP_1 && r <= o.OP_16 ? i += e._decodeOP_N(r) : i += 20), r = n
                })), i
            }, t.exports = l
        },
        7259: function(t, e, i) {
            "use strict";
            var r = i(5483),
                s = i(5497),
                n = i(5572),
                u = i(5627),
                o = i(5784),
                h = i(6532);

            function a(t) {
                if (!(this instanceof a)) return new a(t);
                s.checkArgument(r.isObject(t), "Must provide an object from where to extract data");
                var e = t.address ? new o(t.address) : void 0,
                    i = t.txid ? t.txid : t.txId;
                if (!i || !n.isHexaString(i) || i.length > 64) throw new Error("Invalid TXID in object", t);
                var c = r.isUndefined(t.vout) ? t.outputIndex : t.vout;
                if (!r.isNumber(c)) throw new Error("Invalid outputIndex, received " + c);
                s.checkArgument(!r.isUndefined(t.scriptPubKey) || !r.isUndefined(t.script), "Must provide the scriptPubKey for that output!");
                var p = new u(t.scriptPubKey || t.script);
                s.checkArgument(!r.isUndefined(t.amount) || !r.isUndefined(t.satoshis), "Must provide an amount for the output");
                var f = r.isUndefined(t.amount) ? t.satoshis : new h.fromBTC(t.amount).toSatoshis();
                s.checkArgument(r.isNumber(f), "Amount must be a number"), n.defineImmutable(this, {
                    address: e,
                    txId: i,
                    outputIndex: c,
                    script: p,
                    satoshis: f
                })
            }
            a.prototype.inspect = function() {
                return "<UnspentOutput: " + this.txId + ":" + this.outputIndex + ", satoshis: " + this.satoshis + ", address: " + this.address + ">"
            }, a.prototype.toString = function() {
                return this.txId + ":" + this.outputIndex
            }, a.fromObject = function(t) {
                return new a(t)
            }, a.prototype.toObject = a.prototype.toJSON = function() {
                return {
                    address: this.address ? this.address.toString() : void 0,
                    txid: this.txId,
                    vout: this.outputIndex,
                    scriptPubKey: this.script.toBuffer().toString("hex"),
                    amount: h.fromSatoshis(this.satoshis).toBTC()
                }
            }, t.exports = a
        },
        9458: function(t, e, i) {
            "use strict";
            var r = i(5483),
                s = i(7258),
                n = i(6528),
                u = i(5592),
                o = i(5600),
                h = i(5626),
                a = i(5696),
                c = function t(e) {
                    if (!(this instanceof t)) return new t(e);
                    e ? (this.initialize(), this.set(e)) : this.initialize()
                };
            c.prototype.verifyWitnessProgram = function(t, e, i, r, u) {
                var h = new s,
                    a = [];
                if (0 !== t) return !(u & c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM) || (this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM", !1);
                if (32 === e.length) {
                    if (0 === i.length) return this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_WITNESS_EMPTY", !1;
                    var p = i[i.length - 1];
                    if (h = new s(p), o.sha256(p).toString("hex") !== e.toString("hex")) return this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_MISMATCH", !1;
                    a = i.slice(0, -1)
                } else {
                    if (20 !== e.length) return this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_WRONG_LENGTH", !1;
                    if (2 !== i.length) return this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_MISMATCH", !1;
                    h.add(n.OP_DUP), h.add(n.OP_HASH160), h.add(e), h.add(n.OP_EQUALVERIFY), h.add(n.OP_CHECKSIG), a = i
                }
                if (this.initialize(), this.set({
                        script: h,
                        stack: a,
                        sigversion: 1,
                        satoshis: r,
                        flags: u
                    }), !this.evaluate()) return !1;
                if (1 !== this.stack.length) return this.errstr = "SCRIPT_ERR_EVAL_FALSE", !1;
                var f = this.stack[this.stack.length - 1];
                return !!c.castToBool(f) || (this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK", !1)
            }, c.prototype.verify = function(t, e, n, u, o, h, a) {
                var p, f = i(6195);
                if (r.isUndefined(n) && (n = new f), r.isUndefined(u) && (u = 0), r.isUndefined(o) && (o = 0), r.isUndefined(h) && (h = null), r.isUndefined(a) && (a = 0), this.set({
                        script: t,
                        tx: n,
                        nin: u,
                        sigversion: 0,
                        satoshis: 0,
                        flags: o
                    }), 0 != (o & c.SCRIPT_VERIFY_SIGPUSHONLY) && !t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                if (!this.evaluate()) return !1;
                o & c.SCRIPT_VERIFY_P2SH && (p = this.stack.slice());
                var _ = this.stack;
                if (this.initialize(), this.set({
                        script: e,
                        stack: _,
                        tx: n,
                        nin: u,
                        flags: o
                    }), !this.evaluate()) return !1;
                if (0 === this.stack.length) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_RESULT", !1;
                var d = this.stack[this.stack.length - 1];
                if (!c.castToBool(d)) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK", !1;
                var g = !1;
                if (o & c.SCRIPT_VERIFY_WITNESS) {
                    var S = {};
                    if (e.isWitnessProgram(S)) {
                        if (g = !0, 0 !== t.toBuffer().length) return !1;
                        if (!this.verifyWitnessProgram(S.version, S.program, h, a, this.flags)) return !1
                    }
                }
                if (o & c.SCRIPT_VERIFY_P2SH && e.isScriptHashOut()) {
                    if (!t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                    if (0 === p.length) throw new Error("internal error - stack copy empty");
                    var l = p[p.length - 1],
                        I = s.fromBuffer(l);
                    if (p.pop(), this.initialize(), this.set({
                            script: I,
                            stack: p,
                            tx: n,
                            nin: u,
                            flags: o
                        }), !this.evaluate()) return !1;
                    if (0 === p.length) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_P2SH_STACK", !1;
                    if (!c.castToBool(p[p.length - 1])) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_P2SH_STACK", !1;
                    if (o & c.SCRIPT_VERIFY_WITNESS) {
                        var O = {};
                        if (I.isWitnessProgram(O)) {
                            g = !0;
                            var P = new s;
                            if (P.add(I.toBuffer()), t.toHex() !== P.toHex()) return this.errstr = "SCRIPT_ERR_WITNESS_MALLEATED_P2SH", !1;
                            if (!this.verifyWitnessProgram(O.version, O.program, h, a, this.flags)) return !1;
                            _ = [_[0]]
                        }
                    }
                }
                if (0 != (this.flags & c.SCRIPT_VERIFY_CLEANSTACK)) {
                    if (0 == (this.flags & c.SCRIPT_VERIFY_P2SH)) throw "flags & SCRIPT_VERIFY_P2SH";
                    if (1 != p.length) return this.errstr = "SCRIPT_ERR_CLEANSTACK", !1
                }
                return !(this.flags & c.SCRIPT_VERIFY_WITNESS && !g && h.length > 0) || (this.errstr = "SCRIPT_ERR_WITNESS_UNEXPECTED", !1)
            }, t.exports = c, c.prototype.initialize = function(t) {
                this.stack = [], this.altstack = [], this.pc = 0, this.satoshis = 0, this.sigversion = 0, this.pbegincodehash = 0, this.nOpCount = 0, this.vfExec = [], this.errstr = "", this.flags = 0
            }, c.prototype.set = function(t) {
                this.script = t.script || this.script, this.tx = t.tx || this.tx, this.nin = void 0 !== t.nin ? t.nin : this.nin, this.stack = t.stack || this.stack, this.altstack = t.altack || this.altstack, this.pc = void 0 !== t.pc ? t.pc : this.pc, this.pbegincodehash = void 0 !== t.pbegincodehash ? t.pbegincodehash : this.pbegincodehash, this.sigversion = void 0 !== t.sigversion ? t.sigversion : this.sigversion, this.satoshis = void 0 !== t.satoshis ? t.satoshis : this.satoshis, this.nOpCount = void 0 !== t.nOpCount ? t.nOpCount : this.nOpCount, this.vfExec = t.vfExec || this.vfExec, this.errstr = t.errstr || this.errstr, this.flags = void 0 !== t.flags ? t.flags : this.flags
            }, c.true = Buffer.from([1]), c.false = Buffer.from([]), c.MAX_SCRIPT_ELEMENT_SIZE = 520, c.LOCKTIME_THRESHOLD_BN = new u(c.LOCKTIME_THRESHOLD = 5e8), c.SCRIPT_VERIFY_NONE = 0, c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM = 4096, c.SCRIPT_VERIFY_P2SH = 1, c.SCRIPT_VERIFY_STRICTENC = 2, c.SCRIPT_VERIFY_DERSIG = 4, c.SCRIPT_VERIFY_LOW_S = 8, c.SCRIPT_VERIFY_NULLDUMMY = 16, c.SCRIPT_VERIFY_SIGPUSHONLY = 32, c.SCRIPT_VERIFY_MINIMALDATA = 64, c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 128, c.SCRIPT_VERIFY_CLEANSTACK = 256, c.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY = 512, c.SCRIPT_VERIFY_WITNESS = 1024, c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 2048, c.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY = 1024, c.SCRIPT_VERIFY_MINIMALIF = 8192, c.SCRIPT_VERIFY_NULLFAIL = 16384, c.SCRIPT_VERIFY_WITNESS_PUBKEYTYPE = 32768, c.SCRIPT_ENABLE_SIGHASH_FORKID = 65536, c.SCRIPT_ENABLE_REPLAY_PROTECTION = 1 << 17, c.SCRIPT_ENABLE_MONOLITH_OPCODES = 1 << 18, c.SEQUENCE_LOCKTIME_DISABLE_FLAG = 1 << 31, c.SEQUENCE_LOCKTIME_TYPE_FLAG = 1 << 22, c.SEQUENCE_LOCKTIME_MASK = 65535, c.castToBool = function(t) {
                for (var e = 0; e < t.length; e++)
                    if (0 !== t[e]) return e !== t.length - 1 || 128 !== t[e];
                return !1
            }, c.prototype.checkSignatureEncoding = function(t) {
                if (0 == t.length) return !0;
                if (0 != (this.flags & (c.SCRIPT_VERIFY_DERSIG | c.SCRIPT_VERIFY_LOW_S | c.SCRIPT_VERIFY_STRICTENC)) && !h.isTxDER(t)) return this.errstr = "SCRIPT_ERR_SIG_DER_INVALID_FORMAT", !1;
                if (0 != (this.flags & c.SCRIPT_VERIFY_LOW_S)) {
                    if (!h.fromTxFormat(t).hasLowS()) return this.errstr = "SCRIPT_ERR_SIG_DER_HIGH_S", !1
                } else if (0 != (this.flags & c.SCRIPT_VERIFY_STRICTENC) && !h.fromTxFormat(t).hasDefinedHashtype()) return this.errstr = "SCRIPT_ERR_SIG_HASHTYPE", !1;
                return !0
            }, c.prototype.checkPubkeyEncoding = function(t) {
                return 0 == (this.flags & c.SCRIPT_VERIFY_STRICTENC) || a.isValid(t) ? !(0 != (this.flags & c.SCRIPT_VERIFY_WITNESS_PUBKEYTYPE) && 1 == this.sigversion && !a.fromBuffer(t).compressed) || (this.errstr = "SCRIPT_ERR_WITNESS_PUBKEYTYPE", !1) : (this.errstr = "SCRIPT_ERR_PUBKEYTYPE", !1)
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
                return !!(this.tx.nLockTime < c.LOCKTIME_THRESHOLD && t.lt(c.LOCKTIME_THRESHOLD_BN) || this.tx.nLockTime >= c.LOCKTIME_THRESHOLD && t.gte(c.LOCKTIME_THRESHOLD_BN)) && (!t.gt(new u(this.tx.nLockTime)) && !!this.tx.inputs[this.nin].isFinal())
            }, c.prototype.checkSequence = function(t) {
                var e = this.tx.inputs[this.nin].sequenceNumber;
                if (this.tx.version < 2) return !1;
                if (e & SEQUENCE_LOCKTIME_DISABLE_FLAG) return !1;
                var i = c.SEQUENCE_LOCKTIME_TYPE_FLAG | c.SEQUENCE_LOCKTIME_MASK,
                    r = new u(e & i),
                    s = t.and(i),
                    n = new u(c.SEQUENCE_LOCKTIME_TYPE_FLAG);
                return !!(r.lt(n) && s.lt(n) || r.gte(n) && s.gte(n)) && !s.gt(r)
            }, c.prototype.step = function() {
                var t, e, i, p, f, _, d, g, S, l, I, O, P, E, m, y, A, R = 0 != (this.flags & c.SCRIPT_VERIFY_MINIMALDATA),
                    T = -1 === this.vfExec.indexOf(!1),
                    k = this.script.chunks[this.pc];
                this.pc++;
                var b = k.opcodenum;
                if (r.isUndefined(b)) return this.errstr = "SCRIPT_ERR_UNDEFINED_OPCODE", !1;
                if (k.buf && k.buf.length > c.MAX_SCRIPT_ELEMENT_SIZE) return this.errstr = "SCRIPT_ERR_PUSH_SIZE", !1;
                if (b > n.OP_16 && ++this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                if (b === n.OP_CAT || b === n.OP_SUBSTR || b === n.OP_LEFT || b === n.OP_RIGHT || b === n.OP_INVERT || b === n.OP_AND || b === n.OP_OR || b === n.OP_XOR || b === n.OP_2MUL || b === n.OP_2DIV || b === n.OP_MUL || b === n.OP_DIV || b === n.OP_MOD || b === n.OP_LSHIFT || b === n.OP_RSHIFT) return this.errstr = "SCRIPT_ERR_DISABLED_OPCODE", !1;
                if (T && 0 <= b && b <= n.OP_PUSHDATA4) {
                    if (R && !this.script.checkMinimalPush(this.pc - 1)) return this.errstr = "SCRIPT_ERR_MINIMALDATA", !1;
                    if (k.buf) {
                        if (k.len !== k.buf.length) throw new Error("Length of push value not equal to length of data");
                        this.stack.push(k.buf)
                    } else this.stack.push(c.false)
                } else if (T || n.OP_IF <= b && b <= n.OP_ENDIF) switch (b) {
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
                        f = b - (n.OP_1 - 1), t = new u(f).toScriptNumBuffer(), this.stack.push(t);
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
                        var N = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], R, 5);
                        if (N.lt(new u(0))) return this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME", !1;
                        if (!this.checkLockTime(N)) return this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME", !1;
                        break;
                    case n.OP_NOP3:
                    case n.OP_CHECKSEQUENCEVERIFY:
                        if (!(this.flags & c.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY)) {
                            if (this.flags & c.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                            break
                        }
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var v = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], R, 5);
                        if (v.lt(new u(0))) return this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME", !1;
                        if (0 != (v & c.SEQUENCE_LOCKTIME_DISABLE_FLAG)) break;
                        if (!this.checkSequence(v)) return this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME", !1;
                        break;
                    case n.OP_NOP1:
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
                        if (y = !1, T) {
                            if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                            if (t = this.stack[this.stack.length - 1], this.flags & c.SCRIPT_VERIFY_MINIMALIF) {
                                if ((t = this.stack[this.stack.length - 1]).length > 1) return this.errstr = "SCRIPT_ERR_MINIMALIF", !1;
                                if (1 == t.length && 1 != t[0]) return this.errstr = "SCRIPT_ERR_MINIMALIF", !1
                            }
                            y = c.castToBool(t), b === n.OP_NOTIF && (y = !y), this.stack.pop()
                        }
                        this.vfExec.push(y);
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
                        if (t = this.stack[this.stack.length - 1], !(y = c.castToBool(t))) return this.errstr = "SCRIPT_ERR_VERIFY", !1;
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
                        e = this.stack[this.stack.length - 2], i = this.stack[this.stack.length - 1], this.stack.push(e), this.stack.push(i);
                        break;
                    case n.OP_3DUP:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 3], i = this.stack[this.stack.length - 2];
                        var C = this.stack[this.stack.length - 1];
                        this.stack.push(e), this.stack.push(i), this.stack.push(C);
                        break;
                    case n.OP_2OVER:
                        if (this.stack.length < 4) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 4], i = this.stack[this.stack.length - 3], this.stack.push(e), this.stack.push(i);
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
                        t = this.stack[this.stack.length - 1], (y = c.castToBool(t)) && this.stack.push(t);
                        break;
                    case n.OP_DEPTH:
                        t = new u(this.stack.length).toScriptNumBuffer(), this.stack.push(t);
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
                        if (t = this.stack[this.stack.length - 1], f = (g = u.fromScriptNumBuffer(t, R)).toNumber(), this.stack.pop(), f < 0 || f >= this.stack.length) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        t = this.stack[this.stack.length - f - 1], b === n.OP_ROLL && this.stack.splice(this.stack.length - f - 1, 1), this.stack.push(t);
                        break;
                    case n.OP_ROT:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = this.stack[this.stack.length - 3], d = this.stack[this.stack.length - 2];
                        var w = this.stack[this.stack.length - 1];
                        this.stack[this.stack.length - 3] = d, this.stack[this.stack.length - 2] = w, this.stack[this.stack.length - 1] = _;
                        break;
                    case n.OP_SWAP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = this.stack[this.stack.length - 2], d = this.stack[this.stack.length - 1], this.stack[this.stack.length - 2] = d, this.stack[this.stack.length - 1] = _;
                        break;
                    case n.OP_TUCK:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.splice(this.stack.length - 2, 0, this.stack[this.stack.length - 1]);
                        break;
                    case n.OP_SIZE:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        g = new u(this.stack[this.stack.length - 1].length), this.stack.push(g.toScriptNumBuffer());
                        break;
                    case n.OP_EQUAL:
                    case n.OP_EQUALVERIFY:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 2], i = this.stack[this.stack.length - 1];
                        var B = e.toString("hex") === i.toString("hex");
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(B ? c.true : c.false), b === n.OP_EQUALVERIFY) {
                            if (!B) return this.errstr = "SCRIPT_ERR_EQUALVERIFY", !1;
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
                        switch (t = this.stack[this.stack.length - 1], g = u.fromScriptNumBuffer(t, R), b) {
                            case n.OP_1ADD:
                                g = g.add(u.One);
                                break;
                            case n.OP_1SUB:
                                g = g.sub(u.One);
                                break;
                            case n.OP_NEGATE:
                                g = g.neg();
                                break;
                            case n.OP_ABS:
                                g.cmp(u.Zero) < 0 && (g = g.neg());
                                break;
                            case n.OP_NOT:
                                g = new u((0 === g.cmp(u.Zero)) + 0);
                                break;
                            case n.OP_0NOTEQUAL:
                                g = new u((0 !== g.cmp(u.Zero)) + 0)
                        }
                        this.stack.pop(), this.stack.push(g.toScriptNumBuffer());
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
                        switch (S = u.fromScriptNumBuffer(this.stack[this.stack.length - 2], R), l = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], R), g = new u(0), b) {
                            case n.OP_ADD:
                                g = S.add(l);
                                break;
                            case n.OP_SUB:
                                g = S.sub(l);
                                break;
                            case n.OP_BOOLAND:
                                g = new u((0 !== S.cmp(u.Zero) && 0 !== l.cmp(u.Zero)) + 0);
                                break;
                            case n.OP_BOOLOR:
                                g = new u((0 !== S.cmp(u.Zero) || 0 !== l.cmp(u.Zero)) + 0);
                                break;
                            case n.OP_NUMEQUAL:
                            case n.OP_NUMEQUALVERIFY:
                                g = new u((0 === S.cmp(l)) + 0);
                                break;
                            case n.OP_NUMNOTEQUAL:
                                g = new u((0 !== S.cmp(l)) + 0);
                                break;
                            case n.OP_LESSTHAN:
                                g = new u((S.cmp(l) < 0) + 0);
                                break;
                            case n.OP_GREATERTHAN:
                                g = new u((S.cmp(l) > 0) + 0);
                                break;
                            case n.OP_LESSTHANOREQUAL:
                                g = new u((S.cmp(l) <= 0) + 0);
                                break;
                            case n.OP_GREATERTHANOREQUAL:
                                g = new u((S.cmp(l) >= 0) + 0);
                                break;
                            case n.OP_MIN:
                                g = S.cmp(l) < 0 ? S : l;
                                break;
                            case n.OP_MAX:
                                g = S.cmp(l) > 0 ? S : l
                        }
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(g.toScriptNumBuffer()), b === n.OP_NUMEQUALVERIFY) {
                            if (!c.castToBool(this.stack[this.stack.length - 1])) return this.errstr = "SCRIPT_ERR_NUMEQUALVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case n.OP_WITHIN:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        S = u.fromScriptNumBuffer(this.stack[this.stack.length - 3], R), l = u.fromScriptNumBuffer(this.stack[this.stack.length - 2], R);
                        var U = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], R);
                        y = l.cmp(S) <= 0 && S.cmp(U) < 0, this.stack.pop(), this.stack.pop(), this.stack.pop(), this.stack.push(y ? c.true : c.false);
                        break;
                    case n.OP_RIPEMD160:
                    case n.OP_SHA1:
                    case n.OP_SHA256:
                    case n.OP_HASH160:
                    case n.OP_HASH256:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var L;
                        t = this.stack[this.stack.length - 1], b === n.OP_RIPEMD160 ? L = o.ripemd160(t) : b === n.OP_SHA1 ? L = o.sha1(t) : b === n.OP_SHA256 ? L = o.sha256(t) : b === n.OP_HASH160 ? L = o.sha256ripemd160(t) : b === n.OP_HASH256 && (L = o.sha256sha256(t)), this.stack.pop(), this.stack.push(L);
                        break;
                    case n.OP_CODESEPARATOR:
                        this.pbegincodehash = this.pc;
                        break;
                    case n.OP_CHECKSIG:
                    case n.OP_CHECKSIGVERIFY:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (I = this.stack[this.stack.length - 2], O = this.stack[this.stack.length - 1], !this.checkSignatureEncoding(I) || !this.checkPubkeyEncoding(O)) return !1;
                        P = (new s).set({
                            chunks: this.script.chunks.slice(this.pbegincodehash)
                        });
                        var x = (new s).add(I);
                        P.findAndDelete(x);
                        try {
                            E = h.fromTxFormat(I), m = a.fromBuffer(O, !1), A = this.tx.verifySignature(E, m, this.nin, P, this.sigversion, this.satoshis)
                        } catch (t) {
                            A = !1
                        }
                        if (!A && this.flags & c.SCRIPT_VERIFY_NULLFAIL && I.length) return this.errstr = "SCRIPT_ERR_NULLFAIL", !1;
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(A ? c.true : c.false), b === n.OP_CHECKSIGVERIFY) {
                            if (!A) return this.errstr = "SCRIPT_ERR_CHECKSIGVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case n.OP_CHECKMULTISIG:
                    case n.OP_CHECKMULTISIGVERIFY:
                        var H = 1;
                        if (this.stack.length < H) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var K = u.fromScriptNumBuffer(this.stack[this.stack.length - H], R).toNumber();
                        if (K < 0 || K > 20) return this.errstr = "SCRIPT_ERR_PUBKEY_COUNT", !1;
                        if (this.nOpCount += K, this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                        var D = ++H;
                        H += K;
                        var M = K + 2;
                        if (this.stack.length < H) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var F = u.fromScriptNumBuffer(this.stack[this.stack.length - H], R).toNumber();
                        if (F < 0 || F > K) return this.errstr = "SCRIPT_ERR_SIG_COUNT", !1;
                        var V = ++H;
                        if (H += F, this.stack.length < H) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        P = (new s).set({
                            chunks: this.script.chunks.slice(this.pbegincodehash)
                        });
                        for (var G = 0; G < F; G++) I = this.stack[this.stack.length - V - G], P.findAndDelete((new s).add(I));
                        for (A = !0; A && F > 0;) {
                            if (I = this.stack[this.stack.length - V], O = this.stack[this.stack.length - D], !this.checkSignatureEncoding(I) || !this.checkPubkeyEncoding(O)) return !1;
                            var Y;
                            try {
                                E = h.fromTxFormat(I), m = a.fromBuffer(O, !1), Y = this.tx.verifySignature(E, m, this.nin, P, this.sigversion, this.satoshis)
                            } catch (t) {
                                Y = !1
                            }
                            Y && (V++, F--), D++, F > --K && (A = !1)
                        }
                        for (; H-- > 1;) {
                            if (!A && this.flags & c.SCRIPT_VERIFY_NULLFAIL && !M && this.stack[this.stack.length - 1].length) return this.errstr = "SCRIPT_ERR_NULLFAIL", !1;
                            M > 0 && M--, this.stack.pop()
                        }
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (this.flags & c.SCRIPT_VERIFY_NULLDUMMY && this.stack[this.stack.length - 1].length) return this.errstr = "SCRIPT_ERR_SIG_NULLDUMMY", !1;
                        if (this.stack.pop(), this.stack.push(A ? c.true : c.false), b === n.OP_CHECKMULTISIGVERIFY) {
                            if (!A) return this.errstr = "SCRIPT_ERR_CHECKMULTISIGVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    default:
                        return this.errstr = "SCRIPT_ERR_BAD_OPCODE", !1
                }
                return !0
            }
        },
        9459: function(t, e, i) {
            "use strict";
            var r = i(6051),
                s = i(5497),
                n = (i(5537), i(6050)),
                u = i(5741),
                o = i(5785),
                h = i(5627),
                a = i(5626),
                c = i(6052);

            function p() {
                n.apply(this, arguments)
            }
            r(p, n), p.prototype.getSignatures = function(t, e, i, r) {
                s.checkState(this.output instanceof u), r = r || a.SIGHASH_ALL;
                var n = e.toPublicKey();
                return n.toString() === this.output.script.getPublicKey().toString("hex") ? [new c({
                    publicKey: n,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: i,
                    signature: o.sign(t, e, r, i, this.output.script),
                    sigtype: r
                })] : []
            }, p.prototype.addSignature = function(t, e) {
                return s.checkState(this.isValidSignature(t, e), "Signature is invalid"), this.setScript(h.buildPublicKeyIn(e.signature.toDER(), e.sigtype)), this
            }, p.prototype.clearSignatures = function() {
                return this.setScript(h.empty()), this
            }, p.prototype.isFullySigned = function() {
                return this.script.isPublicKeyIn()
            }, p.SCRIPT_MAX_SIZE = 73, p.prototype._estimateSize = function() {
                return p.SCRIPT_MAX_SIZE
            }, t.exports = p
        },
        9460: function(t, e, i) {
            "use strict";
            var r = i(6051),
                s = i(5497),
                n = i(5537),
                u = i(5600),
                o = i(6050),
                h = i(5741),
                a = i(5785),
                c = i(5627),
                p = i(5626),
                f = i(6052);

            function _() {
                o.apply(this, arguments)
            }
            r(_, o), _.prototype.getSignatures = function(t, e, i, r, o) {
                return s.checkState(this.output instanceof h), o = o || u.sha256ripemd160(e.publicKey.toBuffer()), r = r || p.SIGHASH_ALL, n.equals(o, this.output.script.getPublicKeyHash()) ? [new f({
                    publicKey: e.publicKey,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: i,
                    signature: a.sign(t, e, r, i, this.output.script),
                    sigtype: r
                })] : []
            }, _.prototype.addSignature = function(t, e) {
                return s.checkState(this.isValidSignature(t, e), "Signature is invalid"), this.setScript(c.buildPublicKeyHashIn(e.publicKey, e.signature.toDER(), e.sigtype)), this
            }, _.prototype.clearSignatures = function() {
                return this.setScript(c.empty()), this
            }, _.prototype.isFullySigned = function() {
                return this.script.isPublicKeyHashIn()
            }, _.SCRIPT_MAX_SIZE = 107, _.prototype._estimateSize = function() {
                return _.SCRIPT_MAX_SIZE
            }, t.exports = _
        },
        9461: function(t, e, i) {
            "use strict";
            var r = i(5483),
                s = i(6051),
                n = (i(6529), i(6050)),
                u = i(5741),
                o = i(5497),
                h = i(5627),
                a = i(5626),
                c = i(5785),
                p = (i(5696), i(5537)),
                f = i(6052);

            function _(t, e, i, s, u) {
                u = u || {}, n.apply(this, arguments);
                var a = this;
                e = e || t.publicKeys, i = i || t.threshold, s = s || t.signatures, u.noSorting ? this.publicKeys = e : this.publicKeys = r.sortBy(e, (function(t) {
                    return t.toString("hex")
                })), o.checkState(h.buildMultisigOut(this.publicKeys, i).equals(this.output.script), "Provided public keys don't match to the provided output script"), this.publicKeyIndex = {}, r.each(this.publicKeys, (function(t, e) {
                    a.publicKeyIndex[t.toString()] = e
                })), this.threshold = i, this.signatures = s ? this._deserializeSignatures(s) : new Array(this.publicKeys.length)
            }
            s(_, n), _.prototype.toObject = function() {
                var t = n.prototype.toObject.apply(this, arguments);
                return t.threshold = this.threshold, t.publicKeys = r.map(this.publicKeys, (function(t) {
                    return t.toString()
                })), t.signatures = this._serializeSignatures(), t
            }, _.prototype._deserializeSignatures = function(t) {
                return r.map(t, (function(t) {
                    if (t) return new f(t)
                }))
            }, _.prototype._serializeSignatures = function() {
                return r.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, _.prototype.getSignatures = function(t, e, i, s) {
                o.checkState(this.output instanceof u), s = s || a.SIGHASH_ALL;
                var n = this,
                    h = [];
                return r.each(this.publicKeys, (function(r) {
                    r.toString() === e.publicKey.toString() && h.push(new f({
                        publicKey: e.publicKey,
                        prevTxId: n.prevTxId,
                        outputIndex: n.outputIndex,
                        inputIndex: i,
                        signature: c.sign(t, e, s, i, n.output.script),
                        sigtype: s
                    }))
                })), h
            }, _.prototype.addSignature = function(t, e) {
                return o.checkState(!this.isFullySigned(), "All needed signatures have already been added"), o.checkArgument(!r.isUndefined(this.publicKeyIndex[e.publicKey.toString()]), "Signature has no matching public key"), o.checkState(this.isValidSignature(t, e)), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this._updateScript(), this
            }, _.prototype._updateScript = function() {
                return this.setScript(h.buildMultisigIn(this.publicKeys, this.threshold, this._createSignatures())), this
            }, _.prototype._createSignatures = function() {
                return r.map(r.filter(this.signatures, (function(t) {
                    return !r.isUndefined(t)
                })), (function(t) {
                    return p.concat([t.signature.toDER(), p.integerAsSingleByteBuffer(t.sigtype)])
                }))
            }, _.prototype.clearSignatures = function() {
                this.signatures = new Array(this.publicKeys.length), this._updateScript()
            }, _.prototype.isFullySigned = function() {
                return this.countSignatures() === this.threshold
            }, _.prototype.countMissingSignatures = function() {
                return this.threshold - this.countSignatures()
            }, _.prototype.countSignatures = function() {
                return r.reduce(this.signatures, (function(t, e) {
                    return t + !!e
                }), 0)
            }, _.prototype.publicKeysWithoutSignature = function() {
                var t = this;
                return r.filter(this.publicKeys, (function(e) {
                    return !t.signatures[t.publicKeyIndex[e.toString()]]
                }))
            }, _.prototype.isValidSignature = function(t, e) {
                return e.signature.nhashtype = e.sigtype, c.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script)
            }, _.normalizeSignatures = function(t, e, i, r, s) {
                return s.map((function(s) {
                    var n = null;
                    return r = r.filter((function(r) {
                        if (n) return !0;
                        var u = new f({
                            signature: a.fromTxFormat(r),
                            publicKey: s,
                            prevTxId: e.prevTxId,
                            outputIndex: e.outputIndex,
                            inputIndex: i,
                            sigtype: a.SIGHASH_ALL
                        });
                        return u.signature.nhashtype = u.sigtype, !c.verify(t, u.signature, u.publicKey, u.inputIndex, e.output.script) || (n = u, !1)
                    })), n || null
                }))
            }, _.OPCODES_SIZE = 1, _.SIGNATURE_SIZE = 73, _.prototype._estimateSize = function() {
                return _.OPCODES_SIZE + this.threshold * _.SIGNATURE_SIZE
            }, t.exports = _
        },
        9462: function(t, e, i) {
            "use strict";
            var r = i(5483),
                s = i(6051),
                n = i(6050),
                u = i(5741),
                o = i(5497),
                h = i(5627),
                a = i(5626),
                c = i(5785),
                p = i(6531),
                f = i(5628),
                _ = i(5537),
                d = i(6052);

            function g(t, e, i, s, u, a) {
                a = a || {}, n.apply(this, arguments);
                var c = this;
                if (e = e || t.publicKeys, i = i || t.threshold, s = s || t.signatures, this.nestedWitness = !!u, a.noSorting ? this.publicKeys = e : this.publicKeys = r.sortBy(e, (function(t) {
                        return t.toString("hex")
                    })), this.redeemScript = h.buildMultisigOut(this.publicKeys, i, a), this.nestedWitness) {
                    var p = h.buildWitnessMultisigOutFromScript(this.redeemScript);
                    o.checkState(h.buildScriptHashOut(p).equals(this.output.script), "Provided public keys don't hash to the provided output (nested witness)");
                    var f = new h;
                    f.add(p.toBuffer()), this.setScript(f)
                } else o.checkState(h.buildScriptHashOut(this.redeemScript).equals(this.output.script), "Provided public keys don't hash to the provided output");
                this.publicKeyIndex = {}, r.each(this.publicKeys, (function(t, e) {
                    c.publicKeyIndex[t.toString()] = e
                })), this.threshold = i, this.signatures = s ? this._deserializeSignatures(s) : new Array(this.publicKeys.length)
            }
            s(g, n), g.prototype.toObject = function() {
                var t = n.prototype.toObject.apply(this, arguments);
                return t.threshold = this.threshold, t.publicKeys = r.map(this.publicKeys, (function(t) {
                    return t.toString()
                })), t.signatures = this._serializeSignatures(), t
            }, g.prototype._deserializeSignatures = function(t) {
                return r.map(t, (function(t) {
                    if (t) return new d(t)
                }))
            }, g.prototype._serializeSignatures = function() {
                return r.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, g.prototype.getScriptCode = function() {
                var t = new f;
                if (this.redeemScript.hasCodeseparators()) throw new Error("@TODO");
                var e = this.redeemScript.toBuffer();
                return t.writeVarintNum(e.length), t.write(e), t.toBuffer()
            }, g.prototype.getSighash = function(t, e, i, r) {
                var s;
                if (this.nestedWitness) {
                    var n = this.getScriptCode(),
                        u = this.getSatoshisBuffer();
                    s = p.sighash(t, r, i, n, u)
                } else s = c.sighash(t, r, i, this.redeemScript);
                return s
            }, g.prototype.getSignatures = function(t, e, i, s) {
                o.checkState(this.output instanceof u), s = s || a.SIGHASH_ALL;
                var n = this,
                    h = [];
                return r.each(this.publicKeys, (function(r) {
                    if (r.toString() === e.publicKey.toString()) {
                        var u;
                        if (n.nestedWitness) {
                            var o = n.getScriptCode(),
                                a = n.getSatoshisBuffer();
                            u = p.sign(t, e, s, i, o, a)
                        } else u = c.sign(t, e, s, i, n.redeemScript);
                        h.push(new d({
                            publicKey: e.publicKey,
                            prevTxId: n.prevTxId,
                            outputIndex: n.outputIndex,
                            inputIndex: i,
                            signature: u,
                            sigtype: s
                        }))
                    }
                })), h
            }, g.prototype.addSignature = function(t, e) {
                return o.checkState(!this.isFullySigned(), "All needed signatures have already been added"), o.checkArgument(!r.isUndefined(this.publicKeyIndex[e.publicKey.toString()]), "Signature has no matching public key"), o.checkState(this.isValidSignature(t, e)), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this._updateScript(), this
            }, g.prototype._updateScript = function() {
                if (this.nestedWitness) {
                    for (var t = [new Buffer(0)], e = this._createSignatures(), i = 0; i < e.length; i++) t.push(e[i]);
                    t.push(this.redeemScript.toBuffer()), this.setWitnesses(t)
                } else {
                    var r = h.buildP2SHMultisigIn(this.publicKeys, this.threshold, this._createSignatures(), {
                        cachedMultisig: this.redeemScript
                    });
                    this.setScript(r)
                }
                return this
            }, g.prototype._createSignatures = function() {
                return r.map(r.filter(this.signatures, (function(t) {
                    return !r.isUndefined(t)
                })), (function(t) {
                    return _.concat([t.signature.toDER(), _.integerAsSingleByteBuffer(t.sigtype)])
                }))
            }, g.prototype.clearSignatures = function() {
                this.signatures = new Array(this.publicKeys.length), this._updateScript()
            }, g.prototype.isFullySigned = function() {
                return this.countSignatures() === this.threshold
            }, g.prototype.countMissingSignatures = function() {
                return this.threshold - this.countSignatures()
            }, g.prototype.countSignatures = function() {
                return r.reduce(this.signatures, (function(t, e) {
                    return t + !!e
                }), 0)
            }, g.prototype.publicKeysWithoutSignature = function() {
                var t = this;
                return r.filter(this.publicKeys, (function(e) {
                    return !t.signatures[t.publicKeyIndex[e.toString()]]
                }))
            }, g.prototype.isValidSignature = function(t, e) {
                if (this.nestedWitness) {
                    e.signature.nhashtype = e.sigtype;
                    var i = this.getScriptCode(),
                        r = this.getSatoshisBuffer();
                    return p.verify(t, e.signature, e.publicKey, e.inputIndex, i, r)
                }
                return e.signature.nhashtype = e.sigtype, c.verify(t, e.signature, e.publicKey, e.inputIndex, this.redeemScript)
            }, g.OPCODES_SIZE = 7, g.SIGNATURE_SIZE = 74, g.PUBKEY_SIZE = 34, g.prototype._estimateSize = function() {
                return g.OPCODES_SIZE + this.threshold * g.SIGNATURE_SIZE + this.publicKeys.length * g.PUBKEY_SIZE
            }, t.exports = g
        }
    }
]);