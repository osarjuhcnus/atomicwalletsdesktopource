(window.webpackJsonp = window.webpackJsonp || []).push([
    [229], {
        11301: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getSiName = function(e, t) {
                const a = e.getTypeDef(t);
                return a.lookupName || a.type
            }
        },
        11302: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getUniqTypes = function(e, t, a) {
                return (0, o.validateTypes)(e, a, (0, n.flattenUniq)(function({
                    lookup: e,
                    pallets: t
                }) {
                    return t.reduce((t, {
                        calls: a,
                        constants: n,
                        events: o,
                        storage: s
                    }) => (t.push([r(e, n)]), a.isSome && t.push(i(e, a.unwrap().type)), o.isSome && t.push(i(e, o.unwrap().type)), s.isSome && t.push(s.unwrap().items.map(({
                        type: t
                    }) => {
                        if (t.isPlain) return [e.getTypeDef(t.asPlain).type];
                        const {
                            hashers: a,
                            key: n,
                            value: o
                        } = t.asMap;
                        return 1 === a.length ? [e.getTypeDef(o).type, e.getTypeDef(n).type] : [e.getTypeDef(o).type, ...e.getSiType(n).def.asTuple.map(t => e.getTypeDef(t).type)]
                    })), t), [])
                }(t)))
            };
            var n = a(6870),
                o = a(7880);

            function r(e, t) {
                return t.map(({
                    type: t
                }) => e.getTypeDef(t).type)
            }

            function i(e, t) {
                return e.getSiType(t).def.asVariant.variants.map(({
                    fields: t
                }) => r(e, t))
            }
        },
        11303: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.extractTypes = c;
            var n = a(5642);

            function o(e, {
                sub: t
            }) {
                const {
                    lookupName: a,
                    type: n
                } = t;
                return c([a || n])
            }

            function r(e, {
                sub: t
            }) {
                return c(t.map(({
                    lookupName: e,
                    type: t
                }) => e || t))
            }

            function i(e, {
                info: t
            }) {
                throw new Error(`Unhandled: Unable to create and validate type from ${e} (info=${n.TypeDefInfo[t]})`)
            }
            const s = {
                [n.TypeDefInfo.BTreeMap]: r,
                [n.TypeDefInfo.BTreeSet]: o,
                [n.TypeDefInfo.Compact]: o,
                [n.TypeDefInfo.DoNotConstruct]: i,
                [n.TypeDefInfo.Enum]: r,
                [n.TypeDefInfo.HashMap]: r,
                [n.TypeDefInfo.Int]: i,
                [n.TypeDefInfo.Linkage]: i,
                [n.TypeDefInfo.Null]: i,
                [n.TypeDefInfo.Option]: o,
                [n.TypeDefInfo.Plain]: (e, t) => t.lookupName || t.type,
                [n.TypeDefInfo.Range]: o,
                [n.TypeDefInfo.RangeInclusive]: o,
                [n.TypeDefInfo.Result]: r,
                [n.TypeDefInfo.Set]: r,
                [n.TypeDefInfo.Si]: i,
                [n.TypeDefInfo.Struct]: r,
                [n.TypeDefInfo.Tuple]: r,
                [n.TypeDefInfo.UInt]: i,
                [n.TypeDefInfo.Vec]: o,
                [n.TypeDefInfo.VecFixed]: o,
                [n.TypeDefInfo.WrapperKeepOpaque]: o,
                [n.TypeDefInfo.WrapperOpaque]: o
            };

            function c(e) {
                return e.map(e => {
                    const t = (0, n.getTypeDef)(e);
                    return s[t.info](e, t)
                })
            }
        },
        11304: function(e, t, a) {
            "use strict";

            function n(e) {
                const t = e.map(e => e.toString().trim()),
                    a = t.findIndex(e => !e.length);
                return -1 === a ? t : t.slice(0, a)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toCallsOnly = function(e, {
                extrinsic: t,
                lookup: a,
                pallets: o
            }) {
                return e.createTypeUnsafe("MetadataLatest", [{
                    extrinsic: t,
                    lookup: {
                        types: a.types.map(({
                            id: t,
                            type: a
                        }) => e.createTypeUnsafe("PortableType", [{
                            id: t,
                            type: {
                                ...a,
                                docs: n(a.docs)
                            }
                        }]))
                    },
                    pallets: o.map(({
                        calls: t,
                        index: a,
                        name: n
                    }) => ({
                        calls: e.createTypeUnsafe("Option<PalletCallMetadataLatest>", [t.unwrapOr(null)]),
                        index: a,
                        name: n
                    }))
                }]).toJSON()
            }
        },
        11305: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "metadata", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "runtime", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "scaleInfo", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            });
            var o = n(a(11306)),
                r = n(a(7883)),
                i = n(a(11313))
        },
        11306: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AllHashers", {
                enumerable: !0,
                get: function() {
                    return o.AllHashers
                }
            }), t.default = void 0;
            var n = a(5458),
                o = a(7881),
                r = a(11307),
                i = a(11308),
                s = a(11309),
                c = a(11310),
                u = a(11311),
                l = a(11312),
                d = {
                    rpc: {},
                    types: (0, n.objectSpread)({}, r.v9, i.v10, s.v11, c.v12, u.v13, l.v14, {
                        ErrorMetadataLatest: "ErrorMetadataV14",
                        EventMetadataLatest: "EventMetadataV14",
                        ExtrinsicMetadataLatest: "ExtrinsicMetadataV14",
                        FunctionArgumentMetadataLatest: "FunctionArgumentMetadataV14",
                        FunctionMetadataLatest: "FunctionMetadataV14",
                        MetadataLatest: "MetadataV14",
                        PalletCallMetadataLatest: "PalletCallMetadataV14",
                        PalletConstantMetadataLatest: "PalletConstantMetadataV14",
                        PalletErrorMetadataLatest: "PalletErrorMetadataV14",
                        PalletEventMetadataLatest: "PalletEventMetadataV14",
                        PalletMetadataLatest: "PalletMetadataV14",
                        PalletStorageMetadataLatest: "PalletStorageMetadataV14",
                        PortableType: "PortableTypeV14",
                        SignedExtensionMetadataLatest: "SignedExtensionMetadataV14",
                        StorageEntryMetadataLatest: "StorageEntryMetadataV14",
                        StorageEntryModifierLatest: "StorageEntryModifierV14",
                        StorageEntryTypeLatest: "StorageEntryTypeV14",
                        StorageHasher: "StorageHasherV14",
                        MetadataAll: {
                            _enum: {
                                V0: "DoNotConstruct<MetadataV0>",
                                V1: "DoNotConstruct<MetadataV1>",
                                V2: "DoNotConstruct<MetadataV2>",
                                V3: "DoNotConstruct<MetadataV3>",
                                V4: "DoNotConstruct<MetadataV4>",
                                V5: "DoNotConstruct<MetadataV5>",
                                V6: "DoNotConstruct<MetadataV6>",
                                V7: "DoNotConstruct<MetadataV7>",
                                V8: "DoNotConstruct<MetadataV8>",
                                V9: "MetadataV9",
                                V10: "MetadataV10",
                                V11: "MetadataV11",
                                V12: "MetadataV12",
                                V13: "MetadataV13",
                                V14: "MetadataV14"
                            }
                        }
                    })
                };
            t.default = d
        },
        11307: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v9 = void 0;
            t.v9 = {
                ErrorMetadataV9: {
                    name: "Text",
                    docs: "Vec<Text>"
                },
                EventMetadataV9: {
                    name: "Text",
                    args: "Vec<Type>",
                    docs: "Vec<Text>"
                },
                FunctionArgumentMetadataV9: {
                    name: "Text",
                    type: "Type"
                },
                FunctionMetadataV9: {
                    name: "Text",
                    args: "Vec<FunctionArgumentMetadataV9>",
                    docs: "Vec<Text>"
                },
                MetadataV9: {
                    modules: "Vec<ModuleMetadataV9>"
                },
                ModuleConstantMetadataV9: {
                    name: "Text",
                    type: "Type",
                    value: "Bytes",
                    docs: "Vec<Text>"
                },
                ModuleMetadataV9: {
                    name: "Text",
                    storage: "Option<StorageMetadataV9>",
                    calls: "Option<Vec<FunctionMetadataV9>>",
                    events: "Option<Vec<EventMetadataV9>>",
                    constants: "Vec<ModuleConstantMetadataV9>",
                    errors: "Vec<ErrorMetadataV9>"
                },
                StorageEntryMetadataV9: {
                    name: "Text",
                    modifier: "StorageEntryModifierV9",
                    type: "StorageEntryTypeV9",
                    fallback: "Bytes",
                    docs: "Vec<Text>"
                },
                StorageEntryModifierV9: {
                    _enum: ["Optional", "Default", "Required"]
                },
                StorageEntryTypeV9: {
                    _enum: {
                        Plain: "Type",
                        Map: {
                            hasher: "StorageHasherV9",
                            key: "Type",
                            value: "Type",
                            linked: "bool"
                        },
                        DoubleMap: {
                            hasher: "StorageHasherV9",
                            key1: "Type",
                            key2: "Type",
                            value: "Type",
                            key2Hasher: "StorageHasherV9"
                        }
                    }
                },
                StorageHasherV9: {
                    _enum: {
                        Blake2_128: null,
                        Blake2_256: null,
                        Twox128: null,
                        Twox256: null,
                        Twox64Concat: null
                    }
                },
                StorageMetadataV9: {
                    prefix: "Text",
                    items: "Vec<StorageEntryMetadataV9>"
                }
            }
        },
        11308: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v10 = void 0;
            t.v10 = {
                ErrorMetadataV10: "ErrorMetadataV9",
                EventMetadataV10: "EventMetadataV9",
                FunctionArgumentMetadataV10: "FunctionArgumentMetadataV9",
                FunctionMetadataV10: "FunctionMetadataV9",
                MetadataV10: {
                    modules: "Vec<ModuleMetadataV10>"
                },
                ModuleConstantMetadataV10: "ModuleConstantMetadataV9",
                ModuleMetadataV10: {
                    name: "Text",
                    storage: "Option<StorageMetadataV10>",
                    calls: "Option<Vec<FunctionMetadataV10>>",
                    events: "Option<Vec<EventMetadataV10>>",
                    constants: "Vec<ModuleConstantMetadataV10>",
                    errors: "Vec<ErrorMetadataV10>"
                },
                StorageEntryModifierV10: "StorageEntryModifierV9",
                StorageEntryMetadataV10: {
                    name: "Text",
                    modifier: "StorageEntryModifierV10",
                    type: "StorageEntryTypeV10",
                    fallback: "Bytes",
                    docs: "Vec<Text>"
                },
                StorageEntryTypeV10: {
                    _enum: {
                        Plain: "Type",
                        Map: {
                            hasher: "StorageHasherV10",
                            key: "Type",
                            value: "Type",
                            linked: "bool"
                        },
                        DoubleMap: {
                            hasher: "StorageHasherV10",
                            key1: "Type",
                            key2: "Type",
                            value: "Type",
                            key2Hasher: "StorageHasherV10"
                        }
                    }
                },
                StorageMetadataV10: {
                    prefix: "Text",
                    items: "Vec<StorageEntryMetadataV10>"
                },
                StorageHasherV10: {
                    _enum: {
                        Blake2_128: null,
                        Blake2_256: null,
                        Blake2_128Concat: null,
                        Twox128: null,
                        Twox256: null,
                        Twox64Concat: null
                    }
                }
            }
        },
        11309: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v11 = void 0;
            const n = {
                ErrorMetadataV11: "ErrorMetadataV10",
                EventMetadataV11: "EventMetadataV10",
                ExtrinsicMetadataV11: {
                    version: "u8",
                    signedExtensions: "Vec<Text>"
                },
                FunctionArgumentMetadataV11: "FunctionArgumentMetadataV10",
                FunctionMetadataV11: "FunctionMetadataV10",
                MetadataV11: {
                    modules: "Vec<ModuleMetadataV11>",
                    extrinsic: "ExtrinsicMetadataV11"
                },
                ModuleConstantMetadataV11: "ModuleConstantMetadataV10",
                ModuleMetadataV11: {
                    name: "Text",
                    storage: "Option<StorageMetadataV11>",
                    calls: "Option<Vec<FunctionMetadataV11>>",
                    events: "Option<Vec<EventMetadataV11>>",
                    constants: "Vec<ModuleConstantMetadataV11>",
                    errors: "Vec<ErrorMetadataV11>"
                },
                StorageEntryModifierV11: "StorageEntryModifierV10",
                StorageEntryMetadataV11: {
                    name: "Text",
                    modifier: "StorageEntryModifierV11",
                    type: "StorageEntryTypeV11",
                    fallback: "Bytes",
                    docs: "Vec<Text>"
                },
                StorageEntryTypeV11: {
                    _enum: {
                        Plain: "Type",
                        Map: {
                            hasher: "StorageHasherV11",
                            key: "Type",
                            value: "Type",
                            linked: "bool"
                        },
                        DoubleMap: {
                            hasher: "StorageHasherV11",
                            key1: "Type",
                            key2: "Type",
                            value: "Type",
                            key2Hasher: "StorageHasherV11"
                        }
                    }
                },
                StorageMetadataV11: {
                    prefix: "Text",
                    items: "Vec<StorageEntryMetadataV11>"
                },
                StorageHasherV11: {
                    _enum: a(7881).AllHashers
                }
            };
            t.v11 = n
        },
        11310: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v12 = void 0;
            t.v12 = {
                ErrorMetadataV12: "ErrorMetadataV11",
                EventMetadataV12: "EventMetadataV11",
                ExtrinsicMetadataV12: "ExtrinsicMetadataV11",
                FunctionArgumentMetadataV12: "FunctionArgumentMetadataV11",
                FunctionMetadataV12: "FunctionMetadataV11",
                MetadataV12: {
                    modules: "Vec<ModuleMetadataV12>",
                    extrinsic: "ExtrinsicMetadataV12"
                },
                ModuleConstantMetadataV12: "ModuleConstantMetadataV11",
                ModuleMetadataV12: {
                    name: "Text",
                    storage: "Option<StorageMetadataV12>",
                    calls: "Option<Vec<FunctionMetadataV12>>",
                    events: "Option<Vec<EventMetadataV12>>",
                    constants: "Vec<ModuleConstantMetadataV12>",
                    errors: "Vec<ErrorMetadataV12>",
                    index: "u8"
                },
                StorageEntryModifierV12: "StorageEntryModifierV11",
                StorageEntryMetadataV12: "StorageEntryMetadataV11",
                StorageEntryTypeV12: "StorageEntryTypeV11",
                StorageMetadataV12: "StorageMetadataV11",
                StorageHasherV12: "StorageHasherV11"
            }
        },
        11311: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v13 = void 0;
            t.v13 = {
                ErrorMetadataV13: "ErrorMetadataV12",
                EventMetadataV13: "EventMetadataV12",
                ExtrinsicMetadataV13: "ExtrinsicMetadataV12",
                FunctionArgumentMetadataV13: "FunctionArgumentMetadataV12",
                FunctionMetadataV13: "FunctionMetadataV12",
                MetadataV13: {
                    modules: "Vec<ModuleMetadataV13>",
                    extrinsic: "ExtrinsicMetadataV13"
                },
                ModuleConstantMetadataV13: "ModuleConstantMetadataV12",
                ModuleMetadataV13: {
                    name: "Text",
                    storage: "Option<StorageMetadataV13>",
                    calls: "Option<Vec<FunctionMetadataV13>>",
                    events: "Option<Vec<EventMetadataV13>>",
                    constants: "Vec<ModuleConstantMetadataV13>",
                    errors: "Vec<ErrorMetadataV13>",
                    index: "u8"
                },
                StorageEntryModifierV13: "StorageEntryModifierV12",
                StorageEntryMetadataV13: {
                    name: "Text",
                    modifier: "StorageEntryModifierV13",
                    type: "StorageEntryTypeV13",
                    fallback: "Bytes",
                    docs: "Vec<Text>"
                },
                StorageEntryTypeV13: {
                    _enum: {
                        Plain: "Type",
                        Map: {
                            hasher: "StorageHasherV13",
                            key: "Type",
                            value: "Type",
                            linked: "bool"
                        },
                        DoubleMap: {
                            hasher: "StorageHasherV13",
                            key1: "Type",
                            key2: "Type",
                            value: "Type",
                            key2Hasher: "StorageHasherV13"
                        },
                        NMap: {
                            keyVec: "Vec<Type>",
                            hashers: "Vec<StorageHasherV13>",
                            value: "Type"
                        }
                    }
                },
                StorageMetadataV13: {
                    prefix: "Text",
                    items: "Vec<StorageEntryMetadataV13>"
                },
                StorageHasherV13: "StorageHasherV12"
            }
        },
        11312: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v14 = void 0;
            var n = a(5458),
                o = a(7882);
            const r = {
                PortableTypeV14: {
                    id: "Si1LookupTypeId",
                    type: "Si1Type"
                },
                ErrorMetadataV14: (0, n.objectSpread)({}, o.Si1Variant, {
                    args: "Vec<Type>"
                }),
                EventMetadataV14: (0, n.objectSpread)({}, o.Si1Variant, {
                    args: "Vec<Type>"
                }),
                FunctionArgumentMetadataV14: {
                    name: "Text",
                    type: "Type",
                    typeName: "Option<Type>"
                },
                FunctionMetadataV14: (0, n.objectSpread)({}, o.Si1Variant, {
                    args: "Vec<FunctionArgumentMetadataV14>"
                }),
                ExtrinsicMetadataV14: {
                    type: "SiLookupTypeId",
                    version: "u8",
                    signedExtensions: "Vec<SignedExtensionMetadataV14>"
                },
                MetadataV14: {
                    lookup: "PortableRegistry",
                    pallets: "Vec<PalletMetadataV14>",
                    extrinsic: "ExtrinsicMetadataV14",
                    type: "SiLookupTypeId"
                },
                PalletCallMetadataV14: {
                    type: "SiLookupTypeId"
                },
                PalletConstantMetadataV14: {
                    name: "Text",
                    type: "SiLookupTypeId",
                    value: "Bytes",
                    docs: "Vec<Text>"
                },
                PalletErrorMetadataV14: {
                    type: "SiLookupTypeId"
                },
                PalletEventMetadataV14: {
                    type: "SiLookupTypeId"
                },
                PalletMetadataV14: {
                    name: "Text",
                    storage: "Option<PalletStorageMetadataV14>",
                    calls: "Option<PalletCallMetadataV14>",
                    events: "Option<PalletEventMetadataV14>",
                    constants: "Vec<PalletConstantMetadataV14>",
                    errors: "Option<PalletErrorMetadataV14>",
                    index: "u8"
                },
                PalletStorageMetadataV14: {
                    prefix: "Text",
                    items: "Vec<StorageEntryMetadataV14>"
                },
                SignedExtensionMetadataV14: {
                    identifier: "Text",
                    type: "SiLookupTypeId",
                    additionalSigned: "SiLookupTypeId"
                },
                StorageEntryMetadataV14: {
                    name: "Text",
                    modifier: "StorageEntryModifierV14",
                    type: "StorageEntryTypeV14",
                    fallback: "Bytes",
                    docs: "Vec<Text>"
                },
                StorageEntryModifierV14: "StorageEntryModifierV13",
                StorageEntryTypeV14: {
                    _enum: {
                        Plain: "SiLookupTypeId",
                        Map: {
                            hashers: "Vec<StorageHasherV14>",
                            key: "SiLookupTypeId",
                            value: "SiLookupTypeId"
                        }
                    }
                },
                StorageHasherV14: "StorageHasherV13"
            };
            t.v14 = r
        },
        11313: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(5458),
                o = a(11314),
                r = a(7882),
                i = {
                    rpc: {},
                    types: (0, n.objectSpread)({}, o.v0, r.v1, {
                        SiField: "Si1Field",
                        SiLookupTypeId: "Si1LookupTypeId",
                        SiPath: "Si1Path",
                        SiType: "Si1Type",
                        SiTypeDef: "Si1TypeDef",
                        SiTypeDefArray: "Si1TypeDefArray",
                        SiTypeDefBitSequence: "Si1TypeDefBitSequence",
                        SiTypeDefCompact: "Si1TypeDefCompact",
                        SiTypeDefComposite: "Si1TypeDefComposite",
                        SiTypeDefPrimitive: "Si1TypeDefPrimitive",
                        SiTypeDefSequence: "Si1TypeDefSequence",
                        SiTypeDefTuple: "Si1TypeDefTuple",
                        SiTypeParameter: "Si1TypeParameter",
                        SiTypeDefVariant: "Si1TypeDefVariant",
                        SiVariant: "Si1Variant"
                    })
                };
            t.default = i
        },
        11314: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v0 = void 0;
            t.v0 = {
                Si0Field: {
                    name: "Option<Text>",
                    type: "Si0LookupTypeId",
                    typeName: "Option<Text>",
                    docs: "Vec<Text>"
                },
                Si0LookupTypeId: "u32",
                Si0Path: "Vec<Text>",
                Si0Type: {
                    path: "Si0Path",
                    params: "Vec<Si0LookupTypeId>",
                    def: "Si0TypeDef"
                },
                Si0TypeDef: {
                    _enum: {
                        Composite: "Si0TypeDefComposite",
                        Variant: "Si0TypeDefVariant",
                        Sequence: "Si0TypeDefSequence",
                        Array: "Si0TypeDefArray",
                        Tuple: "Si0TypeDefTuple",
                        Primitive: "Si0TypeDefPrimitive",
                        Compact: "Si0TypeDefCompact",
                        Phantom: "Si0TypeDefPhantom",
                        BitSequence: "Si0TypeDefBitSequence"
                    }
                },
                Si0TypeDefArray: {
                    len: "u32",
                    type: "Si0LookupTypeId"
                },
                Si0TypeDefBitSequence: {
                    bitStoreType: "Si0LookupTypeId",
                    bitOrderType: "Si0LookupTypeId"
                },
                Si0TypeDefCompact: {
                    type: "Si0LookupTypeId"
                },
                Si0TypeDefComposite: {
                    fields: "Vec<Si0Field>"
                },
                Si0TypeDefPhantom: "Null",
                Si0TypeDefVariant: {
                    variants: "Vec<Si0Variant>"
                },
                Si0TypeDefPrimitive: {
                    _enum: ["Bool", "Char", "Str", "U8", "U16", "U32", "U64", "U128", "U256", "I8", "I16", "I32", "I64", "I128", "I256"]
                },
                Si0TypeDefSequence: {
                    type: "Si0LookupTypeId"
                },
                Si0TypeDefTuple: "Vec<Si0LookupTypeId>",
                Si0TypeParameter: {
                    name: "Text",
                    type: "Option<Si0LookupTypeId>"
                },
                Si0Variant: {
                    name: "Text",
                    fields: "Vec<Si0Field>",
                    index: "Option<u8>",
                    discriminant: "Option<u64>",
                    docs: "Vec<Text>"
                }
            }
        },
        11315: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    AssetApprovalKey: {
                        owner: "AccountId",
                        delegate: "AccountId"
                    },
                    AssetApproval: {
                        amount: "TAssetBalance",
                        deposit: "TAssetDepositBalance"
                    },
                    AssetBalance: {
                        balance: "TAssetBalance",
                        isFrozen: "bool",
                        isSufficient: "bool"
                    },
                    AssetDestroyWitness: {
                        accounts: "Compact<u32>",
                        sufficients: "Compact<u32>",
                        approvals: "Compact<u32>"
                    },
                    AssetDetails: {
                        owner: "AccountId",
                        issuer: "AccountId",
                        admin: "AccountId",
                        freezer: "AccountId",
                        supply: "TAssetBalance",
                        deposit: "TAssetDepositBalance",
                        minBalance: "TAssetBalance",
                        isSufficient: "bool",
                        accounts: "u32",
                        sufficients: "u32",
                        approvals: "u32",
                        isFrozen: "bool"
                    },
                    AssetMetadata: {
                        deposit: "TAssetDepositBalance",
                        name: "Vec<u8>",
                        symbol: "Vec<u8>",
                        decimals: "u8",
                        isFrozen: "bool"
                    },
                    TAssetBalance: "u64",
                    TAssetDepositBalance: "BalanceOf"
                }
            }
        },
        11316: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    UncleEntryItem: {
                        _enum: {
                            InclusionHeight: "BlockNumber",
                            Uncle: "(Hash, Option<AccountId>)"
                        }
                    }
                }
            }
        },
        11317: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    RawAuraPreDigest: {
                        slotNumber: "u64"
                    }
                }
            }
        },
        11318: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    epochAuthorship: {
                        description: "Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore",
                        params: [],
                        type: "HashMap<AuthorityId, EpochAuthorship>"
                    }
                },
                types: {
                    AllowedSlots: {
                        _enum: ["PrimarySlots", "PrimaryAndSecondaryPlainSlots", "PrimaryAndSecondaryVRFSlots"]
                    },
                    BabeAuthorityWeight: "u64",
                    BabeEpochConfiguration: {
                        c: "(u64, u64)",
                        allowedSlots: "AllowedSlots"
                    },
                    BabeBlockWeight: "u32",
                    BabeEquivocationProof: {
                        offender: "AuthorityId",
                        slotNumber: "SlotNumber",
                        firstHeader: "Header",
                        secondHeader: "Header"
                    },
                    BabeWeight: "u64",
                    MaybeRandomness: "Option<Randomness>",
                    MaybeVrf: "Option<VrfData>",
                    EpochAuthorship: {
                        primary: "Vec<u64>",
                        secondary: "Vec<u64>",
                        secondary_vrf: "Vec<u64>"
                    },
                    NextConfigDescriptor: {
                        _enum: {
                            V0: "Null",
                            V1: "NextConfigDescriptorV1"
                        }
                    },
                    NextConfigDescriptorV1: {
                        c: "(u64, u64)",
                        allowedSlots: "AllowedSlots"
                    },
                    Randomness: "Hash",
                    RawBabePreDigest: {
                        _enum: {
                            Phantom: "Null",
                            Primary: "RawBabePreDigestPrimary",
                            SecondaryPlain: "RawBabePreDigestSecondaryPlain",
                            SecondaryVRF: "RawBabePreDigestSecondaryVRF"
                        }
                    },
                    RawBabePreDigestPrimary: {
                        authorityIndex: "u32",
                        slotNumber: "SlotNumber",
                        vrfOutput: "VrfOutput",
                        vrfProof: "VrfProof"
                    },
                    RawBabePreDigestSecondaryPlain: {
                        authorityIndex: "u32",
                        slotNumber: "SlotNumber"
                    },
                    RawBabePreDigestSecondaryVRF: {
                        authorityIndex: "u32",
                        slotNumber: "SlotNumber",
                        vrfOutput: "VrfOutput",
                        vrfProof: "VrfProof"
                    },
                    RawBabePreDigestTo159: {
                        _enum: {
                            Primary: "RawBabePreDigestPrimaryTo159",
                            Secondary: "RawBabePreDigestSecondaryTo159"
                        }
                    },
                    RawBabePreDigestPrimaryTo159: {
                        authorityIndex: "u32",
                        slotNumber: "SlotNumber",
                        weight: "BabeBlockWeight",
                        vrfOutput: "VrfOutput",
                        vrfProof: "VrfProof"
                    },
                    RawBabePreDigestSecondaryTo159: {
                        authorityIndex: "u32",
                        slotNumber: "SlotNumber",
                        weight: "BabeBlockWeight"
                    },
                    RawBabePreDigestCompat: {
                        _enum: {
                            Zero: "u32",
                            One: "u32",
                            Two: "u32",
                            Three: "u32"
                        }
                    },
                    SlotNumber: "u64",
                    VrfData: "[u8; 32]",
                    VrfOutput: "[u8; 32]",
                    VrfProof: "[u8; 64]"
                }
            }
        },
        11319: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    AccountData: {
                        free: "Balance",
                        reserved: "Balance",
                        miscFrozen: "Balance",
                        feeFrozen: "Balance"
                    },
                    BalanceLockTo212: {
                        id: "LockIdentifier",
                        amount: "Balance",
                        until: "BlockNumber",
                        reasons: "WithdrawReasons"
                    },
                    BalanceLock: {
                        id: "LockIdentifier",
                        amount: "Balance",
                        reasons: "Reasons"
                    },
                    BalanceStatus: {
                        _enum: ["Free", "Reserved"]
                    },
                    Reasons: {
                        _enum: ["Fee", "Misc", "All"]
                    },
                    ReserveData: {
                        id: "ReserveIdentifier",
                        amount: "Balance"
                    },
                    ReserveIdentifier: "[u8; 8]",
                    VestingSchedule: {
                        offset: "Balance",
                        perBlock: "Balance",
                        startingBlock: "BlockNumber"
                    },
                    WithdrawReasons: {
                        _set: {
                            TransactionPayment: 1,
                            Transfer: 2,
                            Reserve: 4,
                            Fee: 8,
                            Tip: 16
                        }
                    }
                }
            }
        },
        11320: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    subscribeJustifications: {
                        description: "Returns the block most recently finalized by BEEFY, alongside side its justification.",
                        params: [],
                        pubsub: ["justifications", "subscribeJustifications", "unsubscribeJustifications"],
                        type: "BeefySignedCommitment"
                    },
                    getFinalizedHead: {
                        description: "Returns hash of the latest BEEFY finalized block as seen by this client.",
                        params: [],
                        type: "H256"
                    }
                },
                types: {
                    BeefyCommitment: {
                        payload: "BeefyPayload",
                        blockNumber: "BlockNumber",
                        validatorSetId: "ValidatorSetId"
                    },
                    BeefyId: "[u8; 33]",
                    BeefySignedCommitment: {
                        commitment: "BeefyCommitment",
                        signatures: "Vec<Option<EcdsaSignature>>"
                    },
                    BeefyNextAuthoritySet: {
                        id: "u64",
                        len: "u32",
                        root: "H256"
                    },
                    BeefyPayload: "MmrRootHash",
                    MmrRootHash: "H256",
                    ValidatorSetId: "u64"
                }
            }
        },
        11321: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    CollectiveOrigin: {
                        _enum: {
                            Members: "(MemberCount, MemberCount)",
                            Member: "AccountId"
                        }
                    },
                    MemberCount: "u32",
                    ProposalIndex: "u32",
                    VotesTo230: {
                        index: "ProposalIndex",
                        threshold: "MemberCount",
                        ayes: "Vec<AccountId>",
                        nays: "Vec<AccountId>"
                    },
                    Votes: {
                        index: "ProposalIndex",
                        threshold: "MemberCount",
                        ayes: "Vec<AccountId>",
                        nays: "Vec<AccountId>",
                        end: "BlockNumber"
                    }
                }
            }
        },
        11322: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    AuthorityId: "AccountId",
                    RawVRFOutput: "[u8; 32]"
                }
            }
        },
        11323: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = {
                rpc: n(a(11324)).default,
                types: {
                    AliveContractInfo: {
                        trieId: "TrieId",
                        storageSize: "u32",
                        pairCount: "u32",
                        codeHash: "CodeHash",
                        rentAllowance: "Balance",
                        rentPaid: "Balance",
                        deductBlock: "BlockNumber",
                        lastWrite: "Option<BlockNumber>",
                        _reserved: "Option<Null>"
                    },
                    CodeHash: "Hash",
                    CodeSource: {
                        _enum: {
                            Upload: "Bytes",
                            Existing: "Hash"
                        }
                    },
                    CodeUploadRequest: {
                        origin: "AccountId",
                        code: "Bytes",
                        storageDepositLimit: "Option<Balance>"
                    },
                    CodeUploadResult: {
                        _enum: {
                            Ok: "CodeUploadResultValue",
                            Err: "Null"
                        }
                    },
                    CodeUploadResultValue: {
                        codeHash: "CodeHash",
                        deposit: "Balance"
                    },
                    ContractCallRequest: {
                        origin: "AccountId",
                        dest: "AccountId",
                        value: "Balance",
                        gasLimit: "u64",
                        storageDepositLimit: "Option<Balance>",
                        inputData: "Bytes"
                    },
                    ContractExecResultSuccessTo255: {
                        status: "u8",
                        data: "Raw"
                    },
                    ContractExecResultTo255: {
                        _enum: {
                            Success: "ContractExecResultSuccessTo255",
                            Error: "Null"
                        }
                    },
                    ContractExecResultSuccessTo260: {
                        flags: "ContractReturnFlags",
                        data: "Bytes",
                        gasConsumed: "u64"
                    },
                    ContractExecResultTo260: {
                        _enum: {
                            Success: "ContractExecResultSuccessTo260",
                            Error: "Null"
                        }
                    },
                    ContractExecResultErrModule: {
                        index: "u8",
                        error: "u8",
                        message: "Option<Text>"
                    },
                    ContractExecResultErr: {
                        _enum: {
                            Other: "Text",
                            CannotLookup: "Null",
                            BadOrigin: "Null",
                            Module: "ContractExecResultErrModule"
                        }
                    },
                    ContractExecResultOk: {
                        flags: "ContractReturnFlags",
                        data: "Bytes"
                    },
                    ContractExecResultResult: {
                        _enum: {
                            Ok: "ContractExecResultOk",
                            Err: "ContractExecResultErr"
                        }
                    },
                    ContractExecResultTo267: {
                        gasConsumed: "u64",
                        debugMessage: "Text",
                        result: "ContractExecResultResult"
                    },
                    ContractExecResult: {
                        gasConsumed: "u64",
                        gasRequired: "u64",
                        storageDeposit: "StorageDeposit",
                        debugMessage: "Text",
                        result: "ContractExecResultResult"
                    },
                    ContractInfo: {
                        _enum: {
                            Alive: "AliveContractInfo",
                            Tombstone: "TombstoneContractInfo"
                        }
                    },
                    ContractCallFlags: {
                        _set: {
                            _bitLength: 32,
                            ForwardInput: 1,
                            CloneInput: 2,
                            TailCall: 4,
                            AllowReentry: 8
                        }
                    },
                    ContractReturnFlags: {
                        _set: {
                            _bitLength: 32,
                            Revert: 1
                        }
                    },
                    ContractStorageKey: "[u8; 32]",
                    DeletedContract: {
                        pairCount: "u32",
                        trieId: "TrieId"
                    },
                    ExecReturnValue: {
                        flags: "ContractReturnFlags",
                        data: "Bytes"
                    },
                    Gas: "u64",
                    HostFnWeightsTo264: {
                        caller: "Weight",
                        address: "Weight",
                        gasLeft: "Weight",
                        balance: "Weight",
                        valueTransferred: "Weight",
                        minimumBalance: "Weight",
                        tombstoneDeposit: "Weight",
                        rentAllowance: "Weight",
                        blockNumber: "Weight",
                        now: "Weight",
                        weightToFee: "Weight",
                        gas: "Weight",
                        input: "Weight",
                        inputPerByte: "Weight",
                        return: "Weight",
                        returnPerByte: "Weight",
                        terminate: "Weight",
                        restoreTo: "Weight",
                        restoreToPerDelta: "Weight",
                        random: "Weight",
                        depositEvent: "Weight",
                        depositEventPerTopic: "Weight",
                        depositEventPerByte: "Weight",
                        setRentAllowance: "Weight",
                        setStorage: "Weight",
                        setStoragePerByte: "Weight",
                        clearStorage: "Weight",
                        getStorage: "Weight",
                        getStoragePerByte: "Weight",
                        transfer: "Weight",
                        call: "Weight",
                        callTransferSurcharge: "Weight",
                        callPerInputByte: "Weight",
                        callPerOutputByte: "Weight",
                        instantiate: "Weight",
                        instantiatePerInputByte: "Weight",
                        instantiatePerOutputByte: "Weight",
                        hashSha2256: "Weight",
                        hashSha2256PerByte: "Weight",
                        hashKeccak256: "Weight",
                        hashKeccak256PerByte: "Weight",
                        hashBlake2256: "Weight",
                        hashBlake2256PerByte: "Weight",
                        hashBlake2128: "Weight",
                        hashBlake2128PerByte: "Weight"
                    },
                    HostFnWeights: {
                        caller: "Weight",
                        address: "Weight",
                        gasLeft: "Weight",
                        balance: "Weight",
                        valueTransferred: "Weight",
                        minimumBalance: "Weight",
                        tombstoneDeposit: "Weight",
                        rentAllowance: "Weight",
                        blockNumber: "Weight",
                        now: "Weight",
                        weightToFee: "Weight",
                        gas: "Weight",
                        input: "Weight",
                        inputPerByte: "Weight",
                        return: "Weight",
                        returnPerByte: "Weight",
                        terminate: "Weight",
                        terminatePerCodeByte: "Weight",
                        restoreTo: "Weight",
                        restoreToPerCallerCodeByte: "Weight",
                        restoreToPerTombstoneCodeByte: "Weight",
                        restoreToPerDelta: "Weight",
                        random: "Weight",
                        depositEvent: "Weight",
                        depositEventPerTopic: "Weight",
                        depositEventPerByte: "Weight",
                        setRentAllowance: "Weight",
                        setStorage: "Weight",
                        setStoragePerByte: "Weight",
                        clearStorage: "Weight",
                        getStorage: "Weight",
                        getStoragePerByte: "Weight",
                        transfer: "Weight",
                        call: "Weight",
                        callPerCodeByte: "Weight",
                        callTransferSurcharge: "Weight",
                        callPerInputByte: "Weight",
                        callPerOutputByte: "Weight",
                        instantiate: "Weight",
                        instantiatePerCodeByte: "Weight",
                        instantiatePerInputByte: "Weight",
                        instantiatePerOutputByte: "Weight",
                        instantiatePerSaltByte: "Weight",
                        hashSha2256: "Weight",
                        hashSha2256PerByte: "Weight",
                        hashKeccak256: "Weight",
                        hashKeccak256PerByte: "Weight",
                        hashBlake2256: "Weight",
                        hashBlake2256PerByte: "Weight",
                        hashBlake2128: "Weight",
                        hashBlake2128PerByte: "Weight",
                        rentParams: "Weight"
                    },
                    InstantiateRequestV1: {
                        origin: "AccountId",
                        value: "Balance",
                        gasLimit: "Gas",
                        code: "Bytes",
                        data: "Bytes",
                        salt: "Bytes"
                    },
                    InstantiateRequestV2: {
                        _fallback: "InstantiateRequestV1",
                        origin: "AccountId",
                        value: "Balance",
                        gasLimit: "Gas",
                        storageDepositLimit: "Option<Balance>",
                        code: "Bytes",
                        data: "Bytes",
                        salt: "Bytes"
                    },
                    InstantiateRequest: {
                        _fallback: "InstantiateRequestV2",
                        origin: "AccountId",
                        value: "Balance",
                        gasLimit: "Gas",
                        storageDepositLimit: "Option<Balance>",
                        code: "CodeSource",
                        data: "Bytes",
                        salt: "Bytes"
                    },
                    ContractInstantiateResultTo267: {
                        _enum: {
                            Ok: "InstantiateReturnValueTo267",
                            Err: "Null"
                        }
                    },
                    ContractInstantiateResultTo299: {
                        _enum: {
                            Ok: "InstantiateReturnValue",
                            Err: "Null"
                        },
                        _fallback: "ContractInstantiateResultTo267"
                    },
                    ContractInstantiateResult: {
                        _fallback: "ContractInstantiateResultTo299",
                        gasConsumed: "u64",
                        gasRequired: "u64",
                        storageDeposit: "StorageDeposit",
                        debugMessage: "Text",
                        result: "InstantiateReturnValue"
                    },
                    InstantiateReturnValueTo267: {
                        result: "ExecReturnValue",
                        accountId: "AccountId",
                        rentProjection: "Option<RentProjection>"
                    },
                    InstantiateReturnValueOk: {
                        result: "ExecReturnValue",
                        accountId: "AccountId"
                    },
                    InstantiateReturnValue: {
                        _enum: {
                            Ok: "InstantiateReturnValueOk",
                            Err: "DispatchError"
                        }
                    },
                    InstructionWeights: {
                        i64const: "u32",
                        i64load: "u32",
                        i64store: "u32",
                        select: "u32",
                        rIf: "u32",
                        br: "u32",
                        brIf: "u32",
                        brIable: "u32",
                        brIablePerEntry: "u32",
                        call: "u32",
                        callIndirect: "u32",
                        callIndirectPerParam: "u32",
                        localGet: "u32",
                        localSet: "u32",
                        local_tee: "u32",
                        globalGet: "u32",
                        globalSet: "u32",
                        memoryCurrent: "u32",
                        memoryGrow: "u32",
                        i64clz: "u32",
                        i64ctz: "u32",
                        i64popcnt: "u32",
                        i64eqz: "u32",
                        i64extendsi32: "u32",
                        i64extendui32: "u32",
                        i32wrapi64: "u32",
                        i64eq: "u32",
                        i64ne: "u32",
                        i64lts: "u32",
                        i64ltu: "u32",
                        i64gts: "u32",
                        i64gtu: "u32",
                        i64les: "u32",
                        i64leu: "u32",
                        i64ges: "u32",
                        i64geu: "u32",
                        i64add: "u32",
                        i64sub: "u32",
                        i64mul: "u32",
                        i64divs: "u32",
                        i64divu: "u32",
                        i64rems: "u32",
                        i64remu: "u32",
                        i64and: "u32",
                        i64or: "u32",
                        i64xor: "u32",
                        i64shl: "u32",
                        i64shrs: "u32",
                        i64shru: "u32",
                        i64rotl: "u32",
                        i64rotr: "u32"
                    },
                    LimitsTo264: {
                        eventTopics: "u32",
                        stackHeight: "u32",
                        globals: "u32",
                        parameters: "u32",
                        memoryPages: "u32",
                        tableSize: "u32",
                        brTableSize: "u32",
                        subjectLen: "u32",
                        codeSize: "u32"
                    },
                    Limits: {
                        eventTopics: "u32",
                        stackHeight: "u32",
                        globals: "u32",
                        parameters: "u32",
                        memoryPages: "u32",
                        tableSize: "u32",
                        brTableSize: "u32",
                        subjectLen: "u32"
                    },
                    PrefabWasmModule: {
                        scheduleVersion: "Compact<u32>",
                        initial: "Compact<u32>",
                        maximum: "Compact<u32>",
                        refcount: "Compact<u64>",
                        _reserved: "Option<Null>",
                        code: "Bytes",
                        originalCodeLen: "u32"
                    },
                    RentProjection: {
                        _enum: {
                            EvictionAt: "BlockNumber",
                            NoEviction: "Null"
                        }
                    },
                    ScheduleTo212: {
                        version: "u32",
                        putCodePerByteCost: "Gas",
                        growMemCost: "Gas",
                        regularOpCost: "Gas",
                        returnDataPerByteCost: "Gas",
                        eventDataPerByteCost: "Gas",
                        eventPerTopicCost: "Gas",
                        eventBaseCost: "Gas",
                        sandboxDataReadCost: "Gas",
                        sandboxDataWriteCost: "Gas",
                        maxEventTopics: "u32",
                        maxStackHeight: "u32",
                        maxMemoryPages: "u32",
                        enablePrintln: "bool",
                        maxSubjectLen: "u32"
                    },
                    ScheduleTo258: {
                        version: "u32",
                        putCodePerByteCost: "Gas",
                        growMemCost: "Gas",
                        regularOpCost: "Gas",
                        returnDataPerByteCost: "Gas",
                        eventDataPerByteCost: "Gas",
                        eventPerTopicCost: "Gas",
                        eventBaseCost: "Gas",
                        sandboxDataReadCost: "Gas",
                        sandboxDataWriteCost: "Gas",
                        transferCost: "Gas",
                        maxEventTopics: "u32",
                        maxStackHeight: "u32",
                        maxMemoryPages: "u32",
                        enablePrintln: "bool",
                        maxSubjectLen: "u32"
                    },
                    ScheduleTo264: {
                        version: "u32",
                        enablePrintln: "bool",
                        limits: "LimitsTo264",
                        instructionWeights: "InstructionWeights",
                        hostFnWeights: "HostFnWeightsTo264"
                    },
                    Schedule: {
                        version: "u32",
                        enablePrintln: "bool",
                        limits: "Limits",
                        instructionWeights: "InstructionWeights",
                        hostFnWeights: "HostFnWeights"
                    },
                    SeedOf: "Hash",
                    StorageDeposit: {
                        _enum: {
                            Refund: "Balance",
                            Charge: "Balance"
                        }
                    },
                    TombstoneContractInfo: "Hash",
                    TrieId: "Bytes"
                }
            };
            t.default = o
        },
        11324: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                call: {
                    description: "Executes a call to a contract",
                    params: [{
                        name: "callRequest",
                        type: "ContractCallRequest"
                    }, {
                        name: "at",
                        type: "BlockHash",
                        isHistoric: !0,
                        isOptional: !0
                    }],
                    type: "ContractExecResult"
                },
                instantiate: {
                    description: "Instantiate a new contract",
                    params: [{
                        name: "request",
                        type: "InstantiateRequest"
                    }, {
                        name: "at",
                        type: "BlockHash",
                        isHstoric: !0,
                        isOptional: !0
                    }],
                    type: "ContractInstantiateResult"
                },
                uploadCode: {
                    endpoint: "contracts_upload_code",
                    description: "Upload new code without instantiating a contract from it",
                    params: [{
                        name: "uploadRequest",
                        type: "CodeUploadRequest"
                    }, {
                        name: "at",
                        type: "BlockHash",
                        isHstoric: !0,
                        isOptional: !0
                    }],
                    type: "CodeUploadResult"
                },
                getStorage: {
                    description: "Returns the value under a specified storage key in a contract",
                    params: [{
                        name: "address",
                        type: "AccountId"
                    }, {
                        name: "key",
                        type: "H256"
                    }, {
                        name: "at",
                        type: "BlockHash",
                        isHistoric: !0,
                        isOptional: !0
                    }],
                    type: "Option<Bytes>"
                },
                rentProjection: {
                    description: "Returns the projected time a given contract will be able to sustain paying its rent",
                    params: [{
                        name: "address",
                        type: "AccountId"
                    }, {
                        name: "at",
                        type: "BlockHash",
                        isHistoric: !0,
                        isOptional: !0
                    }],
                    type: "Option<BlockNumber>"
                }
            }
        },
        11325: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.AllConvictions = void 0;
            const n = ["None", "Locked1x", "Locked2x", "Locked3x", "Locked4x", "Locked5x", "Locked6x"];
            t.AllConvictions = n;
            var o = {
                rpc: {},
                types: {
                    AccountVote: {
                        _enum: {
                            Standard: "AccountVoteStandard",
                            Split: "AccountVoteSplit"
                        }
                    },
                    AccountVoteSplit: {
                        aye: "Balance",
                        nay: "Balance"
                    },
                    AccountVoteStandard: {
                        vote: "Vote",
                        balance: "Balance"
                    },
                    Conviction: {
                        _enum: n
                    },
                    Delegations: {
                        votes: "Balance",
                        capital: "Balance"
                    },
                    PreimageStatus: {
                        _enum: {
                            Missing: "BlockNumber",
                            Available: "PreimageStatusAvailable"
                        }
                    },
                    PreimageStatusAvailable: {
                        data: "Bytes",
                        provider: "AccountId",
                        deposit: "Balance",
                        since: "BlockNumber",
                        expiry: "Option<BlockNumber>"
                    },
                    PriorLock: "(BlockNumber, Balance)",
                    PropIndex: "u32",
                    Proposal: "Call",
                    ProxyState: {
                        _enum: {
                            Open: "AccountId",
                            Active: "AccountId"
                        }
                    },
                    ReferendumIndex: "u32",
                    ReferendumInfoTo239: {
                        end: "BlockNumber",
                        proposalHash: "Hash",
                        threshold: "VoteThreshold",
                        delay: "BlockNumber"
                    },
                    ReferendumInfo: {
                        _enum: {
                            Ongoing: "ReferendumStatus",
                            Finished: "ReferendumInfoFinished"
                        }
                    },
                    ReferendumInfoFinished: {
                        approved: "bool",
                        end: "BlockNumber"
                    },
                    ReferendumStatus: {
                        end: "BlockNumber",
                        proposalHash: "Hash",
                        threshold: "VoteThreshold",
                        delay: "BlockNumber",
                        tally: "Tally"
                    },
                    Tally: {
                        ayes: "Balance",
                        nays: "Balance",
                        turnout: "Balance"
                    },
                    Voting: {
                        _enum: {
                            Direct: "VotingDirect",
                            Delegating: "VotingDelegating"
                        }
                    },
                    VotingDirect: {
                        votes: "Vec<VotingDirectVote>",
                        delegations: "Delegations",
                        prior: "PriorLock"
                    },
                    VotingDirectVote: "(ReferendumIndex, AccountVote)",
                    VotingDelegating: {
                        balance: "Balance",
                        target: "AccountId",
                        conviction: "Conviction",
                        delegations: "Delegations",
                        prior: "PriorLock"
                    }
                }
            };
            t.default = o
        },
        11326: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    getBlockStats: {
                        description: "Reexecute the specified `block_hash` and gather statistics while doing so",
                        params: [{
                            name: "at",
                            type: "Hash",
                            isHistoric: !0
                        }],
                        type: "Option<BlockStats>"
                    }
                },
                types: {
                    BlockStats: {
                        witnessLen: "u64",
                        witnessCompactLen: "u64",
                        blockLen: "u64",
                        blockNumExtrinsics: "u64"
                    }
                }
            }
        },
        11327: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    ApprovalFlag: "u32",
                    DefunctVoter: {
                        who: "AccountId",
                        voteCount: "Compact<u32>",
                        candidateCount: "Compact<u32>"
                    },
                    Renouncing: {
                        _enum: {
                            Member: "Null",
                            RunnerUp: "Null",
                            Candidate: "Compact<u32>"
                        }
                    },
                    SetIndex: "u32",
                    Vote: "GenericVote",
                    VoteIndex: "u32",
                    VoterInfo: {
                        lastActive: "VoteIndex",
                        lastWin: "VoteIndex",
                        pot: "Balance",
                        stake: "Balance"
                    },
                    VoteThreshold: {
                        _enum: ["Super Majority Approve", "Super Majority Against", "Simple Majority"]
                    }
                }
            }
        },
        11328: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    createBlock: {
                        description: "Instructs the manual-seal authorship task to create a new block",
                        params: [{
                            name: "createEmpty",
                            type: "bool"
                        }, {
                            name: "finalize",
                            type: "bool"
                        }, {
                            name: "parentHash",
                            type: "BlockHash",
                            isOptional: !0
                        }],
                        type: "CreatedBlock"
                    },
                    finalizeBlock: {
                        description: "Instructs the manual-seal authorship task to finalize a block",
                        params: [{
                            name: "hash",
                            type: "BlockHash"
                        }, {
                            name: "justification",
                            type: "Justification",
                            isOptional: !0
                        }],
                        type: "bool"
                    }
                },
                types: {
                    CreatedBlock: {
                        hash: "BlockHash",
                        aux: "ImportedAux"
                    },
                    ImportedAux: {
                        headerOnly: "bool",
                        clearJustificationRequests: "bool",
                        needsJustification: "bool",
                        badJustification: "bool",
                        needsFinalityProof: "bool",
                        isNewBest: "bool"
                    }
                }
            }
        },
        11329: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    EvmAccount: {
                        nonce: "u256",
                        balance: "u256"
                    },
                    EvmLog: {
                        address: "H160",
                        topics: "Vec<H256>",
                        data: "Bytes"
                    },
                    EvmVicinity: {
                        gasPrice: "u256",
                        origin: "H160"
                    },
                    ExitError: {
                        _enum: {
                            StackUnderflow: "Null",
                            StackOverflow: "Null",
                            InvalidJump: "Null",
                            InvalidRange: "Null",
                            DesignatedInvalid: "Null",
                            CallTooDeep: "Null",
                            CreateCollision: "Null",
                            CreateContractLimit: "Null",
                            OutOfOffset: "Null",
                            OutOfGas: "Null",
                            OutOfFund: "Null",
                            PCUnderflow: "Null",
                            CreateEmpty: "Null",
                            Other: "Text"
                        }
                    },
                    ExitFatal: {
                        _enum: {
                            NotSupported: "Null",
                            UnhandledInterrupt: "Null",
                            CallErrorAsFatal: "ExitError",
                            Other: "Text"
                        }
                    },
                    ExitReason: {
                        _enum: {
                            Succeed: "ExitSucceed",
                            Error: "ExitError",
                            Revert: "ExitRevert",
                            Fatal: "ExitFatal"
                        }
                    },
                    ExitRevert: {
                        _enum: ["Reverted"]
                    },
                    ExitSucceed: {
                        _enum: ["Stopped", "Returned", "Suicided"]
                    }
                }
            }
        },
        11330: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    Extrinsic: "GenericExtrinsic",
                    ExtrinsicEra: "GenericExtrinsicEra",
                    ExtrinsicPayload: "GenericExtrinsicPayload",
                    ExtrinsicSignature: "MultiSignature",
                    ExtrinsicV4: "GenericExtrinsicV4",
                    ExtrinsicPayloadV4: "GenericExtrinsicPayloadV4",
                    ExtrinsicSignatureV4: "GenericExtrinsicSignatureV4",
                    ExtrinsicUnknown: "GenericExtrinsicUnknown",
                    ExtrinsicPayloadUnknown: "GenericExtrinsicPayloadUnknown",
                    Era: "ExtrinsicEra",
                    ImmortalEra: "GenericImmortalEra",
                    MortalEra: "GenericMortalEra",
                    AnySignature: "H512",
                    MultiSignature: {
                        _enum: {
                            Ed25519: "Ed25519Signature",
                            Sr25519: "Sr25519Signature",
                            Ecdsa: "EcdsaSignature"
                        }
                    },
                    Signature: "H512",
                    SignerPayload: "GenericSignerPayload",
                    EcdsaSignature: "[u8; 65]",
                    Ed25519Signature: "H512",
                    Sr25519Signature: "H512"
                }
            }
        },
        11331: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    AssetOptions: {
                        initalIssuance: "Compact<Balance>",
                        permissions: "PermissionLatest"
                    },
                    Owner: {
                        _enum: {
                            None: "Null",
                            Address: "AccountId"
                        }
                    },
                    PermissionsV1: {
                        update: "Owner",
                        mint: "Owner",
                        burn: "Owner"
                    },
                    PermissionVersions: {
                        _enum: {
                            V1: "PermissionsV1"
                        }
                    },
                    PermissionLatest: "PermissionsV1"
                }
            }
        },
        11332: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    ActiveGilt: {
                        proportion: "Perquintill",
                        amount: "Balance",
                        who: "AccountId",
                        expiry: "BlockNumber"
                    },
                    ActiveGiltsTotal: {
                        frozen: "Balance",
                        proportion: "Perquintill",
                        index: "ActiveIndex",
                        target: "Perquintill"
                    },
                    ActiveIndex: "u32",
                    GiltBid: {
                        amount: "Balance",
                        who: "AccountId"
                    }
                }
            }
        },
        11333: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    proveFinality: {
                        description: "Prove finality for the given block number, returning the Justification for the last block in the set.",
                        params: [{
                            name: "blockNumber",
                            type: "BlockNumber"
                        }],
                        type: "Option<EncodedFinalityProofs>"
                    },
                    roundState: {
                        description: "Returns the state of the current best round state as well as the ongoing background rounds",
                        params: [],
                        type: "ReportedRoundStates"
                    },
                    subscribeJustifications: {
                        description: "Subscribes to grandpa justifications",
                        params: [],
                        pubsub: ["justifications", "subscribeJustifications", "unsubscribeJustifications"],
                        type: "JustificationNotification"
                    }
                },
                types: {
                    AuthorityIndex: "u64",
                    AuthorityList: "Vec<NextAuthority>",
                    AuthoritySet: {
                        currentAuthorities: "AuthorityList",
                        setId: "u64",
                        pendingStandardChanges: "ForkTreePendingChange",
                        pendingForcedChanges: "Vec<PendingChange>",
                        authoritySetChanges: "AuthoritySetChanges"
                    },
                    ForkTreePendingChange: {
                        roots: "Vec<ForkTreePendingChangeNode>",
                        bestFinalizedNumber: "Option<BlockNumber>"
                    },
                    ForkTreePendingChangeNode: {
                        hash: "BlockHash",
                        number: "BlockNumber",
                        data: "PendingChange",
                        children: "Vec<ForkTreePendingChangeNode>"
                    },
                    AuthoritySetChange: "(U64, BlockNumber)",
                    AuthoritySetChanges: "Vec<AuthoritySetChange>",
                    AuthorityWeight: "u64",
                    DelayKind: {
                        _enum: {
                            Finalized: "Null",
                            Best: "DelayKindBest"
                        }
                    },
                    DelayKindBest: {
                        medianLastFinalized: "BlockNumber"
                    },
                    EncodedFinalityProofs: "Bytes",
                    GrandpaEquivocation: {
                        _enum: {
                            Prevote: "GrandpaEquivocationValue",
                            Precommit: "GrandpaEquivocationValue"
                        }
                    },
                    GrandpaEquivocationProof: {
                        setId: "SetId",
                        equivocation: "GrandpaEquivocation"
                    },
                    GrandpaEquivocationValue: {
                        roundNumber: "u64",
                        identity: "AuthorityId",
                        first: "(GrandpaPrevote, AuthoritySignature)",
                        second: "(GrandpaPrevote, AuthoritySignature)"
                    },
                    GrandpaPrevote: {
                        targetHash: "Hash",
                        targetNumber: "BlockNumber"
                    },
                    GrandpaCommit: {
                        targetHash: "BlockHash",
                        targetNumber: "BlockNumber",
                        precommits: "Vec<GrandpaSignedPrecommit>"
                    },
                    GrandpaPrecommit: {
                        targetHash: "BlockHash",
                        targetNumber: "BlockNumber"
                    },
                    GrandpaSignedPrecommit: {
                        precommit: "GrandpaPrecommit",
                        signature: "AuthoritySignature",
                        id: "AuthorityId"
                    },
                    GrandpaJustification: {
                        round: "u64",
                        commit: "GrandpaCommit",
                        votesAncestries: "Vec<Header>"
                    },
                    JustificationNotification: "Bytes",
                    KeyOwnerProof: "MembershipProof",
                    NextAuthority: "(AuthorityId, AuthorityWeight)",
                    PendingChange: {
                        nextAuthorities: "AuthorityList",
                        delay: "BlockNumber",
                        canonHeight: "BlockNumber",
                        canonHash: "BlockHash",
                        delayKind: "DelayKind"
                    },
                    PendingPause: {
                        scheduledAt: "BlockNumber",
                        delay: "BlockNumber"
                    },
                    PendingResume: {
                        scheduledAt: "BlockNumber",
                        delay: "BlockNumber"
                    },
                    Precommits: {
                        currentWeight: "u32",
                        missing: "BTreeSet<AuthorityId>"
                    },
                    Prevotes: {
                        currentWeight: "u32",
                        missing: "BTreeSet<AuthorityId>"
                    },
                    ReportedRoundStates: {
                        setId: "u32",
                        best: "RoundState",
                        background: "Vec<RoundState>"
                    },
                    RoundState: {
                        round: "u32",
                        totalWeight: "u32",
                        thresholdWeight: "u32",
                        prevotes: "Prevotes",
                        precommits: "Precommits"
                    },
                    SetId: "u64",
                    StoredPendingChange: {
                        scheduledAt: "BlockNumber",
                        delay: "BlockNumber",
                        nextAuthorities: "AuthorityList"
                    },
                    StoredState: {
                        _enum: {
                            Live: "Null",
                            PendingPause: "PendingPause",
                            Paused: "Null",
                            PendingResume: "PendingResume"
                        }
                    }
                }
            }
        },
        11334: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    IdentityFields: {
                        _set: {
                            _bitLength: 64,
                            Display: 1,
                            Legal: 2,
                            Web: 4,
                            Riot: 8,
                            Email: 16,
                            PgpFingerprint: 32,
                            Image: 64,
                            Twitter: 128
                        }
                    },
                    IdentityInfoAdditional: "(Data, Data)",
                    IdentityInfoTo198: {
                        additional: "Vec<IdentityInfoAdditional>",
                        display: "Data",
                        legal: "Data",
                        web: "Data",
                        riot: "Data",
                        email: "Data",
                        pgpFingerprint: "Option<H160>",
                        image: "Data"
                    },
                    IdentityInfo: {
                        _fallback: "IdentityInfoTo198",
                        additional: "Vec<IdentityInfoAdditional>",
                        display: "Data",
                        legal: "Data",
                        web: "Data",
                        riot: "Data",
                        email: "Data",
                        pgpFingerprint: "Option<H160>",
                        image: "Data",
                        twitter: "Data"
                    },
                    IdentityJudgement: {
                        _enum: {
                            Unknown: "Null",
                            FeePaid: "Balance",
                            Reasonable: "Null",
                            KnownGood: "Null",
                            OutOfDate: "Null",
                            LowQuality: "Null",
                            Erroneous: "Null"
                        }
                    },
                    RegistrationJudgement: "(RegistrarIndex, IdentityJudgement)",
                    RegistrationTo198: {
                        judgements: "Vec<RegistrationJudgement>",
                        deposit: "Balance",
                        info: "IdentityInfoTo198"
                    },
                    Registration: {
                        _fallback: "RegistrationTo198",
                        judgements: "Vec<RegistrationJudgement>",
                        deposit: "Balance",
                        info: "IdentityInfo"
                    },
                    RegistrarIndex: "u32",
                    RegistrarInfo: {
                        account: "AccountId",
                        fee: "Balance",
                        fields: "IdentityFields"
                    }
                }
            }
        },
        11335: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    AuthIndex: "u32",
                    AuthoritySignature: "Signature",
                    Heartbeat: {
                        blockNumber: "BlockNumber",
                        networkState: "OpaqueNetworkState",
                        sessionIndex: "SessionIndex",
                        authorityIndex: "AuthIndex",
                        validatorsLen: "u32"
                    },
                    HeartbeatTo244: {
                        blockNumber: "BlockNumber",
                        networkState: "OpaqueNetworkState",
                        sessionIndex: "SessionIndex",
                        authorityIndex: "AuthIndex"
                    },
                    OpaqueMultiaddr: "Bytes",
                    OpaquePeerId: "Bytes",
                    OpaqueNetworkState: {
                        peerId: "OpaquePeerId",
                        externalAddresses: "Vec<OpaqueMultiaddr>"
                    }
                }
            }
        },
        11336: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    CallIndex: "(u8, u8)",
                    LotteryConfig: {
                        price: "Balance",
                        start: "BlockNumber",
                        length: "BlockNumber",
                        delay: "BlockNumber",
                        repeat: "bool"
                    }
                }
            }
        },
        11337: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    generateProof: {
                        description: "Generate MMR proof for given leaf index.",
                        params: [{
                            name: "leafIndex",
                            type: "u64"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "MmrLeafProof"
                    }
                },
                types: {
                    MmrLeafProof: {
                        blockHash: "BlockHash",
                        leaf: "Bytes",
                        proof: "Bytes"
                    }
                }
            }
        },
        11338: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    DeferredOffenceOf: "(Vec<OffenceDetails>, Vec<Perbill>, SessionIndex)",
                    Kind: "[u8; 16]",
                    OffenceDetails: {
                        offender: "Offender",
                        reporters: "Vec<Reporter>"
                    },
                    Offender: "IdentificationTuple",
                    OpaqueTimeSlot: "Bytes",
                    ReportIdOf: "Hash",
                    Reporter: "AccountId"
                }
            }
        },
        11339: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    ProxyDefinition: {
                        delegate: "AccountId",
                        proxyType: "ProxyType",
                        delay: "BlockNumber"
                    },
                    ProxyType: {
                        _enum: ["Any", "NonTransfer", "Governance", "Staking"]
                    },
                    ProxyAnnouncement: {
                        real: "AccountId",
                        callHash: "Hash",
                        height: "BlockNumber"
                    }
                }
            }
        },
        11340: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    ActiveRecovery: {
                        created: "BlockNumber",
                        deposit: "Balance",
                        friends: "Vec<AccountId>"
                    },
                    RecoveryConfig: {
                        delayPeriod: "BlockNumber",
                        deposit: "Balance",
                        friends: "Vec<AccountId>",
                        threshold: "u16"
                    }
                }
            }
        },
        11341: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    Period: "(BlockNumber, u32)",
                    Priority: "u8",
                    SchedulePeriod: "Period",
                    SchedulePriority: "Priority",
                    Scheduled: {
                        maybeId: "Option<Bytes>",
                        priority: "SchedulePriority",
                        call: "Call",
                        maybePeriodic: "Option<SchedulePeriod>",
                        origin: "PalletsOrigin"
                    },
                    ScheduledTo254: {
                        maybeId: "Option<Bytes>",
                        priority: "SchedulePriority",
                        call: "Call",
                        maybePeriodic: "Option<SchedulePeriod>"
                    },
                    TaskAddress: "(BlockNumber, u32)"
                }
            }
        },
        11342: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                rpc: {},
                types: (0, a(5458).objectSpread)({}, {
                    BeefyKey: "[u8; 33]",
                    Keys: "SessionKeys4",
                    SessionKeys1: "(AccountId)",
                    SessionKeys2: "(AccountId, AccountId)",
                    SessionKeys3: "(AccountId, AccountId, AccountId)",
                    SessionKeys4: "(AccountId, AccountId, AccountId, AccountId)",
                    SessionKeys5: "(AccountId, AccountId, AccountId, AccountId, AccountId)",
                    SessionKeys6: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
                    SessionKeys6B: "(AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
                    SessionKeys7: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
                    SessionKeys7B: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
                    SessionKeys8: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
                    SessionKeys8B: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
                    SessionKeys9: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
                    SessionKeys9B: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
                    SessionKeys10: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
                    SessionKeys10B: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)"
                }, {
                    FullIdentification: "Exposure",
                    IdentificationTuple: "(ValidatorId, FullIdentification)",
                    MembershipProof: {
                        session: "SessionIndex",
                        trieNodes: "Vec<Vec<u8>>",
                        validatorCount: "ValidatorCount"
                    },
                    SessionIndex: "u32",
                    ValidatorCount: "u32"
                })
            };
            t.default = n
        },
        11343: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    Bid: {
                        who: "AccountId",
                        kind: "BidKind",
                        value: "Balance"
                    },
                    BidKind: {
                        _enum: {
                            Deposit: "Balance",
                            Vouch: "(AccountId, Balance)"
                        }
                    },
                    SocietyJudgement: {
                        _enum: ["Rebid", "Reject", "Approve"]
                    },
                    SocietyVote: {
                        _enum: ["Skeptic", "Reject", "Approve"]
                    },
                    StrikeCount: "u32",
                    VouchingStatus: {
                        _enum: ["Vouching", "Banned"]
                    }
                }
            }
        },
        11344: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                rpc: {},
                types: (0, a(5458).objectSpread)({}, {
                    Points: "u32",
                    EraPoints: {
                        total: "Points",
                        individual: "Vec<Points>"
                    }
                }, {
                    CompactAssignments: "CompactAssignmentsWith16",
                    CompactAssignmentsWith16: {
                        votes1: "Vec<(NominatorIndexCompact, ValidatorIndexCompact)>",
                        votes2: "Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>",
                        votes3: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>",
                        votes4: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>",
                        votes5: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>",
                        votes6: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>",
                        votes7: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>",
                        votes8: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>",
                        votes9: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>",
                        votes10: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>",
                        votes11: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>",
                        votes12: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>",
                        votes13: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>",
                        votes14: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>",
                        votes15: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>",
                        votes16: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>"
                    },
                    CompactAssignmentsWith24: {
                        votes1: "Vec<(NominatorIndexCompact, ValidatorIndexCompact)>",
                        votes2: "Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>",
                        votes3: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>",
                        votes4: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>",
                        votes5: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>",
                        votes6: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>",
                        votes7: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>",
                        votes8: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>",
                        votes9: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>",
                        votes10: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>",
                        votes11: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>",
                        votes12: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>",
                        votes13: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>",
                        votes14: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>",
                        votes15: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>",
                        votes16: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>",
                        votes17: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 16], ValidatorIndexCompact)>",
                        votes18: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 17], ValidatorIndexCompact)>",
                        votes19: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 18], ValidatorIndexCompact)>",
                        votes20: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 19], ValidatorIndexCompact)>",
                        votes21: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 20], ValidatorIndexCompact)>",
                        votes22: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 21], ValidatorIndexCompact)>",
                        votes23: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 22], ValidatorIndexCompact)>",
                        votes24: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 23], ValidatorIndexCompact)>"
                    },
                    CompactAssignmentsTo265: "CompactAssignmentsWith16",
                    CompactAssignmentsTo257: {
                        votes1: "Vec<(NominatorIndex, [CompactScore; 0], ValidatorIndex)>",
                        votes2: "Vec<(NominatorIndex, [CompactScore; 1], ValidatorIndex)>",
                        votes3: "Vec<(NominatorIndex, [CompactScore; 2], ValidatorIndex)>",
                        votes4: "Vec<(NominatorIndex, [CompactScore; 3], ValidatorIndex)>",
                        votes5: "Vec<(NominatorIndex, [CompactScore; 4], ValidatorIndex)>",
                        votes6: "Vec<(NominatorIndex, [CompactScore; 5], ValidatorIndex)>",
                        votes7: "Vec<(NominatorIndex, [CompactScore; 6], ValidatorIndex)>",
                        votes8: "Vec<(NominatorIndex, [CompactScore; 7], ValidatorIndex)>",
                        votes9: "Vec<(NominatorIndex, [CompactScore; 8], ValidatorIndex)>",
                        votes10: "Vec<(NominatorIndex, [CompactScore; 9], ValidatorIndex)>",
                        votes11: "Vec<(NominatorIndex, [CompactScore; 10], ValidatorIndex)>",
                        votes12: "Vec<(NominatorIndex, [CompactScore; 11], ValidatorIndex)>",
                        votes13: "Vec<(NominatorIndex, [CompactScore; 12], ValidatorIndex)>",
                        votes14: "Vec<(NominatorIndex, [CompactScore; 13], ValidatorIndex)>",
                        votes15: "Vec<(NominatorIndex, [CompactScore; 14], ValidatorIndex)>",
                        votes16: "Vec<(NominatorIndex, [CompactScore; 15], ValidatorIndex)>"
                    },
                    CompactScore: "(ValidatorIndex, OffchainAccuracy)",
                    CompactScoreCompact: "(ValidatorIndexCompact, OffchainAccuracyCompact)",
                    ElectionCompute: {
                        _enum: ["OnChain", "Signed", "Unsigned"]
                    },
                    ElectionPhase: {
                        _enum: {
                            Off: null,
                            Signed: null,
                            Unsigned: "(bool, BlockNumber)",
                            Emergency: null
                        }
                    },
                    ElectionResult: {
                        compute: "ElectionCompute",
                        slotStake: "Balance",
                        electedStashes: "Vec<AccountId>",
                        exposures: "Vec<(AccountId, Exposure)>"
                    },
                    ElectionScore: "[u128; 3]",
                    ElectionSize: {
                        validators: "Compact<ValidatorIndex>",
                        nominators: "Compact<NominatorIndex>"
                    },
                    ElectionStatus: {
                        _enum: {
                            Close: "Null",
                            Open: "BlockNumber"
                        }
                    },
                    ExtendedBalance: "u128",
                    RawSolution: "RawSolutionWith16",
                    RawSolutionWith16: {
                        compact: "CompactAssignmentsWith16",
                        score: "ElectionScore",
                        round: "u32"
                    },
                    RawSolutionWith24: {
                        compact: "CompactAssignmentsWith24",
                        score: "ElectionScore",
                        round: "u32"
                    },
                    RawSolutionTo265: "RawSolutionWith16",
                    ReadySolution: {
                        supports: "SolutionSupports",
                        score: "ElectionScore",
                        compute: "ElectionCompute"
                    },
                    RoundSnapshot: {
                        voters: "Vec<(AccountId, VoteWeight, Vec<AccountId>)>",
                        targets: "Vec<AccountId>"
                    },
                    SeatHolder: {
                        who: "AccountId",
                        stake: "Balance",
                        deposit: "Balance"
                    },
                    SignedSubmission: {
                        _fallback: "SignedSubmissionTo276",
                        who: "AccountId",
                        deposit: "Balance",
                        solution: "RawSolution",
                        reward: "Balance"
                    },
                    SignedSubmissionTo276: {
                        who: "AccountId",
                        deposit: "Balance",
                        solution: "RawSolution"
                    },
                    SignedSubmissionOf: "SignedSubmission",
                    SolutionOrSnapshotSize: {
                        voters: "Compact<u32>",
                        targets: "Compact<u32>"
                    },
                    SolutionSupport: {
                        total: "ExtendedBalance",
                        voters: "Vec<(AccountId, ExtendedBalance)>"
                    },
                    SolutionSupports: "Vec<(AccountId, SolutionSupport)>",
                    Supports: "SolutionSupports",
                    SubmissionIndicesOf: "BTreeMap<ElectionScore, u32>",
                    Voter: {
                        votes: "Vec<AccountId>",
                        stake: "Balance",
                        deposit: "Balance"
                    },
                    VoteWeight: "u64"
                }, {
                    ActiveEraInfo: {
                        index: "EraIndex",
                        start: "Option<Moment>"
                    },
                    EraIndex: "u32",
                    EraRewardPoints: {
                        total: "RewardPoint",
                        individual: "BTreeMap<AccountId, RewardPoint>"
                    },
                    EraRewards: {
                        total: "u32",
                        rewards: "Vec<u32>"
                    },
                    Exposure: {
                        total: "Compact<Balance>",
                        own: "Compact<Balance>",
                        others: "Vec<IndividualExposure>"
                    },
                    Forcing: {
                        _enum: ["NotForcing", "ForceNew", "ForceNone", "ForceAlways"]
                    },
                    IndividualExposure: {
                        who: "AccountId",
                        value: "Compact<Balance>"
                    },
                    KeyType: "AccountId",
                    MomentOf: "Moment",
                    Nominations: {
                        targets: "Vec<AccountId>",
                        submittedIn: "EraIndex",
                        suppressed: "bool"
                    },
                    NominatorIndex: "u32",
                    NominatorIndexCompact: "Compact<NominatorIndex>",
                    OffchainAccuracy: "PerU16",
                    OffchainAccuracyCompact: "Compact<OffchainAccuracy>",
                    PhragmenScore: "[u128; 3]",
                    Points: "u32",
                    RewardDestination: {
                        _enum: {
                            Staked: "Null",
                            Stash: "Null",
                            Controller: "Null",
                            Account: "AccountId",
                            None: "Null"
                        }
                    },
                    RewardPoint: "u32",
                    SlashJournalEntry: {
                        who: "AccountId",
                        amount: "Balance",
                        ownSlash: "Balance"
                    },
                    SlashingSpansTo204: {
                        spanIndex: "SpanIndex",
                        lastStart: "EraIndex",
                        prior: "Vec<EraIndex>"
                    },
                    SlashingSpans: {
                        spanIndex: "SpanIndex",
                        lastStart: "EraIndex",
                        lastNonzeroSlash: "EraIndex",
                        prior: "Vec<EraIndex>"
                    },
                    SpanIndex: "u32",
                    SpanRecord: {
                        slashed: "Balance",
                        paidOut: "Balance"
                    },
                    StakingLedgerTo223: {
                        stash: "AccountId",
                        total: "Compact<Balance>",
                        active: "Compact<Balance>",
                        unlocking: "Vec<UnlockChunk>"
                    },
                    StakingLedgerTo240: {
                        stash: "AccountId",
                        total: "Compact<Balance>",
                        active: "Compact<Balance>",
                        unlocking: "Vec<UnlockChunk>",
                        lastReward: "Option<EraIndex>"
                    },
                    StakingLedger: {
                        stash: "AccountId",
                        total: "Compact<Balance>",
                        active: "Compact<Balance>",
                        unlocking: "Vec<UnlockChunk>",
                        claimedRewards: "Vec<EraIndex>"
                    },
                    UnappliedSlashOther: "(AccountId, Balance)",
                    UnappliedSlash: {
                        validator: "AccountId",
                        own: "Balance",
                        others: "Vec<UnappliedSlashOther>",
                        reporters: "Vec<AccountId>",
                        payout: "Balance"
                    },
                    UnlockChunk: {
                        value: "Compact<Balance>",
                        era: "Compact<BlockNumber>"
                    },
                    ValidatorIndex: "u16",
                    ValidatorIndexCompact: "Compact<ValidatorIndex>",
                    ValidatorPrefs: "ValidatorPrefsWithBlocked",
                    ValidatorPrefsWithCommission: {
                        commission: "Compact<Perbill>"
                    },
                    ValidatorPrefsWithBlocked: {
                        commission: "Compact<Perbill>",
                        blocked: "bool"
                    },
                    ValidatorPrefsTo196: {
                        validatorPayment: "Compact<Balance>"
                    },
                    ValidatorPrefsTo145: {
                        unstakeThreshold: "Compact<u32>",
                        validatorPayment: "Compact<Balance>"
                    }
                })
            };
            t.default = n
        },
        11345: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    WeightToFeeCoefficient: {
                        coeffInteger: "Balance",
                        coeffFrac: "Perbill",
                        negative: "bool",
                        degree: "u8"
                    }
                }
            }
        },
        11346: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    genSyncSpec: {
                        endpoint: "sync_state_genSyncSpec",
                        description: "Returns the json-serialized chainspec running the node, with a sync state.",
                        params: [{
                            name: "raw",
                            type: "bool"
                        }],
                        type: "Json"
                    }
                },
                types: {}
            }
        },
        11347: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    accountNextIndex: {
                        alias: ["account_nextIndex"],
                        description: "Retrieves the next accountIndex as available on the node",
                        params: [{
                            name: "accountId",
                            type: "AccountId"
                        }],
                        type: "Index"
                    },
                    dryRun: {
                        alias: ["system_dryRunAt"],
                        description: "Dry run an extrinsic at a given block",
                        params: [{
                            name: "extrinsic",
                            type: "Bytes"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "ApplyExtrinsicResult"
                    },
                    name: {
                        description: "Retrieves the node name",
                        params: [],
                        type: "Text"
                    },
                    version: {
                        description: "Retrieves the version of the node",
                        params: [],
                        type: "Text"
                    },
                    chain: {
                        description: "Retrieves the chain",
                        params: [],
                        type: "Text"
                    },
                    chainType: {
                        description: "Retrieves the chain type",
                        params: [],
                        type: "ChainType"
                    },
                    properties: {
                        description: "Get a custom set of properties as a JSON object, defined in the chain spec",
                        params: [],
                        type: "ChainProperties"
                    },
                    health: {
                        description: "Return health status of the node",
                        params: [],
                        type: "Health"
                    },
                    localPeerId: {
                        description: "Returns the base58-encoded PeerId of the node",
                        params: [],
                        type: "Text"
                    },
                    localListenAddresses: {
                        description: "The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example",
                        params: [],
                        type: "Vec<Text>"
                    },
                    peers: {
                        description: "Returns the currently connected peers",
                        params: [],
                        type: "Vec<PeerInfo>"
                    },
                    networkState: {
                        alias: ["system_unstable_networkState"],
                        description: "Returns current state of the network",
                        params: [],
                        type: "NetworkState"
                    },
                    addReservedPeer: {
                        description: "Adds a reserved peer",
                        params: [{
                            name: "peer",
                            type: "Text"
                        }],
                        type: "Text"
                    },
                    removeReservedPeer: {
                        description: "Remove a reserved peer",
                        params: [{
                            name: "peerId",
                            type: "Text"
                        }],
                        type: "Text"
                    },
                    reservedPeers: {
                        description: "Returns the list of reserved peers",
                        params: [],
                        type: "Vec<Text>"
                    },
                    nodeRoles: {
                        description: "Returns the roles the node is running as",
                        params: [],
                        type: "Vec<NodeRole>"
                    },
                    syncState: {
                        description: "Returns the state of the syncing of the node",
                        params: [],
                        type: "SyncState"
                    },
                    addLogFilter: {
                        description: "Adds the supplied directives to the current log filter",
                        params: [{
                            name: "directives",
                            type: "Text"
                        }],
                        type: "Null"
                    },
                    resetLogFilter: {
                        description: "Resets the log filter to Substrate defaults",
                        params: [],
                        type: "Null"
                    }
                },
                types: {
                    AccountInfo: "AccountInfoWithTripleRefCount",
                    AccountInfoWithRefCountU8: {
                        nonce: "Index",
                        refcount: "u8",
                        data: "AccountData"
                    },
                    AccountInfoWithRefCount: {
                        _fallback: "AccountInfoWithRefCountU8",
                        nonce: "Index",
                        refcount: "RefCount",
                        data: "AccountData"
                    },
                    AccountInfoWithDualRefCount: {
                        _fallback: "AccountInfoWithRefCount",
                        nonce: "Index",
                        consumers: "RefCount",
                        providers: "RefCount",
                        data: "AccountData"
                    },
                    AccountInfoWithProviders: "AccountInfoWithDualRefCount",
                    AccountInfoWithTripleRefCount: {
                        _fallback: "AccountInfoWithDualRefCount",
                        nonce: "Index",
                        consumers: "RefCount",
                        providers: "RefCount",
                        sufficients: "RefCount",
                        data: "AccountData"
                    },
                    ApplyExtrinsicResult: "Result<DispatchOutcome, TransactionValidityError>",
                    ArithmeticError: {
                        _enum: ["Underflow", "Overflow", "DivisionByZero"]
                    },
                    BlockLength: {
                        max: "PerDispatchClassU32"
                    },
                    BlockWeights: {
                        baseBlock: "Weight",
                        maxBlock: "Weight",
                        perClass: "PerDispatchClassWeightsPerClass"
                    },
                    ChainProperties: "GenericChainProperties",
                    ChainType: {
                        _enum: {
                            Development: "Null",
                            Local: "Null",
                            Live: "Null",
                            Custom: "Text"
                        }
                    },
                    ConsumedWeight: "PerDispatchClassWeight",
                    DigestOf: "Digest",
                    DispatchClass: {
                        _enum: ["Normal", "Operational", "Mandatory"]
                    },
                    DispatchError: {
                        _enum: {
                            Other: "Null",
                            CannotLookup: "Null",
                            BadOrigin: "Null",
                            Module: "DispatchErrorModule",
                            ConsumerRemaining: "Null",
                            NoProviders: "Null",
                            Token: "TokenError",
                            Arithmetic: "ArithmeticError"
                        }
                    },
                    DispatchErrorModule: {
                        index: "u8",
                        error: "u8"
                    },
                    DispatchErrorModuleU8a: {
                        index: "u8",
                        error: "[u8; 4]"
                    },
                    DispatchErrorTo198: {
                        module: "Option<u8>",
                        error: "u8"
                    },
                    DispatchInfo: {
                        weight: "Weight",
                        class: "DispatchClass",
                        paysFee: "Pays"
                    },
                    DispatchInfoTo190: {
                        weight: "Weight",
                        class: "DispatchClass"
                    },
                    DispatchInfoTo244: {
                        weight: "Weight",
                        class: "DispatchClass",
                        paysFee: "bool"
                    },
                    DispatchOutcome: "Result<(), DispatchError>",
                    DispatchResult: "Result<(), DispatchError>",
                    DispatchResultOf: "DispatchResult",
                    DispatchResultTo198: "Result<(), Text>",
                    Event: "GenericEvent",
                    EventId: "[u8; 2]",
                    EventIndex: "u32",
                    EventRecord: {
                        phase: "Phase",
                        event: "Event",
                        topics: "Vec<Hash>"
                    },
                    Health: {
                        peers: "u64",
                        isSyncing: "bool",
                        shouldHavePeers: "bool"
                    },
                    InvalidTransaction: {
                        _enum: {
                            Call: "Null",
                            Payment: "Null",
                            Future: "Null",
                            Stale: "Null",
                            BadProof: "Null",
                            AncientBirthBlock: "Null",
                            ExhaustsResources: "Null",
                            Custom: "u8",
                            BadMandatory: "Null",
                            MandatoryDispatch: "Null"
                        }
                    },
                    Key: "Bytes",
                    LastRuntimeUpgradeInfo: {
                        specVersion: "Compact<u32>",
                        specName: "Text"
                    },
                    NetworkState: {
                        peerId: "Text",
                        listenedAddresses: "Vec<Text>",
                        externalAddresses: "Vec<Text>",
                        connectedPeers: "HashMap<Text, Peer>",
                        notConnectedPeers: "HashMap<Text, NotConnectedPeer>",
                        averageDownloadPerSec: "u64",
                        averageUploadPerSec: "u64",
                        peerset: "NetworkStatePeerset"
                    },
                    NetworkStatePeerset: {
                        messageQueue: "u64",
                        nodes: "HashMap<Text, NetworkStatePeersetInfo>"
                    },
                    NetworkStatePeersetInfo: {
                        connected: "bool",
                        reputation: "i32"
                    },
                    NodeRole: {
                        _enum: {
                            Full: "Null",
                            LightClient: "Null",
                            Authority: "Null",
                            UnknownRole: "u8"
                        }
                    },
                    NotConnectedPeer: {
                        knownAddresses: "Vec<Text>",
                        latestPingTime: "Option<PeerPing>",
                        versionString: "Option<Text>"
                    },
                    Peer: {
                        enabled: "bool",
                        endpoint: "PeerEndpoint",
                        knownAddresses: "Vec<Text>",
                        latestPingTime: "PeerPing",
                        open: "bool",
                        versionString: "Text"
                    },
                    PeerEndpoint: {
                        listening: "PeerEndpointAddr"
                    },
                    PeerEndpointAddr: {
                        _alias: {
                            localAddr: "local_addr",
                            sendBackAddr: "send_back_addr"
                        },
                        localAddr: "Text",
                        sendBackAddr: "Text"
                    },
                    PeerPing: {
                        nanos: "u64",
                        secs: "u64"
                    },
                    PeerInfo: {
                        peerId: "Text",
                        roles: "Text",
                        protocolVersion: "u32",
                        bestHash: "Hash",
                        bestNumber: "BlockNumber"
                    },
                    PerDispatchClassU32: {
                        normal: "u32",
                        operational: "u32",
                        mandatory: "u32"
                    },
                    PerDispatchClassWeight: {
                        normal: "Weight",
                        operational: "Weight",
                        mandatory: "Weight"
                    },
                    PerDispatchClassWeightsPerClass: {
                        normal: "WeightPerClass",
                        operational: "WeightPerClass",
                        mandatory: "WeightPerClass"
                    },
                    Phase: {
                        _enum: {
                            ApplyExtrinsic: "u32",
                            Finalization: "Null",
                            Initialization: "Null"
                        }
                    },
                    RawOrigin: {
                        _enum: {
                            Root: "Null",
                            Signed: "AccountId",
                            None: "Null"
                        }
                    },
                    RefCount: "u32",
                    RefCountTo259: "u8",
                    SyncState: {
                        startingBlock: "BlockNumber",
                        currentBlock: "BlockNumber",
                        highestBlock: "Option<BlockNumber>"
                    },
                    SystemOrigin: "RawOrigin",
                    TokenError: {
                        _enum: ["NoFunds", "WouldDie", "BelowMinimum", "CannotCreate", "UnknownAsset", "Frozen", "Underflow", "Overflow"]
                    },
                    TransactionValidityError: {
                        _enum: {
                            Invalid: "InvalidTransaction",
                            Unknown: "UnknownTransaction"
                        }
                    },
                    UnknownTransaction: {
                        _enum: {
                            CannotLookup: "Null",
                            NoUnsignedValidator: "Null",
                            Custom: "u8"
                        }
                    },
                    WeightPerClass: {
                        baseExtrinsic: "Weight",
                        maxExtrinsic: "Option<Weight>",
                        maxTotal: "Option<Weight>",
                        reserved: "Option<Weight>"
                    }
                }
            }
        },
        11348: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    Bounty: {
                        proposer: "AccountId",
                        value: "Balance",
                        fee: "Balance",
                        curatorDeposit: "Balance",
                        bond: "Balance",
                        status: "BountyStatus"
                    },
                    BountyIndex: "u32",
                    BountyStatus: {
                        _enum: {
                            Proposed: "Null",
                            Approved: "Null",
                            Funded: "Null",
                            CuratorProposed: "BountyStatusCuratorProposed",
                            Active: "BountyStatusActive",
                            PendingPayout: "BountyStatusPendingPayout"
                        }
                    },
                    BountyStatusActive: {
                        curator: "AccountId",
                        updateDue: "BlockNumber"
                    },
                    BountyStatusCuratorProposed: {
                        curator: "AccountId"
                    },
                    BountyStatusPendingPayout: {
                        curator: "AccountId",
                        beneficiary: "AccountId",
                        unlockAt: "BlockNumber"
                    },
                    OpenTip: {
                        reason: "Hash",
                        who: "AccountId",
                        finder: "AccountId",
                        deposit: "Balance",
                        closes: "Option<BlockNumber>",
                        tips: "Vec<OpenTipTip>",
                        findersFee: "bool"
                    },
                    OpenTipTo225: {
                        reason: "Hash",
                        who: "AccountId",
                        finder: "Option<OpenTipFinderTo225>",
                        closes: "Option<BlockNumber>",
                        tips: "Vec<OpenTipTip>"
                    },
                    OpenTipFinderTo225: "(AccountId, Balance)",
                    OpenTipTip: "(AccountId, Balance)",
                    TreasuryProposal: {
                        proposer: "AccountId",
                        value: "Balance",
                        beneficiary: "AccountId",
                        bond: "Balance"
                    }
                }
            }
        },
        11349: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    Multiplier: "Fixed128"
                }
            }
        },
        11350: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    ClassId: "u32",
                    InstanceId: "u32",
                    DepositBalance: "Balance",
                    DepositBalanceOf: "Balance",
                    ClassDetails: {
                        owner: "AccountId",
                        issuer: "AccountId",
                        admin: "AccountId",
                        freezer: "AccountId",
                        totalDeposit: "DepositBalance",
                        freeHolding: "bool",
                        instances: "u32",
                        instanceMetadatas: "u32",
                        attributes: "u32",
                        isFrozen: "bool"
                    },
                    DestroyWitness: {
                        instances: "Compact<u32>",
                        instanceMetadatas: "Compact<u32>",
                        attributes: "Compact<u32>"
                    },
                    InstanceDetails: {
                        owner: "AccountId",
                        approved: "Option<AccountId>",
                        isFrozen: "bool",
                        deposit: "DepositBalance"
                    },
                    ClassMetadata: {
                        deposit: "DepositBalance",
                        data: "Vec<u8>",
                        isFrozen: "bool"
                    },
                    InstanceMetadata: {
                        deposit: "DepositBalance",
                        data: "Vec<u8>",
                        isFrozen: "bool"
                    }
                }
            }
        },
        11351: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    Multisig: {
                        when: "Timepoint",
                        deposit: "Balance",
                        depositor: "AccountId",
                        approvals: "Vec<AccountId>"
                    },
                    Timepoint: {
                        height: "BlockNumber",
                        index: "u32"
                    }
                }
            }
        },
        11352: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    VestingInfo: {
                        locked: "Balance",
                        perBlock: "Balance",
                        startingBlock: "BlockNumber"
                    }
                }
            }
        },
        11353: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    BlockAttestations: {
                        receipt: "CandidateReceipt",
                        valid: "Vec<AccountId>",
                        invalid: "Vec<AccountId>"
                    },
                    IncludedBlocks: {
                        actualNumber: "BlockNumber",
                        session: "SessionIndex",
                        randomSeed: "H256",
                        activeParachains: "Vec<ParaId>",
                        paraBlocks: "Vec<Hash>"
                    },
                    MoreAttestations: {}
                }
            }
        },
        11354: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    BridgedBlockHash: "H256",
                    BridgedBlockNumber: "BlockNumber",
                    BridgedHeader: "Header",
                    BridgeMessageId: "(LaneId, MessageNonce)",
                    CallOrigin: {
                        _enum: {
                            SourceRoot: "Null",
                            TargetAccount: "(AccountId, MultiSigner, MultiSignature)",
                            SourceAccount: "AccountId"
                        }
                    },
                    ChainId: "[u8; 4]",
                    DeliveredMessages: {
                        begin: "MessageNonce",
                        end: "MessageNonce",
                        dispatchResults: "BitVec"
                    },
                    DispatchFeePayment: {
                        _enum: ["AtSourceChain", "AtTargetChain"]
                    },
                    InboundLaneData: {
                        relayers: "Vec<UnrewardedRelayer>",
                        lastConfirmedNonce: "MessageNonce"
                    },
                    InboundRelayer: "AccountId",
                    InitializationData: {
                        header: "Header",
                        authorityList: "AuthorityList",
                        setId: "SetId",
                        isHalted: "bool"
                    },
                    LaneId: "[u8; 4]",
                    MessageData: {
                        payload: "Bytes",
                        fee: "Balance"
                    },
                    MessagesDeliveryProofOf: {
                        bridgedHeaderHash: "BlockHash",
                        storageProof: "Vec<Bytes>",
                        lane: "LaneId"
                    },
                    MessageKey: {
                        laneId: "LaneId",
                        nonce: "MessageNonce"
                    },
                    MessageNonce: "u64",
                    MessagesProofOf: {
                        bridgedHeaderHash: "BridgedBlockHash",
                        storageProof: "Vec<Bytes>",
                        lane: "LaneId",
                        noncesStart: "MessageNonce",
                        noncesEnd: "MessageNonce"
                    },
                    OperatingMode: {
                        _enum: ["Normal", "RejectingOutboundMessages", "Halted"]
                    },
                    OutboundLaneData: {
                        oldestUnprunedNonce: "MessageNonce",
                        latestReceivedNonce: "MessageNonce",
                        latestGeneratedNonce: "MessageNonce"
                    },
                    OutboundMessageFee: "Balance",
                    OutboundPayload: {
                        specVersion: "u32",
                        weight: "Weight",
                        origin: "CallOrigin",
                        dispatchFeePayment: "DispatchFeePayment",
                        call: "Bytes"
                    },
                    Parameter: "Null",
                    RelayerId: "AccountId",
                    UnrewardedRelayer: {
                        relayer: "RelayerId",
                        messages: "DeliveredMessages"
                    },
                    UnrewardedRelayersState: {
                        unrewardedRelayer_Entries: "MessageNonce",
                        messagesInOldestEntry: "MessageNonce",
                        totalMessages: "MessageNonce"
                    }
                }
            }
        },
        11355: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    StatementKind: {
                        _enum: ["Regular", "Saft"]
                    }
                }
            }
        },
        11356: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    FundIndex: "u32",
                    LastContribution: {
                        _enum: {
                            Never: "Null",
                            PreEnding: "u32",
                            Ending: "BlockNumber"
                        }
                    },
                    FundInfo: {
                        depositor: "AccountId",
                        verifier: "Option<MultiSigner>",
                        deposit: "Balance",
                        raised: "Balance",
                        end: "BlockNumber",
                        cap: "Balance",
                        lastContribution: "LastContribution",
                        firstPeriod: "LeasePeriod",
                        lastPeriod: "LeasePeriod",
                        trieIndex: "TrieIndex"
                    },
                    TrieIndex: "u32"
                }
            }
        },
        11357: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                rpc: {},
                types: {
                    ConfigData: {
                        maxIndividual: "Weight"
                    },
                    MessageId: "[u8; 32]",
                    OverweightIndex: "u64",
                    PageCounter: "u32",
                    PageIndexData: {
                        beginUsed: "PageCounter",
                        endUsed: "PageCounter",
                        overweightCount: "OverweightIndex"
                    }
                }
            };
            t.default = n
        },
        11358: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(5458),
                r = n(a(11359)),
                i = n(a(11360));
            var s = {
                rpc: {},
                types: (0, o.objectSpread)({}, {
                    ServiceQuality: {
                        _enum: ["Ordered", "Fast"]
                    }
                }, {
                    DisputeLocation: {
                        _enum: ["Local", "Remote"]
                    },
                    DisputeResult: {
                        _enum: ["Valid", "Invalid"]
                    },
                    DisputeState: {
                        validatorsFor: "BitVec",
                        validatorsAgainst: "BitVec",
                        start: "BlockNumber",
                        concludedAt: "Option<BlockNumber>"
                    },
                    DisputeStatement: {
                        _enum: {
                            Valid: "ValidDisputeStatementKind",
                            Invalid: "InvalidDisputeStatementKind"
                        }
                    },
                    DisputeStatementSet: {
                        candidateHash: "CandidateHash",
                        session: "SessionIndex",
                        statements: "Vec<(DisputeStatement, ParaValidatorIndex, ValidatorSignature)>"
                    },
                    ExplicitDisputeStatement: {
                        valid: "bool",
                        candidateHash: "CandidateHash",
                        session: "SessionIndex"
                    },
                    InvalidDisputeStatementKind: {
                        _enum: ["Explicit"]
                    },
                    MultiDisputeStatementSet: "Vec<DisputeStatementSet>",
                    ValidDisputeStatementKind: {
                        _enum: {
                            Explicit: "Null",
                            BackingSeconded: "Hash",
                            BackingValid: "Hash",
                            ApprovalChecking: "Null"
                        }
                    }
                }, r.default, {
                    ParachainProposal: {
                        proposer: "AccountId",
                        genesisHead: "HeadData",
                        validators: "Vec<ValidatorId>",
                        name: "Bytes",
                        balance: "Balance"
                    },
                    RegisteredParachainInfo: {
                        validators: "Vec<ValidatorId>",
                        proposer: "AccountId"
                    }
                }, i.default, {
                    AbridgedCandidateReceipt: {
                        parachainIndex: "ParaId",
                        relayParent: "Hash",
                        headData: "HeadData",
                        collator: "CollatorId",
                        signature: "CollatorSignature",
                        povBlockHash: "Hash",
                        commitments: "CandidateCommitments"
                    },
                    AbridgedHostConfiguration: {
                        maxCodeSize: "u32",
                        maxHeadDataSize: "u32",
                        maxUpwardQueueCount: "u32",
                        maxUpwardQueueSize: "u32",
                        maxUpwardMessageSize: "u32",
                        maxUpwardMessageNumPerCandidate: "u32",
                        hrmpMaxMessageNumPerCandidate: "u32",
                        validationUpgradeFrequency: "BlockNumber",
                        validationUpgradeDelay: "BlockNumber"
                    },
                    AbridgedHrmpChannel: {
                        maxCapacity: "u32",
                        maxTotalSize: "u32",
                        maxMessageSize: "u32",
                        msgCount: "u32",
                        totalSize: "u32",
                        mqcHead: "Option<Hash>"
                    },
                    AssignmentId: "AccountId",
                    AssignmentKind: {
                        _enum: {
                            Parachain: "Null",
                            Parathread: "(CollatorId, u32)"
                        }
                    },
                    AttestedCandidate: {
                        candidate: "AbridgedCandidateReceipt",
                        validityVotes: "Vec<ValidityAttestation>",
                        validatorIndices: "BitVec"
                    },
                    AuthorityDiscoveryId: "AccountId",
                    AvailabilityBitfield: "BitVec",
                    AvailabilityBitfieldRecord: {
                        bitfield: "AvailabilityBitfield",
                        submittedTt: "BlockNumber"
                    },
                    BackedCandidate: {
                        candidate: "CommittedCandidateReceipt",
                        validityVotes: "Vec<ValidityAttestation>",
                        validatorIndices: "BitVec"
                    },
                    BufferedSessionChange: {
                        applyAt: "BlockNumber",
                        validators: "Vec<ValidatorId>",
                        queued: "Vec<ValidatorId>",
                        sessionIndex: "SessionIndex"
                    },
                    CandidateCommitments: {
                        upwardMessages: "Vec<UpwardMessage>",
                        horizontalMessages: "Vec<OutboundHrmpMessage>",
                        newValidationCode: "Option<ValidationCode>",
                        headData: "HeadData",
                        processedDownwardMessages: "u32",
                        hrmpWatermark: "BlockNumber"
                    },
                    CandidateDescriptor: {
                        paraId: "ParaId",
                        relayParent: "RelayChainHash",
                        collatorId: "CollatorId",
                        persistedValidationDataHash: "Hash",
                        povHash: "Hash",
                        erasureRoot: "Hash",
                        signature: "CollatorSignature",
                        paraHead: "Hash",
                        validationCodeHash: "ValidationCodeHash"
                    },
                    CandidateHash: "Hash",
                    CandidateInfo: {
                        who: "AccountId",
                        deposit: "Balance"
                    },
                    CandidatePendingAvailability: {
                        core: "CoreIndex",
                        hash: "CandidateHash",
                        descriptor: "CandidateDescriptor",
                        availabilityVotes: "BitVec",
                        backers: "BitVec",
                        relayParentNumber: "BlockNumber",
                        backedInNumber: "BlockNumber",
                        backingGroup: "GroupIndex"
                    },
                    CandidateReceipt: {
                        descriptor: "CandidateDescriptor",
                        commitmentsHash: "Hash"
                    },
                    GlobalValidationData: {
                        maxCodeSize: "u32",
                        maxHeadDataSize: "u32",
                        blockNumber: "BlockNumber"
                    },
                    CollatorId: "H256",
                    CollatorSignature: "Signature",
                    CommittedCandidateReceipt: {
                        descriptor: "CandidateDescriptor",
                        commitments: "CandidateCommitments"
                    },
                    CoreAssignment: {
                        core: "CoreIndex",
                        paraId: "ParaId",
                        kind: "AssignmentKind",
                        groupIdx: "GroupIndex"
                    },
                    CoreIndex: "u32",
                    CoreOccupied: {
                        _enum: {
                            Parathread: "ParathreadEntry",
                            Parachain: "Null"
                        }
                    },
                    DoubleVoteReport: {
                        identity: "ValidatorId",
                        first: "(Statement, ValidatorSignature)",
                        second: "(Statement, ValidatorSignature)",
                        proof: "MembershipProof",
                        signingContext: "SigningContext"
                    },
                    DownwardMessage: "Bytes",
                    GroupIndex: "u32",
                    GlobalValidationSchedule: {
                        maxCodeSize: "u32",
                        maxHeadDataSize: "u32",
                        blockNumber: "BlockNumber"
                    },
                    HeadData: "Bytes",
                    HostConfiguration: {
                        maxCodeSize: "u32",
                        maxHeadDataSize: "u32",
                        maxUpwardQueueCount: "u32",
                        maxUpwardQueueSize: "u32",
                        maxUpwardMessageSize: "u32",
                        maxUpwardMessageNumPerCandidate: "u32",
                        hrmpMaxMessageNumPerCandidate: "u32",
                        validationUpgradeFrequency: "BlockNumber",
                        validationUpgradeDelay: "BlockNumber",
                        maxPovSize: "u32",
                        maxDownwardMessageSize: "u32",
                        preferredDispatchableUpwardMessagesStepWeight: "Weight",
                        hrmpMaxParachainOutboundChannels: "u32",
                        hrmpMaxParathreadOutboundChannels: "u32",
                        hrmpOpenRequestTtl: "u32",
                        hrmpSenderDeposit: "Balance",
                        hrmpRecipientDeposit: "Balance",
                        hrmpChannelMaxCapacity: "u32",
                        hrmpChannelMaxTotalSize: "u32",
                        hrmpMaxParachainInboundChannels: "u32",
                        hrmpMaxParathreadInboundChannels: "u32",
                        hrmpChannelMaxMessageSize: "u32",
                        codeRetentionPeriod: "BlockNumber",
                        parathreadCores: "u32",
                        parathreadRetries: "u32",
                        groupRotationFrequency: "BlockNumber",
                        chainAvailabilityPeriod: "BlockNumber",
                        threadAvailabilityPeriod: "BlockNumber",
                        schedulingLookahead: "u32",
                        maxValidatorsPerCore: "Option<u32>",
                        maxValidators: "Option<u32>",
                        disputePeriod: "SessionIndex",
                        disputePostConclusionAcceptancePeriod: "BlockNumber",
                        disputeMaxSpamSlots: "u32",
                        disputeConclusionByTimeOutPeriod: "BlockNumber",
                        noShowSlots: "u32",
                        nDelayTranches: "u32",
                        zerothDelayTrancheWidth: "u32",
                        neededApprovals: "u32",
                        relayVrfModuloSamples: "u32"
                    },
                    InboundDownwardMessage: {
                        pubSentAt: "BlockNumber",
                        pubMsg: "DownwardMessage"
                    },
                    InboundHrmpMessage: {
                        sentAt: "BlockNumber",
                        data: "Bytes"
                    },
                    InboundHrmpMessages: "Vec<InboundHrmpMessage>",
                    LocalValidationData: {
                        parentHead: "HeadData",
                        balance: "Balance",
                        codeUpgradeAllowed: "Option<BlockNumber>"
                    },
                    MessageIngestionType: {
                        downwardMessages: "Vec<InboundDownwardMessage>",
                        horizontalMessages: "BTreeMap<ParaId, InboundHrmpMessages>"
                    },
                    MessageQueueChain: "RelayChainHash",
                    OutboundHrmpMessage: {
                        recipient: "u32",
                        data: "Bytes"
                    },
                    ParachainDispatchOrigin: {
                        _enum: ["Signed", "Parachain", "Root"]
                    },
                    ParachainInherentData: {
                        validationData: "PersistedValidationData",
                        relayChainState: "StorageProof",
                        downwardMessages: "Vec<InboundDownwardMessage>",
                        horizontalMessages: "BTreeMap<ParaId, VecInboundHrmpMessage>"
                    },
                    ParachainsInherentData: {
                        bitfields: "SignedAvailabilityBitfields",
                        backedCandidates: "Vec<BackedCandidate>",
                        disputes: "MultiDisputeStatementSet",
                        parentHeader: "Header"
                    },
                    ParaGenesisArgs: {
                        genesisHead: "Bytes",
                        validationCode: "Bytes",
                        parachain: "bool"
                    },
                    ParaId: "u32",
                    ParaInfo: {
                        manager: "AccountId",
                        deposit: "Balance",
                        locked: "bool"
                    },
                    ParaLifecycle: {
                        _enum: ["Onboarding", "Parathread", "Parachain", "UpgradingToParachain", "DowngradingToParathread", "OutgoingParathread", "OutgoingParachain"]
                    },
                    ParaPastCodeMeta: {
                        upgradeTimes: "Vec<ReplacementTimes>",
                        lastPruned: "Option<BlockNumber>"
                    },
                    ParaScheduling: {
                        _enum: ["Always", "Dynamic"]
                    },
                    ParathreadClaim: "(ParaId, CollatorId)",
                    ParathreadClaimQueue: {
                        queue: "Vec<QueuedParathread>",
                        nextCoreOffset: "u32"
                    },
                    ParathreadEntry: {
                        claim: "ParathreadClaim",
                        retries: "u32"
                    },
                    ParaValidatorIndex: "u32",
                    PersistedValidationData: {
                        parentHead: "HeadData",
                        relayParentNumber: "RelayChainBlockNumber",
                        relayParentStorageRoot: "Hash",
                        maxPovSize: "u32"
                    },
                    QueuedParathread: {
                        claim: "ParathreadEntry",
                        coreOffset: "u32"
                    },
                    RelayBlockNumber: "u32",
                    RelayChainBlockNumber: "RelayBlockNumber",
                    RelayHash: "Hash",
                    RelayChainHash: "RelayHash",
                    Remark: "[u8; 32]",
                    ReplacementTimes: {
                        expectedAt: "BlockNumber",
                        activatedAt: "BlockNumber"
                    },
                    Retriable: {
                        _enum: {
                            Never: "Null",
                            WithRetries: "u32"
                        }
                    },
                    Scheduling: {
                        _enum: ["Always", "Dynamic"]
                    },
                    SessionInfo: {
                        validators: "Vec<ValidatorId>",
                        discoveryKeys: "Vec<AuthorityDiscoveryId>",
                        assignmentKeys: "Vec<AssignmentId>",
                        validatorGroups: "Vec<SessionInfoValidatorGroup>",
                        nCores: "u32",
                        zerothDelayTrancheWidth: "u32",
                        relayVrfModuloSamples: "u32",
                        nDelayTranches: "u32",
                        noShowSlots: "u32",
                        neededApprovals: "u32"
                    },
                    SessionInfoValidatorGroup: "Vec<ParaValidatorIndex>",
                    SignedAvailabilityBitfield: {
                        payload: "BitVec",
                        validatorIndex: "ParaValidatorIndex",
                        signature: "ValidatorSignature"
                    },
                    SignedAvailabilityBitfields: "Vec<SignedAvailabilityBitfield>",
                    SigningContext: {
                        sessionIndex: "SessionIndex",
                        parentHash: "Hash"
                    },
                    Statement: {
                        _enum: {
                            Never: "Null",
                            Candidate: "Hash",
                            Valid: "Hash",
                            Invalid: "Hash"
                        }
                    },
                    TransientValidationData: {
                        maxCodeSize: "u32",
                        maxHeadDataSize: "u32",
                        balance: "Balance",
                        codeUpgradeAllowed: "Option<BlockNumber>",
                        dmqLength: "u32"
                    },
                    UpgradeGoAhead: {
                        _enum: ["Abort", "GoAhead"]
                    },
                    UpgradeRestriction: {
                        _enum: ["Present"]
                    },
                    UpwardMessage: "Bytes",
                    ValidationFunctionParams: {
                        maxCodeSize: "u32",
                        relayChainHeight: "RelayChainBlockNumber",
                        codeUpgradeAllowed: "Option<RelayChainBlockNumber>"
                    },
                    ValidationCode: "Bytes",
                    ValidationCodeHash: "Hash",
                    ValidationData: {
                        persisted: "PersistedValidationData",
                        transient: "TransientValidationData"
                    },
                    ValidationDataType: {
                        validationData: "ValidationData",
                        relayChainState: "Vec<Bytes>"
                    },
                    ValidatorSignature: "Signature",
                    ValidityAttestation: {
                        _enum: {
                            Never: "Null",
                            Implicit: "ValidatorSignature",
                            Explicit: "ValidatorSignature"
                        }
                    },
                    MessagingStateSnapshot: {
                        relayDispatchQueueSize: "(u32, u32)",
                        egressChannels: "Vec<MessagingStateSnapshotEgressEntry>"
                    },
                    MessagingStateSnapshotEgressEntry: "(ParaId, AbridgedHrmpChannel)",
                    SystemInherentData: "ParachainInherentData",
                    VecInboundHrmpMessage: "Vec<InboundHrmpMessage>"
                })
            };
            t.default = s
        },
        11359: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                HrmpChannel: {
                    maxCapacity: "u32",
                    maxTotalSize: "u32",
                    maxMessageSize: "u32",
                    msgCount: "u32",
                    totalSize: "u32",
                    mqcHead: "Option<Hash>",
                    senderDeposit: "Balance",
                    recipientDeposit: "Balance"
                },
                HrmpChannelId: {
                    sender: "u32",
                    receiver: "u32"
                },
                HrmpOpenChannelRequest: {
                    confirmed: "bool",
                    age: "SessionIndex",
                    senderDeposit: "Balance",
                    maxMessageSize: "u32",
                    maxCapacity: "u32",
                    maxTotalSize: "u32"
                }
            }
        },
        11360: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const n = {
                    _enum: ["ZeroZero", "ZeroOne", "ZeroTwo", "ZeroThree", "OneOne", "OneTwo", "OneThree", "TwoTwo", "TwoThree", "ThreeThree"]
                },
                o = {
                    _enum: ["ZeroZero", "ZeroOne", "ZeroTwo", "ZeroThree", "ZeroFour", "ZeroFive", "ZeroSix", "ZeroSeven", "OneOne", "OneTwo", "OneThree", "OneFour", "OneFive", "OneSix", "OneSeven", "TwoTwo", "TwoThree", "TwoFour", "TwoFive", "TwoSix", "TwoSeven", "ThreeThree", "ThreeFour", "ThreeFive", "ThreeSix", "ThreeSeven", "FourFour", "FourFive", "FourSix", "FourSeven", "FiveFive", "FiveSix", "FiveSeven", "SixSix", "SixSeven", "SevenSeven"]
                };
            var r = (0, a(5458).objectSpread)({}, {
                Bidder: {
                    _enum: {
                        New: "NewBidder",
                        Existing: "ParaId"
                    }
                },
                IncomingParachain: {
                    _enum: {
                        Unset: "NewBidder",
                        Fixed: "IncomingParachainFixed",
                        Deploy: "IncomingParachainDeploy"
                    }
                },
                IncomingParachainDeploy: {
                    code: "ValidationCode",
                    initialHeadData: "HeadData"
                },
                IncomingParachainFixed: {
                    codeHash: "Hash",
                    codeSize: "u32",
                    initialHeadData: "HeadData"
                },
                NewBidder: {
                    who: "AccountId",
                    sub: "SubId"
                },
                SubId: "u32"
            }, {
                AuctionIndex: "u32",
                LeasePeriod: "BlockNumber",
                LeasePeriodOf: "BlockNumber",
                SlotRange10: n,
                SlotRange: o,
                WinningData10: `[WinningDataEntry; ${n._enum.length}]`,
                WinningData: `[WinningDataEntry; ${o._enum.length}]`,
                WinningDataEntry: "Option<(AccountId, ParaId, BalanceOf)>",
                WinnersData10: "Vec<WinnersDataTuple10>",
                WinnersData: "Vec<WinnersDataTuple>",
                WinnersDataTuple10: "(AccountId, ParaId, BalanceOf, SlotRange10)",
                WinnersDataTuple: "(AccountId, ParaId, BalanceOf, SlotRange)"
            });
            t.default = r
        },
        11361: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    Approvals: "[bool; 4]"
                }
            }
        },
        11362: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {},
                types: {
                    AccountStatus: {
                        validity: "AccountValidity",
                        freeBalance: "Balance",
                        lockedBalance: "Balance",
                        signature: "Vec<u8>",
                        vat: "Permill"
                    },
                    AccountValidity: {
                        _enum: ["Invalid", "Initiated", "Pending", "ValidLow", "ValidHigh", "Completed"]
                    }
                }
            }
        },
        11363: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(5642),
                o = a(5458),
                r = a(11364),
                i = a(11365),
                s = a(11366);
            var c = {
                rpc: {},
                types: (0, o.objectSpread)({}, {
                    BodyId: {
                        _enum: {
                            Unit: "Null",
                            Named: "Vec<u8>",
                            Index: "Compact<u32>",
                            Executive: "Null",
                            Technical: "Null",
                            Legislative: "Null",
                            Judicial: "Null"
                        }
                    },
                    BodyPart: {
                        _enum: {
                            Voice: "Null",
                            Members: "Compact<u32>",
                            Fraction: {
                                nom: "Compact<u32>",
                                denom: "Compact<u32>"
                            },
                            AtLeastProportion: {
                                nom: "Compact<u32>",
                                denom: "Compact<u32>"
                            },
                            MoreThanProportion: {
                                nom: "Compact<u32>",
                                denom: "Compact<u32>"
                            }
                        }
                    },
                    InteriorMultiLocation: "Junctions",
                    NetworkId: {
                        _enum: {
                            Any: "Null",
                            Named: "Vec<u8>",
                            Polkadot: "Null",
                            Kusama: "Null"
                        }
                    }
                }, {
                    XcmOrigin: {
                        _enum: {
                            Xcm: "MultiLocation"
                        }
                    },
                    XcmpMessageFormat: {
                        _enum: ["ConcatenatedVersionedXcm", "ConcatenatedEncodedBlob", "Signals"]
                    },
                    XcmAssetId: {
                        _enum: {
                            Concrete: "MultiLocation",
                            Abstract: "Bytes"
                        }
                    },
                    InboundStatus: {
                        _enum: ["Ok", "Suspended"]
                    },
                    OutboundStatus: {
                        _enum: ["Ok", "Suspended"]
                    },
                    MultiAssets: "Vec<MultiAsset>"
                }, r.v0, i.v1, s.v2, (0, n.mapXcmTypes)("V2"), {
                    DoubleEncodedCall: {
                        encoded: "Vec<u8>"
                    },
                    XcmOriginKind: {
                        _enum: ["Native", "SovereignAccount", "Superuser", "Xcm"]
                    },
                    Outcome: {
                        _enum: {
                            Complete: "Weight",
                            Incomplete: "(Weight, XcmErrorV0)",
                            Error: "XcmErrorV0"
                        }
                    },
                    QueryId: "u64",
                    QueryStatus: {
                        _enum: {
                            Pending: {
                                responder: "VersionedMultiLocation",
                                maybeNotify: "Option<(u8, u8)>",
                                timeout: "BlockNumber"
                            },
                            Ready: {
                                response: "VersionedResponse",
                                at: "BlockNumber"
                            }
                        }
                    },
                    QueueConfigData: {
                        suspendThreshold: "u32",
                        dropThreshold: "u32",
                        resumeThreshold: "u32",
                        thresholdWeight: "Weight",
                        weightRestrictDecay: "Weight"
                    },
                    VersionMigrationStage: {
                        _enum: {
                            MigrateSupportedVersion: "Null",
                            MigrateVersionNotifiers: "Null",
                            NotifyCurrentTargets: "Option<Bytes>",
                            MigrateAndNotifyOldTargets: "Null"
                        }
                    },
                    VersionedMultiAsset: {
                        _enum: {
                            V0: "MultiAssetV0",
                            V1: "MultiAssetV1",
                            V2: "MultiAssetV2"
                        }
                    },
                    VersionedMultiAssets: {
                        _enum: {
                            V0: "Vec<MultiAssetV0>",
                            V1: "MultiAssetsV1",
                            V2: "MultiAssetsV2"
                        }
                    },
                    VersionedMultiLocation: {
                        _enum: {
                            V0: "MultiLocationV0",
                            V1: "MultiLocationV1",
                            V2: "MultiLocationV2"
                        }
                    },
                    VersionedResponse: {
                        V0: "ResponseV0",
                        V1: "ResponseV1",
                        V2: "ResponseV2"
                    },
                    VersionedXcm: {
                        _enum: {
                            V0: "XcmV0",
                            V1: "XcmV1",
                            V2: "XcmV2"
                        }
                    },
                    XcmVersion: "u32"
                })
            };
            t.default = c
        },
        11364: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v0 = void 0;
            t.v0 = {
                FungibilityV0: "FungibilityV1",
                WildFungibilityV0: "WildFungibilityV1",
                AssetInstanceV0: {
                    _enum: {
                        Undefined: "Null",
                        Index8: "u8",
                        Index16: "Compact<u16>",
                        Index32: "Compact<u32>",
                        Index64: "Compact<u64>",
                        Index128: "Compact<u128>",
                        Array4: "[u8; 4]",
                        Array8: "[u8; 8]",
                        Array16: "[u8; 16]",
                        Array32: "[u8; 32]",
                        Blob: "Vec<u8>"
                    }
                },
                JunctionV0: {
                    _enum: {
                        Parent: "Null",
                        Parachain: "Compact<u32>",
                        AccountId32: {
                            network: "NetworkId",
                            id: "AccountId"
                        },
                        AccountIndex64: {
                            network: "NetworkId",
                            index: "Compact<u64>"
                        },
                        AccountKey20: {
                            network: "NetworkId",
                            key: "[u8; 20]"
                        },
                        PalletInstance: "u8",
                        GeneralIndex: "Compact<u128>",
                        GeneralKey: "Vec<u8>",
                        OnlyChild: "Null",
                        Plurality: {
                            id: "BodyId",
                            part: "BodyPart"
                        }
                    }
                },
                MultiAssetV0: {
                    _enum: {
                        None: "Null",
                        All: "Null",
                        AllFungible: "Null",
                        AllNonFungible: "Null",
                        AllAbstractFungible: "Vec<u8>",
                        AllAbstractNonFungible: "Vec<u8>",
                        AllConcreteFungible: "MultiLocationV0",
                        AllConcreteNonFungible: "MultiLocationV0",
                        AbstractFungible: {
                            id: "Vec<u8>",
                            instance: "Compact<u128>"
                        },
                        AbstractNonFungible: {
                            class: "Vec<u8>",
                            instance: "AssetInstanceV0"
                        },
                        ConcreteFungible: {
                            id: "MultiLocationV0",
                            amount: "Compact<u128>"
                        },
                        ConcreteNonFungible: {
                            class: "MultiLocationV0",
                            instance: "AssetInstanceV0"
                        }
                    }
                },
                MultiLocationV0: {
                    _enum: {
                        Here: "Null",
                        X1: "JunctionV0",
                        X2: "(JunctionV0, JunctionV0)",
                        X3: "(JunctionV0, JunctionV0, JunctionV0)",
                        X4: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
                        X5: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
                        X6: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
                        X7: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
                        X8: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)"
                    }
                },
                OriginKindV0: {
                    _enum: ["Native", "SovereignAccount", "Superuser", "Xcm"]
                },
                ResponseV0: {
                    _enum: {
                        Assets: "Vec<MultiAssetV0>"
                    }
                },
                XcmV0: {
                    _enum: {
                        WithdrawAsset: {
                            assets: "Vec<MultiAssetV0>",
                            effects: "Vec<XcmOrderV0>"
                        },
                        ReserveAssetDeposit: {
                            assets: "Vec<MultiAssetV0>",
                            effects: "Vec<XcmOrderV0>"
                        },
                        ReceiveTeleportedAsset: {
                            assets: "Vec<MultiAssetV0>",
                            effects: "Vec<XcmOrderV0>"
                        },
                        QueryResponse: {
                            queryId: "Compact<u64>",
                            response: "ResponseV0"
                        },
                        TransferAsset: {
                            assets: "Vec<MultiAssetV0>",
                            dest: "MultiLocationV0"
                        },
                        TransferReserveAsset: {
                            assets: "Vec<MultiAssetV0>",
                            dest: "MultiLocationV0",
                            effects: "Vec<XcmOrderV0>"
                        },
                        Transact: {
                            originType: "XcmOriginKind",
                            requireWeightAtMost: "u64",
                            call: "DoubleEncodedCall"
                        },
                        HrmpNewChannelOpenRequest: {
                            sender: "Compact<u32>",
                            maxMessageSize: "Compact<u32>",
                            maxCapacity: "Compact<u32>"
                        },
                        HrmpChannelAccepted: {
                            recipient: "Compact<u32>"
                        },
                        HrmpChannelClosing: {
                            initiator: "Compact<u32>",
                            sender: "Compact<u32>",
                            recipient: "Compact<u32>"
                        },
                        RelayedFrom: {
                            who: "MultiLocationV0",
                            message: "XcmV0"
                        }
                    }
                },
                XcmErrorV0: {
                    _enum: {
                        Undefined: "Null",
                        Overflow: "Null",
                        Unimplemented: "Null",
                        UnhandledXcmVersion: "Null",
                        UnhandledXcmMessage: "Null",
                        UnhandledEffect: "Null",
                        EscalationOfPrivilege: "Null",
                        UntrustedReserveLocation: "Null",
                        UntrustedTeleportLocation: "Null",
                        DestinationBufferOverflow: "Null",
                        SendFailed: "Null",
                        CannotReachDestination: "(MultiLocation, Xcm)",
                        MultiLocationFull: "Null",
                        FailedToDecode: "Null",
                        BadOrigin: "Null",
                        ExceedsMaxMessageSize: "Null",
                        FailedToTransactAsset: "Null",
                        WeightLimitReached: "Weight",
                        Wildcard: "Null",
                        TooMuchWeightRequired: "Null",
                        NotHoldingFees: "Null",
                        WeightNotComputable: "Null",
                        Barrier: "Null",
                        NotWithdrawable: "Null",
                        LocationCannotHold: "Null",
                        TooExpensive: "Null",
                        AssetNotFound: "Null",
                        RecursionLimitReached: "Null"
                    }
                },
                XcmOrderV0: {
                    _enum: {
                        Null: "Null",
                        DepositAsset: {
                            assets: "Vec<MultiAssetV0>",
                            dest: "MultiLocationV0"
                        },
                        DepositReserveAsset: {
                            assets: "Vec<MultiAssetV0>",
                            dest: "MultiLocationV0",
                            effects: "Vec<XcmOrderV0>"
                        },
                        ExchangeAsset: {
                            give: "Vec<MultiAssetV0>",
                            receive: "Vec<MultiAssetV0>"
                        },
                        InitiateReserveWithdraw: {
                            assets: "Vec<MultiAssetV0>",
                            reserve: "MultiLocationV0",
                            effects: "Vec<XcmOrderV0>"
                        },
                        InitiateTeleport: {
                            assets: "Vec<MultiAsset>",
                            dest: "MultiLocationV0",
                            effects: "Vec<XcmOrderV0>"
                        },
                        QueryHolding: {
                            queryId: "Compact<u64>",
                            dest: "MultiLocationV0",
                            assets: "Vec<MultiAssetV0>"
                        },
                        BuyExecution: {
                            fees: "MultiAsset",
                            weight: "u64",
                            debt: "u64",
                            haltOnError: "bool",
                            xcm: "Vec<XcmV0>"
                        }
                    }
                }
            }
        },
        11365: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v1 = void 0;
            t.v1 = {
                AssetInstanceV1: {
                    _enum: {
                        Undefined: "Null",
                        Index: "Compact<u128>",
                        Array4: "[u8; 4]",
                        Array8: "[u8; 8]",
                        Array16: "[u8; 16]",
                        Array32: "[u8; 32]",
                        Blob: "Bytes"
                    }
                },
                FungibilityV1: {
                    _enum: {
                        Fungible: "Compact<u128>",
                        NonFungible: "AssetInstanceV1"
                    }
                },
                JunctionV1: {
                    _enum: {
                        Parachain: "Compact<u32>",
                        AccountId32: {
                            network: "NetworkId",
                            id: "AccountId"
                        },
                        AccountIndex64: {
                            network: "NetworkId",
                            index: "Compact<u64>"
                        },
                        AccountKey20: {
                            network: "NetworkId",
                            key: "[u8; 20]"
                        },
                        PalletInstance: "u8",
                        GeneralIndex: "Compact<u128>",
                        GeneralKey: "Vec<u8>",
                        OnlyChild: "Null",
                        Plurality: {
                            id: "BodyId",
                            part: "BodyPart"
                        }
                    }
                },
                JunctionsV1: {
                    _enum: {
                        Here: "Null",
                        X1: "JunctionV1",
                        X2: "(JunctionV1, JunctionV1)",
                        X3: "(JunctionV1, JunctionV1, JunctionV1)",
                        X4: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
                        X5: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
                        X6: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
                        X7: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
                        X8: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)"
                    }
                },
                MultiAssetsV1: "Vec<MultiAssetV1>",
                MultiAssetV1: {
                    id: "XcmAssetId",
                    fungibility: "FungibilityV1"
                },
                MultiAssetFilterV1: {
                    _enum: {
                        Definite: "MultiAssetsV1",
                        Wild: "WildMultiAssetV1"
                    }
                },
                MultiLocationV1: {
                    parents: "u8",
                    interior: "JunctionsV1"
                },
                OriginKindV1: "OriginKindV0",
                ResponseV1: {
                    _enum: {
                        Assets: "MultiAssetsV1"
                    }
                },
                WildFungibilityV1: {
                    _enum: ["Fungible", "NonFungible"]
                },
                WildMultiAssetV1: {
                    _enum: {
                        All: "Null",
                        AllOf: {
                            id: "XcmAssetId",
                            fungibility: "WildFungibilityV1"
                        }
                    }
                },
                XcmV1: {
                    _enum: {
                        WithdrawAsset: {
                            assets: "MultiAssetsV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        ReserveAssetDeposit: {
                            assets: "MultiAssetsV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        ReceiveTeleportedAsset: {
                            assets: "MultiAssetsV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        QueryResponse: {
                            queryId: "Compact<u64>",
                            response: "ResponseV1"
                        },
                        TransferAsset: {
                            assets: "MultiAssetsV1",
                            dest: "MultiLocationV1"
                        },
                        TransferReserveAsset: {
                            assets: "MultiAssetsV1",
                            dest: "MultiLocationV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        Transact: {
                            originType: "XcmOriginKind",
                            requireWeightAtMost: "u64",
                            call: "DoubleEncodedCall"
                        },
                        HrmpNewChannelOpenRequest: {
                            sender: "Compact<u32>",
                            maxMessageSize: "Compact<u32>",
                            maxCapacity: "Compact<u32>"
                        },
                        HrmpChannelAccepted: {
                            recipient: "Compact<u32>"
                        },
                        HrmpChannelClosing: {
                            initiator: "Compact<u32>",
                            sender: "Compact<u32>",
                            recipient: "Compact<u32>"
                        },
                        RelayedFrom: {
                            who: "MultiLocationV1",
                            message: "XcmV1"
                        }
                    }
                },
                XcmErrorV1: {
                    _enum: {
                        Undefined: "Null",
                        Overflow: "Null",
                        Unimplemented: "Null",
                        UnhandledXcmVersion: "Null",
                        UnhandledXcmMessage: "Null",
                        UnhandledEffect: "Null",
                        EscalationOfPrivilege: "Null",
                        UntrustedReserveLocation: "Null",
                        UntrustedTeleportLocation: "Null",
                        DestinationBufferOverflow: "Null",
                        SendFailed: "Null",
                        CannotReachDestination: "(MultiLocationV1, XcmV1)",
                        MultiLocationFull: "Null",
                        FailedToDecode: "Null",
                        BadOrigin: "Null",
                        ExceedsMaxMessageSize: "Null",
                        FailedToTransactAsset: "Null",
                        WeightLimitReached: "Weight",
                        Wildcard: "Null",
                        TooMuchWeightRequired: "Null",
                        NotHoldingFees: "Null",
                        WeightNotComputable: "Null",
                        Barrier: "Null",
                        NotWithdrawable: "Null",
                        LocationCannotHold: "Null",
                        TooExpensive: "Null",
                        AssetNotFound: "Null",
                        DestinationUnsupported: "Null",
                        RecursionLimitReached: "Null"
                    }
                },
                XcmOrderV1: {
                    _enum: {
                        Noop: "Null",
                        DepositAsset: {
                            assets: "MultiAssetFilterV1",
                            maxAssets: "u32",
                            beneficiary: "MultiLocationV1"
                        },
                        DepositReserveAsset: {
                            assets: "MultiAssetFilterV1",
                            maxAssets: "u32",
                            dest: "MultiLocationV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        ExchangeAsset: {
                            give: "MultiAssetFilterV1",
                            receive: "MultiAssetsV1"
                        },
                        InitiateReserveWithdraw: {
                            assets: "MultiAssetFilterV1",
                            reserve: "MultiLocationV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        InitiateTeleport: {
                            assets: "MultiAssetFilterV1",
                            dest: "MultiLocationV1",
                            effects: "Vec<XcmOrderV1>"
                        },
                        QueryHolding: {
                            queryId: "Compact<u64>",
                            dest: "MultiLocationV1",
                            assets: "MultiAssetFilterV1"
                        },
                        BuyExecution: {
                            fees: "MultiAssetV1",
                            weight: "u64",
                            debt: "u64",
                            haltOnError: "bool",
                            instructions: "Vec<XcmV1>"
                        }
                    }
                }
            }
        },
        11366: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v2 = void 0;
            t.v2 = {
                AssetInstanceV2: "AssetInstanceV1",
                FungibilityV2: "FungibilityV1",
                JunctionV2: "JunctionV1",
                JunctionsV2: "JunctionsV1",
                MultiAssetsV2: "MultiAssetsV1",
                MultiAssetV2: "MultiAssetV1",
                MultiAssetFilterV2: "MultiAssetFilterV1",
                MultiLocationV2: "MultiLocationV1",
                OriginKindV2: "OriginKindV1",
                WildFungibilityV2: "WildFungibilityV1",
                ResponseV2: {
                    _enum: {
                        Null: "Null",
                        Assets: "MultiAssetsV2",
                        ExecutionResult: "ResponseV2Result"
                    }
                },
                ResponseV2Error: "(u32, XcmErrorV2)",
                ResponseV2Result: "Result<Null, ResponseV2Error>",
                WeightLimitV2: {
                    _enum: {
                        Unlimited: "Null",
                        Limited: "Compact<u64>"
                    }
                },
                InstructionV2: {
                    _enum: {
                        WithdrawAsset: "MultiAssetsV2",
                        ReserveAssetDeposited: "MultiAssetsV2",
                        ReceiveTeleportedAsset: "MultiAssetsV2",
                        QueryResponse: {
                            queryId: "Compact<u64>",
                            response: "ResponseV2",
                            maxWeight: "Compact<u64>"
                        },
                        TransferAsset: {
                            assets: "MultiAssetsV2",
                            beneficiary: "MultiLocationV2"
                        },
                        TransferReserveAsset: {
                            assets: "MultiAssetsV2",
                            dest: "MultiLocationV2",
                            xcm: "XcmV2"
                        },
                        Transact: {
                            originType: "OriginKindV2",
                            requireWeightAtMost: "u64",
                            call: "DoubleEncodedCall"
                        },
                        HrmpNewChannelOpenRequest: {
                            sender: "Compact<u32>",
                            maxMessageSize: "Compact<u32>",
                            maxCapacity: "Compact<u32>"
                        },
                        HrmpChannelAccepted: {
                            recipient: "Compact<u32>"
                        },
                        HrmpChannelClosing: {
                            initiator: "Compact<u32>",
                            sender: "Compact<u32>",
                            recipient: "Compact<u32>"
                        },
                        ClearOrigin: "Null",
                        DescendOrigin: "InteriorMultiLocation",
                        ReportError: {
                            queryId: "Compact<u64>",
                            dest: "MultiLocationV2",
                            maxResponseWeight: "Compact<u64>"
                        },
                        DepositAsset: {
                            assets: "MultiAssetFilterV2",
                            maxAssets: "u32",
                            beneficiary: "MultiLocationV2"
                        },
                        DepositReserveAsset: {
                            assets: "MultiAssetFilterV2",
                            maxAssets: "u32",
                            dest: "MultiLocationV2",
                            xcm: "XcmV2"
                        },
                        ExchangeAsset: {
                            give: "MultiAssetFilterV2",
                            receive: "MultiAssetsV2"
                        },
                        InitiateReserveWithdraw: {
                            assets: "MultiAssetFilterV2",
                            reserve: "MultiLocationV2",
                            xcm: "XcmV2"
                        },
                        InitiateTeleport: {
                            assets: "MultiAssetFilterV2",
                            dest: "MultiLocationV2",
                            xcm: "XcmV2"
                        },
                        QueryHolding: {
                            query_id: "Compact<u64>",
                            dest: "MultiLocationV2",
                            assets: "MultiAssetFilterV2",
                            maxResponse_Weight: "Compact<u64>"
                        },
                        BuyExecution: {
                            fees: "MultiAssetV2",
                            weightLimit: "WeightLimitV2"
                        },
                        RefundSurplus: "Null",
                        SetErrorHandler: "XcmV2",
                        SetAppendix: "XcmV2",
                        ClearError: "Null",
                        ClaimAsset: {
                            assets: "MultiAssetsV2",
                            ticket: "MultiLocationV2"
                        },
                        Trap: "u64"
                    }
                },
                WildMultiAssetV2: "WildMultiAssetV1",
                XcmV2: "Vec<InstructionV2>",
                XcmErrorV2: {
                    _enum: {
                        Undefined: "Null",
                        Overflow: "Null",
                        Unimplemented: "Null",
                        UnhandledXcmVersion: "Null",
                        UnhandledXcmMessage: "Null",
                        UnhandledEffect: "Null",
                        EscalationOfPrivilege: "Null",
                        UntrustedReserveLocation: "Null",
                        UntrustedTeleportLocation: "Null",
                        DestinationBufferOverflow: "Null",
                        MultiLocationFull: "Null",
                        MultiLocationNotInvertible: "Null",
                        FailedToDecode: "Null",
                        BadOrigin: "Null",
                        ExceedsMaxMessageSize: "Null",
                        FailedToTransactAsset: "Null",
                        WeightLimitReached: "Weight",
                        Wildcard: "Null",
                        TooMuchWeightRequired: "Null",
                        NotHoldingFees: "Null",
                        WeightNotComputable: "Null",
                        Barrier: "Null",
                        NotWithdrawable: "Null",
                        LocationCannotHold: "Null",
                        TooExpensive: "Null",
                        AssetNotFound: "Null",
                        DestinationUnsupported: "Null",
                        RecursionLimitReached: "Null",
                        Transport: "Null",
                        Unroutable: "Null",
                        UnknownWeightRequired: "Null",
                        Trap: "u64",
                        UnknownClaim: "Null",
                        InvalidLocation: "Null"
                    }
                },
                XcmOrderV2: "XcmOrderV1"
            }
        },
        11367: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(5458);
            const o = {
                    types: "Vec<Si0Type>",
                    spec: "ContractContractSpecV0"
                },
                r = {
                    source: "ContractProjectSource",
                    contract: "ContractProjectContract"
                };
            var i = {
                rpc: {},
                types: (0, n.objectSpread)({}, {
                    ContractCryptoHasher: {
                        _enum: ["Blake2x256", "Sha2x256", "Keccak256"]
                    },
                    ContractDiscriminant: "u32",
                    ContractLayoutArray: {
                        offset: "ContractLayoutKey",
                        len: "u32",
                        cellsPerElem: "u64",
                        layout: "ContractStorageLayout"
                    },
                    ContractLayoutCell: {
                        key: "ContractLayoutKey",
                        ty: "SiLookupTypeId"
                    },
                    ContractLayoutEnum: {
                        dispatchKey: "ContractLayoutKey",
                        variants: "BTreeMap<ContractDiscriminant, ContractLayoutStruct>"
                    },
                    ContractLayoutHash: {
                        offset: "ContractLayoutKey",
                        strategy: "ContractLayoutHashingStrategy",
                        layout: "ContractStorageLayout"
                    },
                    ContractLayoutHashingStrategy: {
                        hasher: "ContractCryptoHasher",
                        postfix: "Vec<u8>",
                        prefix: "Vec<u8>"
                    },
                    ContractLayoutKey: "[u8; 32]",
                    ContractLayoutStruct: {
                        fields: "Vec<ContractLayoutStructField>"
                    },
                    ContractLayoutStructField: {
                        layout: "ContractStorageLayout",
                        name: "Text"
                    },
                    ContractStorageLayout: {
                        _enum: {
                            Cell: "ContractLayoutCell",
                            Hash: "ContractLayoutHash",
                            Array: "ContractLayoutArray",
                            Struct: "ContractLayoutStruct",
                            Enum: "ContractLayoutEnum"
                        }
                    }
                }, {
                    ContractConstructorSpecV0: {
                        name: "Text",
                        selector: "ContractSelector",
                        args: "Vec<ContractMessageParamSpecV0>",
                        docs: "Vec<Text>"
                    },
                    ContractConstructorSpecV1: {
                        name: "Vec<Text>",
                        selector: "ContractSelector",
                        args: "Vec<ContractMessageParamSpecV0>",
                        docs: "Vec<Text>"
                    },
                    ContractConstructorSpecV2: {
                        label: "Text",
                        selector: "ContractSelector",
                        args: "Vec<ContractMessageParamSpecV2>",
                        docs: "Vec<Text>"
                    },
                    ContractConstructorSpecV3: {
                        label: "Text",
                        selector: "ContractSelector",
                        payable: "bool",
                        args: "Vec<ContractMessageParamSpecV2>",
                        docs: "Vec<Text>"
                    },
                    ContractContractSpecV0: {
                        constructors: "Vec<ContractConstructorSpecV0>",
                        messages: "Vec<ContractMessageSpecV0>",
                        events: "Vec<ContractEventSpecV0>",
                        docs: "Vec<Text>"
                    },
                    ContractContractSpecV1: {
                        constructors: "Vec<ContractConstructorSpecV1>",
                        messages: "Vec<ContractMessageSpecV1>",
                        events: "Vec<ContractEventSpecV1>",
                        docs: "Vec<Text>"
                    },
                    ContractContractSpecV2: {
                        constructors: "Vec<ContractConstructorSpecV2>",
                        messages: "Vec<ContractMessageSpecV2>",
                        events: "Vec<ContractEventSpecV2>",
                        docs: "Vec<Text>"
                    },
                    ContractContractSpecV3: {
                        constructors: "Vec<ContractConstructorSpecV3>",
                        messages: "Vec<ContractMessageSpecV2>",
                        events: "Vec<ContractEventSpecV2>",
                        docs: "Vec<Text>"
                    },
                    ContractDisplayName: "SiPath",
                    ContractEventParamSpecV0: {
                        name: "Text",
                        indexed: "bool",
                        type: "ContractTypeSpec",
                        docs: "Vec<Text>"
                    },
                    ContractEventParamSpecV2: {
                        label: "Text",
                        indexed: "bool",
                        type: "ContractTypeSpec",
                        docs: "Vec<Text>"
                    },
                    ContractEventSpecV0: {
                        name: "Text",
                        args: "Vec<ContractEventParamSpecV0>",
                        docs: "Vec<Text>"
                    },
                    ContractEventSpecV1: {
                        name: "Text",
                        args: "Vec<ContractEventParamSpecV0>",
                        docs: "Vec<Text>"
                    },
                    ContractEventSpecV2: {
                        label: "Text",
                        args: "Vec<ContractEventParamSpecV2>",
                        docs: "Vec<Text>"
                    },
                    ContractMessageParamSpecV0: {
                        name: "Text",
                        type: "ContractTypeSpec"
                    },
                    ContractMessageParamSpecV2: {
                        label: "Text",
                        type: "ContractTypeSpec"
                    },
                    ContractMessageSpecV0: {
                        name: "Text",
                        selector: "ContractSelector",
                        mutates: "bool",
                        payable: "bool",
                        args: "Vec<ContractMessageParamSpecV0>",
                        returnType: "Option<ContractTypeSpec>",
                        docs: "Vec<Text>"
                    },
                    ContractMessageSpecV1: {
                        name: "Vec<Text>",
                        selector: "ContractSelector",
                        mutates: "bool",
                        payable: "bool",
                        args: "Vec<ContractMessageParamSpecV0>",
                        returnType: "Option<ContractTypeSpec>",
                        docs: "Vec<Text>"
                    },
                    ContractMessageSpecV2: {
                        label: "Text",
                        selector: "ContractSelector",
                        mutates: "bool",
                        payable: "bool",
                        args: "Vec<ContractMessageParamSpecV2>",
                        returnType: "Option<ContractTypeSpec>",
                        docs: "Vec<Text>"
                    },
                    ContractSelector: "[u8; 4]",
                    ContractTypeSpec: {
                        type: "SiLookupTypeId",
                        displayName: "ContractDisplayName"
                    }
                }, {
                    ContractConstructorSpecLatest: "ContractConstructorSpecV3",
                    ContractEventSpecLatest: "ContractEventSpecV2",
                    ContractEventParamSpecLatest: "ContractEventParamSpecV2",
                    ContractMessageParamSpecLatest: "ContractMessageParamSpecV2",
                    ContractMessageSpecLatest: "ContractMessageSpecV2",
                    ContractMetadataLatest: "ContractMetadataV3"
                }, {
                    ContractProjectInfo: r,
                    ContractMetadataV0: o,
                    ContractMetadataV1: {
                        types: "Vec<PortableType>",
                        spec: "ContractContractSpecV1"
                    },
                    ContractMetadataV2: {
                        types: "Vec<PortableType>",
                        spec: "ContractContractSpecV2"
                    },
                    ContractMetadataV3: {
                        types: "Vec<PortableType>",
                        spec: "ContractContractSpecV3"
                    },
                    ContractMetadata: {
                        _enum: {
                            V0: "ContractMetadataV0",
                            V1: "ContractMetadataV1",
                            V2: "ContractMetadataV2",
                            V3: "ContractMetadataV3"
                        }
                    },
                    ContractProjectV0: (0, n.objectSpread)({
                        metadataVersion: "Text"
                    }, r, o),
                    ContractProject: "(ContractProjectInfo, ContractMetadata)",
                    ContractProjectContract: {
                        _alias: {
                            docs: "documentation"
                        },
                        name: "Text",
                        version: "Text",
                        authors: "Vec<Text>",
                        description: "Option<Text>",
                        docs: "Option<Text>",
                        repository: "Option<Text>",
                        homepage: "Option<Text>",
                        license: "Option<Text>"
                    },
                    ContractProjectSource: {
                        _alias: {
                            wasmHash: "hash"
                        },
                        wasmHash: "[u8; 32]",
                        language: "Text",
                        compiler: "Text",
                        wasm: "Raw"
                    }
                })
            };
            t.default = i
        },
        11368: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(5458),
                o = a(11369);
            const r = (0, n.objectSpread)({}, {
                BlockV0: {
                    header: "EthHeader",
                    transactions: "Vec<TransactionV0>",
                    ommers: "Vec<EthHeader>"
                },
                LegacyTransaction: {
                    nonce: "U256",
                    gasPrice: "U256",
                    gasLimit: "U256",
                    action: "EthTransactionAction",
                    value: "U256",
                    input: "Bytes",
                    signature: "EthTransactionSignature"
                },
                TransactionV0: "LegacyTransaction"
            }, {
                BlockV1: {
                    header: "EthHeader",
                    transactions: "Vec<TransactionV1>",
                    ommers: "Vec<EthHeader>"
                },
                EIP2930Transaction: {
                    chainId: "u64",
                    nonce: "U256",
                    gasPrice: "U256",
                    gasLimit: "U256",
                    action: "EthTransactionAction",
                    value: "U256",
                    input: "Bytes",
                    accessList: "EthAccessList",
                    oddYParity: "bool",
                    r: "H256",
                    s: "H256"
                },
                TransactionV1: {
                    _enum: {
                        Legacy: "LegacyTransaction",
                        EIP2930: "EIP2930Transaction"
                    }
                }
            }, {
                BlockV2: {
                    header: "EthHeader",
                    transactions: "Vec<TransactionV2>",
                    ommers: "Vec<EthHeader>"
                },
                EIP1559Transaction: {
                    chainId: "u64",
                    nonce: "U256",
                    maxPriorityFeePerGas: "U256",
                    maxFeePerGas: "U256",
                    gasLimit: "U256",
                    action: "EthTransactionAction",
                    value: "U256",
                    input: "Bytes",
                    accessList: "EthAccessList",
                    oddYParity: "bool",
                    r: "H256",
                    s: "H256"
                },
                TransactionV2: {
                    _enum: {
                        Legacy: "LegacyTransaction",
                        EIP2930: "EIP2930Transaction",
                        EIP1559: "EIP1559Transaction"
                    }
                }
            }, {
                EthereumAccountId: "GenericEthereumAccountId",
                EthereumAddress: "GenericEthereumAccountId",
                EthereumLookupSource: "GenericEthereumLookupSource",
                EthereumSignature: "[u8; 65]",
                EthAccessListItem: {
                    address: "EthAddress",
                    slots: "Vec<H256>"
                },
                EthAccessList: "Vec<EthAccessListItem>",
                EthAccount: {
                    address: "EthAddress",
                    balance: "U256",
                    nonce: "U256",
                    codeHash: "H256",
                    storageHash: "H256",
                    accountProof: "Vec<Bytes>",
                    storageProof: "Vec<EthStorageProof>"
                },
                EthAddress: "H160",
                EthBlock: {
                    header: "EthHeader",
                    transactions: "Vec<EthTransaction>",
                    ommers: "Vec<EthHeader>"
                },
                EthHeader: {
                    parentHash: "H256",
                    ommersHash: "H256",
                    beneficiary: "EthAddress",
                    stateRoot: "H256",
                    transactionsRoot: "H256",
                    receiptsRoot: "H256",
                    logsBloom: "EthBloom",
                    difficulty: "U256",
                    number: "U256",
                    gasLimit: "U256",
                    gasUsed: "U256",
                    timestamp: "u64",
                    extraData: "Bytes",
                    mixMash: "H256",
                    nonce: "H64"
                },
                EthRichBlock: {
                    _alias: {
                        blockHash: "hash",
                        blockSize: "size"
                    },
                    blockHash: "Option<H256>",
                    parentHash: "H256",
                    sha3Uncles: "H256",
                    author: "EthAddress",
                    miner: "EthAddress",
                    stateRoot: "H256",
                    transactionsRoot: "H256",
                    receiptsRoot: "H256",
                    number: "Option<U256>",
                    gasUsed: "U256",
                    gasLimit: "U256",
                    extraData: "Bytes",
                    logsBloom: "EthBloom",
                    timestamp: "U256",
                    difficulty: "U256",
                    totalDifficulty: "Option<U256>",
                    sealFields: "Vec<Bytes>",
                    uncles: "Vec<H256>",
                    transactions: "Vec<EthTransaction>",
                    blockSize: "Option<U256>"
                },
                EthBloom: "H2048",
                EthCallRequest: {
                    from: "Option<EthAddress>",
                    to: "Option<EthAddress>",
                    gasPrice: "Option<U256>",
                    gas: "Option<U256>",
                    value: "Option<U256>",
                    data: "Option<Bytes>",
                    nonce: "Option<U256>"
                },
                EthFilter: {
                    fromBlock: "Option<BlockNumber>",
                    toBlock: "Option<BlockNumber>",
                    blockHash: "Option<H256>",
                    address: "Option<EthFilterAddress>",
                    topics: "Option<EthFilterTopic>"
                },
                EthFilterAddress: {
                    _enum: {
                        Single: "EthAddress",
                        Multiple: "Vec<EthAddress>",
                        Null: "Null"
                    }
                },
                EthFilterChanges: {
                    _enum: {
                        Logs: "Vec<EthLog>",
                        Hashes: "Vec<H256>",
                        Empty: "Null"
                    }
                },
                EthFilterTopic: {
                    _enum: {
                        Single: "EthFilterTopicInner",
                        Multiple: "Vec<EthFilterTopicInner>",
                        Null: "Null"
                    }
                },
                EthFilterTopicEntry: "Option<H256>",
                EthFilterTopicInner: {
                    _enum: {
                        Single: "EthFilterTopicEntry",
                        Multiple: "Vec<EthFilterTopicEntry>",
                        Null: "Null"
                    }
                },
                EthRichHeader: {
                    _alias: {
                        blockHash: "hash",
                        blockSize: "size"
                    },
                    blockHash: "Option<H256>",
                    parentHash: "H256",
                    sha3Uncles: "H256",
                    author: "EthAddress",
                    miner: "EthAddress",
                    stateRoot: "H256",
                    transactionsRoot: "H256",
                    receiptsRoot: "H256",
                    number: "Option<U256>",
                    gasUsed: "U256",
                    gasLimit: "U256",
                    extraData: "Bytes",
                    logsBloom: "EthBloom",
                    timestamp: "U256",
                    difficulty: "U256",
                    sealFields: "Vec<Bytes>",
                    blockSize: "Option<U256>"
                },
                EthLog: {
                    address: "EthAddress",
                    topics: "Vec<H256>",
                    data: "Bytes",
                    blockHash: "Option<H256>",
                    blockNumber: "Option<U256>",
                    transactionHash: "Option<H256>",
                    transactionIndex: "Option<U256>",
                    logIndex: "Option<U256>",
                    transactionLogIndex: "Option<U256>",
                    removed: "bool"
                },
                EthReceipt: {
                    transactionHash: "Option<H256>",
                    transactionIndex: "Option<U256>",
                    blockHash: "Option<H256>",
                    from: "Option<EthAddress>",
                    to: "Option<EthAddress>",
                    blockNumber: "Option<U256>",
                    cumulativeGasUsed: "U256",
                    gasUsed: "Option<U256>",
                    contractAddress: "Option<EthAddress>",
                    logs: "Vec<EthLog>",
                    root: "Option<H256>",
                    logsBloom: "EthBloom",
                    statusCode: "Option<U64>"
                },
                EthStorageProof: {
                    key: "U256",
                    value: "U256",
                    proof: "Vec<Bytes>"
                },
                EthSubKind: {
                    _enum: ["newHeads", "logs", "newPendingTransactions", "syncing"]
                },
                EthSubParams: {
                    _enum: {
                        None: "Null",
                        Logs: "EthFilter"
                    }
                },
                EthSubResult: {
                    _enum: {
                        Header: "EthRichHeader",
                        Log: "EthLog",
                        TransactionHash: "H256",
                        SyncState: "EthSyncStatus"
                    }
                },
                EthSyncInfo: {
                    startingBlock: "U256",
                    currentBlock: "U256",
                    highestBlock: "U256",
                    warpChunksAmount: "Option<U256>",
                    warpChunksProcessed: "Option<U256>"
                },
                EthSyncStatus: {
                    _enum: {
                        Info: "EthSyncInfo",
                        None: "Null"
                    }
                },
                EthTransaction: "LegacyTransaction",
                EthTransactionSignature: {
                    v: "u64",
                    r: "H256",
                    s: "H256"
                },
                EthTransactionAction: {
                    _enum: {
                        Call: "H160",
                        Create: "Null"
                    }
                },
                EthTransactionCondition: {
                    _enum: {
                        block: "u64",
                        time: "u64"
                    }
                },
                EthTransactionRequest: {
                    from: "Option<EthAddress>",
                    to: "Option<EthAddress>",
                    gasPrice: "Option<U256>",
                    gas: "Option<U256>",
                    value: "Option<U256>",
                    data: "Option<Bytes>",
                    nonce: "Option<U256>"
                },
                EthTransactionStatus: {
                    transactionHash: "H256",
                    transactionIndex: "u32",
                    from: "EthAddress",
                    to: "Option<EthAddress>",
                    contractAddress: "Option<EthAddress>",
                    logs: "Vec<EthLog>",
                    logsBloom: "EthBloom"
                },
                EthWork: {
                    powHash: "H256",
                    seedHash: "H256",
                    target: "H256",
                    number: "Option<u64>"
                }
            });
            var i = {
                rpc: o.rpc,
                types: r
            };
            t.default = i
        },
        11369: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.rpc = void 0;
            const n = (0, a(5458).objectSpread)({}, {
                listening: {
                    aliasSection: "net",
                    description: "Returns true if client is actively listening for network connections. Otherwise false.",
                    params: [],
                    type: "bool"
                },
                peerCount: {
                    aliasSection: "net",
                    description: "Returns number of peers connected to node.",
                    params: [],
                    type: "String"
                },
                version: {
                    aliasSection: "net",
                    description: "Returns protocol version.",
                    params: [],
                    type: "String"
                }
            }, {
                clientVersion: {
                    aliasSection: "web3",
                    description: "Returns current client version.",
                    params: [],
                    type: "String"
                },
                sha3: {
                    aliasSection: "web3",
                    description: "Returns sha3 of the given data",
                    params: [{
                        name: "data",
                        type: "Bytes"
                    }],
                    type: "H256"
                }
            }, {
                accounts: {
                    description: "Returns accounts list.",
                    params: [],
                    type: "Vec<H160>"
                },
                blockNumber: {
                    description: "Returns the blockNumber",
                    params: [],
                    type: "U256"
                },
                call: {
                    description: "Call contract, returning the output data.",
                    params: [{
                        name: "request",
                        type: "EthCallRequest"
                    }, {
                        isHistoric: !0,
                        isOptional: !0,
                        name: "number",
                        type: "BlockNumber"
                    }],
                    type: "Bytes"
                },
                chainId: {
                    description: "Returns the chain ID used for transaction signing at the current best block. None is returned if not available.",
                    params: [],
                    type: "U64"
                },
                coinbase: {
                    description: "Returns block author.",
                    params: [],
                    type: "H160"
                },
                estimateGas: {
                    description: "Estimate gas needed for execution of given contract.",
                    params: [{
                        name: "request",
                        type: "EthCallRequest"
                    }, {
                        isHistoric: !0,
                        isOptional: !0,
                        name: "number",
                        type: "BlockNumber"
                    }],
                    type: "U256"
                },
                gasPrice: {
                    description: "Returns current gas price.",
                    params: [],
                    type: "U256"
                },
                getBalance: {
                    description: "Returns balance of the given account.",
                    params: [{
                        name: "address",
                        type: "H160"
                    }, {
                        isHistoric: !0,
                        isOptional: !0,
                        name: "number",
                        type: "BlockNumber"
                    }],
                    type: "U256"
                },
                getBlockByHash: {
                    description: "Returns block with given hash.",
                    params: [{
                        name: "hash",
                        type: "H256"
                    }, {
                        name: "full",
                        type: "bool"
                    }],
                    type: "Option<EthRichBlock>"
                },
                getBlockByNumber: {
                    description: "Returns block with given number.",
                    params: [{
                        name: "block",
                        type: "BlockNumber"
                    }, {
                        name: "full",
                        type: "bool"
                    }],
                    type: "Option<EthRichBlock>"
                },
                getBlockTransactionCountByHash: {
                    description: "Returns the number of transactions in a block with given hash.",
                    params: [{
                        name: "hash",
                        type: "H256"
                    }],
                    type: "U256"
                },
                getBlockTransactionCountByNumber: {
                    description: "Returns the number of transactions in a block with given block number.",
                    params: [{
                        name: "block",
                        type: "BlockNumber"
                    }],
                    type: "U256"
                },
                getCode: {
                    description: "Returns the code at given address at given time (block number).",
                    params: [{
                        name: "address",
                        type: "H160"
                    }, {
                        isHistoric: !0,
                        isOptional: !0,
                        name: "number",
                        type: "BlockNumber"
                    }],
                    type: "Bytes"
                },
                getFilterChanges: {
                    description: "Returns filter changes since last poll.",
                    params: [{
                        name: "index",
                        type: "U256"
                    }],
                    type: "EthFilterChanges"
                },
                getFilterLogs: {
                    description: "Returns all logs matching given filter (in a range 'from' - 'to').",
                    params: [{
                        name: "index",
                        type: "U256"
                    }],
                    type: "Vec<EthLog>"
                },
                getLogs: {
                    description: "Returns logs matching given filter object.",
                    params: [{
                        name: "filter",
                        type: "EthFilter"
                    }],
                    type: "Vec<EthLog>"
                },
                getProof: {
                    description: "Returns proof for account and storage.",
                    params: [{
                        name: "address",
                        type: "H160"
                    }, {
                        name: "storageKeys",
                        type: "Vec<H256>"
                    }, {
                        name: "number",
                        type: "BlockNumber"
                    }],
                    type: "EthAccount"
                },
                getStorageAt: {
                    description: "Returns content of the storage at given address.",
                    params: [{
                        name: "address",
                        type: "H160"
                    }, {
                        name: "index",
                        type: "U256"
                    }, {
                        isHistoric: !0,
                        isOptional: !0,
                        name: "number",
                        type: "BlockNumber"
                    }],
                    type: "H256"
                },
                getTransactionByBlockHashAndIndex: {
                    description: "Returns transaction at given block hash and index.",
                    params: [{
                        name: "hash",
                        type: "H256"
                    }, {
                        name: "index",
                        type: "U256"
                    }],
                    type: "EthTransaction"
                },
                getTransactionByBlockNumberAndIndex: {
                    description: "Returns transaction by given block number and index.",
                    params: [{
                        name: "number",
                        type: "BlockNumber"
                    }, {
                        name: "index",
                        type: "U256"
                    }],
                    type: "EthTransaction"
                },
                getTransactionByHash: {
                    description: "Get transaction by its hash.",
                    params: [{
                        name: "hash",
                        type: "H256"
                    }],
                    type: "EthTransaction"
                },
                getTransactionCount: {
                    description: "Returns the number of transactions sent from given address at given time (block number).",
                    params: [{
                        name: "hash",
                        type: "H256"
                    }, {
                        isHistoric: !0,
                        isOptional: !0,
                        name: "number",
                        type: "BlockNumber"
                    }],
                    type: "U256"
                },
                getTransactionReceipt: {
                    description: "Returns transaction receipt by transaction hash.",
                    params: [{
                        name: "hash",
                        type: "H256"
                    }],
                    type: "EthReceipt"
                },
                getUncleByBlockHashAndIndex: {
                    description: "Returns an uncles at given block and index.",
                    params: [{
                        name: "hash",
                        type: "H256"
                    }, {
                        name: "index",
                        type: "U256"
                    }],
                    type: "EthRichBlock"
                },
                getUncleByBlockNumberAndIndex: {
                    description: "Returns an uncles at given block and index.",
                    params: [{
                        name: "number",
                        type: "BlockNumber"
                    }, {
                        name: "index",
                        type: "U256"
                    }],
                    type: "EthRichBlock"
                },
                getUncleCountByBlockHash: {
                    description: "Returns the number of uncles in a block with given hash.",
                    params: [{
                        name: "hash",
                        type: "H256"
                    }],
                    type: "U256"
                },
                getUncleCountByBlockNumber: {
                    description: "Returns the number of uncles in a block with given block number.",
                    params: [{
                        name: "number",
                        type: "BlockNumber"
                    }],
                    type: "U256"
                },
                getWork: {
                    description: "Returns the hash of the current block, the seedHash, and the boundary condition to be met.",
                    params: [],
                    type: "EthWork"
                },
                hashrate: {
                    description: "Returns the number of hashes per second that the node is mining with.",
                    params: [],
                    type: "U256"
                },
                mining: {
                    description: "Returns true if client is actively mining new blocks.",
                    params: [],
                    type: "bool"
                },
                newBlockFilter: {
                    description: "Returns id of new block filter.",
                    params: [],
                    type: "U256"
                },
                newFilter: {
                    description: "Returns id of new filter.",
                    params: [{
                        name: "filter",
                        type: "EthFilter"
                    }],
                    type: "U256"
                },
                newPendingTransactionFilter: {
                    description: "Returns id of new block filter.",
                    params: [],
                    type: "U256"
                },
                protocolVersion: {
                    description: "Returns protocol version encoded as a string (quotes are necessary).",
                    params: [],
                    type: "u64"
                },
                sendRawTransaction: {
                    description: "Sends signed transaction, returning its hash.",
                    params: [{
                        name: "bytes",
                        type: "Bytes"
                    }],
                    type: "H256"
                },
                sendTransaction: {
                    description: "Sends transaction; will block waiting for signer to return the transaction hash",
                    params: [{
                        name: "tx",
                        type: "EthTransactionRequest"
                    }],
                    type: "H256"
                },
                submitHashrate: {
                    description: "Used for submitting mining hashrate.",
                    params: [{
                        name: "index",
                        type: "U256"
                    }, {
                        name: "hash",
                        type: "H256"
                    }],
                    type: "bool"
                },
                submitWork: {
                    description: "Used for submitting a proof-of-work solution.",
                    params: [{
                        name: "nonce",
                        type: "H64"
                    }, {
                        name: "headerHash",
                        type: "H256"
                    }, {
                        name: "mixDigest",
                        type: "H256"
                    }],
                    type: "bool"
                },
                subscribe: {
                    description: "Subscribe to Eth subscription.",
                    params: [{
                        name: "kind",
                        type: "EthSubKind"
                    }, {
                        isOptional: !0,
                        name: "params",
                        type: "EthSubParams"
                    }],
                    pubsub: ["subscription", "subscribe", "unsubscribe"],
                    type: "Null"
                },
                syncing: {
                    description: "Returns an object with data about the sync status or false.",
                    params: [],
                    type: "EthSyncStatus"
                },
                uninstallFilter: {
                    description: "Uninstalls filter.",
                    params: [{
                        name: "index",
                        type: "U256"
                    }],
                    type: "bool"
                }
            });
            t.rpc = n
        },
        11370: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    methods: {
                        description: "Retrieves the list of RPC methods that are exposed by the node",
                        params: [],
                        type: "RpcMethods"
                    }
                },
                types: {
                    RpcMethods: {
                        version: "u32",
                        methods: "Vec<Text>"
                    }
                }
            }
        },
        11371: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    hasKey: {
                        description: "Returns true if the keystore has private keys for the given public key and key type.",
                        params: [{
                            name: "publicKey",
                            type: "Bytes"
                        }, {
                            name: "keyType",
                            type: "Text"
                        }],
                        type: "bool"
                    },
                    hasSessionKeys: {
                        description: "Returns true if the keystore has private keys for the given session public keys.",
                        params: [{
                            name: "sessionKeys",
                            type: "Bytes"
                        }],
                        type: "bool"
                    },
                    removeExtrinsic: {
                        description: "Remove given extrinsic from the pool and temporarily ban it to prevent reimporting",
                        params: [{
                            name: "bytesOrHash",
                            type: "Vec<ExtrinsicOrHash>"
                        }],
                        type: "Vec<Hash>"
                    },
                    insertKey: {
                        description: "Insert a key into the keystore.",
                        params: [{
                            name: "keyType",
                            type: "Text"
                        }, {
                            name: "suri",
                            type: "Text"
                        }, {
                            name: "publicKey",
                            type: "Bytes"
                        }],
                        type: "Bytes"
                    },
                    rotateKeys: {
                        description: "Generate new session keys and returns the corresponding public keys",
                        params: [],
                        type: "Bytes"
                    },
                    pendingExtrinsics: {
                        description: "Returns all pending extrinsics, potentially grouped by sender",
                        params: [],
                        type: "Vec<Extrinsic>"
                    },
                    submitExtrinsic: {
                        isSigned: !0,
                        description: "Submit a fully formatted extrinsic for block inclusion",
                        params: [{
                            name: "extrinsic",
                            type: "Extrinsic"
                        }],
                        type: "Hash"
                    },
                    submitAndWatchExtrinsic: {
                        description: "Submit and subscribe to watch an extrinsic until unsubscribed",
                        isSigned: !0,
                        params: [{
                            name: "extrinsic",
                            type: "Extrinsic"
                        }],
                        pubsub: ["extrinsicUpdate", "submitAndWatchExtrinsic", "unwatchExtrinsic"],
                        type: "ExtrinsicStatus"
                    }
                },
                types: {
                    ExtrinsicOrHash: {
                        _enum: {
                            Hash: "Hash",
                            Extrinsic: "Bytes"
                        }
                    },
                    ExtrinsicStatus: {
                        _enum: {
                            Future: "Null",
                            Ready: "Null",
                            Broadcast: "Vec<Text>",
                            InBlock: "Hash",
                            Retracted: "Hash",
                            FinalityTimeout: "Hash",
                            Finalized: "Hash",
                            Usurped: "Hash",
                            Dropped: "Null",
                            Invalid: "Null"
                        }
                    }
                }
            }
        },
        11372: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    getHeader: {
                        alias: ["chain_getHead"],
                        description: "Retrieves the header for a specific block",
                        params: [{
                            name: "hash",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Header"
                    },
                    getBlock: {
                        description: "Get header and body of a relay chain block",
                        params: [{
                            name: "hash",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "SignedBlock"
                    },
                    getBlockHash: {
                        description: "Get the block hash for a specific block",
                        params: [{
                            name: "blockNumber",
                            type: "BlockNumber",
                            isOptional: !0
                        }],
                        type: "BlockHash"
                    },
                    getFinalizedHead: {
                        alias: ["chain_getFinalisedHead"],
                        description: "Get hash of the last finalized block in the canon chain",
                        params: [],
                        type: "BlockHash"
                    },
                    subscribeNewHeads: {
                        alias: ["chain_unsubscribeNewHeads", "subscribe_newHead", "unsubscribe_newHead"],
                        description: "Retrieves the best header via subscription",
                        params: [],
                        pubsub: ["newHead", "subscribeNewHead", "unsubscribeNewHead"],
                        type: "Header"
                    },
                    subscribeFinalizedHeads: {
                        alias: ["chain_subscribeFinalisedHeads", "chain_unsubscribeFinalisedHeads"],
                        description: "Retrieves the best finalized header via subscription",
                        params: [],
                        pubsub: ["finalizedHead", "subscribeFinalizedHeads", "unsubscribeFinalizedHeads"],
                        type: "Header"
                    },
                    subscribeAllHeads: {
                        description: "Retrieves the newest header via subscription",
                        params: [],
                        pubsub: ["allHead", "subscribeAllHeads", "unsubscribeAllHeads"],
                        type: "Header"
                    }
                },
                types: {
                    BlockHash: "Hash"
                }
            }
        },
        11373: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    getKeys: {
                        description: "Returns the keys with prefix from a child storage, leave empty to get all the keys",
                        params: [{
                            name: "childKey",
                            type: "PrefixedStorageKey"
                        }, {
                            name: "prefix",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "Hash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Vec<StorageKey>"
                    },
                    getKeysPaged: {
                        alias: ["childstate_getKeysPagedAt"],
                        description: "Returns the keys with prefix from a child storage with pagination support",
                        params: [{
                            name: "childKey",
                            type: "PrefixedStorageKey"
                        }, {
                            name: "prefix",
                            type: "StorageKey"
                        }, {
                            name: "count",
                            type: "u32"
                        }, {
                            name: "startKey",
                            type: "StorageKey",
                            isOptional: !0
                        }, {
                            name: "at",
                            type: "Hash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Vec<StorageKey>"
                    },
                    getStorage: {
                        description: "Returns a child storage entry at a specific block state",
                        params: [{
                            name: "childKey",
                            type: "PrefixedStorageKey"
                        }, {
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "Hash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Option<StorageData>"
                    },
                    getStorageEntries: {
                        description: "Returns child storage entries for multiple keys at a specific block state",
                        params: [{
                            name: "childKey",
                            type: "PrefixedStorageKey"
                        }, {
                            name: "keys",
                            type: "Vec<StorageKey>"
                        }, {
                            name: "at",
                            type: "Hash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Vec<Option<StorageData>>"
                    },
                    getStorageHash: {
                        description: "Returns the hash of a child storage entry at a block state",
                        params: [{
                            name: "childKey",
                            type: "PrefixedStorageKey"
                        }, {
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "Hash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Option<Hash>"
                    },
                    getStorageSize: {
                        description: "Returns the size of a child storage entry at a block state",
                        params: [{
                            name: "childKey",
                            type: "PrefixedStorageKey"
                        }, {
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "Hash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Option<u64>"
                    }
                },
                types: {
                    PrefixedStorageKey: "StorageKey"
                }
            }
        },
        11374: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    localStorageSet: {
                        description: "Set offchain local storage under given key and prefix",
                        params: [{
                            name: "kind",
                            type: "StorageKind"
                        }, {
                            name: "key",
                            type: "Bytes"
                        }, {
                            name: "value",
                            type: "Bytes"
                        }],
                        type: "Null"
                    },
                    localStorageGet: {
                        description: "Get offchain local storage under given key and prefix",
                        params: [{
                            name: "kind",
                            type: "StorageKind"
                        }, {
                            name: "key",
                            type: "Bytes"
                        }],
                        type: "Option<Bytes>"
                    }
                },
                types: {
                    StorageKind: {
                        _enum: {
                            PERSISTENT: 1,
                            LOCAL: 2
                        }
                    }
                }
            }
        },
        11375: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const n = [{
                name: "extrinsic",
                type: "Bytes"
            }, {
                name: "at",
                type: "BlockHash",
                isHistoric: !0,
                isOptional: !0
            }];
            var o = {
                rpc: {
                    queryInfo: {
                        description: "Retrieves the fee information for an encoded extrinsic",
                        params: n,
                        type: "RuntimeDispatchInfo"
                    },
                    queryFeeDetails: {
                        description: "Query the detailed fee of a given encoded extrinsic",
                        params: n,
                        type: "FeeDetails"
                    }
                },
                types: {
                    FeeDetails: {
                        inclusionFee: "Option<InclusionFee>"
                    },
                    InclusionFee: {
                        baseFee: "Balance",
                        lenFee: "Balance",
                        adjustedWeightFee: "Balance"
                    },
                    RuntimeDispatchInfo: {
                        weight: "Weight",
                        class: "DispatchClass",
                        partialFee: "Balance"
                    }
                }
            };
            t.default = o
        },
        11376: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                rpc: {
                    call: {
                        alias: ["state_callAt"],
                        description: "Perform a call to a builtin on the chain",
                        params: [{
                            name: "method",
                            type: "Text"
                        }, {
                            name: "data",
                            type: "Bytes"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Bytes"
                    },
                    getKeys: {
                        description: "Retrieves the keys with a certain prefix",
                        params: [{
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Vec<StorageKey>"
                    },
                    getPairs: {
                        description: "Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged)",
                        params: [{
                            name: "prefix",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Vec<KeyValue>"
                    },
                    getKeysPaged: {
                        alias: ["state_getKeysPagedAt"],
                        description: "Returns the keys with prefix with pagination support.",
                        params: [{
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "count",
                            type: "u32"
                        }, {
                            name: "startKey",
                            type: "StorageKey",
                            isOptional: !0
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Vec<StorageKey>"
                    },
                    getStorage: {
                        alias: ["state_getStorageAt"],
                        description: "Retrieves the storage for a key",
                        params: [{
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "StorageData"
                    },
                    getStorageHash: {
                        alias: ["state_getStorageHashAt"],
                        description: "Retrieves the storage hash",
                        params: [{
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Hash"
                    },
                    getStorageSize: {
                        alias: ["state_getStorageSizeAt"],
                        description: "Retrieves the storage size",
                        params: [{
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "u64"
                    },
                    getChildKeys: {
                        description: "Retrieves the keys with prefix of a specific child storage",
                        params: [{
                            name: "childStorageKey",
                            type: "StorageKey"
                        }, {
                            name: "childDefinition",
                            type: "StorageKey"
                        }, {
                            name: "childType",
                            type: "u32"
                        }, {
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Vec<StorageKey>"
                    },
                    getChildStorage: {
                        description: "Retrieves the child storage for a key",
                        params: [{
                            name: "childStorageKey",
                            type: "StorageKey"
                        }, {
                            name: "childDefinition",
                            type: "StorageKey"
                        }, {
                            name: "childType",
                            type: "u32"
                        }, {
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "StorageData"
                    },
                    getChildStorageHash: {
                        description: "Retrieves the child storage hash",
                        params: [{
                            name: "childStorageKey",
                            type: "StorageKey"
                        }, {
                            name: "childDefinition",
                            type: "StorageKey"
                        }, {
                            name: "childType",
                            type: "u32"
                        }, {
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Hash"
                    },
                    getChildStorageSize: {
                        description: "Retrieves the child storage size",
                        params: [{
                            name: "childStorageKey",
                            type: "StorageKey"
                        }, {
                            name: "childDefinition",
                            type: "StorageKey"
                        }, {
                            name: "childType",
                            type: "u32"
                        }, {
                            name: "key",
                            type: "StorageKey"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "u64"
                    },
                    getMetadata: {
                        description: "Returns the runtime metadata",
                        params: [{
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Metadata"
                    },
                    getRuntimeVersion: {
                        alias: ["chain_getRuntimeVersion"],
                        description: "Get the runtime version",
                        params: [{
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "RuntimeVersion"
                    },
                    queryStorage: {
                        description: "Query historical storage entries (by key) starting from a start block",
                        params: [{
                            name: "keys",
                            type: "Vec<StorageKey>"
                        }, {
                            name: "fromBlock",
                            type: "Hash"
                        }, {
                            name: "toBlock",
                            type: "BlockHash",
                            isOptional: !0
                        }],
                        type: "Vec<StorageChangeSet>"
                    },
                    queryStorageAt: {
                        description: "Query storage entries (by key) starting at block hash given as the second parameter",
                        params: [{
                            name: "keys",
                            type: "Vec<StorageKey>"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "Vec<StorageChangeSet>"
                    },
                    getChildReadProof: {
                        description: "Returns proof of storage for child key entries at a specific block state.",
                        params: [{
                            name: "childStorageKey",
                            type: "PrefixedStorageKey"
                        }, {
                            name: "keys",
                            type: "Vec<StorageKey>"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "ReadProof"
                    },
                    getReadProof: {
                        description: "Returns proof of storage entries at a specific block state",
                        params: [{
                            name: "keys",
                            type: "Vec<StorageKey>"
                        }, {
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "ReadProof"
                    },
                    subscribeRuntimeVersion: {
                        alias: ["chain_subscribeRuntimeVersion", "chain_unsubscribeRuntimeVersion"],
                        description: "Retrieves the runtime version via subscription",
                        params: [],
                        pubsub: ["runtimeVersion", "subscribeRuntimeVersion", "unsubscribeRuntimeVersion"],
                        type: "RuntimeVersion"
                    },
                    subscribeStorage: {
                        description: "Subscribes to storage changes for the provided keys",
                        params: [{
                            name: "keys",
                            type: "Vec<StorageKey>",
                            isOptional: !0
                        }],
                        pubsub: ["storage", "subscribeStorage", "unsubscribeStorage"],
                        type: "StorageChangeSet"
                    },
                    traceBlock: {
                        description: "Provides a way to trace the re-execution of a single block",
                        params: [{
                            name: "block",
                            type: "Hash"
                        }, {
                            name: "targets",
                            type: "Option<Text>"
                        }, {
                            name: "storageKeys",
                            type: "Option<Text>"
                        }, {
                            name: "methods",
                            type: "Option<Text>"
                        }],
                        type: "TraceBlockResponse"
                    },
                    trieMigrationStatus: {
                        description: "Check current migration state",
                        params: [{
                            name: "at",
                            type: "BlockHash",
                            isHistoric: !0,
                            isOptional: !0
                        }],
                        type: "MigrationStatusResult"
                    }
                },
                types: {
                    ApiId: "[u8; 8]",
                    BlockTrace: {
                        blockHash: "Text",
                        parentHash: "Text",
                        tracingTargets: "Text",
                        storageKeys: "Text",
                        spans: "Vec<BlockTraceSpan>",
                        events: "Vec<BlockTraceEvent>"
                    },
                    BlockTraceEvent: {
                        target: "Text",
                        data: "BlockTraceEventData",
                        parentId: "Option<u64>"
                    },
                    BlockTraceEventData: {
                        stringValues: "HashMap<Text, Text>"
                    },
                    BlockTraceSpan: {
                        id: "u64",
                        parentId: "Option<u64>",
                        name: "Text",
                        target: "Text",
                        wasm: "bool"
                    },
                    KeyValueOption: "(StorageKey, Option<StorageData>)",
                    MigrationStatusResult: {
                        topRemainingToMigrate: "u64",
                        childRemainingToMigrate: "u64"
                    },
                    ReadProof: {
                        at: "Hash",
                        proof: "Vec<Bytes>"
                    },
                    RuntimeVersionApi: "(ApiId, u32)",
                    RuntimeVersion: {
                        specName: "Text",
                        implName: "Text",
                        authoringVersion: "u32",
                        specVersion: "u32",
                        implVersion: "u32",
                        apis: "Vec<RuntimeVersionApi>",
                        transactionVersion: "u32"
                    },
                    RuntimeVersionPartial: {
                        specName: "Text",
                        specVersion: "u32"
                    },
                    SpecVersion: "u32",
                    StorageChangeSet: {
                        block: "Hash",
                        changes: "Vec<KeyValueOption>"
                    },
                    TraceBlockResponse: {
                        _enum: {
                            TraceError: "TraceError",
                            BlockTrace: "BlockTrace"
                        }
                    },
                    TraceError: {
                        error: "Text"
                    }
                }
            }
        },
        11377: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MetadataVersioned = void 0;
            var o = n(a(207)),
                r = a(5485),
                i = a(5458),
                s = a(11378),
                c = a(11379),
                u = a(11380),
                l = a(11381),
                d = a(11382),
                p = a(11384),
                m = a(11385),
                y = a(6323);

            function f(e, t, a) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, a)
            }
            var h = new WeakMap,
                g = new WeakMap,
                V = new WeakMap,
                b = new WeakMap;
            class MetadataVersioned extends r.Struct {
                constructor(e, t) {
                    super(e, {
                        magicNumber: m.MagicNumber,
                        metadata: "MetadataAll"
                    }, t), f(this, h, {
                        writable: !0,
                        value: new Map
                    }), f(this, g, {
                        writable: !0,
                        value: e => ((0, i.assert)(this.version <= e, () => `Cannot convert metadata from version ${this.version} to ${e}`), this.version === e)
                    }), f(this, V, {
                        writable: !0,
                        value: (e, t) => {
                            const a = "asV" + e,
                                n = "latest" === e ? "asV14" : "asV" + (e - 1);
                            return "latest" !== e && (0, o.default)(this, g).call(this, e) ? (0, o.default)(this, b).call(this)[a] : ((0, o.default)(this, h).has(e) || (0, o.default)(this, h).set(e, t(this.registry, this[n], this.version)), (0, o.default)(this, h).get(e))
                        }
                    }), f(this, b, {
                        writable: !0,
                        value: () => this.getT("metadata")
                    })
                }
                get registry() {
                    return super.registry
                }
                get asCallsOnly() {
                    return new MetadataVersioned(this.registry, {
                        magicNumber: this.magicNumber,
                        metadata: this.registry.createTypeUnsafe("MetadataAll", [(0, y.toCallsOnly)(this.registry, this.asLatest), 14])
                    })
                }
                get asV9() {
                    return (0, o.default)(this, g).call(this, 9), (0, o.default)(this, b).call(this).asV9
                }
                get asV10() {
                    return (0, o.default)(this, V).call(this, 10, s.toV10)
                }
                get asV11() {
                    return (0, o.default)(this, V).call(this, 11, c.toV11)
                }
                get asV12() {
                    return (0, o.default)(this, V).call(this, 12, u.toV12)
                }
                get asV13() {
                    return (0, o.default)(this, V).call(this, 13, l.toV13)
                }
                get asV14() {
                    return (0, o.default)(this, V).call(this, 14, d.toV14)
                }
                get asLatest() {
                    return (0, o.default)(this, V).call(this, "latest", p.toLatest)
                }
                get magicNumber() {
                    return this.getT("magicNumber")
                }
                get version() {
                    return (0, o.default)(this, b).call(this).index
                }
                getUniqTypes(e) {
                    return (0, y.getUniqTypes)(this.registry, this.asLatest, e)
                }
                toJSON() {
                    return this.asLatest, super.toJSON()
                }
            }
            t.MetadataVersioned = MetadataVersioned
        },
        11378: function(e, t, a) {
            "use strict";

            function n(e, t) {
                return t.toNumber() >= 2 ? e.createTypeUnsafe("StorageHasherV10", [t.toNumber() + 1]) : e.createTypeUnsafe("StorageHasherV10", [t])
            }

            function o(e, t) {
                return t.isMap ? [{
                    ...t.asMap,
                    hasher: n(e, t.asMap.hasher)
                }, 1] : t.isDoubleMap ? [{
                    ...t.asDoubleMap,
                    hasher: n(e, t.asDoubleMap.hasher),
                    key2Hasher: n(e, t.asDoubleMap.key2Hasher)
                }, 2] : [t.asPlain, 0]
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV10 = function(e, {
                modules: t
            }) {
                return e.createTypeUnsafe("MetadataV10", [{
                    modules: t.map(t => function(e, t) {
                        const a = t.storage.unwrapOr(null);
                        return e.createTypeUnsafe("ModuleMetadataV10", [{
                            ...t,
                            storage: a ? {
                                ...a,
                                items: a.items.map(t => ({
                                    ...t,
                                    type: e.createTypeUnsafe("StorageEntryTypeV10", o(e, t.type))
                                }))
                            } : null
                        }])
                    }(e, t))
                }])
            }
        },
        11379: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV11 = function(e, {
                modules: t
            }) {
                return e.createTypeUnsafe("MetadataV11", [{
                    extrinsic: {
                        signedExtensions: [],
                        version: 0
                    },
                    modules: t
                }])
            }
        },
        11380: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV12 = function(e, {
                extrinsic: t,
                modules: a
            }) {
                return e.createTypeUnsafe("MetadataV12", [{
                    extrinsic: t,
                    modules: a.map(t => e.createTypeUnsafe("ModuleMetadataV12", [{
                        ...t,
                        index: 255
                    }]))
                }])
            }
        },
        11381: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV13 = function(e, t) {
                return e.createTypeUnsafe("MetadataV13", [t])
            }
        },
        11382: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV14 = function(e, t, a) {
                const i = [];
                (function(e, ...t) {
                    for (let a = 0; a < t.length; a++) s(e, t[a])
                })(i, "Null", "u8", "u16", "u32", "u64"),
                function(e, t, a) {
                    e.register({
                        OriginCaller: {
                            _enum: t.map((e, t) => [e.name.toString(), a >= 12 ? e.index.toNumber() : t]).sort((e, t) => e[1] - t[1]).reduce((e, [t, a]) => {
                                for (let t = Object.keys(e).length; t < a; t++) e["Empty" + t] = "Null";
                                return e[t] = r.knownOrigins[t] || "Null", e
                            }, {})
                        }
                    })
                }(e, t.modules, a);
                const c = function(e, {
                        signedExtensions: t,
                        version: a
                    }) {
                        return e.createTypeUnsafe("ExtrinsicMetadataV14", [{
                            signedExtensions: t.map(e => ({
                                identifier: e,
                                type: 0
                            })),
                            type: 0,
                            version: a
                        }])
                    }(e, t.extrinsic),
                    u = t.modules.map(t => function(e, t, a, {
                        calls: r,
                        constants: i,
                        errors: s,
                        events: c,
                        storage: u
                    }) {
                        const l = (0, o.getAliasTypes)(t, (0, n.stringCamelCase)(a.name));
                        return t.createTypeUnsafe("PalletMetadataV14", [{
                            calls: r && d(e, t, a.name, r, l),
                            constants: p(e, t, i, l),
                            errors: s && m(e, t, a.name, s, l),
                            events: c && y(e, t, a.name, c, l),
                            index: a.index,
                            name: a.name,
                            storage: u && h(e, t, u, l)
                        }])
                    }(i, e, t, {
                        calls: t.calls.unwrapOr(null),
                        constants: t.constants,
                        errors: t.errors.length ? t.errors : null,
                        events: t.events.unwrapOr(null),
                        storage: t.storage.unwrapOr(null)
                    }));
                return e.createTypeUnsafe("MetadataV14", [{
                    extrinsic: c,
                    lookup: {
                        types: i.map((t, a) => e.createTypeUnsafe("PortableType", [{
                            id: a,
                            type: t
                        }]))
                    },
                    pallets: u
                }])
            };
            var n = a(5458),
                o = a(11383),
                r = a(7883);
            const i = [
                ["<", ">"],
                ["<", ","],
                [",", ">"],
                ["(", ")"],
                ["(", ","],
                [",", ","],
                [",", ")"]
            ];

            function s(e, t) {
                const a = t.toString(),
                    n = e.findIndex(({
                        def: e
                    }) => e.HistoricMetaCompat === a);
                return -1 !== n ? n : e.push({
                    def: {
                        HistoricMetaCompat: a
                    }
                }) - 1
            }

            function c(e, t) {
                return e.push({
                    def: {
                        Tuple: t
                    }
                }) - 1
            }

            function u(e, t, a, n) {
                return a.push({
                    def: {
                        Variant: {
                            variants: n
                        }
                    },
                    path: ["pallet_" + e.toString(), "pallet", t]
                }) - 1
            }

            function l(e, t) {
                t.forEach(t => {
                    const a = Object.keys(e).find(e => t.eq(e));
                    if (a) t.setOverride(e[a]);
                    else {
                        const a = t.toString(),
                            n = Object.entries(e).reduce((e, [t, a]) => i.reduce((e, [n, o]) => e.replace(`${n}${t}${o}`, `${n}${a}${o}`), e), a);
                        a !== n && t.setOverride(n)
                    }
                })
            }

            function d(e, t, a, n, o) {
                const r = n.map(({
                    args: a,
                    docs: n,
                    name: r
                }, i) => (l(o, a.map(({
                    type: e
                }) => e)), t.createTypeUnsafe("SiVariant", [{
                    docs: n,
                    fields: a.map(({
                        name: a,
                        type: n
                    }) => t.createTypeUnsafe("SiField", [{
                        name: a,
                        type: s(e, n)
                    }])),
                    index: i,
                    name: r
                }])));
                return t.createTypeUnsafe("PalletCallMetadataV14", [{
                    type: u(a, "Call", e, r)
                }])
            }

            function p(e, t, a, n) {
                return a.map(({
                    docs: a,
                    name: o,
                    type: r,
                    value: i
                }) => (l(n, [r]), t.createTypeUnsafe("PalletConstantMetadataV14", [{
                    docs: a,
                    name: o,
                    type: s(e, r),
                    value: i
                }])))
            }

            function m(e, t, a, n, o) {
                const r = n.map(({
                    docs: e,
                    name: a
                }, n) => t.createTypeUnsafe("SiVariant", [{
                    docs: e,
                    fields: [],
                    index: n,
                    name: a
                }]));
                return t.createTypeUnsafe("PalletErrorMetadataV14", [{
                    type: u(a, "Error", e, r)
                }])
            }

            function y(e, t, a, n, o) {
                const r = n.map(({
                    args: a,
                    docs: n,
                    name: r
                }, i) => (l(o, a), t.createTypeUnsafe("SiVariant", [{
                    docs: n,
                    fields: a.map(a => t.createTypeUnsafe("SiField", [{
                        type: s(e, a)
                    }])),
                    index: i,
                    name: r
                }])));
                return t.createTypeUnsafe("PalletEventMetadataV14", [{
                    type: u(a, "Event", e, r)
                }])
            }

            function f(e, t, a, {
                hashers: n,
                keys: o,
                value: r
            }) {
                return l(a, [r, ...Array.isArray(o) ? o : [o]]), t.createTypeUnsafe("StorageEntryTypeV14", [{
                    Map: {
                        hashers: n,
                        key: 1 === n.length ? s(e, o[0]) : c(e, o.map(t => s(e, t))),
                        value: s(e, r)
                    }
                }])
            }

            function h(e, t, {
                items: a,
                prefix: n
            }, o) {
                return t.createTypeUnsafe("PalletStorageMetadataV14", [{
                    items: a.map(({
                        docs: a,
                        fallback: n,
                        modifier: r,
                        name: i,
                        type: c
                    }) => {
                        let u;
                        if (c.isPlain) {
                            const a = c.asPlain;
                            l(o, [a]), u = t.createTypeUnsafe("StorageEntryTypeV14", [{
                                Plain: s(e, a)
                            }])
                        } else if (c.isMap) {
                            const a = c.asMap;
                            u = f(e, t, o, {
                                hashers: [a.hasher],
                                keys: [a.key],
                                value: a.value
                            })
                        } else if (c.isDoubleMap) {
                            const a = c.asDoubleMap;
                            u = f(e, t, o, {
                                hashers: [a.hasher, a.key2Hasher],
                                keys: [a.key1, a.key2],
                                value: a.value
                            })
                        } else {
                            const a = c.asNMap;
                            u = f(e, t, o, {
                                hashers: a.hashers,
                                keys: a.keyVec,
                                value: a.value
                            })
                        }
                        return t.createTypeUnsafe("StorageEntryMetadataV14", [{
                            docs: a,
                            fallback: n,
                            modifier: r,
                            name: i,
                            type: u
                        }])
                    }),
                    prefix: n
                }])
            }
        },
        11383: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getAliasTypes = function({
                knownTypes: e
            }, t) {
                var a;
                return (0, n.objectSpread)({}, o[t], null === (a = e.typesAlias) || void 0 === a ? void 0 : a[t])
            };
            var n = a(5458);
            const o = {
                assets: {
                    Approval: "AssetApproval",
                    ApprovalKey: "AssetApprovalKey",
                    Balance: "TAssetBalance",
                    DestroyWitness: "AssetDestroyWitness"
                },
                babe: {
                    EquivocationProof: "BabeEquivocationProof"
                },
                balances: {
                    Status: "BalanceStatus"
                },
                beefy: {
                    AuthorityId: "BeefyId"
                },
                contracts: {
                    StorageKey: "ContractStorageKey"
                },
                electionProviderMultiPhase: {
                    Phase: "ElectionPhase"
                },
                ethereum: {
                    Block: "EthBlock",
                    Header: "EthHeader",
                    Receipt: "EthReceipt",
                    Transaction: "EthTransaction",
                    TransactionStatus: "EthTransactionStatus"
                },
                evm: {
                    Account: "EvmAccount",
                    Log: "EvmLog",
                    Vicinity: "EvmVicinity"
                },
                grandpa: {
                    Equivocation: "GrandpaEquivocation",
                    EquivocationProof: "GrandpaEquivocationProof"
                },
                identity: {
                    Judgement: "IdentityJudgement"
                },
                inclusion: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                paraDisputes: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                paraInclusion: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                paraScheduler: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                paraShared: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                parachains: {
                    Id: "ParaId"
                },
                parasDisputes: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                parasInclusion: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                parasScheduler: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                parasShared: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                proposeParachain: {
                    Proposal: "ParachainProposal"
                },
                proxy: {
                    Announcement: "ProxyAnnouncement"
                },
                scheduler: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                shared: {
                    ValidatorIndex: "ParaValidatorIndex"
                },
                society: {
                    Judgement: "SocietyJudgement",
                    Vote: "SocietyVote"
                },
                staking: {
                    Compact: "CompactAssignments"
                },
                treasury: {
                    Proposal: "TreasuryProposal"
                },
                xcm: {
                    AssetId: "XcmAssetId"
                },
                xcmPallet: {
                    AssetId: "XcmAssetId"
                }
            }
        },
        11384: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toLatest = function(e, t, a) {
                return t
            }
        },
        11385: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MagicNumber = t.MAGIC_NUMBER = void 0;
            var n = a(5485),
                o = a(5458);
            t.MAGIC_NUMBER = 1635018093;
            class MagicNumber extends n.U32 {
                constructor(e, t) {
                    super(e, t), this.isEmpty || (0, o.assert)(this.eq(1635018093), () => `MagicNumber mismatch: expected ${e.createTypeUnsafe("u32",[1635018093]).toHex()}, found ${this.toHex()}`)
                }
            }
            t.MagicNumber = MagicNumber
        },
        11386: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateConstants = function(e, {
                pallets: t
            }, a) {
                const r = {};
                for (let a = 0; a < t.length; a++) {
                    const {
                        constants: i,
                        name: s
                    } = t[a];
                    i.isEmpty || (0, n.lazyMethod)(r, (0, n.stringCamelCase)(s), () => (0, n.lazyMethods)({}, i, t => {
                        const a = e.createTypeUnsafe(e.createLookupType(t.type), [(0, n.hexToU8a)(t.value.toHex())]);
                        return a.meta = t, a
                    }, o.objectNameToCamel))
                }
                return r
            };
            var n = a(5458),
                o = a(6133)
        },
        11387: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateEvents = function(e, {
                lookup: t,
                pallets: a
            }, c) {
                const u = {},
                    l = a.filter(s);
                for (let a = 0; a < l.length; a++) {
                    const {
                        events: s,
                        index: d,
                        name: p
                    } = l[a], m = c >= 12 ? d.toNumber() : a;
                    (0, n.lazyMethod)(u, (0, n.stringCamelCase)(p), () => (0, o.lazyVariants)(t, s.unwrap(), i.objectNameToString, a => ({
                        is: e => m === e.index[0] && a.index.eq(e.index[1]),
                        meta: e.createTypeUnsafe("EventMetadataLatest", [(0, r.variantToMeta)(t, a)])
                    })))
                }
                return u
            }, t.filterEventsSome = s;
            var n = a(5458),
                o = a(6128),
                r = a(7884),
                i = a(6133);

            function s({
                events: e
            }) {
                return e.isSome
            }
        },
        11388: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createUnchecked = function(e, t, a, o) {
                const r = o.fields,
                    i = (0, n.stringCamelCase)(o.name),
                    s = (...s) => ((0, n.assert)(r.length === s.length, () => `Extrinsic ${t}.${i} expects ${r.length} arguments, got ${s.length}.`), e.createTypeUnsafe("Call", [{
                        args: s,
                        callIndex: a
                    }, o]));
                return s.is = e => function(e, t) {
                    return e.callIndex[0] === t[0] && e.callIndex[1] === t[1]
                }(e, a), s.callIndex = a, s.meta = o, s.method = i, s.section = t, s.toJSON = () => o.toJSON(), s
            };
            var n = a(5458)
        },
        11389: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateStorage = function(e, {
                pallets: t
            }, a) {
                const u = (0, i.getStorage)(e);
                for (let a = 0; a < t.length; a++) {
                    const {
                        name: i,
                        storage: l
                    } = t[a];
                    if (l.isSome) {
                        const t = (0, n.stringCamelCase)(i),
                            {
                                items: a,
                                prefix: d
                            } = l.unwrap(),
                            p = d.toString();
                        (0, n.lazyMethod)(u, t, () => (0, n.lazyMethods)({
                            palletVersion: (0, s.createRuntimeFunction)({
                                method: "palletVersion",
                                prefix: p,
                                section: t
                            }, (0, r.createKeyRaw)(e, {
                                method: ":__STORAGE_VERSION__:",
                                prefix: i.toString()
                            }, r.NO_RAW_ARGS), c)(e)
                        }, a, a => (0, r.createFunction)(e, {
                            meta: a,
                            method: a.name.toString(),
                            prefix: p,
                            section: t
                        }, {}), o.objectNameToCamel))
                    }
                }
                return u
            };
            var n = a(5458),
                o = a(6133),
                r = a(7886),
                i = a(11391),
                s = a(7887);
            const c = {
                docs: "Returns the current pallet version from storage",
                type: "u16"
            }
        },
        11390: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getHasher = function(e) {
                return i[e.type] || r
            };
            var n = a(5458),
                o = a(5766);
            const r = e => (0, o.xxhashAsU8a)(e, 128),
                i = {
                    Blake2_128: e => (0, o.blake2AsU8a)(e, 128),
                    Blake2_128Concat: e => (0, n.u8aConcat)((0, o.blake2AsU8a)(e, 128), (0, n.u8aToU8a)(e)),
                    Blake2_256: e => (0, o.blake2AsU8a)(e, 256),
                    Identity: e => (0, n.u8aToU8a)(e),
                    Twox128: e => (0, o.xxhashAsU8a)(e, 128),
                    Twox256: e => (0, o.xxhashAsU8a)(e, 256),
                    Twox64Concat: e => (0, n.u8aConcat)((0, o.xxhashAsU8a)(e, 64), (0, n.u8aToU8a)(e))
                }
        },
        11391: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getStorage = function(e) {
                const t = {},
                    a = Object.entries(n.substrate);
                for (let n = 0; n < a.length; n++) t[a[n][0]] = a[n][1](e);
                return {
                    substrate: t
                }
            };
            var n = a(11392)
        },
        11392: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.substrate = void 0;
            var n = a(7887);

            function o(e, t, a) {
                return (0, n.createRuntimeFunction)({
                    method: e,
                    prefix: "Substrate",
                    section: "substrate"
                }, t, a)
            }
            const r = {
                changesTrieConfig: o("changesTrieConfig", ":changes_trie", {
                    docs: "Changes trie configuration is stored under this key.",
                    type: "u32"
                }),
                childStorageKeyPrefix: o("childStorageKeyPrefix", ":child_storage:", {
                    docs: "Prefix of child storage keys.",
                    type: "u32"
                }),
                code: o("code", ":code", {
                    docs: "Wasm code of the runtime.",
                    type: "Bytes"
                }),
                extrinsicIndex: o("extrinsicIndex", ":extrinsic_index", {
                    docs: "Current extrinsic index (u32) is stored under this key.",
                    type: "u32"
                }),
                heapPages: o("heapPages", ":heappages", {
                    docs: "Number of wasm linear memory pages required for execution of the runtime.",
                    type: "u64"
                })
            };
            t.substrate = r
        },
        11393: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PortableRegistry = void 0;
            var o = n(a(5471)),
                r = n(a(5472)),
                i = a(5485),
                s = a(5642),
                c = a(5458);
            const u = (0, c.logger)("PortableRegistry"),
                l = {
                    toNumber: () => -1
                },
                d = {
                    Char: "u32",
                    Str: "Text"
                },
                p = V(["pallet_democracy::vote::Vote", "pallet_identity::types::Data", "sp_core::crypto::AccountId32", "sp_runtime::generic::era::Era", "sp_runtime::multiaddress::MultiAddress", "account::AccountId20", "polkadot_runtime_common::claims::EthereumAddress", "primitive_types::*", "sp_arithmetic::per_things::*", "ink_env::types::*"]),
                m = V(["pallet_identity::types::BitFlags"]),
                y = ["bitvec::order::Lsb0", "BitOrderLsb0", "bitvec::order::Msb0", "BitOrderMsb0"],
                f = ["BoundedBTreeMap", "BoundedVec", "Box", "BTreeMap", "Cow", "Result", "Option", "WeakBoundedVec", "WrapperKeepOpaque", "WrapperOpaque"],
                h = ["entries", "hash", "keys", "new", "size"],
                g = ["generic", "misc", "pallet", "traits", "types"];

            function V(e) {
                return e.map(e => e.split("::"))
            }

            function b({
                path: e
            }) {
                return S(e).join("::")
            }

            function S(e) {
                return e.map(e => e.toString())
            }

            function C(e, t) {
                return e.length === t.length && e.every((e, a) => {
                    const n = t[a].toString();
                    if ("*" === e || e === n) return !0;
                    if (e.includes("*") && e.includes("_") && n.includes("_")) {
                        let t = e.split("_"),
                            a = n.split("_");
                        if ("*" === t[0]) {
                            const e = a.indexOf(t[1]); - 1 !== e && (t = t.slice(1), a = a.slice(e))
                        }
                        return 2 === t.length && "*" === t[1] && t[0] === a[0] || C(t, a)
                    }
                    return !1
                })
            }

            function v(e, {
                id: t,
                type: {
                    params: a,
                    path: n
                }
            }) {
                if (!n.length || f.includes(n[n.length - 1].toString())) return null;
                const o = n.map(e => (0, c.stringPascalCase)(e)).filter((e, t) => {
                    const a = e.toLowerCase();
                    return !(1 === t && g.includes(a) || t !== n.length - 1 && a === n[t + 1].toLowerCase())
                });
                let r = o.join("");
                if (2 === o.length && "RawOrigin" === o[1] && 2 === a.length && a[1].type.isSome) {
                    const t = e[a[1].type.unwrap().toNumber()];
                    2 === t.type.path.length && (r = `${r}${t.type.path[1].toString()}`)
                }
                return [t.toNumber(), r, a]
            }

            function I(e, t) {
                const a = [],
                    n = {};
                for (let e = 0; e < t.length; e++) {
                    const o = t[e],
                        r = v(t, t[e]);
                    r && a.push(r), n[o.id.toNumber()] = o
                }
                const o = function(e, t) {
                        const a = {};
                        return t.map(([n, o, r]) => {
                            if (!o) return null;
                            const i = t.filter(([, e]) => o === e);
                            if (!i.some(([e, , t]) => n !== e && (r.length !== t.length || r.some((e, a) => !e.name.eq(t[a].name) || e.type.unwrapOr(l).toNumber() !== t[a].type.unwrapOr(l).toNumber()))) || !i[0][2].length) return [n, o, r];
                            const s = i[0][2].findIndex(({
                                type: e
                            }, t) => i.every(([, , e]) => e[t].type.isSome) && i.every(([, , a], n) => 0 === n || !a[t].type.eq(e)));
                            if (-1 === s) return [n, o, r];
                            const c = new Array(i.length);
                            for (let t = 0; t < i.length; t++) {
                                const [a, n, o] = i[t], {
                                    def: u,
                                    path: l
                                } = e.getSiType(o[s].type.unwrap());
                                if (!u.isPrimitive && !l.length) return null;
                                c[t] = [a, u.isPrimitive ? `${n}${u.asPrimitive.toString()}` : `${n}${l[l.length-1].toString()}`, r]
                            }
                            if (function(e) {
                                    for (let t = 0; t < e.length; t++) {
                                        const [a, n] = e[t];
                                        for (let t = 0; t < e.length; t++) {
                                            const [o, r] = e[t];
                                            if (a !== o && n === r) return !1
                                        }
                                    }
                                    return !0
                                }(c)) {
                                for (let e = 0; e < c.length; e++) {
                                    const [t, n] = c[e];
                                    a[t] = n
                                }
                                return [n, o, r]
                            }
                            return null
                        }).filter(e => !!e).map(([e, t, n]) => [e, a[e] || t, n])
                    }(e, a),
                    r = {},
                    i = {},
                    s = {};
                for (let t = 0; t < o.length; t++) {
                    const [a, n, c] = o[t];
                    i[a] = n, r[n] = e.registry.createLookupType(a), s[n] = c
                }
                return [n, r, i, s]
            }
            var T = (0, r.default)("alias"),
                x = (0, r.default)("lookups"),
                P = (0, r.default)("names"),
                M = (0, r.default)("params"),
                k = (0, r.default)("typeDefs"),
                A = (0, r.default)("types"),
                B = (0, r.default)("createSiDef"),
                O = (0, r.default)("getLookupId"),
                N = (0, r.default)("extract"),
                E = (0, r.default)("extractArray"),
                H = (0, r.default)("extractBitSequence"),
                R = (0, r.default)("extractCompact"),
                _ = (0, r.default)("extractComposite"),
                D = (0, r.default)("extractCompositeSet"),
                w = (0, r.default)("extractFields"),
                L = (0, r.default)("extractFieldsAlias"),
                j = (0, r.default)("extractHistoric"),
                U = (0, r.default)("extractPrimitive"),
                F = (0, r.default)("extractAliasPath"),
                W = (0, r.default)("extractSequence"),
                K = (0, r.default)("extractTuple"),
                q = (0, r.default)("extractVariant"),
                J = (0, r.default)("extractVariantEnum");
            class PortableRegistry extends i.Struct {
                constructor(e, t, a) {
                    super(e, {
                        types: "Vec<PortableType>"
                    }, t), Object.defineProperty(this, J, {
                        value: ue
                    }), Object.defineProperty(this, q, {
                        value: ce
                    }), Object.defineProperty(this, K, {
                        value: se
                    }), Object.defineProperty(this, W, {
                        value: ie
                    }), Object.defineProperty(this, F, {
                        value: re
                    }), Object.defineProperty(this, U, {
                        value: oe
                    }), Object.defineProperty(this, j, {
                        value: ne
                    }), Object.defineProperty(this, L, {
                        value: ae
                    }), Object.defineProperty(this, w, {
                        value: te
                    }), Object.defineProperty(this, D, {
                        value: ee
                    }), Object.defineProperty(this, _, {
                        value: Y
                    }), Object.defineProperty(this, R, {
                        value: Z
                    }), Object.defineProperty(this, H, {
                        value: Q
                    }), Object.defineProperty(this, E, {
                        value: $
                    }), Object.defineProperty(this, N, {
                        value: X
                    }), Object.defineProperty(this, O, {
                        value: G
                    }), Object.defineProperty(this, B, {
                        value: z
                    }), Object.defineProperty(this, T, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, x, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, P, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, M, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, k, {
                        writable: !0,
                        value: {}
                    }), Object.defineProperty(this, A, {
                        writable: !0,
                        value: void 0
                    });
                    const [n, r, i, s] = I(this, this.types);
                    (0, o.default)(this, T)[T] = function(e, t) {
                        const a = Object.keys(e).some(e => !e.startsWith("Pallet")),
                            n = {};
                        if (e.SpRuntimeUncheckedExtrinsic) {
                            const [, {
                                type: t
                            }] = e.SpRuntimeUncheckedExtrinsic;
                            n[t.unwrap().toNumber()] = "Call"
                        } else a && !t && u.warn("Unable to determine runtime Call type, cannot inspect sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic");
                        if (e.FrameSystemEventRecord) {
                            const [{
                                type: t
                            }] = e.FrameSystemEventRecord;
                            n[t.unwrap().toNumber()] = "Event"
                        } else a && !t && u.warn("Unable to determine runtime Event type, cannot inspect frame_system::EventRecord");
                        return n
                    }(s, a), (0, o.default)(this, x)[x] = r, (0, o.default)(this, P)[P] = i, (0, o.default)(this, M)[M] = s, (0, o.default)(this, A)[A] = n
                }
                get names() {
                    return Object.values((0, o.default)(this, P)[P])
                }
                get types() {
                    return this.getT("types")
                }
                register() {
                    ! function(e, t, a, n) {
                        if (e.registry.register(t), n.SpRuntimeUncheckedExtrinsic) {
                            const [t, , o] = n.SpRuntimeUncheckedExtrinsic, r = e.getSiType(t.type.unwrap()), i = b(e.getSiType(o.type.unwrap()));
                            let s = b(r);
                            const c = "sp_runtime::multiaddress::MultiAddress" === s;
                            if (c) {
                                const [t] = r.params;
                                s = b(e.getSiType(t.type.unwrap()))
                            }
                            e.registry.register({
                                AccountId: ["sp_core::crypto::AccountId32"].includes(s) ? "AccountId32" : ["account::AccountId20", "primitive_types::H160"].includes(s) ? "AccountId20" : "AccountId32",
                                Address: c ? "MultiAddress" : "AccountId",
                                ExtrinsicSignature: ["sp_runtime::MultiSignature"].includes(i) ? "MultiSignature" : a[o.type.unwrap().toNumber()] || "MultiSignature"
                            })
                        }
                    }(this, (0, o.default)(this, x)[x], (0, o.default)(this, P)[P], (0, o.default)(this, M)[M])
                }
                getName(e) {
                    return (0, o.default)(this, P)[P][(0, o.default)(this, O)[O](e)]
                }
                getSiType(e) {
                    const t = ((0, o.default)(this, A)[A] || this.types)[(0, o.default)(this, O)[O](e)];
                    return (0, c.assert)(t, () => "PortableRegistry: Unable to find type with lookupId " + e.toString()), t.type
                }
                getTypeDef(e) {
                    const t = (0, o.default)(this, O)[O](e);
                    if (!(0, o.default)(this, k)[k][t]) {
                        const a = (0, o.default)(this, P)[P][t],
                            n = {
                                info: s.TypeDefInfo.DoNotConstruct,
                                lookupIndex: t,
                                lookupName: a,
                                type: this.registry.createLookupType(t)
                            };
                        a && ((0, o.default)(this, k)[k][t] = n);
                        const r = (0, o.default)(this, N)[N](this.getSiType(e), t);
                        a || ((0, o.default)(this, k)[k][t] = n), Object.keys(r).forEach(e => {
                            ("lookupName" !== e || r[e]) && ((0, o.default)(this, k)[k][t][e] = r[e])
                        }), r.info === s.TypeDefInfo.Plain && ((0, o.default)(this, k)[k][t].lookupNameRoot = (0, o.default)(this, k)[k][t].lookupName, delete(0, o.default)(this, k)[k][t].lookupName)
                    }
                    return (0, o.default)(this, k)[k][t]
                }
            }

            function z(e) {
                const t = this.getTypeDef(e),
                    a = e.toNumber();
                return [s.TypeDefInfo.DoNotConstruct, s.TypeDefInfo.Enum, s.TypeDefInfo.Struct].includes(t.info) && t.lookupName ? {
                    docs: t.docs,
                    info: s.TypeDefInfo.Si,
                    lookupIndex: a,
                    lookupName: (0, o.default)(this, P)[P][a],
                    type: this.registry.createLookupType(e)
                } : t
            }

            function G(e) {
                return (0, c.isString)(e) ? ((0, c.assert)(this.registry.isLookupType(e), () => "PortableRegistry: Expected a lookup string type, found " + e), parseInt(e.replace("Lookup", ""), 10)) : (0, c.isNumber)(e) ? e : e.toNumber()
            }

            function X(e, t) {
                const a = [...e.path].join("::");
                let n;
                const r = (0, o.default)(this, T)[T][t] || ((i = e.path).length && p.some(e => C(e, i)) ? i[i.length - 1].toString() : null);
                var i;
                try {
                    if (r) n = (0, o.default)(this, F)[F](t, r);
                    else switch (e.def.type) {
                        case "Array":
                            n = (0, o.default)(this, E)[E](t, e.def.asArray);
                            break;
                        case "BitSequence":
                            n = (0, o.default)(this, H)[H](t, e.def.asBitSequence);
                            break;
                        case "Compact":
                            n = (0, o.default)(this, R)[R](t, e.def.asCompact);
                            break;
                        case "Composite":
                            n = (0, o.default)(this, _)[_](t, e, e.def.asComposite);
                            break;
                        case "HistoricMetaCompat":
                            n = (0, o.default)(this, j)[j](t, e.def.asHistoricMetaCompat);
                            break;
                        case "Primitive":
                            n = (0, o.default)(this, U)[U](t, e);
                            break;
                        case "Sequence":
                            n = (0, o.default)(this, W)[W](t, e.def.asSequence);
                            break;
                        case "Tuple":
                            n = (0, o.default)(this, K)[K](t, e.def.asTuple);
                            break;
                        case "Variant":
                            n = (0, o.default)(this, q)[q](t, e, e.def.asVariant);
                            break;
                        default:
                            (0, c.assertUnreachable)(e.def.type)
                    }
                } catch (n) {
                    throw new Error(`PortableRegistry: ${t}${a?` (${a})`:""}: Error extracting ${(0,c.stringify)(e)}: ${n.message}`)
                }
                return (0, c.objectSpread)({
                    docs: S(e.docs),
                    namespace: a
                }, n)
            }

            function $(e, {
                len: t,
                type: a
            }) {
                return (0, c.assert)(!t || t.toNumber() <= 256, "Only support for [Type; <length>], where length <= 256"), (0, s.withTypeString)(this.registry, {
                    info: s.TypeDefInfo.VecFixed,
                    length: t.toNumber(),
                    sub: (0, o.default)(this, B)[B](a)
                })
            }

            function Q(e, {
                bitOrderType: t,
                bitStoreType: a
            }) {
                const n = (0, o.default)(this, B)[B](t),
                    r = (0, o.default)(this, B)[B](a),
                    [i, u] = y.includes(n.namespace || "") ? [n, r] : [r, n];
                return (0, c.assert)(y.includes(i.namespace || ""), () => "Unexpected bitOrder found as " + (i.namespace || "<unknown>")), (0, c.assert)(u.info === s.TypeDefInfo.Plain && "u8" === u.type, () => "Only u8 bitStore is currently supported, found " + u.type), {
                    info: s.TypeDefInfo.Plain,
                    type: "BitVec"
                }
            }

            function Z(e, {
                type: t
            }) {
                return (0, s.withTypeString)(this.registry, {
                    info: s.TypeDefInfo.Compact,
                    sub: (0, o.default)(this, B)[B](t)
                })
            }

            function Y(e, {
                params: t,
                path: a
            }, {
                fields: n
            }) {
                const r = a[0].toString(),
                    i = a[a.length - 1].toString();
                return 1 === a.length && "BTreeMap" === r ? (0, s.withTypeString)(this.registry, {
                    info: s.TypeDefInfo.BTreeMap,
                    sub: t.map(({
                        type: e
                    }) => (0, o.default)(this, B)[B](e.unwrap()))
                }) : ["Range", "RangeInclusive"].includes(r) ? (0, s.withTypeString)(this.registry, {
                    info: "Range" === r ? s.TypeDefInfo.Range : s.TypeDefInfo.RangeInclusive,
                    sub: (0, o.default)(this, B)[B](t[0].type.unwrap()),
                    type: r
                }) : ["WrapperKeepOpaque", "WrapperOpaque"].includes(i) ? (0, s.withTypeString)(this.registry, {
                    info: "WrapperKeepOpaque" === i ? s.TypeDefInfo.WrapperKeepOpaque : s.TypeDefInfo.WrapperOpaque,
                    sub: (0, o.default)(this, B)[B](t[0].type.unwrap()),
                    type: i
                }) : m.some(e => C(e, a)) ? (0, o.default)(this, D)[D](e, t, n) : (0, o.default)(this, w)[w](e, n)
            }

            function ee(e, t, a) {
                return (0, c.assert)(1 === t.length && 1 === a.length, "Set handling expects param/field as single entries"), (0, s.withTypeString)(this.registry, {
                    info: s.TypeDefInfo.Set,
                    length: this.registry.createTypeUnsafe(this.registry.createLookupType(a[0].type), []).bitLength(),
                    sub: this.getSiType(t[0].type.unwrap()).def.asVariant.variants.map(({
                        index: e,
                        name: t
                    }) => ({
                        index: e.toNumber(),
                        info: s.TypeDefInfo.Plain,
                        name: t.toString(),
                        type: "Null"
                    }))
                })
            }

            function te(e, t) {
                let a = !0,
                    n = !0;
                for (let e = 0; e < t.length; e++) {
                    const {
                        name: o
                    } = t[e];
                    a = a && o.isSome, n = n && o.isNone
                }
                if ((0, c.assert)(n || a, "Invalid fields type detected, expected either Tuple (all unnamed) or Struct (all named)"), 0 === t.length) return {
                    info: s.TypeDefInfo.Null,
                    type: "Null"
                };
                if (n && 1 === t.length) {
                    const a = (0, o.default)(this, B)[B](t[0].type);
                    return (0, c.objectSpread)({}, a, -1 === e ? {} : {
                        lookupIndex: e,
                        lookupName: (0, o.default)(this, P)[P][e],
                        lookupNameRoot: a.lookupName
                    }, t[0].typeName.isSome ? {
                        typeName: (0, i.sanitize)(t[0].typeName.unwrap())
                    } : null)
                }
                const [r, u] = (0, o.default)(this, L)[L](t);
                return (0, s.withTypeString)(this.registry, (0, c.objectSpread)({
                    info: n ? s.TypeDefInfo.Tuple : s.TypeDefInfo.Struct
                }, u.size ? {
                    alias: u
                } : null, -1 === e ? {} : {
                    lookupIndex: e,
                    lookupName: (0, o.default)(this, P)[P][e]
                }, {
                    sub: r
                }))
            }

            function ae(e) {
                const t = new Map,
                    a = new Array(e.length);
                for (let n = 0; n < e.length; n++) {
                    const {
                        docs: r,
                        name: s,
                        type: u,
                        typeName: l
                    } = e[n], d = (0, o.default)(this, B)[B](u);
                    if (s.isNone) a[n] = d;
                    else {
                        let e = (0, c.stringCamelCase)(s.unwrap()),
                            o = null;
                        e.includes("#") ? (o = e, e = o.replace(/#/g, "_")) : h.includes(e) && (o = e, e += "_"), o && t.set(e, o), a[n] = (0, c.objectSpread)({}, d, {
                            docs: S(r),
                            name: e
                        }, l.isSome ? {
                            typeName: (0, i.sanitize)(l.unwrap())
                        } : null)
                    }
                }
                return [a, t]
            }

            function ne(e, t) {
                return (0, c.objectSpread)({}, (0, s.getTypeDef)(t), {
                    displayName: t.toString(),
                    isFromSi: !0
                })
            }

            function oe(e, t) {
                const a = t.def.asPrimitive.type.toString();
                return {
                    info: s.TypeDefInfo.Plain,
                    type: d[a] || a.toLowerCase()
                }
            }

            function re(e, t) {
                return {
                    info: s.TypeDefInfo.Plain,
                    type: t
                }
            }

            function ie(e, {
                type: t
            }) {
                const a = (0, o.default)(this, B)[B](t);
                return "u8" === a.type ? {
                    info: s.TypeDefInfo.Plain,
                    type: "Bytes"
                } : (0, s.withTypeString)(this.registry, {
                    info: s.TypeDefInfo.Vec,
                    lookupIndex: e,
                    lookupName: (0, o.default)(this, P)[P][e],
                    sub: a
                })
            }

            function se(e, t) {
                if (0 === t.length) return {
                    info: s.TypeDefInfo.Null,
                    type: "Null"
                };
                if (1 === t.length) return this.getTypeDef(t[0]);
                const a = t.map(e => (0, o.default)(this, B)[B](e));
                return (0, s.withTypeString)(this.registry, {
                    info: s.TypeDefInfo.Tuple,
                    lookupIndex: e,
                    lookupName: (0, o.default)(this, P)[P][e],
                    sub: a
                })
            }

            function ce(e, {
                params: t,
                path: a
            }, {
                variants: n
            }) {
                const r = a[0].toString();
                return "Option" === r ? (0, s.withTypeString)(this.registry, {
                    info: s.TypeDefInfo.Option,
                    sub: (0, o.default)(this, B)[B](t[0].type.unwrap())
                }) : "Result" === r ? (0, s.withTypeString)(this.registry, {
                    info: s.TypeDefInfo.Result,
                    sub: t.map(({
                        type: e
                    }, t) => (0, c.objectSpread)({
                        name: ["Ok", "Error"][t]
                    }, (0, o.default)(this, B)[B](e.unwrap())))
                }) : 0 === n.length ? {
                    info: s.TypeDefInfo.Null,
                    type: "Null"
                } : (0, o.default)(this, J)[J](e, n)
            }

            function ue(e, t) {
                const a = [];
                return [...t].sort((e, t) => e.index.cmp(t.index)).forEach(({
                    fields: e,
                    index: t,
                    name: n
                }) => {
                    const r = t.toNumber();
                    for (; a.length !== r;) a.push({
                        index: a.length,
                        info: s.TypeDefInfo.Null,
                        name: "__Unused" + a.length,
                        type: "Null"
                    });
                    a.push((0, c.objectSpread)((0, o.default)(this, w)[w](-1, e), {
                        index: t.toNumber(),
                        name: n.toString()
                    }))
                }), (0, s.withTypeString)(this.registry, {
                    info: s.TypeDefInfo.Enum,
                    lookupIndex: e,
                    lookupName: (0, o.default)(this, P)[P][e],
                    sub: a
                })
            }
            t.PortableRegistry = PortableRegistry
        },
        11394: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toV1 = function(e, t) {
                return t.map((t, a) => e.createType("PortableType", {
                    id: a + 1,
                    type: {
                        def: c(e, t),
                        docs: [],
                        params: t.params.map(t => e.createType("Si1TypeParameter", {
                            type: t.toNumber()
                        })),
                        path: t.path.map(e => e.toString())
                    }
                }))
            };
            var n = a(5458);

            function o(e) {
                return (t, {
                    type: a
                }) => t.createType("Si1TypeDef", {
                    [e]: {
                        type: a.toNumber()
                    }
                })
            }
            const r = o("Compact");

            function i(e, t) {
                return t.map(({
                    docs: t,
                    name: a,
                    type: n,
                    typeName: o
                }) => e.createType("Si1Field", {
                    docs: t,
                    name: a,
                    type: n.toNumber(),
                    typeName: o
                }))
            }
            const s = o("Sequence");

            function c(e, {
                def: t,
                path: a
            }) {
                let o;
                switch (t.type) {
                    case "Array":
                        o = function(e, {
                            len: t,
                            type: a
                        }) {
                            return e.createType("Si1TypeDef", {
                                Array: {
                                    len: t,
                                    type: a.toNumber()
                                }
                            })
                        }(e, t.asArray);
                        break;
                    case "BitSequence":
                        o = function(e, {
                            bitOrderType: t,
                            bitStoreType: a
                        }) {
                            return e.createType("Si1TypeDef", {
                                BitSequence: {
                                    bitOrderType: t.toNumber(),
                                    bitStoreType: a.toNumber()
                                }
                            })
                        }(e, t.asBitSequence);
                        break;
                    case "Compact":
                        o = r(e, t.asCompact);
                        break;
                    case "Composite":
                        o = function(e, {
                            fields: t
                        }) {
                            return e.createType("Si1TypeDef", {
                                Composite: {
                                    fields: i(e, t)
                                }
                            })
                        }(e, t.asComposite);
                        break;
                    case "Phantom":
                        o = function(e, t) {
                            return console.warn(`Converting phantom type ${t.map(e=>e.toString()).join("::")} to empty tuple`), e.createType("Si1TypeDef", {
                                Tuple: []
                            })
                        }(e, a);
                        break;
                    case "Primitive":
                        o = function(e, t) {
                            return e.createType("Si1TypeDef", {
                                Primitive: t.toString()
                            })
                        }(e, t.asPrimitive);
                        break;
                    case "Sequence":
                        o = s(e, t.asSequence);
                        break;
                    case "Tuple":
                        o = function(e, t) {
                            return e.createType("Si1TypeDef", {
                                Tuple: t.map(e => e.toNumber())
                            })
                        }(e, t.asTuple);
                        break;
                    case "Variant":
                        o = function(e, {
                            variants: t
                        }) {
                            return e.createType("Si1TypeDef", {
                                Variant: {
                                    variants: t.map(({
                                        discriminant: t,
                                        docs: a,
                                        fields: n,
                                        name: o
                                    }, r) => e.createType("Si1Variant", {
                                        docs: a,
                                        fields: i(e, n),
                                        index: t.isSome ? t.unwrap().toNumber() : r,
                                        name: o
                                    }))
                                }
                            })
                        }(e, t.asVariant);
                        break;
                    default:
                        (0, n.assertUnreachable)(t.type)
                }
                return o
            }
        },
        11401: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(5458),
                o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = r(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                        } n.default = e, a && a.set(e, n);
                    return n
                }(a(6871));

            function r(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (r = function(e) {
                    return e ? a : t
                })(e)
            }
            const i = {};
            Object.keys(o).forEach(e => Object.entries(o[e].rpc || {}).forEach(([t, a]) => {
                const o = a.aliasSection || e;
                i[o] || (i[o] = {}), i[o][t] = (0, n.objectSpread)({}, a, {
                    isSubscription: !!a.pubsub,
                    jsonrpc: `${o}_${t}`,
                    method: t,
                    section: o
                })
            }));
            var s = i;
            t.default = s
        },
        11403: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Metadata", {
                enumerable: !0,
                get: function() {
                    return n.Metadata
                }
            }), Object.defineProperty(t, "PortableRegistry", {
                enumerable: !0,
                get: function() {
                    return o.PortableRegistry
                }
            }), Object.defineProperty(t, "decorateConstants", {
                enumerable: !0,
                get: function() {
                    return r.decorateConstants
                }
            }), Object.defineProperty(t, "decorateExtrinsics", {
                enumerable: !0,
                get: function() {
                    return r.decorateExtrinsics
                }
            }), Object.defineProperty(t, "decorateStorage", {
                enumerable: !0,
                get: function() {
                    return r.decorateStorage
                }
            }), Object.defineProperty(t, "expandMetadata", {
                enumerable: !0,
                get: function() {
                    return r.expandMetadata
                }
            });
            var n = a(6873),
                o = a(6874),
                r = a(6872)
        },
        5722: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), a(11398);
            var n = a(11400);
            Object.keys(n).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === n[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return n[e]
                    }
                }))
            }))
        },
        6133: function(e, t, a) {
            "use strict";

            function n(e) {
                return ({
                    name: t
                }) => e(t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.objectNameToString = t.objectNameToCamel = void 0;
            const o = n(a(5458).stringCamelCase);
            t.objectNameToCamel = o;
            const r = n(e => e.toString());
            t.objectNameToString = r
        },
        6323: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "flattenUniq", {
                enumerable: !0,
                get: function() {
                    return n.flattenUniq
                }
            }), Object.defineProperty(t, "getSiName", {
                enumerable: !0,
                get: function() {
                    return o.getSiName
                }
            }), Object.defineProperty(t, "getUniqTypes", {
                enumerable: !0,
                get: function() {
                    return r.getUniqTypes
                }
            }), Object.defineProperty(t, "toCallsOnly", {
                enumerable: !0,
                get: function() {
                    return i.toCallsOnly
                }
            }), Object.defineProperty(t, "validateTypes", {
                enumerable: !0,
                get: function() {
                    return s.validateTypes
                }
            });
            var n = a(6870),
                o = a(11301),
                r = a(11302),
                i = a(11304),
                s = a(7880)
        },
        6870: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.flattenUniq = function e(t, a = []) {
                for (let n = 0; n < t.length; n++) {
                    const o = t[n];
                    Array.isArray(o) ? e(o, a) : a.push(o)
                }
                return [...new Set(a)]
            }
        },
        6871: function(e, t, a) {
            "use strict";
            var n = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = {
                assets: !0,
                authorship: !0,
                aura: !0,
                babe: !0,
                balances: !0,
                beefy: !0,
                collective: !0,
                consensus: !0,
                contracts: !0,
                democracy: !0,
                dev: !0,
                elections: !0,
                engine: !0,
                evm: !0,
                extrinsics: !0,
                genericAsset: !0,
                gilt: !0,
                grandpa: !0,
                identity: !0,
                imOnline: !0,
                lottery: !0,
                mmr: !0,
                offences: !0,
                proxy: !0,
                recovery: !0,
                scheduler: !0,
                session: !0,
                society: !0,
                staking: !0,
                support: !0,
                syncstate: !0,
                system: !0,
                treasury: !0,
                txpayment: !0,
                uniques: !0,
                utility: !0,
                vesting: !0,
                attestations: !0,
                bridges: !0,
                claims: !0,
                crowdloan: !0,
                cumulus: !0,
                parachains: !0,
                poll: !0,
                purchase: !0,
                xcm: !0,
                contractsAbi: !0,
                eth: !0,
                rpc: !0,
                author: !0,
                chain: !0,
                childstate: !0,
                offchain: !0,
                payment: !0,
                state: !0
            };
            Object.defineProperty(t, "assets", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "attestations", {
                enumerable: !0,
                get: function() {
                    return W.default
                }
            }), Object.defineProperty(t, "aura", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "author", {
                enumerable: !0,
                get: function() {
                    return te.default
                }
            }), Object.defineProperty(t, "authorship", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "babe", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "balances", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "beefy", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "bridges", {
                enumerable: !0,
                get: function() {
                    return K.default
                }
            }), Object.defineProperty(t, "chain", {
                enumerable: !0,
                get: function() {
                    return ae.default
                }
            }), Object.defineProperty(t, "childstate", {
                enumerable: !0,
                get: function() {
                    return ne.default
                }
            }), Object.defineProperty(t, "claims", {
                enumerable: !0,
                get: function() {
                    return q.default
                }
            }), Object.defineProperty(t, "collective", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(t, "consensus", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(t, "contracts", {
                enumerable: !0,
                get: function() {
                    return y.default
                }
            }), Object.defineProperty(t, "contractsAbi", {
                enumerable: !0,
                get: function() {
                    return Z.default
                }
            }), Object.defineProperty(t, "crowdloan", {
                enumerable: !0,
                get: function() {
                    return J.default
                }
            }), Object.defineProperty(t, "cumulus", {
                enumerable: !0,
                get: function() {
                    return z.default
                }
            }), Object.defineProperty(t, "democracy", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(t, "dev", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(t, "elections", {
                enumerable: !0,
                get: function() {
                    return g.default
                }
            }), Object.defineProperty(t, "engine", {
                enumerable: !0,
                get: function() {
                    return V.default
                }
            }), Object.defineProperty(t, "eth", {
                enumerable: !0,
                get: function() {
                    return Y.default
                }
            }), Object.defineProperty(t, "evm", {
                enumerable: !0,
                get: function() {
                    return b.default
                }
            }), Object.defineProperty(t, "extrinsics", {
                enumerable: !0,
                get: function() {
                    return S.default
                }
            }), Object.defineProperty(t, "genericAsset", {
                enumerable: !0,
                get: function() {
                    return C.default
                }
            }), Object.defineProperty(t, "gilt", {
                enumerable: !0,
                get: function() {
                    return v.default
                }
            }), Object.defineProperty(t, "grandpa", {
                enumerable: !0,
                get: function() {
                    return I.default
                }
            }), Object.defineProperty(t, "identity", {
                enumerable: !0,
                get: function() {
                    return T.default
                }
            }), Object.defineProperty(t, "imOnline", {
                enumerable: !0,
                get: function() {
                    return x.default
                }
            }), Object.defineProperty(t, "lottery", {
                enumerable: !0,
                get: function() {
                    return P.default
                }
            }), Object.defineProperty(t, "mmr", {
                enumerable: !0,
                get: function() {
                    return M.default
                }
            }), Object.defineProperty(t, "offchain", {
                enumerable: !0,
                get: function() {
                    return oe.default
                }
            }), Object.defineProperty(t, "offences", {
                enumerable: !0,
                get: function() {
                    return k.default
                }
            }), Object.defineProperty(t, "parachains", {
                enumerable: !0,
                get: function() {
                    return G.default
                }
            }), Object.defineProperty(t, "payment", {
                enumerable: !0,
                get: function() {
                    return re.default
                }
            }), Object.defineProperty(t, "poll", {
                enumerable: !0,
                get: function() {
                    return X.default
                }
            }), Object.defineProperty(t, "proxy", {
                enumerable: !0,
                get: function() {
                    return A.default
                }
            }), Object.defineProperty(t, "purchase", {
                enumerable: !0,
                get: function() {
                    return $.default
                }
            }), Object.defineProperty(t, "recovery", {
                enumerable: !0,
                get: function() {
                    return B.default
                }
            }), Object.defineProperty(t, "rpc", {
                enumerable: !0,
                get: function() {
                    return ee.default
                }
            }), Object.defineProperty(t, "scheduler", {
                enumerable: !0,
                get: function() {
                    return O.default
                }
            }), Object.defineProperty(t, "session", {
                enumerable: !0,
                get: function() {
                    return N.default
                }
            }), Object.defineProperty(t, "society", {
                enumerable: !0,
                get: function() {
                    return E.default
                }
            }), Object.defineProperty(t, "staking", {
                enumerable: !0,
                get: function() {
                    return H.default
                }
            }), Object.defineProperty(t, "state", {
                enumerable: !0,
                get: function() {
                    return ie.default
                }
            }), Object.defineProperty(t, "support", {
                enumerable: !0,
                get: function() {
                    return R.default
                }
            }), Object.defineProperty(t, "syncstate", {
                enumerable: !0,
                get: function() {
                    return _.default
                }
            }), Object.defineProperty(t, "system", {
                enumerable: !0,
                get: function() {
                    return D.default
                }
            }), Object.defineProperty(t, "treasury", {
                enumerable: !0,
                get: function() {
                    return w.default
                }
            }), Object.defineProperty(t, "txpayment", {
                enumerable: !0,
                get: function() {
                    return L.default
                }
            }), Object.defineProperty(t, "uniques", {
                enumerable: !0,
                get: function() {
                    return j.default
                }
            }), Object.defineProperty(t, "utility", {
                enumerable: !0,
                get: function() {
                    return U.default
                }
            }), Object.defineProperty(t, "vesting", {
                enumerable: !0,
                get: function() {
                    return F.default
                }
            }), Object.defineProperty(t, "xcm", {
                enumerable: !0,
                get: function() {
                    return Q.default
                }
            });
            var r = a(11305);
            Object.keys(r).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                }))
            }));
            var i = n(a(11315)),
                s = n(a(11316)),
                c = n(a(11317)),
                u = n(a(11318)),
                l = n(a(11319)),
                d = n(a(11320)),
                p = n(a(11321)),
                m = n(a(11322)),
                y = n(a(11323)),
                f = n(a(11325)),
                h = n(a(11326)),
                g = n(a(11327)),
                V = n(a(11328)),
                b = n(a(11329)),
                S = n(a(11330)),
                C = n(a(11331)),
                v = n(a(11332)),
                I = n(a(11333)),
                T = n(a(11334)),
                x = n(a(11335)),
                P = n(a(11336)),
                M = n(a(11337)),
                k = n(a(11338)),
                A = n(a(11339)),
                B = n(a(11340)),
                O = n(a(11341)),
                N = n(a(11342)),
                E = n(a(11343)),
                H = n(a(11344)),
                R = n(a(11345)),
                _ = n(a(11346)),
                D = n(a(11347)),
                w = n(a(11348)),
                L = n(a(11349)),
                j = n(a(11350)),
                U = n(a(11351)),
                F = n(a(11352)),
                W = n(a(11353)),
                K = n(a(11354)),
                q = n(a(11355)),
                J = n(a(11356)),
                z = n(a(11357)),
                G = n(a(11358)),
                X = n(a(11361)),
                $ = n(a(11362)),
                Q = n(a(11363)),
                Z = n(a(11367)),
                Y = n(a(11368)),
                ee = n(a(11370)),
                te = n(a(11371)),
                ae = n(a(11372)),
                ne = n(a(11373)),
                oe = n(a(11374)),
                re = n(a(11375)),
                ie = n(a(11376))
        },
        6872: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "decorateConstants", {
                enumerable: !0,
                get: function() {
                    return r.decorateConstants
                }
            }), Object.defineProperty(t, "decorateErrors", {
                enumerable: !0,
                get: function() {
                    return i.decorateErrors
                }
            }), Object.defineProperty(t, "decorateEvents", {
                enumerable: !0,
                get: function() {
                    return s.decorateEvents
                }
            }), Object.defineProperty(t, "decorateExtrinsics", {
                enumerable: !0,
                get: function() {
                    return c.decorateExtrinsics
                }
            }), Object.defineProperty(t, "decorateStorage", {
                enumerable: !0,
                get: function() {
                    return u.decorateStorage
                }
            }), t.expandMetadata = function(e, t) {
                (0, n.assert)(t instanceof o.Metadata, "You need to pass a valid Metadata instance to Decorated");
                const a = t.asLatest,
                    l = t.version;
                return {
                    consts: (0, r.decorateConstants)(e, a, l),
                    errors: (0, i.decorateErrors)(e, a, l),
                    events: (0, s.decorateEvents)(e, a, l),
                    query: (0, u.decorateStorage)(e, a, l),
                    registry: e,
                    tx: (0, c.decorateExtrinsics)(e, a, l)
                }
            }, Object.defineProperty(t, "filterCallsSome", {
                enumerable: !0,
                get: function() {
                    return c.filterCallsSome
                }
            }), Object.defineProperty(t, "filterEventsSome", {
                enumerable: !0,
                get: function() {
                    return s.filterEventsSome
                }
            });
            var n = a(5458),
                o = a(6873),
                r = a(11386),
                i = a(7884),
                s = a(11387),
                c = a(7885),
                u = a(11389)
        },
        6873: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Metadata = void 0;
            var n = a(5458),
                o = a(11377);
            const r = new Uint8Array([109, 101, 116, 97, 9]);
            class Metadata extends o.MetadataVersioned {
                constructor(e, t) {
                    super(e, (0, n.isU8a)(t) || (0, n.isHex)(t) ? function e(t, a) {
                        try {
                            return new o.MetadataVersioned(t, a)
                        } catch (n) {
                            if (9 === a[4]) return a[4] = 10, e(t, a);
                            throw n
                        }
                    }(e, function e(t) {
                        return (0, n.isHex)(t) ? e((0, n.u8aToU8a)(t)) : 0 === t.length ? r : t
                    }(t)) : new o.MetadataVersioned(e, t))
                }
            }
            t.Metadata = Metadata
        },
        6874: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PortableRegistry", {
                enumerable: !0,
                get: function() {
                    return n.PortableRegistry
                }
            }), Object.defineProperty(t, "convertSiV0toV1", {
                enumerable: !0,
                get: function() {
                    return o.toV1
                }
            });
            var n = a(11393),
                o = a(11394)
        },
        7876: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = a(11279);
            Object.keys(n).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === n[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return n[e]
                    }
                }))
            }));
            var o = a(11289);
            Object.keys(o).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            }));
            var r = a(11299);
            Object.keys(r).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                }))
            }))
        },
        7880: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.validateTypes = function(e, t, a) {
                const n = (0, r.flattenUniq)((0, o.extractTypes)(a)).filter(t => !e.hasType(t) && !e.isLookupType(t)).sort();
                if (0 !== n.length) {
                    const e = "Unknown types found, no types for " + n.join(", ");
                    if (t) throw new Error(e);
                    i.warn(e)
                }
                return a
            };
            var n = a(5458),
                o = a(11303),
                r = a(6870);
            const i = (0, n.logger)("metadata")
        },
        7881: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AllHashers = void 0;
            t.AllHashers = {
                Blake2_128: null,
                Blake2_256: null,
                Blake2_128Concat: null,
                Twox128: null,
                Twox256: null,
                Twox64Concat: null,
                Identity: null
            }
        },
        7882: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.v1 = t.Si1Variant = void 0;
            const n = {
                name: "Text",
                fields: "Vec<Si1Field>",
                index: "u8",
                docs: "Vec<Text>"
            };
            t.Si1Variant = n;
            const o = {
                Si1Field: {
                    name: "Option<Text>",
                    type: "Si1LookupTypeId",
                    typeName: "Option<Text>",
                    docs: "Vec<Text>"
                },
                Si1LookupTypeId: "Compact<u32>",
                Si1Path: "Si0Path",
                Si1Type: {
                    path: "Si1Path",
                    params: "Vec<Si1TypeParameter>",
                    def: "Si1TypeDef",
                    docs: "Vec<Text>"
                },
                Si1TypeDef: {
                    _enum: {
                        Composite: "Si1TypeDefComposite",
                        Variant: "Si1TypeDefVariant",
                        Sequence: "Si1TypeDefSequence",
                        Array: "Si1TypeDefArray",
                        Tuple: "Si1TypeDefTuple",
                        Primitive: "Si1TypeDefPrimitive",
                        Compact: "Si1TypeDefCompact",
                        BitSequence: "Si1TypeDefBitSequence",
                        HistoricMetaCompat: "Type"
                    }
                },
                Si1TypeDefArray: {
                    len: "u32",
                    type: "Si1LookupTypeId"
                },
                Si1TypeDefBitSequence: {
                    bitStoreType: "Si1LookupTypeId",
                    bitOrderType: "Si1LookupTypeId"
                },
                Si1TypeDefCompact: {
                    type: "Si1LookupTypeId"
                },
                Si1TypeDefComposite: {
                    fields: "Vec<Si1Field>"
                },
                Si1TypeDefPrimitive: "Si0TypeDefPrimitive",
                Si1TypeDefSequence: {
                    type: "Si1LookupTypeId"
                },
                Si1TypeDefTuple: "Vec<Si1LookupTypeId>",
                Si1TypeParameter: {
                    name: "Text",
                    type: "Option<Si1LookupTypeId>"
                },
                Si1TypeDefVariant: {
                    variants: "Vec<Si1Variant>"
                },
                Si1Variant: n
            };
            t.v1 = o
        },
        7883: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.knownOrigins = t.default = void 0;
            var n = a(5458);
            t.knownOrigins = {
                Council: "CollectiveOrigin",
                System: "SystemOrigin",
                TechnicalCommittee: "CollectiveOrigin",
                Xcm: "XcmOrigin",
                XcmPallet: "XcmOrigin",
                Authority: "AuthorityOrigin",
                GeneralCouncil: "CollectiveOrigin"
            };
            var o = {
                rpc: {},
                types: (0, n.objectSpread)({}, {
                    Fixed64: "Int<64, Fixed64>",
                    FixedI64: "Int<64, FixedI64>",
                    FixedU64: "UInt<64, FixedU64>",
                    Fixed128: "Int<128, Fixed128>",
                    FixedI128: "Int<128, FixedI128>",
                    FixedU128: "UInt<128, FixedU128>",
                    I32F32: "Int<64, I32F32>",
                    U32F32: "UInt<64, U32F32>",
                    PerU16: "UInt<16, PerU16>",
                    Perbill: "UInt<32, Perbill>",
                    Percent: "UInt<8, Percent>",
                    Permill: "UInt<32, Permill>",
                    Perquintill: "UInt<64, Perquintill>"
                }, {
                    AccountId: "AccountId32",
                    AccountId20: "GenericEthereumAccountId",
                    AccountId32: "GenericAccountId",
                    AccountIdOf: "AccountId",
                    AccountIndex: "GenericAccountIndex",
                    Address: "MultiAddress",
                    AssetId: "u32",
                    Balance: "UInt<128, Balance>",
                    BalanceOf: "Balance",
                    Block: "GenericBlock",
                    BlockNumber: "u32",
                    BlockNumberFor: "BlockNumber",
                    BlockNumberOf: "BlockNumber",
                    Call: "GenericCall",
                    CallHash: "Hash",
                    CallHashOf: "CallHash",
                    ChangesTrieConfiguration: {
                        digestInterval: "u32",
                        digestLevels: "u32"
                    },
                    ChangesTrieSignal: {
                        _enum: {
                            NewConfiguration: "Option<ChangesTrieConfiguration>"
                        }
                    },
                    ConsensusEngineId: "GenericConsensusEngineId",
                    CodecHash: "Hash",
                    CrateVersion: {
                        major: "u16",
                        minor: "u8",
                        patch: "u8"
                    },
                    Digest: {
                        logs: "Vec<DigestItem>"
                    },
                    DigestItem: {
                        _enum: {
                            Other: "Bytes",
                            AuthoritiesChange: "Vec<AuthorityId>",
                            ChangesTrieRoot: "Hash",
                            SealV0: "SealV0",
                            Consensus: "Consensus",
                            Seal: "Seal",
                            PreRuntime: "PreRuntime",
                            ChangesTrieSignal: "ChangesTrieSignal",
                            RuntimeEnvironmentUpdated: "Null"
                        }
                    },
                    ExtrinsicsWeight: {
                        normal: "Weight",
                        operational: "Weight"
                    },
                    H32: "[u8; 4; H32]",
                    H64: "[u8; 8; H64]",
                    H128: "[u8; 16; H128]",
                    H160: "[u8; 20; H160]",
                    H256: "[u8; 32; H256]",
                    H512: "[u8; 64; H512]",
                    H1024: "[u8; 128; H1024]",
                    H2048: "[u8; 256; H2048]",
                    Hash: "H256",
                    Header: {
                        parentHash: "Hash",
                        number: "Compact<BlockNumber>",
                        stateRoot: "Hash",
                        extrinsicsRoot: "Hash",
                        digest: "Digest"
                    },
                    HeaderPartial: {
                        parentHash: "Hash",
                        number: "BlockNumber"
                    },
                    IndicesLookupSource: "GenericLookupSource",
                    Index: "u32",
                    Justification: "(ConsensusEngineId, EncodedJustification)",
                    EncodedJustification: "Bytes",
                    Justifications: "Vec<Justification>",
                    KeyValue: "(StorageKey, StorageData)",
                    KeyTypeId: "u32",
                    LockIdentifier: "[u8; 8]",
                    LookupSource: "MultiAddress",
                    LookupTarget: "AccountId",
                    ModuleId: "LockIdentifier",
                    MultiAddress: "GenericMultiAddress",
                    MultiSigner: {
                        _enum: {
                            Ed25519: "[u8; 32]",
                            Sr25519: "[u8; 32]",
                            Ecdsa: "[u8; 33]"
                        }
                    },
                    Moment: "UInt<64, Moment>",
                    OpaqueCall: "Bytes",
                    Origin: "DoNotConstruct<Origin>",
                    OriginCaller: {
                        _enum: {
                            System: "SystemOrigin"
                        }
                    },
                    PalletId: "LockIdentifier",
                    PalletsOrigin: "OriginCaller",
                    PalletVersion: {
                        major: "u16",
                        minor: "u8",
                        patch: "u8"
                    },
                    Pays: {
                        _enum: ["Yes", "No"]
                    },
                    Phantom: "Null",
                    PhantomData: "Null",
                    Releases: {
                        _enum: ["V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"]
                    },
                    RuntimeDbWeight: {
                        read: "Weight",
                        write: "Weight"
                    },
                    SignedBlock: "SignedBlockWithJustifications",
                    SignedBlockWithJustification: {
                        block: "Block",
                        justification: "Option<EncodedJustification>"
                    },
                    SignedBlockWithJustifications: {
                        block: "Block",
                        justifications: "Option<Justifications>"
                    },
                    Slot: "u64",
                    StorageData: "Bytes",
                    StorageProof: {
                        trieNodes: "Vec<Bytes>"
                    },
                    TransactionPriority: "u64",
                    TransactionInfo: {
                        _alias: {
                            dataSize: "size"
                        },
                        chunkRoot: "H256",
                        contentHash: "H256",
                        dataSize: "u32",
                        blockChunks: "u32"
                    },
                    TransactionStorageProof: {
                        chunk: "Vec<u8>",
                        proof: "Vec<Vec<u8>>"
                    },
                    ValidatorId: "AccountId",
                    ValidatorIdOf: "ValidatorId",
                    Weight: "u64",
                    WeightMultiplier: "Fixed64",
                    PreRuntime: "(ConsensusEngineId, Bytes)",
                    SealV0: "(u64, Signature)",
                    Seal: "(ConsensusEngineId, Bytes)",
                    Consensus: "(ConsensusEngineId, Bytes)"
                })
            };
            t.default = o
        },
        7884: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decorateErrors = function(e, {
                lookup: t,
                pallets: a
            }, s) {
                const c = {};
                for (let u = 0; u < a.length; u++) {
                    const {
                        errors: l,
                        index: d,
                        name: p
                    } = a[u];
                    if (l.isSome) {
                        const a = s >= 12 ? d.toNumber() : u;
                        (0, n.lazyMethod)(c, (0, n.stringCamelCase)(p), () => (0, o.lazyVariants)(t, l.unwrap(), r.objectNameToString, o => ({
                            is: ({
                                error: e,
                                index: t
                            }) => t.eq(a) && ((0, n.isU8a)(e) ? e[0] === o.index.toNumber() : e.eq(o.index)),
                            meta: e.createTypeUnsafe("ErrorMetadataLatest", [i(t, o)])
                        })))
                    }
                }
                return c
            }, t.variantToMeta = i;
            var n = a(5458),
                o = a(6128),
                r = a(6133);

            function i(e, t) {
                return (0, n.objectSpread)({
                    args: t.fields.map(({
                        type: t
                    }) => e.getTypeDef(t).type)
                }, t)
            }
        },
        7885: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createCallFunction = u, t.decorateExtrinsics = function(e, {
                lookup: t,
                pallets: a
            }, r) {
                const s = {},
                    l = a.filter(c);
                for (let a = 0; a < l.length; a++) {
                    const {
                        calls: c,
                        index: d,
                        name: p
                    } = l[a], m = (0, n.stringCamelCase)(p), y = r >= 12 ? d.toNumber() : a;
                    (0, n.lazyMethod)(s, m, () => (0, o.lazyVariants)(t, c.unwrap(), i.objectNameToCamel, a => u(e, t, a, m, y)))
                }
                return s
            }, t.filterCallsSome = c;
            var n = a(5458),
                o = a(6128),
                r = a(6323),
                i = a(6133),
                s = a(11388);

            function c({
                calls: e
            }) {
                return e.isSome
            }

            function u(e, t, a, o, i) {
                const {
                    fields: c,
                    index: u
                } = a, l = new Array(c.length);
                for (let e = 0; e < c.length; e++) {
                    const {
                        name: a,
                        type: o,
                        typeName: i
                    } = c[e];
                    l[e] = (0, n.objectSpread)({
                        name: (0, n.stringCamelCase)(a.unwrapOr("param" + e)),
                        type: (0, r.getSiName)(t, o)
                    }, i.isSome ? {
                        typeName: i.unwrap()
                    } : null)
                }
                return (0, s.createUnchecked)(e, o, new Uint8Array([i, u.toNumber()]), e.createTypeUnsafe("FunctionMetadataLatest", [(0, n.objectSpread)({
                    args: l
                }, a)]))
            }
        },
        7886: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NO_RAW_ARGS = void 0, t.createFunction = function(e, t, a) {
                const {
                    meta: {
                        type: r
                    }
                } = t, i = function(e, t, a) {
                    const {
                        meta: n,
                        method: r,
                        prefix: i,
                        section: s
                    } = t, u = function(e, t, a) {
                        const {
                            meta: {
                                type: n
                            }
                        } = t;
                        let r = null;
                        return (...i) => {
                            if (n.isPlain) return r || (r = a.skipHashing ? (0, o.compactAddLength)((0, o.u8aToU8a)(a.key)) : y(e, t, c)), r;
                            const {
                                hashers: s,
                                key: u
                            } = n.asMap;
                            return 1 === s.length ? y(e, t, {
                                args: i,
                                hashers: s,
                                keys: [u]
                            }) : y(e, t, {
                                args: i,
                                hashers: s,
                                keys: e.lookup.getSiType(u).def.asTuple
                            })
                        }
                    }(e, t, a);
                    return u.inspect = function(e, t, a) {
                        const {
                            meta: {
                                type: n
                            }
                        } = t;
                        return (...r) => {
                            if (n.isPlain) return a.skipHashing ? {
                                inner: [],
                                name: "wellKnown",
                                outer: [(0, o.u8aToU8a)(a.key)]
                            } : d(e, t, c);
                            const {
                                hashers: i,
                                key: s
                            } = n.asMap;
                            return 1 === i.length ? d(e, t, {
                                args: r,
                                hashers: i,
                                keys: [s]
                            }) : d(e, t, {
                                args: r,
                                hashers: i,
                                keys: e.lookup.getSiType(s).def.asTuple
                            })
                        }
                    }(e, t, a), u.meta = n, u.method = (0, o.stringCamelCase)(r), u.prefix = i, u.section = s, u.toJSON = () => (0, o.objectSpread)({
                        storage: {
                            method: r,
                            prefix: i,
                            section: s
                        }
                    }, n.toJSON()), u
                }(e, t, a);
                r.isMap && function(e, t, a) {
                    const {
                        meta: {
                            type: r
                        },
                        method: i,
                        section: s
                    } = t;
                    a.iterKey = function(e, {
                        meta: {
                            docs: t,
                            name: a,
                            type: n
                        },
                        section: o
                    }, {
                        method: r
                    }, i) {
                        const s = e.createTypeUnsafe("StorageEntryMetadataLatest", [{
                            docs: t,
                            fallback: e.createTypeUnsafe("Bytes", []),
                            modifier: e.createTypeUnsafe("StorageEntryModifierLatest", [1]),
                            name: a,
                            type: e.createTypeUnsafe("StorageEntryTypeLatest", [n.asMap.key, 0])
                        }]);
                        i.meta = s;
                        const c = (...t) => e.createTypeUnsafe("StorageKey", [i(...t), {
                            method: r,
                            section: o
                        }]);
                        return c.meta = s, c
                    }(e, t, a, (...a) => {
                        if ((0, o.assert)(0 === a.length || r.isMap && a.length < r.asMap.hashers.length, () => `Iteration ${(0,o.stringCamelCase)(s||"unknown")}.${(0,o.stringCamelCase)(i||"unknown")} needs arguments to be at least one less than the full arguments, found [${a.join(", ")}]`), a.length && r.isMap) {
                            const {
                                hashers: o,
                                key: i
                            } = r.asMap, s = 1 === o.length ? [i] : e.lookup.getSiType(i).def.asTuple;
                            return new n.Raw(e, p(e, t, {
                                args: a,
                                hashers: o.slice(0, a.length),
                                keys: s.slice(0, a.length)
                            }))
                        }
                        return new n.Raw(e, p(e, t, c))
                    })
                }(e, t, i);
                return i.keyPrefix = (...e) => i.iterKey && i.iterKey(...e) || (0, o.compactStripLength)(i())[1], i
            }, t.createKeyInspect = d, t.createKeyRaw = p, t.createKeyRawParts = l;
            var n = a(5485),
                o = a(5458),
                r = a(5766),
                i = a(6323),
                s = a(11390);
            const c = {
                args: [],
                hashers: [],
                keys: []
            };

            function u({
                method: e,
                section: t
            }, {
                args: a,
                keys: n
            }) {
                (0, o.assert)(Array.isArray(a), () => `Call to ${(0,o.stringCamelCase)(t||"unknown")}.${(0,o.stringCamelCase)(e||"unknown")} needs ${n.length} arguments`), (0, o.assert)(a.filter(m).length === n.length, () => `Call to ${(0,o.stringCamelCase)(t||"unknown")}.${(0,o.stringCamelCase)(e||"unknown")} needs ${n.length} arguments, found [${a.join(", ")}]`)
            }

            function l(e, t, {
                args: a,
                hashers: n,
                keys: o
            }) {
                const i = new Array(o.length);
                for (let t = 0; t < o.length; t++) i[t] = (0, s.getHasher)(n[t])(e.createTypeUnsafe(e.createLookupType(o[t]), [a[t]]).toU8a());
                return [
                    [(0, r.xxhashAsU8a)(t.prefix, 128), (0, r.xxhashAsU8a)(t.method, 128)], i
                ]
            }

            function d(e, t, a) {
                u(t, a);
                const {
                    meta: n
                } = t, [o, r] = l(e, t, a);
                let s = [];
                if (n.type.isMap) {
                    const {
                        hashers: t,
                        key: a
                    } = n.type.asMap;
                    s = 1 === t.length ? [`${t[0].type}(${(0,i.getSiName)(e.lookup,a)})`] : e.lookup.getSiType(a).def.asTuple.map((a, n) => `${t[n].type}(${(0,i.getSiName)(e.lookup,a)})`)
                }
                const c = ["module", "method"].concat(...a.args.map((e, t) => s[t]));
                return {
                    inner: o.concat(...r).map((e, t) => ({
                        name: c[t],
                        outer: [e]
                    }))
                }
            }

            function p(e, t, a) {
                const [n, r] = l(e, t, a);
                return (0, o.u8aConcat)(...n, ...r)
            }

            function m(e) {
                return !(0, o.isUndefined)(e)
            }

            function y(e, t, a) {
                return u(t, a), (0, o.compactAddLength)(p(e, t, a))
            }
            t.NO_RAW_ARGS = c
        },
        7887: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createRuntimeFunction = function({
                method: e,
                prefix: t,
                section: a
            }, o, {
                docs: i,
                type: s
            }) {
                return c => {
                    var u;
                    return (0, n.createFunction)(c, {
                        meta: c.createTypeUnsafe("StorageEntryMetadataLatest", [{
                            docs: c.createTypeUnsafe("Vec<Text>", [
                                [i]
                            ]),
                            modifier: c.createTypeUnsafe("StorageEntryModifierLatest", ["Required"]),
                            name: c.createTypeUnsafe("Text", [e]),
                            toJSON: () => o,
                            type: c.createTypeUnsafe("StorageEntryTypeLatest", [{
                                Plain: (null === (u = r(c, s)) || void 0 === u ? void 0 : u.id) || 0
                            }])
                        }]),
                        method: e,
                        prefix: t,
                        section: a
                    }, {
                        key: o,
                        skipHashing: !0
                    })
                }
            };
            var n = a(7886);

            function o(e, t) {
                const a = t.toLowerCase();
                return e.lookup.types.find(e => e.type.def.isPrimitive && e.type.def.asPrimitive.toString().toLowerCase() === a || e.type.def.isHistoricMetaCompat && e.type.def.asHistoricMetaCompat.toString().toLowerCase() === a)
            }

            function r(e, t) {
                let a = o(e, t);
                if (!a && "Bytes" === t) {
                    const n = o(e, "u8");
                    n && (a = e.lookup.types.find(e => e.type.def.isSequence && e.type.def.asSequence.type.eq(n.id) || e.type.def.isHistoricMetaCompat && e.type.def.asHistoricMetaCompat.eq(t)))
                }
                return a || console.warn(`Unable to map ${t} to a lookup index`), a
            }
        }
    }
]);