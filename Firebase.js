// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpniY3gK84WDDjHQMJvBT0qeHTRl7aYLw",
  authDomain: "movieheist-ad443.firebaseapp.com",
  projectId: "movieheist-ad443",
  storageBucket: "movieheist-ad443.appspot.com",
  messagingSenderId: "253684651730",
  appId: "1:253684651730:web:d539e1c72d359040263f0b",
  measurementId: "G-92EHWVC1QG",
  databaseURL:"https://movieheist-ad443-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;