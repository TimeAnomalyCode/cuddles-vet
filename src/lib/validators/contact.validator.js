import * as yup from 'yup';

export default async function validate(formData, edit = false) {
    const schema = yup.object({
        name: yup.string().required().min(3).max(40),
        email: yup.string().email().required(),
        message: yup.string().required().min(10).max(4500)
    });

    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    }

    try {
        await schema.validate(data, { abortEarly: false });

        return { success: true, contact: data };
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