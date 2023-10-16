/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
        'plugin:vue-pug/vue3-recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'eol-last': ['error', 'never'], // Нужен ли пробел вконце документа (always - нужен, never - не нужен)
        semi: ['error', 'always'], // Чтобы в конце были всегда точка с запятой
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ], // Одинарные кавычки
        'max-len': ['error', { code: 140 }],
        'comma-dangle': ['error', 'always-multiline'], // Чтобы в конце всегда были запятые
        curly: ['error', 'all'], // Чтобы всегда были фигурные скобки
        'brace-style': ['error', '1tbs'], // Стиль фигурных скобок (первая скобка не переносится на новую строку)
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'], // Именование компонентов через кебаб кейс
        'vue/v-on-event-hyphenation': ['error', 'never', { autofix: true }], // Не использовать дефис в атрибутах компонента
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/padding-line-between-blocks': ['error', 'always'], // Отступы между блоками
        'vue/block-tag-newline': [
            'error',
            {
                singleline: 'always',
                multiline: 'always',
                maxEmptyLines: 1,
            },
        ],
        'vue/new-line-between-multi-line-property': [
            'error',
            {
                minLineOfMultilineProperty: 2,
            },
        ], // Отступы между пропсами
        'vue/match-component-file-name': [
            'error',
            {
                shouldMatchCase: true,
                extensions: ['.js', '.vue'],
            },
        ],
        'vue/v-on-function-call': ['error', 'never'], // Чтобы не было скобок у функции в верстке
        'vue/mustache-interpolation-spacing': ['error', 'always'], // Чтобы были отступы между текстом и фигурными скобками
        // 'vue/prefer-true-attribute-shorthand': ['error', 'always'], // Не добавлять v-bind к атрибутам
        'vue/no-potential-component-option-typo': ['error', { presets: ['all'] }], // Предотвращает неправильное именование блоков в script
        'vue/no-empty-component-block': ['error'], // Это правило не позволяет <template> <script> <style>блоку быть пустым
        // 'vue/no-child-content': ['error'], // Сообщает что у v-html написать текст внутри тега
        'vue/multi-word-component-names': ['error', {
            'ignores': ['index'],
        }], // Компоненты нужно называть в два слова (ignores - для исключений)
    },
};