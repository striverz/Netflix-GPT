// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQM4coNcC4w58Im_oO9N8XvLgQEvBu7hw",
  authDomain: "netflixgpt-9294c.firebaseapp.com",
  projectId: "netflixgpt-9294c",
  storageBucket: "netflixgpt-9294c.appspot.com",
  messagingSenderId: "821087373906",
  appId: "1:821087373906:web:3b887f59a06077341ced8b",
  measurementId: "G-KYPZ0J494W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();