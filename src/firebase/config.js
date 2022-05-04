 import firebase from "firebase/app";
 import "firebase/firestore";
 import 'firebase/auth';
 import 'firebase/storage'

 //Requirement 7.0.0

 const firebaseConfig = {
   apiKey: "AIzaSyDjyTcq3Y7uenkFWKypKn8rUDGJeQKqyUI",
   authDomain: "healthy-habit-tracker-1f519.firebaseapp.com",
   databaseURL: "https://healthy-habit-tracker-1f519-default-rtdb.firebaseio.com",
   projectId: "healthy-habit-tracker-1f519",
   storageBucket: "healthy-habit-tracker-1f519.appspot.com",
   messagingSenderId: "792476244488",
   appId: "1:792476244488:web:681520beb5aa8601e68fbd",
   measurementId: "G-5G5QVF87T4"
 };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }