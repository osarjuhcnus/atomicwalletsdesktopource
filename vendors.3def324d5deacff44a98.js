(window.webpackJsonp = window.webpackJsonp || []).push([
    [182], {
        1042: function(e, t, o) {
            var r = o(28),
                i = r,
                n = Function("return this")(),
                s = o(36);
            i.object.extend(proto, s);
            var a = o(64);
            i.object.extend(proto, a);
            var p = o(119);
            i.object.extend(proto, p), i.exportSymbol("proto.proto.GetBySolidityIDQuery", null, n), i.exportSymbol("proto.proto.GetBySolidityIDResponse", null, n), proto.proto.GetBySolidityIDQuery = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.GetBySolidityIDQuery, r.Message), i.DEBUG && !COMPILED && (proto.proto.GetBySolidityIDQuery.displayName = "proto.proto.GetBySolidityIDQuery"), proto.proto.GetBySolidityIDResponse = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.GetBySolidityIDResponse, r.Message), i.DEBUG && !COMPILED && (proto.proto.GetBySolidityIDResponse.displayName = "proto.proto.GetBySolidityIDResponse"), r.Message.GENERATE_TO_OBJECT && (proto.proto.GetBySolidityIDQuery.prototype.toObject = function(e) {
                return proto.proto.GetBySolidityIDQuery.toObject(e, this)
            }, proto.proto.GetBySolidityIDQuery.toObject = function(e, t) {
                var o, i = {
                    header: (o = t.getHeader()) && a.QueryHeader.toObject(e, o),
                    solidityid: r.Message.getFieldWithDefault(t, 2, "")
                };
                return e && (i.$jspbMessageInstance = t), i
            }), proto.proto.GetBySolidityIDQuery.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.GetBySolidityIDQuery;
                return proto.proto.GetBySolidityIDQuery.deserializeBinaryFromReader(o, t)
            }, proto.proto.GetBySolidityIDQuery.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.QueryHeader;
                            t.readMessage(o, a.QueryHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setSolidityid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.GetBySolidityIDQuery.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.GetBySolidityIDQuery.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.GetBySolidityIDQuery.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, a.QueryHeader.serializeBinaryToWriter), (o = e.getSolidityid()).length > 0 && t.writeString(2, o)
            }, proto.proto.GetBySolidityIDQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, a.QueryHeader, 1)
            }, proto.proto.GetBySolidityIDQuery.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.GetBySolidityIDQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.GetBySolidityIDQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.GetBySolidityIDQuery.prototype.getSolidityid = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.proto.GetBySolidityIDQuery.prototype.setSolidityid = function(e) {
                return r.Message.setProto3StringField(this, 2, e)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.GetBySolidityIDResponse.prototype.toObject = function(e) {
                return proto.proto.GetBySolidityIDResponse.toObject(e, this)
            }, proto.proto.GetBySolidityIDResponse.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && p.ResponseHeader.toObject(e, o),
                    accountid: (o = t.getAccountid()) && s.AccountID.toObject(e, o),
                    fileid: (o = t.getFileid()) && s.FileID.toObject(e, o),
                    contractid: (o = t.getContractid()) && s.ContractID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.GetBySolidityIDResponse.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.GetBySolidityIDResponse;
                return proto.proto.GetBySolidityIDResponse.deserializeBinaryFromReader(o, t)
            }, proto.proto.GetBySolidityIDResponse.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new p.ResponseHeader;
                            t.readMessage(o, p.ResponseHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new s.AccountID;
                            t.readMessage(o, s.AccountID.deserializeBinaryFromReader), e.setAccountid(o);
                            break;
                        case 3:
                            o = new s.FileID;
                            t.readMessage(o, s.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        case 4:
                            o = new s.ContractID;
                            t.readMessage(o, s.ContractID.deserializeBinaryFromReader), e.setContractid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.GetBySolidityIDResponse.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.GetBySolidityIDResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.GetBySolidityIDResponse.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, p.ResponseHeader.serializeBinaryToWriter), null != (o = e.getAccountid()) && t.writeMessage(2, o, s.AccountID.serializeBinaryToWriter), null != (o = e.getFileid()) && t.writeMessage(3, o, s.FileID.serializeBinaryToWriter), null != (o = e.getContractid()) && t.writeMessage(4, o, s.ContractID.serializeBinaryToWriter)
            }, proto.proto.GetBySolidityIDResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, p.ResponseHeader, 1)
            }, proto.proto.GetBySolidityIDResponse.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.GetBySolidityIDResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.GetBySolidityIDResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.GetBySolidityIDResponse.prototype.getAccountid = function() {
                return r.Message.getWrapperField(this, s.AccountID, 2)
            }, proto.proto.GetBySolidityIDResponse.prototype.setAccountid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.GetBySolidityIDResponse.prototype.clearAccountid = function() {
                return this.setAccountid(void 0)
            }, proto.proto.GetBySolidityIDResponse.prototype.hasAccountid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.GetBySolidityIDResponse.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, s.FileID, 3)
            }, proto.proto.GetBySolidityIDResponse.prototype.setFileid = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.GetBySolidityIDResponse.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.GetBySolidityIDResponse.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.GetBySolidityIDResponse.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, s.ContractID, 4)
            }, proto.proto.GetBySolidityIDResponse.prototype.setContractid = function(e) {
                return r.Message.setWrapperField(this, 4, e)
            }, proto.proto.GetBySolidityIDResponse.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.GetBySolidityIDResponse.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 4)
            }, i.object.extend(t, proto.proto)
        },
        1050: function(e, t, o) {
            var r = o(28),
                i = r,
                n = Function("return this")(),
                s = o(36);
            i.object.extend(proto, s);
            var a = o(64);
            i.object.extend(proto, a);
            var p = o(119);
            i.object.extend(proto, p), i.exportSymbol("proto.proto.FileGetContentsQuery", null, n), i.exportSymbol("proto.proto.FileGetContentsResponse", null, n), i.exportSymbol("proto.proto.FileGetContentsResponse.FileContents", null, n), proto.proto.FileGetContentsQuery = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.FileGetContentsQuery, r.Message), i.DEBUG && !COMPILED && (proto.proto.FileGetContentsQuery.displayName = "proto.proto.FileGetContentsQuery"), proto.proto.FileGetContentsResponse = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.FileGetContentsResponse, r.Message), i.DEBUG && !COMPILED && (proto.proto.FileGetContentsResponse.displayName = "proto.proto.FileGetContentsResponse"), proto.proto.FileGetContentsResponse.FileContents = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.FileGetContentsResponse.FileContents, r.Message), i.DEBUG && !COMPILED && (proto.proto.FileGetContentsResponse.FileContents.displayName = "proto.proto.FileGetContentsResponse.FileContents"), r.Message.GENERATE_TO_OBJECT && (proto.proto.FileGetContentsQuery.prototype.toObject = function(e) {
                return proto.proto.FileGetContentsQuery.toObject(e, this)
            }, proto.proto.FileGetContentsQuery.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && a.QueryHeader.toObject(e, o),
                    fileid: (o = t.getFileid()) && s.FileID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.FileGetContentsQuery.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.FileGetContentsQuery;
                return proto.proto.FileGetContentsQuery.deserializeBinaryFromReader(o, t)
            }, proto.proto.FileGetContentsQuery.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.QueryHeader;
                            t.readMessage(o, a.QueryHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new s.FileID;
                            t.readMessage(o, s.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.FileGetContentsQuery.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.FileGetContentsQuery.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.FileGetContentsQuery.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, a.QueryHeader.serializeBinaryToWriter), null != (o = e.getFileid()) && t.writeMessage(2, o, s.FileID.serializeBinaryToWriter)
            }, proto.proto.FileGetContentsQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, a.QueryHeader, 1)
            }, proto.proto.FileGetContentsQuery.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.FileGetContentsQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.FileGetContentsQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.FileGetContentsQuery.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, s.FileID, 2)
            }, proto.proto.FileGetContentsQuery.prototype.setFileid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.FileGetContentsQuery.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.FileGetContentsQuery.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 2)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.FileGetContentsResponse.prototype.toObject = function(e) {
                return proto.proto.FileGetContentsResponse.toObject(e, this)
            }, proto.proto.FileGetContentsResponse.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && p.ResponseHeader.toObject(e, o),
                    filecontents: (o = t.getFilecontents()) && proto.proto.FileGetContentsResponse.FileContents.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.FileGetContentsResponse.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.FileGetContentsResponse;
                return proto.proto.FileGetContentsResponse.deserializeBinaryFromReader(o, t)
            }, proto.proto.FileGetContentsResponse.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new p.ResponseHeader;
                            t.readMessage(o, p.ResponseHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new proto.proto.FileGetContentsResponse.FileContents;
                            t.readMessage(o, proto.proto.FileGetContentsResponse.FileContents.deserializeBinaryFromReader), e.setFilecontents(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.FileGetContentsResponse.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.FileGetContentsResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.FileGetContentsResponse.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, p.ResponseHeader.serializeBinaryToWriter), null != (o = e.getFilecontents()) && t.writeMessage(2, o, proto.proto.FileGetContentsResponse.FileContents.serializeBinaryToWriter)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.FileGetContentsResponse.FileContents.prototype.toObject = function(e) {
                return proto.proto.FileGetContentsResponse.FileContents.toObject(e, this)
            }, proto.proto.FileGetContentsResponse.FileContents.toObject = function(e, t) {
                var o, r = {
                    fileid: (o = t.getFileid()) && s.FileID.toObject(e, o),
                    contents: t.getContents_asB64()
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.FileGetContentsResponse.FileContents.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.FileGetContentsResponse.FileContents;
                return proto.proto.FileGetContentsResponse.FileContents.deserializeBinaryFromReader(o, t)
            }, proto.proto.FileGetContentsResponse.FileContents.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new s.FileID;
                            t.readMessage(o, s.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        case 2:
                            o = t.readBytes();
                            e.setContents(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.FileGetContentsResponse.FileContents.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.FileGetContentsResponse.FileContents.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.FileGetContentsResponse.FileContents.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getFileid()) && t.writeMessage(1, o, s.FileID.serializeBinaryToWriter), (o = e.getContents_asU8()).length > 0 && t.writeBytes(2, o)
            }, proto.proto.FileGetContentsResponse.FileContents.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, s.FileID, 1)
            }, proto.proto.FileGetContentsResponse.FileContents.prototype.setFileid = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.FileGetContentsResponse.FileContents.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.FileGetContentsResponse.FileContents.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.FileGetContentsResponse.FileContents.prototype.getContents = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.proto.FileGetContentsResponse.FileContents.prototype.getContents_asB64 = function() {
                return r.Message.bytesAsB64(this.getContents())
            }, proto.proto.FileGetContentsResponse.FileContents.prototype.getContents_asU8 = function() {
                return r.Message.bytesAsU8(this.getContents())
            }, proto.proto.FileGetContentsResponse.FileContents.prototype.setContents = function(e) {
                return r.Message.setProto3BytesField(this, 2, e)
            }, proto.proto.FileGetContentsResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, p.ResponseHeader, 1)
            }, proto.proto.FileGetContentsResponse.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.FileGetContentsResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.FileGetContentsResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.FileGetContentsResponse.prototype.getFilecontents = function() {
                return r.Message.getWrapperField(this, proto.proto.FileGetContentsResponse.FileContents, 2)
            }, proto.proto.FileGetContentsResponse.prototype.setFilecontents = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.FileGetContentsResponse.prototype.clearFilecontents = function() {
                return this.setFilecontents(void 0)
            }, proto.proto.FileGetContentsResponse.prototype.hasFilecontents = function() {
                return null != r.Message.getField(this, 2)
            }, i.object.extend(t, proto.proto)
        },
        1051: function(e, t, o) {
            var r = o(28),
                i = r,
                n = Function("return this")(),
                s = o(105);
            i.object.extend(proto, s);
            var a = o(36);
            i.object.extend(proto, a);
            var p = o(64);
            i.object.extend(proto, p);
            var l = o(119);
            i.object.extend(proto, l), i.exportSymbol("proto.proto.FileGetInfoQuery", null, n), i.exportSymbol("proto.proto.FileGetInfoResponse", null, n), i.exportSymbol("proto.proto.FileGetInfoResponse.FileInfo", null, n), proto.proto.FileGetInfoQuery = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.FileGetInfoQuery, r.Message), i.DEBUG && !COMPILED && (proto.proto.FileGetInfoQuery.displayName = "proto.proto.FileGetInfoQuery"), proto.proto.FileGetInfoResponse = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.FileGetInfoResponse, r.Message), i.DEBUG && !COMPILED && (proto.proto.FileGetInfoResponse.displayName = "proto.proto.FileGetInfoResponse"), proto.proto.FileGetInfoResponse.FileInfo = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.FileGetInfoResponse.FileInfo, r.Message), i.DEBUG && !COMPILED && (proto.proto.FileGetInfoResponse.FileInfo.displayName = "proto.proto.FileGetInfoResponse.FileInfo"), r.Message.GENERATE_TO_OBJECT && (proto.proto.FileGetInfoQuery.prototype.toObject = function(e) {
                return proto.proto.FileGetInfoQuery.toObject(e, this)
            }, proto.proto.FileGetInfoQuery.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && p.QueryHeader.toObject(e, o),
                    fileid: (o = t.getFileid()) && a.FileID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.FileGetInfoQuery.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.FileGetInfoQuery;
                return proto.proto.FileGetInfoQuery.deserializeBinaryFromReader(o, t)
            }, proto.proto.FileGetInfoQuery.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new p.QueryHeader;
                            t.readMessage(o, p.QueryHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new a.FileID;
                            t.readMessage(o, a.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.FileGetInfoQuery.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.FileGetInfoQuery.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.FileGetInfoQuery.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, p.QueryHeader.serializeBinaryToWriter), null != (o = e.getFileid()) && t.writeMessage(2, o, a.FileID.serializeBinaryToWriter)
            }, proto.proto.FileGetInfoQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, p.QueryHeader, 1)
            }, proto.proto.FileGetInfoQuery.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.FileGetInfoQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.FileGetInfoQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.FileGetInfoQuery.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, a.FileID, 2)
            }, proto.proto.FileGetInfoQuery.prototype.setFileid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.FileGetInfoQuery.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.FileGetInfoQuery.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 2)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.FileGetInfoResponse.prototype.toObject = function(e) {
                return proto.proto.FileGetInfoResponse.toObject(e, this)
            }, proto.proto.FileGetInfoResponse.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && l.ResponseHeader.toObject(e, o),
                    fileinfo: (o = t.getFileinfo()) && proto.proto.FileGetInfoResponse.FileInfo.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.FileGetInfoResponse.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.FileGetInfoResponse;
                return proto.proto.FileGetInfoResponse.deserializeBinaryFromReader(o, t)
            }, proto.proto.FileGetInfoResponse.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new l.ResponseHeader;
                            t.readMessage(o, l.ResponseHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new proto.proto.FileGetInfoResponse.FileInfo;
                            t.readMessage(o, proto.proto.FileGetInfoResponse.FileInfo.deserializeBinaryFromReader), e.setFileinfo(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.FileGetInfoResponse.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.FileGetInfoResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.FileGetInfoResponse.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, l.ResponseHeader.serializeBinaryToWriter), null != (o = e.getFileinfo()) && t.writeMessage(2, o, proto.proto.FileGetInfoResponse.FileInfo.serializeBinaryToWriter)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.FileGetInfoResponse.FileInfo.prototype.toObject = function(e) {
                return proto.proto.FileGetInfoResponse.FileInfo.toObject(e, this)
            }, proto.proto.FileGetInfoResponse.FileInfo.toObject = function(e, t) {
                var o, i = {
                    fileid: (o = t.getFileid()) && a.FileID.toObject(e, o),
                    size: r.Message.getFieldWithDefault(t, 2, 0),
                    expirationtime: (o = t.getExpirationtime()) && s.Timestamp.toObject(e, o),
                    deleted: r.Message.getBooleanFieldWithDefault(t, 4, !1),
                    keys: (o = t.getKeys()) && a.KeyList.toObject(e, o)
                };
                return e && (i.$jspbMessageInstance = t), i
            }), proto.proto.FileGetInfoResponse.FileInfo.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.FileGetInfoResponse.FileInfo;
                return proto.proto.FileGetInfoResponse.FileInfo.deserializeBinaryFromReader(o, t)
            }, proto.proto.FileGetInfoResponse.FileInfo.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.FileID;
                            t.readMessage(o, a.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        case 2:
                            o = t.readInt64();
                            e.setSize(o);
                            break;
                        case 3:
                            o = new s.Timestamp;
                            t.readMessage(o, s.Timestamp.deserializeBinaryFromReader), e.setExpirationtime(o);
                            break;
                        case 4:
                            o = t.readBool();
                            e.setDeleted(o);
                            break;
                        case 5:
                            o = new a.KeyList;
                            t.readMessage(o, a.KeyList.deserializeBinaryFromReader), e.setKeys(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.FileGetInfoResponse.FileInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.FileGetInfoResponse.FileInfo.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getFileid()) && t.writeMessage(1, o, a.FileID.serializeBinaryToWriter), 0 !== (o = e.getSize()) && t.writeInt64(2, o), null != (o = e.getExpirationtime()) && t.writeMessage(3, o, s.Timestamp.serializeBinaryToWriter), (o = e.getDeleted()) && t.writeBool(4, o), null != (o = e.getKeys()) && t.writeMessage(5, o, a.KeyList.serializeBinaryToWriter)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, a.FileID, 1)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.setFileid = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.getSize = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.setSize = function(e) {
                return r.Message.setProto3IntField(this, 2, e)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.getExpirationtime = function() {
                return r.Message.getWrapperField(this, s.Timestamp, 3)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.setExpirationtime = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.clearExpirationtime = function() {
                return this.setExpirationtime(void 0)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.hasExpirationtime = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.getDeleted = function() {
                return r.Message.getBooleanFieldWithDefault(this, 4, !1)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.setDeleted = function(e) {
                return r.Message.setProto3BooleanField(this, 4, e)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.getKeys = function() {
                return r.Message.getWrapperField(this, a.KeyList, 5)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.setKeys = function(e) {
                return r.Message.setWrapperField(this, 5, e)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.clearKeys = function() {
                return this.setKeys(void 0)
            }, proto.proto.FileGetInfoResponse.FileInfo.prototype.hasKeys = function() {
                return null != r.Message.getField(this, 5)
            }, proto.proto.FileGetInfoResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, l.ResponseHeader, 1)
            }, proto.proto.FileGetInfoResponse.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.FileGetInfoResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.FileGetInfoResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.FileGetInfoResponse.prototype.getFileinfo = function() {
                return r.Message.getWrapperField(this, proto.proto.FileGetInfoResponse.FileInfo, 2)
            }, proto.proto.FileGetInfoResponse.prototype.setFileinfo = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.FileGetInfoResponse.prototype.clearFileinfo = function() {
                return this.setFileinfo(void 0)
            }, proto.proto.FileGetInfoResponse.prototype.hasFileinfo = function() {
                return null != r.Message.getField(this, 2)
            }, i.object.extend(t, proto.proto)
        },
        1774: function(e, t, o) {
            var r = o(28),
                i = r,
                n = Function("return this")(),
                s = o(36);
            i.object.extend(proto, s);
            var a = o(64);
            i.object.extend(proto, a);
            var p = o(119);
            i.object.extend(proto, p);
            var l = o(616);
            i.object.extend(proto, l), i.exportSymbol("proto.proto.EntityID", null, n), i.exportSymbol("proto.proto.EntityID.EntityCase", null, n), i.exportSymbol("proto.proto.GetByKeyQuery", null, n), i.exportSymbol("proto.proto.GetByKeyResponse", null, n), proto.proto.GetByKeyQuery = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.GetByKeyQuery, r.Message), i.DEBUG && !COMPILED && (proto.proto.GetByKeyQuery.displayName = "proto.proto.GetByKeyQuery"), proto.proto.EntityID = function(e) {
                r.Message.initialize(this, e, 0, -1, null, proto.proto.EntityID.oneofGroups_)
            }, i.inherits(proto.proto.EntityID, r.Message), i.DEBUG && !COMPILED && (proto.proto.EntityID.displayName = "proto.proto.EntityID"), proto.proto.GetByKeyResponse = function(e) {
                r.Message.initialize(this, e, 0, -1, proto.proto.GetByKeyResponse.repeatedFields_, null)
            }, i.inherits(proto.proto.GetByKeyResponse, r.Message), i.DEBUG && !COMPILED && (proto.proto.GetByKeyResponse.displayName = "proto.proto.GetByKeyResponse"), r.Message.GENERATE_TO_OBJECT && (proto.proto.GetByKeyQuery.prototype.toObject = function(e) {
                return proto.proto.GetByKeyQuery.toObject(e, this)
            }, proto.proto.GetByKeyQuery.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && a.QueryHeader.toObject(e, o),
                    key: (o = t.getKey()) && s.Key.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.GetByKeyQuery.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.GetByKeyQuery;
                return proto.proto.GetByKeyQuery.deserializeBinaryFromReader(o, t)
            }, proto.proto.GetByKeyQuery.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.QueryHeader;
                            t.readMessage(o, a.QueryHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new s.Key;
                            t.readMessage(o, s.Key.deserializeBinaryFromReader), e.setKey(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.GetByKeyQuery.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.GetByKeyQuery.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.GetByKeyQuery.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, a.QueryHeader.serializeBinaryToWriter), null != (o = e.getKey()) && t.writeMessage(2, o, s.Key.serializeBinaryToWriter)
            }, proto.proto.GetByKeyQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, a.QueryHeader, 1)
            }, proto.proto.GetByKeyQuery.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.GetByKeyQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.GetByKeyQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.GetByKeyQuery.prototype.getKey = function() {
                return r.Message.getWrapperField(this, s.Key, 2)
            }, proto.proto.GetByKeyQuery.prototype.setKey = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.GetByKeyQuery.prototype.clearKey = function() {
                return this.setKey(void 0)
            }, proto.proto.GetByKeyQuery.prototype.hasKey = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.EntityID.oneofGroups_ = [
                [1, 2, 3, 4]
            ], proto.proto.EntityID.EntityCase = {
                ENTITY_NOT_SET: 0,
                ACCOUNTID: 1,
                CLAIM: 2,
                FILEID: 3,
                CONTRACTID: 4
            }, proto.proto.EntityID.prototype.getEntityCase = function() {
                return r.Message.computeOneofCase(this, proto.proto.EntityID.oneofGroups_[0])
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.EntityID.prototype.toObject = function(e) {
                return proto.proto.EntityID.toObject(e, this)
            }, proto.proto.EntityID.toObject = function(e, t) {
                var o, r = {
                    accountid: (o = t.getAccountid()) && s.AccountID.toObject(e, o),
                    claim: (o = t.getClaim()) && l.Claim.toObject(e, o),
                    fileid: (o = t.getFileid()) && s.FileID.toObject(e, o),
                    contractid: (o = t.getContractid()) && s.ContractID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.EntityID.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.EntityID;
                return proto.proto.EntityID.deserializeBinaryFromReader(o, t)
            }, proto.proto.EntityID.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new s.AccountID;
                            t.readMessage(o, s.AccountID.deserializeBinaryFromReader), e.setAccountid(o);
                            break;
                        case 2:
                            o = new l.Claim;
                            t.readMessage(o, l.Claim.deserializeBinaryFromReader), e.setClaim(o);
                            break;
                        case 3:
                            o = new s.FileID;
                            t.readMessage(o, s.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        case 4:
                            o = new s.ContractID;
                            t.readMessage(o, s.ContractID.deserializeBinaryFromReader), e.setContractid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.EntityID.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.EntityID.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.EntityID.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getAccountid()) && t.writeMessage(1, o, s.AccountID.serializeBinaryToWriter), null != (o = e.getClaim()) && t.writeMessage(2, o, l.Claim.serializeBinaryToWriter), null != (o = e.getFileid()) && t.writeMessage(3, o, s.FileID.serializeBinaryToWriter), null != (o = e.getContractid()) && t.writeMessage(4, o, s.ContractID.serializeBinaryToWriter)
            }, proto.proto.EntityID.prototype.getAccountid = function() {
                return r.Message.getWrapperField(this, s.AccountID, 1)
            }, proto.proto.EntityID.prototype.setAccountid = function(e) {
                return r.Message.setOneofWrapperField(this, 1, proto.proto.EntityID.oneofGroups_[0], e)
            }, proto.proto.EntityID.prototype.clearAccountid = function() {
                return this.setAccountid(void 0)
            }, proto.proto.EntityID.prototype.hasAccountid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.EntityID.prototype.getClaim = function() {
                return r.Message.getWrapperField(this, l.Claim, 2)
            }, proto.proto.EntityID.prototype.setClaim = function(e) {
                return r.Message.setOneofWrapperField(this, 2, proto.proto.EntityID.oneofGroups_[0], e)
            }, proto.proto.EntityID.prototype.clearClaim = function() {
                return this.setClaim(void 0)
            }, proto.proto.EntityID.prototype.hasClaim = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.EntityID.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, s.FileID, 3)
            }, proto.proto.EntityID.prototype.setFileid = function(e) {
                return r.Message.setOneofWrapperField(this, 3, proto.proto.EntityID.oneofGroups_[0], e)
            }, proto.proto.EntityID.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.EntityID.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.EntityID.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, s.ContractID, 4)
            }, proto.proto.EntityID.prototype.setContractid = function(e) {
                return r.Message.setOneofWrapperField(this, 4, proto.proto.EntityID.oneofGroups_[0], e)
            }, proto.proto.EntityID.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.EntityID.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.GetByKeyResponse.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.proto.GetByKeyResponse.prototype.toObject = function(e) {
                return proto.proto.GetByKeyResponse.toObject(e, this)
            }, proto.proto.GetByKeyResponse.toObject = function(e, t) {
                var o, i = {
                    header: (o = t.getHeader()) && p.ResponseHeader.toObject(e, o),
                    entitiesList: r.Message.toObjectList(t.getEntitiesList(), proto.proto.EntityID.toObject, e)
                };
                return e && (i.$jspbMessageInstance = t), i
            }), proto.proto.GetByKeyResponse.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.GetByKeyResponse;
                return proto.proto.GetByKeyResponse.deserializeBinaryFromReader(o, t)
            }, proto.proto.GetByKeyResponse.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new p.ResponseHeader;
                            t.readMessage(o, p.ResponseHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new proto.proto.EntityID;
                            t.readMessage(o, proto.proto.EntityID.deserializeBinaryFromReader), e.addEntities(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.GetByKeyResponse.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.GetByKeyResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.GetByKeyResponse.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, p.ResponseHeader.serializeBinaryToWriter), (o = e.getEntitiesList()).length > 0 && t.writeRepeatedMessage(2, o, proto.proto.EntityID.serializeBinaryToWriter)
            }, proto.proto.GetByKeyResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, p.ResponseHeader, 1)
            }, proto.proto.GetByKeyResponse.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.GetByKeyResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.GetByKeyResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.GetByKeyResponse.prototype.getEntitiesList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.proto.EntityID, 2)
            }, proto.proto.GetByKeyResponse.prototype.setEntitiesList = function(e) {
                return r.Message.setRepeatedWrapperField(this, 2, e)
            }, proto.proto.GetByKeyResponse.prototype.addEntities = function(e, t) {
                return r.Message.addToRepeatedWrapperField(this, 2, e, proto.proto.EntityID, t)
            }, proto.proto.GetByKeyResponse.prototype.clearEntitiesList = function() {
                return this.setEntitiesList([])
            }, i.object.extend(t, proto.proto)
        },
        1777: function(e, t, o) {
            var r = o(28),
                i = r,
                n = Function("return this")();
            i.exportSymbol("proto.proto.FreezeTransactionBody", null, n), proto.proto.FreezeTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.FreezeTransactionBody, r.Message), i.DEBUG && !COMPILED && (proto.proto.FreezeTransactionBody.displayName = "proto.proto.FreezeTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.FreezeTransactionBody.prototype.toObject = function(e) {
                return proto.proto.FreezeTransactionBody.toObject(e, this)
            }, proto.proto.FreezeTransactionBody.toObject = function(e, t) {
                var o = {
                    starthour: r.Message.getFieldWithDefault(t, 1, 0),
                    startmin: r.Message.getFieldWithDefault(t, 2, 0),
                    endhour: r.Message.getFieldWithDefault(t, 3, 0),
                    endmin: r.Message.getFieldWithDefault(t, 4, 0)
                };
                return e && (o.$jspbMessageInstance = t), o
            }), proto.proto.FreezeTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.FreezeTransactionBody;
                return proto.proto.FreezeTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.FreezeTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = t.readInt32();
                            e.setStarthour(o);
                            break;
                        case 2:
                            o = t.readInt32();
                            e.setStartmin(o);
                            break;
                        case 3:
                            o = t.readInt32();
                            e.setEndhour(o);
                            break;
                        case 4:
                            o = t.readInt32();
                            e.setEndmin(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.FreezeTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.FreezeTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.FreezeTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                0 !== (o = e.getStarthour()) && t.writeInt32(1, o), 0 !== (o = e.getStartmin()) && t.writeInt32(2, o), 0 !== (o = e.getEndhour()) && t.writeInt32(3, o), 0 !== (o = e.getEndmin()) && t.writeInt32(4, o)
            }, proto.proto.FreezeTransactionBody.prototype.getStarthour = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.proto.FreezeTransactionBody.prototype.setStarthour = function(e) {
                return r.Message.setProto3IntField(this, 1, e)
            }, proto.proto.FreezeTransactionBody.prototype.getStartmin = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.proto.FreezeTransactionBody.prototype.setStartmin = function(e) {
                return r.Message.setProto3IntField(this, 2, e)
            }, proto.proto.FreezeTransactionBody.prototype.getEndhour = function() {
                return r.Message.getFieldWithDefault(this, 3, 0)
            }, proto.proto.FreezeTransactionBody.prototype.setEndhour = function(e) {
                return r.Message.setProto3IntField(this, 3, e)
            }, proto.proto.FreezeTransactionBody.prototype.getEndmin = function() {
                return r.Message.getFieldWithDefault(this, 4, 0)
            }, proto.proto.FreezeTransactionBody.prototype.setEndmin = function(e) {
                return r.Message.setProto3IntField(this, 4, e)
            }, i.object.extend(t, proto.proto)
        },
        1784: function(e, t, o) {
            var r = o(28),
                i = r,
                n = Function("return this")(),
                s = o(36);
            i.object.extend(proto, s), i.exportSymbol("proto.proto.FileAppendTransactionBody", null, n), proto.proto.FileAppendTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.FileAppendTransactionBody, r.Message), i.DEBUG && !COMPILED && (proto.proto.FileAppendTransactionBody.displayName = "proto.proto.FileAppendTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.FileAppendTransactionBody.prototype.toObject = function(e) {
                return proto.proto.FileAppendTransactionBody.toObject(e, this)
            }, proto.proto.FileAppendTransactionBody.toObject = function(e, t) {
                var o, r = {
                    fileid: (o = t.getFileid()) && s.FileID.toObject(e, o),
                    contents: t.getContents_asB64()
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.FileAppendTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.FileAppendTransactionBody;
                return proto.proto.FileAppendTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.FileAppendTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 2:
                            var o = new s.FileID;
                            t.readMessage(o, s.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        case 4:
                            o = t.readBytes();
                            e.setContents(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.FileAppendTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.FileAppendTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.FileAppendTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getFileid()) && t.writeMessage(2, o, s.FileID.serializeBinaryToWriter), (o = e.getContents_asU8()).length > 0 && t.writeBytes(4, o)
            }, proto.proto.FileAppendTransactionBody.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, s.FileID, 2)
            }, proto.proto.FileAppendTransactionBody.prototype.setFileid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.FileAppendTransactionBody.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.FileAppendTransactionBody.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.FileAppendTransactionBody.prototype.getContents = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.proto.FileAppendTransactionBody.prototype.getContents_asB64 = function() {
                return r.Message.bytesAsB64(this.getContents())
            }, proto.proto.FileAppendTransactionBody.prototype.getContents_asU8 = function() {
                return r.Message.bytesAsU8(this.getContents())
            }, proto.proto.FileAppendTransactionBody.prototype.setContents = function(e) {
                return r.Message.setProto3BytesField(this, 4, e)
            }, i.object.extend(t, proto.proto)
        },
        1785: function(e, t, o) {
            var r = o(28),
                i = r,
                n = Function("return this")(),
                s = o(36);
            i.object.extend(proto, s);
            var a = o(105);
            i.object.extend(proto, a), i.exportSymbol("proto.proto.FileCreateTransactionBody", null, n), proto.proto.FileCreateTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.FileCreateTransactionBody, r.Message), i.DEBUG && !COMPILED && (proto.proto.FileCreateTransactionBody.displayName = "proto.proto.FileCreateTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.FileCreateTransactionBody.prototype.toObject = function(e) {
                return proto.proto.FileCreateTransactionBody.toObject(e, this)
            }, proto.proto.FileCreateTransactionBody.toObject = function(e, t) {
                var o, r = {
                    expirationtime: (o = t.getExpirationtime()) && a.Timestamp.toObject(e, o),
                    keys: (o = t.getKeys()) && s.KeyList.toObject(e, o),
                    contents: t.getContents_asB64(),
                    shardid: (o = t.getShardid()) && s.ShardID.toObject(e, o),
                    realmid: (o = t.getRealmid()) && s.RealmID.toObject(e, o),
                    newrealmadminkey: (o = t.getNewrealmadminkey()) && s.Key.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.FileCreateTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.FileCreateTransactionBody;
                return proto.proto.FileCreateTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.FileCreateTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 2:
                            var o = new a.Timestamp;
                            t.readMessage(o, a.Timestamp.deserializeBinaryFromReader), e.setExpirationtime(o);
                            break;
                        case 3:
                            o = new s.KeyList;
                            t.readMessage(o, s.KeyList.deserializeBinaryFromReader), e.setKeys(o);
                            break;
                        case 4:
                            o = t.readBytes();
                            e.setContents(o);
                            break;
                        case 5:
                            o = new s.ShardID;
                            t.readMessage(o, s.ShardID.deserializeBinaryFromReader), e.setShardid(o);
                            break;
                        case 6:
                            o = new s.RealmID;
                            t.readMessage(o, s.RealmID.deserializeBinaryFromReader), e.setRealmid(o);
                            break;
                        case 7:
                            o = new s.Key;
                            t.readMessage(o, s.Key.deserializeBinaryFromReader), e.setNewrealmadminkey(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.FileCreateTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.FileCreateTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.FileCreateTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getExpirationtime()) && t.writeMessage(2, o, a.Timestamp.serializeBinaryToWriter), null != (o = e.getKeys()) && t.writeMessage(3, o, s.KeyList.serializeBinaryToWriter), (o = e.getContents_asU8()).length > 0 && t.writeBytes(4, o), null != (o = e.getShardid()) && t.writeMessage(5, o, s.ShardID.serializeBinaryToWriter), null != (o = e.getRealmid()) && t.writeMessage(6, o, s.RealmID.serializeBinaryToWriter), null != (o = e.getNewrealmadminkey()) && t.writeMessage(7, o, s.Key.serializeBinaryToWriter)
            }, proto.proto.FileCreateTransactionBody.prototype.getExpirationtime = function() {
                return r.Message.getWrapperField(this, a.Timestamp, 2)
            }, proto.proto.FileCreateTransactionBody.prototype.setExpirationtime = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.FileCreateTransactionBody.prototype.clearExpirationtime = function() {
                return this.setExpirationtime(void 0)
            }, proto.proto.FileCreateTransactionBody.prototype.hasExpirationtime = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.FileCreateTransactionBody.prototype.getKeys = function() {
                return r.Message.getWrapperField(this, s.KeyList, 3)
            }, proto.proto.FileCreateTransactionBody.prototype.setKeys = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.FileCreateTransactionBody.prototype.clearKeys = function() {
                return this.setKeys(void 0)
            }, proto.proto.FileCreateTransactionBody.prototype.hasKeys = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.FileCreateTransactionBody.prototype.getContents = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.proto.FileCreateTransactionBody.prototype.getContents_asB64 = function() {
                return r.Message.bytesAsB64(this.getContents())
            }, proto.proto.FileCreateTransactionBody.prototype.getContents_asU8 = function() {
                return r.Message.bytesAsU8(this.getContents())
            }, proto.proto.FileCreateTransactionBody.prototype.setContents = function(e) {
                return r.Message.setProto3BytesField(this, 4, e)
            }, proto.proto.FileCreateTransactionBody.prototype.getShardid = function() {
                return r.Message.getWrapperField(this, s.ShardID, 5)
            }, proto.proto.FileCreateTransactionBody.prototype.setShardid = function(e) {
                return r.Message.setWrapperField(this, 5, e)
            }, proto.proto.FileCreateTransactionBody.prototype.clearShardid = function() {
                return this.setShardid(void 0)
            }, proto.proto.FileCreateTransactionBody.prototype.hasShardid = function() {
                return null != r.Message.getField(this, 5)
            }, proto.proto.FileCreateTransactionBody.prototype.getRealmid = function() {
                return r.Message.getWrapperField(this, s.RealmID, 6)
            }, proto.proto.FileCreateTransactionBody.prototype.setRealmid = function(e) {
                return r.Message.setWrapperField(this, 6, e)
            }, proto.proto.FileCreateTransactionBody.prototype.clearRealmid = function() {
                return this.setRealmid(void 0)
            }, proto.proto.FileCreateTransactionBody.prototype.hasRealmid = function() {
                return null != r.Message.getField(this, 6)
            }, proto.proto.FileCreateTransactionBody.prototype.getNewrealmadminkey = function() {
                return r.Message.getWrapperField(this, s.Key, 7)
            }, proto.proto.FileCreateTransactionBody.prototype.setNewrealmadminkey = function(e) {
                return r.Message.setWrapperField(this, 7, e)
            }, proto.proto.FileCreateTransactionBody.prototype.clearNewrealmadminkey = function() {
                return this.setNewrealmadminkey(void 0)
            }, proto.proto.FileCreateTransactionBody.prototype.hasNewrealmadminkey = function() {
                return null != r.Message.getField(this, 7)
            }, i.object.extend(t, proto.proto)
        },
        1786: function(e, t, o) {
            var r = o(28),
                i = r,
                n = Function("return this")(),
                s = o(36);
            i.object.extend(proto, s), i.exportSymbol("proto.proto.FileDeleteTransactionBody", null, n), proto.proto.FileDeleteTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.FileDeleteTransactionBody, r.Message), i.DEBUG && !COMPILED && (proto.proto.FileDeleteTransactionBody.displayName = "proto.proto.FileDeleteTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.FileDeleteTransactionBody.prototype.toObject = function(e) {
                return proto.proto.FileDeleteTransactionBody.toObject(e, this)
            }, proto.proto.FileDeleteTransactionBody.toObject = function(e, t) {
                var o, r = {
                    fileid: (o = t.getFileid()) && s.FileID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.FileDeleteTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.FileDeleteTransactionBody;
                return proto.proto.FileDeleteTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.FileDeleteTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 2:
                            var o = new s.FileID;
                            t.readMessage(o, s.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.FileDeleteTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.FileDeleteTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.FileDeleteTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o;
                null != (o = e.getFileid()) && t.writeMessage(2, o, s.FileID.serializeBinaryToWriter)
            }, proto.proto.FileDeleteTransactionBody.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, s.FileID, 2)
            }, proto.proto.FileDeleteTransactionBody.prototype.setFileid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.FileDeleteTransactionBody.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.FileDeleteTransactionBody.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 2)
            }, i.object.extend(t, proto.proto)
        },
        1787: function(e, t, o) {
            var r = o(28),
                i = r,
                n = Function("return this")(),
                s = o(36);
            i.object.extend(proto, s);
            var a = o(105);
            i.object.extend(proto, a), i.exportSymbol("proto.proto.FileUpdateTransactionBody", null, n), proto.proto.FileUpdateTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.FileUpdateTransactionBody, r.Message), i.DEBUG && !COMPILED && (proto.proto.FileUpdateTransactionBody.displayName = "proto.proto.FileUpdateTransactionBody"), r.Message.GENERATE_TO_OBJECT && (proto.proto.FileUpdateTransactionBody.prototype.toObject = function(e) {
                return proto.proto.FileUpdateTransactionBody.toObject(e, this)
            }, proto.proto.FileUpdateTransactionBody.toObject = function(e, t) {
                var o, r = {
                    fileid: (o = t.getFileid()) && s.FileID.toObject(e, o),
                    expirationtime: (o = t.getExpirationtime()) && a.Timestamp.toObject(e, o),
                    keys: (o = t.getKeys()) && s.KeyList.toObject(e, o),
                    contents: t.getContents_asB64()
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.FileUpdateTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.FileUpdateTransactionBody;
                return proto.proto.FileUpdateTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.FileUpdateTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new s.FileID;
                            t.readMessage(o, s.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        case 2:
                            o = new a.Timestamp;
                            t.readMessage(o, a.Timestamp.deserializeBinaryFromReader), e.setExpirationtime(o);
                            break;
                        case 3:
                            o = new s.KeyList;
                            t.readMessage(o, s.KeyList.deserializeBinaryFromReader), e.setKeys(o);
                            break;
                        case 4:
                            o = t.readBytes();
                            e.setContents(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.FileUpdateTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.FileUpdateTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.FileUpdateTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getFileid()) && t.writeMessage(1, o, s.FileID.serializeBinaryToWriter), null != (o = e.getExpirationtime()) && t.writeMessage(2, o, a.Timestamp.serializeBinaryToWriter), null != (o = e.getKeys()) && t.writeMessage(3, o, s.KeyList.serializeBinaryToWriter), (o = e.getContents_asU8()).length > 0 && t.writeBytes(4, o)
            }, proto.proto.FileUpdateTransactionBody.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, s.FileID, 1)
            }, proto.proto.FileUpdateTransactionBody.prototype.setFileid = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.FileUpdateTransactionBody.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.FileUpdateTransactionBody.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.FileUpdateTransactionBody.prototype.getExpirationtime = function() {
                return r.Message.getWrapperField(this, a.Timestamp, 2)
            }, proto.proto.FileUpdateTransactionBody.prototype.setExpirationtime = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.FileUpdateTransactionBody.prototype.clearExpirationtime = function() {
                return this.setExpirationtime(void 0)
            }, proto.proto.FileUpdateTransactionBody.prototype.hasExpirationtime = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.FileUpdateTransactionBody.prototype.getKeys = function() {
                return r.Message.getWrapperField(this, s.KeyList, 3)
            }, proto.proto.FileUpdateTransactionBody.prototype.setKeys = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.FileUpdateTransactionBody.prototype.clearKeys = function() {
                return this.setKeys(void 0)
            }, proto.proto.FileUpdateTransactionBody.prototype.hasKeys = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.FileUpdateTransactionBody.prototype.getContents = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.proto.FileUpdateTransactionBody.prototype.getContents_asB64 = function() {
                return r.Message.bytesAsB64(this.getContents())
            }, proto.proto.FileUpdateTransactionBody.prototype.getContents_asU8 = function() {
                return r.Message.bytesAsU8(this.getContents())
            }, proto.proto.FileUpdateTransactionBody.prototype.setContents = function(e) {
                return r.Message.setProto3BytesField(this, 4, e)
            }, i.object.extend(t, proto.proto)
        },
        1799: function(e, t, o) {
            o(3264);
            var r = o(239),
                i = o(176),
                n = o(289).grpc,
                s = function() {
                    function e() {}
                    return e.serviceName = "proto.FreezeService", e
                }();

            function a(e, t) {
                this.serviceHost = e, this.options = t || {}
            }
            s.freeze = {
                methodName: "freeze",
                service: s,
                requestStream: !1,
                responseStream: !1,
                requestType: i.Transaction,
                responseType: r.TransactionResponse
            }, t.FreezeService = s, a.prototype.freeze = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = n.unary(s.freeze, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== n.Code.OK) {
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
            }, t.FreezeServiceClient = a
        },
        1808: function(e, t, o) {
            var r = o(28),
                i = r,
                n = Function("return this")(),
                s = o(36);
            i.object.extend(proto, s);
            var a = o(105);
            i.object.extend(proto, a), i.exportSymbol("proto.com.hedera.mirror.api.proto.ConsensusTopicQuery", null, n), i.exportSymbol("proto.com.hedera.mirror.api.proto.ConsensusTopicResponse", null, n), proto.com.hedera.mirror.api.proto.ConsensusTopicQuery = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.com.hedera.mirror.api.proto.ConsensusTopicQuery, r.Message), i.DEBUG && !COMPILED && (proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.displayName = "proto.com.hedera.mirror.api.proto.ConsensusTopicQuery"), proto.com.hedera.mirror.api.proto.ConsensusTopicResponse = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.com.hedera.mirror.api.proto.ConsensusTopicResponse, r.Message), i.DEBUG && !COMPILED && (proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.displayName = "proto.com.hedera.mirror.api.proto.ConsensusTopicResponse"), r.Message.GENERATE_TO_OBJECT && (proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.toObject = function(e) {
                return proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.toObject(e, this)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.toObject = function(e, t) {
                var o, i = {
                    topicid: (o = t.getTopicid()) && s.TopicID.toObject(e, o),
                    consensusstarttime: (o = t.getConsensusstarttime()) && a.Timestamp.toObject(e, o),
                    consensusendtime: (o = t.getConsensusendtime()) && a.Timestamp.toObject(e, o),
                    limit: r.Message.getFieldWithDefault(t, 4, 0)
                };
                return e && (i.$jspbMessageInstance = t), i
            }), proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.com.hedera.mirror.api.proto.ConsensusTopicQuery;
                return proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.deserializeBinaryFromReader(o, t)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new s.TopicID;
                            t.readMessage(o, s.TopicID.deserializeBinaryFromReader), e.setTopicid(o);
                            break;
                        case 2:
                            o = new a.Timestamp;
                            t.readMessage(o, a.Timestamp.deserializeBinaryFromReader), e.setConsensusstarttime(o);
                            break;
                        case 3:
                            o = new a.Timestamp;
                            t.readMessage(o, a.Timestamp.deserializeBinaryFromReader), e.setConsensusendtime(o);
                            break;
                        case 4:
                            o = t.readUint64();
                            e.setLimit(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getTopicid()) && t.writeMessage(1, o, s.TopicID.serializeBinaryToWriter), null != (o = e.getConsensusstarttime()) && t.writeMessage(2, o, a.Timestamp.serializeBinaryToWriter), null != (o = e.getConsensusendtime()) && t.writeMessage(3, o, a.Timestamp.serializeBinaryToWriter), 0 !== (o = e.getLimit()) && t.writeUint64(4, o)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.getTopicid = function() {
                return r.Message.getWrapperField(this, s.TopicID, 1)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.setTopicid = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.clearTopicid = function() {
                return this.setTopicid(void 0)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.hasTopicid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.getConsensusstarttime = function() {
                return r.Message.getWrapperField(this, a.Timestamp, 2)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.setConsensusstarttime = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.clearConsensusstarttime = function() {
                return this.setConsensusstarttime(void 0)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.hasConsensusstarttime = function() {
                return null != r.Message.getField(this, 2)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.getConsensusendtime = function() {
                return r.Message.getWrapperField(this, a.Timestamp, 3)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.setConsensusendtime = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.clearConsensusendtime = function() {
                return this.setConsensusendtime(void 0)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.hasConsensusendtime = function() {
                return null != r.Message.getField(this, 3)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.getLimit = function() {
                return r.Message.getFieldWithDefault(this, 4, 0)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicQuery.prototype.setLimit = function(e) {
                return r.Message.setProto3IntField(this, 4, e)
            }, r.Message.GENERATE_TO_OBJECT && (proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.toObject = function(e) {
                return proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.toObject(e, this)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.toObject = function(e, t) {
                var o, i = {
                    consensustimestamp: (o = t.getConsensustimestamp()) && a.Timestamp.toObject(e, o),
                    message: t.getMessage_asB64(),
                    runninghash: t.getRunninghash_asB64(),
                    sequencenumber: r.Message.getFieldWithDefault(t, 4, 0)
                };
                return e && (i.$jspbMessageInstance = t), i
            }), proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.com.hedera.mirror.api.proto.ConsensusTopicResponse;
                return proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.deserializeBinaryFromReader(o, t)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.Timestamp;
                            t.readMessage(o, a.Timestamp.deserializeBinaryFromReader), e.setConsensustimestamp(o);
                            break;
                        case 2:
                            o = t.readBytes();
                            e.setMessage(o);
                            break;
                        case 3:
                            o = t.readBytes();
                            e.setRunninghash(o);
                            break;
                        case 4:
                            o = t.readUint64();
                            e.setSequencenumber(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getConsensustimestamp()) && t.writeMessage(1, o, a.Timestamp.serializeBinaryToWriter), (o = e.getMessage_asU8()).length > 0 && t.writeBytes(2, o), (o = e.getRunninghash_asU8()).length > 0 && t.writeBytes(3, o), 0 !== (o = e.getSequencenumber()) && t.writeUint64(4, o)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getConsensustimestamp = function() {
                return r.Message.getWrapperField(this, a.Timestamp, 1)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.setConsensustimestamp = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.clearConsensustimestamp = function() {
                return this.setConsensustimestamp(void 0)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.hasConsensustimestamp = function() {
                return null != r.Message.getField(this, 1)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getMessage = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getMessage_asB64 = function() {
                return r.Message.bytesAsB64(this.getMessage())
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getMessage_asU8 = function() {
                return r.Message.bytesAsU8(this.getMessage())
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.setMessage = function(e) {
                return r.Message.setProto3BytesField(this, 2, e)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getRunninghash = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getRunninghash_asB64 = function() {
                return r.Message.bytesAsB64(this.getRunninghash())
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getRunninghash_asU8 = function() {
                return r.Message.bytesAsU8(this.getRunninghash())
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.setRunninghash = function(e) {
                return r.Message.setProto3BytesField(this, 3, e)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.getSequencenumber = function() {
                return r.Message.getFieldWithDefault(this, 4, 0)
            }, proto.com.hedera.mirror.api.proto.ConsensusTopicResponse.prototype.setSequencenumber = function(e) {
                return r.Message.setProto3IntField(this, 4, e)
            }, i.object.extend(t, proto.com.hedera.mirror.api.proto)
        },
        264: function(e, t, o) {
            o(3263);
            var r = o(263),
                i = o(262),
                n = o(239),
                s = o(176),
                a = o(289).grpc,
                p = function() {
                    function e() {}
                    return e.serviceName = "proto.FileService", e
                }();

            function l(e, t) {
                this.serviceHost = e, this.options = t || {}
            }
            p.createFile = {
                methodName: "createFile",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: s.Transaction,
                responseType: n.TransactionResponse
            }, p.updateFile = {
                methodName: "updateFile",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: s.Transaction,
                responseType: n.TransactionResponse
            }, p.deleteFile = {
                methodName: "deleteFile",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: s.Transaction,
                responseType: n.TransactionResponse
            }, p.appendContent = {
                methodName: "appendContent",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: s.Transaction,
                responseType: n.TransactionResponse
            }, p.getFileContent = {
                methodName: "getFileContent",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: r.Query,
                responseType: i.Response
            }, p.getFileInfo = {
                methodName: "getFileInfo",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: r.Query,
                responseType: i.Response
            }, p.systemDelete = {
                methodName: "systemDelete",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: s.Transaction,
                responseType: n.TransactionResponse
            }, p.systemUndelete = {
                methodName: "systemUndelete",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: s.Transaction,
                responseType: n.TransactionResponse
            }, t.FileService = p, l.prototype.createFile = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.createFile, {
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
            }, l.prototype.updateFile = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.updateFile, {
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
            }, l.prototype.deleteFile = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.deleteFile, {
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
            }, l.prototype.appendContent = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.appendContent, {
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
            }, l.prototype.getFileContent = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.getFileContent, {
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
            }, l.prototype.getFileInfo = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.getFileInfo, {
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
            }, l.prototype.systemDelete = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.systemDelete, {
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
            }, l.prototype.systemUndelete = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = a.unary(p.systemUndelete, {
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
            }, t.FileServiceClient = l
        },
        3257: function(e, t, o) {
            var r = o(28),
                i = r,
                n = Function("return this")(),
                s = o(105);
            i.object.extend(proto, s), i.exportSymbol("proto.proto.ExchangeRate", null, n), i.exportSymbol("proto.proto.ExchangeRateSet", null, n), proto.proto.ExchangeRate = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.ExchangeRate, r.Message), i.DEBUG && !COMPILED && (proto.proto.ExchangeRate.displayName = "proto.proto.ExchangeRate"), proto.proto.ExchangeRateSet = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, i.inherits(proto.proto.ExchangeRateSet, r.Message), i.DEBUG && !COMPILED && (proto.proto.ExchangeRateSet.displayName = "proto.proto.ExchangeRateSet"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ExchangeRate.prototype.toObject = function(e) {
                return proto.proto.ExchangeRate.toObject(e, this)
            }, proto.proto.ExchangeRate.toObject = function(e, t) {
                var o, i = {
                    hbarequiv: r.Message.getFieldWithDefault(t, 1, 0),
                    centequiv: r.Message.getFieldWithDefault(t, 2, 0),
                    expirationtime: (o = t.getExpirationtime()) && s.TimestampSeconds.toObject(e, o)
                };
                return e && (i.$jspbMessageInstance = t), i
            }), proto.proto.ExchangeRate.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ExchangeRate;
                return proto.proto.ExchangeRate.deserializeBinaryFromReader(o, t)
            }, proto.proto.ExchangeRate.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = t.readInt32();
                            e.setHbarequiv(o);
                            break;
                        case 2:
                            o = t.readInt32();
                            e.setCentequiv(o);
                            break;
                        case 3:
                            o = new s.TimestampSeconds;
                            t.readMessage(o, s.TimestampSeconds.deserializeBinaryFromReader), e.setExpirationtime(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ExchangeRate.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ExchangeRate.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ExchangeRate.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                0 !== (o = e.getHbarequiv()) && t.writeInt32(1, o), 0 !== (o = e.getCentequiv()) && t.writeInt32(2, o), null != (o = e.getExpirationtime()) && t.writeMessage(3, o, s.TimestampSeconds.serializeBinaryToWriter)
            }, proto.proto.ExchangeRate.prototype.getHbarequiv = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.proto.ExchangeRate.prototype.setHbarequiv = function(e) {
                return r.Message.setProto3IntField(this, 1, e)
            }, proto.proto.ExchangeRate.prototype.getCentequiv = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.proto.ExchangeRate.prototype.setCentequiv = function(e) {
                return r.Message.setProto3IntField(this, 2, e)
            }, proto.proto.ExchangeRate.prototype.getExpirationtime = function() {
                return r.Message.getWrapperField(this, s.TimestampSeconds, 3)
            }, proto.proto.ExchangeRate.prototype.setExpirationtime = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.ExchangeRate.prototype.clearExpirationtime = function() {
                return this.setExpirationtime(void 0)
            }, proto.proto.ExchangeRate.prototype.hasExpirationtime = function() {
                return null != r.Message.getField(this, 3)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.ExchangeRateSet.prototype.toObject = function(e) {
                return proto.proto.ExchangeRateSet.toObject(e, this)
            }, proto.proto.ExchangeRateSet.toObject = function(e, t) {
                var o, r = {
                    currentrate: (o = t.getCurrentrate()) && proto.proto.ExchangeRate.toObject(e, o),
                    nextrate: (o = t.getNextrate()) && proto.proto.ExchangeRate.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.ExchangeRateSet.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ExchangeRateSet;
                return proto.proto.ExchangeRateSet.deserializeBinaryFromReader(o, t)
            }, proto.proto.ExchangeRateSet.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new proto.proto.ExchangeRate;
                            t.readMessage(o, proto.proto.ExchangeRate.deserializeBinaryFromReader), e.setCurrentrate(o);
                            break;
                        case 2:
                            o = new proto.proto.ExchangeRate;
                            t.readMessage(o, proto.proto.ExchangeRate.deserializeBinaryFromReader), e.setNextrate(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ExchangeRateSet.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ExchangeRateSet.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ExchangeRateSet.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getCurrentrate()) && t.writeMessage(1, o, proto.proto.ExchangeRate.serializeBinaryToWriter), null != (o = e.getNextrate()) && t.writeMessage(2, o, proto.proto.ExchangeRate.serializeBinaryToWriter)
            }, proto.proto.ExchangeRateSet.prototype.getCurrentrate = function() {
                return r.Message.getWrapperField(this, proto.proto.ExchangeRate, 1)
            }, proto.proto.ExchangeRateSet.prototype.setCurrentrate = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.ExchangeRateSet.prototype.clearCurrentrate = function() {
                return this.setCurrentrate(void 0)
            }, proto.proto.ExchangeRateSet.prototype.hasCurrentrate = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.ExchangeRateSet.prototype.getNextrate = function() {
                return r.Message.getWrapperField(this, proto.proto.ExchangeRate, 2)
            }, proto.proto.ExchangeRateSet.prototype.setNextrate = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.ExchangeRateSet.prototype.clearNextrate = function() {
                return this.setNextrate(void 0)
            }, proto.proto.ExchangeRateSet.prototype.hasNextrate = function() {
                return null != r.Message.getField(this, 2)
            }, i.object.extend(t, proto.proto)
        },
        3263: function(e, t, o) {
            var r = o(28),
                i = (Function("return this")(), o(263));
            r.object.extend(proto, i);
            var n = o(262);
            r.object.extend(proto, n);
            var s = o(239);
            r.object.extend(proto, s);
            var a = o(176);
            r.object.extend(proto, a)
        },
        3264: function(e, t, o) {
            var r = o(28),
                i = (Function("return this")(), o(239));
            r.object.extend(proto, i);
            var n = o(176);
            r.object.extend(proto, n)
        },
        3319: function(e, t, o) {
            var r = o(1808),
                i = o(289).grpc,
                n = function() {
                    function e() {}
                    return e.serviceName = "com.hedera.mirror.api.proto.ConsensusService", e
                }();

            function s(e, t) {
                this.serviceHost = e, this.options = t || {}
            }
            n.subscribeTopic = {
                methodName: "subscribeTopic",
                service: n,
                requestStream: !1,
                responseStream: !0,
                requestType: r.ConsensusTopicQuery,
                responseType: r.ConsensusTopicResponse
            }, t.ConsensusService = n, s.prototype.subscribeTopic = function(e, t) {
                var o = {
                        data: [],
                        end: [],
                        status: []
                    },
                    r = i.invoke(n.subscribeTopic, {
                        request: e,
                        host: this.serviceHost,
                        metadata: t,
                        transport: this.options.transport,
                        debug: this.options.debug,
                        onMessage: function(e) {
                            o.data.forEach((function(t) {
                                t(e)
                            }))
                        },
                        onEnd: function(e, t, r) {
                            o.status.forEach((function(o) {
                                o({
                                    code: e,
                                    details: t,
                                    metadata: r
                                })
                            })), o.end.forEach((function(o) {
                                o({
                                    code: e,
                                    details: t,
                                    metadata: r
                                })
                            })), o = null
                        }
                    });
                return {
                    on: function(e, t) {
                        return o[e].push(t), this
                    },
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, t.ConsensusServiceClient = s
        }
    }
]);