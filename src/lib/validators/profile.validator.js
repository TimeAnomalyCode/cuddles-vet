import yup from 'yup';

export default async function validate(formData, edit = false) {
    const schema = yup.object({
        name: yup.string().required('Name is required.').min(4).max(40),
        birthday: yup.date().required('Birthday Required'),
        phone_number: yup.number().required(`Number required. Remove '-' from phone number`).max(9),
        address: yup.string().required().min(5).max(4500),
        main_picture: yup
            .mixed()
            .nullable()
            .test('fileRequired', 'Main Picture required', (value) => {
                return value !== null || edit;
            })
            .test('fileType', 'The file must be an image', (value) => {
                if (value && value.type) {
                    return ['image/png', 'image/jpeg'].includes(value.type);
                }
                return true;
            })
            .test('fileSize', 'The file must be under 4 MB.', (value) => {
                if (value && value.size) {
                    return value.size < 4_000_000;
                }
                return true;
            })
    });

    const data = {
        name: formData.get('name'),
        birthday: formData.get('birthday'),
        address: formData.get('address'),
        phone_number: formData.get('phone_number'),
        description: formData.get('description'),
        main_picture: emptyFileIsNull(formData.get('main_picture')),
    }

    try {
        await schema.validate(data, { abortEarly: false });

        return { success: true, profile: data };
    } catch (error) {
        const errors = error.inner.reduce((agg, e) => {
            if (!agg['error_' + e.path]) {
                agg['error_' + e.path] = e.message;
            }
            return agg;
        }, {});

        delete data.main_picture;

        return { ...errors, ...data, success: false }
    }
}

function emptyFileIsNull(file) {
    if (file.size === 0) {
        return null;
    }

    return file;
}