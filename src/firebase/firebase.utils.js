import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAZxrQn_qTMpR_adwcFmg-qoPstrY0lk6U',
  authDomain: 'crwn-clothings-db.firebaseapp.com',
  databaseURL: 'https://crwn-clothings-db.firebaseio.com',
  projectId: 'crwn-clothings-db',
  storageBucket: 'crwn-clothings-db.appspot.com',
  messagingSenderId: '389226174512',
  appId: '1:389226174512:web:c716bb176e24fc40bd35f5'
};

// Setup firebase app
firebase.initializeApp(firebaseConfig);

// firebase auth created
export const auth = firebase.auth();

// firebase firestore created
export const firestore = firebase.firestore();

// auth provider created
const provider = new firebase.auth.GoogleAuthProvider();

// Open popup to select google account when sign in with google accout
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
