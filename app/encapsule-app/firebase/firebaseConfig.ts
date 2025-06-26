import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAhbpquOm5rdKUqPZd4tviVCbE0150m8OE",
  authDomain: "encapsule-e8109.firebaseapp.com",
  projectId: "encapsule-e8109",
  storageBucket: "encapsule-e8109.firebasestorage.com",
  messagingSenderId: "1012745147908",
  appId: "1:1012745147908:web:0b2a4f8bf58f90ee6fc751",
  measurementId: "G-7BLTKMP7X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export the auth module so you can use it throughout your app
export const auth = getAuth(app);