// .eslintrc.cjs
module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'storybook-static'],
    parser: '@typescript-eslint/parser',  // ✅ КЛЮЧЕВОЕ
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',  // ✅ КЛЮЧЕВОЕ
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
    },
    overrides: [
        {
            files: ['vite.config.ts', '**/*.stories.tsx', '.storybook/**/*'],
            rules: {
                'react-refresh/only-export-components': 'off',
            },
        },
    ],
};
