// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true // already added
  },
  globals: {
    IStringKeyMap: 'readonly',
    insertTypes: 'readonly',
    Word: 'readonly'
  },
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  plugins: ['vue', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off'
  }
}
