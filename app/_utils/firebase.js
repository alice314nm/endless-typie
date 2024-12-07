// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6bkNaLL9NX5Ty8tSV7dRTFEFI6tYz6Ig",
    authDomain: "endless-typie.firebaseapp.com",
    projectId: "endless-typie",
    storageBucket: "endless-typie.firebasestorage.app",
    messagingSenderId: "373345083487",
    appId: "1:373345083487:web:0f9d081af74d555cdffbea"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

