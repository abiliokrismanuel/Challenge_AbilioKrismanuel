// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArkuP_8Wsa70ckO6Jjs28KAhNXOPrxOuI",
  authDomain: "abilio-binar-challenge6-349919.firebaseapp.com",
  projectId: "abilio-binar-challenge6-349919",
  storageBucket: "abilio-binar-challenge6-349919.appspot.com",
  messagingSenderId: "148871671222",
  appId: "1:148871671222:web:0cea2346009c67dc93a517",
  measurementId: "G-9YCY6VL41W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;