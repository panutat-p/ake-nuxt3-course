import {useStorage} from '@vueuse/nuxt/node_modules/@vueuse/core';

export async function useLogIn(email, password) {
    const {data: r, error: e} = await useLazyFetch(
        'https://api.codingthailand.com/api/login',
        {
            method: 'POST',
            body: {
                email: email,
                password: password,
            },
            initialCache: false,
        }
    );
    return {r, e};
}

export async function useIsLogIn() {
    const token = useStorage('nuxtToken', null);
    return token.value !== null;
}

export async function useGetProfile() {
    const token = JSON.parse(useStorage('nuxtToken', null).value);
    const {data: r} = await useLazyFetch(
        'https://api.codingthailand.com/api/profile',
        {
            method: 'GET',
            headers: {Authorization: `Bearer ${token?.access_token}`},
        }
    );
    return {r};
}
