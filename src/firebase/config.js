// En tu archivo config.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuUPLpscfKG28Ucs0ReZQDtAeieKgiioQ",
    authDomain: "makatoa-58ace.firebaseapp.com",
    projectId: "makatoa-58ace",
    storageBucket: "makatoa-58ace.appspot.com",
    messagingSenderId: "947426942082",
    appId: "1:947426942082:web:3ce63fcec2b2568174689b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
