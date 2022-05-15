import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    meta: {
        script: [],
        meta: [],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,300;0,600;1,600&display=swap',
            },
        ],
    },
    css: [
        // Global CSS files
        '@/assets/css/main.css',
    ]
})
