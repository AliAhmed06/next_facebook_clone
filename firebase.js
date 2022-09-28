import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAqNlBWETLMw_OdV9kMItYbBAiALbNFhQ4",
    authDomain: "crud-80c45.firebaseapp.com",
    projectId: "crud-80c45",
    storageBucket: "crud-80c45.appspot.com",
    messagingSenderId: "638882286577",
    appId: "1:638882286577:web:fb20f99ffeac3b6988d250"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
