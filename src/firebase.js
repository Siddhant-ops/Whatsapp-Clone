import firebase from "firebase";
import firebaseConfig from "./FirebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const Google__provider = new firebase.auth.GoogleAuthProvider();

export { auth, Google__provider };
export default db;
