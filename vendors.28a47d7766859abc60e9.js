(window.webpackJsonp = window.webpackJsonp || []).push([
    [327], {
        10428: function(t, r, e) {
            "use strict";
            var n = e.w[t.i];
            t.exports = n;
            e(5874);
            n.md()
        },
        5874: function(t, r, e) {
            "use strict";
            e.r(r), e.d(r, "paper_wallet_scramble", (function() {
                return g
            })), e.d(r, "paper_wallet_unscramble", (function() {
                return m
            })), e.d(r, "password_encrypt", (function() {
                return K
            })), e.d(r, "password_decrypt", (function() {
                return T
            })), e.d(r, "AccountIndex", (function() {
                return AccountIndex
            })), e.d(r, "Address", (function() {
                return Address
            })), e.d(r, "AddressKeyIndex", (function() {
                return AddressKeyIndex
            })), e.d(r, "Bip44AccountPrivate", (function() {
                return Bip44AccountPrivate
            })), e.d(r, "Bip44AccountPublic", (function() {
                return Bip44AccountPublic
            })), e.d(r, "Bip44ChainPrivate", (function() {
                return Bip44ChainPrivate
            })), e.d(r, "Bip44ChainPublic", (function() {
                return Bip44ChainPublic
            })), e.d(r, "Bip44RootPrivateKey", (function() {
                return Bip44RootPrivateKey
            })), e.d(r, "BlockchainSettings", (function() {
                return BlockchainSettings
            })), e.d(r, "Coin", (function() {
                return Coin
            })), e.d(r, "CoinDiff", (function() {
                return CoinDiff
            })), e.d(r, "DaedalusAddressChecker", (function() {
                return DaedalusAddressChecker
            })), e.d(r, "DaedalusCheckedAddress", (function() {
                return DaedalusCheckedAddress
            })), e.d(r, "DaedalusWallet", (function() {
                return DaedalusWallet
            })), e.d(r, "DerivationScheme", (function() {
                return DerivationScheme
            })), e.d(r, "Entropy", (function() {
                return Entropy
            })), e.d(r, "InputSelectionBuilder", (function() {
                return InputSelectionBuilder
            })), e.d(r, "InputSelectionResult", (function() {
                return InputSelectionResult
            })), e.d(r, "LinearFeeAlgorithm", (function() {
                return LinearFeeAlgorithm
            })), e.d(r, "OutputPolicy", (function() {
                return OutputPolicy
            })), e.d(r, "PrivateKey", (function() {
                return PrivateKey
            })), e.d(r, "PrivateRedeemKey", (function() {
                return PrivateRedeemKey
            })), e.d(r, "PublicKey", (function() {
                return PublicKey
            })), e.d(r, "PublicRedeemKey", (function() {
                return PublicRedeemKey
            })), e.d(r, "RedeemSignature", (function() {
                return RedeemSignature
            })), e.d(r, "Signature", (function() {
                return Signature
            })), e.d(r, "SignedTransaction", (function() {
                return SignedTransaction
            })), e.d(r, "Transaction", (function() {
                return Transaction
            })), e.d(r, "TransactionBuilder", (function() {
                return TransactionBuilder
            })), e.d(r, "TransactionFinalized", (function() {
                return TransactionFinalized
            })), e.d(r, "TransactionId", (function() {
                return TransactionId
            })), e.d(r, "TransactionSignature", (function() {
                return TransactionSignature
            })), e.d(r, "TxInput", (function() {
                return TxInput
            })), e.d(r, "TxOut", (function() {
                return TxOut
            })), e.d(r, "TxoPointer", (function() {
                return TxoPointer
            })), e.d(r, "Witness", (function() {
                return Witness
            })), e.d(r, "__wbindgen_string_new", (function() {
                return S
            })), e.d(r, "__wbindgen_object_drop_ref", (function() {
                return x
            })), e.d(r, "__wbindgen_json_parse", (function() {
                return A
            })), e.d(r, "__wbindgen_json_serialize", (function() {
                return O
            })), e.d(r, "__wbindgen_throw", (function() {
                return B
            })), e.d(r, "__wbindgen_rethrow", (function() {
                return j
            }));
            var n = e(10428);
            let a = new TextDecoder("utf-8", {
                ignoreBOM: !0,
                fatal: !0
            });
            a.decode();
            let i = null;

            function c() {
                return null !== i && i.buffer === n.Ub.buffer || (i = new Uint8Array(n.Ub.buffer)), i
            }

            function s(t, r) {
                return a.decode(c().subarray(t, t + r))
            }
            const p = new Array(32);
            p.fill(void 0), p.push(void 0, null, !0, !1);
            let o = p.length;

            function u(t) {
                o === p.length && p.push(p.length + 1);
                const r = o;
                return o = p[r], p[r] = t, r
            }

            function _(t) {
                return p[t]
            }

            function d(t) {
                const r = _(t);
                return function(t) {
                    t < 36 || (p[t] = o, o = t)
                }(t), r
            }
            let h = 0,
                l = new TextEncoder("utf-8");
            const v = "function" == typeof l.encodeInto ? function(t, r) {
                return l.encodeInto(t, r)
            } : function(t, r) {
                const e = l.encode(t);
                return r.set(e), {
                    read: t.length,
                    written: e.length
                }
            };

            function f(t, r, e) {
                if (void 0 === e) {
                    const e = l.encode(t),
                        n = r(e.length);
                    return c().subarray(n, n + e.length).set(e), h = e.length, n
                }
                let n = t.length,
                    a = r(n);
                const i = c();
                let s = 0;
                for (; s < n; s++) {
                    const r = t.charCodeAt(s);
                    if (r > 127) break;
                    i[a + s] = r
                }
                if (s !== n) {
                    0 !== s && (t = t.slice(s)), a = e(a, n, n = s + 3 * t.length);
                    const r = c().subarray(a + s, a + n);
                    s += v(t, r).written
                }
                return h = s, a
            }
            let w = null;

            function y() {
                return null !== w && w.buffer === n.Ub.buffer || (w = new Int32Array(n.Ub.buffer)), w
            }

            function b(t, r) {
                if (!(t instanceof r)) throw new Error("expected instance of " + r.name);
                return t.ptr
            }

            function P(t, r) {
                const e = r(1 * t.length);
                return c().set(t, e / 1), h = t.length, e
            }

            function g(t, r, e) {
                b(t, Entropy);
                var a = P(r, n.L),
                    i = h,
                    c = f(e, n.L, n.M),
                    s = h;
                return d(n.Wb(t.ptr, a, i, c, s))
            }

            function m(t, r) {
                var e = P(t, n.L),
                    a = h,
                    i = f(r, n.L, n.M),
                    c = h,
                    s = n.Xb(e, a, i, c);
                return Entropy.__wrap(s)
            }

            function K(t, r, e, a) {
                var i = f(t, n.L, n.M),
                    c = h,
                    s = P(r, n.L),
                    p = h,
                    o = P(e, n.L),
                    u = h,
                    _ = P(a, n.L),
                    l = h;
                return d(n.Zb(i, c, s, p, o, u, _, l))
            }

            function T(t, r) {
                var e = f(t, n.L, n.M),
                    a = h,
                    i = P(r, n.L),
                    c = h;
                return d(n.Yb(e, a, i, c))
            }
            class AccountIndex {
                static __wrap(t) {
                    const r = Object.create(AccountIndex.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.a(t)
                }
                static new(t) {
                    var r = n.N(t);
                    return AccountIndex.__wrap(r)
                }
            }
            class Address {
                static __wrap(t) {
                    const r = Object.create(Address.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.b(t)
                }
                to_base58() {
                    try {
                        n.Q(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
                static from_base58(t) {
                    var r = f(t, n.L, n.M),
                        e = h,
                        a = n.O(r, e);
                    return Address.__wrap(a)
                }
                static is_valid(t) {
                    var r = f(t, n.L, n.M),
                        e = h;
                    return 0 !== n.P(r, e)
                }
            }
            class AddressKeyIndex {
                static __wrap(t) {
                    const r = Object.create(AddressKeyIndex.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.c(t)
                }
                static new(t) {
                    var r = n.R(t);
                    return AddressKeyIndex.__wrap(r)
                }
            }
            class Bip44AccountPrivate {
                static __wrap(t) {
                    const r = Object.create(Bip44AccountPrivate.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.d(t)
                }
                static new(t, r) {
                    b(t, PrivateKey);
                    var e = t.ptr;
                    t.ptr = 0, b(r, DerivationScheme);
                    var a = r.ptr;
                    r.ptr = 0;
                    var i = n.U(e, a);
                    return Bip44AccountPrivate.__wrap(i)
                }
                public() {
                    var t = n.V(this.ptr);
                    return Bip44AccountPublic.__wrap(t)
                }
                bip44_chain(t) {
                    var r = n.S(this.ptr, t);
                    return Bip44ChainPrivate.__wrap(r)
                }
                key() {
                    var t = n.T(this.ptr);
                    return PrivateKey.__wrap(t)
                }
            }
            class Bip44AccountPublic {
                static __wrap(t) {
                    const r = Object.create(Bip44AccountPublic.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.e(t)
                }
                static new(t, r) {
                    b(t, PublicKey);
                    var e = t.ptr;
                    t.ptr = 0, b(r, DerivationScheme);
                    var a = r.ptr;
                    r.ptr = 0;
                    var i = n.Y(e, a);
                    return Bip44AccountPublic.__wrap(i)
                }
                bip44_chain(t) {
                    var r = n.W(this.ptr, t);
                    return Bip44ChainPublic.__wrap(r)
                }
                key() {
                    var t = n.X(this.ptr);
                    return PublicKey.__wrap(t)
                }
            }
            class Bip44ChainPrivate {
                static __wrap(t) {
                    const r = Object.create(Bip44ChainPrivate.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.f(t)
                }
                static new(t, r) {
                    b(t, PrivateKey);
                    var e = t.ptr;
                    t.ptr = 0, b(r, DerivationScheme);
                    var a = r.ptr;
                    r.ptr = 0;
                    var i = n.bb(e, a);
                    return Bip44ChainPrivate.__wrap(i)
                }
                public() {
                    var t = n.cb(this.ptr);
                    return Bip44ChainPublic.__wrap(t)
                }
                address_key(t) {
                    b(t, AddressKeyIndex);
                    var r = t.ptr;
                    t.ptr = 0;
                    var e = n.Z(this.ptr, r);
                    return PrivateKey.__wrap(e)
                }
                key() {
                    var t = n.ab(this.ptr);
                    return PrivateKey.__wrap(t)
                }
            }
            class Bip44ChainPublic {
                static __wrap(t) {
                    const r = Object.create(Bip44ChainPublic.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.g(t)
                }
                static new(t, r) {
                    b(t, PublicKey);
                    var e = t.ptr;
                    t.ptr = 0, b(r, DerivationScheme);
                    var a = r.ptr;
                    r.ptr = 0;
                    var i = n.fb(e, a);
                    return Bip44ChainPublic.__wrap(i)
                }
                address_key(t) {
                    b(t, AddressKeyIndex);
                    var r = t.ptr;
                    t.ptr = 0;
                    var e = n.db(this.ptr, r);
                    return PublicKey.__wrap(e)
                }
                key() {
                    var t = n.eb(this.ptr);
                    return PublicKey.__wrap(t)
                }
            }
            class Bip44RootPrivateKey {
                static __wrap(t) {
                    const r = Object.create(Bip44RootPrivateKey.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.h(t)
                }
                static new(t, r) {
                    b(t, PrivateKey);
                    var e = t.ptr;
                    t.ptr = 0, b(r, DerivationScheme);
                    var a = r.ptr;
                    r.ptr = 0;
                    var i = n.ib(e, a);
                    return Bip44RootPrivateKey.__wrap(i)
                }
                static recover(t, r) {
                    b(t, Entropy);
                    var e = f(r, n.L, n.M),
                        a = h,
                        i = n.jb(t.ptr, e, a);
                    return Bip44RootPrivateKey.__wrap(i)
                }
                bip44_account(t) {
                    b(t, AccountIndex);
                    var r = t.ptr;
                    t.ptr = 0;
                    var e = n.gb(this.ptr, r);
                    return Bip44AccountPrivate.__wrap(e)
                }
                key() {
                    var t = n.hb(this.ptr);
                    return PrivateKey.__wrap(t)
                }
            }
            class BlockchainSettings {
                static __wrap(t) {
                    const r = Object.create(BlockchainSettings.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.i(t)
                }
                to_json() {
                    return d(n.mb(this.ptr))
                }
                static from_json(t) {
                    var r = n.kb(u(t));
                    return BlockchainSettings.__wrap(r)
                }
                static mainnet() {
                    var t = n.lb();
                    return BlockchainSettings.__wrap(t)
                }
            }
            class Coin {
                static __wrap(t) {
                    const r = Object.create(Coin.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.j(t)
                }
                constructor() {
                    var t = n.sb();
                    return Coin.__wrap(t)
                }
                static from_str(t) {
                    var r = f(t, n.L, n.M),
                        e = h,
                        a = n.qb(r, e);
                    return Coin.__wrap(a)
                }
                to_str() {
                    try {
                        n.tb(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
                static from(t, r) {
                    var e = n.pb(t, r);
                    return Coin.__wrap(e)
                }
                ada() {
                    return n.nb(this.ptr) >>> 0
                }
                lovelace() {
                    return n.rb(this.ptr) >>> 0
                }
                add(t) {
                    b(t, Coin);
                    var r = n.ob(this.ptr, t.ptr);
                    return Coin.__wrap(r)
                }
            }
            class CoinDiff {
                static __wrap(t) {
                    const r = Object.create(CoinDiff.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.k(t)
                }
                is_zero() {
                    return 0 !== n.wb(this.ptr)
                }
                is_negative() {
                    return 0 !== n.ub(this.ptr)
                }
                is_positive() {
                    return 0 !== n.vb(this.ptr)
                }
                value() {
                    var t = n.xb(this.ptr);
                    return Coin.__wrap(t)
                }
            }
            class DaedalusAddressChecker {
                static __wrap(t) {
                    const r = Object.create(DaedalusAddressChecker.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.l(t)
                }
                static new(t) {
                    b(t, DaedalusWallet);
                    var r = n.zb(t.ptr);
                    return DaedalusAddressChecker.__wrap(r)
                }
                check_address(t) {
                    b(t, Address);
                    var r = n.yb(this.ptr, t.ptr);
                    return DaedalusCheckedAddress.__wrap(r)
                }
            }
            class DaedalusCheckedAddress {
                static __wrap(t) {
                    const r = Object.create(DaedalusCheckedAddress.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.m(t)
                }
                is_checked() {
                    return 0 !== n.Ab(this.ptr)
                }
                private_key() {
                    var t = n.Bb(this.ptr);
                    return PrivateKey.__wrap(t)
                }
            }
            class DaedalusWallet {
                static __wrap(t) {
                    const r = Object.create(DaedalusWallet.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.n(t)
                }
                static new(t) {
                    b(t, PrivateKey);
                    var r = t.ptr;
                    t.ptr = 0;
                    var e = n.Db(r);
                    return DaedalusWallet.__wrap(e)
                }
                master_key() {
                    var t = n.Cb(this.ptr);
                    return PrivateKey.__wrap(t)
                }
                static recover(t) {
                    b(t, Entropy);
                    var r = n.Eb(t.ptr);
                    return DaedalusWallet.__wrap(r)
                }
            }
            class DerivationScheme {
                static __wrap(t) {
                    const r = Object.create(DerivationScheme.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.o(t)
                }
                static v1() {
                    var t = n.Fb();
                    return DerivationScheme.__wrap(t)
                }
                static v2() {
                    var t = n.Gb();
                    return DerivationScheme.__wrap(t)
                }
            }
            class Entropy {
                static __wrap(t) {
                    const r = Object.create(Entropy.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.p(t)
                }
                static from_english_mnemonics(t) {
                    var r = f(t, n.L, n.M),
                        e = h,
                        a = n.Hb(r, e);
                    return Entropy.__wrap(a)
                }
                to_english_mnemonics() {
                    try {
                        n.Jb(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
                to_array() {
                    return d(n.Ib(this.ptr))
                }
            }
            class InputSelectionBuilder {
                static __wrap(t) {
                    const r = Object.create(InputSelectionBuilder.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.q(t)
                }
                static first_match_first() {
                    var t = n.Nb();
                    return InputSelectionBuilder.__wrap(t)
                }
                static largest_first() {
                    var t = n.Ob();
                    return InputSelectionBuilder.__wrap(t)
                }
                static blackjack(t) {
                    b(t, Coin);
                    var r = t.ptr;
                    t.ptr = 0;
                    var e = n.Mb(r);
                    return InputSelectionBuilder.__wrap(e)
                }
                add_input(t) {
                    b(t, TxInput), n.Kb(this.ptr, t.ptr)
                }
                add_output(t) {
                    b(t, TxOut), n.Lb(this.ptr, t.ptr)
                }
                select_inputs(t, r) {
                    b(t, LinearFeeAlgorithm), b(r, OutputPolicy);
                    var e = n.Pb(this.ptr, t.ptr, r.ptr);
                    return InputSelectionResult.__wrap(e)
                }
            }
            class InputSelectionResult {
                static __wrap(t) {
                    const r = Object.create(InputSelectionResult.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.r(t)
                }
                is_input(t) {
                    return b(t, TxoPointer), 0 !== n.Sb(this.ptr, t.ptr)
                }
                estimated_fees() {
                    var t = n.Rb(this.ptr);
                    return Coin.__wrap(t)
                }
                estimated_change() {
                    var t = n.Qb(this.ptr);
                    return Coin.__wrap(t)
                }
            }
            class LinearFeeAlgorithm {
                static __wrap(t) {
                    const r = Object.create(LinearFeeAlgorithm.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.s(t)
                }
                static
                default () {
                    var t = n.Tb();
                    return LinearFeeAlgorithm.__wrap(t)
                }
            }
            class OutputPolicy {
                static __wrap(t) {
                    const r = Object.create(OutputPolicy.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.t(t)
                }
                static change_to_one_address(t) {
                    b(t, Address);
                    var r = t.ptr;
                    t.ptr = 0;
                    var e = n.Vb(r);
                    return OutputPolicy.__wrap(e)
                }
            }
            class PrivateKey {
                static __wrap(t) {
                    const r = Object.create(PrivateKey.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.u(t)
                }
                static new(t, r) {
                    b(t, Entropy);
                    var e = f(r, n.L, n.M),
                        a = h,
                        i = n.cc(t.ptr, e, a);
                    return PrivateKey.__wrap(i)
                }
                static from_hex(t) {
                    var r = f(t, n.L, n.M),
                        e = h,
                        a = n.bc(r, e);
                    return PrivateKey.__wrap(a)
                }
                to_hex() {
                    try {
                        n.fc(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
                public() {
                    var t = n.dc(this.ptr);
                    return PublicKey.__wrap(t)
                }
                sign(t) {
                    var r = P(t, n.L),
                        e = h,
                        a = n.ec(this.ptr, r, e);
                    return Signature.__wrap(a)
                }
                derive(t, r) {
                    b(t, DerivationScheme);
                    var e = t.ptr;
                    t.ptr = 0;
                    var a = n.ac(this.ptr, e, r);
                    return PrivateKey.__wrap(a)
                }
            }
            class PrivateRedeemKey {
                static __wrap(t) {
                    const r = Object.create(PrivateRedeemKey.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.v(t)
                }
                static from_bytes(t) {
                    var r = P(t, n.L),
                        e = h,
                        a = n.gc(r, e);
                    return PrivateRedeemKey.__wrap(a)
                }
                static from_hex(t) {
                    var r = f(t, n.L, n.M),
                        e = h,
                        a = n.hc(r, e);
                    return PrivateRedeemKey.__wrap(a)
                }
                to_hex() {
                    try {
                        n.kc(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
                public() {
                    var t = n.ic(this.ptr);
                    return PublicRedeemKey.__wrap(t)
                }
                sign(t) {
                    var r = P(t, n.L),
                        e = h,
                        a = n.jc(this.ptr, r, e);
                    return RedeemSignature.__wrap(a)
                }
            }
            class PublicKey {
                static __wrap(t) {
                    const r = Object.create(PublicKey.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.w(t)
                }
                static from_hex(t) {
                    var r = f(t, n.L, n.M),
                        e = h,
                        a = n.nc(r, e);
                    return PublicKey.__wrap(a)
                }
                to_hex() {
                    try {
                        n.oc(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
                verify(t, r) {
                    var e = P(t, n.L),
                        a = h;
                    return b(r, Signature), 0 !== n.pc(this.ptr, e, a, r.ptr)
                }
                derive(t, r) {
                    b(t, DerivationScheme);
                    var e = t.ptr;
                    t.ptr = 0;
                    var a = n.mc(this.ptr, e, r);
                    return PublicKey.__wrap(a)
                }
                bootstrap_era_address(t) {
                    b(t, BlockchainSettings);
                    var r = n.lc(this.ptr, t.ptr);
                    return Address.__wrap(r)
                }
            }
            class PublicRedeemKey {
                static __wrap(t) {
                    const r = Object.create(PublicRedeemKey.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.x(t)
                }
                static from_hex(t) {
                    var r = f(t, n.L, n.M),
                        e = h,
                        a = n.rc(r, e);
                    return PublicRedeemKey.__wrap(a)
                }
                to_hex() {
                    try {
                        n.sc(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
                verify(t, r) {
                    var e = P(t, n.L),
                        a = h;
                    return b(r, RedeemSignature), 0 !== n.tc(this.ptr, e, a, r.ptr)
                }
                address(t) {
                    b(t, BlockchainSettings);
                    var r = n.qc(this.ptr, t.ptr);
                    return Address.__wrap(r)
                }
            }
            class RedeemSignature {
                static __wrap(t) {
                    const r = Object.create(RedeemSignature.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.y(t)
                }
                static from_hex(t) {
                    var r = f(t, n.L, n.M),
                        e = h,
                        a = n.uc(r, e);
                    return RedeemSignature.__wrap(a)
                }
                to_hex() {
                    try {
                        n.vc(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
            }
            class Signature {
                static __wrap(t) {
                    const r = Object.create(Signature.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.z(t)
                }
                static from_hex(t) {
                    var r = f(t, n.L, n.M),
                        e = h,
                        a = n.wc(r, e);
                    return Signature.__wrap(a)
                }
                to_hex() {
                    try {
                        n.xc(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
            }
            class SignedTransaction {
                static __wrap(t) {
                    const r = Object.create(SignedTransaction.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.A(t)
                }
                id() {
                    try {
                        n.Ac(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
                to_json() {
                    return d(n.Cc(this.ptr))
                }
                static from_json(t) {
                    var r = n.zc(u(t));
                    return SignedTransaction.__wrap(r)
                }
                static from_bytes(t) {
                    var r = P(t, n.L),
                        e = h,
                        a = n.yc(r, e);
                    return SignedTransaction.__wrap(a)
                }
                to_hex() {
                    try {
                        n.Bc(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
            }
            class Transaction {
                static __wrap(t) {
                    const r = Object.create(Transaction.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.B(t)
                }
                id() {
                    var t = n.Fc(this.ptr);
                    return TransactionId.__wrap(t)
                }
                to_json() {
                    return d(n.Hc(this.ptr))
                }
                static from_json(t) {
                    var r = n.Ec(u(t));
                    return Transaction.__wrap(r)
                }
                clone() {
                    var t = n.Dc(this.ptr);
                    return Transaction.__wrap(t)
                }
                to_hex() {
                    try {
                        n.Gc(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
            }
            class TransactionBuilder {
                static __wrap(t) {
                    const r = Object.create(TransactionBuilder.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.C(t)
                }
                constructor() {
                    var t = n.Rc();
                    return TransactionBuilder.__wrap(t)
                }
                add_input(t, r) {
                    b(t, TxoPointer), b(r, Coin);
                    var e = r.ptr;
                    r.ptr = 0, n.Ic(this.ptr, t.ptr, e)
                }
                get_input_total() {
                    var t = n.Oc(this.ptr);
                    return Coin.__wrap(t)
                }
                add_output(t) {
                    b(t, TxOut), n.Jc(this.ptr, t.ptr)
                }
                apply_output_policy(t, r) {
                    return b(t, LinearFeeAlgorithm), b(r, OutputPolicy), d(n.Kc(this.ptr, t.ptr, r.ptr))
                }
                get_output_total() {
                    var t = n.Pc(this.ptr);
                    return Coin.__wrap(t)
                }
                estimate_fee(t) {
                    b(t, LinearFeeAlgorithm);
                    var r = n.Lc(this.ptr, t.ptr);
                    return Coin.__wrap(r)
                }
                get_balance(t) {
                    b(t, LinearFeeAlgorithm);
                    var r = n.Mc(this.ptr, t.ptr);
                    return CoinDiff.__wrap(r)
                }
                get_balance_without_fees() {
                    var t = n.Nc(this.ptr);
                    return CoinDiff.__wrap(t)
                }
                make_transaction() {
                    var t = this.ptr;
                    this.ptr = 0;
                    var r = n.Qc(t);
                    return Transaction.__wrap(r)
                }
            }
            class TransactionFinalized {
                static __wrap(t) {
                    const r = Object.create(TransactionFinalized.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.D(t)
                }
                constructor(t) {
                    b(t, Transaction);
                    var r = t.ptr;
                    t.ptr = 0;
                    var e = n.Vc(r);
                    return TransactionFinalized.__wrap(e)
                }
                id() {
                    var t = n.Uc(this.ptr);
                    return TransactionId.__wrap(t)
                }
                add_witness(t) {
                    b(t, Witness);
                    var r = t.ptr;
                    t.ptr = 0, n.Sc(this.ptr, r)
                }
                finalize() {
                    var t = this.ptr;
                    this.ptr = 0;
                    var r = n.Tc(t);
                    return SignedTransaction.__wrap(r)
                }
            }
            class TransactionId {
                static __wrap(t) {
                    const r = Object.create(TransactionId.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.E(t)
                }
                to_hex() {
                    try {
                        n.Xc(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
                static from_hex(t) {
                    var r = f(t, n.L, n.M),
                        e = h,
                        a = n.Wc(r, e);
                    return TransactionId.__wrap(a)
                }
            }
            class TransactionSignature {
                static __wrap(t) {
                    const r = Object.create(TransactionSignature.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.F(t)
                }
                static from_hex(t) {
                    var r = f(t, n.L, n.M),
                        e = h,
                        a = n.Yc(r, e);
                    return TransactionSignature.__wrap(a)
                }
                to_hex() {
                    try {
                        n.Zc(8, this.ptr);
                        var t = y()[2],
                            r = y()[3];
                        return s(t, r)
                    } finally {
                        n.K(t, r)
                    }
                }
            }
            class TxInput {
                static __wrap(t) {
                    const r = Object.create(TxInput.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.G(t)
                }
                static new(t, r) {
                    b(t, TxoPointer), b(r, TxOut);
                    var e = n.bd(t.ptr, r.ptr);
                    return TxInput.__wrap(e)
                }
                to_json() {
                    return d(n.cd(this.ptr))
                }
                static from_json(t) {
                    var r = n.ad(u(t));
                    return TxInput.__wrap(r)
                }
            }
            class TxOut {
                static __wrap(t) {
                    const r = Object.create(TxOut.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.I(t)
                }
                static new(t, r) {
                    b(t, Address), b(r, Coin);
                    var e = n.hd(t.ptr, r.ptr);
                    return TxOut.__wrap(e)
                }
                to_json() {
                    return d(n.id(this.ptr))
                }
                static from_json(t) {
                    var r = n.gd(u(t));
                    return TxOut.__wrap(r)
                }
            }
            class TxoPointer {
                static __wrap(t) {
                    const r = Object.create(TxoPointer.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.H(t)
                }
                static new(t, r) {
                    b(t, TransactionId);
                    var e = n.ed(t.ptr, r);
                    return TxoPointer.__wrap(e)
                }
                to_json() {
                    return d(n.fd(this.ptr))
                }
                static from_json(t) {
                    var r = n.dd(u(t));
                    return TxoPointer.__wrap(r)
                }
            }
            class Witness {
                static __wrap(t) {
                    const r = Object.create(Witness.prototype);
                    return r.ptr = t, r
                }
                free() {
                    const t = this.ptr;
                    this.ptr = 0, n.J(t)
                }
                static new_extended_key(t, r, e) {
                    b(t, BlockchainSettings), b(r, PrivateKey), b(e, TransactionId);
                    var a = n.kd(t.ptr, r.ptr, e.ptr);
                    return Witness.__wrap(a)
                }
                static new_redeem_key(t, r, e) {
                    b(t, BlockchainSettings), b(r, PrivateRedeemKey), b(e, TransactionId);
                    var a = n.ld(t.ptr, r.ptr, e.ptr);
                    return Witness.__wrap(a)
                }
                static from_external(t, r) {
                    b(t, PublicKey), b(r, TransactionSignature);
                    var e = n.jd(t.ptr, r.ptr);
                    return Witness.__wrap(e)
                }
            }
            const S = function(t, r) {
                    return u(s(t, r))
                },
                x = function(t) {
                    d(t)
                },
                A = function(t, r) {
                    return u(JSON.parse(s(t, r)))
                },
                O = function(t, r) {
                    const e = _(r);
                    var a = f(JSON.stringify(void 0 === e ? null : e), n.L, n.M),
                        i = h;
                    y()[t / 4 + 1] = i, y()[t / 4 + 0] = a
                },
                B = function(t, r) {
                    throw new Error(s(t, r))
                },
                j = function(t) {
                    throw d(t)
                }
        }
    }
]);