import { getAllProducts } from '$lib/firebase/database.server.js'

export async function load({ locals }) {
    const products = await getAllProducts()
    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        products: products
    }
}