(window.webpackJsonp = window.webpackJsonp || []).push([
    [278], {
        10350: function(e, t, r) {
            "use strict";
            var n = e.exports;
            n.version = "v" + r(10351).version, global._bitcore = n.version, n.crypto = {}, n.crypto.BN = r(5603), n.crypto.ECDSA = r(7569), n.crypto.Hash = r(5609), n.crypto.Random = r(6283), n.crypto.Point = r(5962), n.crypto.Signature = r(5678), n.encoding = {}, n.encoding.Base58 = r(6281), n.encoding.Base58Check = r(6098), n.encoding.BufferReader = r(5802), n.encoding.BufferWriter = r(5713), n.encoding.Varint = r(10387), n.util = {}, n.util.buffer = r(5519), n.util.js = r(5588), n.util.preconditions = r(5506), n.errors = r(5677), n.Address = r(5873), n.Block = r(10388), n.MerkleBlock = r(7577), n.BlockHeader = r(6284), n.HDPrivateKey = r(7578), n.HDPublicKey = r(7579), n.Networks = r(5872), n.Opcode = r(6708), n.PrivateKey = r(6280), n.PublicKey = r(5712), n.Script = r(5679), n.Transaction = r(6282), n.URI = r(10390), n.Unit = r(6711), n.deps = {}, n.deps.bnjs = r(5755), n.deps.bs58 = r(7574), n.deps.Buffer = Buffer, n.deps.elliptic = r(5710), n.deps._ = r(5491), n._HDKeyCache = r(6712), n.Transaction.sighash = r(5803)
        },
        10352: function(e, t, r) {
            "use strict";
            e.exports = [{
                name: "InvalidB58Char",
                message: "Invalid Base58 character: {0} in {1}"
            }, {
                name: "InvalidB58Checksum",
                message: "Invalid Base58 checksum for {0}"
            }, {
                name: "InvalidNetwork",
                message: "Invalid version for network: got {0}"
            }, {
                name: "InvalidState",
                message: "Invalid state: {0}"
            }, {
                name: "NotImplemented",
                message: "Function {0} was not implemented yet"
            }, {
                name: "InvalidNetworkArgument",
                message: 'Invalid network: must be "livenet" or "testnet", got {0}'
            }, {
                name: "InvalidArgument",
                message: function() {
                    return "Invalid Argument" + (arguments[0] ? ": " + arguments[0] : "") + (arguments[1] ? " Documentation: http://bitcore.io/" + arguments[1] : "")
                }
            }, {
                name: "AbstractMethodInvoked",
                message: "Abstract Method Invocation: {0}"
            }, {
                name: "InvalidArgumentType",
                message: function() {
                    return "Invalid Argument for " + arguments[2] + ", expected " + arguments[1] + " but got " + typeof arguments[0]
                }
            }, {
                name: "Unit",
                message: "Internal Error on Unit {0}",
                errors: [{
                    name: "UnknownCode",
                    message: "Unrecognized unit code: {0}"
                }, {
                    name: "InvalidRate",
                    message: "Invalid exchange rate: {0}"
                }]
            }, {
                name: "Transaction",
                message: "Internal Error on Transaction {0}",
                errors: [{
                    name: "Input",
                    message: "Internal Error on Input {0}",
                    errors: [{
                        name: "MissingScript",
                        message: "Need a script to create an input"
                    }, {
                        name: "UnsupportedScript",
                        message: "Unsupported input script type: {0}"
                    }, {
                        name: "MissingPreviousOutput",
                        message: "No previous output information."
                    }]
                }, {
                    name: "NeedMoreInfo",
                    message: "{0}"
                }, {
                    name: "InvalidSorting",
                    message: "The sorting function provided did not return the change output as one of the array elements"
                }, {
                    name: "InvalidOutputAmountSum",
                    message: "{0}"
                }, {
                    name: "MissingSignatures",
                    message: "Some inputs have not been fully signed"
                }, {
                    name: "InvalidIndex",
                    message: "Invalid index: {0} is not between 0, {1}"
                }, {
                    name: "UnableToVerifySignature",
                    message: "Unable to verify signature: {0}"
                }, {
                    name: "DustOutputs",
                    message: "Dust amount detected in one output"
                }, {
                    name: "InvalidSatoshis",
                    message: "Output atoms are invalid"
                }, {
                    name: "FeeError",
                    message: "Internal Error on Fee {0}",
                    errors: [{
                        name: "TooSmall",
                        message: "Fee is too small: {0}"
                    }, {
                        name: "TooLarge",
                        message: "Fee is too large: {0}"
                    }, {
                        name: "Different",
                        message: "Unspent value is different from specified fee: {0}"
                    }]
                }, {
                    name: "ChangeAddressMissing",
                    message: "Change address is missing"
                }, {
                    name: "BlockHeightTooHigh",
                    message: "Block Height can be at most 2^32 -1"
                }, {
                    name: "NLockTimeOutOfRange",
                    message: "Block Height can only be between 0 and 499 999 999"
                }, {
                    name: "LockTimeTooEarly",
                    message: "Lock Time can't be earlier than UNIX date 500 000 000"
                }]
            }, {
                name: "Script",
                message: "Internal Error on Script {0}",
                errors: [{
                    name: "UnrecognizedAddress",
                    message: "Expected argument {0} to be an address"
                }, {
                    name: "CantDeriveAddress",
                    message: "Can't derive address associated with script {0}, needs to be p2pkh in, p2pkh out, p2sh in, or p2sh out."
                }, {
                    name: "InvalidBuffer",
                    message: "Invalid script buffer: can't parse valid script from given buffer {0}"
                }]
            }, {
                name: "HDPrivateKey",
                message: "Internal Error on HDPrivateKey {0}",
                errors: [{
                    name: "InvalidDerivationArgument",
                    message: "Invalid derivation argument {0}, expected string, or number and boolean"
                }, {
                    name: "InvalidEntropyArgument",
                    message: "Invalid entropy: must be an hexa string or binary buffer, got {0}",
                    errors: [{
                        name: "TooMuchEntropy",
                        message: 'Invalid entropy: more than 512 bits is non standard, got "{0}"'
                    }, {
                        name: "NotEnoughEntropy",
                        message: 'Invalid entropy: at least 128 bits needed, got "{0}"'
                    }]
                }, {
                    name: "InvalidLength",
                    message: "Invalid length for xprivkey string in {0}"
                }, {
                    name: "InvalidPath",
                    message: "Invalid derivation path: {0}"
                }, {
                    name: "UnrecognizedArgument",
                    message: 'Invalid argument: creating a HDPrivateKey requires a string, buffer, json or object, got "{0}"'
                }]
            }, {
                name: "HDPublicKey",
                message: "Internal Error on HDPublicKey {0}",
                errors: [{
                    name: "ArgumentIsPrivateExtended",
                    message: "Argument is an extended private key: {0}"
                }, {
                    name: "InvalidDerivationArgument",
                    message: "Invalid derivation argument: got {0}"
                }, {
                    name: "InvalidLength",
                    message: 'Invalid length for xpubkey: got "{0}"'
                }, {
                    name: "InvalidPath",
                    message: 'Invalid derivation path, it should look like: "m/1/100", got "{0}"'
                }, {
                    name: "InvalidIndexCantDeriveHardened",
                    message: "Invalid argument: creating a hardened path requires an HDPrivateKey"
                }, {
                    name: "MustSupplyArgument",
                    message: "Must supply an argument to create a HDPublicKey"
                }, {
                    name: "UnrecognizedArgument",
                    message: "Invalid argument for creation, must be string, json, buffer, or object"
                }]
            }]
        },
        10387: function(e, t, r) {
            "use strict";
            var n = r(5713),
                i = r(5802),
                s = r(5603),
                o = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    if (Buffer.isBuffer(t)) this.buf = t;
                    else if ("number" == typeof t) {
                        var r = t;
                        this.fromNumber(r)
                    } else if (t instanceof s) {
                        var n = t;
                        this.fromBN(n)
                    } else if (t) {
                        var i = t;
                        this.set(i)
                    }
                };
            o.prototype.set = function(e) {
                return this.buf = e.buf || this.buf, this
            }, o.prototype.fromString = function(e) {
                return this.set({
                    buf: new Buffer(e, "hex")
                }), this
            }, o.prototype.toString = function() {
                return this.buf.toString("hex")
            }, o.prototype.fromBuffer = function(e) {
                return this.buf = e, this
            }, o.prototype.fromBufferReader = function(e) {
                return this.buf = e.readVarintBuf(), this
            }, o.prototype.fromBN = function(e) {
                return this.buf = n().writeVarintBN(e).concat(), this
            }, o.prototype.fromNumber = function(e) {
                return this.buf = n().writeVarintNum(e).concat(), this
            }, o.prototype.toBuffer = function() {
                return this.buf
            }, o.prototype.toBN = function() {
                return i(this.buf).readVarintBN()
            }, o.prototype.toNumber = function() {
                return i(this.buf).readVarintNum()
            }, e.exports = o
        },
        10388: function(e, t, r) {
            e.exports = r(10389), e.exports.BlockHeader = r(6284), e.exports.MerkleBlock = r(7577)
        },
        10389: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = r(6284),
                s = r(5603),
                o = r(5519),
                a = r(5802),
                u = r(5713),
                f = r(5609),
                h = r(6282),
                c = r(5506);

            function Block(e) {
                return this instanceof Block ? (n.extend(this, Block._from(e)), this) : new Block(e)
            }
            Block.MAX_BLOCK_SIZE = 1e6, Block._from = function(e) {
                var t = {};
                if (o.isBuffer(e)) t = Block._fromBufferReader(a(e));
                else {
                    if (!n.isObject(e)) throw new TypeError("Unrecognized argument for Block");
                    t = Block._fromObject(e)
                }
                return t
            }, Block._fromObject = function(e) {
                var t = [];
                return e.transactions.forEach((function(e) {
                    e instanceof h ? t.push(e) : t.push(h().fromObject(e))
                })), {
                    header: i.fromObject(e.header),
                    transactions: t
                }
            }, Block.fromObject = function(e) {
                var t = Block._fromObject(e);
                return new Block(t)
            }, Block._fromBufferReader = function(e) {
                var t = {};
                c.checkState(!e.finished(), "No block data received"), t.header = i.fromBufferReader(e);
                var r = e.readVarintNum();
                t.transactions = [];
                for (var n = 0; n < r; n++) t.transactions.push(h().fromBufferReader(e));
                return t
            }, Block.fromBufferReader = function(e) {
                c.checkArgument(e, "br is required");
                var t = Block._fromBufferReader(e);
                return new Block(t)
            }, Block.fromBuffer = function(e) {
                return Block.fromBufferReader(new a(e))
            }, Block.fromString = function(e) {
                var t = new Buffer(e, "hex");
                return Block.fromBuffer(t)
            }, Block.fromRawBlock = function(e) {
                o.isBuffer(e) || (e = new Buffer(e, "binary"));
                var t = a(e);
                t.pos = Block.Values.START_OF_BLOCK;
                var r = Block._fromBufferReader(t);
                return new Block(r)
            }, Block.prototype.toObject = Block.prototype.toJSON = function() {
                var e = [];
                return this.transactions.forEach((function(t) {
                    e.push(t.toObject())
                })), {
                    header: this.header.toObject(),
                    transactions: e
                }
            }, Block.prototype.toBuffer = function() {
                return this.toBufferWriter().concat()
            }, Block.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, Block.prototype.toBufferWriter = function(e) {
                e || (e = new u), e.write(this.header.toBuffer()), e.writeVarintNum(this.transactions.length);
                for (var t = 0; t < this.transactions.length; t++) this.transactions[t].toBufferWriter(e);
                return e
            }, Block.prototype.getTransactionHashes = function() {
                var e = [];
                if (0 === this.transactions.length) return [Block.Values.NULL_HASH];
                for (var t = 0; t < this.transactions.length; t++) e.push(this.transactions[t]._getHash());
                return e
            }, Block.prototype.getMerkleTree = function() {
                for (var e = this.getTransactionHashes(), t = 0, r = this.transactions.length; r > 1; r = Math.floor((r + 1) / 2)) {
                    for (var n = 0; n < r; n += 2) {
                        var i = Math.min(n + 1, r - 1),
                            s = Buffer.concat([e[t + n], e[t + i]]);
                        e.push(f.blake256(s))
                    }
                    t += r
                }
                return e
            }, Block.prototype.getMerkleRoot = function() {
                var e = this.getMerkleTree();
                return e[e.length - 1]
            }, Block.prototype.validMerkleRoot = function() {
                var e = new s(this.header.merkleRoot.toString("hex"), "hex"),
                    t = new s(this.getMerkleRoot().toString("hex"), "hex");
                return 0 === e.cmp(t)
            }, Block.prototype._getHash = function() {
                return this.header._getHash()
            };
            var d = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._id || (this._id = this.header.id), this._id
                },
                set: n.noop
            };
            Object.defineProperty(Block.prototype, "id", d), Object.defineProperty(Block.prototype, "hash", d), Block.prototype.inspect = function() {
                return "<Block " + this.id + ">"
            }, Block.Values = {
                START_OF_BLOCK: 8,
                NULL_HASH: new Buffer("0000000000000000000000000000000000000000000000000000000000000000", "hex")
            }, e.exports = Block
        },
        5435: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(r(10350)),
                s = n(r(461)),
                o = r(930);
            class DCRCoin extends((0, o.BitcoreMixin)((0, o.BitcoinLikeFeeMixin)(s.default))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: r,
                    explorers: n,
                    txWebUrl: s,
                    socket: o
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "Decred",
                        ticker: "DCR",
                        decimal: 8,
                        derivation: "m/42'/999'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: n,
                        txWebUrl: s,
                        socket: o
                    }), this.feePerByte = r.feePerByte, this.coefficient = r.coefficient, this.coreLibrary = i.default, this.network = this.coreLibrary.Networks.dcrdlivenet
                }
                getDeriveFunctionName() {
                    return "derive"
                }
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    const r = (await this.getUnspentOutputs(this.address, this.getScriptPubKey())).map(e => ({
                            amount: this.toCurrencyUnit(e.value),
                            ...e
                        })),
                        n = this.explorer.calculateBalance(r),
                        i = new this.BN(String(t)),
                        s = await this.getFee(t),
                        o = n.lt(i.add(s)) ? n.sub(s) : i,
                        a = n.sub(i).sub(s),
                        u = (new this.coreLibrary.Transaction).from(r).to(e, Number(o.toString())).fee(Number(s.toString())).change(this.address);
                    return a.gt(new this.BN(0)) && u.to(r[0].address, Number(a.toString())), u.sign(this.privateKey.toString()), u.serialize()
                }
            }
            var a = DCRCoin;
            t.default = a
        },
        5603: function(e, t, r) {
            "use strict";
            var n = r(5755),
                i = r(5506),
                s = r(5491),
                o = function(e) {
                    for (var t = new Buffer(e.length), r = 0; r < e.length; r++) t[r] = e[e.length - 1 - r];
                    return t
                };
            n.Zero = new n(0), n.One = new n(1), n.Minus1 = new n(-1), n.fromNumber = function(e) {
                return i.checkArgument(s.isNumber(e)), new n(e)
            }, n.fromString = function(e, t) {
                return i.checkArgument(s.isString(e)), new n(e, t)
            }, n.fromBuffer = function(e, t) {
                void 0 !== t && "little" === t.endian && (e = o(e));
                var r = e.toString("hex");
                return new n(r, 16)
            }, n.fromSM = function(e, t) {
                var r;
                if (0 === e.length) return n.fromBuffer(new Buffer([0]));
                var i = "big";
                return t && (i = t.endian), "little" === i && (e = o(e)), 128 & e[0] ? (e[0] = 127 & e[0], (r = n.fromBuffer(e)).neg().copy(r)) : r = n.fromBuffer(e), r
            }, n.prototype.toNumber = function() {
                return parseInt(this.toString(10), 10)
            }, n.prototype.toBuffer = function(e) {
                var t, r;
                if (e && e.size) {
                    var i = (r = this.toString(16, 2)).length / 2;
                    t = new Buffer(r, "hex"), i === e.size ? t = t : i > e.size ? t = n.trim(t, i) : i < e.size && (t = n.pad(t, i, e.size))
                } else r = this.toString(16, 2), t = new Buffer(r, "hex");
                return void 0 !== e && "little" === e.endian && (t = o(t)), t
            }, n.prototype.toSMBigEndian = function() {
                var e;
                return -1 === this.cmp(n.Zero) ? 128 & (e = this.neg().toBuffer())[0] ? e = Buffer.concat([new Buffer([128]), e]) : e[0] = 128 | e[0] : 128 & (e = this.toBuffer())[0] && (e = Buffer.concat([new Buffer([0]), e])), 1 === e.length & 0 === e[0] && (e = new Buffer([])), e
            }, n.prototype.toSM = function(e) {
                var t = e ? e.endian : "big",
                    r = this.toSMBigEndian();
                return "little" === t && (r = o(r)), r
            }, n.fromScriptNumBuffer = function(e, t, r) {
                var s = r || 4;
                if (i.checkArgument(e.length <= s, new Error("script number overflow")), t && e.length > 0 && 0 == (127 & e[e.length - 1]) && (e.length <= 1 || 0 == (128 & e[e.length - 2]))) throw new Error("non-minimally encoded script number");
                return n.fromSM(e, {
                    endian: "little"
                })
            }, n.prototype.toScriptNumBuffer = function() {
                return this.toSM({
                    endian: "little"
                })
            }, n.prototype.gt = function(e) {
                return this.cmp(e) > 0
            }, n.prototype.gte = function(e) {
                return this.cmp(e) >= 0
            }, n.prototype.lt = function(e) {
                return this.cmp(e) < 0
            }, n.trim = function(e, t) {
                return e.slice(t - e.length, e.length)
            }, n.pad = function(e, t, r) {
                for (var n = new Buffer(r), i = 0; i < e.length; i++) n[n.length - 1 - i] = e[e.length - 1 - i];
                for (i = 0; i < r - t; i++) n[i] = 0;
                return n
            }, e.exports = n
        },
        5609: function(e, t, r) {
            "use strict";
            var n = r(24),
                i = r(10372),
                s = r(5519),
                o = r(5506),
                a = e.exports;
            a.sha1 = function(e) {
                return o.checkArgument(s.isBuffer(e)), n.createHash("sha1").update(e).digest()
            }, a.sha1.blocksize = 512, a.sha256 = function(e) {
                return o.checkArgument(s.isBuffer(e)), n.createHash("sha256").update(e).digest()
            }, a.sha256.blocksize = 512, a.sha256sha256 = function(e) {
                return o.checkArgument(s.isBuffer(e)), a.sha256(a.sha256(e))
            }, a.ripemd160 = function(e) {
                return o.checkArgument(s.isBuffer(e)), n.createHash("ripemd160").update(e).digest()
            }, a.sha256ripemd160 = function(e) {
                return o.checkArgument(s.isBuffer(e)), a.ripemd160(a.sha256(e))
            }, a.blake256ripemd160 = function(e) {
                return o.checkArgument(s.isBuffer(e)), a.ripemd160(a.blake256(e))
            }, a.doubleblake256 = function(e) {
                return o.checkArgument(s.isBuffer(e)), a.blake256(a.blake256(e))
            }, a.blake256 = function(e) {
                return o.checkArgument(s.isBuffer(e)), i.createHash("blake256").update(e).digest()
            }, a.sha512 = function(e) {
                return o.checkArgument(s.isBuffer(e)), n.createHash("sha512").update(e).digest()
            }, a.sha512.blocksize = 1024, a.hmac = function(e, t, r) {
                o.checkArgument(s.isBuffer(t)), o.checkArgument(s.isBuffer(r)), o.checkArgument(e.blocksize);
                var n = e.blocksize / 8;
                if (r.length > n) r = e(r);
                else if (r < n) {
                    var i = new Buffer(n);
                    i.fill(0), r.copy(i), r = i
                }
                var a = new Buffer(n);
                a.fill(92);
                var u = new Buffer(n);
                u.fill(54);
                for (var f = new Buffer(n), h = new Buffer(n), c = 0; c < n; c++) f[c] = a[c] ^ r[c], h[c] = u[c] ^ r[c];
                return e(Buffer.concat([f, e(Buffer.concat([h, t]))]))
            }, a.sha256hmac = function(e, t) {
                return a.hmac(a.sha256, e, t)
            }, a.sha512hmac = function(e, t) {
                return a.hmac(a.sha512, e, t)
            }
        },
        5677: function(e, t, r) {
            "use strict";
            var n = r(5491);

            function i(e, t) {
                return e.replace("{0}", t[0]).replace("{1}", t[1]).replace("{2}", t[2])
            }
            var s = function(e, t) {
                    var r = function() {
                        if (n.isString(t.message)) this.message = i(t.message, arguments);
                        else {
                            if (!n.isFunction(t.message)) throw new Error("Invalid error definition for " + t.name);
                            this.message = t.message.apply(null, arguments)
                        }
                        this.stack = this.message + "\n" + (new Error).stack
                    };
                    return (r.prototype = Object.create(e.prototype)).name = e.prototype.name + t.name, e[t.name] = r, t.errors && o(r, t.errors), r
                },
                o = function(e, t) {
                    n.each(t, (function(t) {
                        s(e, t)
                    }))
                },
                a = {
                    Error: function() {
                        this.message = "Internal error", this.stack = this.message + "\n" + (new Error).stack
                    }
                };
            a.Error.prototype = Object.create(Error.prototype), a.Error.prototype.name = "bitcore.Error";
            var u, f = r(10352);
            u = a.Error, o(u, f), e.exports = a.Error, e.exports.extend = function(e) {
                return s(a.Error, e)
            }
        },
        5678: function(e, t, r) {
            "use strict";
            var n = r(5603),
                i = r(5491),
                s = r(5506),
                o = r(5519),
                a = r(5588),
                u = function e(t, r) {
                    if (!(this instanceof e)) return new e(t, r);
                    if (t instanceof n) this.set({
                        r: t,
                        s: r
                    });
                    else if (t) {
                        var i = t;
                        this.set(i)
                    }
                };
            u.prototype.set = function(e) {
                return this.r = e.r || this.r || void 0, this.s = e.s || this.s || void 0, this.i = void 0 !== e.i ? e.i : this.i, this.compressed = void 0 !== e.compressed ? e.compressed : this.compressed, this.nhashtype = e.nhashtype || this.nhashtype || void 0, this
            }, u.fromCompact = function(e) {
                s.checkArgument(o.isBuffer(e), "Argument is expected to be a Buffer");
                var t = new u,
                    r = !0,
                    i = e.slice(0, 1)[0] - 27 - 4;
                i < 0 && (r = !1, i += 4);
                var a = e.slice(1, 33),
                    f = e.slice(33, 65);
                return s.checkArgument(0 === i || 1 === i || 2 === i || 3 === i, new Error("i must be 0, 1, 2, or 3")), s.checkArgument(32 === a.length, new Error("r must be 32 bytes")), s.checkArgument(32 === f.length, new Error("s must be 32 bytes")), t.compressed = r, t.i = i, t.r = n.fromBuffer(a), t.s = n.fromBuffer(f), t
            }, u.fromDER = u.fromBuffer = function(e, t) {
                var r = u.parseDER(e, t),
                    n = new u;
                return n.r = r.r, n.s = r.s, n
            }, u.fromTxFormat = function(e) {
                var t = e.readUInt8(e.length - 1),
                    r = e.slice(0, e.length - 1),
                    n = new u.fromDER(r, !1);
                return n.nhashtype = t, n
            }, u.fromString = function(e) {
                var t = new Buffer(e, "hex");
                return u.fromDER(t)
            }, u.parseDER = function(e, t) {
                s.checkArgument(o.isBuffer(e), new Error("DER formatted signature should be a buffer")), i.isUndefined(t) && (t = !0);
                var r = e[0];
                s.checkArgument(48 === r, new Error("Header byte should be 0x30"));
                var a = e[1],
                    u = e.slice(2).length;
                s.checkArgument(!t || a === u, new Error("Length byte should length of what follows")), a = a < u ? a : u;
                var f = e[2];
                s.checkArgument(2 === f, new Error("Integer byte for r should be 0x02"));
                var h = e[3],
                    c = e.slice(4, 4 + h),
                    d = n.fromBuffer(c),
                    p = 0 === e[4];
                s.checkArgument(h === c.length, new Error("Length of r incorrect"));
                var l = e[4 + h + 0];
                s.checkArgument(2 === l, new Error("Integer byte for s should be 0x02"));
                var m = e[4 + h + 1],
                    g = e.slice(4 + h + 2, 4 + h + 2 + m),
                    v = n.fromBuffer(g),
                    y = 0 === e[4 + h + 2 + 2];
                s.checkArgument(m === g.length, new Error("Length of s incorrect"));
                var b = 4 + h + 2 + m;
                return s.checkArgument(a === b - 2, new Error("Length of signature incorrect")), {
                    header: r,
                    length: a,
                    rheader: f,
                    rlength: h,
                    rneg: p,
                    rbuf: c,
                    r: d,
                    sheader: l,
                    slength: m,
                    sneg: y,
                    sbuf: g,
                    s: v
                }
            }, u.prototype.toCompact = function(e, t) {
                if (e = "number" == typeof e ? e : this.i, t = "boolean" == typeof t ? t : this.compressed, 0 !== e && 1 !== e && 2 !== e && 3 !== e) throw new Error("i must be equal to 0, 1, 2, or 3");
                var r = e + 27 + 4;
                !1 === t && (r -= 4);
                var n = new Buffer([r]),
                    i = this.r.toBuffer({
                        size: 32
                    }),
                    s = this.s.toBuffer({
                        size: 32
                    });
                return Buffer.concat([n, i, s])
            }, u.prototype.toBuffer = u.prototype.toDER = function() {
                var e = this.r.toBuffer(),
                    t = this.s.toBuffer(),
                    r = !!(128 & e[0]),
                    n = !!(128 & t[0]),
                    i = r ? Buffer.concat([new Buffer([0]), e]) : e,
                    s = n ? Buffer.concat([new Buffer([0]), t]) : t,
                    o = i.length,
                    a = s.length,
                    u = 2 + o + 2 + a;
                return Buffer.concat([new Buffer([48, u, 2, o]), i, new Buffer([2, a]), s])
            }, u.prototype.toString = function() {
                return this.toDER().toString("hex")
            }, u.isTxDER = function(e) {
                if (e.length < 9) return !1;
                if (e.length > 73) return !1;
                if (48 !== e[0]) return !1;
                if (e[1] !== e.length - 3) return !1;
                var t = e[3];
                if (5 + t >= e.length) return !1;
                var r = e[5 + t];
                if (t + r + 7 !== e.length) return !1;
                var n = e.slice(4);
                if (2 !== e[2]) return !1;
                if (0 === t) return !1;
                if (128 & n[0]) return !1;
                if (t > 1 && 0 === n[0] && !(128 & n[1])) return !1;
                var i = e.slice(6 + t);
                return 2 === e[6 + t - 2] && (0 !== r && (!(128 & i[0]) && !(r > 1 && 0 === i[0] && !(128 & i[1]))))
            }, u.prototype.hasLowS = function() {
                return !this.s.lt(new n(1)) && !this.s.gt(new n("7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0", "hex"))
            }, u.prototype.hasDefinedHashtype = function() {
                if (!a.isNaturalNumber(this.nhashtype)) return !1;
                var e = this.nhashtype & ~u.SIGHASH_ANYONECANPAY;
                return !(e < u.SIGHASH_ALL || e > u.SIGHASH_SINGLE)
            }, u.prototype.toTxFormat = function() {
                var e = this.toDER(),
                    t = new Buffer(1);
                return t.writeUInt8(this.nhashtype, 0), Buffer.concat([e, t])
            }, u.SIGHASH_ALL = 1, u.SIGHASH_NONE = 2, u.SIGHASH_SINGLE = 3, u.SIGHASH_ANYONECANPAY = 128, e.exports = u
        },
        5713: function(e, t, r) {
            "use strict";
            var n = r(5519),
                i = r(72),
                s = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    t ? this.set(t) : this.bufs = []
                };
            s.prototype.set = function(e) {
                return this.bufs = e.bufs || this.bufs || [], this
            }, s.prototype.toBuffer = function() {
                return this.concat()
            }, s.prototype.concat = function() {
                return Buffer.concat(this.bufs)
            }, s.prototype.write = function(e) {
                return i(n.isBuffer(e)), this.bufs.push(e), this
            }, s.prototype.writeReverse = function(e) {
                return i(n.isBuffer(e)), this.bufs.push(n.reverse(e)), this
            }, s.prototype.writeUInt8 = function(e) {
                var t = new Buffer(1);
                return t.writeUInt8(e, 0), this.write(t), this
            }, s.prototype.writeUInt16BE = function(e) {
                var t = new Buffer(2);
                return t.writeUInt16BE(e, 0), this.write(t), this
            }, s.prototype.writeUInt16LE = function(e) {
                var t = new Buffer(2);
                return t.writeUInt16LE(e, 0), this.write(t), this
            }, s.prototype.writeUInt32BE = function(e) {
                var t = new Buffer(4);
                return t.writeUInt32BE(e, 0), this.write(t), this
            }, s.prototype.writeInt32LE = function(e) {
                var t = new Buffer(4);
                return t.writeInt32LE(e, 0), this.write(t), this
            }, s.prototype.writeUInt32LE = function(e) {
                var t = new Buffer(4);
                return t.writeUInt32LE(e, 0), this.write(t), this
            }, s.prototype.writeUInt64BEBN = function(e) {
                var t = e.toBuffer({
                    size: 8
                });
                return this.write(t), this
            }, s.prototype.writeUInt64LEBN = function(e) {
                var t = e.toBuffer({
                    size: 8
                });
                return this.writeReverse(t), this
            }, s.prototype.writeVarintNum = function(e) {
                var t = s.varintBufNum(e);
                return this.write(t), this
            }, s.prototype.writeVarintBN = function(e) {
                var t = s.varintBufBN(e);
                return this.write(t), this
            }, s.varintBufNum = function(e) {
                var t = void 0;
                return e < 253 ? (t = new Buffer(1)).writeUInt8(e, 0) : e < 65536 ? ((t = new Buffer(3)).writeUInt8(253, 0), t.writeUInt16LE(e, 1)) : e < 4294967296 ? ((t = new Buffer(5)).writeUInt8(254, 0), t.writeUInt32LE(e, 1)) : ((t = new Buffer(9)).writeUInt8(255, 0), t.writeInt32LE(-1 & e, 1), t.writeUInt32LE(Math.floor(e / 4294967296), 5)), t
            }, s.varintBufBN = function(e) {
                var t = void 0,
                    r = e.toNumber();
                if (r < 253)(t = new Buffer(1)).writeUInt8(r, 0);
                else if (r < 65536)(t = new Buffer(3)).writeUInt8(253, 0), t.writeUInt16LE(r, 1);
                else if (r < 4294967296)(t = new Buffer(5)).writeUInt8(254, 0), t.writeUInt32LE(r, 1);
                else {
                    var n = new s;
                    n.writeUInt8(255), n.writeUInt64LEBN(e);
                    t = n.concat()
                }
                return t
            }, e.exports = s
        },
        5802: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = r(5506),
                s = r(5519),
                o = r(5603),
                a = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    if (!n.isUndefined(t))
                        if (Buffer.isBuffer(t)) this.set({
                            buf: t
                        });
                        else if (n.isString(t)) this.set({
                        buf: new Buffer(t, "hex")
                    });
                    else {
                        if (!n.isObject(t)) throw new TypeError("Unrecognized argument for BufferReader");
                        var r = t;
                        this.set(r)
                    }
                };
            a.prototype.set = function(e) {
                return this.buf = e.buf || this.buf || void 0, this.pos = e.pos || this.pos || 0, this
            }, a.prototype.eof = function() {
                return this.pos >= this.buf.length
            }, a.prototype.finished = a.prototype.eof, a.prototype.read = function(e) {
                i.checkArgument(!n.isUndefined(e), "Must specify a length");
                var t = this.buf.slice(this.pos, this.pos + e);
                return this.pos = this.pos + e, t
            }, a.prototype.readAll = function() {
                var e = this.buf.slice(this.pos, this.buf.length);
                return this.pos = this.buf.length, e
            }, a.prototype.readUInt8 = function() {
                var e = this.buf.readUInt8(this.pos);
                return this.pos = this.pos + 1, e
            }, a.prototype.readUInt16BE = function() {
                var e = this.buf.readUInt16BE(this.pos);
                return this.pos = this.pos + 2, e
            }, a.prototype.readUInt16LE = function() {
                var e = this.buf.readUInt16LE(this.pos);
                return this.pos = this.pos + 2, e
            }, a.prototype.readUInt32BE = function() {
                var e = this.buf.readUInt32BE(this.pos);
                return this.pos = this.pos + 4, e
            }, a.prototype.readUInt32LE = function() {
                var e = this.buf.readUInt32LE(this.pos);
                return this.pos = this.pos + 4, e
            }, a.prototype.readUInt64BEBN = function() {
                var e = this.buf.slice(this.pos, this.pos + 8),
                    t = o.fromBuffer(e);
                return this.pos = this.pos + 8, t
            }, a.prototype.readUInt64LEBN = function() {
                var e, t = this.buf.readUInt32LE(this.pos),
                    r = 4294967296 * this.buf.readUInt32LE(this.pos + 4) + t;
                if (r <= 9007199254740991) e = new o(r);
                else {
                    var n = Array.prototype.slice.call(this.buf, this.pos, this.pos + 8);
                    e = new o(n, 10, "le")
                }
                return this.pos = this.pos + 8, e
            }, a.prototype.readVarintNum = function() {
                var e = this.readUInt8();
                switch (e) {
                    case 253:
                        return this.readUInt16LE();
                    case 254:
                        return this.readUInt32LE();
                    case 255:
                        var t = this.readUInt64LEBN().toNumber();
                        if (t <= Math.pow(2, 53)) return t;
                        throw new Error("number too large to retain precision - use readVarintBN");
                    default:
                        return e
                }
            }, a.prototype.readVarLengthBuffer = function() {
                var e = this.readVarintNum(),
                    t = this.read(e);
                return i.checkState(t.length === e, "Invalid length while reading varlength buffer. Expected to read: " + e + " and read " + t.length), t
            }, a.prototype.readVarintBuf = function() {
                switch (this.buf.readUInt8(this.pos)) {
                    case 253:
                        return this.read(3);
                    case 254:
                        return this.read(5);
                    case 255:
                        return this.read(9);
                    default:
                        return this.read(1)
                }
            }, a.prototype.readVarintBN = function() {
                var e = this.readUInt8();
                switch (e) {
                    case 253:
                        return new o(this.readUInt16LE());
                    case 254:
                        return new o(this.readUInt32LE());
                    case 255:
                        return this.readUInt64LEBN();
                    default:
                        return new o(e)
                }
            }, a.prototype.reverse = function() {
                for (var e = new Buffer(this.buf.length), t = 0; t < e.length; t++) e[t] = this.buf[this.buf.length - 1 - t];
                return this.buf = e, this
            }, a.prototype.readReverse = function(e) {
                n.isUndefined(e) && (e = this.buf.length);
                var t = this.buf.slice(this.pos, this.pos + e);
                return this.pos = this.pos + e, s.reverse(t)
            }, e.exports = a
        },
        5872: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = r(5519),
                s = r(5588),
                o = [],
                a = {};

            function u() {}

            function f(e, t) {
                if (~o.indexOf(e)) return e;
                if (!t) return a[e];
                n.isArray(t) || (t = [t]);
                var r = function(t) {
                    return o[i][t] === e
                };
                for (var i in o)
                    if (n.any(t, r)) return o[i]
            }

            function h(e) {
                var t = new u;
                return s.defineImmutable(t, {
                    name: e.name,
                    alias: e.alias,
                    pubkeyhash: e.pubkeyhash,
                    privatekey: e.privatekey,
                    scripthash: e.scripthash,
                    xpubkey: e.xpubkey,
                    xprivkey: e.xprivkey
                }), e.networkMagic && s.defineImmutable(t, {
                    networkMagic: i.integerAsBuffer(e.networkMagic)
                }), e.port && s.defineImmutable(t, {
                    port: e.port
                }), e.dnsSeeds && s.defineImmutable(t, {
                    dnsSeeds: e.dnsSeeds
                }), n.each(t, (function(e) {
                    n.isUndefined(e) || n.isObject(e) || (a[e] = t)
                })), o.push(t), t
            }
            u.prototype.toString = function() {
                return this.name
            }, h({
                name: "livenet",
                alias: "mainnet",
                pubkeyhash: 0,
                privatekey: 128,
                scripthash: 5,
                xpubkey: 76067358,
                xprivkey: 76066276,
                networkMagic: 4190024921,
                port: 8333,
                dnsSeeds: ["seed.bitcoin.sipa.be", "dnsseed.bluematt.me", "dnsseed.bitcoin.dashjr.org", "seed.bitcoinstats.com", "seed.bitnodes.io", "bitseed.xf2.org"]
            });
            var c = f("livenet");
            h({
                name: "testnet",
                alias: "regtest",
                pubkeyhash: 111,
                privatekey: 239,
                scripthash: 196,
                xpubkey: 70617039,
                xprivkey: 70615956
            });
            var d = f("testnet"),
                p = {
                    PORT: 18333,
                    NETWORK_MAGIC: i.integerAsBuffer(185665799),
                    DNS_SEEDS: ["testnet-seed.bitcoin.petertodd.org", "testnet-seed.bluematt.me", "testnet-seed.alexykot.me", "testnet-seed.bitcoin.schildbach.de"]
                };
            for (var l in p) n.isObject(p[l]) || (a[p[l]] = d);
            var m = {
                PORT: 18444,
                NETWORK_MAGIC: i.integerAsBuffer(4206867930),
                DNS_SEEDS: []
            };
            for (var l in m) n.isObject(m[l]) || (a[m[l]] = d);
            Object.defineProperty(d, "port", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.regtestEnabled ? m.PORT : p.PORT
                }
            }), Object.defineProperty(d, "networkMagic", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.regtestEnabled ? m.NETWORK_MAGIC : p.NETWORK_MAGIC
                }
            }), Object.defineProperty(d, "dnsSeeds", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return this.regtestEnabled ? m.DNS_SEEDS : p.DNS_SEEDS
                }
            }), h({
                name: "dcrdlivenet",
                alias: "dcrdlivenet",
                pubkeyhash: 1855,
                privatekey: 8926,
                scripthash: 1818,
                xpubkey: 50178342,
                xprivkey: 50177256,
                networkMagic: 4177573081,
                port: 9108,
                dnsSeeds: []
            }), h({
                name: "dcrdtestnet",
                alias: "dcrdtestnet",
                pubkeyhash: 3873,
                privatekey: 8974,
                scripthash: 3836,
                xpubkey: 70617041,
                xprivkey: 70615959,
                networkMagic: 1223139429,
                port: 19108,
                dnsSeeds: ["testnet-seed.decred.mindcry.org"]
            });
            var g = f("dcrdtestnet"),
                v = f("dcrdlivenet");
            e.exports = {
                add: h,
                remove: function(e) {
                    for (var t = 0; t < o.length; t++) o[t] === e && o.splice(t, 1);
                    for (var r in a) a[r] === e && delete a[r]
                },
                defaultNetwork: g,
                livenet: c,
                mainnet: c,
                testnet: d,
                dcrdtestnet: g,
                dcrdlivenet: v,
                get: f,
                enableRegtest: function() {
                    d.regtestEnabled = !0
                },
                disableRegtest: function() {
                    d.regtestEnabled = !1
                }
            }
        },
        5873: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = r(5506),
                s = r(5677),
                o = r(6098),
                a = r(5872),
                u = r(5609),
                f = r(5588),
                h = r(5712);

            function c(e, t, r) {
                if (!(this instanceof c)) return new c(e, t, r);
                if (n.isArray(e) && n.isNumber(t)) return c.createMultisig(e, t, r);
                if (e instanceof c) return e;
                if (i.checkArgument(e, "First argument is required, please include address data.", "guide/address.html"), t && !a.get(t)) throw new TypeError('Second argument must be "livenet" or "testnet".');
                if (r && r !== c.PayToPublicKeyHash && r !== c.PayToScriptHash) throw new TypeError('Third argument must be "pubkeyhash" or "scripthash".');
                var s = this._classifyArguments(e, t, r);
                return s.network = s.network || a.get(t) || a.defaultNetwork, s.type = s.type || r || c.PayToPublicKeyHash, f.defineImmutable(this, {
                    hashBuffer: s.hashBuffer,
                    network: s.network,
                    type: s.type
                }), this
            }
            c.prototype._classifyArguments = function(e, t, r) {
                if ((e instanceof Buffer || e instanceof Uint8Array) && 20 === e.length) return c._transformHash(e);
                if ((e instanceof Buffer || e instanceof Uint8Array) && 21 === e.length) return c._transformBuffer(e, t, r);
                if (e instanceof h) return c._transformPublicKey(e);
                if (e instanceof d) return c._transformScript(e, t);
                if ("string" == typeof e) return c._transformString(e, t, r);
                if (n.isObject(e)) return c._transformObject(e);
                throw new TypeError("First argument is an unrecognized data format.")
            }, c.PayToPublicKeyHash = "pubkeyhash", c.PayToScriptHash = "scripthash", c._transformHash = function(e) {
                var t = {};
                if (!(e instanceof Buffer || e instanceof Uint8Array)) throw new TypeError("Address supplied is not a buffer.");
                if (20 !== e.length) throw new TypeError("Address hashbuffers must be exactly 20 bytes.");
                return t.hashBuffer = e, t
            }, c._transformObject = function(e) {
                return i.checkArgument(e.hash || e.hashBuffer, "Must provide a `hash` or `hashBuffer` property"), i.checkArgument(e.type, "Must provide a `type` property"), {
                    hashBuffer: e.hash ? new Buffer(e.hash, "hex") : e.hashBuffer,
                    network: a.get(e.network) || a.defaultNetwork,
                    type: e.type
                }
            }, c._classifyFromVersion = function(e) {
                var t = {},
                    r = a.get(e.readIntBE(0, 2), "pubkeyhash"),
                    n = a.get(e.readIntBE(0, 2), "scripthash");
                return r ? (t.network = r, t.type = c.PayToPublicKeyHash) : n && (t.network = n, t.type = c.PayToScriptHash), t
            }, c._transformBuffer = function(e, t, r) {
                var n = {};
                if (!(e instanceof Buffer || e instanceof Uint8Array)) throw new TypeError("Address supplied is not a buffer.");
                if (22 !== e.length) throw new TypeError("Address buffers must be exactly 21 bytes.");
                t = a.get(t);
                var i = c._classifyFromVersion(e);
                if (!i.network || t && t !== i.network) throw new TypeError("Address has mismatched network type.");
                if (!i.type || r && r !== i.type) throw new TypeError("Address has mismatched type.");
                return n.hashBuffer = e.slice(2), n.network = i.network, n.type = i.type, n
            }, c._transformPublicKey = function(e) {
                var t = {};
                if (!(e instanceof h)) throw new TypeError("Address must be an instance of PublicKey.");
                return t.hashBuffer = u.blake256ripemd160(e.toBuffer()), t.type = c.PayToPublicKeyHash, t
            }, c._transformScript = function(e, t) {
                i.checkArgument(e instanceof d, "script must be a Script instance");
                var r = e.getAddressInfo(t);
                if (!r) throw new s.Script.CantDeriveAddress(e);
                return r
            }, c.createMultisig = function(e, t, r) {
                return r = r || e[0].network || a.defaultNetwork, c.payingTo(d.buildMultisigOut(e, t), r)
            }, c._transformString = function(e, t, r) {
                if ("string" != typeof e) throw new TypeError("data parameter supplied is not a string.");
                e = e.trim();
                var n = o.decode(e);
                return c._transformBuffer(n, t, r)
            }, c.fromPublicKey = function(e, t) {
                var r = c._transformPublicKey(e);
                return t = t || a.defaultNetwork, new c(r.hashBuffer, t, r.type)
            }, c.fromPublicKeyHash = function(e, t) {
                var r = c._transformHash(e);
                return new c(r.hashBuffer, t, c.PayToPublicKeyHash)
            }, c.fromScriptHash = function(e, t) {
                i.checkArgument(e, "hash parameter is required");
                var r = c._transformHash(e);
                return new c(r.hashBuffer, t, c.PayToScriptHash)
            }, c.payingTo = function(e, t) {
                return i.checkArgument(e, "script is required"), i.checkArgument(e instanceof d, "script must be instance of Script"), c.fromScriptHash(u.blake256ripemd160(e.toBuffer()), t)
            }, c.fromScript = function(e, t) {
                i.checkArgument(e instanceof d, "script must be a Script instance");
                var r = c._transformScript(e, t);
                return new c(r.hashBuffer, t, r.type)
            }, c.fromBuffer = function(e, t, r) {
                var n = c._transformBuffer(e, t, r);
                return new c(n.hashBuffer, n.network, n.type)
            }, c.fromString = function(e, t, r) {
                var n = c._transformString(e, t, r);
                return new c(n.hashBuffer, n.network, n.type)
            }, c.fromObject = function(e) {
                return i.checkState(f.isHexa(e.hash), 'Unexpected hash property, "' + e.hash + '", expected to be hex.'), new c(new Buffer(e.hash, "hex"), e.network, e.type)
            }, c.getValidationError = function(e, t, r) {
                var n;
                try {
                    new c(e, t, r)
                } catch (e) {
                    n = e
                }
                return n
            }, c.isValid = function(e, t, r) {
                return !c.getValidationError(e, t, r)
            }, c.prototype.isPayToPublicKeyHash = function() {
                return this.type === c.PayToPublicKeyHash
            }, c.prototype.isPayToScriptHash = function() {
                return this.type === c.PayToScriptHash
            }, c.prototype.toBuffer = function() {
                var e = new Buffer(2);
                return e.writeUIntBE(this.network[this.type], 0, 2), Buffer.concat([e, this.hashBuffer])
            }, c.prototype.toObject = c.prototype.toJSON = function() {
                return {
                    hash: this.hashBuffer.toString("hex"),
                    type: this.type,
                    network: this.network.toString()
                }
            }, c.prototype.toString = function() {
                return o.encode(this.toBuffer())
            }, c.prototype.inspect = function() {
                return "<Address: " + this.toString() + ", type: " + this.type + ", network: " + this.network + ">"
            }, e.exports = c;
            var d = r(5679)
        },
        5962: function(e, t, r) {
            "use strict";
            var n = r(5603),
                i = r(5519),
                s = r(5710).curves.secp256k1,
                o = s.curve.point.bind(s.curve),
                a = s.curve.pointFromX.bind(s.curve),
                Point = function(e, t, r) {
                    var n = o(e, t, r);
                    return n.validate(), n
                };
            Point.prototype = Object.getPrototypeOf(s.curve.point()), Point.fromX = function(e, t) {
                var r = a(e, t);
                return r.validate(), r
            }, Point.getG = function() {
                return s.curve.g
            }, Point.getN = function() {
                return new n(s.curve.n.toArray())
            }, Point.prototype._getX = Point.prototype.getX, Point.prototype.getX = function() {
                return new n(this._getX().toArray())
            }, Point.prototype._getY = Point.prototype.getY, Point.prototype.getY = function() {
                return new n(this._getY().toArray())
            }, Point.prototype.validate = function() {
                if (this.isInfinity()) throw new Error("Point cannot be equal to Infinity");
                if (0 === this.getX().cmp(n.Zero) || 0 === this.getY().cmp(n.Zero)) throw new Error("Invalid x,y value for curve, cannot equal 0.");
                if (0 !== a(this.getY().isOdd(), this.getX()).y.cmp(this.y)) throw new Error("Invalid y value for curve.");
                var e = this.getX().gt(n.Minus1) && this.getX().lt(Point.getN()),
                    t = this.getY().gt(n.Minus1) && this.getY().lt(Point.getN());
                if (!e || !t) throw new Error("Point does not lie on the curve");
                if (!this.mul(Point.getN()).isInfinity()) throw new Error("Point times N must be infinity");
                return this
            }, Point.pointToCompressed = function(e) {
                var t, r = e.getX().toBuffer({
                        size: 32
                    }),
                    n = e.getY().toBuffer({
                        size: 32
                    });
                return t = n[n.length - 1] % 2 ? new Buffer([3]) : new Buffer([2]), i.concat([t, r])
            }, e.exports = Point
        },
        6098: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = r(6281),
                s = r(12),
                o = r(5609).doubleblake256,
                a = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    if (Buffer.isBuffer(t)) {
                        var r = t;
                        this.fromBuffer(r)
                    } else if ("string" == typeof t) {
                        var n = t;
                        this.fromString(n)
                    } else t && this.set(t)
                };
            a.prototype.set = function(e) {
                return this.buf = e.buf || this.buf || void 0, this
            }, a.validChecksum = function(e, t) {
                return n.isString(e) && (e = new s.Buffer(i.decode(e))), n.isString(t) && (t = new s.Buffer(i.decode(t))), t || (t = e.slice(-4), e = e.slice(0, -4)), a.checksum(e).toString("hex") === t.toString("hex")
            }, a.decode = function(e) {
                if ("string" != typeof e) throw new Error("Input must be a string");
                var t = new Buffer(i.decode(e));
                if (t.length < 4) throw new Error("Input string too short");
                var r = t.slice(0, -4),
                    n = t.slice(-4),
                    s = o(r).slice(0, 4);
                if (n.toString("hex") !== s.toString("hex")) throw new Error("Checksum mismatch");
                return r
            }, a.checksum = function(e) {
                return o(e).slice(0, 4)
            }, a.encode = function(e) {
                if (!Buffer.isBuffer(e)) throw new Error("Input must be a buffer");
                var t = new Buffer(e.length + 4),
                    r = a.checksum(e);
                return e.copy(t), r.copy(t, e.length), i.encode(t)
            }, a.prototype.fromBuffer = function(e) {
                return this.buf = e, this
            }, a.prototype.fromString = function(e) {
                var t = a.decode(e);
                return this.buf = t, this
            }, a.prototype.toBuffer = function() {
                return this.buf
            }, a.prototype.toString = function() {
                return a.encode(this.buf)
            }, e.exports = a
        },
        6281: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = r(7574),
                s = r(12),
                o = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".split(""),
                a = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    if (Buffer.isBuffer(t)) {
                        var r = t;
                        this.fromBuffer(r)
                    } else if ("string" == typeof t) {
                        var n = t;
                        this.fromString(n)
                    } else t && this.set(t)
                };
            a.validCharacters = function(e) {
                return s.Buffer.isBuffer(e) && (e = e.toString()), n.all(n.map(e, (function(e) {
                    return n.contains(o, e)
                })))
            }, a.prototype.set = function(e) {
                return this.buf = e.buf || this.buf || void 0, this
            }, a.encode = function(e) {
                if (!s.Buffer.isBuffer(e)) throw new Error("Input should be a buffer");
                return i.encode(e)
            }, a.decode = function(e) {
                if ("string" != typeof e) throw new Error("Input should be a string");
                return new Buffer(i.decode(e))
            }, a.prototype.fromBuffer = function(e) {
                return this.buf = e, this
            }, a.prototype.fromString = function(e) {
                var t = a.decode(e);
                return this.buf = t, this
            }, a.prototype.toBuffer = function() {
                return this.buf
            }, a.prototype.toString = function() {
                return a.encode(this.buf)
            }, e.exports = a
        },
        6283: function(e, t, r) {
            "use strict";

            function n() {}
            n.getRandomBuffer = function(e) {
                return process.browser ? n.getRandomBufferBrowser(e) : n.getRandomBufferNode(e)
            }, n.getRandomBufferNode = function(e) {
                return r(10386).randomBytes(e)
            }, n.getRandomBufferBrowser = function(e) {
                if (!window.crypto && !window.msCrypto) throw new Error("window.crypto not available");
                if (window.crypto && window.crypto.getRandomValues) var t = window.crypto;
                else {
                    if (!window.msCrypto || !window.msCrypto.getRandomValues) throw new Error("window.crypto.getRandomValues not available");
                    t = window.msCrypto
                }
                var r = new Uint8Array(e);
                return t.getRandomValues(r), new Buffer(r)
            }, n.getPseudoRandomBuffer = function(e) {
                for (var t, r = new Buffer(e), n = 0; n <= e; n++) {
                    0 === n - 4 * Math.floor(n / 4) ? (t = 4294967296 * Math.random(), r[n] = 255 & t) : r[n] = 255 & (t >>>= 8)
                }
                return r
            }, e.exports = n
        },
        6284: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = r(5603),
                s = r(5519),
                o = r(5802),
                a = r(5713),
                u = r(5609),
                f = (r(5588), r(5506)),
                h = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    var r = e._from(t);
                    return this.version = r.version, this.prevHash = r.prevHash, this.merkleRoot = r.merkleRoot, this.time = r.time, this.timestamp = r.time, this.bits = r.bits, this.nonce = r.nonce, r.hash && f.checkState(this.hash === r.hash, "Argument object hash property does not match block hash."), this
                };
            h._from = function(e) {
                var t = {};
                if (s.isBuffer(e)) t = h._fromBufferReader(o(e));
                else {
                    if (!n.isObject(e)) throw new TypeError("Unrecognized argument for BlockHeader");
                    t = h._fromObject(e)
                }
                return t
            }, h._fromObject = function(e) {
                f.checkArgument(e, "data is required");
                var t = e.prevHash,
                    r = e.merkleRoot;
                return n.isString(e.prevHash) && (t = s.reverse(new Buffer(e.prevHash, "hex"))), n.isString(e.merkleRoot) && (r = s.reverse(new Buffer(e.merkleRoot, "hex"))), {
                    hash: e.hash,
                    version: e.version,
                    prevHash: t,
                    merkleRoot: r,
                    time: e.time,
                    timestamp: e.time,
                    bits: e.bits,
                    nonce: e.nonce
                }
            }, h.fromObject = function(e) {
                var t = h._fromObject(e);
                return new h(t)
            }, h.fromRawBlock = function(e) {
                s.isBuffer(e) || (e = new Buffer(e, "binary"));
                var t = o(e);
                t.pos = h.Constants.START_OF_HEADER;
                var r = h._fromBufferReader(t);
                return new h(r)
            }, h.fromBuffer = function(e) {
                var t = h._fromBufferReader(o(e));
                return new h(t)
            }, h.fromString = function(e) {
                var t = new Buffer(e, "hex");
                return h.fromBuffer(t)
            }, h._fromBufferReader = function(e) {
                var t = {};
                return t.version = e.readUInt32LE(), t.prevHash = e.read(32), t.merkleRoot = e.read(32), t.time = e.readUInt32LE(), t.bits = e.readUInt32LE(), t.nonce = e.readUInt32LE(), t
            }, h.fromBufferReader = function(e) {
                var t = h._fromBufferReader(e);
                return new h(t)
            }, h.prototype.toObject = h.prototype.toJSON = function() {
                return {
                    hash: this.hash,
                    version: this.version,
                    prevHash: s.reverse(this.prevHash).toString("hex"),
                    merkleRoot: s.reverse(this.merkleRoot).toString("hex"),
                    time: this.time,
                    bits: this.bits,
                    nonce: this.nonce
                }
            }, h.prototype.toBuffer = function() {
                return this.toBufferWriter().concat()
            }, h.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, h.prototype.toBufferWriter = function(e) {
                return e || (e = new a), e.writeUInt32LE(this.version), e.write(this.prevHash), e.write(this.merkleRoot), e.writeUInt32LE(this.time), e.writeUInt32LE(this.bits), e.writeUInt32LE(this.nonce), e
            }, h.prototype.getTargetDifficulty = function(e) {
                e = e || this.bits;
                for (var t = new i(16777215 & e), r = 8 * ((e >>> 24) - 3); r-- > 0;) t = t.mul(new i(2));
                return t
            }, h.prototype.getDifficulty = function() {
                var e = this.getTargetDifficulty(486604799).mul(new i(Math.pow(10, 8))),
                    t = this.getTargetDifficulty(),
                    r = e.div(t).toString(10),
                    n = r.length - 8;
                return r = r.slice(0, n) + "." + r.slice(n), parseFloat(r)
            }, h.prototype._getHash = function() {
                var e = this.toBuffer();
                return u.blake256(e)
            };
            var c = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._id || (this._id = o(this._getHash()).readReverse().toString("hex")), this._id
                },
                set: n.noop
            };
            Object.defineProperty(h.prototype, "id", c), Object.defineProperty(h.prototype, "hash", c), h.prototype.validTimestamp = function() {
                var e = Math.round((new Date).getTime() / 1e3);
                return !(this.time > e + h.Constants.MAX_TIME_OFFSET)
            }, h.prototype.validProofOfWork = function() {
                var e = new i(this.id, "hex"),
                    t = this.getTargetDifficulty();
                return !(e.cmp(t) > 0)
            }, h.prototype.inspect = function() {
                return "<BlockHeader " + this.id + ">"
            }, h.Constants = {
                START_OF_HEADER: 8,
                MAX_TIME_OFFSET: 7200,
                LARGEST_HASH: new i("10000000000000000000000000000000000000000000000000000000000000000", "hex")
            }, e.exports = h
        },
        6712: function(e, t, r) {
            "use strict";
            e.exports = {
                _cache: {},
                _count: 0,
                _eraseIndex: 0,
                _usedList: {},
                _usedIndex: {},
                _CACHE_SIZE: 5e3,
                get: function(e, t, r) {
                    var n = e + "/" + t + "/" + (r = !!r);
                    if (this._cache[n]) return this._cacheHit(n), this._cache[n]
                },
                set: function(e, t, r, n) {
                    var i = e + "/" + t + "/" + (r = !!r);
                    this._cache[i] = n, this._cacheHit(i)
                },
                _cacheHit: function(e) {
                    this._usedIndex[e] && delete this._usedList[this._usedIndex[e]], this._usedList[this._count] = e, this._usedIndex[e] = this._count, this._count++, this._cacheRemove()
                },
                _cacheRemove: function() {
                    for (; this._eraseIndex < this._count - this._CACHE_SIZE;) {
                        if (this._usedList[this._eraseIndex]) {
                            var e = this._usedList[this._eraseIndex];
                            delete this._usedIndex[e], delete this._cache[e]
                        }
                        delete this._usedList[this._eraseIndex], this._eraseIndex++
                    }
                }
            }
        },
        7569: function(e, t, r) {
            "use strict";
            var n = r(5603),
                Point = r(5962),
                i = r(5678),
                s = r(5712),
                o = r(6283),
                a = r(5609),
                u = r(5519),
                f = r(5491),
                h = r(5506),
                c = function e(t) {
                    if (!(this instanceof e)) return new e(t);
                    t && this.set(t)
                };
            c.prototype.set = function(e) {
                return this.hashbuf = e.hashbuf || this.hashbuf, this.endian = e.endian || this.endian, this.privkey = e.privkey || this.privkey, this.pubkey = e.pubkey || (this.privkey ? this.privkey.publicKey : this.pubkey), this.sig = e.sig || this.sig, this.k = e.k || this.k, this.verified = e.verified || this.verified, this
            }, c.prototype.privkey2pubkey = function() {
                this.pubkey = this.privkey.toPublicKey()
            }, c.prototype.calci = function() {
                for (var e = 0; e < 4; e++) {
                    var t;
                    this.sig.i = e;
                    try {
                        t = this.toPublicKey()
                    } catch (e) {
                        console.error(e);
                        continue
                    }
                    if (t.point.eq(this.pubkey.point)) return this.sig.compressed = this.pubkey.compressed, this
                }
                throw this.sig.i = void 0, new Error("Unable to find valid recovery factor")
            }, c.fromString = function(e) {
                var t = JSON.parse(e);
                return new c(t)
            }, c.prototype.randomK = function() {
                var e, t = Point.getN();
                do {
                    e = n.fromBuffer(o.getRandomBuffer(32))
                } while (!e.lt(t) || !e.gt(n.Zero));
                return this.k = e, this
            }, c.prototype.deterministicK = function(e) {
                f.isUndefined(e) && (e = 0);
                var t = new Buffer(32);
                t.fill(1);
                var r = new Buffer(32);
                r.fill(0);
                var i = this.privkey.bn.toBuffer({
                        size: 32
                    }),
                    s = "little" === this.endian ? u.reverse(this.hashbuf) : this.hashbuf;
                r = a.sha256hmac(Buffer.concat([t, new Buffer([0]), i, s]), r), t = a.sha256hmac(t, r), r = a.sha256hmac(Buffer.concat([t, new Buffer([1]), i, s]), r), t = a.sha256hmac(t, r), t = a.sha256hmac(t, r);
                for (var o = n.fromBuffer(t), h = Point.getN(), c = 0; c < e || !o.lt(h) || !o.gt(n.Zero); c++) r = a.sha256hmac(Buffer.concat([t, new Buffer([0])]), r), t = a.sha256hmac(t, r), t = a.sha256hmac(t, r), o = n.fromBuffer(t);
                return this.k = o, this
            }, c.prototype.toPublicKey = function() {
                var e = this.sig.i;
                h.checkArgument(0 === e || 1 === e || 2 === e || 3 === e, new Error("i must be equal to 0, 1, 2, or 3"));
                var t = n.fromBuffer(this.hashbuf),
                    r = this.sig.r,
                    i = this.sig.s,
                    o = 1 & e,
                    a = e >> 1,
                    u = Point.getN(),
                    f = Point.getG(),
                    c = a ? r.add(u) : r,
                    d = Point.fromX(o, c);
                if (!d.mul(u).isInfinity()) throw new Error("nR is not a valid curve point");
                var p = t.neg().mod(u),
                    l = r.invm(u),
                    m = d.mul(i).add(f.mul(p)).mul(l);
                return s.fromPoint(m, this.sig.compressed)
            }, c.prototype.sigError = function() {
                if (!u.isBuffer(this.hashbuf) || 32 !== this.hashbuf.length) return "hashbuf must be a 32 byte buffer";
                var e = this.sig.r,
                    t = this.sig.s;
                if (!(e.gt(n.Zero) && e.lt(Point.getN()) && t.gt(n.Zero) && t.lt(Point.getN()))) return "r and s not in range";
                var r = n.fromBuffer(this.hashbuf, this.endian ? {
                        endian: this.endian
                    } : void 0),
                    i = Point.getN(),
                    s = t.invm(i),
                    o = s.mul(r).mod(i),
                    a = s.mul(e).mod(i),
                    f = Point.getG().mulAdd(o, this.pubkey.point, a);
                return f.isInfinity() ? "p is infinity" : 0 !== f.getX().mod(i).cmp(e) && "Invalid signature"
            }, c.toLowS = function(e) {
                return e.gt(n.fromBuffer(new Buffer("7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0", "hex"))) && (e = Point.getN().sub(e)), e
            }, c.prototype._findSignature = function(e, t) {
                var r, i, s, o = Point.getN(),
                    a = Point.getG(),
                    u = 0;
                do {
                    (!this.k || u > 0) && this.deterministicK(u), u++, r = this.k, i = a.mul(r).x.mod(o), s = r.invm(o).mul(t.add(e.mul(i))).mod(o)
                } while (i.cmp(n.Zero) <= 0 || s.cmp(n.Zero) <= 0);
                return {
                    s: s = c.toLowS(s),
                    r: i
                }
            }, c.prototype.sign = function() {
                var e = this.hashbuf,
                    t = this.privkey,
                    r = t.bn;
                h.checkState(e && t && r, new Error("invalid parameters")), h.checkState(u.isBuffer(e) && 32 === e.length, new Error("hashbuf must be a 32 byte buffer"));
                var s = n.fromBuffer(e, this.endian ? {
                        endian: this.endian
                    } : void 0),
                    o = this._findSignature(r, s);
                return o.compressed = this.pubkey.compressed, this.sig = new i(o), this
            }, c.prototype.signRandomK = function() {
                return this.randomK(), this.sign()
            }, c.prototype.toString = function() {
                var e = {};
                return this.hashbuf && (e.hashbuf = this.hashbuf.toString("hex")), this.privkey && (e.privkey = this.privkey.toString()), this.pubkey && (e.pubkey = this.pubkey.toString()), this.sig && (e.sig = this.sig.toString()), this.k && (e.k = this.k.toString()), JSON.stringify(e)
            }, c.prototype.verify = function() {
                return this.sigError() ? this.verified = !1 : this.verified = !0, this
            }, c.sign = function(e, t, r) {
                return c().set({
                    hashbuf: e,
                    endian: r,
                    privkey: t
                }).sign().sig
            }, c.verify = function(e, t, r, n) {
                return c().set({
                    hashbuf: e,
                    endian: n,
                    sig: t,
                    pubkey: r
                }).verify().verified
            }, e.exports = c
        },
        7577: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = r(6284),
                s = r(5519),
                o = r(5802),
                a = r(5713),
                u = r(5609),
                f = (r(5588), r(6282)),
                h = r(5506);

            function c(e) {
                if (!(this instanceof c)) return new c(e);
                var t = {};
                if (s.isBuffer(e)) t = c._fromBufferReader(o(e));
                else {
                    if (!n.isObject(e)) throw new TypeError("Unrecognized argument for MerkleBlock");
                    t = {
                        header: e.header instanceof i ? e.header : i.fromObject(e.header),
                        numTransactions: e.numTransactions,
                        hashes: e.hashes,
                        flags: e.flags
                    }
                }
                return n.extend(this, t), this._flagBitsUsed = 0, this._hashesUsed = 0, this
            }
            c.fromBuffer = function(e) {
                return c.fromBufferReader(o(e))
            }, c.fromBufferReader = function(e) {
                return new c(c._fromBufferReader(e))
            }, c.prototype.toBuffer = function() {
                return this.toBufferWriter().concat()
            }, c.prototype.toBufferWriter = function(e) {
                e || (e = new a), e.write(this.header.toBuffer()), e.writeUInt32LE(this.numTransactions), e.writeVarintNum(this.hashes.length);
                for (var t = 0; t < this.hashes.length; t++) e.write(new Buffer(this.hashes[t], "hex"));
                for (e.writeVarintNum(this.flags.length), t = 0; t < this.flags.length; t++) e.writeUInt8(this.flags[t]);
                return e
            }, c.prototype.toObject = c.prototype.toJSON = function() {
                return {
                    header: this.header.toObject(),
                    numTransactions: this.numTransactions,
                    hashes: this.hashes,
                    flags: this.flags
                }
            }, c.prototype.validMerkleTree = function() {
                if (h.checkState(n.isArray(this.flags), "MerkleBlock flags is not an array"), h.checkState(n.isArray(this.hashes), "MerkleBlock hashes is not an array"), this.hashes.length > this.numTransactions) return !1;
                if (8 * this.flags.length < this.hashes.length) return !1;
                var e = this._calcTreeHeight(),
                    t = {
                        hashesUsed: 0,
                        flagBitsUsed: 0
                    },
                    r = this._traverseMerkleTree(e, 0, t);
                return t.hashesUsed === this.hashes.length && s.equals(r, this.header.merkleRoot)
            }, c.prototype._traverseMerkleTree = function(e, t, r) {
                if ((r = r || {}).txs = r.txs || [], r.flagBitsUsed = r.flagBitsUsed || 0, r.hashesUsed = r.hashesUsed || 0, r.flagBitsUsed > 8 * this.flags.length) return null;
                var n = this.flags[r.flagBitsUsed >> 3] >>> (7 & r.flagBitsUsed++) & 1;
                if (0 !== e && n) {
                    var i = this._traverseMerkleTree(e - 1, 2 * t, r),
                        s = i;
                    return 2 * t + 1 < this._calcTreeWidth(e - 1) && (s = this._traverseMerkleTree(e - 1, 2 * t + 1, r)), u.blake256(new Buffer.concat([i, s]))
                }
                if (r.hashesUsed >= this.hashes.length) return null;
                var o = this.hashes[r.hashesUsed++];
                return 0 === e && n && r.txs.push(o), new Buffer(o, "hex")
            }, c.prototype._calcTreeWidth = function(e) {
                return this.numTransactions + (1 << e) - 1 >> e
            }, c.prototype._calcTreeHeight = function() {
                for (var e = 0; this._calcTreeWidth(e) > 1;) e++;
                return e
            }, c.prototype.hasTransaction = function(e) {
                h.checkArgument(!n.isUndefined(e), "tx cannot be undefined"), h.checkArgument(e instanceof f || "string" == typeof e, 'Invalid tx given, tx must be a "string" or "Transaction"');
                var t = e;
                e instanceof f && (t = s.reverse(new Buffer(e.id, "hex")).toString("hex"));
                var r = [],
                    i = this._calcTreeHeight();
                return this._traverseMerkleTree(i, 0, {
                    txs: r
                }), -1 !== r.indexOf(t)
            }, c._fromBufferReader = function(e) {
                h.checkState(!e.finished(), "No merkleblock data received");
                var t = {};
                t.header = i.fromBufferReader(e), t.numTransactions = e.readUInt32LE();
                var r = e.readVarintNum();
                t.hashes = [];
                for (var n = 0; n < r; n++) t.hashes.push(e.read(32).toString("hex"));
                var s = e.readVarintNum();
                for (t.flags = [], n = 0; n < s; n++) t.flags.push(e.readUInt8());
                return t
            }, c.fromObject = function(e) {
                return new c(e)
            }, e.exports = c
        },
        7578: function(e, t, r) {
            "use strict";
            var n = r(72),
                i = r(12),
                s = r(5491),
                o = r(5506),
                a = r(5603),
                u = r(6281),
                f = r(6098),
                h = r(5609),
                c = r(5872),
                d = r(6712),
                Point = r(5962),
                p = r(6280),
                l = r(6283),
                m = r(5677),
                g = m.HDPrivateKey,
                v = r(5519),
                y = r(5588);

            function b(e) {
                if (e instanceof b) return e;
                if (!(this instanceof b)) return new b(e);
                if (!e) return this._generateRandomly();
                if (c.get(e)) return this._generateRandomly(e);
                if (s.isString(e) || v.isBuffer(e))
                    if (b.isValidSerialized(e)) this._buildFromSerialized(e);
                    else if (y.isValidJSON(e)) this._buildFromJSON(e);
                else {
                    if (!v.isBuffer(e) || !b.isValidSerialized(e.toString())) throw b.getSerializedError(e);
                    this._buildFromSerialized(e.toString())
                } else {
                    if (!s.isObject(e)) throw new g.UnrecognizedArgument(e);
                    this._buildFromObject(e)
                }
            }
            b.isValidPath = function(e, t) {
                if (s.isString(e)) {
                    var r = b._getDerivationIndexes(e);
                    return null !== r && s.all(r, b.isValidPath)
                }
                return !!s.isNumber(e) && (e < b.Hardened && !0 === t && (e += b.Hardened), e >= 0 && e < b.MaxIndex)
            }, b._getDerivationIndexes = function(e) {
                var t = e.split("/");
                if (s.contains(b.RootElementAlias, e)) return [];
                if (!s.contains(b.RootElementAlias, t[0])) return null;
                var r = t.slice(1).map((function(e) {
                    var t = "'" === e.slice(-1);
                    if (t && (e = e.slice(0, -1)), !e || "-" === e[0]) return NaN;
                    var r = +e;
                    return t && (r += b.Hardened), r
                }));
                return s.any(r, isNaN) ? null : r
            }, b.prototype.derive = function(e, t) {
                if (s.isNumber(e)) return this._deriveWithNumber(e, t);
                if (s.isString(e)) return this._deriveFromString(e);
                throw new g.InvalidDerivationArgument(e)
            }, b.prototype._deriveWithNumber = function(e, t) {
                if (!b.isValidPath(e, t)) throw new g.InvalidPath(e);
                t = e >= b.Hardened || t, e < b.Hardened && !0 === t && (e += b.Hardened);
                var r = d.get(this.xprivkey, e, t);
                if (r) return r;
                var n, s = v.integerAsBuffer(e);
                n = t ? v.concat([new i.Buffer([0]), this.privateKey.toBuffer(), s]) : v.concat([this.publicKey.toBuffer(), s]);
                var o = h.sha512hmac(n, this._buffers.chainCode),
                    u = a.fromBuffer(o.slice(0, 32), {
                        size: 32
                    }),
                    f = o.slice(32, 64),
                    c = u.add(this.privateKey.toBigNumber()).mod(Point.getN()).toBuffer({
                        size: 32
                    }),
                    p = new b({
                        network: this.network,
                        depth: this.depth + 1,
                        parentFingerPrint: this.fingerPrint,
                        childIndex: e,
                        chainCode: f,
                        privateKey: c
                    });
                return d.set(this.xprivkey, e, t, p), p
            }, b.prototype._deriveFromString = function(e) {
                if (!b.isValidPath(e)) throw new g.InvalidPath(e);
                return b._getDerivationIndexes(e).reduce((function(e, t) {
                    return e._deriveWithNumber(t)
                }), this)
            }, b.isValidSerialized = function(e, t) {
                return !b.getSerializedError(e, t)
            }, b.getSerializedError = function(e, t) {
                if (!s.isString(e) && !v.isBuffer(e)) return new g.UnrecognizedArgument("Expected string or buffer");
                if (!u.validCharacters(e)) return new m.InvalidB58Char("(unknown)", e);
                try {
                    e = f.decode(e)
                } catch (t) {
                    return new m.InvalidB58Checksum(e)
                }
                if (e.length !== b.DataLength) return new g.InvalidLength(e);
                if (!s.isUndefined(t)) {
                    var r = b._validateNetwork(e, t);
                    if (r) return r
                }
                return null
            }, b._validateNetwork = function(e, t) {
                var r = c.get(t);
                if (!r) return new m.InvalidNetworkArgument(t);
                var n = e.slice(0, 4);
                return v.integerFromBuffer(n) !== r.xprivkey ? new m.InvalidNetwork(n) : null
            }, b.fromString = function(e) {
                return o.checkArgument(s.isString(e), "No valid string was provided"), new b(e)
            }, b.fromObject = function(e) {
                return o.checkArgument(s.isObject(e), "No valid argument was provided"), new b(e)
            }, b.prototype._buildFromJSON = function(e) {
                return this._buildFromObject(JSON.parse(e))
            }, b.prototype._buildFromObject = function(e) {
                var t = {
                    version: e.network ? v.integerAsBuffer(c.get(e.network).xprivkey) : e.version,
                    depth: s.isNumber(e.depth) ? v.integerAsSingleByteBuffer(e.depth) : e.depth,
                    parentFingerPrint: s.isNumber(e.parentFingerPrint) ? v.integerAsBuffer(e.parentFingerPrint) : e.parentFingerPrint,
                    childIndex: s.isNumber(e.childIndex) ? v.integerAsBuffer(e.childIndex) : e.childIndex,
                    chainCode: s.isString(e.chainCode) ? v.hexToBuffer(e.chainCode) : e.chainCode,
                    privateKey: s.isString(e.privateKey) && y.isHexa(e.privateKey) ? v.hexToBuffer(e.privateKey) : e.privateKey,
                    checksum: e.checksum ? e.checksum.length ? e.checksum : v.integerAsBuffer(e.checksum) : void 0
                };
                return this._buildFromBuffers(t)
            }, b.prototype._buildFromSerialized = function(e) {
                var t = f.decode(e),
                    r = {
                        version: t.slice(b.VersionStart, b.VersionEnd),
                        depth: t.slice(b.DepthStart, b.DepthEnd),
                        parentFingerPrint: t.slice(b.ParentFingerPrintStart, b.ParentFingerPrintEnd),
                        childIndex: t.slice(b.ChildIndexStart, b.ChildIndexEnd),
                        chainCode: t.slice(b.ChainCodeStart, b.ChainCodeEnd),
                        privateKey: t.slice(b.PrivateKeyStart, b.PrivateKeyEnd),
                        checksum: t.slice(b.ChecksumStart, b.ChecksumEnd),
                        xprivkey: e
                    };
                return this._buildFromBuffers(r)
            }, b.prototype._generateRandomly = function(e) {
                return b.fromSeed(l.getRandomBuffer(64), e)
            }, b.fromSeed = function(e, t) {
                if (y.isHexaString(e) && (e = v.hexToBuffer(e)), !Buffer.isBuffer(e)) throw new g.InvalidEntropyArgument(e);
                if (e.length < 16) throw new g.InvalidEntropyArgument.NotEnoughEntropy(e);
                if (e.length > 64) throw new g.InvalidEntropyArgument.TooMuchEntropy(e);
                var r = h.sha512hmac(e, new i.Buffer("Bitcoin seed"));
                return new b({
                    network: c.get(t) || c.defaultNetwork,
                    depth: 0,
                    parentFingerPrint: 0,
                    childIndex: 0,
                    privateKey: r.slice(0, 32),
                    chainCode: r.slice(32, 64)
                })
            }, b.prototype._calcHDPublicKey = function() {
                if (!this._hdPublicKey) {
                    var e = r(7579);
                    this._hdPublicKey = new e(this)
                }
            }, b.prototype._buildFromBuffers = function(e) {
                b._validateBufferArguments(e), y.defineImmutable(this, {
                    _buffers: e
                });
                var t = [e.version, e.depth, e.parentFingerPrint, e.childIndex, e.chainCode, v.emptyBuffer(1), e.privateKey],
                    r = i.Buffer.concat(t);
                if (e.checksum && e.checksum.length) {
                    if (e.checksum.toString() !== f.checksum(r).toString()) throw new m.InvalidB58Checksum(r)
                } else e.checksum = f.checksum(r);
                var n, s = c.get(v.integerFromBuffer(e.version));
                n = f.encode(i.Buffer.concat(t)), e.xprivkey = new Buffer(n);
                var o = new p(a.fromBuffer(e.privateKey), s),
                    u = o.toPublicKey(),
                    d = b.ParentFingerPrintSize,
                    l = h.blake256ripemd160(u.toBuffer()).slice(0, d);
                return y.defineImmutable(this, {
                    xprivkey: n,
                    network: s,
                    depth: v.integerFromSingleByteBuffer(e.depth),
                    privateKey: o,
                    publicKey: u,
                    fingerPrint: l
                }), this._hdPublicKey = null, Object.defineProperty(this, "hdPublicKey", {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                        return this._calcHDPublicKey(), this._hdPublicKey
                    }
                }), Object.defineProperty(this, "xpubkey", {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                        return this._calcHDPublicKey(), this._hdPublicKey.xpubkey
                    }
                }), this
            }, b._validateBufferArguments = function(e) {
                var t = function(t, r) {
                    var i = e[t];
                    n(v.isBuffer(i), t + " argument is not a buffer"), n(i.length === r, t + " has not the expected size: found " + i.length + ", expected " + r)
                };
                t("version", b.VersionSize), t("depth", b.DepthSize), t("parentFingerPrint", b.ParentFingerPrintSize), t("childIndex", b.ChildIndexSize), t("chainCode", b.ChainCodeSize), t("privateKey", b.PrivateKeySize), e.checksum && e.checksum.length && t("checksum", b.CheckSumSize)
            }, b.prototype.toString = function() {
                return this.xprivkey
            }, b.prototype.inspect = function() {
                return "<HDPrivateKey: " + this.xprivkey + ">"
            }, b.prototype.toObject = b.prototype.toJSON = function() {
                return {
                    network: c.get(v.integerFromBuffer(this._buffers.version), "xprivkey").name,
                    depth: v.integerFromSingleByteBuffer(this._buffers.depth),
                    fingerPrint: v.integerFromBuffer(this.fingerPrint),
                    parentFingerPrint: v.integerFromBuffer(this._buffers.parentFingerPrint),
                    childIndex: v.integerFromBuffer(this._buffers.childIndex),
                    chainCode: v.bufferToHex(this._buffers.chainCode),
                    privateKey: this.privateKey.toBuffer().toString("hex"),
                    checksum: v.integerFromBuffer(this._buffers.checksum),
                    xprivkey: this.xprivkey
                }
            }, b.fromBuffer = function(e) {
                return new b(e.toString())
            }, b.prototype.toBuffer = function() {
                return v.copy(this._buffers.xprivkey)
            }, b.DefaultDepth = 0, b.DefaultFingerprint = 0, b.DefaultChildIndex = 0, b.Hardened = 2147483648, b.MaxIndex = 2 * b.Hardened, b.RootElementAlias = ["m", "M", "m'", "M'"], b.VersionSize = 4, b.DepthSize = 1, b.ParentFingerPrintSize = 4, b.ChildIndexSize = 4, b.ChainCodeSize = 32, b.PrivateKeySize = 32, b.CheckSumSize = 4, b.DataLength = 78, b.SerializedByteSize = 82, b.VersionStart = 0, b.VersionEnd = b.VersionStart + b.VersionSize, b.DepthStart = b.VersionEnd, b.DepthEnd = b.DepthStart + b.DepthSize, b.ParentFingerPrintStart = b.DepthEnd, b.ParentFingerPrintEnd = b.ParentFingerPrintStart + b.ParentFingerPrintSize, b.ChildIndexStart = b.ParentFingerPrintEnd, b.ChildIndexEnd = b.ChildIndexStart + b.ChildIndexSize, b.ChainCodeStart = b.ChildIndexEnd, b.ChainCodeEnd = b.ChainCodeStart + b.ChainCodeSize, b.PrivateKeyStart = b.ChainCodeEnd + 1, b.PrivateKeyEnd = b.PrivateKeyStart + b.PrivateKeySize, b.ChecksumStart = b.PrivateKeyEnd, b.ChecksumEnd = b.ChecksumStart + b.CheckSumSize, n(b.ChecksumEnd === b.SerializedByteSize), e.exports = b
        },
        7579: function(e, t, r) {
            "use strict";
            var n = r(5491),
                i = r(5506),
                s = r(5603),
                o = r(6281),
                a = r(6098),
                u = r(5609),
                f = r(7578),
                h = r(6712),
                c = r(5872),
                Point = r(5962),
                d = r(5712),
                p = r(5677),
                l = p,
                m = p.HDPublicKey,
                g = r(72),
                v = r(5588),
                y = r(5519);

            function b(e) {
                if (e instanceof b) return e;
                if (!(this instanceof b)) return new b(e);
                if (e) {
                    if (n.isString(e) || y.isBuffer(e)) {
                        var t = b.getSerializedError(e);
                        if (t) {
                            if (y.isBuffer(e) && !b.getSerializedError(e.toString())) return this._buildFromSerialized(e.toString());
                            if (t instanceof m.ArgumentIsPrivateExtended) return new f(e).hdPublicKey;
                            throw t
                        }
                        return this._buildFromSerialized(e)
                    }
                    if (n.isObject(e)) return e instanceof f ? this._buildFromPrivate(e) : this._buildFromObject(e);
                    throw new m.UnrecognizedArgument(e)
                }
                throw new m.MustSupplyArgument
            }
            b.isValidPath = function(e) {
                if (n.isString(e)) {
                    var t = f._getDerivationIndexes(e);
                    return null !== t && n.all(t, b.isValidPath)
                }
                return !!n.isNumber(e) && (e >= 0 && e < b.Hardened)
            }, b.prototype.derive = function(e, t) {
                if (n.isNumber(e)) return this._deriveWithNumber(e, t);
                if (n.isString(e)) return this._deriveFromString(e);
                throw new m.InvalidDerivationArgument(e)
            }, b.prototype._deriveWithNumber = function(e, t) {
                if (e >= b.Hardened || t) throw new m.InvalidIndexCantDeriveHardened;
                if (e < 0) throw new m.InvalidPath(e);
                var r = h.get(this.xpubkey, e, !1);
                if (r) return r;
                var n = y.integerAsBuffer(e),
                    i = y.concat([this.publicKey.toBuffer(), n]),
                    o = u.sha512hmac(i, this._buffers.chainCode),
                    a = s.fromBuffer(o.slice(0, 32), {
                        size: 32
                    }),
                    f = o.slice(32, 64),
                    c = d.fromPoint(Point.getG().mul(a).add(this.publicKey.point)),
                    p = new b({
                        network: this.network,
                        depth: this.depth + 1,
                        parentFingerPrint: this.fingerPrint,
                        childIndex: e,
                        chainCode: f,
                        publicKey: c
                    });
                return h.set(this.xpubkey, e, !1, p), p
            }, b.prototype._deriveFromString = function(e) {
                if (n.contains(e, "'")) throw new m.InvalidIndexCantDeriveHardened;
                if (!b.isValidPath(e)) throw new m.InvalidPath(e);
                return f._getDerivationIndexes(e).reduce((function(e, t) {
                    return e._deriveWithNumber(t)
                }), this)
            }, b.isValidSerialized = function(e, t) {
                return n.isNull(b.getSerializedError(e, t))
            }, b.getSerializedError = function(e, t) {
                if (!n.isString(e) && !y.isBuffer(e)) return new m.UnrecognizedArgument("expected buffer or string");
                if (!o.validCharacters(e)) return new l.InvalidB58Char("(unknown)", e);
                try {
                    e = a.decode(e)
                } catch (t) {
                    return new l.InvalidB58Checksum(e)
                }
                if (e.length !== b.DataSize) return new m.InvalidLength(e);
                if (!n.isUndefined(t)) {
                    var r = b._validateNetwork(e, t);
                    if (r) return r
                }
                var i = y.integerFromBuffer(e.slice(0, 4));
                return i === c.livenet.xprivkey || i === c.testnet.xprivkey || i === c.dcrdtestnet.xprivkey || i === c.dcrdlivenet.xprivkey ? new m.ArgumentIsPrivateExtended : null
            }, b._validateNetwork = function(e, t) {
                var r = c.get(t);
                if (!r) return new l.InvalidNetworkArgument(t);
                var n = e.slice(b.VersionStart, b.VersionEnd);
                return y.integerFromBuffer(n) !== r.xpubkey ? new l.InvalidNetwork(n) : null
            }, b.prototype._buildFromPrivate = function(e) {
                var t = n.clone(e._buffers),
                    r = Point.getG().mul(s.fromBuffer(t.privateKey));
                return t.publicKey = Point.pointToCompressed(r), t.version = y.integerAsBuffer(c.get(y.integerFromBuffer(t.version)).xpubkey), t.privateKey = void 0, t.checksum = void 0, t.xprivkey = void 0, this._buildFromBuffers(t)
            }, b.prototype._buildFromObject = function(e) {
                var t = {
                    version: e.network ? y.integerAsBuffer(c.get(e.network).xpubkey) : e.version,
                    depth: n.isNumber(e.depth) ? y.integerAsSingleByteBuffer(e.depth) : e.depth,
                    parentFingerPrint: n.isNumber(e.parentFingerPrint) ? y.integerAsBuffer(e.parentFingerPrint) : e.parentFingerPrint,
                    childIndex: n.isNumber(e.childIndex) ? y.integerAsBuffer(e.childIndex) : e.childIndex,
                    chainCode: n.isString(e.chainCode) ? y.hexToBuffer(e.chainCode) : e.chainCode,
                    publicKey: n.isString(e.publicKey) ? y.hexToBuffer(e.publicKey) : y.isBuffer(e.publicKey) ? e.publicKey : e.publicKey.toBuffer(),
                    checksum: n.isNumber(e.checksum) ? y.integerAsBuffer(e.checksum) : e.checksum
                };
                return this._buildFromBuffers(t)
            }, b.prototype._buildFromSerialized = function(e) {
                var t = a.decode(e),
                    r = {
                        version: t.slice(b.VersionStart, b.VersionEnd),
                        depth: t.slice(b.DepthStart, b.DepthEnd),
                        parentFingerPrint: t.slice(b.ParentFingerPrintStart, b.ParentFingerPrintEnd),
                        childIndex: t.slice(b.ChildIndexStart, b.ChildIndexEnd),
                        chainCode: t.slice(b.ChainCodeStart, b.ChainCodeEnd),
                        publicKey: t.slice(b.PublicKeyStart, b.PublicKeyEnd),
                        checksum: t.slice(b.ChecksumStart, b.ChecksumEnd),
                        xpubkey: e
                    };
                return this._buildFromBuffers(r)
            }, b.prototype._buildFromBuffers = function(e) {
                b._validateBufferArguments(e), v.defineImmutable(this, {
                    _buffers: e
                });
                var t = [e.version, e.depth, e.parentFingerPrint, e.childIndex, e.chainCode, e.publicKey],
                    r = y.concat(t),
                    n = a.checksum(r);
                if (e.checksum && e.checksum.length) {
                    if (e.checksum.toString("hex") !== n.toString("hex")) throw new l.InvalidB58Checksum(r, n)
                } else e.checksum = n;
                var i, s = c.get(y.integerFromBuffer(e.version));
                i = a.encode(y.concat(t)), e.xpubkey = new Buffer(i);
                var o = new d(e.publicKey, {
                        network: s
                    }),
                    f = b.ParentFingerPrintSize,
                    h = u.blake256ripemd160(o.toBuffer()).slice(0, f);
                return v.defineImmutable(this, {
                    xpubkey: i,
                    network: s,
                    depth: y.integerFromSingleByteBuffer(e.depth),
                    publicKey: o,
                    fingerPrint: h
                }), this
            }, b._validateBufferArguments = function(e) {
                var t = function(t, r) {
                    var n = e[t];
                    g(y.isBuffer(n), t + " argument is not a buffer, it's " + typeof n), g(n.length === r, t + " has not the expected size: found " + n.length + ", expected " + r)
                };
                t("version", b.VersionSize), t("depth", b.DepthSize), t("parentFingerPrint", b.ParentFingerPrintSize), t("childIndex", b.ChildIndexSize), t("chainCode", b.ChainCodeSize), t("publicKey", b.PublicKeySize), e.checksum && e.checksum.length && t("checksum", b.CheckSumSize)
            }, b.fromString = function(e) {
                return i.checkArgument(n.isString(e), "No valid string was provided"), new b(e)
            }, b.fromObject = function(e) {
                return i.checkArgument(n.isObject(e), "No valid argument was provided"), new b(e)
            }, b.prototype.toString = function() {
                return this.xpubkey
            }, b.prototype.inspect = function() {
                return "<HDPublicKey: " + this.xpubkey + ">"
            }, b.prototype.toObject = b.prototype.toJSON = function() {
                return {
                    network: c.get(y.integerFromBuffer(this._buffers.version)).name,
                    depth: y.integerFromSingleByteBuffer(this._buffers.depth),
                    fingerPrint: y.integerFromBuffer(this.fingerPrint),
                    parentFingerPrint: y.integerFromBuffer(this._buffers.parentFingerPrint),
                    childIndex: y.integerFromBuffer(this._buffers.childIndex),
                    chainCode: y.bufferToHex(this._buffers.chainCode),
                    publicKey: this.publicKey.toString(),
                    checksum: y.integerFromBuffer(this._buffers.checksum),
                    xpubkey: this.xpubkey
                }
            }, b.fromBuffer = function(e) {
                return new b(e)
            }, b.prototype.toBuffer = function() {
                return y.copy(this._buffers.xpubkey)
            }, b.Hardened = 2147483648, b.RootElementAlias = ["m", "M"], b.VersionSize = 4, b.DepthSize = 1, b.ParentFingerPrintSize = 4, b.ChildIndexSize = 4, b.ChainCodeSize = 32, b.PublicKeySize = 33, b.CheckSumSize = 4, b.DataSize = 78, b.SerializedByteSize = 82, b.VersionStart = 0, b.VersionEnd = b.VersionStart + b.VersionSize, b.DepthStart = b.VersionEnd, b.DepthEnd = b.DepthStart + b.DepthSize, b.ParentFingerPrintStart = b.DepthEnd, b.ParentFingerPrintEnd = b.ParentFingerPrintStart + b.ParentFingerPrintSize, b.ChildIndexStart = b.ParentFingerPrintEnd, b.ChildIndexEnd = b.ChildIndexStart + b.ChildIndexSize, b.ChainCodeStart = b.ChildIndexEnd, b.ChainCodeEnd = b.ChainCodeStart + b.ChainCodeSize, b.PublicKeyStart = b.ChainCodeEnd, b.PublicKeyEnd = b.PublicKeyStart + b.PublicKeySize, b.ChecksumStart = b.PublicKeyEnd, b.ChecksumEnd = b.ChecksumStart + b.CheckSumSize, g(b.PublicKeyEnd === b.DataSize), g(b.ChecksumEnd === b.SerializedByteSize), e.exports = b
        }
    }
]);