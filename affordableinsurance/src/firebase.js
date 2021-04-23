import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyArhNz1n8_lHFgaX0anwKC9tfhtX-rD15M',
  authDomain: 'affordableinsurancesample.firebaseapp.com',
  projectId: 'affordableinsurancesample',
  storageBucket: 'affordableinsurancesample.appspot.com',
  messagingSenderId: '26970012558',
  appId: '1:26970012558:web:01a56b9d838a16b50bc2df',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, db, storage };
