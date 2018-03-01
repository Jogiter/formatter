module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    // indent: ["error", 2],
    // quotes: ["error", "single"],
    // semi: ["error", "always"]
  },
  globals: {}
}
