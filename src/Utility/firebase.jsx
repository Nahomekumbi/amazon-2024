import firebase from "firebase/compat/app";
// auth
import {getAuth}from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjGuAPXNMbPJNsyJSKVeYQ53P7FQw1GcU",
  authDomain: "clone-6e1f6.firebaseapp.com",
  projectId: "clone-6e1f6",
  storageBucket: "clone-6e1f6.appspot.com",
  messagingSenderId: "515971896083",
  appId: "1:515971896083:web:09d52cddc9cabe9a5780e6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db=app.firestore()