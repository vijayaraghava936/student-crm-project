// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdwmSndJv9ncLx4vr8QdXn_nimdyQqD8o",
  authDomain: "student-crm-eee48.firebaseapp.com",
  projectId: "student-crm-eee48",
  storageBucket: "student-crm-eee48.firebasestorage.app",
  messagingSenderId: "1067085698206",
  appId: "1:1067085698206:web:55f7379871741ad37f178f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Add these
export const auth = getAuth(app);
export const db = getFirestore(app);
