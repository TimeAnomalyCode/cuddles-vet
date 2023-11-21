import { addProduct } from '$lib/firebase/database.server';
import validateProduct from '$lib/validators/product.validator';
import { json } from '@sveltejs/kit';

/** @type {import('../$types').RequestHandler} */
export async function POST({ request }) {
    const formData = await request.formData()
    console.log(formData)
    let data = await validateProduct(formData)

    if (data.success) {
        console.log(data)
        data.product.price = parseFloat(data.product.price)
        const id = await addProduct(data.product)
        return json({ status: 200, message: "success", product_id: id })
    }

    return json({ status: 500, message: "fail" })
};