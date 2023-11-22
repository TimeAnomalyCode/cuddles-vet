import { addProfile, editProfile, getProfile } from '$lib/firebase/database.server'
import { auth } from '$lib/firebase/firebase.server'
import validateProfileEdit from '$lib/validators/profileEdit.validator'
import { fail, redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
    const profile = await getProfile(locals.user.id)

    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        profile: profile
    }
};

export const actions = {
    default: async ({ request, locals, params }) => {

        const formData = await request.formData()

        const data = await validateProfileEdit(formData, true)
        // console.log(locals)

        if (!data.success) {
            return fail(422, data)
        }

        await editProfile(locals.user.id, data.profile)

        // await editBook(params.id, data.book, locals.user.id)

        throw redirect(300, `/profile`)
    }
}