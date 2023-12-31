(window.webpackJsonp = window.webpackJsonp || []).push([
    [173], {
        100: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return PublicKey
            }));
            var a = n(65),
                s = n(2325),
                r = n(25),
                u = n(44);
            class PublicKey extends r.a {
                constructor(e) {
                    super(), this._key = e
                }
                static fromBytes(e) {
                    return new PublicKey(a.g.fromBytes(e))
                }
                static fromBytesED25519(e) {
                    return new PublicKey(a.g.fromBytesED25519(e))
                }
                static fromBytesECDSA(e) {
                    return new PublicKey(a.g.fromBytesECDSA(e))
                }
                static fromString(e) {
                    return new PublicKey(a.g.fromString(e))
                }
                verify(e, t) {
                    return this._key.verify(e, t)
                }
                verifyTransaction(e) {
                    e._requireFrozen(), e.isFrozen() || e.freeze();
                    for (const t of e._signedTransactions.list)
                        if (null != t.sigMap && null != t.sigMap.sigPair) {
                            let e = !1;
                            for (const n of t.sigMap.sigPair) {
                                const a = n.pubKeyPrefix;
                                if (Object(s.a)(a, this.toBytesRaw())) {
                                    e = !0;
                                    const a = t.bodyBytes;
                                    let s = null;
                                    if (null != n.ed25519 ? s = n.ed25519 : null != n.ECDSASecp256k1 && (s = n.ECDSASecp256k1), null == s) continue;
                                    if (!this.verify(a, s)) return !1
                                }
                            }
                            if (!e) return !1
                        } return !0
                }
                toBytes() {
                    return this._key.toBytes()
                }
                toBytesDer() {
                    return this._key.toBytesDer()
                }
                toBytesRaw() {
                    return this._key.toBytesRaw()
                }
                toEthereumAddress() {
                    return this._key.toEthereumAddress()
                }
                toString() {
                    return this._key.toString()
                }
                toStringDer() {
                    return this._key.toStringDer()
                }
                toStringRaw() {
                    return this._key.toStringRaw()
                }
                equals(e) {
                    return this._key.equals(e._key)
                }
                _toProtobufKey() {
                    switch (this._key._type) {
                        case "ED25519":
                            return {
                                ed25519: this._key.toBytesRaw()
                            };
                        case "secp256k1":
                            return {
                                ECDSASecp256k1: this._key.toBytesRaw()
                            };
                        default:
                            throw new Error("unrecognized key type " + this._key._type)
                    }
                }
                _toProtobufSignature(e) {
                    switch (this._key._type) {
                        case "ED25519":
                            return {
                                pubKeyPrefix: this._key.toBytesRaw(), ed25519: e
                            };
                        case "secp256k1":
                            return {
                                pubKeyPrefix: this._key.toBytesRaw(), ECDSASecp256k1: e
                            };
                        default:
                            throw new Error("unrecognized key type " + this._key._type)
                    }
                }
                toAccountId(e, t) {
                    return u.a.accountIdConstructor(e, t, this)
                }
            }
            u.a.setPublicKeyED25519(e => PublicKey.fromBytesED25519(e)), u.a.setPublicKeyECDSA(e => PublicKey.fromBytesECDSA(e))
        },
        1508: function(e, t, n) {
            "use strict";
            t.a = {}
        },
        1509: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return PrngTransaction
            }));
            var a = n(7),
                s = n(9);
            class PrngTransaction extends a.f {
                constructor(e = {}) {
                    super(), this._range = null, null != e.range && this.setRange(e.range)
                }
                setRange(e) {
                    return this._range = e, this
                }
                get range() {
                    return this._range
                }
                _validateChecksums(e) {
                    null != this._range && Object(s.e)(this._range) && this._validateChecksums(e)
                }
                _execute(e, t) {
                    return e.util.prng(t)
                }
                static _fromProtobuf(e, t, n, s, r) {
                    const u = r[0].utilPrng;
                    return a.f._fromProtobufTransactions(new PrngTransaction({
                        range: u.range
                    }), e, t, n, s, r)
                }
                _getTransactionDataCase() {
                    return "utilPrng"
                }
                _makeTransactionData() {
                    return {
                        range: this.range
                    }
                }
                _getLogId() {
                    return "RandomGenerate:" + this._transactionIds.current.validStart.toString()
                }
            }
            a.e.set("utilPrng", PrngTransaction._fromProtobuf)
        },
        1514: function(e, t, n) {
            "use strict";
            t.a = {}
        },
        1540: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Wallet
            }));
            var a = n(309),
                s = n(5),
                r = n(713),
                u = n(440),
                o = n(276),
                c = n(703),
                A = n(58),
                i = n(9);
            class Wallet {
                constructor(e, t, n) {
                    const r = "string" == typeof t ? a.a.fromString(t) : t;
                    this.publicKey = r.publicKey, this.signer = e => Promise.resolve(r.sign(e)), this.provider = n, this.accountId = "string" == typeof e ? s.a.fromString(e) : e
                }
                static createRandomED25519() {
                    const e = a.a.generateED25519(),
                        t = e.publicKey.toAccountId(0, 0);
                    return Promise.resolve(new Wallet(t, e))
                }
                static createRandomECDSA() {
                    const e = a.a.generateECDSA(),
                        t = e.publicKey.toAccountId(0, 0);
                    return Promise.resolve(new Wallet(t, e))
                }
                getProvider() {
                    return this.provider
                }
                getAccountId() {
                    return this.accountId
                }
                getAccountKey() {
                    return this.publicKey
                }
                getLedgerId() {
                    return null == this.provider ? null : this.provider.getLedgerId()
                }
                getNetwork() {
                    return null == this.provider ? {} : this.provider.getNetwork()
                }
                getMirrorNetwork() {
                    return null == this.provider ? [] : this.provider.getMirrorNetwork()
                }
                async sign(e) {
                    const t = [];
                    for (const n of e) t.push(new r.a({
                        publicKey: this.publicKey,
                        signature: await this.signer(n),
                        accountId: this.accountId
                    }));
                    return t
                }
                getAccountBalance() {
                    return this.call((new u.a).setAccountId(this.accountId))
                }
                getAccountInfo() {
                    return this.call((new o.a).setAccountId(this.accountId))
                }
                getAccountRecords() {
                    return this.call((new c.a).setAccountId(this.accountId))
                }
                signTransaction(e) {
                    return e.signWith(this.publicKey, this.signer)
                }
                checkTransaction(e) {
                    const t = e.transactionId;
                    if (null != t && null != t.accountId && 0 != t.accountId.compare(this.accountId)) throw new Error("transaction's ID constructed with a different account ID");
                    if (null == this.provider) return Promise.resolve(e);
                    const n = (null != e.nodeAccountIds ? e.nodeAccountIds : []).map(e => e.toString()),
                        a = Object.values(this.provider.getNetwork()).map(e => e.toString());
                    if (!n.reduce((e, t) => e && a.includes(t), !0)) throw new Error("Transaction already set node account IDs to values not within the current network");
                    return Promise.resolve(e)
                }
                populateTransaction(e) {
                    if (e._freezeWithAccountId(this.accountId), null == e.transactionId && e.setTransactionId(A.a.generate(this.accountId)), null != e.nodeAccountIds && 0 != e.nodeAccountIds.length) return Promise.resolve(e.freeze());
                    if (null == this.provider) return Promise.resolve(e);
                    const t = Object.values(this.provider.getNetwork()).map(e => "string" == typeof e ? s.a.fromString(e) : e);
                    return i.i(t), e.setNodeAccountIds(t.slice(0, (t.length + 3 - 1) / 3)), Promise.resolve(e.freeze())
                }
                call(e) {
                    if (null == this.provider) throw new Error("cannot send request with an wallet that doesn't contain a provider");
                    return this.provider.call(e._setOperatorWith(this.accountId, this.publicKey, this.signer))
                }
            }
        },
        188: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return PrecheckStatusError
            }));
            var a = n(438);
            class PrecheckStatusError extends a.a {
                constructor(e) {
                    super(e, `transaction ${e.transactionId.toString()} failed precheck with status ${e.status.toString()}`), this.contractFunctionResult = e.contractFunctionResult
                }
                toJSON() {
                    return {
                        name: this.name,
                        status: this.status.toString(),
                        transactionId: this.transactionId.toString(),
                        message: this.message,
                        contractFunctionResult: this.contractFunctionResult
                    }
                }
            }
        },
        23: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Timestamp
            }));
            var a = n(1),
                s = n.n(a),
                r = n(44);
            const u = s.a.fromNumber(1e9);
            class Timestamp {
                constructor(e, t) {
                    this.seconds = e instanceof s.a ? e : s.a.fromNumber(e), this.nanos = t instanceof s.a ? t : s.a.fromNumber(t), Object.freeze(this)
                }
                static generate() {
                    const e = Math.floor(5e3 * Math.random()) + 8e3,
                        t = Date.now() - e,
                        n = Math.floor(t / 1e3) + r.a.timeDrift,
                        a = 1e6 * Math.floor(t % 1e3) + Math.floor(1e6 * Math.random());
                    return new Timestamp(n, a)
                }
                static fromDate(e) {
                    let t;
                    if ("number" == typeof e) t = s.a.fromNumber(e);
                    else if ("string" == typeof e) t = s.a.fromNumber(Date.parse(e)).mul(1e6);
                    else {
                        if (!(e instanceof Date)) throw new TypeError(`invalid type '${typeof e}' for 'data', expected 'Date'`);
                        t = s.a.fromNumber(e.getTime()).mul(1e6)
                    }
                    return new Timestamp(0, 0).plusNanos(t)
                }
                toDate() {
                    return new Date(1e3 * this.seconds.toInt() + Math.floor(this.nanos.toInt() / 1e6))
                }
                plusNanos(e) {
                    const t = this.nanos.add(e);
                    return new Timestamp(this.seconds.add(t.div(u)), t.mod(u))
                }
                _toProtobuf() {
                    return {
                        seconds: this.seconds,
                        nanos: this.nanos.toInt()
                    }
                }
                static _fromProtobuf(e) {
                    return new Timestamp(e.seconds instanceof s.a ? e.seconds.toInt() : null != e.seconds ? e.seconds : 0, null != e.nanos ? e.nanos : 0)
                }
                toString() {
                    return `${this.seconds.toString()}.${this.nanos.toString()}`
                }
                compare(e) {
                    const t = this.seconds.compare(e.seconds);
                    return 0 != t ? t : this.nanos.compare(e.nanos)
                }
            }
        },
        2331: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return MirrorNode
            }));
            var a = n(926);
            class MirrorNode extends a.a {
                constructor(e = {}) {
                    super(e)
                }
                getKey() {
                    return this._address.toString()
                }
                toInsecure() {
                    return new MirrorNode({
                        cloneNode: {
                            node: this,
                            address: this._address.toInsecure()
                        }
                    })
                }
                toSecure() {
                    return new MirrorNode({
                        cloneNode: {
                            node: this,
                            address: this._address.toSecure()
                        }
                    })
                }
            }
        },
        2334: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Node_Node
            }));
            var a = n(926);
            const s = {
                    "0.0.3": "-----BEGIN CERTIFICATE-----\nMIICnzCCAiWgAwIBAgIUenyqJ4UaFBbwokatcUqAwW3o3rswCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDAxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjIyMTU4WhgPMjI5NTA2MDcyMjIxNThaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAwMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEm5b1+oG9R0qt\nzM7UZnS5l/xxUNHIHq5+NAvtlviCpJL19jrW9+/UOy00Qqc6vS6tS1hS+dNJmpiZ\nFN0EHew4VDR7ACnL4LDJKmIHWjQ0iwvZo5kCpO0r9BtPN5FvaSxyo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUeciBviJtjeuue0GPf1xllNw7qvYwCgYIKoZIzj0EAwMDaAAwZQIw\nJeG0H2HdsI1VhOYmJmYlNeKCNgAk+LMorzPmsIInVBO2HK2IrKfpReWDS/m5j51V\nAjEAxKBxDezJDqAZHTkTXCg+X9Q9V6J6M5yDy5IS90aCWEo+W8C1Hc6hkn2/NrvT\nPhwK\n-----END CERTIFICATE-----\n",
                    "0.0.4": "-----BEGIN CERTIFICATE-----\nMIICnjCCAiWgAwIBAgIUUfjO8LyXBdzrzbAe1Yl+d34IDsIwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDExHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjIyMTU5WhgPMjI5NTA2MDcyMjIxNTlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAxMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAERwfj4ZtD/wRb\nf8h9NEMu2sQoLFK9Gc4SQ8o6j4ccLYGdgOoVoq4zzy4Jr7ZtCTuACfCfhp7wy8ra\n+6cugccaSd6AzOKRSVZvQvkUTFKIoAOKwp6IhlU48rmi80MT07eyo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUCGhfVMP72Y0G5XUksE3dPgFHrzkwCgYIKoZIzj0EAwMDZwAwZAIw\ncpX7irZWyuujWRYUs9kLNgB2YLQK+n8r1fH+tJg3+zkcZ2pzhGWmpUUZWOzsDqGC\nAjBUbhlmrTc4LrEBN0EMiRYzfPD2kBZxusLBDIg/aDYERCMcsFvF1T9SsuasF/B+\ncI8=\n-----END CERTIFICATE-----\n",
                    "0.0.5": "-----BEGIN CERTIFICATE-----\nMIICnjCCAiWgAwIBAgIUIo4L+7xe/mUmpKy4qOAQEIxz8UMwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDIxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjIyMTU5WhgPMjI5NTA2MDcyMjIxNTlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAyMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEoFgCjb1/7BUJ\nEXKIPJLlsOSp/39G8l92wOSr7h+Py7iwVwu68H2ykftMOq3tRwDRXZHz7ViqcIZ9\nlfMcS8sbRtVm9tBbNciVUqTLWX9nHr/c4PhKEi+LdgtSUr2+hHiWo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUMR89BHC3yKC4YwUgyBVQUGBCprQwCgYIKoZIzj0EAwMDZwAwZAIw\nUs2BdslcScIwcmxoB60K7/1BPfQI8ccDZIMosas6U2zhinTnRKik1T0i+uHhLl8e\nAjA5apAwSPTnP7j3Bo/FOCkfjTqOjwp2lUqzDJYKolKsHX2sy8hX9MkYiY46SaJ1\nP+0=\n-----END CERTIFICATE-----\n",
                    "0.0.6": "-----BEGIN CERTIFICATE-----\nMIICnzCCAiWgAwIBAgIUWpji03mJsR/16MP8BrOfpNz7aQMwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDMxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjIyMTU5WhgPMjI5NTA2MDcyMjIxNTlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAzMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE+KDMC99Q1rWi\n+FwlytGMS5qzTDytCvk+PzdONnDZ/weNSv4j3BXSo588IwhIxLtfcBlyo/+PmE1c\n5qGFXuMoZjGr22VpvogkRgPejD+Gawb4A2XHkMCD8NmO66uPw97po1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUN1qEI4eQ+WHavb9ypGV417NvhGowCgYIKoZIzj0EAwMDaAAwZQIw\nL0khkiDOiFRa3wx9l5JNjaSRePPc3ZaTaJQkPYeauMaLWEvmC/0e2/e9gPm5qJ8E\nAjEAgXQMko3vNB8VRN4XjyFJa8p/muZ/tLA15wPnb/boUmiZ+njDDSaiu8tIQrTB\ngHW6\n-----END CERTIFICATE-----\n",
                    "0.0.7": "-----BEGIN CERTIFICATE-----\nMIICnjCCAiWgAwIBAgIUEJ7AJvrqDUBNKbssGoJtww3v+WowCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDQxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjIyMjAwWhgPMjI5NTA2MDcyMjIyMDBaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA0MR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEfgJ8w9GUWM3y\nyusedZOFQrgXFVsdtRsMSHbqyVCN6+Wow6SIjy29GRMSP5R2aswupFgh6lXJRqnr\ntY+hpRumFKsmSo+5+l8DBcql4rzs4utESTehM+Cq9LYc4A1z0UIRo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUMCm3UqSbT01Zr23hLzCGnXbDa+MwCgYIKoZIzj0EAwMDZwAwZAIw\nFNcN7mKJo/bwpRT+y/KbYkCJsvljdbXzJOXXQ3e6J6R+0vLqcT25J/ry6pBZMUwR\nAjAswu29z8KJCSxnWwnPpHDmkRT15zG/xS+pAmx3oeQSqp6ZD7qpdJE8zzhbfe5x\nwAc=\n-----END CERTIFICATE-----\n"
                },
                r = {
                    "0.0.3": "-----BEGIN CERTIFICATE-----\nMIICoDCCAiWgAwIBAgIUMkNeM6Sbk9ZFYmRWZmSgTQHHWyUwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDAxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjIyMjU4WhgPMjI5NTA2MDcyMjIyNThaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAwMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAETLLoIMZjEhDP\nKLHS7bJT4OTYGgR/8mB65yfx3KqMLYFF+q2SpWkIrYgUQLVEUEibVSnLlxRUzH7R\nszcKynpTwh0W0yfWanZKQg+RWoKkEYlu2GvkUtJb8cRVM9NLmJUeo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUSrIepwFx8gZ8/G+WGaxs6GgkMtQwCgYIKoZIzj0EAwMDaQAwZgIx\nAJxC0fjB1OrF9vkCKsfnPS3Z+1hscrZhEDG38NxdLEAfPQ5VmyrSBgJy11FBp8yB\n0QIxAKzbge3Lf7iBMwYwm+2M/GiVgmHNMLdtrYuerWpdbYOHgRNAkyt57JoThn0u\nTzkd5Q==\n-----END CERTIFICATE-----\n",
                    "0.0.4": "-----BEGIN CERTIFICATE-----\nMIICnzCCAiWgAwIBAgIUGLriiLPacglp6U+BtJcF9TI7xEUwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDExHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjIyMjU4WhgPMjI5NTA2MDcyMjIyNThaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAxMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEXhR9cb6mH9AE\nGNSGk3OkxN1C/JW49ddYZ/XWD4InjS8D1kXmB1Y39v1mF0L1loG6lDT8Zp46zrj7\n5zMONXZeD2b0mx5hHhtllPTpJ10Tlt9FDoyFbKwPRQ/SAPNADfuzo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUCaKtx8RZ1XJO9rmZMbIcFJZkcv4wCgYIKoZIzj0EAwMDaAAwZQIx\nAPhDW0VrNSmq8hODdhIVV4GyvpYhp3Fksg+sZr3DmUatwn+ptj+X+9IzgPl9QYE3\nkAIwcy2ixgNkjC/DYVmgT4MpUnLneLK0gA23Vj2QwACaTH99H/ybqUH7srj0POB9\n5wvV\n-----END CERTIFICATE-----\n",
                    "0.0.5": "-----BEGIN CERTIFICATE-----\nMIICoDCCAiWgAwIBAgIUEMduome38hvAuIKoGjg/tHatQZMwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDIxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjIyMjU4WhgPMjI5NTA2MDcyMjIyNThaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAyMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEl1olzP1L4WgX\nd7aujOXmTQZt3tEOGzkMa3S6qJwISLBI7Tb9KaW8zYIe9xWBVAwphCbD0wn9xpPV\nwMr4uTn+JocugYBbe2YoUGzWTkxWnOEKXbh/nQJCe3XE/C0FY8fAo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQULfw7LVtTiUDVIvZwhhWW0soQtSQwCgYIKoZIzj0EAwMDaQAwZgIx\nAID5v3Lo2zlnpFzTdJFqBpw6fV+vmpI+JBj61f264J/uHMbELiu2dwxhwWaMElX7\nwQIxAJxccFr7Bf1KjaMyT2dq75zQzFuKDMj9x92yAqM2Gas/Yay+Ccpm8FBn7BFl\nke1Qwg==\n-----END CERTIFICATE-----\n",
                    "0.0.6": "-----BEGIN CERTIFICATE-----\nMIICnzCCAiWgAwIBAgIUcCg/gZGxk/UjYkhW1jg4Zki+jfwwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDMxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjIyMjU5WhgPMjI5NTA2MDcyMjIyNTlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAzMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEOSsXBZicyrxy\ntHJHKh04Mvu6SKM49IC7rAXw5CjlOod5OTeHg0fa5vVoBME4mlWP+LsMMqf8welC\n20b4wMwUC1Hnd66v8crX8L1wvZ9EmKLTvhTd65bS5zloMiSbpdF2o1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUgMMwqaGuUT6JCH0gsbqullaW6/QwCgYIKoZIzj0EAwMDaAAwZQIx\nAMggJ1eMmT7C14z7wHCsOdDOgmzg733+a5dsuAcxknoz/sQLN8wqy1JxShWgEIA/\nxwIweTDAX/4JZnr3mlSC57lYXbHk/c319VfN9Ybxg0FaDXa8tOqg7Ml6Uu3IGujQ\na3eY\n-----END CERTIFICATE-----\n",
                    "0.0.7": "-----BEGIN CERTIFICATE-----\nMIICoDCCAiWgAwIBAgIUXADwhiD5acpA66GPoXuAevBfZBIwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDQxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjIyMjU5WhgPMjI5NTA2MDcyMjIyNTlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA0MR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEBgLhLiGz8qWu\n50vzxSyQkrmhpxuHBJhpGzA0WaUJdAUlaUOL1753ZxxA08wUmcozILNEnMaQ+ROn\n+fuGctv90ZcrSekODjxjbKH2ntVLP8xwkBRCTJ0WRBNenxxBD438o1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUhYOOD/z3ty9O5GuSTXnyujIqBRgwCgYIKoZIzj0EAwMDaQAwZgIx\nAMxbZ4gvkXaORauQFUPRYwOJrihWIA+3ttGDua//YfEbshytQ8b4L65W/1Xs8eOd\nDwIxAImwTzRam8tScdOzmuGgPcML2lkETMpMA2rZYVyEL/VNktIxvB2oE+4M0v5l\nr8IbTA==\n-----END CERTIFICATE-----\n"
                },
                u = {
                    "0.0.3": "-----BEGIN CERTIFICATE-----\nMIICnjCCAiWgAwIBAgIUZWoT9TlgbZy+syLbqZhO5++1cVgwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDAxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjI0MjQ3WhgPMjI5NTA2MDcyMjQyNDdaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAwMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8NhDGK/dgWvD\nRHEJ8af7CBDdhvujH5XIrLen33GTLY8DbJwJW2jdsLGx3+DRVVmeNQZxCbcGj0e2\nIyypkG6s0mtnmeymD8mI3JU8m1aZiuIptZSH3Bw1BNn2hKU4x42co1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUbYGliiNtMkGaroQxXWCl+kYHDBwwCgYIKoZIzj0EAwMDZwAwZAIw\nImTOEYu0y73Ggt4NAjFFsN2sV7CsEL3NoJqJ7MZ6U+b3Ax1hnc1eE0oei6xH4VNF\nAjBB4iZNvAn6Esiu4k+JPlYuMesplgMv33fU5GsfvLIovN8pOJDe0c+CUmsnfGbP\nOsQ=\n-----END CERTIFICATE-----\n",
                    "0.0.4": "-----BEGIN CERTIFICATE-----\nMIICnjCCAiWgAwIBAgIUEGWU0F4aKffY+le55ahQaScDYDwwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDExHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjI0MjQ3WhgPMjI5NTA2MDcyMjQyNDdaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAxMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEqW6TqxMmjL3h\n9AVBgfVaFRZlXUcyWa+QYhzxr8sksgJqfDbmGtdaHIdiL1qCPuC4v4G3qrAbXZRm\nTYNo5Lz0X2ic5pES6DbacdjOgHH7TAY4BVKkuVrydln2jjhh7SmBo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUcBlY5a1rV0H1iQuJMwWxrTEWQ6MwCgYIKoZIzj0EAwMDZwAwZAIw\nR+mY9B2U26yD44s03hjz4TlpkyXbVfmgL3Elqo3lrWDJtvT4zpjGjxg3Q1P3SpZQ\nAjAy9DRVrZPzq8iq5Ir7B8XgLQH5QL7SQ3tUL1HzXJYOukvn9Ofr+QADhpb0oJLB\nKug=\n-----END CERTIFICATE-----\n",
                    "0.0.5": "-----BEGIN CERTIFICATE-----\nMIICnjCCAiWgAwIBAgIUbxzfD3ihIK5snumqqKtqtcBPSSQwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDIxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjI0MjQ3WhgPMjI5NTA2MDcyMjQyNDdaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAyMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEWoAjWmW7vpUr\nU69wRbK9Firons4kRoin6N8lMjCD+xzsrsT6/wycpzC0F8fxfIvOYSMWRtinhOKl\nZAxp60OWYP87iH7RqWBAnHIJZj/znKTGd+8Sqp/RVQmButFHg/+Go1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUTMtwuDzI4Hun7SPp2Nb3scjUUXkwCgYIKoZIzj0EAwMDZwAwZAIw\nHKAgaX39Lgc+4/xHXzZR9mi2p3pf6CDO85Xm56UR/t48HnBkRorR3TFCBXACeIIs\nAjBtXglpDnRf6M+nVBlxLdwCQXiwr6vQJ9+dUo+suNkZ1JBmtHypyIqkG2yT4z9C\nLcs=\n-----END CERTIFICATE-----\n",
                    "0.0.6": "-----BEGIN CERTIFICATE-----\nMIICoDCCAiWgAwIBAgIUPwXdJvpCJYO9lm6uQN3S1aBi3PswCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDMxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjI0MjQ4WhgPMjI5NTA2MDcyMjQyNDhaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDAzMR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8PwBQ0ywu+0t\neIYbaiKwzGEScQMOYFYAMw49++6bGRiH/XZjsypqlJWy3F/mB3+HNVZsqgB61Jpj\n2p98Afkl57MYWhWM29t/x5qAQ8LhKGu2k+BOnCcvHDU2pR+fmFSOo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUgI4r3/iwzFN2wh76y/4XDBk7wgkwCgYIKoZIzj0EAwMDaQAwZgIx\nANAjwHdTWYMCCjrtb2NWzDpsKjf3m6ZcaxbEcM1ta/Zji/4x0+VRZa917CkfaEsr\nLAIxAK/erPvIXRU9eNaK/TAQqppSRaF35G6iNnYjQZzfjTU2DczhT4oCjKzGoCHT\nkI1zOg==\n-----END CERTIFICATE-----\n",
                    "0.0.7": "-----BEGIN CERTIFICATE-----\nMIICnzCCAiWgAwIBAgIUXUGzJj13Ck2Cp0BKauLOdzgCPwIwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDQxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjI0MjQ4WhgPMjI5NTA2MDcyMjQyNDhaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA0MR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8Ee64Tbu53i/\nKsuLOJG3GQ4e9gQ+9BtEy7U8kfFzRHh6Ejn7LOW38ZdKX1HP4zXuUusjNvytqDvr\n7eclitqnegcEOkIeFK3wQwBoNILuq+r4LRVi19V+AIcl5w3qkJvIo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQU2tbfu7hd7USgbS2WsG/6BduKEAMwCgYIKoZIzj0EAwMDaAAwZQIw\nRw/BOLoScmU7P/1JnNPsGarmnvcuJrokAv1wk6j8s5LGuQHReX+d+O3RPLggwcAY\nAjEAjoZnt9simul4cVcVy4G/0f39atanUva17gyzlYXEYx7B6UloxLeEcZhlbBf8\nGjRf\n-----END CERTIFICATE-----\n",
                    "0.0.8": "",
                    "0.0.9": "",
                    "0.0.10": "-----BEGIN CERTIFICATE-----\nMIICnzCCAiWgAwIBAgIUNauEDBCmP9igXLWtRpzkQqIGo/wwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDcxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjI0MjQ5WhgPMjI5NTA2MDcyMjQyNDlaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA3MR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEjbkoJBshQXUy\nqm5K8ldpTDR94Wk8iEM7QwHfceIxK5pPgaVGRkoJyVLSK5LMH4jyaIHUrtA0lIBQ\no0MsYkq7TOOm7+vo1Yrd8EMbu5StMb3gsXUrj7E/SBKIxULak6hCo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUyKHMzIBPRV/mrgG7tIjzOiw2xbUwCgYIKoZIzj0EAwMDaAAwZQIx\nANsigVtLgTdKWBPVJPstWA0H8yihf0/dmM3GO4qp5keGTWz/O3tnom4iDB6eSrcA\njwIwU82Dh+Wxl3kAD3YJH5VhlfHTm1rPlJETBHZgvPBOYqippao6+WZFEpn2/IDC\nNTjn\n-----END CERTIFICATE-----\n",
                    "0.0.11": "-----BEGIN CERTIFICATE-----\nMIICnjCCAiWgAwIBAgIUWtnJm2kswnXYu7/S5BnnTQiDRcUwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDgxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjI0MjUwWhgPMjI5NTA2MDcyMjQyNTBaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA4MR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEjY9Rl+s00xFV\ntdTpAixLR4kJIGLfSLOdm+ofU/KuKMRSz5x1ORhIicppKZK24U5WLGXQU1fKLvxX\nOmqwqL+6oAONmiHszqVdhWne4QPUba0yw7rf1/OI+IFF1HRK3shQo1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUb/htoTodbq5hjP5RNlQ0rkKwWB0wCgYIKoZIzj0EAwMDZwAwZAIw\nbO+9yArr21XKXjYHPadEAYINDxgXEC3W8e3X6MJsHCIZITddWWOyXRNFhz504vN0\nAjB8aBuhrKcg1b4CrQDZQcosyVPUGIZKkXdQFfbVdivKrGZvqLS+GdPLd3v2MmHY\norA=\n-----END CERTIFICATE-----\n",
                    "0.0.12": "-----BEGIN CERTIFICATE-----\nMIICoDCCAiWgAwIBAgIUHBsegV0bKtwpHRoOnnhbK7CTHxMwCgYIKoZIzj0EAwMw\ngYQxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExEDAOBgNVBAMMBzAw\nMDAwMDkxHzAdBgkqhkiG9w0BCQEWEGFkbWluQGhlZGVyYS5jb20wIBcNMjEwODIz\nMjI0MjUwWhgPMjI5NTA2MDcyMjQyNTBaMIGEMQswCQYDVQQGEwJVUzELMAkGA1UE\nCAwCVFgxEzARBgNVBAcMClJpY2hhcmRzb24xDzANBgNVBAoMBkhlZGVyYTEPMA0G\nA1UECwwGSGVkZXJhMRAwDgYDVQQDDAcwMDAwMDA5MR8wHQYJKoZIhvcNAQkBFhBh\nZG1pbkBoZWRlcmEuY29tMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEK+ZAs/00RXaj\nbuQJJy4zwr/YTj9h5V+vbY7sq9Z1RByEwTRRQOI3OuzzMq1EWKkVJKF/QF5b4yda\nx6W9O/NT4EjBXH5XR5X1V6h7aT01YBqsxgMxuUP7kw9K+fW4k6Zao1QwUjAPBgNV\nHREECDAGhwR/AAABMAsGA1UdDwQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAd\nBgNVHQ4EFgQUKbecoYirLjf2O2oPkoggEE2P7FcwCgYIKoZIzj0EAwMDaQAwZgIx\nAP67wsVOkeFo/9QRo+PnZhzEvjOZ/+IUoUhimdljcVwn79tzNP+obf7VW3Oq1wH7\n4wIxAL65+WmMTMoI2cN7TCiL7G/W2ChDsASeHfaP/4e4ZViNONWotlY9i9aS3Kwt\nLTea1Q==\n-----END CERTIFICATE-----\n",
                    "0.0.13": "-----BEGIN CERTIFICATE-----\nMIICoDCCAiegAwIBAgIUBNxMZRKru9jzFA8zsOAI4xkMFCMwCgYIKoZIzj0EAwMw\ngYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw\nMDAwMDEwMR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy\nMzIyNDI1MFoYDzIyOTUwNjA3MjI0MjUwWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV\nBAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN\nBgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTAxHzAdBgkqhkiG9w0BCQEW\nEGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAShUi9sglwb\n0U8QUrGOXJuHRXA9HP8RypkgNBwNRs1YcmPLcuwK70unWlkB81M44IQ7z/dG/0cW\nhfFdRI5x4jAeiUFivmWmMLT6lJMPxJ0BkWTGVFVwI3SKcgSvHP9pNS2jVDBSMA8G\nA1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB\nMB0GA1UdDgQWBBSqIMCDzCKKwJJLCXhu9YJYPw6lsDAKBggqhkjOPQQDAwNnADBk\nAjBl0bJG2A3443ybvrkKjWu8do6nDSR08/M49+19QfA1aDw0nb2sdCOE+xNitpQ9\n7ngCMGuQHmnKA2EyOIVpNl2EtRoG+vdmLJQaoukhmCWjkGrQHkai473tGa9cRZ/8\n+RZFzw==\n-----END CERTIFICATE-----\n",
                    "0.0.14": "-----BEGIN CERTIFICATE-----\nMIICoTCCAiegAwIBAgIUJcQrEmPlIh0KWwiC2X6lZ/OdNs8wCgYIKoZIzj0EAwMw\ngYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw\nMDAwMDExMR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy\nMzIyNDI1MVoYDzIyOTUwNjA3MjI0MjUxWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV\nBAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN\nBgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTExHzAdBgkqhkiG9w0BCQEW\nEGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAASxRizKJSbB\nHmG2amvTHLCyExJngCh42agaFkv5Ab9mZYbqZPe0nUn/8RlVAvEiRNggCMYXC6MU\ne4J6D1aeLhYaa0UY8Fmxd20NUjAOWhJgUXds4ILMMVG+pevofeC8AsujVDBSMA8G\nA1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB\nMB0GA1UdDgQWBBS2Ic+LU/6Wssns4Yyf3N6E666xDzAKBggqhkjOPQQDAwNoADBl\nAjAH0JMX48GD6vThA6FUsVnJmBID376PRZgxhuZvn9C0HawvNjZVQTkpzpYCwmia\ndO4CMQCotakNxyiOxu/BbnPx6ld5+dqVCugsfqClhUhy8ROpNHfKxp3rW7HopowT\nWiMlIyI=\n-----END CERTIFICATE-----\n",
                    "0.0.15": "-----BEGIN CERTIFICATE-----\nMIICoDCCAiegAwIBAgIUSFFNFv1iquxd5txlWA3PlkNju2EwCgYIKoZIzj0EAwMw\ngYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw\nMDAwMDEyMR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy\nMzIyNDI1MVoYDzIyOTUwNjA3MjI0MjUxWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV\nBAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN\nBgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTIxHzAdBgkqhkiG9w0BCQEW\nEGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAQus3nAPZkb\nja4Efo7iD4s8NLsFwEwQXQBgBGIJwtA2JRgLyXeWpuu125ib6qJzT8CHvQZhel3b\ncwYWi4f2JpabMDepHELLxwZ9fILnAQ8GiHlzhrVq2NI15DI84dXVe4OjVDBSMA8G\nA1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB\nMB0GA1UdDgQWBBSEO/JFC5/fDcT2gtipDMYMMTd96DAKBggqhkjOPQQDAwNnADBk\nAjBalAU47XQL4ziHD8lj21pcp3+R5FKzn96HclMT/vraknCT1Sl+vCf6EYsqmi6Z\n+RwCMDpxL6P6OMqyE+HzAeYQ4Fa7MYEQfZGMjka4zxetBLvIpwUCT4EAO8gv9GoU\nwCBUzQ==\n-----END CERTIFICATE-----\n",
                    "0.0.16": "-----BEGIN CERTIFICATE-----\nMIICoDCCAiegAwIBAgIUdnkil4P+VthVMnqygVwGKLt7VfAwCgYIKoZIzj0EAwMw\ngYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw\nMDAwMDEzMR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy\nMzIyNDI1MVoYDzIyOTUwNjA3MjI0MjUxWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV\nBAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN\nBgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTMxHzAdBgkqhkiG9w0BCQEW\nEGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAARUdz9ig/iA\nhEAth2YinHKY6WM63BAxUVItzgk65l1T4wTzwoK4XEwclY5vIeFmZy2e0s95lWgq\nSI68VS9gmJ3xp8Q9wOel/bvuF2tvNZmF393TeoNQQVHrQM1yJAx+nPyjVDBSMA8G\nA1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB\nMB0GA1UdDgQWBBTBFdNwHKSRDo6CxfA1aglY0N8joTAKBggqhkjOPQQDAwNnADBk\nAjAqPIel58Rcl2kDxZxJPD9mK9xW4TU+d2NuP3n140TQ6nPlw1OwCPI7a4i3wfEe\n08ICMBbrpNRdFZcvy76KoLPfTPvqbtWWaR/0tLZg4Rjj3x7SYgUg3vrVDmodHGkb\n4T2Raw==\n-----END CERTIFICATE-----\n",
                    "0.0.17": "-----BEGIN CERTIFICATE-----\nMIICoDCCAiegAwIBAgIUDg+G4Ep+KEmIo+nCOY8DjFX60swwCgYIKoZIzj0EAwMw\ngYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw\nMDAwMDE0MR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy\nMzIyNDI1MloYDzIyOTUwNjA3MjI0MjUyWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV\nBAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN\nBgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTQxHzAdBgkqhkiG9w0BCQEW\nEGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAASCQRL5xUUh\n1bsTXRPAf/qVFWEOxsJTiMlF3+UJ4MajWE5zmc2QNIzqj7NE24z3fNxgjViNK/8+\noBNQeqXfyJ/4etNMzTyG4JTsvWRAQ3aR1J4WDbfwpcgw6AIOKq9OLP6jVDBSMA8G\nA1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB\nMB0GA1UdDgQWBBQB9V2fygf48zyyVL3bnAxCLDUV9zAKBggqhkjOPQQDAwNnADBk\nAjBonlThjjvi3fg7ODQcatPHBkp8Yon/p1ukm3YzYA3kitqroXU7BkmwRae2fbqD\nTTICMHI+fAy+xWGwXAFNcvNTop11IIoszcgJJY+1Mc2Q/USk3pP6iezta+rvnaWu\n7JySHg==\n-----END CERTIFICATE-----\n",
                    "0.0.18": "-----BEGIN CERTIFICATE-----\nMIICojCCAiegAwIBAgIUBvI2Vq6O8yXNzbQlj6uQOdpd1lIwCgYIKoZIzj0EAwMw\ngYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw\nMDAwMDE1MR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy\nMzIyNDI1MloYDzIyOTUwNjA3MjI0MjUyWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV\nBAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN\nBgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTUxHzAdBgkqhkiG9w0BCQEW\nEGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAR+jFDSzCdn\nmMQpgz/vrmD/xioMioumUmyLAkB+voTNsMAOtiaDVbvJty3b4SJETv5tuZyaF5Gb\nQAYuKsP7X8siCCVLZC9i9nCg46NHtuQkEmw1pzUUDmYFDfSV2tWedNqjVDBSMA8G\nA1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB\nMB0GA1UdDgQWBBSqvCmoaVEp2d9WPctby+ooPMGmvTAKBggqhkjOPQQDAwNpADBm\nAjEA9fQ2OFZa7fAQGGYydfVaUF0ObxKj3T+hyl0jiCKLe+hyxJSrXCFS2BM71UiG\nZMVxAjEAmCzESBzTVvl4Uv3TyActGTijTCqTNpN3gJmQbZYjKVtqf8Wxj9WeH0pM\nE8BlA/qE\n-----END CERTIFICATE-----\n",
                    "0.0.19": "-----BEGIN CERTIFICATE-----\nMIICojCCAiegAwIBAgIUZBwp7UPLJkDgngbUIx5xjbAn+7YwCgYIKoZIzj0EAwMw\ngYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw\nMDAwMDE2MR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy\nMzIyNDI1M1oYDzIyOTUwNjA3MjI0MjUzWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV\nBAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN\nBgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTYxHzAdBgkqhkiG9w0BCQEW\nEGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAASCVYu2uF3T\nkCkyRP0FfXVyyTA1z8DFqCKGrcODgGJuVAk59H6u8FIRsNipkb3BXFI0xGccok5X\nT+t5bMaGDHYJ4fjU78UtPNmankQ5HoiMRJpy7Vn8mzizUzUqGpnhu6GjVDBSMA8G\nA1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB\nMB0GA1UdDgQWBBQzE6RGn4YlIbdrl0niKWTtJzfXoTAKBggqhkjOPQQDAwNpADBm\nAjEAobnXnwlNGNWoHscbl/ytUBSyjC7V11sLYJqtORSRX3k2+bFGsg4ltmOVjTdd\nlXatAjEA/Ja3jufmdruqfLa6qigXuYI00YaI96sOwNhdHlnksYfqF41nDe4BsSW6\neQ6N5M9d\n-----END CERTIFICATE-----\n",
                    "0.0.20": "-----BEGIN CERTIFICATE-----\nMIICoTCCAiegAwIBAgIUE1ZRB5n+Yby+Mwgb2xAcVfTZ53kwCgYIKoZIzj0EAwMw\ngYUxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJUWDETMBEGA1UEBwwKUmljaGFyZHNv\nbjEPMA0GA1UECgwGSGVkZXJhMQ8wDQYDVQQLDAZIZWRlcmExETAPBgNVBAMMCDAw\nMDAwMDE3MR8wHQYJKoZIhvcNAQkBFhBhZG1pbkBoZWRlcmEuY29tMCAXDTIxMDgy\nMzIyNDI1M1oYDzIyOTUwNjA3MjI0MjUzWjCBhTELMAkGA1UEBhMCVVMxCzAJBgNV\nBAgMAlRYMRMwEQYDVQQHDApSaWNoYXJkc29uMQ8wDQYDVQQKDAZIZWRlcmExDzAN\nBgNVBAsMBkhlZGVyYTERMA8GA1UEAwwIMDAwMDAwMTcxHzAdBgkqhkiG9w0BCQEW\nEGFkbWluQGhlZGVyYS5jb20wdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAR0OfTmHjxT\nkBiU3GMa/bTvlTswCDAuFQGIIpMWHaf6V4ighzmn20jCg0AVFStb2q7YLRr4HUx8\nToMzsd7/yjl74BwJgfZnL75T/JInwyMgOBiCTXEf6qVDvhNzL4QJuVujVDBSMA8G\nA1UdEQQIMAaHBH8AAAEwCwYDVR0PBAQDAgSwMBMGA1UdJQQMMAoGCCsGAQUFBwMB\nMB0GA1UdDgQWBBQFKRUUmdFcDFQzBN9XqMvLgPd7NzAKBggqhkjOPQQDAwNoADBl\nAjEA5MUUXSehY3KVIv/2LMgrqo1kPiV39fwYuLSnsMJ67wK8yN1NAkkycg6q2K6g\nrBIvAjB3J3a40TINOZTYG+eQs+MSWyfANJLRuJTEOorXzMWM6+05+JYhPnLA8hke\nCRfzmSw=\n-----END CERTIFICATE-----\n"
                };
            class Node_Node extends a.a {
                constructor(e = {}) {
                    if (super(e), null != e.newNode) this._accountId = e.newNode.accountId, this._nodeAddress = null;
                    else {
                        if (null == e.cloneNode) throw new Error("failed to create node: " + JSON.stringify(e));
                        this._accountId = e.cloneNode.node._accountId, this._nodeAddress = e.cloneNode.node._nodeAddress
                    }
                }
                getKey() {
                    return this._accountId.toString()
                }
                toInsecure() {
                    return new Node_Node({
                        cloneNode: {
                            node: this,
                            address: this._address.toInsecure()
                        }
                    })
                }
                toSecure() {
                    return new Node_Node({
                        cloneNode: {
                            node: this,
                            address: this._address.toSecure()
                        }
                    })
                }
                setCert(e) {
                    switch (e.toString()) {
                        case "previewnet":
                            this._cert = s[this._accountId.toString()];
                            break;
                        case "testnet":
                            this._cert = r[this._accountId.toString()];
                            break;
                        case "mainnet":
                            this._cert = u[this._accountId.toString()]
                    }
                    return this
                }
                get accountId() {
                    return this._accountId
                }
                get nodeAddress() {
                    return this._nodeAddress
                }
                setNodeAddress(e) {
                    return this._nodeAddress = e, this
                }
            }
        },
        25: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Key
            }));
            var a = n(44);
            class Key {
                _toProtobufKey() {
                    throw new Error("not implemented")
                }
                static _fromProtobufKey(e) {
                    if (null != e.contractID) return a.a.contractId(e.contractID);
                    if (null != e.delegatableContractId) return a.a.delegateContractId(e.delegatableContractId);
                    if (null != e.ed25519 && e.ed25519.byteLength > 0) return a.a.publicKeyED25519(e.ed25519);
                    if (null != e.ECDSASecp256k1 && e.ECDSASecp256k1.byteLength > 0) return a.a.publicKeyECDSA(e.ECDSASecp256k1);
                    if (null != e.thresholdKey && null != e.thresholdKey.threshold) return a.a.thresholdKey(e.thresholdKey);
                    if (null != e.keyList) return a.a.keyList(e.keyList);
                    throw new Error("(BUG) keyFromProtobuf: not implemented key case: " + JSON.stringify(e))
                }
            }
        },
        273: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return ReceiptStatusError
            }));
            var a = n(438);
            class ReceiptStatusError extends a.a {
                constructor(e) {
                    super(e, `receipt for transaction ${e.transactionId.toString()} contained error status ${e.status.toString()}`), this.transactionReceipt = e.transactionReceipt
                }
            }
        },
        309: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return PrivateKey
            }));
            var a = n(65),
                s = n(695),
                r = n(100),
                u = n(25),
                o = n(44);
            class PrivateKey extends u.a {
                constructor(e) {
                    super(), this._key = e
                }
                static generateED25519() {
                    return new PrivateKey(a.f.generateED25519())
                }
                static generateECDSA() {
                    return new PrivateKey(a.f.generateECDSA())
                }
                static generate() {
                    return PrivateKey.generateED25519()
                }
                static async generateAsync() {
                    return new PrivateKey(await a.f.generateAsync())
                }
                static async generateED25519Async() {
                    return new PrivateKey(await a.f.generateED25519Async())
                }
                static async generateECDSAAsync() {
                    return new PrivateKey(await a.f.generateECDSAAsync())
                }
                static fromBytes(e) {
                    return new PrivateKey(a.f.fromBytes(e))
                }
                static fromBytesECDSA(e) {
                    return new PrivateKey(a.f.fromBytesECDSA(e))
                }
                static fromBytesED25519(e) {
                    return new PrivateKey(a.f.fromBytesED25519(e))
                }
                static fromString(e) {
                    return new PrivateKey(a.f.fromString(e))
                }
                static fromStringECDSA(e) {
                    return new PrivateKey(a.f.fromStringECDSA(e))
                }
                static fromStringED25519(e) {
                    return new PrivateKey(a.f.fromStringED25519(e))
                }
                static async fromMnemonic(e, t = "") {
                    return e instanceof s.a ? new PrivateKey(await a.f.fromMnemonic(e._mnemonic, t)) : new PrivateKey(await a.f.fromMnemonic(e, t))
                }
                static async fromKeystore(e, t = "") {
                    return new PrivateKey(await a.f.fromKeystore(e, t))
                }
                static async fromPem(e, t = "") {
                    return new PrivateKey(await a.f.fromPem(e, t))
                }
                async derive(e) {
                    return new PrivateKey(await this._key.derive(e))
                }
                async legacyDerive(e) {
                    return new PrivateKey(await this._key.legacyDerive(e))
                }
                get publicKey() {
                    return new r.a(this._key.publicKey)
                }
                sign(e) {
                    return this._key.sign(e)
                }
                signTransaction(e) {
                    const t = e._signedTransactions.get(0),
                        n = null != t.bodyBytes ? this.sign(t.bodyBytes) : new Uint8Array;
                    return e.addSignature(this.publicKey, n), n
                }
                isDerivable() {
                    return this._key.isDerivable()
                }
                toBytes() {
                    return this._key.toBytes()
                }
                toBytesDer() {
                    return this._key.toBytesDer()
                }
                toBytesRaw() {
                    return this._key.toBytesRaw()
                }
                toString() {
                    return this._key.toStringDer()
                }
                toStringDer() {
                    return this._key.toStringDer()
                }
                toStringRaw() {
                    return this._key.toStringRaw()
                }
                toKeystore(e = "") {
                    return this._key.toKeystore(e)
                }
                _toProtobufKey() {
                    return this.publicKey._toProtobufKey()
                }
                toAccountId(e, t) {
                    return this.publicKey.toAccountId(e, t)
                }
            }
            o.a.setPrivateKeyConstructor(e => new PrivateKey(e))
        },
        310: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Transfer
            }));
            var a = n(5),
                s = n(17);
            class Transfer {
                constructor(e) {
                    this.accountId = e.accountId instanceof a.a ? e.accountId : a.a.fromString(e.accountId), this.amount = e.amount instanceof s.a ? e.amount : new s.a(e.amount), this.isApproved = e.isApproved
                }
                static _fromProtobuf(e) {
                    const t = [];
                    for (const n of e) t.push(new Transfer({
                        accountId: a.a._fromProtobuf(n.accountID),
                        amount: s.a.fromTinybars(null != n.amount ? n.amount : 0),
                        isApproved: n.isApproval
                    }));
                    return t
                }
                _toProtobuf() {
                    return {
                        accountID: this.accountId._toProtobuf(),
                        amount: this.amount.toTinybars(),
                        isApproval: this.isApproved
                    }
                }
            }
        },
        34: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Status
            }));
            class Status {
                constructor(e) {
                    this._code = e, Object.freeze(this)
                }
                toString() {
                    switch (this) {
                        case Status.Ok:
                            return "OK";
                        case Status.InvalidTransaction:
                            return "INVALID_TRANSACTION";
                        case Status.PayerAccountNotFound:
                            return "PAYER_ACCOUNT_NOT_FOUND";
                        case Status.InvalidNodeAccount:
                            return "INVALID_NODE_ACCOUNT";
                        case Status.TransactionExpired:
                            return "TRANSACTION_EXPIRED";
                        case Status.InvalidTransactionStart:
                            return "INVALID_TRANSACTION_START";
                        case Status.InvalidTransactionDuration:
                            return "INVALID_TRANSACTION_DURATION";
                        case Status.InvalidSignature:
                            return "INVALID_SIGNATURE";
                        case Status.MemoTooLong:
                            return "MEMO_TOO_LONG";
                        case Status.InsufficientTxFee:
                            return "INSUFFICIENT_TX_FEE";
                        case Status.InsufficientPayerBalance:
                            return "INSUFFICIENT_PAYER_BALANCE";
                        case Status.DuplicateTransaction:
                            return "DUPLICATE_TRANSACTION";
                        case Status.Busy:
                            return "BUSY";
                        case Status.NotSupported:
                            return "NOT_SUPPORTED";
                        case Status.InvalidFileId:
                            return "INVALID_FILE_ID";
                        case Status.InvalidAccountId:
                            return "INVALID_ACCOUNT_ID";
                        case Status.InvalidContractId:
                            return "INVALID_CONTRACT_ID";
                        case Status.InvalidTransactionId:
                            return "INVALID_TRANSACTION_ID";
                        case Status.ReceiptNotFound:
                            return "RECEIPT_NOT_FOUND";
                        case Status.RecordNotFound:
                            return "RECORD_NOT_FOUND";
                        case Status.InvalidSolidityId:
                            return "INVALID_SOLIDITY_ID";
                        case Status.Unknown:
                            return "UNKNOWN";
                        case Status.Success:
                            return "SUCCESS";
                        case Status.FailInvalid:
                            return "FAIL_INVALID";
                        case Status.FailFee:
                            return "FAIL_FEE";
                        case Status.FailBalance:
                            return "FAIL_BALANCE";
                        case Status.KeyRequired:
                            return "KEY_REQUIRED";
                        case Status.BadEncoding:
                            return "BAD_ENCODING";
                        case Status.InsufficientAccountBalance:
                            return "INSUFFICIENT_ACCOUNT_BALANCE";
                        case Status.InvalidSolidityAddress:
                            return "INVALID_SOLIDITY_ADDRESS";
                        case Status.InsufficientGas:
                            return "INSUFFICIENT_GAS";
                        case Status.ContractSizeLimitExceeded:
                            return "CONTRACT_SIZE_LIMIT_EXCEEDED";
                        case Status.LocalCallModificationException:
                            return "LOCAL_CALL_MODIFICATION_EXCEPTION";
                        case Status.ContractRevertExecuted:
                            return "CONTRACT_REVERT_EXECUTED";
                        case Status.ContractExecutionException:
                            return "CONTRACT_EXECUTION_EXCEPTION";
                        case Status.InvalidReceivingNodeAccount:
                            return "INVALID_RECEIVING_NODE_ACCOUNT";
                        case Status.MissingQueryHeader:
                            return "MISSING_QUERY_HEADER";
                        case Status.AccountUpdateFailed:
                            return "ACCOUNT_UPDATE_FAILED";
                        case Status.InvalidKeyEncoding:
                            return "INVALID_KEY_ENCODING";
                        case Status.NullSolidityAddress:
                            return "NULL_SOLIDITY_ADDRESS";
                        case Status.ContractUpdateFailed:
                            return "CONTRACT_UPDATE_FAILED";
                        case Status.InvalidQueryHeader:
                            return "INVALID_QUERY_HEADER";
                        case Status.InvalidFeeSubmitted:
                            return "INVALID_FEE_SUBMITTED";
                        case Status.InvalidPayerSignature:
                            return "INVALID_PAYER_SIGNATURE";
                        case Status.KeyNotProvided:
                            return "KEY_NOT_PROVIDED";
                        case Status.InvalidExpirationTime:
                            return "INVALID_EXPIRATION_TIME";
                        case Status.NoWaclKey:
                            return "NO_WACL_KEY";
                        case Status.FileContentEmpty:
                            return "FILE_CONTENT_EMPTY";
                        case Status.InvalidAccountAmounts:
                            return "INVALID_ACCOUNT_AMOUNTS";
                        case Status.EmptyTransactionBody:
                            return "EMPTY_TRANSACTION_BODY";
                        case Status.InvalidTransactionBody:
                            return "INVALID_TRANSACTION_BODY";
                        case Status.InvalidSignatureTypeMismatchingKey:
                            return "INVALID_SIGNATURE_TYPE_MISMATCHING_KEY";
                        case Status.InvalidSignatureCountMismatchingKey:
                            return "INVALID_SIGNATURE_COUNT_MISMATCHING_KEY";
                        case Status.EmptyLiveHashBody:
                            return "EMPTY_LIVE_HASH_BODY";
                        case Status.EmptyLiveHash:
                            return "EMPTY_LIVE_HASH";
                        case Status.EmptyLiveHashKeys:
                            return "EMPTY_LIVE_HASH_KEYS";
                        case Status.InvalidLiveHashSize:
                            return "INVALID_LIVE_HASH_SIZE";
                        case Status.EmptyQueryBody:
                            return "EMPTY_QUERY_BODY";
                        case Status.EmptyLiveHashQuery:
                            return "EMPTY_LIVE_HASH_QUERY";
                        case Status.LiveHashNotFound:
                            return "LIVE_HASH_NOT_FOUND";
                        case Status.AccountIdDoesNotExist:
                            return "ACCOUNT_ID_DOES_NOT_EXIST";
                        case Status.LiveHashAlreadyExists:
                            return "LIVE_HASH_ALREADY_EXISTS";
                        case Status.InvalidFileWacl:
                            return "INVALID_FILE_WACL";
                        case Status.SerializationFailed:
                            return "SERIALIZATION_FAILED";
                        case Status.TransactionOversize:
                            return "TRANSACTION_OVERSIZE";
                        case Status.TransactionTooManyLayers:
                            return "TRANSACTION_TOO_MANY_LAYERS";
                        case Status.ContractDeleted:
                            return "CONTRACT_DELETED";
                        case Status.PlatformNotActive:
                            return "PLATFORM_NOT_ACTIVE";
                        case Status.KeyPrefixMismatch:
                            return "KEY_PREFIX_MISMATCH";
                        case Status.PlatformTransactionNotCreated:
                            return "PLATFORM_TRANSACTION_NOT_CREATED";
                        case Status.InvalidRenewalPeriod:
                            return "INVALID_RENEWAL_PERIOD";
                        case Status.InvalidPayerAccountId:
                            return "INVALID_PAYER_ACCOUNT_ID";
                        case Status.AccountDeleted:
                            return "ACCOUNT_DELETED";
                        case Status.FileDeleted:
                            return "FILE_DELETED";
                        case Status.AccountRepeatedInAccountAmounts:
                            return "ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS";
                        case Status.SettingNegativeAccountBalance:
                            return "SETTING_NEGATIVE_ACCOUNT_BALANCE";
                        case Status.ObtainerRequired:
                            return "OBTAINER_REQUIRED";
                        case Status.ObtainerSameContractId:
                            return "OBTAINER_SAME_CONTRACT_ID";
                        case Status.ObtainerDoesNotExist:
                            return "OBTAINER_DOES_NOT_EXIST";
                        case Status.ModifyingImmutableContract:
                            return "MODIFYING_IMMUTABLE_CONTRACT";
                        case Status.FileSystemException:
                            return "FILE_SYSTEM_EXCEPTION";
                        case Status.AutorenewDurationNotInRange:
                            return "AUTORENEW_DURATION_NOT_IN_RANGE";
                        case Status.ErrorDecodingBytestring:
                            return "ERROR_DECODING_BYTESTRING";
                        case Status.ContractFileEmpty:
                            return "CONTRACT_FILE_EMPTY";
                        case Status.ContractBytecodeEmpty:
                            return "CONTRACT_BYTECODE_EMPTY";
                        case Status.InvalidInitialBalance:
                            return "INVALID_INITIAL_BALANCE";
                        case Status.InvalidReceiveRecordThreshold:
                            return "INVALID_RECEIVE_RECORD_THRESHOLD";
                        case Status.InvalidSendRecordThreshold:
                            return "INVALID_SEND_RECORD_THRESHOLD";
                        case Status.AccountIsNotGenesisAccount:
                            return "ACCOUNT_IS_NOT_GENESIS_ACCOUNT";
                        case Status.PayerAccountUnauthorized:
                            return "PAYER_ACCOUNT_UNAUTHORIZED";
                        case Status.InvalidFreezeTransactionBody:
                            return "INVALID_FREEZE_TRANSACTION_BODY";
                        case Status.FreezeTransactionBodyNotFound:
                            return "FREEZE_TRANSACTION_BODY_NOT_FOUND";
                        case Status.TransferListSizeLimitExceeded:
                            return "TRANSFER_LIST_SIZE_LIMIT_EXCEEDED";
                        case Status.ResultSizeLimitExceeded:
                            return "RESULT_SIZE_LIMIT_EXCEEDED";
                        case Status.NotSpecialAccount:
                            return "NOT_SPECIAL_ACCOUNT";
                        case Status.ContractNegativeGas:
                            return "CONTRACT_NEGATIVE_GAS";
                        case Status.ContractNegativeValue:
                            return "CONTRACT_NEGATIVE_VALUE";
                        case Status.InvalidFeeFile:
                            return "INVALID_FEE_FILE";
                        case Status.InvalidExchangeRateFile:
                            return "INVALID_EXCHANGE_RATE_FILE";
                        case Status.InsufficientLocalCallGas:
                            return "INSUFFICIENT_LOCAL_CALL_GAS";
                        case Status.EntityNotAllowedToDelete:
                            return "ENTITY_NOT_ALLOWED_TO_DELETE";
                        case Status.AuthorizationFailed:
                            return "AUTHORIZATION_FAILED";
                        case Status.FileUploadedProtoInvalid:
                            return "FILE_UPLOADED_PROTO_INVALID";
                        case Status.FileUploadedProtoNotSavedToDisk:
                            return "FILE_UPLOADED_PROTO_NOT_SAVED_TO_DISK";
                        case Status.FeeScheduleFilePartUploaded:
                            return "FEE_SCHEDULE_FILE_PART_UPLOADED";
                        case Status.ExchangeRateChangeLimitExceeded:
                            return "EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED";
                        case Status.MaxContractStorageExceeded:
                            return "MAX_CONTRACT_STORAGE_EXCEEDED";
                        case Status.TransferAccountSameAsDeleteAccount:
                            return "TRANSFER_ACCOUNT_SAME_AS_DELETE_ACCOUNT";
                        case Status.TotalLedgerBalanceInvalid:
                            return "TOTAL_LEDGER_BALANCE_INVALID";
                        case Status.ExpirationReductionNotAllowed:
                            return "EXPIRATION_REDUCTION_NOT_ALLOWED";
                        case Status.MaxGasLimitExceeded:
                            return "MAX_GAS_LIMIT_EXCEEDED";
                        case Status.MaxFileSizeExceeded:
                            return "MAX_FILE_SIZE_EXCEEDED";
                        case Status.ReceiverSigRequired:
                            return "RECEIVER_SIG_REQUIRED";
                        case Status.InvalidTopicId:
                            return "INVALID_TOPIC_ID";
                        case Status.InvalidAdminKey:
                            return "INVALID_ADMIN_KEY";
                        case Status.InvalidSubmitKey:
                            return "INVALID_SUBMIT_KEY";
                        case Status.Unauthorized:
                            return "UNAUTHORIZED";
                        case Status.InvalidTopicMessage:
                            return "INVALID_TOPIC_MESSAGE";
                        case Status.InvalidAutorenewAccount:
                            return "INVALID_AUTORENEW_ACCOUNT";
                        case Status.AutorenewAccountNotAllowed:
                            return "AUTORENEW_ACCOUNT_NOT_ALLOWED";
                        case Status.TopicExpired:
                            return "TOPIC_EXPIRED";
                        case Status.InvalidChunkNumber:
                            return "INVALID_CHUNK_NUMBER";
                        case Status.InvalidChunkTransactionId:
                            return "INVALID_CHUNK_TRANSACTION_ID";
                        case Status.AccountFrozenForToken:
                            return "ACCOUNT_FROZEN_FOR_TOKEN";
                        case Status.TokensPerAccountLimitExceeded:
                            return "TOKENS_PER_ACCOUNT_LIMIT_EXCEEDED";
                        case Status.InvalidTokenId:
                            return "INVALID_TOKEN_ID";
                        case Status.InvalidTokenDecimals:
                            return "INVALID_TOKEN_DECIMALS";
                        case Status.InvalidTokenInitialSupply:
                            return "INVALID_TOKEN_INITIAL_SUPPLY";
                        case Status.InvalidTreasuryAccountForToken:
                            return "INVALID_TREASURY_ACCOUNT_FOR_TOKEN";
                        case Status.InvalidTokenSymbol:
                            return "INVALID_TOKEN_SYMBOL";
                        case Status.TokenHasNoFreezeKey:
                            return "TOKEN_HAS_NO_FREEZE_KEY";
                        case Status.TransfersNotZeroSumForToken:
                            return "TRANSFERS_NOT_ZERO_SUM_FOR_TOKEN";
                        case Status.MissingTokenSymbol:
                            return "MISSING_TOKEN_SYMBOL";
                        case Status.TokenSymbolTooLong:
                            return "TOKEN_SYMBOL_TOO_LONG";
                        case Status.AccountKycNotGrantedForToken:
                            return "ACCOUNT_KYC_NOT_GRANTED_FOR_TOKEN";
                        case Status.TokenHasNoKycKey:
                            return "TOKEN_HAS_NO_KYC_KEY";
                        case Status.InsufficientTokenBalance:
                            return "INSUFFICIENT_TOKEN_BALANCE";
                        case Status.TokenWasDeleted:
                            return "TOKEN_WAS_DELETED";
                        case Status.TokenHasNoSupplyKey:
                            return "TOKEN_HAS_NO_SUPPLY_KEY";
                        case Status.TokenHasNoWipeKey:
                            return "TOKEN_HAS_NO_WIPE_KEY";
                        case Status.InvalidTokenMintAmount:
                            return "INVALID_TOKEN_MINT_AMOUNT";
                        case Status.InvalidTokenBurnAmount:
                            return "INVALID_TOKEN_BURN_AMOUNT";
                        case Status.TokenNotAssociatedToAccount:
                            return "TOKEN_NOT_ASSOCIATED_TO_ACCOUNT";
                        case Status.CannotWipeTokenTreasuryAccount:
                            return "CANNOT_WIPE_TOKEN_TREASURY_ACCOUNT";
                        case Status.InvalidKycKey:
                            return "INVALID_KYC_KEY";
                        case Status.InvalidWipeKey:
                            return "INVALID_WIPE_KEY";
                        case Status.InvalidFreezeKey:
                            return "INVALID_FREEZE_KEY";
                        case Status.InvalidSupplyKey:
                            return "INVALID_SUPPLY_KEY";
                        case Status.MissingTokenName:
                            return "MISSING_TOKEN_NAME";
                        case Status.TokenNameTooLong:
                            return "TOKEN_NAME_TOO_LONG";
                        case Status.InvalidWipingAmount:
                            return "INVALID_WIPING_AMOUNT";
                        case Status.TokenIsImmutable:
                            return "TOKEN_IS_IMMUTABLE";
                        case Status.TokenAlreadyAssociatedToAccount:
                            return "TOKEN_ALREADY_ASSOCIATED_TO_ACCOUNT";
                        case Status.TransactionRequiresZeroTokenBalances:
                            return "TRANSACTION_REQUIRES_ZERO_TOKEN_BALANCES";
                        case Status.AccountIsTreasury:
                            return "ACCOUNT_IS_TREASURY";
                        case Status.TokenIdRepeatedInTokenList:
                            return "TOKEN_ID_REPEATED_IN_TOKEN_LIST";
                        case Status.TokenTransferListSizeLimitExceeded:
                            return "TOKEN_TRANSFER_LIST_SIZE_LIMIT_EXCEEDED";
                        case Status.EmptyTokenTransferBody:
                            return "EMPTY_TOKEN_TRANSFER_BODY";
                        case Status.EmptyTokenTransferAccountAmounts:
                            return "EMPTY_TOKEN_TRANSFER_ACCOUNT_AMOUNTS";
                        case Status.InvalidScheduleId:
                            return "INVALID_SCHEDULE_ID";
                        case Status.ScheduleIsImmutable:
                            return "SCHEDULE_IS_IMMUTABLE";
                        case Status.InvalidSchedulePayerId:
                            return "INVALID_SCHEDULE_PAYER_ID";
                        case Status.InvalidScheduleAccountId:
                            return "INVALID_SCHEDULE_ACCOUNT_ID";
                        case Status.NoNewValidSignatures:
                            return "NO_NEW_VALID_SIGNATURES";
                        case Status.UnresolvableRequiredSigners:
                            return "UNRESOLVABLE_REQUIRED_SIGNERS";
                        case Status.ScheduledTransactionNotInWhitelist:
                            return "SCHEDULED_TRANSACTION_NOT_IN_WHITELIST";
                        case Status.SomeSignaturesWereInvalid:
                            return "SOME_SIGNATURES_WERE_INVALID";
                        case Status.TransactionIdFieldNotAllowed:
                            return "TRANSACTION_ID_FIELD_NOT_ALLOWED";
                        case Status.IdenticalScheduleAlreadyCreated:
                            return "IDENTICAL_SCHEDULE_ALREADY_CREATED";
                        case Status.InvalidZeroByteInString:
                            return "INVALID_ZERO_BYTE_IN_STRING";
                        case Status.ScheduleAlreadyDeleted:
                            return "SCHEDULE_ALREADY_DELETED";
                        case Status.ScheduleAlreadyExecuted:
                            return "SCHEDULE_ALREADY_EXECUTED";
                        case Status.MessageSizeTooLarge:
                            return "MESSAGE_SIZE_TOO_LARGE";
                        case Status.OperationRepeatedInBucketGroups:
                            return "OPERATION_REPEATED_IN_BUCKET_GROUPS";
                        case Status.BucketCapacityOverflow:
                            return "BUCKET_CAPACITY_OVERFLOW";
                        case Status.NodeCapacityNotSufficientForOperation:
                            return "NODE_CAPACITY_NOT_SUFFICIENT_FOR_OPERATION";
                        case Status.BucketHasNoThrottleGroups:
                            return "BUCKET_HAS_NO_THROTTLE_GROUPS";
                        case Status.ThrottleGroupHasZeroOpsPerSec:
                            return "THROTTLE_GROUP_HAS_ZERO_OPS_PER_SEC";
                        case Status.SuccessButMissingExpectedOperation:
                            return "SUCCESS_BUT_MISSING_EXPECTED_OPERATION";
                        case Status.UnparseableThrottleDefinitions:
                            return "UNPARSEABLE_THROTTLE_DEFINITIONS";
                        case Status.InvalidThrottleDefinitions:
                            return "INVALID_THROTTLE_DEFINITIONS";
                        case Status.AccountExpiredAndPendingRemoval:
                            return "ACCOUNT_EXPIRED_AND_PENDING_REMOVAL";
                        case Status.InvalidTokenMaxSupply:
                            return "INVALID_TOKEN_MAX_SUPPLY";
                        case Status.InvalidTokenNftSerialNumber:
                            return "INVALID_TOKEN_NFT_SERIAL_NUMBER";
                        case Status.InvalidNftId:
                            return "INVALID_NFT_ID";
                        case Status.MetadataTooLong:
                            return "METADATA_TOO_LONG";
                        case Status.BatchSizeLimitExceeded:
                            return "BATCH_SIZE_LIMIT_EXCEEDED";
                        case Status.InvalidQueryRange:
                            return "INVALID_QUERY_RANGE";
                        case Status.FractionDividesByZero:
                            return "FRACTION_DIVIDES_BY_ZERO";
                        case Status.InsufficientPayerBalanceForCustomFee:
                            return "INSUFFICIENT_PAYER_BALANCE_FOR_CUSTOM_FEE";
                        case Status.CustomFeesListTooLong:
                            return "CUSTOM_FEES_LIST_TOO_LONG";
                        case Status.InvalidCustomFeeCollector:
                            return "INVALID_CUSTOM_FEE_COLLECTOR";
                        case Status.InvalidTokenIdInCustomFees:
                            return "INVALID_TOKEN_ID_IN_CUSTOM_FEES";
                        case Status.TokenNotAssociatedToFeeCollector:
                            return "TOKEN_NOT_ASSOCIATED_TO_FEE_COLLECTOR";
                        case Status.TokenMaxSupplyReached:
                            return "TOKEN_MAX_SUPPLY_REACHED";
                        case Status.SenderDoesNotOwnNftSerialNo:
                            return "SENDER_DOES_NOT_OWN_NFT_SERIAL_NO";
                        case Status.CustomFeeNotFullySpecified:
                            return "CUSTOM_FEE_NOT_FULLY_SPECIFIED";
                        case Status.CustomFeeMustBePositive:
                            return "CUSTOM_FEE_MUST_BE_POSITIVE";
                        case Status.TokenHasNoFeeScheduleKey:
                            return "TOKEN_HAS_NO_FEE_SCHEDULE_KEY";
                        case Status.CustomFeeOutsideNumericRange:
                            return "CUSTOM_FEE_OUTSIDE_NUMERIC_RANGE";
                        case Status.RoyaltyFractionCannotExceedOne:
                            return "ROYALTY_FRACTION_CANNOT_EXCEED_ONE";
                        case Status.FractionalFeeMaxAmountLessThanMinAmount:
                            return "FRACTIONAL_FEE_MAX_AMOUNT_LESS_THAN_MIN_AMOUNT";
                        case Status.CustomScheduleAlreadyHasNoFees:
                            return "CUSTOM_SCHEDULE_ALREADY_HAS_NO_FEES";
                        case Status.CustomFeeDenominationMustBeFungibleCommon:
                            return "CUSTOM_FEE_DENOMINATION_MUST_BE_FUNGIBLE_COMMON";
                        case Status.CustomFractionalFeeOnlyAllowedForFungibleCommon:
                            return "CUSTOM_FRACTIONAL_FEE_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON";
                        case Status.InvalidCustomFeeScheduleKey:
                            return "INVALID_CUSTOM_FEE_SCHEDULE_KEY";
                        case Status.InvalidTokenMintMetadata:
                            return "INVALID_TOKEN_MINT_METADATA";
                        case Status.InvalidTokenBurnMetadata:
                            return "INVALID_TOKEN_BURN_METADATA";
                        case Status.CurrentTreasuryStillOwnsNfts:
                            return "CURRENT_TREASURY_STILL_OWNS_NFTS";
                        case Status.AccountStillOwnsNfts:
                            return "ACCOUNT_STILL_OWNS_NFTS";
                        case Status.TreasuryMustOwnBurnedNft:
                            return "TREASURY_MUST_OWN_BURNED_NFT";
                        case Status.AccountDoesNotOwnWipedNft:
                            return "ACCOUNT_DOES_NOT_OWN_WIPED_NFT";
                        case Status.AccountAmountTransfersOnlyAllowedForFungibleCommon:
                            return "ACCOUNT_AMOUNT_TRANSFERS_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON";
                        case Status.MaxNftsInPriceRegimeHaveBeenMinted:
                            return "MAX_NFTS_IN_PRICE_REGIME_HAVE_BEEN_MINTED";
                        case Status.PayerAccountDeleted:
                            return "PAYER_ACCOUNT_DELETED";
                        case Status.CustomFeeChargingExceededMaxRecursionDepth:
                            return "CUSTOM_FEE_CHARGING_EXCEEDED_MAX_RECURSION_DEPTH";
                        case Status.CustomFeeChargingExceededMaxAccountAmounts:
                            return "CUSTOM_FEE_CHARGING_EXCEEDED_MAX_ACCOUNT_AMOUNTS";
                        case Status.InsufficientSenderAccountBalanceForCustomFee:
                            return "INSUFFICIENT_SENDER_ACCOUNT_BALANCE_FOR_CUSTOM_FEE";
                        case Status.SerialNumberLimitReached:
                            return "SERIAL_NUMBER_LIMIT_REACHED";
                        case Status.CustomRoyaltyFeeOnlyAllowedForNonFungibleUnique:
                            return "CUSTOM_ROYALTY_FEE_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE";
                        case Status.NoRemainingAutomaticAssociations:
                            return "NO_REMAINING_AUTOMATIC_ASSOCIATIONS";
                        case Status.ExistingAutomaticAssociationsExceedGivenLimit:
                            return "EXISTING_AUTOMATIC_ASSOCIATIONS_EXCEED_GIVEN_LIMIT";
                        case Status.RequestedNumAutomaticAssociationsExceedsAssociationLimit:
                            return "REQUESTED_NUM_AUTOMATIC_ASSOCIATIONS_EXCEEDS_ASSOCIATION_LIMIT";
                        case Status.TokenIsPaused:
                            return "TOKEN_IS_PAUSED";
                        case Status.TokenHasNoPauseKey:
                            return "TOKEN_HAS_NO_PAUSE_KEY";
                        case Status.InvalidPauseKey:
                            return "INVALID_PAUSE_KEY";
                        case Status.FreezeUpdateFileDoesNotExist:
                            return "FREEZE_UPDATE_FILE_DOES_NOT_EXIST";
                        case Status.FreezeUpdateFileHashDoesNotMatch:
                            return "FREEZE_UPDATE_FILE_HASH_DOES_NOT_MATCH";
                        case Status.NoUpgradeHasBeenPrepared:
                            return "NO_UPGRADE_HAS_BEEN_PREPARED";
                        case Status.NoFreezeIsScheduled:
                            return "NO_FREEZE_IS_SCHEDULED";
                        case Status.UpdateFileHashChangedSincePrepareUpgrade:
                            return "UPDATE_FILE_HASH_CHANGED_SINCE_PREPARE_UPGRADE";
                        case Status.FreezeStartTimeMustBeFuture:
                            return "FREEZE_START_TIME_MUST_BE_FUTURE";
                        case Status.PreparedUpdateFileIsImmutable:
                            return "PREPARED_UPDATE_FILE_IS_IMMUTABLE";
                        case Status.FreezeAlreadyScheduled:
                            return "FREEZE_ALREADY_SCHEDULED";
                        case Status.FreezeUpgradeInProgress:
                            return "FREEZE_UPGRADE_IN_PROGRESS";
                        case Status.UpdateFileIdDoesNotMatchPrepared:
                            return "UPDATE_FILE_ID_DOES_NOT_MATCH_PREPARED";
                        case Status.UpdateFileHashDoesNotMatchPrepared:
                            return "UPDATE_FILE_HASH_DOES_NOT_MATCH_PREPARED";
                        case Status.ConsensusGasExhausted:
                            return "CONSENSUS_GAS_EXHAUSTED";
                        case Status.RevertedSuccess:
                            return "REVERTED_SUCCESS";
                        case Status.MaxStorageInPriceRegimeHasBeenUsed:
                            return "MAX_STORAGE_IN_PRICE_REGIME_HAS_BEEN_USED";
                        case Status.InvalidAliasKey:
                            return "INVALID_ALIAS_KEY";
                        case Status.UnexpectedTokenDecimals:
                            return "UNEXPECTED_TOKEN_DECIMALS";
                        case Status.InvalidProxyAccountId:
                            return "INVALID_PROXY_ACCOUNT_ID";
                        case Status.InvalidTransferAccountId:
                            return "INVALID_TRANSFER_ACCOUNT_ID";
                        case Status.InvalidFeeCollectorAccountId:
                            return "INVALID_FEE_COLLECTOR_ACCOUNT_ID";
                        case Status.AliasIsImmutable:
                            return "ALIAS_IS_IMMUTABLE";
                        case Status.SpenderAccountSameAsOwner:
                            return "SPENDER_ACCOUNT_SAME_AS_OWNER";
                        case Status.AmountExceedsTokenMaxSupply:
                            return "AMOUNT_EXCEEDS_TOKEN_MAX_SUPPLY";
                        case Status.NegativeAllowanceAmount:
                            return "NEGATIVE_ALLOWANCE_AMOUNT";
                        case Status.CannotApproveForAllFungibleCommon:
                            return "CANNOT_APPROVE_FOR_ALL_FUNGIBLE_COMMON";
                        case Status.SpenderDoesNotHaveAllowance:
                            return "SPENDER_DOES_NOT_HAVE_ALLOWANCE";
                        case Status.AmountExceedsAllowance:
                            return "AMOUNT_EXCEEDS_ALLOWANCE";
                        case Status.MaxAllowancesExceeded:
                            return "MAX_ALLOWANCES_EXCEEDED";
                        case Status.EmptyAllowances:
                            return "EMPTY_ALLOWANCES";
                        case Status.SpenderAccountRepeatedInAllowances:
                            return "SPENDER_ACCOUNT_REPEATED_IN_ALLOWANCES";
                        case Status.RepeatedSerialNumsInNftAllowances:
                            return "REPEATED_SERIAL_NUMS_IN_NFT_ALLOWANCES";
                        case Status.FungibleTokenInNftAllowances:
                            return "FUNGIBLE_TOKEN_IN_NFT_ALLOWANCES";
                        case Status.NftInFungibleTokenAllowances:
                            return "NFT_IN_FUNGIBLE_TOKEN_ALLOWANCES";
                        case Status.InvalidAllowanceOwnerId:
                            return "INVALID_ALLOWANCE_OWNER_ID";
                        case Status.InvalidAllowanceSpenderId:
                            return "INVALID_ALLOWANCE_SPENDER_ID";
                        case Status.RepeatedAllowancesToDelete:
                            return "REPEATED_ALLOWANCES_TO_DELETE";
                        case Status.InvalidDelegatingSpender:
                            return "INVALID_DELEGATING_SPENDER";
                        case Status.DelegatingSpenderCannotGrantApproveForAll:
                            return "DELEGATING_SPENDER_CANNOT_GRANT_APPROVE_FOR_ALL";
                        case Status.DelegatingSpenderDoesNotHaveApproveForAll:
                            return "DELEGATING_SPENDER_DOES_NOT_HAVE_APPROVE_FOR_ALL";
                        case Status.ScheduleExpirationTimeTooFarInFuture:
                            return "SCHEDULE_EXPIRATION_TIME_TOO_FAR_IN_FUTURE";
                        case Status.ScheduleExpirationTimeMustBeHigherThanConsensusTime:
                            return "SCHEDULE_EXPIRATION_TIME_MUST_BE_HIGHER_THAN_CONSENSUS_TIME";
                        case Status.ScheduleFutureThrottleExceeded:
                            return "SCHEDULE_FUTURE_THROTTLE_EXCEEDED";
                        case Status.ScheduleFutureGasLimitExceeded:
                            return "SCHEDULE_FUTURE_GAS_LIMIT_EXCEEDED";
                        case Status.InvalidEthereumTransaction:
                            return "INVALID_ETHEREUM_TRANSACTION";
                        case Status.WrongChainId:
                            return "WRONG_CHAIN_ID";
                        case Status.WrongNonce:
                            return "WRONG_NONCE";
                        case Status.AccessListUnsupported:
                            return "ACCESS_LIST_UNSUPPORTED";
                        case Status.SchedulePendingExpiration:
                            return "SCHEDULE_PENDING_EXPIRATION";
                        case Status.ContractIsTokenTreasury:
                            return "CONTRACT_IS_TOKEN_TREASURY";
                        case Status.ContractHasNonZeroTokenBalances:
                            return "CONTRACT_HAS_NON_ZERO_TOKEN_BALANCES";
                        case Status.ContractExpiredAndPendingRemoval:
                            return "CONTRACT_EXPIRED_AND_PENDING_REMOVAL";
                        case Status.ContractHasNoAutoRenewAccount:
                            return "CONTRACT_HAS_NO_AUTO_RENEW_ACCOUNT";
                        case Status.PermanentRemovalRequiresSystemInitiation:
                            return "PERMANENT_REMOVAL_REQUIRES_SYSTEM_INITIATION";
                        case Status.ProxyAccountIdFieldIsDeprecated:
                            return "PROXY_ACCOUNT_ID_FIELD_IS_DEPRECATED";
                        case Status.SelfStakingIsNotAllowed:
                            return "SELF_STAKING_IS_NOT_ALLOWED";
                        case Status.InvalidStakingId:
                            return "INVALID_STAKING_ID";
                        case Status.StakingNotEnabled:
                            return "STAKING_NOT_ENABLED";
                        case Status.InvalidPrngRange:
                            return "INVALID_PRNG_RANGE";
                        case Status.MaxEntitiesInPriceRegimeHaveBeenCreated:
                            return "MAX_ENTITIES_IN_PRICE_REGIME_HAVE_BEEN_CREATED";
                        case Status.InvalidFullPrefixSignatureForPrecompile:
                            return "INVALID_FULL_PREFIX_SIGNATURE_FOR_PRECOMPILE";
                        case Status.InsufficientBalancesForStorageRent:
                            return "INSUFFICIENT_BALANCES_FOR_STORAGE_RENT";
                        case Status.MaxChildRecordsExceeded:
                            return "MAX_CHILD_RECORDS_EXCEEDED";
                        case Status.InsufficientBalancesForRenewalFees:
                            return "INSUFFICIENT_BALANCES_FOR_RENEWAL_FEES";
                        default:
                            return `UNKNOWN (${this._code})`
                    }
                }
                static _fromCode(e) {
                    switch (e) {
                        case 0:
                            return Status.Ok;
                        case 1:
                            return Status.InvalidTransaction;
                        case 2:
                            return Status.PayerAccountNotFound;
                        case 3:
                            return Status.InvalidNodeAccount;
                        case 4:
                            return Status.TransactionExpired;
                        case 5:
                            return Status.InvalidTransactionStart;
                        case 6:
                            return Status.InvalidTransactionDuration;
                        case 7:
                            return Status.InvalidSignature;
                        case 8:
                            return Status.MemoTooLong;
                        case 9:
                            return Status.InsufficientTxFee;
                        case 10:
                            return Status.InsufficientPayerBalance;
                        case 11:
                            return Status.DuplicateTransaction;
                        case 12:
                            return Status.Busy;
                        case 13:
                            return Status.NotSupported;
                        case 14:
                            return Status.InvalidFileId;
                        case 15:
                            return Status.InvalidAccountId;
                        case 16:
                            return Status.InvalidContractId;
                        case 17:
                            return Status.InvalidTransactionId;
                        case 18:
                            return Status.ReceiptNotFound;
                        case 19:
                            return Status.RecordNotFound;
                        case 20:
                            return Status.InvalidSolidityId;
                        case 21:
                            return Status.Unknown;
                        case 22:
                            return Status.Success;
                        case 23:
                            return Status.FailInvalid;
                        case 24:
                            return Status.FailFee;
                        case 25:
                            return Status.FailBalance;
                        case 26:
                            return Status.KeyRequired;
                        case 27:
                            return Status.BadEncoding;
                        case 28:
                            return Status.InsufficientAccountBalance;
                        case 29:
                            return Status.InvalidSolidityAddress;
                        case 30:
                            return Status.InsufficientGas;
                        case 31:
                            return Status.ContractSizeLimitExceeded;
                        case 32:
                            return Status.LocalCallModificationException;
                        case 33:
                            return Status.ContractRevertExecuted;
                        case 34:
                            return Status.ContractExecutionException;
                        case 35:
                            return Status.InvalidReceivingNodeAccount;
                        case 36:
                            return Status.MissingQueryHeader;
                        case 37:
                            return Status.AccountUpdateFailed;
                        case 38:
                            return Status.InvalidKeyEncoding;
                        case 39:
                            return Status.NullSolidityAddress;
                        case 40:
                            return Status.ContractUpdateFailed;
                        case 41:
                            return Status.InvalidQueryHeader;
                        case 42:
                            return Status.InvalidFeeSubmitted;
                        case 43:
                            return Status.InvalidPayerSignature;
                        case 44:
                            return Status.KeyNotProvided;
                        case 45:
                            return Status.InvalidExpirationTime;
                        case 46:
                            return Status.NoWaclKey;
                        case 47:
                            return Status.FileContentEmpty;
                        case 48:
                            return Status.InvalidAccountAmounts;
                        case 49:
                            return Status.EmptyTransactionBody;
                        case 50:
                            return Status.InvalidTransactionBody;
                        case 51:
                            return Status.InvalidSignatureTypeMismatchingKey;
                        case 52:
                            return Status.InvalidSignatureCountMismatchingKey;
                        case 53:
                            return Status.EmptyLiveHashBody;
                        case 54:
                            return Status.EmptyLiveHash;
                        case 55:
                            return Status.EmptyLiveHashKeys;
                        case 56:
                            return Status.InvalidLiveHashSize;
                        case 57:
                            return Status.EmptyQueryBody;
                        case 58:
                            return Status.EmptyLiveHashQuery;
                        case 59:
                            return Status.LiveHashNotFound;
                        case 60:
                            return Status.AccountIdDoesNotExist;
                        case 61:
                            return Status.LiveHashAlreadyExists;
                        case 62:
                            return Status.InvalidFileWacl;
                        case 63:
                            return Status.SerializationFailed;
                        case 64:
                            return Status.TransactionOversize;
                        case 65:
                            return Status.TransactionTooManyLayers;
                        case 66:
                            return Status.ContractDeleted;
                        case 67:
                            return Status.PlatformNotActive;
                        case 68:
                            return Status.KeyPrefixMismatch;
                        case 69:
                            return Status.PlatformTransactionNotCreated;
                        case 70:
                            return Status.InvalidRenewalPeriod;
                        case 71:
                            return Status.InvalidPayerAccountId;
                        case 72:
                            return Status.AccountDeleted;
                        case 73:
                            return Status.FileDeleted;
                        case 74:
                            return Status.AccountRepeatedInAccountAmounts;
                        case 75:
                            return Status.SettingNegativeAccountBalance;
                        case 76:
                            return Status.ObtainerRequired;
                        case 77:
                            return Status.ObtainerSameContractId;
                        case 78:
                            return Status.ObtainerDoesNotExist;
                        case 79:
                            return Status.ModifyingImmutableContract;
                        case 80:
                            return Status.FileSystemException;
                        case 81:
                            return Status.AutorenewDurationNotInRange;
                        case 82:
                            return Status.ErrorDecodingBytestring;
                        case 83:
                            return Status.ContractFileEmpty;
                        case 84:
                            return Status.ContractBytecodeEmpty;
                        case 85:
                            return Status.InvalidInitialBalance;
                        case 86:
                            return Status.InvalidReceiveRecordThreshold;
                        case 87:
                            return Status.InvalidSendRecordThreshold;
                        case 88:
                            return Status.AccountIsNotGenesisAccount;
                        case 89:
                            return Status.PayerAccountUnauthorized;
                        case 90:
                            return Status.InvalidFreezeTransactionBody;
                        case 91:
                            return Status.FreezeTransactionBodyNotFound;
                        case 92:
                            return Status.TransferListSizeLimitExceeded;
                        case 93:
                            return Status.ResultSizeLimitExceeded;
                        case 94:
                            return Status.NotSpecialAccount;
                        case 95:
                            return Status.ContractNegativeGas;
                        case 96:
                            return Status.ContractNegativeValue;
                        case 97:
                            return Status.InvalidFeeFile;
                        case 98:
                            return Status.InvalidExchangeRateFile;
                        case 99:
                            return Status.InsufficientLocalCallGas;
                        case 100:
                            return Status.EntityNotAllowedToDelete;
                        case 101:
                            return Status.AuthorizationFailed;
                        case 102:
                            return Status.FileUploadedProtoInvalid;
                        case 103:
                            return Status.FileUploadedProtoNotSavedToDisk;
                        case 104:
                            return Status.FeeScheduleFilePartUploaded;
                        case 105:
                            return Status.ExchangeRateChangeLimitExceeded;
                        case 106:
                            return Status.MaxContractStorageExceeded;
                        case 107:
                            return Status.TransferAccountSameAsDeleteAccount;
                        case 108:
                            return Status.TotalLedgerBalanceInvalid;
                        case 110:
                            return Status.ExpirationReductionNotAllowed;
                        case 111:
                            return Status.MaxGasLimitExceeded;
                        case 112:
                            return Status.MaxFileSizeExceeded;
                        case 113:
                            return Status.ReceiverSigRequired;
                        case 150:
                            return Status.InvalidTopicId;
                        case 155:
                            return Status.InvalidAdminKey;
                        case 156:
                            return Status.InvalidSubmitKey;
                        case 157:
                            return Status.Unauthorized;
                        case 158:
                            return Status.InvalidTopicMessage;
                        case 159:
                            return Status.InvalidAutorenewAccount;
                        case 160:
                            return Status.AutorenewAccountNotAllowed;
                        case 162:
                            return Status.TopicExpired;
                        case 163:
                            return Status.InvalidChunkNumber;
                        case 164:
                            return Status.InvalidChunkTransactionId;
                        case 165:
                            return Status.AccountFrozenForToken;
                        case 166:
                            return Status.TokensPerAccountLimitExceeded;
                        case 167:
                            return Status.InvalidTokenId;
                        case 168:
                            return Status.InvalidTokenDecimals;
                        case 169:
                            return Status.InvalidTokenInitialSupply;
                        case 170:
                            return Status.InvalidTreasuryAccountForToken;
                        case 171:
                            return Status.InvalidTokenSymbol;
                        case 172:
                            return Status.TokenHasNoFreezeKey;
                        case 173:
                            return Status.TransfersNotZeroSumForToken;
                        case 174:
                            return Status.MissingTokenSymbol;
                        case 175:
                            return Status.TokenSymbolTooLong;
                        case 176:
                            return Status.AccountKycNotGrantedForToken;
                        case 177:
                            return Status.TokenHasNoKycKey;
                        case 178:
                            return Status.InsufficientTokenBalance;
                        case 179:
                            return Status.TokenWasDeleted;
                        case 180:
                            return Status.TokenHasNoSupplyKey;
                        case 181:
                            return Status.TokenHasNoWipeKey;
                        case 182:
                            return Status.InvalidTokenMintAmount;
                        case 183:
                            return Status.InvalidTokenBurnAmount;
                        case 184:
                            return Status.TokenNotAssociatedToAccount;
                        case 185:
                            return Status.CannotWipeTokenTreasuryAccount;
                        case 186:
                            return Status.InvalidKycKey;
                        case 187:
                            return Status.InvalidWipeKey;
                        case 188:
                            return Status.InvalidFreezeKey;
                        case 189:
                            return Status.InvalidSupplyKey;
                        case 190:
                            return Status.MissingTokenName;
                        case 191:
                            return Status.TokenNameTooLong;
                        case 192:
                            return Status.InvalidWipingAmount;
                        case 193:
                            return Status.TokenIsImmutable;
                        case 194:
                            return Status.TokenAlreadyAssociatedToAccount;
                        case 195:
                            return Status.TransactionRequiresZeroTokenBalances;
                        case 196:
                            return Status.AccountIsTreasury;
                        case 197:
                            return Status.TokenIdRepeatedInTokenList;
                        case 198:
                            return Status.TokenTransferListSizeLimitExceeded;
                        case 199:
                            return Status.EmptyTokenTransferBody;
                        case 200:
                            return Status.EmptyTokenTransferAccountAmounts;
                        case 201:
                            return Status.InvalidScheduleId;
                        case 202:
                            return Status.ScheduleIsImmutable;
                        case 203:
                            return Status.InvalidSchedulePayerId;
                        case 204:
                            return Status.InvalidScheduleAccountId;
                        case 205:
                            return Status.NoNewValidSignatures;
                        case 206:
                            return Status.UnresolvableRequiredSigners;
                        case 207:
                            return Status.ScheduledTransactionNotInWhitelist;
                        case 208:
                            return Status.SomeSignaturesWereInvalid;
                        case 209:
                            return Status.TransactionIdFieldNotAllowed;
                        case 210:
                            return Status.IdenticalScheduleAlreadyCreated;
                        case 211:
                            return Status.InvalidZeroByteInString;
                        case 212:
                            return Status.ScheduleAlreadyDeleted;
                        case 213:
                            return Status.ScheduleAlreadyExecuted;
                        case 214:
                            return Status.MessageSizeTooLarge;
                        case 215:
                            return Status.OperationRepeatedInBucketGroups;
                        case 216:
                            return Status.BucketCapacityOverflow;
                        case 217:
                            return Status.NodeCapacityNotSufficientForOperation;
                        case 218:
                            return Status.BucketHasNoThrottleGroups;
                        case 219:
                            return Status.ThrottleGroupHasZeroOpsPerSec;
                        case 220:
                            return Status.SuccessButMissingExpectedOperation;
                        case 221:
                            return Status.UnparseableThrottleDefinitions;
                        case 222:
                            return Status.InvalidThrottleDefinitions;
                        case 223:
                            return Status.AccountExpiredAndPendingRemoval;
                        case 224:
                            return Status.InvalidTokenMaxSupply;
                        case 225:
                            return Status.InvalidTokenNftSerialNumber;
                        case 226:
                            return Status.InvalidNftId;
                        case 227:
                            return Status.MetadataTooLong;
                        case 228:
                            return Status.BatchSizeLimitExceeded;
                        case 229:
                            return Status.InvalidQueryRange;
                        case 230:
                            return Status.FractionDividesByZero;
                        case 231:
                            return Status.InsufficientPayerBalanceForCustomFee;
                        case 232:
                            return Status.CustomFeesListTooLong;
                        case 233:
                            return Status.InvalidCustomFeeCollector;
                        case 234:
                            return Status.InvalidTokenIdInCustomFees;
                        case 235:
                            return Status.TokenNotAssociatedToFeeCollector;
                        case 236:
                            return Status.TokenMaxSupplyReached;
                        case 237:
                            return Status.SenderDoesNotOwnNftSerialNo;
                        case 238:
                            return Status.CustomFeeNotFullySpecified;
                        case 239:
                            return Status.CustomFeeMustBePositive;
                        case 240:
                            return Status.TokenHasNoFeeScheduleKey;
                        case 241:
                            return Status.CustomFeeOutsideNumericRange;
                        case 242:
                            return Status.RoyaltyFractionCannotExceedOne;
                        case 243:
                            return Status.FractionalFeeMaxAmountLessThanMinAmount;
                        case 244:
                            return Status.CustomScheduleAlreadyHasNoFees;
                        case 245:
                            return Status.CustomFeeDenominationMustBeFungibleCommon;
                        case 246:
                            return Status.CustomFractionalFeeOnlyAllowedForFungibleCommon;
                        case 247:
                            return Status.InvalidCustomFeeScheduleKey;
                        case 248:
                            return Status.InvalidTokenMintMetadata;
                        case 249:
                            return Status.InvalidTokenBurnMetadata;
                        case 250:
                            return Status.CurrentTreasuryStillOwnsNfts;
                        case 251:
                            return Status.AccountStillOwnsNfts;
                        case 252:
                            return Status.TreasuryMustOwnBurnedNft;
                        case 253:
                            return Status.AccountDoesNotOwnWipedNft;
                        case 254:
                            return Status.AccountAmountTransfersOnlyAllowedForFungibleCommon;
                        case 255:
                            return Status.MaxNftsInPriceRegimeHaveBeenMinted;
                        case 256:
                            return Status.PayerAccountDeleted;
                        case 257:
                            return Status.CustomFeeChargingExceededMaxRecursionDepth;
                        case 258:
                            return Status.CustomFeeChargingExceededMaxAccountAmounts;
                        case 259:
                            return Status.InsufficientSenderAccountBalanceForCustomFee;
                        case 260:
                            return Status.SerialNumberLimitReached;
                        case 261:
                            return Status.CustomRoyaltyFeeOnlyAllowedForNonFungibleUnique;
                        case 262:
                            return Status.NoRemainingAutomaticAssociations;
                        case 263:
                            return Status.ExistingAutomaticAssociationsExceedGivenLimit;
                        case 264:
                            return Status.RequestedNumAutomaticAssociationsExceedsAssociationLimit;
                        case 265:
                            return Status.TokenIsPaused;
                        case 266:
                            return Status.TokenHasNoPauseKey;
                        case 267:
                            return Status.InvalidPauseKey;
                        case 268:
                            return Status.FreezeUpdateFileDoesNotExist;
                        case 269:
                            return Status.FreezeUpdateFileHashDoesNotMatch;
                        case 270:
                            return Status.NoUpgradeHasBeenPrepared;
                        case 271:
                            return Status.NoFreezeIsScheduled;
                        case 272:
                            return Status.UpdateFileHashChangedSincePrepareUpgrade;
                        case 273:
                            return Status.FreezeStartTimeMustBeFuture;
                        case 274:
                            return Status.PreparedUpdateFileIsImmutable;
                        case 275:
                            return Status.FreezeAlreadyScheduled;
                        case 276:
                            return Status.FreezeUpgradeInProgress;
                        case 277:
                            return Status.UpdateFileIdDoesNotMatchPrepared;
                        case 278:
                            return Status.UpdateFileHashDoesNotMatchPrepared;
                        case 279:
                            return Status.ConsensusGasExhausted;
                        case 280:
                            return Status.RevertedSuccess;
                        case 281:
                            return Status.MaxStorageInPriceRegimeHasBeenUsed;
                        case 282:
                            return Status.InvalidAliasKey;
                        case 283:
                            return Status.UnexpectedTokenDecimals;
                        case 284:
                            return Status.InvalidProxyAccountId;
                        case 285:
                            return Status.InvalidTransferAccountId;
                        case 286:
                            return Status.InvalidFeeCollectorAccountId;
                        case 287:
                            return Status.AliasIsImmutable;
                        case 288:
                            return Status.SpenderAccountSameAsOwner;
                        case 289:
                            return Status.AmountExceedsTokenMaxSupply;
                        case 290:
                            return Status.NegativeAllowanceAmount;
                        case 291:
                            return Status.CannotApproveForAllFungibleCommon;
                        case 292:
                            return Status.SpenderDoesNotHaveAllowance;
                        case 293:
                            return Status.AmountExceedsAllowance;
                        case 294:
                            return Status.MaxAllowancesExceeded;
                        case 295:
                            return Status.EmptyAllowances;
                        case 296:
                            return Status.SpenderAccountRepeatedInAllowances;
                        case 297:
                            return Status.RepeatedSerialNumsInNftAllowances;
                        case 298:
                            return Status.FungibleTokenInNftAllowances;
                        case 299:
                            return Status.NftInFungibleTokenAllowances;
                        case 300:
                            return Status.InvalidAllowanceOwnerId;
                        case 301:
                            return Status.InvalidAllowanceSpenderId;
                        case 302:
                            return Status.RepeatedAllowancesToDelete;
                        case 303:
                            return Status.InvalidDelegatingSpender;
                        case 304:
                            return Status.DelegatingSpenderCannotGrantApproveForAll;
                        case 305:
                            return Status.DelegatingSpenderDoesNotHaveApproveForAll;
                        case 306:
                            return Status.ScheduleExpirationTimeTooFarInFuture;
                        case 307:
                            return Status.ScheduleExpirationTimeMustBeHigherThanConsensusTime;
                        case 308:
                            return Status.ScheduleFutureThrottleExceeded;
                        case 309:
                            return Status.ScheduleFutureGasLimitExceeded;
                        case 310:
                            return Status.InvalidEthereumTransaction;
                        case 311:
                            return Status.WrongChainId;
                        case 312:
                            return Status.WrongNonce;
                        case 313:
                            return Status.AccessListUnsupported;
                        case 314:
                            return Status.SchedulePendingExpiration;
                        case 315:
                            return Status.ContractIsTokenTreasury;
                        case 316:
                            return Status.ContractHasNonZeroTokenBalances;
                        case 317:
                            return Status.ContractExpiredAndPendingRemoval;
                        case 318:
                            return Status.ContractHasNoAutoRenewAccount;
                        case 319:
                            return Status.PermanentRemovalRequiresSystemInitiation;
                        case 320:
                            return Status.ProxyAccountIdFieldIsDeprecated;
                        case 321:
                            return Status.SelfStakingIsNotAllowed;
                        case 322:
                            return Status.InvalidStakingId;
                        case 323:
                            return Status.StakingNotEnabled;
                        case 324:
                            return Status.InvalidPrngRange;
                        case 325:
                            return Status.MaxEntitiesInPriceRegimeHaveBeenCreated;
                        case 326:
                            return Status.InvalidFullPrefixSignatureForPrecompile;
                        case 327:
                            return Status.InsufficientBalancesForStorageRent;
                        case 328:
                            return Status.MaxChildRecordsExceeded;
                        case 329:
                            return Status.InsufficientBalancesForRenewalFees;
                        default:
                            throw new Error("(BUG) Status.fromCode() does not handle code: " + e)
                    }
                }
                valueOf() {
                    return this._code
                }
            }
            Status.Ok = new Status(0), Status.InvalidTransaction = new Status(1), Status.PayerAccountNotFound = new Status(2), Status.InvalidNodeAccount = new Status(3), Status.TransactionExpired = new Status(4), Status.InvalidTransactionStart = new Status(5), Status.InvalidTransactionDuration = new Status(6), Status.InvalidSignature = new Status(7), Status.MemoTooLong = new Status(8), Status.InsufficientTxFee = new Status(9), Status.InsufficientPayerBalance = new Status(10), Status.DuplicateTransaction = new Status(11), Status.Busy = new Status(12), Status.NotSupported = new Status(13), Status.InvalidFileId = new Status(14), Status.InvalidAccountId = new Status(15), Status.InvalidContractId = new Status(16), Status.InvalidTransactionId = new Status(17), Status.ReceiptNotFound = new Status(18), Status.RecordNotFound = new Status(19), Status.InvalidSolidityId = new Status(20), Status.Unknown = new Status(21), Status.Success = new Status(22), Status.FailInvalid = new Status(23), Status.FailFee = new Status(24), Status.FailBalance = new Status(25), Status.KeyRequired = new Status(26), Status.BadEncoding = new Status(27), Status.InsufficientAccountBalance = new Status(28), Status.InvalidSolidityAddress = new Status(29), Status.InsufficientGas = new Status(30), Status.ContractSizeLimitExceeded = new Status(31), Status.LocalCallModificationException = new Status(32), Status.ContractRevertExecuted = new Status(33), Status.ContractExecutionException = new Status(34), Status.InvalidReceivingNodeAccount = new Status(35), Status.MissingQueryHeader = new Status(36), Status.AccountUpdateFailed = new Status(37), Status.InvalidKeyEncoding = new Status(38), Status.NullSolidityAddress = new Status(39), Status.ContractUpdateFailed = new Status(40), Status.InvalidQueryHeader = new Status(41), Status.InvalidFeeSubmitted = new Status(42), Status.InvalidPayerSignature = new Status(43), Status.KeyNotProvided = new Status(44), Status.InvalidExpirationTime = new Status(45), Status.NoWaclKey = new Status(46), Status.FileContentEmpty = new Status(47), Status.InvalidAccountAmounts = new Status(48), Status.EmptyTransactionBody = new Status(49), Status.InvalidTransactionBody = new Status(50), Status.InvalidSignatureTypeMismatchingKey = new Status(51), Status.InvalidSignatureCountMismatchingKey = new Status(52), Status.EmptyLiveHashBody = new Status(53), Status.EmptyLiveHash = new Status(54), Status.EmptyLiveHashKeys = new Status(55), Status.InvalidLiveHashSize = new Status(56), Status.EmptyQueryBody = new Status(57), Status.EmptyLiveHashQuery = new Status(58), Status.LiveHashNotFound = new Status(59), Status.AccountIdDoesNotExist = new Status(60), Status.LiveHashAlreadyExists = new Status(61), Status.InvalidFileWacl = new Status(62), Status.SerializationFailed = new Status(63), Status.TransactionOversize = new Status(64), Status.TransactionTooManyLayers = new Status(65), Status.ContractDeleted = new Status(66), Status.PlatformNotActive = new Status(67), Status.KeyPrefixMismatch = new Status(68), Status.PlatformTransactionNotCreated = new Status(69), Status.InvalidRenewalPeriod = new Status(70), Status.InvalidPayerAccountId = new Status(71), Status.AccountDeleted = new Status(72), Status.FileDeleted = new Status(73), Status.AccountRepeatedInAccountAmounts = new Status(74), Status.SettingNegativeAccountBalance = new Status(75), Status.ObtainerRequired = new Status(76), Status.ObtainerSameContractId = new Status(77), Status.ObtainerDoesNotExist = new Status(78), Status.ModifyingImmutableContract = new Status(79), Status.FileSystemException = new Status(80), Status.AutorenewDurationNotInRange = new Status(81), Status.ErrorDecodingBytestring = new Status(82), Status.ContractFileEmpty = new Status(83), Status.ContractBytecodeEmpty = new Status(84), Status.InvalidInitialBalance = new Status(85), Status.InvalidReceiveRecordThreshold = new Status(86), Status.InvalidSendRecordThreshold = new Status(87), Status.AccountIsNotGenesisAccount = new Status(88), Status.PayerAccountUnauthorized = new Status(89), Status.InvalidFreezeTransactionBody = new Status(90), Status.FreezeTransactionBodyNotFound = new Status(91), Status.TransferListSizeLimitExceeded = new Status(92), Status.ResultSizeLimitExceeded = new Status(93), Status.NotSpecialAccount = new Status(94), Status.ContractNegativeGas = new Status(95), Status.ContractNegativeValue = new Status(96), Status.InvalidFeeFile = new Status(97), Status.InvalidExchangeRateFile = new Status(98), Status.InsufficientLocalCallGas = new Status(99), Status.EntityNotAllowedToDelete = new Status(100), Status.AuthorizationFailed = new Status(101), Status.FileUploadedProtoInvalid = new Status(102), Status.FileUploadedProtoNotSavedToDisk = new Status(103), Status.FeeScheduleFilePartUploaded = new Status(104), Status.ExchangeRateChangeLimitExceeded = new Status(105), Status.MaxContractStorageExceeded = new Status(106), Status.TransferAccountSameAsDeleteAccount = new Status(107), Status.TotalLedgerBalanceInvalid = new Status(108), Status.ExpirationReductionNotAllowed = new Status(110), Status.MaxGasLimitExceeded = new Status(111), Status.MaxFileSizeExceeded = new Status(112), Status.ReceiverSigRequired = new Status(113), Status.InvalidTopicId = new Status(150), Status.InvalidAdminKey = new Status(155), Status.InvalidSubmitKey = new Status(156), Status.Unauthorized = new Status(157), Status.InvalidTopicMessage = new Status(158), Status.InvalidAutorenewAccount = new Status(159), Status.AutorenewAccountNotAllowed = new Status(160), Status.TopicExpired = new Status(162), Status.InvalidChunkNumber = new Status(163), Status.InvalidChunkTransactionId = new Status(164), Status.AccountFrozenForToken = new Status(165), Status.TokensPerAccountLimitExceeded = new Status(166), Status.InvalidTokenId = new Status(167), Status.InvalidTokenDecimals = new Status(168), Status.InvalidTokenInitialSupply = new Status(169), Status.InvalidTreasuryAccountForToken = new Status(170), Status.InvalidTokenSymbol = new Status(171), Status.TokenHasNoFreezeKey = new Status(172), Status.TransfersNotZeroSumForToken = new Status(173), Status.MissingTokenSymbol = new Status(174), Status.TokenSymbolTooLong = new Status(175), Status.AccountKycNotGrantedForToken = new Status(176), Status.TokenHasNoKycKey = new Status(177), Status.InsufficientTokenBalance = new Status(178), Status.TokenWasDeleted = new Status(179), Status.TokenHasNoSupplyKey = new Status(180), Status.TokenHasNoWipeKey = new Status(181), Status.InvalidTokenMintAmount = new Status(182), Status.InvalidTokenBurnAmount = new Status(183), Status.TokenNotAssociatedToAccount = new Status(184), Status.CannotWipeTokenTreasuryAccount = new Status(185), Status.InvalidKycKey = new Status(186), Status.InvalidWipeKey = new Status(187), Status.InvalidFreezeKey = new Status(188), Status.InvalidSupplyKey = new Status(189), Status.MissingTokenName = new Status(190), Status.TokenNameTooLong = new Status(191), Status.InvalidWipingAmount = new Status(192), Status.TokenIsImmutable = new Status(193), Status.TokenAlreadyAssociatedToAccount = new Status(194), Status.TransactionRequiresZeroTokenBalances = new Status(195), Status.AccountIsTreasury = new Status(196), Status.TokenIdRepeatedInTokenList = new Status(197), Status.TokenTransferListSizeLimitExceeded = new Status(198), Status.EmptyTokenTransferBody = new Status(199), Status.EmptyTokenTransferAccountAmounts = new Status(200), Status.InvalidScheduleId = new Status(201), Status.ScheduleIsImmutable = new Status(202), Status.InvalidSchedulePayerId = new Status(203), Status.InvalidScheduleAccountId = new Status(204), Status.NoNewValidSignatures = new Status(205), Status.UnresolvableRequiredSigners = new Status(206), Status.ScheduledTransactionNotInWhitelist = new Status(207), Status.SomeSignaturesWereInvalid = new Status(208), Status.TransactionIdFieldNotAllowed = new Status(209), Status.IdenticalScheduleAlreadyCreated = new Status(210), Status.InvalidZeroByteInString = new Status(211), Status.ScheduleAlreadyDeleted = new Status(212), Status.ScheduleAlreadyExecuted = new Status(213), Status.MessageSizeTooLarge = new Status(214), Status.OperationRepeatedInBucketGroups = new Status(215), Status.BucketCapacityOverflow = new Status(216), Status.NodeCapacityNotSufficientForOperation = new Status(217), Status.BucketHasNoThrottleGroups = new Status(218), Status.ThrottleGroupHasZeroOpsPerSec = new Status(219), Status.SuccessButMissingExpectedOperation = new Status(220), Status.UnparseableThrottleDefinitions = new Status(221), Status.InvalidThrottleDefinitions = new Status(222), Status.AccountExpiredAndPendingRemoval = new Status(223), Status.InvalidTokenMaxSupply = new Status(224), Status.InvalidTokenNftSerialNumber = new Status(225), Status.InvalidNftId = new Status(226), Status.MetadataTooLong = new Status(227), Status.BatchSizeLimitExceeded = new Status(228), Status.InvalidQueryRange = new Status(229), Status.FractionDividesByZero = new Status(230), Status.InsufficientPayerBalanceForCustomFee = new Status(231), Status.CustomFeesListTooLong = new Status(232), Status.InvalidCustomFeeCollector = new Status(233), Status.InvalidTokenIdInCustomFees = new Status(234), Status.TokenNotAssociatedToFeeCollector = new Status(235), Status.TokenMaxSupplyReached = new Status(236), Status.SenderDoesNotOwnNftSerialNo = new Status(237), Status.CustomFeeNotFullySpecified = new Status(238), Status.CustomFeeMustBePositive = new Status(239), Status.TokenHasNoFeeScheduleKey = new Status(240), Status.CustomFeeOutsideNumericRange = new Status(241), Status.RoyaltyFractionCannotExceedOne = new Status(242), Status.FractionalFeeMaxAmountLessThanMinAmount = new Status(243), Status.CustomScheduleAlreadyHasNoFees = new Status(244), Status.CustomFeeDenominationMustBeFungibleCommon = new Status(245), Status.CustomFractionalFeeOnlyAllowedForFungibleCommon = new Status(246), Status.InvalidCustomFeeScheduleKey = new Status(247), Status.InvalidTokenMintMetadata = new Status(248), Status.InvalidTokenBurnMetadata = new Status(249), Status.CurrentTreasuryStillOwnsNfts = new Status(250), Status.AccountStillOwnsNfts = new Status(251), Status.TreasuryMustOwnBurnedNft = new Status(252), Status.AccountDoesNotOwnWipedNft = new Status(253), Status.AccountAmountTransfersOnlyAllowedForFungibleCommon = new Status(254), Status.MaxNftsInPriceRegimeHaveBeenMinted = new Status(255), Status.PayerAccountDeleted = new Status(256), Status.CustomFeeChargingExceededMaxRecursionDepth = new Status(257), Status.CustomFeeChargingExceededMaxAccountAmounts = new Status(258), Status.InsufficientSenderAccountBalanceForCustomFee = new Status(259), Status.SerialNumberLimitReached = new Status(260), Status.CustomRoyaltyFeeOnlyAllowedForNonFungibleUnique = new Status(261), Status.NoRemainingAutomaticAssociations = new Status(262), Status.ExistingAutomaticAssociationsExceedGivenLimit = new Status(263), Status.RequestedNumAutomaticAssociationsExceedsAssociationLimit = new Status(264), Status.TokenIsPaused = new Status(265), Status.TokenHasNoPauseKey = new Status(266), Status.InvalidPauseKey = new Status(267), Status.FreezeUpdateFileDoesNotExist = new Status(268), Status.FreezeUpdateFileHashDoesNotMatch = new Status(269), Status.NoUpgradeHasBeenPrepared = new Status(270), Status.NoFreezeIsScheduled = new Status(271), Status.UpdateFileHashChangedSincePrepareUpgrade = new Status(272), Status.FreezeStartTimeMustBeFuture = new Status(273), Status.PreparedUpdateFileIsImmutable = new Status(274), Status.FreezeAlreadyScheduled = new Status(275), Status.FreezeUpgradeInProgress = new Status(276), Status.UpdateFileIdDoesNotMatchPrepared = new Status(277), Status.UpdateFileHashDoesNotMatchPrepared = new Status(278), Status.ConsensusGasExhausted = new Status(279), Status.RevertedSuccess = new Status(280), Status.MaxStorageInPriceRegimeHasBeenUsed = new Status(281), Status.InvalidAliasKey = new Status(282), Status.UnexpectedTokenDecimals = new Status(283), Status.InvalidProxyAccountId = new Status(284), Status.InvalidTransferAccountId = new Status(285), Status.InvalidFeeCollectorAccountId = new Status(286), Status.AliasIsImmutable = new Status(287), Status.SpenderAccountSameAsOwner = new Status(288), Status.AmountExceedsTokenMaxSupply = new Status(289), Status.NegativeAllowanceAmount = new Status(290), Status.CannotApproveForAllFungibleCommon = new Status(291), Status.SpenderDoesNotHaveAllowance = new Status(292), Status.AmountExceedsAllowance = new Status(293), Status.MaxAllowancesExceeded = new Status(294), Status.EmptyAllowances = new Status(295), Status.SpenderAccountRepeatedInAllowances = new Status(296), Status.RepeatedSerialNumsInNftAllowances = new Status(297), Status.FungibleTokenInNftAllowances = new Status(298), Status.NftInFungibleTokenAllowances = new Status(299), Status.InvalidAllowanceOwnerId = new Status(300), Status.InvalidAllowanceSpenderId = new Status(301), Status.RepeatedAllowancesToDelete = new Status(302), Status.InvalidDelegatingSpender = new Status(303), Status.DelegatingSpenderCannotGrantApproveForAll = new Status(304), Status.DelegatingSpenderDoesNotHaveApproveForAll = new Status(305), Status.ScheduleExpirationTimeTooFarInFuture = new Status(306), Status.ScheduleExpirationTimeMustBeHigherThanConsensusTime = new Status(307), Status.ScheduleFutureThrottleExceeded = new Status(308), Status.ScheduleFutureGasLimitExceeded = new Status(309), Status.InvalidEthereumTransaction = new Status(310), Status.WrongChainId = new Status(311), Status.WrongNonce = new Status(312), Status.AccessListUnsupported = new Status(313), Status.SchedulePendingExpiration = new Status(314), Status.ContractIsTokenTreasury = new Status(315), Status.ContractHasNonZeroTokenBalances = new Status(316), Status.ContractExpiredAndPendingRemoval = new Status(317), Status.ContractHasNoAutoRenewAccount = new Status(318), Status.PermanentRemovalRequiresSystemInitiation = new Status(319), Status.ProxyAccountIdFieldIsDeprecated = new Status(320), Status.SelfStakingIsNotAllowed = new Status(321), Status.InvalidStakingId = new Status(322), Status.StakingNotEnabled = new Status(323), Status.InvalidPrngRange = new Status(324), Status.MaxEntitiesInPriceRegimeHaveBeenCreated = new Status(325), Status.InvalidFullPrefixSignatureForPrecompile = new Status(326), Status.InsufficientBalancesForStorageRent = new Status(327), Status.MaxChildRecordsExceeded = new Status(328), Status.InsufficientBalancesForRenewalFees = new Status(329)
        },
        438: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return StatusError
            }));
            class StatusError extends Error {
                constructor(e, t) {
                    super(t), this.name = "StatusError", this.status = e.status, this.transactionId = e.transactionId, this.message = t, void 0 !== Error.captureStackTrace && Error.captureStackTrace(this, StatusError)
                }
                toJSON() {
                    return {
                        name: this.name,
                        status: this.status.toString(),
                        transactionId: this.transactionId.toString(),
                        message: this.message
                    }
                }
                toString() {
                    return JSON.stringify(this.toJSON())
                }
                valueOf() {
                    return this.toJSON()
                }
            }
        },
        695: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Mnemonic
            }));
            var a = n(65),
                s = n(44);
            class Mnemonic {
                constructor(e) {
                    this._mnemonic = e
                }
                static async generate() {
                    return new Mnemonic(await a.e._generate(24))
                }
                static async generate12() {
                    return new Mnemonic(await a.e._generate(12))
                }
                static async fromWords(e) {
                    return new Mnemonic(await a.e.fromWords(e))
                }
                async toPrivateKey(e = "") {
                    return s.a.privateKeyConstructor(await this._mnemonic.toPrivateKey(e))
                }
                async toEd25519PrivateKey(e = "", t) {
                    return s.a.privateKeyConstructor(await this._mnemonic.toEd25519PrivateKey(e, t))
                }
                async toEcdsaPrivateKey(e = "", t) {
                    return s.a.privateKeyConstructor(await this._mnemonic.toEcdsaPrivateKey(e, t))
                }
                static async fromString(e) {
                    return new Mnemonic(await a.e.fromString(e))
                }
                async toLegacyPrivateKey() {
                    return s.a.privateKeyConstructor(await this._mnemonic.toLegacyPrivateKey())
                }
                toString() {
                    return this._mnemonic.toString()
                }
            }
        },
        698: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return MaxQueryPaymentExceeded
            }));
            class MaxQueryPaymentExceeded extends Error {
                constructor(e, t) {
                    super(), this.message = `query cost of ${e.toString()} HBAR exceeds max set on client: ${t.toString()} HBAR`, this.name = "MaxQueryPaymentExceededError", this.queryCost = e, this.maxQueryPayment = t
                }
            }
        },
        709: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return TransactionFeeSchedule
            }));
            var a = n(11),
                s = n(710),
                r = n(535);
            class TransactionFeeSchedule {
                constructor(e = {}) {
                    this.hederaFunctionality = e.hederaFunctionality, this.feeData = e.feeData, this.fees = e.fees
                }
                static fromBytes(e) {
                    return TransactionFeeSchedule._fromProtobuf(a.proto.TransactionFeeSchedule.decode(e))
                }
                static _fromProtobuf(e) {
                    return new TransactionFeeSchedule({
                        hederaFunctionality: null != e.hederaFunctionality ? s.a._fromCode(e.hederaFunctionality) : void 0,
                        feeData: null != e.feeData ? r.a._fromProtobuf(e.feeData) : void 0,
                        fees: null != e.fees ? e.fees.map(e => r.a._fromProtobuf(e)) : void 0
                    })
                }
                _toProtobuf() {
                    return {
                        hederaFunctionality: null != this.hederaFunctionality ? this.hederaFunctionality.valueOf() : void 0,
                        feeData: null != this.feeData ? this.feeData._toProtobuf() : void 0,
                        fees: null != this.fees ? this.fees.map(e => e._toProtobuf()) : void 0
                    }
                }
                toBytes() {
                    return a.proto.TransactionFeeSchedule.encode(this._toProtobuf()).finish()
                }
            }
        },
        710: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return RequestType
            }));
            class RequestType {
                constructor(e) {
                    this._code = e, Object.freeze(this)
                }
                toString() {
                    switch (this) {
                        case RequestType.None:
                            return "NONE";
                        case RequestType.CryptoTransfer:
                            return "CryptoTransfer";
                        case RequestType.CryptoUpdate:
                            return "CryptoUpdate";
                        case RequestType.CryptoDelete:
                            return "CryptoDelete";
                        case RequestType.CryptoAddLiveHash:
                            return "CryptoAddLiveHash";
                        case RequestType.CryptoDeleteLiveHash:
                            return "CryptoDeleteLiveHash";
                        case RequestType.ContractCall:
                            return "ContractCall";
                        case RequestType.ContractCreate:
                            return "ContractCreate";
                        case RequestType.ContractUpdate:
                            return "ContractUpdate";
                        case RequestType.FileCreate:
                            return "FileCreate";
                        case RequestType.FileAppend:
                            return "FileAppend";
                        case RequestType.FileUpdate:
                            return "FileUpdate";
                        case RequestType.FileDelete:
                            return "FileDelete";
                        case RequestType.CryptoGetAccountBalance:
                            return "CryptoGetAccountBalance";
                        case RequestType.CryptoGetAccountRecords:
                            return "CryptoGetAccountRecords";
                        case RequestType.CryptoGetInfo:
                            return "CryptoGetInfo";
                        case RequestType.ContractCallLocal:
                            return "ContractCallLocal";
                        case RequestType.ContractGetInfo:
                            return "ContractGetInfo";
                        case RequestType.ContractGetBytecode:
                            return "ContractGetBytecode";
                        case RequestType.GetBySolidityID:
                            return "GetBySolidityID";
                        case RequestType.GetByKey:
                            return "GetByKey";
                        case RequestType.CryptoGetLiveHash:
                            return "CryptoGetLiveHash";
                        case RequestType.CryptoGetStakers:
                            return "CryptoGetStakers";
                        case RequestType.FileGetContents:
                            return "FileGetContents";
                        case RequestType.FileGetInfo:
                            return "FileGetInfo";
                        case RequestType.TransactionGetRecord:
                            return "TransactionGetRecord";
                        case RequestType.ContractGetRecords:
                            return "ContractGetRecords";
                        case RequestType.CryptoCreate:
                            return "CryptoCreate";
                        case RequestType.SystemDelete:
                            return "SystemDelete";
                        case RequestType.SystemUndelete:
                            return "SystemUndelete";
                        case RequestType.ContractDelete:
                            return "ContractDelete";
                        case RequestType.Freeze:
                            return "Freeze";
                        case RequestType.CreateTransactionRecord:
                            return "CreateTransactionRecord";
                        case RequestType.CryptoAccountAutoRenew:
                            return "CryptoAccountAutoRenew";
                        case RequestType.ContractAutoRenew:
                            return "ContractAutoRenew";
                        case RequestType.GetVersionInfo:
                            return "GetVersionInfo";
                        case RequestType.TransactionGetReceipt:
                            return "TransactionGetReceipt";
                        case RequestType.ConsensusCreateTopic:
                            return "ConsensusCreateTopic";
                        case RequestType.ConsensusUpdateTopic:
                            return "ConsensusUpdateTopic";
                        case RequestType.ConsensusDeleteTopic:
                            return "ConsensusDeleteTopic";
                        case RequestType.ConsensusGetTopicInfo:
                            return "ConsensusGetTopicInfo";
                        case RequestType.ConsensusSubmitMessage:
                            return "ConsensusSubmitMessage";
                        case RequestType.UncheckedSubmit:
                            return "UncheckedSubmit";
                        case RequestType.TokenCreate:
                            return "TokenCreate";
                        case RequestType.TokenGetInfo:
                            return "TokenGetInfo";
                        case RequestType.TokenFreezeAccount:
                            return "TokenFreezeAccount";
                        case RequestType.TokenUnfreezeAccount:
                            return "TokenUnfreezeAccount";
                        case RequestType.TokenGrantKycToAccount:
                            return "TokenGrantKycToAccount";
                        case RequestType.TokenRevokeKycFromAccount:
                            return "TokenRevokeKycFromAccount";
                        case RequestType.TokenDelete:
                            return "TokenDelete";
                        case RequestType.TokenUpdate:
                            return "TokenUpdate";
                        case RequestType.TokenMint:
                            return "TokenMint";
                        case RequestType.TokenBurn:
                            return "TokenBurn";
                        case RequestType.TokenAccountWipe:
                            return "TokenAccountWipe";
                        case RequestType.TokenAssociateToAccount:
                            return "TokenAssociateToAccount";
                        case RequestType.TokenDissociateFromAccount:
                            return "TokenDissociateFromAccount";
                        case RequestType.ScheduleCreate:
                            return "ScheduleCreate";
                        case RequestType.ScheduleDelete:
                            return "ScheduleDelete";
                        case RequestType.ScheduleSign:
                            return "ScheduleSign";
                        case RequestType.ScheduleGetInfo:
                            return "ScheduleGetInfo";
                        case RequestType.TokenGetAccountNftInfos:
                            return "TokenGetAccountNftInfos";
                        case RequestType.TokenGetNftInfo:
                            return "TokenGetNftInfo";
                        case RequestType.TokenGetNftInfos:
                            return "TokenGetNftInfos";
                        case RequestType.TokenFeeScheduleUpdate:
                            return "TokenFeeScheduleUpdate";
                        case RequestType.NetworkGetExecutionTime:
                            return "NetworkGetExecutionTime";
                        case RequestType.TokenPause:
                            return "TokenPause";
                        case RequestType.TokenUnpause:
                            return "TokenUnpause";
                        case RequestType.CryptoApproveAllowance:
                            return "CryptoApproveAllowance";
                        case RequestType.CryptoDeleteAllowance:
                            return "CryptoDeleteAllowance";
                        case RequestType.GetAccountDetails:
                            return "GetAccountDetails";
                        case RequestType.EthereumTransaction:
                            return "EthereumTransaction";
                        case RequestType.NodeStakeUpdate:
                            return "NodeStakeUpdate";
                        case RequestType.Prng:
                            return "UtilPrng";
                        default:
                            return `UNKNOWN (${this._code})`
                    }
                }
                static _fromCode(e) {
                    switch (e) {
                        case 0:
                            return RequestType.None;
                        case 1:
                            return RequestType.CryptoTransfer;
                        case 2:
                            return RequestType.CryptoUpdate;
                        case 3:
                            return RequestType.CryptoDelete;
                        case 4:
                            return RequestType.CryptoAddLiveHash;
                        case 5:
                            return RequestType.CryptoDeleteLiveHash;
                        case 6:
                            return RequestType.ContractCall;
                        case 7:
                            return RequestType.ContractCreate;
                        case 8:
                            return RequestType.ContractUpdate;
                        case 9:
                            return RequestType.FileCreate;
                        case 10:
                            return RequestType.FileAppend;
                        case 11:
                            return RequestType.FileUpdate;
                        case 12:
                            return RequestType.FileDelete;
                        case 13:
                            return RequestType.CryptoGetAccountBalance;
                        case 14:
                            return RequestType.CryptoGetAccountRecords;
                        case 15:
                            return RequestType.CryptoGetInfo;
                        case 16:
                            return RequestType.ContractCallLocal;
                        case 17:
                            return RequestType.ContractGetInfo;
                        case 18:
                            return RequestType.ContractGetBytecode;
                        case 19:
                            return RequestType.GetBySolidityID;
                        case 20:
                            return RequestType.GetByKey;
                        case 21:
                            return RequestType.CryptoGetLiveHash;
                        case 22:
                            return RequestType.CryptoGetStakers;
                        case 23:
                            return RequestType.FileGetContents;
                        case 24:
                            return RequestType.FileGetInfo;
                        case 25:
                            return RequestType.TransactionGetRecord;
                        case 26:
                            return RequestType.ContractGetRecords;
                        case 27:
                            return RequestType.CryptoCreate;
                        case 28:
                            return RequestType.SystemDelete;
                        case 29:
                            return RequestType.SystemUndelete;
                        case 30:
                            return RequestType.ContractDelete;
                        case 31:
                            return RequestType.Freeze;
                        case 32:
                            return RequestType.CreateTransactionRecord;
                        case 33:
                            return RequestType.CryptoAccountAutoRenew;
                        case 34:
                            return RequestType.ContractAutoRenew;
                        case 35:
                            return RequestType.GetVersionInfo;
                        case 36:
                            return RequestType.TransactionGetReceipt;
                        case 50:
                            return RequestType.ConsensusCreateTopic;
                        case 51:
                            return RequestType.ConsensusUpdateTopic;
                        case 52:
                            return RequestType.ConsensusDeleteTopic;
                        case 53:
                            return RequestType.ConsensusGetTopicInfo;
                        case 54:
                            return RequestType.ConsensusSubmitMessage;
                        case 55:
                            return RequestType.UncheckedSubmit;
                        case 56:
                            return RequestType.TokenCreate;
                        case 58:
                            return RequestType.TokenGetInfo;
                        case 59:
                            return RequestType.TokenFreezeAccount;
                        case 60:
                            return RequestType.TokenUnfreezeAccount;
                        case 61:
                            return RequestType.TokenGrantKycToAccount;
                        case 62:
                            return RequestType.TokenRevokeKycFromAccount;
                        case 63:
                            return RequestType.TokenDelete;
                        case 64:
                            return RequestType.TokenUpdate;
                        case 65:
                            return RequestType.TokenMint;
                        case 66:
                            return RequestType.TokenBurn;
                        case 67:
                            return RequestType.TokenAccountWipe;
                        case 68:
                            return RequestType.TokenAssociateToAccount;
                        case 69:
                            return RequestType.TokenDissociateFromAccount;
                        case 70:
                            return RequestType.ScheduleCreate;
                        case 71:
                            return RequestType.ScheduleDelete;
                        case 72:
                            return RequestType.ScheduleSign;
                        case 73:
                            return RequestType.ScheduleGetInfo;
                        case 74:
                            return RequestType.TokenGetAccountNftInfos;
                        case 75:
                            return RequestType.TokenGetNftInfo;
                        case 76:
                            return RequestType.TokenGetNftInfos;
                        case 77:
                            return RequestType.TokenFeeScheduleUpdate;
                        case 78:
                            return RequestType.NetworkGetExecutionTime;
                        case 79:
                            return RequestType.TokenPause;
                        case 80:
                            return RequestType.TokenUnpause;
                        case 81:
                            return RequestType.CryptoApproveAllowance;
                        case 82:
                            return RequestType.CryptoDeleteAllowance;
                        case 83:
                            return RequestType.GetAccountDetails;
                        case 84:
                            return RequestType.EthereumTransaction;
                        case 85:
                            return RequestType.NodeStakeUpdate;
                        case 86:
                            return RequestType.Prng
                    }
                    throw new Error("(BUG) RequestType.fromCode() does not handle code: " + e)
                }
                valueOf() {
                    return this._code
                }
            }
            RequestType.None = new RequestType(0), RequestType.CryptoTransfer = new RequestType(1), RequestType.CryptoUpdate = new RequestType(2), RequestType.CryptoDelete = new RequestType(3), RequestType.CryptoAddLiveHash = new RequestType(4), RequestType.CryptoDeleteLiveHash = new RequestType(5), RequestType.ContractCall = new RequestType(6), RequestType.ContractCreate = new RequestType(7), RequestType.ContractUpdate = new RequestType(8), RequestType.FileCreate = new RequestType(9), RequestType.FileAppend = new RequestType(10), RequestType.FileUpdate = new RequestType(11), RequestType.FileDelete = new RequestType(12), RequestType.CryptoGetAccountBalance = new RequestType(13), RequestType.CryptoGetAccountRecords = new RequestType(14), RequestType.CryptoGetInfo = new RequestType(15), RequestType.ContractCallLocal = new RequestType(16), RequestType.ContractGetInfo = new RequestType(17), RequestType.ContractGetBytecode = new RequestType(18), RequestType.GetBySolidityID = new RequestType(19), RequestType.GetByKey = new RequestType(20), RequestType.CryptoGetLiveHash = new RequestType(21), RequestType.CryptoGetStakers = new RequestType(22), RequestType.FileGetContents = new RequestType(23), RequestType.FileGetInfo = new RequestType(24), RequestType.TransactionGetRecord = new RequestType(25), RequestType.ContractGetRecords = new RequestType(26), RequestType.CryptoCreate = new RequestType(27), RequestType.SystemDelete = new RequestType(28), RequestType.SystemUndelete = new RequestType(29), RequestType.ContractDelete = new RequestType(30), RequestType.Freeze = new RequestType(31), RequestType.CreateTransactionRecord = new RequestType(32), RequestType.CryptoAccountAutoRenew = new RequestType(33), RequestType.ContractAutoRenew = new RequestType(34), RequestType.GetVersionInfo = new RequestType(35), RequestType.TransactionGetReceipt = new RequestType(36), RequestType.ConsensusCreateTopic = new RequestType(50), RequestType.ConsensusUpdateTopic = new RequestType(51), RequestType.ConsensusDeleteTopic = new RequestType(52), RequestType.ConsensusGetTopicInfo = new RequestType(53), RequestType.ConsensusSubmitMessage = new RequestType(54), RequestType.UncheckedSubmit = new RequestType(55), RequestType.TokenCreate = new RequestType(56), RequestType.TokenGetInfo = new RequestType(58), RequestType.TokenFreezeAccount = new RequestType(59), RequestType.TokenUnfreezeAccount = new RequestType(60), RequestType.TokenGrantKycToAccount = new RequestType(61), RequestType.TokenRevokeKycFromAccount = new RequestType(62), RequestType.TokenDelete = new RequestType(63), RequestType.TokenUpdate = new RequestType(64), RequestType.TokenMint = new RequestType(65), RequestType.TokenBurn = new RequestType(66), RequestType.TokenAccountWipe = new RequestType(67), RequestType.TokenAssociateToAccount = new RequestType(68), RequestType.TokenDissociateFromAccount = new RequestType(69), RequestType.ScheduleCreate = new RequestType(70), RequestType.ScheduleDelete = new RequestType(71), RequestType.ScheduleSign = new RequestType(72), RequestType.ScheduleGetInfo = new RequestType(73), RequestType.TokenGetAccountNftInfos = new RequestType(74), RequestType.TokenGetNftInfo = new RequestType(75), RequestType.TokenGetNftInfos = new RequestType(76), RequestType.TokenFeeScheduleUpdate = new RequestType(77), RequestType.NetworkGetExecutionTime = new RequestType(78), RequestType.TokenPause = new RequestType(79), RequestType.TokenUnpause = new RequestType(80), RequestType.CryptoApproveAllowance = new RequestType(81), RequestType.CryptoDeleteAllowance = new RequestType(82), RequestType.GetAccountDetails = new RequestType(83), RequestType.EthereumTransaction = new RequestType(84), RequestType.NodeStakeUpdate = new RequestType(85), RequestType.Prng = new RequestType(86)
        },
        713: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return SignerSignature
            }));
            class SignerSignature {
                constructor(e) {
                    this.publicKey = e.publicKey, this.signature = e.signature, this.accountId = e.accountId
                }
            }
        },
        920: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return StakingInfo
            }));
            var a = n(5),
                s = n(17),
                r = n(23),
                u = n(11);
            class StakingInfo {
                constructor(e) {
                    this.declineStakingReward = e.declineStakingReward, this.stakePeriodStart = e.stakePeriodStart, this.pendingReward = e.pendingReward, this.stakedToMe = e.stakedToMe, this.stakedAccountId = e.stakedAccountId, this.stakedNodeId = e.stakedNodeId, Object.freeze(this)
                }
                static _fromProtobuf(e) {
                    return new StakingInfo({
                        declineStakingReward: 1 == e.declineReward,
                        stakePeriodStart: null != e.stakePeriodStart ? r.a._fromProtobuf(e.stakePeriodStart) : null,
                        pendingReward: null != e.pendingReward ? s.a.fromTinybars(e.pendingReward) : null,
                        stakedToMe: null != e.stakedToMe ? s.a.fromTinybars(e.stakedToMe) : null,
                        stakedAccountId: null != e.stakedAccountId ? a.a._fromProtobuf(e.stakedAccountId) : null,
                        stakedNodeId: null != e.stakedNodeId ? e.stakedNodeId : null
                    })
                }
                _toProtobuf() {
                    return {
                        declineReward: this.declineStakingReward,
                        stakePeriodStart: null != this.stakePeriodStart ? this.stakePeriodStart._toProtobuf() : null,
                        pendingReward: null != this.pendingReward ? this.pendingReward.toTinybars() : null,
                        stakedToMe: null != this.stakedToMe ? this.stakedToMe.toTinybars() : null,
                        stakedAccountId: null != this.stakedAccountId ? this.stakedAccountId._toProtobuf() : null,
                        stakedNodeId: this.stakedNodeId
                    }
                }
                static fromBytes(e) {
                    return StakingInfo._fromProtobuf(u.proto.StakingInfo.decode(e))
                }
                toBytes() {
                    return u.proto.StakingInfo.encode(this._toProtobuf()).finish()
                }
                toString() {
                    return JSON.stringify(this.toJSON())
                }
                toJSON() {
                    return {
                        declineStakingReward: this.declineStakingReward,
                        stakePeriodStart: null != this.stakePeriodStart ? this.stakePeriodStart.toString() : null,
                        pendingReward: null != this.pendingReward ? this.pendingReward.toString() : null,
                        stakedToMe: null != this.stakedToMe ? this.stakedToMe.toString() : null,
                        stakedAccountId: null != this.stakedAccountId ? this.stakedAccountId.toString() : null,
                        stakedNodeId: null != this.stakedNodeId ? this.stakedNodeId.toString() : null
                    }
                }
            }
        },
        926: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return ManagedNode_ManagedNode
            }));
            const a = /^(\S+):(\d+)$/;
            class ManagedNodeAddress {
                constructor(e = {}) {
                    if (null != e.address) {
                        const t = a.exec(e.address);
                        if (null == t) throw new Error("failed to parse address: " + e.address);
                        this._address = t[1], this._port = null != t[2] ? parseInt(t[2]) : null
                    } else {
                        if (null == e.host || null == e.port) throw new Error("failed to create a managed node address: " + JSON.stringify(e));
                        this._address = e.host, this._port = e.port
                    }
                    Object.freeze(this)
                }
                static fromString(e) {
                    return new ManagedNodeAddress({
                        address: e
                    })
                }
                toInsecure() {
                    let e = this.port;
                    switch (this.port) {
                        case 50212:
                            e = 50211;
                            break;
                        case 443:
                            e = 5600
                    }
                    return new ManagedNodeAddress({
                        host: this.address,
                        port: e
                    })
                }
                toSecure() {
                    let e = this.port;
                    switch (this.port) {
                        case 50211:
                            e = 50212;
                            break;
                        case 5600:
                            e = 443
                    }
                    return new ManagedNodeAddress({
                        host: this.address,
                        port: e
                    })
                }
                get address() {
                    return this._address
                }
                get port() {
                    return this._port
                }
                isTransportSecurity() {
                    return 50212 == this._port || 443 == this._port
                }
                toString() {
                    return null == this.port ? this.address : `${this.address}:${this.port}`
                }
            }
            class ManagedNode_ManagedNode {
                constructor(e = {}) {
                    if (null != e.newNode) this._address = "string" == typeof e.newNode.address ? ManagedNodeAddress.fromString(e.newNode.address) : e.newNode.address, this._cert = void 0, this._channel = null, this._channelInitFunction = e.newNode.channelInitFunction, this._lastUsed = Date.now(), this._readmitTime = Date.now(), this._useCount = 0, this._badGrpcStatusCount = 0, this._minBackoff = 8e3, this._maxBackoff = 36e5, this._currentBackoff = this._minBackoff;
                    else {
                        if (null == e.cloneNode) throw new Error("failed to create ManagedNode: " + JSON.stringify(e));
                        this._address = e.cloneNode.address, this._cert = e.cloneNode.node._cert, this._channel = e.cloneNode.node._channel, this._channelInitFunction = e.cloneNode.node._channelInitFunction, this._currentBackoff = e.cloneNode.node._currentBackoff, this._lastUsed = e.cloneNode.node._lastUsed, this._readmitTime = e.cloneNode.node._readmitTime, this._useCount = e.cloneNode.node._useCount, this._badGrpcStatusCount = e.cloneNode.node._badGrpcStatusCount, this._minBackoff = e.cloneNode.node._minBackoff, this._maxBackoff = e.cloneNode.node._minBackoff
                    }
                }
                getKey() {
                    throw new Error("not implemented")
                }
                toInsecure() {
                    throw new Error("not implemented")
                }
                toSecure() {
                    throw new Error("not implemented")
                }
                setCert(e) {
                    return this
                }
                get address() {
                    return this._address
                }
                get attempts() {
                    return this._badGrpcStatusCount
                }
                get minBackoff() {
                    return this._minBackoff
                }
                setMinBackoff(e) {
                    return this._currentBackoff <= e && (this._currentBackoff = e), this._minBackoff = e, this
                }
                get maxBackoff() {
                    return this._maxBackoff
                }
                setMaxBackoff(e) {
                    return this._currentBackoff <= e && (this._currentBackoff = e), this._maxBackoff = e, this
                }
                getChannel() {
                    return this._useCount++, this.__lastUsed = Date.now(), null != this._channel || (this._channel = this._channelInitFunction(this.address.toString(), this._cert)), this._channel
                }
                isHealthy() {
                    return this._readmitTime <= Date.now()
                }
                increaseBackoff() {
                    this._currentBackoff = Math.min(2 * this._currentBackoff, this._maxBackoff), this._readmitTime = Date.now() + this._currentBackoff
                }
                decreaseBackoff() {
                    this._currentBackoff = Math.max(this._currentBackoff / 2, this._minBackoff)
                }
                getRemainingTime() {
                    return this._readmitTime - this._lastUsed
                }
                backoff() {
                    return new Promise(e => setTimeout(e, this.getRemainingTime()))
                }
                compare(e) {
                    let t = this.getRemainingTime() - e.getRemainingTime();
                    return 0 != t ? t : (t = this._currentBackoff - e._currentBackoff, 0 != t ? t : (t = this._badGrpcStatusCount - e._badGrpcStatusCount, 0 != t ? t : (t = this._useCount - e._useCount, 0 != t ? t : this._lastUsed - e._lastUsed)))
                }
                close() {
                    null != this._channel && this._channel.close(), this._channel = null
                }
            }
        },
        93: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return KeyList
            }));
            var a = n(25),
                s = n(44);
            class KeyList extends a.a {
                constructor(e, t) {
                    super(), null == e ? this._keys = [] : e instanceof a.a ? this._keys = [e] : this._keys = e, this._threshold = null == t ? null : t
                }
                static of (...e) {
                    return new KeyList(e, null)
                }
                static from(e, t, n) {
                    return new KeyList(null == t ? Array.from(e) : Array.from(e, t, n))
                }
                get threshold() {
                    return this._threshold
                }
                setThreshold(e) {
                    return this._threshold = e, this
                }
                push(...e) {
                    return this._keys.push(...e)
                }
                splice(e, t, ...n) {
                    return new KeyList(this._keys.splice(e, t, ...n), this.threshold)
                }
                slice(e, t) {
                    return new KeyList(this._keys.slice(e, t), this.threshold)
                } [Symbol.iterator]() {
                    return this._keys[Symbol.iterator]()
                }
                toArray() {
                    return this._keys.slice()
                }
                toString() {
                    return JSON.stringify({
                        threshold: this._threshold,
                        keys: this._keys.toString()
                    })
                }
                _toProtobufKey() {
                    const e = this._keys.map(e => e._toProtobufKey());
                    return null == this.threshold ? {
                        keyList: {
                            keys: e
                        }
                    } : {
                        thresholdKey: {
                            threshold: this.threshold,
                            keys: {
                                keys: e
                            }
                        }
                    }
                }
                static __fromProtobufKeyList(e) {
                    const t = (null != e.keys ? e.keys : []).map(e => a.a._fromProtobufKey(e));
                    return new KeyList(t)
                }
                static __fromProtobufThresoldKey(e) {
                    const t = KeyList.__fromProtobufKeyList(null != e.keys ? e.keys : {});
                    return t.setThreshold(null != e.threshold ? e.threshold : 0), t
                }
            }
            s.a.setKeyList(e => KeyList.__fromProtobufKeyList(e)), s.a.setThresholdKey(e => KeyList.__fromProtobufThresoldKey(e))
        },
        98: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return ObjectMap
            }));
            class ObjectMap {
                constructor(e) {
                    this._map = new Map, this.__map = new Map, this._fromString = e
                }
                get(e) {
                    const t = "string" == typeof e ? e : e.toString(),
                        n = this._map.get(t);
                    return null != n ? n : null
                }
                _set(e, t) {
                    const n = "string" == typeof e ? e : e.toString();
                    this._map.set(n, t), this.__map.set(e, t)
                }
                values() {
                    return this._map.values()
                }
                get size() {
                    return this._map.size
                }
                keys() {
                    return this.__map.keys()
                } [Symbol.iterator]() {
                    return this.__map[Symbol.iterator]()
                }
                toString() {
                    const e = {};
                    for (const [t, n] of this._map) e[t] = n;
                    return JSON.stringify(e)
                }
            }
        },
        99: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return LedgerId
            }));
            var a = n(10);
            class LedgerId {
                constructor(e) {
                    this._ledgerId = e, Object.freeze(this)
                }
                static fromString(e) {
                    switch (e) {
                        case s[0]:
                        case "0":
                            return LedgerId.MAINNET;
                        case s[1]:
                        case "1":
                            return LedgerId.TESTNET;
                        case s[2]:
                        case "2":
                            return LedgerId.PREVIEWNET;
                        case s[3]:
                        case "3":
                            return LedgerId.LOCAL_NODE;
                        default: {
                            let t = a.a(e);
                            if (0 == t.length && 0 != e.length) throw new Error("Default reached for fromString");
                            return new LedgerId(t)
                        }
                    }
                }
                toString() {
                    if (1 != this._ledgerId.length) return a.b(this._ledgerId);
                    switch (this._ledgerId[0]) {
                        case 0:
                            return s[0];
                        case 1:
                            return s[1];
                        case 2:
                            return s[2];
                        case 3:
                            return s[3];
                        default:
                            return a.b(this._ledgerId)
                    }
                }
                static fromBytes(e) {
                    return new LedgerId(e)
                }
                toBytes() {
                    return this._ledgerId
                }
                isMainnet() {
                    return this.toString() == s[0]
                }
                isTestnet() {
                    return this.toString() == s[1]
                }
                isPreviewnet() {
                    return this.toString() == s[2]
                }
                isLocalNode() {
                    return this.toString() == s[3]
                }
            }
            const s = ["mainnet", "testnet", "previewnet", "local-node"];
            LedgerId.MAINNET = new LedgerId(new Uint8Array([0])), LedgerId.TESTNET = new LedgerId(new Uint8Array([1])), LedgerId.PREVIEWNET = new LedgerId(new Uint8Array([2])), LedgerId.LOCAL_NODE = new LedgerId(new Uint8Array([3]))
        }
    }
]);