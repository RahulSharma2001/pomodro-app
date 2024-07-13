import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "pomodro-ca5c6.firebaseapp.com",
  projectId: "pomodro-ca5c6",
  storageBucket: "pomodro-ca5c6.appspot.com",
  messagingSenderId: "714327884802",
  appId: "1:714327884802:web:5507974071580a427c931b",
  measurementId: "G-BK8GBWQVBW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
