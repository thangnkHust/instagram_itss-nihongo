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
export const auth = firebase.auth();
export default firebase;

export const getFirebaseUsers = async () => {
  try {
    const snapshot = await db
      .collection("users")
      .get();
    const users = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return users;
  } catch (err) {
    console.log(err);
    return [];
  }
}
