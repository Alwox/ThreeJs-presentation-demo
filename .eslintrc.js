module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true
  },
  'rules': {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'warn',
    'semi' : 'warn',
    'no-unused-vars' : 'warn',
  }
};
