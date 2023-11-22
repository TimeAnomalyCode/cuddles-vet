import { addProfile } from "$lib/firebase/database.server";
import { auth, db } from "$lib/firebase/firebase.server";
import { redirect } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // console.log(event)

    const protectedRoutes = [
        '/profile',
        '/cart',
        '/complete-appointment'
    ]

    const guestRoutes = [
        '/login',
        '/signup',
        '/forgot-password'
    ]

    try {
        event.locals.user = await getFirebaseUser(event.cookies.get('jwt'))
    } catch (err) {
        event.locals.user = null
    }

    const user = event.locals?.user
    const url = event.url

    // console.log("sent")
    // console.log(user)

    let has_set_profile = false
    if (user) {
        const profileRef = await db.collection('profiles').doc(user.id).get()

        if (profileRef.exists) {
            has_set_profile = profileRef.data()?.has_set_profile
        }

        // console.log("Inside profile")
        // console.log(has_set_profile)
        // console.log(profileRef.data())

        if (!user.emailVerified && url.pathname !== '/email-approve') {
            throw redirect(302, `/email-approve`)
        }

        if (!has_set_profile && url.pathname !== '/profile-setup') {
            throw redirect(302, `/profile-setup`)
        }
    }

    if (url.pathname !== '/') {
        if (!user && protectedRoutes.find(u => url.pathname.indexOf(u) > -1)) {
            throw redirect(302, `/login?redirect=${url.pathname}`)
        }

        if (user && guestRoutes.find(u => url.pathname.indexOf(u) > -1)) {
            throw redirect(302, '/')
        }
    }

    const response = await resolve(event)

    // console.log("recieved")
    // console.log(user)

    return response
}

async function getFirebaseUser(token) {
    if (!token) {
        return null
    }

    const decodedToken = await auth.verifyIdToken(token, true)
    const user = await auth.getUser(decodedToken.uid)

    // const profile = {
    //     user_id: user.uid,
    //     name: user.displayName,
    //     phone_number: user.phoneNumber,
    // }
    // await addProfile(profile)

    return {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified
    }
}