
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDYq5dXIm-OJnH1ILQkkbtbYoE2Bcxw6rk",
  authDomain: "blog-app-95e7d.firebaseapp.com",
  projectId: "blog-app-95e7d",
  storageBucket: "blog-app-95e7d.firebasestorage.app",
  messagingSenderId: "1039593560731",
  appId: "1:1039593560731:web:574738482d908386c7843e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()