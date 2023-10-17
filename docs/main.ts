import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import ShamUI from '../src';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(ShamUI);

app.mount('#app');