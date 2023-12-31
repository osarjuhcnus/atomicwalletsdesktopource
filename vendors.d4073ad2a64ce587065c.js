(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        10315: function(t, e, r) {
            const i = r(53),
                s = r(5598),
                n = r(6275),
                u = r(5641),
                o = {},
                h = function(t) {
                    return Math.ceil(Math.log2(t))
                };
            o.getMerkleRoot = function t(e) {
                if (1 === e.length) return e[0];
                return t(i.chunk(e, 2).map(t => s.sha256ripemd160(Buffer.concat(t))))
            }, o.generateMerkleRootFromPublicKeys = function(t) {
                const e = h(t.length),
                    r = Math.pow(2, e),
                    i = t.map(t => t.toString("hex")).sort().map(t => u.fromString(t).toBuffer()),
                    n = Array(r - t.length).fill(Buffer.alloc(0)),
                    c = i.concat(n).map(t => s.sha256ripemd160(t));
                return o.getMerkleRoot(c)
            };
            o.generateInputPublicKeyValidationOperations = function(t) {
                return 1 === t.length ? function(t) {
                    const e = s.sha256ripemd160(t.toBuffer());
                    return [n.OP_DUP, n.OP_HASH160, e, n.OP_EQUALVERIFY]
                }(t[0]) : function(t) {
                    const e = h(t.length),
                        r = o.generateMerkleRootFromPublicKeys(t),
                        i = Array(e).fill([n.OP_FROMALTSTACK, n.OP_IF, n.OP_SWAP, n.OP_ENDIF, n.OP_CAT, n.OP_HASH160]).reduce((t, e) => t.concat(e), []);
                    return [...Array(e).fill(n.OP_TOALTSTACK), (s = e, {
                        0: n.OP_0,
                        1: n.OP_1,
                        2: n.OP_2,
                        3: n.OP_3,
                        4: n.OP_4,
                        5: n.OP_5,
                        6: n.OP_6,
                        7: n.OP_7,
                        8: n.OP_8,
                        9: n.OP_9,
                        10: n.OP_10,
                        11: n.OP_11,
                        12: n.OP_12,
                        13: n.OP_13,
                        14: n.OP_14,
                        15: n.OP_15,
                        16: n.OP_16
                    } [s]), n.OP_PICK, n.OP_HASH160, ...i, r, n.OP_EQUALVERIFY];
                    var s
                }(t)
            }, o.generateRedeemScriptOperations = function(t, e) {
                return [...[n.OP_DUP, n.OP_HASH160, s.sha256ripemd160(e.toBuffer()), n.OP_EQUAL, n.OP_IF, n.OP_CHECKSIG, n.OP_ELSE], ...o.generateInputPublicKeyValidationOperations(t), ...[n.OP_OVER, n.OP_4, n.OP_PICK, n.OP_EQUAL, n.OP_NOT, n.OP_VERIFY], ...[n.OP_DUP, n.OP_TOALTSTACK, n.OP_CHECKDATASIGVERIFY, n.OP_FROMALTSTACK, n.OP_CHECKDATASIG, n.OP_ENDIF]]
            }, t.exports = o
        },
        10316: function(t, e, r) {
            "use strict";
            var i = r(5959),
                s = r(5490),
                n = (r(5513), r(5958)),
                u = r(5754),
                o = r(5753),
                h = r(5662),
                c = r(5640),
                a = r(5960);

            function p() {
                n.apply(this, arguments)
            }
            i(p, n), p.prototype.getSignatures = function(t, e, r, i, n, h) {
                s.checkState(this.output instanceof u), i = i || c.SIGHASH_ALL | c.SIGHASH_FORKID;
                var p = e.toPublicKey();
                return p.toString() === this.output.script.getPublicKey().toString("hex") ? [new a({
                    publicKey: p,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: r,
                    signature: o.sign(t, e, i, r, this.output.script, this.output.satoshisBN, void 0, h),
                    sigtype: i
                })] : []
            }, p.prototype.addSignature = function(t, e, r) {
                return s.checkState(this.isValidSignature(t, e, r), "Signature is invalid"), this.setScript(h.buildPublicKeyIn(e.signature.toDER(r), e.sigtype)), this
            }, p.prototype.clearSignatures = function() {
                return this.setScript(h.empty()), this
            }, p.prototype.isFullySigned = function() {
                return this.script.isPublicKeyIn()
            }, p.SCRIPT_MAX_SIZE = 73, p.prototype._estimateSize = function() {
                return p.SCRIPT_MAX_SIZE
            }, t.exports = p
        },
        10317: function(t, e, r) {
            "use strict";
            var i = r(5959),
                s = r(5490),
                n = r(5513),
                u = r(5598),
                o = r(5958),
                h = r(5754),
                c = r(5753),
                a = r(5662),
                p = r(5640),
                f = r(5960);

            function _() {
                o.apply(this, arguments)
            }
            i(_, o), _.prototype.getSignatures = function(t, e, r, i, o, a) {
                return s.checkState(this.output instanceof h), o = o || u.sha256ripemd160(e.publicKey.toBuffer()), i = i || p.SIGHASH_ALL | p.SIGHASH_FORKID, n.equals(o, this.output.script.getPublicKeyHash()) ? [new f({
                    publicKey: e.publicKey,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: r,
                    signature: c.sign(t, e, i, r, this.output.script, this.output.satoshisBN, void 0, a),
                    sigtype: i
                })] : []
            }, _.prototype.addSignature = function(t, e, r) {
                return s.checkState(this.isValidSignature(t, e, r), "Signature is invalid"), this.setScript(a.buildPublicKeyHashIn(e.publicKey, e.signature.toDER(r), e.sigtype)), this
            }, _.prototype.clearSignatures = function() {
                return this.setScript(a.empty()), this
            }, _.prototype.isFullySigned = function() {
                return this.script.isPublicKeyHashIn()
            }, _.SCRIPT_MAX_SIZE = 107, _.prototype._estimateSize = function() {
                return _.SCRIPT_MAX_SIZE
            }, t.exports = _
        },
        10318: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5959),
                n = (r(6698), r(5958)),
                u = r(5754),
                o = r(5490),
                h = r(5662),
                c = r(5640),
                a = r(5753),
                p = (r(5641), r(5513)),
                f = r(5960);

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
                    if (t) return new f(t)
                }))
            }, _.prototype._serializeSignatures = function() {
                return i.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, _.prototype.getSignatures = function(t, e, r, s, n, h) {
                o.checkState(this.output instanceof u), s = s || c.SIGHASH_ALL | c.SIGHASH_FORKID;
                var p = this,
                    _ = [];
                return i.each(this.publicKeys, (function(i) {
                    i.toString() === e.publicKey.toString() && _.push(new f({
                        publicKey: e.publicKey,
                        prevTxId: p.prevTxId,
                        outputIndex: p.outputIndex,
                        inputIndex: r,
                        signature: a.sign(t, e, s, r, p.output.script, p.output.satoshisBN, void 0, h),
                        sigtype: s
                    }))
                })), _
            }, _.prototype.addSignature = function(t, e, r) {
                return o.checkState(!this.isFullySigned(), "All needed signatures have already been added"), o.checkArgument(!i.isUndefined(this.publicKeyIndex[e.publicKey.toString()]), "Signature has no matching public key"), o.checkState(this.isValidSignature(t, e, r)), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this._updateScript(r), this
            }, _.prototype._updateScript = function(t) {
                return this.setScript(h.buildMultisigIn(this.publicKeys, this.threshold, this._createSignatures(t))), this
            }, _.prototype._createSignatures = function(t) {
                return i.map(i.filter(this.signatures, (function(t) {
                    return !i.isUndefined(t)
                })), (function(e) {
                    return p.concat([e.signature.toDER(t), p.integerAsSingleByteBuffer(e.sigtype)])
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
                return e.signature.nhashtype = e.sigtype, a.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script, this.output.satoshisBN, void 0, r)
            }, _.normalizeSignatures = function(t, e, r, i, s, n) {
                return s.map((function(s) {
                    var u = null;
                    return i = i.filter((function(i) {
                        if (u) return !0;
                        var o = new f({
                            signature: c.fromTxFormat(i),
                            publicKey: s,
                            prevTxId: e.prevTxId,
                            outputIndex: e.outputIndex,
                            inputIndex: r,
                            sigtype: c.SIGHASH_ALL
                        });
                        return o.signature.nhashtype = o.sigtype, !a.verify(t, o.signature, o.publicKey, o.inputIndex, e.output.script, void 0, n) || (u = o, !1)
                    })), u || null
                }))
            }, _.OPCODES_SIZE = 1, _.SIGNATURE_SIZE = 73, _.prototype._estimateSize = function() {
                return _.OPCODES_SIZE + this.threshold * _.SIGNATURE_SIZE
            }, t.exports = _
        },
        10319: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5959),
                n = r(5958),
                u = r(5754),
                o = r(5490),
                h = r(5662),
                c = r(5640),
                a = r(5753),
                p = (r(5641), r(5513)),
                f = r(5960);

            function _(t, e, r, s, u) {
                u = u || {}, n.apply(this, arguments);
                var c = this;
                e = e || t.publicKeys, r = r || t.threshold, s = s || t.signatures, u.noSorting ? this.publicKeys = e : this.publicKeys = i.sortBy(e, (function(t) {
                    return t.toString("hex")
                })), this.redeemScript = h.buildMultisigOut(this.publicKeys, r, u), o.checkState(h.buildScriptHashOut(this.redeemScript).equals(this.output.script), "Provided public keys don't hash to the provided output"), this.publicKeyIndex = {}, i.each(this.publicKeys, (function(t, e) {
                    c.publicKeyIndex[t.toString()] = e
                })), this.threshold = r, this.signatures = s ? this._deserializeSignatures(s) : new Array(this.publicKeys.length), this.checkBitsField = new Uint8Array(this.publicKeys.length)
            }
            s(_, n), _.prototype.toObject = function() {
                var t = n.prototype.toObject.apply(this, arguments);
                return t.threshold = this.threshold, t.publicKeys = i.map(this.publicKeys, (function(t) {
                    return t.toString()
                })), t.signatures = this._serializeSignatures(), t
            }, _.prototype._deserializeSignatures = function(t) {
                return i.map(t, (function(t) {
                    if (t) return new f(t)
                }))
            }, _.prototype._serializeSignatures = function() {
                return i.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, _.prototype.getSignatures = function(t, e, r, s, n, h) {
                o.checkState(this.output instanceof u), s = s || c.SIGHASH_ALL | c.SIGHASH_FORKID;
                var p = this,
                    _ = [];
                return i.each(this.publicKeys, (function(i) {
                    i.toString() === e.publicKey.toString() && _.push(new f({
                        publicKey: e.publicKey,
                        prevTxId: p.prevTxId,
                        outputIndex: p.outputIndex,
                        inputIndex: r,
                        signature: a.sign(t, e, s, r, p.redeemScript, p.output.satoshisBN, void 0, h),
                        sigtype: s
                    }))
                })), _
            }, _.prototype.addSignature = function(t, e, r) {
                return o.checkState(!this.isFullySigned(), "All needed signatures have already been added"), o.checkArgument(!i.isUndefined(this.publicKeyIndex[e.publicKey.toString()]), "Signature has no matching public key"), o.checkState(this.isValidSignature(t, e, r)), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this.checkBitsField[this.publicKeyIndex[e.publicKey.toString()]] = void 0 !== e ? 1 : 0, this._updateScript(r, this.checkBitsField), this
            }, _.prototype._updateScript = function(t, e) {
                return this.setScript(h.buildP2SHMultisigIn(this.publicKeys, this.threshold, this._createSignatures(t), {
                    cachedMultisig: this.redeemScript,
                    checkBits: e,
                    signingMethod: t
                })), this
            }, _.prototype._createSignatures = function(t) {
                return i.map(i.filter(this.signatures, (function(t) {
                    return !i.isUndefined(t)
                })), (function(e) {
                    return p.concat([e.signature.toDER(t), p.integerAsSingleByteBuffer(e.sigtype)])
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
                return r = r || "ecdsa", e.signature.nhashtype = e.sigtype, a.verify(t, e.signature, e.publicKey, e.inputIndex, this.redeemScript, this.output.satoshisBN, void 0, r)
            }, _.OPCODES_SIZE = 7, _.SIGNATURE_SIZE = 74, _.PUBKEY_SIZE = 34, _.prototype._estimateSize = function() {
                return _.OPCODES_SIZE + this.threshold * _.SIGNATURE_SIZE + this.publicKeys.length * _.PUBKEY_SIZE
            }, t.exports = _
        },
        10320: function(t, e, r) {
            "use strict";
            const i = r(5959),
                s = r(5490),
                n = r(5958),
                u = r(5754),
                o = r(5662),
                h = r(5753),
                c = r(5640),
                a = r(5960);

            function p(t, e, r, i) {
                n.apply(this, arguments), i = i || t.signatures || [], this.inputPublicKeys = e, this.reclaimPublicKey = r, this.redeemScript = o.buildEscrowOut(e, r), s.checkState(o.buildScriptHashOut(this.redeemScript).equals(this.output.script), "Provided public keys don't hash to the provided output"), this.signatures = this._deserializeSignatures(i)
            }
            i(p, n), p.prototype.getSignatures = function(t, e, r, i, n, o) {
                if (this.reclaimPublicKey.toString() !== e.publicKey.toString()) return [];
                s.checkState(this.output instanceof u), i = i || c.SIGHASH_ALL | c.SIGHASH_FORKID;
                return [new a({
                    publicKey: e.publicKey,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: r,
                    signature: h.sign(t, e, i, r, this.redeemScript, this.output.satoshisBN, void 0, o),
                    sigtype: i
                })]
            }, p.prototype.addSignature = function(t, e, r) {
                s.checkState(this.isValidSignature(t, e, r));
                const i = o.buildEscrowIn(this.reclaimPublicKey, e.signature, this.redeemScript);
                this.setScript(i), this.signatures = [e]
            }, p.prototype.isValidSignature = function(t, e, r) {
                return r = r || "ecdsa", e.signature.nhashtype = e.sigtype, h.verify(t, e.signature, e.publicKey, e.inputIndex, this.redeemScript, this.output.satoshisBN, void 0, r)
            }, p.prototype.clearSignatures = function() {
                this.signatures = []
            }, p.prototype.isFullySigned = function() {
                return 1 === this.signatures.length
            }, p.prototype._deserializeSignatures = function(t) {
                return t.map(t => new a(t))
            }, t.exports = p
        },
        5641: function(t, e, r) {
            "use strict";
            var i = r(5586),
                Point = r(5869),
                s = r(5598),
                n = r(5587),
                u = r(5800),
                o = r(53),
                h = r(5490);

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
                return t instanceof r(6273)
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
            }, c.prototype.toAddress = function(t) {
                return r(5870).fromPublicKey(this, t || this.network)
            }, c.prototype.toString = function() {
                return this.toDER().toString("hex")
            }, c.prototype.inspect = function() {
                return "<PublicKey: " + this.toString() + (this.compressed ? "" : ", uncompressed") + ">"
            }, t.exports = c
        },
        5662: function(t, e, r) {
            t.exports = r(7554), t.exports.Interpreter = r(7555)
        },
        5753: function(t, e, r) {
            "use strict";
            r(12);
            var i = r(5640),
                s = r(5662),
                n = r(5754),
                u = r(5801),
                o = r(5709),
                h = r(5586),
                c = r(5598),
                a = r(6696),
                p = r(6697),
                f = r(5490),
                _ = r(5513),
                d = r(7555),
                I = r(53),
                l = d.SCRIPT_ENABLE_SIGHASH_FORKID,
                S = function(t, e, a, p, S, g) {
                    var O = r(6698),
                        P = r(6699);
                    I.isUndefined(g) && (g = l);
                    var E, A = O.shallowCopy(t);
                    (p = new s(p), g & d.SCRIPT_ENABLE_REPLAY_PROTECTION) && (e = (16711680 | 57005 ^ e >> 8) << 8 | 255 & e);
                    if (e & i.SIGHASH_FORKID && g & d.SCRIPT_ENABLE_SIGHASH_FORKID) return function(t, e, r, s, n) {
                        var a = t.inputs[r];

                        function p(t, e) {
                            var r = new o;
                            I.isUndefined(e) ? I.each(t.outputs, (function(t) {
                                t.toBufferWriter(r)
                            })) : t.outputs[e].toBufferWriter(r);
                            var i = r.toBuffer();
                            return c.sha256sha256(i)
                        }
                        f.checkArgument(n instanceof h, "For ForkId=0 signatures, satoshis or complete input must be provided");
                        var d = _.emptyBuffer(32),
                            l = _.emptyBuffer(32),
                            S = _.emptyBuffer(32);
                        e & i.SIGHASH_ANYONECANPAY || (d = function(t) {
                            var e = new o;
                            I.each(t.inputs, (function(t) {
                                e.writeReverse(t.prevTxId), e.writeUInt32LE(t.outputIndex)
                            }));
                            var r = e.toBuffer();
                            return c.sha256sha256(r)
                        }(t)), e & i.SIGHASH_ANYONECANPAY || (31 & e) == i.SIGHASH_SINGLE || (31 & e) == i.SIGHASH_NONE || (l = function(t) {
                            var e = new o;
                            I.each(t.inputs, (function(t) {
                                e.writeUInt32LE(t.sequenceNumber)
                            }));
                            var r = e.toBuffer();
                            return c.sha256sha256(r)
                        }(t)), (31 & e) != i.SIGHASH_SINGLE && (31 & e) != i.SIGHASH_NONE ? S = p(t) : (31 & e) == i.SIGHASH_SINGLE && r < t.outputs.length && (S = p(t, r));
                        var g = new o;
                        g.writeInt32LE(t.version), g.write(d), g.write(l), g.writeReverse(a.prevTxId), g.writeUInt32LE(a.outputIndex), g.writeVarintNum(s.toBuffer().length), g.write(s.toBuffer()), g.writeUInt64LEBN(n);
                        var O = a.sequenceNumber;
                        g.writeUInt32LE(O), g.write(S), g.writeUInt32LE(t.nLockTime), g.writeUInt32LE(e >>> 0);
                        var P = g.toBuffer(),
                            E = c.sha256sha256(P);
                        return E = new u(E).readReverse()
                    }(A, e, a, p, S);
                    for (p.removeCodeseparators(), E = 0; E < A.inputs.length; E++) A.inputs[E] = new P(A.inputs[E]).setScript(s.empty());
                    if (A.inputs[a] = new P(A.inputs[a]).setScript(p), (31 & e) === i.SIGHASH_NONE || (31 & e) === i.SIGHASH_SINGLE)
                        for (E = 0; E < A.inputs.length; E++) E !== a && (A.inputs[E].sequenceNumber = 0);
                    if ((31 & e) === i.SIGHASH_NONE) A.outputs = [];
                    else if ((31 & e) === i.SIGHASH_SINGLE) {
                        if (a >= A.outputs.length) return Buffer.from("0000000000000000000000000000000000000000000000000000000000000001", "hex");
                        for (A.outputs.length = a + 1, E = 0; E < a; E++) A.outputs[E] = new n({
                            satoshis: h.fromBuffer(Buffer.from("ffffffffffffffff", "hex")),
                            script: s.empty()
                        })
                    }
                    e & i.SIGHASH_ANYONECANPAY && (A.inputs = [A.inputs[a]]);
                    var m = (new o).write(A.toBuffer()).writeInt32LE(e).toBuffer(),
                        y = c.sha256sha256(m);
                    return y = new u(y).readReverse()
                };
            t.exports = {
                sighash: S,
                sign: function(t, e, r, i, s, n, u, o) {
                    var h = S(t, r, i, s, n, u);
                    let c;
                    return "schnorr" === (o = o || "ecdsa") ? (c = p.sign(h, e, "little").set({
                        nhashtype: r
                    }), c) : "ecdsa" === o ? (c = a.sign(h, e, "little").set({
                        nhashtype: r
                    }), c) : void 0
                },
                verify: function(t, e, r, i, s, n, u, o) {
                    f.checkArgument(!I.isUndefined(t)), f.checkArgument(!I.isUndefined(e) && !I.isUndefined(e.nhashtype));
                    var h = S(t, e.nhashtype, i, s, n, u);
                    return "schnorr" === (o = o || "ecdsa") ? p.verify(h, e, r, "little") : "ecdsa" === o ? a.verify(h, e, r, "little") : void 0
                }
            }
        },
        5754: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5586),
                n = (r(12), r(5513)),
                u = r(5587),
                o = r(5709),
                h = r(5662),
                c = r(5490),
                a = r(5661);

            function p(t) {
                if (!(this instanceof p)) return new p(t);
                if (!i.isObject(t)) throw new TypeError("Unrecognized argument for Output");
                var e;
                this.satoshis = t.satoshis, n.isBuffer(t.script) ? this._scriptBuffer = t.script : (e = i.isString(t.script) && u.isHexa(t.script) ? Buffer.from(t.script, "hex") : t.script, this.setScript(e))
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
                    t instanceof s ? (this._satoshisBN = t, this._satoshis = t.toNumber()) : i.isString(t) ? (this._satoshis = parseInt(t), this._satoshisBN = s.fromNumber(this._satoshis)) : (c.checkArgument(u.isNaturalNumber(t), "Output satoshis is not a natural number"), this._satoshisBN = s.fromNumber(t), this._satoshis = t), c.checkState(u.isNaturalNumber(this._satoshis), "Output satoshis is not a natural number")
                }
            }), p.prototype.invalidSatoshis = function() {
                return this._satoshis > 9007199254740991 ? "transaction txout satoshis greater than max safe integer" : this._satoshis !== this._satoshisBN.toNumber() ? "transaction txout satoshis has corrupted value" : this._satoshis < 0 && "transaction txout negative"
            }, Object.defineProperty(p.prototype, "satoshisBN", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._satoshisBN
                },
                set: function(t) {
                    this._satoshisBN = t, this._satoshis = t.toNumber(), c.checkState(u.isNaturalNumber(this._satoshis), "Output satoshis is not a natural number")
                }
            }), p.prototype.toObject = p.prototype.toJSON = function() {
                var t = {
                    satoshis: this.satoshis
                };
                return t.script = this._scriptBuffer.toString("hex"), t
            }, p.fromObject = function(t) {
                return new p(t)
            }, p.prototype.setScriptFromBuffer = function(t) {
                this._scriptBuffer = t;
                try {
                    this._script = h.fromBuffer(this._scriptBuffer), this._script._isOutput = !0
                } catch (t) {
                    if (!(t instanceof a.Script.InvalidBuffer)) throw t;
                    this._script = null
                }
            }, p.prototype.setScript = function(t) {
                if (t instanceof h) this._scriptBuffer = t.toBuffer(), this._script = t, this._script._isOutput = !0;
                else if (i.isString(t)) this._script = h.fromString(t), this._scriptBuffer = this._script.toBuffer(), this._script._isOutput = !0;
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
                t || (t = new o), t.writeUInt64LEBN(this._satoshisBN);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t
            }, t.exports = p
        },
        5958: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5490),
                n = r(5661),
                u = r(5709),
                o = (r(12), r(5513)),
                h = r(5587),
                c = r(5662),
                a = r(5753),
                p = r(5754);
            const f = Math.pow(2, 31),
                _ = Math.pow(2, 22),
                d = Math.pow(2, 16) - 1;

            function I(t) {
                return this instanceof I ? t ? this._fromObject(t) : void 0 : new I(t)
            }
            I.MAXINT = 4294967295, I.DEFAULT_SEQNUMBER = 4294967295, I.DEFAULT_LOCKTIME_SEQNUMBER = 4294967294, I.DEFAULT_RBF_SEQNUMBER = 4294967293, I.SEQUENCE_LOCKTIME_TYPE_FLAG = _, Object.defineProperty(I.prototype, "script", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this.isNull() ? null : (this._script || (this._script = new c(this._scriptBuffer), this._script._isInput = !0), this._script)
                }
            }), I.fromObject = function(t) {
                return s.checkArgument(i.isObject(t)), (new I)._fromObject(t)
            }, I.prototype._fromObject = function(t) {
                var e;
                if (e = i.isString(t.prevTxId) && h.isHexa(t.prevTxId) ? Buffer.from(t.prevTxId, "hex") : t.prevTxId, this.output = t.output ? t.output instanceof p ? t.output : new p(t.output) : void 0, this.prevTxId = e || t.txidbuf, this.outputIndex = i.isUndefined(t.outputIndex) ? t.txoutnum : t.outputIndex, this.sequenceNumber = i.isUndefined(t.sequenceNumber) ? i.isUndefined(t.seqnum) ? 4294967295 : t.seqnum : t.sequenceNumber, i.isUndefined(t.script) && i.isUndefined(t.scriptBuffer)) throw new n.Transaction.Input.MissingScript;
                return this.setScript(t.scriptBuffer || t.script), this
            }, I.prototype.toObject = I.prototype.toJSON = function() {
                var t = {
                    prevTxId: this.prevTxId.toString("hex"),
                    outputIndex: this.outputIndex,
                    sequenceNumber: this.sequenceNumber,
                    script: this._scriptBuffer.toString("hex")
                };
                return this.script && (t.scriptString = this.script.toString()), this.output && (t.output = this.output.toObject()), t
            }, I.fromBufferReader = function(t) {
                var e = new I;
                return e.prevTxId = t.readReverse(32), e.outputIndex = t.readUInt32LE(), e._scriptBuffer = t.readVarLengthBuffer(), e.sequenceNumber = t.readUInt32LE(), e
            }, I.prototype.toBufferWriter = function(t) {
                t || (t = new u), t.writeReverse(this.prevTxId), t.writeUInt32LE(this.outputIndex);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t.writeUInt32LE(this.sequenceNumber), t
            }, I.prototype.setScript = function(t) {
                if (this._script = null, t instanceof c) this._script = t, this._script._isInput = !0, this._scriptBuffer = t.toBuffer();
                else if (null === t) this._script = c.empty(), this._script._isInput = !0, this._scriptBuffer = this._script.toBuffer();
                else if (h.isHexa(t)) this._scriptBuffer = Buffer.from(t, "hex");
                else if (i.isString(t)) this._script = new c(t), this._script._isInput = !0, this._scriptBuffer = this._script.toBuffer();
                else {
                    if (!o.isBuffer(t)) throw new TypeError("Invalid argument type: script");
                    this._scriptBuffer = Buffer.from(t)
                }
                return this
            }, I.prototype.getSignatures = function() {
                throw new n.AbstractMethodInvoked("Trying to sign unsupported output type (only P2PKH and P2SH multisig inputs are supported) for input: " + JSON.stringify(this))
            }, I.prototype.isFullySigned = function() {
                throw new n.AbstractMethodInvoked("Input#isFullySigned")
            }, I.prototype.isFinal = function() {
                return 4294967295 !== this.sequenceNumber
            }, I.prototype.addSignature = function() {
                throw new n.AbstractMethodInvoked("Input#addSignature")
            }, I.prototype.clearSignatures = function() {
                throw new n.AbstractMethodInvoked("Input#clearSignatures")
            }, I.prototype.isValidSignature = function(t, e, r) {
                return e.signature.nhashtype = e.sigtype, a.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script, this.output.satoshisBN, void 0, r)
            }, I.prototype.isNull = function() {
                return "0000000000000000000000000000000000000000000000000000000000000000" === this.prevTxId.toString("hex") && 4294967295 === this.outputIndex
            }, I.prototype._estimateSize = function() {
                return this.toBufferWriter().toBuffer().length
            }, I.prototype.lockForSeconds = function(t) {
                if (s.checkArgument(i.isNumber(t)), t < 0 || t >= 33553920) throw new n.Transaction.Input.LockTimeRange;
                return t = parseInt(Math.floor(t / 512)), this.sequenceNumber = t | _, this
            }, I.prototype.lockUntilBlockHeight = function(t) {
                if (s.checkArgument(i.isNumber(t)), t < 0 || t >= d) throw new n.Transaction.Input.BlockHeightOutOfRange;
                return this.sequenceNumber = t, this
            }, I.prototype.getLockTime = function() {
                return this.sequenceNumber & f ? null : this.sequenceNumber & _ ? 512 * (65535 & this.sequenceNumber) : 65535 & this.sequenceNumber
            }, t.exports = I
        },
        5960: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5490),
                n = r(5959),
                u = r(5513),
                o = r(5587),
                h = r(5641),
                c = r(5661),
                a = r(5640);

            function p(t) {
                if (!(this instanceof p)) return new p(t);
                if (t instanceof p) return t;
                if (i.isObject(t)) return this._fromObject(t);
                throw new c.InvalidArgument("TransactionSignatures must be instantiated from an object")
            }
            n(p, a), p.prototype._fromObject = function(t) {
                return this._checkObjectArgs(t), this.publicKey = new h(t.publicKey), this.prevTxId = u.isBuffer(t.prevTxId) ? t.prevTxId : Buffer.from(t.prevTxId, "hex"), this.outputIndex = t.outputIndex, this.inputIndex = t.inputIndex, this.signature = t.signature instanceof a ? t.signature : u.isBuffer(t.signature) ? a.fromBuffer(t.signature) : a.fromString(t.signature), this.sigtype = t.sigtype, this
            }, p.prototype._checkObjectArgs = function(t) {
                s.checkArgument(h(t.publicKey), "publicKey"), s.checkArgument(!i.isUndefined(t.inputIndex), "inputIndex"), s.checkArgument(!i.isUndefined(t.outputIndex), "outputIndex"), s.checkState(i.isNumber(t.inputIndex), "inputIndex must be a number"), s.checkState(i.isNumber(t.outputIndex), "outputIndex must be a number"), s.checkArgument(t.signature, "signature"), s.checkArgument(t.prevTxId, "prevTxId"), s.checkState(t.signature instanceof a || u.isBuffer(t.signature) || o.isHexa(t.signature), "signature must be a buffer or hexa value"), s.checkState(u.isBuffer(t.prevTxId) || o.isHexa(t.prevTxId), "prevTxId must be a buffer or hexa value"), s.checkArgument(t.sigtype, "sigtype"), s.checkState(i.isNumber(t.sigtype), "sigtype must be a number")
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
        6273: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5870),
                n = r(6093),
                u = r(5586),
                o = r(5587),
                h = r(5800),
                Point = r(5869),
                c = r(5641),
                a = r(6094),
                p = r(5490);

            function f(t, e) {
                if (!(this instanceof f)) return new f(t, e);
                if (t instanceof f) return t;
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
            f.prototype._classifyArguments = function(t, e) {
                var r = {
                    compressed: !0,
                    network: e ? h.get(e) : h.defaultNetwork
                };
                if (i.isUndefined(t) || i.isNull(t)) r.bn = f._getRandomBN();
                else if (t instanceof u) r.bn = t;
                else if (t instanceof Buffer || t instanceof Uint8Array) r = f._transformBuffer(t, e);
                else if (t.bn && t.network) r = f._transformObject(t);
                else if (!e && h.get(t)) r.bn = f._getRandomBN(), r.network = h.get(t);
                else {
                    if ("string" != typeof t) throw new TypeError("First argument is an unrecognized data type.");
                    o.isHexa(t) ? r.bn = new u(Buffer.from(t, "hex")) : r = f._transformWIF(t, e)
                }
                return r
            }, f._getRandomBN = function() {
                var t, e;
                do {
                    var r = a.getRandomBuffer(32);
                    t = (e = u.fromBuffer(r)).lt(Point.getN())
                } while (!t);
                return e
            }, f._transformBuffer = function(t, e) {
                var r = {};
                if (32 === t.length) return f._transformBNBuffer(t, e);
                if (r.network = h.get(t[0], "privatekey"), !r.network) throw new Error("Invalid network");
                if (e && r.network !== h.get(e)) throw new TypeError("Private key network mismatch");
                if (34 === t.length && 1 === t[33]) r.compressed = !0;
                else {
                    if (33 !== t.length) throw new Error("Length of buffer must be 33 (uncompressed) or 34 (compressed)");
                    r.compressed = !1
                }
                return r.bn = u.fromBuffer(t.slice(1, 33)), r
            }, f._transformBNBuffer = function(t, e) {
                var r = {};
                return r.network = h.get(e) || h.defaultNetwork, r.bn = u.fromBuffer(t), r.compressed = !1, r
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
                return this.bn.toBuffer({
                    size: 32
                })
            }, f.prototype.toBufferNoPadding = function() {
                return this.bn.toBuffer()
            }, f.prototype.toPublicKey = function() {
                return this._pubkey || (this._pubkey = c.fromPrivateKey(this)), this._pubkey
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
        6275: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5490),
                n = r(5513),
                u = r(5587);

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
                    OP_SPLIT: 127,
                    OP_NUM2BIN: 128,
                    OP_BIN2NUM: 129,
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
                    OP_NOP2: 177,
                    OP_CHECKLOCKTIMEVERIFY: 177,
                    OP_NOP3: 178,
                    OP_CHECKSEQUENCEVERIFY: 178,
                    OP_NOP1: 176,
                    OP_NOP4: 179,
                    OP_NOP5: 180,
                    OP_NOP6: 181,
                    OP_NOP7: 182,
                    OP_NOP8: 183,
                    OP_NOP9: 184,
                    OP_NOP10: 185,
                    OP_CHECKDATASIG: 186,
                    OP_CHECKDATASIGVERIFY: 187,
                    OP_REVERSEBYTES: 188,
                    OP_PREFIX_BEGIN: 240,
                    OP_PREFIX_END: 241,
                    OP_SMALLINTEGER: 250,
                    OP_PUBKEYS: 251,
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
        6276: function(t, e, r) {
            t.exports = r(6698), t.exports.Input = r(6699), t.exports.Output = r(5754), t.exports.UnspentOutput = r(7556), t.exports.Signature = r(5960), t.exports.Sighash = r(5753)
        },
        6698: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5490),
                n = r(12),
                u = Buffer.compare || r(2350),
                o = r(5661),
                h = r(5513),
                c = r(5587),
                a = r(5801),
                p = r(5709),
                f = r(5598),
                _ = r(5640),
                d = r(5753),
                I = r(5870),
                l = r(7556),
                S = r(6699),
                g = S.PublicKeyHash,
                O = S.PublicKey,
                P = S.MultiSigScriptHash,
                E = S.MultiSig,
                A = S.Escrow,
                m = r(5754),
                y = r(5662),
                R = r(6273),
                T = r(5641),
                k = r(5586);

            function b(t) {
                if (!(this instanceof b)) return new b(t);
                if (this.inputs = [], this.outputs = [], this._inputAmount = void 0, this._outputAmount = void 0, t) {
                    if (t instanceof b) return b.shallowCopy(t);
                    if (c.isHexa(t)) this.fromString(t);
                    else if (h.isBuffer(t)) this.fromBuffer(t);
                    else {
                        if (!i.isObject(t)) throw new o.InvalidArgument("Must provide an object or string to deserialize a transaction");
                        this.fromObject(t)
                    }
                } else this._newTransaction()
            }
            b.DUST_AMOUNT = 546, b.FEE_SECURITY_MARGIN = 150, b.MAX_MONEY = 21e14, b.NLOCKTIME_BLOCKHEIGHT_LIMIT = 5e8, b.NLOCKTIME_MAX_VALUE = 4294967295, b.FEE_PER_KB = 1e5, b.CHANGE_OUTPUT_MAX_SIZE = 62, b.MAXIMUM_EXTRA_SIZE = 26, b.shallowCopy = function(t) {
                return new b(t.toBuffer())
            };
            var N = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._hash = new a(this._getHash()).readReverse().toString("hex"), this._hash
                }
            };
            Object.defineProperty(b.prototype, "hash", N), Object.defineProperty(b.prototype, "id", N);
            var v = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._getInputAmount()
                }
            };
            Object.defineProperty(b.prototype, "inputAmount", v), v.get = function() {
                return this._getOutputAmount()
            }, Object.defineProperty(b.prototype, "outputAmount", v), b.prototype._getHash = function() {
                return f.sha256sha256(this.toBuffer())
            }, b.prototype.serialize = function(t) {
                return !0 === t || t && t.disableAll ? this.uncheckedSerialize() : this.checkedSerialize(t)
            }, b.prototype.uncheckedSerialize = b.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, b.prototype.checkedSerialize = function(t) {
                var e = this.getSerializationError(t);
                if (e) throw e.message += " - For more information please see: https://bitcore.io/api/lib/transaction#serialization-checks", e;
                return this.uncheckedSerialize()
            }, b.prototype.invalidSatoshis = function() {
                for (var t = !1, e = 0; e < this.outputs.length; e++) this.outputs[e].invalidSatoshis() && (t = !0);
                return t
            }, b.prototype.getSerializationError = function(t) {
                if (t = t || {}, this.invalidSatoshis()) return new o.Transaction.InvalidSatoshis;
                var e, r = this._getUnspentValue();
                return r < 0 ? t.disableMoreOutputThanInput || (e = new o.Transaction.InvalidOutputAmountSum) : e = this._hasFeeError(t, r), e || this._hasDustOutputs(t) || this._isMissingSignatures(t)
            }, b.prototype._hasFeeError = function(t, e) {
                if (!i.isUndefined(this._fee) && this._fee !== e) return new o.Transaction.FeeError.Different("Unspent value is " + e + " but specified fee is " + this._fee);
                if (!t.disableLargeFees) {
                    var r = Math.floor(b.FEE_SECURITY_MARGIN * this._estimateFee());
                    if (e > r) return this._missingChange() ? new o.Transaction.ChangeAddressMissing("Fee is too large and no change address was provided") : new o.Transaction.FeeError.TooLarge("expected less than " + r + " but got " + e)
                }
                if (!t.disableSmallFees) {
                    var s = Math.ceil(this._estimateFee() / b.FEE_SECURITY_MARGIN);
                    if (e < s) return new o.Transaction.FeeError.TooSmall("expected more than " + s + " but got " + e)
                }
            }, b.prototype._missingChange = function() {
                return !this._changeScript
            }, b.prototype._hasDustOutputs = function(t) {
                var e, r;
                if (!t.disableDustOutputs)
                    for (e in this.outputs)
                        if ((r = this.outputs[e]).satoshis < b.DUST_AMOUNT && !r.script.isDataOut()) return new o.Transaction.DustOutputs
            }, b.prototype._isMissingSignatures = function(t) {
                if (!t.disableIsFullySigned) return this.isFullySigned() ? void 0 : new o.Transaction.MissingSignatures
            }, b.prototype.inspect = function() {
                return "<Transaction: " + this.uncheckedSerialize() + ">"
            }, b.prototype.toBuffer = function() {
                var t = new p;
                return this.toBufferWriter(t).toBuffer()
            }, b.prototype.toBufferWriter = function(t) {
                return t.writeInt32LE(this.version), t.writeVarintNum(this.inputs.length), i.each(this.inputs, (function(e) {
                    e.toBufferWriter(t)
                })), t.writeVarintNum(this.outputs.length), i.each(this.outputs, (function(e) {
                    e.toBufferWriter(t)
                })), t.writeUInt32LE(this.nLockTime), t
            }, b.prototype.fromBuffer = function(t) {
                var e = new a(t);
                return this.fromBufferReader(e)
            }, b.prototype.fromBufferReader = function(t) {
                var e, r, i;
                for (s.checkArgument(!t.finished(), "No transaction data received"), this.version = t.readInt32LE(), r = t.readVarintNum(), e = 0; e < r; e++) {
                    var n = S.fromBufferReader(t);
                    this.inputs.push(n)
                }
                for (i = t.readVarintNum(), e = 0; e < i; e++) this.outputs.push(m.fromBufferReader(t));
                return this.nLockTime = t.readUInt32LE(), this
            }, b.prototype.toObject = b.prototype.toJSON = function() {
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
            }, b.prototype.fromObject = function(t) {
                s.checkArgument(i.isObject(t) || t instanceof b);
                var e, r = this;
                return e = t instanceof b ? e.toObject() : t, i.each(e.inputs, (function(t) {
                    if (t.output && t.output.script) {
                        var e, i = new y(t.output.script);
                        if (i.isPublicKeyHashOut()) e = new S.PublicKeyHash(t);
                        else if (i.isScriptHashOut() && t.publicKeys && t.threshold) e = new S.MultiSigScriptHash(t, t.publicKeys, t.threshold, t.signatures);
                        else {
                            if (!i.isPublicKeyOut()) throw new o.Transaction.Input.UnsupportedScript(t.output.script);
                            e = new S.PublicKey(t)
                        }
                        r.addInput(e)
                    } else r.uncheckedAddInput(new S(t))
                })), i.each(e.outputs, (function(t) {
                    r.addOutput(new m(t))
                })), e.changeIndex && (this._changeIndex = e.changeIndex), e.changeScript && (this._changeScript = new y(e.changeScript)), e.fee && (this._fee = e.fee), this.nLockTime = e.nLockTime, this.version = e.version, this._checkConsistency(t), this
            }, b.prototype._checkConsistency = function(t) {
                i.isUndefined(this._changeIndex) || (s.checkState(this._changeScript, "Change script is expected."), s.checkState(this.outputs[this._changeIndex], "Change index points to undefined output."), s.checkState(this.outputs[this._changeIndex].script.toString() === this._changeScript.toString(), "Change output has an unexpected script.")), t && t.hash && s.checkState(t.hash === this.hash, "Hash in object does not match transaction hash.")
            }, b.prototype.lockUntilDate = function(t) {
                if (s.checkArgument(t), i.isNumber(t) && t < b.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new o.Transaction.LockTimeTooEarly;
                i.isDate(t) && (t = t.getTime() / 1e3);
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === S.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = S.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, b.prototype.lockUntilBlockHeight = function(t) {
                if (s.checkArgument(i.isNumber(t)), t >= b.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new o.Transaction.BlockHeightTooHigh;
                if (t < 0) throw new o.Transaction.NLockTimeOutOfRange;
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === S.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = S.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, b.prototype.getLockTime = function() {
                return this.nLockTime ? this.nLockTime < b.NLOCKTIME_BLOCKHEIGHT_LIMIT ? this.nLockTime : new Date(1e3 * this.nLockTime) : null
            }, b.prototype.fromString = function(t) {
                this.fromBuffer(n.Buffer.from(t, "hex"))
            }, b.prototype._newTransaction = function() {
                this.version = 2, this.nLockTime = 0
            }, b.prototype.from = function(t, e, r, s) {
                if (i.isArray(t)) {
                    var n = this;
                    return i.each(t, (function(t) {
                        n.from(t, e, r, s)
                    })), this
                }
                return i.some(this.inputs, (function(e) {
                    return e.prevTxId.toString("hex") === t.txId && e.outputIndex === t.outputIndex
                })) || (e && r ? this._fromMultisigUtxo(t, e, r, s) : t.publicKeys && t.publicKeys.length > 1 ? this._fromEscrowUtxo(t, t.publicKeys) : this._fromNonP2SH(t)), this
            }, b.prototype.associateInputs = function(t, e, r, i) {
                let s = [];
                for (let n of t) {
                    const t = this.inputs.findIndex(t => t.prevTxId.toString("hex") === n.txId && t.outputIndex === n.outputIndex);
                    s.push(t), t >= 0 && (this.inputs[t] = this._getInputFrom(n, e, r, i))
                }
                return s
            }, b.prototype._selectInputType = function(t, e, r) {
                var i;
                return t = new l(t), e && r ? t.script.isMultisigOut() ? i = E : (t.script.isScriptHashOut() || t.script.isWitnessScriptHashOut()) && (i = P) : i = t.script.isPublicKeyHashOut() || t.script.isWitnessPublicKeyHashOut() || t.script.isScriptHashOut() ? g : t.script.isPublicKeyOut() ? O : S, i
            }, b.prototype._getInputFrom = function(t, e, r, i) {
                t = new l(t);
                return new(this._selectInputType(t, e, r))({
                    output: new m({
                        script: t.script,
                        satoshis: t.satoshis
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    sequenceNumber: t.sequenceNumber,
                    script: y.empty()
                }, ...e && r ? [e, r, !1, i] : [])
            }, b.prototype._fromEscrowUtxo = function(t, e) {
                const r = e.map(t => new T(t)),
                    i = r.slice(1),
                    s = r[0];
                t = new l(t), this.addInput(new A({
                    output: new m({
                        script: t.script,
                        satoshis: t.satoshis
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: y.empty()
                }, i, s))
            }, b.prototype._fromNonP2SH = function(t) {
                var e;
                e = (t = new l(t)).script.isPublicKeyHashOut() ? g : t.script.isPublicKeyOut() ? O : S, this.addInput(new e({
                    output: new m({
                        script: t.script,
                        satoshis: t.satoshis
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: y.empty()
                }))
            }, b.prototype._fromMultisigUtxo = function(t, e, r, i) {
                var n;
                if (s.checkArgument(r <= e.length, "Number of required signatures must be greater than the number of public keys"), (t = new l(t)).script.isMultisigOut()) n = E;
                else {
                    if (!t.script.isScriptHashOut()) throw new Error("@TODO");
                    n = P
                }
                this.addInput(new n({
                    output: new m({
                        script: t.script,
                        satoshis: t.satoshis
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: y.empty()
                }, e, r, void 0, i))
            }, b.prototype.addInput = function(t, e, r) {
                if (s.checkArgumentType(t, S, "input"), !t.output && (i.isUndefined(e) || i.isUndefined(r))) throw new o.Transaction.NeedMoreInfo("Need information about the UTXO script and satoshis");
                return t.output || !e || i.isUndefined(r) || (e = e instanceof y ? e : new y(e), s.checkArgumentType(r, "number", "satoshis"), t.output = new m({
                    script: e,
                    satoshis: r
                })), this.uncheckedAddInput(t)
            }, b.prototype.uncheckedAddInput = function(t) {
                return s.checkArgumentType(t, S, "input"), this.inputs.push(t), this._inputAmount = void 0, this._updateChangeOutput(), this
            }, b.prototype.hasAllUtxoInfo = function() {
                return i.every(this.inputs.map((function(t) {
                    return !!t.output
                })))
            }, b.prototype.fee = function(t) {
                return s.checkArgument(i.isNumber(t), "amount must be a number"), this._fee = t, this._updateChangeOutput(), this
            }, b.prototype.feePerKb = function(t) {
                return s.checkArgument(i.isNumber(t), "amount must be a number"), this._feePerKb = t, this._updateChangeOutput(), this
            }, b.prototype.feePerByte = function(t) {
                return s.checkArgument(i.isNumber(t), "amount must be a number"), this._feePerByte = t, this._updateChangeOutput(), this
            }, b.prototype.change = function(t) {
                return s.checkArgument(t, "address is required"), this._changeScript = y.fromAddress(t), this._updateChangeOutput(), this
            }, b.prototype.escrow = function(t, e) {
                s.checkArgument(this.inputs.length > 0, "inputs must have already been set when setting escrow"), s.checkArgument(this.outputs.length > 0, "non-change outputs must have already been set when setting escrow"), s.checkArgument(!this.getChangeOutput(), "change must still be unset when setting escrow"), s.checkArgument(t, "address is required"), s.checkArgument(e, "amount is required");
                const r = this._getOutputAmount() + this.getFee() + e,
                    i = this._getInputAmount() - r > b.DUST_AMOUNT;
                return this.to(t, e), i || (this._fee = void 0), this
            }, b.prototype.getChangeOutput = function() {
                return i.isUndefined(this._changeIndex) ? null : this.outputs[this._changeIndex]
            }, b.prototype.to = function(t, e) {
                if (i.isArray(t)) {
                    var r = this;
                    return i.each(t, (function(t) {
                        r.to(t.address, t.satoshis)
                    })), this
                }
                return s.checkArgument(c.isNaturalNumber(e), "Amount is expected to be a positive integer"), this.addOutput(new m({
                    script: y(new I(t)),
                    satoshis: e
                })), this
            }, b.prototype.addData = function(t) {
                return this.addOutput(new m({
                    script: y.buildDataOut(t),
                    satoshis: 0
                })), this
            }, b.prototype.addOutput = function(t) {
                return s.checkArgumentType(t, m, "output"), this._addOutput(t), this._updateChangeOutput(), this
            }, b.prototype.clearOutputs = function() {
                return this.outputs = [], this._clearSignatures(), this._outputAmount = void 0, this._changeIndex = void 0, this._updateChangeOutput(), this
            }, b.prototype._addOutput = function(t) {
                this.outputs.push(t), this._outputAmount = void 0
            }, b.prototype._getOutputAmount = function() {
                if (i.isUndefined(this._outputAmount)) {
                    var t = this;
                    this._outputAmount = 0, i.each(this.outputs, (function(e) {
                        t._outputAmount += e.satoshis
                    }))
                }
                return this._outputAmount
            }, b.prototype._getInputAmount = function() {
                return i.isUndefined(this._inputAmount) && (this._inputAmount = i.sumBy(this.inputs, (function(t) {
                    if (i.isUndefined(t.output)) throw new o.Transaction.Input.MissingPreviousOutput;
                    return t.output.satoshis
                }))), this._inputAmount
            }, b.prototype._updateChangeOutput = function() {
                if (this._changeScript) {
                    this._clearSignatures(), i.isUndefined(this._changeIndex) || this._removeOutput(this._changeIndex);
                    var t = this._getUnspentValue() - this.getFee();
                    t >= b.DUST_AMOUNT ? (this._changeIndex = this.outputs.length, this._addOutput(new m({
                        script: this._changeScript,
                        satoshis: t
                    }))) : this._changeIndex = void 0
                }
            }, b.prototype.getFee = function() {
                return this.isCoinbase() ? 0 : i.isUndefined(this._fee) ? this._changeScript ? this._estimateFee() : this._getUnspentValue() : this._fee
            }, b.prototype._estimateFee = function() {
                var t = this._estimateSize(),
                    e = this._getUnspentValue(),
                    r = this._feePerByte || (this._feePerKb || b.FEE_PER_KB) / 1e3;

                function i(t) {
                    return t * r
                }
                var s = Math.ceil(i(t)),
                    n = Math.ceil(i(t) + i(b.CHANGE_OUTPUT_MAX_SIZE));
                return !this._changeScript || e <= n ? s : n
            }, b.prototype._getUnspentValue = function() {
                return this._getInputAmount() - this._getOutputAmount()
            }, b.prototype._clearSignatures = function() {
                i.each(this.inputs, (function(t) {
                    t.clearSignatures()
                }))
            }, b.prototype._estimateSize = function() {
                var t = b.MAXIMUM_EXTRA_SIZE;
                return i.each(this.inputs, (function(e) {
                    let r = e._estimateSize(),
                        i = p.varintBufNum(r).length;
                    t += 36 + i + r
                })), i.each(this.outputs, (function(e) {
                    t += e.script.toBuffer().length + 9
                })), t
            }, b.prototype._removeOutput = function(t) {
                var e = this.outputs[t];
                this.outputs = i.without(this.outputs, e), this._outputAmount = void 0
            }, b.prototype.removeOutput = function(t) {
                this._removeOutput(t), this._updateChangeOutput()
            }, b.prototype.sort = function() {
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
            }, b.prototype.shuffleOutputs = function() {
                return this.sortOutputs(i.shuffle)
            }, b.prototype.sortOutputs = function(t) {
                var e = t(this.outputs);
                return this._newOutputOrder(e)
            }, b.prototype.sortInputs = function(t) {
                return this.inputs = t(this.inputs), this._clearSignatures(), this
            }, b.prototype._newOutputOrder = function(t) {
                if (this.outputs.length !== t.length || 0 !== i.difference(this.outputs, t).length) throw new o.Transaction.InvalidSorting;
                if (!i.isUndefined(this._changeIndex)) {
                    var e = this.outputs[this._changeIndex];
                    this._changeIndex = i.findIndex(t, e)
                }
                return this.outputs = t, this
            }, b.prototype.removeInput = function(t, e) {
                var r;
                if ((r = !e && i.isNumber(t) ? t : i.findIndex(this.inputs, (function(r) {
                        return r.prevTxId.toString("hex") === t && r.outputIndex === e
                    }))) < 0 || r >= this.inputs.length) throw new o.Transaction.InvalidIndex(r, this.inputs.length);
                var s = this.inputs[r];
                this.inputs = i.without(this.inputs, s), this._inputAmount = void 0, this._updateChangeOutput()
            }, b.prototype.sign = function(t, e, r) {
                r = r || "ecdsa", s.checkState(this.hasAllUtxoInfo(), "Not all utxo information is available to sign the transaction.");
                var n = this;
                return i.isArray(t) ? (i.each(t, (function(t) {
                    n.sign(t, e, r)
                })), this) : (i.each(this.getSignatures(t, e, r), (function(t) {
                    n.applySignature(t, r)
                })), this)
            }, b.prototype.getSignatures = function(t, e, r) {
                t = new R(t), e = e || _.SIGHASH_ALL | _.SIGHASH_FORKID;
                var s = this,
                    n = [],
                    u = f.sha256ripemd160(t.publicKey.toBuffer());
                return i.each(this.inputs, (function(o, h) {
                    i.each(o.getSignatures(s, t, h, e, u, r), (function(t) {
                        n.push(t)
                    }))
                })), n
            }, b.prototype.applySignature = function(t, e) {
                return this.inputs[t.inputIndex].addSignature(this, t, e), this
            }, b.prototype.isFullySigned = function() {
                return i.each(this.inputs, (function(t) {
                    if (t.isFullySigned === S.prototype.isFullySigned) throw new o.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction")
                })), i.every(i.map(this.inputs, (function(t) {
                    return t.isFullySigned()
                })))
            }, b.prototype.isValidSignature = function(t) {
                if (this.inputs[t.inputIndex].isValidSignature === S.prototype.isValidSignature) throw new o.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction");
                return this.inputs[t.inputIndex].isValidSignature(this, t)
            }, b.prototype.verifySignature = function(t, e, r, i, s, n, u) {
                return d.verify(this, t, e, r, i, s, n, u)
            }, b.prototype.verify = function() {
                if (0 === this.inputs.length) return "transaction txins empty";
                if (0 === this.outputs.length) return "transaction txouts empty";
                for (var t = new k(0), e = 0; e < this.outputs.length; e++) {
                    var r = this.outputs[e];
                    if (r.invalidSatoshis()) return "transaction txout " + e + " satoshis is invalid";
                    if (r._satoshisBN.gt(new k(b.MAX_MONEY, 10))) return "transaction txout " + e + " greater than MAX_MONEY";
                    if ((t = t.add(r._satoshisBN)).gt(new k(b.MAX_MONEY))) return "transaction txout " + e + " total output greater than MAX_MONEY"
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
            }, b.prototype.isZceSecured = function(t, e, r) {
                if (this.inputs.length > 65536) return !1;
                if (!this.inputs.every(t => t.script.isPublicKeyHashIn())) return !1;
                let i;
                try {
                    i = new b(t)
                } catch (t) {
                    return !1
                }
                const s = i.inputs[0];
                if (s.prevTxId.toString("hex") !== this.id) return !1;
                const n = this.outputs[s.outputIndex];
                if (!n) return !1;
                const u = this.uncheckedSerialize().length / 2 * r;
                if (n.toObject().satoshis < e + u) return !1;
                s.output = n;
                const o = t.length / 2;
                if (i.getFee() / o < r) return !1;
                const h = s.script.toASM().split(" ");
                if (3 !== h.length) return !1;
                const [c, a, p] = h, d = new T(a), I = this.inputs.map(t => new T(t.script.getPublicKey())), l = this.inputs.map(t => t.script.toASM().split(" ")[0]), S = _.SIGHASH_ALL | _.SIGHASH_FORKID;
                if (![c, ...l].every(t => t.endsWith(S.toString(16)))) return !1;
                const g = y.buildEscrowOut(I, d),
                    O = f.sha256ripemd160(g.toBuffer()),
                    P = n.script.getData(),
                    E = new y(p),
                    A = [O, f.sha256ripemd160(E.toBuffer()), P].map(t => t.toString("hex"));
                if (!A.every(t => t === A[0])) return !1;
                const m = _.fromString(c);
                m.nhashtype = S;
                return !!i.verifySignature(m, d, 0, E, n.satoshisBN, void 0, m.isSchnorr ? "schnorr" : "ecdsa")
            }, b.prototype.isCoinbase = function() {
                return 1 === this.inputs.length && this.inputs[0].isNull()
            }, b.prototype.setVersion = function(t) {
                return s.checkArgument(c.isNaturalNumber(t) && t <= 2, "Wrong version number"), this.version = t, this
            }, t.exports = b
        },
        6699: function(t, e, r) {
            t.exports = r(5958), t.exports.PublicKey = r(10316), t.exports.PublicKeyHash = r(10317), t.exports.MultiSig = r(10318), t.exports.MultiSigScriptHash = r(10319), t.exports.Escrow = r(10320)
        },
        7554: function(t, e, r) {
            var i = r(5870),
                s = r(5801),
                n = r(5709),
                u = r(5598),
                o = r(6275),
                h = r(5641),
                c = r(5640),
                a = r(5800),
                p = r(5490),
                f = r(53),
                _ = r(5661),
                d = (r(12), r(5513)),
                I = r(5587),
                l = r(10315),
                S = function t(e) {
                    return this instanceof t ? (this.chunks = [], d.isBuffer(e) ? t.fromBuffer(e) : e instanceof i ? t.fromAddress(e) : e instanceof t ? t.fromBuffer(e.toBuffer()) : f.isString(e) ? t.fromString(e) : void(f.isObject(e) && f.isArray(e.chunks) && this.set(e))) : new t(e)
                };
            S.prototype.set = function(t) {
                return p.checkArgument(f.isObject(t)), p.checkArgument(f.isArray(t.chunks)), this.chunks = t.chunks, this
            }, S.fromBuffer = function(t) {
                var e = new S;
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
            }, S.prototype.toBuffer = function() {
                for (var t = new n, e = 0; e < this.chunks.length; e++) {
                    var r = this.chunks[e],
                        i = r.opcodenum;
                    t.writeUInt8(r.opcodenum), r.buf && (i < o.OP_PUSHDATA1 ? t.write(r.buf) : i === o.OP_PUSHDATA1 ? (t.writeUInt8(r.len), t.write(r.buf)) : i === o.OP_PUSHDATA2 ? (t.writeUInt16LE(r.len), t.write(r.buf)) : i === o.OP_PUSHDATA4 && (t.writeUInt32LE(r.len), t.write(r.buf)))
                }
                return t.concat()
            }, S.fromASM = function(t) {
                var e = new S;
                e.chunks = [];
                for (var r = t.split(" "), i = 0; i < r.length;) {
                    var s = r[i],
                        n = o(s).toNumber();
                    if (f.isUndefined(n)) {
                        var u = Buffer.from(r[i], "hex"),
                            h = u.length;
                        h >= 0 && h < o.OP_PUSHDATA1 ? n = h : h < Math.pow(2, 8) ? n = o.OP_PUSHDATA1 : h < Math.pow(2, 16) ? n = o.OP_PUSHDATA2 : h < Math.pow(2, 32) && (n = o.OP_PUSHDATA4), e.chunks.push({
                            buf: u,
                            len: u.length,
                            opcodenum: n
                        }), i += 1
                    } else e.chunks.push({
                        opcodenum: n
                    }), i += 1
                }
                return e
            }, S.fromHex = function(t) {
                return new S(Buffer.from(t, "hex"))
            }, S.fromString = function(t) {
                if (I.isHexa(t) || 0 === t.length) return new S(Buffer.from(t, "hex"));
                var e = new S;
                e.chunks = [];
                for (var r = t.split(" "), i = 0; i < r.length;) {
                    var s = r[i],
                        n = o(s).toNumber();
                    if (f.isUndefined(n)) {
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
            }, S.prototype._chunkToString = function(t, e) {
                var r = t.opcodenum,
                    i = "asm" === e,
                    s = "";
                if (t.buf) i || r !== o.OP_PUSHDATA1 && r !== o.OP_PUSHDATA2 && r !== o.OP_PUSHDATA4 || (s = s + " " + o(r).toString()), t.len > 0 && (s = i ? s + " " + t.buf.toString("hex") : s + " " + t.len + " 0x" + t.buf.toString("hex"));
                else if (void 0 !== o.reverseMap[r]) i ? 0 === r ? s += " 0" : 79 === r ? s += " -1" : s = s + " " + o(r).toString() : s = s + " " + o(r).toString();
                else {
                    var n = r.toString(16);
                    n.length % 2 != 0 && (n = "0" + n), s = i ? s + " " + n : s + " 0x" + n
                }
                return s
            }, S.prototype.toASM = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var r = this.chunks[e];
                    t += this._chunkToString(r, "asm")
                }
                return t.substr(1)
            }, S.prototype.toString = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var r = this.chunks[e];
                    t += this._chunkToString(r)
                }
                return t.substr(1)
            }, S.prototype.toHex = function() {
                return this.toBuffer().toString("hex")
            }, S.prototype.inspect = function() {
                return "<Script: " + this.toString() + ">"
            }, S.prototype.isPublicKeyHashOut = function() {
                return !(5 !== this.chunks.length || this.chunks[0].opcodenum !== o.OP_DUP || this.chunks[1].opcodenum !== o.OP_HASH160 || !this.chunks[2].buf || 20 !== this.chunks[2].buf.length || this.chunks[3].opcodenum !== o.OP_EQUALVERIFY || this.chunks[4].opcodenum !== o.OP_CHECKSIG)
            }, S.prototype.isPublicKeyHashIn = function() {
                if (2 === this.chunks.length) {
                    var t = this.chunks[0].buf,
                        e = this.chunks[1].buf;
                    if (t && t.length && e && e.length) {
                        var r = e[0];
                        if ((4 === r || 6 === r || 7 === r) && 65 === e.length) return !0;
                        if ((3 === r || 2 === r) && 33 === e.length) return !0
                    }
                }
                return !1
            }, S.prototype.getPublicKey = function() {
                return p.checkState(this.isPublicKeyOut() || this.isPublicKeyHashIn(), "Can't retrieve PublicKey from a non-PK output or non-PKH input"), this.isPublicKeyOut() ? this.chunks[0].buf : this.chunks[1].buf
            }, S.prototype.getPublicKeyHash = function() {
                return p.checkState(this.isPublicKeyHashOut(), "Can't retrieve PublicKeyHash from a non-PKH output"), this.chunks[2].buf
            }, S.prototype.isPublicKeyOut = function() {
                if (2 === this.chunks.length && this.chunks[0].buf && this.chunks[0].buf.length && this.chunks[1].opcodenum === o.OP_CHECKSIG) {
                    var t = this.chunks[0].buf,
                        e = t[0],
                        r = !1;
                    if ((4 !== e && 6 !== e && 7 !== e || 65 !== t.length) && (3 !== e && 2 !== e || 33 !== t.length) || (r = !0), r) return h.isValid(t)
                }
                return !1
            }, S.prototype.isPublicKeyIn = function() {
                if (1 === this.chunks.length) {
                    var t = this.chunks[0].buf;
                    if (t && t.length && 48 === t[0]) return !0
                }
                return !1
            }, S.prototype.isScriptHashOut = function() {
                var t = this.toBuffer();
                return 23 === t.length && t[0] === o.OP_HASH160 && 20 === t[1] && t[t.length - 1] === o.OP_EQUAL
            }, S.prototype.isScriptHashIn = function() {
                if (this.chunks.length <= 1) return !1;
                var t, e = this.chunks[this.chunks.length - 1].buf;
                if (!e) return !1;
                try {
                    t = S.fromBuffer(e)
                } catch (t) {
                    if (t instanceof _.Script.InvalidBuffer) return !1;
                    throw t
                }
                return t.classify() !== S.types.UNKNOWN
            }, S.prototype.isMultisigOut = function() {
                return this.chunks.length > 3 && o.isSmallIntOp(this.chunks[0].opcodenum) && this.chunks.slice(1, this.chunks.length - 2).every((function(t) {
                    return t.buf && d.isBuffer(t.buf)
                })) && o.isSmallIntOp(this.chunks[this.chunks.length - 2].opcodenum) && this.chunks[this.chunks.length - 1].opcodenum === o.OP_CHECKMULTISIG
            }, S.prototype.isMultisigIn = function() {
                return this.chunks.length >= 2 && 0 === this.chunks[0].opcodenum && this.chunks.slice(1, this.chunks.length).every((function(t) {
                    return t.buf && d.isBuffer(t.buf) && c.isTxDER(t.buf)
                }))
            }, S.prototype.isDataOut = function() {
                if (!(this.chunks.length >= 1 && this.chunks[0].opcodenum === o.OP_RETURN && this.toBuffer().length <= 223)) return !1;
                var t = this.chunks.slice(1);
                return new S({
                    chunks: t
                }).isPushOnly()
            }, S.prototype.getData = function() {
                if (this.isDataOut() || this.isScriptHashOut()) return f.isUndefined(this.chunks[1]) ? Buffer.alloc(0) : Buffer.from(this.chunks[1].buf);
                if (this.isPublicKeyHashOut()) return Buffer.from(this.chunks[2].buf);
                throw new Error("Unrecognized script type to get data from")
            }, S.prototype.isPushOnly = function() {
                return f.every(this.chunks, (function(t) {
                    return t.opcodenum <= o.OP_16 || t.opcodenum === o.OP_PUSHDATA1 || t.opcodenum === o.OP_PUSHDATA2 || t.opcodenum === o.OP_PUSHDATA4
                }))
            }, (S.types = {}).UNKNOWN = "Unknown", S.types.PUBKEY_OUT = "Pay to public key", S.types.PUBKEY_IN = "Spend from public key", S.types.PUBKEYHASH_OUT = "Pay to public key hash", S.types.PUBKEYHASH_IN = "Spend from public key hash", S.types.SCRIPTHASH_OUT = "Pay to script hash", S.types.SCRIPTHASH_IN = "Spend from script hash", S.types.MULTISIG_OUT = "Pay to multisig", S.types.MULTISIG_IN = "Spend from multisig", S.types.DATA_OUT = "Data push", S.OP_RETURN_STANDARD_SIZE = 220, S.prototype.classify = function() {
                if (this._isInput) return this.classifyInput();
                if (this._isOutput) return this.classifyOutput();
                var t = this.classifyOutput();
                return t != S.types.UNKNOWN ? t : this.classifyInput()
            }, (S.outputIdentifiers = {}).PUBKEY_OUT = S.prototype.isPublicKeyOut, S.outputIdentifiers.PUBKEYHASH_OUT = S.prototype.isPublicKeyHashOut, S.outputIdentifiers.MULTISIG_OUT = S.prototype.isMultisigOut, S.outputIdentifiers.SCRIPTHASH_OUT = S.prototype.isScriptHashOut, S.outputIdentifiers.DATA_OUT = S.prototype.isDataOut, S.prototype.classifyOutput = function() {
                for (var t in S.outputIdentifiers)
                    if (S.outputIdentifiers[t].bind(this)()) return S.types[t];
                return S.types.UNKNOWN
            }, (S.inputIdentifiers = {}).PUBKEY_IN = S.prototype.isPublicKeyIn, S.inputIdentifiers.PUBKEYHASH_IN = S.prototype.isPublicKeyHashIn, S.inputIdentifiers.MULTISIG_IN = S.prototype.isMultisigIn, S.inputIdentifiers.SCRIPTHASH_IN = S.prototype.isScriptHashIn, S.prototype.classifyInput = function() {
                for (var t in S.inputIdentifiers)
                    if (S.inputIdentifiers[t].bind(this)()) return S.types[t];
                return S.types.UNKNOWN
            }, S.prototype.isStandard = function() {
                return this.classify() !== S.types.UNKNOWN
            }, S.prototype.prepend = function(t) {
                return this._addByType(t, !0), this
            }, S.prototype.equals = function(t) {
                if (p.checkState(t instanceof S, "Must provide another script"), this.chunks.length !== t.chunks.length) return !1;
                var e;
                for (e = 0; e < this.chunks.length; e++) {
                    if (d.isBuffer(this.chunks[e].buf) && !d.isBuffer(t.chunks[e].buf)) return !1;
                    if (d.isBuffer(this.chunks[e].buf) && !d.equals(this.chunks[e].buf, t.chunks[e].buf)) return !1;
                    if (this.chunks[e].opcodenum !== t.chunks[e].opcodenum) return !1
                }
                return !0
            }, S.prototype.add = function(t) {
                return this._addByType(t, !1), this
            }, S.prototype._addByType = function(t, e) {
                if ("string" == typeof t) this._addOpcode(t, e);
                else if ("number" == typeof t) this._addOpcode(t, e);
                else if (t instanceof o) this._addOpcode(t, e);
                else if (d.isBuffer(t)) this._addBuffer(t, e);
                else if (t instanceof S) this.chunks = this.chunks.concat(t.chunks);
                else {
                    if ("object" != typeof t) throw new Error("Invalid script chunk");
                    this._insertAtPosition(t, e)
                }
            }, S.prototype._insertAtPosition = function(t, e) {
                e ? this.chunks.unshift(t) : this.chunks.push(t)
            }, S.prototype._addOpcode = function(t, e) {
                var r;
                return r = "number" == typeof t ? t : t instanceof o ? t.toNumber() : o(t).toNumber(), this._insertAtPosition({
                    opcodenum: r
                }, e), this
            }, S.prototype._addBuffer = function(t, e) {
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
            }, S.prototype.removeCodeseparators = function() {
                for (var t = [], e = 0; e < this.chunks.length; e++) this.chunks[e].opcodenum !== o.OP_CODESEPARATOR && t.push(this.chunks[e]);
                return this.chunks = t, this
            }, S.buildEscrowOut = function(t, e) {
                p.checkArgument(t.length < 65536, "Number of input public keys exceeds 65,536"), p.checkArgument(t.length > 0, "Must provide at least one input public key"), p.checkArgument(e, "Must provide a reclaim public key");
                const r = new S;
                return l.generateRedeemScriptOperations(t, e).forEach(t => r.add(t)), r
            }, S.buildMultisigOut = function(t, e, r) {
                p.checkArgument(e <= t.length, "Number of required signatures must be less than or equal to the number of public keys"), r = r || {};
                var i = new S;
                i.add(o.smallInt(e));
                var s = t = f.map(t, h);
                r.noSorting || (s = f.sortBy(t, (function(t) {
                    return t.toString("hex")
                })));
                for (var n = 0; n < s.length; n++) {
                    var u = s[n];
                    i.add(u.toBuffer())
                }
                return i.add(o.smallInt(t.length)), i.add(o.OP_CHECKMULTISIG), i
            }, S.buildMultisigIn = function(t, e, r, i) {
                p.checkArgument(f.isArray(t)), p.checkArgument(f.isNumber(e)), p.checkArgument(f.isArray(r)), i = i || {};
                var s = new S;
                if ("schnorr" === i.signingMethod && i.checkBits) {
                    let e = Buffer.from(i.checkBits).reverse().join(""),
                        r = parseInt(e, 2),
                        n = parseInt(r.toString(16), 16),
                        u = t.length;
                    u >= 1 && u <= 4 ? s.add(o(n)) : u >= 5 && u <= 8 ? 129 === n ? s.add(o("OP_1NEGATE")) : n > 16 ? (s.add(1), s.add(n)) : s.add(o(n)) : u >= 9 && u <= 16 ? (s.add(2), s.add(n)) : u >= 17 && u <= 20 && (s.add(3), s.add(n))
                } else s.add(o.OP_0);
                return f.each(r, (function(t) {
                    p.checkArgument(d.isBuffer(t), "Signatures must be an array of Buffers"), s.add(t)
                })), s
            }, S.buildP2SHMultisigIn = function(t, e, r, i) {
                p.checkArgument(f.isArray(t)), p.checkArgument(f.isNumber(e)), p.checkArgument(f.isArray(r)), i = i || {};
                var s = new S;
                if ("schnorr" === i.signingMethod && i.checkBits) {
                    let e = Buffer.from(i.checkBits).reverse().join(""),
                        r = parseInt(e, 2),
                        n = parseInt(r.toString(16), 16),
                        u = t.length;
                    u >= 1 && u <= 4 ? s.add(o.smallInt(r)) : u >= 5 && u <= 8 ? 129 === n ? s.add(o("OP_1NEGATE")) : n > 16 ? (s.add(1), s.add(n)) : s.add(o.smallInt(r)) : u >= 9 && u <= 16 ? (s.add(2), s.add(n)) : u >= 17 && u <= 20 && (s.add(3), s.add(n))
                } else s.add(o.OP_0);
                return f.each(r, (function(t) {
                    p.checkArgument(d.isBuffer(t), "Signatures must be an array of Buffers"), s.add(t)
                })), s.add((i.cachedMultisig || S.buildMultisigOut(t, e, i)).toBuffer()), s
            }, S.buildPublicKeyHashOut = function(t) {
                p.checkArgument(!f.isUndefined(t)), p.checkArgument(t instanceof h || t instanceof i || f.isString(t)), t instanceof h ? t = t.toAddress() : f.isString(t) && (t = new i(t));
                var e = new S;
                return e.add(o.OP_DUP).add(o.OP_HASH160).add(t.hashBuffer).add(o.OP_EQUALVERIFY).add(o.OP_CHECKSIG), e._network = t.network, e
            }, S.buildPublicKeyOut = function(t) {
                p.checkArgument(t instanceof h);
                var e = new S;
                return e.add(t.toBuffer()).add(o.OP_CHECKSIG), e
            }, S.buildDataOut = function(t, e) {
                p.checkArgument(f.isUndefined(t) || f.isString(t) || d.isBuffer(t)), f.isString(t) && (t = Buffer.from(t, e));
                var r = new S;
                return r.add(o.OP_RETURN), f.isUndefined(t) || r.add(t), r
            }, S.buildScriptHashOut = function(t) {
                p.checkArgument(t instanceof S || t instanceof i && t.isPayToScriptHash());
                var e = new S;
                return e.add(o.OP_HASH160).add(t instanceof i ? t.hashBuffer : u.sha256ripemd160(t.toBuffer())).add(o.OP_EQUAL), e._network = t._network || t.network, e
            }, S.buildPublicKeyIn = function(t, e) {
                p.checkArgument(t instanceof c || d.isBuffer(t)), p.checkArgument(f.isUndefined(e) || f.isNumber(e)), t instanceof c && (t = t.toBuffer());
                var r = new S;
                return r.add(d.concat([t, d.integerAsSingleByteBuffer(e || c.SIGHASH_ALL)])), r
            }, S.buildPublicKeyHashIn = function(t, e, r) {
                return p.checkArgument(e instanceof c || d.isBuffer(e)), p.checkArgument(f.isUndefined(r) || f.isNumber(r)), e instanceof c && (e = e.toBuffer()), (new S).add(d.concat([e, d.integerAsSingleByteBuffer(r || c.SIGHASH_ALL)])).add(new h(t).toBuffer())
            }, S.buildEscrowIn = function(t, e, r) {
                p.checkArgument(e instanceof c);
                const i = c.SIGHASH_ALL | c.SIGHASH_FORKID;
                return (new S).add(d.concat([e.toBuffer("schnorr"), d.integerAsSingleByteBuffer(i)])).add(t.toBuffer()).add(r.toBuffer())
            }, S.empty = function() {
                return new S
            }, S.prototype.toScriptHashOut = function() {
                return S.buildScriptHashOut(this)
            }, S.fromAddress = function(t) {
                if ((t = i(t)).isPayToScriptHash()) return S.buildScriptHashOut(t);
                if (t.isPayToPublicKeyHash()) return S.buildPublicKeyHashOut(t);
                throw new _.Script.UnrecognizedAddress(t)
            }, S.prototype.getAddressInfo = function(t) {
                if (this._isInput) return this._getInputAddressInfo();
                if (this._isOutput) return this._getOutputAddressInfo();
                var e = this._getOutputAddressInfo();
                return e || this._getInputAddressInfo()
            }, S.prototype._getOutputAddressInfo = function() {
                var t = {};
                if (this.isScriptHashOut()) t.hashBuffer = this.getData(), t.type = i.PayToScriptHash;
                else {
                    if (!this.isPublicKeyHashOut()) return !1;
                    t.hashBuffer = this.getData(), t.type = i.PayToPublicKeyHash
                }
                return t
            }, S.prototype._getInputAddressInfo = function() {
                var t = {};
                if (this.isPublicKeyHashIn()) t.hashBuffer = u.sha256ripemd160(this.chunks[1].buf), t.type = i.PayToPublicKeyHash;
                else {
                    if (!this.isScriptHashIn()) return !1;
                    t.hashBuffer = u.sha256ripemd160(this.chunks[this.chunks.length - 1].buf), t.type = i.PayToScriptHash
                }
                return t
            }, S.prototype.toAddress = function(t) {
                var e = this.getAddressInfo();
                return !!e && (e.network = a.get(t) || this._network || a.defaultNetwork, new i(e))
            }, S.prototype.findAndDelete = function(t) {
                for (var e = t.toBuffer().toString("hex"), r = 0; r < this.chunks.length; r++) {
                    e === S({
                        chunks: [this.chunks[r]]
                    }).toBuffer().toString("hex") && this.chunks.splice(r, 1)
                }
                return this
            }, S.prototype.checkMinimalPush = function(t) {
                var e = this.chunks[t],
                    r = e.buf,
                    i = e.opcodenum;
                return !r || (0 === r.length ? i === o.OP_0 : !(1 === r.length && r[0] >= 1 && r[0] <= 16) && ((1 !== r.length || 129 !== r[0]) && (r.length <= 75 ? i === r.length : r.length <= 255 ? i === o.OP_PUSHDATA1 : !(r.length <= 65535) || i === o.OP_PUSHDATA2)))
            }, S.prototype._decodeOP_N = function(t) {
                if (t === o.OP_0) return 0;
                if (t >= o.OP_1 && t <= o.OP_16) return t - (o.OP_1 - 1);
                throw new Error("Invalid opcode: " + JSON.stringify(t))
            }, S.prototype.getSignatureOperationsCount = function(t) {
                t = !!f.isUndefined(t) || t;
                var e = this,
                    r = 0,
                    i = o.OP_INVALIDOPCODE;
                return f.each(e.chunks, (function(s) {
                    var n = s.opcodenum;
                    n == o.OP_CHECKSIG || n == o.OP_CHECKSIGVERIFY ? r++ : n != o.OP_CHECKMULTISIG && n != o.OP_CHECKMULTISIGVERIFY || (t && i >= o.OP_1 && i <= o.OP_16 ? r += e._decodeOP_N(i) : r += 20), i = n
                })), r
            }, t.exports = S
        },
        7555: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(7554),
                n = r(6275),
                u = r(5586),
                o = r(5598),
                h = r(5640),
                c = r(5641),
                a = r(6696),
                p = r(6697),
                f = function t(e) {
                    if (!(this instanceof t)) return new t(e);
                    e ? (this.initialize(), this.set(e)) : this.initialize()
                };
            f.prototype.verify = function(t, e, n, u, o, h) {
                var c, a = r(6276);
                if (i.isUndefined(n) && (n = new a), i.isUndefined(u) && (u = 0), i.isUndefined(o) && (o = 0), o & f.SCRIPT_ENABLE_SIGHASH_FORKID && (o |= f.SCRIPT_VERIFY_STRICTENC, !h)) throw new Error("internal error - need satoshisBN to verify FORKID transactions");
                if (this.set({
                        script: t,
                        tx: n,
                        nin: u,
                        flags: o,
                        satoshisBN: h
                    }), 0 != (o & f.SCRIPT_VERIFY_SIGPUSHONLY) && !t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                if (!this.evaluate()) return !1;
                o & f.SCRIPT_VERIFY_P2SH && (c = this.stack.slice());
                var p = this.stack;
                if (this.initialize(), this.set({
                        script: e,
                        stack: p,
                        tx: n,
                        nin: u,
                        flags: o,
                        satoshisBN: h
                    }), !this.evaluate()) return !1;
                if (0 === this.stack.length) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_RESULT", !1;
                var _ = this.stack[this.stack.length - 1];
                if (!f.castToBool(_)) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK", !1;
                if (o & f.SCRIPT_VERIFY_P2SH && e.isScriptHashOut()) {
                    if (!t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                    if (0 === c.length) throw new Error("internal error - stack copy empty");
                    var d = c[c.length - 1],
                        I = s.fromBuffer(d);
                    if (c.pop(), this.initialize(), this.set({
                            script: I,
                            stack: c,
                            tx: n,
                            nin: u,
                            flags: o,
                            satoshisBN: h
                        }), !this.evaluate()) return !1;
                    if (0 === c.length) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_P2SH_STACK", !1;
                    if (!f.castToBool(c[c.length - 1])) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_P2SH_STACK", !1
                }
                if (0 != (o & f.SCRIPT_VERIFY_CLEANSTACK)) {
                    if (0 == (o & f.SCRIPT_VERIFY_P2SH)) throw new Error("internal error - CLEANSTACK without P2SH");
                    if (1 != c.length) return this.errstr = "SCRIPT_ERR_CLEANSTACK", !1
                }
                return !0
            }, t.exports = f, f.prototype.initialize = function(t) {
                this.stack = [], this.altstack = [], this.pc = 0, this.pbegincodehash = 0, this.nOpCount = 0, this.vfExec = [], this.errstr = "", this.flags = 0
            }, f.prototype.set = function(t) {
                this.script = t.script || this.script, this.tx = t.tx || this.tx, this.nin = void 0 !== t.nin ? t.nin : this.nin, this.satoshisBN = t.satoshisBN || this.satoshisBN, this.stack = t.stack || this.stack, this.altstack = t.altack || this.altstack, this.pc = void 0 !== t.pc ? t.pc : this.pc, this.pbegincodehash = void 0 !== t.pbegincodehash ? t.pbegincodehash : this.pbegincodehash, this.nOpCount = void 0 !== t.nOpCount ? t.nOpCount : this.nOpCount, this.vfExec = t.vfExec || this.vfExec, this.errstr = t.errstr || this.errstr, this.flags = void 0 !== t.flags ? t.flags : this.flags
            }, f.true = Buffer.from([1]), f.false = Buffer.from([]), f.MAX_SCRIPT_ELEMENT_SIZE = 520, f.MAXIMUM_ELEMENT_SIZE = 4, f.LOCKTIME_THRESHOLD_BN = new u(f.LOCKTIME_THRESHOLD = 5e8), f.SCRIPT_VERIFY_NONE = 0, f.SCRIPT_VERIFY_P2SH = 1, f.SCRIPT_VERIFY_STRICTENC = 2, f.SCRIPT_VERIFY_DERSIG = 4, f.SCRIPT_VERIFY_LOW_S = 8, f.SCRIPT_VERIFY_NULLDUMMY = 16, f.SCRIPT_VERIFY_SIGPUSHONLY = 32, f.SCRIPT_VERIFY_MINIMALDATA = 64, f.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 128, f.SCRIPT_VERIFY_CLEANSTACK = 256, f.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY = 512, f.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY = 1024, f.SCRIPT_VERIFY_MINIMALIF = 8192, f.SCRIPT_VERIFY_NULLFAIL = 16384, f.SCRIPT_VERIFY_COMPRESSED_PUBKEYTYPE = 32768, f.SCRIPT_ENABLE_SIGHASH_FORKID = 65536, f.SCRIPT_ENABLE_REPLAY_PROTECTION = 1 << 17, f.SCRIPT_ENABLE_CHECKDATASIG = 1 << 18, f.SCRIPT_DISALLOW_SEGWIT_RECOVERY = 1 << 20, f.SCRIPT_ENABLE_SCHNORR_MULTISIG = 1 << 21, f.SEQUENCE_LOCKTIME_DISABLE_FLAG = 1 << 31, f.SEQUENCE_LOCKTIME_TYPE_FLAG = 1 << 22, f.SEQUENCE_LOCKTIME_MASK = 65535, f.castToBool = function(t) {
                for (var e = 0; e < t.length; e++)
                    if (0 !== t[e]) return e !== t.length - 1 || 128 !== t[e];
                return !1
            }, f.isSchnorrSig = function(t) {
                return (64 === t.length || 65 === t.length) && 48 !== t[0]
            }, f.prototype.checkRawSignatureEncoding = function(t) {
                return !!f.isSchnorrSig(t) || (0 == (this.flags & (f.SCRIPT_VERIFY_DERSIG | f.SCRIPT_VERIFY_LOW_S | f.SCRIPT_VERIFY_STRICTENC)) || h.isDER(t) ? !(0 != (this.flags & f.SCRIPT_VERIFY_LOW_S) && !h.fromTxFormat(t).hasLowS()) || (this.errstr = "SCRIPT_ERR_SIG_DER_HIGH_S", !1) : (this.errstr = "SCRIPT_ERR_SIG_DER_INVALID_FORMAT", !1))
            }, f.prototype.checkSignatureEncoding = f.prototype.checkTxSignatureEncoding = function(t) {
                if (0 == t.length) return !0;
                if (!this.checkRawSignatureEncoding(t.slice(0, t.length - 1))) return !1;
                if (0 != (this.flags & f.SCRIPT_VERIFY_STRICTENC)) {
                    var e = h.fromTxFormat(t);
                    if (!e.hasDefinedHashtype()) return this.errstr = "SCRIPT_ERR_SIG_HASHTYPE", !1;
                    if (!(this.flags & f.SCRIPT_ENABLE_SIGHASH_FORKID) && e.nhashtype & h.SIGHASH_FORKID) return this.errstr = "SCRIPT_ERR_ILLEGAL_FORKID", !1;
                    if (this.flags & f.SCRIPT_ENABLE_SIGHASH_FORKID && !(e.nhashtype & h.SIGHASH_FORKID)) return this.errstr = "SCRIPT_ERR_MUST_USE_FORKID", !1
                }
                return !0
            }, f.prototype.checkDataSignatureEncoding = function(t) {
                return 0 == t.length || this.checkRawSignatureEncoding(t)
            }, f.prototype.checkPubkeyEncoding = function(t) {
                return !(0 != (this.flags & f.SCRIPT_VERIFY_STRICTENC) && !c.isValid(t) && ! function(t) {
                    switch (t.length) {
                        case 33:
                            return 2 === t[0] || 3 === t[0];
                        case 64:
                            return 4 === t[0];
                        default:
                            return !1
                    }
                }(t)) || (this.errstr = "SCRIPT_ERR_PUBKEYTYPE", !1)
            }, f._isMinimallyEncoded = function(t, e) {
                return e = e || f.MAXIMUM_ELEMENT_SIZE, !(t.length > e) && !(t.length > 0 && 0 == (127 & t[t.length - 1]) && (t.length <= 1 || 0 == (128 & t[t.length - 2])))
            }, f._minimallyEncode = function(t) {
                if (0 == t.length) return t;
                var e = t[t.length - 1];
                if (127 & e) return t;
                if (1 == t.length) return Buffer.from("");
                if (128 & t[t.length - 2]) return t;
                for (var r = t.length - 1; r > 0; r--)
                    if (0 != t[r - 1]) return 128 & t[r - 1] ? t[r++] = e : t[r - 1] |= e, t.slice(0, r);
                return Buffer.from("")
            }, f.prototype.evaluate = function() {
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
            }, f.prototype.checkLockTime = function(t) {
                return !!(this.tx.nLockTime < f.LOCKTIME_THRESHOLD && t.lt(f.LOCKTIME_THRESHOLD_BN) || this.tx.nLockTime >= f.LOCKTIME_THRESHOLD && t.gte(f.LOCKTIME_THRESHOLD_BN)) && (!t.gt(new u(this.tx.nLockTime)) && !!this.tx.inputs[this.nin].isFinal())
            }, f.prototype.checkSequence = function(t) {
                var e = this.tx.inputs[this.nin].sequenceNumber;
                if (this.tx.version < 2) return !1;
                if (e & SEQUENCE_LOCKTIME_DISABLE_FLAG) return !1;
                var r = f.SEQUENCE_LOCKTIME_TYPE_FLAG | f.SEQUENCE_LOCKTIME_MASK,
                    i = new u(e & r),
                    s = t.and(r),
                    n = new u(f.SEQUENCE_LOCKTIME_TYPE_FLAG);
                return !!(i.lt(n) && s.lt(n) || i.gte(n) && s.gte(n)) && !s.gt(i)
            }, f.prototype.step = function() {
                var t = this;

                function e(e) {
                    return t.stack[t.stack.length + e]
                }
                var r, _, d, I, l, S, g, O, P, E, A, m, y, R, T, k, b, N, v = 0 != (this.flags & f.SCRIPT_VERIFY_MINIMALDATA),
                    C = -1 === this.vfExec.indexOf(!1),
                    w = this.script.chunks[this.pc];
                this.pc++;
                var B, L = w.opcodenum;
                if (i.isUndefined(L)) return this.errstr = "SCRIPT_ERR_UNDEFINED_OPCODE", !1;
                if (w.buf && w.buf.length > f.MAX_SCRIPT_ELEMENT_SIZE) return this.errstr = "SCRIPT_ERR_PUSH_SIZE", !1;
                if (L > n.OP_16 && ++this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                if (function(t) {
                        switch (t) {
                            case n.OP_INVERT:
                            case n.OP_2MUL:
                            case n.OP_2DIV:
                            case n.OP_MUL:
                            case n.OP_LSHIFT:
                            case n.OP_RSHIFT:
                                return !0;
                            case n.OP_DIV:
                            case n.OP_MOD:
                            case n.OP_SPLIT:
                            case n.OP_CAT:
                            case n.OP_AND:
                            case n.OP_OR:
                            case n.OP_XOR:
                            case n.OP_BIN2NUM:
                            case n.OP_NUM2BIN:
                                return !1
                        }
                        return !1
                    }(L)) return this.errstr = "SCRIPT_ERR_DISABLED_OPCODE", !1;
                if (C && 0 <= L && L <= n.OP_PUSHDATA4) {
                    if (v && !this.script.checkMinimalPush(this.pc - 1)) return this.errstr = "SCRIPT_ERR_MINIMALDATA", !1;
                    if (w.buf) {
                        if (w.len !== w.buf.length) throw new Error("Length of push value not equal to length of data");
                        this.stack.push(w.buf)
                    } else this.stack.push(f.false)
                } else if (C || n.OP_IF <= L && L <= n.OP_ENDIF) switch (L) {
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
                        l = L - (n.OP_1 - 1), r = new u(l).toScriptNumBuffer(), this.stack.push(r);
                        break;
                    case n.OP_NOP:
                        break;
                    case n.OP_NOP2:
                    case n.OP_CHECKLOCKTIMEVERIFY:
                        if (!(this.flags & f.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY)) {
                            if (this.flags & f.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                            break
                        }
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var U = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], v, 5);
                        if (U.lt(new u(0))) return this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME", !1;
                        if (!this.checkLockTime(U)) return this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME", !1;
                        break;
                    case n.OP_NOP3:
                    case n.OP_CHECKSEQUENCEVERIFY:
                        if (!(this.flags & f.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY)) {
                            if (this.flags & f.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                            break
                        }
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var x = u.fromScriptNumBuffer(e(-1), v, 5);
                        if (x.lt(new u(0))) return this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME", !1;
                        if (0 != (x & f.SEQUENCE_LOCKTIME_DISABLE_FLAG)) break;
                        if (!this.checkSequence(x)) return this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME", !1;
                        break;
                    case n.OP_NOP1:
                    case n.OP_NOP4:
                    case n.OP_NOP5:
                    case n.OP_NOP6:
                    case n.OP_NOP7:
                    case n.OP_NOP8:
                    case n.OP_NOP9:
                    case n.OP_NOP10:
                        if (this.flags & f.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                        break;
                    case n.OP_IF:
                    case n.OP_NOTIF:
                        if (b = !1, C) {
                            if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                            if (r = e(-1), this.flags & f.SCRIPT_VERIFY_MINIMALIF) {
                                if (r.length > 1) return this.errstr = "SCRIPT_ERR_MINIMALIF", !1;
                                if (1 == r.length && 1 != r[0]) return this.errstr = "SCRIPT_ERR_MINIMALIF", !1
                            }
                            b = f.castToBool(r), L === n.OP_NOTIF && (b = !b), this.stack.pop()
                        }
                        this.vfExec.push(b);
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
                        if (r = e(-1), !(b = f.castToBool(r))) return this.errstr = "SCRIPT_ERR_VERIFY", !1;
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
                        _ = e(-2), d = e(-1), this.stack.push(_), this.stack.push(d);
                        break;
                    case n.OP_3DUP:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = e(-3), d = e(-2);
                        var H = e(-1);
                        this.stack.push(_), this.stack.push(d), this.stack.push(H);
                        break;
                    case n.OP_2OVER:
                        if (this.stack.length < 4) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = e(-4), d = e(-3), this.stack.push(_), this.stack.push(d);
                        break;
                    case n.OP_2ROT:
                        if (this.stack.length < 6) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        I = this.stack.splice(this.stack.length - 6, 2), this.stack.push(I[0]), this.stack.push(I[1]);
                        break;
                    case n.OP_2SWAP:
                        if (this.stack.length < 4) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        I = this.stack.splice(this.stack.length - 4, 2), this.stack.push(I[0]), this.stack.push(I[1]);
                        break;
                    case n.OP_IFDUP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        r = e(-1), (b = f.castToBool(r)) && this.stack.push(r);
                        break;
                    case n.OP_DEPTH:
                        r = new u(this.stack.length).toScriptNumBuffer(), this.stack.push(r);
                        break;
                    case n.OP_DROP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.pop();
                        break;
                    case n.OP_DUP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.push(e(-1));
                        break;
                    case n.OP_NIP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.splice(this.stack.length - 2, 1);
                        break;
                    case n.OP_OVER:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.push(e(-2));
                        break;
                    case n.OP_PICK:
                    case n.OP_ROLL:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (r = e(-1), l = (O = u.fromScriptNumBuffer(r, v)).toNumber(), this.stack.pop(), l < 0 || l >= this.stack.length) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        r = e(-l - 1), L === n.OP_ROLL && this.stack.splice(this.stack.length - l - 1, 1), this.stack.push(r);
                        break;
                    case n.OP_ROT:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        S = e(-3), g = e(-2);
                        var K = e(-1);
                        this.stack[this.stack.length - 3] = g, this.stack[this.stack.length - 2] = K, this.stack[this.stack.length - 1] = S;
                        break;
                    case n.OP_SWAP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        S = e(-2), g = e(-1), this.stack[this.stack.length - 2] = g, this.stack[this.stack.length - 1] = S;
                        break;
                    case n.OP_TUCK:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.splice(this.stack.length - 2, 0, e(-1));
                        break;
                    case n.OP_SIZE:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        O = new u(e(-1).length), this.stack.push(O.toScriptNumBuffer());
                        break;
                    case n.OP_AND:
                    case n.OP_OR:
                    case n.OP_XOR:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (_ = e(-2), d = e(-1), _.length !== d.length) return this.errstr = "SCRIPT_ERR_INVALID_OPERAND_SIZE", !1;
                        switch (L) {
                            case n.OP_AND:
                                for (var D = 0; D < _.length; D++) _[D] &= d[D];
                                break;
                            case n.OP_OR:
                                for (D = 0; D < _.length; D++) _[D] |= d[D];
                                break;
                            case n.OP_XOR:
                                for (D = 0; D < _.length; D++) _[D] ^= d[D]
                        }
                        this.stack.pop();
                        break;
                    case n.OP_EQUAL:
                    case n.OP_EQUALVERIFY:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = e(-2), d = e(-1);
                        var M = _.toString("hex") === d.toString("hex");
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(M ? f.true : f.false), L === n.OP_EQUALVERIFY) {
                            if (!M) return this.errstr = "SCRIPT_ERR_EQUALVERIFY", !1;
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
                        switch (r = e(-1), O = u.fromScriptNumBuffer(r, v), L) {
                            case n.OP_1ADD:
                                O = O.add(u.One);
                                break;
                            case n.OP_1SUB:
                                O = O.sub(u.One);
                                break;
                            case n.OP_NEGATE:
                                O = O.neg();
                                break;
                            case n.OP_ABS:
                                O.cmp(u.Zero) < 0 && (O = O.neg());
                                break;
                            case n.OP_NOT:
                                O = new u((0 === O.cmp(u.Zero)) + 0);
                                break;
                            case n.OP_0NOTEQUAL:
                                O = new u((0 !== O.cmp(u.Zero)) + 0)
                        }
                        this.stack.pop(), this.stack.push(O.toScriptNumBuffer());
                        break;
                    case n.OP_ADD:
                    case n.OP_SUB:
                    case n.OP_MOD:
                    case n.OP_DIV:
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
                        switch (P = u.fromScriptNumBuffer(e(-2), v), E = u.fromScriptNumBuffer(e(-1), v), O = new u(0), L) {
                            case n.OP_ADD:
                                O = P.add(E);
                                break;
                            case n.OP_SUB:
                                O = P.sub(E);
                                break;
                            case n.OP_DIV:
                                if (0 == E) return this.errstr = "SCRIPT_ERR_DIV_BY_ZERO", !1;
                                O = P.div(E);
                                break;
                            case n.OP_MOD:
                                if (0 == E) return this.errstr = "SCRIPT_ERR_DIV_BY_ZERO", !1;
                                O = P.mod(E);
                                break;
                            case n.OP_BOOLAND:
                                O = new u((0 !== P.cmp(u.Zero) && 0 !== E.cmp(u.Zero)) + 0);
                                break;
                            case n.OP_BOOLOR:
                                O = new u((0 !== P.cmp(u.Zero) || 0 !== E.cmp(u.Zero)) + 0);
                                break;
                            case n.OP_NUMEQUAL:
                            case n.OP_NUMEQUALVERIFY:
                                O = new u((0 === P.cmp(E)) + 0);
                                break;
                            case n.OP_NUMNOTEQUAL:
                                O = new u((0 !== P.cmp(E)) + 0);
                                break;
                            case n.OP_LESSTHAN:
                                O = new u((P.cmp(E) < 0) + 0);
                                break;
                            case n.OP_GREATERTHAN:
                                O = new u((P.cmp(E) > 0) + 0);
                                break;
                            case n.OP_LESSTHANOREQUAL:
                                O = new u((P.cmp(E) <= 0) + 0);
                                break;
                            case n.OP_GREATERTHANOREQUAL:
                                O = new u((P.cmp(E) >= 0) + 0);
                                break;
                            case n.OP_MIN:
                                O = P.cmp(E) < 0 ? P : E;
                                break;
                            case n.OP_MAX:
                                O = P.cmp(E) > 0 ? P : E
                        }
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(O.toScriptNumBuffer()), L === n.OP_NUMEQUALVERIFY) {
                            if (!f.castToBool(e(-1))) return this.errstr = "SCRIPT_ERR_NUMEQUALVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case n.OP_WITHIN:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        P = u.fromScriptNumBuffer(e(-3), v), E = u.fromScriptNumBuffer(e(-2), v);
                        var F = u.fromScriptNumBuffer(e(-1), v);
                        b = E.cmp(P) <= 0 && P.cmp(F) < 0, this.stack.pop(), this.stack.pop(), this.stack.pop(), this.stack.push(b ? f.true : f.false);
                        break;
                    case n.OP_RIPEMD160:
                    case n.OP_SHA1:
                    case n.OP_SHA256:
                    case n.OP_HASH160:
                    case n.OP_HASH256:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var V;
                        r = e(-1), L === n.OP_RIPEMD160 ? V = o.ripemd160(r) : L === n.OP_SHA1 ? V = o.sha1(r) : L === n.OP_SHA256 ? V = o.sha256(r) : L === n.OP_HASH160 ? V = o.sha256ripemd160(r) : L === n.OP_HASH256 && (V = o.sha256sha256(r)), this.stack.pop(), this.stack.push(V);
                        break;
                    case n.OP_CODESEPARATOR:
                        this.pbegincodehash = this.pc;
                        break;
                    case n.OP_CHECKSIG:
                    case n.OP_CHECKSIGVERIFY:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (A = e(-2), m = e(-1), !this.checkTxSignatureEncoding(A) || !this.checkPubkeyEncoding(m)) return !1;
                        R = (new s).set({
                            chunks: this.script.chunks.slice(this.pbegincodehash)
                        });
                        var G = (new s).add(A);
                        R.findAndDelete(G);
                        try {
                            T = h.fromTxFormat(A), k = c.fromBuffer(m, !1), N = T.isSchnorr ? this.tx.verifySignature(T, k, this.nin, R, this.satoshisBN, this.flags, "schnorr") : this.tx.verifySignature(T, k, this.nin, R, this.satoshisBN, this.flags)
                        } catch (t) {
                            N = !1
                        }
                        if (!N && this.flags & f.SCRIPT_VERIFY_NULLFAIL && A.length) return this.errstr = "SCRIPT_ERR_NULLFAIL", !1;
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(N ? f.true : f.false), L === n.OP_CHECKSIGVERIFY) {
                            if (!N) return this.errstr = "SCRIPT_ERR_CHECKSIGVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case n.OP_CHECKDATASIG:
                    case n.OP_CHECKDATASIGVERIFY:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (A = e(-3), y = e(-2), m = e(-1), !this.checkDataSignatureEncoding(A) || !this.checkPubkeyEncoding(m)) return !1;
                        N = !1;
                        try {
                            T = h.fromDataFormat(A), k = c.fromBuffer(m, !1), V = o.sha256(y), N = T.isSchnorr ? p.verify(V, T, k, "big") : a.verify(V, T, k, "big")
                        } catch (t) {
                            N = !1
                        }
                        if (!N && this.flags & f.SCRIPT_VERIFY_NULLFAIL && A.length) return this.errstr = "SCRIPT_ERR_NULLFAIL", !1;
                        if (this.stack.pop(), this.stack.pop(), this.stack.pop(), this.stack.push(N ? f.true : f.false), L === n.OP_CHECKDATASIGVERIFY) {
                            if (!N) return this.errstr = "SCRIPT_ERR_CHECKDATASIGVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case n.OP_REVERSEBYTES:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = e(-1);
                        var Y = Buffer.from(_).reverse();
                        this.stack.pop(), this.stack.push(Y);
                        break;
                    case n.OP_CHECKMULTISIG:
                    case n.OP_CHECKMULTISIGVERIFY: {
                        let t = (D = 1) + 1;
                        if (this.stack.length < D) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var j = u.fromScriptNumBuffer(e(-D), v).toNumber(),
                            z = t + j;
                        if (j < 0 || j > 20) return this.errstr = "SCRIPT_ERR_PUBKEY_COUNT", !1;
                        if (this.nOpCount += j, this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                        var Q = ++D,
                            Z = z + 1;
                        D += j;
                        var q = j + 2;
                        if (this.stack.length < D) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var X = u.fromScriptNumBuffer(e(-z), v).toNumber(),
                            W = Z + X;
                        if (X < 0 || X > j) return this.errstr = "SCRIPT_ERR_SIG_COUNT", !1;
                        var J = ++D;
                        if (D += X, this.stack.length < W) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (R = (new s).set({
                                chunks: this.script.chunks.slice(this.pbegincodehash)
                            }), N = !0, this.flags & f.SCRIPT_ENABLE_SCHNORR_MULTISIG && 0 !== e(-W).length) {
                            let r = function(t, e) {
                                if (e > 32) return this.errstr = "INVALID_BITFIELD_SIZE", {
                                    result: !1
                                };
                                let r = Math.floor((e + 7) / 8);
                                if (t.length !== r) return this.errstr = "INVALID_BITFIELD_SIZE", {
                                    result: !1
                                };
                                let i = 0,
                                    s = Uint32Array.from(t);
                                for (let t = 0; t < r; t++) i |= s[t] << 8 * t;
                                return (i & (1 << e) - 1) != i ? (this.errstr = "INVALID_BIT_RANGE", {
                                    result: !1
                                }) : {
                                    result: !0,
                                    bitfield: i
                                }
                            }(e(-W), j);
                            r.result || (N = !1);
                            let i = new Uint8Array([X]),
                                s = Uint32Array.from(i);
                            B = r.bitfield, 16843009 * ((B = (858993459 & (B -= B >> 1 & 1431655765)) + (B >> 2 & 858993459)) + (B >> 4) & 252645135) >> 24 !== s[0] && (this.errstr = "INVALID_BIT_COUNT", N = !1);
                            var $ = t + j - 1,
                                tt = Z + X - 1;
                            let n = 0;
                            for (let t = 0; t < X; t++, n++) {
                                for (r.bitfield >> n == 0 && (this.errstr = "INVALID_BIT_RANGE", N = !1); 0 == (r.bitfield >> n & 1);) {
                                    if (n >= j) {
                                        this.errstr = "wrong", N = !1;
                                        break
                                    }
                                    n++
                                }
                                n >= j && (this.errstr = "PUBKEY_COUNT", N = !1);
                                let i = e(-tt + t),
                                    s = e(-$ + n);
                                this.checkRawSignatureEncoding(i) && this.checkPubkeyEncoding(s) || (N = !1);
                                let u = h.fromTxFormat(i),
                                    o = c.fromBuffer(s, !1);
                                this.tx.verifySignature(u, o, this.nin, R, this.satoshisBN, this.flags, "schnorr") || (this.errstr = "SIG_NULLFAIL", N = !1)
                            }
                            r.bitfield >> n != 0 && (this.errstr = "INVALID_BIT_COUNT", N = !1)
                        } else {
                            for (var et = 0; et < X; et++) A = e(-J - et), R.findAndDelete((new s).add(A));
                            for (; N && X > 0;) {
                                if (A = e(-J), m = e(-Q), !this.checkTxSignatureEncoding(A) || !this.checkPubkeyEncoding(m)) return !1;
                                var rt;
                                try {
                                    T = h.fromTxFormat(A), k = c.fromBuffer(m, !1), rt = this.tx.verifySignature(T, k, this.nin, R, this.satoshisBN, this.flags)
                                } catch (t) {
                                    rt = !1
                                }
                                rt && (J++, X--), Q++, X > --j && (N = !1)
                            }
                        }
                        for (; D-- > 1;) {
                            if (!N && this.flags & f.SCRIPT_VERIFY_NULLFAIL && !q && e(-1).length) return this.errstr = "SCRIPT_ERR_NULLFAIL", !1;
                            q > 0 && q--, this.stack.pop()
                        }
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (this.flags & f.SCRIPT_VERIFY_NULLDUMMY && e(-1).length) return this.errstr = "SCRIPT_ERR_SIG_NULLDUMMY", !1;
                        if (this.stack.pop(), this.stack.push(N ? f.true : f.false), L === n.OP_CHECKMULTISIGVERIFY) {
                            if (!N) return this.errstr = "SCRIPT_ERR_CHECKMULTISIGVERIFY", !1;
                            this.stack.pop()
                        }
                    }
                    break;
                    case n.OP_CAT:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (_ = e(-2), d = e(-1), _.length + d.length > f.MAX_SCRIPT_ELEMENT_SIZE) return this.errstr = "SCRIPT_ERR_PUSH_SIZE", !1;
                        this.stack[this.stack.length - 2] = Buffer.concat([_, d]), this.stack.pop();
                        break;
                    case n.OP_SPLIT:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = e(-2);
                        var it = u.fromScriptNumBuffer(e(-1), v).toNumber();
                        if (it < 0 || it > _.length) return this.errstr = "SCRIPT_ERR_INVALID_SPLIT_RANGE", !1;
                        var st = Buffer.from(_);
                        this.stack[this.stack.length - 2] = st.slice(0, it), this.stack[this.stack.length - 1] = st.slice(it);
                        break;
                    case n.OP_NUM2BIN:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var nt = u.fromScriptNumBuffer(e(-1), v).toNumber();
                        if (nt > f.MAX_SCRIPT_ELEMENT_SIZE) return this.errstr = "SCRIPT_ERR_PUSH_SIZE", !1;
                        this.stack.pop();
                        var ut = e(-1);
                        if ((ut = f._minimallyEncode(ut)).length > nt) return this.errstr = "SCRIPT_ERR_IMPOSSIBLE_ENCODING", !1;
                        if (ut.length == nt) {
                            this.stack[this.stack.length - 1] = ut;
                            break
                        }
                        var ot = 0;
                        ut.length > 0 && (ot = 128 & ut[ut.length - 1], ut[ut.length - 1] &= 127);
                        var ht = Buffer.alloc(nt);
                        ut.copy(ht, 0);
                        for (var ct = ut.length - 1; ct++ < nt - 2;) ht[ct] = 0;
                        ht[ct] = ot, this.stack[this.stack.length - 1] = ht;
                        break;
                    case n.OP_BIN2NUM:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (_ = e(-1), d = f._minimallyEncode(_), this.stack[this.stack.length - 1] = d, !f._isMinimallyEncoded(d)) return this.errstr = "SCRIPT_ERR_INVALID_NUMBER_RANGE", !1;
                        break;
                    default:
                        return this.errstr = "SCRIPT_ERR_BAD_OPCODE", !1
                }
                return !0
            }
        },
        7556: function(t, e, r) {
            "use strict";
            var i = r(53),
                s = r(5490),
                n = r(5587),
                u = r(5662),
                o = r(5870),
                h = r(6700);

            function c(t) {
                if (!(this instanceof c)) return new c(t);
                s.checkArgument(i.isObject(t), "Must provide an object from where to extract data");
                var e = t.address ? new o(t.address) : void 0,
                    r = t.txid ? t.txid : t.txId;
                if (!r || !n.isHexaString(r) || r.length > 64) throw new Error("Invalid TXID in object", t);
                var a = i.isUndefined(t.vout) ? t.outputIndex : t.vout;
                if (!i.isNumber(a)) throw new Error("Invalid outputIndex, received " + a);
                s.checkArgument(!i.isUndefined(t.scriptPubKey) || !i.isUndefined(t.script) || !i.isUndefined(e), "Must provide the scriptPubKey, script, or address for that output!");
                var p = new u(t.scriptPubKey || t.script || u.fromAddress(e));
                s.checkArgument(!i.isUndefined(t.amount) || !i.isUndefined(t.satoshis), "Must provide an amount for the output");
                var f = i.isUndefined(t.amount) ? t.satoshis : new h.fromBTC(t.amount).toSatoshis();
                s.checkArgument(i.isNumber(f), "Amount must be a number"), n.defineImmutable(this, {
                    address: e,
                    txId: r,
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
                    amount: h.fromSatoshis(this.satoshis).toBTC()
                }
            }, t.exports = c
        }
    }
]);