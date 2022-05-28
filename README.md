# upmk-utils

> utilities working across various upmk cli applications

## Secrets

Load existing secrets. Will attempt to decrypt (gpg) settings if
`secrets.yml.gpg` and `secrets.key` exist and `secret.yml` is not present

```js
const loadSecrets = require('upmk-utils').secrets.load
let environment = "production"
let settings = loadSecrets(glueGunToolbox, environment)
```

## Settings

Load an `upmk` project's settings

```js
const loadSettings = require('upmk-utils').settings.load
let settings = loadSettings()
```
