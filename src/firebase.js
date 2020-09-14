import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDtw53kny5DSRYzm1X4cEnsDRWtrXcmxUE",
  authDomain: "clone-app-a4060.firebaseapp.com",
  databaseURL: "https://clone-app-a4060.firebaseio.com",
  projectId: "clone-app-a4060",
  storageBucket: "clone-app-a4060.appspot.com",
  messagingSenderId: "920153377945",
  appId: "1:920153377945:web:14583889e35738fccd3c08",
  measurementId: "G-EVE7WYGN5Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

