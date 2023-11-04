import { fileURLToPath, URL } from 'node:url';

import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./docs', import.meta.url)),
        },
    }, 
    css: {
        // Глобальный импорт общего sass
        preprocessorOptions: {
            sass: {
                additionalData: "@import '@/assets/sass/main.sass'",
            },
        },
    },
    server: {
        watch: {
            usePolling: true, // Чтобы работал vite-hot-reload
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Vueberry',
            fileName: (format) => `vueberry.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});