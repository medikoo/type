# type

## Runtime validation and processing of JavaScript types

### Installation

```sh
npm install type
```

#### Value

_Value_ is assumed to be any JavaScript value that's neither `null` nor `undefined` (the only primitives not accompanied with object representation. Hence any property access on them (as e.g. `null.foo`) results with an exception)

`undefined` usually means that given variable or property was never defined, while `null` reflects declared intention of having given property or variable empty.

##### `value/is`

```javascript
const isValue = require("type/value/is");

isValue({}); // true
isValue(null); // false
```
