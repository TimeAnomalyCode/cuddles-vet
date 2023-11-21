// Forces route to go through hooks

import { addContact } from '$lib/firebase/database.server'
import messagesStore from '$lib/stores/messages.store'
import validateContact from '$lib/validators/contact.validator'
import { fail, redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    // console.log(locals)
};

export const actions = {
    default: async ({ request, locals, params }) => {

        const formData = await request.formData()

        const data = await validateContact(formData)
        // console.log(data)
        // console.log(locals)

        if (!data.success) {
            return fail(422, data)
        }

        await addContact(data.contact)
        messagesStore.showSuccess("We will contact you as soon as we can!")

        throw redirect(300, `/`)
    }
}