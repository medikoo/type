# type

## Runtime validation and processing of JavaScript types

### Installation

```sh
npm install type
```

#### Object

_Object_ is assumed to be any non-primitive JavaScript value

##### `object/is`

```javascript
const isObject = require("type/object/is");

isObject({}); // true
isObject(true); // false
isObject(null); // false
```

#### String

_string_ primitives

##### `string/coerce`

Restricted string coercion. Returns `null` for non-values or non implicitly coercible (to string) values

```javascript
const stringCoerce = require("type/string/coerce");

stringCoerce(12); // "12"
stringCoerce(undefined); // null
```

#### Value

_Value_ is assumed to be any JavaScript value that's neither `null` nor `undefined` (_the only primitives which are not accompanied with object representation. Hence any property access on them (as e.g. `null.foo`) results with an exception_)

`undefined` usually means that given variable or property was never defined, while `null` reflects declared intention of having given property or variable empty.

##### `value/is`

```javascript
const isValue = require("type/value/is");

isValue({}); // true
isValue(null); // false
```
