// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz340S0jHZ-xade0iKyb_buQkxlrRI5OU",
  authDomain: "modiform-35693.firebaseapp.com",
  projectId: "modiform-35693",
  storageBucket: "modiform-35693.appspot.com",
  messagingSenderId: "787070813871",
  appId: "1:787070813871:web:69f10051c6eba28272b65a",
  measurementId: "G-82GQT90PC5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
