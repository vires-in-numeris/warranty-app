import firebase from 'firebase/compat';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAudDY_RmZQk_fousdmytQDOYmpGs3dma4',
    authDomain: 'warranty-app-2a968.firebaseapp.com',
    projectId: 'warranty-app-2a968',
    storageBucket: 'warranty-app-2a968.appspot.com',
    messagingSenderId: '1004328001986',
    appId: '1:1004328001986:web:80577455e6dd208a73765b'
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
