import yup from 'yup';

export default async function validate(formData, edit = false) {
    const schema = yup.object({
        username: yup.string().email().required(),
        password: yup.string().password().required(),
    });

    const data = {
        username: formData.get('username'),
        password: formData.get('password'),
    }

    try {
        await schema.validate(data, { abortEarly: false });

        return { success: true, password: data };
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