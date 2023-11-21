import { addNumOfSold, editImageOrder, getOrder, getProfile } from '$lib/firebase/database.server.js'
import validateOrderPhoto from '$lib/validators/orderphoto.validator.js'
import { fail, redirect } from '@sveltejs/kit'

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

        // console.log(data.order)

        await editImageOrder(params.order_id, data.order)

        // add num of sold for each product
        const num_of_sold_promiseList = []
        const order = await getOrder(params.order_id)
        // console.log(order)
        order.cart_items.forEach((val) => {
            num_of_sold_promiseList.push(addNumOfSold(val.id, val.qty))
        });

        await Promise.all(num_of_sold_promiseList)
        throw redirect(300, `/`)
    }
}