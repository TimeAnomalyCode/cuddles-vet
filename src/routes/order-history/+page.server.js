import { getAllOrders, getOrder } from '$lib/firebase/database.server'

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    const orders = await getAllOrders(locals.user.id)
    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        orders: orders
    }
};