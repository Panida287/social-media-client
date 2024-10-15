import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['jest.config.js'],
    languageOptions: {
      globals: { module: 'readonly', require: 'readonly' },
    },
  },
  {
    files: ['src/__tests__/**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
        global: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    ignores: ['node_modules', 'coverage', 'dist'],
  },
];
