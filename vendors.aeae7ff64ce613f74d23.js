(window.webpackJsonp = window.webpackJsonp || []).push([
    [148], {
        10: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return i
            })), n.d(e, "a", (function() {
                return s
            }));
            const r = [];
            for (let t = 0; t <= 255; t += 1) r.push(t.toString(16).padStart(2, "0"));

            function i(t) {
                let e = "";
                for (const n of t) e += r[n];
                return e
            }

            function s(t) {
                const e = (t.startsWith("0x") ? t.substring(2) : t).match(/.{1,2}/gu);
                return new Uint8Array((null == e ? [] : e).map(t => parseInt(t, 16)))
            }
        },
        107: function(t, e, n) {
            "use strict";

            function r(t) {
                return (new TextDecoder).decode(t)
            }

            function i(t) {
                return (new TextEncoder).encode(t)
            }
            n.d(e, "a", (function() {
                return r
            })), n.d(e, "b", (function() {
                return i
            }))
        },
        2320: function(t, e, n) {
            "use strict";
            n.d(e, "t", (function() {
                return r.a
            })), n.d(e, "q", (function() {
                return i.a
            })), n.d(e, "r", (function() {
                return i.b
            })), n.d(e, "s", (function() {
                return i.c
            })), n.d(e, "jb", (function() {
                return i.d
            })), n.d(e, "Kb", (function() {
                return i.h
            })), n.d(e, "Lb", (function() {
                return i.i
            })), n.d(e, "Cb", (function() {
                return s.a
            })), n.d(e, "Gb", (function() {
                return o.a
            })), n.d(e, "ob", (function() {
                return u.a
            })), n.d(e, "nb", (function() {
                return a.a
            })), n.d(e, "wb", (function() {
                return c.a
            })), n.d(e, "a", (function() {
                return l.a
            })), n.d(e, "b", (function() {
                return f.a
            })), n.d(e, "c", (function() {
                return d.a
            })), n.d(e, "d", (function() {
                return h.a
            })), n.d(e, "e", (function() {
                return _.a
            })), n.d(e, "f", (function() {
                return m.a
            })), n.d(e, "g", (function() {
                return p.a
            })), n.d(e, "h", (function() {
                return I.a
            })), n.d(e, "i", (function() {
                return S.a
            })), n.d(e, "j", (function() {
                return b.a
            })), n.d(e, "k", (function() {
                return g.a
            })), n.d(e, "l", (function() {
                return k.a
            })), n.d(e, "m", (function() {
                return y.a
            })), n.d(e, "n", (function() {
                return F.a
            })), n.d(e, "o", (function() {
                return T.a
            })), n.d(e, "p", (function() {
                return C.a
            })), n.d(e, "u", (function() {
                return D.a
            })), n.d(e, "v", (function() {
                return G.a
            })), n.d(e, "w", (function() {
                return w.a
            })), n.d(e, "x", (function() {
                return v.a
            })), n.d(e, "y", (function() {
                return x.a
            })), n.d(e, "z", (function() {
                return P.a
            })), n.d(e, "A", (function() {
                return E.a
            })), n.d(e, "B", (function() {
                return A.a
            })), n.d(e, "C", (function() {
                return N.b
            })), n.d(e, "D", (function() {
                return U.a
            })), n.d(e, "E", (function() {
                return z.a
            })), n.d(e, "F", (function() {
                return M.a
            })), n.d(e, "G", (function() {
                return O.a
            })), n.d(e, "H", (function() {
                return R.a
            })), n.d(e, "I", (function() {
                return L.a
            })), n.d(e, "J", (function() {
                return q.a
            })), n.d(e, "K", (function() {
                return B.a
            })), n.d(e, "L", (function() {
                return Q.a
            })), n.d(e, "M", (function() {
                return DelegateContractId_DelegateContractId
            })), n.d(e, "O", (function() {
                return H.a
            })), n.d(e, "R", (function() {
                return W.a
            })), n.d(e, "Q", (function() {
                return V.a
            })), n.d(e, "P", (function() {
                return $.a
            })), n.d(e, "N", (function() {
                return X.a
            })), n.d(e, "S", (function() {
                return j.a
            })), n.d(e, "T", (function() {
                return J.a
            })), n.d(e, "U", (function() {
                return Y.c
            })), n.d(e, "V", (function() {
                return Z.a
            })), n.d(e, "W", (function() {
                return tt.a
            })), n.d(e, "X", (function() {
                return et.a
            })), n.d(e, "Y", (function() {
                return nt.a
            })), n.d(e, "Z", (function() {
                return rt.a
            })), n.d(e, "ab", (function() {
                return it.a
            })), n.d(e, "bb", (function() {
                return FileContentsQuery_FileContentsQuery
            })), n.d(e, "cb", (function() {
                return ut.a
            })), n.d(e, "db", (function() {
                return at.a
            })), n.d(e, "eb", (function() {
                return ot.a
            })), n.d(e, "fb", (function() {
                return FileInfo_FileInfo
            })), n.d(e, "gb", (function() {
                return FileInfoQuery_FileInfoQuery
            })), n.d(e, "hb", (function() {
                return FileUpdateTransaction_FileUpdateTransaction
            })), n.d(e, "ib", (function() {
                return St.a
            })), n.d(e, "kb", (function() {
                return mt.a
            })), n.d(e, "lb", (function() {
                return bt.a
            })), n.d(e, "mb", (function() {
                return gt.a
            })), n.d(e, "qb", (function() {
                return kt.a
            })), n.d(e, "rb", (function() {
                return yt.a
            })), n.d(e, "sb", (function() {
                return Ft.a
            })), n.d(e, "tb", (function() {
                return Tt.a
            })), n.d(e, "vb", (function() {
                return Ct.a
            })), n.d(e, "yb", (function() {
                return Dt.a
            })), n.d(e, "zb", (function() {
                return Gt.a
            })), n.d(e, "Ab", (function() {
                return wt.a
            })), n.d(e, "Eb", (function() {
                return vt.a
            })), n.d(e, "Db", (function() {
                return xt.a
            })), n.d(e, "Fb", (function() {
                return Pt.a
            })), n.d(e, "Hb", (function() {
                return st.d
            })), n.d(e, "Jb", (function() {
                return Et.a
            })), n.d(e, "Mb", (function() {
                return At.a
            })), n.d(e, "Nb", (function() {
                return Nt.a
            })), n.d(e, "Ob", (function() {
                return Ut.a
            })), n.d(e, "Pb", (function() {
                return zt.a
            })), n.d(e, "Qb", (function() {
                return Mt.a
            })), n.d(e, "Rb", (function() {
                return Ot.a
            })), n.d(e, "Sb", (function() {
                return Rt.a
            })), n.d(e, "Tb", (function() {
                return Lt.a
            })), n.d(e, "Ub", (function() {
                return qt.a
            })), n.d(e, "Vb", (function() {
                return Bt.a
            })), n.d(e, "Xb", (function() {
                return Qt.a
            })), n.d(e, "Yb", (function() {
                return Kt.a
            })), n.d(e, "Zb", (function() {
                return Ht.a
            })), n.d(e, "ac", (function() {
                return ct.a
            })), n.d(e, "bc", (function() {
                return Wt.a
            })), n.d(e, "cc", (function() {
                return Vt.a
            })), n.d(e, "dc", (function() {
                return $t.a
            })), n.d(e, "ec", (function() {
                return Xt.a
            })), n.d(e, "fc", (function() {
                return jt.a
            })), n.d(e, "gc", (function() {
                return Jt.a
            })), n.d(e, "hc", (function() {
                return Yt.a
            })), n.d(e, "ic", (function() {
                return Zt.a
            })), n.d(e, "jc", (function() {
                return te.a
            })), n.d(e, "kc", (function() {
                return ee.a
            })), n.d(e, "lc", (function() {
                return ne.a
            })), n.d(e, "mc", (function() {
                return re.a
            })), n.d(e, "nc", (function() {
                return ie.a
            })), n.d(e, "oc", (function() {
                return se.a
            })), n.d(e, "pc", (function() {
                return oe.a
            })), n.d(e, "qc", (function() {
                return ue.a
            })), n.d(e, "rc", (function() {
                return ae.a
            })), n.d(e, "sc", (function() {
                return ce.a
            })), n.d(e, "tc", (function() {
                return le.a
            })), n.d(e, "uc", (function() {
                return fe.a
            })), n.d(e, "vc", (function() {
                return de.a
            })), n.d(e, "wc", (function() {
                return he.a
            })), n.d(e, "xc", (function() {
                return _e.a
            })), n.d(e, "yc", (function() {
                return me.a
            })), n.d(e, "zc", (function() {
                return pe.a
            })), n.d(e, "Ac", (function() {
                return Ie.a
            })), n.d(e, "Bc", (function() {
                return Se.a
            })), n.d(e, "Cc", (function() {
                return be.a
            })), n.d(e, "Dc", (function() {
                return ge.a
            })), n.d(e, "Ec", (function() {
                return ke.a
            })), n.d(e, "Fc", (function() {
                return ye.a
            })), n.d(e, "Gc", (function() {
                return Fe.a
            })), n.d(e, "Hc", (function() {
                return Te.a
            })), n.d(e, "Ic", (function() {
                return Ce.a
            })), n.d(e, "Jc", (function() {
                return pt.f
            })), n.d(e, "Kc", (function() {
                return De.a
            })), n.d(e, "Lc", (function() {
                return Ge.a
            })), n.d(e, "Mc", (function() {
                return we.a
            })), n.d(e, "Nc", (function() {
                return ve.a
            })), n.d(e, "Oc", (function() {
                return xe.a
            })), n.d(e, "Pc", (function() {
                return Pe.a
            })), n.d(e, "Qc", (function() {
                return Ee.a
            })), n.d(e, "Rc", (function() {
                return Ae.a
            })), n.d(e, "Sc", (function() {
                return Ne.a
            })), n.d(e, "Tc", (function() {
                return Ue.a
            })), n.d(e, "Wb", (function() {
                return ze.a
            })), n.d(e, "Bb", (function() {
                return Me.a
            })), n.d(e, "Ib", (function() {
                return Oe.a
            })), n.d(e, "pb", (function() {
                return dt.a
            })), n.d(e, "ub", (function() {
                return Le.a
            })), n.d(e, "xb", (function() {
                return qe
            }));
            var r = n(44),
                i = n(65),
                s = n(309),
                o = n(100),
                u = n(93),
                a = n(25),
                c = n(695),
                l = n(1480),
                f = n(1483),
                d = n(1484),
                h = n(916),
                _ = n(440),
                m = n(1485),
                p = n(1486),
                I = n(5),
                S = n(702),
                b = n(1487),
                g = n(276),
                k = n(703),
                y = n(1488),
                F = n(1489),
                T = n(1490),
                C = n(701),
                D = n(1491),
                G = n(1492),
                w = n(1493),
                v = n(705),
                x = n(1494),
                P = n(1495),
                E = n(302),
                A = n(311),
                N = n(6),
                U = n(40),
                z = n(706),
                M = n(1496),
                O = n(700),
                R = n(1497),
                L = n(303),
                q = n(247),
                B = n(304),
                Q = n(305),
                K = n(10);
            class DelegateContractId_DelegateContractId extends U.a {
                constructor(t, e, n, r) {
                    super(t, e, n, r)
                }
                static fromEvmAddress(t, e, n) {
                    return new DelegateContractId_DelegateContractId(t, e, 0, K.a(n))
                }
                static fromString(t) {
                    return new DelegateContractId_DelegateContractId(U.a.fromString(t))
                }
                static _fromProtobuf(t) {
                    return new DelegateContractId_DelegateContractId(U.a._fromProtobuf(t))
                }
                static fromBytes(t) {
                    return new DelegateContractId_DelegateContractId(U.a.fromBytes(t))
                }
                static fromSolidityAddress(t) {
                    return new DelegateContractId_DelegateContractId(U.a.fromSolidityAddress(t))
                }
                clone() {
                    const t = new DelegateContractId_DelegateContractId(this);
                    return t._checksum = this._checksum, t
                }
                _toProtobufKey() {
                    return {
                        delegatableContractId: this._toProtobuf()
                    }
                }
                static __fromProtobufKey(t) {
                    return DelegateContractId_DelegateContractId._fromProtobuf(t)
                }
            }
            r.a.setDelegateContractId(t => DelegateContractId_DelegateContractId.__fromProtobufKey(t));
            var H = n(707),
                W = n(1498),
                V = n(1499),
                $ = n(306),
                X = n(1500),
                j = n(364),
                J = n(1501),
                Y = n(59),
                Z = n(452),
                tt = n(535),
                et = n(708),
                nt = n(536),
                rt = n(1502),
                it = n(366),
                st = n(33),
                ot = n(45);
            class FileContentsQuery_FileContentsQuery extends st.d {
                constructor(t = {}) {
                    super(), this._fileId = null, null != t.fileId && this.setFileId(t.fileId)
                }
                static _fromProtobuf(t) {
                    const e = t.fileGetContents;
                    return new FileContentsQuery_FileContentsQuery({
                        fileId: null != e.fileID ? ot.a._fromProtobuf(e.fileID) : void 0
                    })
                }
                _validateChecksums(t) {
                    null != this._fileId && this._fileId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.file.getFileContent(e)
                }
                get fileId() {
                    return this._fileId
                }
                setFileId(t) {
                    return this._fileId = "string" == typeof t ? ot.a.fromString(t) : t.clone(), this
                }
                _mapResponseHeader(t) {
                    return t.fileGetContents.header
                }
                _mapResponse(t) {
                    const e = t.fileGetContents.fileContents.contents;
                    return Promise.resolve(e)
                }
                _onMakeRequest(t) {
                    return {
                        fileGetContents: {
                            header: t,
                            fileID: null != this._fileId ? this._fileId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "FileContentsQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            st.b.set("fileGetContents", FileContentsQuery_FileContentsQuery._fromProtobuf);
            var ut = n(365),
                at = n(534),
                ct = n(23),
                lt = n(1),
                ft = n.n(lt),
                dt = n(99),
                ht = n(11);
            const {
                proto: _t
            } = ht;
            class FileInfo_FileInfo {
                constructor(t) {
                    this.fileId = t.fileId, this.size = t.size, this.expirationTime = t.expirationTime, this.isDeleted = t.isDeleted, this.keys = t.keys, this.fileMemo = t.fileMemo, this.ledgerId = t.ledgerId, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    const e = t.size;
                    return new FileInfo_FileInfo({
                        fileId: ot.a._fromProtobuf(t.fileID),
                        size: e instanceof ft.a ? e : ft.a.fromValue(e),
                        expirationTime: ct.a._fromProtobuf(t.expirationTime),
                        isDeleted: t.deleted,
                        keys: null != t.keys ? u.a.__fromProtobufKeyList(t.keys) : new u.a,
                        fileMemo: null != t.memo ? t.memo : "",
                        ledgerId: null != t.ledgerId ? dt.a.fromBytes(t.ledgerId) : null
                    })
                }
                _toProtobuf() {
                    return {
                        fileID: this.fileId._toProtobuf(),
                        size: this.size,
                        expirationTime: this.expirationTime._toProtobuf(),
                        deleted: this.isDeleted,
                        keys: this.keys._toProtobufKey().keyList,
                        memo: this.fileMemo,
                        ledgerId: null != this.ledgerId ? this.ledgerId.toBytes() : null
                    }
                }
                static fromBytes(t) {
                    return FileInfo_FileInfo._fromProtobuf(ht.proto.FileGetInfoResponse.FileInfo.decode(t))
                }
                toBytes() {
                    return _t.FileGetInfoResponse.FileInfo.encode(this._toProtobuf()).finish()
                }
            }
            var mt = n(17);
            class FileInfoQuery_FileInfoQuery extends st.d {
                constructor(t = {}) {
                    super(), this._fileId = null, null != t.fileId && this.setFileId(t.fileId)
                }
                static _fromProtobuf(t) {
                    const e = t.fileGetInfo;
                    return new FileInfoQuery_FileInfoQuery({
                        fileId: null != e.fileID ? ot.a._fromProtobuf(e.fileID) : void 0
                    })
                }
                get fileId() {
                    return this._fileId
                }
                setFileId(t) {
                    return this._fileId = "string" == typeof t ? ot.a.fromString(t) : t.clone(), this
                }
                async getCost(t) {
                    let e = await super.getCost(t);
                    return e.toTinybars().greaterThan(25) ? e : mt.a.fromTinybars(25)
                }
                _validateChecksums(t) {
                    null != this._fileId && this._fileId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.file.getFileInfo(e)
                }
                _mapResponseHeader(t) {
                    return t.fileGetInfo.header
                }
                _mapResponse(t, e, n) {
                    const r = t.fileGetInfo;
                    return Promise.resolve(FileInfo_FileInfo._fromProtobuf(r.fileInfo))
                }
                _onMakeRequest(t) {
                    return {
                        fileGetInfo: {
                            header: t,
                            fileID: null != this._fileId ? this._fileId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "FileInfoQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            st.b.set("fileGetInfo", FileInfoQuery_FileInfoQuery._fromProtobuf);
            var pt = n(7),
                It = n(107);
            class FileUpdateTransaction_FileUpdateTransaction extends pt.f {
                constructor(t = {}) {
                    super(), this._fileId = null, this._keys = null, this._expirationTime = null, this._contents = null, this._fileMemo = null, null != t.fileId && this.setFileId(t.fileId), null != t.keys && this.setKeys(t.keys), null != t.expirationTime && this.setExpirationTime(t.expirationTime), null != t.contents && this.setContents(t.contents), null != t.fileMemo && this.setFileMemo(t.fileMemo)
                }
                static _fromProtobuf(t, e, n, r, i) {
                    const s = i[0].fileUpdate;
                    return pt.f._fromProtobufTransactions(new FileUpdateTransaction_FileUpdateTransaction({
                        fileId: null != s.fileID ? ot.a._fromProtobuf(s.fileID) : void 0,
                        keys: null != s.keys && null != s.keys.keys ? s.keys.keys.map(t => a.a._fromProtobufKey(t)) : void 0,
                        expirationTime: null != s.expirationTime ? ct.a._fromProtobuf(s.expirationTime) : void 0,
                        contents: null != s.contents ? s.contents : void 0,
                        fileMemo: null != s.memo && null != s.memo.value ? s.memo.value : void 0
                    }), t, e, n, r, i)
                }
                get fileId() {
                    return this._fileId
                }
                setFileId(t) {
                    return this._requireNotFrozen(), this._fileId = "string" == typeof t ? ot.a.fromString(t) : t.clone(), this
                }
                get keys() {
                    return this._keys
                }
                setKeys(t) {
                    if (this._requireNotFrozen(), t instanceof u.a && null != t.threshold) throw new Error("Cannot set threshold key as file key");
                    return this._keys = t instanceof u.a ? t.toArray() : t, this
                }
                get expirationTime() {
                    return this._expirationTime
                }
                setExpirationTime(t) {
                    return this._requireNotFrozen(), this._expirationTime = t instanceof ct.a ? t : ct.a.fromDate(t), this
                }
                get contents() {
                    return this._contents
                }
                setContents(t) {
                    return this._requireNotFrozen(), this._contents = t instanceof Uint8Array ? t : It.b(t), this
                }
                get fileMemo() {
                    return this._fileMemo
                }
                setFileMemo(t) {
                    return this._requireNotFrozen(), this._fileMemo = t, this
                }
                clearFileMemo() {
                    return this._requireNotFrozen(), this._fileMemo = null, this
                }
                _validateChecksums(t) {
                    null != this._fileId && this._fileId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.file.updateFile(e)
                }
                _getTransactionDataCase() {
                    return "fileUpdate"
                }
                _makeTransactionData() {
                    return {
                        fileID: null != this._fileId ? this._fileId._toProtobuf() : null,
                        keys: null != this._keys ? {
                            keys: this._keys.map(t => t._toProtobufKey())
                        } : null,
                        expirationTime: null != this._expirationTime ? this._expirationTime._toProtobuf() : null,
                        contents: this._contents,
                        memo: null != this._fileMemo ? {
                            value: this._fileMemo
                        } : null
                    }
                }
                _getLogId() {
                    return "FileUpdateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            pt.e.set("fileUpdate", FileUpdateTransaction_FileUpdateTransaction._fromProtobuf);
            var St = n(1503),
                bt = n(312),
                gt = n(189),
                kt = n(441),
                yt = n(1504),
                Ft = n(1505),
                Tt = n(1506),
                Ct = n(698),
                Dt = n(711),
                Gt = n(1507),
                wt = n(94),
                vt = n(1508),
                xt = n(1509),
                Pt = n(704),
                Et = n(710),
                At = n(1510),
                Nt = n(1511),
                Ut = n(137),
                zt = n(712),
                Mt = n(1512),
                Ot = n(1513),
                Rt = n(537),
                Lt = n(1514),
                qt = n(713),
                Bt = n(34),
                Qt = n(714),
                Kt = n(1515),
                Ht = n(1516),
                Wt = n(313),
                Vt = n(1517),
                $t = n(1518),
                Xt = n(1519),
                jt = n(1520),
                Jt = n(1521),
                Yt = n(1522),
                Zt = n(1523),
                te = n(1524),
                ee = n(16),
                ne = n(715),
                re = n(1525),
                ie = n(1526),
                se = n(206),
                oe = n(716),
                ue = n(1527),
                ae = n(1528),
                ce = n(1529),
                le = n(443),
                fe = n(442),
                de = n(1530),
                he = n(1531),
                _e = n(1532),
                me = n(1533),
                pe = n(1534),
                Ie = n(1535),
                Se = n(108),
                be = n(717),
                ge = n(1536),
                ke = n(538),
                ye = n(539),
                Fe = n(1537),
                Te = n(1538),
                Ce = n(1539),
                De = n(709),
                Ge = n(58),
                we = n(274),
                ve = n(697),
                xe = n(439),
                Pe = n(699),
                Ee = n(696),
                Ae = n(310),
                Ne = n(2323),
                Ue = n(1540),
                ze = n(438),
                Me = n(188),
                Oe = n(273),
                Re = n(88),
                Le = n.n(Re);
            n(2585);
            const qe = {
                Mainnet: "mainnet",
                Testnet: "testnet",
                Previewnet: "previewnet"
            }
        },
        2326: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n(22),
                i = n.n(r);

            function s(t) {
                return i.a.isBigNumber(t) ? t : new i.a(t.toString())
            }
        },
        2329: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            const r = "0123456789abcdef".split(""),
                i = [1, 256, 65536, 16777216],
                s = [0, 8, 16, 24],
                o = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                u = t => {
                    var e, n, r, i, s, u, a, c, l, f, d, h, _, m, p, I, S, b, g, k, y, F, T, C, D, G, w, v, x, P, E, A, N, U, z, M, O, R, L, q, B, Q, K, H, W, V, $, X, j, J, Y, Z, tt, et, nt, rt, it, st, ot, ut, at, ct, lt;
                    for (r = 0; r < 48; r += 2) i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], s = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], u = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], c = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], l = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], f = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], d = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (h = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (u << 1 | a >>> 31), n = (_ = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (a << 1 | u >>> 31), t[0] ^= e, t[1] ^= n, t[10] ^= e, t[11] ^= n, t[20] ^= e, t[21] ^= n, t[30] ^= e, t[31] ^= n, t[40] ^= e, t[41] ^= n, e = i ^ (c << 1 | l >>> 31), n = s ^ (l << 1 | c >>> 31), t[2] ^= e, t[3] ^= n, t[12] ^= e, t[13] ^= n, t[22] ^= e, t[23] ^= n, t[32] ^= e, t[33] ^= n, t[42] ^= e, t[43] ^= n, e = u ^ (f << 1 | d >>> 31), n = a ^ (d << 1 | f >>> 31), t[4] ^= e, t[5] ^= n, t[14] ^= e, t[15] ^= n, t[24] ^= e, t[25] ^= n, t[34] ^= e, t[35] ^= n, t[44] ^= e, t[45] ^= n, e = c ^ (h << 1 | _ >>> 31), n = l ^ (_ << 1 | h >>> 31), t[6] ^= e, t[7] ^= n, t[16] ^= e, t[17] ^= n, t[26] ^= e, t[27] ^= n, t[36] ^= e, t[37] ^= n, t[46] ^= e, t[47] ^= n, e = f ^ (i << 1 | s >>> 31), n = d ^ (s << 1 | i >>> 31), t[8] ^= e, t[9] ^= n, t[18] ^= e, t[19] ^= n, t[28] ^= e, t[29] ^= n, t[38] ^= e, t[39] ^= n, t[48] ^= e, t[49] ^= n, m = t[0], p = t[1], V = t[11] << 4 | t[10] >>> 28, $ = t[10] << 4 | t[11] >>> 28, v = t[20] << 3 | t[21] >>> 29, x = t[21] << 3 | t[20] >>> 29, ut = t[31] << 9 | t[30] >>> 23, at = t[30] << 9 | t[31] >>> 23, Q = t[40] << 18 | t[41] >>> 14, K = t[41] << 18 | t[40] >>> 14, U = t[2] << 1 | t[3] >>> 31, z = t[3] << 1 | t[2] >>> 31, I = t[13] << 12 | t[12] >>> 20, S = t[12] << 12 | t[13] >>> 20, X = t[22] << 10 | t[23] >>> 22, j = t[23] << 10 | t[22] >>> 22, P = t[33] << 13 | t[32] >>> 19, E = t[32] << 13 | t[33] >>> 19, ct = t[42] << 2 | t[43] >>> 30, lt = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, nt = t[4] << 30 | t[5] >>> 2, M = t[14] << 6 | t[15] >>> 26, O = t[15] << 6 | t[14] >>> 26, b = t[25] << 11 | t[24] >>> 21, g = t[24] << 11 | t[25] >>> 21, J = t[34] << 15 | t[35] >>> 17, Y = t[35] << 15 | t[34] >>> 17, A = t[45] << 29 | t[44] >>> 3, N = t[44] << 29 | t[45] >>> 3, C = t[6] << 28 | t[7] >>> 4, D = t[7] << 28 | t[6] >>> 4, rt = t[17] << 23 | t[16] >>> 9, it = t[16] << 23 | t[17] >>> 9, R = t[26] << 25 | t[27] >>> 7, L = t[27] << 25 | t[26] >>> 7, k = t[36] << 21 | t[37] >>> 11, y = t[37] << 21 | t[36] >>> 11, Z = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, H = t[8] << 27 | t[9] >>> 5, W = t[9] << 27 | t[8] >>> 5, G = t[18] << 20 | t[19] >>> 12, w = t[19] << 20 | t[18] >>> 12, st = t[29] << 7 | t[28] >>> 25, ot = t[28] << 7 | t[29] >>> 25, q = t[38] << 8 | t[39] >>> 24, B = t[39] << 8 | t[38] >>> 24, F = t[48] << 14 | t[49] >>> 18, T = t[49] << 14 | t[48] >>> 18, t[0] = m ^ ~I & b, t[1] = p ^ ~S & g, t[10] = C ^ ~G & v, t[11] = D ^ ~w & x, t[20] = U ^ ~M & R, t[21] = z ^ ~O & L, t[30] = H ^ ~V & X, t[31] = W ^ ~$ & j, t[40] = et ^ ~rt & st, t[41] = nt ^ ~it & ot, t[2] = I ^ ~b & k, t[3] = S ^ ~g & y, t[12] = G ^ ~v & P, t[13] = w ^ ~x & E, t[22] = M ^ ~R & q, t[23] = O ^ ~L & B, t[32] = V ^ ~X & J, t[33] = $ ^ ~j & Y, t[42] = rt ^ ~st & ut, t[43] = it ^ ~ot & at, t[4] = b ^ ~k & F, t[5] = g ^ ~y & T, t[14] = v ^ ~P & A, t[15] = x ^ ~E & N, t[24] = R ^ ~q & Q, t[25] = L ^ ~B & K, t[34] = X ^ ~J & Z, t[35] = j ^ ~Y & tt, t[44] = st ^ ~ut & ct, t[45] = ot ^ ~at & lt, t[6] = k ^ ~F & m, t[7] = y ^ ~T & p, t[16] = P ^ ~A & C, t[17] = E ^ ~N & D, t[26] = q ^ ~Q & U, t[27] = B ^ ~K & z, t[36] = J ^ ~Z & H, t[37] = Y ^ ~tt & W, t[46] = ut ^ ~ct & et, t[47] = at ^ ~lt & nt, t[8] = F ^ ~m & I, t[9] = T ^ ~p & S, t[18] = A ^ ~C & G, t[19] = N ^ ~D & w, t[28] = Q ^ ~U & M, t[29] = K ^ ~z & O, t[38] = Z ^ ~H & V, t[39] = tt ^ ~W & $, t[48] = ct ^ ~et & rt, t[49] = lt ^ ~nt & it, t[0] ^= o[r], t[1] ^= o[r + 1]
                },
                a = (c = 256, t => {
                    var e;
                    if ("0x" === t.slice(0, 2)) {
                        e = [];
                        for (var n = 2, o = t.length; n < o; n += 2) e.push(parseInt(t.slice(n, n + 2), 16))
                    } else e = t;
                    return ((t, e) => {
                        for (var n, o, a = e.length, c = t.blocks, l = t.blockCount << 2, f = t.blockCount, d = t.outputBlocks, h = t.s, _ = 0; _ < a;) {
                            if (t.reset)
                                for (t.reset = !1, c[0] = t.block, n = 1; n < f + 1; ++n) c[n] = 0;
                            if ("string" != typeof e)
                                for (n = t.start; _ < a && n < l; ++_) c[n >> 2] |= e[_] << s[3 & n++];
                            else
                                for (n = t.start; _ < a && n < l; ++_)(o = e.charCodeAt(_)) < 128 ? c[n >> 2] |= o << s[3 & n++] : o < 2048 ? (c[n >> 2] |= (192 | o >> 6) << s[3 & n++], c[n >> 2] |= (128 | 63 & o) << s[3 & n++]) : o < 55296 || o >= 57344 ? (c[n >> 2] |= (224 | o >> 12) << s[3 & n++], c[n >> 2] |= (128 | o >> 6 & 63) << s[3 & n++], c[n >> 2] |= (128 | 63 & o) << s[3 & n++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++_)), c[n >> 2] |= (240 | o >> 18) << s[3 & n++], c[n >> 2] |= (128 | o >> 12 & 63) << s[3 & n++], c[n >> 2] |= (128 | o >> 6 & 63) << s[3 & n++], c[n >> 2] |= (128 | 63 & o) << s[3 & n++]);
                            if (t.lastByteIndex = n, n >= l) {
                                for (t.start = n - l, t.block = c[f], n = 0; n < f; ++n) h[n] ^= c[n];
                                u(h), t.reset = !0
                            } else t.start = n
                        }
                        if (c[(n = t.lastByteIndex) >> 2] |= i[3 & n], t.lastByteIndex === l)
                            for (c[0] = c[f], n = 1; n < f + 1; ++n) c[n] = 0;
                        for (c[f - 1] |= 2147483648, n = 0; n < f; ++n) h[n] ^= c[n];
                        u(h);
                        var m, p = "",
                            I = 0;
                        for (n = 0; I < d;) {
                            for (n = 0; n < f && I < d; ++n, ++I) m = h[n], p += r[m >> 4 & 15] + r[15 & m] + r[m >> 12 & 15] + r[m >> 8 & 15] + r[m >> 20 & 15] + r[m >> 16 & 15] + r[m >> 28 & 15] + r[m >> 24 & 15];
                            I % f == 0 && (u(h), n = 0)
                        }
                        return "0x" + p
                    })((t => {
                        return {
                            blocks: [],
                            reset: !0,
                            block: 0,
                            start: 0,
                            blockCount: 1600 - (t << 1) >> 5,
                            outputBlocks: t >> 5,
                            s: (e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [].concat(e, e, e, e, e))
                        };
                        var e
                    })(c), e)
                });
            var c
        },
        316: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return GrpcStatus
            }));
            class GrpcStatus {
                constructor(t) {
                    this._code = t, Object.freeze(this)
                }
                static _fromValue(t) {
                    switch (t) {
                        case 0:
                            return GrpcStatus.Ok;
                        case 1:
                            return GrpcStatus.Cancelled;
                        case 2:
                            return GrpcStatus.Unknown;
                        case 3:
                            return GrpcStatus.InvalidArgument;
                        case 4:
                            return GrpcStatus.DeadlineExceeded;
                        case 5:
                            return GrpcStatus.NotFound;
                        case 6:
                            return GrpcStatus.AlreadyExists;
                        case 7:
                            return GrpcStatus.PermissionDenied;
                        case 8:
                            return GrpcStatus.ResourceExhausted;
                        case 9:
                            return GrpcStatus.FailedPrecondition;
                        case 10:
                            return GrpcStatus.Aborted;
                        case 11:
                            return GrpcStatus.OutOfRange;
                        case 12:
                            return GrpcStatus.Unimplemented;
                        case 13:
                            return GrpcStatus.Internal;
                        case 14:
                            return GrpcStatus.Unavailable;
                        case 15:
                            return GrpcStatus.DataLoss;
                        case 16:
                            return GrpcStatus.Unauthenticated;
                        case 17:
                            return GrpcStatus.Timeout;
                        default:
                            throw new Error("(BUG) non-exhaustive GrpcStatus switch statement")
                    }
                }
                toString() {
                    switch (this) {
                        case GrpcStatus.Ok:
                            return "OK";
                        case GrpcStatus.Cancelled:
                            return "CANCELLED";
                        case GrpcStatus.Unknown:
                            return "UNKNOWN";
                        case GrpcStatus.InvalidArgument:
                            return "INVALID_ARGUMENT";
                        case GrpcStatus.DeadlineExceeded:
                            return "DEADLINE_EXCEEDED";
                        case GrpcStatus.NotFound:
                            return "NOT_FOUND";
                        case GrpcStatus.AlreadyExists:
                            return "ALREADY_EXISTS";
                        case GrpcStatus.PermissionDenied:
                            return "PERMISSION_DENIED";
                        case GrpcStatus.Unauthenticated:
                            return "UNAUTHENTICATED";
                        case GrpcStatus.ResourceExhausted:
                            return "RESOURCE_EXHAUSTED";
                        case GrpcStatus.FailedPrecondition:
                            return "FAILED_PRECONDITION";
                        case GrpcStatus.Aborted:
                            return "ABORTED";
                        case GrpcStatus.OutOfRange:
                            return "OUT_OF_RANGE";
                        case GrpcStatus.Unimplemented:
                            return "UNIMPLEMENTED";
                        case GrpcStatus.Internal:
                            return "INTERNAL";
                        case GrpcStatus.Unavailable:
                            return "UNAVAILABLE";
                        case GrpcStatus.DataLoss:
                            return "DATA_LOSS";
                        case GrpcStatus.Timeout:
                            return "TIMEOUT";
                        default:
                            return `UNKNOWN (${this._code})`
                    }
                }
                valueOf() {
                    return this._code
                }
            }
            GrpcStatus.Ok = new GrpcStatus(0), GrpcStatus.Cancelled = new GrpcStatus(1), GrpcStatus.Unknown = new GrpcStatus(2), GrpcStatus.InvalidArgument = new GrpcStatus(3), GrpcStatus.DeadlineExceeded = new GrpcStatus(4), GrpcStatus.NotFound = new GrpcStatus(5), GrpcStatus.AlreadyExists = new GrpcStatus(6), GrpcStatus.PermissionDenied = new GrpcStatus(7), GrpcStatus.ResourceExhausted = new GrpcStatus(8), GrpcStatus.FailedPrecondition = new GrpcStatus(9), GrpcStatus.Aborted = new GrpcStatus(10), GrpcStatus.OutOfRange = new GrpcStatus(11), GrpcStatus.Unimplemented = new GrpcStatus(12), GrpcStatus.Internal = new GrpcStatus(13), GrpcStatus.Unavailable = new GrpcStatus(14), GrpcStatus.DataLoss = new GrpcStatus(15), GrpcStatus.Unauthenticated = new GrpcStatus(16), GrpcStatus.Timeout = new GrpcStatus(17)
        },
        365: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return FileCreateTransaction
            }));
            var r = n(17),
                i = n(7),
                s = n(107),
                o = n(23),
                u = n(25),
                a = n(93),
                c = n(1),
                l = n.n(c);
            class FileCreateTransaction extends i.f {
                constructor(t = {}) {
                    super(), this._keys = null, this._expirationTime = new o.a(0, 0).plusNanos(l.a.fromNumber(Date.now()).mul(1e6).add(i.b.mul(1e9))), this._contents = null, this._fileMemo = null, this._defaultMaxTransactionFee = new r.a(5), null != t.keys && this.setKeys(t.keys), null != t.expirationTime && this.setExpirationTime(t.expirationTime), null != t.contents && this.setContents(t.contents), null != t.fileMemo && this.setFileMemo(t.fileMemo)
                }
                static _fromProtobuf(t, e, n, r, s) {
                    const a = s[0].fileCreate;
                    return i.f._fromProtobufTransactions(new FileCreateTransaction({
                        keys: null != a.keys && null != a.keys.keys ? a.keys.keys.map(t => u.a._fromProtobufKey(t)) : void 0,
                        expirationTime: null != a.expirationTime ? o.a._fromProtobuf(a.expirationTime) : void 0,
                        contents: null != a.contents ? a.contents : void 0,
                        fileMemo: null != a.memo ? a.memo : void 0
                    }), t, e, n, r, s)
                }
                get keys() {
                    return this._keys
                }
                setKeys(t) {
                    if (this._requireNotFrozen(), t instanceof a.a && null != t.threshold) throw new Error("Cannot set threshold key as file key");
                    return this._keys = t instanceof a.a ? t.toArray() : t, this
                }
                get expirationTime() {
                    return this._expirationTime
                }
                setExpirationTime(t) {
                    return this._requireNotFrozen(), this._expirationTime = t instanceof o.a ? t : o.a.fromDate(t), this
                }
                get contents() {
                    return this._contents
                }
                setContents(t) {
                    return this._requireNotFrozen(), this._contents = t instanceof Uint8Array ? t : s.b(t), this
                }
                get fileMemo() {
                    return this._fileMemo
                }
                setFileMemo(t) {
                    return this._requireNotFrozen(), this._fileMemo = t, this
                }
                _execute(t, e) {
                    return t.file.createFile(e)
                }
                _getTransactionDataCase() {
                    return "fileCreate"
                }
                _makeTransactionData() {
                    return {
                        keys: null != this._keys ? {
                            keys: this._keys.map(t => t._toProtobufKey())
                        } : null,
                        expirationTime: this._expirationTime._toProtobuf(),
                        contents: this._contents,
                        memo: this._fileMemo
                    }
                }
                _getLogId() {
                    return "FileCreateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            i.e.set("fileCreate", FileCreateTransaction._fromProtobuf)
        },
        366: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return FileAppendTransaction
            }));
            var r = n(17),
                i = n(7),
                s = n(107),
                o = n(45),
                u = n(58),
                a = n(23),
                c = n(317);
            class FileAppendTransaction extends i.f {
                constructor(t = {}) {
                    super(), this._fileId = null, this._contents = null, this._maxChunks = 20, this._chunkSize = 4096, this._defaultMaxTransactionFee = new r.a(5), null != t.fileId && this.setFileId(t.fileId), null != t.contents && this.setContents(t.contents), null != t.maxChunks && this.setMaxChunks(t.maxChunks), null != t.chunkSize && this.setChunkSize(t.chunkSize), this._transactionIds = new c.a
                }
                static _fromProtobuf(t, e, n, r, s) {
                    const u = s[0].fileAppend;
                    let a;
                    for (let t = 0; t < s.length; t += r.length) {
                        const e = s[t].fileAppend;
                        if (null == e.contents) break;
                        if (null == a) {
                            a = new Uint8Array(e.contents);
                            continue
                        }
                        const n = new Uint8Array(a.length + e.contents.length);
                        n.set(a, 0), n.set(e.contents, a.length), a = n
                    }
                    return i.f._fromProtobufTransactions(new FileAppendTransaction({
                        fileId: null != u.fileID ? o.a._fromProtobuf(u.fileID) : void 0,
                        contents: a
                    }), t, e, n, r, s)
                }
                get fileId() {
                    return this._fileId
                }
                setFileId(t) {
                    return this._requireNotFrozen(), this._fileId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                get contents() {
                    return this._contents
                }
                setContents(t) {
                    return this._requireNotFrozen(), this._contents = t instanceof Uint8Array ? t : s.b(t), this
                }
                get maxChunks() {
                    return this._maxChunks
                }
                setMaxChunks(t) {
                    return this._requireNotFrozen(), this._maxChunks = t, this
                }
                get chunkSize() {
                    return this._chunkSize
                }
                setChunkSize(t) {
                    return this._chunkSize = t, this
                }
                freezeWith(t) {
                    if (super.freezeWith(t), null == this._contents) return this;
                    const e = Math.floor((this._contents.length + (this._chunkSize - 1)) / this._chunkSize);
                    if (e > this._maxChunks) throw new Error(`Contents with size ${this._contents.length} too long for ${this._maxChunks} chunks`);
                    let n = this._getTransactionId();
                    this._transactionIds.locked = !1, this._transactions.clear(), this._transactionIds.clear(), this._signedTransactions.clear();
                    for (let t = 0; t < e; t++) {
                        this._transactionIds.push(n), this._transactionIds.advance();
                        for (const t of this._nodeAccountIds.list) this._signedTransactions.push(this._makeSignedTransaction(t));
                        n = new u.a(n.accountId, new a.a(n.validStart.seconds, n.validStart.nanos.add(1)))
                    }
                    return this._transactionIds.advance(), this._transactionIds.setLocked(), this
                }
                schedule() {
                    if (this._requireNotFrozen(), null != this._contents && this._contents.length > this._chunkSize) throw new Error(`cannot schedule \`FileAppendTransaction\` with message over ${this._chunkSize} bytes`);
                    return super.schedule()
                }
                async execute(t, e) {
                    return (await this.executeAll(t, e))[0]
                }
                async executeAll(t, e) {
                    super._isFrozen() || this.freezeWith(t);
                    const n = this._getTransactionId(),
                        r = t.operatorAccountId;
                    null != r && r.equals(n.accountId) && await super.signWithOperator(t);
                    const i = [];
                    let s = e;
                    for (let e = 0; e < this._transactionIds.length; e++) {
                        const e = Date.now(),
                            n = await super.execute(t, s);
                        null != s && (s = Date.now() - e), await n.getReceipt(t), i.push(n)
                    }
                    return i
                }
                _validateChecksums(t) {
                    null != this._fileId && this._fileId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.file.appendContent(e)
                }
                _getTransactionDataCase() {
                    return "fileAppend"
                }
                _makeTransactionData() {
                    const t = null != this._contents ? this._contents.length : 0,
                        e = this._transactionIds.index * this._chunkSize,
                        n = Math.min(e + this._chunkSize, t);
                    return {
                        fileID: null != this._fileId ? this._fileId._toProtobuf() : null,
                        contents: null != this._contents ? this._contents.slice(e, n) : null
                    }
                }
                _getLogId() {
                    return "FileAppendTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            i.e.set("fileAppend", FileAppendTransaction._fromProtobuf)
        },
        45: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return FileId
            }));
            var r = n(42),
                i = n(11),
                s = n(1),
                o = n.n(s);
            class FileId {
                constructor(t, e, n) {
                    const i = r.b(t, e, n);
                    this.shard = i.shard, this.realm = i.realm, this.num = i.num, this._checksum = null
                }
                static fromString(t) {
                    const e = r.d(t),
                        n = new FileId(e);
                    return n._checksum = e.checksum, n
                }
                static _fromProtobuf(t) {
                    return new FileId(null != t.shardNum ? o.a.fromString(t.shardNum.toString()) : 0, null != t.realmNum ? o.a.fromString(t.realmNum.toString()) : 0, null != t.fileNum ? o.a.fromString(t.fileNum.toString()) : 0)
                }
                get checksum() {
                    return this._checksum
                }
                validate(t) {
                    console.warn("Deprecated: Use `validateChecksum` instead"), this.validateChecksum(t)
                }
                validateChecksum(t) {
                    r.h(this.shard, this.realm, this.num, this._checksum, t)
                }
                static fromBytes(t) {
                    return FileId._fromProtobuf(i.proto.FileID.decode(t))
                }
                static fromSolidityAddress(t) {
                    const [e, n, i] = r.c(t);
                    return new FileId(e, n, i)
                }
                toSolidityAddress() {
                    return r.f([this.shard, this.realm, this.num])
                }
                _toProtobuf() {
                    return {
                        fileNum: this.num,
                        shardNum: this.shard,
                        realmNum: this.realm
                    }
                }
                toString() {
                    return `${this.shard.toString()}.${this.realm.toString()}.${this.num.toString()}`
                }
                toStringWithChecksum(t) {
                    return r.g(this.toString(), t)
                }
                toBytes() {
                    return i.proto.FileID.encode(this._toProtobuf()).finish()
                }
                clone() {
                    const t = new FileId(this);
                    return t._checksum = this._checksum, t
                }
                compare(t) {
                    return r.a([this.shard, this.realm, this.num], [t.shard, t.realm, t.num])
                }
            }
            FileId.ADDRESS_BOOK = new FileId(102), FileId.FEE_SCHEDULE = new FileId(111), FileId.EXCHANGE_RATES = new FileId(112)
        },
        534: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return FileDeleteTransaction
            }));
            var r = n(7),
                i = n(45);
            class FileDeleteTransaction extends r.f {
                constructor(t = {}) {
                    super(), this._fileId = null, null != t.fileId && this.setFileId(t.fileId)
                }
                static _fromProtobuf(t, e, n, s, o) {
                    const u = o[0].fileDelete;
                    return r.f._fromProtobufTransactions(new FileDeleteTransaction({
                        fileId: null != u.fileID ? i.a._fromProtobuf(u.fileID) : void 0
                    }), t, e, n, s, o)
                }
                get fileId() {
                    return this._fileId
                }
                setFileId(t) {
                    return this._requireNotFrozen(), this._fileId = "string" == typeof t ? i.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._fileId && this._fileId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.file.deleteFile(e)
                }
                _getTransactionDataCase() {
                    return "fileDelete"
                }
                _makeTransactionData() {
                    return {
                        fileID: null != this._fileId ? this._fileId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "FileDeleteTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            r.e.set("fileDelete", FileDeleteTransaction._fromProtobuf)
        },
        541: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return GrpcServiceError
            }));
            var r = n(316);
            class GrpcServiceError extends Error {
                constructor(t) {
                    super("gRPC service failed with status: " + t.toString()), this.status = t, this.name = "GrpcServiceError", void 0 !== Error.captureStackTrace && Error.captureStackTrace(this, GrpcServiceError)
                }
                static _fromResponse(t) {
                    if (null != t.code && null != t.details) {
                        const e = r.a._fromValue(t.code),
                            n = new GrpcServiceError(e);
                        return n.message = t.details, n
                    }
                    return t
                }
            }
        },
        542: function(t, e, n) {
            "use strict";
            async function r(t) {
                return new Uint8Array(await window.crypto.subtle.digest("SHA-384", t))
            }
            n.d(e, "a", (function() {
                return r
            }))
        }
    }
]);