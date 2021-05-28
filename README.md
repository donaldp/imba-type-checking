# Flex Types

Flex Types, provides static type checking in Imba.

Install
-------

This package is automatically installed with the Harness Flex Framework.

```
npm i @harnessflex/types
```

Basic Usage
-----------

To start using Flex Types in your project, simply import `@func`:

```js
import { @func } from '@harnessflex/types'

class Car

    @func({ expects: [ String, Number ], returns: String })

    def create name, year
        const car = {
            name
            year
        }

		# create car...

        "Succsessfully created a new car: {name}"

```

API
---

Name    | Type            | Description    |
:-------|:---------------|:----------------|
expects | `params: any[]` | Paramter types |
returns | `type: any`     | Return type    |

<br />

Note: you can also use `@flex` instead of `@func`:

```js
import { @flex } from '@harnessflex/types'

class Person

    @flex({ expects: [ String ] })

    def find name
		# do something

```

Types
-----

You can find the list of supported types here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values

> Note: you can also create custom types by defining a new `class`.

Security
-------

If you discover any security related issues, please email donaldpakkies@gmail.com instead of using the issue tracker.

License
-------

The MIT License (MIT). Please see [License File](LICENSE) for more information.
