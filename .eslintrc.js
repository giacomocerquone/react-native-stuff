module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/no-multi-comp': ['false'],
    'react/prop-types': ['false'],
    'no-use-before-define': ['error', { variables: false, functions: false }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'react/require-default-props': 'off',
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': ['always', { ignoreClassFields: true }],
  },
};
