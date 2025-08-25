## `TypeCheckers`
* <a href="#_isBoolean">`isBoolean`</a>

## `Generic`
* <a href="#_greet">`greet`</a>
 
## `TypeChecker Methods`

<h3 id="_isBoolean"><code>isBoolean(arg)</code></h3>

Check if a value is a boolean.

#### Arguments
1. `arg` *(unknown)*: variable to check.

#### Returns
*(boolean)*: Returns `true` if the value is a boolean, `false` otherwise.

#### Example
```js
isBoolean(false);
// => true

isBoolean(undefined);
// => false
```
---

## `Generic Methods`

<h3 id="_greet"><code>greet(name)</code></h3>

Greet a user

#### Arguments
1. `name` *(string)*: The name of the user.

#### Returns
*(string)*: Returns a greeting message.

#### Example
```js
greet('John');
// => 'Hello John! Welcome to the example project.'

// `name` non defined.
greet();
// => 'Hello! Welcome to the example project.'
```
---
