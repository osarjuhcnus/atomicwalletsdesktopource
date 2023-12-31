(window.webpackJsonp = window.webpackJsonp || []).push([
    [37], {
        1850: function(t, e, r) {
            "use strict";
            var n = r(343),
                a = r(345),
                o = r(178),
                s = r(624).subscription,
                i = r(120).formatters,
                c = r(120).errors,
                u = r(623),
                l = r(1851),
                d = function t(e, r, a) {
                    var s = this,
                        u = Array.prototype.slice.call(arguments);
                    if (!(this instanceof t)) throw new Error('Please use the "new" keyword to instantiate a web3.eth.Contract() object!');
                    if (this.setProvider = function() {
                            n.packageInit(s, arguments), s.clearSubscriptions = s._requestManager.clearSubscriptions
                        }, n.packageInit(this, [this.constructor]), this.clearSubscriptions = this._requestManager.clearSubscriptions, !e || !Array.isArray(e)) throw c.ContractMissingABIError();
                    this.options = {};
                    var d = u[u.length - 1];
                    d && "object" == typeof d && !Array.isArray(d) && (a = d, this.options = {
                        ...this.options,
                        ...this._getOrSetDefaultOptions(a)
                    }, r && "object" == typeof r && (r = null)), Object.defineProperty(this.options, "address", {
                        set: function(t) {
                            t && (s._address = o.toChecksumAddress(i.inputAddressFormatter(t)))
                        },
                        get: function() {
                            return s._address
                        },
                        enumerable: !0
                    }), Object.defineProperty(this.options, "jsonInterface", {
                        set: function(t) {
                            return s.methods = {}, s.events = {}, s._jsonInterface = t.map((function(t) {
                                var e, r;
                                if (t.constant = "view" === t.stateMutability || "pure" === t.stateMutability || t.constant, t.payable = "payable" === t.stateMutability || t.payable, t.name && (r = o._jsonInterfaceMethodToString(t)), "function" === t.type) {
                                    if (t.signature = l.encodeFunctionSignature(r), e = s._createTxObject.bind({
                                            method: t,
                                            parent: s
                                        }), s.methods[t.name]) {
                                        var n = s._createTxObject.bind({
                                            method: t,
                                            parent: s,
                                            nextMethod: s.methods[t.name]
                                        });
                                        s.methods[t.name] = n
                                    } else s.methods[t.name] = e;
                                    s.methods[t.signature] = e, s.methods[r] = e
                                } else if ("event" === t.type) {
                                    t.signature = l.encodeEventSignature(r);
                                    var a = s._on.bind(s, t.signature);
                                    s.events[t.name] && "bound " !== s.events[t.name].name || (s.events[t.name] = a), s.events[t.signature] = a, s.events[r] = a
                                }
                                return t
                            })), s.events.allEvents = s._on.bind(s, "allevents"), s._jsonInterface
                        },
                        get: function() {
                            return s._jsonInterface
                        },
                        enumerable: !0
                    });
                    var h = this.constructor.defaultAccount,
                        p = this.constructor.defaultBlock || "latest";
                    Object.defineProperty(this, "handleRevert", {
                        get: function() {
                            return !1 === s.options.handleRevert || !0 === s.options.handleRevert ? s.options.handleRevert : this.constructor.handleRevert
                        },
                        set: function(t) {
                            s.options.handleRevert = t
                        },
                        enumerable: !0
                    }), Object.defineProperty(this, "defaultCommon", {
                        get: function() {
                            return s.options.common || this.constructor.defaultCommon
                        },
                        set: function(t) {
                            s.options.common = t
                        },
                        enumerable: !0
                    }), Object.defineProperty(this, "defaultHardfork", {
                        get: function() {
                            return s.options.hardfork || this.constructor.defaultHardfork
                        },
                        set: function(t) {
                            s.options.hardfork = t
                        },
                        enumerable: !0
                    }), Object.defineProperty(this, "defaultChain", {
                        get: function() {
                            return s.options.chain || this.constructor.defaultChain
                        },
                        set: function(t) {
                            s.options.chain = t
                        },
                        enumerable: !0
                    }), Object.defineProperty(this, "transactionPollingTimeout", {
                        get: function() {
                            return 0 === s.options.transactionPollingTimeout ? s.options.transactionPollingTimeout : s.options.transactionPollingTimeout || this.constructor.transactionPollingTimeout
                        },
                        set: function(t) {
                            s.options.transactionPollingTimeout = t
                        },
                        enumerable: !0
                    }), Object.defineProperty(this, "transactionConfirmationBlocks", {
                        get: function() {
                            return 0 === s.options.transactionConfirmationBlocks ? s.options.transactionConfirmationBlocks : s.options.transactionConfirmationBlocks || this.constructor.transactionConfirmationBlocks
                        },
                        set: function(t) {
                            s.options.transactionConfirmationBlocks = t
                        },
                        enumerable: !0
                    }), Object.defineProperty(this, "transactionBlockTimeout", {
                        get: function() {
                            return 0 === s.options.transactionBlockTimeout ? s.options.transactionBlockTimeout : s.options.transactionBlockTimeout || this.constructor.transactionBlockTimeout
                        },
                        set: function(t) {
                            s.options.transactionBlockTimeout = t
                        },
                        enumerable: !0
                    }), Object.defineProperty(this, "defaultAccount", {
                        get: function() {
                            return h
                        },
                        set: function(t) {
                            return t && (h = o.toChecksumAddress(i.inputAddressFormatter(t))), t
                        },
                        enumerable: !0
                    }), Object.defineProperty(this, "defaultBlock", {
                        get: function() {
                            return p
                        },
                        set: function(t) {
                            return p = t, t
                        },
                        enumerable: !0
                    }), this.methods = {}, this.events = {}, this._address = null, this._jsonInterface = [], this.options.address = r, this.options.jsonInterface = e
                };
            d.setProvider = function(t, e) {
                n.packageInit(this, [t]), this._ethAccounts = e
            }, d.prototype._getCallback = function(t) {
                if (t && t[t.length - 1] && "function" == typeof t[t.length - 1]) return t.pop()
            }, d.prototype._checkListener = function(t, e) {
                if (e === t) throw c.ContractReservedEventError(t)
            }, d.prototype._getOrSetDefaultOptions = function(t) {
                var e = t.gasPrice ? String(t.gasPrice) : null,
                    r = t.from ? o.toChecksumAddress(i.inputAddressFormatter(t.from)) : null;
                return t.data = t.data || this.options.data, t.from = r || this.options.from, t.gasPrice = e || this.options.gasPrice, t.gas = t.gas || t.gasLimit || this.options.gas, delete t.gasLimit, t
            }, d.prototype._encodeEventABI = function(t, e) {
                var r = (e = e || {}).filter || {},
                    n = {};
                if (["fromBlock", "toBlock"].filter((function(t) {
                        return void 0 !== e[t]
                    })).forEach((function(t) {
                        n[t] = i.inputBlockNumberFormatter(e[t])
                    })), Array.isArray(e.topics)) n.topics = e.topics;
                else {
                    if (n.topics = [], t && !t.anonymous && "ALLEVENTS" !== t.name && n.topics.push(t.signature), "ALLEVENTS" !== t.name) {
                        var a = t.inputs.filter((function(t) {
                            return !0 === t.indexed
                        })).map((function(t) {
                            var e = r[t.name];
                            return e ? Array.isArray(e) ? e.map((function(e) {
                                return l.encodeParameter(t.type, e)
                            })) : l.encodeParameter(t.type, e) : null
                        }));
                        n.topics = n.topics.concat(a)
                    }
                    n.topics.length || delete n.topics
                }
                return this.options.address && (n.address = this.options.address.toLowerCase()), n
            }, d.prototype._decodeEventABI = function(t) {
                var e = this;
                t.data = t.data || "", t.topics = t.topics || [];
                var r = i.outputLogFormatter(t);
                if ("ALLEVENTS" === e.name && (e = e.jsonInterface.find((function(e) {
                        return e.signature === t.topics[0]
                    })) || {
                        anonymous: !0
                    }), e.inputs = e.inputs || [], !e.anonymous) {
                    let r = 0;
                    e.inputs.forEach(t => t.indexed ? r++ : null), r > 0 && t.topics.length !== r + 1 && (e = {
                        anonymous: !0,
                        inputs: []
                    })
                }
                var n = e.anonymous ? t.topics : t.topics.slice(1);
                return r.returnValues = l.decodeLog(e.inputs, t.data, n), delete r.returnValues.__length__, r.event = e.name, r.signature = e.anonymous || !t.topics[0] ? null : t.topics[0], r.raw = {
                    data: r.data,
                    topics: r.topics
                }, delete r.data, delete r.topics, r
            }, d.prototype._encodeMethodABI = function() {
                var t = this._method.signature,
                    e = this.arguments || [],
                    r = !1,
                    n = this._parent.options.jsonInterface.filter((function(e) {
                        return "constructor" === t && e.type === t || (e.signature === t || e.signature === t.replace("0x", "") || e.name === t) && "function" === e.type
                    })).map((function(t) {
                        var n = Array.isArray(t.inputs) ? t.inputs.length : 0;
                        if (n !== e.length) throw new Error("The number of arguments is not matching the methods required number. You need to pass " + n + " arguments.");
                        return "function" === t.type && (r = t.signature), Array.isArray(t.inputs) ? t.inputs : []
                    })).map((function(t) {
                        return l.encodeParameters(t, e).replace("0x", "")
                    }))[0] || "";
                if ("constructor" === t) {
                    if (!this._deployData) throw new Error("The contract has no contract data option set. This is necessary to append the constructor parameters.");
                    return this._deployData.startsWith("0x") || (this._deployData = "0x" + this._deployData), this._deployData + n
                }
                var a = r ? r + n : n;
                if (!a) throw new Error("Couldn't find a matching contract method named \"" + this._method.name + '".');
                return a
            }, d.prototype._decodeMethodReturn = function(t, e) {
                if (!e) return null;
                e = e.length >= 2 ? e.slice(2) : e;
                var r = l.decodeParameters(t, e);
                return 1 === r.__length__ ? r[0] : (delete r.__length__, r)
            }, d.prototype.deploy = function(t, e) {
                if ((t = t || {}).arguments = t.arguments || [], !(t = this._getOrSetDefaultOptions(t)).data) {
                    if ("function" == typeof e) return e(c.ContractMissingDeployDataError());
                    throw c.ContractMissingDeployDataError()
                }
                var r = this.options.jsonInterface.find(t => "constructor" === t.type) || {};
                return r.signature = "constructor", this._createTxObject.apply({
                    method: r,
                    parent: this,
                    deployData: t.data,
                    _ethAccounts: this.constructor._ethAccounts
                }, t.arguments)
            }, d.prototype._generateEventOptions = function() {
                var t = Array.prototype.slice.call(arguments),
                    e = this._getCallback(t),
                    r = "object" === (!!t[t.length - 1] && typeof t[t.length - 1]) ? t.pop() : {},
                    n = "string" == typeof t[0] ? t[0] : "allevents",
                    a = "allevents" === n.toLowerCase() ? {
                        name: "ALLEVENTS",
                        jsonInterface: this.options.jsonInterface
                    } : this.options.jsonInterface.find((function(t) {
                        return "event" === t.type && (t.name === n || t.signature === "0x" + n.replace("0x", ""))
                    }));
                if (!a) throw c.ContractEventDoesNotExistError(n);
                if (!o.isAddress(this.options.address)) throw c.ContractNoAddressDefinedError();
                return {
                    params: this._encodeEventABI(a, r),
                    event: a,
                    callback: e
                }
            }, d.prototype.clone = function() {
                return new this.constructor(this.options.jsonInterface, this.options.address, this.options)
            }, d.prototype.once = function(t, e, r) {
                var n = Array.prototype.slice.call(arguments);
                if (!(r = this._getCallback(n))) throw c.ContractOnceRequiresCallbackError();
                e && delete e.fromBlock, this._on(t, e, (function(t, e, n) {
                    n.unsubscribe(), "function" == typeof r && r(t, e, n)
                }))
            }, d.prototype._on = function() {
                var t = this._generateEventOptions.apply(this, arguments);
                t.params && t.params.toBlock && (delete t.params.toBlock, console.warn("Invalid option: toBlock. Use getPastEvents for specific range.")), this._checkListener("newListener", t.event.name), this._checkListener("removeListener", t.event.name);
                var e = new s({
                    subscription: {
                        params: 1,
                        inputFormatter: [i.inputLogFormatter],
                        outputFormatter: this._decodeEventABI.bind(t.event),
                        subscriptionHandler: function(t) {
                            t.removed ? this.emit("changed", t) : this.emit("data", t), "function" == typeof this.callback && this.callback(null, t, this)
                        }
                    },
                    type: "eth",
                    requestManager: this._requestManager
                });
                return e.subscribe("logs", t.params, t.callback || function() {}), e
            }, d.prototype.getPastEvents = function() {
                var t = this._generateEventOptions.apply(this, arguments),
                    e = new a({
                        name: "getPastLogs",
                        call: "eth_getLogs",
                        params: 1,
                        inputFormatter: [i.inputLogFormatter],
                        outputFormatter: this._decodeEventABI.bind(t.event)
                    });
                e.setRequestManager(this._requestManager);
                var r = e.buildCall();
                return e = null, r(t.params, t.callback)
            }, d.prototype._createTxObject = function() {
                var t = Array.prototype.slice.call(arguments),
                    e = {};
                if ("function" === this.method.type && (e.call = this.parent._executeMethod.bind(e, "call"), e.call.request = this.parent._executeMethod.bind(e, "call", !0)), e.send = this.parent._executeMethod.bind(e, "send"), e.send.request = this.parent._executeMethod.bind(e, "send", !0), e.encodeABI = this.parent._encodeMethodABI.bind(e), e.estimateGas = this.parent._executeMethod.bind(e, "estimate"), t && this.method.inputs && t.length !== this.method.inputs.length) {
                    if (this.nextMethod) return this.nextMethod.apply(null, t);
                    throw c.InvalidNumberOfParams(t.length, this.method.inputs.length, this.method.name)
                }
                return e.arguments = t || [], e._method = this.method, e._parent = this.parent, e._ethAccounts = this.parent.constructor._ethAccounts || this._ethAccounts, this.deployData && (e._deployData = this.deployData), e
            }, d.prototype._processExecuteArguments = function(t, e) {
                var r = {};
                if (r.type = t.shift(), r.callback = this._parent._getCallback(t), "call" !== r.type || !0 === t[t.length - 1] || "string" != typeof t[t.length - 1] && !isFinite(t[t.length - 1]) || (r.defaultBlock = t.pop()), r.options = "object" === (!!t[t.length - 1] && typeof t[t.length - 1]) ? t.pop() : {}, r.generateRequest = !0 === t[t.length - 1] && t.pop(), r.options = this._parent._getOrSetDefaultOptions(r.options), r.options.data = this.encodeABI(), !this._deployData && !o.isAddress(this._parent.options.address)) throw c.ContractNoAddressDefinedError();
                return this._deployData || (r.options.to = this._parent.options.address), r.options.data ? r : o._fireError(new Error("Couldn't find a matching contract method, or the number of parameters is wrong."), e.eventEmitter, e.reject, r.callback)
            }, d.prototype._executeMethod = function() {
                var t = this,
                    e = this._parent._processExecuteArguments.call(this, Array.prototype.slice.call(arguments), r),
                    r = u("send" !== e.type),
                    n = t.constructor._ethAccounts || t._ethAccounts;
                if (e.generateRequest) {
                    var s = {
                        params: [i.inputCallFormatter.call(this._parent, e.options)],
                        callback: e.callback
                    };
                    return "call" === e.type ? (s.params.push(i.inputDefaultBlockNumberFormatter.call(this._parent, e.defaultBlock)), s.method = "eth_call", s.format = this._parent._decodeMethodReturn.bind(null, this._method.outputs)) : s.method = "eth_sendTransaction", s
                }
                switch (e.type) {
                    case "estimate":
                        var d = new a({
                            name: "estimateGas",
                            call: "eth_estimateGas",
                            params: 1,
                            inputFormatter: [i.inputCallFormatter],
                            outputFormatter: o.hexToNumber,
                            requestManager: t._parent._requestManager,
                            accounts: n,
                            defaultAccount: t._parent.defaultAccount,
                            defaultBlock: t._parent.defaultBlock
                        }).createFunction();
                        return d(e.options, e.callback);
                    case "call":
                        var h = new a({
                            name: "call",
                            call: "eth_call",
                            params: 2,
                            inputFormatter: [i.inputCallFormatter, i.inputDefaultBlockNumberFormatter],
                            outputFormatter: function(e) {
                                return t._parent._decodeMethodReturn(t._method.outputs, e)
                            },
                            requestManager: t._parent._requestManager,
                            accounts: n,
                            defaultAccount: t._parent.defaultAccount,
                            defaultBlock: t._parent.defaultBlock,
                            handleRevert: t._parent.handleRevert,
                            abiCoder: l
                        }).createFunction();
                        return h(e.options, e.defaultBlock, e.callback);
                    case "send":
                        if (!o.isAddress(e.options.from)) return o._fireError(c.ContractNoFromAddressDefinedError(), r.eventEmitter, r.reject, e.callback);
                        if ("boolean" == typeof this._method.payable && !this._method.payable && e.options.value && e.options.value > 0) return o._fireError(new Error("Can not send value to non-payable contract method or constructor"), r.eventEmitter, r.reject, e.callback);
                        var p = {
                                receiptFormatter: function(e) {
                                    if (Array.isArray(e.logs)) {
                                        var r = e.logs.map(e => t._parent._decodeEventABI.call({
                                            name: "ALLEVENTS",
                                            jsonInterface: t._parent.options.jsonInterface
                                        }, e));
                                        e.events = {};
                                        var n = 0;
                                        r.forEach((function(t) {
                                            t.event ? e.events[t.event] ? Array.isArray(e.events[t.event]) ? e.events[t.event].push(t) : e.events[t.event] = [e.events[t.event], t] : e.events[t.event] = t : (e.events[n] = t, n++)
                                        })), delete e.logs
                                    }
                                    return e
                                },
                                contractDeployFormatter: function(e) {
                                    var r = t._parent.clone();
                                    return r.options.address = e.contractAddress, r
                                }
                            },
                            m = new a({
                                name: "sendTransaction",
                                call: "eth_sendTransaction",
                                params: 1,
                                inputFormatter: [i.inputTransactionFormatter],
                                requestManager: t._parent._requestManager,
                                accounts: t.constructor._ethAccounts || t._ethAccounts,
                                defaultAccount: t._parent.defaultAccount,
                                defaultBlock: t._parent.defaultBlock,
                                transactionBlockTimeout: t._parent.transactionBlockTimeout,
                                transactionConfirmationBlocks: t._parent.transactionConfirmationBlocks,
                                transactionPollingTimeout: t._parent.transactionPollingTimeout,
                                defaultCommon: t._parent.defaultCommon,
                                defaultChain: t._parent.defaultChain,
                                defaultHardfork: t._parent.defaultHardfork,
                                handleRevert: t._parent.handleRevert,
                                extraFormatters: p,
                                abiCoder: l
                            }).createFunction();
                        return m(e.options, e.callback);
                    default:
                        throw new Error('Method "' + e.type + '" not implemented.')
                }
            }, t.exports = d
        },
        1851: function(t, e, r) {
            var n = r(12).Buffer,
                a = r(178),
                o = r(2313).AbiCoder,
                s = r(2313).ParamType,
                i = new o((function(t, e) {
                    return !t.match(/^u?int/) || Array.isArray(e) || e && "object" == typeof e && "BN" === e.constructor.name ? e : e.toString()
                }));

            function c() {}
            var u = function() {};
            u.prototype.encodeFunctionSignature = function(t) {
                return ("function" == typeof t || "object" == typeof t && t) && (t = a._jsonInterfaceMethodToString(t)), a.sha3(t).slice(0, 10)
            }, u.prototype.encodeEventSignature = function(t) {
                return ("function" == typeof t || "object" == typeof t && t) && (t = a._jsonInterfaceMethodToString(t)), a.sha3(t)
            }, u.prototype.encodeParameter = function(t, e) {
                return this.encodeParameters([t], [e])
            }, u.prototype.encodeParameters = function(t, e) {
                var r = this;
                return t = r.mapTypes(t), e = e.map((function(e, n) {
                    let a = t[n];
                    if ("object" == typeof a && a.type && (a = a.type), e = r.formatParam(a, e), "string" == typeof a && a.includes("tuple")) {
                        const t = i._getCoder(s.from(a)),
                            n = (t, e) => {
                                if ("array" === t.name) return e.map(e => n(i._getCoder(s.from(t.type.replace("[]", ""))), e));
                                t.coders.forEach((t, a) => {
                                    "tuple" === t.name ? n(t, e[a]) : e[a] = r.formatParam(t.name, e[a])
                                })
                            };
                        n(t, e)
                    }
                    return e
                })), i.encode(t, e)
            }, u.prototype.mapTypes = function(t) {
                var e = this,
                    r = [];
                return t.forEach((function(t) {
                    if ("object" == typeof t && "function" === t.type && (t = Object.assign({}, t, {
                            type: "bytes24"
                        })), e.isSimplifiedStructFormat(t)) {
                        var n = Object.keys(t)[0];
                        r.push(Object.assign(e.mapStructNameAndType(n), {
                            components: e.mapStructToCoderFormat(t[n])
                        }))
                    } else r.push(t)
                })), r
            }, u.prototype.isSimplifiedStructFormat = function(t) {
                return "object" == typeof t && void 0 === t.components && void 0 === t.name
            }, u.prototype.mapStructNameAndType = function(t) {
                var e = "tuple";
                return t.indexOf("[]") > -1 && (e = "tuple[]", t = t.slice(0, -2)), {
                    type: e,
                    name: t
                }
            }, u.prototype.mapStructToCoderFormat = function(t) {
                var e = this,
                    r = [];
                return Object.keys(t).forEach((function(n) {
                    "object" != typeof t[n] ? r.push({
                        name: n,
                        type: t[n]
                    }) : r.push(Object.assign(e.mapStructNameAndType(n), {
                        components: e.mapStructToCoderFormat(t[n])
                    }))
                })), r
            }, u.prototype.formatParam = function(t, e) {
                const r = new RegExp(/^bytes([0-9]*)$/),
                    o = new RegExp(/^bytes([0-9]*)\[\]$/),
                    s = new RegExp(/^(u?int)([0-9]*)$/),
                    i = new RegExp(/^(u?int)([0-9]*)\[\]$/);
                if (a.isBN(e) || a.isBigNumber(e)) return e.toString(10);
                if (t.match(o) || t.match(i)) return e.map(e => this.formatParam(t.replace("[]", ""), e));
                let c = t.match(s);
                if (c) {
                    let t = parseInt(c[2] || "256");
                    t / 8 < e.length && (e = a.leftPad(e, t))
                }
                if (c = t.match(r), c) {
                    n.isBuffer(e) && (e = a.toHex(e));
                    let t = parseInt(c[1]);
                    if (t) {
                        let r = 2 * t;
                        "0x" === e.substring(0, 2) && (r += 2), e.length < r && (e = a.rightPad(e, 2 * t))
                    }
                    e.length % 2 == 1 && (e = "0x0" + e.substring(2))
                }
                return e
            }, u.prototype.encodeFunctionCall = function(t, e) {
                return this.encodeFunctionSignature(t) + this.encodeParameters(t.inputs, e).replace("0x", "")
            }, u.prototype.decodeParameter = function(t, e) {
                return this.decodeParameters([t], e)[0]
            }, u.prototype.decodeParameters = function(t, e) {
                return this.decodeParametersWith(t, e, !1)
            }, u.prototype.decodeParametersWith = function(t, e, r) {
                if (t.length > 0 && (!e || "0x" === e || "0X" === e)) throw new Error("Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.");
                var n = i.decode(this.mapTypes(t), "0x" + e.replace(/0x/i, ""), r),
                    a = new c;
                return a.__length__ = 0, t.forEach((function(t, e) {
                    var r = n[a.__length__];
                    r = "0x" === r ? null : r, a[e] = r, ("function" == typeof t || t && "object" == typeof t) && t.name && (a[t.name] = r), a.__length__++
                })), a
            }, u.prototype.decodeLog = function(t, e, r) {
                var n = this;
                r = Array.isArray(r) ? r : [r], e = e || "";
                var a = [],
                    o = [],
                    s = 0;
                t.forEach((function(t, e) {
                    t.indexed ? (o[e] = ["bool", "int", "uint", "address", "fixed", "ufixed"].find((function(e) {
                        return -1 !== t.type.indexOf(e)
                    })) ? n.decodeParameter(t.type, r[s]) : r[s], s++) : a[e] = t
                }));
                var i = e,
                    u = i ? this.decodeParametersWith(a, i, !0) : [],
                    l = new c;
                return l.__length__ = 0, t.forEach((function(t, e) {
                    l[e] = "string" === t.type ? "" : null, void 0 !== u[e] && (l[e] = u[e]), void 0 !== o[e] && (l[e] = o[e]), t.name && (l[t.name] = l[e]), l.__length__++
                })), l
            };
            var l = new u;
            t.exports = l
        },
        1858: function(t, e) {
            var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (r) {
                var n = new Uint8Array(16);
                t.exports = function() {
                    return r(n), n
                }
            } else {
                var a = new Array(16);
                t.exports = function() {
                    for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), a[e] = t >>> ((3 & e) << 3) & 255;
                    return a
                }
            }
        },
        1859: function(t, e) {
            for (var r = [], n = 0; n < 256; ++n) r[n] = (n + 256).toString(16).substr(1);
            t.exports = function(t, e) {
                var n = e || 0,
                    a = r;
                return [a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]]].join("")
            }
        },
        2313: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "ConstructorFragment", (function() {
                return fragments_ConstructorFragment
            })), r.d(e, "EventFragment", (function() {
                return EventFragment
            })), r.d(e, "Fragment", (function() {
                return fragments_Fragment
            })), r.d(e, "FunctionFragment", (function() {
                return fragments_FunctionFragment
            })), r.d(e, "ParamType", (function() {
                return fragments_ParamType
            })), r.d(e, "FormatTypes", (function() {
                return h
            })), r.d(e, "AbiCoder", (function() {
                return abi_coder_AbiCoder
            })), r.d(e, "defaultAbiCoder", (function() {
                return I
            })), r.d(e, "Interface", (function() {
                return interface_Interface
            })), r.d(e, "Indexed", (function() {
                return interface_Indexed
            })), r.d(e, "checkResultErrors", (function() {
                return A
            })), r.d(e, "LogDescription", (function() {
                return interface_LogDescription
            })), r.d(e, "TransactionDescription", (function() {
                return interface_TransactionDescription
            }));
            var n = r(319),
                a = r(60),
                o = r(37);
            const s = new o.b("abi/5.0.7"),
                i = {};
            let c = {
                    calldata: !0,
                    memory: !0,
                    storage: !0
                },
                u = {
                    calldata: !0,
                    memory: !0
                };

            function l(t, e) {
                if ("bytes" === t || "string" === t) {
                    if (c[e]) return !0
                } else if ("address" === t) {
                    if ("payable" === e) return !0
                } else if ((t.indexOf("[") >= 0 || "tuple" === t) && u[e]) return !0;
                return (c[e] || "payable" === e) && s.throwArgumentError("invalid modifier", "name", e), !1
            }

            function d(t, e) {
                for (let r in e) Object(a.d)(t, r, e[r])
            }
            const h = Object.freeze({
                    sighash: "sighash",
                    minimal: "minimal",
                    full: "full",
                    json: "json"
                }),
                p = new RegExp(/^(.*)\[([0-9]*)\]$/);
            class fragments_ParamType {
                constructor(t, e) {
                    t !== i && s.throwError("use fromString", o.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "new ParamType()"
                    }), d(this, e);
                    let r = this.type.match(p);
                    d(this, r ? {
                        arrayLength: parseInt(r[2] || "-1"),
                        arrayChildren: fragments_ParamType.fromObject({
                            type: r[1],
                            components: this.components
                        }),
                        baseType: "array"
                    } : {
                        arrayLength: null,
                        arrayChildren: null,
                        baseType: null != this.components ? "tuple" : this.type
                    }), this._isParamType = !0, Object.freeze(this)
                }
                format(t) {
                    if (t || (t = h.sighash), h[t] || s.throwArgumentError("invalid format type", "format", t), t === h.json) {
                        let e = {
                            type: "tuple" === this.baseType ? "tuple" : this.type,
                            name: this.name || void 0
                        };
                        return "boolean" == typeof this.indexed && (e.indexed = this.indexed), this.components && (e.components = this.components.map(e => JSON.parse(e.format(t)))), JSON.stringify(e)
                    }
                    let e = "";
                    return "array" === this.baseType ? (e += this.arrayChildren.format(t), e += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : "tuple" === this.baseType ? (t !== h.sighash && (e += this.type), e += "(" + this.components.map(e => e.format(t)).join(t === h.full ? ", " : ",") + ")") : e += this.type, t !== h.sighash && (!0 === this.indexed && (e += " indexed"), t === h.full && this.name && (e += " " + this.name)), e
                }
                static from(t, e) {
                    return "string" == typeof t ? fragments_ParamType.fromString(t, e) : fragments_ParamType.fromObject(t)
                }
                static fromObject(t) {
                    return fragments_ParamType.isParamType(t) ? t : new fragments_ParamType(i, {
                        name: t.name || null,
                        type: b(t.type),
                        indexed: null == t.indexed ? null : !!t.indexed,
                        components: t.components ? t.components.map(fragments_ParamType.fromObject) : null
                    })
                }
                static fromString(t, e) {
                    return function(t) {
                        return fragments_ParamType.fromObject({
                            name: t.name,
                            type: t.type,
                            indexed: t.indexed,
                            components: t.components
                        })
                    }(function(t, e) {
                        let r = t;

                        function n(e) {
                            s.throwArgumentError("unexpected character at position " + e, "param", t)
                        }

                        function a(t) {
                            let r = {
                                type: "",
                                name: "",
                                parent: t,
                                state: {
                                    allowType: !0
                                }
                            };
                            return e && (r.indexed = !1), r
                        }
                        t = t.replace(/\s/g, " ");
                        let o = {
                                type: "",
                                name: "",
                                state: {
                                    allowType: !0
                                }
                            },
                            i = o;
                        for (let r = 0; r < t.length; r++) {
                            let o = t[r];
                            switch (o) {
                                case "(":
                                    i.state.allowType && "" === i.type ? i.type = "tuple" : i.state.allowParams || n(r), i.state.allowType = !1, i.type = b(i.type), i.components = [a(i)], i = i.components[0];
                                    break;
                                case ")":
                                    delete i.state, "indexed" === i.name && (e || n(r), i.indexed = !0, i.name = ""), l(i.type, i.name) && (i.name = ""), i.type = b(i.type);
                                    let t = i;
                                    i = i.parent, i || n(r), delete t.parent, i.state.allowParams = !1, i.state.allowName = !0, i.state.allowArray = !0;
                                    break;
                                case ",":
                                    delete i.state, "indexed" === i.name && (e || n(r), i.indexed = !0, i.name = ""), l(i.type, i.name) && (i.name = ""), i.type = b(i.type);
                                    let s = a(i.parent);
                                    i.parent.components.push(s), delete i.parent, i = s;
                                    break;
                                case " ":
                                    i.state.allowType && "" !== i.type && (i.type = b(i.type), delete i.state.allowType, i.state.allowName = !0, i.state.allowParams = !0), i.state.allowName && "" !== i.name && ("indexed" === i.name ? (e || n(r), i.indexed && n(r), i.indexed = !0, i.name = "") : l(i.type, i.name) ? i.name = "" : i.state.allowName = !1);
                                    break;
                                case "[":
                                    i.state.allowArray || n(r), i.type += o, i.state.allowArray = !1, i.state.allowName = !1, i.state.readArray = !0;
                                    break;
                                case "]":
                                    i.state.readArray || n(r), i.type += o, i.state.readArray = !1, i.state.allowArray = !0, i.state.allowName = !0;
                                    break;
                                default:
                                    i.state.allowType ? (i.type += o, i.state.allowParams = !0, i.state.allowArray = !0) : i.state.allowName ? (i.name += o, delete i.state.allowArray) : i.state.readArray ? i.type += o : n(r)
                            }
                        }
                        return i.parent && s.throwArgumentError("unexpected eof", "param", t), delete o.state, "indexed" === i.name ? (e || n(r.length - 7), i.indexed && n(r.length - 7), i.indexed = !0, i.name = "") : l(i.type, i.name) && (i.name = ""), o.type = b(o.type), o
                    }(t, !!e))
                }
                static isParamType(t) {
                    return !(null == t || !t._isParamType)
                }
            }

            function m(t, e) {
                return function(t) {
                    t = t.trim();
                    let e = [],
                        r = "",
                        n = 0;
                    for (let a = 0; a < t.length; a++) {
                        let o = t[a];
                        "," === o && 0 === n ? (e.push(r), r = "") : (r += o, "(" === o ? n++ : ")" === o && (n--, -1 === n && s.throwArgumentError("unbalanced parenthesis", "value", t)))
                    }
                    r && e.push(r);
                    return e
                }(t).map(t => fragments_ParamType.fromString(t, e))
            }
            class fragments_Fragment {
                constructor(t, e) {
                    t !== i && s.throwError("use a static from method", o.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "new Fragment()"
                    }), d(this, e), this._isFragment = !0, Object.freeze(this)
                }
                static from(t) {
                    return fragments_Fragment.isFragment(t) ? t : "string" == typeof t ? fragments_Fragment.fromString(t) : fragments_Fragment.fromObject(t)
                }
                static fromObject(t) {
                    if (fragments_Fragment.isFragment(t)) return t;
                    switch (t.type) {
                        case "function":
                            return fragments_FunctionFragment.fromObject(t);
                        case "event":
                            return EventFragment.fromObject(t);
                        case "constructor":
                            return fragments_ConstructorFragment.fromObject(t);
                        case "fallback":
                        case "receive":
                            return null
                    }
                    return s.throwArgumentError("invalid fragment object", "value", t)
                }
                static fromString(t) {
                    return "event" === (t = (t = (t = t.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? EventFragment.fromString(t.substring(5).trim()) : "function" === t.split(" ")[0] ? fragments_FunctionFragment.fromString(t.substring(8).trim()) : "constructor" === t.split("(")[0].trim() ? fragments_ConstructorFragment.fromString(t.trim()) : s.throwArgumentError("unsupported fragment", "value", t)
                }
                static isFragment(t) {
                    return !(!t || !t._isFragment)
                }
            }
            class EventFragment extends fragments_Fragment {
                format(t) {
                    if (t || (t = h.sighash), h[t] || s.throwArgumentError("invalid format type", "format", t), t === h.json) return JSON.stringify({
                        type: "event",
                        anonymous: this.anonymous,
                        name: this.name,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = "";
                    return t !== h.sighash && (e += "event "), e += this.name + "(" + this.inputs.map(e => e.format(t)).join(t === h.full ? ", " : ",") + ") ", t !== h.sighash && this.anonymous && (e += "anonymous "), e.trim()
                }
                static from(t) {
                    return "string" == typeof t ? EventFragment.fromString(t) : EventFragment.fromObject(t)
                }
                static fromObject(t) {
                    if (EventFragment.isEventFragment(t)) return t;
                    "event" !== t.type && s.throwArgumentError("invalid event object", "value", t);
                    const e = {
                        name: v(t.name),
                        anonymous: t.anonymous,
                        inputs: t.inputs ? t.inputs.map(fragments_ParamType.fromObject) : [],
                        type: "event"
                    };
                    return new EventFragment(i, e)
                }
                static fromString(t) {
                    let e = t.match(w);
                    e || s.throwArgumentError("invalid event string", "value", t);
                    let r = !1;
                    return e[3].split(" ").forEach(t => {
                        switch (t.trim()) {
                            case "anonymous":
                                r = !0;
                                break;
                            case "":
                                break;
                            default:
                                s.warn("unknown modifier: " + t)
                        }
                    }), EventFragment.fromObject({
                        name: e[1].trim(),
                        anonymous: r,
                        inputs: m(e[2], !0),
                        type: "event"
                    })
                }
                static isEventFragment(t) {
                    return t && t._isFragment && "event" === t.type
                }
            }

            function f(t, e) {
                e.gas = null;
                let r = t.split("@");
                return 1 !== r.length ? (r.length > 2 && s.throwArgumentError("invalid human-readable ABI signature", "value", t), r[1].match(/^[0-9]+$/) || s.throwArgumentError("invalid human-readable ABI signature gas", "value", t), e.gas = n.a.from(r[1]), r[0]) : t
            }

            function g(t, e) {
                e.constant = !1, e.payable = !1, e.stateMutability = "nonpayable", t.split(" ").forEach(t => {
                    switch (t.trim()) {
                        case "constant":
                            e.constant = !0;
                            break;
                        case "payable":
                            e.payable = !0, e.stateMutability = "payable";
                            break;
                        case "nonpayable":
                            e.payable = !1, e.stateMutability = "nonpayable";
                            break;
                        case "pure":
                            e.constant = !0, e.stateMutability = "pure";
                            break;
                        case "view":
                            e.constant = !0, e.stateMutability = "view";
                            break;
                        case "external":
                        case "public":
                        case "":
                            break;
                        default:
                            console.log("unknown modifier: " + t)
                    }
                })
            }

            function y(t) {
                let e = {
                    constant: !1,
                    payable: !0,
                    stateMutability: "payable"
                };
                return null != t.stateMutability ? (e.stateMutability = t.stateMutability, e.constant = "view" === e.stateMutability || "pure" === e.stateMutability, null != t.constant && !!t.constant !== e.constant && s.throwArgumentError("cannot have constant function with mutability " + e.stateMutability, "value", t), e.payable = "payable" === e.stateMutability, null != t.payable && !!t.payable !== e.payable && s.throwArgumentError("cannot have payable function with mutability " + e.stateMutability, "value", t)) : null != t.payable ? (e.payable = !!t.payable, null != t.constant || e.payable || "constructor" === t.type || s.throwArgumentError("unable to determine stateMutability", "value", t), e.constant = !!t.constant, e.constant ? e.stateMutability = "view" : e.stateMutability = e.payable ? "payable" : "nonpayable", e.payable && e.constant && s.throwArgumentError("cannot have constant payable function", "value", t)) : null != t.constant ? (e.constant = !!t.constant, e.payable = !e.constant, e.stateMutability = e.constant ? "view" : "payable") : "constructor" !== t.type && s.throwArgumentError("unable to determine stateMutability", "value", t), e
            }
            class fragments_ConstructorFragment extends fragments_Fragment {
                format(t) {
                    if (t || (t = h.sighash), h[t] || s.throwArgumentError("invalid format type", "format", t), t === h.json) return JSON.stringify({
                        type: "constructor",
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payble: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    t === h.sighash && s.throwError("cannot format a constructor for sighash", o.b.errors.UNSUPPORTED_OPERATION, {
                        operation: "format(sighash)"
                    });
                    let e = "constructor(" + this.inputs.map(e => e.format(t)).join(t === h.full ? ", " : ",") + ") ";
                    return this.stateMutability && "nonpayable" !== this.stateMutability && (e += this.stateMutability + " "), e.trim()
                }
                static from(t) {
                    return "string" == typeof t ? fragments_ConstructorFragment.fromString(t) : fragments_ConstructorFragment.fromObject(t)
                }
                static fromObject(t) {
                    if (fragments_ConstructorFragment.isConstructorFragment(t)) return t;
                    "constructor" !== t.type && s.throwArgumentError("invalid constructor object", "value", t);
                    let e = y(t);
                    e.constant && s.throwArgumentError("constructor cannot be constant", "value", t);
                    const r = {
                        name: null,
                        type: t.type,
                        inputs: t.inputs ? t.inputs.map(fragments_ParamType.fromObject) : [],
                        payable: e.payable,
                        stateMutability: e.stateMutability,
                        gas: t.gas ? n.a.from(t.gas) : null
                    };
                    return new fragments_ConstructorFragment(i, r)
                }
                static fromString(t) {
                    let e = {
                            type: "constructor"
                        },
                        r = (t = f(t, e)).match(w);
                    return r && "constructor" === r[1].trim() || s.throwArgumentError("invalid constructor string", "value", t), e.inputs = m(r[2].trim(), !1), g(r[3].trim(), e), fragments_ConstructorFragment.fromObject(e)
                }
                static isConstructorFragment(t) {
                    return t && t._isFragment && "constructor" === t.type
                }
            }
            class fragments_FunctionFragment extends fragments_ConstructorFragment {
                format(t) {
                    if (t || (t = h.sighash), h[t] || s.throwArgumentError("invalid format type", "format", t), t === h.json) return JSON.stringify({
                        type: "function",
                        name: this.name,
                        constant: this.constant,
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payble: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t))),
                        ouputs: this.outputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = "";
                    return t !== h.sighash && (e += "function "), e += this.name + "(" + this.inputs.map(e => e.format(t)).join(t === h.full ? ", " : ",") + ") ", t !== h.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (e += this.stateMutability + " ") : this.constant && (e += "view "), this.outputs && this.outputs.length && (e += "returns (" + this.outputs.map(e => e.format(t)).join(", ") + ") "), null != this.gas && (e += "@" + this.gas.toString() + " ")), e.trim()
                }
                static from(t) {
                    return "string" == typeof t ? fragments_FunctionFragment.fromString(t) : fragments_FunctionFragment.fromObject(t)
                }
                static fromObject(t) {
                    if (fragments_FunctionFragment.isFunctionFragment(t)) return t;
                    "function" !== t.type && s.throwArgumentError("invalid function object", "value", t);
                    let e = y(t);
                    const r = {
                        type: t.type,
                        name: v(t.name),
                        constant: e.constant,
                        inputs: t.inputs ? t.inputs.map(fragments_ParamType.fromObject) : [],
                        outputs: t.outputs ? t.outputs.map(fragments_ParamType.fromObject) : [],
                        payable: e.payable,
                        stateMutability: e.stateMutability,
                        gas: t.gas ? n.a.from(t.gas) : null
                    };
                    return new fragments_FunctionFragment(i, r)
                }
                static fromString(t) {
                    let e = {
                            type: "function"
                        },
                        r = (t = f(t, e)).split(" returns ");
                    r.length > 2 && s.throwArgumentError("invalid function string", "value", t);
                    let n = r[0].match(w);
                    if (n || s.throwArgumentError("invalid function signature", "value", t), e.name = n[1].trim(), e.name && v(e.name), e.inputs = m(n[2], !1), g(n[3].trim(), e), r.length > 1) {
                        let n = r[1].match(w);
                        "" == n[1].trim() && "" == n[3].trim() || s.throwArgumentError("unexpected tokens", "value", t), e.outputs = m(n[2], !1)
                    } else e.outputs = [];
                    return fragments_FunctionFragment.fromObject(e)
                }
                static isFunctionFragment(t) {
                    return t && t._isFragment && "function" === t.type
                }
            }

            function b(t) {
                return t.match(/^uint($|[^1-9])/) ? t = "uint256" + t.substring(4) : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)), t
            }
            const _ = new RegExp("^[A-Za-z_][A-Za-z0-9_]*$");

            function v(t) {
                return t && t.match(_) || s.throwArgumentError(`invalid identifier "${t}"`, "value", t), t
            }
            const w = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
            var E = r(14);
            const x = new o.b("abi/5.0.7");

            function A(t) {
                const e = [],
                    r = function(t, n) {
                        if (Array.isArray(n))
                            for (let a in n) {
                                const o = t.slice();
                                o.push(a);
                                try {
                                    r(o, n[a])
                                } catch (t) {
                                    e.push({
                                        path: o,
                                        error: t
                                    })
                                }
                            }
                    };
                return r([], t), e
            }
            class Coder {
                constructor(t, e, r, n) {
                    this.name = t, this.type = e, this.localName = r, this.dynamic = n
                }
                _throwError(t, e) {
                    x.throwArgumentError(t, this.localName, e)
                }
            }
            class abstract_coder_Writer {
                constructor(t) {
                    Object(a.d)(this, "wordSize", t || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(t)
                }
                get data() {
                    return Object(E.c)(this._data)
                }
                get length() {
                    return this._dataLength
                }
                _writeData(t) {
                    return this._data.push(t), this._dataLength += t.length, t.length
                }
                appendWriter(t) {
                    return this._writeData(Object(E.b)(t._data))
                }
                writeBytes(t) {
                    let e = Object(E.a)(t);
                    const r = e.length % this.wordSize;
                    return r && (e = Object(E.b)([e, this._padding.slice(r)])), this._writeData(e)
                }
                _getValue(t) {
                    let e = Object(E.a)(n.a.from(t));
                    return e.length > this.wordSize && x.throwError("value out-of-bounds", o.b.errors.BUFFER_OVERRUN, {
                        length: this.wordSize,
                        offset: e.length
                    }), e.length % this.wordSize && (e = Object(E.b)([this._padding.slice(e.length % this.wordSize), e])), e
                }
                writeValue(t) {
                    return this._writeData(this._getValue(t))
                }
                writeUpdatableValue() {
                    const t = this._data.length;
                    return this._data.push(this._padding), this._dataLength += this.wordSize, e => {
                        this._data[t] = this._getValue(e)
                    }
                }
            }
            class abstract_coder_Reader {
                constructor(t, e, r, n) {
                    Object(a.d)(this, "_data", Object(E.a)(t)), Object(a.d)(this, "wordSize", e || 32), Object(a.d)(this, "_coerceFunc", r), Object(a.d)(this, "allowLoose", n), this._offset = 0
                }
                get data() {
                    return Object(E.i)(this._data)
                }
                get consumed() {
                    return this._offset
                }
                static coerce(t, e) {
                    let r = t.match("^u?int([0-9]+)$");
                    return r && parseInt(r[1]) <= 48 && (e = e.toNumber()), e
                }
                coerce(t, e) {
                    return this._coerceFunc ? this._coerceFunc(t, e) : abstract_coder_Reader.coerce(t, e)
                }
                _peekBytes(t, e, r) {
                    let n = Math.ceil(e / this.wordSize) * this.wordSize;
                    return this._offset + n > this._data.length && (this.allowLoose && r && this._offset + e <= this._data.length ? n = e : x.throwError("data out-of-bounds", o.b.errors.BUFFER_OVERRUN, {
                        length: this._data.length,
                        offset: this._offset + n
                    })), this._data.slice(this._offset, this._offset + n)
                }
                subReader(t) {
                    return new abstract_coder_Reader(this._data.slice(this._offset + t), this.wordSize, this._coerceFunc, this.allowLoose)
                }
                readBytes(t, e) {
                    let r = this._peekBytes(0, t, !!e);
                    return this._offset += r.length, r.slice(0, t)
                }
                readValue() {
                    return n.a.from(this.readBytes(this.wordSize))
                }
            }
            var j = r(209);
            class address_AddressCoder extends Coder {
                constructor(t) {
                    super("address", "address", t, !1)
                }
                encode(t, e) {
                    try {
                        Object(j.a)(e)
                    } catch (t) {
                        this._throwError(t.message, e)
                    }
                    return t.writeValue(e)
                }
                decode(t) {
                    return Object(j.a)(Object(E.h)(t.readValue().toHexString(), 20))
                }
            }
            class anonymous_AnonymousCoder extends Coder {
                constructor(t) {
                    super(t.name, t.type, void 0, t.dynamic), this.coder = t
                }
                encode(t, e) {
                    return this.coder.encode(t, e)
                }
                decode(t) {
                    return this.coder.decode(t)
                }
            }
            const k = new o.b("abi/5.0.7");

            function C(t, e, r) {
                let n = null;
                if (Array.isArray(r)) n = r;
                else if (r && "object" == typeof r) {
                    let t = {};
                    n = e.map(e => {
                        const n = e.localName;
                        return n || k.throwError("cannot encode object for signature with missing names", o.b.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: e,
                            value: r
                        }), t[n] && k.throwError("cannot encode object for signature with duplicate names", o.b.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: e,
                            value: r
                        }), t[n] = !0, r[n]
                    })
                } else k.throwArgumentError("invalid tuple value", "tuple", r);
                e.length !== n.length && k.throwArgumentError("types/value length mismatch", "tuple", r);
                let a = new abstract_coder_Writer(t.wordSize),
                    s = new abstract_coder_Writer(t.wordSize),
                    i = [];
                e.forEach((t, e) => {
                    let r = n[e];
                    if (t.dynamic) {
                        let e = s.length;
                        t.encode(s, r);
                        let n = a.writeUpdatableValue();
                        i.push(t => {
                            n(t + e)
                        })
                    } else t.encode(a, r)
                }), i.forEach(t => {
                    t(a.length)
                });
                let c = t.appendWriter(a);
                return c += t.appendWriter(s), c
            }

            function F(t, e) {
                let r = [],
                    n = t.subReader(0);
                e.forEach(e => {
                    let a = null;
                    if (e.dynamic) {
                        let r = t.readValue(),
                            s = n.subReader(r.toNumber());
                        try {
                            a = e.decode(s)
                        } catch (t) {
                            if (t.code === o.b.errors.BUFFER_OVERRUN) throw t;
                            a = t, a.baseType = e.name, a.name = e.localName, a.type = e.type
                        }
                    } else try {
                        a = e.decode(t)
                    } catch (t) {
                        if (t.code === o.b.errors.BUFFER_OVERRUN) throw t;
                        a = t, a.baseType = e.name, a.name = e.localName, a.type = e.type
                    }
                    null != a && r.push(a)
                });
                const a = e.reduce((t, e) => {
                    const r = e.localName;
                    return r && (t[r] || (t[r] = 0), t[r]++), t
                }, {});
                e.forEach((t, e) => {
                    let n = t.localName;
                    if (!n || 1 !== a[n]) return;
                    if ("length" === n && (n = "_length"), null != r[n]) return;
                    const o = r[e];
                    o instanceof Error ? Object.defineProperty(r, n, {
                        get: () => {
                            throw o
                        }
                    }) : r[n] = o
                });
                for (let t = 0; t < r.length; t++) {
                    const e = r[t];
                    e instanceof Error && Object.defineProperty(r, t, {
                        get: () => {
                            throw e
                        }
                    })
                }
                return Object.freeze(r)
            }
            class array_ArrayCoder extends Coder {
                constructor(t, e, r) {
                    super("array", t.type + "[" + (e >= 0 ? e : "") + "]", r, -1 === e || t.dynamic), this.coder = t, this.length = e
                }
                encode(t, e) {
                    Array.isArray(e) || this._throwError("expected array value", e);
                    let r = this.length; - 1 === r && (r = e.length, t.writeValue(e.length)), k.checkArgumentCount(e.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
                    let n = [];
                    for (let t = 0; t < e.length; t++) n.push(this.coder);
                    return C(t, n, e)
                }
                decode(t) {
                    let e = this.length; - 1 === e && (e = t.readValue().toNumber());
                    let r = [];
                    for (let t = 0; t < e; t++) r.push(new anonymous_AnonymousCoder(this.coder));
                    return t.coerce(this.name, F(t, r))
                }
            }
            class boolean_BooleanCoder extends Coder {
                constructor(t) {
                    super("bool", "bool", t, !1)
                }
                encode(t, e) {
                    return t.writeValue(e ? 1 : 0)
                }
                decode(t) {
                    return t.coerce(this.type, !t.readValue().isZero())
                }
            }
            class bytes_DynamicBytesCoder extends Coder {
                constructor(t, e) {
                    super(t, t, e, !0)
                }
                encode(t, e) {
                    e = Object(E.a)(e);
                    let r = t.writeValue(e.length);
                    return r += t.writeBytes(e), r
                }
                decode(t) {
                    return t.readBytes(t.readValue().toNumber(), !0)
                }
            }
            class bytes_BytesCoder extends bytes_DynamicBytesCoder {
                constructor(t) {
                    super("bytes", t)
                }
                decode(t) {
                    return t.coerce(this.name, Object(E.i)(super.decode(t)))
                }
            }
            class fixed_bytes_FixedBytesCoder extends Coder {
                constructor(t, e) {
                    let r = "bytes" + String(t);
                    super(r, r, e, !1), this.size = t
                }
                encode(t, e) {
                    let r = Object(E.a)(e);
                    return r.length !== this.size && this._throwError("incorrect data length", e), t.writeBytes(r)
                }
                decode(t) {
                    return t.coerce(this.name, Object(E.i)(t.readBytes(this.size)))
                }
            }
            class null_NullCoder extends Coder {
                constructor(t) {
                    super("null", "", t, !1)
                }
                encode(t, e) {
                    return null != e && this._throwError("not null", e), t.writeBytes([])
                }
                decode(t) {
                    return t.readBytes(0), t.coerce(this.name, null)
                }
            }
            var O = r(5392);
            class number_NumberCoder extends Coder {
                constructor(t, e, r) {
                    const n = (e ? "int" : "uint") + 8 * t;
                    super(n, n, r, !1), this.size = t, this.signed = e
                }
                encode(t, e) {
                    let r = n.a.from(e),
                        a = O.b.mask(8 * t.wordSize);
                    if (this.signed) {
                        let t = a.mask(8 * this.size - 1);
                        (r.gt(t) || r.lt(t.add(O.e).mul(O.d))) && this._throwError("value out-of-bounds", e)
                    } else(r.lt(O.h) || r.gt(a.mask(8 * this.size))) && this._throwError("value out-of-bounds", e);
                    return r = r.toTwos(8 * this.size).mask(8 * this.size), this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * t.wordSize)), t.writeValue(r)
                }
                decode(t) {
                    let e = t.readValue().mask(8 * this.size);
                    return this.signed && (e = e.fromTwos(8 * this.size)), t.coerce(this.name, e)
                }
            }
            var P = r(2379);
            class string_StringCoder extends bytes_DynamicBytesCoder {
                constructor(t) {
                    super("string", t)
                }
                encode(t, e) {
                    return super.encode(t, Object(P.f)(e))
                }
                decode(t) {
                    return Object(P.h)(super.decode(t))
                }
            }
            class tuple_TupleCoder extends Coder {
                constructor(t, e) {
                    let r = !1;
                    const n = [];
                    t.forEach(t => {
                        t.dynamic && (r = !0), n.push(t.type)
                    });
                    super("tuple", "tuple(" + n.join(",") + ")", e, r), this.coders = t
                }
                encode(t, e) {
                    return C(t, this.coders, e)
                }
                decode(t) {
                    return t.coerce(this.name, F(t, this.coders))
                }
            }
            const T = new o.b("abi/5.0.7"),
                S = new RegExp(/^bytes([0-9]*)$/),
                B = new RegExp(/^(u?int)([0-9]*)$/);
            class abi_coder_AbiCoder {
                constructor(t) {
                    T.checkNew(new.target, abi_coder_AbiCoder), Object(a.d)(this, "coerceFunc", t || null)
                }
                _getCoder(t) {
                    switch (t.baseType) {
                        case "address":
                            return new address_AddressCoder(t.name);
                        case "bool":
                            return new boolean_BooleanCoder(t.name);
                        case "string":
                            return new string_StringCoder(t.name);
                        case "bytes":
                            return new bytes_BytesCoder(t.name);
                        case "array":
                            return new array_ArrayCoder(this._getCoder(t.arrayChildren), t.arrayLength, t.name);
                        case "tuple":
                            return new tuple_TupleCoder((t.components || []).map(t => this._getCoder(t)), t.name);
                        case "":
                            return new null_NullCoder(t.name)
                    }
                    let e = t.type.match(B);
                    if (e) {
                        let r = parseInt(e[2] || "256");
                        return (0 === r || r > 256 || r % 8 != 0) && T.throwArgumentError("invalid " + e[1] + " bit length", "param", t), new number_NumberCoder(r / 8, "int" === e[1], t.name)
                    }
                    if (e = t.type.match(S), e) {
                        let r = parseInt(e[1]);
                        return (0 === r || r > 32) && T.throwArgumentError("invalid bytes length", "param", t), new fixed_bytes_FixedBytesCoder(r, t.name)
                    }
                    return T.throwArgumentError("invalid type", "type", t.type)
                }
                _getWordSize() {
                    return 32
                }
                _getReader(t, e) {
                    return new abstract_coder_Reader(t, this._getWordSize(), this.coerceFunc, e)
                }
                _getWriter() {
                    return new abstract_coder_Writer(this._getWordSize())
                }
                encode(t, e) {
                    t.length !== e.length && T.throwError("types/values length mismatch", o.b.errors.INVALID_ARGUMENT, {
                        count: {
                            types: t.length,
                            values: e.length
                        },
                        value: {
                            types: t,
                            values: e
                        }
                    });
                    const r = t.map(t => this._getCoder(fragments_ParamType.from(t))),
                        n = new tuple_TupleCoder(r, "_"),
                        a = this._getWriter();
                    return n.encode(a, e), a.data
                }
                decode(t, e, r) {
                    const n = t.map(t => this._getCoder(fragments_ParamType.from(t)));
                    return new tuple_TupleCoder(n, "_").decode(this._getReader(Object(E.a)(e), r))
                }
            }
            const I = new abi_coder_AbiCoder;
            var N = r(5395),
                M = r(150);
            const L = new o.b("abi/5.0.7");
            class interface_LogDescription extends a.a {}
            class interface_TransactionDescription extends a.a {}
            class interface_Indexed extends a.a {
                static isIndexed(t) {
                    return !(!t || !t._isIndexed)
                }
            }

            function R(t, e) {
                const r = new Error("deferred error during ABI decoding triggered accessing " + t);
                return r.error = e, r
            }
            class interface_Interface {
                constructor(t) {
                    L.checkNew(new.target, interface_Interface);
                    let e = [];
                    e = "string" == typeof t ? JSON.parse(t) : t, Object(a.d)(this, "fragments", e.map(t => fragments_Fragment.from(t)).filter(t => null != t)), Object(a.d)(this, "_abiCoder", Object(a.e)(new.target, "getAbiCoder")()), Object(a.d)(this, "functions", {}), Object(a.d)(this, "errors", {}), Object(a.d)(this, "events", {}), Object(a.d)(this, "structs", {}), this.fragments.forEach(t => {
                        let e = null;
                        switch (t.type) {
                            case "constructor":
                                return this.deploy ? void L.warn("duplicate definition - constructor") : void Object(a.d)(this, "deploy", t);
                            case "function":
                                e = this.functions;
                                break;
                            case "event":
                                e = this.events;
                                break;
                            default:
                                return
                        }
                        let r = t.format();
                        e[r] ? L.warn("duplicate definition - " + r) : e[r] = t
                    }), this.deploy || Object(a.d)(this, "deploy", fragments_ConstructorFragment.from({
                        payable: !1,
                        type: "constructor"
                    })), Object(a.d)(this, "_isInterface", !0)
                }
                format(t) {
                    t || (t = h.full), t === h.sighash && L.throwArgumentError("interface does not support formatting sighash", "format", t);
                    const e = this.fragments.map(e => e.format(t));
                    return t === h.json ? JSON.stringify(e.map(t => JSON.parse(t))) : e
                }
                static getAbiCoder() {
                    return I
                }
                static getAddress(t) {
                    return Object(j.a)(t)
                }
                static getSighash(t) {
                    return Object(E.e)(Object(N.a)(t.format()), 0, 4)
                }
                static getEventTopic(t) {
                    return Object(N.a)(t.format())
                }
                getFunction(t) {
                    if (Object(E.l)(t)) {
                        for (const e in this.functions)
                            if (t === this.getSighash(e)) return this.functions[e];
                        L.throwArgumentError("no matching function", "sighash", t)
                    }
                    if (-1 === t.indexOf("(")) {
                        const e = t.trim(),
                            r = Object.keys(this.functions).filter(t => t.split("(")[0] === e);
                        return 0 === r.length ? L.throwArgumentError("no matching function", "name", e) : r.length > 1 && L.throwArgumentError("multiple matching functions", "name", e), this.functions[r[0]]
                    }
                    const e = this.functions[fragments_FunctionFragment.fromString(t).format()];
                    return e || L.throwArgumentError("no matching function", "signature", t), e
                }
                getEvent(t) {
                    if (Object(E.l)(t)) {
                        const e = t.toLowerCase();
                        for (const t in this.events)
                            if (e === this.getEventTopic(t)) return this.events[t];
                        L.throwArgumentError("no matching event", "topichash", e)
                    }
                    if (-1 === t.indexOf("(")) {
                        const e = t.trim(),
                            r = Object.keys(this.events).filter(t => t.split("(")[0] === e);
                        return 0 === r.length ? L.throwArgumentError("no matching event", "name", e) : r.length > 1 && L.throwArgumentError("multiple matching events", "name", e), this.events[r[0]]
                    }
                    const e = this.events[EventFragment.fromString(t).format()];
                    return e || L.throwArgumentError("no matching event", "signature", t), e
                }
                getSighash(t) {
                    return "string" == typeof t && (t = this.getFunction(t)), Object(a.e)(this.constructor, "getSighash")(t)
                }
                getEventTopic(t) {
                    return "string" == typeof t && (t = this.getEvent(t)), Object(a.e)(this.constructor, "getEventTopic")(t)
                }
                _decodeParams(t, e) {
                    return this._abiCoder.decode(t, e)
                }
                _encodeParams(t, e) {
                    return this._abiCoder.encode(t, e)
                }
                encodeDeploy(t) {
                    return this._encodeParams(this.deploy.inputs, t || [])
                }
                decodeFunctionData(t, e) {
                    "string" == typeof t && (t = this.getFunction(t));
                    const r = Object(E.a)(e);
                    return Object(E.i)(r.slice(0, 4)) !== this.getSighash(t) && L.throwArgumentError(`data signature does not match function ${t.name}.`, "data", Object(E.i)(r)), this._decodeParams(t.inputs, r.slice(4))
                }
                encodeFunctionData(t, e) {
                    return "string" == typeof t && (t = this.getFunction(t)), Object(E.i)(Object(E.b)([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
                }
                decodeFunctionResult(t, e) {
                    "string" == typeof t && (t = this.getFunction(t));
                    let r = Object(E.a)(e),
                        n = null,
                        a = null;
                    switch (r.length % this._abiCoder._getWordSize()) {
                        case 0:
                            try {
                                return this._abiCoder.decode(t.outputs, r)
                            } catch (t) {}
                            break;
                        case 4:
                            "0x08c379a0" === Object(E.i)(r.slice(0, 4)) && (a = "Error(string)", n = this._abiCoder.decode(["string"], r.slice(4))[0])
                    }
                    return L.throwError("call revert exception", o.b.errors.CALL_EXCEPTION, {
                        method: t.format(),
                        errorSignature: a,
                        errorArgs: [n],
                        reason: n
                    })
                }
                encodeFunctionResult(t, e) {
                    return "string" == typeof t && (t = this.getFunction(t)), Object(E.i)(this._abiCoder.encode(t.outputs, e || []))
                }
                encodeFilterTopics(t, e) {
                    "string" == typeof t && (t = this.getEvent(t)), e.length > t.inputs.length && L.throwError("too many arguments for " + t.format(), o.b.errors.UNEXPECTED_ARGUMENT, {
                        argument: "values",
                        value: e
                    });
                    let r = [];
                    t.anonymous || r.push(this.getEventTopic(t));
                    const n = (t, e) => "string" === t.type ? Object(N.a)(e) : "bytes" === t.type ? Object(M.a)(Object(E.i)(e)) : ("address" === t.type && this._abiCoder.encode(["address"], [e]), Object(E.h)(Object(E.i)(e), 32));
                    for (e.forEach((e, a) => {
                            let o = t.inputs[a];
                            o.indexed ? null == e ? r.push(null) : "array" === o.baseType || "tuple" === o.baseType ? L.throwArgumentError("filtering with tuples or arrays not supported", "contract." + o.name, e) : Array.isArray(e) ? r.push(e.map(t => n(o, t))) : r.push(n(o, e)) : null != e && L.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + o.name, e)
                        }); r.length && null === r[r.length - 1];) r.pop();
                    return r
                }
                encodeEventLog(t, e) {
                    "string" == typeof t && (t = this.getEvent(t));
                    const r = [],
                        n = [],
                        a = [];
                    return t.anonymous || r.push(this.getEventTopic(t)), e.length !== t.inputs.length && L.throwArgumentError("event arguments/values mismatch", "values", e), t.inputs.forEach((t, o) => {
                        const s = e[o];
                        if (t.indexed)
                            if ("string" === t.type) r.push(Object(N.a)(s));
                            else if ("bytes" === t.type) r.push(Object(M.a)(s));
                        else {
                            if ("tuple" === t.baseType || "array" === t.baseType) throw new Error("not implemented");
                            r.push(this._abiCoder.encode([t.type], [s]))
                        } else n.push(t), a.push(s)
                    }), {
                        data: this._abiCoder.encode(n, a),
                        topics: r
                    }
                }
                decodeEventLog(t, e, r) {
                    if ("string" == typeof t && (t = this.getEvent(t)), null != r && !t.anonymous) {
                        let e = this.getEventTopic(t);
                        Object(E.l)(r[0], 32) && r[0].toLowerCase() === e || L.throwError("fragment/topic mismatch", o.b.errors.INVALID_ARGUMENT, {
                            argument: "topics[0]",
                            expected: e,
                            value: r[0]
                        }), r = r.slice(1)
                    }
                    let n = [],
                        a = [],
                        s = [];
                    t.inputs.forEach((t, e) => {
                        t.indexed ? "string" === t.type || "bytes" === t.type || "tuple" === t.baseType || "array" === t.baseType ? (n.push(fragments_ParamType.fromObject({
                            type: "bytes32",
                            name: t.name
                        })), s.push(!0)) : (n.push(t), s.push(!1)) : (a.push(t), s.push(!1))
                    });
                    let i = null != r ? this._abiCoder.decode(n, Object(E.b)(r)) : null,
                        c = this._abiCoder.decode(a, e, !0),
                        u = [],
                        l = 0,
                        d = 0;
                    t.inputs.forEach((t, e) => {
                        if (t.indexed)
                            if (null == i) u[e] = new interface_Indexed({
                                _isIndexed: !0,
                                hash: null
                            });
                            else if (s[e]) u[e] = new interface_Indexed({
                            _isIndexed: !0,
                            hash: i[d++]
                        });
                        else try {
                            u[e] = i[d++]
                        } catch (t) {
                            u[e] = t
                        } else try {
                            u[e] = c[l++]
                        } catch (t) {
                            u[e] = t
                        }
                        if (t.name && null == u[t.name]) {
                            const r = u[e];
                            r instanceof Error ? Object.defineProperty(u, t.name, {
                                get: () => {
                                    throw R("property " + JSON.stringify(t.name), r)
                                }
                            }) : u[t.name] = r
                        }
                    });
                    for (let t = 0; t < u.length; t++) {
                        const e = u[t];
                        e instanceof Error && Object.defineProperty(u, t, {
                            get: () => {
                                throw R("index " + t, e)
                            }
                        })
                    }
                    return Object.freeze(u)
                }
                parseTransaction(t) {
                    let e = this.getFunction(t.data.substring(0, 10).toLowerCase());
                    return e ? new interface_TransactionDescription({
                        args: this._abiCoder.decode(e.inputs, "0x" + t.data.substring(10)),
                        functionFragment: e,
                        name: e.name,
                        signature: e.format(),
                        sighash: this.getSighash(e),
                        value: n.a.from(t.value || "0")
                    }) : null
                }
                parseLog(t) {
                    let e = this.getEvent(t.topics[0]);
                    return !e || e.anonymous ? null : new interface_LogDescription({
                        eventFragment: e,
                        name: e.name,
                        signature: e.format(),
                        topic: this.getEventTopic(e),
                        args: this.decodeEventLog(e, t.data, t.topics)
                    })
                }
                static isInterface(t) {
                    return !(!t || !t._isInterface)
                }
            }
        },
        3527: function(t, e, r) {
            "use strict";
            var n = r(343),
                a = r(345),
                o = r(3528),
                s = "undefined" == typeof global ? r(1404) : r(24),
                i = r(940),
                c = r(3533),
                u = r(178),
                l = r(120),
                {
                    TransactionFactory: d
                } = r(1860),
                h = r(1073).default,
                p = r(1073).Hardfork,
                m = r(241),
                f = function(t) {
                    return null == t
                },
                g = function() {
                    var t = this;
                    n.packageInit(this, arguments), delete this.BatchRequest, delete this.extend;
                    var e = [new a({
                        name: "getNetworkId",
                        call: "net_version",
                        params: 0,
                        outputFormatter: parseInt
                    }), new a({
                        name: "getChainId",
                        call: "eth_chainId",
                        params: 0,
                        outputFormatter: u.hexToNumber
                    }), new a({
                        name: "getGasPrice",
                        call: "eth_gasPrice",
                        params: 0
                    }), new a({
                        name: "getTransactionCount",
                        call: "eth_getTransactionCount",
                        params: 2,
                        inputFormatter: [function(t) {
                            if (u.isAddress(t)) return t;
                            throw new Error("Address " + t + ' is not a valid address to get the "transactionCount".')
                        }, function() {
                            return "latest"
                        }]
                    }), new a({
                        name: "getBlockByNumber",
                        call: "eth_getBlockByNumber",
                        params: 2,
                        inputFormatter: [function(t) {
                            return t ? u.toHex(t) : "latest"
                        }, function() {
                            return !1
                        }]
                    })];
                    this._ethereumCall = {}, e.forEach(e => {
                        e.attachToObject(t._ethereumCall), e.setRequestManager(t._requestManager)
                    }), this.wallet = new b(this)
                };

            function y(t, e) {
                return new Promise((r, n) => {
                    try {
                        (void 0 === e.type || e.type < "0x2") && void 0 !== e.gasPrice ? r({
                            gasPrice: e.gasPrice
                        }) : Promise.all([t._ethereumCall.getBlockByNumber(), t._ethereumCall.getGasPrice()]).then(t => {
                            const [n, a] = t;
                            if ("0x2" === e.type && n && n.baseFeePerGas) {
                                let t, a;
                                e.gasPrice ? (t = e.gasPrice, a = e.gasPrice, delete e.gasPrice) : (t = e.maxPriorityFeePerGas || "0x9502F900", a = e.maxFeePerGas || u.toHex(u.toBN(n.baseFeePerGas).mul(u.toBN(2)).add(u.toBN(t)))), r({
                                    maxFeePerGas: a,
                                    maxPriorityFeePerGas: t
                                })
                            } else {
                                if (e.maxPriorityFeePerGas || e.maxFeePerGas) throw Error("Network doesn't support eip-1559");
                                r({
                                    gasPrice: a
                                })
                            }
                        })
                    } catch (t) {
                        n(t)
                    }
                })
            }

            function b(t) {
                this._accounts = t, this.length = 0, this.defaultKeyName = "web3js_wallet"
            }
            g.prototype._addAccountFunctions = function(t) {
                    var e = this;
                    return t.signTransaction = function(r, n) {
                        return e.signTransaction(r, t.privateKey, n)
                    }, t.sign = function(r) {
                        return e.sign(r, t.privateKey)
                    }, t.encrypt = function(r, n) {
                        return e.encrypt(t.privateKey, r, n)
                    }, t
                }, g.prototype.create = function(t) {
                    return this._addAccountFunctions(o.create(t || u.randomHex(32)))
                }, g.prototype.privateKeyToAccount = function(t, e) {
                    if (t.startsWith("0x") || (t = "0x" + t), !e && 66 !== t.length) throw new Error("Private key must be 32 bytes long");
                    return this._addAccountFunctions(o.fromPrivate(t))
                }, g.prototype.signTransaction = function(t, e, r) {
                    var n = !1,
                        a = {},
                        o = !(!t || !(t.chain && t.hardfork || t.common));
                    if (r = r || function() {}, !t) return n = new Error("No transaction object given!"), r(n), Promise.reject(n);

                    function s(t) {
                        const n = function(t) {
                            if (t.common && t.chain && t.hardfork) return new Error("Please provide the @ethereumjs/common object or the chain and hardfork property but not all together.");
                            if (t.chain && !t.hardfork || t.hardfork && !t.chain) return new Error('When specifying chain and hardfork, both values must be defined. Received "chain": ' + t.chain + ', "hardfork": ' + t.hardfork);
                            if (!(t.gas || t.gasLimit || t.maxPriorityFeePerGas || t.maxFeePerGas)) return new Error('"gas" is missing');
                            if (t.gas && t.gasPrice) {
                                if (t.gas < 0 || t.gasPrice < 0) return new Error("Gas or gasPrice is lower than 0")
                            } else if (t.maxPriorityFeePerGas < 0 || t.maxFeePerGas < 0) return new Error("maxPriorityFeePerGas or maxFeePerGas is lower than 0");
                            if (t.nonce < 0 || t.chainId < 0) return new Error("Nonce or chainId is lower than 0");
                            return
                        }(t);
                        if (n) return r(n), Promise.reject(n);
                        try {
                            var s = l.formatters.inputCallFormatter(Object.assign({}, t));
                            s.data = s.data || "0x", s.value = s.value || "0x", s.gasLimit = s.gasLimit || s.gas, "0x1" === s.type && void 0 === s.accessList && (s.accessList = []), o ? (s.common && (a.common = h.forCustomChain(s.common.baseChain || "mainnet", {
                                name: s.common.customChain.name || "custom-network",
                                networkId: s.common.customChain.networkId,
                                chainId: s.common.customChain.chainId
                            }, s.common.hardfork || p.London), delete s.common), s.chain && (a.chain = s.chain, delete s.chain), s.hardfork && (a.hardfork = s.hardfork, delete s.hardfork)) : (a.common = h.forCustomChain("mainnet", {
                                name: "custom-network",
                                networkId: s.networkId,
                                chainId: s.chainId
                            }, s.hardfork || p.London), delete s.networkId), e.startsWith("0x") && (e = e.substring(2));
                            var i = d.fromTxData(s, a).sign(Buffer.from(e, "hex")),
                                c = i.validate(!0);
                            if (c.length > 0) {
                                let t = "Signer Error: ";
                                for (const e of c) t += `${t} ${e}.`;
                                throw new Error(t)
                            }
                            var m = "0x" + i.serialize().toString("hex"),
                                f = u.keccak256(m),
                                g = {
                                    messageHash: "0x" + Buffer.from(i.getMessageToSign(!0)).toString("hex"),
                                    v: "0x" + i.v.toString("hex"),
                                    r: "0x" + i.r.toString("hex"),
                                    s: "0x" + i.s.toString("hex"),
                                    rawTransaction: m,
                                    transactionHash: f
                                };
                            return r(null, g), g
                        } catch (t) {
                            return r(t), Promise.reject(t)
                        }
                    }
                    return t.type = function(t) {
                        const e = void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas;
                        let r;
                        void 0 !== t.type ? r = u.toHex(t.type) : void 0 === t.type && e && (r = "0x2");
                        if (void 0 !== t.gasPrice && ("0x2" === r || e)) throw Error("eip-1559 transactions don't support gasPrice");
                        if (("0x1" === r || "0x0" === r) && e) throw Error("pre-eip-1559 transaction don't support maxFeePerGas/maxPriorityFeePerGas");
                        e || t.common && t.common.hardfork && t.common.hardfork.toLowerCase() === p.London || t.hardfork && t.hardfork.toLowerCase() === p.London ? r = "0x2" : (t.accessList || t.common && t.common.hardfork && t.common.hardfork.toLowerCase() === p.Berlin || t.hardfork && t.hardfork.toLowerCase() === p.Berlin) && (r = "0x1");
                        return r
                    }(t), void 0 !== t.nonce && void 0 !== t.chainId && (void 0 !== t.gasPrice || void 0 !== t.maxFeePerGas && void 0 !== t.maxPriorityFeePerGas) && o ? Promise.resolve(s(t)) : Promise.all([f(t.chainId) ? this._ethereumCall.getChainId() : t.chainId, f(t.nonce) ? this._ethereumCall.getTransactionCount(this.privateKeyToAccount(e).address) : t.nonce, f(o) ? this._ethereumCall.getNetworkId() : 1, y(this, t)]).then((function(e) {
                        if (f(e[0]) || f(e[1]) || f(e[2]) || f(e[3])) throw new Error('One of the values "chainId", "networkId", "gasPrice", or "nonce" couldn\'t be fetched: ' + JSON.stringify(e));
                        return s({
                            ...t,
                            chainId: e[0],
                            nonce: e[1],
                            networkId: e[2],
                            ...e[3]
                        })
                    }))
                }, g.prototype.recoverTransaction = function(t, e = {}) {
                    const r = Buffer.from(t.slice(2), "hex"),
                        n = d.fromSerializedData(r);
                    return u.toChecksumAddress(n.getSenderAddress().toString("hex"))
                }, g.prototype.hashMessage = function(t) {
                    var e = u.isHexStrict(t) ? t : u.utf8ToHex(t),
                        r = u.hexToBytes(e),
                        n = Buffer.from(r),
                        a = "Ethereum Signed Message:\n" + r.length,
                        o = Buffer.from(a),
                        s = Buffer.concat([o, n]);
                    return m.bufferToHex(m.keccak256(s))
                }, g.prototype.sign = function(t, e) {
                    if (e.startsWith("0x") || (e = "0x" + e), 66 !== e.length) throw new Error("Private key must be 32 bytes long");
                    var r = this.hashMessage(t),
                        n = o.sign(r, e),
                        a = o.decodeSignature(n);
                    return {
                        message: t,
                        messageHash: r,
                        v: a[0],
                        r: a[1],
                        s: a[2],
                        signature: n
                    }
                }, g.prototype.recover = function(t, e, r) {
                    var n = [].slice.apply(arguments);
                    return t && "object" == typeof t ? this.recover(t.messageHash, o.encodeSignature([t.v, t.r, t.s]), !0) : (r || (t = this.hashMessage(t)), n.length >= 4 ? (r = "boolean" == typeof(r = n.slice(-1)[0]) && !!r, this.recover(t, o.encodeSignature(n.slice(1, 4)), r)) : o.recover(t, e))
                }, g.prototype.decrypt = function(t, e, r) {
                    if ("string" != typeof e) throw new Error("No password given.");
                    var n, a, o = t && "object" == typeof t ? t : JSON.parse(r ? t.toLowerCase() : t);
                    if (3 !== o.version) throw new Error("Not a valid V3 wallet");
                    if ("scrypt" === o.crypto.kdf) a = o.crypto.kdfparams, n = i.syncScrypt(Buffer.from(e), Buffer.from(a.salt, "hex"), a.n, a.r, a.p, a.dklen);
                    else {
                        if ("pbkdf2" !== o.crypto.kdf) throw new Error("Unsupported key derivation scheme");
                        if ("hmac-sha256" !== (a = o.crypto.kdfparams).prf) throw new Error("Unsupported parameters to PBKDF2");
                        n = s.pbkdf2Sync(Buffer.from(e), Buffer.from(a.salt, "hex"), a.c, a.dklen, "sha256")
                    }
                    var c = Buffer.from(o.crypto.ciphertext, "hex");
                    if (u.sha3(Buffer.from([...n.slice(16, 32), ...c])).replace("0x", "") !== o.crypto.mac) throw new Error("Key derivation failed - possibly wrong password");
                    var l = s.createDecipheriv(o.crypto.cipher, n.slice(0, 16), Buffer.from(o.crypto.cipherparams.iv, "hex")),
                        d = "0x" + Buffer.from([...l.update(c), ...l.final()]).toString("hex");
                    return this.privateKeyToAccount(d, !0)
                }, g.prototype.encrypt = function(t, e, r) {
                    var n, a = this.privateKeyToAccount(t, !0),
                        o = (r = r || {}).salt || s.randomBytes(32),
                        l = r.iv || s.randomBytes(16),
                        d = r.kdf || "scrypt",
                        h = {
                            dklen: r.dklen || 32,
                            salt: o.toString("hex")
                        };
                    if ("pbkdf2" === d) h.c = r.c || 262144, h.prf = "hmac-sha256", n = s.pbkdf2Sync(Buffer.from(e), Buffer.from(h.salt, "hex"), h.c, h.dklen, "sha256");
                    else {
                        if ("scrypt" !== d) throw new Error("Unsupported kdf");
                        h.n = r.n || 8192, h.r = r.r || 8, h.p = r.p || 1, n = i.syncScrypt(Buffer.from(e), Buffer.from(h.salt, "hex"), h.n, h.r, h.p, h.dklen)
                    }
                    var p = s.createCipheriv(r.cipher || "aes-128-ctr", n.slice(0, 16), l);
                    if (!p) throw new Error("Unsupported cipher");
                    var m = Buffer.from([...p.update(Buffer.from(a.privateKey.replace("0x", ""), "hex")), ...p.final()]),
                        f = u.sha3(Buffer.from([...n.slice(16, 32), ...m])).replace("0x", "");
                    return {
                        version: 3,
                        id: c.v4({
                            random: r.uuid || s.randomBytes(16)
                        }),
                        address: a.address.toLowerCase().replace("0x", ""),
                        crypto: {
                            ciphertext: m.toString("hex"),
                            cipherparams: {
                                iv: l.toString("hex")
                            },
                            cipher: r.cipher || "aes-128-ctr",
                            kdf: d,
                            kdfparams: h,
                            mac: f.toString("hex")
                        }
                    }
                }, b.prototype._findSafeIndex = function(t) {
                    return t = t || 0, this.hasOwnProperty(t) ? this._findSafeIndex(t + 1) : t
                }, b.prototype._currentIndexes = function() {
                    return Object.keys(this).map((function(t) {
                        return parseInt(t)
                    })).filter((function(t) {
                        return t < 9e20
                    }))
                }, b.prototype.create = function(t, e) {
                    for (var r = 0; r < t; ++r) this.add(this._accounts.create(e).privateKey);
                    return this
                }, b.prototype.add = function(t) {
                    return "string" == typeof t && (t = this._accounts.privateKeyToAccount(t)), this[t.address] ? this[t.address] : ((t = this._accounts.privateKeyToAccount(t.privateKey)).index = this._findSafeIndex(), this[t.index] = t, this[t.address] = t, this[t.address.toLowerCase()] = t, this.length++, t)
                }, b.prototype.remove = function(t) {
                    var e = this[t];
                    return !(!e || !e.address) && (this[e.address].privateKey = null, delete this[e.address], this[e.address.toLowerCase()].privateKey = null, delete this[e.address.toLowerCase()], this[e.index].privateKey = null, delete this[e.index], this.length--, !0)
                }, b.prototype.clear = function() {
                    var t = this;
                    return this._currentIndexes().forEach((function(e) {
                        t.remove(e)
                    })), this
                }, b.prototype.encrypt = function(t, e) {
                    var r = this;
                    return this._currentIndexes().map((function(n) {
                        return r[n].encrypt(t, e)
                    }))
                }, b.prototype.decrypt = function(t, e) {
                    var r = this;
                    return t.forEach((function(t) {
                        var n = r._accounts.decrypt(t, e);
                        if (!n) throw new Error("Couldn't decrypt accounts. Password wrong?");
                        r.add(n)
                    })), this
                }, b.prototype.save = function(t, e) {
                    return localStorage.setItem(e || this.defaultKeyName, JSON.stringify(this.encrypt(t))), !0
                }, b.prototype.load = function(t, e) {
                    var r = localStorage.getItem(e || this.defaultKeyName);
                    if (r) try {
                        r = JSON.parse(r)
                    } catch (t) {}
                    return this.decrypt(r || [], t)
                },
                function(t) {
                    var e;
                    try {
                        e = window[t];
                        var r = "__storage_test__";
                        return e.setItem(r, r), e.removeItem(r), !0
                    } catch (t) {
                        return t && (22 === t.code || 1014 === t.code || "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name) && e && 0 !== e.length
                    }
                }("localStorage") || (delete b.prototype.save, delete b.prototype.load), t.exports = g
        },
        3533: function(t, e, r) {
            var n = r(3534),
                a = r(3535),
                o = a;
            o.v1 = n, o.v4 = a, t.exports = o
        },
        3534: function(t, e, r) {
            var n, a, o = r(1858),
                s = r(1859),
                i = 0,
                c = 0;
            t.exports = function(t, e, r) {
                var u = e && r || 0,
                    l = e || [],
                    d = (t = t || {}).node || n,
                    h = void 0 !== t.clockseq ? t.clockseq : a;
                if (null == d || null == h) {
                    var p = o();
                    null == d && (d = n = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == h && (h = a = 16383 & (p[6] << 8 | p[7]))
                }
                var m = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
                    f = void 0 !== t.nsecs ? t.nsecs : c + 1,
                    g = m - i + (f - c) / 1e4;
                if (g < 0 && void 0 === t.clockseq && (h = h + 1 & 16383), (g < 0 || m > i) && void 0 === t.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                i = m, c = f, a = h;
                var y = (1e4 * (268435455 & (m += 122192928e5)) + f) % 4294967296;
                l[u++] = y >>> 24 & 255, l[u++] = y >>> 16 & 255, l[u++] = y >>> 8 & 255, l[u++] = 255 & y;
                var b = m / 4294967296 * 1e4 & 268435455;
                l[u++] = b >>> 8 & 255, l[u++] = 255 & b, l[u++] = b >>> 24 & 15 | 16, l[u++] = b >>> 16 & 255, l[u++] = h >>> 8 | 128, l[u++] = 255 & h;
                for (var _ = 0; _ < 6; ++_) l[u + _] = d[_];
                return e || s(l)
            }
        },
        3535: function(t, e, r) {
            var n = r(1858),
                a = r(1859);
            t.exports = function(t, e, r) {
                var o = e && r || 0;
                "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
                var s = (t = t || {}).random || (t.rng || n)();
                if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e)
                    for (var i = 0; i < 16; ++i) e[o + i] = s[i];
                return e || a(s)
            }
        }
    }
]);