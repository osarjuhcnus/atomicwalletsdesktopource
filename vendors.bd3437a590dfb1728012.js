(window.webpackJsonp = window.webpackJsonp || []).push([
    [35], {
        1054: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i);
            var a = o(64);
            n.object.extend(proto, a);
            var p = o(119);
            n.object.extend(proto, p);
            var u = o(3258);
            n.object.extend(proto, u);
            var c = o(3259);
            n.object.extend(proto, c);
            var l = o(3260);
            n.object.extend(proto, l), n.exportSymbol("proto.proto.ConsensusGetTopicInfoQuery", null, s), n.exportSymbol("proto.proto.ConsensusGetTopicInfoResponse", null, s), proto.proto.ConsensusGetTopicInfoQuery = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ConsensusGetTopicInfoQuery, r.Message), n.DEBUG && !COMPILED && (proto.proto.ConsensusGetTopicInfoQuery.displayName = "proto.proto.ConsensusGetTopicInfoQuery"), proto.proto.ConsensusGetTopicInfoResponse = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ConsensusGetTopicInfoResponse, r.Message), n.DEBUG && !COMPILED && (proto.proto.ConsensusGetTopicInfoResponse.displayName = "proto.proto.ConsensusGetTopicInfoResponse"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ConsensusGetTopicInfoQuery.prototype.toObject = function(e) {
                return proto.proto.ConsensusGetTopicInfoQuery.toObject(e, this)
            }, proto.proto.ConsensusGetTopicInfoQuery.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && a.QueryHeader.toObject(e, o),
                    topicid: (o = t.getTopicid()) && i.TopicID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.ConsensusGetTopicInfoQuery.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ConsensusGetTopicInfoQuery;
                return proto.proto.ConsensusGetTopicInfoQuery.deserializeBinaryFromReader(o, t)
            }, proto.proto.ConsensusGetTopicInfoQuery.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.QueryHeader;
                            t.readMessage(o, a.QueryHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new i.TopicID;
                            t.readMessage(o, i.TopicID.deserializeBinaryFromReader), e.setTopicid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ConsensusGetTopicInfoQuery.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ConsensusGetTopicInfoQuery.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ConsensusGetTopicInfoQuery.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, a.QueryHeader.serializeBinaryToWriter), null != (o = e.getTopicid()) && t.writeMessage(2, o, i.TopicID.serializeBinaryToWriter)
            }, proto.proto.ConsensusGetTopicInfoQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, a.QueryHeader, 1)
            }, proto.proto.ConsensusGetTopicInfoQuery.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.ConsensusGetTopicInfoQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.ConsensusGetTopicInfoQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ConsensusGetTopicInfoQuery.prototype.getTopicid = function() {
                return r.Message.getWrapperField(this, i.TopicID, 2)
            }, proto.proto.ConsensusGetTopicInfoQuery.prototype.setTopicid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.ConsensusGetTopicInfoQuery.prototype.clearTopicid = function() {
                return this.setTopicid(void 0)
            }, proto.proto.ConsensusGetTopicInfoQuery.prototype.hasTopicid = function() {
                return null != r.Message.getField(this, 2)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.ConsensusGetTopicInfoResponse.prototype.toObject = function(e) {
                return proto.proto.ConsensusGetTopicInfoResponse.toObject(e, this)
            }, proto.proto.ConsensusGetTopicInfoResponse.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && p.ResponseHeader.toObject(e, o),
                    topicid: (o = t.getTopicid()) && i.TopicID.toObject(e, o),
                    topicdefinition: (o = t.getTopicdefinition()) && u.ConsensusTopicDefinition.toObject(e, o),
                    topicstate: (o = t.getTopicstate()) && l.ConsensusTopicState.toObject(e, o),
                    topicinfo: (o = t.getTopicinfo()) && c.ConsensusTopicInfo.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.ConsensusGetTopicInfoResponse.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ConsensusGetTopicInfoResponse;
                return proto.proto.ConsensusGetTopicInfoResponse.deserializeBinaryFromReader(o, t)
            }, proto.proto.ConsensusGetTopicInfoResponse.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new p.ResponseHeader;
                            t.readMessage(o, p.ResponseHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new i.TopicID;
                            t.readMessage(o, i.TopicID.deserializeBinaryFromReader), e.setTopicid(o);
                            break;
                        case 3:
                            o = new u.ConsensusTopicDefinition;
                            t.readMessage(o, u.ConsensusTopicDefinition.deserializeBinaryFromReader), e.setTopicdefinition(o);
                            break;
                        case 4:
                            o = new l.ConsensusTopicState;
                            t.readMessage(o, l.ConsensusTopicState.deserializeBinaryFromReader), e.setTopicstate(o);
                            break;
                        case 5:
                            o = new c.ConsensusTopicInfo;
                            t.readMessage(o, c.ConsensusTopicInfo.deserializeBinaryFromReader), e.setTopicinfo(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ConsensusGetTopicInfoResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ConsensusGetTopicInfoResponse.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, p.ResponseHeader.serializeBinaryToWriter), null != (o = e.getTopicid()) && t.writeMessage(2, o, i.TopicID.serializeBinaryToWriter), null != (o = e.getTopicdefinition()) && t.writeMessage(3, o, u.ConsensusTopicDefinition.serializeBinaryToWriter), null != (o = e.getTopicstate()) && t.writeMessage(4, o, l.ConsensusTopicState.serializeBinaryToWriter), null != (o = e.getTopicinfo()) && t.writeMessage(5, o, c.ConsensusTopicInfo.serializeBinaryToWriter)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, p.ResponseHeader, 1)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.getTopicid = function() {
                return r.Message.getWrapperField(this, i.TopicID, 2)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.setTopicid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.clearTopicid = function() {
                return this.setTopicid(void 0)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.hasTopicid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.getTopicdefinition = function() {
                return r.Message.getWrapperField(this, u.ConsensusTopicDefinition, 3)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.setTopicdefinition = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.clearTopicdefinition = function() {
                return this.setTopicdefinition(void 0)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.hasTopicdefinition = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.getTopicstate = function() {
                return r.Message.getWrapperField(this, l.ConsensusTopicState, 4)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.setTopicstate = function(e) {
                return r.Message.setWrapperField(this, 4, e)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.clearTopicstate = function() {
                return this.setTopicstate(void 0)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.hasTopicstate = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.getTopicinfo = function() {
                return r.Message.getWrapperField(this, c.ConsensusTopicInfo, 5)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.setTopicinfo = function(e) {
                return r.Message.setWrapperField(this, 5, e)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.clearTopicinfo = function() {
                return this.setTopicinfo(void 0)
            }, proto.proto.ConsensusGetTopicInfoResponse.prototype.hasTopicinfo = function() {
                return null != r.Message.getField(this, 5)
            }, n.object.extend(t, proto.proto)
        },
        1778: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i), n.exportSymbol("proto.proto.ContractCallTransactionBody", null, s), proto.proto.ContractCallTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ContractCallTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractCallTransactionBody.displayName = "proto.proto.ContractCallTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractCallTransactionBody.prototype.toObject = function(e) {
                return proto.proto.ContractCallTransactionBody.toObject(e, this)
            }, proto.proto.ContractCallTransactionBody.toObject = function(e, t) {
                var o, n = {
                    contractid: (o = t.getContractid()) && i.ContractID.toObject(e, o),
                    gas: r.Message.getFieldWithDefault(t, 2, "0"),
                    amount: r.Message.getFieldWithDefault(t, 3, "0"),
                    functionparameters: t.getFunctionparameters_asB64()
                };
                return e && (n.$jspbMessageInstance = t), n
            }), proto.proto.ContractCallTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ContractCallTransactionBody;
                return proto.proto.ContractCallTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.ContractCallTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new i.ContractID;
                            t.readMessage(o, i.ContractID.deserializeBinaryFromReader), e.setContractid(o);
                            break;
                        case 2:
                            o = t.readInt64String();
                            e.setGas(o);
                            break;
                        case 3:
                            o = t.readInt64String();
                            e.setAmount(o);
                            break;
                        case 4:
                            o = t.readBytes();
                            e.setFunctionparameters(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ContractCallTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ContractCallTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ContractCallTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getContractid()) && t.writeMessage(1, o, i.ContractID.serializeBinaryToWriter), o = e.getGas(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getAmount(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getFunctionparameters_asU8()).length > 0 && t.writeBytes(4, o)
            }, proto.proto.ContractCallTransactionBody.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, i.ContractID, 1)
            }, proto.proto.ContractCallTransactionBody.prototype.setContractid = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.ContractCallTransactionBody.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.ContractCallTransactionBody.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractCallTransactionBody.prototype.getGas = function() {
                return r.Message.getFieldWithDefault(this, 2, "0")
            }, proto.proto.ContractCallTransactionBody.prototype.setGas = function(e) {
                return r.Message.setProto3StringIntField(this, 2, e)
            }, proto.proto.ContractCallTransactionBody.prototype.getAmount = function() {
                return r.Message.getFieldWithDefault(this, 3, "0")
            }, proto.proto.ContractCallTransactionBody.prototype.setAmount = function(e) {
                return r.Message.setProto3StringIntField(this, 3, e)
            }, proto.proto.ContractCallTransactionBody.prototype.getFunctionparameters = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.proto.ContractCallTransactionBody.prototype.getFunctionparameters_asB64 = function() {
                return r.Message.bytesAsB64(this.getFunctionparameters())
            }, proto.proto.ContractCallTransactionBody.prototype.getFunctionparameters_asU8 = function() {
                return r.Message.bytesAsU8(this.getFunctionparameters())
            }, proto.proto.ContractCallTransactionBody.prototype.setFunctionparameters = function(e) {
                return r.Message.setProto3BytesField(this, 4, e)
            }, n.object.extend(t, proto.proto)
        },
        1789: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i);
            var a = o(198);
            n.object.extend(proto, a);
            var p = o(105);
            n.object.extend(proto, p), n.exportSymbol("proto.proto.ConsensusCreateTopicTransactionBody", null, s), proto.proto.ConsensusCreateTopicTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ConsensusCreateTopicTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.ConsensusCreateTopicTransactionBody.displayName = "proto.proto.ConsensusCreateTopicTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ConsensusCreateTopicTransactionBody.prototype.toObject = function(e) {
                return proto.proto.ConsensusCreateTopicTransactionBody.toObject(e, this)
            }, proto.proto.ConsensusCreateTopicTransactionBody.toObject = function(e, t) {
                var o, n = {
                    memo: r.Message.getFieldWithDefault(t, 1, ""),
                    adminkey: (o = t.getAdminkey()) && i.Key.toObject(e, o),
                    submitkey: (o = t.getSubmitkey()) && i.Key.toObject(e, o),
                    validstarttime: (o = t.getValidstarttime()) && p.Timestamp.toObject(e, o),
                    expirationtime: (o = t.getExpirationtime()) && p.Timestamp.toObject(e, o),
                    autorenewperiod: (o = t.getAutorenewperiod()) && a.Duration.toObject(e, o),
                    autorenewaccount: (o = t.getAutorenewaccount()) && i.AccountID.toObject(e, o)
                };
                return e && (n.$jspbMessageInstance = t), n
            }), proto.proto.ConsensusCreateTopicTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ConsensusCreateTopicTransactionBody;
                return proto.proto.ConsensusCreateTopicTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.ConsensusCreateTopicTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = t.readString();
                            e.setMemo(o);
                            break;
                        case 2:
                            o = new i.Key;
                            t.readMessage(o, i.Key.deserializeBinaryFromReader), e.setAdminkey(o);
                            break;
                        case 3:
                            o = new i.Key;
                            t.readMessage(o, i.Key.deserializeBinaryFromReader), e.setSubmitkey(o);
                            break;
                        case 4:
                            o = new p.Timestamp;
                            t.readMessage(o, p.Timestamp.deserializeBinaryFromReader), e.setValidstarttime(o);
                            break;
                        case 5:
                            o = new p.Timestamp;
                            t.readMessage(o, p.Timestamp.deserializeBinaryFromReader), e.setExpirationtime(o);
                            break;
                        case 6:
                            o = new a.Duration;
                            t.readMessage(o, a.Duration.deserializeBinaryFromReader), e.setAutorenewperiod(o);
                            break;
                        case 7:
                            o = new i.AccountID;
                            t.readMessage(o, i.AccountID.deserializeBinaryFromReader), e.setAutorenewaccount(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ConsensusCreateTopicTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ConsensusCreateTopicTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                (o = e.getMemo()).length > 0 && t.writeString(1, o), null != (o = e.getAdminkey()) && t.writeMessage(2, o, i.Key.serializeBinaryToWriter), null != (o = e.getSubmitkey()) && t.writeMessage(3, o, i.Key.serializeBinaryToWriter), null != (o = e.getValidstarttime()) && t.writeMessage(4, o, p.Timestamp.serializeBinaryToWriter), null != (o = e.getExpirationtime()) && t.writeMessage(5, o, p.Timestamp.serializeBinaryToWriter), null != (o = e.getAutorenewperiod()) && t.writeMessage(6, o, a.Duration.serializeBinaryToWriter), null != (o = e.getAutorenewaccount()) && t.writeMessage(7, o, i.AccountID.serializeBinaryToWriter)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.getMemo = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.setMemo = function(e) {
                return r.Message.setProto3StringField(this, 1, e)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.getAdminkey = function() {
                return r.Message.getWrapperField(this, i.Key, 2)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.setAdminkey = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.clearAdminkey = function() {
                return this.setAdminkey(void 0)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.hasAdminkey = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.getSubmitkey = function() {
                return r.Message.getWrapperField(this, i.Key, 3)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.setSubmitkey = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.clearSubmitkey = function() {
                return this.setSubmitkey(void 0)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.hasSubmitkey = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.getValidstarttime = function() {
                return r.Message.getWrapperField(this, p.Timestamp, 4)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.setValidstarttime = function(e) {
                return r.Message.setWrapperField(this, 4, e)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.clearValidstarttime = function() {
                return this.setValidstarttime(void 0)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.hasValidstarttime = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.getExpirationtime = function() {
                return r.Message.getWrapperField(this, p.Timestamp, 5)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.setExpirationtime = function(e) {
                return r.Message.setWrapperField(this, 5, e)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.clearExpirationtime = function() {
                return this.setExpirationtime(void 0)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.hasExpirationtime = function() {
                return null != r.Message.getField(this, 5)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.getAutorenewperiod = function() {
                return r.Message.getWrapperField(this, a.Duration, 6)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.setAutorenewperiod = function(e) {
                return r.Message.setWrapperField(this, 6, e)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.clearAutorenewperiod = function() {
                return this.setAutorenewperiod(void 0)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.hasAutorenewperiod = function() {
                return null != r.Message.getField(this, 6)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.getAutorenewaccount = function() {
                return r.Message.getWrapperField(this, i.AccountID, 7)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.setAutorenewaccount = function(e) {
                return r.Message.setWrapperField(this, 7, e)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.clearAutorenewaccount = function() {
                return this.setAutorenewaccount(void 0)
            }, proto.proto.ConsensusCreateTopicTransactionBody.prototype.hasAutorenewaccount = function() {
                return null != r.Message.getField(this, 7)
            }, n.object.extend(t, proto.proto)
        },
        1790: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                i = o(499);
            n.object.extend(proto, i);
            var a = o(36);
            n.object.extend(proto, a);
            var p = o(198);
            n.object.extend(proto, p);
            var u = o(105);
            n.object.extend(proto, u), n.exportSymbol("proto.proto.ConsensusUpdateTopicTransactionBody", null, s), proto.proto.ConsensusUpdateTopicTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ConsensusUpdateTopicTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.ConsensusUpdateTopicTransactionBody.displayName = "proto.proto.ConsensusUpdateTopicTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ConsensusUpdateTopicTransactionBody.prototype.toObject = function(e) {
                return proto.proto.ConsensusUpdateTopicTransactionBody.toObject(e, this)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.toObject = function(e, t) {
                var o, r = {
                    topicid: (o = t.getTopicid()) && a.TopicID.toObject(e, o),
                    memo: (o = t.getMemo()) && i.StringValue.toObject(e, o),
                    validstarttime: (o = t.getValidstarttime()) && u.Timestamp.toObject(e, o),
                    expirationtime: (o = t.getExpirationtime()) && u.Timestamp.toObject(e, o),
                    adminkey: (o = t.getAdminkey()) && a.Key.toObject(e, o),
                    submitkey: (o = t.getSubmitkey()) && a.Key.toObject(e, o),
                    autorenewperiod: (o = t.getAutorenewperiod()) && p.Duration.toObject(e, o),
                    autorenewaccount: (o = t.getAutorenewaccount()) && a.AccountID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.ConsensusUpdateTopicTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ConsensusUpdateTopicTransactionBody;
                return proto.proto.ConsensusUpdateTopicTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.TopicID;
                            t.readMessage(o, a.TopicID.deserializeBinaryFromReader), e.setTopicid(o);
                            break;
                        case 2:
                            o = new i.StringValue;
                            t.readMessage(o, i.StringValue.deserializeBinaryFromReader), e.setMemo(o);
                            break;
                        case 3:
                            o = new u.Timestamp;
                            t.readMessage(o, u.Timestamp.deserializeBinaryFromReader), e.setValidstarttime(o);
                            break;
                        case 4:
                            o = new u.Timestamp;
                            t.readMessage(o, u.Timestamp.deserializeBinaryFromReader), e.setExpirationtime(o);
                            break;
                        case 6:
                            o = new a.Key;
                            t.readMessage(o, a.Key.deserializeBinaryFromReader), e.setAdminkey(o);
                            break;
                        case 7:
                            o = new a.Key;
                            t.readMessage(o, a.Key.deserializeBinaryFromReader), e.setSubmitkey(o);
                            break;
                        case 8:
                            o = new p.Duration;
                            t.readMessage(o, p.Duration.deserializeBinaryFromReader), e.setAutorenewperiod(o);
                            break;
                        case 9:
                            o = new a.AccountID;
                            t.readMessage(o, a.AccountID.deserializeBinaryFromReader), e.setAutorenewaccount(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ConsensusUpdateTopicTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ConsensusUpdateTopicTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getTopicid()) && t.writeMessage(1, o, a.TopicID.serializeBinaryToWriter), null != (o = e.getMemo()) && t.writeMessage(2, o, i.StringValue.serializeBinaryToWriter), null != (o = e.getValidstarttime()) && t.writeMessage(3, o, u.Timestamp.serializeBinaryToWriter), null != (o = e.getExpirationtime()) && t.writeMessage(4, o, u.Timestamp.serializeBinaryToWriter), null != (o = e.getAdminkey()) && t.writeMessage(6, o, a.Key.serializeBinaryToWriter), null != (o = e.getSubmitkey()) && t.writeMessage(7, o, a.Key.serializeBinaryToWriter), null != (o = e.getAutorenewperiod()) && t.writeMessage(8, o, p.Duration.serializeBinaryToWriter), null != (o = e.getAutorenewaccount()) && t.writeMessage(9, o, a.AccountID.serializeBinaryToWriter)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.getTopicid = function() {
                return r.Message.getWrapperField(this, a.TopicID, 1)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.setTopicid = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.clearTopicid = function() {
                return this.setTopicid(void 0)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.hasTopicid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.getMemo = function() {
                return r.Message.getWrapperField(this, i.StringValue, 2)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.setMemo = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.clearMemo = function() {
                return this.setMemo(void 0)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.hasMemo = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.getValidstarttime = function() {
                return r.Message.getWrapperField(this, u.Timestamp, 3)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.setValidstarttime = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.clearValidstarttime = function() {
                return this.setValidstarttime(void 0)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.hasValidstarttime = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.getExpirationtime = function() {
                return r.Message.getWrapperField(this, u.Timestamp, 4)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.setExpirationtime = function(e) {
                return r.Message.setWrapperField(this, 4, e)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.clearExpirationtime = function() {
                return this.setExpirationtime(void 0)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.hasExpirationtime = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.getAdminkey = function() {
                return r.Message.getWrapperField(this, a.Key, 6)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.setAdminkey = function(e) {
                return r.Message.setWrapperField(this, 6, e)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.clearAdminkey = function() {
                return this.setAdminkey(void 0)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.hasAdminkey = function() {
                return null != r.Message.getField(this, 6)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.getSubmitkey = function() {
                return r.Message.getWrapperField(this, a.Key, 7)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.setSubmitkey = function(e) {
                return r.Message.setWrapperField(this, 7, e)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.clearSubmitkey = function() {
                return this.setSubmitkey(void 0)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.hasSubmitkey = function() {
                return null != r.Message.getField(this, 7)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.getAutorenewperiod = function() {
                return r.Message.getWrapperField(this, p.Duration, 8)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.setAutorenewperiod = function(e) {
                return r.Message.setWrapperField(this, 8, e)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.clearAutorenewperiod = function() {
                return this.setAutorenewperiod(void 0)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.hasAutorenewperiod = function() {
                return null != r.Message.getField(this, 8)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.getAutorenewaccount = function() {
                return r.Message.getWrapperField(this, a.AccountID, 9)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.setAutorenewaccount = function(e) {
                return r.Message.setWrapperField(this, 9, e)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.clearAutorenewaccount = function() {
                return this.setAutorenewaccount(void 0)
            }, proto.proto.ConsensusUpdateTopicTransactionBody.prototype.hasAutorenewaccount = function() {
                return null != r.Message.getField(this, 9)
            }, n.object.extend(t, proto.proto)
        },
        1791: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i), n.exportSymbol("proto.proto.ConsensusDeleteTopicTransactionBody", null, s), proto.proto.ConsensusDeleteTopicTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ConsensusDeleteTopicTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.ConsensusDeleteTopicTransactionBody.displayName = "proto.proto.ConsensusDeleteTopicTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ConsensusDeleteTopicTransactionBody.prototype.toObject = function(e) {
                return proto.proto.ConsensusDeleteTopicTransactionBody.toObject(e, this)
            }, proto.proto.ConsensusDeleteTopicTransactionBody.toObject = function(e, t) {
                var o, r = {
                    topicid: (o = t.getTopicid()) && i.TopicID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.ConsensusDeleteTopicTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ConsensusDeleteTopicTransactionBody;
                return proto.proto.ConsensusDeleteTopicTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.ConsensusDeleteTopicTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new i.TopicID;
                            t.readMessage(o, i.TopicID.deserializeBinaryFromReader), e.setTopicid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ConsensusDeleteTopicTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ConsensusDeleteTopicTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ConsensusDeleteTopicTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o;
                null != (o = e.getTopicid()) && t.writeMessage(1, o, i.TopicID.serializeBinaryToWriter)
            }, proto.proto.ConsensusDeleteTopicTransactionBody.prototype.getTopicid = function() {
                return r.Message.getWrapperField(this, i.TopicID, 1)
            }, proto.proto.ConsensusDeleteTopicTransactionBody.prototype.setTopicid = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.ConsensusDeleteTopicTransactionBody.prototype.clearTopicid = function() {
                return this.setTopicid(void 0)
            }, proto.proto.ConsensusDeleteTopicTransactionBody.prototype.hasTopicid = function() {
                return null != r.Message.getField(this, 1)
            }, n.object.extend(t, proto.proto)
        },
        1792: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i), n.exportSymbol("proto.proto.ConsensusSubmitMessageTransactionBody", null, s), proto.proto.ConsensusSubmitMessageTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ConsensusSubmitMessageTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.ConsensusSubmitMessageTransactionBody.displayName = "proto.proto.ConsensusSubmitMessageTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ConsensusSubmitMessageTransactionBody.prototype.toObject = function(e) {
                return proto.proto.ConsensusSubmitMessageTransactionBody.toObject(e, this)
            }, proto.proto.ConsensusSubmitMessageTransactionBody.toObject = function(e, t) {
                var o, r = {
                    topicid: (o = t.getTopicid()) && i.TopicID.toObject(e, o),
                    message: t.getMessage_asB64()
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.ConsensusSubmitMessageTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ConsensusSubmitMessageTransactionBody;
                return proto.proto.ConsensusSubmitMessageTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.ConsensusSubmitMessageTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new i.TopicID;
                            t.readMessage(o, i.TopicID.deserializeBinaryFromReader), e.setTopicid(o);
                            break;
                        case 2:
                            o = t.readBytes();
                            e.setMessage(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ConsensusSubmitMessageTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ConsensusSubmitMessageTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ConsensusSubmitMessageTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getTopicid()) && t.writeMessage(1, o, i.TopicID.serializeBinaryToWriter), (o = e.getMessage_asU8()).length > 0 && t.writeBytes(2, o)
            }, proto.proto.ConsensusSubmitMessageTransactionBody.prototype.getTopicid = function() {
                return r.Message.getWrapperField(this, i.TopicID, 1)
            }, proto.proto.ConsensusSubmitMessageTransactionBody.prototype.setTopicid = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.ConsensusSubmitMessageTransactionBody.prototype.clearTopicid = function() {
                return this.setTopicid(void 0)
            }, proto.proto.ConsensusSubmitMessageTransactionBody.prototype.hasTopicid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ConsensusSubmitMessageTransactionBody.prototype.getMessage = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.proto.ConsensusSubmitMessageTransactionBody.prototype.getMessage_asB64 = function() {
                return r.Message.bytesAsB64(this.getMessage())
            }, proto.proto.ConsensusSubmitMessageTransactionBody.prototype.getMessage_asU8 = function() {
                return r.Message.bytesAsU8(this.getMessage())
            }, proto.proto.ConsensusSubmitMessageTransactionBody.prototype.setMessage = function(e) {
                return r.Message.setProto3BytesField(this, 2, e)
            }, n.object.extend(t, proto.proto)
        },
        3258: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i);
            var a = o(105);
            n.object.extend(proto, a), n.exportSymbol("proto.proto.ConsensusTopicDefinition", null, s), proto.proto.ConsensusTopicDefinition = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ConsensusTopicDefinition, r.Message), n.DEBUG && !COMPILED && (proto.proto.ConsensusTopicDefinition.displayName = "proto.proto.ConsensusTopicDefinition"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ConsensusTopicDefinition.prototype.toObject = function(e) {
                return proto.proto.ConsensusTopicDefinition.toObject(e, this)
            }, proto.proto.ConsensusTopicDefinition.toObject = function(e, t) {
                var o, n = {
                    memo: r.Message.getFieldWithDefault(t, 1, ""),
                    validstarttime: (o = t.getValidstarttime()) && a.Timestamp.toObject(e, o),
                    expirationtime: (o = t.getExpirationtime()) && a.Timestamp.toObject(e, o),
                    adminkey: (o = t.getAdminkey()) && i.Key.toObject(e, o),
                    submitkey: (o = t.getSubmitkey()) && i.Key.toObject(e, o),
                    lastupdatetime: (o = t.getLastupdatetime()) && a.Timestamp.toObject(e, o),
                    creationtime: (o = t.getCreationtime()) && a.Timestamp.toObject(e, o)
                };
                return e && (n.$jspbMessageInstance = t), n
            }), proto.proto.ConsensusTopicDefinition.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ConsensusTopicDefinition;
                return proto.proto.ConsensusTopicDefinition.deserializeBinaryFromReader(o, t)
            }, proto.proto.ConsensusTopicDefinition.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = t.readString();
                            e.setMemo(o);
                            break;
                        case 2:
                            o = new a.Timestamp;
                            t.readMessage(o, a.Timestamp.deserializeBinaryFromReader), e.setValidstarttime(o);
                            break;
                        case 3:
                            o = new a.Timestamp;
                            t.readMessage(o, a.Timestamp.deserializeBinaryFromReader), e.setExpirationtime(o);
                            break;
                        case 4:
                            o = new i.Key;
                            t.readMessage(o, i.Key.deserializeBinaryFromReader), e.setAdminkey(o);
                            break;
                        case 5:
                            o = new i.Key;
                            t.readMessage(o, i.Key.deserializeBinaryFromReader), e.setSubmitkey(o);
                            break;
                        case 6:
                            o = new a.Timestamp;
                            t.readMessage(o, a.Timestamp.deserializeBinaryFromReader), e.setLastupdatetime(o);
                            break;
                        case 7:
                            o = new a.Timestamp;
                            t.readMessage(o, a.Timestamp.deserializeBinaryFromReader), e.setCreationtime(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ConsensusTopicDefinition.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ConsensusTopicDefinition.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ConsensusTopicDefinition.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                (o = e.getMemo()).length > 0 && t.writeString(1, o), null != (o = e.getValidstarttime()) && t.writeMessage(2, o, a.Timestamp.serializeBinaryToWriter), null != (o = e.getExpirationtime()) && t.writeMessage(3, o, a.Timestamp.serializeBinaryToWriter), null != (o = e.getAdminkey()) && t.writeMessage(4, o, i.Key.serializeBinaryToWriter), null != (o = e.getSubmitkey()) && t.writeMessage(5, o, i.Key.serializeBinaryToWriter), null != (o = e.getLastupdatetime()) && t.writeMessage(6, o, a.Timestamp.serializeBinaryToWriter), null != (o = e.getCreationtime()) && t.writeMessage(7, o, a.Timestamp.serializeBinaryToWriter)
            }, proto.proto.ConsensusTopicDefinition.prototype.getMemo = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.proto.ConsensusTopicDefinition.prototype.setMemo = function(e) {
                return r.Message.setProto3StringField(this, 1, e)
            }, proto.proto.ConsensusTopicDefinition.prototype.getValidstarttime = function() {
                return r.Message.getWrapperField(this, a.Timestamp, 2)
            }, proto.proto.ConsensusTopicDefinition.prototype.setValidstarttime = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.ConsensusTopicDefinition.prototype.clearValidstarttime = function() {
                return this.setValidstarttime(void 0)
            }, proto.proto.ConsensusTopicDefinition.prototype.hasValidstarttime = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.ConsensusTopicDefinition.prototype.getExpirationtime = function() {
                return r.Message.getWrapperField(this, a.Timestamp, 3)
            }, proto.proto.ConsensusTopicDefinition.prototype.setExpirationtime = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.ConsensusTopicDefinition.prototype.clearExpirationtime = function() {
                return this.setExpirationtime(void 0)
            }, proto.proto.ConsensusTopicDefinition.prototype.hasExpirationtime = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.ConsensusTopicDefinition.prototype.getAdminkey = function() {
                return r.Message.getWrapperField(this, i.Key, 4)
            }, proto.proto.ConsensusTopicDefinition.prototype.setAdminkey = function(e) {
                return r.Message.setWrapperField(this, 4, e)
            }, proto.proto.ConsensusTopicDefinition.prototype.clearAdminkey = function() {
                return this.setAdminkey(void 0)
            }, proto.proto.ConsensusTopicDefinition.prototype.hasAdminkey = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.ConsensusTopicDefinition.prototype.getSubmitkey = function() {
                return r.Message.getWrapperField(this, i.Key, 5)
            }, proto.proto.ConsensusTopicDefinition.prototype.setSubmitkey = function(e) {
                return r.Message.setWrapperField(this, 5, e)
            }, proto.proto.ConsensusTopicDefinition.prototype.clearSubmitkey = function() {
                return this.setSubmitkey(void 0)
            }, proto.proto.ConsensusTopicDefinition.prototype.hasSubmitkey = function() {
                return null != r.Message.getField(this, 5)
            }, proto.proto.ConsensusTopicDefinition.prototype.getLastupdatetime = function() {
                return r.Message.getWrapperField(this, a.Timestamp, 6)
            }, proto.proto.ConsensusTopicDefinition.prototype.setLastupdatetime = function(e) {
                return r.Message.setWrapperField(this, 6, e)
            }, proto.proto.ConsensusTopicDefinition.prototype.clearLastupdatetime = function() {
                return this.setLastupdatetime(void 0)
            }, proto.proto.ConsensusTopicDefinition.prototype.hasLastupdatetime = function() {
                return null != r.Message.getField(this, 6)
            }, proto.proto.ConsensusTopicDefinition.prototype.getCreationtime = function() {
                return r.Message.getWrapperField(this, a.Timestamp, 7)
            }, proto.proto.ConsensusTopicDefinition.prototype.setCreationtime = function(e) {
                return r.Message.setWrapperField(this, 7, e)
            }, proto.proto.ConsensusTopicDefinition.prototype.clearCreationtime = function() {
                return this.setCreationtime(void 0)
            }, proto.proto.ConsensusTopicDefinition.prototype.hasCreationtime = function() {
                return null != r.Message.getField(this, 7)
            }, n.object.extend(t, proto.proto)
        },
        3259: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i);
            var a = o(198);
            n.object.extend(proto, a);
            var p = o(105);
            n.object.extend(proto, p), n.exportSymbol("proto.proto.ConsensusTopicInfo", null, s), proto.proto.ConsensusTopicInfo = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ConsensusTopicInfo, r.Message), n.DEBUG && !COMPILED && (proto.proto.ConsensusTopicInfo.displayName = "proto.proto.ConsensusTopicInfo"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ConsensusTopicInfo.prototype.toObject = function(e) {
                return proto.proto.ConsensusTopicInfo.toObject(e, this)
            }, proto.proto.ConsensusTopicInfo.toObject = function(e, t) {
                var o, n = {
                    memo: r.Message.getFieldWithDefault(t, 1, ""),
                    runninghash: t.getRunninghash_asB64(),
                    sequencenumber: r.Message.getFieldWithDefault(t, 3, 0),
                    expirationtime: (o = t.getExpirationtime()) && p.Timestamp.toObject(e, o),
                    adminkey: (o = t.getAdminkey()) && i.Key.toObject(e, o),
                    submitkey: (o = t.getSubmitkey()) && i.Key.toObject(e, o),
                    autorenewperiod: (o = t.getAutorenewperiod()) && a.Duration.toObject(e, o),
                    autorenewaccount: (o = t.getAutorenewaccount()) && i.AccountID.toObject(e, o)
                };
                return e && (n.$jspbMessageInstance = t), n
            }), proto.proto.ConsensusTopicInfo.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ConsensusTopicInfo;
                return proto.proto.ConsensusTopicInfo.deserializeBinaryFromReader(o, t)
            }, proto.proto.ConsensusTopicInfo.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = t.readString();
                            e.setMemo(o);
                            break;
                        case 2:
                            o = t.readBytes();
                            e.setRunninghash(o);
                            break;
                        case 3:
                            o = t.readUint64();
                            e.setSequencenumber(o);
                            break;
                        case 4:
                            o = new p.Timestamp;
                            t.readMessage(o, p.Timestamp.deserializeBinaryFromReader), e.setExpirationtime(o);
                            break;
                        case 5:
                            o = new i.Key;
                            t.readMessage(o, i.Key.deserializeBinaryFromReader), e.setAdminkey(o);
                            break;
                        case 6:
                            o = new i.Key;
                            t.readMessage(o, i.Key.deserializeBinaryFromReader), e.setSubmitkey(o);
                            break;
                        case 7:
                            o = new a.Duration;
                            t.readMessage(o, a.Duration.deserializeBinaryFromReader), e.setAutorenewperiod(o);
                            break;
                        case 8:
                            o = new i.AccountID;
                            t.readMessage(o, i.AccountID.deserializeBinaryFromReader), e.setAutorenewaccount(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ConsensusTopicInfo.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ConsensusTopicInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ConsensusTopicInfo.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                (o = e.getMemo()).length > 0 && t.writeString(1, o), (o = e.getRunninghash_asU8()).length > 0 && t.writeBytes(2, o), 0 !== (o = e.getSequencenumber()) && t.writeUint64(3, o), null != (o = e.getExpirationtime()) && t.writeMessage(4, o, p.Timestamp.serializeBinaryToWriter), null != (o = e.getAdminkey()) && t.writeMessage(5, o, i.Key.serializeBinaryToWriter), null != (o = e.getSubmitkey()) && t.writeMessage(6, o, i.Key.serializeBinaryToWriter), null != (o = e.getAutorenewperiod()) && t.writeMessage(7, o, a.Duration.serializeBinaryToWriter), null != (o = e.getAutorenewaccount()) && t.writeMessage(8, o, i.AccountID.serializeBinaryToWriter)
            }, proto.proto.ConsensusTopicInfo.prototype.getMemo = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.proto.ConsensusTopicInfo.prototype.setMemo = function(e) {
                return r.Message.setProto3StringField(this, 1, e)
            }, proto.proto.ConsensusTopicInfo.prototype.getRunninghash = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.proto.ConsensusTopicInfo.prototype.getRunninghash_asB64 = function() {
                return r.Message.bytesAsB64(this.getRunninghash())
            }, proto.proto.ConsensusTopicInfo.prototype.getRunninghash_asU8 = function() {
                return r.Message.bytesAsU8(this.getRunninghash())
            }, proto.proto.ConsensusTopicInfo.prototype.setRunninghash = function(e) {
                return r.Message.setProto3BytesField(this, 2, e)
            }, proto.proto.ConsensusTopicInfo.prototype.getSequencenumber = function() {
                return r.Message.getFieldWithDefault(this, 3, 0)
            }, proto.proto.ConsensusTopicInfo.prototype.setSequencenumber = function(e) {
                return r.Message.setProto3IntField(this, 3, e)
            }, proto.proto.ConsensusTopicInfo.prototype.getExpirationtime = function() {
                return r.Message.getWrapperField(this, p.Timestamp, 4)
            }, proto.proto.ConsensusTopicInfo.prototype.setExpirationtime = function(e) {
                return r.Message.setWrapperField(this, 4, e)
            }, proto.proto.ConsensusTopicInfo.prototype.clearExpirationtime = function() {
                return this.setExpirationtime(void 0)
            }, proto.proto.ConsensusTopicInfo.prototype.hasExpirationtime = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.ConsensusTopicInfo.prototype.getAdminkey = function() {
                return r.Message.getWrapperField(this, i.Key, 5)
            }, proto.proto.ConsensusTopicInfo.prototype.setAdminkey = function(e) {
                return r.Message.setWrapperField(this, 5, e)
            }, proto.proto.ConsensusTopicInfo.prototype.clearAdminkey = function() {
                return this.setAdminkey(void 0)
            }, proto.proto.ConsensusTopicInfo.prototype.hasAdminkey = function() {
                return null != r.Message.getField(this, 5)
            }, proto.proto.ConsensusTopicInfo.prototype.getSubmitkey = function() {
                return r.Message.getWrapperField(this, i.Key, 6)
            }, proto.proto.ConsensusTopicInfo.prototype.setSubmitkey = function(e) {
                return r.Message.setWrapperField(this, 6, e)
            }, proto.proto.ConsensusTopicInfo.prototype.clearSubmitkey = function() {
                return this.setSubmitkey(void 0)
            }, proto.proto.ConsensusTopicInfo.prototype.hasSubmitkey = function() {
                return null != r.Message.getField(this, 6)
            }, proto.proto.ConsensusTopicInfo.prototype.getAutorenewperiod = function() {
                return r.Message.getWrapperField(this, a.Duration, 7)
            }, proto.proto.ConsensusTopicInfo.prototype.setAutorenewperiod = function(e) {
                return r.Message.setWrapperField(this, 7, e)
            }, proto.proto.ConsensusTopicInfo.prototype.clearAutorenewperiod = function() {
                return this.setAutorenewperiod(void 0)
            }, proto.proto.ConsensusTopicInfo.prototype.hasAutorenewperiod = function() {
                return null != r.Message.getField(this, 7)
            }, proto.proto.ConsensusTopicInfo.prototype.getAutorenewaccount = function() {
                return r.Message.getWrapperField(this, i.AccountID, 8)
            }, proto.proto.ConsensusTopicInfo.prototype.setAutorenewaccount = function(e) {
                return r.Message.setWrapperField(this, 8, e)
            }, proto.proto.ConsensusTopicInfo.prototype.clearAutorenewaccount = function() {
                return this.setAutorenewaccount(void 0)
            }, proto.proto.ConsensusTopicInfo.prototype.hasAutorenewaccount = function() {
                return null != r.Message.getField(this, 8)
            }, n.object.extend(t, proto.proto)
        },
        3260: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                i = o(105);
            n.object.extend(proto, i), n.exportSymbol("proto.proto.ConsensusTopicState", null, s), proto.proto.ConsensusTopicState = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ConsensusTopicState, r.Message), n.DEBUG && !COMPILED && (proto.proto.ConsensusTopicState.displayName = "proto.proto.ConsensusTopicState"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ConsensusTopicState.prototype.toObject = function(e) {
                return proto.proto.ConsensusTopicState.toObject(e, this)
            }, proto.proto.ConsensusTopicState.toObject = function(e, t) {
                var o, n = {
                    sequencenumber: r.Message.getFieldWithDefault(t, 1, 0),
                    runninghash: t.getRunninghash_asB64(),
                    lastsubmittime: (o = t.getLastsubmittime()) && i.Timestamp.toObject(e, o)
                };
                return e && (n.$jspbMessageInstance = t), n
            }), proto.proto.ConsensusTopicState.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ConsensusTopicState;
                return proto.proto.ConsensusTopicState.deserializeBinaryFromReader(o, t)
            }, proto.proto.ConsensusTopicState.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = t.readUint64();
                            e.setSequencenumber(o);
                            break;
                        case 2:
                            o = t.readBytes();
                            e.setRunninghash(o);
                            break;
                        case 3:
                            o = new i.Timestamp;
                            t.readMessage(o, i.Timestamp.deserializeBinaryFromReader), e.setLastsubmittime(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ConsensusTopicState.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ConsensusTopicState.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ConsensusTopicState.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                0 !== (o = e.getSequencenumber()) && t.writeUint64(1, o), (o = e.getRunninghash_asU8()).length > 0 && t.writeBytes(2, o), null != (o = e.getLastsubmittime()) && t.writeMessage(3, o, i.Timestamp.serializeBinaryToWriter)
            }, proto.proto.ConsensusTopicState.prototype.getSequencenumber = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.proto.ConsensusTopicState.prototype.setSequencenumber = function(e) {
                return r.Message.setProto3IntField(this, 1, e)
            }, proto.proto.ConsensusTopicState.prototype.getRunninghash = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.proto.ConsensusTopicState.prototype.getRunninghash_asB64 = function() {
                return r.Message.bytesAsB64(this.getRunninghash())
            }, proto.proto.ConsensusTopicState.prototype.getRunninghash_asU8 = function() {
                return r.Message.bytesAsU8(this.getRunninghash())
            }, proto.proto.ConsensusTopicState.prototype.setRunninghash = function(e) {
                return r.Message.setProto3BytesField(this, 2, e)
            }, proto.proto.ConsensusTopicState.prototype.getLastsubmittime = function() {
                return r.Message.getWrapperField(this, i.Timestamp, 3)
            }, proto.proto.ConsensusTopicState.prototype.setLastsubmittime = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.ConsensusTopicState.prototype.clearLastsubmittime = function() {
                return this.setLastsubmittime(void 0)
            }, proto.proto.ConsensusTopicState.prototype.hasLastsubmittime = function() {
                return null != r.Message.getField(this, 3)
            }, n.object.extend(t, proto.proto)
        },
        3312: function(e, t, o) {
            var r = o(28),
                n = (Function("return this")(), o(263));
            r.object.extend(proto, n);
            var s = o(262);
            r.object.extend(proto, s);
            var i = o(239);
            r.object.extend(proto, i);
            var a = o(176);
            r.object.extend(proto, a)
        },
        500: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                i = o(36);
            n.object.extend(proto, i);
            var a = o(64);
            n.object.extend(proto, a);
            var p = o(119);
            n.object.extend(proto, p), n.exportSymbol("proto.proto.ContractCallLocalQuery", null, s), n.exportSymbol("proto.proto.ContractCallLocalResponse", null, s), n.exportSymbol("proto.proto.ContractFunctionResult", null, s), n.exportSymbol("proto.proto.ContractLoginfo", null, s), proto.proto.ContractLoginfo = function(e) {
                r.Message.initialize(this, e, 0, -1, proto.proto.ContractLoginfo.repeatedFields_, null)
            }, n.inherits(proto.proto.ContractLoginfo, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractLoginfo.displayName = "proto.proto.ContractLoginfo"), proto.proto.ContractFunctionResult = function(e) {
                r.Message.initialize(this, e, 0, -1, proto.proto.ContractFunctionResult.repeatedFields_, null)
            }, n.inherits(proto.proto.ContractFunctionResult, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractFunctionResult.displayName = "proto.proto.ContractFunctionResult"), proto.proto.ContractCallLocalQuery = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ContractCallLocalQuery, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractCallLocalQuery.displayName = "proto.proto.ContractCallLocalQuery"), proto.proto.ContractCallLocalResponse = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ContractCallLocalResponse, r.Message), n.DEBUG && !COMPILED && (proto.proto.ContractCallLocalResponse.displayName = "proto.proto.ContractCallLocalResponse"), proto.proto.ContractLoginfo.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractLoginfo.prototype.toObject = function(e) {
                return proto.proto.ContractLoginfo.toObject(e, this)
            }, proto.proto.ContractLoginfo.toObject = function(e, t) {
                var o, r = {
                    contractid: (o = t.getContractid()) && i.ContractID.toObject(e, o),
                    bloom: t.getBloom_asB64(),
                    topicList: t.getTopicList_asB64(),
                    data: t.getData_asB64()
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.ContractLoginfo.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ContractLoginfo;
                return proto.proto.ContractLoginfo.deserializeBinaryFromReader(o, t)
            }, proto.proto.ContractLoginfo.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new i.ContractID;
                            t.readMessage(o, i.ContractID.deserializeBinaryFromReader), e.setContractid(o);
                            break;
                        case 2:
                            o = t.readBytes();
                            e.setBloom(o);
                            break;
                        case 3:
                            o = t.readBytes();
                            e.addTopic(o);
                            break;
                        case 4:
                            o = t.readBytes();
                            e.setData(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ContractLoginfo.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ContractLoginfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ContractLoginfo.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getContractid()) && t.writeMessage(1, o, i.ContractID.serializeBinaryToWriter), (o = e.getBloom_asU8()).length > 0 && t.writeBytes(2, o), (o = e.getTopicList_asU8()).length > 0 && t.writeRepeatedBytes(3, o), (o = e.getData_asU8()).length > 0 && t.writeBytes(4, o)
            }, proto.proto.ContractLoginfo.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, i.ContractID, 1)
            }, proto.proto.ContractLoginfo.prototype.setContractid = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.ContractLoginfo.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.ContractLoginfo.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractLoginfo.prototype.getBloom = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.proto.ContractLoginfo.prototype.getBloom_asB64 = function() {
                return r.Message.bytesAsB64(this.getBloom())
            }, proto.proto.ContractLoginfo.prototype.getBloom_asU8 = function() {
                return r.Message.bytesAsU8(this.getBloom())
            }, proto.proto.ContractLoginfo.prototype.setBloom = function(e) {
                return r.Message.setProto3BytesField(this, 2, e)
            }, proto.proto.ContractLoginfo.prototype.getTopicList = function() {
                return r.Message.getRepeatedField(this, 3)
            }, proto.proto.ContractLoginfo.prototype.getTopicList_asB64 = function() {
                return r.Message.bytesListAsB64(this.getTopicList())
            }, proto.proto.ContractLoginfo.prototype.getTopicList_asU8 = function() {
                return r.Message.bytesListAsU8(this.getTopicList())
            }, proto.proto.ContractLoginfo.prototype.setTopicList = function(e) {
                return r.Message.setField(this, 3, e || [])
            }, proto.proto.ContractLoginfo.prototype.addTopic = function(e, t) {
                return r.Message.addToRepeatedField(this, 3, e, t)
            }, proto.proto.ContractLoginfo.prototype.clearTopicList = function() {
                return this.setTopicList([])
            }, proto.proto.ContractLoginfo.prototype.getData = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.proto.ContractLoginfo.prototype.getData_asB64 = function() {
                return r.Message.bytesAsB64(this.getData())
            }, proto.proto.ContractLoginfo.prototype.getData_asU8 = function() {
                return r.Message.bytesAsU8(this.getData())
            }, proto.proto.ContractLoginfo.prototype.setData = function(e) {
                return r.Message.setProto3BytesField(this, 4, e)
            }, proto.proto.ContractFunctionResult.repeatedFields_ = [6], r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractFunctionResult.prototype.toObject = function(e) {
                return proto.proto.ContractFunctionResult.toObject(e, this)
            }, proto.proto.ContractFunctionResult.toObject = function(e, t) {
                var o, n = {
                    contractid: (o = t.getContractid()) && i.ContractID.toObject(e, o),
                    contractcallresult: t.getContractcallresult_asB64(),
                    errormessage: r.Message.getFieldWithDefault(t, 3, ""),
                    bloom: t.getBloom_asB64(),
                    gasused: r.Message.getFieldWithDefault(t, 5, 0),
                    loginfoList: r.Message.toObjectList(t.getLoginfoList(), proto.proto.ContractLoginfo.toObject, e)
                };
                return e && (n.$jspbMessageInstance = t), n
            }), proto.proto.ContractFunctionResult.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ContractFunctionResult;
                return proto.proto.ContractFunctionResult.deserializeBinaryFromReader(o, t)
            }, proto.proto.ContractFunctionResult.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new i.ContractID;
                            t.readMessage(o, i.ContractID.deserializeBinaryFromReader), e.setContractid(o);
                            break;
                        case 2:
                            o = t.readBytes();
                            e.setContractcallresult(o);
                            break;
                        case 3:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 4:
                            o = t.readBytes();
                            e.setBloom(o);
                            break;
                        case 5:
                            o = t.readUint64();
                            e.setGasused(o);
                            break;
                        case 6:
                            o = new proto.proto.ContractLoginfo;
                            t.readMessage(o, proto.proto.ContractLoginfo.deserializeBinaryFromReader), e.addLoginfo(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ContractFunctionResult.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ContractFunctionResult.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ContractFunctionResult.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getContractid()) && t.writeMessage(1, o, i.ContractID.serializeBinaryToWriter), (o = e.getContractcallresult_asU8()).length > 0 && t.writeBytes(2, o), (o = e.getErrormessage()).length > 0 && t.writeString(3, o), (o = e.getBloom_asU8()).length > 0 && t.writeBytes(4, o), 0 !== (o = e.getGasused()) && t.writeUint64(5, o), (o = e.getLoginfoList()).length > 0 && t.writeRepeatedMessage(6, o, proto.proto.ContractLoginfo.serializeBinaryToWriter)
            }, proto.proto.ContractFunctionResult.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, i.ContractID, 1)
            }, proto.proto.ContractFunctionResult.prototype.setContractid = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.ContractFunctionResult.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.ContractFunctionResult.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractFunctionResult.prototype.getContractcallresult = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.proto.ContractFunctionResult.prototype.getContractcallresult_asB64 = function() {
                return r.Message.bytesAsB64(this.getContractcallresult())
            }, proto.proto.ContractFunctionResult.prototype.getContractcallresult_asU8 = function() {
                return r.Message.bytesAsU8(this.getContractcallresult())
            }, proto.proto.ContractFunctionResult.prototype.setContractcallresult = function(e) {
                return r.Message.setProto3BytesField(this, 2, e)
            }, proto.proto.ContractFunctionResult.prototype.getErrormessage = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.proto.ContractFunctionResult.prototype.setErrormessage = function(e) {
                return r.Message.setProto3StringField(this, 3, e)
            }, proto.proto.ContractFunctionResult.prototype.getBloom = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.proto.ContractFunctionResult.prototype.getBloom_asB64 = function() {
                return r.Message.bytesAsB64(this.getBloom())
            }, proto.proto.ContractFunctionResult.prototype.getBloom_asU8 = function() {
                return r.Message.bytesAsU8(this.getBloom())
            }, proto.proto.ContractFunctionResult.prototype.setBloom = function(e) {
                return r.Message.setProto3BytesField(this, 4, e)
            }, proto.proto.ContractFunctionResult.prototype.getGasused = function() {
                return r.Message.getFieldWithDefault(this, 5, 0)
            }, proto.proto.ContractFunctionResult.prototype.setGasused = function(e) {
                return r.Message.setProto3IntField(this, 5, e)
            }, proto.proto.ContractFunctionResult.prototype.getLoginfoList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.proto.ContractLoginfo, 6)
            }, proto.proto.ContractFunctionResult.prototype.setLoginfoList = function(e) {
                return r.Message.setRepeatedWrapperField(this, 6, e)
            }, proto.proto.ContractFunctionResult.prototype.addLoginfo = function(e, t) {
                return r.Message.addToRepeatedWrapperField(this, 6, e, proto.proto.ContractLoginfo, t)
            }, proto.proto.ContractFunctionResult.prototype.clearLoginfoList = function() {
                return this.setLoginfoList([])
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractCallLocalQuery.prototype.toObject = function(e) {
                return proto.proto.ContractCallLocalQuery.toObject(e, this)
            }, proto.proto.ContractCallLocalQuery.toObject = function(e, t) {
                var o, n = {
                    header: (o = t.getHeader()) && a.QueryHeader.toObject(e, o),
                    contractid: (o = t.getContractid()) && i.ContractID.toObject(e, o),
                    gas: r.Message.getFieldWithDefault(t, 3, 0),
                    functionparameters: t.getFunctionparameters_asB64(),
                    maxresultsize: r.Message.getFieldWithDefault(t, 5, 0)
                };
                return e && (n.$jspbMessageInstance = t), n
            }), proto.proto.ContractCallLocalQuery.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ContractCallLocalQuery;
                return proto.proto.ContractCallLocalQuery.deserializeBinaryFromReader(o, t)
            }, proto.proto.ContractCallLocalQuery.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.QueryHeader;
                            t.readMessage(o, a.QueryHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new i.ContractID;
                            t.readMessage(o, i.ContractID.deserializeBinaryFromReader), e.setContractid(o);
                            break;
                        case 3:
                            o = t.readInt64();
                            e.setGas(o);
                            break;
                        case 4:
                            o = t.readBytes();
                            e.setFunctionparameters(o);
                            break;
                        case 5:
                            o = t.readInt64();
                            e.setMaxresultsize(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ContractCallLocalQuery.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ContractCallLocalQuery.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ContractCallLocalQuery.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, a.QueryHeader.serializeBinaryToWriter), null != (o = e.getContractid()) && t.writeMessage(2, o, i.ContractID.serializeBinaryToWriter), 0 !== (o = e.getGas()) && t.writeInt64(3, o), (o = e.getFunctionparameters_asU8()).length > 0 && t.writeBytes(4, o), 0 !== (o = e.getMaxresultsize()) && t.writeInt64(5, o)
            }, proto.proto.ContractCallLocalQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, a.QueryHeader, 1)
            }, proto.proto.ContractCallLocalQuery.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.ContractCallLocalQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.ContractCallLocalQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractCallLocalQuery.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, i.ContractID, 2)
            }, proto.proto.ContractCallLocalQuery.prototype.setContractid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.ContractCallLocalQuery.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.ContractCallLocalQuery.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.ContractCallLocalQuery.prototype.getGas = function() {
                return r.Message.getFieldWithDefault(this, 3, 0)
            }, proto.proto.ContractCallLocalQuery.prototype.setGas = function(e) {
                return r.Message.setProto3IntField(this, 3, e)
            }, proto.proto.ContractCallLocalQuery.prototype.getFunctionparameters = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.proto.ContractCallLocalQuery.prototype.getFunctionparameters_asB64 = function() {
                return r.Message.bytesAsB64(this.getFunctionparameters())
            }, proto.proto.ContractCallLocalQuery.prototype.getFunctionparameters_asU8 = function() {
                return r.Message.bytesAsU8(this.getFunctionparameters())
            }, proto.proto.ContractCallLocalQuery.prototype.setFunctionparameters = function(e) {
                return r.Message.setProto3BytesField(this, 4, e)
            }, proto.proto.ContractCallLocalQuery.prototype.getMaxresultsize = function() {
                return r.Message.getFieldWithDefault(this, 5, 0)
            }, proto.proto.ContractCallLocalQuery.prototype.setMaxresultsize = function(e) {
                return r.Message.setProto3IntField(this, 5, e)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.ContractCallLocalResponse.prototype.toObject = function(e) {
                return proto.proto.ContractCallLocalResponse.toObject(e, this)
            }, proto.proto.ContractCallLocalResponse.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && p.ResponseHeader.toObject(e, o),
                    functionresult: (o = t.getFunctionresult()) && proto.proto.ContractFunctionResult.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.ContractCallLocalResponse.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ContractCallLocalResponse;
                return proto.proto.ContractCallLocalResponse.deserializeBinaryFromReader(o, t)
            }, proto.proto.ContractCallLocalResponse.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new p.ResponseHeader;
                            t.readMessage(o, p.ResponseHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new proto.proto.ContractFunctionResult;
                            t.readMessage(o, proto.proto.ContractFunctionResult.deserializeBinaryFromReader), e.setFunctionresult(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ContractCallLocalResponse.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ContractCallLocalResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ContractCallLocalResponse.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, p.ResponseHeader.serializeBinaryToWriter), null != (o = e.getFunctionresult()) && t.writeMessage(2, o, proto.proto.ContractFunctionResult.serializeBinaryToWriter)
            }, proto.proto.ContractCallLocalResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, p.ResponseHeader, 1)
            }, proto.proto.ContractCallLocalResponse.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.ContractCallLocalResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.ContractCallLocalResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ContractCallLocalResponse.prototype.getFunctionresult = function() {
                return r.Message.getWrapperField(this, proto.proto.ContractFunctionResult, 2)
            }, proto.proto.ContractCallLocalResponse.prototype.setFunctionresult = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.ContractCallLocalResponse.prototype.clearFunctionresult = function() {
                return this.setFunctionresult(void 0)
            }, proto.proto.ContractCallLocalResponse.prototype.hasFunctionresult = function() {
                return null != r.Message.getField(this, 2)
            }, n.object.extend(t, proto.proto)
        },
        502: function(e, t, o) {
            o(3312);
            var r = o(263),
                n = o(262),
                s = o(239),
                i = o(176),
                a = o(289).grpc,
                p = function() {
                    function e() {}
                    return e.serviceName = "proto.ConsensusService", e
                }();

            function u(e, t) {
                this.serviceHost = e, this.options = t || {}
            }
            p.createTopic = {
                methodName: "createTopic",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: i.Transaction,
                responseType: s.TransactionResponse
            }, p.updateTopic = {
                methodName: "updateTopic",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: i.Transaction,
                responseType: s.TransactionResponse
            }, p.deleteTopic = {
                methodName: "deleteTopic",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: i.Transaction,
                responseType: s.TransactionResponse
            }, p.getTopicInfo = {
                methodName: "getTopicInfo",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: r.Query,
                responseType: n.Response
            }, p.submitMessage = {
                methodName: "submitMessage",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: i.Transaction,
                responseType: s.TransactionResponse
            }, t.ConsensusService = p, u.prototype.createTopic = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.createTopic, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== a.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, u.prototype.updateTopic = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.updateTopic, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== a.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, u.prototype.deleteTopic = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.deleteTopic, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== a.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, u.prototype.getTopicInfo = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.getTopicInfo, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== a.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, u.prototype.submitMessage = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.submitMessage, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== a.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, t.ConsensusServiceClient = u
        }
    }
]);