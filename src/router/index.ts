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
                {
                    path: '/autocomplete',
                    name: 'PageAutocomplete',
                    component: () => import('@/pages/Autocomplete/index.vue'),
                },
                {
                    path: '/breadcrumbs',
                    name: 'PageBreadcrumbs',
                    component: () => import('@/pages/Breadcrumbs/index.vue'),
                },
                {
                    path: '/button',
                    name: 'PageButton',
                    component: () => import('@/pages/Button/index.vue'),
                },
                {
                    path: '/checkbox',
                    name: 'PageCheckbox',
                    component: () => import('@/pages/Checkbox/index.vue'),
                },
                {
                    path: '/datepicker',
                    name: 'PageDatepicker',
                    component: () => import('@/pages/Datepicker/index.vue'),
                },
                {
                    path: '/file-input',
                    name: 'PageFileInput',
                    component: () => import('@/pages/FileInput/index.vue'),
                },
                {
                    path: '/modal',
                    name: 'PageModal',
                    component: () => import('@/pages/Modal/index.vue'),
                },
                {
                    path: '/pagination',
                    name: 'PagePagination',
                    component: () => import('@/pages/Pagination/index.vue'),
                },
                {
                    path: '/radio-button',
                    name: 'PageRadioButton',
                    component: () => import('@/pages/RadioButton/index.vue'),
                },
                {
                    path: '/select',
                    name: 'PageSelect',
                    component: () => import('@/pages/Select/index.vue'),
                },
                {
                    path: '/table',
                    name: 'PageTable',
                    component: () => import('@/pages/Table/index.vue'),
                },
                {
                    path: '/tabs',
                    name: 'PageTabs',
                    component: () => import('@/pages/Tabs/index.vue'),
                },
                {
                    path: '/textarea',
                    name: 'PageTextarea',
                    component: () => import('@/pages/Textarea/index.vue'),
                },
                {
                    path: '/text-field',
                    name: 'PageTextField',
                    component: () => import('@/pages/TextField/index.vue'),
                },
                {
                    path: '/tooltip',
                    name: 'PageTooltip',
                    component: () => import('@/pages/Tooltip/index.vue'),
                },
            ],
        },
    ],
});

export default router;