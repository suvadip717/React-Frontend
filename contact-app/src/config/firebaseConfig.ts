// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkhJaktncGIb0aTnkoLUGcywu8vx-MkX0",
  authDomain: "contact-app-d4603.firebaseapp.com",
  projectId: "contact-app-d4603",
  storageBucket: "contact-app-d4603.firebasestorage.app",
  messagingSenderId: "983680639559",
  appId: "1:983680639559:web:db355b05c27b6a4c030762",
  measurementId: "G-PQPBZZEB1B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
