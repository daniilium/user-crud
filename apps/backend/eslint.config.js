import eslint from '@eslint/js';
import pluginSecurity from 'eslint-plugin-security';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.ts'], // Match all TypeScript files
    ignores: ['dist'],  // Ignore the dist directory
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      security: pluginSecurity,
      '@typescript-eslint': tseslint,
      prettier,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...pluginSecurity.configs.recommended.rules,
      'prettier/prettier': 'error',
      "no-unused-vars": "warn",
    },
  },
];
