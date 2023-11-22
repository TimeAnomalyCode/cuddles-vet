// Forces route to go through hooks

import { checkAppointmentAvailable, getAllDoctors } from '$lib/firebase/database.server'
import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
    const doctors = await getAllDoctors()
    const data = {
        book_date: new Date(params.book_date),
        start_time: new Date(params.start_time),
        type_of_operation: params.type_of_operation
    }

    const end_time = new Date(data.start_time);

    if (data.type_of_operation === 'Vaccination') {
        end_time.setHours(end_time.getHours() + 1);
    }

    if (data.type_of_operation === 'Health Check-Up') {
        end_time.setHours(end_time.getHours() + 2);
    }

    data.end_time = end_time

    const availableDoctorList = []
    for (const doctor of doctors) {
        const is_free = await checkAppointmentAvailable(doctor.id, data.start_time, end_time)
        if (is_free) {
            availableDoctorList.push(doctor)
        }
    }

    return {
        isLoggedIn: locals.user !== null,
        user: locals.user,
        doctors: availableDoctorList,
        params_info: data,
    }
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

        console.log(data)

        throw redirect(300, `/appointment2/${data.book_date}/${data.start_time}/${data.type_of_operation}`)
    }
}