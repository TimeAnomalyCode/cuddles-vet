import { addCart, appendNewItemToCart, getLatestCart, getProduct, removeItemFromCart } from '$lib/firebase/database.server';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ params }) {
    // console.log(params)
    const product = await getProduct(params.product_id)
    const item = { id: product?.id, qty: parseInt(params.quantity) }

    let cart = await getLatestCart(params.user_id)
    if (!cart.has_cart) {
        let newCart = {
            user_id: params.user_id,
            items: [item]
        }

        await addCart(newCart)
        return json({ status: 200, message: "success" })
    }

    // check if id exists
    // await removeItemFromCart(cart.cart?.id, item.id)
    // console.log(cart.cart?.data())
    // await appendNewItemToCart(cart.cart?.id, item)

    return json({ status: 200, message: "success" })
};