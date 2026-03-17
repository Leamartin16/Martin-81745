// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-wKaOZiNqZLFiDuyhl7o9hadEuUPLnkM",
  authDomain: "coder-flex-81745-2bfa1.firebaseapp.com",
  projectId: "coder-flex-81745-2bfa1",
  storageBucket: "coder-flex-81745-2bfa1.firebasestorage.app",
  messagingSenderId: "303799246452",
  appId: "1:303799246452:web:2f6d5cbbe37191b009bb21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// obtener base de datos
export const db = getFirestore(app)