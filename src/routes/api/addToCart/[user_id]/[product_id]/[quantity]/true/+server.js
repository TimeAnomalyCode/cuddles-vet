import { addCart, appendNewItemToCart, getLatestCart, getProduct, removeItemFromCart } from '$lib/firebase/database.server';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ params }) {
    // console.log(params)
    const product = await getProduct(params.product_id)
    const item = { qty: parseInt(params.quantity), ...product }

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
    // console.log(cart.cart?.data())
    const { is_exist, existingItem } = checkIdExists(cart.cart?.data().items, item.id)

    if (is_exist) {
        await removeItemFromCart(cart.cart?.id, existingItem)
        item.qty += existingItem.qty
        await appendNewItemToCart(cart.cart?.id, item)
    }
    // console.log(cart.cart?.data())
    await appendNewItemToCart(cart.cart?.id, item)

    return json({ status: 200, message: "success" })
};

function checkIdExists(data, id) {
    let is_exist = false
    let item
    data.forEach((val) => {
        if (val.id === id) {
            is_exist = true
            item = val
        }
    });
    return {
        is_exist: is_exist,
        existingItem: item
    }
}