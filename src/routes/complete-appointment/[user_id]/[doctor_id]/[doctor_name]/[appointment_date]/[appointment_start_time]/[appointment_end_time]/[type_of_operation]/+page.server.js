/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        params: params,
    }
};