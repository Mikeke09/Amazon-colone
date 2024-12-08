// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJHip3T0J301WZgRuRm3-NQ5a6098PPwc",
  authDomain: "clone-68e92.firebaseapp.com",
  projectId: "clone-68e92",
  storageBucket: "clone-68e92.firebasestorage.app",
  messagingSenderId: "761572977408",
  appId: "1:761572977408:web:01022d7bccbf396a2ea1e5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
