import { addDoctor, deleteDoctor, editDoctor, getDoctor } from '$lib/firebase/database.server'
import { describe, it, expect } from 'vitest'
import path from 'path';

describe("#Doctor Test", () => {
    let id

    it("Creates a doctor and checks the data", async () => {
        const main_picture = path.dirname("src/tests/favicon.png")
        const doctor = {
            name: "Test name",
            position: "Test position",
            description: "Test description",
            main_picture: new Blob([main_picture])
        }
        id = await addDoctor(doctor)
        const newDoctor = await getDoctor(id)

        expect(newDoctor?.name).toBe(doctor.name)
        expect(newDoctor?.position).toBe(doctor.position)
        expect(newDoctor?.description).toBe(doctor.description)
    })

    it("Edits a doctor and checks the data", async () => {
        const doctor = {
            name: "Test name2",
            position: "Test position2",
            description: "Test description2",
        }
        await editDoctor(id, doctor)
        const newDoctor = await getDoctor(id)

        expect(newDoctor?.name).toBe(doctor.name)
        expect(newDoctor?.position).toBe(doctor.position)
        expect(newDoctor?.description).toBe(doctor.description)
    })

    it("Deletes a doctor and ensure its deleted", async () => {
        await deleteDoctor(id)

        const data = await getDoctor(id)
        expect(data).toBeUndefined()
    })
})