// http://localhost:3000/api/contact

const user: { id: number; name: string }[] = [
    {id: 1, name: "John"},
    {id: 2, name: "Mary"},
]

export default defineEventHandler((event) => {
    const method = event.req.method;
    const config = useRuntimeConfig();

    if (method === 'GET') {
        console.log(event.req.url);
        return {
            apiKey: config.apiKey,
            user: user,
        };
    }
});
