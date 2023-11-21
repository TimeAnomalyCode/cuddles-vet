import { addOrder, getCart } from '$lib/firebase/database.server';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ params }) {
    // console.log(params)
    const cart = await getCart(params.cart_id)
    const order = {
        user_id: params.user_id,
        cart_id: params.cart_id,
        cart_items: cart.items,
        address: params.current_address,
        total_price: params.nett_total,
    }
    // console.log(order)
    // const id = await addOrder()
    return json({ status: 200, message: "success", order_id: "Test" })
};