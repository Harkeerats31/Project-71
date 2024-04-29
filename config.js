import firebase from "firebase";
require("@firebase/firestore");

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfaqcuC6Ot7UHMa0zU7zpAXvVUMRLGKfk",
  authDomain: "e-bike-7c387.firebaseapp.com",
  databaseURL: "https://e-bike-7c387-default-rtdb.firebaseio.com",
  projectId: "e-bike-7c387",
  storageBucket: "e-bike-7c387.appspot.com",
  messagingSenderId: "861446105373",
  appId: "1:861446105373:web:eff794dae7613f80bc59f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
