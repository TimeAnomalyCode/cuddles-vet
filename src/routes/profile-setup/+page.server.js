import { addProfile } from '$lib/firebase/database.server'
import { auth } from '$lib/firebase/firebase.server'
import validateProfile from '$lib/validators/profile.validator'
import { fail, redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
    const user = locals.user

    const userInfo = await auth.getUser(user.id)

    // const data = await fetch("https://placehold.co/500x500?text=A")
    // console.log(data)

    if (userInfo.providerData[0].providerId == 'google.com') {

        const profile = {
            name: userInfo.displayName || '',
            phone_number: userInfo.phoneNumber || '',
        }

        return { profile }
    }
};

export const actions = {
    default: async ({ request, locals, params }) => {
        // const book = await getBook(params.id)


        // if (!book || book.user_id !== locals.user.id) {
        //     throw error(403, { message: "Access Denied!" })
        // }

        const formData = await request.formData()

        const data = await validateProfile(formData)
        // console.log(data)
        // console.log(locals)

        if (!data.success) {
            return fail(422, data)
        }

        data.profile.user_id = locals.user.id
        await addProfile(data.profile)

        // await editBook(params.id, data.book, locals.user.id)

        throw redirect(300, `/`)
    }
}