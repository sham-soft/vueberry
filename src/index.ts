import type { App } from 'vue';
import * as components from './components';
import './sass/main.sass';

export default {
    install: (app: App) => {
        /* declare global component */
        for (const componentKey in components) {
            app.component(componentKey, components[componentKey as keyof object]);
        }
    },
};