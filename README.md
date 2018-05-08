Version Transform
=================
Transform version string to integer and integer to version string.

Tested on:
* Node 8

### Usage

* Transform version to integer

```js
const transform = require(`version-transform`);

transform.versionStringToInteger(`1.1.0`);

// Output:
// 6
```

* Transform version to integer (alternative)

```js
const transform = require(`version-transform`);

transform.versionToInteger(1, 1, 0);

// Output:
// 6
```

* Transform integer to version string

```js
const transform = require(`version-transform`);

transform.integerToVersionString(6);
// Output:
// 1.1.0
```


