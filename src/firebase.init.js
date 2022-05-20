
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLCb-hU-9pSrZ30l805sbvjyQVSA-7HtU",
  authDomain: "doctors-portal-3fa8f.firebaseapp.com",
  projectId: "doctors-portal-3fa8f",
  storageBucket: "doctors-portal-3fa8f.appspot.com",
  messagingSenderId: "82271926913",
  appId: "1:82271926913:web:1b1e0e394913deec36eb80"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;