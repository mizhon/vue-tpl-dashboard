// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  //ESLint默认使用Espree作为其解析器
  //同时babel-eslint也是用得最多的解析器
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017
  },
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-extra-semi': 'error',
    'space-before-function-paren': 'error',
    // allow async-await
    'generator-star-spacing': 'off',
    'space-before-function-paren': 'off',
    'no-trailing-spaces': 'off',
    'quotes': 'off',
    'semi': 'off',
    'no-trailing-spaces': 'off',
    'no-useless-escape': 'off',
    'no-extra-parens': 'off',
    'padded-blocks': 'off',
    'no-multiple-empty-lines': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
