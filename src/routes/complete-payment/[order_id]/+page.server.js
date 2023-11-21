import { getLatestCart, getProfile } from '$lib/firebase/database.server.js'

export async function load({ locals, params }) {
    const cart = await getLatestCart(locals.user.id)
    const profile = await getProfile(locals.user.id)

    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        cart: cart.cart?.data(),
        profile: profile,
    }
}

export const actions = {
    default: async ({ request, locals, params }) => {

        const formData = await request.formData()
        const data = await validateOrderPhoto(formData)

        if (!data.success) {
            return fail(422, data)
        }

        const cart = await getLatestCart(locals.user.id)


        // await editOrder()
        // throw redirect(300, `/`)
    }
}