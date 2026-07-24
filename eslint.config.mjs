import js from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  /* Config files (JS/MJS) */
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.node
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },
  /* TypeScript/TSX source */
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylistic,
      sonarjs
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.app.json'
        }
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...(reactRefresh.configs.vite?.rules || {}),
      ...sonarjs.configs.recommended.rules,
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-len': [
        'error',
        { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }
      ],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': [
        'error',
        { anonymous: 'always', named: 'never', asyncArrow: 'always' }
      ],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' }
      ],
      '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never'
        }
      ],
      '@stylistic/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line'
        }
      ],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      '@stylistic/jsx-max-props-per-line': ['error', { maximum: { single: 3, multi: 1 } }],
      '@stylistic/jsx-indent-props': ['error', 2],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      'sonarjs/no-misused-promises': 'off',
      'sonarjs/todo-tag': 'off',
      'id-length': ['error', { exceptionPatterns: ['^_*'] }],
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/jsx-curly-spacing': ['error', { when: 'always', children: true }],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'type',
            'object',
            'index'
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          pathGroups: [
            { pattern: 'react**', group: 'external', position: 'before' },
            { pattern: '@/**', group: 'internal', position: 'after' },
            { pattern: './**/*.{ts,tsx}', group: 'internal', position: 'after' },
            { pattern: '../**/*.{ts,tsx}', group: 'internal', position: 'after' },
            { pattern: './**/*.scss', group: 'index', position: 'after' },
            { pattern: '../**/*.scss', group: 'index', position: 'after' },
            { pattern: '**/*.scss', group: 'index', position: 'after' }
          ],
          distinctGroup: false,
          pathGroupsExcludedImportTypes: ['react']
        }
      ]
    }
  }
];
