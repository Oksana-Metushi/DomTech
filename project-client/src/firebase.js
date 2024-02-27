// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "domtech-ap.firebaseapp.com",
  projectId: "domtech-ap",
  storageBucket: "domtech-ap.appspot.com",
  messagingSenderId: "918066630087",
  appId: "1:918066630087:web:a78ef66418392720189de2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);