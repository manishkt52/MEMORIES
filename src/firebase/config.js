// import * as firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';

// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import firebase from "firebase/app";
// import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDfP5adxaz4A2us-EOtcMDr_9Msu7h1v5A",
  authDomain: "memories-f38aa.firebaseapp.com",
  projectId: "memories-f38aa",
  storageBucket: "memories-f38aa.appspot.com",
  messagingSenderId: "1045977403282",
  appId: "1:1045977403282:web:b1a1313bc166cdd3c6bb4b",
  measurementId: "G-KMZ0MMFXVZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };