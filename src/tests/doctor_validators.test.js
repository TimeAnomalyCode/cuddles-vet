import { describe, it, expect } from 'vitest'
import path from 'path';
import validateDoctor from '$lib/validators/doctor.validator'

describe("#Doctor Validators Test", () => {
    it("Success test", async () => {
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

    it("Missing name", async () => {
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

        const output = await validateDoctor(formData)
        expect(output.success).toBe(false)
    })

    it("Empty formData", async () => {
        const formData = new FormData()
        const output = await validateDoctor(formData)
        expect(output.success).toBe(false)
    })
})