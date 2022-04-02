
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB06SpwGEFnEazfJOLlv8W8TglIL_KSpR8",
    authDomain: "whatsappclone-10aa7.firebaseapp.com",
    projectId: "whatsappclone-10aa7",
    storageBucket: "whatsappclone-10aa7.appspot.com",
    messagingSenderId: "337514592930",
    appId: "1:337514592930:web:f749536ae3a7c95b2a75fb",
    measurementId: "G-89K0QC5GX7",
  };
  

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;