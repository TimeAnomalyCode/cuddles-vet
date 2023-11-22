/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
    }
};