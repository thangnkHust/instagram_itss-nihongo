import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBGQsindl6orNT-MJfASwf193VtYiInJlQ",
  authDomain: "instagram-itss-nihongo-21826.firebaseapp.com",
  projectId: "instagram-itss-nihongo-21826",
  storageBucket: "instagram-itss-nihongo-21826.appspot.com",
  messagingSenderId: "988696459086",
  appId: "1:988696459086:web:b0ae5fb5e608694b14901f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
