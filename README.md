[![*nix build status][nix-build-image]][nix-build-url]
[![Windows build status][win-build-image]][win-build-url]
[![Tests coverage][cov-image]][cov-url]

# type

## Runtime validation and processing of JavaScript types

#### Value

_Value_ is assumed to be any JavaScript value that's neither `null` nor `undefined` .

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

#### String

_string_ primitives

##### `string/coerce`

Restricted string coercion. Returns string presentation for every value that follows below constraints

-   is implicitly coercible to string
-   is neither`null` nor `undefined`
-   its `toString` method is not `Object.prototype.toString`

For all other values `null` is returned

```javascript
const stringCoerce = require("type/string/coerce");

stringCoerce(12); // "12"
stringCoerce(undefined); // null
```

##### `string/ensure`

If given argument is a string coercible value (via [`string/coerce`](#stringcoerce)) returns result string.
Otherwise `TypeError` is thrown.

```javascript
const ensureString = require("type/string/ensure");

ensureString(12); // "12"
ensureString(null); // Thrown TypeError: null is not a string
```

#### Number

_number_ primitives

##### `number/coerce`

Restricted number coercion. Returns number presentation for every value that follows below constraints

-   is implicitly coercible to number
-   is neither `null` nor `undefined`
-   is not and doesn't coerce to `NaN`

For all other values `null` is returned

```javascript
const numberCoerce = require("type/number/coerce");

numberCoerce("12"); // 12
numberCoerce({}); // null
numberCoerce(null); // null
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

##### `object/ensure`

If given argument is an object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureObject = require("type/object/ensure");

const obj = {};

ensureObject(obj); // obj
ensureString(null); // Thrown TypeError: null is not an object
```

#### Prototype

_Prototype_ is assumed to be some constructor's `prototype` property

##### `prototype/is`

```javascript
const isPrototype = require("type/prototype/is");

isPrototype({}); // false
isPrototype(Object.prototype); // true
isPrototype(Array.prototype); // true
```

#### Array

The JavaScript _Array_ instance

##### `array/is`

```javascript
const isArray = require("type/array/is");

isArray([]); // true
isArray({}); // false
isArray("foo"); // false
```

##### `array/ensure`

If given argument is an array, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureArray = require("type/array/ensure");

ensureArray(["foo"]); // ["foo"]
ensureArray("foo"); // Thrown TypeError: null is not a regular expression object
```

#### Date

The JavaScript _Date_ instance

##### `date/is`

```javascript
const isDate = require("type/date/is");

isDate(new Date()); // true
isDate(new Date("Invalid date")); // false
isDate(Date.now()); // false
isDate("foo"); // false
```

##### `date/ensure`

If given argument is a date object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureDate = require("type/date/ensure");

const date = new Date();
ensureDate(date); // date
ensureDate(123123); // Thrown TypeError: 123123 is not a date object
```

#### RegExp

The JavaScript _RegExp_ instance

##### `reg-exp/is`

```javascript
const isRegExp = require("type/reg-exp/is");

isRegExp(/foo/);
isRegExp({}); // false
isRegExp("foo"); // false
```

##### `reg-exp/ensure`

If given argument is a regular expression object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureRegExp = require("type/reg-exp/ensure");

ensureRegExp(/foo/); // /foo/
ensureRegExp("foo"); // Thrown TypeError: null is not a regular expression object
```

#### Error

The JavaScript _Error_ instance

##### `error/is`

```javascript
const isError = require("type/error/is");

isError(new Error()); // true
isError({ mesage: "Fake error" }); // false
```

##### `error/ensure`

If given argument is an error object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureError = require("type/error/ensure");

const someError = new Error("Some error");
ensureError(someError); // someError
ensureError({ mesage: "Fake error" }); // Thrown TypeError: [object Object] is not an error object
```

### Tests

    $ npm test

[nix-build-image]: https://semaphoreci.com/api/v1/medikoo-org/type/branches/master/shields_badge.svg
[nix-build-url]: https://semaphoreci.com/medikoo-org/type
[win-build-image]: https://ci.appveyor.com/api/projects/status/8nrtluuwsb5k9l8d?svg=true
[win-build-url]: https://ci.appveyor.com/api/project/medikoo/type
[cov-image]: https://img.shields.io/codecov/c/github/medikoo/type.svg
[cov-url]: https://codecov.io/gh/medikoo/type
