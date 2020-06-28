module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    "cypress/globals": true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'cypress'
  ],
  rules: {
  },
  settings: {
    react: {
      version: "detect",
    }
  },
}
