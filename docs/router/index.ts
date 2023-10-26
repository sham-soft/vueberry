import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/MainLayout/index.vue'),
            children: [
                {
                    path: '/',
                    name: 'Main',
                    component: () => import('@/pages/Main.vue'),
                },
            ],
        },
        {
            path: '/getting-started',
            component: () => import('@/layouts/MainLayout/index.vue'),
            children: [
                {
                    path: 'installation',
                    name: 'GettingStartedInstallation',
                    component: () => import('@/pages/gettingStarted/Installation/index.vue'),
                },
            ],
        },
        {
            path: '/components',
            component: () => import('@/layouts/MainLayout/index.vue'),
            children: [
                {
                    path: 'autocomplete',
                    name: 'PageAutocomplete',
                    component: () => import('@/pages/components/Autocomplete/index.vue'),
                },
                {
                    path: 'breadcrumbs',
                    name: 'PageBreadcrumbs',
                    component: () => import('@/pages/components/Breadcrumbs/index.vue'),
                },
                {
                    path: 'button',
                    name: 'PageButton',
                    component: () => import('@/pages/components/Button/index.vue'),
                },
                {
                    path: 'checkbox',
                    name: 'PageCheckbox',
                    component: () => import('@/pages/components/Checkbox/index.vue'),
                },
                {
                    path: 'datepicker',
                    name: 'PageDatepicker',
                    component: () => import('@/pages/components/Datepicker/index.vue'),
                },
                {
                    path: 'file-input',
                    name: 'PageFileInput',
                    component: () => import('@/pages/components/FileInput/index.vue'),
                },
                {
                    path: 'modal',
                    name: 'PageModal',
                    component: () => import('@/pages/components/Modal/index.vue'),
                },
                {
                    path: 'pagination',
                    name: 'PagePagination',
                    component: () => import('@/pages/components/Pagination/index.vue'),
                },
                {
                    path: 'radio-button',
                    name: 'PageRadioButton',
                    component: () => import('@/pages/components/RadioButton/index.vue'),
                },
                {
                    path: 'select',
                    name: 'PageSelect',
                    component: () => import('@/pages/components/Select/index.vue'),
                },
                {
                    path: 'table',
                    name: 'PageTable',
                    component: () => import('@/pages/components/Table/index.vue'),
                },
                {
                    path: 'tabs',
                    name: 'PageTabs',
                    component: () => import('@/pages/components/Tabs/index.vue'),
                },
                {
                    path: 'textarea',
                    name: 'PageTextarea',
                    component: () => import('@/pages/components/Textarea/index.vue'),
                },
                {
                    path: 'text-field',
                    name: 'PageTextField',
                    component: () => import('@/pages/components/TextField/index.vue'),
                },
                {
                    path: 'tooltip',
                    name: 'PageTooltip',
                    component: () => import('@/pages/components/Tooltip/index.vue'),
                },
            ],
        },
        {
            path: '/snippets',
            component: () => import('@/layouts/MainLayout/index.vue'),
            children: [
                {
                    path: 'formatters',
                    name: 'SnippetFormatters',
                    component: () => import('@/pages/snippets/Formatters/index.vue'),
                },
            ],
        },
    ],
});

export default router;