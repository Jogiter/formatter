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
