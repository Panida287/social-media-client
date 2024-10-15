import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['jest.config.js'],
    languageOptions: {
      globals: { module: 'readonly', require: 'readonly' },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
