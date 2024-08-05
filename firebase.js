// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChMNNev_bb7Uw7LCK8a-x7cJDKJxx0kfs",
  authDomain: "inventory-management-deea6.firebaseapp.com",
  projectId: "inventory-management-deea6",
  storageBucket: "inventory-management-deea6.appspot.com",
  messagingSenderId: "614520512560",
  appId: "1:614520512560:web:3f096b231c1111ff9c4df5",
  measurementId: "G-F4F7601STM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore };
