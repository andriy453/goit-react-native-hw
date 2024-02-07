import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCjKqG_9S_jh9zvSfBbcOIpcABjSU1BUT0",
    authDomain: "react-native-project-5ab58.firebaseapp.com",
    projectId: "react-native-project-5ab58",
    storageBucket: "react-native-project-5ab58.appspot.com",
    messagingSenderId: "828732868168",
    appId: "1:828732868168:web:56ff0ebe9209772178fa7d",
    measurementId: 'G-SWZTDG1C1N',
    databaseURL:
    'https://react-native-project-5ab58-default-rtdb.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const storage = getStorage(app);