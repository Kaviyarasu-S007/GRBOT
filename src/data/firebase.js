import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; 
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB_9LJaDX0EmvqfEeYJGExdHRqQN5zo_FU",
    authDomain: "kavi-597ca.firebaseapp.com",
    projectId: "kavi-597ca",
    storageBucket: "kavi-597ca.appspot.com",
    messagingSenderId: "609330279022",
    appId: "1:609330279022:web:647d3f879d5c0db5446c7f"
    // apiKey: "AIzaSyB4keH_zhjR2fAaH5wTDW8FKqO4BVGamt4",
    // authDomain: "admin-70277.firebaseapp.com",
    // projectId: "admin-70277",
    // storageBucket: "admin-70277.appspot.com",
    // messagingSenderId: "1073905199194",
    // appId: "1:1073905199194:web:f6966ebb251ac034fa9063",
    // measurementId: "G-V5Z9T7LMVS"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app); 
const storage = getStorage(app);
const db = firestore; 

export { db, firestore, auth, storage };

