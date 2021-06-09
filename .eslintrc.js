module.exports = {
    extends: [
      'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      'plugin:prettier/recommended' // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
      ecmaVersion: 2020,
      ecmaFeatures: {
        jsx: true // Allows for the parsing of JSX
      }
    },
    plugins: ['@typescript-eslint'],
    settings: {
      react: {
        version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
      }
    },
    // Fine tune rules
    rules: {
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-empty-interface': 'off',
      'no-empty-interface': 0,
      'jsx-no-lambda': 0,
      'no-console': 0,
      'no-multiple-empty-lines': 1,
      semi: [1, 'never'],
      'linebreak-style': 0,
      'missing-jsdoc': 0,
      'jsdoc-format': 0,
      'no-submodule-imports': 0,
      'no-implicit-dependencies': 0,
      'no-import-side-effect': 0,
      'no-default-export': 0,
      typedef: 0,
      'export-name': 0,
      'import-name': 0,
      'no-backbone-get-set-outside-model': 0,
      'no-relative-imports': 0,
      'react-a11y-role-has-required-aria-props': 0,
      'react-this-binding-issue': 0,
      'jsx-no-multiline-js': 0,
      'react-a11y-event-has-role': 0,
      'no-non-null-assertion': 0,
      'completed-docs': 0,
      'match-default-export-name': 0,
      'no-unsafe-any': 0,
      'strict-boolean-expressions': 0,
      'react-a11y-anchors': 0,
      'no-reserved-keywords': 0,
      'no-any': 0,
      'max-func-body-length': 0,
      'ordered-imports': 0,
      'member-access': 0,
      'jsx-boolean-value': 0,
      'no-null-keyword': 0,
      'react-a11y-required': 0,
      'use-simple-attributes': 0,
      'jsx-key': 0,
      'cyclomatic-complexity': 0,
      'no-unused-expression': 0,
      'triple-equals': 0,
      'prefer-const': 'error',
      'no-var': 'error'
    }
  }
  