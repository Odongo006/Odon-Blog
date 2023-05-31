// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe2OizK9jDCvdC2QgKWLv0KlRBINzKIwk",
  authDomain: "blog-app-fc049.firebaseapp.com",
  projectId: "blog-app-fc049",
  storageBucket: "blog-app-fc049.appspot.com",
  messagingSenderId: "258068525890",
  appId: "1:258068525890:web:e82ed2a2be34b25607cedb",
  measurementId: "G-92WGWVEMVX"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)