import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@formkit/nuxt',
        '@vueuse/nuxt',
    ],
    meta: {
        script: [],
        meta: [],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,300;0,600;1,600&display=swap',
            },
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/@formkit/themes@next/dist/genesis/theme.css',
            },
        ],
    },
    css: [
        // Global CSS files
        '@/assets/css/main.css',
        'sweetalert2/dist/sweetalert2.css',
    ],
    runtimeConfig: {
        apiKey: 'test-api-key-1234',
        public: {
            baseURL: '/myweb', // Exposed to the frontend
        }
    }
})
