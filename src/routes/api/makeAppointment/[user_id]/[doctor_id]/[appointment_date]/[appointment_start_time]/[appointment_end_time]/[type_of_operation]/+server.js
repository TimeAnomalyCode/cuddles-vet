import { addAppointment } from '$lib/firebase/database.server';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ params }) {
    // console.log(params)
    const form = {
        user_id: params.user_id,
        doctor_id: params.doctor_id,
        appointment_date: new Date(params.appointment_date),
        appointment_start_time: new Date(params.appointment_start_time),
        appointment_end_time: new Date(params.appointment_end_time),
        type_of_operation: params.type_of_operation,
    }
    const id = await addAppointment(form)
    return json({ status: 200, message: "success" })
};