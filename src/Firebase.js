import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbcsMs9uYyjX0qmx5SBrW36kaYi7r0RgE",
  authDomain: "e-commerce-3e82b.firebaseapp.com",
  projectId: "e-commerce-3e82b",
  storageBucket: "e-commerce-3e82b.appspot.com",
  messagingSenderId: "258817959213",
  appId: "1:258817959213:web:0354cc1df38241da611fa4",
  measurementId: "G-72P1LM6ZZK",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
