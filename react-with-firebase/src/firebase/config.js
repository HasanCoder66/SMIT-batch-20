import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW-7ggXxc0cGBp7gjcGiekwyisFdUnW5g",
  authDomain: "react-practice-b-20.firebaseapp.com",
  projectId: "react-practice-b-20",
  storageBucket: "react-practice-b-20.firebasestorage.app",
  messagingSenderId: "19561634047",
  appId: "1:19561634047:web:8cd89709d2a81e455e94ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app