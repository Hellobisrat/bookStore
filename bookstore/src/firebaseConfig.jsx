// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRHkJb-9F4Y5fOHRqjhwGgmBfOOI1dAwc",
  authDomain: "bookstore-75f15.firebaseapp.com",
  projectId: "bookstore-75f15",
  storageBucket: "bookstore-75f15.firebasestorage.app",
  messagingSenderId: "538095097965",
  appId: "1:538095097965:web:398178deb8176715db8764",
  measurementId: "G-1H1RD3FWV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export db for use in other components
export default db;

