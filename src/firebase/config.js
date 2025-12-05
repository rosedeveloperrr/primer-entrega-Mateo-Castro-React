// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVzm4PygqxkG1hujysMFmN2Lb9IX2TSz8",
  authDomain: "coder-ecommerce-mateo-castro.firebaseapp.com",
  projectId: "coder-ecommerce-mateo-castro",
  storageBucket: "coder-ecommerce-mateo-castro.firebasestorage.app",
  messagingSenderId: "202618553532",
  appId: "1:202618553532:web:7e040c2043e58635b9bcb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);