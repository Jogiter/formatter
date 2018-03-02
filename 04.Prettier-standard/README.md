# Eslint with StandardJS

# docs

+ [Eslint](https://github.com/eslint/eslint)
+ [Prettier Integrating with ESLint](https://prettier.io/docs/en/eslint.html)
+ [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) Turns off all rules that are unnecessary or might conflict with Prettier.

>note: lint will not report errors

# .eslintrc.js

```js
module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true
  },
  // extends: ['plugin:prettier/recommended'],
  extends: 'prettier',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
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
