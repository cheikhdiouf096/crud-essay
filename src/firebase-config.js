import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAcqQEW4MeL-JE4yKB1WcAuEfUeZuEafY",
  authDomain: "crud-essay.firebaseapp.com",
  projectId: "crud-essay",
  storageBucket: "crud-essay.appspot.com",
  messagingSenderId: "332913466269",
  appId: "1:332913466269:web:2545eb381b87e6b3ec6d74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);




