import firebase from 'firebase';
require("@firebase/firestore")

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLk1AA61wPLqo1RPCst-XnIB9wSMqjM9s",
  authDomain: "story-hub-bcd26.firebaseapp.com",
  projectId: "story-hub-bcd26",
  storageBucket: "story-hub-bcd26.appspot.com",
  messagingSenderId: "667219701898",
  appId: "1:667219701898:web:2345c20157498cf403fd73",
  measurementId: "G-GW8R1G41PT"
};
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();