import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = process.env.FIREBASE_CONFIG!;

// Normal initializeApp works with React but for NextJS there is a possibility for multi instances
// Singleton pattern ;)
// @ts-ignore
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
