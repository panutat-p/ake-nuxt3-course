import {useStorage} from '@vueuse/nuxt/node_modules/@vueuse/core';

export default defineNuxtRouteMiddleware((to, from) => {
    const token = useStorage('nuxtToken', null);
    console.log(`middleware, token: ${token}`);
    if (!token?.value) {
        return navigateTo('/login');
    }
    return true;
});
