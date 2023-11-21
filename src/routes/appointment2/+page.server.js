// Forces route to go through hooks

import { checkAppointmentAvailable, getAllDoctors } from '$lib/firebase/database.server'
import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    // console.log(locals)
};

export const actions = {
    default: async ({ request, locals, params }) => {

        const formData = await request.formData()
        // console.log(formData)

        const date = new Date(formData.get("book_date"))

        const start_time = new Date(formData.get("book_date"))
        const time = formData.get("start_time").split(":")
        start_time.setHours(time[0], time[1], 0, 0)

        const data = {
            book_date: date,
            start_time: start_time,
            type_of_operation: formData.get("type_of_operation")
        }

        // console.log(data)

        throw redirect(300, `/appointment2/${data.book_date}/${data.start_time}/${data.type_of_operation}`)
    }
}