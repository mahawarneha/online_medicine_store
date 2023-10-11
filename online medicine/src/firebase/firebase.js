
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlcol0uMKXmm8waTFrMFGramte8EERYt8",
  authDomain: "onlinemedicine-5c3a2.firebaseapp.com",
  databaseURL: "https://onlinemedicine-5c3a2-default-rtdb.firebaseio.com",
  projectId: "onlinemedicine-5c3a2",
  storageBucket: "onlinemedicine-5c3a2.appspot.com",
  messagingSenderId: "22014743084",
  appId: "1:22014743084:web:4c987d9702b8305ef0b789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
