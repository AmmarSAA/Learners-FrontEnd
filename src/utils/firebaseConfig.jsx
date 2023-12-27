// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP_hUaQY34p_5P7w1XNzq22ZoLsgWKPy4",
  authDomain: "learners-6f6e2.firebaseapp.com",
  projectId: "learners-6f6e2",
  storageBucket: "learners-6f6e2.appspot.com",
  messagingSenderId: "318542340983",
  appId: "1:318542340983:web:b1a3b4e786fbf281127772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);