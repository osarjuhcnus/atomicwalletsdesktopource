(window.webpackJsonp = window.webpackJsonp || []).push([
    [239], {
        5569: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), s(n(9047), t), s(n(6178), t), s(n(6487), t), s(n(6483), t), s(n(5921), t), s(n(6484), t), s(n(7176), t), s(n(6482), t), s(n(6177), t), s(n(9052), t), s(n(6035), t), s(n(6179), t), s(n(6488), t), s(n(6180), t), s(n(9053), t), s(n(6491), t), s(n(6485), t), s(n(6489), t), s(n(5920), t), s(n(6490), t), s(n(6036), t), s(n(6481), t), s(n(7177), t), s(n(5570), t), s(n(6486), t)
        },
        5570: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NullType = t.TypePlaceholder = t.isTyped = t.PrimitiveValue = t.TypedValue = t.CustomType = t.PrimitiveType = t.TypeCardinality = t.Type = void 0;
            const r = n(9048),
                s = n(5612);
            class Type {
                constructor(e, t = [], n = TypeCardinality.fixed(1)) {
                    s.guardValueIsSet("name", e), this.name = e, this.typeParameters = t, this.cardinality = n
                }
                getName() {
                    return this.name
                }
                getClassName() {
                    return Type.ClassName
                }
                getClassHierarchy() {
                    return r.getJavascriptPrototypesInHierarchy(this, e => e.belongsToTypesystem).map(e => e.getClassName()).reverse()
                }
                getFullyQualifiedName() {
                    let e = this.getTypeParameters().map(e => e.getFullyQualifiedName()).join(", ");
                    return this.isGenericType() ? `erdjs:types:${this.getName()}<${e}>` : "erdjs:types:" + this.getName()
                }
                hasExactClass(e) {
                    return this.getClassName() == e
                }
                hasClassOrSuperclass(e) {
                    return this.getClassHierarchy().includes(e)
                }
                getTypeParameters() {
                    return this.typeParameters
                }
                isGenericType() {
                    return this.typeParameters.length > 0
                }
                getFirstTypeParameter() {
                    return s.guardTrue(this.typeParameters.length > 0, "type parameters length > 0"), this.typeParameters[0]
                }
                toString() {
                    let e = this.getTypeParameters().map(e => e.toString()).join(", "),
                        t = e ? `<${e}>` : "";
                    return `${this.name}${t}`
                }
                equals(e) {
                    return Type.equals(this, e)
                }
                static equals(e, t) {
                    return e.getFullyQualifiedName() == t.getFullyQualifiedName()
                }
                static equalsMany(e, t) {
                    return e.every((e, n) => e.equals(t[n]))
                }
                static isAssignableFromMany(e, t) {
                    return e.every((e, n) => e.isAssignableFrom(t[n]))
                }
                differs(e) {
                    return !this.equals(e)
                }
                valueOf() {
                    return this.name
                }
                isAssignableFrom(e) {
                    if (!Type.equalsMany(this.getTypeParameters(), e.getTypeParameters())) return !1;
                    let t = this.getFullyQualifiedName();
                    return !!Type.getFullyQualifiedNamesInHierarchy(e).includes(t) || e.hasClassOrSuperclass(this.getClassName())
                }
                static getFullyQualifiedNamesInHierarchy(e) {
                    return r.getJavascriptPrototypesInHierarchy(e, e => e.belongsToTypesystem).map(t => t.getFullyQualifiedName.call(e))
                }
                getNamesOfDependencies() {
                    const e = [];
                    for (const t of this.typeParameters) e.push(t.getName()), e.push(...t.getNamesOfDependencies());
                    return [...new Set(e)]
                }
                toJSON() {
                    return {
                        name: this.name,
                        typeParameters: this.typeParameters.map(e => e.toJSON())
                    }
                }
                getCardinality() {
                    return this.cardinality
                }
                belongsToTypesystem() {}
            }
            t.Type = Type, Type.ClassName = "Type";
            class TypeCardinality {
                constructor(e, t) {
                    this.lowerBound = e, this.upperBound = t
                }
                static fixed(e) {
                    return new TypeCardinality(e, e)
                }
                static variable(e) {
                    return new TypeCardinality(0, e)
                }
                isSingular() {
                    return 1 == this.lowerBound && 1 == this.upperBound
                }
                isSingularOrNone() {
                    return 0 == this.lowerBound && 1 == this.upperBound
                }
                isComposite() {
                    return 1 != this.upperBound
                }
                isFixed() {
                    return this.lowerBound == this.upperBound
                }
                getLowerBound() {
                    return this.lowerBound
                }
                getUpperBound() {
                    return this.upperBound || TypeCardinality.MaxCardinality
                }
            }
            t.TypeCardinality = TypeCardinality, TypeCardinality.MaxCardinality = 4096;
            class PrimitiveType extends Type {
                constructor(e) {
                    super(e)
                }
                getClassName() {
                    return PrimitiveType.ClassName
                }
            }
            t.PrimitiveType = PrimitiveType, PrimitiveType.ClassName = "PrimitiveType";
            class CustomType extends Type {
                getClassName() {
                    return CustomType.ClassName
                }
            }
            t.CustomType = CustomType, CustomType.ClassName = "CustomType";
            class TypedValue {
                constructor(e) {
                    this.type = e
                }
                getClassName() {
                    return TypedValue.ClassName
                }
                getClassHierarchy() {
                    return r.getJavascriptPrototypesInHierarchy(this, e => e.belongsToTypesystem).map(e => e.getClassName()).reverse()
                }
                getType() {
                    return this.type
                }
                hasExactClass(e) {
                    return this.getClassName() == e
                }
                hasClassOrSuperclass(e) {
                    return this.getClassHierarchy().includes(e)
                }
                belongsToTypesystem() {}
            }
            t.TypedValue = TypedValue, TypedValue.ClassName = "TypedValue";
            class PrimitiveValue extends TypedValue {
                constructor(e) {
                    super(e)
                }
                getClassName() {
                    return PrimitiveValue.ClassName
                }
            }
            t.PrimitiveValue = PrimitiveValue, PrimitiveValue.ClassName = "PrimitiveValue", t.isTyped = function(e) {
                return void 0 !== e.belongsToTypesystem
            };
            class TypePlaceholder extends Type {
                constructor() {
                    super("...")
                }
                getClassName() {
                    return TypePlaceholder.ClassName
                }
            }
            t.TypePlaceholder = TypePlaceholder, TypePlaceholder.ClassName = "TypePlaceholder";
            class NullType extends Type {
                constructor() {
                    super("?")
                }
                getClassName() {
                    return NullType.ClassName
                }
            }
            t.NullType = NullType, NullType.ClassName = "NullType"
        },
        5920: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Struct = t.StructType = void 0;
            const r = n(5487),
                s = n(6035),
                i = n(5570);
            class StructType extends i.CustomType {
                constructor(e, t) {
                    super(e), this.fieldsDefinitions = [], this.fieldsDefinitions = t
                }
                getClassName() {
                    return StructType.ClassName
                }
                static fromJSON(e) {
                    let t = (e.fields || []).map(e => s.FieldDefinition.fromJSON(e));
                    return new StructType(e.name, t)
                }
                getFieldsDefinitions() {
                    return this.fieldsDefinitions
                }
                getFieldDefinition(e) {
                    return this.fieldsDefinitions.find(t => t.name == e)
                }
                getNamesOfDependencies() {
                    return s.Fields.getNamesOfTypeDependencies(this.fieldsDefinitions)
                }
            }
            t.StructType = StructType, StructType.ClassName = "StructType";
            class Struct extends i.TypedValue {
                constructor(e, t) {
                    super(e), this.fields = t, this.fieldsByName = new Map(t.map(e => [e.name, e])), this.checkTyping()
                }
                getClassName() {
                    return Struct.ClassName
                }
                checkTyping() {
                    let e = this.getType().getFieldsDefinitions();
                    s.Fields.checkTyping(this.fields, e)
                }
                getFields() {
                    return this.fields
                }
                getFieldValue(e) {
                    let t = this.fieldsByName.get(e);
                    if (t) return t.value.valueOf();
                    throw new r.ErrMissingFieldOnStruct(e, this.getType().getName())
                }
                valueOf() {
                    let e = {};
                    for (const t of this.fields) e[t.name] = t.value.valueOf();
                    return e
                }
                equals(e) {
                    if (!this.getType().equals(e.getType())) return !1;
                    let t = this.getFields(),
                        n = e.getFields();
                    return s.Fields.equals(t, n)
                }
            }
            t.Struct = Struct, Struct.ClassName = "Struct"
        },
        5921: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BytesValue = t.BytesType = void 0;
            const r = n(5570);
            class BytesType extends r.PrimitiveType {
                constructor() {
                    super("bytes")
                }
                getClassName() {
                    return BytesType.ClassName
                }
            }
            t.BytesType = BytesType, BytesType.ClassName = "BytesType";
            class BytesValue extends r.PrimitiveValue {
                constructor(e) {
                    super(new BytesType), this.value = e
                }
                getClassName() {
                    return BytesValue.ClassName
                }
                static fromUTF8(e) {
                    let t = Buffer.from(e, "utf-8");
                    return new BytesValue(t)
                }
                static fromHex(e) {
                    let t = Buffer.from(e, "hex");
                    return new BytesValue(t)
                }
                getLength() {
                    return this.value.length
                }
                equals(e) {
                    return this.getLength() == e.getLength() && this.value.equals(e.value)
                }
                valueOf() {
                    return this.value
                }
                toString() {
                    return this.value.toString()
                }
            }
            t.BytesValue = BytesValue, BytesValue.ClassName = "BytesValue"
        },
        6034: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ArgSerializer = t.ArgumentsSeparator = void 0;
            const r = n(7174),
                s = n(6487),
                i = n(6484),
                a = n(6486);
            t.ArgumentsSeparator = "@";
            const o = {
                codec: new r.BinaryCodec
            };
            t.ArgSerializer = class ArgSerializer {
                constructor(e) {
                    e = Object.assign(Object.assign({}, o), e), this.codec = e.codec
                }
                stringToValues(e, t) {
                    let n = this.stringToBuffers(e);
                    return this.buffersToValues(n, t)
                }
                stringToBuffers(e) {
                    return e.split(t.ArgumentsSeparator).map(e => Buffer.from(e, "hex"))
                }
                buffersToValues(e, t) {
                    const n = this;
                    let r = [],
                        o = 0,
                        u = (e = e || []).length;
                    for (let e = 0; e < t.length; e++) {
                        let n = l(t[e].type);
                        r.push(n)
                    }

                    function l(t) {
                        if (t.hasExactClass(s.OptionalType.ClassName)) {
                            let e = l(t.getFirstTypeParameter());
                            return new s.OptionalValue(t, e)
                        }
                        if (t.hasExactClass(a.VariadicType.ClassName)) {
                            let e = [];
                            for (; !c();) e.push(l(t.getFirstTypeParameter()));
                            return new a.VariadicValue(t, e)
                        }
                        if (t.hasExactClass(i.CompositeType.ClassName)) {
                            let e = [];
                            for (const n of t.getTypeParameters()) e.push(l(n));
                            return new i.CompositeValue(t, e)
                        }
                        return function(t) {
                            if (c()) return null;
                            let r = e[o++];
                            return n.codec.decodeTopLevel(r, t)
                        }(t)
                    }

                    function c() {
                        return o >= u
                    }
                    return r
                }
                valuesToString(e) {
                    let n = this.valuesToStrings(e);
                    return {
                        argumentsString: n.join(t.ArgumentsSeparator),
                        count: n.length
                    }
                }
                valuesToStrings(e) {
                    return this.valuesToBuffers(e).map(e => e.toString("hex"))
                }
                valuesToBuffers(e) {
                    const t = this;
                    let n = [];
                    for (const t of e) r(t);

                    function r(e) {
                        if (e.hasExactClass(s.OptionalValue.ClassName)) {
                            let t = e;
                            t.isSet() && r(t.getTypedValue())
                        } else if (e.hasExactClass(a.VariadicValue.ClassName)) {
                            let t = e;
                            for (const e of t.getItems()) r(e)
                        } else if (e.hasExactClass(i.CompositeValue.ClassName)) {
                            let t = e;
                            for (const e of t.getItems()) r(e)
                        } else {
                            let r = t.codec.encodeTopLevel(e);
                            n.push(r)
                        }
                    }
                    return n
                }
            }
        },
        6035: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Fields = t.Field = t.FieldDefinition = void 0;
            const a = i(n(5487)),
                o = n(6481);
            class FieldDefinition {
                constructor(e, t, n) {
                    this.name = e, this.description = t, this.type = n
                }
                static fromJSON(e) {
                    let t = (new o.TypeExpressionParser).parse(e.type);
                    return new FieldDefinition(e.name, e.description, t)
                }
            }
            t.FieldDefinition = FieldDefinition;
            t.Field = class Field {
                constructor(e, t = "") {
                    this.value = e, this.name = t
                }
                checkTyping(e) {
                    const t = this.value.getType();
                    if (!t.equals(e.type)) throw new a.ErrTypingSystem(`check type of field "${e.name}; expected: ${e.type}, actual: ${t}"`);
                    if (this.name != e.name) throw new a.ErrTypingSystem(`check name of field "${e.name}"`)
                }
                equals(e) {
                    return this.name == e.name && this.value.equals(e.value)
                }
            };
            t.Fields = class Fields {
                static checkTyping(e, t) {
                    if (e.length != t.length) throw new a.ErrTypingSystem("fields length vs. field definitions length");
                    for (let n = 0; n < e.length; n++) {
                        let r = e[n],
                            s = t[n];
                        r.checkTyping(s)
                    }
                }
                static equals(e, t) {
                    if (e.length != t.length) return !1;
                    for (let n = 0; n < e.length; n++) {
                        let r = e[n],
                            s = t[n];
                        if (!r.equals(s)) return !1
                    }
                    return !0
                }
                static getNamesOfTypeDependencies(e) {
                    const t = [];
                    for (const n of e) t.push(n.type.getName()), t.push(...n.type.getNamesOfDependencies());
                    return [...new Set(t)]
                }
            }
        },
        6036: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TokenIdentifierValue = t.TokenIdentifierType = void 0;
            const r = n(5570);
            class TokenIdentifierType extends r.PrimitiveType {
                constructor() {
                    super("TokenIdentifier")
                }
                getClassName() {
                    return TokenIdentifierType.ClassName
                }
            }
            t.TokenIdentifierType = TokenIdentifierType, TokenIdentifierType.ClassName = "TokenIdentifierType";
            class TokenIdentifierValue extends r.PrimitiveValue {
                constructor(e) {
                    super(new TokenIdentifierType), this.value = e
                }
                static egld() {
                    return new TokenIdentifierValue("EGLD")
                }
                static esdtTokenIdentifier(e) {
                    return new TokenIdentifierValue(e)
                }
                getClassName() {
                    return TokenIdentifierValue.ClassName
                }
                getLength() {
                    return this.value.length
                }
                equals(e) {
                    return this.getLength() == e.getLength() && this.value == e.value
                }
                valueOf() {
                    return this.value
                }
                toString() {
                    return this.value.toString()
                }
            }
            t.TokenIdentifierValue = TokenIdentifierValue, TokenIdentifierValue.ClassName = "TokenIdentifierValue"
        },
        6175: function(e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Logger = t.LogLevel = void 0,
                function(e) {
                    e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warn = 3] = "Warn", e[e.Error = 4] = "Error", e[e.None = 5] = "None"
                }(r = t.LogLevel || (t.LogLevel = {}));
            class Logger {
                static setLevel(e) {
                    Logger.logLevel = e
                }
                static trace(e, ...t) {
                    Logger.logLevel >= r.Debug || console.debug(e, t)
                }
                static debug(e, ...t) {
                    Logger.logLevel >= r.Debug || console.debug(e, t)
                }
                static info(e, ...t) {
                    Logger.logLevel >= r.Info || console.log(e, t)
                }
                static warn(e, ...t) {
                    Logger.logLevel >= r.Warn || console.warn(e, t)
                }
                static error(e, ...t) {
                    Logger.logLevel >= r.Error || console.error(e, t)
                }
            }
            t.Logger = Logger, Logger.logLevel = r.Debug
        },
        6177: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EnumValue = t.EnumVariantDefinition = t.EnumType = void 0;
            const r = n(5487),
                s = n(5612),
                i = n(6035),
                a = n(5570);
            class EnumType extends a.CustomType {
                constructor(e, t) {
                    super(e), this.variants = [], this.variants = t
                }
                getClassName() {
                    return EnumType.ClassName
                }
                static fromJSON(e) {
                    let t = (e.variants || []).map(e => EnumVariantDefinition.fromJSON(e));
                    return new EnumType(e.name, t)
                }
                getVariantByDiscriminant(e) {
                    let t = this.variants.find(t => t.discriminant == e);
                    return s.guardValueIsSet(`variant by discriminant (${e})`, t), t
                }
                getVariantByName(e) {
                    let t = this.variants.find(t => t.name == e);
                    return s.guardValueIsSet(`variant by name (${e})`, t), t
                }
                getNamesOfDependencies() {
                    const e = [];
                    for (const t of this.variants) e.push(...t.getNamesOfDependencies());
                    return [...new Set(e)]
                }
            }
            t.EnumType = EnumType, EnumType.ClassName = "EnumType";
            class EnumVariantDefinition {
                constructor(e, t, n = []) {
                    this.fieldsDefinitions = [], s.guardTrue(t < 256, "discriminant for simple enum should be less than 256"), this.name = e, this.discriminant = t, this.fieldsDefinitions = n
                }
                static fromJSON(e) {
                    let t = (e.fields || []).map(e => i.FieldDefinition.fromJSON(e));
                    return new EnumVariantDefinition(e.name, e.discriminant, t)
                }
                getFieldsDefinitions() {
                    return this.fieldsDefinitions
                }
                getFieldDefinition(e) {
                    return this.fieldsDefinitions.find(t => t.name == e)
                }
                getNamesOfDependencies() {
                    return i.Fields.getNamesOfTypeDependencies(this.fieldsDefinitions)
                }
            }
            t.EnumVariantDefinition = EnumVariantDefinition;
            class EnumValue extends a.TypedValue {
                constructor(e, t, n) {
                    super(e), this.fields = [], this.name = t.name, this.discriminant = t.discriminant, this.fields = n, this.fieldsByName = new Map(n.map(e => [e.name, e]));
                    let r = t.getFieldsDefinitions();
                    i.Fields.checkTyping(this.fields, r)
                }
                getClassName() {
                    return EnumValue.ClassName
                }
                static fromName(e, t) {
                    let n = e.getVariantByName(t);
                    return new EnumValue(e, n, [])
                }
                static fromDiscriminant(e, t) {
                    let n = e.getVariantByDiscriminant(t);
                    return new EnumValue(e, n, [])
                }
                equals(e) {
                    if (!this.getType().equals(e.getType())) return !1;
                    let t = this.getFields(),
                        n = e.getFields();
                    const r = this.name == e.name,
                        s = this.discriminant == e.discriminant,
                        a = i.Fields.equals(t, n);
                    return r && s && a
                }
                getFields() {
                    return this.fields
                }
                getFieldValue(e) {
                    let t = this.fieldsByName.get(e);
                    if (t) return t.value.valueOf();
                    throw new r.ErrMissingFieldOnEnum(e, this.getType().getName())
                }
                valueOf() {
                    let e = {
                        name: this.name,
                        fields: []
                    };
                    return this.fields.forEach(t => e.fields[t.name] = t.value.valueOf()), e
                }
            }
            t.EnumValue = EnumValue, EnumValue.ClassName = "EnumValue"
        },
        6178: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddressValue = t.AddressType = void 0;
            const r = n(5605),
                s = n(5570);
            class AddressType extends s.PrimitiveType {
                constructor() {
                    super("Address")
                }
                getClassName() {
                    return AddressType.ClassName
                }
            }
            t.AddressType = AddressType, AddressType.ClassName = "AddressType";
            class AddressValue extends s.PrimitiveValue {
                constructor(e) {
                    super(new AddressType), this.value = new r.Address(e.bech32())
                }
                getClassName() {
                    return AddressValue.ClassName
                }
                equals(e) {
                    return this.value.equals(e.value)
                }
                valueOf() {
                    return this.value
                }
            }
            t.AddressValue = AddressValue, AddressValue.ClassName = "AddressValue"
        },
        6179: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.List = t.OptionValue = t.ListType = t.OptionType = void 0;
            const r = n(5612),
                s = n(7178),
                i = n(5570);
            class OptionType extends i.Type {
                constructor(e) {
                    super("Option", [e])
                }
                getClassName() {
                    return OptionType.ClassName
                }
                isAssignableFrom(e) {
                    if (!e.hasExactClass(OptionType.ClassName)) return !1;
                    let t = this.getFirstTypeParameter().equals(e.getFirstTypeParameter()),
                        n = e.getFirstTypeParameter().hasExactClass(i.NullType.ClassName);
                    return t || n
                }
            }
            t.OptionType = OptionType, OptionType.ClassName = "OptionType";
            class ListType extends i.Type {
                constructor(e) {
                    super("List", [e])
                }
                getClassName() {
                    return ListType.ClassName
                }
            }
            t.ListType = ListType, ListType.ClassName = "ListType";
            class OptionValue extends i.TypedValue {
                constructor(e, t = null) {
                    super(e), this.value = t
                }
                getClassName() {
                    return OptionValue.ClassName
                }
                static newMissing() {
                    let e = new OptionType(new i.NullType);
                    return new OptionValue(e)
                }
                static newMissingTyped(e) {
                    return new OptionValue(new OptionType(e))
                }
                static newProvided(e) {
                    let t = new OptionType(e.getType());
                    return new OptionValue(t, e)
                }
                isSet() {
                    return !!this.value
                }
                getTypedValue() {
                    return r.guardValueIsSet("value", this.value), this.value
                }
                valueOf() {
                    return this.value ? this.value.valueOf() : null
                }
                equals(e) {
                    var t;
                    return (null === (t = this.value) || void 0 === t ? void 0 : t.equals(e.value)) || !1
                }
            }
            t.OptionValue = OptionValue, OptionValue.ClassName = "OptionValue";
            class List extends i.TypedValue {
                constructor(e, t) {
                    super(e), this.backingCollection = new s.CollectionOfTypedValues(t)
                }
                getClassName() {
                    return List.ClassName
                }
                static fromItems(e) {
                    if (0 == e.length) return new List(new i.TypePlaceholder, []);
                    let t = e[0].getType(),
                        n = new ListType(t);
                    return new List(n, e)
                }
                getLength() {
                    return this.backingCollection.getLength()
                }
                getItems() {
                    return this.backingCollection.getItems()
                }
                valueOf() {
                    return this.backingCollection.valueOf()
                }
                equals(e) {
                    return this.backingCollection.equals(e.backingCollection)
                }
            }
            t.List = List, List.ClassName = "List"
        },
        6180: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.H256Value = t.H256Type = void 0;
            const r = n(5570);
            class H256Type extends r.PrimitiveType {
                constructor() {
                    super("H256")
                }
                getClassName() {
                    return H256Type.ClassName
                }
            }
            t.H256Type = H256Type, H256Type.ClassName = "H256Type";
            class H256Value extends r.PrimitiveValue {
                constructor(e) {
                    super(new H256Type), this.value = e
                }
                getClassName() {
                    return H256Value.ClassName
                }
                equals(e) {
                    return this.value.equals(e.value)
                }
                valueOf() {
                    return this.value
                }
            }
            t.H256Value = H256Value, H256Value.ClassName = "H256Value"
        },
        6181: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContractFunction = void 0;
            const a = i(n(5487));
            class ContractFunction {
                constructor(e) {
                    if (this.name = e, null == e) throw new a.ErrInvalidFunctionName
                }
                static none() {
                    return new ContractFunction("untitled")
                }
                toString() {
                    return this.name
                }
                valueOf() {
                    return this.name
                }
                equals(e) {
                    return !!e && this.name == e.name
                }
            }
            t.ContractFunction = ContractFunction
        },
        6479: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Signature = void 0;
            const a = i(n(5487));
            class Signature {
                constructor(e) {
                    if (this.valueHex = "", e) return "string" == typeof e ? Signature.fromHex(e) : e instanceof Buffer ? Signature.fromBuffer(e) : void 0
                }
                static empty() {
                    return new Signature
                }
                static fromHex(e) {
                    if (e.startsWith("0x") && (e = e.slice(2)), !Signature.isValidHex(e)) throw new a.ErrSignatureCannotCreate(e);
                    return Signature.fromValidHex(e)
                }
                static isValidHex(e) {
                    return 64 == Buffer.from(e, "hex").length
                }
                static fromValidHex(e) {
                    let t = new Signature;
                    return t.valueHex = e, t
                }
                static fromBuffer(e) {
                    if (64 != e.length) throw new a.ErrSignatureCannotCreate(e);
                    return Signature.fromValidHex(e.toString("hex"))
                }
                hex() {
                    return this.valueHex
                }
            }
            t.Signature = Signature
        },
        6480: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContractCallPayloadBuilder = t.ContractUpgradePayloadBuilder = t.ContractDeployPayloadBuilder = t.ArwenVirtualMachine = void 0;
            const r = n(5843),
                s = n(5612),
                i = n(6034);
            t.ArwenVirtualMachine = "0500";
            t.ContractDeployPayloadBuilder = class ContractDeployPayloadBuilder {
                constructor() {
                    this.code = null, this.codeMetadata = "", this.arguments = []
                }
                setCode(e) {
                    return this.code = e, this
                }
                setCodeMetadata(e) {
                    return this.codeMetadata = e, this
                }
                addInitArg(e) {
                    return this.arguments.push(e), this
                }
                setInitArgs(e) {
                    return this.arguments = e, this
                }
                build() {
                    s.guardValueIsSet("code", this.code);
                    let e = this.code.toString(),
                        n = this.codeMetadata.toString(),
                        i = `${e}@${t.ArwenVirtualMachine}@${n}`;
                    return i = a(i, this.arguments), new r.TransactionPayload(i)
                }
            };
            t.ContractUpgradePayloadBuilder = class ContractUpgradePayloadBuilder {
                constructor() {
                    this.code = null, this.codeMetadata = "", this.arguments = []
                }
                setCode(e) {
                    return this.code = e, this
                }
                setCodeMetadata(e) {
                    return this.codeMetadata = e, this
                }
                addInitArg(e) {
                    return this.arguments.push(e), this
                }
                setInitArgs(e) {
                    return this.arguments = e, this
                }
                build() {
                    s.guardValueIsSet("code", this.code);
                    let e = `upgradeContract@${this.code.toString()}@${this.codeMetadata.toString()}`;
                    return e = a(e, this.arguments), new r.TransactionPayload(e)
                }
            };

            function a(e, t) {
                let {
                    argumentsString: n,
                    count: r
                } = (new i.ArgSerializer).valuesToString(t);
                return 0 == r ? e : `${e}@${n}`
            }
            t.ContractCallPayloadBuilder = class ContractCallPayloadBuilder {
                constructor() {
                    this.contractFunction = null, this.arguments = []
                }
                setFunction(e) {
                    return this.contractFunction = e, this
                }
                addArg(e) {
                    return this.arguments.push(e), this
                }
                setArgs(e) {
                    return this.arguments = e, this
                }
                build() {
                    s.guardValueIsSet("calledFunction", this.contractFunction);
                    let e = this.contractFunction.name;
                    return e = a(e, this.arguments), new r.TransactionPayload(e)
                }
            }
        },
        6481: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TypeExpressionParser = void 0;
            const a = i(n(5487)),
                o = n(5570);
            var u = n(9049);
            t.TypeExpressionParser = class TypeExpressionParser {
                parse(e) {
                    let t = this.doParse(e),
                        n = Object.keys(t);
                    if (1 != n.length) throw new a.ErrTypingSystem("bad type expression: " + e);
                    let r = n[0];
                    return this.nodeToType(r, t[r])
                }
                doParse(e) {
                    let t = this.getJsonedString(e);
                    try {
                        return u.parse(t)
                    } catch (n) {
                        throw new a.ErrTypingSystem(`cannot parse type expression: ${e}. internal json: ${t}.`)
                    }
                }
                getJsonedString(e) {
                    let t = "";
                    for (var n = 0; n < e.length; n++) {
                        let r = e.charAt(n),
                            s = e.charAt(n - 1),
                            i = e.charAt(n + 1);
                        "<" == r ? t += ": {" : ">" == r ? t += ">" != s ? ": {} }" : "}" : "," == r ? ">" == i || (t += ">" == s ? "," : ": {},") : t += r
                    }
                    let r = /(:|\{|\}|,|\s)/,
                        s = t.replace(/utf\-8\sstring/gi, "utf-8-string").split(r).filter(e => e);
                    return t = s.map(e => r.test(e) ? e : `"${e}"`).map(e => e.replace(/utf\-8\-string/gi, "utf-8 string")).join(""), 1 == s.length ? `{${t}: {}}` : `{${t}}`
                }
                nodeToType(e, t) {
                    "1" === e.charAt(e.length - 1) && (e = e.slice(0, -1));
                    let n = Object.keys(t).map(e => this.nodeToType(e, t[e]));
                    return new o.Type(e, n)
                }
            }
        },
        6482: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EndpointParameterDefinition = t.EndpointModifiers = t.EndpointDefinition = void 0;
            const r = n(6481);
            class EndpointDefinition {
                constructor(e, t, n, r) {
                    this.input = [], this.output = [], this.name = e, this.input = t || [], this.output = n || [], this.modifiers = r
                }
                isConstructor() {
                    return "constructor" == this.name
                }
                static fromJSON(e) {
                    e.name = null == e.name ? "?" : e.name, e.payableInTokens = e.payableInTokens || [], e.inputs = e.inputs || [], e.outputs = e.outputs || [];
                    let t = e.inputs.map(e => EndpointParameterDefinition.fromJSON(e)),
                        n = e.outputs.map(e => EndpointParameterDefinition.fromJSON(e)),
                        r = new EndpointModifiers(e.mutability, e.payableInTokens);
                    return new EndpointDefinition(e.name, t, n, r)
                }
            }
            t.EndpointDefinition = EndpointDefinition;
            class EndpointModifiers {
                constructor(e, t) {
                    this.mutability = e || "", this.payableInTokens = t || []
                }
                isPayableInEGLD() {
                    return this.isPayableInToken("EGLD")
                }
                isPayableInToken(e) {
                    return !!this.payableInTokens.includes(e) || !this.payableInTokens.includes("!" + e) && !!this.payableInTokens.includes("*")
                }
                isPayable() {
                    return 0 != this.payableInTokens.length
                }
                isReadonly() {
                    return "readonly" == this.mutability
                }
            }
            t.EndpointModifiers = EndpointModifiers;
            class EndpointParameterDefinition {
                constructor(e, t, n) {
                    this.name = e, this.description = t, this.type = n
                }
                static fromJSON(e) {
                    let t = (new r.TypeExpressionParser).parse(e.type);
                    return new EndpointParameterDefinition(e.name || "?", e.description || "N / A", t)
                }
            }
            t.EndpointParameterDefinition = EndpointParameterDefinition
        },
        6483: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BooleanValue = t.BooleanType = void 0;
            const r = n(5570);
            class BooleanType extends r.PrimitiveType {
                constructor() {
                    super("bool")
                }
                getClassName() {
                    return BooleanType.ClassName
                }
            }
            t.BooleanType = BooleanType, BooleanType.ClassName = "BooleanType";
            class BooleanValue extends r.PrimitiveValue {
                constructor(e) {
                    super(new BooleanType), this.value = e
                }
                getClassName() {
                    return BooleanValue.ClassName
                }
                equals(e) {
                    return this.value === e.value
                }
                isTrue() {
                    return !0 === this.value
                }
                isFalse() {
                    return !this.isTrue()
                }
                valueOf() {
                    return this.value
                }
            }
            t.BooleanValue = BooleanValue, BooleanValue.ClassName = "BooleanValue"
        },
        6484: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CompositeValue = t.CompositeType = void 0;
            const r = n(5612),
                s = n(5570);
            class CompositeType extends s.Type {
                constructor(...e) {
                    super("Composite", e, s.TypeCardinality.variable(e.length))
                }
                getClassName() {
                    return CompositeType.ClassName
                }
            }
            t.CompositeType = CompositeType, CompositeType.ClassName = "CompositeType";
            class CompositeValue extends s.TypedValue {
                constructor(e, t) {
                    super(e), r.guardLength(t, e.getTypeParameters().length), this.items = t
                }
                getClassName() {
                    return CompositeValue.ClassName
                }
                static fromItems(...e) {
                    let t = e.map(e => e.getType()),
                        n = new CompositeType(...t);
                    return new CompositeValue(n, e)
                }
                getItems() {
                    return this.items
                }
                valueOf() {
                    return this.items.map(e => null == e ? void 0 : e.valueOf())
                }
                equals(e) {
                    if (this.getType().differs(e.getType())) return !1;
                    for (let t = 0; t < this.items.length; t++) {
                        let n = this.items[t],
                            r = e.items[t];
                        if (!n.equals(r)) return !1
                    }
                    return !0
                }
            }
            t.CompositeValue = CompositeValue, CompositeValue.ClassName = "CompositeValue"
        },
        6485: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BigIntValue = t.BigUIntValue = t.I64Value = t.U64Value = t.I32Value = t.U32Value = t.I16Value = t.U16Value = t.I8Value = t.U8Value = t.NumericalValue = t.BigIntType = t.BigUIntType = t.I64Type = t.U64Type = t.I32Type = t.U32Type = t.I16Type = t.U16Type = t.I8Type = t.U8Type = t.NumericalType = void 0;
            const o = i(n(5487)),
                u = n(5570),
                l = a(n(5646));
            class NumericalType extends u.PrimitiveType {
                constructor(e, t, n) {
                    super(e), this.sizeInBytes = t, this.withSign = n
                }
                getClassName() {
                    return NumericalType.ClassName
                }
                hasFixedSize() {
                    return !!this.sizeInBytes
                }
                hasArbitrarySize() {
                    return !this.hasFixedSize()
                }
            }
            t.NumericalType = NumericalType, NumericalType.ClassName = "NumericalType";
            class U8Type extends NumericalType {
                constructor() {
                    super("u8", 1, !1)
                }
                getClassName() {
                    return U8Type.ClassName
                }
            }
            t.U8Type = U8Type, U8Type.ClassName = "U8Type";
            class I8Type extends NumericalType {
                constructor() {
                    super("i8", 1, !0)
                }
                getClassName() {
                    return I8Type.ClassName
                }
            }
            t.I8Type = I8Type, I8Type.ClassName = "I8Type";
            class U16Type extends NumericalType {
                constructor() {
                    super("u16", 2, !1)
                }
                getClassName() {
                    return U16Type.ClassName
                }
            }
            t.U16Type = U16Type, U16Type.ClassName = "U16Type";
            class I16Type extends NumericalType {
                constructor() {
                    super("i16", 2, !0)
                }
                getClassName() {
                    return I16Type.ClassName
                }
            }
            t.I16Type = I16Type, I16Type.ClassName = "I16Type";
            class U32Type extends NumericalType {
                constructor() {
                    super("u32", 4, !1)
                }
                getClassName() {
                    return U32Type.ClassName
                }
            }
            t.U32Type = U32Type, U32Type.ClassName = "U32Type";
            class I32Type extends NumericalType {
                constructor() {
                    super("i32", 4, !0)
                }
                getClassName() {
                    return I32Type.ClassName
                }
            }
            t.I32Type = I32Type, I32Type.ClassName = "I32Type";
            class U64Type extends NumericalType {
                constructor() {
                    super("u64", 8, !1)
                }
                getClassName() {
                    return U64Type.ClassName
                }
            }
            t.U64Type = U64Type, U64Type.ClassName = "U64Type";
            class I64Type extends NumericalType {
                constructor() {
                    super("i64", 8, !0)
                }
                getClassName() {
                    return I64Type.ClassName
                }
            }
            t.I64Type = I64Type, I64Type.ClassName = "I64Type";
            class BigUIntType extends NumericalType {
                constructor() {
                    super("BigUint", 0, !1)
                }
                getClassName() {
                    return BigUIntType.ClassName
                }
            }
            t.BigUIntType = BigUIntType, BigUIntType.ClassName = "BigUIntType";
            class BigIntType extends NumericalType {
                constructor() {
                    super("Bigint", 0, !0)
                }
                getClassName() {
                    return BigIntType.ClassName
                }
            }
            t.BigIntType = BigIntType, BigIntType.ClassName = "BigIntType";
            class NumericalValue extends u.PrimitiveValue {
                constructor(e, t) {
                    if (super(e), this.value = new l.default(t), this.sizeInBytes = e.sizeInBytes, this.withSign = e.withSign, this.value.isNaN()) throw new o.ErrInvalidArgument("not a number: " + t);
                    if (!this.withSign && this.value.isNegative()) throw new o.ErrInvalidArgument("negative, but type is unsigned: " + t)
                }
                getClassName() {
                    return NumericalValue.ClassName
                }
                equals(e) {
                    return this.value.isEqualTo(e.value)
                }
                valueOf() {
                    return this.value
                }
                toString() {
                    return this.value.toString()
                }
            }
            t.NumericalValue = NumericalValue, NumericalValue.ClassName = "NumericalValue";
            class U8Value extends NumericalValue {
                constructor(e) {
                    super(new U8Type, new l.default(e))
                }
                getClassName() {
                    return U8Value.ClassName
                }
            }
            t.U8Value = U8Value, U8Value.ClassName = "U8Value";
            class I8Value extends NumericalValue {
                constructor(e) {
                    super(new I8Type, new l.default(e))
                }
                getClassName() {
                    return I8Value.ClassName
                }
            }
            t.I8Value = I8Value, I8Value.ClassName = "I8Value";
            class U16Value extends NumericalValue {
                constructor(e) {
                    super(new U16Type, new l.default(e))
                }
                getClassName() {
                    return U16Value.ClassName
                }
            }
            t.U16Value = U16Value, U16Value.ClassName = "U16Value";
            class I16Value extends NumericalValue {
                constructor(e) {
                    super(new I16Type, new l.default(e))
                }
                getClassName() {
                    return I16Value.ClassName
                }
            }
            t.I16Value = I16Value, I16Value.ClassName = "I16Value";
            class U32Value extends NumericalValue {
                constructor(e) {
                    super(new U32Type, new l.default(e))
                }
                getClassName() {
                    return U32Value.ClassName
                }
            }
            t.U32Value = U32Value, U32Value.ClassName = "U32Value";
            class I32Value extends NumericalValue {
                constructor(e) {
                    super(new I32Type, new l.default(e))
                }
                getClassName() {
                    return I32Value.ClassName
                }
            }
            t.I32Value = I32Value, I32Value.ClassName = "I32Value";
            class U64Value extends NumericalValue {
                constructor(e) {
                    super(new U64Type, e)
                }
                getClassName() {
                    return U64Value.ClassName
                }
            }
            t.U64Value = U64Value, U64Value.ClassName = "U64Value";
            class I64Value extends NumericalValue {
                constructor(e) {
                    super(new I64Type, e)
                }
                getClassName() {
                    return I64Value.ClassName
                }
            }
            t.I64Value = I64Value, I64Value.ClassName = "I64Value";
            class BigUIntValue extends NumericalValue {
                constructor(e) {
                    super(new BigUIntType, e)
                }
                getClassName() {
                    return BigUIntValue.ClassName
                }
            }
            t.BigUIntValue = BigUIntValue, BigUIntValue.ClassName = "BigUIntValue";
            class BigIntValue extends NumericalValue {
                constructor(e) {
                    super(new BigIntType, e)
                }
                getClassName() {
                    return BigIntValue.ClassName
                }
            }
            t.BigIntValue = BigIntValue, BigIntValue.ClassName = "BigIntValue"
        },
        6486: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VariadicValue = t.VariadicType = void 0;
            const r = n(5570);
            class VariadicType extends r.Type {
                constructor(e) {
                    super("Variadic", [e], r.TypeCardinality.variable())
                }
                getClassName() {
                    return VariadicType.ClassName
                }
            }
            t.VariadicType = VariadicType, VariadicType.ClassName = "VariadicType";
            class VariadicValue extends r.TypedValue {
                constructor(e, t) {
                    super(e), this.items = t
                }
                getClassName() {
                    return VariadicValue.ClassName
                }
                static fromItems(...e) {
                    if (0 == e.length) return new VariadicValue(new VariadicType(new r.TypePlaceholder), []);
                    let t = e[0].getType();
                    return new VariadicValue(new VariadicType(t), e)
                }
                getItems() {
                    return this.items
                }
                valueOf() {
                    return this.items.map(e => e.valueOf())
                }
                equals(e) {
                    if (this.getType().differs(e.getType())) return !1;
                    for (let t = 0; t < this.items.length; t++) {
                        let n = this.items[t],
                            r = e.items[t];
                        if (!n.equals(r)) return !1
                    }
                    return !0
                }
            }
            t.VariadicValue = VariadicValue, VariadicValue.ClassName = "VariadicValue"
        },
        6487: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OptionalValue = t.OptionalType = void 0;
            const r = n(5612),
                s = n(5570);
            class OptionalType extends s.Type {
                constructor(e) {
                    super("Optional", [e], s.TypeCardinality.variable(1))
                }
                getClassName() {
                    return OptionalType.ClassName
                }
                isAssignableFrom(e) {
                    if (!e.hasExactClass(OptionalType.ClassName)) return !1;
                    let t = this.getFirstTypeParameter().equals(e.getFirstTypeParameter()),
                        n = e.getFirstTypeParameter().hasExactClass(s.NullType.ClassName);
                    return t || n
                }
            }
            t.OptionalType = OptionalType, OptionalType.ClassName = "OptionalType";
            class OptionalValue extends s.TypedValue {
                constructor(e, t = null) {
                    super(e), this.value = t
                }
                getClassName() {
                    return OptionalValue.ClassName
                }
                static newMissing() {
                    let e = new OptionalType(new s.NullType);
                    return new OptionalValue(e)
                }
                isSet() {
                    return !!this.value
                }
                getTypedValue() {
                    return r.guardValueIsSet("value", this.value), this.value
                }
                valueOf() {
                    return this.value ? this.value.valueOf() : null
                }
                equals(e) {
                    var t;
                    return (null === (t = this.value) || void 0 === t ? void 0 : t.equals(e.value)) || !1
                }
            }
            t.OptionalValue = OptionalValue, OptionalValue.ClassName = "OptionalValue"
        },
        6488: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ArrayVec = t.ArrayVecType = void 0;
            const r = n(5612),
                s = n(7178),
                i = n(5570);
            class ArrayVecType extends i.Type {
                constructor(e, t) {
                    super("Array", [t]), r.guardTrue(e > 0, "array length > 0"), this.length = e
                }
                getClassName() {
                    return ArrayVecType.ClassName
                }
            }
            t.ArrayVecType = ArrayVecType, ArrayVecType.ClassName = "ArrayVecType";
            class ArrayVec extends i.TypedValue {
                constructor(e, t) {
                    super(e), r.guardLength(t, e.length), this.backingCollection = new s.CollectionOfTypedValues(t)
                }
                getClassName() {
                    return ArrayVec.ClassName
                }
                getLength() {
                    return this.backingCollection.getLength()
                }
                getItems() {
                    return this.backingCollection.getItems()
                }
                valueOf() {
                    return this.backingCollection.valueOf()
                }
                equals(e) {
                    return this.backingCollection.equals(e.backingCollection)
                }
            }
            t.ArrayVec = ArrayVec, ArrayVec.ClassName = "ArrayVec"
        },
        6489: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StringValue = t.StringType = void 0;
            const r = n(5570);
            class StringType extends r.PrimitiveType {
                constructor() {
                    super("utf-8 string")
                }
                getClassName() {
                    return StringType.ClassName
                }
            }
            t.StringType = StringType, StringType.ClassName = "StringType";
            class StringValue extends r.PrimitiveValue {
                constructor(e) {
                    super(new StringType), this.value = e
                }
                getClassName() {
                    return StringValue.ClassName
                }
                static fromUTF8(e) {
                    return new StringValue(e)
                }
                static fromHex(e) {
                    let t = Buffer.from(e, "hex").toString();
                    return new StringValue(t)
                }
                getLength() {
                    return this.value.length
                }
                equals(e) {
                    return this.value === e.value
                }
                valueOf() {
                    return this.value
                }
            }
            t.StringValue = StringValue, StringValue.ClassName = "StringValue"
        },
        6490: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Tuple = t.TupleType = void 0;
            const a = i(n(5487)),
                o = n(5920),
                u = n(6035),
                l = n(5920);
            class TupleType extends l.StructType {
                constructor(...e) {
                    super(TupleType.prepareName(e), TupleType.prepareFieldDefinitions(e))
                }
                getClassName() {
                    return TupleType.ClassName
                }
                static prepareName(e) {
                    let t = e.map(e => e.toString()).join(", ");
                    return `tuple${t.length}<${t}>`
                }
                static prepareFieldDefinitions(e) {
                    return e.map((e, t) => new u.FieldDefinition(c(t), "anonymous tuple field", e))
                }
            }

            function c(e) {
                return "field" + e
            }
            t.TupleType = TupleType, TupleType.ClassName = "TupleType";
            class Tuple extends o.Struct {
                constructor(e, t) {
                    super(e, t)
                }
                getClassName() {
                    return Tuple.ClassName
                }
                static fromItems(e) {
                    if (e.length < 1) throw new a.ErrTypingSystem("bad tuple items");
                    let t = e.map(e => e.getType()),
                        n = new TupleType(...t),
                        r = e.map((e, t) => new u.Field(e, c(t)));
                    return new Tuple(n, r)
                }
            }
            t.Tuple = Tuple, Tuple.ClassName = "Tuple"
        },
        6491: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NothingValue = t.NothingType = void 0;
            const r = n(5570);
            class NothingType extends r.PrimitiveType {
                constructor() {
                    super("nothing")
                }
                getClassName() {
                    return NothingType.ClassName
                }
            }
            t.NothingType = NothingType, NothingType.ClassName = "NothingType";
            class NothingValue extends r.PrimitiveValue {
                constructor() {
                    super(new NothingType)
                }
                getClassName() {
                    return NothingValue.ClassName
                }
                equals(e) {
                    return !1
                }
                valueOf() {
                    return {}
                }
            }
            t.NothingValue = NothingValue, NothingValue.ClassName = "NothingValue"
        },
        6492: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.prependByteToBuffer = t.flipBufferBitsInPlace = t.getHexMagnitudeOfBigInt = t.bigIntToBuffer = t.bufferToBigInt = t.cloneBuffer = t.isMsbZero = t.isMsbOne = void 0;
            const s = r(n(5646)),
                i = n(7179);

            function a(e, t = 0) {
                return 1 == e[t] >> 7
            }

            function o(e) {
                return e ? (e.isNegative() && (e = e.multipliedBy(new s.default(-1))), i.numberToPaddedHex(e)) : ""
            }
            t.isMsbOne = a, t.isMsbZero = function(e, t = 0) {
                return !a(e, t)
            }, t.cloneBuffer = function(e) {
                let t = Buffer.alloc(e.length);
                return e.copy(t), t
            }, t.bufferToBigInt = function(e) {
                let t = e.toString("hex");
                return new s.default("0x" + t, 16)
            }, t.bigIntToBuffer = function(e) {
                let t = o(e);
                return Buffer.from(t, "hex")
            }, t.getHexMagnitudeOfBigInt = o, t.flipBufferBitsInPlace = function(e) {
                for (let t = 0; t < e.length; t++) e[t] = ~e[t]
            }, t.prependByteToBuffer = function(e, t) {
                return Buffer.concat([Buffer.from([t]), e])
            }
        },
        6493: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SizeOfU32 = void 0, t.SizeOfU32 = 4
        },
        6494: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BytesBinaryCodec = void 0;
            const r = n(5921),
                s = n(6493);
            t.BytesBinaryCodec = class BytesBinaryCodec {
                decodeNested(e) {
                    let t = e.readUInt32BE(0),
                        n = e.slice(s.SizeOfU32, s.SizeOfU32 + t);
                    return [new r.BytesValue(n), s.SizeOfU32 + t]
                }
                decodeTopLevel(e) {
                    return new r.BytesValue(e)
                }
                encodeNested(e) {
                    let t = Buffer.alloc(s.SizeOfU32);
                    return t.writeUInt32BE(e.getLength()), Buffer.concat([t, e.valueOf()])
                }
                encodeTopLevel(e) {
                    return e.valueOf()
                }
            }
        },
        6495: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), s(n(9078), t), s(n(6034), t), s(n(9079), t), s(n(7174), t), s(n(7184), t), s(n(6181), t), s(n(7185), t), s(n(7186), t), s(n(9080), t), s(n(7187), t), s(n(6496), t), s(n(9082), t), s(n(7188), t), s(n(9085), t), s(n(6480), t), s(n(5569), t)
        },
        6496: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Query = void 0;
            const r = n(5605),
                s = n(6034);
            t.Query = class Query {
                constructor(e) {
                    this.caller = e.caller || new r.Address, this.address = e.address, this.func = e.func, this.args = e.args || [], this.value = e.value || 0
                }
                getEncodedArguments() {
                    return (new s.ArgSerializer).valuesToStrings(this.args)
                }
            }
        },
        7173: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TransactionOptions = t.TransactionVersion = void 0;
            const a = i(n(5487)),
                o = n(6176);
            class TransactionVersion {
                constructor(e) {
                    if ((e = Number(e)) < 1) throw new a.ErrTransactionVersionInvalid(e);
                    this.value = e
                }
                static withDefaultVersion() {
                    return new TransactionVersion(o.TRANSACTION_VERSION_DEFAULT)
                }
                static withTxHashSignVersion() {
                    return new TransactionVersion(o.TRANSACTION_VERSION_TX_HASH_SIGN)
                }
                valueOf() {
                    return this.value
                }
            }
            t.TransactionVersion = TransactionVersion;
            class TransactionOptions {
                constructor(e) {
                    if ((e = Number(e)) < 0) throw new a.ErrTransactionOptionsInvalid(e);
                    this.value = e
                }
                static withDefaultOptions() {
                    return new TransactionOptions(o.TRANSACTION_OPTIONS_DEFAULT)
                }
                static withTxHashSignOptions() {
                    return new TransactionOptions(o.TRANSACTION_OPTIONS_TX_HASH_SIGN)
                }
                valueOf() {
                    return this.value
                }
            }
            t.TransactionOptions = TransactionOptions
        },
        7174: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), s(n(7175), t), s(n(9067), t)
        },
        7175: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BinaryCodecConstraints = t.BinaryCodec = void 0;
            const a = i(n(5487)),
                o = n(5569),
                u = n(5612),
                l = n(9054),
                c = n(9055),
                d = n(9063),
                p = n(7180),
                f = n(9064),
                h = n(9065),
                y = n(9066);
            t.BinaryCodec = class BinaryCodec {
                constructor(e = null) {
                    this.constraints = e || new BinaryCodecConstraints, this.optionCodec = new l.OptionValueBinaryCodec(this), this.listCodec = new d.ListBinaryCodec(this), this.arrayCodec = new y.ArrayVecBinaryCodec(this), this.primitiveCodec = new c.PrimitiveBinaryCodec(this), this.structCodec = new p.StructBinaryCodec(this), this.tupleCodec = new h.TupleBinaryCodec(this), this.enumCodec = new f.EnumBinaryCodec(this)
                }
                decodeTopLevel(e, t) {
                    return this.constraints.checkBufferLength(e), o.onTypeSelect(t, {
                        onOption: () => this.optionCodec.decodeTopLevel(e, t.getFirstTypeParameter()),
                        onList: () => this.listCodec.decodeTopLevel(e, t),
                        onArray: () => this.arrayCodec.decodeTopLevel(e, t),
                        onPrimitive: () => this.primitiveCodec.decodeTopLevel(e, t),
                        onStruct: () => this.structCodec.decodeTopLevel(e, t),
                        onTuple: () => this.tupleCodec.decodeTopLevel(e, t),
                        onEnum: () => this.enumCodec.decodeTopLevel(e, t)
                    })
                }
                decodeNested(e, t) {
                    this.constraints.checkBufferLength(e);
                    let [n, r] = o.onTypeSelect(t, {
                        onOption: () => this.optionCodec.decodeNested(e, t.getFirstTypeParameter()),
                        onList: () => this.listCodec.decodeNested(e, t),
                        onArray: () => this.arrayCodec.decodeNested(e, t),
                        onPrimitive: () => this.primitiveCodec.decodeNested(e, t),
                        onStruct: () => this.structCodec.decodeNested(e, t),
                        onTuple: () => this.tupleCodec.decodeNested(e, t),
                        onEnum: () => this.enumCodec.decodeNested(e, t)
                    });
                    return [n, r]
                }
                encodeNested(e) {
                    return u.guardTrue(e.getType().getCardinality().isSingular(), "singular cardinality, thus encodable type"), o.onTypedValueSelect(e, {
                        onPrimitive: () => this.primitiveCodec.encodeNested(e),
                        onOption: () => this.optionCodec.encodeNested(e),
                        onList: () => this.listCodec.encodeNested(e),
                        onArray: () => this.arrayCodec.encodeNested(e),
                        onStruct: () => this.structCodec.encodeNested(e),
                        onTuple: () => this.tupleCodec.encodeNested(e),
                        onEnum: () => this.enumCodec.encodeNested(e)
                    })
                }
                encodeTopLevel(e) {
                    return u.guardTrue(e.getType().getCardinality().isSingular(), "singular cardinality, thus encodable type"), o.onTypedValueSelect(e, {
                        onPrimitive: () => this.primitiveCodec.encodeTopLevel(e),
                        onOption: () => this.optionCodec.encodeTopLevel(e),
                        onList: () => this.listCodec.encodeTopLevel(e),
                        onArray: () => this.arrayCodec.encodeTopLevel(e),
                        onStruct: () => this.structCodec.encodeTopLevel(e),
                        onTuple: () => this.tupleCodec.encodeTopLevel(e),
                        onEnum: () => this.enumCodec.encodeTopLevel(e)
                    })
                }
            };
            class BinaryCodecConstraints {
                constructor(e) {
                    this.maxBufferLength = (null == e ? void 0 : e.maxBufferLength) || 40960, this.maxListLength = (null == e ? void 0 : e.maxListLength) || 8192
                }
                checkBufferLength(e) {
                    if (e.length > this.maxBufferLength) throw new a.ErrCodec(`Buffer too large: ${e.length} > ${this.maxBufferLength}`)
                }
                checkListLength(e) {
                    if (e > this.maxListLength) throw new a.ErrCodec(`List too large: ${e} > ${this.maxListLength}`)
                }
            }
            t.BinaryCodecConstraints = BinaryCodecConstraints
        },
        7176: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContractInterface = void 0;
            const r = n(5612),
                s = n(6482);
            class ContractInterface {
                constructor(e, t, n) {
                    this.endpoints = [], this.name = e, this.constructorDefinition = t, this.endpoints = n
                }
                static fromJSON(e) {
                    e.name = e.name || "?", e.endpoints = e.endpoints || [];
                    let t = function(e) {
                            if (void 0 === e.constructor.inputs || void 0 === e.constructor.outputs) return null;
                            let t = Object.assign({
                                name: "constructor"
                            }, e.constructor);
                            return s.EndpointDefinition.fromJSON(t)
                        }(e),
                        n = e.endpoints.map(e => s.EndpointDefinition.fromJSON(e));
                    return new ContractInterface(e.name, t, n)
                }
                getConstructorDefinition() {
                    return this.constructorDefinition
                }
                getEndpoint(e) {
                    let t = this.endpoints.find(t => t.name == e);
                    return r.guardValueIsSetWithMessage(`endpoint [${e}] not found`, t), t
                }
            }
            t.ContractInterface = ContractInterface
        },
        7177: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TypeMapper = void 0;
            const a = i(n(5487)),
                o = n(6178),
                u = n(6483),
                l = n(5921),
                c = n(6484),
                d = n(6177),
                p = n(6179),
                f = n(6180),
                h = n(6485),
                y = n(5920),
                g = n(6035),
                m = n(6036),
                T = n(6486),
                v = n(6487),
                C = n(6488),
                N = n(6489),
                b = n(6490),
                w = n(9051),
                O = n(6491);
            t.TypeMapper = class TypeMapper {
                constructor(e = []) {
                    this.openTypesFactories = new Map([
                        ["Option", (...e) => new p.OptionType(e[0])],
                        ["List", (...e) => new p.ListType(e[0])],
                        ["VarArgs", (...e) => new T.VariadicType(e[0])],
                        ["MultiResultVec", (...e) => new T.VariadicType(e[0])],
                        ["variadic", (...e) => new T.VariadicType(e[0])],
                        ["OptionalArg", (...e) => new v.OptionalType(e[0])],
                        ["optional", (...e) => new v.OptionalType(e[0])],
                        ["OptionalResult", (...e) => new v.OptionalType(e[0])],
                        ["multi", (...e) => new c.CompositeType(...e)],
                        ["MultiArg", (...e) => new c.CompositeType(...e)],
                        ["MultiResult", (...e) => new c.CompositeType(...e)],
                        ["multi", (...e) => new c.CompositeType(...e)],
                        ["tuple", (...e) => new b.TupleType(...e)],
                        ["tuple2", (...e) => new b.TupleType(...e)],
                        ["tuple3", (...e) => new b.TupleType(...e)],
                        ["tuple4", (...e) => new b.TupleType(...e)],
                        ["tuple5", (...e) => new b.TupleType(...e)],
                        ["tuple6", (...e) => new b.TupleType(...e)],
                        ["tuple7", (...e) => new b.TupleType(...e)],
                        ["tuple8", (...e) => new b.TupleType(...e)],
                        ["array20", (...e) => new C.ArrayVecType(20, e[0])],
                        ["array32", (...e) => new C.ArrayVecType(32, e[0])],
                        ["array46", (...e) => new C.ArrayVecType(46, e[0])],
                        ["array64", (...e) => new C.ArrayVecType(64, e[0])]
                    ]), this.closedTypesMap = new Map([
                        ["u8", new h.U8Type],
                        ["u16", new h.U16Type],
                        ["u32", new h.U32Type],
                        ["u64", new h.U64Type],
                        ["U64", new h.U64Type],
                        ["BigUint", new h.BigUIntType],
                        ["i8", new h.I8Type],
                        ["i16", new h.I16Type],
                        ["i32", new h.I32Type],
                        ["i64", new h.I64Type],
                        ["Bigint", new h.BigIntType],
                        ["BigInt", new h.BigIntType],
                        ["bool", new u.BooleanType],
                        ["bytes", new l.BytesType],
                        ["Address", new o.AddressType],
                        ["H256", new f.H256Type],
                        ["utf-8 string", new N.StringType],
                        ["TokenIdentifier", new m.TokenIdentifierType],
                        ["EgldOrEsdtTokenIdentifier", new m.TokenIdentifierType],
                        ["CodeMetadata", new w.CodeMetadataType],
                        ["nothing", new O.NothingType],
                        ["AsyncCall", new O.NothingType]
                    ]), this.learnedTypesMap = new Map;
                    for (const t of e) this.learnedTypesMap.set(t.getName(), t)
                }
                mapType(e) {
                    let t = this.mapRecursiveType(e);
                    if (t) return t.isGenericType() || this.learnType(t), t;
                    throw new a.ErrTypingSystem(`Cannot map the type "${e.getName()}" to a known type`)
                }
                mapRecursiveType(e) {
                    let t = e.isGenericType(),
                        n = this.learnedTypesMap.get(e.getName());
                    if (n) return n;
                    let r = this.closedTypesMap.get(e.getName());
                    return r || (e.hasExactClass(d.EnumType.ClassName) ? this.mapEnumType(e) : e.hasExactClass(y.StructType.ClassName) ? this.mapStructType(e) : t ? this.mapGenericType(e) : null)
                }
                learnType(e) {
                    this.learnedTypesMap.delete(e.getName()), this.learnedTypesMap.set(e.getName(), e)
                }
                mapStructType(e) {
                    let t = this.mappedFields(e.getFieldsDefinitions());
                    return new y.StructType(e.getName(), t)
                }
                mapEnumType(e) {
                    let t = e.variants.map(e => new d.EnumVariantDefinition(e.name, e.discriminant, this.mappedFields(e.getFieldsDefinitions())));
                    return new d.EnumType(e.getName(), t)
                }
                mappedFields(e) {
                    return e.map(e => new g.FieldDefinition(e.name, e.description, this.mapType(e.type)))
                }
                mapGenericType(e) {
                    let t = e.getTypeParameters().map(e => this.mapType(e)),
                        n = this.openTypesFactories.get(e.getName());
                    if (!n) throw new a.ErrTypingSystem(`Cannot map the generic type "${e.getName()}" to a known type`);
                    return n(...t)
                }
            }
        },
        7178: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectionOfTypedValues = void 0;
            t.CollectionOfTypedValues = class CollectionOfTypedValues {
                constructor(e) {
                    this.items = e
                }
                getLength() {
                    return this.items.length
                }
                getItems() {
                    return this.items
                }
                valueOf() {
                    return this.items.map(e => e.valueOf())
                }
                equals(e) {
                    if (this.getLength() != e.getLength()) return !1;
                    for (let t = 0; t < this.getLength(); t++) {
                        let n = this.items[t],
                            r = e.items[t];
                        if (!n.equals(r)) return !1
                    }
                    return !0
                }
            }
        },
        7180: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StructBinaryCodec = void 0;
            const r = n(5569),
                s = n(7181);
            t.StructBinaryCodec = class StructBinaryCodec {
                constructor(e) {
                    this.fieldsCodec = new s.FieldsBinaryCodec(e)
                }
                decodeTopLevel(e, t) {
                    let [n] = this.decodeNested(e, t);
                    return n
                }
                decodeNested(e, t) {
                    let n = t.getFieldsDefinitions(),
                        [s, i] = this.fieldsCodec.decodeNested(e, n);
                    return [new r.Struct(t, s), i]
                }
                encodeNested(e) {
                    let t = e.getFields();
                    return this.fieldsCodec.encodeNested(t)
                }
                encodeTopLevel(e) {
                    return this.encodeNested(e)
                }
            }
        },
        7181: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FieldsBinaryCodec = void 0;
            const r = n(5569);
            t.FieldsBinaryCodec = class FieldsBinaryCodec {
                constructor(e) {
                    this.binaryCodec = e
                }
                decodeNested(e, t) {
                    let n = [],
                        s = 0;
                    for (const i of t) {
                        let [t, a] = this.binaryCodec.decodeNested(e, i.type);
                        e = e.slice(a), s += a;
                        let o = new r.Field(t, i.name);
                        n.push(o)
                    }
                    return [n, s]
                }
                encodeNested(e) {
                    let t = [];
                    for (const n of e) {
                        let e = this.binaryCodec.encodeNested(n.value);
                        t.push(e)
                    }
                    return Buffer.concat(t)
                }
            }
        },
        7184: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CodeMetadata = void 0;
            var r, s;
            t.CodeMetadata = class CodeMetadata {
                    constructor(e = !0, t = !1, n = !1, r = !1) {
                        this.upgradeable = e, this.readable = t, this.payable = n, this.payableBySc = r
                    }
                    toggleUpgradeable(e) {
                        this.upgradeable = e
                    }
                    toggleReadable(e) {
                        this.readable = e
                    }
                    togglePayable(e) {
                        this.payable = e
                    }
                    togglePayableBySc(e) {
                        this.payableBySc = e
                    }
                    toBuffer() {
                        let e = 0,
                            t = 0;
                        return this.upgradeable && (e |= r.Upgradeable), this.readable && (e |= r.Readable), this.payable && (t |= s.Payable), this.payableBySc && (t |= s.PayableBySc), Buffer.from([e, t])
                    }
                    toString() {
                        return this.toBuffer().toString("hex")
                    }
                    toJSON() {
                        return {
                            upgradeable: this.upgradeable,
                            readable: this.readable,
                            payable: this.payable,
                            payableBySc: this.payableBySc
                        }
                    }
                    equals(e) {
                        return this.upgradeable == e.upgradeable && this.readable == e.readable && this.payable == e.payable && this.payableBySc == e.payableBySc
                    }
                },
                function(e) {
                    e[e.Upgradeable = 1] = "Upgradeable", e[e.Reserved2 = 2] = "Reserved2", e[e.Readable = 4] = "Readable"
                }(r || (r = {})),
                function(e) {
                    e[e.Reserved1 = 1] = "Reserved1", e[e.Payable = 2] = "Payable", e[e.PayableBySc = 4] = "PayableBySc"
                }(s || (s = {}))
        },
        7185: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Interaction = void 0;
            const r = n(6496),
                s = n(6181),
                i = n(5605),
                a = n(5569),
                o = n(6176),
                u = n(7186);
            t.Interaction = class Interaction {
                constructor(e, t, n) {
                    this.nonce = 0, this.value = "0", this.gasLimit = 0, this.gasPrice = void 0, this.chainID = "", this.querent = new i.Address, this.isWithSingleESDTTransfer = !1, this.isWithSingleESDTNFTTransfer = !1, this.isWithMultiESDTNFTTransfer = !1, this.tokenTransfersSender = new i.Address, this.contract = e, this.function = t, this.args = n, this.tokenTransfers = new TokenTransfersWithinInteraction([], this)
                }
                getContractAddress() {
                    return this.contract.getAddress()
                }
                getFunction() {
                    return this.function
                }
                getEndpoint() {
                    return this.contract.getEndpoint(this.function)
                }
                getArguments() {
                    return this.args
                }
                getValue() {
                    return this.value
                }
                getTokenTransfers() {
                    return this.tokenTransfers.getTransfers()
                }
                getGasLimit() {
                    return this.gasLimit
                }
                getExplicitReceiver() {
                    return this.explicitReceiver
                }
                buildTransaction() {
                    let e = this.explicitReceiver || this.contract.getAddress(),
                        t = this.function,
                        n = this.args;
                    this.isWithSingleESDTTransfer ? (t = new s.ContractFunction(o.ESDT_TRANSFER_FUNCTION_NAME), n = this.tokenTransfers.buildArgsForSingleESDTTransfer()) : this.isWithSingleESDTNFTTransfer ? (e = this.tokenTransfersSender, t = new s.ContractFunction(o.ESDTNFT_TRANSFER_FUNCTION_NAME), n = this.tokenTransfers.buildArgsForSingleESDTNFTTransfer()) : this.isWithMultiESDTNFTTransfer && (e = this.tokenTransfersSender, t = new s.ContractFunction(o.MULTI_ESDTNFT_TRANSFER_FUNCTION_NAME), n = this.tokenTransfers.buildArgsForMultiESDTNFTTransfer());
                    let r = this.contract.call({
                        func: t,
                        gasLimit: this.gasLimit,
                        gasPrice: this.gasPrice,
                        args: n,
                        value: this.value,
                        receiver: e,
                        chainID: this.chainID
                    });
                    return r.setNonce(this.nonce), r
                }
                buildQuery() {
                    return new r.Query({
                        address: this.contract.getAddress(),
                        func: this.function,
                        args: this.args,
                        value: this.value,
                        caller: this.querent
                    })
                }
                withValue(e) {
                    return this.value = e, this
                }
                withSingleESDTTransfer(e) {
                    return this.isWithSingleESDTTransfer = !0, this.tokenTransfers = new TokenTransfersWithinInteraction([e], this), this
                }
                withSingleESDTNFTTransfer(e, t) {
                    return this.isWithSingleESDTNFTTransfer = !0, this.tokenTransfers = new TokenTransfersWithinInteraction([e], this), this.tokenTransfersSender = t, this
                }
                withMultiESDTNFTTransfer(e, t) {
                    return this.isWithMultiESDTNFTTransfer = !0, this.tokenTransfers = new TokenTransfersWithinInteraction(e, this), this.tokenTransfersSender = t, this
                }
                withGasLimit(e) {
                    return this.gasLimit = e, this
                }
                withGasPrice(e) {
                    return this.gasPrice = e, this
                }
                withNonce(e) {
                    return this.nonce = e, this
                }
                useThenIncrementNonceOf(e) {
                    return this.withNonce(e.getNonceThenIncrement())
                }
                withChainID(e) {
                    return this.chainID = e, this
                }
                withQuerent(e) {
                    return this.querent = e, this
                }
                withExplicitReceiver(e) {
                    return this.explicitReceiver = e, this
                }
                check() {
                    return (new u.InteractionChecker).checkInteraction(this, this.getEndpoint()), this
                }
            };
            class TokenTransfersWithinInteraction {
                constructor(e, t) {
                    this.transfers = e, this.interaction = t
                }
                getTransfers() {
                    return this.transfers
                }
                buildArgsForSingleESDTTransfer() {
                    let e = this.transfers[0];
                    return [this.getTypedTokenIdentifier(e), this.getTypedTokenQuantity(e), this.getTypedInteractionFunction(), ...this.getInteractionArguments()]
                }
                buildArgsForSingleESDTNFTTransfer() {
                    let e = this.transfers[0];
                    return [this.getTypedTokenIdentifier(e), this.getTypedTokenNonce(e), this.getTypedTokenQuantity(e), this.getTypedTokensReceiver(), this.getTypedInteractionFunction(), ...this.getInteractionArguments()]
                }
                buildArgsForMultiESDTNFTTransfer() {
                    let e = [];
                    e.push(this.getTypedTokensReceiver()), e.push(this.getTypedNumberOfTransfers());
                    for (const t of this.transfers) e.push(this.getTypedTokenIdentifier(t)), e.push(this.getTypedTokenNonce(t)), e.push(this.getTypedTokenQuantity(t));
                    return e.push(this.getTypedInteractionFunction()), e.push(...this.getInteractionArguments()), e
                }
                getTypedNumberOfTransfers() {
                    return new a.U8Value(this.transfers.length)
                }
                getTypedTokenIdentifier(e) {
                    return a.BytesValue.fromUTF8(e.tokenIdentifier)
                }
                getTypedTokenNonce(e) {
                    return new a.U64Value(e.nonce)
                }
                getTypedTokenQuantity(e) {
                    return new a.BigUIntValue(e.amountAsBigInteger)
                }
                getTypedTokensReceiver() {
                    return new a.AddressValue(this.interaction.getContractAddress())
                }
                getTypedInteractionFunction() {
                    return a.BytesValue.fromUTF8(this.interaction.getFunction().valueOf())
                }
                getInteractionArguments() {
                    return this.interaction.getArguments()
                }
            }
        },
        7186: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InteractionChecker = void 0;
            const o = i(n(5487)),
                u = a(n(5646));
            t.InteractionChecker = class InteractionChecker {
                checkInteraction(e, t) {
                    this.checkPayable(e, t), this.checkArguments(e, t)
                }
                checkPayable(e, t) {
                    let n = !new u.default(e.getValue().toString()).isZero(),
                        r = t.modifiers.isPayableInEGLD();
                    if (n && !r) throw new o.ErrContractInteraction("cannot send EGLD value to non-payable")
                }
                checkArguments(e, t) {
                    let n = t.input,
                        r = e.getArguments(),
                        s = n.length,
                        i = r.length;
                    if (s != i) throw new o.ErrContractInteraction(`bad arguments, expected: ${s}, got: ${i}`);
                    for (let e = 0; e < s; e++) {
                        let t = n[e].type,
                            s = r[e].getType();
                        if (!t.isAssignableFrom(s)) throw new o.ErrContractInteraction(`type mismatch at index ${e}, expected: ${t}, got: ${s}`)
                    }
                }
            }
        },
        7187: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NativeSerializer = void 0;
            const s = r(n(5646)),
                i = n(5569),
                a = n(9081),
                o = n(5569),
                u = n(5605),
                l = n(5487),
                c = n(7179);
            ! function(e) {
                function t(e, r, a) {
                    return r instanceof i.OptionType ? function(e, n, r) {
                        if (null == e) return i.OptionValue.newMissing();
                        let s = t(e, n.getFirstTypeParameter(), r);
                        return i.OptionValue.newProvided(s)
                    }(e, r, a) : r instanceof i.OptionalType ? function(e, n, r) {
                        if (null == e) return new i.OptionalValue(n);
                        let s = t(e, n.getFirstTypeParameter(), r);
                        return new i.OptionalValue(n, s)
                    }(e, r, a) : r instanceof i.VariadicType ? function(e, n, r) {
                        null == e && (e = []);
                        void 0 === e.map && r.convertError(e, "Variadic");
                        let s = e.map((function(e) {
                            return t(e, n.getFirstTypeParameter(), r)
                        }));
                        return new i.VariadicValue(n, s)
                    }(e, r, a) : r instanceof i.CompositeType ? function(e, n, r) {
                        let s = [],
                            a = n.getTypeParameters();
                        r.guardSameLength(e, a);
                        for (let n = 0; n < a.length; n++) s.push(t(e[n], a[n], r));
                        return new i.CompositeValue(n, s)
                    }(e, r, a) : r instanceof i.TupleType ? function(e, n, r) {
                        let s = [];
                        const i = n.getFieldsDefinitions();
                        r.guardSameLength(e, i);
                        for (let n = 0; n < i.length; n++) s.push(t(e[n], i[n].type, r));
                        return o.Tuple.fromItems(s)
                    }(e, r, a) : r instanceof o.StructType ? function(e, n, r) {
                        let s = [];
                        const i = n.getFieldsDefinitions();
                        for (let n = 0; n < i.length; n++) {
                            const a = i[n].name;
                            r.guardHasField(e, a);
                            const u = t(e[a], i[n].type, r);
                            s.push(new o.Field(u, a))
                        }
                        return new o.Struct(n, s)
                    }(e, r, a) : r instanceof i.ListType ? function(e, n, r) {
                        void 0 === e.map && r.convertError(e, "List");
                        let s = e.map((function(e) {
                            return t(e, n.getFirstTypeParameter(), r)
                        }));
                        return new i.List(n, s)
                    }(e, r, a) : r instanceof i.PrimitiveType ? function(e, t, r) {
                        if (t instanceof i.NumericalType) {
                            return function(e, t, n) {
                                switch (t.constructor) {
                                    case i.U8Type:
                                        return new i.U8Value(e);
                                    case i.I8Type:
                                        return new i.I8Value(e);
                                    case i.U16Type:
                                        return new i.U16Value(e);
                                    case i.I16Type:
                                        return new i.I16Value(e);
                                    case i.U32Type:
                                        return new i.U32Value(e);
                                    case i.I32Type:
                                        return new i.I32Value(e);
                                    case i.U64Type:
                                        return new i.U64Value(e);
                                    case i.I64Type:
                                        return new i.I64Value(e);
                                    case i.BigUIntType:
                                        return new i.BigUIntValue(e);
                                    case i.BigIntType:
                                        return new i.BigIntValue(e);
                                    default:
                                        n.unhandledType("convertNumericalType", t)
                                }
                            }(new s.default(e), t, r)
                        }
                        if (t instanceof i.BytesType) return function(e, t) {
                            const n = e.valueOf();
                            void 0 === e && t.convertError(e, "BytesValue");
                            if (e instanceof Buffer) return new i.BytesValue(e);
                            if ("string" == typeof e) return i.BytesValue.fromUTF8(e);
                            if (n instanceof Buffer) return new i.BytesValue(n);
                            if ("number" == typeof n) return i.BytesValue.fromHex(c.numberToPaddedHex(n));
                            t.convertError(e, "BytesValue")
                        }(e, r);
                        if (t instanceof i.AddressType) return new i.AddressValue(n(e, r));
                        if (t instanceof i.BooleanType) return new i.BooleanValue(e);
                        if (t instanceof i.TokenIdentifierType) return new i.TokenIdentifierValue(function(e, t) {
                            void 0 === e && t.convertError(e, "Buffer");
                            if (e instanceof Buffer) return e.toString();
                            if ("string" == typeof e) return e;
                            t.convertError(e, "Buffer")
                        }(e, r));
                        r.throwError("(function: toPrimitive) unsupported type " + t)
                    }(e, r, a) : void a.throwError("convertToTypedValue: unhandled type " + r)
                }

                function n(e, t) {
                    if (e.bech32) return e;
                    if (e.getAddress) return e.getAddress();
                    switch (e.constructor) {
                        case Buffer:
                        case String:
                            return new u.Address(e);
                        default:
                            t.convertError(e, "Address")
                    }
                }
                e.nativeToTypedValues = function(e, n) {
                    (function(e) {
                        for (let t = 0; t < e.length; t++) {
                            let n = e[t];
                            if (n && n.belongsToTypesystem) throw new l.ErrTypeInferenceSystemRequiresRegularJavascriptObjects(t)
                        }
                    })(e = e || []), e = function(e, t) {
                        let n = t.input,
                            {
                                min: r,
                                max: s,
                                variadic: i
                            } = function(e) {
                                let t = [...e].reverse(),
                                    n = e.length,
                                    r = e.length,
                                    s = !1;
                                t.length > 0 && t[0].type.getCardinality().isComposite() && (r = 1 / 0, s = !0);
                                for (let e of t) {
                                    if (e.type.getCardinality().isSingular()) break;
                                    n -= 1
                                }
                                return {
                                    min: n,
                                    max: r,
                                    variadic: s
                                }
                            }(n);
                        if (!(r <= e.length && e.length <= s)) throw new l.ErrInvalidArgument(`Wrong number of arguments for endpoint ${t.name}: expected between ${r} and ${s} arguments, have ${e.length}`);
                        if (i) {
                            let t = n.length - 1,
                                r = e.slice(t);
                            e[t] = r
                        }
                        return e
                    }(e, n);
                    let r = n.input,
                        s = [];
                    for (let i = 0; i < r.length; i++) {
                        let o = r[i],
                            u = new a.ArgumentErrorContext(n.name, i, o),
                            l = t(e[i], o.type, u);
                        s.push(l)
                    }
                    return s
                }, e.convertNativeToAddress = n
            }(t.NativeSerializer || (t.NativeSerializer = {}))
        },
        7188: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ReturnCode = void 0;
            class ReturnCode {
                constructor(e) {
                    this.text = e
                }
                static fromBuffer(e) {
                    let t = e.toString();
                    return new ReturnCode(t)
                }
                toString() {
                    return this.text
                }
                valueOf() {
                    return this.text
                }
                equals(e) {
                    return !!e && this.text == e.text
                }
                isSuccess() {
                    return this.equals(ReturnCode.Ok) || this.equals(ReturnCode.None)
                }
            }
            t.ReturnCode = ReturnCode, ReturnCode.None = new ReturnCode(""), ReturnCode.Ok = new ReturnCode("ok"), ReturnCode.FunctionNotFound = new ReturnCode("function not found"), ReturnCode.FunctionWrongSignature = new ReturnCode("wrong signature for function"), ReturnCode.ContractNotFound = new ReturnCode("contract not found"), ReturnCode.UserError = new ReturnCode("user error"), ReturnCode.OutOfGas = new ReturnCode("out of gas"), ReturnCode.AccountCollision = new ReturnCode("account collision"), ReturnCode.OutOfFunds = new ReturnCode("out of funds"), ReturnCode.CallStackOverFlow = new ReturnCode("call stack overflow"), ReturnCode.ContractInvalid = new ReturnCode("contract invalid"), ReturnCode.ExecutionFailed = new ReturnCode("execution failed"), ReturnCode.Unknown = new ReturnCode("unknown")
        },
        9047: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AbiRegistry = void 0;
            const a = i(n(5487)),
                o = n(5612),
                u = n(5920),
                l = n(7176),
                c = n(6177),
                d = n(7177),
                p = n(6482);
            class AbiRegistry {
                constructor() {
                    this.interfaces = [], this.customTypes = []
                }
                static create(e) {
                    return (new AbiRegistry).extend(e).remapToKnownTypes()
                }
                extend(e) {
                    e.types = e.types || {};
                    let t = l.ContractInterface.fromJSON(e);
                    this.interfaces.push(t);
                    for (const t in e.types) {
                        let n = e.types[t],
                            r = n.type;
                        n.name = t;
                        let s = this.createCustomType(r, n);
                        this.customTypes.push(s)
                    }
                    return this.sortCustomTypesByDependencies(), this
                }
                createCustomType(e, t) {
                    if ("struct" == e) return u.StructType.fromJSON(t);
                    if ("enum" == e) return c.EnumType.fromJSON(t);
                    throw new a.ErrTypingSystem("Unknown type discriminant: " + e)
                }
                sortCustomTypesByDependencies() {
                    this.customTypes.sort((e, t) => t.getNamesOfDependencies().indexOf(e.getName()) > -1 ? -1 : 1)
                }
                getInterface(e) {
                    let t = this.interfaces.find(t => t.name == e);
                    return o.guardValueIsSetWithMessage(`interface [${e}] not found`, t), t
                }
                getInterfaces(e) {
                    return e.map(e => this.getInterface(e))
                }
                getStruct(e) {
                    let t = this.customTypes.find(t => t.getName() == e && t.hasExactClass(u.StructType.ClassName));
                    return o.guardValueIsSetWithMessage(`struct [${e}] not found`, t), t
                }
                getStructs(e) {
                    return e.map(e => this.getStruct(e))
                }
                getEnum(e) {
                    let t = this.customTypes.find(t => t.getName() == e && t.hasExactClass(c.EnumType.ClassName));
                    return o.guardValueIsSetWithMessage(`enum [${e}] not found`, t), t
                }
                getEnums(e) {
                    return e.map(e => this.getEnum(e))
                }
                remapToKnownTypes() {
                    let e = new d.TypeMapper([]),
                        t = [],
                        n = [];
                    for (const n of this.customTypes) {
                        const r = e.mapType(n);
                        t.push(r)
                    }
                    e = new d.TypeMapper(t);
                    for (const t of this.interfaces) {
                        let r = [];
                        for (const n of t.endpoints) r.push(f(n, e));
                        let s = t.constructorDefinition ? f(t.constructorDefinition, e) : null;
                        n.push(new l.ContractInterface(t.name, s, r))
                    }
                    let r = new AbiRegistry;
                    return r.customTypes.push(...t), r.interfaces.push(...n), r
                }
            }

            function f(e, t) {
                let n = e.input.map(e => new p.EndpointParameterDefinition(e.name, e.description, t.mapType(e.type))),
                    r = e.output.map(e => new p.EndpointParameterDefinition(e.name, e.description, t.mapType(e.type)));
                return new p.EndpointDefinition(e.name, n, r, e.modifiers)
            }
            t.AbiRegistry = AbiRegistry
        },
        9048: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getJavascriptPrototypesInHierarchy = void 0, t.getJavascriptPrototypesInHierarchy = function(e, t) {
                let n = [],
                    r = Object.getPrototypeOf(e);
                for (; r && t(r);) n.push(r), r = Object.getPrototypeOf(r);
                return n
            }
        },
        9051: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CodeMetadataValue = t.CodeMetadataType = void 0;
            const r = n(5570);
            class CodeMetadataType extends r.PrimitiveType {
                constructor() {
                    super("CodeMetadata")
                }
            }
            t.CodeMetadataType = CodeMetadataType;
            class CodeMetadataValue extends r.PrimitiveValue {
                constructor(e) {
                    super(new CodeMetadataType), this.value = e
                }
                equals(e) {
                    return this.value.equals(e.value)
                }
                valueOf() {
                    return this.value
                }
            }
            t.CodeMetadataValue = CodeMetadataValue
        },
        9052: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createListOfTokenIdentifiers = t.createListOfAddresses = void 0;
            const r = n(6178),
                s = n(6179),
                i = n(6036);
            t.createListOfAddresses = function(e) {
                let t = e.map(e => new r.AddressValue(e));
                return s.List.fromItems(t)
            }, t.createListOfTokenIdentifiers = function(e) {
                let t = e.map(e => new i.TokenIdentifierValue(e));
                return s.List.fromItems(t)
            }
        },
        9053: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.onPrimitiveTypeSelect = t.onPrimitiveValueSelect = t.onTypedValueSelect = t.onTypeSelect = void 0;
            const a = i(n(5487)),
                o = n(6178),
                u = n(6483),
                l = n(5921),
                c = n(6177),
                d = n(6179),
                p = n(6180),
                f = n(6485),
                h = n(6491),
                y = n(5920),
                g = n(6036),
                m = n(6490),
                T = n(5570),
                v = n(6488),
                C = n(6489);
            t.onTypeSelect = function(e, t) {
                if (e.hasExactClass(d.OptionType.ClassName)) return t.onOption();
                if (e.hasExactClass(d.ListType.ClassName)) return t.onList();
                if (e.hasExactClass(v.ArrayVecType.ClassName)) return t.onArray();
                if (e.hasClassOrSuperclass(T.PrimitiveType.ClassName)) return t.onPrimitive();
                if (e.hasExactClass(y.StructType.ClassName)) return t.onStruct();
                if (e.hasExactClass(m.TupleType.ClassName)) return t.onTuple();
                if (e.hasExactClass(c.EnumType.ClassName)) return t.onEnum();
                if (t.onOther) return t.onOther();
                throw new a.ErrTypingSystem("type isn't known: " + e)
            }, t.onTypedValueSelect = function(e, t) {
                if (e.hasClassOrSuperclass(T.PrimitiveValue.ClassName)) return t.onPrimitive();
                if (e.hasExactClass(d.OptionValue.ClassName)) return t.onOption();
                if (e.hasExactClass(d.List.ClassName)) return t.onList();
                if (e.hasExactClass(v.ArrayVec.ClassName)) return t.onArray();
                if (e.hasExactClass(y.Struct.ClassName)) return t.onStruct();
                if (e.hasExactClass(m.Tuple.ClassName)) return t.onTuple();
                if (e.hasExactClass(c.EnumValue.ClassName)) return t.onEnum();
                if (t.onOther) return t.onOther();
                throw new a.ErrTypingSystem("value isn't typed: " + e)
            }, t.onPrimitiveValueSelect = function(e, t) {
                if (e.hasExactClass(u.BooleanValue.ClassName)) return t.onBoolean();
                if (e.hasClassOrSuperclass(f.NumericalValue.ClassName)) return t.onNumerical();
                if (e.hasExactClass(o.AddressValue.ClassName)) return t.onAddress();
                if (e.hasExactClass(l.BytesValue.ClassName)) return t.onBytes();
                if (e.hasExactClass(C.StringValue.ClassName)) return t.onString();
                if (e.hasExactClass(p.H256Value.ClassName)) return t.onH256();
                if (e.hasExactClass(g.TokenIdentifierValue.ClassName)) return t.onTypeIdentifier();
                if (e.hasExactClass(h.NothingValue.ClassName)) return t.onNothing();
                if (t.onOther) return t.onOther();
                throw new a.ErrTypingSystem("value isn't a primitive: " + e.getType())
            }, t.onPrimitiveTypeSelect = function(e, t) {
                if (e.hasExactClass(u.BooleanType.ClassName)) return t.onBoolean();
                if (e.hasClassOrSuperclass(f.NumericalType.ClassName)) return t.onNumerical();
                if (e.hasExactClass(o.AddressType.ClassName)) return t.onAddress();
                if (e.hasExactClass(l.BytesType.ClassName)) return t.onBytes();
                if (e.hasExactClass(C.StringType.ClassName)) return t.onString();
                if (e.hasExactClass(p.H256Type.ClassName)) return t.onH256();
                if (e.hasExactClass(g.TokenIdentifierType.ClassName)) return t.onTokenIndetifier();
                if (e.hasExactClass(h.NothingType.ClassName)) return t.onNothing();
                if (t.onOther) return t.onOther();
                throw new a.ErrTypingSystem("type isn't a known primitive: " + e)
            }
        },
        9054: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OptionValueBinaryCodec = void 0;
            const a = i(n(5487)),
                o = n(5569);
            t.OptionValueBinaryCodec = class OptionValueBinaryCodec {
                constructor(e) {
                    this.binaryCodec = e
                }
                decodeNested(e, t) {
                    if (0 == e[0]) return [o.OptionValue.newMissingTyped(t), 1];
                    if (1 != e[0]) throw new a.ErrCodec("invalid buffer for optional value");
                    let [n, r] = this.binaryCodec.decodeNested(e.slice(1), t);
                    return [o.OptionValue.newProvided(n), r + 1]
                }
                decodeTopLevel(e, t) {
                    if (0 == e.length) return new o.OptionValue(t);
                    if (1 != e[0]) throw new a.ErrCodec("invalid buffer for optional value");
                    let [n, r] = this.binaryCodec.decodeNested(e.slice(1), t);
                    return new o.OptionValue(t, n)
                }
                encodeNested(e) {
                    return e.isSet() ? Buffer.concat([Buffer.from([1]), this.binaryCodec.encodeNested(e.getTypedValue())]) : Buffer.from([0])
                }
                encodeTopLevel(e) {
                    return e.isSet() ? Buffer.concat([Buffer.from([1]), this.binaryCodec.encodeNested(e.getTypedValue())]) : Buffer.from([])
                }
            }
        },
        9055: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PrimitiveBinaryCodec = void 0;
            const r = n(5569),
                s = n(9056),
                i = n(9057),
                a = n(9058),
                o = n(9059),
                u = n(6494),
                l = n(9060),
                c = n(9061),
                d = n(9062);
            t.PrimitiveBinaryCodec = class PrimitiveBinaryCodec {
                constructor(e) {
                    this.binaryCodec = e, this.booleanCodec = new i.BooleanBinaryCodec, this.numericalCodec = new a.NumericalBinaryCodec, this.addressCodec = new s.AddressBinaryCodec, this.h256Codec = new o.H256BinaryCodec, this.bytesCodec = new u.BytesBinaryCodec, this.stringCodec = new d.StringBinaryCodec, this.tokenIdentifierCodec = new l.TokenIdentifierCodec, this.nothingCodec = new c.NothingCodec
                }
                decodeNested(e, t) {
                    return r.onPrimitiveTypeSelect(t, {
                        onBoolean: () => this.booleanCodec.decodeNested(e),
                        onNumerical: () => this.numericalCodec.decodeNested(e, t),
                        onAddress: () => this.addressCodec.decodeNested(e),
                        onBytes: () => this.bytesCodec.decodeNested(e),
                        onString: () => this.stringCodec.decodeNested(e),
                        onH256: () => this.h256Codec.decodeNested(e),
                        onTokenIndetifier: () => this.tokenIdentifierCodec.decodeNested(e),
                        onNothing: () => this.nothingCodec.decodeNested()
                    })
                }
                decodeTopLevel(e, t) {
                    return r.onPrimitiveTypeSelect(t, {
                        onBoolean: () => this.booleanCodec.decodeTopLevel(e),
                        onNumerical: () => this.numericalCodec.decodeTopLevel(e, t),
                        onAddress: () => this.addressCodec.decodeTopLevel(e),
                        onBytes: () => this.bytesCodec.decodeTopLevel(e),
                        onString: () => this.stringCodec.decodeTopLevel(e),
                        onH256: () => this.h256Codec.decodeTopLevel(e),
                        onTokenIndetifier: () => this.tokenIdentifierCodec.decodeTopLevel(e),
                        onNothing: () => this.nothingCodec.decodeTopLevel()
                    })
                }
                encodeNested(e) {
                    return r.onPrimitiveValueSelect(e, {
                        onBoolean: () => this.booleanCodec.encodeNested(e),
                        onNumerical: () => this.numericalCodec.encodeNested(e),
                        onAddress: () => this.addressCodec.encodeNested(e),
                        onBytes: () => this.bytesCodec.encodeNested(e),
                        onString: () => this.stringCodec.encodeNested(e),
                        onH256: () => this.h256Codec.encodeNested(e),
                        onTypeIdentifier: () => this.tokenIdentifierCodec.encodeNested(e),
                        onNothing: () => this.nothingCodec.encodeNested()
                    })
                }
                encodeTopLevel(e) {
                    return r.onPrimitiveValueSelect(e, {
                        onBoolean: () => this.booleanCodec.encodeTopLevel(e),
                        onNumerical: () => this.numericalCodec.encodeTopLevel(e),
                        onAddress: () => this.addressCodec.encodeTopLevel(e),
                        onBytes: () => this.bytesCodec.encodeTopLevel(e),
                        onString: () => this.stringCodec.encodeTopLevel(e),
                        onH256: () => this.h256Codec.encodeTopLevel(e),
                        onTypeIdentifier: () => this.tokenIdentifierCodec.encodeTopLevel(e),
                        onNothing: () => this.nothingCodec.encodeTopLevel()
                    })
                }
            }
        },
        9056: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddressBinaryCodec = void 0;
            const r = n(5605),
                s = n(5569);
            t.AddressBinaryCodec = class AddressBinaryCodec {
                decodeNested(e) {
                    let t = e.slice(0, 32),
                        n = new r.Address(t);
                    return [new s.AddressValue(n), 32]
                }
                decodeTopLevel(e) {
                    let [t, n] = this.decodeNested(e);
                    return t
                }
                encodeNested(e) {
                    return e.valueOf().pubkey()
                }
                encodeTopLevel(e) {
                    return e.valueOf().pubkey()
                }
            }
        },
        9057: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BooleanBinaryCodec = void 0;
            const a = i(n(5487)),
                o = n(5569);
            class BooleanBinaryCodec {
                decodeNested(e) {
                    let t = e.readUInt8(0);
                    return [new o.BooleanValue(t == BooleanBinaryCodec.TRUE), 1]
                }
                decodeTopLevel(e) {
                    if (e.length > 1) throw new a.ErrInvalidArgument("buffer should be of size <= 1");
                    let t = e[0];
                    return new o.BooleanValue(t == BooleanBinaryCodec.TRUE)
                }
                encodeNested(e) {
                    return e.isTrue() ? Buffer.from([BooleanBinaryCodec.TRUE]) : Buffer.from([BooleanBinaryCodec.FALSE])
                }
                encodeTopLevel(e) {
                    return e.isTrue() ? Buffer.from([BooleanBinaryCodec.TRUE]) : Buffer.from([])
                }
            }
            t.BooleanBinaryCodec = BooleanBinaryCodec, BooleanBinaryCodec.TRUE = 1, BooleanBinaryCodec.FALSE = 0
        },
        9058: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NumericalBinaryCodec = void 0;
            const s = n(5569),
                i = n(6492),
                a = r(n(5646)),
                o = n(6493);
            t.NumericalBinaryCodec = class NumericalBinaryCodec {
                decodeNested(e, t) {
                    let n = 0,
                        r = t.sizeInBytes;
                    r || (n = o.SizeOfU32, r = e.readUInt32BE(0));
                    let s = e.slice(n, n + r);
                    return [this.decodeTopLevel(s, t), r + n]
                }
                decodeTopLevel(e, t) {
                    let n = i.cloneBuffer(e);
                    if (0 == e.length) return new s.NumericalValue(t, new a.default(0));
                    if (!t.withSign || i.isMsbZero(n)) {
                        let e = i.bufferToBigInt(n);
                        return new s.NumericalValue(t, e)
                    }
                    i.flipBufferBitsInPlace(n);
                    let r = i.bufferToBigInt(n).multipliedBy(new a.default(-1)).minus(new a.default(1));
                    return new s.NumericalValue(t, r)
                }
                encodeNested(e) {
                    if (e.sizeInBytes) return this.encodeNestedFixedSize(e, e.sizeInBytes);
                    let t = this.encodeTopLevel(e),
                        n = Buffer.alloc(o.SizeOfU32);
                    return n.writeUInt32BE(t.length), Buffer.concat([n, t])
                }
                encodeNestedFixedSize(e, t) {
                    if (e.value.isZero()) return Buffer.alloc(t, 0);
                    if (!e.withSign) {
                        const n = i.bigIntToBuffer(e.value),
                            r = Buffer.alloc(t - n.length, 0);
                        return Buffer.concat([r, n])
                    }
                    if (e.value.isPositive()) {
                        let n = i.bigIntToBuffer(e.value);
                        i.isMsbOne(n) && (n = i.prependByteToBuffer(n, 0));
                        const r = Buffer.alloc(t - n.length, 0);
                        return Buffer.concat([r, n])
                    }
                    let n = e.value.plus(new a.default(1)),
                        r = i.bigIntToBuffer(n);
                    i.flipBufferBitsInPlace(r), i.isMsbZero(r) && (r = i.prependByteToBuffer(r, 255));
                    const s = Buffer.alloc(t - r.length, 255);
                    return Buffer.concat([s, r])
                }
                encodeTopLevel(e) {
                    let t = e.withSign;
                    return e.value.isZero() ? Buffer.alloc(0) : t ? this.encodePrimitive(e) : i.bigIntToBuffer(e.value)
                }
                encodePrimitive(e) {
                    if (e.value.isPositive()) {
                        let t = i.bigIntToBuffer(e.value);
                        return i.isMsbOne(t) && (t = i.prependByteToBuffer(t, 0)), t
                    }
                    let t = e.value.plus(new a.default(1)),
                        n = i.bigIntToBuffer(t);
                    return i.flipBufferBitsInPlace(n), i.isMsbZero(n) && (n = i.prependByteToBuffer(n, 255)), n
                }
            }
        },
        9059: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.H256BinaryCodec = void 0;
            const r = n(6180);
            t.H256BinaryCodec = class H256BinaryCodec {
                decodeNested(e) {
                    let t = e.slice(0, 32);
                    return [new r.H256Value(t), 32]
                }
                decodeTopLevel(e) {
                    let [t, n] = this.decodeNested(e);
                    return t
                }
                encodeNested(e) {
                    return e.valueOf()
                }
                encodeTopLevel(e) {
                    return e.valueOf()
                }
            }
        },
        9060: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TokenIdentifierCodec = void 0;
            const r = n(5921),
                s = n(6036),
                i = n(6494);
            t.TokenIdentifierCodec = class TokenIdentifierCodec {
                constructor() {
                    this.bytesCodec = new i.BytesBinaryCodec
                }
                decodeNested(e) {
                    let [t, n] = this.bytesCodec.decodeNested(e);
                    return [new s.TokenIdentifierValue(t.toString()), n]
                }
                decodeTopLevel(e) {
                    let t = this.bytesCodec.decodeTopLevel(e);
                    return new s.TokenIdentifierValue(t.toString())
                }
                encodeNested(e) {
                    let t = r.BytesValue.fromUTF8(e.valueOf());
                    return this.bytesCodec.encodeNested(t)
                }
                encodeTopLevel(e) {
                    return Buffer.from(e.valueOf())
                }
            }
        },
        9061: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NothingCodec = void 0;
            const r = n(5569);
            t.NothingCodec = class NothingCodec {
                decodeNested() {
                    return [new r.NothingValue, 0]
                }
                decodeTopLevel() {
                    return new r.NothingValue
                }
                encodeNested() {
                    return Buffer.from([])
                }
                encodeTopLevel() {
                    return Buffer.from([])
                }
            }
        },
        9062: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StringBinaryCodec = void 0;
            const r = n(5569),
                s = n(5921),
                i = n(6494);
            t.StringBinaryCodec = class StringBinaryCodec {
                constructor() {
                    this.bytesBinaryCodec = new i.BytesBinaryCodec
                }
                decodeNested(e) {
                    let [t, n] = this.bytesBinaryCodec.decodeNested(e);
                    return [new r.StringValue(t.valueOf().toString()), n]
                }
                decodeTopLevel(e) {
                    return new r.StringValue(e.toString())
                }
                encodeNested(e) {
                    let t = s.BytesValue.fromUTF8(e.valueOf());
                    return this.bytesBinaryCodec.encodeNested(t)
                }
                encodeTopLevel(e) {
                    return Buffer.from(e.valueOf())
                }
            }
        },
        9063: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ListBinaryCodec = void 0;
            const r = n(5569),
                s = n(6493);
            t.ListBinaryCodec = class ListBinaryCodec {
                constructor(e) {
                    this.binaryCodec = e
                }
                decodeNested(e, t) {
                    let n = t.getFirstTypeParameter(),
                        i = [],
                        a = e.readUInt32BE(0);
                    this.binaryCodec.constraints.checkListLength(a);
                    let o = e,
                        u = s.SizeOfU32;
                    e = o.slice(u);
                    for (let t = 0; t < a; t++) {
                        let [t, r] = this.binaryCodec.decodeNested(e, n);
                        i.push(t), u += r, e = o.slice(u)
                    }
                    return [new r.List(t, i), u]
                }
                decodeTopLevel(e, t) {
                    let n = t.getFirstTypeParameter(),
                        s = [],
                        i = e,
                        a = 0;
                    for (; e.length > 0;) {
                        let [t, r] = this.binaryCodec.decodeNested(e, n);
                        s.push(t), a += r, e = i.slice(a), this.binaryCodec.constraints.checkListLength(s.length)
                    }
                    return new r.List(t, s)
                }
                encodeNested(e) {
                    this.binaryCodec.constraints.checkListLength(e.getLength());
                    let t = Buffer.alloc(s.SizeOfU32);
                    t.writeUInt32BE(e.getLength());
                    let n = [];
                    for (const t of e.getItems()) {
                        let e = this.binaryCodec.encodeNested(t);
                        n.push(e)
                    }
                    return Buffer.concat([t, ...n])
                }
                encodeTopLevel(e) {
                    this.binaryCodec.constraints.checkListLength(e.getLength());
                    let t = [];
                    for (const n of e.getItems()) {
                        let e = this.binaryCodec.encodeNested(n);
                        t.push(e)
                    }
                    return Buffer.concat(t)
                }
            }
        },
        9064: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EnumBinaryCodec = void 0;
            const r = n(5569),
                s = n(7181);
            t.EnumBinaryCodec = class EnumBinaryCodec {
                constructor(e) {
                    this.binaryCodec = e, this.fieldsCodec = new s.FieldsBinaryCodec(e)
                }
                decodeTopLevel(e, t) {
                    let [n] = this.decodeNested(e, t);
                    return n
                }
                decodeNested(e, t) {
                    let [n, s] = this.readDiscriminant(e);
                    e = e.slice(s);
                    let i = t.getVariantByDiscriminant(n),
                        a = i.getFieldsDefinitions(),
                        [o, u] = this.fieldsCodec.decodeNested(e, a);
                    return [new r.EnumValue(t, i, o), s + u]
                }
                readDiscriminant(e) {
                    let [t, n] = this.binaryCodec.decodeNested(e, new r.U8Type);
                    return [t.valueOf(), n]
                }
                encodeNested(e) {
                    let t = new r.U8Value(e.discriminant),
                        n = this.binaryCodec.encodeNested(t),
                        s = e.getFields(),
                        i = this.fieldsCodec.encodeNested(s);
                    return Buffer.concat([n, i])
                }
                encodeTopLevel(e) {
                    let t = e.getFields(),
                        n = t.length > 0,
                        s = this.fieldsCodec.encodeNested(t),
                        i = new r.U8Value(e.discriminant),
                        a = n ? this.binaryCodec.encodeNested(i) : this.binaryCodec.encodeTopLevel(i);
                    return Buffer.concat([a, s])
                }
            }
        },
        9065: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TupleBinaryCodec = void 0;
            const r = n(7180);
            t.TupleBinaryCodec = class TupleBinaryCodec {
                constructor(e) {
                    this.structCodec = new r.StructBinaryCodec(e)
                }
                decodeTopLevel(e, t) {
                    return this.structCodec.decodeTopLevel(e, t)
                }
                decodeNested(e, t) {
                    return this.structCodec.decodeNested(e, t)
                }
                encodeNested(e) {
                    return this.structCodec.encodeNested(e)
                }
                encodeTopLevel(e) {
                    return this.structCodec.encodeTopLevel(e)
                }
            }
        },
        9066: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ArrayVecBinaryCodec = void 0;
            const r = n(5569);
            t.ArrayVecBinaryCodec = class ArrayVecBinaryCodec {
                constructor(e) {
                    this.binaryCodec = e
                }
                decodeNested(e, t) {
                    let n = t.length,
                        s = t.getFirstTypeParameter(),
                        i = [],
                        a = 0;
                    for (let t = 0; t < n; t++) {
                        let [t, n] = this.binaryCodec.decodeNested(e, s);
                        i.push(t), a += n, e = e.slice(n)
                    }
                    return [new r.ArrayVec(t, i), a]
                }
                decodeTopLevel(e, t) {
                    let [n, r] = this.decodeNested(e, t);
                    return n
                }
                encodeNested(e) {
                    let t = [];
                    for (const n of e.getItems()) {
                        let e = this.binaryCodec.encodeNested(n);
                        t.push(e)
                    }
                    return Buffer.concat(t)
                }
                encodeTopLevel(e) {
                    return this.encodeNested(e)
                }
            }
        },
        9067: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decodeBigNumber = t.decodeString = t.decodeBool = t.decodeUnsignedNumber = void 0;
            const s = r(n(5646)),
                i = n(5569),
                a = new(n(7175).BinaryCodec);
            t.decodeUnsignedNumber = function(e) {
                let t = a.decodeTopLevel(e, new i.BigUIntType);
                return Number(t.valueOf())
            }, t.decodeBool = function(e) {
                let t = a.decodeTopLevel(e, new i.BooleanType);
                return Boolean(t.valueOf())
            }, t.decodeString = function(e) {
                let t = a.decodeTopLevel(e, new i.BytesType);
                return String(t.valueOf())
            }, t.decodeBigNumber = function(e) {
                let t = a.decodeTopLevel(e, new i.BigUIntType);
                return new s.default(t.valueOf())
            }
        },
        9068: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), s(n(9069), t)
        },
        9069: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return s(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProtoSerializer = void 0;
            const o = i(n(5487)),
                u = n(6492),
                l = n(9070),
                c = n(6176),
                d = n(5605),
                p = a(n(5646));
            t.ProtoSerializer = class ProtoSerializer {
                serializeTransaction(e) {
                    let t = new d.Address(e.getReceiver().bech32()).pubkey(),
                        n = new d.Address(e.getSender().bech32()).pubkey(),
                        r = new l.proto.Transaction({
                            Nonce: e.getNonce().valueOf() ? e.getNonce().valueOf() : void 0,
                            Value: this.serializeTransactionValue(e.getValue()),
                            RcvAddr: t,
                            RcvUserName: null,
                            SndAddr: n,
                            SndUserName: null,
                            GasPrice: e.getGasPrice().valueOf(),
                            GasLimit: e.getGasLimit().valueOf(),
                            Data: 0 == e.getData().length() ? null : e.getData().valueOf(),
                            ChainID: Buffer.from(e.getChainID().valueOf()),
                            Version: e.getVersion().valueOf(),
                            Signature: Buffer.from(e.getSignature().hex(), "hex")
                        });
                    e.getOptions().valueOf() !== c.TRANSACTION_OPTIONS_DEFAULT && (r.Options = e.getOptions().valueOf());
                    let s = l.proto.Transaction.encode(r).finish();
                    return Buffer.from(s)
                }
                serializeTransactionValue(e) {
                    let t = new p.default(e.toString());
                    if (t.isZero()) return Buffer.from([0, 0]);
                    let n = u.bigIntToBuffer(t);
                    return n = Buffer.concat([Buffer.from([0]), n]), n
                }
                deserializeTransaction(e) {
                    throw new o.ErrUnsupportedOperation("deserializeTransaction")
                }
            }
        },
        9070: function(e, t, n) {
            "use strict";
            var r, s = n(8),
                i = s.Reader,
                a = s.Writer,
                o = s.util,
                u = s.roots.default || (s.roots.default = {});
            u.proto = ((r = {}).Transaction = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.Nonce = o.Long ? o.Long.fromBits(0, 0, !0) : 0, e.prototype.Value = o.newBuffer([]), e.prototype.RcvAddr = o.newBuffer([]), e.prototype.RcvUserName = o.newBuffer([]), e.prototype.SndAddr = o.newBuffer([]), e.prototype.SndUserName = o.newBuffer([]), e.prototype.GasPrice = o.Long ? o.Long.fromBits(0, 0, !0) : 0, e.prototype.GasLimit = o.Long ? o.Long.fromBits(0, 0, !0) : 0, e.prototype.Data = o.newBuffer([]), e.prototype.ChainID = o.newBuffer([]), e.prototype.Version = 0, e.prototype.Signature = o.newBuffer([]), e.prototype.Options = 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.Nonce && Object.hasOwnProperty.call(e, "Nonce") && t.uint32(8).uint64(e.Nonce), null != e.Value && Object.hasOwnProperty.call(e, "Value") && t.uint32(18).bytes(e.Value), null != e.RcvAddr && Object.hasOwnProperty.call(e, "RcvAddr") && t.uint32(26).bytes(e.RcvAddr), null != e.RcvUserName && Object.hasOwnProperty.call(e, "RcvUserName") && t.uint32(34).bytes(e.RcvUserName), null != e.SndAddr && Object.hasOwnProperty.call(e, "SndAddr") && t.uint32(42).bytes(e.SndAddr), null != e.SndUserName && Object.hasOwnProperty.call(e, "SndUserName") && t.uint32(50).bytes(e.SndUserName), null != e.GasPrice && Object.hasOwnProperty.call(e, "GasPrice") && t.uint32(56).uint64(e.GasPrice), null != e.GasLimit && Object.hasOwnProperty.call(e, "GasLimit") && t.uint32(64).uint64(e.GasLimit), null != e.Data && Object.hasOwnProperty.call(e, "Data") && t.uint32(74).bytes(e.Data), null != e.ChainID && Object.hasOwnProperty.call(e, "ChainID") && t.uint32(82).bytes(e.ChainID), null != e.Version && Object.hasOwnProperty.call(e, "Version") && t.uint32(88).uint32(e.Version), null != e.Signature && Object.hasOwnProperty.call(e, "Signature") && t.uint32(98).bytes(e.Signature), null != e.Options && Object.hasOwnProperty.call(e, "Options") && t.uint32(104).uint32(e.Options), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof i || (e = i.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new u.proto.Transaction; e.pos < n;) {
                        var s = e.uint32();
                        switch (s >>> 3) {
                            case 1:
                                r.Nonce = e.uint64();
                                break;
                            case 2:
                                r.Value = e.bytes();
                                break;
                            case 3:
                                r.RcvAddr = e.bytes();
                                break;
                            case 4:
                                r.RcvUserName = e.bytes();
                                break;
                            case 5:
                                r.SndAddr = e.bytes();
                                break;
                            case 6:
                                r.SndUserName = e.bytes();
                                break;
                            case 7:
                                r.GasPrice = e.uint64();
                                break;
                            case 8:
                                r.GasLimit = e.uint64();
                                break;
                            case 9:
                                r.Data = e.bytes();
                                break;
                            case 10:
                                r.ChainID = e.bytes();
                                break;
                            case 11:
                                r.Version = e.uint32();
                                break;
                            case 12:
                                r.Signature = e.bytes();
                                break;
                            case 13:
                                r.Options = e.uint32();
                                break;
                            default:
                                e.skipType(7 & s)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof i || (e = new i(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    return "object" != typeof e || null === e ? "object expected" : null != e.Nonce && e.hasOwnProperty("Nonce") && !(o.isInteger(e.Nonce) || e.Nonce && o.isInteger(e.Nonce.low) && o.isInteger(e.Nonce.high)) ? "Nonce: integer|Long expected" : null != e.Value && e.hasOwnProperty("Value") && !(e.Value && "number" == typeof e.Value.length || o.isString(e.Value)) ? "Value: buffer expected" : null != e.RcvAddr && e.hasOwnProperty("RcvAddr") && !(e.RcvAddr && "number" == typeof e.RcvAddr.length || o.isString(e.RcvAddr)) ? "RcvAddr: buffer expected" : null != e.RcvUserName && e.hasOwnProperty("RcvUserName") && !(e.RcvUserName && "number" == typeof e.RcvUserName.length || o.isString(e.RcvUserName)) ? "RcvUserName: buffer expected" : null != e.SndAddr && e.hasOwnProperty("SndAddr") && !(e.SndAddr && "number" == typeof e.SndAddr.length || o.isString(e.SndAddr)) ? "SndAddr: buffer expected" : null != e.SndUserName && e.hasOwnProperty("SndUserName") && !(e.SndUserName && "number" == typeof e.SndUserName.length || o.isString(e.SndUserName)) ? "SndUserName: buffer expected" : null != e.GasPrice && e.hasOwnProperty("GasPrice") && !(o.isInteger(e.GasPrice) || e.GasPrice && o.isInteger(e.GasPrice.low) && o.isInteger(e.GasPrice.high)) ? "GasPrice: integer|Long expected" : null != e.GasLimit && e.hasOwnProperty("GasLimit") && !(o.isInteger(e.GasLimit) || e.GasLimit && o.isInteger(e.GasLimit.low) && o.isInteger(e.GasLimit.high)) ? "GasLimit: integer|Long expected" : null != e.Data && e.hasOwnProperty("Data") && !(e.Data && "number" == typeof e.Data.length || o.isString(e.Data)) ? "Data: buffer expected" : null != e.ChainID && e.hasOwnProperty("ChainID") && !(e.ChainID && "number" == typeof e.ChainID.length || o.isString(e.ChainID)) ? "ChainID: buffer expected" : null != e.Version && e.hasOwnProperty("Version") && !o.isInteger(e.Version) ? "Version: integer expected" : null != e.Signature && e.hasOwnProperty("Signature") && !(e.Signature && "number" == typeof e.Signature.length || o.isString(e.Signature)) ? "Signature: buffer expected" : null != e.Options && e.hasOwnProperty("Options") && !o.isInteger(e.Options) ? "Options: integer expected" : null
                }, e.fromObject = function(e) {
                    if (e instanceof u.proto.Transaction) return e;
                    var t = new u.proto.Transaction;
                    return null != e.Nonce && (o.Long ? (t.Nonce = o.Long.fromValue(e.Nonce)).unsigned = !0 : "string" == typeof e.Nonce ? t.Nonce = parseInt(e.Nonce, 10) : "number" == typeof e.Nonce ? t.Nonce = e.Nonce : "object" == typeof e.Nonce && (t.Nonce = new o.LongBits(e.Nonce.low >>> 0, e.Nonce.high >>> 0).toNumber(!0))), null != e.Value && ("string" == typeof e.Value ? o.base64.decode(e.Value, t.Value = o.newBuffer(o.base64.length(e.Value)), 0) : e.Value.length && (t.Value = e.Value)), null != e.RcvAddr && ("string" == typeof e.RcvAddr ? o.base64.decode(e.RcvAddr, t.RcvAddr = o.newBuffer(o.base64.length(e.RcvAddr)), 0) : e.RcvAddr.length && (t.RcvAddr = e.RcvAddr)), null != e.RcvUserName && ("string" == typeof e.RcvUserName ? o.base64.decode(e.RcvUserName, t.RcvUserName = o.newBuffer(o.base64.length(e.RcvUserName)), 0) : e.RcvUserName.length && (t.RcvUserName = e.RcvUserName)), null != e.SndAddr && ("string" == typeof e.SndAddr ? o.base64.decode(e.SndAddr, t.SndAddr = o.newBuffer(o.base64.length(e.SndAddr)), 0) : e.SndAddr.length && (t.SndAddr = e.SndAddr)), null != e.SndUserName && ("string" == typeof e.SndUserName ? o.base64.decode(e.SndUserName, t.SndUserName = o.newBuffer(o.base64.length(e.SndUserName)), 0) : e.SndUserName.length && (t.SndUserName = e.SndUserName)), null != e.GasPrice && (o.Long ? (t.GasPrice = o.Long.fromValue(e.GasPrice)).unsigned = !0 : "string" == typeof e.GasPrice ? t.GasPrice = parseInt(e.GasPrice, 10) : "number" == typeof e.GasPrice ? t.GasPrice = e.GasPrice : "object" == typeof e.GasPrice && (t.GasPrice = new o.LongBits(e.GasPrice.low >>> 0, e.GasPrice.high >>> 0).toNumber(!0))), null != e.GasLimit && (o.Long ? (t.GasLimit = o.Long.fromValue(e.GasLimit)).unsigned = !0 : "string" == typeof e.GasLimit ? t.GasLimit = parseInt(e.GasLimit, 10) : "number" == typeof e.GasLimit ? t.GasLimit = e.GasLimit : "object" == typeof e.GasLimit && (t.GasLimit = new o.LongBits(e.GasLimit.low >>> 0, e.GasLimit.high >>> 0).toNumber(!0))), null != e.Data && ("string" == typeof e.Data ? o.base64.decode(e.Data, t.Data = o.newBuffer(o.base64.length(e.Data)), 0) : e.Data.length && (t.Data = e.Data)), null != e.ChainID && ("string" == typeof e.ChainID ? o.base64.decode(e.ChainID, t.ChainID = o.newBuffer(o.base64.length(e.ChainID)), 0) : e.ChainID.length && (t.ChainID = e.ChainID)), null != e.Version && (t.Version = e.Version >>> 0), null != e.Signature && ("string" == typeof e.Signature ? o.base64.decode(e.Signature, t.Signature = o.newBuffer(o.base64.length(e.Signature)), 0) : e.Signature.length && (t.Signature = e.Signature)), null != e.Options && (t.Options = e.Options >>> 0), t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var n = {};
                    if (t.defaults) {
                        if (o.Long) {
                            var r = new o.Long(0, 0, !0);
                            n.Nonce = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r
                        } else n.Nonce = t.longs === String ? "0" : 0;
                        t.bytes === String ? n.Value = "" : (n.Value = [], t.bytes !== Array && (n.Value = o.newBuffer(n.Value))), t.bytes === String ? n.RcvAddr = "" : (n.RcvAddr = [], t.bytes !== Array && (n.RcvAddr = o.newBuffer(n.RcvAddr))), t.bytes === String ? n.RcvUserName = "" : (n.RcvUserName = [], t.bytes !== Array && (n.RcvUserName = o.newBuffer(n.RcvUserName))), t.bytes === String ? n.SndAddr = "" : (n.SndAddr = [], t.bytes !== Array && (n.SndAddr = o.newBuffer(n.SndAddr))), t.bytes === String ? n.SndUserName = "" : (n.SndUserName = [], t.bytes !== Array && (n.SndUserName = o.newBuffer(n.SndUserName))), o.Long ? (r = new o.Long(0, 0, !0), n.GasPrice = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r) : n.GasPrice = t.longs === String ? "0" : 0, o.Long ? (r = new o.Long(0, 0, !0), n.GasLimit = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r) : n.GasLimit = t.longs === String ? "0" : 0, t.bytes === String ? n.Data = "" : (n.Data = [], t.bytes !== Array && (n.Data = o.newBuffer(n.Data))), t.bytes === String ? n.ChainID = "" : (n.ChainID = [], t.bytes !== Array && (n.ChainID = o.newBuffer(n.ChainID))), n.Version = 0, t.bytes === String ? n.Signature = "" : (n.Signature = [], t.bytes !== Array && (n.Signature = o.newBuffer(n.Signature))), n.Options = 0
                    }
                    return null != e.Nonce && e.hasOwnProperty("Nonce") && ("number" == typeof e.Nonce ? n.Nonce = t.longs === String ? String(e.Nonce) : e.Nonce : n.Nonce = t.longs === String ? o.Long.prototype.toString.call(e.Nonce) : t.longs === Number ? new o.LongBits(e.Nonce.low >>> 0, e.Nonce.high >>> 0).toNumber(!0) : e.Nonce), null != e.Value && e.hasOwnProperty("Value") && (n.Value = t.bytes === String ? o.base64.encode(e.Value, 0, e.Value.length) : t.bytes === Array ? Array.prototype.slice.call(e.Value) : e.Value), null != e.RcvAddr && e.hasOwnProperty("RcvAddr") && (n.RcvAddr = t.bytes === String ? o.base64.encode(e.RcvAddr, 0, e.RcvAddr.length) : t.bytes === Array ? Array.prototype.slice.call(e.RcvAddr) : e.RcvAddr), null != e.RcvUserName && e.hasOwnProperty("RcvUserName") && (n.RcvUserName = t.bytes === String ? o.base64.encode(e.RcvUserName, 0, e.RcvUserName.length) : t.bytes === Array ? Array.prototype.slice.call(e.RcvUserName) : e.RcvUserName), null != e.SndAddr && e.hasOwnProperty("SndAddr") && (n.SndAddr = t.bytes === String ? o.base64.encode(e.SndAddr, 0, e.SndAddr.length) : t.bytes === Array ? Array.prototype.slice.call(e.SndAddr) : e.SndAddr), null != e.SndUserName && e.hasOwnProperty("SndUserName") && (n.SndUserName = t.bytes === String ? o.base64.encode(e.SndUserName, 0, e.SndUserName.length) : t.bytes === Array ? Array.prototype.slice.call(e.SndUserName) : e.SndUserName), null != e.GasPrice && e.hasOwnProperty("GasPrice") && ("number" == typeof e.GasPrice ? n.GasPrice = t.longs === String ? String(e.GasPrice) : e.GasPrice : n.GasPrice = t.longs === String ? o.Long.prototype.toString.call(e.GasPrice) : t.longs === Number ? new o.LongBits(e.GasPrice.low >>> 0, e.GasPrice.high >>> 0).toNumber(!0) : e.GasPrice), null != e.GasLimit && e.hasOwnProperty("GasLimit") && ("number" == typeof e.GasLimit ? n.GasLimit = t.longs === String ? String(e.GasLimit) : e.GasLimit : n.GasLimit = t.longs === String ? o.Long.prototype.toString.call(e.GasLimit) : t.longs === Number ? new o.LongBits(e.GasLimit.low >>> 0, e.GasLimit.high >>> 0).toNumber(!0) : e.GasLimit), null != e.Data && e.hasOwnProperty("Data") && (n.Data = t.bytes === String ? o.base64.encode(e.Data, 0, e.Data.length) : t.bytes === Array ? Array.prototype.slice.call(e.Data) : e.Data), null != e.ChainID && e.hasOwnProperty("ChainID") && (n.ChainID = t.bytes === String ? o.base64.encode(e.ChainID, 0, e.ChainID.length) : t.bytes === Array ? Array.prototype.slice.call(e.ChainID) : e.ChainID), null != e.Version && e.hasOwnProperty("Version") && (n.Version = e.Version), null != e.Signature && e.hasOwnProperty("Signature") && (n.Signature = t.bytes === String ? o.base64.encode(e.Signature, 0, e.Signature.length) : t.bytes === Array ? Array.prototype.slice.call(e.Signature) : e.Signature), null != e.Options && e.hasOwnProperty("Options") && (n.Options = e.Options), n
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, s.util.toJSONOptions)
                }, e
            }(), r), e.exports = u
        },
        9077: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SignableMessage = t.MESSAGE_PREFIX = void 0;
            const r = n(6479),
                s = n(5605),
                i = n(554);
            t.MESSAGE_PREFIX = "Elrond Signed Message:\n";
            t.SignableMessage = class SignableMessage {
                constructor(e) {
                    this.message = Buffer.from([]), this.signature = new r.Signature, this.version = 1, this.signer = "ErdJS", this.address = new s.Address, Object.assign(this, e)
                }
                serializeForSigning() {
                    const e = Buffer.from(this.message.length.toString()),
                        n = Buffer.concat([e, this.message]);
                    let r = Buffer.concat([Buffer.from(t.MESSAGE_PREFIX), n]);
                    return i("keccak256").update(r).digest()
                }
                serializeForSigningRaw() {
                    return Buffer.concat([this.getMessageSize(), this.message])
                }
                getSignature() {
                    return this.signature
                }
                applySignature(e) {
                    this.signature = e
                }
                getMessageSize() {
                    const e = Buffer.alloc(4);
                    return e.writeUInt32BE(this.message.length, 0), e
                }
                toJSON() {
                    return {
                        address: this.address.bech32(),
                        message: "0x" + this.message.toString("hex"),
                        signature: "0x" + this.signature.hex(),
                        version: this.version,
                        signer: this.signer
                    }
                }
            }
        },
        9078: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SmartContractAbi = void 0;
            const r = n(5612),
                s = n(6181);
            t.SmartContractAbi = class SmartContractAbi {
                constructor(e, t) {
                    this.interface = e.interfaces[0]
                }
                getAllEndpoints() {
                    return this.interface.endpoints
                }
                getEndpoint(e) {
                    e instanceof s.ContractFunction && (e = e.name);
                    let t = this.getAllEndpoints().find(t => t.name === e);
                    return r.guardValueIsSetWithMessage(`endpoint [${e}] not found`, t), t
                }
                getConstructorDefinition() {
                    return this.interface.getConstructorDefinition()
                }
            }
        },
        9079: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Code = void 0;
            class Code {
                constructor(e) {
                    this.hex = e
                }
                static fromBuffer(e) {
                    return new Code(e.toString("hex"))
                }
                toString() {
                    return this.hex
                }
                valueOf() {
                    return Buffer.from(this.hex, "hex")
                }
            }
            t.Code = Code
        },
        9080: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        9081: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ArgumentErrorContext = void 0;
            const r = n(5487);
            t.ArgumentErrorContext = class ArgumentErrorContext {
                constructor(e, t, n) {
                    this.endpointName = e, this.argumentIndex = t, this.parameterDefinition = n
                }
                throwError(e) {
                    throw new r.ErrInvalidArgument(`Error when converting arguments for endpoint (endpoint name: ${this.endpointName}, argument index: ${this.argumentIndex}, name: ${this.parameterDefinition.name}, type: ${this.parameterDefinition.type})\nNested error: ${e}`)
                }
                convertError(e, t) {
                    this.throwError(`Can't convert argument (argument: ${e}, type ${typeof e}), wanted type: ${t})`)
                }
                unhandledType(e, t) {
                    this.throwError(`Unhandled type (function: ${e}, type: ${t})`)
                }
                guardSameLength(e, t) {
                    (e = e || []).length != t.length && this.throwError(`Incorrect composite type length: have ${e.length}, expected ${t.length} (argument: ${e})`)
                }
                guardHasField(e, t) {
                    t in (e = e || {}) || this.throwError(`Struct argument does not contain a field named "${t}" (argument: ${JSON.stringify(e)})`)
                }
            }
        },
        9082: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ResultsParser = void 0;
            const r = n(9083),
                s = n(5605),
                i = n(5487),
                a = n(6175),
                o = n(6034),
                u = n(7188);
            var l, c;
            ! function(e) {
                e.OnTransactionCompleted = "completedTxEvent", e.OnSignalError = "signalError", e.OnWriteLog = "writeLog"
            }(l || (l = {})),
            function(e) {
                e.TooMuchGas = "@too much gas provided for processing"
            }(c || (c = {}));
            const d = {
                argsSerializer: new o.ArgSerializer
            };
            t.ResultsParser = class ResultsParser {
                constructor(e) {
                    e = Object.assign(Object.assign({}, d), e), this.argsSerializer = e.argsSerializer
                }
                parseQueryResponse(e, t) {
                    let n = e.getReturnDataParts(),
                        r = this.argsSerializer.buffersToValues(n, t.output);
                    return {
                        returnCode: new u.ReturnCode(e.returnCode.toString()),
                        returnMessage: e.returnMessage,
                        values: r,
                        firstValue: r[0],
                        secondValue: r[1],
                        thirdValue: r[2],
                        lastValue: r[r.length - 1]
                    }
                }
                parseUntypedQueryResponse(e) {
                    return {
                        returnCode: new u.ReturnCode(e.returnCode.toString()),
                        returnMessage: e.returnMessage,
                        values: e.getReturnDataParts()
                    }
                }
                parseOutcome(e, t) {
                    let n = this.parseUntypedOutcome(e),
                        r = this.argsSerializer.buffersToValues(n.values, t.output);
                    return {
                        returnCode: n.returnCode,
                        returnMessage: n.returnMessage,
                        values: r,
                        firstValue: r[0],
                        secondValue: r[1],
                        thirdValue: r[2],
                        lastValue: r[r.length - 1]
                    }
                }
                parseUntypedOutcome(e) {
                    let t, n = this.parseTransactionMetadata(e);
                    if (t = this.createBundleOnSimpleMoveBalance(e), t) return a.Logger.trace("parseUntypedOutcome(): on simple move balance"), t;
                    if (t = this.createBundleOnInvalidTransaction(e), t) return a.Logger.trace("parseUntypedOutcome(): on invalid transaction"), t;
                    if (t = this.createBundleOnEasilyFoundResultWithReturnData(e.contractResults), t) return a.Logger.trace("parseUntypedOutcome(): on easily found result with return data"), t;
                    if (t = this.createBundleOnSignalError(e.logs), t) return a.Logger.trace("parseUntypedOutcome(): on signal error"), t;
                    if (t = this.createBundleOnTooMuchGasWarning(e.logs), t) return a.Logger.trace("parseUntypedOutcome(): on 'too much gas' warning"), t;
                    if (t = this.createBundleOnWriteLogWhereFirstTopicEqualsAddress(e.logs, e.sender), t) return a.Logger.trace("parseUntypedOutcome(): on writelog with topics[0] == tx.sender"), t;
                    if (t = this.createBundleWithCustomHeuristics(e, n), t) return a.Logger.trace("parseUntypedOutcome(): with custom heuristics"), t;
                    if (t = this.createBundleWithFallbackHeuristics(e, n), t) return a.Logger.trace("parseUntypedOutcome(): with fallback heuristics"), t;
                    throw new i.ErrCannotParseContractResults("transaction " + e.hash.toString())
                }
                parseTransactionMetadata(e) {
                    return (new r.TransactionDecoder).getTransactionMetadata({
                        sender: e.sender.bech32(),
                        receiver: e.receiver.bech32(),
                        data: e.data.toString("base64"),
                        value: e.value.toString(),
                        type: e.type
                    })
                }
                createBundleOnSimpleMoveBalance(e) {
                    let t = 0 == e.contractResults.items.length,
                        n = 0 == e.logs.events.length;
                    return t && n ? {
                        returnCode: u.ReturnCode.None,
                        returnMessage: u.ReturnCode.None.toString(),
                        values: []
                    } : null
                }
                createBundleOnInvalidTransaction(e) {
                    return e.status.isInvalid() && e.receipt.data ? {
                        returnCode: u.ReturnCode.OutOfFunds,
                        returnMessage: e.receipt.data,
                        values: []
                    } : null
                }
                createBundleOnEasilyFoundResultWithReturnData(e) {
                    let t = e.items.find(e => 0 != e.nonce.valueOf() && e.data.startsWith("@"));
                    if (!t) return null;
                    let {
                        returnCode: n,
                        returnDataParts: r
                    } = this.sliceDataFieldInParts(t.data), s = t.returnMessage || n.toString();
                    return {
                        returnCode: n,
                        returnMessage: s,
                        values: r
                    }
                }
                createBundleOnSignalError(e) {
                    let t = e.findSingleOrNoneEvent(l.OnSignalError);
                    if (!t) return null;
                    let {
                        returnCode: n,
                        returnDataParts: r
                    } = this.sliceDataFieldInParts(t.data), s = t.getLastTopic(), i = (null == s ? void 0 : s.toString()) || n.toString();
                    return {
                        returnCode: n,
                        returnMessage: i,
                        values: r
                    }
                }
                createBundleOnTooMuchGasWarning(e) {
                    let t = e.findSingleOrNoneEvent(l.OnWriteLog, e => null != e.findFirstOrNoneTopic(e => e.toString().startsWith(c.TooMuchGas)));
                    if (!t) return null;
                    let {
                        returnCode: n,
                        returnDataParts: r
                    } = this.sliceDataFieldInParts(t.data), s = t.getLastTopic(), i = (null == s ? void 0 : s.toString()) || n.toString();
                    return {
                        returnCode: n,
                        returnMessage: i,
                        values: r
                    }
                }
                createBundleOnWriteLogWhereFirstTopicEqualsAddress(e, t) {
                    let n = new s.Address(t.bech32()).hex(),
                        r = e.findSingleOrNoneEvent(l.OnWriteLog, e => null != e.findFirstOrNoneTopic(e => e.hex() == n));
                    if (!r) return null;
                    let {
                        returnCode: i,
                        returnDataParts: a
                    } = this.sliceDataFieldInParts(r.data), o = i.toString();
                    return {
                        returnCode: i,
                        returnMessage: o,
                        values: a
                    }
                }
                createBundleWithCustomHeuristics(e, t) {
                    return null
                }
                createBundleWithFallbackHeuristics(e, t) {
                    let n = new s.Address(t.receiver);
                    for (const t of e.contractResults.items) {
                        let r = t.logs.findSingleOrNoneEvent(l.OnWriteLog, t => {
                            var r;
                            let s = t.address.bech32() == e.sender.bech32(),
                                i = (null === (r = t.topics[0]) || void 0 === r ? void 0 : r.hex()) == n.hex();
                            return s && i
                        });
                        if (r) {
                            let {
                                returnCode: e,
                                returnDataParts: t
                            } = this.sliceDataFieldInParts(r.data), n = e.toString();
                            return {
                                returnCode: e,
                                returnMessage: n,
                                values: t
                            }
                        }
                    }
                    return null
                }
                sliceDataFieldInParts(e) {
                    let t = 1;
                    e.startsWith("ESDTTransfer") && (t = 3);
                    let n = this.argsSerializer.stringToBuffers(e),
                        r = n[t] || Buffer.from([]),
                        s = n.slice(t + 1);
                    if (0 == r.length) throw new i.ErrCannotParseContractResults("no return code");
                    return {
                        returnCode: u.ReturnCode.fromBuffer(r),
                        returnDataParts: s
                    }
                }
            }
        },
        9085: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SmartContract = void 0;
            const s = n(5605),
                i = n(6033),
                a = n(5843),
                o = n(7184),
                u = n(6480),
                l = n(6181),
                c = n(6496),
                d = n(5612),
                p = n(6492),
                f = r(n(5646)),
                h = n(7185),
                y = n(7187),
                g = n(5487),
                m = n(554);
            t.SmartContract = class SmartContract {
                constructor({
                    address: e,
                    abi: t
                }) {
                    this.address = new s.Address, this.methodsExplicit = {}, this.methods = {}, this.address = e || new s.Address, this.abi = t, t && this.setupMethods()
                }
                setupMethods() {
                    let e = this,
                        t = this.getAbi();
                    for (const n of t.getAllEndpoints()) {
                        let t = n.name;
                        this.methodsExplicit[t] = function(n) {
                            let r = new l.ContractFunction(t);
                            return new h.Interaction(e, r, n || [])
                        }, this.methods[t] = function(r) {
                            let s = new l.ContractFunction(t),
                                i = y.NativeSerializer.nativeToTypedValues(r || [], n);
                            return new h.Interaction(e, s, i || [])
                        }
                    }
                }
                setAddress(e) {
                    this.address = e
                }
                getAddress() {
                    return this.address
                }
                setAbi(e) {
                    this.abi = e
                }
                getAbi() {
                    return d.guardValueIsSet("abi", this.abi), this.abi
                }
                getEndpoint(e) {
                    return this.getAbi().getEndpoint(e)
                }
                deploy({
                    code: e,
                    codeMetadata: t,
                    initArguments: n,
                    value: r,
                    gasLimit: u,
                    gasPrice: l,
                    chainID: c
                }) {
                    t = t || new o.CodeMetadata, n = n || [], r = r || 0;
                    let d = a.TransactionPayload.contractDeploy().setCode(e).setCodeMetadata(t).setInitArgs(n).build();
                    return new i.Transaction({
                        receiver: s.Address.Zero(),
                        sender: s.Address.Zero(),
                        value: r,
                        gasLimit: u,
                        gasPrice: l,
                        data: d,
                        chainID: c
                    })
                }
                upgrade({
                    code: e,
                    codeMetadata: t,
                    initArguments: n,
                    value: r,
                    gasLimit: u,
                    gasPrice: l,
                    chainID: c
                }) {
                    this.ensureHasAddress(), t = t || new o.CodeMetadata, n = n || [], r = r || 0;
                    let d = a.TransactionPayload.contractUpgrade().setCode(e).setCodeMetadata(t).setInitArgs(n).build();
                    return new i.Transaction({
                        sender: s.Address.Zero(),
                        receiver: this.getAddress(),
                        value: r,
                        gasLimit: u,
                        gasPrice: l,
                        data: d,
                        chainID: c
                    })
                }
                call({
                    func: e,
                    args: t,
                    value: n,
                    gasLimit: r,
                    receiver: o,
                    gasPrice: u,
                    chainID: l
                }) {
                    this.ensureHasAddress(), t = t || [], n = n || 0;
                    let c = a.TransactionPayload.contractCall().setFunction(e).setArgs(t).build();
                    return new i.Transaction({
                        sender: s.Address.Zero(),
                        receiver: o || this.getAddress(),
                        value: n,
                        gasLimit: r,
                        gasPrice: u,
                        data: c,
                        chainID: l
                    })
                }
                createQuery({
                    func: e,
                    args: t,
                    value: n,
                    caller: r
                }) {
                    return this.ensureHasAddress(), new c.Query({
                        address: this.getAddress(),
                        func: e,
                        args: t,
                        value: n,
                        caller: r
                    })
                }
                ensureHasAddress() {
                    if (!this.getAddress().bech32()) throw new g.ErrContractHasNoAddress
                }
                static computeAddress(e, t) {
                    let n = Buffer.alloc(8, 0),
                        r = new s.Address(e.bech32()).pubkey(),
                        i = r.slice(30),
                        a = Buffer.alloc(8);
                    const o = new f.default(t.valueOf().toString(10)),
                        l = p.bigIntToBuffer(o);
                    a.write(l.reverse().toString("hex"), "hex");
                    let c = Buffer.concat([r, a]),
                        d = m("keccak256").update(c).digest(),
                        h = Buffer.from(u.ArwenVirtualMachine, "hex"),
                        y = Buffer.concat([n, h, d.slice(10, 30), i]);
                    return new s.Address(y)
                }
            }
        },
        9086: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RelayedTransactionV1Builder = void 0;
            const s = n(6033),
                i = n(5487),
                a = n(5843),
                o = n(6495),
                u = n(5605),
                l = r(n(5646));
            t.RelayedTransactionV1Builder = class RelayedTransactionV1Builder {
                setInnerTransaction(e) {
                    return this.innerTransaction = e, this
                }
                setNetworkConfig(e) {
                    return this.netConfig = e, this
                }
                setRelayerAddress(e) {
                    return this.relayerAddress = e, this
                }
                setRelayerNonce(e) {
                    return this.relayerNonce = e, this
                }
                build() {
                    if (!(this.innerTransaction && this.netConfig && this.relayerAddress && this.innerTransaction.getSignature())) throw new i.ErrInvalidRelayedV1BuilderArguments;
                    const e = this.prepareInnerTransaction(),
                        t = a.TransactionPayload.contractCall().setFunction(new o.ContractFunction("relayedTx")).setArgs([new o.StringValue(e)]).build(),
                        n = this.netConfig.MinGasLimit + this.netConfig.GasPerDataByte * t.length() + this.innerTransaction.getGasLimit().valueOf();
                    let r = new s.Transaction({
                        nonce: this.relayerNonce,
                        sender: this.relayerAddress,
                        receiver: this.innerTransaction.getSender(),
                        value: 0,
                        gasLimit: n,
                        data: t,
                        chainID: this.netConfig.ChainID
                    });
                    return this.relayerNonce && r.setNonce(this.relayerNonce), r
                }
                prepareInnerTransaction() {
                    if (!this.innerTransaction) return "";
                    const e = {
                        nonce: this.innerTransaction.getNonce().valueOf(),
                        sender: new u.Address(this.innerTransaction.getSender().bech32()).pubkey().toString("base64"),
                        receiver: new u.Address(this.innerTransaction.getReceiver().bech32()).pubkey().toString("base64"),
                        value: new l.default(this.innerTransaction.getValue().toString(), 10).toNumber(),
                        gasPrice: this.innerTransaction.getGasPrice().valueOf(),
                        gasLimit: this.innerTransaction.getGasLimit().valueOf(),
                        data: this.innerTransaction.getData().valueOf().toString("base64"),
                        signature: Buffer.from(this.innerTransaction.getSignature().hex(), "hex").toString("base64"),
                        chainID: Buffer.from(this.innerTransaction.getChainID().valueOf()).toString("base64"),
                        version: this.innerTransaction.getVersion().valueOf()
                    };
                    return JSON.stringify(e)
                }
            }
        },
        9087: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RelayedTransactionV2Builder = void 0;
            const r = n(6033),
                s = n(5843),
                i = n(6495),
                a = n(5487);
            t.RelayedTransactionV2Builder = class RelayedTransactionV2Builder {
                setInnerTransaction(e) {
                    return this.innerTransaction = e, this
                }
                setInnerTransactionGasLimit(e) {
                    return this.innerTransactionGasLimit = e, this
                }
                setNetworkConfig(e) {
                    return this.netConfig = e, this
                }
                setRelayerAddress(e) {
                    return this.relayerAddress = e, this
                }
                setRelayerNonce(e) {
                    return this.relayerNonce = e, this
                }
                build() {
                    if (!(this.innerTransaction && this.innerTransactionGasLimit && this.relayerAddress && this.netConfig && this.innerTransaction.getSignature())) throw new a.ErrInvalidRelayedV2BuilderArguments;
                    if (0 != this.innerTransaction.getGasLimit()) throw new a.ErrGasLimitShouldBe0ForInnerTransaction;
                    const e = s.TransactionPayload.contractCall().setFunction(new i.ContractFunction("relayedTxV2")).setArgs([new i.AddressValue(this.innerTransaction.getReceiver()), new i.U64Value(this.innerTransaction.getNonce().valueOf()), new i.BytesValue(this.innerTransaction.getData().valueOf()), i.BytesValue.fromHex(this.innerTransaction.getSignature().hex())]).build();
                    let t = new r.Transaction({
                        sender: this.relayerAddress,
                        receiver: this.innerTransaction.getSender(),
                        value: 0,
                        gasLimit: this.innerTransactionGasLimit.valueOf() + this.netConfig.MinGasLimit + this.netConfig.GasPerDataByte * e.length(),
                        data: e,
                        chainID: this.netConfig.ChainID
                    });
                    return this.relayerNonce && t.setNonce(this.relayerNonce), t
                }
            }
        }
    }
]);