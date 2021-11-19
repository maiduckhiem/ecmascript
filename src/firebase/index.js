import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDbUBQzyIELqhZPi3KolsF8Zf9mCI9CWdQ",
  authDomain: "product-f993e.firebaseapp.com",
  databaseURL: "https://product-f993e-default-rtdb.firebaseio.com",
  projectId: "product-f993e",
  storageBucket: "product-f993e.appspot.com",
  messagingSenderId: "665779797237",
  appId: "1:665779797237:web:a9d7acc9fff257a10b59bc",
  measurementId: "G-T585RVG9ZV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;