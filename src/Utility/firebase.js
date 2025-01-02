import firebase from "firebase/compat/app";
//to require authentication service from firebase
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCobqjh-ODly_emJNHyOVhMp8mrGrXf1uM",
  authDomain: "clone-165c5.firebaseapp.com",
  projectId: "clone-165c5",
  storageBucket: "clone-165c5.firebasestorage.app",
  messagingSenderId: "1095278112603",
  appId: "1:1095278112603:web:7e3c504e0283d0fc21347e"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
