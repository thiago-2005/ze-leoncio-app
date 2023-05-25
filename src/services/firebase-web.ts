import { initializeApp } from "firebase/app";
// import { getAnalytics } from 'firebase/analytics'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDolAwMbgNPdDYKfiOLNT58URzUUUCRUNc",
  authDomain: "patrimoville.firebaseapp.com",
  projectId: "patrimoville",
  storageBucket: "patrimoville.appspot.com",
  messagingSenderId: "911991375254",
  appId: "1:911991375254:web:f7224d806d4c87eb94c9b7",
  measurementId: "G-2K64NRH1ZQ"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
