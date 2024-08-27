// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAwWpt7YKe1n87N3b16SuDX0Z7Cc9sWX0",
  authDomain: "esp-firebase-demo-9b4e0.firebaseapp.com",
  databaseURL: "https://esp-firebase-demo-9b4e0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "esp-firebase-demo-9b4e0",
  storageBucket: "esp-firebase-demo-9b4e0.appspot.com",
  messagingSenderId: "34929381251",
  appId: "1:34929381251:web:9c7be7ab2453755d1370b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Export the auth and database references
export { auth, googleProvider, database };
