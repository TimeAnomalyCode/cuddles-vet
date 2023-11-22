import { getAllAppointments } from '$lib/firebase/database.server'

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    const appointments = getAllAppointments(locals.user.id)
    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        appointments: appointments
    }
};