import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDuL28PhpRat8LM0MPZrfiTz3ZRoxKnJrU',
  authDomain: 'api-project-572557567999.firebaseapp.com',
  databaseURL:
    'https://api-project-572557567999-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'api-project-572557567999',
  storageBucket: 'api-project-572557567999.appspot.com',
  messagingSenderId: '572557567999',
  appId: '1:572557567999:web:067ca6229fd69d6acfe9ca',
  measurementId: 'G-ZRG7FF8BYK',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
