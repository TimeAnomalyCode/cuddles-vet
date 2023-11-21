import { getLatestCart, getProfile } from '$lib/firebase/database.server.js'

export async function load({ locals }) {
    const cart = await getLatestCart(locals.user.id)
    const profile = await getProfile(locals.user.id)

    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        cart: cart.cart?.data(),
        profile: profile,
    }
}