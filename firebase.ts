import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChZIqi_9EBEdJQw8fPmNjyDZICehiEn3s",
    authDomain: "chatgpt-clone-ec99c.firebaseapp.com",
    projectId: "chatgpt-clone-ec99c",
    storageBucket: "chatgpt-clone-ec99c.appspot.com",
    messagingSenderId: "872800725971",
    appId: "1:872800725971:web:72911a58381505bbf09d26",
    measurementId: "G-8S5WF9ZG9E"
};

// Normal initializeApp works with React but for NextJS there is a possibility for multi instances
// Singleton pattern ;)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
