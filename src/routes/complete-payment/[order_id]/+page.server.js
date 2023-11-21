import { getLatestCart, getOrder, getProfile } from '$lib/firebase/database.server.js'
import validateOrderPhoto from '$lib/validators/orderphoto.validator.js'
import { fail } from '@sveltejs/kit'

export async function load({ locals, params }) {
    const order = await getOrder(params.order_id)
    const profile = await getProfile(locals.user.id)

    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        order: order,
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