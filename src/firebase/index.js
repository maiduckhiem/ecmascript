import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAzEYP8rq7UhnpgV2jasCPmMJE2cC1ial0",
  authDomain: "image-8a0a8.firebaseapp.com",
  projectId: "image-8a0a8",
  storageBucket: "image-8a0a8.appspot.com",
  messagingSenderId: "686712913729",
  appId: "1:686712913729:web:7775818e960b3fa68d2bc0",
  measurementId: "G-XR5VQ1CKQG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;