import firebase from 'firebase/app'
import 'firebase/firestore'; 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyAwagm95EIbK_mAeqge4zyti4lRfteR84o",
    authDomain: "crwn-db-ae15f.firebaseapp.com",
    databaseURL: "https://crwn-db-ae15f.firebaseio.com",
    projectId: "crwn-db-ae15f",
    storageBucket: "crwn-db-ae15f.appspot.com",
    messagingSenderId: "91269761969",
    appId: "1:91269761969:web:6edcd03556a5e6569f0b90",
    measurementId: "G-LF2PWSYF09"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore =  firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => (auth.signInWithPopup(provider));
export default firebase; 