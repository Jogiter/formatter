## webpack & [standardjs](https://github.com/standard/standard)

## use [eslint-loader](https://github.com/webpack-contrib/eslint-loader) && [eslint-config-standard](https://github.com/standard/eslint-config-standard)

install devDependencies

```sh
> yarn add --dev eslint-loader
> yarn add --dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

`.eslintrc.js`

```js
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: 'standard',
  parserOptions: {
    sourceType: 'module'
  }
}
```

`webpack.config.js`

```js
module.exports = {
  entry: 'entry.js',
  output: {},
  module: {
    rules: [{
      enforce: 'pre',
      exclude: /node_modules/,
      test: /\.js$/,
      use: [
        {
          loader: 'eslint-loader',
          options: {
            fix: true, // fix rules automatically
            failOnError: true
          }
        }
      ]
    }]
  }
}
```

then run `webpack`
