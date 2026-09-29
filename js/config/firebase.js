import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDjwcE12ncz9xhbsZVH6dFGMdgBsMi63Ng',
  authDomain: 'sinaldesk.firebaseapp.com',
  projectId: 'sinaldesk',
  storageBucket: 'sinaldesk.firebasestorage.app',
  messagingSenderId: '181418178471',
  appId: '1:181418178471:web:f263a7102ba5700757a882',
  measurementId: 'G-J4M3T2JMV9'
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const environment = Object.freeze({
  name: 'PRD',
  production: true,
  firebaseProjectId: firebaseConfig.projectId
});
