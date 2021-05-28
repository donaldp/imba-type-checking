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

To start using Flex Types in your project, simply import `@flex`:

```js
import { @flex } from '@harnessflex/types'

class Car

    @flex({ expects: [ String, Number ], returns: String })

    def create name\string, year\number
        const car = {
            name
            year
        }

        "Succsessfully created a new car: {name}"

```

API
---

Name    | Type            | Description    |
:-------|:---------------|:----------------|
expects | `params: any[]` | Paramter types |
returns | `type: any`     | Return type    |

<br />

> Note: you can also use `@func` instead of `@flex`.

Security
-------

If you discover any security related issues, please email donaldpakkies@gmail.com instead of using the issue tracker.

License
-------

The MIT License (MIT). Please see [License File](LICENSE) for more information.
