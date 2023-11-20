export function load({ locals }) {
    return {
        isLoggedIn: locals.user !== null,
        user: locals.user
    }
}