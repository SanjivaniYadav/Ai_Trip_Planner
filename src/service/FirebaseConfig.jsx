// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-trip-planner-fae6c.firebaseapp.com",
  projectId: "ai-trip-planner-fae6c",
  storageBucket: "ai-trip-planner-fae6c.firebasestorage.app",
  messagingSenderId: "560127453210",
  appId: "1:560127453210:web:53e64e7fe3244e43fc09a3",
  measurementId: "G-007SVKRG8S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
