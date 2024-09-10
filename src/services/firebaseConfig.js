// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQu-NiG16MeVTbMgvZ7gkIAiaBnKTFR14",
  authDomain: "ecommercefrancisco-ce0e5.firebaseapp.com",
  projectId: "ecommercefrancisco-ce0e5",
  storageBucket: "ecommercefrancisco-ce0e5.appspot.com",
  messagingSenderId: "619931079281",
  appId: "1:619931079281:web:2c909752a7d5f41f1d81d0",
  measurementId: "G-P0EC3B00Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app) 