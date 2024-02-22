// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d1b32.firebaseapp.com",
  projectId: "mern-blog-d1b32",
  storageBucket: "mern-blog-d1b32.appspot.com",
  messagingSenderId: "641882804303",
  appId: "1:641882804303:web:549ad335fa94477fb95a3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);