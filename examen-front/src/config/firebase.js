// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// TODO: Cambiar por el vuestro 

const firebaseConfig = {
    apiKey: "AIzaSyB6zRqYyTJ80fnhlAmiMdKbnulxyBUR4y8",
    authDomain: "lawiki-3f2f9.firebaseapp.com",
    projectId: "lawiki-3f2f9",
    storageBucket: "lawiki-3f2f9.firebasestorage.app",
    messagingSenderId: "480272170142",
    appId: "1:480272170142:web:5fd3d6f607e080f2ab4f8f",
    measurementId: "G-58KJ67Z6WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, analytics, provider, signInWithPopup };