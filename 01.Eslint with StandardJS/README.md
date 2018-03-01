# Eslint with StandardJS

# docs

+ [Eslint](https://github.com/eslint/eslint)
+ [eslint-config-standard](https://github.com/standard/eslint-config-standard)
+ [standardJs -- The rules](https://github.com/standard/standard#user-content-standardjs-the-rules)

# usage

install dependencies

```sh
yarn add --dev eslint
yarn add --dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

Then, add this to your .eslintrc file:

```json
{
  "extends": "standard"
}
```
