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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // document Ref will return a document Snapshot
  // Create new document in collection users, document key is userAuth.uid
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // It's asynchronous action so we will use await for this
  // snapShot Ref will return an object includes exists property
  // If it false mean user is not existed in our db
  const snapShot = await userRef.get();

  // if snapShot is not existed, we will go to create new user
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;

    const createdAt = new Date();

    // Wrap set action in try/catch and call it with await keyword for asynchronous action
    try {
      // Set fields data for userRef
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userRef;
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