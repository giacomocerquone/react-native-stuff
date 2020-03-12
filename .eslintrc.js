module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:import/warnings'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
      },
    ],
  },
};
