module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],

  parserOptions: {
    ecmaVersion: 2021,
  },

  rules: {
    'vue/require-default-prop': 'off',
  },
}
