import { getProfile } from '$lib/firebase/database.server.js'

export function load({ locals }) {
    let profile = ""
    if (locals.user) {
        profile = getProfile(locals.user.id)
    }
    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        profile: profile
    }
}