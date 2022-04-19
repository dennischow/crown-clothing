import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC92108ZZvIpwUy210hPN_SBxHL3KZi1Ao",
    authDomain: "crown-clothing-db-18707.firebaseapp.com",
    projectId: "crown-clothing-db-18707",
    storageBucket: "crown-clothing-db-18707.appspot.com",
    messagingSenderId: "627900760436",
    appId: "1:627900760436:web:b222e85a0bdbccd32bec21",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);