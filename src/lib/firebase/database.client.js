import { setDoc, collection, doc } from 'firebase/firestore'
import { db } from '$lib/firebase/firebase.client'

export async function setUser(userId) {
    const users = collection(db, 'users');
    await setDoc(doc(users, userId), {
        user_id: userId,
        role: "customer",
        has_set_profile: false,
        has_confirmed_email: false,
        name: "",
        main_picture: "",
        birthday: "",
        address: "",
        phone_number: ""
    })
}