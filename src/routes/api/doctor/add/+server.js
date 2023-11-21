import { addDoctor } from '$lib/firebase/database.server';
import validateDoctor from '$lib/validators/doctor.validator';
import { json } from '@sveltejs/kit';

/** @type {import('../$types').RequestHandler} */
export async function POST({ request }) {
    const formData = await request.formData()
    console.log(formData)
    let data = await validateDoctor(formData)

    if (data.success) {
        console.log(data)
        const id = await addDoctor(data.doctor)
        return json({ status: 200, message: "success", doctor_id: id })
    }

    return json({ status: 500, message: "fail" })
};