module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },

    parserOptions: {
        ecmaVersion: 2021, // Use the latest ECMAScript version
        sourceType: 'module', // Use ES6 modules
    },

    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'no-undef': 'error',
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'all',
                ignoreRestSiblings: false,
                argsIgnorePattern: '^_',
            },
        ],
        'max-len': [
            'error',
            {
                code: 100,
                ignoreComments: false,
                ignoreUrls: true,
                ignorePattern: '^\\s*import\\s.+\\sfrom\\s.+;$', // Ignore imports line length
            },
        ],
    },

    plugins: [
        // Add ESLint plugins here if needed.
    ],

    globals: {
        window: 'readonly',
        document: 'readonly',
    },

    settings: {
        // Add project-specific settings here.
    },
};
