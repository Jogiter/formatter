# Eslint-recommended

# docs

* [Eslint](https://github.com/eslint/eslint)
* [Eslint-Rules](https://eslint.org/docs/rules/)

# .eslintrc.js

```js
module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    // see https://eslint.org/docs/rules/
    'space-before-function-paren': ['error', 'always'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
}
```

# start

```sh
> yarn
> yarn run format
```
