import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export async function loginWithGoogle() {
    const auth = getAuth()
    const userCredential = await signInWithPopup(auth, new GoogleAuthProvider())
    return userCredential.user
}

export async function logout() {
    await signOut(getAuth())
    await fetch('/api/logout')
}

export async function registerEmailandPassword(email, pass) {
    const userCredential = await createUserWithEmailAndPassword(getAuth(), email, pass)
    return userCredential.user
}

export async function loginWithEmailandPassword(email, pass) {
    const userCredential = await signInWithEmailAndPassword(getAuth(), email, pass)
    return userCredential.user
}

export async function mailResetPasswordEmail(email) {
    await sendPasswordResetEmail(getAuth(), email)
}

export async function sendJWTToken() {
    const auth = getAuth()
    const user = auth.currentUser

    if (!user) {
        return
    }

    const token = await user.getIdToken(true)
    await fetch('/api/token', {
        method: 'POST',
        body: JSON.stringify({ token, email: user.email })
    })
}