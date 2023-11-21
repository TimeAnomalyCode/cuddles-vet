import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ params }) {
    console.log(params)
    return json({ status: 200, message: "success" })
};