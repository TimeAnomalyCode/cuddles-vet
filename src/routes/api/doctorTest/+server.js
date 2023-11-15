import { getAllDoctors } from '$lib/firebase/database.server';
import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const doctors = await getAllDoctors()
    return json({ message: doctors }, { status: 200 })
};