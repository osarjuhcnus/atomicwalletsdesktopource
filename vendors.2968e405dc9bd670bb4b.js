(window.webpackJsonp = window.webpackJsonp || []).push([
    [295], {
        10381: function(t, e, i) {
            "use strict";
            var r = i(5491),
                n = i(7575),
                s = i(6708),
                u = i(5603),
                o = i(5609),
                h = i(5678),
                c = i(5712),
                a = function t(e) {
                    if (!(this instanceof t)) return new t(e);
                    e ? (this.initialize(), this.set(e)) : this.initialize()
                };
            a.prototype.verify = function(t, e, s, u, o) {
                var h, c = i(6282);
                if (r.isUndefined(s) && (s = new c), r.isUndefined(u) && (u = 0), r.isUndefined(o) && (o = 0), this.set({
                        script: t,
                        tx: s,
                        nin: u,
                        flags: o
                    }), 0 != (o & a.SCRIPT_VERIFY_SIGPUSHONLY) && !t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                if (!this.evaluate()) return !1;
                o & a.SCRIPT_VERIFY_P2SH && (h = this.stack.slice());
                var p = this.stack;
                if (this.initialize(), this.set({
                        script: e,
                        stack: p,
                        tx: s,
                        nin: u,
                        flags: o
                    }), !this.evaluate()) return !1;
                if (0 === this.stack.length) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_RESULT", !1;
                var f = this.stack[this.stack.length - 1];
                if (!a.castToBool(f)) return this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK", !1;
                if (o & a.SCRIPT_VERIFY_P2SH && e.isScriptHashOut()) {
                    if (!t.isPushOnly()) return this.errstr = "SCRIPT_ERR_SIG_PUSHONLY", !1;
                    if (0 === h.length) throw new Error("internal error - stack copy empty");
                    var _ = h[h.length - 1],
                        d = n.fromBuffer(_);
                    return h.pop(), this.initialize(), this.set({
                        script: d,
                        stack: h,
                        tx: s,
                        nin: u,
                        flags: o
                    }), !!this.evaluate() && (0 === h.length ? (this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_P2SH_STACK", !1) : !!a.castToBool(h[h.length - 1]) || (this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_P2SH_STACK", !1))
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
                if (0 != (this.flags & (a.SCRIPT_VERIFY_DERSIG | a.SCRIPT_VERIFY_LOW_S | a.SCRIPT_VERIFY_STRICTENC)) && !h.isTxDER(t)) return this.errstr = "SCRIPT_ERR_SIG_DER_INVALID_FORMAT", !1;
                if (0 != (this.flags & a.SCRIPT_VERIFY_LOW_S)) {
                    if (!h.fromTxFormat(t).hasLowS()) return this.errstr = "SCRIPT_ERR_SIG_DER_HIGH_S", !1
                } else if (0 != (this.flags & a.SCRIPT_VERIFY_STRICTENC) && !h.fromTxFormat(t).hasDefinedHashtype()) return this.errstr = "SCRIPT_ERR_SIG_HASHTYPE", !1;
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
                var t, e, i, p, f, _, d, l, g, S, O, I, P, m, y, k, E, A = 0 != (this.flags & a.SCRIPT_VERIFY_MINIMALDATA),
                    T = -1 === this.vfExec.indexOf(!1),
                    b = this.script.chunks[this.pc];
                this.pc++;
                var R = b.opcodenum;
                if (r.isUndefined(R)) return this.errstr = "SCRIPT_ERR_UNDEFINED_OPCODE", !1;
                if (b.buf && b.buf.length > a.MAX_SCRIPT_ELEMENT_SIZE) return this.errstr = "SCRIPT_ERR_PUSH_SIZE", !1;
                if (R > s.OP_16 && ++this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                if (T && 0 <= R && R <= s.OP_PUSHDATA4) {
                    if (A && !this.script.checkMinimalPush(this.pc - 1)) return this.errstr = "SCRIPT_ERR_MINIMALDATA", !1;
                    if (b.buf) {
                        if (b.len !== b.buf.length) throw new Error("Length of push value not equal to length of data");
                        this.stack.push(b.buf)
                    } else this.stack.push(a.false)
                } else if (T || s.OP_IF <= R && R <= s.OP_ENDIF) switch (R) {
                    case s.OP_1NEGATE:
                    case s.OP_1:
                    case s.OP_2:
                    case s.OP_3:
                    case s.OP_4:
                    case s.OP_5:
                    case s.OP_6:
                    case s.OP_7:
                    case s.OP_8:
                    case s.OP_9:
                    case s.OP_10:
                    case s.OP_11:
                    case s.OP_12:
                    case s.OP_13:
                    case s.OP_14:
                    case s.OP_15:
                    case s.OP_16:
                        f = R - (s.OP_1 - 1), t = new u(f).toScriptNumBuffer(), this.stack.push(t);
                        break;
                    case s.OP_NOP:
                        break;
                    case s.OP_NOP2:
                    case s.OP_CHECKLOCKTIMEVERIFY:
                        if (!(this.flags & a.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY)) {
                            if (this.flags & a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                            break
                        }
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var w = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], A, 5);
                        if (w.lt(new u(0))) return this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME", !1;
                        if (!this.checkLockTime(w)) return this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME", !1;
                        break;
                    case s.OP_NOP1:
                    case s.OP_NOP3:
                    case s.OP_NOP4:
                    case s.OP_NOP5:
                    case s.OP_NOP6:
                    case s.OP_NOP7:
                    case s.OP_NOP8:
                    case s.OP_NOP9:
                    case s.OP_NOP10:
                        if (this.flags & a.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) return this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS", !1;
                        break;
                    case s.OP_IF:
                    case s.OP_NOTIF:
                        if (k = !1, T) {
                            if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                            t = this.stack.pop(), k = a.castToBool(t), R === s.OP_NOTIF && (k = !k)
                        }
                        this.vfExec.push(k);
                        break;
                    case s.OP_ELSE:
                        if (0 === this.vfExec.length) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                        this.vfExec[this.vfExec.length - 1] = !this.vfExec[this.vfExec.length - 1];
                        break;
                    case s.OP_ENDIF:
                        if (0 === this.vfExec.length) return this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL", !1;
                        this.vfExec.pop();
                        break;
                    case s.OP_VERIFY:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (t = this.stack[this.stack.length - 1], !(k = a.castToBool(t))) return this.errstr = "SCRIPT_ERR_VERIFY", !1;
                        this.stack.pop();
                        break;
                    case s.OP_RETURN:
                        return this.errstr = "SCRIPT_ERR_OP_RETURN", !1;
                    case s.OP_TOALTSTACK:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.altstack.push(this.stack.pop());
                        break;
                    case s.OP_FROMALTSTACK:
                        if (this.altstack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_ALTSTACK_OPERATION", !1;
                        this.stack.push(this.altstack.pop());
                        break;
                    case s.OP_2DROP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.pop(), this.stack.pop();
                        break;
                    case s.OP_2DUP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 2], i = this.stack[this.stack.length - 1], this.stack.push(e), this.stack.push(i);
                        break;
                    case s.OP_3DUP:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 3], i = this.stack[this.stack.length - 2];
                        var N = this.stack[this.stack.length - 1];
                        this.stack.push(e), this.stack.push(i), this.stack.push(N);
                        break;
                    case s.OP_2OVER:
                        if (this.stack.length < 4) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 4], i = this.stack[this.stack.length - 3], this.stack.push(e), this.stack.push(i);
                        break;
                    case s.OP_2ROT:
                        if (this.stack.length < 6) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        p = this.stack.splice(this.stack.length - 6, 2), this.stack.push(p[0]), this.stack.push(p[1]);
                        break;
                    case s.OP_2SWAP:
                        if (this.stack.length < 4) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        p = this.stack.splice(this.stack.length - 4, 2), this.stack.push(p[0]), this.stack.push(p[1]);
                        break;
                    case s.OP_IFDUP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        t = this.stack[this.stack.length - 1], (k = a.castToBool(t)) && this.stack.push(t);
                        break;
                    case s.OP_DEPTH:
                        t = new u(this.stack.length).toScriptNumBuffer(), this.stack.push(t);
                        break;
                    case s.OP_DROP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.pop();
                        break;
                    case s.OP_DUP:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.push(this.stack[this.stack.length - 1]);
                        break;
                    case s.OP_NIP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.splice(this.stack.length - 2, 1);
                        break;
                    case s.OP_OVER:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.push(this.stack[this.stack.length - 2]);
                        break;
                    case s.OP_PICK:
                    case s.OP_ROLL:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (t = this.stack[this.stack.length - 1], f = (l = u.fromScriptNumBuffer(t, A)).toNumber(), this.stack.pop(), f < 0 || f >= this.stack.length) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        t = this.stack[this.stack.length - f - 1], R === s.OP_ROLL && this.stack.splice(this.stack.length - f - 1, 1), this.stack.push(t);
                        break;
                    case s.OP_ROT:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = this.stack[this.stack.length - 3], d = this.stack[this.stack.length - 2];
                        var v = this.stack[this.stack.length - 1];
                        this.stack[this.stack.length - 3] = d, this.stack[this.stack.length - 2] = v, this.stack[this.stack.length - 1] = _;
                        break;
                    case s.OP_SWAP:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        _ = this.stack[this.stack.length - 2], d = this.stack[this.stack.length - 1], this.stack[this.stack.length - 2] = d, this.stack[this.stack.length - 1] = _;
                        break;
                    case s.OP_TUCK:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        this.stack.splice(this.stack.length - 2, 0, this.stack[this.stack.length - 1]);
                        break;
                    case s.OP_SIZE:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        l = new u(this.stack[this.stack.length - 1].length), this.stack.push(l.toScriptNumBuffer());
                        break;
                    case s.OP_EQUAL:
                    case s.OP_EQUALVERIFY:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        e = this.stack[this.stack.length - 2], i = this.stack[this.stack.length - 1];
                        var x = e.toString("hex") === i.toString("hex");
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(x ? a.true : a.false), R === s.OP_EQUALVERIFY) {
                            if (!x) return this.errstr = "SCRIPT_ERR_EQUALVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case s.OP_1ADD:
                    case s.OP_1SUB:
                    case s.OP_NEGATE:
                    case s.OP_ABS:
                    case s.OP_NOT:
                    case s.OP_0NOTEQUAL:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        switch (t = this.stack[this.stack.length - 1], l = u.fromScriptNumBuffer(t, A), R) {
                            case s.OP_1ADD:
                                l = l.add(u.One);
                                break;
                            case s.OP_1SUB:
                                l = l.sub(u.One);
                                break;
                            case s.OP_NEGATE:
                                l = l.neg();
                                break;
                            case s.OP_ABS:
                                l.cmp(u.Zero) < 0 && (l = l.neg());
                                break;
                            case s.OP_NOT:
                                l = new u((0 === l.cmp(u.Zero)) + 0);
                                break;
                            case s.OP_0NOTEQUAL:
                                l = new u((0 !== l.cmp(u.Zero)) + 0)
                        }
                        this.stack.pop(), this.stack.push(l.toScriptNumBuffer());
                        break;
                    case s.OP_ADD:
                    case s.OP_SUB:
                    case s.OP_BOOLAND:
                    case s.OP_BOOLOR:
                    case s.OP_NUMEQUAL:
                    case s.OP_NUMEQUALVERIFY:
                    case s.OP_NUMNOTEQUAL:
                    case s.OP_LESSTHAN:
                    case s.OP_GREATERTHAN:
                    case s.OP_LESSTHANOREQUAL:
                    case s.OP_GREATERTHANOREQUAL:
                    case s.OP_MIN:
                    case s.OP_MAX:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        switch (g = u.fromScriptNumBuffer(this.stack[this.stack.length - 2], A), S = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], A), l = new u(0), R) {
                            case s.OP_ADD:
                                l = g.add(S);
                                break;
                            case s.OP_SUB:
                                l = g.sub(S);
                                break;
                            case s.OP_BOOLAND:
                                l = new u((0 !== g.cmp(u.Zero) && 0 !== S.cmp(u.Zero)) + 0);
                                break;
                            case s.OP_BOOLOR:
                                l = new u((0 !== g.cmp(u.Zero) || 0 !== S.cmp(u.Zero)) + 0);
                                break;
                            case s.OP_NUMEQUAL:
                            case s.OP_NUMEQUALVERIFY:
                                l = new u((0 === g.cmp(S)) + 0);
                                break;
                            case s.OP_NUMNOTEQUAL:
                                l = new u((0 !== g.cmp(S)) + 0);
                                break;
                            case s.OP_LESSTHAN:
                                l = new u((g.cmp(S) < 0) + 0);
                                break;
                            case s.OP_GREATERTHAN:
                                l = new u((g.cmp(S) > 0) + 0);
                                break;
                            case s.OP_LESSTHANOREQUAL:
                                l = new u((g.cmp(S) <= 0) + 0);
                                break;
                            case s.OP_GREATERTHANOREQUAL:
                                l = new u((g.cmp(S) >= 0) + 0);
                                break;
                            case s.OP_MIN:
                                l = g.cmp(S) < 0 ? g : S;
                                break;
                            case s.OP_MAX:
                                l = g.cmp(S) > 0 ? g : S
                        }
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(l.toScriptNumBuffer()), R === s.OP_NUMEQUALVERIFY) {
                            if (!a.castToBool(this.stack[this.stack.length - 1])) return this.errstr = "SCRIPT_ERR_NUMEQUALVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case s.OP_WITHIN:
                        if (this.stack.length < 3) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        g = u.fromScriptNumBuffer(this.stack[this.stack.length - 3], A), S = u.fromScriptNumBuffer(this.stack[this.stack.length - 2], A);
                        var U = u.fromScriptNumBuffer(this.stack[this.stack.length - 1], A);
                        k = S.cmp(g) <= 0 && g.cmp(U) < 0, this.stack.pop(), this.stack.pop(), this.stack.pop(), this.stack.push(k ? a.true : a.false);
                        break;
                    case s.OP_RIPEMD160:
                    case s.OP_SHA1:
                    case s.OP_SHA256:
                    case s.OP_HASH160:
                    case s.OP_HASH256:
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var B;
                        t = this.stack[this.stack.length - 1], R === s.OP_RIPEMD160 ? B = o.ripemd160(t) : R === s.OP_SHA1 ? B = o.sha1(t) : R === s.OP_SHA256 ? B = o.blake256(t) : R === s.OP_HASH160 ? B = o.blake256ripemd160(t) : R === s.OP_HASH256 && (B = o.blake256(t)), this.stack.pop(), this.stack.push(B);
                        break;
                    case s.OP_CODESEPARATOR:
                        this.pbegincodehash = this.pc;
                        break;
                    case s.OP_CHECKSIG:
                    case s.OP_CHECKSIGVERIFY:
                        if (this.stack.length < 2) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        O = this.stack[this.stack.length - 2], I = this.stack[this.stack.length - 1], P = (new n).set({
                            chunks: this.script.chunks.slice(this.pbegincodehash)
                        });
                        var C = (new n).add(O);
                        if (P.findAndDelete(C), !this.checkSignatureEncoding(O) || !this.checkPubkeyEncoding(I)) return !1;
                        try {
                            m = h.fromTxFormat(O), y = c.fromBuffer(I, !1), E = this.tx.verifySignature(m, y, this.nin, P)
                        } catch (t) {
                            E = !1
                        }
                        if (this.stack.pop(), this.stack.pop(), this.stack.push(E ? a.true : a.false), R === s.OP_CHECKSIGVERIFY) {
                            if (!E) return this.errstr = "SCRIPT_ERR_CHECKSIGVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case s.OP_CHECKMULTISIG:
                    case s.OP_CHECKMULTISIGVERIFY:
                        var L = 1;
                        if (this.stack.length < L) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var H = u.fromScriptNumBuffer(this.stack[this.stack.length - L], A).toNumber();
                        if (H < 0 || H > 20) return this.errstr = "SCRIPT_ERR_PUBKEY_COUNT", !1;
                        if (this.nOpCount += H, this.nOpCount > 201) return this.errstr = "SCRIPT_ERR_OP_COUNT", !1;
                        var K = ++L;
                        if (L += H, this.stack.length < L) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        var D = u.fromScriptNumBuffer(this.stack[this.stack.length - L], A).toNumber();
                        if (D < 0 || D > H) return this.errstr = "SCRIPT_ERR_SIG_COUNT", !1;
                        var M = ++L;
                        if (L += D, this.stack.length < L) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        P = (new n).set({
                            chunks: this.script.chunks.slice(this.pbegincodehash)
                        });
                        for (var V = 0; V < D; V++) O = this.stack[this.stack.length - M - V], P.findAndDelete((new n).add(O));
                        for (E = !0; E && D > 0;) {
                            if (O = this.stack[this.stack.length - M], I = this.stack[this.stack.length - K], !this.checkSignatureEncoding(O) || !this.checkPubkeyEncoding(I)) return !1;
                            var F;
                            try {
                                m = h.fromTxFormat(O), y = c.fromBuffer(I, !1), F = this.tx.verifySignature(m, y, this.nin, P)
                            } catch (t) {
                                F = !1
                            }
                            F && (M++, D--), K++, D > --H && (E = !1)
                        }
                        for (; L-- > 1;) this.stack.pop();
                        if (this.stack.length < 1) return this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION", !1;
                        if (this.flags & a.SCRIPT_VERIFY_NULLDUMMY && this.stack[this.stack.length - 1].length) return this.errstr = "SCRIPT_ERR_SIG_NULLDUMMY", !1;
                        if (this.stack.pop(), this.stack.push(E ? a.true : a.false), R === s.OP_CHECKMULTISIGVERIFY) {
                            if (!E) return this.errstr = "SCRIPT_ERR_CHECKMULTISIGVERIFY", !1;
                            this.stack.pop()
                        }
                        break;
                    case s.OP_CAT:
                    case s.OP_SUBSTR:
                    case s.OP_LEFT:
                    case s.OP_RIGHT:
                    case s.OP_INVERT:
                    case s.OP_AND:
                    case s.OP_OR:
                    case s.OP_XOR:
                    case s.OP_2MUL:
                    case s.OP_2DIV:
                    case s.OP_MUL:
                    case s.OP_DIV:
                    case s.OP_MOD:
                    case s.OP_LSHIFT:
                    case s.OP_RSHIFT:
                        break;
                    default:
                        return this.errstr = "SCRIPT_ERR_BAD_OPCODE", !1
                }
                return !0
            }
        },
        10382: function(t, e, i) {
            "use strict";
            var r = i(5756),
                n = i(5506),
                s = (i(5519), i(6099)),
                u = i(5804),
                o = i(5803),
                h = i(5679),
                c = i(5678),
                a = i(6100);

            function p() {
                s.apply(this, arguments)
            }
            r(p, s), p.prototype.getSignatures = function(t, e, i, r) {
                n.checkState(this.output instanceof u), r = r || c.SIGHASH_ALL;
                var s = e.toPublicKey();
                return s.toString() === this.output.script.getPublicKey().toString("hex") ? [new a({
                    publicKey: s,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: i,
                    signature: o.sign(t, e, r, i, this.output.script),
                    sigtype: r
                })] : []
            }, p.prototype.addSignature = function(t, e) {
                return n.checkState(this.isValidSignature(t, e), "Signature is invalid"), this.setScript(h.buildPublicKeyIn(e.signature.toDER(), e.sigtype)), this
            }, p.prototype.clearSignatures = function() {
                return this.setScript(h.empty()), this
            }, p.prototype.isFullySigned = function() {
                return this.script.isPublicKeyIn()
            }, p.SCRIPT_MAX_SIZE = 73, p.prototype._estimateSize = function() {
                return p.SCRIPT_MAX_SIZE
            }, t.exports = p
        },
        10383: function(t, e, i) {
            "use strict";
            var r = i(5756),
                n = i(5506),
                s = i(5519),
                u = i(5609),
                o = i(6099),
                h = i(5804),
                c = i(5803),
                a = i(5679),
                p = i(5678),
                f = i(6100);

            function _() {
                o.apply(this, arguments)
            }
            r(_, o), _.prototype.getSignatures = function(t, e, i, r, o) {
                return n.checkState(this.output instanceof h), o = o || u.blake256ripemd160(e.publicKey.toBuffer()), r = r || p.SIGHASH_ALL, s.equals(o, this.output.script.getPublicKeyHash()) ? [new f({
                    publicKey: e.publicKey,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: i,
                    signature: c.sign(t, e, r, i, this.output.script),
                    sigtype: r
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
        10384: function(t, e, i) {
            "use strict";
            var r = i(5491),
                n = i(5756),
                s = (i(6709), i(6099)),
                u = i(5804),
                o = i(5506),
                h = i(5679),
                c = i(5678),
                a = i(5803),
                p = (i(5712), i(5519)),
                f = i(6100);

            function _(t, e, i, n) {
                s.apply(this, arguments);
                var u = this;
                e = e || t.publicKeys, i = i || t.threshold, n = n || t.signatures, this.publicKeys = r.sortBy(e, (function(t) {
                    return t.toString("hex")
                })), o.checkState(h.buildMultisigOut(this.publicKeys, i).equals(this.output.script), "Provided public keys don't match to the provided output script"), this.publicKeyIndex = {}, r.each(this.publicKeys, (function(t, e) {
                    u.publicKeyIndex[t.toString()] = e
                })), this.threshold = i, this.signatures = n ? this._deserializeSignatures(n) : new Array(this.publicKeys.length)
            }
            n(_, s), _.prototype.toObject = function() {
                var t = s.prototype.toObject.apply(this, arguments);
                return t.threshold = this.threshold, t.publicKeys = r.map(this.publicKeys, (function(t) {
                    return t.toString()
                })), t.signatures = this._serializeSignatures(), t
            }, _.prototype._deserializeSignatures = function(t) {
                return r.map(t, (function(t) {
                    if (t) return new f(t)
                }))
            }, _.prototype._serializeSignatures = function() {
                return r.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, _.prototype.getSignatures = function(t, e, i, n) {
                o.checkState(this.output instanceof u), n = n || c.SIGHASH_ALL;
                var s = this,
                    h = [];
                return r.each(this.publicKeys, (function(r) {
                    r.toString() === e.publicKey.toString() && h.push(new f({
                        publicKey: e.publicKey,
                        prevTxId: s.prevTxId,
                        outputIndex: s.outputIndex,
                        inputIndex: i,
                        signature: a.sign(t, e, n, i, s.output.script),
                        sigtype: n
                    }))
                })), h
            }, _.prototype.addSignature = function(t, e) {
                return o.checkState(!this.isFullySigned(), "All needed signatures have already been added"), o.checkArgument(!r.isUndefined(this.publicKeyIndex[e.publicKey.toString()]), "Signature has no matching public key"), o.checkState(this.isValidSignature(t, e)), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this._updateScript(), this
            }, _.prototype._updateScript = function() {
                return this.setScript(h.buildMultisigIn(this.publicKeys, this.threshold, this._createSignatures())), this
            }, _.prototype._createSignatures = function() {
                return r.map(r.filter(this.signatures, (function(t) {
                    return !r.isUndefined(t)
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
                return r.reduce(this.signatures, (function(t, e) {
                    return t + !!e
                }), 0)
            }, _.prototype.publicKeysWithoutSignature = function() {
                var t = this;
                return r.filter(this.publicKeys, (function(e) {
                    return !t.signatures[t.publicKeyIndex[e.toString()]]
                }))
            }, _.prototype.isValidSignature = function(t, e) {
                return e.signature.nhashtype = e.sigtype, a.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script)
            }, _.normalizeSignatures = function(t, e, i, r, n) {
                return n.map((function(n) {
                    var s = null;
                    return r = r.filter((function(r) {
                        if (s) return !0;
                        var u = new f({
                            signature: c.fromTxFormat(r),
                            publicKey: n,
                            prevTxId: e.prevTxId,
                            outputIndex: e.outputIndex,
                            inputIndex: i,
                            sigtype: c.SIGHASH_ALL
                        });
                        return u.signature.nhashtype = u.sigtype, !a.verify(t, u.signature, u.publicKey, u.inputIndex, e.output.script) || (s = u, !1)
                    })), s || null
                }))
            }, _.OPCODES_SIZE = 1, _.SIGNATURE_SIZE = 73, _.prototype._estimateSize = function() {
                return _.OPCODES_SIZE + this.threshold * _.SIGNATURE_SIZE
            }, t.exports = _
        },
        10385: function(t, e, i) {
            "use strict";
            var r = i(5491),
                n = i(5756),
                s = i(6099),
                u = i(5804),
                o = i(5506),
                h = i(5679),
                c = i(5678),
                a = i(5803),
                p = (i(5712), i(5519)),
                f = i(6100);

            function _(t, e, i, n) {
                s.apply(this, arguments);
                var u = this;
                e = e || t.publicKeys, i = i || t.threshold, n = n || t.signatures, this.publicKeys = r.sortBy(e, (function(t) {
                    return t.toString("hex")
                })), this.redeemScript = h.buildMultisigOut(this.publicKeys, i), o.checkState(h.buildScriptHashOut(this.redeemScript).equals(this.output.script), "Provided public keys don't hash to the provided output"), this.publicKeyIndex = {}, r.each(this.publicKeys, (function(t, e) {
                    u.publicKeyIndex[t.toString()] = e
                })), this.threshold = i, this.signatures = n ? this._deserializeSignatures(n) : new Array(this.publicKeys.length)
            }
            n(_, s), _.prototype.toObject = function() {
                var t = s.prototype.toObject.apply(this, arguments);
                return t.threshold = this.threshold, t.publicKeys = r.map(this.publicKeys, (function(t) {
                    return t.toString()
                })), t.signatures = this._serializeSignatures(), t
            }, _.prototype._deserializeSignatures = function(t) {
                return r.map(t, (function(t) {
                    if (t) return new f(t)
                }))
            }, _.prototype._serializeSignatures = function() {
                return r.map(this.signatures, (function(t) {
                    if (t) return t.toObject()
                }))
            }, _.prototype.getSignatures = function(t, e, i, n) {
                o.checkState(this.output instanceof u), n = n || c.SIGHASH_ALL;
                var s = this,
                    h = [];
                return r.each(this.publicKeys, (function(r) {
                    r.toString() === e.publicKey.toString() && h.push(new f({
                        publicKey: e.publicKey,
                        prevTxId: s.prevTxId,
                        outputIndex: s.outputIndex,
                        inputIndex: i,
                        signature: a.sign(t, e, n, i, s.redeemScript),
                        sigtype: n
                    }))
                })), h
            }, _.prototype.addSignature = function(t, e) {
                return o.checkState(!this.isFullySigned(), "All needed signatures have already been added"), o.checkArgument(!r.isUndefined(this.publicKeyIndex[e.publicKey.toString()]), "Signature has no matching public key"), o.checkState(this.isValidSignature(t, e)), this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e, this._updateScript(), this
            }, _.prototype._updateScript = function() {
                return this.setScript(h.buildP2SHMultisigIn(this.publicKeys, this.threshold, this._createSignatures(), {
                    cachedMultisig: this.redeemScript
                })), this
            }, _.prototype._createSignatures = function() {
                return r.map(r.filter(this.signatures, (function(t) {
                    return !r.isUndefined(t)
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
                return r.reduce(this.signatures, (function(t, e) {
                    return t + !!e
                }), 0)
            }, _.prototype.publicKeysWithoutSignature = function() {
                var t = this;
                return r.filter(this.publicKeys, (function(e) {
                    return !t.signatures[t.publicKeyIndex[e.toString()]]
                }))
            }, _.prototype.isValidSignature = function(t, e) {
                return e.signature.nhashtype = e.sigtype, a.verify(t, e.signature, e.publicKey, e.inputIndex, this.redeemScript)
            }, _.OPCODES_SIZE = 7, _.SIGNATURE_SIZE = 74, _.PUBKEY_SIZE = 34, _.prototype._estimateSize = function() {
                return _.OPCODES_SIZE + this.threshold * _.SIGNATURE_SIZE + this.publicKeys.length * _.PUBKEY_SIZE
            }, t.exports = _
        },
        5679: function(t, e, i) {
            t.exports = i(7575), t.exports.Interpreter = i(10381)
        },
        5712: function(t, e, i) {
            "use strict";
            var r = i(5603),
                Point = i(5962),
                n = i(5609),
                s = i(5588),
                u = i(5872),
                o = i(5491),
                h = i(5506);

            function c(t, e) {
                if (!(this instanceof c)) return new c(t, e);
                if (h.checkArgument(t, "First argument is required, please include public key data."), t instanceof c) return t;
                e = e || {};
                var i = this._classifyArgs(t, e);
                return i.point.validate(), s.defineImmutable(this, {
                    point: i.point,
                    compressed: i.compressed,
                    network: i.network || u.defaultNetwork
                }), this
            }
            c.prototype._classifyArgs = function(t, e) {
                var i = {
                    compressed: o.isUndefined(e.compressed) || e.compressed
                };
                if (t instanceof Point) i.point = t;
                else if (t.x && t.y) i = c._transformObject(t);
                else if ("string" == typeof t) i = c._transformDER(new Buffer(t, "hex"));
                else if (c._isBuffer(t)) i = c._transformDER(t);
                else {
                    if (!c._isPrivateKey(t)) throw new TypeError("First argument is an unrecognized data format.");
                    i = c._transformPrivateKey(t)
                }
                return i.network || (i.network = o.isUndefined(e.network) ? void 0 : u.get(e.network)), i
            }, c._isPrivateKey = function(t) {
                return t instanceof i(6280)
            }, c._isBuffer = function(t) {
                return t instanceof Buffer || t instanceof Uint8Array
            }, c._transformPrivateKey = function(t) {
                h.checkArgument(c._isPrivateKey(t), "Must be an instance of PrivateKey");
                var e = {};
                return e.point = Point.getG().mul(t.bn), e.compressed = t.compressed, e.network = t.network, e
            }, c._transformDER = function(t, e) {
                h.checkArgument(c._isBuffer(t), "Must be a hex buffer of DER encoded public key");
                var i, n, s, u, a = {};
                if (e = !!o.isUndefined(e) || e, 4 !== t[0] && (e || 6 !== t[0] && 7 !== t[0]))
                    if (3 === t[0]) s = t.slice(1), i = new r(s), (a = c._transformX(!0, i)).compressed = !0;
                    else {
                        if (2 !== t[0]) throw new TypeError("Invalid DER format public key");
                        s = t.slice(1), i = new r(s), (a = c._transformX(!1, i)).compressed = !0
                    }
                else {
                    if (s = t.slice(1, 33), u = t.slice(33, 65), 32 !== s.length || 32 !== u.length || 65 !== t.length) throw new TypeError("Length of x and y must be 32 bytes");
                    i = new r(s), n = new r(u), a.point = new Point(i, n), a.compressed = !1
                }
                return a
            }, c._transformX = function(t, e) {
                h.checkArgument("boolean" == typeof t, "Must specify whether y is odd or not (true or false)");
                var i = {};
                return i.point = Point.fromX(t, e), i
            }, c._transformObject = function(t) {
                var e = new r(t.x, "hex"),
                    i = new r(t.y, "hex");
                return new c(new Point(e, i), {
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
                var i = c._transformDER(t, e);
                return new c(i.point, {
                    compressed: i.compressed
                })
            }, c.fromPoint = function(t, e) {
                return h.checkArgument(t instanceof Point, "First argument must be an instance of Point."), new c(t, {
                    compressed: e
                })
            }, c.fromString = function(t, e) {
                var i = new Buffer(t, e || "hex"),
                    r = c._transformDER(i);
                return new c(r.point, {
                    compressed: r.compressed
                })
            }, c.fromX = function(t, e) {
                var i = c._transformX(t, e);
                return new c(i.point, {
                    compressed: i.compressed
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
                    i = this.point.getY(),
                    r = e.toBuffer({
                        size: 32
                    }),
                    n = i.toBuffer({
                        size: 32
                    });
                return this.compressed ? (t = n[n.length - 1] % 2 ? new Buffer([3]) : new Buffer([2]), Buffer.concat([t, r])) : (t = new Buffer([4]), Buffer.concat([t, r, n]))
            }, c.prototype._getID = function() {
                return n.blake256ripemd160(this.toBuffer())
            }, c.prototype.toAddress = function(t) {
                return i(5873).fromPublicKey(this, t || this.network)
            }, c.prototype.toString = function() {
                return this.toDER().toString("hex")
            }, c.prototype.inspect = function() {
                return "<PublicKey: " + this.toString() + (this.compressed ? "" : ", uncompressed") + ">"
            }, t.exports = c
        },
        5803: function(t, e, i) {
            "use strict";
            var r = i(12),
                n = i(5678),
                s = i(5679),
                u = i(5804),
                o = i(5802),
                h = i(5713),
                c = i(5603),
                a = i(5609),
                p = i(7569),
                f = i(5506),
                _ = i(5491),
                d = function(t, e, p, f) {
                    var _, d = i(6709),
                        l = i(6710),
                        g = d.shallowCopy(t);
                    for ((f = new s(f)).removeCodeseparators(), _ = 0; _ < g.inputs.length; _++) g.inputs[_] = new l(g.inputs[_]).setScript(s.empty());
                    if (g.inputs[p] = new l(g.inputs[p]).setScript(f), (31 & e) === n.SIGHASH_NONE || (31 & e) === n.SIGHASH_SINGLE)
                        for (_ = 0; _ < g.inputs.length; _++) _ !== p && (g.inputs[_].sequenceNumber = 0);
                    if ((31 & e) === n.SIGHASH_NONE) g.outputs = [];
                    else if ((31 & e) === n.SIGHASH_SINGLE) {
                        if (p >= g.outputs.length) return new Buffer("0000000000000000000000000000000000000000000000000000000000000001", "hex");
                        for (g.outputs.length = p + 1, _ = 0; _ < p; _++) g.outputs[_] = new u({
                            atoms: c.fromBuffer(new r.Buffer("ffffffffffffffff", "hex")),
                            script: s.empty()
                        })
                    }
                    e & n.SIGHASH_ANYONECANPAY && (g.inputs = [g.inputs[p]]);
                    var S = (new h).writeInt32LE(e).write(g._getHashPrefix()).write(g._getHashWitnessSign()).toBuffer(),
                        O = a.blake256(S);
                    return O = new o(O).readReverse()
                };
            t.exports = {
                sighash: d,
                sign: function(t, e, i, r, n) {
                    var s = d(t, i, r, n);
                    return p.sign(s, e, "little").set({
                        nhashtype: i
                    })
                },
                verify: function(t, e, i, r, n) {
                    f.checkArgument(!_.isUndefined(t)), f.checkArgument(!_.isUndefined(e) && !_.isUndefined(e.nhashtype));
                    var s = d(t, e.nhashtype, r, n);
                    return p.verify(s, e, i, "little")
                }
            }
        },
        5804: function(t, e, i) {
            "use strict";
            var r = i(5491),
                n = i(5603),
                s = i(12),
                u = i(5519),
                o = i(5588),
                h = i(5713),
                c = i(5679),
                a = i(5506),
                p = i(5677);

            function f(t) {
                if (!(this instanceof f)) return new f(t);
                if (!r.isObject(t)) throw new TypeError("Unrecognized argument for Output");
                var e;
                this.atoms = t.atoms, u.isBuffer(t.script) ? this._scriptBuffer = t.script : (e = r.isString(t.script) && o.isHexa(t.script) ? new s.Buffer(t.script, "hex") : t.script, this.setScript(e))
            }
            Object.defineProperty(f.prototype, "script", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._script || this.setScriptFromBuffer(this._scriptBuffer), this._script
                }
            }), Object.defineProperty(f.prototype, "atoms", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._atoms
                },
                set: function(t) {
                    t instanceof n ? (this._atomsBN = t, this._atoms = t.toNumber()) : r.isString(t) ? (this._atoms = parseInt(t), this._atomsBN = n.fromNumber(this._atoms)) : (a.checkArgument(o.isNaturalNumber(t), "Output atoms is not a natural number"), this._atomsBN = n.fromNumber(t), this._atoms = t), a.checkState(o.isNaturalNumber(this._atoms), "Output atoms is not a natural number")
                }
            }), f.prototype.invalidSatoshis = function() {
                return this._atoms > 9007199254740991 ? "transaction txout atoms greater than max safe integer" : this._atoms !== this._atomsBN.toNumber() ? "transaction txout atoms has corrupted value" : this._atoms < 0 && "transaction txout negative"
            }, f.prototype.toObject = f.prototype.toJSON = function() {
                var t = {
                    atoms: this.atoms
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
                else if (r.isString(t)) this._script = c.fromString(t), this._scriptBuffer = this._script.toBuffer(), this._script._isOutput = !0;
                else {
                    if (!u.isBuffer(t)) throw new TypeError("Invalid argument type: script");
                    this.setScriptFromBuffer(t)
                }
                return this
            }, f.prototype.inspect = function() {
                var t;
                return t = this.script ? this.script.inspect() : this._scriptBuffer.toString("hex"), "<Output (" + this.atoms + " sats) " + t + ">"
            }, f.fromBufferReader = function(t) {
                var e = {};
                e.atoms = t.readUInt64LEBN(), e.vers = t.readUInt16LE();
                var i = t.readVarintNum();
                return e.script = 0 !== i ? t.read(i) : new s.Buffer([]), new f(e)
            }, f.prototype.toBufferWriter = function(t) {
                t || (t = new h), t.writeUInt64LEBN(this._atomsBN), t.writeUInt16LE(0);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t
            }, t.exports = f
        },
        6099: function(t, e, i) {
            "use strict";
            var r = i(5491),
                n = i(5506),
                s = i(5677),
                u = i(5713),
                o = i(12),
                h = i(5519),
                c = i(5588),
                a = i(5679),
                p = i(5803),
                f = i(5804);

            function _(t) {
                return this instanceof _ ? t ? this._fromObject(t) : void 0 : new _(t)
            }
            _.DEFAULT_SEQNUMBER = 4294967295, _.DEFAULT_LOCKTIME_SEQNUMBER = 0, Object.defineProperty(_.prototype, "script", {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this.isNull() ? null : (this._script || (this._script = new a(this._scriptBuffer), this._script._isInput = !0), this._script)
                }
            }), _.fromObject = function(t) {
                return n.checkArgument(r.isObject(t)), (new _)._fromObject(t)
            }, _.prototype._fromObject = function(t) {
                var e;
                if (e = r.isString(t.prevTxId) && c.isHexa(t.prevTxId) ? new o.Buffer(t.prevTxId, "hex") : t.prevTxId, this.output = t.output ? t.output instanceof f ? t.output : new f(t.output) : void 0, this.prevTxId = e || t.txidbuf, this.outputIndex = r.isUndefined(t.outputIndex) ? t.txoutnum : t.outputIndex, this.tree = r.isUndefined(t.outputTree) ? t.txouttree : t.outputTree, this.sequenceNumber = r.isUndefined(t.sequenceNumber) ? r.isUndefined(t.seqnum) ? 4294967295 : t.seqnum : t.sequenceNumber, r.isUndefined(t.script) && r.isUndefined(t.scriptBuffer)) throw new s.Transaction.Input.MissingScript;
                return this.setScript(t.scriptBuffer || t.script), this
            }, _.prototype.toObject = _.prototype.toJSON = function() {
                var t = {
                    prevTxId: this.prevTxId.toString("hex"),
                    outputIndex: this.outputIndex,
                    tree: this.tree,
                    sequenceNumber: this.sequenceNumber,
                    script: this._scriptBuffer.toString("hex")
                };
                return this.script && (t.scriptString = this.script.toString()), this.output && (t.output = this.output.toObject()), t
            }, _.fromBufferReader = function(t) {
                var e = new _;
                return e.prevTxId = t.readReverse(32), e.outputIndex = t.readUInt32LE(), e.outputTree = t.readUInt8(), e.sequenceNumber = t.readUInt32LE(), e
            }, _.prototype.fromBufferReaderWitness = function(t) {
                this.valuein = t.readUInt64LEBN(), this.blockheight = t.readUInt32LE(), this.blockindex = t.readUInt32LE(), this._scriptBuffer = t.readVarLengthBuffer()
            }, _.prototype.fromBufferReaderScript = function(t) {
                this._scriptBuffer = t.readVarLengthBuffer()
            }, _.prototype.toBufferWriter = function(t) {
                t || (t = new u), t.writeReverse(this.prevTxId), t.writeUInt32LE(this.outputIndex), t.writeUInt8(this.outputTree);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t.writeUInt32LE(this.sequenceNumber), t
            }, _.prototype.toBufferWriterNoScript = function(t) {
                return t || (t = new u), t.writeReverse(this.prevTxId), t.writeUInt32LE(this.outputIndex), t.writeUInt8(this.outputTree), t.writeUInt32LE(this.sequenceNumber), t
            }, _.prototype.toBufferWriterScriptOnly = function(t) {
                t || (t = new u), t.writeUInt32LE(4294967295), t.writeUInt32LE(4294967295), t.writeUInt32LE(0), t.writeUInt32LE(4294967295);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t
            }, _.prototype.toBufferWriterWitnessSign = function(t) {
                t || (t = new u);
                var e = this._scriptBuffer;
                return t.writeVarintNum(e.length), t.write(e), t
            }, _.prototype.setScript = function(t) {
                if (this._script = null, t instanceof a) this._script = t, this._script._isInput = !0, this._scriptBuffer = t.toBuffer();
                else if (c.isHexa(t)) this._scriptBuffer = new o.Buffer(t, "hex");
                else if (r.isString(t)) this._script = new a(t), this._script._isInput = !0, this._scriptBuffer = this._script.toBuffer();
                else {
                    if (!h.isBuffer(t)) throw new TypeError("Invalid argument type: script");
                    this._scriptBuffer = new o.Buffer(t)
                }
                return this
            }, _.prototype.getSignatures = function() {
                throw new s.AbstractMethodInvoked("Trying to sign unsupported output type (only P2PKH and P2SH multisig inputs are supported) for input: " + JSON.stringify(this))
            }, _.prototype.isFullySigned = function() {
                throw new s.AbstractMethodInvoked("Input#isFullySigned")
            }, _.prototype.isFinal = function() {
                return 4294967295 !== this.sequenceNumber
            }, _.prototype.addSignature = function() {
                throw new s.AbstractMethodInvoked("Input#addSignature")
            }, _.prototype.clearSignatures = function() {
                throw new s.AbstractMethodInvoked("Input#clearSignatures")
            }, _.prototype.isValidSignature = function(t, e) {
                return e.signature.nhashtype = e.sigtype, p.verify(t, e.signature, e.publicKey, e.inputIndex, this.output.script)
            }, _.prototype.isNull = function() {
                return "0000000000000000000000000000000000000000000000000000000000000000" === this.prevTxId.toString("hex") && 4294967295 === this.outputIndex
            }, _.prototype._estimateSize = function() {
                return this.toBufferWriter().toBuffer().length
            }, t.exports = _
        },
        6100: function(t, e, i) {
            "use strict";
            var r = i(5491),
                n = i(5506),
                s = i(5756),
                u = i(5519),
                o = i(5588),
                h = i(5712),
                c = i(5677),
                a = i(5678);

            function p(t) {
                if (!(this instanceof p)) return new p(t);
                if (t instanceof p) return t;
                if (r.isObject(t)) return this._fromObject(t);
                throw new c.InvalidArgument("TransactionSignatures must be instantiated from an object")
            }
            s(p, a), p.prototype._fromObject = function(t) {
                return this._checkObjectArgs(t), this.publicKey = new h(t.publicKey), this.prevTxId = u.isBuffer(t.prevTxId) ? t.prevTxId : new Buffer(t.prevTxId, "hex"), this.outputIndex = t.outputIndex, this.inputIndex = t.inputIndex, this.signature = t.signature instanceof a ? t.signature : u.isBuffer(t.signature) ? a.fromBuffer(t.signature) : a.fromString(t.signature), this.sigtype = t.sigtype, this
            }, p.prototype._checkObjectArgs = function(t) {
                n.checkArgument(h(t.publicKey), "publicKey"), n.checkArgument(!r.isUndefined(t.inputIndex), "inputIndex"), n.checkArgument(!r.isUndefined(t.outputIndex), "outputIndex"), n.checkState(r.isNumber(t.inputIndex), "inputIndex must be a number"), n.checkState(r.isNumber(t.outputIndex), "outputIndex must be a number"), n.checkArgument(t.signature, "signature"), n.checkArgument(t.prevTxId, "prevTxId"), n.checkState(t.signature instanceof a || u.isBuffer(t.signature) || o.isHexa(t.signature), "signature must be a buffer or hexa value"), n.checkState(u.isBuffer(t.prevTxId) || o.isHexa(t.prevTxId), "prevTxId must be a buffer or hexa value"), n.checkArgument(t.sigtype, "sigtype"), n.checkState(r.isNumber(t.sigtype), "sigtype must be a number")
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
        6280: function(t, e, i) {
            "use strict";
            var r = i(5491),
                n = i(5873),
                s = i(6098),
                u = i(5603),
                o = i(5588),
                h = i(5872),
                Point = i(5962),
                c = i(5712),
                a = i(6283),
                p = i(5506);

            function f(t, e) {
                if (!(this instanceof f)) return new f(t, e);
                if (t instanceof f) return t;
                var i = this._classifyArguments(t, e);
                if (!i.bn || 0 === i.bn.cmp(new u(0))) throw new TypeError("Number can not be equal to zero, undefined, null or false");
                if (!i.bn.lt(Point.getN())) throw new TypeError("Number must be less than N");
                if (void 0 === i.network) throw new TypeError('Must specify the network ("livenet" or "testnet")');
                return o.defineImmutable(this, {
                    bn: i.bn,
                    compressed: i.compressed,
                    network: i.network
                }), Object.defineProperty(this, "publicKey", {
                    configurable: !1,
                    enumerable: !0,
                    get: this.toPublicKey.bind(this)
                }), this
            }
            f.prototype._classifyArguments = function(t, e) {
                var i = {
                    compressed: !0,
                    network: e ? h.get(e) : h.defaultNetwork
                };
                if (r.isUndefined(t) || r.isNull(t)) i.bn = f._getRandomBN();
                else if (t instanceof u) i.bn = t;
                else if (t instanceof Buffer || t instanceof Uint8Array) i = f._transformBuffer(t, e);
                else if (t.bn && t.network) i = f._transformObject(t);
                else if (!e && h.get(t)) i.bn = f._getRandomBN(), i.network = h.get(t);
                else {
                    if ("string" != typeof t) throw new TypeError("First argument is an unrecognized data type.");
                    o.isHexa(t) ? i.bn = new u(new Buffer(t, "hex")) : i = f._transformWIF(t, e)
                }
                return i
            }, f._getRandomBN = function() {
                var t, e;
                do {
                    var i = a.getRandomBuffer(32);
                    t = (e = u.fromBuffer(i)).lt(Point.getN())
                } while (!t);
                return e
            }, f._transformBuffer = function(t, e) {
                var i = {};
                if (32 === t.length) return f._transformBNBuffer(t, e);
                var r = t.slice(0, 2).readUInt16LE(0);
                if (i.network = h.get(r, "privatekey"), !i.network) throw new Error("Invalid network");
                if (e && i.network !== h.get(e)) throw new TypeError("Private key network mismatch");
                if (35 === t.length && 1 === t[34]) i.compressed = !0;
                else {
                    if (34 !== t.length) throw new Error("Length of buffer must be 34 (uncompressed) or 35 (compressed)");
                    i.compressed = !1
                }
                return i.bn = u.fromBuffer(t.slice(2, 34)), i
            }, f._transformBNBuffer = function(t, e) {
                var i = {};
                return i.network = h.get(e) || h.defaultNetwork, i.bn = u.fromBuffer(t), i.compressed = !1, i
            }, f._transformWIF = function(t, e) {
                return f._transformBuffer(s.decode(t), e)
            }, f.fromBuffer = function(t, e) {
                return new f(t, e)
            }, f._transformObject = function(t) {
                return {
                    bn: new u(t.bn, "hex"),
                    network: h.get(t.network),
                    compressed: t.compressed
                }
            }, f.fromString = f.fromWIF = function(t) {
                return p.checkArgument(r.isString(t), "First argument is expected to be a string."), new f(t)
            }, f.fromObject = function(t) {
                return p.checkArgument(r.isObject(t), "First argument is expected to be an object."), new f(t)
            }, f.fromRandom = function(t) {
                var e = f._getRandomBN();
                return new f(e, t)
            }, f.getValidationError = function(t, e) {
                var i;
                try {
                    new f(t, e)
                } catch (t) {
                    i = t
                }
                return i
            }, f.isValid = function(t, e) {
                return !!t && !f.getValidationError(t, e)
            }, f.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, f.prototype.toWIF = function() {
                var t, e = this.network,
                    i = this.compressed,
                    r = new Buffer(2);
                return r.writeUInt16LE(e.privatekey), t = i ? Buffer.concat([r, this.bn.toBuffer({
                    size: 32
                }), new Buffer([1])]) : Buffer.concat([r, this.bn.toBuffer({
                    size: 32
                })]), s.encode(t)
            }, f.prototype.toBigNumber = function() {
                return this.bn
            }, f.prototype.toBuffer = function() {
                return this.bn.toBuffer()
            }, f.prototype.toPublicKey = function() {
                return this._pubkey || (this._pubkey = c.fromPrivateKey(this)), this._pubkey
            }, f.prototype.toAddress = function(t) {
                var e = this.toPublicKey();
                return n.fromPublicKey(e, t || this.network)
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
        6282: function(t, e, i) {
            t.exports = i(6709), t.exports.Input = i(6710), t.exports.Output = i(5804), t.exports.UnspentOutput = i(7576), t.exports.Signature = i(6100), t.exports.Sighash = i(5803)
        },
        6708: function(t, e, i) {
            "use strict";
            var r = i(5491),
                n = i(5506),
                s = i(5519),
                u = i(5588);

            function o(t) {
                if (!(this instanceof o)) return new o(t);
                var e;
                if (r.isNumber(t)) e = t;
                else {
                    if (!r.isString(t)) throw new TypeError('Unrecognized num type: "' + typeof t + '" for Opcode');
                    e = o.map[t]
                }
                return u.defineImmutable(this, {
                    num: e
                }), this
            }
            for (var h in o.fromBuffer = function(t) {
                    return n.checkArgument(s.isBuffer(t)), new o(Number("0x" + t.toString("hex")))
                }, o.fromNumber = function(t) {
                    return n.checkArgument(r.isNumber(t)), new o(t)
                }, o.fromString = function(t) {
                    n.checkArgument(r.isString(t));
                    var e = o.map[t];
                    if (void 0 === e) throw new TypeError("Invalid opcodestr");
                    return new o(e)
                }, o.prototype.toHex = function() {
                    return this.num.toString(16)
                }, o.prototype.toBuffer = function() {
                    return new Buffer(this.toHex(), "hex")
                }, o.prototype.toNumber = function() {
                    return this.num
                }, o.prototype.toString = function() {
                    var t = o.reverseMap[this.num];
                    if (void 0 === t) throw new Error("Opcode does not have a string representation");
                    return t
                }, o.smallInt = function(t) {
                    return n.checkArgument(r.isNumber(t), "Invalid Argument: n should be number"), n.checkArgument(t >= 0 && t <= 16, "Invalid Argument: n must be between 0 and 16"), 0 === t ? o("OP_0") : new o(o.map.OP_1 + t - 1)
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
            r.extend(o, o.map), o.isSmallIntOp = function(t) {
                return t instanceof o && (t = t.toNumber()), t === o.map.OP_0 || t >= o.map.OP_1 && t <= o.map.OP_16
            }, o.prototype.inspect = function() {
                return "<Opcode: " + this.toString() + ", hex: " + this.toHex() + ", decimal: " + this.num + ">"
            }, t.exports = o
        },
        6709: function(t, e, i) {
            "use strict";
            var r = i(5491),
                n = i(5506),
                s = i(12),
                u = Buffer.compare || i(2350),
                o = i(5677),
                h = i(5519),
                c = i(5588),
                a = i(5802),
                p = i(5713),
                f = i(5609),
                _ = i(5678),
                d = i(5803),
                l = i(5873),
                g = i(7576),
                S = i(6710),
                O = S.PublicKeyHash,
                I = S.PublicKey,
                P = S.MultiSigScriptHash,
                m = S.MultiSig,
                y = i(5804),
                k = i(5679),
                E = i(6280),
                A = i(5603);

            function T(t) {
                if (!(this instanceof T)) return new T(t);
                if (this.inputs = [], this.outputs = [], this._inputAmount = void 0, this._outputAmount = void 0, t) {
                    if (t instanceof T) return T.shallowCopy(t);
                    if (c.isHexa(t)) this.fromString(t);
                    else if (h.isBuffer(t)) this.fromBuffer(t);
                    else {
                        if (!r.isObject(t)) throw new o.InvalidArgument("Must provide an object or string to deserialize a transaction");
                        this.fromObject(t)
                    }
                } else this._newTransaction()
            }
            T.DUST_AMOUNT = 546, T.FEE_SECURITY_MARGIN = 15, T.MAX_MONEY = 21e14, T.NLOCKTIME_BLOCKHEIGHT_LIMIT = 5e8, T.NLOCKTIME_MAX_VALUE = 4294967295, T.FEE_PER_KB = 1e4, T.CHANGE_OUTPUT_MAX_SIZE = 62, T.MAXIMUM_EXTRA_SIZE = 26, T.shallowCopy = function(t) {
                return new T(t.toBuffer())
            };
            var b = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return new a(this._getHash()).readReverse().toString("hex")
                }
            };
            Object.defineProperty(T.prototype, "hash", b), Object.defineProperty(T.prototype, "id", b);
            var R = {
                configurable: !1,
                enumerable: !0,
                get: function() {
                    return this._getInputAmount()
                }
            };
            Object.defineProperty(T.prototype, "inputAmount", R), R.get = function() {
                return this._getOutputAmount()
            }, Object.defineProperty(T.prototype, "outputAmount", R), T.prototype._getHash = function() {
                return f.blake256(this.toBufferPrefix())
            }, T.prototype._getHashString = function() {
                var t = f.blake256(this.toBufferPrefix());
                return (t = new a(t).readReverse()).toString("hex")
            }, T.prototype._getHashPrefix = function() {
                return f.blake256(this.toBufferPrefix())
            }, T.prototype._getHashPrefixString = function() {
                var t = new a(this.toBufferPrefix()).readReverse();
                return f.blake256(t).toString("hex")
            }, T.prototype._getHashWitness = function() {
                return f.blake256(this.toBufferWitness())
            }, T.prototype._getHashWitnessString = function() {
                var t = new a(this.toBufferWitness()).readReverse();
                return f.blake256(t).toString("hex")
            }, T.prototype._getHashWitnessSign = function() {
                return f.blake256(this.toBufferWitnessSign())
            }, T.prototype.serialize = function(t) {
                return !0 === t || t && t.disableAll ? this.uncheckedSerialize() : this.checkedSerialize(t)
            }, T.prototype.uncheckedSerialize = T.prototype.toString = function() {
                return this.toBuffer().toString("hex")
            }, T.prototype.checkedSerialize = function(t) {
                var e = this.getSerializationError(t);
                if (e) throw e.message += " Use Transaction#uncheckedSerialize if you want to skip security checks. See http://bitcore.io/guide/transaction.html#Serialization for more info.", e;
                return this.uncheckedSerialize()
            }, T.prototype.invalidSatoshis = function() {
                for (var t = !1, e = 0; e < this.outputs.length; e++) this.outputs[e].invalidSatoshis() && (t = !0);
                return t
            }, T.prototype.getSerializationError = function(t) {
                if (t = t || {}, this.invalidSatoshis()) return new o.Transaction.InvalidSatoshis;
                var e, i = this._getUnspentValue();
                return i < 0 ? t.disableMoreOutputThanInput || (e = new o.Transaction.InvalidOutputAmountSum) : e = this._hasFeeError(t, i), e || this._hasDustOutputs(t) || this._isMissingSignatures(t)
            }, T.prototype._hasFeeError = function(t, e) {
                if (!r.isUndefined(this._fee) && this._fee !== e) return new o.Transaction.FeeError.Different("Unspent value is " + e + " but specified fee is " + this._fee);
                if (!t.disableLargeFees) {
                    var i = Math.floor(T.FEE_SECURITY_MARGIN * this._estimateFee());
                    if (e > i) return this._missingChange() ? new o.Transaction.ChangeAddressMissing("Fee is too large and no change address was provided") : new o.Transaction.FeeError.TooLarge("expected less than " + i + " but got " + e)
                }
                if (!t.disableSmallFees) {
                    var n = Math.ceil(this._estimateFee() / T.FEE_SECURITY_MARGIN);
                    if (e < n) return new o.Transaction.FeeError.TooSmall("expected more than " + n + " but got " + e)
                }
            }, T.prototype._missingChange = function() {
                return !this._changeScript
            }, T.prototype._hasDustOutputs = function(t) {
                var e, i;
                if (!t.disableDustOutputs)
                    for (e in this.outputs)
                        if ((i = this.outputs[e]).atoms < T.DUST_AMOUNT && !i.script.isDataOut()) return new o.Transaction.DustOutputs
            }, T.prototype._isMissingSignatures = function(t) {
                if (!t.disableIsFullySigned) return this.isFullySigned() ? void 0 : new o.Transaction.MissingSignatures
            }, T.prototype.inspect = function() {
                return "<Transaction: " + this.uncheckedSerialize() + ">"
            }, T.prototype.toBuffer = function() {
                var t = new p;
                return this.toBufferWriter(t).toBuffer()
            }, T.prototype.toBufferWriter = function(t) {
                return t.writeUInt32LE(1), t.writeVarintNum(this.inputs.length), r.each(this.inputs, (function(e) {
                    e.toBufferWriterNoScript(t)
                })), t.writeVarintNum(this.outputs.length), r.each(this.outputs, (function(e) {
                    e.toBufferWriter(t)
                })), t.writeUInt32LE(this.nLockTime), t.writeUInt32LE(this.nExpiry), t.writeVarintNum(this.inputs.length), r.each(this.inputs, (function(e) {
                    e.toBufferWriterScriptOnly(t)
                })), t
            }, T.prototype.toBufferPrefix = function() {
                var t = new p;
                return this.toBufferWriterPrefix(t).toBuffer()
            }, T.prototype.toBufferWriterPrefix = function(t) {
                return t.writeUInt32LE(65537), t.writeVarintNum(this.inputs.length), r.each(this.inputs, (function(e) {
                    e.toBufferWriterNoScript(t)
                })), t.writeVarintNum(this.outputs.length), r.each(this.outputs, (function(e) {
                    e.toBufferWriter(t)
                })), t.writeUInt32LE(this.nLockTime), t.writeUInt32LE(this.nExpiry), t
            }, T.prototype.toBufferWitness = function() {
                var t = new p;
                return this.toBufferWriterWitness(t).toBuffer()
            }, T.prototype.toBufferWriterWitness = function(t) {
                return t.writeUInt32LE(131073), t.writeVarintNum(this.inputs.length), r.each(this.inputs, (function(e) {
                    e.toBufferWriterScriptOnly(t)
                })), t
            }, T.prototype.toBufferWitnessSign = function() {
                var t = new p;
                return this.toBufferWriterWitnessSign(t).toBuffer()
            }, T.prototype.toBufferWriterWitnessSign = function(t) {
                return t.writeUInt32LE(196609), t.writeVarintNum(this.inputs.length), r.each(this.inputs, (function(e) {
                    e.toBufferWriterWitnessSign(t)
                })), t
            }, T.prototype.fromBuffer = function(t) {
                var e = new a(t);
                return this.fromBufferReader(e)
            }, T.prototype.fromBufferReader = function(t) {
                var e, i, r, s;
                for (n.checkArgument(!t.finished(), "No transaction data received"), this.version = t.readUInt32LE(), i = t.readVarintNum(), e = 0; e < i; e++) {
                    var u = S.fromBufferReader(t);
                    this.inputs.push(u)
                }
                for (r = t.readVarintNum(), e = 0; e < r; e++) this.outputs.push(y.fromBufferReader(t));
                for (this.nLockTime = t.readUInt32LE(), this.nExpiry = t.readUInt32LE(), s = t.readVarintNum(), e = 0; e < s; e++) this.inputs[e].fromBufferReaderWitness(t);
                return this
            }, T.prototype.toObject = T.prototype.toJSON = function() {
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
                    nLockTime: this.nLockTime,
                    nExpiry: this.nExpiry
                };
                return this._changeScript && (i.changeScript = this._changeScript.toString()), r.isUndefined(this._changeIndex) || (i.changeIndex = this._changeIndex), r.isUndefined(this._fee) || (i.fee = this._fee), i
            }, T.prototype.fromObject = function(t) {
                n.checkArgument(r.isObject(t) || t instanceof T);
                var e, i = this;
                return e = t instanceof T ? e.toObject() : t, r.each(e.inputs, (function(t) {
                    if (t.output && t.output.script) {
                        var e, r = new k(t.output.script);
                        if (r.isPublicKeyHashOut()) e = new S.PublicKeyHash(t);
                        else if (r.isScriptHashOut() && t.publicKeys && t.threshold) e = new S.MultiSigScriptHash(t, t.publicKeys, t.threshold, t.signatures);
                        else {
                            if (!r.isPublicKeyOut()) throw new o.Transaction.Input.UnsupportedScript(t.output.script);
                            e = new S.PublicKey(t)
                        }
                        i.addInput(e)
                    } else i.uncheckedAddInput(new S(t))
                })), r.each(e.outputs, (function(t) {
                    i.addOutput(new y(t))
                })), e.changeIndex && (this._changeIndex = e.changeIndex), e.changeScript && (this._changeScript = new k(e.changeScript)), e.fee && (this._fee = e.fee), this.nLockTime = e.nLockTime, this.nExpiry = e.nExpiry, this.version = e.version, this._checkConsistency(t), this
            }, T.prototype._checkConsistency = function(t) {
                r.isUndefined(this._changeIndex) || (n.checkState(this._changeScript), n.checkState(this.outputs[this._changeIndex]), n.checkState(this.outputs[this._changeIndex].script.toString() === this._changeScript.toString())), t && t.hash && n.checkState(t.hash === this.hash, "Hash in object does not match transaction hash")
            }, T.prototype.lockUntilDate = function(t) {
                if (n.checkArgument(t), r.isNumber(t) && t < T.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new o.Transaction.LockTimeTooEarly;
                r.isDate(t) && (t = t.getTime() / 1e3);
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === S.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = S.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, T.prototype.lockUntilBlockHeight = function(t) {
                if (n.checkArgument(r.isNumber(t)), t >= T.NLOCKTIME_BLOCKHEIGHT_LIMIT) throw new o.Transaction.BlockHeightTooHigh;
                if (t < 0) throw new o.Transaction.NLockTimeOutOfRange;
                for (var e = 0; e < this.inputs.length; e++) this.inputs[e].sequenceNumber === S.DEFAULT_SEQNUMBER && (this.inputs[e].sequenceNumber = S.DEFAULT_LOCKTIME_SEQNUMBER);
                return this.nLockTime = t, this
            }, T.prototype.getLockTime = function() {
                return this.nLockTime ? this.nLockTime < T.NLOCKTIME_BLOCKHEIGHT_LIMIT ? this.nLockTime : new Date(1e3 * this.nLockTime) : null
            }, T.prototype.fromString = function(t) {
                this.fromBuffer(new s.Buffer(t, "hex"))
            }, T.prototype._newTransaction = function() {
                this.version = 1, this.nLockTime = 0, this.nExpiry = 0
            }, T.prototype.from = function(t, e, i) {
                if (r.isArray(t)) {
                    var n = this;
                    return r.each(t, (function(t) {
                        n.from(t, e, i)
                    })), this
                }
                if (!r.any(this.inputs, (function(e) {
                        return e.prevTxId.toString("hex") === t.txId && e.outputIndex === t.outputIndex
                    }))) return e && i ? this._fromMultisigUtxo(t, e, i) : this._fromNonP2SH(t), this
            }, T.prototype._fromNonP2SH = function(t) {
                var e;
                e = (t = new g(t)).script.isPublicKeyHashOut() ? O : t.script.isPublicKeyOut() ? I : S, this.addInput(new e({
                    output: new y({
                        script: t.script,
                        atoms: t.atoms
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: k.empty()
                }))
            }, T.prototype._fromMultisigUtxo = function(t, e, i) {
                var r;
                if (n.checkArgument(i <= e.length, "Number of required signatures must be greater than the number of public keys"), (t = new g(t)).script.isMultisigOut()) r = m;
                else {
                    if (!t.script.isScriptHashOut()) throw new Error("@TODO");
                    r = P
                }
                this.addInput(new r({
                    output: new y({
                        script: t.script,
                        atoms: t.atoms
                    }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: k.empty()
                }, e, i))
            }, T.prototype.addInput = function(t, e, i) {
                if (n.checkArgumentType(t, S, "input"), !t.output && (r.isUndefined(e) || r.isUndefined(i))) throw new o.Transaction.NeedMoreInfo("Need information about the UTXO script and atoms");
                return t.output || !e || r.isUndefined(i) || (e = e instanceof k ? e : new k(e), n.checkArgumentType(i, "number", "atoms"), t.output = new y({
                    script: e,
                    atoms: i
                })), this.uncheckedAddInput(t)
            }, T.prototype.uncheckedAddInput = function(t) {
                return n.checkArgumentType(t, S, "input"), this.inputs.push(t), this._inputAmount = void 0, this._updateChangeOutput(), this
            }, T.prototype.hasAllUtxoInfo = function() {
                return r.all(this.inputs.map((function(t) {
                    return !!t.output
                })))
            }, T.prototype.fee = function(t) {
                return n.checkArgument(r.isNumber(t), "amount must be a number"), this._fee = t, this._updateChangeOutput(), this
            }, T.prototype.feePerKb = function(t) {
                return n.checkArgument(r.isNumber(t), "amount must be a number"), this._feePerKb = t, this._updateChangeOutput(), this
            }, T.prototype.change = function(t) {
                return n.checkArgument(t, "address is required"), this._changeScript = k.fromAddress(t), this._updateChangeOutput(), this
            }, T.prototype.getChangeOutput = function() {
                return r.isUndefined(this._changeIndex) ? null : this.outputs[this._changeIndex]
            }, T.prototype.to = function(t, e) {
                if (r.isArray(t)) {
                    var i = this;
                    return r.each(t, (function(t) {
                        i.to(t.address, t.atoms)
                    })), this
                }
                return n.checkArgument(c.isNaturalNumber(e), "Amount is expected to be a positive integer"), this.addOutput(new y({
                    script: k(new l(t)),
                    atoms: e
                })), this
            }, T.prototype.addData = function(t) {
                return this.addOutput(new y({
                    script: k.buildDataOut(t),
                    atoms: 0
                })), this
            }, T.prototype.addOutput = function(t) {
                return n.checkArgumentType(t, y, "output"), this._addOutput(t), this._updateChangeOutput(), this
            }, T.prototype.clearOutputs = function() {
                return this.outputs = [], this._clearSignatures(), this._outputAmount = void 0, this._changeIndex = void 0, this._updateChangeOutput(), this
            }, T.prototype._addOutput = function(t) {
                this.outputs.push(t), this._outputAmount = void 0
            }, T.prototype._getOutputAmount = function() {
                if (r.isUndefined(this._outputAmount)) {
                    var t = this;
                    this._outputAmount = 0, r.each(this.outputs, (function(e) {
                        t._outputAmount += e.atoms
                    }))
                }
                return this._outputAmount
            }, T.prototype._getInputAmount = function() {
                if (r.isUndefined(this._inputAmount)) {
                    var t = this;
                    this._inputAmount = 0, r.each(this.inputs, (function(e) {
                        if (r.isUndefined(e.output)) throw new o.Transaction.Input.MissingPreviousOutput;
                        t._inputAmount += e.output.atoms
                    }))
                }
                return this._inputAmount
            }, T.prototype._updateChangeOutput = function() {
                if (this._changeScript) {
                    this._clearSignatures(), r.isUndefined(this._changeIndex) || this._removeOutput(this._changeIndex);
                    var t = this._getUnspentValue() - this.getFee();
                    t > 0 ? (this._changeIndex = this.outputs.length, this._addOutput(new y({
                        script: this._changeScript,
                        atoms: t
                    }))) : this._changeIndex = void 0
                }
            }, T.prototype.getFee = function() {
                return this.isCoinbase() ? 0 : r.isUndefined(this._fee) ? this._changeScript ? this._estimateFee() : this._getUnspentValue() : this._fee
            }, T.prototype._estimateFee = function() {
                var t = this._estimateSize(),
                    e = this._getUnspentValue();
                return T._estimateFee(t, e, this._feePerKb)
            }, T.prototype._getUnspentValue = function() {
                return this._getInputAmount() - this._getOutputAmount()
            }, T.prototype._clearSignatures = function() {
                r.each(this.inputs, (function(t) {
                    t.clearSignatures()
                }))
            }, T._estimateFee = function(t, e, i) {
                return e > Math.ceil(t / 1e3) * (i || T.FEE_PER_KB) && (t += T.CHANGE_OUTPUT_MAX_SIZE), Math.ceil(t / 1e3) * (i || T.FEE_PER_KB)
            }, T.prototype._estimateSize = function() {
                return 18 + 166 * this.inputs.length + 36 * ((r.isArray(this.outputs) ? this.outputs.length : 1) + 1)
            }, T.prototype._removeOutput = function(t) {
                var e = this.outputs[t];
                this.outputs = r.without(this.outputs, e), this._outputAmount = void 0
            }, T.prototype.removeOutput = function(t) {
                this._removeOutput(t), this._updateChangeOutput()
            }, T.prototype.sort = function() {
                return this.sortInputs((function(t) {
                    var e = Array.prototype.concat.apply([], t);
                    return e.sort((function(t, e) {
                        return u(t.prevTxId, e.prevTxId) || t.outputIndex - e.outputIndex
                    })), e
                })), this.sortOutputs((function(t) {
                    var e = Array.prototype.concat.apply([], t);
                    return e.sort((function(t, e) {
                        return t.atoms - e.atoms || u(t.script.toBuffer(), e.script.toBuffer())
                    })), e
                })), this
            }, T.prototype.shuffleOutputs = function() {
                return this.sortOutputs(r.shuffle)
            }, T.prototype.sortOutputs = function(t) {
                var e = t(this.outputs);
                return this._newOutputOrder(e)
            }, T.prototype.sortInputs = function(t) {
                return this.inputs = t(this.inputs), this._clearSignatures(), this
            }, T.prototype._newOutputOrder = function(t) {
                if (this.outputs.length !== t.length || 0 !== r.difference(this.outputs, t).length) throw new o.Transaction.InvalidSorting;
                if (!r.isUndefined(this._changeIndex)) {
                    var e = this.outputs[this._changeIndex];
                    this._changeIndex = r.findIndex(t, e)
                }
                return this.outputs = t, this
            }, T.prototype.removeInput = function(t, e) {
                var i;
                if ((i = !e && r.isNumber(t) ? t : r.findIndex(this.inputs, (function(i) {
                        return i.prevTxId.toString("hex") === t && i.outputIndex === e
                    }))) < 0 || i >= this.inputs.length) throw new o.Transaction.InvalidIndex(i, this.inputs.length);
                var n = this.inputs[i];
                this.inputs = r.without(this.inputs, n), this._inputAmount = void 0, this._updateChangeOutput()
            }, T.prototype.sign = function(t, e) {
                n.checkState(this.hasAllUtxoInfo());
                var i = this;
                return r.isArray(t) ? (r.each(t, (function(t) {
                    i.sign(t, e)
                })), this) : (r.each(this.getSignatures(t, e), (function(t) {
                    i.applySignature(t)
                })), this)
            }, T.prototype.getSignatures = function(t, e) {
                t = new E(t), e = e || _.SIGHASH_ALL;
                var i = this,
                    n = [],
                    s = f.blake256ripemd160(t.publicKey.toBuffer());
                return r.each(this.inputs, (function(u, o) {
                    r.each(u.getSignatures(i, t, o, e, s), (function(t) {
                        n.push(t)
                    }))
                })), n
            }, T.prototype.applySignature = function(t) {
                return this.inputs[t.inputIndex].addSignature(this, t), this
            }, T.prototype.isFullySigned = function() {
                return r.each(this.inputs, (function(t) {
                    if (t.isFullySigned === S.prototype.isFullySigned) throw new o.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction")
                })), r.all(r.map(this.inputs, (function(t) {
                    return t.isFullySigned()
                })))
            }, T.prototype.isValidSignature = function(t) {
                if (this.inputs[t.inputIndex].isValidSignature === S.prototype.isValidSignature) throw new o.Transaction.UnableToVerifySignature("Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction");
                return this.inputs[t.inputIndex].isValidSignature(this, t)
            }, T.prototype.verifySignature = function(t, e, i, r) {
                return d.verify(this, t, e, i, r)
            }, T.prototype.verify = function() {
                if (0 === this.inputs.length) return "transaction txins empty";
                if (0 === this.outputs.length) return "transaction txouts empty";
                for (var t = new A(0), e = 0; e < this.outputs.length; e++) {
                    var i = this.outputs[e];
                    if (i.invalidSatoshis()) return "transaction txout " + e + " atoms is invalid";
                    if (i._atomsBN.gt(new A(T.MAX_MONEY, 10))) return "transaction txout " + e + " greater than MAX_MONEY";
                    if ((t = t.add(i._atomsBN)).gt(new A(T.MAX_MONEY))) return "transaction txout " + e + " total output greater than MAX_MONEY"
                }
                if (this.toBuffer().length > 1e6) return "transaction over the maximum block size";
                var n = {};
                for (e = 0; e < this.inputs.length; e++) {
                    var s = this.inputs[e],
                        u = s.prevTxId + ":" + s.outputIndex;
                    if (!r.isUndefined(n[u])) return "transaction input " + e + " duplicate input";
                    n[u] = !0
                }
                if (this.isCoinbase()) {
                    var o = this.inputs[0]._scriptBuffer;
                    if (o.length < 2 || o.length > 100) return "coinbase transaction script size invalid"
                } else
                    for (e = 0; e < this.inputs.length; e++)
                        if (this.inputs[e].isNull()) return "transaction input " + e + " has null input";
                return !0
            }, T.prototype.isCoinbase = function() {
                return 1 === this.inputs.length && this.inputs[0].isNull()
            }, t.exports = T
        },
        6710: function(t, e, i) {
            t.exports = i(6099), t.exports.PublicKey = i(10382), t.exports.PublicKeyHash = i(10383), t.exports.MultiSig = i(10384), t.exports.MultiSigScriptHash = i(10385)
        },
        7575: function(t, e, i) {
            "use strict";
            var r = i(5873),
                n = i(5802),
                s = i(5713),
                u = i(5609),
                o = i(6708),
                h = i(5712),
                c = i(5678),
                a = i(5872),
                p = i(5506),
                f = i(5491),
                _ = i(5677),
                d = i(12),
                l = i(5519),
                g = i(5588),
                S = function t(e) {
                    return this instanceof t ? (this.chunks = [], l.isBuffer(e) ? t.fromBuffer(e) : e instanceof r ? t.fromAddress(e) : e instanceof t ? t.fromBuffer(e.toBuffer()) : "string" == typeof e ? t.fromString(e) : void(void 0 !== e && this.set(e))) : new t(e)
                };
            S.prototype.set = function(t) {
                return this.chunks = t.chunks || this.chunks, this
            }, S.fromBuffer = function(t) {
                var e = new S;
                e.chunks = [];
                for (var i = new n(t); !i.finished();) try {
                    var r, s, u = i.readUInt8();
                    u > 0 && u < o.OP_PUSHDATA1 ? (r = u, e.chunks.push({
                        buf: i.read(r),
                        len: r,
                        opcodenum: u
                    })) : u === o.OP_PUSHDATA1 ? (r = i.readUInt8(), s = i.read(r), e.chunks.push({
                        buf: s,
                        len: r,
                        opcodenum: u
                    })) : u === o.OP_PUSHDATA2 ? (r = i.readUInt16LE(), s = i.read(r), e.chunks.push({
                        buf: s,
                        len: r,
                        opcodenum: u
                    })) : u === o.OP_PUSHDATA4 ? (r = i.readUInt32LE(), s = i.read(r), e.chunks.push({
                        buf: s,
                        len: r,
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
                for (var t = new s, e = 0; e < this.chunks.length; e++) {
                    var i = this.chunks[e],
                        r = i.opcodenum;
                    t.writeUInt8(i.opcodenum), i.buf && (r < o.OP_PUSHDATA1 ? t.write(i.buf) : r === o.OP_PUSHDATA1 ? (t.writeUInt8(i.len), t.write(i.buf)) : r === o.OP_PUSHDATA2 ? (t.writeUInt16LE(i.len), t.write(i.buf)) : r === o.OP_PUSHDATA4 && (t.writeUInt32LE(i.len), t.write(i.buf)))
                }
                return t.concat()
            }, S.fromASM = function(t) {
                var e = new S;
                e.chunks = [];
                for (var i = t.split(" "), r = 0; r < i.length;) {
                    var n = i[r],
                        s = o(n).toNumber();
                    if (f.isUndefined(s)) {
                        var u = new Buffer(i[r], "hex");
                        e.chunks.push({
                            buf: u,
                            len: u.length,
                            opcodenum: u.length
                        }), r += 1
                    } else s === o.OP_PUSHDATA1 || s === o.OP_PUSHDATA2 || s === o.OP_PUSHDATA4 ? (e.chunks.push({
                        buf: new Buffer(i[r + 2], "hex"),
                        len: parseInt(i[r + 1]),
                        opcodenum: s
                    }), r += 3) : (e.chunks.push({
                        opcodenum: s
                    }), r += 1)
                }
                return e
            }, S.fromHex = function(t) {
                return new S(new d.Buffer(t, "hex"))
            }, S.fromString = function(t) {
                if (g.isHexa(t) || 0 === t.length) return new S(new d.Buffer(t, "hex"));
                var e = new S;
                e.chunks = [];
                for (var i = t.split(" "), r = 0; r < i.length;) {
                    var n = i[r],
                        s = o(n).toNumber();
                    if (f.isUndefined(s)) {
                        if (!((s = parseInt(n)) > 0 && s < o.OP_PUSHDATA1)) throw new Error("Invalid script: " + JSON.stringify(t));
                        e.chunks.push({
                            buf: new Buffer(i[r + 1].slice(2), "hex"),
                            len: s,
                            opcodenum: s
                        }), r += 2
                    } else if (s === o.OP_PUSHDATA1 || s === o.OP_PUSHDATA2 || s === o.OP_PUSHDATA4) {
                        if ("0x" !== i[r + 2].slice(0, 2)) throw new Error("Pushdata data must start with 0x");
                        e.chunks.push({
                            buf: new Buffer(i[r + 2].slice(2), "hex"),
                            len: parseInt(i[r + 1]),
                            opcodenum: s
                        }), r += 3
                    } else e.chunks.push({
                        opcodenum: s
                    }), r += 1
                }
                return e
            }, S.prototype._chunkToString = function(t, e) {
                var i = t.opcodenum,
                    r = "asm" === e,
                    n = "";
                if (t.buf) i !== o.OP_PUSHDATA1 && i !== o.OP_PUSHDATA2 && i !== o.OP_PUSHDATA4 || (n = n + " " + o(i).toString()), t.len > 0 && (n = r ? n + " " + t.buf.toString("hex") : n + " " + t.len + " 0x" + t.buf.toString("hex"));
                else if (void 0 !== o.reverseMap[i]) n = n + " " + o(i).toString();
                else {
                    var s = i.toString(16);
                    s.length % 2 != 0 && (s = "0" + s), n = r ? n + " " + s : n + " 0x" + s
                }
                return n
            }, S.prototype.toASM = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var i = this.chunks[e];
                    t += this._chunkToString(i, "asm")
                }
                return t.substr(1)
            }, S.prototype.toString = function() {
                for (var t = "", e = 0; e < this.chunks.length; e++) {
                    var i = this.chunks[e];
                    t += this._chunkToString(i)
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
                    if (t && t.length && 48 === t[0] && e && e.length) {
                        var i = e[0];
                        if ((4 === i || 6 === i || 7 === i) && 65 === e.length) return !0;
                        if ((3 === i || 2 === i) && 33 === e.length) return !0
                    }
                }
                return !1
            }, S.prototype.getPublicKey = function() {
                return p.checkState(this.isPublicKeyOut(), "Can't retreive PublicKey from a non-PK output"), this.chunks[0].buf
            }, S.prototype.getPublicKeyHash = function() {
                return p.checkState(this.isPublicKeyHashOut(), "Can't retrieve PublicKeyHash from a non-PKH output"), this.chunks[2].buf
            }, S.prototype.isPublicKeyOut = function() {
                if (2 === this.chunks.length && this.chunks[0].buf && this.chunks[0].buf.length && this.chunks[1].opcodenum === o.OP_CHECKSIG) {
                    var t = this.chunks[0].buf,
                        e = t[0],
                        i = !1;
                    if ((4 !== e && 6 !== e && 7 !== e || 65 !== t.length) && (3 !== e && 2 !== e || 33 !== t.length) || (i = !0), i) return h.isValid(t)
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
                    return t.buf && l.isBuffer(t.buf)
                })) && o.isSmallIntOp(this.chunks[this.chunks.length - 2].opcodenum) && this.chunks[this.chunks.length - 1].opcodenum === o.OP_CHECKMULTISIG
            }, S.prototype.isMultisigIn = function() {
                return this.chunks.length >= 2 && 0 === this.chunks[0].opcodenum && this.chunks.slice(1, this.chunks.length).every((function(t) {
                    return t.buf && l.isBuffer(t.buf) && c.isTxDER(t.buf)
                }))
            }, S.prototype.isDataOut = function() {
                return this.chunks.length >= 1 && this.chunks[0].opcodenum === o.OP_RETURN && (1 === this.chunks.length || 2 === this.chunks.length && this.chunks[1].buf && this.chunks[1].buf.length <= S.OP_RETURN_STANDARD_SIZE && this.chunks[1].length === this.chunks.len)
            }, S.prototype.getData = function() {
                if (this.isDataOut() || this.isScriptHashOut()) return f.isUndefined(this.chunks[1]) ? new Buffer(0) : new Buffer(this.chunks[1].buf);
                if (this.isPublicKeyHashOut()) return new Buffer(this.chunks[2].buf);
                throw new Error("Unrecognized script type to get data from")
            }, S.prototype.isPushOnly = function() {
                return f.every(this.chunks, (function(t) {
                    return t.opcodenum <= o.OP_16
                }))
            }, (S.types = {}).UNKNOWN = "Unknown", S.types.PUBKEY_OUT = "Pay to public key", S.types.PUBKEY_IN = "Spend from public key", S.types.PUBKEYHASH_OUT = "Pay to public key hash", S.types.PUBKEYHASH_IN = "Spend from public key hash", S.types.SCRIPTHASH_OUT = "Pay to script hash", S.types.SCRIPTHASH_IN = "Spend from script hash", S.types.MULTISIG_OUT = "Pay to multisig", S.types.MULTISIG_IN = "Spend from multisig", S.types.DATA_OUT = "Data push", S.OP_RETURN_STANDARD_SIZE = 80, (S.identifiers = {}).PUBKEY_OUT = S.prototype.isPublicKeyOut, S.identifiers.PUBKEY_IN = S.prototype.isPublicKeyIn, S.identifiers.PUBKEYHASH_OUT = S.prototype.isPublicKeyHashOut, S.identifiers.PUBKEYHASH_IN = S.prototype.isPublicKeyHashIn, S.identifiers.MULTISIG_OUT = S.prototype.isMultisigOut, S.identifiers.MULTISIG_IN = S.prototype.isMultisigIn, S.identifiers.SCRIPTHASH_OUT = S.prototype.isScriptHashOut, S.identifiers.SCRIPTHASH_IN = S.prototype.isScriptHashIn, S.identifiers.DATA_OUT = S.prototype.isDataOut, S.prototype.classify = function() {
                for (var t in S.identifiers)
                    if (S.identifiers[t].bind(this)()) return S.types[t];
                return S.types.UNKNOWN
            }, S.prototype.isStandard = function() {
                return this.classify() !== S.types.UNKNOWN
            }, S.prototype.prepend = function(t) {
                return this._addByType(t, !0), this
            }, S.prototype.equals = function(t) {
                if (p.checkState(t instanceof S, "Must provide another script"), this.chunks.length !== t.chunks.length) return !1;
                var e;
                for (e = 0; e < this.chunks.length; e++) {
                    if (l.isBuffer(this.chunks[e].buf) && !l.isBuffer(t.chunks[e].buf)) return !1;
                    if (l.isBuffer(this.chunks[e].buf) && !l.equals(this.chunks[e].buf, t.chunks[e].buf)) return !1;
                    if (this.chunks[e].opcodenum !== t.chunks[e].opcodenum) return !1
                }
                return !0
            }, S.prototype.add = function(t) {
                return this._addByType(t, !1), this
            }, S.prototype._addByType = function(t, e) {
                if ("string" == typeof t) this._addOpcode(t, e);
                else if ("number" == typeof t) this._addOpcode(t, e);
                else if (t instanceof o) this._addOpcode(t, e);
                else if (l.isBuffer(t)) this._addBuffer(t, e);
                else if (t instanceof S) this.chunks = this.chunks.concat(t.chunks);
                else {
                    if ("object" != typeof t) throw new Error("Invalid script chunk");
                    this._insertAtPosition(t, e)
                }
            }, S.prototype._insertAtPosition = function(t, e) {
                e ? this.chunks.unshift(t) : this.chunks.push(t)
            }, S.prototype._addOpcode = function(t, e) {
                var i;
                return i = "number" == typeof t ? t : t instanceof o ? t.toNumber() : o(t).toNumber(), this._insertAtPosition({
                    opcodenum: i
                }, e), this
            }, S.prototype._addBuffer = function(t, e) {
                var i, r = t.length;
                if (r >= 0 && r < o.OP_PUSHDATA1) i = r;
                else if (r < Math.pow(2, 8)) i = o.OP_PUSHDATA1;
                else if (r < Math.pow(2, 16)) i = o.OP_PUSHDATA2;
                else {
                    if (!(r < Math.pow(2, 32))) throw new Error("You can't push that much data");
                    i = o.OP_PUSHDATA4
                }
                return this._insertAtPosition({
                    buf: t,
                    len: r,
                    opcodenum: i
                }, e), this
            }, S.prototype.removeCodeseparators = function() {
                for (var t = [], e = 0; e < this.chunks.length; e++) this.chunks[e].opcodenum !== o.OP_CODESEPARATOR && t.push(this.chunks[e]);
                return this.chunks = t, this
            }, S.buildMultisigOut = function(t, e, i) {
                p.checkArgument(e <= t.length, "Number of required signatures must be less than or equal to the number of public keys"), i = i || {};
                var r = new S;
                r.add(o.smallInt(e));
                var n = t = f.map(t, h);
                i.noSorting || (n = f.sortBy(t, (function(t) {
                    return t.toString("hex")
                })));
                for (var s = 0; s < n.length; s++) {
                    var u = n[s];
                    r.add(u.toBuffer())
                }
                return r.add(o.smallInt(t.length)), r.add(o.OP_CHECKMULTISIG), r
            }, S.buildMultisigIn = function(t, e, i, r) {
                p.checkArgument(f.isArray(t)), p.checkArgument(f.isNumber(e)), p.checkArgument(f.isArray(i)), r = r || {};
                var n = new S;
                return n.add(o.OP_0), f.each(i, (function(t) {
                    p.checkArgument(l.isBuffer(t), "Signatures must be an array of Buffers"), n.add(t)
                })), n
            }, S.buildP2SHMultisigIn = function(t, e, i, r) {
                p.checkArgument(f.isArray(t)), p.checkArgument(f.isNumber(e)), p.checkArgument(f.isArray(i)), r = r || {};
                var n = new S;
                return f.each(i, (function(t) {
                    p.checkArgument(l.isBuffer(t), "Signatures must be an array of Buffers"), n.add(t)
                })), n.add((r.cachedMultisig || S.buildMultisigOut(t, e, r)).toBuffer()), n
            }, S.buildPublicKeyHashOut = function(t) {
                p.checkArgument(!f.isUndefined(t)), p.checkArgument(t instanceof h || t instanceof r || f.isString(t)), t instanceof h ? t = t.toAddress() : f.isString(t) && (t = new r(t));
                var e = new S;
                return e.add(o.OP_DUP).add(o.OP_HASH160).add(t.hashBuffer).add(o.OP_EQUALVERIFY).add(o.OP_CHECKSIG), e._network = t.network, e
            }, S.buildPublicKeyOut = function(t) {
                p.checkArgument(t instanceof h);
                var e = new S;
                return e.add(t.toBuffer()).add(o.OP_CHECKSIG), e
            }, S.buildDataOut = function(t, e) {
                p.checkArgument(f.isUndefined(t) || f.isString(t) || l.isBuffer(t)), f.isString(t) && (t = new Buffer(t, e));
                var i = new S;
                return i.add(o.OP_RETURN), f.isUndefined(t) || i.add(t), i
            }, S.buildScriptHashOut = function(t) {
                p.checkArgument(t instanceof S || t instanceof r && t.isPayToScriptHash());
                var e = new S;
                return e.add(o.OP_HASH160).add(t instanceof r ? t.hashBuffer : u.blake256ripemd160(t.toBuffer())).add(o.OP_EQUAL), e._network = t._network || t.network, e
            }, S.buildPublicKeyIn = function(t, e) {
                p.checkArgument(t instanceof c || l.isBuffer(t)), p.checkArgument(f.isUndefined(e) || f.isNumber(e)), t instanceof c && (t = t.toBuffer());
                var i = new S;
                return i.add(l.concat([t, l.integerAsSingleByteBuffer(e || c.SIGHASH_ALL)])), i
            }, S.buildPublicKeyHashIn = function(t, e, i) {
                return p.checkArgument(e instanceof c || l.isBuffer(e)), p.checkArgument(f.isUndefined(i) || f.isNumber(i)), e instanceof c && (e = e.toBuffer()), (new S).add(l.concat([e, l.integerAsSingleByteBuffer(i || c.SIGHASH_ALL)])).add(new h(t).toBuffer())
            }, S.empty = function() {
                return new S
            }, S.prototype.toScriptHashOut = function() {
                return S.buildScriptHashOut(this)
            }, S.fromAddress = function(t) {
                if ((t = r(t)).isPayToScriptHash()) return S.buildScriptHashOut(t);
                if (t.isPayToPublicKeyHash()) return S.buildPublicKeyHashOut(t);
                throw new _.Script.UnrecognizedAddress(t)
            }, S.prototype.getAddressInfo = function(t) {
                if (this._isInput) return this._getInputAddressInfo();
                if (this._isOutput) return this._getOutputAddressInfo();
                var e = this._getOutputAddressInfo();
                return e || this._getInputAddressInfo()
            }, S.prototype._getOutputAddressInfo = function() {
                var t = {};
                if (this.isScriptHashOut()) t.hashBuffer = this.getData(), t.type = r.PayToScriptHash;
                else {
                    if (!this.isPublicKeyHashOut()) return !1;
                    t.hashBuffer = this.getData(), t.type = r.PayToPublicKeyHash
                }
                return t
            }, S.prototype._getInputAddressInfo = function() {
                var t = {};
                if (this.isPublicKeyHashIn()) t.hashBuffer = u.blake256ripemd160(this.chunks[1].buf), t.type = r.PayToPublicKeyHash;
                else {
                    if (!this.isScriptHashIn()) return !1;
                    t.hashBuffer = u.blake256ripemd160(this.chunks[this.chunks.length - 1].buf), t.type = r.PayToScriptHash
                }
                return t
            }, S.prototype.toAddress = function(t) {
                var e = this.getAddressInfo();
                return !!e && (e.network = a.get(t) || this._network || a.defaultNetwork, new r(e))
            }, S.prototype.findAndDelete = function(t) {
                for (var e = t.toBuffer().toString("hex"), i = 0; i < this.chunks.length; i++) {
                    e === S({
                        chunks: [this.chunks[i]]
                    }).toBuffer().toString("hex") && this.chunks.splice(i, 1)
                }
                return this
            }, S.prototype.checkMinimalPush = function(t) {
                var e = this.chunks[t],
                    i = e.buf,
                    r = e.opcodenum;
                return !i || (0 === i.length ? r === o.OP_0 : 1 === i.length && i[0] >= 1 && i[0] <= 16 ? r === o.OP_1 + (i[0] - 1) : 1 === i.length && 129 === i[0] ? r === o.OP_1NEGATE : i.length <= 75 ? r === i.length : i.length <= 255 ? r === o.OP_PUSHDATA1 : !(i.length <= 65535) || r === o.OP_PUSHDATA2)
            }, S.prototype._decodeOP_N = function(t) {
                if (t === o.OP_0) return 0;
                if (t >= o.OP_1 && t <= o.OP_16) return t - (o.OP_1 - 1);
                throw new Error("Invalid opcode: " + JSON.stringify(t))
            }, S.prototype.getSignatureOperationsCount = function(t) {
                t = !!f.isUndefined(t) || t;
                var e = this,
                    i = 0,
                    r = o.OP_INVALIDOPCODE;
                return f.each(e.chunks, (function(n) {
                    var s = n.opcodenum;
                    s == o.OP_CHECKSIG || s == o.OP_CHECKSIGVERIFY ? i++ : s != o.OP_CHECKMULTISIG && s != o.OP_CHECKMULTISIGVERIFY || (t && r >= o.OP_1 && r <= o.OP_16 ? i += e._decodeOP_N(r) : i += 20), r = s
                })), i
            }, t.exports = S
        },
        7576: function(t, e, i) {
            "use strict";
            var r = i(5491),
                n = i(5506),
                s = i(5588),
                u = i(5679),
                o = i(5873),
                h = i(6711);

            function c(t) {
                if (!(this instanceof c)) return new c(t);
                n.checkArgument(r.isObject(t), "Must provide an object from where to extract data");
                var e = t.address ? new o(t.address) : void 0,
                    i = t.txid ? t.txid : t.txId;
                if (!i || !s.isHexaString(i) || i.length > 64) throw new Error("Invalid TXID in object", t);
                var a = r.isUndefined(t.vout) ? t.outputIndex : t.vout;
                if (!r.isNumber(a)) throw new Error("Invalid outputIndex, received " + a);
                n.checkArgument(!r.isUndefined(t.scriptPubKey) || !r.isUndefined(t.script), "Must provide the scriptPubKey for that output!");
                var p = new u(t.scriptPubKey || t.script);
                n.checkArgument(!r.isUndefined(t.amount) || !r.isUndefined(t.atoms), "Must provide an amount for the output");
                var f = r.isUndefined(t.amount) ? t.atoms : new h.fromDCR(t.amount).toAtoms();
                n.checkArgument(r.isNumber(f), "Amount must be a number"), s.defineImmutable(this, {
                    address: e,
                    txId: i,
                    outputIndex: a,
                    script: p,
                    atoms: f
                })
            }
            c.prototype.inspect = function() {
                return "<UnspentOutput: " + this.txId + ":" + this.outputIndex + ", atoms: " + this.atoms + ", address: " + this.address + ">"
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
                    amount: h.fromAtoms(this.atoms).toDCR()
                }
            }, t.exports = c
        }
    }
]);