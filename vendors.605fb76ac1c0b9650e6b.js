(window.webpackJsonp = window.webpackJsonp || []).push([
    [302], {
        5671: function(t, e, i) {
            t.exports = i(7297), t.exports.Interpreter = i(9598)
        },
        5790: function(t, e, i) {
            "use strict";
            var s = i(12),
                n = i(5670),
                r = i(5671),
                u = i(5791),
                h = i(5789),
                o = i(5699),
                c = i(5601),
                a = i(5607),
                p = i(7295),
                f = i(5505),
                _ = i(5489),
                d = function(t, e, p, f) {
                    var _, d = i(6557),
                        l = i(6558),
                        g = d.shallowCopy(t);
                    for ((f = new r(f)).removeCodeseparators(), _ = 0; _ < g.inputs.length; _++) g.inputs[_] = new l(g.inputs[_]).setScript(r.empty());
                    if (g.inputs[p] = new l(g.inputs[p]).setScript(f), (31 & e) === n.SIGHASH_NONE || (31 & e) === n.SIGHASH_SINGLE)
                        for (_ = 0; _ < g.inputs.length; _++) _ !== p && (g.inputs[_].sequenceNumber = 0);
                    if ((31 & e) === n.SIGHASH_NONE) g.outputs = [];
                    else if ((31 & e) === n.SIGHASH_SINGLE) {
                        if (p >= g.outputs.length) return new Buffer("0000000000000000000000000000000000000000000000000000000000000001", "hex");
                        for (g.outputs.length = p + 1, _ = 0; _ < p; _++) g.outputs[_] = new u({
                            satoshis: c.fromBuffer(new s.Buffer("ffffffffffffffff", "hex")),
                            script: r.empty()
                        })
                    }
                    e & n.SIGHASH_ANYONECANPAY && (g.inputs = [g.inputs[p]]);
                    var I = (new o).write(g.toBuffer()).writeInt32LE(e).toBuffer(),
                        S = a.sha256sha256(I);
                    return S = new h(S).readReverse()
                };
            t.exports = {
                sighash: d,
                sign: function(t, e, i, s, n) {
                    var r = d(t, i, s, n);
                    return p.sign(r, e, "little").set({
                        nhashtype: i
                    })
                },
                verify: function(t, e, i, s, n) {
                    f.checkArgument(!_.isUndefined(t)), f.checkArgument(!_.isUndefined(e) && !_.isUndefined(e.nhashtype));
                    var r = d(t, e.nhashtype, s, n);
                    return p.verify(r, e, i, "little")
                }
            }
        },
        5791: function(t, e, i) {
            "use strict";
            var s = i(5489),
                n = i(5601),
                r = i(12),
                u = i(5516),
                h = i(5583),
                o = i(5699),
                c = i(5671),
                a = i(5505),
                p = i(5669);

            function f(t) {
                if (!(this instanceof f)) return new f(t);
                if (!s.isObject(t)) throw new TypeError("Unrecognized argument for Output");
                var e;
                this.satoshis = t.satoshis, u.isBuffer(t.script) ? this._scriptBuffer = t.script : (e = s.isString(t.script) && h.isHexa(t.script) ? new r.Buffer(t.script, "hex") : t.script, this.setScript(e))
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
                    t instanceof n ? (this._satoshisBN = t, this._satoshis = t.toNumber()) : s.isString(t) ? (this._satoshis = parseInt(t), this._satoshisBN = n.fromNumber(this._satoshis)) : (a.checkArgument(h.isNaturalNumber(t), "Output satoshis is not a natural number"), this._satoshisBN = n.fromNumber(t), this._satoshis = t), a.checkState(h.isNaturalNumber(this._satoshis), "Output satoshis is not a natural number")
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
                    this._script = c.fromBuffer(this._scriptBuffer), this._script._isOutput = !0
                } catch (t) {
                    if (!(t instanceof p.Script.InvalidBuffer)) throw t;
                    this._script = null
                }
            }, f.prototype.setScript = function(t) {
                if (t instanceof c) this._scriptBuffer = t.toBuffer(), this._script = t, this._script._isOutput = !0;
                else if (s.isString(t)) this._script = c.fromString(t), this._scriptBuffer = this._script.toBuffer(), this._script._isOutput = !0;
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
                return e.script = 0 !== i ? t.read(i) : new r.Buffer([]), new f(e)
            }, f.prototype.toBufferWriter = function(t) {
                t || (t = new o), t.writeUInt64LEBN(this._satoshisBN);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t
            }, t.exports = f
        },
        6061: function(t, e, i) {
            "use strict";
            var s = i(5489),
                n = i(5505),
                r = i(5669),
                u = i(5699),
                h = i(12),
                o = i(5516),
                c = i(5583),
                a = i(5671),
                p = i(5790),
                f = i(5791);

            function _(t) {
                return this instanceof _ ? t ? this._fromObject(t) : void 0 : new _(t)
            }
            _.MAXINT = 4294967295, _.DEFAULT_SEQNUMBER = 4294967295, _.DEFAULT_LOCKTIME_SEQNUMBER = 4294967294, _.DEFAULT_RBF_SEQNUMBER = 4294967293, Object.defineProperty(_.prototype, "script", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this.isNull() ? null : (this._script || (this._script = new a(this._scriptBuffer), this._script._isInput = !0), this._script)
                }
            }), _.fromObject = function(t) {
                return n.checkArgument(s.isObject(t)), (new _)._fromObject(t)
            }, _.prototype._fromObject = function(t) {
                var e;
                if (e = s.isString(t.prevTxId) && c.isHexa(t.prevTxId) ? new h.Buffer(t.prevTxId, "hex") : t.prevTxId, this.output = t.output ? t.output instanceof f ? t.output : new f(t.output) : void 0, this.prevTxId = e || t.txidbuf, this.outputIndex = s.isUndefined(t.outputIndex) ? t.txoutnum : t.outputIndex, this.sequenceNumber = s.isUndefined(t.sequenceNumber) ? s.isUndefined(t.seqnum) ? 4294967295 : t.seqnum : t.sequenceNumber, s.isUndefined(t.script) && s.isUndefined(t.scriptBuffer)) throw new r.Transaction.Input.MissingScript;
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
                if (this._script = null, t instanceof a) this._script = t, this._script._isInput = !0, this._scriptBuffer = t.toBuffer();
                else if (c.isHexa(t)) this._scriptBuffer = new h.Buffer(t, "hex");
                else if (s.isString(t)) this._script = new a(t), this._script._isInput = !0, this._scriptBuffer = this._script.toBuffer();
                else {
                    if (!o.isBuffer(t)) throw new TypeError("Invalid argument type: script");
                    this._scriptBuffer = new h.Buffer(t)
                }
                return this
            }, _.prototype.getSignatures = function() {
                throw new r.AbstractMethodInvoked("Trying to sign unsupported output type (only P2PKH and P2SH multisig inputs are supported) for input: " + JSON.stringify(this))
            }, _.prototype.isFullySigned = function() {
                throw new r.AbstractMethodInvoked("Input#isFullySigned")
            }, _.prototype.isFinal = function() {
                return 4294967295 !== this.sequenceNumber
            }, _.prototype.addSignature = function() {
                throw new r.AbstractMethodInvoked("Input#addSignature")
            }, _.prototype.clearSignatures = function() {
                throw new r.AbstractMethodInvoked("Input#clearSignatures")
            }, _.prototype.isValidSignature = function(t, e) {
                return e.signature.nhashtype = e.sigtype, p.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script)
            }, _.prototype.isNull = function() {
                return "0000000000000000000000000000000000000000000000000000000000000000" === this.prevTxId.toString("hex") && 4294967295 === this.outputIndex
            }, _.prototype._estimateSize = function() {
                return this.toBufferWriter().toBuffer().length
            }, t.exports = _
        },
        6063: function(t, e, i) {
            "use strict";
            var s = i(5489),
                n = i(5505),
                r = i(6062),
                u = i(5516),
                h = i(5583),
                o = i(5698),
                c = i(5669),
                a = i(5670);

            function p(t) {
                if (!(this instanceof p)) return new p(t);
                if (t instanceof p) return t;
                if (s.isObject(t)) return this._fromObject(t);
                throw new c.InvalidArgument("TransactionSignatures must be instantiated from an object")
            }
            r(p, a), p.prototype._fromObject = function(t) {
                return this._checkObjectArgs(t), this.publicKey = new o(t.publicKey), this.prevTxId = u.isBuffer(t.prevTxId) ? t.prevTxId : new Buffer(t.prevTxId, "hex"), this.outputIndex = t.outputIndex, this.inputIndex = t.inputIndex, this.signature = t.signature instanceof a ? t.signature : u.isBuffer(t.signature) ? a.fromBuffer(t.signature) : a.fromString(t.signature), this.sigtype = t.sigtype, this
            }, p.prototype._checkObjectArgs = function(t) {
                n.checkArgument(o(t.publicKey), "publicKey"), n.checkArgument(!s.isUndefined(t.inputIndex), "inputIndex"), n.checkArgument(!s.isUndefined(t.outputIndex), "outputIndex"), n.checkState(s.isNumber(t.inputIndex), "inputIndex must be a number"), n.checkState(s.isNumber(t.outputIndex), "outputIndex must be a number"), n.checkArgument(t.signature, "signature"), n.checkArgument(t.prevTxId, "prevTxId"), n.checkState(t.signature instanceof a || u.isBuffer(t.signature) || h.isHexa(t.signature), "signature must be a buffer or hexa value"), n.checkState(u.isBuffer(t.prevTxId) || h.isHexa(t.prevTxId), "prevTxId must be a buffer or hexa value"), n.checkArgument(t.sigtype, "sigtype"), n.checkState(s.isNumber(t.sigtype), "sigtype must be a number")
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
                return n.checkArgument(t), new p(t)
            }, t.exports = p
        },
        6211: function(t, e, i) {
            t.exports = i(6557), t.exports.Input = i(6558), t.exports.Output = i(5791), t.exports.UnspentOutput = i(7298), t.exports.Signature = i(6063), t.exports.Sighash = i(5790)
        },
        6557: function(t, e, i) {
            "use strict";
            var s = i(5489),
                n = i(5505),
                r = i(12),
                u = Buffer.compare || i(9599),
                h = i(5669),
                o = i(5516),
                c = i(5583),
                a = i(5789),
                p = i(5699),
                f = i(5607),
                _ = i(5670),
                d = i(5790),
                l = i(5850),
                g = i(7298),
                I = i(6558),
                S = I.PublicKeyHash,
                O = I.PublicKey,
                y = I.MultiSigScriptHash,
                P = I.MultiSig,
                k = i(5791),
                T = i(5671),
                A = i(6209),
                E = i(5601);

            function m(t) {
                if (!(this instanceof m)) return new m(t);
                if (this.inputs = [], this.outputs = [], this.witnessStack = [], this._inputAmount = void 0, this._outputAmount = void 0, this.dummy = void 0, this.flags = void 0, t) {
                    if (t instanceof m) return m.shallowCopy(t);
                    if (c.isHexa(t)) this.fromString(t);
                    else if (o.isBuffer(t)) this.fromBuffer(t);
                    else {
                        if (!s.isObject(t)) throw new h.InvalidArgument("Must provide an object or string to deserialize a transaction");
                        this.fromObject(t)
                    }
                } else this._newTransaction()
            }
            m.DUST_AMOUNT = 546, m.FEE_SECURITY_MARGIN = 15, m.MAX_MONEY = 21e14, m.NLOCKTIME_BLOCKHEIGHT_LIMIT = 5e8, m.NLOCKTIME_MAX_VALUE = 4294967295, m.FEE_PER_KB = 1e4, m.CHANGE_OUTPUT_MAX_SIZE = 62, m.MAXIMUM_EXTRA_SIZE = 26, m.shallowCopy = function(t) {
                return new m(t.toBuffer())
            };
            var R = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return new a(this._getHash()).readReverse().toString("hex")
                }
            };
            Object.defineProperty(m.prototype, "hash", R), Object.defineProperty(m.prototype, "id", R);
            var b = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._getInputAmount()
                }
            };
            Object.defineProperty(m.prototype, "inputAmount", b), b.get = function() {
                return this._getOutputAmount()
            }, Object.defineProperty(m.prototype, "outputAmount", b), m.prototype._getHash = function() {
                return f.sha256sha256(this.toHashBuffer())
            }, m.prototype.serialize = function(t) {
                return !0 === t || t && t.disableAll ? this.uncheckedSerialize() : this.checkedSerialize(t)
            }, m.prototype.uncheckedSerialize = m.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, m.prototype.checkedSerialize = function(t) {
                var e = this.getSerializationError(t);
                if (e) throw e.message += " Use Transaction#uncheckedSerialize if you want to skip security checks. See http://bitcore.io/guide/transaction.html#Serialization for more info.", e;
                return this.uncheckedSerialize()
            }, m.prototype.invalidSatoshis = function() {
                for (var t = !1, e = 0; e < this.outputs.length; e++) this.outputs[e].invalidSatoshis() && (t = !0);
                return t
            }, m.prototype.getSerializationError = function(t) {
                if (t = t || {}, this.invalidSatoshis()) return new h.Transaction.InvalidSatoshis;
                var e, i = this._getUnspentValue();
                return i < 0 ? t.disableMoreOutputThanInput || (e = new h.Transaction.InvalidOutputAmountSum) : e = this._hasFeeError(t, i), e || this._hasDustOutputs(t) || this._isMissingSignatures(t)
            }, m.prototype._hasFeeError = function(t, e) {
                if (!s.isUndefined(this._fee) && this._fee !== e) return new h.Transaction.FeeError.Different("Unspent value is " + e + " but specified fee is " + this._fee);
                if (!t.disableLargeFees) {
                    var i = Math.floor(m.FEE_SECURITY_MARGIN * this._estimateFee());
                    if (e > i) return this._missingChange() ? new h.Transaction.ChangeAddressMissing("Fee is too large and no change address was provided") : new h.Transaction.FeeError.TooLarge("expected less than " + i + " but got " + e)
                }
                if (!t.disableSmallFees) {
                    var n = Math.ceil(this._estimateFee() / m.FEE_SECURITY_MARGIN);
                    if (e < n) return new h.Transaction.FeeError.TooSmall("expected more than " + n + " but got " + e)
                }
            }, m.prototype._missingChange = function() {
                return !this._changeScript
            }, m.prototype._hasDustOutputs = function(t) {
                var e, i;
                if (!t.disableDustOutputs)
                    for (e in this.outputs)
                        if ((i = this.outputs[e]).satoshis < m.DUST_AMOUNT && !i.script.isDataOut()) return new h.Transaction.DustOutputs
            }, m.prototype._isMissingSignatures = function(t) {
                if (!t.disableIsFullySigned) return this.isFullySigned() ? void 0 : new h.Transaction.MissingSignatures
            }, m.prototype.inspect = function() {
                return "<Transaction: " + this.uncheckedSerialize() + ">"
            }, m.prototype.toBuffer = function() {
                var t = new p;
                return this.toBufferWriter(t).toBuffer()
            }, m.prototype.toHashBuffer = function() {
                var t = new p;
                return this.toHashBufferWriter(t).toBuffer()
            }, m.prototype.toBufferWriter = function(t) {
                if (t.writeInt32LE(this.version), void 0 !== this.dummy && t.writeUInt8(0), void 0 !== this.flags && (this.flags ? t.writeUInt8(1) : t.writeUInt8(0)), t.writeVarintNum(this.inputs.length), s.each(this.inputs, (function(e) {
                        e.toBufferWriter(t)
                    })), t.writeVarintNum(this.outputs.length), s.each(this.outputs, (function(e) {
                        e.toBufferWriter(t)
                    })), this.flags)
                    for (var e = 0; e < this.inputs.length; e++)
                        if (t.writeVarintNum(this.witnessStack[e].length), this.witnessStack[e].length)
                            for (var i = 0; i < this.witnessStack[e].length; i++) t.writeVarintNum(this.witnessStack[e][i].length), t.write(this.witnessStack[e][i]);
                return t.writeUInt32LE(this.nLockTime), t
            }, m.prototype.toHashBufferWriter = function(t) {
                return t.writeInt32LE(this.version), t.writeVarintNum(this.inputs.length), s.each(this.inputs, (function(e) {
                    e.toBufferWriter(t)
                })), t.writeVarintNum(this.outputs.length), s.each(this.outputs, (function(e) {
                    e.toBufferWriter(t)
                })), t.writeUInt32LE(this.nLockTime), t
            }, m.prototype.fromBuffer = function(t) {
                var e = new a(t);
                return this.fromBufferReader(e)
            }, m.prototype.fromBufferReader = function(t) {
                var e, i, s;
                for (n.checkArgument(!t.finished(), "No transaction data received"), this.version = t.readInt32LE(), (i = t.readVarintNum()) || (this.dummy = i, this.flags = t.readUInt8(), i = t.readVarintNum()), e = 0; e < i; e++) {
                    var r = I.fromBufferReader(t);
                    this.inputs.push(r)
                }
                for (s = t.readVarintNum(), e = 0; e < s; e++) this.outputs.push(k.fromBufferReader(t));
                if (this.flags)
                    for (e = 0; e < i; e++) {
                        var u = t.readVarintNum();
                        if (u) {
                            for (var h = [], o = 0; o < u; o++) {
                                var c = t.readVarintNum();
                                h.push(t.read(c))
                            }
                            this.witnessStack.push(h)
                        } else this.witnessStack.push([])
                    }
                return this.nLockTime = t.readUInt32LE(), this
            }, m.prototype.toObject = m.prototype.toJSON = function() {
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
                    inputs: t,
                    outputs: e,
                    nLockTime: this.nLockTime
                };
                return this._changeScript && (i.changeScript = this._changeScript.toString()), s.isUndefined(this._changeIndex) || (i.changeIndex = this._changeIndex), s.isUndefined(this._fee) || (i.fee = this._fee), i
            }, m.prototype.fromObject = function(t) {
                n.checkArgument(s.isObject(t) || t instanceof m);
                var e, i = this;
                return e = t instanceof m ? e.toObject() : t, s.each(e.inputs, (function(t) {
                    if (t.output && t.output.script) {
                        var e, s = new T(t.output.script);
                        if (s.isPublicKeyHashOut()) e = new I.PublicKeyHash(t);
                        else if (s.isScriptHashOut() && t.publicKeys && t.threshold) e = new I.MultiSigScriptHash(t, t.publicKeys, t.threshold, t.signatures);
                        else {
                            if (!s.isPublicKeyOut()) throw new h.Transaction.Input.UnsupportedScript(t.output.script);
                            e = new I.PublicKey(t)
                        }
                        i.addInput(e)
                    } else i.uncheckedAddInput(new I(t))
                })), s.each(e.outputs, (function(t) {
                    i.addOutput(new k(t))
                })), e.changeIndex && (this._changeIndex = e.changeIndex), e.changeScript && (this._changeScript = new T(e.changeScript)), e.fee && (this._fee = e.fee), this.nLockTime = e.nLockTime, this.version = e.version, this._checkConsistency(t), this
            }, m.prototype._checkConsistency = function(t) {
                s.isUndefined(this._changeIndex) || (n.checkState(this._changeScript), n.checkState(this.outputs[this._changeIndex]), n.checkState(this.outputs[this._changeIndex].script.toString() === this._changeScript.toString())), t && t.hash && n.checkState(t.hash === this.hash, "Hash in object does not match transaction hash")
            }, m.prototype.lockUntilDate = function(t) {
                if (n.checkArgument(t), s.isNumber(t) && t < m.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new h.Transaction.LockTimeTooEarly;
                s.isDate(t) && (t = t.getTime() / 1e3);
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === I.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = I.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, m.prototype.lockUntilBlockHeight = function(t) {
                if (n.checkArgument(s.isNumber(t)), t >= m.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new h.Transaction.BlockHeightTooHigh;
                if (t < 0) throw new h.Transaction.NLockTimeOutOfRange;
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === I.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = I.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, m.prototype.getLockTime = function() {
                return this.nLockTime ? this.nLockTime < m.NLOCKTIME_BLOCKHEIGHT_LIMIT ? this.nLockTime : new Date(1e3 * this.nLockTime) : null
            }, m.prototype.fromString = function(t) {
                this.fromBuffer(new r.Buffer(t, "hex"))
            }, m.prototype._newTransaction = function() {
                this.version = 1, this.nLockTime = 0
            }, m.prototype.from = function(t, e, i) {
                if (s.isArray(t)) {
                    var n = this;
                    return s.each(t, (function(t) {
                        n.from(t, e, i)
                    })), this
                }
                return s.any(this.inputs, (function(e) {
                    return e.prevTxId.toString("hex") === t.txId && e.outputIndex === t.outputIndex
                })) || (e && i ? this._fromMultisigUtxo(t, e, i) : this._fromNonP2SH(t)), this
            }, m.prototype._fromNonP2SH = function(t) {
                var e;
                e = (t = new g(t)).script.isPublicKeyHashOut() ? S : t.script.isPublicKeyOut() ? O : I, this.addInput(new e({
                    output: new k({
                        script: t.script,
                        satoshis: t.satoshis
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: T.empty()
                }))
            }, m.prototype._fromMultisigUtxo = function(t, e, i) {
                var s;
                if (n.checkArgument(i <= e.length, "Number of required signatures must be greater than the number of public keys"), (t = new g(t)).script.isMultisigOut()) s = P;
                else {
                    if (!t.script.isScriptHashOut()) throw new Error("@TODO");
                    s = y
                }
                this.addInput(new s({
                    output: new k({
                        script: t.script,
                        satoshis: t.satoshis
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: T.empty()
                }, e, i))
            }, m.prototype.addInput = function(t, e, i) {
                if (n.checkArgumentType(t, I, "input"), !t.output && (s.isUndefined(e) || s.isUndefined(i))) throw new h.Transaction.NeedMoreInfo("Need information about the UTXO script and satoshis");
                return t.output || !e || s.isUndefined(i) || (e = e instanceof T ? e : new T(e), n.checkArgumentType(i, "number", "satoshis"), t.output = new k({
                    script: e,
                    satoshis: i
                })), this.uncheckedAddInput(t)
            }, m.prototype.uncheckedAddInput = function(t) {
                return n.checkArgumentType(t, I, "input"), this.inputs.push(t), this._inputAmount = void 0, this._updateChangeOutput(), this
            }, m.prototype.hasAllUtxoInfo = function() {
                return s.all(this.inputs.map((function(t) {
                    return !!t.output
                })))
            }, m.prototype.fee = function(t) {
                return n.checkArgument(s.isNumber(t), "amount must be a number"), this._fee = t, this._updateChangeOutput(), this
            }, m.prototype.feePerKb = function(t) {
                return n.checkArgument(s.isNumber(t), "amount must be a number"), this._feePerKb = t, this._updateChangeOutput(), this
            }, m.prototype.change = function(t) {
                return n.checkArgument(t, "address is required"), this._changeScript = T.fromAddress(t), this._updateChangeOutput(), this
            }, m.prototype.getChangeOutput = function() {
                return s.isUndefined(this._changeIndex) ? null : this.outputs[this._changeIndex]
            }, m.prototype.to = function(t, e) {
                if (s.isArray(t)) {
                    var i = this;
                    return s.each(t, (function(t) {
                        i.to(t.address, t.satoshis)
                    })), this
                }
                return n.checkArgument(c.isNaturalNumber(e), "Amount is expected to be a positive integer"), this.addOutput(new k({
                    script: T(new l(t)),
                    satoshis: e
                })), this
            }, m.prototype.addData = function(t) {
                return this.addOutput(new k({
                    script: T.buildDataOut(t),
                    satoshis: 0
                })), this
            }, m.prototype.addOutput = function(t) {
                return n.checkArgumentType(t, k, "output"), this._addOutput(t), this._updateChangeOutput(), this
            }, m.prototype.clearOutputs = function() {
                return this.outputs = [], this._clearSignatures(), this._outputAmount = void 0, this._changeIndex = void 0, this._updateChangeOutput(), this
            }, m.prototype._addOutput = function(t) {
                this.outputs.push(t), this._outputAmount = void 0
            }, m.prototype._getOutputAmount = function() {
                if (s.isUndefined(this._outputAmount)) {
                    var t = this;
                    this._outputAmount = 0, s.each(this.outputs, (function(e) {
                        t._outputAmount += e.satoshis
                    }))
                }
                return this._outputAmount
            }, m.prototype._getInputAmount = function() {
                if (s.isUndefined(this._inputAmount)) {
                    var t = this;
                    this._inputAmount = 0, s.each(this.inputs, (function(e) {
                        if (s.isUndefined(e.output)) throw new h.Transaction.Input.MissingPreviousOutput;
                        t._inputAmount += e.output.satoshis
                    }))
                }
                return this._inputAmount
            }, m.prototype._updateChangeOutput = function() {
                if (this._changeScript) {
                    this._clearSignatures(), s.isUndefined(this._changeIndex) || this._removeOutput(this._changeIndex);
                    var t = this._getUnspentValue() - this.getFee();
                    t > 0 ? (this._changeIndex = this.outputs.length, this._addOutput(new k({
                        script: this._changeScript,
                        satoshis: t
                    }))) : this._changeIndex = void 0
                }
            }, m.prototype.getFee = function() {
                return this.isCoinbase() ? 0 : s.isUndefined(this._fee) ? this._changeScript ? this._estimateFee() : this._getUnspentValue() : this._fee
            }, m.prototype._estimateFee = function() {
                var t = this._estimateSize(),
                    e = this._getUnspentValue();
                return m._estimateFee(t, e, this._feePerKb)
            }, m.prototype._getUnspentValue = function() {
                return this._getInputAmount() - this._getOutputAmount()
            }, m.prototype._clearSignatures = function() {
                s.each(this.inputs, (function(t) {
                    t.clearSignatures()
                }))
            }, m._estimateFee = function(t, e, i) {
                return e > Math.ceil(t / 1e3) * (i || m.FEE_PER_KB) && (t += m.CHANGE_OUTPUT_MAX_SIZE), Math.ceil(t / 1e3) * (i || m.FEE_PER_KB)
            }, m.prototype._estimateSize = function() {
                var t = m.MAXIMUM_EXTRA_SIZE;
                return s.each(this.inputs, (function(e) {
                    t += e._estimateSize()
                })), s.each(this.outputs, (function(e) {
                    t += e.script.toBuffer().length + 9
                })), t
            }, m.prototype._removeOutput = function(t) {
                var e = this.outputs[t];
                this.outputs = s.without(this.outputs, e), this._outputAmount = void 0
            }, m.prototype.removeOutput = function(t) {
                this._removeOutput(t), this._updateChangeOutput()
            }, m.prototype.sort = function() {
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
            }, m.prototype.shuffleOutputs = function() {
                return this.sortOutputs(s.shuffle)
            }, m.prototype.sortOutputs = function(t) {
                var e = t(this.outputs);
                return this._newOutputOrder(e)
            }, m.prototype.sortInputs = function(t) {
                return this.inputs = t(this.inputs), this._clearSignatures(), this
            }, m.prototype._newOutputOrder = function(t) {
                if (this.outputs.length !== t.length || 0 !== s.difference(this.outputs, t).length) throw new h.Transaction.InvalidSorting;
                if (!s.isUndefined(this._changeIndex)) {
                    var e = this.outputs[this._changeIndex];
                    this._changeIndex = s.findIndex(t, e)
                }
                return this.outputs = t, this
            }, m.prototype.removeInput = function(t, e) {
                var i;
                if ((i = !e && s.isNumber(t) ? t : s.findIndex(this.inputs, (function(i) {
                        return i.prevTxId.toString("hex") === t && i.outputIndex === e
                    }))) < 0 || i >= this.inputs.length) throw new h.Transaction.InvalidIndex(i, this.inputs.length);
                var n = this.inputs[i];
                this.inputs = s.without(this.inputs, n), this._inputAmount = void 0, this._updateChangeOutput()
            }, m.prototype.sign = function(t, e) {
                n.checkState(this.hasAllUtxoInfo());
                var i = this;
                return s.isArray(t) ? (s.each(t, (function(t) {
                    i.sign(t, e)
                })), this) : (s.each(this.getSignatures(t, e), (function(t) {
                    i.applySignature(t)
                })), this)
            }, m.prototype.getSignatures = function(t, e) {
                t = new A(t), e = e || _.SIGHASH_ALL;
                var i = this,
                    n = [],
                    r = f.sha256ripemd160(t.publicKey.toBuffer());
                return s.each(this.inputs, (function(u, h) {
                    s.each(u.getSignatures(i, t, h, e, r), (function(t) {
                        n.push(t)
                    }))
                })), n
            }, m.prototype.applySignature = function(t) {
                return this.inputs[t.inputIndex].addSignature(this, t), this
            }, m.prototype.isFullySigned = function() {
                return s.each(this.inputs, (function(t) {
                    if (t.isFullySigned === I.prototype.isFullySigned) throw new h.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction")
                })), s.all(s.map(this.inputs, (function(t) {
                    return t.isFullySigned()
                })))
            }, m.prototype.isValidSignature = function(t) {
                if (this.inputs[t.inputIndex].isValidSignature === I.prototype.isValidSignature) throw new h.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction");
                return this.inputs[t.inputIndex].isValidSignature(this, t)
            }, m.prototype.verifySignature = function(t, e, i, s) {
                return d.verify(this, t, e, i, s)
            }, m.prototype.verify = function() {
                if (0 === this.inputs.length) return "transaction txins empty";
                if (0 === this.outputs.length) return "transaction txouts empty";
                for (var t = new E(0), e = 0; e < this.outputs.length; e++) {
                    var i = this.outputs[e];
                    if (i.invalidSatoshis()) return "transaction txout " + e + " satoshis is invalid";
                    if (i._satoshisBN.gt(new E(m.MAX_MONEY, 10))) return "transaction txout " + e + " greater than MAX_MONEY";
                    if ((t = t.add(i._satoshisBN)).gt(new E(m.MAX_MONEY))) return "transaction txout " + e + " total output greater than MAX_MONEY"
                }
                if (this.toBuffer().length > 1e6) return "transaction over the maximum block size";
                var n = {};
                for (e = 0; e < this.inputs.length; e++) {
                    var r = this.inputs[e],
                        u = r.prevTxId + ":" + r.outputIndex;
                    if (!s.isUndefined(n[u])) return "transaction input " + e + " duplicate input";
                    n[u] = !0
                }
                if (this.isCoinbase()) {
                    var h = this.inputs[0]._scriptBuffer;
                    if (h.length < 2 || h.length > 100) return "coinbase transaction script size invalid"
                } else
                    for (e = 0; e < this.inputs.length; e++)
                        if (this.inputs[e].isNull()) return "transaction input " + e + " has null input";
                return !0
            }, m.prototype.isCoinbase = function() {
                return 1 === this.inputs.length && this.inputs[0].isNull()
            }, m.prototype.isRBF = function() {
                for (var t = 0; t < this.inputs.length; t++) {
                    if (this.inputs[t].sequenceNumber < I.MAXINT - 1) return !0
                }
                return !1
            }, m.prototype.enableRBF = function() {
                for (var t = 0; t < this.inputs.length; t++) {
                    var e = this.inputs[t];
                    e.sequenceNumber >= I.MAXINT - 1 && (e.sequenceNumber = I.DEFAULT_RBF_SEQNUMBER)
                }
                return this
            }, t.exports = m
        },
        6558: function(t, e, i) {
            t.exports = i(6061), t.exports.PublicKey = i(9600), t.exports.PublicKeyHash = i(9601), t.exports.MultiSig = i(9602), t.exports.MultiSigScriptHash = i(9603)
        },
        7297: function(t, e, i) {
            "use strict";
            var s = i(5850),
                n = i(5789),
                r = i(5699),
                u = i(5607),
                h = i(6556),
                o = i(5698),
                c = i(5670),
                a = i(5849),
                p = i(5505),
                f = i(5489),
                _ = i(5669),
                d = i(12),
                l = i(5516),
                g = i(5583),
                I = function t(e) {
                    return this instanceof t ? (this.chunks = [], l.isBuffer(e) ? t.fromBuffer(e) : e instanceof s ? t.fromAddress(e) : e instanceof t ? t.fromBuffer(e.toBuffer()) : "string" == typeof e ? t.fromString(e) : void(void 0 !== e && this.set(e))) : new t(e)
                };
            I.prototype.set = function(t) {
                return this.chunks = t.chunks || this.chunks, this
            }, I.fromBuffer = function(t) {
                var e = new I;
                e.chunks = [];
                for (var i = new n(t); !i.finished();) try {
                    var s, r, u = i.readUInt8();
                    u > 0 && u < h.OP_PUSHDATA1 ? (s = u, e.chunks.push({
                        buf: i.read(s),
                        len: s,
                        opcodenum: u
                    })) : u === h.OP_PUSHDATA1 ? (s = i.readUInt8(), r = i.read(s), e.chunks.push({
                        buf: r,
                        len: s,
                        opcodenum: u
                    })) : u === h.OP_PUSHDATA2 ? (s = i.readUInt16LE(), r = i.read(s), e.chunks.push({
                        buf: r,
                        len: s,
                        opcodenum: u
                    })) : u === h.OP_PUSHDATA4 ? (s = i.readUInt32LE(), r = i.read(s), e.chunks.push({
                        buf: r,
                        len: s,
                        opcodenum: u
                    })) : e.chunks.push({
                        opcodenum: u
                    })
                } catch (e) {
                    if (e instanceof RangeError) throw new _.Script.InvalidBuffer(t.toString("hex"));
                    throw e
                }
                return e
            }, I.prototype.toBuffer = function() {
                for (var t = new r, e = 0; e < this.chunks.length; e++) {
                    var i = this.chunks[e],
                        s = i.opcodenum;
                    t.writeUInt8(i.opcodenum), i.buf && (s < h.OP_PUSHDATA1 ? t.write(i.buf) : s === h.OP_PUSHDATA1 ? (t.writeUInt8(i.len), t.write(i.buf)) : s === h.OP_PUSHDATA2 ? (t.writeUInt16LE(i.len), t.write(i.buf)) : s === h.OP_PUSHDATA4 && (t.writeUInt32LE(i.len), t.write(i.buf)))
                }
                return t.concat()
            }, I.fromASM = function(t) {
                var e = new I;
                e.chunks = [];
                for (var i = t.split(" "), s = 0; s < i.length;) {
                    var n = i[s],
                        r = h(n).toNumber();
                    if (f.isUndefined(r)) {
                        var u = new Buffer(i[s], "hex");
                        e.chunks.push({
                            buf: u,
                            len: u.length,
                            opcodenum: u.length
                        }), s += 1
                    } else r === h.OP_PUSHDATA1 || r === h.OP_PUSHDATA2 || r === h.OP_PUSHDATA4 ? (e.chunks.push({
                        buf: new Buffer(i[s + 2], "hex"),
                        len: parseInt(i[s + 1]),
                        opcodenum: r
                    }), s += 3) : (e.chunks.push({
                        opcodenum: r
                    }), s += 1)
                }
                return e
            }, I.fromHex = function(t) {
                return new I(new d.Buffer(t, "hex"))
            }, I.fromString = function(t) {
                if (g.isHexa(t) || 0 === t.length) return new I(new d.Buffer(t, "hex"));
                var e = new I;
                e.chunks = [];
                for (var i = t.split(" "), s = 0; s < i.length;) {
                    var n = i[s],
                        r = h(n).toNumber();
                    if (f.isUndefined(r)) {
                        if (!((r = parseInt(n)) > 0 && r < h.OP_PUSHDATA1)) throw new Error("Invalid script: " + JSON.stringify(t));
                        e.chunks.push({
                            buf: new Buffer(i[s + 1].slice(2), "hex"),
                            len: r,
                            opcodenum: r
                        }), s += 2
                    } else if (r === h.OP_PUSHDATA1 || r === h.OP_PUSHDATA2 || r === h.OP_PUSHDATA4) {
                        if ("0x" !== i[s + 2].slice(0, 2)) throw new Error("Pushdata data must start with 0x");
                        e.chunks.push({
                            buf: new Buffer(i[s + 2].slice(2), "hex"),
                            len: parseInt(i[s + 1]),
                            opcodenum: r
                        }), s += 3
                    } else e.chunks.push({
                        opcodenum: r
                    }), s += 1
                }
                return e
            }, I.prototype._chunkToString = function(t, e) {
                var i = t.opcodenum,
                    s = "asm" === e,
                    n = "";
                if (t.buf) i !== h.OP_PUSHDATA1 && i !== h.OP_PUSHDATA2 && i !== h.OP_PUSHDATA4 || (n = n + " " + h(i).toString()), t.len > 0 && (n = s ? n + " " + t.buf.toString("hex") : n + " " + t.len + " 0x" + t.buf.toString("hex"));
                else if (void 0 !== h.reverseMap[i]) n = n + " " + h(i).toString();
                else {
                    var r = i.toString(16);
                    r.length % 2 != 0 && (r = "0" + r), n = s ? n + " " + r : n + " 0x" + r
                }
                return n
            }, I.prototype.toASM = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var i = this.chunks[e];
                    t += this._chunkToString(i, "asm")
                }
                return t.substr(1)
            }, I.prototype.toString = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var i = this.chunks[e];
                    t += this._chunkToString(i)
                }
                return t.substr(1)
            }, I.prototype.toHex = function() {
                return this.toBuffer().toString("hex")
            }, I.prototype.inspect = function() {
                return "<Script: " + this.toString() + ">"
            }, I.prototype.isPublicKeyHashOut = function() {
                return !(5 !== this.chunks.length || this.chunks[0].opcodenum !== h.OP_DUP || this.chunks[1].opcodenum !== h.OP_HASH160 || !this.chunks[2].buf || 20 !== this.chunks[2].buf.length || this.chunks[3].opcodenum !== h.OP_EQUALVERIFY || this.chunks[4].opcodenum !== h.OP_CHECKSIG)
            }, I.prototype.isPublicKeyHashIn = function() {
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
            }, I.prototype.getPublicKey = function() {
                return p.checkState(this.isPublicKeyOut(), "Can't retrieve PublicKey from a non-PK output"), this.chunks[0].buf
            }, I.prototype.getPublicKeyHash = function() {
                return p.checkState(this.isPublicKeyHashOut(), "Can't retrieve PublicKeyHash from a non-PKH output"), this.chunks[2].buf
            }, I.prototype.isPublicKeyOut = function() {
                if (2 === this.chunks.length && this.chunks[0].buf && this.chunks[0].buf.length && this.chunks[1].opcodenum === h.OP_CHECKSIG) {
                    var t = this.chunks[0].buf,
                        e = t[0],
                        i = !1;
                    if ((4 !== e && 6 !== e && 7 !== e || 65 !== t.length) && (3 !== e && 2 !== e || 33 !== t.length) || (i = !0), i) return o.isValid(t)
                }
                return !1
            }, I.prototype.isPublicKeyIn = function() {
                if (1 === this.chunks.length) {
                    var t = this.chunks[0].buf;
                    if (t && t.length && 48 === t[0]) return !0
                }
                return !1
            }, I.prototype.isScriptHashOut = function() {
                var t = this.toBuffer();
                return 23 === t.length && t[0] === h.OP_HASH160 && 20 === t[1] && t[t.length - 1] === h.OP_EQUAL
            }, I.prototype.isScriptHashIn = function() {
                if (this.chunks.length <= 1) return !1;
                var t, e = this.chunks[this.chunks.length - 1].buf;
                if (!e) return !1;
                try {
                    t = I.fromBuffer(e)
                } catch (t) {
                    if (t instanceof _.Script.InvalidBuffer) return !1;
                    throw t
                }
                return t.classify() !== I.types.UNKNOWN
            }, I.prototype.isMultisigOut = function() {
                return this.chunks.length > 3 && h.isSmallIntOp(this.chunks[0].opcodenum) && this.chunks.slice(1, this.chunks.length - 2).every((function(t) {
                    return t.buf && l.isBuffer(t.buf)
                })) && h.isSmallIntOp(this.chunks[this.chunks.length - 2].opcodenum) && this.chunks[this.chunks.length - 1].opcodenum === h.OP_CHECKMULTISIG
            }, I.prototype.isMultisigIn = function() {
                return this.chunks.length >= 2 && 0 === this.chunks[0].opcodenum && this.chunks.slice(1, this.chunks.length).every((function(t) {
                    return t.buf && l.isBuffer(t.buf) && c.isTxDER(t.buf)
                }))
            }, I.prototype.isDataOut = function() {
                return this.chunks.length >= 1 && this.chunks[0].opcodenum === h.OP_RETURN && (1 === this.chunks.length || 2 === this.chunks.length && this.chunks[1].buf && this.chunks[1].buf.length <= I.OP_RETURN_STANDARD_SIZE && this.chunks[1].length === this.chunks.len)
            }, I.prototype.getData = function() {
                if (this.isDataOut() || this.isScriptHashOut()) return f.isUndefined(this.chunks[1]) ? new Buffer(0) : new Buffer(this.chunks[1].buf);
                if (this.isPublicKeyHashOut()) return new Buffer(this.chunks[2].buf);
                throw new Error("Unrecognized script type to get data from")
            }, I.prototype.isPushOnly = function() {
                return f.every(this.chunks, (function(t) {
                    return t.opcodenum <= h.OP_16
                }))
            }, (I.types = {}).UNKNOWN = "Unknown", I.types.PUBKEY_OUT = "Pay to public key", I.types.PUBKEY_IN = "Spend from public key", I.types.PUBKEYHASH_OUT = "Pay to public key hash", I.types.PUBKEYHASH_IN = "Spend from public key hash", I.types.SCRIPTHASH_OUT = "Pay to script hash", I.types.SCRIPTHASH_IN = "Spend from script hash", I.types.MULTISIG_OUT = "Pay to multisig", I.types.MULTISIG_IN = "Spend from multisig", I.types.DATA_OUT = "Data push", I.OP_RETURN_STANDARD_SIZE = 80, I.prototype.classify = function() {
                if (this._isInput) return this.classifyInput();
                if (this._isOutput) return this.classifyOutput();
                var t = this.classifyOutput();
                return t != I.types.UNKNOWN ? t : this.classifyInput()
            }, (I.outputIdentifiers = {}).PUBKEY_OUT = I.prototype.isPublicKeyOut, I.outputIdentifiers.PUBKEYHASH_OUT = I.prototype.isPublicKeyHashOut, I.outputIdentifiers.MULTISIG_OUT = I.prototype.isMultisigOut, I.outputIdentifiers.SCRIPTHASH_OUT = I.prototype.isScriptHashOut, I.outputIdentifiers.DATA_OUT = I.prototype.isDataOut, I.prototype.classifyOutput = function() {
                for (var t in I.outputIdentifiers)
                    if (I.outputIdentifiers[t].bind(this)()) return I.types[t];
                return I.types.UNKNOWN
            }, (I.inputIdentifiers = {}).PUBKEY_IN = I.prototype.isPublicKeyIn, I.inputIdentifiers.PUBKEYHASH_IN = I.prototype.isPublicKeyHashIn, I.inputIdentifiers.MULTISIG_IN = I.prototype.isMultisigIn, I.inputIdentifiers.SCRIPTHASH_IN = I.prototype.isScriptHashIn, I.prototype.classifyInput = function() {
                for (var t in I.inputIdentifiers)
                    if (I.inputIdentifiers[t].bind(this)()) return I.types[t];
                return I.types.UNKNOWN
            }, I.prototype.isStandard = function() {
                return this.classify() !== I.types.UNKNOWN
            }, I.prototype.prepend = function(t) {
                return this._addByType(t, !0), this
            }, I.prototype.equals = function(t) {
                if (p.checkState(t instanceof I, "Must provide another script"), this.chunks.length !== t.chunks.length) return !1;
                var e;
                for (e = 0; e < this.chunks.length; e++) {
                    if (l.isBuffer(this.chunks[e].buf) && !l.isBuffer(t.chunks[e].buf)) return !1;
                    if (l.isBuffer(this.chunks[e].buf) && !l.equals(this.chunks[e].buf, t.chunks[e].buf)) return !1;
                    if (this.chunks[e].opcodenum !== t.chunks[e].opcodenum) return !1
                }
                return !0
            }, I.prototype.add = function(t) {
                return this._addByType(t, !1), this
            }, I.prototype._addByType = function(t, e) {
                if ("string" == typeof t) this._addOpcode(t, e);
                else if ("number" == typeof t) this._addOpcode(t, e);
                else if (t instanceof h) this._addOpcode(t, e);
                else if (l.isBuffer(t)) this._addBuffer(t, e);
                else if (t instanceof I) this.chunks = this.chunks.concat(t.chunks);
                else {
                    if ("object" != typeof t) throw new Error("Invalid script chunk");
                    this._insertAtPosition(t, e)
                }
            }, I.prototype._insertAtPosition = function(t, e) {
                e ? this.chunks.unshift(t) : this.chunks.push(t)
            }, I.prototype._addOpcode = function(t, e) {
                var i;
                return i = "number" == typeof t ? t : t instanceof h ? t.toNumber() : h(t).toNumber(), this._insertAtPosition({
                    opcodenum: i
                }, e), this
            }, I.prototype._addBuffer = function(t, e) {
                var i, s = t.length;
                if (s >= 0 && s < h.OP_PUSHDATA1) i = s;
                else if (s < Math.pow(2, 8)) i = h.OP_PUSHDATA1;
                else if (s < Math.pow(2, 16)) i = h.OP_PUSHDATA2;
                else {
                    if (!(s < Math.pow(2, 32))) throw new Error("You can't push that much data");
                    i = h.OP_PUSHDATA4
                }
                return this._insertAtPosition({
                    buf: t,
                    len: s,
                    opcodenum: i
                }, e), this
            }, I.prototype.removeCodeseparators = function() {
                for (var t = [], e = 0; e < this.chunks.length; e++) this.chunks[e].opcodenum !== h.OP_CODESEPARATOR && t.push(this.chunks[e]);
                return this.chunks = t, this
            }, I.buildMultisigOut = function(t, e, i) {
                p.checkArgument(e <= t.length, "Number of required signatures must be less than or equal to the number of public keys"), i = i || {};
                var s = new I;
                s.add(h.smallInt(e));
                var n = t = f.map(t, o);
                i.noSorting || (n = f.sortBy(t, (function(t) {
                    return t.toString("hex")
                })));
                for (var r = 0; r < n.length; r++) {
                    var u = n[r];
                    s.add(u.toBuffer())
                }
                return s.add(h.smallInt(t.length)), s.add(h.OP_CHECKMULTISIG), s
            }, I.buildMultisigIn = function(t, e, i, s) {
                p.checkArgument(f.isArray(t)), p.checkArgument(f.isNumber(e)), p.checkArgument(f.isArray(i)), s = s || {};
                var n = new I;
                return n.add(h.OP_0), f.each(i, (function(t) {
                    p.checkArgument(l.isBuffer(t), "Signatures must be an array of Buffers"), n.add(t)
                })), n
            }, I.buildP2SHMultisigIn = function(t, e, i, s) {
                p.checkArgument(f.isArray(t)), p.checkArgument(f.isNumber(e)), p.checkArgument(f.isArray(i)), s = s || {};
                var n = new I;
                return n.add(h.OP_0), f.each(i, (function(t) {
                    p.checkArgument(l.isBuffer(t), "Signatures must be an array of Buffers"), n.add(t)
                })), n.add((s.cachedMultisig || I.buildMultisigOut(t, e, s)).toBuffer()), n
            }, I.buildPublicKeyHashOut = function(t) {
                p.checkArgument(!f.isUndefined(t)), p.checkArgument(t instanceof o || t instanceof s || f.isString(t)), t instanceof o ? t = t.toAddress() : f.isString(t) && (t = new s(t));
                var e = new I;
                return e.add(h.OP_DUP).add(h.OP_HASH160).add(t.hashBuffer).add(h.OP_EQUALVERIFY).add(h.OP_CHECKSIG), e._network = t.network, e
            }, I.buildPublicKeyOut = function(t) {
                p.checkArgument(t instanceof o);
                var e = new I;
                return e.add(t.toBuffer()).add(h.OP_CHECKSIG), e
            }, I.buildDataOut = function(t, e) {
                p.checkArgument(f.isUndefined(t) || f.isString(t) || l.isBuffer(t)), f.isString(t) && (t = new Buffer(t, e));
                var i = new I;
                return i.add(h.OP_RETURN), f.isUndefined(t) || i.add(t), i
            }, I.buildScriptHashOut = function(t) {
                p.checkArgument(t instanceof I || t instanceof s && t.isPayToScriptHash());
                var e = new I;
                return e.add(h.OP_HASH160).add(t instanceof s ? t.hashBuffer : u.sha256ripemd160(t.toBuffer())).add(h.OP_EQUAL), e._network = t._network || t.network, e
            }, I.buildPublicKeyIn = function(t, e) {
                p.checkArgument(t instanceof c || l.isBuffer(t)), p.checkArgument(f.isUndefined(e) || f.isNumber(e)), t instanceof c && (t = t.toBuffer());
                var i = new I;
                return i.add(l.concat([t, l.integerAsSingleByteBuffer(e || c.SIGHASH_ALL)])), i
            }, I.buildPublicKeyHashIn = function(t, e, i) {
                return p.checkArgument(e instanceof c || l.isBuffer(e)), p.checkArgument(f.isUndefined(i) || f.isNumber(i)), e instanceof c && (e = e.toBuffer()), (new I).add(l.concat([e, l.integerAsSingleByteBuffer(i || c.SIGHASH_ALL)])).add(new o(t).toBuffer())
            }, I.empty = function() {
                return new I
            }, I.prototype.toScriptHashOut = function() {
                return I.buildScriptHashOut(this)
            }, I.fromAddress = function(t) {
                if ((t = s(t)).isPayToScriptHash()) return I.buildScriptHashOut(t);
                if (t.isPayToPublicKeyHash()) return I.buildPublicKeyHashOut(t);
                throw new _.Script.UnrecognizedAddress(t)
            }, I.prototype.getAddressInfo = function(t) {
                if (this._isInput) return this._getInputAddressInfo();
                if (this._isOutput) return this._getOutputAddressInfo();
                var e = this._getOutputAddressInfo();
                return e || this._getInputAddressInfo()
            }, I.prototype._getOutputAddressInfo = function() {
                var t = {};
                if (this.isScriptHashOut()) t.hashBuffer = this.getData(), t.type = s.PayToScriptHash;
                else {
                    if (!this.isPublicKeyHashOut()) return !1;
                    t.hashBuffer = this.getData(), t.type = s.PayToPublicKeyHash
                }
                return t
            }, I.prototype._getInputAddressInfo = function() {
                var t = {};
                if (this.isPublicKeyHashIn()) t.hashBuffer = u.sha256ripemd160(this.chunks[1].buf), t.type = s.PayToPublicKeyHash;
                else {
                    if (!this.isScriptHashIn()) return !1;
                    t.hashBuffer = u.sha256ripemd160(this.chunks[this.chunks.length - 1].buf), t.type = s.PayToScriptHash
                }
                return t
            }, I.prototype.toAddress = function(t) {
                var e = this.getAddressInfo();
                return !!e && (e.network = a.get(t) || this._network || a.defaultNetwork, new s(e))
            }, I.prototype.findAndDelete = function(t) {
                for (var e = t.toBuffer().toString("hex"), i = 0; i < this.chunks.length; i++) {
                    e === I({
                        chunks: [this.chunks[i]]
                    }).toBuffer().toString("hex") && this.chunks.splice(i, 1)
                }
                return this
            }, I.prototype.checkMinimalPush = function(t) {
                var e = this.chunks[t],
                    i = e.buf,
                    s = e.opcodenum;
                return !i || (0 === i.length ? s === h.OP_0 : 1 === i.length && i[0] >= 1 && i[0] <= 16 ? s === h.OP_1 + (i[0] - 1) : 1 === i.length && 129 === i[0] ? s === h.OP_1NEGATE : i.length <= 75 ? s === i.length : i.length <= 255 ? s === h.OP_PUSHDATA1 : !(i.length <= 65535) || s === h.OP_PUSHDATA2)
            }, I.prototype._decodeOP_N = function(t) {
                if (t === h.OP_0) return 0;
                if (t >= h.OP_1 && t <= h.OP_16) return t - (h.OP_1 - 1);
                throw new Error("Invalid opcode: " + JSON.stringify(t))
            }, I.prototype.getSignatureOperationsCount = function(t) {
                t = !!f.isUndefined(t) || t;
                var e = this,
                    i = 0,
                    s = h.OP_INVALIDOPCODE;
                return f.each(e.chunks, (function(n) {
                    var r = n.opcodenum;
                    r == h.OP_CHECKSIG || r == h.OP_CHECKSIGVERIFY ? i++ : r != h.OP_CHECKMULTISIG && r != h.OP_CHECKMULTISIGVERIFY || (t && s >= h.OP_1 && s <= h.OP_16 ? i += e._decodeOP_N(s) : i += 20), s = r
                })), i
            }, t.exports = I
        },
        7298: function(t, e, i) {
            "use strict";
            var s = i(5489),
                n = i(5505),
                r = i(5583),
                u = i(5671),
                h = i(5850),
                o = i(6559);

            function c(t) {
                if (!(this instanceof c)) return new c(t);
                n.checkArgument(s.isObject(t), "Must provide an object from where to extract data");
                var e = t.address ? new h(t.address) : void 0,
                    i = t.txid ? t.txid : t.txId;
                if (!i || !r.isHexaString(i) || i.length > 64) throw new Error("Invalid TXID in object", t);
                var a = s.isUndefined(t.vout) ? t.outputIndex : t.vout;
                if (!s.isNumber(a)) throw new Error("Invalid outputIndex, received " + a);
                n.checkArgument(!s.isUndefined(t.scriptPubKey) || !s.isUndefined(t.script), "Must provide the scriptPubKey for that output!");
                var p = new u(t.scriptPubKey || t.script);
                n.checkArgument(!s.isUndefined(t.amount) || !s.isUndefined(t.satoshis), "Must provide an amount for the output");
                var f = s.isUndefined(t.amount) ? t.satoshis : new o.fromBTC(t.amount).toSatoshis();
                n.checkArgument(s.isNumber(f), "Amount must be a number"), r.defineImmutable(this, {
                    address: e,
                    txId: i,
                    outputIndex: a,
                    script: p,
                    satoshis: f
                })
            }
            c.prototype.inspect = function() {
                return "<UnspentOutput: " + this.txId + ":" + this.outputIndex + ", satoshis: " + this.satoshis + ", address: " + this.address + ">"
            }, c.prototype.toString = function() {
                return this.txId + ":" + this.outputIndex
            }, c.fromObject = function(t) {
                return new c(t)
            }, c.prototype.toObject = c.prototype.toJSON = function() {
                return {
                    address: this.address ? this.address.toString() : void 0,
                    txid: this.txId,
                    vout: this.outputIndex,
                    scriptPubKey: this.script.toBuffer().toString("hex"),
                    amount: o.fromSatoshis(this.satoshis).toBTC()
                }
            }, t.exports = c
        },
        9598: function(t, e, i) {
            "use strict";
            var s = i(5489),
                n = i(7297),
                r = i(6556),
                u = i(5601),
                h = i(5607),
                o = i(5670),
                c = i(5698),
                a = function t(e) {
                    if (!(this instanceof t)) return new t(e);
                    e ? (this.initialize(), this.set(e)) : this.initialize()
                };
            a.prototype.verify = function(t, e, r, u, h) {
                var o, c = i(6211);
                if (s.isUndefined(r) && (r = new c), s.isUndefined(u) && (u = 0), s.isUndefined(h) && (h = 0), this.set({
                        script: t,
                        tx: r,
                        nin: u,
                        flags: h
                    }), 0 != (h & a.SCRIPT_VERIFY_SIGPUSHONLY) && !t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                if (!this.evaluate()) return !1;
                h & a.SCRIPT_VERIFY_P2SH && (o = this.stack.slice());
                var p = this.stack;
                if (this.initialize(), this.set({
                        script: e,
                        stack: p,
                        tx: r,
                        nin: u,
                        flags: h
                    }), !this.evaluate()) return !1;
                if (0 === this.stack.length) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_RESULT", !1;
                var f = this.stack[this.stack.length - 1];
                if (!a.castToBool(f)) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK", !1;
                if (h & a.SCRIPT_VERIFY_P2SH && e.isScriptHashOut()) {
                    if (!t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                    if (0 === o.length) throw new Error("internal error - stack copy empty");
                    var _ = o[o.length - 1],
                        d = n.fromBuffer(_);
                    return o.pop(), this.initialize(), this.set({
                        script: d,
                        stack: o,
                        tx: r,
                        nin: u,
                        flags: h
                    }), !!this.evaluate() && (0 === o.length ? (this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_P2SH_STACK", !1) : !!a.castToBool(o[o.length - 1]) || (this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_P2SH_STACK", !1))
                }
                return !0
            }, t.exports = a, a.prototype.initialize = function(t) {
                this.stack = [], this.altstack = [], this.pc = 0, this.pbegincodehash = 0, this.nOpCount = 0, this.vfExec = [], this.errstr = "", this.flags = 0
            }, a.prototype.set = function(t) {
                this.script = t.script || this.script, this.tx = t.tx || this.tx, this.nin = void 0 !== t.nin ? t.nin : this.nin, this.stack = t.stack || this.stack, this.altstack = t.altack || this.altstack, this.pc = void 0 !== t.pc ? t.pc : this.pc, this.pbegincodehash = void 0 !== t.pbegincodehash ? t.pbegincodehash : this.pbegincodehash, this.nOpCount = void 0 !== t.nOpCount ? t.nOpCount : this.nOpCount, this.vfExec = t.vfExec || this.vfExec, this.errstr = t.errstr || this.errstr, this.flags = void 0 !== t.flags ? t.flags : this.flags
            }, a.true = new Buffer([1]), a.false = new Buffer([]), a.MAX_SCRIPT_ELEMENT_SIZE = 520, a.LOCKTIME_THRESHOLD_BN = new u(a.LOCKTIME_THRESHOLD = 5e8), a.SCRIPT_VERIFY_NONE = 0, a.SCRIPT_VERIFY_P2SH = 1, a.SCRIPT_VERIFY_STRICTENC = 2, a.SCRIPT_VERIFY_DERSIG = 4, a.SCRIPT_VERIFY_LOW_S = 8, a.SCRIPT_VERIFY_NULLDUMMY = 16, a.SCRIPT_VERIFY_SIGPUSHONLY = 32, a.SCRIPT_VERIFY_MINIMALDATA = 64, a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 128, a.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY = 512, a.castToBool = function(t) {
                for (var e = 0; e < t.length; e++)
                    if (0 !== t[e]) return e !== t.length - 1 || 128 !== t[e];
                return !1
            }, a.prototype.checkSignatureEncoding = function(t) {
                if (0 != (this.flags & (a.SCRIPT_VERIFY_DERSIG | a.SCRIPT_VERIFY_LOW_S | a.SCRIPT_VERIFY_STRICTENC)) && !o.isTxDER(t)) return this.errstr = "SCRIPT_ERR_SIG_DER_INVALID_FORMAT", !1;
                if (0 != (this.flags & a.SCRIPT_VERIFY_LOW_S)) {
                    if (!o.fromTxFormat(t).hasLowS()) return this.errstr = "SCRIPT_ERR_SIG_DER_HIGH_S", !1
                } else if (0 != (this.flags & a.SCRIPT_VERIFY_STRICTENC) && !o.fromTxFormat(t).hasDefinedHashtype()) return this.errstr = "SCRIPT_ERR_SIG_HASHTYPE", !1;
                return !0
            }, a.prototype.checkPubkeyEncoding = function(t) {
                return !(0 != (this.flags & a.SCRIPT_VERIFY_STRICTENC) && !c.isValid(t)) || (this.errstr = "SCRIPT_ERR_PUBKEYTYPE", !1)
            }, a.prototype.evaluate = function() {
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
            }, a.prototype.checkLockTime = function(t) {
                return !!(this.tx.nLockTime < a.LOCKTIME_THRESHOLD && t.lt(a.LOCKTIME_THRESHOLD_BN) || this.tx.nLockTime >= a.LOCKTIME_THRESHOLD && t.gte(a.LOCKTIME_THRESHOLD_BN)) && (!t.gt(new u(this.tx.nLockTime)) && !!this.tx.inputs[this.nin].isFinal())
            }, a.prototype.step = function() {
                var t, e, i, p, f, _, d, l, g, I, S, O, y, P, k, T, A, E = 0 != (this.flags & a.SCRIPT_VERIFY_MINIMALDATA),
                    m = -1 === this.vfExec.indexOf(!1),
                    R = this.script.chunks[this.pc];
                this.pc++;
                var b = R.opcodenum;
                if (s.isUndefined(b)) return this.errstr = "SCRIPT_ERR_UNDEFINED_OPCODE", !1;
                if (R.buf && R.buf.length > a.MAX_SCRIPT_ELEMENT_SIZE) return this.errstr = "SCRIPT_ERR_PUSH_SIZE", !1;
                if (b > r.OP_16 && ++this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                if (b === r.OP_CAT || b === r.OP_SUBSTR || b === r.OP_LEFT || b === r.OP_RIGHT || b === r.OP_INVERT || b === r.OP_AND || b === r.OP_OR || b === r.OP_XOR || b === r.OP_2MUL || b === r.OP_2DIV || b === r.OP_MUL || b === r.OP_DIV || b === r.OP_MOD || b === r.OP_LSHIFT || b === r.OP_RSHIFT) return this.errstr = "SCRIPT_ERR_DISABLED_OPCODE", !1;
                if (m && 0 <= b && b <= r.OP_PUSHDATA4) {
                    if (E && !this.script.checkMinimalPush(this.pc - 1)) return this.errstr = "SCRIPT_ERR_MINIMALDATA", !1;
                    if (R.buf) {
                        if (R.len !== R.buf.length) throw new Error("Length of push value not equal to length of data");
                        this.stack.push(R.buf)
                    } else this.stack.push(a.false)
                } else if (m || r.OP_IF <= b && b <= r.OP_ENDIF) switch (b) {
                    case r.OP_1NEGATE:
                    case r.OP_1:
                    case r.OP_2:
                    case r.OP_3:
                    case r.OP_4:
                    case r.OP_5:
                    case r.OP_6:
                    case r.OP_7:
                    case r.OP_8:
                    case r.OP_9:
                    case r.OP_10:
                    case r.OP_11:
                    case r.OP_12:
                    case r.OP_13:
                    case r.OP_14:
                    case r.OP_15:
                    case r.OP_16:
                        f = b - (r.OP_1 - 1), t = new u(f).toScriptNumBuffer(), this.stack.push(t);
                        break;
                    case r.OP_NOP:
                        break;
                    case r.OP_NOP2:
                    case r.OP_CHECKLOCKTIMEVERIFY:
                        if (!(this.flags & a.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY)) {
                            if (this.flags & a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                            break
                        }
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var N = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], E, 5);
                        if (N.lt(new u(0))) return this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME", !1;
                        if (!this.checkLockTime(N)) return this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME", !1;
                        break;
                    case r.OP_NOP1:
                    case r.OP_NOP3:
                    case r.OP_NOP4:
                    case r.OP_NOP5:
                    case r.OP_NOP6:
                    case r.OP_NOP7:
                    case r.OP_NOP8:
                    case r.OP_NOP9:
                    case r.OP_NOP10:
                        if (this.flags & a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                        break;
                    case r.OP_IF:
                    case r.OP_NOTIF:
                        if (T = !1, m) {
                            if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                            t = this.stack.pop(), T = a.castToBool(t), b === r.OP_NOTIF && (T = !T)
                        }
                        this.vfExec.push(T);
                        break;
                    case r.OP_ELSE:
                        if (0 === this.vfExec.length) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                        this.vfExec[this.vfExec.length - 1] = !this.vfExec[this.vfExec.length - 1];
                        break;
                    case r.OP_ENDIF:
                        if (0 === this.vfExec.length) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                        this.vfExec.pop();
                        break;
                    case r.OP_VERIFY:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (t = this.stack[this.stack.length - 1], !(T = a.castToBool(t))) return this.errstr = "SCRIPT_ERR_VERIFY", !1;
                        this.stack.pop();
                        break;
                    case r.OP_RETURN:
                        return this.errstr = "SCRIPT_ERR_OP_RETURN", !1;
                    case r.OP_TOALTSTACK:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.altstack.push(this.stack.pop());
                        break;
                    case r.OP_FROMALTSTACK:
                        if (this.altstack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_ALTSTACK_OPERATION", !1;
                        this.stack.push(this.altstack.pop());
                        break;
                    case r.OP_2DROP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.pop(), this.stack.pop();
                        break;
                    case r.OP_2DUP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 2], i = this.stack[this.stack.length - 1], this.stack.push(e), this.stack.push(i);
                        break;
                    case r.OP_3DUP:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 3], i = this.stack[this.stack.length - 2];
                        var v = this.stack[this.stack.length - 1];
                        this.stack.push(e), this.stack.push(i), this.stack.push(v);
                        break;
                    case r.OP_2OVER:
                        if (this.stack.length < 4) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 4], i = this.stack[this.stack.length - 3], this.stack.push(e), this.stack.push(i);
                        break;
                    case r.OP_2ROT:
                        if (this.stack.length < 6) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        p = this.stack.splice(this.stack.length - 6, 2), this.stack.push(p[0]), this.stack.push(p[1]);
                        break;
                    case r.OP_2SWAP:
                        if (this.stack.length < 4) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        p = this.stack.splice(this.stack.length - 4, 2), this.stack.push(p[0]), this.stack.push(p[1]);
                        break;
                    case r.OP_IFDUP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        t = this.stack[this.stack.length - 1], (T = a.castToBool(t)) && this.stack.push(t);
                        break;
                    case r.OP_DEPTH:
                        t = new u(this.stack.length).toScriptNumBuffer(), this.stack.push(t);
                        break;
                    case r.OP_DROP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.pop();
                        break;
                    case r.OP_DUP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.push(this.stack[this.stack.length - 1]);
                        break;
                    case r.OP_NIP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.splice(this.stack.length - 2, 1);
                        break;
                    case r.OP_OVER:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.push(this.stack[this.stack.length - 2]);
                        break;
                    case r.OP_PICK:
                    case r.OP_ROLL:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (t = this.stack[this.stack.length - 1], f = (l = u.fromScriptNumBuffer(t, E)).toNumber(), this.stack.pop(), f < 0 || f >= this.stack.length) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        t = this.stack[this.stack.length - f - 1], b === r.OP_ROLL && this.stack.splice(this.stack.length - f - 1, 1), this.stack.push(t);
                        break;
                    case r.OP_ROT:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = this.stack[this.stack.length - 3], d = this.stack[this.stack.length - 2];
                        var w = this.stack[this.stack.length - 1];
                        this.stack[this.stack.length - 3] = d, this.stack[this.stack.length - 2] = w, this.stack[this.stack.length - 1] = _;
                        break;
                    case r.OP_SWAP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = this.stack[this.stack.length - 2], d = this.stack[this.stack.length - 1], this.stack[this.stack.length - 2] = d, this.stack[this.stack.length - 1] = _;
                        break;
                    case r.OP_TUCK:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.splice(this.stack.length - 2, 0, this.stack[this.stack.length - 1]);
                        break;
                    case r.OP_SIZE:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        l = new u(this.stack[this.stack.length - 1].length), this.stack.push(l.toScriptNumBuffer());
                        break;
                    case r.OP_EQUAL:
                    case r.OP_EQUALVERIFY:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 2], i = this.stack[this.stack.length - 1];
                        var C = e.toString("hex") === i.toString("hex");
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(C ? a.true : a.false), b === r.OP_EQUALVERIFY) {
                            if (!C) return this.errstr = "SCRIPT_ERR_EQUALVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case r.OP_1ADD:
                    case r.OP_1SUB:
                    case r.OP_NEGATE:
                    case r.OP_ABS:
                    case r.OP_NOT:
                    case r.OP_0NOTEQUAL:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        switch (t = this.stack[this.stack.length - 1], l = u.fromScriptNumBuffer(t, E), b) {
                            case r.OP_1ADD:
                                l = l.add(u.One);
                                break;
                            case r.OP_1SUB:
                                l = l.sub(u.One);
                                break;
                            case r.OP_NEGATE:
                                l = l.neg();
                                break;
                            case r.OP_ABS:
                                l.cmp(u.Zero) < 0 && (l = l.neg());
                                break;
                            case r.OP_NOT:
                                l = new u((0 === l.cmp(u.Zero)) + 0);
                                break;
                            case r.OP_0NOTEQUAL:
                                l = new u((0 !== l.cmp(u.Zero)) + 0)
                        }
                        this.stack.pop(), this.stack.push(l.toScriptNumBuffer());
                        break;
                    case r.OP_ADD:
                    case r.OP_SUB:
                    case r.OP_BOOLAND:
                    case r.OP_BOOLOR:
                    case r.OP_NUMEQUAL:
                    case r.OP_NUMEQUALVERIFY:
                    case r.OP_NUMNOTEQUAL:
                    case r.OP_LESSTHAN:
                    case r.OP_GREATERTHAN:
                    case r.OP_LESSTHANOREQUAL:
                    case r.OP_GREATERTHANOREQUAL:
                    case r.OP_MIN:
                    case r.OP_MAX:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        switch (g = u.fromScriptNumBuffer(this.stack[this.stack.length - 2], E), I = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], E), l = new u(0), b) {
                            case r.OP_ADD:
                                l = g.add(I);
                                break;
                            case r.OP_SUB:
                                l = g.sub(I);
                                break;
                            case r.OP_BOOLAND:
                                l = new u((0 !== g.cmp(u.Zero) && 0 !== I.cmp(u.Zero)) + 0);
                                break;
                            case r.OP_BOOLOR:
                                l = new u((0 !== g.cmp(u.Zero) || 0 !== I.cmp(u.Zero)) + 0);
                                break;
                            case r.OP_NUMEQUAL:
                            case r.OP_NUMEQUALVERIFY:
                                l = new u((0 === g.cmp(I)) + 0);
                                break;
                            case r.OP_NUMNOTEQUAL:
                                l = new u((0 !== g.cmp(I)) + 0);
                                break;
                            case r.OP_LESSTHAN:
                                l = new u((g.cmp(I) < 0) + 0);
                                break;
                            case r.OP_GREATERTHAN:
                                l = new u((g.cmp(I) > 0) + 0);
                                break;
                            case r.OP_LESSTHANOREQUAL:
                                l = new u((g.cmp(I) <= 0) + 0);
                                break;
                            case r.OP_GREATERTHANOREQUAL:
                                l = new u((g.cmp(I) >= 0) + 0);
                                break;
                            case r.OP_MIN:
                                l = g.cmp(I) < 0 ? g : I;
                                break;
                            case r.OP_MAX:
                                l = g.cmp(I) > 0 ? g : I
                        }
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(l.toScriptNumBuffer()), b === r.OP_NUMEQUALVERIFY) {
                            if (!a.castToBool(this.stack[this.stack.length - 1])) return this.errstr = "SCRIPT_ERR_NUMEQUALVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case r.OP_WITHIN:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        g = u.fromScriptNumBuffer(this.stack[this.stack.length - 3], E), I = u.fromScriptNumBuffer(this.stack[this.stack.length - 2], E);
                        var x = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], E);
                        T = I.cmp(g) <= 0 && g.cmp(x) < 0, this.stack.pop(), this.stack.pop(), this.stack.pop(), this.stack.push(T ? a.true : a.false);
                        break;
                    case r.OP_RIPEMD160:
                    case r.OP_SHA1:
                    case r.OP_SHA256:
                    case r.OP_HASH160:
                    case r.OP_HASH256:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var U;
                        t = this.stack[this.stack.length - 1], b === r.OP_RIPEMD160 ? U = h.ripemd160(t) : b === r.OP_SHA1 ? U = h.sha1(t) : b === r.OP_SHA256 ? U = h.sha256(t) : b === r.OP_HASH160 ? U = h.sha256ripemd160(t) : b === r.OP_HASH256 && (U = h.sha256sha256(t)), this.stack.pop(), this.stack.push(U);
                        break;
                    case r.OP_CODESEPARATOR:
                        this.pbegincodehash = this.pc;
                        break;
                    case r.OP_CHECKSIG:
                    case r.OP_CHECKSIGVERIFY:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        S = this.stack[this.stack.length - 2], O = this.stack[this.stack.length - 1], y = (new n).set({
                            chunks: this.script.chunks.slice(this.pbegincodehash)
                        });
                        var B = (new n).add(S);
                        if (y.findAndDelete(B), !this.checkSignatureEncoding(S) || !this.checkPubkeyEncoding(O)) return !1;
                        try {
                            P = o.fromTxFormat(S), k = c.fromBuffer(O, !1), A = this.tx.verifySignature(P, k, this.nin, y)
                        } catch (t) {
                            A = !1
                        }
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(A ? a.true : a.false), b === r.OP_CHECKSIGVERIFY) {
                            if (!A) return this.errstr = "SCRIPT_ERR_CHECKSIGVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case r.OP_CHECKMULTISIG:
                    case r.OP_CHECKMULTISIGVERIFY:
                        var L = 1;
                        if (this.stack.length < L) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var H = u.fromScriptNumBuffer(this.stack[this.stack.length - L], E).toNumber();
                        if (H < 0 || H > 20) return this.errstr = "SCRIPT_ERR_PUBKEY_COUNT", !1;
                        if (this.nOpCount += H, this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                        var K = ++L;
                        if (L += H, this.stack.length < L) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var D = u.fromScriptNumBuffer(this.stack[this.stack.length - L], E).toNumber();
                        if (D < 0 || D > H) return this.errstr = "SCRIPT_ERR_SIG_COUNT", !1;
                        var M = ++L;
                        if (L += D, this.stack.length < L) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        y = (new n).set({
                            chunks: this.script.chunks.slice(this.pbegincodehash)
                        });
                        for (var V = 0; V < D; V++) S = this.stack[this.stack.length - M - V], y.findAndDelete((new n).add(S));
                        for (A = !0; A && D > 0;) {
                            if (S = this.stack[this.stack.length - M], O = this.stack[this.stack.length - K], !this.checkSignatureEncoding(S) || !this.checkPubkeyEncoding(O)) return !1;
                            var F;
                            try {
                                P = o.fromTxFormat(S), k = c.fromBuffer(O, !1), F = this.tx.verifySignature(P, k, this.nin, y)
                            } catch (t) {
                                F = !1
                            }
                            F && (M++, D--), K++, D > --H && (A = !1)
                        }
                        for (; L-- > 1;) this.stack.pop();
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (this.flags & a.SCRIPT_VERIFY_NULLDUMMY && this.stack[this.stack.length - 1].length) return this.errstr = "SCRIPT_ERR_SIG_NULLDUMMY", !1;
                        if (this.stack.pop(), this.stack.push(A ? a.true : a.false), b === r.OP_CHECKMULTISIGVERIFY) {
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
        9600: function(t, e, i) {
            "use strict";
            var s = i(6062),
                n = i(5505),
                r = (i(5516), i(6061)),
                u = i(5791),
                h = i(5790),
                o = i(5671),
                c = i(5670),
                a = i(6063);

            function p() {
                r.apply(this, arguments)
            }
            s(p, r), p.prototype.getSignatures = function(t, e, i, s) {
                n.checkState(this.output instanceof u), s = s || c.SIGHASH_ALL;
                var r = e.toPublicKey();
                return r.toString() === this.output.script.getPublicKey().toString("hex") ? [new a({
                    publicKey: r,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: i,
                    signature: h.sign(t, e, s, i, this.output.script),
                    sigtype: s
                })] : []
            }, p.prototype.addSignature = function(t, e) {
                return n.checkState(this.isValidSignature(t, e), "Signature is invalid"), this.setScript(o.buildPublicKeyIn(e.signature.toDER(), e.sigtype)), this
            }, p.prototype.clearSignatures = function() {
                return this.setScript(o.empty()), this
            }, p.prototype.isFullySigned = function() {
                return this.script.isPublicKeyIn()
            }, p.SCRIPT_MAX_SIZE = 73, p.prototype._estimateSize = function() {
                return p.SCRIPT_MAX_SIZE
            }, t.exports = p
        },
        9601: function(t, e, i) {
            "use strict";
            var s = i(6062),
                n = i(5505),
                r = i(5516),
                u = i(5607),
                h = i(6061),
                o = i(5791),
                c = i(5790),
                a = i(5671),
                p = i(5670),
                f = i(6063);

            function _() {
                h.apply(this, arguments)
            }
            s(_, h), _.prototype.getSignatures = function(t, e, i, s, h) {
                return n.checkState(this.output instanceof o), h = h || u.sha256ripemd160(e.publicKey.toBuffer()), s = s || p.SIGHASH_ALL, r.equals(h, this.output.script.getPublicKeyHash()) ? [new f({
                    publicKey: e.publicKey,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: i,
                    signature: c.sign(t, e, s, i, this.output.script),
                    sigtype: s
                })] : []
            }, _.prototype.addSignature = function(t, e) {
                return n.checkState(this.isValidSignature(t, e), "Signature is invalid"), this.setScript(a.buildPublicKeyHashIn(e.publicKey, e.signature.toDER(), e.sigtype)), this
            }, _.prototype.clearSignatures = function() {
                return this.setScript(a.empty()), this
            }, _.prototype.isFullySigned = function() {
                return this.script.isPublicKeyHashIn()
            }, _.SCRIPT_MAX_SIZE = 107, _.prototype._estimateSize = function() {
                return _.SCRIPT_MAX_SIZE
            }, t.exports = _
        },
        9602: function(t, e, i) {
            "use strict";
            var s = i(5489),
                n = i(6062),
                r = (i(6557), i(6061)),
                u = i(5791),
                h = i(5505),
                o = i(5671),
                c = i(5670),
                a = i(5790),
                p = (i(5698), i(5516)),
                f = i(6063);

            function _(t, e, i, n) {
                r.apply(this, arguments);
                var u = this;
                e = e || t.publicKeys, i = i || t.threshold, n = n || t.signatures, this.publicKeys = s.sortBy(e, (function(t) {
                    return t.toString("hex")
                })), h.checkState(o.buildMultisigOut(this.publicKeys, i).equals(this.output.script), "Provided public keys don't match to the provided output script"), this.publicKeyIndex = {}, s.each(this.publicKeys, (function(t, e) {
                    u.publicKeyIndex[t.toString()] = e
                })), this.threshold = i, this.signatures = n ? this._deserializeSignatures(n) : new Array(this.publicKeys.length)
            }
            n(_, r), _.prototype.toObject = function() {
                var t = r.prototype.toObject.apply(this, arguments);
                return t.threshold = this.threshold, t.publicKeys = s.map(this.publicKeys, (function(t) {
                    return t.toString()
                })), t.signatures = this._serializeSignatures(), t
            }, _.prototype._deserializeSignatures = function(t) {
                return s.map(t, (function(t) {
                    if (t) return new f(t)
                }))
            }, _.prototype._serializeSignatures = function() {
                return s.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, _.prototype.getSignatures = function(t, e, i, n) {
                h.checkState(this.output instanceof u), n = n || c.SIGHASH_ALL;
                var r = this,
                    o = [];
                return s.each(this.publicKeys, (function(s) {
                    s.toString() === e.publicKey.toString() && o.push(new f({
                        publicKey: e.publicKey,
                        prevTxId: r.prevTxId,
                        outputIndex: r.outputIndex,
                        inputIndex: i,
                        signature: a.sign(t, e, n, i, r.output.script),
                        sigtype: n
                    }))
                })), o
            }, _.prototype.addSignature = function(t, e) {
                return h.checkState(!this.isFullySigned(), "All needed signatures have already been added"), h.checkArgument(!s.isUndefined(this.publicKeyIndex[e.publicKey.toString()]), "Signature has no matching public key"), h.checkState(this.isValidSignature(t, e)), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this._updateScript(), this
            }, _.prototype._updateScript = function() {
                return this.setScript(o.buildMultisigIn(this.publicKeys, this.threshold, this._createSignatures())), this
            }, _.prototype._createSignatures = function() {
                return s.map(s.filter(this.signatures, (function(t) {
                    return !s.isUndefined(t)
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
                return s.reduce(this.signatures, (function(t, e) {
                    return t + !!e
                }), 0)
            }, _.prototype.publicKeysWithoutSignature = function() {
                var t = this;
                return s.filter(this.publicKeys, (function(e) {
                    return !t.signatures[t.publicKeyIndex[e.toString()]]
                }))
            }, _.prototype.isValidSignature = function(t, e) {
                return e.signature.nhashtype = e.sigtype, a.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script)
            }, _.normalizeSignatures = function(t, e, i, s, n) {
                return n.map((function(n) {
                    var r = null;
                    return s = s.filter((function(s) {
                        if (r) return !0;
                        var u = new f({
                            signature: c.fromTxFormat(s),
                            publicKey: n,
                            prevTxId: e.prevTxId,
                            outputIndex: e.outputIndex,
                            inputIndex: i,
                            sigtype: c.SIGHASH_ALL
                        });
                        return u.signature.nhashtype = u.sigtype, !a.verify(t, u.signature, u.publicKey, u.inputIndex, e.output.script) || (r = u, !1)
                    })), r || null
                }))
            }, _.OPCODES_SIZE = 1, _.SIGNATURE_SIZE = 73, _.prototype._estimateSize = function() {
                return _.OPCODES_SIZE + this.threshold * _.SIGNATURE_SIZE
            }, t.exports = _
        },
        9603: function(t, e, i) {
            "use strict";
            var s = i(5489),
                n = i(6062),
                r = i(6061),
                u = i(5791),
                h = i(5505),
                o = i(5671),
                c = i(5670),
                a = i(5790),
                p = (i(5698), i(5516)),
                f = i(6063);

            function _(t, e, i, n) {
                r.apply(this, arguments);
                var u = this;
                e = e || t.publicKeys, i = i || t.threshold, n = n || t.signatures, this.publicKeys = s.sortBy(e, (function(t) {
                    return t.toString("hex")
                })), this.redeemScript = o.buildMultisigOut(this.publicKeys, i), h.checkState(o.buildScriptHashOut(this.redeemScript).equals(this.output.script), "Provided public keys don't hash to the provided output"), this.publicKeyIndex = {}, s.each(this.publicKeys, (function(t, e) {
                    u.publicKeyIndex[t.toString()] = e
                })), this.threshold = i, this.signatures = n ? this._deserializeSignatures(n) : new Array(this.publicKeys.length)
            }
            n(_, r), _.prototype.toObject = function() {
                var t = r.prototype.toObject.apply(this, arguments);
                return t.threshold = this.threshold, t.publicKeys = s.map(this.publicKeys, (function(t) {
                    return t.toString()
                })), t.signatures = this._serializeSignatures(), t
            }, _.prototype._deserializeSignatures = function(t) {
                return s.map(t, (function(t) {
                    if (t) return new f(t)
                }))
            }, _.prototype._serializeSignatures = function() {
                return s.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, _.prototype.getSignatures = function(t, e, i, n) {
                h.checkState(this.output instanceof u), n = n || c.SIGHASH_ALL;
                var r = this,
                    o = [];
                return s.each(this.publicKeys, (function(s) {
                    s.toString() === e.publicKey.toString() && o.push(new f({
                        publicKey: e.publicKey,
                        prevTxId: r.prevTxId,
                        outputIndex: r.outputIndex,
                        inputIndex: i,
                        signature: a.sign(t, e, n, i, r.redeemScript),
                        sigtype: n
                    }))
                })), o
            }, _.prototype.addSignature = function(t, e) {
                return h.checkState(!this.isFullySigned(), "All needed signatures have already been added"), h.checkArgument(!s.isUndefined(this.publicKeyIndex[e.publicKey.toString()]), "Signature has no matching public key"), h.checkState(this.isValidSignature(t, e)), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this._updateScript(), this
            }, _.prototype._updateScript = function() {
                return this.setScript(o.buildP2SHMultisigIn(this.publicKeys, this.threshold, this._createSignatures(), {
                    cachedMultisig: this.redeemScript
                })), this
            }, _.prototype._createSignatures = function() {
                return s.map(s.filter(this.signatures, (function(t) {
                    return !s.isUndefined(t)
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
                return s.reduce(this.signatures, (function(t, e) {
                    return t + !!e
                }), 0)
            }, _.prototype.publicKeysWithoutSignature = function() {
                var t = this;
                return s.filter(this.publicKeys, (function(e) {
                    return !t.signatures[t.publicKeyIndex[e.toString()]]
                }))
            }, _.prototype.isValidSignature = function(t, e) {
                return e.signature.nhashtype = e.sigtype, a.verify(t, e.signature, e.publicKey, e.inputIndex, this.redeemScript)
            }, _.OPCODES_SIZE = 7, _.SIGNATURE_SIZE = 74, _.PUBKEY_SIZE = 34, _.prototype._estimateSize = function() {
                return _.OPCODES_SIZE + this.threshold * _.SIGNATURE_SIZE + this.publicKeys.length * _.PUBKEY_SIZE
            }, t.exports = _
        }
    }
]);