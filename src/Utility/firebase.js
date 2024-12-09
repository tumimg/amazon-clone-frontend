// we're importing the core Firebase library, as well as the
// functions for authentication and the Firestore database
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPYXkc2tSiodefwv9vfYDSZWn9ucvK--I",
  authDomain: "clone-740b9.firebaseapp.com",
  projectId: "clone-740b9",
  storageBucket: "clone-740b9.firebasestorage.app",
  messagingSenderId: "279150515562",
  appId: "1:279150515562:web:d2ab140d66feff79780113",
};

// Initialize the Firebase app. This creates a new instance of the Firebase app, which is the entry point for all  Firebase functionality
const app = firebase.initializeApp(firebaseConfig);

// Get the authentication service for signing in and out of your app
export const auth = getAuth(app);

// Get the Firestore database for storing and retrieving data
export const db = app.firestore();
