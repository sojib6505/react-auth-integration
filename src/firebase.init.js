// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//DANGER: Do not share your firebase config object in public repositories.
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuXPm4VSD8GJrhZlmmseoOBlPhcBp_nFM",
  authDomain: "auth-integration-56005.firebaseapp.com",
  projectId: "auth-integration-56005",
  storageBucket: "auth-integration-56005.firebasestorage.app",
  messagingSenderId: "339098094256",
  appId: "1:339098094256:web:a81d98254af1b3924a0975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth() 
