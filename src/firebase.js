import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDjqDgIvCByxL6WUNbaZbcU-aUdsnVZzlY',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'nexalive-f5a58.firebaseapp.com',
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || 'https://nexalive-f5a58-default-rtdb.firebaseio.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'nexalive-f5a58',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'nexalive-f5a58.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '676134659368',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:676134659368:web:c78ff006195236b4705c1d',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-SSSZMYCPPT'
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
