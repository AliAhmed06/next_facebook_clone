import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAxARR5S3x_NzEy4uGIMkhCRbC4ZdAovWs",
    authDomain: "next-facebook-clone-38adb.firebaseapp.com",
    projectId: "next-facebook-clone-38adb",
    storageBucket: "next-facebook-clone-38adb.appspot.com",
    messagingSenderId: "270208133761",
    appId: "1:270208133761:web:69bd4047176993274a3b80"
  };

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
