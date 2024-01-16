// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5xBcRvxzYRGnoBwvAIOKAzZlZpjss3GI",
  authDomain: "netflixgpt-d4422.firebaseapp.com",
  projectId: "netflixgpt-d4422",
  storageBucket: "netflixgpt-d4422.appspot.com",
  messagingSenderId: "744410014885",
  appId: "1:744410014885:web:bd68da54120db8888a994c",
  measurementId: "G-BMQKE3T7V6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
