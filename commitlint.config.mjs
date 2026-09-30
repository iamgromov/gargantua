export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feature', 'fix', 'refactor', 'test', 'chore', 'revert', 'ci', 'release']
    ]
  }
};
