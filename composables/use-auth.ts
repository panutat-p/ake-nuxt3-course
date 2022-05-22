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
    return { r, e };
}
