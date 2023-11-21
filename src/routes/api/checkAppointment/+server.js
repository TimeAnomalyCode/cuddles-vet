import { checkAppointmentAvailable } from '$lib/firebase/database.server';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {

    const start_time = new Date()
    start_time.setHours(13, 0, 0, 0);

    const end_time = new Date()
    end_time.setHours(15, 0, 0, 0);

    const is_free = await checkAppointmentAvailable("TLkerHcJ2FOmoeE8lUlH", start_time, end_time)

    return json({ status: 200, message: "success", is_free: is_free })
};