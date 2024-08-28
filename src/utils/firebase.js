// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb81Mso8aueqpcJQ2nEuHXoQWcUwyx8UQ",
  authDomain: "netflixgpt-85662.firebaseapp.com",
  projectId: "netflixgpt-85662",
  storageBucket: "netflixgpt-85662.appspot.com",
  messagingSenderId: "272481404340",
  appId: "1:272481404340:web:b0d7b2c2c6dfe0d40b1ee1",
  measurementId: "G-1TM4B8KL9C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
