# Eslint with StandardJS

# docs

+ [Eslint](https://github.com/eslint/eslint)
+ [Prettier Integrating with ESLint](https://prettier.io/docs/en/eslint.html)
+ [prettier-eslint](https://github.com/prettier/prettier-eslint)
+ [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) ESLint plugin for prettier formatting

# .prettierrc.js

```js
module.exports = {
  // see https://prettier.io/docs/en/options.html
  tabWidth: 2, // default: 2
  semi: true, // default: true
  singleQuote: false, // default: false
  bracketSpacing: true, // default: true
  arrowParens: 'avoid', // default: avoid
  parser: 'babylon'
}
```

# start

```sh
> yarn
> yarn run format
```
