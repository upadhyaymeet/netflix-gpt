// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_9yDvHqkUBsGGVytHTll_FrQFzXjMylw",
  authDomain: "netflixgpt-49ab2.firebaseapp.com",
  projectId: "netflixgpt-49ab2",
  storageBucket: "netflixgpt-49ab2.appspot.com",
  messagingSenderId: "48531094325",
  appId: "1:48531094325:web:00df74bb2d680d43a1aa7c",
  measurementId: "G-2KDMPZWZWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()