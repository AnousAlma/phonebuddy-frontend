// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsdADuVGphQKJ1kkK2Bf7-zbyGGTbukdA",
  authDomain: "phone-buddy-797f8.firebaseapp.com",
  projectId: "phone-buddy-797f8",
  storageBucket: "phone-buddy-797f8.firebasestorage.app",
  messagingSenderId: "581603426712",
  appId: "1:581603426712:web:44b7306860b9fc6179abed",
  measurementId: "G-LHHGCSCXEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

export {app, googleProvider}