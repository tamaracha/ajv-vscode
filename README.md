# ajv-vscode

This [ajv] plugin adds the keywords introduced by Visual Studio Code for [JSON editing],
so they can be used in schemas.

## Usage

```js
const Ajv = require('ajv')
const vscodePlugin = require('ajv-vscode')

const ajv = new Ajv()
vscodePlugin(ajv)
```

## Keywords added

- defaultSnippets
- markdownDescription

[ajv]: https://github.com/ajv-validator/ajv
[JSON editing]: https://code.visualstudio.com/Docs/languages/json
