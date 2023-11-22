// Forces route to go through hooks

import { getProfile } from '$lib/firebase/database.server'

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    // console.log(locals)
    const profile = await getProfile(locals.user.id)
    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        profile: profile
    }
};