// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkgtJ2K-34gKn-XBzVOlN3CBccDoz4bHg",
  authDomain: "fir-chat-6c342.firebaseapp.com",
  databaseURL: "https://fir-chat-6c342-default-rtdb.firebaseio.com",
  projectId: "fir-chat-6c342",
  storageBucket: "fir-chat-6c342.appspot.com",
  messagingSenderId: "868152686736",
  appId: "1:868152686736:web:e12dabb95da793de76c015",
  measurementId: "G-6RKNT61VHY"
};

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var db = getFirestore()

export  {app, db};