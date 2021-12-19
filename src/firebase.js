import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAk-fCRvbGnCDe3XeKqw0MfB0KMWhdpWRc',
  authDomain: 'clone-8e704.firebaseapp.com',
  projectId: 'clone-8e704',
  storageBucket: 'clone-8e704.appspot.com',
  messagingSenderId: '576406800888',
  appId: '1:576406800888:web:fe6de6309435c44d206e0d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
