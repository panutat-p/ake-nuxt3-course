export async function useGetProduct() {
    const {
        data: products,
        pending,
        error
    } = await useLazyFetch('https://api.codingthailand.com/api/course', {initialCache: false});
    return {products, pending, error};
}

export async function useGetProductById(id: string) {
    const {data: products, pending, error} = await useLazyFetch(`https://api.codingthailand.com/api/course/${id}`);
    return {products, pending, error};
}
