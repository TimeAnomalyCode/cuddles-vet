import { addOrder, editOrder, getLatestCart, getProfile } from '$lib/firebase/database.server.js'
import validateOrderPhoto from '$lib/validators/orderphoto.validator.js'
import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {
    const cart = await getLatestCart(locals.user.id)
    const profile = await getProfile(locals.user.id)

    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        cart_id: cart.cart?.id,
        cart: cart.cart?.data(),
        profile: profile,
    }
}