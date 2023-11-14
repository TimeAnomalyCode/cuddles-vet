// Forces route to go through hooks
/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    console.log(locals)
};