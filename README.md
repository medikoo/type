[![*nix build status][nix-build-image]][nix-build-url]
[![Windows build status][win-build-image]][win-build-url]
[![Tests coverage][cov-image]][cov-url]

# type

## Runtime validation and processing of JavaScript types

#### Object

_Object_ is assumed to be any non-primitive JavaScript value

##### `object/is`

```javascript
const isObject = require("type/object/is");

isObject({}); // true
isObject(true); // false
isObject(null); // false
```

##### `object/ensure`

If given argument is an object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureObject = require("type/object/ensure");

const obj = {};

ensureObject(obj); // obj
ensureString(null); // Thrown TypeError: null is not an object
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

##### `string/ensure`

If given argument is a string coercible value, returns string representation.
Otherwise `TypeError` is thrown.

```javascript
const ensureString = require("type/string/ensure");

ensureString(12); // "12"
ensureString(null); // Thrown TypeError: null is not a string
```

#### Value

_Value_ is assumed to be any JavaScript value that's neither `null` nor `undefined` (_the only primitives which are not accompanied with object representation. Hence any property access on them (as e.g. `null.foo`) results with an exception_)

`undefined` usually means that given variable or property was never defined, while `null` reflects declared intention of having given property or variable empty.

##### `value/is`

Confirms whether passed argument is a _value_

```javascript
const isValue = require("type/value/is");

isValue({}); // true
isValue(null); // false
```

##### `value/ensure`

Ensures if given argument is a _value_. If it's a value it is returned back, if not `TypeError` is thrown

```javascript
const ensureValue = require("type/value/ensure");

const obj = {};

ensureValue(obj); // obj
ensureValue(null); // Thrown TypeError: Cannot use null
```

### Tests

    $ npm test

[nix-build-image]: https://semaphoreci.com/api/v1/medikoo-org/type/branches/master/shields_badge.svg
[nix-build-url]: https://semaphoreci.com/medikoo-org/type
[win-build-image]: https://ci.appveyor.com/api/projects/status/8nrtluuwsb5k9l8d?svg=true
[win-build-url]: https://ci.appveyor.com/api/project/medikoo/type
[cov-image]: https://img.shields.io/codecov/c/github/medikoo/type.svg
[cov-url]: https://codecov.io/gh/medikoo/type
