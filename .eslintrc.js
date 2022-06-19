module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            'jsx': true,
        },
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true,
        serviceworker: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    plugins: [
        'react',
        'react-hooks',
        'import',
        'jsx-a11y',
        '@typescript-eslint',
    ],
    rules: {
        'semi': ['error', 'never'],
        'no-underscore-dangle': 'off',
        'no-unexpected-multiline': 'error',
        'indent': ['error', 4],
        'import/no-cycle': 'off',
        // 'object-curly-newline': ["error", { "multiline": true }],
        'react-hooks/exhaustive-deps': 'off',
        'template-curly-spacing': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/mouse-events-have-key-events': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'no-restricted-properties': ['off', { object: 'Math' }],
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        'react/no-array-index-key': 'off',
        'react/state-in-constructor': 'off',
        'react/display-name': 'off',
        'react/function-component-definition': [2, {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
        }],
        'func-names': ['error', 'as-needed'],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        'max-len': 'off',
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // @TODO - see https://github.com/benmosher/eslint-plugin-import/issues/1174
        // @TODO - look at https://github.com/Dreamscapes/eslint-import-resolver-lerna
        'import/no-extraneous-dependencies': 'off',
        'no-console': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error"]
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            'alias': {
                'extensions': ['.js', '.jsx', '.ts', '.tsx']
            },
            // node: {
            //     extensions: ['.js', '.ts', '.tsx', '.d.ts'],
            // },
            // 'webpack': {
            //     'config': 'config/webpack.dev.js'
            // }
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'react/prop-types': 'off',
                '@typescript-eslint/explicit-function-return-type': ['off', { allowExpressions: true }],
            },
        },
        {
            files: ['*.js', '*.jsx'],
            rules: {
                'react/prop-types': 'error',
                // @TODO - restore when done https://github.com/yannickcr/eslint-plugin-react/issues/1674
                'react/default-props-match-prop-types': 'off',
            },
        },
    ],
    ignorePatterns: [
        '.eslintrc.js',
        'node_modules',
        'config',
        'build',
        'bin'
    ]
}
