import * as yup from 'yup';

export default async function validate(formData, edit = false) {
    const schema = yup.object({
        doctor_id: yup.string().required('Doctor ID is required.'),
        user_id: yup.string().required('User ID is required.'),
        appointment_date: yup.date().required(),
        type_of_operation: yup.string().required(),
    });

    const data = {
        doctor_id: formData.get('doctor_id'),
        user_id: formData.get('user_id'),
        appointment_date: formData.get('appointment_date'),
        type_of_operation: formData.get('type_of_operation'),
    }

    try {
        await schema.validate(data, { abortEarly: false });

        return { success: true, appointment: data };
    } catch (error) {
        const errors = error.inner.reduce((agg, e) => {
            if (!agg['error_' + e.path]) {
                agg['error_' + e.path] = e.message;
            }
            return agg;
        }, {});

        return { ...errors, ...data, success: false }
    }
}