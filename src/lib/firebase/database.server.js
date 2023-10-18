import { db } from "$lib/firebase/firebase.server";
import { firestore } from "firebase-admin";
import { deleteFileFromBucket, deleteFolderFromBucket, saveFileToBucket } from "$lib/firebase/firestorage.server";

// Doctors
export async function addDoctor(doctor) {
    const doctorCollection = db.collection('doctors')

    const doctorRef = await doctorCollection.add({
        name: doctor.name,
        position: doctor.position,
        description: doctor.description,
        rating: 0,
        created_at: firestore.Timestamp.now().seconds,
    })

    const mainPictureUrl = await saveFileToBucket(doctor.main_picture, `doctor_images/${doctorRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)

    await doctorRef.update({
        main_picture: mainPictureUrl
    })

    return doctorRef.id
}

export async function editDoctor(id, form) {
    const doctorRef = db.collection('doctors').doc(id)
    let mainPicture = form.main_picture || null

    delete form.main_picture

    await doctorRef.update(form)

    if (mainPicture) {
        const mainPictureUrl = await saveFileToBucket(mainPicture, `doctor_images/${doctorRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)
        doctorRef.update({ main_picture: mainPictureUrl })
    }
}

export async function getDoctor(id) {
    const doctorRef = await db.collection('doctors').doc(id).get()

    if (doctorRef.exists) {
        return { id: doctorRef.id, ...doctorRef.data() }
    }
}

export async function deleteDoctor(id) {
    const doctorRef = db.collection('doctors').doc(id)

    // delete from cloud storage (img)
    if ((await doctorRef.get()).exists) {
        const oldDoctor = `doctor_images/${doctorRef.id}`
        await deleteFolderFromBucket(oldDoctor)
        await doctorRef.delete()
    }

}

// Products

// Appointments

// Reviews

// Cart

// Orders + Approve/Deny