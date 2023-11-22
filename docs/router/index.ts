import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/EmptyLayout/index.vue'),
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
            redirect: '/getting-started/installation',
            children: [
                {
                    path: 'installation',
                    name: 'GettingStartedInstallation',
                    component: () => import('@/pages/gettingStarted/Installation/index.vue'),
                },
                {
                    path: 'customization',
                    name: 'GettingStartedCustomization',
                    component: () => import('@/pages/gettingStarted/Customization/index.vue'),
                },
            ],
        },
        {
            path: '/components',
            component: () => import('@/layouts/MainLayout/index.vue'),
            redirect: '/components/autocomplete',
            children: [
                {
                    path: 'autocomplete',
                    name: 'ComponentAutocomplete',
                    component: () => import('@/pages/components/Autocomplete/index.vue'),
                },
                {
                    path: 'breadcrumbs',
                    name: 'ComponentBreadcrumbs',
                    component: () => import('@/pages/components/Breadcrumbs/index.vue'),
                },
                {
                    path: 'button',
                    name: 'ComponentButton',
                    component: () => import('@/pages/components/Button/index.vue'),
                },
                {
                    path: 'checkbox',
                    name: 'ComponentCheckbox',
                    component: () => import('@/pages/components/Checkbox/index.vue'),
                },
                {
                    path: 'datepicker',
                    name: 'ComponentDatepicker',
                    component: () => import('@/pages/components/Datepicker/index.vue'),
                },
                {
                    path: 'file-input',
                    name: 'ComponentFileInput',
                    component: () => import('@/pages/components/FileInput/index.vue'),
                },
                {
                    path: 'modal',
                    name: 'ComponentModal',
                    component: () => import('@/pages/components/Modal/index.vue'),
                },
                {
                    path: 'pagination',
                    name: 'ComponentPagination',
                    component: () => import('@/pages/components/Pagination/index.vue'),
                },
                {
                    path: 'radio-button',
                    name: 'ComponentRadioButton',
                    component: () => import('@/pages/components/RadioButton/index.vue'),
                },
                {
                    path: 'select',
                    name: 'ComponentSelect',
                    component: () => import('@/pages/components/Select/index.vue'),
                },
                {
                    path: 'table',
                    name: 'ComponentTable',
                    component: () => import('@/pages/components/Table/index.vue'),
                },
                {
                    path: 'tabs',
                    name: 'ComponentTabs',
                    component: () => import('@/pages/components/Tabs/index.vue'),
                },
                {
                    path: 'textarea',
                    name: 'ComponentTextarea',
                    component: () => import('@/pages/components/Textarea/index.vue'),
                },
                {
                    path: 'text-field',
                    name: 'ComponentTextField',
                    component: () => import('@/pages/components/TextField/index.vue'),
                },
                {
                    path: 'tooltip',
                    name: 'ComponentTooltip',
                    component: () => import('@/pages/components/Tooltip/index.vue'),
                },
            ],
        },
        {
            path: '/snippets',
            component: () => import('@/layouts/MainLayout/index.vue'),
            redirect: '/snippets/formatters',
            children: [
                {
                    path: 'files',
                    name: 'SnippetFiles',
                    component: () => import('@/pages/snippets/Files/index.vue'),
                },
                {
                    path: 'formatters',
                    name: 'SnippetFormatters',
                    component: () => import('@/pages/snippets/Formatters/index.vue'),
                },
                {
                    path: 'notification',
                    name: 'SnippetNotification',
                    component: () => import('@/pages/snippets/Notification/index.vue'),
                },
            ],
        },
    ],
});

export default router;