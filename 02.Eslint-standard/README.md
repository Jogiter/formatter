# Eslint with StandardJS

# docs

* [Eslint](https://github.com/eslint/eslint)
* [eslint-config-standard](https://github.com/standard/eslint-config-standard)
* [standardJs -- The rules](https://github.com/standard/standard#user-content-standardjs-the-rules)

# .eslintrc.js

```js
module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true
  },
  extends: 'standard',
  parserOptions: {
    sourceType: 'module'
  }
}
```

# start

```sh
> yarn
> yarn run format
```
