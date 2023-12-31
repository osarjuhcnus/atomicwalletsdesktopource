(window.webpackJsonp = window.webpackJsonp || []).push([
    [209], {
        112: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = function(t) {
                    return !!i.isString(t) && /^[0-9a-fA-F]+$/.test(t)
                };
            t.exports = {
                isValidJSON: function(t) {
                    var e;
                    if (!i.isString(t)) return !1;
                    try {
                        e = JSON.parse(t)
                    } catch (t) {
                        return !1
                    }
                    return "object" == typeof e
                },
                isHexa: s,
                isHexaString: s,
                cloneArray: function(t) {
                    return [].concat(t)
                },
                defineImmutable: function(t, e) {
                    return Object.keys(e).forEach((function(r) {
                        Object.defineProperty(t, r, {
                            configurable: !1,
                            enumerable: !0,
                            value: e[r]
                        })
                    })), t
                },
                isNaturalNumber: function(t) {
                    return "number" == typeof t && isFinite(t) && Math.floor(t) === t && t >= 0
                }
            }
        },
        1122: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(70),
                n = r(87),
                u = r(112);

            function o(t) {
                if (!(this instanceof o)) return new o(t);
                var e;
                if (i.isNumber(t)) e = t;
                else {
                    if (!i.isString(t)) throw new TypeError('Unrecognized num type: "' + typeof t + '" for Opcode');
                    e = o.map[t]
                }
                return u.defineImmutable(this, {
                    num: e
                }), this
            }
            for (var h in o.fromBuffer = function(t) {
                    return s.checkArgument(n.isBuffer(t)), new o(Number("0x" + t.toString("hex")))
                }, o.fromNumber = function(t) {
                    return s.checkArgument(i.isNumber(t)), new o(t)
                }, o.fromString = function(t) {
                    s.checkArgument(i.isString(t));
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
                    return s.checkArgument(i.isNumber(t), "Invalid Argument: n should be number"), s.checkArgument(t >= 0 && t <= 16, "Invalid Argument: n must be between 0 and 16"), 0 === t ? o("OP_0") : new o(o.map.OP_1 + t - 1)
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
            i.extend(o, o.map), o.isSmallIntOp = function(t) {
                return t instanceof o && (t = t.toNumber()), t === o.map.OP_0 || t >= o.map.OP_1 && t <= o.map.OP_16
            }, o.prototype.inspect = function() {
                return "<Opcode: " + this.toString() + ", hex: " + this.toHex() + ", decimal: " + this.num + ">"
            }, t.exports = o
        },
        1123: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(70),
                n = r(12),
                u = Buffer.compare || r(2350),
                o = r(202),
                h = r(87),
                c = r(112),
                a = r(269),
                f = r(167),
                p = r(135),
                _ = r(182),
                d = r(294),
                l = r(663),
                g = r(244),
                S = r(1999),
                I = r(1124),
                O = I.PublicKeyHash,
                P = I.PublicKey,
                E = I.MultiSigScriptHash,
                m = I.MultiSig,
                y = r(270),
                T = r(183),
                A = r(517),
                R = r(134);

            function k(t, e) {
                if (!(this instanceof k)) return new k(t);
                if (this.inputs = [], this.outputs = [], this._inputAmount = void 0, this._outputAmount = void 0, t) {
                    if (t instanceof k) return k.shallowCopy(t);
                    if (c.isHexa(t)) this.fromString(t);
                    else if (h.isBuffer(t)) this.fromBuffer(t);
                    else {
                        if (!i.isObject(t)) throw new o.InvalidArgument("Must provide an object or string to deserialize a transaction");
                        this.fromObject(t, e)
                    }
                } else this._newTransaction()
            }
            k.DUST_AMOUNT = 546, k.FEE_SECURITY_MARGIN = 150, k.MAX_MONEY = 21e14, k.NLOCKTIME_BLOCKHEIGHT_LIMIT = 5e8, k.NLOCKTIME_MAX_VALUE = 4294967295, k.FEE_PER_KB = 1e5, k.CHANGE_OUTPUT_MAX_SIZE = 62, k.MAXIMUM_EXTRA_SIZE = 26, k.shallowCopy = function(t) {
                return new k(t.toBuffer())
            };
            var b = {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                        return this._hash = new a(this._getHash()).readReverse().toString("hex"), this._hash
                    }
                },
                N = {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                        return new a(this._getWitnessHash()).readReverse().toString("hex")
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
                return p.sha256sha256(this.toBuffer(!0))
            }, k.prototype._getWitnessHash = function() {
                return p.sha256sha256(this.toBuffer(!1))
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
                var e, r = this._getUnspentValue();
                return r < 0 ? t.disableMoreOutputThanInput || (e = new o.Transaction.InvalidOutputAmountSum) : e = this._hasFeeError(t, r), e || this._hasDustOutputs(t) || this._isMissingSignatures(t)
            }, k.prototype._hasFeeError = function(t, e) {
                if (!i.isUndefined(this._fee) && this._fee !== e) return new o.Transaction.FeeError.Different("Unspent value is " + e + " but specified fee is " + this._fee);
                if (!t.disableLargeFees) {
                    var r = Math.floor(k.FEE_SECURITY_MARGIN * this._estimateFee());
                    if (e > r) return this._missingChange() ? new o.Transaction.ChangeAddressMissing("Fee is too large and no change address was provided") : new o.Transaction.FeeError.TooLarge("expected less than " + r + " but got " + e)
                }
                if (!t.disableSmallFees) {
                    var s = Math.ceil(this._estimateFee() / k.FEE_SECURITY_MARGIN);
                    if (e < s) return new o.Transaction.FeeError.TooSmall("expected more than " + s + " but got " + e)
                }
            }, k.prototype._missingChange = function() {
                return !this._changeScript
            }, k.prototype._hasDustOutputs = function(t) {
                var e, r;
                if (!t.disableDustOutputs)
                    for (e in this.outputs)
                        if ((r = this.outputs[e]).satoshis < k.DUST_AMOUNT && !r.script.isDataOut()) return new o.Transaction.DustOutputs
            }, k.prototype._isMissingSignatures = function(t) {
                if (!t.disableIsFullySigned) return this.isFullySigned() ? void 0 : new o.Transaction.MissingSignatures
            }, k.prototype.inspect = function() {
                return "<Transaction: " + this.uncheckedSerialize() + ">"
            }, k.prototype.toBuffer = function(t) {
                var e = new f;
                return this.toBufferWriter(e, t).toBuffer()
            }, k.prototype.hasWitnesses = function() {
                for (var t = 0; t < this.inputs.length; t++)
                    if (this.inputs[t].hasWitnesses()) return !0;
                return !1
            }, k.prototype.toBufferWriter = function(t, e) {
                t.writeInt32LE(this.version);
                var r = this.hasWitnesses();
                return r && !e && t.write(Buffer.from("0001", "hex")), t.writeVarintNum(this.inputs.length), i.each(this.inputs, (function(e) {
                    e.toBufferWriter(t)
                })), t.writeVarintNum(this.outputs.length), i.each(this.outputs, (function(e) {
                    e.toBufferWriter(t)
                })), r && !e && i.each(this.inputs, (function(e) {
                    var r = e.getWitnesses();
                    t.writeVarintNum(r.length);
                    for (var i = 0; i < r.length; i++) t.writeVarintNum(r[i].length), t.write(r[i])
                })), t.writeUInt32LE(this.nLockTime), t
            }, k.prototype.fromBuffer = function(t) {
                var e = new a(t);
                return this.fromBufferReader(e)
            }, k.prototype.fromBufferReader = function(t) {
                s.checkArgument(!t.finished(), "No transaction data received"), this.version = t.readInt32LE();
                var e = t.readVarintNum(),
                    r = !1;
                0 === e && 0 !== t.buf[t.pos] && (t.pos += 1, r = !0, e = t.readVarintNum());
                for (var i = 0; i < e; i++) {
                    var n = I.fromBufferReader(t);
                    this.inputs.push(n)
                }
                for (var u = t.readVarintNum(), o = 0; o < u; o++) this.outputs.push(y.fromBufferReader(t));
                if (r)
                    for (var h = 0; h < e; h++) {
                        for (var c = t.readVarintNum(), a = [], f = 0; f < c; f++) {
                            var p = t.readVarintNum(),
                                _ = t.read(p);
                            a.push(_)
                        }
                        this.inputs[h].setWitnesses(a)
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
                var r = {
                    hash: this.hash,
                    version: this.version,
                    inputs: t,
                    outputs: e,
                    nLockTime: this.nLockTime
                };
                return this._changeScript && (r.changeScript = this._changeScript.toString()), i.isUndefined(this._changeIndex) || (r.changeIndex = this._changeIndex), i.isUndefined(this._fee) || (r.fee = this._fee), r
            }, k.prototype.fromObject = function(t, e) {
                s.checkArgument(i.isObject(t) || t instanceof k);
                var r, n = this;
                return r = t instanceof k ? r.toObject() : t, i.each(r.inputs, (function(t) {
                    if (t.output && t.output.script) {
                        var r, i = new T(t.output.script);
                        if ((i.isScriptHashOut() || i.isWitnessScriptHashOut()) && t.publicKeys && t.threshold) r = new I.MultiSigScriptHash(t, t.publicKeys, t.threshold, t.signatures, e);
                        else if (i.isPublicKeyHashOut() || i.isWitnessPublicKeyHashOut() || i.isScriptHashOut()) r = new I.PublicKeyHash(t);
                        else {
                            if (!i.isPublicKeyOut()) throw new o.Transaction.Input.UnsupportedScript(t.output.script);
                            r = new I.PublicKey(t)
                        }
                        n.addInput(r)
                    } else n.uncheckedAddInput(new I(t))
                })), i.each(r.outputs, (function(t) {
                    n.addOutput(new y(t))
                })), r.changeIndex && (this._changeIndex = r.changeIndex), r.changeScript && (this._changeScript = new T(r.changeScript)), r.fee && (this._fee = r.fee), this.nLockTime = r.nLockTime, this.version = r.version, this._checkConsistency(t), this
            }, k.prototype._checkConsistency = function(t) {
                i.isUndefined(this._changeIndex) || (s.checkState(this._changeScript, "Change script is expected."), s.checkState(this.outputs[this._changeIndex], "Change index points to undefined output."), s.checkState(this.outputs[this._changeIndex].script.toString() === this._changeScript.toString(), "Change output has an unexpected script.")), t && t.hash && s.checkState(t.hash === this.hash, "Hash in object does not match transaction hash.")
            }, k.prototype.lockUntilDate = function(t) {
                if (s.checkArgument(t), i.isNumber(t) && t < k.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new o.Transaction.LockTimeTooEarly;
                i.isDate(t) && (t = t.getTime() / 1e3);
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === I.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = I.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, k.prototype.lockUntilBlockHeight = function(t) {
                if (s.checkArgument(i.isNumber(t)), t >= k.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new o.Transaction.BlockHeightTooHigh;
                if (t < 0) throw new o.Transaction.NLockTimeOutOfRange;
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === I.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = I.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, k.prototype.getLockTime = function() {
                return this.nLockTime ? this.nLockTime < k.NLOCKTIME_BLOCKHEIGHT_LIMIT ? this.nLockTime : new Date(1e3 * this.nLockTime) : null
            }, k.prototype.fromString = function(t) {
                this.fromBuffer(n.Buffer.from(t, "hex"))
            }, k.prototype._newTransaction = function() {
                this.version = 2, this.nLockTime = 0
            }, k.prototype.from = function(t, e, r, s) {
                if (i.isArray(t)) {
                    var n = this;
                    return i.each(t, (function(t) {
                        n.from(t, e, r, s)
                    })), this
                }
                return i.some(this.inputs, (function(e) {
                    return e.prevTxId.toString("hex") === t.txId && e.outputIndex === t.outputIndex
                })) || (e && r ? this._fromMultisigUtxo(t, e, r, s) : this._fromNonP2SH(t)), this
            }, k.prototype.associateInputs = function(t, e, r, i) {
                let s = [];
                for (let n of t) {
                    const t = this.inputs.findIndex(t => t.prevTxId.toString("hex") === n.txId && t.outputIndex === n.outputIndex);
                    s.push(t), t >= 0 && (this.inputs[t] = this._getInputFrom(n, e, r, i))
                }
                return s
            }, k.prototype._selectInputType = function(t, e, r) {
                var i;
                return t = new S(t), e && r ? t.script.isMultisigOut() ? i = m : (t.script.isScriptHashOut() || t.script.isWitnessScriptHashOut()) && (i = E) : i = t.script.isPublicKeyHashOut() || t.script.isWitnessPublicKeyHashOut() || t.script.isScriptHashOut() ? O : t.script.isPublicKeyOut() ? P : I, i
            }, k.prototype._getInputFrom = function(t, e, r, i) {
                t = new S(t);
                return new(this._selectInputType(t, e, r))({
                    output: new y({
                        script: t.script,
                        satoshis: t.satoshis
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    sequenceNumber: t.sequenceNumber,
                    script: T.empty()
                }, ...e && r ? [e, r, !1, i] : [])
            }, k.prototype._fromNonP2SH = function(t) {
                const e = this._getInputFrom(t);
                this.addInput(e)
            }, k.prototype._fromMultisigUtxo = function(t, e, r, i) {
                s.checkArgument(r <= e.length, "Number of required signatures must be greater than the number of public keys");
                const n = this._getInputFrom(t, e, r, i);
                this.addInput(n)
            }, k.prototype.addInput = function(t, e, r) {
                if (s.checkArgumentType(t, I, "input"), !t.output && (i.isUndefined(e) || i.isUndefined(r))) throw new o.Transaction.NeedMoreInfo("Need information about the UTXO script and satoshis");
                return t.output || !e || i.isUndefined(r) || (e = e instanceof T ? e : new T(e), s.checkArgumentType(r, "number", "satoshis"), t.output = new y({
                    script: e,
                    satoshis: r
                })), this.uncheckedAddInput(t)
            }, k.prototype.uncheckedAddInput = function(t) {
                return s.checkArgumentType(t, I, "input"), this.inputs.push(t), this._inputAmount = void 0, this._updateChangeOutput(), this
            }, k.prototype.hasAllUtxoInfo = function() {
                return i.every(this.inputs.map((function(t) {
                    return !!t.output
                })))
            }, k.prototype.fee = function(t) {
                return s.checkArgument(i.isNumber(t), "amount must be a number"), this._fee = t, this._updateChangeOutput(), this
            }, k.prototype.feePerKb = function(t) {
                return s.checkArgument(i.isNumber(t), "amount must be a number"), this._feePerKb = t, this._updateChangeOutput(), this
            }, k.prototype.feePerByte = function(t) {
                return s.checkArgument(i.isNumber(t), "amount must be a number"), this._feePerByte = t, this._updateChangeOutput(), this
            }, k.prototype.change = function(t) {
                return s.checkArgument(t, "address is required"), this._changeScript = T.fromAddress(t), this._updateChangeOutput(), this
            }, k.prototype.getChangeOutput = function() {
                return i.isUndefined(this._changeIndex) ? null : this.outputs[this._changeIndex]
            }, k.prototype.to = function(t, e) {
                if (i.isArray(t)) {
                    var r = this;
                    return i.each(t, (function(t) {
                        r.to(t.address, t.satoshis)
                    })), this
                }
                return s.checkArgument(c.isNaturalNumber(e), "Amount is expected to be a positive integer"), this.addOutput(new y({
                    script: T(new g(t)),
                    satoshis: e
                })), this
            }, k.prototype.addData = function(t) {
                return this.addOutput(new y({
                    script: T.buildDataOut(t),
                    satoshis: 0
                })), this
            }, k.prototype.addOutput = function(t) {
                return s.checkArgumentType(t, y, "output"), this._addOutput(t), this._updateChangeOutput(), this
            }, k.prototype.clearOutputs = function() {
                return this.outputs = [], this._clearSignatures(), this._outputAmount = void 0, this._changeIndex = void 0, this._updateChangeOutput(), this
            }, k.prototype._addOutput = function(t) {
                this.outputs.push(t), this._outputAmount = void 0
            }, k.prototype._getOutputAmount = function() {
                if (i.isUndefined(this._outputAmount)) {
                    var t = this;
                    this._outputAmount = 0, i.each(this.outputs, (function(e) {
                        t._outputAmount += e.satoshis
                    }))
                }
                return this._outputAmount
            }, k.prototype._getInputAmount = function() {
                return i.isUndefined(this._inputAmount) && (this._inputAmount = i.sumBy(this.inputs, (function(t) {
                    if (i.isUndefined(t.output)) throw new o.Transaction.Input.MissingPreviousOutput;
                    return t.output.satoshis
                }))), this._inputAmount
            }, k.prototype._updateChangeOutput = function() {
                if (this._changeScript) {
                    this._clearSignatures(), i.isUndefined(this._changeIndex) || this._removeOutput(this._changeIndex);
                    var t = this._getUnspentValue() - this.getFee();
                    t > k.DUST_AMOUNT ? (this._changeIndex = this.outputs.length, this._addOutput(new y({
                        script: this._changeScript,
                        satoshis: t
                    }))) : this._changeIndex = void 0
                }
            }, k.prototype.getFee = function() {
                return this.isCoinbase() ? 0 : i.isUndefined(this._fee) ? this._changeScript ? this._estimateFee() : this._getUnspentValue() : this._fee
            }, k.prototype._estimateFee = function() {
                var t = this._estimateSize(),
                    e = this._getUnspentValue(),
                    r = this._feePerByte || (this._feePerKb || k.FEE_PER_KB) / 1e3;

                function i(t) {
                    return t * r
                }
                var s = Math.ceil(i(t)),
                    n = Math.ceil(i(t) + i(k.CHANGE_OUTPUT_MAX_SIZE));
                return !this._changeScript || e <= n ? s : n
            }, k.prototype._getUnspentValue = function() {
                return this._getInputAmount() - this._getOutputAmount()
            }, k.prototype._clearSignatures = function() {
                i.each(this.inputs, (function(t) {
                    t.clearSignatures()
                }))
            }, k.prototype._estimateSize = function() {
                var t = k.MAXIMUM_EXTRA_SIZE;
                return i.each(this.inputs, (function(e) {
                    t += 36, t += e._estimateSize()
                })), i.each(this.outputs, (function(e) {
                    t += e.script.toBuffer().length + 9
                })), Math.ceil(t)
            }, k.prototype._removeOutput = function(t) {
                var e = this.outputs[t];
                this.outputs = i.without(this.outputs, e), this._outputAmount = void 0
            }, k.prototype.removeOutput = function(t) {
                this._removeOutput(t), this._updateChangeOutput()
            }, k.prototype.sort = function() {
                return this.sortInputs((function(t) {
                    var e = Array.prototype.concat.apply([], t);
                    let r = 0;
                    return e.forEach(t => {
                        t.i = r++
                    }), e.sort((function(t, e) {
                        return u(t.prevTxId, e.prevTxId) || t.outputIndex - e.outputIndex || t.i - e.i
                    })), e
                })), this.sortOutputs((function(t) {
                    var e = Array.prototype.concat.apply([], t);
                    let r = 0;
                    return e.forEach(t => {
                        t.i = r++
                    }), e.sort((function(t, e) {
                        return t.satoshis - e.satoshis || u(t.script.toBuffer(), e.script.toBuffer()) || t.i - e.i
                    })), e
                })), this
            }, k.prototype.shuffleOutputs = function() {
                return this.sortOutputs(i.shuffle)
            }, k.prototype.sortOutputs = function(t) {
                var e = t(this.outputs);
                return this._newOutputOrder(e)
            }, k.prototype.sortInputs = function(t) {
                return this.inputs = t(this.inputs), this._clearSignatures(), this
            }, k.prototype._newOutputOrder = function(t) {
                if (this.outputs.length !== t.length || 0 !== i.difference(this.outputs, t).length) throw new o.Transaction.InvalidSorting;
                if (!i.isUndefined(this._changeIndex)) {
                    var e = this.outputs[this._changeIndex];
                    this._changeIndex = i.findIndex(t, e)
                }
                return this.outputs = t, this
            }, k.prototype.removeInput = function(t, e) {
                var r;
                if ((r = !e && i.isNumber(t) ? t : i.findIndex(this.inputs, (function(r) {
                        return r.prevTxId.toString("hex") === t && r.outputIndex === e
                    }))) < 0 || r >= this.inputs.length) throw new o.Transaction.InvalidIndex(r, this.inputs.length);
                var s = this.inputs[r];
                this.inputs = i.without(this.inputs, s), this._inputAmount = void 0, this._updateChangeOutput()
            }, k.prototype.sign = function(t, e, r) {
                s.checkState(this.hasAllUtxoInfo(), "Not all utxo information is available to sign the transaction.");
                var n = this;
                return i.isArray(t) ? (i.each(t, (function(t) {
                    n.sign(t, e, r)
                })), this) : (i.each(this.getSignatures(t, e, r), (function(t) {
                    n.applySignature(t, r)
                })), this)
            }, k.prototype.getSignatures = function(t, e, r) {
                t = new A(t), e = e || _.SIGHASH_ALL;
                var s = this,
                    n = [],
                    u = p.sha256ripemd160(t.publicKey.toBuffer());
                return i.each(this.inputs, (function(o, h) {
                    i.each(o.getSignatures(s, t, h, e, u, r), (function(t) {
                        n.push(t)
                    }))
                })), n
            }, k.prototype.applySignature = function(t, e) {
                return this.inputs[t.inputIndex].addSignature(this, t, e), this
            }, k.prototype.isFullySigned = function() {
                return i.each(this.inputs, (function(t) {
                    if (t.isFullySigned === I.prototype.isFullySigned) throw new o.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction")
                })), i.every(i.map(this.inputs, (function(t) {
                    return t.isFullySigned()
                })))
            }, k.prototype.isValidSignature = function(t, e) {
                if (this.inputs[t.inputIndex].isValidSignature === I.prototype.isValidSignature) throw new o.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction");
                return this.inputs[t.inputIndex].isValidSignature(this, t, e)
            }, k.prototype.verifySignature = function(t, e, r, n, u, o, h) {
                if (i.isUndefined(u) && (u = 0), 1 === u) {
                    var a, p = n.toBuffer(),
                        _ = new f;
                    return _.writeVarintNum(p.length), _.write(p), o ? (s.checkState(c.isNaturalNumber(o)), a = (new f).writeUInt64LEBN(new R(o)).toBuffer()) : a = this.inputs[r].getSatoshisBuffer(), l.verify(this, t, e, r, _.toBuffer(), a, h)
                }
                return d.verify(this, t, e, r, n, h)
            }, k.prototype.verify = function() {
                if (0 === this.inputs.length) return "transaction txins empty";
                if (0 === this.outputs.length) return "transaction txouts empty";
                for (var t = new R(0), e = 0; e < this.outputs.length; e++) {
                    var r = this.outputs[e];
                    if (r.invalidSatoshis()) return "transaction txout " + e + " satoshis is invalid";
                    if (r._satoshisBN.gt(new R(k.MAX_MONEY, 10))) return "transaction txout " + e + " greater than MAX_MONEY";
                    if ((t = t.add(r._satoshisBN)).gt(new R(k.MAX_MONEY))) return "transaction txout " + e + " total output greater than MAX_MONEY"
                }
                if (this.toBuffer().length > 1e6) return "transaction over the maximum block size";
                var s = {};
                for (e = 0; e < this.inputs.length; e++) {
                    var n = this.inputs[e],
                        u = n.prevTxId + ":" + n.outputIndex;
                    if (!i.isUndefined(s[u])) return "transaction input " + e + " duplicate input";
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
            }, k.prototype.setVersion = function(t) {
                return s.checkArgument(c.isNaturalNumber(t) && t <= 2, "Wrong version number"), this.version = t, this
            }, t.exports = k
        },
        1124: function(t, e, r) {
            t.exports = r(520), t.exports.PublicKey = r(4079), t.exports.PublicKeyHash = r(4080), t.exports.MultiSig = r(4081), t.exports.MultiSigScriptHash = r(4082)
        },
        1125: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(202),
                n = r(70),
                u = {
                    BTC: [1e8, 8],
                    mBTC: [1e5, 5],
                    uBTC: [100, 2],
                    bits: [100, 2],
                    satoshis: [1, 0]
                };

            function o(t, e) {
                if (!(this instanceof o)) return new o(t, e);
                if (i.isNumber(e)) {
                    if (e <= 0) throw new s.Unit.InvalidRate(e);
                    t /= e, e = o.BTC
                }
                this._value = this._from(t, e);
                var r = this;
                Object.keys(u).forEach((function(t) {
                    Object.defineProperty(r, t, {
                        get: function() {
                            return r.to(t)
                        },
                        enumerable: !0
                    })
                }))
            }
            Object.keys(u).forEach((function(t) {
                o[t] = t
            })), o.fromObject = function(t) {
                return n.checkArgument(i.isObject(t), "Argument is expected to be an object"), new o(t.amount, t.code)
            }, o.fromBTC = function(t) {
                return new o(t, o.BTC)
            }, o.fromMillis = o.fromMilis = function(t) {
                return new o(t, o.mBTC)
            }, o.fromMicros = o.fromBits = function(t) {
                return new o(t, o.bits)
            }, o.fromSatoshis = function(t) {
                return new o(t, o.satoshis)
            }, o.fromFiat = function(t, e) {
                return new o(t, e)
            }, o.prototype._from = function(t, e) {
                if (!u[e]) throw new s.Unit.UnknownCode(e);
                return parseInt((t * u[e][0]).toFixed())
            }, o.prototype.to = function(t) {
                if (i.isNumber(t)) {
                    if (t <= 0) throw new s.Unit.InvalidRate(t);
                    return parseFloat((this.BTC * t).toFixed(2))
                }
                if (!u[t]) throw new s.Unit.UnknownCode(t);
                var e = this._value / u[t][0];
                return parseFloat(e.toFixed(u[t][1]))
            }, o.prototype.toBTC = function() {
                return this.to(o.BTC)
            }, o.prototype.toMillis = o.prototype.toMilis = function() {
                return this.to(o.mBTC)
            }, o.prototype.toMicros = o.prototype.toBits = function() {
                return this.to(o.bits)
            }, o.prototype.toSatoshis = function() {
                return this.to(o.satoshis)
            }, o.prototype.atRate = function(t) {
                return this.to(t)
            }, o.prototype.toString = function() {
                return this.satoshis + " satoshis"
            }, o.prototype.toObject = o.prototype.toJSON = function() {
                return {
                    amount: this.BTC,
                    code: o.BTC
                }
            }, o.prototype.inspect = function() {
                return "<Unit: " + this.toString() + ">"
            }, t.exports = o
        },
        183: function(t, e, r) {
            t.exports = r(1996), t.exports.Interpreter = r(4072)
        },
        1996: function(t, e, r) {
            "use strict";
            var i = r(244),
                s = r(269),
                n = r(167),
                u = r(135),
                o = r(1122),
                h = r(243),
                c = r(182),
                a = r(352),
                f = r(70),
                p = r(53),
                _ = r(202),
                d = (r(12), r(87)),
                l = r(112),
                g = function t(e) {
                    return this instanceof t ? (this.chunks = [], d.isBuffer(e) ? t.fromBuffer(e) : e instanceof i ? t.fromAddress(e) : e instanceof t ? t.fromBuffer(e.toBuffer()) : p.isString(e) ? t.fromString(e) : void(p.isObject(e) && p.isArray(e.chunks) && this.set(e))) : new t(e)
                };
            g.VERIFY_TAPROOT = 1 << 17, g.prototype.set = function(t) {
                return f.checkArgument(p.isObject(t)), f.checkArgument(p.isArray(t.chunks)), this.chunks = t.chunks, this
            }, g.fromBuffer = function(t) {
                var e = new g;
                e.chunks = [];
                for (var r = new s(t); !r.finished();) try {
                    var i, n, u = r.readUInt8();
                    u > 0 && u < o.OP_PUSHDATA1 ? (i = u, e.chunks.push({
                        buf: r.read(i),
                        len: i,
                        opcodenum: u
                    })) : u === o.OP_PUSHDATA1 ? (i = r.readUInt8(), n = r.read(i), e.chunks.push({
                        buf: n,
                        len: i,
                        opcodenum: u
                    })) : u === o.OP_PUSHDATA2 ? (i = r.readUInt16LE(), n = r.read(i), e.chunks.push({
                        buf: n,
                        len: i,
                        opcodenum: u
                    })) : u === o.OP_PUSHDATA4 ? (i = r.readUInt32LE(), n = r.read(i), e.chunks.push({
                        buf: n,
                        len: i,
                        opcodenum: u
                    })) : e.chunks.push({
                        opcodenum: u
                    })
                } catch (e) {
                    if (e instanceof RangeError) throw new _.Script.InvalidBuffer(t.toString("hex"));
                    throw e
                }
                return e
            }, g.prototype.toBuffer = function() {
                for (var t = new n, e = 0; e < this.chunks.length; e++) {
                    var r = this.chunks[e],
                        i = r.opcodenum;
                    t.writeUInt8(r.opcodenum), r.buf && (i < o.OP_PUSHDATA1 ? t.write(r.buf) : i === o.OP_PUSHDATA1 ? (t.writeUInt8(r.len), t.write(r.buf)) : i === o.OP_PUSHDATA2 ? (t.writeUInt16LE(r.len), t.write(r.buf)) : i === o.OP_PUSHDATA4 && (t.writeUInt32LE(r.len), t.write(r.buf)))
                }
                return t.concat()
            }, g.fromASM = function(t) {
                var e = new g;
                e.chunks = [];
                for (var r = t.split(" "), i = 0; i < r.length;) {
                    var s = r[i],
                        n = o(s).toNumber();
                    if (p.isUndefined(n)) {
                        var u = Buffer.from(r[i], "hex");
                        e.chunks.push({
                            buf: u,
                            len: u.length,
                            opcodenum: u.length
                        }), i += 1
                    } else n === o.OP_PUSHDATA1 || n === o.OP_PUSHDATA2 || n === o.OP_PUSHDATA4 ? (e.chunks.push({
                        buf: Buffer.from(r[i + 2], "hex"),
                        len: parseInt(r[i + 1]),
                        opcodenum: n
                    }), i += 3) : (e.chunks.push({
                        opcodenum: n
                    }), i += 1)
                }
                return e
            }, g.fromHex = function(t) {
                return new g(Buffer.from(t, "hex"))
            }, g.fromString = function(t) {
                if (l.isHexa(t) || 0 === t.length) return new g(Buffer.from(t, "hex"));
                var e = new g;
                e.chunks = [];
                for (var r = t.split(" "), i = 0; i < r.length;) {
                    var s = r[i],
                        n = o(s).toNumber();
                    if (p.isUndefined(n)) {
                        if (!((n = parseInt(s)) > 0 && n < o.OP_PUSHDATA1)) throw new Error("Invalid script: " + JSON.stringify(t));
                        e.chunks.push({
                            buf: Buffer.from(r[i + 1].slice(2), "hex"),
                            len: n,
                            opcodenum: n
                        }), i += 2
                    } else if (n === o.OP_PUSHDATA1 || n === o.OP_PUSHDATA2 || n === o.OP_PUSHDATA4) {
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
            }, g.prototype._chunkToString = function(t, e) {
                var r = t.opcodenum,
                    i = "asm" === e,
                    s = "";
                if (t.buf)(!i && r === o.OP_PUSHDATA1 || r === o.OP_PUSHDATA2 || r === o.OP_PUSHDATA4) && (s = s + " " + o(r).toString()), t.len > 0 && (s = i ? s + " " + t.buf.toString("hex") : s + " " + t.len + " 0x" + t.buf.toString("hex"));
                else if (void 0 !== o.reverseMap[r]) i ? 0 === r ? s += " 0" : 79 === r ? s += " -1" : s = s + " " + o(r).toString() : s = s + " " + o(r).toString();
                else {
                    var n = r.toString(16);
                    n.length % 2 != 0 && (n = "0" + n), s = i ? s + " " + n : s + " 0x" + n
                }
                return s
            }, g.prototype.toASM = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var r = this.chunks[e];
                    t += this._chunkToString(r, "asm")
                }
                return t.substr(1)
            }, g.prototype.toString = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var r = this.chunks[e];
                    t += this._chunkToString(r)
                }
                return t.substr(1)
            }, g.prototype.toHex = function() {
                return this.toBuffer().toString("hex")
            }, g.prototype.inspect = function() {
                return "<Script: " + this.toString() + ">"
            }, g.prototype.isPublicKeyHashOut = function() {
                return !(5 !== this.chunks.length || this.chunks[0].opcodenum !== o.OP_DUP || this.chunks[1].opcodenum !== o.OP_HASH160 || !this.chunks[2].buf || 20 !== this.chunks[2].buf.length || this.chunks[3].opcodenum !== o.OP_EQUALVERIFY || this.chunks[4].opcodenum !== o.OP_CHECKSIG)
            }, g.prototype.isPublicKeyHashIn = function() {
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
            }, g.prototype.getPublicKey = function() {
                return f.checkState(this.isPublicKeyOut(), "Can't retrieve PublicKey from a non-PK output"), this.chunks[0].buf
            }, g.prototype.getPublicKeyHash = function() {
                if (this.isPublicKeyHashOut()) return this.chunks[2].buf;
                if (this.isWitnessPublicKeyHashOut()) return this.chunks[1].buf;
                throw new Error("Can't retrieve PublicKeyHash from a non-PKH output")
            }, g.prototype.isPublicKeyOut = function() {
                if (2 === this.chunks.length && this.chunks[0].buf && this.chunks[0].buf.length && this.chunks[1].opcodenum === o.OP_CHECKSIG) {
                    var t = this.chunks[0].buf,
                        e = t[0],
                        r = !1;
                    if ((4 !== e && 6 !== e && 7 !== e || 65 !== t.length) && (3 !== e && 2 !== e || 33 !== t.length) || (r = !0), r) return h.isValid(t)
                }
                return !1
            }, g.prototype.isPublicKeyIn = function() {
                if (1 === this.chunks.length) {
                    var t = this.chunks[0].buf;
                    if (t && t.length && 48 === t[0]) return !0
                }
                return !1
            }, g.prototype.isScriptHashOut = function() {
                var t = this.toBuffer();
                return 23 === t.length && t[0] === o.OP_HASH160 && 20 === t[1] && t[t.length - 1] === o.OP_EQUAL
            }, g.prototype.isWitnessScriptHashOut = function() {
                var t = this.toBuffer();
                return 34 === t.length && t[0] === o.OP_0 && 32 === t[1]
            }, g.prototype.isWitnessPublicKeyHashOut = function() {
                var t = this.toBuffer();
                return 22 === t.length && t[0] === o.OP_0 && 20 === t[1]
            }, g.prototype.isTaproot = function() {
                var t = this.toBuffer();
                return 34 === t.length && t[0] === o.OP_1 && 32 === t[1]
            }, g.prototype.isWitnessProgram = function(t) {
                t || (t = {});
                var e = this.toBuffer();
                return !(e.length < 4 || e.length > 42) && ((e[0] === o.OP_0 || e[0] >= o.OP_1 && e[0] <= o.OP_16) && (e.length === e[1] + 2 && (t.version = e[0], t.program = e.slice(2, e.length), !0)))
            }, g.prototype.isScriptHashIn = function() {
                if (this.chunks.length <= 1) return !1;
                var t, e = this.chunks[this.chunks.length - 1].buf;
                if (!e) return !1;
                try {
                    t = g.fromBuffer(e)
                } catch (t) {
                    if (t instanceof _.Script.InvalidBuffer) return !1;
                    throw t
                }
                return t.classify() !== g.types.UNKNOWN
            }, g.prototype.isMultisigOut = function() {
                return this.chunks.length > 3 && o.isSmallIntOp(this.chunks[0].opcodenum) && this.chunks.slice(1, this.chunks.length - 2).every((function(t) {
                    return t.buf && d.isBuffer(t.buf)
                })) && o.isSmallIntOp(this.chunks[this.chunks.length - 2].opcodenum) && this.chunks[this.chunks.length - 1].opcodenum === o.OP_CHECKMULTISIG
            }, g.prototype.isMultisigIn = function() {
                return this.chunks.length >= 2 && 0 === this.chunks[0].opcodenum && this.chunks.slice(1, this.chunks.length).every((function(t) {
                    return t.buf && d.isBuffer(t.buf) && c.isTxDER(t.buf)
                }))
            }, g.prototype.isDataOut = function() {
                return this.chunks.length >= 1 && this.chunks[0].opcodenum === o.OP_RETURN && (1 === this.chunks.length || 2 === this.chunks.length && this.chunks[1].buf && this.chunks[1].buf.length <= g.OP_RETURN_STANDARD_SIZE && this.chunks[1].length === this.chunks.len)
            }, g.prototype.getData = function() {
                if (this.isDataOut() || this.isScriptHashOut() || this.isWitnessScriptHashOut() || this.isWitnessPublicKeyHashOut() || this.isTaproot()) return p.isUndefined(this.chunks[1]) ? Buffer.alloc(0) : Buffer.from(this.chunks[1].buf);
                if (this.isPublicKeyHashOut()) return Buffer.from(this.chunks[2].buf);
                throw new Error("Unrecognized script type to get data from")
            }, g.prototype.isPushOnly = function() {
                return p.every(this.chunks, (function(t) {
                    return t.opcodenum <= o.OP_16
                }))
            }, (g.types = {}).UNKNOWN = "Unknown", g.types.PUBKEY_OUT = "Pay to public key", g.types.PUBKEY_IN = "Spend from public key", g.types.PUBKEYHASH_OUT = "Pay to public key hash", g.types.PUBKEYHASH_IN = "Spend from public key hash", g.types.SCRIPTHASH_OUT = "Pay to script hash", g.types.SCRIPTHASH_IN = "Spend from script hash", g.types.MULTISIG_OUT = "Pay to multisig", g.types.MULTISIG_IN = "Spend from multisig", g.types.DATA_OUT = "Data push", g.OP_RETURN_STANDARD_SIZE = 80, g.prototype.classify = function() {
                if (this._isInput) return this.classifyInput();
                if (this._isOutput) return this.classifyOutput();
                var t = this.classifyOutput();
                return t != g.types.UNKNOWN ? t : this.classifyInput()
            }, (g.outputIdentifiers = {}).PUBKEY_OUT = g.prototype.isPublicKeyOut, g.outputIdentifiers.PUBKEYHASH_OUT = g.prototype.isPublicKeyHashOut, g.outputIdentifiers.MULTISIG_OUT = g.prototype.isMultisigOut, g.outputIdentifiers.SCRIPTHASH_OUT = g.prototype.isScriptHashOut, g.outputIdentifiers.DATA_OUT = g.prototype.isDataOut, g.prototype.classifyOutput = function() {
                for (var t in g.outputIdentifiers)
                    if (g.outputIdentifiers[t].bind(this)()) return g.types[t];
                return g.types.UNKNOWN
            }, (g.inputIdentifiers = {}).PUBKEY_IN = g.prototype.isPublicKeyIn, g.inputIdentifiers.PUBKEYHASH_IN = g.prototype.isPublicKeyHashIn, g.inputIdentifiers.MULTISIG_IN = g.prototype.isMultisigIn, g.inputIdentifiers.SCRIPTHASH_IN = g.prototype.isScriptHashIn, g.prototype.classifyInput = function() {
                for (var t in g.inputIdentifiers)
                    if (g.inputIdentifiers[t].bind(this)()) return g.types[t];
                return g.types.UNKNOWN
            }, g.prototype.isStandard = function() {
                return this.classify() !== g.types.UNKNOWN
            }, g.prototype.prepend = function(t) {
                return this._addByType(t, !0), this
            }, g.prototype.equals = function(t) {
                if (f.checkState(t instanceof g, "Must provide another script"), this.chunks.length !== t.chunks.length) return !1;
                var e;
                for (e = 0; e < this.chunks.length; e++) {
                    if (d.isBuffer(this.chunks[e].buf) && !d.isBuffer(t.chunks[e].buf)) return !1;
                    if (d.isBuffer(this.chunks[e].buf) && !d.equals(this.chunks[e].buf, t.chunks[e].buf)) return !1;
                    if (this.chunks[e].opcodenum !== t.chunks[e].opcodenum) return !1
                }
                return !0
            }, g.prototype.add = function(t) {
                return this._addByType(t, !1), this
            }, g.prototype._addByType = function(t, e) {
                if ("string" == typeof t) this._addOpcode(t, e);
                else if ("number" == typeof t) this._addOpcode(t, e);
                else if (t instanceof o) this._addOpcode(t, e);
                else if (d.isBuffer(t)) this._addBuffer(t, e);
                else if (t instanceof g) this.chunks = this.chunks.concat(t.chunks);
                else {
                    if ("object" != typeof t) throw new Error("Invalid script chunk");
                    this._insertAtPosition(t, e)
                }
            }, g.prototype._insertAtPosition = function(t, e) {
                e ? this.chunks.unshift(t) : this.chunks.push(t)
            }, g.prototype._addOpcode = function(t, e) {
                var r;
                return r = "number" == typeof t ? t : t instanceof o ? t.toNumber() : o(t).toNumber(), this._insertAtPosition({
                    opcodenum: r
                }, e), this
            }, g.prototype._addBuffer = function(t, e) {
                var r, i = t.length;
                if (i >= 0 && i < o.OP_PUSHDATA1) r = i;
                else if (i < Math.pow(2, 8)) r = o.OP_PUSHDATA1;
                else if (i < Math.pow(2, 16)) r = o.OP_PUSHDATA2;
                else {
                    if (!(i < Math.pow(2, 32))) throw new Error("You can't push that much data");
                    r = o.OP_PUSHDATA4
                }
                return this._insertAtPosition({
                    buf: t,
                    len: i,
                    opcodenum: r
                }, e), this
            }, g.prototype.hasCodeseparators = function() {
                for (var t = 0; t < this.chunks.length; t++)
                    if (this.chunks[t].opcodenum === o.OP_CODESEPARATOR) return !0;
                return !1
            }, g.prototype.removeCodeseparators = function() {
                for (var t = [], e = 0; e < this.chunks.length; e++) this.chunks[e].opcodenum !== o.OP_CODESEPARATOR && t.push(this.chunks[e]);
                return this.chunks = t, this
            }, g.buildMultisigOut = function(t, e, r) {
                f.checkArgument(e <= t.length, "Number of required signatures must be less than or equal to the number of public keys"), r = r || {};
                var i = new g;
                i.add(o.smallInt(e));
                var s = t = p.map(t, h);
                r.noSorting || (s = p.sortBy(t, (function(t) {
                    return t.toString("hex")
                })));
                for (var n = 0; n < s.length; n++) {
                    var u = s[n];
                    i.add(u.toBuffer())
                }
                return i.add(o.smallInt(t.length)), i.add(o.OP_CHECKMULTISIG), i
            }, g.buildWitnessMultisigOutFromScript = function(t) {
                if (t instanceof g) {
                    var e = new g;
                    return e.add(o.OP_0), e.add(u.sha256(t.toBuffer())), e
                }
                throw new TypeError("First argument is expected to be a p2sh script")
            }, g.buildMultisigIn = function(t, e, r, i) {
                f.checkArgument(p.isArray(t)), f.checkArgument(p.isNumber(e)), f.checkArgument(p.isArray(r)), i = i || {};
                var s = new g;
                return s.add(o.OP_0), p.each(r, (function(t) {
                    f.checkArgument(d.isBuffer(t), "Signatures must be an array of Buffers"), s.add(t)
                })), s
            }, g.buildP2SHMultisigIn = function(t, e, r, i) {
                f.checkArgument(p.isArray(t)), f.checkArgument(p.isNumber(e)), f.checkArgument(p.isArray(r)), i = i || {};
                var s = new g;
                return s.add(o.OP_0), p.each(r, (function(t) {
                    f.checkArgument(d.isBuffer(t), "Signatures must be an array of Buffers"), s.add(t)
                })), s.add((i.cachedMultisig || g.buildMultisigOut(t, e, i)).toBuffer()), s
            }, g.buildPublicKeyHashOut = function(t) {
                f.checkArgument(!p.isUndefined(t)), f.checkArgument(t instanceof h || t instanceof i || p.isString(t)), t instanceof h ? t = t.toAddress() : p.isString(t) && (t = new i(t));
                var e = new g;
                return e.add(o.OP_DUP).add(o.OP_HASH160).add(t.hashBuffer).add(o.OP_EQUALVERIFY).add(o.OP_CHECKSIG), e._network = t.network, e
            }, g.buildWitnessV0Out = function(t) {
                f.checkArgument(!p.isUndefined(t)), f.checkArgument(t instanceof h || t instanceof i || p.isString(t)), t instanceof h ? t = t.toAddress(null, i.PayToWitnessPublicKeyHash) : p.isString(t) && (t = new i(t));
                var e = new g;
                return e.add(o.OP_0).add(t.hashBuffer), e._network = t.network, e
            }, g.buildPublicKeyOut = function(t) {
                f.checkArgument(t instanceof h);
                var e = new g;
                return e.add(t.toBuffer()).add(o.OP_CHECKSIG), e
            }, g.buildDataOut = function(t, e) {
                f.checkArgument(p.isUndefined(t) || p.isString(t) || d.isBuffer(t)), p.isString(t) && (t = Buffer.from(t, e));
                var r = new g;
                return r.add(o.OP_RETURN), p.isUndefined(t) || r.add(t), r
            }, g.buildScriptHashOut = function(t) {
                f.checkArgument(t instanceof g || t instanceof i && t.isPayToScriptHash());
                var e = new g;
                return e.add(o.OP_HASH160).add(t instanceof i ? t.hashBuffer : u.sha256ripemd160(t.toBuffer())).add(o.OP_EQUAL), e._network = t._network || t.network, e
            }, g.buildPublicKeyIn = function(t, e) {
                f.checkArgument(t instanceof c || d.isBuffer(t)), f.checkArgument(p.isUndefined(e) || p.isNumber(e)), t instanceof c && (t = t.toBuffer());
                var r = new g;
                return r.add(d.concat([t, d.integerAsSingleByteBuffer(e || c.SIGHASH_ALL)])), r
            }, g.buildPublicKeyHashIn = function(t, e, r) {
                return f.checkArgument(e instanceof c || d.isBuffer(e)), f.checkArgument(p.isUndefined(r) || p.isNumber(r)), e instanceof c && (e = e.toBuffer()), (new g).add(d.concat([e, d.integerAsSingleByteBuffer(r || c.SIGHASH_ALL)])).add(new h(t).toBuffer())
            }, g.empty = function() {
                return new g
            }, g.prototype.toScriptHashOut = function() {
                return g.buildScriptHashOut(this)
            }, g.fromAddress = function(t) {
                if ((t = i(t)).isPayToScriptHash()) return g.buildScriptHashOut(t);
                if (t.isPayToPublicKeyHash()) return g.buildPublicKeyHashOut(t);
                if (t.isPayToWitnessPublicKeyHash()) return g.buildWitnessV0Out(t);
                if (t.isPayToWitnessScriptHash()) return g.buildWitnessV0Out(t);
                throw new _.Script.UnrecognizedAddress(t)
            }, g.prototype.getAddressInfo = function(t) {
                if (this._isInput) return this._getInputAddressInfo();
                if (this._isOutput) return this._getOutputAddressInfo();
                var e = this._getOutputAddressInfo();
                return e || this._getInputAddressInfo()
            }, g.prototype._getOutputAddressInfo = function() {
                var t = {};
                if (this.isScriptHashOut()) t.hashBuffer = this.getData(), t.type = i.PayToScriptHash;
                else if (this.isPublicKeyHashOut()) t.hashBuffer = this.getData(), t.type = i.PayToPublicKeyHash;
                else if (this.isWitnessScriptHashOut()) t.hashBuffer = this.getData(), t.type = i.PayToWitnessScriptHash;
                else if (this.isWitnessPublicKeyHashOut()) t.hashBuffer = this.getData(), t.type = i.PayToWitnessPublicKeyHash;
                else {
                    if (!this.isTaproot()) return !1;
                    t.hashBuffer = this.getData(), t.type = i.PayToTaproot
                }
                return t
            }, g.prototype._getInputAddressInfo = function() {
                var t = {};
                if (this.isPublicKeyHashIn()) t.hashBuffer = u.sha256ripemd160(this.chunks[1].buf), t.type = i.PayToPublicKeyHash;
                else {
                    if (!this.isScriptHashIn()) return !1;
                    t.hashBuffer = u.sha256ripemd160(this.chunks[this.chunks.length - 1].buf), t.type = i.PayToScriptHash
                }
                return t
            }, g.prototype.toAddress = function(t) {
                var e = this.getAddressInfo();
                return !!e && (e.network = a.get(t) || this._network || a.defaultNetwork, new i(e))
            }, g.prototype.findAndDelete = function(t) {
                for (var e = t.toBuffer().toString("hex"), r = 0; r < this.chunks.length; r++) {
                    e === g({
                        chunks: [this.chunks[r]]
                    }).toBuffer().toString("hex") && this.chunks.splice(r, 1)
                }
                return this
            }, g.prototype.checkMinimalPush = function(t) {
                var e = this.chunks[t],
                    r = e.buf,
                    i = e.opcodenum;
                return !r || (0 === r.length ? i === o.OP_0 : 1 === r.length && r[0] >= 1 && r[0] <= 16 ? i === o.OP_1 + (r[0] - 1) : 1 === r.length && 129 === r[0] ? i === o.OP_1NEGATE : r.length <= 75 ? i === r.length : r.length <= 255 ? i === o.OP_PUSHDATA1 : !(r.length <= 65535) || i === o.OP_PUSHDATA2)
            }, g.prototype._decodeOP_N = function(t) {
                if (t === o.OP_0) return 0;
                if (t >= o.OP_1 && t <= o.OP_16) return t - (o.OP_1 - 1);
                throw new Error("Invalid opcode: " + JSON.stringify(t))
            }, g.prototype.getSignatureOperationsCount = function(t) {
                t = !!p.isUndefined(t) || t;
                var e = this,
                    r = 0,
                    i = o.OP_INVALIDOPCODE;
                return p.each(e.chunks, (function(s) {
                    var n = s.opcodenum;
                    n == o.OP_CHECKSIG || n == o.OP_CHECKSIGVERIFY ? r++ : n != o.OP_CHECKMULTISIG && n != o.OP_CHECKMULTISIGVERIFY || (t && i >= o.OP_1 && i <= o.OP_16 ? r += e._decodeOP_N(i) : r += 20), i = n
                })), r
            }, t.exports = g
        },
        1999: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(70),
                n = r(112),
                u = r(183),
                o = r(244),
                h = r(1125);

            function c(t) {
                if (!(this instanceof c)) return new c(t);
                s.checkArgument(i.isObject(t), "Must provide an object from where to extract data");
                var e = t.address ? new o(t.address) : void 0,
                    r = t.txid ? t.txid : t.txId;
                if (!r || !n.isHexaString(r) || r.length > 64) throw new Error("Invalid TXID in object", t);
                var a = i.isUndefined(t.vout) ? t.outputIndex : t.vout;
                if (!i.isNumber(a)) throw new Error("Invalid outputIndex, received " + a);
                s.checkArgument(!i.isUndefined(t.scriptPubKey) || !i.isUndefined(t.script), "Must provide the scriptPubKey for that output!");
                var f = new u(t.scriptPubKey || t.script);
                s.checkArgument(!i.isUndefined(t.amount) || !i.isUndefined(t.satoshis), "Must provide an amount for the output");
                var p = i.isUndefined(t.amount) ? t.satoshis : new h.fromBTC(t.amount).toSatoshis();
                s.checkArgument(i.isNumber(p), "Amount must be a number"), n.defineImmutable(this, {
                    address: e,
                    txId: r,
                    outputIndex: a,
                    script: f,
                    satoshis: p
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
                    amount: h.fromSatoshis(this.satoshis).toBTC()
                }
            }, t.exports = c
        },
        243: function(t, e, r) {
            "use strict";
            var i = r(134),
                Point = r(430),
                s = r(135),
                n = r(112),
                u = r(352),
                o = r(53),
                h = r(70);

            function c(t, e) {
                if (!(this instanceof c)) return new c(t, e);
                if (h.checkArgument(t, "First argument is required, please include public key data."), t instanceof c) return t;
                e = e || {};
                var r = this._classifyArgs(t, e);
                return r.point.validate(), n.defineImmutable(this, {
                    point: r.point,
                    compressed: r.compressed,
                    network: r.network || u.defaultNetwork
                }), this
            }
            c.prototype._classifyArgs = function(t, e) {
                var r = {
                    compressed: o.isUndefined(e.compressed) || e.compressed
                };
                if (t instanceof Point) r.point = t;
                else if (t.x && t.y) r = c._transformObject(t);
                else if ("string" == typeof t) r = c._transformDER(Buffer.from(t, "hex"));
                else if (c._isBuffer(t)) r = c._transformDER(t);
                else {
                    if (!c._isPrivateKey(t)) throw new TypeError("First argument is an unrecognized data format.");
                    r = c._transformPrivateKey(t)
                }
                return r.network || (r.network = o.isUndefined(e.network) ? void 0 : u.get(e.network)), r
            }, c._isPrivateKey = function(t) {
                return t instanceof r(517)
            }, c._isBuffer = function(t) {
                return t instanceof Buffer || t instanceof Uint8Array
            }, c._transformPrivateKey = function(t) {
                h.checkArgument(c._isPrivateKey(t), "Must be an instance of PrivateKey");
                var e = {};
                return e.point = Point.getG().mul(t.bn), e.compressed = t.compressed, e.network = t.network, e
            }, c._transformDER = function(t, e) {
                h.checkArgument(c._isBuffer(t), "Must be a hex buffer of DER encoded public key");
                var r, s, n, u, a = {};
                if (e = !!o.isUndefined(e) || e, 4 !== t[0] && (e || 6 !== t[0] && 7 !== t[0]))
                    if (3 === t[0]) n = t.slice(1), r = new i(n), (a = c._transformX(!0, r)).compressed = !0;
                    else {
                        if (2 !== t[0]) throw new TypeError("Invalid DER format public key");
                        n = t.slice(1), r = new i(n), (a = c._transformX(!1, r)).compressed = !0
                    }
                else {
                    if (n = t.slice(1, 33), u = t.slice(33, 65), 32 !== n.length || 32 !== u.length || 65 !== t.length) throw new TypeError("Length of x and y must be 32 bytes");
                    r = new i(n), s = new i(u), a.point = new Point(r, s), a.compressed = !1
                }
                return a
            }, c._transformX = function(t, e) {
                h.checkArgument("boolean" == typeof t, "Must specify whether y is odd or not (true or false)");
                var r = {};
                return r.point = Point.fromX(t, e), r
            }, c._transformObject = function(t) {
                var e = new i(t.x, "hex"),
                    r = new i(t.y, "hex");
                return new c(new Point(e, r), {
                    compressed: t.compressed
                })
            }, c.fromPrivateKey = function(t) {
                h.checkArgument(c._isPrivateKey(t), "Must be an instance of PrivateKey");
                var e = c._transformPrivateKey(t);
                return new c(e.point, {
                    compressed: e.compressed,
                    network: e.network
                })
            }, c.fromDER = c.fromBuffer = function(t, e) {
                h.checkArgument(c._isBuffer(t), "Must be a hex buffer of DER encoded public key");
                var r = c._transformDER(t, e);
                return new c(r.point, {
                    compressed: r.compressed
                })
            }, c.fromPoint = function(t, e) {
                return h.checkArgument(t instanceof Point, "First argument must be an instance of Point."), new c(t, {
                    compressed: e
                })
            }, c.fromString = function(t, e) {
                var r = Buffer.from(t, e || "hex"),
                    i = c._transformDER(r);
                return new c(i.point, {
                    compressed: i.compressed
                })
            }, c.fromX = function(t, e) {
                var r = c._transformX(t, e);
                return new c(r.point, {
                    compressed: r.compressed
                })
            }, c.getValidationError = function(t) {
                var e;
                try {
                    new c(t)
                } catch (t) {
                    e = t
                }
                return e
            }, c.isValid = function(t) {
                return !c.getValidationError(t)
            }, c.prototype.toObject = c.prototype.toJSON = function() {
                return {
                    x: this.point.getX().toString("hex", 2),
                    y: this.point.getY().toString("hex", 2),
                    compressed: this.compressed
                }
            }, c.prototype.toBuffer = c.prototype.toDER = function() {
                var t, e = this.point.getX(),
                    r = this.point.getY(),
                    i = e.toBuffer({
                        size: 32
                    }),
                    s = r.toBuffer({
                        size: 32
                    });
                return this.compressed ? (t = s[s.length - 1] % 2 ? Buffer.from([3]) : Buffer.from([2]), Buffer.concat([t, i])) : (t = Buffer.from([4]), Buffer.concat([t, i, s]))
            }, c.prototype._getID = function() {
                return s.sha256ripemd160(this.toBuffer())
            }, c.prototype.toAddress = function(t, e) {
                return r(244).fromPublicKey(this, t || this.network, e)
            }, c.prototype.toString = function() {
                return this.toDER().toString("hex")
            }, c.prototype.inspect = function() {
                return "<PublicKey: " + this.toString() + (this.compressed ? "" : ", uncompressed") + ">"
            }, t.exports = c
        },
        270: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(134),
                n = (r(12), r(87)),
                u = r(112),
                o = r(167),
                h = r(183),
                c = r(70),
                a = r(202);

            function f(t) {
                if (!(this instanceof f)) return new f(t);
                if (!i.isObject(t)) throw new TypeError("Unrecognized argument for Output");
                var e;
                this.satoshis = t.satoshis, n.isBuffer(t.script) ? this._scriptBuffer = t.script : (e = i.isString(t.script) && u.isHexa(t.script) ? Buffer.from(t.script, "hex") : t.script, this.setScript(e))
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
                    t instanceof s ? (this._satoshisBN = t, this._satoshis = t.toNumber()) : i.isString(t) ? (this._satoshis = parseInt(t), this._satoshisBN = s.fromNumber(this._satoshis)) : (c.checkArgument(u.isNaturalNumber(t), "Output satoshis is not a natural number"), this._satoshisBN = s.fromNumber(t), this._satoshis = t), c.checkState(u.isNaturalNumber(this._satoshis), "Output satoshis is not a natural number")
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
                    this._script = h.fromBuffer(this._scriptBuffer), this._script._isOutput = !0
                } catch (t) {
                    if (!(t instanceof a.Script.InvalidBuffer)) throw t;
                    this._script = null
                }
            }, f.prototype.setScript = function(t) {
                if (t instanceof h) this._scriptBuffer = t.toBuffer(), this._script = t, this._script._isOutput = !0;
                else if (i.isString(t)) this._script = h.fromString(t), this._scriptBuffer = this._script.toBuffer(), this._script._isOutput = !0;
                else {
                    if (!n.isBuffer(t)) throw new TypeError("Invalid argument type: script");
                    this.setScriptFromBuffer(t)
                }
                return this
            }, f.prototype.inspect = function() {
                var t;
                return t = this.script ? this.script.inspect() : this._scriptBuffer.toString("hex"), "<Output (" + this.satoshis + " sats) " + t + ">"
            }, f.fromBufferReader = function(t) {
                var e = {};
                e.satoshis = t.readUInt64LEBN();
                var r = t.readVarintNum();
                return e.script = 0 !== r ? t.read(r) : Buffer.from([]), new f(e)
            }, f.prototype.toBufferWriter = function(t) {
                t || (t = new o), t.writeUInt64LEBN(this._satoshisBN);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t
            }, t.exports = f
        },
        294: function(t, e, r) {
            "use strict";
            var i = r(182),
                s = r(183),
                n = r(270),
                u = r(269),
                o = r(167),
                h = r(134),
                c = r(135),
                a = r(658),
                f = r(70),
                p = r(53);
            const _ = r(4073);
            var d = function(t, e, a, f) {
                var p, _ = r(1123),
                    d = r(1124),
                    l = _.shallowCopy(t);
                for ((f = new s(f)).removeCodeseparators(), p = 0; p < l.inputs.length; p++) l.inputs[p] = new d(l.inputs[p]).setScript(s.empty());
                if (l.inputs[a] = new d(l.inputs[a]).setScript(f), (31 & e) === i.SIGHASH_NONE || (31 & e) === i.SIGHASH_SINGLE)
                    for (p = 0; p < l.inputs.length; p++) p !== a && (l.inputs[p].sequenceNumber = 0);
                if ((31 & e) === i.SIGHASH_NONE) l.outputs = [];
                else if ((31 & e) === i.SIGHASH_SINGLE) {
                    if (a >= l.outputs.length) return Buffer.from("0000000000000000000000000000000000000000000000000000000000000001", "hex");
                    for (l.outputs.length = a + 1, p = 0; p < a; p++) l.outputs[p] = new n({
                        satoshis: h.fromBuffer(Buffer.from("ffffffffffffffff", "hex")),
                        script: s.empty()
                    })
                }
                e & i.SIGHASH_ANYONECANPAY && (l.inputs = [l.inputs[a]]);
                var g = (new o).write(l.toBuffer()).writeInt32LE(e).toBuffer(),
                    S = c.sha256sha256(g);
                return S = new u(S).readReverse()
            };
            t.exports = {
                sighash: d,
                sign: function(t, e, r, i, s, n) {
                    n = n || "ecdsa";
                    let u, o = d(t, r, i, s);
                    switch (n) {
                        case "ecdsa":
                            u = a.sign(o, e, "little").set({
                                nhashtype: r
                            });
                            break;
                        case "schnorr":
                            u = _.sign(e.toString(), o);
                            break;
                        default:
                            throw new Error("signingMethod not supported ", n)
                    }
                    return u
                },
                verify: function(t, e, r, i, s, n) {
                    f.checkArgument(!p.isUndefined(t), "Transaction Undefined"), f.checkArgument(!p.isUndefined(e) && !p.isUndefined(e.nhashtype), "Signature Undefined"), n = n || "ecdsa";
                    let u = d(t, e.nhashtype, i, s),
                        o = !1;
                    switch (n) {
                        case "ecdsa":
                            o = a.verify(u, e, r, "little");
                            break;
                        case "schnorr":
                            o = _.verify(r, u, e);
                            break;
                        default:
                            throw new Error("signingMethod not supported ", n)
                    }
                    return o
                }
            }
        },
        4071: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.bech32m = e.bech32 = void 0;
            const i = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
                s = {};
            for (let t = 0; t < i.length; t++) {
                const e = i.charAt(t);
                s[e] = t
            }

            function n(t) {
                const e = t >> 25;
                return (33554431 & t) << 5 ^ 996825010 & -(e >> 0 & 1) ^ 642813549 & -(e >> 1 & 1) ^ 513874426 & -(e >> 2 & 1) ^ 1027748829 & -(e >> 3 & 1) ^ 705979059 & -(e >> 4 & 1)
            }

            function u(t) {
                let e = 1;
                for (let r = 0; r < t.length; ++r) {
                    const i = t.charCodeAt(r);
                    if (i < 33 || i > 126) return "Invalid prefix (" + t + ")";
                    e = n(e) ^ i >> 5
                }
                e = n(e);
                for (let r = 0; r < t.length; ++r) {
                    const i = t.charCodeAt(r);
                    e = n(e) ^ 31 & i
                }
                return e
            }

            function o(t, e, r, i) {
                let s = 0,
                    n = 0;
                const u = (1 << r) - 1,
                    o = [];
                for (let i = 0; i < t.length; ++i)
                    for (s = s << e | t[i], n += e; n >= r;) n -= r, o.push(s >> n & u);
                if (i) n > 0 && o.push(s << r - n & u);
                else {
                    if (n >= e) return "Excess padding";
                    if (s << r - n & u) return "Non-zero padding"
                }
                return o
            }

            function h(t) {
                return o(t, 8, 5, !0)
            }

            function c(t) {
                const e = o(t, 5, 8, !1);
                if (Array.isArray(e)) return e
            }

            function a(t) {
                const e = o(t, 5, 8, !1);
                if (Array.isArray(e)) return e;
                throw new Error(e)
            }

            function f(t) {
                let e;

                function r(t, r) {
                    if (r = r || 90, t.length < 8) return t + " too short";
                    if (t.length > r) return "Exceeds length limit";
                    const i = t.toLowerCase(),
                        o = t.toUpperCase();
                    if (t !== i && t !== o) return "Mixed-case string " + t;
                    const h = (t = i).lastIndexOf("1");
                    if (-1 === h) return "No separator character for " + t;
                    if (0 === h) return "Missing prefix for " + t;
                    const c = t.slice(0, h),
                        a = t.slice(h + 1);
                    if (a.length < 6) return "Data too short";
                    let f = u(c);
                    if ("string" == typeof f) return f;
                    const p = [];
                    for (let t = 0; t < a.length; ++t) {
                        const e = a.charAt(t),
                            r = s[e];
                        if (void 0 === r) return "Unknown character " + e;
                        f = n(f) ^ r, t + 6 >= a.length || p.push(r)
                    }
                    return f !== e ? "Invalid checksum for " + t : {
                        prefix: c,
                        words: p
                    }
                }
                return e = "bech32" === t ? 1 : 734539939, {
                    decodeUnsafe: function(t, e) {
                        const i = r(t, e);
                        if ("object" == typeof i) return i
                    },
                    decode: function(t, e) {
                        const i = r(t, e);
                        if ("object" == typeof i) return i;
                        throw new Error(i)
                    },
                    encode: function(t, r, s) {
                        if (s = s || 90, t.length + 7 + r.length > s) throw new TypeError("Exceeds length limit");
                        let o = u(t = t.toLowerCase());
                        if ("string" == typeof o) throw new Error(o);
                        let h = t + "1";
                        for (let t = 0; t < r.length; ++t) {
                            const e = r[t];
                            if (e >> 5 != 0) throw new Error("Non 5-bit word");
                            o = n(o) ^ e, h += i.charAt(e)
                        }
                        for (let t = 0; t < 6; ++t) o = n(o);
                        o ^= e;
                        for (let t = 0; t < 6; ++t) {
                            h += i.charAt(o >> 5 * (5 - t) & 31)
                        }
                        return h
                    },
                    toWords: h,
                    fromWordsUnsafe: c,
                    fromWords: a
                }
            }
            e.bech32 = f("bech32"), e.bech32m = f("bech32m")
        },
        4072: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(1996),
                n = r(1122),
                u = r(134),
                o = r(135),
                h = r(182),
                c = r(243),
                a = function t(e) {
                    if (!(this instanceof t)) return new t(e);
                    e ? (this.initialize(), this.set(e)) : this.initialize()
                };
            a.SIGVERSION_BASE = 0, a.SIGVERSION_WITNESS_V0 = 1, a.SIGVERSION_TAPROOT = 2, a.SIGVERSION_TAPSCRIPT = 3, a.prototype.verifyWitnessProgram = function(t, e, r, i, u) {
                var h = new s,
                    c = [];
                if (0 !== t) return !(u & a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM) || (this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM", !1);
                if (32 === e.length) {
                    if (0 === r.length) return this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_WITNESS_EMPTY", !1;
                    var f = r[r.length - 1];
                    if (h = new s(f), o.sha256(f).toString("hex") !== e.toString("hex")) return this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_MISMATCH", !1;
                    c = r.slice(0, -1)
                } else {
                    if (20 !== e.length) return this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_WRONG_LENGTH", !1;
                    if (2 !== r.length) return this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_MISMATCH", !1;
                    h.add(n.OP_DUP), h.add(n.OP_HASH160), h.add(e), h.add(n.OP_EQUALVERIFY), h.add(n.OP_CHECKSIG), c = r
                }
                if (this.initialize(), this.set({
                        script: h,
                        stack: c,
                        sigversion: a.SIGVERSION_WITNESS_V0,
                        satoshis: i,
                        flags: u
                    }), !this.evaluate()) return !1;
                if (1 !== this.stack.length) return this.errstr = "SCRIPT_ERR_EVAL_FALSE", !1;
                var p = this.stack[this.stack.length - 1];
                return !!a.castToBool(p) || (this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK", !1)
            }, a.prototype.verify = function(t, e, n, u, o, h, c) {
                var f, p = r(660);
                if (i.isUndefined(n) && (n = new p), i.isUndefined(u) && (u = 0), i.isUndefined(o) && (o = 0), i.isUndefined(h) && (h = null), i.isUndefined(c) && (c = 0), this.set({
                        script: t,
                        tx: n,
                        nin: u,
                        sigversion: a.SIGVERSION_BASE,
                        satoshis: 0,
                        flags: o
                    }), 0 != (o & a.SCRIPT_VERIFY_SIGPUSHONLY) && !t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                if (!this.evaluate()) return !1;
                o & a.SCRIPT_VERIFY_P2SH && (f = this.stack.slice());
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
                if (!a.castToBool(d)) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK", !1;
                var l = !1;
                if (o & a.SCRIPT_VERIFY_WITNESS) {
                    var g = {};
                    if (e.isWitnessProgram(g)) {
                        if (l = !0, 0 !== t.toBuffer().length) return !1;
                        if (!this.verifyWitnessProgram(g.version, g.program, h, c, this.flags)) return !1
                    }
                }
                if (o & a.SCRIPT_VERIFY_P2SH && e.isScriptHashOut()) {
                    if (!t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                    if (0 === f.length) throw new Error("internal error - stack copy empty");
                    var S = f[f.length - 1],
                        I = s.fromBuffer(S);
                    if (f.pop(), this.initialize(), this.set({
                            script: I,
                            stack: f,
                            tx: n,
                            nin: u,
                            flags: o
                        }), !this.evaluate()) return !1;
                    if (0 === f.length) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_P2SH_STACK", !1;
                    if (!a.castToBool(f[f.length - 1])) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_P2SH_STACK", !1;
                    if (o & a.SCRIPT_VERIFY_WITNESS) {
                        var O = {};
                        if (I.isWitnessProgram(O)) {
                            l = !0;
                            var P = new s;
                            if (P.add(I.toBuffer()), t.toHex() !== P.toHex()) return this.errstr = "SCRIPT_ERR_WITNESS_MALLEATED_P2SH", !1;
                            if (!this.verifyWitnessProgram(O.version, O.program, h, c, this.flags)) return !1;
                            _ = [_[0]]
                        }
                    }
                }
                if (0 != (this.flags & a.SCRIPT_VERIFY_CLEANSTACK)) {
                    if (0 == (this.flags & a.SCRIPT_VERIFY_P2SH)) throw "flags & SCRIPT_VERIFY_P2SH";
                    if (1 != f.length) return this.errstr = "SCRIPT_ERR_CLEANSTACK", !1
                }
                return !(this.flags & a.SCRIPT_VERIFY_WITNESS && !l && h.length > 0) || (this.errstr = "SCRIPT_ERR_WITNESS_UNEXPECTED", !1)
            }, t.exports = a, a.prototype.initialize = function(t) {
                this.stack = [], this.altstack = [], this.pc = 0, this.satoshis = 0, this.sigversion = a.SIGVERSION_BASE, this.pbegincodehash = 0, this.nOpCount = 0, this.vfExec = [], this.errstr = "", this.flags = 0
            }, a.prototype.set = function(t) {
                this.script = t.script || this.script, this.tx = t.tx || this.tx, this.nin = void 0 !== t.nin ? t.nin : this.nin, this.stack = t.stack || this.stack, this.altstack = t.altack || this.altstack, this.pc = void 0 !== t.pc ? t.pc : this.pc, this.pbegincodehash = void 0 !== t.pbegincodehash ? t.pbegincodehash : this.pbegincodehash, this.sigversion = void 0 !== t.sigversion ? t.sigversion : this.sigversion, this.satoshis = void 0 !== t.satoshis ? t.satoshis : this.satoshis, this.nOpCount = void 0 !== t.nOpCount ? t.nOpCount : this.nOpCount, this.vfExec = t.vfExec || this.vfExec, this.errstr = t.errstr || this.errstr, this.flags = void 0 !== t.flags ? t.flags : this.flags
            }, a.true = Buffer.from([1]), a.false = Buffer.from([]), a.MAX_SCRIPT_ELEMENT_SIZE = 520, a.LOCKTIME_THRESHOLD_BN = new u(a.LOCKTIME_THRESHOLD = 5e8), a.SCRIPT_VERIFY_NONE = 0, a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM = 4096, a.SCRIPT_VERIFY_P2SH = 1, a.SCRIPT_VERIFY_STRICTENC = 2, a.SCRIPT_VERIFY_DERSIG = 4, a.SCRIPT_VERIFY_LOW_S = 8, a.SCRIPT_VERIFY_NULLDUMMY = 16, a.SCRIPT_VERIFY_SIGPUSHONLY = 32, a.SCRIPT_VERIFY_MINIMALDATA = 64, a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 128, a.SCRIPT_VERIFY_CLEANSTACK = 256, a.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY = 512, a.SCRIPT_VERIFY_WITNESS = 1024, a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 2048, a.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY = 1024, a.SCRIPT_VERIFY_MINIMALIF = 8192, a.SCRIPT_VERIFY_NULLFAIL = 16384, a.SCRIPT_VERIFY_WITNESS_PUBKEYTYPE = 32768, a.SCRIPT_ENABLE_SIGHASH_FORKID = 65536, a.SCRIPT_ENABLE_REPLAY_PROTECTION = 1 << 17, a.SCRIPT_ENABLE_MONOLITH_OPCODES = 1 << 18, a.SEQUENCE_LOCKTIME_DISABLE_FLAG = 1 << 31, a.SEQUENCE_LOCKTIME_TYPE_FLAG = 1 << 22, a.SEQUENCE_LOCKTIME_MASK = 65535, a.castToBool = function(t) {
                for (var e = 0; e < t.length; e++)
                    if (0 !== t[e]) return e !== t.length - 1 || 128 !== t[e];
                return !1
            }, a.prototype.checkSignatureEncoding = function(t) {
                if (0 == t.length) return !0;
                if (0 != (this.flags & (a.SCRIPT_VERIFY_DERSIG | a.SCRIPT_VERIFY_LOW_S | a.SCRIPT_VERIFY_STRICTENC)) && !h.isTxDER(t)) return this.errstr = "SCRIPT_ERR_SIG_DER_INVALID_FORMAT", !1;
                if (0 != (this.flags & a.SCRIPT_VERIFY_LOW_S)) {
                    if (!h.fromTxFormat(t).hasLowS()) return this.errstr = "SCRIPT_ERR_SIG_DER_HIGH_S", !1
                } else if (0 != (this.flags & a.SCRIPT_VERIFY_STRICTENC) && !h.fromTxFormat(t).hasDefinedHashtype()) return this.errstr = "SCRIPT_ERR_SIG_HASHTYPE", !1;
                return !0
            }, a.prototype.checkPubkeyEncoding = function(t) {
                return 0 == (this.flags & a.SCRIPT_VERIFY_STRICTENC) || c.isValid(t) ? !(0 != (this.flags & a.SCRIPT_VERIFY_WITNESS_PUBKEYTYPE) && this.sigversion == a.SIGVERSION_WITNESS_V0 && !c.fromBuffer(t).compressed) || (this.errstr = "SCRIPT_ERR_WITNESS_PUBKEYTYPE", !1) : (this.errstr = "SCRIPT_ERR_PUBKEYTYPE", !1)
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
            }, a.prototype.checkSequence = function(t) {
                var e = this.tx.inputs[this.nin].sequenceNumber;
                if (this.tx.version < 2) return !1;
                if (e & SEQUENCE_LOCKTIME_DISABLE_FLAG) return !1;
                var r = a.SEQUENCE_LOCKTIME_TYPE_FLAG | a.SEQUENCE_LOCKTIME_MASK,
                    i = new u(e & r),
                    s = t.and(r),
                    n = new u(a.SEQUENCE_LOCKTIME_TYPE_FLAG);
                return !!(i.lt(n) && s.lt(n) || i.gte(n) && s.gte(n)) && !s.gt(i)
            }, a.prototype.step = function() {
                var t, e, r, f, p, _, d, l, g, S, I, O, P, E, m, y, T, A = 0 != (this.flags & a.SCRIPT_VERIFY_MINIMALDATA),
                    R = -1 === this.vfExec.indexOf(!1),
                    k = this.script.chunks[this.pc];
                this.pc++;
                var b = k.opcodenum;
                if (i.isUndefined(b)) return this.errstr = "SCRIPT_ERR_UNDEFINED_OPCODE", !1;
                if (k.buf && k.buf.length > a.MAX_SCRIPT_ELEMENT_SIZE) return this.errstr = "SCRIPT_ERR_PUSH_SIZE", !1;
                if (b > n.OP_16 && ++this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                if (b === n.OP_CAT || b === n.OP_SUBSTR || b === n.OP_LEFT || b === n.OP_RIGHT || b === n.OP_INVERT || b === n.OP_AND || b === n.OP_OR || b === n.OP_XOR || b === n.OP_2MUL || b === n.OP_2DIV || b === n.OP_MUL || b === n.OP_DIV || b === n.OP_MOD || b === n.OP_LSHIFT || b === n.OP_RSHIFT) return this.errstr = "SCRIPT_ERR_DISABLED_OPCODE", !1;
                if (R && 0 <= b && b <= n.OP_PUSHDATA4) {
                    if (A && !this.script.checkMinimalPush(this.pc - 1)) return this.errstr = "SCRIPT_ERR_MINIMALDATA", !1;
                    if (k.buf) {
                        if (k.len !== k.buf.length) throw new Error("Length of push value not equal to length of data");
                        this.stack.push(k.buf)
                    } else this.stack.push(a.false)
                } else if (R || n.OP_IF <= b && b <= n.OP_ENDIF) switch (b) {
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
                        p = b - (n.OP_1 - 1), t = new u(p).toScriptNumBuffer(), this.stack.push(t);
                        break;
                    case n.OP_NOP:
                        break;
                    case n.OP_NOP2:
                    case n.OP_CHECKLOCKTIMEVERIFY:
                        if (!(this.flags & a.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY)) {
                            if (this.flags & a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                            break
                        }
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var N = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], A, 5);
                        if (N.lt(new u(0))) return this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME", !1;
                        if (!this.checkLockTime(N)) return this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME", !1;
                        break;
                    case n.OP_NOP3:
                    case n.OP_CHECKSEQUENCEVERIFY:
                        if (!(this.flags & a.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY)) {
                            if (this.flags & a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                            break
                        }
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var v = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], A, 5);
                        if (v.lt(new u(0))) return this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME", !1;
                        if (0 != (v & a.SEQUENCE_LOCKTIME_DISABLE_FLAG)) break;
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
                        if (this.flags & a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                        break;
                    case n.OP_IF:
                    case n.OP_NOTIF:
                        if (y = !1, R) {
                            if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                            if (t = this.stack[this.stack.length - 1], this.flags & a.SCRIPT_VERIFY_MINIMALIF) {
                                if ((t = this.stack[this.stack.length - 1]).length > 1) return this.errstr = "SCRIPT_ERR_MINIMALIF", !1;
                                if (1 == t.length && 1 != t[0]) return this.errstr = "SCRIPT_ERR_MINIMALIF", !1
                            }
                            y = a.castToBool(t), b === n.OP_NOTIF && (y = !y), this.stack.pop()
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
                        if (t = this.stack[this.stack.length - 1], !(y = a.castToBool(t))) return this.errstr = "SCRIPT_ERR_VERIFY", !1;
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
                        var w = this.stack[this.stack.length - 1];
                        this.stack.push(e), this.stack.push(r), this.stack.push(w);
                        break;
                    case n.OP_2OVER:
                        if (this.stack.length < 4) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 4], r = this.stack[this.stack.length - 3], this.stack.push(e), this.stack.push(r);
                        break;
                    case n.OP_2ROT:
                        if (this.stack.length < 6) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        f = this.stack.splice(this.stack.length - 6, 2), this.stack.push(f[0]), this.stack.push(f[1]);
                        break;
                    case n.OP_2SWAP:
                        if (this.stack.length < 4) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        f = this.stack.splice(this.stack.length - 4, 2), this.stack.push(f[0]), this.stack.push(f[1]);
                        break;
                    case n.OP_IFDUP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        t = this.stack[this.stack.length - 1], (y = a.castToBool(t)) && this.stack.push(t);
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
                        if (t = this.stack[this.stack.length - 1], p = (l = u.fromScriptNumBuffer(t, A)).toNumber(), this.stack.pop(), p < 0 || p >= this.stack.length) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        t = this.stack[this.stack.length - p - 1], b === n.OP_ROLL && this.stack.splice(this.stack.length - p - 1, 1), this.stack.push(t);
                        break;
                    case n.OP_ROT:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = this.stack[this.stack.length - 3], d = this.stack[this.stack.length - 2];
                        var C = this.stack[this.stack.length - 1];
                        this.stack[this.stack.length - 3] = d, this.stack[this.stack.length - 2] = C, this.stack[this.stack.length - 1] = _;
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
                        l = new u(this.stack[this.stack.length - 1].length), this.stack.push(l.toScriptNumBuffer());
                        break;
                    case n.OP_EQUAL:
                    case n.OP_EQUALVERIFY:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 2], r = this.stack[this.stack.length - 1];
                        var B = e.toString("hex") === r.toString("hex");
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(B ? a.true : a.false), b === n.OP_EQUALVERIFY) {
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
                        switch (t = this.stack[this.stack.length - 1], l = u.fromScriptNumBuffer(t, A), b) {
                            case n.OP_1ADD:
                                l = l.add(u.One);
                                break;
                            case n.OP_1SUB:
                                l = l.sub(u.One);
                                break;
                            case n.OP_NEGATE:
                                l = l.neg();
                                break;
                            case n.OP_ABS:
                                l.cmp(u.Zero) < 0 && (l = l.neg());
                                break;
                            case n.OP_NOT:
                                l = new u((0 === l.cmp(u.Zero)) + 0);
                                break;
                            case n.OP_0NOTEQUAL:
                                l = new u((0 !== l.cmp(u.Zero)) + 0)
                        }
                        this.stack.pop(), this.stack.push(l.toScriptNumBuffer());
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
                        switch (g = u.fromScriptNumBuffer(this.stack[this.stack.length - 2], A), S = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], A), l = new u(0), b) {
                            case n.OP_ADD:
                                l = g.add(S);
                                break;
                            case n.OP_SUB:
                                l = g.sub(S);
                                break;
                            case n.OP_BOOLAND:
                                l = new u((0 !== g.cmp(u.Zero) && 0 !== S.cmp(u.Zero)) + 0);
                                break;
                            case n.OP_BOOLOR:
                                l = new u((0 !== g.cmp(u.Zero) || 0 !== S.cmp(u.Zero)) + 0);
                                break;
                            case n.OP_NUMEQUAL:
                            case n.OP_NUMEQUALVERIFY:
                                l = new u((0 === g.cmp(S)) + 0);
                                break;
                            case n.OP_NUMNOTEQUAL:
                                l = new u((0 !== g.cmp(S)) + 0);
                                break;
                            case n.OP_LESSTHAN:
                                l = new u((g.cmp(S) < 0) + 0);
                                break;
                            case n.OP_GREATERTHAN:
                                l = new u((g.cmp(S) > 0) + 0);
                                break;
                            case n.OP_LESSTHANOREQUAL:
                                l = new u((g.cmp(S) <= 0) + 0);
                                break;
                            case n.OP_GREATERTHANOREQUAL:
                                l = new u((g.cmp(S) >= 0) + 0);
                                break;
                            case n.OP_MIN:
                                l = g.cmp(S) < 0 ? g : S;
                                break;
                            case n.OP_MAX:
                                l = g.cmp(S) > 0 ? g : S
                        }
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(l.toScriptNumBuffer()), b === n.OP_NUMEQUALVERIFY) {
                            if (!a.castToBool(this.stack[this.stack.length - 1])) return this.errstr = "SCRIPT_ERR_NUMEQUALVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case n.OP_WITHIN:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        g = u.fromScriptNumBuffer(this.stack[this.stack.length - 3], A), S = u.fromScriptNumBuffer(this.stack[this.stack.length - 2], A);
                        var U = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], A);
                        y = S.cmp(g) <= 0 && g.cmp(U) < 0, this.stack.pop(), this.stack.pop(), this.stack.pop(), this.stack.push(y ? a.true : a.false);
                        break;
                    case n.OP_RIPEMD160:
                    case n.OP_SHA1:
                    case n.OP_SHA256:
                    case n.OP_HASH160:
                    case n.OP_HASH256:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var x;
                        t = this.stack[this.stack.length - 1], b === n.OP_RIPEMD160 ? x = o.ripemd160(t) : b === n.OP_SHA1 ? x = o.sha1(t) : b === n.OP_SHA256 ? x = o.sha256(t) : b === n.OP_HASH160 ? x = o.sha256ripemd160(t) : b === n.OP_HASH256 && (x = o.sha256sha256(t)), this.stack.pop(), this.stack.push(x);
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
                        var L = (new s).add(I);
                        P.findAndDelete(L);
                        try {
                            E = h.fromTxFormat(I), m = c.fromBuffer(O, !1), T = this.tx.verifySignature(E, m, this.nin, P, this.sigversion, this.satoshis)
                        } catch (t) {
                            T = !1
                        }
                        if (!T && this.flags & a.SCRIPT_VERIFY_NULLFAIL && I.length) return this.errstr = "SCRIPT_ERR_NULLFAIL", !1;
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(T ? a.true : a.false), b === n.OP_CHECKSIGVERIFY) {
                            if (!T) return this.errstr = "SCRIPT_ERR_CHECKSIGVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case n.OP_CHECKMULTISIG:
                    case n.OP_CHECKMULTISIGVERIFY:
                        var H = 1;
                        if (this.stack.length < H) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var K = u.fromScriptNumBuffer(this.stack[this.stack.length - H], A).toNumber();
                        if (K < 0 || K > 20) return this.errstr = "SCRIPT_ERR_PUBKEY_COUNT", !1;
                        if (this.nOpCount += K, this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                        var D = ++H;
                        H += K;
                        var M = K + 2;
                        if (this.stack.length < H) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var F = u.fromScriptNumBuffer(this.stack[this.stack.length - H], A).toNumber();
                        if (F < 0 || F > K) return this.errstr = "SCRIPT_ERR_SIG_COUNT", !1;
                        var V = ++H;
                        if (H += F, this.stack.length < H) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        P = (new s).set({
                            chunks: this.script.chunks.slice(this.pbegincodehash)
                        });
                        for (var G = 0; G < F; G++) I = this.stack[this.stack.length - V - G], P.findAndDelete((new s).add(I));
                        for (T = !0; T && F > 0;) {
                            if (I = this.stack[this.stack.length - V], O = this.stack[this.stack.length - D], !this.checkSignatureEncoding(I) || !this.checkPubkeyEncoding(O)) return !1;
                            var Y;
                            try {
                                E = h.fromTxFormat(I), m = c.fromBuffer(O, !1), Y = this.tx.verifySignature(E, m, this.nin, P, this.sigversion, this.satoshis)
                            } catch (t) {
                                Y = !1
                            }
                            Y && (V++, F--), D++, F > --K && (T = !1)
                        }
                        for (; H-- > 1;) {
                            if (!T && this.flags & a.SCRIPT_VERIFY_NULLFAIL && !M && this.stack[this.stack.length - 1].length) return this.errstr = "SCRIPT_ERR_NULLFAIL", !1;
                            M > 0 && M--, this.stack.pop()
                        }
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (this.flags & a.SCRIPT_VERIFY_NULLDUMMY && this.stack[this.stack.length - 1].length) return this.errstr = "SCRIPT_ERR_SIG_NULLDUMMY", !1;
                        if (this.stack.pop(), this.stack.push(T ? a.true : a.false), b === n.OP_CHECKMULTISIGVERIFY) {
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
        4079: function(t, e, r) {
            "use strict";
            var i = r(521),
                s = r(70),
                n = (r(87), r(520)),
                u = r(270),
                o = r(294),
                h = r(183),
                c = r(182),
                a = r(522);

            function f() {
                n.apply(this, arguments)
            }
            i(f, n), f.prototype.getSignatures = function(t, e, r, i, n, h) {
                s.checkState(this.output instanceof u), i = i || c.SIGHASH_ALL;
                var f = e.toPublicKey();
                return f.toString() === this.output.script.getPublicKey().toString("hex") ? [new a({
                    publicKey: f,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: r,
                    signature: o.sign(t, e, i, r, this.output.script, h),
                    sigtype: i
                })] : []
            }, f.prototype.addSignature = function(t, e, r) {
                return s.checkState(this.isValidSignature(t, e, r), "Signature is invalid"), this.setScript(h.buildPublicKeyIn(e.signature.toDER(), e.sigtype)), this
            }, f.prototype.clearSignatures = function() {
                return this.setScript(h.empty()), this
            }, f.prototype.isFullySigned = function() {
                return this.script.isPublicKeyIn()
            }, f.SCRIPT_MAX_SIZE = 73, f.prototype._estimateSize = function() {
                return f.SCRIPT_MAX_SIZE
            }, t.exports = f
        },
        4080: function(t, e, r) {
            "use strict";
            var i = r(521),
                s = r(70),
                n = r(87),
                u = (r(244), r(135)),
                o = r(520),
                h = r(270),
                c = r(294),
                a = r(663),
                f = r(167),
                p = (n = r(87), r(183)),
                _ = r(182),
                d = r(522);

            function l() {
                o.apply(this, arguments)
            }
            i(l, o), l.prototype.getRedeemScript = function(t) {
                if (!this.redeemScript) {
                    var e = p.buildWitnessV0Out(t);
                    if (p.buildScriptHashOut(e).equals(this.output.script)) {
                        var r = new p;
                        r.add(e.toBuffer()), this.setScript(r), this.redeemScript = e
                    }
                }
                return this.redeemScript
            }, l.prototype.getScriptCode = function(t) {
                var e, r = new f;
                e = this.output.script.isScriptHashOut() ? this.getRedeemScript(t) : this.output.script;
                var i = p.buildPublicKeyHashOut(e.toAddress()).toBuffer();
                return r.writeVarintNum(i.length), r.write(i), r.toBuffer()
            }, l.prototype.getSighash = function(t, e, r, i) {
                var s = this.getScriptCode(e),
                    n = this.getSatoshisBuffer();
                return a.sighash(t, i, r, s, n)
            }, l.prototype.getSignatures = function(t, e, r, i, o, f) {
                var p;
                if (s.checkState(this.output instanceof h), o = o || u.sha256ripemd160(e.publicKey.toBuffer()), i = i || _.SIGHASH_ALL, f = f || "ecdsa", (p = this.output.script.isScriptHashOut() ? this.getRedeemScript(e.publicKey) : this.output.script) && n.equals(o, p.getPublicKeyHash())) {
                    var l;
                    if (p.isWitnessPublicKeyHashOut()) {
                        var g = this.getSatoshisBuffer(),
                            S = this.getScriptCode(e.publicKey);
                        l = a.sign(t, e, i, r, S, g, f)
                    } else l = c.sign(t, e, i, r, this.output.script, f);
                    return [new d({
                        publicKey: e.publicKey,
                        prevTxId: this.prevTxId,
                        outputIndex: this.outputIndex,
                        inputIndex: r,
                        signature: l,
                        sigtype: i
                    })]
                }
                return []
            }, l.prototype.addSignature = function(t, e, r) {
                return s.checkState(this.isValidSignature(t, e, r), "Signature is invalid"), this.output.script.isWitnessPublicKeyHashOut() || this.output.script.isScriptHashOut() ? this.setWitnesses([n.concat([e.signature.toDER(), n.integerAsSingleByteBuffer(e.sigtype)]), e.publicKey.toBuffer()]) : this.setScript(p.buildPublicKeyHashIn(e.publicKey, e.signature.toDER(), e.sigtype)), this
            }, l.prototype.clearSignatures = function() {
                return this.setScript(p.empty()), this.setWitnesses([]), this
            }, l.prototype.isFullySigned = function() {
                return this.script.isPublicKeyHashIn() || this.hasWitnesses()
            }, l.prototype.isValidSignature = function(t, e, r) {
                if (e.signature.nhashtype = e.sigtype, this.output.script.isWitnessPublicKeyHashOut() || this.output.script.isScriptHashOut()) {
                    var i = this.getScriptCode(),
                        s = this.getSatoshisBuffer();
                    return a.verify(t, e.signature, e.publicKey, e.inputIndex, i, s, r)
                }
                return c.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script, r)
            }, l.SCRIPT_MAX_SIZE = 107, l.REDEEM_SCRIPT_SIZE = 22, l.prototype._estimateSize = function() {
                const t = l.SCRIPT_MAX_SIZE / 4;
                return this.output.script.isWitnessPublicKeyHashOut() ? t : this.output.script.isScriptHashOut() ? t + l.REDEEM_SCRIPT_SIZE : l.SCRIPT_MAX_SIZE
            }, t.exports = l
        },
        4081: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(521),
                n = (r(1123), r(520)),
                u = r(270),
                o = r(70),
                h = r(183),
                c = r(182),
                a = r(294),
                f = (r(243), r(87)),
                p = r(522);

            function _(t, e, r, s, u) {
                u = u || {}, n.apply(this, arguments);
                var c = this;
                e = e || t.publicKeys, r = r || t.threshold, s = s || t.signatures, u.noSorting ? this.publicKeys = e : this.publicKeys = i.sortBy(e, (function(t) {
                    return t.toString("hex")
                })), o.checkState(h.buildMultisigOut(this.publicKeys, r).equals(this.output.script), "Provided public keys don't match to the provided output script"), this.publicKeyIndex = {}, i.each(this.publicKeys, (function(t, e) {
                    c.publicKeyIndex[t.toString()] = e
                })), this.threshold = r, this.signatures = s ? this._deserializeSignatures(s) : new Array(this.publicKeys.length)
            }
            s(_, n), _.prototype.toObject = function() {
                var t = n.prototype.toObject.apply(this, arguments);
                return t.threshold = this.threshold, t.publicKeys = i.map(this.publicKeys, (function(t) {
                    return t.toString()
                })), t.signatures = this._serializeSignatures(), t
            }, _.prototype._deserializeSignatures = function(t) {
                return i.map(t, (function(t) {
                    if (t) return new p(t)
                }))
            }, _.prototype._serializeSignatures = function() {
                return i.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, _.prototype.getSignatures = function(t, e, r, s, n, h) {
                o.checkState(this.output instanceof u), s = s || c.SIGHASH_ALL, h = h || "ecdsa";
                var f = this,
                    _ = [];
                return i.each(this.publicKeys, (function(i) {
                    i.toString() === e.publicKey.toString() && _.push(new p({
                        publicKey: e.publicKey,
                        prevTxId: f.prevTxId,
                        outputIndex: f.outputIndex,
                        inputIndex: r,
                        signature: a.sign(t, e, s, r, f.output.script, h),
                        sigtype: s
                    }))
                })), _
            }, _.prototype.addSignature = function(t, e, r) {
                return o.checkState(!this.isFullySigned(), "All needed signatures have already been added"), o.checkArgument(!i.isUndefined(this.publicKeyIndex[e.publicKey.toString()], "Signature Undefined"), "Signature has no matching public key"), o.checkState(this.isValidSignature(t, e, r), "Invalid Signature"), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this._updateScript(), this
            }, _.prototype._updateScript = function() {
                return this.setScript(h.buildMultisigIn(this.publicKeys, this.threshold, this._createSignatures())), this
            }, _.prototype._createSignatures = function() {
                return i.map(i.filter(this.signatures, (function(t) {
                    return !i.isUndefined(t)
                })), (function(t) {
                    return f.concat([t.signature.toDER(), f.integerAsSingleByteBuffer(t.sigtype)])
                }))
            }, _.prototype.clearSignatures = function() {
                this.signatures = new Array(this.publicKeys.length), this._updateScript()
            }, _.prototype.isFullySigned = function() {
                return this.countSignatures() === this.threshold
            }, _.prototype.countMissingSignatures = function() {
                return this.threshold - this.countSignatures()
            }, _.prototype.countSignatures = function() {
                return i.reduce(this.signatures, (function(t, e) {
                    return t + !!e
                }), 0)
            }, _.prototype.publicKeysWithoutSignature = function() {
                var t = this;
                return i.filter(this.publicKeys, (function(e) {
                    return !t.signatures[t.publicKeyIndex[e.toString()]]
                }))
            }, _.prototype.isValidSignature = function(t, e, r) {
                return e.signature.nhashtype = e.sigtype, a.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script, r)
            }, _.normalizeSignatures = function(t, e, r, i, s, n) {
                return s.map((function(s) {
                    var u = null;
                    return i = i.filter((function(i) {
                        if (u) return !0;
                        var o = new p({
                            signature: c.fromTxFormat(i),
                            publicKey: s,
                            prevTxId: e.prevTxId,
                            outputIndex: e.outputIndex,
                            inputIndex: r,
                            sigtype: c.SIGHASH_ALL
                        });
                        return o.signature.nhashtype = o.sigtype, !a.verify(t, o.signature, o.publicKey, o.inputIndex, e.output.script, n) || (u = o, !1)
                    })), u || null
                }))
            }, _.OPCODES_SIZE = 1, _.SIGNATURE_SIZE = 73, _.prototype._estimateSize = function() {
                return _.OPCODES_SIZE + this.threshold * _.SIGNATURE_SIZE
            }, t.exports = _
        },
        4082: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(521),
                n = r(520),
                u = r(270),
                o = r(70),
                h = r(244),
                c = r(183),
                a = r(182),
                f = r(294),
                p = r(663),
                _ = r(167),
                d = r(87),
                l = r(522);

            function g(t, e, r, s, u) {
                u = u || {}, n.apply(this, arguments);
                var o = this;
                e = e || t.publicKeys, r = r || t.threshold, s = s || t.signatures, u.noSorting ? this.publicKeys = e : this.publicKeys = i.sortBy(e, (function(t) {
                    return t.toString("hex")
                })), this.redeemScript = c.buildMultisigOut(this.publicKeys, r, u);
                var a = c.buildWitnessMultisigOutFromScript(this.redeemScript);
                if (a.equals(this.output.script)) this.nestedWitness = !1, this.type = h.PayToWitnessScriptHash;
                else if (c.buildScriptHashOut(a).equals(this.output.script)) this.nestedWitness = !0, this.type = h.PayToScriptHash;
                else {
                    if (!c.buildScriptHashOut(this.redeemScript).equals(this.output.script)) throw new Error("Provided public keys don't hash to the provided output");
                    this.nestedWitness = !1, this.type = h.PayToScriptHash
                }
                if (this.nestedWitness) {
                    var f = new c;
                    f.add(a.toBuffer()), this.setScript(f)
                }
                this.publicKeyIndex = {}, i.each(this.publicKeys, (function(t, e) {
                    o.publicKeyIndex[t.toString()] = e
                })), this.threshold = r, this.signatures = s ? this._deserializeSignatures(s) : new Array(this.publicKeys.length)
            }
            s(g, n), g.prototype.toObject = function() {
                var t = n.prototype.toObject.apply(this, arguments);
                return t.threshold = this.threshold, t.publicKeys = i.map(this.publicKeys, (function(t) {
                    return t.toString()
                })), t.signatures = this._serializeSignatures(), t
            }, g.prototype._deserializeSignatures = function(t) {
                return i.map(t, (function(t) {
                    if (t) return new l(t)
                }))
            }, g.prototype._serializeSignatures = function() {
                return i.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, g.prototype.getScriptCode = function() {
                var t = new _;
                if (this.redeemScript.hasCodeseparators()) throw new Error("@TODO");
                var e = this.redeemScript.toBuffer();
                return t.writeVarintNum(e.length), t.write(e), t.toBuffer()
            }, g.prototype.getSighash = function(t, e, r, i) {
                var s;
                if (this.nestedWitness || this.type === h.PayToWitnessScriptHash) {
                    var n = this.getScriptCode(),
                        u = this.getSatoshisBuffer();
                    s = p.sighash(t, i, r, n, u)
                } else s = f.sighash(t, i, r, this.redeemScript);
                return s
            }, g.prototype.getSignatures = function(t, e, r, s, n, c) {
                o.checkState(this.output instanceof u), s = s || a.SIGHASH_ALL, c = c || "ecdsa";
                var _ = this,
                    d = [];
                return i.each(this.publicKeys, (function(i) {
                    if (i.toString() === e.publicKey.toString()) {
                        var n;
                        if (_.nestedWitness || _.type === h.PayToWitnessScriptHash) {
                            var u = _.getScriptCode(),
                                o = _.getSatoshisBuffer();
                            n = p.sign(t, e, s, r, u, o, c)
                        } else n = f.sign(t, e, s, r, _.redeemScript, c);
                        d.push(new l({
                            publicKey: e.publicKey,
                            prevTxId: _.prevTxId,
                            outputIndex: _.outputIndex,
                            inputIndex: r,
                            signature: n,
                            sigtype: s
                        }))
                    }
                })), d
            }, g.prototype.addSignature = function(t, e, r) {
                return o.checkState(!this.isFullySigned(), "All needed signatures have already been added"), o.checkArgument(!i.isUndefined(this.publicKeyIndex[e.publicKey.toString()]), "Signature has no matching public key"), o.checkState(this.isValidSignature(t, e, r), "Invalid Signature!"), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this._updateScript(), this
            }, g.prototype._updateScript = function() {
                if (this.nestedWitness || this.type === h.PayToWitnessScriptHash) {
                    for (var t = [Buffer.alloc(0)], e = this._createSignatures(), r = 0; r < e.length; r++) t.push(e[r]);
                    t.push(this.redeemScript.toBuffer()), this.setWitnesses(t)
                } else {
                    var i = c.buildP2SHMultisigIn(this.publicKeys, this.threshold, this._createSignatures(), {
                        cachedMultisig: this.redeemScript
                    });
                    this.setScript(i)
                }
                return this
            }, g.prototype._createSignatures = function() {
                return i.map(i.filter(this.signatures, (function(t) {
                    return !i.isUndefined(t)
                })), (function(t) {
                    return d.concat([t.signature.toDER(), d.integerAsSingleByteBuffer(t.sigtype)])
                }))
            }, g.prototype.clearSignatures = function() {
                this.signatures = new Array(this.publicKeys.length), this._updateScript()
            }, g.prototype.isFullySigned = function() {
                return this.countSignatures() === this.threshold
            }, g.prototype.countMissingSignatures = function() {
                return this.threshold - this.countSignatures()
            }, g.prototype.countSignatures = function() {
                return i.reduce(this.signatures, (function(t, e) {
                    return t + !!e
                }), 0)
            }, g.prototype.publicKeysWithoutSignature = function() {
                var t = this;
                return i.filter(this.publicKeys, (function(e) {
                    return !t.signatures[t.publicKeyIndex[e.toString()]]
                }))
            }, g.prototype.isValidSignature = function(t, e, r) {
                if (r = r || "ecdsa", this.nestedWitness || this.type === h.PayToWitnessScriptHash) {
                    e.signature.nhashtype = e.sigtype;
                    var i = this.getScriptCode(),
                        s = this.getSatoshisBuffer();
                    return p.verify(t, e.signature, e.publicKey, e.inputIndex, i, s, r)
                }
                return e.signature.nhashtype = e.sigtype, f.verify(t, e.signature, e.publicKey, e.inputIndex, this.redeemScript, r)
            }, g.OPCODES_SIZE = 7, g.SIGNATURE_SIZE = 74, g.PUBKEY_SIZE = 34, g.REDEEM_SCRIPT_SIZE = 34, g.prototype._estimateSize = function() {
                var t = g.OPCODES_SIZE + this.threshold * g.SIGNATURE_SIZE + this.publicKeys.length * g.PUBKEY_SIZE;
                return this.type === h.PayToWitnessScriptHash ? t / 4 : this.nestedWitness ? t / 4 + g.REDEEM_SCRIPT_SIZE : t
            }, t.exports = g
        },
        4087: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(102),
                n = r(244),
                u = r(1125),
                o = function(t, e) {
                    if (!(this instanceof o)) return new o(t, e);
                    if (this.extras = {}, this.knownParams = e || [], this.address = this.network = this.amount = this.message = null, "string" == typeof t) {
                        var r = o.parse(t);
                        r.amount && (r.amount = this._parseAmount(r.amount)), this._fromObject(r)
                    } else {
                        if ("object" != typeof t) throw new TypeError("Unrecognized data format.");
                        this._fromObject(t)
                    }
                };
            o.fromString = function(t) {
                if ("string" != typeof t) throw new TypeError("Expected a string");
                return new o(t)
            }, o.fromObject = function(t) {
                return new o(t)
            }, o.isValid = function(t, e) {
                try {
                    new o(t, e)
                } catch (t) {
                    return !1
                }
                return !0
            }, o.parse = function(t) {
                var e = s.parse(t, !0);
                if ("bitcoin:" !== e.protocol) throw new TypeError("Invalid bitcoin URI");
                var r = /[^:]*:\/?\/?([^?]*)/.exec(t);
                return e.query.address = r && r[1] || void 0, e.query
            }, o.Members = ["address", "amount", "message", "label", "r"], o.prototype._fromObject = function(t) {
                if (!n.isValid(t.address)) throw new TypeError("Invalid bitcoin address");
                for (var e in this.address = new n(t.address), this.network = this.address.network, this.amount = t.amount, t)
                    if ("address" !== e && "amount" !== e) {
                        if (/^req-/.exec(e) && -1 === this.knownParams.indexOf(e)) throw Error("Unknown required argument " + e);
                        (o.Members.indexOf(e) > -1 ? this : this.extras)[e] = t[e]
                    }
            }, o.prototype._parseAmount = function(t) {
                if (t = Number(t), isNaN(t)) throw new TypeError("Invalid amount");
                return u.fromBTC(t).toSatoshis()
            }, o.prototype.toObject = o.prototype.toJSON = function() {
                for (var t = {}, e = 0; e < o.Members.length; e++) {
                    var r = o.Members[e];
                    this.hasOwnProperty(r) && void 0 !== this[r] && (t[r] = this[r].toString())
                }
                return i.extend(t, this.extras), t
            }, o.prototype.toString = function() {
                var t = {};
                return this.amount && (t.amount = u.fromSatoshis(this.amount).toBTC()), this.message && (t.message = this.message), this.label && (t.label = this.label), this.r && (t.r = this.r), i.extend(t, this.extras), s.format({
                    protocol: "bitcoin:",
                    host: this.address,
                    query: t
                })
            }, o.prototype.inspect = function() {
                return "<URI: " + this.toString() + ">"
            }, t.exports = o
        },
        517: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(244),
                n = r(518),
                u = r(134),
                o = r(112),
                h = r(352),
                Point = r(430),
                c = r(243),
                a = r(664),
                f = r(70);

            function p(t, e) {
                if (!(this instanceof p)) return new p(t, e);
                if (t instanceof p) return t;
                var r = this._classifyArguments(t, e);
                if (!r.bn || 0 === r.bn.cmp(new u(0))) throw new TypeError("Number can not be equal to zero, undefined, null or false");
                if (!r.bn.lt(Point.getN())) throw new TypeError("Number must be less than N");
                if (void 0 === r.network) throw new TypeError('Must specify the network ("livenet" or "testnet")');
                return o.defineImmutable(this, {
                    bn: r.bn,
                    compressed: r.compressed,
                    network: r.network
                }), Object.defineProperty(this, "publicKey", {
                    configurable: !1,
                    enumerable: !0,
                    get: this.toPublicKey.bind(this)
                }), this
            }
            p.prototype._classifyArguments = function(t, e) {
                var r = {
                    compressed: !0,
                    network: e ? h.get(e) : h.defaultNetwork
                };
                if (i.isUndefined(t) || i.isNull(t)) r.bn = p._getRandomBN();
                else if (t instanceof u) r.bn = t;
                else if (t instanceof Buffer || t instanceof Uint8Array) r = p._transformBuffer(t, e);
                else if (t.bn && t.network) r = p._transformObject(t);
                else if (!e && h.get(t)) r.bn = p._getRandomBN(), r.network = h.get(t);
                else {
                    if ("string" != typeof t) throw new TypeError("First argument is an unrecognized data type.");
                    o.isHexa(t) ? r.bn = new u(Buffer.from(t, "hex")) : r = p._transformWIF(t, e)
                }
                return r
            }, p._getRandomBN = function() {
                var t, e;
                do {
                    var r = a.getRandomBuffer(32);
                    t = (e = u.fromBuffer(r)).lt(Point.getN())
                } while (!t);
                return e
            }, p._transformBuffer = function(t, e) {
                var r = {};
                if (32 === t.length) return p._transformBNBuffer(t, e);
                if (r.network = h.get(t[0], "privatekey"), !r.network) throw new Error("Invalid network");
                if (e && r.network !== h.get(e)) throw new TypeError("Private key network mismatch");
                if (34 === t.length && 1 === t[33]) r.compressed = !0;
                else {
                    if (33 !== t.length) throw new Error("Length of buffer must be 33 (uncompressed) or 34 (compressed)");
                    r.compressed = !1
                }
                return r.bn = u.fromBuffer(t.slice(1, 33)), r
            }, p._transformBNBuffer = function(t, e) {
                var r = {};
                return r.network = h.get(e) || h.defaultNetwork, r.bn = u.fromBuffer(t), r.compressed = !1, r
            }, p._transformWIF = function(t, e) {
                return p._transformBuffer(n.decode(t), e)
            }, p.fromBuffer = function(t, e) {
                return new p(t, e)
            }, p._transformObject = function(t) {
                return {
                    bn: new u(t.bn, "hex"),
                    network: h.get(t.network),
                    compressed: t.compressed
                }
            }, p.fromString = p.fromWIF = function(t) {
                return f.checkArgument(i.isString(t), "First argument is expected to be a string."), new p(t)
            }, p.fromObject = function(t) {
                return f.checkArgument(i.isObject(t), "First argument is expected to be an object."), new p(t)
            }, p.fromRandom = function(t) {
                var e = p._getRandomBN();
                return new p(e, t)
            }, p.getValidationError = function(t, e) {
                var r;
                try {
                    new p(t, e)
                } catch (t) {
                    r = t
                }
                return r
            }, p.isValid = function(t, e) {
                return !!t && !p.getValidationError(t, e)
            }, p.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, p.prototype.toWIF = function() {
                var t, e = this.network;
                return t = this.compressed ? Buffer.concat([Buffer.from([e.privatekey]), this.bn.toBuffer({
                    size: 32
                }), Buffer.from([1])]) : Buffer.concat([Buffer.from([e.privatekey]), this.bn.toBuffer({
                    size: 32
                })]), n.encode(t)
            }, p.prototype.toBigNumber = function() {
                return this.bn
            }, p.prototype.toBuffer = function() {
                return this.bn.toBuffer({
                    size: 32
                })
            }, p.prototype.toBufferNoPadding = function() {
                return this.bn.toBuffer()
            }, p.prototype.toPublicKey = function() {
                return this._pubkey || (this._pubkey = c.fromPrivateKey(this)), this._pubkey
            }, p.prototype.toAddress = function(t, e) {
                var r = this.toPublicKey();
                return s.fromPublicKey(r, t || this.network, e)
            }, p.prototype.toObject = p.prototype.toJSON = function() {
                return {
                    bn: this.bn.toString("hex"),
                    compressed: this.compressed,
                    network: this.network.toString()
                }
            }, p.prototype.inspect = function() {
                var t = this.compressed ? "" : ", uncompressed";
                return "<PrivateKey: " + this.toString() + ", network: " + this.network + t + ">"
            }, t.exports = p
        },
        520: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(70);
            const n = r(202);
            var u = r(167),
                o = (r(12), r(87)),
                h = r(112),
                c = r(183),
                a = r(294),
                f = r(270);
            const p = Math.pow(2, 31),
                _ = Math.pow(2, 22),
                d = Math.pow(2, 16) - 1;

            function l(t) {
                return this instanceof l ? t ? this._fromObject(t) : void 0 : new l(t)
            }
            l.MAXINT = 4294967295, l.DEFAULT_SEQNUMBER = 4294967295, l.DEFAULT_LOCKTIME_SEQNUMBER = 4294967294, l.DEFAULT_RBF_SEQNUMBER = 4294967293, l.SEQUENCE_LOCKTIME_TYPE_FLAG = _, Object.defineProperty(l.prototype, "script", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this.isNull() ? null : (this._script || (this._script = new c(this._scriptBuffer), this._script._isInput = !0), this._script)
                }
            }), l.fromObject = function(t) {
                return s.checkArgument(i.isObject(t)), (new l)._fromObject(t)
            }, l.prototype._fromObject = function(t) {
                var e;
                if (e = i.isString(t.prevTxId) && h.isHexa(t.prevTxId) ? Buffer.from(t.prevTxId, "hex") : t.prevTxId, this.witnesses = [], this.output = t.output ? t.output instanceof f ? t.output : new f(t.output) : void 0, this.prevTxId = e || t.txidbuf, this.outputIndex = i.isUndefined(t.outputIndex) ? t.txoutnum : t.outputIndex, this.sequenceNumber = i.isUndefined(t.sequenceNumber) ? i.isUndefined(t.seqnum) ? 4294967295 : t.seqnum : t.sequenceNumber, i.isUndefined(t.script) && i.isUndefined(t.scriptBuffer)) throw new n.Transaction.Input.MissingScript;
                return this.setScript(t.scriptBuffer || t.script), this
            }, l.prototype.toObject = l.prototype.toJSON = function() {
                var t = {
                    prevTxId: this.prevTxId.toString("hex"),
                    outputIndex: this.outputIndex,
                    sequenceNumber: this.sequenceNumber,
                    script: this._scriptBuffer.toString("hex")
                };
                return this.script && (t.scriptString = this.script.toString()), this.output && (t.output = this.output.toObject()), t
            }, l.fromBufferReader = function(t) {
                var e = new l;
                return e.prevTxId = t.readReverse(32), e.outputIndex = t.readUInt32LE(), e._scriptBuffer = t.readVarLengthBuffer(), e.sequenceNumber = t.readUInt32LE(), e
            }, l.prototype.toBufferWriter = function(t) {
                t || (t = new u), t.writeReverse(this.prevTxId), t.writeUInt32LE(this.outputIndex);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t.writeUInt32LE(this.sequenceNumber), t
            }, l.prototype.setScript = function(t) {
                if (this._script = null, t instanceof c) this._script = t, this._script._isInput = !0, this._scriptBuffer = t.toBuffer();
                else if (h.isHexa(t)) this._scriptBuffer = Buffer.from(t, "hex");
                else if (i.isString(t)) this._script = new c(t), this._script._isInput = !0, this._scriptBuffer = this._script.toBuffer();
                else {
                    if (!o.isBuffer(t)) throw new TypeError("Invalid argument type: script");
                    this._scriptBuffer = Buffer.from(t)
                }
                return this
            }, l.prototype.getSignatures = function() {
                throw new n.AbstractMethodInvoked("Trying to sign unsupported output type (only P2PKH and P2SH multisig inputs are supported) for input: " + JSON.stringify(this))
            }, l.prototype.getSatoshisBuffer = function() {
                return s.checkState(this.output instanceof f), s.checkState(this.output._satoshisBN), (new u).writeUInt64LEBN(this.output._satoshisBN).toBuffer()
            }, l.prototype.isFullySigned = function() {
                throw new n.AbstractMethodInvoked("Input#isFullySigned")
            }, l.prototype.isFinal = function() {
                return this.sequenceNumber !== l.MAXINT
            }, l.prototype.addSignature = function() {
                throw new n.AbstractMethodInvoked("Input#addSignature")
            }, l.prototype.clearSignatures = function() {
                throw new n.AbstractMethodInvoked("Input#clearSignatures")
            }, l.prototype.hasWitnesses = function() {
                return !!(this.witnesses && this.witnesses.length > 0)
            }, l.prototype.getWitnesses = function() {
                return this.witnesses
            }, l.prototype.setWitnesses = function(t) {
                this.witnesses = t
            }, l.prototype.isValidSignature = function(t, e, r) {
                return r = r || "ecdsa", e.signature.nhashtype = e.sigtype, a.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script, r)
            }, l.prototype.isNull = function() {
                return "0000000000000000000000000000000000000000000000000000000000000000" === this.prevTxId.toString("hex") && 4294967295 === this.outputIndex
            }, l.prototype._estimateSize = function() {
                return this.toBufferWriter().toBuffer().length
            }, l.prototype.lockForSeconds = function(t) {
                if (s.checkArgument(i.isNumber(t)), t < 0 || t >= 33553920) throw new n.Transaction.Input.LockTimeRange;
                return t = parseInt(Math.floor(t / 512)), this.sequenceNumber = t | _, this
            }, l.prototype.lockUntilBlockHeight = function(t) {
                if (s.checkArgument(i.isNumber(t)), t < 0 || t >= d) throw new n.Transaction.Input.BlockHeightOutOfRange;
                return this.sequenceNumber = t, this
            }, l.prototype.getLockTime = function() {
                return this.sequenceNumber & p ? null : this.sequenceNumber & _ ? 512 * (65535 & this.sequenceNumber) : 65535 & this.sequenceNumber
            }, t.exports = l
        },
        521: function(t, e) {
            "function" == typeof Object.create ? t.exports = function(t, e) {
                t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : t.exports = function(t, e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
            }
        },
        522: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(70),
                n = r(521),
                u = r(87),
                o = r(112),
                h = r(243),
                c = r(202),
                a = r(182);

            function f(t) {
                if (!(this instanceof f)) return new f(t);
                if (t instanceof f) return t;
                if (i.isObject(t)) return this._fromObject(t);
                throw new c.InvalidArgument("TransactionSignatures must be instantiated from an object")
            }
            n(f, a), f.prototype._fromObject = function(t) {
                return this._checkObjectArgs(t), this.publicKey = new h(t.publicKey), this.prevTxId = u.isBuffer(t.prevTxId) ? t.prevTxId : Buffer.from(t.prevTxId, "hex"), this.outputIndex = t.outputIndex, this.inputIndex = t.inputIndex, this.signature = t.signature instanceof a ? t.signature : u.isBuffer(t.signature) ? a.fromBuffer(t.signature) : a.fromString(t.signature), this.sigtype = t.sigtype, this
            }, f.prototype._checkObjectArgs = function(t) {
                s.checkArgument(h(t.publicKey), "publicKey"), s.checkArgument(!i.isUndefined(t.inputIndex), "inputIndex"), s.checkArgument(!i.isUndefined(t.outputIndex), "outputIndex"), s.checkState(i.isNumber(t.inputIndex), "inputIndex must be a number"), s.checkState(i.isNumber(t.outputIndex), "outputIndex must be a number"), s.checkArgument(t.signature, "signature"), s.checkArgument(t.prevTxId, "prevTxId"), s.checkState(t.signature instanceof a || u.isBuffer(t.signature) || o.isHexa(t.signature), "signature must be a buffer or hexa value"), s.checkState(u.isBuffer(t.prevTxId) || o.isHexa(t.prevTxId), "prevTxId must be a buffer or hexa value"), s.checkArgument(t.sigtype, "sigtype"), s.checkState(i.isNumber(t.sigtype), "sigtype must be a number")
            }, f.prototype.toObject = f.prototype.toJSON = function() {
                return {
                    publicKey: this.publicKey.toString(),
                    prevTxId: this.prevTxId.toString("hex"),
                    outputIndex: this.outputIndex,
                    inputIndex: this.inputIndex,
                    signature: this.signature.toString(),
                    sigtype: this.sigtype
                }
            }, f.fromObject = function(t) {
                return s.checkArgument(t), new f(t)
            }, t.exports = f
        },
        660: function(t, e, r) {
            t.exports = r(1123), t.exports.Input = r(1124), t.exports.Output = r(270), t.exports.UnspentOutput = r(1999), t.exports.Signature = r(522), t.exports.Sighash = r(294), t.exports.SighashWitness = r(663)
        },
        663: function(t, e, r) {
            "use strict";
            var i = r(182),
                s = (r(183), r(270), r(269)),
                n = r(167),
                u = (r(134), r(135)),
                o = r(658),
                h = r(70),
                c = r(53),
                a = function(t, e, r, o, h) {
                    var c, a, f;
                    if (!(e & i.SIGHASH_ANYONECANPAY)) {
                        for (var p = [], _ = 0; _ < t.inputs.length; _++) {
                            var d = t.inputs[_],
                                l = new s(d.prevTxId).readReverse();
                            p.push(l);
                            var g = Buffer.alloc(4);
                            g.writeUInt32LE(d.outputIndex, 0), p.push(g)
                        }
                        c = u.sha256sha256(Buffer.concat(p))
                    }
                    if (!(e & i.SIGHASH_ANYONECANPAY) && (31 & e) !== i.SIGHASH_SINGLE && (31 & e) !== i.SIGHASH_NONE) {
                        for (var S = [], I = 0; I < t.inputs.length; I++) {
                            var O = Buffer.alloc(4);
                            O.writeUInt32LE(t.inputs[I].sequenceNumber, 0), S.push(O)
                        }
                        a = u.sha256sha256(Buffer.concat(S))
                    }
                    var P = new n;
                    if ((31 & e) !== i.SIGHASH_SINGLE && (31 & e) !== i.SIGHASH_NONE) {
                        for (var E = 0; E < t.outputs.length; E++) t.outputs[E].toBufferWriter(P);
                        f = u.sha256sha256(P.toBuffer())
                    } else(31 & e) === i.SIGHASH_SINGLE && r < t.outputs.length && (t.outputs[r].toBufferWriter(P), f = u.sha256sha256(P.toBuffer()));
                    var m = new n;
                    m.writeUInt32LE(t.version), m.write(c), m.write(a);
                    var y = new s(t.inputs[r].prevTxId).readReverse();
                    return m.write(y), m.writeUInt32LE(t.inputs[r].outputIndex), m.write(o), m.write(h), m.writeUInt32LE(t.inputs[r].sequenceNumber), m.write(f), m.writeUInt32LE(t.nLockTime), m.writeInt32LE(e), u.sha256sha256(m.toBuffer())
                };
            t.exports = {
                sighash: a,
                sign: function(t, e, r, i, s, n, u) {
                    if ("ecdsa" === (u = u || "ecdsa")) {
                        let u = a(t, r, i, s, n);
                        return o.sign(u, e).set({
                            nhashtype: r
                        })
                    }
                    throw new Error("signingMethod not supported ", u)
                },
                verify: function(t, e, r, i, s, n, u) {
                    if (h.checkArgument(!c.isUndefined(t)), h.checkArgument(!c.isUndefined(e) && !c.isUndefined(e.nhashtype)), "ecdsa" === (u = u || "ecdsa")) {
                        let u = a(t, e.nhashtype, i, s, n);
                        return o.verify(u, e, r)
                    }
                    throw new Error("signingMethod not supported ", u)
                }
            }
        },
        70: function(t, e, r) {
            "use strict";
            var i = r(202),
                s = r(53);
            t.exports = {
                checkState: function(t, e) {
                    if (!t) throw new i.InvalidState(e)
                },
                checkArgument: function(t, e, r, s) {
                    if (!t) throw new i.InvalidArgument(e, r, s)
                },
                checkArgumentType: function(t, e, n) {
                    if (n = n || "(unknown name)", s.isString(e)) {
                        if ("Buffer" === e) {
                            if (!r(12).Buffer.isBuffer(t)) throw new i.InvalidArgumentType(t, e, n)
                        } else if (typeof t !== e) throw new i.InvalidArgumentType(t, e, n)
                    } else if (!(t instanceof e)) throw new i.InvalidArgumentType(t, e.name, n)
                }
            }
        },
        87: function(t, e, r) {
            "use strict";
            var i = r(12),
                s = (r(72), r(112), r(70));

            function n(t, e) {
                if (t.length !== e.length) return !1;
                for (var r = t.length, i = 0; i < r; i++)
                    if (t[i] !== e[i]) return !1;
                return !0
            }
            t.exports = {
                fill: function(t, e) {
                    s.checkArgumentType(t, "Buffer", "buffer"), s.checkArgumentType(e, "number", "value");
                    for (var r = t.length, i = 0; i < r; i++) t[i] = e;
                    return t
                },
                copy: function(t) {
                    var e = Buffer.alloc(t.length);
                    return t.copy(e), e
                },
                isBuffer: function(t) {
                    return i.Buffer.isBuffer(t) || t instanceof Uint8Array
                },
                emptyBuffer: function(t) {
                    s.checkArgumentType(t, "number", "bytes");
                    for (var e = Buffer.alloc(t), r = 0; r < t; r++) e.write("\0", r);
                    return e
                },
                concat: i.Buffer.concat,
                equals: n,
                equal: n,
                integerAsSingleByteBuffer: function(t) {
                    return s.checkArgumentType(t, "number", "integer"), Buffer.from([255 & t])
                },
                integerAsBuffer: function(t) {
                    s.checkArgumentType(t, "number", "integer");
                    var e = [];
                    return e.push(t >> 24 & 255), e.push(t >> 16 & 255), e.push(t >> 8 & 255), e.push(255 & t), Buffer.from(e)
                },
                integerFromBuffer: function(t) {
                    return s.checkArgumentType(t, "Buffer", "buffer"), t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3]
                },
                integerFromSingleByteBuffer: function(t) {
                    return s.checkArgumentType(t, "Buffer", "buffer"), t[0]
                },
                bufferToHex: function(t) {
                    return s.checkArgumentType(t, "Buffer", "buffer"), t.toString("hex")
                },
                reverse: function(t) {
                    return Buffer.from(t).reverse()
                }
            }, t.exports.NULL_HASH = t.exports.fill(Buffer.alloc(32), 0), t.exports.EMPTY_BUFFER = Buffer.alloc(0)
        }
    }
]);