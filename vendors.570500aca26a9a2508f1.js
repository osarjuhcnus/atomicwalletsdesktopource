(window.webpackJsonp = window.webpackJsonp || []).push([
    [157], {
        1043: function(t, e, o) {
            var r = o(28),
                n = r,
                a = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i);
            var s = o(64);
            n.object.extend(proto, s);
            var p = o(119);
            n.object.extend(proto, p), n.exportSymbol("proto.proto.ContractGetBytecodeQuery", null, a), n.exportSymbol("proto.proto.ContractGetBytecodeResponse", null, a), proto.proto.ContractGetBytecodeQuery = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.ContractGetBytecodeQuery, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractGetBytecodeQuery.displayName = "proto.proto.ContractGetBytecodeQuery"), proto.proto.ContractGetBytecodeResponse = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.ContractGetBytecodeResponse, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractGetBytecodeResponse.displayName = "proto.proto.ContractGetBytecodeResponse"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractGetBytecodeQuery.prototype.toObject = function(t) {
                return proto.proto.ContractGetBytecodeQuery.toObject(t, this)
            }, proto.proto.ContractGetBytecodeQuery.toObject = function(t, e) {
                var o, r = {
                    header: (o = e.getHeader()) && s.QueryHeader.toObject(t, o),
                    contractid: (o = e.getContractid()) && i.ContractID.toObject(t, o)
                };
                return t && (r.$jspbMessageInstance = e), r
            }), proto.proto.ContractGetBytecodeQuery.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.ContractGetBytecodeQuery;
                return proto.proto.ContractGetBytecodeQuery.deserializeBinaryFromReader(o, e)
            }, proto.proto.ContractGetBytecodeQuery.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new s.QueryHeader;
                            e.readMessage(o, s.QueryHeader.deserializeBinaryFromReader), t.setHeader(o);
                            break;
                        case 2:
                            o = new i.ContractID;
                            e.readMessage(o, i.ContractID.deserializeBinaryFromReader), t.setContractid(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.ContractGetBytecodeQuery.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.ContractGetBytecodeQuery.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.ContractGetBytecodeQuery.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getHeader()) && e.writeMessage(1, o, s.QueryHeader.serializeBinaryToWriter), null != (o = t.getContractid()) && e.writeMessage(2, o, i.ContractID.serializeBinaryToWriter)
            }, proto.proto.ContractGetBytecodeQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, s.QueryHeader, 1)
            }, proto.proto.ContractGetBytecodeQuery.prototype.setHeader = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.ContractGetBytecodeQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.ContractGetBytecodeQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractGetBytecodeQuery.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, i.ContractID, 2)
            }, proto.proto.ContractGetBytecodeQuery.prototype.setContractid = function(t) {
                return r.Message.setWrapperField(this, 2, t)
            }, proto.proto.ContractGetBytecodeQuery.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.ContractGetBytecodeQuery.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 2)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractGetBytecodeResponse.prototype.toObject = function(t) {
                return proto.proto.ContractGetBytecodeResponse.toObject(t, this)
            }, proto.proto.ContractGetBytecodeResponse.toObject = function(t, e) {
                var o, r = {
                    header: (o = e.getHeader()) && p.ResponseHeader.toObject(t, o),
                    bytecode: e.getBytecode_asB64()
                };
                return t && (r.$jspbMessageInstance = e), r
            }), proto.proto.ContractGetBytecodeResponse.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.ContractGetBytecodeResponse;
                return proto.proto.ContractGetBytecodeResponse.deserializeBinaryFromReader(o, e)
            }, proto.proto.ContractGetBytecodeResponse.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new p.ResponseHeader;
                            e.readMessage(o, p.ResponseHeader.deserializeBinaryFromReader), t.setHeader(o);
                            break;
                        case 6:
                            o = e.readBytes();
                            t.setBytecode(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.ContractGetBytecodeResponse.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.ContractGetBytecodeResponse.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.ContractGetBytecodeResponse.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getHeader()) && e.writeMessage(1, o, p.ResponseHeader.serializeBinaryToWriter), (o = t.getBytecode_asU8()).length > 0 && e.writeBytes(6, o)
            }, proto.proto.ContractGetBytecodeResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, p.ResponseHeader, 1)
            }, proto.proto.ContractGetBytecodeResponse.prototype.setHeader = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.ContractGetBytecodeResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.ContractGetBytecodeResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractGetBytecodeResponse.prototype.getBytecode = function() {
                return r.Message.getFieldWithDefault(this, 6, "")
            }, proto.proto.ContractGetBytecodeResponse.prototype.getBytecode_asB64 = function() {
                return r.Message.bytesAsB64(this.getBytecode())
            }, proto.proto.ContractGetBytecodeResponse.prototype.getBytecode_asU8 = function() {
                return r.Message.bytesAsU8(this.getBytecode())
            }, proto.proto.ContractGetBytecodeResponse.prototype.setBytecode = function(t) {
                return r.Message.setProto3BytesField(this, 6, t)
            }, n.object.extend(e, proto.proto)
        },
        1044: function(t, e, o) {
            var r = o(28),
                n = r,
                a = Function("return this")(),
                i = o(105);
            n.object.extend(proto, i);
            var s = o(198);
            n.object.extend(proto, s);
            var p = o(36);
            n.object.extend(proto, p);
            var c = o(64);
            n.object.extend(proto, c);
            var d = o(119);
            n.object.extend(proto, d), n.exportSymbol("proto.proto.ContractGetInfoQuery", null, a), n.exportSymbol("proto.proto.ContractGetInfoResponse", null, a), n.exportSymbol("proto.proto.ContractGetInfoResponse.ContractInfo", null, a), proto.proto.ContractGetInfoQuery = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.ContractGetInfoQuery, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractGetInfoQuery.displayName = "proto.proto.ContractGetInfoQuery"), proto.proto.ContractGetInfoResponse = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.ContractGetInfoResponse, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractGetInfoResponse.displayName = "proto.proto.ContractGetInfoResponse"), proto.proto.ContractGetInfoResponse.ContractInfo = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.ContractGetInfoResponse.ContractInfo, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractGetInfoResponse.ContractInfo.displayName = "proto.proto.ContractGetInfoResponse.ContractInfo"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractGetInfoQuery.prototype.toObject = function(t) {
                return proto.proto.ContractGetInfoQuery.toObject(t, this)
            }, proto.proto.ContractGetInfoQuery.toObject = function(t, e) {
                var o, r = {
                    header: (o = e.getHeader()) && c.QueryHeader.toObject(t, o),
                    contractid: (o = e.getContractid()) && p.ContractID.toObject(t, o)
                };
                return t && (r.$jspbMessageInstance = e), r
            }), proto.proto.ContractGetInfoQuery.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.ContractGetInfoQuery;
                return proto.proto.ContractGetInfoQuery.deserializeBinaryFromReader(o, e)
            }, proto.proto.ContractGetInfoQuery.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new c.QueryHeader;
                            e.readMessage(o, c.QueryHeader.deserializeBinaryFromReader), t.setHeader(o);
                            break;
                        case 2:
                            o = new p.ContractID;
                            e.readMessage(o, p.ContractID.deserializeBinaryFromReader), t.setContractid(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.ContractGetInfoQuery.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.ContractGetInfoQuery.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.ContractGetInfoQuery.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getHeader()) && e.writeMessage(1, o, c.QueryHeader.serializeBinaryToWriter), null != (o = t.getContractid()) && e.writeMessage(2, o, p.ContractID.serializeBinaryToWriter)
            }, proto.proto.ContractGetInfoQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, c.QueryHeader, 1)
            }, proto.proto.ContractGetInfoQuery.prototype.setHeader = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.ContractGetInfoQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.ContractGetInfoQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractGetInfoQuery.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, p.ContractID, 2)
            }, proto.proto.ContractGetInfoQuery.prototype.setContractid = function(t) {
                return r.Message.setWrapperField(this, 2, t)
            }, proto.proto.ContractGetInfoQuery.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.ContractGetInfoQuery.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 2)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractGetInfoResponse.prototype.toObject = function(t) {
                return proto.proto.ContractGetInfoResponse.toObject(t, this)
            }, proto.proto.ContractGetInfoResponse.toObject = function(t, e) {
                var o, r = {
                    header: (o = e.getHeader()) && d.ResponseHeader.toObject(t, o),
                    contractinfo: (o = e.getContractinfo()) && proto.proto.ContractGetInfoResponse.ContractInfo.toObject(t, o)
                };
                return t && (r.$jspbMessageInstance = e), r
            }), proto.proto.ContractGetInfoResponse.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.ContractGetInfoResponse;
                return proto.proto.ContractGetInfoResponse.deserializeBinaryFromReader(o, e)
            }, proto.proto.ContractGetInfoResponse.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new d.ResponseHeader;
                            e.readMessage(o, d.ResponseHeader.deserializeBinaryFromReader), t.setHeader(o);
                            break;
                        case 2:
                            o = new proto.proto.ContractGetInfoResponse.ContractInfo;
                            e.readMessage(o, proto.proto.ContractGetInfoResponse.ContractInfo.deserializeBinaryFromReader), t.setContractinfo(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.ContractGetInfoResponse.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.ContractGetInfoResponse.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.ContractGetInfoResponse.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getHeader()) && e.writeMessage(1, o, d.ResponseHeader.serializeBinaryToWriter), null != (o = t.getContractinfo()) && e.writeMessage(2, o, proto.proto.ContractGetInfoResponse.ContractInfo.serializeBinaryToWriter)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractGetInfoResponse.ContractInfo.prototype.toObject = function(t) {
                return proto.proto.ContractGetInfoResponse.ContractInfo.toObject(t, this)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.toObject = function(t, e) {
                var o, n = {
                    contractid: (o = e.getContractid()) && p.ContractID.toObject(t, o),
                    accountid: (o = e.getAccountid()) && p.AccountID.toObject(t, o),
                    contractaccountid: r.Message.getFieldWithDefault(e, 3, ""),
                    adminkey: (o = e.getAdminkey()) && p.Key.toObject(t, o),
                    expirationtime: (o = e.getExpirationtime()) && i.Timestamp.toObject(t, o),
                    autorenewperiod: (o = e.getAutorenewperiod()) && s.Duration.toObject(t, o),
                    storage: r.Message.getFieldWithDefault(e, 7, 0),
                    memo: r.Message.getFieldWithDefault(e, 8, "")
                };
                return t && (n.$jspbMessageInstance = e), n
            }), proto.proto.ContractGetInfoResponse.ContractInfo.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.ContractGetInfoResponse.ContractInfo;
                return proto.proto.ContractGetInfoResponse.ContractInfo.deserializeBinaryFromReader(o, e)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new p.ContractID;
                            e.readMessage(o, p.ContractID.deserializeBinaryFromReader), t.setContractid(o);
                            break;
                        case 2:
                            o = new p.AccountID;
                            e.readMessage(o, p.AccountID.deserializeBinaryFromReader), t.setAccountid(o);
                            break;
                        case 3:
                            o = e.readString();
                            t.setContractaccountid(o);
                            break;
                        case 4:
                            o = new p.Key;
                            e.readMessage(o, p.Key.deserializeBinaryFromReader), t.setAdminkey(o);
                            break;
                        case 5:
                            o = new i.Timestamp;
                            e.readMessage(o, i.Timestamp.deserializeBinaryFromReader), t.setExpirationtime(o);
                            break;
                        case 6:
                            o = new s.Duration;
                            e.readMessage(o, s.Duration.deserializeBinaryFromReader), t.setAutorenewperiod(o);
                            break;
                        case 7:
                            o = e.readInt64();
                            t.setStorage(o);
                            break;
                        case 8:
                            o = e.readString();
                            t.setMemo(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.ContractGetInfoResponse.ContractInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.ContractGetInfoResponse.ContractInfo.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getContractid()) && e.writeMessage(1, o, p.ContractID.serializeBinaryToWriter), null != (o = t.getAccountid()) && e.writeMessage(2, o, p.AccountID.serializeBinaryToWriter), (o = t.getContractaccountid()).length > 0 && e.writeString(3, o), null != (o = t.getAdminkey()) && e.writeMessage(4, o, p.Key.serializeBinaryToWriter), null != (o = t.getExpirationtime()) && e.writeMessage(5, o, i.Timestamp.serializeBinaryToWriter), null != (o = t.getAutorenewperiod()) && e.writeMessage(6, o, s.Duration.serializeBinaryToWriter), 0 !== (o = t.getStorage()) && e.writeInt64(7, o), (o = t.getMemo()).length > 0 && e.writeString(8, o)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, p.ContractID, 1)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.setContractid = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.getAccountid = function() {
                return r.Message.getWrapperField(this, p.AccountID, 2)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.setAccountid = function(t) {
                return r.Message.setWrapperField(this, 2, t)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.clearAccountid = function() {
                return this.setAccountid(void 0)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.hasAccountid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.getContractaccountid = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.setContractaccountid = function(t) {
                return r.Message.setProto3StringField(this, 3, t)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.getAdminkey = function() {
                return r.Message.getWrapperField(this, p.Key, 4)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.setAdminkey = function(t) {
                return r.Message.setWrapperField(this, 4, t)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.clearAdminkey = function() {
                return this.setAdminkey(void 0)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.hasAdminkey = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.getExpirationtime = function() {
                return r.Message.getWrapperField(this, i.Timestamp, 5)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.setExpirationtime = function(t) {
                return r.Message.setWrapperField(this, 5, t)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.clearExpirationtime = function() {
                return this.setExpirationtime(void 0)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.hasExpirationtime = function() {
                return null != r.Message.getField(this, 5)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.getAutorenewperiod = function() {
                return r.Message.getWrapperField(this, s.Duration, 6)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.setAutorenewperiod = function(t) {
                return r.Message.setWrapperField(this, 6, t)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.clearAutorenewperiod = function() {
                return this.setAutorenewperiod(void 0)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.hasAutorenewperiod = function() {
                return null != r.Message.getField(this, 6)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.getStorage = function() {
                return r.Message.getFieldWithDefault(this, 7, 0)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.setStorage = function(t) {
                return r.Message.setProto3IntField(this, 7, t)
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.getMemo = function() {
                return r.Message.getFieldWithDefault(this, 8, "")
            }, proto.proto.ContractGetInfoResponse.ContractInfo.prototype.setMemo = function(t) {
                return r.Message.setProto3StringField(this, 8, t)
            }, proto.proto.ContractGetInfoResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, d.ResponseHeader, 1)
            }, proto.proto.ContractGetInfoResponse.prototype.setHeader = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.ContractGetInfoResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.ContractGetInfoResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractGetInfoResponse.prototype.getContractinfo = function() {
                return r.Message.getWrapperField(this, proto.proto.ContractGetInfoResponse.ContractInfo, 2)
            }, proto.proto.ContractGetInfoResponse.prototype.setContractinfo = function(t) {
                return r.Message.setWrapperField(this, 2, t)
            }, proto.proto.ContractGetInfoResponse.prototype.clearContractinfo = function() {
                return this.setContractinfo(void 0)
            }, proto.proto.ContractGetInfoResponse.prototype.hasContractinfo = function() {
                return null != r.Message.getField(this, 2)
            }, n.object.extend(e, proto.proto)
        },
        1045: function(t, e, o) {
            var r = o(28),
                n = r,
                a = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i);
            var s = o(617);
            n.object.extend(proto, s);
            var p = o(64);
            n.object.extend(proto, p);
            var c = o(119);
            n.object.extend(proto, c), n.exportSymbol("proto.proto.ContractGetRecordsQuery", null, a), n.exportSymbol("proto.proto.ContractGetRecordsResponse", null, a), proto.proto.ContractGetRecordsQuery = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.ContractGetRecordsQuery, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractGetRecordsQuery.displayName = "proto.proto.ContractGetRecordsQuery"), proto.proto.ContractGetRecordsResponse = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.proto.ContractGetRecordsResponse.repeatedFields_, null)
            }, n.inherits(proto.proto.ContractGetRecordsResponse, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractGetRecordsResponse.displayName = "proto.proto.ContractGetRecordsResponse"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractGetRecordsQuery.prototype.toObject = function(t) {
                return proto.proto.ContractGetRecordsQuery.toObject(t, this)
            }, proto.proto.ContractGetRecordsQuery.toObject = function(t, e) {
                var o, r = {
                    header: (o = e.getHeader()) && p.QueryHeader.toObject(t, o),
                    contractid: (o = e.getContractid()) && i.ContractID.toObject(t, o)
                };
                return t && (r.$jspbMessageInstance = e), r
            }), proto.proto.ContractGetRecordsQuery.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.ContractGetRecordsQuery;
                return proto.proto.ContractGetRecordsQuery.deserializeBinaryFromReader(o, e)
            }, proto.proto.ContractGetRecordsQuery.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new p.QueryHeader;
                            e.readMessage(o, p.QueryHeader.deserializeBinaryFromReader), t.setHeader(o);
                            break;
                        case 2:
                            o = new i.ContractID;
                            e.readMessage(o, i.ContractID.deserializeBinaryFromReader), t.setContractid(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.ContractGetRecordsQuery.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.ContractGetRecordsQuery.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.ContractGetRecordsQuery.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getHeader()) && e.writeMessage(1, o, p.QueryHeader.serializeBinaryToWriter), null != (o = t.getContractid()) && e.writeMessage(2, o, i.ContractID.serializeBinaryToWriter)
            }, proto.proto.ContractGetRecordsQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, p.QueryHeader, 1)
            }, proto.proto.ContractGetRecordsQuery.prototype.setHeader = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.ContractGetRecordsQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.ContractGetRecordsQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractGetRecordsQuery.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, i.ContractID, 2)
            }, proto.proto.ContractGetRecordsQuery.prototype.setContractid = function(t) {
                return r.Message.setWrapperField(this, 2, t)
            }, proto.proto.ContractGetRecordsQuery.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.ContractGetRecordsQuery.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.ContractGetRecordsResponse.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractGetRecordsResponse.prototype.toObject = function(t) {
                return proto.proto.ContractGetRecordsResponse.toObject(t, this)
            }, proto.proto.ContractGetRecordsResponse.toObject = function(t, e) {
                var o, n = {
                    header: (o = e.getHeader()) && c.ResponseHeader.toObject(t, o),
                    contractid: (o = e.getContractid()) && i.ContractID.toObject(t, o),
                    recordsList: r.Message.toObjectList(e.getRecordsList(), s.TransactionRecord.toObject, t)
                };
                return t && (n.$jspbMessageInstance = e), n
            }), proto.proto.ContractGetRecordsResponse.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.ContractGetRecordsResponse;
                return proto.proto.ContractGetRecordsResponse.deserializeBinaryFromReader(o, e)
            }, proto.proto.ContractGetRecordsResponse.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new c.ResponseHeader;
                            e.readMessage(o, c.ResponseHeader.deserializeBinaryFromReader), t.setHeader(o);
                            break;
                        case 2:
                            o = new i.ContractID;
                            e.readMessage(o, i.ContractID.deserializeBinaryFromReader), t.setContractid(o);
                            break;
                        case 3:
                            o = new s.TransactionRecord;
                            e.readMessage(o, s.TransactionRecord.deserializeBinaryFromReader), t.addRecords(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.ContractGetRecordsResponse.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.ContractGetRecordsResponse.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.ContractGetRecordsResponse.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getHeader()) && e.writeMessage(1, o, c.ResponseHeader.serializeBinaryToWriter), null != (o = t.getContractid()) && e.writeMessage(2, o, i.ContractID.serializeBinaryToWriter), (o = t.getRecordsList()).length > 0 && e.writeRepeatedMessage(3, o, s.TransactionRecord.serializeBinaryToWriter)
            }, proto.proto.ContractGetRecordsResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, c.ResponseHeader, 1)
            }, proto.proto.ContractGetRecordsResponse.prototype.setHeader = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.ContractGetRecordsResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.ContractGetRecordsResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractGetRecordsResponse.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, i.ContractID, 2)
            }, proto.proto.ContractGetRecordsResponse.prototype.setContractid = function(t) {
                return r.Message.setWrapperField(this, 2, t)
            }, proto.proto.ContractGetRecordsResponse.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.ContractGetRecordsResponse.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.ContractGetRecordsResponse.prototype.getRecordsList = function() {
                return r.Message.getRepeatedWrapperField(this, s.TransactionRecord, 3)
            }, proto.proto.ContractGetRecordsResponse.prototype.setRecordsList = function(t) {
                return r.Message.setRepeatedWrapperField(this, 3, t)
            }, proto.proto.ContractGetRecordsResponse.prototype.addRecords = function(t, e) {
                return r.Message.addToRepeatedWrapperField(this, 3, t, proto.proto.TransactionRecord, e)
            }, proto.proto.ContractGetRecordsResponse.prototype.clearRecordsList = function() {
                return this.setRecordsList([])
            }, n.object.extend(e, proto.proto)
        },
        1779: function(t, e, o) {
            var r = o(28),
                n = r,
                a = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i);
            var s = o(198);
            n.object.extend(proto, s), n.exportSymbol("proto.proto.ContractCreateTransactionBody", null, a), proto.proto.ContractCreateTransactionBody = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.ContractCreateTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractCreateTransactionBody.displayName = "proto.proto.ContractCreateTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractCreateTransactionBody.prototype.toObject = function(t) {
                return proto.proto.ContractCreateTransactionBody.toObject(t, this)
            }, proto.proto.ContractCreateTransactionBody.toObject = function(t, e) {
                var o, n = {
                    fileid: (o = e.getFileid()) && i.FileID.toObject(t, o),
                    adminkey: (o = e.getAdminkey()) && i.Key.toObject(t, o),
                    gas: r.Message.getFieldWithDefault(e, 4, "0"),
                    initialbalance: r.Message.getFieldWithDefault(e, 5, "0"),
                    proxyaccountid: (o = e.getProxyaccountid()) && i.AccountID.toObject(t, o),
                    autorenewperiod: (o = e.getAutorenewperiod()) && s.Duration.toObject(t, o),
                    constructorparameters: e.getConstructorparameters_asB64(),
                    shardid: (o = e.getShardid()) && i.ShardID.toObject(t, o),
                    realmid: (o = e.getRealmid()) && i.RealmID.toObject(t, o),
                    newrealmadminkey: (o = e.getNewrealmadminkey()) && i.Key.toObject(t, o),
                    memo: r.Message.getFieldWithDefault(e, 13, "")
                };
                return t && (n.$jspbMessageInstance = e), n
            }), proto.proto.ContractCreateTransactionBody.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.ContractCreateTransactionBody;
                return proto.proto.ContractCreateTransactionBody.deserializeBinaryFromReader(o, e)
            }, proto.proto.ContractCreateTransactionBody.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new i.FileID;
                            e.readMessage(o, i.FileID.deserializeBinaryFromReader), t.setFileid(o);
                            break;
                        case 3:
                            o = new i.Key;
                            e.readMessage(o, i.Key.deserializeBinaryFromReader), t.setAdminkey(o);
                            break;
                        case 4:
                            o = e.readInt64String();
                            t.setGas(o);
                            break;
                        case 5:
                            o = e.readInt64String();
                            t.setInitialbalance(o);
                            break;
                        case 6:
                            o = new i.AccountID;
                            e.readMessage(o, i.AccountID.deserializeBinaryFromReader), t.setProxyaccountid(o);
                            break;
                        case 8:
                            o = new s.Duration;
                            e.readMessage(o, s.Duration.deserializeBinaryFromReader), t.setAutorenewperiod(o);
                            break;
                        case 9:
                            o = e.readBytes();
                            t.setConstructorparameters(o);
                            break;
                        case 10:
                            o = new i.ShardID;
                            e.readMessage(o, i.ShardID.deserializeBinaryFromReader), t.setShardid(o);
                            break;
                        case 11:
                            o = new i.RealmID;
                            e.readMessage(o, i.RealmID.deserializeBinaryFromReader), t.setRealmid(o);
                            break;
                        case 12:
                            o = new i.Key;
                            e.readMessage(o, i.Key.deserializeBinaryFromReader), t.setNewrealmadminkey(o);
                            break;
                        case 13:
                            o = e.readString();
                            t.setMemo(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.ContractCreateTransactionBody.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.ContractCreateTransactionBody.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.ContractCreateTransactionBody.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getFileid()) && e.writeMessage(1, o, i.FileID.serializeBinaryToWriter), null != (o = t.getAdminkey()) && e.writeMessage(3, o, i.Key.serializeBinaryToWriter), o = t.getGas(), 0 !== parseInt(o, 10) && e.writeInt64String(4, o), o = t.getInitialbalance(), 0 !== parseInt(o, 10) && e.writeInt64String(5, o), null != (o = t.getProxyaccountid()) && e.writeMessage(6, o, i.AccountID.serializeBinaryToWriter), null != (o = t.getAutorenewperiod()) && e.writeMessage(8, o, s.Duration.serializeBinaryToWriter), (o = t.getConstructorparameters_asU8()).length > 0 && e.writeBytes(9, o), null != (o = t.getShardid()) && e.writeMessage(10, o, i.ShardID.serializeBinaryToWriter), null != (o = t.getRealmid()) && e.writeMessage(11, o, i.RealmID.serializeBinaryToWriter), null != (o = t.getNewrealmadminkey()) && e.writeMessage(12, o, i.Key.serializeBinaryToWriter), (o = t.getMemo()).length > 0 && e.writeString(13, o)
            }, proto.proto.ContractCreateTransactionBody.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, i.FileID, 1)
            }, proto.proto.ContractCreateTransactionBody.prototype.setFileid = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.ContractCreateTransactionBody.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.ContractCreateTransactionBody.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractCreateTransactionBody.prototype.getAdminkey = function() {
                return r.Message.getWrapperField(this, i.Key, 3)
            }, proto.proto.ContractCreateTransactionBody.prototype.setAdminkey = function(t) {
                return r.Message.setWrapperField(this, 3, t)
            }, proto.proto.ContractCreateTransactionBody.prototype.clearAdminkey = function() {
                return this.setAdminkey(void 0)
            }, proto.proto.ContractCreateTransactionBody.prototype.hasAdminkey = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.ContractCreateTransactionBody.prototype.getGas = function() {
                return r.Message.getFieldWithDefault(this, 4, "0")
            }, proto.proto.ContractCreateTransactionBody.prototype.setGas = function(t) {
                return r.Message.setProto3StringIntField(this, 4, t)
            }, proto.proto.ContractCreateTransactionBody.prototype.getInitialbalance = function() {
                return r.Message.getFieldWithDefault(this, 5, "0")
            }, proto.proto.ContractCreateTransactionBody.prototype.setInitialbalance = function(t) {
                return r.Message.setProto3StringIntField(this, 5, t)
            }, proto.proto.ContractCreateTransactionBody.prototype.getProxyaccountid = function() {
                return r.Message.getWrapperField(this, i.AccountID, 6)
            }, proto.proto.ContractCreateTransactionBody.prototype.setProxyaccountid = function(t) {
                return r.Message.setWrapperField(this, 6, t)
            }, proto.proto.ContractCreateTransactionBody.prototype.clearProxyaccountid = function() {
                return this.setProxyaccountid(void 0)
            }, proto.proto.ContractCreateTransactionBody.prototype.hasProxyaccountid = function() {
                return null != r.Message.getField(this, 6)
            }, proto.proto.ContractCreateTransactionBody.prototype.getAutorenewperiod = function() {
                return r.Message.getWrapperField(this, s.Duration, 8)
            }, proto.proto.ContractCreateTransactionBody.prototype.setAutorenewperiod = function(t) {
                return r.Message.setWrapperField(this, 8, t)
            }, proto.proto.ContractCreateTransactionBody.prototype.clearAutorenewperiod = function() {
                return this.setAutorenewperiod(void 0)
            }, proto.proto.ContractCreateTransactionBody.prototype.hasAutorenewperiod = function() {
                return null != r.Message.getField(this, 8)
            }, proto.proto.ContractCreateTransactionBody.prototype.getConstructorparameters = function() {
                return r.Message.getFieldWithDefault(this, 9, "")
            }, proto.proto.ContractCreateTransactionBody.prototype.getConstructorparameters_asB64 = function() {
                return r.Message.bytesAsB64(this.getConstructorparameters())
            }, proto.proto.ContractCreateTransactionBody.prototype.getConstructorparameters_asU8 = function() {
                return r.Message.bytesAsU8(this.getConstructorparameters())
            }, proto.proto.ContractCreateTransactionBody.prototype.setConstructorparameters = function(t) {
                return r.Message.setProto3BytesField(this, 9, t)
            }, proto.proto.ContractCreateTransactionBody.prototype.getShardid = function() {
                return r.Message.getWrapperField(this, i.ShardID, 10)
            }, proto.proto.ContractCreateTransactionBody.prototype.setShardid = function(t) {
                return r.Message.setWrapperField(this, 10, t)
            }, proto.proto.ContractCreateTransactionBody.prototype.clearShardid = function() {
                return this.setShardid(void 0)
            }, proto.proto.ContractCreateTransactionBody.prototype.hasShardid = function() {
                return null != r.Message.getField(this, 10)
            }, proto.proto.ContractCreateTransactionBody.prototype.getRealmid = function() {
                return r.Message.getWrapperField(this, i.RealmID, 11)
            }, proto.proto.ContractCreateTransactionBody.prototype.setRealmid = function(t) {
                return r.Message.setWrapperField(this, 11, t)
            }, proto.proto.ContractCreateTransactionBody.prototype.clearRealmid = function() {
                return this.setRealmid(void 0)
            }, proto.proto.ContractCreateTransactionBody.prototype.hasRealmid = function() {
                return null != r.Message.getField(this, 11)
            }, proto.proto.ContractCreateTransactionBody.prototype.getNewrealmadminkey = function() {
                return r.Message.getWrapperField(this, i.Key, 12)
            }, proto.proto.ContractCreateTransactionBody.prototype.setNewrealmadminkey = function(t) {
                return r.Message.setWrapperField(this, 12, t)
            }, proto.proto.ContractCreateTransactionBody.prototype.clearNewrealmadminkey = function() {
                return this.setNewrealmadminkey(void 0)
            }, proto.proto.ContractCreateTransactionBody.prototype.hasNewrealmadminkey = function() {
                return null != r.Message.getField(this, 12)
            }, proto.proto.ContractCreateTransactionBody.prototype.getMemo = function() {
                return r.Message.getFieldWithDefault(this, 13, "")
            }, proto.proto.ContractCreateTransactionBody.prototype.setMemo = function(t) {
                return r.Message.setProto3StringField(this, 13, t)
            }, n.object.extend(e, proto.proto)
        },
        1780: function(t, e, o) {
            var r = o(28),
                n = r,
                a = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i);
            var s = o(198);
            n.object.extend(proto, s);
            var p = o(105);
            n.object.extend(proto, p), n.exportSymbol("proto.proto.ContractUpdateTransactionBody", null, a), proto.proto.ContractUpdateTransactionBody = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.ContractUpdateTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractUpdateTransactionBody.displayName = "proto.proto.ContractUpdateTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractUpdateTransactionBody.prototype.toObject = function(t) {
                return proto.proto.ContractUpdateTransactionBody.toObject(t, this)
            }, proto.proto.ContractUpdateTransactionBody.toObject = function(t, e) {
                var o, n = {
                    contractid: (o = e.getContractid()) && i.ContractID.toObject(t, o),
                    expirationtime: (o = e.getExpirationtime()) && p.Timestamp.toObject(t, o),
                    adminkey: (o = e.getAdminkey()) && i.Key.toObject(t, o),
                    proxyaccountid: (o = e.getProxyaccountid()) && i.AccountID.toObject(t, o),
                    autorenewperiod: (o = e.getAutorenewperiod()) && s.Duration.toObject(t, o),
                    fileid: (o = e.getFileid()) && i.FileID.toObject(t, o),
                    memo: r.Message.getFieldWithDefault(e, 9, "")
                };
                return t && (n.$jspbMessageInstance = e), n
            }), proto.proto.ContractUpdateTransactionBody.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.ContractUpdateTransactionBody;
                return proto.proto.ContractUpdateTransactionBody.deserializeBinaryFromReader(o, e)
            }, proto.proto.ContractUpdateTransactionBody.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new i.ContractID;
                            e.readMessage(o, i.ContractID.deserializeBinaryFromReader), t.setContractid(o);
                            break;
                        case 2:
                            o = new p.Timestamp;
                            e.readMessage(o, p.Timestamp.deserializeBinaryFromReader), t.setExpirationtime(o);
                            break;
                        case 3:
                            o = new i.Key;
                            e.readMessage(o, i.Key.deserializeBinaryFromReader), t.setAdminkey(o);
                            break;
                        case 6:
                            o = new i.AccountID;
                            e.readMessage(o, i.AccountID.deserializeBinaryFromReader), t.setProxyaccountid(o);
                            break;
                        case 7:
                            o = new s.Duration;
                            e.readMessage(o, s.Duration.deserializeBinaryFromReader), t.setAutorenewperiod(o);
                            break;
                        case 8:
                            o = new i.FileID;
                            e.readMessage(o, i.FileID.deserializeBinaryFromReader), t.setFileid(o);
                            break;
                        case 9:
                            o = e.readString();
                            t.setMemo(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.ContractUpdateTransactionBody.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.ContractUpdateTransactionBody.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.ContractUpdateTransactionBody.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getContractid()) && e.writeMessage(1, o, i.ContractID.serializeBinaryToWriter), null != (o = t.getExpirationtime()) && e.writeMessage(2, o, p.Timestamp.serializeBinaryToWriter), null != (o = t.getAdminkey()) && e.writeMessage(3, o, i.Key.serializeBinaryToWriter), null != (o = t.getProxyaccountid()) && e.writeMessage(6, o, i.AccountID.serializeBinaryToWriter), null != (o = t.getAutorenewperiod()) && e.writeMessage(7, o, s.Duration.serializeBinaryToWriter), null != (o = t.getFileid()) && e.writeMessage(8, o, i.FileID.serializeBinaryToWriter), (o = t.getMemo()).length > 0 && e.writeString(9, o)
            }, proto.proto.ContractUpdateTransactionBody.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, i.ContractID, 1)
            }, proto.proto.ContractUpdateTransactionBody.prototype.setContractid = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.ContractUpdateTransactionBody.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.ContractUpdateTransactionBody.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractUpdateTransactionBody.prototype.getExpirationtime = function() {
                return r.Message.getWrapperField(this, p.Timestamp, 2)
            }, proto.proto.ContractUpdateTransactionBody.prototype.setExpirationtime = function(t) {
                return r.Message.setWrapperField(this, 2, t)
            }, proto.proto.ContractUpdateTransactionBody.prototype.clearExpirationtime = function() {
                return this.setExpirationtime(void 0)
            }, proto.proto.ContractUpdateTransactionBody.prototype.hasExpirationtime = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.ContractUpdateTransactionBody.prototype.getAdminkey = function() {
                return r.Message.getWrapperField(this, i.Key, 3)
            }, proto.proto.ContractUpdateTransactionBody.prototype.setAdminkey = function(t) {
                return r.Message.setWrapperField(this, 3, t)
            }, proto.proto.ContractUpdateTransactionBody.prototype.clearAdminkey = function() {
                return this.setAdminkey(void 0)
            }, proto.proto.ContractUpdateTransactionBody.prototype.hasAdminkey = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.ContractUpdateTransactionBody.prototype.getProxyaccountid = function() {
                return r.Message.getWrapperField(this, i.AccountID, 6)
            }, proto.proto.ContractUpdateTransactionBody.prototype.setProxyaccountid = function(t) {
                return r.Message.setWrapperField(this, 6, t)
            }, proto.proto.ContractUpdateTransactionBody.prototype.clearProxyaccountid = function() {
                return this.setProxyaccountid(void 0)
            }, proto.proto.ContractUpdateTransactionBody.prototype.hasProxyaccountid = function() {
                return null != r.Message.getField(this, 6)
            }, proto.proto.ContractUpdateTransactionBody.prototype.getAutorenewperiod = function() {
                return r.Message.getWrapperField(this, s.Duration, 7)
            }, proto.proto.ContractUpdateTransactionBody.prototype.setAutorenewperiod = function(t) {
                return r.Message.setWrapperField(this, 7, t)
            }, proto.proto.ContractUpdateTransactionBody.prototype.clearAutorenewperiod = function() {
                return this.setAutorenewperiod(void 0)
            }, proto.proto.ContractUpdateTransactionBody.prototype.hasAutorenewperiod = function() {
                return null != r.Message.getField(this, 7)
            }, proto.proto.ContractUpdateTransactionBody.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, i.FileID, 8)
            }, proto.proto.ContractUpdateTransactionBody.prototype.setFileid = function(t) {
                return r.Message.setWrapperField(this, 8, t)
            }, proto.proto.ContractUpdateTransactionBody.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.ContractUpdateTransactionBody.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 8)
            }, proto.proto.ContractUpdateTransactionBody.prototype.getMemo = function() {
                return r.Message.getFieldWithDefault(this, 9, "")
            }, proto.proto.ContractUpdateTransactionBody.prototype.setMemo = function(t) {
                return r.Message.setProto3StringField(this, 9, t)
            }, n.object.extend(e, proto.proto)
        },
        1781: function(t, e, o) {
            var r = o(28),
                n = r,
                a = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i);
            var s = o(198);
            n.object.extend(proto, s), n.exportSymbol("proto.proto.CryptoCreateTransactionBody", null, a), proto.proto.CryptoCreateTransactionBody = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.CryptoCreateTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.CryptoCreateTransactionBody.displayName = "proto.proto.CryptoCreateTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.CryptoCreateTransactionBody.prototype.toObject = function(t) {
                return proto.proto.CryptoCreateTransactionBody.toObject(t, this)
            }, proto.proto.CryptoCreateTransactionBody.toObject = function(t, e) {
                var o, n = {
                    key: (o = e.getKey()) && i.Key.toObject(t, o),
                    initialbalance: r.Message.getFieldWithDefault(e, 2, "0"),
                    proxyaccountid: (o = e.getProxyaccountid()) && i.AccountID.toObject(t, o),
                    sendrecordthreshold: r.Message.getFieldWithDefault(e, 6, "0"),
                    receiverecordthreshold: r.Message.getFieldWithDefault(e, 7, "0"),
                    receiversigrequired: r.Message.getBooleanFieldWithDefault(e, 8, !1),
                    autorenewperiod: (o = e.getAutorenewperiod()) && s.Duration.toObject(t, o),
                    shardid: (o = e.getShardid()) && i.ShardID.toObject(t, o),
                    realmid: (o = e.getRealmid()) && i.RealmID.toObject(t, o),
                    newrealmadminkey: (o = e.getNewrealmadminkey()) && i.Key.toObject(t, o)
                };
                return t && (n.$jspbMessageInstance = e), n
            }), proto.proto.CryptoCreateTransactionBody.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.CryptoCreateTransactionBody;
                return proto.proto.CryptoCreateTransactionBody.deserializeBinaryFromReader(o, e)
            }, proto.proto.CryptoCreateTransactionBody.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new i.Key;
                            e.readMessage(o, i.Key.deserializeBinaryFromReader), t.setKey(o);
                            break;
                        case 2:
                            o = e.readUint64String();
                            t.setInitialbalance(o);
                            break;
                        case 3:
                            o = new i.AccountID;
                            e.readMessage(o, i.AccountID.deserializeBinaryFromReader), t.setProxyaccountid(o);
                            break;
                        case 6:
                            o = e.readUint64String();
                            t.setSendrecordthreshold(o);
                            break;
                        case 7:
                            o = e.readUint64String();
                            t.setReceiverecordthreshold(o);
                            break;
                        case 8:
                            o = e.readBool();
                            t.setReceiversigrequired(o);
                            break;
                        case 9:
                            o = new s.Duration;
                            e.readMessage(o, s.Duration.deserializeBinaryFromReader), t.setAutorenewperiod(o);
                            break;
                        case 10:
                            o = new i.ShardID;
                            e.readMessage(o, i.ShardID.deserializeBinaryFromReader), t.setShardid(o);
                            break;
                        case 11:
                            o = new i.RealmID;
                            e.readMessage(o, i.RealmID.deserializeBinaryFromReader), t.setRealmid(o);
                            break;
                        case 12:
                            o = new i.Key;
                            e.readMessage(o, i.Key.deserializeBinaryFromReader), t.setNewrealmadminkey(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.CryptoCreateTransactionBody.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.CryptoCreateTransactionBody.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.CryptoCreateTransactionBody.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getKey()) && e.writeMessage(1, o, i.Key.serializeBinaryToWriter), o = t.getInitialbalance(), 0 !== parseInt(o, 10) && e.writeUint64String(2, o), null != (o = t.getProxyaccountid()) && e.writeMessage(3, o, i.AccountID.serializeBinaryToWriter), o = t.getSendrecordthreshold(), 0 !== parseInt(o, 10) && e.writeUint64String(6, o), o = t.getReceiverecordthreshold(), 0 !== parseInt(o, 10) && e.writeUint64String(7, o), (o = t.getReceiversigrequired()) && e.writeBool(8, o), null != (o = t.getAutorenewperiod()) && e.writeMessage(9, o, s.Duration.serializeBinaryToWriter), null != (o = t.getShardid()) && e.writeMessage(10, o, i.ShardID.serializeBinaryToWriter), null != (o = t.getRealmid()) && e.writeMessage(11, o, i.RealmID.serializeBinaryToWriter), null != (o = t.getNewrealmadminkey()) && e.writeMessage(12, o, i.Key.serializeBinaryToWriter)
            }, proto.proto.CryptoCreateTransactionBody.prototype.getKey = function() {
                return r.Message.getWrapperField(this, i.Key, 1)
            }, proto.proto.CryptoCreateTransactionBody.prototype.setKey = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.CryptoCreateTransactionBody.prototype.clearKey = function() {
                return this.setKey(void 0)
            }, proto.proto.CryptoCreateTransactionBody.prototype.hasKey = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.CryptoCreateTransactionBody.prototype.getInitialbalance = function() {
                return r.Message.getFieldWithDefault(this, 2, "0")
            }, proto.proto.CryptoCreateTransactionBody.prototype.setInitialbalance = function(t) {
                return r.Message.setProto3StringIntField(this, 2, t)
            }, proto.proto.CryptoCreateTransactionBody.prototype.getProxyaccountid = function() {
                return r.Message.getWrapperField(this, i.AccountID, 3)
            }, proto.proto.CryptoCreateTransactionBody.prototype.setProxyaccountid = function(t) {
                return r.Message.setWrapperField(this, 3, t)
            }, proto.proto.CryptoCreateTransactionBody.prototype.clearProxyaccountid = function() {
                return this.setProxyaccountid(void 0)
            }, proto.proto.CryptoCreateTransactionBody.prototype.hasProxyaccountid = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.CryptoCreateTransactionBody.prototype.getSendrecordthreshold = function() {
                return r.Message.getFieldWithDefault(this, 6, "0")
            }, proto.proto.CryptoCreateTransactionBody.prototype.setSendrecordthreshold = function(t) {
                return r.Message.setProto3StringIntField(this, 6, t)
            }, proto.proto.CryptoCreateTransactionBody.prototype.getReceiverecordthreshold = function() {
                return r.Message.getFieldWithDefault(this, 7, "0")
            }, proto.proto.CryptoCreateTransactionBody.prototype.setReceiverecordthreshold = function(t) {
                return r.Message.setProto3StringIntField(this, 7, t)
            }, proto.proto.CryptoCreateTransactionBody.prototype.getReceiversigrequired = function() {
                return r.Message.getBooleanFieldWithDefault(this, 8, !1)
            }, proto.proto.CryptoCreateTransactionBody.prototype.setReceiversigrequired = function(t) {
                return r.Message.setProto3BooleanField(this, 8, t)
            }, proto.proto.CryptoCreateTransactionBody.prototype.getAutorenewperiod = function() {
                return r.Message.getWrapperField(this, s.Duration, 9)
            }, proto.proto.CryptoCreateTransactionBody.prototype.setAutorenewperiod = function(t) {
                return r.Message.setWrapperField(this, 9, t)
            }, proto.proto.CryptoCreateTransactionBody.prototype.clearAutorenewperiod = function() {
                return this.setAutorenewperiod(void 0)
            }, proto.proto.CryptoCreateTransactionBody.prototype.hasAutorenewperiod = function() {
                return null != r.Message.getField(this, 9)
            }, proto.proto.CryptoCreateTransactionBody.prototype.getShardid = function() {
                return r.Message.getWrapperField(this, i.ShardID, 10)
            }, proto.proto.CryptoCreateTransactionBody.prototype.setShardid = function(t) {
                return r.Message.setWrapperField(this, 10, t)
            }, proto.proto.CryptoCreateTransactionBody.prototype.clearShardid = function() {
                return this.setShardid(void 0)
            }, proto.proto.CryptoCreateTransactionBody.prototype.hasShardid = function() {
                return null != r.Message.getField(this, 10)
            }, proto.proto.CryptoCreateTransactionBody.prototype.getRealmid = function() {
                return r.Message.getWrapperField(this, i.RealmID, 11)
            }, proto.proto.CryptoCreateTransactionBody.prototype.setRealmid = function(t) {
                return r.Message.setWrapperField(this, 11, t)
            }, proto.proto.CryptoCreateTransactionBody.prototype.clearRealmid = function() {
                return this.setRealmid(void 0)
            }, proto.proto.CryptoCreateTransactionBody.prototype.hasRealmid = function() {
                return null != r.Message.getField(this, 11)
            }, proto.proto.CryptoCreateTransactionBody.prototype.getNewrealmadminkey = function() {
                return r.Message.getWrapperField(this, i.Key, 12)
            }, proto.proto.CryptoCreateTransactionBody.prototype.setNewrealmadminkey = function(t) {
                return r.Message.setWrapperField(this, 12, t)
            }, proto.proto.CryptoCreateTransactionBody.prototype.clearNewrealmadminkey = function() {
                return this.setNewrealmadminkey(void 0)
            }, proto.proto.CryptoCreateTransactionBody.prototype.hasNewrealmadminkey = function() {
                return null != r.Message.getField(this, 12)
            }, n.object.extend(e, proto.proto)
        },
        1782: function(t, e, o) {
            var r = o(28),
                n = r,
                a = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i), n.exportSymbol("proto.proto.CryptoDeleteTransactionBody", null, a), proto.proto.CryptoDeleteTransactionBody = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.CryptoDeleteTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.CryptoDeleteTransactionBody.displayName = "proto.proto.CryptoDeleteTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.CryptoDeleteTransactionBody.prototype.toObject = function(t) {
                return proto.proto.CryptoDeleteTransactionBody.toObject(t, this)
            }, proto.proto.CryptoDeleteTransactionBody.toObject = function(t, e) {
                var o, r = {
                    transferaccountid: (o = e.getTransferaccountid()) && i.AccountID.toObject(t, o),
                    deleteaccountid: (o = e.getDeleteaccountid()) && i.AccountID.toObject(t, o)
                };
                return t && (r.$jspbMessageInstance = e), r
            }), proto.proto.CryptoDeleteTransactionBody.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.CryptoDeleteTransactionBody;
                return proto.proto.CryptoDeleteTransactionBody.deserializeBinaryFromReader(o, e)
            }, proto.proto.CryptoDeleteTransactionBody.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new i.AccountID;
                            e.readMessage(o, i.AccountID.deserializeBinaryFromReader), t.setTransferaccountid(o);
                            break;
                        case 2:
                            o = new i.AccountID;
                            e.readMessage(o, i.AccountID.deserializeBinaryFromReader), t.setDeleteaccountid(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.CryptoDeleteTransactionBody.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.CryptoDeleteTransactionBody.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.CryptoDeleteTransactionBody.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getTransferaccountid()) && e.writeMessage(1, o, i.AccountID.serializeBinaryToWriter), null != (o = t.getDeleteaccountid()) && e.writeMessage(2, o, i.AccountID.serializeBinaryToWriter)
            }, proto.proto.CryptoDeleteTransactionBody.prototype.getTransferaccountid = function() {
                return r.Message.getWrapperField(this, i.AccountID, 1)
            }, proto.proto.CryptoDeleteTransactionBody.prototype.setTransferaccountid = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.CryptoDeleteTransactionBody.prototype.clearTransferaccountid = function() {
                return this.setTransferaccountid(void 0)
            }, proto.proto.CryptoDeleteTransactionBody.prototype.hasTransferaccountid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.CryptoDeleteTransactionBody.prototype.getDeleteaccountid = function() {
                return r.Message.getWrapperField(this, i.AccountID, 2)
            }, proto.proto.CryptoDeleteTransactionBody.prototype.setDeleteaccountid = function(t) {
                return r.Message.setWrapperField(this, 2, t)
            }, proto.proto.CryptoDeleteTransactionBody.prototype.clearDeleteaccountid = function() {
                return this.setDeleteaccountid(void 0)
            }, proto.proto.CryptoDeleteTransactionBody.prototype.hasDeleteaccountid = function() {
                return null != r.Message.getField(this, 2)
            }, n.object.extend(e, proto.proto)
        },
        1788: function(t, e, o) {
            var r = o(28),
                n = r,
                a = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i), n.exportSymbol("proto.proto.ContractDeleteTransactionBody", null, a), n.exportSymbol("proto.proto.ContractDeleteTransactionBody.ObtainersCase", null, a), proto.proto.ContractDeleteTransactionBody = function(t) {
                r.Message.initialize(this, t, 0, -1, null, proto.proto.ContractDeleteTransactionBody.oneofGroups_)
            }, n.inherits(proto.proto.ContractDeleteTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractDeleteTransactionBody.displayName = "proto.proto.ContractDeleteTransactionBody"), proto.proto.ContractDeleteTransactionBody.oneofGroups_ = [
                [2, 3]
            ], proto.proto.ContractDeleteTransactionBody.ObtainersCase = {
                OBTAINERS_NOT_SET: 0,
                TRANSFERACCOUNTID: 2,
                TRANSFERCONTRACTID: 3
            }, proto.proto.ContractDeleteTransactionBody.prototype.getObtainersCase = function() {
                return r.Message.computeOneofCase(this, proto.proto.ContractDeleteTransactionBody.oneofGroups_[0])
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractDeleteTransactionBody.prototype.toObject = function(t) {
                return proto.proto.ContractDeleteTransactionBody.toObject(t, this)
            }, proto.proto.ContractDeleteTransactionBody.toObject = function(t, e) {
                var o, r = {
                    contractid: (o = e.getContractid()) && i.ContractID.toObject(t, o),
                    transferaccountid: (o = e.getTransferaccountid()) && i.AccountID.toObject(t, o),
                    transfercontractid: (o = e.getTransfercontractid()) && i.ContractID.toObject(t, o)
                };
                return t && (r.$jspbMessageInstance = e), r
            }), proto.proto.ContractDeleteTransactionBody.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.ContractDeleteTransactionBody;
                return proto.proto.ContractDeleteTransactionBody.deserializeBinaryFromReader(o, e)
            }, proto.proto.ContractDeleteTransactionBody.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new i.ContractID;
                            e.readMessage(o, i.ContractID.deserializeBinaryFromReader), t.setContractid(o);
                            break;
                        case 2:
                            o = new i.AccountID;
                            e.readMessage(o, i.AccountID.deserializeBinaryFromReader), t.setTransferaccountid(o);
                            break;
                        case 3:
                            o = new i.ContractID;
                            e.readMessage(o, i.ContractID.deserializeBinaryFromReader), t.setTransfercontractid(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.ContractDeleteTransactionBody.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.ContractDeleteTransactionBody.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.ContractDeleteTransactionBody.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getContractid()) && e.writeMessage(1, o, i.ContractID.serializeBinaryToWriter), null != (o = t.getTransferaccountid()) && e.writeMessage(2, o, i.AccountID.serializeBinaryToWriter), null != (o = t.getTransfercontractid()) && e.writeMessage(3, o, i.ContractID.serializeBinaryToWriter)
            }, proto.proto.ContractDeleteTransactionBody.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, i.ContractID, 1)
            }, proto.proto.ContractDeleteTransactionBody.prototype.setContractid = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.ContractDeleteTransactionBody.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.ContractDeleteTransactionBody.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractDeleteTransactionBody.prototype.getTransferaccountid = function() {
                return r.Message.getWrapperField(this, i.AccountID, 2)
            }, proto.proto.ContractDeleteTransactionBody.prototype.setTransferaccountid = function(t) {
                return r.Message.setOneofWrapperField(this, 2, proto.proto.ContractDeleteTransactionBody.oneofGroups_[0], t)
            }, proto.proto.ContractDeleteTransactionBody.prototype.clearTransferaccountid = function() {
                return this.setTransferaccountid(void 0)
            }, proto.proto.ContractDeleteTransactionBody.prototype.hasTransferaccountid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.ContractDeleteTransactionBody.prototype.getTransfercontractid = function() {
                return r.Message.getWrapperField(this, i.ContractID, 3)
            }, proto.proto.ContractDeleteTransactionBody.prototype.setTransfercontractid = function(t) {
                return r.Message.setOneofWrapperField(this, 3, proto.proto.ContractDeleteTransactionBody.oneofGroups_[0], t)
            }, proto.proto.ContractDeleteTransactionBody.prototype.clearTransfercontractid = function() {
                return this.setTransfercontractid(void 0)
            }, proto.proto.ContractDeleteTransactionBody.prototype.hasTransfercontractid = function() {
                return null != r.Message.getField(this, 3)
            }, n.object.extend(e, proto.proto)
        },
        3256: function(t, e, o) {
            var r = o(28),
                n = r,
                a = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i), n.exportSymbol("proto.proto.CryptoDeleteClaimTransactionBody", null, a), proto.proto.CryptoDeleteClaimTransactionBody = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.CryptoDeleteClaimTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.CryptoDeleteClaimTransactionBody.displayName = "proto.proto.CryptoDeleteClaimTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.CryptoDeleteClaimTransactionBody.prototype.toObject = function(t) {
                return proto.proto.CryptoDeleteClaimTransactionBody.toObject(t, this)
            }, proto.proto.CryptoDeleteClaimTransactionBody.toObject = function(t, e) {
                var o, r = {
                    accountidtodeletefrom: (o = e.getAccountidtodeletefrom()) && i.AccountID.toObject(t, o),
                    hashtodelete: e.getHashtodelete_asB64()
                };
                return t && (r.$jspbMessageInstance = e), r
            }), proto.proto.CryptoDeleteClaimTransactionBody.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.CryptoDeleteClaimTransactionBody;
                return proto.proto.CryptoDeleteClaimTransactionBody.deserializeBinaryFromReader(o, e)
            }, proto.proto.CryptoDeleteClaimTransactionBody.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new i.AccountID;
                            e.readMessage(o, i.AccountID.deserializeBinaryFromReader), t.setAccountidtodeletefrom(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setHashtodelete(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.CryptoDeleteClaimTransactionBody.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.CryptoDeleteClaimTransactionBody.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.CryptoDeleteClaimTransactionBody.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getAccountidtodeletefrom()) && e.writeMessage(1, o, i.AccountID.serializeBinaryToWriter), (o = t.getHashtodelete_asU8()).length > 0 && e.writeBytes(2, o)
            }, proto.proto.CryptoDeleteClaimTransactionBody.prototype.getAccountidtodeletefrom = function() {
                return r.Message.getWrapperField(this, i.AccountID, 1)
            }, proto.proto.CryptoDeleteClaimTransactionBody.prototype.setAccountidtodeletefrom = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.CryptoDeleteClaimTransactionBody.prototype.clearAccountidtodeletefrom = function() {
                return this.setAccountidtodeletefrom(void 0)
            }, proto.proto.CryptoDeleteClaimTransactionBody.prototype.hasAccountidtodeletefrom = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.CryptoDeleteClaimTransactionBody.prototype.getHashtodelete = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.proto.CryptoDeleteClaimTransactionBody.prototype.getHashtodelete_asB64 = function() {
                return r.Message.bytesAsB64(this.getHashtodelete())
            }, proto.proto.CryptoDeleteClaimTransactionBody.prototype.getHashtodelete_asU8 = function() {
                return r.Message.bytesAsU8(this.getHashtodelete())
            }, proto.proto.CryptoDeleteClaimTransactionBody.prototype.setHashtodelete = function(t) {
                return r.Message.setProto3BytesField(this, 2, t)
            }, n.object.extend(e, proto.proto)
        },
        616: function(t, e, o) {
            var r = o(28),
                n = r,
                a = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i);
            var s = o(198);
            n.object.extend(proto, s), n.exportSymbol("proto.proto.Claim", null, a), n.exportSymbol("proto.proto.CryptoAddClaimTransactionBody", null, a), proto.proto.Claim = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.Claim, r.Message), n.DEBUG && !COMPILED && (proto.proto.Claim.displayName = "proto.proto.Claim"), proto.proto.CryptoAddClaimTransactionBody = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, n.inherits(proto.proto.CryptoAddClaimTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.CryptoAddClaimTransactionBody.displayName = "proto.proto.CryptoAddClaimTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.Claim.prototype.toObject = function(t) {
                return proto.proto.Claim.toObject(t, this)
            }, proto.proto.Claim.toObject = function(t, e) {
                var o, r = {
                    accountid: (o = e.getAccountid()) && i.AccountID.toObject(t, o),
                    hash: e.getHash_asB64(),
                    keys: (o = e.getKeys()) && i.KeyList.toObject(t, o),
                    claimduration: (o = e.getClaimduration()) && s.Duration.toObject(t, o)
                };
                return t && (r.$jspbMessageInstance = e), r
            }), proto.proto.Claim.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.Claim;
                return proto.proto.Claim.deserializeBinaryFromReader(o, e)
            }, proto.proto.Claim.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 1:
                            var o = new i.AccountID;
                            e.readMessage(o, i.AccountID.deserializeBinaryFromReader), t.setAccountid(o);
                            break;
                        case 2:
                            o = e.readBytes();
                            t.setHash(o);
                            break;
                        case 3:
                            o = new i.KeyList;
                            e.readMessage(o, i.KeyList.deserializeBinaryFromReader), t.setKeys(o);
                            break;
                        case 5:
                            o = new s.Duration;
                            e.readMessage(o, s.Duration.deserializeBinaryFromReader), t.setClaimduration(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.Claim.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.Claim.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.Claim.serializeBinaryToWriter = function(t, e) {
                var o = void 0;
                null != (o = t.getAccountid()) && e.writeMessage(1, o, i.AccountID.serializeBinaryToWriter), (o = t.getHash_asU8()).length > 0 && e.writeBytes(2, o), null != (o = t.getKeys()) && e.writeMessage(3, o, i.KeyList.serializeBinaryToWriter), null != (o = t.getClaimduration()) && e.writeMessage(5, o, s.Duration.serializeBinaryToWriter)
            }, proto.proto.Claim.prototype.getAccountid = function() {
                return r.Message.getWrapperField(this, i.AccountID, 1)
            }, proto.proto.Claim.prototype.setAccountid = function(t) {
                return r.Message.setWrapperField(this, 1, t)
            }, proto.proto.Claim.prototype.clearAccountid = function() {
                return this.setAccountid(void 0)
            }, proto.proto.Claim.prototype.hasAccountid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.Claim.prototype.getHash = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.proto.Claim.prototype.getHash_asB64 = function() {
                return r.Message.bytesAsB64(this.getHash())
            }, proto.proto.Claim.prototype.getHash_asU8 = function() {
                return r.Message.bytesAsU8(this.getHash())
            }, proto.proto.Claim.prototype.setHash = function(t) {
                return r.Message.setProto3BytesField(this, 2, t)
            }, proto.proto.Claim.prototype.getKeys = function() {
                return r.Message.getWrapperField(this, i.KeyList, 3)
            }, proto.proto.Claim.prototype.setKeys = function(t) {
                return r.Message.setWrapperField(this, 3, t)
            }, proto.proto.Claim.prototype.clearKeys = function() {
                return this.setKeys(void 0)
            }, proto.proto.Claim.prototype.hasKeys = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.Claim.prototype.getClaimduration = function() {
                return r.Message.getWrapperField(this, s.Duration, 5)
            }, proto.proto.Claim.prototype.setClaimduration = function(t) {
                return r.Message.setWrapperField(this, 5, t)
            }, proto.proto.Claim.prototype.clearClaimduration = function() {
                return this.setClaimduration(void 0)
            }, proto.proto.Claim.prototype.hasClaimduration = function() {
                return null != r.Message.getField(this, 5)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.CryptoAddClaimTransactionBody.prototype.toObject = function(t) {
                return proto.proto.CryptoAddClaimTransactionBody.toObject(t, this)
            }, proto.proto.CryptoAddClaimTransactionBody.toObject = function(t, e) {
                var o, r = {
                    claim: (o = e.getClaim()) && proto.proto.Claim.toObject(t, o)
                };
                return t && (r.$jspbMessageInstance = e), r
            }), proto.proto.CryptoAddClaimTransactionBody.deserializeBinary = function(t) {
                var e = new r.BinaryReader(t),
                    o = new proto.proto.CryptoAddClaimTransactionBody;
                return proto.proto.CryptoAddClaimTransactionBody.deserializeBinaryFromReader(o, e)
            }, proto.proto.CryptoAddClaimTransactionBody.deserializeBinaryFromReader = function(t, e) {
                for (; e.nextField() && !e.isEndGroup();) {
                    switch (e.getFieldNumber()) {
                        case 3:
                            var o = new proto.proto.Claim;
                            e.readMessage(o, proto.proto.Claim.deserializeBinaryFromReader), t.setClaim(o);
                            break;
                        default:
                            e.skipField()
                    }
                }
                return t
            }, proto.proto.CryptoAddClaimTransactionBody.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.proto.CryptoAddClaimTransactionBody.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.proto.CryptoAddClaimTransactionBody.serializeBinaryToWriter = function(t, e) {
                var o;
                null != (o = t.getClaim()) && e.writeMessage(3, o, proto.proto.Claim.serializeBinaryToWriter)
            }, proto.proto.CryptoAddClaimTransactionBody.prototype.getClaim = function() {
                return r.Message.getWrapperField(this, proto.proto.Claim, 3)
            }, proto.proto.CryptoAddClaimTransactionBody.prototype.setClaim = function(t) {
                return r.Message.setWrapperField(this, 3, t)
            }, proto.proto.CryptoAddClaimTransactionBody.prototype.clearClaim = function() {
                return this.setClaim(void 0)
            }, proto.proto.CryptoAddClaimTransactionBody.prototype.hasClaim = function() {
                return null != r.Message.getField(this, 3)
            }, n.object.extend(e, proto.proto)
        }
    }
]);