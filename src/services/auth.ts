import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase-web";

import { api } from "./api";

const provider = new GoogleAuthProvider();

export async function login () {
  try {
    const result = await signInWithPopup(auth, provider)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result)

    const token = credential?.accessToken
    console.log(result)
    const {
      email,
      emailVerified,
      displayName,
      photoURL,
      uid,
    } = result.user

    await api.post('/api/login', {
      user: {
        email,
        emailVerified,
        displayName,
        photoURL,
        uid
      },
      token: token
    })

  } catch (error: any) {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message
    // The email of the user's account used.
    const email = error.customData.email
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error)
}
}
