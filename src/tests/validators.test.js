import { describe, it, expect } from 'vitest'
import path from 'path';
import validateDoctor from '$lib/validators/doctor.validator'

describe("#Validators Test", () => {
    it("Test the doctor validator and success", async () => {
        const formData = new FormData()

        const main_picture = path.dirname("src/tests/favicon.png")
        const doctor = {
            name: "Test name",
            position: "Test position",
            description: "Test description",
            main_picture: new Blob([main_picture])
        }

        for (let key in doctor) {
            formData.append(key, doctor[key])
        }

        const output = await validateDoctor(formData)
        expect(output.success).toBe(true)
    })

    it("Doctor Validator Name Missing", async () => {
        const formData = new FormData()

        const main_picture = path.dirname("src/tests/favicon.png")
        const doctor = {
            position: "Test position",
            description: "Test description",
            main_picture: new Blob([main_picture])
        }

        for (let key in doctor) {
            formData.append(key, doctor[key])
        }

        const output = await validate(formData)
        expect(output.success).toBe(false)
    })
})