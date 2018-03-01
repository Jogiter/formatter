# Eslint with StandardJS

# docs

+ [Eslint](https://github.com/eslint/eslint)
+ [Prettier Integrating with ESLint](https://prettier.io/docs/en/eslint.html)

# usage

install dependencies

```sh
yarn add --dev eslint
yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier
```

Then, add this to your .eslintrc file:

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```
