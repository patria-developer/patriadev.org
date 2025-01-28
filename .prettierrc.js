module.exports = {
    singleQuote: true,
    semi: true,
    tabWidth: 4,
    printWidth: 100,
    jsxSingleQuote: true,
    trailingComma: 'all',
    arrowParens: 'always',
    endOfLine: 'auto',
    overrides: [
        {
            files: '{*.js?(on),*.js,*.y?(a)ml,.*.js?(on),.*.y?(a)ml,*.md,.prettierrc,.stylelintrc,.babelrc}',
            options: {
                tabWidth: 4,
            },
        },
        {
            files: '{**/.vscode/*.json,**/tsconfig.json,**/tsconfig.*.json}',
            options: {
                parser: 'json5',
                quoteProps: 'preserve',
                singleQuote: false,
                trailingComma: 'all',
            },
        },
    ],
};
