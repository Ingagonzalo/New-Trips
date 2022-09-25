// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //conexion entre React y Firebase
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq3K5LNQeMXNojtPxpjgGSjxab7aV-TYI",
  authDomain: "coderhouse-react-4ef4c.firebaseapp.com",
  projectId: "coderhouse-react-4ef4c",
  storageBucket: "coderhouse-react-4ef4c.appspot.com",
  messagingSenderId: "789344836891",
  appId: "1:789344836891:web:a25a252a9eb0227f47c7be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//BASE DE DATOS
export const db = getFirestore(app)