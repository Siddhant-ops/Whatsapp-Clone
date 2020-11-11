import React from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Styles
import styles from "./app.css"; // This uses CSS modules.
import "./firebaseui-styling.global.css"; // Import globally.
import { Button } from "@material-ui/core";

const firebaseConfig = {
  apiKey: "AIzaSyC8KNbtyWu-Xqkaz3ZuQOOUP7nL-jo1SXM",
  authDomain: "whatsapp-d3cf6.firebaseapp.com",
  databaseURL: "https://whatsapp-d3cf6.firebaseio.com",
  projectId: "whatsapp-d3cf6",
  storageBucket: "whatsapp-d3cf6.appspot.com",
  messagingSenderId: "169007254408",
  appId: "1:169007254408:web:6ba3f5d216cb626c34483d",
  measurementId: "G-7XHVJW0QFB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

class SignInScreen extends React.Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Googleas auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <i className={styles.logoIcon + " material-icons"}></i> My App
        </div>
        <div className={styles.caption}>This is a cool demo app</div>
        {this.state.isSignedIn !== undefined && !this.state.isSignedIn && (
          <div>
            <StyledFirebaseAuth
              className={styles.firebaseUi}
              uiConfig={this.uiConfig}
              firebaseAuth={firebaseApp.auth()}
            />
          </div>
        )}
        {this.state.isSignedIn && (
          <div className={styles.signedIn}>
            Hello {firebaseApp.auth().currentUser.displayName}. You are now
            signed In!
            <Button
              className={styles.button}
              onClick={() => firebaseApp.auth().signOut()}
            >
              Sign-out
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export { auth, provider };
export default db;
export { SignInScreen };
